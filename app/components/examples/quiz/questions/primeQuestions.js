// =========================================================
//   primeQuestions
//   On-the-spot question generator for prime numbers.
//   Returns { question, options, correct } compatible with
//   QuizWidget's `generator` prop.
//
//   Three question types, rotated at random:
//     1. isPrime       - "Is N prime?"             (yes / no)
//     2. nextPrime     - "Next prime after N?"     (multiple choice)
//     3. whichNotPrime - "Which of these is NOT prime?"  (multiple choice)
// =========================================================

const RANGE_MAX = 500;
const SAFETY_LIMIT = 50;

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function isPrime(n) {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
}

// Precompute primes up to RANGE_MAX
const PRIMES = (() => {
  const out = [];
  for (let n = 2; n <= RANGE_MAX; n++) if (isPrime(n)) out.push(n);
  return out;
})();

function randomPrime(min, max) {
  const candidates = PRIMES.filter((p) => p >= min && p <= max);
  if (candidates.length === 0) return PRIMES[randInt(0, PRIMES.length - 1)];
  return candidates[randInt(0, candidates.length - 1)];
}

function randomComposite(min, max) {
  let safety = 0;
  while (safety < SAFETY_LIMIT) {
    safety++;
    const n = randInt(min, max);
    if (n > 1 && !isPrime(n)) return n;
  }
  // Fallback: a known composite
  return 4;
}

// ---------------------------------------------------------
//   Type 1: Is N prime?  (yes / no)
// ---------------------------------------------------------
function genIsPrimeQuestion() {
  const sayYes = Math.random() < 0.5;
  const n = sayYes
    ? randomPrime(20, RANGE_MAX)
    : randomComposite(20, RANGE_MAX);
  return {
    question: `Is ${n} prime?`,
    options: ['Yes', 'No'],
    correct: sayYes ? 'Yes' : 'No',
  };
}

// ---------------------------------------------------------
//   Type 2: Next prime after N?  (multiple choice)
// ---------------------------------------------------------
function genNextPrimeQuestion() {
  const n = randInt(10, 250);
  let next = n + 1;
  while (!isPrime(next)) next++;
  const wrongs = new Set();
  let safety = 0;
  while (wrongs.size < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const offset = randInt(-4, 4);
    const w = next + offset;
    if (w > n && w !== next && w > 1) wrongs.add(w);
  }
  const options = [...wrongs, next].sort((a, b) => a - b);
  return {
    question: `What is the smallest prime greater than ${n}?`,
    options: options.map(String),
    correct: String(next),
  };
}

// ---------------------------------------------------------
//   Type 3: Which is NOT prime?  (multiple choice)
// ---------------------------------------------------------
function genWhichNotPrimeQuestion() {
  let safety = 0;
  while (safety < SAFETY_LIMIT) {
    safety++;
    const center = randInt(30, RANGE_MAX - 30);
    // Gather primes near center
    const nearbyPrimes = PRIMES.filter((p) => Math.abs(p - center) <= 25);
    if (nearbyPrimes.length < 3) continue;

    // Pick 3 distinct primes from nearby
    const pool = [...nearbyPrimes];
    const picked = [];
    for (let i = 0; i < 3 && pool.length > 0; i++) {
      const idx = randInt(0, pool.length - 1);
      picked.push(pool[idx]);
      pool.splice(idx, 1);
    }

    // Find a composite near center, not already picked
    let composite = null;
    for (let attempt = 0; attempt < 30; attempt++) {
      const c = center + randInt(-20, 20);
      if (c > 4 && !isPrime(c) && !picked.includes(c)) {
        composite = c;
        break;
      }
    }
    if (composite === null) continue;

    const options = [...picked, composite].sort((a, b) => a - b);
    return {
      question: 'Which of these is NOT prime?',
      options: options.map(String),
      correct: String(composite),
    };
  }
  // Fallback: a fixed hard one
  return {
    question: 'Which of these is NOT prime?',
    options: ['89', '91', '97', '101'],
    correct: '91',
  };
}

// ---------------------------------------------------------
//   Default export: dispatch a random question type
// ---------------------------------------------------------
export default function generatePrimeQuestion() {
  const t = randInt(0, 2);
  if (t === 0) return genIsPrimeQuestion();
  if (t === 1) return genNextPrimeQuestion();
  return genWhichNotPrimeQuestion();
}