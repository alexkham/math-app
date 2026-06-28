// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import GenericTableExplorer from '../../../../app/components/tables/table-explorer/GenericTableExplorer'
// import TRIG_IDENTITIES_DATASET from '../../../../app/components/tables/table-explorer/data/trigIdentitiesDataset'

// // ──────────────────────────────────────────────────────────────
// // Split the dataset along the serialization boundary:
// //   - Function-bearing fields (quizGenerator, templates,
// //     extraFilters[*].match) cannot flow through getStaticProps.
// //     Kept in module scope, passed to the page via closure.
// //   - staticDataset: everything else. Plain JSON-safe data,
// //     goes through getStaticProps like normal.
// //   - Reassembled into a single `dataset` prop at render time.
// // ──────────────────────────────────────────────────────────────
// const {
//   quizGenerator,
//   templates,
//   extraFilters,
//   ...staticDataset
// } = TRIG_IDENTITIES_DATASET


// export async function getStaticProps(){

//   const keyWords = [
//     'trigonometric identities',
//     'trig identities',
//     'trig identities table',
//     'trig identity cheat sheet',
//     'trig identities reference',
//     'pythagorean identity',
//     'double-angle identity',
//     'half-angle identity',
//     'sum-angle identity',
//     'difference-angle identity',
//     'product to sum formulas',
//     'sum to product formulas',
//     'cofunction identities',
//     'inverse trig identities',
//     'trig identities practice'
//   ]

//   const sectionsContent = {

//     obj0: { title: `Key Terms`, content: ``, before: ``, after: ``, link: '' },
//     obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj9: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj10: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

//   }


//   const introContent = {
//     id: "intro",
//     title: "",
//     content: ``
//   }


//   const faqQuestions = {
//     obj1: {
//       question: "What are trigonometric identities?",
//       answer: "Trigonometric identities are equations involving trig functions that hold for every valid value of the variable. They cover Pythagorean relations such as sin squared plus cos squared equals one, reciprocal and quotient definitions, even and odd behavior, cofunction relations, sum-angle and double-angle formulas, half-angle and power-reduction forms, product-to-sum conversions, and inverse-function relationships. Together they form the working toolkit for simplifying, integrating, and solving trig expressions."
//     },
//     obj2: {
//       question: "What is the Pythagorean identity?",
//       answer: "The fundamental Pythagorean identity is sin squared of x plus cos squared of x equals one, true for every x. It follows from the unit circle: any point on it has coordinates (cos theta, sin theta) and satisfies x squared plus y squared equals one. Two derived forms follow by dividing through by cos squared or sin squared: one plus tan squared equals sec squared, and one plus cot squared equals csc squared."
//     },
//     obj3: {
//       question: "What is the difference between sum-angle and double-angle identities?",
//       answer: "Sum-angle identities give sin(a + b), cos(a + b), and tan(a + b) in terms of trig functions of a and b separately. Double-angle identities are the special case where a equals b equals x, producing sin(2x) equals 2 sin x cos x, cos(2x) equals cos squared minus sin squared, and so on. Sum-angle is the general form; double-angle is the most commonly used specialization, and triple-angle, half-angle, and power-reduction all descend from it by substitution or algebraic rearrangement."
//     },
//     obj4: {
//       question: "How do half-angle and power-reduction formulas relate?",
//       answer: "They are two sides of the same algebraic move. Power-reduction starts from the double-angle form cos(2x) equals one minus two sin squared x, solved for sin squared x to give one half of (one minus cos 2x). Half-angle takes the square root of the power-reduction form, giving sin(x over two) equals plus-or-minus the square root of (one minus cos x) over two. Power-reduction reduces a squared power to a multiple-angle expression; half-angle reduces a half angle to a full-angle expression."
//     },
//     obj5: {
//       question: "How do I memorize trig identities?",
//       answer: "Group them by family rather than memorizing in isolation. Start from the unit circle (Pythagorean), then reciprocal and quotient definitions. Master sum-angle for sine and cosine — everything else (difference, double, triple, half, product-to-sum, sum-to-product) follows by substitution. Note the parities: cosine and secant are even, while sine, tangent, cotangent, and cosecant are odd. Drill the family relationships with the drag puzzle on this page, and use the search-by-LHS feature to verify forms quickly."
//     }
//   }


//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Trigonometric Identities Table and Practice Tool",
//       "description": "Reference table of 64 trigonometric identities across 14 families: Pythagorean, reciprocal, negative-angle, complement, supplement, sum, difference, double, triple, half, power-reduction, product-to-sum, sum-to-product, and inverse. Search, filter, and drill with a drag puzzle.",
//       "url": "https://www.learnmathclass.com/tables/trigonometry/identities",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Two-mode search: look up identities by left-hand side or by right-hand side",
//         "Reference grid of 64 trig identities organized into 14 families: Pythagorean, reciprocal and quotient, negative-angle, complement (cofunction), supplement, sum-angle, difference-angle, double-angle, triple-angle, half-angle, power reduction, product-to-sum, sum-to-product, and inverse",
//         "Each identity card opens a details panel with a plain-English explanation, equivalent variant forms when applicable, and a link to the relevant content page",
//         "Fourteen category filters plus odd-function and even-function helpers that highlight the relevant negative-angle identities",
//         "Puzzle mode: drag right-hand-side tiles onto their matching left-hand-side slot, with hints and per-card explanations",
//         "Seven reference cards covering foundational principles: identity vs. equation, cofunction pairs, even and odd parities, Pythagorean family construction, the unit-circle source, sum-angle as the generator, and inverse trig principal values",
//         "Built-in quiz with three rotating question types and persistent score for memorizing the table"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Reference Table and Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": keyWords.join(", ")
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
//           "name": "Tables",
//           "item": "https://www.learnmathclass.com/tables"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Trigonometric Identities",
//           "item": "https://www.learnmathclass.com/tables/trigonometry/identities"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          faqQuestions,
//          schemas,
//          staticDataset,
//          seoData: {
//            title: "Trigonometric Identities Table & Puzzle | Learn Math Class",
//            description: "Reference table of 64 trig identities across 14 families: Pythagorean, sum-angle, double-angle, half-angle, inverse, and more. Search by LHS or RHS, filter by family, drill with a drag puzzle.",
//            keywords: keyWords.join(", "),
//            url: "/tables/trigonometry/identities",
//            name: "Trigonometric Identities Table and Practice Tool"
//          }
//        }
//     }
//    }

// export default function TrigIdentitiesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
    
// ]

//   // Reassemble the dataset. The static half came through props;
//   // the function-bearing half is reattached from the closure.
//   const dataset = {
//     ...staticDataset,
//     templates,
//     extraFilters,
//   }

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//       __html: JSON.stringify(schemas.webApplication)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb nonLinkSegments={['trigonometry']}/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Trigonometric Identities</h1>
//    <br/>
//    <GenericTableExplorer
//      dataset={dataset}
//      quizGenerator={quizGenerator}
//    />
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    /> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import GenericTableExplorer from '../../../../app/components/tables/table-explorer/GenericTableExplorer'
import TRIG_IDENTITIES_DATASET from '../../../../app/components/tables/table-explorer/data/trigIdentitiesDataset'

// ──────────────────────────────────────────────────────────────
// Split the dataset along the serialization boundary:
//   - Function-bearing fields (quizGenerator, templates,
//     extraFilters[*].match) cannot flow through getStaticProps.
//     Kept in module scope, passed to the page via closure.
//   - staticDataset: everything else. Plain JSON-safe data,
//     goes through getStaticProps like normal.
//   - Reassembled into a single `dataset` prop at render time.
// ──────────────────────────────────────────────────────────────
const {
  quizGenerator,
  templates,
  extraFilters,
  ...staticDataset
} = TRIG_IDENTITIES_DATASET


export async function getStaticProps(){

  const keyWords = [
    // Core
    'trigonometric identities',
    'trig identities',
    'trigonometric identities table',
    'trig identities cheat sheet',
    'trig identities reference',

    // Foundational families
    'pythagorean identity',
    'reciprocal identities',
    'quotient identities',

    // Angle transforms
    'negative angle identities',
    'even odd identities',
    'cofunction identities',
    'complement angle identities',
    'supplementary angle identities',
    'trigonometric reduction formulas',
    'reduction formula for trigonometric functions',

    // Multi-angle
    'sum of angles formula',
    'difference of angles formula',
    'sum and difference formulas',
    'double angle identity',
    'triple angle identity',
    'half angle formula',
    'power reduction formula',
    'multiple angle identities',

    // Conversions
    'product to sum formulas',
    'sum to product formulas',

    // Inverse
    'inverse trigonometric functions',
    'inverse trig identities',
    'arcsin arccos arctan',

    // Practice
    'trig identities practice'
  ]

  const sectionsContent = {

    obj0: { title: `Key Terms`, content: ``, before: ``, after: ``, link: '' },
    obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj9: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj10: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What are trigonometric identities?",
      answer: "Trigonometric identities are equations involving trig functions that hold for every valid value of the variable. They cover Pythagorean relations such as sin squared plus cos squared equals one, reciprocal and quotient definitions, even and odd behavior, cofunction relations, sum-angle and double-angle formulas, half-angle and power-reduction forms, product-to-sum conversions, reference-angle reduction, and inverse-function relationships. Together they form the working toolkit for simplifying, integrating, and solving trig expressions, covering all six functions: sine, cosine, tangent, cotangent, secant, and cosecant."
    },
    obj2: {
      question: "What is the Pythagorean identity?",
      answer: "The fundamental Pythagorean identity is sin squared of x plus cos squared of x equals one, true for every x. It follows from the unit circle: any point on it has coordinates (cos theta, sin theta) and satisfies x squared plus y squared equals one. Two derived forms follow by dividing through by cos squared or sin squared: one plus tan squared equals sec squared, and one plus cot squared equals csc squared."
    },
    obj3: {
      question: "What are the trigonometric reduction formulas?",
      answer: "Reduction formulas, also called reference-angle reduction, let you rewrite any trig function evaluated at any angle as the same function (or its cofunction) evaluated at a first-quadrant angle, up to a sign. The standard transformations are pi over two plus or minus x, pi plus or minus x, three pi over two plus or minus x, and two pi plus or minus x. For example, sin(pi + x) equals minus sin(x), and cos(three pi over two minus x) equals minus sin(x). They cover all six functions and are essential for evaluating trig at any angle in terms of acute-angle values."
    },
    obj4: {
      question: "What is the difference between sum-angle and double-angle identities?",
      answer: "Sum-angle identities give sin(a + b), cos(a + b), and tan(a + b) in terms of trig functions of a and b separately. Double-angle identities are the special case where a equals b equals x, producing sin(2x) equals 2 sin x cos x, cos(2x) equals cos squared minus sin squared, and so on. Sum-angle is the general form; double-angle is the most commonly used specialization, and triple-angle, half-angle, and power-reduction all descend from it by substitution or algebraic rearrangement. All six functions (sine, cosine, tangent, cotangent, secant, cosecant) have versions of each."
    },
    obj5: {
      question: "How do half-angle and power-reduction formulas relate?",
      answer: "They are two sides of the same algebraic move. Power-reduction starts from the double-angle form cos(2x) equals one minus two sin squared x, solved for sin squared x to give one half of (one minus cos 2x). Half-angle takes the square root of the power-reduction form, giving sin(x over two) equals plus-or-minus the square root of (one minus cos x) over two. Power-reduction reduces a squared power to a multiple-angle expression; half-angle reduces a half angle to a full-angle expression."
    },
    obj6: {
      question: "How do I memorize trig identities?",
      answer: "Group them by family rather than memorizing in isolation. Start from the unit circle (Pythagorean), then reciprocal and quotient definitions. Master sum-angle for sine and cosine — everything else (difference, double, triple, half, product-to-sum, sum-to-product) follows by substitution. Note the parities: cosine and secant are even, while sine, tangent, cotangent, and cosecant are odd. Learn the reference-angle reduction transforms (pi over two plus or minus x, pi plus or minus x, and so on) to reduce any angle to a first-quadrant equivalent. Drill the family relationships with the drag puzzle on this page, and use the search-by-LHS feature to verify forms quickly."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Trigonometric Identities Table and Practice Tool",
      "description": "Reference table of 115 trigonometric identities across 15 families: Pythagorean, reciprocal and quotient, negative-angle (even-odd), complement (cofunction), supplement, reference-angle reduction, sum-angle, difference-angle, double-angle, triple-angle, half-angle, power reduction, product-to-sum, sum-to-product, and inverse. All six functions covered: sine, cosine, tangent, cotangent, secant, and cosecant. Search, filter, and drill with a drag puzzle.",
      "url": "https://www.learnmathclass.com/tables/trigonometry/identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two-mode search: look up identities by left-hand side or by right-hand side",
        "Reference grid of 115 trig identities organized into 15 families: Pythagorean, reciprocal and quotient, negative-angle (even-odd), complement (cofunction), supplement, reference-angle reduction, sum-angle, difference-angle, double-angle, triple-angle, half-angle, power reduction, product-to-sum, sum-to-product, and inverse",
        "Complete six-function coverage across all multi-angle families: sin, cos, tan, cot, sec, and csc forms for sum, difference, double, triple, and half angles",
        "Reference-angle reduction table covering the six standard transformations (pi/2 plus or minus x, pi plus or minus x, three pi over two plus or minus x, two pi plus or minus x) for all six trig functions",
        "Each identity card opens a details panel with a plain-English explanation, equivalent variant forms when applicable, and a link to the relevant content page",
        "Fifteen category filters plus odd-function and even-function helpers that highlight the relevant negative-angle identities",
        "Puzzle mode: drag right-hand-side tiles onto their matching left-hand-side slot, with hints and per-card explanations",
        "Eight reference cards covering foundational principles: identity vs. equation, cofunction pairs, even and odd parities, Pythagorean family construction, the unit-circle source, reference-angle reduction, sum-angle as the generator, and inverse trig principal values",
        "Built-in quiz with three rotating question types and persistent score for memorizing the table"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Reference Table and Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
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
          "name": "Tables",
          "item": "https://www.learnmathclass.com/tables"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Trigonometric Identities",
          "item": "https://www.learnmathclass.com/tables/trigonometry/identities"
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
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         staticDataset,
         seoData: {
           title: "Trigonometric Identities Table & Puzzle | Learn Math Class",
           description: "115 trig identities across 15 families: Pythagorean, sum/difference, double/triple/half angle, reduction formulas, product-to-sum, inverse, and more. All six functions covered. Search, filter, drill.",
           keywords: keyWords.join(", "),
           url: "/tables/trigonometry/identities",
           name: "Trigonometric Identities Table and Practice Tool"
         }
       }
    }
   }

export default function TrigIdentitiesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

    
  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    
]

  // Reassemble the dataset. The static half came through props;
  // the function-bearing half is reattached from the closure.
  const dataset = {
    ...staticDataset,
    templates,
    extraFilters,
  }

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
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb nonLinkSegments={['trigonometry']}/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Trigonometric Identities</h1>
   <br/>
   <GenericTableExplorer
     dataset={dataset}
     quizGenerator={quizGenerator}
   />
   <br/>
   {/* <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   /> */}
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
   <br/>
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   {/* <Sections sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}