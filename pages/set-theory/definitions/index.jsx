

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import '../../../pages/pages.css'
// import DefinitionGlossary from '../../../app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: setTheoryTermsList } = await import('@/app/api/db/definitions/set-theory/setTheoryDefinitions')

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
//       setTheoryTermsList,
//       faqQuestions,
//       schemas,
//       introArticle,
//       seoData: {
//         title: "Algebra Definitions: Terms & Examples | Learn Math Class",
//         description: "Comprehensive algebra glossary with definitions and examples. Covers equations, roots, logarithms, polynomials, and exponents with detailed explanations.",
//         hubDescription: "A clear vocabulary is the foundation of every algebra course -- without it, formulas look like noise and word problems become guesswork. This glossary gives each concept a precise definition, concrete examples, and the context needed to connect it to the rest of the subject. Use it as a reference while solving homework, reviewing for exams, or bridging gaps from earlier courses. Terms are organized into six searchable categories: [Equations](!/algebra/definitions#category_equations) (variables, solution sets, identities, contradictions, discriminant, absolute value), [Roots and Radicals](!/algebra/definitions#category_roots) (square roots, cube roots, nth roots, simplification, rationalization, surds), [Logarithms](!/algebra/definitions#category_logarithms) (natural log, common log, binary log, identities, equations, change of base), [Polynomials](!/algebra/definitions#category_polynomials) (degree, factoring, division, Vieta's formulas, Fundamental Theorem of Algebra, Rational Root Theorem), [Exponents](!/algebra/definitions#category_exponents) (laws of exponents, exponential functions, growth and decay, scientific notation), and [Inequalities](!/algebra/definitions#category_inequalities) (interval notation, sign analysis, compound inequalities, polynomial and rational inequalities). Each entry includes key properties and worked examples so the definition is never just a sentence -- it is a starting point for understanding.",
//         keywords: keyWords.join(", "),
//         url: "/set-theory/definitions",
//         name: "Algebra Terms and Definitions"
//       }
//     }
//   }
// }

// export default function AlgebraDefinitionsPage({
//   setTheoryTermsList,
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
//           Algebra Terms and Definitions
//         </h1>
//         <CategoriesList data={setTheoryTermsList}
//           baseUrl='/algebra/definitions'
//           introArticle={introArticle}
//         />
//         <br />
//         <DefinitionGlossary
//           data={setTheoryTermsList}
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
  const { default: setTheoryTermsList } = await import('@/app/api/db/definitions/set-theory/setTheoryDefinitions')

  const keyWords = [
    'set theory definitions',
    'set theory terms',
    'set theory glossary',
    'set theory vocabulary',
    'subset superset definition',
    'union intersection complement',
    'Venn diagram terminology',
    'power set definition',
    'cardinality finite infinite sets',
    'countable uncountable sets',
    'set difference symmetric difference',
    'disjoint overlapping sets',
    'partition of a set',
    'set theory concepts explained'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 25 set theory terms into five categories that build from basic definitions through operations and size comparisons.

[Fundamentals](#category_fundamentals) establishes the starting vocabulary with 5 entries: set, element, empty set, universal set, and Venn diagram. These terms define what sets are, what they contain, and how they are visualized.

[Subsets](#category_subsets) covers 4 entries on containment relationships: subset, proper subset, superset, and power set. These terms describe how sets relate through inclusion and how the collection of all subsets forms a new set.

[Relationships](#category_relationships) addresses 5 entries on how sets compare: equal sets, equivalent sets, disjoint sets, overlapping sets, and partitions. Each relationship describes a structural connection between two or more sets.

[Operations](#category_operations) defines 5 entries on combining and separating sets: union, intersection, complement, set difference, and symmetric difference. These operations produce new sets from existing ones and form the algebraic backbone of set theory.

[Cardinality](#category_cardinality) spans 6 entries on measuring set size: cardinality itself, finite sets, infinite sets, countable sets, and uncountable sets. These terms distinguish different magnitudes of sets, from empty through countably and uncountably infinite.

Each definition includes intuitive explanations, key properties, examples, and links to detailed lesson pages. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a set in mathematics?",
      answer: "A set is an unordered collection of distinct objects called elements. Sets are denoted by capital letters and their elements are listed inside curly braces, like A = {1, 2, 3}. Two sets are equal if and only if they contain exactly the same elements, regardless of order or repetition in the listing."
    },
    obj2: {
      question: "What is the difference between a subset and a proper subset?",
      answer: "A subset A of B means every element of A also belongs to B, allowing A to equal B. A proper subset means A is contained in B but is not equal to B -- at least one element of B is missing from A. Every set is a subset of itself, but no set is a proper subset of itself."
    },
    obj3: {
      question: "What are union, intersection, and complement?",
      answer: "Union (A union B) collects all elements in either set. Intersection (A intersect B) collects only elements in both sets. Complement (A complement) collects everything in the universal set that is not in A. These three operations are the core tools for combining and separating sets."
    },
    obj4: {
      question: "What is the difference between finite, countable, and uncountable sets?",
      answer: "A finite set has a bounded number of elements. A countably infinite set has elements that can be listed in a sequence matching the natural numbers, like the integers or rationals. An uncountable set is too large to list -- no sequence can cover all its elements. The real numbers are the standard example of an uncountable set."
    },
    obj5: {
      question: "What is a power set?",
      answer: "The power set of A is the set of all possible subsets of A, including the empty set and A itself. If A has n elements, its power set has 2 to the n elements. For example, the power set of {a, b} is {empty set, {a}, {b}, {a, b}}, which has 4 elements."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Set Theory Terms and Definitions",
      "description": "Complete glossary of set theory terms with definitions and examples. Covers fundamentals, subsets, relationships, operations, and cardinality.",
      "url": "https://www.learnmathclass.com/set-theory/definitions",
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
        "name": "Set Theory Terminology"
      },
      "teaches": [
        "Sets, elements, empty set, and universal set",
        "Subset, proper subset, superset, and power set",
        "Set equality, equivalence, disjointness, and partitions",
        "Union, intersection, complement, and set difference",
        "Symmetric difference and Venn diagram visualization",
        "Cardinality: finite, infinite, countable, and uncountable sets"
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
          "name": "Set Theory",
          "item": "https://www.learnmathclass.com/set-theory"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Set Theory Definitions",
          "item": "https://www.learnmathclass.com/set-theory/definitions"
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
      setTheoryTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Set Theory Definitions & Terms | Learn Math Class",
        description: "Complete glossary of set theory terms with definitions and examples. Covers fundamentals, subsets, relationships, operations, and cardinality.",
        keywords: keyWords.join(", "),
        url: "/set-theory/definitions",
        name: "Set Theory Terms and Definitions"
      }
    }
  }
}

export default function SetTheoryDefinitionsPage({
  setTheoryTermsList,
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
          Set Theory Terms and Definitions
        </h1>
        <CategoriesList data={setTheoryTermsList}
          baseUrl='/set-theory/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={setTheoryTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
      </main>
    </>
  )
}