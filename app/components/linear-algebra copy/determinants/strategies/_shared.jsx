// strategies/_shared.jsx
//
// Shared helpers used by every determinant strategy.
// JSX-enabled to support inline cell content (e.g. cellOverride.display).
//
// HTML-string helpers (for caption/step formula via dangerouslySetInnerHTML):
//   buildTermPills(terms, currentIdx)  three-state running formula
//   aSymbol(i, j)                      italic a_{i+1, j+1}
//   aSymWith(symbol, i, j)             same, custom letter
//   detEquals()                        'det(A) = '
//
// JSX helpers (for cellOverrides.display):
//   aDisplay(i, j)                     a_{i+1, j+1} as JSX

import React from 'react';

// ---- term-pill formula ----------------------------------------------------

// terms: [{ html, sign }] where sign is '+' / '-' / null
//   (null means "no leading operator" — use for the first term)
// currentIdx:
//   -1               no term revealed yet (all pending)
//   k in 0..N-1      term k is "current"; k-1..0 are "accumulated"
//   N                all terms accumulated (final state)
//
// Returns an HTML string for dangerouslySetInnerHTML.
export function buildTermPills(terms, currentIdx) {
  const parts = [];

  terms.forEach((t, idx) => {
    if (idx > 0) {
      const sym = (t.sign === '-') ? '&minus;' : '+';
      parts.push(
        `<span style="color:#475569;margin:0 4px;font-weight:normal">${sym}</span>`
      );
    } else if (t.sign === '-') {
      parts.push(
        `<span style="color:#475569;margin:0 4px 0 0;font-weight:normal">&minus;</span>`
      );
    }

    let bg, fg, weight = 'normal', shadow = 'none';
    if (idx < currentIdx) {
      bg = '#dcfce7'; fg = '#166534';
    } else if (idx === currentIdx) {
      bg = '#dbeafe'; fg = '#1e40af'; weight = '600';
      shadow = '0 0 0 1.5px #3b82f6';
    } else {
      bg = 'transparent'; fg = '#cbd5e1';
    }

    parts.push(
      `<span style="display:inline-block;padding:2px 7px;border-radius:5px;` +
      `margin:0 1px;background:${bg};color:${fg};font-weight:${weight};` +
      `box-shadow:${shadow};transition:background-color 0.2s ease,color 0.2s ease">` +
      `${t.html}</span>`
    );
  });

  return parts.join('');
}

// ---- HTML symbol helpers --------------------------------------------------

export function aSymbol(i, j) {
  return aSymWith('a', i, j);
}

export function aSymWith(symbol, i, j) {
  return (
    `<span style="font-style:italic">${symbol}</span>` +
    `<sub>${i + 1},${j + 1}</sub>`
  );
}

export function detEquals() {
  return 'det(<i>A</i>) = ';
}

// ---- JSX helpers for cellOverrides.display --------------------------------

// Render a_{i+1, j+1} as JSX matching the engine's default a-symbol style.
// Use when a cell needs to display a custom (i, j) reference — for example,
// duplicated columns in Sarrus, or original-A indices on a minor matrix.
export function aDisplay(i, j) {
  return (
    <>
      a<span style={{
        fontSize: '0.65em',
        verticalAlign: 'sub',
        lineHeight: 0,
        fontStyle: 'italic'
      }}>
        {i + 1},{j + 1}
      </span>
    </>
  );
}