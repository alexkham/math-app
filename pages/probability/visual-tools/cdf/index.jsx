

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
import StaticCards from '@/app/components/cards/static-cards/StaticCards'


export async function getStaticProps(){

  const keyWords = [
    'CDF visualizer',
    'cumulative distribution function',
    'probability visualization',
    'CDF calculator',
    'discrete CDF',
    'continuous CDF',
    'interactive probability tools',
    'distribution functions',
    'probability accumulation',
    'CDF charts',
    'step function CDF',
    'smooth CDF curves',
    'probability distribution tools',
    'cumulative probability',
    'CDF visual tools'
  ]

  const cardsData = [
    {
      id: 1,
      title: 'Discrete Distributions CDF',
      summary: 'Step function visualizations for countable outcomes',
      content: 'Explore cumulative distribution functions for six discrete probability distributions: **Discrete Uniform**, **Binomial**, **Geometric**, **Negative Binomial**, **Hypergeometric**, and **Poisson**. The visualizer displays step functions with vertical jumps at each possible value, showing how probability accumulates across discrete outcomes. Adjust parameters with interactive sliders to see how changing n, p, λ, or other parameters affects the CDF shape. Perfect for understanding distributions used in counting trials, successes, or rare events.',
      icon: '📊',
      link: '/probability/visual-tools/cdf/discrete',
      linkTitle: 'Open Discrete CDF Tool'
    },
    {
      id: 2,
      title: 'Continuous Distributions CDF',
      summary: 'Smooth curve visualizations for measurable quantities',
      content: 'Visualize cumulative distribution functions for three continuous probability distributions: **Continuous Uniform**, **Normal (Gaussian)**, and **Exponential**. The tool renders smooth, continuously rising curves showing probability accumulation through integration of the probability density function. Adjust mean, standard deviation, rate parameters, and interval bounds to observe how CDFs change shape. Ideal for understanding distributions modeling measurements, waiting times, and naturally occurring phenomena with bell curves or exponential decay.',
      icon: '📈',
      link: '/probability/visual-tools/cdf/continuous',
      linkTitle: 'Open Continuous CDF Tool'
    }
  ]

  const sectionsContent = {
    obj1: {
      title: `What is a Cumulative Distribution Function?`,
      content: `A cumulative distribution function (CDF) answers the fundamental question: what is the probability that a random variable X is less than or equal to some value x? Mathematically expressed as $F(x) = P(X \\leq x)$, the CDF accumulates all probability up to and including x. For discrete distributions, this involves summing probability mass function values. For continuous distributions, it involves integrating the probability density function from negative infinity to x.

The CDF provides a complete probabilistic description of a random variable. It always starts at 0 (no probability below the minimum possible value), rises monotonically (never decreases), and approaches 1 (all probability accounted for). Unlike probability mass functions or density functions that show likelihood at specific points, the CDF shows cumulative probability—making it ideal for calculating probabilities over ranges and intervals.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Why Visualize Cumulative Distribution Functions?`,
      content: `Visual representations of CDFs reveal probability structure that formulas alone obscure. Seeing the curve's shape immediately communicates where probability concentrates: steep rises indicate high-density regions, while gentle slopes show sparse probability. The CDF's visual form makes interval probabilities geometric—the vertical distance between two points on the curve equals the probability between those values.

Interactive visualization adds dynamic understanding. Adjusting parameters in real-time shows how distributions respond to changes: widening intervals spreads probability, shifting means relocates concentration, altering success probabilities skews accumulation patterns. This active exploration builds intuition impossible to develop from static equations or tables alone. Students can experiment, observe patterns, and develop predictive understanding of how distributional mechanics work.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Choosing Between Discrete and Continuous CDFs`,
      content: `The fundamental distinction lies in the nature of outcomes. Use **discrete CDFs** when your random variable takes countable values—integers representing counts, trials, or selections from finite sets. Discrete CDFs display as step functions with vertical jumps at possible values and flat segments between them. The jumps occur because probability concentrates at specific points: rolling a 4 on a die, getting exactly 7 successes in 10 trials, waiting precisely 3 attempts for first success.

Use **continuous CDFs** when your random variable measures quantities on a continuous scale—heights, temperatures, time intervals, distances. Continuous CDFs appear as smooth curves with no jumps, rising gradually through integration of probability density. They model phenomena where exact values have zero probability, but intervals have positive probability. The distinction matters mathematically and computationally: discrete involves summation, continuous involves integration.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Key Properties of All CDFs`,
      content: `Every cumulative distribution function, whether discrete or continuous, satisfies fundamental properties:

**Non-decreasing**: $F(x_1) \\leq F(x_2)$ whenever $x_1 \\leq x_2$. Probability never disappears as you move right along the x-axis.

**Boundary values**: $\\lim_{x \\to -\\infty} F(x) = 0$ and $\\lim_{x \\to \\infty} F(x) = 1$. All probability lies between the extremes.

**Right-continuous**: At any point of discontinuity (in discrete CDFs), the function equals its right-hand limit.

**Range**: $0 \\leq F(x) \\leq 1$ for all x. CDFs output probabilities, which cannot exceed these bounds.

These properties ensure CDFs provide consistent, valid probability models regardless of the specific distribution.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Understanding CDF Applications`,
      content: `CDFs serve multiple analytical purposes beyond basic probability calculations. They enable percentile determination: the median occurs where $F(x) = 0.5$, quartiles at 0.25 and 0.75, and any percentile by solving $F(x) = p$. Quality control uses CDFs to establish specification limits—if products must meet standards with 95% probability, find x where $F(x) = 0.95$.

CDFs also facilitate distribution comparison. Plotting multiple CDFs on the same axes reveals which distribution assigns more probability to lower values (curves rising faster) or higher values (curves rising more slowly). Statistical tests like Kolmogorov-Smirnov measure the maximum vertical distance between CDFs to assess distributional differences. In reliability engineering, the complement $1 - F(t)$ gives survival probability—the chance a component lasts beyond time t.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Related Probability Visualization Tools`,
      content: `**Probability Mass Function Visualizers** - Display discrete probabilities as bar charts showing $P(X = k)$ at each value rather than cumulative probability.

**Probability Density Function Visualizers** - Show continuous probability density curves where area under the curve represents probability.

**Distribution Calculators** - Compute exact probabilities, quantiles, moments, and other statistical measures for specific distribution parameters.

**Random Variable Simulators** - Generate random samples from distributions to observe empirical behavior and convergence to theoretical probabilities.

**Quantile Function Tools** - Calculate inverse CDFs to find values corresponding to specific cumulative probabilities (percentiles).

**Distribution Comparison Tools** - Overlay multiple distributions to compare shapes, spreads, and probability allocations visually.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is the difference between discrete and continuous CDFs?",
      answer: "Discrete CDFs are step functions with jumps at countable values where probability concentrates. Continuous CDFs are smooth curves with no jumps, rising gradually through integration. Discrete CDFs use summation of probability mass, while continuous CDFs use integration of probability density. Choose discrete for counting outcomes (trials, successes, events) and continuous for measurements (time, distance, weight)."
    },
    obj2: {
      question: "How do you read probability from a CDF?",
      answer: "For cumulative probability P(X ≤ x), locate x on the horizontal axis and read the corresponding y-value on the CDF curve. For interval probability P(a < X ≤ b), subtract CDF values: F(b) - F(a). The vertical distance between the curve at b and the curve at a represents the interval probability."
    },
    obj3: {
      question: "Why do discrete CDFs have steps?",
      answer: "Discrete CDFs have steps because probability only exists at specific countable values. Between these values, no outcomes are possible, so the CDF remains constant (flat). At each possible value, the CDF jumps upward by the probability mass at that point. The step height equals P(X = k) for discrete distributions."
    },
    obj4: {
      question: "What is the relationship between CDF and PDF/PMF?",
      answer: "For discrete distributions, the CDF is the sum of PMF values up to x: F(x) = sum of P(X = k) for all k ≤ x. For continuous distributions, the CDF is the integral of the PDF from negative infinity to x: F(x) = integral of f(t) dt. The derivative of a continuous CDF equals the PDF, and differences in discrete CDFs equal PMF values."
    },
    obj5: {
      question: "When should you use CDF visualization?",
      answer: "Use CDF visualization when you need to understand cumulative probability patterns, compare distributions, find percentiles or quantiles, calculate interval probabilities, or understand how probability accumulates across the distribution's range. CDFs are particularly useful for establishing thresholds, specification limits, and understanding tail behavior of distributions."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Cumulative Distribution Function Visualizers",
      "description": "Interactive visualization tools for cumulative distribution functions across discrete and continuous probability distributions with parameter adjustment and real-time chart updates.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/cdf",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive CDF visualizations for discrete and continuous distributions",
        "Nine total distributions: six discrete and three continuous",
        "Parameter sliders with instant chart updates",
        "Step function display for discrete distributions",
        "Smooth curve rendering for continuous distributions",
        "Mathematical formula explanations with LaTeX rendering",
        "Separate tools for discrete and continuous probability distributions"
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
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "name": "CDF Visualizers",
          "item": "https://www.learnmathclass.com/probability/visual-tools/cdf"
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
    title: "CDF Visualization Tools",
    content: `Cumulative distribution functions (CDFs) provide a complete probabilistic description of random variables by showing the probability that values fall at or below any threshold. These interactive visualizers bring CDFs to life through dynamic charts that respond instantly to parameter changes, helping you understand how probability accumulates across different distributions.

Explore both discrete and continuous probability distributions through specialized tools designed for each type. Discrete CDFs display characteristic step functions with jumps at countable outcomes, while continuous CDFs render smooth curves representing integrated probability density. Each visualizer includes multiple distributions with adjustable parameters, mathematical explanations, and interactive controls for hands-on learning.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      cardsData,
      seoData: {
        title: "CDF Visualizers | Interactive Probability Tools",
        description: "Visualize cumulative distribution functions for discrete and continuous distributions. Interactive tools with parameter controls and real-time updates.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/cdf",
        name: "Cumulative Distribution Function Visualizers"
      },
    }
  }
}

export default function CDFVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas, cardsData}) {

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
        />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
        
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
      <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Cumulative Distribution Function(CDF) Visualization</h1>
      <br/>
        <div style={{width: '90%', margin: '0 auto'}}>
        <StaticCards cards={cardsData} theme="elegant" layout="grid" />
      </div>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      />
      <br/>
      <br/>
    
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}