# MX-5 NC1 Wheel Alignment

Personal reference document for wheel alignment targets on my Mazda MX-5 NC1.

All values below are **targets** (not measured results). Toe values are noted **per side** unless stated otherwise.

---

## Preset: Flyin Miata (Suggested)

### Front
- Caster: 5.0°
- Camber: -1.0°
- Toe-in (per side): 1/32" (0.075° / 4.5′)

### Rear
- Camber: -1.5°
- Toe-in (per side): 1/32" (0.075° / 4.5′)

---

## Preset: Fast Road Alignment (Suggested)

### Front
- Caster: 5.0°
- Camber: -1.2°
- Toe-in (per side): 4′ (≈ 0.067°)

### Rear
- Camber: -1.5°
- Toe-in (per side): 4′ (≈ 0.067°)

---

## Preset: Consolidated Middle Ground (Average)

Average of the two presets above.

### Front
- Caster: 5.0°
- Camber: -1.1°
- Toe-in (per side): 4.25′ (≈ 0.0708°)

### Rear
- Camber: -1.5°
- Toe-in (per side): 4.25′ (≈ 0.0708°)

---

## Quickstart: Achieve the Consolidated Spec (what to measure on the car)

This quickstart is intentionally **mm-first** and assumes:
- You’re using a **string box** and **plumb line at each wheel**.
- Your “pointer” is where the plumb line **just touches the inner surface of the string**.
- Your reference surface is the **outer rim edge** (as you’ve been doing).
- Wheel diameter (outer edge to outer edge): **469 mm**.
- Tools: ruler / vernier calipers / micrometer. A digital angle finder is **optional** for cross-checking only.

Conventions used here:
- **Toe-in target (per wheel, string outside wheels):** front rim-to-string distance should be **larger** than the rear rim-to-string distance by the mm amount listed.
- If you ever run the string **inside** the wheels instead, the direction flips (the same toe-in magnitude will show with opposite sign depending on which subtraction you use).
- **Camber target (per wheel, plumb line outside wheel):** top rim-to-plumb distance should be **larger** than the bottom rim-to-plumb distance by the mm amount listed.
	- This yields a **positive mm difference** even though the camber angle is **negative** (wheel is “top-in”).

### Front (targets)
- Toe-in (per wheel): **+0.58 mm**
	- Target readout (recommended): `(front rim→string) - (rear rim→string) = +0.58 mm`
- Camber (per wheel): **~9.0 mm top-in**
	- Target readout: `(top rim→plumb) - (bottom rim→plumb) = +9.0 mm`  
	(positive mm = negative camber)
	- Optional cross-check only: digital angle finder should read roughly **-1.1°**
- Caster (front only): **~5.0° target**
	- Target readout: `C(+15° steer) - C(-15° steer) => |difference| × 1.93 = caster ~5.0°`  
	by performing a ±15° steering sweep (turn front wheels **+15°**, and **-15°**, measuring the camber at each steering angle, then subtracting the two camber values (use absolute value) and multiplying that by **1.93** to get caster in degrees.

### Rear (targets)
- Toe-in (per wheel): **+0.58 mm**
	- Target readout (recommended): `(front rim→string) - (rear rim→string) = +0.58 mm`
- Camber (per wheel): **~12.3 mm top-in**
	- Target readout: `(top rim→plumb) - (bottom rim→plumb) = +12.3 mm`  
	(positive mm = negative camber)
	- Optional cross-check only: digital angle finder should read roughly **-1.5°**

### Quick symmetry checks (targets)
- Left/right camber: match the **mm top-in** as closely as practical (aim for **≤ 1–2 mm** difference side-to-side)
- Left/right toe: match the **mm toe-in** as closely as practical (aim for **≤ 0.1–0.2 mm** difference side-to-side)
- Rear thrust sanity check: rear left/right toe should match closely (if not, re-square the box and re-check rear toe)

---

## Factory / Baseline Dimensions (NC / NC1 PRHT context)

These are useful reference dimensions for setting up a string box and sanity-checking measurements.

### Body / chassis dimensions
- Wheelbase: 2,330 mm
- Overall width: 1,720 mm
- Overall length: 4,020 mm (PRHT) / 4,000 mm (soft-top)
- Overall height: 1,255 mm (PRHT) / 1,240 mm (soft-top)

### Track (track/tread)
- Track width is typically defined **centerline-to-centerline** (center of left tire/wheel to center of right tire/wheel across the axle). It is **not** measured from the outer edges of the rims.
- People often say “hub center to hub center” as shorthand; that’s usually close enough for intuition, but published track specs are fundamentally about the wheel/tire centerlines and can vary slightly by convention and wheel/tire package.
- Front track: 1,490 mm
- Rear track: 1,495 mm

### Wheel / hub / fitment context (common OE-style 17")
- Bolt pattern (PCD): 5×114.3
- Center bore: 67.1 mm
- Typical wheel: 17×7 ET55
- Typical tyre size: 205/45R17
- Wheel nut torque (range shown by some fitment references): 88–118 Nm

### Measured on my car
- Wheel diameter (outer edge to outer edge): 469 mm

### Sources / notes
- Wheelbase + overall dimensions: Wikipedia (Mazda MX-5 (NC))
- Track/tread: Carfolio (2009 Mazda Miata MX-5 specs)
- Fitment metadata: wheel-size.com (NC MX-5 fitment listings)
- Track and some fitment details can vary by year/market/trim; treat these as starting points and prefer measuring what’s actually on the car when precision matters.

## DIY: String Box Method (At-Home Alignment)

This section describes how I do a basic toe (and sanity-check camber) alignment at home using a “string box”.

### My current setup
- The car sits on **wheel cribs** so the wheels can be turned/adjusted with the suspension loaded.
- I use **two PVC pipes** (front + rear) as crossbars.
- I run **two string lines** along the sides of the car (left + right) tied to the PVC crossbars, forming a rectangle (“box”).
- At each wheel I use a **plumb line** as a pointer so I can read measurements precisely where the plumb line *just touches the inner surface* of the box string line.

### Tools & materials
- 2 × long strings (low-stretch line is best)
- 2 × PVC crossbars (front and rear)
- Tape measure / steel ruler / calipers (mm resolution helps)
- Plumb bob (or a weighted nut on thin line)
- Jack + wheel cribs + (optional) turn plates / slip plates
- Wrenches for tie rods and rear toe adjusters
- Chalk / masking tape + marker (to label reference points)

### Important notes (repeatability)
- Do this on the **flattest surface** you can.
- Set tire pressures, then **roll the car forward/back** and bounce each corner to settle the suspension before measuring.
- Center the steering wheel and lock it (seat belt trick works) so toe changes don’t “move the goal posts”.
- Measure toe in **mm at the rim** if possible; it’s easier to hit consistently than converting to degrees.
- Using the rim edge in the string method is just a convenient reference surface; the alignment angles still describe the wheel’s centerline direction.

### 1) Build the string box
1. Place the front PVC pipe ahead of the front bumper area and the rear PVC pipe behind the rear bumper area.
2. Tie a string line down each side of the car between the PVC pipes.
3. Adjust the strings so they are **tight** and at **hub height** (or as close as you can manage consistently).

### 2) Square the box to the car (make strings parallel to the chassis)
Goal: the left and right strings should be **parallel to the car’s centerline**, not necessarily parallel to the wheels.

Two common ways (pick one and be consistent):

**Method A — Reference the rear track (simple & common):**
1. On the rear wheels, measure from the string to the **rear rim lip** at the front and rear edge of the rim (same height each time).
2. Adjust the left and right strings until the string-to-rim distance is **equal on both sides** (left vs right) and consistent front/rear for the rear axle. This makes the strings parallel to the rear axle.

**Method B — Center the box about the car:**
1. Pick repeatable chassis points (e.g., pinch weld seams) near the front and rear.
2. Measure from each string to those points and adjust until the chassis is **centered** within the box.

Tip: write down your chosen reference points so you can recreate the same baseline next time.

### 3) Measure toe at each wheel using the string
You’re measuring the wheel’s angle relative to the string line.

1. At a wheel, measure from the string to the **front edge of the rim** and to the **rear edge of the rim** at the same height.
2. Compute: `toe_mm = front_distance - rear_distance`
	- With a typical string setup (string line **outside** the wheels):
		- Toe-in gives `front_distance > rear_distance`, so `toe_mm` will be **positive**.
		- If you use the opposite subtraction (`rear - front`), the same toe-in reads as a **negative** number — either convention works as long as you're consistent.
	- The important thing is being consistent about which subtraction you use.

Because I use a plumb line as a pointer:
- Hold/position the plumb line so it’s vertical, and adjust it so it **just touches the inner surface** of the string line.
- Measure from the plumb line to the rim edge (or use it to transfer the string position to your ruler) the same way every time.

### 4) Adjust toe

**Front (tie rods):**
- Loosen jam nuts, adjust each side in small steps, re-tighten lightly, settle suspension, and re-measure.
- Try to keep the steering wheel centered by making **equal and opposite** adjustments left vs right when you’re dialing total toe.

**Rear (toe adjusters):**
- Adjust the rear toe eccentric/links (depending on your NC1 hardware), settle suspension, and re-measure.
- Keep left/right rear toe symmetrical unless you’re chasing a thrust-angle issue.

### 5) Re-check and lock it in
- After hitting targets, tighten all fasteners to spec.
- Re-check measurements after final tighten (things can move).
- Do a short drive around the block, re-settle, and do a quick verification pass.

### Quick troubleshooting
- Numbers jump around: strings not tight, car not settled, measuring at different heights, or the wheel is being nudged while measuring.
- Can’t center steering wheel: you changed toe unevenly side-to-side; re-balance by splitting changes evenly.
- Rear feels “crabby”: rear toe mismatch or thrust angle; re-square strings and re-check rear toe symmetry.

---

## Calculations & examples (how the Quickstart mm numbers are derived)

This section is the “show your work” companion to the Quickstart. It explains how to convert between:
- toe angle (degrees / minutes) ↔ mm difference at the rim (string box)
- camber angle (degrees) ↔ mm “top-in” at the rim (plumb line)

Throughout these examples:
- Wheel diameter used: **D = 469 mm** (outer edge to outer edge).
- If your measurement points are not exactly separated by 469 mm (e.g., you measure inside rim lips), replace **D** with your actual separation **L**.

### 1) Toe: angle ↔ mm at the rim

#### What the string box is measuring
At a given wheel you measure (at the same height):
- `front` = distance from string (via plumb) to the **front edge** of the rim
- `rear` = distance from string (via plumb) to the **rear edge** of the rim

The raw toe readout is:
- `toe_mm = front - rear`

Sign convention used in this document:
- `toe_mm > 0` means **toe-in** (front of rim is further from the string than the rear)
- `toe_mm < 0` means **toe-out**

#### Convert toe angle to mm
If the two measurement points are separated by **L** (mm), then:

$$\text{toe\_mm} = L \cdot \tan(\theta)$$

Where:
- $\theta$ is the toe angle of that wheel (in radians or degrees, as long as you use tan consistently)
- $L$ is typically your effective “diameter” between the two rim points you used

For small angles (which alignment toe always is):

$$\tan(\theta) \approx \theta_{rad}$$

So a handy approximation is:

$$\text{toe\_mm} \approx L \cdot \theta_{rad}$$

#### Worked example: 4.25′ toe-in per wheel → mm
1. Convert minutes to degrees:
	- $4.25' = 4.25/60 = 0.070833\ldots^\circ$
2. Convert degrees to radians:
	- $\theta_{rad} = 0.070833\ldots \times \pi/180 \approx 0.0012366$
3. Convert to mm at the rim using $L = 469$ mm:
	- $\text{toe\_mm} = 469 \cdot \tan(0.0012366) \approx 469 \cdot 0.0012366 \approx 0.58$ mm

That’s where the Quickstart target **+0.58 mm** comes from.

#### Convert mm back to toe angle (useful for sanity checks)

$$\theta = \arctan(\text{toe\_mm}/L)$$

Example: if you measure `toe_mm = +0.58` at `L = 469`:
- $\theta = \arctan(0.58/469) \approx 0.0012366$ rad $\approx 0.0708^\circ \approx 4.25'$.

#### “Per wheel” vs “total toe”
This document’s targets are **per side / per wheel**. If you want total toe for an axle:
- `total_toe_mm ≈ left_toe_mm + right_toe_mm`
- If both sides match, `total_toe_mm ≈ 2 × toe_mm_per_wheel`

### 2) Camber: angle ↔ mm “top-in” at the rim

#### What the plumb-line method is measuring
At a wheel, you hang a plumb line and measure horizontal distance to the rim:
- `top` = distance from plumb line to rim edge near the top
- `bottom` = distance from plumb line to rim edge near the bottom

With negative camber (“top-in”), the top is tucked inboard relative to the bottom (with the plumb line outside the wheel), so:
- `top - bottom` is positive.

#### Convert camber angle to mm
Using measurement points separated by **L** (mm) vertically on the rim, the horizontal difference is:

$$\Delta = L \cdot \sin(|\phi|)$$

For small angles you’ll also see $L \cdot \tan(|\phi|)$ used; at 1–2° the difference is negligible.

Where:
- $\phi$ is camber angle in radians/degrees
- $\Delta$ is the “top-in” magnitude in mm (i.e., `top - bottom`)

#### Worked example: -1.1° camber → mm top-in
- $\Delta = 469 \cdot \sin(1.1^\circ)$
- $\sin(1.1^\circ) \approx 0.019197$
- $\Delta \approx 469 \cdot 0.019197 \approx 9.0$ mm

So the Quickstart uses **~9.0 mm top-in** for the front.

#### Worked example: -1.5° camber → mm top-in
- $\Delta = 469 \cdot \sin(1.5^\circ)$
- $\sin(1.5^\circ) \approx 0.026177$
- $\Delta \approx 469 \cdot 0.026177 \approx 12.3$ mm

So the Quickstart uses **~12.3 mm top-in** for the rear.

#### Convert mm back to camber angle

$$|\phi| = \arcsin(\Delta/L)$$

Example: if you measure `top - bottom = 9.0 mm` at `L = 469 mm`:
- $|\phi| = \arcsin(9.0/469) \approx 1.1^\circ$.

### 3) Practical notes about measurement geometry

- The key to accurate conversion is using the **true separation L** between your two measurement points.
  - Toe: the front/rear points you pick on the rim define **L**.
  - Camber: the top/bottom points you pick on the rim define **L**.
- If you use the *outer* rim edge and truly measure top-to-bottom and front-to-rear, then **L ≈ 469 mm**.
- If you measure inside lips, or you can’t reach the true top/bottom, measure your actual **L** and recalc the targets.

---

## DIY caster measurement (15° sweep / camber-change method)

This is the practical DIY way to *measure* front caster at home without an alignment rack.

### Quick reference target (front caster)
- Target: **~5.0°**
- Priority: **match left/right** more than chasing an exact number
	- Suggested cross-caster goal: **≤ 0.3°**
	- If you can’t adjust caster easily: at least measure it so you know what you’re working with.

### Quick measurement (TL;DR)
Per side:
1. Steer to **+15°** and record camber $C_{+15}$.
2. Steer to **-15°** and record camber $C_{-15}$.
3. Compute $|\Delta C| = |C_{+15} - C_{-15}|$.
4. Compute caster: **Caster (deg)** $\approx 1.93 \times |\Delta C|$.

### The core idea
When you steer a wheel left/right by a known amount, the wheel’s camber reading changes due to caster.
If you measure camber at **+15°** and **-15°** steering angles, the difference in camber lets you calculate caster.

### What you need
- A way to steer each front wheel accurately to **±15°** from straight ahead
	- Ideal: real turn plates with degree scales.
	- DIY: two “slip plates” (greased plates / trash bags between boards) + a printed protractor scale + a pointer.
- A camber measuring tool
	- Best: camber gauge.
	- Works: a digital angle finder if you can mount it repeatably (commonly on the brake disc/rotor face with the wheel removed).
- Flat-ish surface, correct tire pressures, and time to repeat measurements.

### Setup notes (important for repeatability)
- Put the front wheels on slip/turn plates so the tires can rotate without binding.
- Set the steering wheel exactly centered at the “straight ahead” position.
- Settle the suspension (roll forward/back a little and bounce each corner).
- Keep ride height constant during the sweep (don’t jack, don’t move the car, don’t re-position on the plates).

### Step-by-step measurement procedure (per side)
1. **Straight-ahead zero:** set the wheel straight. (You don’t need the camber at 0°, but it’s a good sanity check.)
2. **Turn to +15°:** steer that wheel to **+15°** from straight ahead and record the camber reading.
	- Call this $C_{+15}$.
3. **Turn to -15°:** steer to **-15°** from straight ahead and record the camber reading.
	- Call this $C_{-15}$.
4. Compute camber change:
	- $\Delta C = C_{+15} - C_{-15}$
	- Use the magnitude $|\Delta C|$ if you only care about caster magnitude.
5. Compute caster (approx):

$$\text{Caster} \;\approx\; \frac{|\Delta C|}{2\,\sin(\theta)}$$

Where:
- $\theta$ is the sweep angle (use **15°** here)
- all angles are in **degrees** (or all in radians — just be consistent)

For $\theta = 15^\circ$:

$$2\,\sin(15^\circ) \approx 0.5176 \;\;\Rightarrow\;\; \text{Caster} \approx 1.932 \times |\Delta C|$$

### Worked example (what numbers to expect)
If your car is around the target **5.0°** caster and you use a 15° sweep:

$$|\Delta C| \approx 2 \times 5.0^\circ \times \sin(15^\circ) \approx 2.59^\circ$$

So you should expect roughly **2.6°** camber difference between the +15° and -15° readings.

### Interpretation and sanity checks
- If you get wildly different results run-to-run (e.g., >0.3–0.5° caster swing), it’s usually:
	- steering angle not actually ±15°,
	- tire binding (no slip plates),
	- camber gauge not mounted consistently,
	- suspension not settled.
- If left/right caster differs a lot, the car may pull or self-center differently side-to-side.

### If you plan to adjust caster
- On the NC, caster adjustments (where available) often interact with camber and toe.
- Expect to re-check in this order after any caster change:
	1) caster,
	2) camber,
	3) toe.
