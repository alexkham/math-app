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
// import DiscreteUniformCalculator from '@/app/components/calculators/probability/distributions/UniformDistributionCalculator'
// import BinomialCalculator from '@/app/components/calculators/probability/distributions/BinomialDistributionCalculator'
// import GeometricDistributionCalculator from '@/app/components/calculators/probability/distributions/GeometricDistributionCalculator'
// import DiscreteDistributionsCalculator from '@/app/components/calculators/probability/discrete-distributions/DiscreteDistributionsCalculator'
// import NegativeBinomialCalculator from '@/app/components/calculators/probability/distributions/NegativeBinomialCalculator'
// import HypergeometricCalculator from '@/app/components/calculators/probability/distributions/HypergeometricDistributionCalculator'
// import PoissonCalculator from '@/app/components/calculators/probability/distributions/PoissonDistributionCalculator'
// import { useSearchParams } from 'next/navigation'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

// export async function getStaticProps(){

//   const keyWords=['binomial distribution','geometric distribution','poisson distribution',
//     'discrete probability distribution','discrete uniform distribution','hypergeometric distribution',
//     'negative binomial distribution','probability distribution discrete',
//     'binomial probability calculator']

   
//    const menuItems = [
//     {
//       title: "Probability Calculators",
//       // icon: <Home />,
//       link: "/probability/calculators"
//     },
//     {
//         title: "Continuous Distributions Calculator",
//         // icon: <Home />,
//         link: "/probability/calculators/continuous-distributions"
//       },
//        {
//         title: "Statistics Calculator",
//         // icon: <Home />,
//         link: "/calculators/statistics-calculator"
//       },
    
//   ];
   
//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/calculators/discrete-distributions",
//          name: "name"
//       },
//       menuItems,
        
//        }
//     }
//    }

// export default function DistributionsCalculatorPage({seoData,sectionsContent , 
//   introContent,menuItems}) {

//       const searchParams = useSearchParams()
           
//           const tab=searchParams.get('tab')
//          const initialTab = tab ? parseInt(tab) : 1

//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
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
  
//   <meta name="twitter:card" content="summary" />
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
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'0px'}}>Discrete Distributions Calculator</h1>
//    <br/>
//      <VerticalButtonGroup 
//       items={menuItems}
//       width="250px" 
//       theme='vivid'
            
//     //   backgroundColor ='#245de1'
//     //   color = 'white'
//       isSticky={true}
//       verticalOffset='200px'
//       />
//       <div style={{marginTop:'-220px'}}>
//    <GenericMultiComponentFrame
//     components={[
           
//              { id: 1, name: 'Discrete Uniform Distribution Calculator', key: 'uniform', component: DiscreteUniformCalculator,
//       //          props: {
//       //   links: {
//       //     n: 'uniform-n',
//       //     probability: 'uniform-probability',
//       //     mean: 'uniform-mean',
//       //     variance: 'uniform-variance',
//       //     stdDev: 'uniform-stddev'
//       //   }
//       // }
//               },
//              { id: 2, name: 'Binomial Distribution Calculator', key: 'binomial', component: BinomialCalculator ,
//       //         props: {
//       //   links: {
//       //     q: 'binomial-q',
//       //     mean: 'binomial-mean',
//       //     variance: 'binomial-variance',
//       //     stdDev: 'binomial-stddev',
//       //     pmf: 'binomial-pmf'
//       //   }
//       // }
//              },
//              { id: 3, name: 'Geometric Distribution Calculator', key: 'geometric', component:GeometricDistributionCalculator ,

// //               props: {
// //   links: {
// //     q: 'geometric-q',
// //     mean: 'geometric-mean',
// //     variance: 'geometric-variance',
// //     stdDev: 'geometric-stddev',
// //     pmf: 'geometric-pmf'
// //   }
// // },
//  },
     
//     { id: 4, name: 'Negative Binomial Distribution Calculator', key: 'negative-binomial', component:NegativeBinomialCalculator ,

// //               props: {
// //   links: {
// //     q: 'geometric-q',
// //     mean: 'geometric-mean',
// //     variance: 'geometric-variance',
// //     stdDev: 'geometric-stddev',
// //     pmf: 'geometric-pmf'
// //   }
// // },
//  },
//     { id: 5, name: 'Hypergeometric Distribution Calculator', key: 'hypergeometric', component:HypergeometricCalculator ,

// //               props: {
// //   links: {
// //     q: 'geometric-q',
// //     mean: 'geometric-mean',
// //     variance: 'geometric-variance',
// //     stdDev: 'geometric-stddev',
// //     pmf: 'geometric-pmf'
// //   }
// // },
//  },
//     { id: 6, name: 'Poisson Distribution Calculator', key: 'poisson', component:PoissonCalculator ,

// //               props: {
// //   links: {
// //     q: 'geometric-q',
// //     mean: 'geometric-mean',
// //     variance: 'geometric-variance',
// //     stdDev: 'geometric-stddev',
// //     pmf: 'geometric-pmf'
// //   }
// // },
//  },
 
//  //  { id: 2, name: 'Two Independent Events Probability Calculator', key: 'probCalc', component: TwoIndependentEventsCalculator },
//             //   { id: 3, name: 'Distibutions Calculator',  href: '/probability/calculator/distributions'  },
             
//            ]}
//            initialActive={initialTab}
//            buttonMinWidth="160px"
//            primaryColor="#007bff"
//    />
//    </div>
//    <br/>
//    {/* <PoissonCalculator/> */}
//    {/* <HypergeometricCalculator/> */}
//    {/* <NegativeBinomialCalculator/> */}
//    {/* <GeometricDistributionCalculator/> */}
//    {/* <BinomialCalculator/> */}
//    {/* <DiscreteUniformCalculator/> */}
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#34383c"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//  {/* <DiscreteDistributionsCalculator/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <div id='uniform-stddev'>uniform-stddev</div> */}
//    <br/>
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
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import DiscreteUniformCalculator from '@/app/components/calculators/probability/distributions/UniformDistributionCalculator'
import BinomialCalculator from '@/app/components/calculators/probability/distributions/BinomialDistributionCalculator'
import GeometricDistributionCalculator from '@/app/components/calculators/probability/distributions/GeometricDistributionCalculator'
import NegativeBinomialCalculator from '@/app/components/calculators/probability/distributions/NegativeBinomialCalculator'
import HypergeometricCalculator from '@/app/components/calculators/probability/distributions/HypergeometricDistributionCalculator'
import PoissonCalculator from '@/app/components/calculators/probability/distributions/PoissonDistributionCalculator'
import { useSearchParams } from 'next/navigation'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps(){

  const keyWords = [
    'discrete distribution calculator',
    'binomial distribution calculator',
    'poisson distribution calculator',
    'geometric distribution calculator',
    'hypergeometric distribution',
    'negative binomial calculator',
    'discrete uniform distribution',
    'probability mass function',
    'discrete probability calculator',
    'PMF calculator',
    'binomial probability',
    'poisson probability calculator',
    'discrete random variable',
    'probability distribution tool',
    'statistical distribution calculator'
  ]

  const menuItems = [
    {
      title: "Probability Calculators",
      link: "/probability/calculators"
    },
    {
      title: "Continuous Distributions Calculator",
      link: "/probability/calculators/continuous-distributions"
    },
    {
      title: "Statistics Calculator",
      link: "/calculators/statistics-calculator"
    },
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting Probability Query Types`,
      content: `Each distribution calculator offers six query modes for flexible probability calculations. **All values (full distribution)** displays the complete probability mass function across all possible outcomes, showing the PMF chart and detailed probability table. This mode reveals the distribution's shape and identifies the most likely values.

**P(X = k)** calculates the exact probability of a specific outcome. For a binomial distribution with n=10 and p=0.5, P(X=5) gives the probability of exactly 5 successes. This mode uses the distribution's PMF formula directly.

**P(X < k)** computes cumulative probability for values strictly less than k, summing probabilities from the minimum up to k-1. **P(X ≤ k)** includes k itself in the sum. These queries answer questions like "What's the probability of fewer than 3 defects?" versus "At most 3 defects?"

**P(X > k)** and **P(X ≥ k)** calculate right-tail probabilities, useful for questions like "What's the probability of exceeding 10 events?" The greater-than query sums from k+1 onward, while greater-or-equal starts at k. All calculators display results prominently with the query notation and six-decimal precision.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Using the Discrete Uniform Calculator`,
      content: `The discrete uniform distribution models scenarios where all outcomes have equal probability, like rolling a fair die or drawing a random integer. Enter **a (minimum)** as the smallest possible value and **b (maximum)** as the largest. For a standard die, set a=1 and b=6.

The calculator computes n = b - a + 1 (count of possible values) and probability = 1/n for each outcome. The PMF chart displays uniform-height bars showing equal probabilities. Mean equals (a+b)/2, the midpoint of the range. Variance follows the formula ((n²-1)/12).

Query specific values to see how uniform probability works. For a=1, b=6, P(X=3) = 1/6 ≈ 0.1667, identical to any other face. P(X ≤ 2) = 2/6 = 0.3333 since two values (1,2) fall in that range. The uniform distribution serves as a baseline for comparing more complex distributions and models perfectly random selection.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Calculating Binomial Distribution Probabilities`,
      content: `The binomial distribution models the number of successes in a fixed number of independent trials, each with the same success probability. Enter **n (number of trials)** as the total independent repetitions and **p (success probability)** as the probability for each trial, between 0 and 1.

For coin flipping, n=10 flips with p=0.5 for a fair coin models total heads. For manufacturing quality control with 2% defect rate, use p=0.02 with n equal to sample size. The calculator displays the PMF chart showing the distribution's shape—symmetric when p=0.5, right-skewed when p<0.5, left-skewed when p>0.5.

Mean equals np (expected successes), variance equals np(1-p). For n=20, p=0.3, expect 6 successes on average with variance 4.2. The PMF uses the formula C(n,k) × p^k × (1-p)^(n-k) where C(n,k) is the binomial coefficient "n choose k."

Query P(X=k) for exact probabilities, P(X≤k) for cumulative "at most k successes." The binomial models coin flips, quality control sampling, survey responses, medical trials—any scenario with fixed trials and constant success probability.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Working with Geometric Distribution`,
      content: `The geometric distribution models the number of trials needed until the first success occurs. Unlike binomial which fixes trial count, geometric asks "How many attempts until success?" Enter **p (success probability)** as the constant probability for each trial.

For p=0.2 (20% success rate), the calculator shows probabilities for needing 1, 2, 3... trials. P(X=1) = p (immediate success), P(X=2) = (1-p)×p (fail then succeed), and so on. The PMF chart displays exponentially decreasing bars—early success is most likely, long sequences less probable.

Mean equals 1/p, the expected number of trials. For p=0.2, expect 5 trials on average until first success. Variance equals (1-p)/p². Standard deviation measures spread around this expectation. The distribution has infinite support (theoretically could take forever), but the calculator displays up to reasonable maximum based on negligible probabilities.

Use geometric for questions like "How many job applications until an offer?" or "Attempts needed to roll a six?" The memoryless property means past failures don't affect future trial probabilities—each attempt has the same success chance regardless of history.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Negative Binomial Distribution Calculator`,
      content: `The negative binomial distribution generalizes the geometric distribution, modeling failures before achieving a target number of successes. Enter **r (number of successes)** as the target success count and **p (success probability)** as the probability per trial.

For r=5, p=0.3, the calculator shows the distribution of failures before the 5th success. The random variable X represents failure count, not total trials. Mean equals r(1-p)/p, expected failures before r successes. For r=5, p=0.3, expect about 11.67 failures before accumulating 5 successes.

Variance equals r(1-p)/p², measuring variability in failure count. The PMF uses binomial coefficients: C(k+r-1, k) × p^r × (1-p)^k where k is the number of failures. The distribution resembles binomial but extends indefinitely since failure count is unbounded.

When r=1, negative binomial reduces to geometric distribution. Use this for scenarios like "How many defective items before finding 10 acceptable ones?" or "Customer rejections before closing 3 sales?" The calculator handles both specific failure counts P(X=k) and cumulative queries P(X≤k) for "at most k failures."`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Hypergeometric Distribution for Sampling Without Replacement`,
      content: `The hypergeometric distribution models sampling without replacement from a finite population containing two types of items. Enter **N (population size)** as total items, **K (success states)** as items of the target type, and **n (sample size)** as the number drawn.

For drawing cards from a 52-card deck, N=52 total cards, K=13 hearts, n=5 cards drawn. The calculator computes probabilities for k hearts in the 5-card hand. Unlike binomial (which assumes replacement), hypergeometric accounts for changing probabilities as items are removed.

Mean equals nK/N, expected successes in the sample. For N=100 items with K=30 defective, drawing n=10 gives mean 3 defective items. Variance equals n×K×(N-K)×(N-n)/(N²×(N-1)), incorporating the finite population correction factor.

The PMF uses the formula: [C(K,k) × C(N-K, n-k)] / C(N,n) where C denotes combinations. Valid k values range from max(0, n-(N-K)) to min(n,K)—you can't draw more hearts than exist or more cards than sampled.

Use hypergeometric for quality control (sampling from production batch), lottery probabilities (drawing winning numbers), or ecological sampling (capturing tagged animals). The distribution approaches binomial as N→∞ with K/N=p constant.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Poisson Distribution for Event Counts`,
      content: `The Poisson distribution models the number of events occurring in a fixed interval when events happen independently at a constant average rate. Enter **λ (lambda - average rate)** as the expected event count per interval.

For λ=3.5 events per hour, the calculator shows probabilities for 0, 1, 2, 3... events in an hour. P(X=0) = e^(-λ) gives the probability of zero events. The PMF peak occurs near λ—the most likely outcome approximates the average rate.

Mean and variance both equal λ, a unique Poisson property. For λ=5, expect 5 events with variance 5 and standard deviation √5 ≈ 2.236. The distribution is right-skewed for small λ, approaches symmetry as λ increases. When λ>10, normal approximation becomes accurate.

The PMF formula: P(X=k) = (λ^k × e^(-λ)) / k! where k is the event count. The calculator sums probabilities for cumulative queries. P(X≤3) for λ=5 gives probability of 3 or fewer events, useful for capacity planning.

Apply Poisson to phone calls per hour, website visits per day, radioactive decay counts, rare disease cases, customer arrivals, or any scenario with independent events at constant rate. The distribution assumes infinite potential events in the interval with very small individual probabilities.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Are Discrete Probability Distributions?`,
      content: `A discrete probability distribution describes the probabilities of countable outcomes for a random variable. Unlike continuous distributions which assign probability to intervals, discrete distributions assign probability to specific values: 0 heads, 1 head, 2 heads, etc.

The **probability mass function (PMF)** gives P(X=k) for each possible value k. PMF values must be non-negative and sum to 1 across all possible outcomes. The PMF completely characterizes the distribution—knowing all individual probabilities determines every property.

Discrete distributions model counted phenomena: number of successes, defects, events, trials, or occurrences. The random variable takes integer values (sometimes all non-negative integers, sometimes a finite range). Examples include coin flips (0 to n heads), website visits (0 to infinity), cards drawn (0 to min(n,K) target cards).

Key properties include mean μ (expected value, center of distribution), variance σ² (spread around mean), and standard deviation σ (variance square root). The cumulative distribution function (CDF) gives P(X≤k), accumulating probabilities from minimum to k.

For comprehensive theory on discrete probability distributions including derivations, properties, and applications, see **discrete probability distributions theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Choosing the Right Discrete Distribution`,
      content: `Selecting the appropriate distribution requires matching the scenario's structure to distribution assumptions. **Discrete Uniform** applies when all outcomes are equally likely with known minimum and maximum: dice rolls, random integer selection, lottery numbers.

**Binomial** suits fixed trial counts with constant success probability and independence: quality control samples, coin flipping, survey yes/no responses, multiple choice guessing. Each trial must be independent with identical success chance.

**Geometric** models waiting time until first success when trials are independent with constant probability: attempts until sale, rolls until six, iterations until convergence. Use when counting trials, not successes.

**Negative Binomial** generalizes geometric to multiple successes: failures before r-th success, defects before finding r acceptable items. Reduces to geometric when r=1. Appropriate when counting failures while waiting for fixed success count.

**Hypergeometric** handles sampling without replacement from finite populations with two categories: card hands, quality sampling from batches, capture-recapture methods. Critical when sample size is substantial relative to population—replacement assumption breaks down.

**Poisson** applies to rare events in fixed intervals when occurrences are independent with constant rate: phone calls per hour, website hits, accidents per month, rare disease cases. Works when individual event probability is tiny but opportunities are numerous. Approximates binomial when n is large, p is small, and np is moderate.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Understanding PMF vs CDF`,
      content: `The **probability mass function (PMF)** gives the probability of each exact value: P(X=k). For a die, PMF(3) = 1/6, the probability of rolling exactly 3. PMF bars in calculator charts show these individual probabilities. PMF values must be non-negative and sum to 1.

The **cumulative distribution function (CDF)** gives P(X≤k), the probability of at most k: all values from minimum through k. For a die, CDF(3) = 3/6 = 0.5, the probability of rolling 1, 2, or 3. CDF is the sum of PMF values up to k.

CDF increases from 0 to 1 as k increases. For discrete distributions, CDF is a step function—flat between integer values, jumping upward at each possible outcome by the PMF value. CDF(k) - CDF(k-1) equals PMF(k), relating the functions.

PMF answers "exactly k" questions while CDF answers "at most k" questions. Calculate P(X>k) as 1 - CDF(k). Calculate P(a < X ≤ b) as CDF(b) - CDF(a). The calculator query options implement these relationships: P(X<k) = CDF(k-1), P(X≤k) = CDF(k), P(X>k) = 1 - CDF(k), P(X≥k) = 1 - CDF(k-1).

The **CDF visualizer tools** display step functions showing cumulative probability accumulation, complementing the PMF bar charts in these calculators.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Probability Tools and Calculators`,
      content: `**Continuous Distributions Calculator** - Compute probabilities for normal, exponential, and uniform continuous distributions with PDF and CDF.

**Probability Distribution Explorer** - Interactive visualization comparing multiple distributions side-by-side with parameter adjustments.

**Expected Value Calculator** - Calculate expected values, variance, and higher moments for discrete and continuous distributions.

**CDF Visualizer** - Generate cumulative distribution function plots for discrete and continuous distributions.

**Normal Distribution Calculator** - Dedicated normal distribution tool with z-score calculations and percentile lookups.

**Binomial Probability Calculator** - Standalone binomial calculator with additional features for hypothesis testing.

**Poisson Process Simulator** - Simulate Poisson processes over time with arrival visualization and statistics.

**Probability Mass Function Plotter** - Create custom PMF plots for user-defined discrete distributions.

**Statistical Distribution Reference** - Comprehensive guide to all probability distributions with formulas, properties, and applications.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is the difference between discrete and continuous probability distributions?",
      answer: "Discrete distributions assign probabilities to countable outcomes (0, 1, 2, 3...) using a probability mass function (PMF). Continuous distributions assign probabilities to intervals of real numbers using a probability density function (PDF). Discrete distributions model counted phenomena like coin flips or defects. Continuous distributions model measured quantities like height or time."
    },
    obj2: {
      question: "When should I use binomial vs hypergeometric distribution?",
      answer: "Use binomial when sampling with replacement or when the population is effectively infinite—each trial has constant success probability. Use hypergeometric when sampling without replacement from a finite population—probabilities change as items are removed. If sample size is small relative to population (<5%), binomial approximates hypergeometric well."
    },
    obj3: {
      question: "What does the lambda parameter mean in Poisson distribution?",
      answer: "Lambda (λ) represents the average rate of events per interval. For λ=3.5, expect 3.5 events on average in the time/space interval. Lambda is both the mean and variance of the Poisson distribution. Higher λ values increase both the expected count and variability. The distribution peaks near λ—the most likely outcome approximates the average rate."
    },
    obj4: {
      question: "How do I interpret P(X ≤ k) vs P(X < k) in the calculators?",
      answer: "P(X ≤ k) includes k itself: the probability of at most k, meaning k or fewer. P(X < k) excludes k: the probability of strictly less than k, meaning up to k-1. For discrete distributions, P(X < k) = P(X ≤ k-1). The difference equals P(X = k). Use ≤ for 'at most' questions, < for 'fewer than' questions."
    },
    obj5: {
      question: "What is the relationship between geometric and negative binomial distributions?",
      answer: "The geometric distribution is a special case of negative binomial with r=1 success. Geometric models trials until first success, while negative binomial models failures before the r-th success. Both involve independent trials with constant success probability. Negative binomial generalizes geometric from 'wait for one success' to 'wait for r successes.'"
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Discrete Probability Distributions Calculator",
      "description": "Comprehensive calculator for six discrete probability distributions: uniform, binomial, geometric, negative binomial, hypergeometric, and Poisson. Features PMF visualization, statistical analysis, and flexible probability queries.",
      "url": "https://www.learnmathclass.com/probability/calculators/discrete-distributions",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Six discrete distribution calculators in one interface",
        "Discrete uniform, binomial, geometric, negative binomial, hypergeometric, Poisson",
        "Six query types: exact probability, cumulative less/greater, inequalities",
        "Interactive PMF bar chart visualization",
        "Complete distribution statistics: mean, variance, standard deviation",
        "Full probability mass function tables",
        "Real-time input validation with error messages",
        "PMF formula display with mathematical notation",
        "Tabbed interface for easy distribution switching",
        "Calculate and reset functions for each distribution"
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
          "name": "Calculators",
          "item": "https://www.learnmathclass.com/probability/calculators"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Discrete Distributions",
          "item": "https://www.learnmathclass.com/probability/calculators/discrete-distributions"
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
      introContent,
      faqQuestions,
      schemas,
      menuItems,
      seoData: {
        title: "Discrete Distributions Calculator | 6 Distribution Tools",
        description: "Calculate probabilities for binomial, Poisson, geometric, hypergeometric, negative binomial, and uniform distributions with PMF charts and statistics.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/discrete-distributions",
        name: "Discrete Distributions Calculator"
      },
    }
  }
}

export default function DistributionsCalculatorPage({seoData, sectionsContent, introContent, faqQuestions, schemas, menuItems}) {

  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')
  const initialTab = tab ? parseInt(tab) : 1

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
      <h1 className='title' style={{marginTop:'-40px',marginBottom:'20px'}}>Discrete Distributions Calculator</h1>
      <br/>
      <VerticalButtonGroup 
        items={menuItems}
        width="250px" 
        theme='vivid'
        isSticky={true}
        verticalOffset='200px'
      />
      <div style={{marginTop:'-220px'}}>
        <GenericMultiComponentFrame
          components={[
            { id: 1, name: 'Discrete Uniform Distribution Calculator', key: 'uniform', component: DiscreteUniformCalculator },
            { id: 2, name: 'Binomial Distribution Calculator', key: 'binomial', component: BinomialCalculator },
            { id: 3, name: 'Geometric Distribution Calculator', key: 'geometric', component: GeometricDistributionCalculator },
            { id: 4, name: 'Negative Binomial Distribution Calculator', key: 'negative-binomial', component: NegativeBinomialCalculator },
            { id: 5, name: 'Hypergeometric Distribution Calculator', key: 'hypergeometric', component: HypergeometricCalculator },
            { id: 6, name: 'Poisson Distribution Calculator', key: 'poisson', component: PoissonCalculator },
          ]}
          initialActive={initialTab}
          buttonMinWidth="160px"
          primaryColor="#007bff"
        />
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
        backgroundColor="#f2f2f2"
        textColor="#34383c"
      /> */}
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}