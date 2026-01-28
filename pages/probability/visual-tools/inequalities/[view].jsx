// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import MarkovInequality from '@/app/components/probability/inequalities/MarkovInequality'
// import ChebyshevInequality from '@/app/components/probability/inequalities/ChebyshevInequality'


// export async function getStaticPaths() {
//   const paths = [
//     { params: { view: 'markov' } },
//     { params: { view: 'chebyshev' } },
//   ];

//   return { paths, fallback: false };
// }


// export async function getStaticProps({ params }){

//   const keyWords = [
//     "probability inequalities",
//     "Markov inequality",
//     "Chebyshev inequality",
//     "probability bounds",
//     "tail probability bounds",
//     "concentration inequalities",
//     "probability theory tools",
//     "statistical inequalities",
//     "distribution bounds",
//     "probability upper bounds",
//     "variance bounds",
//     "expected value inequalities",
//     "interactive probability inequalities",
//     "probability visualization"
//   ];


// const viewConfig = {
//     'markov': {
//       component: 'MarkovInequality',
//       title: "Markov Inequality - Interactive Visualization | Learn Math Class",
//       description: "Interactive Markov inequality visualizer. Explore tail probability bounds using expected values across multiple probability distributions with real-time calculations.",
//       name: "Markov Inequality",
//       url: "/probability/visual-tools/inequalities/markov",
//       h1: "Markov Inequality Visualization",
//       introTitle: "Understanding Markov Inequality",
//       introContent: "Markov's inequality provides an upper bound on the probability that a non-negative random variable exceeds a certain threshold, using only the expected value. For any non-negative random variable X and positive threshold a: P(X ≥ a) ≤ E[X] / a.",
//       sectionsContent: {
//         obj1: {
//           title: "How Markov Inequality Works",
//           content: "Markov inequality states that for non-negative X, the probability of X exceeding threshold a cannot be more than the expected value divided by a. This bound becomes tighter as a increases relative to E[X].",
//           link: '#how-it-works'
//         },
//         obj2: {
//           title: "Key Conditions and Limitations",
//           content: "The inequality requires X to be non-negative and only provides useful information when a > E[X]. When a ≤ E[X], the bound exceeds 1 and tells us nothing. The bound can be quite loose for many distributions.",
//           link: '#conditions'
//         },
//         obj3: {
//           title: "Applications",
//           content: "Markov inequality is used in algorithm analysis for average-case complexity, queueing theory for service times, and as a building block for more sophisticated concentration inequalities in probability theory.",
//           link: '#applications'
//         }
//       }
//     },
//     'chebyshev': {
//       component: 'ChebyshevInequality',
//       title: "Chebyshev Inequality - Interactive Visualization | Learn Math Class",
//       description: "Interactive Chebyshev inequality visualizer. Explore probability bounds for deviations from the mean using variance across multiple distributions.",
//       name: "Chebyshev Inequality",
//       url: "/probability/visual-tools/inequalities/chebyshev",
//       h1: "Chebyshev Inequality Visualization",
//       introTitle: "Understanding Chebyshev Inequality",
//       introContent: "Chebyshev's inequality bounds the probability that a random variable deviates from its mean by more than a given amount, using only the mean and variance. For any random variable X with mean μ and variance σ²: P(|X - μ| ≥ a) ≤ σ² / a².",
//       sectionsContent: {
//         obj1: {
//           title: "How Chebyshev Inequality Works",
//           content: "Chebyshev inequality bounds the probability of deviating from the mean by measuring how far we are in units of variance. It applies to any distribution with finite variance, making it extremely general but sometimes conservative.",
//           link: '#how-it-works'
//         },
//         obj2: {
//           title: "Relationship to Standard Deviation",
//           content: "Often expressed as P(|X - μ| ≥ kσ) ≤ 1/k², meaning the probability of being k standard deviations away from the mean is at most 1/k². For example, at least 75% of values lie within 2 standard deviations.",
//           link: '#standard-deviation'
//         },
//         obj3: {
//           title: "Applications",
//           content: "Chebyshev inequality is used in quality control, confidence interval construction, proving the weak law of large numbers, and whenever we need distribution-free probability bounds with only mean and variance information.",
//           link: '#applications'
//         }
//       }
//     }
//   };

// const currentConfig = viewConfig[params.view];

//     const sectionsContent = currentConfig.sectionsContent;


//   const introContent = {
//   id: "intro",
//   title: currentConfig.introTitle,
//   content: currentConfig.introContent
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: currentConfig.title,
//         description: currentConfig.description,
//         keywords: keyWords.join(", "),
//         url: currentConfig.url,
//          name: currentConfig.name
//       },
//       currentView: params.view,
//       componentName: currentConfig.component,
//       h1Title: currentConfig.h1
        
//        }
//     }
//    }

// export default function InequalityPage({seoData, sectionsContent, introContent, currentView, componentName, h1Title}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title: sectionsContent.obj1.title,
//         link: sectionsContent.obj1.link,
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'2',
//         title: sectionsContent.obj2.title,
//         link: sectionsContent.obj2.link,
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'3',
//         title: sectionsContent.obj3.title,
//         link: sectionsContent.obj3.link,
//         content: sectionsContent.obj3.content
//     }
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    <GenericNavbar/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>{h1Title}</h1>
//    <br/>
//    <br/>
   
//    {componentName === 'MarkovInequality' && <MarkovInequality/>}
//    {componentName === 'ChebyshevInequality' && <ChebyshevInequality/>}
   
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    <ScrollUpButton/>
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import MarkovInequality from '@/app/components/probability/inequalities/MarkovInequality'
import ChebyshevInequality from '@/app/components/probability/inequalities/ChebyshevInequality'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'markov' } },
    { params: { view: 'chebyshev' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

  const viewConfig = {
    'markov': {
      component: 'MarkovInequality',
      title: "Markov Inequality Visualizer - Interactive Probability Bounds | Learn Math Class",
      description: "Interactive Markov inequality tool showing P(X ≥ a) ≤ E[X]/a across 9 distributions. Compare bounds to actual tail probabilities in real time.",
      name: "Markov Inequality Visualizer",
      url: "/probability/visual-tools/inequalities/markov",
      h1: "Markov Inequality Visualization",
      introTitle: "Visualizing Markov's Inequality",
      introContent: "Markov's inequality states that for any non-negative random variable X and positive threshold a: P(X ≥ a) ≤ E[X] / a. This tool visualizes the bound across nine distributions, showing both the Markov bound and the actual tail probability. Adjust E[X] and threshold to see when bounds are tight versus loose.",
      keywords: [
        "Markov inequality",
        "Markov inequality visualizer",
        "probability bounds",
        "tail probability bound",
        "P(X ≥ a) bound",
        "expected value inequality",
        "Markov bound calculator",
        "probability upper bound",
        "non-negative random variable",
        "Markov inequality proof",
        "tail bound visualization",
        "probability inequality tool",
        "Markov vs actual probability",
        "distribution-free bound",
        "concentration inequality"
      ],
      faqQuestions: {
        obj1: {
          question: "What is Markov's inequality?",
          answer: "Markov's inequality states that for any non-negative random variable X and positive a: P(X ≥ a) ≤ E[X] / a. It provides an upper bound on tail probability using only the expected value, without knowing the full distribution."
        },
        obj2: {
          question: "When is Markov's inequality useful?",
          answer: "Markov's inequality is useful when you only know E[X] and need a guaranteed upper bound on P(X ≥ a). It's most informative when a is significantly larger than E[X], making the bound less than 1."
        },
        obj3: {
          question: "Why does the tool show a warning when a ≤ E[X]?",
          answer: "When a ≤ E[X], the Markov bound E[X]/a becomes ≥ 1. Since probabilities can't exceed 1, a bound greater than 100% tells us nothing. The inequality only provides useful information when a > E[X]."
        },
        obj4: {
          question: "Why is the Markov bound often much larger than actual probability?",
          answer: "Markov's inequality must hold for ANY non-negative distribution with that expected value. The worst-case distribution determines the bound. Well-behaved distributions like Normal or Exponential have actual tail probabilities much smaller than the bound."
        },
        obj5: {
          question: "What distributions can I explore?",
          answer: "The tool supports 9 distributions: Normal, Exponential, Uniform (continuous), and Poisson, Binomial, Geometric, Negative Binomial, Hypergeometric, Discrete Uniform (discrete). This lets you compare how tight the bound is across different distribution shapes."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste markov sectionsContent here
      // }

      // sectionsContent for 'markov' view
// Paste this into viewConfig['markov'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with the Markov Visualizer`,
    content: `This tool demonstrates [Markov's inequality](!/probability/inequalities/markov), which bounds tail probabilities using only the [expected value](!/probability/expected-value). The visualization shows a probability distribution with the tail region P(X ≥ a) highlighted in red.

The left panel displays the PDF (for continuous) or PMF (for discrete distributions). A green dashed line marks E[X], and a red dashed line marks the threshold a. The red shaded area (or red bars) represents the actual tail probability.

The top panel shows the Markov bound formula and compares it to the actual probability. Adjust E[X] and threshold to explore when the bound is tight versus loose across different distributions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Understanding the Markov Bound`,
    content: `Markov's inequality states:

$$P(X \\geq a) \\leq \\frac{E[X]}{a}$$

This bound requires only two conditions:
• X must be non-negative (X ≥ 0 always)
• a must be positive (a > 0)

The bound decreases as a increases relative to E[X]. When a = 2·E[X], the bound is 0.5 (50%). When a = 10·E[X], the bound is 0.1 (10%).

The visualization shows both the Markov bound (theoretical maximum) and the actual tail probability. For most distributions, the actual probability is much smaller than the bound, demonstrating that Markov's inequality is often conservative.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Using the Distribution Selector`,
    content: `Nine distributions are available, grouped into continuous and discrete:

**Continuous Distributions:**
• Normal (positive range displayed)
• Exponential
• Uniform

**Discrete Distributions:**
• Poisson
• Binomial
• Geometric
• Negative Binomial
• Hypergeometric
• Discrete Uniform

Each distribution shows different tail behavior. Exponential has a long right tail, making Markov relatively tight. Normal concentrates around the mean, making the bound very loose. Discrete distributions display as vertical bars with dots at PMF values.

Try switching distributions while keeping E[X] and threshold fixed to see how the same Markov bound applies differently to different shapes.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Adjusting E[X] and Threshold`,
    content: `Two sliders control the key parameters:

**E[X] Slider** (green): Sets the expected value from 1 to 30. This changes the distribution's location and scale. Higher E[X] generally spreads the distribution rightward.

**Threshold (a) Slider** (red): Sets the threshold from 1 to 40. This determines where tail probability is measured. The red dashed line and shaded region update accordingly.

Key experiments to try:

• Set a = E[X]: The bound becomes 1 (100%), which tells us nothing
• Set a = 2·E[X]: The bound becomes 0.5 (50%)
• Set a >> E[X]: The bound becomes small, and actual probability becomes tiny
• Compare Exponential vs Normal at the same settings`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `When Markov Becomes Useless`,
    content: `The visualization displays a warning when a ≤ E[X]. In this case:

$$\\frac{E[X]}{a} \\geq 1$$

A probability bound of 100% or more is trivially true and provides no information. Every probability is ≤ 1, so saying P(X ≥ a) ≤ 1.5 tells us nothing.

The warning box turns red and explains that the bound is useless. To get meaningful information, increase a above E[X].

This limitation is fundamental to Markov's inequality. The bound only constrains tail probabilities in the region beyond the expected value. For probabilities closer to the center, you need stronger inequalities like [Chebyshev](!/probability/inequalities/chebyshev).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Comparing Bound to Actual Probability`,
    content: `The information panel shows two values:

• **Bound**: The Markov upper bound E[X]/a
• **Actual**: The true tail probability P(X ≥ a)

The ratio Bound/Actual indicates how loose the inequality is. Typical observations:

**Exponential distribution**: Bound is relatively tight (ratio 2-5x)
**Normal distribution**: Bound is very loose (ratio 10-100x or more)
**Uniform distribution**: Bound can be exact at certain thresholds

The gap exists because Markov must hold for ANY non-negative distribution with that E[X]. The worst-case distribution (which achieves the bound) places all probability mass at exactly 0 and a, creating maximum tail probability.

Real distributions spread probability more evenly, giving smaller tails than the worst case.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Why Markov's Inequality Matters`,
    content: `Despite being loose, Markov's inequality is valuable because:

**Minimal requirements**: Only needs X ≥ 0 and E[X] known. No variance, no distribution shape.

**Universal applicability**: Works for any non-negative random variable, continuous or discrete.

**Theoretical foundation**: Building block for stronger inequalities. [Chebyshev's inequality](!/probability/inequalities/chebyshev) is derived from Markov applied to (X - μ)².

**Quick bounds**: When you only know the average, Markov gives an instant upper bound.

Applications include algorithm analysis (bounding worst-case by average-case), queueing theory (service time bounds), and proving convergence in probability (weak law of large numbers).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `Markov's inequality connects to other probability concepts and tools:

**Theory Pages:**

• [Markov Inequality](!/probability/inequalities/markov) covers complete theory and proofs

• [Chebyshev Inequality](!/probability/inequalities/chebyshev) provides tighter bounds using variance

• [Expected Value](!/probability/expected-value) is the key input for Markov

• [Variance](!/probability/variance) enables stronger bounds

**Other Visualizations:**

• [Chebyshev Visualizer](!/probability/visual-tools/inequalities/chebyshev) shows two-tailed deviation bounds

• [Expected Value Visualizer](!/probability/visual-tools/expected-value) demonstrates E[X] concepts

• [Distribution Visualizers](!/probability/visual-tools/distributions) display full PDFs and CDFs

**Related Topics:**

• [Probability Distributions](!/probability/distributions) covers the distributions used here

• [Central Limit Theorem](!/probability/central-limit-theorem) uses concentration concepts`,
    before: ``,
    after: ``,
    link: '',
  },
}
    },

    'chebyshev': {
      component: 'ChebyshevInequality',
      title: "Chebyshev Inequality Visualizer - Interactive Deviation Bounds | Learn Math Class",
      description: "Interactive Chebyshev inequality tool showing P(|X-μ| ≥ a) ≤ σ²/a² across 9 distributions. Visualize two-tailed bounds with mean and variance controls.",
      name: "Chebyshev Inequality Visualizer",
      url: "/probability/visual-tools/inequalities/chebyshev",
      h1: "Chebyshev Inequality Visualization",
      introTitle: "Visualizing Chebyshev's Inequality",
      introContent: "Chebyshev's inequality bounds the probability of deviating from the mean: P(|X - μ| ≥ a) ≤ σ² / a². This tool visualizes the two-tailed bound across nine distributions, showing both the Chebyshev bound and actual probability. Adjust mean, variance, and deviation threshold to explore how bounds behave.",
      keywords: [
        "Chebyshev inequality",
        "Chebyshev inequality visualizer",
        "deviation from mean bound",
        "variance inequality",
        "P(|X-μ| ≥ a) bound",
        "Chebyshev bound calculator",
        "two-tailed probability bound",
        "standard deviation inequality",
        "k standard deviations",
        "Chebyshev inequality proof",
        "concentration around mean",
        "variance-based bound",
        "Chebyshev vs actual probability",
        "distribution-free concentration",
        "probability inequality tool"
      ],
      faqQuestions: {
        obj1: {
          question: "What is Chebyshev's inequality?",
          answer: "Chebyshev's inequality states that for any random variable with mean μ and variance σ²: P(|X - μ| ≥ a) ≤ σ² / a². It bounds the probability of being far from the mean using only mean and variance."
        },
        obj2: {
          question: "How does Chebyshev relate to standard deviations?",
          answer: "Setting a = kσ gives P(|X - μ| ≥ kσ) ≤ 1/k². This means at least 75% of values are within 2σ of the mean (k=2 gives 1/4), and at least 89% within 3σ (k=3 gives 1/9)."
        },
        obj3: {
          question: "Why does Chebyshev show two shaded regions?",
          answer: "Chebyshev bounds deviations in BOTH directions from the mean: P(X < μ-a) + P(X > μ+a). The red shading shows both tails, representing values more than 'a' away from μ in either direction."
        },
        obj4: {
          question: "Is Chebyshev tighter than Markov?",
          answer: "Generally yes, because Chebyshev uses more information (both mean and variance). Markov only requires E[X]. The extra variance information allows Chebyshev to produce tighter bounds, especially for distributions with small variance."
        },
        obj5: {
          question: "Why is the actual probability often much smaller than Chebyshev's bound?",
          answer: "Chebyshev must work for ANY distribution with given mean and variance. The bound equals the worst case. Well-behaved distributions like Normal concentrate much more tightly around the mean than Chebyshev guarantees."
        }
      },
      // sectionsContent: {
      //   // PLACEHOLDER - paste chebyshev sectionsContent here
      // }

// sectionsContent for 'chebyshev' view
// Paste this into viewConfig['chebyshev'].sectionsContent

sectionsContent: {
  obj1: {
    title: `Getting Started with the Chebyshev Visualizer`,
    content: `This tool demonstrates [Chebyshev's inequality](!/probability/inequalities/chebyshev), which bounds the probability of deviating from the mean using [variance](!/probability/variance). The visualization shows a probability distribution with both tails highlighted in red.

The left panel displays the PDF (for continuous) or PMF (for discrete distributions). A green dashed line marks the mean μ, and red dashed lines mark μ-a and μ+a. The red shaded regions represent the actual probability of being more than a away from the mean.

The top panel shows the Chebyshev bound formula and compares it to the actual two-tailed probability. Adjust mean, variance, and deviation threshold to explore when the bound is tight versus loose.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Understanding the Chebyshev Bound`,
    content: `Chebyshev's inequality states:

$$P(|X - \\mu| \\geq a) \\leq \\frac{\\sigma^2}{a^2}$$

This bounds the probability of being at least a units away from the mean μ, in either direction. The bound uses two parameters:

• μ = E[X], the [expected value](!/probability/expected-value)
• σ² = Var(X), the [variance](!/probability/variance)

The bound decreases quadratically as a increases. Doubling the threshold reduces the bound by a factor of 4. This quadratic relationship makes Chebyshev tighter than [Markov](!/probability/inequalities/markov) for large deviations.

The visualization shows both tails simultaneously, representing P(X < μ-a) + P(X > μ+a).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `The k Standard Deviations Form`,
    content: `Chebyshev is often expressed in terms of standard deviations. Setting a = kσ gives:

$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$

This yields memorable bounds:

• k = 2: At least 75% of values within 2σ of mean (bound = 1/4 = 25% outside)
• k = 3: At least 89% within 3σ (bound = 1/9 ≈ 11% outside)
• k = 4: At least 94% within 4σ (bound = 1/16 ≈ 6% outside)
• k = 5: At least 96% within 5σ (bound = 1/25 = 4% outside)

These percentages are worst-case guarantees. Actual distributions like Normal concentrate much more tightly—99.7% of Normal values fall within 3σ, far better than Chebyshev's 89% guarantee.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Using the Control Sliders`,
    content: `Three sliders control the distribution and bound:

**Mean (μ) Slider** (green): Sets the expected value from 5 to 20. The distribution centers on this value, and the green dashed line moves accordingly.

**Variance (σ²) Slider** (purple): Sets the variance from 1 to 16. Higher variance spreads the distribution wider, affecting both the shape and the Chebyshev bound.

**Deviation Threshold (a) Slider** (red): Sets the distance from mean from 0.5 to 10. The red dashed lines at μ-a and μ+a move, changing the shaded tail regions.

Key experiments:

• Fix μ and a, then increase σ²: The bound increases (loosens)
• Fix μ and σ², then increase a: The bound decreases quadratically
• Compare Normal vs Exponential at identical settings`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Two-Tailed vs One-Tailed Bounds`,
    content: `Chebyshev bounds two-tailed probability: deviations in BOTH directions from the mean. The visualization shows this with red shading on both the left tail (X < μ-a) and right tail (X > μ+a).

For symmetric distributions like Normal, these tails are equal. For asymmetric distributions like Exponential, one tail dominates.

If you need a one-tailed bound, Chebyshev gives:

$$P(X \\geq \\mu + a) \\leq \\frac{\\sigma^2}{a^2}$$

But this is looser than necessary because the two-tailed bound includes both sides. For strictly one-tailed bounds, Markov's inequality applied to appropriate transformations may be tighter.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Comparing Bound to Actual Probability`,
    content: `The information panel displays:

• **Bound**: Chebyshev's upper bound σ²/a²
• **Actual**: True probability P(|X - μ| ≥ a)

Typical observations across distributions:

**Normal distribution**: Chebyshev is very conservative. At 2σ, bound is 25% but actual is about 4.5%. At 3σ, bound is 11% but actual is about 0.3%.

**Uniform distribution**: Chebyshev can be exact at the distribution boundaries. The uniform distribution is one of the "worst cases" for Chebyshev.

**Exponential distribution**: Asymmetric, so left tail contributes differently than right tail. Bound is moderately loose.

The gap demonstrates that Chebyshev guarantees apply to all distributions, including pathological ones that concentrate probability at exactly ±a from the mean.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Why Chebyshev's Inequality Matters`,
    content: `Chebyshev's inequality is fundamental because:

**Distribution-free**: Works for ANY distribution with finite mean and variance. No shape assumptions required.

**Tighter than Markov**: Uses variance information for quadratic improvement. The 1/k² decay is much faster than Markov's 1/k.

**Theoretical cornerstone**: Used to prove the weak law of large numbers, convergence of sample means, and consistency of estimators.

**Practical applications**:
• Quality control: Setting tolerance limits based on process variance
• Finance: Bounding portfolio deviations from expected return
• Statistics: Constructing distribution-free confidence intervals

The tradeoff is conservatism. When you know more about your distribution (e.g., it's Normal), distribution-specific bounds are much tighter.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `Chebyshev's inequality connects to other probability concepts and tools:

**Theory Pages:**

• [Chebyshev Inequality](!/probability/inequalities/chebyshev) covers complete theory and proofs

• [Markov Inequality](!/probability/inequalities/markov) is the weaker precursor

• [Variance](!/probability/variance) is a key input for Chebyshev

• [Expected Value](!/probability/expected-value) provides the center point

**Other Visualizations:**

• [Markov Visualizer](!/probability/visual-tools/inequalities/markov) shows one-tailed bounds

• [Variance Visualizer](!/probability/visual-tools/variance) demonstrates spread concepts

• [Distribution Visualizers](!/probability/visual-tools/distributions) display full PDFs and CDFs

**Related Topics:**

• [Probability Distributions](!/probability/distributions) covers the distributions used here

• [Central Limit Theorem](!/probability/central-limit-theorem) relies on concentration arguments`,
    before: ``,
    after: ``,
    link: '',
  },
}
      
    }
  };

  const currentConfig = viewConfig[params.view];

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": getFeatureList(params.view),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": currentConfig.keywords.join(", ")
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
          "name": "Inequalities",
          "item": "https://www.learnmathclass.com/probability/visual-tools/inequalities"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(currentConfig.faqQuestions).map(key => ({
        "@type": "Question",
        "name": currentConfig.faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": currentConfig.faqQuestions[key].answer
        }
      }))
    }
  };

  const introContent = {
    id: "intro",
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  };

  return {
    props: {
      sectionsContent: currentConfig.sectionsContent,
      introContent,
      faqQuestions: currentConfig.faqQuestions,
      schemas,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
    }
  };
}

function getFeatureList(view) {
  const features = {
    'markov': [
      "Nine probability distributions (continuous and discrete)",
      "Adjustable expected value E[X] slider",
      "Adjustable threshold (a) slider",
      "Real-time Markov bound calculation",
      "Actual tail probability comparison",
      "Visual PDF/PMF with shaded tail region",
      "Warning when bound becomes useless (a ≤ E[X])",
      "Distribution type selector with grouped options"
    ],
    'chebyshev': [
      "Nine probability distributions (continuous and discrete)",
      "Adjustable mean (μ) slider",
      "Adjustable variance (σ²) slider",
      "Adjustable deviation threshold (a) slider",
      "Two-tailed probability visualization",
      "Real-time Chebyshev bound calculation",
      "Actual deviation probability comparison",
      "Visual PDF/PMF with both tail regions shaded"
    ]
  };
  return features[view] || [];
}

export default function InequalityViewPage({ 
  seoData, 
  sectionsContent, 
  introContent, 
  faqQuestions,
  schemas,
  currentView, 
  componentName, 
  h1Title 
}) {

  const genericSections = Object.keys(sectionsContent).length > 0 
    ? [
        {
          id: '1',
          title: sectionsContent.obj1?.title || '',
          link: '',
          content: sectionsContent.obj1?.content || ''
        },
        {
          id: '2',
          title: sectionsContent.obj2?.title || '',
          link: '',
          content: sectionsContent.obj2?.content || ''
        },
        {
          id: '3',
          title: sectionsContent.obj3?.title || '',
          link: '',
          content: sectionsContent.obj3?.content || ''
        },
        {
          id: '4',
          title: sectionsContent.obj4?.title || '',
          link: '',
          content: sectionsContent.obj4?.content || ''
        },
        {
          id: '5',
          title: sectionsContent.obj5?.title || '',
          link: '',
          content: sectionsContent.obj5?.content || ''
        },
        {
          id: '6',
          title: sectionsContent.obj6?.title || '',
          link: '',
          content: sectionsContent.obj6?.content || ''
        },
        {
          id: '7',
          title: sectionsContent.obj7?.title || '',
          link: '',
          content: sectionsContent.obj7?.content || ''
        },
        {
          id: '8',
          title: sectionsContent.obj8?.title || '',
          link: '',
          content: sectionsContent.obj8?.content || ''
        }
      ].filter(section => section.title)
    : [];

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
      {/* <GenericNavbar/> */}
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '-20px' }}>{h1Title}</h1>
      <br />
      <br />

      {componentName === 'MarkovInequality' && (
        <MarkovInequality />
      )}

      {componentName === 'ChebyshevInequality' && (
        <ChebyshevInequality />
      )}

      <br />
      <br />
      <br />
      {genericSections.length > 0 && (
        <>
          <SectionTableOfContents sections={genericSections} />
          <br />
          <br />
          <br />
          <IntroSection
            id={introContent.id}
            title={introContent.title}
            content={introContent.content}
            backgroundColor='#f9fafb'
            textColor="#06357a"
          />
          <br />
          <br />
          <Sections sections={genericSections} />
        </>
      )}
      <br />
      <br />
      <br />
      {/* <ScrollUpButton /> */}
    </>
  );
}