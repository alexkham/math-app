// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // import React from 'react'
// // import '../pages.css'
// // import Head from 'next/head'


// // export async function getStaticProps(){

// //   const keyWords=['','','','','']

// //   // •

  
// // // <hr style="border-width:1px;"></hr>

// // // <hr style="color:blue;" />

// // // <hr style="border-color:#3498db; border-width:1px;" />



// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@




// //     const sectionsContent={

// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }


// //   const introContent = {
// //   id: "intro",
// //   title: "",
// //   content: ``
// // }




// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Probability Function | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/probability/visual-tools/probability-function",
// //          name: "name"
// //       },
        
// //        }
// //     }
// //    }

// // export default function ProbabilityFunctionPage({seoData,sectionsContent , introContent}) {

    
// //   const genericSections=[
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //         ]
// //     },
// //     {
// //         id:'13',
// //         title:sectionsContent.obj13.title,
// //         link:sectionsContent.obj13.link,
// //         content:[
// //           sectionsContent.obj13.content,
// //         ]
// //     },
// //     {
// //         id:'14',
// //         title:sectionsContent.obj14.title,
// //         link:sectionsContent.obj14.link,
// //         content:[
// //           sectionsContent.obj14.content,
// //         ]
// //     },
// //     {
// //         id:'15',
// //         title:sectionsContent.obj15.title,
// //         link:sectionsContent.obj15.link,
// //         content:[
// //           sectionsContent.obj15.content,
// //         ]
// //     },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
    
// // ]

// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Function</h1>
// //    <br/>
// //    <br/>
// //    <SectionTableOfContents sections={genericSections}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         />
// //    <br/>
// //    <br/>
// //    <Sections sections={genericSections}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


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
// import Link from 'next/link'


// export async function getStaticProps(){

//  const keyWords = [
//   "probability function visualization",
//   "probability mass function",
//   "probability density function",
//   "PMF calculator",
//   "PDF calculator",
//   "discrete probability distribution",
//   "continuous probability distribution",
//   "interactive probability tools",
//   "probability function examples",
//   "visualize probability distributions",
//   "probability function calculator",
//   "statistical distribution tools",
//   "probability function explained",
//   "distribution visualization"
// ];

//     const sectionsContent={

//     obj1:{
//       title:`What is a Probability Function?`,
//       content:`A probability function assigns probabilities to possible outcomes of a random variable. For discrete random variables, it's called a probability mass function (PMF). For continuous random variables, it's a probability density function (PDF).`,
//       before:``,
//       after:``,
//     },
//     obj2:{
//       title:`Discrete vs Continuous`,
//       content:`Discrete probability functions assign probabilities to countable outcomes (like coin flips or dice rolls). Continuous functions assign probabilities over intervals of uncountable values (like heights or temperatures).`,
//       before:``,
//       after:``,
//     },
  
//     obj3:{
//       title:`Interactive Visualization Tools`,
//       content:`Our interactive tools let you explore both discrete and continuous probability functions. Adjust parameters, see distributions change in real-time, and understand how different probability functions behave.`,
//       before:``,
//       after:``,
//     },
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Interactive Probability Function Tools",
//   content: `Explore probability functions through interactive visualizations. Choose between discrete distributions (PMF) or continuous distributions (PDF) to see how probability functions work.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Probability Function Visualizations - Interactive PMF & PDF Tools | Learn Math Class",
//         description: "Interactive probability function tools for discrete (PMF) and continuous (PDF) distributions. Visualize and calculate probabilities with step-by-step explanations.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/probability-function",
//          name: "Probability Function Visualizations"
//       },
        
//        }
//     }
//    }

// export default function ProbabilityFunctionLanding({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'What is a Probability Function?',
//         link:'#what-is-probability-function',
//         content: sectionsContent.obj1.content
//     },
//     {
//         id:'2',
//         title:'Discrete vs Continuous',
//         link:'#discrete-vs-continuous',
//         content: sectionsContent.obj2.content
//     },
//     {
//         id:'3',
//         title:'Interactive Visualization Tools',
//         link:'#interactive-tools',
//         content: sectionsContent.obj3.content
//     }
// ]

// const cardStyles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//     margin: '40px 0',
//     flexWrap: 'wrap',
//     maxWidth: '1200px',
//     marginLeft: 'auto',
//     marginRight: 'auto'
//   },
//   card: {
//     border: '2px solid #e2e8f0',
//     borderRadius: '8px',
//     padding: '30px',
//     width: '280px',
//     textAlign: 'center',
//     backgroundColor: 'white',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     color: 'inherit'
//   },
//   title: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#2563eb',
//     marginBottom: '15px'
//   },
//   description: {
//     fontSize: '16px',
//     color: '#4b5563',
//     lineHeight: '1.5'
//   }
// }

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
//    <GenericNavbar/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Function Visualizations</h1>
//    <br/>
//    <br/>
   
//    <div style={cardStyles.container}>
//      <Link href="/probability/visual-tools/probability-function/discrete" style={cardStyles.card}>
//        <div style={cardStyles.title}>Discrete Distributions</div>
//        <div style={cardStyles.description}>
//          Explore probability mass functions (PMF) for countable outcomes like Binomial, Poisson, and Geometric distributions.
//        </div>
//      </Link>
     
//      <Link href="/probability/visual-tools/probability-function/continuous" style={cardStyles.card}>
//        <div style={cardStyles.title}>Continuous Distributions</div>
//        <div style={cardStyles.description}>
//          Visualize probability density functions (PDF) for continuous variables like Normal, Exponential, and Uniform distributions.
//        </div>
//      </Link>
//    </div>
   
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           textColor="#06357a"
//         /> */}
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
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
import Link from 'next/link'


export async function getStaticProps(){

  const keyWords=[
    'probability function',
    'probability mass function',
    'probability density function',
    'PMF calculator',
    'PDF calculator',
    'discrete probability',
    'continuous probability',
    'probability distribution',
    'interactive probability',
    'probability visualization',
    'distribution calculator',
    'probability tools',
    'PMF vs PDF',
    'probability function examples',
    'statistical distributions'
  ]

    const sectionsContent={

    obj1:{
      title:`What are Probability Functions?`,
      content:`[Probability functions](!/probability/probability-function) assign probabilities to outcomes of [random variables](!/probability/random-variables). 
      For [discrete random variables](!/probability/random-variables#types) , the probability mass function (PMF) gives the probability of each specific value. 
      For [continuous random variables](!/probability/random-variables#types), the probability density function (PDF) describes relative likelihood over intervals.`,
      before:``,
      after:``,
      link:'/probability/probability-function',
  
  
    },
    obj2:{
      title:`Discrete vs Continuous Distributions`,
      content:`[Discrete distributions](!/probability/distributions/discrete) apply to countable outcomes like coin flips, dice rolls, or customer counts. 
      The PMF gives exact probabilities for specific values. 
      [Continuous distributions](!/probability/distributions/continuous) describe measurable quantities like height, weight, or time. 
      The PDF requires integration over intervals to calculate probabilities.`,
      before:``,
      after:``,
      link:'/probability/distributions',
  
    },
  
    obj3:{
  
      title:`Interactive Visualization Tools`,
      content:`Our interactive tools let you explore probability functions through real-time visualization. Adjust distribution parameters and instantly see how the probability function changes. Compare discrete and continuous distributions to understand their fundamental differences.`,
      before:``,
      after:``,
      link:'/probability/visual-tools',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Interactive Probability Function Visualizers",
  content: `Explore probability functions through interactive tools. Select discrete distributions to work with probability mass functions (PMF) or continuous distributions for probability density functions (PDF).`
}

  const faqQuestions = {
    obj1: {
      question: "What is the difference between PMF and PDF?",
      answer: "PMF (probability mass function) applies to discrete random variables with countable outcomes and gives exact probabilities for specific values. PDF (probability density function) applies to continuous random variables and gives density values, requiring integration over intervals to calculate probabilities."
    },
    obj2: {
      question: "When should I use discrete probability distributions?",
      answer: "Use discrete probability distributions when outcomes are countable, such as number of successes, number of events, or any whole number counts. Examples include coin flips, dice rolls, customer arrivals, or defect counts."
    },
    obj3: {
      question: "When should I use continuous probability distributions?",
      answer: "Use continuous probability distributions for measurements that can take any value in an interval, such as height, weight, time, temperature, or distance. These variables have infinite possible values within their range."
    },
    obj4: {
      question: "How do probability functions assign probabilities?",
      answer: "For discrete variables, the PMF assigns a probability to each specific value, with all probabilities summing to 1. For continuous variables, the PDF assigns density, and probabilities are found by integrating the PDF over intervals."
    },
    obj5: {
      question: "What are the most common probability distributions?",
      answer: "Common discrete distributions include Binomial, Poisson, and Geometric. Common continuous distributions include Normal (Gaussian), Exponential, and Uniform. The Normal distribution is the most widely used in statistics."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Probability Functions Visualizer",
      "description": "Interactive probability function tools for discrete (PMF) and continuous (PDF) distributions. Visualize Binomial, Poisson, Normal, Exponential and more with real-time calculations.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/probability-function",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive discrete probability distributions with PMF visualization",
        "Interactive continuous probability distributions with PDF and CDF visualization",
        "Real-time parameter adjustment for all distributions",
        "Binomial, Poisson, Geometric, Negative Binomial, Hypergeometric distributions",
        "Normal, Exponential, and Uniform distributions",
        "Detailed mathematical explanations with formulas",
        "Educational tool for learning probability theory"
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
          "name": "Probability Functions",
          "item": "https://www.learnmathclass.com/probability/visual-tools/probability-function"
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


   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Probability Functions - Interactive PMF & PDF Visualizers | Learn Math Class",
        description: "Interactive probability function tools for discrete (PMF) and continuous (PDF) distributions. Visualize Binomial, Poisson, Normal, Exponential and more with real-time calculations.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/probability-function",
         name: "Probability Functions"
      },
        
       }
    }
   }

export default function ProbabilityFunctionPage({seoData,sectionsContent , introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    }
]

const cardStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '40px 0',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    padding: '30px',
    width: '280px',
    textAlign: 'center',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: '15px'
  },
  description: {
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.5'
  }
}

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
      __html: JSON.stringify(schemas.webApplication)
    }}
  />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Functions</h1>
   <br/>
   <br/>
   
   <div style={cardStyles.container}>
     <Link href="/probability/visual-tools/probability-function/discrete" style={cardStyles.card}>
       <div style={cardStyles.title}>Discrete Distributions</div>
       <div style={cardStyles.description}>
         Explore probability mass functions (PMF) for Binomial, Poisson, Geometric, and other discrete distributions.
       </div>
     </Link>
     
     <Link href="/probability/visual-tools/probability-function/continuous" style={cardStyles.card}>
       <div style={cardStyles.title}>Continuous Distributions</div>
       <div style={cardStyles.description}>
         Visualize probability density functions (PDF) for Normal, Exponential, Uniform, and other continuous distributions.
       </div>
     </Link>
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