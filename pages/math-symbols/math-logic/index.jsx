
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

export default function MathSymbolsLogicPage({ symbolsData, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      <GenericNavbar />
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side="right"
        topOffset="65px"
        sidebarWidth="45px"
        panelWidth="200px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />
      <h1 className="title" style={{ marginTop: '-30px' }}>
        {meta.pageHeading}
      </h1>
      <br />
      <br />
      <div
        className="title"
        style={{
          margin: 'auto',
          width: '80%',
        }}
      >
        <DataWrapper data={symbolsData} />
      </div>
      <ScrollUpButton />
    </>
  );
}

// Include data and metadata in getStaticProps
export async function getStaticProps() {
 
  const meta = {
    title: 'Mathematical Logic Symbols | Mathematicsl Logic Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
       'mathematical logic symbols',
       'math logic symbols'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/math-logic',
    pageHeading: 'Mathematical Logic Symbols',
  };
  const symbolsData = {
    "logical_operations": [
      {"symbol": "¬", "latex_code": "\\neg", "explanation": "Logical NOT"},
      {"symbol": "∧", "latex_code": "\\land", "explanation": "Logical AND"},
      {"symbol": "∨", "latex_code": "\\lor", "explanation": "Logical OR"},
      {"symbol": "⊕", "latex_code": "\\oplus", "explanation": "Logical XOR"},
      {"symbol": "→", "latex_code": "\\to", "explanation": "Implication (if...then...)"},
      {"symbol": "↔", "latex_code": "\\leftrightarrow", "explanation": "Biconditional (logical equivalence)"},
      {"symbol": "⊨", "latex_code": "\\models", "explanation": "Entails (satisfiability or semantic entailment)"},
      {"symbol": "⊢", "latex_code": "\\vdash", "explanation": "Provable (syntactic entailment)"},
      {"symbol": "⊤", "latex_code": "\\top", "explanation": "Tautology (always true)"},
      {"symbol": "⊥", "latex_code": "\\bot", "explanation": "Contradiction (always false)"}
    ],
    "quantifiers": [
      {"symbol": "∀", "latex_code": "\\forall", "explanation": "Universal quantifier (for all)"},
      {"symbol": "∃", "latex_code": "\\exists", "explanation": "Existential quantifier (there exists)"},
      {"symbol": "∄", "latex_code": "\\nexists", "explanation": "Negated existential quantifier (there does not exist)"}
    ],
    "set_operations": [
      {"symbol": "∈", "latex_code": "\\in", "explanation": "Element of"},
      {"symbol": "∉", "latex_code": "\\notin", "explanation": "Not an element of"},
      {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "Subset or equal"},
      {"symbol": "⊂", "latex_code": "\\subset", "explanation": "Proper subset"},
      {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "Superset or equal"},
      {"symbol": "⊃", "latex_code": "\\supset", "explanation": "Proper superset"},
      {"symbol": "∩", "latex_code": "\\cap", "explanation": "Intersection (common elements)"},
      {"symbol": "∪", "latex_code": "\\cup", "explanation": "Union (all elements)"},
      {"symbol": "∖", "latex_code": "\\setminus", "explanation": "Set difference"}
    ],
    "set_theory_cardinality": [
        {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "Subset or equal (includes equality)"},
        {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "Superset or equal (includes equality)"},
        {"symbol": "⊄", "latex_code": "\\not\\subset", "explanation": "Not subset"},
        {"symbol": "⊅", "latex_code": "\\not\\supset", "explanation": "Not superset"},
        {"symbol": "ℵ₀", "latex_code": "\\aleph_0", "explanation": "Aleph-null (smallest infinite cardinal)"},
        {"symbol": "𝒫(A)", "latex_code": "\\mathcal{P}(A)", "explanation": "Power set (set of all subsets)"}
      ],
    "relation_symbols": [
      {"symbol": "=", "latex_code": "=", "explanation": "Equality"},
      {"symbol": "≠", "latex_code": "\\neq", "explanation": "Not equal"},
      {"symbol": "<", "latex_code": "<", "explanation": "Less than"},
      {"symbol": ">", "latex_code": ">", "explanation": "Greater than"},
      {"symbol": "≤", "latex_code": "\\leq", "explanation": "Less than or equal to"},
      {"symbol": "≥", "latex_code": "\\geq", "explanation": "Greater than or equal to"}
    ],
    "special_symbols": [
      {"symbol": "∅", "latex_code": "\\emptyset", "explanation": "Empty set (no elements)"},
      {"symbol": "ℕ", "latex_code": "\\mathbb{N}", "explanation": "Set of natural numbers"},
      {"symbol": "ℤ", "latex_code": "\\mathbb{Z}", "explanation": "Set of integers"},
      {"symbol": "ℚ", "latex_code": "\\mathbb{Q}", "explanation": "Set of rational numbers"},
      {"symbol": "ℝ", "latex_code": "\\mathbb{R}", "explanation": "Set of real numbers"},
      {"symbol": "ℂ", "latex_code": "\\mathbb{C}", "explanation": "Set of complex numbers"}
    ],
    "temporal_modal_logic": [
      {"symbol": "□", "latex_code": "\\Box", "explanation": "Necessity (it is necessary that)"},
      {"symbol": "◇", "latex_code": "\\Diamond", "explanation": "Possibility (it is possible that)"},
      {"symbol": "◊", "latex_code": "\\lozenge", "explanation": "Eventually (temporal logic)"},
      {"symbol": "○", "latex_code": "\\bigcirc", "explanation": "Next (temporal logic)"}
    ],
    "advanced_logical_operations": [
      {"symbol": "⊢", "latex_code": "\\vdash", "explanation": "Provable in proof system"},
      {"symbol": "⊬", "latex_code": "\\nvdash", "explanation": "Not provable in proof system"},
      {"symbol": "⊨", "latex_code": "\\models", "explanation": "Semantic entailment"},
      {"symbol": "⊭", "latex_code": "\\nvDash", "explanation": "Not semantic entailment"},
      {"symbol": "⊣", "latex_code": "\\dashv", "explanation": "Assertion of incompatibility"}
    ],
    "algebraic_logic": [
      {"symbol": "∧", "latex_code": "\\wedge", "explanation": "Meet (lattice intersection)"},
      {"symbol": "∨", "latex_code": "\\vee", "explanation": "Join (lattice union)"},
      {"symbol": "⊥", "latex_code": "\\bot", "explanation": "Bottom (least element)"},
      {"symbol": "⊤", "latex_code": "\\top", "explanation": "Top (greatest element)"}
    ],
    "probability_logic": [
      {"symbol": "Pr(A)", "latex_code": "\\Pr(A)", "explanation": "Probability of event A"},
      {"symbol": "E[X]", "latex_code": "\\mathbb{E}[X]", "explanation": "Expected value of random variable X"}
    ],
    "proof_notations": [
      {"symbol": "⇒", "latex_code": "\\Rightarrow", "explanation": "Implies in proofs"},
      {"symbol": "⇐", "latex_code": "\\Leftarrow", "explanation": "Implied by in proofs"},
      {"symbol": "○", "latex_code": "\\circ", "explanation": "Composition of functions"}
    ],
    "miscellaneous": [
      {"symbol": "∞", "latex_code": "\\infty", "explanation": "Infinity"},
      {"symbol": "∴", "latex_code": "\\therefore", "explanation": "Therefore (consequence)"},
      {"symbol": "∵", "latex_code": "\\because", "explanation": "Because (reasoning)"}
    ],
    
    "type_theory_lambda_calculus": [
          {"symbol": "λ", "latex_code": "\\lambda", "explanation": "Function abstraction in lambda calculus"},
          {"symbol": "⊢α", "latex_code": "\\vdash_\\alpha", "explanation": "Type derivability in a type system"},
          {"symbol": "∼", "latex_code": "\\sim", "explanation": "Beta equivalence in lambda calculus"},
          {"symbol": "≡", "latex_code": "\\equiv", "explanation": "Alpha equivalence in lambda calculus"},
          {"symbol": "Γ", "latex_code": "\\Gamma", "explanation": "Context or typing environment in type systems"}
        ]
      
      
  };
  


  return {
    props: {
      symbolsData,
      meta, // Pass SEO metadata
    },
  };
}