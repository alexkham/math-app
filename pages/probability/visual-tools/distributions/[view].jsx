
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import Head from 'next/head'
// import '../../../../pages/pages.css'
// import DiscreteUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/DiscreteUniformDistributionExplorer'
// import BinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/BinomialDistributionExplorer'
// import GeometricDistributionExplorerer from '@/app/components/probability/explorers/distributions/discrete/GeometricDistributionExplorer'
// import HypergeometricDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/HyperGeometricDistributionExplorer'
// import NegativeBinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/NegativeBinomialDistributionExplorer'
// import PoissonDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/PoissonDistributionExplorer'
// import ContinuousUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ContinuousUniformDistributionVisualizer'
// import ExponentialDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ExponentialDistributionExplorer'
// import NormalDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/NormalDistributionExplorer'

// export async function getStaticPaths() {
//   const paths = [
//     { params: { view: 'binomial' } },
//     { params: { view: 'geometric' } },
//     { params: { view: 'negative-binomial' } },
//     { params: { view: 'poisson' } },
//     { params: { view: 'hypergeometric' } },
//     { params: { view: 'uniform-discrete' } },
//     { params: { view: 'normal' } },
//     { params: { view: 'exponential' } },
//     { params: { view: 'uniform-continuous' } },
//   ];

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const { view } = params;

//   const viewConfig = {
//     'binomial': {
//       componentName: 'BinomialDistributionExplorer',
//       title: 'Binomial Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the binomial distribution with an interactive calculator. Calculate probabilities for n trials with probability p of success. Visualize PMF, CDF, and understand parameters through dynamic charts.',
//       keywords: ['binomial distribution', 'binomial calculator', 'binomial probability', 'discrete distribution', 'n trials', 'probability of success', 'binomial PMF', 'binomial CDF'],
//       h1Title: 'Binomial Distribution Explorer',
//       url: '/probability/visual-tools/distributions/binomial',
//       name: 'Binomial Distribution Calculator'
//     },
//     'geometric': {
//       componentName: 'GeometricDistributionExplorer',
//       title: 'Geometric Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the geometric distribution with an interactive calculator. Calculate the probability of the first success occurring on trial k. Visualize PMF, CDF, and understand memoryless property.',
//       keywords: ['geometric distribution', 'geometric calculator', 'first success', 'discrete distribution', 'memoryless property', 'geometric PMF', 'geometric CDF'],
//       h1Title: 'Geometric Distribution Explorer',
//       url: '/probability/visual-tools/distributions/geometric',
//       name: 'Geometric Distribution Calculator'
//     },
//     'negative-binomial': {
//       componentName: 'NegativeBinomialDistributionExplorer',
//       title: 'Negative Binomial Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the negative binomial distribution with an interactive calculator. Calculate the number of trials needed to achieve r successes. Visualize PMF, CDF, and understand parameters.',
//       keywords: ['negative binomial distribution', 'negative binomial calculator', 'r successes', 'discrete distribution', 'trials until success', 'negative binomial PMF'],
//       h1Title: 'Negative Binomial Distribution Explorer',
//       url: '/probability/visual-tools/distributions/negative-binomial',
//       name: 'Negative Binomial Distribution Calculator'
//     },
//     'poisson': {
//       componentName: 'PoissonDistributionExplorer',
//       title: 'Poisson Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the Poisson distribution with an interactive calculator. Model the number of events in a fixed interval with parameter λ. Visualize PMF, CDF, and understand rate parameters.',
//       keywords: ['poisson distribution', 'poisson calculator', 'lambda parameter', 'discrete distribution', 'event rate', 'poisson PMF', 'poisson CDF'],
//       h1Title: 'Poisson Distribution Explorer',
//       url: '/probability/visual-tools/distributions/poisson',
//       name: 'Poisson Distribution Calculator'
//     },
//     'hypergeometric': {
//       componentName: 'HypergeometricDistributionExplorer',
//       title: 'Hypergeometric Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the hypergeometric distribution with an interactive calculator. Calculate probabilities for sampling without replacement from a finite population. Visualize PMF, CDF, and understand population parameters.',
//       keywords: ['hypergeometric distribution', 'hypergeometric calculator', 'sampling without replacement', 'discrete distribution', 'finite population', 'hypergeometric PMF'],
//       h1Title: 'Hypergeometric Distribution Explorer',
//       url: '/probability/visual-tools/distributions/hypergeometric',
//       name: 'Hypergeometric Distribution Calculator'
//     },
//     'uniform-discrete': {
//       componentName: 'DiscreteUniformDistributionExplorer',
//       title: 'Discrete Uniform Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the discrete uniform distribution with an interactive calculator. Model equally likely outcomes over a discrete range. Visualize PMF, CDF, and understand uniform probabilities.',
//       keywords: ['discrete uniform distribution', 'uniform calculator', 'equally likely outcomes', 'discrete distribution', 'uniform PMF', 'discrete uniform CDF'],
//       h1Title: 'Discrete Uniform Distribution Explorer',
//       url: '/probability/visual-tools/distributions/uniform-discrete',
//       name: 'Discrete Uniform Distribution Calculator'
//     },
//     'normal': {
//       componentName: 'NormalDistributionExplorer',
//       title: 'Normal Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the normal (Gaussian) distribution with an interactive calculator. Calculate probabilities using mean μ and standard deviation σ. Visualize PDF, CDF, and understand the bell curve.',
//       keywords: ['normal distribution', 'gaussian distribution', 'normal calculator', 'bell curve', 'continuous distribution', 'mean', 'standard deviation', 'normal PDF', 'normal CDF'],
//       h1Title: 'Normal Distribution Explorer',
//       url: '/probability/visual-tools/distributions/normal',
//       name: 'Normal Distribution Calculator'
//     },
//     'exponential': {
//       componentName: 'ExponentialDistributionExplorer',
//       title: 'Exponential Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the exponential distribution with an interactive calculator. Model time between events in a Poisson process with rate λ. Visualize PDF, CDF, and understand memoryless property.',
//       keywords: ['exponential distribution', 'exponential calculator', 'continuous distribution', 'rate parameter', 'memoryless', 'exponential PDF', 'exponential CDF', 'poisson process'],
//       h1Title: 'Exponential Distribution Explorer',
//       url: '/probability/visual-tools/distributions/exponential',
//       name: 'Exponential Distribution Calculator'
//     },
//     'uniform-continuous': {
//       componentName: 'ContinuousUniformDistributionExplorer',
//       title: 'Continuous Uniform Distribution Calculator | Interactive Explorer | Learn Math Class',
//       description: 'Explore the continuous uniform distribution with an interactive calculator. Model equally likely outcomes over a continuous interval [a,b]. Visualize PDF, CDF, and understand uniform density.',
//       keywords: ['continuous uniform distribution', 'uniform calculator', 'continuous distribution', 'uniform PDF', 'uniform CDF', 'constant density'],
//       h1Title: 'Continuous Uniform Distribution Explorer',
//       url: '/probability/visual-tools/distributions/uniform-continuous',
//       name: 'Continuous Uniform Distribution Calculator'
//     }
//   };

//   const config = viewConfig[view];

//   const sectionsContent = {
//     obj1: {
//       title: `Understanding the Distribution`,
//       content: ``,
//       link: '',
//     },
//     obj2: {
//       title: `Key Parameters`,
//       content: ``,
//       link: '',
//     },
//     obj3: {
//       title: `Applications`,
//       content: ``,
//       link: '',
//     }
//   };

//   const introContent = {
//     id: "intro",
//     title: "Interactive Distribution Explorer",
//     content: `Use the interactive calculator below to explore this probability distribution. Adjust parameters to see how they affect probabilities and visualize the distribution.`
//   };

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       seoData: {
//         title: config.title,
//         description: config.description,
//         keywords: config.keywords.join(", "),
//         url: config.url,
//         name: config.name
//       },
//       componentName: config.componentName,
//       h1Title: config.h1Title
//     }
//   };
// }

// export default function DistributionExplorerPage({ seoData, sectionsContent, introContent, componentName, h1Title }) {

//   const genericSections = [
//     {
//       id: '1',
//       title: sectionsContent.obj1.title,
//       link: sectionsContent.obj1.link,
//       content: [sectionsContent.obj1.content]
//     },
//     {
//       id: '2',
//       title: sectionsContent.obj2.title,
//       link: sectionsContent.obj2.link,
//       content: [sectionsContent.obj2.content]
//     },
//     {
//       id: '3',
//       title: sectionsContent.obj3.title,
//       link: sectionsContent.obj3.link,
//       content: [sectionsContent.obj3.content]
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />
        
//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />
        
//         <meta name="robots" content="index, follow" />
        
//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": seoData.name,
//               "description": seoData.description,
//               "keywords": seoData.keywords,
//               "url": `https://www.learnmathclass.com${seoData.url}`,
//               "dateModified": new Date().toISOString(),
//               "inLanguage": "en-US",
//               "mainEntity": {
//                 "@type": "Article",
//                 "name": seoData.name,
//                 "dateModified": new Date().toISOString(),
//                 "author": {
//                   "@type": "Organization",
//                   "name": "Learn Math Class"
//                 }
//               }
//             })
//           }}
//         />
//       </Head>

//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       /> 
//       <Breadcrumb/>
//       <br/>
//       <br/>
//       <h1 className='title' style={{marginTop:'-50px', marginBottom:'-20px'}}>
//         {h1Title}
//       </h1>
//       <br/>
//       <div style={{width:'80%',margin:'auto'}}>
//       {/* Discrete Distribution Explorers */}
//       {componentName === 'BinomialDistributionExplorer' && <BinomialDistributionExplorer 
//       title='Modify Parameters and See Results'/>}
//       {componentName === 'GeometricDistributionExplorer' && <GeometricDistributionExplorerer 
//       title='Modify Parameters and See Results'/>}
//       {componentName === 'NegativeBinomialDistributionExplorer' && <NegativeBinomialDistributionExplorer
//       title='Modify Parameters and See Results'/>}
//       {componentName === 'PoissonDistributionExplorer' && <PoissonDistributionExplorer
//       title='Modify Parameters and See Results'/>}
//       {componentName === 'HypergeometricDistributionExplorer' && <HypergeometricDistributionExplorer
//       title='Modify Parameters and See Results'/>}
//       {componentName === 'DiscreteUniformDistributionExplorer' && <DiscreteUniformDistributionExplorer
//       title='Modify Parameters and See Results'/>}

//       {/* Continuous Distribution Explorers */}
//       {componentName === 'NormalDistributionExplorer' && <NormalDistributionExplorer
//       title='Modify Parameters and See Results'/>}
//       {componentName === 'ExponentialDistributionExplorer' && <ExponentialDistributionExplorer
//       title='Modify Parameters and See Results'/>}
//       {componentName === 'ContinuousUniformDistributionExplorer' && <ContinuousUniformDistributionExplorer
//       title='Modify Parameters and See Results'/>}
//      </div>
//       <br/>
//       <SectionTableOfContents sections={genericSections}/>
//       <br/>
//       <br/>
//       <br/>
//       {/* <IntroSection 
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor='#f9fafb'
//         textColor="#06357a"
//       /> */}
//       <br/>
//       <br/>
//       <Sections sections={genericSections}/>
//       <br/>
//       <br/>
//       <br/>
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import Head from 'next/head'
import '../../../../pages/pages.css'
import DiscreteUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/DiscreteUniformDistributionExplorer'
import BinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/BinomialDistributionExplorer'
import GeometricDistributionExplorerer from '@/app/components/probability/explorers/distributions/discrete/GeometricDistributionExplorer'
import HypergeometricDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/HyperGeometricDistributionExplorer'
import NegativeBinomialDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/NegativeBinomialDistributionExplorer'
import PoissonDistributionExplorer from '@/app/components/probability/explorers/distributions/discrete/PoissonDistributionExplorer'
import ContinuousUniformDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ContinuousUniformDistributionVisualizer'
import ExponentialDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/ExponentialDistributionExplorer'
import NormalDistributionExplorer from '@/app/components/probability/explorers/distributions/continuous/NormalDistributionExplorer'

export async function getStaticPaths() {
  const paths = [
    { params: { view: 'binomial' } },
    { params: { view: 'geometric' } },
    { params: { view: 'negative-binomial' } },
    { params: { view: 'poisson' } },
    { params: { view: 'hypergeometric' } },
    { params: { view: 'uniform-discrete' } },
    { params: { view: 'normal' } },
    { params: { view: 'exponential' } },
    { params: { view: 'uniform-continuous' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { view } = params;

  const viewConfig = {
    'binomial': {
      componentName: 'BinomialDistributionExplorer',
      title: 'Binomial Distribution Calculator | Interactive Explorer | Learn Math Class',
      description: 'Calculate binomial probabilities for n trials with success probability p. Interactive tool with PMF/CDF visualization, parameter controls, and step-by-step probability calculations.',
      h1Title: 'Binomial Distribution Explorer',
      url: '/probability/visual-tools/distributions/binomial',
      name: 'Binomial Distribution Calculator',
      keywords: [
        'binomial distribution',
        'binomial calculator',
        'binomial probability',
        'discrete distribution',
        'n trials p success',
        'binomial PMF',
        'binomial CDF',
        'success failure trials',
        'independent trials calculator',
        'binomial coefficient',
        'interactive binomial',
        'binomial distribution visualization',
        'calculate binomial probability',
        'binomial distribution formula',
        'binomial statistics calculator'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - BINOMIAL - TO BE FILLED IN STEP 2
      // },
      // BINOMIAL DISTRIBUTION CONTENT BLOCK
// Replace the placeholder in view_skeleton.jsx with this content

sectionsContent: {
  obj1: {
    title: 'Using the Parameter Controls',
    content: `Adjust **n (number of trials)** using the top slider to set how many independent experiments you're running. The slider ranges from 1 to 50 trials, allowing you to model scenarios from a single coin flip to extensive quality control batches.

Set **p (success probability)** with the bottom slider to define the likelihood of success on each trial. Values range from 0.01 to 0.99, with 0.5 representing equally likely outcomes like fair coin flips.

Watch the visualization update in real-time as you modify parameters. The blue bars show the probability mass function (PMF), displaying the exact probability for each possible number of successes from 0 to n.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Interpreting the PMF Chart',
    content: `The **PMF (Probability Mass Function)** chart displays vertical bars for each possible outcome. The height of each bar represents P(X = k), the probability of getting exactly k successes.

The distribution's shape changes dramatically with different parameters. When p = 0.5, the distribution is symmetric. As p moves toward 0 or 1, the distribution becomes increasingly skewed.

The tallest bar indicates the **mode** - the most likely number of successes. For n trials with probability p, the mode is approximately at np, which matches the distribution's mean.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Understanding the CDF Graph',
    content: `The **CDF (Cumulative Distribution Function)** shows P(X ≤ k), the probability of getting k or fewer successes. Unlike the PMF's discrete bars, the CDF displays as a step function that increases from 0 to 1.

Each step in the CDF corresponds to adding one more outcome's probability. The steeper the step, the higher the probability of that specific outcome.

Use the CDF to quickly find probabilities for ranges. For example, P(X ≤ 7) can be read directly from the CDF curve at x = 7.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Calculating Point Probabilities',
    content: `Enter a value k in the **Point Probability** calculator to find P(X = k), the exact probability of getting k successes. The calculator uses the binomial formula: C(n,k) × p^k × (1-p)^(n-k).

The binomial coefficient C(n,k) counts the number of ways to arrange k successes among n trials. The calculator handles this computation automatically, even for large values where manual calculation would be impractical.

Try calculating P(X = 5) for n = 10, p = 0.5. You should get approximately 0.246, meaning there's about a 24.6% chance of exactly 5 successes in 10 fair coin flips.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Computing Cumulative Probabilities',
    content: `The **Cumulative Probability** calculator computes P(X ≤ k) by summing probabilities from 0 to k. This answers questions like "What's the probability of at most k successes?"

For the complement, use **P(X > k)** to find the probability of more than k successes. This equals 1 - P(X ≤ k) and is useful for threshold problems.

**P(X ≥ k)** includes k itself in the count, while **P(X > k)** starts counting from k+1. Understanding this distinction prevents off-by-one errors in probability calculations.`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Range Probability Calculations',
    content: `The **Range Probability** section calculates P(a ≤ X ≤ b), the probability that X falls between two values inclusive. Enter lower bound a and upper bound b to see how much probability mass lies in that interval.

Four range options handle boundary conditions differently:
• **[a, b]** includes both endpoints
• **(a, b)** excludes both endpoints  
• **[a, b)** includes a, excludes b
• **(a, b]** excludes a, includes b

For discrete distributions, these distinctions matter. P(3 ≤ X ≤ 7) includes outcomes 3, 4, 5, 6, and 7, while P(3 < X < 7) includes only 4, 5, and 6.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Binomial Distribution?',
    content: `The binomial distribution models the number of successes in a fixed number of independent trials, where each trial has the same probability of success. It's one of the most fundamental discrete probability distributions.

The distribution requires four conditions: (1) fixed number of trials n, (2) each trial has two outcomes (success/failure), (3) constant success probability p, and (4) trials are independent.

Common applications include quality control (number of defective items), clinical trials (number of patients responding to treatment), and survey sampling (number of favorable responses). For comprehensive theory and formulas, see **binomial distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'Understanding Distribution Parameters',
    content: `The distribution has two parameters: **n** determines the number of trials, while **p** sets the success probability for each trial. Together, they completely specify the distribution's behavior.

The **mean** (expected value) equals np - if you have 100 trials with p = 0.3, expect about 30 successes on average. The **variance** equals np(1-p), measuring spread around the mean.

The **standard deviation** $\\sqrt{np(1-p)}$ indicates typical deviation from the mean. When p = 0.5, variance is maximized at n/4, creating the widest spread for a given n.`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Normal Approximation Rule',
    content: `When n is large and p isn't too close to 0 or 1, the binomial distribution approximates a **normal distribution**. The rule of thumb: use normal approximation when both np ≥ 5 and n(1-p) ≥ 5.

The approximating normal distribution has mean μ = np and standard deviation σ = $\\sqrt{np(1-p)}$. Apply a continuity correction by adding/subtracting 0.5 to discrete values for better accuracy.

This approximation simplifies calculations for large n where computing exact binomial probabilities becomes computationally expensive. For detailed guidance on when to use this approximation, see **normal approximation to binomial**.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Tools',
    content: `The **geometric distribution** is related - it counts trials until the first success, while binomial counts successes in n trials. The **negative binomial distribution** generalizes geometric to r successes.

For large n and small p, the **Poisson distribution** approximates the binomial with λ = np. This is useful when modeling rare events in large populations.

**Related Tools:**

**Geometric Distribution Calculator** - Trials until first success

**Negative Binomial Calculator** - Trials until r successes  

**Poisson Distribution Calculator** - Rare event modeling

**Probability Theory Fundamentals** - Core concepts and definitions`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the binomial distribution used for?",
    answer: "The binomial distribution models the number of successes in a fixed number of independent trials, each with the same probability of success. It's used in quality control, clinical trials, survey sampling, and any scenario involving repeated yes/no experiments."
  },
  obj2: {
    question: "How do you calculate binomial probability?",
    answer: "Binomial probability uses the formula P(X = k) = C(n,k) × p^k × (1-p)^(n-k), where C(n,k) is the binomial coefficient, n is the number of trials, k is the number of successes, and p is the success probability. The calculator automates this computation."
  },
  obj3: {
    question: "When should I use the binomial distribution?",
    answer: "Use the binomial distribution when you have a fixed number of independent trials, each trial has exactly two outcomes (success/failure), the probability of success stays constant across trials, and you want to count the total number of successes."
  },
  obj4: {
    question: "What's the difference between PMF and CDF?",
    answer: "The PMF (Probability Mass Function) gives the exact probability of a specific outcome, like P(X = 5). The CDF (Cumulative Distribution Function) gives the probability of getting that value or less, like P(X ≤ 5), by summing all PMF values up to that point."
  },
  obj5: {
    question: "What are the mean and variance of a binomial distribution?",
    answer: "The mean of a binomial distribution equals np (trials times success probability). The variance equals np(1-p). The standard deviation is the square root of the variance: √(np(1-p)). These formulas let you quickly assess the distribution's center and spread."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Binomial Distribution Calculator",
    "description": "Calculate binomial probabilities for n trials with success probability p. Interactive tool with PMF/CDF visualization, parameter controls, and step-by-step probability calculations.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/binomial",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Interactive parameter controls for n trials and p success probability",
      "Real-time PMF (Probability Mass Function) visualization with bar charts",
      "CDF (Cumulative Distribution Function) step function display",
      "Point probability calculator for P(X = k)",
      "Cumulative probability calculator for P(X ≤ k), P(X < k), P(X ≥ k), P(X > k)",
      "Range probability calculator with inclusive/exclusive boundary options",
      "Automatic calculation of mean, variance, standard deviation, and mode"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Binomial Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/binomial"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the binomial distribution used for?",
          answer: "The binomial distribution models the number of successes in a fixed number of independent trials, each with the same probability of success. It's used in quality control, clinical trials, survey sampling, and any scenario involving repeated yes/no experiments."
        },
        obj2: {
          question: "How do you calculate binomial probability?",
          answer: "Binomial probability uses the formula P(X = k) = C(n,k) × p^k × (1-p)^(n-k), where C(n,k) is the binomial coefficient, n is the number of trials, k is the number of successes, and p is the success probability. The calculator automates this computation."
        },
        obj3: {
          question: "When should I use the binomial distribution?",
          answer: "Use the binomial distribution when you have a fixed number of independent trials, each trial has exactly two outcomes (success/failure), the probability of success stays constant across trials, and you want to count the total number of successes."
        },
        obj4: {
          question: "What's the difference between PMF and CDF?",
          answer: "The PMF (Probability Mass Function) gives the exact probability of a specific outcome, like P(X = 5). The CDF (Cumulative Distribution Function) gives the probability of getting that value or less, like P(X ≤ 5), by summing all PMF values up to that point."
        },
        obj5: {
          question: "What are the mean and variance of a binomial distribution?",
          answer: "The mean of a binomial distribution equals np (trials times success probability). The variance equals np(1-p). The standard deviation is the square root of the variance: √(np(1-p)). These formulas let you quickly assess the distribution's center and spread."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Binomial Distribution Calculator",
          "description": "Calculate binomial probabilities for n trials with success probability p. Interactive tool with PMF/CDF visualization, parameter controls, and step-by-step probability calculations.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/binomial",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Interactive parameter controls for n trials and p success probability",
            "Real-time PMF (Probability Mass Function) visualization with bar charts",
            "CDF (Cumulative Distribution Function) step function display",
            "Point probability calculator for P(X = k)",
            "Cumulative probability calculator for P(X ≤ k), P(X < k), P(X ≥ k), P(X > k)",
            "Range probability calculator with inclusive/exclusive boundary options",
            "Automatic calculation of mean, variance, standard deviation, and mode"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Binomial Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/binomial"
            }
          ]
        }
      }
    },

    'geometric': {
      componentName: 'GeometricDistributionExplorer',
      title: 'Geometric Distribution Calculator | First Success Probability | Learn Math Class',
      description: 'Calculate geometric probabilities for trials until first success. Interactive calculator with memoryless property visualization, PMF/CDF charts, and comprehensive probability tools.',
      h1Title: 'Geometric Distribution Explorer',
      url: '/probability/visual-tools/distributions/geometric',
      name: 'Geometric Distribution Calculator',
      keywords: [
        'geometric distribution',
        'geometric calculator',
        'first success probability',
        'trials until success',
        'memoryless property',
        'geometric PMF',
        'geometric CDF',
        'waiting time distribution',
        'geometric probability formula',
        'interactive geometric distribution',
        'geometric distribution examples',
        'calculate geometric probability',
        'discrete geometric',
        'geometric vs binomial',
        'geometric distribution mean'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - GEOMETRIC - TO BE FILLED IN STEP 2
      // },
      // GEOMETRIC DISTRIBUTION CONTENT BLOCK
// Replace the placeholder in view_skeleton.jsx with this content

sectionsContent: {
  obj1: {
    title: 'Adjusting Success Probability',
    content: `Use the **p slider** to set the probability of success on each trial. Values range from 0.01 (very rare success) to 0.99 (almost certain success), controlling how quickly you expect to see the first success.

As you increase p, the distribution becomes more concentrated at k = 1, meaning the first success is more likely to occur on the first trial. As p decreases, the distribution spreads out with longer waiting times becoming more probable.

Watch how the expected value E[X] = 1/p changes with the slider. At p = 0.5, expect 2 trials on average. At p = 0.1, expect 10 trials. The relationship is perfectly reciprocal.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Reading the PMF Visualization',
    content: `The PMF chart shows probability bars starting at k = 1 (first trial). The distribution always has its mode at k = 1, with probabilities decreasing exponentially for higher k values.

Each bar represents P(X = k), the probability that the first success occurs exactly on trial k. The height decreases by a factor of (1-p) for each subsequent trial, creating the characteristic exponentially decaying pattern.

The displayed range extends to about 30 trials by default, but the distribution theoretically continues to infinity. Probabilities become negligible beyond a few multiples of the mean 1/p.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Understanding the CDF Display',
    content: `The CDF curve shows P(X ≤ k), the probability that success occurs within the first k trials. Unlike the continuous CDF for other distributions, this appears as a step function jumping at each integer value.

The CDF rises quickly when p is large, reaching values near 1 within just a few trials. For small p, the CDF rises slowly, indicating that many trials might be needed before seeing success.

At any point k, the CDF value equals 1 - (1-p)^k, providing a closed-form expression for cumulative probabilities without needing to sum individual terms.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Computing Exact Probabilities',
    content: `Enter trial number k in the **Point Probability** calculator to find P(X = k) using the formula p(1-p)^(k-1). This gives the exact probability that the first success occurs on trial k.

The calculation accounts for k-1 failures (each with probability 1-p) followed by one success (probability p). For example, with p = 0.3, the probability of first success on trial 3 is 0.7² × 0.3 = 0.147.

Try different k values to see how probability decays. Each additional trial multiplies the previous probability by (1-p), creating the geometric decay that gives this distribution its name.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Calculating Survival Probabilities',
    content: `Use **P(X > k)** to find the probability of needing more than k trials. This "survival probability" equals (1-p)^k - simply raising the failure probability to the kth power.

The memoryless property appears here: P(X > n+k | X > n) = P(X > k). If you've already failed n times, the probability of failing k more times is the same as if you were starting fresh.

**P(X ≥ k)** includes k itself, computed as (1-p)^(k-1). This subtle difference matters for threshold questions like "at least k trials needed."`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Range Probability Calculations',
    content: `The range calculator finds P(a ≤ X ≤ b), the probability that first success occurs between trials a and b inclusive. This equals the difference in CDF values: F(b) - F(a-1).

Four boundary options handle edge cases:
• **[a, b]** - Both endpoints included
• **(a, b)** - Both endpoints excluded  
• **[a, b)** - Include a, exclude b
• **(a, b]** - Exclude a, include b

These calculations help answer practical questions like "What's the probability I'll need between 5 and 10 attempts?"`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Geometric Distribution?',
    content: `The geometric distribution models the number of trials needed until the first success occurs in a sequence of independent Bernoulli trials. It's the discrete analog of the exponential distribution.

Each trial must be independent with constant success probability p. The distribution counts the trial number on which success first appears, starting from trial 1 and extending theoretically to infinity.

Applications include reliability testing (trials until component failure), sales (calls until closing a deal), and quality control (inspections until finding a defect). For detailed theory and proofs, see **geometric distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'The Memoryless Property Explained',
    content: `The geometric distribution is the only discrete distribution with the memoryless property: past failures don't affect future probabilities. Mathematically, P(X > n + k | X > n) = P(X > k).

This means if you've already failed n times, the probability distribution for future trials is identical to starting fresh. Each trial is a "clean slate" - previous outcomes provide no information about when success will occur.

This property arises because trials are independent with constant probability. It's what makes the geometric distribution appropriate for modeling truly random processes with no "memory" or aging effects.`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Mean, Variance, and Statistics',
    content: `The **mean** E[X] = 1/p gives the expected number of trials until first success. With p = 0.2, expect 5 trials on average. The mean is always the reciprocal of the success probability.

The **variance** equals (1-p)/p², measuring spread around the mean. Higher variance means more uncertainty about when success will occur. The **standard deviation** $\\sqrt{(1-p)/p²}$ provides a more interpretable measure of spread.

The **mode** is always 1 regardless of p - the most likely outcome is success on the first trial. However, when p < 0.5, the mean exceeds 2, showing the distribution's right skew.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Calculators',
    content: `The **negative binomial distribution** generalizes the geometric to count trials until the rth success, while geometric specifically handles r = 1. Both share the memoryless property.

The **exponential distribution** is the continuous version of the geometric, modeling time until an event rather than trial number. It also has the memoryless property.

**Related Tools:**

**Negative Binomial Calculator** - Trials until r successes

**Binomial Distribution Calculator** - Fixed trials, count successes

**Exponential Distribution Calculator** - Continuous waiting times

**Discrete Probability Distributions** - Overview and comparisons`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the geometric distribution used for?",
    answer: "The geometric distribution models the number of trials needed until the first success occurs. It's used for reliability testing, sales processes (number of calls until a sale), quality control (inspections until finding a defect), and any scenario where you're counting attempts until a binary event occurs."
  },
  obj2: {
    question: "How do you calculate geometric probability?",
    answer: "The geometric probability formula is P(X = k) = p(1-p)^(k-1), where k is the trial number of first success and p is the success probability. This represents k-1 failures followed by one success. The cumulative probability P(X ≤ k) equals 1 - (1-p)^k."
  },
  obj3: {
    question: "What is the memoryless property?",
    answer: "The memoryless property means past failures don't affect future probabilities: P(X > n+k | X > n) = P(X > k). If you've already failed n times, the probability of needing k more trials is the same as starting fresh. This makes the geometric distribution unique among discrete distributions."
  },
  obj4: {
    question: "What's the difference between geometric and binomial distributions?",
    answer: "The binomial distribution has a fixed number of trials and counts successes, while the geometric distribution has a variable number of trials (stopping at first success) and counts trial number. Binomial asks 'how many successes in n trials?' Geometric asks 'which trial gives the first success?'"
  },
  obj5: {
    question: "What is the mean of the geometric distribution?",
    answer: "The mean equals 1/p, where p is the success probability. This represents the expected number of trials until first success. For example, if p = 0.25, you'd expect 4 trials on average. The variance equals (1-p)/p², measuring spread around this mean."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Geometric Distribution Calculator",
    "description": "Calculate geometric probabilities for trials until first success. Interactive calculator with memoryless property visualization, PMF/CDF charts, and comprehensive probability tools.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/geometric",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Interactive success probability slider with real-time updates",
      "PMF visualization showing exponential decay pattern",
      "CDF step function for cumulative probabilities",
      "Point probability calculator using geometric formula",
      "Survival probability calculator demonstrating memoryless property",
      "Range probability calculator with boundary options",
      "Automatic calculation of mean (1/p), variance, and standard deviation"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Geometric Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/geometric"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the geometric distribution used for?",
          answer: "The geometric distribution models the number of trials needed until the first success occurs. It's used for reliability testing, sales processes (number of calls until a sale), quality control (inspections until finding a defect), and any scenario where you're counting attempts until a binary event occurs."
        },
        obj2: {
          question: "How do you calculate geometric probability?",
          answer: "The geometric probability formula is P(X = k) = p(1-p)^(k-1), where k is the trial number of first success and p is the success probability. This represents k-1 failures followed by one success. The cumulative probability P(X ≤ k) equals 1 - (1-p)^k."
        },
        obj3: {
          question: "What is the memoryless property?",
          answer: "The memoryless property means past failures don't affect future probabilities: P(X > n+k | X > n) = P(X > k). If you've already failed n times, the probability of needing k more trials is the same as starting fresh. This makes the geometric distribution unique among discrete distributions."
        },
        obj4: {
          question: "What's the difference between geometric and binomial distributions?",
          answer: "The binomial distribution has a fixed number of trials and counts successes, while the geometric distribution has a variable number of trials (stopping at first success) and counts trial number. Binomial asks 'how many successes in n trials?' Geometric asks 'which trial gives the first success?'"
        },
        obj5: {
          question: "What is the mean of the geometric distribution?",
          answer: "The mean equals 1/p, where p is the success probability. This represents the expected number of trials until first success. For example, if p = 0.25, you'd expect 4 trials on average. The variance equals (1-p)/p², measuring spread around this mean."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Geometric Distribution Calculator",
          "description": "Calculate geometric probabilities for trials until first success. Interactive calculator with memoryless property visualization, PMF/CDF charts, and comprehensive probability tools.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/geometric",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Interactive success probability slider with real-time updates",
            "PMF visualization showing exponential decay pattern",
            "CDF step function for cumulative probabilities",
            "Point probability calculator using geometric formula",
            "Survival probability calculator demonstrating memoryless property",
            "Range probability calculator with boundary options",
            "Automatic calculation of mean (1/p), variance, and standard deviation"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Geometric Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/geometric"
            }
          ]
        }
      }
    },

    'negative-binomial': {
      componentName: 'NegativeBinomialDistributionExplorer',
      title: 'Negative Binomial Calculator | Trials Until r Successes | Learn Math Class',
      description: 'Calculate negative binomial probabilities for trials needed to achieve r successes. Interactive tool with PMF/CDF visualization and comprehensive probability calculations.',
      h1Title: 'Negative Binomial Distribution Explorer',
      url: '/probability/visual-tools/distributions/negative-binomial',
      name: 'Negative Binomial Distribution Calculator',
      keywords: [
        'negative binomial distribution',
        'negative binomial calculator',
        'trials until r successes',
        'negative binomial probability',
        'negative binomial PMF',
        'negative binomial CDF',
        'waiting time r successes',
        'negative binomial formula',
        'interactive negative binomial',
        'negative binomial mean variance',
        'negative binomial vs geometric',
        'overdispersion distribution',
        'count data distribution',
        'negative binomial examples',
        'calculate negative binomial'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - NEGATIVE BINOMIAL - TO BE FILLED IN STEP 2
      // },

     

// NEGATIVE BINOMIAL DISTRIBUTION CONTENT BLOCK

sectionsContent: {
  obj1: {
    title: 'Setting Distribution Parameters',
    content: `Adjust **r (number of successes)** to specify how many successes you're waiting to achieve. The slider ranges from 1 (equivalent to geometric distribution) to 20 successes, covering typical application scenarios.

Set **p (success probability)** using the bottom slider from 0.01 to 0.99. This defines the likelihood of success on each individual trial, with higher p meaning you'll reach r successes more quickly.

The visualization updates immediately to show how these parameters affect the distribution shape. Higher r values create more bell-shaped distributions, while r = 1 gives the characteristic geometric decay.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Understanding the PMF Display',
    content: `The PMF bars start at k = r (the minimum possible trial number) since you need at least r trials to get r successes. Each bar shows P(X = k), the probability that the rth success occurs exactly on trial k.

The distribution's shape depends heavily on r. For r = 1, you see pure exponential decay. As r increases, the distribution becomes more symmetric and bell-shaped, eventually approximating a normal distribution for large r.

The mode (peak) occurs near r/p, which also represents the mean. This is where the rth success is most likely to occur, balancing the competing effects of needing more trials versus decreasing probability of longer sequences.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Interpreting CDF Values',
    content: `The CDF shows P(X ≤ k), the probability that you achieve r successes within the first k trials. The curve starts at 0 for k < r and approaches 1 as k increases.

The steepness of the CDF curve around the mean indicates concentration. A steep curve means most probability mass is concentrated near the expected value r/p, while a gradual curve indicates higher variability.

Unlike the binomial CDF which always reaches exactly 1 at n trials, the negative binomial CDF approaches 1 asymptotically since theoretically you could need infinitely many trials (though this becomes vanishingly unlikely).`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Calculating Point Probabilities',
    content: `Enter trial number k in the **Point Probability** calculator to compute P(X = k) using the negative binomial formula: C(k-1, r-1) × p^r × (1-p)^(k-r).

The binomial coefficient C(k-1, r-1) counts ways to arrange r-1 successes in the first k-1 trials (the rth success must occur on trial k). The calculator handles this computation even for large values.

Try k = 10, r = 3, p = 0.4. This calculates the probability that your 3rd success occurs exactly on the 10th trial - meaning exactly 2 successes in the first 9 trials, followed by a success on trial 10.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Using Cumulative Calculators',
    content: `The **P(X ≤ k)** calculator sums probabilities from r to k, giving the probability of achieving r successes within k trials. This is useful for questions like "What's the chance I'll close 5 sales within 20 calls?"

**P(X ≥ k)** computes the probability of needing at least k trials, which equals 1 - P(X ≤ k-1). This helps assess risk: "What's the probability I'll need 30 or more trials to get 10 successes?"

The distinction between ≤ and < (or ≥ and >) matters for discrete distributions. P(X < k) excludes k itself and equals P(X ≤ k-1).`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Computing Range Probabilities',
    content: `Range calculations find P(a ≤ X ≤ b) by computing F(b) - F(a-1), where F is the CDF. This gives the probability that the rth success occurs between trials a and b.

The four boundary options provide flexibility:
• **[a, b]** includes both a and b
• **(a, b)** excludes both endpoints
• **[a, b)** includes a but excludes b  
• **(a, b]** excludes a but includes b

Example: With r = 5, what's P(15 ≤ X ≤ 25)? This is the probability that your 5th success occurs somewhere between trial 15 and trial 25.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Negative Binomial Distribution?',
    content: `The negative binomial distribution models the number of trials needed to achieve a fixed number r of successes in a sequence of independent Bernoulli trials. It generalizes the geometric distribution from r = 1 to any positive integer r.

The "negative" terminology comes from an equivalent formulation counting failures before the rth success, but the standard parameterization counts total trials. Each trial has constant success probability p and is independent of all others.

Applications include epidemiology (cases until r infections), insurance (claims until r payouts), and ecology (samples until r species observed). For comprehensive theory, see **negative binomial distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'Relationship to Geometric Distribution',
    content: `The geometric distribution is the special case where r = 1. When you only need one success, the negative binomial reduces exactly to the geometric distribution.

For r > 1, the negative binomial can be viewed as the sum of r independent geometric random variables. If $X_1, X_2, ..., X_r$ are geometric(p), then $X_1 + X_2 + ... + X_r$ follows a negative binomial distribution.

This connection explains why both distributions share certain properties and why the negative binomial approaches a normal distribution as r increases - it's a sum of independent random variables, invoking the Central Limit Theorem.`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Distribution Statistics and Properties',
    content: `The **mean** E[X] = r/p represents the expected number of trials to achieve r successes. With r = 5 and p = 0.25, expect 20 trials on average.

The **variance** equals r(1-p)/p², which grows faster than the mean as p decreases. This variance > mean property distinguishes negative binomial from Poisson and makes it useful for **overdispersed count data**.

The **standard deviation** $\\sqrt{r(1-p)/p²}$ measures typical deviation from the mean. When r is large, the distribution becomes approximately normal with these parameters.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Tools',
    content: `The **binomial distribution** fixes trials and counts successes, while negative binomial fixes successes and counts trials. They're complementary approaches to modeling binary outcomes.

The **Poisson distribution** assumes mean equals variance, but negative binomial allows variance > mean (overdispersion). This makes negative binomial more flexible for real-world count data with extra variability.

**Related Calculators:**

**Geometric Distribution Calculator** - Special case where r = 1

**Binomial Distribution Calculator** - Fixed trials, variable successes

**Poisson Distribution Calculator** - Rare events with equidispersion

**Probability Distribution Comparison** - When to use each distribution`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the negative binomial distribution used for?",
    answer: "The negative binomial distribution models the number of trials needed to achieve r successes, where r is fixed in advance. It's used in epidemiology, insurance risk modeling, ecology, and any scenario where you're counting attempts needed to reach a target number of occurrences."
  },
  obj2: {
    question: "How do you calculate negative binomial probability?",
    answer: "The negative binomial probability formula is P(X = k) = C(k-1, r-1) × p^r × (1-p)^(k-r), where k ≥ r is the trial number, r is the target number of successes, and p is the success probability per trial. The binomial coefficient accounts for arranging r-1 successes in the first k-1 trials."
  },
  obj3: {
    question: "What's the difference between negative binomial and geometric distributions?",
    answer: "The geometric distribution is the special case of negative binomial where r = 1 (waiting for first success). Negative binomial generalizes this to r successes. Both count trial numbers, but negative binomial applies when you need multiple occurrences rather than just the first one."
  },
  obj4: {
    question: "What are the mean and variance of a negative binomial distribution?",
    answer: "The mean equals r/p, representing expected trials to get r successes. The variance equals r(1-p)/p². Notably, variance exceeds the mean when p < 0.5, exhibiting overdispersion. This property makes it suitable for count data with more variability than Poisson models predict."
  },
  obj5: {
    question: "When should I use negative binomial instead of binomial?",
    answer: "Use negative binomial when the number of successes r is fixed and you want to know about trial count. Use binomial when the number of trials n is fixed and you want to count successes. They answer opposite questions about the same type of experiment."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Negative Binomial Distribution Calculator",
    "description": "Calculate negative binomial probabilities for trials needed to achieve r successes. Interactive tool with PMF/CDF visualization and comprehensive probability calculations.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/negative-binomial",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Dual parameter controls for r (target successes) and p (success probability)",
      "Dynamic PMF visualization showing distribution shape changes with r",
      "CDF calculator for cumulative probability up to k trials",
      "Point probability calculator using negative binomial formula",
      "Survival probability functions P(X ≥ k) and P(X > k)",
      "Flexible range probability calculator with boundary options",
      "Statistics panel displaying mean r/p, variance, and standard deviation"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Negative Binomial Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/negative-binomial"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the negative binomial distribution used for?",
          answer: "The negative binomial distribution models the number of trials needed to achieve r successes, where r is fixed in advance. It's used in epidemiology, insurance risk modeling, ecology, and any scenario where you're counting attempts needed to reach a target number of occurrences."
        },
        obj2: {
          question: "How do you calculate negative binomial probability?",
          answer: "The negative binomial probability formula is P(X = k) = C(k-1, r-1) × p^r × (1-p)^(k-r), where k ≥ r is the trial number, r is the target number of successes, and p is the success probability per trial. The binomial coefficient accounts for arranging r-1 successes in the first k-1 trials."
        },
        obj3: {
          question: "What's the difference between negative binomial and geometric distributions?",
          answer: "The geometric distribution is the special case of negative binomial where r = 1 (waiting for first success). Negative binomial generalizes this to r successes. Both count trial numbers, but negative binomial applies when you need multiple occurrences rather than just the first one."
        },
        obj4: {
          question: "What are the mean and variance of a negative binomial distribution?",
          answer: "The mean equals r/p, representing expected trials to get r successes. The variance equals r(1-p)/p². Notably, variance exceeds the mean when p < 0.5, exhibiting overdispersion. This property makes it suitable for count data with more variability than Poisson models predict."
        },
        obj5: {
          question: "When should I use negative binomial instead of binomial?",
          answer: "Use negative binomial when the number of successes r is fixed and you want to know about trial count. Use binomial when the number of trials n is fixed and you want to count successes. They answer opposite questions about the same type of experiment."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Negative Binomial Distribution Calculator",
          "description": "Calculate negative binomial probabilities for trials needed to achieve r successes. Interactive tool with PMF/CDF visualization and comprehensive probability calculations.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/negative-binomial",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Dual parameter controls for r (target successes) and p (success probability)",
            "Dynamic PMF visualization showing distribution shape changes with r",
            "CDF calculator for cumulative probability up to k trials",
            "Point probability calculator using negative binomial formula",
            "Survival probability functions P(X ≥ k) and P(X > k)",
            "Flexible range probability calculator with boundary options",
            "Statistics panel displaying mean r/p, variance, and standard deviation"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Negative Binomial Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/negative-binomial"
            }
          ]
        }
      }
    },

    'poisson': {
      componentName: 'PoissonDistributionExplorer',
      title: 'Poisson Distribution Calculator | Event Rate Calculator | Learn Math Class',
      description: 'Calculate Poisson probabilities for events in fixed intervals. Interactive rate parameter λ control with PMF/CDF visualization and comprehensive probability tools.',
      h1Title: 'Poisson Distribution Explorer',
      url: '/probability/visual-tools/distributions/poisson',
      name: 'Poisson Distribution Calculator',
      keywords: [
        'poisson distribution',
        'poisson calculator',
        'event rate distribution',
        'lambda parameter',
        'poisson PMF',
        'poisson CDF',
        'rare events distribution',
        'poisson probability',
        'interactive poisson',
        'poisson formula',
        'poisson approximation',
        'count data distribution',
        'poisson mean variance',
        'calculate poisson probability',
        'poisson distribution examples'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - POISSON - TO BE FILLED IN STEP 2
      // },

      // ============================================================
// POISSON DISTRIBUTION CONTENT BLOCK
// ============================================================

sectionsContent: {
  obj1: {
    title: 'Adjusting the Rate Parameter',
    content: `Use the **λ (lambda) slider** to set the average rate of events per interval. Values range from 0.1 (very rare events) to 20 (frequent events), representing the expected count in your time or space window.

As you change λ, watch the distribution shape transform. Low λ values create highly right-skewed distributions concentrated near zero. Higher λ values produce more symmetric, bell-shaped distributions approaching normality.

The parameter λ directly determines both the mean and variance - they're always equal in a Poisson distribution. At λ = 5, you expect 5 events on average with variance also equal to 5.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Reading the PMF Chart',
    content: `The PMF visualization displays bars for k = 0, 1, 2, ... showing P(X = k), the probability of exactly k events occurring. The chart automatically extends to show the relevant range where probabilities are meaningful.

The distribution's peak (mode) occurs at $\\lfloor λ \\rfloor$ - the floor of λ. For λ = 7.5, the mode is at k = 7. When λ is an integer, both k = λ and k = λ-1 are modes with equal probability.

Bar heights decrease rapidly beyond λ + 3√λ, which encompasses about 99.7% of the probability mass. The calculator displays enough range to show where probability becomes negligible.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Understanding CDF Values',
    content: `The CDF displays P(X ≤ k), climbing from 0 toward 1 in discrete steps. Each step represents adding another outcome's probability, with larger steps at more probable values near λ.

Use the CDF to quickly assess ranges. The probability P(X ≤ 10) can be read directly from the curve at k = 10. The steepness around the mean indicates concentration - steep means most events cluster near λ.

For large λ, the CDF's S-curve shape becomes more pronounced, reflecting the distribution's approach to normality through the Central Limit Theorem.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Computing Exact Probabilities',
    content: `Enter event count k in the **Point Probability** calculator to find P(X = k) using the Poisson formula: (λ^k × e^(-λ)) / k!. The calculator handles the factorial computation automatically.

The exponential term e^(-λ) rapidly decreases as λ increases, while λ^k grows with k. Their balance creates the characteristic probability distribution. For λ = 4, k = 4, you get about 0.195 - the most likely single outcome.

Try calculating P(X = 0) for different λ values. This "zero probability" equals e^(-λ), showing how quickly the chance of no events drops as the rate increases.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Calculating Cumulative Probabilities',
    content: `Use **P(X ≤ k)** to find the probability of k or fewer events. This requires summing Poisson probabilities from 0 to k, which the calculator performs efficiently using optimized algorithms.

**P(X > k)** gives the complement: the probability of more than k events. This equals 1 - P(X ≤ k) and answers questions like "What's the chance of exceeding our capacity of k events?"

The ≥ and > distinction matters: P(X ≥ k) includes k itself, while P(X > k) starts counting from k+1. This one-event difference can be significant for discrete distributions.`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Range Probability Calculations',
    content: `The range calculator computes P(a ≤ X ≤ b) by taking F(b) - F(a-1), where F is the CDF. This gives the probability of event count falling within the specified window.

Four boundary options handle inclusivity:
• **[a, b]** - Include both bounds
• **(a, b)** - Exclude both bounds
• **[a, b)** - Include a, exclude b
• **(a, b]** - Exclude a, include b

Example: For λ = 6, find P(4 ≤ X ≤ 8). This gives the probability of observing between 4 and 8 events inclusive, capturing the central probability mass.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Poisson Distribution?',
    content: `The Poisson distribution models the number of events occurring in a fixed interval (time, space, volume) when events happen independently at a constant average rate λ. It's fundamental for counting rare or randomly timed occurrences.

Three key assumptions: (1) events occur independently, (2) events occur at a constant average rate, and (3) two events cannot occur at exactly the same instant. When these hold, event counts follow a Poisson distribution.

Common applications include customer arrivals, phone call volumes, manufacturing defects, website traffic, radioactive decay counts, and accident frequencies. For theoretical foundations, see **Poisson distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'Mean Equals Variance Property',
    content: `A unique feature of the Poisson distribution is that mean = variance = λ. This **equidispersion** property distinguishes it from other count distributions like negative binomial (overdispersed) or binomial with small p (underdispersed).

When analyzing count data, if sample variance significantly exceeds sample mean, Poisson may not be appropriate - consider negative binomial for overdispersion. If variance is much less than mean, other models may fit better.

The standard deviation equals √λ, meaning the typical deviation from the mean grows as the square root of the rate. For λ = 16, standard deviation is 4, so about 68% of observations fall within [12, 20].`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Poisson as Binomial Approximation',
    content: `The Poisson distribution approximates the **binomial distribution** when n is large and p is small, with λ = np. Rule of thumb: use Poisson approximation when n ≥ 20 and p ≤ 0.05.

For example, defect probability p = 0.001 across n = 5000 units gives λ = 5. Computing binomial probabilities with these parameters is computationally intensive; Poisson provides excellent approximation with simpler calculations.

This connection explains why Poisson models rare events well - it's the limiting case of binomial as we have many opportunities (large n) for rare outcomes (small p). For comparisons, see **binomial vs Poisson approximation**.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Calculators',
    content: `The **exponential distribution** models time between Poisson events. If events follow Poisson(λ) per unit time, inter-arrival times follow Exponential(λ). They're two views of the same process.

The **normal distribution** approximates Poisson for large λ (typically λ ≥ 10), using mean = variance = λ. This simplifies calculations and enables z-score methods for Poisson data.

**Related Tools:**

**Exponential Distribution Calculator** - Time between events

**Binomial Distribution Calculator** - Fixed trials approximation

**Normal Distribution Calculator** - Large λ approximation

**Negative Binomial Calculator** - Overdispersed count data`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the Poisson distribution used for?",
    answer: "The Poisson distribution models count data - the number of events in fixed intervals of time, space, or volume. It's used for customer arrivals, manufacturing defects, website visits, phone calls, accidents, and any scenario where events occur randomly at a constant average rate."
  },
  obj2: {
    question: "How do you calculate Poisson probability?",
    answer: "The Poisson probability formula is P(X = k) = (λ^k × e^(-λ)) / k!, where λ is the average rate and k is the event count. The calculator handles factorial and exponential computations. For cumulative probabilities, sum individual terms from 0 to k."
  },
  obj3: {
    question: "What does lambda (λ) mean in Poisson distribution?",
    answer: "Lambda (λ) is the rate parameter representing the average number of events in the interval. It simultaneously defines the distribution's mean, variance, and overall shape. Higher λ means more frequent events and a more spread-out, symmetric distribution."
  },
  obj4: {
    question: "When should I use Poisson instead of binomial?",
    answer: "Use Poisson when events are rare (small p), opportunities are numerous (large n), and λ = np is moderate. Poisson is computationally simpler for n ≥ 20 and p ≤ 0.05. It's ideal when you can't specify n precisely but know the average rate λ."
  },
  obj5: {
    question: "Why is mean equal to variance in Poisson?",
    answer: "The Poisson's mean = variance = λ property follows from its mathematical derivation and reflects the randomness of event occurrence. This equidispersion means spread scales with the rate. Real data with variance much different from mean suggests Poisson may not be appropriate."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Poisson Distribution Calculator",
    "description": "Calculate Poisson probabilities for events in fixed intervals. Interactive rate parameter λ control with PMF/CDF visualization and comprehensive probability tools.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/poisson",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Interactive λ (lambda) rate parameter slider from 0.1 to 20",
      "Dynamic PMF visualization with automatic range adjustment",
      "CDF display showing cumulative probability distribution",
      "Point probability calculator using Poisson formula (λ^k × e^(-λ))/k!",
      "Cumulative probability calculators for P(X ≤ k) and P(X > k)",
      "Range probability calculator with inclusive/exclusive boundaries",
      "Real-time statistics showing mean = variance = λ property"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Poisson Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/poisson"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the Poisson distribution used for?",
          answer: "The Poisson distribution models count data - the number of events in fixed intervals of time, space, or volume. It's used for customer arrivals, manufacturing defects, website visits, phone calls, accidents, and any scenario where events occur randomly at a constant average rate."
        },
        obj2: {
          question: "How do you calculate Poisson probability?",
          answer: "The Poisson probability formula is P(X = k) = (λ^k × e^(-λ)) / k!, where λ is the average rate and k is the event count. The calculator handles factorial and exponential computations. For cumulative probabilities, sum individual terms from 0 to k."
        },
        obj3: {
          question: "What does lambda (λ) mean in Poisson distribution?",
          answer: "Lambda (λ) is the rate parameter representing the average number of events in the interval. It simultaneously defines the distribution's mean, variance, and overall shape. Higher λ means more frequent events and a more spread-out, symmetric distribution."
        },
        obj4: {
          question: "When should I use Poisson instead of binomial?",
          answer: "Use Poisson when events are rare (small p), opportunities are numerous (large n), and λ = np is moderate. Poisson is computationally simpler for n ≥ 20 and p ≤ 0.05. It's ideal when you can't specify n precisely but know the average rate λ."
        },
        obj5: {
          question: "Why is mean equal to variance in Poisson?",
          answer: "The Poisson's mean = variance = λ property follows from its mathematical derivation and reflects the randomness of event occurrence. This equidispersion means spread scales with the rate. Real data with variance much different from mean suggests Poisson may not be appropriate."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Poisson Distribution Calculator",
          "description": "Calculate Poisson probabilities for events in fixed intervals. Interactive rate parameter λ control with PMF/CDF visualization and comprehensive probability tools.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/poisson",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Interactive λ (lambda) rate parameter slider from 0.1 to 20",
            "Dynamic PMF visualization with automatic range adjustment",
            "CDF display showing cumulative probability distribution",
            "Point probability calculator using Poisson formula (λ^k × e^(-λ))/k!",
            "Cumulative probability calculators for P(X ≤ k) and P(X > k)",
            "Range probability calculator with inclusive/exclusive boundaries",
            "Real-time statistics showing mean = variance = λ property"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Poisson Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/poisson"
            }
          ]
        }
      }
    },

    'hypergeometric': {
      componentName: 'HypergeometricDistributionExplorer',
      title: 'Hypergeometric Distribution Calculator | Sampling Without Replacement | Learn Math Class',
      description: 'Calculate hypergeometric probabilities for sampling without replacement from finite populations. Interactive N, K, n parameter controls with comprehensive probability calculations.',
      h1Title: 'Hypergeometric Distribution Explorer',
      url: '/probability/visual-tools/distributions/hypergeometric',
      name: 'Hypergeometric Distribution Calculator',
      keywords: [
        'hypergeometric distribution',
        'hypergeometric calculator',
        'sampling without replacement',
        'finite population sampling',
        'hypergeometric probability',
        'hypergeometric PMF',
        'hypergeometric CDF',
        'population sampling calculator',
        'hypergeometric formula',
        'interactive hypergeometric',
        'quality control sampling',
        'hypergeometric vs binomial',
        'finite population correction',
        'hypergeometric mean variance',
        'calculate hypergeometric probability'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - HYPERGEOMETRIC - TO BE FILLED IN STEP 2
      // },

      // HYPERGEOMETRIC DISTRIBUTION CONTENT BLOCK

sectionsContent: {
  obj1: {
    title: 'Setting Population Parameters',
    content: `Adjust **N (population size)** to define the total number of items in your finite population. The slider accommodates populations from 5 to 100, suitable for quality control batches and sampling scenarios.

Set **K (success states)** to specify how many items in the population have the desired characteristic. This must be ≤ N and defines the proportion K/N of successes available.

Configure **n (number of draws)** for your sample size. This must be ≤ N and determines how many items you're selecting without replacement from the population.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Understanding Parameter Dependencies',
    content: `The three parameters create constraints that the sliders automatically enforce. As you increase N, both K and n can potentially increase. Decreasing N may force K or n to decrease to maintain K ≤ N and n ≤ N.

The proportion p = K/N plays a crucial role similar to the binomial's p parameter. When the population is homogeneous (p near 0 or 1), the distribution concentrates at extreme values. Balanced populations (p near 0.5) create more spread-out distributions.

Watch how the support (possible values) changes with parameters. The minimum possible successes is max(0, n-(N-K)) and maximum is min(n, K), creating a restricted range compared to binomial.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Interpreting the PMF Visualization',
    content: `The PMF bars show P(X = k) only for feasible values in the support. You might notice the display doesn't start at 0 if max(0, n-(N-K)) > 0, reflecting the fact that some success counts are impossible given the parameters.

The distribution's shape depends on n and the ratio K/N. Larger samples (n close to N) create distributions more concentrated around the expected value nK/N. Smaller samples allow more variability.

Compare the hypergeometric shape to binomial with p = K/N. They're similar when N is large relative to n, but hypergeometric shows less spread due to the finite population correction.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Using the CDF Display',
    content: `The CDF steps only at feasible values in the support. Unlike binomial which has support from 0 to n, hypergeometric CDF may start above 0 and end before n depending on your parameters.

The CDF represents P(X ≤ k), crucial for quality control questions: "What's the probability of finding k or fewer defects in my sample?" The curve's steepness around the mean indicates sampling precision.

Notice how the **finite population correction** affects CDF shape. When sampling a large fraction of the population (n/N is significant), the CDF rises more steeply, showing less variability than the equivalent binomial.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Calculating Exact Probabilities',
    content: `Enter k in the **Point Probability** calculator to compute P(X = k) using: [C(K,k) × C(N-K, n-k)] / C(N,n). The three binomial coefficients account for all ways to select k successes and n-k failures.

The denominator C(N,n) counts all possible samples of size n from population N. The numerator counts samples with exactly k successes: choose k from K successes and n-k from N-K failures.

Try N = 52, K = 13, n = 5 (drawing 5 cards from a deck, counting spades). P(X = 2) ≈ 0.274 gives the probability of exactly 2 spades, accounting for sampling without replacement.`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Computing Cumulative and Range Probabilities',
    content: `Use **P(X ≤ k)** to find the probability of k or fewer successes in your sample. This sums point probabilities over the range [min support, k], providing cumulative mass up to k.

**P(X ≥ k)** gives the tail probability of k or more successes, useful for acceptance sampling: "If k or more items are defective, reject the lot."

Range calculations **P(a ≤ X ≤ b)** answer questions about intervals: "What's the probability of finding between 3 and 7 items with the characteristic?" Four boundary options handle inclusion/exclusion of endpoints.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Hypergeometric Distribution?',
    content: `The hypergeometric distribution models sampling without replacement from a finite population with two types of items (successes and failures). Each draw changes the population composition, creating dependence between draws.

Unlike the binomial distribution where draws are independent, hypergeometric accounts for **depletion** - each success drawn reduces remaining successes, altering probabilities for subsequent draws.

Applications include quality control sampling, card game probabilities, ecological sampling (capture-recapture), lottery odds, and poll accuracy analysis. For theoretical foundations and derivations, see **hypergeometric distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'Hypergeometric vs Binomial',
    content: `Use **hypergeometric** for sampling without replacement from small populations. Use **binomial** for sampling with replacement or when the population is large enough that depletion is negligible.

When N ≥ 10n (population is at least 10 times the sample size), hypergeometric approximates binomial with p = K/N. The approximation improves as N/n increases.

The key difference: binomial assumes constant probability p across trials, while hypergeometric adjusts probabilities after each draw. This distinction matters most when sampling a substantial fraction of the population (n/N > 0.1).`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Mean, Variance, and Finite Population Correction',
    content: `The **mean** equals n(K/N) = np, matching the binomial mean. With N = 50, K = 20, n = 10, expect 4 successes on average.

The **variance** np(1-p)[(N-n)/(N-1)] includes the **finite population correction factor** (N-n)/(N-1). This is always ≤ 1, reducing variance below the binomial's np(1-p). The factor approaches 1 as N → ∞.

When sampling without replacement, you're dividing the population into your sample and the remainder. This "information" about the population reduces uncertainty, decreasing variance compared to independent sampling.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Calculators',
    content: `The **binomial distribution** is the limit as N → ∞ with K/N = p fixed. When population is large relative to sample, binomial provides a good approximation with simpler calculations.

In **quality control**, hypergeometric models acceptance sampling where you inspect n items from a lot of N, deciding acceptance based on defect count. Standards like MIL-STD-105 use hypergeometric principles.

**Related Tools:**

**Binomial Distribution Calculator** - Sampling with replacement / large populations

**Fisher's Exact Test** - Contingency table analysis using hypergeometric

**Sampling Theory Calculator** - Sampling distributions and confidence intervals

**Quality Control Calculators** - Acceptance sampling plans`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the hypergeometric distribution used for?",
    answer: "The hypergeometric distribution models sampling without replacement from finite populations with two categories. It's used in quality control (sampling from production batches), card games (drawing without replacement), ecology (capture-recapture studies), and lottery calculations."
  },
  obj2: {
    question: "How do you calculate hypergeometric probability?",
    answer: "The hypergeometric formula is P(X = k) = [C(K,k) × C(N-K,n-k)] / C(N,n), where N is population size, K is successes in population, n is sample size, and k is successes in sample. The calculator handles binomial coefficient computations automatically."
  },
  obj3: {
    question: "When should I use hypergeometric instead of binomial?",
    answer: "Use hypergeometric for sampling without replacement from small populations, especially when n/N > 0.1. Use binomial for sampling with replacement or when population is at least 10 times larger than sample size (N ≥ 10n), as distributions become nearly identical."
  },
  obj4: {
    question: "What is the finite population correction?",
    answer: "The finite population correction factor (N-n)/(N-1) appears in the variance formula, reducing it below the binomial variance. It accounts for the information gained by exhausting part of the population, which decreases uncertainty. The factor approaches 1 as population size grows."
  },
  obj5: {
    question: "What are the mean and variance of hypergeometric distribution?",
    answer: "The mean equals n(K/N), the expected successes based on sample proportion. The variance equals n(K/N)(1-K/N)[(N-n)/(N-1)], which includes the finite population correction. This variance is always less than or equal to the corresponding binomial variance np(1-p)."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Hypergeometric Distribution Calculator",
    "description": "Calculate hypergeometric probabilities for sampling without replacement from finite populations. Interactive N, K, n parameter controls with comprehensive probability calculations.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/hypergeometric",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Triple parameter controls for N (population), K (successes), n (sample size)",
      "Automatic constraint enforcement between interdependent parameters",
      "PMF visualization showing feasible support range",
      "CDF display with finite population correction effects",
      "Point probability calculator using hypergeometric formula",
      "Cumulative and range probability calculators",
      "Statistics panel showing mean, variance with correction factor"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Hypergeometric Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/hypergeometric"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the hypergeometric distribution used for?",
          answer: "The hypergeometric distribution models sampling without replacement from finite populations with two categories. It's used in quality control (sampling from production batches), card games (drawing without replacement), ecology (capture-recapture studies), and lottery calculations."
        },
        obj2: {
          question: "How do you calculate hypergeometric probability?",
          answer: "The hypergeometric formula is P(X = k) = [C(K,k) × C(N-K,n-k)] / C(N,n), where N is population size, K is successes in population, n is sample size, and k is successes in sample. The calculator handles binomial coefficient computations automatically."
        },
        obj3: {
          question: "When should I use hypergeometric instead of binomial?",
          answer: "Use hypergeometric for sampling without replacement from small populations, especially when n/N > 0.1. Use binomial for sampling with replacement or when population is at least 10 times larger than sample size (N ≥ 10n), as distributions become nearly identical."
        },
        obj4: {
          question: "What is the finite population correction?",
          answer: "The finite population correction factor (N-n)/(N-1) appears in the variance formula, reducing it below the binomial variance. It accounts for the information gained by exhausting part of the population, which decreases uncertainty. The factor approaches 1 as population size grows."
        },
        obj5: {
          question: "What are the mean and variance of hypergeometric distribution?",
          answer: "The mean equals n(K/N), the expected successes based on sample proportion. The variance equals n(K/N)(1-K/N)[(N-n)/(N-1)], which includes the finite population correction. This variance is always less than or equal to the corresponding binomial variance np(1-p)."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Hypergeometric Distribution Calculator",
          "description": "Calculate hypergeometric probabilities for sampling without replacement from finite populations. Interactive N, K, n parameter controls with comprehensive probability calculations.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/hypergeometric",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Triple parameter controls for N (population), K (successes), n (sample size)",
            "Automatic constraint enforcement between interdependent parameters",
            "PMF visualization showing feasible support range",
            "CDF display with finite population correction effects",
            "Point probability calculator using hypergeometric formula",
            "Cumulative and range probability calculators",
            "Statistics panel showing mean, variance with correction factor"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Hypergeometric Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/hypergeometric"
            }
          ]
        }
      }
    },

    'uniform-discrete': {
      componentName: 'DiscreteUniformDistributionExplorer',
      title: 'Discrete Uniform Distribution Calculator | Equal Probability Calculator | Learn Math Class',
      description: 'Calculate discrete uniform probabilities for equally likely outcomes. Interactive tool for finite uniform distributions with parameter controls and probability calculations.',
      h1Title: 'Discrete Uniform Distribution Explorer',
      url: '/probability/visual-tools/distributions/uniform-discrete',
      name: 'Discrete Uniform Distribution Calculator',
      keywords: [
        'discrete uniform distribution',
        'uniform discrete calculator',
        'equally likely outcomes',
        'fair die probability',
        'discrete uniform PMF',
        'uniform probability calculator',
        'maximum entropy discrete',
        'equal probability distribution',
        'discrete uniform formula',
        'interactive uniform discrete',
        'uniform distribution examples',
        'calculate uniform probability',
        'discrete uniform mean variance',
        'uniform discrete vs continuous',
        'finite uniform distribution'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - UNIFORM DISCRETE - TO BE FILLED IN STEP 2
      // },
      // DISCRETE UNIFORM DISTRIBUTION CONTENT BLOCK

sectionsContent: {
  obj1: {
    title: 'Setting the Distribution Range',
    content: `Adjust **a (minimum value)** using the top slider to set the lowest value in your distribution. The range spans from 0 to 30, accommodating most practical scenarios like die rolls, card draws, or random selections.

Set **b (maximum value)** with the bottom slider to define the upper bound. The calculator automatically ensures b > a, maintaining a valid range with at least 2 possible outcomes.

The number of possible values n = b - a + 1 displays in the parameters section. For a standard die with a = 1 and b = 6, you have n = 6 equally likely outcomes.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Understanding the Flat PMF',
    content: `The PMF visualization shows perfectly flat bars - every value has identical probability 1/n. This uniform height is the defining characteristic of discrete uniform distributions and represents maximum uncertainty.

With n values in the range, each has probability 1/n. For a = 1, b = 6, each outcome {1,2,3,4,5,6} has probability 1/6 ≈ 0.1667, exactly like a fair die.

The flat PMF indicates **maximum entropy** - no outcome is favored over others. This makes the discrete uniform the "fairest" possible distribution for a given finite set of outcomes.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Reading the Linear CDF',
    content: `The CDF displays as a perfect step function with equal-height steps. Each step adds probability 1/n, creating a linear staircase from 0 to 1 across the support.

At any value k, the CDF shows P(X ≤ k) = (k - a + 1)/n. The linearity makes probability calculations intuitive - the probability of any interval is proportional to its length.

For ranges, P(c ≤ X ≤ d) = (d - c + 1)/n. With a = 1, b = 10, the probability of landing in [3, 7] is 5/10 = 0.5, simply counting the 5 values in that range.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Computing Point Probabilities',
    content: `Enter any value k in the **Point Probability** calculator. If k is in the range [a, b], you get 1/n. If k is outside this range, probability is 0 - the value simply cannot occur.

This constant probability applies to every outcome in the support. There's no concept of "more likely" or "less likely" outcomes - complete uniformity across all possibilities.

The calculation is trivial compared to other distributions: just check if a ≤ k ≤ b, and if so, return 1/(b-a+1). This simplicity makes discrete uniform the baseline for comparison with other distributions.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Using Cumulative Calculators',
    content: `**P(X ≤ k)** calculator gives (k - a + 1)/n for values in the support, counting all outcomes from a to k inclusive. For k < a, probability is 0. For k ≥ b, probability is 1.

**P(X ≥ k)** computes (b - k + 1)/n, counting outcomes from k to b. This equals 1 - P(X ≤ k-1), using the complement rule.

The strict inequalities **P(X < k)** and **P(X > k)** differ by one outcome: P(X < k) = P(X ≤ k-1) and P(X > k) = P(X ≥ k+1). This distinction matters for discrete distributions.`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Range Probability Calculations',
    content: `The range calculator computes P(c ≤ X ≤ d) using the formula (d - c + 1)/n, simply counting integers in [c, d] and dividing by total outcomes.

Four boundary options:
• **[c, d]** - Include both endpoints, count d - c + 1 values
• **(c, d)** - Exclude both, count d - c - 1 values
• **[c, d)** - Include c, exclude d, count d - c values
• **(c, d]** - Exclude c, include d, count d - c values

Example: Rolling a die (a = 1, b = 6), what's P(2 ≤ X ≤ 5)? Count {2,3,4,5} = 4 values, so probability is 4/6 = 2/3.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Discrete Uniform Distribution?',
    content: `The discrete uniform distribution assigns equal probability to every value in a finite set. It models complete randomness across a defined range with no bias toward any particular outcome.

The distribution is defined by two parameters: the minimum value a and maximum value b. With n = b - a + 1 possible values, each has probability exactly 1/n.

Applications include fair die rolls, random card selection, lottery number generation, random assignment in experiments, and baseline probability models. For theoretical foundations, see **discrete uniform distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'Maximum Entropy Principle',
    content: `Among all discrete distributions on n values, the uniform distribution has maximum **entropy** - it contains the least information and represents maximum uncertainty about which outcome will occur.

This principle explains why uniform distribution is the default assumption when you have no reason to favor any outcome. It's the "most random" distribution possible for a given finite set.

The entropy equals log(n), maximized among distributions on n points. When you know nothing beyond the support, maximum entropy reasoning leads to the uniform distribution.`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Distribution Statistics',
    content: `The **mean** equals (a + b)/2, the midpoint of the range. For a standard die (a = 1, b = 6), mean = 3.5, the exact center between minimum and maximum.

The **variance** equals (n² - 1)/12 where n = b - a + 1. Larger ranges have proportionally larger variance. For a die, variance = 35/12 ≈ 2.92.

The **standard deviation** √[(n² - 1)/12] measures typical deviation from the mean. Perfect symmetry around the midpoint is a key feature - the distribution is balanced on both sides.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Tools',
    content: `The **continuous uniform distribution** is the continuous analog, assigning equal **density** (not probability) across an interval. Both represent maximum uncertainty in their respective domains.

The discrete uniform appears as a special case of **categorical distributions** where all categories have equal probability. It's also a special case of **binomial** with n = 1 and p = 1/k for k categories.

**Related Calculators:**

**Continuous Uniform Distribution** - Equal density over intervals

**Dice Roll Calculator** - Specific discrete uniform applications

**Random Number Generation** - Uniform distribution fundamentals

**Entropy and Information Theory** - Maximum entropy principle`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the discrete uniform distribution used for?",
    answer: "The discrete uniform distribution models situations where all outcomes in a finite set are equally likely. It's used for fair dice, random card selection, lottery numbers, random assignment in experiments, and baseline probability models when there's no reason to favor any particular outcome."
  },
  obj2: {
    question: "How do you calculate discrete uniform probability?",
    answer: "For a discrete uniform distribution on {a, a+1, ..., b}, each value has probability 1/n where n = b - a + 1. For a range [c, d], probability is (d - c + 1)/n. The cumulative probability P(X ≤ k) equals (k - a + 1)/n."
  },
  obj3: {
    question: "What is the mean of a discrete uniform distribution?",
    answer: "The mean equals (a + b)/2, the arithmetic average of the minimum and maximum values. This midpoint formula reflects the perfect symmetry of the distribution. For example, rolling a fair die (a = 1, b = 6) gives mean = 3.5."
  },
  obj4: {
    question: "What's the difference between discrete and continuous uniform?",
    answer: "Discrete uniform assigns equal probability to finitely many specific values (like integers 1-6). Continuous uniform assigns equal probability density over an interval (like all real numbers from 0 to 1). Discrete uses PMF, continuous uses PDF."
  },
  obj5: {
    question: "Why is uniform distribution maximum entropy?",
    answer: "The uniform distribution has maximum entropy among distributions on a finite set because it represents complete uncertainty - no outcome is more likely than any other. When you have no information favoring particular outcomes, maximum entropy reasoning leads to the uniform distribution."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Discrete Uniform Distribution Calculator",
    "description": "Calculate discrete uniform probabilities for equally likely outcomes. Interactive tool for finite uniform distributions with parameter controls and probability calculations.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-discrete",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Dual sliders for minimum (a) and maximum (b) values",
      "Flat PMF visualization showing equal probabilities for all outcomes",
      "Linear CDF step function with equal-height steps",
      "Point probability calculator returning 1/n for values in range",
      "Simple cumulative probability formulas (k-a+1)/n",
      "Range probability calculator with boundary options",
      "Statistics display showing mean (a+b)/2 and variance (n²-1)/12"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Discrete Uniform Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-discrete"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the discrete uniform distribution used for?",
          answer: "The discrete uniform distribution models situations where all outcomes in a finite set are equally likely. It's used for fair dice, random card selection, lottery numbers, random assignment in experiments, and baseline probability models when there's no reason to favor any particular outcome."
        },
        obj2: {
          question: "How do you calculate discrete uniform probability?",
          answer: "For a discrete uniform distribution on {a, a+1, ..., b}, each value has probability 1/n where n = b - a + 1. For a range [c, d], probability is (d - c + 1)/n. The cumulative probability P(X ≤ k) equals (k - a + 1)/n."
        },
        obj3: {
          question: "What is the mean of a discrete uniform distribution?",
          answer: "The mean equals (a + b)/2, the arithmetic average of the minimum and maximum values. This midpoint formula reflects the perfect symmetry of the distribution. For example, rolling a fair die (a = 1, b = 6) gives mean = 3.5."
        },
        obj4: {
          question: "What's the difference between discrete and continuous uniform?",
          answer: "Discrete uniform assigns equal probability to finitely many specific values (like integers 1-6). Continuous uniform assigns equal probability density over an interval (like all real numbers from 0 to 1). Discrete uses PMF, continuous uses PDF."
        },
        obj5: {
          question: "Why is uniform distribution maximum entropy?",
          answer: "The uniform distribution has maximum entropy among distributions on a finite set because it represents complete uncertainty - no outcome is more likely than any other. When you have no information favoring particular outcomes, maximum entropy reasoning leads to the uniform distribution."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Discrete Uniform Distribution Calculator",
          "description": "Calculate discrete uniform probabilities for equally likely outcomes. Interactive tool for finite uniform distributions with parameter controls and probability calculations.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-discrete",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Dual sliders for minimum (a) and maximum (b) values",
            "Flat PMF visualization showing equal probabilities for all outcomes",
            "Linear CDF step function with equal-height steps",
            "Point probability calculator returning 1/n for values in range",
            "Simple cumulative probability formulas (k-a+1)/n",
            "Range probability calculator with boundary options",
            "Statistics display showing mean (a+b)/2 and variance (n²-1)/12"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Discrete Uniform Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-discrete"
            }
          ]
        }
      }
    },

    'normal': {
      componentName: 'NormalDistributionExplorer',
      title: 'Normal Distribution Calculator | Bell Curve Calculator | Learn Math Class',
      description: 'Calculate normal distribution probabilities with interactive μ and σ controls. Includes PDF/CDF visualization, Z-score calculator, and 68-95-99.7 empirical rule display.',
      h1Title: 'Normal Distribution Explorer',
      url: '/probability/visual-tools/distributions/normal',
      name: 'Normal Distribution Calculator',
      keywords: [
        'normal distribution',
        'normal distribution calculator',
        'bell curve',
        'gaussian distribution',
        'z score calculator',
        'normal PDF',
        'normal CDF',
        'standard normal',
        'empirical rule',
        '68 95 99.7 rule',
        'normal probability',
        'interactive normal distribution',
        'calculate normal probability',
        'normal distribution mean variance',
        'central limit theorem'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - NORMAL - TO BE FILLED IN STEP 2
      // },

      // NORMAL DISTRIBUTION CONTENT BLOCK

sectionsContent: {
  obj1: {
    title: 'Adjusting Mean and Standard Deviation',
    content: `Use the **μ (mu) slider** to shift the distribution's center along the x-axis. Values range from -10 to 10, moving the bell curve left or right without changing its shape.

Adjust **σ (sigma) slider** to control spread. Smaller σ creates a tall, narrow curve with values concentrated near μ. Larger σ produces a short, wide curve with more variability.

Watch how changing these parameters affects the visualization. The curve always remains symmetric around μ, with the same bell shape regardless of parameters - only location and scale change.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Reading the PDF Curve',
    content: `The PDF (Probability Density Function) displays the characteristic bell-shaped curve. The peak occurs at x = μ, representing the distribution's mean, median, and mode - all equal due to symmetry.

The curve extends from -∞ to +∞ theoretically, but the calculator shows the practical range μ ± 4σ where 99.99% of probability mass resides. Areas under the curve represent probabilities.

Inflection points (where curvature changes) occur at μ ± σ. Between these points, the curve is steepest, containing about 68% of the total probability. This geometric feature helps visualize the 68-95-99.7 rule.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Understanding the CDF Display',
    content: `The CDF (Cumulative Distribution Function) shows the characteristic S-curve rising from 0 to 1. At any point x, the height gives P(X ≤ x), the probability of values at or below x.

The CDF's steepest region occurs around μ where the PDF peaks. At μ itself, CDF equals 0.5 - exactly half the probability lies below the mean due to symmetry.

The CDF approaches but never quite reaches 0 or 1 at the display's edges. At μ ± 3σ, CDF values are approximately 0.0013 and 0.9987, leaving only 0.27% probability in the extreme tails combined.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Using the Probability Calculators',
    content: `Enter value x in the **P(X ≤ x)** calculator to find the area under the curve to the left of x. This uses the error function erf(z) where z = (x - μ)/σ is the standardized Z-score.

**P(X ≥ x)** gives the right-tail probability, computed as 1 - P(X ≤ x). This answers questions like "What fraction of values exceed x?"

For **range probabilities P(a ≤ X ≤ b)**, the calculator computes CDF(b) - CDF(a), giving the area under the curve between a and b. This is the fundamental probability for any continuous interval.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Working with Z-Scores',
    content: `Every normal distribution calculation uses **standardization**: Z = (X - μ)/σ transforms values to standard normal (μ = 0, σ = 1). The calculator performs this conversion automatically.

Z-scores measure distance from the mean in standard deviation units. Z = 2 means "2 standard deviations above the mean." Z = -1.5 means "1.5 standard deviations below."

The standard normal table (Z-table) provides CDF values for Z-scores. For any normal distribution, standardize first, then look up the Z-score. This is why one table suffices for all normal distributions.`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'The Empirical Rule (68-95-99.7)',
    content: `The **68% rule**: About 68% of values fall within μ ± σ. For μ = 100, σ = 15, expect 68% of values in [85, 115].

The **95% rule**: About 95% fall within μ ± 2σ. Using the same parameters, 95% lie in [70, 130]. Only 5% of values fall more than 2 standard deviations from the mean.

The **99.7% rule**: About 99.7% fall within μ ± 3σ, or [55, 145]. Values beyond ±3σ are rare, occurring less than 0.3% of the time. This rule underpins control charts and outlier detection.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Normal Distribution?',
    content: `The normal (Gaussian) distribution is the most important continuous probability distribution, modeling natural phenomena that result from many small, independent factors. Its bell shape appears throughout nature, science, and statistics.

Two parameters completely define it: μ (mean) determines location, σ (standard deviation) determines spread. The distribution is symmetric around μ, with probability decreasing exponentially as distance from μ increases.

The normal distribution is fundamental because of the **Central Limit Theorem**: sums and averages of independent random variables tend toward normality regardless of the original distribution. For comprehensive theory, see **normal distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'Central Limit Theorem Connection',
    content: `The **Central Limit Theorem** explains why normal distributions appear so frequently. When you sum or average many independent random variables, the result approaches a normal distribution even if the original variables aren't normal.

This applies to measurement errors (sum of many small perturbations), test scores (sum of knowledge across many topics), and manufacturing tolerances (sum of variations in multiple processes).

The theorem works surprisingly quickly - often just 30 observations suffice for reasonable normality. This makes the normal distribution applicable even when underlying processes aren't purely Gaussian.`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Distribution Properties and Statistics',
    content: `**Mean, median, and mode** all equal μ due to perfect symmetry. There's no skewness - the distribution is perfectly balanced around its center.

**Variance** equals σ², the square of the standard deviation. **Standard deviation** σ is the natural scale parameter, representing typical deviation from the mean.

The distribution has **zero skewness** (symmetric) and **kurtosis of 3** (defining "normal" tail behavior). Distributions with kurtosis > 3 have heavier tails; kurtosis < 3 have lighter tails than normal.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Calculators',
    content: `The **standard normal distribution** (Z-distribution) has μ = 0 and σ = 1, serving as the reference for all normal calculations. Any normal distribution can be standardized using Z = (X - μ)/σ.

The **t-distribution** approximates normal for large sample sizes but has heavier tails, accounting for additional uncertainty when estimating σ from data. Use t for small samples (n < 30).

**Related Tools:**

**Z-Score Calculator** - Standardization and percentiles

**T-Distribution Calculator** - Small sample inference

**Chi-Square Distribution** - Related to normal's squared values

**Hypothesis Testing Tools** - Applications of normal distribution`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the normal distribution used for?",
    answer: "The normal distribution models continuous variables that result from many small independent factors: heights, weights, test scores, measurement errors, blood pressure, and financial returns. It's fundamental in statistics for hypothesis testing, confidence intervals, and regression analysis."
  },
  obj2: {
    question: "How do you calculate normal distribution probability?",
    answer: "Normal probabilities require the CDF which uses the error function: Φ(x) = (1 + erf((x-μ)/(σ√2)))/2. First standardize to Z = (x-μ)/σ, then look up Φ(Z) in standard normal tables or use the calculator. For ranges P(a ≤ X ≤ b) = Φ(b) - Φ(a)."
  },
  obj3: {
    question: "What is a Z-score?",
    answer: "A Z-score measures how many standard deviations a value is from the mean: Z = (X - μ)/σ. Z = 0 means exactly at the mean, Z = 1 means one standard deviation above, Z = -2 means two standard deviations below. Z-scores standardize normal distributions for comparison."
  },
  obj4: {
    question: "What is the 68-95-99.7 empirical rule?",
    answer: "The empirical rule states approximately 68% of values fall within μ ± σ, 95% within μ ± 2σ, and 99.7% within μ ± 3σ. This provides quick probability estimates without calculations and explains why values beyond ±3σ are considered unusual or outliers."
  },
  obj5: {
    question: "Why is the normal distribution so important?",
    answer: "The normal distribution is fundamental because: (1) many natural phenomena follow it, (2) the Central Limit Theorem makes sums/averages of any variables approximately normal, (3) it's mathematically tractable for analysis, and (4) it's the basis for most statistical inference procedures."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Normal Distribution Calculator",
    "description": "Calculate normal distribution probabilities with interactive μ and σ controls. Includes PDF/CDF visualization, Z-score calculator, and 68-95-99.7 empirical rule display.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/normal",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Interactive sliders for mean μ and standard deviation σ",
      "Real-time bell curve (PDF) visualization",
      "S-curve CDF display with cumulative probabilities",
      "Z-score calculator with automatic standardization",
      "Standard normal table reference with lookup functionality",
      "Empirical rule visualization (68-95-99.7)",
      "Range probability calculator P(a ≤ X ≤ b)",
      "Left-tail and right-tail probability calculators"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Normal Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/normal"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the normal distribution used for?",
          answer: "The normal distribution models continuous variables that result from many small independent factors: heights, weights, test scores, measurement errors, blood pressure, and financial returns. It's fundamental in statistics for hypothesis testing, confidence intervals, and regression analysis."
        },
        obj2: {
          question: "How do you calculate normal distribution probability?",
          answer: "Normal probabilities require the CDF which uses the error function: Φ(x) = (1 + erf((x-μ)/(σ√2)))/2. First standardize to Z = (x-μ)/σ, then look up Φ(Z) in standard normal tables or use the calculator. For ranges P(a ≤ X ≤ b) = Φ(b) - Φ(a)."
        },
        obj3: {
          question: "What is a Z-score?",
          answer: "A Z-score measures how many standard deviations a value is from the mean: Z = (X - μ)/σ. Z = 0 means exactly at the mean, Z = 1 means one standard deviation above, Z = -2 means two standard deviations below. Z-scores standardize normal distributions for comparison."
        },
        obj4: {
          question: "What is the 68-95-99.7 empirical rule?",
          answer: "The empirical rule states approximately 68% of values fall within μ ± σ, 95% within μ ± 2σ, and 99.7% within μ ± 3σ. This provides quick probability estimates without calculations and explains why values beyond ±3σ are considered unusual or outliers."
        },
        obj5: {
          question: "Why is the normal distribution so important?",
          answer: "The normal distribution is fundamental because: (1) many natural phenomena follow it, (2) the Central Limit Theorem makes sums/averages of any variables approximately normal, (3) it's mathematically tractable for analysis, and (4) it's the basis for most statistical inference procedures."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Normal Distribution Calculator",
          "description": "Calculate normal distribution probabilities with interactive μ and σ controls. Includes PDF/CDF visualization, Z-score calculator, and 68-95-99.7 empirical rule display.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/normal",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Interactive sliders for mean μ and standard deviation σ",
            "Real-time bell curve (PDF) visualization",
            "S-curve CDF display with cumulative probabilities",
            "Z-score calculator with automatic standardization",
            "Standard normal table reference with lookup functionality",
            "Empirical rule visualization (68-95-99.7)",
            "Range probability calculator P(a ≤ X ≤ b)",
            "Left-tail and right-tail probability calculators"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Normal Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/normal"
            }
          ]
        }
      }
    },

    'exponential': {
      componentName: 'ExponentialDistributionExplorer',
      title: 'Exponential Distribution Calculator | Waiting Time Calculator | Learn Math Class',
      description: 'Calculate exponential distribution probabilities for time between events. Interactive λ parameter control with PDF/CDF visualization and memoryless property demonstration.',
      h1Title: 'Exponential Distribution Explorer',
      url: '/probability/visual-tools/distributions/exponential',
      name: 'Exponential Distribution Calculator',
      keywords: [
        'exponential distribution',
        'exponential calculator',
        'waiting time distribution',
        'time between events',
        'exponential PDF',
        'exponential CDF',
        'lambda rate parameter',
        'memoryless continuous',
        'exponential probability',
        'interactive exponential',
        'exponential formula',
        'poisson process',
        'calculate exponential probability',
        'exponential mean variance',
        'continuous exponential'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - EXPONENTIAL - TO BE FILLED IN STEP 2
      // },
      // EXPONENTIAL DISTRIBUTION CONTENT BLOCK

sectionsContent: {
  obj1: {
    title: 'Adjusting the Rate Parameter',
    content: `Use the **λ (lambda) slider** to set the event rate - how frequently events occur per unit time. Values range from 0.1 (rare events, long waits) to 5 (frequent events, short waits).

As λ increases, the PDF curve becomes steeper and more concentrated near zero, reflecting shorter average waiting times. Lower λ creates a more gradual decline, indicating longer typical waits between events.

The mean waiting time equals 1/λ. At λ = 2 events per hour, average waiting time is 0.5 hours. At λ = 0.5, expect 2-hour average waits. The relationship is perfectly reciprocal.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Reading the PDF Curve',
    content: `The PDF shows the characteristic exponentially decreasing curve, starting at maximum height λ at x = 0 and declining toward zero as x increases. The curve never touches zero but approaches it asymptotically.

The steepness of the decline is controlled by λ. Higher rates create steeper drops, while lower rates produce more gradual decreases. The curve always has its mode at x = 0 - the shortest possible waiting time.

About 63% of the probability mass lies within one mean (1/λ) from zero. The practical display range extends to about 4/λ, capturing over 98% of all probability.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Understanding the CDF Display',
    content: `The CDF shows P(X ≤ x) = 1 - e^(-λx), rising from 0 and approaching 1 asymptotically. Unlike the normal's S-curve, the exponential CDF rises quickly initially then gradually levels off.

The curve's initial steepness indicates high probability of short waiting times. At x = 1/λ (the mean), the CDF equals approximately 0.632 - about 63.2% of events occur within one average waiting time.

The CDF never quite reaches 1, reflecting the theoretical possibility of arbitrarily long waiting times, though probabilities become negligible for large x.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Computing Point Probabilities',
    content: `For continuous distributions, individual point probabilities are always zero. Instead, use the **PDF value** at x, which gives the probability density: f(x) = λe^(-λx).

The PDF height indicates relative likelihood - higher values mean that region is more probable. The PDF at x = 0 equals λ, the maximum density, declining exponentially from there.

To find actual probabilities, you need intervals. Use the range calculator to find P(a ≤ X ≤ b), which computes the area under the PDF curve between a and b.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Calculating Cumulative Probabilities',
    content: `Use **P(X ≤ x)** to find the probability of waiting x time units or less. The formula 1 - e^(-λx) provides exact values without numerical integration.

**P(X > x)** gives the survival probability - the chance of waiting more than x units. This equals e^(-λx), showing exponential decay. The memoryless property appears here: if you've waited time s, the probability of waiting additional time t is still e^(-λt).

**P(X ≥ x)** is identical to P(X > x) for continuous distributions since P(X = x) = 0. This differs from discrete distributions where the distinction matters.`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Range Probability Calculations',
    content: `The range calculator computes P(a ≤ X ≤ b) = F(b) - F(a) = e^(-λa) - e^(-λb), giving the probability that waiting time falls between a and b.

Four boundary options exist, but for continuous distributions all four give identical results since individual points have zero probability:
• **[a, b]**, **(a, b)**, **[a, b)**, **(a, b]** all equal e^(-λa) - e^(-λb)

Example: For λ = 1, find P(0.5 ≤ X ≤ 2). This gives e^(-0.5) - e^(-2) ≈ 0.606 - 0.135 = 0.471, about 47% probability the wait is between 0.5 and 2 time units.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Exponential Distribution?',
    content: `The exponential distribution models waiting times between events in a Poisson process. If events occur randomly at constant rate λ, the time until the next event follows an exponential distribution.

The distribution requires constant event rate and independent occurrences. Each waiting period is independent of previous history - the memoryless property makes it unique among continuous distributions.

Applications include customer service times, equipment lifetimes, time between arrivals, radioactive decay intervals, and earthquake occurrences. For theoretical foundations, see **exponential distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'The Memoryless Property',
    content: `The exponential is the only continuous distribution with the memoryless property: P(X > s+t | X > s) = P(X > t). If you've waited time s without an event, the probability of waiting additional time t is the same as starting fresh.

This means past waiting provides no information about future waiting. The distribution "forgets" how long you've already waited - each moment is statistically identical to any other.

The memoryless property arises from the constant hazard rate λ. Unlike aging processes where failure becomes more likely over time, exponential models truly random, time-independent events.`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Distribution Statistics',
    content: `The **mean** and **standard deviation** both equal 1/λ. With λ = 3 events per hour, average waiting time is 1/3 hour (20 minutes) with the same standard deviation.

The **variance** equals 1/λ², so variance equals mean squared. This high variance relative to the mean reflects the distribution's long right tail - occasional very long waits are possible.

The **median** equals (ln 2)/λ ≈ 0.693/λ, always less than the mean 1/λ. This reflects right skewness - the mode is at 0, median is lower than mean, creating positive skew.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Tools',
    content: `The **Poisson distribution** counts events in fixed time intervals, while exponential measures time between events. If events follow Poisson(λ) per unit time, inter-event times follow Exponential(λ).

The **geometric distribution** is the discrete analog, counting trials until first success rather than continuous waiting time. Both share the memoryless property.

**Related Tools:**

**Poisson Distribution Calculator** - Event counts in intervals

**Geometric Distribution Calculator** - Discrete waiting times

**Gamma Distribution Calculator** - Sum of exponential waiting times

**Weibull Distribution Calculator** - Variable hazard rate models`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the exponential distribution used for?",
    answer: "The exponential distribution models time between events in a Poisson process: customer arrival times, component lifetimes, service durations, radioactive decay intervals, and earthquake occurrences. It's used whenever you're measuring waiting time until the next random event."
  },
  obj2: {
    question: "How do you calculate exponential probability?",
    answer: "The exponential PDF is f(x) = λe^(-λx) for x ≥ 0. The CDF is F(x) = 1 - e^(-λx). For P(X > x), use e^(-λx) directly. Range probabilities P(a ≤ X ≤ b) equal F(b) - F(a). The calculator handles these exponential computations automatically."
  },
  obj3: {
    question: "What is the memoryless property of exponential distribution?",
    answer: "The exponential is the only continuous distribution with the memoryless property: P(X > s+t | X > s) = P(X > t). If you've waited time s without an event, the probability of waiting additional time t is the same as starting fresh. Past waiting provides no information about future waiting."
  },
  obj4: {
    question: "What's the relationship between exponential and Poisson?",
    answer: "If events occur according to a Poisson process with rate λ, the time between successive events follows an exponential distribution with the same rate λ. Poisson counts events in a fixed time; exponential measures time until an event. They're two perspectives on the same process."
  },
  obj5: {
    question: "What are the mean and variance of exponential distribution?",
    answer: "Both the mean and standard deviation equal 1/λ, where λ is the rate parameter. The variance equals 1/λ². For example, if events occur at rate λ = 2 per hour, the average waiting time is 0.5 hours with standard deviation also 0.5 hours."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Exponential Distribution Calculator",
    "description": "Calculate exponential distribution probabilities for time between events. Interactive λ parameter control with PDF/CDF visualization and memoryless property demonstration.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/exponential",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Interactive λ (rate parameter) slider for event frequency",
      "Exponentially decreasing PDF curve visualization",
      "CDF display approaching 1 asymptotically",
      "Probability calculators for P(X ≤ x) and P(X > x)",
      "Range probability calculator for time intervals",
      "Memoryless property demonstration",
      "Statistics showing mean = 1/λ and variance = 1/λ²"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Exponential Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/exponential"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the exponential distribution used for?",
          answer: "The exponential distribution models time between events in a Poisson process: customer arrival times, component lifetimes, service durations, radioactive decay intervals, and earthquake occurrences. It's used whenever you're measuring waiting time until the next random event."
        },
        obj2: {
          question: "How do you calculate exponential probability?",
          answer: "The exponential PDF is f(x) = λe^(-λx) for x ≥ 0. The CDF is F(x) = 1 - e^(-λx). For P(X > x), use e^(-λx) directly. Range probabilities P(a ≤ X ≤ b) equal F(b) - F(a). The calculator handles these exponential computations automatically."
        },
        obj3: {
          question: "What is the memoryless property of exponential distribution?",
          answer: "The exponential is the only continuous distribution with the memoryless property: P(X > s+t | X > s) = P(X > t). If you've waited time s without an event, the probability of waiting additional time t is the same as starting fresh. Past waiting provides no information about future waiting."
        },
        obj4: {
          question: "What's the relationship between exponential and Poisson?",
          answer: "If events occur according to a Poisson process with rate λ, the time between successive events follows an exponential distribution with the same rate λ. Poisson counts events in a fixed time; exponential measures time until an event. They're two perspectives on the same process."
        },
        obj5: {
          question: "What are the mean and variance of exponential distribution?",
          answer: "Both the mean and standard deviation equal 1/λ, where λ is the rate parameter. The variance equals 1/λ². For example, if events occur at rate λ = 2 per hour, the average waiting time is 0.5 hours with standard deviation also 0.5 hours."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Exponential Distribution Calculator",
          "description": "Calculate exponential distribution probabilities for time between events. Interactive λ parameter control with PDF/CDF visualization and memoryless property demonstration.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/exponential",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Interactive λ (rate parameter) slider for event frequency",
            "Exponentially decreasing PDF curve visualization",
            "CDF display approaching 1 asymptotically",
            "Probability calculators for P(X ≤ x) and P(X > x)",
            "Range probability calculator for time intervals",
            "Memoryless property demonstration",
            "Statistics showing mean = 1/λ and variance = 1/λ²"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Exponential Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/exponential"
            }
          ]
        }
      }
    },

    'uniform-continuous': {
      componentName: 'ContinuousUniformDistributionExplorer',
      title: 'Continuous Uniform Distribution Calculator | Equal Density Calculator | Learn Math Class',
      description: 'Calculate continuous uniform probabilities over intervals [a,b]. Interactive bounds control with constant PDF visualization and linear CDF display.',
      h1Title: 'Continuous Uniform Distribution Explorer',
      url: '/probability/visual-tools/distributions/uniform-continuous',
      name: 'Continuous Uniform Distribution Calculator',
      keywords: [
        'continuous uniform distribution',
        'uniform continuous calculator',
        'equal density distribution',
        'uniform PDF',
        'uniform CDF',
        'continuous uniform probability',
        'random number generation',
        'uniform interval',
        'constant probability density',
        'interactive uniform continuous',
        'uniform distribution formula',
        'calculate uniform probability',
        'uniform mean variance',
        'rectangular distribution',
        'continuous uniform examples'
      ],
      // sectionsContent: {
      //   // CONTENT PLACEHOLDER - CONTINUOUS UNIFORM - TO BE FILLED IN STEP 2
      // },

      // CONTINUOUS UNIFORM DISTRIBUTION CONTENT BLOCK

sectionsContent: {
  obj1: {
    title: 'Setting Interval Bounds',
    content: `Adjust **a (lower bound)** using the top slider to set the minimum value of your interval. The range spans from -20 to 20, accommodating scenarios from symmetric intervals around zero to positive-only ranges.

Set **b (upper bound)** with the bottom slider to define the maximum value. The calculator automatically ensures b > a, maintaining a valid interval with positive width.

The interval width (b - a) determines both the PDF height 1/(b-a) and the variance. Wider intervals have lower constant density and higher variance.`,
    before: '',
    after: '',
    link: ''
  },
  obj2: {
    title: 'Understanding the Flat PDF',
    content: `The PDF displays as a perfectly flat rectangular function with constant height 1/(b-a) across the interval [a, b] and zero outside. This uniform density is the defining feature of continuous uniform distributions.

The rectangular shape represents **maximum entropy** - complete uncertainty about where within [a, b] values will fall. No subinterval is favored over any other of equal width.

The PDF height adjusts automatically to ensure the total area (probability) equals 1. For interval [0, 10], height is 0.1. For [-5, 5], height is also 0.1 since both have width 10.`,
    before: '',
    after: '',
    link: ''
  },
  obj3: {
    title: 'Reading the Linear CDF',
    content: `The CDF rises linearly from 0 to 1 across the interval [a, b]. At any point x in [a, b], F(x) = (x-a)/(b-a) gives the proportion of the interval from a to x.

The perfectly linear rise reflects equal probability density - each unit of width contributes the same probability. For x < a, CDF = 0. For x > b, CDF = 1.

The CDF's slope equals 1/(b-a), matching the PDF height. Steeper slopes (narrower intervals) indicate more concentrated probability, while gentler slopes (wider intervals) show more spread.`,
    before: '',
    after: '',
    link: ''
  },
  obj4: {
    title: 'Computing Interval Probabilities',
    content: `For continuous distributions, point probabilities are always zero. Instead, use the **range calculator** to find P(c ≤ X ≤ d) for any interval [c, d] within [a, b].

The formula is beautifully simple: P(c ≤ X ≤ d) = (d - c)/(b - a). Probability is proportional to interval length - a 2-unit interval has twice the probability of a 1-unit interval.

For boundary options, all four give identical results since individual points have zero probability. The distinction between [c, d], (c, d), [c, d), and (c, d] is meaningless for continuous distributions.`,
    before: '',
    after: '',
    link: ''
  },
  obj5: {
    title: 'Using Cumulative Calculators',
    content: `**P(X ≤ x)** returns (x-a)/(b-a) for a ≤ x ≤ b, giving the fraction of the interval from a to x. For x < a, returns 0. For x ≥ b, returns 1.

**P(X ≥ x)** computes (b-x)/(b-a), the fraction from x to b. This equals 1 - P(X ≤ x) by the complement rule.

Since P(X = x) = 0, the strict inequalities P(X < x) and P(X > x) give identical results to P(X ≤ x) and P(X ≥ x). This differs fundamentally from discrete distributions.`,
    before: '',
    after: '',
    link: ''
  },
  obj6: {
    title: 'Range Probability Examples',
    content: `Example 1: For Uniform[0, 10], what's P(3 ≤ X ≤ 7)? Answer: (7-3)/10 = 0.4 or 40%.

Example 2: For Uniform[-5, 5], what's P(X > 2)? Answer: (5-2)/10 = 0.3 or 30%.

Example 3: For Uniform[2, 8], what's P(X ≤ 5)? Answer: (5-2)/(8-2) = 3/6 = 0.5 or 50%.

The simplicity of these calculations - just ratios of lengths - makes continuous uniform the easiest continuous distribution to work with analytically.`,
    before: '',
    after: '',
    link: ''
  },
  obj7: {
    title: 'What is the Continuous Uniform Distribution?',
    content: `The continuous uniform distribution assigns equal probability density to all values in a continuous interval [a, b]. It models complete randomness over a range when no value is more likely than any other.

Two parameters define it: lower bound a and upper bound b. The PDF equals 1/(b-a) on [a, b] and zero elsewhere, ensuring total probability equals 1.

Applications include random number generation, modeling arrival times within known windows, rounding errors, and baseline probability models for continuous variables. For theoretical foundations, see **continuous uniform distribution theory page**.`,
    before: '',
    after: '',
    link: ''
  },
  obj8: {
    title: 'Maximum Entropy Principle',
    content: `Among all continuous distributions on interval [a, b], the uniform distribution has maximum **entropy** - it contains minimal information and represents maximum uncertainty about where values fall within the interval.

This principle explains why uniform distribution is the default assumption when you know only the support [a, b] and nothing else. It's the "most random" continuous distribution possible for a bounded interval.

When you have no reason to favor any subregion over another, maximum entropy reasoning leads to the uniform distribution. Any deviation from uniformity would imply additional information or structure.`,
    before: '',
    after: '',
    link: ''
  },
  obj9: {
    title: 'Distribution Statistics',
    content: `The **mean** equals (a+b)/2, the midpoint of the interval. For Uniform[0, 10], mean = 5. For Uniform[-3, 7], mean = 2.

The **variance** equals (b-a)²/12. Wider intervals have proportionally larger variance. For Uniform[0, 10], variance = 100/12 ≈ 8.33.

The **standard deviation** is (b-a)/√12 ≈ (b-a)/3.46. Perfect symmetry around the midpoint means zero skewness. The distribution has **kurtosis of -6/5 = -1.2**, indicating lighter tails than normal.`,
    before: '',
    after: '',
    link: ''
  },
  obj10: {
    title: 'Related Distributions and Tools',
    content: `The **discrete uniform distribution** is the discrete analog, assigning equal probability to finitely many specific values rather than equal density over a continuous interval.

The **standard uniform distribution** Uniform[0, 1] is fundamental to random number generation. All other distributions can be generated by transforming Uniform[0, 1] random variables. The inverse transform method uses F^(-1)(U) where U ~ Uniform[0, 1].

**Related Tools:**

**Discrete Uniform Distribution** - Equal probability over finite sets

**Standard Uniform Generator** - Uniform[0, 1] for simulations

**Random Variable Transformation** - Generating other distributions from uniform

**Beta Distribution Calculator** - Generalization of uniform with shape parameters`,
    before: '',
    after: '',
    link: ''
  }
},

faqQuestions: {
  obj1: {
    question: "What is the continuous uniform distribution used for?",
    answer: "The continuous uniform distribution models situations where all values in a continuous interval are equally likely: random number generation between bounds, arrival times within a window when exact time is unknown, rounding errors, and baseline probability models for continuous variables."
  },
  obj2: {
    question: "How do you calculate continuous uniform probability?",
    answer: "The PDF is constant: f(x) = 1/(b-a) for a ≤ x ≤ b. The CDF is linear: F(x) = (x-a)/(b-a). For ranges, P(c ≤ X ≤ d) = (d-c)/(b-a) - simply the length of the interval divided by total range. Probabilities are proportional to interval lengths."
  },
  obj3: {
    question: "What is the mean of continuous uniform distribution?",
    answer: "The mean equals (a+b)/2, the midpoint of the interval. The variance equals (b-a)²/12. The standard deviation is (b-a)/√12. For example, Uniform[0,10] has mean 5, variance 100/12 ≈ 8.33, and standard deviation ≈ 2.89."
  },
  obj4: {
    question: "What's the difference between discrete and continuous uniform?",
    answer: "Discrete uniform assigns equal probability to finitely many specific points. Continuous uniform assigns equal probability density over an interval - individual points have probability zero, only intervals have positive probability. One uses PMF, the other uses PDF."
  },
  obj5: {
    question: "Why is continuous uniform important for random number generation?",
    answer: "The standard uniform distribution on [0,1] is fundamental to random number generation. All other distributions can be generated by transforming uniform[0,1] random numbers. Computer random number generators produce uniform[0,1] values as the base, then transform them as needed."
  }
},

schemas: {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Continuous Uniform Distribution Calculator",
    "description": "Calculate continuous uniform probabilities over intervals [a,b]. Interactive bounds control with constant PDF visualization and linear CDF display.",
    "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-continuous",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Dual sliders for interval bounds a and b",
      "Flat rectangular PDF showing constant density 1/(b-a)",
      "Linear CDF from 0 to 1 over the interval",
      "Interval probability calculator using length ratios",
      "Simple probability formulas proportional to interval length",
      "Range probability calculator with boundary options",
      "Statistics showing mean (a+b)/2 and variance (b-a)²/12"
    ],
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Interactive Tool",
    "educationalLevel": "High School, College"
  },
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
        "name": "Probability",
        "item": "https://www.learnmathclass.com/probability"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Visual Tools",
        "item": "https://www.learnmathclass.com/probability/visual-tools"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Distributions",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Continuous Uniform Distribution Calculator",
        "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-continuous"
      }
    ]
  }
},
      faqQuestions: {
        obj1: {
          question: "What is the continuous uniform distribution used for?",
          answer: "The continuous uniform distribution models situations where all values in a continuous interval are equally likely: random number generation between bounds, arrival times within a window when exact time is unknown, rounding errors, and baseline probability models for continuous variables."
        },
        obj2: {
          question: "How do you calculate continuous uniform probability?",
          answer: "The PDF is constant: f(x) = 1/(b-a) for a ≤ x ≤ b. The CDF is linear: F(x) = (x-a)/(b-a). For ranges, P(c ≤ X ≤ d) = (d-c)/(b-a) - simply the length of the interval divided by total range. Probabilities are proportional to interval lengths."
        },
        obj3: {
          question: "What is the mean of continuous uniform distribution?",
          answer: "The mean equals (a+b)/2, the midpoint of the interval. The variance equals (b-a)²/12. The standard deviation is (b-a)/√12. For example, Uniform(0,10) has mean 5, variance 100/12 ≈ 8.33, and standard deviation ≈ 2.89."
        },
        obj4: {
          question: "What's the difference between discrete and continuous uniform?",
          answer: "Discrete uniform assigns equal probability to finitely many specific points. Continuous uniform assigns equal probability density over an interval - individual points have probability zero, only intervals have positive probability. One uses PMF, the other uses PDF."
        },
        obj5: {
          question: "Why is continuous uniform important for random number generation?",
          answer: "The standard uniform distribution on [0,1] is fundamental to random number generation. All other distributions can be generated by transforming uniform(0,1) random numbers. Computer random number generators produce uniform(0,1) values as the base, then transform them as needed."
        }
      },
      schemas: {
        webApplication: {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Continuous Uniform Distribution Calculator",
          "description": "Calculate continuous uniform probabilities over intervals [a,b]. Interactive bounds control with constant PDF visualization and linear CDF display.",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-continuous",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "Dual sliders for interval bounds a and b",
            "Flat rectangular PDF showing constant density 1/(b-a)",
            "Linear CDF from 0 to 1 over the interval",
            "Interval probability calculator using length ratios",
            "Simple probability formulas proportional to interval length",
            "Range probability calculator with boundary options",
            "Statistics showing mean (a+b)/2 and variance (b-a)²/12"
          ],
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "datePublished": "2024-01-15",
          "dateModified": new Date().toISOString(),
          "inLanguage": "en-US",
          "isAccessibleForFree": true,
          "learningResourceType": "Interactive Tool",
          "educationalLevel": "High School, College"
        },
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
              "name": "Probability",
              "item": "https://www.learnmathclass.com/probability"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Visual Tools",
              "item": "https://www.learnmathclass.com/probability/visual-tools"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Distributions",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Continuous Uniform Distribution Calculator",
              "item": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-continuous"
            }
          ]
        }
      }
    }
  };

  const config = viewConfig[view];

  const sectionsContent = config.sectionsContent;
  const faqQuestions = config.faqQuestions;
  const schemas = {
    ...config.schemas,
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  };

  const introContent = {
    id: "intro",
    title: "Interactive Distribution Explorer",
    content: `Use the interactive calculator below to explore this probability distribution. Adjust parameters to see how they affect probabilities and visualize the distribution.`
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: config.title,
        description: config.description,
        keywords: config.keywords.join(", "),
        url: config.url,
        name: config.name
      },
      componentName: config.componentName,
      h1Title: config.h1Title
    }
  };
}

export default function DistributionExplorerPage({ seoData, sectionsContent, introContent, componentName, h1Title, faqQuestions, schemas }) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }));

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.webApplication)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>

      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'-50px', marginBottom:'-20px'}}>
        {h1Title}
      </h1>
      <br/>
      <div style={{width:'80%',margin:'auto'}}>
      {componentName === 'BinomialDistributionExplorer' && <BinomialDistributionExplorer 
      title='Modify Parameters and See Results'/>}
      {componentName === 'GeometricDistributionExplorer' && <GeometricDistributionExplorerer 
      title='Modify Parameters and See Results'/>}
      {componentName === 'NegativeBinomialDistributionExplorer' && <NegativeBinomialDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'PoissonDistributionExplorer' && <PoissonDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'HypergeometricDistributionExplorer' && <HypergeometricDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'DiscreteUniformDistributionExplorer' && <DiscreteUniformDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'NormalDistributionExplorer' && <NormalDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'ExponentialDistributionExplorer' && <ExponentialDistributionExplorer
      title='Modify Parameters and See Results'/>}
      {componentName === 'ContinuousUniformDistributionExplorer' && <ContinuousUniformDistributionExplorer
      title='Modify Parameters and See Results'/>}
     </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}