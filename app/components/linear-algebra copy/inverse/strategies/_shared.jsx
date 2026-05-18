// strategies/_shared.jsx
//
// Shared helpers for inverse-matrix strategies.
// Mirrors determinant/strategies/_shared.jsx but kept local to inverse
// so the two domains stay independent.

import React from 'react';

// ---- term-pill formula ----------------------------------------------------

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

export function invHeader() {
  return '<i>A</i><sup>&minus;1</sup> = ';
}

// ---- JSX helpers for cellOverrides.display --------------------------------

// a_{i+1, j+1} as JSX (matches engine default style).
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

// Negated a_{i,j} as JSX (used in 2x2 closed form).
export function negADisplay(i, j) {
  return (
    <>
      &minus;a<span style={{
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

// Plain digit or symbol cell content as JSX. Used for identity cells
// (1, 0) and Gauss-Jordan placeholder symbols.
export function plainDisplay(content) {
  return <span style={{ fontStyle: 'normal' }}>{content}</span>;
}

// Identity-matrix cell content: 1 on the diagonal, 0 elsewhere.
export function identityCell(i, j) {
  return plainDisplay(i === j ? '1' : '0');
}