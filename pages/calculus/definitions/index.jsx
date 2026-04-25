// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import '../../../pages/pages.css'
// import DefinitionGlossary from '@/app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: calculusTermsList } = await import('@/app/api/db/definitions/calculus/calculusDefinitions')
  
//   const keyWords = [
//     'calculus terminology',
//     'calculus terms',
//     'calculus definitions',
//     'calculus definition and examples',
//     'calculus vocabulary'
//   ]

//   // Define the canonical URL
//   const baseUrl = 'https://www.learnmathclass.com'
//   const path = '/calculus/definitions'
//   const canonicalUrl = `${baseUrl}${path}`
  
//   const lastModified = new Date().toISOString() // Update this when content changes
  
//   return {
//     props: {
//       calculusTermsList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function AlgebraDefinitionsPage({ 
//   calculusTermsList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const router = useRouter()

//   // Redirect if URL has query parameters or trailing slash
//   React.useEffect(() => {
//     if (router.asPath !== '/calculus/definitions') {
//       router.push('/calculus/definitions')
//     }
//   }, [router])

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Calculus Terms and Definitions",
//     "description": "Comprehensive list of calculus terms, definitions and examples for students and educators.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Calculus Terms and Definitions",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Calculus Terms and Definitions | Learn Math Class"
//   const pageDescription = "Complete guide to calculus terminology, definitions, and examples. Perfect for students learning algebra fundamentals and mathematical concepts."

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
//       <br />
//       <br />
//       <br />
//       <br />
//       <Breadcrumb />
//       <OperaSidebar
//         side='right'
//         // topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='300px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <main>
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
//           Calculus Terms and Definitions
//         </h1>
//         <CategoriesList
//         data={calculusTermsList}
//         baseUrl='/calculus/definitions'
//         />
//         {/* <FormulaAccordionWrapper
//           groupByField={'category'}
//           data={calculusTermsList}
//           type='Definition'
//         /> */}
//         <br />
        
// <DefinitionGlossary
//   data={calculusTermsList}
//   groupByField="category"
//   type="Definition"
// />

//         <br />
//         <br />
//          {/* <ScrollUpButton/> */} 
//       </main>
//     </>
//   );
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import '../../../pages/pages.css'
import DefinitionGlossary from '@/app/components/examples/DefinitionsGlossary'

export async function getStaticProps() {
  const { default: calculusTermsList } = await import('@/app/api/db/definitions/calculus/calculusDefinitions')

  const keyWords = [
    'calculus definitions',
    'calculus terms',
    'calculus glossary',
    'calculus vocabulary',
    'limit definition calculus',
    'derivative definition',
    'integral definition',
    'continuity and differentiability',
    'antiderivative definition',
    'Riemann sum definition',
    'critical point inflection point',
    'concavity and monotonicity',
    'definite indefinite integral terms',
    'calculus concepts explained'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 29 calculus terms into three categories that follow the natural progression of the subject.

[Limits](#category_limits) establishes the foundational language with 6 entries: limit, one-sided limit, continuity, discontinuity, indeterminate form, and asymptote. These terms define what it means for a function to approach a value and when that approach breaks down.

[Derivatives](#category_derivatives) covers 14 entries on rates of change and curve analysis: the derivative itself, differentiability, differentials, higher-order derivatives, partial derivatives, instantaneous and average rates of change, tangent lines, critical points, local extrema, concavity, inflection points, and monotonic functions. Together these terms describe how functions change and how their graphs bend.

[Integrals](#category_integrals) spans 9 entries on accumulation: antiderivatives, indefinite and definite integrals, the integrand, bounds of integration, Riemann sums, improper integrals, signed area, and the average value of a function. These terms cover both the process of reversing differentiation and the geometric interpretation of area under a curve.

Each definition includes an intuitive explanation, key properties, common errors where applicable, and links to the detailed lesson page. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a limit in calculus?",
      answer: "A limit describes the value a function approaches as the input approaches a specified point. The function does not need to equal that value at the point itself -- the limit concerns only the behavior during the approach. A two-sided limit exists only when both one-sided limits exist and agree."
    },
    obj2: {
      question: "What is the relationship between continuity and differentiability?",
      answer: "Continuity means the function has no breaks, jumps, or holes at a point. Differentiability means the function has a well-defined tangent line there. Differentiability implies continuity, but not the reverse -- a function can be continuous at a corner or cusp where no single tangent line exists."
    },
    obj3: {
      question: "What is the difference between a definite and indefinite integral?",
      answer: "An indefinite integral produces a family of functions (antiderivatives) plus a constant C. A definite integral produces a single number representing the accumulated signed area under the curve between two bounds. The Fundamental Theorem of Calculus connects the two: evaluate the antiderivative at the bounds and subtract."
    },
    obj4: {
      question: "What is a critical point and how is it used?",
      answer: "A critical point is a value where the derivative equals zero or does not exist. Critical points are the only candidates for local maxima and minima. They are classified using the first derivative test (sign change of the derivative) or the second derivative test (sign of the second derivative)."
    },
    obj5: {
      question: "What does signed area mean in integration?",
      answer: "The definite integral measures signed area: regions where the function is positive contribute positive area, and regions where it is negative contribute negative area. The integral can be zero even when substantial area exists, if positive and negative regions cancel. To find total area, integrate the absolute value of the function."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Calculus Terms and Definitions",
      "description": "Complete glossary of calculus terms with definitions and examples. Covers limits, derivatives, integrals, continuity, and graph analysis.",
      "url": "https://www.learnmathclass.com/calculus/definitions",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Calculus Terminology"
      },
      "teaches": [
        "Limits, one-sided limits, and continuity",
        "Discontinuities, indeterminate forms, and asymptotes",
        "Derivatives, differentiability, and tangent lines",
        "Critical points, local extrema, concavity, and inflection points",
        "Antiderivatives, indefinite and definite integrals",
        "Riemann sums, improper integrals, and signed area"
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
          "name": "Calculus",
          "item": "https://www.learnmathclass.com/calculus"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Calculus Terms and Definitions",
          "item": "https://www.learnmathclass.com/calculus/definitions"
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
      calculusTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Calculus Definitions & Terms | Learn Math Class",
        description: "Complete glossary of calculus terms with definitions and examples. Covers limits, derivatives, integrals, continuity, and graph analysis.",
        keywords: keyWords.join(", "),
        url: "/calculus/definitions",
        name: "Calculus Terms and Definitions"
      }
    }
  }
}

export default function CalculusDefinitionsPage({
  calculusTermsList,
  faqQuestions,
  schemas,
  introArticle,
  seoData
}) {

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
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
      {/* <GenericNavbar/> */}
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <main>
        <h1 className='title' style={{marginTop:'0px', marginBottom:'10px'}}>
          Calculus Terms and Definitions
        </h1>
        <CategoriesList
          data={calculusTermsList}
          baseUrl='/calculus/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={calculusTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
      </main>
    </>
  )
}