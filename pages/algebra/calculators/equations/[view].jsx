import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import SiblingsNav from '@/app/components/SiblingsNav'

import LinearEquationSolver from '@/app/components/algebra/solvers/equations/LinearEquationSolver'
import QuadraticEquationSolver from '@/app/components/algebra/solvers/equations/QuadraticEquationSolver'
import PolynomialEquationSolver from '@/app/components/algebra/solvers/equations/PolynomialEquationSolver'
import RationalEquationSolver from '@/app/components/algebra/solvers/equations/RationalEquationSolver'
import RadicalEquationSolver from '@/app/components/algebra/solvers/equations/RadicalEquationSolver'
import ExponentialEquationSolver from '@/app/components/algebra/solvers/equations/ExponentialEquationSolver'
import LogarithmicEquationSolver from '@/app/components/algebra/solvers/equations/LogarithmicEquationSolver'
import AbsValueEquationSolver from '@/app/components/algebra/solvers/equations/AbsValueEquationSolver'
import LiteralEquationSolver from '@/app/components/algebra/solvers/equations/LiteralEquationSolver'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'linear' } },
    { params: { view: 'quadratic' } },
    { params: { view: 'polynomial' } },
    { params: { view: 'rational' } },
    { params: { view: 'radical' } },
    { params: { view: 'exponential' } },
    { params: { view: 'logarithmic' } },
    { params: { view: 'absolute-value' } },
    { params: { view: 'literal' } },
  ]

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  const viewConfig = {

    'linear': {
      component: 'LinearEquationSolver',
      title: "Linear Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for linear equations of the form ax + b = cx + d. Expands brackets, combines like terms, isolates the variable, and flags identities and contradictions.",
      name: "Linear Equation Solver",
      url: "/algebra/calculators/equations/linear",
      h1: "Linear Equation Solver",
      keywords: [
        "linear equation solver",
        "solve linear equations",
        "ax + b = c",
        "linear equation calculator",
        "step by step linear equation",
        "isolate the variable",
        "solve for x",
        "first degree equation",
        "linear identity",
        "linear contradiction",
        "exact fraction solver"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'quadratic': {
      component: 'QuadraticEquationSolver',
      title: "Quadratic Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for quadratic equations ax\u00B2 + bx + c = 0. Computes the discriminant, applies the quadratic formula, identifies vertex coordinates, and graphs the parabola.",
      name: "Quadratic Equation Solver",
      url: "/algebra/calculators/equations/quadratic",
      h1: "Quadratic Equation Solver",
      keywords: [
        "quadratic equation solver",
        "ax^2 + bx + c = 0",
        "quadratic formula",
        "discriminant calculator",
        "solve quadratic equations",
        "parabola vertex",
        "quadratic factoring",
        "perfect square trinomial",
        "complete the square",
        "quadratic graph",
        "two real roots",
        "no real solutions"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'polynomial': {
      component: 'PolynomialEquationSolver',
      title: "Polynomial Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for polynomial equations up to degree 4. Uses the rational root theorem and synthetic division, with a Newton's-method fallback for irrational roots.",
      name: "Polynomial Equation Solver",
      url: "/algebra/calculators/equations/polynomial",
      h1: "Polynomial Equation Solver",
      keywords: [
        "polynomial equation solver",
        "polynomial root finder",
        "rational root theorem",
        "synthetic division",
        "cubic equation solver",
        "quartic equation solver",
        "degree 3 polynomial",
        "degree 4 polynomial",
        "Newton's method",
        "polynomial roots calculator"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'rational': {
      component: 'RationalEquationSolver',
      title: "Rational Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for rational equations with the variable in denominators. Identifies restricted values, clears fractions via the LCD, and flags extraneous solutions.",
      name: "Rational Equation Solver",
      url: "/algebra/calculators/equations/rational",
      h1: "Rational Equation Solver",
      keywords: [
        "rational equation solver",
        "fraction equation solver",
        "variable in denominator",
        "least common denominator",
        "LCD method",
        "extraneous solutions",
        "restricted values",
        "rational equation calculator",
        "clear fractions equation"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'radical': {
      component: 'RadicalEquationSolver',
      title: "Radical Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for equations containing square roots, cube roots, and higher-index radicals. Isolates the radical, raises both sides to the appropriate power, and verifies every candidate.",
      name: "Radical Equation Solver",
      url: "/algebra/calculators/equations/radical",
      h1: "Radical Equation Solver",
      keywords: [
        "radical equation solver",
        "square root equation",
        "cube root equation",
        "nth root equation",
        "solve radical equations",
        "isolate the radical",
        "extraneous solutions radical",
        "raise both sides to a power",
        "radical equation calculator"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'exponential': {
      component: 'ExponentialEquationSolver',
      title: "Exponential Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for exponential equations of the form a\u00B7b^f(x) = c. Attempts base-matching for exact solutions, falls back to natural logarithms when bases cannot be matched.",
      name: "Exponential Equation Solver",
      url: "/algebra/calculators/equations/exponential",
      h1: "Exponential Equation Solver",
      keywords: [
        "exponential equation solver",
        "solve exponential equations",
        "variable in the exponent",
        "base matching exponential",
        "natural log exponential equation",
        "ln equation solver",
        "exponential calculator",
        "b^x = c"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'logarithmic': {
      component: 'LogarithmicEquationSolver',
      title: "Logarithmic Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for logarithmic equations. Recognizes the equal-logs property, isolates the log, converts to exponential form, and respects domain restrictions on log arguments.",
      name: "Logarithmic Equation Solver",
      url: "/algebra/calculators/equations/logarithmic",
      h1: "Logarithmic Equation Solver",
      keywords: [
        "logarithmic equation solver",
        "log equation solver",
        "ln equation solver",
        "natural log equation",
        "log base b equation",
        "equal logarithms property",
        "exponential form conversion",
        "solve log equations",
        "logarithm calculator"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'absolute-value': {
      component: 'AbsValueEquationSolver',
      title: "Absolute Value Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for absolute value equations |ax + b| = c. Isolates the absolute value, splits into interior-positive and interior-negative branches, and handles edge cases.",
      name: "Absolute Value Equation Solver",
      url: "/algebra/calculators/equations/absolute-value",
      h1: "Absolute Value Equation Solver",
      keywords: [
        "absolute value equation solver",
        "|ax + b| = c",
        "solve absolute value equations",
        "split into two cases",
        "interior positive negative",
        "absolute value calculator",
        "|A| = |B| equation",
        "modulus equation solver"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

    'literal': {
      component: 'LiteralEquationSolver',
      title: "Literal Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for literal equations: rearrange multi-variable formulas to solve for any chosen variable in terms of the others, returning a closed-form symbolic answer.",
      name: "Literal Equation Solver",
      url: "/algebra/calculators/equations/literal",
      h1: "Literal Equation Solver",
      keywords: [
        "literal equation solver",
        "rearrange formula",
        "solve for a variable",
        "multi-variable formula",
        "symbolic equation solver",
        "isolate variable formula",
        "physics formula rearrangement",
        "geometry formula rearrangement",
        "F = ma solve for a"
      ],
      faqQuestions: {
        obj1: { question: "", answer: "" },
        obj2: { question: "", answer: "" },
        obj3: { question: "", answer: "" },
        obj4: { question: "", answer: "" },
        obj5: { question: "", answer: "" }
      },
      sectionsContent: {
        obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
        obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
      }
    },

  }

  const currentConfig = viewConfig[params.view]

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": getFeatureList(params.view),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": currentConfig.keywords.join(", ")
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
          "name": "Calculators",
          "item": "https://www.learnmathclass.com/algebra/calculators"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Equations",
          "item": "https://www.learnmathclass.com/algebra/calculators/equations"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(currentConfig.faqQuestions).map(key => ({
        "@type": "Question",
        "name": currentConfig.faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": currentConfig.faqQuestions[key].answer
        }
      }))
    }
  }

  return {
    props: {
      sectionsContent: currentConfig.sectionsContent,
      faqQuestions: currentConfig.faqQuestions,
      schemas,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1
    }
  }
}


function getFeatureList(view) {
  const features = {
    'linear': [
      "Step-by-step solution for linear equations",
      "Bracket expansion and like-term combination",
      "Identity and contradiction detection",
      "Exact fraction output"
    ],
    'quadratic': [
      "Discriminant computation and case routing",
      "Quadratic formula with exact roots",
      "Vertex coordinates and parabola graph",
      "Perfect-square factoring when applicable"
    ],
    'polynomial': [
      "Degrees 1 through 4 supported",
      "Rational root theorem enumeration",
      "Synthetic division root extraction",
      "Newton's method fallback for irrational roots"
    ],
    'rational': [
      "Restricted value identification",
      "Least common denominator computation",
      "Fraction clearing via LCD multiplication",
      "Extraneous solution checking"
    ],
    'radical': [
      "Square root, cube root, and nth root support",
      "Radical isolation and power-raising",
      "Resulting equation solved by routine",
      "Substitution-back verification of every candidate"
    ],
    'exponential': [
      "Exponential term isolation",
      "Base-matching for exact integer/rational solutions",
      "Natural logarithm fallback",
      "Power rule application for variable exponents"
    ],
    'logarithmic': [
      "Equal-logarithms property recognition",
      "Logarithm isolation",
      "Conversion to exponential form",
      "Domain restriction handling"
    ],
    'absolute-value': [
      "Absolute value isolation",
      "Two-branch case splitting (interior positive/negative)",
      "Edge cases: zero and negative right-hand sides",
      "|A| = |B| variant supported"
    ],
    'literal': [
      "Auto-detection of all variables in expression",
      "Target variable selection via button row",
      "Symbolic decomposition into coefficient and constant",
      "Closed-form symbolic answer"
    ]
  }
  return features[view] || []
}


export default function AlgebraEquationViewPage({
  seoData,
  sectionsContent,
  faqQuestions,
  schemas,
  currentView,
  componentName,
  h1Title
}) {

  const genericSections = Object.keys(sectionsContent).length > 0
    ? [
        { id: '1', title: sectionsContent.obj1?.title || '', link: '', content: sectionsContent.obj1?.content || '' },
        { id: '2', title: sectionsContent.obj2?.title || '', link: '', content: sectionsContent.obj2?.content || '' },
        { id: '3', title: sectionsContent.obj3?.title || '', link: '', content: sectionsContent.obj3?.content || '' },
        { id: '4', title: sectionsContent.obj4?.title || '', link: '', content: sectionsContent.obj4?.content || '' },
        { id: '5', title: sectionsContent.obj5?.title || '', link: '', content: sectionsContent.obj5?.content || '' },
        { id: '6', title: sectionsContent.obj6?.title || '', link: '', content: sectionsContent.obj6?.content || '' },
        { id: '7', title: sectionsContent.obj7?.title || '', link: '', content: sectionsContent.obj7?.content || '' },
        { id: '8', title: sectionsContent.obj8?.title || '', link: '', content: sectionsContent.obj8?.content || '' },
      ].filter(section => section.title)
    : []

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
            __html: JSON.stringify(schemas.webApplication)
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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>

      <SiblingsNav
        bg="#fafaf7"
        color="#2c5d99"
        activeColor="#143a66"
        activeBg="#dde9f7"
      >
        {componentName === 'LinearEquationSolver' && <LinearEquationSolver />}
        {componentName === 'QuadraticEquationSolver' && <QuadraticEquationSolver />}
        {componentName === 'PolynomialEquationSolver' && <PolynomialEquationSolver />}
        {componentName === 'RationalEquationSolver' && <RationalEquationSolver />}
        {componentName === 'RadicalEquationSolver' && <RadicalEquationSolver />}
        {componentName === 'ExponentialEquationSolver' && <ExponentialEquationSolver />}
        {componentName === 'LogarithmicEquationSolver' && <LogarithmicEquationSolver />}
        {componentName === 'AbsValueEquationSolver' && <AbsValueEquationSolver />}
        {componentName === 'LiteralEquationSolver' && <LiteralEquationSolver />}
      </SiblingsNav>

      <br />
      {genericSections.length > 0 && (
        <>
          <SectionTableOfContents sections={genericSections} />
          <br />
          <br />
          <br />
          <Sections sections={genericSections} />
        </>
      )}
      <br />
      <br />
      <br />
    </>
  )
}