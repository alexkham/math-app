

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../../pages/pages.css'
import Head from 'next/head'
import ContinuousCDFVisualizer from '@/app/components/visualizations/probability/continuous-distribution/CDF/ContinuousCDFVisualizer'
import continuousCdfDiagrams from '@/app/components/visualizations/probability/continuous-distribution/CDF/continuousCdfDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'continuous CDF calculator',
    'cumulative distribution function',
    'continuous probability CDF',
    'normal distribution CDF',
    'exponential CDF',
    'uniform continuous CDF',
    'interactive CDF visualizer',
    'smooth CDF curve',
    'continuous distributions tool',
    'Gaussian CDF',
    'PDF vs CDF',
    'probability distribution visualizer',
    'continuous random variable',
    'CDF integration',
    'cumulative probability tool'
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting a Distribution`,
      content: `The visualizer displays three continuous probability distributions in tabs at the top. Click any tab to switch between **Continuous Uniform**, **Normal (Gaussian)**, and **Exponential** distributions. Each distribution models different continuous phenomena: uniform for equal likelihood across an interval, normal for bell-curved symmetric data, and exponential for waiting times or decay processes. The active tab highlights in blue, and the chart immediately updates to show a smooth cumulative distribution function curve with default parameter values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Adjusting Distribution Parameters`,
      content: `Each distribution provides parameter sliders in the controls panel. Drag sliders to modify values:

**Continuous Uniform** uses lower bound (a) and upper bound (b) sliders to define the interval endpoints.

**Normal** adjusts mean (μ) to shift the center and standard deviation (σ) to control spread.

**Exponential** controls the rate parameter lambda (λ) which determines how quickly probability accumulates.

The smooth curve redraws instantly as you move sliders. Parameter values display numerically next to each slider label, showing current settings.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading Smooth CDF Curves`,
      content: `The cumulative distribution function appears as a smooth, continuously rising curve without jumps or steps. The x-axis represents all possible real values in the distribution's domain, while the y-axis shows cumulative probability $F(x) = P(X \\leq x)$ ranging from 0 to 1. The curve starts near 0 (typically approaching from the left) and rises smoothly to approach 1 (extending to the right). Unlike discrete CDFs that jump at specific points, continuous CDFs increase gradually across their entire range.

The curve's steepness indicates where probability density concentrates. Steeper sections mean higher probability density, while flatter sections indicate lower density. Hover over any point on the curve to see exact x-values and corresponding cumulative probabilities displayed to four decimal places.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding Continuous vs Discrete CDFs`,
      content: `Continuous CDFs form smooth curves because probability spreads continuously across intervals rather than concentrating at specific points. In discrete distributions, probability jumps occur at countable values, creating step functions. In continuous distributions, $P(X = k) = 0$ for any exact value k—probability only exists for intervals. This is why the CDF rises smoothly: you're always accumulating infinitesimally small amounts of probability density as x increases.

The smooth curve reflects integration of the **probability density function** (PDF) from negative infinity up to x. The derivative of the CDF gives the PDF, showing the relationship between accumulation (CDF) and density (PDF). The CDF never decreases and has no discontinuous jumps in continuous distributions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Finding Cumulative Probabilities`,
      content: `To find $P(X \\leq a)$ for any value a, locate a on the x-axis and read upward to where it intersects the curve. The y-coordinate at that intersection gives the cumulative probability. For example, if the curve shows 0.8413 at $x = 1$ for a standard normal distribution, there's an 84.13% chance the variable is 1 or less.

Calculate interval probabilities $P(a < X \\leq b)$ by subtracting CDF values: $F(b) - F(a)$. Hover over both endpoints to read their cumulative probabilities, then compute the difference. The vertical distance between the curve at point b and point a represents this interval probability visually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Comparing Distribution Curve Shapes`,
      content: `Switch between tabs to observe how different probabilistic mechanisms create distinct CDF patterns. The **Continuous Uniform CDF** rises linearly from 0 to 1 across its interval, with constant slope. The **Normal CDF** forms an S-shaped sigmoid curve, symmetric around the mean, with the steepest slope at the center where probability density is highest. The **Exponential CDF** rises rapidly at first near x = 0, then gradually flattens as it asymptotically approaches 1, reflecting the memoryless property of exponential waiting times.

Adjust parameters to see how they affect curve shape. Changing the mean shifts the normal curve horizontally. Increasing standard deviation or widening uniform bounds makes curves rise more gradually, spreading probability over a wider range.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Interpreting Parameter Effects`,
      content: `For **Continuous Uniform**, increasing the interval width (b - a) reduces the slope—the curve rises more gradually across a wider range. For **Normal**, increasing mean (μ) shifts the entire S-curve right or left without changing shape. Increasing standard deviation (σ) flattens the curve, making it rise more gradually as probability spreads over more values. For **Exponential**, larger lambda (λ) values create steeper initial rises—probability accumulates faster early on—while smaller lambda creates gentler curves extending farther right.

Watch the curve's steepest section as you adjust parameters. This identifies where probability density concentrates most heavily. The inflection points of the normal CDF occur at μ ± σ, visible as where curvature changes from concave to convex.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What is a Continuous CDF?`,
      content: `A continuous cumulative distribution function gives the probability that a continuous random variable X is less than or equal to x: $F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t) \\, dt$, where $f(t)$ is the **probability density function**. The CDF accumulates probability density from negative infinity up to x. For continuous distributions, the CDF is always a smooth, non-decreasing function with no jumps, starting at $\\lim_{x \\to -\\infty} F(x) = 0$ and approaching $\\lim_{x \\to \\infty} F(x) = 1$.

The derivative of the CDF equals the PDF: $f(x) = \\frac{dF(x)}{dx}$, showing how probability density relates to accumulation.

For comprehensive theory on cumulative distribution functions including mathematical properties and applications, see **cumulative distribution function theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `CDF and PDF Relationship`,
      content: `The **probability density function** (PDF) shows the relative likelihood of values—taller sections indicate higher probability density. The **cumulative distribution function** (CDF) integrates the PDF from left to right, accumulating total probability up to each point. Where PDF has peaks, CDF rises steeply. Where PDF is low or flat, CDF rises gradually. The area under the PDF curve from negative infinity to x equals the CDF value at x: $F(x) = \\int_{-\\infty}^{x} f(t) \\, dt$.

Use PDF to see where values are most likely. Use CDF to calculate probabilities for ranges. The CDF always increases smoothly, while PDF can have multiple peaks, valleys, or asymmetry.

For detailed comparison of probability functions including integration and differentiation relationships, see **probability density function vs cumulative distribution function**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Concepts`,
      content: `**Continuous Distribution Calculators** - Compute exact probabilities, quantiles, means, and variances for normal, exponential, uniform, and other continuous distributions.

**PDF Visualizers** - Display probability density functions as curves showing where values are most likely rather than cumulative probability.

**Discrete Distribution CDFs** - Explore cumulative distribution functions for discrete random variables where CDFs are step functions instead of smooth curves.

**Normal Distribution Tables** - Standard normal (Z) tables showing cumulative probabilities for the standard normal distribution.

**Probability Density Function Theory** - Understand the mathematical foundation of continuous probability functions and integration.

**Continuous Distributions Overview** - Comprehensive guide to continuous probability distributions including when to use each type.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Continuous Uniform: a Straight Line`,
      content: `With the default bounds $a = 0$ and $b = 10$, the CDF is $F(x) = \\frac{x - 0}{10 - 0} = \\frac{x}{10}$ on the interval — a straight line of constant slope $0.1$, flat at 0 to the left of $a$ and flat at 1 to the right of $b$.

$F(5) = 0.5$ exactly. Half the probability sits in the first half of the interval, because every part of the interval is equally likely.`,
      before: ``,
      after: `The slope *is* the density. The uniform pdf is the constant $\\frac{1}{b-a} = 0.1$, and that constant is precisely the gradient of the line you see — which is the geometric statement of $f(x) = F'(x)$ in its simplest possible case.

The two corners are worth noticing. At $x = a$ and $x = b$ the curve has a kink: it is continuous there, but not differentiable, because the density jumps from 0 to 0.1 and back. A CDF must be continuous for a continuous random variable, but it need not be smooth.`,
      link: '',
    },

    obj12: {
      title: `Normal: the S-Curve and the 68-95-99.7 Rule`,
      content: `At $\\mu = 0$ and $\\sigma = 1$ the tool plots the window $\\mu \\pm 4\\sigma$. The curve is the familiar sigmoid, symmetric about the mean: $F(0) = 0.5$ exactly, $F(1) = 0.8413$, and $F(-1) = 0.1587$.

The symmetry is the identity $F(-x) = 1 - F(x)$, which is why the two readings above sum to 1.`,
      before: ``,
      after: `The empirical rule falls straight out as differences of CDF values: $F(1) - F(-1) = 0.6827$, $F(2) - F(-2) = 0.9545$, $F(3) - F(-3) = 0.9973$. Those are the 68%, 95% and 99.7% figures, read off this one curve rather than memorised.

One implementation detail is worth knowing, because it explains why a normal CDF is always a numerical answer and never a formula. The Gaussian density has no elementary antiderivative, so $F$ cannot be written in closed form with the usual functions. The tool evaluates it with an Abramowitz and Stegun approximation to the error function, accurate to about $1.5 \\times 10^{-7}$ — which is why the readings above match published tables to four decimals.

The steepest point is at $x = \\mu$, where the density peaks. The inflection points, where the curve stops steepening and starts flattening, sit at $\\mu \\pm \\sigma$ — so $\\sigma$ is readable off the CDF's shape, not just off the pdf.`,
      link: '',
    },

    obj13: {
      title: `Exponential: Fast Rise, Asymptotic Tail`,
      content: `At $\\lambda = 1$ the CDF is $F(x) = 1 - e^{-\\lambda x}$ and the tool plots $x$ from 0 out to $5/\\lambda$. It climbs steeply at first, then flattens.

$F(1) = 1 - e^{-1} = 0.6321$: about 63.2% of the probability is used up within one mean lifetime $1/\\lambda$, whatever $\\lambda$ is.`,
      before: ``,
      after: `The median sits at $\\frac{\\ln 2}{\\lambda} = 0.6931$, noticeably to the left of the mean $\\frac{1}{\\lambda} = 1$. That gap is the signature of a right-skewed distribution: a long thin tail pulls the mean above the halfway point.

The curve never reaches 1. At the right edge of the plotted window $F \\approx 0.9931$, and the remaining $0.0069$ is spread over the infinite tail beyond it. Like the geometric on the discrete page, the support is unbounded, so the tool draws a finite window and the tail is negligible rather than absent.

The memoryless property is what the shape encodes: $P(X > s + t \\mid X > s) = P(X > t)$. Slide the origin anywhere along the curve, rescale so it starts at 0 again, and you get the same curve back. A component that has already survived an hour is exactly as likely to survive the next hour as a brand new one.`,
      link: '',
    },
  }


  /* ---- frozen-state demonstration units (Line 1) ----
     The live chart is recharts, which cannot be rendered to a string at build
     time, so continuousCdfDiagrams.js ports the plot: the component's own three
     data builders, evaluated at its default sliders, drawn from the component's
     own exported CDF functions with the visual configuration it gives recharts. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: continuousCdfDiagrams[key], caption, text })

  const stateUnits = {
    uniform: unit('uniform', 'Continuous uniform, a = 0 to b = 10',
      'A straight line of slope 0.1 between the bounds, flat at 0 before a and flat at 1 after b. ' +
      'F(5) = 0.5 exactly, and the slope of the line is the density 1/(b-a).'),
    normal: unit('normal', 'Normal, mean 0, standard deviation 1',
      'The sigmoid, symmetric about the mean: F(0) = 0.5, F(1) = 0.8413, F(-1) = 0.1587. Their ' +
      'difference, 0.6827, is the 68% of the empirical rule.'),
    exponential: unit('exponential', 'Exponential, lambda = 1',
      'A fast rise then a long flattening: F(1) = 0.6321 at one mean lifetime, and the right edge of ' +
      'the window is still only 0.9931. The median, ln2 = 0.6931, sits left of the mean.'),
  }


  /* ---- per-distribution notes appended to the tool's own explanation (Line 1)
     The component already had `explanationsOverride`, but that REPLACES its
     built-in text. An additive `explanationsAppend` prop was added so the tool's
     explanation survives and this link is appended to it. The panel renders
     through processContent, so these use markdown anchors. */
  const note = (slug, label) =>
    ` [Learn more about ${label}](!#${slug}) &middot; [compare all three](!#comparing-curve-shapes)`

  const explanationsAppend = {
    uniform: note('continuous-uniform', 'the continuous uniform CDF'),
    normal: note('normal', 'the normal CDF'),
    exponential: note('exponential', 'the exponential CDF'),
  }

  const faqQuestions = {
    obj1: {
      question: "What is a continuous cumulative distribution function?",
      answer: "A continuous cumulative distribution function (CDF) gives the probability that a continuous random variable X takes a value less than or equal to x: F(x) = P(X ≤ x). It is calculated by integrating the probability density function from negative infinity up to x. The CDF is always smooth with no jumps, starts at 0, and approaches 1 as x increases."
    },
    obj2: {
      question: "How do you read a continuous CDF curve?",
      answer: "Find the x-value of interest on the horizontal axis and read upward to where it meets the smooth curve. The y-coordinate at that intersection gives the cumulative probability P(X ≤ x). The curve's slope at any point indicates probability density—steeper sections mean higher density, flatter sections mean lower density."
    },
    obj3: {
      question: "What is the relationship between CDF and PDF?",
      answer: "The probability density function (PDF) shows relative likelihood at each point. The cumulative distribution function (CDF) integrates the PDF from left to right: F(x) = integral of f(t) from negative infinity to x. The derivative of the CDF equals the PDF: f(x) = dF(x)/dx. Where PDF is high, CDF rises steeply; where PDF is low, CDF rises gradually."
    },
    obj4: {
      question: "Why are continuous CDFs smooth curves instead of steps?",
      answer: "Continuous CDFs are smooth because probability spreads continuously across intervals rather than concentrating at discrete points. Since P(X = any exact value) = 0 for continuous distributions, probability accumulates gradually through integration of the density function. There are no jumps because there are no point masses of probability."
    },
    obj5: {
      question: "How do you find probability for an interval using CDF?",
      answer: "To find P(a < X ≤ b), subtract the CDF values: F(b) - F(a). This gives the probability that X falls between a and b. The vertical distance between the curve at point b and point a represents this interval probability. You can use the tooltip to read exact CDF values at both endpoints."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Continuous Distributions CDF Visualizer",
      "description": "Interactive cumulative distribution function visualizer for continuous probability distributions with smooth curve displays and adjustable parameters.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/cdf/continuous",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Smooth CDF curve visualization for three continuous distributions",
        "Interactive parameter sliders with real-time curve updates",
        "Continuous uniform, normal (Gaussian), and exponential distributions",
        "Hover tooltips showing exact cumulative probabilities to four decimals",
        "Mathematical formula explanations with LaTeX rendering",
        "Responsive two-column layout with sticky explanation panel",
        "Visual comparison of distribution shapes and parameter effects"
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
          "name": "CDF",
          "item": "https://www.learnmathclass.com/probability/visual-tools/cdf"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Continuous Distributions CDF",
          "item": "https://www.learnmathclass.com/probability/visual-tools/cdf/continuous"
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
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      stateUnits,
      explanationsAppend,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Continuous CDF Visualizer | Interactive Distribution Tool",
        description: "Visualize smooth cumulative distribution functions for continuous probability distributions. Adjust parameters, explore curves, calculate probabilities.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/cdf/continuous",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="16" x2="74" y2="16" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="3,2.5"/><path d="M 14 60 C 26 60, 30 20, 44 18 C 56 16.5, 62 16, 72 16" fill="none" stroke="#97C459" stroke-width="2.2"/><line x1="14" y1="10" x2="14" y2="66" stroke="#B5D4F4" stroke-width="1"/><line x1="10" y1="62" x2="74" y2="62" stroke="#B5D4F4" stroke-width="1.1"/><text x="8" y="18" font-family="Georgia,serif" font-size="7" fill="#B5D4F4" text-anchor="middle">1</text></svg>`,
        category: "Probability Functions & CDF",
        name: "Continuous Distributions CDF Visualizer"
      },
    }
  }
}

export default function CDFContinuousVisualizerPage({seoData, sectionsContent, stateUnits, explanationsAppend, introContent, faqQuestions, schemas}) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  // this page previously generated its sections from Object.keys(sectionsContent)
  // with numeric ids; replaced with an explicit slug list
  const genericSections = [
    plain('obj1', 'selecting-a-distribution'),
    plain('obj2', 'adjusting-parameters'),
    plain('obj3', 'reading-smooth-cdf-curves'),
    plain('obj4', 'continuous-vs-discrete-cdfs'),
    plain('obj5', 'finding-cumulative-probabilities'),
    plain('obj6', 'comparing-curve-shapes'),
    stateRow('obj11', 'continuous-uniform', 'uniform'),
    stateRow('obj12', 'normal', 'normal'),
    stateRow('obj13', 'exponential', 'exponential'),
    plain('obj7', 'parameter-effects-on-shape'),
    plain('obj8', 'what-is-a-continuous-cdf'),
    plain('obj9', 'cdf-and-pdf'),
    plain('obj10', 'related-tools-and-concepts'),
  ]

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cumulative Distribution Function(CDF) of Continuous Distributions</h1>
      
      <div style={{transform:'scale(0.8)'}}>
        <ContinuousCDFVisualizer explanationsAppend={explanationsAppend}/>
      </div>
      
      <br/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
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