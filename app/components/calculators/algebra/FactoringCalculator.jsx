
// import React, { useState } from 'react';
// import styles from './FactoringCalculator.module.css';

// // Helper function to find all factors of a number
// function findAllFactors(num) {
//   const factors = new Set();
//   const absNum = Math.abs(num);
  
//   for (let i = 1; i <= Math.sqrt(absNum); i++) {
//     if (absNum % i === 0) {
//       if (num < 0) {
//         factors.add(-i);
//         factors.add(i);
//         factors.add(-(absNum / i));
//         factors.add(absNum / i);
//       } else {
//         factors.add(i);
//         factors.add(absNum / i);
//       }
//     }
//   }
//   return Array.from(factors).sort((a, b) => a - b);
// }

// // Updated helper function to create factor pairs
// function createFactorPairs(number, factors) {
//   const pairs = [];
//   const workingFactors = [...factors];
  
//   while (workingFactors.length > 0) {
//     const firstFactor = workingFactors.shift();
//     const secondFactor = number / firstFactor;
    
//     if (workingFactors.includes(secondFactor)) {
//       pairs.push(`${firstFactor} × ${secondFactor}`);
//       workingFactors.splice(workingFactors.indexOf(secondFactor), 1);
//     }
//   }
  
//   return pairs;
// }

// // Helper function to find prime factors of a number
// function findPrimeFactors(num) {
//   if (num < 0) {
//     return 'Cannot find prime factors of negative numbers';
//   }
//   if (num === 1) {
//     return [1];
//   }

//   const factors = [];
//   let n = Math.abs(num);
//   let i = 2;
  
//   while (i * i <= n) {
//     if (n % i === 0) {
//       factors.push(i);
//       n /= i;
//     } else {
//       i += 1;
//     }
//   }
//   if (n > 1) {
//     factors.push(n);
//   }
//   return factors;
// }

// const FactoringCalculator = () => {
//   const [number, setNumber] = useState('');
//   const [factorType, setFactorType] = useState('prime');
//   const [factors, setFactors] = useState([]);
//   const [factorPairs, setFactorPairs] = useState([]);
//   const [error, setError] = useState('');

//   const handleCalculate = () => {
//     const num = parseInt(number);
//     if (!isNaN(num)) {
//       if (factorType === 'prime') {
//         const primeFactors = findPrimeFactors(num);
//         if (typeof primeFactors === 'string') {
//           setError(primeFactors);
//           setFactors([]);
//         } else {
//           setFactors(primeFactors);
//           setError('');
//         }
//         setFactorPairs([]);
//       } else {
//         const allFactors = findAllFactors(num);
//         setFactors(allFactors);
//         const pairs = createFactorPairs(num, allFactors);
//         setFactorPairs(pairs);
//         setError('');
//       }
//     } else {
//       setFactors([]);
//       setFactorPairs([]);
//       setError('Please enter a valid number');
//     }
//   };

//   const handleFactorTypeChange = (event) => {
//     setFactorType(event.target.value);
//     setFactors([]);
//     setFactorPairs([]);
//     setError('');
//   };

//   const handleReset = () => {
//     setNumber('');
//     setFactorType('prime');
//     setFactors([]);
//     setFactorPairs([]);
//     setError('');
//   };

//   return (
//     <div className={styles.container}>
//       <p className={styles.prompt}>Enter a number to find its factors:</p>
//       <div className={styles.inputContainer}>
//         <input
//           type="number"
//           className={styles.input}
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//       </div>
//       <div className={styles.factorTypeContainer}>
//         <label className={styles.label}>Factoring Type:</label>
//         <div className={styles.radioContainer}>
//           <input
//             type="radio"
//             id="prime"
//             name="factor-type"
//             value="prime"
//             checked={factorType === 'prime'}
//             onChange={handleFactorTypeChange}
//             className={styles.radio}
//           />
//           <label htmlFor="prime" className={styles.radioLabel}>
//             Prime Factoring
//           </label>
//           <input
//             type="radio"
//             id="complete"
//             name="factor-type"
//             value="complete"
//             checked={factorType === 'complete'}
//             onChange={handleFactorTypeChange}
//             className={styles.radio}
//           />
//           <label htmlFor="complete" className={styles.radioLabel}>
//             Complete Factoring
//           </label>
//         </div>
//       </div>
//       <div className={styles.buttonContainer}>
//         <button
//           onClick={handleCalculate}
//           className={`${styles.button} ${styles.calculateButton}`}
//         >
//           Calculate Factors
//         </button>
//         <button
//           onClick={handleReset}
//           className={`${styles.button} ${styles.resetButton}`}
//         >
//           Reset
//         </button>
//       </div>
//       {error && <p className={styles.error}>{error}</p>}
//       <div className={styles.resultsContainer}>
//         {factors.length > 0 && (
//           <div className={styles.factorGroup}>
//             <p className={styles.resultsTitle}>
//               The {factorType === 'prime' ? 'prime ' : ''}factors of {number} are:
//             </p>
//             <ul className={styles.factorList}>
//               {factors.map((factor, index) => (
//                 <li key={index} className={styles.factor}>{factor}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {factorType === 'complete' && factorPairs.length > 0 && (
//           <div className={styles.factorGroup}>
//             <p className={styles.resultsTitle}>The factor pairs are:</p>
//             <ul className={styles.factorList}>
//               {factorPairs.map((pair, index) => (
//                 <li key={index} className={styles.factor}>{pair}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FactoringCalculator;



'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { processContent } from '../../../../app/utils/contentProcessor';

/* =====================================================================
   UTILITIES
   ===================================================================== */

function parseInt10(s) {
  if (s === '' || s == null) return NaN;
  const trimmed = String(s).trim();
  if (!/^-?\d+$/.test(trimmed)) return NaN;
  return parseInt(trimmed, 10);
}

function primeFactors(n) {
  if (!Number.isInteger(n) || n < 1) return [];
  if (n === 1) return [];
  const out = [];
  let m = n;
  let p = 2;
  while (p * p <= m) {
    if (m % p === 0) {
      let e = 0;
      while (m % p === 0) { m = m / p; e++; }
      out.push([p, e]);
    }
    p = p === 2 ? 3 : p + 2;
  }
  if (m > 1) out.push([m, 1]);
  return out;
}

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
}

function allDivisors(n) {
  if (!Number.isInteger(n) || n < 1) return [];
  const out = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      out.push(i);
      if (i !== n / i) out.push(n / i);
    }
  }
  return out.sort((a, b) => a - b);
}

function factorPairs(n) {
  const divs = allDivisors(n);
  const pairs = [];
  for (let i = 0; i < divs.length; i++) {
    const a = divs[i], b = n / a;
    if (a > b) break;
    pairs.push([a, b]);
  }
  return pairs;
}

function sumDivisors(n) {
  if (!Number.isInteger(n) || n < 1) return 0;
  const pf = primeFactors(n);
  let s = 1;
  for (let i = 0; i < pf.length; i++) {
    const [p, e] = pf[i];
    s *= (Math.pow(p, e + 1) - 1) / (p - 1);
  }
  return s;
}

function gcdN(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

function lcmN(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcdN(a, b);
}

function pfLatex(pf, n) {
  if (n === 0) return '0';
  if (n === 1) return '1';
  if (n < 0) return '-1 \\cdot ' + pfLatex(pf, -n);
  if (pf.length === 0) return String(n);
  return pf.map(pe => pe[1] === 1 ? String(pe[0]) : `${pe[0]}^{${pe[1]}}`).join(' \\cdot ');
}

function pfPlain(pf) {
  return pf.map(pe => pe[1] === 1 ? String(pe[0]) : `${pe[0]}^${pe[1]}`).join(' * ');
}

function deepMerge(def, override) {
  if (override == null) return def;
  if (typeof def !== 'object' || typeof override !== 'object') return override;
  if (Array.isArray(def) || Array.isArray(override)) return override;
  const out = { ...def };
  for (const k of Object.keys(override)) {
    out[k] = deepMerge(def[k], override[k]);
  }
  return out;
}

/* =====================================================================
   DEFAULT EXPLANATIONS (STATIC PROSE ONLY — overridable via props)
   Dynamic data (numbers, computed values) is interpolated in the
   component and never passed through props.
   ===================================================================== */

const defaultExplanations = {
  factor: {
    sectionTitles: {
      whatHappened: `What just happened`,
      divisorCount: `Divisor count`,
      worthKnowing: `Worth knowing`,
      negative:     `Negative numbers`,
      zero:         `Zero is special`,
      one:          `One is special`,
      prime:        `Prime number`,
      overflow:     `Out of range`
    },
    statusText: {
      incomplete: `Enter a positive integer to see its factorization.`,
      overflow:   `This demo handles numbers up to one billion. For larger numbers, more efficient factoring algorithms (e.g. Pollard rho) are needed.`,
      zero:       `Every nonzero integer divides 0, since $0 = 0 \\cdot n$ for any $n$. The prime factorization is undefined for 0.`,
      one:        `1 is neither prime nor composite. It has exactly one divisor — itself. The empty product convention makes $1 = \\prod_{i} p_i^0$ (no primes raised to any power).`,
      negative:   `By convention, prime factorization handles negatives by pulling out a factor of $-1$.`,
      prime:      `is prime — its only divisors are 1 and itself.`,
      composite:  `Every integer greater than 1 has a unique prime factorization (Fundamental Theorem of Arithmetic).`
    },
    divisorCountIntro: `If $n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots$, the number of divisors is the product $(a_1+1)(a_2+1)\\cdots$. Each exponent contributes one more choice.`,
    insights: {
      perfectSquareTitle:  `Perfect square`,
      perfectSquareNote:   `Perfect squares always have an odd number of divisors.`,
      perfectCubeTitle:    `Perfect cube`,
      perfectNumberTitle:  `Perfect number`,
      perfectNumberNote:   `The sum of proper divisors equals the number itself.`,
      abundantTitle:       `Abundant`,
      abundantNote:        `The smallest abundant number is 12.`,
      deficientTitle:      `Deficient`,
      deficientNote:       `Most numbers are deficient — their proper divisors sum to less than themselves.`
    }
  },

  laws: {
    list: [
      { id: 'diffSquares', name: `Difference of squares`,    formula: `a^2 - b^2 = (a-b)(a+b)` },
      { id: 'sumCubes',    name: `Sum of cubes`,             formula: `a^3 + b^3 = (a+b)(a^2 - ab + b^2)` },
      { id: 'diffCubes',   name: `Difference of cubes`,      formula: `a^3 - b^3 = (a-b)(a^2 + ab + b^2)` },
      { id: 'perfectSq',   name: `Perfect square trinomial`, formula: `a^2 + 2ab + b^2 = (a+b)^2` },
      { id: 'gcf',         name: `GCF extraction`,           formula: `ka + kb = k(a + b)` }
    ],
    whyTitle:      `Why it works`,
    mistakeTitle:  `Common mistake`,
    descriptions: {
      diffSquares: {
        title:     `Difference of squares`,
        intuition: `Any difference of two squares factors as a product of sum and difference. Recognizable by the missing middle term.`,
        why:       `Expand the right side: $(a-b)(a+b) = a^2 + ab - ab - b^2 = a^2 - b^2$.`,
        example:   `49 - 9 = 7^2 - 3^2 = (7-3)(7+3) = 4 \\cdot 10 = 40`,
        mistake: {
          title: `Sum of squares does not factor`,
          body:  `Over the real numbers, $a^2 + b^2$ does NOT factor. Only the difference does. Sum of squares is irreducible.`
        }
      },
      sumCubes: {
        title:     `Sum of cubes`,
        intuition: `Unlike sum of squares, sum of cubes does factor. The pattern is sum-times-an-almost-square-trinomial.`,
        why:       `Multiplying $(a+b)(a^2 - ab + b^2) = a^3 - a^2 b + ab^2 + a^2 b - ab^2 + b^3 = a^3 + b^3$. The middle terms cancel.`,
        example:   `8 + 27 = 2^3 + 3^3 = (2+3)(4 - 6 + 9) = 5 \\cdot 7 = 35`,
        mistake: {
          title: `Sign of the middle term`,
          body:  `Sum of cubes uses $-ab$ in the trinomial; difference of cubes uses $+ab$. Easy to swap. Mnemonic: SOAP — Same, Opposite, Always Positive.`
        }
      },
      diffCubes: {
        title:     `Difference of cubes`,
        intuition: `Mirror of sum of cubes: a difference times a trinomial.`,
        why:       `Multiplying $(a-b)(a^2 + ab + b^2) = a^3 - b^3$. Same cancellation, opposite signs.`,
        example:   `125 - 8 = 5^3 - 2^3 = (5-2)(25 + 10 + 4) = 3 \\cdot 39 = 117`,
        mistake: {
          title: `Sign of the trinomial term`,
          body:  `The trinomial here uses $+ab$ (not $-ab$). Pair it with the right outer sign by SOAP: Same outer sign, Opposite inner sign, Always Positive last.`
        }
      },
      perfectSq: {
        title:     `Perfect square trinomial`,
        intuition: `When you see $a^2 + 2ab + b^2$, it factors cleanly as $(a+b)^2$. Spot it by checking the middle term is exactly $2\\sqrt{a^2}\\sqrt{b^2}$.`,
        why:       `$(a+b)^2 = (a+b)(a+b) = a^2 + 2ab + b^2$ by FOIL.`,
        example:   `9 + 24 + 16 = 3^2 + 2(3)(4) + 4^2 = (3+4)^2 = 49`,
        mistake: {
          title: `Check the middle coefficient`,
          body:  `If the middle term is not exactly $2ab$, it is not a perfect square trinomial. Do not force it.`
        }
      },
      gcf: {
        title:     `GCF extraction`,
        intuition: `The first step in factoring is almost always: pull out the greatest common factor.`,
        why:       `The distributive property: $k(a+b) = ka + kb$. Run it backwards.`,
        example:   `6 + 9 = 3 \\cdot 2 + 3 \\cdot 3 = 3(2+3) = 3 \\cdot 5 = 15`,
        mistake: {
          title: `Pull out the LARGEST common factor`,
          body:  `If you only pull out part of the GCF, the inside still has a common factor and you are not done. Use the full gcd.`
        }
      }
    }
  },

  gcd: {
    sectionTitles: {
      intro:                 `GCD & LCM`,
      readingFactorizations: `Reading the factorizations`,
      theRule:               `The rule`,
      theIdentity:           `The identity`,
      coprime:               `Coprime`
    },
    introWhenEmpty:           `Enter two positive integers to see their prime factorizations, shared factors, GCD, and LCM.`,
    readingFactorizationsText:`Stack the prime factorizations and look at each prime separately:`,
    ruleText:                 `**GCD** takes the *minimum* exponent of each shared prime. **LCM** takes the *maximum* exponent of each prime that appears in either.`,
    identityText:             `For any two positive integers, $a \\cdot b = \\gcd(a,b) \\cdot \\mathrm{lcm}(a,b)$. The product of two numbers equals the product of their GCD and LCM.`,
    coprimeText:              `Coprime numbers have no overlap in their prime factorizations. When $\\gcd = 1$, the LCM is simply the product of the two numbers.`,
    coprimeFlag: {
      title: `Coprime`,
      body:  `share no prime factors — they are coprime.`
    }
  }
};

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const CHIPS_BY_TYPE = {
  prime:    [12, 24, 60, 100, 120, 360, 720, 1024, 1000000],
  complete: [16, 24, 36, 48, 60, 100],
  tree:     [12, 18, 24, 36, 60, 72]
};

const COPY_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const CHECK_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* =====================================================================
   STYLES (scoped under .fc-root)
   ===================================================================== */

const STYLES = `
.fc-root {
  --ms-primary:        #1d4ed8;
  --ms-primary-dark:   #1e3a8a;
  --ms-primary-light:  #dbeafe;
  --ms-primary-hover:  #1e40af;
  --ms-primary-deeper: #172554;

  --ms-bg:             #f4f6fb;
  --ms-card-bg:        #ffffff;
  --ms-border:         #e2e8f0;
  --ms-border-strong:  #cbd5e1;

  --ms-text:           #0f172a;
  --ms-text-muted:     #64748b;
  --ms-text-soft:      #475569;

  --ms-success:        #0d9488;
  --ms-warning:        #b45309;
  --ms-error:          #b91c1c;

  --ms-font-serif: 'Playfair Display', Georgia, serif;
  --ms-font-sans:  'Inter', -apple-system, sans-serif;
  --ms-font-mono:  'JetBrains Mono', 'SF Mono', Menlo, monospace;

  --ms-radius-sm: 6px;
  --ms-radius:    10px;
  --ms-radius-lg: 14px;

  --ms-shadow-sm: 0 1px 2px rgba(15,23,42,.05);
  --ms-shadow:    0 2px 6px rgba(15,23,42,.06), 0 1px 2px rgba(15,23,42,.04);

  color: var(--ms-text);
  font-family: var(--ms-font-sans);
  font-size: 1rem;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}
.fc-root, .fc-root * { box-sizing: border-box; }

.fc-root .page { width: 94%; max-width: 1480px; margin: 0 auto; padding: 1.25rem 0 3rem; }

.fc-root .mode-tabs {
  display: flex; gap: .5rem;
  background: var(--ms-card-bg);
  border: 1px solid var(--ms-border);
  border-radius: 999px;
  padding: .32rem;
  margin: 0 auto 1rem;
  width: fit-content;
  box-shadow: var(--ms-shadow-sm);
}
.fc-root .mode-tab {
  font: 600 .92rem inherit;
  padding: .5rem 1.4rem;
  background: transparent;
  border: none;
  border-radius: 999px;
  color: var(--ms-text-soft);
  cursor: pointer;
}
.fc-root .mode-tab:hover { color: var(--ms-text); }
.fc-root .mode-tab.is-active {
  background: var(--ms-primary);
  color: #fff;
  box-shadow: 0 2px 6px rgba(29,78,216,.25);
}

.fc-root .main-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}
@media (max-width: 1020px) { .fc-root .main-grid { grid-template-columns: 1fr; } }

.fc-root .card {
  background: var(--ms-card-bg);
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius-lg);
  box-shadow: var(--ms-shadow);
  margin-bottom: 1rem;
  overflow: hidden;
}
.fc-root .card-header {
  background: var(--ms-primary);
  color: #fff;
  padding: .55rem 1.15rem;
  font-family: var(--ms-font-serif);
  font-weight: 600;
  font-size: .92rem;
}
.fc-root .left-col .card-body { padding: 1.1rem 1.3rem; }
.fc-root .right-col .card-body { padding: 1.3rem 1.5rem; }

.fc-root .mode-panel { display: none; }
.fc-root .mode-panel.is-active { display: block; }

.fc-root .type-row {
  display: flex; align-items: center; gap: .9rem;
  margin-bottom: .8rem; flex-wrap: wrap;
}
.fc-root .type-label { font-size: .78rem; font-weight: 600; color: var(--ms-text-soft); flex-shrink: 0; }
.fc-root .type-pills { display: flex; gap: .45rem; flex-wrap: wrap; }
.fc-root .type-pill {
  font: 600 .82rem inherit;
  padding: .55rem 1rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  min-width: 70px;
}
.fc-root .type-pill:hover { background: var(--ms-primary-light); border-color: var(--ms-primary); }
.fc-root .type-pill.is-active {
  background: var(--ms-primary);
  border-color: var(--ms-primary);
  color: #fff;
}

.fc-root .chips-row { margin-bottom: 1rem; }
.fc-root .chips-list { display: flex; flex-wrap: wrap; gap: .35rem; }
.fc-root .chip {
  font: 500 .78rem inherit;
  padding: .3rem .6rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  color: var(--ms-text);
  cursor: pointer;
  min-width: 38px;
}
.fc-root .chip:hover { background: var(--ms-primary-light); border-color: var(--ms-primary); }
.fc-root .chip.is-active { background: var(--ms-primary); border-color: var(--ms-primary); color: #fff; }

.fc-root .slot-input {
  text-align: center;
  font-family: var(--ms-font-mono);
  font-weight: 500;
  background: #fff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  color: var(--ms-text);
  outline: none;
  padding: 0 .4rem;
}
.fc-root .slot-input:focus { border-color: var(--ms-primary); box-shadow: 0 0 0 3px rgba(29,78,216,.14); }

.fc-root .slot-input.n   { width: 160px; height: 48px; font-size: 1.4rem; }
.fc-root .slot-input.law { width: 60px;  height: 38px; font-size: 1rem; }
.fc-root .slot-input.cmp { width: 110px; height: 44px; font-size: 1.3rem; }

.fc-root .input-row {
  display: flex; align-items: center; gap: .55rem; flex-wrap: wrap;
  margin-bottom: .9rem;
  padding: .65rem .8rem;
  background: #f8faff;
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
}
.fc-root .input-row label { font: 600 .78rem inherit; color: var(--ms-text-soft); }

.fc-root .expr-display {
  background: linear-gradient(180deg, #eff6ff 0%, #f8faff 100%);
  border: 1.5px solid var(--ms-primary-light);
  border-left: 4px solid var(--ms-primary);
  border-radius: var(--ms-radius);
  padding: 1.1rem 1.3rem;
  min-height: 72px;
  display: flex; align-items: center; justify-content: center;
  text-align: center;
  word-break: break-word;
}
.fc-root .expr-display .katex { font-size: 1.7rem !important; }
.fc-root .expr-display.placeholder {
  color: var(--ms-text-muted);
  font-style: italic;
  font-family: var(--ms-font-sans);
  font-size: 1rem;
}

.fc-root .actions { display: flex; gap: .55rem; margin-top: .9rem; }
.fc-root .btn {
  font: 600 .85rem inherit;
  padding: .65rem 1.4rem;
  border-radius: var(--ms-radius);
  border: 1.5px solid transparent;
  cursor: pointer;
}
.fc-root .btn:active { transform: translateY(1px); }
.fc-root .btn-primary { background: var(--ms-primary); color: #fff; flex: 1; }
.fc-root .btn-primary:hover { background: var(--ms-primary-hover); }
.fc-root .btn-secondary {
  background: #fff; color: var(--ms-text-soft);
  border-color: var(--ms-border-strong);
}
.fc-root .btn-secondary:hover { background: #f8fafc; color: var(--ms-text); }

.fc-root .result {
  padding: 1rem 1.3rem;
  background: linear-gradient(180deg, #eff6ff 0%, #f0f9ff 100%);
  border-left: 4px solid var(--ms-primary);
}
.fc-root .result-eyebrow {
  font: 700 .7rem inherit;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .35rem;
}
.fc-root .result-primary {
  font-size: 1.55rem;
  margin-bottom: .7rem;
  min-height: 32px;
}
.fc-root .result-primary .katex { font-size: 1.45rem !important; }
.fc-root .result-forms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: .5rem;
  margin-bottom: .85rem;
}
.fc-root .result-form {
  position: relative;
  background: rgba(255,255,255,.8);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: .5rem .7rem;
  padding-right: 1.7rem;
}
.fc-root .result-form-label {
  font: 700 .65rem inherit;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: .22rem;
}
.fc-root .result-form-value {
  font-family: var(--ms-font-mono);
  font-size: .85rem;
  word-break: break-all;
  min-height: 1.1rem;
}
.fc-root .result-form-value .katex { font-size: .92rem !important; }
.fc-root .result-form-copy {
  position: absolute; top: .35rem; right: .35rem;
  background: transparent; border: none;
  color: var(--ms-text-muted);
  cursor: pointer; padding: .25rem; border-radius: 4px;
  display: inline-flex; align-items: center;
}
.fc-root .result-form-copy:hover { background: rgba(29,78,216,.08); color: var(--ms-primary); }
.fc-root .result-form-copy.is-copied { color: var(--ms-success); background: rgba(13,148,136,.12); }

.fc-root .divisors-block { margin-top: .8rem; padding-top: .8rem; border-top: 1px solid var(--ms-primary-light); }
.fc-root .divisors-label {
  font: 700 .7rem inherit;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .5rem;
}
.fc-root .divisors-grid { display: flex; flex-wrap: wrap; gap: .3rem; }
.fc-root .divisor-chip {
  background: rgba(255,255,255,.85);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .25rem .55rem;
  font-family: var(--ms-font-mono);
  font-size: .8rem;
  cursor: pointer;
}
.fc-root .divisor-chip:hover { background: #fff; border-color: var(--ms-primary); }
.fc-root .divisor-chip.prime {
  background: var(--ms-primary-light);
  border-color: var(--ms-primary);
  color: var(--ms-primary-dark);
  font-weight: 600;
}

.fc-root .pairs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: .35rem;
}
.fc-root .pair-chip {
  background: rgba(255,255,255,.85);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .35rem .55rem;
  font-family: var(--ms-font-mono);
  font-size: .82rem;
  text-align: center;
}

.fc-root .neighbors { margin-top: .8rem; padding-top: .8rem; border-top: 1px solid var(--ms-primary-light); }
.fc-root .neighbors-label {
  font: 700 .7rem inherit;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .5rem;
}
.fc-root .neighbors-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: .3rem;
}
.fc-root .neighbor {
  background: rgba(255,255,255,.7);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .42rem .25rem;
  text-align: center;
  cursor: pointer;
}
.fc-root .neighbor:hover { background: #fff; border-color: var(--ms-primary); }
.fc-root .neighbor.is-current { background: var(--ms-primary); border-color: var(--ms-primary); color: #fff; }
.fc-root .neighbor.is-current .neighbor-value { color: #fff; }
.fc-root .neighbor-label { font-family: var(--ms-font-mono); font-size: .82rem; font-weight: 600; }
.fc-root .neighbor-value {
  font-family: var(--ms-font-mono); font-size: .68rem;
  color: var(--ms-text-soft); margin-top: .15rem;
}
@media (max-width: 760px) { .fc-root .neighbors-grid { grid-template-columns: repeat(4,1fr); } }

.fc-root .history-strip { margin-top: .8rem; padding-top: .8rem; border-top: 1px solid var(--ms-primary-light); }
.fc-root .history-strip[hidden] { display: none; }
.fc-root .history-label {
  font: 700 .7rem inherit;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .5rem;
}
.fc-root .history-chips { display: flex; flex-wrap: wrap; gap: .35rem; }
.fc-root .history-chip {
  background: rgba(255,255,255,.8);
  border: 1px solid var(--ms-primary-light);
  border-radius: var(--ms-radius-sm);
  padding: .3rem .6rem;
  cursor: pointer;
  font-family: var(--ms-font-mono);
  font-size: .76rem;
}
.fc-root .history-chip:hover { background: #fff; border-color: var(--ms-primary); }
.fc-root .history-chip .katex { font-size: .82rem !important; }

.fc-root .tree-wrap { margin-top: .8rem; padding-top: .8rem; border-top: 1px solid var(--ms-primary-light); }
.fc-root .tree-label {
  font: 700 .7rem inherit;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .5rem;
}
.fc-root .tree-svg {
  width: 100%;
  max-width: 540px;
  display: block;
  margin: 0 auto;
}
.fc-root .tree-node {
  font-family: var(--ms-font-mono);
  font-size: 16px;
  font-weight: 600;
  fill: var(--ms-text);
}
.fc-root .tree-node.prime { fill: var(--ms-primary-dark); }
.fc-root .tree-node-bg {
  fill: rgba(255,255,255,.95);
  stroke: var(--ms-border-strong);
  stroke-width: 1;
}
.fc-root .tree-node-bg.prime {
  fill: var(--ms-primary-light);
  stroke: var(--ms-primary);
  stroke-width: 1.5;
}
.fc-root .tree-edge { stroke: var(--ms-border-strong); stroke-width: 1.5; fill: none; }

.fc-root .ref-table { width: 100%; border-collapse: collapse; font-size: .9rem; }
.fc-root .ref-table thead th {
  background: #f8fafc;
  border-bottom: 1px solid var(--ms-border);
  padding: .65rem .95rem;
  text-align: left;
  font: 700 .7rem inherit;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
}
.fc-root .ref-table thead th:last-child { text-align: right; }
.fc-root .ref-table tbody tr {
  border-bottom: 1px solid var(--ms-border);
  cursor: pointer;
}
.fc-root .ref-table tbody tr:last-child { border-bottom: none; }
.fc-root .ref-table tbody tr:hover { background: #f8faff; }
.fc-root .ref-table tbody tr.is-current { background: var(--ms-primary-light); }
.fc-root .ref-table tbody tr.is-current td { color: var(--ms-primary-dark); font-weight: 600; }
.fc-root .ref-table td { padding: .55rem .95rem; font-family: var(--ms-font-mono); }
.fc-root .ref-table td:nth-child(1) { color: var(--ms-text-soft); width: 60px; }
.fc-root .ref-table td:nth-child(3) { text-align: right; font-size: .8rem; color: var(--ms-text-soft); }
.fc-root .ref-table .badge {
  display: inline-block;
  background: var(--ms-primary);
  color: #fff;
  border-radius: 999px;
  padding: 1px 7px;
  font-size: .7rem;
  margin-left: .35rem;
  vertical-align: middle;
}

.fc-root .rule-list { display: flex; flex-direction: column; gap: .45rem; margin-bottom: 1rem; }
.fc-root .rule-pill {
  display: flex; align-items: center; gap: .8rem;
  padding: .6rem .85rem;
  background: #fff;
  border: 1.5px solid var(--ms-border-strong);
  border-radius: var(--ms-radius);
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  width: 100%;
}
.fc-root .rule-pill:hover { background: var(--ms-primary-light); border-color: var(--ms-primary); }
.fc-root .rule-pill.is-active { background: var(--ms-primary); border-color: var(--ms-primary); }
.fc-root .rule-pill.is-active .rule-name { color: #fff; }
.fc-root .rule-pill.is-active .rule-formula .katex * { color: #fff !important; }
.fc-root .rule-name { font: 600 .8rem inherit; min-width: 175px; }
.fc-root .rule-formula { flex: 1; }
.fc-root .rule-formula .katex { font-size: .92rem !important; }

.fc-root .rule-inputs {
  background: #f8faff;
  border: 1.5px dashed var(--ms-primary);
  border-radius: var(--ms-radius);
  padding: 1rem;
  margin-bottom: .5rem;
  display: flex; flex-wrap: wrap; gap: .65rem;
  align-items: center; justify-content: center;
}
.fc-root .rule-inputs label { font: 600 .8rem inherit; color: var(--ms-text-soft); }

.fc-root .rule-display {
  background: #fff;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .85rem 1rem;
  margin-bottom: .5rem;
  text-align: center;
}
.fc-root .rule-display .katex { font-size: 1.25rem !important; }

.fc-root .rule-steps {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left: 4px solid var(--ms-primary);
  padding: .95rem 1.1rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
}
.fc-root .rule-steps-label {
  font: 700 .7rem inherit;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary-dark);
  margin-bottom: .6rem;
}
.fc-root .rule-step {
  display: flex; align-items: center; gap: .6rem;
  padding: .35rem 0;
}
.fc-root .rule-step-num {
  width: 20px; height: 20px; flex-shrink: 0;
  background: var(--ms-primary); color: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font: 700 .7rem var(--ms-font-mono);
}
.fc-root .rule-step-text { flex: 1; font-size: .85rem; }
.fc-root .rule-step-text .katex { font-size: 1rem !important; }

.fc-root .compare-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: .8rem;
  align-items: center;
  margin-bottom: 1rem;
}
@media (max-width: 720px) { .fc-root .compare-inputs { grid-template-columns: 1fr; } }
.fc-root .compare-side {
  background: #f8faff;
  border: 1.5px solid var(--ms-primary-light);
  border-radius: var(--ms-radius);
  padding: .9rem;
  text-align: center;
}
.fc-root .compare-side-label {
  font: 700 .68rem inherit;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-primary);
  margin-bottom: .5rem;
}
.fc-root .compare-side-fact {
  margin-top: .5rem;
  font-family: var(--ms-font-mono);
  font-size: .85rem;
  color: var(--ms-text-soft);
}
.fc-root .compare-side-fact .katex { font-size: .95rem !important; }
.fc-root .compare-vs {
  font: 700 1.05rem var(--ms-font-serif);
  color: var(--ms-primary);
  text-align: center;
}

.fc-root .gcd-lcm-result {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: .5rem;
  margin-bottom: .8rem;
}
.fc-root .gcd-lcm-card {
  background: #fff;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .75rem .9rem;
}
.fc-root .gcd-lcm-card.gcd { border-left: 4px solid var(--ms-success); }
.fc-root .gcd-lcm-card.lcm { border-left: 4px solid var(--ms-primary); }
.fc-root .gcd-lcm-card.identity { border-left: 4px solid var(--ms-warning); }
.fc-root .gcd-lcm-label {
  font: 700 .65rem inherit;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ms-text-muted);
  margin-bottom: .25rem;
}
.fc-root .gcd-lcm-value {
  font-family: var(--ms-font-mono);
  font-size: 1.05rem;
  font-weight: 600;
}
.fc-root .gcd-lcm-value .katex { font-size: 1rem !important; }

.fc-root .coprime-flag {
  background: linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%);
  border-left: 4px solid var(--ms-success);
  padding: .8rem 1rem;
  border-radius: 0 var(--ms-radius) var(--ms-radius) 0;
  margin-bottom: .8rem;
}
.fc-root .coprime-flag-label {
  font: 700 .7rem inherit;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ms-success);
  margin-bottom: .25rem;
}

.fc-root .explain-block { padding: 1.15rem 0; border-bottom: 1px solid var(--ms-border); }
.fc-root .explain-block:first-child { padding-top: 0; }
.fc-root .explain-block:last-child { padding-bottom: 0; border-bottom: none; }
.fc-root .explain-title {
  font: 600 1.18rem var(--ms-font-serif);
  margin: 0 0 .6rem;
}
.fc-root .explain-text {
  font-size: .96rem;
  color: var(--ms-text-soft);
  margin: 0 0 .6rem;
}
.fc-root .explain-text:last-child { margin-bottom: 0; }
.fc-root .explain-formula {
  background: #f8fafc;
  border: 1px solid var(--ms-border);
  border-radius: var(--ms-radius);
  padding: .95rem 1.15rem;
  margin: .6rem 0;
  text-align: center;
}
.fc-root .explain-formula .katex { font-size: 1.2rem !important; }

.fc-root .insight {
  background: linear-gradient(180deg, #fef9e7 0%, #fef3c7 100%);
  border-left: 4px solid var(--ms-warning);
  border-radius: var(--ms-radius);
  padding: .85rem 1.05rem;
  margin: .6rem 0;
}
.fc-root .insight.info {
  background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
  border-left-color: var(--ms-primary);
}
.fc-root .insight.danger {
  background: linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%);
  border-left-color: var(--ms-error);
}
.fc-root .insight.success {
  background: linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%);
  border-left-color: var(--ms-success);
}
.fc-root .insight-title { font: 700 .9rem inherit; margin-bottom: .35rem; color: #854d0e; }
.fc-root .insight.info .insight-title { color: var(--ms-primary-dark); }
.fc-root .insight.danger .insight-title { color: #7f1d1d; }
.fc-root .insight.success .insight-title { color: var(--ms-success); }
.fc-root .insight-body { font-size: .92rem; color: var(--ms-text); margin: 0; }
.fc-root .insight-body .katex { font-size: 1rem !important; }

.fc-root [hidden] { display: none !important; }
`;

/* =====================================================================
   COMPONENT
   ===================================================================== */

export default function FactoringCalculator({ explanations: explanationsProp } = {}) {
  const explanations = useMemo(
    () => deepMerge(defaultExplanations, explanationsProp || {}),
    [explanationsProp]
  );

  /* Mode */
  const [mode, setMode] = useState('factor');

  /* Factor mode state */
  const [ftype, setFtype] = useState('prime');
  const [n, setN] = useState('60');
  const [history, setHistory] = useState([]);
  const [copiedKey, setCopiedKey] = useState(null);

  /* Laws mode state */
  const [currentLaw, setCurrentLaw] = useState('diffSquares');
  const [lawInputs, setLawInputs] = useState({
    diffSquares: { a: '7',  b: '3' },
    sumCubes:    { a: '2',  b: '3' },
    diffCubes:   { a: '5',  b: '2' },
    perfectSq:   { a: '3',  b: '4' },
    gcf:         { a: '12', b: '18' }
  });

  /* GCD/LCM mode state */
  const [aGcd, setAGcd] = useState('60');
  const [bGcd, setBGcd] = useState('84');

  /* =====================================================================
     FACTOR MODE — computed values
     ===================================================================== */

  const factorRes = useMemo(() => {
    const parsed = parseInt10(n);
    if (isNaN(parsed)) return { status: 'incomplete', n: NaN };
    if (parsed === 0)  return { status: 'zero', n: 0 };
    if (parsed === 1)  return { status: 'one', n: 1 };
    if (parsed < 0)    return { status: 'negative', n: parsed, abs: -parsed, pf: primeFactors(-parsed) };
    if (Math.abs(parsed) > 1e9) return { status: 'overflow', n: parsed };
    const pf = primeFactors(parsed);
    const divs = allDivisors(parsed);
    return {
      status: isPrime(parsed) ? 'prime' : 'composite',
      n: parsed,
      pf,
      divisors: divs,
      sigma: sumDivisors(parsed),
      isSquare: Math.sqrt(parsed) % 1 === 0,
      isCube: Math.round(Math.cbrt(parsed)) ** 3 === parsed
    };
  }, [n]);

  /* Tree structure */
  const treeStruct = useMemo(() => {
    if (ftype !== 'tree') return null;
    if (factorRes.status !== 'composite' && factorRes.status !== 'prime') return null;
    function split(num) {
      if (num < 4) return { value: num, prime: true, children: null };
      if (isPrime(num)) return { value: num, prime: true, children: null };
      let p = 2;
      while (num % p !== 0) p++;
      return { value: num, prime: false, children: [{ value: p, prime: true, children: null }, split(num / p)] };
    }
    const tree = split(factorRes.n);
    function leaves(t) { return t.children ? leaves(t.children[0]) + leaves(t.children[1]) : 1; }
    function depth(t)  { return t.children ? 1 + Math.max(depth(t.children[0]), depth(t.children[1])) : 1; }
    const W = 600, H = Math.max(160, depth(tree) * 70);
    const nodes = [];
    const edges = [];
    function layout(t, x0, x1, y) {
      const x = (x0 + x1) / 2;
      nodes.push({ value: t.value, prime: t.prime, x, y });
      if (t.children) {
        const L = leaves(t.children[0]);
        const R = leaves(t.children[1]);
        const mid = x0 + (x1 - x0) * (L / (L + R));
        const leftX = layout(t.children[0], x0, mid, y + 70);
        const rightX = layout(t.children[1], mid, x1, y + 70);
        edges.push({ x1: x, y1: y, x2: leftX, y2: y + 70 });
        edges.push({ x1: x, y1: y, x2: rightX, y2: y + 70 });
      }
      return x;
    }
    layout(tree, 20, W - 20, 30);
    return { W, H, nodes, edges };
  }, [ftype, factorRes]);

  /* Result forms list */
  const resultForms = useMemo(() => {
    const r = factorRes;
    const forms = [];
    if (r.status === 'incomplete') { forms.push({ label: 'Status', value: 'Waiting for input' }); return forms; }
    if (r.status === 'overflow')   { forms.push({ label: 'Status', value: 'Too large for this demo' }); return forms; }
    if (r.status === 'zero') {
      forms.push({ label: 'Status', value: 'Zero' });
      forms.push({ label: 'Divisors', value: 'every nonzero integer' });
      return forms;
    }
    if (r.status === 'one') {
      forms.push({ label: 'Status', value: '1 (neither prime nor composite)' });
      forms.push({ label: 'Divisors', value: '1 only' });
      forms.push({ label: 'Divisor count', value: '1' });
      return forms;
    }
    if (r.status === 'prime') {
      forms.push({ label: 'Status', value: 'Prime' });
      forms.push({ label: 'Divisors', value: `1 and ${r.n}` });
      forms.push({ label: 'Divisor count', value: '2' });
      forms.push({ label: 'Sum of divisors', value: String(1 + r.n) });
      return forms;
    }
    if (r.status === 'negative') {
      forms.push({ label: 'Prime factorization', math: pfLatex(r.pf, r.n), copy: `-1 * ${pfPlain(r.pf)}` });
      forms.push({ label: 'Exponent form', value: `-1 * ${pfPlain(r.pf)}`, copy: `-1 * ${pfPlain(r.pf)}` });
      forms.push({ label: 'Divisors', value: `(of |n| = ${r.abs})` });
      return forms;
    }
    /* composite */
    const pf = r.pf;
    const divCount = r.divisors.length;
    const sigma = r.sigma;
    const aliquot = sigma - r.n;

    forms.push({ label: 'Prime factorization', math: pfLatex(pf, r.n), copy: pfPlain(pf) });
    forms.push({ label: 'Exponent form', value: pfPlain(pf), copy: pfPlain(pf) });
    forms.push({ label: 'Divisor count \u03C4(n)', value: String(divCount), copy: String(divCount) });
    forms.push({ label: 'Sum of divisors \u03C3(n)', value: String(sigma), copy: String(sigma) });

    let typeLabel;
    if (aliquot === r.n) typeLabel = 'Perfect (\u03C3-n = n)';
    else if (aliquot > r.n) typeLabel = 'Abundant (\u03C3-n > n)';
    else typeLabel = 'Deficient (\u03C3-n < n)';
    forms.push({ label: 'Type', value: typeLabel });

    if (r.isSquare) forms.push({ label: 'Perfect square', value: `\u221A${r.n} = ${Math.sqrt(r.n)}` });
    if (r.isCube)   forms.push({ label: 'Perfect cube',   value: `\u221B${r.n} = ${Math.round(Math.cbrt(r.n))}` });
    return forms;
  }, [factorRes]);

  /* Neighbors */
  const neighbors = useMemo(() => {
    if (isNaN(factorRes.n)) return [];
    const offs = [-3, -2, -1, 0, 1, 2, 3];
    return offs.map(o => {
      const nn = factorRes.n + o;
      let v;
      if (!Number.isInteger(nn) || nn === 0) v = '\u2014';
      else if (nn === 1) v = '1';
      else if (nn < 0) v = `\u2212${allDivisors(-nn).length} div`;
      else if (isPrime(nn)) v = 'prime';
      else v = `${allDivisors(nn).length} div`;
      return { off: o, n: nn, badge: v };
    });
  }, [factorRes]);

  /* Reference table */
  const referenceRows = useMemo(() => {
    if (isNaN(factorRes.n) || factorRes.n < 1) return [];
    const lo = Math.max(2, factorRes.n - 5);
    const hi = lo + 11;
    const rows = [];
    for (let k = lo; k <= hi; k++) {
      const pf = primeFactors(k);
      rows.push({
        n: k,
        latex: pf.length === 0 ? '1' : pfLatex(pf, k),
        isPrime: isPrime(k),
        divCount: allDivisors(k).length,
        isCurrent: k === factorRes.n
      });
    }
    return rows;
  }, [factorRes]);

  /* Expression display content */
  const exprDisplay = useMemo(() => {
    const r = factorRes;
    if (r.status === 'incomplete') return { placeholder: true, text: 'Enter a number' };
    if (r.status === 'overflow')   return { placeholder: true, text: 'Number too large for the demo (\u2264 10\u2079)' };
    if (r.status === 'zero')       return { placeholder: false, latex: `0 \\text{ has every integer as a divisor}` };
    if (r.status === 'one')        return { placeholder: false, latex: `1 \\text{ has no prime factors}` };
    if (r.status === 'prime')      return { placeholder: false, latex: `${r.n} \\text{ is prime}` };
    return { placeholder: false, latex: `${r.n} = ${pfLatex(r.pf, r.n)}` };
  }, [factorRes]);

  /* Result primary content */
  const resultPrimary = useMemo(() => {
    const r = factorRes;
    if (r.status === 'incomplete' || r.status === 'overflow') return null;
    if (r.status === 'zero')  return `0`;
    if (r.status === 'one')   return `1`;
    if (r.status === 'prime') return `${r.n} \\text{ (prime)}`;
    return `${r.n} = ${pfLatex(r.pf, r.n)}`;
  }, [factorRes]);

  const resultEyebrow = useMemo(() => {
    const r = factorRes;
    if (r.status === 'incomplete' || r.status === 'overflow') return 'Result';
    if (r.status === 'zero')  return 'Zero';
    if (r.status === 'one')   return 'One';
    if (r.status === 'prime') return `${r.n} is prime`;
    return `Factorization of ${r.n}`;
  }, [factorRes]);

  /* =====================================================================
     FACTOR MODE — explain blocks (dynamic content built here,
     static prose pulled from explanations object)
     ===================================================================== */

  const factorExplainBlocks = useMemo(() => {
    const e = explanations.factor;
    const r = factorRes;
    const blocks = [];

    if (r.status === 'incomplete') {
      blocks.push({ title: e.sectionTitles.whatHappened, content: e.statusText.incomplete });
      return blocks;
    }
    if (r.status === 'overflow') {
      blocks.push({ title: e.sectionTitles.overflow, content: e.statusText.overflow });
      return blocks;
    }
    if (r.status === 'zero') {
      blocks.push({ title: e.sectionTitles.zero, content: e.statusText.zero });
      return blocks;
    }
    if (r.status === 'one') {
      blocks.push({ title: e.sectionTitles.one, content: e.statusText.one });
      return blocks;
    }
    if (r.status === 'negative') {
      blocks.push({
        title: e.sectionTitles.negative,
        content: `${e.statusText.negative} For ${r.n}:`,
        formulas: [`${r.n} = -1 \\cdot ${pfLatex(r.pf, r.abs)}`]
      });
      return blocks;
    }
    if (r.status === 'prime') {
      blocks.push({
        title: e.sectionTitles.prime,
        content: `${r.n} ${e.statusText.prime}`,
        formulas: [`${r.n} \\text{ is prime} \\;\\Leftrightarrow\\; \\text{only divisors are } 1 \\text{ and } ${r.n}`]
      });
      return blocks;
    }

    /* composite */
    const pf = r.pf;
    const exps = pf.map(pe => pe[1] + 1);
    const divCountFormula = exps.join(' \\cdot ');
    const divCount = exps.reduce((a, b) => a * b, 1);

    blocks.push({
      title: e.sectionTitles.whatHappened,
      content: `${e.statusText.composite} For ${r.n}:`,
      formulas: [`${r.n} = ${pfLatex(pf, r.n)}`]
    });

    blocks.push({
      title: e.sectionTitles.divisorCount,
      content: e.divisorCountIntro,
      formulas: [`\\tau(${r.n}) = ${divCountFormula} = ${divCount}`]
    });

    /* Insights — titles static, bodies mix static prose with dynamic numbers */
    const insights = [];
    if (r.isSquare) insights.push({
      kind: 'info',
      title: e.insights.perfectSquareTitle,
      body:  `$${r.n} = ${Math.sqrt(r.n)}^2$. ${e.insights.perfectSquareNote}`
    });
    if (r.isCube) insights.push({
      kind: 'info',
      title: e.insights.perfectCubeTitle,
      body:  `$${r.n} = ${Math.round(Math.cbrt(r.n))}^3$.`
    });
    const aliquot = r.sigma - r.n;
    if (aliquot === r.n) insights.push({
      kind: 'success',
      title: e.insights.perfectNumberTitle,
      body:  `${e.insights.perfectNumberNote} $\\sigma(${r.n}) - ${r.n} = ${r.n}$.`
    });
    else if (aliquot > r.n) insights.push({
      kind: 'info',
      title: e.insights.abundantTitle,
      body:  `Proper divisors sum to more than ${r.n} (${aliquot}). ${e.insights.abundantNote}`
    });
    else insights.push({
      kind: '',
      title: e.insights.deficientTitle,
      body:  `Proper divisors sum to ${aliquot}, less than ${r.n}. ${e.insights.deficientNote}`
    });

    if (insights.length > 0) {
      blocks.push({ title: e.sectionTitles.worthKnowing, insights });
    }
    return blocks;
  }, [explanations, factorRes]);

  /* =====================================================================
     LAWS MODE — computed
     ===================================================================== */

  const lawDisplayLatex = useMemo(() => {
    const s = lawInputs[currentLaw];
    const a = parseInt10(s.a), b = parseInt10(s.b);
    const aStr = isNaN(a) ? 'a' : String(a);
    const bStr = isNaN(b) ? 'b' : String(b);
    if (currentLaw === 'diffSquares') return `${aStr}^2 - ${bStr}^2`;
    if (currentLaw === 'sumCubes')    return `${aStr}^3 + ${bStr}^3`;
    if (currentLaw === 'diffCubes')   return `${aStr}^3 - ${bStr}^3`;
    if (currentLaw === 'perfectSq')   return `${aStr}^2 + 2(${aStr})(${bStr}) + ${bStr}^2`;
    if (currentLaw === 'gcf')         return `${aStr} + ${bStr}`;
    return '';
  }, [currentLaw, lawInputs]);

  const lawSteps = useMemo(() => {
    const s = lawInputs[currentLaw];
    const a = parseInt10(s.a), b = parseInt10(s.b);
    const steps = [];
    if (isNaN(a) || isNaN(b)) { steps.push(`\\text{Enter integer values for a and b.}`); return steps; }

    if (currentLaw === 'diffSquares') {
      steps.push(`\\text{Start: } ${a}^2 - ${b}^2`);
      steps.push(`= (${a} - ${b})(${a} + ${b})`);
      steps.push(`= ${a - b} \\cdot ${a + b} = ${a * a - b * b}`);
    } else if (currentLaw === 'sumCubes') {
      steps.push(`\\text{Start: } ${a}^3 + ${b}^3`);
      steps.push(`= (${a} + ${b})(${a}^2 - ${a} \\cdot ${b} + ${b}^2)`);
      steps.push(`= ${a + b} \\cdot (${a * a} - ${a * b} + ${b * b}) = ${a + b} \\cdot ${a*a - a*b + b*b} = ${a*a*a + b*b*b}`);
    } else if (currentLaw === 'diffCubes') {
      steps.push(`\\text{Start: } ${a}^3 - ${b}^3`);
      steps.push(`= (${a} - ${b})(${a}^2 + ${a} \\cdot ${b} + ${b}^2)`);
      steps.push(`= ${a - b} \\cdot (${a * a} + ${a * b} + ${b * b}) = ${a - b} \\cdot ${a*a + a*b + b*b} = ${a*a*a - b*b*b}`);
    } else if (currentLaw === 'perfectSq') {
      steps.push(`\\text{Start: } ${a}^2 + 2(${a})(${b}) + ${b}^2`);
      steps.push(`= (${a} + ${b})^2`);
      steps.push(`= ${a + b}^2 = ${(a + b) * (a + b)}`);
    } else if (currentLaw === 'gcf') {
      const g = gcdN(a, b);
      if (g === 1) {
        steps.push(`\\gcd(${a},${b}) = 1 \\text{, nothing to extract.}`);
      } else {
        steps.push(`\\gcd(${a}, ${b}) = ${g}`);
        steps.push(`${a} + ${b} = ${g} \\cdot ${a / g} + ${g} \\cdot ${b / g}`);
        steps.push(`= ${g}(${a / g} + ${b / g}) = ${g} \\cdot ${a / g + b / g} = ${a + b}`);
      }
    }
    return steps;
  }, [currentLaw, lawInputs]);

  const lawsExplainBlocks = useMemo(() => {
    const e = explanations.laws;
    const d = e.descriptions[currentLaw];
    if (!d) return [];
    return [
      { title: d.title, content: d.intuition },
      { title: e.whyTitle, content: d.why, formulas: [d.example] },
      { title: e.mistakeTitle, insights: [{ kind: 'danger', title: d.mistake.title, body: d.mistake.body }] }
    ];
  }, [explanations, currentLaw]);

  /* =====================================================================
     GCD/LCM MODE — computed
     ===================================================================== */

  const gcdRes = useMemo(() => {
    const a = parseInt10(aGcd), b = parseInt10(bGcd);
    if (isNaN(a) || isNaN(b) || a < 1 || b < 1) return { valid: false, a, b };
    const pfA = primeFactors(a);
    const pfB = primeFactors(b);
    const g = gcdN(a, b);
    const l = lcmN(a, b);
    return {
      valid: true,
      a, b, pfA, pfB, g, l,
      pfG: primeFactors(g),
      pfL: primeFactors(l),
      coprime: g === 1
    };
  }, [aGcd, bGcd]);

  const gcdExplainBlocks = useMemo(() => {
    const e = explanations.gcd;
    const r = gcdRes;
    if (!r.valid) {
      return [{ title: e.sectionTitles.intro, content: e.introWhenEmpty }];
    }
    const blocks = [];
    const pfAStr = r.pfA.length === 0 ? '1' : pfLatex(r.pfA, r.a);
    const pfBStr = r.pfB.length === 0 ? '1' : pfLatex(r.pfB, r.b);
    const pfGStr = r.pfG.length === 0 ? '1' : pfLatex(r.pfG, r.g);
    const pfLStr = r.pfL.length === 0 ? '1' : pfLatex(r.pfL, r.l);

    blocks.push({
      title: e.sectionTitles.readingFactorizations,
      content: e.readingFactorizationsText,
      formulas: [
        `${r.a} = ${pfAStr}`,
        `${r.b} = ${pfBStr}`
      ]
    });
    blocks.push({
      title: e.sectionTitles.theRule,
      content: e.ruleText,
      formulas: [
        `\\gcd(${r.a}, ${r.b}) = ${pfGStr} = ${r.g}`,
        `\\mathrm{lcm}(${r.a}, ${r.b}) = ${pfLStr} = ${r.l}`
      ]
    });
    blocks.push({
      title: e.sectionTitles.theIdentity,
      content: e.identityText,
      formulas: [`${r.a} \\cdot ${r.b} = ${r.a * r.b} = ${r.g} \\cdot ${r.l}`]
    });
    if (r.coprime) {
      blocks.push({
        title: e.sectionTitles.coprime,
        insights: [{ kind: 'success', title: e.coprimeFlag.title, body: `${e.coprimeText} $${r.a} \\cdot ${r.b} = ${r.l}$.` }]
      });
    }
    return blocks;
  }, [explanations, gcdRes]);

  /* =====================================================================
     HANDLERS
     ===================================================================== */

  const pushHistory = useCallback(() => {
    const r = factorRes;
    if (r.status !== 'composite' && r.status !== 'prime') return;
    setHistory(prev => {
      const i = prev.findIndex(h => h.n === r.n);
      let next = prev;
      if (i !== -1) next = [...prev.slice(0, i), ...prev.slice(i + 1)];
      next = [...next, { n: r.n, pf: r.pf || primeFactors(r.n) }];
      if (next.length > 8) next = next.slice(next.length - 8);
      return next;
    });
  }, [factorRes]);

  const handleChipClick = useCallback(v => {
    setN(String(v));
    setTimeout(() => pushHistory(), 0);
  }, [pushHistory]);

  const handleReset = useCallback(() => {
    setFtype('prime');
    setN('60');
  }, []);

  const handleCopy = useCallback(async (key, value) => {
    try { await navigator.clipboard.writeText(value); }
    catch (e) {
      try {
        const ta = document.createElement('textarea');
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      } catch (_) {}
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(k => (k === key ? null : k)), 1400);
  }, []);

  const updateLawField = useCallback((law, field, value) => {
    setLawInputs(prev => ({ ...prev, [law]: { ...prev[law], [field]: value } }));
  }, []);

  /* =====================================================================
     EXPLAIN BLOCK RENDERER
     ===================================================================== */

  const renderExplainBlocks = (blocks) => (
    blocks.map((block, i) => (
      <div key={i} className="explain-block">
        {block.title && <h3 className="explain-title">{block.title}</h3>}
        {block.content && <div className="explain-text">{processContent(block.content)}</div>}
        {block.formulas && block.formulas.map((f, fi) => (
          <div key={fi} className="explain-formula">{processContent(`$${f}$`)}</div>
        ))}
        {block.insights && block.insights.map((ins, ii) => (
          <div key={ii} className={`insight ${ins.kind || ''}`}>
            <div className="insight-title">{ins.title}</div>
            <div className="insight-body">{processContent(ins.body)}</div>
          </div>
        ))}
      </div>
    ))
  );

  /* =====================================================================
     RENDER
     ===================================================================== */

  const primesSet = useMemo(() => new Set((factorRes.pf || []).map(pe => pe[0])), [factorRes]);
  const pairs = useMemo(
    () => (factorRes.status === 'composite' ? factorPairs(factorRes.n) : []),
    [factorRes]
  );

  const explainBlocks =
    mode === 'factor' ? factorExplainBlocks
    : mode === 'laws' ? lawsExplainBlocks
    : gcdExplainBlocks;

  return (
    <div className="fc-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="page">

        <div className="mode-tabs">
          <button className={`mode-tab ${mode === 'factor' ? 'is-active' : ''}`} onClick={() => setMode('factor')}>Factor</button>
          <button className={`mode-tab ${mode === 'laws'   ? 'is-active' : ''}`} onClick={() => setMode('laws')}>Laws</button>
          <button className={`mode-tab ${mode === 'gcd'    ? 'is-active' : ''}`} onClick={() => setMode('gcd')}>GCD &amp; LCM</button>
        </div>

        <div className="main-grid">

          {/* LEFT COLUMN */}
          <div className="left-col">

            {/* ===== FACTOR ===== */}
            <div className={`mode-panel ${mode === 'factor' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Factor a number</div>
                <div className="card-body">

                  <div className="type-row">
                    <span className="type-label">View</span>
                    <div className="type-pills">
                      <button className={`type-pill ${ftype === 'prime'    ? 'is-active' : ''}`} onClick={() => setFtype('prime')}>Prime</button>
                      <button className={`type-pill ${ftype === 'complete' ? 'is-active' : ''}`} onClick={() => setFtype('complete')}>Complete</button>
                      <button className={`type-pill ${ftype === 'tree'     ? 'is-active' : ''}`} onClick={() => setFtype('tree')}>Tree</button>
                    </div>
                  </div>

                  <div className="chips-row">
                    <div className="chips-list">
                      {(CHIPS_BY_TYPE[ftype] || []).map(v => (
                        <button
                          key={v}
                          className={`chip ${parseInt10(n) === v ? 'is-active' : ''}`}
                          onClick={() => handleChipClick(v)}
                        >{v}</button>
                      ))}
                    </div>
                  </div>

                  <div className="input-row">
                    <label>Number</label>
                    <input
                      className="slot-input n"
                      value={n}
                      onChange={(e) => setN(e.target.value)}
                      inputMode="numeric"
                    />
                  </div>

                  <div className={`expr-display ${exprDisplay.placeholder ? 'placeholder' : ''}`}>
                    {exprDisplay.placeholder
                      ? exprDisplay.text
                      : processContent(`$${exprDisplay.latex}$`)}
                  </div>

                  <div className="actions">
                    <button className="btn btn-primary"   onClick={pushHistory}>Add to history</button>
                    <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
                  </div>

                </div>
              </section>

              <section className="card">
                <div className="card-header">Result</div>
                <div className="card-body" style={{ padding: 0 }}>
                  <div className="result">
                    <div className="result-eyebrow">{resultEyebrow}</div>
                    <div className="result-primary">
                      {resultPrimary
                        ? processContent(`$${resultPrimary}$`)
                        : <span style={{ color: 'var(--ms-text-muted)', fontSize: '1rem' }}>&mdash;</span>}
                    </div>

                    <div className="result-forms">
                      {resultForms.map((f, i) => {
                        const key = `form-${i}`;
                        const isCopied = copiedKey === key;
                        const copyVal = f.copy != null ? f.copy : (f.value || '');
                        const showCopy = f.value || f.math;
                        return (
                          <div className="result-form" key={key}>
                            {showCopy && (
                              <button
                                className={`result-form-copy ${isCopied ? 'is-copied' : ''}`}
                                type="button"
                                aria-label={`Copy ${f.label}`}
                                onClick={() => handleCopy(key, copyVal)}
                              >
                                {isCopied ? CHECK_ICON : COPY_ICON}
                              </button>
                            )}
                            <div className="result-form-label">{f.label}</div>
                            {f.math
                              ? <div className="result-form-value">{processContent(`$${f.math}$`)}</div>
                              : <div className="result-form-value">{f.value}</div>}
                          </div>
                        );
                      })}
                    </div>

                    {ftype === 'complete' && factorRes.status === 'composite' && (
                      <>
                        <div className="divisors-block">
                          <div className="divisors-label">All divisors (prime ones highlighted, click to set)</div>
                          <div className="divisors-grid">
                            {factorRes.divisors.map(d => (
                              <button
                                key={d}
                                className={`divisor-chip ${primesSet.has(d) ? 'prime' : ''}`}
                                onClick={() => { setN(String(d)); setTimeout(() => pushHistory(), 0); }}
                              >{d}</button>
                            ))}
                          </div>
                        </div>
                        <div className="divisors-block">
                          <div className="divisors-label">Factor pairs</div>
                          <div className="pairs-grid">
                            {pairs.map((p, i) => (
                              <div key={i} className="pair-chip">{p[0]} \u00D7 {p[1]}</div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {ftype === 'tree' && treeStruct && (
                      <div className="tree-wrap">
                        <div className="tree-label">Factor tree</div>
                        <svg className="tree-svg" viewBox={`0 0 ${treeStruct.W} ${treeStruct.H}`} preserveAspectRatio="xMidYMid meet">
                          {treeStruct.edges.map((edge, i) => (
                            <line
                              key={`e${i}`}
                              className="tree-edge"
                              x1={edge.x1} y1={edge.y1 + 12}
                              x2={edge.x2} y2={edge.y2 - 12}
                            />
                          ))}
                          {treeStruct.nodes.map((node, i) => {
                            const w = String(node.value).length * 10 + 18;
                            return (
                              <g key={`n${i}`}>
                                <rect
                                  className={`tree-node-bg ${node.prime ? 'prime' : ''}`}
                                  x={node.x - w / 2} y={node.y - 12}
                                  width={w} height={24} rx={6}
                                />
                                <text
                                  className={`tree-node ${node.prime ? 'prime' : ''}`}
                                  x={node.x} y={node.y + 5}
                                  textAnchor="middle"
                                >{node.value}</text>
                              </g>
                            );
                          })}
                        </svg>
                      </div>
                    )}

                    <div className="neighbors">
                      <div className="neighbors-label">Neighbors (click to set)</div>
                      <div className="neighbors-grid">
                        {neighbors.map(nb => (
                          <div
                            key={nb.off}
                            className={`neighbor ${nb.off === 0 ? 'is-current' : ''}`}
                            onClick={() => { setN(String(nb.n)); setTimeout(() => pushHistory(), 0); }}
                          >
                            <div className="neighbor-label">{nb.n}</div>
                            <div className="neighbor-value">{nb.badge}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="history-strip" hidden={history.length === 0}>
                      <div className="history-label">Recent</div>
                      <div className="history-chips">
                        {[...history].reverse().map((h, i) => (
                          <div
                            key={`${h.n}-${i}`}
                            className="history-chip"
                            onClick={() => setN(String(h.n))}
                          >
                            {processContent(`$${h.n} = ${h.pf.length === 0 ? String(h.n) : pfLatex(h.pf, h.n)}$`)}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>

            {/* ===== LAWS ===== */}
            <div className={`mode-panel ${mode === 'laws' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">Apply a factoring pattern</div>
                <div className="card-body">

                  <div className="rule-list">
                    {explanations.laws.list.map(law => (
                      <button
                        key={law.id}
                        className={`rule-pill ${currentLaw === law.id ? 'is-active' : ''}`}
                        onClick={() => setCurrentLaw(law.id)}
                      >
                        <span className="rule-name">{law.name}</span>
                        <span className="rule-formula">{processContent(`$${law.formula}$`)}</span>
                      </button>
                    ))}
                  </div>

                  <div className="rule-display">
                    {processContent(`$${lawDisplayLatex}$`)}
                  </div>

                  <div className="rule-inputs">
                    <label>a</label>
                    <input
                      className="slot-input law"
                      value={lawInputs[currentLaw].a}
                      onChange={(e) => updateLawField(currentLaw, 'a', e.target.value)}
                      inputMode="numeric"
                    />
                    <label>b</label>
                    <input
                      className="slot-input law"
                      value={lawInputs[currentLaw].b}
                      onChange={(e) => updateLawField(currentLaw, 'b', e.target.value)}
                      inputMode="numeric"
                    />
                  </div>

                  <div className="rule-steps">
                    <div className="rule-steps-label">Step-by-step</div>
                    {lawSteps.map((s, i) => (
                      <div className="rule-step" key={i}>
                        <div className="rule-step-num">{i + 1}</div>
                        <div className="rule-step-text">{processContent(`$${s}$`)}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </section>
            </div>

            {/* ===== GCD / LCM ===== */}
            <div className={`mode-panel ${mode === 'gcd' ? 'is-active' : ''}`}>
              <section className="card">
                <div className="card-header">GCD &amp; LCM</div>
                <div className="card-body">

                  <div className="compare-inputs">
                    <div className="compare-side">
                      <div className="compare-side-label">Number A</div>
                      <input
                        className="slot-input cmp"
                        value={aGcd}
                        onChange={(e) => setAGcd(e.target.value)}
                        inputMode="numeric"
                      />
                      <div className="compare-side-fact">
                        {gcdRes.valid
                          ? processContent(`$${gcdRes.a} = ${gcdRes.pfA.length === 0 ? '1' : pfLatex(gcdRes.pfA, gcdRes.a)}$`)
                          : <span style={{ color: 'var(--ms-text-muted)' }}>enter a positive integer</span>}
                      </div>
                    </div>
                    <div className="compare-vs">&amp;</div>
                    <div className="compare-side">
                      <div className="compare-side-label">Number B</div>
                      <input
                        className="slot-input cmp"
                        value={bGcd}
                        onChange={(e) => setBGcd(e.target.value)}
                        inputMode="numeric"
                      />
                      <div className="compare-side-fact">
                        {gcdRes.valid
                          ? processContent(`$${gcdRes.b} = ${gcdRes.pfB.length === 0 ? '1' : pfLatex(gcdRes.pfB, gcdRes.b)}$`)
                          : <span style={{ color: 'var(--ms-text-muted)' }}>enter a positive integer</span>}
                      </div>
                    </div>
                  </div>

                  {gcdRes.valid && gcdRes.coprime && (
                    <div className="coprime-flag">
                      <div className="coprime-flag-label">Coprime</div>
                      <div>
                        {processContent(`${gcdRes.a} and ${gcdRes.b} ${explanations.gcd.coprimeFlag.body} $\\gcd(${gcdRes.a}, ${gcdRes.b}) = 1$.`)}
                      </div>
                    </div>
                  )}

                  {gcdRes.valid && (
                    <div className="gcd-lcm-result">
                      <div className="gcd-lcm-card gcd">
                        <div className="gcd-lcm-label">GCD</div>
                        <div className="gcd-lcm-value">
                          {processContent(`$\\gcd = ${gcdRes.pfG.length === 0 ? '1' : pfLatex(gcdRes.pfG, gcdRes.g)} = ${gcdRes.g}$`)}
                        </div>
                      </div>
                      <div className="gcd-lcm-card lcm">
                        <div className="gcd-lcm-label">LCM</div>
                        <div className="gcd-lcm-value">
                          {processContent(`$\\mathrm{lcm} = ${gcdRes.pfL.length === 0 ? '1' : pfLatex(gcdRes.pfL, gcdRes.l)} = ${gcdRes.l}$`)}
                        </div>
                      </div>
                      <div className="gcd-lcm-card identity">
                        <div className="gcd-lcm-label">a \u00B7 b = gcd \u00B7 lcm</div>
                        <div className="gcd-lcm-value">
                          {processContent(`$${gcdRes.a} \\cdot ${gcdRes.b} = ${gcdRes.g} \\cdot ${gcdRes.l} = ${gcdRes.a * gcdRes.b}$`)}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </section>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="right-col">
            <section className="card">
              <div className="card-header">How this works</div>
              <div className="card-body">
                {renderExplainBlocks(explainBlocks)}
              </div>
            </section>

            {mode === 'factor' && referenceRows.length > 0 && (
              <section className="card">
                <div className="card-header">Nearby numbers</div>
                <div className="card-body" style={{ padding: 0 }}>
                  <table className="ref-table">
                    <thead>
                      <tr><th>n</th><th>Prime factorization</th><th>div #</th></tr>
                    </thead>
                    <tbody>
                      {referenceRows.map(row => (
                        <tr
                          key={row.n}
                          className={row.isCurrent ? 'is-current' : ''}
                          onClick={() => { setN(String(row.n)); setTimeout(() => pushHistory(), 0); }}
                        >
                          <td>{row.n}</td>
                          <td>
                            {processContent(`$${row.latex}$`)}
                            {row.isPrime && <span className="badge">prime</span>}
                          </td>
                          <td>{row.divCount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}