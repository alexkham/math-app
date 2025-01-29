// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import React from 'react';
// // import '../pages.css'
// // import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
// // import logicFormulasList from '@/app/api/db/formulas/logic/logicFormulasList';
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// // import logicTermsList from '@/app/api/db/definitions/logic/logicDefinitions';
// // import Sections from '@/app/components/page-components/section/Sections';
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection';

// // export default function LogicPage() {
  

// //   const logicSections = [
   
// //     {
// //       id: 'formulas',
// //       title: 'Mathematical Logic Formulas',
// //       content:"Explore ",
// //       content: [
// //         'Explore Mathematical Logic formulas with explanations and examples',
// //         " ",
// //         <VerticalScrollingFormulaWidget 
// //         key={"formula-widget2"}
// //          formulaData={logicFormulasList}
// //          moreFormulasLink='/logic/formulas'
// //         //  title='See them all'
// //           />,
   
// //     ]
      
// //     },
// //     {
// //       id: 'definitions',
// //       title: 'Logic Terms and Definitions',
// //       content:[

// //         <VerticalScrollingFormulaWidget 
// //         key={"definitions"}
// //          formulaData={logicTermsList}
// //          moreFormulasLink='/logic/definitions'
// //          type='definition'
// //         //  title='See them all'
// //           />,

// //       ]
// //     }
// //   ];
  
// //   const introContent = {
// //     id: "intro",
// //     title: "Introduction to Mathematical Logic Section",
// //     content:`
// //     Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of **propositional logic**, where statements are combined using logical operators like **and**, **or**, and **not**, to form compound statements and evaluate their truth.

// // A deeper layer is **predicate logic**, which extends propositional logic by introducing quantifiers like **for all** and **there exists**, allowing reasoning about objects and their properties. Central to this is the concept of **logical validity**, which examines whether conclusions follow from premises regardless of specific interpretations.

// // Mathematical logic also explores **formal systems**, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include **set theory**, the foundation of mathematics, and **model theory**, which studies the relationship between formal languages and their interpretations.

// // Another significant area is **computability theory**, which asks fundamental questions about what problems can be solved by algorithms, and **proof theory**, which investigates the nature and structure of mathematical proofs.

// // Applications of mathematical logic are vast, influencing fields like **computer science**, where it underpins algorithms and programming languages, and **philosophy**, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.
// //     `

// //   };
  

// //   return (
// //     <>
// //     <GenericNavbar/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <OperaSidebar 
// //       side='right'
// //       topOffset='65px' 
// //       sidebarWidth='45px'
// //       panelWidth='200px'
      
// //       iconColor='white'
// //       panelBackgroundColor='#f2f2f2'/> 
// //     <Breadcrumb/>
   
// //     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Mathematical Logic</h1>
// //     <SectionTableOfContents sections={logicSections}/>
// //     <br/>
// // <br/>
// // <br/>
// //     <IntroSection 
// //   id={introContent.id}
// //   title={introContent.title}
// //   content={introContent.content}
// //   backgroundColor="#f2f2f2"
// //   textColor="#06357a"
// // />

// //     <Sections  sections={logicSections}/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <ScrollUpButton/>
    


    
// //     </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../pages.css'
// import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Sections from '@/app/components/page-components/section/Sections'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Head from 'next/head'

// export async function getStaticProps() {
//   const { default: logicFormulasList } = await import('@/app/api/db/formulas/logic/logicFormulasList')
//   const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')
  
//   return {
//     props: {
//       logicFormulasList,
//       logicTermsList
//     }
//   }
// }

// export default function LogicPage({ logicFormulasList, logicTermsList }) {
//   const logicSections = [
//     {
//       id: 'formulas',
//       title: 'Mathematical Logic Formulas',
//       content: [
//         'Explore Mathematical Logic formulas with explanations and examples',
//         " ",
//         <VerticalScrollingFormulaWidget 
//           key={"formula-widget2"}
//           formulaData={logicFormulasList}
//           moreFormulasLink='/logic/formulas'
//         />
//       ]
//     },
//     {
//       id: 'definitions',
//       title: 'Logic Terms and Definitions',
//       content:[
//         <VerticalScrollingFormulaWidget 
//           key={"definitions"}
//           formulaData={logicTermsList}
//           moreFormulasLink='/logic/definitions'
//           type='definition'
//         />
//       ]
//     }
//   ]
  
//   const introContent = {
//     id: "intro",
//     title: "Introduction to Mathematical Logic Section",
//     content: `
//     Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of **propositional logic**, where statements are combined using logical operators like **and**, **or**, and **not**, to form compound statements and evaluate their truth.

// A deeper layer is **predicate logic**, which extends propositional logic by introducing quantifiers like **for all** and **there exists**, allowing reasoning about objects and their properties. Central to this is the concept of **logical validity**, which examines whether conclusions follow from premises regardless of specific interpretations.

// Mathematical logic also explores **formal systems**, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include **set theory**, the foundation of mathematics, and **model theory**, which studies the relationship between formal languages and their interpretations.

// Another significant area is **computability theory**, which asks fundamental questions about what problems can be solved by algorithms, and **proof theory**, which investigates the nature and structure of mathematical proofs.

// Applications of mathematical logic are vast, influencing fields like **computer science**, where it underpins algorithms and programming languages, and **philosophy**, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.
//     `
//   }

//   return (
//     <>
//       <Head>
//         <title>Mathematical Logic | Learn Math Class</title>
//         <meta name="description" content="Master mathematical logic with comprehensive guides covering propositional logic, predicate logic, formal systems, and proof theory." />
//         <meta name="keywords" content="mathematical logic, propositional logic, predicate logic, formal systems, logic formulas, logic definitions" />
//         <link rel="canonical" href="https://www.learnmathclass.com/logic" />
//       </Head>

//       <GenericNavbar/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//         side='right'
//         topOffset='65px' 
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       /> 
//       <Breadcrumb/>
     
//       <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Mathematical Logic</h1>
//       <SectionTableOfContents sections={logicSections}/>
//       <br/>
//       <br/>
//       <br/>
//       <IntroSection 
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor="#f2f2f2"
//         textColor="#06357a"
//       />

//       <Sections sections={logicSections}/>
//       <br/>
//       <br/>
//       <br/>
//       <ScrollUpButton/>
//     </>
//   )
// }

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../pages.css'
// import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Sections from '@/app/components/page-components/section/Sections'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Head from 'next/head'
// import { createContentHtml } from '@/app/utils/utils-functions'

// export async function getStaticProps() {
//  const { default: logicFormulasList } = await import('@/app/api/db/formulas/logic/logicFormulasList')
//  const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')

//  return {
//    props: {
//      logicFormulasList,
//      logicTermsList
//    }
//  }
// }

// export default function LogicPage({ logicFormulasList, logicTermsList }) {
//  const logicSections = [
//    {
//      id: 'formulas',
//      title: 'Mathematical Logic Formulas',
//      content: [
//        {
//          content: createContentHtml({ 
//            description: 'The Mathematical Logic Formulas page presents essential logical laws, rules, and principles organized in five main categories: Logical Equivalences, De Morgans Laws, Logical Laws, Quantifier Rules, and Inference Rules. It covers fundamental concepts from basic logical operations like conjunction and disjunction to advanced topics like quantifiers and inference rules. Each formula includes detailed explanations, symbolic notation, real-world examples, and practical applications.',
//            link: '/logic/formulas',
//            linkText: 'View All Formulas',
//            height:'350px',
//            backgroundColor:'#fdfdea',
//          }),
//          layout: 'horizontal',
//          position: 'left',
//          width: 1.5
//        },
//        {
//          content: <VerticalScrollingFormulaWidget 
//            key="formula-widget"
//            formulaData={logicFormulasList}
//            moreFormulasLink='/logic/formulas'
//          />,
//          layout: 'horizontal',
//          position: 'right',
//          width: 2
//        }
//      ]
//    },
//    {
//      id: 'definitions',
//      title: 'Logic Terms and Definitions',
//      content: [
//        {
//          content: <VerticalScrollingFormulaWidget 
//            key="definitions-widget"
//            formulaData={logicTermsList}
//            moreFormulasLink='/logic/definitions'
//            type='definition'
//          />,
//          layout: 'horizontal',
//          position: 'left',
//          width: 2
//        },
//        {
//          content: createContentHtml({
//            description: 'Browse through comprehensive Logic terminology and definitions',
//            link: '/logic/definitions',
//            linkText: 'View All Definitions',
//            height:'350px',
//            backgroundColor:'#fdfdea',
//          }),
//          layout: 'horizontal',
//          position: 'right',
//          width: 1.5
//        }
//      ]
//    }
//  ]

//  const introContent = {
//    id: "intro",
//    title: "Introduction to Mathematical Logic Section",
//    content: `Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of **propositional logic**, where statements are combined using logical operators like **and**, **or**, and **not**, to form compound statements and evaluate their truth.

// A deeper layer is **predicate logic**, which extends propositional logic by introducing quantifiers like **for all** and **there exists**, allowing reasoning about objects and their properties. Central to this is the concept of **logical validity**, which examines whether conclusions follow from premises regardless of specific interpretations.

// Mathematical logic also explores **formal systems**, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include **set theory**, the foundation of mathematics, and **model theory**, which studies the relationship between formal languages and their interpretations.

// Another significant area is **computability theory**, which asks fundamental questions about what problems can be solved by algorithms, and **proof theory**, which investigates the nature and structure of mathematical proofs.

// Applications of mathematical logic are vast, influencing fields like **computer science**, where it underpins algorithms and programming languages, and **philosophy**, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.`
//  }

//  return (
//    <>
//      <Head>
//        <title>Mathematical Logic | Learn Math Class</title>
//        <meta name="description" content="Master mathematical logic with comprehensive guides covering propositional logic, predicate logic, formal systems, and proof theory." />
//        <meta name="keywords" content="mathematical logic, propositional logic, predicate logic, formal systems, logic formulas, logic definitions" />
//        <link rel="canonical" href="https://www.learnmathclass.com/logic" />
//      </Head>

//      <GenericNavbar/>
//      <br/>
//      <br/>
//      <br/>
//      <br/>
//      <OperaSidebar 
//        side='right'
//        topOffset='65px' 
//        sidebarWidth='45px'
//        panelWidth='200px'
//        iconColor='white'
//        panelBackgroundColor='#f2f2f2'
//      /> 
//      <Breadcrumb/>
    
//      <main>
//        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
//          Mathematical Logic
//        </h1>
//        <SectionTableOfContents sections={logicSections}/>
//        <br/>
//        <br/>
//        <br/>
//        <IntroSection 
//          id={introContent.id}
//          title={introContent.title}
//          content={introContent.content}
//          backgroundColor="#f2f2f2"
//          textColor="#06357a"
//        />
//        <Sections sections={logicSections}/>
//        <br/>
//        <br/>
//        <br/>
//        <ScrollUpButton/>
//      </main>
//    </>
//  )
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
 const { default: logicFormulasList } = await import('@/app/api/db/formulas/logic/logicFormulasList')
 const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')

 const sectionContent = {
   formulas: {
     title: 'Mathematical Logic Formulas',
     description: 'Visit Mathematical Logic formulas page',
     leftContentHtml: createContentHtml({
       description: 'The Mathematical Logic Formulas page presents essential logical laws, rules, and principles organized in five main categories: Logical Equivalences, De Morgans Laws, Logical Laws, Quantifier Rules, and Inference Rules. It covers fundamental concepts from basic logical operations like conjunction and disjunction to advanced topics like quantifiers and inference rules. Each formula includes detailed explanations, symbolic notation, real-world examples, and practical applications.',
      //  link: '/logic/formulas',
       linkText: 'View All Formulas',
       height: '350px',
       backgroundColor: 'none',
     }),
     layout: 'horizontal',
   },
   definitions: {
     title: 'Logic Terms and Definitions', 
     description: 'Browse Logic terminology including main concepts and their definitions with examples',
     rightContentHtml: createContentHtml({
       description: 'The Logic Terms and Definitions page presents key concepts and terminology organized in multiple categories including Logic Basics, Reasoning, Formal Logic, Proof Methods, Logical Principles, and Structures. It covers fundamental concepts like propositions and predicates, reasoning methods, formal systems, and proof techniques. Each term is clearly defined to help understand the building blocks of mathematical logic and logical reasoning.',
      //  link: '/logic/definitions',
       linkText: 'View All Definitions',
       height: '350px',
       backgroundColor: 'none',
     }),
     layout: 'horizontal'
   }
 }

 const introContent = {
   id: "intro",
   title: "Introduction to Mathematical Logic Section",
   content: `Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of **propositional logic**, where statements are combined using logical operators like **and**, **or**, and **not**, to form compound statements and evaluate their truth.

A deeper layer is **predicate logic**, which extends propositional logic by introducing quantifiers like **for all** and **there exists**, allowing reasoning about objects and their properties. Central to this is the concept of **logical validity**, which examines whether conclusions follow from premises regardless of specific interpretations.

Mathematical logic also explores **formal systems**, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include **set theory**, the foundation of mathematics, and **model theory**, which studies the relationship between formal languages and their interpretations.

Another significant area is **computability theory**, which asks fundamental questions about what problems can be solved by algorithms, and **proof theory**, which investigates the nature and structure of mathematical proofs.

Applications of mathematical logic are vast, influencing fields like **computer science**, where it underpins algorithms and programming languages, and **philosophy**, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.`
 }

 const keyWords = [
   'mathematical logic',
   'logic formulas',
   'logic definitions',
   'propositional logic', 
   'predicate logic',
   'formal systems',
   'mathematical proofs',
   'logic tutorial'
 ]

 const canonicalUrl = 'https://www.learnmathclass.com/logic'
 const lastModified = new Date().toISOString()

 const pageTitle = "Mathematical Logic - Formulas, Definitions & Concepts | Learn Math Class"
 const pageDescription = "Master mathematical logic with our comprehensive collection of formulas, definitions, and core concepts. Perfect for students and educators."

 const structuredData = {
   "@context": "https://schema.org",
   "@type": "WebPage",
   "name": "Mathematical Logic - Learn Mathematics",
   "description": "Comprehensive guide to mathematical logic including formulas, definitions, and core concepts.",
   "keywords": keyWords.join(", "),
   "url": canonicalUrl,
   "dateModified": lastModified,
   "inLanguage": "en-US",
   "mainEntity": {
     "@type": "Article",
     "name": "Mathematical Logic",
     "dateModified": lastModified,
     "author": {
       "@type": "Organization",
       "name": "Learn Math Class"
     }
   }
 }

 return {
   props: {
     sectionContent,
     logicFormulasList,
     logicTermsList,
     pageTitle,
     pageDescription,
     introContent,
     structuredData,
     keyWords,
     canonicalUrl,
     lastModified
   }
 }
}

export default function LogicPage({
 sectionContent,
 logicFormulasList,
 logicTermsList,
 pageTitle,
 pageDescription,
 introContent,
 structuredData,
 keyWords,
 canonicalUrl,
 lastModified
}) {

 const logicSections = [
   {
     id: 'formulas',
     title: sectionContent.formulas.title,
     link:`/logic/formulas`,
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
           formulaData={logicFormulasList}
           moreFormulasLink='/logic/formulas'
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
     link:`/logic/definitions`,
     content: [
       {
         content: <VerticalScrollingFormulaWidget
           key="definitions-widget" 
           formulaData={logicTermsList}
           moreFormulasLink='/logic/definitions'
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
   }
 ]

 return (
   <>
     <Head>
       <title>{pageTitle}</title>
       <meta name="description" content={pageDescription} />
       <meta name="keywords" content={keyWords.join(", ")} />
       <link rel="canonical" href={canonicalUrl} />
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
       topOffset='55px'
       sidebarWidth='45px'
       panelWidth='200px'
       iconColor='white'
       panelBackgroundColor='#f2f2f2'
     />
     <Breadcrumb/>
    
     <main>
       <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
         Mathematical Logic
       </h1>
       <SectionTableOfContents sections={logicSections}/>
       <br/>
       <br/>
       <br/>
       <IntroSection
         id={introContent.id}
         title={introContent.title} 
         content={introContent.content}
         backgroundColor="#f2f2f2"
         textColor="#06357a"
       />
       <Sections sections={logicSections}/>
       <br/>
       <br/>
       <br/>
       <ScrollUpButton/>
     </main>
   </>
 )
}