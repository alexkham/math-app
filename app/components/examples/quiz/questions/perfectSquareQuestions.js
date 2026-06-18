// =========================================================
//   perfectSquaresQuestions
//   On-the-spot question generator for perfect squares.
//   Returns { question, options, correct } compatible with
//   QuizWidget's `generator` prop.
//
//   Three question types, rotated at random:
//     1. rootOfSquare   - "What is √N?"  (N is a perfect square)
//     2. isPerfectSquare - "Is N a perfect square?"  (yes / no)
//     3. squareOfRoot   - "What is N²?"
// =========================================================

const RANGE = {
  rootQ:   { min: 5, max: 49 },  // root for "What is √(root²)?"
  isSqQ:   { min: 3, max: 49 },  // root used to construct yes/no candidate
  squareQ: { min: 5, max: 29 },  // root for "What is root²?"
};

const NEAR_MISS_OFFSET = 5;   // ± offset when building a non-square distractor
const SQUARE_DISTRACTOR_RANGE = 100; // ± offset for wrong squares
const SAFETY_LIMIT = 50;

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function isPerfectSquare(n) {
  if (n < 1) return false;
  const r = Math.sqrt(n);
  return Number.isInteger(r);
}

// ---------------------------------------------------------
//   Type 1: What is √N?  (N is a perfect square)
// ---------------------------------------------------------
function genRootQuestion() {
  const root = randInt(RANGE.rootQ.min, RANGE.rootQ.max);
  const square = root * root;
  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const w = root + randInt(-3, 3);
    if (w !== root && w > 0) wrongs.add(w);
  }
  const options = [...wrongs, root].sort(() => Math.random() - 0.5);
  return {
    question: `What is &#8730;${square}?`,
    options: options.map(String),
    correct: String(root),
  };
}

// ---------------------------------------------------------
//   Type 2: Is N a perfect square?  (yes / no)
// ---------------------------------------------------------
function genIsSquareQuestion() {
  const sayYes = Math.random() < 0.5;
  const root = randInt(RANGE.isSqQ.min, RANGE.isSqQ.max);
  let n;
  let correct;

  if (sayYes) {
    n = root * root;
    correct = 'Yes';
  } else {
    // Near-miss that is NOT itself a perfect square.
    let candidate;
    let safety = 0;
    do {
      const sign = Math.random() < 0.5 ? 1 : -1;
      const offset = randInt(1, NEAR_MISS_OFFSET) * sign;
      candidate = root * root + offset;
      safety++;
    } while ((candidate <= 1 || isPerfectSquare(candidate)) && safety < SAFETY_LIMIT);

    // Fallback if safety limit hit
    if (isPerfectSquare(candidate) || candidate <= 1) {
      candidate = root * root + 2;
    }
    n = candidate;
    correct = 'No';
  }

  return {
    question: `Is ${n.toLocaleString()} a perfect square?`,
    options: ['Yes', 'No'],
    correct,
  };
}

// ---------------------------------------------------------
//   Type 3: What is N²?
// ---------------------------------------------------------
function genSquareQuestion() {
  const root = randInt(RANGE.squareQ.min, RANGE.squareQ.max);
  const square = root * root;
  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const offset = randInt(-SQUARE_DISTRACTOR_RANGE, SQUARE_DISTRACTOR_RANGE);
    const w = square + offset;
    if (w !== square && w > 0) wrongs.add(w);
  }
  const options = [...wrongs, square].sort(() => Math.random() - 0.5);
  return {
    question: `What is ${root}&sup2;?`,
    options: options.map(String),
    correct: String(square),
  };
}

// ---------------------------------------------------------
//   Default export: dispatch a random question type
// ---------------------------------------------------------
export default function generatePerfectSquareQuestion() {
  const t = randInt(0, 2);
  if (t === 0) return genRootQuestion();
  if (t === 1) return genIsSquareQuestion();
  return genSquareQuestion();
}