'use client';

import { useEffect, useRef, useState } from 'react';

// Cell size from the width of the figure area, so the matrices share one
// row wherever the tool is placed. `fixed` is everything that is not a cell:
// the area's padding, the operators with their gaps, and each frame.
function cellSizeFor(width, totalCols, matrixCount) {
  const fixed = 40 + (matrixCount - 1) * 60 + matrixCount * 16;
  return Math.max(18, Math.min(44, Math.floor((width - fixed) / totalCols) - 3));
}

// showHeader={false} drops the title block, for use inside a page section
// that already has its own heading.
// initialSizes={[aRows, aCols, bRows, bCols]} sets the sizes the tool opens on.
export default function MatrixMultiplicationOrderVisualizer({ showHeader = true, initialSizes = [3, 2, 2, 6] }) {
  const [aRows, setARows] = useState(initialSizes[0]);
  const [aCols, setACols] = useState(initialSizes[1]);
  const [bRows, setBRows] = useState(initialSizes[2]);
  const [bCols, setBCols] = useState(initialSizes[3]);
  const [selected, setSelected] = useState({ row: null, col: null });

  const isValid = aCols === bRows;
  const resultRows = aRows;
  const resultCols = bCols;

  const mainRef = useRef(null);
  const [mainWidth, setMainWidth] = useState(760);

  useEffect(() => {
    const el = mainRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(() => setMainWidth(el.clientWidth));
    observer.observe(el);
    setMainWidth(el.clientWidth);
    return () => observer.disconnect();
  }, []);

  const cell = cellSizeFor(
    mainWidth,
    aCols + bCols + (isValid ? resultCols : 0),
    isValid ? 3 : 2
  );

  // The selected result cell stays selected until another click, so the
  // text on the right and the figure always describe the same thing.
  const hasSelection =
    isValid && selected.row !== null && selected.row < resultRows && selected.col < resultCols;
  const highlighted = hasSelection ? selected : { row: null, col: null };

  const handleHighlight = (row, col) => {
    setSelected(
      selected.row === row && selected.col === col ? { row: null, col: null } : { row, col }
    );
  };

  const tone = isValid ? 'mmov-n-ok' : 'mmov-n-bad';
  const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

  const buildMatrix = (rows, cols, type) => {
    const clickable = type === 'Result';
    return (
      <div
        className="mmov-matrix"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
          gridTemplateRows: `repeat(${rows}, ${cell}px)`,
        }}
      >
        {[...Array(rows * cols)].map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          const isHighlight =
            (type === 'A' && r === highlighted.row) ||
            (type === 'B' && c === highlighted.col) ||
            (type === 'Result' && r === highlighted.row && c === highlighted.col);

          return (
            <div
              key={`${type}-${r}-${c}`}
              className={
                'mmov-cell' +
                (clickable ? ' mmov-cell-result' : '') +
                (isHighlight ? ` mmov-hl-${type}` : '')
              }
              onClick={clickable ? () => handleHighlight(r, c) : undefined}
            >
              <div className="mmov-dot" />
            </div>
          );
        })}
      </div>
    );
  };

  const sizeInput = (label, value, setter, inner) => (
    <label className="mmov-input">
      <span>{label}</span>
      <input
        type="number"
        className={inner ? (isValid ? 'mmov-inner-ok' : 'mmov-inner-bad') : ''}
        value={value}
        min={1}
        max={6}
        onChange={(e) => setter(+e.target.value)}
      />
    </label>
  );

  return (
    <div className="mmov-root">
      {showHeader && (
        <div className="mmov-head">
          <h2>Matrix Multiplication Visualizer</h2>
          <p>Change the sizes and see when two matrices can be multiplied.</p>
        </div>
      )}

      <div className="mmov-body">
        <div className="mmov-main" ref={mainRef}>
          <div className="mmov-controls">
            <div className="mmov-group">
              <span className="mmov-group-name">Matrix A</span>
              {sizeInput('Rows', aRows, setARows, false)}
              <span className="mmov-times">×</span>
              {sizeInput('Cols', aCols, setACols, true)}
            </div>
            <div className="mmov-group">
              <span className="mmov-group-name">Matrix B</span>
              {sizeInput('Rows', bRows, setBRows, true)}
              <span className="mmov-times">×</span>
              {sizeInput('Cols', bCols, setBCols, false)}
            </div>
          </div>

          <div className={`mmov-validation ${isValid ? 'mmov-valid' : 'mmov-invalid'}`}>
            {isValid
              ? `✓ Valid multiplication: A(${aRows}×${aCols}) × B(${bRows}×${bCols}) = Result(${resultRows}×${resultCols})`
              : `✗ Invalid multiplication: A columns (${aCols}) must equal B rows (${bRows})`}
          </div>

          <div className="mmov-matrices">
            <div className="mmov-wrapper">
              <div className="mmov-label">
                A{' '}
                <span>
                  <b className="mmov-n-outer">{aRows}</b>×<b className={tone}>{aCols}</b>
                </span>
              </div>
              {buildMatrix(aRows, aCols, 'A')}
            </div>

            <div className="mmov-operator">×</div>

            <div className="mmov-wrapper">
              <div className="mmov-label">
                B{' '}
                <span>
                  <b className={tone}>{bRows}</b>×<b className="mmov-n-outer">{bCols}</b>
                </span>
              </div>
              {buildMatrix(bRows, bCols, 'B')}
            </div>

            {isValid && (
              <>
                <div className="mmov-operator">=</div>
                <div className="mmov-wrapper">
                  <div className="mmov-label">
                    Result{' '}
                    <span>
                      <b className="mmov-n-outer">{resultRows}</b>×<b className="mmov-n-outer">{resultCols}</b>
                    </span>
                  </div>
                  {buildMatrix(resultRows, resultCols, 'Result')}
                </div>
              </>
            )}
          </div>

        </div>

        <div className="mmov-rules">
          <div className="mmov-rules-head">
            <h3>For these sizes</h3>
          </div>
          <ul>
            <li className={isValid ? 'mmov-li-ok' : 'mmov-li-bad'}>
              A has <b className={tone}>{plural(aCols, 'column')}</b> and B has{' '}
              <b className={tone}>{plural(bRows, 'row')}</b>.{' '}
              {isValid
                ? 'They are equal, so A and B can be multiplied.'
                : 'They are not equal, so A and B cannot be multiplied.'}
            </li>

            {isValid ? (
              <li>
                The result takes <b className="mmov-n-outer">{plural(aRows, 'row')}</b> from A and{' '}
                <b className="mmov-n-outer">{plural(bCols, 'column')}</b> from B, so it is{' '}
                <b className="mmov-n-outer">
                  {resultRows}×{resultCols}
                </b>
                .
              </li>
            ) : (
              <li className="mmov-li-bad">
                To make them fit, give A <b>{plural(bRows, 'column')}</b> or give B{' '}
                <b>{plural(aCols, 'row')}</b>.
              </li>
            )}

            {isValid &&
              (hasSelection ? (
                <li>
                  The selected cell is in row {selected.row + 1}, column {selected.col + 1} of the
                  result. It uses <span className="mmov-chip-A">row {selected.row + 1} of A</span> and{' '}
                  <span className="mmov-chip-B">column {selected.col + 1} of B</span>, each with{' '}
                  {plural(aCols, 'entry').replace('entrys', 'entries')}.
                </li>
              ) : (
                <li className="mmov-li-muted">
                  Click a result cell to see which row of A and which column of B it uses.
                </li>
              ))}
          </ul>
        </div>
      </div>

      <style jsx global>{`
        .mmov-root {
          font-family: Arial, sans-serif;
          line-height: 1.5;
          color: #374151;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          padding: 22px;
          container-type: inline-size;
        }
        .mmov-root *,
        .mmov-root *::before,
        .mmov-root *::after {
          box-sizing: border-box;
        }
        .mmov-head {
          margin-bottom: 18px;
        }
        .mmov-head h2 {
          font-size: 22px;
          font-weight: bold;
          margin: 0 0 4px;
          color: #1e40af;
        }
        .mmov-head p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }
        .mmov-body {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 330px;
          gap: 18px;
          align-items: stretch;
        }
        .mmov-main {
          min-width: 0;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 18px;
        }
        .mmov-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 36px;
          margin-bottom: 14px;
        }
        .mmov-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .mmov-group-name {
          font-weight: 600;
          color: #1e293b;
          font-size: 16px;
        }
        .mmov-input {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #64748b;
        }
        .mmov-input input {
          width: 62px;
          padding: 7px 6px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 16px;
          text-align: center;
          color: #0f172a;
          background: #fff;
        }
        .mmov-input input:focus {
          outline: none;
          border-color: #2563eb;
        }
        .mmov-input input.mmov-inner-ok {
          border-color: #22c55e;
          background: #f0fdf4;
        }
        .mmov-input input.mmov-inner-bad {
          border-color: #ef4444;
          background: #fef2f2;
        }
        .mmov-times {
          color: #94a3b8;
          font-size: 18px;
        }
        .mmov-validation {
          padding: 10px 14px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          text-align: center;
          margin-bottom: 22px;
        }
        .mmov-valid {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #86efac;
        }
        .mmov-invalid {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }
        .mmov-matrices {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          min-height: 300px;
        }
        .mmov-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mmov-label {
          font-weight: 600;
          margin-bottom: 8px;
          color: #374151;
          font-size: 16px;
        }
        .mmov-label span {
          font-size: 14px;
          color: #94a3b8;
          margin-left: 4px;
        }
        .mmov-matrix {
          display: grid;
          gap: 3px;
          border: 2.5px solid #6b7280;
          border-radius: 4px;
          background: #fff;
          padding: 4px;
        }
        .mmov-cell {
          background: #fafafa;
          border: 2px solid #e5e7eb;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.25s ease, border-color 0.25s ease;
        }
        .mmov-dot {
          width: 8px;
          height: 8px;
          background: #94a3b8;
          border-radius: 50%;
        }
        .mmov-cell-result {
          background: #eff6ff;
          border-color: #bfdbfe;
          cursor: pointer;
        }
        .mmov-cell-result .mmov-dot {
          background: #2563eb;
        }
        .mmov-cell-result:hover {
          background: #dbeafe;
          border-color: #3b82f6;
        }
        .mmov-cell.mmov-hl-A {
          background: #dbeafe;
          border-color: #3b82f6;
        }
        .mmov-cell.mmov-hl-A .mmov-dot {
          background: #2563eb;
        }
        .mmov-cell.mmov-hl-B {
          background: #e2e8f0;
          border-color: #475569;
        }
        .mmov-cell.mmov-hl-B .mmov-dot {
          background: #334155;
        }
        .mmov-cell.mmov-hl-Result {
          background: #dcfce7;
          border-color: #22c55e;
        }
        .mmov-cell.mmov-hl-Result .mmov-dot {
          background: #16a34a;
        }
        .mmov-operator {
          font-size: 31px;
          font-weight: bold;
          color: #6b7280;
          padding-top: 26px;
          line-height: 1;
        }
        .mmov-root b.mmov-n-ok {
          color: #15803d;
        }
        .mmov-root b.mmov-n-bad {
          color: #b91c1c;
        }
        .mmov-root b.mmov-n-outer {
          color: #1d4ed8;
        }
        .mmov-chip-A,
        .mmov-chip-B {
          padding: 1px 6px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .mmov-chip-A {
          background: #dbeafe;
          border: 1px solid #3b82f6;
        }
        .mmov-chip-B {
          background: #e2e8f0;
          border: 1px solid #475569;
        }
        .mmov-rules {
          background: #fafafa;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        }
        .mmov-rules-head {
          padding: 12px 16px;
          border-bottom: 1px solid #e5e7eb;
          background: #f1f5f9;
        }
        .mmov-rules h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #1e40af;
        }
        .mmov-rules ul {
          list-style: none;
          padding: 10px;
          margin: 0;
        }
        .mmov-rules li {
          margin-bottom: 8px;
          padding: 10px 12px;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
          background: #eff6ff;
          color: #374151;
          font-size: 15px;
          line-height: 1.55;
        }
        .mmov-rules li:last-child {
          margin-bottom: 0;
        }
        .mmov-rules li.mmov-li-ok {
          border-left-color: #22c55e;
          background: #f0fdf4;
        }
        .mmov-rules li.mmov-li-bad {
          border-left-color: #ef4444;
          background: #fef2f2;
        }
        .mmov-rules li.mmov-li-muted {
          border-left-color: #cbd5e1;
          background: #f1f5f9;
          color: #64748b;
        }
        @media (max-width: 900px) {
          .mmov-body {
            grid-template-columns: 1fr;
          }
        }
        /* In a narrow column the three lines go under the figure, so the
           matrices keep the full width. */
        @container (max-width: 900px) {
          .mmov-body {
            grid-template-columns: 1fr;
          }
        }
        /* Phone width: tighter padding, one-line size rows, no tall gap. */
        .mmov-group-name {
          white-space: nowrap;
        }
        @media (max-width: 520px) {
          .mmov-root {
            padding: 12px;
          }
          .mmov-main {
            padding: 12px;
          }
          .mmov-group {
            gap: 6px;
          }
          .mmov-group-name {
            font-size: 15px;
          }
          .mmov-input {
            gap: 4px;
          }
          .mmov-input input {
            width: 46px;
            padding: 6px 2px;
          }
          .mmov-validation {
            font-size: 14px;
            padding: 8px 10px;
            margin-bottom: 14px;
          }
          .mmov-matrices {
            min-height: 0;
            gap: 14px 12px;
          }
          .mmov-head h2 {
            font-size: 19px;
          }
        }
      `}</style>
    </div>
  );
}
