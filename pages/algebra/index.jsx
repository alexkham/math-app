// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // // import React from 'react';
// // // import '../pages.css'
// // // import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
// // // import algebraFormulasList from '@/app/api/db/formulas/algebra/algebraFormulas';
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// // // import { SectionIcon } from 'lucide-react';
// // // import Sections from '@/app/components/page-components/section/Sections';
// // // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection';
// // // import algebraTermsList from '@/app/api/db/definitions/algebra/algebraDefinitions';

// // // export default function AlgebraPage() {
  

// // //   const algebraSections = [
   
// // //     {
// // //       id: 'formulas',
// // //       title: 'Algebra Formulas',
// // //       content:"Explore ",
// // //       content: [
// // //         'Explore Algebra formulas with explanations and examples',
// // //         " ",
// // //         <VerticalScrollingFormulaWidget 
// // //         key={"formula-widget"}
// // //          formulaData={algebraFormulasList}
// // //          moreFormulasLink='/algebra/formulas'
// // //         //  title='See them all'
// // //           />,
   
// // //     ]
      
// // //     },
// // //     {
// // //       id: 'definitions',
// // //       title: 'Algebra Terms and Definitions',
// // //       content:"Explore ",
// // //       content: [
// // //         'Browse Algebra terminology including main concepts and their definitions with examples',
// // //         " ",
// // //         <VerticalScrollingFormulaWidget 
// // //         key={"definitions-widget"}
// // //          formulaData={algebraTermsList}
// // //          moreFormulasLink='/algebra/definitions'
// // //          type='definition'
// // //         //  title='See them all'
// // //           />,
   
// // //     ]
      
// // //     },
// // //   ];

// // //   const introContent = {
// // //     id: "intro",
// // //     title: "Introduction to Algebra Section",
// // //     content:`Algebra is a cornerstone of mathematics that explores relationships between quantities and provides tools to solve problems logically and systematically. It begins with basic operations like **addition, subtraction, multiplication, and division** but quickly extends to include **powers, roots, and logarithms**. Central to algebra is the use of **equations and inequalities** to model and solve problems, helping us determine unknown values based on given conditions.

// // // The study of algebra introduces **polynomials**, expressions composed of variables and constants combined through arithmetic operations. Techniques like **factoring** and **expanding polynomials** allow us to simplify and solve complex equations. Algebra also explores **systems of equations**, where multiple relationships are analyzed simultaneously to find solutions that satisfy all constraints.

// // // **Functions** are another key concept in algebra, providing a way to describe how quantities depend on each other. **Linear functions**, **quadratic functions**, and **exponential relationships** reveal patterns and behaviors that are essential for deeper mathematical understanding. Algebra also emphasizes the properties of numbers and operations, such as **commutativity** and **distributivity**, which underpin all calculations.

// // // The skills developed in algebra, such as **logical reasoning**, **abstraction**, and **problem-solving**, are invaluable. They find applications in diverse fields, from **science and engineering** to **economics and data analysis**, forming a crucial foundation for advanced mathematical studies.`

// // //   };

// // //   const keyWords=['algebra','learn algebra','algebra formulas','algebra definitions']
  

// // //   return (
// // //     <>
// // //     <GenericNavbar/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <OperaSidebar 
// // //       side='right'
// // //       topOffset='65px' 
// // //       sidebarWidth='45px'
// // //       panelWidth='200px'
      
// // //       iconColor='white'
// // //       panelBackgroundColor='#f2f2f2'/> 
// // //     <Breadcrumb/>
   
// // //     <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Algebra</h1>
// // //     <SectionTableOfContents sections={algebraSections}/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <IntroSection 
// // //   id={introContent.id}
// // //   title={introContent.title}
// // //   content={introContent.content}
// // //   backgroundColor="#f2f2f2"
// // //   textColor="#06357a"
// // // />
// // //     <Sections  sections={algebraSections}/>
// // //     <br/>
// // //     <br/>
// // //     <br/>
// // //     <ScrollUpButton/>
    


    
// // //     </>
// // //   )
// // // }


// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import React from 'react'
// // import '../pages.css'
// // import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Head from 'next/head'

// // export async function getStaticProps() {
// //   const { default: algebraFormulasList } = await import('@/app/api/db/formulas/algebra/algebraFormulas')
// //   const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')
  
// //   const formulasContent = {
// //     formulas: {
// //       leftContentHtml: '<div style="background-color:#ebf5ff;height:250px;padding:20px;">Visit Algebra formulas page.</div>',
// //       layout: 'horizontal',
// //       title: 'Algebra Formulas',
// //     }
// //   }

  
// //   // Static content that can be used for SEO
// //   const sectionContent = {
// //     formulas: {
// //       title: 'Algebra Formulas',
// //       description: 'Explore Algebra formulas with explanations and examples',
// //       content: [
// //         { 
// //           content: formulasContent.formulas.leftContentHtml,
// //           layout: 'horizontal', 
// //           position: 'left',
// //           width: 1.5 
// //         },
// //         { 
// //           content: <VerticalScrollingFormulaWidget 
// //             key="formula-widget"
// //             formulaData={algebraFormulasList}
// //             moreFormulasLink='/algebra/formulas'
// //           />, 
// //           layout: 'horizontal', 
// //           position: 'right',
// //           width: 2 
// //         }
// //       ]

// //     },
// //     definitions: {
// //       title: 'Algebra Terms and Definitions',
// //       description: 'Browse Algebra terminology including main concepts and their definitions with examples'
// //     }
// //   }

// //   const introContent = {
// //     id: "intro",
// //     title: "Introduction to Algebra Section",
// //     content: `Algebra is a cornerstone of mathematics that explores relationships between quantities and provides tools to solve problems logically and systematically. It begins with basic operations like **addition, subtraction, multiplication, and division** but quickly extends to include **powers, roots, and logarithms**. Central to algebra is the use of **equations and inequalities** to model and solve problems, helping us determine unknown values based on given conditions.

// // The study of algebra introduces **polynomials**, expressions composed of variables and constants combined through arithmetic operations. Techniques like **factoring** and **expanding polynomials** allow us to simplify and solve complex equations. Algebra also explores **systems of equations**, where multiple relationships are analyzed simultaneously to find solutions that satisfy all constraints.

// // **Functions** are another key concept in algebra, providing a way to describe how quantities depend on each other. **Linear functions**, **quadratic functions**, and **exponential relationships** reveal patterns and behaviors that are essential for deeper mathematical understanding. Algebra also emphasizes the properties of numbers and operations, such as **commutativity** and **distributivity**, which underpin all calculations.

// // The skills developed in algebra, such as **logical reasoning**, **abstraction**, and **problem-solving**, are invaluable. They find applications in diverse fields, from **science and engineering** to **economics and data analysis**, forming a crucial foundation for advanced mathematical studies.`
// //   }

// //   const keyWords = [
// //     'algebra',
// //     'learn algebra',
// //     'algebra formulas',
// //     'algebra definitions',
// //     'algebraic equations',
// //     'algebra concepts',
// //     'basic algebra',
// //     'algebra tutorial'
// //   ]

// //   const canonicalUrl = 'https://www.learnmathclass.com/algebra'
// //   const lastModified = new Date().toISOString()
  
// //   return {
// //     props: {
// //       sectionContent,
// //       introContent,
// //       keyWords,
// //       canonicalUrl,
// //       lastModified,
// //       algebraFormulasList,
// //       algebraTermsList
// //     }
// //   }
// // }

// // export default function AlgebraPage({ 
// //   sectionContent, 
// //   introContent, 
// //   keyWords,
// //   canonicalUrl,
// //   lastModified,
// //   algebraFormulasList,
// //   algebraTermsList
// // }) {
// //   // Reconstruct sections with React components
// //   const algebraSections = [
// //     {
// //       id: 'formulas',
// //       title: sectionContent.formulas.title,
// //       content: [
// //         sectionContent.formulas.description,
// //         " ",
// //         <VerticalScrollingFormulaWidget 
// //           key="formula-widget"
// //           formulaData={algebraFormulasList}
// //           moreFormulasLink='/algebra/formulas'
// //         />
// //       ]
// //     },
// //     {
// //       id: 'definitions',
// //       title: sectionContent.definitions.title,
// //       content: [
// //         sectionContent.definitions.description,
// //         " ",
// //         <VerticalScrollingFormulaWidget 
// //           key="definitions-widget"
// //           formulaData={algebraTermsList}
// //           moreFormulasLink='/algebra/definitions'
// //           type='definition'
// //         />
// //       ]
// //     }
// //   ]

// //   const structuredData = {
// //     "@context": "https://schema.org",
// //     "@type": "WebPage",
// //     "name": "Algebra - Learn Mathematics",
// //     "description": "Comprehensive guide to algebra including formulas, definitions, and core concepts. Learn about algebraic operations, equations, functions, and more.",
// //     "keywords": keyWords.join(", "),
// //     "url": canonicalUrl,
// //     "dateModified": lastModified,
// //     "inLanguage": "en-US",
// //     "mainEntity": {
// //       "@type": "Article",
// //       "name": "Algebra",
// //       "dateModified": lastModified,
// //       "author": {
// //         "@type": "Organization",
// //         "name": "Learn Math Class"
// //       }
// //     }
// //   }

// //   const pageTitle = "Algebra - Formulas, Definitions & Concepts | Learn Math Class"
// //   const pageDescription = "Master algebra with our comprehensive collection of formulas, definitions, and core concepts. Perfect for students and educators."

// //   return (
// //     <>
// //       <Head>
// //         {/* Essential Meta Tags */}
// //         <title>{pageTitle}</title>
// //         <meta name="description" content={pageDescription} />
// //         <meta name="keywords" content={keyWords.join(", ")} />
// //         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
// //         {/* Canonical URL */}
// //         <link rel="canonical" href={canonicalUrl} />
        
// //         {/* Open Graph Tags */}
// //         <meta property="og:title" content={pageTitle} />
// //         <meta property="og:description" content={pageDescription} />
// //         <meta property="og:type" content="article" />
// //         <meta property="og:url" content={canonicalUrl} />
// //         <meta property="og:site_name" content="Learn Math Class" />
// //         <meta property="og:locale" content="en_US" />
// //         <meta property="article:modified_time" content={lastModified} />
        
// //         {/* Twitter Card Tags */}
// //         <meta name="twitter:card" content="summary" />
// //         <meta name="twitter:title" content={pageTitle} />
// //         <meta name="twitter:description" content={pageDescription} />
        
// //         {/* Additional Meta Tags */}
// //         <meta name="robots" content="index, follow" />
// //         <meta name="googlebot" content="index, follow" />
// //         <meta name="revisit-after" content="7 days" />
        
// //         {/* Structured Data */}
// //         <script 
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
// //         />
// //       </Head>

// //       <GenericNavbar/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <OperaSidebar 
// //         side='right'
// //         topOffset='65px' 
// //         sidebarWidth='45px'
// //         panelWidth='200px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       /> 
// //       <Breadcrumb/>
     
// //       <main>
// //         <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
// //           Algebra
// //         </h1>
// //         <SectionTableOfContents sections={algebraSections}/>
// //         <br/>
// //         <br/>
// //         <br/>
// //         <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //           backgroundColor="#f2f2f2"
// //           textColor="#06357a"
// //         />
// //         <Sections sections={algebraSections}/>
// //         <br/>
// //         <br/>
// //         <br/>
// //         <ScrollUpButton/>
// //       </main>
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
//   const { default: algebraFormulasList } = await import('@/app/api/db/formulas/algebra/algebraFormulas')
//   const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')
  
//   const sectionContent = {
//     formulas: {
//       title: 'Algebra Formulas',
//       description: 'Explore Algebra formulas with explanations and examples',
//       leftContentHtml: '<div style="background-color:#ebf5ff;height:250px;padding:20px;">Visit Algebra formulas page.</div>'
//     },
//     definitions: {
//       title: 'Algebra Terms and Definitions',
//       description: 'Browse Algebra terminology including main concepts and their definitions with examples'
//     }
//   }

//   const introContent = {
//     id: "intro",
//     title: "Introduction to Algebra Section",
//     content: `Algebra is a cornerstone of mathematics that explores relationships between quantities and provides tools to solve problems logically and systematically. It begins with basic operations like **addition, subtraction, multiplication, and division** but quickly extends to include **powers, roots, and logarithms**. Central to algebra is the use of **equations and inequalities** to model and solve problems, helping us determine unknown values based on given conditions.

// The study of algebra introduces **polynomials**, expressions composed of variables and constants combined through arithmetic operations. Techniques like **factoring** and **expanding polynomials** allow us to simplify and solve complex equations. Algebra also explores **systems of equations**, where multiple relationships are analyzed simultaneously to find solutions that satisfy all constraints.

// **Functions** are another key concept in algebra, providing a way to describe how quantities depend on each other. **Linear functions**, **quadratic functions**, and **exponential relationships** reveal patterns and behaviors that are essential for deeper mathematical understanding. Algebra also emphasizes the properties of numbers and operations, such as **commutativity** and **distributivity**, which underpin all calculations.

// The skills developed in algebra, such as **logical reasoning**, **abstraction**, and **problem-solving**, are invaluable. They find applications in diverse fields, from **science and engineering** to **economics and data analysis**, forming a crucial foundation for advanced mathematical studies.`
//   }

//   const keyWords = [
//     'algebra',
//     'learn algebra',
//     'algebra formulas',
//     'algebra definitions',
//     'algebraic equations',
//     'algebra concepts',
//     'basic algebra',
//     'algebra tutorial'
//   ]

//   const canonicalUrl = 'https://www.learnmathclass.com/algebra'
//   const lastModified = new Date().toISOString()
  
//   return {
//     props: {
//       sectionContent,
//       introContent,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//       algebraFormulasList,
//       algebraTermsList
//     }
//   }
// }

// export default function AlgebraPage({ 
//   sectionContent, 
//   introContent, 
//   keyWords,
//   canonicalUrl,
//   lastModified,
//   algebraFormulasList,
//   algebraTermsList
// }) {
//   const algebraSections = [
//     {
//       id: 'formulas',
//       title: sectionContent.formulas.title,
//       content: [
//         sectionContent.formulas.description,
//         sectionContent.formulas.leftContentHtml,
//         <VerticalScrollingFormulaWidget 
//           key="formula-widget"
//           formulaData={algebraFormulasList}
//           moreFormulasLink='/algebra/formulas'
//         />
//       ]
//     },
//     {
//       id: 'definitions',
//       title: sectionContent.definitions.title,
//       content: [
//         sectionContent.definitions.description,
//         " ",
//         <VerticalScrollingFormulaWidget 
//           key="definitions-widget"
//           formulaData={algebraTermsList}
//           moreFormulasLink='/algebra/definitions'
//           type='definition'
//         />
//       ]
//     }
//   ]

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Algebra - Learn Mathematics",
//     "description": "Comprehensive guide to algebra including formulas, definitions, and core concepts. Learn about algebraic operations, equations, functions, and more.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Algebra",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Algebra - Formulas, Definitions & Concepts | Learn Math Class"
//   const pageDescription = "Master algebra with our comprehensive collection of formulas, definitions, and core concepts. Perfect for students and educators."

//   return (
//     <>
//       <Head>
//         {/* Essential Meta Tags */}
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="keywords" content={keyWords.join(", ")} />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
//         {/* Canonical URL */}
//         <link rel="canonical" href={canonicalUrl} />
        
//         {/* Open Graph Tags */}
//         <meta property="og:title" content={pageTitle} />
//         <meta property="og:description" content={pageDescription} />
//         <meta property="og:type" content="article" />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:site_name" content="Learn Math Class" />
//         <meta property="og:locale" content="en_US" />
//         <meta property="article:modified_time" content={lastModified} />
        
//         {/* Twitter Card Tags */}
//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={pageTitle} />
//         <meta name="twitter:description" content={pageDescription} />
        
//         {/* Additional Meta Tags */}
//         <meta name="robots" content="index, follow" />
//         <meta name="googlebot" content="index, follow" />
//         <meta name="revisit-after" content="7 days" />
        
//         {/* Structured Data */}
//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
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
     
//       <main>
//         <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>
//           Algebra
//         </h1>
//         <SectionTableOfContents sections={algebraSections}/>
//         <br/>
//         <br/>
//         <br/>
//         <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#06357a"
//         />
//         <Sections sections={algebraSections}/>
//         <br/>
//         <br/>
//         <br/>
//         <ScrollUpButton/>
//       </main>
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
import Head from 'next/head';
import { createContentHtml } from '@/app/utils/utils-functions'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import SecondaryNavbar from '@/app/components/nav-bar/SecondaryNavbar'




export async function getStaticProps() {
  const { default: algebraFormulasList } = await import('@/app/api/db/formulas/algebra/algebraFormulas')
  const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')
  
 

  const sectionContent = {
    formulas: {
      title: 'Algebra Formulas',
      description: 'Visit Algebra formulas page',
      leftContentHtml: createContentHtml({ 
        description: 'The Algebra Formulas page provides a comprehensive collection of essential algebraic formulas and rules covering four key areas: Exponent and Power Rules covering basic operations with powers, Radical and Root Operations for understanding and manipulating square roots and nth roots, Logarithmic Properties dealing with logarithm operations and transformations, and Binomial Expressions and Theorems for expanding and working with polynomial terms. Each formula includes detailed explanations, examples, and practical applications.', 
        // link: '/algebra/formulas',
        // linkText: 'View All Formulas',
        height:'350px',
        backgroundColor:'#fdfdea',
        
      }),
      layout: 'horizontal',
    },
    definitions: {
      title: 'Algebra Terms and Definitions',
      description: 'Browse Algebra terminology including main concepts and their definitions with examples',
      rightContentHtml: createContentHtml({ 
        description: 'The Algebra Terms and Definitions page offers a structured glossary of fundamental algebraic concepts organized in three main categories: Roots, Logarithms, and Exponents. It includes clear definitions for essential terms and operations in each category, from basic concepts like square roots and exponents to more advanced topics like nested radicals, complex logarithms, and exponential functions. Each term is precisely defined to help build a solid foundation in algebraic understanding.',
        // link: '/algebra/definitions',
        // linkText: 'View All Definitions',
        height:'350px',
        backgroundColor:'#fdfdea',
      }),
      layout: 'horizontal'
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
  const lastModified = new Date().toISOString();

  const definitionsCategoryExplanations = {
    "Roots": "Core concepts and operations with roots. Key terms include Square Root (x where x² = n), Cube Root (x where x³ = n), Radical Symbol (√), Perfect Squares/Cubes, and methods of simplification. Covers both real and imaginary roots, radical expressions, and related operations.",
    
    "Logarithms": "Functions that determine the exponent needed for a base to reach a number. Includes Natural Logarithm (base e), Common Logarithm (base 10), Binary Logarithm (base 2), and their properties. Covers logarithmic functions, equations, identities and transformations.",
    
    "Exponents": "Rules and operations involving powers. Features basic concepts like Base and Power, Laws of Exponents, Exponential Functions (a^x), and applications in growth/decay. Includes special cases like Zero, Negative, and Fractional exponents."
   };

   const formulasCategoryExplanations = {
    "Exponent Rules": "Core rules for manipulating exponents. Key principles include Product Rule ($x^m * x^n = x^{m+n}$), Quotient Rule ($x^m/x^n = x^{m-n}$), Power Rule $((x^m)^n = x^{mn})$, and special cases for zero and negative exponents.",
    
    "Radical Rules": "Rules for manipulating radicals and roots. Features Product Rule for radicals (√(xy) = √x * √y), Quotient Rule (√(x/y) = √x/√y), Power Rule $(√(x^n) = x^{n/2})$, and rationalization techniques. Includes properties for handling even/odd roots and nested radicals.",
   
    "Logarithm Laws": "Fundamental rules for logarithmic manipulation. Includes definition $(y = log_b x ⟺ b^y = x)$, Product Rule $(log(MN) = log M + log N)$, Quotient Rule $(log(M/N) = log M - log N)$, and Change of Base formula.",
   
    "Binomial Rules": "Rules for expanding and factoring binomial expressions. Features Binomial Theorem $((x+y)^n$ expansion), special products like square of binomial $(x+y)^2 = x^2 + 2xy + y^2$, and cube of binomial $(x+y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$."
   };
   
  
   
  
  return {
    props: {
      sectionContent,
      introContent,
      keyWords,
      canonicalUrl,
      lastModified,
      algebraFormulasList,
      algebraTermsList,
      definitionsCategoryExplanations,
      formulasCategoryExplanations
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
  algebraTermsList,
  definitionsCategoryExplanations,
  formulasCategoryExplanations
}) {

  
  const algebraSections = [
    {
      id: 'formulas',
      title: sectionContent.formulas.title,
      link:'/algebra/formulas',
      content: [
        { 
          content:  <CategoriesList data={algebraFormulasList} 
          baseUrl='/algebra/formulas'
          categoryExplanations={formulasCategoryExplanations}/>,
          layout: 'horizontal', 
          position: 'left',
          width: 1.5 
        },
        { 
          content: <VerticalScrollingFormulaWidget 
            key="formula-widget"
            formulaData={algebraFormulasList}
            moreFormulasLink='/algebra/formulas'
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
      link:'/algebra/definitions',
      content: [
        { 
          content: <VerticalScrollingFormulaWidget 
            key="definitions-widget"
            formulaData={algebraTermsList}
            moreFormulasLink='/algebra/definitions'
            type='definition'
          />, 
          layout: 'horizontal', 
          position: 'left',
          width: 2
        },
        { 
          content:  <CategoriesList data={algebraTermsList} 
          baseUrl='/algebra/definitions'
          categoryExplanations={definitionsCategoryExplanations}/>,
          layout: 'horizontal', 
          position: 'right',
          width: 1.5 
        }
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
        topOffset='95px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
     <SecondaryNavbar verticalPosition='17.5%' alignment='top' backgroundColor='#1f2937' height={'20px'} />
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