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
import ContinuousUniformDistribution from '@/app/components/visualizations/probability/continuous-distribution/ContinuousUniformDistribution'
import ContinuousUniformDistributionCDF from '@/app/components/visualizations/probability/continuous-distribution/CDF/ContinuousUniformDistributionCDF'
import ContinuousUniformCalculator from '@/app/components/calculators/probability/distributions/continuous/UniformDistributionCalculator'


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
      title:`The Probabilistic Experiment Behind continuous uniform distribution`,
      content:`
      The probabilistic experiment behind the continuous uniform distribution begins with the assumption that an outcome can occur anywhere within a fixed interval, and that no location inside that interval is preferred over another. The key idea is not randomness over trials, but randomness over position or value. Once the bounds of the interval are set, the experiment treats every point between them as equally plausible.

This type of experiment arises when the only information available is that a value lies somewhere between two limits, and there is no mechanism that biases one sub-interval over another. The uncertainty is purely geometric: probability corresponds to relative length, not to isolated points. Because the outcomes form a continuum, individual values have zero probability; only ranges matter.

The defining feature of this experiment is complete symmetry across the interval. If one interval is twice as long as another, it is twice as likely to contain the outcome. Nothing else distinguishes outcomes.

Like the [discrete uniform distribution](!/probability/distributions/discrete/uniform), the continuous uniform distribution is built on the idea of complete symmetry, no outcome is favored over another. The difference lies only in how probability is assigned: [discrete uniform](!/probability/distributions/discrete/uniform) spreads probability across a finite set of distinct values, while continuous uniform spreads it evenly across an entire interval, with probability determined by length rather than individual points.
      `,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Choose a real number at random between 0 and 10, with no additional information. The chance that the number lies between 2 and 4 depends only on the interval length (2 units), not on where it sits inside the range.
      `,
  
  
    },
    obj2:{
      title:`Notation`,
      content:`
      $X \\sim U(a, b)$ — distribution of the [random variable](!/probability/random-variables).

$X \\sim \\text{Uniform}(a, b)$ — alternative explicit form.

$U(a, b)$ or $\\text{Unif}(a, b)$ — used to denote the distribution itself (not the [random variable](!/probability/random-variables)).

$U(0, 1)$ — the standard uniform distribution on the unit interval.

**Note:** The continuous uniform distribution is distinct from the discrete uniform distribution. The continuous version has a probability density function, while the discrete version has a probability mass function.
      
      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      `,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Parameters`,
      content:`
      **a**: lower bound of the interval, where $a \\in \\mathbb{R}$

**b**: upper bound of the interval, where $b \\in \\mathbb{R}$ and $b > a$

The continuous uniform distribution is fully characterized by these two parameters. **a** and **b** define the endpoints of the interval where the random variable can take values. The distribution assigns equal probability density to every point in this interval, making it the simplest continuous distribution.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Support (Range)`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Probability Density Function (PDF) and Support (Range)`,
      content:`
      <h3 style="color: #1e40af;">Probability Density Function (PDF)</h3>
The **probability density function (PDF)** of a **continuous uniform distribution** is given by:

$$f(x) = \\begin{cases} \\frac{1}{b-a} & \\text{if } a \\leq x \\leq b \\\\ 0 & \\text{otherwise} \\end{cases}$$

### Intuition Behind the Formula

 **Constant Density**: The uniform distribution has a flat, rectangular shape. The probability density is the same at every point within the interval [a, b].

 **Parameters**:
  • $a$: The minimum value the [random variable](!/probability/random-variables) can take
  • $b$: The maximum value the [random variable](!/probability/random-variables) can take
  • The width of the interval is $b - a$

 **Support (Range of the Random Variable)**:
  • The [random variable](!/probability/random-variables) $X$ can take any value in the closed interval: $[a, b]$
  • Outside this interval, the probability density is zero
  • The **support** is the finite interval [a, b]

 **Logic Behind the Formula**:
  • $\\frac{1}{b-a}$: The constant density ensures the total area under the curve equals 1
  • The height of the rectangle is $\\frac{1}{b-a}$ and the width is $b-a$, so area = height × width = 1
  • All subintervals of the same length have equal probability
  • The total area under the curve equals 1:
  
  $$\\int_{a}^{b} \\frac{1}{b-a}\\,dx = \\frac{1}{b-a} \\cdot (b-a) = 1$$

**Practical Example:** A bus arrives at a stop every 10 minutes. If you arrive at a random time, your wait time $X$ follows $U(0, 10)$. The PDF is $f(x) = \\frac{1}{10} = 0.1$ for $0 \\leq x \\leq 10$. Any 2-minute interval within this range has the same probability: $P(3 \\leq X \\leq 5) = P(7 \\leq X \\leq 9) = 0.1 \\times 2 = 0.2$.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Cumulative Distribution Function (CDF)`,
      content:`<h3 style="color: #1e3a8a;">Cumulative Distribution Function (CDF)</h3>
The **cumulative distribution function (CDF)** gives the probability that $X$ is less than or equal to a specific value:

$$F(x) = \\begin{cases} 0 & \\text{if } x < a \\\\ \\frac{x-a}{b-a} & \\text{if } a \\leq x \\leq b \\\\ 1 & \\text{if } x > b \\end{cases}$$

**Key Properties**:
 • $F(a) = 0$ (no probability mass below the lower bound)
 • $F(b) = 1$ (all probability mass is within [a, b])
 • The [CDF(Cumulative Density Function)](!/probability/cdf) increases linearly from 0 to 1 within the interval [a, b]
 • For any $x$ in [a, b], $F(x)$ represents the fraction of the interval covered from $a$ to $x$

**Practical Use:** The [CDF(Cumulative Density Function)](!/probability/cdf) for the uniform distribution is particularly simple. To find $P(X \\leq x)$ when $X \\sim U(0, 10)$ and $x = 3$: $F(3) = \\frac{3-0}{10-0} = 0.3$, meaning 30% of values fall below 3. For any probability calculation: $P(c \\leq X \\leq d) = F(d) - F(c) = \\frac{d-a}{b-a} - \\frac{c-a}{b-a} = \\frac{d-c}{b-a}$.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    // obj7:{
    //   title:`Expected Value (mean)`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj7: {
  title: `Expected Value (Mean)`,
  content: `
For continuous distributions, the expected value emerges from integrating the product of each value with its density across the entire support. Applying the [continuous expected value definition](!/probability/expected-value#continuous) to the uniform distribution:

$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx$$

### Formula

$$E[X] = \\frac{a + b}{2}$$

Where:
$a$ = minimum value of the interval
$b$ = maximum value of the interval

### Derivation and Intuition

The continuous uniform distribution has PDF $f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$, and 0 elsewhere. Computing the expected value:

$$E[X] = \\int_{a}^{b} x \\cdot \\frac{1}{b-a} \\, dx = \\frac{1}{b-a} \\int_{a}^{b} x \\, dx$$

$$E[X] = \\frac{1}{b-a} \\left[\\frac{x^2}{2}\\right]_{a}^{b} = \\frac{1}{b-a} \\cdot \\frac{b^2 - a^2}{2}$$

$$E[X] = \\frac{1}{b-a} \\cdot \\frac{(b-a)(b+a)}{2} = \\frac{b+a}{2}$$

The result $E[X] = \\frac{a+b}{2}$ is the midpoint of the interval $[a, b]$. This makes perfect intuitive sense: when all values in an interval are equally likely, the average value is simply the center of that interval. The distribution is perfectly symmetric, and the expected value is the balance point.

This formula is identical to the [discrete uniform distribution](!/probability/distributions/discrete/uniform#expected-value), showing that whether we count discrete equally-spaced values or measure continuous equally-dense values, the average lands at the center.

### Example

Suppose a bus arrives randomly between 2:00 PM and 2:30 PM, modeled as uniform on the interval $[0, 30]$ minutes after 2:00 PM:

$$E[X] = \\frac{0 + 30}{2} = 15 \\text{ minutes}$$

The expected arrival time is 2:15 PM, exactly halfway through the 30-minute window. If you repeatedly sample random arrival times, the long-run average will converge to 15 minutes after 2:00 PM.
  `,
  before: ``,
  after: ``,
  link: '',
},
    // obj8:{
    //   title:`Variance and Standard Deviation`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `Variance and Standard Deviation`,
  content: `
The [variance](!/probability/variance#calculate) of a continuous random variable quantifies the spread of values around the [expected value (mean)](!/probability/expected-value). For continuous distributions, it is calculated through integration:

$$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f(x) \\, dx$$

Alternatively, using the computational formula:

$$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2$$

For the **continuous uniform distribution**, this calculation produces a simple relationship with the interval length.

### Formula

$$\\mathrm{Var}(X) = \\frac{(b-a)^2}{12}$$

Where:
$a$ = minimum value of the interval
$b$ = maximum value of the interval

### Derivation and Intuition

Starting with the computational formula, we need to calculate $\\mathbb{E}[X^2]$.

We know from the expected value section that $\\mu = \\frac{a+b}{2}$.

The continuous uniform distribution has PDF $f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$:

$$\\mathbb{E}[X^2] = \\int_{a}^{b} x^2 \\cdot \\frac{1}{b-a} \\, dx = \\frac{1}{b-a} \\int_{a}^{b} x^2 \\, dx$$

$$\\mathbb{E}[X^2] = \\frac{1}{b-a} \\left[\\frac{x^3}{3}\\right]_{a}^{b} = \\frac{1}{b-a} \\cdot \\frac{b^3 - a^3}{3}$$

Using the factorization $b^3 - a^3 = (b-a)(b^2 + ab + a^2)$:

$$\\mathbb{E}[X^2] = \\frac{b^2 + ab + a^2}{3}$$

Applying the computational formula:

$$\\mathrm{Var}(X) = \\frac{b^2 + ab + a^2}{3} - \\left(\\frac{a+b}{2}\\right)^2$$

After algebraic simplification:

$$\\mathrm{Var}(X) = \\frac{(b-a)^2}{12}$$

The result $\\mathrm{Var}(X) = \\frac{(b-a)^2}{12}$ shows that variance depends only on the interval width $(b-a)$. The divisor of 12 appears because probability mass is spread uniformly—not concentrated anywhere. A wider interval means greater spread; location doesn't matter, only the range size.

This formula mirrors the [discrete uniform distribution](!/probability/distributions/discrete/uniform#variance), differing only in technical details between continuous and discrete cases.

### Standard Deviation

$$\\sigma = \\frac{b-a}{\\sqrt{12}} = \\frac{b-a}{2\\sqrt{3}} \\approx 0.289(b-a)$$

### Example

Suppose a bus arrives randomly between 2:00 PM and 2:30 PM, modeled as uniform on the interval $[0, 30]$ minutes:

$$\\mathrm{Var}(X) = \\frac{(30-0)^2}{12} = \\frac{900}{12} = 75 \\text{ minutes}^2$$

$$\\sigma = \\frac{30}{\\sqrt{12}} \\approx 8.66 \\text{ minutes}$$

The variance of 75 min² and standard deviation of about 8.66 minutes indicate moderate spread. While the expected arrival is 15 minutes after 2:00 PM, typical variations are around ±8.66 minutes, meaning arrivals between roughly 6 and 24 minutes are common.
  `,
  before: ``,
  after: ``,
  link: '',
},
    // obj9:{
    //   title:`Mode and Median`,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },


    obj9: {
  title: `Mode and Median`,
  content: `### Mode

The [mode](!/probability/mode) is the value where the [probability density function](!/probability/probability-function/pdf) reaches its maximum—the peak of the distribution curve.

For the continuous uniform distribution, every value in the support has the same density:

$$\\text{Mode} = \\text{Any value in } [a, b]$$

**Intuition:** The continuous uniform [PDF](!/probability/probability-function/pdf) is constant:

$$f(x) = \\frac{1}{b-a} \\text{ for } a \\leq x \\leq b$$

Since the density function is flat across the entire interval, there is no single peak. Every point in $[a, b]$ is equally probable in terms of density, so every value is technically a [mode](!/probability/mode).

This is the continuous analog of the [discrete uniform distribution](!/probability/distributions/discrete/uniform#mode), where all outcomes are equally likely.

**Example:** 
For a bus arriving uniformly between 2:00 PM and 2:30 PM (interval $[0, 30]$ minutes):

Mode = Any value in [0, 30]

There is no "most likely" arrival time—all times are equally probable. The density is constant at $f(x) = \\frac{1}{30}$ across the entire half-hour window.

### Median

The [median](!/probability/median) is the value $m$ such that $P(X \\leq m) = 0.5$—the point that divides the distribution's probability in half.

For the continuous uniform distribution, the [median](!/probability/median) is:

$$\\text{Median} = \\frac{a + b}{2}$$

**Derivation:** Using the [CDF](!/probability/cdf) for the uniform distribution:

$$F(x) = \\frac{x - a}{b - a} \\text{ for } a \\leq x \\leq b$$

Setting $F(m) = 0.5$:

$$\\frac{m - a}{b - a} = 0.5$$

$$m - a = 0.5(b - a)$$

$$m = a + 0.5(b - a) = \\frac{a + b}{2}$$

**Intuition:** Because the distribution is perfectly symmetric and uniform, the point that divides probability in half is simply the midpoint of the interval. This also equals the [mean](!/probability/expected-value), as with all symmetric distributions.

**Example:**
For a bus arriving uniformly between 2:00 PM and 2:30 PM (interval $[0, 30]$ minutes):

$$\\text{Median} = \\frac{0 + 30}{2} = 15 \\text{ minutes}$$

Half of arrivals occur before 2:15 PM, and half occur after. This is also the [mean](!/probability/expected-value) arrival time.

**Properties:**
• For the continuous uniform distribution: median = [mean](!/probability/expected-value) = $\\frac{a+b}{2}$
• The [mode](!/probability/mode) is not uniquely defined (all values equally dense)
• Perfect symmetry ensures median and mean coincide
• The median depends only on the endpoints $a$ and $b$, not on the interval width directly
• This matches the [discrete uniform distribution](!/probability/distributions/discrete/uniform#median), where the median is also the midpoint
  `,
  before: ``,
  after: ``,
  link: '',
},
    obj10:{
      title:`Quantiles/Percentiles`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:`Moment Generating Function`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Real-World Examples and Common Applications`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:`Interactive Calculator`,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:`Special Cases`,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:`Properties`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj16:{
  
      title:`Related Distributions`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj17:{
  
      title:`Parameter Estimation`,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    links:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      examples:`
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Continuous Uniform](!/probability/distributions/continuous/uniform#12) →@
            `,
  
    },
  
  }

  const introContent = {
  id: "intro",
  title: "Continuous Uniform Distribution: Equal Likelihood Over an Interval",
  content: `
  The probabilistic experiment behind the continuous uniform distribution consists of selecting a value at random from a fixed interval, where no value within the interval is preferred over another. Any subinterval of equal length has the same probability of being selected. The randomness lies purely in position within the interval, not in frequency or accumulation of events.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Continuous Uniform Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/continuous/uniform",
         name: "name"
      },
        
       }
    }
   }

export default function ContinuousUniformDistributionPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          sectionsContent.obj1.example,
          sectionsContent.links.examples,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          
      <div key={'notation-uniform'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
                {processContent(sectionsContent.obj2.content,)}
            </div>,
          // sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          // sectionsContent.obj3.content,
           <div key={'parameters-uniform'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
                      {processContent(sectionsContent.obj3.content,)}
                  </div>,
        ]
    },
    // {
    //     id:'4',
    //     title:sectionsContent.obj4.title,
    //     link:sectionsContent.obj4.link,
    //     content:[
    //       sectionsContent.obj4.content,
    //     ]
    // },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'pdf-uniform'} style={{transform:'scale(0.8)'}}>
          <ContinuousUniformDistribution/>
          </div>,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
           <div key={'cdf-uniform'} style={{transform:'scale(0.8)'}}>
          <ContinuousUniformDistributionCDF/>
          </div>,
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
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <ContinuousUniformCalculator/>
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Continuous Uniform Distribution</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
    secondaryNavTitle="Other Continuous Distributions" 
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
