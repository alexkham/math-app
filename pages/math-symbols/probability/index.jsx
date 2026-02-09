
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// import React from 'react';
// import Head from 'next/head';
// import '../../pages.css'
// import DataWrapper from '@/app/components/generic-table/DataWrapper';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

// export default function MathSymbolsProbabilityPage({ symbolsData, meta ,menuItems}) {
//   return (
//     <>
//       <Head>
//         <title>{meta.title}</title>
//         <meta name="description" content={meta.description} />
//         <meta name="keywords" content={meta.keywords.join(', ')} />
//         <meta name="author" content={meta.author} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="canonical" href={meta.canonical} />
//       </Head>
//       {/* <GenericNavbar /> */}
//       <br />
//       <br />
//       <br />
//       <br />
//       <Breadcrumb />
//       <OperaSidebar
//         side="right"
//         // topOffset="65px"
//         sidebarWidth="45px"
//         panelWidth="300px"
//         iconColor="white"
//         panelBackgroundColor="#f2f2f2"
//       />
//       <h1 className="title" style={{ marginTop: '0px' }}>
//         {meta.pageHeading}
//       </h1>
//       <br />
//       <br />
//       <div style={{display:'flex',flexDirection:'row',alignItems: 'flex-start' }}>
     
//      <VerticalButtonGroup 
//      items={menuItems}
//      width="200px"       
//    //   backgroundColor ='#0070f3'
//    //   color = 'white'
//      isSticky={true}
//      verticalOffset='250px'
//      />
//       <div
//         className="title"
//         style={{
//           margin: 'auto',
//           width: '85%',
//         }}
//       >
//         <DataWrapper data={symbolsData} />
//       </div>
//       </div>
//       {/* <ScrollUpButton /> */}
//     </>
//   );
// }

// // Include data and metadata in getStaticProps
// export async function getStaticProps() {

  
//   const menuItems = [
//     {
//       title: "Linear Algebra",
//       // icon: <Home />,
//       link: "/math-symbols/linear-algebra"
//     },
//     {
//         title: "Mathematical Logic",
//         // icon: <Home />,
//         link: "/math-symbols/math-logic"
//       },
//       {
//         title: "Calculus",
//         // icon: <Home />,
//         link: "/math-symbols/calculus"
//       },
//       {
//         title: "Trigonometry",
//         // icon: <Home />,
//         link: "/math-symbols/trigonometry"
//       },
//       {
//         title: "Set Theory",
//         // icon: <Home />,
//         link: "/math-symbols/set-theory"
//       },

//       {
//         title: "Combinatorics",
//         // icon: <Home />,
//         link: "/math-symbols/combinatorics"
//       },
//        {
//           title: "Complex Numbers",
//           link: "/math-symbols/complex-numbers"  // Example without icon
//         },
//       // {
//       //   title: "Probability",
//       //   // icon: <Home />,
//       //   link: "/math-symbols/probability"
//       // },
//     // {
//     //   title: "Settings",
//     //   link: "/settings"  // Example without icon
//     // }
//   ];
 
//   const meta = {
//     title: 'Probability Symbols |Probability Symbols Chart',
//     description:
//       'Explore a comprehensive list of mathematical symbols, including LaTeX codes, charts, and explanations. Perfect for math enthusiasts, students, and educators.',
//     keywords: [
//       'math symbols',
//       'mathematical symbols',
//       'LaTeX',
//       'LaTeX code',
//       'math symbols list',
//       'math symbols chart',
//        'probability symbols',
//        'probability math symbols'
//     ],
//     author: 'LearnMathClass',
//     canonical: 'https://www.learnmathclass.com/math-symbols/probability',
//     pageHeading: 'Probability Symbols',
//   };
 
//   const symbolsData = {
//     "probability_and_statistics": [
//       {"symbol": "P(A ∩ B)", "latex_code": "P(A \\cap B)", "explanation": "Probability of A and B occurring"},
//       {"symbol": "P(A ∪ B)", "latex_code": "P(A \\cup B)", "explanation": "Probability of A or B occurring"},
//       {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "Conditional probability of A given B"},
//       {"symbol": "E(X)", "latex_code": "E(X)", "explanation": "Expected value of random variable X"},
//       {"symbol": "Var(X)", "latex_code": "\\text{Var}(X)", "explanation": "Variance of random variable X"},
//       {"symbol": "Cov(X, Y)", "latex_code": "\\text{Cov}(X, Y)", "explanation": "Covariance of random variables X and Y"}
//     ],
//     "probability_notations": [
//       {"symbol": "P(A)", "latex_code": "P(A)", "explanation": "Probability of event A"},
//       {"symbol": "P(¬A)", "latex_code": "P(\\neg A)", "explanation": "Probability of not A"},
//       {"symbol": "P(A ∩ B)", "latex_code": "P(A \\cap B)", "explanation": "Probability of A and B"},
//       {"symbol": "P(A ∪ B)", "latex_code": "P(A \\cup B)", "explanation": "Probability of A or B"},
//       {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "Conditional probability of A given B"}
//     ],
//     "random_variables_and_distributions": [
//       {"symbol": "X", "latex_code": "X", "explanation": "Random variable X"},
//       {"symbol": "f_X(x)", "latex_code": "f_X(x)", "explanation": "Probability density function of X"},
//       {"symbol": "F_X(x)", "latex_code": "F_X(x)", "explanation": "Cumulative distribution function of X"},
//       {"symbol": "μ", "latex_code": "\\mu", "explanation": "Mean of a distribution"},
//       {"symbol": "σ²", "latex_code": "\\sigma^2", "explanation": "Variance of a distribution"},
//       {"symbol": "σ", "latex_code": "\\sigma", "explanation": "Standard deviation of a distribution"}
//     ],
//     "common_distributions": [
//       {"symbol": "Bin(n, p)", "latex_code": "\\text{Bin}(n, p)", "explanation": "Binomial distribution with n trials and probability p"},
//       {"symbol": "Poisson(λ)", "latex_code": "\\text{Poisson}(\\lambda)", "explanation": "Poisson distribution with rate λ"},
//       {"symbol": "N(μ, σ²)", "latex_code": "\\mathcal{N}(\\mu, \\sigma^2)", "explanation": "Normal distribution with mean μ and variance σ²"},
//       {"symbol": "Exp(λ)", "latex_code": "\\text{Exp}(\\lambda)", "explanation": "Exponential distribution with rate λ"},
//       {"symbol": "U(a, b)", "latex_code": "\\text{U}(a, b)", "explanation": "Uniform distribution on the interval [a, b]"}
//     ],
//     "statistical_measures": [
//       {"symbol": "E(X)", "latex_code": "E(X)", "explanation": "Expected value of X"},
//       {"symbol": "Var(X)", "latex_code": "\\text{Var}(X)", "explanation": "Variance of X"},
//       {"symbol": "SD(X)", "latex_code": "\\text{SD}(X)", "explanation": "Standard deviation of X"},
//       {"symbol": "Cov(X, Y)", "latex_code": "\\text{Cov}(X, Y)", "explanation": "Covariance of X and Y"},
//       {"symbol": "Corr(X, Y)", "latex_code": "\\text{Corr}(X, Y)", "explanation": "Correlation of X and Y"}
//     ],
//     "hypothesis_testing": [
//       {"symbol": "H₀", "latex_code": "H_0", "explanation": "Null hypothesis"},
//       {"symbol": "H₁", "latex_code": "H_1", "explanation": "Alternative hypothesis"},
//       {"symbol": "α", "latex_code": "\\alpha", "explanation": "Significance level"},
//       {"symbol": "p-value", "latex_code": "\\text{p-value}", "explanation": "Probability of observing the data under H₀"},
//       {"symbol": "z", "latex_code": "z", "explanation": "Z-score in standard normal distribution"},
//       {"symbol": "t", "latex_code": "t", "explanation": "T-score in Student's t-distribution"}
//     ],
//     "information_theory": [
//       {"symbol": "H(X)", "latex_code": "H(X)", "explanation": "Entropy of random variable X"},
//       {"symbol": "I(X; Y)", "latex_code": "I(X; Y)", "explanation": "Mutual information between X and Y"},
//       {"symbol": "D(P || Q)", "latex_code": "D(P \\| Q)", "explanation": "Kullback–Leibler divergence between distributions P and Q"}
//     ],
//     "moment_generating_functions": [
//         {"symbol": "M_X(t)", "latex_code": "M_X(t)", "explanation": "Moment generating function of random variable X"},
//         {"symbol": "M_X(t) = E(e^(tX))", "latex_code": "M_X(t) = E(e^{tX})", "explanation": "Definition of the moment generating function"},
//         {"symbol": "M'(0) = E(X)", "latex_code": "M'(0) = E(X)", "explanation": "The first derivative of the MGF gives the mean"},
//         {"symbol": "M''(0) = Var(X) + (E(X))²", "latex_code": "M''(0) = \\text{Var}(X) + (E(X))^2", "explanation": "The second derivative of the MGF relates to variance"}
//       ],
//       "probability_inequalities": [
//     {"symbol": "P(X ≥ a) ≤ E(X)/a", "latex_code": "P(X \\geq a) \\leq \\frac{E(X)}{a}", "explanation": "Markov's inequality"},
//     {"symbol": "P(|X − μ| ≥ kσ) ≤ 1/k²", "latex_code": "P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}", "explanation": "Chebyshev's inequality"},
//     {"symbol": "P(Sₙ/n − μ ≥ ε) ≤ e^(−nε²/2σ²)", "latex_code": "P\\left(\\frac{S_n}{n} - \\mu \\geq \\epsilon\\right) \\leq e^{-\\frac{n\\epsilon^2}{2\\sigma^2}}", "explanation": "Hoeffding's inequality for large deviations"}
//   ],
//   "bayesian_statistics": [
//     {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "Posterior probability of A given B"},
//     {"symbol": "P(A | B) = (P(B | A)P(A)) / P(B)", "latex_code": "P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}", "explanation": "Bayes' theorem"},
//     {"symbol": "P(A, B)", "latex_code": "P(A, B)", "explanation": "Joint probability of A and B"},
//     {"symbol": "P(A ∩ B) = P(A)P(B | A)", "latex_code": "P(A \\cap B) = P(A) P(B \\mid A)", "explanation": "Chain rule of probability"}
//   ],
//   "regression_and_correlation": [
//     {"symbol": "Y = β₀ + β₁X + ε", "latex_code": "Y = \\beta_0 + \\beta_1 X + \\epsilon", "explanation": "Linear regression equation"},
//     {"symbol": "R²", "latex_code": "R^2", "explanation": "Coefficient of determination"},
//     {"symbol": "ρ(X, Y)", "latex_code": "\\rho(X, Y)", "explanation": "Pearson correlation coefficient between X and Y"},
//     {"symbol": "Cov(X, Y) = E(XY) − E(X)E(Y)", "latex_code": "\\text{Cov}(X, Y) = E(XY) - E(X)E(Y)", "explanation": "Covariance formula"}
//   ]
//   };
  


//   return {
//     props: {
//       symbolsData,
//       meta, // Pass SEO metadata
//       menuItems
//     },
//   };
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react';
import Head from 'next/head';
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup';

export default function MathSymbolsProbabilityPage({ symbolsData, meta, menuItems, schemas }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(', ')} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={meta.canonical} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpage) }}
        />
      </Head>

      {/* <GenericNavbar /> */}
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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        <VerticalButtonGroup
          items={menuItems}
          width="200px"
          isSticky={true}
          verticalOffset='250px'
        />
        <div
          className="title"
          style={{
            margin: 'auto',
            width: '80%',
          }}
        >
          <DataWrapper data={symbolsData} />
        </div>
      </div>
      {/* <ScrollUpButton /> */}
    </>
  );
}

export async function getStaticProps() {

  const menuItems = [
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
      title: "Set Theory",
      link: "/math-symbols/set-theory"
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
    title: 'Probability Symbols | Probability Notation Chart with LaTeX',
    description:
      'Complete reference of probability and statistics symbols with LaTeX codes and explanations. Covers random variables, distributions, expected value, variance, Bayes theorem, and more.',
    keywords: [
      'probability symbols',
      'probability notation',
      'statistics symbols',
      'random variable notation',
      'expected value symbol',
      'variance symbol',
      'Bayes theorem notation',
      'probability distribution symbols',
      'LaTeX probability',
      'math symbols',
      'math symbols chart'
    ],
    author: 'LearnMathClass',
    canonical: 'https://www.learnmathclass.com/math-symbols/probability',
    pageHeading: 'Probability Symbols',
  };

  const schemas = {
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Math Symbols",
          "item": "https://www.learnmathclass.com/math-symbols"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Probability",
          "item": "https://www.learnmathclass.com/math-symbols/probability"
        }
      ]
    },
    webpage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": meta.title,
      "description": meta.description,
      "url": "https://www.learnmathclass.com/math-symbols/probability",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "about": {
        "@type": "Thing",
        "name": "Probability and Statistics",
        "description": "Mathematical study of random events, distributions, and statistical inference"
      },
      "educationalLevel": "High School, Undergraduate",
      "learningResourceType": "Reference"
    }
  };

 const symbolsData = {
  "probability_and_statistics": [
    {"symbol": "P(A ∩ B)", "latex_code": "P(A \\cap B)", "explanation": "The [joint probability](!/probability/joint-probability) of events A and B both occurring. For independent events, P(A ∩ B) = P(A) · P(B)."},
    {"symbol": "P(A ∪ B)", "latex_code": "P(A \\cup B)", "explanation": "Probability of A or B (or both) occurring. Calculated as P(A) + P(B) − P(A ∩ B) by the [addition rule](!/probability/rules)."},
    {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "[Conditional probability](!/probability/conditional-probability) of A given that B has occurred. Defined as P(A ∩ B) / P(B) when P(B) > 0."},
    {"symbol": "E(X)", "latex_code": "E(X)", "explanation": "The [expected value](!/probability/expected-value) (mean) of random variable X — the long-run average value over many trials."},
    {"symbol": "Var(X)", "latex_code": "\\text{Var}(X)", "explanation": "The [variance](!/probability/variance) of X, measuring how spread out values are from the mean. Equals E[(X − μ)²]."},
    {"symbol": "Cov(X, Y)", "latex_code": "\\text{Cov}(X, Y)", "explanation": "The [covariance](!/probability/covariance) of X and Y, measuring how two variables change together. Positive means they increase together."}
  ],
  "probability_notations": [
    {"symbol": "P(A)", "latex_code": "P(A)", "explanation": "Probability of [event](!/probability/events) A occurring. Always between 0 and 1, where 0 means impossible and 1 means certain."},
    {"symbol": "P(¬A)", "latex_code": "P(\\neg A)", "explanation": "Probability of A not occurring (complement). Equals 1 − P(A) by the [complement rule](!/probability/rules)."},
    {"symbol": "P(A ∩ B)", "latex_code": "P(A \\cap B)", "explanation": "[Joint probability](!/probability/joint-probability) of A and B. For [independent](!/probability/independence) events: P(A ∩ B) = P(A) · P(B)."},
    {"symbol": "P(A ∪ B)", "latex_code": "P(A \\cup B)", "explanation": "Probability of A or B. Use [Venn diagrams](!/probability/visual-tools/venn-diagrams) to visualize the union of events."},
    {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "[Conditional probability](!/probability/conditional-probability) — the probability of A when we know B happened. Central to [Bayes' theorem](!/probability/bayes-theorem)."}
  ],
  "random_variables_and_distributions": [
    {"symbol": "X", "latex_code": "X", "explanation": "A [random variable](!/probability/random-variables) — a function that assigns numerical values to outcomes in a sample space."},
    {"symbol": "f_X(x)", "latex_code": "f_X(x)", "explanation": "The [probability function](!/probability/probability-function). For discrete X, gives P(X = x). For continuous X, integrates to give probabilities."},
    {"symbol": "F_X(x)", "latex_code": "F_X(x)", "explanation": "The [cumulative distribution function](!/probability/cdf) (CDF). Gives P(X ≤ x) and is non-decreasing from 0 to 1."},
    {"symbol": "μ", "latex_code": "\\mu", "explanation": "Population mean — the [expected value](!/probability/expected-value) of a distribution. The center of mass of the probability distribution."},
    {"symbol": "σ²", "latex_code": "\\sigma^2", "explanation": "Population [variance](!/probability/variance) — measures the average squared deviation from the mean."},
    {"symbol": "σ", "latex_code": "\\sigma", "explanation": "Standard deviation — the square root of variance. Same units as the original data, easier to interpret than variance."}
  ],
  "common_distributions": [
    {"symbol": "Bin(n, p)", "latex_code": "\\text{Bin}(n, p)", "explanation": "[Binomial distribution](!/probability/distributions/discrete/binomial) — models the number of successes in n independent trials, each with success probability p."},
    {"symbol": "Poisson(λ)", "latex_code": "\\text{Poisson}(\\lambda)", "explanation": "[Poisson distribution](!/probability/distributions/discrete/poisson) — models rare events occurring at rate λ per interval. Mean and variance both equal λ."},
    {"symbol": "N(μ, σ²)", "latex_code": "\\mathcal{N}(\\mu, \\sigma^2)", "explanation": "[Normal distribution](!/probability/distributions/continuous/normal) — the bell curve. Central to statistics due to the [central limit theorem](!/probability/central-limit-theorem)."},
    {"symbol": "Exp(λ)", "latex_code": "\\text{Exp}(\\lambda)", "explanation": "[Exponential distribution](!/probability/distributions/continuous/exponential) — models waiting times between Poisson events. Memoryless property."},
    {"symbol": "U(a, b)", "latex_code": "\\text{U}(a, b)", "explanation": "[Uniform distribution](!/probability/distributions/continuous/uniform) — all values in [a, b] equally likely. Mean is (a + b)/2."}
  ],
  "statistical_measures": [
    {"symbol": "E(X)", "latex_code": "E(X)", "explanation": "[Expected value](!/probability/expected-value) — weighted average of all possible values, weighted by their probabilities."},
    {"symbol": "Var(X)", "latex_code": "\\text{Var}(X)", "explanation": "[Variance](!/probability/variance) — E[(X − μ)²] or equivalently E(X²) − [E(X)]². Measures dispersion."},
    {"symbol": "SD(X)", "latex_code": "\\text{SD}(X)", "explanation": "Standard deviation — √Var(X). In the same units as X, unlike variance which is in squared units."},
    {"symbol": "Cov(X, Y)", "latex_code": "\\text{Cov}(X, Y)", "explanation": "[Covariance](!/probability/covariance) — E(XY) − E(X)E(Y). Zero for independent variables, but zero covariance doesn't imply independence."},
    {"symbol": "Corr(X, Y)", "latex_code": "\\text{Corr}(X, Y)", "explanation": "Correlation coefficient — Cov(X,Y)/(σ_X · σ_Y). Standardized to range from −1 to 1."}
  ],
  "hypothesis_testing": [
    {"symbol": "H₀", "latex_code": "H_0", "explanation": "Null hypothesis — the default assumption to be tested. Typically states \"no effect\" or \"no difference\"."},
    {"symbol": "H₁", "latex_code": "H_1", "explanation": "Alternative hypothesis — what we accept if we reject H₀. Can be one-sided or two-sided."},
    {"symbol": "α", "latex_code": "\\alpha", "explanation": "Significance level — the probability of rejecting H₀ when it's actually true (Type I error). Common values: 0.05, 0.01."},
    {"symbol": "p-value", "latex_code": "\\text{p-value}", "explanation": "Probability of observing data at least as extreme as what was observed, assuming H₀ is true. Reject H₀ if p-value < α."},
    {"symbol": "z", "latex_code": "z", "explanation": "Z-score — number of standard deviations from the mean. Uses the [normal distribution](!/probability/distributions/continuous/normal) for large samples."},
    {"symbol": "t", "latex_code": "t", "explanation": "T-score — similar to z-score but accounts for uncertainty in estimated standard deviation. Uses the [t-distribution](!/probability/tables/t-distribution)."}
  ],
  "information_theory": [
    {"symbol": "H(X)", "latex_code": "H(X)", "explanation": "Entropy — measures uncertainty or information content of X. Higher entropy means more unpredictable outcomes."},
    {"symbol": "I(X; Y)", "latex_code": "I(X; Y)", "explanation": "Mutual information — measures how much knowing X reduces uncertainty about Y. Zero if X and Y are [independent](!/probability/independence)."},
    {"symbol": "D(P || Q)", "latex_code": "D(P \\| Q)", "explanation": "Kullback–Leibler divergence — measures how distribution P differs from reference distribution Q. Not symmetric."}
  ],
  "moment_generating_functions": [
    {"symbol": "M_X(t)", "latex_code": "M_X(t)", "explanation": "Moment generating function of X — encodes all moments of the distribution. Useful for proving distribution properties."},
    {"symbol": "M_X(t) = E(e^(tX))", "latex_code": "M_X(t) = E(e^{tX})", "explanation": "Definition of MGF — the [expected value](!/probability/expected-value) of e^(tX). Exists when this expectation is finite near t = 0."},
    {"symbol": "M'(0) = E(X)", "latex_code": "M'(0) = E(X)", "explanation": "First derivative of MGF at t = 0 gives the mean. This is why it's called \"moment generating\"."},
    {"symbol": "M''(0) = E(X²)", "latex_code": "M''(0) = E(X^2)", "explanation": "Second derivative at t = 0 gives E(X²). Combined with M'(0), we can find [variance](!/probability/variance): Var(X) = E(X²) − [E(X)]²."}
  ],
  "probability_inequalities": [
    {"symbol": "P(X ≥ a) ≤ E(X)/a", "latex_code": "P(X \\geq a) \\leq \\frac{E(X)}{a}", "explanation": "[Markov's inequality](!/probability/inequalities/markov) — bounds tail probability using only the mean. Requires X ≥ 0 and a > 0."},
    {"symbol": "P(|X − μ| ≥ kσ) ≤ 1/k²", "latex_code": "P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}", "explanation": "[Chebyshev's inequality](!/probability/inequalities/chebyshev) — at most 1/k² of values lie more than k standard deviations from the mean."},
    {"symbol": "P(Sₙ/n − μ ≥ ε) ≤ e^(−nε²/2σ²)", "latex_code": "P\\left(\\frac{S_n}{n} - \\mu \\geq \\epsilon\\right) \\leq e^{-\\frac{n\\epsilon^2}{2\\sigma^2}}", "explanation": "Hoeffding's inequality — exponentially decreasing bound on deviations of sample means. Tighter than Chebyshev for large n."}
  ],
  "bayesian_statistics": [
    {"symbol": "P(A | B)", "latex_code": "P(A \\mid B)", "explanation": "Posterior probability — our updated belief in A after observing evidence B. The output of [Bayes' theorem](!/probability/bayes-theorem)."},
    {"symbol": "P(A | B) = P(B | A)P(A) / P(B)", "latex_code": "P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}", "explanation": "[Bayes' theorem](!/probability/bayes-theorem) — relates posterior to prior P(A) and likelihood P(B|A). Foundation of Bayesian inference."},
    {"symbol": "P(A, B)", "latex_code": "P(A, B)", "explanation": "[Joint probability](!/probability/joint-probability) of A and B — same as P(A ∩ B). The probability both events occur together."},
    {"symbol": "P(A ∩ B) = P(A)P(B | A)", "latex_code": "P(A \\cap B) = P(A) P(B \\mid A)", "explanation": "Multiplication rule — expresses joint probability in terms of [conditional probability](!/probability/conditional-probability). Basis for [tree diagrams](!/probability/tree-diagrams)."}
  ],
  "regression_and_correlation": [
    {"symbol": "Y = β₀ + β₁X + ε", "latex_code": "Y = \\beta_0 + \\beta_1 X + \\epsilon", "explanation": "Simple linear regression model — β₀ is intercept, β₁ is slope, ε is random error with E(ε) = 0."},
    {"symbol": "R²", "latex_code": "R^2", "explanation": "Coefficient of determination — proportion of [variance](!/probability/variance) in Y explained by X. Ranges from 0 to 1."},
    {"symbol": "ρ(X, Y)", "latex_code": "\\rho(X, Y)", "explanation": "Pearson correlation — measures linear relationship strength. Equals ±1 for perfect linear relationship, 0 for no linear correlation."},
    {"symbol": "Cov(X, Y) = E(XY) − E(X)E(Y)", "latex_code": "\\text{Cov}(X, Y) = E(XY) - E(X)E(Y)", "explanation": "[Covariance](!/probability/covariance) formula — alternative computation using expected values. Useful for theoretical derivations."}
  ]
};

  return {
    props: {
      symbolsData,
      meta,
      menuItems,
      schemas
    },
  };
}