// logarithmCalculatorExplanations.js
//
// Default static content for the right-side explanation panel of
// <LogarithmCalculator />. Override individual fields by passing an
// `explanations` prop to the component. Any field not supplied falls
// back to these defaults (deep-merged).

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function math(latex) {
  return `<span data-math="${escAttr(latex)}"></span>`;
}

const defaultExplanations = {
  /* ============ CALCULATE MODE ============ */
  calculate: {
    sectionTitles: {
      whatHappened: 'What just happened',
      worthKnowing: 'Worth knowing',
      concept: 'The concept'
    },

    describeOperation(x, base, btype, val, status, h) {
      const { fmt, isPerfectLog, baseLatex, logLatex } = h;
      const baseStr = baseLatex(btype, fmt(base));

      if (status === 'incomplete') {
        return `<p class="explain-text">Enter an argument to see the logarithm broken down.</p>`;
      }
      if (status === 'invalid-arg') {
        return `<p class="explain-text">Logarithms are only defined for positive arguments. ${math(logLatex(btype, baseStr, fmt(x)))} has no real value.</p>`;
      }
      if (status === 'invalid-base') {
        return `<p class="explain-text">The base must be positive and not equal to 1. Base 1 fails because ${math('1^y = 1')} for every <em>y</em>, so the equation ${math('1^y = x')} has no solution unless <em>x</em> is also 1.</p>`;
      }
      if (status === 'overflow') {
        return `<p class="explain-text">Result is too large to display.</p>`;
      }

      const perfect = isPerfectLog(x, base);
      if (perfect != null) {
        return `<p class="explain-text">${baseStr} to the power ${perfect} equals ${fmt(x)}, so the logarithm is exactly ${perfect}.</p>
                <div class="explain-formula">${math(baseStr + '^{' + perfect + '} = ' + fmt(x) + ' \\;\\Longleftrightarrow\\; ' + logLatex(btype, baseStr, fmt(x)) + ' = ' + perfect)}</div>`;
      }
      return `<p class="explain-text">${fmt(x)} is not an integer power of ${baseStr}, so the logarithm is irrational.</p>
              <div class="explain-formula">${math(logLatex(btype, baseStr, fmt(x)) + ' \\approx ' + fmt(val))}</div>`;
    },

    detectInsights(x, base, btype, val, status, h) {
      const insights = [];
      if (status !== 'ok') return insights;
      const { fmt, isPerfectLog, baseLatex, logLatex } = h;
      const baseStr = baseLatex(btype, fmt(base));

      if (x === 1) {
        insights.push({
          kind: 'info',
          title: 'Log of 1',
          body: `${math(logLatex(btype, baseStr, '1'))} = 0 for any base &mdash; ${baseStr}<sup>0</sup> = 1.`
        });
      }
      if (Math.abs(x - base) < 1e-10) {
        insights.push({
          kind: 'info',
          title: 'Log of the base',
          body: `${math(logLatex(btype, baseStr, baseStr))} = 1. The log of the base, in that same base, is always 1.`
        });
      }
      if (x > 0 && x < 1) {
        insights.push({
          title: 'Negative result',
          body: `Arguments between 0 and 1 give negative logs &mdash; ${baseStr} needs a <em>negative</em> exponent to reach ${fmt(x)}.`
        });
      }
      if (isPerfectLog(x, base) == null && btype !== 'ln') {
        insights.push({
          kind: 'info',
          title: 'How computers do this',
          body: `Calculators don&apos;t evaluate ${math('\\log_{' + baseStr + '}')} directly. They compute ${math('\\ln(' + fmt(x) + ')')} and ${math('\\ln(' + baseStr + ')')} and divide.`
        });
      }
      return insights;
    },

    conceptExplanation(btype, baseStr, h) {
      if (btype === 'ln') {
        return `<p class="explain-text">The natural logarithm answers: to what power must <em>e</em> ≈ 2.7183 be raised to get <em>x</em>? ${math('\\ln(x) = y \\iff e^y = x')}. It&apos;s the inverse of the exponential function ${math('e^x')}, which makes it the natural choice for growth and decay problems where the rate of change is proportional to the value.</p>`;
      }
      return `<p class="explain-text">A logarithm asks the inverse of an exponent: what power do I raise the base to, to get this number? Formally, ${math(`\\log_{${baseStr}}(x) = y \\iff ${baseStr}^y = x`)}.</p>`;
    }
  },

  /* ============ LAWS MODE ============ */
  laws: {
    list: [
      { id: 'product',    name: 'Product rule',     formula: '\\log_b(xy) = \\log_b(x) + \\log_b(y)' },
      { id: 'quotient',   name: 'Quotient rule',    formula: '\\log_b\\!\\left(\\dfrac{x}{y}\\right) = \\log_b(x) - \\log_b(y)' },
      { id: 'power',      name: 'Power rule',       formula: '\\log_b(x^n) = n \\cdot \\log_b(x)' },
      { id: 'changeBase', name: 'Change of base',   formula: '\\log_b(x) = \\dfrac{\\log_a(x)}{\\log_a(b)}' },
      { id: 'identity',   name: 'Log of base',      formula: '\\log_b(b) = 1' },
      { id: 'logOne',     name: 'Log of one',       formula: '\\log_b(1) = 0' },
      { id: 'inverse',    name: 'Inverse pair',     formula: '\\log_b(b^x) = x' }
    ],
    descriptions: {
      product: {
        title: 'Product rule',
        intuition: `The log of a product is the sum of the logs. Multiplying inside the log becomes addition outside.`,
        why: `Write ${math('x = b^p')} and ${math('y = b^q')}. Then ${math('xy = b^{p+q}')}, so ${math('\\log_b(xy) = p + q = \\log_b(x) + \\log_b(y)')}.`,
        example: '\\log_2(4 \\cdot 8) = \\log_2(32) = 5 = 2 + 3'
      },
      quotient: {
        title: 'Quotient rule',
        intuition: `The log of a quotient is the difference of the logs. Division inside becomes subtraction outside.`,
        why: `Same approach as the product rule: if ${math('x = b^p')} and ${math('y = b^q')}, then ${math('x/y = b^{p-q}')}.`,
        example: '\\log_2(32/4) = \\log_2(8) = 3 = 5 - 2'
      },
      power: {
        title: 'Power rule',
        intuition: `Logs turn exponents into multipliers. This is what makes logs useful for solving exponential equations.`,
        why: `If ${math('x = b^p')}, then ${math('x^n = b^{np}')}, so ${math('\\log_b(x^n) = np = n \\cdot \\log_b(x)')}.`,
        example: '\\log_2(4^3) = 3 \\cdot \\log_2(4) = 3 \\cdot 2 = 6'
      },
      changeBase: {
        title: 'Change of base',
        intuition: `Any logarithm can be rewritten in terms of any other base. This is how calculators compute logs in unusual bases.`,
        why: `Let ${math('y = \\log_b(x)')}, so ${math('b^y = x')}. Take ${math('\\log_a')} of both sides: ${math('y \\cdot \\log_a(b) = \\log_a(x)')}.`,
        example: '\\log_8(64) = \\dfrac{\\log_2(64)}{\\log_2(8)} = \\dfrac{6}{3} = 2'
      },
      identity: {
        title: 'Log of the base',
        intuition: `The log of a base, in that same base, is always 1. Because ${math('b^1 = b')}.`,
        why: `Definition: ${math('\\log_b(b) = y')} means ${math('b^y = b')}, which requires ${math('y = 1')}.`,
        example: '\\log_5(5) = 1, \\;\\; \\ln(e) = 1'
      },
      logOne: {
        title: 'Log of one',
        intuition: `The log of 1 is 0 in every base. Because ${math('b^0 = 1')} for any nonzero ${math('b')}.`,
        why: `Definition: ${math('\\log_b(1) = y')} means ${math('b^y = 1')}, which (for ${math('b > 0')}, ${math('b \\ne 1')}) gives ${math('y = 0')}.`,
        example: '\\log_5(1) = 0, \\;\\; \\log_{10}(1) = 0'
      },
      inverse: {
        title: 'Inverse pair',
        intuition: `Logarithms and exponentials undo each other. Applying ${math('\\log_b')} to ${math('b^x')} gives back ${math('x')}; raising ${math('b')} to the power ${math('\\log_b(x)')} gives back ${math('x')}.`,
        why: `This is the definition of inverse functions, applied to the pair ${math('f(x) = b^x')} and ${math('g(x) = \\log_b(x)')}.`,
        example: '\\log_2(2^5) = 5, \\;\\; 2^{\\log_2(16)} = 16'
      }
    },
    commonMistakes: {
      product: {
        title: 'log(x + y) ≠ log(x) + log(y)',
        body: `The product rule does <em>not</em> say the log of a sum is the sum of logs. It says the log of a <em>product</em> is the sum: ${math('\\log_b(xy) = \\log_b(x) + \\log_b(y)')}. The log of ${math('x + y')} has no simple form.`
      },
      quotient: {
        title: 'Order matters',
        body: `${math('\\log_b(x/y) = \\log_b(x) - \\log_b(y)')}, not the other way around. The numerator&apos;s log goes first.`
      },
      power: {
        title: '(log x)² ≠ log(x²)',
        body: `Squaring a log is <em>not</em> the same as logging a square. ${math('(\\log_b x)^2')} multiplies the log by itself; ${math('\\log_b(x^2) = 2 \\log_b(x)')} doubles it.`
      },
      changeBase: {
        title: 'Don&apos;t drop the divisor',
        body: `Change of base gives a <em>ratio</em>: ${math('\\log_b(x) = \\dfrac{\\log_a(x)}{\\log_a(b)}')}. Forgetting the denominator is a common error &mdash; you can&apos;t just replace the base.`
      },
      identity: {
        title: 'Same base both places',
        body: `${math('\\log_b(b) = 1')} requires the subscript and argument to match. ${math('\\log_2(10)')} is not 1; it&apos;s about 3.32.`
      },
      logOne: {
        title: 'log(1) = 0, not 1',
        body: `Easy to confuse. The argument is 1, and 1 is the multiplicative identity, but log applies the <em>additive</em> identity, which is 0.`
      },
      inverse: {
        title: 'Bases must match',
        body: `${math('\\log_2(3^x)')} is not just ${math('x')} &mdash; the bases don&apos;t match. By the power rule it becomes ${math('x \\cdot \\log_2(3)')}.`
      }
    }
  },

  /* ============ COMPARE MODE ============ */
  compare: {
    intro: {
      title: 'What you are comparing',
      body: 'Two logarithms, each with its own base and argument. The decimal values are the definitive answer; the interesting bit is the relationship between them.'
    },
    sameBase(a, b, h) {
      const { fmt, logb } = h;
      const cmp = a.x > b.x ? '>' : a.x < b.x ? '<' : '=';
      return {
        title: 'Same base — compare the arguments',
        body: `Both logs share base <strong>${a.b}</strong>. Larger argument means larger log; the difference is the log of the ratio.`,
        formula: `\\log_{${a.b}}(${a.x}) - \\log_{${a.b}}(${b.x}) = \\log_{${a.b}}\\!\\left(\\dfrac{${a.x}}{${b.x}}\\right) = ${fmt(logb(a.x / b.x, a.b), 4)}`,
        footer: `${a.x} ${cmp} ${b.x}, so A ${a.val > b.val ? '&gt;' : a.val < b.val ? '&lt;' : '='} B.`
      };
    },
    sameArg(a, b, h) {
      return {
        title: 'Same argument — smaller base wins (for x &gt; 1)',
        body: `Both logs share argument <strong>${a.x}</strong>. For arguments greater than 1, a smaller base produces a larger log &mdash; more multiplications are needed to reach the same number. For ${a.x} &lt; 1 the relationship flips.`,
        formula: `\\dfrac{\\log_{${a.b}}(${a.x})}{\\log_{${b.b}}(${a.x})} = \\dfrac{\\ln(${b.b})}{\\ln(${a.b})}`
      };
    },
    different(a, b, h) {
      const { fmt } = h;
      return {
        title: 'Different bases and arguments — go through ln',
        body: `When nothing matches, change of base to natural log is the cleanest path:`,
        formulas: [
          `\\text{A} = \\dfrac{\\ln(${a.x})}{\\ln(${a.b})} \\approx ${fmt(a.val, 4)}`,
          `\\text{B} = \\dfrac{\\ln(${b.x})}{\\ln(${b.b})} \\approx ${fmt(b.val, 4)}`
        ]
      };
    }
  }
};

export default defaultExplanations;