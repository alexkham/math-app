// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import Link from 'next/link'

// export async function getStaticProps(){

//   const keyWords=['probability distributions', 'distribution explorer', 'discrete distributions', 'continuous distributions', 'binomial distribution', 'normal distribution', 'poisson distribution', 'exponential distribution']

//   const sectionsContent = {
//     obj1: {
//       title: `What are Probability Distributions?`,
//       content: `A probability distribution describes how probabilities are distributed over the values of a random variable. It provides a mathematical function that gives the probabilities of occurrence of different possible outcomes.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//     obj2: {
//       title: `Discrete vs Continuous Distributions`,
//       content: `Discrete distributions describe random variables that can only take on specific, countable values (like the number of heads in coin flips). Continuous distributions describe random variables that can take on any value within a range (like height or temperature).`,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//   }

//   const introContent = {
//     id: "intro",
//     title: "Interactive Distribution Explorers",
//     content: `Explore probability distributions through interactive visualizations and calculators. Each explorer provides probability calculations, visual representations, and detailed explanations to help you understand how different distributions work.`
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       seoData: {
//         title: "Probability Distribution Explorers | Interactive Calculators | Learn Math Class",
//         description: "Explore discrete and continuous probability distributions with interactive calculators and visualizations. Calculate probabilities, understand parameters, and visualize distributions including binomial, normal, Poisson, and exponential.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/distributions",
//         name: "Probability Distribution Explorers"
//       },
//     }
//   }
// }

// export default function DistributionExplorersPage({seoData, sectionsContent, introContent}) {

//   const discreteDistributions = [
//     {
//       title: 'Binomial Distribution',
//       description: 'Models the number of successes in a fixed number of independent trials',
//       href: '/probability/visual-tools/distributions/binomial'
//     },
//     {
//       title: 'Geometric Distribution',
//       description: 'Models the number of trials until the first success',
//       href: '/probability/visual-tools/distributions/geometric'
//     },
//     {
//       title: 'Negative Binomial Distribution',
//       description: 'Models the number of trials until a specified number of successes',
//       href: '/probability/visual-tools/distributions/negative-binomial'
//     },
//     {
//       title: 'Poisson Distribution',
//       description: 'Models the number of events occurring in a fixed interval',
//       href: '/probability/visual-tools/distributions/poisson'
//     },
//     {
//       title: 'Hypergeometric Distribution',
//       description: 'Models sampling without replacement from a finite population',
//       href: '/probability/visual-tools/distributions/hypergeometric'
//     },
//     {
//       title: 'Uniform Discrete Distribution',
//       description: 'Models equally likely outcomes over a discrete range',
//       href: '/probability/visual-tools/distributions/uniform-discrete'
//     }
//   ]

//   const continuousDistributions = [
//     {
//       title: 'Normal Distribution',
//       description: 'The bell curve - models many natural phenomena',
//       href: '/probability/visual-tools/distributions/normal'
//     },
//     {
//       title: 'Exponential Distribution',
//       description: 'Models time between events in a Poisson process',
//       href: '/probability/visual-tools/distributions/exponential'
//     },
//     {
//       title: 'Uniform Continuous Distribution',
//       description: 'Models equally likely outcomes over a continuous range',
//       href: '/probability/visual-tools/distributions/uniform-continuous'
//     }
//   ]

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
//     }
//   ]

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
//       <h1 className='title' style={{marginTop:'-50px', marginBottom:'5px'}}>
//         Probability Distribution Explorers
//       </h1>
      
//       <div style={{
//   maxWidth: '900px',
//   margin: '0 auto 30px auto',
//   padding: '10px 24px',
//   background: '#245fe3',
//   borderRadius: '8px',
//   boxShadow: '0 2px 8px rgba(36, 95, 227, 0.2)',
//   color: 'white',
//   textAlign: 'center',
//   marginBottom:'-50px',
// }}>
//   <h2 style={{
//     fontSize: '18px',
//     fontWeight: '600',
//     marginBottom: '8px',
//     margin: '0 0 8px 0'
//   }}>
//     Explore Probability Distributions
//   </h2>
//   <p style={{
//     fontSize: '14px',
//     lineHeight: '1.4',
//     margin: 0,
//     opacity: 0.95
//   }}>
//     Interactive tools with dynamic visualizations, parameter controls, and probability calculators for discrete and continuous distributions.
//   </p>
// </div>
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

//       {/* Discrete Distributions Section */}
//       <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
//         <h2 style={{
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#1a365d',
//           marginBottom: '24px',
//           textAlign: 'center'
//         }}>
//           Discrete Distributions
//         </h2>
        
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//           gap: '24px',
//           marginBottom: '60px'
//         }}>
//           {discreteDistributions.map((dist, index) => (
//             <Link 
//               key={index}
//               href={dist.href}
//               style={{
//                 display: 'block',
//                 padding: '28px',
//                 backgroundColor: '#ffffff',
//                 border: '2px solid #e2e8f0',
//                 borderRadius: '12px',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.borderColor = '#3182ce';
//                 e.currentTarget.style.transform = 'translateY(-4px)';
//                 e.currentTarget.style.boxShadow = '0 8px 16px rgba(49,130,206,0.2)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.borderColor = '#e2e8f0';
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
//               }}
//             >
//               <h3 style={{
//                 fontSize: '20px',
//                 fontWeight: '600',
//                 color: '#2d3748',
//                 marginBottom: '12px'
//               }}>
//                 {dist.title}
//               </h3>
//               <p style={{
//                 fontSize: '15px',
//                 color: '#4a5568',
//                 lineHeight: '1.6',
//                 margin: 0
//               }}>
//                 {dist.description}
//               </p>
//             </Link>
//           ))}
//         </div>

//         {/* Continuous Distributions Section */}
//         <h2 style={{
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#1a365d',
//           marginBottom: '24px',
//           textAlign: 'center'
//         }}>
//           Continuous Distributions
//         </h2>
        
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//           gap: '24px',
//           marginBottom: '60px'
//         }}>
//           {continuousDistributions.map((dist, index) => (
//             <Link 
//               key={index}
//               href={dist.href}
//               style={{
//                 display: 'block',
//                 padding: '28px',
//                 backgroundColor: '#ffffff',
//                 border: '2px solid #e2e8f0',
//                 borderRadius: '12px',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.borderColor = '#3182ce';
//                 e.currentTarget.style.transform = 'translateY(-4px)';
//                 e.currentTarget.style.boxShadow = '0 8px 16px rgba(49,130,206,0.2)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.borderColor = '#e2e8f0';
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
//               }}
//             >
//               <h3 style={{
//                 fontSize: '20px',
//                 fontWeight: '600',
//                 color: '#2d3748',
//                 marginBottom: '12px'
//               }}>
//                 {dist.title}
//               </h3>
//               <p style={{
//                 fontSize: '15px',
//                 color: '#4a5568',
//                 lineHeight: '1.6',
//                 margin: 0
//               }}>
//                 {dist.description}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <br/>
//       <SectionTableOfContents sections={genericSections}/>
//       <br/>
//       <br/>
//       <Sections sections={genericSections}/>
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
import '../../../../pages/pages.css'
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(){

  const keyWords = [
    'probability distributions',
    'distribution explorer',
    'discrete distributions',
    'continuous distributions',
    'binomial distribution',
    'normal distribution',
    'poisson distribution',
    'exponential distribution',
    'interactive distribution tools',
    'probability calculators',
    'distribution visualizations',
    'statistical distributions',
    'geometric distribution',
    'uniform distribution',
    'hypergeometric distribution'
  ]

  const sectionsContent = {
    obj1: {
      title: `What are Probability Distributions?`,
      content: `A probability distribution describes how probabilities are distributed over the values of a [random variable](!/probability/random-variables). It provides a mathematical function that gives the probabilities of occurrence of different possible outcomes. Every [random variable](!/probability/random-variables) has an associated [probability distribution](!/probability/distributions) that characterizes its behavior.

For [discrete random variables](!/probability/random-variables#types), the distribution assigns probabilities to specific, countable values. For [continuous random variables](!/probability/random-variables#types), the distribution describes probability density over intervals. Understanding [distributions](!/probability/distributions) is fundamental to statistics, data analysis, and probability theory.

Each [distribution](!/probability/distributions) is characterized by [parameters](!/probability/distributions#common) that determine its shape and behavior. For example, the [binomial distribution](!/probability/distributions/discrete/binomial) uses $n$ (number of trials) and $p$ (probability of success), while the [normal distribution](!/probability/distributions/continuous/normal) uses μ (mean) and σ (standard deviation).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `Discrete vs Continuous Distributions`,
      content: `[Discrete distributions](!/probability/distributions/discrete) describe [random variables](!/probability/random-variables) that can only take on specific, countable values. Examples include the number of heads in coin flips, the number of defective items in a batch, or the number of customers arriving per hour. Key discrete distributions include [discrete uniform](!/probability/distributions/discrete/uniform), [binomial](!/probability/distributions/discrete/binomial), [geometric](!/probability/distributions/discrete/geometric), [Poisson](!/probability/distributions/discrete/poisson),[negative binomial](!/probability/distributions/discrete/negative-binomial) and [hypergeometric](!/probability/distributions/discrete/hypergeometric).

[Continuous distributions](!/probability/distributions/continuous) describe [random variables](!/probability/random-variables) that can take on any value within a range. Examples include height, temperature, time between events, or measurement errors. Key continuous distributions include [normal](!/probability/distributions/continuous/normal), [exponential](!/probability/distributions/continuous/exponential), and [uniform](!/probability/distributions/continuous/uniform).

The mathematical treatment differs between types. Discrete distributions use [probability mass functions (PMF)](!/probability/probability-function#pmf) that assign exact probabilities to each value. Continuous distributions use [probability density functions (PDF)](!/probability/probability-function#pdf) where probabilities are calculated over intervals, not at single points.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Discrete Distribution Explorers`,
      content: `Our discrete distribution tools cover the most commonly used distributions in probability and statistics:

**Binomial Distribution** models the number of successes in a fixed number of independent trials, each with the same probability of success. Used in quality control, clinical trials, and survey sampling.

**Geometric Distribution** models the number of trials until the first success occurs. Commonly used in reliability testing and failure analysis.

**Negative Binomial Distribution** extends the geometric by modeling the number of trials needed to achieve a specified number of successes. Applications include epidemiology and insurance risk modeling.

**Poisson Distribution** models the number of events occurring in a fixed interval when events happen independently at a constant average rate. Used for arrival processes, defect counts, and rare event modeling.

**Hypergeometric Distribution** models sampling without replacement from a finite population. Essential for quality inspection and card game probabilities.

**Uniform Discrete Distribution** models equally likely outcomes over a discrete set, such as rolling a fair die.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Continuous Distribution Explorers`,
      content: `Our continuous distribution tools cover fundamental distributions for modeling real-valued random variables:

**Normal Distribution** is the most important distribution in statistics, describing data that clusters symmetrically around a mean. The bell curve appears in measurement errors, natural phenomena, and as a limiting distribution by the Central Limit Theorem. Used throughout statistics for hypothesis testing and confidence intervals.

**Exponential Distribution** models the time between events in a Poisson process. It describes waiting times, component lifetimes, and service times. The memoryless property makes it unique among continuous distributions.

**Continuous Uniform Distribution** models equally likely outcomes over a continuous interval. Every value in the range has the same probability density. Used as a baseline distribution and in random number generation.

Each continuous distribution explorer provides PDF visualization, CDF calculations, and probability computations for any interval.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `How to Use the Distribution Explorers`,
      content: `Each interactive explorer provides a comprehensive toolkit for understanding and applying probability distributions:

**Parameter Controls** allow you to adjust distribution parameters using sliders or input fields. Watch the distribution shape change in real-time as you modify parameters.

**Probability Calculations** compute exact probabilities for specific values (discrete) or intervals (continuous). Calculate P(X = k), P(X ≤ k), P(X ≥ k), and custom ranges.

**Visual Representations** display the distribution through PMF/PDF charts and CDF curves. Color-coded regions highlight the probabilities you're calculating.

**Summary Statistics** show mean, variance, standard deviation, and other key properties. Understand how parameters affect these measures.

Experiment with different parameter values to build intuition about how each distribution behaves. Compare different distributions to understand when each is most appropriate for real-world applications.`,
      before: ``,
      after: ``,
      link: '',
    }
  }

  const faqQuestions = {
    obj1: {
      question: "What probability distribution calculators are available?",
      answer: "The collection includes nine distribution explorers: six discrete (binomial, geometric, negative binomial, Poisson, hypergeometric, uniform discrete) and three continuous (normal, exponential, uniform continuous). Each provides interactive parameter controls, probability calculations, and dynamic visualizations."
    },
    obj2: {
      question: "How do I choose which distribution to use?",
      answer: "Choose based on your data type and scenario. For counting successes in fixed trials, use binomial. For time between events, use exponential. For naturally occurring measurements that cluster around a mean, use normal. For rare event counts, use Poisson. Each explorer's page provides guidance on appropriate use cases."
    },
    obj3: {
      question: "What's the difference between discrete and continuous distributions?",
      answer: "Discrete distributions model countable outcomes (like number of heads in coin flips) and assign exact probabilities to specific values. Continuous distributions model measurable quantities (like height or time) and compute probabilities over intervals, not at single points."
    },
    obj4: {
      question: "What can I calculate with these distribution tools?",
      answer: "Each explorer calculates exact probabilities, cumulative probabilities (CDF), and summary statistics like mean and variance. You can adjust parameters interactively and see immediate visual feedback through PMF/PDF and CDF charts. All calculations update in real-time as you modify parameters."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Probability Distribution Explorers",
      "description": "Explore discrete and continuous probability distributions with interactive calculators and visualizations. Calculate probabilities, understand parameters, and visualize distributions including binomial, normal, Poisson, and exponential.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/distributions",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Probability Distributions"
      },
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Binomial Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/binomial",
          "description": "Interactive calculator for binomial distribution with parameter controls and probability calculations"
        },
        {
          "@type": "WebPage",
          "name": "Geometric Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/geometric",
          "description": "Explore geometric distribution modeling trials until first success"
        },
        {
          "@type": "WebPage",
          "name": "Negative Binomial Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/negative-binomial",
          "description": "Calculate probabilities for trials until r successes"
        },
        {
          "@type": "WebPage",
          "name": "Poisson Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/poisson",
          "description": "Model event counts in fixed intervals with rate parameter λ"
        },
        {
          "@type": "WebPage",
          "name": "Hypergeometric Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/hypergeometric",
          "description": "Sampling without replacement from finite populations"
        },
        {
          "@type": "WebPage",
          "name": "Discrete Uniform Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-discrete",
          "description": "Equally likely outcomes over discrete ranges"
        },
        {
          "@type": "WebPage",
          "name": "Normal Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/normal",
          "description": "The bell curve with mean μ and standard deviation σ"
        },
        {
          "@type": "WebPage",
          "name": "Exponential Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/exponential",
          "description": "Time between events in Poisson processes"
        },
        {
          "@type": "WebPage",
          "name": "Continuous Uniform Distribution Explorer",
          "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-continuous",
          "description": "Constant probability density over continuous intervals"
        }
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Binomial Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/binomial",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive binomial distribution calculator with PMF and CDF visualization"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Geometric Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/geometric",
            "applicationCategory": "EducationalApplication",
            "description": "Geometric distribution tool for first success probability calculations"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Negative Binomial Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/negative-binomial",
            "applicationCategory": "EducationalApplication",
            "description": "Calculator for negative binomial distribution probabilities"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Poisson Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/poisson",
            "applicationCategory": "EducationalApplication",
            "description": "Poisson distribution calculator for event rate modeling"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Hypergeometric Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/hypergeometric",
            "applicationCategory": "EducationalApplication",
            "description": "Hypergeometric distribution for sampling without replacement"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Discrete Uniform Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-discrete",
            "applicationCategory": "EducationalApplication",
            "description": "Discrete uniform distribution calculator for equally likely outcomes"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Normal Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/normal",
            "applicationCategory": "EducationalApplication",
            "description": "Normal distribution calculator with bell curve visualization"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Exponential Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/exponential",
            "applicationCategory": "EducationalApplication",
            "description": "Exponential distribution tool for time between events"
          }
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Continuous Uniform Distribution Explorer",
            "url": "https://www.learnmathclass.com/probability/visual-tools/distributions/uniform-continuous",
            "applicationCategory": "EducationalApplication",
            "description": "Continuous uniform distribution calculator with constant density"
          }
        }
      ]
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
          "name": "Probability Distribution Explorers",
          "item": "https://www.learnmathclass.com/probability/visual-tools/distributions"
        }
      ]
    },

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
  }

  const introContent = {
    id: "intro",
    title: "Interactive Distribution Explorers",
    content: `Explore probability distributions through interactive visualizations and calculators. Each explorer provides probability calculations, visual representations, and detailed explanations to help you understand how different distributions work.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Probability Distribution Explorers | Interactive Calculators | Learn Math Class",
        description: "Explore discrete and continuous probability distributions with interactive calculators and visualizations. Calculate probabilities, understand parameters, and visualize distributions including binomial, normal, Poisson, and exponential.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/distributions",
        name: "Probability Distribution Explorers"
      },
    }
  }
}

export default function DistributionExplorersPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const discreteDistributions = [
    {
      title: 'Binomial Distribution',
      description: 'Models the number of successes in a fixed number of independent trials',
      href: '/probability/visual-tools/distributions/binomial'
    },
    {
      title: 'Geometric Distribution',
      description: 'Models the number of trials until the first success',
      href: '/probability/visual-tools/distributions/geometric'
    },
    {
      title: 'Negative Binomial Distribution',
      description: 'Models the number of trials until a specified number of successes',
      href: '/probability/visual-tools/distributions/negative-binomial'
    },
    {
      title: 'Poisson Distribution',
      description: 'Models the number of events occurring in a fixed interval',
      href: '/probability/visual-tools/distributions/poisson'
    },
    {
      title: 'Hypergeometric Distribution',
      description: 'Models sampling without replacement from a finite population',
      href: '/probability/visual-tools/distributions/hypergeometric'
    },
    {
      title: 'Uniform Discrete Distribution',
      description: 'Models equally likely outcomes over a discrete range',
      href: '/probability/visual-tools/distributions/uniform-discrete'
    }
  ]

  const continuousDistributions = [
    {
      title: 'Normal Distribution',
      description: 'The bell curve - models many natural phenomena',
      href: '/probability/visual-tools/distributions/normal'
    },
    {
      title: 'Exponential Distribution',
      description: 'Models time between events in a Poisson process',
      href: '/probability/visual-tools/distributions/exponential'
    },
    {
      title: 'Uniform Continuous Distribution',
      description: 'Models equally likely outcomes over a continuous range',
      href: '/probability/visual-tools/distributions/uniform-continuous'
    }
  ]

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.collectionPage)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.itemList)
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
      <h1 className='title' style={{marginTop:'-50px', marginBottom:'5px'}}>
        Probability Distribution Explorers
      </h1>
      
      <div style={{
        maxWidth: '900px',
        margin: '0 auto 30px auto',
        padding: '10px 24px',
        background: '#245fe3',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(36, 95, 227, 0.2)',
        color: 'white',
        textAlign: 'center',
        marginBottom:'-50px',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '8px',
          margin: '0 0 8px 0'
        }}>
          Explore Probability Distributions
        </h2>
        <p style={{
          fontSize: '14px',
          lineHeight: '1.4',
          margin: 0,
          opacity: 0.95
        }}>
          Interactive tools with dynamic visualizations, parameter controls, and probability calculators for discrete and continuous distributions.
        </p>
      </div>
      <br/>

      <br/>
      <br/>

      {/* Discrete Distributions Section */}
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a365d',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Discrete Distributions
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {discreteDistributions.map((dist, index) => (
            <Link 
              key={index}
              href={dist.href}
              style={{
                display: 'block',
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#3182ce';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(49,130,206,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '12px'
              }}>
                {dist.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: '1.6',
                margin: 0
              }}>
                {dist.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Continuous Distributions Section */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a365d',
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Continuous Distributions
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {continuousDistributions.map((dist, index) => (
            <Link 
              key={index}
              href={dist.href}
              style={{
                display: 'block',
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#3182ce';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(49,130,206,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '12px'
              }}>
                {dist.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#4a5568',
                lineHeight: '1.6',
                margin: 0
              }}>
                {dist.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
    </>
  )
}