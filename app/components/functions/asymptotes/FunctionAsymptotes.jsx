/**
 * FunctionAsymptotes — v1
 *
 * Pick a function, see its asymptotes drawn and labeled:
 *   - Vertical asymptotes (VA)   — red dashed vertical lines
 *   - Horizontal asymptotes (HA) — green dashed horizontal lines
 *   - Oblique asymptotes (OA)    — purple dashed line through the plot
 *
 * All three are detected numerically at every render — slide
 * (a, k, b, h) and the asymptotes move with the transformed g(x).
 *
 * A panel below the graph lists each detected asymptote with its
 * equation. For VAs it also shows the one-sided limit direction
 * (→ +∞ or → −∞ from each side).
 *
 * Built on FunctionVisualizerCorePro v2. Uses `verticalLines` and
 * `horizontalLines` for axis-aligned asymptotes and adds an extra
 * function entry for any oblique asymptote (plotted as a dashed
 * straight line).
 *
 * PROPS (all optional)
 *   initialFamily   : string        — default 'reciprocal'
 *   families        : object        — override FAMILIES
 *   visualizerProps : object
 *   infoPanelProps  : object
 *   darkMode        : boolean
 *   showPicker      : boolean
 *   showSliders     : boolean
 *   showInfoPanel   : boolean
 *   showOblique     : boolean       — default true; toggle oblique detection
 *   maxWidth        : string|number — default '80vw'
 *
 * RULES OBSERVED:
 *   - Never put $...$ inside **...**.
 *   - <style> blocks use dangerouslySetInnerHTML.
 *   - Modest canvas height; chip strips stay above the fold.
 */

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCorePro';
import InfoPanel from '../InfoPanel';


/* ================================================================
   COLORS
   ================================================================ */

const COL = {
  f:      '#3b82f6', // function curve
  va:     '#ef4444', // vertical asymptote — red
  ha:     '#10b981', // horizontal asymptote — green
  ob:     '#8b5cf6', // oblique — purple
};


/* ================================================================
   FORMATTING
   ================================================================ */

function fmt(v) {
  if (!Number.isFinite(v)) return v > 0 ? '+∞' : (v < 0 ? '−∞' : '—');
  const r = Math.round(v * 1000) / 1000;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}

function fmtLine(m, b) {
  // y = m·x + b, formatted compactly
  let s = '';
  if (m === 1) s = 'x';
  else if (m === -1) s = '−x';
  else s = `${fmt(m)}x`;
  if (b > 0) s += ` + ${fmt(b)}`;
  else if (b < 0) s += ` − ${fmt(Math.abs(b))}`;
  return `y = ${s}`;
}


/* ================================================================
   PARAMETERS
   ================================================================ */

const PARAM_DEFS = {
  a: { label: 'vertical scale a',   min: -3, max: 3, step: 0.05, def: 1 },
  k: { label: 'vertical shift k',   min: -6, max: 6, step: 0.1,  def: 0 },
  b: { label: 'horizontal scale b', min: -3, max: 3, step: 0.05, def: 1 },
  h: { label: 'horizontal shift h', min: -6, max: 6, step: 0.1,  def: 0 },
};

const DEFAULT_PARAMS = { a: 1, k: 0, b: 1, h: 0 };


/* ================================================================
   FAMILIES
   ================================================================ */

export const FAMILIES = {
  /* ---- Vertical only ---- */
  logarithmic: {
    name: 'Logarithmic',
    asymGroup: 'Vertical only',
    glyph: 'M2,2 Q10,26 24,26',
    base: x => (x > 0 ? Math.log(x) : NaN),
    eqBase: 'ln(x)',
    bodyOf: i => `ln(${i})`,
  },
  tangent: {
    name: 'Tangent',
    asymGroup: 'Vertical only',
    glyph: 'M4,26 Q12,4 12,2 M14,26 Q14,24 22,2',
    base: x => Math.tan(x),
    eqBase: 'tan(x)',
    bodyOf: i => `tan(${i})`,
  },

  /* ---- Horizontal only ---- */
  expDecay: {
    name: 'Exponential decay',
    asymGroup: 'Horizontal only',
    glyph: 'M2,2 Q10,24 24,24',
    base: x => Math.exp(-x),
    eqBase: 'e^(−x)',
    bodyOf: i => `e^(−(${i}))`,
  },
  bell: {
    name: '1 / (1 + x²)',
    asymGroup: 'Horizontal only',
    glyph: 'M2,22 Q13,2 24,22',
    base: x => 1 / (1 + x * x),
    eqBase: '1 / (1 + x²)',
    bodyOf: i => `1 / (1 + (${i})²)`,
  },
  arctan: {
    name: 'Arctan',
    asymGroup: 'Horizontal only',
    glyph: 'M2,22 Q8,18 13,14 Q18,10 24,6',
    base: x => Math.atan(x),
    eqBase: 'arctan(x)',
    bodyOf: i => `arctan(${i})`,
  },
  logistic: {
    name: 'Logistic',
    asymGroup: 'Horizontal only',
    glyph: 'M2,24 Q12,24 13,14 Q14,4 24,4',
    base: x => 1 / (1 + Math.exp(-x)),
    eqBase: '1 / (1 + e^(−x))',
    bodyOf: i => `1 / (1 + e^(−(${i})))`,
  },

  /* ---- Both V and H ---- */
  reciprocal: {
    name: 'Reciprocal',
    asymGroup: 'Both V and H',
    glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',
    base: x => (x === 0 ? NaN : 1 / x),
    eqBase: '1/x',
    bodyOf: i => `1/(${i})`,
  },
  rationalShifted: {
    name: '(x + 1) / (x − 1)',
    asymGroup: 'Both V and H',
    glyph: 'M2,4 Q12,4 13,14 M15,14 Q17,26 24,26',
    base: x => (x === 1 ? NaN : (x + 1) / (x - 1)),
    eqBase: '(x + 1) / (x − 1)',
    bodyOf: i => `((${i}) + 1) / ((${i}) − 1)`,
  },
  xOverX2Minus1: {
    name: 'x / (x² − 1)',
    asymGroup: 'Both V and H',
    glyph: 'M2,14 Q6,2 8,14 Q10,26 12,14 Q14,2 16,14 Q18,26 22,14',
    base: x => (Math.abs(x * x - 1) < 1e-12 ? NaN : x / (x * x - 1)),
    eqBase: 'x / (x² − 1)',
    bodyOf: i => `(${i}) / ((${i})² − 1)`,
  },

  /* ---- Oblique ---- */
  obliqueClassic: {
    name: 'x + 1/x',
    asymGroup: 'Oblique',
    glyph: 'M2,8 Q8,4 13,12 M15,16 Q20,24 24,22',
    base: x => (x === 0 ? NaN : x + 1 / x),
    eqBase: 'x + 1/x',
    bodyOf: i => `(${i}) + 1/(${i})`,
  },
  obliqueRational: {
    name: '(x² − 1) / x',
    asymGroup: 'Oblique',
    glyph: 'M2,14 Q6,2 13,12 M15,16 Q20,26 24,14',
    base: x => (x === 0 ? NaN : (x * x - 1) / x),
    eqBase: '(x² − 1) / x',
    bodyOf: i => `((${i})² − 1) / (${i})`,
  },
};

const DEFAULT_FAMILIES = FAMILIES;


/* ================================================================
   EQUATION BUILDER
   ================================================================ */

function buildForwardEq(fam, p) {
  const { a, b, h, k } = p;
  let inner = 'x';
  if (h !== 0) inner = `x ${h >= 0 ? '−' : '+'} ${fmt(Math.abs(h))}`;
  if (b !== 1) inner = h !== 0 ? `${fmt(b)}(${inner})` : `${fmt(b)}x`;
  let body = fam.bodyOf(inner);
  let out;
  if (a === -1) out = `−${body}`;
  else if (a !== 1) out = `${fmt(a)}·${body}`;
  else out = body;
  if (k !== 0) out += ` ${k >= 0 ? '+' : '−'} ${fmt(Math.abs(k))}`;
  return out;
}


/* ================================================================
   VERTICAL ASYMPTOTE DETECTION
   ================================================================
   Sample densely across the visible domain. Detect sign-changes
   that jump across infinity (one side huge positive, the other
   huge negative, or undefined). For each candidate, refine and
   probe one-sided limits.
*/

function findVerticalAsymptotes(fn, xMin, xMax, samples = 600) {
  const out = [];
  const step = (xMax - xMin) / samples;
  const BIG = 1e4;

  let lastY = null, lastX = null;
  for (let i = 0; i <= samples; i++) {
    const x = xMin + i * step;
    let y;
    try { y = fn(x); } catch { y = NaN; }

    if (lastY !== null && lastX !== null) {
      const finBoth = Number.isFinite(y) && Number.isFinite(lastY);
      const finJump = finBoth && (Math.abs(y) > BIG || Math.abs(lastY) > BIG) && Math.abs(y - lastY) > BIG;
      const nanCross = (!Number.isFinite(y) && Number.isFinite(lastY) && Math.abs(lastY) > 5) ||
                       (!Number.isFinite(lastY) && Number.isFinite(y) && Math.abs(y) > 5);
      if (finJump || nanCross) {
        // Refine: scan more finely between lastX and x.
        const cand = refineVA(fn, lastX, x);
        if (cand !== null) {
          if (!out.some(a => Math.abs(a.x - cand) < step * 0.5)) {
            out.push({ x: cand, ...probeOneSided(fn, cand) });
          }
        }
      }
    }
    lastY = y; lastX = x;
  }
  return out;
}

function refineVA(fn, x1, x2) {
  // Find the x in [x1, x2] where |f(x)| is largest (proxy for the asymptote).
  let bestX = (x1 + x2) / 2, bestMag = -Infinity;
  const N = 40;
  for (let i = 0; i <= N; i++) {
    const x = x1 + (i / N) * (x2 - x1);
    let y;
    try { y = fn(x); } catch { y = NaN; }
    const mag = Number.isFinite(y) ? Math.abs(y) : 1e308;
    if (mag > bestMag) { bestMag = mag; bestX = x; }
  }
  // Snap to a clean nearby value if close (cosmetic)
  for (const r of [0, 0.5, 1, -1, 2, -2, Math.PI / 2]) {
    if (Math.abs(bestX - r) < 0.02) return r;
  }
  return Math.round(bestX * 1000) / 1000;
}

function probeOneSided(fn, c) {
  const eps = [1e-6, 1e-5, 1e-4];
  const sampleSide = (sign) => {
    for (const e of eps) {
      let y;
      try { y = fn(c + sign * e); } catch { return null; }
      if (Number.isFinite(y) && Math.abs(y) > 1e4) return y > 0 ? '+∞' : '−∞';
      if (!Number.isFinite(y)) continue;
    }
    return null;
  };
  return {
    leftLimit:  sampleSide(-1),
    rightLimit: sampleSide(+1),
  };
}


/* ================================================================
   HORIZONTAL ASYMPTOTE DETECTION
   ================================================================
   Sample at large |x|, check whether f(x) converges. Two independent
   limits: x → +∞ and x → −∞.
*/

function findHorizontalAsymptotes(fn) {
  const sides = [];

  const checkSide = (sign) => {
    const probes = [100, 1000, 10000, 100000].map(v => sign * v);
    const ys = [];
    for (const x of probes) {
      let y;
      try { y = fn(x); } catch { return null; }
      if (!Number.isFinite(y)) return null;
      ys.push(y);
    }
    // Check convergence: successive differences vanish
    const tol = Math.max(1e-3, Math.abs(ys[ys.length - 1]) * 1e-4);
    for (let i = 1; i < ys.length; i++) {
      if (Math.abs(ys[i] - ys[i - 1]) > tol) return null;
    }
    return ys[ys.length - 1];
  };

  const yPos = checkSide(+1);
  if (yPos !== null) sides.push({ y: yPos, side: 'right' });

  const yNeg = checkSide(-1);
  if (yNeg !== null) sides.push({ y: yNeg, side: 'left' });

  // Dedupe if both sides converge to (essentially) the same value
  if (sides.length === 2 && Math.abs(sides[0].y - sides[1].y) < 1e-4) {
    return [{ y: sides[0].y, side: 'both' }];
  }
  return sides;
}


/* ================================================================
   OBLIQUE ASYMPTOTE DETECTION
   ================================================================
   m = lim f(x)/x as x → ±∞; b = lim f(x) − m·x.
   If m is finite, non-zero, and stable across two scales — and the
   HA test on that side did NOT find a finite HA — there's an
   oblique asymptote on that side.
*/

function findObliqueAsymptotes(fn, hasInfos) {
  const out = [];

  const checkSide = (sign) => {
    const x1 = sign * 1e4, x2 = sign * 1e5;
    let y1, y2;
    try { y1 = fn(x1); y2 = fn(x2); } catch { return null; }
    if (!Number.isFinite(y1) || !Number.isFinite(y2)) return null;
    const m1 = y1 / x1, m2 = y2 / x2;
    if (Math.abs(m1) < 1e-4) return null;       // m ≈ 0 → would be HA, not oblique
    if (Math.abs(m1 - m2) > 1e-3) return null;  // m not converging
    if (!Number.isFinite(m1)) return null;
    const b1 = y1 - m1 * x1, b2 = y2 - m1 * x2;
    if (Math.abs(b1 - b2) > 1e-3) return null;
    return { m: Math.round(m1 * 1000) / 1000, b: Math.round(b1 * 1000) / 1000 };
  };

  const haRight = hasInfos.some(h => h.side === 'right' || h.side === 'both');
  const haLeft  = hasInfos.some(h => h.side === 'left'  || h.side === 'both');

  if (!haRight) {
    const r = checkSide(+1);
    if (r) out.push({ ...r, side: 'right' });
  }
  if (!haLeft) {
    const l = checkSide(-1);
    if (l) {
      // Dedupe with right oblique if same line
      if (!out.some(o => Math.abs(o.m - l.m) < 1e-4 && Math.abs(o.b - l.b) < 1e-4)) {
        out.push({ ...l, side: 'left' });
      } else {
        const idx = out.findIndex(o => Math.abs(o.m - l.m) < 1e-4 && Math.abs(o.b - l.b) < 1e-4);
        if (idx >= 0) out[idx].side = 'both';
      }
    }
  }
  return out;
}


/* ================================================================
   PICKER GROUPING
   ================================================================ */

function buildPickerEntries(families) {
  const out = [];
  let lastGroup;
  Object.entries(families).forEach(([key, f]) => {
    const g = f.asymGroup || 'Other';
    if (g !== lastGroup) {
      out.push({ type: 'header', label: g, key: `__hdr_${g}` });
      lastGroup = g;
    }
    out.push({ type: 'item', key, fam: f });
  });
  return out;
}


/* ================================================================
   GLYPH
   ================================================================ */

function FamilyGlyph({ d, active, darkMode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none"
            stroke={active ? COL.f : (darkMode ? '#64748b' : '#94a3b8')}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


/* ================================================================
   MAIN
   ================================================================ */

export default function FunctionAsymptotes({
  initialFamily = 'reciprocal',
  families = DEFAULT_FAMILIES,
  visualizerProps = {},
  infoPanelProps = {},
  darkMode = false,
  showPicker = true,
  showSliders = true,
  showInfoPanel = true,
  showOblique = true,
  maxWidth = '80vw',
}) {
  const familyKeys = Object.keys(families);
  const startKey = families[initialFamily] ? initialFamily : familyKeys[0];

  const [current, setCurrent] = useState(startKey);
  const [params, setParams] = useState({ ...DEFAULT_PARAMS });

  const fam = families[current] || families[familyKeys[0]];
  const { a, b, h, k } = params;

  const forwardFn = useMemo(() => {
    if (a === 0 || b === 0) return () => NaN;
    return x => a * fam.base(b * (x - h)) + k;
  }, [fam, a, b, h, k]);

  const forwardEq = useMemo(() => buildForwardEq(fam, params), [fam, params]);

  /* Detection — runs every render. Search range a bit wider than viewport. */
  const vas = useMemo(() => findVerticalAsymptotes(forwardFn, -12, 12), [forwardFn]);
  const has = useMemo(() => findHorizontalAsymptotes(forwardFn), [forwardFn]);
  const obs = useMemo(() => showOblique ? findObliqueAsymptotes(forwardFn, has) : [], [forwardFn, has, showOblique]);

  /* ---- Build visualizer props ---- */

  const verticalLines = useMemo(() =>
    vas.map(v => ({
      x: v.x,
      color: COL.va,
      stroke: 1.5,
      pattern: [6, 4],
      label: `x = ${fmt(v.x)}`,
    })),
    [vas]
  );

  const horizontalLines = useMemo(() =>
    has.map(hh => ({
      y: hh.y,
      color: COL.ha,
      stroke: 1.5,
      pattern: [6, 4],
      label: `y = ${fmt(hh.y)}`,
    })),
    [has]
  );

  const functions = useMemo(() => {
    const arr = [
      { fn: forwardFn, color: COL.f, label: 'g', formula: `g(x) = ${forwardEq}`,
        visible: true, stroke: 2.25, pattern: [] },
    ];
    obs.forEach((o, i) => {
      arr.push({
        fn: x => o.m * x + o.b,
        color: COL.ob,
        label: `OA${obs.length > 1 ? i + 1 : ''}`,
        formula: fmtLine(o.m, o.b),
        visible: true,
        stroke: 1.5,
        pattern: [6, 4],
      });
    });
    return arr;
  }, [forwardFn, forwardEq, obs]);

  /* ---- InfoPanel ---- */
  const explanationContent = useMemo(() => {
    const parts = [
      `## ${fam.name} — asymptotes`,
      `\n\n**Function** · $g(x) = ${forwardEq}$\n\n`,
    ];

    if (vas.length === 0 && has.length === 0 && obs.length === 0) {
      parts.push(`No asymptotes detected in the search range.`);
    } else {
      if (vas.length > 0) {
        parts.push(`### Vertical asymptotes\n\n`);
        vas.forEach(v => {
          parts.push(`- $x = ${fmt(v.x)}$`);
          const sides = [];
          if (v.leftLimit)  sides.push(`from the left: ${v.leftLimit}`);
          if (v.rightLimit) sides.push(`from the right: ${v.rightLimit}`);
          if (sides.length) parts.push(` — ${sides.join(', ')}`);
          parts.push('\n');
        });
        parts.push('\n');
      }
      if (has.length > 0) {
        parts.push(`### Horizontal asymptotes\n\n`);
        has.forEach(hh => {
          const side = hh.side === 'both' ? 'as $x \\to \\pm\\infty$' :
                       (hh.side === 'right' ? 'as $x \\to +\\infty$' : 'as $x \\to -\\infty$');
          parts.push(`- $y = ${fmt(hh.y)}$ — ${side}\n`);
        });
        parts.push('\n');
      }
      if (obs.length > 0) {
        parts.push(`### Oblique asymptotes\n\n`);
        obs.forEach(o => {
          const side = o.side === 'both' ? 'as $x \\to \\pm\\infty$' :
                       (o.side === 'right' ? 'as $x \\to +\\infty$' : 'as $x \\to -\\infty$');
          parts.push(`- $${fmtLine(o.m, o.b).replace('y = ', 'y = ')}$ — ${side}\n`);
        });
      }
    }
    return parts.join('');
  }, [fam, forwardEq, vas, has, obs]);

  const conceptsContent =
    '## What is an asymptote?\n\n' +
    'An **asymptote** is a line that the graph of a function approaches arbitrarily closely without (usually) reaching it. There are three flavors.\n\n' +
    '### Vertical asymptote\n\n' +
    'A vertical line $x = c$ is a vertical asymptote if $f(x) \\to \\pm\\infty$ as $x \\to c$ from one or both sides.\n\n' +
    'Typical sources:\n' +
    '- Division by zero — like $1/x$ at $x = 0$ or $(x+1)/(x-1)$ at $x = 1$.\n' +
    '- Domain edges where the function blows up — like $\\ln(x)$ at $x = 0$.\n' +
    '- Periodic singularities — $\\tan(x)$ has VAs at $\\pi/2 + n\\pi$ for every integer $n$.\n\n' +
    'A VA can be one-sided (e.g. $\\ln(x)$ only approaches from the right) or two-sided. The visual catch: the curve heads toward $+\\infty$ or $-\\infty$ as you approach the line, never crossing it.\n\n' +
    '### Horizontal asymptote\n\n' +
    'A horizontal line $y = L$ is a horizontal asymptote if $f(x) \\to L$ as $x \\to +\\infty$ or $x \\to -\\infty$.\n\n' +
    'A function can have:\n' +
    '- No HAs (most polynomials).\n' +
    '- One HA covering both sides ($1/(1+x^2) \\to 0$ in both directions).\n' +
    '- Two different HAs — $\\arctan(x) \\to \\pi/2$ on the right and $-\\pi/2$ on the left.\n' +
    '- One-sided HAs — $e^{-x} \\to 0$ on the right but blows up on the left.\n\n' +
    'A function *can* cross a horizontal asymptote — that\'s allowed. The asymptote is about behavior at infinity, not about staying away from the line.\n\n' +
    '### Oblique (slant) asymptote\n\n' +
    'A non-horizontal line $y = mx + b$ is an oblique asymptote if $f(x) - (mx + b) \\to 0$ as $x \\to \\pm\\infty$.\n\n' +
    'Classic source: rational functions where the numerator\'s degree is exactly one more than the denominator\'s, like $(x^2 + 1)/x = x + 1/x$. Polynomial-divide and the quotient is the oblique asymptote; the remainder vanishes at infinity.\n\n' +
    'A function has *either* a horizontal asymptote on a given side, *or* an oblique one, *or* neither — but not both (a non-zero slope rules out a finite limit).\n\n' +
    '### How the detector works\n\n' +
    '- **VAs**: sample densely; flag spots where the function jumps across infinity (one side big positive, the other big negative or undefined). Refine, then probe one-sided limits.\n' +
    '- **HAs**: evaluate at $|x| = 10^2, 10^3, 10^4, 10^5$. If the values stabilize, that\'s the limit.\n' +
    '- **OAs**: compute $f(x)/x$ at large $|x|$; if it converges to a non-zero slope $m$, compute $b = f(x) - mx$; if that also converges, we have $y = mx + b$.\n\n' +
    '### What the sliders do to asymptotes\n\n' +
    'For $g(x) = a \\cdot f(b(x - h)) + k$:\n' +
    '- VA at $x = c$ on $f$ → VA at $x = c/b + h$ on $g$ (input transform).\n' +
    '- HA at $y = L$ on $f$ → HA at $y = aL + k$ on $g$ (output transform).\n' +
    '- An OA $y = mx + b$ on $f$ becomes $y = (a m b)x + (-amb h + ab\\,b + k)$ on $g$... or, more usefully: the slope and intercept update predictably. Slide them and watch.';

  const infoTabs = useMemo(() => ([
    { key: 'explanation', label: 'Detected', order: 0, content: explanationContent },
    { key: 'concepts',    label: 'Concepts',  order: 10, content: conceptsContent },
  ]), [explanationContent]);

  /* ---- Styling ---- */
  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12,
    boxShadow: panelShadow,
  };
  const c = {
    ink: darkMode ? '#e2e8f0' : '#0f172a',
    inkSoft: darkMode ? '#cbd5e1' : '#334155',
    muted: darkMode ? '#64748b' : '#94a3b8',
    soft: darkMode ? '#1e293b' : '#f8fafc',
    softer: darkMode ? '#0f172a' : '#f1f5f9',
    border: darkMode ? '#334155' : '#e2e8f0',
    borderSoft: darkMode ? '#1e293b' : '#f1f5f9',
    accentSoft: darkMode ? '#1e293b' : '#eff6ff',
    accentBorder: darkMode ? '#334155' : '#dbeafe',
    accentText: darkMode ? '#dbeafe' : '#1e3a8a',
  };

  const famBtn = active => ({
    display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
    border: '1px solid transparent',
    background: active ? c.accentSoft : 'none',
    borderColor: active ? c.accentBorder : 'transparent',
    borderRadius: 8, padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit',
    fontSize: 13, fontWeight: active ? 600 : 400,
    color: active ? c.accentText : c.inkSoft,
    transition: 'background 0.12s, border-color 0.12s',
  });

  const sectionTitle = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  const mergedVisualizerProps = {
    defaultWidth: 880,
    defaultHeight: 460,
    ...visualizerProps,
  };

  const pickerEntries = buildPickerEntries(families);

  const selectFamily = (key) => {
    setCurrent(key);
    setParams({ ...DEFAULT_PARAMS });
  };

  const setParam = (kk, v) => setParams(prev => ({ ...prev, [kk]: v }));
  const resetParams = () => setParams({ ...DEFAULT_PARAMS });

  const renderSlider = (key) => {
    const def = PARAM_DEFS[key];
    return (
      <div key={key}>
        <label style={{
          display: 'flex', justifyContent: 'space-between', fontSize: 12,
          color: c.inkSoft, marginBottom: 4, fontVariantNumeric: 'tabular-nums',
        }}>
          <span>{def.label}</span>
          <span style={{ fontFamily: monoStack, color: COL.f, fontWeight: 600 }}>
            {fmt(params[key])}
          </span>
        </label>
        <input
          type="range" min={def.min} max={def.max} step={def.step}
          value={params[key]}
          onChange={e => setParam(key, parseFloat(e.target.value))}
          style={{ width: '100%', accentColor: COL.f, cursor: 'pointer' }}
        />
      </div>
    );
  };

  const SideArrow = ({ dir }) => (
    <span style={{ color: c.muted, fontFamily: monoStack, fontSize: 11 }}>
      {dir === 'left' ? 'x → −∞' : dir === 'right' ? 'x → +∞' : 'x → ±∞'}
    </span>
  );

  const Pill = ({ color, children }) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 9px', borderRadius: 5,
      fontFamily: monoStack, fontSize: 11.5, fontWeight: 600,
      background: darkMode ? `${color}22` : `${color}1c`,
      color: darkMode ? `${color}ee` : color,
      border: `1px solid ${color}55`,
    }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
      {children}
    </span>
  );

  return (
    <div style={{
      width: '100%',
      background: darkMode ? '#020617' : '#f6f7f9',
      minHeight: '100vh',
      fontFamily: fontStack,
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth,
        display: 'flex',
        gap: 16,
        padding: '0 16px',
        alignItems: 'flex-start',
        boxSizing: 'border-box',
      }}>

        {showPicker && (
          <nav style={{ ...card, width: 220, padding: 10, flexShrink: 0 }}>
            <div style={{ ...sectionTitle, margin: '6px 8px 10px' }}>Function</div>
            {pickerEntries.map(e =>
              e.type === 'header'
                ? <div key={e.key} style={sectionTitle}>{e.label}</div>
                : (
                  <button
                    key={e.key}
                    style={famBtn(e.key === current)}
                    onClick={() => selectFamily(e.key)}
                  >
                    <FamilyGlyph d={e.fam.glyph} active={e.key === current} darkMode={darkMode} />
                    <span>{e.fam.name}</span>
                  </button>
                )
            )}

            {showSliders && (
              <div style={{
                marginTop: 12, paddingTop: 12,
                borderTop: `1px solid ${c.borderSoft}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4px 8px' }}>
                  <div style={{
                    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
                    color: c.muted, fontWeight: 600,
                  }}>Parameters</div>
                  <button onClick={resetParams} style={{
                    background: darkMode ? '#0f172a' : '#fff',
                    border: `1px solid ${c.border}`, color: c.inkSoft,
                    padding: '3px 8px', borderRadius: 5,
                    fontFamily: 'inherit', fontSize: 10.5, cursor: 'pointer',
                  }}>Reset</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 4px' }}>
                  {['a', 'k', 'b', 'h'].map(renderSlider)}
                </div>
              </div>
            )}
          </nav>
        )}

        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>

            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>
                {fam.name}
              </span>
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 8px', borderRadius: 5,
                color: COL.f, background: c.softer,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: COL.f }} />
                g(x) = {forwardEq}
              </span>
            </div>

            <VisualizerWithControls
              functions={functions}
              zoom={8}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              verticalLines={verticalLines}
              horizontalLines={horizontalLines}
              {...mergedVisualizerProps}
            />

            {/* ---- DETECTED ASYMPTOTES PANEL ---- */}
            <div style={{
              marginTop: 12,
              background: c.soft,
              border: `1px solid ${c.borderSoft}`,
              borderRadius: 8,
              padding: '14px 16px',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                marginBottom: 10, flexWrap: 'wrap', gap: 8,
              }}>
                <span style={{
                  fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: c.muted, fontWeight: 700,
                }}>Detected asymptotes</span>
                <span style={{ fontSize: 11.5, color: c.muted, fontFamily: monoStack }}>
                  {vas.length + has.length + obs.length} total
                </span>
              </div>

              {vas.length === 0 && has.length === 0 && obs.length === 0 && (
                <div style={{
                  padding: '10px 12px',
                  background: darkMode ? '#0f172a' : '#fff',
                  border: `1px solid ${c.borderSoft}`,
                  borderRadius: 6,
                  fontSize: 12.5, color: c.muted, fontStyle: 'italic',
                }}>
                  No asymptotes detected in the search range.
                </div>
              )}

              {/* VAs */}
              {vas.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 10.5, color: c.muted, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Vertical
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {vas.map((v, i) => (
                      <div key={i} style={{
                        padding: '8px 12px',
                        background: darkMode ? '#0f172a' : '#fff',
                        border: `1px solid ${c.borderSoft}`,
                        borderRadius: 6,
                        display: 'flex', alignItems: 'center', gap: 10,
                        flexWrap: 'wrap',
                      }}>
                        <Pill color={COL.va}>x = {fmt(v.x)}</Pill>
                        {v.leftLimit && (
                          <span style={{ fontSize: 11.5, color: c.inkSoft, fontFamily: monoStack }}>
                            <span style={{ color: c.muted }}>x → {fmt(v.x)}<sup>−</sup>:</span> {v.leftLimit}
                          </span>
                        )}
                        {v.rightLimit && (
                          <span style={{ fontSize: 11.5, color: c.inkSoft, fontFamily: monoStack }}>
                            <span style={{ color: c.muted }}>x → {fmt(v.x)}<sup>+</sup>:</span> {v.rightLimit}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HAs */}
              {has.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 10.5, color: c.muted, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Horizontal
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {has.map((hh, i) => (
                      <div key={i} style={{
                        padding: '8px 12px',
                        background: darkMode ? '#0f172a' : '#fff',
                        border: `1px solid ${c.borderSoft}`,
                        borderRadius: 6,
                        display: 'flex', alignItems: 'center', gap: 10,
                        flexWrap: 'wrap',
                      }}>
                        <Pill color={COL.ha}>y = {fmt(hh.y)}</Pill>
                        <SideArrow dir={hh.side} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Obliques */}
              {obs.length > 0 && (
                <div>
                  <div style={{ fontSize: 10.5, color: c.muted, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Oblique
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {obs.map((o, i) => (
                      <div key={i} style={{
                        padding: '8px 12px',
                        background: darkMode ? '#0f172a' : '#fff',
                        border: `1px solid ${c.borderSoft}`,
                        borderRadius: 6,
                        display: 'flex', alignItems: 'center', gap: 10,
                        flexWrap: 'wrap',
                      }}>
                        <Pill color={COL.ob}>{fmtLine(o.m, o.b)}</Pill>
                        <SideArrow dir={o.side} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ---- APPLIED CHIPS ---- */}
            <div style={{
              display: 'flex', gap: 6, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Applied</span>
              {['a', 'k', 'b', 'h'].map(kk => {
                const def = PARAM_DEFS[kk];
                const active = params[kk] !== def.def;
                return (
                  <span key={kk} style={{
                    fontFamily: monoStack, fontSize: 11,
                    padding: '3px 9px', borderRadius: 5,
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    color: active ? c.accentText : c.muted,
                    background: active ? c.accentSoft : 'transparent',
                    border: `1px solid ${active ? c.accentBorder : c.borderSoft}`,
                    fontWeight: active ? 600 : 400,
                  }}>
                    <span style={{ fontWeight: 600, color: active ? COL.f : c.muted }}>{kk}</span>
                    <span>=</span>
                    <span>{fmt(params[kk])}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {showInfoPanel && (
          <aside style={{ ...card, width: 360, padding: 16, flexShrink: 0 }}>
            <InfoPanel
              tabs={infoTabs}
              darkMode={darkMode}
              {...infoPanelProps}
            />
          </aside>
        )}
      </div>
    </div>
  );
}