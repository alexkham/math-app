// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../../pages/pages.css'
// import Head from 'next/head'
// import ContinuousCDFVisualizer from '@/app/components/visualizations/probability/continuous-distribution/ContinuousCDFVisualizer'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
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
//         title: "Cumulative Distribution Function(CDF) of Continuous Distributions | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/cdf/continuous",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
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
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-40px',marginBottom:'-60px'}}>Cumulative Distribution Function(CDF) of Continuous Distributions</h1>
  
//   <div style={{transform:'scale(0.8)'}}>
//   <ContinuousCDFVisualizer/>
//   </div>
//    <br/>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
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
import '../../../../../pages/pages.css'
import Head from 'next/head'
import ContinuousCDFVisualizer from '@/app/components/visualizations/probability/continuous-distribution/ContinuousCDFVisualizer'


export async function getStaticProps(){

  const keyWords = [
    'continuous CDF calculator',
    'cumulative distribution function',
    'continuous probability CDF',
    'normal distribution CDF',
    'exponential CDF',
    'uniform continuous CDF',
    'interactive CDF visualizer',
    'smooth CDF curve',
    'continuous distributions tool',
    'Gaussian CDF',
    'PDF vs CDF',
    'probability distribution visualizer',
    'continuous random variable',
    'CDF integration',
    'cumulative probability tool'
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting a Distribution`,
      content: `The visualizer displays three continuous probability distributions in tabs at the top. Click any tab to switch between **Continuous Uniform**, **Normal (Gaussian)**, and **Exponential** distributions. Each distribution models different continuous phenomena: uniform for equal likelihood across an interval, normal for bell-curved symmetric data, and exponential for waiting times or decay processes. The active tab highlights in blue, and the chart immediately updates to show a smooth cumulative distribution function curve with default parameter values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Adjusting Distribution Parameters`,
      content: `Each distribution provides parameter sliders in the controls panel. Drag sliders to modify values:

**Continuous Uniform** uses lower bound (a) and upper bound (b) sliders to define the interval endpoints.

**Normal** adjusts mean (μ) to shift the center and standard deviation (σ) to control spread.

**Exponential** controls the rate parameter lambda (λ) which determines how quickly probability accumulates.

The smooth curve redraws instantly as you move sliders. Parameter values display numerically next to each slider label, showing current settings.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading Smooth CDF Curves`,
      content: `The cumulative distribution function appears as a smooth, continuously rising curve without jumps or steps. The x-axis represents all possible real values in the distribution's domain, while the y-axis shows cumulative probability $F(x) = P(X \\leq x)$ ranging from 0 to 1. The curve starts near 0 (typically approaching from the left) and rises smoothly to approach 1 (extending to the right). Unlike discrete CDFs that jump at specific points, continuous CDFs increase gradually across their entire range.

The curve's steepness indicates where probability density concentrates. Steeper sections mean higher probability density, while flatter sections indicate lower density. Hover over any point on the curve to see exact x-values and corresponding cumulative probabilities displayed to four decimal places.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding Continuous vs Discrete CDFs`,
      content: `Continuous CDFs form smooth curves because probability spreads continuously across intervals rather than concentrating at specific points. In discrete distributions, probability jumps occur at countable values, creating step functions. In continuous distributions, $P(X = k) = 0$ for any exact value k—probability only exists for intervals. This is why the CDF rises smoothly: you're always accumulating infinitesimally small amounts of probability density as x increases.

The smooth curve reflects integration of the **probability density function** (PDF) from negative infinity up to x. The derivative of the CDF gives the PDF, showing the relationship between accumulation (CDF) and density (PDF). The CDF never decreases and has no discontinuous jumps in continuous distributions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Finding Cumulative Probabilities`,
      content: `To find $P(X \\leq a)$ for any value a, locate a on the x-axis and read upward to where it intersects the curve. The y-coordinate at that intersection gives the cumulative probability. For example, if the curve shows 0.8413 at $x = 1$ for a standard normal distribution, there's an 84.13% chance the variable is 1 or less.

Calculate interval probabilities $P(a < X \\leq b)$ by subtracting CDF values: $F(b) - F(a)$. Hover over both endpoints to read their cumulative probabilities, then compute the difference. The vertical distance between the curve at point b and point a represents this interval probability visually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Comparing Distribution Curve Shapes`,
      content: `Switch between tabs to observe how different probabilistic mechanisms create distinct CDF patterns. The **Continuous Uniform CDF** rises linearly from 0 to 1 across its interval, with constant slope. The **Normal CDF** forms an S-shaped sigmoid curve, symmetric around the mean, with the steepest slope at the center where probability density is highest. The **Exponential CDF** rises rapidly at first near x = 0, then gradually flattens as it asymptotically approaches 1, reflecting the memoryless property of exponential waiting times.

Adjust parameters to see how they affect curve shape. Changing the mean shifts the normal curve horizontally. Increasing standard deviation or widening uniform bounds makes curves rise more gradually, spreading probability over a wider range.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Interpreting Parameter Effects`,
      content: `For **Continuous Uniform**, increasing the interval width (b - a) reduces the slope—the curve rises more gradually across a wider range. For **Normal**, increasing mean (μ) shifts the entire S-curve right or left without changing shape. Increasing standard deviation (σ) flattens the curve, making it rise more gradually as probability spreads over more values. For **Exponential**, larger lambda (λ) values create steeper initial rises—probability accumulates faster early on—while smaller lambda creates gentler curves extending farther right.

Watch the curve's steepest section as you adjust parameters. This identifies where probability density concentrates most heavily. The inflection points of the normal CDF occur at μ ± σ, visible as where curvature changes from concave to convex.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What is a Continuous CDF?`,
      content: `A continuous cumulative distribution function gives the probability that a continuous random variable X is less than or equal to x: $F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t) \\, dt$, where $f(t)$ is the **probability density function**. The CDF accumulates probability density from negative infinity up to x. For continuous distributions, the CDF is always a smooth, non-decreasing function with no jumps, starting at $\\lim_{x \\to -\\infty} F(x) = 0$ and approaching $\\lim_{x \\to \\infty} F(x) = 1$.

The derivative of the CDF equals the PDF: $f(x) = \\frac{dF(x)}{dx}$, showing how probability density relates to accumulation.

For comprehensive theory on cumulative distribution functions including mathematical properties and applications, see **cumulative distribution function theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `CDF and PDF Relationship`,
      content: `The **probability density function** (PDF) shows the relative likelihood of values—taller sections indicate higher probability density. The **cumulative distribution function** (CDF) integrates the PDF from left to right, accumulating total probability up to each point. Where PDF has peaks, CDF rises steeply. Where PDF is low or flat, CDF rises gradually. The area under the PDF curve from negative infinity to x equals the CDF value at x: $F(x) = \\int_{-\\infty}^{x} f(t) \\, dt$.

Use PDF to see where values are most likely. Use CDF to calculate probabilities for ranges. The CDF always increases smoothly, while PDF can have multiple peaks, valleys, or asymmetry.

For detailed comparison of probability functions including integration and differentiation relationships, see **probability density function vs cumulative distribution function**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Concepts`,
      content: `**Continuous Distribution Calculators** - Compute exact probabilities, quantiles, means, and variances for normal, exponential, uniform, and other continuous distributions.

**PDF Visualizers** - Display probability density functions as curves showing where values are most likely rather than cumulative probability.

**Discrete Distribution CDFs** - Explore cumulative distribution functions for discrete random variables where CDFs are step functions instead of smooth curves.

**Normal Distribution Tables** - Standard normal (Z) tables showing cumulative probabilities for the standard normal distribution.

**Probability Density Function Theory** - Understand the mathematical foundation of continuous probability functions and integration.

**Continuous Distributions Overview** - Comprehensive guide to continuous probability distributions including when to use each type.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a continuous cumulative distribution function?",
      answer: "A continuous cumulative distribution function (CDF) gives the probability that a continuous random variable X takes a value less than or equal to x: F(x) = P(X ≤ x). It is calculated by integrating the probability density function from negative infinity up to x. The CDF is always smooth with no jumps, starts at 0, and approaches 1 as x increases."
    },
    obj2: {
      question: "How do you read a continuous CDF curve?",
      answer: "Find the x-value of interest on the horizontal axis and read upward to where it meets the smooth curve. The y-coordinate at that intersection gives the cumulative probability P(X ≤ x). The curve's slope at any point indicates probability density—steeper sections mean higher density, flatter sections mean lower density."
    },
    obj3: {
      question: "What is the relationship between CDF and PDF?",
      answer: "The probability density function (PDF) shows relative likelihood at each point. The cumulative distribution function (CDF) integrates the PDF from left to right: F(x) = integral of f(t) from negative infinity to x. The derivative of the CDF equals the PDF: f(x) = dF(x)/dx. Where PDF is high, CDF rises steeply; where PDF is low, CDF rises gradually."
    },
    obj4: {
      question: "Why are continuous CDFs smooth curves instead of steps?",
      answer: "Continuous CDFs are smooth because probability spreads continuously across intervals rather than concentrating at discrete points. Since P(X = any exact value) = 0 for continuous distributions, probability accumulates gradually through integration of the density function. There are no jumps because there are no point masses of probability."
    },
    obj5: {
      question: "How do you find probability for an interval using CDF?",
      answer: "To find P(a < X ≤ b), subtract the CDF values: F(b) - F(a). This gives the probability that X falls between a and b. The vertical distance between the curve at point b and point a represents this interval probability. You can use the tooltip to read exact CDF values at both endpoints."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Continuous Distributions CDF Visualizer",
      "description": "Interactive cumulative distribution function visualizer for continuous probability distributions with smooth curve displays and adjustable parameters.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/cdf/continuous",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Smooth CDF curve visualization for three continuous distributions",
        "Interactive parameter sliders with real-time curve updates",
        "Continuous uniform, normal (Gaussian), and exponential distributions",
        "Hover tooltips showing exact cumulative probabilities to four decimals",
        "Mathematical formula explanations with LaTeX rendering",
        "Responsive two-column layout with sticky explanation panel",
        "Visual comparison of distribution shapes and parameter effects"
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/probability/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "CDF",
          "item": "https://www.learnmathclass.com/probability/visual-tools/cdf"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Continuous Distributions CDF",
          "item": "https://www.learnmathclass.com/probability/visual-tools/cdf/continuous"
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
      seoData: {
        title: "Continuous CDF Visualizer | Interactive Distribution Tool",
        description: "Visualize smooth cumulative distribution functions for continuous probability distributions. Adjust parameters, explore curves, calculate probabilities.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/cdf/continuous",
        name: "Continuous Distributions CDF Visualizer"
      },
    }
  }
}

export default function CDFContinuousVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'-40px',marginBottom:'-70px'}}>Cumulative Distribution Function(CDF) of Continuous Distributions</h1>
      
      <div style={{transform:'scale(0.8)'}}>
        <ContinuousCDFVisualizer/>
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