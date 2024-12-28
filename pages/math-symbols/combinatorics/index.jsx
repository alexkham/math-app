
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

export default function MathSymbolsCombinatoricsPage({ symbolsData, meta }) {
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
        panelWidth="300px"
        iconColor="white"
        panelBackgroundColor="#f2f2f2"
      />
      <h1 className="title" style={{ marginTop: '0px' }}>
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
    title: 'Combinatorics Symbols | Combinatorics Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
       'combinatorics symbols',
       'combinatorics math symbols'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/combinatorics',
    pageHeading: 'Combinatorics Symbols',
  };
 
  const symbolsData = {
    "basic_notations": [
      {"symbol": "n!", "latex_code": "n!", "explanation": "Factorial of n"},
      {"symbol": "nPk", "latex_code": "{n \\mathcal{P} k}", "explanation": "Number of permutations of k elements chosen from n"},
      {"symbol": "nCk", "latex_code": "\\binom{n}{k}", "explanation": "Number of combinations of k elements chosen from n"},
      {"symbol": "P(A)", "latex_code": "P(A)", "explanation": "Probability of event A"},
      {"symbol": "|A|", "latex_code": "|A|", "explanation": "Cardinality of set A (number of elements)"},
      {"symbol": "∑", "latex_code": "\\sum", "explanation": "Summation operator"},
      {"symbol": "Π", "latex_code": "\\prod", "explanation": "Product operator"}
    ],
    "binomial_theorem": [
      {"symbol": "(x + y)ⁿ", "latex_code": "(x + y)^n", "explanation": "Expansion of a binomial raised to the nth power"},
      {"symbol": "∑ₖ₌₀ⁿ (nCk) xⁿ⁻ᵏ yᵏ", "latex_code": "\\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k", "explanation": "Binomial theorem expansion"},
      {"symbol": "nCk = n! / (k!(n − k)!)", "latex_code": "\\binom{n}{k} = \\frac{n!}{k!(n-k)!}", "explanation": "Formula for binomial coefficient"}
    ],
    "permutations_and_combinations": [
      {"symbol": "n!", "latex_code": "n!", "explanation": "Number of permutations of n elements"},
      {"symbol": "nPk = n! / (n − k)!", "latex_code": "P(n, k) = \\frac{n!}{(n-k)!}", "explanation": "Number of permutations of k elements chosen from n"},
      {"symbol": "nCk = n! / (k!(n − k)!)", "latex_code": "C(n, k) = \\frac{n!}{k!(n-k)!}", "explanation": "Number of combinations of k elements chosen from n"},
      {"symbol": "nHk", "latex_code": "\\binom{n+k-1}{k}", "explanation": "Number of ways to distribute k identical items into n distinct groups (combinations with replacement)"}
    ],
    "set_partitions": [
      {"symbol": "B(n)", "latex_code": "B(n)", "explanation": "Bell number, the number of ways to partition a set of n elements"},
      {"symbol": "S(n, k)", "latex_code": "S(n, k)", "explanation": "Stirling number of the second kind, the number of ways to partition a set of n elements into k non-empty subsets"}
    ],
    "principle_of_inclusion_exclusion": [
      {"symbol": "|A ∪ B| = |A| + |B| − |A ∩ B|", "latex_code": "|A \\cup B| = |A| + |B| - |A \\cap B|", "explanation": "Inclusion-Exclusion principle for two sets"},
      {"symbol": "|A₁ ∪ A₂ ∪ ⋯ ∪ Aₙ|", "latex_code": "|A_1 \\cup A_2 \\cup \\cdots \\cup A_n|", "explanation": "Cardinality of the union of multiple sets"},
      {"symbol": "∑(−1)ⁿ⁺¹ |Aᵢ₁ ∩ ⋯ ∩ Aᵢₖ|", "latex_code": "\\sum (-1)^{n+1} |A_{i_1} \\cap \\cdots \\cap A_{i_k}|", "explanation": "General formula for Inclusion-Exclusion principle"}
    ],
    "generating_functions": [
      {"symbol": "G(x) = ∑ₙ₌₀ aₙxⁿ", "latex_code": "G(x) = \\sum_{n=0}^\\infty a_n x^n", "explanation": "Ordinary generating function"},
      {"symbol": "H(x) = ∏ₙ₌₁ (1 − xⁿ)⁻¹", "latex_code": "H(x) = \\prod_{n=1}^\\infty (1 - x^n)^{-1}", "explanation": "Exponential generating function"},
      {"symbol": "F(x, y) = ∑ₘₙ aₘₙ xᵐ yⁿ", "latex_code": "F(x, y) = \\sum_{m, n} a_{m, n} x^m y^n", "explanation": "Bivariate generating function"}
    ],
   "partitions_and_integer_representations": [
    {"symbol": "p(n)", "latex_code": "p(n)", "explanation": "Number of partitions of integer n"},
    {"symbol": "q(n)", "latex_code": "q(n)", "explanation": "Number of distinct partitions of n"},
    {"symbol": "λ ⊢ n", "latex_code": "\\lambda \\vdash n", "explanation": "Partition λ of n"},
    {"symbol": "n = λ₁ + λ₂ + ... + λₖ", "latex_code": "n = \\lambda_1 + \\lambda_2 + \\cdots + \\lambda_k", "explanation": "A specific partition of n"}
  ],
  "catalan_numbers": [
    {"symbol": "Cₙ", "latex_code": "C_n", "explanation": "nth Catalan number"},
    {"symbol": "Cₙ = (2n)! / ((n+1)!n!)", "latex_code": "C_n = \\frac{(2n)!}{(n+1)!n!}", "explanation": "Formula for Catalan number"},
    {"symbol": "C₀, C₁, C₂, ...", "latex_code": "C_0, C_1, C_2, \\ldots", "explanation": "Sequence of Catalan numbers"}
  ],
  "recurrence_relations": [
    {"symbol": "aₙ = aₙ₋₁ + aₙ₋₂", "latex_code": "a_n = a_{n-1} + a_{n-2}", "explanation": "Example recurrence relation (Fibonacci numbers)"},
    {"symbol": "T(n) = 2T(n/2) + n", "latex_code": "T(n) = 2T(n/2) + n", "explanation": "Divide-and-conquer recurrence relation"},
    {"symbol": "a₀ = c₀, aₙ = Σₖ aₖfₖₙ", "latex_code": "a_0 = c_0, a_n = \\sum_k a_k f_{kn}", "explanation": "General recurrence relation"}
  ],
  "graph_theory": [
    {"symbol": "G = (V, E)", "latex_code": "G = (V, E)", "explanation": "Graph G with vertices V and edges E"},
    {"symbol": "|V|", "latex_code": "|V|", "explanation": "Number of vertices in a graph"},
    {"symbol": "|E|", "latex_code": "|E|", "explanation": "Number of edges in a graph"},
    {"symbol": "deg(v)", "latex_code": "\\text{deg}(v)", "explanation": "Degree of vertex v"},
    {"symbol": "χ(G)", "latex_code": "\\chi(G)", "explanation": "Chromatic number of a graph"},
    {"symbol": "T(G)", "latex_code": "T(G)", "explanation": "Number of spanning trees in graph G"}
  ]
  };
  


  return {
    props: {
      symbolsData,
      meta, // Pass SEO metadata
    },
  };
}
