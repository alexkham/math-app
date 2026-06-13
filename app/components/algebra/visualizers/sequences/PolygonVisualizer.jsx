import React, { useState, useCallback } from 'react';

/* ============================================================
   Polygonal Sequences Visualizer
   ------------------------------------------------------------
   - Polygon selector as buttons (k = 3..8)
   - Gnomon-number labels are now optional via a toggle
     (default: off). Toggle includes a short explanation and
     a placeholder on-page link to the gnomon section.
   ============================================================ */


/* ------------------------------------------------------------
   Constants
   ------------------------------------------------------------ */

const DEFAULT_PALETTE = [
  '#15355e', '#5a98c8', '#2856a0', '#7ab3da', '#1e4a7e',
  '#4985be', '#275f9c', '#6aa9d3', '#1d4675', '#3a78b8',
  '#5294c4', '#246092', '#7fb1d6', '#1a3a68', '#408cc0',
  '#2a6ea8', '#80b8d8', '#22507e', '#4e92c2', '#316498'
];

export const DEFAULT_VISUAL_CEILING = {
  3: 30,
  4: 30,
  5: 25,
  6: 20,
  7: 16,
  8: 14
};

const POLYGON_NAMES = {
  3: 'Triangular', 4: 'Square', 5: 'Pentagonal',
  6: 'Hexagonal',  7: 'Heptagonal', 8: 'Octagonal'
};

const POLYGON_SYMBOL = {
  3: 'T', 4: 'S', 5: 'P', 6: 'H', 7: 'Hp', 8: 'O'
};

const FORMULA_GENERAL = {
  3: { numerator: '{n}({n} + 1)',       denominator: '2' },
  4: { display:   '{n}\u00b2' },
  5: { numerator: '{n}(3{n} \u2212 1)', denominator: '2' },
  6: { display:   '{n}(2{n} \u2212 1)' },
  7: { numerator: '{n}(5{n} \u2212 3)', denominator: '2' },
  8: { display:   '{n}(3{n} \u2212 2)' }
};

const MIN_N_DEFAULT = 1;
const MAX_N_DEFAULT = 100;


/* ------------------------------------------------------------
   Math (exported)
   ------------------------------------------------------------ */

export function polygonalValue(k, n) {
  return (n * ((k - 2) * n - (k - 4))) / 2;
}

export function gnomonSize(k, m) {
  if (m === 1) return 1;
  return (k - 2) * (m - 1) + 1;
}


/* ------------------------------------------------------------
   Layout computation per k
   ------------------------------------------------------------ */

function layoutTriangular(n) {
  const dots = [];
  const labels = [];
  for (let r = 1; r <= n; r++) {
    const rowY = -(r - 1);
    const rowStartX = -(r - 1) / 2;
    for (let i = 0; i < r; i++) {
      dots.push({ x: rowStartX + i, y: rowY, gnomon: r });
    }
  }
  const labelX = (n - 1) / 2 + 1.5;
  for (let r = 1; r <= n; r++) {
    labels.push({
      x: labelX,
      y: -(r - 1),
      text: r,
      anchor: 'start',
      gnomon: r
    });
  }
  return { dots, labels };
}

function layoutSquare(n) {
  const dots = [];
  const labels = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dots.push({
        x: j - 1,
        y: -(i - 1),
        gnomon: Math.max(i, j)
      });
    }
  }
  const labelY = 1.5;
  for (let j = 1; j <= n; j++) {
    labels.push({
      x: j - 1,
      y: labelY,
      text: 2 * j - 1,
      anchor: 'middle',
      gnomon: j
    });
  }
  return { dots, labels };
}

function layoutGenericPolygonal(k, n) {
  const dots = [];
  const labels = [];

  // Unit direction along the v0-v1 edge (from the top vertex toward
  // the next CCW vertex). Labels for each gnomon m are placed at
  // distance (m - 1) along this direction (i.e. at v1 of the m-th
  // polygon), offset outward perpendicular to the edge so they sit
  // just outside the polygon's upper-left side.
  const v01x = -Math.cos(Math.PI / k);
  const v01y = -Math.sin(Math.PI / k);
  // Outward perpendicular: rotate (v01x, v01y) by 90 degrees CW.
  const perpX = -Math.sin(Math.PI / k);
  const perpY =  Math.cos(Math.PI / k);
  // How far from the v0-v1 edge the labels sit.
  const LABEL_OFFSET = 1.2;

  // m = 1 is a single dot at the origin.
  dots.push({ x: 0, y: 0, gnomon: 1 });
  labels.push({
    x: LABEL_OFFSET * perpX,
    y: LABEL_OFFSET * perpY,
    text: 1,
    anchor: 'end',
    gnomon: 1
  });

  for (let m = 2; m <= n; m++) {
    const R = (m - 1) / (2 * Math.sin(Math.PI / k));
    const cy = -R;

    const vertices = [];
    for (let i = 0; i < k; i++) {
      const ang = Math.PI / 2 + (2 * Math.PI * i) / k;
      vertices.push({
        x: R * Math.cos(ang),
        y: cy + R * Math.sin(ang)
      });
    }

    const outer = [];
    for (let i = 1; i <= k - 1; i++) outer.push(vertices[i]);

    for (let edge = 0; edge < k - 2; edge++) {
      const start = outer[edge];
      const end   = outer[edge + 1];
      for (let j = 0; j < m - 1; j++) {
        const t = j / (m - 1);
        dots.push({
          x: start.x + (end.x - start.x) * t,
          y: start.y + (end.y - start.y) * t,
          gnomon: m
        });
      }
    }
    dots.push({ x: outer[k - 2].x, y: outer[k - 2].y, gnomon: m });

    // Label sits at v1 of the m-th polygon, offset outward.
    const v1x = (m - 1) * v01x;
    const v1y = (m - 1) * v01y;
    labels.push({
      x: v1x + LABEL_OFFSET * perpX,
      y: v1y + LABEL_OFFSET * perpY,
      text: gnomonSize(k, m),
      anchor: 'end',
      gnomon: m
    });
  }

  return { dots, labels };
}

function computeLayout(k, n) {
  if (k === 3) return layoutTriangular(n);
  if (k === 4) return layoutSquare(n);
  return layoutGenericPolygonal(k, n);
}


/* ------------------------------------------------------------
   PolygonalEngine — pure SVG renderer (named export)
   ------------------------------------------------------------
   New prop: showGnomonNumbers (default true). When false, the
   side labels are not drawn and are excluded from the bounding
   box, so the dot figure uses the full canvas.
   ------------------------------------------------------------ */

export function PolygonalEngine({
  k = 3,
  n = 4,
  showGnomon = true,
  showGnomonNumbers = true,
  width = 640,
  height = 560,
  palette = DEFAULT_PALETTE,
  visualCeiling = null
}) {
  if (k < 3 || k > 8) {
    return (
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <text x={width / 2} y={height / 2} textAnchor="middle"
              fill="#5a7090" fontFamily="Georgia, serif" fontSize={14}>
          k = {k} is out of supported range (3&ndash;8)
        </text>
      </svg>
    );
  }

  const ceiling = visualCeiling !== null
    ? visualCeiling
    : (DEFAULT_VISUAL_CEILING[k] || 30);

  if (n > ceiling) {
    const value = polygonalValue(k, n);
    const name  = POLYGON_NAMES[k].toLowerCase();
    return (
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <rect x={80} y={height / 2 - 80} width={width - 160} height={160} rx={8}
              fill="#e8eff7" stroke="#c4d4e6" strokeWidth={1.5} />
        <text x={width / 2} y={height / 2 - 32} fill="#1a2754"
              fontFamily="Georgia, serif" fontSize={18} fontWeight="bold"
              textAnchor="middle">
          Beyond visual range (n &gt; {ceiling})
        </text>
        <text x={width / 2} y={height / 2 - 4} fill="#5a7090"
              fontFamily="Georgia, serif" fontSize={14} fontStyle="italic"
              textAnchor="middle">
          Dots become too small to read clearly past n = {ceiling} for {name} numbers.
        </text>
        <text x={width / 2} y={height / 2 + 18} fill="#5a7090"
              fontFamily="Georgia, serif" fontSize={14} fontStyle="italic"
              textAnchor="middle">
          Formula and sum in the panels still apply.
        </text>
        <text x={width / 2} y={height / 2 + 56} fill="#1a4d8a"
              fontFamily="Cambria Math, Times New Roman, serif" fontSize={22}
              fontWeight="bold" textAnchor="middle">
          {POLYGON_SYMBOL[k]}({n}) = {value.toLocaleString('en-US')}
        </text>
      </svg>
    );
  }

  const { dots, labels } = computeLayout(k, n);

  // Bounding box. When labels are hidden, exclude them so the
  // figure can claim their previously reserved space.
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const d of dots) {
    if (d.x < minX) minX = d.x; if (d.x > maxX) maxX = d.x;
    if (d.y < minY) minY = d.y; if (d.y > maxY) maxY = d.y;
  }
  if (showGnomonNumbers) {
    for (const l of labels) {
      if (l.x < minX) minX = l.x; if (l.x > maxX) maxX = l.x;
      if (l.y < minY) minY = l.y; if (l.y > maxY) maxY = l.y;
    }
  }
  const figureW = (maxX - minX) || 1;
  const figureH = (maxY - minY) || 1;

  const margin    = 30;
  const availW    = width  - 2 * margin;
  const availH    = height - 2 * margin;
  const maxScale  = 45;
  let scale       = Math.min(availW / figureW, availH / figureH, maxScale);
  let dotR        = scale * 0.4;
  if (dotR < 1.5) dotR = 1.5;
  const strokeW   = Math.max(0.25, Math.min(1.5, dotR * 0.15));

  const figureScaledW = figureW * scale;
  const figureScaledH = figureH * scale;
  const offsetX = (width  - figureScaledW) / 2 - minX * scale;
  const offsetY = (height - figureScaledH) / 2 + maxY * scale;

  function project(p) {
    return {
      x: offsetX + p.x * scale,
      y: offsetY - p.y * scale
    };
  }

  const labelFS = Math.max(13, Math.min(22, dotR * 1.6));
  const drawLabels = showGnomonNumbers && n <= 30 && dotR >= 5;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      {dots.map((d, idx) => {
        const p = project(d);
        const color = showGnomon
          ? palette[(d.gnomon - 1) % palette.length]
          : '#2856a0';
        return (
          <circle key={`d${idx}`}
                  cx={p.x.toFixed(2)} cy={p.y.toFixed(2)}
                  r={dotR.toFixed(2)} fill={color}
                  stroke="#ffffff" strokeWidth={strokeW.toFixed(2)} />
        );
      })}
      {drawLabels && labels.map((l, idx) => {
        const p = project(l);
        const color = showGnomon
          ? palette[(l.gnomon - 1) % palette.length]
          : '#1a2754';
        return (
          <text key={`l${idx}`}
                x={p.x.toFixed(2)} y={p.y.toFixed(2)}
                fill={color}
                fontFamily="Cambria Math, Times New Roman, serif"
                fontSize={labelFS.toFixed(1)}
                fontWeight="bold"
                dominantBaseline="central"
                textAnchor={l.anchor}>
            {l.text}
          </text>
        );
      })}
    </svg>
  );
}


/* ------------------------------------------------------------
   Internal helpers used by the wrapper
   ------------------------------------------------------------ */

function fmt(v) {
  return v.toLocaleString('en-US');
}

function colorAt(i, showGnomon) {
  return showGnomon ? DEFAULT_PALETTE[(i - 1) % DEFAULT_PALETTE.length] : '#1a2754';
}

function substituteN(template, n) {
  return template.replace(/(\d?)\{n\}/g, (match, digitPrefix) => {
    const span = `<span class="pv-term">${n}</span>`;
    return digitPrefix ? `${digitPrefix}\u00b7${span}` : span;
  });
}

function generalForm(template) {
  return template.replace(/\{n\}/g, 'n');
}

function FormulaDisplay({ formula, n, k, isSubstituted }) {
  const symbol = POLYGON_SYMBOL[k];

  if (isSubstituted) {
    const value = polygonalValue(k, n);
    if (formula.numerator) {
      return (
        <span>
          {symbol}<sub><span className="pv-term">{n}</span></sub> ={' '}
          <span className="pv-frac">
            <span className="pv-num"
                  dangerouslySetInnerHTML={{ __html: substituteN(formula.numerator, n) }} />
            <span className="pv-den">{formula.denominator}</span>
          </span>
          {' = '}
          <span className="pv-result">{fmt(value)}</span>
        </span>
      );
    }
    return (
      <span>
        {symbol}<sub><span className="pv-term">{n}</span></sub> ={' '}
        <span dangerouslySetInnerHTML={{ __html: substituteN(formula.display, n) }} />
        {' = '}
        <span className="pv-result">{fmt(value)}</span>
      </span>
    );
  }

  if (formula.numerator) {
    return (
      <span>
        {symbol}<sub>n</sub> ={' '}
        <span className="pv-frac">
          <span className="pv-num">{generalForm(formula.numerator)}</span>
          <span className="pv-den">{formula.denominator}</span>
        </span>
      </span>
    );
  }
  return (
    <span>
      {symbol}<sub>n</sub> = {generalForm(formula.display)}
    </span>
  );
}

function parseAndClamp(raw, minN, maxN) {
  if (raw === '' || raw === '-' || raw === null || raw === undefined) return null;
  const parsed = parseInt(raw, 10);
  if (isNaN(parsed)) return null;
  return Math.max(minN, Math.min(maxN, parsed));
}


/* ------------------------------------------------------------
   PolygonalVisualizer — wrapper (default export)
   ------------------------------------------------------------ */

export default function PolygonalVisualizer({
  initialK = 3,
  initialN = 4,
  initialShowGnomon = true,
  initialShowGnomonNumbers = false,
  k: controlledK,
  onKChange,
  n: controlledN,
  onNChange,
  showGnomon: controlledShowGnomon,
  onShowGnomonChange,
  showGnomonNumbers: controlledShowGnomonNumbers,
  onShowGnomonNumbersChange,
  allowedK = [3, 4, 5, 6, 7, 8],
  maxN = MAX_N_DEFAULT
}) {
  const [internalK, setInternalK] = useState(initialK);
  const [internalN, setInternalN] = useState(initialN);
  const [internalShowGnomon, setInternalShowGnomon] = useState(initialShowGnomon);
  const [internalShowGnomonNumbers, setInternalShowGnomonNumbers] =
    useState(initialShowGnomonNumbers);
  const [showGnomonHelp, setShowGnomonHelp] = useState(false);
  const [inputDraft, setInputDraft] = useState(null);

  const k = controlledK !== undefined ? controlledK : internalK;
  const n = controlledN !== undefined ? controlledN : internalN;
  const showGnomon = controlledShowGnomon !== undefined
    ? controlledShowGnomon
    : internalShowGnomon;
  const showGnomonNumbers = controlledShowGnomonNumbers !== undefined
    ? controlledShowGnomonNumbers
    : internalShowGnomonNumbers;

  // Per-k visualization ceiling, also capped by the maxN prop if smaller.
  const effectiveMax = Math.min(DEFAULT_VISUAL_CEILING[k] || 30, maxN);

  const setK = useCallback((newK) => {
    if (controlledK === undefined) setInternalK(newK);
    if (onKChange) onKChange(newK);
    // Clamp n down to the new polygon's ceiling, if needed.
    const newMax = Math.min(DEFAULT_VISUAL_CEILING[newK] || 30, maxN);
    if (n > newMax) {
      if (controlledN === undefined) setInternalN(newMax);
      if (onNChange) onNChange(newMax);
    }
  }, [controlledK, onKChange, controlledN, onNChange, n, maxN]);

  const setN = useCallback((newN) => {
    if (controlledN === undefined) setInternalN(newN);
    if (onNChange) onNChange(newN);
  }, [controlledN, onNChange]);

  const setShowGnomon = useCallback((newVal) => {
    if (controlledShowGnomon === undefined) setInternalShowGnomon(newVal);
    if (onShowGnomonChange) onShowGnomonChange(newVal);
  }, [controlledShowGnomon, onShowGnomonChange]);

  const setShowGnomonNumbers = useCallback((newVal) => {
    if (controlledShowGnomonNumbers === undefined) setInternalShowGnomonNumbers(newVal);
    if (onShowGnomonNumbersChange) onShowGnomonNumbersChange(newVal);
  }, [controlledShowGnomonNumbers, onShowGnomonNumbersChange]);

  const handleNInput = (raw) => {
    setInputDraft(raw);
    if (raw === '' || raw === '-') return;
    const parsed = parseInt(raw, 10);
    if (isNaN(parsed)) return;
    setN(parsed);
  };

  const handleNBlur = (raw) => {
    const parsed = parseInt(raw, 10);
    if (isNaN(parsed)) setN(MIN_N_DEFAULT);
    setInputDraft(null);
  };

  const incrementN = () => { setInputDraft(null); setN(n + 1); };
  const decrementN = () => { setInputDraft(null); setN(Math.max(MIN_N_DEFAULT, n - 1)); };

  const total   = polygonalValue(k, n);
  const formula = FORMULA_GENERAL[k];

  const renderSum = () => {
    if (n <= 6) {
      return (
        <span>
          {Array.from({ length: n }, (_, i) => i + 1).map((m, idx) => (
            <React.Fragment key={m}>
              <span style={{ color: colorAt(m, showGnomon), fontWeight: 'bold' }}>
                {fmt(gnomonSize(k, m))}
              </span>
              {idx < n - 1 && ' + '}
            </React.Fragment>
          ))}
          <br />= <span className="pv-total">{fmt(total)}</span>
        </span>
      );
    }
    return (
      <span>
        <span style={{ color: colorAt(1, showGnomon), fontWeight: 'bold' }}>
          {fmt(gnomonSize(k, 1))}
        </span>
        {' + '}
        <span style={{ color: colorAt(2, showGnomon), fontWeight: 'bold' }}>
          {fmt(gnomonSize(k, 2))}
        </span>
        {' + '}
        <span style={{ color: colorAt(3, showGnomon), fontWeight: 'bold' }}>
          {fmt(gnomonSize(k, 3))}
        </span>
        {' + \u2026 + '}
        <span style={{ color: colorAt(n, showGnomon), fontWeight: 'bold' }}>
          {fmt(gnomonSize(k, n))}
        </span>
        <br />= <span className="pv-total">{fmt(total)}</span>
      </span>
    );
  };

  const renderSequence = () => {
    if (n <= 12) {
      return (
        <span>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m, idx) => {
            const v = polygonalValue(k, m);
            return (
              <React.Fragment key={m}>
                {m === n
                  ? <span className="pv-highlight">{fmt(v)}</span>
                  : <span>{fmt(v)}</span>}
                {idx < 11 && ', '}
              </React.Fragment>
            );
          })}
          {', \u2026'}
        </span>
      );
    }
    return (
      <span>
        {[1, 2, 3, 4, 5].map((m, idx) => (
          <React.Fragment key={m}>
            {fmt(polygonalValue(k, m))}
            {idx < 4 && ', '}
          </React.Fragment>
        ))}
        {', \u2026, '}
        {n > 6 && <>{fmt(polygonalValue(k, n - 1))}{', '}</>}
        <span className="pv-highlight">{fmt(polygonalValue(k, n))}</span>
        {n < maxN && <>{', '}{fmt(polygonalValue(k, n + 1))}</>}
        {', \u2026'}
      </span>
    );
  };

  const polygonName   = POLYGON_NAMES[k];
  const showKSelector = allowedK.length > 1;

  return (
    <div className="polygonal-visualizer">
      <style>{`
        .polygonal-visualizer {
          font-family: Georgia, 'Times New Roman', serif;
          color: #1a2754;
          max-width: 1200px;
          margin: 0 auto;
        }
        .polygonal-visualizer h2 {
          margin: 0 0 8px 0;
          font-size: 28px;
          color: #1a2754;
          letter-spacing: -0.3px;
        }
        .polygonal-visualizer .pv-subtitle {
          color: #5a7090;
          margin-bottom: 28px;
          font-size: 15px;
          font-style: italic;
        }
        .polygonal-visualizer .pv-controls {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          padding: 18px 22px;
          background: #e8eff7;
          border-radius: 6px;
          margin-bottom: 24px;
        }
        .polygonal-visualizer .pv-control-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .polygonal-visualizer .pv-k-buttons {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .polygonal-visualizer label {
          font-weight: 600;
          color: #1a2754;
          font-size: 15px;
        }
        .polygonal-visualizer .pv-range-hint {
          color: #5a7090;
          font-size: 12px;
          font-style: italic;
        }
        .polygonal-visualizer input[type="range"] {
          width: 220px;
          accent-color: #2856a0;
        }
        .polygonal-visualizer input[type="number"] {
          width: 72px;
          padding: 6px 8px;
          border: 1px solid #b4c8de;
          border-radius: 4px;
          font-size: 18px;
          font-family: 'Cambria Math', 'Times New Roman', serif;
          font-weight: bold;
          color: #2856a0;
          text-align: center;
          background: #ffffff;
        }
        .polygonal-visualizer input[type="number"]:focus {
          outline: 2px solid #2856a0;
          outline-offset: -1px;
          border-color: #2856a0;
        }
        .polygonal-visualizer input[type="number"].pv-input-error {
          border-color: #c4453e;
          background: #fff5f5;
          color: #c4453e;
        }
        .polygonal-visualizer input[type="number"].pv-input-error:focus {
          outline-color: #c4453e;
          border-color: #c4453e;
        }
        .polygonal-visualizer .pv-input-error-msg {
          color: #c4453e;
          font-size: 12px;
          font-weight: 600;
        }
        .polygonal-visualizer .pv-step-btn {
          background: #fff;
          border: 1px solid #b4c8de;
          width: 32px;
          height: 32px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          color: #1a2754;
          font-family: inherit;
          line-height: 1;
        }
        .polygonal-visualizer .pv-step-btn:hover { background: #dde8f3; }
        .polygonal-visualizer .pv-toggle-btn {
          background: #fff;
          border: 1px solid #b4c8de;
          padding: 7px 14px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          color: #1a2754;
          font-family: inherit;
        }
        .polygonal-visualizer .pv-toggle-btn:hover { background: #dde8f3; }
        .polygonal-visualizer .pv-toggle-btn.active {
          background: #2856a0;
          color: #fff;
          border-color: #2856a0;
        }
        .polygonal-visualizer .pv-gnomon-help {
          color: #5a7090;
          font-size: 12px;
          font-style: italic;
          max-width: 320px;
          line-height: 1.45;
        }
        .polygonal-visualizer .pv-gnomon-help a {
          color: #2856a0;
          text-decoration: underline;
          font-weight: 600;
        }
        .polygonal-visualizer .pv-gnomon-help a:hover {
          color: #1a3a68;
        }
        .polygonal-visualizer .pv-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
          gap: 22px;
          margin-bottom: 20px;
          align-items: start;
        }
        .polygonal-visualizer .pv-diagram-frame {
          border: 1px solid #d4e1ee;
          border-radius: 6px;
          background: #f4f8fc;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .polygonal-visualizer .pv-diagram-frame .pv-viz-area {
          border: none;
          border-radius: 0;
          background: transparent;
        }
        .polygonal-visualizer .pv-frame-divider {
          height: 1px;
          background: #d4e1ee;
        }
        .polygonal-visualizer .pv-sequence-section {
          padding: 14px 18px 16px;
          background: #ffffff;
        }
        .polygonal-visualizer .pv-pills-hint {
          text-transform: none;
          letter-spacing: 0;
          color: #5a7090;
          font-style: italic;
          font-weight: 400;
          font-size: 11px;
        }
        .polygonal-visualizer .pv-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .polygonal-visualizer .pv-pill {
          background: #e8eff7;
          border: 1px solid transparent;
          border-radius: 3px;
          padding: 3px 9px;
          font-family: 'Cambria Math', 'Times New Roman', serif;
          font-size: 14px;
          color: #1a2754;
          white-space: nowrap;
          cursor: pointer;
          transition: background 100ms, border-color 100ms;
        }
        .polygonal-visualizer .pv-pill:hover {
          background: #d4e1ee;
          border-color: #b4c8de;
        }
        .polygonal-visualizer .pv-pill.current {
          background: #2856a0;
          color: #fff;
          font-weight: bold;
        }
        .polygonal-visualizer .pv-pill.current:hover {
          background: #1a3a68;
        }
        .polygonal-visualizer .pv-pill sub {
          font-size: 10px;
          color: #5a7090;
          margin: 0 1px;
        }
        .polygonal-visualizer .pv-pill.current sub {
          color: #c4d6ee;
        }
        .polygonal-visualizer .pv-viz-area {
          border: 1px solid #d4e1ee;
          border-radius: 6px;
          background: #f4f8fc;
          padding: 24px;
          min-height: 580px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .polygonal-visualizer .pv-viz-area svg {
          display: block;
          max-width: 100%;
          height: auto;
        }
        .polygonal-visualizer .pv-explain-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .polygonal-visualizer .pv-panel {
          border: 1px solid #d4e1ee;
          border-radius: 6px;
          padding: 18px 20px;
          background: #ffffff;
        }
        .polygonal-visualizer .pv-panel-label {
          font-size: 11px;
          color: #5a7090;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .polygonal-visualizer .pv-panel-caption {
          color: #5a7090;
          font-size: 13px;
          font-style: italic;
          margin-bottom: 14px;
          line-height: 1.55;
          text-align: center;
        }
        .polygonal-visualizer .pv-formula-panel {
          background: #e8eff7;
          border-color: #c4d4e6;
        }
        .polygonal-visualizer .pv-formula-line {
          font-family: 'Cambria Math', 'Times New Roman', serif;
          font-size: 19px;
          color: #1a2754;
          text-align: center;
          margin: 8px 0;
          line-height: 1.6;
        }
        .polygonal-visualizer .pv-formula-line.big {
          font-size: 22px;
          margin-top: 14px;
        }
        .polygonal-visualizer .pv-frac {
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          margin: 0 4px;
        }
        .polygonal-visualizer .pv-frac .pv-num {
          display: block;
          border-bottom: 1.5px solid #1a2754;
          padding: 0 8px 2px;
        }
        .polygonal-visualizer .pv-frac .pv-den {
          display: block;
          padding: 2px 8px 0;
        }
        .polygonal-visualizer .pv-term {
          color: #2856a0;
          font-weight: bold;
        }
        .polygonal-visualizer .pv-result {
          color: #1a4d8a;
          font-weight: bold;
          font-size: 26px;
        }
        .polygonal-visualizer .pv-sum-line {
          font-family: 'Cambria Math', 'Times New Roman', serif;
          font-size: 18px;
          color: #1a2754;
          line-height: 1.9;
          text-align: center;
        }
        .polygonal-visualizer .pv-sum-line .pv-total {
          color: #1a4d8a;
          font-weight: bold;
          font-size: 22px;
        }
        .polygonal-visualizer .pv-sequence-values {
          font-family: 'Cambria Math', 'Times New Roman', serif;
          font-size: 16px;
          color: #1a2754;
          line-height: 1.9;
          word-spacing: 2px;
        }
        .polygonal-visualizer .pv-sequence-values .pv-highlight {
          color: #fff;
          background: #2856a0;
          padding: 1px 7px;
          border-radius: 3px;
          font-weight: bold;
          font-size: 17px;
        }
        /* ---- iOS slide switch ---- */
        .polygonal-visualizer .pv-switch1 {
          position: relative;
          width: 44px;
          height: 24px;
          background: #b4c8de;
          border-radius: 12px;
          cursor: pointer;
          transition: background 150ms;
          flex-shrink: 0;
        }
        .polygonal-visualizer .pv-switch1::after {
          content: "";
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: #fff;
          border-radius: 50%;
          transition: left 150ms;
          box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .polygonal-visualizer .pv-switch1.on { background: #2856a0; }
        .polygonal-visualizer .pv-switch1.on::after { left: 22px; }
        .polygonal-visualizer .pv-switch1:focus {
          outline: 2px solid #2856a0;
          outline-offset: 2px;
        }
        .polygonal-visualizer .pv-switch1-state {
          color: #5a7090;
          font-size: 13px;
          font-style: italic;
          min-width: 28px;
        }
        /* ---- ? help icon + tooltip ---- */
        .polygonal-visualizer .pv-help {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #b4c8de;
          color: #2856a0;
          font-size: 13px;
          font-weight: bold;
          font-family: Georgia, serif;
          cursor: pointer;
          user-select: none;
          line-height: 1;
          padding: 0;
        }
        .polygonal-visualizer .pv-help:hover,
        .polygonal-visualizer .pv-help[aria-expanded="true"] {
          background: #2856a0;
          color: #fff;
          border-color: #2856a0;
        }
        .polygonal-visualizer .pv-tooltip {
          position: absolute;
          bottom: 130%;
          left: 50%;
          transform: translateX(-50%);
          background: #1a2754;
          color: #fff;
          font-family: Georgia, serif;
          font-size: 12px;
          font-style: italic;
          font-weight: normal;
          padding: 5px 10px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 120ms;
        }
        .polygonal-visualizer .pv-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: #1a2754;
        }
        .polygonal-visualizer .pv-help:hover .pv-tooltip { opacity: 1; }
        /* ---- gnomon explanation panel ---- */
        .polygonal-visualizer .pv-gnomon-explanation {
          margin: -10px 0 22px;
          padding: 14px 16px;
          background: #fff;
          border: 1px solid #c4d4e6;
          border-left: 3px solid #2856a0;
          border-radius: 4px;
          color: #1a2754;
          font-size: 14px;
          line-height: 1.55;
        }
        .polygonal-visualizer .pv-gnomon-explanation a {
          color: #2856a0;
          font-weight: 600;
          text-decoration: underline;
        }
        @media (max-width: 860px) {
          .polygonal-visualizer .pv-main-grid {
            grid-template-columns: 1fr;
          }
          .polygonal-visualizer .pv-viz-area { min-height: 460px; }
          .polygonal-visualizer input[type="range"] { width: 180px; }
        }
      `}</style>

      <h2>{polygonName} Numbers</h2>
      <div className="pv-subtitle">
        The nth {polygonName.toLowerCase()} number {POLYGON_SYMBOL[k]}<sub>n</sub>{' '}
        is the count of dots in a {polygonName.toLowerCase()} arrangement of n nested layers.
      </div>

      <div className="pv-controls">
        {showKSelector && (
          <div className="pv-control-group">
            <label>polygon</label>
            <div className="pv-k-buttons">
              {allowedK.map(kVal => (
                <button key={kVal}
                        className={`pv-toggle-btn ${k === kVal ? 'active' : ''}`}
                        onClick={() => setK(kVal)}>
                  {POLYGON_NAMES[kVal]}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="pv-control-group">
          <label htmlFor="pv-n-input">n =</label>
          <button className="pv-step-btn" onClick={decrementN}
                  aria-label="decrease">&minus;</button>
          <input type="number" id="pv-n-input"
                 min={MIN_N_DEFAULT}
                 value={inputDraft !== null ? inputDraft : n}
                 onChange={(e) => handleNInput(e.target.value)}
                 onBlur={(e) => handleNBlur(e.target.value)} />
          <button className="pv-step-btn" onClick={incrementN}
                  aria-label="increase">+</button>
          <span className="pv-range-hint">
            (1&ndash;{effectiveMax})
          </span>
        </div>
        <div className="pv-control-group">
          <label htmlFor="pv-n-slider">slider</label>
          <input type="range" id="pv-n-slider"
                 min={MIN_N_DEFAULT} max={effectiveMax}
                 value={n}
                 onChange={(e) => setN(parseInt(e.target.value, 10))} />
        </div>
        <div className="pv-control-group">
          <label>gnomon numbers</label>
          <div className={`pv-switch1 ${showGnomonNumbers ? 'on' : ''}`}
               role="switch"
               aria-checked={showGnomonNumbers}
               tabIndex={0}
               onClick={() => setShowGnomonNumbers(!showGnomonNumbers)}
               onKeyDown={(e) => {
                 if (e.key === ' ' || e.key === 'Enter') {
                   e.preventDefault();
                   setShowGnomonNumbers(!showGnomonNumbers);
                 }
               }} />
          <span className="pv-switch1-state">
            {showGnomonNumbers ? 'on' : 'off'}
          </span>
          <button type="button"
                  className="pv-help"
                  aria-expanded={showGnomonHelp}
                  aria-label="help"
                  onClick={() => setShowGnomonHelp(!showGnomonHelp)}>
            ?
            <span className="pv-tooltip">click to learn more</span>
          </button>
        </div>
      </div>

      {showGnomonHelp && (
        <div className="pv-gnomon-explanation">
          A <strong>gnomon</strong> is the band of dots added at each step to grow
          the figure to the next size. For a k-gonal arrangement, the m-th gnomon
          contains (k&minus;2)(m&minus;1) + 1 dots.{' '}
          {/*
            TODO: replace the href below with the actual on-page anchor
            of the gnomon explanation section once that section exists
            on the host page (e.g. href="#gnomons").
          */}
          <a href="#gnomon-section">Learn more</a>
        </div>
      )}

      <div className="pv-main-grid">
        <div className="pv-diagram-frame">
          <div className="pv-viz-area">
            <PolygonalEngine k={k} n={n}
                             showGnomon={showGnomon}
                             showGnomonNumbers={showGnomonNumbers} />
          </div>
        </div>

        <div className="pv-explain-col">
          <div className="pv-panel pv-formula-panel">
            <div className="pv-panel-label">Formula</div>
            <div className="pv-formula-line">
              <FormulaDisplay formula={formula} n={n} k={k} isSubstituted={false} />
            </div>
            <div className="pv-formula-line big">
              <FormulaDisplay formula={formula} n={n} k={k} isSubstituted={true} />
            </div>
          </div>

          <div className="pv-panel">
            <div className="pv-panel-label">Why it works</div>
            <div className="pv-panel-caption">
              Each layer m holds (k&minus;2)(m&minus;1) + 1 dots &mdash;{' '}
              {showGnomon ? 'colors match the layers' : 'colors disabled'}.
              <br />Sum the layer sizes:
            </div>
            <div className="pv-sum-line">{renderSum()}</div>
          </div>

          <div className="pv-panel">
            <div className="pv-panel-label">
              Sequence {POLYGON_SYMBOL[k]}<sub>1</sub>, {POLYGON_SYMBOL[k]}<sub>2</sub>,{' '}
              {POLYGON_SYMBOL[k]}<sub>3</sub>, &hellip;
              <span className="pv-pills-hint">&nbsp;&mdash; click any term to set n</span>
            </div>
            <div className="pv-pills">
              {Array.from({ length: effectiveMax }, (_, i) => i + 1).map(m => (
                <button key={m}
                        type="button"
                        className={`pv-pill ${m === n ? 'current' : ''}`}
                        onClick={() => setN(m)}
                        title={`Set n = ${m}`}>
                  {POLYGON_SYMBOL[k]}<sub>{m}</sub>={fmt(polygonalValue(k, m))}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}