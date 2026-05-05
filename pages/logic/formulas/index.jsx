// import logicFormulasList from '@/app/api/db/formulas/logic/logicFormulasList'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import '../../pages.css'
// import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import FormulasTOC from '@/app/components/examples/FormulaTOC'
// import Head from 'next/head'

// export async function getStaticProps() {
//   const keyWords = ['mathematical logic','logic laws','logic formulas','logic rules','logic math',
//     'laws of logic','discrete math laws of logic','discrete mathematics logic'];

//   return {
//     props: {
//       seoData: {
//         title: "Mathematical Logic Formulas - Laws & Rules | Learn Math Class",
//         description: "Complete collection of mathematical logic formulas, laws, and rules. Essential discrete mathematics logic formulas for students and professionals.",
//         keywords: keyWords.join(", "),
//         url: "/logic/formulas",
//         name: "Mathematical Logic Formulas"
//       },
//       keyWords
//     }
//   }
// }

// export default function LinearAlgebraFormulasPage({ seoData, keyWords }) {

// //  const keyWords=['mathematical logic','logic laws','logic formulas','logic rules','logic math',
// //   'laws of logic','discrete math laws of logic','discrete mathematics logic',]

//   return (
//     <>
//     <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <OperaSidebar 
//       side='right'
//       topOffset='55px' 
//       sidebarWidth='45px'
//       panelWidth='200px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Mathematical Logic Formulas</h1>
//     <FormulasTOC data={logicFormulasList} />
//     {/* <div style={{transform:'scale(0.95)'}}>
//     <FormulaAccordionWrapper data={logicFormulasList} groupByField={['category']}/>
//     </div> */}
//     <br/>
//     {/* <ScrollUpButton/> */}
//     </>
//   )
// }



import logicFormulasList from '@/app/api/db/formulas/logic/logicFormulasList'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'
import Head from 'next/head'

export async function getStaticProps() {

  const keyWords = [
    'mathematical logic formulas',
    'laws of logic',
    'logic equivalences',
    'propositional logic laws',
    'de morgan laws',
    'distributive laws logic',
    'material implication',
    'biconditional equivalences',
    'contrapositive equivalence',
    'logic formulas reference',
    'discrete mathematics logic',
    'logical equivalence rules',
    'propositional logic formulas',
    'logic laws cheat sheet'
  ]

  const faqQuestions = {
    obj1: {
      question: "What does this logic formulas reference cover?",
      answer: "This reference collects 32 logical equivalences and inference patterns organized into 15 categories: idempotent, commutative, associative, distributive, identity, domination, negation, double negation, De Morgan, absorption, redundancy, monotonicity, conditional equivalences, biconditional equivalences, and the duality between tautology and contradiction."
    },
    obj2: {
      question: "What are De Morgan's laws in propositional logic?",
      answer: "De Morgan's laws describe how negation distributes across conjunction and disjunction. Negating an AND yields the OR of the negated parts, and negating an OR yields the AND of the negated parts. Each direction is verified by truth table in the corresponding entry."
    },
    obj3: {
      question: "How can a conditional be rewritten without the implication arrow?",
      answer: "Material Implication rewrites if P then Q as the disjunction not-P or Q. The Contrapositive equivalence rewrites it as if not-Q then not-P, which is the basis for proof by contraposition. Both forms have identical truth tables to the original conditional."
    },
    obj4: {
      question: "How is the negation of a conditional expressed?",
      answer: "The negation of if P then Q is the conjunction P and not-Q, the single case in which the implication fails. This follows from Material Implication combined with De Morgan's law and Double Negation."
    },
    obj5: {
      question: "What is the difference between the law of excluded middle and the law of non-contradiction?",
      answer: "Excluded middle states that any proposition or its negation must be true, making P or not-P a tautology. Non-contradiction states that a proposition and its negation cannot both hold simultaneously, making P and not-P a contradiction. Both are foundational principles of classical logic."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Mathematical Logic Formulas Reference",
      "description": "Complete collection of 32 mathematical logic formulas across 15 categories: De Morgan, distributive, material implication, biconditional equivalences.",
      "url": "https://www.learnmathclass.com/logic/formulas",
      "inLanguage": "en-US",
      "learningResourceType": "Reference",
      "educationalLevel": "High School, College",
      "educationalUse": "Reference",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Laws of Propositional Logic"
      },
      "teaches": [
        "De Morgan's laws for negation distribution",
        "Distributive laws for normal-form conversion to DNF and CNF",
        "Material implication and contrapositive equivalence",
        "Biconditional equivalences and the exclusive-or pattern",
        "Absorption, redundancy, and monotonicity laws",
        "Duality between tautology and contradiction under negation"
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
          "name": "Mathematical Logic Formulas Reference",
          "item": "https://www.learnmathclass.com/logic/formulas"
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
      logicFormulasList,
      faqQuestions,
      schemas,
      seoData: {
        title: "Logic Formulas: Laws & Equivalences | Learn Math Class",
        description: "Complete collection of 32 mathematical logic formulas across 15 categories: De Morgan, distributive, material implication, biconditional equivalences.",
        hubDescription: `This reference collects 32 logical equivalences and inference patterns organized into 15 categories - the standard toolkit for simplifying propositional formulas, converting between normal forms, and constructing rigorous proofs.

[Idempotent Laws](!/logic/formulas#category_idempotent_laws), [Commutative Laws](!/logic/formulas#category_commutative_laws), and [Associative Laws](!/logic/formulas#category_associative_laws) cover the basic structural rules for AND and OR. [Distributive Laws](!/logic/formulas#category_distributive_laws) drive normal-form conversion to DNF and CNF. [Identity Laws](!/logic/formulas#category_identity_laws), [Domination Laws](!/logic/formulas#category_domination_laws), and [Negation Laws](!/logic/formulas#category_negation_laws) describe interactions with the truth and falsity constants. [Double Negation](!/logic/formulas#category_double_negation), [De Morgan Laws](!/logic/formulas#category_de_morgan_laws), [Absorption Laws](!/logic/formulas#category_absorption_laws), and [Redundancy Laws](!/logic/formulas#category_redundancy_laws) handle simplification through negation and structural elimination. [Monotonicity Laws](!/logic/formulas#category_monotonicity_laws) provide the tautological inference patterns of disjunction introduction and conjunction elimination. [Conditional Equivalences](!/logic/formulas#category_conditional_equivalences) and [Biconditional Equivalences](!/logic/formulas#category_biconditional_equivalences) rewrite implication and if-and-only-if statements into more useful forms. [Tautology and Contradiction Duality](!/logic/formulas#category_tautology_and_contradiction_duality) closes the set with the relationship between the truth and falsity constants under negation.

Each entry shows the formula in LaTeX, an explanation of what the law captures, and where applicable a derivation, truth-table verification, common variants, and links to closely related formulas and definitions.`,
        keywords: keyWords.join(", "),
        url: "/logic/formulas",
        name: "Mathematical Logic Formulas Reference"
      }
    }
  }
}

export default function LogicFormulasPage({ logicFormulasList, faqQuestions, schemas, seoData }) {

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
      <OperaSidebar
        side='right'
        topOffset='55px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <h1 className='title' style={{ marginTop: '0px', marginBottom: '10px' }}>Mathematical Logic Formulas</h1>
      <FormulasTOC data={logicFormulasList} />
      {/* <div style={{transform:'scale(0.95)'}}>
      <FormulaAccordionWrapper data={logicFormulasList} groupByField={['category']}/>
      </div> */}
      <br />
      {/* <ScrollUpButton/> */}
    </>
  )
}