
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

export default function MathSymbolsLogicPage({ symbolsData, meta ,menuItems}) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.canonical} />
      </Head>
      {/* <GenericNavbar /> */}
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side="right"
        // topOffset="65px"
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
      <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
     
      <VerticalButtonGroup 
      items={menuItems}
      width="200px"       
    //   backgroundColor ='#0070f3'
    //   color = 'white'
      isSticky={true}
      verticalOffset='250px'
      />
      <div
        className="title"
        style={{
          margin: 'auto',
          width: '85%',
        }}
      >
        <DataWrapper data={symbolsData} />
      </div>
      </div>
      {/* <ScrollUpButton /> */}
    </>
  );
}

// Include data and metadata in getStaticProps
export async function getStaticProps() {

  const menuItems = [
    {
      title: "Linear Algebra",
      // icon: <Home />,
      link: "/math-symbols/linear-algebra"
    },
    // {
    //     title: "Mathematical Logic",
    //     // icon: <Home />,
    //     link: "/math-symbols/math-logic"
    //   },
      {
        title: "Calculus",
        // icon: <Home />,
        link: "/math-symbols/calculus"
      },
      {
        title: "Trigonometry",
        // icon: <Home />,
        link: "/math-symbols/trigonometry"
      },
      {
        title: "Set Theory",
        // icon: <Home />,
        link: "/math-symbols/set-theory"
      },

      {
        title: "Combinatorics",
        // icon: <Home />,
        link: "/math-symbols/combinatorics"
      },
      {
        title: "Probability",
        // icon: <Home />,
        link: "/math-symbols/probability"
      },
       {
          title: "Complex Numbers",
          link: "/math-symbols/complex-numbers"  // Example without icon
        },
    // {
    //   title: "Settings",
    //   link: "/settings"  // Example without icon
    // }
  ];
  
 
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
      {"symbol": "¬", "latex_code": "\\neg", "explanation": "[Logical NOT](!/logic/propositional-logic/syntax#notation)"},
      {"symbol": "∧", "latex_code": "\\land", "explanation": "[Logical AND](!/logic/propositional-logic/syntax#notation)"},
      {"symbol": "∨", "latex_code": "\\lor", "explanation": "[Logical OR](!/logic/propositional-logic/syntax#notation)"},
      {"symbol": "⊕", "latex_code": "\\oplus", "explanation": "Logical XOR"},
      {"symbol": "→", "latex_code": "\\to", "explanation": "[Implication](!/logic/propositional-logic/semantics/implication#notation) (if...then...)"},
      {"symbol": "↔", "latex_code": "\\leftrightarrow", "explanation": "[Biconditional](!/logic/propositional-logic/semantics/equivalences#notation) (logical equivalence)"},
      {"symbol": "⊨", "latex_code": "\\models", "explanation": "[Entails (satisfiability or semantic entailment)](!/logic/propositional-logic/semantics/tautology#notation)"},
      {"symbol": "⊢", "latex_code": "\\vdash", "explanation": "[Provable (syntactic entailment)](!/logic/propositional-logic/semantics/tautology#notation)"},
      {"symbol": "⊤", "latex_code": "\\top", "explanation": "[Tautology](!/logic/propositional-logic/semantics/tautology#notation) (always true)"},
      {"symbol": "⊥", "latex_code": "\\bot", "explanation": "[Contradiction](!/logic/propositional-logic/semantics/contradiction#notation) (always false)"}
    ],
    "quantifiers": [
      {"symbol": "∀", "latex_code": "\\forall", "explanation": "Universal quantifier (for all)"},
      {"symbol": "∃", "latex_code": "\\exists", "explanation": "Existential quantifier (there exists)"},
      {"symbol": "∄", "latex_code": "\\nexists", "explanation": "Negated existential quantifier (there does not exist)"}
    ],
    "set_operations": [
      {"symbol": "∈", "latex_code": "\\in", "explanation": "[Element of](!/set-theory/basics#2)"},
      {"symbol": "∉", "latex_code": "\\notin", "explanation": "[Not an element of](!/set-theory/basics#2)"},
      {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "[Subset or equal](!/set-theory/subsets#6)"},
      {"symbol": "⊂", "latex_code": "\\subset", "explanation": "[Proper subset](!/set-theory/subsets#6)"},
      {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "[Superset or equal](!/set-theory/subsets#6)"},
      {"symbol": "⊃", "latex_code": "\\supset", "explanation": "[Proper superset](!/set-theory/subsets#6)"},
      {"symbol": "∩", "latex_code": "\\cap", "explanation": "[Intersection (common elements)](!/set-theory/operations#notation)"},
      {"symbol": "∪", "latex_code": "\\cup", "explanation": "[Union (all elements)](!/set-theory/operations#notation)"},
      {"symbol": "∖", "latex_code": "\\setminus", "explanation": "[Set difference](!/set-theory/operations#notation)"}
    ],
    "set_theory_cardinality": [
        {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "[Subset or equal (includes equality)](!/set-theory/subsets#6)"},
        {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "[Superset or equal (includes equality)](!/set-theory/subsets#6)"},
        {"symbol": "⊄", "latex_code": "\\not\\subset", "explanation": "[Not subset](!/set-theory/basics#2)"},
        {"symbol": "⊅", "latex_code": "\\not\\supset", "explanation": "[Not superset](!/set-theory/basics#2)"},
        {"symbol": "ℵ₀", "latex_code": "\\aleph_0", "explanation": "[Aleph-null (smallest infinite cardinal)](!/set-theory/cardinality#notation)"},
        {"symbol": "𝒫(A)", "latex_code": "\\mathcal{P}(A)", "explanation": "[Power set (set of all subsets)](!/set-theory/subsets#6)"}
      ],
    "relation_symbols": [
      {"symbol": "=", "latex_code": "=", "explanation": "Equality"},
      {"symbol": "≠", "latex_code": "\\neq", "explanation": "Not equal"},
      {"symbol": "<", "latex_code": "<", "explanation": "[Less than](!/algebra/inequalities/linear#notation)"},
      {"symbol": ">", "latex_code": ">", "explanation": "[Greater than](!/algebra/inequalities/linear#notation)"},
      {"symbol": "≤", "latex_code": "\\leq", "explanation": "[Less than or equal to](!/algebra/inequalities/linear#notation)"},
      {"symbol": "≥", "latex_code": "\\geq", "explanation": "[Greater than or equal to](!/algebra/inequalities/linear#notation)"}
    ],
    "special_symbols": [
      {"symbol": "∅", "latex_code": "\\emptyset", "explanation": "[Empty set (no elements)](!/set-theory/basics#2)"},
      {"symbol": "ℕ", "latex_code": "\\mathbb{N}", "explanation": "[Set of natural numbers](!/set-theory/subsets#6)"},
      {"symbol": "ℤ", "latex_code": "\\mathbb{Z}", "explanation": "[Set of integers](!/set-theory/subsets#6)"},
      {"symbol": "ℚ", "latex_code": "\\mathbb{Q}", "explanation": "[Set of rational numbers](!/set-theory/subsets#6)"},
      {"symbol": "ℝ", "latex_code": "\\mathbb{R}", "explanation": "[Set of real numbers](!/set-theory/subsets#6)"},
      {"symbol": "ℂ", "latex_code": "\\mathbb{C}", "explanation": "[Set of complex numbers](!/complex-numbers/basics#notation)"}
    ],
    "temporal_modal_logic": [
      {"symbol": "□", "latex_code": "\\Box", "explanation": "Necessity (it is necessary that)"},
      {"symbol": "◇", "latex_code": "\\Diamond", "explanation": "Possibility (it is possible that)"},
      {"symbol": "◊", "latex_code": "\\lozenge", "explanation": "Eventually (temporal logic)"},
      {"symbol": "○", "latex_code": "\\bigcirc", "explanation": "Next (temporal logic)"}
    ],
    "advanced_logical_operations": [
      {"symbol": "⊢", "latex_code": "\\vdash", "explanation": "[Provable in proof system](!/logic/propositional-logic/semantics/tautology#notation)"},
      {"symbol": "⊬", "latex_code": "\\nvdash", "explanation": "Not provable in proof system"},
      {"symbol": "⊨", "latex_code": "\\models", "explanation": "[Semantic entailment](!/logic/propositional-logic/semantics/tautology#notation)"},
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
      {"symbol": "E[X]", "latex_code": "\\mathbb{E}[X]", "explanation": "[Expected value of random variable X](!/probability/expected-value#notation)"}
    ],
    "proof_notations": [
      {"symbol": "⇒", "latex_code": "\\Rightarrow", "explanation": "[Implies in proofs](!/logic/propositional-logic/semantics/implication#notation)"},
      {"symbol": "⇐", "latex_code": "\\Leftarrow", "explanation": "Implied by in proofs"},
      {"symbol": "○", "latex_code": "\\circ", "explanation": "[Composition of functions](!/functions/composition#2)"}
    ],
    "miscellaneous": [
      {"symbol": "∞", "latex_code": "\\infty", "explanation": "[Infinity](!/calculus/limits/infinity#notation)"},
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
      menuItems
    },
  };
}
