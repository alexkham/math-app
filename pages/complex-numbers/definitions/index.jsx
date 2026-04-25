
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import '../../../pages/pages.css'
// import DefinitionGlossary from '../../../app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: complexNumbersTermsList } = await import('@/app/api/db/definitions/complex-numbers/complexNumbersDefinitions')

//   const keyWords = [
//     'complex numbers definitions',
//     'complex numbers terms',
//     'complex numbers vocabulary',
//     'complex numbers glossary',
//     'complex numbers terminology list',
//     'equation definition complex numbers',
//     'polynomial terms',
//     'roots and radicals definitions',
//     'logarithm definitions',
//     'exponent rules terminology',
//     'math definitions for students',
//     'complex numbers concepts and examples',
//     'learn complex numbers terms'
//   ]

//   const introArticle = {
//     heading: "About This Glossary",
//     content: `This glossary organizes 99 complex numbers terms into six categories that together cover the core vocabulary of the subject.

// [Equations](#category_equations) defines the language of equation-solving: variables, expressions, solution sets, equivalent equations, conditional equations, identities, contradictions, the discriminant, domain restrictions, and absolute value. These 17 terms establish the framework for every solving technique that follows.

// [Roots](#category_roots) covers radicals and their properties across 19 entries: square roots, cube roots, nth roots, the index-radicand-radical anatomy, product/quotient/power rules, simplification, rationalization, conjugates, like radicals, radical equations, extraneous solutions, rational exponents, and radical functions.

// [Logarithms](#category_logarithms) addresses the inverse of exponentiation in 15 entries: the logarithm itself, base and argument restrictions, common and natural logarithms, Euler's number, the product/quotient/power/change-of-base rules, monotonicity, one-to-one property, logarithmic equations, inequalities, and functions.

// [Polynomials](#category_polynomials) spans 23 entries covering polynomial structure (terms, degree, monomials, binomials, trinomials, like terms), factoring patterns (GCF, difference of squares, perfect square trinomials, sum/difference of cubes), roots and multiplicity, division methods (long division, synthetic division), and key theorems (Remainder, Factor, Rational Root, Descartes' Rule, Fundamental Theorem, Vieta's Formulas).

// [Exponents](#category_exponents) traces the concept of powers through 15 entries: base, exponent, natural/zero/negative/rational/irrational exponents, the five exponent rules (product, quotient, power-of-a-power, power-of-a-product, power-of-a-quotient), exponential equations, inequalities, and functions.

// [Inequalities](#category_inequalities) rounds out the glossary with 10 entries on inequality notation, interval notation, compound inequalities, sign analysis, critical points, and linear/quadratic/polynomial/rational/absolute-value inequality types.

// Each definition includes key properties, worked examples, and links to the detailed lesson page. Use the search bar or category filters above to navigate.`
//   }

//   const faqQuestions = {
//     obj1: {
//       question: "What topics does this complex numbers glossary cover?",
//       answer: "The glossary covers six major complex numbers categories: Equations (variables, solutions, identities, discriminant), Roots and Radicals (square roots, cube roots, rationalizing, surds), Logarithms (natural log, common log, log identities, change of base), Polynomials (degree, factoring, Vieta's formulas, remainder theorem), Exponents (laws of exponents, exponential growth, scientific notation), and Inequalities (interval notation, sign analysis, compound inequalities)."
//     },
//     obj2: {
//       question: "What is the difference between an expression and an equation?",
//       answer: "An expression is a mathematical phrase like 3x + 2 that represents a quantity but makes no claim about equality. An equation uses the equals sign to assert that two expressions have the same value, such as 3x + 2 = 8. Expressions are simplified or evaluated; equations are solved."
//     },
//     obj3: {
//       question: "What are the main types of equations in complex numbers?",
//       answer: "Algebra classifies equations by degree: linear (degree 1), quadratic (degree 2), cubic (degree 3), and higher. Equations can also be conditional (true for specific values), identities (true for all values), or contradictions (true for no values). Each type requires different solving techniques."
//     },
//     obj4: {
//       question: "How are logarithms related to exponents?",
//       answer: "Logarithms are the inverse of exponentiation. The statement log base b of x equals y means b raised to the power y equals x. For example, log base 2 of 8 equals 3 because 2 cubed is 8. This inverse relationship is used to solve exponential equations."
//     },
//     obj5: {
//       question: "What is a polynomial and how is it classified?",
//       answer: "A polynomial is an expression built from variables and coefficients using addition, subtraction, multiplication, and non-negative integer exponents. Polynomials are classified by degree: degree 1 is linear, degree 2 is quadratic, degree 3 is cubic. The degree determines the maximum number of roots and which solving methods apply."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Algebra Terms and Definitions",
//       "description": "Comprehensive complex numbers glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
//       "url": "https://www.learnmathclass.com/complex numbers/definitions",
//       "inLanguage": "en-US",
//       "learningResourceType": "Reference",
//       "educationalLevel": "High School, College",
//       "educationalUse": "Learning",
//       "audience": {
//         "@type": "EducationalAudience",
//         "educationalRole": "student"
//       },
//       "about": {
//         "@type": "Thing",
//         "name": "Algebra Terminology"
//       },
//       "teaches": [
//         "Equation types: conditional, identity, and contradiction",
//         "Roots and radicals including simplification and rationalization",
//         "Logarithmic functions, identities, and equations",
//         "Polynomial structure, division, and factoring",
//         "Exponent rules and exponential functions",
//         "Connections between roots, logarithms, and exponents"
//       ],
//       "keywords": keyWords.join(", "),
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString()
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Algebra",
//           "item": "https://www.learnmathclass.com/complex numbers"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Algebra Definitions",
//           "item": "https://www.learnmathclass.com/complex numbers/definitions"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }

//   return {
//     props: {
//       complexNumbersTermsList,
//       faqQuestions,
//       schemas,
//       introArticle,
//       seoData: {
//         title: "Algebra Definitions: Terms & Examples | Learn Math Class",
//         description: "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
//         hubDescription: "A clear vocabulary is the foundation of every algebra course -- without it, formulas look like noise and word problems become guesswork. This glossary gives each concept a precise definition, concrete examples, and the context needed to connect it to the rest of the subject. Use it as a reference while solving homework, reviewing for exams, or bridging gaps from earlier courses. Terms are organized into six searchable categories: [Equations](!/algebra/definitions#category_equations) (variables, solution sets, identities, contradictions, discriminant, absolute value), [Roots and Radicals](!/algebra/definitions#category_roots) (square roots, cube roots, nth roots, simplification, rationalization, surds), [Logarithms](!/algebra/definitions#category_logarithms) (natural log, common log, binary log, identities, equations, change of base), [Polynomials](!/algebra/definitions#category_polynomials) (degree, factoring, division, Vieta's formulas, Fundamental Theorem of Algebra, Rational Root Theorem), [Exponents](!/algebra/definitions#category_exponents) (laws of exponents, exponential functions, growth and decay, scientific notation), and [Inequalities](!/algebra/definitions#category_inequalities) (interval notation, sign analysis, compound inequalities, polynomial and rational inequalities). Each entry includes key properties and worked examples so the definition is never just a sentence -- it is a starting point for understanding.",
//         keywords: keyWords.join(", "),
//         url: "/complex-numbers/definitions",
//         name: "Algebra Terms and Definitions"
//       }
//     }
//   }
// }

// export default function AlgebraDefinitionsPage({
//   complexNumbersTermsList,
//   faqQuestions,
//   schemas,
//   introArticle,
//   seoData
// }) {

//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.learningResource)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.breadcrumb)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.faq)
//           }}
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
//         sidebarWidth='45px'
//         panelWidth='300px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <main>
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
//           Complex Numbers Terms and Definitions
//         </h1>
//         <CategoriesList data={complexNumbersTermsList}
//           baseUrl='/complex-numbers/definitions'
//           introArticle={introArticle}
//         />
//         <br />
//         <DefinitionGlossary
//           data={complexNumbersTermsList}
//           groupByField="category"
//           type="Definition"
//         />
//         <br />
//         <br />
//       </main>
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Head from 'next/head'
import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
import '../../../pages/pages.css'
import DefinitionGlossary from '../../../app/components/examples/DefinitionsGlossary'

export async function getStaticProps() {
  const { default: complexNumbersTermsList } = await import('@/app/api/db/definitions/complex-numbers/complexNumbersDefinitions')

  const keyWords = [
    'complex numbers definitions',
    'complex numbers terms',
    'complex numbers glossary',
    'complex number vocabulary',
    'imaginary unit definition',
    'complex plane terminology',
    'modulus and argument',
    'complex conjugate definition',
    'algebraic form complex numbers',
    'trigonometric form complex numbers',
    'exponential form complex numbers',
    'roots of unity definition',
    'real and imaginary parts',
    'complex numbers concepts explained'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 16 complex number terms into four categories that build from basic definitions through geometric and algebraic structure.

[Foundations](#category_foundations) establishes the core vocabulary with 7 entries: complex number, imaginary unit, imaginary number, pure imaginary number, real part, imaginary part, and algebraic form. These terms define what complex numbers are and how they are written in standard notation.

[Representations](#category_representations) covers 5 entries on the different ways to express and visualize complex numbers: the complex plane (Argand diagram), modulus (absolute value), argument (angle), trigonometric form, and exponential form. Each representation suits different operations -- algebraic form for addition, trigonometric and exponential forms for multiplication and powers.

[Operations & Structure](#category_operations_&_structure) addresses 4 entries on algebraic operations specific to complex numbers: the complex conjugate, additive inverse, multiplicative inverse, and roots of unity. These terms describe how complex numbers interact under arithmetic and how the unit circle connects to polynomial roots.

Each definition includes an intuitive explanation, key properties, notation conventions, and links to detailed lesson pages. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a complex number?",
      answer: "A complex number has the form z = a + bi, where a and b are real numbers and i is the imaginary unit defined by i squared equals negative one. The value a is the real part and b is the imaginary part. Every real number is a complex number with b = 0."
    },
    obj2: {
      question: "What is the difference between imaginary and complex numbers?",
      answer: "An imaginary number has the form bi with no real part (like 3i or -7i). A complex number has both a real and imaginary part (like 2 + 3i). Every imaginary number is complex, but not every complex number is imaginary -- for example, 2 + 3i has a nonzero real part."
    },
    obj3: {
      question: "What are the different forms of a complex number?",
      answer: "Complex numbers can be written in algebraic form (a + bi), trigonometric form (r times cos theta plus i sin theta), or exponential form (r times e to the i theta). Algebraic form is best for addition and subtraction. Trigonometric and exponential forms simplify multiplication, division, and powers."
    },
    obj4: {
      question: "What is the modulus of a complex number?",
      answer: "The modulus of z = a + bi is the distance from the origin to the point (a, b) in the complex plane, calculated as the square root of a squared plus b squared. It generalizes the absolute value of real numbers to two dimensions and is always non-negative."
    },
    obj5: {
      question: "What is a complex conjugate and why is it useful?",
      answer: "The complex conjugate of z = a + bi is a - bi, obtained by negating the imaginary part. Multiplying a complex number by its conjugate gives a real number equal to the modulus squared. This property is essential for dividing complex numbers and finding multiplicative inverses."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Complex Numbers Terms and Definitions",
      "description": "Complete glossary of complex number terms with definitions and examples. Covers foundations, representations, conjugates, modulus, argument, and roots of unity.",
      "url": "https://www.learnmathclass.com/complex-numbers/definitions",
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
        "name": "Complex Numbers Terminology"
      },
      "teaches": [
        "Complex number definition, real part, and imaginary part",
        "The imaginary unit and its powers",
        "Complex plane, modulus, and argument",
        "Algebraic, trigonometric, and exponential forms",
        "Complex conjugate and multiplicative inverse",
        "Roots of unity and their geometric interpretation"
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
          "name": "Complex Numbers Definitions",
          "item": "https://www.learnmathclass.com/complex-numbers/definitions"
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
      complexNumbersTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Complex Numbers Definitions & Terms | Learn Math Class",
        description: "Complete glossary of complex number terms with definitions and examples. Covers foundations, representations, conjugates, modulus, argument, and roots of unity.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/definitions",
        name: "Complex Numbers Terms and Definitions"
      }
    }
  }
}

export default function ComplexNumbersDefinitionsPage({
  complexNumbersTermsList,
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
          Complex Numbers Terms and Definitions
        </h1>
        <CategoriesList data={complexNumbersTermsList}
          baseUrl='/complex-numbers/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={complexNumbersTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
      </main>
    </>
  )
}