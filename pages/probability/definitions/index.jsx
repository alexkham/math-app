// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import CategoriesList from '@/app/components/page-components/lists/CategoriesList'
// import DefinitionGlossary from '@/app/components/examples/DefinitionsGlossary'

// export async function getStaticProps() {
//   const { default: probabilityTermsList } = await import('@/app/api/db/definitions/probability/probabilityDefinitions')
  
//   const keyWords = [
//     'probability terminology',
//     'probability terms',
//     'probability definitions',
//     'probability definition and examples',
//     'probability vocabulary'
//   ]

//   // Define the canonical URL
//   const baseUrl = 'https://www.learnmathclass.com'
//   const path = '/probability/definitions'
//   const canonicalUrl = `${baseUrl}${path}`
  
//   const lastModified = new Date().toISOString() // Update this when content changes
  
//   return {
//     props: {
//      probabilityTermsList,
//       keyWords,
//       canonicalUrl,
//       lastModified,
//     }
//   }
// }

// export default function ProbabilityDefinitionsPage({ 
// probabilityTermsList, 
//   keyWords, 
//   canonicalUrl,
//   lastModified 
// }) {
//   const router = useRouter()

//   // Redirect if URL has query parameters or trailing slash
//   React.useEffect(() => {
//     if (router.asPath !== '/probability/definitions') {
//       router.push('/probability/definitions')
//     }
//   }, [router])

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebPage",
//     "name": "Algebra Terms and Definitions",
//     "description": "Comprehensive list of probability terms, definitions and examples for students and educators.",
//     "keywords": keyWords.join(", "),
//     "url": canonicalUrl,
//     "dateModified": lastModified,
//     "inLanguage": "en-US",
//     "mainEntity": {
//       "@type": "Article",
//       "name": "Probability Terms and Definitions",
//       "dateModified": lastModified,
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
//     }
//   }

//   const pageTitle = "Probability Terms and Definitions | Learn Math Class"
//   const pageDescription = "Complete guide to probability terminology, definitions, and examples. Perfect for students learning probability fundamentals and mathematical concepts."

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
//         <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>
//           Probability Terms and Definitions
//         </h1>
//         <br/>
//            <CategoriesList data={probabilityTermsList}
//                 baseUrl='/probability/definitions'
//                 // categoryExplanations={definitionsCategoryExplanations}
//                 />
//         {/* <FormulaAccordionWrapper
//           groupByField={'category'}
//           data={probabilityTermsList}
//           type='Definition'
//         /> */}
//         <br/>
//           <DefinitionGlossary
//           data={probabilityTermsList}
//           groupByField="category"
//           type="Definition"
//         />
//         <br />
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
  const { default: probabilityTermsList } = await import('@/app/api/db/definitions/probability/probabilityDefinitions')

  const keyWords = [
    'probability definitions',
    'probability terms',
    'probability glossary',
    'probability vocabulary',
    'random variable definition',
    'probability distribution terms',
    'expected value variance definitions',
    'conditional probability terminology',
    'sample space event definitions',
    'PMF PDF CDF definitions',
    'discrete continuous distributions',
    'joint probability terminology',
    'covariance correlation definitions',
    'probability theory concepts explained'
  ]

  const introArticle = {
    heading: "About This Glossary",
    content: `This glossary organizes 57 probability terms into eleven categories that together cover the vocabulary of probability theory from first principles through multivariate analysis.

[Foundations](#category_foundations) establishes the starting point with 8 entries: probability itself, random experiments, sample spaces, events, elementary events, relative frequency, probability measures, and equally likely events.

[Conditional Probability & Independence](#category_conditional_probability_&_independence) covers 3 entries on how events interact: conditional probability, independent events, and mutual exclusiveness.

[Random Variables](#category_random_variables) defines 5 entries bridging outcomes to numbers: Bernoulli experiments, sequences of Bernoulli trials, and the discrete/continuous random variable distinction.

[Distribution Functions](#category_distribution_functions) addresses 3 entries on how probability is described: cumulative distribution functions, probability mass functions, and probability density functions.

[Measures](#category_measures) spans 8 entries on numerical summaries: expected value, variance, standard deviation, covariance, correlation coefficient, conditional expectation, conditional variance, and moments.

[Discrete Distributions](#category_discrete_distributions) covers 7 named distributions: Bernoulli, binomial, Poisson, discrete uniform, geometric, hypergeometric, and negative binomial.

[Continuous Distributions](#category_continuous_distributions) presents 2 entries: exponential and normal distributions.

[Multivariate Probability](#category_multivariate_probability) spans 11 entries on joint behavior: bivariate and n-variate random variables, independence, orthogonality, uncorrelatedness, marginal distributions, joint CDFs, PMFs, PDFs, and conditional PMFs and PDFs.

[Transformations](#category_transformations) covers 3 entries: functions of random variables, PDFs of transformed variables, and moment generating functions.

[Set Operations](#category_set_operations) defines 6 entries: Venn diagrams, null sets, unions, intersections, disjoint sets, and complements.

[Visual Tools](#category_visual_tools) includes the probability tree diagram.

Each definition includes intuitive explanations, key properties, and links to detailed lesson pages. Use the search bar or category filters above to navigate.`
  }

  const faqQuestions = {
    obj1: {
      question: "What are the foundational terms in probability?",
      answer: "The foundational terms include probability (a measure between 0 and 1), random experiment (a process with uncertain outcomes), sample space (all possible outcomes), event (a subset of the sample space), and probability measure (the function assigning probabilities to events according to the Kolmogorov axioms)."
    },
    obj2: {
      question: "What is the difference between a PMF, PDF, and CDF?",
      answer: "A PMF (probability mass function) assigns probabilities to individual values of a discrete random variable. A PDF (probability density function) describes probability density for continuous variables -- its value at a point is not a probability, only integrals over intervals are. A CDF (cumulative distribution function) gives the probability of being at or below a value and works for both types."
    },
    obj3: {
      question: "What is the difference between independent and mutually exclusive events?",
      answer: "Independent events do not affect each other's probabilities: P(A and B) = P(A) times P(B). Mutually exclusive events cannot occur together: P(A and B) = 0. Two events with positive probability that are mutually exclusive are never independent, because knowing one occurred rules the other out."
    },
    obj4: {
      question: "What do expected value and variance measure?",
      answer: "Expected value is the long-run average of a random variable, representing the center of its distribution. Variance measures how spread out values are around that average. Standard deviation is the square root of variance, expressed in the same units as the variable itself."
    },
    obj5: {
      question: "What probability distributions are covered in this glossary?",
      answer: "The glossary covers seven discrete distributions (Bernoulli, binomial, Poisson, discrete uniform, geometric, hypergeometric, negative binomial) and two continuous distributions (exponential, normal). Each entry includes the distribution's purpose, notation, and links to its dedicated page."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Probability Terms and Definitions",
      "description": "Complete glossary of probability terms with definitions and examples. Covers foundations, distributions, random variables, measures, and multivariate probability.",
      "url": "https://www.learnmathclass.com/probability/definitions",
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
        "name": "Probability Terminology"
      },
      "teaches": [
        "Sample spaces, events, and probability axioms",
        "Conditional probability, independence, and Bayes theorem",
        "Random variables, PMF, PDF, and CDF",
        "Expected value, variance, covariance, and correlation",
        "Discrete and continuous probability distributions",
        "Joint distributions, marginals, and multivariate probability"
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
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Probability Terms and Definitions",
          "item": "https://www.learnmathclass.com/probability/definitions"
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
      probabilityTermsList,
      faqQuestions,
      schemas,
      introArticle,
      seoData: {
        title: "Probability Definitions & Terms | Learn Math Class",
        description: "Complete glossary of probability terms with definitions and examples. Covers foundations, distributions, random variables, measures, and multivariate probability.",
        keywords: keyWords.join(", "),
        url: "/probability/definitions",
        name: "Probability Terms and Definitions"
      }
    }
  }
}

export default function ProbabilityDefinitionsPage({
  probabilityTermsList,
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
        <h1 className='title' style={{marginTop:'0px', marginBottom:'10px'}}>
          Probability Terms and Definitions
        </h1>
        <br />
        <CategoriesList
          data={probabilityTermsList}
          baseUrl='/probability/definitions'
          introArticle={introArticle}
        />
        <br />
        <DefinitionGlossary
          data={probabilityTermsList}
          groupByField="category"
          type="Definition"
        />
        <br />
        <br />
        <br />
      </main>
    </>
  )
}