
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
// import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
// import SingleEventProbabilityCalculator from '@/app/components/calculators/probability/SingleEventCalculator'
// import { useSearchParams } from 'next/navigation'
// import TwoIndependentEventsCalculator from '@/app/components/calculators/probability/TwoIndependentEventsCalculator'

// export async function getStaticProps(){

//   const keyWords = [
//     'probability calculator',
//     'calculate probability online',
//     'probability calculator with steps',
//     'free probability calculator',
//     'interactive probability tools',
//     'conditional probability calculator',
//     'joint probability calculator',
//     'Bayes theorem calculator',
//     'probability distribution calculator',
//     'expected value calculator',
//     'discrete probability calculator',
//     'continuous probability calculator',
//     'multiple events probability',
//     'probability formula calculator',
//     'statistical probability tool'
//   ]

//   const sectionsContent = {
//     obj1: {
//       title: `What Are Probability Calculators?`,
//       content: `Probability calculators are interactive tools that compute the likelihood of events occurring based on mathematical probability theory. These calculators handle everything from simple single-event probabilities to complex scenarios involving multiple events, conditional relationships, and probability distributions.

// Each calculator is designed for specific probability scenarios. Some compute basic event probabilities, while others handle **conditional probability**, **joint probability**, or apply specialized theorems like **Bayes' theorem**. Distribution calculators work with both **discrete probability distributions** (like binomial or Poisson) and **continuous distributions** (like normal or exponential).

// Using these calculators saves time and reduces calculation errors. Instead of manually computing complex probability formulas, you input your parameters and receive instant, accurate results with step-by-step explanations where applicable.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj2: {
//       title: `Types of Probability Calculators`,
//       content: `Our probability calculator suite includes 10 specialized tools, each targeting different probability scenarios:

// **Basic Event Calculators** compute probabilities for single events and independent multiple events. These are ideal for straightforward scenarios like dice rolls, coin flips, or card draws.

// **Distribution Calculators** handle both discrete and continuous probability distributions. Use these when working with random variables that follow specific statistical patterns like binomial, normal, Poisson, or exponential distributions.

// **Advanced Calculators** include tools for **conditional probability** (events dependent on prior outcomes), **joint probability** (multiple events occurring together), **Bayes' theorem** (updating probabilities with new evidence), and **expected value** (calculating average outcomes).

// Each calculator type serves distinct purposes. Understanding which category fits your problem helps you choose the right tool quickly.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj3: {
//       title: `Single Event vs Multiple Event Calculators`,
//       content: `The **Single Event Probability Calculator** handles the simplest probability scenarios: what's the likelihood of one specific outcome? Input the number of favorable outcomes and total possible outcomes to get your probability. This calculator is perfect for questions like "What's the probability of rolling a 6?" or "What are the odds of drawing an ace?"

// The **Two Independent Events Calculator** steps up complexity by computing probabilities when two separate events occur. This handles scenarios where events don't affect each other, such as flipping two coins or rolling two dice simultaneously. It calculates probabilities for both events occurring (AND), either event occurring (OR), or exactly one occurring (XOR).

// For scenarios with three or more events, the **Three Events Probability Calculator** extends these concepts further. Choose this when dealing with multiple independent outcomes that need combined probability analysis.

// The key distinction: single event for one outcome, multiple events when analyzing combinations or sequences of outcomes.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj4: {
//       title: `Choosing the Right Calculator`,
//       content: `Select your calculator based on the nature of your probability question:

// **Use Single Event Calculator when:** You need the probability of one specific outcome from one trial or experiment.

// **Use Two/Three Events Calculator when:** You're analyzing multiple independent events and need to know combined probabilities (both occurring, either occurring, etc.).

// **Use Distribution Calculators when:** Your problem involves a random variable following a known distribution pattern. Choose discrete for countable outcomes (binomial, Poisson) or continuous for measured values (normal, exponential).

// **Use Conditional Probability Calculator when:** The probability of an event depends on whether another event has already occurred. These are "given that" scenarios: P(A|B).

// **Use Joint Probability Calculator when:** You need the probability of two events occurring together, especially when they're not independent.

// **Use Bayes' Theorem Calculator when:** You're updating probabilities based on new evidence or information.

// **Use Expected Value Calculator when:** You need to find the average outcome of a probability distribution or gambling scenario.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj5: {
//       title: `Distribution Calculators: Discrete vs Continuous`,
//       content: `**Discrete Distribution Calculators** work with countable outcomes. If you can list all possible values (0, 1, 2, 3...), use a discrete distribution. Common discrete distributions include:

// • **Binomial Distribution**: Fixed number of trials, two possible outcomes per trial (success/failure)
// • **Poisson Distribution**: Events occurring in fixed intervals of time or space
// • **Geometric Distribution**: Number of trials until first success

// **Continuous Distribution Calculators** handle measurements that can take any value within a range. Use these for continuous variables like height, time, temperature, or any measurement. Common continuous distributions include:

// • **Normal Distribution**: Bell-shaped curve, describes many natural phenomena
// • **Exponential Distribution**: Time between events in a Poisson process
// • **Uniform Distribution**: All values equally likely within a range

// The distinction is simple: Can you count the possibilities? Use discrete. Are you measuring a continuous quantity? Use continuous.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj6: {
//       title: `Conditional and Joint Probability`,
//       content: `**Conditional Probability** answers questions in the form "What's the probability of A happening given that B has already occurred?" This is written as P(A|B). The **Conditional Probability Calculator** is essential for dependent events where one outcome affects another.

// Common scenarios include: medical testing (probability of disease given a positive test), quality control (probability of defect given a specific production line), or card games (probability of drawing a heart given you've already drawn one card).

// **Joint Probability** calculates P(A ∩ B)—the probability that both events A and B occur together. Unlike conditional probability, joint probability doesn't assume one event has already happened. The **Joint Probability Calculator** handles scenarios where you need the probability of simultaneous or combined outcomes.

// These calculators are crucial for more sophisticated probability problems where events interact or occur in sequence. Many real-world scenarios involve conditional or joint probabilities rather than simple independent events.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj7: {
//       title: `Bayes' Theorem and Expected Value Calculators`,
//       content: `**Bayes' Theorem Calculator** is a specialized tool for updating probabilities when new evidence becomes available. It's fundamental in statistics, machine learning, and decision-making under uncertainty. Bayes' theorem answers: "Given this new information, how should I revise my probability estimate?"

// Classic applications include medical diagnosis (updating disease probability after test results), spam filtering, and risk assessment. The calculator handles the complex formula P(A|B) = P(B|A) × P(A) / P(B), which involves several probability values.

// **Expected Value Calculators** compute the average outcome you'd expect over many repetitions of a probability experiment. This is crucial for decision-making in gambling, investing, insurance, and any scenario where you weigh outcomes by their probabilities.

// Expected value, written as E(X), multiplies each possible outcome by its probability and sums the results. It tells you the long-run average, helping you make rational decisions even when individual outcomes are uncertain.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj8: {
//       title: `Common Use Cases by Field`,
//       content: `**Statistics and Data Science**: Distribution calculators for analyzing data patterns, **conditional probability** for predictive modeling, Bayes' theorem for Bayesian inference.

// **Gambling and Games**: Single and multiple event calculators for computing odds in dice games, card games, roulette. Expected value calculators for determining game fairness and optimal betting strategies.

// **Medical and Healthcare**: Conditional probability for interpreting diagnostic test accuracy, Bayes' theorem for disease probability given test results, distribution calculators for epidemiological modeling.

// **Business and Finance**: Expected value for investment decisions and risk assessment, distribution calculators for sales forecasting and quality control, joint probability for market analysis.

// **Education and Learning**: All calculators serve as learning tools for probability theory, helping students verify homework, explore concepts interactively, and build intuition about probability relationships.

// **Engineering and Quality Control**: Distribution calculators for reliability analysis, conditional probability for failure prediction, Poisson distribution for defect rates.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj9: {
//       title: `Quick Reference Guide`,
//       content: `**For Simple Questions:**
// • "What's the probability of X?" → Single Event Calculator
// • "Odds of both A and B?" → Two Independent Events Calculator

// **For Distributions:**
// • Countable outcomes (dice rolls, defects) → Discrete Distributions
// • Measured values (time, height) → Continuous Distributions
// • Bell curve scenarios → Normal distribution in Continuous

// **For Conditional Scenarios:**
// • "Probability of A given B" → Conditional Probability Calculator
// • "Both A and B together" → Joint Probability Calculator

// **For Special Applications:**
// • Updating probabilities with evidence → Bayes' Theorem Calculator
// • Average outcome calculation → Expected Value Calculator
// • Three or more events → Three Events Calculator

// Each calculator provides immediate results. For learning, most include step-by-step explanations showing the formulas and logic behind the calculations.`,
//       before: ``,
//       after: ``,
//       link: ''
//     },

//     obj10: {
//       title: `Related Probability Resources`,
//       content: `Beyond these calculators, explore our comprehensive probability learning resources:

// **Visual Tools** provide interactive demonstrations of probability concepts. See **conditional probability visualizations** with tree diagrams, Venn diagrams, and waffle charts that make abstract concepts concrete.

// **Theoretical Guides** cover fundamental concepts in depth. Learn about **probability theory**, **probability distributions**, **Bayes' theorem**, **expected value**, and **random variables**.

// **Practice Problems** let you apply calculator results to real scenarios. Work through examples from gambling, statistics, quality control, and medical testing.

// **Advanced Topics** include **joint and marginal probability**, **probability density functions**, **cumulative distribution functions**, and **moment generating functions**.

// These resources complement the calculators by building conceptual understanding. Use calculators for computation, and use visual tools and guides for learning the underlying theory and intuition.`,
//       before: ``,
//       after: ``,
//       link: ''
//     }
//   }

//   const faqQuestions = {
//     obj1: {
//       question: "Which probability calculator should I use for my problem?",
//       answer: "Start by identifying your scenario type. Use the Single Event Calculator for one outcome, Two/Three Events Calculators for independent multiple events, Distribution Calculators when working with specific probability distributions (binomial, normal, etc.), Conditional Probability Calculator for dependent events, and Bayes' Theorem Calculator when updating probabilities with new evidence."
//     },
//     obj2: {
//       question: "What's the difference between discrete and continuous probability calculators?",
//       answer: "Discrete calculators work with countable outcomes (number of successes, number of events) and use distributions like binomial or Poisson. Continuous calculators handle measurable quantities that can take any value in a range (time, weight, height) and use distributions like normal or exponential. If you can count your outcomes, use discrete; if you're measuring something, use continuous."
//     },
//     obj3: {
//       question: "When do I need a conditional probability calculator versus a joint probability calculator?",
//       answer: "Use conditional probability when one event has already occurred and you want the probability of another event given that information (P(A|B) - 'A given B'). Use joint probability when you need the probability of both events occurring together, without assuming one has already happened (P(A ∩ B) - 'A and B together')."
//     },
//     obj4: {
//       question: "Can these calculators help me learn probability or are they just for computing answers?",
//       answer: "These calculators serve both purposes. They provide accurate computations for homework and real-world problems, but many also show step-by-step explanations of the formulas and logic. Use them to verify your manual calculations, explore how probability changes with different inputs, and build intuition about probability relationships."
//     },
//     obj5: {
//       question: "What is expected value and when should I calculate it?",
//       answer: "Expected value is the long-run average outcome of a probability scenario. Calculate it when making decisions involving uncertain outcomes, such as evaluating gambling games, comparing investment options, pricing insurance, or any situation where you need to know the average result across many repetitions of a random process."
//     }
//   }

//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Probability Calculator Suite",
//       "description": "Comprehensive collection of 10 interactive probability calculators for single events, multiple events, distributions, conditional probability, Bayes' theorem, and expected value.",
//       "url": "https://www.learnmathclass.com/probability/calculators",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Single event probability calculator with instant results",
//         "Two and three independent events calculators",
//         "Discrete probability distributions (binomial, Poisson, geometric)",
//         "Continuous probability distributions (normal, exponential, uniform)",
//         "Conditional probability calculator for dependent events",
//         "Joint probability calculator for combined events",
//         "Bayes' theorem calculator for probability updating",
//         "Expected value calculator for average outcome analysis",
//         "Step-by-step explanations for learning",
//         "Interactive parameter adjustment with real-time results"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": keyWords.join(", ")
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Probability",
//           "item": "https://www.learnmathclass.com/probability"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Probability Calculators",
//           "item": "https://www.learnmathclass.com/probability/calculators"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }

//   return {
//     props: {
//       sectionsContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Probability Calculators - 10 Free Interactive Tools | Learn Math Class",
//         description: "Calculate probabilities instantly with 10 specialized calculators: single events, multiple events, distributions, conditional probability, Bayes' theorem, and expected value.",
//         keywords: keyWords.join(", "),
//         url: "/probability/calculators/basic",
//         name: "Probability Calculator Suite"
//       }
//     }
//   }
// }

// export default function ProbabilityCalculator({seoData, sectionsContent, faqQuestions, schemas}) {

//   const searchParams = useSearchParams()
//   const tab = searchParams.get('tab')
//   const initialTab = tab ? parseInt(tab) : 1

//   const genericSections = Object.keys(sectionsContent).map((key, index) => ({
//     id: `${index + 1}`,
//     title: sectionsContent[key].title,
//     link: sectionsContent[key].link,
//     content: [sectionsContent[key].content]
//   }))

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
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Learn Math Class" />
        
//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />
        
//         <meta name="robots" content="index, follow" />
        
//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify(schemas.webApplication)
//           }}
//         />

//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify(schemas.breadcrumb)
//           }}
//         />

//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify(schemas.faq)
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
      
//       <h1 className='title' style={{marginTop:'-60px',marginBottom:'-50px'}}>Basic Probability Calculators</h1>
      
//       <br/>
      
//       <GenericMultiComponentFrame
//         components={[
//           { id: 1, name: 'Single Event Probability Calculator', key: 'probCalc', component: SingleEventProbabilityCalculator },
//           { id: 2, name: 'Two Independent Events Probability Calculator', key: 'probCalc', component: TwoIndependentEventsCalculator },
//         //   { id: 3, name: 'Discrete Distributions Calculator',  href: '/probability/calculators/discrete-distributions'  },
//         //   { id: 4, name: 'Continuous Distributions Calculator',  href: '/probability/calculators/continuous-distributions'  },
//         //   { id: 5, name: 'Joint Probability Calculator',  href: '/probability/calculators/joint-probability'  },
//         //   { id: 10, name: 'Conditional Probability Calculator',  href: '/probability/calculators/conditional-probability'  },
//         //   { id: 6, name: 'Two Events Probability Calculator',  href: '/probability/calculators/two-events'  },
//         //   { id: 7, name: 'Three Events Probability Calculator',  href: '/probability/calculators/three-events'  },
//         //   { id: 8, name: "Bayes' Theorem Calculator",  href: '/probability/calculators/bayes-calculator'  },
//         //   { id: 9, name: "Expected Value Calculators",  href: '/probability/calculators/expected-value'  },
//         ]}
//         initialActive={initialTab}
//         buttonMinWidth="160px"
//         primaryColor="#007bff"
//       />

//       <br/>
//       {/* <SectionTableOfContents sections={genericSections}/> */}
//       <br/>
//       <br/>
//       <br/>
//       {/* <Sections sections={genericSections}/> */}
//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
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
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import SingleEventProbabilityCalculator from '@/app/components/calculators/probability/SingleEventCalculator'
import { useSearchParams } from 'next/navigation'
import TwoIndependentEventsCalculator from '@/app/components/calculators/probability/TwoIndependentEventsCalculator'

export async function getStaticProps(){

  const keyWords = [
    'probability calculator',
    'calculate probability online',
    'probability calculator with steps',
    'free probability calculator',
    'interactive probability tools',
    'conditional probability calculator',
    'joint probability calculator',
    'Bayes theorem calculator',
    'probability distribution calculator',
    'expected value calculator',
    'discrete probability calculator',
    'continuous probability calculator',
    'multiple events probability',
    'probability formula calculator',
    'statistical probability tool'
  ]

  const sectionsContent = {
    obj1: {
      title: `What Are Probability Calculators?`,
      content: `Probability calculators are interactive tools that compute the likelihood of events occurring based on mathematical probability theory. These calculators handle everything from simple single-event probabilities to complex scenarios involving multiple events, conditional relationships, and probability distributions.

Each calculator is designed for specific probability scenarios. Some compute basic event probabilities, while others handle **conditional probability**, **joint probability**, or apply specialized theorems like **Bayes' theorem**. Distribution calculators work with both **discrete probability distributions** (like binomial or Poisson) and **continuous distributions** (like normal or exponential).

Using these calculators saves time and reduces calculation errors. Instead of manually computing complex probability formulas, you input your parameters and receive instant, accurate results with step-by-step explanations where applicable.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj2: {
      title: `Types of Probability Calculators`,
      content: `Our probability calculator suite includes 10 specialized tools, each targeting different probability scenarios:

**Basic Event Calculators** compute probabilities for single events and independent multiple events. These are ideal for straightforward scenarios like dice rolls, coin flips, or card draws.

**Distribution Calculators** handle both discrete and continuous probability distributions. Use these when working with random variables that follow specific statistical patterns like binomial, normal, Poisson, or exponential distributions.

**Advanced Calculators** include tools for **conditional probability** (events dependent on prior outcomes), **joint probability** (multiple events occurring together), **Bayes' theorem** (updating probabilities with new evidence), and **expected value** (calculating average outcomes).

Each calculator type serves distinct purposes. Understanding which category fits your problem helps you choose the right tool quickly.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj3: {
      title: `Single Event vs Multiple Event Calculators`,
      content: `The **Single Event Probability Calculator** handles the simplest probability scenarios: what's the likelihood of one specific outcome? Input the number of favorable outcomes and total possible outcomes to get your probability. This calculator is perfect for questions like "What's the probability of rolling a 6?" or "What are the odds of drawing an ace?"

The **Two Independent Events Calculator** steps up complexity by computing probabilities when two separate events occur. This handles scenarios where events don't affect each other, such as flipping two coins or rolling two dice simultaneously. It calculates probabilities for both events occurring (AND), either event occurring (OR), or exactly one occurring (XOR).

For scenarios with three or more events, the **Three Events Probability Calculator** extends these concepts further. Choose this when dealing with multiple independent outcomes that need combined probability analysis.

The key distinction: single event for one outcome, multiple events when analyzing combinations or sequences of outcomes.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj4: {
      title: `Choosing the Right Calculator`,
      content: `Select your calculator based on the nature of your probability question:

**Use Single Event Calculator when:** You need the probability of one specific outcome from one trial or experiment.

**Use Two/Three Events Calculator when:** You're analyzing multiple independent events and need to know combined probabilities (both occurring, either occurring, etc.).

**Use Distribution Calculators when:** Your problem involves a random variable following a known distribution pattern. Choose discrete for countable outcomes (binomial, Poisson) or continuous for measured values (normal, exponential).

**Use Conditional Probability Calculator when:** The probability of an event depends on whether another event has already occurred. These are "given that" scenarios: P(A|B).

**Use Joint Probability Calculator when:** You need the probability of two events occurring together, especially when they're not independent.

**Use Bayes' Theorem Calculator when:** You're updating probabilities based on new evidence or information.

**Use Expected Value Calculator when:** You need to find the average outcome of a probability distribution or gambling scenario.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj5: {
      title: `Distribution Calculators: Discrete vs Continuous`,
      content: `**Discrete Distribution Calculators** work with countable outcomes. If you can list all possible values (0, 1, 2, 3...), use a discrete distribution. Common discrete distributions include:

• **Binomial Distribution**: Fixed number of trials, two possible outcomes per trial (success/failure)
• **Poisson Distribution**: Events occurring in fixed intervals of time or space
• **Geometric Distribution**: Number of trials until first success

**Continuous Distribution Calculators** handle measurements that can take any value within a range. Use these for continuous variables like height, time, temperature, or any measurement. Common continuous distributions include:

• **Normal Distribution**: Bell-shaped curve, describes many natural phenomena
• **Exponential Distribution**: Time between events in a Poisson process
• **Uniform Distribution**: All values equally likely within a range

The distinction is simple: Can you count the possibilities? Use discrete. Are you measuring a continuous quantity? Use continuous.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj6: {
      title: `Conditional and Joint Probability`,
      content: `**Conditional Probability** answers questions in the form "What's the probability of A happening given that B has already occurred?" This is written as P(A|B). The **Conditional Probability Calculator** is essential for dependent events where one outcome affects another.

Common scenarios include: medical testing (probability of disease given a positive test), quality control (probability of defect given a specific production line), or card games (probability of drawing a heart given you've already drawn one card).

**Joint Probability** calculates P(A ∩ B)—the probability that both events A and B occur together. Unlike conditional probability, joint probability doesn't assume one event has already happened. The **Joint Probability Calculator** handles scenarios where you need the probability of simultaneous or combined outcomes.

These calculators are crucial for more sophisticated probability problems where events interact or occur in sequence. Many real-world scenarios involve conditional or joint probabilities rather than simple independent events.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj7: {
      title: `Bayes' Theorem and Expected Value Calculators`,
      content: `**Bayes' Theorem Calculator** is a specialized tool for updating probabilities when new evidence becomes available. It's fundamental in statistics, machine learning, and decision-making under uncertainty. Bayes' theorem answers: "Given this new information, how should I revise my probability estimate?"

Classic applications include medical diagnosis (updating disease probability after test results), spam filtering, and risk assessment. The calculator handles the complex formula P(A|B) = P(B|A) × P(A) / P(B), which involves several probability values.

**Expected Value Calculators** compute the average outcome you'd expect over many repetitions of a probability experiment. This is crucial for decision-making in gambling, investing, insurance, and any scenario where you weigh outcomes by their probabilities.

Expected value, written as E(X), multiplies each possible outcome by its probability and sums the results. It tells you the long-run average, helping you make rational decisions even when individual outcomes are uncertain.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj8: {
      title: `Common Use Cases by Field`,
      content: `**Statistics and Data Science**: Distribution calculators for analyzing data patterns, **conditional probability** for predictive modeling, Bayes' theorem for Bayesian inference.

**Gambling and Games**: Single and multiple event calculators for computing odds in dice games, card games, roulette. Expected value calculators for determining game fairness and optimal betting strategies.

**Medical and Healthcare**: Conditional probability for interpreting diagnostic test accuracy, Bayes' theorem for disease probability given test results, distribution calculators for epidemiological modeling.

**Business and Finance**: Expected value for investment decisions and risk assessment, distribution calculators for sales forecasting and quality control, joint probability for market analysis.

**Education and Learning**: All calculators serve as learning tools for probability theory, helping students verify homework, explore concepts interactively, and build intuition about probability relationships.

**Engineering and Quality Control**: Distribution calculators for reliability analysis, conditional probability for failure prediction, Poisson distribution for defect rates.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj9: {
      title: `Quick Reference Guide`,
      content: `**For Simple Questions:**
• "What's the probability of X?" → Single Event Calculator
• "Odds of both A and B?" → Two Independent Events Calculator

**For Distributions:**
• Countable outcomes (dice rolls, defects) → Discrete Distributions
• Measured values (time, height) → Continuous Distributions
• Bell curve scenarios → Normal distribution in Continuous

**For Conditional Scenarios:**
• "Probability of A given B" → Conditional Probability Calculator
• "Both A and B together" → Joint Probability Calculator

**For Special Applications:**
• Updating probabilities with evidence → Bayes' Theorem Calculator
• Average outcome calculation → Expected Value Calculator
• Three or more events → Three Events Calculator

Each calculator provides immediate results. For learning, most include step-by-step explanations showing the formulas and logic behind the calculations.`,
      before: ``,
      after: ``,
      link: ''
    },

    obj10: {
      title: `Related Probability Resources`,
      content: `Beyond these calculators, explore our comprehensive probability learning resources:

**Visual Tools** provide interactive demonstrations of probability concepts. See **conditional probability visualizations** with tree diagrams, Venn diagrams, and waffle charts that make abstract concepts concrete.

**Theoretical Guides** cover fundamental concepts in depth. Learn about **probability theory**, **probability distributions**, **Bayes' theorem**, **expected value**, and **random variables**.

**Practice Problems** let you apply calculator results to real scenarios. Work through examples from gambling, statistics, quality control, and medical testing.

**Advanced Topics** include **joint and marginal probability**, **probability density functions**, **cumulative distribution functions**, and **moment generating functions**.

These resources complement the calculators by building conceptual understanding. Use calculators for computation, and use visual tools and guides for learning the underlying theory and intuition.`,
      before: ``,
      after: ``,
      link: ''
    }
  }

  const faqQuestions = {
    obj1: {
      question: "Which probability calculator should I use for my problem?",
      answer: "Start by identifying your scenario type. Use the Single Event Calculator for one outcome, Two/Three Events Calculators for independent multiple events, Distribution Calculators when working with specific probability distributions (binomial, normal, etc.), Conditional Probability Calculator for dependent events, and Bayes' Theorem Calculator when updating probabilities with new evidence."
    },
    obj2: {
      question: "What's the difference between discrete and continuous probability calculators?",
      answer: "Discrete calculators work with countable outcomes (number of successes, number of events) and use distributions like binomial or Poisson. Continuous calculators handle measurable quantities that can take any value in a range (time, weight, height) and use distributions like normal or exponential. If you can count your outcomes, use discrete; if you're measuring something, use continuous."
    },
    obj3: {
      question: "When do I need a conditional probability calculator versus a joint probability calculator?",
      answer: "Use conditional probability when one event has already occurred and you want the probability of another event given that information (P(A|B) - 'A given B'). Use joint probability when you need the probability of both events occurring together, without assuming one has already happened (P(A ∩ B) - 'A and B together')."
    },
    obj4: {
      question: "Can these calculators help me learn probability or are they just for computing answers?",
      answer: "These calculators serve both purposes. They provide accurate computations for homework and real-world problems, but many also show step-by-step explanations of the formulas and logic. Use them to verify your manual calculations, explore how probability changes with different inputs, and build intuition about probability relationships."
    },
    obj5: {
      question: "What is expected value and when should I calculate it?",
      answer: "Expected value is the long-run average outcome of a probability scenario. Calculate it when making decisions involving uncertain outcomes, such as evaluating gambling games, comparing investment options, pricing insurance, or any situation where you need to know the average result across many repetitions of a random process."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Probability Calculator Suite",
      "description": "Comprehensive collection of 10 interactive probability calculators for single events, multiple events, distributions, conditional probability, Bayes' theorem, and expected value.",
      "url": "https://www.learnmathclass.com/probability/calculators",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Single event probability calculator with instant results",
        "Two and three independent events calculators",
        "Discrete probability distributions (binomial, Poisson, geometric)",
        "Continuous probability distributions (normal, exponential, uniform)",
        "Conditional probability calculator for dependent events",
        "Joint probability calculator for combined events",
        "Bayes' theorem calculator for probability updating",
        "Expected value calculator for average outcome analysis",
        "Step-by-step explanations for learning",
        "Interactive parameter adjustment with real-time results"
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
          "name": "Probability Calculators",
          "item": "https://www.learnmathclass.com/probability/calculators"
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

  return {
    props: {
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Probability Calculators - 10 Free Interactive Tools | Learn Math Class",
        description: "Calculate probabilities instantly with 10 specialized calculators: single events, multiple events, distributions, conditional probability, Bayes' theorem, and expected value.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/basic",
        name: "Probability Calculator Suite"
      }
    }
  }
}

export default function ProbabilityCalculator({seoData, sectionsContent, faqQuestions, schemas}) {

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
      
      <h1 className='title' style={{marginTop:'-60px',marginBottom:'-0px'}}>Basic Probability Calculators</h1>
      
      <br/>
      
      <GenericMultiComponentFrame
        paramName="calc"
        defaultSlug="single-event"
        components={[
          { 
            id: 1, 
            name: 'Single Event Probability Calculator', 
            slug: 'single-event',
            key: 'probCalc', 
            component: SingleEventProbabilityCalculator 
          },
          { 
            id: 2, 
            name: 'Two Independent Events Probability Calculator', 
            slug: 'two-independent-events',
            key: 'probCalc', 
            component: TwoIndependentEventsCalculator 
          },
        //   { id: 3, name: 'Discrete Distributions Calculator',  href: '/probability/calculators/discrete-distributions'  },
        //   { id: 4, name: 'Continuous Distributions Calculator',  href: '/probability/calculators/continuous-distributions'  },
        //   { id: 5, name: 'Joint Probability Calculator',  href: '/probability/calculators/joint-probability'  },
        //   { id: 10, name: 'Conditional Probability Calculator',  href: '/probability/calculators/conditional-probability'  },
        //   { id: 6, name: 'Two Events Probability Calculator',  href: '/probability/calculators/two-events'  },
        //   { id: 7, name: 'Three Events Probability Calculator',  href: '/probability/calculators/three-events'  },
        //   { id: 8, name: "Bayes' Theorem Calculator",  href: '/probability/calculators/bayes-calculator'  },
        //   { id: 9, name: "Expected Value Calculators",  href: '/probability/calculators/expected-value'  },
        ]}
        buttonMinWidth="160px"
        primaryColor="#007bff"
      />

      <br/>
      {/* <SectionTableOfContents sections={genericSections}/> */}
      <br/>
      <br/>
      <br/>
      {/* <Sections sections={genericSections}/> */}
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}