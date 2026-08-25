// Frozen-state SVGs for the Divisibility Decision Tree tool (Line 1 anchor mesh).
// Ports app/components/divisibility/divisibility-tree.jsx verbatim: same 576x816
// canvas and node coordinates, same analysis logic (div8 gated by div4, div9 by
// div3, derived 6/10/12 as conjunctions), same paint vocabulary (active nodes on
// the #3b82f6->#2563eb gradient, inactive #e2e8f0 with #cbd5e1 stroke, green/red
// result badges #22c55e/#ef4444, branch boxes #f8fafc at half opacity when cold,
// derived boxes #dcfce7/#166534 pass and #fef2f2/#991b1b fail, #e2e8f0 empty).
// Gradient ids are state-scoped - several SVGs share one page.

const FONT = '-apple-system, BlinkMacSystemFont, sans-serif';
const W = 576, H = 816, CX = W / 2;

// The component's useMemo, ported
function analyze(n) {
  if (n === null) return null;
  const isEven = n % 2 === 0;
  const lastDigit = n % 10;
  const last2 = n % 100;
  const last3 = n % 1000;
  const digitSum = String(n).split('').reduce((s, d) => s + parseInt(d), 0);
  const digits = String(n).split('').map(Number);
  const altSum = digits.reduce((sum, d, i) => sum + (i % 2 === 0 ? d : -d), 0);
  const div2 = isEven;
  const div4 = isEven && last2 % 4 === 0;
  const div8 = div4 && last3 % 8 === 0;
  const div3 = digitSum % 3 === 0;
  const div9 = div3 && digitSum % 9 === 0;
  const div5 = lastDigit === 0 || lastDigit === 5;
  const div7 = n % 7 === 0;
  const div11 = n % 11 === 0;
  return {
    n, isEven, lastDigit, last2, last3, digitSum, altSum,
    results: {
      1: true, 2: div2, 3: div3, 4: div4, 5: div5, 6: div2 && div3,
      7: div7, 8: div8, 9: div9, 10: div2 && div5, 11: div11, 12: div3 && div4
    }
  };
}

function esc(s) { return String(s); }

function freeze(key, n) {
  const a = analyze(n);
  const hasInput = a !== null;
  const grad = `dtree-${key}-act`;

  const node = (x, y, label, sublabel, highlighted, result, width = 100, height = 32) => {
    let s = `<g transform="translate(${x - width / 2}, ${y - height / 2})">`;
    s += `<rect width="${width}" height="${height}" rx="6" ` +
      (highlighted ? `fill="url(#${grad})"/>` : `fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1"/>`);
    s += `<text x="${width / 2}" y="${sublabel ? height / 2 - 5 : height / 2 + 1}" text-anchor="middle" dominant-baseline="middle" ` +
      `fill="${highlighted ? '#fff' : '#475569'}" font-size="13" font-weight="600" font-family="${FONT}">${esc(label)}</text>`;
    if (sublabel) {
      s += `<text x="${width / 2}" y="${height / 2 + 10}" text-anchor="middle" dominant-baseline="middle" ` +
        `fill="${highlighted ? 'rgba(255,255,255,0.8)' : '#64748b'}" font-size="11" font-family="${FONT}">${esc(sublabel)}</text>`;
    }
    if (result !== undefined) {
      s += `<g transform="translate(${width - 10}, -5)">` +
        `<circle cx="0" cy="0" r="10" fill="${result ? '#22c55e' : '#ef4444'}"/>` +
        `<text x="0" y="1" text-anchor="middle" dominant-baseline="middle" fill="#fff" font-size="10" font-weight="700" font-family="${FONT}">${result ? '✓' : '✗'}</text></g>`;
    }
    return s + `</g>`;
  };

  const line = (x1, y1, x2, y2, highlighted) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${highlighted ? '#3b82f6' : '#cbd5e1'}" stroke-width="2"/>`;

  const branchBox = (x, y, width, height, label, highlighted, children) =>
    `<g transform="translate(${x}, ${y})" opacity="${highlighted ? 1 : 0.5}">` +
    `<rect x="0" y="0" width="${width}" height="${height}" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>` +
    `<text x="${width / 2}" y="17" text-anchor="middle" fill="#64748b" font-size="11" font-weight="700" font-family="${FONT}">${label}</text>` +
    children + `</g>`;

  const derivedBox = (x, y, label, formula, pass) => {
    const width = 84, height = 34;
    const bg = hasInput ? (pass ? '#dcfce7' : '#fef2f2') : '#e2e8f0';
    const fg = hasInput ? (pass ? '#166534' : '#991b1b') : '#64748b';
    return `<g transform="translate(${x - width / 2}, ${y - height / 2})">` +
      `<rect width="${width}" height="${height}" rx="6" fill="${bg}"/>` +
      `<text x="${width / 2}" y="${height / 2 - 3}" text-anchor="middle" dominant-baseline="middle" fill="${fg}" font-size="13" font-weight="600" font-family="${FONT}">${label}</text>` +
      `<text x="${width / 2}" y="${height / 2 + 10}" text-anchor="middle" dominant-baseline="middle" fill="${fg}" font-size="10" opacity="0.7" font-family="${FONT}">${formula}</text></g>`;
  };

  const even = hasInput && a.isEven;
  const odd = hasInput && !a.isEven;
  const r = hasInput ? a.results : {};

  let s = '';
  // Input + even/odd
  s += node(CX, 36, hasInput ? String(a.n) : 'N', null, hasInput, undefined, 72);
  s += line(CX, 55, CX, 72, hasInput);
  s += node(CX, 91, 'Even or Odd?', hasInput ? (a.isEven ? 'EVEN' : 'ODD') : '', hasInput, undefined, 120, 43);
  s += line(CX, 113, CX, 130, hasInput);
  s += line(CX, 130, CX - 96, 144, even);
  s += line(CX, 130, CX + 96, 144, odd);

  // EVEN branch box
  let ev = '';
  ev += node(108, 54, '÷2 ✓', null, even, even ? true : undefined, 72, 31);
  ev += line(108, 70, 108, 84, even);
  ev += node(108, 103, '÷4?', even ? `${a.last2}` : '', even, even ? r[4] : undefined, 84, 36);
  ev += line(108, 121, 108, 138, even);
  ev += line(108, 138, 60, 150, hasInput && r[4]);
  ev += line(108, 138, 156, 150, even && !r[4]);
  ev += `<g transform="translate(12, 150)" opacity="${hasInput && r[4] ? 1 : 0.5}">` +
    `<rect x="0" y="0" width="96" height="72" rx="6" fill="#f0f4f8" stroke="#e2e8f0"/>` +
    `<text x="48" y="14" text-anchor="middle" fill="#64748b" font-size="10" font-weight="700" font-family="${FONT}">✓</text>` +
    node(48, 46, '÷8?', null, hasInput && r[4], hasInput && r[4] ? r[8] : undefined, 72, 31) + `</g>`;
  ev += `<g transform="translate(108, 150)" opacity="${even && !r[4] ? 1 : 0.5}">` +
    `<rect x="0" y="0" width="96" height="72" rx="6" fill="#f0f4f8" stroke="#e2e8f0"/>` +
    `<text x="48" y="14" text-anchor="middle" fill="#64748b" font-size="10" font-weight="700" font-family="${FONT}">✗</text>` +
    node(48, 46, '÷8 ✗', null, even && !r[4], even && !r[4] ? false : undefined, 72, 31) + `</g>`;
  s += branchBox(CX - 204, 144, 216, 240, 'EVEN', even, ev);

  // ODD branch box
  s += branchBox(CX + 12, 144, 168, 72, 'ODD',
    odd, node(84, 46, '÷2,4,6,8,10,12 ✗', null, odd, odd ? false : undefined, 144, 31));

  // Merge
  s += line(CX - 96, 384, CX, 402, hasInput);
  s += line(CX + 96, 216, CX, 402, hasInput);
  s += `<text x="${CX + 36}" y="408" fill="#94a3b8" font-size="11" font-family="${FONT}">↓ merge</text>`;

  // ÷3 and the ÷9 branches
  s += node(CX, 432, '÷3?', hasInput ? `sum=${a.digitSum}` : 'digit sum', hasInput, hasInput ? r[3] : undefined, 108, 43);
  s += line(CX, 454, CX, 470, hasInput);
  s += line(CX, 470, CX - 72, 482, hasInput && r[3]);
  s += line(CX, 470, CX + 72, 482, hasInput && !r[3]);
  s += branchBox(CX - 144, 482, 120, 60, '÷3 ✓', hasInput && r[3],
    node(60, 38, '÷9?', null, hasInput && r[3], hasInput && r[3] ? r[9] : undefined, 84, 31));
  s += branchBox(CX + 24, 482, 120, 60, '÷3 ✗', hasInput && !r[3],
    node(60, 38, '÷9 ✗', null, hasInput && !r[3], hasInput && !r[3] ? false : undefined, 84, 31));
  s += line(CX - 84, 542, CX, 558, hasInput);
  s += line(CX + 84, 542, CX, 558, hasInput);

  // ÷5, ÷7, ÷11
  s += node(CX, 582, '÷5?', hasInput ? `ends ${a.lastDigit}` : 'ends 0/5', hasInput, hasInput ? r[5] : undefined, 108, 43);
  s += line(CX, 604, CX, 618, hasInput);
  s += node(CX, 642, '÷7?', null, hasInput, hasInput ? r[7] : undefined, 84, 36);
  s += line(CX, 660, CX, 674, hasInput);
  s += node(CX, 698, '÷11?', hasInput ? `alt=${a.altSum}` : 'alt sum', hasInput, hasInput ? r[11] : undefined, 96, 38);
  s += line(CX, 718, CX, 734, hasInput);

  // Derived row
  s += `<text x="${CX}" y="756" text-anchor="middle" fill="#64748b" font-size="11" font-weight="600" font-family="${FONT}">DERIVED</text>`;
  s += derivedBox(CX - 96, 786, '÷6', '(2∧3)', r[6]);
  s += derivedBox(CX, 786, '÷10', '(2∧5)', r[10]);
  s += derivedBox(CX + 96, 786, '÷12', '(3∧4)', r[12]);

  return (
    `<svg viewBox="0 0 ${W} ${H}" width="400" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Divisibility decision tree${hasInput ? ` frozen at ${a.n}` : ', no input'}">` +
    `<defs><linearGradient id="${grad}" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#2563eb"/>` +
    `</linearGradient></defs>` +
    `<rect x="0" y="0" width="${W}" height="${H}" fill="#fff" rx="12"/>` +
    s +
    `</svg>`
  );
}

const divisibilityTreeDiagrams = {
  empty: freeze('empty', null),           // no input: the whole tree gray
  evenPath: freeze('evenPath', 26),       // even, fails ÷4 -> ÷8 blocked
  oddPath: freeze('oddPath', 45),         // odd: six divisors eliminated at once
  eightChain: freeze('eightChain', 104),  // ÷4 passes -> ÷8 tested and passes
  threePass: freeze('threePass', 126),    // digit sum 9: ÷3 and ÷9 both pass (+÷7 hit)
  threeFail: freeze('threeFail', 50),     // digit sum 5: ÷3 fails, ÷9 refused
  primeLike: freeze('primeLike', 13),     // only 1 divides: prime suspect
};

export default divisibilityTreeDiagrams;
