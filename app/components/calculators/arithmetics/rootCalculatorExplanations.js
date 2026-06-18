// rootCalculatorExplanations.js
//
// Default static content for the right-side explanation panel of
// <RootCalculator />. Override individual fields by passing an
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

    describeOperation(x, idx, val, status, h) {
      const { fmt, isPerfectNthPower, simplifyRadical } = h;
      const idxPart = idx === 2 ? '' : `[${idx}]`;

      if (status === 'incomplete') {
        return `<p class="explain-text">Enter a number to see the root broken down.</p>`;
      }
      if (status === 'imaginary') {
        const imag = Math.sqrt(Math.abs(x));
        return `<p class="explain-text">An even root of a negative number has no real value. ${math('\\sqrt{' + x + '}')} would be ${math(imag + 'i')} in complex numbers.</p>`;
      }
      if (status === 'overflow') {
        return `<p class="explain-text">The result is too large for the calculator to represent.</p>`;
      }

      const perfect = (Number.isInteger(x) && x >= 0) ? isPerfectNthPower(x, idx) : null;
      const s = (Number.isInteger(x) && x > 0) ? simplifyRadical(x, idx) : null;

      if (perfect != null) {
        const powerWord = idx === 2 ? 'square' : idx === 3 ? 'cube' : idx + 'th power';
        return `<p class="explain-text">${x} is a perfect ${powerWord}: ${math(perfect + '^{' + idx + '} = ' + x)}.</p>
                <div class="explain-formula">${math('\\sqrt' + idxPart + '{' + x + '} = ' + perfect)}</div>`;
      }
      if (s && s.coef > 1 && s.radicand > 1) {
        return `<p class="explain-text">${x} factors out as ${math(s.coef + '^{' + idx + '} \\cdot ' + s.radicand)}, so the root simplifies.</p>
                <div class="explain-formula">${math('\\sqrt' + idxPart + '{' + x + '} = ' + s.coef + '\\sqrt' + idxPart + '{' + s.radicand + '} \\approx ' + fmt(val))}</div>`;
      }
      const noPerfect = idx === 2 ? 'square' : idx === 3 ? 'cube' : idx + 'th power';
      return `<p class="explain-text">${x} is not a perfect ${noPerfect}, so the root is irrational.</p>
              <div class="explain-formula">${math('\\sqrt' + idxPart + '{' + x + '} \\approx ' + fmt(val))}</div>`;
    },

    detectInsights(x, idx, val, status, h) {
      const insights = [];
      if (status !== 'ok') return insights;

      if (Number.isInteger(x) && x === 0) {
        insights.push({
          kind: 'info',
          title: 'Root of zero',
          body: 'Every root of 0 is 0.'
        });
      }
      if (Number.isInteger(x) && x === 1) {
        insights.push({
          kind: 'info',
          title: 'Root of one',
          body: 'Every root of 1 is 1.'
        });
      }
      if (idx === 2 && Number.isInteger(x) && x > 1 && h.isPerfectNthPower(x, 2) == null) {
        insights.push({
          title: 'Irrational',
          body: `${math('\\sqrt{' + x + '}')} cannot be written as a fraction of two integers. The decimal goes on forever without repeating.`
        });
      }
      if (idx === 3 && x < 0) {
        insights.push({
          kind: 'info',
          title: 'Negative cube root is fine',
          body: `Odd-index roots of negative numbers are defined: ${math('\\sqrt[3]{' + x + '} = ' + (-Math.pow(Math.abs(x), 1/3)).toFixed(4))}.`
        });
      }
      if (Number.isInteger(x) && x > 1 && idx > 1) {
        const simp = h.simplifyRadical(x, idx);
        if (simp && simp.coef > 1 && simp.radicand > 1) {
          insights.push({
            kind: 'info',
            title: 'Simplification possible',
            body: `Pulling perfect ${idx === 2 ? 'square' : idx + 'th power'} factors out makes the radical cleaner: ${math('\\sqrt' + (idx === 2 ? '' : '[' + idx + ']') + '{' + x + '} = ' + simp.coef + '\\sqrt' + (idx === 2 ? '' : '[' + idx + ']') + '{' + simp.radicand + '}')}.`
          });
        }
      }
      return insights;
    },

    conceptExplanation(idx, h) {
      if (idx === 2) {
        return `<p class="explain-text">The square root of <em>x</em> asks: what number, multiplied by itself, gives <em>x</em>? Formally, ${math('\\sqrt{x} = y')} means ${math('y^2 = x')} with ${math('y \\ge 0')}.</p>`;
      }
      if (idx === 3) {
        return `<p class="explain-text">The cube root of <em>x</em> is the number that, raised to the third power, gives <em>x</em>: ${math('\\sqrt[3]{x} = y \\iff y^3 = x')}. Unlike square roots, cube roots of negative numbers are defined.</p>`;
      }
      return `<p class="explain-text">The ${idx}th root of <em>x</em> is the number that, raised to the ${idx}th power, gives <em>x</em>: ${math('\\sqrt[' + idx + ']{x} = y \\iff y^{' + idx + '} = x')}. Equivalently, ${math('\\sqrt[' + idx + ']{x} = x^{1/' + idx + '}')}.</p>`;
    }
  },

  /* ============ LAWS MODE ============ */
  laws: {
    list: [
      { id: 'product',      name: 'Product rule',     formula: '\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{a \\cdot b}' },
      { id: 'quotient',     name: 'Quotient rule',    formula: '\\dfrac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\dfrac{a}{b}}' },
      { id: 'power-root',   name: 'Power of a root',  formula: '\\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m} = a^{m/n}' },
      { id: 'nested',       name: 'Nested radicals',  formula: '\\sqrt[n]{\\sqrt[m]{a}} = \\sqrt[n \\cdot m]{a}' },
      { id: 'rationalize',  name: 'Rationalize',      formula: '\\dfrac{1}{\\sqrt[n]{a}} = \\dfrac{\\sqrt[n]{a^{n-1}}}{a}' },
      { id: 'exp-form',     name: 'Exponent form',    formula: '\\sqrt[n]{a} = a^{1/n}' }
    ],
    descriptions: {
      'product': {
        title: 'Product rule',
        intuition: `When you multiply two radicals with the <strong>same index</strong>, you can combine them into one radical of the product.`,
        why: `Both sides equal ${math('a^{1/n} \\cdot b^{1/n}')}, which by the exponent product rule equals ${math('(ab)^{1/n}')}.`,
        example: '\\sqrt{12} \\cdot \\sqrt{3} = \\sqrt{36} = 6'
      },
      'quotient': {
        title: 'Quotient rule',
        intuition: `When you divide two radicals with the <strong>same index</strong>, you can combine them into one radical of the quotient.`,
        why: `Same idea as the product rule, applied to division: ${math('\\dfrac{a^{1/n}}{b^{1/n}} = \\left(\\dfrac{a}{b}\\right)^{1/n}')}.`,
        example: '\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{25} = 5'
      },
      'power-root': {
        title: 'Power of a root',
        intuition: `Raising a radical to a power, or rooting a power &mdash; same thing. Convert to fractional exponents and the operation is transparent.`,
        why: `Both sides equal ${math('a^{m/n}')} by the exponent power rule.`,
        example: '\\left(\\sqrt[3]{8}\\right)^2 = 8^{2/3} = 4'
      },
      'nested': {
        title: 'Nested radicals',
        intuition: `A radical inside a radical multiplies the indices.`,
        why: `${math('\\sqrt[n]{\\sqrt[m]{a}} = (a^{1/m})^{1/n} = a^{1/(mn)} = \\sqrt[mn]{a}')}.`,
        example: '\\sqrt{\\sqrt[3]{64}} = \\sqrt[6]{64} = 2'
      },
      'rationalize': {
        title: 'Rationalize denominator',
        intuition: `Multiply numerator and denominator by something that turns the radical denominator into a whole number.`,
        why: `For ${math('\\dfrac{1}{\\sqrt[n]{a}}')}, multiply by ${math('\\dfrac{\\sqrt[n]{a^{n-1}}}{\\sqrt[n]{a^{n-1}}}')} &mdash; the denominator becomes ${math('\\sqrt[n]{a^n} = a')}.`,
        example: '\\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}'
      },
      'exp-form': {
        title: 'Exponent form',
        intuition: `Radicals are just fractional exponents.`,
        why: `This is the definition: ${math('\\sqrt[n]{a} = a^{1/n}')}. All the other rules follow from the exponent rules applied to ${math('1/n')}.`,
        example: '\\sqrt[3]{8} = 8^{1/3} = 2'
      }
    },
    commonMistakes: {
      'product': {
        title: 'Indices must match',
        body: `${math('\\sqrt[3]{a} \\cdot \\sqrt{b}')} does <em>not</em> combine into a single radical &mdash; the indices are different. Convert both to exponent form first.`
      },
      'quotient': {
        title: 'Indices must match',
        body: `Same as the product rule: ${math('\\dfrac{\\sqrt[3]{a}}{\\sqrt{b}}')} cannot be combined directly. Use a common index first.`
      },
      'power-root': {
        title: 'Don&apos;t confuse the indices',
        body: `${math('\\left(\\sqrt[n]{a}\\right)^m')} is <em>not</em> the same as ${math('\\sqrt[m]{a^n}')}. The exponent on the radical goes inside the radical (over the same index), not out into a new index.`
      },
      'nested': {
        title: 'Multiply, don&apos;t add the indices',
        body: `${math('\\sqrt[n]{\\sqrt[m]{a}} \\neq \\sqrt[n+m]{a}')}. The fractional exponents ${math('1/m')} and ${math('1/n')} multiply, not add.`
      },
      'rationalize': {
        title: 'Multiply by 1 only',
        body: `Whatever you multiply the denominator by, multiply the numerator by the same thing. Otherwise you&apos;ve changed the value, not just rewritten it.`
      },
      'exp-form': {
        title: 'The exponent is fractional',
        body: `${math('\\sqrt[n]{a} = a^{1/n}')}, not ${math('a^n')} or ${math('a/n')}. The defining trait of a radical is a fractional exponent with 1 in the numerator.`
      }
    }
  },

  /* ============ COMPARE MODE ============ */
  compare: {
    intro: {
      title: 'What you&apos;re comparing',
      body: 'Two radicals, each with its own index and radicand. The decimal values give a definitive answer; the interesting bit is <em>how</em> to compare without a calculator.'
    },
    sameIndex(ai, ar, br, h) {
      const cmp = ar > br ? '>' : ar < br ? '<' : '=';
      return {
        title: 'Same index — easy',
        body: `Both expressions share index <strong>${ai}</strong>. When indices match, just compare the radicands directly: larger radicand &rArr; larger root.`,
        formula: `\\sqrt[${ai}]{${ar}} \\text{ vs } \\sqrt[${ai}]{${br}} \\;\\Rightarrow\\; ${ar} ${cmp} ${br}`
      };
    },
    diffIndices(ai, ar, bi, br, va, vb, h) {
      const L = h.lcm(ai, bi);
      const eA = L / ai, eB = L / bi;
      const newAr = Math.pow(ar, eA);
      const newBr = Math.pow(br, eB);
      const tail = newAr > newBr ? `${newAr} &gt; ${newBr}, so A is larger.` :
                   newAr < newBr ? `${newAr} &lt; ${newBr}, so B is larger.` :
                   'they are equal.';
      return {
        title: 'Different indices — use a common index',
        intro: `Take the least common multiple of the two indices, ${ai} and ${bi}, which is <strong>${L}</strong>. Rewrite both radicals with index ${L}, then compare radicands.`,
        formulas: [
          `\\sqrt[${ai}]{${ar}} = \\sqrt[${L}]{${ar}^{${eA}}} = \\sqrt[${L}]{${newAr}}`,
          `\\sqrt[${bi}]{${br}} = \\sqrt[${L}]{${br}^{${eB}}} = \\sqrt[${L}]{${newBr}}`
        ],
        footer: `Now compare ${newAr} vs ${newBr}: ${tail}`
      };
    },
    sizeOfDifference(va, vb, h) {
      const { fmt } = h;
      if (Math.abs(va - vb) < 1e-9) {
        return { title: 'Size of the difference', body: 'The two values are equal.' };
      }
      const ratio = va > vb ? va / vb : vb / va;
      if (ratio < 1.5) {
        return {
          title: 'Size of the difference',
          body: `The two values are close &mdash; within a factor of about ${fmt(ratio, { fixed: 2 })}.`
        };
      }
      return {
        title: 'Size of the difference',
        body: `One is roughly ${fmt(ratio, { fixed: 2 })}× the other &mdash; a meaningful gap.`
      };
    }
  }
};

export default defaultExplanations;