
// import React from 'react'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import '../../../pages/pages.css'

// export async function getStaticProps() {
//   const { default: functionsFormulasList } = await import('@/app/api/db/formulas/functions/functionsFormulas')
  
//   const keyWords = [
//     'functions formulas',
//     'functions examples',
//     'functions',
//     'functions equation',
//     'functions rules'
//   ]

//   // Define the canonical URL
//   const baseUrl = 'https://www.learnmathclass.com'
//   const path = '/functions/formulas'
//   const canonicalUrl = `${baseUrl}${path}`
  
//   const lastModified = new Date().toISOString() // Update this when content changes
  
//   return {
//     props: {
//       functionsFormulasList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function AlgebraFormulasPage({ 
//   functionsFormulasList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const router = useRouter()

//   // Redirect if URL has query parameters or trailing slash
//   React.useEffect(() => {
//     if (router.asPath !== '/functions/formulas') {
//       router.push('/functions/formulas')
//     }
//   }, [router])

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Algebra Formulas and Examples",
//     "description": "Comprehensive collection of functions formulas with examples and explanations. Essential reference for students and educators.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Algebra Formulas",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Algebra Formulas and Examples | Learn Math Class"
//   const pageDescription = "Complete collection of functions formulas with step-by-step examples and explanations. Perfect for students and teachers learning algebraic concepts."

//   return (
//     <>
//       <Head>
//         {/* Essential Meta Tags */}
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//         <meta name="keywords" content={keyWords.join(", ")} />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
//         {/* Canonical URL - Critical for SEO */}
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
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar
//         side='right'
//         // topOffset='55px'
//         sidebarWidth='45px'
//         panelWidth='300px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <Breadcrumb/>
//       <main>
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
//           Algebra Formulas
//         </h1>
//         <FormulasTOC data={functionsFormulasList} />
//         {/* <div style={{transform:'scale(0.95)'}}>
//           <FormulaAccordionWrapper 
//             data={functionsFormulasList}
//             groupByField={['category']}
//           />
//         </div> */}
//         <br/>
//          {/* <ScrollUpButton/> */} 
//       </main>
//     </>
//   );
// }


import functionsFormulasList from '@/app/api/db/formulas/functions/functionsFormulas'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'
import '../../../pages/pages.css'

export async function getStaticProps() {

  const keyWords = [
    'functions formulas',
    'function arithmetic',
    'function composition',
    'inverse functions',
    'function transformations',
    'linear function forms',
    'quadratic function forms',
    'slope intercept form',
    'vertex form quadratic',
    'even and odd functions',
    'asymptotes rational functions',
    'average rate of change',
    'difference quotient',
    'functions reference'
  ]

  const faqQuestions = {
    obj1: {
      question: "What does this functions formulas reference cover?",
      answer: "This reference collects 38 formulas organized into 9 categories: function arithmetic with combined-function domain rules, composition, inverse functions, symmetry tests for even and odd functions, transformations, linear function forms, quadratic function forms, asymptotes of rational functions, and rates of change."
    },
    obj2: {
      question: "How do you find the domain of a quotient of two functions?",
      answer: "Take the intersection of the domains of f and g, then remove every input where g(x) equals zero. Even when algebraic simplification appears to cancel the restriction, the original exclusion remains as a hole rather than a valid point."
    },
    obj3: {
      question: "What is the inverse of a composition of two functions?",
      answer: "The inverse of f composed with g equals g-inverse composed with f-inverse - the order reverses. To undo first g then f, undo f first and then undo g. Both functions must be one-to-one for this to apply."
    },
    obj4: {
      question: "How do you find the vertex of a quadratic from standard form?",
      answer: "For f(x) = ax squared plus bx plus c, the vertex x-coordinate is minus b over 2a, and the y-coordinate is the function evaluated at that x. The same expression gives the axis of symmetry. The result is derived by completing the square to convert to vertex form."
    },
    obj5: {
      question: "What are the algebraic tests for even and odd functions?",
      answer: "A function is even when f of minus x equals f of x, giving a graph symmetric about the y-axis. It is odd when f of minus x equals minus f of x, giving rotational symmetry about the origin. Both tests require a domain that is symmetric about the origin."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Functions Formulas Reference",
      "description": "Reference of 38 functions formulas in 9 categories: arithmetic, composition, inverses, symmetry, transformations, linear and quadratic forms, asymptotes.",
      "url": "https://www.learnmathclass.com/functions/formulas",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Reference",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Functions"
      },
      "teaches": [
        "Function arithmetic and combined-function domain rules",
        "Function composition, associativity, and the inverse of a composition",
        "Inverse functions and verification through composition",
        "Symmetry tests for even and odd functions",
        "Vertical and horizontal translations, reflections, and dilations",
        "Linear and quadratic function forms with conversion between them"
      ],
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Functions Formulas Reference",
          "item": "https://www.learnmathclass.com/functions/formulas"
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
    props: {
      functionsFormulasList,
      faqQuestions,
      schemas,
      seoData: {
        title: "Functions Formulas: Operations & Forms | Learn Math Class",
        description: "Reference of 38 functions formulas in 9 categories: arithmetic, composition, inverses, symmetry, transformations, linear and quadratic forms, asymptotes.",
        hubDescription: `This reference collects 38 function formulas organized into 9 categories - the standard toolkit for working with functions across precalculus and into calculus.

[Function Arithmetic](!/functions/formulas#category_function_arithmetic) covers pointwise sum, difference, product, and quotient along with the domain rules for combined and quotient functions. [Composition](!/functions/formulas#category_composition) covers chaining functions, the domain of a composite, associativity, and the inverse of a composition. [Inverse Functions](!/functions/formulas#category_inverse_functions) covers the defining input-output swap, the verification by composition, the inverse of an inverse, and the domain-range exchange. [Symmetry](!/functions/formulas#category_symmetry) gives the algebraic tests for even and odd functions. [Transformations](!/functions/formulas#category_transformations) collects the master form together with vertical and horizontal translations, reflections, and dilations. [Linear Function Forms](!/functions/formulas#category_linear_function_forms) and [Quadratic Function Forms](!/functions/formulas#category_quadratic_function_forms) provide the multiple equivalent representations of these two function families, with the slope formula and perpendicular-slope condition. [Asymptotes](!/functions/formulas#category_asymptotes) covers vertical and horizontal asymptotes of rational functions. [Rates of Change](!/functions/formulas#category_rates_of_change) closes the set with the average rate of change and the difference quotient - the bridge to derivatives.

Each entry shows the formula in LaTeX, an explanation of what the formula captures, and where applicable a derivation, conditions for validity, common variants, and links to related formulas and definitions.`,
        keywords: keyWords.join(", "),
        url: "/functions/formulas",
        name: "Functions Formulas Reference"
      }
    }
  }
}

export default function FunctionsFormulasPage({ functionsFormulasList, faqQuestions, schemas, seoData }) {

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
            __html: JSON.stringify(schemas.learningResource)
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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        // topOffset='55px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <main>
        <h1 className='title' style={{ marginTop: '0px', marginBottom: '10px' }}>
          Functions Formulas
        </h1>
        <FormulasTOC data={functionsFormulasList} />
        {/* <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={functionsFormulasList}
            groupByField={['category']}
          />
        </div> */}
        <br />
        {/* <ScrollUpButton/> */}
      </main>
    </>
  );
}