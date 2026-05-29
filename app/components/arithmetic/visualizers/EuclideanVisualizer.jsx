import { useState } from 'react'

// ----------------------------------------------------------------------------
// EuclideanVisualizer (v2) — friendlier standalone Next.js component.
//
// Renders the Euclidean algorithm as a vertical chain of division rows:
//   dividend = divisor · quotient + remainder
//
//   - live remainders   -> amber pills
//   - terminating zero   -> dashed-gray pill ("stop")
//   - substitution arrow -> dashed-amber Bezier (remainder -> next divisor)
//   - final divisor (GCD) -> boxed in primary, with a "gcd = N" callout
//
// New in v2:
//   - result banner with a plain-language sentence
//   - hover a remainder to light up the divisor it becomes on the next line
//   - tooltips (native SVG <title> + custom CSS bubbles)
//   - legend + collapsible "How it works" explainer
//
// No Tailwind. Theme-aware via the site's CSS vars (with literal fallbacks).
// ----------------------------------------------------------------------------

// ---------- Palette (site-aligned defaults) ----------
const C = {
  primary: '#7F77DD',         // GCD / main subject (purple)
  primaryDark: '#5d54c4',
  fillRemainder: '#EF9F27',   // live remainder pill fill (amber)
  strokeRemainder: '#C98A1E', // remainder pill border + substitution arrow
  remainderText: '#4A3000',   // text on the amber pill
  gray: '#9AA0A6',            // terminating zero pill
}

// ---------- Geometry ----------
const CHAR_W = 10.8 // monospace glyph advance at FONT
const FONT = 18
const PAD_X = 34
const ROW0_Y = 58
const ROW_DY = 64
const SEP = 3 * CHAR_W // width of " = ", " · ", " + "

// ---------- Presets ----------
const PRESETS = [
  [252, 105],
  [462, 198],
  [1071, 462],
  [56, 84],
  [35, 54],
]

// ---------- Math ----------
function computeChain(aIn, bIn) {
  let a = Math.max(aIn, bIn)
  let b = Math.min(aIn, bIn)
  const rows = []
  let guard = 0
  while (b !== 0 && guard < 200) {
    const q = Math.floor(a / b)
    const r = a % b
    rows.push({ dividend: a, divisor: b, quotient: q, remainder: r })
    a = b
    b = r
    guard += 1
  }
  const gcd = rows.length ? rows[rows.length - 1].divisor : Math.max(aIn, bIn)
  return { rows, gcd }
}

function layoutRow(row, y) {
  const dividend = String(row.dividend)
  const divisor = String(row.divisor)
  const quotient = String(row.quotient)
  const remainder = String(row.remainder)

  let x = PAD_X
  const dividendX = x
  x += dividend.length * CHAR_W
  x += SEP
  const divisorX = x
  const divisorW = divisor.length * CHAR_W
  const divisorCx = x + divisorW / 2
  x += divisorW
  x += SEP
  const quotientX = x
  x += quotient.length * CHAR_W
  x += SEP
  const remainderX = x
  const remainderW = remainder.length * CHAR_W
  const remainderCx = x + remainderW / 2
  x += remainderW

  return {
    y,
    dividend, divisor, quotient, remainder,
    dividendX, divisorX, divisorW, divisorCx,
    quotientX, remainderX, remainderW, remainderCx,
    endX: x,
  }
}

function randPair() {
  const r = (lo, hi) => lo + Math.floor(Math.random() * (hi - lo + 1))
  let a = r(12, 480)
  let b = r(12, 480)
  if (a === b) b = a + r(1, 30)
  return [a, b]
}

// ---------- Component ----------
export default function EuclideanVisualizer() {
  const [aStr, setAStr] = useState('252')
  const [bStr, setBStr] = useState('105')
  const [hover, setHover] = useState(null) // index of remainder being hovered

  const a = parseInt(aStr, 10)
  const b = parseInt(bStr, 10)
  const aOk = Number.isFinite(a) && a >= 1
  const bOk = Number.isFinite(b) && b >= 1
  const ready = aOk && bOk

  const { rows, gcd } = ready ? computeChain(a, b) : { rows: [], gcd: 0 }
  const laid = rows.map((r, i) => layoutRow(r, ROW0_Y + i * ROW_DY))
  const lastIdx = laid.length - 1

  const contentW = Math.max(360, ...laid.map((l) => l.endX), PAD_X) + PAD_X
  const svgH = laid.length ? ROW0_Y + lastIdx * ROW_DY + 72 : 80

  const hi = ready ? Math.max(a, b) : 0
  const lo = ready ? Math.min(a, b) : 0
  const steps = rows.length

  const muted = 'var(--color-text-secondary, #6b6b6b)'
  const neutral = 'var(--color-text-primary, #1a1a1a)'

  const applyPair = (pa, pb) => {
    setAStr(String(pa))
    setBStr(String(pb))
    setHover(null)
  }

  return (
    <div className="ev-root">
      <header className="ev-head">
        <h1 className="ev-title">Euclidean Algorithm Visualizer</h1>
        <p className="ev-sub">
          Type any two whole numbers, or try a preset. Each line below divides
          and keeps the leftover — the pair shrinks until nothing is left over,
          and the last divisor standing is the greatest common divisor.
        </p>
      </header>

      {ready && (
        <div className="ev-banner">
          <div className="ev-banner-num">{gcd}</div>
          <div className="ev-banner-text">
            <strong>
              gcd({hi}, {lo}) = {gcd}
            </strong>
            <span>
              The largest number that divides both {hi} and {lo} evenly is {gcd}
              {steps > 0 ? ' (found in ' + steps + (steps === 1 ? ' step).' : ' steps).') : '.'}
            </span>
          </div>
        </div>
      )}

      <div className="ev-controls">
        <label className="ev-field">
          <span className="ev-label-row">
            a
            <span
              className="ev-tip"
              data-tip="Any positive whole number. If a is smaller than b, they are swapped automatically."
            >
              ?
            </span>
          </span>
          <input
            type="number"
            min="1"
            step="1"
            value={aStr}
            onChange={(e) => setAStr(e.target.value)}
          />
        </label>
        <label className="ev-field">
          <span className="ev-label-row">b</span>
          <input
            type="number"
            min="1"
            step="1"
            value={bStr}
            onChange={(e) => setBStr(e.target.value)}
          />
        </label>

        <div className="ev-presets">
          <button
            type="button"
            className="ev-btn ev-rand"
            onClick={() => applyPair(...randPair())}
          >
            Random pair
          </button>
          {PRESETS.map(([pa, pb]) => (
            <button
              key={pa + 'x' + pb}
              type="button"
              className="ev-btn"
              onClick={() => applyPair(pa, pb)}
            >
              {pa}, {pb}
            </button>
          ))}
        </div>
      </div>

      <div className="ev-main">
        <div className="ev-card">
          {ready ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox={'0 0 ' + contentW + ' ' + svgH}
              role="img"
            >
              <title>{'Euclidean algorithm chain for gcd(' + hi + ', ' + lo + ')'}</title>
              <desc>
                {'Vertical chain of division steps reducing gcd(' + hi + ', ' + lo + ') to ' + gcd + '.'}
              </desc>

              {/* substitution arrows: remainder(i) -> divisor(i+1) */}
              {laid.map((l, i) => {
                if (i === lastIdx) return null
                const n = laid[i + 1]
                const sx = l.remainderCx
                const sy = l.y + 11
                const ex = n.divisorCx
                const ey = n.y - 23
                const active = hover === i
                const d =
                  'M ' + sx + ' ' + sy +
                  ' C ' + sx + ' ' + (sy + 28) +
                  ' ' + ex + ' ' + (ey - 28) +
                  ' ' + ex + ' ' + ey
                return (
                  <g key={'arrow-' + i} opacity={active ? 1 : 0.9}>
                    <path
                      d={d}
                      fill="none"
                      stroke={active ? C.primary : C.strokeRemainder}
                      strokeWidth={active ? 2 : 1.3}
                      strokeDasharray="3 3"
                    />
                    <polygon
                      points={ex + ',' + ey + ' ' + (ex - 4) + ',' + (ey - 8) + ' ' + (ex + 4) + ',' + (ey - 8)}
                      fill={active ? C.primary : C.strokeRemainder}
                    />
                  </g>
                )
              })}

              {/* rows */}
              {laid.map((l, i) => {
                const isLast = i === lastIdx
                const zero = l.remainder === '0'
                const remHot = hover === i
                const divHot = hover === i - 1 // this divisor is the prev remainder
                const pillX = l.remainderX - 7
                const pillW = l.remainderW + 14
                const pillTop = l.y - 19
                const pillH = 27

                return (
                  <g key={'row-' + i} fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize={FONT}>
                    {/* GCD box behind the final divisor */}
                    {isLast && (
                      <rect
                        x={l.divisorX - 7}
                        y={pillTop}
                        width={l.divisorW + 14}
                        height={pillH}
                        rx="6"
                        fill={C.primary}
                        fillOpacity="0.12"
                        stroke={C.primary}
                        strokeWidth="1.6"
                      >
                        <title>{'Greatest common divisor = ' + gcd + ' (the last nonzero remainder).'}</title>
                      </rect>
                    )}

                    {/* highlight ring on a divisor that is the previous remainder */}
                    {divHot && !isLast && (
                      <rect
                        x={l.divisorX - 9}
                        y={pillTop - 2}
                        width={l.divisorW + 18}
                        height={pillH + 4}
                        rx="9"
                        fill="none"
                        stroke={C.primary}
                        strokeWidth="2"
                      />
                    )}

                    {/* remainder pill */}
                    <rect
                      x={pillX}
                      y={pillTop}
                      width={pillW}
                      height={pillH}
                      rx="13"
                      fill={zero ? 'none' : C.fillRemainder}
                      fillOpacity={zero ? '1' : remHot ? '1' : '0.85'}
                      stroke={zero ? C.gray : remHot ? C.primary : C.strokeRemainder}
                      strokeWidth={remHot ? '2' : '1.2'}
                      strokeDasharray={zero ? '4 3' : '0'}
                    />

                    {/* equation pieces */}
                    <text x={l.dividendX} y={l.y} fill={neutral}>{l.dividend}</text>
                    <text x={l.dividendX + l.dividend.length * CHAR_W} y={l.y} fill={muted}> = </text>
                    <text
                      x={l.divisorX}
                      y={l.y}
                      fill={isLast ? C.primary : divHot ? C.primaryDark : neutral}
                      fontWeight={isLast || divHot ? 700 : 400}
                    >
                      {l.divisor}
                    </text>
                    <text x={l.divisorX + l.divisorW} y={l.y} fill={muted}> · </text>
                    <text x={l.quotientX} y={l.y} fill={neutral}>{l.quotient}</text>
                    <text x={l.quotientX + l.quotient.length * CHAR_W} y={l.y} fill={muted}> + </text>
                    <text x={l.remainderX} y={l.y} fill={zero ? C.gray : C.remainderText} fontWeight={600}>{l.remainder}</text>

                    {/* stop label under the terminating zero */}
                    {zero && (
                      <text
                        x={l.remainderCx}
                        y={l.y + 21}
                        fill={C.gray}
                        fontSize="11"
                        fontStyle="italic"
                        textAnchor="middle"
                      >
                        stop
                      </text>
                    )}

                    {/* invisible hover target over the remainder (+ native tooltip) */}
                    {!zero && (
                      <rect
                        x={pillX}
                        y={pillTop}
                        width={pillW}
                        height={pillH}
                        rx="13"
                        fill="transparent"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                      >
                        <title>
                          {i < lastIdx
                            ? 'Remainder ' + l.remainder + ' becomes the divisor on the next line.'
                            : 'Remainder ' + l.remainder + '.'}
                        </title>
                      </rect>
                    )}
                  </g>
                )
              })}

              {/* GCD callout below the final row */}
              {lastIdx >= 0 && (
                <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
                  <line
                    x1={laid[lastIdx].divisorCx}
                    y1={laid[lastIdx].y + 16}
                    x2={laid[lastIdx].divisorCx}
                    y2={laid[lastIdx].y + 32}
                    stroke={C.primary}
                    strokeWidth="1.3"
                  />
                  <text
                    x={laid[lastIdx].divisorCx}
                    y={laid[lastIdx].y + 50}
                    fill={C.primary}
                    fontSize="14"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {'gcd = ' + gcd}
                  </text>
                </g>
              )}
            </svg>
          ) : (
            <p className="ev-empty">Enter two positive whole numbers for a and b to see the steps.</p>
          )}
        </div>

        {ready && (
          <aside className="ev-info">
            <div className="ev-info-title">
              Steps
              <span
                className="ev-tip"
                data-tip="Each line is one division. Hover a row to highlight it on the diagram."
              >
                ?
              </span>
            </div>
            <ol className="ev-notes">
              {rows.map((r, i) => (
                <li
                  key={'note-' + i}
                  className={hover === i ? 'ev-note-hot' : ''}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  {r.dividend} = {r.divisor} · {r.quotient} + {r.remainder}
                </li>
              ))}
            </ol>
            <p className="ev-gloss">GCD is the last nonzero remainder.</p>
          </aside>
        )}
      </div>

      {ready && (
        <div className="ev-legend">
          <span className="ev-legend-item">
            <span className="ev-swatch ev-sw-amber" /> remainder (the leftover)
          </span>
          <span className="ev-legend-item">
            <span className="ev-swatch ev-sw-arrow" /> becomes the next divisor
          </span>
          <span className="ev-legend-item">
            <span className="ev-swatch ev-sw-purple" /> greatest common divisor
          </span>
        </div>
      )}

      <details className="ev-explain">
        <summary>How the Euclidean algorithm works</summary>
        <div className="ev-explain-body">
          <p>
            The idea is older than algebra: the greatest common divisor of two
            numbers does not change if you replace the larger number with the
            remainder after dividing it by the smaller one.
          </p>
          <ol>
            <li>Divide the bigger number by the smaller one and keep the remainder.</li>
            <li>Replace the pair: the old divisor becomes the new dividend, the remainder becomes the new divisor.</li>
            <li>Repeat. Each remainder is smaller than the last, so the process always ends.</li>
            <li>When the remainder reaches 0, the divisor on that final line is the answer.</li>
          </ol>
          <p className="ev-explain-foot">
            Hover any amber remainder above to see it drop down and become the
            divisor on the next line — that single move is the whole algorithm.
          </p>
        </div>
      </details>

      <style jsx>{`
        .ev-root {
          font-family: system-ui, sans-serif;
          color: var(--color-text-primary, #1a1a1a);
          max-width: 900px;
          margin: 0 auto;
          padding: 8px 4px 28px;
        }
        .ev-head {
          margin-bottom: 16px;
        }
        .ev-title {
          font-size: 23px;
          font-weight: 700;
          margin: 0 0 6px;
        }
        .ev-sub {
          font-size: 14px;
          line-height: 1.55;
          color: var(--color-text-secondary, #6b6b6b);
          margin: 0;
          max-width: 64ch;
        }

        .ev-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 0 0 20px;
          padding: 14px 18px;
          border-radius: 12px;
          background: var(--color-background-secondary, rgba(127, 119, 221, 0.07));
          border: 1px solid ${C.primary}33;
        }
        .ev-banner-num {
          flex: 0 0 auto;
          min-width: 56px;
          height: 56px;
          padding: 0 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: ${C.primary};
          color: #fff;
          font-size: 26px;
          font-weight: 700;
        }
        .ev-banner-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ev-banner-text strong {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 16px;
          color: var(--color-text-primary, #1a1a1a);
        }
        .ev-banner-text span {
          font-size: 13px;
          color: var(--color-text-secondary, #6b6b6b);
          line-height: 1.45;
        }

        .ev-controls {
          display: flex;
          gap: 18px;
          align-items: flex-end;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .ev-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 13px;
          color: var(--color-text-secondary, #6b6b6b);
        }
        .ev-label-row {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .ev-field input {
          width: 104px;
          padding: 8px 10px;
          font-size: 15px;
          border: 1px solid var(--color-border-secondary, #ccc);
          border-radius: 7px;
          background: var(--color-background-primary, #fff);
          color: var(--color-text-primary, #1a1a1a);
        }
        .ev-field input:focus {
          outline: none;
          border-color: ${C.primary};
          box-shadow: 0 0 0 3px ${C.primary}26;
        }
        .ev-presets {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          align-items: center;
        }
        .ev-btn {
          padding: 8px 12px;
          font-size: 13px;
          border: 1px solid var(--color-border-secondary, #ccc);
          border-radius: 7px;
          background: var(--color-background-primary, #fff);
          color: var(--color-text-primary, #1a1a1a);
          cursor: pointer;
          transition: border-color 0.12s ease, color 0.12s ease, transform 0.06s ease;
        }
        .ev-btn:hover {
          border-color: ${C.primary};
          color: ${C.primaryDark};
        }
        .ev-btn:active {
          transform: translateY(1px);
        }
        .ev-rand {
          font-weight: 600;
          border-color: ${C.primary};
          color: ${C.primary};
        }

        .ev-main {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .ev-card {
          flex: 1 1 360px;
          min-width: 300px;
          padding: 14px 8px;
          border-radius: 12px;
          background: var(--color-background-primary, #fff);
          border: 1px solid var(--color-border-secondary, #e6e6e6);
        }
        .ev-empty {
          font-size: 14px;
          color: var(--color-text-secondary, #6b6b6b);
          padding: 22px 10px;
          margin: 0;
        }

        .ev-info {
          flex: 0 1 250px;
          min-width: 210px;
          padding-top: 4px;
        }
        .ev-info-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--color-text-secondary, #6b6b6b);
          margin-bottom: 10px;
        }
        .ev-notes {
          list-style: decimal;
          margin: 0;
          padding-left: 22px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 13px;
          line-height: 1.5;
          color: var(--color-text-secondary, #6b6b6b);
        }
        .ev-notes li {
          padding: 3px 6px;
          border-radius: 5px;
          transition: background 0.12s ease, color 0.12s ease;
          cursor: default;
        }
        .ev-note-hot {
          background: ${C.fillRemainder}26;
          color: var(--color-text-primary, #1a1a1a);
        }
        .ev-gloss {
          font-size: 12px;
          font-style: italic;
          color: var(--color-text-tertiary, #999);
          margin: 14px 0 0;
        }

        .ev-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin: 20px 0 6px;
          font-size: 12.5px;
          color: var(--color-text-secondary, #6b6b6b);
        }
        .ev-legend-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }
        .ev-swatch {
          width: 20px;
          height: 14px;
          border-radius: 7px;
          flex: 0 0 auto;
        }
        .ev-sw-amber {
          background: ${C.fillRemainder};
          opacity: 0.85;
          border: 1px solid ${C.strokeRemainder};
        }
        .ev-sw-purple {
          background: ${C.primary}1f;
          border: 1.6px solid ${C.primary};
          border-radius: 4px;
        }
        .ev-sw-arrow {
          width: 22px;
          height: 0;
          border-radius: 0;
          border-top: 2px dashed ${C.strokeRemainder};
        }

        .ev-explain {
          margin-top: 22px;
          border-top: 1px solid var(--color-border-secondary, #e6e6e6);
          padding-top: 14px;
        }
        .ev-explain summary {
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: ${C.primaryDark};
          list-style: none;
        }
        .ev-explain summary::-webkit-details-marker {
          display: none;
        }
        .ev-explain summary::before {
          content: '+ ';
          font-weight: 700;
        }
        .ev-explain[open] summary::before {
          content: '\u2212 ';
        }
        .ev-explain-body {
          margin-top: 10px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--color-text-secondary, #6b6b6b);
        }
        .ev-explain-body ol {
          padding-left: 20px;
          margin: 8px 0;
        }
        .ev-explain-body li {
          margin: 4px 0;
        }
        .ev-explain-foot {
          font-style: italic;
        }

        /* Custom tooltip bubble */
        .ev-tip {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid var(--color-border-secondary, #ccc);
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-secondary, #6b6b6b);
          cursor: help;
          user-select: none;
        }
        .ev-tip::after {
          content: attr(data-tip);
          position: absolute;
          bottom: 135%;
          left: 50%;
          transform: translateX(-50%);
          width: 210px;
          background: #25252b;
          color: #fff;
          padding: 7px 10px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.4;
          text-align: left;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.12s ease;
          z-index: 6;
        }
        .ev-tip:hover::after {
          opacity: 1;
        }

        @media (max-width: 560px) {
          .ev-main {
            gap: 16px;
          }
          .ev-info {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </div>
  )
}