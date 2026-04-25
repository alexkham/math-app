
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import DefinitionGlossary from '@/app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')
  
//   const keyWords = [
//     'logic terminology',
//     'logic terms',
//     'logic definitions',
//     'logic definition and examples',
//     'logic vocabulary'
//   ]

//   // Define the canonical URL
//   const baseUrl = 'https://www.learnmathclass.com'
//   const path = '/logic/definitions'
//   const canonicalUrl = `${baseUrl}${path}`
  
//   const lastModified = new Date().toISOString() // Update this when content changes
  
//   return {
//     props: {
//       logicTermsList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function LogicDefinitionsPage({ 
//   logicTermsList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const router = useRouter()

//   // Redirect if URL has query parameters or trailing slash
//   React.useEffect(() => {
//     if (router.asPath !== '/logic/definitions') {
//       router.push('/logic/definitions')
//     }
//   }, [router])

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Logic Terms and Definitions",
//     "description": "Comprehensive list of mathematicsl logic terms, definitions and examples for students and educators.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Logic Terms and Definitions",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Logic Terms and Definitions | Learn Math Class"
//   const pageDescription = "Complete guide to logic terminology, definitions, and examples. Perfect for students learning mathematical logic fundamentals and mathematical concepts."

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
//         topOffset='55px'
//         sidebarWidth='45px'
//         panelWidth='300px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />

//       <main>
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
//           Logic Terms and Definitions
//         </h1>
//         <CategoriesList
//         data={logicTermsList}
//         baseUrl='/logic/definitions'/>
//         {/* <FormulaAccordionWrapper
//           groupByField={'category'}
//           data={logicTermsList}
//           type='Definition'
//         /> */}
//         <br />
//         <DefinitionGlossary
//   data={logicTermsList}
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
  const { default: logicTermsList } = await import('@/app/api/db/definitions/logic/logicDefinitions')

  const keyWords = [
    'logic definitions',
    'logic terms',
    'logic vocabulary',
    'logic glossary',
    'propositional logic definitions',
    'logical connectives definitions',
    'tautology contradiction contingency',
    'truth table terminology',
    'conjunction disjunction negation',
    'conditional biconditional logic',
    'CNF DNF normal forms',
    'logical equivalence definition',
    'mathematical logic terms',
    'propositional logic vocabulary'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 28 propositional logic terms into two categories that cover the building blocks of logical reasoning and their meaning.

[Syntax](#category_syntax) defines the structural side of propositional logic across 11 entries: propositions (elementary and compound), well-formed formulas, literals, the five standard logical connectives (negation, conjunction, disjunction, and their roles in building expressions), and the two canonical normal forms -- Disjunctive Normal Form (DNF) and Conjunctive Normal Form (CNF). These terms describe how valid logical expressions are constructed from symbols.

[Semantics](#category_semantics) addresses meaning and truth across 17 entries: the conditional and biconditional connectives, the anatomy of implications (antecedent, consequent, converse, contrapositive, inverse), logical equivalence, the three truth-value classifications (tautology, contradiction, contingency), satisfiability, truth tables, assignments, absorption, and the foundational laws of excluded middle and non-contradiction. These terms describe how logical expressions are evaluated and what their truth values reveal.

Each definition includes an intuitive explanation, formal properties, worked examples, and links to detailed lesson pages. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is a proposition in logic?",
      answer: "A proposition is a declarative statement that is either true or false, but not both. Examples include '2 + 3 = 5' (true) and 'The moon is made of cheese' (false). Questions, commands, and statements with free variables are not propositions because they lack a definite truth value."
    },
    obj2: {
      question: "What is the difference between a tautology, contradiction, and contingency?",
      answer: "A tautology is true under every possible truth assignment, such as P or not P. A contradiction is false under every assignment, such as P and not P. A contingency is true under some assignments and false under others -- most everyday propositions are contingencies."
    },
    obj3: {
      question: "What are the main logical connectives?",
      answer: "The five standard connectives are negation (not), conjunction (and), disjunction (or), conditional (if-then), and biconditional (if and only if). Each defines a truth function that determines the compound statement's truth value from the truth values of its components."
    },
    obj4: {
      question: "What is the difference between a conditional and its contrapositive?",
      answer: "A conditional P implies Q asserts that whenever P is true, Q must also be true. Its contrapositive, not Q implies not P, negates both parts and swaps their positions. The contrapositive is always logically equivalent to the original conditional, unlike the converse or inverse."
    },
    obj5: {
      question: "What are CNF and DNF in propositional logic?",
      answer: "CNF (Conjunctive Normal Form) expresses a formula as an AND of OR-clauses. DNF (Disjunctive Normal Form) expresses it as an OR of AND-clauses. Every propositional formula can be converted to both forms. CNF is widely used in automated theorem proving and SAT solvers."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Logic Terms and Definitions",
      "description": "Complete glossary of propositional logic terms with definitions and examples. Covers syntax, semantics, connectives, truth tables, and normal forms.",
      "url": "https://www.learnmathclass.com/logic/definitions",
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
        "name": "Propositional Logic Terminology"
      },
      "teaches": [
        "Propositions, well-formed formulas, and logical syntax",
        "Logical connectives: negation, conjunction, disjunction, conditional, biconditional",
        "Truth value classifications: tautology, contradiction, contingency",
        "Normal forms: CNF and DNF",
        "Implication structure: antecedent, consequent, converse, contrapositive",
        "Foundational laws: excluded middle and non-contradiction"
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
          "name": "Logic",
          "item": "https://www.learnmathclass.com/logic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Logic Terms and Definitions",
          "item": "https://www.learnmathclass.com/logic/definitions"
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
      logicTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Logic Definitions & Terms | Learn Math Class",
        description: "Complete glossary of propositional logic terms with definitions and examples. Covers syntax, semantics, connectives, truth tables, and normal forms.",
        keywords: keyWords.join(", "),
        url: "/logic/definitions",
        name: "Logic Terms and Definitions"
      }
    }
  }
}

export default function LogicDefinitionsPage({
  logicTermsList,
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
        topOffset='55px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <main>
        <h1 className='title' style={{marginTop:'0px', marginBottom:'10px'}}>
          Logic Terms and Definitions
        </h1>
        <CategoriesList
          data={logicTermsList}
          baseUrl='/logic/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={logicTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
      </main>
    </>
  )
}