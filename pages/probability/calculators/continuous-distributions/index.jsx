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
// //       { title: "Trigonometric Functions of Special Angles", link: "/tables/special-angles" },
// //       { title: "Inverse Trigonometric Functions", link: "/trigonometry/inverse-functions" },
// //       { title: "Trigonometric Reduction Formulas", link: "/trigonometry/identities#shift" },
// //       { title: "Half Angle Formulas", link: "/trigonometry/identities#half" },
      
// //        { title: "Triple Angle Formulas", link: "/trigonometry/identities#triple" },
// //         { title: "Sum of Angles Formulas", link: "/trigonometry/identities#sum" },
// //         { title: "Difference of Angles Formulas", link: "/trigonometry/identities#difference" },
// //          { title: "Negative Angle Formulas (Even-Odd Identities)", link: "/trigonometry/identities#even-odd" },
// //       { title: "Complement Angle Formulas", link: "/trigonometry/identities#co-function" }, 
// //       { title: "Supplement Angle Formulas", link: "/trigonometry/identities#shift" },   
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
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import NormalDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/NormalDistributionCalculator'
import ContinuousUniformCalculator from '@/app/components/calculators/probability/distributions/continuous/UniformDistributionCalculator'
import ExponentialDistributionCalculator from '@/app/components/calculators/probability/distributions/continuous/ExponentialDistributionCalculator'
import { useSearchParams } from 'next/navigation'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

// the three calculators of the frame (module scope, so the frame's tab state is not reset by a re-render)
const CONTINUOUS_COMPONENTS = [
  { id: 1, name: 'Continuous Uniform Distribution Calculator', key: 'uniform', component: ContinuousUniformCalculator },
  { id: 2, name: 'Exponential Distribution Calculator', key: 'exponential', component: ExponentialDistributionCalculator },
  { id: 3, name: 'Normal Distribution Calculator', key: 'normal', component: NormalDistributionCalculator },
]
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


/* calculators-mesh: finished 2026-10-17 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/probability/calculators/continuous-distributions" in calculators-mesh-registry.json (same folder): 8 usage sections, each with a demo; 21 panel notes (3 calculators x 7 keys); 21 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
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

**P(x₁ < X < x₂)** calculates interval probability, the area between two values. This query requires both lower bound x₁ and upper bound x₂. The calculator shades the region between these bounds, demonstrating that continuous probability equals area under the PDF curve. This mode suits questions like "What's the probability of landing between 2 and 5?"
Changing the type clears the result and empties the $x$ boxes, so type the value again and click Calculate. The six types are compared in [PDF vs CDF for Continuous Distributions](!#pdf-vs-cdf-for-continuous-distributions), and each has its own section, starting with [The Full Distribution Query](!#the-full-distribution-query).`,
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

Use continuous uniform for random arrival times in windows, random coordinates in bounded regions, or any scenario with constant probability density over a finite interval.
Both boxes take decimals and $b$ must exceed $a$ ("b must be greater than a"). For $a = 0$, $b = 10$ the cards read PDF $0.1000$, mean $5.0000$, variance $8.3333$, standard deviation $2.8868$; $P(X < 3) = 0.3000$ and $P(2 < X < 5) = 0.3000$. The formulas are explained in [The Continuous Uniform Distribution](!#the-continuous-uniform-distribution).`,
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

Query results use CDF = 1 - e^(-λx). For P(X < 3) with λ=0.5, calculate 1 - e^(-1.5) ≈ 0.7769. The shaded area shows cumulative probability. Use exponential for customer service times, equipment lifetimes, radioactive decay intervals, or any memoryless waiting time scenario.
The $\\lambda$ box takes a positive decimal ("Lambda must be positive") and the $x$ boxes non-negative values. For $\\lambda = 0.5$ the cards read mean $2.0000$, variance $4.0000$, standard deviation $2.0000$; $P(X < 3) \\approx 0.7769$, $P(X > 2) \\approx 0.3679$ and $P(1 < X < 3) \\approx 0.3834$. The formula is explained in [The Exponential Distribution](!#the-exponential-distribution).`,
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

Apply normal distribution to heights, test scores, measurement errors, or any variable resulting from many independent factors. The central limit theorem ensures many real phenomena approximate normality.
The $\\sigma$ box must be positive ("Standard deviation must be positive"). For $\\mu = 100$, $\\sigma = 15$ the cards read mean $100.0000$, variance $225.0000$, standard deviation $15.0000$; $P(X < 115) \\approx 0.8413$ with the z-score $1.0000$ shown under the probability, and $P(85 < X < 115) \\approx 0.6827$. The formula is explained in [The Normal Distribution](!#the-normal-distribution).`,
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

Range queries answer practical questions: "What fraction of products measure between spec limits?", "What percentage of customers wait 2-5 minutes?", "How likely is a value within tolerance?" The visual shading reinforces that continuous probability equals area under the density curve.
The range type adds a second box; $x_2$ must exceed $x_1$ ("x2 must be greater than x1"). The query is explained in [Between Two Values: P(x₁ < X < x₂)](!#between-two-values-p-x-x-x) with the three distributions as examples.`,
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

**Shaded regions** in orange indicate the area representing your query's probability. For P(X<x), shading extends from the left edge to x. For P(X>x), shading extends from x rightward. For range queries, shading fills the interval between x₁ and x₂. These visual aids reinforce that **probability = area under the PDF curve**.
The curve belongs to the **Full distribution** type and the shaded area to the other five; what the area means is explained in [What Are Continuous Probability Distributions?](!#what-are-continuous-probability-distributions).`,
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

For comprehensive theory on continuous probability distributions including derivations, properties, and applications, see [continuous probability distributions theory](!/probability/distributions/continuous#shared).

The PDF is defined in [Definition and physical intuition](!/probability/probability-function/pdf#1), its rules in [The two fundamental axioms](!/probability/probability-function/pdf#5), and the step from area to probability in [Calculations using the PDF](!/probability/probability-function/pdf#8).`,
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

The **CDF visualizer tools** display cumulative probability curves complementing these PDF visualizations, showing how probability accumulates across the distribution's range.
The six query types of the calculators are each explained in their own section: [The Full Distribution Query](!#the-full-distribution-query), [Strictly Less Than: P(X < x)](!#strictly-less-than-p-x-x), [At Most: P(X ≤ x)](!#at-most-p-x-x), [Strictly Greater Than: P(X > x)](!#strictly-greater-than-p-x-x), [At Least: P(X ≥ x)](!#at-least-p-x-x) and [Between Two Values: P(x₁ < X < x₂)](!#between-two-values-p-x-x-x). The relation between the two functions is taught in [Connection to CDF](!/probability/probability-function/pdf#12) and [The CDF of a continuous variable](!/probability/cdf#continuous).`,
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

**Selection criteria**: Consider range (bounded vs unbounded), symmetry (normal is symmetric, exponential skewed), tail behavior (exponential has long right tail, normal has thin tails), memoryless property (only exponential), central limit effects (many independent factors suggest normal). Plot data and compare to distribution shapes.
Each of the three distributions has its own section on this page: [The Continuous Uniform Distribution](!#the-continuous-uniform-distribution), [The Exponential Distribution](!#the-exponential-distribution) and [The Normal Distribution](!#the-normal-distribution); the lesson hub compares them in [What they share](!/probability/distributions/continuous#shared) and [How they differ](!/probability/distributions/continuous#differ).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Calculators`,
      content: `**[Discrete Distributions Calculator](!/probability/calculators/discrete-distributions)** - Compute probabilities for binomial, Poisson, geometric, and other discrete distributions with PMF charts.

**Z-Score Calculator** - Convert between raw scores and z-scores for normal distributions with percentile lookups.

**[Probability Distribution Explorer](!/probability/visual-tools/distributions)** - Interactive visualization comparing multiple distributions side-by-side with parameter adjustments.

**[CDF Visualizer](!/probability/visual-tools/cdf)** - Generate cumulative distribution function plots for discrete and continuous distributions.

**[Statistical Distribution Reference](!/probability/distributions)** - Comprehensive guide to all probability distributions with formulas, properties, and use cases.

**Confidence Interval Calculator** - Compute confidence intervals using normal, t, and other distributions.

**Central Limit Theorem Simulator** - Visualize how sample means approach normal distribution regardless of population distribution.

**Percentile Calculator** - Find percentiles and quantiles for normal and other continuous distributions.

**Normal Probability Plot Generator** - Create Q-Q plots to assess whether data follows a normal distribution.

**Hypothesis Testing Tools** - Perform statistical tests using normal, t, chi-square, and F distributions.
The distributions behind these tools are taught in [Continuous distributions](!/probability/distributions/continuous#shared) and the densities they share in [PDFs of common continuous distributions](!/probability/probability-function/pdf#13).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `Switching Between the Three Calculators`,
      content: `The row of buttons above the calculator holds the three tools of this page: **Continuous Uniform**, **Exponential** and **Normal Distribution Calculator**. The page opens on the uniform calculator; click a button to switch, and the blue heading of the card names the active tool. Each calculator keeps its own boxes, so the values you typed into one are not carried into another, and the result of the tool you leave is dropped when you come back to it.

Adding ?tab=2 or ?tab=3 after the page address opens the exponential or the normal calculator directly, in the order of the buttons; the buttons themselves do not change the address. Every tool has the same layout: the **Probability Type** box, its parameter boxes, the **Calculate** and **Reset** buttons, the result cards and the PDF curve with the shaded area of the query. The panel on the right of each tool explains the active calculator and the chosen query type. Which tool fits which situation is explained in [Choosing the Right Continuous Distribution](!#choosing-the-right-continuous-distribution).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: `Calculating, Reading the Results and Resetting`,
      content: `The **Calculate** button stays grey until every required box holds a valid value: the parameters, and the $x$ box, or the two boxes $x_1$ and $x_2$ of the range type, for every query type except the full distribution. A value of the wrong kind is flagged under its box as you type or when you click, for example "Lambda must be positive", "Standard deviation must be positive", "b must be greater than a" or "x2 must be greater than x1", and the result stays empty until the note is cleared.

A successful click fills the right-hand side. For a query type other than the full distribution, the first card shows the query in symbols, such as $P(X < 3)$, with its probability to six decimals; the normal calculator adds the z-score under it. Then the parameter cards follow: the mean $\\mu$, the variance $\\sigma^2$ and the standard deviation $\\sigma$ in every tool, plus the constant density $f(x)$ for the uniform tool. **Distribution Info** repeats the PDF formula, and the curve below shades the area of the query. **Reset** empties every box of the active tool and removes its result; the query type and the other two tools are left as they were. What the mean and variance of a continuous distribution measure is explained in [What Are Continuous Probability Distributions?](!#what-are-continuous-probability-distributions).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj13: {
      title: `The Continuous Uniform Distribution`,
      content: `The continuous uniform distribution spreads probability evenly over an interval $[a, b]$: the density is the constant $f(x) = \\frac{1}{b - a}$ inside the interval and $0$ outside, so the PDF is a rectangle of height $\\frac{1}{b - a}$ and area $1$. Probabilities are lengths: $P(X \\le x) = \\frac{x - a}{b - a}$ for $x$ in the interval and $P(x_1 < X < x_2) = \\frac{x_2 - x_1}{b - a}$.

The mean is the midpoint $\\frac{a + b}{2}$ and the variance $\\frac{(b - a)^2}{12}$. For $a = 0$, $b = 10$: density $0.1$, mean $5$, variance $\\frac{100}{12} \\approx 8.3333$, standard deviation $\\approx 2.8868$, $P(X < 3) = 0.3$ and $P(2 < X < 5) = 0.3$. The common mistake is to read the density $0.1$ as a probability; a single value has probability $0$, and only an interval has a positive probability.

The lesson covers the density in [Probability density function and support](!/probability/distributions/continuous/uniform#5), the CDF in [Cumulative distribution function](!/probability/distributions/continuous/uniform#6), and the moments in [Expected value](!/probability/distributions/continuous/uniform#7) and [Variance and standard deviation](!/probability/distributions/continuous/uniform#8); the hub entry is [Uniform](!/probability/distributions/continuous#uniform).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj14: {
      title: `The Exponential Distribution`,
      content: `The exponential distribution models the waiting time until the next event when events occur at a constant average rate $\\lambda$. Its density is $f(x) = \\lambda e^{-\\lambda x}$ for $x \\ge 0$, a curve that starts at height $\\lambda$ and decays, and its CDF has the closed form $P(X \\le x) = 1 - e^{-\\lambda x}$, so every query of the calculator is one exponential away: $P(X > x) = e^{-\\lambda x}$ and $P(x_1 < X < x_2) = e^{-\\lambda x_1} - e^{-\\lambda x_2}$.

The mean is $\\frac{1}{\\lambda}$ and so is the standard deviation; the variance is $\\frac{1}{\\lambda^2}$. For $\\lambda = 0.5$: mean $2$, variance $4$, $P(X < 3) = 1 - e^{-1.5} \\approx 0.7769$, $P(X > 2) = e^{-1} \\approx 0.3679$ and $P(1 < X < 3) \\approx 0.3834$. The distribution is memoryless: having waited $s$ already does not change the distribution of the remaining wait. The common mistake is to enter the mean waiting time as $\\lambda$; the rate is its reciprocal, $\\lambda = 1 / \\text{mean}$.

The lesson covers the density in [Probability density function and support](!/probability/distributions/continuous/exponential#5), the CDF in [Cumulative distribution function](!/probability/distributions/continuous/exponential#6), the moments in [Expected value](!/probability/distributions/continuous/exponential#7) and [Variance and standard deviation](!/probability/distributions/continuous/exponential#8) and the memoryless property in [Properties](!/probability/distributions/continuous/exponential#15); the hub entry is [Exponential](!/probability/distributions/continuous#exponential).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj15: {
      title: `The Normal Distribution`,
      content: `The normal distribution is the bell curve with centre $\\mu$ and spread $\\sigma$: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-(x - \\mu)^2 / (2\\sigma^2)}$. Its CDF has no closed form, so the calculator evaluates it numerically; the standard trick is the z-score $z = \\frac{x - \\mu}{\\sigma}$, the distance from the mean in standard deviations, which the calculator prints under every query probability.

For $\\mu = 100$, $\\sigma = 15$: the variance is $225$, $P(X < 115) = \\Phi(1) \\approx 0.8413$ since $115$ is one standard deviation above the mean, and $P(85 < X < 115) \\approx 0.6827$, the first part of the 68-95-99.7 rule. The common mistake is to enter the variance in the $\\sigma$ box; the box takes the standard deviation, so $225$ would spread the curve fifteen times too wide.

The lesson covers the density in [Probability density function and support](!/probability/distributions/continuous/normal#5), the CDF in [Cumulative distribution function](!/probability/distributions/continuous/normal#6), the parameters in [Parameters](!/probability/distributions/continuous/normal#3) and the moments in [Expected value](!/probability/distributions/continuous/normal#7) and [Variance and standard deviation](!/probability/distributions/continuous/normal#8); the hub entry is [Normal](!/probability/distributions/continuous#normal).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj16: {
      title: `The Full Distribution Query`,
      content: `**Full distribution** is the opening query type of every calculator and needs only the parameters. Calculate then draws the PDF curve over a sensible range, marks the mean with a dashed line, and shows the parameter cards: the uniform rectangle of height $\\frac{1}{b - a}$, the exponential decay starting at $\\lambda$, or the bell curve peaking at $\\mu$. No $x$ box is shown in this mode.

Use it first to see the shape of the distribution and where the mean sits: for the exponential the mean $\\frac{1}{\\lambda}$ lies to the right of the peak, for the normal it is the peak, for the uniform it is the midpoint. The area under the whole curve is $1$, which is the second axiom of a PDF. The PDF and its rules are taught in [The two fundamental axioms](!/probability/probability-function/pdf#5) and the three ways to show it in [Representations: the three views](!/probability/probability-function/pdf#6).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj17: {
      title: `Strictly Less Than: P(X < x)`,
      content: `**P(X < x)** is the area under the density to the left of $x$, the cumulative distribution function $F(x)$. For a continuous variable a single point carries no probability, so $P(X < x)$ and $P(X \\le x)$ are the same number; the calculator offers both labels for readers coming from the discrete case, where they differ. For the uniform distribution on $[0, 10]$, $P(X < 3) = 0.3$; for the exponential with $\\lambda = 0.5$, $P(X < 3) = 1 - e^{-1.5} \\approx 0.7769$; for the normal with $\\mu = 100$, $\\sigma = 15$, $P(X < 115) \\approx 0.8413$.

The shaded region runs from the left edge of the curve to $x$. The common mistake is to expect a different answer from $P(X \\le x)$, as for a discrete variable; the difference, $P(X = x)$, is $0$ here. The function is defined in [The definition of the CDF](!/probability/cdf#definition) and its continuous case in [The CDF of a continuous variable](!/probability/cdf#continuous).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj18: {
      title: `At Most: P(X ≤ x)`,
      content: `**P(X ≤ x)** is the cumulative distribution function $F(x)$ itself, the area to the left of and up to $x$. It equals $P(X < x)$ for every continuous distribution, since the boundary point adds no area; both types shade the same region and return the same six decimals. For the exponential distribution the formula is explicit, $F(x) = 1 - e^{-\\lambda x}$; for the uniform it is linear, $\\frac{x - a}{b - a}$; for the normal it is $\\Phi\\left(\\frac{x - \\mu}{\\sigma}\\right)$, evaluated numerically.

This is the query behind "at most", "no more than" and "within the first" questions, and the one whose values a textbook table lists. Every other query type can be written with it: $1 - F(x)$ for the right tail and $F(x_2) - F(x_1)$ for an interval. See [The definition of the CDF](!/probability/cdf#definition) and [Using the CDF](!/probability/cdf#using).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj19: {
      title: `Strictly Greater Than: P(X > x)`,
      content: `**P(X > x)** is the right tail, the area to the right of $x$, equal to $1 - F(x)$. For the exponential distribution it has the simplest form of all, $P(X > x) = e^{-\\lambda x}$: with $\\lambda = 0.5$, $P(X > 2) = e^{-1} \\approx 0.3679$, the chance that the wait lasts beyond $2$. For the uniform distribution on $[0, 10]$, $P(X > 3) = 0.7$; for the normal with $\\mu = 100$, $\\sigma = 15$, $P(X > 115) \\approx 0.1587$.

The shaded region runs from $x$ to the right edge of the curve. The common mistake is to compute the tail by integrating the density from $x$ to some finite bound; the calculator uses the complement $1 - F(x)$, which is exact. Tails and complements are covered in [Calculations using the PDF](!/probability/probability-function/pdf#8) and [Connection to CDF](!/probability/probability-function/pdf#12).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj20: {
      title: `At Least: P(X ≥ x)`,
      content: `**P(X ≥ x)** is the right tail including $x$, $1 - F(x)$ as well, since the point $x$ adds no area for a continuous variable; it returns the same number as $P(X > x)$ and shades the same region. The two labels are kept so that "at least" and "more than" questions can be entered as they are worded.

The query is the one behind "at least", "no less than" and "survives beyond" questions, for example the survival probability of a component whose lifetime is exponential: with $\\lambda = 0.5$ per year, $P(X \\ge 2) \\approx 0.3679$. The common mistake is to expect it to exceed $P(X > x)$ by $P(X = x)$, as in the discrete case; here $P(X = x) = 0$. The relation to the CDF is taught in [Connection to CDF](!/probability/probability-function/pdf#12) and [The CDF of a continuous variable](!/probability/cdf#continuous).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj21: {
      title: `Between Two Values: P(x₁ < X < x₂)`,
      content: `**P(x₁ < X < x₂)** is the area between two values, $F(x_2) - F(x_1)$. The range type shows two boxes and needs $x_2 > x_1$. For the uniform distribution on $[0, 10]$ the answer is a length ratio, $P(2 < X < 5) = \\frac{3}{10} = 0.3$; for the exponential with $\\lambda = 0.5$, $P(1 < X < 3) = e^{-0.5} - e^{-1.5} \\approx 0.3834$; for the normal with $\\mu = 100$, $\\sigma = 15$, $P(85 < X < 115) = \\Phi(1) - \\Phi(-1) \\approx 0.6827$.

This is the query behind tolerance limits and confidence intervals: the share of parts within specification, the fraction of customers served within a window. The common mistake is to add the two one-sided probabilities instead of subtracting the CDF values. Interval probabilities are taught in [Calculations using the PDF](!/probability/probability-function/pdf#8) and [Using the CDF](!/probability/cdf#using).`,
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

  const detailInstructions = [
    `Pick a calculator with the three buttons above the card: Continuous Uniform, Exponential or Normal; each keeps its own values. [Learn more about switching calculators](!#switching-between-the-three-calculators)`,
    `Pick a **Probability Type**: the full distribution, P(X < x), P(X ≤ x), P(X > x), P(X ≥ x) or the range P(x₁ < X < x₂); changing it clears the result and the x boxes. [Learn more about the query types](!#selecting-probability-query-types)`,
    `Type the parameters of the chosen distribution: **a** and **b**, **λ**, or **μ** and **σ**; a red note flags a value of the wrong kind. [Learn more about the uniform calculator](!#using-the-continuous-uniform-calculator)`,
    `For a query other than the full distribution, type **x**, or **x₁** and **x₂** for the range, in the boxes that appear below the parameters. [Learn more about range queries](!#understanding-range-queries-p-x-x-x)`,
    `Click **Calculate**; it stays grey until every box is valid. The query card shows the probability to six decimals (with the z-score for the normal), then the cards for the mean, the variance and the standard deviation. [Learn more about the results](!#calculating-reading-the-results-and-resetting)`,
    `Read the PDF curve under the cards: the shaded area is the probability you asked for, the dashed line the mean. [Learn more about the curve](!#reading-pdf-curve-visualizations)`,
    `Read the panel on the right: it explains the active calculator and the chosen query type, with links to the sections below. [Learn more about the normal calculator](!#working-with-normal-distribution-calculator)`,
    `Click **Reset** to empty the boxes of the active tool and remove its result; the other tools are left as they were. [Learn more about resetting](!#calculating-reading-the-results-and-resetting)`,
  ];
  const cdExplanations = {
    uniform: {
      main: { title: 'Continuous uniform distribution', content: `Spreads probability evenly over $[a, b]$: density $\\frac{1}{b - a}$, mean $\\frac{a + b}{2}$, variance $\\frac{(b - a)^2}{12}$; probabilities are lengths divided by $b - a$. [Learn more about the continuous uniform distribution](!#the-continuous-uniform-distribution) · [All continuous distributions](!#choosing-the-right-continuous-distribution)` },
      all: { title: 'Full distribution', content: `Draws the PDF of the continuous uniform distribution over its range with the mean marked, and shows the parameter cards. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      less: { title: 'P(X < x)', content: `The area under the density of the continuous uniform distribution to the left of $x$: the CDF $F(x)$. [Learn more about strictly less than](!#strictly-less-than-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      lessEqual: { title: 'P(X ≤ x)', content: `The CDF $F(x)$ of the continuous uniform distribution; for a continuous variable it equals $P(X < x)$. [Learn more about at most](!#at-most-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      greater: { title: 'P(X > x)', content: `The right tail of the continuous uniform distribution, $1 - F(x)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      greaterEqual: { title: 'P(X ≥ x)', content: `The right tail of the continuous uniform distribution including $x$, $1 - F(x)$ as well. [Learn more about at least](!#at-least-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      range: { title: 'P(x₁ < X < x₂)', content: `The area of the continuous uniform distribution between two values, $F(x_2) - F(x_1)$. [Learn more about ranges](!#between-two-values-p-x-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
    },
    exponential: {
      main: { title: 'Exponential distribution', content: `Waiting time at a constant rate $\\lambda$: density $\\lambda e^{-\\lambda x}$, CDF $1 - e^{-\\lambda x}$, mean and standard deviation $\\frac{1}{\\lambda}$. [Learn more about the exponential distribution](!#the-exponential-distribution) · [All continuous distributions](!#choosing-the-right-continuous-distribution)` },
      all: { title: 'Full distribution', content: `Draws the PDF of the exponential distribution over its range with the mean marked, and shows the parameter cards. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      less: { title: 'P(X < x)', content: `The area under the density of the exponential distribution to the left of $x$: the CDF $F(x)$. [Learn more about strictly less than](!#strictly-less-than-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      lessEqual: { title: 'P(X ≤ x)', content: `The CDF $F(x)$ of the exponential distribution; for a continuous variable it equals $P(X < x)$. [Learn more about at most](!#at-most-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      greater: { title: 'P(X > x)', content: `The right tail of the exponential distribution, $1 - F(x)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      greaterEqual: { title: 'P(X ≥ x)', content: `The right tail of the exponential distribution including $x$, $1 - F(x)$ as well. [Learn more about at least](!#at-least-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      range: { title: 'P(x₁ < X < x₂)', content: `The area of the exponential distribution between two values, $F(x_2) - F(x_1)$. [Learn more about ranges](!#between-two-values-p-x-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
    },
    normal: {
      main: { title: 'Normal distribution', content: `The bell curve with centre $\\mu$ and spread $\\sigma$; probabilities come from the z-score $z = \\frac{x - \\mu}{\\sigma}$ and the standard normal CDF $\\Phi$. [Learn more about the normal distribution](!#the-normal-distribution) · [All continuous distributions](!#choosing-the-right-continuous-distribution)` },
      all: { title: 'Full distribution', content: `Draws the PDF of the normal distribution over its range with the mean marked, and shows the parameter cards. [Learn more about the full distribution](!#the-full-distribution-query) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      less: { title: 'P(X < x)', content: `The area under the density of the normal distribution to the left of $x$: the CDF $F(x)$. [Learn more about strictly less than](!#strictly-less-than-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      lessEqual: { title: 'P(X ≤ x)', content: `The CDF $F(x)$ of the normal distribution; for a continuous variable it equals $P(X < x)$. [Learn more about at most](!#at-most-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      greater: { title: 'P(X > x)', content: `The right tail of the normal distribution, $1 - F(x)$. [Learn more about strictly greater than](!#strictly-greater-than-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      greaterEqual: { title: 'P(X ≥ x)', content: `The right tail of the normal distribution including $x$, $1 - F(x)$ as well. [Learn more about at least](!#at-least-p-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
      range: { title: 'P(x₁ < X < x₂)', content: `The area of the normal distribution between two values, $F(x_2) - F(x_1)$. [Learn more about ranges](!#between-two-values-p-x-x-x) · [All query types](!#pdf-vs-cdf-for-continuous-distributions)` },
    },
  };
  const demos = {
    'switching-between-the-three-calculators': {
      title: 'The three calculators',
      component: 'uniform',
      frame: true,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'CLICK Exponential Distribution Calculator\nThe card changes: one parameter box, λ.', at: 'tr' },
        { click: { button: 'Exponential Distribution Calculator', exact: true } },
        { wait: 2600 },
        { say: 'CLICK Normal Distribution Calculator\nBoxes for μ and σ.', at: 'tr' },
        { click: { button: 'Normal Distribution Calculator', exact: true } },
        { wait: 2600 },
        { say: 'CLICK Continuous Uniform Distribution Calculator\nBack to the first tool; its boxes are still empty.', at: 'tr' },
        { click: { button: 'Continuous Uniform Distribution Calculator', exact: true } },
        { wait: 2400 },
      ],
    },
    'selecting-probability-query-types': {
      title: 'Three query types on the uniform distribution',
      component: 'uniform',
      frame: false,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'TYPE 0 and 10, CLICK Calculate\nThe full distribution: a rectangle of height 0.1; mean 5.0000, variance 8.3333.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '0' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '10' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X < x), TYPE 3, CLICK Calculate\nP(X < 3) = 0.300000: the shaded strip from 0 to 3.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'less' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(x₁ < X < x₂), TYPE 2 and 5, CLICK Calculate\nP(2 < X < 5) = 0.300000.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'range' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '2' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'using-the-continuous-uniform-calculator': {
      title: 'The interval 0 to 10: full distribution, P(X < 3), b below a',
      component: 'uniform',
      frame: false,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'TYPE 0 and 10, CLICK Calculate\nPDF 0.1000, mean 5.0000, variance 8.3333, std dev 2.8868.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '0' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '10' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X < x), TYPE 3, CLICK Calculate\nP(X < 3) = 0.300000: three tenths of the interval.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'less' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 10 and 0 as a and b, CLICK Calculate\nRefused: b must be greater than a.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '10' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '0' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
      ],
    },
    'calculating-exponential-distribution-probabilities': {
      title: 'λ = 0.5: full distribution, P(X < 3), P(X > 2)',
      component: 'exponential',
      frame: false,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'TYPE 0.5, CLICK Calculate\nMean 2.0000, variance 4.0000, std dev 2.0000; the decay curve starts at 0.5.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '0.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X < x), TYPE 3, CLICK Calculate\nP(X < 3) = 1 − e^−1.5 ≈ 0.7769.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'less' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X > x), TYPE 2, CLICK Calculate\nP(X > 2) = e^−1 ≈ 0.3679.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'greater' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '2' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'working-with-normal-distribution-calculator': {
      title: 'μ = 100, σ = 15: the bell curve, P(X < 115), σ refused',
      component: 'normal',
      frame: false,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'TYPE 100 and 15, CLICK Calculate\nMean 100.0000, variance 225.0000, std dev 15.0000; the bell curve with σ marks.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '100' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '15' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X < x), TYPE 115, CLICK Calculate\nP(X < 115) ≈ 0.8413; z-score 1.0000.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'less' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '115' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 0 as σ, CLICK Calculate\nRefused: standard deviation must be positive.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '0' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
      ],
    },
    'understanding-range-queries-p-x-x-x': {
      title: 'Two ranges on the normal distribution, then x₂ below x₁',
      component: 'normal',
      frame: false,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'TYPE 100 and 15, PICK P(x₁ < X < x₂), TYPE 85 and 115, CLICK Calculate\nP(85 < X < 115) ≈ 0.6827: one standard deviation each side.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '100' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '15' },
        { set: { css: 'select', nth: 0 }, value: 'range' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '85' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '115' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
        { say: 'TYPE 70 and 130, CLICK Calculate\nTwo standard deviations: ≈ 0.9545.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '70' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '130' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'TYPE 130 and 70, CLICK Calculate\nRefused: x2 must be greater than x1.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '130' },
        { set: { css: 'input[type="text"]', nth: 3 }, value: '70' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
      ],
    },
    'reading-pdf-curve-visualizations': {
      title: 'The exponential curve and two shaded areas',
      component: 'exponential',
      frame: false,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'TYPE 0.5, CLICK Calculate\nThe decay curve from 0.5 downwards; the dashed line marks the mean 2.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '0.5' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(X < x), TYPE 3, CLICK Calculate\nThe area from 0 to 3 is shaded: ≈ 0.7769.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'less' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
        { say: 'PICK P(x₁ < X < x₂), TYPE 1 and 3, CLICK Calculate\nOnly the strip from 1 to 3 is shaded: ≈ 0.3834.', at: 'tr' },
        { set: { css: 'select', nth: 0 }, value: 'range' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '1' },
        { set: { css: 'input[type="text"]', nth: 2 }, value: '3' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3000 },
      ],
    },
    'calculating-reading-the-results-and-resetting': {
      title: 'A refused pair, the result cards, Reset',
      component: 'uniform',
      frame: false,
      scale: 0.4,
      minHeight: 377,
      script: [
        { say: 'TYPE 10 and 0, CLICK Calculate\nRefused: b must be greater than a.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '10' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '0' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 2600 },
        { say: 'TYPE 0 and 10, CLICK Calculate\nThe cards: PDF 0.1000, mean 5.0000, variance 8.3333, std dev 2.8868, then the curve.', at: 'tr' },
        { set: { css: 'input[type="text"]', nth: 0 }, value: '0' },
        { set: { css: 'input[type="text"]', nth: 1 }, value: '10' },
        { click: { button: 'Calculate', exact: true } },
        { wait: 3200 },
        { say: 'CLICK Reset\nBoxes empty, result gone; the query type stays.', at: 'tr' },
        { click: { button: 'Reset', exact: true } },
        { wait: 2400 },
      ],
    },
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      menuItems,
      detailInstructions,
      cdExplanations,
      demos,
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

export default function ContinuousDistributionsPage({seoData, sectionsContent, introContent, faqQuestions, schemas, menuItems, detailInstructions = [], cdExplanations = null, demos = {}}) {

  const searchParams = useSearchParams()
  const tab = searchParams.get('tab')
  const initialTab = tab ? parseInt(tab) : 1

  // the calculator a demo drives: the whole frame (tab bar + active tool) or one tool with its own panel texts
  const demoTool = (slug) => {
    const d = demos[slug]
    if (d.frame) return <GenericMultiComponentFrame components={CONTINUOUS_COMPONENTS} explanations={cdExplanations || {}} initialActive={1} buttonMinWidth="160px" primaryColor="#007bff" />
    const Tool = CONTINUOUS_COMPONENTS.find((c) => c.key === d.component).component
    return <Tool explanations={cdExplanations ? cdExplanations[d.component] : undefined} />
  }
  const demoPlayer = (slug) => (
    <ToolDemoPlayer
      key={`demo-${slug}`}
      script={demos[slug].script}
      title={demos[slug].title}
      label={`Demo: ${demos[slug].title}`}
      scale={demos[slug].scale || 0.4}
      minHeight={demos[slug].minHeight || undefined}
      renderText={processContent}
    >
      {demoTool(slug)}
    </ToolDemoPlayer>
  )
  const genericSections = [
    { id: 'switching-between-the-three-calculators', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [demoPlayer('switching-between-the-three-calculators'), sectionsContent.obj11.content] },
    { id: 'selecting-probability-query-types', title: sectionsContent.obj1.title, link: sectionsContent.obj1.link, content: [demoPlayer('selecting-probability-query-types'), sectionsContent.obj1.content] },
    { id: 'using-the-continuous-uniform-calculator', title: sectionsContent.obj2.title, link: sectionsContent.obj2.link, content: [demoPlayer('using-the-continuous-uniform-calculator'), sectionsContent.obj2.content] },
    { id: 'calculating-exponential-distribution-probabilities', title: sectionsContent.obj3.title, link: sectionsContent.obj3.link, content: [demoPlayer('calculating-exponential-distribution-probabilities'), sectionsContent.obj3.content] },
    { id: 'working-with-normal-distribution-calculator', title: sectionsContent.obj4.title, link: sectionsContent.obj4.link, content: [demoPlayer('working-with-normal-distribution-calculator'), sectionsContent.obj4.content] },
    { id: 'understanding-range-queries-p-x-x-x', title: sectionsContent.obj5.title, link: sectionsContent.obj5.link, content: [demoPlayer('understanding-range-queries-p-x-x-x'), sectionsContent.obj5.content] },
    { id: 'reading-pdf-curve-visualizations', title: sectionsContent.obj6.title, link: sectionsContent.obj6.link, content: [demoPlayer('reading-pdf-curve-visualizations'), sectionsContent.obj6.content] },
    { id: 'calculating-reading-the-results-and-resetting', title: sectionsContent.obj12.title, link: sectionsContent.obj12.link, content: [demoPlayer('calculating-reading-the-results-and-resetting'), sectionsContent.obj12.content] },
    { id: 'what-are-continuous-probability-distributions', title: sectionsContent.obj7.title, link: sectionsContent.obj7.link, content: [sectionsContent.obj7.content] },
    { id: 'choosing-the-right-continuous-distribution', title: sectionsContent.obj9.title, link: sectionsContent.obj9.link, content: [sectionsContent.obj9.content] },
    { id: 'the-continuous-uniform-distribution', title: sectionsContent.obj13.title, link: sectionsContent.obj13.link, content: [sectionsContent.obj13.content] },
    { id: 'the-exponential-distribution', title: sectionsContent.obj14.title, link: sectionsContent.obj14.link, content: [sectionsContent.obj14.content] },
    { id: 'the-normal-distribution', title: sectionsContent.obj15.title, link: sectionsContent.obj15.link, content: [sectionsContent.obj15.content] },
    { id: 'pdf-vs-cdf-for-continuous-distributions', title: sectionsContent.obj8.title, link: sectionsContent.obj8.link, content: [sectionsContent.obj8.content] },
    { id: 'the-full-distribution-query', title: sectionsContent.obj16.title, link: sectionsContent.obj16.link, content: [sectionsContent.obj16.content] },
    { id: 'strictly-less-than-p-x-x', title: sectionsContent.obj17.title, link: sectionsContent.obj17.link, content: [sectionsContent.obj17.content] },
    { id: 'at-most-p-x-x', title: sectionsContent.obj18.title, link: sectionsContent.obj18.link, content: [sectionsContent.obj18.content] },
    { id: 'strictly-greater-than-p-x-x', title: sectionsContent.obj19.title, link: sectionsContent.obj19.link, content: [sectionsContent.obj19.content] },
    { id: 'at-least-p-x-x', title: sectionsContent.obj20.title, link: sectionsContent.obj20.link, content: [sectionsContent.obj20.content] },
    { id: 'between-two-values-p-x-x-x', title: sectionsContent.obj21.title, link: sectionsContent.obj21.link, content: [sectionsContent.obj21.content] },
    { id: 'related-probability-tools-and-calculators', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
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
      
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Continuous Distributions Calculator</h1>
      <div style={{marginBottom:'20px'}}>
        <ExplanationDetails instructions={detailInstructions} title='How to use Continuous Distributions Calculator' />
      </div>
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
        
        <div style={{ flex: 1, marginTop:'-50px', marginLeft:'-100px'}} className="calculator-widget">
          <GenericMultiComponentFrame
            initialActive={initialTab}
            buttonMinWidth="160px"
            primaryColor="#007bff"
            components={CONTINUOUS_COMPONENTS}
            explanations={cdExplanations || {}}
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