// Graph Studio — Explorer shell: colours, sizes, link addresses and the
// shared context of its panels. Taken from the earlier Function
// Explorer so the look stays the same.

import { createContext } from 'react';

// ============================================================
// DESIGN TOKENS
// ============================================================
export const T = {
  bg: {
    app:       '#f4f5f7',
    panel:     '#ffffff',
    graph:     '#fcfcfd',
    subtle:    '#f8fafc',
    hover:     '#eef2f6',
    pressed:   '#e2e8f0',
    tintBlue:  '#eff6ff',
    tintBlue2: '#dbeafe',
  },
  border: {
    soft:    '#f1f5f9',
    mid:     '#e2e8f0',
    strong:  '#cbd5e1',
    blue:    '#bfdbfe',
  },
  text: {
    strong: '#0f172a',
    body:   '#334155',
    muted:  '#64748b',
    faint:  '#94a3b8',
  },
  c: {
    blue:    '#3b82f6',
    blueD:   '#1d4ed8',
    blueL:   '#60a5fa',
    slate:   '#475569',
    slateD:  '#1e293b',
  },
  font: {
    sans: '"Geist", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
  },
  radius: { sm: 5, md: 7, lg: 10 },
  shadow: {
    s1: '0 1px 2px rgba(15, 23, 42, 0.04)',
    s2: '0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.04)',
  },
  width: { rail: 46, rtabs: 44, rpanel: 410 },
  height: { header: 48, funcbar: 44, insights: 78, status: 28 },
};

// ============================================================
// LINK SYSTEM
// ============================================================
// Every URL the Explorer emits, grouped by destination site.
// Each key is the aspect slug; overrides are shallow-merged per group.
export function buildDefaultLinks(bases) {
  const { theoryBase, toolsBase, calculusBase, calculatorBase } = bases;
  return {
    // Theory pages on the portal (learnmathclass.com/functions/*)
    theory: {
      about:           `${theoryBase}/about`,
      domain:          `${theoryBase}/domain`,
      range:           `${theoryBase}/range`,
      codomain:        `${theoryBase}/codomain`,
      zeros:           `${theoryBase}/zeros`,
      yIntercept:      `${theoryBase}/y-intercept`,
      symmetry:        `${theoryBase}/symmetry`,
      parity:          `${theoryBase}/parity`,
      periodicity:     `${theoryBase}/periodicity`,
      continuity:      `${theoryBase}/continuity`,
      asymptotes:      `${theoryBase}/asymptotes`,
      monotonicity:    `${theoryBase}/monotonicity`,
      concavity:       `${theoryBase}/concavity`,
      inflection:      `${theoryBase}/inflection-points`,
      extrema:         `${theoryBase}/extrema`,
      boundedness:     `${theoryBase}/boundedness`,
      invertibility:   `${theoryBase}/invertibility`,
      inverse:         `${theoryBase}/inverse`,
      transformations: `${theoryBase}/transformations`,
      composition:     `${theoryBase}/composition`,
      operations:      `${theoryBase}/operations`,
      endBehavior:     `${theoryBase}/end-behavior`,
      piecewise:       `${theoryBase}/piecewise`,
    },
    // Per-aspect visualizers under /functions/visual-tools/*
    tools: {
      asymptotes:      `${toolsBase}/asymptotes`,
      composition:     `${toolsBase}/composition`,
      domain:          `${toolsBase}/domain`,
      inverse:         `${toolsBase}/inverse-function`,
      piecewise:       `${toolsBase}/piecewise`,
      range:           `${toolsBase}/range`,
      reflections:     `${toolsBase}/reflections`,
      symmetry:        `${toolsBase}/symmetry`,
      tangentLine:     `${toolsBase}/tangent-line`,
      transformations: `${toolsBase}/transformations`,
    },
    // Calculus bridge pages under /calculus/*
    calculus: {
      derivative:       `${calculusBase}/derivative`,
      secondDerivative: `${calculusBase}/second-derivative`,
      antiderivative:   `${calculusBase}/antiderivative`,
      integral:         `${calculusBase}/integral`,
      tangentLine:      `${calculusBase}/tangent-line`,
      linearization:    `${calculusBase}/linearization`,
      taylor:           `${calculusBase}/taylor-series`,
      limits:           `${calculusBase}/limits`,
      criticalPoints:   `${calculusBase}/critical-points`,
      meanValue:        `${calculusBase}/mean-value-theorem`,
    },
    // Per-aspect calculators on the niche subdomain
    calculator: {
      domain:      `${calculatorBase}/domain`,
      range:       `${calculatorBase}/range`,
      roots:       `${calculatorBase}/roots`,
      inverse:     `${calculatorBase}/inverse`,
      derivative:  `${calculatorBase}/derivative`,
      integral:    `${calculatorBase}/integral`,
      asymptotes:  `${calculatorBase}/asymptotes`,
      extrema:     `${calculatorBase}/extrema`,
      inflection:  `${calculatorBase}/inflection`,
      symmetry:    `${calculatorBase}/symmetry`,
      composition: `${calculatorBase}/composition`,
      period:      `${calculatorBase}/period`,
    },
  };
}

// Shallow-merge each group so partial overrides preserve every other key.
export function mergeLinks(defaults, overrides) {
  if (!overrides) return defaults;
  const out = {};
  const groups = new Set([...Object.keys(defaults), ...Object.keys(overrides)]);
  for (const g of groups) {
    out[g] = { ...(defaults[g] || {}), ...(overrides[g] || {}) };
  }
  return out;
}

// ============================================================
// EXPLORER CONTEXT
// ============================================================
export const ExplorerContext = createContext({
  pin: () => {},
  unpin: () => {},
  isPinned: () => false,
  density: 'compact',
  routes: {
    theoryBase:     '/functions',
    toolsBase:      '/functions/visual-tools',
    calculusBase:   '/calculus',
    calculatorBase: 'https://calc.learnmathclass.com',
  },
  links: buildDefaultLinks({
    theoryBase:     '/functions',
    toolsBase:      '/functions/visual-tools',
    calculusBase:   '/calculus',
    calculatorBase: 'https://calc.learnmathclass.com',
  }),
});
