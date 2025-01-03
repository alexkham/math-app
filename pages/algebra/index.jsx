// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react';
// import '../pages.css'
// import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
// import algebraFormulasList from '@/app/api/db/formulas/algebra/algebraFormulas';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import { SectionIcon } from 'lucide-react';
// import Sections from '@/app/components/page-components/section/Sections';
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';
// import algebraTermsList from '@/app/api/db/definitions/algebra/algebraDefinitions';

// export default function AlgebraPage() {
  

//   const algebraSections = [
   
//     {
//       id: 'formulas',
//       title: 'Algebra Formulas',
//       content:"Explore ",
//       content: [
//         'Explore Algebra formulas with explanations and examples',
//         " ",
//         <VerticalScrollingFormulaWidget 
//         key={"formula-widget"}
//          formulaData={algebraFormulasList}
//          moreFormulasLink='/algebra/formulas'
//         //  title='See them all'
//           />,
   
//     ]
      
//     },
//     {
//       id: 'definitions',
//       title: 'Algebra Terms and Definitions',
//       content:"Explore ",
//       content: [
//         'Browse Algebra terminology including main concepts and their definitions with examples',
//         " ",
//         <VerticalScrollingFormulaWidget 
//         key={"definitions-widget"}
//          formulaData={algebraTermsList}
//          moreFormulasLink='/algebra/definitions'
//          type='definition'
//         //  title='See them all'
//           />,
   
//     ]
      
//     },
//   ];

//   const introContent = {
//     id: "intro",
//     title: "Introduction to Algebra Section",
//     content:`Algebra is a cornerstone of mathematics that explores relationships between quantities and provides tools to solve problems logically and systematically. It begins with basic operations like **addition, subtraction, multiplication, and division** but quickly extends to include **powers, roots, and logarithms**. Central to algebra is the use of **equations and inequalities** to model and solve problems, helping us determine unknown values based on given conditions.

// The study of algebra introduces **polynomials**, expressions composed of variables and constants combined through arithmetic operations. Techniques like **factoring** and **expanding polynomials** allow us to simplify and solve complex equations. Algebra also explores **systems of equations**, where multiple relationships are analyzed simultaneously to find solutions that satisfy all constraints.

// **Functions** are another key concept in algebra, providing a way to describe how quantities depend on each other. **Linear functions**, **quadratic functions**, and **exponential relationships** reveal patterns and behaviors that are essential for deeper mathematical understanding. Algebra also emphasizes the properties of numbers and operations, such as **commutativity** and **distributivity**, which underpin all calculations.

// The skills developed in algebra, such as **logical reasoning**, **abstraction**, and **problem-solving**, are invaluable. They find applications in diverse fields, from **science and engineering** to **economics and data analysis**, forming a crucial foundation for advanced mathematical studies.`

//   };

//   const keyWords=['algebra','learn algebra','algebra formulas','algebra definitions']
  

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
   
//     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Algebra</h1>
//     <SectionTableOfContents sections={algebraSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <IntroSection 
//   id={introContent.id}
//   title={introContent.title}
//   content={introContent.content}
//   backgroundColor="#f2f2f2"
//   textColor="#06357a"
// />
//     <Sections  sections={algebraSections}/>
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
  const { default: algebraFormulasList } = await import('@/app/api/db/formulas/algebra/algebraFormulas')
  const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')
  
  // Static content that can be used for SEO
  const sectionContent = {
    formulas: {
      title: 'Algebra Formulas',
      description: 'Explore Algebra formulas with explanations and examples'
    },
    definitions: {
      title: 'Algebra Terms and Definitions',
      description: 'Browse Algebra terminology including main concepts and their definitions with examples'
    }
  }

  const introContent = {
    id: "intro",
    title: "Introduction to Algebra Section",
    content: `Algebra is a cornerstone of mathematics that explores relationships between quantities and provides tools to solve problems logically and systematically. It begins with basic operations like **addition, subtraction, multiplication, and division** but quickly extends to include **powers, roots, and logarithms**. Central to algebra is the use of **equations and inequalities** to model and solve problems, helping us determine unknown values based on given conditions.

The study of algebra introduces **polynomials**, expressions composed of variables and constants combined through arithmetic operations. Techniques like **factoring** and **expanding polynomials** allow us to simplify and solve complex equations. Algebra also explores **systems of equations**, where multiple relationships are analyzed simultaneously to find solutions that satisfy all constraints.

**Functions** are another key concept in algebra, providing a way to describe how quantities depend on each other. **Linear functions**, **quadratic functions**, and **exponential relationships** reveal patterns and behaviors that are essential for deeper mathematical understanding. Algebra also emphasizes the properties of numbers and operations, such as **commutativity** and **distributivity**, which underpin all calculations.

The skills developed in algebra, such as **logical reasoning**, **abstraction**, and **problem-solving**, are invaluable. They find applications in diverse fields, from **science and engineering** to **economics and data analysis**, forming a crucial foundation for advanced mathematical studies.`
  }

  const keyWords = [
    'algebra',
    'learn algebra',
    'algebra formulas',
    'algebra definitions',
    'algebraic equations',
    'algebra concepts',
    'basic algebra',
    'algebra tutorial'
  ]

  const canonicalUrl = 'https://www.learnmathclass.com/algebra'
  const lastModified = new Date().toISOString()
  
  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      algebraFormulasList,
      algebraTermsList
    }
  }
}

export default function AlgebraPage({ 
  sectionContent, 
  introContent, 
  keyWords,
  canonicalUrl,
  lastModified,
  algebraFormulasList,
  algebraTermsList
}) {
  // Reconstruct sections with React components
  const algebraSections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      content: [
        sectionContent.formulas.description,
        " ",
        <VerticalScrollingFormulaWidget 
          key="formula-widget"
          formulaData={algebraFormulasList}
          moreFormulasLink='/algebra/formulas'
        />
      ]
    },
    {
      id: 'definitions',
      title: sectionContent.definitions.title,
      content: [
        sectionContent.definitions.description,
        " ",
        <VerticalScrollingFormulaWidget 
          key="definitions-widget"
          formulaData={algebraTermsList}
          moreFormulasLink='/algebra/definitions'
          type='definition'
        />
      ]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Algebra - Learn Mathematics",
    "description": "Comprehensive guide to algebra including formulas, definitions, and core concepts. Learn about algebraic operations, equations, functions, and more.",
    "keywords": keyWords.join(", "),
    "url": canonicalUrl,
    "dateModified": lastModified,
    "inLanguage": "en-US",
    "mainEntity": {
      "@type": "Article",
      "name": "Algebra",
      "dateModified": lastModified,
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
    }
  }

  const pageTitle = "Algebra - Formulas, Definitions & Concepts | Learn Math Class"
  const pageDescription = "Master algebra with our comprehensive collection of formulas, definitions, and core concepts. Perfect for students and educators."

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
        topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
     
      <main>
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
          Algebra
        </h1>
        <SectionTableOfContents sections={algebraSections}/>
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
        <Sections sections={algebraSections}/>
        <br/>
        <br/>
        <br/>
        <ScrollUpButton/>
      </main>
    </>
  )
}