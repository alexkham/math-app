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
import GeometricDistribution from '@/app/components/visualizations/probability/discrete-distribution/GeometricDistributionPMF'
import { transform } from 'typescript'
import GeometricDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/GeometricDistributionCDF'
import GeometricDistributionCalculator from '@/app/components/calculators/probability/distributions/GeometricDistributionCalculator'
import CalculatorInstructions from '@/app/components/calculators/CalculatorInstructions'


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
      title:`The Probabilistic Experiment Behind geometric distribution`,
      content:`
      The geometric distribution serves to count the number of trials required until the first success occurs. Unlike the [binomial distribution](!/probability/distributions/discrete/binomial), the number of trials is not fixed in advance. Instead, trials continue indefinitely until success happens for the first time.

Each trial is a [Bernoulli experiment](!/probability/distributions/discrete#bernoulli): two outcomes, constant success probability, and [independence](!/probability/independence) between trials. The [random variable](!/probability/random-variables) counts when success occurs, not how many successes occur in total. This makes the geometric distribution fundamentally about waiting time rather than accumulation.

A defining characteristic of the geometric distribution is the memoryless property: the probability that success occurs in future trials does not depend on how many failures have already occurred. The process effectively “restarts” after each failure.

 
`,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Flipping a [coin](!/probability/models/coin-toss) repeatedly until the first heads appears. If $X=4$, this means the first three flips were tails and the fourth flip was heads. The experiment stops as soon as success occurs.
     
      `
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
      $𝑝$: probability of success on a single trial, with $0<𝑝≤1$

The geometric distribution models the number of trials needed to get the first success in a sequence of independent Bernoulli trials. 

There's only one parameter — $𝑝$, the chance of success each time — which completely determines the shape of the distribution. 

The outcomes are positive integers: $1,2,3,…$ where each value represents the trial number on which success first occurs.
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
         The **probability mass function (PMF)** of a **geometric distribution** is given by:

$$P(X = k) = (1-p)^{k-1} p, \\quad k = 1, 2, 3, \\ldots$$


* **First Success**: The geometric distribution models the number of trials needed to get the first success in a sequence of independent Bernoulli trials.

* **Support (Range of the Random Variable)**:
  * The random variable $X$ can take on values $1, 2, 3, \\ldots$ (all positive integers).
  * $X = k$ means the first success occurs on the $k$-th trial.
  * The **support** is thus a countably infinite set.

* **Logic Behind the Formula**:
  * $(1-p)^{k-1}$: The probability of getting $k-1$ failures before the first success
  * $p$: The probability of success on the $k$-th trial
  * The total probability sums to 1:
  
  $\\sum_{k=1}^{\\infty} P(X = k) = \\sum_{k=1}^{\\infty} (1-p)^{k-1} p = p \\sum_{k=1}^{\\infty} (1-p)^{k-1} = p \\cdot \\frac{1}{1-(1-p)} = p \\cdot \\frac{1}{p} = 1$
  
  * This uses the geometric series formula: $\\sum_{k=0}^{\\infty} r^k = \\frac{1}{1-r}$ for $|r| < 1$

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
The [cumulative distribution function (CDF)](!/probability/cdf) of a **geometric distribution** is given by:

$$F_X(k) = P(X \\leq k) = 1 - (1-p)^k$$

Where:
$p$ = probability of success on each trial
$k$ = number of trials until and including the first success (where $k \\geq 1$)
$(1-p)$ = probability of failure on each trial

### Intuition Behind the Formula

**Definition**: The [CDF](!/probability/cdf) gives the probability that the first success occurs on or before trial $k$.

**Complement Approach**: 
Instead of summing probabilities from 1 to $k$, it's easier to use the complement. The event "first success on or before trial $k$" is the complement of "first success after trial $k$", which means all of the first $k$ trials are failures:

$$P(X \\leq k) = 1 - P(\\text{all first } k \\text{ trials fail}) = 1 - (1-p)^k$$

**Verification by Summation**:
We can verify this by summing the PMF:

$$P(X \\leq k) = \\sum_{i=1}^{k} (1-p)^{i-1}p = p\\sum_{i=0}^{k-1} (1-p)^i = p \\cdot \\frac{1-(1-p)^k}{1-(1-p)} = 1-(1-p)^k$$

**Monotonic Property**: As $k$ increases, $(1-p)^k$ decreases toward 0, so $F_X(k)$ increases toward 1, which reflects the increasing certainty that success will eventually occur.
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

For the **geometric distribution**, we apply this general formula to the specific probability mass function of this distribution.

### Formula

$$E[X] = \\frac{1}{p}$$

Where:
$p$ = probability of success on each trial

### Derivation and Intuition

Starting from the general definition and substituting the PMF $P(X = k) = (1-p)^{k-1}p$ for $k = 1, 2, 3, \\ldots$:

$$E[X] = \\sum_{k=1}^{\\infty} k \\cdot (1-p)^{k-1} p = p \\sum_{k=1}^{\\infty} k \\cdot (1-p)^{k-1}$$

Using the formula for the derivative of a geometric series, we recognize that:

$$\\sum_{k=1}^{\\infty} k \\cdot r^{k-1} = \\frac{1}{(1-r)^2}$$

Substituting $r = 1-p$:

$$E[X] = p \\cdot \\frac{1}{(1-(1-p))^2} = p \\cdot \\frac{1}{p^2} = \\frac{1}{p}$$

The result $E[X] = \\frac{1}{p}$ captures an intuitive relationship: if the probability of success on each trial is $p$, then on average you need $\\frac{1}{p}$ trials to achieve the first success. The smaller the probability of success, the more trials you expect to need.

### Example

Consider rolling a die until you get a 6, where $p = \\frac{1}{6}$:

$$E[X] = \\frac{1}{1/6} = 6$$

On average, you expect to roll the die 6 times before seeing the first 6. This makes intuitive sense: with a 1-in-6 chance per roll, the average wait is 6 rolls.
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

For the **geometric distribution**, we apply this formula to derive the variance.

### Formula

$$\\mathrm{Var}(X) = \\frac{1-p}{p^2}$$

Where:
$p$ = probability of success on each trial
$(1-p) = q$ = probability of failure on each trial

### Derivation and Intuition

Starting with the shortcut formula, we need to calculate $\\mathbb{E}[X^2]$.

We know from the expected value section that $\\mu = \\frac{1}{p}$.

Using the PMF $P(X = k) = (1-p)^{k-1}p$ and applying summation techniques involving derivatives of geometric series:

$$\\mathbb{E}[X^2] = \\sum_{k=1}^{\\infty} k^2 (1-p)^{k-1} p = \\frac{2-p}{p^2}$$

Applying the shortcut formula:

$$\\mathrm{Var}(X) = \\frac{2-p}{p^2} - \\left(\\frac{1}{p}\\right)^2 = \\frac{2-p}{p^2} - \\frac{1}{p^2} = \\frac{1-p}{p^2}$$

The result $\\mathrm{Var}(X) = \\frac{1-p}{p^2}$ shows that variance increases as $p$ decreases. When success is rare (small $p$), the waiting time becomes highly variable—sometimes you succeed quickly, sometimes you wait a very long time. The quadratic relationship with $p$ in the denominator means variance grows rapidly as $p$ approaches zero.

### Standard Deviation

$$\\sigma = \\sqrt{\\frac{1-p}{p^2}} = \\frac{\\sqrt{1-p}}{p}$$

### Example

Consider rolling a die until you get a 6, where $p = \\frac{1}{6}$:

$$\\mathrm{Var}(X) = \\frac{1 - \\frac{1}{6}}{(\\frac{1}{6})^2} = \\frac{\\frac{5}{6}}{\\frac{1}{36}} = \\frac{5}{6} \\times 36 = 30$$

$$\\sigma = \\sqrt{30} \\approx 5.477$$

The variance of 30 and standard deviation of about 5.5 indicate substantial variability around the expected wait time of 6 rolls. You might get lucky and succeed on roll 2, or unlucky and wait 15+ rolls.
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

Suppose you're rolling a fair six-sided die until you get a 6. The probability of rolling a 6 is $p = \\frac{1}{6}$. The probability that you need exactly $k = 4$ rolls to get your first 6 is:

$P(X = 4) = \\left(\\frac{5}{6}\\right)^{4-1} \\cdot \\frac{1}{6} = \\left(\\frac{5}{6}\\right)^{3} \\cdot \\frac{1}{6} \\approx 0.096$

This means there's about a 9.6% chance that you'll need exactly 4 rolls to get your first 6.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Interactive Calculator`,
      content:`
      This interactive calculator computes probabilities for the geometric distribution, which models the number of trials needed until the first success occurs. Enter your success probability ($p$) and choose whether you want the full distribution or specific probabilities like $P(X=k)$, $P(X<k)$, or $P(X≥k)$ to find how likely you are to achieve your first success on a particular trial. Perfect for modeling scenarios like sales conversions, quality testing, or any situation where you're waiting for the first success.
     
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
      $X \\sim \\text{Geom}(p)$ or $X \\sim \\text{Geometric}(p)$ — **distribution of the random variable**.

$\\text{Geom}(p)$ — **used to denote the distribution itself (not the random variable)**.

$G(p)$ — **less common shorthand in some texts or software contexts**.

$P(X = k) = (1 - p)^{k - 1} p, \\quad \\text{for } k = 1, 2, 3, \\ldots$ — **probability mass function (PMF)**, where:

\t$p$ — probability of success on each trial

\t$k$ — number of trials until first success

**Alternative PMF formulation:**

\t$P(X = k) = (1 - p)^k p, \\quad \\text{for } k = 0, 1, 2, \\ldots$ — number of failures before first success

**Alternative notations:**

\t$q = 1 - p$ — probability of failure, so PMF can be written as $P(X = k) = q^{k-1} p$

**Key properties:**

\t$E[X] = \\frac{1}{p}$ — expected value (mean)

\t$\\text{Var}(X) = \\frac{1-p}{p^2}$ — variance

**Memoryless property:**

\t$P(X > m + n \\mid X > m) = P(X > n)$ — the distribution has no memory
      
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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Geometric Distribution](!/probability/distributions/discrete/geometric#11) →@
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
  title: "Geometric Distribution: Trials Until First Success",
  content: `
  The geometric distribution is based on a sequence of independent Bernoulli trials that continues until the first success occurs. The number of trials is not fixed in advance; instead, the experiment stops as soon as success is observed. The random variable represents how long it takes to achieve the first success, making the timing of success — not the total count — the central focus.
  `
}


const geometricExplanations = {
  "How to use": "1. Select probability type: 'All values' shows full distribution, or choose a specific query like P(X=k) or P(X≤k)\n2. Enter p (success probability) - must be between 0 and 1, cannot be 0\n3. For specific queries, enter k (trial number) - must be a positive integer\n4. Click Calculate to see results including mean, variance, and probability distribution",
  
  "Parameters": "• p (success probability): Probability of success on each trial (0 < p ≤ 1)\n• k (number of trials): Which trial you're interested in - must be at least 1\n• q (failure probability): Equals 1 - p, probability of failure on each trial",
  
  "Query types": "• P(X = k): Probability that first success occurs on exactly trial k\n• P(X < k): Probability that first success occurs before trial k\n• P(X ≤ k): Probability that first success occurs on or before trial k\n• P(X > k): Probability that first success occurs after trial k\n• P(X ≥ k): Probability that first success occurs on or after trial k",
  
  "Examples": "Sales calls: If conversion rate is 0.2 (p=0.2), enter p=0.2 and select 'All values' to see distribution of trials until first sale.\n\nQuality testing: With 10% defect rate (p=0.1), select P(X≤5) and enter k=5 to find probability of finding first defect within 5 items.\n\nJob applications: With 30% interview rate (p=0.3), select P(X=3) and enter k=3 to find probability of getting first interview on exactly the 3rd application.",
  
  "Interpretation": "• Mean (μ = 1/p): Expected number of trials until first success\n• Variance (σ² = (1-p)/p²): Variability in number of trials needed\n• Std Dev (σ): Typical deviation from expected trials\n• Chart: Shows how probability decreases as trial number increases - first few trials most likely"
};




   return {
      props:{
         sectionsContent,
         introContent,
         geometricExplanations,
          seoData: {
        title: "Discrete Geometric Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/geometric",
         name: "name"
      },
        
       }
    }
   }

export default function GeometricDistributionPage({seoData,sectionsContent , introContent,geometricExplanations}) {

    
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

            <div key={'notation-geometric'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
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
            <div key={'parameters-geometric'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
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

           <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
                  {processContent(sectionsContent.obj4.content)}
                  </div>,
          <div key={'pmf-visualization-geometric'} style={{transform:'scale(0.8)'}}>
           <GeometricDistribution/>

          </div>        
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
            <div key={'cdf-visualization-geometric'} style={{transform:'scale(0.8)'}}>
           
           <GeometricDistributionCDF/>

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
          <CalculatorInstructions key={'instructions'} explanations={geometricExplanations}/>,
          <div style={{marginBottom:'-250px'}}>
          <GeometricDistributionCalculator/>
          </div>,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Geometric Distribution</h1>
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
