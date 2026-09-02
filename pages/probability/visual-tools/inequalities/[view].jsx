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
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import MarkovInequality from '@/app/components/probability/inequalities/MarkovInequality'
import ChebyshevInequality from '@/app/components/probability/inequalities/ChebyshevInequality'
import markovDiagrams from '@/app/components/probability/inequalities/markovDiagrams'
import chebyshevDiagrams from '@/app/components/probability/inequalities/chebyshevDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


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
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M 12 62 C 22 62, 24 22, 34 22 C 46 22, 54 56, 72 60 L 72 62 L 12 62 Z" fill="#B5D4F4" fill-opacity="0.25"/><path d="M 50 47.3 C 58 54, 64 58.5, 72 60 L 72 62 L 50 62 Z" fill="#ED93B1" fill-opacity="0.7"/><path d="M 12 62 C 22 62, 24 22, 34 22 C 46 22, 54 56, 72 60" fill="none" stroke="#85B7EB" stroke-width="1.9"/><line x1="50" y1="14" x2="50" y2="62" stroke="#ED93B1" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="8" y1="62" x2="76" y2="62" stroke="#B5D4F4" stroke-width="1.1"/><text x="50" y="72" font-family="Georgia,serif" font-size="8" fill="#ED93B1" text-anchor="middle" font-style="italic">a</text><text x="63" y="24" font-family="Georgia,serif" font-size="6.5" fill="#F4C0D1" text-anchor="middle" font-style="italic">P(X&#8805;a)</text></svg>`,
      category: "Inequalities",
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

  obj9: {
    title: `Normal: the Bound Against a Bell Curve`,
    content: `At the tool's opening settings — $E[X] = 10$, $a = 15$ — the Markov bound is $10/15 = 0.667$, so $66.7\\%$. The normal option builds a curve with $\\mu = 10$ and $\\sigma = \\mu/2 = 5$, and the shaded tail beyond $a$ is $15.9\\%$.

The bound is about four times the truth here.`,
    before: ``,
    after: `The gap is the price of assuming nothing. Markov is handed one number, $E[X] = 10$, and must produce a bound valid for *every* non-negative variable with that mean — including the worst case, which puts all its mass at $0$ and at $a$ and hits $10/15$ exactly. A bell curve is nothing like that worst case, so its real tail is far smaller.

Worth flagging about this option specifically: the tool labels it "Normal (non-negative range only)". A genuine normal variable can be negative, and Markov requires $X \\geq 0$, so what is drawn is the normal curve restricted to $x \\geq 0$. With $\\mu = 10$ and $\\sigma = 5$ the omitted region carries about $2.3\\%$ of the mass — small, but the reason for the label.`,
    link: '',
  },

  obj10: {
    title: `Exponential: Where Markov Is Tightest Among the Continuous Options`,
    content: `The exponential is the tool's opening choice. With $E[X] = 10$ it uses $\\lambda = 1/10$, so the tail is $P(X \\geq 15) = e^{-1.5} = 22.3\\%$ against the same $66.7\\%$ bound.

A ratio of about $3\\times$ — the closest any of the three continuous options gets.`,
    before: ``,
    after: `The exponential does comparatively well because it is genuinely heavy-tailed relative to a bell curve: it puts real mass far from the mean, which is the direction Markov's worst case points.

It also gives the cleanest way to see how the bound behaves as $a$ moves. The bound $10/a$ decays like $1/a$, while the true tail $e^{-a/10}$ decays exponentially. So the further out you look the worse the ratio gets, even though the bound itself keeps shrinking. Markov's guarantee weakens much more slowly than the reality it is bounding.`,
    link: '',
  },

  obj11: {
    title: `Uniform: the Largest Tail of the Nine`,
    content: `The uniform option spreads mass evenly over $[0, 2E[X]] = [0, 20]$, giving a flat density of $0.05$. The tail beyond $a = 15$ is the rectangle from 15 to 20, so $P(X \\geq 15) = 5/20 = 25.0\\%$.

That is the largest actual tail among all nine distributions at these settings.`,
    before: ``,
    after: `Even the largest of the nine is well under the $66.7\\%$ bound, which is the honest summary of Markov: it is almost never close.

This state is the easiest to check by hand, and that makes it the best one to start from. The density is constant, so the tail is a rectangle and the arithmetic is $5 \\times 0.05$. Every other option on the list requires either an integral or a sum.`,
    link: '',
  },

  obj12: {
    title: `Poisson: a Discrete Tail Read as Stems`,
    content: `Choosing Poisson switches the chart from a filled curve to stems with round heads, one per integer, and the tool sums the stems at $x \\geq 15$ rather than integrating. With $\\lambda = E[X] = 10$ that sum is $8.3\\%$.

The red stems are the ones being added up.`,
    before: ``,
    after: `The bound is now about eight times the truth. Poisson mass concentrates within a few standard deviations of $\\lambda$ — here $\\sigma = \\sqrt{10} \\approx 3.2$, so $a = 15$ sits about $1.6\\sigma$ out — and Markov has no way to know that, because it never sees a variance.

This is the first state where the switch from continuous to discrete matters for how the number is produced. For the three continuous options the tool evaluates a closed form; for the six discrete ones it adds up the plotted stems.`,
    link: '',
  },

  obj13: {
    title: `Binomial: the Bound at Its Loosest but One`,
    content: `The binomial option fixes $p = 0.4$ and derives $n = \\text{round}(E[X]/p) = 25$, so the mean is $25 \\times 0.4 = 10$ as required. The tail at $x \\geq 15$ is $3.4\\%$.

Against the $66.7\\%$ bound that is a ratio of roughly $20\\times$.`,
    before: ``,
    after: `A binomial is a sum of 25 independent trials, and sums concentrate. Its standard deviation is $\\sqrt{np(1-p)} = \\sqrt{6} \\approx 2.45$, so the threshold sits over two standard deviations above the mean and very little mass survives out there.

The pattern across the nine is now visible: the more concentrated a distribution is, the more Markov overstates its tail. That is not a flaw in the inequality but a statement of what it was given — one number, and no way to distinguish a spread-out variable from a concentrated one.`,
    link: '',
  },

  obj14: {
    title: `Geometric: Heavy Tail, Truncated Window`,
    content: `With $p = 1/E[X] = 0.1$ the geometric puts $21.4\\%$ of its mass at $x \\geq 15$ — second only to the uniform among the nine.

The stems visibly decay by a constant factor of $0.9$ from one integer to the next.`,
    before: ``,
    after: `There is a detail here worth knowing before trusting the printed number. The geometric support is unbounded, but the tool plots and sums only $x = 1$ to $40$, which carries about $98.5\\%$ of the mass. The remaining $1.5\\%$ lies past the right edge and is *not* counted, so the reported "Actual" is a slight undercount rather than the exact tail.

That never threatens the inequality — undercounting can only make the actual smaller than the bound — but it does mean this figure is the sum over the drawn stems, not a closed form. The same applies to the negative binomial. For the exponential, normal and uniform the tool uses exact formulas instead, so no truncation is involved.`,
    link: '',
  },

  obj15: {
    title: `Negative Binomial: Five Successes at a Time`,
    content: `The negative binomial option fixes $r = 5$ and solves $p = r/(E[X] + r) = 5/15 = 1/3$ so the mean lands on 10. The tail beyond $a = 15$ is $18.8\\%$.

Its shape sits between the geometric's steady decay and the binomial's tight hump.`,
    before: ``,
    after: `That intermediate position is exactly what the parameter $r$ controls. At $r = 1$ the negative binomial *is* the geometric; as $r$ grows the distribution becomes more symmetric and more concentrated, and the actual tail shrinks toward the binomial's. Fixing $r = 5$ puts this option in the middle of that range, and its $18.8\\%$ sits between the geometric's $21.4\\%$ and the binomial's $3.4\\%$.

Like the geometric, its support is unbounded and the plotted window is finite, though here the omitted mass is under $0.01\\%$.`,
    link: '',
  },

  obj16: {
    title: `Hypergeometric: Where the Bound Is Almost Meaningless`,
    content: `The hypergeometric fixes a population of $N = 50$ with $K = 30$ successes and draws $n = \\text{round}(E[X] \\cdot N/K) = 17$. The tail at $x \\geq 15$ is $0.3\\%$.

The bound is still $66.7\\%$ — over two hundred times the truth, by far the widest gap of the nine.`,
    before: ``,
    after: `Two things drive it. Sampling without replacement is self-correcting — drawing a success makes the next success less likely — so the hypergeometric is more concentrated than the binomial with the same mean. And the support is hard-capped at $n = 17$ draws, so there are only three integers between the threshold and the largest possible outcome.

Markov cannot use either fact. It does not know the variable is bounded above, and it does not know the variance. Given only $E[X] = 10$ it must still allow for a variable that puts mass at $0$ and $15$, which is what produces $2/3$.

Note also that the rounding makes the mean $17 \\times 0.6 = 10.2$ rather than exactly 10, so the bound the tool prints is very slightly optimistic — a rounding artefact of deriving an integer number of draws.`,
    link: '',
  },

  obj17: {
    title: `Discrete Uniform: the Discrete Twin of the Flat Case`,
    content: `The discrete uniform puts equal probability on the integers $1$ through $n = 2E[X] - 1 = 19$, each $1/19$. The values at or above $a = 15$ are $15, 16, 17, 18, 19$ — five of them — so the tail is $5/19 = 26.3\\%$.

That is the largest actual tail of all nine states.`,
    before: ``,
    after: `It edges out the continuous uniform's $25\\%$ for a small reason worth seeing: the continuous version spreads mass over $[0, 20]$ and the discrete version over $\\{1, \\dots, 19\\}$, and the threshold $a = 15$ is *included* in the discrete tail because the inequality is $P(X \\geq a)$. Endpoint conventions matter for discrete variables in a way they never do for continuous ones, where a single point carries no probability.

Across all nine states the actual tail runs from $0.3\\%$ to $26.3\\%$ against one unchanging bound of $66.7\\%$. Even the worst case among real distributions uses barely two fifths of what Markov permits.`,
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
      svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><path d="M 10 62 C 22 62, 26 20, 40 20 C 54 20, 58 62, 70 62 Z" fill="#B5D4F4" fill-opacity="0.25"/><path d="M 10 62 C 16 62, 20 50, 24 41.5 L 24 62 Z" fill="#ED93B1" fill-opacity="0.7"/><path d="M 56 41.5 C 60 50, 64 62, 70 62 L 56 62 Z" fill="#ED93B1" fill-opacity="0.7"/><path d="M 10 62 C 22 62, 26 20, 40 20 C 54 20, 58 62, 70 62" fill="none" stroke="#85B7EB" stroke-width="1.9"/><line x1="24" y1="16" x2="24" y2="62" stroke="#ED93B1" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="56" y1="16" x2="56" y2="62" stroke="#ED93B1" stroke-width="1.3" stroke-dasharray="3,2"/><line x1="40" y1="20" x2="40" y2="62" stroke="#854F0B" stroke-width="1" stroke-dasharray="2,2"/><line x1="8" y1="62" x2="74" y2="62" stroke="#B5D4F4" stroke-width="1.1"/><text x="40" y="72" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">&#956; &#177; k&#963;</text></svg>`,
      category: "Inequalities",
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

  obj9: {
    title: `Normal: the Bound at Its Most Familiar`,
    content: `At the opening settings $\\mu = 10$, $\\sigma^2 = 4$ and $a = 3$, the normal curve is drawn with $\\sigma = 2$, so the threshold sits at $a = 1.5\\sigma$.

Chebyshev allows $\\frac{4}{9} = 44.4\\%$ outside $\\mu \\pm 3$. The actual two-tailed area is $13.4\\%$.`,
    before: ``,
    after: `The ratio is about three to one, and for the normal that is as good as Chebyshev ever looks. The reason is that Chebyshev is handed only a mean and a variance; it must hold for **every** distribution with those two numbers, including much heavier-tailed ones than a bell curve.

It is worth converting the threshold to standard deviations, because that is the form the bound really lives in. With $k = a/\\sigma$, Chebyshev reads $P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$, and here $k = 1.5$ gives $1/2.25 = 44.4\\%$ — the same number, arrived at without reference to the particular $\\sigma$.

The normal and the continuous uniform are the only two options on this page whose spread the variance slider actually sets. For the other seven, choosing the mean fixes the variance too.`,
    link: '',
  },

  obj10: {
    title: `Exponential: When the Bound Says Nothing`,
    content: `The exponential is built from the mean alone: $\\lambda = 1/\\mu = 0.1$, which forces $\\sigma^2 = \\mu^2 = 100$ and $\\sigma = 10$.

So $a = 3$ is only $0.3\\sigma$, and Chebyshev's bound is $\\frac{100}{9} = 11.1$ — capped at $100\\%$, and useless.`,
    before: ``,
    after: `A bound of "at most $100\\%$" is true and empty, exactly as Markov's is when $a \\leq E[X]$. It happens here whenever $k = a/\\sigma < 1$, because $1/k^2 > 1$. Chebyshev only says anything once the threshold is more than one standard deviation from the mean.

The actual figure is $77.6\\%$, which is genuinely large — an exponential really does put most of its mass more than $3$ away from its mean of $10$, because its standard deviation is as big as its mean. The tool is not failing here; the distribution is simply very spread out.

Note what the variance slider does on this option: nothing. Set it anywhere and $\\sigma^2$ stays at $100$, because an exponential has one parameter and the mean already used it.`,
    link: '',
  },

  obj11: {
    title: `Continuous Uniform: the Other Slider-Driven Case`,
    content: `The uniform is constructed as $[\\mu - \\sqrt{3\\sigma^2},\\ \\mu + \\sqrt{3\\sigma^2}]$, which is exactly the interval whose variance is the requested $\\sigma^2$. With $\\sigma^2 = 4$ that is $[6.54, 13.46]$.

Bound $44.4\\%$, actual $13.4\\%$ — numerically identical to the normal's.`,
    before: ``,
    after: `The coincidence is not deep: both distributions have the same $\\mu$ and $\\sigma$, and both are symmetric, so at $k = 1.5$ they happen to leave a similar fraction outside. Push $k$ higher and they part company sharply — the uniform has hard endpoints, so beyond $k = \\sqrt{3} \\approx 1.73$ its actual drops to exactly zero while the normal's never does.

That is the clearest demonstration of why Chebyshev must be loose. A bound that has to cover both a distribution with no tails at all and one with tails reaching to infinity cannot be tight for either.`,
    link: '',
  },

  obj12: {
    title: `Poisson: Variance Fixed by the Mean`,
    content: `A Poisson with $\\lambda = \\mu = 10$ has $\\sigma^2 = \\lambda = 10$ — its defining property — so $\\sigma = 3.16$ and the threshold $a = 3$ is $0.95\\sigma$.

Just under one standard deviation, so the bound is again vacuous, and the actual is $26.5\\%$.`,
    before: ``,
    after: `This is the cleanest example of a distribution whose variance is not a free choice. Mean and variance are the same single parameter, so asking for "a Poisson with mean $10$ and variance $4$" is asking for something that does not exist.

Nudging the mean up to $11$ would take $\\sigma$ to $3.32$ and push $k$ further below $1$; taking the mean down to $9$ raises $k$ toward $1$. To make the bound say anything at all you have to move the threshold, not the variance.`,
    link: '',
  },

  obj13: {
    title: `Binomial: the Bound Starts to Bite`,
    content: `With $p = 0.4$ fixed and $n = \\mu/p = 25$, the binomial has $\\sigma^2 = np(1-p) = 6$ and $\\sigma = 2.45$.

Now $a = 3$ is $1.22\\sigma$, so the bound is $\\frac{6}{9} = 66.7\\%$ — a real constraint at last — against an actual of $15.1\\%$.`,
    before: ``,
    after: `A binomial is a sum of $25$ independent trials, and sums concentrate. That is why its variance, $6$, is well below the Poisson's $10$ at the same mean, and why the threshold clears one standard deviation here when it did not there.

The four-fold gap between $66.7\\%$ and $15.1\\%$ is still large. Chebyshev never knows it is looking at a sum of independent things; that extra structure is precisely what sharper tools like the central limit theorem exploit and Chebyshev cannot.`,
    link: '',
  },

  obj14: {
    title: `Geometric: the Widest Spread on the Page`,
    content: `With $p = 1/\\mu = 0.1$ the geometric has $\\sigma^2 = \\frac{1-p}{p^2} = 90$, so $\\sigma = 9.49$ and $a = 3$ is a mere $0.32\\sigma$.

The bound is vacuous and the actual is $71.6\\%$.`,
    before: ``,
    after: `A standard deviation almost as large as the mean is the geometric's signature, and it is the reason so much probability sits outside a window of $\\pm 3$. The mode is at $k = 1$ while the mean is at $10$, so the distribution is nowhere near symmetric about $\\mu$ — most of its mass is well below the mean and a long tail stretches far above it.

One caveat on the figure. The plotted window is $\\mu \\pm 4\\sigma$ truncated at zero, and the geometric's support runs past it, so the reported actual is summed over about $99.3\\%$ of the mass. Truncation can only make the actual smaller, so it never threatens the bound — but the true tail probability is slightly higher than the number shown.`,
    link: '',
  },

  obj15: {
    title: `Negative Binomial: Between the Two Extremes`,
    content: `With $r = 5$ and $p = r/(\\mu + r) = 1/3$, the negative binomial has $\\sigma^2 = \\frac{r(1-p)}{p^2} = 30$ and $\\sigma = 5.48$.

$a = 3$ is $0.55\\sigma$, so the bound is vacuous, and the actual is $51.8\\%$.`,
    before: ``,
    after: `Its variance of $30$ sits between the geometric's $90$ and the binomial's $6$, which is exactly where a sum of five waiting times should land: more concentrated than one wait, less than a sum of twenty-five fixed trials.

Setting $r = 1$ would reproduce the geometric exactly. Raising $r$ shrinks the variance toward the binomial's, and with it the actual — the same "sums concentrate" effect, seen from the waiting-time side.`,
    link: '',
  },

  obj16: {
    title: `Hypergeometric: the Tightest Bound Here`,
    content: `Drawing $n = 17$ from a population of $N = 50$ with $K = 30$ successes gives $\\sigma^2 = 2.75$, the smallest variance of the nine, and $\\sigma = 1.66$.

That makes $a = 3$ equal to $1.81\\sigma$ — the largest $k$ on the page — so the bound falls to $30.5\\%$ against an actual of $3.2\\%$.`,
    before: ``,
    after: `Two things push the variance down. Sampling without replacement is self-correcting, so the finite population correction $\\frac{N-n}{N-1}$ scales the variance below the binomial's; and the support is hard-capped at $17$ draws, so there is simply nowhere far from the mean to go.

This is the one state where the bound looks almost respectable, and the reason is entirely about $k$. Chebyshev's quality depends on how many standard deviations out you are asking about, not on how large $\\sigma$ happens to be — which is why the $k$ form of the inequality is the one worth remembering.`,
    link: '',
  },

  obj17: {
    title: `Discrete Uniform: Spread Without a Tail`,
    content: `The integers $1$ to $n = 2\\mu - 1 = 19$, each equally likely, have $\\sigma^2 = \\frac{n^2-1}{12} = 30$ and $\\sigma = 5.48$.

$a = 3$ is $0.55\\sigma$, the bound is vacuous, and the actual is $63.2\\%$ — twelve of the nineteen values lie outside $[7, 13]$.`,
    before: ``,
    after: `This one can be checked by counting. The values inside $\\mu \\pm 3$ are $7$ through $13$, which is seven of nineteen, so the outside is $12/19 = 63.2\\%$ exactly. No integration, no approximation.

It also makes a point the continuous cases obscure: a distribution can be very spread out without having a tail at all. The discrete uniform has the same variance as the negative binomial, $30$, but achieves it by spreading mass evenly rather than by reaching far out with a little. Chebyshev sees only the variance, so it treats them identically — and their actual figures, $63.2\\%$ and $51.8\\%$, differ because it cannot tell them apart.`,
    link: '',
  },
}
      
    }
  };

  const currentConfig = viewConfig[params.view];


  /* ---- frozen-state demonstration units (Line 1) ----
     The component draws its chart as inline JSX, so markovDiagrams.js ports the
     markup and re-runs the component's own nine generators and its actual-
     probability calculator at the opening sliders E[X] = 10, a = 15. The tenth
     state is the a <= E[X] case, where the tool swaps in its red warning panel.
     The chebyshev view is not wired yet - see the registry entry. */
  const unit = (svg, caption, text) => demoUnitFrame({ svg, caption, text })
  const M = markovDiagrams
  const C = chebyshevDiagrams

  const unitsByView = {
    markov: {
      'markov-normal': unit(M['markov-normal'], 'Normal, E[X] = 10, a = 15',
        'The curve is the normal restricted to x >= 0 with sigma = 5. The shaded tail is 15.9% against ' +
        'a bound of 66.7% - about four times the truth.'),
      'markov-exponential': unit(M['markov-exponential'], 'Exponential, E[X] = 10, a = 15',
        'The tool opens here. The tail is exp(-1.5) = 22.3%, the tightest of the three continuous ' +
        'options against the same 66.7% bound.'),
      'markov-uniform': unit(M['markov-uniform'], 'Uniform on [0, 20], a = 15',
        'A flat density of 0.05, so the shaded tail is the rectangle from 15 to 20: 5 x 0.05 = 25.0%. ' +
        'The one state whose tail can be checked by hand.'),
      'markov-poisson': unit(M['markov-poisson'], 'Poisson, lambda = 10, a = 15',
        'The chart switches to stems, and the tool sums the red ones rather than integrating: 8.3%. ' +
        'Poisson mass sits within a few sigma of lambda, and sigma here is only 3.2.'),
      'markov-binomial': unit(M['markov-binomial'], 'Binomial, n = 25, p = 0.4, a = 15',
        'A sum of 25 trials, so it concentrates: sigma = 2.45 and the threshold is over two sigma out. ' +
        'The tail is 3.4%, a twentyfold gap to the bound.'),
      'markov-geometric': unit(M['markov-geometric'], 'Geometric, p = 0.1, a = 15',
        'Stems decaying by a constant 0.9 each step, with 21.4% at or beyond a. The plotted window ' +
        'holds 98.5% of the mass, so this figure slightly undercounts the true tail.'),
      'markov-negative-binomial': unit(M['markov-negative-binomial'], 'Negative binomial, r = 5, p = 1/3, a = 15',
        'Shape between the geometric and the binomial, and a tail of 18.8% that sits between theirs. ' +
        'At r = 1 this option would be the geometric exactly.'),
      'markov-hypergeometric': unit(M['markov-hypergeometric'], 'Hypergeometric, N = 50, K = 30, n = 17, a = 15',
        'Sampling without replacement, capped at 17 draws, so only three values exceed the threshold. ' +
        'The tail is 0.3% - over two hundred times smaller than the bound.'),
      'markov-discrete-uniform': unit(M['markov-discrete-uniform'], 'Discrete uniform on 1..19, a = 15',
        'Five of the nineteen values are at or above 15, so the tail is 5/19 = 26.3% - the largest of ' +
        'all nine states, and still well under the 66.7% bound.'),
      'bound-exceeds-one': unit(M['bound-exceeds-one'], 'Exponential with a = 8, below E[X] = 10',
        'With a under the mean the bound is 10/8 = 1.25, and the tool turns its header panel red. A ' +
        'bound of 125% is true but empty: every probability is at most 1 anyway.'),
    },
    chebyshev: {
      'chebyshev-normal': unit(C['chebyshev-normal'], 'Normal, mu = 10, sigma^2 = 4, a = 3',
        'The variance slider does set sigma here, so sigma = 2 and a = 1.5 sigma. Bound 44.4%, actual ' +
        '13.4% - about as tight as Chebyshev gets.'),
      'chebyshev-exponential': unit(C['chebyshev-exponential'], 'Exponential, lambda = 0.1',
        'One parameter, so the mean fixes sigma^2 = mu^2 = 100 and the slider does nothing. a = 3 is ' +
        'only 0.3 sigma, so the bound caps at 100% and says nothing; the actual is 77.6%.'),
      'chebyshev-uniform': unit(C['chebyshev-uniform'], 'Continuous uniform on [6.54, 13.46]',
        'Built to have exactly the requested variance, so bound 44.4% and actual 13.4% - identical to ' +
        'the normal at this k, but beyond k = sqrt(3) its actual drops to exactly zero.'),
      'chebyshev-poisson': unit(C['chebyshev-poisson'], 'Poisson, lambda = 10',
        'Mean and variance are the same parameter, so sigma^2 = 10 whatever the slider says. a = 3 is ' +
        '0.95 sigma - just short of one - so the bound is still vacuous. Actual 26.5%.'),
      'chebyshev-binomial': unit(C['chebyshev-binomial'], 'Binomial, n = 25, p = 0.4',
        'A sum of 25 trials concentrates: sigma^2 = 6, so a = 1.22 sigma and the bound becomes a real ' +
        'constraint at 66.7%. Actual 15.1%.'),
      'chebyshev-geometric': unit(C['chebyshev-geometric'], 'Geometric, p = 0.1',
        'sigma^2 = 90, nearly the square of the mean. a = 0.32 sigma, bound vacuous, actual 71.6%. The ' +
        'window holds about 99.3% of the mass, so that actual slightly undercounts.'),
      'chebyshev-negative-binomial': unit(C['chebyshev-negative-binomial'], 'Negative binomial, r = 5, p = 1/3',
        'sigma^2 = 30, between the geometric 90 and the binomial 6 - five waits concentrate more than ' +
        'one, less than twenty-five fixed trials. Actual 51.8%.'),
      'chebyshev-hypergeometric': unit(C['chebyshev-hypergeometric'], 'Hypergeometric, N = 50, K = 30, n = 17',
        'The smallest variance of the nine, 2.75, so a = 1.81 sigma - the largest k on the page. The ' +
        'bound drops to 30.5% against an actual of 3.2%.'),
      'chebyshev-discrete-uniform': unit(C['chebyshev-discrete-uniform'], 'Discrete uniform on 1..19',
        'Twelve of the nineteen values lie outside [7, 13], so the actual is exactly 12/19 = 63.2%. Same ' +
        'variance as the negative binomial, reached by spreading evenly rather than by a tail.'),
    },
  }

  // this page previously built eight sections with numeric ids; replaced with an
  // explicit per-view slug list, state sections interleaved after the reading ones
  const orderByView = {
    markov: [
      ['obj1', 'getting-started'],
      ['obj2', 'the-markov-bound'],
      ['obj3', 'the-distribution-selector'],
      ['obj9', 'markov-normal', 'markov-normal'],
      ['obj10', 'markov-exponential', 'markov-exponential'],
      ['obj11', 'markov-uniform', 'markov-uniform'],
      ['obj12', 'markov-poisson', 'markov-poisson'],
      ['obj13', 'markov-binomial', 'markov-binomial'],
      ['obj14', 'markov-geometric', 'markov-geometric'],
      ['obj15', 'markov-negative-binomial', 'markov-negative-binomial'],
      ['obj16', 'markov-hypergeometric', 'markov-hypergeometric'],
      ['obj17', 'markov-discrete-uniform', 'markov-discrete-uniform'],
      ['obj4', 'adjusting-ex-and-threshold'],
      ['obj5', 'when-markov-becomes-useless', 'bound-exceeds-one'],
      ['obj6', 'bound-vs-actual'],
      ['obj7', 'why-markov-matters'],
      ['obj8', 'related-tools-and-concepts'],
    ],
    chebyshev: [
      ['obj1', 'getting-started'],
      ['obj2', 'the-chebyshev-bound'],
      ['obj3', 'the-k-standard-deviations-form'],
      ['obj9', 'chebyshev-normal', 'chebyshev-normal'],
      ['obj10', 'chebyshev-exponential', 'chebyshev-exponential'],
      ['obj11', 'chebyshev-uniform', 'chebyshev-uniform'],
      ['obj12', 'chebyshev-poisson', 'chebyshev-poisson'],
      ['obj13', 'chebyshev-binomial', 'chebyshev-binomial'],
      ['obj14', 'chebyshev-geometric', 'chebyshev-geometric'],
      ['obj15', 'chebyshev-negative-binomial', 'chebyshev-negative-binomial'],
      ['obj16', 'chebyshev-hypergeometric', 'chebyshev-hypergeometric'],
      ['obj17', 'chebyshev-discrete-uniform', 'chebyshev-discrete-uniform'],
      ['obj4', 'using-the-control-sliders'],
      ['obj5', 'two-tailed-vs-one-tailed'],
      ['obj6', 'bound-vs-actual'],
      ['obj7', 'why-chebyshev-matters'],
      ['obj8', 'related-tools-and-concepts'],
    ],
  }

  const stateUnits = unitsByView[params.view] || {}
  const sectionOrder = orderByView[params.view] || []

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
      stateUnits,
      sectionOrder,
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
  stateUnits,
  sectionOrder,
  introContent, 
  faqQuestions,
  schemas,
  currentView, 
  componentName, 
  h1Title 
}) {

  const genericSections = (sectionOrder || []).map(([obj, id, unitKey]) => {
    const src = sectionsContent[obj]
    if (!src || !src.title) return null
    const body = [ src.content ]
    if (unitKey && stateUnits[unitKey]) {
      body.push(<div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />)
      if (src.after) body.push(src.after)
    }
    return { id, title: src.title, link: src.link || '', content: body }
  }).filter(Boolean);

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>
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