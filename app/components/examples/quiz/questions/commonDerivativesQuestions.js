// =========================================================
//   commonDerivativeQuestions  (v2 — full 30-entry list)
//   On-the-spot generator for common-derivatives quiz.
//   Returns { question, options, correct } where every field
//   is a string containing inline LaTeX wrapped in $...$.
//
//   Three question types, rotated at random:
//     1. findDeriv   - "What is d/dx[f(x)]?"
//     2. findFn      - "Which function has derivative g(x)?"
//     3. whichWrong  - "Which derivative rule is WRONG?"
// =========================================================

const SAFETY_LIMIT = 50;

const DERIVATIVES = [
  // Polynomial
  { id: 0,  fx: 'c',                dfx: '0' },
  { id: 1,  fx: 'x',                dfx: '1' },
  { id: 2,  fx: 'x^n',              dfx: 'nx^{n-1}' },
  { id: 3,  fx: '\\frac{1}{x}',     dfx: '-\\frac{1}{x^2}' },
  { id: 4,  fx: '\\sqrt{x}',        dfx: '\\frac{1}{2\\sqrt{x}}' },
  // Exp / log
  { id: 5,  fx: 'e^x',              dfx: 'e^x' },
  { id: 6,  fx: 'a^x',              dfx: 'a^x \\ln(a)' },
  { id: 7,  fx: '\\ln(x)',          dfx: '\\frac{1}{x}' },
  { id: 8,  fx: '\\log_a(x)',       dfx: '\\frac{1}{x \\ln(a)}' },
  // Trig
  { id: 9,  fx: '\\sin(x)',         dfx: '\\cos(x)' },
  { id: 10, fx: '\\cos(x)',         dfx: '-\\sin(x)' },
  { id: 11, fx: '\\tan(x)',         dfx: '\\sec^2(x)' },
  { id: 12, fx: '\\cot(x)',         dfx: '-\\csc^2(x)' },
  { id: 13, fx: '\\sec(x)',         dfx: '\\sec(x)\\tan(x)' },
  { id: 14, fx: '\\csc(x)',         dfx: '-\\csc(x)\\cot(x)' },
  // Inverse trig
  { id: 15, fx: '\\arcsin(x)',      dfx: '\\frac{1}{\\sqrt{1-x^2}}' },
  { id: 16, fx: '\\arccos(x)',      dfx: '-\\frac{1}{\\sqrt{1-x^2}}' },
  { id: 17, fx: '\\arctan(x)',      dfx: '\\frac{1}{1+x^2}' },
  { id: 18, fx: '\\operatorname{arccot}(x)',  dfx: '-\\frac{1}{1+x^2}' },
  { id: 19, fx: '\\operatorname{arcsec}(x)',  dfx: '\\frac{1}{|x|\\sqrt{x^2-1}}' },
  { id: 20, fx: '\\operatorname{arccsc}(x)',  dfx: '-\\frac{1}{|x|\\sqrt{x^2-1}}' },
  // Hyperbolic
  { id: 21, fx: '\\sinh(x)',        dfx: '\\cosh(x)' },
  { id: 22, fx: '\\cosh(x)',        dfx: '\\sinh(x)' },
  { id: 23, fx: '\\tanh(x)',        dfx: '\\operatorname{sech}^2(x)' },
  { id: 24, fx: '\\coth(x)',        dfx: '-\\operatorname{csch}^2(x)' },
  { id: 25, fx: '\\operatorname{sech}(x)',   dfx: '-\\operatorname{sech}(x)\\tanh(x)' },
  { id: 26, fx: '\\operatorname{csch}(x)',   dfx: '-\\operatorname{csch}(x)\\coth(x)' },
  // Inverse hyperbolic
  { id: 27, fx: '\\operatorname{arcsinh}(x)', dfx: '\\frac{1}{\\sqrt{x^2+1}}' },
  { id: 28, fx: '\\operatorname{arccosh}(x)', dfx: '\\frac{1}{\\sqrt{x^2-1}}' },
  { id: 29, fx: '\\operatorname{arctanh}(x)', dfx: '\\frac{1}{1-x^2}' },
];

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
function pickRandom(arr) {
  return arr[randInt(0, arr.length - 1)];
}
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------
//   Type 1: What is d/dx[f(x)]?
// ---------------------------------------------------------
function genFindDeriv() {
  const d = pickRandom(DERIVATIVES);
  const wrongs = [];
  const seen = new Set([d.dfx]);
  let safety = 0;
  while (wrongs.length < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const cand = pickRandom(DERIVATIVES).dfx;
    if (!seen.has(cand)) {
      wrongs.push(cand);
      seen.add(cand);
    }
  }
  const correctOpt = `$${d.dfx}$`;
  const options = shuffleArray([correctOpt, ...wrongs.map((w) => `$${w}$`)]);
  return {
    question: `What is $\\frac{d}{dx}\\!\\left[${d.fx}\\right]$ ?`,
    options,
    correct: correctOpt,
  };
}

// ---------------------------------------------------------
//   Type 2: Which function has derivative g(x)?
// ---------------------------------------------------------
function genFindFn() {
  const d = pickRandom(DERIVATIVES);
  const wrongs = [];
  const seen = new Set([d.fx]);
  let safety = 0;
  while (wrongs.length < 3 && safety < SAFETY_LIMIT) {
    safety++;
    const cand = pickRandom(DERIVATIVES).fx;
    if (!seen.has(cand)) {
      wrongs.push(cand);
      seen.add(cand);
    }
  }
  const correctOpt = `$${d.fx}$`;
  const options = shuffleArray([correctOpt, ...wrongs.map((w) => `$${w}$`)]);
  return {
    question: `Which function has derivative $${d.dfx}$ ?`,
    options,
    correct: correctOpt,
  };
}

// ---------------------------------------------------------
//   Type 3: Which derivative rule is WRONG?
// ---------------------------------------------------------
function genWhichWrong() {
  const shuffled = shuffleArray(DERIVATIVES);
  const correctOnes = shuffled.slice(0, 3);
  const wrongBase = shuffled[3];
  let corrupted = wrongBase;
  let safety = 0;
  while (safety < SAFETY_LIMIT) {
    safety++;
    const other = pickRandom(DERIVATIVES);
    if (other.dfx !== wrongBase.dfx) {
      corrupted = { fx: wrongBase.fx, dfx: other.dfx };
      break;
    }
  }
  const wrongOpt = `$\\frac{d}{dx}\\!\\left[${corrupted.fx}\\right] = ${corrupted.dfx}$`;
  const correctOpts = correctOnes.map(
    (d) => `$\\frac{d}{dx}\\!\\left[${d.fx}\\right] = ${d.dfx}$`
  );
  const options = shuffleArray([wrongOpt, ...correctOpts]);
  return {
    question: 'Which of these derivative rules is WRONG?',
    options,
    correct: wrongOpt,
  };
}

// ---------------------------------------------------------
//   Default export
// ---------------------------------------------------------
export default function generateDerivativeQuestion() {
  const t = randInt(0, 2);
  if (t === 0) return genFindDeriv();
  if (t === 1) return genFindFn();
  return genWhichWrong();
}