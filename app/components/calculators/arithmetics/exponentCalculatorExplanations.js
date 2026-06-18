// /* =====================================================================
//    Default explanations for the Exponent Calculator.

//    Everything that renders on the right panel and does not depend on
//    live user input lives here. The component imports this as its default
//    and a parent page (via getStaticProps) can override any branch.

//    All text fields go through the project's processContent utility, so
//    they can contain inline math ($...$), bold (**...**), bullets (lines
//    starting with - or •), and links (markdown-style [text](url) per
//    processContent's behaviour).

//    `formula` and `example` fields are pure LaTeX strings (no $),
//    rendered directly with the math renderer in display mode.
//    ===================================================================== */

// const defaultExplanations = {

//   /* ------------------------------------------------------------------
//      POWER mode — static "About this operation" block per power type.
//      ------------------------------------------------------------------ */
//   power: {
//     square: {
//       text: `When you square a number, you multiply it by itself. In mathematical notation, this is written as $x^2$.

// For example:
// - $5^2 = 5 \\times 5 = 25$
// - $2.5^2 = 2.5 \\times 2.5 = 6.25$
// - $(-3)^2 = (-3) \\times (-3) = 9$

// Remember that when squaring a negative number, the result is always positive because negative times negative is positive.

// This calculator can handle both integer and decimal numbers, and will display the result in standard notation for manageable numbers or scientific notation ($1.234e+10$) for very large or small results.`,
//       links: [
//         { title: 'Explore Exponents Table Page', link: '/tables/arithmetics/exponential-table' },
//         { title: 'See Table of Integer Numbers Exponents (Powers)', link: '/tables/arithmetics/powers-table' }
//       ]
//     },

//     cube: {
//       text: `Cubing a number means multiplying it by itself three times. In mathematical notation, this is written as $x^3$.

// For example:
// - $2^3 = 2 \\times 2 \\times 2 = 8$
// - $(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$
// - $1.5^3 = 1.5 \\times 1.5 \\times 1.5 = 3.375$

// Unlike squares, when cubing a negative number, the result is negative because negative times negative times negative is negative.

// The calculator automatically handles any precision issues and will format very large results ($1000^3 = 1e+9$) in scientific notation for better readability.`,
//       links: []
//     },

//     custom: {
//       text: `Custom powers allow you to raise a number to any power (exponent). The mathematical notation is $x^n$ where:
// - $x$ is your base number
// - $n$ is your chosen power

// Some examples:
// - $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$
// - $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9} \\approx 0.1111$
// - $5^{2.5} = 5^2 \\times \\sqrt{5} \\approx 55.9017$

// **Important rules**:
// - Positive numbers can be raised to any power
// - Negative numbers can only be raised to integer powers (whole numbers)
// - For negative bases with even powers, the result is positive
// - For negative bases with odd powers, the result is negative
// - Zero raised to a positive power is always 0
// - Zero raised to zero or negative powers is undefined

// The calculator uses high-precision arithmetic and will automatically format results in scientific notation when they become very large ($2^{100} = 1.2676e+30$) or very small ($2^{-50} = 8.8818e-16$).`,
//       links: []
//     }
//   },

//   /* ------------------------------------------------------------------
//      RULES mode — one entry per rule. Each entry powers both the rule
//      selector pill on the left (title, formula) and the right-panel
//      description (title, intuition, why, example, mistake).
//      ------------------------------------------------------------------ */
//   rules: {
//     product: {
//       title: 'Product rule',
//       formula: 'b^m \\cdot b^n = b^{m+n}',
//       intuition: `When you multiply two powers with the **same base**, you can collapse them into one by **adding the exponents**.`,
//       why: `Think about what the exponents mean: $b^m$ is m copies of b multiplied together, $b^n$ is n copies. Together you have m + n copies. That is the rule.`,
//       example: 'b^3 \\cdot b^2 = (b \\cdot b \\cdot b)(b \\cdot b) = b^5',
//       mistake: {
//         title: 'Do not multiply the exponents',
//         body: `$b^m \\cdot b^n \\neq b^{m \\cdot n}$. You **add** when you multiply same-base powers; you **multiply** when you raise a power to a power.`
//       }
//     },

//     quotient: {
//       title: 'Quotient rule',
//       formula: '\\dfrac{b^m}{b^n} = b^{m-n}',
//       intuition: `When you divide two powers with the **same base**, **subtract the exponents**.`,
//       why: `Each shared factor in numerator and denominator cancels. If you have m copies on top and n copies on the bottom, you are left with m − n copies after cancellation.`,
//       example: '\\dfrac{b^5}{b^2} = \\dfrac{b \\cdot b \\cdot b \\cdot b \\cdot b}{b \\cdot b} = b^3',
//       mistake: {
//         title: 'The bases must match',
//         body: `$\\dfrac{2^5}{3^2}$ does **not** simplify to $(2/3)^{5-2}$. The quotient rule only works when numerator and denominator share the same base.`
//       }
//     },

//     power: {
//       title: 'Power of a power',
//       formula: '(b^m)^n = b^{m \\cdot n}',
//       intuition: `When a power is raised to another power, **multiply the exponents**.`,
//       why: `$(b^m)^n$ means n copies of $b^m$ multiplied together. Each copy contributes m factors of b, so total factors = $m \\times n$.`,
//       example: '(b^2)^3 = b^2 \\cdot b^2 \\cdot b^2 = b^{2+2+2} = b^6',
//       mistake: {
//         title: 'Do not add the exponents',
//         body: `$(b^m)^n \\neq b^{m+n}$. Adding is for the product rule, not the power-of-a-power.`
//       }
//     },

//     'product-power': {
//       title: 'Product to a power',
//       formula: '(a \\cdot b)^n = a^n \\cdot b^n',
//       intuition: `When a product is raised to a power, **distribute the exponent** to each factor.`,
//       why: `$(a \\cdot b)^n$ is n copies of $(a \\cdot b)$. Each copy contributes one a and one b, so n total a's and n total b's.`,
//       example: '(2 \\cdot 3)^4 = 2^4 \\cdot 3^4 = 16 \\cdot 81 = 1296',
//       mistake: {
//         title: 'Distribution does not work over addition',
//         body: `$(a + b)^n \\neq a^n + b^n$. The exponent only distributes over multiplication, not addition. $(a + b)^n$ needs the binomial theorem.`
//       }
//     },

//     'quotient-power': {
//       title: 'Quotient to a power',
//       formula: '\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}',
//       intuition: `When a fraction is raised to a power, **distribute the exponent** to numerator and denominator.`,
//       why: `Same logic as the product rule, applied to division: every factor in numerator and denominator gets raised separately.`,
//       example: '\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}',
//       mistake: {
//         title: 'Distribution does not work over subtraction',
//         body: `$(a - b)^n \\neq a^n - b^n$. As with addition, the exponent distributes only over multiplication and division.`
//       }
//     },

//     negative: {
//       title: 'Negative exponent',
//       formula: 'b^{-n} = \\dfrac{1}{b^n}',
//       intuition: `A negative exponent flips the base into a **reciprocal**.`,
//       why: `This follows from the quotient rule. $\\dfrac{b^0}{b^n} = b^{0-n} = b^{-n}$. And $\\dfrac{b^0}{b^n} = \\dfrac{1}{b^n}$. So they have to be equal.`,
//       example: 'b^{-3} = \\dfrac{1}{b^3}',
//       mistake: {
//         title: 'The base does not become negative',
//         body: `$2^{-3} = \\dfrac{1}{8}$, not $-8$. A negative exponent makes a reciprocal, not a negative number.`
//       }
//     },

//     zero: {
//       title: 'Zero exponent',
//       formula: 'b^0 = 1',
//       intuition: `Any **non-zero** number raised to the power 0 equals 1.`,
//       why: `Forced by the quotient rule: $\\dfrac{b^n}{b^n} = 1$ and $\\dfrac{b^n}{b^n} = b^{n-n} = b^0$. So $b^0 = 1$.`,
//       example: '5^0 = 1, \\quad (-7)^0 = 1, \\quad 0^0 = \\text{undefined}',
//       mistake: {
//         title: "The base matters when it is zero",
//         body: `Every non-zero base to the 0 power is 1. But $0^0$ is undefined in general — the limit depends on how you approach it.`
//       }
//     }
//   },

//   /* ------------------------------------------------------------------
//      COMPARE mode — static prose for each of the three explanation
//      blocks. Dynamic order-of-magnitude analysis stays in the component.
//      ------------------------------------------------------------------ */
//   compare: {
//     intro: `Two powers, each with its own base and exponent. The interesting comparison is not just "which is bigger" — it is **how much** bigger, and **why**.`,
//     sameBase: `When the bases match, just compare the exponents directly. If the base is greater than 1, the larger exponent gives the larger result. If the base is between 0 and 1, the larger exponent gives the **smaller** result.`,
//     diffBase: `Taking $\\log_{10}$ of both sides turns exponents into multipliers, making them easy to compare without computing the full values. Whichever log is larger corresponds to the larger original value. This is how you compare powers that are too big to compute directly.`
//   }
// };

// export default defaultExplanations;


// exponentCalculatorExplanations.js
//
// Default static content for the right-side explanation panel of
// <ExponentCalculator />. Override individual fields by passing an
// `explanations` prop to the component. Any field not supplied falls
// back to these defaults (deep-merged).

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function math(latex) {
  return `<span data-math="${escAttr(latex)}"></span>`;
}

const defaultExplanations = {
  /* ============ POWER MODE ============ */
  power: {
    sectionTitles: {
      whatHappened: 'What just happened',
      worthKnowing: 'Worth knowing',
      concept: 'The concept'
    },

    describeOperation(base, exp, result, status, h) {
      const { fmt, fractionFromDecimal } = h;
      if (status === 'incomplete') {
        return `<p class="explain-text">Enter a base and an exponent to see the computation broken down.</p>`;
      }
      if (status === 'undefined') {
        if (base === 0 && exp === 0) {
          return `<p class="explain-text"><code>0<sup>0</sup></code> is conventionally undefined for general real-number calculation. The limit depends on the path of approach: combinatorics defines it as 1, calculus treats it as indeterminate.</p>`;
        }
        return `<p class="explain-text"><code>0<sup>${exp}</sup></code> with a negative exponent is undefined &mdash; it would require dividing by zero.</p>`;
      }
      if (status === 'complex') {
        return `<p class="explain-text">A negative base with a non-integer exponent gives a complex number. For example, <code>(-1)<sup>1/2</sup> = i</code>. This calculator only displays real-number results.</p>`;
      }
      if (status === 'overflow') {
        return `<p class="explain-text">The result is too large for the calculator to represent (overflows to infinity). Try a smaller exponent.</p>`;
      }
      if (Number.isInteger(exp) && exp > 0 && exp <= 5) {
        const expanded = Array(exp).fill(base).join(' \\cdot ');
        return `<p class="explain-text">You multiplied <strong>${base}</strong> by itself <strong>${exp}</strong> times.</p>
                <div class="explain-formula">${math(`${base}^{${exp}} = ${expanded} = ${fmt(result)}`)}</div>`;
      }
      if (exp === 0) {
        return `<p class="explain-text">Any non-zero number raised to the power 0 equals 1.</p>
                <div class="explain-formula">${math(`${base}^0 = 1`)}</div>`;
      }
      if (exp < 0 && Number.isInteger(exp)) {
        return `<p class="explain-text">A negative exponent flips the base into a reciprocal.</p>
                <div class="explain-formula">${math(`${base}^{${exp}} = \\dfrac{1}{${base}^{${-exp}}} = \\dfrac{1}{${Math.pow(base, -exp)}}`)}</div>`;
      }
      if (!Number.isInteger(exp)) {
        const frac = fractionFromDecimal(exp);
        if (frac && frac.den < 100) {
          return `<p class="explain-text">A fractional exponent means &quot;take the root, then raise to the power&quot;.</p>
                  <div class="explain-formula">${math(`${base}^{${exp}} = \\sqrt[${frac.den}]{${base}^{${frac.num}}} = ${fmt(result)}`)}</div>`;
        }
        return `<div class="explain-formula">${math(`${base}^{${exp}} = ${fmt(result)}`)}</div>`;
      }
      return `<div class="explain-formula">${math(`${base}^{${exp}} = ${fmt(result)}`)}</div>`;
    },

    detectInsights(base, exp, result, status, h) {
      const insights = [];
      if (status !== 'ok') return insights;

      if (base < 0 && Number.isInteger(exp)) {
        if (exp % 2 === 0) {
          insights.push({
            kind: 'info',
            title: 'Negative base, even exponent → positive result',
            body: `${math(`(${base})^{${exp}} = ${Math.pow(base, exp)}`)}. The parentheses matter: ${math(`-${Math.abs(base)}^{${exp}}`)} would equal ${math(`${-Math.pow(Math.abs(base), exp)}`)}, because the exponent binds tighter than the unary minus.`
          });
        } else {
          insights.push({
            kind: 'info',
            title: 'Negative base, odd exponent → negative result',
            body: `An odd number of negative factors gives a negative product.`
          });
        }
      }
      if (isFinite(result) && Math.abs(result) >= 1e9) {
        insights.push({
          title: 'Large result',
          body: `Displayed in scientific notation for readability. Exponents grow numbers fast &mdash; each step multiplies, it doesn&apos;t add.`
        });
      }
      if (isFinite(result) && result !== 0 && Math.abs(result) < 1e-4) {
        insights.push({
          title: 'Very small result',
          body: `Close to zero but not zero. Scientific notation keeps the significant digits visible.`
        });
      }
      if (base === 1) {
        insights.push({
          kind: 'info',
          title: 'Base 1',
          body: `1 raised to any power is always 1. The exponent has no effect.`
        });
      }
      if (base === -1 && Number.isInteger(exp)) {
        insights.push({
          kind: 'info',
          title: 'Base −1 alternates sign',
          body: `${math('(-1)^n')} is +1 for even n, −1 for odd n.`
        });
      }
      return insights;
    },

    conceptExplanation(base, exp, h) {
      if (isNaN(base) || isNaN(exp)) {
        return `<p class="explain-text">An exponent tells you how many times to multiply a number (the base) by itself.</p>`;
      }
      if (Number.isInteger(exp) && exp > 0) {
        return `<p class="explain-text">For a positive integer exponent <em>n</em>, <code>b<sup>n</sup></code> means &quot;multiply b by itself n times.&quot; This is the original definition; the rules below extend it consistently to other exponents.</p>`;
      }
      if (exp === 0) {
        return `<p class="explain-text">The rule <code>b<sup>0</sup> = 1</code> isn&apos;t arbitrary. Since ${math('\\dfrac{b^n}{b^n} = 1')} and ${math('\\dfrac{b^n}{b^n} = b^{n-n} = b^0')}, we need <code>b<sup>0</sup> = 1</code> for the exponent rules to stay consistent.</p>`;
      }
      if (exp < 0) {
        return `<p class="explain-text">Negative exponents are reciprocals: ${math('b^{-n} = \\dfrac{1}{b^n}')}. The same consistency argument that fixes <code>b<sup>0</sup></code> at 1 forces this definition.</p>`;
      }
      if (!Number.isInteger(exp)) {
        return `<p class="explain-text">A fractional exponent ${math('p/q')} means: take the q-th root, then raise to the p-th power. So ${math('b^{2/3} = \\sqrt[3]{b^2}')}.</p>`;
      }
      return `<p class="explain-text">Exponentiation extends from repeated multiplication to any real exponent through the exponential function.</p>`;
    }
  },

  /* ============ RULES MODE ============ */
  rules: {
    list: [
      { id: 'product',         name: 'Product rule',         formula: 'b^m \\cdot b^n = b^{m+n}' },
      { id: 'quotient',        name: 'Quotient rule',        formula: '\\dfrac{b^m}{b^n} = b^{m-n}' },
      { id: 'power',           name: 'Power of a power',     formula: '(b^m)^n = b^{m \\cdot n}' },
      { id: 'product-power',   name: 'Product to a power',   formula: '(a \\cdot b)^n = a^n \\cdot b^n' },
      { id: 'quotient-power',  name: 'Quotient to a power',  formula: '\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}' },
      { id: 'negative',        name: 'Negative exponent',    formula: 'b^{-n} = \\dfrac{1}{b^n}' },
      { id: 'zero',            name: 'Zero exponent',        formula: 'b^0 = 1' }
    ],
    descriptions: {
      'product': {
        title: 'Product rule',
        intuition: `When you multiply two powers with the <strong>same base</strong>, you can collapse them into one by <strong>adding the exponents</strong>.`,
        why: `Think about what the exponents mean: ${math('b^m')} is m copies of b multiplied together, ${math('b^n')} is n copies. Together you have m + n copies. That&apos;s the rule.`,
        example: 'b^3 \\cdot b^2 = (b \\cdot b \\cdot b)(b \\cdot b) = b^5'
      },
      'quotient': {
        title: 'Quotient rule',
        intuition: `When you divide two powers with the <strong>same base</strong>, <strong>subtract the exponents</strong>.`,
        why: `Each shared factor in numerator and denominator cancels. If you have m copies on top and n copies on bottom, you&apos;re left with m − n copies after cancellation.`,
        example: '\\dfrac{b^5}{b^2} = \\dfrac{b \\cdot b \\cdot b \\cdot b \\cdot b}{b \\cdot b} = b^3'
      },
      'power': {
        title: 'Power of a power',
        intuition: `When a power is raised to another power, <strong>multiply the exponents</strong>.`,
        why: `${math('(b^m)^n')} means n copies of ${math('b^m')} multiplied together. Each copy contributes m factors of b, so total factors = m × n.`,
        example: '(b^2)^3 = b^2 \\cdot b^2 \\cdot b^2 = b^{2+2+2} = b^6'
      },
      'product-power': {
        title: 'Product to a power',
        intuition: `When a product is raised to a power, <strong>distribute the exponent</strong> to each factor.`,
        why: `${math('(a \\cdot b)^n')} is n copies of (a · b). Each copy contributes one a and one b, so n total a&apos;s and n total b&apos;s.`,
        example: '(2 \\cdot 3)^4 = 2^4 \\cdot 3^4 = 16 \\cdot 81 = 1296'
      },
      'quotient-power': {
        title: 'Quotient to a power',
        intuition: `When a fraction is raised to a power, <strong>distribute the exponent</strong> to numerator and denominator.`,
        why: `Same logic as the product rule, applied to division: every factor in numerator and denominator gets raised separately.`,
        example: '\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}'
      },
      'negative': {
        title: 'Negative exponent',
        intuition: `A negative exponent flips the base into a <strong>reciprocal</strong>.`,
        why: `This follows from the quotient rule. ${math('\\dfrac{b^0}{b^n} = b^{0-n} = b^{-n}')}. And ${math('\\dfrac{b^0}{b^n} = \\dfrac{1}{b^n}')}. So they have to be equal.`,
        example: 'b^{-3} = \\dfrac{1}{b^3}'
      },
      'zero': {
        title: 'Zero exponent',
        intuition: `Any <strong>non-zero</strong> number raised to the power 0 equals 1.`,
        why: `Forced by the quotient rule: ${math('\\dfrac{b^n}{b^n} = 1')} and ${math('\\dfrac{b^n}{b^n} = b^{n-n} = b^0')}. So ${math('b^0 = 1')}.`,
        example: '5^0 = 1, \\quad (-7)^0 = 1, \\quad 0^0 = \\text{undefined}'
      }
    },
    commonMistakes: {
      'product': {
        title: 'Don&apos;t multiply the exponents',
        body: `${math('b^m \\cdot b^n \\neq b^{m \\cdot n}')}. You add when you multiply same-base powers; you multiply when you raise a power to a power.`
      },
      'quotient': {
        title: 'The bases must match',
        body: `${math('\\dfrac{2^5}{3^2}')} does <em>not</em> simplify to ${math('(2/3)^{5-2}')}. The quotient rule only works when numerator and denominator share the same base.`
      },
      'power': {
        title: 'Don&apos;t add the exponents',
        body: `${math('(b^m)^n \\neq b^{m+n}')}. Adding is for the product rule, not the power-of-a-power.`
      },
      'product-power': {
        title: 'Distribution does <em>not</em> work over addition',
        body: `${math('(a + b)^n \\neq a^n + b^n')}. The exponent only distributes over multiplication, not addition. ${math('(a + b)^n')} needs the binomial theorem.`
      },
      'quotient-power': {
        title: 'Distribution does <em>not</em> work over subtraction',
        body: `${math('(a - b)^n \\neq a^n - b^n')}. As with addition, the exponent distributes only over multiplication and division.`
      },
      'negative': {
        title: 'The base doesn&apos;t become negative',
        body: `${math('2^{-3} = \\dfrac{1}{8}')}, not ${math('-8')}. A negative exponent makes a reciprocal, not a negative number.`
      },
      'zero': {
        title: 'The base matters when it&apos;s zero',
        body: `Every non-zero base to the 0 power is 1. But ${math('0^0')} is undefined in general &mdash; the limit depends on how you approach it.`
      }
    },
    mismatchTitle: 'Bases don&apos;t match',
    mismatchBody: (ruleName, b1, b2) =>
      `The ${ruleName} only applies when both bases are identical. Currently they are <strong>${b1}</strong> and <strong>${b2}</strong>. Make them equal to see the rule applied.`
  },

  /* ============ COMPARE MODE ============ */
  compare: {
    intro: {
      title: 'What you&apos;re comparing',
      body: 'Two powers, each with its own base and exponent. The interesting comparison isn&apos;t just &quot;which is bigger&quot; &mdash; it&apos;s <em>how much</em> bigger, and <em>why</em>.'
    },
    sameBase(ba, ea, eb, h) {
      const cmp = ea > eb ? '>' : ea < eb ? '<' : '=';
      return {
        title: 'Same base — easy',
        body: `Both expressions share base <strong>${ba}</strong>. When the bases match, just compare the exponents directly (assuming base &gt; 1; if base is between 0 and 1, the larger exponent gives the <em>smaller</em> result).`,
        formula: `${ba}^{${ea}} \\text{ vs } ${ba}^{${eb}} \\;\\Rightarrow\\; ${ea} ${cmp} ${eb}`
      };
    },
    diffBases(ba, ea, bb, eb, va, vb, h) {
      const { fmt } = h;
      const logA = ea * Math.log10(ba);
      const logB = eb * Math.log10(bb);
      return {
        title: 'Different bases — use logarithms',
        intro: `Taking ${math('\\log_{10}')} of both sides turns exponents into multipliers, making them easy to compare without computing the full values:`,
        formulas: [
          `\\log(${ba}^{${ea}}) = ${ea} \\cdot \\log(${ba}) \\approx ${fmt(logA, { fixed: 3 })}`,
          `\\log(${bb}^{${eb}}) = ${eb} \\cdot \\log(${bb}) \\approx ${fmt(logB, { fixed: 3 })}`
        ],
        footer: 'Whichever log is larger corresponds to the larger original value. This is how you compare powers that are too big to compute directly.'
      };
    },
    ordersOfMagnitude(va, vb, h) {
      const om = Math.abs(Math.log10(va) - Math.log10(vb));
      let omInsight;
      if (om < 0.5) {
        omInsight = 'The two are within the same order of magnitude &mdash; comparable in size.';
      } else if (om < 1.5) {
        omInsight = 'They differ by about an order of magnitude (factor of ~10).';
      } else if (om < 3) {
        omInsight = `They differ by ~${Math.round(om)} orders of magnitude &mdash; one is ~${Math.pow(10, Math.round(om))}× the other.`;
      } else {
        omInsight = `They differ by ${Math.round(om)} orders of magnitude. This is the regime where exponential growth makes intuition fail.`;
      }
      return {
        title: 'Orders of magnitude',
        paragraphs: [
          omInsight,
          'An &quot;order of magnitude&quot; is a factor of 10. Scientists compare large quantities this way because the raw numbers become unwieldy.'
        ]
      };
    }
  }
};

export default defaultExplanations;