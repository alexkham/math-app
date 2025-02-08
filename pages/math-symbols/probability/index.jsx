
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VerticalButtonGroup from '@/app/components/VerticalButtonGroup';

export default function MathSymbolsProbabilityPage({ symbolsData, meta ,menuItems}) {
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
      <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
     
     <VerticalButtonGroup 
     items={menuItems}
     width="130px"       
   //   backgroundColor ='#0070f3'
   //   color = 'white'
     isSticky={true}
     verticalOffset='200px'
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
      <ScrollUpButton />
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
      // {
      //   title: "Probability",
      //   // icon: <Home />,
      //   link: "/math-symbols/probability"
      // },
    // {
    //   title: "Settings",
    //   link: "/settings"  // Example without icon
    // }
  ];
 
  const meta = {
    title: 'Probability Symbols |Probability Symbols Chart',
    description:
      'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
    keywords: [
      'math symbols',
      'mathematical symbols',
      'LaTeX',
      'LaTeX code',
      'math symbols list',
      'math symbols chart',
       'probability symbols',
       'probability math symbols'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/probability',
    pageHeading: 'Probability Symbols',
  };
 
  const symbolsData = {
    "probability_and_statistics": [
      {"symbol": "P(A ∩ B)", "latex_code": "P(A \\cap B)", "explanation": "Probability of A and B occurring"},
      {"symbol": "P(A ∪ B)", "latex_code": "P(A \\cup B)", "explanation": "Probability of A or B occurring"},
      {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "Conditional probability of A given B"},
      {"symbol": "E(X)", "latex_code": "E(X)", "explanation": "Expected value of random variable X"},
      {"symbol": "Var(X)", "latex_code": "\\text{Var}(X)", "explanation": "Variance of random variable X"},
      {"symbol": "Cov(X, Y)", "latex_code": "\\text{Cov}(X, Y)", "explanation": "Covariance of random variables X and Y"}
    ],
    "probability_notations": [
      {"symbol": "P(A)", "latex_code": "P(A)", "explanation": "Probability of event A"},
      {"symbol": "P(¬A)", "latex_code": "P(\\neg A)", "explanation": "Probability of not A"},
      {"symbol": "P(A ∩ B)", "latex_code": "P(A \\cap B)", "explanation": "Probability of A and B"},
      {"symbol": "P(A ∪ B)", "latex_code": "P(A \\cup B)", "explanation": "Probability of A or B"},
      {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "Conditional probability of A given B"}
    ],
    "random_variables_and_distributions": [
      {"symbol": "X", "latex_code": "X", "explanation": "Random variable X"},
      {"symbol": "f_X(x)", "latex_code": "f_X(x)", "explanation": "Probability density function of X"},
      {"symbol": "F_X(x)", "latex_code": "F_X(x)", "explanation": "Cumulative distribution function of X"},
      {"symbol": "μ", "latex_code": "\\mu", "explanation": "Mean of a distribution"},
      {"symbol": "σ²", "latex_code": "\\sigma^2", "explanation": "Variance of a distribution"},
      {"symbol": "σ", "latex_code": "\\sigma", "explanation": "Standard deviation of a distribution"}
    ],
    "common_distributions": [
      {"symbol": "Bin(n, p)", "latex_code": "\\text{Bin}(n, p)", "explanation": "Binomial distribution with n trials and probability p"},
      {"symbol": "Poisson(λ)", "latex_code": "\\text{Poisson}(\\lambda)", "explanation": "Poisson distribution with rate λ"},
      {"symbol": "N(μ, σ²)", "latex_code": "\\mathcal{N}(\\mu, \\sigma^2)", "explanation": "Normal distribution with mean μ and variance σ²"},
      {"symbol": "Exp(λ)", "latex_code": "\\text{Exp}(\\lambda)", "explanation": "Exponential distribution with rate λ"},
      {"symbol": "U(a, b)", "latex_code": "\\text{U}(a, b)", "explanation": "Uniform distribution on the interval [a, b]"}
    ],
    "statistical_measures": [
      {"symbol": "E(X)", "latex_code": "E(X)", "explanation": "Expected value of X"},
      {"symbol": "Var(X)", "latex_code": "\\text{Var}(X)", "explanation": "Variance of X"},
      {"symbol": "SD(X)", "latex_code": "\\text{SD}(X)", "explanation": "Standard deviation of X"},
      {"symbol": "Cov(X, Y)", "latex_code": "\\text{Cov}(X, Y)", "explanation": "Covariance of X and Y"},
      {"symbol": "Corr(X, Y)", "latex_code": "\\text{Corr}(X, Y)", "explanation": "Correlation of X and Y"}
    ],
    "hypothesis_testing": [
      {"symbol": "H₀", "latex_code": "H_0", "explanation": "Null hypothesis"},
      {"symbol": "H₁", "latex_code": "H_1", "explanation": "Alternative hypothesis"},
      {"symbol": "α", "latex_code": "\\alpha", "explanation": "Significance level"},
      {"symbol": "p-value", "latex_code": "\\text{p-value}", "explanation": "Probability of observing the data under H₀"},
      {"symbol": "z", "latex_code": "z", "explanation": "Z-score in standard normal distribution"},
      {"symbol": "t", "latex_code": "t", "explanation": "T-score in Student's t-distribution"}
    ],
    "information_theory": [
      {"symbol": "H(X)", "latex_code": "H(X)", "explanation": "Entropy of random variable X"},
      {"symbol": "I(X; Y)", "latex_code": "I(X; Y)", "explanation": "Mutual information between X and Y"},
      {"symbol": "D(P || Q)", "latex_code": "D(P \\| Q)", "explanation": "Kullback–Leibler divergence between distributions P and Q"}
    ],
    "moment_generating_functions": [
        {"symbol": "M_X(t)", "latex_code": "M_X(t)", "explanation": "Moment generating function of random variable X"},
        {"symbol": "M_X(t) = E(e^(tX))", "latex_code": "M_X(t) = E(e^{tX})", "explanation": "Definition of the moment generating function"},
        {"symbol": "M'(0) = E(X)", "latex_code": "M'(0) = E(X)", "explanation": "The first derivative of the MGF gives the mean"},
        {"symbol": "M''(0) = Var(X) + (E(X))²", "latex_code": "M''(0) = \\text{Var}(X) + (E(X))^2", "explanation": "The second derivative of the MGF relates to variance"}
      ],
      "probability_inequalities": [
    {"symbol": "P(X ≥ a) ≤ E(X)/a", "latex_code": "P(X \\geq a) \\leq \\frac{E(X)}{a}", "explanation": "Markov's inequality"},
    {"symbol": "P(|X − μ| ≥ kσ) ≤ 1/k²", "latex_code": "P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}", "explanation": "Chebyshev's inequality"},
    {"symbol": "P(Sₙ/n − μ ≥ ε) ≤ e^(−nε²/2σ²)", "latex_code": "P\\left(\\frac{S_n}{n} - \\mu \\geq \\epsilon\\right) \\leq e^{-\\frac{n\\epsilon^2}{2\\sigma^2}}", "explanation": "Hoeffding's inequality for large deviations"}
  ],
  "bayesian_statistics": [
    {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "Posterior probability of A given B"},
    {"symbol": "P(A | B) = (P(B | A)P(A)) / P(B)", "latex_code": "P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}", "explanation": "Bayes' theorem"},
    {"symbol": "P(A, B)", "latex_code": "P(A, B)", "explanation": "Joint probability of A and B"},
    {"symbol": "P(A ∩ B) = P(A)P(B | A)", "latex_code": "P(A \\cap B) = P(A) P(B \\mid A)", "explanation": "Chain rule of probability"}
  ],
  "regression_and_correlation": [
    {"symbol": "Y = β₀ + β₁X + ε", "latex_code": "Y = \\beta_0 + \\beta_1 X + \\epsilon", "explanation": "Linear regression equation"},
    {"symbol": "R²", "latex_code": "R^2", "explanation": "Coefficient of determination"},
    {"symbol": "ρ(X, Y)", "latex_code": "\\rho(X, Y)", "explanation": "Pearson correlation coefficient between X and Y"},
    {"symbol": "Cov(X, Y) = E(XY) − E(X)E(Y)", "latex_code": "\\text{Cov}(X, Y) = E(XY) - E(X)E(Y)", "explanation": "Covariance formula"}
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
