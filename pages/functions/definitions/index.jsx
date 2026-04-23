// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import DefinitionGlossary from '@/app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: functionsTermsList } = await import('@/app/api/db/definitions/functions/functionsDefinitions')
  
//   const keyWords = [
//     'functions terminology',
//     'functions terms',
//     'functions definitions',
//     'functions definition and examples',
//     'functions vocabulary'
//   ]

//   // Define the canonical URL
//   const baseUrl = 'https://www.learnmathclass.com'
//   const path = '/functions/definitions'
//   const canonicalUrl = `${baseUrl}${path}`
  
//   const lastModified = new Date().toISOString() // Update this when content changes
  
//   return {
//     props: {
//       functionsTermsList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function FunctionsDefinitionsPage({ 
//   functionsTermsList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const router = useRouter()

//   // Redirect if URL has query parameters or trailing slash
//   React.useEffect(() => {
//     if (router.asPath !== '/functions/definitions') {
//       router.push('/functions/definitions')
//     }
//   }, [router])

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Functions Terms and Definitions",
//     "description": "Comprehensive list of functions terms, definitions and examples for students and educators.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Functions Terms and Definitions",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Functions Terms and Definitions | Learn Math Class"
//   const pageDescription = "Complete guide to functionsterminology, definitions, and examples. Perfect for students learning functions fundamentals and mathematical concepts."


//   const termsList=functionsTermsList.map((item)=>item.name);
//   console.log('Functions terms:'+termsList)

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

//       {/* <GenericNavbar /> */}
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
//         <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>
//           Functions Terms and Definitions
//         </h1>
//         <CategoriesList
//         data={functionsTermsList}
//         baseUrl='/functions/definitions'
//         />
//         {/* <FormulaAccordionWrapper
//           groupByField={'category'}
//           data={functionsTermsList}
//           type='Definition'
//         /> */}
//         <br />
//         <DefinitionGlossary
//   data={functionsTermsList}
//   groupByField="category"
//   type="Definition"
// />

//         <br />
//         <br />
//         {/* <ScrollUpButton /> */}
//       </main>
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '../../pages.css'
import Head from 'next/head'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import DefinitionGlossary from '@/app/components/examples/DefinitionsGlossary'

export async function getStaticProps() {
  const { default: functionsTermsList } = await import('@/app/api/db/definitions/functions/functionsDefinitions')

  const keyWords = [
    'functions definitions',
    'functions terms',
    'functions vocabulary',
    'functions glossary',
    'domain and range definitions',
    'function types classification',
    'inverse function definition',
    'composition of functions',
    'even and odd functions',
    'piecewise function definition',
    'function transformations terms',
    'parent functions list',
    'linear quadratic function definitions',
    'math functions terminology'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 28 essential functions terms into six categories that build from foundational ideas to graphing and transformations.

[Core Concepts](#category_core_concepts) establishes the foundation with 6 entries: function, relation, domain, range, independent variable, and dependent variable. These terms define what a function is, what goes in, and what comes out.

[Types & Classification](#category_types_&_classification) covers 6 entries on how functions are categorized: one-to-one, even, odd, increasing, decreasing, and piecewise functions. Each classification describes a structural property that determines behavior and eligibility for operations like inversion.

[Operations & Inverses](#category_operations_&_inverses) addresses 2 entries on combining and reversing functions: composition chains two functions in sequence, and the inverse function undoes what the original does.

[Function Families](#category_function_families) presents 5 parent functions and their key properties: linear, quadratic, constant, absolute value, and the general concept of a parent function. Each family defines a characteristic shape that transformations modify.

[Graph Features](#category_graph_features) defines 4 entries on what you read from a graph: zeros (x-intercepts), asymptotes, local maxima, and local minima. These features describe the curve's intersections, boundaries, and turning points.

[Transformations](#category_transformations) completes the glossary with 5 entries on modifying graphs: the general transformation framework, translations (shifts), reflections (flips), and dilations (stretches and compressions).

Each definition includes intuitive explanations, key properties, common errors, and links to detailed lesson pages. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a function in math?",
      answer: "A function is a rule that assigns exactly one output to each input. If you put the same value in, you always get the same value out. The vertical line test checks this graphically: if any vertical line crosses the graph more than once, the relation is not a function."
    },
    obj2: {
      question: "What is the difference between domain and range?",
      answer: "The domain is the set of all valid inputs a function can accept. The range is the set of all outputs the function actually produces. For example, f(x) = x squared has domain all real numbers but range only zero and above, since squaring never produces a negative result."
    },
    obj3: {
      question: "What does one-to-one mean for a function?",
      answer: "A one-to-one function never repeats an output value -- distinct inputs always produce distinct outputs. This property is required for an inverse function to exist. Graphically, a function is one-to-one if every horizontal line crosses its graph at most once."
    },
    obj4: {
      question: "What are even and odd functions?",
      answer: "An even function satisfies f(-x) = f(x) and is symmetric about the y-axis. Examples include x squared and cosine. An odd function satisfies f(-x) = -f(x) and has rotational symmetry about the origin. Examples include x cubed and sine."
    },
    obj5: {
      question: "What are function transformations?",
      answer: "Transformations modify a parent function's graph by shifting it (translation), flipping it (reflection), or stretching and compressing it (dilation). The general form g(x) = a times f(b(x - h)) + k captures all four types, where h and k control position and a and b control shape."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Functions Terms and Definitions",
      "description": "Complete glossary of function terms with definitions and examples. Covers domain, range, function types, composition, inverses, and graph transformations.",
      "url": "https://www.learnmathclass.com/functions/definitions",
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
        "name": "Functions Terminology"
      },
      "teaches": [
        "Function definition, domain, and range",
        "Function classification: one-to-one, even, odd, increasing, decreasing",
        "Composition and inverse functions",
        "Parent functions and function families",
        "Graph features: zeros, asymptotes, and extrema",
        "Transformations: translations, reflections, and dilations"
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
          "name": "Functions Terms and Definitions",
          "item": "https://www.learnmathclass.com/functions/definitions"
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
      functionsTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Functions Definitions & Terms | Learn Math Class",
        description: "Complete glossary of function terms with definitions and examples. Covers domain, range, function types, composition, inverses, and graph transformations.",
        keywords: keyWords.join(", "),
        url: "/functions/definitions",
        name: "Functions Terms and Definitions"
      }
    }
  }
}

export default function FunctionsDefinitionsPage({
  functionsTermsList,
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

      {/* <GenericNavbar /> */}
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
        <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>
          Functions Terms and Definitions
        </h1>
        <CategoriesList
          data={functionsTermsList}
          baseUrl='/functions/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={functionsTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
      </main>
    </>
  )
}