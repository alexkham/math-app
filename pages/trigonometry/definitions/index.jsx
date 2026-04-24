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
//   const { default: trigonometryTermsList } = await import('@/app/api/db/definitions/trigonometry/trigonometryDefinitions')
  
//   const keyWords = [
//     'trigonometry terminology',
//     'trigonometry terms',
//     'trigonometry definitions',
//     'trigonometry definition and examples',
//     'trigonometry vocabulary'
//   ]

//   // Define the canonical URL
//   const baseUrl = 'https://www.learnmathclass.com'
//   const path = '/trigonometry/definitions'
//   const canonicalUrl = `${baseUrl}${path}`
  
//   const lastModified = new Date().toISOString() // Update this when content changes
  
//   return {
//     props: {
//       trigonometryTermsList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function TrigonometryDefinitionsPage({ 
//   trigonometryTermsList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const router = useRouter()

//   // Redirect if URL has query parameters or trailing slash
//   React.useEffect(() => {
//     if (router.asPath !== '/trigonometry/definitions') {
//       router.push('/trigonometry/definitions')
//     }
//   }, [router])

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Trigonometry Terms and Definitions",
//     "description": "Comprehensive list of trigonometry terms, definitions and examples for students and educators.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Trigonometry Terms and Definitions",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Trigonometry Terms and Definitions | Learn Math Class"
//   const pageDescription = "Complete guide to trigonometryterminology, definitions, and examples. Perfect for students learning trigonometry fundamentals and mathematical concepts."


//   const termsList=trigonometryTermsList.map((item)=>item.name);
//   console.log('Trigonometry terms:'+termsList)

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
//           Trigonometry Terms and Definitions
//         </h1>
//         <CategoriesList
//         data={trigonometryTermsList}
//         baseUrl='/trigonometry/definitions'
//         introArticle={{
//     content: `This reference covers the essential vocabulary of probability theory -- from foundational concepts like sample spaces and events, through random variables and distribution functions, to multivariate probability and generating functions. Whether you are beginning your study or reviewing for an exam, each entry provides a precise definition, intuitive explanation, and links to detailed pages where the topic is developed further.`
//   }}
        

//         />
//         {/* <FormulaAccordionWrapper
//           groupByField={'category'}
//           data={trigonometryTermsList}
//           type='Definition'
//         /> */}
//         <br />
//         <DefinitionGlossary
//   data={trigonometryTermsList}
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
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import Head from 'next/head'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import DefinitionGlossary from '@/app/components/examples/DefinitionsGlossary'

export async function getStaticProps() {
  const { default: trigonometryTermsList } = await import('@/app/api/db/definitions/trigonometry/trigonometryDefinitions')
  
  const keyWords = [
    'trigonometry definitions',
    'trigonometry terms',
    'trigonometry vocabulary',
    'trigonometry glossary',
    'trig terms and definitions',
    'trigonometric functions definitions',
    'sine cosine tangent definitions',
    'unit circle terminology',
    'radian degree definition',
    'trigonometry reference angle',
    'amplitude period phase shift',
    'right triangle trigonometry terms',
    'trig function properties',
    'trigonometry concepts explained'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 33 essential trigonometry terms into four categories, each building on the previous to form a complete foundation for the subject.

[Angles & Measurement](#category_angles_&_measurement) forms the largest group, covering angle types, degree and radian measurement systems, arc length and sector area formulas, the unit circle, and key angle relationships including coterminal, reference, complementary, and supplementary angles. These terms establish the measurement framework that all trigonometric work depends on.

[Functions](#category_functions) defines the six trigonometric functions -- sine, cosine, tangent, and their reciprocals -- along with trigonometric ratios, periodicity, and inverse trigonometric functions. Each entry includes domain, range, and key properties.

[Right Triangle](#category_right_triangle) covers the three sides of a right triangle -- hypotenuse, opposite, and adjacent -- whose ratios define the trigonometric functions geometrically. Understanding which side is which relative to a chosen angle is essential for applying SOH-CAH-TOA correctly.

[Graphs](#category_graphs) addresses the parameters that describe sinusoidal curves: amplitude, period, phase shift, and frequency. These terms are critical for analyzing transformations of trigonometric graphs and modeling periodic phenomena.

Each definition includes an intuitive explanation, key properties, worked examples where applicable, and links to the detailed lesson page where the concept is developed further. Use the search bar to filter terms or the category pills above to jump to a specific section.`
  }

  const faqQuestions = {
    obj1: {
      question: "What are the basic trigonometry terms I need to know?",
      answer: "The foundational trigonometry terms include angle, degree, radian, sine, cosine, tangent, and their reciprocals (cosecant, secant, cotangent). You also need to understand right triangle sides (hypotenuse, opposite, adjacent) and the unit circle, which connects angle measurement to function values."
    },
    obj2: {
      question: "What is the difference between a degree and a radian?",
      answer: "A degree divides a full rotation into 360 equal parts, while a radian is the angle formed when the arc length equals the radius. A full rotation is 360 degrees or 2pi radians. Radians are required for calculus formulas and the arc length equation s = r times theta."
    },
    obj3: {
      question: "What are the six trigonometric functions?",
      answer: "The six trigonometric functions are sine, cosine, tangent, cosecant, secant, and cotangent. Sine, cosine, and tangent are defined as ratios of sides in a right triangle (SOH-CAH-TOA), and cosecant, secant, and cotangent are their respective reciprocals."
    },
    obj4: {
      question: "What do amplitude, period, and phase shift mean?",
      answer: "Amplitude is the maximum vertical distance from the midline of a sinusoidal graph. Period is the horizontal length of one complete cycle. Phase shift is the horizontal displacement from the standard starting position. Together they describe the shape and position of a trigonometric graph."
    },
    obj5: {
      question: "What is a reference angle in trigonometry?",
      answer: "A reference angle is the acute angle between the terminal side of a given angle and the x-axis, always between 0 and 90 degrees. It simplifies evaluation of trigonometric functions by reducing any angle to its first-quadrant equivalent, then applying the appropriate sign based on the quadrant."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometry Terms and Definitions",
      "description": "Complete glossary of trigonometry terms with definitions and examples. Covers angles, trig functions, right triangles, unit circle, and graph properties.",
      "url": "https://www.learnmathclass.com/trigonometry/definitions",
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
        "name": "Trigonometry Terminology"
      },
      "teaches": [
        "Angle measurement in degrees and radians",
        "Six trigonometric functions and their properties",
        "Right triangle side naming and trigonometric ratios",
        "Unit circle coordinates and standard position",
        "Graph parameters: amplitude, period, phase shift, frequency",
        "Reference angles, coterminal angles, and angle relationships"
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
          "name": "Trigonometry",
          "item": "https://www.learnmathclass.com/trigonometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trigonometry Terms and Definitions",
          "item": "https://www.learnmathclass.com/trigonometry/definitions"
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
      trigonometryTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Trigonometry Definitions & Terms | Learn Math Class",
        description: "Complete glossary of trigonometry terms with definitions and examples. Covers angles, trig functions, right triangles, unit circle, and graph properties.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/definitions",
        name: "Trigonometry Terms and Definitions"
      }
    }
  }
}

export default function TrigonometryDefinitionsPage({ 
  trigonometryTermsList, 
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
          Trigonometry Terms and Definitions
        </h1>
        <CategoriesList
          data={trigonometryTermsList}
          baseUrl='/trigonometry/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={trigonometryTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  )
}