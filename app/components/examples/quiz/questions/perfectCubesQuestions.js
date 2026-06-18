// =========================================================
//   perfectCubeQuestions
//   On-the-spot question generator for perfect cubes.
//   Returns { question, options, correct } compatible with
//   QuizWidget's `generator` prop.
//
//   Three question types, rotated at random:
//     1. rootOfCube    - "What is ∛N?"  (N is a perfect cube)
//     2. isPerfectCube - "Is N a perfect cube?"  (yes / no)
//     3. cubeOfRoot    - "What is N³?"
// =========================================================

// Cubes grow fast — keep ranges tighter than for squares.
const RANGE = {
  rootQ:   { min: 3, max: 20 },  // root for "What is ∛(root³)?"
  isCubeQ: { min: 3, max: 25 },  // root used to construct yes/no candidate
  cubeQ:   { min: 3, max: 15 },  // root for "What is root³?"
};

const NEAR_MISS_OFFSET = 8;            // ± offset when building a non-cube distractor
const CUBE_DISTRACTOR_RANGE = 500;     // ± offset for wrong cubes
const SAFETY_LIMIT = 50;

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function isPerfectCube(n) {
  if (n < 1) return false;
  const r = Math.round(Math.cbrt(n));
  return r * r * r === n;
}

// ---------------------------------------------------------
//   Type 1: What is ∛N?  (N is a perfect cube)
// ---------------------------------------------------------
function genRootQuestion() {
  const root = randInt(RANGE.rootQ.min, RANGE.rootQ.max);
  const cube = root * root * root;
  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const w = root + randInt(-3, 3);
    if (w !== root && w > 0) wrongs.add(w);
  }
  const options = [...wrongs, root].sort(() => Math.random() - 0.5);
  return {
    question: `What is &#8731;${cube.toLocaleString()}?`,
    options: options.map(String),
    correct: String(root),
  };
}

// ---------------------------------------------------------
//   Type 2: Is N a perfect cube?  (yes / no)
// ---------------------------------------------------------
function genIsCubeQuestion() {
  const sayYes = Math.random() < 0.5;
  const root = randInt(RANGE.isCubeQ.min, RANGE.isCubeQ.max);
  let n;
  let correct;

  if (sayYes) {
    n = root * root * root;
    correct = 'Yes';
  } else {
    // Near-miss that is NOT itself a perfect cube.
    let candidate;
    let safety = 0;
    do {
      const sign = Math.random() < 0.5 ? 1 : -1;
      const offset = randInt(1, NEAR_MISS_OFFSET) * sign;
      candidate = root * root * root + offset;
      safety++;
    } while ((candidate <= 1 || isPerfectCube(candidate)) && safety < SAFETY_LIMIT);

    // Fallback if safety limit hit
    if (isPerfectCube(candidate) || candidate <= 1) {
      candidate = root * root * root + 2;
    }
    n = candidate;
    correct = 'No';
  }

  return {
    question: `Is ${n.toLocaleString()} a perfect cube?`,
    options: ['Yes', 'No'],
    correct,
  };
}

// ---------------------------------------------------------
//   Type 3: What is N³?
// ---------------------------------------------------------
function genCubeQuestion() {
  const root = randInt(RANGE.cubeQ.min, RANGE.cubeQ.max);
  const cube = root * root * root;
  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const offset = randInt(-CUBE_DISTRACTOR_RANGE, CUBE_DISTRACTOR_RANGE);
    const w = cube + offset;
    if (w !== cube && w > 0) wrongs.add(w);
  }
  const options = [...wrongs, cube].sort(() => Math.random() - 0.5);
  return {
    question: `What is ${root}&sup3;?`,
    options: options.map((v) => v.toLocaleString()),
    correct: cube.toLocaleString(),
  };
}

// ---------------------------------------------------------
//   Default export: dispatch a random question type
// ---------------------------------------------------------
export default function generatePerfectCubeQuestion() {
  const t = randInt(0, 2);
  if (t === 0) return genRootQuestion();
  if (t === 1) return genIsCubeQuestion();
  return genCubeQuestion();
}