
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import VerticalSidebarFrame from '@/app/components/vertical-buttons/VerticalBarGroupFrame';

export default function MathSymbolsAlgebraPage({ symbolsData, meta, menuItems }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side="right"
        sidebarWidth="45px"
        panelWidth="300px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />
      <h1 className="title" style={{ marginTop: '0px' }}>
        {meta.pageHeading}
      </h1>
      <br />
      <br />

      <VerticalSidebarFrame
        sidebarPosition='left'
        sidebarWidth='200px'
        gap='10px'
        sidebar={
          <VerticalButtonGroup
            items={menuItems}
            width="200px"
            isSticky={true}
            verticalOffset='220px'
          />}
        mainContent={
          <DataWrapper data={symbolsData} />
        }
      />
    </>
  );
}

export async function getStaticProps() {

  const menuItems = [
    {
      title: "Set Theory",
      link: "/math-symbols/set-theory"
    },
    {
      title: "Linear Algebra",
      link: "/math-symbols/linear-algebra"
    },
    {
      title: "Mathematical Logic",
      link: "/math-symbols/math-logic"
    },
    {
      title: "Calculus",
      link: "/math-symbols/calculus"
    },
    {
      title: "Trigonometry",
      link: "/math-symbols/trigonometry"
    },
    {
      title: "Combinatorics",
      link: "/math-symbols/combinatorics"
    },
    {
      title: "Probability",
      link: "/math-symbols/probability"
    },
    {
      title: "Complex Numbers",
      link: "/math-symbols/complex-numbers"
    },
    {
      title: "Functions",
      link: "/math-symbols/functions"
    },
    {
      title: "Arithmetic",
      link: "/math-symbols/arithmetic"
    },
  ];

  const meta = {
    title: 'Algebra Symbols & Notation | Algebra Symbols Chart',
    description:
      'Complete reference of algebra notation: exponents and powers, roots and radicals, logarithms, polynomials, equations, inequalities, and sequences — each symbol with its LaTeX code and explanation.',
    keywords: [
      'math symbols',
      'algebra symbols',
      'algebra notation',
      'exponent notation',
      'radical symbol',
      'logarithm notation',
      'polynomial notation',
      'discriminant symbol',
      'inequality symbols',
      'sequence notation',
      'summation symbol',
      'LaTeX',
      'LaTeX code'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/algebra',
    pageHeading: 'Algebra Symbols',
  };

  const symbolsData = {
    "exponents_and_powers": [
      {"symbol": "aⁿ", "latex_code": "a^n", "explanation": "Base a raised to exponent n — for a [natural exponent](!/algebra/powers/natural-exponents), n factors of a multiplied together"},
      {"symbol": "a⁰ = 1", "latex_code": "a^0 = 1", "explanation": "The [zero power](!/algebra/powers/zero-powers) — equals 1 for every a ≠ 0; 0⁰ is left undefined in most conventions"},
      {"symbol": "a⁻ⁿ", "latex_code": "a^{-n}", "explanation": "[Negative exponent](!/algebra/powers/negative-exponents) — the reciprocal 1/aⁿ; the minus flips, it never makes the result negative"},
      {"symbol": "a^(m/n)", "latex_code": "a^{m/n}", "explanation": "[Rational exponent](!/algebra/powers/rational-exponents) — the n-th root of aᵐ; denominator is the root, numerator the power"},
      {"symbol": "aˣ", "latex_code": "a^x", "explanation": "[Exponential function](!/algebra/powers/exponential-functions) — the exponent is the variable; contrast xⁿ, where the base varies"}
    ],
    "roots_and_radicals": [
      {"symbol": "√a", "latex_code": "\\sqrt{a}", "explanation": "The principal [square root](!/algebra/roots) — the non-negative solution only; the ± is supplied separately when solving equations"},
      {"symbol": "ⁿ√a", "latex_code": "\\sqrt[n]{a}", "explanation": "The [n-th root](!/algebra/roots/properties) — index n written in the crook of the radical; index 2 is left unwritten"},
      {"symbol": "√(a²) = |a|", "latex_code": "\\sqrt{a^2} = |a|", "explanation": "[Simplifying](!/algebra/roots/simplifying) an even root of a power produces an absolute value, not a bare a"},
      {"symbol": "a^(1/n) = ⁿ√a", "latex_code": "a^{1/n} = \\sqrt[n]{a}", "explanation": "The bridge between radical and [rational-exponent](!/algebra/roots/rational-exponents) notation — one object, two spellings"}
    ],
    "logarithms": [
      {"symbol": "log_b x", "latex_code": "\\log_b x", "explanation": "The [logarithm](!/algebra/logarithms) base b of x — the exponent b needs to reach x; defined for b > 0, b ≠ 1, x > 0"},
      {"symbol": "ln x", "latex_code": "\\ln x", "explanation": "The [natural logarithm](!/algebra/logarithms/common-natural) — base e; the default in calculus and the sciences"},
      {"symbol": "log x", "latex_code": "\\log x", "explanation": "Base-10 in school texts and engineering; base-e in advanced mathematics — the [convention depends on the field](!/algebra/logarithms/common-natural); European texts write lg for base-10"},
      {"symbol": "log_b x = y ⇔ bʸ = x", "latex_code": "\\log_b x = y \\iff b^y = x", "explanation": "The defining equivalence — every logarithmic statement is an exponential statement read backwards"}
    ],
    "polynomials": [
      {"symbol": "P(x) = aₙxⁿ + … + a₀", "latex_code": "P(x) = a_n x^n + \\cdots + a_1 x + a_0", "explanation": "General [polynomial](!/algebra/polynomials) — coefficients subscripted by the power they multiply; aₙ ≠ 0 is the leading coefficient"},
      {"symbol": "deg P", "latex_code": "\\deg P", "explanation": "The degree of the polynomial — the highest power with a nonzero coefficient"},
      {"symbol": "P(r) = 0", "latex_code": "P(r) = 0", "explanation": "r is a [root](!/algebra/polynomials/roots) (zero) of P — evaluating at r returns zero"},
      {"symbol": "(x − r)", "latex_code": "(x - r)", "explanation": "The linear [factor](!/algebra/polynomials/factoring) paired to the root r — the factor theorem links the two notations"}
    ],
    "equations_and_solution_sets": [
      {"symbol": "ax + b = 0", "latex_code": "ax + b = 0", "explanation": "General [linear equation](!/algebra/equations/linear) — a, b are fixed coefficients, x the unknown; the letter roles are conventional, not intrinsic"},
      {"symbol": "ax² + bx + c = 0", "latex_code": "ax^2 + bx + c = 0", "explanation": "General [quadratic equation](!/algebra/equations/quadratic) in standard form, a ≠ 0"},
      {"symbol": "x = (−b ± √D)/2a", "latex_code": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}", "explanation": "The quadratic formula — the ± packs both solutions into one line; expand it to two before substituting"},
      {"symbol": "D = b² − 4ac", "latex_code": "D = b^2 - 4ac", "explanation": "The discriminant — also written Δ; its sign counts the real solutions (two, one, or none)"},
      {"symbol": "|x| = a", "latex_code": "|x| = a", "explanation": "[Absolute value equation](!/algebra/equations/absolute-value) — splits into x = a or x = −a when a > 0"},
      {"symbol": "x ∈ {2, 5}", "latex_code": "x \\in \\{2, 5\\}", "explanation": "Solution set notation — the solutions listed as a set rather than as separate equations"}
    ],
    "inequalities_and_intervals": [
      {"symbol": "< ≤ > ≥", "latex_code": "< \\; \\leq \\; > \\; \\geq", "explanation": "Strict and inclusive [inequality](!/algebra/inequalities) signs — the bar under the symbol admits equality"},
      {"symbol": "a < x < b", "latex_code": "a < x < b", "explanation": "Chained inequality — two conditions at once; both signs must point the same way ([linear inequalities](!/algebra/inequalities/linear))"},
      {"symbol": "|x| < a ⇔ −a < x < a", "latex_code": "|x| < a \\iff -a < x < a", "explanation": "[Absolute value inequality](!/algebra/inequalities/absolute-value) — less-than gives a band; |x| > a gives the two outer rays instead"},
      {"symbol": "(−∞, −1) ∪ (2, ∞)", "latex_code": "(-\\infty, -1) \\cup (2, \\infty)", "explanation": "Solution written in interval notation — unions capture the disconnected solution sets typical of [rational inequalities](!/algebra/inequalities/rational)"}
    ],
    "sequences_and_series": [
      {"symbol": "aₙ", "latex_code": "a_n", "explanation": "The n-th term of a [sequence](!/algebra/sequences) — the subscript is the position, not a multiplier"},
      {"symbol": "{aₙ}", "latex_code": "\\{a_n\\}", "explanation": "The sequence as a whole object, braces around the general term"},
      {"symbol": "d", "latex_code": "d", "explanation": "Common difference of an [arithmetic sequence](!/algebra/sequences/arithmetic) — aₙ₊₁ − aₙ, constant throughout"},
      {"symbol": "r", "latex_code": "r", "explanation": "Common ratio of a [geometric sequence](!/algebra/sequences/geometric) — aₙ₊₁ / aₙ, constant throughout"},
      {"symbol": "Sₙ", "latex_code": "S_n", "explanation": "Partial sum — the first n terms added; the subscript counts how many"},
      {"symbol": "Σ aₖ", "latex_code": "\\sum_{k=1}^{n} a_k", "explanation": "Summation notation — k runs from the lower bound to the upper, adding a term each step"},
      {"symbol": "Fₙ", "latex_code": "F_n", "explanation": "The n-th [Fibonacci number](!/algebra/sequences/fibonacci) — capital F is reserved for this sequence by convention"}
    ]
  };

  return {
    props: {
      symbolsData,
      meta,
      menuItems
    },
  };
}
