// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../pages.css'
// import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
// import logicFormulasList from '@/app/api/db/formulas/logic/logicFormulasList';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import logicTermsList from '@/app/api/db/definitions/logic/logicDefinitions';
// import Sections from '@/app/components/page-components/section/Sections';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';

// export default function LogicPage() {
  

//   const logicSections = [
   
//     {
//       id: 'formulas',
//       title: 'Mathematical Logic Formulas',
//       content:"Explore ",
//       content: [
//         'Explore Mathematical Logic formulas with explanations and examples',
//         " ",
//         <VerticalScrollingFormulaWidget 
//         key={"formula-widget2"}
//          formulaData={logicFormulasList}
//          moreFormulasLink='/logic/formulas'
//         //  title='See them all'
//           />,
   
//     ]
      
//     },
//     {
//       id: 'definitions',
//       title: 'Logic Terms and Definitions',
//       content:[

//         <VerticalScrollingFormulaWidget 
//         key={"definitions"}
//          formulaData={logicTermsList}
//          moreFormulasLink='/logic/definitions'
//          type='definition'
//         //  title='See them all'
//           />,

//       ]
//     }
//   ];
  
//   const introContent = {
//     id: "intro",
//     title: "Introduction to Mathematical Logic Section",
//     content:`
//     Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of **propositional logic**, where statements are combined using logical operators like **and**, **or**, and **not**, to form compound statements and evaluate their truth.

// A deeper layer is **predicate logic**, which extends propositional logic by introducing quantifiers like **for all** and **there exists**, allowing reasoning about objects and their properties. Central to this is the concept of **logical validity**, which examines whether conclusions follow from premises regardless of specific interpretations.

// Mathematical logic also explores **formal systems**, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include **set theory**, the foundation of mathematics, and **model theory**, which studies the relationship between formal languages and their interpretations.

// Another significant area is **computability theory**, which asks fundamental questions about what problems can be solved by algorithms, and **proof theory**, which investigates the nature and structure of mathematical proofs.

// Applications of mathematical logic are vast, influencing fields like **computer science**, where it underpins algorithms and programming languages, and **philosophy**, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.
//     `

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
   
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Mathematical Logic</h1>
//     <SectionTableOfContents sections={logicSections}/>
//     <br/>
// <br/>
// <br/>
//     <IntroSection 
//   id={introContent.id}
//   title={introContent.title}
//   content={introContent.content}
//   backgroundColor="#f2f2f2"
//   textColor="#06357a"
// />

//     <Sections  sections={logicSections}/>
//     <br/>
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

export async function getStaticProps() {
  const { default: logicFormulasList } = await import('@/app/api/db/formulas/logic/logicFormulasList')
  const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')
  
  return {
    props: {
      logicFormulasList,
      logicTermsList
    }
  }
}

export default function LogicPage({ logicFormulasList, logicTermsList }) {
  const logicSections = [
    {
      id: 'formulas',
      title: 'Mathematical Logic Formulas',
      content: [
        'Explore Mathematical Logic formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
          key={"formula-widget2"}
          formulaData={logicFormulasList}
          moreFormulasLink='/logic/formulas'
        />
      ]
    },
    {
      id: 'definitions',
      title: 'Logic Terms and Definitions',
      content:[
        <VerticalScrollingFormulaWidget 
          key={"definitions"}
          formulaData={logicTermsList}
          moreFormulasLink='/logic/definitions'
          type='definition'
        />
      ]
    }
  ]
  
  const introContent = {
    id: "intro",
    title: "Introduction to Mathematical Logic Section",
    content: `
    Mathematical logic studies the principles of reasoning and provides a rigorous framework to analyze the structure of statements and arguments. It begins with the basics of **propositional logic**, where statements are combined using logical operators like **and**, **or**, and **not**, to form compound statements and evaluate their truth.

A deeper layer is **predicate logic**, which extends propositional logic by introducing quantifiers like **for all** and **there exists**, allowing reasoning about objects and their properties. Central to this is the concept of **logical validity**, which examines whether conclusions follow from premises regardless of specific interpretations.

Mathematical logic also explores **formal systems**, which consist of axioms, rules of inference, and symbols for constructing proofs. Key topics include **set theory**, the foundation of mathematics, and **model theory**, which studies the relationship between formal languages and their interpretations.

Another significant area is **computability theory**, which asks fundamental questions about what problems can be solved by algorithms, and **proof theory**, which investigates the nature and structure of mathematical proofs.

Applications of mathematical logic are vast, influencing fields like **computer science**, where it underpins algorithms and programming languages, and **philosophy**, where it sharpens reasoning. It develops skills in abstraction, critical thinking, and formal reasoning, making it a cornerstone of mathematical rigor.
    `
  }

  return (
    <>
      <Head>
        <title>Mathematical Logic | Learn Math Class</title>
        <meta name="description" content="Master mathematical logic with comprehensive guides covering propositional logic, predicate logic, formal systems, and proof theory." />
        <meta name="keywords" content="mathematical logic, propositional logic, predicate logic, formal systems, logic formulas, logic definitions" />
        <link rel="canonical" href="https://www.learnmathclass.com/logic" />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
     
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Mathematical Logic</h1>
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
    </>
  )
}