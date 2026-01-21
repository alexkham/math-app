import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../../pages/pages.css'
import Head from 'next/head'
import { processContent } from '@/app/utils/contentProcessor'
import PoissonDistribution from '@/app/components/visualizations/probability/discrete-distribution/PoissonDistributionPMF'
import PoissonDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/PoissonDistributionCDF'
import CalculatorInstructions from '@/app/components/calculators/CalculatorInstructions'
import PoissonCalculator from '@/app/components/calculators/probability/distributions/PoissonDistributionCalculator'

export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




  //   const sectionsContent={

  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }


    const sectionsContent={

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
    // obj5:{
    //   title:`Cumulative Distribution Function (CDF)`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
   
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
   
    // obj6:{
    //   title:`Expected Value (mean)`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
   
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
   
    // obj7:{
    //   title:`Variance and Standard Deviation`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


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
    obj8:{
      title:`Mode and Median`,
      content:``,
      before:``,
      after:``,
      link:'',
  
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
  
      title:``,
      content:``,
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


   return {
      props:{
         sectionsContent,
         introContent,
         poissonExplanations,
          seoData: {
        title: "Poisson Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/poisson",
         name: "name"
      },
        
       }
    }
   }

export default function PoissonDistributionPage({seoData,sectionsContent , introContent,
  poissonExplanations,
}) {

    
  const genericSections=[
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
          // sectionsContent.obj15.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          // sectionsContent.obj2.content,
            <div key={'parameters-poisson'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
                        {processContent( sectionsContent.obj2.content)}
                    </div>,
        ]
    },
    // {
    //     id:'3',
    //     title:sectionsContent.obj3.title,
    //     link:sectionsContent.obj3.link,
    //     content:[
    //       sectionsContent.obj3.content,
    //     ]
    // },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          // sectionsContent.obj4.content,
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
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
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
                    <div key={'binomial-calculator'} style={{marginBottom:'-350px'}}>
                    <PoissonCalculator />,
                    </div>,
                    // sectionsContent.obj12.after,
                    sectionsContent.links.calculators,
        ]
    },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
   
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
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
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Poisson Distribution</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
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
          //  "#f2f2f2"
          textColor="#06357a"
        />
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
