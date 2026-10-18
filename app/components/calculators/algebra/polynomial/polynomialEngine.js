/* ============================================================================
   polynomialEngine — exact polynomial arithmetic for PolynomialCalculator.
   computeOperation(opKey, polyStrings) returns
     { ok: true, result, steps, copy, graph }   or   { ok: false, message }.
   result = { primaryLabel, primaryMath, extras, identity, meta } (LaTeX without $ signs);
   steps  = [{ title, math, note }] with $...$ around the math, as the panel expects.
   Coefficients are exact fractions { n, d }; a polynomial is an array of fractions,
   index = power (lowest first), with no trailing zeros; the zero polynomial is [].
   ========================================================================== */

/* ===== fractions ========================================================== */

const gcdInt = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };

function q(n, d = 1) {
  if (d === 0) throw new Error('Division by zero');
  if (d < 0) { n = -n; d = -d; }
  const g = gcdInt(n, d) || 1;
  const r = { n: n / g, d: d / g };
  if (!Number.isSafeInteger(r.n) || !Number.isSafeInteger(r.d)) throw new Error('The numbers are too large for exact arithmetic');
  return r;
}
const qAdd = (a, b) => q(a.n * b.d + b.n * a.d, a.d * b.d);
const qSub = (a, b) => q(a.n * b.d - b.n * a.d, a.d * b.d);
const qMul = (a, b) => q(a.n * b.n, a.d * b.d);
const qDiv = (a, b) => q(a.n * b.d, a.d * b.n);
const qNeg = (a) => ({ n: -a.n, d: a.d });
const qIsZero = (a) => a.n === 0;
const qIsOne = (a) => a.n === 1 && a.d === 1;
const qIsInt = (a) => a.d === 1;
const qNum = (a) => a.n / a.d;
const qEq = (a, b) => a.n === b.n && a.d === b.d;
const Z = q(0), ONE = q(1);

/* ===== number text ======================================================== */

function decimalText(x) {
  if (!isFinite(x)) return String(x);
  if (Number.isInteger(x)) return String(x);
  return String(parseFloat(x.toPrecision(7)));
}
// a fraction as LaTeX: 3, -3, \frac{3}{2}, -\frac{3}{2}
function qTex(a) {
  if (a.d === 1) return String(a.n);
  return (a.n < 0 ? '-' : '') + '\\frac{' + Math.abs(a.n) + '}{' + a.d + '}';
}
const qAbsTex = (a) => qTex({ n: Math.abs(a.n), d: a.d });

/* ===== polynomial helpers ================================================= */

const trim = (p) => { const r = p.slice(); while (r.length && qIsZero(r[r.length - 1])) r.pop(); return r; };
const deg = (p) => p.length - 1;                 // -1 for the zero polynomial
const lead = (p) => (p.length ? p[p.length - 1] : Z);
const coefAt = (p, k) => (k < p.length ? p[k] : Z);
const polyAdd = (a, b) => { const n = Math.max(a.length, b.length), r = []; for (let i = 0; i < n; i++) r.push(qAdd(coefAt(a, i), coefAt(b, i))); return trim(r); };
const polyNeg = (a) => a.map(qNeg);
const polySub = (a, b) => polyAdd(a, polyNeg(b));
function polyMul(a, b) {
  if (!a.length || !b.length) return [];
  const r = new Array(a.length + b.length - 1).fill(Z);
  for (let i = 0; i < a.length; i++) for (let j = 0; j < b.length; j++) r[i + j] = qAdd(r[i + j], qMul(a[i], b[j]));
  return trim(r);
}
const polyScale = (a, c) => trim(a.map((x) => qMul(x, c)));
const monomial = (c, k) => { const r = new Array(k + 1).fill(Z); r[k] = c; return trim(r); };
function polyDivmod(n, d) {
  if (!d.length) throw new Error('Division by the zero polynomial');
  let r = n.slice(), quo = [];
  const dl = lead(d), dd = deg(d);
  while (r.length && deg(r) >= dd) {
    const c = qDiv(lead(r), dl), k = deg(r) - dd;
    quo = polyAdd(quo, monomial(c, k));
    r = polySub(r, polyMul(monomial(c, k), d));
  }
  return { quo, rem: r };
}
function polyEvalQ(p, x) { let acc = Z; for (let i = p.length - 1; i >= 0; i--) acc = qAdd(qMul(acc, x), p[i]); return acc; }
function polyEvalNum(p, x) { let acc = 0; for (let i = p.length - 1; i >= 0; i--) acc = acc * x + qNum(p[i]); return acc; }

// LaTeX of a polynomial in standard form
function varPow(k) { return k === 0 ? '' : k === 1 ? 'x' : 'x^{' + k + '}'; }
function polyTex(p) {
  if (!p.length) return '0';
  let out = '';
  for (let k = p.length - 1; k >= 0; k--) {
    const c = p[k];
    if (qIsZero(c)) continue;
    const neg = c.n < 0, abs = { n: Math.abs(c.n), d: c.d };
    const coefTex = (k > 0 && qIsOne(abs)) ? '' : qAbsTex(abs);
    const term = coefTex + varPow(k) || '1';
    if (!out) out = (neg ? '-' : '') + term;
    else out += (neg ? ' - ' : ' + ') + term;
  }
  return out;
}
const polyTexP = (p) => '(' + polyTex(p) + ')';
const termTex = (c, k) => polyTex(monomial(c, k));

/* ===== parser: text -> polynomial ======================================== */

function normalize(text) {
  const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  return String(text == null ? '' : text)
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (run) => '^' + run.split('').map((c) => SUP[c]).join(''))
    .replace(/\*\*/g, '^').replace(/[−–—]/g, '-').replace(/[×·]/g, '*').replace(/÷/g, '/')
    .replace(/\^\{(\d+)\}/g, '^$1').replace(/\s+/g, '');
}

function decimalToQ(str) {
  const [i, f = ''] = str.split('.');
  const digits = (i || '0') + f;
  if (digits.length > 15) throw new Error('A number has too many digits');
  return q(parseInt(digits, 10), Math.pow(10, f.length));
}

function parsePoly(text) {
  const s = normalize(text);
  if (!s) throw new Error('The polynomial is empty');
  if (s.includes('=')) throw new Error('Enter an expression, not an equation: remove the equals sign');
  let pos = 0;
  const peek = () => s[pos];
  const startsFactor = () => /[0-9.xX(]/.test(peek() || '');
  function expr() {
    let acc = term();
    while (peek() === '+' || peek() === '-') {
      const op = s[pos++];
      const t = term();
      acc = op === '+' ? polyAdd(acc, t) : polySub(acc, t);
    }
    return acc;
  }
  function term() {
    let acc = unary();
    for (;;) {
      if (peek() === '*') { pos++; acc = polyMul(acc, unary()); }
      else if (peek() === '/') {
        pos++;
        const d = unary();
        if (d.length !== 1) throw new Error(d.length === 0 ? 'Division by zero' : 'Divide only by a number here; use the Long division operation to divide by a polynomial');
        acc = polyScale(acc, qDiv(ONE, d[0]));
      } else if (startsFactor()) acc = polyMul(acc, unary());   // implicit multiplication: 2x, (x+1)(x-1), x(x+2)
      else return acc;
    }
  }
  function unary() {
    if (peek() === '-') { pos++; return polyNeg(unary()); }
    if (peek() === '+') { pos++; return unary(); }
    return power();
  }
  function power() {
    const base = atom();
    if (peek() === '^') {
      pos++;
      let m;
      if (peek() === '(') { pos++; m = /^\d+/.exec(s.slice(pos)); if (!m) throw new Error('An exponent must be a whole number'); pos += m[0].length; if (peek() !== ')') throw new Error('Missing closing bracket'); pos++; }
      else { m = /^\d+/.exec(s.slice(pos)); if (!m) throw new Error('An exponent must be a whole number'); pos += m[0].length; }
      const e = parseInt(m[0], 10);
      if (e > 60) throw new Error('The exponent is too large');
      let r = [ONE];
      for (let i = 0; i < e; i++) r = polyMul(r, base);
      return r;
    }
    return base;
  }
  function atom() {
    const c = peek();
    if (c === '(') {
      pos++;
      const r = expr();
      if (peek() !== ')') throw new Error('Missing closing bracket');
      pos++;
      return r;
    }
    if (c === 'x' || c === 'X') { pos++; return monomial(ONE, 1); }
    const m = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(pos));
    if (m) { pos += m[0].length; const v = decimalToQ(m[0]); return qIsZero(v) ? [] : [v]; }
    throw new Error(c === undefined ? 'The expression ends too early' : 'Unexpected symbol "' + c + '"');
  }
  const r = expr();
  if (pos < s.length) throw new Error(peek() === ')' ? 'Extra closing bracket' : 'Unexpected symbol "' + peek() + '"');
  return r;
}

/* ===== shared result pieces ============================================== */

const metaOf = (p) => (p.length
  ? [{ label: 'Degree', value: String(deg(p)) }, { label: 'Leading', value: decimalText(qNum(lead(p))) }, { label: 'Constant', value: decimalText(qNum(coefAt(p, 0))).replace('-', '−') }]
  : [{ label: 'Degree', value: 'none (zero polynomial)' }]);
const m$ = (s) => '$' + s + '$';
const paren = (p) => polyTexP(p);
const sumTex = (parts, sep) => parts.join(sep);
// a coefficient as it appears in a sum: negatives get brackets
const cT = (c) => (c.n < 0 ? '(' + qTex(c) + ')' : qTex(c));
const joinCoef = (cs, signs) => cs.map((c, i) => (i === 0 ? qTex(c) : (signs[i] === '-' ? ' - ' : ' + ') + (c.n < 0 ? '(' + qTex(c) + ')' : qTex(c)))).join('');

function realRootsOf(p) {
  if (p.length < 2 || p.length > 13) return [];
  try {
    return numericRoots(p.map(qNum)).filter((z) => Math.abs(z.im) < 1e-7).map((z) => z.re).sort((x, y) => x - y);
  } catch (e) { return []; }
}
function graphOf(p, roots) { return { coefs: p.map(qNum), roots: roots || realRootsOf(p) }; }

/* ===== add / subtract / multiply ========================================= */

function opAdd(polys) {
  const total = polys.reduce((a, b) => polyAdd(a, b), []);
  const maxDeg = Math.max(...polys.map(deg), 0);
  const steps = [{ title: 'Line up by degree', math: m$(polys.map(paren).join(' + ')), note: 'Group every term with the same power of $x$ together.' }];
  for (let k = maxDeg; k >= 0; k--) {
    const cs = polys.map((p) => coefAt(p, k));
    if (cs.every(qIsZero)) continue;
    const s = cs.reduce(qAdd, Z);
    const name = k === 0 ? 'Sum the constants' : 'Sum coefficients of $' + varPow(k) + '$';
    const lhs = '(' + joinCoef(cs, cs.map(() => '+')) + ')' + varPow(k);
    steps.push({ title: name, math: m$(k === 0 ? joinCoef(cs, cs.map(() => '+')) + ' = ' + qTex(s) : lhs + ' = ' + termTex(s, k)) });
  }
  steps.push({ title: 'Write in standard form', math: m$(polyTex(total)), note: 'Highest degree first, descending; terms with coefficient zero are dropped.' });
  return { result: { primaryLabel: 'Sum', primaryMath: polyTex(total), meta: metaOf(total) }, steps, copy: polyTex(total), graph: graphOf(total) };
}

function opSubtract(polys) {
  const [first, ...rest] = polys;
  const total = rest.reduce((a, b) => polySub(a, b), first);
  const steps = [];
  steps.push({ title: rest.length > 1 ? 'Distribute the minus over every subtracted polynomial' : 'Distribute the minus over $P_2$', math: m$(polyTex(first) + rest.map((p) => ' - ' + paren(p)).join('')), note: 'Every sign in a subtracted polynomial flips.' });
  const flipped = rest.reduce((a, b) => polyAdd(a, polyNeg(b)), []);
  // rewrite without brackets: the terms of the first polynomial, then the flipped terms of the others
  let rewritten = polyTex(first);
  rest.forEach((p) => { const t = polyTex(polyNeg(p)); rewritten += t.startsWith('-') ? ' - ' + t.slice(1) : ' + ' + t; });
  steps.push({ title: 'Rewrite without the parentheses', math: m$(rewritten), note: 'Now it is pure addition.' });
  const maxDeg = Math.max(...polys.map(deg), 0);
  const groups = [];
  for (let k = maxDeg; k >= 0; k--) {
    const cs = polys.map((p) => coefAt(p, k));
    if (cs.every(qIsZero)) continue;
    const signs = cs.map((_, i) => (i === 0 ? '+' : '-'));
    const inner = '(' + joinCoef(cs, signs) + ')' + varPow(k);
    groups.push(inner);
  }
  steps.push({ title: 'Group like terms', math: m$(groups.length ? groups.join(' + ') : '0') });
  steps.push({ title: 'Simplify each coefficient', math: m$(polyTex(total)), note: 'Final answer in standard form.' });
  return { result: { primaryLabel: 'Difference', primaryMath: polyTex(total), meta: metaOf(total) }, steps, copy: polyTex(total), graph: graphOf(total) };
}

function opMultiply(polys) {
  const steps = [];
  let acc = polys[0];
  for (let i = 1; i < polys.length; i++) {
    const b = polys[i];
    steps.push({ title: i === 1 ? 'Set up the first pair' : 'Bring in $P_{' + (i + 1) + '}$', math: m$(paren(acc) + paren(b)), note: i === 1 ? 'Start with the leftmost two polynomials.' : 'Distribute every term of the product so far across every term of the next polynomial.' });
    const products = [];
    for (let k = deg(acc); k >= 0; k--) {
      if (qIsZero(coefAt(acc, k))) continue;
      for (let j = deg(b); j >= 0; j--) {
        if (qIsZero(coefAt(b, j))) continue;
        products.push(termTex(qMul(coefAt(acc, k), coefAt(b, j)), k + j));
      }
    }
    if (products.length) {
      const shown = products.length > 12 ? products.slice(0, 12).join(' + ') + ' + \\cdots' : products.join(' + ').replace(/\+ -/g, '- ');
      steps.push({ title: 'Distribute term by term', math: m$(shown.replace(/\+ -/g, '- ')), note: products.length + ' products in all, one for each pair of terms.' });
    }
    acc = polyMul(acc, b);
    steps.push({ title: 'Combine like terms', math: m$(polyTex(acc)), note: i === polys.length - 1 ? 'Now we have the final simplified polynomial.' : 'Collect coefficients of matching powers.' });
  }
  return { result: { primaryLabel: 'Product', primaryMath: polyTex(acc), meta: metaOf(acc) }, steps, copy: polyTex(acc), graph: graphOf(acc) };
}

/* ===== division ========================================================== */

function opLongDiv(polys) {
  const [num, den] = polys;
  if (!den.length) throw new Error('The divisor is zero');
  const steps = [{ title: 'Set up the division', math: m$('\\dfrac{' + polyTex(num) + '}{' + polyTex(den) + '}'), note: 'Divide the dividend by the divisor, highest powers first.' }];
  let r = num.slice(), quo = [];
  const dl = lead(den), dd = deg(den);
  let guard = 0;
  while (r.length && deg(r) >= dd && guard++ < 40) {
    const c = qDiv(lead(r), dl), k = deg(r) - dd;
    const t = monomial(c, k);
    steps.push({ title: 'Divide the leading terms', math: m$('\\dfrac{' + termTex(lead(r), deg(r)) + '}{' + termTex(dl, dd) + '} = ' + polyTex(t)), note: 'This is the next term of the quotient.' });
    const prod = polyMul(t, den);
    const next = polySub(r, prod);
    steps.push({ title: 'Multiply back and subtract', math: m$(polyTex(r) + ' - ' + paren(prod) + ' = ' + polyTex(next)), note: next.length && deg(next) >= dd ? 'The remainder still has degree at least ' + dd + ': repeat.' : 'The remainder now has a smaller degree than the divisor: stop.' });
    quo = polyAdd(quo, t);
    r = next;
  }
  if (deg(num) < dd) steps.push({ title: 'The dividend is already smaller', math: m$(polyTex(num)), note: 'Its degree is below the divisor\'s, so the quotient is $0$ and the remainder is the dividend.' });
  steps.push({ title: 'Check by multiplying back', math: m$(polyTex(num) + ' = ' + paren(den) + paren(quo.length ? quo : [Z]) + (r.length ? ' + ' + paren(r) : '')), note: 'Divisor times quotient plus remainder gives the dividend.' });
  const identity = '\\dfrac{' + polyTex(num) + '}{' + polyTex(den) + '} = ' + polyTex(quo) + (r.length ? ' + \\dfrac{' + polyTex(r) + '}{' + polyTex(den) + '}' : '');
  return {
    result: {
      primaryLabel: 'Quotient', primaryMath: polyTex(quo), extras: [{ label: 'Remainder', math: polyTex(r) }], identity,
      meta: [{ label: 'Quotient degree', value: quo.length ? String(deg(quo)) : 'none' }, { label: 'Remainder degree', value: r.length ? String(deg(r)) : 'none' }],
    },
    steps, copy: polyTex(quo) + (r.length ? ' + ' + '\\frac{' + polyTex(r) + '}{' + polyTex(den) + '}' : ''), graph: graphOf(quo.length ? quo : [Z]),
  };
}

function opSynthDiv(polys) {
  const [num, den] = polys;
  if (deg(den) !== 1 || !qIsOne(lead(den))) throw new Error('Synthetic division needs a divisor of the form x − c (degree 1, leading coefficient 1). Use Long division for other divisors.');
  const c = qNeg(coefAt(den, 0));
  const coefs = []; for (let k = deg(num); k >= 0; k--) coefs.push(coefAt(num, k));
  if (!coefs.length) throw new Error('The dividend is zero');
  const steps = [{ title: 'Set up', math: m$('c = ' + qTex(c) + ', \\quad \\text{coefficients: } ' + coefs.map(qTex).join(', \\; ')), note: 'The divisor is $x - c$; list the dividend\'s coefficients, with a $0$ for every missing power.' }];
  const row = [coefs[0]];
  steps.push({ title: 'Bring down the first coefficient', math: m$(qTex(coefs[0])) });
  for (let i = 1; i < coefs.length; i++) {
    const prev = row[i - 1], prod = qMul(prev, c), next = qAdd(coefs[i], prod);
    row.push(next);
    steps.push({ title: 'Multiply by $c$ and add', math: m$(qTex(coefs[i]) + ' + ' + cT(prev) + ' \\cdot ' + cT(c) + ' = ' + qTex(next)), note: i === coefs.length - 1 ? 'The last number is the remainder.' : undefined });
  }
  const remainder = row[row.length - 1];
  const quo = trim(row.slice(0, -1).reverse());
  steps.push({ title: 'Read the quotient and the remainder', math: m$('Q = ' + polyTex(quo) + ', \\quad R = ' + qTex(remainder)), note: 'By the remainder theorem, $R = P(' + qTex(c) + ')$.' });
  const rem = qIsZero(remainder) ? [] : [remainder];
  return {
    result: { primaryLabel: 'Quotient', primaryMath: polyTex(quo), extras: [{ label: 'Remainder', math: qTex(remainder) }], meta: [{ label: 'Quotient degree', value: quo.length ? String(deg(quo)) : 'none' }] },
    steps, copy: polyTex(quo) + (rem.length ? ' + \\frac{' + qTex(remainder) + '}{' + polyTex(den) + '}' : ''), graph: graphOf(quo.length ? quo : [Z]),
  };
}

/* ===== simplify ========================================================== */

function opSimplify(polys, raw) {
  const p = polys[0];
  const steps = [];
  const texOf = (s) => normalize(s).replace(/\*/g, ' \\cdot ').replace(/\^(\d+)/g, '^{$1}').replace(/(\d)\s*\\cdot\s*([x(])/g, '$1$2');
  steps.push({ title: 'Read the expression', math: m$(texOf(raw)), note: 'Simplifying means standard form: descending powers, like terms combined, zero terms removed.' });
  const s = normalize(raw);
  if (/[()/]/.test(s)) steps.push({ title: 'Expand the brackets', math: m$(polyTex(p)), note: 'Multiply out every bracket, then collect like terms.' });
  else {
    const terms = s.replace(/-/g, '+-').split('+').filter(Boolean);
    const by = {};
    terms.forEach((t) => {
      const m = /^(-?)(\d*\.?\d*)(x?)(?:\^(\d+))?$/i.exec(t);
      if (!m) return;
      const k = m[3] ? (m[4] ? parseInt(m[4], 10) : 1) : 0;
      const c = m[2] === '' || m[2] === '.' ? ONE : decimalToQ(m[2]);
      (by[k] = by[k] || []).push(m[1] === '-' ? qNeg(c) : c);
    });
    const ks = Object.keys(by).map(Number).sort((a, b) => b - a);
    ks.forEach((k) => {
      const cs = by[k], sum = cs.reduce(qAdd, Z);
      steps.push({ title: k === 0 ? 'Combine the constants' : 'Combine the $' + varPow(k) + '$ terms', math: m$(cs.length > 1 ? '(' + joinCoef(cs, cs.map(() => '+')) + ')' + varPow(k) + ' = ' + (qIsZero(sum) ? '0' : termTex(sum, k)) : termTex(sum, k)), note: qIsZero(sum) ? 'These terms cancel completely.' : undefined });
    });
  }
  steps.push({ title: 'Write in standard form', math: m$(polyTex(p)), note: p.length ? 'Highest degree first.' : 'Everything cancelled: the simplified polynomial is $0$.' });
  return { result: { primaryLabel: 'Simplified', primaryMath: polyTex(p), meta: metaOf(p) }, steps, copy: polyTex(p), graph: graphOf(p) };
}

/* ===== factoring and zeros =============================================== */

function divisors(n) {
  n = Math.abs(n); const out = [];
  for (let i = 1; i * i <= n; i++) if (n % i === 0) { out.push(i); if (i !== n / i) out.push(n / i); }
  return out.sort((a, b) => a - b);
}
const lcmInt = (a, b) => (a / gcdInt(a, b)) * b;

// integer polynomial (array of ints, low first) with a positive leading coefficient, from a rational one
function toIntegerPoly(p) {
  const L = p.reduce((acc, c) => lcmInt(acc, c.d), 1);
  let ints = p.map((c) => (c.n * L) / c.d);
  const g = ints.reduce((acc, v) => gcdInt(acc, v), 0) || 1;
  let sign = ints[ints.length - 1] < 0 ? -1 : 1;
  ints = ints.map((v) => (sign * v) / g);
  // original = (g * sign / L) * ints
  return { ints, scale: q(sign * g, L) };
}

// factor a nonzero polynomial over the rationals as far as rational roots allow
function factorRational(p, steps, wantSteps) {
  const { ints, scale } = toIntegerPoly(p);
  let cur = trim(ints.map((v) => q(v)));
  const factors = [];                 // { poly (primitive linear), mult }
  let xPower = 0;
  if (wantSteps && !qIsOne(scale)) {
    steps.push({ title: 'Pull out the greatest common factor', math: m$(polyTex(p) + ' = ' + qTex(scale) + paren(cur)), note: 'The constant factor, with the sign chosen so that the leading coefficient inside is positive.' });
  }
  while (cur.length > 1 && qIsZero(cur[0])) { cur = cur.slice(1); xPower++; }
  if (wantSteps && xPower > 0) steps.push({ title: 'Factor out the power of $x$', math: m$('x^{' + xPower + '}' + paren(cur)), note: 'The constant term is $0$, so $x = 0$ is a root of multiplicity ' + xPower + '.' });
  let guard = 0;
  while (cur.length > 2 && guard++ < 20) {
    const a0 = Math.round(qNum(cur[0])), an = Math.round(qNum(lead(cur)));
    const ps = divisors(a0), qs = divisors(an);
    const cands = [];
    ps.forEach((pp) => qs.forEach((qq) => { if (gcdInt(pp, qq) === 1) { cands.push(q(pp, qq)); cands.push(q(-pp, qq)); } }));
    const uniq = cands.filter((c, i) => cands.findIndex((o) => qEq(o, c)) === i).sort((a, b) => qNum(a) - qNum(b));
    let found = null;
    for (const c of uniq) { if (qIsZero(polyEvalQ(cur, c))) { found = c; break; } }
    if (wantSteps) {
      const list = uniq.length > 14 ? uniq.slice(0, 14).map(qTex).join(', \\; ') + ', \\ldots' : uniq.map(qTex).join(', \\; ');
      steps.push({ title: 'List the rational root candidates', math: m$('\\pm \\dfrac{p}{q}: \\; ' + list), note: '$p$ divides the constant term ' + a0 + ' and $q$ divides the leading coefficient ' + an + '.' });
    }
    if (!found) {
      if (wantSteps) steps.push({ title: 'No rational root is left', math: m$(polyTex(cur)), note: 'No candidate gives $0$, so this factor has no rational roots and cannot be split further with whole-number factors.' });
      break;
    }
    const lin = [q(-found.n), q(found.d)];           // (d x - n)
    const { quo, rem } = polyDivmod(cur, lin);
    if (wantSteps) {
      steps.push({ title: 'Test $x = ' + qTex(found) + '$', math: m$('P(' + qTex(found) + ') = 0'), note: 'It is a root, so ' + '$' + polyTex(lin) + '$ is a factor.' });
      steps.push({ title: 'Divide it out', math: m$(polyTex(cur) + ' = ' + paren(lin) + paren(quo)), note: 'The quotient has degree ' + deg(quo) + '.' });
    }
    const hit = factors.find((f) => polyTex(f.poly) === polyTex(lin));
    if (hit) hit.mult++; else factors.push({ poly: lin, mult: 1 });
    cur = trim(quo);
  }
  // a remaining quadratic may have rational roots too
  if (cur.length === 3) {
    const [c0, c1, c2] = cur;
    const disc = qSub(qMul(c1, c1), qMul(q(4), qMul(c0, c2)));
    const sq = Math.sqrt(qNum(disc));
    if (disc.n >= 0 && Number.isInteger(Math.round(sq)) && qEq(qMul(q(Math.round(sq)), q(Math.round(sq))), disc)) {
      const root1 = qDiv(qAdd(qNeg(c1), q(Math.round(sq))), qMul(q(2), c2));
      const root2 = qDiv(qSub(qNeg(c1), q(Math.round(sq))), qMul(q(2), c2));
      if (wantSteps) steps.push({ title: 'Solve the remaining quadratic', math: m$('\\Delta = ' + qTex(disc) + ', \\quad x = ' + qTex(root1) + ' \\text{ or } x = ' + qTex(root2)), note: 'The discriminant is a perfect square, so both roots are rational.' });
      [root1, root2].forEach((r) => {
        const lin = [q(-r.n), q(r.d)];
        const hit = factors.find((f) => polyTex(f.poly) === polyTex(lin));
        if (hit) hit.mult++; else factors.push({ poly: lin, mult: 1 });
      });
      cur = [ONE];
    } else if (wantSteps) {
      steps.push({ title: 'The remaining quadratic', math: m$(polyTex(cur) + ', \\quad \\Delta = ' + qTex(disc)), note: disc.n < 0 ? 'The discriminant is negative: no real roots, so it stays as one irreducible factor.' : 'The discriminant is not a perfect square: the roots are irrational, so it stays as one factor over the rationals.' });
    }
  } else if (cur.length === 2) {
    const lin = cur.slice();           // linear leftover: primitive (a x + b)
    const g = gcdInt(Math.round(qNum(lin[0])), Math.round(qNum(lin[1]))) || 1;
    const prim = lin.map((v) => qDiv(v, q(g)));
    const hit = factors.find((f) => polyTex(f.poly) === polyTex(prim));
    if (hit) hit.mult++; else factors.push({ poly: prim, mult: 1 });
    cur = [q(g)];
  }
  return { scale, xPower, factors, rest: cur };
}

function factoredTex(fr) {
  const parts = [];
  const sc = fr.scale;
  const restIsConst = fr.rest.length === 1;
  const restConst = restIsConst ? fr.rest[0] : ONE;
  const k = qMul(sc, restConst);
  const hasFactors = fr.xPower > 0 || fr.factors.length > 0 || !restIsConst;
  if (!qIsOne(k) || !hasFactors) parts.push(qIsOne(k) ? '1' : (k.n === -1 && k.d === 1 && hasFactors ? '-' : qTex(k)));
  if (fr.xPower > 0) parts.push(fr.xPower === 1 ? 'x' : 'x^{' + fr.xPower + '}');
  fr.factors.slice().sort((a, b) => qNum(q(-a.poly[0].n, a.poly[0].d)) / 1 - qNum(q(-b.poly[0].n, b.poly[0].d))).forEach((f) => { parts.push('(' + polyTex(f.poly) + ')' + (f.mult > 1 ? '^{' + f.mult + '}' : '')); });
  if (!restIsConst) parts.push('(' + polyTex(fr.rest) + ')');
  let out = parts.join('');
  if (out === '-') out = '-1';
  return out;
}

function opFactor(polys) {
  const p = polys[0];
  if (!p.length) return { result: { primaryLabel: 'Factored form', primaryMath: '0', meta: metaOf(p) }, steps: [{ title: 'The zero polynomial', math: m$('0'), note: 'There is nothing to factor.' }], copy: '0', graph: graphOf([Z]) };
  if (deg(p) === 0) return { result: { primaryLabel: 'Factored form', primaryMath: qTex(p[0]), meta: metaOf(p) }, steps: [{ title: 'A constant', math: m$(qTex(p[0])), note: 'A constant has no variable to factor.' }], copy: qTex(p[0]), graph: graphOf(p) };
  const steps = [{ title: 'Write in standard form', math: m$(polyTex(p)), note: 'Strategy: pull out the greatest common factor, then use the rational root theorem.' }];
  const fr = factorRational(p, steps, true);
  const out = factoredTex(fr);
  const roots = fr.factors.map((f) => qNum(q(-f.poly[0].n, f.poly[0].d))).concat(fr.xPower ? [0] : []);
  steps.push({ title: 'Collect the factors', math: m$(polyTex(p) + ' = ' + out), note: 'Multiplying the factors back gives the original polynomial.' });
  const irreducible = fr.rest.length > 1 ? 1 : 0;
  return {
    result: { primaryLabel: 'Factored form', primaryMath: out, meta: [{ label: 'Degree', value: String(deg(p)) }, { label: 'Linear factors', value: String(fr.factors.reduce((a, f) => a + f.mult, 0) + fr.xPower) }, ...(irreducible ? [{ label: 'Irreducible part', value: 'degree ' + deg(fr.rest) }] : [])] },
    steps, copy: out, graph: graphOf(p, roots),
  };
}

// Durand–Kerner: all complex roots of a polynomial with real coefficients (high degree last in `c`)
function numericRoots(c) {
  const n = c.length - 1, a = c.map((v) => v / c[n]);
  let r = []; for (let i = 0; i < n; i++) { const ang = (2 * Math.PI * i) / n + 0.4; r.push({ re: 0.9 * Math.cos(ang) * (1 + i * 0.1), im: 0.9 * Math.sin(ang) * (1 + i * 0.1) }); }
  const mul = (x, y) => ({ re: x.re * y.re - x.im * y.im, im: x.re * y.im + x.im * y.re });
  const sub = (x, y) => ({ re: x.re - y.re, im: x.im - y.im });
  const div = (x, y) => { const d = y.re * y.re + y.im * y.im; return { re: (x.re * y.re + x.im * y.im) / d, im: (x.im * y.re - x.re * y.im) / d }; };
  const evalP = (z) => { let acc = { re: a[n], im: 0 }; for (let i = n - 1; i >= 0; i--) { acc = mul(acc, z); acc.re += a[i]; } return acc; };
  for (let it = 0; it < 500; it++) {
    let delta = 0;
    r = r.map((z, i) => {
      let den = { re: 1, im: 0 };
      r.forEach((w, j) => { if (j !== i) den = mul(den, sub(z, w)); });
      const step = div(evalP(z), den);
      delta = Math.max(delta, Math.abs(step.re) + Math.abs(step.im));
      return sub(z, step);
    });
    if (delta < 1e-13) break;
  }
  return r;
}

function cplx(re, im) { const r = Math.abs(re) < 1e-9 ? '' : decimalText(re) + ' '; const m = Math.abs(Math.abs(im) - 1) < 1e-9 ? '' : decimalText(Math.abs(im)); return r + '\\pm ' + m + 'i'; }
function opZeros(polys) {
  const p = polys[0];
  if (!p.length) return { result: { primaryLabel: 'Zeros', primaryMath: '\\text{every number}', meta: [{ label: 'Real roots', value: 'all' }] }, steps: [{ title: 'The zero polynomial', math: m$('0'), note: 'Every number is a zero of the zero polynomial.' }], copy: '\\text{every number}', graph: graphOf([Z]) };
  if (deg(p) === 0) return { result: { primaryLabel: 'Zeros', primaryMath: '\\text{none}', meta: [{ label: 'Real roots', value: '0' }, { label: 'Complex roots', value: '0' }] }, steps: [{ title: 'A nonzero constant', math: m$(qTex(p[0])), note: 'A nonzero constant is never $0$, so it has no zeros.' }], copy: '\\text{none}', graph: graphOf(p) };
  const steps = [{ title: 'Write in standard form', math: m$(polyTex(p)), note: 'Find every $x$ with $P(x) = 0$: rational roots first, then what is left.' }];
  const fr = factorRational(p, steps, true);
  const roots = [];     // { text, value (number), mult, kind: 'rational'|'real'|'complex' }
  if (fr.xPower) roots.push({ tex: 'x = 0', val: 0, mult: fr.xPower, real: true });
  fr.factors.forEach((f) => { const r = q(-f.poly[0].n, f.poly[0].d); roots.push({ tex: 'x = ' + qTex(r), val: qNum(r), mult: f.mult, real: true }); });
  const rest = fr.rest;
  if (rest.length === 3) {
    const [c0, c1, c2] = rest.map(qNum);
    const disc = c1 * c1 - 4 * c0 * c2;
    if (disc >= 0) {
      const r1 = (-c1 + Math.sqrt(disc)) / (2 * c2), r2 = (-c1 - Math.sqrt(disc)) / (2 * c2);
      steps.push({ title: 'Quadratic formula on the rest', math: m$('x = \\dfrac{' + decimalText(-c1) + ' \\pm \\sqrt{' + decimalText(disc) + '}}{' + decimalText(2 * c2) + '} \\approx ' + decimalText(r1) + ', \\; ' + decimalText(r2)), note: 'The discriminant is positive but not a perfect square: two irrational real roots.' });
      roots.push({ tex: 'x \\approx ' + decimalText(r1), val: r1, mult: 1, real: true }, { tex: 'x \\approx ' + decimalText(r2), val: r2, mult: 1, real: true });
    } else {
      const re = -c1 / (2 * c2), im = Math.sqrt(-disc) / (2 * Math.abs(c2));
      steps.push({ title: 'Quadratic formula on the rest', math: m$('x = ' + cplx(re, im)), note: 'The discriminant is negative: a pair of complex conjugate roots.' });
      roots.push({ tex: 'x = ' + cplx(re, im), val: null, mult: 2, real: false });
    }
  } else if (rest.length > 3) {
    const nr = numericRoots(rest.map(qNum));
    steps.push({ title: 'Numeric Method', math: m$('\\deg = ' + deg(rest) + ' \\; \\Rightarrow \\; \\text{iterate to all roots}'), note: 'No rational root is left, so the remaining factor of degree ' + deg(rest) + ' is solved numerically (Durand–Kerner).' });
    const used = new Array(nr.length).fill(false);
    nr.forEach((z, i) => {
      if (used[i]) return; used[i] = true;
      if (Math.abs(z.im) < 1e-7) { roots.push({ tex: 'x \\approx ' + decimalText(z.re), val: z.re, mult: 1, real: true }); return; }
      const j = nr.findIndex((w, idx) => !used[idx] && Math.abs(w.re - z.re) < 1e-6 && Math.abs(w.im + z.im) < 1e-6);
      if (j >= 0) used[j] = true;
      roots.push({ tex: 'x \\approx ' + cplx(z.re, z.im), val: null, mult: j >= 0 ? 2 : 1, real: false });
    });
  }
  const realCount = roots.filter((r) => r.real).reduce((a, r) => a + r.mult, 0);
  const complexCount = roots.filter((r) => !r.real).reduce((a, r) => a + r.mult, 0);
  roots.sort((a, b) => (a.real === b.real ? (a.val ?? 0) - (b.val ?? 0) : a.real ? -1 : 1));
  const primary = roots.map((r) => r.tex + (r.mult > 1 && r.real ? '\\;(\\times ' + r.mult + ')' : '')).join(',\\; ');
  steps.push({ title: 'List the zeros', math: m$(primary), note: realCount + ' real and ' + complexCount + ' complex roots, counted with multiplicity: ' + (realCount + complexCount) + ' in all, the degree.' });
  return {
    result: { primaryLabel: 'Zeros', primaryMath: primary, meta: [{ label: 'Real roots', value: String(realCount) }, { label: 'Complex roots', value: String(complexCount) }] },
    steps, copy: primary, graph: graphOf(p, roots.filter((r) => r.real).map((r) => r.val)),
  };
}

/* ===== entry point ======================================================= */

const MULTI = { add: opAdd, subtract: opSubtract, multiply: opMultiply };
const DUAL = { long_div: opLongDiv, synth_div: opSynthDiv };

export function computeOperation(opKey, polyStrings) {
  try {
    const strings = (polyStrings || []).map((s) => String(s));
    const polys = strings.map((s, i) => {
      try { return parsePoly(s); } catch (e) { throw new Error('Polynomial ' + (i + 1) + ': ' + e.message); }
    });
    if (MULTI[opKey]) {
      if (polys.length < 2) return { ok: false, message: 'Enter at least two polynomials.' };
      return { ok: true, ...MULTI[opKey](polys) };
    }
    if (DUAL[opKey]) {
      if (polys.length < 2) return { ok: false, message: 'Enter the dividend and the divisor.' };
      if (!polys[1].length) return { ok: false, message: 'The divisor cannot be zero.' };
      return { ok: true, ...DUAL[opKey](polys) };
    }
    if (opKey === 'simplify') return { ok: true, ...opSimplify(polys, strings[0]) };
    if (opKey === 'factor') return { ok: true, ...opFactor(polys) };
    if (opKey === 'zeros') return { ok: true, ...opZeros(polys) };
    return { ok: false, message: 'Unknown operation.' };
  } catch (e) {
    return { ok: false, message: e.message || 'Could not compute this.' };
  }
}

export { parsePoly, polyTex };
