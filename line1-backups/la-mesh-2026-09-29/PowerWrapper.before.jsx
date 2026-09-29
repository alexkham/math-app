
'use client';

import React, { useState, useMemo } from 'react';
import { ScenePlayer } from './MatrixCore';

// ===========================================================
// PowerWrapper v4
//
// Same as v3, plus:
//   - Bracket scenes render a dashed primary group around
//     (LEFT, RIGHT) with the resulting power as a label.
//   - The final collapse scene renders a solid accent group
//     around the result matrix.
// Both use the new 'group-bracket' overlay added in MatrixCore-v2.
// ===========================================================

// -----------------------------------------------------------
// Shared style atoms
// -----------------------------------------------------------
const mathInlineStyle = {
  fontFamily: '\'Cambria Math\', Georgia, serif',
  fontStyle: 'italic'
};

const chevButtonStyle = {
  background: 'transparent',
  border: 'none',
  padding: '0 2px',
  fontSize: '8px',
  color: '#64748b',
  cursor: 'pointer',
  lineHeight: 1,
  fontFamily: 'inherit'
};

const POWER_INFO =
  'Raising a matrix to a power means multiplying it by itself repeatedly: ' +
  'A^n = A · A · ... · A (n times). A must be square. Each cell of A^n is ' +
  'a sum of products of n entries of A, joining row-index to column-index ' +
  'step by step.';

// -----------------------------------------------------------
// Path enumeration — every cell (i,j) of A^p contains
// size^(p-1) products. A path is [i, k_1, ..., k_{p-1}, j].
// -----------------------------------------------------------
function allPathsForCell(size, p, i, j) {
  if (p === 1) return [[i, j]];
  const inner = p - 1;
  const total = Math.pow(size, inner);
  const out = [];
  for (let n = 0; n < total; n++) {
    const ks = [];
    let r = n;
    for (let d = 0; d < inner; d++) {
      ks.push(r % size);
      r = Math.floor(r / size);
    }
    out.push([i, ...ks, j]);
  }
  return out;
}

function PathTerm({ path }) {
  const factors = [];
  for (let f = 0; f < path.length - 1; f++) {
    factors.push(
      <span key={f} style={{ fontStyle: 'italic' }}>
        a
        <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
          {path[f] + 1},{path[f + 1] + 1}
        </sub>
      </span>
    );
  }
  return <>{factors}</>;
}

function PathSum({ paths }) {
  return (
    <>
      {paths.map((path, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && (
            <span style={{ fontStyle: 'normal', margin: '0 2px' }}>+</span>
          )}
          <PathTerm path={path} />
        </React.Fragment>
      ))}
    </>
  );
}

// -----------------------------------------------------------
// SigmaCellDisplay — Σ summary for tier-3 cells.
// -----------------------------------------------------------
function SigmaCellDisplay({ size, p, i, j }) {
  const inner = p - 1;

  let sumIndicesNode;
  if (inner <= 3) {
    const items = [];
    for (let d = 1; d <= inner; d++) {
      if (d > 1) items.push(',');
      items.push(
        <span key={d} style={{ fontStyle: 'italic' }}>
          k<span style={{
            fontSize: '0.75em',
            verticalAlign: 'sub',
            lineHeight: 0,
            fontStyle: 'normal'
          }}>{d}</span>
        </span>
      );
    }
    sumIndicesNode = <>{items}</>;
  } else {
    sumIndicesNode = (
      <>
        <span style={{ fontStyle: 'italic' }}>
          k<span style={{
            fontSize: '0.75em',
            verticalAlign: 'sub',
            lineHeight: 0,
            fontStyle: 'normal'
          }}>1</span>
        </span>
        ,&hellip;,
        <span style={{ fontStyle: 'italic' }}>
          k<span style={{
            fontSize: '0.75em',
            verticalAlign: 'sub',
            lineHeight: 0,
            fontStyle: 'normal'
          }}>{inner}</span>
        </span>
      </>
    );
  }

  let productNode;
  if (p === 3) {
    productNode = (
      <>
        <Factor row="i" rowVal={i} col="k1" />
        <Factor row="k1" col="k2" />
        <Factor row="k2" col="j" colVal={j} />
      </>
    );
  } else {
    productNode = (
      <>
        <Factor row="i" rowVal={i} col="k1" />
        <span style={{
          fontStyle: 'normal',
          margin: '0 2px',
          fontSize: '0.85em'
        }}>&middot;&middot;&middot;</span>
        <Factor row={`k${inner}`} col="j" colVal={j} />
      </>
    );
  }

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      fontSize: p <= 3 ? '12px' : '11.5px',
      fontFamily: '\'Cambria Math\', Georgia, serif',
      lineHeight: 1.1,
      whiteSpace: 'nowrap'
    }}>
      <span style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1,
        fontStyle: 'normal'
      }}>
        <span style={{ fontSize: '0.6em', fontStyle: 'italic' }}>{size - 1}</span>
        <span style={{ fontSize: '1.5em', lineHeight: 1 }}>&Sigma;</span>
        <span style={{ fontSize: '0.6em' }}>{sumIndicesNode}</span>
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {productNode}
      </span>
    </span>
  );
}

function Factor({ row, rowVal, col, colVal }) {
  return (
    <span style={{ fontStyle: 'italic' }}>
      a
      <sub style={{ fontSize: '0.62em', fontStyle: 'italic' }}>
        <IndexLabel name={row} val={rowVal} />,
        <IndexLabel name={col} val={colVal} />
      </sub>
    </span>
  );
}

function IndexLabel({ name, val }) {
  if (val !== undefined) return <>{val + 1}</>;
  const m = name.match(/^k(\d+)$/);
  if (m) {
    return (
      <>
        k<span style={{
          fontSize: '0.75em',
          verticalAlign: 'sub',
          lineHeight: 0,
          fontStyle: 'normal'
        }}>{m[1]}</span>
      </>
    );
  }
  return <>{name}</>;
}

function Tier3CellWithTooltip({ size, p, i, j, tooltipClass, flipUp }) {
  const paths = allPathsForCell(size, p, i, j);
  return (
    <span style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    }}>
      <SigmaCellDisplay size={size} p={p} i={i} j={j} />
      <span className={`${tooltipClass}-tip${flipUp ? ' flip-up' : ''}`}>
        <span style={{
          display: 'block',
          fontStyle: 'normal',
          fontFamily: 'Arial, sans-serif',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#94a3b8',
          marginBottom: '5px'
        }}>
          (A<sup>{p}</sup>)<sub>{i + 1},{j + 1}</sub> &nbsp;— {paths.length} terms
        </span>
        {paths.map((path, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <span style={{ fontStyle: 'normal', margin: '0 3px' }}>+</span>
            )}
            <PathTerm path={path} />
          </React.Fragment>
        ))}
      </span>
    </span>
  );
}

// -----------------------------------------------------------
// Cell sizing per power tier.
// -----------------------------------------------------------
function cellDimsForPower(size, p) {
  if (p === 1) return { cellSize: 'auto', fontSize: 'auto' };
  if (p === 2) {
    const px = 100 + (size - 2) * 6;
    return { cellSize: px, fontSize: 'auto' };
  }
  if (p === 3) return { cellSize: 118, fontSize: 'auto' };
  return { cellSize: 122, fontSize: 'auto' };
}

function estimateMatrixHeight(size, p) {
  const { cellSize } = cellDimsForPower(size, p);
  const px = cellSize === 'auto' ? (size <= 3 ? 58 : 51) : cellSize;
  const matrixPx = size * px + (size - 1) * 3;
  return matrixPx + 30;
}

function PowerLabel({ p }) {
  if (p === 1) return <>A</>;
  return (
    <>
      A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{p}</sup>
    </>
  );
}

function powerMatrixSpec(size, p, tooltipClass) {
  const dims = cellDimsForPower(size, p);
  return {
    symbol: 'a',
    rows: size,
    cols: size,
    label: <PowerLabel p={p} />,
    cellSize: dims.cellSize,
    fontSize: dims.fontSize,
    cellOverrides: buildPowerOverrides(size, p, tooltipClass)
  };
}

function buildPowerOverrides(size, p, tooltipClass) {
  if (p === 1) return {};
  const flipUpRow = (i) => i >= Math.ceil(size / 2);

  const overrides = {};
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (p === 2) {
        const paths = allPathsForCell(size, p, i, j);
        overrides[`${i},${j}`] = {
          display: <PathSum paths={paths} />,
          fontStyle: 'normal',
          style: {
            fontSize: size <= 2 ? '11px' : '10px',
            lineHeight: 1.3,
            padding: '0 4px',
            whiteSpace: 'normal',
            wordBreak: 'normal',
            textAlign: 'center'
          }
        };
      } else {
        overrides[`${i},${j}`] = {
          display: (
            <Tier3CellWithTooltip
              size={size}
              p={p}
              i={i}
              j={j}
              tooltipClass={tooltipClass}
              flipUp={flipUpRow(i)}
            />
          ),
          fontStyle: 'normal',
          style: {
            padding: '0 4px',
            position: 'relative',
            overflow: 'visible',
            cursor: 'help'
          }
        };
      }
    }
  }
  return overrides;
}

function chainFormula(targetN, currentLeftP, factorsRemaining, mode) {
  const parts = [];
  parts.push(`<i>A</i><sup>${targetN}</sup> = `);
  if (mode === 'bracket') {
    parts.push(
      `<strong>(<i>A</i>${currentLeftP > 1 ? `<sup>${currentLeftP}</sup>` : ''} ` +
      `&middot; <i>A</i>)</strong>`
    );
    for (let r = 1; r < factorsRemaining; r++) {
      parts.push(' &middot; <i>A</i>');
    }
  } else {
    parts.push(`<i>A</i><sup>${currentLeftP}</sup>`);
    for (let r = 0; r < factorsRemaining; r++) {
      parts.push(' &middot; <i>A</i>');
    }
  }
  return parts.join('');
}

// Label HTML used inside the group-bracket pill.
function groupLabelHTML(p) {
  if (p === 1) return '<i>A</i>';
  return `<i>A</i><sup style="font-style:normal;font-size:0.7em">${p}</sup>`;
}

// ===========================================================
// SCENE BUILDER
// ===========================================================
function buildScenes(size, exponent, tooltipClass) {
  const scenes = [];

  if (exponent === 1) {
    scenes.push({
      title: '<i>A</i><sup>1</sup> = <i>A</i>',
      formula:
        'Raising <i>A</i> to the first power gives <i>A</i> itself. ' +
        'Increase the exponent to see repeated multiplication.',
      matrices: { A: powerMatrixSpec(size, 1, tooltipClass) },
      layout: [{ type: 'matrix', ref: 'A' }],
      highlights: {},
      overlays: []
    });
    return scenes;
  }

  // Scene 0: definition (n copies of A)
  const defMatrices = {};
  const defLayout = [];
  for (let f = 0; f < exponent; f++) {
    const id = `A${f}`;
    defMatrices[id] = powerMatrixSpec(size, 1, tooltipClass);
    defLayout.push({ type: 'matrix', ref: id });
    if (f < exponent - 1) defLayout.push({ type: 'operator', symbol: '*' });
  }
  scenes.push({
    title: `<i>A</i><sup>${exponent}</sup> is repeated multiplication`,
    formula:
      `<i>A</i><sup>${exponent}</sup> = ` +
      Array(exponent).fill('<i>A</i>').join(' &middot; ') +
      `. ${exponent} copies of <i>A</i>. We'll collapse them pairwise, ` +
      'watching the exponent grow and the cell content build up.',
    matrices: defMatrices,
    layout: defLayout,
    highlights: {},
    overlays: []
  });

  // Stages 1..exponent-1
  for (let stage = 1; stage <= exponent - 1; stage++) {
    const leftPowerBefore = stage;
    const leftPowerAfter  = stage + 1;
    const bareAsBefore    = exponent - stage;
    const bareAsAfter     = bareAsBefore - 1;

    // (a) bracket scene
    {
      const matrices = {};
      const layout = [];
      matrices.LEFT  = powerMatrixSpec(size, leftPowerBefore, tooltipClass);
      matrices.RIGHT = powerMatrixSpec(size, 1, tooltipClass);
      for (let r = 1; r < bareAsBefore; r++) {
        matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
      }

      const allPrimary = [];
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) allPrimary.push([i, j, 'primary']);
      }

      layout.push({ type: 'matrix', ref: 'LEFT' });
      layout.push({ type: 'operator', symbol: '*' });
      layout.push({ type: 'matrix', ref: 'RIGHT' });
      for (let r = 1; r < bareAsBefore; r++) {
        layout.push({ type: 'operator', symbol: '*' });
        layout.push({ type: 'matrix', ref: `R${r}` });
      }

      scenes.push({
        title:
          `Stage ${stage} of ${exponent - 1}: bracket ` +
          `(<i>A</i>${leftPowerBefore > 1 ? `<sup>${leftPowerBefore}</sup>` : ''} ` +
          `&middot; <i>A</i>) &rarr; <i>A</i><sup>${leftPowerAfter}</sup>`,
        formula:
          chainFormula(exponent, leftPowerBefore, bareAsBefore, 'bracket') +
          '. Group the next pair: exponents add ' +
          `(${leftPowerBefore} + 1 = ${leftPowerAfter}).`,
        matrices,
        layout,
        highlights: {
          LEFT: { cells: allPrimary },
          RIGHT: { cells: allPrimary }
        },
        overlays: [
          {
            type: 'group-bracket',
            matrices: ['LEFT', 'RIGHT'],
            label: groupLabelHTML(leftPowerAfter),
            style: 'primary',
            variant: 'dashed',
            padding: 16,
            labelOffset: 8
          }
        ]
      });
    }

    // (b) collapse scene
    {
      const matrices = {};
      const layout = [];
      matrices.LEFT = powerMatrixSpec(size, leftPowerAfter, tooltipClass);
      for (let r = 0; r < bareAsAfter; r++) {
        matrices[`R${r}`] = powerMatrixSpec(size, 1, tooltipClass);
      }

      const allAccent = [];
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) allAccent.push([i, j, 'accent']);
      }

      layout.push({ type: 'matrix', ref: 'LEFT' });
      for (let r = 0; r < bareAsAfter; r++) {
        layout.push({ type: 'operator', symbol: '*' });
        layout.push({ type: 'matrix', ref: `R${r}` });
      }

      const tierNote =
        leftPowerAfter <= 2
          ? 'Each cell of <i>A</i><sup>' + leftPowerAfter + '</sup> shows its full content inline.'
          : 'Each cell of <i>A</i><sup>' + leftPowerAfter +
            '</sup> has ' + Math.pow(size, leftPowerAfter - 1) +
            ' terms &mdash; too many for inline display. ' +
            'The cell shows a &Sigma; summary; <strong>hover any cell</strong> ' +
            'to see the full expansion.';

      const isFinal = (stage === exponent - 1);

      // On the final scene, wrap the result matrix in a solid
      // accent group with the A^n label. On intermediate collapse
      // scenes leave it un-bracketed (the choreography re-introduces
      // a bracket on the next bracket scene).
      const overlays = isFinal
        ? [
            {
              type: 'group-bracket',
              matrices: ['LEFT'],
              label: groupLabelHTML(exponent),
              style: 'accent',
              variant: 'solid',
              padding: 16,
              labelOffset: 8
            }
          ]
        : [];

      scenes.push({
        title: isFinal
          ? `Final: <i>A</i><sup>${exponent}</sup> &mdash; the result`
          : `Stage ${stage} of ${exponent - 1}: collapse to <i>A</i><sup>${leftPowerAfter}</sup>`,
        formula:
          chainFormula(exponent, leftPowerAfter, bareAsAfter, 'collapse') +
          '. ' + tierNote +
          (isFinal
            ? ' Bracketing order did not matter &mdash; any pairwise grouping yields the same matrix.'
            : ''),
        matrices,
        layout,
        highlights: { LEFT: { cells: allAccent } },
        overlays
      });
    }
  }

  return scenes;
}

// ===========================================================
// UI helpers
// ===========================================================
function InfoIcon({ tip }) {
  return (
    <span
      className="pw-info"
      tabIndex={0}
      aria-label="More info"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#dbeafe',
        color: '#1e40af',
        fontSize: '11px',
        fontWeight: 700,
        cursor: 'help',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1,
        userSelect: 'none',
        flexShrink: 0
      }}
    >
      ?
      <span className="pw-tip">{tip}</span>
    </span>
  );
}

function FieldLabel({ children, info }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      margin: '0 0 10px'
    }}>
      <span style={{
        fontSize: '16px',
        color: '#1e40af',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        lineHeight: 1.2
      }}>
        {children}
      </span>
      {info && <InfoIcon tip={info} />}
    </div>
  );
}

function Stepper({ value, onChange, min, max, locked = false, lockReason }) {
  const interactive = !locked;
  return (
    <span
      title={locked ? lockReason : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px 4px 10px',
        borderRadius: '6px',
        background: locked ? '#f1f5f9' : 'white',
        border: `1px ${locked ? 'dashed' : 'solid'} ${locked ? '#94a3b8' : '#cbd5e1'}`
      }}
    >
      <span style={{
        ...mathInlineStyle,
        fontWeight: 500,
        minWidth: '14px',
        textAlign: 'center',
        color: locked ? '#64748b' : '#0f172a'
      }}>
        {value}
      </span>
      {interactive ? (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.7 }}>
          <button
            className="pw-stepper-btn"
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            style={chevButtonStyle}
            aria-label="Increase"
          >&#9650;</button>
          <button
            className="pw-stepper-btn"
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            style={chevButtonStyle}
            aria-label="Decrease"
          >&#9660;</button>
        </span>
      ) : (
        <span style={{
          fontSize: '11px',
          color: '#94a3b8',
          display: 'inline-flex',
          alignItems: 'center'
        }}>&#8646;</span>
      )}
    </span>
  );
}

// ===========================================================
// Main wrapper
// ===========================================================
export default function PowerWrapper({
  defaultSize = 2,
  defaultExponent = 4,
  sizeRange = [2, 3, 4],
  exponentRange = [1, 2, 3, 4, 5],
  title = 'Matrix Power',
  subtitle = 'Visualization of A\u207F as bracket-and-collapse: every cell shows its real symbolic content.',
  defaultSpeed = 1400
}) {
  const [size, setSize] = useState(defaultSize);
  const [exponent, setExponent] = useState(defaultExponent);

  const sizeMin = sizeRange[0];
  const sizeMax = sizeRange[sizeRange.length - 1];
  const expMin = exponentRange[0];
  const expMax = exponentRange[exponentRange.length - 1];

  const instanceId = React.useId().replace(/:/g, '');
  const tooltipClass = `pw-${instanceId}`;

  const scenes = useMemo(
    () => buildScenes(size, exponent, tooltipClass),
    [size, exponent, tooltipClass]
  );

  const canvasMinHeight = useMemo(() => {
    const matrixH = estimateMatrixHeight(size, exponent);
    const tipClearance = exponent <= 2 ? 60 : exponent <= 3 ? 130 : 180;
    // Bracket adds ~30px on top for the label pill.
    const bracketClearance = 36;
    return Math.max(320, matrixH + 2 * tipClearance + bracketClearance);
  }, [size, exponent]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      padding: '22px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>{`
        .pw-stepper-btn:hover:not(:disabled) { color: #1e40af; }
        .pw-stepper-btn:disabled { color: #cbd5e1; cursor: not-allowed; }

        .pw-info:hover, .pw-info:focus { background: #bfdbfe; outline: none; }
        .pw-info .pw-tip {
          visibility: hidden; opacity: 0;
          position: absolute; top: calc(100% + 8px); left: 50%;
          transform: translateX(-50%);
          background: #1e293b; color: #f1f5f9;
          font-size: 12px; line-height: 1.5; font-weight: 400;
          padding: 9px 13px; border-radius: 6px;
          width: 280px; text-align: left;
          pointer-events: none;
          transition: opacity 0.12s ease, visibility 0.12s;
          z-index: 100;
          font-family: Arial, sans-serif;
          font-style: normal;
        }
        .pw-info .pw-tip::before {
          content: ''; position: absolute;
          bottom: 100%; left: 50%; transform: translateX(-50%);
          border: 5px solid transparent; border-bottom-color: #1e293b;
        }
        .pw-info:hover .pw-tip, .pw-info:focus .pw-tip {
          visibility: visible; opacity: 1;
        }

        .${tooltipClass}-tip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: #1e293b;
          color: #f1f5f9;
          border-radius: 6px;
          padding: 10px 13px;
          font-size: 12px;
          font-family: 'Cambria Math', Georgia, serif;
          font-style: italic;
          line-height: 1.7;
          pointer-events: none;
          transition: opacity 0.12s ease, visibility 0.12s;
          z-index: 100;
          max-width: 420px;
          width: max-content;
          text-align: left;
          white-space: normal;
        }
        .${tooltipClass}-tip::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-bottom-color: #1e293b;
        }
        .${tooltipClass}-tip.flip-up {
          top: auto;
          bottom: calc(100% + 12px);
        }
        .${tooltipClass}-tip.flip-up::before {
          bottom: auto;
          top: 100%;
          border-bottom-color: transparent;
          border-top-color: #1e293b;
        }
        [data-matrix-id] [data-row][data-col]:hover .${tooltipClass}-tip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>

      {(title || subtitle) && (
        <div style={{ marginBottom: '18px' }}>
          {title && (
            <h2 style={{
              fontSize: '22px',
              color: '#1e40af',
              margin: '0 0 4px 0',
              fontWeight: 'bold'
            }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        padding: '18px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px',
        alignItems: 'flex-start'
      }}>
        <div>
          <FieldLabel info={POWER_INFO}>Matrix size (square)</FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>A</span>
            <Stepper value={size} onChange={setSize} min={sizeMin} max={sizeMax} />
            <span style={{ color: '#94a3b8' }}>&times;</span>
            <Stepper
              value={size}
              onChange={() => {}}
              min={sizeMin}
              max={sizeMax}
              locked={true}
              lockReason="A is square &mdash; both dimensions are linked"
            />
          </div>
        </div>

        <div>
          <FieldLabel>Exponent</FieldLabel>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}>
            <span style={{ ...mathInlineStyle, fontSize: '15px', fontWeight: 500 }}>n</span>
            <Stepper value={exponent} onChange={setExponent} min={expMin} max={expMax} />
          </div>
        </div>

        <div style={{ alignSelf: 'center' }}>
          <FieldLabel>Computing</FieldLabel>
          <div style={{
            ...mathInlineStyle,
            fontSize: '18px',
            color: '#1e40af',
            fontWeight: 500
          }}>
            A<sup style={{ fontStyle: 'normal', fontSize: '0.65em' }}>{exponent}</sup>{' '}
            <span style={{ fontSize: '14px', color: '#475569', fontWeight: 'normal' }}>
              ={' '}
              {exponent === 1
                ? <span style={mathInlineStyle}>A</span>
                : Array(exponent).fill('A').join(' \u00B7 ')}
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '18px' }}>
        <ScenePlayer
          scenes={scenes}
          defaultSpeed={defaultSpeed}
          showSpeedSelector={true}
          showStepIndicator={true}
          showStepLog={true}
          stepLogTitle="Step explanations"
          sceneCanvasProps={{ minHeight: canvasMinHeight }}
        />
      </div>
    </div>
  );
}