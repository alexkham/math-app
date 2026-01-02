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
// import DiscreteDistributionsCDF from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityCDF'


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
//         title: "Cumulative Distribution Function(CDF) of Discrete Distributions| Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/cdf/discrete",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function CDFDiscreteVisualizerPage({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'-70px'}}>Cumulative Distribution Function(CDF) of Discrete Distributions</h1>
//    <div style={{transform:'scale(0.8)'}}>
//    <DiscreteDistributionsCDF/>
//    </div>
   

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
import DiscreteDistributionsCDF from '@/app/components/visualizations/probability/discrete-distribution/DiscreteProbabilityCDF'


export async function getStaticProps(){

  const keyWords = [
    'CDF calculator',
    'cumulative distribution function',
    'discrete CDF visualizer',
    'discrete probability CDF',
    'binomial CDF',
    'geometric CDF',
    'Poisson CDF',
    'interactive CDF tool',
    'CDF discrete distributions',
    'cumulative probability calculator',
    'discrete uniform CDF',
    'negative binomial CDF',
    'hypergeometric CDF',
    'step function CDF',
    'probability distribution visualizer'
  ]

  const sectionsContent = {
    obj1: {
      title: `Selecting a Distribution`,
      content: `The visualizer displays six discrete probability distributions across tabs at the top. Click any tab to switch between **Discrete Uniform**, **Binomial**, **Geometric**, **Negative Binomial**, **Hypergeometric**, and **Poisson** distributions. Each distribution models a different probabilistic scenario, from equally likely outcomes to rare event counting. The active tab is highlighted, and the chart immediately updates to show the cumulative distribution function for that distribution with default parameter values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Adjusting Distribution Parameters`,
      content: `Each distribution has parameter sliders in the controls panel below the distribution name. Drag the sliders to change values:

**Discrete Uniform** uses minimum value (a) and maximum value (b) sliders to set the range.

**Binomial** adjusts number of trials (n) and success probability (p).

**Geometric** controls only success probability (p).

**Negative Binomial** sets number of successes (r) and success probability (p).

**Hypergeometric** configures population size (N), success states (K), and number of draws (n).

**Poisson** adjusts the rate parameter lambda (λ).

The chart updates instantly as you move sliders. Parameter values display next to each slider label.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the CDF Chart`,
      content: `The cumulative distribution function appears as a step chart with discrete jumps. The x-axis shows possible values (k), and the y-axis shows cumulative probability $F(k) = P(X \\leq k)$ ranging from 0 to 1. Each horizontal segment represents the probability that the random variable is less than or equal to that x-value. Vertical jumps occur at each possible outcome, with jump height equal to $P(X = k)$. The rightmost point always reaches probability 1.0, meaning all outcomes up to that point account for the entire probability mass.

Hover over any point to see exact values. The tooltip displays the k-value and corresponding cumulative probability to six decimal places.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Understanding Step Functions in Discrete CDFs`,
      content: `Discrete CDFs form step functions rather than smooth curves because probability concentrates at specific points. Between integer values, the CDF remains constant—if no outcome can occur at $k = 2.5$, then $F(2.5) = F(2)$. The function only increases at values where outcomes are possible. This creates the characteristic staircase pattern where each step's height equals the probability mass at that point. The step-after line type shows this clearly: the line extends horizontally from each point, then jumps vertically to the next level.

Compare this to continuous distributions, where CDFs rise smoothly without jumps.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Finding Specific Cumulative Probabilities`,
      content: `To find $P(X \\leq k)$ for any value k, locate k on the x-axis and read upward to the step function. The y-coordinate at that point gives the cumulative probability. For example, if the chart shows 0.842 at $k = 5$, then there's an 84.2% chance the random variable is 5 or less.

You can also calculate probabilities for ranges using the CDF values. To find $P(a < X \\leq b)$, subtract: $F(b) - F(a)$. Hover over both endpoints to get their cumulative probabilities, then compute the difference. The visualization makes these probability intervals visually apparent as vertical distances between steps.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Comparing Distribution Shapes`,
      content: `Switch between distribution tabs to compare how different probabilistic mechanisms create different CDF patterns. The **Discrete Uniform CDF** rises in equal-sized steps. The **Binomial CDF** typically shows an S-curve shape when p is near 0.5, with steeper increases near the center. The **Geometric** and **Negative Binomial CDFs** start low and rise gradually, with the rate depending on success probability. The **Hypergeometric CDF** resembles binomial but with constraints from finite population sampling. The **Poisson CDF** rises most rapidly near lambda, with shape determined by the rate parameter.

Experiment with parameters to see how they affect the rate of increase and spread of the CDF.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Interpreting Parameter Effects on CDF Shape`,
      content: `For **Binomial**, increasing n spreads the CDF over more values, while changing p shifts where the steepest rise occurs—left for small p, right for large p. For **Geometric**, smaller p values create gentler slopes as more trials are needed on average. The **Poisson** CDF becomes more spread out as lambda increases, with the steepest rise occurring near the lambda value. **Hypergeometric** sampling without replacement creates dependencies that compress or expand the CDF compared to binomial sampling with replacement.

Watch how the CDF evolves as you adjust parameters. Steeper rises indicate probability mass concentrated in a narrow range, while gradual rises show probability spread across many values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What is a Cumulative Distribution Function?`,
      content: `A cumulative distribution function (CDF) gives the probability that a random variable takes a value less than or equal to x: $F(x) = P(X \\leq x)$. For discrete distributions, this is computed by summing the **probability mass function** (PMF) values: $F(k) = \\sum_{i \\leq k} P(X = i)$. The CDF always starts at 0 and increases to 1 as x increases, never decreasing. It answers questions like "What's the chance of getting 3 or fewer successes?" rather than "What's the chance of exactly 3 successes?"

For comprehensive theory on cumulative distribution functions including mathematical properties and applications, see **cumulative distribution function theory page**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `CDF vs PMF for Discrete Distributions`,
      content: `The **probability mass function** (PMF) gives the probability of exactly one value: $P(X = k)$. The **cumulative distribution function** (CDF) sums these probabilities up to and including k: $F(k) = \\sum_{i \\leq k} P(X = i)$. The PMF appears as individual spikes or bars showing probability at each point. The CDF shows accumulated probability as a step function. You can recover the PMF from the CDF by taking differences: $P(X = k) = F(k) - F(k-1)$, which equals the height of each step.

Use PMF when asking about exact values. Use CDF when asking about ranges or "at most" probabilities.

For detailed comparison of probability functions including when to use each, see **probability mass function vs cumulative distribution function**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Probability Tools and Concepts`,
      content: `**Discrete Distribution Calculators** - Compute exact probabilities, means, and variances for all six distributions with parameter input.

**PMF Visualizers** - Display probability mass functions as bar charts showing individual probabilities rather than cumulative values.

**Continuous Distribution CDFs** - Explore cumulative distribution functions for continuous random variables where CDFs are smooth curves rather than step functions.

**Probability Mass Function Theory** - Understand the mathematical foundation of discrete probability functions and their properties.

**Random Variables** - Learn the fundamental concept underlying all probability distributions and how they map outcomes to numerical values.

**Discrete Distributions Overview** - Comprehensive guide to all discrete probability distributions including when to use each type.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a cumulative distribution function (CDF)?",
      answer: "A cumulative distribution function (CDF) is a function that gives the probability that a random variable X takes a value less than or equal to x. For discrete distributions, it is calculated by summing the probability mass function values up to and including x: F(x) = P(X ≤ x). The CDF always ranges from 0 to 1 and never decreases as x increases."
    },
    obj2: {
      question: "How do you read a discrete CDF chart?",
      answer: "Find the x-value of interest on the horizontal axis and read upward to where it meets the step function. The y-coordinate at that point gives the cumulative probability P(X ≤ x). The step function has horizontal segments between possible values and vertical jumps at each outcome. Each jump height equals the probability mass at that point."
    },
    obj3: {
      question: "What is the difference between CDF and PMF?",
      answer: "The probability mass function (PMF) gives the probability of exactly one value: P(X = k). The cumulative distribution function (CDF) sums all PMF values up to and including k: F(k) = sum of P(X = i) for all i ≤ k. PMF shows individual probabilities, while CDF shows accumulated probability. You can find PMF values from the CDF by computing differences between consecutive steps."
    },
    obj4: {
      question: "Why do discrete CDFs have step patterns?",
      answer: "Discrete CDFs form step functions because probability only exists at specific countable values. Between these values, no outcomes are possible, so the CDF remains constant. The function only increases at points where the random variable can take values, creating jumps. Each jump height equals the probability mass at that point, and the horizontal segments show regions with no probability mass."
    },
    obj5: {
      question: "When should you use CDF instead of PMF?",
      answer: "Use CDF when you need to find probabilities for ranges or cumulative questions like 'at most k successes' or 'no more than x events.' Use PMF when you need the probability of exactly one specific value. CDF is particularly useful for computing interval probabilities using subtraction: P(a < X ≤ b) = F(b) - F(a)."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Discrete Distributions CDF Visualizer",
      "description": "Interactive cumulative distribution function visualizer for six discrete probability distributions with adjustable parameters and step-by-step probability calculations.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/cdf/discrete",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive CDF visualization for six discrete distributions",
        "Adjustable parameter sliders with instant chart updates",
        "Step-after line chart showing cumulative probability functions",
        "Tooltip display with exact cumulative probability values to six decimals",
        "Tab-based distribution switching between uniform, binomial, geometric, negative binomial, hypergeometric, and Poisson",
        "Mathematical formula explanations for each distribution's CDF",
        "Responsive design for desktop and mobile viewing"
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
          "name": "Discrete Distributions CDF",
          "item": "https://www.learnmathclass.com/probability/visual-tools/cdf/discrete"
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
        title: "Discrete CDF Visualizer | Interactive Cumulative Distribution",
        description: "Visualize cumulative distribution functions for discrete probability distributions. Adjust parameters, explore step functions, calculate probabilities interactively.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/cdf/discrete",
        name: "Discrete Distributions CDF Visualizer"
      },
    }
  }
}

export default function CDFDiscreteVisualizerPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'-70px'}}>Cumulative Distribution Function(CDF) of Discrete Distributions</h1>
      <div style={{transform:'scale(0.8)'}}>
        <DiscreteDistributionsCDF/>
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