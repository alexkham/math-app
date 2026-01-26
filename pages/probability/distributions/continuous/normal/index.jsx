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
import NormalDistribution from '@/app/components/visualizations/probability/continuous-distribution/NormalDistribution'
import NormalDistributionCDF from '@/app/components/visualizations/probability/continuous-distribution/CDF/NormalDistributionCDF'
import NormalDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/NormalDistributionCalculator'


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
      title:`The Probabilistic Experiment Behind normal distribution`,
      content:`
      The probabilistic experiment underlying the normal distribution arises when an outcome is shaped by many small, independent influences, none of which dominates the result. Each influence nudges the outcome slightly upward or downward, and the final value reflects the combined effect of all these contributions.

This experiment is not defined by repetition of identical trials, but by aggregation. The core assumption is that deviations occur naturally in both directions, are roughly symmetric, and tend to cancel out when added together. Extreme outcomes are possible, but increasingly unlikely because they require many influences to align in the same direction.

The normal distribution emerges as a consequence of stability: when numerous independent factors interact, the resulting variability concentrates around a central value. The spread reflects how strong those individual influences are, while the center reflects their average balance point.

This experiment explains why many natural and measurement-based quantities cluster around a typical value with gradual falloff on both sides.
      `,
      before:``,
      after:``,
      link:'',
      example:`
      **Example**:

Human height results from genetics, nutrition, environment, and random biological variation. No single factor determines the outcome, but together they produce values concentrated around an average, with fewer extremely short or tall individuals.
      `,
  
  
    },
    obj2:{
      title:`Notation`,
      content:`
      $X \\sim N(\\mu, \\sigma^2)$ — distribution of the [random variable](!/probability/random-variables) ([variance](!/probability/variance) notation).

$X \\sim \\text{Normal}(\\mu, \\sigma^2)$ — alternative explicit form.

$N(\\mu, \\sigma^2)$ — used to denote the distribution itself (not the [random variable](!/probability/random-variables)
).

$N(0, 1)$ — the standard normal distribution ($\\mu = 0, \\sigma = 1$).

$Z \\sim N(0, 1)$ — conventional notation for a standard normal [random variable](!/probability/random-variables)
.

**Note:** Some texts use $N(\\mu, \\sigma)$ with standard deviation instead of variance. Always check which convention is being used. Statistical software often defaults to variance notation.
      
      @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      `,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Parameters`,
      content:`
      **μ** (mu): mean or center of the distribution, where $\\mu \\in \\mathbb{R}$

**σ** (sigma): standard deviation, measuring spread around the mean, where $\\sigma > 0$

The normal distribution is fully characterized by these two parameters.

**μ** determines the location (where the peak sits on the number line), while **σ** controls the spread (how wide or narrow the bell curve is). 

[Variance](!/probability/variance) is $\\sigma^2$, but we typically use $\\sigma$ as the primary parameter since it's in the same units as the data.
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
The **probability density function (PDF)** of a **normal distribution** is given by:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad -\\infty < x < \\infty$$

### Intuition Behind the Formula

 **Bell-Shaped Curve**: The normal distribution creates a symmetric, bell-shaped curve centered at $\\mu$.

  **Parameters**:
  • $\\mu$: The mean determines where the center of the bell sits
  • $\\sigma$: The standard deviation controls the width of the bell
  • $\\sigma^2$: The [variance](!/probability/variance) ($\\sigma$ squared) appears in the exponent

 **Support** (Range of the [Random Variable](!/probability/random-variables)):
  • The [random variable](!/probability/random-variables) $X$ can take any real value: $(-\\infty, +\\infty)$
  • While theoretically unbounded, approximately 99.7% of values fall within $\\mu \\pm 3\\sigma$
  • The **support** is the entire real line

 **Logic Behind the Formula**:
  • $\\frac{1}{\\sigma\\sqrt{2\\pi}}$: Normalization constant ensuring total area equals 1
  • $(x-\\mu)^2$: Squared distance from the mean (makes curve symmetric)
  • $e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$: Exponential decay as you move away from $\\mu$
  • The total area under the curve equals 1:
  
  $$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$$

**Practical Example:** Human heights follow approximately a normal distribution. If adult male heights have $\\mu = 175$ cm and $\\sigma = 7$ cm, then $X \\sim N(175, 49)$. The PDF tells us the relative likelihood of observing different heights, with the peak at 175 cm and decreasing probability as we move toward very short or very tall individuals.
      `,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Cumulative Distribution Function (CDF)`,
      content:`<h3 style="color: #1e3a8a;">Cumulative Distribution Function (CDF)</h3>
The **cumulative distribution function (CDF)** gives the probability that $X$ is less than or equal to a specific value:

$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(t-\\mu)^2}{2\\sigma^2}}\\,dt$$

**Standard Normal CDF**: For the standard normal distribution $N(0, 1)$, the CDF is traditionally denoted by $\\Phi(z)$:

$$\\Phi(z) = P(Z \\leq z) = \\int_{-\\infty}^{z} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{t^2}{2}}\\,dt$$

**Key Properties**:
• $F(-\\infty) = 0$ and $F(+\\infty) = 1$
• $F(\\mu) = 0.5$ (the mean is the 50th percentile)
• The CDF is strictly increasing and S-shaped
• Any normal CDF can be expressed using the standard normal: $F(x) = \\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)$

**Practical Use:** The normal CDF has no closed-form expression, so we use tables, calculators, or software. To find $P(X \\leq 180)$ when $X \\sim N(175, 49)$, convert to standard normal: $Z = (180-175)/7 \\approx 0.714$, then look up $\\Phi(0.714) \\approx 0.762$, meaning about 76.2% of values fall below 180.
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
The mean of a continuous random variable requires integrating across all possible values, with each value weighted by its density. For the normal distribution, this computation follows the [standard continuous expected value formula](!/probability/expected-value#continuous):

$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) \\, dx$$

### Formula

$$E[X] = \\mu$$

Where:
$\\mu$ = the location parameter of the distribution

### Derivation and Intuition

The normal distribution has PDF:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

Computing the expected value:

$$E[X] = \\int_{-\\infty}^{\\infty} x \\cdot \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} \\, dx$$

Using the substitution $z = \\frac{x-\\mu}{\\sigma}$, we get $x = \\mu + \\sigma z$ and $dx = \\sigma \\, dz$:

$$E[X] = \\int_{-\\infty}^{\\infty} (\\mu + \\sigma z) \\cdot \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{z^2}{2}} \\, dz$$

$$E[X] = \\mu \\int_{-\\infty}^{\\infty} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{z^2}{2}} \\, dz + \\sigma \\int_{-\\infty}^{\\infty} z \\cdot \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{z^2}{2}} \\, dz$$

The first integral equals 1 (total probability of standard normal). The second integral equals 0 by symmetry (integrating an odd function over a symmetric interval).

Therefore: $E[X] = \\mu \\cdot 1 + \\sigma \\cdot 0 = \\mu$

The result $E[X] = \\mu$ reveals a fundamental property of the normal distribution: the parameter $\\mu$ directly represents the mean. The distribution is perfectly symmetric around $\\mu$, making it simultaneously the center of mass, the balance point, and the most likely region of values.

### Example

Consider human heights modeled as normally distributed with $\\mu = 170$ cm and $\\sigma = 10$ cm:

$$E[X] = 170 \\text{ cm}$$

The expected height is exactly 170 cm, which is the center of the distribution. Half of all heights fall above this value, and half fall below it.
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
The [variance](!/probability/variance#calculate) of a continuous random variable quantifies the spread of values around the mean. For continuous distributions, it is calculated through integration:

$$\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mu)^2] = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 f(x) \\, dx$$

Alternatively, using the computational formula:

$$\\mathrm{Var}(X) = \\mathbb{E}[X^2] - \\mu^2$$

For the **normal distribution**, this calculation yields a direct relationship with the distribution parameter.

### Formula

$$\\mathrm{Var}(X) = \\sigma^2$$

Where:
$\\sigma$ = the scale parameter of the distribution

### Derivation and Intuition

The normal distribution has PDF:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

We know from the expected value section that $\\mu = E[X]$. Computing the variance:

$$\\mathrm{Var}(X) = \\int_{-\\infty}^{\\infty} (x - \\mu)^2 \\cdot \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} \\, dx$$

Using the substitution $z = \\frac{x-\\mu}{\\sigma}$, we get $(x-\\mu) = \\sigma z$ and $dx = \\sigma \\, dz$:

$$\\mathrm{Var}(X) = \\int_{-\\infty}^{\\infty} (\\sigma z)^2 \\cdot \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{z^2}{2}} \\, dz = \\sigma^2 \\int_{-\\infty}^{\\infty} z^2 \\cdot \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{z^2}{2}} \\, dz$$

The integral equals 1 (this is the variance of the standard normal distribution).

Therefore: $\\mathrm{Var}(X) = \\sigma^2 \\cdot 1 = \\sigma^2$

The result $\\mathrm{Var}(X) = \\sigma^2$ reveals that the parameter $\\sigma$ directly controls the spread of the distribution. Just as $\\mu$ determines the center, $\\sigma^2$ determines how dispersed values are around that center. A larger $\\sigma$ produces a wider, flatter bell curve; a smaller $\\sigma$ produces a narrow, peaked distribution.

### Standard Deviation

$$\\sigma$$

The standard deviation is simply the parameter $\\sigma$ itself, which is why it's called the standard deviation parameter. This makes interpretation straightforward: about 68% of values fall within one standard deviation of the mean, about 95% within two standard deviations, and about 99.7% within three standard deviations.

### Example

Consider human heights modeled as normally distributed with $\\mu = 170$ cm and $\\sigma = 10$ cm:

$$\\mathrm{Var}(X) = (10)^2 = 100 \\text{ cm}^2$$

$$\\sigma = 10 \\text{ cm}$$

The variance of 100 cm² and standard deviation of 10 cm indicate that most heights cluster within 10 cm of the mean. We expect about 68% of heights to fall between 160 cm and 180 cm, and about 95% between 150 cm and 190 cm.
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

For the normal distribution, the [mode](!/probability/mode) is:

$$\\text{Mode} = \\mu$$

**Intuition:** The normal [PDF](!/probability/probability-function/pdf) is:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

The exponential term $e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ is maximized when the exponent equals zero, which occurs when $(x-\\mu)^2 = 0$, giving $x = \\mu$.

The normal distribution is perfectly symmetric around $\\mu$, making this point simultaneously the center of mass, the highest point, and the balance point. No other value has higher probability density.

**Example:** 
For human heights with $\\mu = 170$ cm and $\\sigma = 10$ cm:

Mode = 170 cm

This is the most common height—the peak of the bell curve. Heights become progressively less common as you move away from 170 cm in either direction.

### Median

The [median](!/probability/median) is the value $m$ such that $P(X \\leq m) = 0.5$—the point that divides the distribution's probability in half.

For the normal distribution, the [median](!/probability/median) is:

$$\\text{Median} = \\mu$$

**Intuition:** Because the normal distribution is perfectly symmetric around $\\mu$, exactly half the probability mass lies below $\\mu$ and half lies above. The [CDF](!/probability/cdf) evaluated at $\\mu$ gives:

$$F(\\mu) = 0.5$$

This symmetry means that [mode](!/probability/mode) = [median](!/probability/median) = [mean](!/probability/expected-value) = $\\mu$, a unique property that holds only for symmetric distributions.

**Example:**
For human heights with $\\mu = 170$ cm and $\\sigma = 10$ cm:

Median = 170 cm

Half of all heights fall below 170 cm, and half fall above. This coincides with both the mean and mode.

**Properties:**
• For the normal distribution: mode = median = mean (all equal $\\mu$)
• The parameter $\\sigma$ controls spread but doesn't affect the location of mode or median
• This triple equality holds for all symmetric distributions but is particularly important for the normal distribution
• Unlike skewed distributions where mean, median, and mode diverge, the normal distribution's symmetry keeps them aligned
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
         @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See More Examples of Normal](!/probability/distributions/continuous/uniform#12) →@
            `,
                 calculators:`            
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Discrete Distributions Probability Calculators ](!/probability/calculators/continuous-distributions) →@
        `,
  
    },
  
  }

  const introContent = {
  id: "intro",
  title: "Normal Distribution: Natural Variability Around a Typical Value",
  content: `
  Many real-world measurements arise from the accumulation of many small, independent influences acting together. The probabilistic experiment behind the normal distribution describes observing a quantity that fluctuates continuously around a typical or central value, with deviations in either direction becoming less likely as they grow larger. The random variable represents a measurement, not a count, and extreme values are possible but increasingly rare.
  `
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Normal Distribution | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/distributions/continuous/normal",
         name: "name"
      },
        
       }
    }
   }

export default function NormalDistributionPage({seoData,sectionsContent , introContent}) {

    
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


  <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
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
           <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
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
           <div key={'pdf-normal'} style={{transform:'scale(0.8)'}}>
            <NormalDistribution/>
                   
                    </div>,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'cdf-normal'} style={{transform:'scale(0.8)'}}>
            <NormalDistributionCDF/>
                   
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
          <NormalDistributionCalculator/>,
          sectionsContent.links.calculators,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Normal Distribution</h1>
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
