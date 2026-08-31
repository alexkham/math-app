
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';
import VerticalSidebarFrame from '@/app/components/vertical-buttons/VerticalBarGroupFrame';
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

export default function MathSymbolsSetTheoryPage({ symbolsData, meta,menuItems}) {
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

   <VerticalSidebarFrame
   sidebarPosition='left'
   sidebarWidth='200px'
   gap='10px'
   sidebar={ 
   <VerticalButtonGroup 
     items={menuItems}
     width="200px"       
   //   backgroundColor ='#0070f3'
   //   color = 'white'
     isSticky={true}
     verticalOffset='220px'

   

     />}
   mainContent={
   <DataWrapper data={symbolsData} />

   }
   
   />

      {/* <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
     
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
      </div> */}
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
    {
        title: "Mathematical Logic",
        // icon: <Home />,
        link: "/math-symbols/math-logic"
      },
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
      // {
      //   title: "Set Theory",
      //   // icon: <Home />,
      //   link: "/math-symbols/set-theory"
      // },

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
    title: 'Set Theory Symbols | Set Theory Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
       'set theory symbols',
       'set theory math symbols'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/set-theory',
    pageHeading: 'Set Theory Symbols',
  };
 
  const symbolsData = {
    "basic_set_operations": [
      {"symbol": "∈", "latex_code": "\\in", "explanation": "[Element of a set](!/set-theory/basics#2)"},
      {"symbol": "∉", "latex_code": "\\notin", "explanation": "[Not an element of a set](!/set-theory/basics#2)"},
      {"symbol": "⊂", "latex_code": "\\subset", "explanation": "[Proper subset of a set](!/set-theory/subsets#6)"},
      {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "[Subset or equal to](!/set-theory/subsets#6)"},
      {"symbol": "⊄", "latex_code": "\\nsubseteq", "explanation": "[Not a subset of a set](!/set-theory/basics#2)"},
      {"symbol": "⊃", "latex_code": "\\supset", "explanation": "[Proper superset of a set](!/set-theory/subsets#6)"},
      {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "[Superset or equal to](!/set-theory/subsets#6)"},
      {"symbol": "∪", "latex_code": "\\cup", "explanation": "[Union of sets](!/set-theory/operations#notation)"},
      {"symbol": "∩", "latex_code": "\\cap", "explanation": "[Intersection of sets](!/set-theory/operations#notation)"},
      {"symbol": "∖", "latex_code": "\\setminus", "explanation": "[Set difference](!/set-theory/operations#notation)"},
      {"symbol": "∅", "latex_code": "\\emptyset", "explanation": "[Empty set](!/set-theory/basics#2)"},
      {"symbol": "U", "latex_code": "U", "explanation": "[Universal set](!/set-theory/basics#2)"}
    ],
    "relations_between_sets": [
      {"symbol": "=", "latex_code": "=", "explanation": "[Equality of sets](!/set-theory/basics#2)"},
      {"symbol": "≠", "latex_code": "\\neq", "explanation": "[Inequality of sets](!/set-theory/basics#2)"},
      {"symbol": "⊆", "latex_code": "\\subseteq", "explanation": "[Set is a subset of another](!/set-theory/subsets#6)"},
      {"symbol": "⊂", "latex_code": "\\subset", "explanation": "[Set is a proper subset of another](!/set-theory/subsets#6)"},
      {"symbol": "⊇", "latex_code": "\\supseteq", "explanation": "[Set is a superset of another](!/set-theory/subsets#6)"},
      {"symbol": "⊃", "latex_code": "\\supset", "explanation": "[Set is a proper superset of another](!/set-theory/subsets#6)"}
    ],
    "special_sets": [
      {"symbol": "ℕ", "latex_code": "\\mathbb{N}", "explanation": "[Set of natural numbers](!/set-theory/subsets#6)"},
      {"symbol": "ℤ", "latex_code": "\\mathbb{Z}", "explanation": "[Set of integers](!/set-theory/subsets#6)"},
      {"symbol": "ℚ", "latex_code": "\\mathbb{Q}", "explanation": "[Set of rational numbers](!/set-theory/subsets#6)"},
      {"symbol": "ℝ", "latex_code": "\\mathbb{R}", "explanation": "[Set of real numbers](!/set-theory/subsets#6)"},
      {"symbol": "ℂ", "latex_code": "\\mathbb{C}", "explanation": "[Set of complex numbers](!/complex-numbers/basics#notation)"}
    ],
    "cardinality": [
      {"symbol": "|A|", "latex_code": "|A|", "explanation": "[Cardinality of a set A](!/set-theory/cardinality#notation)"},
      {"symbol": "ℵ₀", "latex_code": "\\aleph_0", "explanation": "[Aleph-null, the cardinality of countably infinite sets](!/set-theory/cardinality#notation)"},
      {"symbol": "ℵ₁", "latex_code": "\\aleph_1", "explanation": "[Aleph-one, the next larger cardinality](!/set-theory/cardinality#notation)"},
      {"symbol": "2^ℵ₀", "latex_code": "2^{\\aleph_0}", "explanation": "[Cardinality of the power set of a countably infinite set](!/set-theory/cardinality#notation)"}
    ],
    "set_constructors": [
      {"symbol": "{a, b, c}", "latex_code": "\\{a, b, c\\}", "explanation": "[Set containing elements a, b, and c](!/set-theory/basics#2)"},
      {"symbol": "{x | P(x)}", "latex_code": "\\{x \\mid P(x)\\}", "explanation": "[Set of elements x satisfying property P(x)](!/set-theory/basics#2)"},
      {"symbol": "A × B", "latex_code": "A \\times B", "explanation": "Cartesian product of sets A and B"},
      {"symbol": "P(A)", "latex_code": "\\mathcal{P}(A)", "explanation": "[Power set of set A](!/set-theory/subsets#6)"}
    ],
    "set_equations": [
      {"symbol": "A ∪ ∅ = A", "latex_code": "A \\cup \\emptyset = A", "explanation": "Union with the empty set is the set itself"},
      {"symbol": "A ∩ ∅ = ∅", "latex_code": "A \\cap \\emptyset = \\emptyset", "explanation": "Intersection with the empty set is the empty set"},
      {"symbol": "A ∪ U = U", "latex_code": "A \\cup U = U", "explanation": "Union with the universal set is the universal set"},
      {"symbol": "A ∩ U = A", "latex_code": "A \\cap U = A", "explanation": "Intersection with the universal set is the set itself"}
    ],
    "operations_on_sets": [
      {"symbol": "A ⊆ B", "latex_code": "A \\subseteq B", "explanation": "[A is a subset of B](!/set-theory/subsets#6)"},
      {"symbol": "A ⊂ B", "latex_code": "A \\subset B", "explanation": "[A is a proper subset of B](!/set-theory/subsets#6)"},
      {"symbol": "A = B", "latex_code": "A = B", "explanation": "[A and B are equal sets](!/set-theory/basics#2)"},
      {"symbol": "A ∪ B", "latex_code": "A \\cup B", "explanation": "[Union of A and B](!/set-theory/operations#notation)"},
      {"symbol": "A ∩ B", "latex_code": "A \\cap B", "explanation": "[Intersection of A and B](!/set-theory/operations#notation)"},
      {"symbol": "A ∖ B", "latex_code": "A \\setminus B", "explanation": "[Difference of A and B](!/set-theory/operations#notation)"},
      {"symbol": "A △ B", "latex_code": "A \\triangle B", "explanation": "[Symmetric difference of A and B](!/set-theory/operations#notation)"}
    ],
    "advanced_operations": [
    {"symbol": "⋂ₐₑ Aᵢ", "latex_code": "\\bigcap_{i=a}^b A_i", "explanation": "[Intersection of indexed family of sets](!/set-theory/operations#notation)"},
    {"symbol": "⋃ₐₑ Aᵢ", "latex_code": "\\bigcup_{i=a}^b A_i", "explanation": "[Union of indexed family of sets](!/set-theory/operations#notation)"},
    {"symbol": "∑_{x∈A} f(x)", "latex_code": "\\sum_{x \\in A} f(x)", "explanation": "Summation over elements of set A"},
    {"symbol": "Π_{x∈A} f(x)", "latex_code": "\\prod_{x \\in A} f(x)", "explanation": "Product over elements of set A"}
  ],
  "indexed_sets": [
    {"symbol": "Aᵢ", "latex_code": "A_i", "explanation": "An indexed set A at index i"},
    {"symbol": "{Aᵢ | i ∈ I}", "latex_code": "\\{A_i \\mid i \\in I\\}", "explanation": "Collection of sets indexed by I"},
    {"symbol": "⋃ Aᵢ", "latex_code": "\\bigcup A_i", "explanation": "[Union of all indexed sets Aᵢ](!/set-theory/operations#notation)"},
    {"symbol": "⋂ Aᵢ", "latex_code": "\\bigcap A_i", "explanation": "[Intersection of all indexed sets Aᵢ](!/set-theory/operations#notation)"}
  ],
  "relations_and_functions": [
    {"symbol": "(x, y)", "latex_code": "(x, y)", "explanation": "Ordered pair"},
    {"symbol": "f: A → B", "latex_code": "f: A \\to B", "explanation": "A function f from set A to set B"},
    {"symbol": "f(x)", "latex_code": "f(x)", "explanation": "[Value of function f at x](!/functions/basics#5)"},
    {"symbol": "idₐ", "latex_code": "\\text{id}_A", "explanation": "Identity function on set A"},
    {"symbol": "f⁻¹(B)", "latex_code": "f^{-1}(B)", "explanation": "Preimage of set B under function f"},
    {"symbol": "f(A)", "latex_code": "f(A)", "explanation": "Image of set A under function f"}
  ],
  "venn_diagram_notations": [
    {"symbol": "A ∩ B", "latex_code": "A \\cap B", "explanation": "[Region where A and B overlap](!/set-theory/operations#notation)"},
    {"symbol": "A ∪ B", "latex_code": "A \\cup B", "explanation": "[Region including A or B](!/set-theory/operations#notation)"},
    {"symbol": "A ∖ B", "latex_code": "A \\setminus B", "explanation": "[Region in A but not in B](!/set-theory/operations#notation)"},
    {"symbol": "B ∖ A", "latex_code": "B \\setminus A", "explanation": "[Region in B but not in A](!/set-theory/operations#notation)"},
    {"symbol": "A △ B", "latex_code": "A \\triangle B", "explanation": "[Region in A or B but not both](!/set-theory/operations#notation)"}
  ],
  "logic_and_set_theory": [
    {"symbol": "∀x ∈ A, P(x)", "latex_code": "\\forall x \\in A, P(x)", "explanation": "For all elements x in A, P(x) is true"},
    {"symbol": "∃x ∈ A, P(x)", "latex_code": "\\exists x \\in A, P(x)", "explanation": "There exists an element x in A such that P(x) is true"},
    {"symbol": "¬∃x ∈ A, P(x)", "latex_code": "\\neg \\exists x \\in A, P(x)", "explanation": "There does not exist an x in A such that P(x) is true"},
    {"symbol": "∃!x ∈ A, P(x)", "latex_code": "\\exists! x \\in A, P(x)", "explanation": "There exists a unique x in A such that P(x) is true"}
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
