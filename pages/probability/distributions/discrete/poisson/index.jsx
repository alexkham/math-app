


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../../pages/pages.css'
// import Head from 'next/head'
// import { processContent } from '@/app/utils/contentProcessor'
// import PoissonDistribution from '@/app/components/visualizations/probability/discrete-distribution/PoissonDistributionPMF'
// import PoissonDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/PoissonDistributionCDF'
// import CalculatorInstructions from '@/app/components/calculators/CalculatorInstructions'
// import PoissonCalculator from '@/app/components/calculators/probability/distributions/PoissonDistributionCalculator'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'

// export async function getStaticProps(){

//   const keyWords = [
//     'poisson distribution',
//     'poisson distribution formula',
//     'poisson probability',
//     'poisson PMF',
//     'poisson CDF',
//     'lambda parameter',
//     'event rate distribution',
//     'poisson mean variance',
//     'poisson distribution calculator',
//     'discrete probability distribution',
//     'rare events probability',
//     'poisson binomial approximation',
//     'counting events distribution',
//     'poisson distribution examples'
//   ]

//     const sectionsContent={

//       obj0: {
//   title: `Key Terms`,
//   content: `
// - [Poisson Distribution](!/probability/definitions#poisson_distribution) — counts events in a fixed interval at constant rate $\\lambda$
// - [Expected Value](!/probability/definitions#expected_value) — $E[X] = \\lambda$
// - [Variance](!/probability/definitions#variance) — $\\operatorname{Var}(X) = \\lambda$ (equals the mean)
// - [Exponential Distribution](!/probability/definitions#exponential_distribution) — models the waiting time between Poisson events`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },

//     obj1:{
//       title:`The Probabilistic Experiment Behind Poisson distribution`,
//       content:`
//       The Poisson distribution models the number of events occurring in a fixed interval of time or space, when [events](!/probability/events) happen [independently](!/probability/independence) at a constant average rate. Unlike other [discrete distributions](!/probability/distributions/discrete), it does not rely on repeated [Bernoulli trials](!/probability/distributions/discrete#bernoulli) or success–failure experiments.

// The defining idea is event intensity, not trial structure. [Events](!/probability/events) are assumed to occur randomly but with a stable long-run average frequency. The [random variable](!/probability/random-variables) represents the number of events that occur in any given interval of time, regardless of when they occur within it.

// The Poisson distribution is especially effective for representing rare or spontaneous events, and it often arises as an approximation to the [binomial distribution](!/probability/distributions/discrete/binomial) when the number of trials is large and the probability of success is small.
     
// `,
//       before:``,
//       after:``,
//       link:'',
//       example:`
//       **Example**:

// Counting the number of emails received by a support desk in one hour when emails arrive randomly but at a stable average rate. The exact timing does not matter — only the total count within the hour.
//       `,
  
  
//     },
//     obj2:{
//       title:`Parameters`,
//       content:`
//       $𝜆$: the average rate (mean number of events), with $𝜆>0$

//       The Poisson distribution models the number of events occurring in a fixed interval of time or space, assuming events happen independently and at a constant average rate $𝜆$. 

//       It describes counts: $0, 1, 2, ...,$ with probabilities determined by how large or small $𝜆$ is. 

//       The single parameter $𝜆$ controls both the mean and the variance of the distribution.
//       `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:`Support (Range)`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:`Probability Mass Function (PMF) and Support (Range)`,
//       content:`
//       The **probability mass function (PMF)** of a **Poisson distribution** is given by:

// $$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0, 1, 2, \\ldots$$

//  **Counting Rare Events**: The Poisson distribution models the number of events occurring in a fixed interval of time or space when events occur independently at a constant average rate.

//  **Support (Range of the Random Variable)**:
//   * The random variable $X$ can take on values $0, 1, 2, 3, \\ldots$ (all non-negative integers).
//   * $X = k$ means exactly $k$ events occur in the interval.
//   * The **support** is thus a countably infinite set.

//  **Logic Behind the Formula**:
//   * $\\lambda^k$: Represents the rate parameter raised to the power of the number of events
//   * $e^{-\\lambda}$: The exponential decay factor ensuring probabilities sum to 1
//   * $k!$: Accounts for the number of ways $k$ events can be ordered
//   * The total probability sums to 1:
  
//   $$\\sum_{k=0}^{\\infty} P(X = k) = \\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1$$
  
//    This uses the Taylor series expansion: $e^{\\lambda} = \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!}$

//       `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
   
//    obj5:{
//   title:`Cumulative Distribution Function (CDF)`,
//   content:`
// The [cumulative distribution function (CDF)](!/probability/cdf) of a **Poisson distribution** is given by:

// $$F_X(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\frac{\\lambda^i e^{-\\lambda}}{i!}$$

// Where:
// $\\lambda$ = average rate of occurrence (expected number of events, $\\lambda > 0$)
// $k$ = number of events observed (where $k = 0, 1, 2, 3, \\ldots$)
// $e$ = Euler's number (approximately 2.71828)

// ### Intuition Behind the Formula

// **Definition**: The [CDF](!/probability/cdf) gives the probability of observing $k$ or fewer events in a fixed interval of time or space.

// **Summation of Probabilities**: 
// We sum the individual probabilities from 0 events up to $k$ events:

// $$P(X \\leq k) = P(X=0) + P(X=1) + P(X=2) + \\cdots + P(X=k)$$

// **Alternative Formulation via Incomplete Gamma Function**:
// The CDF can be expressed using the regularized incomplete gamma function:

// $$F_X(k) = \\frac{\\Gamma(k+1, \\lambda)}{k!} = Q(k+1, \\lambda)$$

// This relationship is often used in statistical software for efficient computation, especially for large values of $k$.

// **Complementary Probability**: 
// For "more than $k$ events":

// $$P(X > k) = 1 - F_X(k)$$

// **Infinite Support**: Unlike finite discrete distributions, the Poisson distribution has infinite support ($k$ can be arbitrarily large), though probabilities decrease rapidly for $k \\gg \\lambda$.
//   `,
//   before:``,
//   after:``,
//   link:'',
// },
   
//    obj6: {
//   title: `Expected Value (Mean)`,
//   content: `
// As explained in the [general case for calculating expected value](!/probability/expected-value#general), the expected value of a discrete random variable is computed as a weighted sum where each possible value is multiplied by its probability:

// $$E[X] = \\sum_{x} x \\cdot P(X = x)$$

// For the **Poisson distribution**, we apply this general formula to the specific probability mass function of this distribution.

// ### Formula

// $$E[X] = \\lambda$$

// Where:
// $\\lambda$ = average rate of occurrence (expected number of events per interval)

// ### Derivation and Intuition

// Starting from the general definition and substituting the PMF $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$:

// $$E[X] = \\sum_{k=0}^{\\infty} k \\cdot \\frac{\\lambda^k e^{-\\lambda}}{k!}$$

// The $k = 0$ term vanishes, so we start from $k = 1$:

// $$E[X] = \\sum_{k=1}^{\\infty} k \\cdot \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=1}^{\\infty} \\frac{k \\cdot \\lambda^k}{k!} = e^{-\\lambda} \\sum_{k=1}^{\\infty} \\frac{\\lambda^k}{(k-1)!}$$

// Substituting $j = k - 1$:

// $$E[X] = e^{-\\lambda} \\lambda \\sum_{j=0}^{\\infty} \\frac{\\lambda^j}{j!} = e^{-\\lambda} \\lambda \\cdot e^{\\lambda} = \\lambda$$

// The result $E[X] = \\lambda$ has a particularly elegant interpretation: the parameter $\\lambda$ is both the rate of occurrence and the expected value. The Poisson distribution is parameterized directly by its mean.

// ### Example

// Consider phone calls arriving at a call center at an average rate of $\\lambda = 12$ calls per hour:

// $$E[X] = 12$$

// The expected number of calls in one hour is exactly 12, which is the defining parameter of the distribution. This self-referential property makes the Poisson distribution especially natural for modeling count data.
//   `,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj7: {
//   title: `Variance and Standard Deviation`,
//   content: `
// The [variance](!/probability/variance#calculate) of a discrete random variable measures how spread out the values are around the expected value. It is computed as:

// $$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\sum_{x} (x - \\mu)^2 P(X = x)$$

// Or using the shortcut formula:

// $$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2$$

// For the **Poisson distribution**, we apply this formula to derive the variance.

// ### Formula

// $$\\mathrm{Var}(X) = \\lambda$$

// Where:
// $\\lambda$ = average rate of occurrence (expected number of events per interval)

// ### Derivation and Intuition

// Starting with the shortcut formula, we need to calculate $\\mathbb{E}[X^2]$.

// We know from the expected value section that $\\mu = \\lambda$.

// Using the PMF $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$:

// $$\\mathbb{E}[X^2] = \\sum_{k=0}^{\\infty} k^2 \\cdot \\frac{\\lambda^k e^{-\\lambda}}{k!}$$

// Through algebraic manipulation using properties of the exponential series:

// $$\\mathbb{E}[X^2] = \\lambda^2 + \\lambda$$

// Applying the shortcut formula:

// $$\\mathrm{Var}(X) = (\\lambda^2 + \\lambda) - \\lambda^2 = \\lambda$$

// The result $\\mathrm{Var}(X) = \\lambda$ reveals a remarkable property: **the Poisson distribution's variance equals its mean**. This makes the Poisson distribution unique among common distributions. The single parameter $\\lambda$ completely determines both the center and the spread of the distribution.

// This property provides a practical test: if observed count data has variance approximately equal to its mean, the Poisson distribution may be an appropriate model.

// ### Standard Deviation

// $$\\sigma = \\sqrt{\\lambda}$$

// ### Example

// Consider phone calls arriving at a rate of $\\lambda = 16$ calls per hour:

// $$\\mathrm{Var}(X) = 16$$

// $$\\sigma = \\sqrt{16} = 4$$

// The variance equals the expected value (16), and the standard deviation of 4 indicates that in most hours, the number of calls will fall within roughly 12 to 20 calls (within one standard deviation of the mean).
//   `,
//   before: ``,
//   after: ``,
//   link: '',
// },

//     obj8: {
//   title: `Mode and Median`,
//   content: `### Mode

// The [mode](!/probability/mode) is the value of $k$ (number of events) with the highest probability—the peak of the [PMF](!/probability/probability-function/pmf).

// For the Poisson distribution, the mode depends on the parameter $\\lambda$:

// **If** $\\lambda$ **is an integer:**
// The distribution has two modes: $\\lambda - 1$ and $\\lambda$

// **If** $\\lambda$ **is not an integer:**
// The mode is $\\lfloor \\lambda \\rfloor$

// **Intuition:** The mode sits at or just below the [expected value](!/probability/expected-value) $\\lambda$, representing the most likely number of events. The Poisson distribution models rare events, and the mode indicates the count that balances the competing effects of increasing event likelihood with decreasing probability of higher counts.

// **Example:**
//  For $\\lambda = 4.7$:

// Mode = $\\lfloor 4.7 \\rfloor = 4$

// Getting exactly 4 events is more likely than any other outcome.

// **Example:**
//  For $\\lambda = 5$:

// Modes = 4 and 5 (both equally likely)

// ### Median

// The [median](!/probability/median) is the value $m$ such that $P(X \\leq m) \\geq 0.5$ and $P(X \\geq m) \\geq 0.5$.

// For the Poisson distribution, there is no simple closed-form expression for the median, but it can be found numerically by solving:

// $$\\sum_{k=0}^{m} \\frac{\\lambda^k e^{-\\lambda}}{k!} \\geq 0.5$$

// **Properties of the median:**
// • The median is approximately $\\lambda + \\frac{1}{3} - \\frac{0.02}{\\lambda}$ for large $\\lambda$
// • For integer $\\lambda$, median $\\approx \\lambda$
// • The distribution approaches symmetry as $\\lambda$ increases

// **Example:**
// For $\\lambda = 5$:
// Mean = 5

// The median is approximately 5 (nearly symmetric)

// **Example:** 
// For $\\lambda = 2$:
// Mean = 2

// The median is approximately 2 (found numerically)

// Unlike continuous distributions where finding the median requires integration, for [discrete](!/probability/distributions/discrete) distributions, the median is found by summing probabilities until reaching 0.5.
  
// `,
//   before: ``,
//   after: ``,
//   link: '',
// },
//     obj9:{
//       title:`Moment Generating Function`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:`Key Properties`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:`Applications and Examples`,
//       content:`
//       ### Practical Example

// Suppose a call center receives an average of $\\lambda = 4$ calls per hour. The probability of receiving exactly $k = 6$ calls in a given hour is:

// $P(X = 6) = \\frac{4^6 e^{-4}}{6!} = \\frac{4096 \\cdot 0.0183}{720} \\approx 0.104$

// This means there's about a 10.4% chance of receiving exactly 6 calls in an hour.

// Note: The Poisson distribution is often used as an approximation to the binomial distribution when $n$ is large and $p$ is small, with $\\lambda = np$.
//       `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:`Interactive Calculator`,
//       content:`
//       This interactive calculator computes probabilities for the Poisson distribution, which models the number of events occurring in a fixed interval of time or space. Enter the average rate ($λ$) of events and choose whether you want the full distribution or specific probabilities like $P(X=k)$ or $P(X≤k)$ to analyze event frequencies. Essential for modeling customer arrivals, website traffic, defect rates, or any situation involving rare events occurring at a constant average rate.
      
//       `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:`Special / Limiting Cases (optional)`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:`Related Distributions`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:`Notation Used`,
//       content:`
// $X \\sim \\text{Poisson}(\\lambda)$ or $X \\sim \\mathcal{P}(\\lambda)$ — **distribution of the random variable**.

// $\\text{Poisson}(\\lambda)$ — **used to denote the distribution itself (not the random variable)**.

// $\\text{P}(\\lambda)$ — **sometimes used informally, especially in compact notation**.

// $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad \\text{for } k = 0, 1, 2, \\ldots$ — **probability mass function (PMF)**, where:

// \t$\\lambda$ — average rate of occurrence (expected number of events in the interval)

// \t$k$ — number of events observed

// \t$e \\approx 2.71828$ — Euler's number (base of natural logarithm)

// **Key properties:**

// \t$E[X] = \\lambda$ — expected value (mean)

// \t$\\text{Var}(X) = \\lambda$ — variance (equal to the mean)

// **Relationship to binomial distribution:**

// \t$\\text{Poisson}(\\lambda) \\approx \\text{Binomial}(n, p)$ where $\\lambda = np$, when $n$ is large and $p$ is small (rare events approximation)

      
//       @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
//       `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj16:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//      links:{
//       decide:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn More About Distinguishing Discrete Distributions](!/probability/distributions/discrete#decide) →@
//         `,
//         example:`
//          @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Poisson Distribution](!/probability/distributions/discrete/poisson#11) →@
//             `,
//                calculators:`            
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Discrete Distributions Probability Calculators ](!/probability/calculators/discrete-distributions) →@
//         `,
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//   }

//   const introContent = {
//   id: "intro",
//   title: "Poisson Distribution: Event Counts Over an Interval",
//   content: `
//   The Poisson distribution models an experiment where events occur randomly over a continuous interval of time or space at a constant average rate. There are no discrete trials and no fixed number of opportunities; instead, the experiment observes how many events happen within a given interval. The defining assumptions are independence of events and stability of the average rate, making this distribution suitable for modeling counts of rare or spontaneous occurrences.
//   `
// }

// const poissonExplanations = {
//   "How to use": "1. Select probability type: 'All values' for full distribution, or choose a specific query\n2. Enter λ (lambda - average rate) - average number of events per time/space interval\n3. For specific queries, enter k (number of events) - the target event count\n4. Click Calculate to see probabilities and distribution",
  
//   "Parameters": "• λ (lambda): Average number of events per interval (must be positive)\n• k (number of events): Specific count of events you're querying (non-negative integer)\n• λ also equals both the mean and variance of the distribution",
  
//   "Query types": "• P(X = k): Probability of exactly k events occurring\n• P(X < k): Probability of fewer than k events occurring\n• P(X ≤ k): Probability of k or fewer events occurring\n• P(X > k): Probability of more than k events occurring\n• P(X ≥ k): Probability of k or more events occurring",
  
//   "Examples": "Customer service: Average 4 calls per hour (λ=4). Select P(X=5) and enter k=5 to find probability of exactly 5 calls in next hour.\n\nWebsite traffic: Average 12 visits per minute (λ=12). Select P(X≤8) and enter k=8 to find probability of at most 8 visits in next minute.\n\nDefect rate: Average 2 defects per batch (λ=2). Select 'All values' to see full distribution of defects per batch.",
  
//   "Interpretation": "• Mean (μ = λ): Expected number of events per interval\n• Variance (σ² = λ): Variability equals the mean for Poisson distribution\n• Std Dev (σ = √λ): Typical deviation from expected event count\n• Chart: Shows probability distribution - shape becomes more symmetric as λ increases"
// };

//   const faqQuestions = {
//     obj1: {
//       question: "What is the Poisson distribution?",
//       answer: "The Poisson distribution models the number of events occurring in a fixed interval of time or space when events happen independently at a constant average rate λ. Unlike binomial or geometric distributions, it doesn't involve discrete trials—it counts random occurrences like customer arrivals, website hits, or defects."
//     },
//     obj2: {
//       question: "What is the Poisson probability formula?",
//       answer: "The probability of exactly k events is P(X = k) = (λ^k × e^(-λ)) / k!, where λ is the average rate, e is Euler's number (≈2.718), and k! is k factorial. The formula uses the exponential function to ensure all probabilities sum to 1."
//     },
//     obj3: {
//       question: "Why does Poisson variance equal the mean?",
//       answer: "The Poisson distribution has a unique property: both mean and variance equal λ. This occurs because the single parameter λ completely determines the distribution's shape. This equality provides a practical diagnostic: if observed count data has variance approximately equal to its mean, Poisson may be appropriate."
//     },
//     obj4: {
//       question: "When should you use the Poisson distribution?",
//       answer: "Use Poisson when counting events that occur randomly and independently at a constant average rate over time or space. Common applications include call center arrivals, website traffic, radioactive decay, manufacturing defects, and accident frequencies. It's ideal when events are rare relative to the observation window."
//     },
//     obj5: {
//       question: "How is Poisson related to binomial distribution?",
//       answer: "Poisson approximates binomial when n (trials) is large and p (success probability) is small, with λ = np. This 'law of rare events' shows that counting rare successes in many trials behaves like Poisson. Rule of thumb: use Poisson approximation when n > 20 and p < 0.05."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Poisson Distribution",
//       "description": "Learn the Poisson distribution for modeling event counts. Understand PMF, CDF, mean and variance both equal λ, and binomial approximation for rare events.",
//       "url": "https://www.learnmathclass.com/probability/distributions/discrete/poisson",
//       "inLanguage": "en-US",
//       "learningResourceType": "Explanation",
//       "educationalLevel": "High School, College",
//       "educationalUse": "Learning",
//       "audience": {
//         "@type": "EducationalAudience",
//         "educationalRole": "student"
//       },
//       "about": {
//         "@type": "Thing",
//         "name": "Poisson Distribution"
//       },
//       "teaches": [
//         "How Poisson distribution models event counts over intervals",
//         "The probability mass function with exponential and factorial terms",
//         "The unique property that mean and variance both equal λ",
//         "Poisson as approximation to binomial for rare events",
//         "Finding mode and median of Poisson distributions",
//         "Real-world applications like arrivals and defect counting"
//       ],
//       "keywords": keyWords.join(", "),
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString()
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
//           "name": "Distributions",
//           "item": "https://www.learnmathclass.com/probability/distributions"
//         },
//         {
//           "@type": "ListItem",
//           "position": 4,
//           "name": "Discrete",
//           "item": "https://www.learnmathclass.com/probability/distributions/discrete"
//         },
//         {
//           "@type": "ListItem",
//           "position": 5,
//           "name": "Poisson Distribution",
//           "item": "https://www.learnmathclass.com/probability/distributions/discrete/poisson"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          poissonExplanations,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Poisson Distribution: Event Counts & Rate Parameter | Learn Math Class",
//         description: "Learn the Poisson distribution for modeling event counts. Understand PMF, CDF, mean and variance both equal λ, and binomial approximation for rare events.",
//         keywords: keyWords.join(", "),
//         url: "/probability/distributions/discrete/poisson",
//         name: "Poisson Distribution"
//       },
        
//        }
//     }
//    }

// export default function PoissonDistributionPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   poissonExplanations,
//   faqQuestions,
//   schemas
// }) {

    
//   const genericSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//           sectionsContent.obj0.after,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//            sectionsContent.obj1.content,
//           sectionsContent.links.decide,
//           sectionsContent.obj1.example,
//           sectionsContent.links.example,
//         ]
//     },
//      {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
          
//       <div key={'notation-poisson'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//                 {processContent(sectionsContent.obj15.content,)}
//             </div>,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//             <div key={'parameters-poisson'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//                         {processContent( sectionsContent.obj2.content)}
//                     </div>,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//         <div key={'pmf-poisson'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//         {processContent(sectionsContent.obj4.content)}
//         </div>,

//         <div key={'poisson-pmf-visualization'} style={{transform:'scale(0.8)'}}>
     
//       <PoissonDistribution/>
//       </div>
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//            <div key={'poisson-cdf-visualization'} style={{transform:'scale(0.8)'}}>
     
     
//       <PoissonDistributionCDF/>
//       </div>
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//            sectionsContent.obj12.content,
//                     <CalculatorInstructions key={'explanations'} explanations={poissonExplanations}/>,
//                     <div key={'calculator'} style={{marginBottom:'-350px'}}>
//                     <PoissonCalculator />,
//                     </div>,
//                     sectionsContent.links.calculators,
//         ]
//     },
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Poisson Distribution</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//     secondaryNavMode="siblings"
//     secondaryNavTitle="Other Discrete Distributions" 
   
   
//    />
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
//      <KeyTermsCard
//   id="0"
//   title={sectionsContent.obj0.title}
//   content={sectionsContent.obj0.content}
//   after={sectionsContent.obj0.after}
//   variant="light"
// />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-23 | 1 table (obj16 summary capstone)


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../../pages/pages.css'
import Head from 'next/head'
import { processContent } from '@/app/utils/contentProcessor'
import PoissonDistribution from '@/app/components/visualizations/probability/discrete-distribution/PoissonDistributionPMF'
import PoissonDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/PoissonDistributionCDF'
import CalculatorInstructions from '@/app/components/calculators/CalculatorInstructions'
import PoissonCalculator from '@/app/components/calculators/probability/distributions/PoissonDistributionCalculator'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'

export async function getStaticProps(){

  const keyWords = [
    'poisson distribution',
    'poisson distribution formula',
    'poisson probability',
    'poisson PMF',
    'poisson CDF',
    'lambda parameter',
    'event rate distribution',
    'poisson mean variance',
    'poisson distribution calculator',
    'discrete probability distribution',
    'rare events probability',
    'poisson binomial approximation',
    'counting events distribution',
    'poisson distribution examples'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLE ----------

  // obj16 — summary capstone: Poisson at a Glance
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Aspect</th>
      <th style="${tableHeaders.summary}">Formula / statement</th>
      <th style="${tableHeaders.summary}">Note / example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Parameter</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">λ &gt; 0 — average rate (events per interval)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">events occur independently at a constant rate</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Support</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">k ∈ {0, 1, 2, ...}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">countably infinite — no upper limit on count</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/probability-function/pmf" style="${linkStyle}">PMF</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = k) = λ<sup>k</sup> e<sup>−λ</sup> / k!</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">normalized via the Taylor series e<sup>λ</sup> = ∑ λ<sup>k</sup>/k!</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/cdf" style="${linkStyle}">CDF</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">F(k) = ∑<sub>i=0</sub><sup>k</sup> λ<sup>i</sup> e<sup>−λ</sup> / i!</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no simple closed form; computed via the regularized incomplete gamma</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/expected-value" style="${linkStyle}">Expected value</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] = λ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the rate parameter <em>is</em> the mean</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/variance" style="${linkStyle}">Variance</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Var(X) = λ — equal to the mean</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">unique to Poisson; sample mean ≈ sample variance is a diagnostic for fit</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/mode" style="${linkStyle}">Mode</a> and <a href="/probability/median" style="${linkStyle}">median</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">mode = ⌊λ⌋ (or λ − 1 and λ when λ is an integer); median ≈ λ + 1/3 − 0.02/λ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distribution approaches symmetry as λ grows</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Binomial approximation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Poisson(λ) ≈ <a href="/probability/distributions/discrete/binomial" style="${linkStyle}">Binomial</a>(n, p) with λ = np, large n, small p</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the &quot;law of rare events&quot;; rule of thumb n &gt; 20, p &lt; 0.05</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Canonical example</td>
      <td style="padding: 12px 15px; color: #34495e;">call center receiving 12 calls/hour → λ = 12</td>
      <td style="padding: 12px 15px; color: #34495e;">E[X] = 12, Var(X) = 12, σ ≈ 3.46</td>
    </tr>
  </tbody>
</table>
`


    const sectionsContent={

      obj0: {
  title: `Key Terms`,
  content: `
- [Poisson Distribution](!/probability/definitions#poisson_distribution) — counts events in a fixed interval at constant rate $\\lambda$
- [Expected Value](!/probability/definitions#expected_value) — $E[X] = \\lambda$
- [Variance](!/probability/definitions#variance) — $\\operatorname{Var}(X) = \\lambda$ (equals the mean)
- [Exponential Distribution](!/probability/definitions#exponential_distribution) — models the waiting time between Poisson events`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

    obj1:{
      title:`The Probabilistic Experiment Behind Poisson distribution`,
      content:`
      The Poisson distribution models the number of events occurring in a fixed interval of time or space, when [events](!/probability/events) happen [independently](!/probability/independence) at a constant average rate. Unlike other [discrete distributions](!/probability/distributions/discrete), it does not rely on repeated [Bernoulli trials](!/probability/distributions/discrete#bernoulli) or success–failure experiments.

The defining idea is event intensity, not trial structure. [Events](!/probability/events) are assumed to occur randomly but with a stable long-run average frequency. The [random variable](!/probability/random-variables) represents the number of events that occur in any given interval of time, regardless of when they occur within it.

The Poisson distribution is especially effective for representing rare or spontaneous events, and it often arises as an approximation to the [binomial distribution](!/probability/distributions/discrete/binomial) when the number of trials is large and the probability of success is small.
     
`,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Counting the number of emails received by a support desk in one hour when emails arrive randomly but at a stable average rate. The exact timing does not matter — only the total count within the hour.
      `,
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
      $𝜆$: the average rate (mean number of events), with $𝜆>0$

      The Poisson distribution models the number of events occurring in a fixed interval of time or space, assuming events happen independently and at a constant average rate $𝜆$. 

      It describes counts: $0, 1, 2, ...,$ with probabilities determined by how large or small $𝜆$ is. 

      The single parameter $𝜆$ controls both the mean and the variance of the distribution.
      `,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Support (Range)`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Probability Mass Function (PMF) and Support (Range)`,
      content:`
      The **probability mass function (PMF)** of a **Poisson distribution** is given by:

$$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0, 1, 2, \\ldots$$

 **Counting Rare Events**: The Poisson distribution models the number of events occurring in a fixed interval of time or space when events occur independently at a constant average rate.

 **Support (Range of the Random Variable)**:
  * The random variable $X$ can take on values $0, 1, 2, 3, \\ldots$ (all non-negative integers).
  * $X = k$ means exactly $k$ events occur in the interval.
  * The **support** is thus a countably infinite set.

 **Logic Behind the Formula**:
  * $\\lambda^k$: Represents the rate parameter raised to the power of the number of events
  * $e^{-\\lambda}$: The exponential decay factor ensuring probabilities sum to 1
  * $k!$: Accounts for the number of ways $k$ events can be ordered
  * The total probability sums to 1:
  
  $$\\sum_{k=0}^{\\infty} P(X = k) = \\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1$$
  
   This uses the Taylor series expansion: $e^{\\lambda} = \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!}$

      `,
      before:``,
      after:``,
      link:'',
  
    },
   
   obj5:{
  title:`Cumulative Distribution Function (CDF)`,
  content:`
The [cumulative distribution function (CDF)](!/probability/cdf) of a **Poisson distribution** is given by:

$$F_X(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\frac{\\lambda^i e^{-\\lambda}}{i!}$$

Where:
$\\lambda$ = average rate of occurrence (expected number of events, $\\lambda > 0$)
$k$ = number of events observed (where $k = 0, 1, 2, 3, \\ldots$)
$e$ = Euler's number (approximately 2.71828)

### Intuition Behind the Formula

**Definition**: The [CDF](!/probability/cdf) gives the probability of observing $k$ or fewer events in a fixed interval of time or space.

**Summation of Probabilities**: 
We sum the individual probabilities from 0 events up to $k$ events:

$$P(X \\leq k) = P(X=0) + P(X=1) + P(X=2) + \\cdots + P(X=k)$$

**Alternative Formulation via Incomplete Gamma Function**:
The CDF can be expressed using the regularized incomplete gamma function:

$$F_X(k) = \\frac{\\Gamma(k+1, \\lambda)}{k!} = Q(k+1, \\lambda)$$

This relationship is often used in statistical software for efficient computation, especially for large values of $k$.

**Complementary Probability**: 
For "more than $k$ events":

$$P(X > k) = 1 - F_X(k)$$

**Infinite Support**: Unlike finite discrete distributions, the Poisson distribution has infinite support ($k$ can be arbitrarily large), though probabilities decrease rapidly for $k \\gg \\lambda$.
  `,
  before:``,
  after:``,
  link:'',
},
   
   obj6: {
  title: `Expected Value (Mean)`,
  content: `
As explained in the [general case for calculating expected value](!/probability/expected-value#general), the expected value of a discrete random variable is computed as a weighted sum where each possible value is multiplied by its probability:

$$E[X] = \\sum_{x} x \\cdot P(X = x)$$

For the **Poisson distribution**, we apply this general formula to the specific probability mass function of this distribution.

### Formula

$$E[X] = \\lambda$$

Where:
$\\lambda$ = average rate of occurrence (expected number of events per interval)

### Derivation and Intuition

Starting from the general definition and substituting the PMF $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$:

$$E[X] = \\sum_{k=0}^{\\infty} k \\cdot \\frac{\\lambda^k e^{-\\lambda}}{k!}$$

The $k = 0$ term vanishes, so we start from $k = 1$:

$$E[X] = \\sum_{k=1}^{\\infty} k \\cdot \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=1}^{\\infty} \\frac{k \\cdot \\lambda^k}{k!} = e^{-\\lambda} \\sum_{k=1}^{\\infty} \\frac{\\lambda^k}{(k-1)!}$$

Substituting $j = k - 1$:

$$E[X] = e^{-\\lambda} \\lambda \\sum_{j=0}^{\\infty} \\frac{\\lambda^j}{j!} = e^{-\\lambda} \\lambda \\cdot e^{\\lambda} = \\lambda$$

The result $E[X] = \\lambda$ has a particularly elegant interpretation: the parameter $\\lambda$ is both the rate of occurrence and the expected value. The Poisson distribution is parameterized directly by its mean.

### Example

Consider phone calls arriving at a call center at an average rate of $\\lambda = 12$ calls per hour:

$$E[X] = 12$$

The expected number of calls in one hour is exactly 12, which is the defining parameter of the distribution. This self-referential property makes the Poisson distribution especially natural for modeling count data.
  `,
  before: ``,
  after: ``,
  link: '',
},

    obj7: {
  title: `Variance and Standard Deviation`,
  content: `
The [variance](!/probability/variance#calculate) of a discrete random variable measures how spread out the values are around the expected value. It is computed as:

$$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\sum_{x} (x - \\mu)^2 P(X = x)$$

Or using the shortcut formula:

$$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2$$

For the **Poisson distribution**, we apply this formula to derive the variance.

### Formula

$$\\mathrm{Var}(X) = \\lambda$$

Where:
$\\lambda$ = average rate of occurrence (expected number of events per interval)

### Derivation and Intuition

Starting with the shortcut formula, we need to calculate $\\mathbb{E}[X^2]$.

We know from the expected value section that $\\mu = \\lambda$.

Using the PMF $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$:

$$\\mathbb{E}[X^2] = \\sum_{k=0}^{\\infty} k^2 \\cdot \\frac{\\lambda^k e^{-\\lambda}}{k!}$$

Through algebraic manipulation using properties of the exponential series:

$$\\mathbb{E}[X^2] = \\lambda^2 + \\lambda$$

Applying the shortcut formula:

$$\\mathrm{Var}(X) = (\\lambda^2 + \\lambda) - \\lambda^2 = \\lambda$$

The result $\\mathrm{Var}(X) = \\lambda$ reveals a remarkable property: **the Poisson distribution's variance equals its mean**. This makes the Poisson distribution unique among common distributions. The single parameter $\\lambda$ completely determines both the center and the spread of the distribution.

This property provides a practical test: if observed count data has variance approximately equal to its mean, the Poisson distribution may be an appropriate model.

### Standard Deviation

$$\\sigma = \\sqrt{\\lambda}$$

### Example

Consider phone calls arriving at a rate of $\\lambda = 16$ calls per hour:

$$\\mathrm{Var}(X) = 16$$

$$\\sigma = \\sqrt{16} = 4$$

The variance equals the expected value (16), and the standard deviation of 4 indicates that in most hours, the number of calls will fall within roughly 12 to 20 calls (within one standard deviation of the mean).
  `,
  before: ``,
  after: ``,
  link: '',
},

    obj8: {
  title: `Mode and Median`,
  content: `### Mode

The [mode](!/probability/mode) is the value of $k$ (number of events) with the highest probability—the peak of the [PMF](!/probability/probability-function/pmf).

For the Poisson distribution, the mode depends on the parameter $\\lambda$:

**If** $\\lambda$ **is an integer:**
The distribution has two modes: $\\lambda - 1$ and $\\lambda$

**If** $\\lambda$ **is not an integer:**
The mode is $\\lfloor \\lambda \\rfloor$

**Intuition:** The mode sits at or just below the [expected value](!/probability/expected-value) $\\lambda$, representing the most likely number of events. The Poisson distribution models rare events, and the mode indicates the count that balances the competing effects of increasing event likelihood with decreasing probability of higher counts.

**Example:**
 For $\\lambda = 4.7$:

Mode = $\\lfloor 4.7 \\rfloor = 4$

Getting exactly 4 events is more likely than any other outcome.

**Example:**
 For $\\lambda = 5$:

Modes = 4 and 5 (both equally likely)

### Median

The [median](!/probability/median) is the value $m$ such that $P(X \\leq m) \\geq 0.5$ and $P(X \\geq m) \\geq 0.5$.

For the Poisson distribution, there is no simple closed-form expression for the median, but it can be found numerically by solving:

$$\\sum_{k=0}^{m} \\frac{\\lambda^k e^{-\\lambda}}{k!} \\geq 0.5$$

**Properties of the median:**
• The median is approximately $\\lambda + \\frac{1}{3} - \\frac{0.02}{\\lambda}$ for large $\\lambda$
• For integer $\\lambda$, median $\\approx \\lambda$
• The distribution approaches symmetry as $\\lambda$ increases

**Example:**
For $\\lambda = 5$:
Mean = 5

The median is approximately 5 (nearly symmetric)

**Example:** 
For $\\lambda = 2$:
Mean = 2

The median is approximately 2 (found numerically)

Unlike continuous distributions where finding the median requires integration, for [discrete](!/probability/distributions/discrete) distributions, the median is found by summing probabilities until reaching 0.5.
  
`,
  before: ``,
  after: ``,
  link: '',
},
    obj9:{
      title:`Moment Generating Function`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:`Key Properties`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:`Applications and Examples`,
      content:`
      ### Practical Example

Suppose a call center receives an average of $\\lambda = 4$ calls per hour. The probability of receiving exactly $k = 6$ calls in a given hour is:

$P(X = 6) = \\frac{4^6 e^{-4}}{6!} = \\frac{4096 \\cdot 0.0183}{720} \\approx 0.104$

This means there's about a 10.4% chance of receiving exactly 6 calls in an hour.

Note: The Poisson distribution is often used as an approximation to the binomial distribution when $n$ is large and $p$ is small, with $\\lambda = np$.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Interactive Calculator`,
      content:`
      This interactive calculator computes probabilities for the Poisson distribution, which models the number of events occurring in a fixed interval of time or space. Enter the average rate ($λ$) of events and choose whether you want the full distribution or specific probabilities like $P(X=k)$ or $P(X≤k)$ to analyze event frequencies. Essential for modeling customer arrivals, website traffic, defect rates, or any situation involving rare events occurring at a constant average rate.
      
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:`Special / Limiting Cases (optional)`,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:`Related Distributions`,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:`Notation Used`,
      content:`
$X \\sim \\text{Poisson}(\\lambda)$ or $X \\sim \\mathcal{P}(\\lambda)$ — **distribution of the random variable**.

$\\text{Poisson}(\\lambda)$ — **used to denote the distribution itself (not the random variable)**.

$\\text{P}(\\lambda)$ — **sometimes used informally, especially in compact notation**.

$P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad \\text{for } k = 0, 1, 2, \\ldots$ — **probability mass function (PMF)**, where:

\t$\\lambda$ — average rate of occurrence (expected number of events in the interval)

\t$k$ — number of events observed

\t$e \\approx 2.71828$ — Euler's number (base of natural logarithm)

**Key properties:**

\t$E[X] = \\lambda$ — expected value (mean)

\t$\\text{Var}(X) = \\lambda$ — variance (equal to the mean)

**Relationship to binomial distribution:**

\t$\\text{Poisson}(\\lambda) \\approx \\text{Binomial}(n, p)$ where $\\lambda = np$, when $n$ is large and $p$ is small (rare events approximation)

      
      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      `,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj16:{
  
      title:`Poisson at a Glance`,
      content:`The table below collects the full anatomy of the Poisson distribution into a single reference card — its rate parameter, support, PMF and CDF, the mean and variance (both equal to λ), mode and median behavior, the binomial approximation, and a canonical example.`,
      before:``,
      after:``,
      link:'',
  
    },
     links:{
      decide:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[Learn More About Distinguishing Discrete Distributions](!/probability/distributions/discrete#decide) →@
        `,
        example:`
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Poisson Distribution](!/probability/distributions/discrete/poisson#11) →@
            `,
               calculators:`            
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Discrete Distributions Probability Calculators ](!/probability/calculators/discrete-distributions) →@
        `,
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
  }

  const introContent = {
  id: "intro",
  title: "Poisson Distribution: Event Counts Over an Interval",
  content: `
  The Poisson distribution models an experiment where events occur randomly over a continuous interval of time or space at a constant average rate. There are no discrete trials and no fixed number of opportunities; instead, the experiment observes how many events happen within a given interval. The defining assumptions are independence of events and stability of the average rate, making this distribution suitable for modeling counts of rare or spontaneous occurrences.
  `
}

const poissonExplanations = {
  "How to use": "1. Select probability type: 'All values' for full distribution, or choose a specific query\n2. Enter λ (lambda - average rate) - average number of events per time/space interval\n3. For specific queries, enter k (number of events) - the target event count\n4. Click Calculate to see probabilities and distribution",
  
  "Parameters": "• λ (lambda): Average number of events per interval (must be positive)\n• k (number of events): Specific count of events you're querying (non-negative integer)\n• λ also equals both the mean and variance of the distribution",
  
  "Query types": "• P(X = k): Probability of exactly k events occurring\n• P(X < k): Probability of fewer than k events occurring\n• P(X ≤ k): Probability of k or fewer events occurring\n• P(X > k): Probability of more than k events occurring\n• P(X ≥ k): Probability of k or more events occurring",
  
  "Examples": "Customer service: Average 4 calls per hour (λ=4). Select P(X=5) and enter k=5 to find probability of exactly 5 calls in next hour.\n\nWebsite traffic: Average 12 visits per minute (λ=12). Select P(X≤8) and enter k=8 to find probability of at most 8 visits in next minute.\n\nDefect rate: Average 2 defects per batch (λ=2). Select 'All values' to see full distribution of defects per batch.",
  
  "Interpretation": "• Mean (μ = λ): Expected number of events per interval\n• Variance (σ² = λ): Variability equals the mean for Poisson distribution\n• Std Dev (σ = √λ): Typical deviation from expected event count\n• Chart: Shows probability distribution - shape becomes more symmetric as λ increases"
};

  const faqQuestions = {
    obj1: {
      question: "What is the Poisson distribution?",
      answer: "The Poisson distribution models the number of events occurring in a fixed interval of time or space when events happen independently at a constant average rate λ. Unlike binomial or geometric distributions, it doesn't involve discrete trials—it counts random occurrences like customer arrivals, website hits, or defects."
    },
    obj2: {
      question: "What is the Poisson probability formula?",
      answer: "The probability of exactly k events is P(X = k) = (λ^k × e^(-λ)) / k!, where λ is the average rate, e is Euler's number (≈2.718), and k! is k factorial. The formula uses the exponential function to ensure all probabilities sum to 1."
    },
    obj3: {
      question: "Why does Poisson variance equal the mean?",
      answer: "The Poisson distribution has a unique property: both mean and variance equal λ. This occurs because the single parameter λ completely determines the distribution's shape. This equality provides a practical diagnostic: if observed count data has variance approximately equal to its mean, Poisson may be appropriate."
    },
    obj4: {
      question: "When should you use the Poisson distribution?",
      answer: "Use Poisson when counting events that occur randomly and independently at a constant average rate over time or space. Common applications include call center arrivals, website traffic, radioactive decay, manufacturing defects, and accident frequencies. It's ideal when events are rare relative to the observation window."
    },
    obj5: {
      question: "How is Poisson related to binomial distribution?",
      answer: "Poisson approximates binomial when n (trials) is large and p (success probability) is small, with λ = np. This 'law of rare events' shows that counting rare successes in many trials behaves like Poisson. Rule of thumb: use Poisson approximation when n > 20 and p < 0.05."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Poisson Distribution",
      "description": "Learn the Poisson distribution for modeling event counts. Understand PMF, CDF, mean and variance both equal λ, and binomial approximation for rare events.",
      "url": "https://www.learnmathclass.com/probability/distributions/discrete/poisson",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Poisson Distribution"
      },
      "teaches": [
        "How Poisson distribution models event counts over intervals",
        "The probability mass function with exponential and factorial terms",
        "The unique property that mean and variance both equal λ",
        "Poisson as approximation to binomial for rare events",
        "Finding mode and median of Poisson distributions",
        "Real-world applications like arrivals and defect counting"
      ],
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
      "dateModified": new Date().toISOString()
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
          "name": "Distributions",
          "item": "https://www.learnmathclass.com/probability/distributions"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Discrete",
          "item": "https://www.learnmathclass.com/probability/distributions/discrete"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Poisson Distribution",
          "item": "https://www.learnmathclass.com/probability/distributions/discrete/poisson"
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
      props:{
         sectionsContent,
         introContent,
         poissonExplanations,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Poisson Distribution: Event Counts & Rate Parameter | Learn Math Class",
        description: "Learn the Poisson distribution for modeling event counts. Understand PMF, CDF, mean and variance both equal λ, and binomial approximation for rare events.",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/poisson",
        name: "Poisson Distribution"
      },
        
       }
    }
   }

export default function PoissonDistributionPage({
  seoData,
  sectionsContent,
  introContent,
  poissonExplanations,
  summaryTable,
  faqQuestions,
  schemas
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
           sectionsContent.obj1.content,
          sectionsContent.links.decide,
          sectionsContent.obj1.example,
          sectionsContent.links.example,
        ]
    },
     {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          
      <div key={'notation-poisson'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
                {processContent(sectionsContent.obj15.content,)}
            </div>,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
            <div key={'parameters-poisson'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
                        {processContent( sectionsContent.obj2.content)}
                    </div>,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
        <div key={'pmf-poisson'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
        {processContent(sectionsContent.obj4.content)}
        </div>,

        <div key={'poisson-pmf-visualization'} style={{transform:'scale(0.8)'}}>
     
      <PoissonDistribution/>
      </div>
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
           <div key={'poisson-cdf-visualization'} style={{transform:'scale(0.8)'}}>
     
     
      <PoissonDistributionCDF/>
      </div>
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
                    <CalculatorInstructions key={'explanations'} explanations={poissonExplanations}/>,
                    <div key={'calculator'} style={{marginBottom:'-350px'}}>
                    <PoissonCalculator />,
                    </div>,
                    sectionsContent.links.calculators,
        ]
    },
    {
        id:'16',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
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
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.learningResource)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Poisson Distribution</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"
    secondaryNavTitle="Other Discrete Distributions" 
   
   
   />
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
     <KeyTermsCard
  id="0"
  title={sectionsContent.obj0.title}
  content={sectionsContent.obj0.content}
  after={sectionsContent.obj0.after}
  variant="light"
/>
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}