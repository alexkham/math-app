// =========================================================
//   multiplicationQuestions
//   On-the-spot question generator for multiplication tables.
//   Returns { question, options, correct } compatible with
//   QuizWidget's `generator` prop.
//
//   Three question types, rotated at random:
//     1. product        - "What is A × B?"
//     2. missingFactor  - "? × N = product"  or  "N × ? = product"
//     3. notMultiple    - "Which of these is NOT a multiple of N?"
// =========================================================

const SAFETY_LIMIT = 50;

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// ---------------------------------------------------------
//   Type 1: What is A × B?
// ---------------------------------------------------------
function genProductQuestion() {
  const a = randInt(2, 12);
  const b = randInt(2, 12);
  const correct = a * b;
  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const sign = Math.random() < 0.5 ? 1 : -1;
    const w = correct + sign * randInt(1, 10);
    if (w > 0 && w !== correct) wrongs.add(w);
  }
  const options = [...wrongs, correct].sort((x, y) => x - y);
  return {
    question: `What is ${a} &times; ${b}?`,
    options: options.map(String),
    correct: String(correct),
  };
}

// ---------------------------------------------------------
//   Type 2: Missing factor
// ---------------------------------------------------------
function genMissingFactorQuestion() {
  const a = randInt(2, 12);
  const b = randInt(2, 12);
  const product = a * b;
  const hideA = Math.random() < 0.5;
  const known = hideA ? b : a;
  const missing = hideA ? a : b;
  const q = hideA
    ? `? &times; ${known} = ${product}`
    : `${known} &times; ? = ${product}`;

  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const sign = Math.random() < 0.5 ? 1 : -1;
    const w = missing + sign * randInt(1, 4);
    if (w > 0 && w !== missing) wrongs.add(w);
  }
  const options = [...wrongs, missing].sort((x, y) => x - y);
  return {
    question: q,
    options: options.map(String),
    correct: String(missing),
  };
}

// ---------------------------------------------------------
//   Type 3: Which is NOT a multiple of N?
// ---------------------------------------------------------
function genNotMultipleQuestion() {
  const n = randInt(3, 9);

  // Build a pool of multiples of n in a useful range
  const multiples = [];
  for (let k = 2; k <= 12; k++) {
    const v = n * k;
    if (v >= 10) multiples.push(v);
  }

  // Pick 3 distinct multiples
  const pool = [...multiples];
  const picked = [];
  while (picked.length < 3 && pool.length > 0) {
    const idx = randInt(0, pool.length - 1);
    picked.push(pool[idx]);
    pool.splice(idx, 1);
  }
  if (picked.length < 3) {
    // Fallback: hard-coded
    return {
      question: `Which of these is NOT a multiple of 7?`,
      options: ['14', '21', '25', '28'],
      correct: '25',
    };
  }

  // Find a non-multiple of n near the picked values
  const center = picked[Math.floor(picked.length / 2)];
  let nonMult = null;
  for (let attempt = 0; attempt < 30; attempt++) {
    const c = center + randInt(-8, 8);
    if (c > 1 && c % n !== 0 && !picked.includes(c)) {
      nonMult = c;
      break;
    }
  }
  if (nonMult === null) nonMult = center + 1;

  const options = [...picked, nonMult].sort((x, y) => x - y);
  return {
    question: `Which of these is NOT a multiple of ${n}?`,
    options: options.map(String),
    correct: String(nonMult),
  };
}

// ---------------------------------------------------------
//   Default export: dispatch a random question type
// ---------------------------------------------------------
export default function generateMultiplicationQuestion() {
  const t = randInt(0, 2);
  if (t === 0) return genProductQuestion();
  if (t === 1) return genMissingFactorQuestion();
  return genNotMultipleQuestion();
}