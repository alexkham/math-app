// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import React from 'react'
// // import Head from 'next/head'
// // import { useRouter } from 'next/router'
// // import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// // import '../../../pages/pages.css'
// // import DefinitionGlossary from '../../../app/components/examples/DefinitionsGlossary'

// // export async function getStaticProps() {
// //   const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')

// //   const keyWords = [
// //     'algebra definitions',
// //     'algebra terms',
// //     'algebra vocabulary',
// //     'algebra glossary',
// //     'algebra terminology list',
// //     'equation definition algebra',
// //     'polynomial terms',
// //     'roots and radicals definitions',
// //     'logarithm definitions',
// //     'exponent rules terminology',
// //     'algebraic expressions glossary',
// //     'math definitions for students',
// //     'algebra concepts and examples',
// //     'learn algebra terms'
// //   ]

// //   const definitionsCategoryExplanations = {
// //     "Equations": "Complete guide to equations: definitions, solution sets, equation types (conditional, identity, contradiction), equivalent equations, and solving linear, quadratic, polynomial, rational, and absolute value equations.",
// //     "Roots": "Core concepts and operations with roots. Key terms include Square Root (x where x\u00B2 = n), Cube Root (x where x\u00B3 = n), Radical Symbol, Perfect Squares/Cubes, and methods of simplification. Covers both real and imaginary roots, radical expressions, and related operations.",
// //     "Logarithms": "Functions that determine the exponent needed for a base to reach a number. Includes Natural Logarithm (base e), Common Logarithm (base 10), Binary Logarithm (base 2), and their properties. Covers logarithmic functions, equations, identities and transformations.",
// //     "Polynomials": "Expressions built from variables and coefficients with non-negative integer exponents. Covers polynomial degree, operations (addition, subtraction, multiplication, division), factoring, roots, the Fundamental Theorem of Algebra, Vieta's formulas, and the Rational Root Theorem.",
// //     "Exponents": "Rules and operations involving powers. Features basic concepts like Base and Power, Laws of Exponents, Exponential Functions (a^x), and applications in growth/decay. Includes special cases like Zero, Negative, and Fractional exponents."
// //   };

// //   const faqQuestions = {
// //     obj1: {
// //       question: "What topics does this algebra glossary cover?",
// //       answer: "The glossary covers five major algebra categories: Equations (variables, solutions, identities, discriminant), Roots and Radicals (square roots, cube roots, rationalizing, surds), Logarithms (natural log, common log, log identities, change of base), Polynomials (degree, factoring, Vieta's formulas, remainder theorem), and Exponents (laws of exponents, exponential growth, scientific notation)."
// //     },
// //     obj2: {
// //       question: "What is the difference between an expression and an equation?",
// //       answer: "An expression is a mathematical phrase like 3x + 2 that represents a quantity but makes no claim about equality. An equation uses the equals sign to assert that two expressions have the same value, such as 3x + 2 = 8. Expressions are simplified or evaluated; equations are solved."
// //     },
// //     obj3: {
// //       question: "What are the main types of equations in algebra?",
// //       answer: "Algebra classifies equations by degree: linear (degree 1), quadratic (degree 2), cubic (degree 3), and higher. Equations can also be conditional (true for specific values), identities (true for all values), or contradictions (true for no values). Each type requires different solving techniques."
// //     },
// //     obj4: {
// //       question: "How are logarithms related to exponents?",
// //       answer: "Logarithms are the inverse of exponentiation. The statement log base b of x equals y means b raised to the power y equals x. For example, log base 2 of 8 equals 3 because 2 cubed is 8. This inverse relationship is used to solve exponential equations."
// //     },
// //     obj5: {
// //       question: "What is a polynomial and how is it classified?",
// //       answer: "A polynomial is an expression built from variables and coefficients using addition, subtraction, multiplication, and non-negative integer exponents. Polynomials are classified by degree: degree 1 is linear, degree 2 is quadratic, degree 3 is cubic. The degree determines the maximum number of roots and which solving methods apply."
// //     }
// //   };

// //   const schemas = {
// //     learningResource: {
// //       "@context": "https://schema.org",
// //       "@type": "LearningResource",
// //       "name": "Algebra Terms and Definitions",
// //       "description": "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
// //       "url": "https://www.learnmathclass.com/algebra/definitions",
// //       "inLanguage": "en-US",
// //       "learningResourceType": "Reference",
// //       "educationalLevel": "High School, College",
// //       "educationalUse": "Learning",
// //       "audience": {
// //         "@type": "EducationalAudience",
// //         "educationalRole": "student"
// //       },
// //       "about": {
// //         "@type": "Thing",
// //         "name": "Algebra Terminology"
// //       },
// //       "teaches": [
// //         "Equation types: conditional, identity, and contradiction",
// //         "Roots and radicals including simplification and rationalization",
// //         "Logarithmic functions, identities, and equations",
// //         "Polynomial structure, division, and factoring",
// //         "Exponent rules and exponential functions",
// //         "Connections between roots, logarithms, and exponents"
// //       ],
// //       "keywords": keyWords.join(", "),
// //       "author": {
// //         "@type": "Organization",
// //         "name": "Learn Math Class"
// //       },
// //       "publisher": {
// //         "@type": "Organization",
// //         "name": "Learn Math Class"
// //       },
// //       "datePublished": "2024-01-15",
// //       "dateModified": new Date().toISOString()
// //     },

// //     breadcrumb: {
// //       "@context": "https://schema.org",
// //       "@type": "BreadcrumbList",
// //       "itemListElement": [
// //         {
// //           "@type": "ListItem",
// //           "position": 1,
// //           "name": "Home",
// //           "item": "https://www.learnmathclass.com"
// //         },
// //         {
// //           "@type": "ListItem",
// //           "position": 2,
// //           "name": "Algebra",
// //           "item": "https://www.learnmathclass.com/algebra"
// //         },
// //         {
// //           "@type": "ListItem",
// //           "position": 3,
// //           "name": "Algebra Definitions",
// //           "item": "https://www.learnmathclass.com/algebra/definitions"
// //         }
// //       ]
// //     },

// //     faq: {
// //       "@context": "https://schema.org",
// //       "@type": "FAQPage",
// //       "mainEntity": Object.keys(faqQuestions).map(key => ({
// //         "@type": "Question",
// //         "name": faqQuestions[key].question,
// //         "acceptedAnswer": {
// //           "@type": "Answer",
// //           "text": faqQuestions[key].answer
// //         }
// //       }))
// //     }
// //   };

// //   return {
// //     props: {
// //       algebraTermsList,
// //       keyWords,
// //       definitionsCategoryExplanations,
// //       faqQuestions,
// //       schemas,
// //       seoData: {
// //         title: "Algebra Definitions: Terms & Examples | Learn Math Class",
// //         description: "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
// //         // hubDescription: "Comprehensive algebra glossary organized by category. Covers five major topics: Equations (variables, solution sets, identities, contradictions, discriminant, absolute value), Roots and Radicals (square roots, cube roots, nth roots, simplification, rationalization, surds), Logarithms (natural log, common log, binary log, identities, equations, change of base), Polynomials (degree, factoring, division, Vieta's formulas, Fundamental Theorem of Algebra, Rational Root Theorem), and Exponents (laws of exponents, exponential functions, growth and decay, scientific notation). Each term includes a precise definition, key properties, and worked examples.",
// //         hubDescription: "A clear vocabulary is the foundation of every algebra course — without it, formulas look like noise and word problems become guesswork. This glossary gives each concept a precise definition, concrete examples, and the context needed to connect it to the rest of the subject. Use it as a reference while solving homework, reviewing for exams, or bridging gaps from earlier courses. Terms are organized into five searchable categories: [Equations](!/algebra/definitions#category_equations) (variables, solution sets, identities, contradictions, discriminant, absolute value), [Roots and Radicals](!/algebra/definitions#category_roots) (square roots, cube roots, nth roots, simplification, rationalization, surds), [Logarithms](!/algebra/definitions#category_logarithms) (natural log, common log, binary log, identities, equations, change of base), [Polynomials](!/algebra/definitions#category_polynomials) (degree, factoring, division, Vieta's formulas, Fundamental Theorem of Algebra, Rational Root Theorem), and [Exponents](!/algebra/definitions#category_exponents) (laws of exponents, exponential functions, growth and decay, scientific notation). Each entry includes key properties and worked examples so the definition is never just a sentence — it is a starting point for understanding.",
// //         keywords: keyWords.join(", "),
// //         url: "/algebra/definitions",
// //         name: "Algebra Terms and Definitions"
// //       }
// //     }
// //   }
// // }

// // export default function AlgebraDefinitionsPage({
// //   algebraTermsList,
// //   keyWords,
// //   definitionsCategoryExplanations,
// //   faqQuestions,
// //   schemas,
// //   seoData
// // }) {
// //   const router = useRouter()

// //   // Redirect if URL has query parameters or trailing slash
// //   React.useEffect(() => {
// //     if (router.asPath !== '/algebra/definitions') {
// //       router.push('/algebra/definitions')
// //     }
// //   }, [router])

// //   return (
// //     <>
// //       <Head>
// //         <title>{seoData.title}</title>
// //         <meta name="description" content={seoData.description} />
// //         <meta name="keywords" content={seoData.keywords} />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// //         <meta property="og:title" content={seoData.title} />
// //         <meta property="og:description" content={seoData.description} />
// //         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //         <meta property="og:type" content="article" />
// //         <meta property="og:site_name" content="Learn Math Class" />

// //         <meta name="twitter:card" content="summary" />
// //         <meta name="twitter:title" content={seoData.title} />
// //         <meta name="twitter:description" content={seoData.description} />

// //         <meta name="robots" content="index, follow" />

// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{
// //             __html: JSON.stringify(schemas.learningResource)
// //           }}
// //         />

// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{
// //             __html: JSON.stringify(schemas.breadcrumb)
// //           }}
// //         />

// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{
// //             __html: JSON.stringify(schemas.faq)
// //           }}
// //         />
// //       </Head>
// //       {/* <GenericNavbar/> */}
// //       <br />
// //       <br />
// //       <br />
// //       <br />
// //       <Breadcrumb />
// //       <OperaSidebar
// //         side='right'
// //         // topOffset='55px'
// //         sidebarWidth='45px'
// //         panelWidth='300px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       />
// //       <main>
// //         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
// //           Algebra Terms and Definitions
// //         </h1>
// //         {/* <SecondaryNavbar alignment='left' mode='siblings' title='Similar Pages'/> */}
// //         <CategoriesList data={algebraTermsList}
// //         baseUrl='/algebra/definitions'
// //         categoryExplanations={definitionsCategoryExplanations}/>
// //         {/* <FormulaAccordionWrapper
// //           groupByField={'category'}
// //           data={algebraTermsList}
// //           type='Definition'
// //         /> */}
// //         <br />


// // <DefinitionGlossary
// //   data={algebraTermsList}
// //   groupByField="category"
// //   type="Definition"
// // />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //         <br />
// //          {/* <ScrollUpButton/> */}
// //       </main>
// //     </>
// //   );
// // }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import '../../../pages/pages.css'
// import DefinitionGlossary from '../../../app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')

//   const keyWords = [
//     'algebra definitions',
//     'algebra terms',
//     'algebra vocabulary',
//     'algebra glossary',
//     'algebra terminology list',
//     'equation definition algebra',
//     'polynomial terms',
//     'roots and radicals definitions',
//     'logarithm definitions',
//     'exponent rules terminology',
//     'algebraic expressions glossary',
//     'math definitions for students',
//     'algebra concepts and examples',
//     'learn algebra terms'
//   ]

//   const introArticle = {
//     heading: "About This Glossary",
//     content: `This glossary organizes 99 algebra terms into six categories that together cover the core vocabulary of the subject.

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
//       question: "What topics does this algebra glossary cover?",
//       answer: "The glossary covers six major algebra categories: Equations (variables, solutions, identities, discriminant), Roots and Radicals (square roots, cube roots, rationalizing, surds), Logarithms (natural log, common log, log identities, change of base), Polynomials (degree, factoring, Vieta's formulas, remainder theorem), Exponents (laws of exponents, exponential growth, scientific notation), and Inequalities (interval notation, sign analysis, compound inequalities)."
//     },
//     obj2: {
//       question: "What is the difference between an expression and an equation?",
//       answer: "An expression is a mathematical phrase like 3x + 2 that represents a quantity but makes no claim about equality. An equation uses the equals sign to assert that two expressions have the same value, such as 3x + 2 = 8. Expressions are simplified or evaluated; equations are solved."
//     },
//     obj3: {
//       question: "What are the main types of equations in algebra?",
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
//       "description": "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
//       "url": "https://www.learnmathclass.com/algebra/definitions",
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
//           "item": "https://www.learnmathclass.com/algebra"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Algebra Definitions",
//           "item": "https://www.learnmathclass.com/algebra/definitions"
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
//       algebraTermsList,
//       faqQuestions,
//       schemas,
//       introArticle,
//       seoData: {
//         title: "Algebra Definitions: Terms & Examples | Learn Math Class",
//         description: "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
//         hubDescription: "A clear vocabulary is the foundation of every algebra course -- without it, formulas look like noise and word problems become guesswork. This glossary gives each concept a precise definition, concrete examples, and the context needed to connect it to the rest of the subject. Use it as a reference while solving homework, reviewing for exams, or bridging gaps from earlier courses. Terms are organized into six searchable categories: [Equations](!/algebra/definitions#category_equations) (variables, solution sets, identities, contradictions, discriminant, absolute value), [Roots and Radicals](!/algebra/definitions#category_roots) (square roots, cube roots, nth roots, simplification, rationalization, surds), [Logarithms](!/algebra/definitions#category_logarithms) (natural log, common log, binary log, identities, equations, change of base), [Polynomials](!/algebra/definitions#category_polynomials) (degree, factoring, division, Vieta's formulas, Fundamental Theorem of Algebra, Rational Root Theorem), [Exponents](!/algebra/definitions#category_exponents) (laws of exponents, exponential functions, growth and decay, scientific notation), and [Inequalities](!/algebra/definitions#category_inequalities) (interval notation, sign analysis, compound inequalities, polynomial and rational inequalities). Each entry includes key properties and worked examples so the definition is never just a sentence -- it is a starting point for understanding.",
//         keywords: keyWords.join(", "),
//         url: "/algebra/definitions",
//         name: "Algebra Terms and Definitions"
//       }
//     }
//   }
// }

// export default function AlgebraDefinitionsPage({
//   algebraTermsList,
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
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//           Algebra Terms and Definitions
//         </h1>
//         <CategoriesList data={algebraTermsList}
//           baseUrl='/algebra/definitions'
//           introArticle={introArticle}
//         />
//         <br />
//         <DefinitionGlossary
//           data={algebraTermsList}
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
  const { default: algebraTermsList } = await import('@/app/api/db/definitions/algebra/algebraDefinitions')

  const keyWords = [
    'algebra definitions',
    'algebra terms',
    'algebra vocabulary',
    'algebra glossary',
    'algebra terminology list',
    'equation definition algebra',
    'polynomial terms',
    'roots and radicals definitions',
    'logarithm definitions',
    'exponent rules terminology',
    'algebraic expressions glossary',
    'math definitions for students',
    'algebra concepts and examples',
    'learn algebra terms'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 99 algebra terms into six categories that together cover the core vocabulary of the subject.

[Equations](#category_equations) defines the language of equation-solving: variables, expressions, solution sets, equivalent equations, conditional equations, identities, contradictions, the discriminant, domain restrictions, and absolute value. These 17 terms establish the framework for every solving technique that follows.

[Roots](#category_roots) covers radicals and their properties across 19 entries: square roots, cube roots, nth roots, the index-radicand-radical anatomy, product/quotient/power rules, simplification, rationalization, conjugates, like radicals, radical equations, extraneous solutions, rational exponents, and radical functions.

[Logarithms](#category_logarithms) addresses the inverse of exponentiation in 15 entries: the logarithm itself, base and argument restrictions, common and natural logarithms, Euler's number, the product/quotient/power/change-of-base rules, monotonicity, one-to-one property, logarithmic equations, inequalities, and functions.

[Polynomials](#category_polynomials) spans 23 entries covering polynomial structure (terms, degree, monomials, binomials, trinomials, like terms), factoring patterns (GCF, difference of squares, perfect square trinomials, sum/difference of cubes), roots and multiplicity, division methods (long division, synthetic division), and key theorems (Remainder, Factor, Rational Root, Descartes' Rule, Fundamental Theorem, Vieta's Formulas).

[Exponents](#category_exponents) traces the concept of powers through 15 entries: base, exponent, natural/zero/negative/rational/irrational exponents, the five exponent rules (product, quotient, power-of-a-power, power-of-a-product, power-of-a-quotient), exponential equations, inequalities, and functions.

[Inequalities](#category_inequalities) rounds out the glossary with 10 entries on inequality notation, interval notation, compound inequalities, sign analysis, critical points, and linear/quadratic/polynomial/rational/absolute-value inequality types.

Each definition includes key properties, worked examples, and links to the detailed lesson page. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What topics does this algebra glossary cover?",
      answer: "The glossary covers six major algebra categories: Equations (variables, solutions, identities, discriminant), Roots and Radicals (square roots, cube roots, rationalizing, surds), Logarithms (natural log, common log, log identities, change of base), Polynomials (degree, factoring, Vieta's formulas, remainder theorem), Exponents (laws of exponents, exponential growth, scientific notation), and Inequalities (interval notation, sign analysis, compound inequalities)."
    },
    obj2: {
      question: "What is the difference between an expression and an equation?",
      answer: "An expression is a mathematical phrase like 3x + 2 that represents a quantity but makes no claim about equality. An equation uses the equals sign to assert that two expressions have the same value, such as 3x + 2 = 8. Expressions are simplified or evaluated; equations are solved."
    },
    obj3: {
      question: "What are the main types of equations in algebra?",
      answer: "Algebra classifies equations by degree: linear (degree 1), quadratic (degree 2), cubic (degree 3), and higher. Equations can also be conditional (true for specific values), identities (true for all values), or contradictions (true for no values). Each type requires different solving techniques."
    },
    obj4: {
      question: "How are logarithms related to exponents?",
      answer: "Logarithms are the inverse of exponentiation. The statement log base b of x equals y means b raised to the power y equals x. For example, log base 2 of 8 equals 3 because 2 cubed is 8. This inverse relationship is used to solve exponential equations."
    },
    obj5: {
      question: "What is a polynomial and how is it classified?",
      answer: "A polynomial is an expression built from variables and coefficients using addition, subtraction, multiplication, and non-negative integer exponents. Polynomials are classified by degree: degree 1 is linear, degree 2 is quadratic, degree 3 is cubic. The degree determines the maximum number of roots and which solving methods apply."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Algebra Terms and Definitions",
      "description": "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
      "url": "https://www.learnmathclass.com/algebra/definitions",
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
        "name": "Algebra Terminology"
      },
      "teaches": [
        "Equation types: conditional, identity, and contradiction",
        "Roots and radicals including simplification and rationalization",
        "Logarithmic functions, identities, and equations",
        "Polynomial structure, division, and factoring",
        "Exponent rules and exponential functions",
        "Connections between roots, logarithms, and exponents"
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Algebra Definitions",
          "item": "https://www.learnmathclass.com/algebra/definitions"
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
      algebraTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Algebra Definitions: Terms & Examples | Learn Math Class",
        description: "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
        hubDescription: "A clear vocabulary is the foundation of every algebra course -- without it, formulas look like noise and word problems become guesswork. This glossary gives each concept a precise definition, concrete examples, and the context needed to connect it to the rest of the subject. Use it as a reference while solving homework, reviewing for exams, or bridging gaps from earlier courses. Terms are organized into six searchable categories: [Equations](!/algebra/definitions#category_equations) (variables, solution sets, identities, contradictions, discriminant, absolute value), [Roots and Radicals](!/algebra/definitions#category_roots) (square roots, cube roots, nth roots, simplification, rationalization, surds), [Logarithms](!/algebra/definitions#category_logarithms) (natural log, common log, binary log, identities, equations, change of base), [Polynomials](!/algebra/definitions#category_polynomials) (degree, factoring, division, Vieta's formulas, Fundamental Theorem of Algebra, Rational Root Theorem), [Exponents](!/algebra/definitions#category_exponents) (laws of exponents, exponential functions, growth and decay, scientific notation), and [Inequalities](!/algebra/definitions#category_inequalities) (interval notation, sign analysis, compound inequalities, polynomial and rational inequalities). Each entry includes key properties and worked examples so the definition is never just a sentence -- it is a starting point for understanding.",
        keywords: keyWords.join(", "),
        url: "/algebra/definitions",
        name: "Algebra Terms and Definitions"
      }
    }
  }
}

export default function AlgebraDefinitionsPage({
  algebraTermsList,
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
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
          Algebra Terms and Definitions
        </h1>
        <CategoriesList data={algebraTermsList}
          baseUrl='/algebra/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={algebraTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
      </main>
    </>
  )
}