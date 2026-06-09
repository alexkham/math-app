/**
 * FunctionArithmetic
 *
 * Combine two functions with pointwise operations:
 *   (f + g)(x), (f − g)(x), (f · g)(x), (f / g)(x)
 *
 * Same design principles as FunctionTransformations v2:
 *   - left picker (here split: editing-f / editing-g toggle + family list)
 *   - graph in center, status chips below
 *   - right column: InfoPanel on top, op tabs + info below
 *   - styled tooltips on tabs (TT_STYLES via dangerouslySetInnerHTML)
 *   - VisualizerWithControls as the canvas engine
 */

import React, { useState, useMemo } from 'react';
import { VisualizerWithControls } from '../FunctionVisualizerCoreImproved';
import InfoPanel from '../InfoPanel';

const ACCENT = '#3b82f6';
const F_COLOR = '#94a3b8';   // gray
const G_COLOR = '#f59e0b';   // amber

function fmt(v) {
  const r = Math.round(v * 100) / 100;
  return Math.abs(r - Math.round(r)) < 1e-4 ? String(Math.round(r)) : String(r);
}

/* ===== Bases (same set as transformations, simpler shape) ===== */
export const BASES = {
  linear:      { name: 'Linear',         glyph: 'M2,22 L24,4',                              fn: x => x,                              formula: 'x' },
  quadratic:   { name: 'Quadratic',      glyph: 'M2,4 Q13,30 24,4',                         fn: x => x * x,                          formula: 'x²' },
  cubic:       { name: 'Cubic',          glyph: 'M2,22 C8,2 16,30 24,8',                    fn: x => x * x * x,                      formula: 'x³' },
  reciprocal:  { name: 'Reciprocal',     glyph: 'M2,4 Q11,4 13,14 M15,14 Q17,26 24,26',     fn: x => 1 / x,                          formula: '1/x' },
  exponential: { name: 'Exponential',    glyph: 'M2,26 Q16,26 24,2',                        fn: x => Math.exp(x),                    formula: 'eˣ' },
  logarithmic: { name: 'Logarithmic',    glyph: 'M2,2 Q10,26 24,26',                        fn: x => (x > 0 ? Math.log(x) : NaN),    formula: 'ln(x)' },
  sine:        { name: 'Sine',           group: 'Trigonometric', glyph: 'M2,14 Q7,2 12,14 Q17,26 22,14', fn: x => Math.sin(x),       formula: 'sin(x)' },
  cosine:      { name: 'Cosine',         group: 'Trigonometric', glyph: 'M2,4 Q7,16 12,4 Q17,-8 22,4',   fn: x => Math.cos(x),       formula: 'cos(x)' },
  absolute:    { name: 'Absolute value', glyph: 'M2,4 L13,24 L24,4',                        fn: x => Math.abs(x),                    formula: '|x|' },
  sqrt:        { name: 'Square root',    glyph: 'M2,24 Q4,8 24,4',                          fn: x => (x >= 0 ? Math.sqrt(x) : NaN),  formula: '√x' },
};

const DEFAULT_BASES = BASES;

/* ===== Operations ===== */
const OPERATIONS = {
  sum: {
    title: 'Sum', symbol: '+', short: 'Sum',
    formula: '(f + g)(x) = f(x) + g(x)',
    tooltip: 'Pointwise sum — at each x, add the heights of f and g.',
    body:
      'For every $x$, the result is the **sum of heights** of $f(x)$ and $g(x)$.\n' +
      '- Where one is zero, the result equals the other.\n' +
      '- Commutative: $f + g = g + f$.\n' +
      '- Domain: intersection of the domains of $f$ and $g$.',
    fn: (f, g) => x => f(x) + g(x),
    notes: (f, g) =>
      `Watch the **${ACCENT_NAME}** curve: at every x it sits at \`${f.formula} + ${g.formula}\` — the vertical sum of the two faded references.`,
  },
  difference: {
    title: 'Difference', symbol: '−', short: 'Diff.',
    formula: '(f − g)(x) = f(x) − g(x)',
    tooltip: 'Pointwise difference — subtract g from f.',
    body:
      'For every $x$, subtract $g(x)$ from $f(x)$.\n' +
      '- The result is **zero exactly where f and g cross**.\n' +
      '- Not commutative: $f - g \\neq g - f$ in general.\n' +
      '- Sign of the result tells which curve is on top: positive means $f > g$.',
    fn: (f, g) => x => f(x) - g(x),
    notes: (f, g) =>
      `The result hits zero where **${f.name.toLowerCase()}** and **${g.name.toLowerCase()}** cross — those intersections become the **roots** of \`${f.formula} − ${g.formula}\`.`,
  },
  product: {
    title: 'Product', symbol: '·', short: 'Prod.',
    formula: '(f · g)(x) = f(x) · g(x)',
    tooltip: 'Pointwise product — multiply the two heights at each x.',
    body:
      'At every $x$, multiply $f(x)$ by $g(x)$.\n' +
      '- The result is **zero wherever either** function is zero.\n' +
      '- Sign comes from the product of signs.\n' +
      '- Multiplying by a sinusoid creates an **oscillating envelope** — one factor sets the bounds, the other fills them.',
    fn: (f, g) => x => f(x) * g(x),
    notes: (f, g) =>
      `Zero whenever \`${f.formula}\` or \`${g.formula}\` is zero — those become the **roots** of the product. Sign of the result follows the product of signs.`,
  },
  quotient: {
    title: 'Quotient', symbol: '/', short: 'Quot.',
    formula: '(f / g)(x) = f(x) / g(x)',
    tooltip: 'Pointwise quotient — divide f by g. Undefined where g = 0.',
    body:
      'Divide $f(x)$ by $g(x)$ at every $x$.\n' +
      '- **Vertical asymptotes** appear where $g(x) = 0$ — the quotient diverges.\n' +
      '- Zeros of the result are the zeros of $f$ (provided $g$ is not also zero there).\n' +
      '- Domain: where both are defined **and** $g \\neq 0$.',
    fn: (f, g) => x => {
      const gv = g(x);
      if (!isFinite(gv) || Math.abs(gv) < 1e-10) return NaN;
      return f(x) / gv;
    },
    notes: (f, g) =>
      `Vertical asymptotes wherever **${g.name.toLowerCase()}** crosses zero. Zeros of the result follow zeros of **${f.name.toLowerCase()}** (where the denominator isn't also vanishing).`,
  },
};

// referenced inside OPERATIONS.sum.notes
const ACCENT_NAME = 'blue';

const OP_ORDER = ['sum', 'difference', 'product', 'quotient'];

/* ===== Tooltip CSS (same pattern as Transformations v2) ===== */
const TT_STYLES = `
  .fa-tt-wrap { position: relative; display: inline-flex; }
  .fa-tt {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #0f172a;
    color: #f1f5f9;
    font-size: 11.5px;
    font-weight: 400;
    line-height: 1.4;
    padding: 8px 10px;
    border-radius: 6px;
    white-space: normal;
    width: 220px;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.22);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.14s ease, transform 0.14s ease;
    z-index: 100;
    text-align: left;
  }
  .fa-tt-wrap:hover .fa-tt,
  .fa-tt-wrap:focus-within .fa-tt {
    opacity: 1;
    transform: translateX(-50%) translateY(-2px);
  }
  .fa-tt::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #0f172a;
  }
  .fa-tt-title {
    font-weight: 600;
    color: #fff;
    margin-bottom: 3px;
    font-size: 11.5px;
  }
`;

function FamilyGlyph({ d, active, color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 26 28" aria-hidden="true">
      <path d={d} fill="none"
            stroke={active ? color : '#94a3b8'}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FunctionArithmetic({
  initialF = 'quadratic',
  initialG = 'sine',
  initialOp = 'sum',
  families = DEFAULT_BASES,
  visualizerProps = {},
  infoPanelProps = {},
  extraTabs = [],
  darkMode = false,
  showPicker = true,
  showInfoPanel = true,
  maxWidth = '80vw',
  onChange,
}) {
  const familyKeys = Object.keys(families);
  const safeInitialF = families[initialF] ? initialF : familyKeys[0];
  const safeInitialG = families[initialG] ? initialG : (familyKeys[1] || familyKeys[0]);

  const [fKey, setFKey] = useState(safeInitialF);
  const [gKey, setGKey] = useState(safeInitialG);
  const [editing, setEditing] = useState('f');
  const [activeOp, setActiveOp] = useState(initialOp in OPERATIONS ? initialOp : 'sum');

  const f = families[fKey];
  const g = families[gKey];
  const op = OPERATIONS[activeOp];

  const notify = (next) => { if (onChange) onChange(next); };

  const selectFamily = key => {
    if (editing === 'f') {
      setFKey(key);
      notify({ fKey: key, gKey, op: activeOp });
    } else {
      setGKey(key);
      notify({ fKey, gKey: key, op: activeOp });
    }
  };

  const selectOp = key => {
    setActiveOp(key);
    notify({ fKey, gKey, op: key });
  };

  const swap = () => {
    setFKey(gKey);
    setGKey(fKey);
    notify({ fKey: gKey, gKey: fKey, op: activeOp });
  };

  /* ===== composed result function for the engine ===== */
  const resultFn = useMemo(() => op.fn(f.fn, g.fn), [op, f, g]);

  const resultFormula = `h(x) = ${f.formula} ${op.symbol} ${g.formula}`;

  const functions = useMemo(() => [
    { fn: f.fn, color: F_COLOR, label: 'f', formula: `f(x) = ${f.formula}`, visible: true, stroke: 1.4, pattern: [5, 5] },
    { fn: g.fn, color: G_COLOR, label: 'g', formula: `g(x) = ${g.formula}`, visible: true, stroke: 1.4, pattern: [5, 5] },
    { fn: resultFn, color: ACCENT, label: 'h', formula: resultFormula, visible: true, stroke: 2.4 },
  ], [f, g, resultFn, resultFormula]);

  /* ===== InfoPanel tab content ===== */
  const infoTabs = useMemo(() => {
    const content =
      `## ${op.title}\n` +
      `\`${op.formula}\`\n\n` +
      `### General\n${op.body}\n\n` +
      `### Applied to **${f.name}** and **${g.name}**\n${op.notes(f, g)}`;
    return [
      { key: 'explanation', label: 'Explanation', order: 0, content },
      ...extraTabs,
    ];
  }, [op, f, g, extraTabs]);

  /* ===== styles ===== */
  const fontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
  const monoStack = 'ui-monospace, "SF Mono", Menlo, monospace';
  const panelShadow = '0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.05)';
  const card = {
    background: darkMode ? '#0f172a' : '#fff',
    border: `1px solid ${darkMode ? '#1e293b' : '#f1f5f9'}`,
    borderRadius: 12, boxShadow: panelShadow,
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

  const editingColor = editing === 'f' ? F_COLOR : G_COLOR;

  const famBtn = (active) => ({
    display: 'flex', alignItems: 'center', gap: 10, width: '100%', textAlign: 'left',
    border: '1px solid transparent',
    background: active ? c.accentSoft : 'none',
    borderColor: active ? c.accentBorder : 'transparent',
    borderRadius: 8, padding: '8px 10px', cursor: 'pointer', fontFamily: 'inherit',
    fontSize: 13, fontWeight: active ? 600 : 400,
    color: active ? c.accentText : c.inkSoft,
    transition: 'background 0.12s, border-color 0.12s',
  });
  const groupHeader = {
    fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em',
    color: c.muted, fontWeight: 600, margin: '10px 8px 4px',
  };

  const mergedVisualizerProps = {
    defaultWidth: 880, defaultHeight: 600,
    ...visualizerProps,
  };

  /* picker entries with group headers */
  const pickerEntries = [];
  let lastGroup;
  Object.entries(families).forEach(([key, fam]) => {
    if (fam.group && fam.group !== lastGroup) {
      pickerEntries.push({ type: 'header', label: fam.group, key: `__hdr_${fam.group}` });
      lastGroup = fam.group;
    } else if (!fam.group) lastGroup = undefined;
    pickerEntries.push({ type: 'item', key, fam });
  });

  const editingSelectedKey = editing === 'f' ? fKey : gKey;

  const Chip = ({ dot, label, formula }) => (
    <span style={{
      fontFamily: monoStack, fontSize: 11.5,
      padding: '3px 9px', borderRadius: 5,
      color: dot === ACCENT ? ACCENT : c.inkSoft,
      background: dot === ACCENT ? c.accentSoft : c.softer,
      display: 'inline-flex', alignItems: 'center', gap: 6,
    }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: dot }} />
      <span style={{ color: c.muted, fontWeight: 600 }}>{label}</span>
      <span>=</span>
      <span>{formula}</span>
    </span>
  );

  const OpTab = ({ opKey }) => {
    const o = OPERATIONS[opKey];
    const active = activeOp === opKey;
    return (
      <span className="fa-tt-wrap" style={{ flex: 1 }}>
        <button
          onClick={() => selectOp(opKey)}
          style={{
            width: '100%',
            padding: '8px 6px', border: 'none', borderRadius: 6,
            fontFamily: 'inherit', fontSize: 11.5, fontWeight: 500, cursor: 'pointer',
            background: active ? (darkMode ? '#334155' : '#fff') : 'transparent',
            color: active ? c.ink : c.muted,
            boxShadow: active ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
            transition: 'all 0.15s', textAlign: 'center',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          }}
        >
          <span style={{
            fontFamily: monoStack, fontWeight: 700,
            color: active ? ACCENT : c.muted, fontSize: 13,
          }}>{o.symbol}</span>
          <span>{o.short}</span>
        </button>
        <span className="fa-tt" role="tooltip">
          <span className="fa-tt-title">{o.title}</span>
          {o.tooltip}
        </span>
      </span>
    );
  };

  return (
    <div style={{
      width: '100%', background: darkMode ? '#020617' : '#f6f7f9',
      minHeight: '100vh', fontFamily: fontStack,
      display: 'flex', justifyContent: 'center',
      padding: '20px 0', boxSizing: 'border-box',
    }}>
      <style dangerouslySetInnerHTML={{ __html: TT_STYLES }} />
      <div style={{
        width: '100%', maxWidth,
        display: 'flex', gap: 16, padding: '0 16px',
        alignItems: 'flex-start', boxSizing: 'border-box',
      }}>
        {showPicker && (
          <nav style={{ ...card, width: 220, padding: 10, flexShrink: 0 }}>
            <div style={{ ...groupHeader, margin: '6px 8px 6px' }}>Editing</div>

            {/* segmented f / g toggle */}
            <div style={{
              display: 'flex', gap: 2,
              background: c.border, borderRadius: 8, padding: 3,
              margin: '0 4px 10px',
            }}>
              {['f', 'g'].map(slot => {
                const active = editing === slot;
                const slotColor = slot === 'f' ? F_COLOR : G_COLOR;
                const slotKey = slot === 'f' ? fKey : gKey;
                return (
                  <button
                    key={slot}
                    onClick={() => setEditing(slot)}
                    style={{
                      flex: 1, padding: '6px 8px', border: 'none', borderRadius: 6,
                      fontFamily: 'inherit', fontSize: 11.5, fontWeight: 600, cursor: 'pointer',
                      background: active ? (darkMode ? '#334155' : '#fff') : 'transparent',
                      color: active ? c.ink : c.muted,
                      boxShadow: active ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: slotColor }} />
                    <span>{slot}</span>
                    <span style={{ color: c.muted, fontWeight: 400, fontSize: 11 }}>
                      · {families[slotKey].name}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={swap}
              style={{
                width: 'calc(100% - 8px)', margin: '0 4px 12px',
                background: darkMode ? '#0f172a' : '#fff',
                border: `1px solid ${c.border}`, color: c.inkSoft,
                padding: '5px 10px', borderRadius: 6,
                fontFamily: 'inherit', fontSize: 11, cursor: 'pointer',
              }}
              title="Swap f and g"
            >
              ⇄ Swap f and g
            </button>

            <div style={{ ...groupHeader, margin: '6px 8px 4px',
                          color: editingColor, fontWeight: 700 }}>
              Choose {editing}
            </div>

            {pickerEntries.map(e =>
              e.type === 'header'
                ? <div key={e.key} style={groupHeader}>{e.label}</div>
                : (
                  <button key={e.key} style={famBtn(e.key === editingSelectedKey)} onClick={() => selectFamily(e.key)}>
                    <FamilyGlyph d={e.fam.glyph} active={e.key === editingSelectedKey} color={editingColor} />
                    <span>{e.fam.name}</span>
                    {e.key === (editing === 'f' ? gKey : fKey) && (
                      <span style={{
                        marginLeft: 'auto', fontFamily: monoStack, fontSize: 10,
                        padding: '1px 5px', borderRadius: 3,
                        background: c.softer, color: c.muted, fontWeight: 600,
                      }}>{editing === 'f' ? 'g' : 'f'}</span>
                    )}
                  </button>
                )
            )}
          </nav>
        )}

        {/* CENTER */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ ...card, padding: 16 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 12, flexWrap: 'wrap', gap: 8,
            }}>
              <span style={{ fontSize: 15, letterSpacing: '-0.01em', color: c.ink }}>
                {op.title} of {f.name.toLowerCase()} and {g.name.toLowerCase()}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                <Chip dot={F_COLOR} label="f" formula={f.formula} />
                <Chip dot={G_COLOR} label="g" formula={g.formula} />
                <Chip dot={ACCENT} label="h" formula={`${f.formula} ${op.symbol} ${g.formula}`} />
              </div>
            </div>

            <VisualizerWithControls
              functions={functions}
              zoom={10}
              showAxisLabels
              showCrosshair
              showCurveTooltip
              labelMode="legend"
              showAsymptotes={activeOp === 'quotient'}
              {...mergedVisualizerProps}
            />

            <div style={{
              display: 'flex', gap: 8, flexWrap: 'wrap',
              marginTop: 12, padding: '8px 10px',
              background: c.soft, border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, alignItems: 'center',
            }}>
              <span style={{
                fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em',
                color: c.muted, fontWeight: 600, marginRight: 4,
              }}>Operation</span>
              <span style={{
                fontFamily: monoStack, fontSize: 11.5,
                padding: '3px 9px', borderRadius: 5,
                color: c.accentText, background: c.accentSoft,
                border: `1px solid ${c.accentBorder}`, fontWeight: 600,
              }}>
                {op.formula}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ width: 360, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {showInfoPanel && (
            <aside style={{ ...card, padding: 16 }}>
              <InfoPanel tabs={infoTabs} darkMode={darkMode} {...infoPanelProps} />
            </aside>
          )}

          <div style={{ ...card, padding: 12 }}>
            <div style={{
              display: 'flex', gap: 2,
              background: c.border, borderRadius: 8, padding: 3,
            }}>
              {OP_ORDER.map(opKey => <OpTab key={opKey} opKey={opKey} />)}
            </div>

            <div style={{
              marginTop: 12, background: c.soft,
              border: `1px solid ${c.borderSoft}`,
              borderRadius: 8, padding: '12px',
              fontSize: 12.5, color: c.inkSoft, lineHeight: 1.5,
            }}>
              <div style={{
                fontFamily: monoStack, fontSize: 12, color: ACCENT,
                marginBottom: 6, fontWeight: 600,
              }}>
                {op.formula}
              </div>
              <div>
                {op.tooltip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}