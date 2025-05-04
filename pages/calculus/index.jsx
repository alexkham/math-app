// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../pages.css'
// import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
// import calculusFormulasList from '@/app/api/db/formulas/calculus/calculusFormulasList';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

// import Sections from '@/app/components/page-components/section/Sections';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';
// import NavButton from '@/app/components/button-group/NavButton';

// export default function CalculusPage() {
//   const keyWords=['calculus','learn calculus','calculus formulas']
  

//   const calculusSections = [
   
//     {
//       id: 'formulas',
//       title: 'Calculus Formulas',
//       content:"Explore ",
//       content: [
//   //       `Explore Calculus formulas with explanations and examples
//   //         And here's a more complex integral:
//   // $$\\int_{0}^{\\pi} \\sin(x) dx = [-\\cos(x)]_{0}^{\\pi} = 2$$
  
//   //  Here's a visual representation of a function:
//   //  <svg viewBox="0 0 100 100" width="200" height="200">
//   // <path d="M10 90 Q 52.5 10, 95 90" fill="none" stroke="black"/>
//   //   <line x1="10" y1="10" x2="10" y2="90" stroke="black"/>
//   //   <line x1="10" y1="90" x2="95" y2="90" stroke="black"/>
//   //  </svg>`,
//   //       " ",
//         { 
//           content: '<div style="background-color:#ebf5ff;height:250px;padding:20px;">Visit Calculus formulas page.</div>',
//           layout: 'horizontal', 
//           position: 'left',
//           width: 1.5 
//         },
//         // { 
//         //   content: '<div style="background-color: red;">Left side text</div>',
//         //   layout: 'horizontal', 
//         //   position: 'left',
//         //   width: 1 
//         // },
      
//           { 
//             content:   <VerticalScrollingFormulaWidget 
//             key={"formula-widget"}
//              formulaData={calculusFormulasList}
//              moreFormulasLink='/calculus/formulas'
//             //  title='See them all'
//               />, 
//             layout: 'horizontal', 
//             position: 'right',
//             width: 2 
//           },
         
   
//     ]
      
//     },
//   ];

//   const introContent = {
//     id: "intro",
//     title: "Introduction to Calculus",
//     content:`Calculus is a section of mathematics dealing with continuous change. It encompasses several fundamental concepts: **limits**, **derivatives**, **integrals**, and **infinite series**. These ideas work together to create a powerful mathematical framework.

// The core components of calculus include:
//  **Limits** - examining the behavior of functions as they approach specific values
//  **Differential calculus** - studying rates of change through derivatives
//  **Integral calculus** - analyzing accumulation and total change
//  **Infinite series** - representing functions as sums of infinite terms

// Differential calculus allows us to find instantaneous rates of change and optimize functions, while integral calculus provides tools for calculating areas, volumes, and accumulated quantities. The connection between these two branches, established by the **Fundamental Theorem of Calculus**, creates a unified system for analyzing continuous change.

// Applications of calculus extend throughout science, engineering, and economics. In physics, it models motion and energy; in engineering, it optimizes designs and processes; in economics, it analyzes rates of growth and market behavior. The subject's precise mathematical framework makes it essential for understanding and describing natural phenomena.`
// //     content: `Calculus is a fundamental branch of mathematics that studies continuous change. At its core, it consists of two complementary ideas: differential calculus and integral calculus. Differential calculus examines instantaneous rates of change through derivatives, while integral calculus focuses on the accumulation of quantities over time or space.

// // The power of calculus lies in its ability to analyze functions through limits, enabling us to understand both infinitesimally small changes and their cumulative effects. This makes it an essential tool across various fields - from physics and engineering to economics and data science.

// // Key concepts include limits, continuity, differentiation, and integration. Through these tools, calculus provides methods to optimize functions, calculate areas and volumes, and model real-world phenomena described by continuous functions. The subject builds upon algebra and geometry to create a unified framework for studying dynamic systems and solving complex problems.

// // For students pursuing STEM fields, calculus serves as a gateway to advanced mathematics and its applications. Even beyond technical fields, the logical thinking and problem-solving approaches developed through studying calculus remain valuable across many disciplines.`

//   //   content: `Welcome to Calculus! This course will explore the fundamental concepts that revolutionized mathematics.
  
//   // Here's what we'll cover:
//   // - Limits and Continuity
//   // - Derivatives and their applications
//   // - Integration techniques
  
//   // Let's start with a simple derivative example: $\\frac{d}{dx}(x^2) = 2x$
  
//   // And here's a more complex integral:
//   // $$\\int_{0}^{\\pi} \\sin(x) dx = [-\\cos(x)]_{0}^{\\pi} = 2$$
  
//   // Here's a visual representation of a function:
//   // <svg viewBox="0 0 100 100" width="200" height="200">
//   //   <path d="M10 90 Q 52.5 10, 95 90" fill="none" stroke="black"/>
//   //   <line x1="10" y1="10" x2="10" y2="90" stroke="black"/>
//   //   <line x1="10" y1="90" x2="95" y2="90" stroke="black"/>
//   // </svg>
  
//   // For more resources, check out our [supplementary materials](https://example.com).
  
//   // Some text with **bold** emphasis and an HTML example:
//   // <div style="color: blue;">Special note about derivatives</div>`
//   };
  
  
  

//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='65px' 
//       sidebarWidth='45px'
//       panelWidth='200px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
   
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Calculus</h1>
//     <SectionTableOfContents sections={calculusSections}/>
//     <br/>
//     <IntroSection 
//   id={introContent.id}
//   title={introContent.title}
//   content={introContent.content}
//   backgroundColor="#f2f2f2"
//   textColor="#34383c"
// />
   
//     <Sections  sections={calculusSections}/>
   
  
//     <br/>
//     {/* <div style={{marginLeft:'300px'}}>
//     <NavButton link="intro"  />
//     </div> */}
//     <br/>
   
//     <br/>
//     <ScrollUpButton/>
    


    
//     </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Head from 'next/head'
import { createContentHtml } from '@/app/utils/utils-functions'

export async function getStaticProps() {
  const { default: calculusFormulasList } = await import('@/app/api/db/formulas/calculus/calculusFormulasList')
  const { default: calculusTermsList } = await import('@/app/api/db/definitions/calculus/calculusDefinitions')
  
  // Static content that can be used for SEO
  const sectionContent = {
    formulas: {
      leftContentHtml: createContentHtml({ 
        description: 'The Calculus Formulas page features fundamental laws and theorems across Limits, Derivatives, Integrals, and Integration Techniques. Each entry includes step-by-step explanations, key variables, worked examples, and real-world applications - from basic limit laws and differentiation rules to advanced integration methods and improper integrals.',
        // link: '/calculus/definitions',
        // linkText: 'View All Definitions',
        height:'350px',
        backgroundColor:'#fdfdea',
      }),
      layout: 'horizontal',
      title: 'Calculus Formulas',
    },
     definitions: {
          title: 'Calculus Terms and Definitions',
          description: 'Browse Calculus terminology including main concepts and their definitions with examples',
          rightContentHtml: createContentHtml({ 
            description: 'The Calculus Terms and Definitions page provides a comprehensive collection of essential calculus concepts organized across multiple categories including Functions, Differentiation, Integration, Geometry, Motion and Dynamics, and Vector Calculus. From fundamental concepts like derivatives and integrals to advanced topics in vector analysis and differential equations, each term is clearly defined to support understanding of calculus principles and their applications.',
            // link: '/calculus/definitions',
            // linkText: 'View All Definitions',
            height:'350px',
            backgroundColor:'#fdfdea',
          }),
          layout: 'horizontal'
        },
        symbols:{
          title:'Calculus Symbols Reference',
          description:`Our [Calculus Symbols page](!/math-symbols/calculus) offers a detailed catalog of notation used in differential and integral calculus. This comprehensive resource organizes symbols by their mathematical functions to help students and professionals navigate the language of calculus.
The reference covers essential notation across categories including differentiation (f'(x), df/dx, ∇f), integration (∫, ∬, ∮), limits (limₓ→c), and infinite series (∑). Advanced topics include vector calculus notation for divergence and curl, differential operators like the Laplacian (∇²f), and specialized notation for curvature and differential equations.
Each symbol is presented with its proper LaTeX representation and a concise explanation of its meaning, making this an essential resource for anyone working with calculus concepts in academic or professional settings.`,
          link:'/math-symbols/calculus'
        }
  }

  const introContent = {
    id: "intro",
    title: "Introduction to Calculus",
    content: `Calculus is a section of mathematics dealing with continuous change. It encompasses several fundamental concepts: **limits**, **derivatives**, **integrals**, and **infinite series**. These ideas work together to create a powerful mathematical framework.

The core components of calculus include:
 **Limits** - examining the behavior of functions as they approach specific values
 **Differential calculus** - studying rates of change through derivatives
 **Integral calculus** - analyzing accumulation and total change
 **Infinite series** - representing functions as sums of infinite terms

Differential calculus allows us to find instantaneous rates of change and optimize functions, while integral calculus provides tools for calculating areas, volumes, and accumulated quantities. The connection between these two branches, established by the **Fundamental Theorem of Calculus**, creates a unified system for analyzing continuous change.

Applications of calculus extend throughout science, engineering, and economics. In physics, it models motion and energy; in engineering, it optimizes designs and processes; in economics, it analyzes rates of growth and market behavior. The subject's precise mathematical framework makes it essential for understanding and describing natural phenomena.`
  }

  const keyWords = [
    'calculus',
    'learn calculus',
    'calculus formulas',
    'differential calculus',
    'integral calculus',
    'calculus fundamentals',
    'limits and derivatives',
    'calculus concepts'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/calculus'
  const lastModified = new Date().toISOString()
  
  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      calculusFormulasList,
      calculusTermsList
    }
  }
}

export default function CalculusPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  calculusFormulasList,
  calculusTermsList
}) {
  // Reconstruct sections with React components
  const calculusSections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      link:'/calculus/formulas',
      content: [
        { 
          content: sectionContent.formulas.leftContentHtml,
          layout: 'horizontal', 
          position: 'left',
          width: 1.5 
        },
        { 
          content: <VerticalScrollingFormulaWidget 
            key="formula-widget"
            formulaData={calculusFormulasList}
            moreFormulasLink='/calculus/formulas'
          />, 
          layout: 'horizontal', 
          position: 'right',
          width: 2 
        }
      ]
    },
    {
      id: 'definitions',
      title: sectionContent.definitions.title,
      link:'/calculus/definitions',
      content: [
        { 
          content: <VerticalScrollingFormulaWidget 
            key="definitions-widget"
            formulaData={calculusTermsList}
            moreFormulasLink='/calculus/definitions'
            type='definition'
          />, 
          layout: 'horizontal', 
          position: 'left',
          width: 2
        },
        { 
          content: sectionContent.definitions.rightContentHtml,
          layout: 'horizontal', 
          position: 'right',
          width: 1.5 
        }
      ]
    },
    {
      id: 'symbols',
      title: sectionContent.symbols.title,
      link:sectionContent.symbols.link,
      content: [
        {
          content:sectionContent.symbols.description,
          layout: 'horizontal',
          position: 'center', // or 'left' if you prefer
          width: 8 // full width
        }
       
      ]
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Calculus - Learn Mathematics",
    "description": "Comprehensive guide to calculus including fundamental concepts of limits, derivatives, integrals, and infinite series. Learn calculus with clear explanations and examples.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Calculus",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Calculus - Formulas & Core Concepts | Learn Math Class"
  const pageDescription = "Master calculus with our comprehensive guide covering limits, derivatives, integrals, and infinite series. Perfect for students and educators."

  return (
    <>
      <Head>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keyWords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Learn Math Class" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:modified_time" content={lastModified} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <GenericNavbar/>
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
     
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
          Calculus
        </h1>
        <SectionTableOfContents sections={calculusSections}
         showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
         secondaryNavTitle="More in this Section" />
        <br/>
        <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        />
        <Sections sections={calculusSections}/>
        <br/>
        <br/>
        <br/>
        <ScrollUpButton/>
      </main>
    </>
  )
}