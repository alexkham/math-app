
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../../pages/pages.css'
import Head from 'next/head'
import DiscreteDistributionsCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/DiscreteProbabilityCDF'
import discreteCdfDiagrams from '@/app/components/visualizations/probability/discrete-distribution/CDFs/discreteCdfDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'CDF calculator',
    'cumulative distribution function',
    'discrete CDF visualizer',
    'discrete probability CDF',
    'binomial CDF',
    'geometric CDF',
    'Poisson CDF',
    'interactive CDF tool',
    'CDF discrete distributions',
    'cumulative probability calculator',
    'discrete uniform CDF',
    'negative binomial CDF',
    'hypergeometric CDF',
    'step function CDF',
    'probability distribution visualizer'
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting a Distribution`,
      content: `The visualizer displays six discrete probability distributions across tabs at the top. Click any tab to switch between **Discrete Uniform**, **Binomial**, **Geometric**, **Negative Binomial**, **Hypergeometric**, and **Poisson** distributions. Each distribution models a different probabilistic scenario, from equally likely outcomes to rare event counting. The active tab is highlighted, and the chart immediately updates to show the cumulative distribution function for that distribution with default parameter values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Adjusting Distribution Parameters`,
      content: `Each distribution has parameter sliders in the controls panel below the distribution name. Drag the sliders to change values:

**Discrete Uniform** uses minimum value (a) and maximum value (b) sliders to set the range.

**Binomial** adjusts number of trials (n) and success probability (p).

**Geometric** controls only success probability (p).

**Negative Binomial** sets number of successes (r) and success probability (p).

**Hypergeometric** configures population size (N), success states (K), and number of draws (n).

**Poisson** adjusts the rate parameter lambda (λ).

The chart updates instantly as you move sliders. Parameter values display next to each slider label.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the CDF Chart`,
      content: `The cumulative distribution function appears as a step chart with discrete jumps. The x-axis shows possible values (k), and the y-axis shows cumulative probability $F(k) = P(X \\leq k)$ ranging from 0 to 1. Each horizontal segment represents the probability that the random variable is less than or equal to that x-value. Vertical jumps occur at each possible outcome, with jump height equal to $P(X = k)$. The rightmost point always reaches probability 1.0, meaning all outcomes up to that point account for the entire probability mass.

Hover over any point to see exact values. The tooltip displays the k-value and corresponding cumulative probability to six decimal places.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding Step Functions in Discrete CDFs`,
      content: `Discrete CDFs form step functions rather than smooth curves because probability concentrates at specific points. Between integer values, the CDF remains constant—if no outcome can occur at $k = 2.5$, then $F(2.5) = F(2)$. The function only increases at values where outcomes are possible. This creates the characteristic staircase pattern where each step's height equals the probability mass at that point. The step-after line type shows this clearly: the line extends horizontally from each point, then jumps vertically to the next level.

Compare this to continuous distributions, where CDFs rise smoothly without jumps.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Finding Specific Cumulative Probabilities`,
      content: `To find $P(X \\leq k)$ for any value k, locate k on the x-axis and read upward to the step function. The y-coordinate at that point gives the cumulative probability. For example, if the chart shows 0.842 at $k = 5$, then there's an 84.2% chance the random variable is 5 or less.

You can also calculate probabilities for ranges using the CDF values. To find $P(a < X \\leq b)$, subtract: $F(b) - F(a)$. Hover over both endpoints to get their cumulative probabilities, then compute the difference. The visualization makes these probability intervals visually apparent as vertical distances between steps.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Comparing Distribution Shapes`,
      content: `Switch between distribution tabs to compare how different probabilistic mechanisms create different CDF patterns. The **Discrete Uniform CDF** rises in equal-sized steps. The **Binomial CDF** typically shows an S-curve shape when p is near 0.5, with steeper increases near the center. The **Geometric** and **Negative Binomial CDFs** start low and rise gradually, with the rate depending on success probability. The **Hypergeometric CDF** resembles binomial but with constraints from finite population sampling. The **Poisson CDF** rises most rapidly near lambda, with shape determined by the rate parameter.

Experiment with parameters to see how they affect the rate of increase and spread of the CDF.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Interpreting Parameter Effects on CDF Shape`,
      content: `For **Binomial**, increasing n spreads the CDF over more values, while changing p shifts where the steepest rise occurs—left for small p, right for large p. For **Geometric**, smaller p values create gentler slopes as more trials are needed on average. The **Poisson** CDF becomes more spread out as lambda increases, with the steepest rise occurring near the lambda value. **Hypergeometric** sampling without replacement creates dependencies that compress or expand the CDF compared to binomial sampling with replacement.

Watch how the CDF evolves as you adjust parameters. Steeper rises indicate probability mass concentrated in a narrow range, while gradual rises show probability spread across many values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What is a Cumulative Distribution Function?`,
      content: `A cumulative distribution function (CDF) gives the probability that a random variable takes a value less than or equal to x: $F(x) = P(X \\leq x)$. For discrete distributions, this is computed by summing the **probability mass function** (PMF) values: $F(k) = \\sum_{i \\leq k} P(X = i)$. The CDF always starts at 0 and increases to 1 as x increases, never decreasing. It answers questions like "What's the chance of getting 3 or fewer successes?" rather than "What's the chance of exactly 3 successes?"

For comprehensive theory on cumulative distribution functions including mathematical properties and applications, see **cumulative distribution function theory page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `CDF vs PMF for Discrete Distributions`,
      content: `The **probability mass function** (PMF) gives the probability of exactly one value: $P(X = k)$. The **cumulative distribution function** (CDF) sums these probabilities up to and including k: $F(k) = \\sum_{i \\leq k} P(X = i)$. The PMF appears as individual spikes or bars showing probability at each point. The CDF shows accumulated probability as a step function. You can recover the PMF from the CDF by taking differences: $P(X = k) = F(k) - F(k-1)$, which equals the height of each step.

Use PMF when asking about exact values. Use CDF when asking about ranges or "at most" probabilities.

For detailed comparison of probability functions including when to use each, see **probability mass function vs cumulative distribution function**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Concepts`,
      content: `**Discrete Distribution Calculators** - Compute exact probabilities, means, and variances for all six distributions with parameter input.

**PMF Visualizers** - Display probability mass functions as bar charts showing individual probabilities rather than cumulative values.

**Continuous Distribution CDFs** - Explore cumulative distribution functions for continuous random variables where CDFs are smooth curves rather than step functions.

**Probability Mass Function Theory** - Understand the mathematical foundation of discrete probability functions and their properties.

**Random Variables** - Learn the fundamental concept underlying all probability distributions and how they map outcomes to numerical values.

**Discrete Distributions Overview** - Comprehensive guide to all discrete probability distributions including when to use each type.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Discrete Uniform: Equal Steps`,
      content: `With the default range $a = 1$ to $b = 6$ — a fair die — the CDF climbs in six identical steps of $1/6$. It starts at $F(1) = 0.1667$ and reaches exactly $1$ at $k = 6$.

Every step is the same height because every outcome has the same probability. That is the visual signature of a uniform distribution: a staircase with even risers.`,
      before: ``,
      after: `The step height *is* the pmf. $F(k) - F(k-1) = P(X = k)$, so reading the jump at any $k$ recovers the probability of that single value — which is how a CDF and a pmf carry the same information in different form.

Between the steps the function is flat, and that flatness is meaningful rather than decorative: $F(2.7) = F(2)$ because no probability accumulates between 2 and 3. A discrete CDF is defined for every real $k$, but only changes at the values the variable can actually take.`,
      link: '',
    },
    obj12: {
      title: `Binomial: a Symmetric S-Curve`,
      content: `At $n = 10$ and $p = 0.5$ the CDF runs from $F(0) = 0.001$ to $F(10) = 1$ across eleven steps, and the steps are not equal.

They are smallest at the ends and largest in the middle, tracing the S-shape you see in the frozen plot. The largest single jump is at $k = 5$, the mean.`,
      before: ``,
      after: `The step heights are the binomial coefficients scaled by $2^{-10}$ — the row $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$ over 1024. That is why the curve is symmetric here: $p = 0.5$ makes the row palindromic.

Changing $p$ breaks that symmetry and slides the steep section. With $p = 0.5$ the CDF passes 0.5 at the middle; with $p = 0.2$ it climbs early and flattens, since most of the probability sits at low counts. The steepest region always sits at the mean $np$.`,
      link: '',
    },
    obj13: {
      title: `Geometric: Never Quite Reaching 1`,
      content: `With $p = 0.3$, the CDF is $F(k) = 1 - (1-p)^k$. It starts at $0.3$ and rises quickly, but the plot's last point, at $k = 34$, is $0.999995$ — not 1.

The support is unbounded: any number of failures before the first success is possible, however unlikely.`,
      before: ``,
      after: `This is the first distribution here whose CDF never terminates. It approaches 1 asymptotically rather than reaching it, and the tool draws a finite window — $\\min(50, \\lceil 10/p \\rceil)$ values — because it has to stop somewhere.

The step heights decay geometrically, each $(1-p)$ times the last, which is exactly the memoryless property in visual form: having waited $k$ failures already, the chance of success on the next trial is still $p$. The staircase looks the same from wherever you start climbing it.`,
      link: '',
    },
    obj14: {
      title: `Negative Binomial: Waiting for Several Successes`,
      content: `With $r = 3$ and $p = 0.4$, the variable counts trials until the third success, so the support starts at $k = 3$ — you cannot have three successes in fewer than three trials.

$F(3) = 0.064 = 0.4^3$, the probability that the first three trials are all successes, and the curve climbs to 1 across the plotted window.`,
      before: ``,
      after: `The shape sits between the geometric and the binomial. Setting $r = 1$ collapses it exactly to the geometric case; raising $r$ pushes the whole curve right and makes it more symmetric, since a sum of several waiting times concentrates around its mean.

The left endpoint is the detail worth carrying. Many distributions start at 0, this one starts at $r$, and mistaking the support is the commonest error in setting these problems up.`,
      link: '',
    },
    obj15: {
      title: `Hypergeometric: Sampling Without Replacement`,
      content: `With $N = 50$ items, $K = 20$ of them successes, and $n = 10$ drawn, the CDF spans $k = 0$ to $10$ and reaches 1.

$F(0) = 0.0029$: the chance of drawing no successes at all in ten draws from a population that is 40% successes.`,
      before: ``,
      after: `The contrast with the binomial is the point of having this distribution on the same page. The binomial assumes each draw has the same success probability; here each draw *changes* the population, so the probability shifts as you go.

For large $N$ relative to $n$ the difference vanishes and the hypergeometric approaches the binomial with $p = K/N$ — which is why sampling 10 people from a city is treated as binomial while sampling 10 from a room of 50 is not.`,
      link: '',
    },
    obj16: {
      title: `Poisson: Counting Rare Events`,
      content: `At $\\lambda = 3$ the CDF begins at $F(0) = e^{-3} = 0.0498$ and climbs to 1 over the plotted window of $k = 0$ to $18$.

Like the geometric, the support is unbounded — any count is possible — so the tool plots a finite range and the tail is negligible rather than absent.`,
      before: ``,
      after: `The Poisson is the limiting case of the binomial when $n$ grows and $p$ shrinks with $np = \\lambda$ held fixed. That is why its curve resembles the binomial's S-shape while needing only one parameter.

Its distinguishing feature is that mean and variance are both $\\lambda$. That is a strong claim about the data, and it is the first thing to check before using it: count data whose variance clearly exceeds its mean is overdispersed, and the Poisson will understate the spread.`,
      link: '',
    },
  }


  /* ---- frozen-state demonstration units (Line 1) ----
     The live chart is recharts, which cannot be rendered to a string at build
     time, so discreteCdfDiagrams.js ports the step plot: same data (the six
     builders and their pmf/cdf helpers, evaluated at the component's default
     sliders) and the same visual configuration the component gives recharts. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: discreteCdfDiagrams[key], caption, text })

  const stateUnits = {
    discreteUniform: unit('discreteUniform', 'Discrete uniform, a = 1 to b = 6',
      'Six identical steps of 1/6, from F(1) = 0.1667 to F(6) = 1. Equal risers are the signature of ' +
      'a uniform distribution, and each riser IS the pmf at that value.'),
    binomial: unit('binomial', 'Binomial, n = 10, p = 0.5',
      'Eleven steps from F(0) = 0.001 to F(10) = 1, smallest at the ends and largest at k = 5. The ' +
      'step heights are the binomial coefficients over 1024.'),
    geometric: unit('geometric', 'Geometric, p = 0.3',
      'Starts at 0.3 and rises fast, but the last plotted point (k = 34) is 0.999995 - the support is ' +
      'unbounded, so the curve approaches 1 without reaching it.'),
    negativeBinomial: unit('negativeBinomial', 'Negative binomial, r = 3, p = 0.4',
      'The support starts at k = 3, not 0: three successes need at least three trials. F(3) = 0.064, ' +
      'which is 0.4 cubed.'),
    hypergeometric: unit('hypergeometric', 'Hypergeometric, N = 50, K = 20, n = 10',
      'Ten draws without replacement from a population that is 40% successes. F(0) = 0.0029 is the ' +
      'chance of drawing none at all.'),
    poisson: unit('poisson', 'Poisson, lambda = 3',
      'Begins at F(0) = e^-3 = 0.0498 and climbs to 1 over the plotted window. Unbounded support ' +
      'again, so the tail is negligible rather than absent.'),
  }


  /* ---- per-distribution notes appended to the tool's own explanation (Line 1)
     The component already had `explanationsOverride`, but that REPLACES its
     built-in text. An additive `explanationsAppend` prop was added so the tool's
     explanation survives and this link is appended to it. The panel renders
     through processContent, so these use markdown anchors. */
  const note = (slug, label) =>
    ` [Learn more about ${label}](!#${slug}) &middot; [compare all six](!#comparing-distribution-shapes)`

  const explanationsAppend = {
    discreteUniform: note('discrete-uniform', 'the discrete uniform CDF'),
    binomial: note('binomial', 'the binomial CDF'),
    geometric: note('geometric', 'the geometric CDF'),
    negativeBinomial: note('negative-binomial', 'the negative binomial CDF'),
    hypergeometric: note('hypergeometric', 'the hypergeometric CDF'),
    poisson: note('poisson', 'the Poisson CDF'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is a cumulative distribution function (CDF)?",
      answer: "A cumulative distribution function (CDF) is a function that gives the probability that a random variable X takes a value less than or equal to x. For discrete distributions, it is calculated by summing the probability mass function values up to and including x: F(x) = P(X ≤ x). The CDF always ranges from 0 to 1 and never decreases as x increases."
    },
    obj2: {
      question: "How do you read a discrete CDF chart?",
      answer: "Find the x-value of interest on the horizontal axis and read upward to where it meets the step function. The y-coordinate at that point gives the cumulative probability P(X ≤ x). The step function has horizontal segments between possible values and vertical jumps at each outcome. Each jump height equals the probability mass at that point."
    },
    obj3: {
      question: "What is the difference between CDF and PMF?",
      answer: "The probability mass function (PMF) gives the probability of exactly one value: P(X = k). The cumulative distribution function (CDF) sums all PMF values up to and including k: F(k) = sum of P(X = i) for all i ≤ k. PMF shows individual probabilities, while CDF shows accumulated probability. You can find PMF values from the CDF by computing differences between consecutive steps."
    },
    obj4: {
      question: "Why do discrete CDFs have step patterns?",
      answer: "Discrete CDFs form step functions because probability only exists at specific countable values. Between these values, no outcomes are possible, so the CDF remains constant. The function only increases at points where the random variable can take values, creating jumps. Each jump height equals the probability mass at that point, and the horizontal segments show regions with no probability mass."
    },
    obj5: {
      question: "When should you use CDF instead of PMF?",
      answer: "Use CDF when you need to find probabilities for ranges or cumulative questions like 'at most k successes' or 'no more than x events.' Use PMF when you need the probability of exactly one specific value. CDF is particularly useful for computing interval probabilities using subtraction: P(a < X ≤ b) = F(b) - F(a)."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Discrete Distributions CDF Visualizer",
      "description": "Interactive cumulative distribution function visualizer for six discrete probability distributions with adjustable parameters and step-by-step probability calculations.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/cdf/discrete",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive CDF visualization for six discrete distributions",
        "Adjustable parameter sliders with instant chart updates",
        "Step-after line chart showing cumulative probability functions",
        "Tooltip display with exact cumulative probability values to six decimals",
        "Tab-based distribution switching between uniform, binomial, geometric, negative binomial, hypergeometric, and Poisson",
        "Mathematical formula explanations for each distribution's CDF",
        "Responsive design for desktop and mobile viewing"
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
          "name": "Discrete Distributions CDF",
          "item": "https://www.learnmathclass.com/probability/visual-tools/cdf/discrete"
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
        title: "Discrete CDF Visualizer | Interactive Cumulative Distribution",
        description: "Visualize cumulative distribution functions for discrete probability distributions. Adjust parameters, explore step functions, calculate probabilities interactively.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/cdf/discrete",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="16" x2="74" y2="16" stroke="#B5D4F4" stroke-width="0.9" stroke-dasharray="3,2.5"/><path d="M 14 58 H 26 V 48 H 38 V 34 H 50 V 22 H 62 V 16 H 72" fill="none" stroke="#85B7EB" stroke-width="2.1"/><circle cx="26" cy="48" r="2.2" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><circle cx="38" cy="34" r="2.2" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><circle cx="50" cy="22" r="2.2" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><circle cx="62" cy="16" r="2.2" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><line x1="14" y1="10" x2="14" y2="66" stroke="#B5D4F4" stroke-width="1"/><line x1="10" y1="62" x2="74" y2="62" stroke="#B5D4F4" stroke-width="1.1"/><text x="8" y="18" font-family="Georgia,serif" font-size="7" fill="#B5D4F4" text-anchor="middle">1</text></svg>`,
        category: "Probability Functions & CDF",
        name: "Discrete Distributions CDF Visualizer"
      },
    }
  }
}

export default function CDFDiscreteVisualizerPage({seoData, sectionsContent, stateUnits, explanationsAppend, introContent, faqQuestions, schemas}) {

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
    plain('obj3', 'reading-the-cdf-chart'),
    plain('obj4', 'step-functions-in-discrete-cdfs'),
    plain('obj5', 'finding-cumulative-probabilities'),
    plain('obj6', 'comparing-distribution-shapes'),
    stateRow('obj11', 'discrete-uniform', 'discreteUniform'),
    stateRow('obj12', 'binomial', 'binomial'),
    stateRow('obj13', 'geometric', 'geometric'),
    stateRow('obj14', 'negative-binomial', 'negativeBinomial'),
    stateRow('obj15', 'hypergeometric', 'hypergeometric'),
    stateRow('obj16', 'poisson', 'poisson'),
    plain('obj7', 'parameter-effects-on-shape'),
    plain('obj8', 'what-is-a-cdf'),
    plain('obj9', 'cdf-vs-pmf'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cumulative Distribution Function(CDF) of Discrete Distributions</h1>
      <div style={{transform:'scale(0.8)'}}>
        <DiscreteDistributionsCDF explanationsAppend={explanationsAppend}/>
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