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
import DiscreteUniformDistribution from '@/app/components/visualizations/probability/discrete-distribution/DiscreteUniformDistributionPMF'
import DiscreteUniformDistributionCDF from '@/app/components/visualizations/probability/discrete-distribution/CDFs/DiscreteUniformDistributionCDF'
import CalculatorInstructions from '@/app/components/calculators/CalculatorInstructions'
import DiscreteUniformCalculator from '@/app/components/calculators/probability/distributions/UniformDistributionCalculator'

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
      title:`The Probabilistic Experiment Behind Discrete Uniform distribution`,
      content:`
      The discrete uniform distribution represents situations where a random experiment produces outcomes from a finite set, and every outcome is equally likely. There is no preference, weighting, or bias toward any value in the set. The defining feature is not randomness alone, but symmetry: the mechanism that generates outcomes treats all possibilities identically.

This distribution is appropriate when the experiment consists of one selection from a known finite collection and there is no additional structure such as repeated trials, success–failure outcomes, or [dependence](!/probability/independence) between selections. Once the range of possible values is fixed, the distribution is fully determined. There are no hidden dynamics — probability is spread evenly across the entire support.

Due to this simplicity, the discrete uniform distribution often serves as a baseline model. More complex [discrete distributions](!/probability/distributions/discrete) can frequently be understood as deviations from uniformity caused by repetition, conditioning, or structural constraints.

      `,
      before:``,
      after:``,
      link:'',
      example:`
      Example:

Rolling a [fair six-sided die](!/probability/models/dice-roll) once. The possible outcomes are $\{1,2,3,4,5,6\}$, and each value has the same probability. No outcome is favored over another by the mechanism of the experiment.
      `,
  
  
    },
    obj2:{
      title:`Parameters`,
      content:`
  $a$  : the smallest integer in the range  
  
  $b$  : the largest integer in the range

The uniform discrete distribution assigns equal probability to each integer between $a$ and $b$, inclusive. 

The values must be equally spaced and finite in number. 

The parameters define the range — once $a$ and $b$ are set, every integer in that closed interval has probability $\\frac{1}{b - a + 1}$.

This distribution is used when there's no reason to favor any outcome over another — every value is equally likely by design.
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
      The **probability mass function (PMF)** of a **discrete uniform distribution** is given by:

$$P(X = x) = \\frac{1}{b - a + 1} = \\frac{1}{n}, \\quad x \\in \\{x_1, x_2, \\dots, x_n\\}$$

Where :
$a$ = lower bound (integer)
$b$ = upper bound (integer)
$𝑛=b−a+1$ is total number of possible values 

### Intuition Behind the Formula

**Uniformity**: The term "uniform" implies that each outcome is equally likely. That is, no single value of the random variable is preferred over another. This is the key feature of a uniform distribution.

**Support (Range of the Random Variable)**:
  * The random variable $X$ can take on $n = b - a + 1$ distinct values: $x_1, x_2, \\ldots, x_n$.
  * These values could be consecutive integers (like $1, 2, 3, \\ldots, n$) or any set of $n$ distinct values.
  * The **range** or **support** is thus a finite, countable set.

**Logic Behind the Formula**:
 
 The total probability must sum to 1:
  
  $\\sum_{i=1}^n P(X = x_i) = 1$
  
Since all probabilities are equal:
  
  $n \\cdot \\frac{1}{n} = (b - a + 1) \\cdot \\frac{1}{b - a + 1} = 1$
  
  This makes the individual probability of each outcome $\\frac{1}{n} = \\frac{1}{b - a + 1}$.


      `,
      before:``,
      after:``,
      link:'',
  
    },
//     obj5:{
//       title:`Cumulative Distribution Function (CDF)`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       formula:`
//       Let 
// X
// X be uniform on the integers 
// {
// a
// ,
// a
// +
// 1
// ,
// …
// ,
// b
// }
// {a,a+1,…,b}, where 
// a
// ,
// b
// ∈
// Z
// a,b∈Z and 
// a
// ≤
// b
// a≤b. The number of points is 
// n
// =
// b
// −
// a
// +
// 1
// n=b−a+1.
// ​

// F
// X
// (
// x
// )
// =
// {
// 0
// ,
// x
// <
// a
// ⌊
// x
// ⌋
// −
// a
// +
// 1
// b
// −
// a
// +
// 1
// ,
// a
// ≤
// x
// ≤
// b
// 1
// ,
// x
// >
// b
// F 
// X
//  (x)= 
// ⎩
// ⎨
// ⎧
  
// 0,
// b−a+1
// ⌊x⌋−a+1
//  ,
// 1,
  
// x<a
// a≤x≤b
// x>b
 

      
//       `,
  
//     },
   
obj5:{
  title:`Cumulative Distribution Function (CDF)`,
  content:`
The [cumulative distribution function (CDF)](!/probability/cdf) of a **discrete uniform distribution** is given by:

$$F_X(x) = P(X \\leq x) = \\begin{cases} 0, & x < a \\\\ \\frac{\\lfloor x \\rfloor - a + 1}{b - a + 1}, & a \\leq x \\leq b \\\\ 1, & x > b \\end{cases}$$

Where:
$a$ = lower bound (integer)
$b$ = upper bound (integer)
$\\lfloor x \\rfloor$ = floor function (largest integer less than or equal to $x$)

### Intuition Behind the Formula

**Definition**: The [CDF](!/probability/cdf) gives the probability that the random variable $X$ takes on a value less than or equal to $x$.

**Three Regions**:

1. **Before the range** ($x < a$): No outcomes are possible below $a$, so $F_X(x) = 0$.

2. **Within the range** ($a \\leq x \\leq b$): The CDF counts how many integer values from $a$ to $\\lfloor x \\rfloor$ are included, divided by the total number of outcomes $(b - a + 1)$.
   * Number of outcomes up to $\\lfloor x \\rfloor$: $\\lfloor x \\rfloor - a + 1$
   * Total outcomes: $b - a + 1$
   * Therefore: $F_X(x) = \\frac{\\lfloor x \\rfloor - a + 1}{b - a + 1}$

3. **After the range** ($x > b$): All outcomes have occurred, so $F_X(x) = 1$.

**Step Function Behavior**: Since $X$ only takes integer values, the CDF remains constant between integers and jumps by $\\frac{1}{b - a + 1}$ at each integer point.
  `,
  before:``,
  after:``,
  link:'',
},

// obj6:{
//       title:`Expected Value (mean)`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
obj6: {
  title: `Expected Value (Mean)`,
  content: `
As explained in the [general case for calculating expected value](!/probability/expected-value#general), the expected value of a discrete random variable is computed as a weighted sum where each possible value is multiplied by its probability:

$$E[X] = \\sum_{x} x \\cdot P(X = x)$$

For the **discrete uniform distribution**, we apply this general formula to the specific probability mass function of this distribution.

### Formula

$$E[X] = \\frac{a + b}{2}$$

Where:
$a$ = minimum value (lower bound)
$b$ = maximum value (upper bound)

### Derivation and Intuition

Starting from the general definition and substituting the PMF $P(X = x) = \\frac{1}{b - a + 1}$ for each $x \\in \\{a, a+1, \\ldots, b\\}$:

$$E[X] = \\sum_{x=a}^{b} x \\cdot \\frac{1}{b - a + 1} = \\frac{1}{b - a + 1} \\sum_{x=a}^{b} x$$

The sum of integers from $a$ to $b$ is:

$$\\sum_{x=a}^{b} x = \\frac{(b - a + 1)(a + b)}{2}$$

Substituting back:

$$E[X] = \\frac{1}{b - a + 1} \\cdot \\frac{(b - a + 1)(a + b)}{2} = \\frac{a + b}{2}$$

The result $E[X] = \\frac{a + b}{2}$ captures the symmetry of the uniform distribution: the expected value is simply the midpoint between the minimum and maximum values. Since all outcomes are equally likely, the average naturally falls at the center of the range.

### Example

Consider rolling a fair six-sided die, where $a = 1$ and $b = 6$:

$$E[X] = \\frac{1 + 6}{2} = 3.5$$

The expected value is 3.5, which is the arithmetic mean of all possible outcomes $\\{1, 2, 3, 4, 5, 6\\}$. Note that the expected value need not be a possible outcome of the random variable.
  `,
  before: ``,
  after: ``,
  link: '',
},

// obj7:{
//       title:`Variance and Standard Deviation`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
obj7: {
  title: `Variance and Standard Deviation`,
  content: `
  The [variance](!/probability/variance#calculate) of a discrete random variable measures how spread out the values are around the expected value. It is computed as:

$$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\sum_{x} (x - \\mu)^2 P(X = x)$$

Or using the shortcut formula:

$$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2$$

For the **discrete uniform distribution**, we apply this formula to derive the variance.

### Formula

$$\\mathrm{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12}$$

Where:
$a$ = minimum value (lower bound)
$b$ = maximum value (upper bound)

### Derivation and Intuition

Starting with the shortcut formula, we need to calculate $\\mathbb{E}[X^2]$.

We know from the expected value section that $\\mu = \\frac{a + b}{2}$.

For $\\mathbb{E}[X^2]$, using the PMF $P(X = x) = \\frac{1}{b - a + 1}$:

$$\\mathbb{E}[X^2] = \\sum_{x=a}^{b} x^2 \\cdot \\frac{1}{b - a + 1} = \\frac{1}{b - a + 1} \\sum_{x=a}^{b} x^2$$

Using the formula for sum of squares: $\\sum_{x=a}^{b} x^2 = \\frac{(b - a + 1)(2b^2 + 2ab + 2a^2 - a - b)}{6}$

After algebraic manipulation:

$$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2 = \\frac{(b - a + 1)^2 - 1}{12}$$

The result shows that variance depends on the range width $(b - a + 1)$ squared. A wider range of equally likely values produces higher variance. The formula is symmetric and increases quadratically with the spread between $a$ and $b$.

### Standard Deviation

$$\\sigma = \\sqrt{\\mathrm{Var}(X)} = \\sqrt{\\frac{(b - a + 1)^2 - 1}{12}}$$

### Example

For a fair six-sided die where $a = 1$ and $b = 6$:

$$\\mathrm{Var}(X) = \\frac{(6 - 1 + 1)^2 - 1}{12} = \\frac{36 - 1}{12} = \\frac{35}{12} \\approx 2.917$$

$$\\sigma = \\sqrt{\\frac{35}{12}} \\approx 1.708$$

The variance of approximately 2.917 indicates moderate spread around the mean of 3.5, with outcomes ranging from 1 to 6.
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
Suppose you roll a fair six-sided die. The possible outcomes are $\\{1, 2, 3, 4, 5, 6\\}$, and the probability of each face is:

$P(X = x) = \\frac{1}{6} = \\frac{1}{6 - 1 + 1}, \\quad x = 1, 2, 3, 4, 5, 6$

Each face has an equal and independent chance of appearing.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Interactive Calculator`,
      content:`
      This interactive calculator computes probabilities for the discrete uniform distribution, where every value in a range has equal probability of occurring. Enter your minimum value ($a$) and maximum value ($b$) to model scenarios like fair dice rolls, random number selection, or lottery draws. The calculator shows you the equal probability for each value and lets you compute cumulative probabilities for any range within your specified bounds.
      
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
      $X \\sim \\text{Unif}(a, b)$ or $X \\sim \\text{DU}(a, b)$ — **distribution of the random variable**.

$\\text{DiscreteUniform}(a, b)$ — **used to denote the distribution itself (not the random variable)**.

$\\text{U}(a, b)$ — **also used, though it can refer to either discrete or continuous; context is important**.

$P(X = k) = \\frac{1}{b - a + 1}, \\quad \\text{for } k = a, a+1, \\ldots, b$ — **probability mass function (PMF)**, where:

\t$a$ — minimum value (lower bound)

\t$b$ — maximum value (upper bound)

\t$k$ — any integer in the range $[a, b]$

\t$b - a + 1$ — total number of possible outcomes

**Key properties:**

\t$E[X] = \\frac{a + b}{2}$ — expected value (mean)

\t$\\text{Var}(X) = \\frac{(b - a + 1)^2 - 1}{12}$ — variance

**Special case:**

\t$\\text{DiscreteUniform}(1, n)$ — uniform distribution on $\\{1, 2, \\ldots, n\\}$, often used for fair dice or simple random selection

      
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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Discrete Uniform Distribution](!/probability/distributions/discrete/uniform#11) →@
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
  title: "Discrete Uniform Distribution: Equal-Chance Selection",
  content: `
  The probabilistic experiment behind the discrete uniform distribution is one where a single outcome is selected from a finite set of possibilities, and every outcome is equally likely. There is no notion of success or failure, repetition, or accumulation — only a fair selection from a fixed range. Rolling a fair die or randomly choosing an integer from a known interval are typical examples. The defining feature of this experiment is the absence of bias: no outcome is favored over another.
  `
}

const discreteUniformExplanations = {
  "How to use": "1. Select probability type: 'All values' for full distribution, or choose a specific query\n2. Enter a (minimum value) - lowest possible value (integer)\n3. Enter b (maximum value) - highest possible value (integer, must be greater than a)\n4. For specific queries, enter x (target value) - the specific value you want to query\n5. Click Calculate to see probabilities and distribution",
  
  "Parameters": "• a (minimum): Lowest value in the range (integer)\n• b (maximum): Highest value in the range (integer, b > a)\n• x (target value): Specific value to query (must be between a and b)\n• n (count): Total number of possible values = b - a + 1",
  
  "Query types": "• P(X = x): Probability of getting exactly value x (always 1/n)\n• P(X < x): Probability of getting value less than x\n• P(X ≤ x): Probability of getting value less than or equal to x\n• P(X > x): Probability of getting value greater than x\n• P(X ≥ x): Probability of getting value greater than or equal to x",
  
  "Examples": "Fair die: Enter a=1, b=6 to model standard die. Select P(X=4) and enter x=4 to find probability of rolling a 4 (result: 1/6).\n\nRandom selection: Choosing from items numbered 10 to 20, enter a=10, b=20. Select 'All values' to see each number has equal 1/11 probability.\n\nLottery ticket: Numbers 1-50, enter a=1, b=50. Select P(X≤25) and enter x=25 to find probability of number 25 or less (result: 0.5).",
  
  "Interpretation": "• Mean (μ = (a+b)/2): Average value, exactly in the middle of range\n• Variance (σ² = (n²-1)/12): Spread of values\n• Probability (1/n): Each value has exactly equal probability\n• Chart: All bars have equal height - uniform distribution"
};



   return {
      props:{
         sectionsContent,
         introContent,
         discreteUniformExplanations,
          seoData: {
        title: "Discrete Uniform Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/discrete/uniform",
         name: "name"
      },
        
       }
    }
   }

export default function DiscreteUniformDistributionPage({seoData,sectionsContent , introContent,
  discreteUniformExplanations,
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

          
    <div key={'notation-uniform'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
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
      <div key={'parameters-uniform'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
                {processContent(sectionsContent.obj2.content,)}
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
           <div key={'pmf-uniform'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
                      {processContent(sectionsContent.obj4.content)}
                  </div>,
          <div key={'uniform-pmf-visualization'} style={{transform:'scale(0.8)'}}>
         
          <DiscreteUniformDistribution/>
          </div>        
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
           <div key={'uniform-pmf-visualization'} style={{transform:'scale(0.8)'}}>
         
         
          <DiscreteUniformDistributionCDF/>
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
                    <CalculatorInstructions key={'explanations'} explanations={discreteUniformExplanations}/>,
                    <div key={'binomial-calculator'} style={{marginBottom:'-250px'}}>
                    <DiscreteUniformCalculator />,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Discrete Uniform Distribution</h1>
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
