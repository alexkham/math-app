
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
import DiscreteProbabilityDistributions from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityDistributions'
import ContinuousProbabilityDistributions from '@/app/components/visualizations/probability/continuous-distribution/ContinuousProbabilityDistribution'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'discrete' } },
    { params: { view: 'continuous' } }
  ];

  return { paths, fallback: false };
}


export async function getStaticProps({ params }){

  const viewConfig = {
    'discrete': {
      component: 'DiscreteProbability',
      title: "Discrete Probability Distributions - Interactive PMF Visualizer | Learn Math Class",
      description: "Interactive discrete probability distribution visualizer with Binomial, Poisson, Geometric and more. Explore probability mass functions with real-time parameter controls and calculations.",
      keywords: [
        'discrete probability distribution',
        'probability mass function',
        'PMF calculator',
        'binomial distribution',
        'Poisson distribution',
        'geometric distribution',
        'discrete random variable',
        'interactive PMF',
        'probability mass calculator',
        'discrete distribution visualizer',
        'hypergeometric distribution',
        'negative binomial distribution',
        'PMF interactive tool',
        'discrete probability calculator',
        'probability mass function graph'
      ],
      url: "/probability/visual-tools/probability-function/discrete",
      name: "Discrete Probability Distributions",
      h1: "Discrete Probability Distribution Visualizer",
      introTitle: "Understanding Discrete Probability Distributions",
      introContent: "Discrete probability distributions describe random variables with countable outcomes. The probability mass function (PMF) assigns exact probabilities to specific values. Explore six fundamental discrete distributions with interactive parameter controls.",
      sectionsContent: {
        obj1: {
          title: `Selecting a Distribution Type`,
          content: `Click the distribution tabs at the top to switch between six discrete distributions. Each tab shows the distribution name: Discrete Uniform, Binomial, Geometric, Negative Binomial, Hypergeometric, and Poisson. The selected distribution displays in blue with its parameter controls below. Start with Discrete Uniform for the simplest case, or jump directly to the distribution relevant to your problem. Each distribution has a brief description underneath its name explaining what it models. The tool remembers your last selection, making it easy to compare distributions by switching back and forth.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj2: {
          title: `Adjusting Distribution Parameters`,
          content: `Use the sliders to change distribution parameters and watch the bar chart update instantly. Each distribution has different parameters: Binomial uses $n$ (number of trials) and $p$ (success probability), while Poisson uses only $\\lambda$ (rate parameter). Drag sliders smoothly or click anywhere on the slider track to jump to that value. The current parameter values display next to each slider label. For the Hypergeometric distribution, note that the number of draws and success states cannot exceed the population size. The tool automatically constrains parameters to valid ranges. Experiment with extreme parameter values to see how distributions behave at their limits.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj3: {
          title: `Reading the Bar Chart`,
          content: `The bar chart displays probability values on the vertical axis and possible outcome values on the horizontal axis. Each bar height represents the probability of that specific outcome occurring. Taller bars indicate more likely values. The chart automatically scales to show all bars clearly, adjusting the vertical axis as you change parameters. Hover over any bar to see the exact probability value displayed in a tooltip. The tooltip shows both the outcome value $k$ and its probability $P(X = k)$ to six decimal places. For distributions with many possible values, the chart shows only values with non-negligible probability. Compare bar heights directly to understand relative likelihoods.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj4: {
          title: `Understanding Probability Values`,
          content: `All probability values fall between 0 and 1, where 0 means impossible and 1 means certain. Values close to 0 indicate unlikely outcomes, while values near 1 indicate highly likely outcomes. The sum of all bar heights always equals exactly 1, representing certainty that one of the outcomes will occur. For symmetric distributions like Binomial with $p = 0.5$, the highest bars cluster around the center. For skewed distributions like Geometric, the highest bar appears on one side with a long tail extending in the other direction. Notice how probability spreads out as you increase variance parameters. When comparing distributions, similar shapes suggest similar probabilistic behavior.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj5: {
          title: `Comparing Distribution Shapes`,
          content: `Switch between distributions to observe different probability patterns. The Discrete Uniform creates equal-height bars across all values in its range. Binomial distributions form bell-shaped patterns that become more symmetric as $n$ increases. Geometric distributions always show exponential decay with the highest probability at the first value. Poisson distributions shift rightward as $\\lambda$ increases, transitioning from highly skewed to approximately symmetric. Negative Binomial distributions extend the geometric pattern, showing where the $r$-th success is likely to occur. Hypergeometric distributions resemble Binomial but account for sampling without replacement. Understanding these shape differences helps you select the appropriate distribution for your scenario.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj6: {
          title: `Working with Different Scenarios`,
          content: `Each distribution models specific real-world scenarios. Use Binomial for fixed-trial experiments like flipping a coin 10 times or testing 50 items for defects. Choose Poisson for rare events occurring over time, such as website visits per hour or earthquakes per year. Select Geometric when counting trials until the first success, like rolling dice until you get a six. Negative Binomial extends this to count trials until the $r$-th success. Use Hypergeometric when sampling without replacement from a finite population, such as drawing cards or selecting items from a batch. The parameter controls let you adjust scenarios to match your specific situation. The explanation panel provides formulas and typical applications for the selected distribution.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj7: {
          title: `What is a Probability Mass Function?`,
          content: `The probability mass function (PMF) assigns a probability to each discrete value a random variable can take. Written as $P(X = k)$, it gives the probability that random variable $X$ equals exactly $k$. The PMF must satisfy two properties: each probability is between 0 and 1, and all probabilities sum to 1. For example, a fair six-sided die has PMF $P(X = k) = 1/6$ for $k = 1, 2, 3, 4, 5, 6$. The PMF differs from the **probability density function** used for continuous variables. For comprehensive coverage of **random variables**, **expectation**, and **variance** calculations using PMFs, see our detailed probability theory pages.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj8: {
          title: `Binomial Distribution Fundamentals`,
          content: `The Binomial distribution models the number of successes in $n$ independent trials, each with success probability $p$. Its PMF is $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, where $\\binom{n}{k}$ is the binomial coefficient. The expected value is $E[X] = np$ and variance is $\\text{Var}(X) = np(1-p)$. As $n$ increases with $p$ fixed, the distribution becomes more bell-shaped and approximates a Normal distribution. When $n$ is large and $p$ is small such that $np$ remains moderate, it approximates a Poisson distribution. For detailed derivations of Binomial properties, applications in **hypothesis testing**, and connections to **combinatorics**, see our Binomial distribution theory page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj9: {
          title: `Poisson Distribution Basics`,
          content: `The Poisson distribution describes the number of events occurring in a fixed interval when events happen at a constant average rate $\\lambda$. Its PMF is $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. Both the mean and variance equal $\\lambda$. This distribution applies when events occur independently and the average rate stays constant. The Poisson approximates Binomial when $n$ is large, $p$ is small, and $np \\approx \\lambda$. Common applications include modeling rare events, arrivals in queueing systems, and defects in manufacturing. For in-depth coverage of Poisson process theory, **exponential distribution** connections, and statistical inference with Poisson data, see our detailed Poisson distribution page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj10: {
          title: `Geometric vs Negative Binomial`,
          content: `The Geometric distribution models trials until the first success, with PMF $P(X = k) = (1-p)^{k-1} p$. It has the memoryless property: the probability of success in future trials doesn't depend on past failures. The Negative Binomial generalizes this to count trials until the $r$-th success. Its PMF is $P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$. When $r = 1$, Negative Binomial reduces to Geometric. Both distributions are right-skewed with exponential decay. For comprehensive theory on these distributions, their role in **survival analysis**, and applications in **sequential experiments**, see our detailed pages on Geometric and Negative Binomial distributions.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj11: {
          title: `When to Use Each Distribution`,
          content: `Choose Discrete Uniform when all outcomes in a range are equally likely, such as rolling a fair die or selecting a random integer. Use Binomial for counting successes in a fixed number of independent trials with constant success probability. Select Poisson when counting rare events over time or space intervals with a constant average rate. Choose Geometric when counting trials until the first success occurs. Use Negative Binomial when counting trials until $r$ successes occur, generalizing the geometric case. Select Hypergeometric when sampling without replacement from a finite population, where the composition of remaining items changes after each draw. The key distinction is whether sampling is with replacement (Binomial) or without replacement (Hypergeometric).`,
          before: ``,
          after: ``,
          link: '',
        },
        obj12: {
          title: `Related Probability Concepts`,
          content: `**Expected Value Calculator** - Compute the mean of discrete probability distributions to find the long-run average outcome.

**Variance Calculator** - Calculate the spread of probability distributions to quantify uncertainty around the expected value.

**Cumulative Distribution Function** - The CDF gives probabilities of being less than or equal to a value, computed by summing the PMF.

**Continuous Probability Distributions** - For uncountable outcomes like measurements, explore probability density functions instead.

**Combinatorics** - Understanding combinations and permutations is essential for calculating binomial and hypergeometric probabilities.

**Random Variables** - Learn about discrete random variables, their properties, and how probability mass functions define their behavior.`,
          before: ``,
          after: ``,
          link: '',
        }
      },
      faqQuestions: {
        obj1: {
          question: "What is a probability mass function?",
          answer: "A probability mass function (PMF) assigns a probability to each possible value of a discrete random variable. It specifies P(X = k) for every k in the variable's range. All probabilities must be between 0 and 1, and they must sum to exactly 1."
        },
        obj2: {
          question: "How do you calculate probabilities with discrete distributions?",
          answer: "Use the distribution's probability mass function formula with your specific parameters. Substitute the parameters and the value k you're interested in, then evaluate the formula. For ranges, sum the PMF values across all k in that range."
        },
        obj3: {
          question: "When should you use a Binomial distribution?",
          answer: "Use Binomial when you have a fixed number of independent trials, each with the same probability of success, and you're counting the total number of successes. Examples include coin flips, quality control testing, and survey responses."
        },
        obj4: {
          question: "What's the difference between Geometric and Negative Binomial distributions?",
          answer: "Geometric counts trials until the first success occurs. Negative Binomial generalizes this to count trials until r successes occur. When r equals 1, Negative Binomial reduces to Geometric. Both model sequential trials with constant success probability."
        },
        obj5: {
          question: "How does Poisson distribution relate to Binomial distribution?",
          answer: "Poisson approximates Binomial when n is large, p is small, and their product np remains moderate. This makes Poisson useful for modeling rare events. The Poisson parameter λ equals np from the Binomial setup."
        }
      }
    },
    
    'continuous': {
      component: 'ContinuousProbability',
      title: "Continuous Probability Distributions - Interactive PDF Visualizer | Learn Math Class",
      description: "Interactive continuous probability distribution visualizer with Normal, Exponential, Uniform distributions. Explore probability density functions with real-time PDF/CDF toggle and parameter controls.",
      keywords: [
        'continuous probability distribution',
        'probability density function',
        'PDF calculator',
        'normal distribution',
        'Gaussian distribution',
        'exponential distribution',
        'uniform distribution',
        'continuous random variable',
        'interactive PDF',
        'probability density calculator',
        'bell curve visualizer',
        'CDF calculator',
        'PDF vs CDF',
        'continuous probability calculator',
        'probability density graph'
      ],
      url: "/probability/visual-tools/probability-function/continuous",
      name: "Continuous Probability Distributions",
      h1: "Continuous Probability Distribution Visualizer",
      introTitle: "Understanding Continuous Probability Distributions",
      introContent: "Continuous probability distributions describe random variables that can take any value in an interval. The probability density function (PDF) shows relative likelihood, while the cumulative distribution function (CDF) shows accumulated probability. Explore three fundamental continuous distributions with interactive controls.",
      sectionsContent: {
        obj1: {
          title: `Selecting a Distribution Type`,
          content: `Click the distribution tabs at the top to switch between three continuous distributions: Uniform, Normal (Gaussian), and Exponential. The selected distribution appears highlighted in blue. Each distribution has a brief description explaining its key characteristics. The Uniform distribution shows constant density over an interval. The Normal distribution displays the classic bell curve shape, symmetric around its mean. The Exponential distribution models waiting times with exponential decay. The tool maintains your previous parameter settings when switching between distributions, making it easy to compare how different distributions behave with similar parameter ranges.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj2: {
          title: `Using the PDF vs CDF Toggle`,
          content: `Toggle between PDF (Probability Density Function) and CDF (Cumulative Distribution Function) views using the buttons above the chart. The PDF view shows the density curve, indicating relative likelihood at each point. Higher curves mean greater density, though the height itself is not a probability. The CDF view shows cumulative probability, displaying $P(X \\leq x)$ at each point. The CDF always increases from 0 to 1, creating an S-shaped curve for most distributions. Switch between views to understand how density accumulates into probability. The PDF shows where probability is concentrated, while the CDF shows total probability up to any point. Both views use the same parameters, so changes in one immediately reflect in the other.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj3: {
          title: `Adjusting Distribution Parameters`,
          content: `Use the sliders to adjust parameters specific to each distribution. For the Uniform distribution, set the lower bound $a$ and upper bound $b$ to define the interval. The Normal distribution uses mean $\\mu$ to shift the curve left or right, and standard deviation $\\sigma$ to control spread. Larger $\\sigma$ creates wider, flatter curves; smaller $\\sigma$ creates taller, narrower curves. The Exponential distribution uses rate parameter $\\lambda$, where larger values create steeper decay and smaller expected values. Drag sliders smoothly or click to jump to specific values. Parameter values display next to each label. The curve updates instantly as you adjust parameters, providing immediate visual feedback on how parameters affect distribution shape.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj4: {
          title: `Reading the Curve`,
          content: `The horizontal axis shows the random variable's values, while the vertical axis shows either density (PDF) or cumulative probability (CDF). For PDF views, curve height indicates relative likelihood. Higher sections correspond to more probable regions, but remember that height is density, not probability. Probability requires integrating the PDF over an interval. For CDF views, the curve height directly gives $P(X \\leq x)$. At any point $x$, read up to the curve and across to the vertical axis to find the cumulative probability. Hover over the curve to see exact values in a tooltip. The tooltip displays both the $x$ value and the corresponding function value (density or cumulative probability) to four decimal places.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj5: {
          title: `Understanding Density vs Probability`,
          content: `Probability density is not the same as probability. Density can exceed 1, especially for narrow distributions concentrated in small intervals. The Normal distribution with small standard deviation can have peak densities much greater than 1. Probability is the area under the PDF curve over an interval, not the height. For any single point, probability equals zero in continuous distributions. To find probability for an interval $[a, b]$, integrate the PDF: $P(a \\leq X \\leq b) = \\int_a^b f(x)dx$. The CDF provides this directly: $P(a \\leq X \\leq b) = F(b) - F(a)$. The total area under any PDF always equals 1, ensuring all possible outcomes have probability 1 collectively.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj6: {
          title: `Comparing Distribution Shapes`,
          content: `Each distribution has distinctive shape characteristics. The Uniform distribution shows a flat, rectangular shape in PDF view, with constant density across the interval and zero outside. Its CDF is a straight diagonal line within the interval. The Normal distribution creates the famous bell curve in PDF view, symmetric and smooth with a single peak at the mean. Its CDF is an S-curve, transitioning smoothly from 0 to 1. The Exponential distribution shows exponential decay in PDF view, starting at its maximum and decreasing rapidly. Its CDF rises quickly then gradually approaches 1. Switch between distributions and adjust parameters to see how shapes transform. Understanding these shape patterns helps identify which distribution best models your data.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj7: {
          title: `What is a Probability Density Function?`,
          content: `The probability density function (PDF) describes the relative likelihood of a continuous random variable taking values near each point. Written as $f(x)$, the PDF must be non-negative everywhere and integrate to 1 over its entire range. Unlike discrete PMFs that give exact probabilities, PDFs give density. Probability comes from integration: $P(a \\leq X \\leq b) = \\int_a^b f(x)dx$. The height $f(x)$ indicates relative likelihood but is not itself a probability. Regions with higher PDF have greater probability per unit width. For comprehensive theory on **continuous random variables**, **integration**, and **cumulative distribution functions**, see our detailed probability density function page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj8: {
          title: `Normal Distribution Fundamentals`,
          content: `The Normal distribution, also called Gaussian, is the most important continuous distribution. Its PDF is $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$. The parameters $\\mu$ (mean) and $\\sigma$ (standard deviation) determine location and spread. The distribution is perfectly symmetric around $\\mu$. The **68-95-99.7 rule** states that approximately 68% of values fall within one standard deviation of the mean, 95% within two, and 99.7% within three. The **Central Limit Theorem** explains why Normal distributions appear throughout nature and statistics. For detailed coverage of **z-scores**, **standardization**, and applications in **statistical inference**, see our Normal distribution theory page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj9: {
          title: `Exponential Distribution Basics`,
          content: `The Exponential distribution models the time between events in a Poisson process. Its PDF is $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$, where $\\lambda$ is the rate parameter. Both the expected value and standard deviation equal $1/\\lambda$. The distribution has the memoryless property: the probability of an event in the next interval doesn't depend on how much time has passed. This makes it unique among continuous distributions. Common applications include modeling equipment lifetimes, waiting times, and radioactive decay. For comprehensive coverage of the **Poisson process**, **memoryless property**, and connections to **reliability theory**, see our Exponential distribution page.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj10: {
          title: `Understanding Integration and Area`,
          content: `Integration calculates the area under the PDF curve, converting density into probability. The definite integral $\\int_a^b f(x)dx$ gives $P(a \\leq X \\leq b)$, the probability that $X$ falls between $a$ and $b$. For the entire range, $\\int_{-\\infty}^{\\infty} f(x)dx = 1$, ensuring probabilities sum to certainty. The CDF is the integral of the PDF from negative infinity to $x$: $F(x) = \\int_{-\\infty}^{x} f(t)dt$. Most continuous distributions lack simple closed-form solutions for these integrals, requiring numerical methods. For detailed coverage of **integration techniques**, **numerical integration**, and **CDF properties**, see our comprehensive probability theory pages.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj11: {
          title: `When to Use Each Distribution`,
          content: `Choose the Uniform distribution when all values in an interval are equally likely, such as random positions on a board or random timestamps within a window. Use the Normal distribution for measurements affected by many small independent factors, including heights, weights, test scores, and measurement errors. The **Central Limit Theorem** justifies Normal assumptions for sample means. Select the Exponential distribution for time until an event occurs, especially in memoryless scenarios like equipment failure or radioactive decay. If data shows decay that depends on history, consider other distributions like Weibull. For symmetric data with heavier tails than Normal, consider Student's t-distribution. Match your distribution choice to your data's shape and the process generating it.`,
          before: ``,
          after: ``,
          link: '',
        },
        obj12: {
          title: `Related Probability Concepts`,
          content: `**Cumulative Distribution Function** - The CDF gives accumulated probability, calculated by integrating the PDF from negative infinity to any point.

**Discrete Probability Distributions** - For countable outcomes, use probability mass functions rather than density functions.

**Standard Normal Distribution** - The special case of Normal with mean 0 and standard deviation 1, used for **z-score** transformations.

**Central Limit Theorem** - Explains why sample means follow Normal distributions regardless of the population distribution.

**Expected Value and Variance** - Learn to calculate these summary statistics by integrating with the PDF.

**Statistical Inference** - Apply continuous distributions to **confidence intervals**, **hypothesis testing**, and **estimation**.`,
          before: ``,
          after: ``,
          link: '',
        }
      },
      faqQuestions: {
        obj1: {
          question: "What is a probability density function?",
          answer: "A probability density function (PDF) describes the relative likelihood of a continuous random variable at each point. The PDF itself gives density, not probability. Probabilities are calculated by integrating the PDF over intervals. The area under the entire PDF curve equals 1."
        },
        obj2: {
          question: "How do you calculate probability with continuous distributions?",
          answer: "Calculate probability by integrating the PDF over the desired interval. Use P(a ≤ X ≤ b) = ∫[a to b] f(x)dx. Alternatively, use the CDF: P(a ≤ X ≤ b) = F(b) - F(a), where F is the cumulative distribution function."
        },
        obj3: {
          question: "Why is the probability of an exact value zero?",
          answer: "In continuous distributions, there are infinitely many possible values. The probability of any single exact value is zero because a point has zero width. Probabilities only make sense over intervals with positive width, calculated through integration."
        },
        obj4: {
          question: "What's the difference between PDF and CDF?",
          answer: "PDF (probability density function) shows relative likelihood and requires integration to find probabilities. CDF (cumulative distribution function) directly gives P(X ≤ x) without integration. The CDF is the integral of the PDF from negative infinity to x."
        },
        obj5: {
          question: "When should you use a Normal distribution?",
          answer: "Use Normal distribution for measurements affected by many independent random factors, such as heights, weights, test scores, and errors. The Central Limit Theorem makes Normal appropriate for sample means. Normal fits symmetric data without heavy tails or extreme outliers."
        }
      }
    }
  };

  const currentConfig = viewConfig[params.view];
  const sectionsContent = currentConfig.sectionsContent;
  const faqQuestions = currentConfig.faqQuestions;
  
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
      "featureList": params.view === 'discrete' ? [
        "Interactive visualization of six discrete probability distributions",
        "Real-time parameter adjustment with instant bar chart updates",
        "Binomial, Poisson, Geometric, Negative Binomial, Hypergeometric, and Discrete Uniform distributions",
        "Hover tooltips showing exact probability values to six decimal places",
        "Detailed explanations with formulas, expected values, and variance calculations",
        "Visual comparison of distribution shapes across different parameter values",
        "Educational panel with real-world applications and usage examples"
      ] : [
        "Interactive visualization of three fundamental continuous distributions",
        "Toggle between PDF (probability density) and CDF (cumulative) views",
        "Normal (Gaussian), Exponential, and Continuous Uniform distributions",
        "Real-time parameter adjustment with instant curve updates",
        "Hover tooltips showing exact density or probability values to four decimal places",
        "Detailed explanations with formulas, mean, variance, and applications",
        "Visual comparison of distribution shapes and characteristics"
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
          "name": "Probability Functions",
          "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function"
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
    title: currentConfig.introTitle,
    content: currentConfig.introContent
  };

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
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
    }
   }

export default function ProbabilityFunctionViewPage({seoData, sectionsContent, introContent, faqQuestions, schemas, currentView, componentName, h1Title}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    }
]

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
   <h1 className='title' style={{marginTop:'-40px',marginBottom:'-100px'}}>{h1Title}</h1>
   <br/>
   <div style={{transform:'scale(0.8)'}}>
   {componentName === 'DiscreteProbability' && (
     <DiscreteProbabilityDistributions />
   )}
   
   {componentName === 'ContinuousProbability' && (
     <ContinuousProbabilityDistributions />
   )}
   </div>
   
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