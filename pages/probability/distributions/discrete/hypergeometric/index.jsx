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
import HypergeometricDistribution from '@/app/components/visualizations/probability/discrete-distribution/HypergeometricDistributionPMF'
import HypergeometricDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/HypergeometricDistributionCDF'
import CalculatorInstructions from '@/app/components/calculators/CalculatorInstructions'
import HypergeometricCalculator from '@/app/components/calculators/probability/distributions/HypergeometricDistributionCalculator'

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
      title:`The Probabilistic Experiment Behind hypergeometric distribution`,
      content:`
      The hypergeometric distribution counts the number of successes obtained when sampling without replacement from a finite population. The population contains a fixed number of successes and failures, and each draw permanently alters the composition of the population.

Unlike the [binomial distribution](!/probability/distributions/discrete/binomial), trials are not [independent](!/probability/independence). The probability of success changes after each draw because items are not returned. The number of draws is fixed in advance, and the [random variable](!/probability/random-variables) counts how many successes appear in the sample.

This distribution captures situations where resources are limited or where selection without replacement is intrinsic to the experiment. It reflects dependence between outcomes — a key distinction from trial-based models.
      `,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Drawing $5$ cards from a standard deck without replacement and counting how many are hearts. Each draw changes the probabilities for subsequent draws, because the deck composition changes.
      `,
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
      $𝑁$: total population size

$𝐾$: number of successes in the population

$𝑛$: number of draws (without replacement), where $𝑛≤𝑁$

The hypergeometric distribution models the number of successes in $𝑛$ draws from a finite population of size $𝑁$ that contains exactly $𝐾$ successes, without replacement. 

Unlike the [binomial distribution](!/probability/distributions/discrete/binomial), where each trial is independent, here each draw changes the probabilities — once an item is drawn, it doesn't go back. This dependency is what defines the distribution’s behavior.
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
      The **probability mass function (PMF)** of a **hypergeometric distribution** is given by:

$$P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}, \\quad k = \\max(0, n-N+K), \\ldots, \\min(n, K)$$

where $\\binom{a}{b} = \\frac{a!}{b!(a-b)!}$ is the binomial coefficient.


 **Sampling Without Replacement**: The hypergeometric distribution models the number of successes when drawing $n$ items without replacement from a finite population of size $N$ containing exactly $K$ success items.

 **Support (Range of the Random Variable)**:
  * The random variable $X$ can take on values from $\\max(0, n-N+K)$ to $\\min(n, K)$.
  * $X = k$ means exactly $k$ successes are drawn in the sample of size $n$.
  * The lower bound ensures we don't draw more failures than available: $n-k \\leq N-K$
  * The upper bound ensures we don't draw more successes than available: $k \\leq K$ and $k \\leq n$
  * The **support** is thus a finite set of non-negative integers.

 **Logic Behind the Formula**:
  * $\\binom{K}{k}$: The number of ways to choose $k$ successes from $K$ available successes
  * $\\binom{N-K}{n-k}$: The number of ways to choose $n-k$ failures from $N-K$ available failures
  * $\\binom{N}{n}$: The total number of ways to choose $n$ items from $N$ items
  * The total probability sums to 1:
  
  $\\sum_{k=\\max(0,n-N+K)}^{\\min(n,K)} P(X = k) = \\sum_{k=\\max(0,n-N+K)}^{\\min(n,K)} \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}} = 1$
  
  * This follows from Vandermonde's identity.
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
The [cumulative distribution function (CDF)](!/probability/cdf) of a **hypergeometric distribution** is given by:

$$F_X(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\frac{\\binom{K}{i}\\binom{N-K}{n-i}}{\\binom{N}{n}}$$

Where:
$N$ = total population size
$K$ = number of success states in the population
$n$ = number of draws (sample size)
$k$ = number of observed successes in the sample (where $\\max(0, n-N+K) \\leq k \\leq \\min(n, K)$)

### Intuition Behind the Formula

**Definition**: The [CDF](!/probability/cdf) gives the probability of observing $k$ or fewer successes when drawing $n$ items without replacement from a population of size $N$ containing $K$ success states.

**Summation of Probabilities**: 
We sum the individual probabilities from the minimum possible value up to $k$:

$$P(X \\leq k) = P(X=0) + P(X=1) + P(X=2) + \\cdots + P(X=k)$$

**Without Replacement Effect**: Unlike the binomial distribution, the hypergeometric CDF accounts for sampling without replacement. Each draw changes the composition of the remaining population, creating dependency between draws.

**Boundary Conditions**: 
The support is bounded by physical constraints:
- Minimum: $\\max(0, n-N+K)$ (can't draw more failures than exist)
- Maximum: $\\min(n, K)$ (can't draw more successes than exist or more items than drawn)

**Complementary Probability**: 
For "more than $k$ successes":

$$P(X > k) = 1 - F_X(k)$$
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

For the **hypergeometric distribution**, we apply this general formula to the specific probability mass function of this distribution.

### Formula

$$E[X] = n \\cdot \\frac{K}{N}$$

Where:
$N$ = total population size
$K$ = number of success states in the population
$n$ = number of draws (sample size)

### Derivation and Intuition

The hypergeometric distribution describes sampling without replacement. Although the draws are not independent, the expected value has a remarkably simple form.

The proportion of successes in the population is $\\frac{K}{N}$. When drawing $n$ items, each draw has the same marginal probability $\\frac{K}{N}$ of being a success (even though the draws are dependent).

By symmetry and linearity of expectation, the expected number of successes in $n$ draws is:

$$E[X] = n \\cdot \\frac{K}{N}$$

The result $E[X] = n \\cdot \\frac{K}{N}$ captures the intuition that the expected proportion of successes in the sample matches the proportion in the population. If you sample $n$ items from a population where the success rate is $\\frac{K}{N}$, you expect $n \\cdot \\frac{K}{N}$ successes on average.

### Example

Consider drawing 5 cards from a standard deck of 52 cards, counting the number of aces. Here $N = 52$, $K = 4$, and $n = 5$:

$$E[X] = 5 \\cdot \\frac{4}{52} = \\frac{20}{52} \\approx 0.385$$

On average, you expect to draw about 0.385 aces in a 5-card hand, which reflects the 4-in-52 proportion of aces in the deck.
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

For the **hypergeometric distribution**, we apply this formula to derive the variance.

### Formula

$$\\mathrm{Var}(X) = n \\cdot \\frac{K}{N} \\cdot \\frac{N-K}{N} \\cdot \\frac{N-n}{N-1}$$

Where:
$N$ = total population size
$K$ = number of success states in the population
$n$ = number of draws (sample size)

### Derivation and Intuition

The derivation involves computing $\\mathbb{E}[X^2]$ using indicator random variables and accounting for the dependency created by sampling without replacement.

We know from the expected value section that $\\mu = n \\cdot \\frac{K}{N}$.

The variance formula can be rewritten to show its relationship to the binomial variance:

$$\\mathrm{Var}(X) = n \\cdot \\frac{K}{N} \\cdot \\left(1 - \\frac{K}{N}\\right) \\cdot \\frac{N-n}{N-1}$$

The first three terms $n \\cdot \\frac{K}{N} \\cdot \\left(1 - \\frac{K}{N}\\right)$ match the binomial variance formula with $p = \\frac{K}{N}$.

The additional factor $\\frac{N-n}{N-1}$ is called the **finite population correction** and is always less than 1. It accounts for the reduction in variance caused by sampling without replacement. As the sample size $n$ approaches the population size $N$, this factor approaches zero, reflecting that sampling the entire population leaves no variability.

### Standard Deviation

$$\\sigma = \\sqrt{n \\cdot \\frac{K}{N} \\cdot \\frac{N-K}{N} \\cdot \\frac{N-n}{N-1}}$$

### Example

Consider drawing 5 cards from a standard deck of 52, counting aces. Here $N = 52$, $K = 4$, $n = 5$:

$$\\mathrm{Var}(X) = 5 \\cdot \\frac{4}{52} \\cdot \\frac{48}{52} \\cdot \\frac{47}{51}$$

$$= 5 \\cdot \\frac{1}{13} \\cdot \\frac{12}{13} \\cdot \\frac{47}{51} \\approx 0.331$$

$$\\sigma \\approx \\sqrt{0.331} \\approx 0.575$$

The relatively small variance reflects the limited range of possible outcomes (0 to 4 aces) and the constraining effect of sampling without replacement from a finite deck.
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

Suppose you have a deck of $N = 52$ cards containing $K = 13$ hearts. You draw $n = 5$ cards without replacement. The probability of getting exactly $k = 2$ hearts is:

$$P(X = 2) = \\frac{\\binom{13}{2} \\binom{52-13}{5-2}}{\\binom{52}{5}} = \\frac{\\binom{13}{2} \\binom{39}{3}}{\\binom{52}{5}} = \\frac{78 \\cdot 9139}{2598960} \\approx 0.274$$

This means there's about a 27.4% chance of getting exactly 2 hearts when drawing 5 cards from a standard deck.

Note: When $N$ is very large relative to $n$, the hypergeometric distribution approximates the binomial distribution with $p = \\frac{K}{N}$.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Interactive Calculator`,
      content:`
      This interactive calculator computes probabilities for the hypergeometric distribution, which models sampling without replacement from a finite population. Enter your population size ($N$), number of success items ($K$), and sample size ($n$) to calculate the probability of getting a specific number of successes in your sample. Ideal for card games, quality control sampling, lottery calculations, or any scenario where you're drawing items without putting them back.
      
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
      $X \\sim \\text{Hypergeometric}(N, K, n)$ or $X \\sim \\text{Hyp}(N, K, n)$ — **distribution of the random variable**.

$\\text{Hypergeometric}(N, K, n)$ — **used to denote the distribution itself (not the random variable)**.

$\\text{H}(N, K, n)$ — **occasionally used in compact form, especially in software or formulas**.

$P(X = k) = \\frac{\\binom{K}{k} \\binom{N - K}{n - k}}{\\binom{N}{n}}, \\quad \\text{for valid } k$ — **probability mass function (PMF)**, where:

\t$N$ — total population size

\t$K$ — number of success states in the population

\t$n$ — number of draws (sample size) without replacement

\t$k$ — number of observed successes in the sample

\t$\\max(0, n - (N - K)) \\leq k \\leq \\min(n, K)$ — valid range for $k$

\t$\\binom{a}{b} = \\frac{a!}{b!(a-b)!}$ — binomial coefficient

**Key properties:**

\t$E[X] = n \\frac{K}{N}$ — expected value (mean)

\t$\\text{Var}(X) = n \\frac{K}{N} \\frac{N-K}{N} \\frac{N-n}{N-1}$ — variance

**Relationship to binomial distribution:**

\t$\\text{Hypergeometric}(N, K, n) \\approx \\text{Binomial}(n, p)$ where $p = \\frac{K}{N}$, when $N$ is large relative to $n$ (sampling with replacement approximation)
      
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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Hypergeometric Distribution](!/probability/distributions/discrete/hypergeometric#11) →@
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
  title: "Hypergeometric Distribution: Sampling Without Replacement",
  content: `
  The hypergeometric distribution arises from sampling without replacement from a finite population containing two types of items, typically labeled success and failure. A fixed number of draws is made, and the random variable counts how many successes appear in the sample. Because items are not replaced, each draw changes the probabilities of subsequent draws, introducing dependence between trials — the key distinction from the binomial experiment.
  `
}

const hypergeometricExplanations = {
  "How to use": "1. Select probability type: 'All values' for full distribution, or choose a specific query like P(X=k) or P(X≤k)\n2. Enter N (population size) - total items available\n3. Enter K (success states) - how many items in population are 'successes'\n4. Enter n (sample size) - how many items you're drawing\n5. For specific queries, enter k (target successes in your sample)\n6. Click Calculate to see probabilities and distribution",
  
  "Parameters": "• N (population size): Total number of items in the population\n• K (success states): Number of 'success' items in the population\n• n (sample size): Number of items you draw from the population\n• k (successes in sample): Number of successes you want in your sample\n• K must be ≤ N, and n must be ≤ N",
  
  "Query types": "• P(X = k): Probability of getting exactly k successes in your sample\n• P(X < k): Probability of getting fewer than k successes\n• P(X ≤ k): Probability of getting k or fewer successes\n• P(X > k): Probability of getting more than k successes\n• P(X ≥ k): Probability of getting k or more successes",
  
  "Examples": "Card drawing: Draw 5 cards from 52-card deck. To find probability of exactly 3 hearts, enter N=52, K=13 (hearts in deck), n=5 (cards drawn), select P(X=3), enter k=3.\n\nQuality control: Batch of 100 items has 15 defects. Drawing sample of 10, to find probability of at most 2 defects, enter N=100, K=15, n=10, select P(X≤2), enter k=2.\n\nLottery: 50 tickets total, 5 are winners. Buying 8 tickets, to find probability of at least 1 winner, enter N=50, K=5, n=8, select P(X≥1), enter k=1.",
  
  "Interpretation": "• Mean (μ = n·K/N): Expected number of successes in your sample\n• Variance: Measure of spread, affected by population and sample sizes\n• Std Dev: Typical variation from expected successes\n• Chart: Shows probability distribution - sampling without replacement means finite range of possible outcomes"
};




   return {
      props:{
         sectionsContent,
         introContent,
         hypergeometricExplanations,
          seoData: {
        title: "Discrete Hypergeometric Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/hypergeometric",
         name: "name"
      },
        
       }
    }
   }

export default function HypergeometricDistributionPage({seoData,sectionsContent , introContent,
  hypergeometricExplanations
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
          // sectionsContent.obj15.content,
          
      <div key={'notation-hypergeometric'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
                {processContent(sectionsContent.obj15.content,)}
            </div>,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          // sectionsContent.obj2.content,
          
            <div key={'parameters-hypergeometric'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
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
           <div key={'pmf-hypergeometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
                  {processContent(sectionsContent.obj4.content)}
                  </div>,
                  <div key={'hypergeometric-pmf-visualization'} style={{transform:'scale(0.8)'}}>
                  <HypergeometricDistribution/>
                  </div>
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
           <div key={'hypergeometric-cdf-visualization'} style={{transform:'scale(0.8)'}}>
                  
                  <HypergeometricDistributionCDF/>
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
                    <CalculatorInstructions key={'explanations'} explanations={hypergeometricExplanations}/>,
                    <div key={'binomial-calculator'} style={{marginBottom:'-150px'}}>
                    <HypergeometricCalculator />,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Hypergeometric Distribution</h1>
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
