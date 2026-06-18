// =========================================================
//   pythagoreanTripleQuestions
//   On-the-spot question generator for Pythagorean triples.
//   Returns { question, options, correct } compatible with
//   QuizWidget's `generator` prop.
//
//   Three question types, rotated at random:
//     1. isTriple        - "Is (a, b, c) a Pythagorean triple?"  (yes / no)
//     2. completeTriple  - "Complete the triple: (?, b, c)"
//     3. isPrimitive     - "Is (a, b, c) a primitive triple?"   (yes / no)
// =========================================================

const TABLE_MAX_C = 100;
const SAFETY_LIMIT = 50;

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

// ---------- Precomputed: triples (Euclid + multiples, c <= 100) ----------
const TRIPLES = (() => {
  const list = [];
  const seen = new Set();
  for (let m = 2; m <= 20; m++) {
    for (let n = 1; n < m; n++) {
      if ((m - n) % 2 === 0) continue;
      if (gcd(m, n) !== 1) continue;
      const pa = m * m - n * n;
      const pb = 2 * m * n;
      const pc = m * m + n * n;
      const aLow = Math.min(pa, pb);
      const aHigh = Math.max(pa, pb);
      for (let k = 1; k * pc <= TABLE_MAX_C; k++) {
        const a = aLow * k;
        const b = aHigh * k;
        const c = pc * k;
        const id = `${a}-${b}-${c}`;
        if (seen.has(id)) continue;
        seen.add(id);
        list.push({ id, a, b, c, primitive: k === 1, m, n, k });
      }
    }
  }
  list.sort((x, y) => x.c - y.c || x.a - y.a);
  return list;
})();

function randomTriple() {
  return TRIPLES[randInt(0, TRIPLES.length - 1)];
}

// ---------------------------------------------------------
//   Type 1: Is (a, b, c) a Pythagorean triple?
// ---------------------------------------------------------
function genIsTripleQuestion() {
  const sayYes = Math.random() < 0.5;
  if (sayYes) {
    const tr = randomTriple();
    return {
      question: `Is (${tr.a}, ${tr.b}, ${tr.c}) a Pythagorean triple?`,
      options: ['Yes', 'No'],
      correct: 'Yes',
    };
  }
  // Build a near-miss: keep two values, perturb the third so a²+b² ≠ c².
  const tr = randomTriple();
  let cFake;
  let safety = 0;
  do {
    const sign = Math.random() < 0.5 ? 1 : -1;
    cFake = tr.c + sign * randInt(1, 4);
    safety++;
  } while (
    safety < SAFETY_LIMIT &&
    (cFake <= Math.max(tr.a, tr.b) || tr.a * tr.a + tr.b * tr.b === cFake * cFake)
  );
  if (tr.a * tr.a + tr.b * tr.b === cFake * cFake) cFake = tr.c + 2;
  return {
    question: `Is (${tr.a}, ${tr.b}, ${cFake}) a Pythagorean triple?`,
    options: ['Yes', 'No'],
    correct: 'No',
  };
}

// ---------------------------------------------------------
//   Type 2: Complete the triple
// ---------------------------------------------------------
function genCompleteTripleQuestion() {
  const tr = randomTriple();
  const hideIdx = randInt(0, 2);
  const labels = ['a', 'b', 'c'];
  const values = [tr.a, tr.b, tr.c];
  const correct = values[hideIdx];
  const shown = values.map((v, i) => i === hideIdx ? '?' : v).join(', ');
  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const sign = Math.random() < 0.5 ? 1 : -1;
    const w = correct + sign * randInt(1, 6);
    if (w > 0 && w !== correct) wrongs.add(w);
  }
  const options = [...wrongs, correct].sort(() => Math.random() - 0.5);
  return {
    question: `Complete the triple: (${shown}) &mdash; what is ${labels[hideIdx]}?`,
    options: options.map(String),
    correct: String(correct),
  };
}

// ---------------------------------------------------------
//   Type 3: Is (a, b, c) a primitive triple?
// ---------------------------------------------------------
function genIsPrimitiveQuestion() {
  const tr = randomTriple();
  return {
    question: `Is (${tr.a}, ${tr.b}, ${tr.c}) a primitive triple?`,
    options: ['Yes', 'No'],
    correct: tr.primitive ? 'Yes' : 'No',
  };
}

// ---------------------------------------------------------
//   Default export: dispatch a random question type
// ---------------------------------------------------------
export default function generatePythagoreanTripleQuestion() {
  const t = randInt(0, 2);
  if (t === 0) return genIsTripleQuestion();
  if (t === 1) return genCompleteTripleQuestion();
  return genIsPrimitiveQuestion();
}