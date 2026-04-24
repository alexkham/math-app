



// /**
//  * /pages/algebra/index.js
//  * 
//  * This is the ENTIRE page file. No sections array, no tools array,
//  * no manual lists of any kind. Everything is discovered automatically.
//  */

// import Head from 'next/head';
// import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
// import {buildSectionData} from '../../app/components/page-components/front-page/buildSectionData'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'


// const pageMeta = {
//   title: 'Algebra',
//   subtitle: 'Formulas, definitions, and core concepts — from powers and polynomials to equations and identities.',
//   breadcrumbUrl: '/algebra',
// };


// export async function getStaticProps() {
//   const { sections, sectionData } = await buildSectionData('/algebra');

//   return {
//     props: {
//       pageMeta,
//       sections,
//       sectionData,
//     },
//   };
// }


// export default function AlgebraPage({ pageMeta, sections, sectionData }) {
//   return (
//     <>
//       <Head>
//         <title>{pageMeta.title} - Formulas, Definitions &amp; Concepts | Learn Math Class</title>
//         <meta name="description" content={pageMeta.subtitle} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${pageMeta.breadcrumbUrl}`} />
//         <meta property="og:title" content={`${pageMeta.title} | Learn Math Class`} />
//         <meta property="og:description" content={pageMeta.subtitle} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${pageMeta.breadcrumbUrl}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />
//         <meta name="robots" content="index, follow" />
//       </Head>
//        <OperaSidebar 
//                  side='right'
//                  // topOffset='65px' 
//                  sidebarWidth='45px'
//                  panelWidth='200px'
//                  iconColor='white'
//                  panelBackgroundColor='#f2f2f2'
//                /> 
      
//       <SectionFrontPage
//         meta={pageMeta}
//         sections={sections}
//         sectionData={sectionData}
//       />
//     </>
//   );
// }



/**
 * /pages/algebra/index.js
 * 
 * This is the ENTIRE page file. No sections array, no tools array,
 * no manual lists of any kind. Everything is discovered automatically.
 */

import Head from 'next/head';
import SectionFrontPage from '../../app/components/page-components/front-page/SectionFrontPage';
import {buildSectionData} from '../../app/components/page-components/front-page/buildSectionData'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'


const pageMeta = {
  title: 'Algebra',
  subtitle: 'Formulas, definitions, and core concepts — from powers and polynomials to equations and identities.',
  breadcrumbUrl: '/algebra',
};


export async function getStaticProps() {
  const { sections, sectionData } = await buildSectionData('/algebra');

  const keyWords = [
    'algebra',
    'algebra formulas',
    'algebra definitions',
    'algebra equations',
    'polynomials',
    'logarithms',
    'roots and radicals',
    'powers and exponents',
    'algebraic identities',
    'algebra calculators',
    'algebra visual tools',
    'inequalities in algebra',
    'binomial identities',
    'learn algebra online'
  ];

  const faqQuestions = {
    obj1: {
      question: "What topics are covered in this algebra section?",
      answer: "The section covers equations, polynomials, logarithms, roots and radicals, powers and exponents, inequalities, binomial identities, and algebraic formulas. Each topic includes theory pages, a glossary of definitions, and interactive visual tools."
    },
    obj2: {
      question: "What algebra tools and calculators are available?",
      answer: "The section includes interactive visual tools for exploring algebraic concepts graphically, along with links to calculators for equations, polynomials, and logarithms. Each tool provides step-by-step solutions and dynamic visualizations."
    },
    obj3: {
      question: "How is the algebra content organized?",
      answer: "Content is organized into subsections by topic, plus two cross-cutting resources: a formulas reference with categorized equations and identities, and a definitions glossary covering all key algebra terms with examples."
    },
    obj4: {
      question: "Is this algebra section suitable for beginners?",
      answer: "Yes. Each topic starts with foundational definitions and builds toward more advanced material. The glossary, worked examples, and visual tools make the content accessible to high school students, college students, and self-learners at any level."
    },
    obj5: {
      question: "What is the difference between the formulas and definitions pages?",
      answer: "The formulas page collects key algebraic equations and identities organized by category, designed for quick reference. The definitions page provides precise explanations of algebra terminology with properties and worked examples for deeper understanding."
    }
  };

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Algebra",
      "description": "Comprehensive algebra resource covering equations, polynomials, logarithms, roots, exponents, inequalities, and identities. Includes formulas, definitions, and interactive visual tools.",
      "url": "https://www.learnmathclass.com/algebra",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Algebra"
      },
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
      "dateModified": new Date().toISOString(),
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Algebra Terms and Definitions",
          "url": "https://www.learnmathclass.com/algebra/definitions",
          "description": "Comprehensive algebra glossary with definitions and examples across five categories"
        },
        {
          "@type": "WebPage",
          "name": "Algebra Formulas and Examples",
          "url": "https://www.learnmathclass.com/algebra/formulas",
          "description": "Categorized collection of algebra formulas and identities for quick reference"
        },
        {
          "@type": "WebPage",
          "name": "Equations",
          "url": "https://www.learnmathclass.com/algebra/equations",
          "description": "Theory and methods for solving linear, quadratic, polynomial, and rational equations"
        },
        {
          "@type": "WebPage",
          "name": "Polynomials",
          "url": "https://www.learnmathclass.com/algebra/polynomials",
          "description": "Polynomial operations, factoring, division, roots, and the Fundamental Theorem of Algebra"
        },
        {
          "@type": "WebPage",
          "name": "Logarithms",
          "url": "https://www.learnmathclass.com/algebra/logarithms",
          "description": "Logarithmic functions, identities, equations, and change of base"
        },
        {
          "@type": "WebPage",
          "name": "Powers and Exponents",
          "url": "https://www.learnmathclass.com/algebra/powers-and-exponents",
          "description": "Laws of exponents, exponential functions, growth and decay"
        },
        {
          "@type": "WebPage",
          "name": "Roots and Radicals",
          "url": "https://www.learnmathclass.com/algebra/roots-and-radicals",
          "description": "Square roots, cube roots, radical expressions, simplification, and rationalization"
        },
        {
          "@type": "WebPage",
          "name": "Inequalities in Algebra",
          "url": "https://www.learnmathclass.com/algebra/inequalities",
          "description": "Solving and graphing linear, quadratic, and absolute value inequalities"
        },
        {
          "@type": "WebPage",
          "name": "Basic Binomial Identities",
          "url": "https://www.learnmathclass.com/algebra/basic-binomial-identities",
          "description": "Fundamental binomial expansion formulas and algebraic identities"
        },
        {
          "@type": "WebPage",
          "name": "Algebra Visual Tools",
          "url": "https://www.learnmathclass.com/algebra/visual-tools",
          "description": "Interactive visualizations for exploring algebraic concepts"
        }
      ]
    },

    itemList: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "name": "Equations",
            "url": "https://www.learnmathclass.com/algebra/equations",
            "description": "Theory and methods for solving algebraic equations"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "WebPage",
            "name": "Polynomials",
            "url": "https://www.learnmathclass.com/algebra/polynomials",
            "description": "Polynomial operations, factoring, and roots"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "WebPage",
            "name": "Logarithms",
            "url": "https://www.learnmathclass.com/algebra/logarithms",
            "description": "Logarithmic functions, identities, and equations"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "WebPage",
            "name": "Powers and Exponents",
            "url": "https://www.learnmathclass.com/algebra/powers-and-exponents",
            "description": "Laws of exponents and exponential functions"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "WebPage",
            "name": "Roots and Radicals",
            "url": "https://www.learnmathclass.com/algebra/roots-and-radicals",
            "description": "Radical expressions, simplification, and rationalization"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "WebPage",
            "name": "Inequalities in Algebra",
            "url": "https://www.learnmathclass.com/algebra/inequalities",
            "description": "Solving and graphing algebraic inequalities"
          }
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "WebPage",
            "name": "Basic Binomial Identities",
            "url": "https://www.learnmathclass.com/algebra/basic-binomial-identities",
            "description": "Fundamental binomial expansion formulas"
          }
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "WebPage",
            "name": "Algebra Visual Tools",
            "url": "https://www.learnmathclass.com/algebra/visual-tools",
            "description": "Interactive visualizations for algebra concepts"
          }
        }
      ]
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
  };

  return {
    props: {
      pageMeta,
      sections,
      sectionData,
      faqQuestions,
      schemas,
      seoData: {
        title: "Algebra: Formulas, Definitions & Tools | Learn Math Class",
        description: "Learn algebra with interactive tools, formulas, and definitions. Covers equations, polynomials, logarithms, roots, exponents, inequalities, and identities.",
        keywords: keyWords.join(", "),
        url: "/algebra",
        name: "Algebra"
      }
    },
  };
}


export default function AlgebraPage({ pageMeta, sections, sectionData, faqQuestions, schemas, seoData }) {
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.collectionPage)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas.itemList)
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
       <OperaSidebar 
                 side='right'
                 sidebarWidth='45px'
                 panelWidth='200px'
                 iconColor='white'
                 panelBackgroundColor='#f2f2f2'
               /> 
      
      <SectionFrontPage
        meta={pageMeta}
        sections={sections}
        sectionData={sectionData}
      />
    </>
  );
}