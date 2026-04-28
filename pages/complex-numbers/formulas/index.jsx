
// import React from 'react'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import '../../../pages/pages.css'

// export async function getStaticProps() {
//   const { default: complexNumbersFormulasList } = await import('@/app/api/db/formulas/complex-numbers/complexNumbersFormulas')
  
//   const keyWords = [
//     'complex numbers formulas',
//     'complex numbers examples',
//     'complex numbers',
//     'complex numbers equation',
//     'complex numbers rules'
//   ]

//   // Define the canonical URL
//   const baseUrl = 'https://www.learnmathclass.com'
//   const path = '/complex-numbers/formulas'
//   const canonicalUrl = `${baseUrl}${path}`
  
//   const lastModified = new Date().toISOString() // Update this when content changes
  
//   return {
//     props: {
//       complexNumbersFormulasList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function AlgebraFormulasPage({ 
//   complexNumbersFormulasList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const router = useRouter()

//   // Redirect if URL has query parameters or trailing slash
//   React.useEffect(() => {
//     if (router.asPath !== '/complex-numbers/formulas') {
//       router.push('/complex-numbers/formulas')
//     }
//   }, [router])

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Algebra Formulas and Examples",
//     "description": "Comprehensive collection of complex numbers formulas with examples and explanations. Essential reference for students and educators.",
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
//   const pageDescription = "Complete collection of complex numbers formulas with step-by-step examples and explanations. Perfect for students and teachers learning complex numbersic concepts."

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
//           Complex Numbers Formulas
//         </h1>
//         <FormulasTOC data={complexNumbersFormulasList} />
//         {/* <div style={{transform:'scale(0.95)'}}>
//           <FormulaAccordionWrapper 
//             data={algebraFormulasList}
//             groupByField={['category']}
//           />
//         </div> */}
//         <br/>
//          {/* <ScrollUpButton/> */} 
//       </main>
//     </>
//   );
// }



import React from 'react'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../../../pages/pages.css'

export async function getStaticProps() {
  const { default: complexNumbersFormulasList } = await import('@/app/api/db/formulas/complex-numbers/complexNumbersFormulas')
  
  const keyWords = [
    'complex numbers formulas',
    'complex number operations',
    'complex number multiplication',
    'complex number division formula',
    'modulus of complex number',
    'argument of complex number',
    'polar form complex number',
    'Euler formula complex numbers',
    'complex conjugate formula',
    'De Moivre theorem',
    'complex number addition',
    'rectangular to polar conversion',
    'complex numbers examples',
    'complex number rules',
    'complex numbers reference sheet'
  ]

  const faqQuestions = {
    obj1: {
      question: "What are the basic complex number formulas?",
      answer: "The basic complex number formulas cover addition, subtraction, multiplication, and division of numbers in the form a + bi. Addition and subtraction combine real and imaginary parts separately. Multiplication uses the distributive property with i squared equal to negative one. Division multiplies numerator and denominator by the conjugate."
    },
    obj2: {
      question: "How do you find the modulus of a complex number?",
      answer: "The modulus (absolute value) of a complex number z = a + bi is found using the formula |z| = sqrt(a squared + b squared). It represents the distance from the origin to the point (a, b) in the complex plane."
    },
    obj3: {
      question: "What is the polar form of a complex number?",
      answer: "The polar form expresses a complex number as z = r(cos(theta) + i sin(theta)), where r is the modulus and theta is the argument (angle). This form simplifies multiplication, division, and exponentiation of complex numbers."
    },
    obj4: {
      question: "What is De Moivre's theorem?",
      answer: "De Moivre's theorem states that for a complex number in polar form, raising it to the nth power gives r^n(cos(n*theta) + i sin(n*theta)). It is used to compute powers and roots of complex numbers efficiently."
    },
    obj5: {
      question: "How do you divide two complex numbers?",
      answer: "To divide complex numbers, multiply both the numerator and denominator by the conjugate of the denominator. This eliminates the imaginary part from the denominator, producing a real denominator that allows separation into real and imaginary components."
    }
  }

  const seoData = {
    title: "Complex Numbers Formulas & Examples | Learn Math Class",
    description: "Complete collection of complex numbers formulas with step-by-step examples. Covers polar form, modulus, conjugate, De Moivre's theorem, and operations.",
    keywords: keyWords.join(", "),
    url: "/complex-numbers/formulas",
    name: "Complex Numbers Formulas and Examples"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Complex Numbers Formulas and Examples",
      "description": "Complete collection of complex numbers formulas with step-by-step examples. Covers polar form, modulus, conjugate, De Moivre's theorem, and operations.",
      "url": "https://www.learnmathclass.com/complex-numbers/formulas",
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
        "name": "Complex Numbers"
      },
      "teaches": [
        "Complex number arithmetic operations",
        "Modulus and argument of complex numbers",
        "Polar and rectangular form conversions",
        "Complex conjugate properties",
        "De Moivre's theorem and applications",
        "Euler's formula for complex numbers"
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
          "name": "Complex Numbers",
          "item": "https://www.learnmathclass.com/complex-numbers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Complex Numbers Formulas and Examples",
          "item": "https://www.learnmathclass.com/complex-numbers/formulas"
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
      complexNumbersFormulasList,
      faqQuestions,
      schemas,
      seoData,
    }
  }
}

export default function ComplexNumbersFormulasPage({ 
  complexNumbersFormulasList, 
  faqQuestions,
  schemas,
  seoData
}) {
  const router = useRouter()

  React.useEffect(() => {
    if (router.asPath !== '/complex-numbers/formulas') {
      router.push('/complex-numbers/formulas')
    }
  }, [router])

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
        // topOffset='55px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb/>
      <main>
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
          Complex Numbers Formulas
        </h1>
        <FormulasTOC data={complexNumbersFormulasList} />
        {/* <div style={{transform:'scale(0.95)'}}>
          <FormulaAccordionWrapper 
            data={algebraFormulasList}
            groupByField={['category']}
          />
        </div> */}
        <br/>
         {/* <ScrollUpButton/> */} 
      </main>
    </>
  );
}