
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import VerticalSidebarFrame from '@/app/components/vertical-buttons/VerticalBarGroupFrame';

export default function MathSymbolsFunctionsPage({ symbolsData, meta, menuItems }) {
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
  ];

  const meta = {
    title: 'Function Notation Symbols | Functions Symbols Chart',
    description:
      'Complete reference of function notation: f(x), domain and range, interval notation, composition, inverse functions, piecewise braces — each with its LaTeX code and explanation.',
    keywords: [
      'math symbols',
      'function notation',
      'f(x) notation',
      'function symbols',
      'interval notation',
      'domain and range notation',
      'composition symbol',
      'inverse function notation',
      'piecewise notation',
      'LaTeX',
      'LaTeX code'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/functions',
    pageHeading: 'Functions Symbols',
  };

  const symbolsData = {
    "basic_function_notation": [
      {"symbol": "f(x)", "latex_code": "f(x)", "explanation": "The value of function f at input x — read 'f of x' ([function notation](!/functions/basics#5)); the parentheses do not indicate multiplication"},
      {"symbol": "y = f(x)", "latex_code": "y = f(x)", "explanation": "Output variable y defined by the rule f applied to x"},
      {"symbol": "f: A → B", "latex_code": "f\\colon A \\to B", "explanation": "Function f mapping the set A (domain) into the set B (codomain)"},
      {"symbol": "x ↦ f(x)", "latex_code": "x \\mapsto f(x)", "explanation": "'x maps to f(x)' — defines a function without naming its output variable"},
      {"symbol": "g(t), P(n)", "latex_code": "g(t), \\; P(n)", "explanation": "Any letters may name a function and its input; the choice often reflects context (t for time, n for integers)"},
      {"symbol": "f(a)", "latex_code": "f(a)", "explanation": "The output of f at a specific input a — e.g. f(3) is the value at x = 3"}
    ],
    "domain_and_range": [
      {"symbol": "Dom(f)", "latex_code": "\\operatorname{Dom}(f)", "explanation": "The [domain](!/functions/domain) of f — the set of allowed inputs"},
      {"symbol": "Ran(f)", "latex_code": "\\operatorname{Ran}(f)", "explanation": "The [range](!/functions/range) of f — the set of outputs actually produced"},
      {"symbol": "{x | x ≥ 0}", "latex_code": "\\{x \\mid x \\geq 0\\}", "explanation": "Set-builder notation: 'the set of all x such that x ≥ 0' ([expressing domain](!/functions/domain#2))"},
      {"symbol": "ℝ", "latex_code": "\\mathbb{R}", "explanation": "The set of all real numbers — the default universe for domains and ranges"},
      {"symbol": "x ∈ A", "latex_code": "x \\in A", "explanation": "x is an element of the set A"}
    ],
    "interval_notation": [
      {"symbol": "[a, b]", "latex_code": "[a, b]", "explanation": "Closed interval — both endpoints included"},
      {"symbol": "(a, b)", "latex_code": "(a, b)", "explanation": "Open interval — both endpoints excluded"},
      {"symbol": "[a, b)", "latex_code": "[a, b)", "explanation": "Half-open interval — a included, b excluded"},
      {"symbol": "(−∞, 3]", "latex_code": "(-\\infty, 3]", "explanation": "All numbers up to and including 3; infinity always takes a parenthesis"},
      {"symbol": "(−∞, −1) ∪ (1, ∞)", "latex_code": "(-\\infty, -1) \\cup (1, \\infty)", "explanation": "Union of intervals — a disconnected domain"},
      {"symbol": "∞", "latex_code": "\\infty", "explanation": "Infinity — an unbounded direction, not a reachable number"}
    ],
    "composition": [
      {"symbol": "(f ∘ g)(x)", "latex_code": "(f \\circ g)(x)", "explanation": "[Composition](!/functions/composition#2): apply g first, then f — equal to f(g(x))"},
      {"symbol": "∘", "latex_code": "\\circ", "explanation": "The composition symbol — read 'composed with'; in f ∘ g the right-hand function acts first"},
      {"symbol": "f(g(x))", "latex_code": "f(g(x))", "explanation": "Nested form of composition — evaluate from the inside out"}
    ],
    "inverse_functions": [
      {"symbol": "f⁻¹(x)", "latex_code": "f^{-1}(x)", "explanation": "The [inverse function](!/functions/inverse#2) of f — the superscript −1 is a label, not an exponent"},
      {"symbol": "(f(x))⁻¹", "latex_code": "(f(x))^{-1}", "explanation": "The reciprocal 1/f(x) — parentheses distinguish it from the inverse function"},
      {"symbol": "f⁻¹(f(x)) = x", "latex_code": "f^{-1}(f(x)) = x", "explanation": "The defining property: the inverse undoes the function"}
    ],
    "arithmetic_of_functions": [
      {"symbol": "(f + g)(x)", "latex_code": "(f + g)(x)", "explanation": "Sum of functions: equals f(x) + g(x) ([function arithmetic](!/functions/arithmetic))"},
      {"symbol": "(f − g)(x)", "latex_code": "(f - g)(x)", "explanation": "Difference of functions: equals f(x) − g(x)"},
      {"symbol": "(f · g)(x)", "latex_code": "(f \\cdot g)(x)", "explanation": "Product of functions: equals f(x) · g(x)"},
      {"symbol": "(f / g)(x)", "latex_code": "(f / g)(x)", "explanation": "Quotient of functions: equals f(x) / g(x), defined where g(x) ≠ 0"}
    ],
    "piecewise_functions": [
      {"symbol": "f(x) = { … cases …", "latex_code": "f(x) = \\begin{cases} x^2 & x < 0 \\\\ x + 1 & x \\geq 0 \\end{cases}", "explanation": "[Brace notation](!/functions/piecewise#2): each line pairs a formula with the condition under which it applies"},
      {"symbol": "1 ≤ x < 4", "latex_code": "1 \\leq x < 4", "explanation": "A typical piece condition — the conditions must be mutually exclusive"}
    ],
    "symmetry_and_periodicity": [
      {"symbol": "f(−x) = f(x)", "latex_code": "f(-x) = f(x)", "explanation": "Even function — graph symmetric about the y-axis"},
      {"symbol": "f(−x) = −f(x)", "latex_code": "f(-x) = -f(x)", "explanation": "Odd function — graph symmetric about the origin"},
      {"symbol": "f(x + T) = f(x)", "latex_code": "f(x + T) = f(x)", "explanation": "Periodic function with period T"}
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
