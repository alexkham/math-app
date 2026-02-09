
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export default function MathSymbolsLinearAlgebraPage({ symbolsData, meta ,menuItems}) {
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
    // {
    //   title: "Linear Algebra",
    //   // icon: <Home />,
    //   link: "/math-symbols/linear-algebra"
    // },
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
    title: 'Linear Algebra Symbols | Linear Algebra Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
      'matrix latex',
      'vector latex',
      'latex dot product',
      'linear algebra symbols'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/linear-algebra',
    pageHeading: 'Linear Algebra Mathematical Symbols',
  };
  const symbolsData = {
    "matrix_operations": [
      {"symbol": "A⊤", "latex_code": "A^\\top", "explanation": "Matrix transpose"},
      {"symbol": "A⁻¹", "latex_code": "A^{-1}", "explanation": "Matrix inverse"},
      {"symbol": "det(A)", "latex_code": "\\det(A)", "explanation": "Matrix determinant"},
      {"symbol": "tr(A)", "latex_code": "\\text{tr}(A)", "explanation": "Matrix trace"},
      {"symbol": "rank(A)", "latex_code": "\\text{rank}(A)", "explanation": "Matrix rank"},
      {"symbol": "adj(A)", "latex_code": "\\text{adj}(A)", "explanation": "Matrix adjugate"},
      {"symbol": "A⊗B", "latex_code": "A \\otimes B", "explanation": "Kronecker product"},
      {"symbol": "A∘B", "latex_code": "A \\circ B", "explanation": "Hadamard (elementwise) product"},
      {"symbol": "A†", "latex_code": "A^\\dagger", "explanation": "Conjugate transpose"},
      {"symbol": "ker(A)", "latex_code": "\\text{ker}(A)", "explanation": "Kernel (nullspace) of matrix"}
    ],
    "vector_spaces": [
      {"symbol": "ℝⁿ", "latex_code": "\\mathbb{R}^n", "explanation": "n-dimensional real vector space"},
      {"symbol": "span{v₁,...,vₙ}", "latex_code": "\\text{span}\\{v_1,\\ldots,v_n\\}", "explanation": "Span of vectors"},
      {"symbol": "⟨v,w⟩", "latex_code": "\\langle v,w \\rangle", "explanation": "Inner product"},
      {"symbol": "∥v∥", "latex_code": "\\|v\\|", "explanation": "Vector norm"},
      {"symbol": "v⊥w", "latex_code": "v \\perp w", "explanation": "Orthogonal vectors"},
      {"symbol": "dim(V)", "latex_code": "\\dim(V)", "explanation": "Dimension of vector space"},
      {"symbol": "V⊕W", "latex_code": "V \\oplus W", "explanation": "Direct sum of vector spaces"}
    ],
    "eigenvalues_eigenvectors": [
      {"symbol": "Av=λv", "latex_code": "Av=\\lambda v", "explanation": "Eigenvalue equation"},
      {"symbol": "χₐ(λ)", "latex_code": "\\chi_A(\\lambda)", "explanation": "Characteristic polynomial"},
      {"symbol": "σ(A)", "latex_code": "\\sigma(A)", "explanation": "Spectrum (set of eigenvalues)"},
      {"symbol": "ρ(A)", "latex_code": "\\rho(A)", "explanation": "Spectral radius"},
      {"symbol": "diag(λ₁,...,λₙ)", "latex_code": "\\text{diag}(\\lambda_1,\\ldots,\\lambda_n)", "explanation": "Diagonal matrix of eigenvalues"}
    ],
    "linear_transformations": [
      {"symbol": "T:V→W", "latex_code": "T:V\\to W", "explanation": "Linear transformation"},
      {"symbol": "im(T)", "latex_code": "\\text{im}(T)", "explanation": "Image of transformation"},
      {"symbol": "ker(T)", "latex_code": "\\text{ker}(T)", "explanation": "Kernel of transformation"},
      {"symbol": "T∘S", "latex_code": "T \\circ S", "explanation": "Composition of transformations"},
      {"symbol": "GL(n,ℝ)", "latex_code": "GL(n,\\mathbb{R})", "explanation": "General linear group"}
    ],
    "matrix_decompositions": [
      {"symbol": "A=LU", "latex_code": "A=LU", "explanation": "LU decomposition"},
      {"symbol": "A=QR", "latex_code": "A=QR", "explanation": "QR decomposition"},
      {"symbol": "A=UΣV⊤", "latex_code": "A=U\\Sigma V^\\top", "explanation": "Singular value decomposition"},
      {"symbol": "A=PDP⁻¹", "latex_code": "A=PDP^{-1}", "explanation": "Eigendecomposition"},
      {"symbol": "A=CC⊤", "latex_code": "A=CC^\\top", "explanation": "Cholesky decomposition"}
    ],
    "basic_matrix_forms": [
    {"symbol": "[a₁₁ a₁₂; a₂₁ a₂₂]", "latex_code": "\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}", "explanation": "2×2 matrix"},
    {"symbol": "(a b c)", "latex_code": "\\begin{pmatrix} a & b & c \\end{pmatrix}", "explanation": "Row vector"},
    {"symbol": "[a; b; c]", "latex_code": "\\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix}", "explanation": "Column vector"},
    {"symbol": "∥a₁₁ a₁₂∥", "latex_code": "\\begin{vmatrix} a_{11} & a_{12} \\end{vmatrix}", "explanation": "Matrix determinant notation"},
    {"symbol": "{a₁₁ a₁₂}", "latex_code": "\\begin{Bmatrix} a_{11} & a_{12} \\end{Bmatrix}", "explanation": "Curly brace matrix"}
  ],
  "matrix_elements": [
    {"symbol": "aᵢⱼ", "latex_code": "a_{ij}", "explanation": "General matrix element"},
    {"symbol": "a₁₁", "latex_code": "a_{11}", "explanation": "First element"},
    {"symbol": "aᵢ₊₁,ⱼ", "latex_code": "a_{i+1,j}", "explanation": "Element with offset indices"},
    {"symbol": "⋯", "latex_code": "\\cdots", "explanation": "Horizontal ellipsis"},
    {"symbol": "⋮", "latex_code": "\\vdots", "explanation": "Vertical ellipsis"},
    {"symbol": "⋱", "latex_code": "\\ddots", "explanation": "Diagonal ellipsis"}
  ],
  "special_matrices": [
    {"symbol": "I", "latex_code": "I_n", "explanation": "Identity matrix"},
    {"symbol": "0", "latex_code": "0_{m \\times n}", "explanation": "Zero matrix"},
    {"symbol": "diag(a₁,…,aₙ)", "latex_code": "\\text{diag}(a_1,\\ldots,a_n)", "explanation": "Diagonal matrix"},
    {"symbol": "⎡⎢⎣", "latex_code": "\\left\\lbrack", "explanation": "Left matrix bracket"},
    {"symbol": "⎤⎥⎦", "latex_code": "\\right\\rbrack", "explanation": "Right matrix bracket"}
  ]
  }


  return {
    props: {
      symbolsData,
      meta, // Pass SEO metadata
      menuItems
    },
  };
}
