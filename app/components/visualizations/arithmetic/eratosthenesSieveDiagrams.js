// Frozen-state SVGs for the Sieve of Eratosthenes tool (Line 1 anchor mesh).
// Replicates app/components/visualizations/arithmetic/EratosthenesSieve.jsx:
// same 10x10 grid of 1-100, same sieve logic (multiples crossed from p², a prime
// appended to an already-crossed number's list exactly as the component does),
// same color system - primeColors {2:#3b82f6, 3:#22c55e, 5:#a855f7, 7:#f97316},
// single-prime composites tinted color+'30' with color+'60' border, multi-prime
// composites striped 135deg (SVG <pattern> stands in for the CSS repeating
// gradient), cell 1 fixed gray, primes solid with white text (#3b82f6 default
// for primes past 7). Each freeze point is the END of one prime's sweep - the
// clearest teaching frame. Pattern/gradient ids are state-scoped.

const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif";

const PRIME_COLORS = { 2: '#3b82f6', 3: '#22c55e', 5: '#a855f7', 7: '#f97316' };
const MAX = 100;

const CELL = 36, GAP = 6, COLS = 10;
const GRID_W = COLS * CELL + (COLS - 1) * GAP;   // 414
const PAD = 16;
const CARD_W = GRID_W + 2 * PAD;                  // 446
const W = CARD_W + 14;                            // 460
const CARD_X = (W - CARD_W) / 2, CARD_Y = 7;
const CARD_H = GRID_W + 2 * PAD;                  // square grid
const H = CARD_H + 14;

// The component's sieve, run to the end of `upto`'s sweep (0 = idle, 'done' = finished)
function runSieve(upto) {
  const state = new Array(MAX + 1).fill(0);
  state[1] = -1;
  for (const p of [2, 3, 5, 7]) {
    if (upto !== 'done' && (upto === 0 || p > upto)) break;
    state[p] = 'prime';
    for (let m = p * p; m <= MAX; m += p) {
      if (state[m] === 0) state[m] = [p];
      else if (Array.isArray(state[m]) && !state[m].includes(p)) state[m].push(p);
    }
  }
  if (upto === 'done') {
    for (let i = 2; i <= MAX; i++) if (state[i] === 0) state[i] = 'prime';
  }
  return state;
}

function freeze(key, upto) {
  const state = runSieve(upto);
  const current = typeof upto === 'number' && upto > 0 ? upto : null;

  // Collect the multi-prime combos present so each gets one striped <pattern>
  const combos = new Map();
  for (let n = 2; n <= MAX; n++) {
    const s = state[n];
    if (Array.isArray(s) && s.length > 1) combos.set(s.join('-'), s);
  }
  let defs = '<defs>';
  for (const [id, primes] of combos) {
    const band = 6;
    defs += `<pattern id="sv-${key}-p${id}" width="${primes.length * band}" height="8" ` +
      `patternUnits="userSpaceOnUse" patternTransform="rotate(135)">`;
    primes.forEach((p, i) => {
      defs += `<rect x="${i * band}" y="0" width="${band}" height="8" fill="${PRIME_COLORS[p]}40"/>`;
    });
    defs += `</pattern>`;
  }
  defs += '</defs>';

  let cells = '';
  for (let n = 1; n <= MAX; n++) {
    const col = (n - 1) % COLS, row = Math.floor((n - 1) / COLS);
    const x = CARD_X + PAD + col * (CELL + GAP);
    const y = CARD_Y + PAD + row * (CELL + GAP);
    const s = state[n];

    let fill = '#f8fafc', stroke = 'none', text = '#64748b', ring = '';
    if (n === 1) {
      fill = '#e2e8f0'; stroke = '#cbd5e1'; text = '#94a3b8';
    } else if (s === 'prime') {
      const c = PRIME_COLORS[n] || '#3b82f6';
      fill = c; text = '#fff';
      if (n === current) ring = `<rect x="${x - 2}" y="${y - 2}" width="${CELL + 4}" height="${CELL + 4}" rx="8" fill="none" stroke="${c}60" stroke-width="3"/>`;
    } else if (Array.isArray(s)) {
      const c = PRIME_COLORS[s[0]];
      text = c; stroke = `${c}60`;
      fill = s.length === 1 ? `${c}30` : `url(#sv-${key}-p${s.join('-')})`;
    }

    cells += ring +
      `<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="6" fill="${fill}"` +
      (stroke !== 'none' ? ` stroke="${stroke}" stroke-width="1"` : '') + `/>` +
      `<text x="${x + CELL / 2}" y="${y + CELL / 2 + 4.5}" font-family="${FONT}" font-size="13" ` +
      `font-weight="600" fill="${text}" text-anchor="middle">${n}</text>`;
  }

  const label = upto === 0 ? 'initial grid'
    : upto === 'done' ? 'sieve complete'
    : `after the sweep for ${upto}`;
  return (
    `<svg viewBox="0 0 ${W} ${H}" width="460" xmlns="http://www.w3.org/2000/svg" role="img" ` +
    `aria-label="Sieve of Eratosthenes, ${label}">` +
    defs +
    `<rect x="0" y="0" width="${W}" height="${H}" fill="#f0f7ff"/>` +
    `<rect x="${CARD_X}" y="${CARD_Y}" width="${CARD_W}" height="${CARD_H}" rx="12" fill="#fff" stroke="#e2e8f0" stroke-width="1"/>` +
    cells +
    `</svg>`
  );
}

const eratosthenesSieveDiagrams = {
  idle: freeze('idle', 0),        // untouched grid, only 1 grayed out
  sieve2: freeze('sieve2', 2),    // after 2's sweep: half the grid blue-tinted
  sieve3: freeze('sieve3', 3),    // after 3's sweep: first striped overlaps
  sieve5: freeze('sieve5', 5),    // after 5's sweep: only six new crossings
  sieve7: freeze('sieve7', 7),    // after 7's sweep: 49, 77, 91 - the last pass
  done: freeze('done', 'done'),   // 25 solid primes, 74 tinted composites
};

export default eratosthenesSieveDiagrams;
