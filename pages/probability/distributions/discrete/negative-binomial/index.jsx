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
import NegativeBinomialDistribution from '@/app/components/visualizations/probability/discrete-distribution/NegativeBinomialDistributionPMF'
import NegativeBinomialDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/NegativeBinomialDistributionCDF'
import CalculatorInstructions from '@/app/components/calculators/CalculatorInstructions'
import NegativeBinomialCalculator from '@/app/components/calculators/probability/distributions/NegativeBinomialCalculator'

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
      title:`The Probabilistic Experiment Behind negative binomial distribution`,
      content:`
      The negative binomial distribution generalizes the [geometric distribution](!/probability/distributions/discrete/geometric) by counting the number of trials required until a fixed number of successes is reached, rather than just the first success. Trials are independent [Bernoulli experiments](!/probability/distributions/discrete#bernoulli) with constant success probability, and the process continues until the target number of successes is achieved.

Here, the [random variable](!/probability/random-variables) counts the total number of trials, including both successes and failures. The number of successes is fixed in advance, while the number of failures — and thus the total length of the experiment — is random.

This distribution is useful when success must occur multiple times before stopping, and the timing of those successes is uncertain. When the required number of successes is $1$, the negative binomial distribution reduces exactly to the [geometric distribution](!/probability/distributions/discrete/geometric).
     
`,
      before:``,
      after:``,
      link:'',
      example:`
      Example:

Flipping a coin until you obtain $3$ heads. If $X=7$, this means the third head appears on the seventh flip. The sequence ends at the moment the third success occurs.
      `,
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
$𝑟$: number of successes to achieve (a positive integer)

$𝑝$: probability of success in each trial, with $0<𝑝≤1$

This distribution models the number of trials needed to observe $𝑟$ successes, assuming each trial is independent and has the same probability $𝑝$ of success. 

The outcomes are integers $𝑟$, $𝑟+1$ ,$𝑟+2$ ,…, since at least $𝑟$ trials are needed. 

$𝑟$ controls the target (how many successes), and $𝑝$ controls the chance of achieving each one — together, they define how spread out or concentrated the distribution is.
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
      The **probability mass function (PMF)** of a **negative binomial distribution** is given by:

$$P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}, \\quad k = r, r+1, r+2, \\ldots$$

where $\\binom{k-1}{r-1} = \\frac{(k-1)!}{(r-1)!(k-r)!}$ is the binomial coefficient.

 **Fixed Number of Successes**: The negative binomial distribution models the number of trials needed to achieve exactly $r$ successes in a sequence of independent Bernoulli trials.

 **Support (Range of the Random Variable)**:
  * The random variable $X$ can take on values $r, r+1, r+2, \\ldots$ (integers starting from $r$).
  * $X = k$ means the $r$-th success occurs on the $k$-th trial.
  * The **support** is thus a countably infinite set.

 **Logic Behind the Formula**:
  * $\\binom{k-1}{r-1}$: The number of ways to arrange $r-1$ successes in the first $k-1$ trials (the $k$-th trial must be the $r$-th success)
  * $p^r$: The probability of getting exactly $r$ successes
  * $(1-p)^{k-r}$: The probability of getting exactly $k-r$ failures
  * The total probability sums to 1:
  
  $\\sum_{k=r}^{\\infty} P(X = k) = \\sum_{k=r}^{\\infty} \\binom{k-1}{r-1} p^r (1-p)^{k-r} = 1$
  
  * This follows from the negative binomial series expansion.

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
The [cumulative distribution function (CDF)](!/probability/cdf) of a **negative binomial distribution** is given by:

$$F_X(k) = P(X \\leq k) = \\sum_{i=r}^{k} \\binom{i-1}{r-1} p^r (1-p)^{i-r}$$

Where:
$r$ = number of successes desired (fixed, positive integer)
$p$ = probability of success on each trial
$k$ = number of trials until the $r$-th success (where $k \\geq r$)
$\\binom{i-1}{r-1}$ = binomial coefficient

### Intuition Behind the Formula

**Definition**: The [CDF](!/probability/cdf) gives the probability that the $r$-th success occurs on or before trial $k$.

**Summation of Probabilities**: 
We sum the PMF values from the minimum possible value ($r$ trials) up to $k$ trials:

$$P(X \\leq k) = P(X=r) + P(X=r+1) + P(X=r+2) + \\cdots + P(X=k)$$

**Alternative Formulation via Regularized Incomplete Beta Function**:
The CDF can also be expressed using the regularized incomplete beta function:

$$F_X(k) = I_p(r, k-r+1)$$

This relationship connects the negative binomial distribution to the beta distribution and is often used in statistical software for efficient computation.

**Complementary Form**: 
The probability that the $r$-th success occurs after trial $k$ is:

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

For the **negative binomial distribution**, we apply this general formula to the specific probability mass function of this distribution.

### Formula

$$E[X] = \\frac{r}{p}$$

Where:
$r$ = number of successes desired (fixed, positive integer)
$p$ = probability of success on each trial

### Derivation and Intuition

The negative binomial random variable $X$ represents the number of trials needed to achieve $r$ successes. It can be viewed as the sum of $r$ independent geometric random variables, where each represents the number of trials needed to achieve one additional success.

Since each geometric variable has expected value $\\frac{1}{p}$, and we need $r$ such successes:

$$E[X] = r \\cdot \\frac{1}{p} = \\frac{r}{p}$$

This result follows directly from the linearity of expectation applied to the sum of $r$ geometric random variables.

The result $E[X] = \\frac{r}{p}$ extends the geometric distribution's intuition: if you need one success and expect $\\frac{1}{p}$ trials, then needing $r$ successes should require $r$ times as many trials on average.

### Example

Consider rolling a die until you get three 6's, where $r = 3$ and $p = \\frac{1}{6}$:

$$E[X] = \\frac{3}{1/6} = 18$$

On average, you expect to roll the die 18 times before accumulating three 6's. This is exactly three times the expected wait for a single 6.
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

For the **negative binomial distribution**, we apply this formula to derive the variance.

### Formula

$$\\mathrm{Var}(X) = \\frac{r(1-p)}{p^2}$$

Where:
$r$ = number of successes desired (fixed, positive integer)
$p$ = probability of success on each trial
$(1-p) = q$ = probability of failure on each trial

### Derivation and Intuition

The negative binomial random variable can be viewed as the sum of $r$ independent geometric random variables, each representing the trials needed for one additional success.

Since each geometric variable has variance $\\frac{1-p}{p^2}$, and variances add for independent variables:

$$\\mathrm{Var}(X) = r \\cdot \\frac{1-p}{p^2} = \\frac{r(1-p)}{p^2}$$

The result $\\mathrm{Var}(X) = \\frac{r(1-p)}{p^2}$ extends the geometric distribution's variance by a factor of $r$. As with the geometric case, variance increases rapidly as $p$ decreases (rare successes create high variability) and grows linearly with the number of required successes $r$.

### Standard Deviation

$$\\sigma = \\sqrt{\\frac{r(1-p)}{p^2}} = \\frac{\\sqrt{r(1-p)}}{p}$$

### Example

Consider rolling a die until you get three 6's, where $r = 3$ and $p = \\frac{1}{6}$:

$$\\mathrm{Var}(X) = \\frac{3 \\times \\frac{5}{6}}{(\\frac{1}{6})^2} = \\frac{\\frac{15}{6}}{\\frac{1}{36}} = \\frac{5}{2} \\times 36 = 90$$

$$\\sigma = \\sqrt{90} \\approx 9.487$$

The variance of 90 and standard deviation of about 9.5 indicate high variability around the expected 18 rolls. The actual number of rolls needed could vary substantially from this average.
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

Suppose you're flipping a coin until you get $r = 3$ heads, where the probability of heads is $p = 0.5$. The probability that you need exactly $k = 6$ flips to get your third head is:

$P(X = 6) = \\binom{6-1}{3-1} (0.5)^3 (0.5)^{6-3} = \\binom{5}{2} (0.5)^3 (0.5)^3 = 10 \\cdot 0.125 \\cdot 0.125 = 0.15625$

This means there's a 15.625% chance that you'll need exactly 6 flips to get your third head.

Note: The geometric distribution is a special case of the negative binomial distribution where $r = 1$.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Interactive Calculator`,
      content:``,
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
      $X \\sim \\text{NegBin}(r, p)$ or $X \\sim \\text{NB}(r, p)$ — **distribution of the random variable**.

$\\text{NegativeBinomial}(r, p)$ — **used to denote the distribution itself (not the random variable)**.

$\\text{NB}(r, p)$ — **common shorthand, especially in statistical software**.

$P(X = k) = \\binom{k - 1}{r - 1} p^r (1 - p)^{k - r}, \\quad \\text{for } k = r, r+1, r+2, \\ldots$ — **probability mass function (PMF)** (trials until $r$-th success), where:

\t$r$ — number of successes desired

\t$p$ — probability of success on each trial

\t$k$ — total number of trials until $r$-th success

\t$\\binom{k-1}{r-1} = \\frac{(k-1)!}{(r-1)!(k-r)!}$ — binomial coefficient

**Alternative PMF formulation:**

\t$P(X = k) = \\binom{k + r - 1}{k} p^r (1 - p)^k, \\quad \\text{for } k = 0, 1, 2, \\ldots$ — number of failures before $r$-th success

**Alternative notations:**

\t$q = 1 - p$ — probability of failure, so PMF can be written as $P(X = k) = \\binom{k-1}{r-1} p^r q^{k-r}$

**Key properties:**

\t$E[X] = \\frac{r}{p}$ — expected value (mean)

\t$\\text{Var}(X) = \\frac{r(1-p)}{p^2}$ — variance

**Relationship to geometric distribution:**

\t$\\text{NegBin}(1, p) = \\text{Geom}(p)$ — negative binomial is a generalization of geometric distribution

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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Negative Binomial Distribution](!/probability/distributions/discrete/negative-binomial#11) →@
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
  title: "Negative Binomial Distribution: Trials Until the r-th Success",
  content: `
  The negative binomial distribution extends the geometric experiment by continuing the sequence of independent Bernoulli trials until a specified number of successes is reached. Rather than stopping at the first success, the experiment proceeds until the 
$r$-th success occurs. The random variable measures the total number of trials required to reach this target, capturing variability in how long repeated success takes to accumulate.
  `
}

const negativeBinomialExplanations = {
  "How to use": "1. Select probability type: 'All values' for full distribution, or choose a specific query\n2. Enter r (number of successes) - how many successes you want to achieve\n3. Enter p (success probability) - probability of success on each trial (0 < p ≤ 1)\n4. For specific queries, enter k (number of failures) - failures before achieving r successes\n5. Click Calculate to see probabilities and distribution",
  
  "Parameters": "• r (number of successes): Target number of successes you want to achieve (must be positive integer)\n• p (success probability): Probability of success on each trial (0 < p ≤ 1)\n• k (number of failures): Number of failures that occur before the r-th success (non-negative integer)\n• q (failure probability): Equals 1 - p",
  
  "Query types": "• P(X = k): Probability of exactly k failures before r-th success\n• P(X < k): Probability of fewer than k failures before r-th success\n• P(X ≤ k): Probability of k or fewer failures before r-th success\n• P(X > k): Probability of more than k failures before r-th success\n• P(X ≥ k): Probability of k or more failures before r-th success",
  
  "Examples": "Customer acquisition: Need 5 customers (r=5) with 20% conversion rate (p=0.2). Select 'All values' to see distribution of prospects needed.\n\nManufacturing: Need to produce 10 good items (r=10) with 95% success rate (p=0.95). Select P(X≤3) and enter k=3 to find probability of at most 3 defects before getting 10 good items.\n\nSales calls: Need 3 sales (r=3) with 30% close rate (p=0.3). Select P(X=7) and enter k=7 to find probability of exactly 7 rejections before getting 3 sales.",
  
  "Interpretation": "• Mean (μ = r(1-p)/p): Expected number of failures before achieving r successes\n• Variance: Measure of variability in failure count\n• Std Dev: Typical deviation from expected failures\n• Chart: Shows probability distribution of failures - extends geometric distribution to multiple successes"
};


   return {
      props:{
         sectionsContent,
         introContent,
         negativeBinomialExplanations,
          seoData: {
        title: "Discrete Negative Binomial Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/negative-binomial",
         name: "name"
      },
        
       }
    }
   }

export default function NegativeBinomialDistributionPage({seoData,sectionsContent , introContent,
  negativeBinomialExplanations,
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
          
    <div key={'notation-negative-binomial'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
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
            <div key={'parameters-negative'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
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
           <div key={'pmf-negative'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
                  {processContent(sectionsContent.obj4.content)}
                  </div>,
                   <div key={'negative-pmf-visualization'} style={{transform:'scale(0.8)'}}>
                          
        <NegativeBinomialDistribution/>
        </div>   
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
            <div key={'negative-cdf-visualization'} style={{transform:'scale(0.8)'}}>
                          
        
        <NegativeBinomialDistributionCDF/>
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
                    <CalculatorInstructions key={'explanations'} explanations={negativeBinomialExplanations}/>,
                    <div key={'binomial-calculator'} style={{marginBottom:'-250px'}}>
                    <NegativeBinomialCalculator />,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Negative Binomial Distribution</h1>
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
