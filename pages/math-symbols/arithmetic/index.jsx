
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import VerticalSidebarFrame from '@/app/components/vertical-buttons/VerticalBarGroupFrame';

export default function MathSymbolsArithmeticPage({ symbolsData, meta, menuItems }) {
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
      title: "Functions",
      link: "/math-symbols/functions"
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
    title: 'Arithmetic Symbols | Arithmetic Notation Chart',
    description:
      'Complete reference of arithmetic notation: operation and comparison symbols, the divisibility bar, modular arithmetic, fraction forms, percent and decimals — each with its LaTeX code and explanation.',
    keywords: [
      'math symbols',
      'arithmetic symbols',
      'arithmetic notation',
      'divisibility notation',
      'modulo notation',
      'congruence symbol',
      'fraction notation',
      'comparison symbols',
      'LaTeX',
      'LaTeX code'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/arithmetic',
    pageHeading: 'Arithmetic Symbols',
  };

  const symbolsData = {
    "basic_operations": [
      {"symbol": "+", "latex_code": "+", "explanation": "Addition"},
      {"symbol": "−", "latex_code": "-", "explanation": "Subtraction; also negation of a single number"},
      {"symbol": "×", "latex_code": "\\times", "explanation": "Multiplication — common in elementary contexts"},
      {"symbol": "·", "latex_code": "\\cdot", "explanation": "Multiplication — preferred beyond elementary work, where × could be confused with the letter x ([properties of operations](!/arithmetic/properties))"},
      {"symbol": "ab", "latex_code": "ab", "explanation": "Juxtaposition — writing factors side by side also denotes multiplication"},
      {"symbol": "÷", "latex_code": "\\div", "explanation": "Division — an operation producing a quotient; contrast with the divisibility bar |"},
      {"symbol": "a / b", "latex_code": "a/b", "explanation": "Division written with a slash — the inline form of a fraction"},
      {"symbol": "±", "latex_code": "\\pm", "explanation": "Plus or minus — both values at once"}
    ],
    "comparison_symbols": [
      {"symbol": "=", "latex_code": "=", "explanation": "Equal to"},
      {"symbol": "≠", "latex_code": "\\neq", "explanation": "Not equal to"},
      {"symbol": "<", "latex_code": "<", "explanation": "Less than — read 'is less than'"},
      {"symbol": ">", "latex_code": ">", "explanation": "Greater than — read 'is greater than' ([comparing fractions](!/arithmetic/fractions/comparing))"},
      {"symbol": "≤", "latex_code": "\\leq", "explanation": "Less than or equal to"},
      {"symbol": "≥", "latex_code": "\\geq", "explanation": "Greater than or equal to"},
      {"symbol": "≈", "latex_code": "\\approx", "explanation": "Approximately equal to"}
    ],
    "divisibility": [
      {"symbol": "a | b", "latex_code": "a \\mid b", "explanation": "a divides b — a statement, true or false, not an operation ([terminology and notation](!/arithmetic/divisibility#2))"},
      {"symbol": "a ∤ b", "latex_code": "a \\nmid b", "explanation": "a does not divide b — the negation uses a slashed bar"},
      {"symbol": "gcd(a, b)", "latex_code": "\\gcd(a, b)", "explanation": "Greatest common divisor of a and b ([GCD](!/arithmetic/divisibility/gcd#notation))"},
      {"symbol": "lcm(a, b)", "latex_code": "\\operatorname{lcm}(a, b)", "explanation": "Least common multiple of a and b ([LCM](!/arithmetic/divisibility/lcm#notation))"},
      {"symbol": "σ(n)", "latex_code": "\\sigma(n)", "explanation": "Sum of all positive divisors of n ([sum of factors](!/arithmetic/divisibility/factors#notation))"}
    ],
    "modular_arithmetic": [
      {"symbol": "a mod n", "latex_code": "a \\bmod n", "explanation": "The modulo operation — produces the remainder of a divided by n ([modulo notation](!/arithmetic/modulo#2))"},
      {"symbol": "a % n", "latex_code": "a \\% n", "explanation": "The programming form of the modulo operation, used by C, Java, Python, JavaScript and most languages"},
      {"symbol": "a ≡ b (mod n)", "latex_code": "a \\equiv b \\pmod{n}", "explanation": "Congruence — a statement that a and b leave the same remainder modulo n ([congruence](!/arithmetic/modulo#5)); an assertion, not a computation"}
    ],
    "fractions": [
      {"symbol": "a⁄b (stacked)", "latex_code": "\\frac{a}{b}", "explanation": "Fraction — numerator over denominator; the horizontal line is the fraction bar or vinculum ([what is a fraction](!/arithmetic/fractions#notation))"},
      {"symbol": "a/b (inline)", "latex_code": "a/b", "explanation": "The slash form of the same fraction, used in running text"},
      {"symbol": "2¾", "latex_code": "2\\tfrac{3}{4}", "explanation": "Mixed number — a whole part written next to a proper fraction; here adjacency means addition, not multiplication ([mixed numbers](!/arithmetic/fractions/mixed-numbers#notation))"},
      {"symbol": "b⁄a", "latex_code": "\\frac{b}{a}", "explanation": "Reciprocal of a⁄b — numerator and denominator swapped ([dividing fractions](!/arithmetic/fractions/dividing))"},
      {"symbol": "(a⁄b)/(c⁄d)", "latex_code": "\\frac{\\;\\frac{a}{b}\\;}{\\;\\frac{c}{d}\\;}", "explanation": "Complex fraction — the longer main bar separates the overall numerator and denominator ([complex fractions](!/arithmetic/fractions/complex))"}
    ],
    "percent_and_decimals": [
      {"symbol": "%", "latex_code": "\\%", "explanation": "Percent — parts per hundred"},
      {"symbol": "0.75", "latex_code": "0.75", "explanation": "Decimal notation — the decimal point separates whole and fractional parts"},
      {"symbol": "0.3̅", "latex_code": "0.\\overline{3}", "explanation": "Repeating decimal — the overline marks the repeating block"}
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
