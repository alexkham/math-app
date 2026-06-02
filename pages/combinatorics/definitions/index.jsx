
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Head from 'next/head'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import '../../../pages/pages.css'
// import DefinitionGlossary from '../../../app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: combinatoricsTermsList } = await import('@/app/api/db/definitions/combinatorics/combinatoricsDefinitions')

//   const keyWords = [
//     'complex numbers definitions',
//     'complex numbers terms',
//     'complex numbers glossary',
//     'complex number vocabulary',
//     'imaginary unit definition',
//     'complex plane terminology',
//     'modulus and argument',
//     'complex conjugate definition',
//     'algebraic form complex numbers',
//     'trigonometric form complex numbers',
//     'exponential form complex numbers',
//     'roots of unity definition',
//     'real and imaginary parts',
//     'complex numbers concepts explained'
//   ]

//   const introArticle = {
//     heading: "About This Glossary",
//     content: `This glossary organizes 16 complex number terms into four categories that build from basic definitions through geometric and algebraic structure.

// [Foundations](#category_foundations) establishes the core vocabulary with 7 entries: complex number, imaginary unit, imaginary number, pure imaginary number, real part, imaginary part, and algebraic form. These terms define what complex numbers are and how they are written in standard notation.

// [Representations](#category_representations) covers 5 entries on the different ways to express and visualize complex numbers: the complex plane (Argand diagram), modulus (absolute value), argument (angle), trigonometric form, and exponential form. Each representation suits different operations -- algebraic form for addition, trigonometric and exponential forms for multiplication and powers.

// [Operations & Structure](#category_operations_&_structure) addresses 4 entries on algebraic operations specific to complex numbers: the complex conjugate, additive inverse, multiplicative inverse, and roots of unity. These terms describe how complex numbers interact under arithmetic and how the unit circle connects to polynomial roots.

// Each definition includes an intuitive explanation, key properties, notation conventions, and links to detailed lesson pages. Use the search bar or category filters above to navigate.`
//   }

//   const faqQuestions = {
//     obj1: {
//       question: "What is a complex number?",
//       answer: "A complex number has the form z = a + bi, where a and b are real numbers and i is the imaginary unit defined by i squared equals negative one. The value a is the real part and b is the imaginary part. Every real number is a complex number with b = 0."
//     },
//     obj2: {
//       question: "What is the difference between imaginary and complex numbers?",
//       answer: "An imaginary number has the form bi with no real part (like 3i or -7i). A complex number has both a real and imaginary part (like 2 + 3i). Every imaginary number is complex, but not every complex number is imaginary -- for example, 2 + 3i has a nonzero real part."
//     },
//     obj3: {
//       question: "What are the different forms of a complex number?",
//       answer: "Complex numbers can be written in algebraic form (a + bi), trigonometric form (r times cos theta plus i sin theta), or exponential form (r times e to the i theta). Algebraic form is best for addition and subtraction. Trigonometric and exponential forms simplify multiplication, division, and powers."
//     },
//     obj4: {
//       question: "What is the modulus of a complex number?",
//       answer: "The modulus of z = a + bi is the distance from the origin to the point (a, b) in the complex plane, calculated as the square root of a squared plus b squared. It generalizes the absolute value of real numbers to two dimensions and is always non-negative."
//     },
//     obj5: {
//       question: "What is a complex conjugate and why is it useful?",
//       answer: "The complex conjugate of z = a + bi is a - bi, obtained by negating the imaginary part. Multiplying a complex number by its conjugate gives a real number equal to the modulus squared. This property is essential for dividing complex numbers and finding multiplicative inverses."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Complex Numbers Terms and Definitions",
//       "description": "Complete glossary of complex number terms with definitions and examples. Covers foundations, representations, conjugates, modulus, argument, and roots of unity.",
//       "url": "https://www.learnmathclass.com/complex-numbers/definitions",
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
//         "name": "Complex Numbers Terminology"
//       },
//       "teaches": [
//         "Complex number definition, real part, and imaginary part",
//         "The imaginary unit and its powers",
//         "Complex plane, modulus, and argument",
//         "Algebraic, trigonometric, and exponential forms",
//         "Complex conjugate and multiplicative inverse",
//         "Roots of unity and their geometric interpretation"
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
//           "name": "Complex Numbers",
//           "item": "https://www.learnmathclass.com/complex-numbers"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Complex Numbers Definitions",
//           "item": "https://www.learnmathclass.com/complex-numbers/definitions"
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
//      combinatoricsTermsList,
//       faqQuestions,
//       schemas,
//       introArticle,
//       seoData: {
//         title: "Complex Numbers Definitions & Terms | Learn Math Class",
//         description: "Complete glossary of complex number terms with definitions and examples. Covers foundations, representations, conjugates, modulus, argument, and roots of unity.",
//         keywords: keyWords.join(", "),
//         url: "/combinatorics/definitions",
//         name: "Combinatorics Terms and Definitions"
//       }
//     }
//   }
// }

// export default function ComplexNumbersDefinitionsPage({
//   combinatoricsTermsList,
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
//         <h1 className='title' style={{marginTop:'0px', marginBottom:'10px'}}>
//           Combinatorics Terms and Definitions
//         </h1>
//         <CategoriesList data={combinatoricsTermsList}
//           baseUrl='/combinatorics/definitions'
//           introArticle={introArticle}
//         />
//         <br />
//         <DefinitionGlossary
//           data={combinatoricsTermsList}
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
  const { default: combinatoricsTermsList } = await import('@/app/api/db/definitions/combinatorics/combinatoricsDefinitions')

  const keyWords = [
    'combinatorics definitions',
    'combinatorics terms',
    'combinatorics glossary',
    'counting principles definitions',
    'permutations and combinations terms',
    'addition rule definition',
    'multiplication rule definition',
    'pigeonhole principle definition',
    'inclusion exclusion principle',
    'permutation definition',
    'combination definition',
    'binomial coefficient definition',
    'multinomial coefficient',
    'Pascal triangle definition',
    'factorial definition',
    'derangement definition',
    'weak composition strong composition',
    'partition into groups',
    'combinatorial vocabulary'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 22 combinatorics terms into four categories that build from the foundational counting rules through arrangements, selections, and the algebraic structure of the binomial coefficient.

[Counting Principles](#category_counting_principles) covers the 6 logical rules that govern how counts combine: the addition rule and multiplication rule (the foundational pair distinguished by "or" versus "and"), complementary counting (count the failures and subtract), double counting (count the same set two ways to produce an identity), the pigeonhole principle (more items than containers forces a repeat), and the inclusion-exclusion principle (the systematic correction for overlapping sets).

[Permutations](#category_permutations) contains 8 entries on arrangements where order matters: factorial (the foundational operation $n!$), the general concept of permutation, and the five permutation scenarios (full, partial, with repetition, with identical items, and circular), plus derangements (permutations with no fixed point).

[Combinations & Distributions](#category_combinations_&_distributions) covers 5 entries on selections and distributions where order does not matter: simple combination, partition into groups (distinct items into unlabeled subsets), weak composition (identical items into labeled bins, empties allowed), strong composition (identical items into labeled bins, no empties), and distribution into cells (distinct items into labeled containers).

[Binomial Structure](#category_binomial_structure) addresses 3 entries on the algebraic objects that organize combinatorial counts: the binomial coefficient $\\binom{n}{k}$, its generalization to the multinomial coefficient, and Pascal's triangle as the visual organization of all binomial coefficients.

Each definition includes a precise formal statement, notation conventions, key properties, worked examples, and links to detailed lesson pages. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is combinatorics?",
      answer: "Combinatorics is the branch of mathematics that studies counting, arrangement, and selection of objects. It answers questions of the form 'in how many ways can this be done?' through a small set of logical principles -- the addition and multiplication rules, complementary counting, double counting, the pigeonhole principle, and inclusion-exclusion -- and a family of standard scenarios for permutations and combinations."
    },
    obj2: {
      question: "What is the difference between a permutation and a combination?",
      answer: "A permutation is an arrangement where order matters: ABC and CBA count as different permutations. A combination is a selection where order does not matter: the set {A, B, C} is the same combination regardless of how the items were chosen. Each combination of r items corresponds to exactly r! permutations, so C(n,r) = P(n,r) / r!."
    },
    obj3: {
      question: "What are the basic counting principles?",
      answer: "The basic counting principles are the addition rule (mutually exclusive cases sum), the multiplication rule (independent steps multiply), complementary counting (count what fails and subtract), double counting (count the same set two ways to produce an identity), the pigeonhole principle (more items than containers forces a repeat), and the inclusion-exclusion principle (systematic correction for overlapping sets)."
    },
    obj4: {
      question: "What is the binomial coefficient?",
      answer: "The binomial coefficient C(n,k), read 'n choose k', counts the number of k-element subsets of an n-element set. Its formula is n! divided by k! times (n-k)!. The same coefficient also organizes polynomial expansions through the binomial theorem and governs the binomial probability distribution."
    },
    obj5: {
      question: "What is the inclusion-exclusion principle?",
      answer: "The inclusion-exclusion principle computes the size of a union of overlapping sets by alternately adding and subtracting the sizes of k-fold intersections. For two sets, |A union B| = |A| + |B| - |A intersect B|. The general n-set formula has 2^n - 1 terms with alternating signs, and produces the derangement count and the surjective function count in its complementary form."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Combinatorics Terms and Definitions",
      "description": "Complete glossary of combinatorics terms with definitions and examples. Covers counting principles, permutations, combinations, distributions, and the binomial coefficient.",
      "url": "https://www.learnmathclass.com/combinatorics/definitions",
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
        "name": "Combinatorics Terminology"
      },
      "teaches": [
        "Addition rule, multiplication rule, and complementary counting",
        "Pigeonhole principle and inclusion-exclusion principle",
        "Factorial and the five permutation scenarios",
        "Derangements and permutations with identical items",
        "Combinations, partitions, and weak and strong compositions",
        "Distribution into cells and the multiplication rule",
        "Binomial and multinomial coefficients with Pascal's triangle"
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
          "name": "Combinatorics",
          "item": "https://www.learnmathclass.com/combinatorics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Combinatorics Definitions",
          "item": "https://www.learnmathclass.com/combinatorics/definitions"
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
      combinatoricsTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Combinatorics Definitions & Terms | Learn Math Class",
        description: "Complete glossary of combinatorics terms with definitions and examples. Covers counting principles, permutations, combinations, distributions, and the binomial coefficient.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/definitions",
        name: "Combinatorics Terms and Definitions"
      }
    }
  }
}

export default function CombinatoricsDefinitionsPage({
  combinatoricsTermsList,
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
          Combinatorics Terms and Definitions
        </h1>
        <CategoriesList data={combinatoricsTermsList}
          baseUrl='/combinatorics/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={combinatoricsTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
      </main>
    </>
  )
}