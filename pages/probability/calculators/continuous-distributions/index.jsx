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
// import NormalDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/NormalDistributionCalculator'
// import ContinuousUniformCalculator from '@/app/components/calculators/probability/distributions/continuous/UniformDistributionCalculator'
// import ExponentialDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/ExponentialDistributionCalculator'
// import { useSearchParams } from 'next/navigation'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

// export async function getStaticProps(){

//   const keyWords=['continuous distributions','continuous distributions probability','','','']

  
// // const navigationGroups = [
// //   {
// //     title: "Other Trigonometric Tables",
// //     items: [
// //       { title: "Trigonometric Functions of Special Angles", link: "/tables/trigonometry/special-angles" },
// //       { title: "Inverse Trigonometric Functions", link: "/tables/trigonometry/inverse" },
// //       { title: "Trigonometric Reduction Formulas", link: "/tables/trigonometry/reduction" },
// //       { title: "Half Angle Formulas", link: "/tables/trigonometry/half-angle" },
      
// //        { title: "Triple Angle Formulas", link: "/tables/trigonometry/triple-angle" },
// //         { title: "Sum of Angles Formulas", link: "/tables/trigonometry/sum-angle" },
// //         { title: "Difference of Angles Formulas", link: "/tables/trigonometry/difference-angle" },
// //          { title: "Negative Angle Formulas (Even-Odd Identities)", link: "/tables/trigonometry/negative-angle" },
// //       { title: "Complement Angle Formulas", link: "/tables/trigonometry/complement-angle" }, 
// //       { title: "Supplement Angle Formulas", link: "/tables/trigonometry/supplement-angle" },   
// //     ]
// //   },
// //    {
// //         title:"Relevant tools",
// //         items:[
// //             {title:"Interactive Unit Circle",link:"/visual-tools/unit-circle"},
// //             {title:"Trigonometry Calculator",link:"/calculators/trigonometry-calculator"},
// //             {title:"Angle Converter",link:"/converters/degree-radians"},
// //         ]
// //     },
// //      {
// //         title:"Related pages",
// //         items:[
// //             {title:"Trigonometry",link:"/trigonometry"},
// //             {title:"Trigonometric Identities",link:"/trigonometry/identities"},
// //             {title:"Math Symbols used in Trigonometry",link:"/math-symbols/trigonometry"},
// //         ]
// //     }
// // ];


//   const menuItems = [
//     {
//       title: "Probability Calculators",
//       // icon: <Home />,
//       link: "/probability/calculators"
//     },
//     {
//         title: "Discrete Distributions Calculator",
//         // icon: <Home />,
//         link: "/probability/calculators/discrete-distributions"
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
//         url: "/probability/calculators/continuous-distributions",
//          name: "name"
//       },
//       menuItems,
        
//        }
//     }
//    }

// export default function ContinuousDistributionsPage({seoData,sectionsContent , introContent,menuItems}) {


//       const searchParams = useSearchParams()
               
//               const tab=searchParams.get('tab')
//              const initialTab = tab ? parseInt(tab) : 1
    
  
  
  
//    const genericSections=[
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
//    {/* <GenericNavbar/> */}
 
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
   
//    <h1 className='title' style={{marginTop:'-40px',marginBottom:'-20px'}}>Continuous Distributions Calculator</h1>
//    <br/>
//    {/* <VerticalButtonGroup/> */}
   
//    <div style={{
//      display: 'flex',
//      gap: '20px',
//      alignItems: 'flex-start',
//      marginTop:'50px'
//    }}>
//      <VerticalButtonGroup 
//        items={menuItems}
//        width="250px" 
//        theme='vivid'
//       //  sitemapPath="/probability"
//       //  sitemapGroupTitle="All Probability Tools"
//        //   backgroundColor ='#245de1'
//        //   color = 'white'
//        isSticky={false}
//        verticalOffset='200px'
//      />
     
//      <div style={{ flex: 1 ,marginTop:'-50px',marginLeft:'-100px'}}>
//        <GenericMultiComponentFrame
//          initialActive={initialTab}
//          buttonMinWidth="160px"
//          primaryColor="#007bff"
//          components={[
//            { id: 1, name: 'Continuous Uniform Distribution Calculator', key: 'uniform', component: ContinuousUniformCalculator,
//          //          props: {
//          //   links: {
//          //     n: 'uniform-n',
//          //     probability: 'uniform-probability',
//          //     mean: 'uniform-mean',
//          //     variance: 'uniform-variance',
//          //     stdDev: 'uniform-stddev'
//          //   }
//          // }
//            },
//            { id: 2, name: 'Exponential Distribution Calculator', key: 'exponential', component: ExponentialDistributionCalculator ,
//          //         props: {
//          //   links: {
//          //     q: 'binomial-q',
//          //     mean: 'binomial-mean',
//          //     variance: 'binomial-variance',
//          //     stdDev: 'binomial-stddev',
//          //     pmf: 'binomial-pmf'
//          //   }
//          // }
//            },
//            { id: 3, name: 'Normal Distribution Calculator', key: 'geometric', component:NormalDistributionCalculator ,
//    //               props: {
//    //   links: {
//    //     q: 'geometric-q',
//    //     mean: 'geometric-mean',
//    //     variance: 'geometric-variance',
//    //     stdDev: 'geometric-stddev',
//    //     pmf: 'geometric-pmf'
//    //   }
//    // },
//            },
//          ]}
//        />
//      </div>
//    </div>
   
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    {/* <NormalDistributionCalculator/>
//    <ContinuousUniformCalculator/>
//    <ExponentialDistributionCalculator/> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
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
import NormalDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/NormalDistributionCalculator'
import ContinuousUniformCalculator from '@/app/components/calculators/probability/distributions/continuous/UniformDistributionCalculator'
import ExponentialDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/ExponentialDistributionCalculator'
import { useSearchParams } from 'next/navigation'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps(){

  const keyWords = [
    'continuous distribution calculator',
    'normal distribution calculator',
    'exponential distribution calculator',
    'continuous uniform distribution',
    'gaussian distribution calculator',
    'probability density function',
    'PDF calculator',
    'continuous probability calculator',
    'bell curve calculator',
    'z-score calculator',
    'normal probability calculator',
    'continuous random variable',
    'CDF calculator continuous',
    'statistical distribution tool',
    'probability distribution calculator'
  ]

  const menuItems = [
    {
      title: "Probability Calculators",
      link: "/probability/calculators"
    },
    {
      title: "Discrete Distributions Calculator",
      link: "/probability/calculators/discrete-distributions"
    },
    {
      title: "Statistics Calculator",
      link: "/calculators/statistics-calculator"
    },
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting Probability Query Types`,
      content: `Each continuous distribution calculator offers six query modes for comprehensive probability analysis. **Full distribution** displays the complete probability density function (PDF) curve showing the distribution's shape across its domain. The curve's height represents density, not probability—probability comes from area under the curve.

**P(X < x)** and **P(X ≤ x)** calculate left-tail probabilities, the area under the PDF curve from negative infinity (or minimum) up to x. For continuous distributions, P(X < x) equals P(X ≤ x) since probability at exact points is zero. The visualization shades the left region, making cumulative probability visible.

**P(X > x)** and **P(X ≥ x)** compute right-tail probabilities, the area from x to positive infinity (or maximum). These queries answer "What's the probability of exceeding x?" Both give identical results for continuous distributions. The shaded region shows probability graphically as area.

**P(x₁ < X < x₂)** calculates interval probability, the area between two values. This query requires both lower bound x₁ and upper bound x₂. The calculator shades the region between these bounds, demonstrating that continuous probability equals area under the PDF curve. This mode suits questions like "What's the probability of landing between 2 and 5?"`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Using the Continuous Uniform Calculator`,
      content: `The continuous uniform distribution models scenarios where all values in an interval are equally likely—random selection from a range. Enter **a (minimum)** as the lower bound and **b (maximum)** as the upper bound. For random time between 0 and 10 minutes, set a=0, b=10.

The PDF equals 1/(b-a), constant across the interval. The visualization displays a rectangle: flat top at height 1/(b-a), spanning from a to b, zero outside this range. This rectangular shape explains the "uniform" name—density is uniform (constant) throughout.

Mean equals (a+b)/2, the midpoint. For a=0, b=10, mean is 5. Variance follows ((b-a)²)/12, measuring spread. The larger the interval, the greater the variance. Standard deviation equals the square root of variance.

Query probabilities reduce to simple geometry. P(X < x) for x between a and b equals (x-a)/(b-a), the fraction of the interval below x. P(x₁ < X < x₂) equals (x₂-x₁)/(b-a), the fraction between bounds. The calculator shades these rectangular regions orange, making probability calculations visual.

Use continuous uniform for random arrival times in windows, random coordinates in bounded regions, or any scenario with constant probability density over a finite interval.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Calculating Exponential Distribution Probabilities`,
      content: `The exponential distribution models time between events in a Poisson process—waiting times for arrivals, failures, or occurrences at constant rate. Enter **λ (rate parameter)** as the average event rate. For λ=0.5 events per minute, expect one event every 2 minutes on average.

The PDF equals λe^(-λx) for x≥0, an exponential decay curve starting at height λ when x=0, decreasing asymptotically toward zero. The visualization shows this characteristic decay: probability density highest near zero (short waits most likely), declining for longer waits.

Mean equals 1/λ, the average waiting time. For λ=0.5, mean is 2 minutes. Variance equals 1/λ², and standard deviation equals 1/λ, same as the mean. This property—mean equals standard deviation—uniquely characterizes exponential distributions.

The **memoryless property** distinguishes exponential distributions: P(X > s+t | X > s) = P(X > t). Past waiting doesn't affect future probability. If you've waited 5 minutes, probability of waiting 2 more equals the original 2-minute wait probability.

Query results use CDF = 1 - e^(-λx). For P(X < 3) with λ=0.5, calculate 1 - e^(-1.5) ≈ 0.7769. The shaded area shows cumulative probability. Use exponential for customer service times, equipment lifetimes, radioactive decay intervals, or any memoryless waiting time scenario.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Working with Normal Distribution Calculator`,
      content: `The normal (Gaussian) distribution is the most important continuous distribution, modeling countless natural and social phenomena. Enter **μ (mean)** as the distribution center and **σ (standard deviation)** as the spread measure. For μ=100, σ=15 (like IQ scores), the distribution centers at 100 with typical spread of 15 points.

The PDF produces the famous bell curve: symmetric around μ, highest at the mean, declining smoothly on both sides. The visualization shows this bell shape with mean marked by a red dashed line. Standard deviation marks appear at μ±σ, showing where density drops to about 60% of peak.

The **68-95-99.7 rule** provides quick probability estimates: approximately 68% of values fall within μ±σ, 95% within μ±2σ, 99.7% within μ±3σ. For μ=100, σ=15, about 68% of values lie between 85 and 115.

When querying specific values, the calculator computes **z-scores**: z = (x-μ)/σ, measuring how many standard deviations x is from the mean. For x=115, μ=100, σ=15, z-score is 1. The result displays both probability and z-score. Standard normal tables use z-scores to find probabilities.

Use the range query for interval probabilities. P(-1 < Z < 1) for standard normal (μ=0, σ=1) gives approximately 0.68, confirming the 68% rule. The shaded region between bounds visualizes this central probability.

Apply normal distribution to heights, test scores, measurement errors, or any variable resulting from many independent factors. The central limit theorem ensures many real phenomena approximate normality.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Understanding Range Queries P(x₁ < X < x₂)`,
      content: `Range queries calculate probability of landing within a specified interval, fundamental for confidence intervals and tolerance limits. Select the range option, then enter both x₁ (lower bound) and x₂ (upper bound). The calculator computes P(x₁ < X < x₂) as the area between these bounds.

For **continuous uniform** distributions, range probability equals (x₂-x₁)/(b-a), simple fraction of the total interval. If the distribution spans 0 to 10 and you query 2 to 5, probability is 3/10 = 0.3. The rectangular shaded region shows this proportion visually.

For **exponential** distributions, use CDF values: P(x₁ < X < x₂) = CDF(x₂) - CDF(x₁) = [1-e^(-λx₂)] - [1-e^(-λx₁)]. With λ=0.5, P(1 < X < 3) equals CDF(3) - CDF(1) ≈ 0.7769 - 0.3935 = 0.3834. The shaded area under the exponential curve shows this probability.

For **normal** distributions, range queries use the error function (erf) through CDF calculations: P(x₁ < X < x₂) = Φ((x₂-μ)/σ) - Φ((x₁-μ)/σ) where Φ is the standard normal CDF. For μ=0, σ=1, P(-1 < X < 1) ≈ 0.6827, the 68% rule interval. The bell curve shading between -1 and 1 visualizes this central probability.

Range queries answer practical questions: "What fraction of products measure between spec limits?", "What percentage of customers wait 2-5 minutes?", "How likely is a value within tolerance?" The visual shading reinforces that continuous probability equals area under the density curve.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Reading PDF Curve Visualizations`,
      content: `The probability density function (PDF) curve visualization demonstrates each distribution's characteristic shape and how probability relates to area. The horizontal axis shows the random variable x, vertical axis shows density f(x). **Remember: height is not probability**—area under the curve between two points gives probability.

For **continuous uniform**, the PDF displays as a flat rectangle starting at x=a, ending at x=b, with constant height 1/(b-a). Zero density appears outside [a,b]. Total area under this rectangle equals 1, confirming it's a valid PDF. Query shading highlights rectangular regions whose areas equal the desired probabilities.

For **exponential**, the PDF curve starts at maximum height λ when x=0, then decays exponentially, approaching zero as x increases. The curve never touches zero but gets arbitrarily close. The red dashed line at x=μ=1/λ marks the mean, dividing the distribution into regions containing roughly 63% (left) and 37% (right) of probability.

For **normal**, the symmetric bell curve peaks at x=μ with maximum density 1/(σ√(2π)). Standard deviation markers at μ±σ indicate inflection points where curvature changes. The curve extends infinitely in both directions, though density becomes negligible beyond ±4σ. Symmetry means median equals mean.

**Shaded regions** in orange indicate the area representing your query's probability. For P(X<x), shading extends from the left edge to x. For P(X>x), shading extends from x rightward. For range queries, shading fills the interval between x₁ and x₂. These visual aids reinforce that **probability = area under the PDF curve**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Are Continuous Probability Distributions?`,
      content: `Continuous probability distributions describe random variables that can take any value in an interval or range, not just discrete points. Unlike discrete distributions assigning probability to specific values, continuous distributions use probability density across intervals. Examples include time, distance, weight, temperature—any measured quantity.

The **probability density function (PDF)** f(x) specifies density at each point, but f(x) itself is not probability. Instead, probability comes from integrating the PDF: P(a < X < b) = ∫[a to b] f(x)dx, the area under f(x) from a to b. The PDF must satisfy two properties: f(x) ≥ 0 everywhere, and total area ∫[-∞ to ∞] f(x)dx = 1.

A crucial property: **probability at exact points equals zero** for continuous distributions. P(X=x) = 0 for any specific x because a point has no width, hence no area. Consequently, P(X<x) = P(X≤x) and P(X>x) = P(X≥x)—inequalities with or without equality give identical results. Only intervals have nonzero probability.

Key statistics include mean μ = ∫xf(x)dx (expected value), variance σ² = ∫(x-μ)²f(x)dx (spread measure), and standard deviation σ (square root of variance). These integrals weight values by their densities, producing distribution centers and spreads.

The **cumulative distribution function (CDF)** F(x) = P(X≤x) accumulates probability from -∞ to x. CDF is the integral of PDF: F(x) = ∫[-∞ to x] f(t)dt. CDF increases from 0 to 1, with derivative F'(x) = f(x) recovering the PDF.

For comprehensive theory on continuous probability distributions including derivations, properties, and applications, see **continuous probability distributions theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `PDF vs CDF for Continuous Distributions`,
      content: `The **probability density function (PDF)** f(x) and **cumulative distribution function (CDF)** F(x) are complementary representations of continuous distributions. PDF shows density—how probability is distributed—while CDF shows accumulated probability up to each point.

**PDF f(x)** gives density at x, but NOT probability at x (which is always zero for continuous distributions). To get probability, integrate: P(a < X < b) = ∫[a to b] f(x)dx. The calculator visualizations show PDF curves with shaded areas representing probabilities. PDF can exceed 1 (it's density, not probability), but total area under PDF must equal 1.

**CDF F(x) = P(X ≤ x)** accumulates probability from -∞ to x. For each point x, CDF gives the probability of being at or below that point. CDF ranges from 0 to 1, always non-decreasing. At x=-∞, F(x)=0; at x=∞, F(x)=1. The calculators compute CDF values to answer queries like P(X<x) or P(X>x).

**Relationship**: CDF is the integral of PDF: F(x) = ∫[-∞ to x] f(t)dt. Conversely, PDF is the derivative of CDF: f(x) = F'(x). This fundamental relationship connects density and cumulative probability. Interval probabilities use CDF: P(a < X < b) = F(b) - F(a).

For **uniform** distribution, PDF is constant 1/(b-a) on [a,b], CDF is linear increasing from 0 to 1. For **exponential**, PDF is λe^(-λx), CDF is 1-e^(-λx). For **normal**, PDF is the bell curve, CDF is the S-shaped curve symmetric around μ with inflection at the mean.

The **CDF visualizer tools** display cumulative probability curves complementing these PDF visualizations, showing how probability accumulates across the distribution's range.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Choosing the Right Continuous Distribution`,
      content: `Selecting the appropriate continuous distribution requires matching scenario characteristics to distribution properties. **Continuous Uniform** applies when all values in a bounded interval are equally likely with no preference. Use for random selections from ranges, arrival times in windows, coordinates in bounded regions. The flat PDF indicates no value is more likely than others.

**Exponential** distribution models waiting times or intervals between events occurring at constant rate. Critical property: memoryless—past doesn't affect future probability. Use for customer service times, equipment failure times, time between arrivals, radioactive decay. If rate is constant and process has no memory, exponential fits. Single parameter λ controls both mean and spread (both equal 1/λ).

**Normal (Gaussian)** distribution models variables resulting from many independent additive factors. The central limit theorem ensures sums of random variables approach normality. Use for heights, weights, test scores, measurement errors, natural phenomena. Symmetric bell curve, mean=median=mode, fully characterized by μ and σ. When variables cluster around a central value with symmetric spread, normal fits.

**Other continuous distributions** (not in this calculator): **Log-normal** for positive variables that are multiplicative (stock prices, incomes), **Gamma** for sums of exponential variables (total time for k events), **Beta** for proportions bounded between 0 and 1, **Weibull** for failure times with changing hazard rates, **Chi-square** and **t-distributions** for statistical inference.

**Selection criteria**: Consider range (bounded vs unbounded), symmetry (normal is symmetric, exponential skewed), tail behavior (exponential has long right tail, normal has thin tails), memoryless property (only exponential), central limit effects (many independent factors suggest normal). Plot data and compare to distribution shapes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Calculators`,
      content: `**Discrete Distributions Calculator** - Compute probabilities for binomial, Poisson, geometric, and other discrete distributions with PMF charts.

**Z-Score Calculator** - Convert between raw scores and z-scores for normal distributions with percentile lookups.

**Probability Distribution Explorer** - Interactive visualization comparing multiple distributions side-by-side with parameter adjustments.

**CDF Visualizer** - Generate cumulative distribution function plots for discrete and continuous distributions.

**Statistical Distribution Reference** - Comprehensive guide to all probability distributions with formulas, properties, and use cases.

**Confidence Interval Calculator** - Compute confidence intervals using normal, t, and other distributions.

**Central Limit Theorem Simulator** - Visualize how sample means approach normal distribution regardless of population distribution.

**Percentile Calculator** - Find percentiles and quantiles for normal and other continuous distributions.

**Normal Probability Plot Generator** - Create Q-Q plots to assess whether data follows a normal distribution.

**Hypothesis Testing Tools** - Perform statistical tests using normal, t, chi-square, and F distributions.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is the difference between continuous and discrete probability distributions?",
      answer: "Continuous distributions assign probability to intervals of real numbers using probability density functions (PDF), where probability equals area under the curve. Discrete distributions assign probability to specific countable values using probability mass functions (PMF). For continuous distributions, probability at exact points is zero—only intervals have nonzero probability. Continuous distributions model measured quantities like time, weight, or temperature, while discrete distributions model counted phenomena like coin flips or defects."
    },
    obj2: {
      question: "Why is the PDF value not the probability for continuous distributions?",
      answer: "The PDF f(x) gives probability density at point x, not probability. Density can exceed 1 because it represents concentration, not probability itself. To get probability, you must integrate the PDF over an interval: P(a < X < b) = ∫[a to b] f(x)dx. Probability equals area under the PDF curve, not the curve's height. At any exact point x, probability P(X=x) equals zero for continuous distributions."
    },
    obj3: {
      question: "What does the memoryless property of exponential distribution mean?",
      answer: "The memoryless property means past waiting time doesn't affect future probability. Mathematically: P(X > s+t | X > s) = P(X > t). If you've already waited s time units without an event, the probability of waiting t more units equals the original probability of waiting t units. Only the exponential distribution among continuous distributions has this property. This makes exponential appropriate for constant-rate processes where history doesn't matter."
    },
    obj4: {
      question: "How do you interpret z-scores in normal distribution?",
      answer: "A z-score measures how many standard deviations a value is from the mean: z = (x-μ)/σ. Positive z-scores indicate values above the mean, negative below. For standard normal (μ=0, σ=1), the value itself is the z-score. About 68% of values have |z| < 1, 95% have |z| < 2, 99.7% have |z| < 3. Z-scores standardize values from different normal distributions for comparison."
    },
    obj5: {
      question: "When should I use uniform vs exponential vs normal distribution?",
      answer: "Use uniform when all values in a bounded interval are equally likely—random selection from ranges. Use exponential for waiting times between events at constant rate with memoryless property—service times, equipment lifetimes. Use normal when variables result from many independent factors and cluster symmetrically around a mean—heights, test scores, measurement errors. Consider whether range is bounded (uniform), right-skewed with memoryless property (exponential), or symmetric bell-shaped (normal)."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Continuous Probability Distributions Calculator",
      "description": "Calculate probabilities for three continuous distributions: uniform, exponential, and normal (Gaussian). Features PDF visualization, z-scores, and comprehensive statistical analysis.",
      "url": "https://www.learnmathclass.com/probability/calculators/continuous-distributions",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three continuous distribution calculators: uniform, exponential, normal",
        "Six query types: full distribution, left/right tails, range probabilities",
        "Interactive PDF curve visualization with shaded probability areas",
        "Complete distribution statistics: mean, variance, standard deviation",
        "Z-score calculations for normal distribution",
        "Range query support for interval probabilities",
        "Real-time input validation with error messages",
        "Smooth PDF curve rendering with probability shading",
        "Tabbed interface for easy distribution switching",
        "Memoryless property demonstration for exponential distribution"
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
          "name": "Continuous Distributions",
          "item": "https://www.learnmathclass.com/probability/calculators/continuous-distributions"
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
        title: "Continuous Distributions Calculator | Normal, Exponential, Uniform",
        description: "Calculate probabilities for normal, exponential, and uniform continuous distributions with PDF curves, z-scores, and statistical analysis.",
        keywords: keyWords.join(", "),
        url: "/probability/calculators/continuous-distributions",
        name: "Continuous Distributions Calculator"
      },
    }
  }
}

export default function ContinuousDistributionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas, menuItems}) {

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
      
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'-20px'}}>Continuous Distributions Calculator</h1>
      <br/>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
        marginTop:'50px'
      }}>
        <VerticalButtonGroup 
          items={menuItems}
          width="250px" 
          theme='vivid'
          isSticky={false}
          verticalOffset='200px'
        />
        
        <div style={{ flex: 1, marginTop:'-50px', marginLeft:'-100px'}}>
          <GenericMultiComponentFrame
            initialActive={initialTab}
            buttonMinWidth="160px"
            primaryColor="#007bff"
            components={[
              { id: 1, name: 'Continuous Uniform Distribution Calculator', key: 'uniform', component: ContinuousUniformCalculator },
              { id: 2, name: 'Exponential Distribution Calculator', key: 'exponential', component: ExponentialDistributionCalculator },
              { id: 3, name: 'Normal Distribution Calculator', key: 'normal', component: NormalDistributionCalculator },
            ]}
          />
        </div>
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
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
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