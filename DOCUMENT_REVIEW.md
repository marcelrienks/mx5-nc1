# MX-5 NC1 Alignment Documents — Review Report

## Executive Summary
Reviewed 4 documents (1 Markdown, 3 HTML reports). **Overall quality is good**, but identified several inconsistencies, verbose sections, and data redundancy issues.

---

## Issues Found

### 1. MARKDOWN: Verbose Content Duplication
**File:** `MX5 NC1 Home Alignment.md`
**Severity:** Medium

#### Issue 1.1: Excessive repetition in measurement method explanation
- **Lines 159-177** (Toe measurement procedure with subtraction explanation)
- **Lines 175-177** explain the subtraction direction, then immediately repeat the same concept again
- **Recommendation:** Consolidate these lines into one clear explanation

#### Issue 1.2: Redundant "Quick reference target" section
- **DIY caster measurement section** (line ~340+) starts with "Quick reference target (front caster) - Target: ~5.0°"
- **This is already defined** in the "Quickstart" section at line 95
- **Recommendation:** Reference the earlier definition instead of repeating it

#### Issue 1.3: Verbose explanatory text
- **Lines 330-335** contain lengthy explanation about "Track width definition" that could be 2 sentences instead of 5
- Example: The track width explanation explains "People often say..." which is tertiary information for a personal reference document
- **Recommendation:** Remove "people often say..." and direct reader to the published dimension

#### Issue 1.4: Overly detailed "Important notes" section
- **Lines 185-193** (Repeatability notes under DIY String Box Method)
- Contains 5 separate bullet points, many of which could be combined
- **Recommendation:** Consolidate from 5 bullets to 3 core points

---

### 2. MARKDOWN: Inconsistent Notation & Terminology
**File:** `MX5 NC1 Home Alignment.md`
**Severity:** Low-Medium

#### Issue 2.1: Mixed angle notation
- **Line 14:** "1/32" (0.075° / 4.5′)" — mixes inches, degrees, and minutes without consistent formatting
- **Line 22:** "4′ (≈ 0.067°)" — minutes format without degree symbol for clarity
- **Recommendation:** Standardize to "X.XXX° or X′" format throughout (either show both with clear conversion or pick one)

#### Issue 2.2: Inconsistent variable naming in formulas
- **Lines 249-363:** Uses $\theta$ for toe angle, but switches context without always clarifying "per wheel"
- **Line 267:** Example uses "4.25 minutes" notation, but earlier sections use "4′"
- **Recommendation:** Pick one notation and stick to it (e.g., always use 4.25′ for minutes)

#### Issue 2.3: "Top-in" vs "negative camber" terminology
- **Lines 65-69** introduce "top-in" for negative camber
- **Lines 296-298** redefine it again in the calculations section
- **Recommendation:** Define once upfront and reference that definition

---

### 3. MARKDOWN: Data Precision Inconsistencies
**File:** `MX5 NC1 Home Alignment.md`
**Severity:** Low

#### Issue 3.1: Rounding inconsistency
- **Line 47:** "0.070833…°" (6 decimal places shown)
- **Line 55:** "≈ 0.0708°" (4 decimal places)
- **Line 77:** "0.0708°" (4 decimal places)
- **Recommendation:** Settle on 2-3 decimal places for target specs (4+ decimals are meaningless given measurement tool precision)

#### Issue 3.2: Mixed significant figures
- **Camber target:** "−1.1°" (2 sig figs)
- **Toe-in target:** "4.25′" (3 sig figs)
- **Caster target:** "5.0°" (2 sig figs)
- **Recommendation:** Use 2-3 significant figures consistently

---

### 4. HTML REPORTS: Redundancy Across Three Reports
**Files:** All three `front right *.html` reports
**Severity:** Medium

#### Issue 4.1: Massive code duplication
- **front right camber report.html** (1066 lines)
- **front right caster report.html** (1039 lines)
- **front right consolidated report.html** (1084 lines)
- Each file contains **full CSS duplicated** (~130 lines per file)
- Each file contains **Chart.js library import** (redundant if served together)
- **Recommendation:** Extract common CSS into a shared stylesheet; use CSS variable overrides per report type

#### Issue 4.2: JavaScript function duplication
- Each HTML file redefines helper functions:
  - `washerSVGAngle()`
  - `expandToFull()` / `expandTo13()`
  - Chart plugins (multiple identical chart plugins across files)
- **Recommendation:** Create a shared `shared-functions.js` file

#### Issue 4.3: Data duplication in JavaScript
- **Raw measurement data** (washer positions, offset readings) is hardcoded in each HTML file
- If any measurement is corrected, **all three files must be updated manually**
- **Recommendation:** Extract data to JSON file (`data.json`) and load it into all three reports

---

### 5. HTML REPORTS: Scope/Intent Confusion
**Files:** All HTML reports
**Severity:** Medium

#### Issue 5.1: Three overlapping reports
- **camber report:** Shows camber vs washer position
- **caster report:** Shows caster vs washer position
- **consolidated report:** Shows both camber AND caster trade-offs
- **Problem:** The "consolidated" report makes the other two redundant for someone trying to make a decision
- **Recommendation:** 
  - Option A: Keep only camber + caster in separate reports, drop consolidated
  - Option B: Make consolidated the primary decision tool and archive camber/caster as detailed deep-dives
  - Option C: Add explicit "use consolidated report for final decision" note in camber/caster reports

#### Issue 5.2: "Right Front Wheel" scope limitation
- All three reports are titled "Right Front Wheel"
- **No reports exist for left front, rear left, rear right**
- **Problem:** Incomplete analysis; user must manually inspect left front and rear wheels
- **Recommendation:** Add a note like "This analysis applies to the right front as a template; repeat for left front and rear"

---

### 6. HTML REPORTS: Verbose / Non-Essential Content
**Files:** All three reports
**Severity:** Low

#### Issue 6.1: Measurement method notation boxes (Sections 02)
- **front right caster report.html, Section 2:** "Measurement Method" formula box is ~10 lines
- Contains step-by-step formula, but this is already in the markdown document (DIY caster section)
- **Recommendation:** Link to markdown instead or summarize to 2 lines max

#### Issue 6.2: Over-detailed data tables
- **front right caster report.html, Section 05:** Full measurement table with 7 columns per row
- Shows raw data (top/bottom at ±15°) AND derived columns
- Most users only need the final caster reading, not the row-by-row calculation
- **Recommendation:** Show only configuration + final caster result; hide raw offsets in collapsible detail section

#### Issue 6.3: Redundant legend/explanation text
- Each chart includes explanatory text below about what the chart shows
- This explanation is already in the section heading and subtitle
- **Recommendation:** Move detailed explanation to the section subtitle only

---

### 7. DESIGN & PRESENTATION ISSUES
**Files:** All HTML reports
**Severity:** Low-Medium

#### Issue 7.1: Inconsistent color coding across reports
- **Camber report:** Uses color scheme for washer positions (teal, blue, cyan)
- **Caster report:** Uses different color scheme (teal, blue, cyan) — appears the same
- **Consolidated report:** Uses *additional* colors (green, orange, purple)
- **Problem:** No consistent legend explaining what each color means across the suite
- **Recommendation:** Create a shared color legend page or use consistent HTML comments documenting the scheme

#### Issue 7.2: Dial diagrams are decorative but not actionable
- **Section 04/05 in multiple reports:** Show washer position as SVG dials
- The dials look nice but add ~100 lines of SVG code
- A simple "Washer position: −6, 0, or +6 segments" text label is functionally equivalent
- **Recommendation:** Replace decorative dials with simple text labels to reduce file size by 10%

#### Issue 7.3: Charts don't zoom/interact on mobile
- Charts are responsive but data points aren't clickable/hoverable on touch devices
- Users on mobile can't read exact values from the charts
- **Recommendation:** Add data labels directly on chart lines, or provide data table alongside charts

---

### 8. MARKDOWN: Missing or Incomplete Sections
**File:** `MX5 NC1 Home Alignment.md`
**Severity:** Low

#### Issue 8.1: No maintenance schedule
- Document doesn't mention how often to re-check alignment
- **Recommendation:** Add "Re-check alignment after: suspension changes, curb impacts, tire changes, every 12 months"

#### Issue 8.2: No troubleshooting guide for measurement issues
- The "Quick troubleshooting" section (lines 330-332) is too brief
- **Recommendation:** Expand with: "If readings are inconsistent: suspect string tension, suspension settling, wheel nudging, or plumb line not vertical"

#### Issue 8.3: No safety warnings
- **Recommendation:** Add safety note about working under car (use wheel cribs, not just jacks)

---

### 9. FILE ORGANIZATION
**Workspace:** `~/make/mx5-nc1/`
**Severity:** Low

#### Issue 9.1: HTML reports in same directory as markdown reference
- All alignment documents mixed in one folder
- No clear distinction between "reference guide" (markdown) and "analysis reports" (HTML)
- **Recommendation:** Organize as:
  ```
  alignment/
  ├── reference/
  │   └── MX5 NC1 Home Alignment.md
  ├── reports/
  │   ├── front-right-camber.html
  │   ├── front-right-caster.html
  │   └── front-right-consolidated.html
  ├── data/
  │   └── measurements.json
  └── styles/
      └── shared.css
  ```

---

## Summary Table

| Issue | Severity | File(s) | Type | Fix Effort |
|-------|----------|---------|------|-----------|
| Redundant "caster target" definition | Medium | MD | Consolidation | 5 min |
| Verbose track width explanation | Medium | MD | Trim | 5 min |
| Mixed angle notation (°/′ inconsistency) | Medium | MD | Standardize | 15 min |
| CSS duplication across 3 HTML reports | Medium | HTML ×3 | Refactor | 30 min |
| JavaScript function duplication | Medium | HTML ×3 | Refactor | 45 min |
| Data hardcoded in HTML (no JSON extract) | Medium | HTML ×3 | Extract | 20 min |
| Three overlapping reports (unclear intent) | Medium | HTML ×3 | Strategy | 1 hour |
| "Right front only" scope limitation | Low | HTML ×3 | Docs | 10 min |
| Decorative dials add bloat | Low | HTML ×3 | Simplify | 15 min |
| Over-detailed data tables | Low | HTML | Collapse | 10 min |
| No maintenance schedule in markdown | Low | MD | Add section | 10 min |
| Inconsistent decimal places in formulas | Low | MD | Standardize | 5 min |

---

## Recommendations (Priority Order)

### HIGH PRIORITY
1. **Extract JavaScript & CSS to shared files** — Reduce total doc size by ~30%, simplify maintenance
2. **Extract measurement data to JSON** — Single source of truth for measurements
3. **Clarify report intent** — Decide: keep consolidated only, or make camber/caster supplementary detail views
4. **Standardize angle notation** — Pick one: always °, or always ′, or show conversion formula once

### MEDIUM PRIORITY
5. Consolidate duplicate definitions in markdown
6. Trim verbose track width and setup explanations
7. Collapse decorative dials to text labels
8. Add consistent file organization (reference/ reports/ data/ styles/)

### LOW PRIORITY
9. Add maintenance schedule section
10. Expand troubleshooting guide
11. Add safety warnings for DIY work
12. Create cross-report color legend

---

## Estimated Total Fix Time
- **Quick wins (1-2 hours):** Consolidate MD, standardize notation, trim excess text
- **Structural refactor (2-3 hours):** Extract CSS/JS/data, reorganize files
- **Strategy review (1 hour):** Decide on report consolidation approach
- **Total: 4-6 hours** for comprehensive cleanup

---

*Review Date: March 8, 2026*
