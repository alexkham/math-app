// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import React from 'react'
// import '@/pages/pages.css'
// import SiblingsNav from '@/app/components/SiblingsNav'

// import LinearInequalitySolver from '@/app/components/algebra/solvers/inequalities/LinearInequalitySolver'
// import QuadraticInequalitySolver from '@/app/components/algebra/solvers/inequalities/QuadraticInequalitySolver'
// import RationalInequalitySolver from '@/app/components/algebra/solvers/inequalities/RationalInequalitySolver'
// import RadicalInequalitySolver from '@/app/components/algebra/solvers/inequalities/RadicalInequalitySolver'
// import ExponentialInequalitySolver from '@/app/components/algebra/solvers/inequalities/ExponentialInequalitySolver'
// import LogarithmicInequalitySolver from '@/app/components/algebra/solvers/inequalities/LogarithmicInequalitySolver'
// import AbsValueInequalitySolver from '@/app/components/algebra/solvers/inequalities/AbsValueInequalitySolver'


// export async function getStaticPaths() {
//   const paths = [
//     { params: { view: 'linear' } },
//     { params: { view: 'quadratic' } },
//     { params: { view: 'rational' } },
//     { params: { view: 'radical' } },
//     { params: { view: 'exponential' } },
//     { params: { view: 'logarithmic' } },
//     { params: { view: 'absolute-value' } },
//   ]

//   return { paths, fallback: false }
// }


// export async function getStaticProps({ params }) {

//   const viewConfig = {

//     'linear': {
//       component: 'LinearInequalitySolver',
//       title: "Free Linear Inequality Solver - Step by Step | Learn Math Class",
//       description: "Free, step-by-step solver for linear inequalities. Isolates the variable, tracks every direction flip, and reports the answer in interval notation.",
//       name: "Linear Inequality Solver",
//       url: "/algebra/calculators/inequalities/linear",
//       h1: "Linear Inequality Solver",
//       keywords: [
//         "free linear inequality solver",
//         "linear inequality calculator",
//         "solve linear inequalities",
//         "interval notation calculator",
//         "ax + b > c",
//         "free math solver",
//         "step by step linear inequality",
//         "first degree inequality"
//       ],
//       faqQuestions: {
//         obj1: { question: "", answer: "" },
//         obj2: { question: "", answer: "" },
//         obj3: { question: "", answer: "" },
//         obj4: { question: "", answer: "" },
//         obj5: { question: "", answer: "" }
//       },
//       sectionsContent: {
//         obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
//       }
//     },

//     'quadratic': {
//       component: 'QuadraticInequalitySolver',
//       title: "Free Quadratic Inequality Solver - Step by Step | Learn Math Class",
//       description: "Free, step-by-step solver for quadratic inequalities. Finds roots, tests intervals on the parabola, and returns the solution in interval notation.",
//       name: "Quadratic Inequality Solver",
//       url: "/algebra/calculators/inequalities/quadratic",
//       h1: "Quadratic Inequality Solver",
//       keywords: [
//         "free quadratic inequality solver",
//         "quadratic inequality calculator",
//         "ax^2 + bx + c > 0",
//         "parabola inequality",
//         "sign analysis quadratic",
//         "free math calculator",
//         "interval test method"
//       ],
//       faqQuestions: {
//         obj1: { question: "", answer: "" },
//         obj2: { question: "", answer: "" },
//         obj3: { question: "", answer: "" },
//         obj4: { question: "", answer: "" },
//         obj5: { question: "", answer: "" }
//       },
//       sectionsContent: {
//         obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
//       }
//     },

//     'rational': {
//       component: 'RationalInequalitySolver',
//       title: "Free Rational Inequality Solver - Step by Step | Learn Math Class",
//       description: "Free, step-by-step solver for rational inequalities using the sign chart method. Finds critical points, tests intervals, and reports interval notation.",
//       name: "Rational Inequality Solver",
//       url: "/algebra/calculators/inequalities/rational",
//       h1: "Rational Inequality Solver",
//       keywords: [
//         "free rational inequality solver",
//         "rational inequality calculator",
//         "sign chart calculator",
//         "P(x)/Q(x) > 0",
//         "critical points rational",
//         "free math solver",
//         "fraction inequality"
//       ],
//       faqQuestions: {
//         obj1: { question: "", answer: "" },
//         obj2: { question: "", answer: "" },
//         obj3: { question: "", answer: "" },
//         obj4: { question: "", answer: "" },
//         obj5: { question: "", answer: "" }
//       },
//       sectionsContent: {
//         obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
//       }
//     },

//     'radical': {
//       component: 'RadicalInequalitySolver',
//       title: "Free Radical Inequality Solver - Step by Step | Learn Math Class",
//       description: "Free, step-by-step solver for radical inequalities. Handles domain restrictions, raises both sides to remove the radical, and intersects with the domain.",
//       name: "Radical Inequality Solver",
//       url: "/algebra/calculators/inequalities/radical",
//       h1: "Radical Inequality Solver",
//       keywords: [
//         "free radical inequality solver",
//         "square root inequality",
//         "domain restriction radical",
//         "free math calculator",
//         "nth root inequality",
//         "radical inequality calculator"
//       ],
//       faqQuestions: {
//         obj1: { question: "", answer: "" },
//         obj2: { question: "", answer: "" },
//         obj3: { question: "", answer: "" },
//         obj4: { question: "", answer: "" },
//         obj5: { question: "", answer: "" }
//       },
//       sectionsContent: {
//         obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
//       }
//     },

//     'exponential': {
//       component: 'ExponentialInequalitySolver',
//       title: "Free Exponential Inequality Solver - Step by Step | Learn Math Class",
//       description: "Free, step-by-step solver for exponential inequalities. Isolates the exponential, applies a logarithm with correct direction handling per base.",
//       name: "Exponential Inequality Solver",
//       url: "/algebra/calculators/inequalities/exponential",
//       h1: "Exponential Inequality Solver",
//       keywords: [
//         "free exponential inequality solver",
//         "b^x inequality",
//         "logarithm inequality",
//         "free math solver",
//         "exponential inequality calculator",
//         "direction flip log base"
//       ],
//       faqQuestions: {
//         obj1: { question: "", answer: "" },
//         obj2: { question: "", answer: "" },
//         obj3: { question: "", answer: "" },
//         obj4: { question: "", answer: "" },
//         obj5: { question: "", answer: "" }
//       },
//       sectionsContent: {
//         obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
//       }
//     },

//     'logarithmic': {
//       component: 'LogarithmicInequalitySolver',
//       title: "Free Logarithmic Inequality Solver - Step by Step | Learn Math Class",
//       description: "Free, step-by-step solver for logarithmic inequalities. Handles domain restrictions, base-direction logic, and converts to exponential form to solve.",
//       name: "Logarithmic Inequality Solver",
//       url: "/algebra/calculators/inequalities/logarithmic",
//       h1: "Logarithmic Inequality Solver",
//       keywords: [
//         "free logarithmic inequality solver",
//         "log inequality calculator",
//         "ln inequality",
//         "log base b inequality",
//         "free math calculator",
//         "domain restriction log"
//       ],
//       faqQuestions: {
//         obj1: { question: "", answer: "" },
//         obj2: { question: "", answer: "" },
//         obj3: { question: "", answer: "" },
//         obj4: { question: "", answer: "" },
//         obj5: { question: "", answer: "" }
//       },
//       sectionsContent: {
//         obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
//       }
//     },

//     'absolute-value': {
//       component: 'AbsValueInequalitySolver',
//       title: "Free Absolute Value Inequality Solver - Step by Step | Learn Math Class",
//       description: "Free, step-by-step solver for absolute value inequalities. Splits into compound or union form, handles edge cases, returns interval notation.",
//       name: "Absolute Value Inequality Solver",
//       url: "/algebra/calculators/inequalities/absolute-value",
//       h1: "Absolute Value Inequality Solver",
//       keywords: [
//         "free absolute value inequality solver",
//         "|ax + b| < c",
//         "compound inequality solver",
//         "union inequality",
//         "free math solver",
//         "modulus inequality calculator"
//       ],
//       faqQuestions: {
//         obj1: { question: "", answer: "" },
//         obj2: { question: "", answer: "" },
//         obj3: { question: "", answer: "" },
//         obj4: { question: "", answer: "" },
//         obj5: { question: "", answer: "" }
//       },
//       sectionsContent: {
//         obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//         obj8: { title: ``, content: ``, before: ``, after: ``, link: '' }
//       }
//     },

//   }

//   const currentConfig = viewConfig[params.view]

//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": currentConfig.name,
//       "description": currentConfig.description,
//       "url": `https://www.learnmathclass.com${currentConfig.url}`,
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": getFeatureList(params.view),
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": currentConfig.keywords.join(", ")
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
//         { "@type": "ListItem", "position": 2, "name": "Algebra", "item": "https://www.learnmathclass.com/algebra" },
//         { "@type": "ListItem", "position": 3, "name": "Calculators", "item": "https://www.learnmathclass.com/algebra/calculators" },
//         { "@type": "ListItem", "position": 4, "name": "Inequalities", "item": "https://www.learnmathclass.com/algebra/calculators/inequalities" },
//         { "@type": "ListItem", "position": 5, "name": currentConfig.name, "item": `https://www.learnmathclass.com${currentConfig.url}` }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(currentConfig.faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": currentConfig.faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": currentConfig.faqQuestions[key].answer
//         }
//       }))
//     }
//   }

//   return {
//     props: {
//       sectionsContent: currentConfig.sectionsContent,
//       faqQuestions: currentConfig.faqQuestions,
//       schemas,
//       seoData: {
//         title: currentConfig.title,
//         description: currentConfig.description,
//         keywords: currentConfig.keywords.join(", "),
//         url: currentConfig.url,
//         name: currentConfig.name
//       },
//       currentView: params.view,
//       componentName: currentConfig.component,
//       h1Title: currentConfig.h1
//     }
//   }
// }


// function getFeatureList(view) {
//   const features = {
//     'linear': [
//       "Step-by-step linear inequality solving",
//       "Direction-flip tracking on negative multiplication/division",
//       "Interval notation output",
//       "Identity and contradiction detection"
//     ],
//     'quadratic': [
//       "Root finding via discriminant",
//       "Interval testing on the parabola",
//       "Open or closed bracket selection by inequality direction",
//       "Graphical sign analysis"
//     ],
//     'rational': [
//       "Sign chart method",
//       "Critical point identification (numerator + denominator zeros)",
//       "Interval-by-interval testing",
//       "Strict denominator exclusion regardless of inequality direction"
//     ],
//     'radical': [
//       "Domain restriction solving",
//       "Power-raising to remove the radical",
//       "Intersection of resulting solution with domain",
//       "Even and odd index support"
//     ],
//     'exponential': [
//       "Exponential term isolation",
//       "Logarithm application to both sides",
//       "Direction-flip handling for bases between 0 and 1",
//       "Always-true / never-true edge cases"
//     ],
//     'logarithmic': [
//       "Logarithm isolation",
//       "Conversion to exponential form",
//       "Direction-flip handling for bases between 0 and 1",
//       "Domain intersection on every log argument"
//     ],
//     'absolute-value': [
//       "Compound inequality form for |A| < c",
//       "Union form for |A| > c",
//       "Edge-case handling for c \u2264 0",
//       "Interval notation output"
//     ]
//   }
//   return features[view] || []
// }


// export default function AlgebraInequalityViewPage({
//   seoData,
//   sectionsContent,
//   faqQuestions,
//   schemas,
//   currentView,
//   componentName,
//   h1Title
// }) {

//   const genericSections = Object.keys(sectionsContent).length > 0
//     ? [
//         { id: '1', title: sectionsContent.obj1?.title || '', link: '', content: sectionsContent.obj1?.content || '' },
//         { id: '2', title: sectionsContent.obj2?.title || '', link: '', content: sectionsContent.obj2?.content || '' },
//         { id: '3', title: sectionsContent.obj3?.title || '', link: '', content: sectionsContent.obj3?.content || '' },
//         { id: '4', title: sectionsContent.obj4?.title || '', link: '', content: sectionsContent.obj4?.content || '' },
//         { id: '5', title: sectionsContent.obj5?.title || '', link: '', content: sectionsContent.obj5?.content || '' },
//         { id: '6', title: sectionsContent.obj6?.title || '', link: '', content: sectionsContent.obj6?.content || '' },
//         { id: '7', title: sectionsContent.obj7?.title || '', link: '', content: sectionsContent.obj7?.content || '' },
//         { id: '8', title: sectionsContent.obj8?.title || '', link: '', content: sectionsContent.obj8?.content || '' },
//       ].filter(section => section.title)
//     : []

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

//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }} />
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
//       </Head>
//       <br />
//       <br />
//       <br />
//       <br />
//       <OperaSidebar
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <Breadcrumb />
//       <br />
//       <br />
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>

//       <SiblingsNav
//         bg="#fafaf7"
//         color="#2c5d99"
//         activeColor="#143a66"
//         activeBg="#dde9f7"
//       >
//         {componentName === 'LinearInequalitySolver' && <LinearInequalitySolver />}
//         {componentName === 'QuadraticInequalitySolver' && <QuadraticInequalitySolver />}
//         {componentName === 'RationalInequalitySolver' && <RationalInequalitySolver />}
//         {componentName === 'RadicalInequalitySolver' && <RadicalInequalitySolver />}
//         {componentName === 'ExponentialInequalitySolver' && <ExponentialInequalitySolver />}
//         {componentName === 'LogarithmicInequalitySolver' && <LogarithmicInequalitySolver />}
//         {componentName === 'AbsValueInequalitySolver' && <AbsValueInequalitySolver />}
//       </SiblingsNav>

//       <br />
//       {genericSections.length > 0 && (
//         <>
//           <SectionTableOfContents sections={genericSections} />
//           <br />
//           <br />
//           <br />
//           <Sections sections={genericSections} />
//         </>
//       )}
//       <br />
//       <br />
//       <br />
//     </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import SiblingsNav from '@/app/components/SiblingsNav'

import LinearInequalitySolver from '@/app/components/algebra/solvers/inequalities/LinearInequalitySolver'
import QuadraticInequalitySolver from '@/app/components/algebra/solvers/inequalities/QuadraticInequalitySolver'
import RationalInequalitySolver from '@/app/components/algebra/solvers/inequalities/RationalInequalitySolver'
import RadicalInequalitySolver from '@/app/components/algebra/solvers/inequalities/RadicalInequalitySolver'
import ExponentialInequalitySolver from '@/app/components/algebra/solvers/inequalities/ExponentialInequalitySolver'
import LogarithmicInequalitySolver from '@/app/components/algebra/solvers/inequalities/LogarithmicInequalitySolver'
import AbsValueInequalitySolver from '@/app/components/algebra/solvers/inequalities/AbsValueInequalitySolver'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'linear' } },
    { params: { view: 'quadratic' } },
    { params: { view: 'rational' } },
    { params: { view: 'radical' } },
    { params: { view: 'exponential' } },
    { params: { view: 'logarithmic' } },
    { params: { view: 'absolute-value' } },
  ]

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  const viewConfig = {

    'linear': {
      component: 'LinearInequalitySolver',
      title: "Free Linear Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for linear inequalities. Isolates the variable, tracks every direction flip, and reports the answer in interval notation.",
      name: "Linear Inequality Solver",
      url: "/algebra/calculators/inequalities/linear",
      h1: "Linear Inequality Solver",
      category: 'Inequalities',
      subCategory: 'Solvers',
      icon: 'x',
      keywords: [
        "free linear inequality solver",
        "linear inequality calculator",
        "solve linear inequalities",
        "interval notation calculator",
        "ax + b > c",
        "free math solver",
        "step by step linear inequality",
        "first degree inequality"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a linear inequality?",
    answer: "A linear inequality compares two linear expressions using one of the symbols less than, greater than, less than or equal, or greater than or equal. The standard form is ax + b compared to c. The solution is a ray on the number line, not a single point as with linear equations."
  },
  obj2: {
    question: "When do you flip the inequality sign?",
    answer: "Flip the direction of the inequality when you multiply or divide both sides by a negative number. Addition, subtraction, and multiplication or division by a positive number all preserve direction. Forgetting to flip when dividing by a negative is the most common mistake; the solver tracks this automatically."
  },
  obj3: {
    question: "What is interval notation?",
    answer: "Interval notation expresses a range using parentheses for excluded endpoints and brackets for included endpoints. The inequality x less than 5 is the interval from negative infinity to 5, written with parentheses. The inequality x greater than or equal to 2 starts at 2 inclusive and extends to infinity."
  },
  obj4: {
    question: "What happens when the variable cancels out?",
    answer: "If the variable cancels and the remaining statement is true (such as 3 less than 7), the inequality holds for all real numbers. If the remaining statement is false (such as 5 less than 2), no value works and the solution set is empty. The solver detects both cases and reports them."
  },
  obj5: {
    question: "How do you check a linear inequality solution?",
    answer: "Pick any value in the proposed solution set and substitute it back into the original inequality; it should produce a true statement. Then pick a value outside the proposed set; it should produce a false statement. This two-point test confirms both the boundary and the direction."
}
},
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an inequality display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $2x + 3 < 11$ and press Enter &mdash; the right panel shows the isolation steps and the answer $x < 4$ together with the interval $(-\\infty, 4)$.
&bull; Click the &quot;Negative Coefficient&quot; example template &mdash; an inequality with a negative coefficient on the variable loads. Watch the solver flip the inequality sign during the divide-by-negative step.
&bull; Try the &quot;Always True&quot; template to see the case where the variable cancels and the inequality reduces to a true statement, giving all real numbers as the solution.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The dedicated &quot;Ineq&quot; row in the button panel inserts the four inequality symbols: $<$, $>$, $\\leq$, $\\geq$.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Inequalities with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus.
&bull; **Ineq row** &mdash; the four inequality symbols, highlighted in amber to distinguish them from the binary operators.
&bull; **Bracket row** &mdash; parentheses for grouping subexpressions.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type $<$ and $>$ directly, type $<=$ or $>=$ to insert the combined symbols $\\leq$ and $\\geq$, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the one after it.

The Clear button empties the display entirely; the curved-arrow button steps through the undo stack one edit at a time. The backspace icon on the action row deletes one character to the left of the cursor.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random inequality of that form. Clicking again produces a new random version.

&bull; **One Step** &mdash; $x + a < b$. Single addition or subtraction move to isolate.
&bull; **Two Step** &mdash; $ax + b > c$. Two moves: subtract the constant, then divide by the coefficient.
&bull; **Negative Coefficient** &mdash; $-ax + b \\leq c$. Exercises the direction-flip rule during the divide step.
&bull; **Variables Both Sides** &mdash; $ax + b \\geq cx + d$. Requires first collecting the variable terms on one side.
&bull; **Distributive** &mdash; $a(x + b) < c$. Tests distribution before isolation.
&bull; **Negative Distributive** &mdash; $-a(x + b) > c$. Both distribution and direction-flip together.
&bull; **Fraction Coefficient** &mdash; $x/a + b \\leq c$. The coefficient appears as a division by $a$, but division by a positive constant does not flip direction.
&bull; **Always True** &mdash; $ax + b < ax + c$ with $b < c$. The variable cancels and the inequality reduces to a true constant statement.

Roughly 80 percent of generated inequalities produce clean integer solutions; the remaining 20 percent exercise unusual or decimal cases.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The labels reflect what the solver did, not just what the result is.

&bull; **Identify Terms** &mdash; restates the inequality with the variable coefficient and the constant on each side called out explicitly.
&bull; **Move Variable Terms to Left** (when both sides contain the variable) &mdash; collects the variable on the left side.
&bull; **Move Constants to Right** &mdash; isolates the variable term on the left and the constant on the right.
&bull; **Divide by Negative Coefficient** (when applicable) &mdash; explicitly notes that the inequality direction flips because the coefficient is negative.
&bull; **Divide by Coefficient** (when positive and not 1) &mdash; standard division with no flip.
&bull; **Always True** or **Never True** (when applicable) &mdash; the variable cancels and the remaining statement determines whether all real numbers or no values satisfy the inequality.

The final-answer card at the bottom shows the answer in three forms: the inequality form ($x < c$), a plain-language note (&quot;$x$ is less than $c$&quot;), and the interval notation (such as $(-\\infty, c)$). For empty solution sets the interval is the empty set $\\emptyset$; for all reals it is $(-\\infty, \\infty)$.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Direction-Flip Rule — Why It Works`,
    content: `Inequalities behave like equations under addition and subtraction but differently under multiplication and division by a negative number.

**The principle.** Negation reverses order on the number line. If $a < b$ then $-a > -b$. The smaller number, once negated, becomes the larger. Multiplying or dividing both sides of an inequality by a negative number applies this negation, so the comparison direction must flip to preserve truth.

**Example.** Start with $3 < 5$ &mdash; clearly true. Multiply both sides by $-2$. Without flipping: $-6 < -10$, false. With flipping: $-6 > -10$, true. The flip is required for the inequality to remain valid.

**In linear inequality solving** the rule applies whenever you divide by the coefficient of the variable and that coefficient is negative. For $-3x + 7 < 16$, subtract 7 to get $-3x < 9$, then divide by $-3$ and flip: $x > -3$. The solver shows this step explicitly so the flip is never missed.

**What does not flip.** Adding or subtracting any number on both sides preserves direction. Multiplying or dividing by a positive number preserves direction. So the only operation that flips direction is multiplication or division by a negative number.

**Special case &mdash; multiplication by zero.** Multiplying both sides by zero collapses both sides to zero and produces $0 = 0$, which is true but uninformative. Avoid this move entirely; the solver never inserts it.

For deeper coverage see **linear inequality** and **inequality properties**.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Linear Inequality?`,
    content: `A linear inequality is a comparison between two linear expressions using one of the four symbols $<$, $>$, $\\leq$, $\\geq$. The general form in one variable is

$$ax + b \\;\\square\\; c$$

where $\\square$ is one of the four symbols and $a$, $b$, $c$ are real numbers with $a \\neq 0$. The variable $x$ appears only to the first power, never squared, cubed, in a denominator, or inside an absolute value.

**Solution form.** Every linear inequality has one of three solution shapes:

&bull; **A ray** &mdash; the most common case. The solution is everything to one side of a boundary point, like $x < 4$ or $x \\geq -2$.
&bull; **All real numbers** &mdash; the variable cancels and the remaining statement is true (an identity).
&bull; **No solution** &mdash; the variable cancels and the remaining statement is false (a contradiction).

**Strict versus non-strict.** The strict inequalities $<$ and $>$ exclude the boundary point; the non-strict $\\leq$ and $\\geq$ include it. In interval notation the boundary is shown with a parenthesis (excluded) or a bracket (included).

**Compound forms.** Two linear inequalities can be joined by AND (both must hold &mdash; the solution is an intersection) or by OR (either may hold &mdash; the solution is a union). This solver handles single inequalities; chained or compound forms are covered separately.

For deeper coverage see **linear inequality**, **interval notation**, and **compound inequality**.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Four moves solve any linear inequality. The first three are identical to linear-equation moves; the fourth is the inequality-specific step.

&bull; **Move 1: Distribute brackets.** Expand any parenthesized terms. $2(x - 3) < 8$ becomes $2x - 6 < 8$.

&bull; **Move 2: Collect variable terms on one side.** Add or subtract the variable term to put all $x$ terms on the left (or right; either works). $3x - 1 \\geq x + 5$ becomes $2x - 1 \\geq 5$ after subtracting $x$.

&bull; **Move 3: Collect constant terms on the other side.** Add or subtract to leave only the variable term on one side. $2x - 1 \\geq 5$ becomes $2x \\geq 6$ after adding 1.

&bull; **Move 4: Divide by the coefficient of the variable.** This is where the flip rule may apply. $2x \\geq 6$ becomes $x \\geq 3$ (no flip because 2 is positive). But $-2x \\geq 6$ becomes $x \\leq -3$ (flip because $-2$ is negative).

**The solver implementation.** Internally, the solver collects coefficients linearly: left side becomes $\\text{coeff}_L \\cdot x + \\text{const}_L$ and right side becomes $\\text{coeff}_R \\cdot x + \\text{const}_R$. The net coefficient is $\\text{coeff}_L - \\text{coeff}_R$ and the net constant is $\\text{const}_R - \\text{const}_L$. The boundary value is the net constant divided by the net coefficient, with the direction flipping if and only if the net coefficient is negative.

**Edge cases the solver handles automatically.**

&bull; **Net coefficient is zero, net constant satisfies the inequality** &mdash; all real numbers.
&bull; **Net coefficient is zero, net constant violates the inequality** &mdash; no solution.

For comprehensive treatment see **solving linear inequalities** and **algebraic manipulation**.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Linear Equation** &mdash; the equality counterpart. Same isolation moves apply, but no direction-flip step exists because equations have no direction to flip.

**Compound Inequality** &mdash; two linear inequalities joined by AND or OR. The solution to an AND compound is the intersection of the individual solution sets; the solution to an OR compound is the union.

**Interval Notation** &mdash; the standard way to express the solution set of an inequality. Open parentheses for strict, square brackets for non-strict, infinity always with parentheses, the empty set written as $\\emptyset$, and the full real line as $(-\\infty, \\infty)$.

**Quadratic Inequality** &mdash; the next degree up. The variable appears squared and the solution set can be one or two intervals, requiring sign analysis on a parabola. Compare with quadratic equations.

**Absolute Value Inequality** &mdash; inequalities containing $|x|$ or $|ax + b|$. They split into compound forms: $|A| < c$ becomes $-c < A < c$ (an AND compound), while $|A| > c$ becomes $A < -c$ or $A > c$ (an OR compound).

**Number Line** &mdash; the geometric representation of the solution set. A ray drawn on the number line corresponds exactly to a one-variable linear inequality solution.

**Sign Chart** &mdash; the technique used for polynomial and rational inequalities. For linear inequalities the sign chart has only one critical point and reduces to the direct division approach used here.

**Solution Set** &mdash; the formal name for the collection of values that make the inequality true. For linear inequalities the solution set is always a ray, the empty set, or all of $\\mathbb{R}$.

**Linear Function** &mdash; the function $f(x) = ax + b$ whose comparison with a constant produces a linear inequality. The boundary of the solution is the $x$-intercept of the line $y = ax + b - c$.`,
    before: ``, after: ``, link: ''
  }
}
    },

    'quadratic': {
      component: 'QuadraticInequalitySolver',
      title: "Free Quadratic Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for quadratic inequalities. Finds roots, tests intervals on the parabola, and returns the solution in interval notation.",
      name: "Quadratic Inequality Solver",
      url: "/algebra/calculators/inequalities/quadratic",
      h1: "Quadratic Inequality Solver",
      category: 'Inequalities',
      subCategory: 'Solvers',
      icon: 'x²',
      keywords: [
        "free quadratic inequality solver",
        "quadratic inequality calculator",
        "ax^2 + bx + c > 0",
        "parabola inequality",
        "sign analysis quadratic",
        "free math calculator",
        "interval test method"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a quadratic inequality?",
    answer: "A quadratic inequality compares a quadratic expression to zero (or another value) using less than, greater than, less than or equal, or greater than or equal. The standard form is ax squared plus bx plus c compared to 0. The solution is a set of intervals rather than a finite list of points."
  },
  obj2: {
    question: "How do you solve a quadratic inequality?",
    answer: "Move everything to one side so the right side is zero. Find the roots using the quadratic formula or factoring. Sketch or test the parabola: the expression is negative between the roots and positive outside (when the leading coefficient is positive). Pick the intervals matching the inequality direction."
  },
  obj3: {
    question: "What if the discriminant is negative?",
    answer: "When the discriminant is negative, the parabola has no real roots and never touches the x-axis. The expression keeps a single sign everywhere. With a positive leading coefficient it is always positive: greater-than-zero inequalities hold for all reals; less-than-zero inequalities have no solution."
  },
  obj4: {
    question: "When is the solution a single point?",
    answer: "When the discriminant equals zero and the inequality is non-strict in the direction the parabola points. The parabola touches the x-axis at exactly one point. For a non-strict less-than-or-equal-to-zero inequality with a positive leading coefficient, only the touch-point satisfies the condition."
  },
  obj5: {
    question: "How do you write the solution in interval notation?",
    answer: "For a between-the-roots solution, use a single bracketed interval such as the open or closed interval from the first root to the second. For an outside-the-roots solution, use a union of two intervals reaching out to negative and positive infinity. Endpoints use parentheses for strict inequalities and brackets for non-strict."
}
},
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an inequality display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $x^2 - 5x + 6 < 0$ and press Enter &mdash; the right panel finds roots $x = 2$ and $x = 3$, sketches the upward parabola, and reports the between-the-roots solution $2 < x < 3$ in the interval $(2, 3)$.
&bull; Click the &quot;No Real Roots&quot; example template &mdash; an inequality like $x^2 + 5 > 0$ loads. The discriminant is negative, the parabola sits above the x-axis, and the answer is all real numbers.
&bull; Try the &quot;Negative Leading&quot; template &mdash; an inequality with $-x^2$. The solver multiplies both sides by $-1$, flips the direction, then proceeds as a standard upward-parabola problem.

The Solve button is disabled until you enter something. The dedicated &quot;Ineq&quot; row inserts the four inequality symbols; the $x^2$ shortcut button inserts a squared variable directly.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Inequalities with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus.
&bull; **Ineq row** &mdash; the four inequality symbols, highlighted in amber.
&bull; **Special row** &mdash; the caret operator for arbitrary exponents, the $x^2$ shortcut button, and parentheses for grouping.

The $x^2$ button inserts a caret followed by a 2 (which the display renders as a superscript). For higher powers you can type the caret followed by any number, but the solver only handles quadratic expressions; cubic or higher will produce an error.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type $<$ and $>$ directly, type $<=$ or $>=$ to insert the combined symbols $\\leq$ and $\\geq$, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back. The Unicode characters $x^2$ and $x^3$ are recognized directly if pasted.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random inequality of that form. Clicking again produces a new random version.

&bull; **Standard (less than 0)** &mdash; $x^2 + bx + c < 0$. Two real roots with the solution sitting between them.
&bull; **Standard (greater than 0)** &mdash; $x^2 + bx + c > 0$. Two real roots with the solution sitting outside as a union of two rays.
&bull; **Non-strict ($\\leq 0$)** &mdash; like the strict less-than version but with closed endpoints (brackets in the interval).
&bull; **Non-strict ($\\geq 0$)** &mdash; like the strict greater-than version but with closed endpoints in the union.
&bull; **Leading coefficient not 1** &mdash; $ax^2 + bx + c < 0$ with $a \\neq 1$. Tests the divide-by-$a$ structural path.
&bull; **Negative leading** &mdash; $-x^2 + bx + c > 0$. Exercises the multiply-by-$-1$ step that flips the inequality direction.
&bull; **No real roots** &mdash; $x^2 + c > 0$ with positive $c$. The discriminant is negative and the answer collapses to all reals or no solution depending on the direction.
&bull; **Non-zero RHS** &mdash; $x^2 + bx < c$ with $c \\neq 0$. Tests the move-everything-to-the-left step before standard analysis.

Roughly 80 percent of generated inequalities produce clean integer roots.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The sequence depends on the discriminant.

&bull; **Multiply by $-1$** (when applicable) &mdash; if the leading coefficient is negative, the solver multiplies both sides by $-1$ and flips the inequality direction. From this point the analysis uses a positive leading coefficient.
&bull; **Standard Form** &mdash; restates the inequality with everything on the left and zero on the right.
&bull; **Calculate Discriminant** &mdash; shows the value of $\\Delta = b^2 - 4ac$.
&bull; **No Real Roots** (when $\\Delta < 0$) &mdash; reports that the parabola never crosses the x-axis and gives the answer (all reals or no solution).
&bull; **Repeated Root** (when $\\Delta = 0$) &mdash; reports the single root and analyzes whether the inequality holds at that point only, everywhere except that point, everywhere, or nowhere.
&bull; **Find Roots** (when $\\Delta > 0$) &mdash; reports the two distinct roots from the quadratic formula.
&bull; **Sign Chart** &mdash; states which intervals are positive and which are negative based on the upward-opening parabola.
&bull; **Solution Interval** &mdash; selects the matching interval(s) for the inequality direction.

The final-answer card shows the answer in three forms: the inequality form (such as $r_1 < x < r_2$), a plain-language note (between or outside the roots), and the interval notation.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Parabola Method — Why It Works`,
    content: `Every quadratic inequality reduces to a sign question about a parabola.

**Setup.** Move all terms to one side so the inequality becomes $ax^2 + bx + c$ compared to 0. The left side is a quadratic function whose graph is a parabola. The inequality asks: for which $x$ is the parabola above zero, below zero, equal to zero, or non-negative or non-positive?

**Two facts determine everything.**

&bull; **Direction of opening.** If $a > 0$ the parabola opens upward; if $a < 0$ it opens downward. The solver always normalizes to $a > 0$ by multiplying by $-1$ and flipping direction if needed.
&bull; **Roots.** The roots (x-intercepts) are where the parabola crosses zero. The discriminant determines how many: two distinct, one repeated, or none.

**Sign pattern for an upward-opening parabola.**

&bull; **Two distinct roots $r_1 < r_2$**: negative on $(r_1, r_2)$, positive on $(-\\infty, r_1) \\cup (r_2, \\infty)$, zero at $r_1$ and $r_2$.
&bull; **One repeated root $r$**: zero at $r$, positive everywhere else. Never negative.
&bull; **No real roots**: always positive. Never zero or negative.

**Reading the answer.** Match the inequality direction to the matching sign region. Strict inequalities exclude the roots; non-strict include them.

&bull; $f(x) < 0$ with two roots: open interval between roots, $(r_1, r_2)$.
&bull; $f(x) \\leq 0$ with two roots: closed interval, $[r_1, r_2]$.
&bull; $f(x) > 0$ with two roots: open union, $(-\\infty, r_1) \\cup (r_2, \\infty)$.
&bull; $f(x) \\geq 0$ with two roots: closed union, $(-\\infty, r_1] \\cup [r_2, \\infty)$.

For deeper coverage see **quadratic function** and **parabola**.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Quadratic Inequality?`,
    content: `A quadratic inequality is a comparison between a quadratic expression and zero (or any other value, after rearrangement) using one of the four symbols $<$, $>$, $\\leq$, $\\geq$. The standard form is

$$ax^2 + bx + c \\;\\square\\; 0$$

where $\\square$ is one of the four symbols and $a$, $b$, $c$ are real numbers with $a \\neq 0$. The variable $x$ appears squared but to no higher power.

**Solution shapes.** Unlike linear inequalities whose solutions are always rays, quadratic inequalities produce six possible shapes depending on the discriminant and direction:

&bull; **A single interval between the roots** &mdash; $f(x) < 0$ or $\\leq 0$ with $a > 0$ and two real roots.
&bull; **A union of two rays outside the roots** &mdash; $f(x) > 0$ or $\\geq 0$ with $a > 0$ and two real roots.
&bull; **A single point** &mdash; non-strict inequality at a repeated root.
&bull; **All reals except one point** &mdash; strict inequality at a repeated root in the always-positive direction.
&bull; **All real numbers** &mdash; the parabola sits entirely on the correct side of zero.
&bull; **No solution** &mdash; the parabola sits entirely on the wrong side of zero.

**Discriminant decides the case.** The number $\\Delta = b^2 - 4ac$ classifies which solution shape applies. Positive discriminant means two distinct roots and gives between or union solutions. Zero discriminant means one repeated root and gives point or all-except-point solutions. Negative discriminant means no real roots and gives all-reals or no-solution.

For deeper coverage see **quadratic inequality**, **discriminant**, and **interval notation**.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Five stages handle any quadratic inequality. The solver follows this exact sequence.

&bull; **Stage 1: Reduce to standard form.** Move all terms to the left so the right side is zero. Collect $x^2$, $x$, and constant coefficients into $a$, $b$, $c$.

&bull; **Stage 2: Normalize sign of $a$.** If $a < 0$, multiply both sides by $-1$ and flip the inequality direction. From here the parabola opens upward and the sign pattern is the standard one.

&bull; **Stage 3: Compute the discriminant.** $\\Delta = b^2 - 4ac$. Branch on the sign of $\\Delta$.

&bull; **Stage 4: Find the roots if any.**

  &bull; **$\\Delta > 0$**: two distinct real roots $r_1 < r_2$ from the quadratic formula.
  &bull; **$\\Delta = 0$**: one repeated root $r = -b/(2a)$.
  &bull; **$\\Delta < 0$**: no real roots.

&bull; **Stage 5: Match sign pattern to inequality direction.** The solver picks the interval(s) on the number line where the quadratic has the required sign, applying open or closed endpoints based on whether the inequality is strict.

**The implementation.** Internally, after collecting coefficients, the solver hands the problem to a sign-analysis routine that constructs the answer as one of six branch outputs: all reals, no solution, single point, all reals except a point, compound between-the-roots, or union outside-the-roots. The final-answer card adapts its rendering to the matched branch.

For comprehensive treatment see **solving quadratic inequalities** and **sign analysis**.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Quadratic Equation** &mdash; the equality counterpart $ax^2 + bx + c = 0$. The roots of the equation are the boundary points of the inequality solution set; the quadratic formula gives both.

**Discriminant** &mdash; the quantity $\\Delta = b^2 - 4ac$. Positive means two real roots, zero means one repeated root, negative means no real roots. Drives every classification in quadratic inequality solving.

**Parabola** &mdash; the graph of a quadratic function $y = ax^2 + bx + c$. The inequality $ax^2 + bx + c \\square 0$ asks where the parabola is above, below, or touching the x-axis.

**Sign Chart** &mdash; the tabular method of tracking signs across critical points. For quadratics there are at most two critical points (the roots), so the chart has at most three intervals.

**Interval Notation** &mdash; the standard way to express the solution. Parentheses for strict, brackets for non-strict, infinity always with parentheses, union symbol $\\cup$ joining disconnected pieces.

**Linear Inequality** &mdash; the lower-degree counterpart. The solution is always a single ray. Linear inequalities are a degenerate case of quadratic where $a = 0$.

**Polynomial Inequality** &mdash; the generalization to higher degrees. The sign-chart method extends directly, with one critical point per real root.

**Vieta&apos;s Formulas** &mdash; the relations between the roots and coefficients. For $ax^2 + bx + c$ with roots $r_1$ and $r_2$: $r_1 + r_2 = -b/a$ and $r_1 r_2 = c/a$. Useful for verifying root computations.

**Completing the Square** &mdash; an alternative way to find the vertex and roots of the parabola, sometimes more illuminating than the quadratic formula for inequality analysis.

**Vertex** &mdash; the turning point of the parabola at $x = -b/(2a)$. For a non-strict inequality with discriminant zero, the vertex is exactly the root and the inequality may hold at this single point.`,
    before: ``, after: ``, link: ''
  }
}
    },

    'rational': {
      component: 'RationalInequalitySolver',
      title: "Free Rational Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for rational inequalities using the sign chart method. Finds critical points, tests intervals, and reports interval notation.",
      name: "Rational Inequality Solver",
      url: "/algebra/calculators/inequalities/rational",
      h1: "Rational Inequality Solver",
      category: 'Inequalities',
      subCategory: 'Solvers',
      icon: '¹⁄ₓ',
      keywords: [
        "free rational inequality solver",
        "rational inequality calculator",
        "sign chart calculator",
        "P(x)/Q(x) > 0",
        "critical points rational",
        "free math solver",
        "fraction inequality"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a rational inequality?",
    answer: "A rational inequality compares a rational expression (a quotient of polynomials) to zero or to another value using one of less than, greater than, less than or equal, or greater than or equal. The defining feature is that the variable appears in a denominator, which creates excluded values and forbids multiplying through naively."
  },
  obj2: {
    question: "Why can't you just multiply both sides by the denominator?",
    answer: "Because the denominator may be negative, in which case the inequality direction would flip; but its sign depends on the variable, so you do not know in advance whether to flip. Multiplying introduces case analysis that is messier than the sign-chart method, which sidesteps the issue entirely."
  },
  obj3: {
    question: "What is the sign-chart method?",
    answer: "Move everything to one side so the right side is zero. Find the critical points: zeros of the numerator and zeros of the denominator. These divide the number line into intervals. Test one value per interval to determine the sign of the rational expression there. Pick the intervals whose sign matches the inequality direction."
  },
  obj4: {
    question: "Are zeros of the numerator included or excluded?",
    answer: "For non-strict inequalities, numerator zeros are included because the expression equals zero there, which satisfies a less-than-or-equal or greater-than-or-equal condition. For strict inequalities they are excluded because zero does not satisfy a strict less-than or greater-than. Denominator zeros are always excluded regardless of direction because the expression is undefined there."
  },
  obj5: {
    question: "How do you write the solution in interval notation?",
    answer: "Use a union of intervals matching the chosen sign regions. Parentheses for excluded endpoints (strict inequalities and all denominator zeros), brackets for included endpoints (numerator zeros under non-strict inequalities). Denominator zeros always get parentheses even when the inequality is non-strict."
}
},
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an inequality display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $1/x > 2$ and press Enter &mdash; the right panel combines to $(1 - 2x)/x > 0$, identifies critical points at $x = 0$ (excluded, denominator) and $x = 1/2$ (numerator zero), builds the sign chart, and reports the solution as $(0, 1/2)$.
&bull; Click the &quot;Fraction less than or equal to 0&quot; example template &mdash; an inequality of the form $(x + a)/(x + b) \\leq 0$ loads. Note how the solver uses brackets for the numerator-zero endpoint and parentheses for the denominator-zero endpoint.
&bull; Try the &quot;Sum of Fractions&quot; template to see how the solver finds a common denominator before identifying critical points.

The Solve button is disabled until you enter something. The dedicated &quot;Ineq&quot; row inserts the four inequality symbols.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Inequalities with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division (the division operator builds fractions in the display), plus, minus.
&bull; **Ineq row** &mdash; the four inequality symbols.
&bull; **Special row** &mdash; the $x^2$ shortcut button, caret operator for arbitrary exponents, and parentheses for grouping.

The division operator is the key tool for this solver: typing $1/x$ creates a fraction structure that the solver recognizes as a rational expression. For multi-term denominators, use parentheses: $1/(x + 2)$ is parsed as one over the quantity $x + 2$, not as $1/x + 2$.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type $<$ and $>$ directly, type $<=$ or $>=$ to insert the combined symbols $\\leq$ and $\\geq$, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random inequality of that form. Clicking again produces a new random version.

&bull; **Simple Reciprocal** &mdash; $1/x > a$. The most basic rational inequality. Critical points are $0$ (denominator) and $1/a$ (numerator after combining).
&bull; **Linear Denominator** &mdash; $a/(x + b) < c$. Standard one-fraction inequality with a linear denominator.
&bull; **Fraction $\\leq 0$** &mdash; $(x + a)/(x + b) \\leq 0$. Single fraction compared to zero, no combining needed.
&bull; **Quadratic Numerator** &mdash; $(x^2 + bx + c)/(x + d) > 0$. Three critical points (two from the numerator quadratic, one from the denominator); four intervals in the sign chart.
&bull; **Sum of Fractions** &mdash; $1/x + 1/(x + a) < b$. Requires combining two fractions over a common denominator before the sign chart.
&bull; **Proportion Inequality** &mdash; $a/(x + b) > c/(x + d)$. Compare two fractions; subtraction combines them.
&bull; **Always Positive** &mdash; $a/x^2 > 0$. The denominator $x^2$ is non-negative, so the only excluded value is $x = 0$ and the answer is all reals except 0.
&bull; **Complex Rational** &mdash; $(ax + b)/((x + c)(x + d)) \\geq 0$. Three critical points and shows how multiple denominator factors interact.

Roughly 80 percent of generated inequalities produce clean integer critical points.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step.

&bull; **Original Inequality** &mdash; restates the input.
&bull; **Excluded Values** &mdash; lists every value of the variable that makes any denominator zero. These are forbidden in both the problem and the answer.
&bull; **Combine into Single Fraction** &mdash; the solver moves everything to one side and combines into a single rational expression over the least common denominator.
&bull; **Combined Form** &mdash; displays the combined inequality $P(x) / Q(x) \\square 0$ where $P$ is the combined numerator and $Q$ is the LCD.
&bull; **Find Critical Points** &mdash; lists numerator zeros and denominator zeros separately.
&bull; **Sign Chart** &mdash; shows the sign of $P(x)/Q(x)$ on each interval determined by the critical points. The chart displays one $+$ or $-$ per interval.
&bull; **Solution** &mdash; gives the final answer in interval notation, the union of intervals whose sign matches the inequality direction.

Numerator zeros under a non-strict inequality use brackets (included). All denominator zeros use parentheses (excluded) regardless of inequality strictness. The final-answer card shows the interval notation directly.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Sign-Chart Method — Why It Works`,
    content: `A rational expression $P(x)/Q(x)$ can change sign only at points where the numerator or denominator equals zero. Between consecutive such points the sign is constant. The sign chart records the sign on each interval.

**Why sign changes only happen at critical points.**

&bull; **At a numerator zero**, the rational expression equals zero. As $x$ crosses such a point, the numerator changes sign (assuming the root has odd multiplicity), so the expression flips sign.
&bull; **At a denominator zero**, the rational expression is undefined &mdash; it has a vertical asymptote or hole. As $x$ crosses such a point, the denominator changes sign (assuming odd multiplicity), and again the expression flips sign.
&bull; **Between critical points**, both numerator and denominator have constant sign, so the quotient does too.

**Testing the sign on each interval.** Plug any value from the interval into the expression. The sign of the result is the sign on that interval. The solver picks a midpoint or a value outside the outer critical points.

**Endpoint rules.**

&bull; **Numerator zero with non-strict inequality** &mdash; included (use bracket). The expression equals zero, which satisfies $\\leq 0$ or $\\geq 0$.
&bull; **Numerator zero with strict inequality** &mdash; excluded (use parenthesis). Zero does not satisfy strict $< 0$ or $> 0$.
&bull; **Denominator zero, any inequality** &mdash; excluded (use parenthesis). The expression is undefined.

**Repeated factors and bouncing.** If a factor like $(x - 2)^2$ appears, the expression does not change sign as $x$ crosses 2 because the squared factor has even multiplicity. The solver detects this through the test-point evaluation, so the resulting sign chart is correct without special-case logic.

For deeper coverage see **sign chart** and **rational function**.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Rational Inequality?`,
    content: `A rational inequality is a comparison involving a rational expression (a quotient of two polynomials) and one of the four inequality symbols. The general form is

$$\\frac{P(x)}{Q(x)} \\;\\square\\; c$$

where $P$ and $Q$ are polynomials, $Q$ contains the variable, and $\\square$ is one of $<$, $>$, $\\leq$, $\\geq$. By moving $c$ to the left and combining, every rational inequality reduces to the form $R(x) \\square 0$ where $R$ is a single rational expression.

**Domain.** The domain of a rational expression excludes every value of the variable that makes any denominator zero. These excluded values can never be part of the solution and must be carefully tracked.

**Solution shape.** The solution to a rational inequality is a union of intervals on the real line. The number of intervals depends on the number of critical points (numerator zeros plus denominator zeros). With $k$ critical points there can be at most $k + 1$ intervals to choose from.

**Why rational inequalities are harder than rational equations.** Solving the equation $P/Q = 0$ amounts to finding the numerator zeros (excluding any that are also denominator zeros). Solving the inequality requires the full sign analysis: it is not enough to know where the expression equals zero; you must know where it is positive, negative, and undefined.

**Why rational inequalities are harder than polynomial inequalities.** Polynomial inequalities have only zeros as critical points and are defined everywhere. Rational inequalities add a second class of critical points (denominator zeros) and forbidden values where the expression has no value at all.

For deeper coverage see **rational inequality**, **rational expression**, and **excluded values**.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Five stages handle any rational inequality.

&bull; **Stage 1: Move everything to one side.** Subtract or add to make the right side zero. The inequality becomes $R(x) \\square 0$.

&bull; **Stage 2: Combine into a single fraction.** Find a common denominator for all the rational terms on the left side and add them together. The result is a single rational expression $P(x)/Q(x)$. Do **not** clear the denominator: that step is invalid in inequalities because it requires knowing the sign of the denominator.

&bull; **Stage 3: Find the critical points.**

  &bull; **Numerator zeros** &mdash; solve $P(x) = 0$.
  &bull; **Denominator zeros** &mdash; solve $Q(x) = 0$. These are excluded values; they cannot be solutions but they still divide the number line.

&bull; **Stage 4: Build the sign chart.** Order the critical points on the number line. Test one value in each resulting interval to determine the sign of $P(x)/Q(x)$ there.

&bull; **Stage 5: Select intervals matching the inequality.**

  &bull; **$R(x) > 0$**: choose intervals with sign $+$.
  &bull; **$R(x) < 0$**: choose intervals with sign $-$.
  &bull; **$R(x) \\geq 0$**: choose $+$ intervals plus numerator zeros (bracket); exclude all denominator zeros (parenthesis).
  &bull; **$R(x) \\leq 0$**: choose $-$ intervals plus numerator zeros (bracket); exclude all denominator zeros (parenthesis).

**The implementation.** Internally, the solver represents polynomials as coefficient arrays, finds roots via factoring and numerical methods, and constructs the sign chart by evaluating the combined expression at midpoints. The final-answer card formats the result as a union of intervals with correct bracket-or-parenthesis logic per endpoint.

For comprehensive treatment see **solving rational inequalities** and **sign analysis**.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Rational Expression** &mdash; the quotient of two polynomials. The object that lives on one side of a rational inequality.

**Rational Function** &mdash; the function $f(x) = P(x)/Q(x)$ whose graph contains vertical asymptotes at denominator zeros and crosses the x-axis at numerator zeros (where they do not coincide with denominator zeros).

**Sign Chart** &mdash; the tabular method for tracking signs across critical points. Foundational for rational, polynomial, and any other inequality involving a sign question on intervals.

**Excluded Values** &mdash; values of the variable that make any denominator zero. They are forbidden from the domain and therefore forbidden from any solution set.

**Critical Points** &mdash; values where the sign of the expression can change. For rational inequalities these are the numerator zeros and the denominator zeros.

**Vertical Asymptote** &mdash; the geometric counterpart of a denominator zero in the graph of a rational function. The expression goes to plus or minus infinity as the variable approaches the asymptote.

**Polynomial Inequality** &mdash; the special case with constant (nonzero) denominator. The same sign-chart logic applies, with only numerator zeros as critical points.

**Quadratic Inequality** &mdash; the second-degree polynomial case. Often appears as the numerator or factor of a rational inequality.

**Linear Inequality** &mdash; the first-degree polynomial case. A simple rational inequality after combining might reduce to a linear inequality structure.

**Interval Notation** &mdash; the way the answer is written. Parentheses exclude endpoints, brackets include them, the union symbol $\\cup$ joins disjoint pieces.

**Common Denominator** &mdash; the technique for combining multiple fractions. Same idea as adding rational numbers, but with polynomials in place of integers.

**Factoring** &mdash; the algebraic tool for finding polynomial roots cleanly. Fully factored numerator and denominator make the critical points immediate by inspection.`,
    before: ``, after: ``, link: ''
  }
}
    },

    'radical': {
      component: 'RadicalInequalitySolver',
      title: "Free Radical Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for radical inequalities. Handles domain restrictions, raises both sides to remove the radical, and intersects with the domain.",
      name: "Radical Inequality Solver",
      url: "/algebra/calculators/inequalities/radical",
      h1: "Radical Inequality Solver",
      category: 'Inequalities',
      subCategory: 'Solvers',
      icon: '√',
      keywords: [
        "free radical inequality solver",
        "square root inequality",
        "domain restriction radical",
        "free math calculator",
        "nth root inequality",
        "radical inequality calculator"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a radical inequality?",
    answer: "A radical inequality is a comparison where one side contains a radical expression such as a square root, cube root, or fourth root of an expression involving the variable. Solving involves isolating the radical, raising both sides to the radical&apos;s index, and intersecting with the domain restriction when the index is even."
  },
  obj2: {
    question: "Why is the domain restriction important for even-root inequalities?",
    answer: "An even root is defined only when the radicand is non-negative. Any solution that violates this domain produces an undefined left side, so the candidate must be discarded. The final solution is the intersection of the algebraic solution after raising to the power and the domain restriction radicand greater than or equal to zero."
  },
  obj3: {
    question: "When can you raise both sides to a power without flipping the inequality?",
    answer: "When both sides are non-negative and the power function is increasing on that domain (which holds for even roots once domain is enforced, and always for odd roots). For even-root inequalities with a positive right side, both sides are non-negative and the operation is safe. For odd roots there is no sign restriction."
  },
  obj4: {
    question: "What happens when the right side of an even-root inequality is negative?",
    answer: "If the inequality is greater-than form (radical greater than a negative number), it is automatically true for every value in the domain because radicals are non-negative. If it is less-than form (radical less than a negative number), there is no solution because a non-negative quantity cannot be less than a negative number."
  },
  obj5: {
    question: "How do cube roots differ from square roots in inequalities?",
    answer: "Cube roots are defined for every real number and the cube function is monotonically increasing, so cube-root inequalities have no domain restriction and the cubing step never flips direction. Square roots and other even roots require domain analysis and care about signs."
}
},
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an inequality display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $\\sqrt{x} > 3$ and press Enter &mdash; the right panel squares both sides to get $x > 9$. Because the right side is positive both sides are non-negative, so the direction is preserved.
&bull; Click the &quot;Linear Radicand&quot; example template &mdash; an inequality with $\\sqrt{ax + b}$ loads. The solver squares both sides, solves the linear inequality, and intersects with the domain if the inequality is less-than.
&bull; Try the &quot;Cube Root&quot; template to see how the solver handles $\\sqrt[3]{x}$. No domain restriction and no direction-flip concerns because the cube function is strictly increasing.

The Solve button is disabled until you enter something. The dedicated &quot;Rad&quot; row inserts the three radical symbols: $\\sqrt{\\;}$, $\\sqrt[3]{\\;}$, $\\sqrt[4]{\\;}$.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Inequalities with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; the caret operator for exponents, multiplication, division, plus, minus.
&bull; **Ineq row** &mdash; the four inequality symbols.
&bull; **Rad row** &mdash; the three radical symbols: square root, cube root, fourth root.
&bull; **Bracket row** &mdash; parentheses for grouping the radicand.

To enter $\\sqrt{2x + 1}$, click the square-root button then open a parenthesis, type the radicand, and close the parenthesis. The solver requires parentheses around any multi-term radicand to parse it correctly.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type $<$ and $>$ directly, type $<=$ or $>=$ to insert the combined symbols $\\leq$ and $\\geq$, and press Enter to solve. The Unicode radical symbols can also be typed or pasted directly. **Ctrl+Z** undoes up to fifty edits back.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random inequality of that form. Clicking again produces a new random version.

&bull; **Simple** &mdash; $\\sqrt{x} > c$ or $\\sqrt{x} < c$. The base case with a single-variable radicand.
&bull; **Linear Radicand** &mdash; $\\sqrt{ax + b} > c$. Tests the linear-equation solving inside the radical after squaring.
&bull; **With Constant** &mdash; $\\sqrt{x} + c > d$. Requires subtracting $c$ to isolate the radical before squaring.
&bull; **With Coefficient** &mdash; $a \\cdot \\sqrt{x} > c$. Tests division by the coefficient to isolate the radical.
&bull; **Cube Root** &mdash; $\\sqrt[3]{x} > c$. No domain restriction; cubing both sides directly produces the answer.
&bull; **Compare to Zero** &mdash; $\\sqrt{ax + b} > 0$ or $< 0$. Exercises the special-case branches for zero and negative right sides.
&bull; **Cube Root Linear** &mdash; $\\sqrt[3]{ax + b} > c$. Cube both sides, solve the resulting linear inequality.
&bull; **Fourth Root** &mdash; $\\sqrt[4]{x} > c$. Even root with index 4; same logic as square root but raise to the fourth power.

Roughly 80 percent of generated inequalities produce clean integer boundaries.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The exact sequence depends on the structural case.

&bull; **Rearrange Inequality** (when applicable) &mdash; if the radical is on the right, the solver swaps sides and flips the direction.
&bull; **Evaluate Constant** &mdash; simplifies the non-radical side to a single number.
&bull; **Isolate Radical Term** &mdash; subtracts additive constants or divides by a coefficient outside the radical to get the radical alone on one side.
&bull; **Radical Properties** (for special cases) &mdash; handles the cases where the right side is zero or negative against an even-root left side. Determines all-reals, no-solution, single-point, or domain-restriction outcomes without ever raising to the power.
&bull; **Square Both Sides** or **Cube Both Sides** or **Raise Both Sides** &mdash; the central move. Removes the radical by raising both sides to its index. Direction is preserved because the operation is on non-negative quantities (even roots) or monotonically increasing (odd roots).
&bull; **Solve Linear Inequality** &mdash; handles the resulting polynomial inequality in the variable.
&bull; **Apply Domain Restriction** (for even-root less-than) &mdash; intersects the algebraic solution with the requirement that the radicand be non-negative.

The final-answer card shows the answer in two forms: the inequality form (such as $a \\leq x < b$) and the corresponding interval notation.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Domain Restrictions and the Even-Root Trap`,
    content: `The single biggest source of error in radical inequality solving is forgetting the domain restriction for even roots.

**The principle.** An even root is defined only when the radicand is non-negative:

&bull; $\\sqrt{f(x)}$ is defined when $f(x) \\geq 0$.
&bull; $\\sqrt[4]{f(x)}$ is defined when $f(x) \\geq 0$.
&bull; Any value of $x$ outside this set makes the left side undefined and cannot be part of the solution.

**Where the trap hits.** When solving $\\sqrt{f(x)} < c$ with $c > 0$, squaring gives $f(x) < c^2$. But every solution must also satisfy $f(x) \\geq 0$ to make the original radical meaningful. The complete solution is

$$0 \\leq f(x) < c^2$$

which is the intersection of the squared inequality and the domain. The solver builds this intersection automatically.

**Where the trap does not hit.** For $\\sqrt{f(x)} > c$ with $c \\geq 0$, squaring gives $f(x) > c^2$. This already implies $f(x) > 0$, so $f(x) \\geq 0$ is automatic and no separate intersection is needed. The solver recognizes this and skips the domain intersection.

**Odd roots are immune.** Cube roots and other odd roots are defined for every real number. There is no domain restriction and no trap to worry about. The solver handles cube root and fourth root cases differently in this respect.

**Special cases the solver handles automatically.**

&bull; **$\\sqrt{f(x)} < c$ with $c < 0$**: no solution. A non-negative quantity cannot be less than a negative number.
&bull; **$\\sqrt{f(x)} > c$ with $c < 0$**: solution is the entire domain. The radical is always non-negative, so the inequality holds whenever the radical is defined.
&bull; **$\\sqrt{f(x)} \\geq 0$**: solution is the entire domain.
&bull; **$\\sqrt{f(x)} > 0$**: solution is the domain minus the points where the radicand is zero.

For deeper coverage see **domain restrictions** and **principal square root**.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Radical Inequality?`,
    content: `A radical inequality is an inequality that contains at least one radical expression where the variable appears under the radical sign. The general form for a single-radical inequality is

$$\\sqrt[n]{f(x)} \\;\\square\\; g(x)$$

where $n \\geq 2$ is the index, $f(x)$ is the radicand, $g(x)$ is the other side (often a constant), and $\\square$ is one of the four inequality symbols.

**The two regimes.**

&bull; **Even-index radicals** ($n = 2, 4, 6, \\ldots$). The radical is defined only when the radicand is non-negative, and the radical itself is always non-negative. Solving involves both an algebraic step (raise both sides to the $n$-th power) and a domain step (intersect with the radicand-non-negative condition).
&bull; **Odd-index radicals** ($n = 3, 5, 7, \\ldots$). The radical is defined for every real number and takes both positive and negative values matching the sign of the radicand. Solving requires only the algebraic step.

**Solution shapes.** Depending on the structural case, a radical inequality can produce:

&bull; A single ray (most common with odd roots).
&bull; A bounded interval (common with even-root less-than).
&bull; A half-line starting at the domain boundary.
&bull; A single point (degenerate non-strict case).
&bull; All real numbers (even-root $\\geq 0$, or odd-root with always-true reduction).
&bull; No solution (even-root strictly less than a negative number).

**The pivotal move.** Raising both sides to the index $n$ removes the radical. This move preserves direction when both sides are non-negative (even-root case after isolation) or when the function is increasing (odd-root case). Both of these conditions are sustained by the structural setup, so no direction-flip occurs in standard radical inequality solving.

For deeper coverage see **radical inequality**, **principal nth root**, and **interval notation**.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Four stages handle any standard single-radical inequality.

&bull; **Stage 1: Isolate the radical.** Move the radical to one side. Subtract additive constants outside the radical. Divide by any coefficient multiplying the radical. The goal is to reach the form $\\sqrt[n]{f(x)} \\square c$ where $c$ is a number.

&bull; **Stage 2: Examine the special cases for even roots.**

  &bull; **$c < 0$ with less-than form**: no solution.
  &bull; **$c < 0$ with greater-than form**: solution is the entire domain (radicand $\\geq 0$).
  &bull; **$c = 0$ with strict less-than**: no solution.
  &bull; **$c = 0$ with non-strict less-than**: solution is the single set where radicand equals zero.
  &bull; **$c = 0$ with strict greater-than**: solution is the domain minus zero-radicand points.
  &bull; **$c = 0$ with non-strict greater-than**: solution is the entire domain.

  If none of these apply, proceed to stage 3.

&bull; **Stage 3: Raise both sides to the $n$-th power.** The inequality becomes $f(x) \\square c^n$. Direction is preserved.

&bull; **Stage 4: Solve and intersect with the domain.**

  &bull; **Odd roots**: solve $f(x) \\square c^n$ directly. The result is the final answer.
  &bull; **Even roots, $\\square$ is greater-than form**: solve $f(x) \\square c^n$. Domain $f(x) \\geq 0$ is automatically satisfied because $c^n \\geq 0$.
  &bull; **Even roots, $\\square$ is less-than form**: solve $f(x) \\square c^n$, then intersect with $f(x) \\geq 0$. The result is a bounded interval rather than a ray.

**The implementation.** Internally, the solver navigates this decision tree based on the index, the inequality direction, and the sign of $c$. The output ranges from a simple ray to a compound bounded interval depending on which branch applies.

For comprehensive treatment see **solving radical inequalities** and **squaring both sides**.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Radical Equation** &mdash; the equality counterpart $\\sqrt[n]{f(x)} = g(x)$. Solving introduces a check-for-extraneous-solutions step because squaring both sides can introduce false roots. For inequalities the domain intersection plays a similar role.

**Principal Square Root** &mdash; the convention that $\\sqrt{a}$ denotes the non-negative root. Without this convention, $\\sqrt{4}$ could mean either $2$ or $-2$; the convention fixes it as $2$, making the radical expression a well-defined function and enabling the sign analysis used in inequality solving.

**Domain of a Function** &mdash; the set of inputs for which the function is defined. For even-root expressions, the domain restriction shapes the final solution set.

**Cube Root** &mdash; the inverse of cubing. Defined for every real number, takes negative values for negative inputs. The most prominent odd-index radical and the easiest case to handle.

**Nth Root** &mdash; the generalization to arbitrary integer index. For odd $n$, behaves like the cube root. For even $n$, behaves like the square root.

**Quadratic Inequality** &mdash; the polynomial counterpart that often arises when squaring a radical with a linear radicand and combining. The solver routes the post-squaring step through the same linear or polynomial-inequality logic.

**Compound Inequality** &mdash; a chain like $a \\leq x < b$ that captures a bounded interval. The intersection of the algebraic solution and the domain restriction in even-root less-than cases naturally produces a compound inequality.

**Extraneous Solution** &mdash; a value satisfying the squared equation but not the original radical equation. The inequality analogue is a value satisfying the post-squaring inequality but lying outside the domain; the domain intersection filters these out.

**Squaring Both Sides** &mdash; the core algebraic move. Preserves inequality direction when both sides are non-negative; can break it otherwise. The solver enforces non-negativity through the isolation step before squaring.

**Interval Notation** &mdash; the standard way to express the solution. Parentheses for excluded endpoints, brackets for included endpoints, infinity always with parentheses.

**Rational Exponent** &mdash; the alternative notation $f(x)^{1/n}$ for $\\sqrt[n]{f(x)}$. The inequality $f(x)^{1/n} \\geq c$ is identical to $\\sqrt[n]{f(x)} \\geq c$; the underlying analysis is the same.`,
    before: ``, after: ``, link: ''
  }
}
    },

    'exponential': {
      component: 'ExponentialInequalitySolver',
      title: "Free Exponential Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for exponential inequalities. Isolates the exponential, applies a logarithm with correct direction handling per base.",
      name: "Exponential Inequality Solver",
      url: "/algebra/calculators/inequalities/exponential",
      h1: "Exponential Inequality Solver",
      category: 'Inequalities',
      subCategory: 'Solvers',
      icon: 'eˣ',
      keywords: [
        "free exponential inequality solver",
        "b^x inequality",
        "logarithm inequality",
        "free math solver",
        "exponential inequality calculator",
        "direction flip log base"
      ],
     faqQuestions: {
  obj1: {
    question: "What is an exponential inequality?",
    answer: "An exponential inequality is a comparison where the variable appears in an exponent, such as 2 to the x is greater than 8, or e to the x is less than 100. Solving requires isolating the exponential term and then applying a logarithm to extract the variable from the exponent."
  },
  obj2: {
    question: "When does the inequality direction flip in exponential solving?",
    answer: "When the base is between 0 and 1, the corresponding logarithm is a decreasing function, so taking the logarithm of both sides flips the inequality direction. When the base is greater than 1, the logarithm is increasing and direction is preserved. The solver tracks this automatically based on the base."
  },
  obj3: {
    question: "What if the exponential is greater than a negative number?",
    answer: "Exponential expressions with a positive base are always positive: any base to any real power is greater than zero. So an inequality of the form b to the x is greater than a negative number is automatically true for every real x. Conversely, b to the x is less than a negative number has no solution."
  },
  obj4: {
    question: "How do you handle coefficients and additive constants outside the exponential?",
    answer: "Isolate the exponential first. Subtract any constant that is added to or subtracted from the exponential. Then divide by any coefficient multiplying the exponential. Once the form is b to the x compared to c, apply the logarithm. Dividing by a negative coefficient flips the direction once before the logarithm is applied."
  },
  obj5: {
    question: "When should you use the natural logarithm versus log base b?",
    answer: "Both work; the choice affects only how the answer is written. For the base e (natural exponential), the natural log gives a clean answer. For another base b, you can use log base b directly or use the change-of-base formula to express the answer in terms of natural log or common log."
}
},
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an inequality display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $2^x > 8$ and press Enter &mdash; the right panel detects $8 = 2^3$ exactly, applies log base 2, and reports $x > 3$ as an exact answer.
&bull; Click the &quot;Base less than 1&quot; example template &mdash; an inequality with base $0.5$ loads. Watch the solver flip the inequality direction when applying the logarithm because the log of a decreasing exponential reverses comparisons.
&bull; Try the &quot;Compare to Zero&quot; template to see how the solver handles a positive base raised to any power being compared with zero or a negative number &mdash; one direction is always-true, the other has no solution.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The dedicated &quot;Ineq&quot; row inserts the four inequality symbols. The $e$ button inserts the natural exponential base.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Inequalities with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; the caret operator for exponents, multiplication, division, plus, minus.
&bull; **Ineq row** &mdash; the four inequality symbols.
&bull; **Special row** &mdash; $e$ for the natural exponential base, and parentheses.

The caret operator is the key tool for this solver: typing $2$ then caret then $x$ creates $2^x$, which the display renders with the exponent as a superscript. For multi-term exponents use parentheses: $2^{(3x + 1)}$ requires parentheses around the exponent to bind it correctly.

Keyboard shortcuts: type letters and digits directly, use the caret key for exponentiation, star or slash for multiplication and division, type $<$ and $>$ directly, type $<=$ or $>=$ to insert $\\leq$ and $\\geq$, and press Enter to solve. Type $e$ for Euler's number; the parser recognizes it as the natural base only when not followed by another letter. **Ctrl+Z** undoes up to fifty edits back.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random inequality of that form. Clicking again produces a new random version.

&bull; **Simple ($>$)** &mdash; $b^x > c$ or one of the other directions. The base case with a single-variable exponent.
&bull; **With Coefficient** &mdash; $a \\cdot b^x > c$. Requires dividing by $a$ before applying the logarithm.
&bull; **Linear Exponent** &mdash; $b^{mx + n} > c$. The exponent is itself a linear expression in the variable; after the logarithm, a linear inequality must be solved.
&bull; **Base less than 1 (Flips!)** &mdash; $(1/2)^x > c$ or similar. Exercises the direction-flip branch because the log of a base less than 1 reverses the comparison.
&bull; **With Constant** &mdash; $b^x + c > d$. Requires subtracting $c$ to isolate the exponential.
&bull; **Natural Base** &mdash; $e^x > c$. The natural exponential function; uses $\\ln$ directly for a clean answer.
&bull; **Compare to Zero** &mdash; $b^x > 0$ or $b^x < $ negative. Exercises the always-true and no-solution edge cases.
&bull; **Natural Linear** &mdash; $e^{mx + n} > c$. Combines the natural base with a linear exponent.

Roughly 80 percent of generated inequalities use clean bases and right-hand sides that produce exact integer or rational answers.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The exact sequence depends on the structural case.

&bull; **Rearrange Inequality** (when applicable) &mdash; if the exponential is on the right, the solver swaps sides and flips the direction.
&bull; **Evaluate Constant** &mdash; simplifies the non-exponential side to a single number.
&bull; **Isolate Exponential Term** &mdash; subtracts additive constants or divides by a coefficient outside the exponential to get the form $b^{\\text{expr}} \\square c$.
&bull; **Exponential Properties** (for special cases) &mdash; handles right side at or below zero. Returns all-reals or no-solution without applying the logarithm.
&bull; **Apply Logarithm (Base $< 1$)** &mdash; explicitly notes the inequality sign flips because the logarithm base less than 1 is decreasing.
&bull; **Apply Logarithm** &mdash; standard logarithm, direction preserved because the base is greater than 1.
&bull; **Simplify** &mdash; if $c = b^k$ for some integer $k$, the logarithm evaluates exactly to $k$; otherwise the solver reports a decimal approximation.
&bull; **Simplify Logarithm** (when exponent is linear) &mdash; restates the post-logarithm inequality in terms of the original variable.
&bull; **Solve Linear Inequality** &mdash; solves for the variable using the standard linear-inequality moves. May trigger another direction flip if the variable coefficient inside the exponent is negative.

The final-answer card shows the answer as the inequality form plus the matching interval notation.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Two Direction-Flip Triggers`,
    content: `Exponential inequality solving has two distinct places where the inequality direction can flip. Tracking both is critical.

**Trigger 1: Dividing by a negative coefficient during isolation.** If the inequality is $-3 \\cdot 2^x > 24$, dividing by $-3$ gives $2^x < -8$. The flip is the standard linear-inequality flip, applied to the equivalent inequality between the exponential and a constant. After this point the inequality may have an impossible right side (negative), triggering the no-solution special case.

**Trigger 2: Applying a logarithm with base less than 1.** The function $\\log_b$ is increasing when $b > 1$ and decreasing when $0 < b < 1$. Applying a decreasing function to both sides of an inequality reverses the direction. So an inequality like $(1/2)^x > 8$ becomes $x \\log(1/2) > \\log 8$, and dividing by the negative $\\log(1/2)$ flips again &mdash; net effect: one flip.

**Equivalent perspective.** Rewriting $(1/2)^x = 2^{-x}$ transforms $(1/2)^x > 8$ into $2^{-x} > 2^3$, which gives $-x > 3$ and finally $x < -3$. The direction flip arises whether you handle it through the logarithm rule or through the negation in the exponent &mdash; same answer either way.

**The solver&apos;s approach.** The solver detects whether the base is less than 1 and inserts an explicit flip step labeled &quot;Apply Logarithm (Base $< 1$)&quot;. For bases greater than 1 the corresponding step is labeled simply &quot;Apply Logarithm&quot; with no direction change.

**Cumulative flips.** If both triggers fire (negative coefficient outside the exponential, base less than 1), the two flips cancel and the original direction is restored. The solver tracks them step by step rather than computing parity.

For deeper coverage see **exponential function** and **logarithm**.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is an Exponential Inequality?`,
    content: `An exponential inequality is an inequality where the variable appears in an exponent. The standard form is

$$b^{f(x)} \\;\\square\\; c$$

where $b > 0$ and $b \\neq 1$ is the base, $f(x)$ is a function of the variable (usually linear), $c$ is a real number, and $\\square$ is one of $<$, $>$, $\\leq$, $\\geq$.

**The two regimes by base.**

&bull; **$b > 1$**: the exponential function $b^x$ is strictly increasing. Larger $x$ means larger $b^x$. Inequalities of the form $b^x > c$ correspond to $x >$ something.
&bull; **$0 < b < 1$**: the exponential function $b^x$ is strictly decreasing. Larger $x$ means smaller $b^x$. Inequalities reverse direction when extracting the variable: $b^x > c$ corresponds to $x <$ something.

**The pivotal observation.** Since $b^x > 0$ for every real $x$, comparisons of $b^{f(x)}$ to non-positive values are trivial:

&bull; $b^{f(x)} > $ (non-positive number): always true.
&bull; $b^{f(x)} \\geq $ (non-positive number): always true.
&bull; $b^{f(x)} < $ (non-positive number): no solution.
&bull; $b^{f(x)} \\leq $ (non-positive number): no solution.

These cases are dispatched immediately without applying any logarithm.

**Solution form.** Once isolated to $b^{f(x)} \\square c$ with $c > 0$, the inequality reduces to $f(x) \\square \\log_b c$ (with possible direction flip for $b < 1$). The result is then a linear inequality in $x$, whose solution is a ray on the number line.

For deeper coverage see **exponential function**, **exponential equation**, and **logarithm**.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Five stages handle any standard exponential inequality.

&bull; **Stage 1: Isolate the exponential.** Move the exponential to one side. Subtract any constants added to it. Divide by any coefficient multiplying it (flipping direction if the coefficient is negative). The goal is to reach $b^{f(x)} \\square c$ where $b$ is a positive base not equal to 1 and $c$ is a constant.

&bull; **Stage 2: Examine the special cases.**

  &bull; **$c \\leq 0$ with greater-than form**: always true. Solution is all reals.
  &bull; **$c \\leq 0$ with less-than form**: no solution.
  &bull; Otherwise proceed.

&bull; **Stage 3: Apply the logarithm.** Take $\\log_b$ (or any logarithm, with adjustment) of both sides. The inequality becomes $f(x) \\square \\log_b c$. If the base $b$ is less than 1, the direction flips at this step because $\\log_b$ is decreasing.

&bull; **Stage 4: Detect perfect powers.** If $c = b^k$ for some integer $k$, the logarithm evaluates exactly to $k$ and the answer is clean. Otherwise the logarithm value is a decimal approximation.

&bull; **Stage 5: Solve the resulting linear inequality.** If $f(x)$ is linear, the inequality $f(x) \\square \\log_b c$ is a standard linear inequality, solved by the usual moves (subtract constants, divide by coefficient with possible direction flip if the coefficient is negative).

**The implementation.** Internally, the solver navigates this five-stage process based on the structure of the input AST. It detects base regime, applies special-case shortcuts where possible, and assembles the answer as an inequality of the form $x \\square v$ with the matching interval notation.

For comprehensive treatment see **solving exponential inequalities** and **logarithms**.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Exponential Function** &mdash; the function $f(x) = b^x$ where $b > 0$, $b \\neq 1$. Strictly increasing for $b > 1$, strictly decreasing for $0 < b < 1$, always positive.

**Exponential Equation** &mdash; the equality counterpart $b^{f(x)} = c$. Solving uses the same logarithm step but produces a single equation in $x$ rather than an inequality.

**Logarithm** &mdash; the inverse of the exponential. $\\log_b c$ is the unique exponent $k$ such that $b^k = c$. The pivotal tool for extracting the variable from the exponent in exponential inequalities.

**Natural Logarithm** &mdash; logarithm with base $e$. Denoted $\\ln$. The default choice for inequalities involving the natural exponential $e^x$.

**Common Logarithm** &mdash; logarithm with base 10. Denoted $\\log$ (without a subscript) in many contexts. Useful when the base is 10 or when expressing approximations.

**Change of Base** &mdash; the formula $\\log_b c = \\frac{\\log c}{\\log b} = \\frac{\\ln c}{\\ln b}$. Converts any logarithm to one with a more convenient base, which is how non-standard bases are computed.

**Linear Inequality** &mdash; the inequality type that the post-logarithm step produces. The solver routes through the linear-inequality logic to finish.

**Compound Interest** &mdash; the real-world application driving most exponential inequalities. Questions like &quot;how long until the balance exceeds X&quot; reduce to exponential inequalities in time.

**Half-Life and Decay** &mdash; the decreasing-exponential context. Quantities like radioactive material or drug concentration follow $A_0 \\cdot (1/2)^{t/T}$, and questions about when concentration drops below a threshold are exponential inequalities with base less than 1.

**e (Euler&apos;s Number)** &mdash; the natural exponential base, approximately 2.71828. Appears in continuous compounding, calculus, probability, and complex analysis.

**Interval Notation** &mdash; the standard way to write the solution as an open or closed ray. Parentheses for excluded endpoints (strict inequalities), brackets for included endpoints (non-strict), infinity always with parentheses.`,
    before: ``, after: ``, link: ''
  }
}
    },

    'logarithmic': {
      component: 'LogarithmicInequalitySolver',
      title: "Free Logarithmic Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for logarithmic inequalities. Handles domain restrictions, base-direction logic, and converts to exponential form to solve.",
      name: "Logarithmic Inequality Solver",
      url: "/algebra/calculators/inequalities/logarithmic",
      h1: "Logarithmic Inequality Solver",
      category: 'Inequalities',
      subCategory: 'Solvers',
      icon: 'log',
      keywords: [
        "free logarithmic inequality solver",
        "log inequality calculator",
        "ln inequality",
        "log base b inequality",
        "free math calculator",
        "domain restriction log"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a logarithmic inequality?",
    answer: "A logarithmic inequality compares an expression containing a logarithm of the variable to another quantity. The standard form is log base b of f(x) compared to c. Solving requires converting to exponential form, applying the inequality direction rule based on the base, and intersecting with the domain where the logarithm argument is positive."
  },
  obj2: {
    question: "Why must the argument of a logarithm be positive?",
    answer: "The logarithm function is defined only for positive inputs. For any base greater than zero and not equal to one, the logarithm of a negative number or zero is undefined. Any candidate solution to a logarithmic inequality must keep every logarithm argument strictly positive; values outside this domain are discarded."
  },
  obj3: {
    question: "When does the inequality direction flip when converting logarithm to exponential form?",
    answer: "When the base is between 0 and 1, the logarithm is a decreasing function, so the direction flips. When the base is greater than 1, the logarithm is increasing and the direction is preserved. Most textbooks use natural log (base e) or log base 10, both of which preserve direction."
  },
  obj4: {
    question: "How do you handle a logarithm with a coefficient or added constant?",
    answer: "Isolate the logarithm first. Subtract any added constant. Divide by any coefficient multiplying the logarithm. Once the form is log base b of expression compared to a single number, convert to exponential form. Dividing by a negative coefficient flips the direction once before the conversion."
  },
  obj5: {
    question: "What does it mean when two logarithms with the same base appear?",
    answer: "If both sides are logarithms with the same base, the comparison reduces to a comparison of their arguments. With base greater than 1 the direction is preserved; with base less than 1 the direction flips. Both arguments must be positive in the final solution."
}
},
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an inequality display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $\\log_2(x) > 3$ and press Enter &mdash; the right panel converts to exponential form $x > 2^3 = 8$, applies the domain $x > 0$ (automatically satisfied since $8 > 0$), and reports $x > 8$.
&bull; Click the &quot;Linear Argument&quot; example template &mdash; an inequality like $\\log_2(2x + 1) > 3$ loads. The solver converts to $2x + 1 > 8$, solves the linear inequality, then intersects with the domain $2x + 1 > 0$.
&bull; Try the &quot;Negative Right Side&quot; template &mdash; an inequality such as $\\log_2(x) > -3$. Converting gives $x > 2^{-3} = 1/8$, automatically positive so the domain is satisfied.

The Solve button is disabled until you enter something. The dedicated &quot;Log&quot; row inserts $\\ln$, $\\log$ (base 10), $\\log_2$, $\\log_3$, and $\\log_5$ as single button clicks.`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Inequalities with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Log row** &mdash; one click inserts the logarithm function with the appropriate base: $\\ln$ (natural log), $\\log$ (base 10), $\\log_2$, $\\log_3$, $\\log_5$. After insertion the cursor sits inside the parentheses, ready for the argument.
&bull; **Variable row** &mdash; $x$, $y$, $n$.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; plus, minus, multiplication, division, caret.
&bull; **Ineq row** &mdash; the four inequality symbols.
&bull; **Special row** &mdash; $e$ for the natural exponential base, and parentheses.

For non-standard bases, type $\\log$ then underscore then the base number then open parenthesis: $\\log\\_7(x)$ for $\\log_7(x)$. The parser recognizes both the underscore-base form and the bare $\\log$ (default base 10) and $\\ln$ (base $e$) forms.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type $<$ and $>$ directly, type $<=$ or $>=$ to insert $\\leq$ and $\\geq$, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random inequality of that form. Clicking again produces a new random version.

&bull; **Simple** &mdash; $\\log_b(x) > c$ with $b \\in \\{2, 3, 5, 10\\}$. The base case with a single-variable argument.
&bull; **Natural Log** &mdash; $\\ln(x) > c$. Uses the natural base $e$, which produces clean exponential-form right sides.
&bull; **With Coefficient** &mdash; $a \\cdot \\log_b(x) > c$. Requires dividing by $a$ to isolate the logarithm before converting.
&bull; **Linear Argument** &mdash; $\\log_b(mx + n) > c$. The logarithm argument is itself a linear expression; the post-conversion linear inequality is non-trivial.
&bull; **With Constant** &mdash; $\\log_b(x) + c > d$. Requires subtracting $c$ to isolate the logarithm.
&bull; **Natural Linear** &mdash; $\\ln(mx + n) > c$. Combines the natural base with a linear argument.
&bull; **Same Base Both Sides** &mdash; $\\log_b(f(x)) > \\log_b(c)$. Exercises the same-base comparison shortcut: the arguments are compared directly.
&bull; **Negative Right Side** &mdash; $\\log_b(x) > -c$. Tests the case where the exponential value $b^{-c}$ is a small positive number rather than zero or negative.

Roughly 80 percent of generated inequalities use clean bases and right-hand sides that produce exact integer or rational boundary values.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The exact sequence depends on the structural case.

&bull; **Rearrange Inequality** (when applicable) &mdash; if the logarithm is on the right, the solver swaps sides and flips the direction.
&bull; **Evaluate Constant** &mdash; simplifies the non-logarithm side to a single number.
&bull; **Isolate Logarithm** &mdash; subtracts additive constants or divides by a coefficient outside the logarithm to get the form $\\log_b(\\text{expr}) \\square c$.
&bull; **Compare Logarithms** (for same-base case) &mdash; if both sides are logarithms with the same base, the solver removes the logarithm from both sides and continues with the arguments. Direction is preserved when the base is greater than 1 and flipped when less than 1.
&bull; **Convert to Exponential Form** &mdash; restates $\\log_b(A) \\square c$ as $A \\square b^c$. Direction flips when the base is less than 1.
&bull; **Evaluate Exponential** &mdash; computes $b^c$ to a single number.
&bull; **Domain Constraint** &mdash; reminds that the original argument must be positive for the logarithm to be defined.
&bull; **Solve Linear Inequality** &mdash; finishes the post-conversion linear inequality in the variable.
&bull; **Apply Domain Constraint** &mdash; intersects the algebraic solution with the requirement that the argument be positive. May produce a bounded interval rather than a single ray.

The final-answer card shows the result as an inequality form plus interval notation.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Domain and Direction — The Two Hazards`,
    content: `Logarithmic inequality solving has two distinct hazards. Tracking both is critical.

**Hazard 1: Domain restriction.** A logarithm is defined only when its argument is positive. So $\\log_b(f(x))$ is defined when $f(x) > 0$. Any candidate value of $x$ that violates this is discarded, regardless of what the algebraic solution says.

&bull; For an isolated $\\log_b(x) \\square c$, the post-conversion inequality $x \\square b^c$ may include values where $x \\leq 0$ that must be excluded.
&bull; For $\\log_b(\\text{linear expression})$, the argument must be positive: $mx + n > 0$ adds its own boundary to combine with the algebraic answer.
&bull; The final answer is always the intersection: the algebraic solution AND the domain.

**Hazard 2: Direction flip with bases less than 1.** The logarithm function $\\log_b$ is increasing when $b > 1$ and decreasing when $0 < b < 1$. Converting between logarithmic and exponential forms with a base less than 1 reverses the inequality direction.

&bull; $\\log_{1/2}(x) > 3$ converts to $x < (1/2)^3 = 1/8$ (direction flipped).
&bull; $\\log_2(x) > 3$ converts to $x > 2^3 = 8$ (direction preserved).

**The combination.** When both hazards apply, the solver handles them sequentially: first the algebraic conversion with the appropriate direction, then the domain intersection. The result is either a single ray, a bounded interval, or no solution.

**Examples.**

&bull; $\\log_2(x) < 3$ becomes $x < 8$ with domain $x > 0$. Intersection: $0 < x < 8$, a bounded interval.
&bull; $\\log_2(x) > -3$ becomes $x > 1/8$ with domain $x > 0$. Domain is automatic since $1/8 > 0$. Final answer: $x > 1/8$.
&bull; $\\log_2(x) < -3$ becomes $x < 1/8$ with domain $x > 0$. Intersection: $0 < x < 1/8$.

For deeper coverage see **logarithm** and **domain of a function**.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Logarithmic Inequality?`,
    content: `A logarithmic inequality is an inequality where the variable appears inside a logarithm. The standard form is

$$\\log_b(f(x)) \\;\\square\\; c$$

where $b > 0$ and $b \\neq 1$ is the base, $f(x)$ is a function of the variable (usually linear), $c$ is a real number, and $\\square$ is one of $<$, $>$, $\\leq$, $\\geq$.

**The two regimes by base.**

&bull; **$b > 1$**: $\\log_b$ is strictly increasing. Larger argument means larger logarithm. Converting between logarithmic and exponential form preserves direction.
&bull; **$0 < b < 1$**: $\\log_b$ is strictly decreasing. Larger argument means smaller logarithm. Conversion reverses direction.

**The domain restriction.** For any base, $\\log_b(f(x))$ requires $f(x) > 0$. This restriction must be enforced separately and intersected with the algebraic solution.

**Solution shapes.** Depending on the structural case, a logarithmic inequality can produce:

&bull; A single ray (most common when the algebraic solution agrees with the domain).
&bull; A bounded interval (when the algebraic solution caps from above and the domain caps from below).
&bull; A half-line starting at the domain boundary.
&bull; No solution (when the algebraic solution is disjoint from the domain).

**The pivotal move.** Converting $\\log_b(f(x)) \\square c$ to $f(x) \\square b^c$ extracts the variable from the logarithm. From there, standard linear (or polynomial) inequality techniques finish the problem.

**Same-base shortcut.** When both sides are logarithms with the same base, the conversion can be skipped: $\\log_b(A) \\square \\log_b(B)$ becomes $A \\square B$ directly, with direction reversed for bases less than 1. Both arguments must still be positive.

For deeper coverage see **logarithmic inequality**, **logarithm**, and **exponential function**.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Five stages handle any standard logarithmic inequality.

&bull; **Stage 1: Isolate the logarithm.** Move the logarithm to one side. Subtract any constants added to it. Divide by any coefficient multiplying it (flipping direction if the coefficient is negative). The goal is to reach $\\log_b(f(x)) \\square c$ where the right side is a single number.

&bull; **Stage 2: Recognize same-base shortcut.** If both sides are logarithms with the same base after isolation, skip the exponential conversion and compare arguments directly: $\\log_b(A) \\square \\log_b(B)$ becomes $A \\square B$ (or flipped if $b < 1$). Both $A > 0$ and $B > 0$ must hold.

&bull; **Stage 3: Convert to exponential form.** Replace $\\log_b(f(x)) \\square c$ with $f(x) \\square b^c$. Direction flips if and only if $b < 1$.

&bull; **Stage 4: Solve the resulting inequality.** Compute $b^c$ as a number. The inequality is now $f(x) \\square b^c$. If $f(x)$ is linear, the standard linear-inequality moves finish it.

&bull; **Stage 5: Intersect with the domain.** The original argument $f(x)$ must be positive. Solve $f(x) > 0$ and intersect with the result of stage 4. The intersection is the final answer.

**The implementation.** Internally, the solver navigates this decision tree based on the structure of the input AST. It detects same-base shortcuts, applies appropriate direction-flip logic per base, and assembles the final answer by intersecting the algebraic solution with the domain. The result is rendered as an inequality plus the corresponding interval notation.

**Edge cases the solver handles automatically.**

&bull; **No-solution after intersection** &mdash; when the algebraic answer and the domain do not overlap.
&bull; **Domain automatic** &mdash; when $b^c > 0$ trivially satisfies the domain (which is always true since $b > 0$).
&bull; **Bounded interval** &mdash; when the algebraic answer caps from above and the domain caps from below (or vice versa).

For comprehensive treatment see **solving logarithmic inequalities** and **logarithm rules**.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Logarithm** &mdash; the inverse of the exponential function. $\\log_b c$ is the unique exponent $k$ such that $b^k = c$. The pivotal tool that this solver works with.

**Natural Logarithm** &mdash; logarithm with base $e \\approx 2.71828$. Denoted $\\ln$. Appears throughout calculus, probability, and information theory.

**Common Logarithm** &mdash; logarithm with base 10. Denoted $\\log$ without a subscript in most contexts. Standard for decibels, pH, and Richter scale.

**Logarithm Base 2** &mdash; appears in computer science and information theory. Denoted $\\log_2$.

**Exponential Function** &mdash; the inverse of the logarithm. $b^x$ where $b > 0, b \\neq 1$. Logarithmic inequalities reduce to exponential equations via conversion.

**Exponential Inequality** &mdash; the conjugate problem type. An exponential inequality with the variable in the exponent is solved by taking a logarithm; a logarithmic inequality with the variable inside the logarithm is solved by exponentiating.

**Domain of a Function** &mdash; the set of inputs for which the function is defined. For logarithms, the domain is the positive real numbers; for the argument to be a valid input, it must evaluate to something positive.

**Change of Base** &mdash; the formula $\\log_b c = \\frac{\\log c}{\\log b} = \\frac{\\ln c}{\\ln b}$. Converts any logarithm to a more convenient base for computation.

**Logarithm Rules** &mdash; the algebraic identities including product, quotient, and power rules. Useful for combining or splitting logarithms before isolation: $\\log(ab) = \\log a + \\log b$, $\\log(a/b) = \\log a - \\log b$, $\\log(a^k) = k \\log a$.

**Linear Inequality** &mdash; the inequality type that the post-conversion step usually produces. The solver routes through linear-inequality logic to finish.

**Compound Inequality** &mdash; the form like $a < x \\leq b$ that arises when intersecting an upper bound from the algebraic solution with a lower bound from the domain.

**pH** &mdash; the canonical real-world logarithmic quantity. $\\text{pH} = -\\log_{10}[\\text{H}^+]$. Inequalities about pH ranges reduce to logarithmic inequalities.

**Decibel** &mdash; another logarithmic quantity. Sound levels measured in decibels follow logarithm rules; threshold-comparison problems are logarithmic inequalities.

**Interval Notation** &mdash; the standard way to write the solution. Parentheses for excluded endpoints, brackets for included endpoints, infinity always with parentheses.`,
    before: ``, after: ``, link: ''
  }
}
    },

    'absolute-value': {
      component: 'AbsValueInequalitySolver',
      title: "Free Absolute Value Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for absolute value inequalities. Splits into compound or union form, handles edge cases, returns interval notation.",
      name: "Absolute Value Inequality Solver",
      url: "/algebra/calculators/inequalities/absolute-value",
      h1: "Absolute Value Inequality Solver",
      category: 'Inequalities',
      subCategory: 'Solvers',
      icon: '|x|',
      keywords: [
        "free absolute value inequality solver",
        "|ax + b| < c",
        "compound inequality solver",
        "union inequality",
        "free math solver",
        "modulus inequality calculator"
      ],
     faqQuestions: {
  obj1: {
    question: "What is an absolute value inequality?",
    answer: "An absolute value inequality compares an expression inside absolute value bars to another quantity using less than, greater than, less than or equal, or greater than or equal. The standard form is the absolute value of ax plus b compared to c. The solution splits into two cases based on the inequality direction."
  },
  obj2: {
    question: "When does the absolute value inequality become a compound inequality versus a union?",
    answer: "Less-than form, such as the absolute value of A less than c, becomes a compound inequality where A is between negative c and positive c. Greater-than form, such as the absolute value of A greater than c, becomes a union where A is less than negative c or greater than positive c."
  },
  obj3: {
    question: "What happens when the right side is negative?",
    answer: "Since an absolute value is always non-negative, comparison to a negative number is automatic. Less-than form with a negative right side has no solution; greater-than form with a negative right side holds for all real numbers. The solver detects both edge cases without applying the case split."
  },
  obj4: {
    question: "How do you write the answer in interval notation?",
    answer: "Compound form (between the two boundary values) uses a single interval, open or closed depending on whether the inequality is strict or non-strict. Union form uses two intervals joined by the union symbol, both extending to infinity. Endpoints use parentheses for strict, brackets for non-strict."
  },
  obj5: {
    question: "How do you handle an absolute value inequality with a coefficient or added constant outside?",
    answer: "Isolate the absolute value first. Subtract any added constants. Divide by any coefficient multiplying the absolute value. If the coefficient is negative, the inequality direction flips once during the division. Once isolated to the absolute value compared to a constant, apply the case split."
}
},
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an inequality display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $|x - 3| < 5$ and press Enter &mdash; the right panel rewrites as $-5 < x - 3 < 5$, solves both sides, and reports the compound inequality $-2 < x < 8$ with the interval $(-2, 8)$.
&bull; Click the &quot;Simple Greater Than&quot; example template &mdash; an inequality like $|x + 2| > 4$ loads. The solver rewrites as a union, $x + 2 < -4$ or $x + 2 > 4$, and reports the union answer $x < -6$ or $x > 2$.
&bull; Try the &quot;No Solution&quot; template &mdash; an inequality with a negative right side loads. The solver detects the impossibility immediately and reports no solution.

The Solve button is disabled until you enter something. The special row includes the absolute value bars button (rendered as $|$ $|$).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Inequalities with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus.
&bull; **Ineq row** &mdash; the four inequality symbols.
&bull; **Special row** &mdash; absolute value bars and parentheses.

The absolute value bars button inserts a single $|$ character; click it twice to surround an expression. Keyboard users can type the vertical-bar character directly. For multi-term expressions inside the bars, type the terms between the two bars: $|2x + 1|$.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type $<$ and $>$ directly, type $<=$ or $>=$ to insert $\\leq$ and $\\geq$, type the vertical bar for absolute value, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random inequality of that form. Clicking again produces a new random version.

&bull; **Simple Less Than** &mdash; $|x + a| < b$. The compound case with coefficient 1 on the variable.
&bull; **Simple Greater Than** &mdash; $|x + a| > b$. The union case with coefficient 1.
&bull; **Less or Equal** &mdash; $|ax + b| \\leq c$. Non-strict compound case with bracketed endpoints.
&bull; **Greater or Equal** &mdash; $|ax + b| \\geq c$. Non-strict union case with bracketed endpoints.
&bull; **Isolate First** &mdash; $|x + a| + b < c$. Requires subtracting $b$ before applying the case split.
&bull; **Coefficient Outside** &mdash; $a \\cdot |x + b| > c$. Requires dividing by $a$ before applying the case split.
&bull; **No Solution** &mdash; $|expression| < $ negative. Tests the impossible-case branch.
&bull; **All Reals** &mdash; $|expression| \\geq 0$. Tests the always-true branch.

Roughly 80 percent of generated inequalities produce clean integer boundary values.`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The exact sequence depends on the structural case.

&bull; **Rearrange** (when applicable) &mdash; if the absolute value is on the right, the solver swaps sides and flips the direction.
&bull; **Isolate Absolute Value** &mdash; subtracts an additive constant or divides by a coefficient outside the bars to leave $|expression| \\square c$ alone on one side. Dividing by a negative coefficient flips the direction.
&bull; **No Solution** or **All Real Numbers** (for special cases) &mdash; handles negative right sides and zero edge cases without applying the case split.
&bull; **Compound Inequality** (for less-than form) &mdash; rewrites $|A| < c$ as $-c < A < c$.
&bull; **Union of Two Inequalities** (for greater-than form) &mdash; rewrites $|A| > c$ as $A < -c$ or $A > c$.
&bull; **Solve Both Sides** (compound) or **Solve Both Branches** (union) &mdash; finishes each linear sub-inequality.
&bull; **Solution Interval** or **Solution** &mdash; states the final compound or union answer.

The final-answer card shows the answer in three forms: the inequality form ($a < x < b$ or $x < a$ or $x > b$), a plain-language note about the bounds, and the interval notation.`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Two Cases — Why They Work`,
    content: `Every absolute value inequality reduces to one of two structural cases. Knowing which one is half the work.

**Case 1: $|A| < c$ becomes a compound inequality (AND).** The absolute value of $A$ is less than $c$ exactly when $A$ is closer to zero than $c$ units. That is, $A$ lies in the open interval from $-c$ to $c$:

$$|A| < c \\;\\iff\\; -c < A < c$$

Geometrically: on the number line, $|A|$ is the distance from zero, so $|A| < c$ means &quot;within $c$ of zero&quot;.

**Case 2: $|A| > c$ becomes a union (OR).** The absolute value of $A$ is greater than $c$ exactly when $A$ is farther from zero than $c$ units. That is, $A$ lies outside the interval from $-c$ to $c$:

$$|A| > c \\;\\iff\\; A < -c \\text{ or } A > c$$

Geometrically: on the number line, &quot;more than $c$ away from zero&quot; means either far to the left or far to the right.

**Non-strict variants.** The strict $<$ and $>$ produce open endpoints; the non-strict $\\leq$ and $\\geq$ produce closed endpoints. So $|A| \\leq c$ becomes $-c \\leq A \\leq c$ (closed interval), and $|A| \\geq c$ becomes $A \\leq -c$ or $A \\geq c$ (union with closed endpoints).

**Edge cases when $c \\leq 0$.**

&bull; $|A| < c$ with $c \\leq 0$: impossible because $|A| \\geq 0$ never lies below a non-positive number.
&bull; $|A| > c$ with $c < 0$: always true because $|A| \\geq 0 > c$.
&bull; $|A| \\leq 0$: only when $A = 0$, giving a single point.
&bull; $|A| \\geq 0$: always true.
&bull; $|A| > 0$: all reals except where $A = 0$.
&bull; $|A| < 0$: no solution.

For deeper coverage see **absolute value inequality** and **compound inequality**.`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is an Absolute Value Inequality?`,
    content: `An absolute value inequality is an inequality containing an expression inside absolute value bars compared to another quantity. The standard form is

$$|f(x)| \\;\\square\\; c$$

where $f(x)$ is a linear expression (usually $ax + b$), $c$ is a real number, and $\\square$ is one of $<$, $>$, $\\leq$, $\\geq$.

**Solution shapes.** Depending on the inequality direction and the sign of $c$, the solution takes one of several forms:

&bull; **A bounded interval (compound)** &mdash; less-than form with $c > 0$. Example: $|x| < 3$ gives $-3 < x < 3$.
&bull; **A union of two rays** &mdash; greater-than form with $c > 0$. Example: $|x| > 3$ gives $x < -3$ or $x > 3$.
&bull; **A single point** &mdash; non-strict less-than with $c = 0$. Example: $|x - 5| \\leq 0$ gives $x = 5$.
&bull; **All reals except one point** &mdash; strict greater-than with $c = 0$. Example: $|x| > 0$ gives all $x \\neq 0$.
&bull; **All real numbers** &mdash; greater-than form with $c \\leq 0$ (and non-strict $c = 0$).
&bull; **No solution** &mdash; less-than form with $c \\leq 0$ (and strict $c = 0$).

**Geometric meaning.** $|x - a|$ is the distance from $x$ to $a$ on the number line. So $|x - a| < c$ means &quot;$x$ is within $c$ of $a$&quot; (an interval centered at $a$), and $|x - a| > c$ means &quot;$x$ is more than $c$ from $a$&quot; (the complement, two rays extending outward).

**Standard form for non-trivial cases.** Once isolated to $|ax + b| \\square c$ with $c > 0$, the linear-isolation case split applies cleanly: compound for less-than, union for greater-than.

For deeper coverage see **absolute value inequality**, **absolute value**, and **interval notation**.`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Four stages handle any standard absolute value inequality.

&bull; **Stage 1: Isolate the absolute value.** Subtract any constants added to the absolute value expression. Divide by any coefficient multiplying it (flipping the direction once if the coefficient is negative). The goal is to reach the form $|f(x)| \\square c$ where $c$ is a constant.

&bull; **Stage 2: Examine the right side.**

  &bull; **$c < 0$ with less-than form**: no solution.
  &bull; **$c < 0$ with greater-than form**: all real numbers.
  &bull; **$c = 0$, special cases**: single point (non-strict less-than), all reals except a point (strict greater-than), no solution (strict less-than), all reals (non-strict greater-than).
  &bull; **$c > 0$**: proceed to stage 3.

&bull; **Stage 3: Apply the case split.**

  &bull; **Less-than form ($|A| < c$ or $|A| \\leq c$)**: rewrite as the compound inequality $-c \\square A \\square c$ with the same strictness on both sides.
  &bull; **Greater-than form ($|A| > c$ or $|A| \\geq c$)**: rewrite as the union $A \\square -c$ or $A \\square c$ with the appropriate strictness.

&bull; **Stage 4: Solve the resulting linear sub-inequalities.** For compound form, isolate the variable in the middle by performing the same operation on all three parts. For union form, solve each branch independently. Direction flips once in each branch if the linear coefficient is negative.

**The implementation.** Internally, the solver collects linear terms inside the absolute value to extract coefficient $a$ and constant $b$. It then performs the case split symbolically, solves each sub-inequality, and assembles the final answer in the appropriate compound, union, point, or special-case form. The final-answer card adapts to the matched branch.

For comprehensive treatment see **solving absolute value inequalities** and **case analysis**.`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Absolute Value** &mdash; the distance from zero on the number line. Defined piecewise as $x$ if $x \\geq 0$ and $-x$ if $x < 0$. The foundational concept for any absolute value inequality.

**Absolute Value Equation** &mdash; the equality counterpart $|f(x)| = c$. Solves by splitting into two cases ($f(x) = c$ and $f(x) = -c$) rather than the compound or union form of the inequality.

**Compound Inequality** &mdash; a chain like $-c < A < c$ that captures a bounded region. Arises naturally from less-than absolute value inequalities.

**Union of Inequalities** &mdash; two inequalities joined by &quot;or&quot;, producing a disconnected solution set. Arises naturally from greater-than absolute value inequalities.

**Interval Notation** &mdash; the standard way to write the solution. Parentheses for strict bounds, brackets for non-strict, the union symbol $\\cup$ for disconnected pieces.

**Linear Inequality** &mdash; the inequality type that the post-case-split sub-inequalities are. The solver routes each branch through standard linear-inequality logic.

**Distance on the Number Line** &mdash; the geometric interpretation. $|x - a| < c$ asks for points within distance $c$ of $a$; $|x - a| > c$ asks for points farther than $c$ from $a$. This perspective makes absolute value inequalities intuitive.

**Triangle Inequality** &mdash; the fundamental relation $|x + y| \\leq |x| + |y|$. The cornerstone result connecting absolute value to addition; appears throughout analysis.

**Piecewise Function** &mdash; the formal way to define the absolute value function. The absolute value is the canonical example, splitting at $x = 0$.

**Quadratic Inequality** &mdash; squaring both sides of $|f(x)| > c$ gives $f(x)^2 > c^2$, a quadratic inequality with the same solution set when $c \\geq 0$. An alternative solving path for some problems, though usually less direct than the case split.

**Modulus** &mdash; the generalization to complex numbers. $|a + bi| = \\sqrt{a^2 + b^2}$. Real absolute value is the special case where the imaginary part is zero.

**Number Line Graphing** &mdash; the geometric representation of the solution. A compound solution is a single shaded segment; a union solution is two shaded rays extending outward.`,
    before: ``, after: ``, link: ''
  }
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
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
        { "@type": "ListItem", "position": 2, "name": "Algebra", "item": "https://www.learnmathclass.com/algebra" },
        { "@type": "ListItem", "position": 3, "name": "Calculators", "item": "https://www.learnmathclass.com/algebra/calculators" },
        { "@type": "ListItem", "position": 4, "name": currentConfig.name, "item": `https://www.learnmathclass.com${currentConfig.url}` }
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
      "Step-by-step linear inequality solving",
      "Direction-flip tracking on negative multiplication/division",
      "Interval notation output",
      "Identity and contradiction detection"
    ],
    'quadratic': [
      "Root finding via discriminant",
      "Interval testing on the parabola",
      "Open or closed bracket selection by inequality direction",
      "Graphical sign analysis"
    ],
    'rational': [
      "Sign chart method",
      "Critical point identification (numerator + denominator zeros)",
      "Interval-by-interval testing",
      "Strict denominator exclusion regardless of inequality direction"
    ],
    'radical': [
      "Domain restriction solving",
      "Power-raising to remove the radical",
      "Intersection of resulting solution with domain",
      "Even and odd index support"
    ],
    'exponential': [
      "Exponential term isolation",
      "Logarithm application to both sides",
      "Direction-flip handling for bases between 0 and 1",
      "Always-true / never-true edge cases"
    ],
    'logarithmic': [
      "Logarithm isolation",
      "Conversion to exponential form",
      "Direction-flip handling for bases between 0 and 1",
      "Domain intersection on every log argument"
    ],
    'absolute-value': [
      "Compound inequality form for |A| < c",
      "Union form for |A| > c",
      "Edge-case handling for c \u2264 0",
      "Interval notation output"
    ]
  }
  return features[view] || []
}


export default function AlgebraInequalityViewPage({
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

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
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
      <Breadcrumb nonLinkSegments={['inequalities']} />
      <br />
      <br />
      <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>{h1Title}</h1>

      <SiblingsNav
        title="Inequalities"
        maxWidth='1800px'
        topOffset='100px'
        bg='#ffffff'
        color='#304090'
        activeColor='#1e40af'
        activeBg='#dbeafe'
        width='220px'
        gap='20px'
        childMaxWidth='100%'
      >
        <div className='solver-stretch'>
          <style dangerouslySetInnerHTML={{ __html: `
            .solver-stretch {
              width: 100%;
            }
            .solver-stretch > * {
              max-width: none !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
            .solver-stretch > * > * {
              max-width: 1300px !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          ` }} />
          {componentName === 'LinearInequalitySolver' && <LinearInequalitySolver />}
          {componentName === 'QuadraticInequalitySolver' && <QuadraticInequalitySolver />}
          {componentName === 'RationalInequalitySolver' && <RationalInequalitySolver />}
          {componentName === 'RadicalInequalitySolver' && <RadicalInequalitySolver />}
          {componentName === 'ExponentialInequalitySolver' && <ExponentialInequalitySolver />}
          {componentName === 'LogarithmicInequalitySolver' && <LogarithmicInequalitySolver />}
          {componentName === 'AbsValueInequalitySolver' && <AbsValueInequalitySolver />}
        </div>
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