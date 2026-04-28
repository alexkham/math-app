

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'
// import Head from 'next/head'

// export async function getStaticProps() {
//   const { default: trigonometryFormulaList } = await import('@/app/api/db/formulas/trigonometry/trigonometryFormulas')
  
//   const keyWords = [
//     'trigonometry formulas',
//     'trigonometry identities',
//     'trigonometric identities',
//     'trig formula',
//     'trigonometry laws'
//   ]

//   const canonicalUrl = 'https://www.learnmathclass.com/trigonometry/formulas'
//   const lastModified = new Date().toISOString()
  
//   return {
//     props: {
//       trigonometryFormulaList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function TrigonometryFormulasPage({ 
//   trigonometryFormulaList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Trigonometry Formulas and Identities",
//     "description": "Comprehensive collection of trigonometry formulas, identities, and laws with examples and detailed explanations.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Trigonometry Formulas",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Trigonometry Formulas and Identities | Learn Math Class"
//   const pageDescription = "Complete collection of trigonometry formulas, identities, and laws with step-by-step examples. Essential reference for trigonometry students and educators."

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

//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar
//         side='right'
//         topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='300px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />

//       <Breadcrumb/>
//       <main>
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
//           Trigonometry Formulas
//         </h1>
//         <FormulasTOC data={trigonometryFormulaList}/>
//         {/* <div style={{transform:'scale(0.95)'}}>
//           <FormulaAccordionWrapper 
//             data={trigonometryFormulaList}
//             groupByField={['category']}
//           />
//         </div> */}
//         <br/>
//         {/* <ScrollUpButton /> */}
//       </main>
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'

export async function getStaticProps() {
  const { default: trigonometryFormulaList } = await import('@/app/api/db/formulas/trigonometry/trigonometryFormulas')

  const keyWords = [
    'trigonometry formulas',
    'trigonometric identities',
    'Pythagorean identity',
    'sum and difference formulas',
    'double angle formulas',
    'half-angle formulas',
    'reciprocal identities',
    'cofunction identities',
    'law of sines',
    'law of cosines',
    'product-to-sum formulas',
    'sum-to-product formulas',
    'power-reducing formulas',
    'inverse trig identities',
    'trig formulas reference sheet'
  ]

  const faqQuestions = {
    obj1: {
      question: "What are the Pythagorean identities?",
      answer: "The three Pythagorean identities are sin^2(theta) + cos^2(theta) = 1, 1 + tan^2(theta) = sec^2(theta), and 1 + cot^2(theta) = csc^2(theta). The last two are derived by dividing the first identity by cos^2(theta) and sin^2(theta) respectively."
    },
    obj2: {
      question: "What are the double angle formulas?",
      answer: "The double angle formulas express sin(2A), cos(2A), and tan(2A) in terms of single-angle functions. sin(2A) = 2sin(A)cos(A), cos(2A) = cos^2(A) - sin^2(A) with two alternate forms, and tan(2A) = 2tan(A)/(1 - tan^2(A))."
    },
    obj3: {
      question: "What is the difference between the law of sines and the law of cosines?",
      answer: "The law of sines relates each side to the sine of its opposite angle as equal ratios a/sin(A) = b/sin(B) = c/sin(C). The law of cosines relates all three sides to the cosine of one angle as c^2 = a^2 + b^2 - 2ab*cos(C) and generalizes the Pythagorean theorem."
    },
    obj4: {
      question: "What are the sum and difference formulas in trigonometry?",
      answer: "The sum and difference formulas express sin(A +/- B), cos(A +/- B), and tan(A +/- B) in terms of functions of A and B separately. For example sin(A + B) = sin(A)cos(B) + cos(A)sin(B). They are the basis for deriving double angle, half-angle, and product-to-sum identities."
    },
    obj5: {
      question: "What are the general solutions for trigonometric equations?",
      answer: "The general solutions capture all angles satisfying a trig equation. For sin(theta) = k, theta = (-1)^n arcsin(k) + n*pi. For cos(theta) = k, theta = +/- arccos(k) + 2n*pi. For tan(theta) = k, theta = arctan(k) + n*pi, where n is any integer."
    }
  }

  const seoData = {
    title: "Trigonometry Formulas & Identities | Learn Math Class",
    description: "Complete trigonometry formulas reference with 50+ identities. Covers Pythagorean, double angle, half-angle, sum and difference, law of sines and cosines.",
    keywords: keyWords.join(", "),
    url: "/trigonometry/formulas",
    name: "Trigonometry Formulas and Identities"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Trigonometry Formulas and Identities",
      "description": "Complete trigonometry formulas reference with 50+ identities. Covers Pythagorean, double angle, half-angle, sum and difference, law of sines and cosines.",
      "url": "https://www.learnmathclass.com/trigonometry/formulas",
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
        "name": "Trigonometry"
      },
      "teaches": [
        "Reciprocal, quotient, and Pythagorean identities",
        "Sum and difference, double angle, and half-angle formulas",
        "Even-odd, cofunction, and periodicity identities",
        "Product-to-sum and sum-to-product conversions",
        "Law of sines, law of cosines, and Heron's formula",
        "Inverse trigonometric identities and general solutions"
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
          "name": "Trigonometry Formulas and Identities",
          "item": "https://www.learnmathclass.com/trigonometry/formulas"
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
      trigonometryFormulaList,
      faqQuestions,
      schemas,
      seoData,
    }
  }
}

export default function TrigonometryFormulasPage({
  trigonometryFormulaList,
  faqQuestions,
  schemas,
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
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <Breadcrumb/>
      <main>
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
          Trigonometry Formulas
        </h1>
        <FormulasTOC data={trigonometryFormulaList}/>
        {/* <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={trigonometryFormulaList}
            groupByField={['category']}
          />
        </div> */}
        <br/>
        {/* <ScrollUpButton /> */}
      </main>
    </>
  )
}