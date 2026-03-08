(function () {
  const source = window.ALIGNMENT_DATA;
  if (!source || !source.measurements) {
    throw new Error('ALIGNMENT_DATA is not loaded. Include js/alignment-data.js before js/alignment-shared.js.');
  }

  const measurements = source.measurements;
  const constants = source.constants;
  const BASE_MM_PER_DEG = Number(constants.mmPerDegree);
  const SWEEP_K = 1.93;
  const REPORT_CONFIG = {
    frontLeft: {
      key: 'frontLeft',
      displayName: 'Front Left',
      casterLockedFront: 0,
      casterTargetSign: 1,
    },
    frontRight: {
      key: 'frontRight',
      displayName: 'Front Right',
      casterLockedFront: 2,
      casterTargetSign: -1,
    },
  };

  function round(value, digits) {
    const factor = 10 ** digits;
    return Math.round(value * factor) / factor;
  }

  function formatNumber(value, digits) {
    if (Number.isInteger(value)) {
      return String(value);
    }
    return value.toFixed(digits).replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');
  }

  function formatSigned(value, digits, suffix) {
    const numericValue = Number(value);
    const prefix = numericValue > 0 ? '+' : '';
    return `${prefix}${formatNumber(numericValue, digits)}${suffix || ''}`;
  }

  function mmToDeg(mm, mmPerDegree) {
    return round(mm / (mmPerDegree || BASE_MM_PER_DEG), 2);
  }

  function findNearestBracket(xs, ys, target) {
    for (let index = 0; index < xs.length - 1; index += 1) {
      const left = ys[index];
      const right = ys[index + 1];
      const brackets = (left >= target && right <= target) || (left <= target && right >= target);
      if (brackets) {
        return [index, index + 1];
      }
    }
    return null;
  }

  function interpolatePoint(xs, ys, targetX) {
    const exactIndex = xs.indexOf(targetX);
    if (exactIndex !== -1) {
      return round(ys[exactIndex], 2);
    }

    for (let index = 0; index < xs.length - 1; index += 1) {
      const x0 = xs[index];
      const x1 = xs[index + 1];
      const inRange = (x0 <= targetX && targetX <= x1) || (x1 <= targetX && targetX <= x0);
      if (!inRange) {
        continue;
      }
      const t = (targetX - x0) / (x1 - x0);
      return round(y0y1(ys[index], ys[index + 1], t), 2);
    }

    return null;
  }

  function y0y1(y0, y1, t) {
    return y0 + (y1 - y0) * t;
  }

  function minCell(matrix, frontPositions, rearPositions) {
    let best = { value: Infinity, rowIndex: -1, colIndex: -1 };
    matrix.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (value < best.value) {
          best = { value, rowIndex, colIndex };
        }
      });
    });

    return {
      value: best.value,
      rowIndex: best.rowIndex,
      colIndex: best.colIndex,
      front: frontPositions[best.rowIndex],
      rear: rearPositions[best.colIndex],
    };
  }

  function getCamberSource(side) {
    const wheel = measurements[side];
    const camber = wheel.camber;
    return {
      side,
      displayName: REPORT_CONFIG[side].displayName,
      targetMm: camber.target.mm,
      targetDeg: camber.target.deg,
      matrix: camber.matrix,
      rawTop: camber.rawTop,
      rawBottom: camber.rawBottom,
      frontPositions: camber.frontPositions,
      rearPositions: camber.rearPositions,
      recommendedFront: camber.recommendedFront,
      recommendedRear: camber.recommendedRear,
      bestMeasuredMm: camber.measured.mm,
      bestMeasuredDeg: camber.measured.deg,
      shortfallMm: camber.shortfall.mm,
      shortfallDeg: camber.shortfall.deg,
      note: camber.note,
      bestCell: minCell(camber.matrix, camber.frontPositions, camber.rearPositions),
      mmPerDegree: BASE_MM_PER_DEG,
    };
  }

  function extractLeftCasterMeasurements(caster) {
    const lockedFront = REPORT_CONFIG.frontLeft.casterLockedFront;
    const washerPositions = [-6, 0, 6];
    const mapByAngle = new Map();

    caster.measurements.forEach((entry) => {
      if (!mapByAngle.has(entry.steerAngle)) {
        mapByAngle.set(entry.steerAngle, new Map());
      }
      mapByAngle.get(entry.steerAngle).set(entry.washer, entry);
    });

    const buildSeries = (steerAngle, field) => washerPositions.map((washer) => {
      const entry = mapByAngle.get(steerAngle).get(washer);
      const positionIndex = entry.camberPos.indexOf(lockedFront);
      return entry[field][positionIndex];
    });

    return {
      washerPositions,
      top_pos15: buildSeries(15, 'top'),
      bot_pos15: buildSeries(15, 'bottom'),
      top_zero: buildSeries(0, 'top'),
      bot_zero: buildSeries(0, 'bottom'),
      top_neg15: buildSeries(-15, 'top'),
      bot_neg15: buildSeries(-15, 'bottom'),
    };
  }

  function extractRightCasterMeasurements(caster) {
    return {
      washerPositions: caster.washerPositions,
      top_pos15: caster.measurements.map((entry) => entry.top_pos15),
      bot_pos15: caster.measurements.map((entry) => entry.bot_pos15),
      top_neg15: caster.measurements.map((entry) => entry.top_neg15),
      bot_neg15: caster.measurements.map((entry) => entry.bot_neg15),
      top_zero: null,
      bot_zero: null,
    };
  }

  function getCasterSource(side) {
    const wheel = measurements[side];
    const caster = wheel.caster;
    const raw = side === 'frontLeft' ? extractLeftCasterMeasurements(caster) : extractRightCasterMeasurements(caster);
    const offset_pos15 = raw.washerPositions.map((_, index) => raw.top_pos15[index] - raw.bot_pos15[index]);
    const offset_neg15 = raw.washerPositions.map((_, index) => raw.top_neg15[index] - raw.bot_neg15[index]);
    const casterDelta = raw.washerPositions.map((_, index) => offset_pos15[index] - offset_neg15[index]);
    const casterDeg = casterDelta.map((delta) => round(Math.abs(delta) / BASE_MM_PER_DEG * SWEEP_K, 2));
    const targetMmSigned = REPORT_CONFIG[side].casterTargetSign * (caster.target * BASE_MM_PER_DEG / SWEEP_K);
    const bracket = findNearestBracket(raw.washerPositions, casterDelta, targetMmSigned);
    const closestIndex = casterDelta.reduce((bestIndex, value, index) => {
      return Math.abs(value - targetMmSigned) < Math.abs(casterDelta[bestIndex] - targetMmSigned) ? index : bestIndex;
    }, 0);

    let recommendedWasher = raw.washerPositions[closestIndex];
    let recommendedDegrees = casterDeg[closestIndex];
    let bracketLo = closestIndex;
    let bracketHi = closestIndex;

    if (bracket) {
      bracketLo = bracket[0];
      bracketHi = bracket[1];
      const y0 = casterDelta[bracketLo];
      const y1 = casterDelta[bracketHi];
      const t = (targetMmSigned - y0) / (y1 - y0);
      recommendedWasher = round(y0y1(raw.washerPositions[bracketLo], raw.washerPositions[bracketHi], t), 1);
      recommendedDegrees = round(y0y1(casterDeg[bracketLo], casterDeg[bracketHi], t), 2);
    }

    return {
      side,
      displayName: REPORT_CONFIG[side].displayName,
      lockedFrontPosition: REPORT_CONFIG[side].casterLockedFront,
      targetDeg: caster.target,
      targetMmSigned,
      washerPositions: raw.washerPositions,
      washerLabels: raw.washerPositions.map((position) => formatSigned(position, 0, '')),
      top_pos15: raw.top_pos15,
      bot_pos15: raw.bot_pos15,
      top_zero: raw.top_zero,
      bot_zero: raw.bot_zero,
      top_neg15: raw.top_neg15,
      bot_neg15: raw.bot_neg15,
      offset_pos15,
      offset_neg15,
      casterDelta,
      casterDeg,
      closestIndex,
      bracketLo,
      bracketHi,
      recommendedWasher,
      recommendedWasherInt: Math.round(recommendedWasher),
      recommendedDegrees,
      note: caster.note,
      range: caster.range,
      sweepAngle: caster.sweepAngle,
      sweepMultiplier: caster.sweepMultiplier,
      mmPerDegree: BASE_MM_PER_DEG,
    };
  }

  function estimateCamberAtSetting(side, frontSetting, rearSetting) {
    const camber = getCamberSource(side);
    const frontIndex = camber.frontPositions.indexOf(frontSetting);
    if (frontIndex === -1) {
      return null;
    }
    return interpolatePoint(camber.rearPositions, camber.matrix[frontIndex], rearSetting);
  }

  function getRearSeriesAtFront(side, frontSetting) {
    const camber = getCamberSource(side);
    const frontIndex = camber.frontPositions.indexOf(frontSetting);
    if (frontIndex === -1) {
      return null;
    }
    return camber.matrix[frontIndex].slice();
  }

  function getSummaryData() {
    return ['frontLeft', 'frontRight'].map((side) => {
      const camber = getCamberSource(side);
      const caster = getCasterSource(side);
      const estimatedCamberAtRecommendation = estimateCamberAtSetting(
        side,
        camber.recommendedFront,
        caster.recommendedWasherInt
      );
      return {
        side,
        displayName: REPORT_CONFIG[side].displayName,
        recommendedFront: camber.recommendedFront,
        recommendedRear: caster.recommendedWasherInt,
        bestCamberMm: camber.bestMeasuredMm,
        bestCamberDeg: camber.bestMeasuredDeg,
        estimatedCamberAtRecommendation,
        estimatedCamberDegAtRecommendation: estimatedCamberAtRecommendation === null ? null : mmToDeg(estimatedCamberAtRecommendation),
        casterAtRecommendation: caster.recommendedDegrees,
      };
    });
  }

  window.AlignmentShared = {
    BASE_MM_PER_DEG,
    SWEEP_K,
    formatNumber,
    formatSigned,
    mmToDeg,
    getCamberSource,
    getCasterSource,
    getRearSeriesAtFront,
    estimateCamberAtSetting,
    getSummaryData,
  };
})();
