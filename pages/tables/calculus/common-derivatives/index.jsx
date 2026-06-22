


// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import Head from 'next/head'
// // import '@/pages/pages.css'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import CommonDerivativesPage from '../../../../app/components/tables/calculus-tables/CommonDerivativesTables'
// // import GenericTableExplorer from '../../../../app/components/tables/table-explorer/GenericTableExplorer'


// // export async function getStaticProps(){

// //   const keyWords = [
// //     'common derivatives',
// //     'derivatives table',
// //     'derivative cheat sheet',
// //     'derivatives reference',
// //     'derivative of sin',
// //     'derivative of cos',
// //     'derivative of e^x',
// //     'derivative of ln x',
// //     'derivative of tan',
// //     'power rule derivative',
// //     'trigonometric derivatives',
// //     'hyperbolic derivatives',
// //     'inverse trig derivatives',
// //     'derivative formulas',
// //     'derivative practice'
// //   ]

// //   const sectionsContent = {

// //     obj0: { title: `Key Terms`, content: ``, before: ``, after: ``, link: '' },
// //     obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj9: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj10: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

// //   }


// //   const introContent = {
// //     id: "intro",
// //     title: "",
// //     content: ``
// //   }


// //   const faqQuestions = {
// //     obj1: {
// //       question: "What are common derivatives?",
// //       answer: "Common derivatives are the derivative identities that come up most often in calculus: the derivatives of polynomials, exponentials, logarithms, the six trig functions, the six inverse trig functions, and their hyperbolic counterparts. Together they cover the building blocks needed for almost any differentiation problem when combined with the linearity, product, quotient, and chain rules."
// //     },
// //     obj2: {
// //       question: "What is the derivative of sin x and cos x?",
// //       answer: "The derivative of sin(x) is cos(x). The derivative of cos(x) is negative sin(x). The sign change on cosine reflects the 90-degree phase shift between the two functions. Repeatedly differentiating cycles through sin, cos, negative sin, negative cos, and back to sin every four steps."
// //     },
// //     obj3: {
// //       question: "What is the power rule?",
// //       answer: "The power rule says that the derivative of x to the n is n times x to the (n minus 1) for any real exponent n. To use it, multiply by the exponent and then subtract one from the exponent. The rule covers polynomials, roots like the square root of x, and reciprocals like 1 over x."
// //     },
// //     obj4: {
// //       question: "What is the difference between the product rule and the chain rule?",
// //       answer: "The product rule differentiates a product of two functions: the derivative of f times g is f-prime times g plus f times g-prime. The chain rule differentiates a composition: the derivative of f of g(x) is f-prime evaluated at g(x), times g-prime of x. Products combine functions side by side; compositions nest one function inside another."
// //     },
// //     obj5: {
// //       question: "How do I memorize derivative rules?",
// //       answer: "Group the identities by category: polynomials, exponentials and logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic. Notice the patterns: cosine differentiates to negative sine but cosh differentiates to plus sinh; arcsin and arccos have opposite signs because they sum to a constant. Drill with the drag puzzle on this page to lock the pairings in."
// //     }
// //   }


// //   const schemas = {
// //     webApplication: {
// //       "@context": "https://schema.org",
// //       "@type": "WebApplication",
// //       "name": "Common Derivatives Table and Practice Tool",
// //       "description": "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
// //       "url": "https://www.learnmathclass.com/tables/calculus/common-derivatives",
// //       "applicationCategory": "EducationalApplication",
// //       "operatingSystem": "Any",
// //       "offers": {
// //         "@type": "Offer",
// //         "price": "0",
// //         "priceCurrency": "USD"
// //       },
// //       "featureList": [
// //         "Two-mode search: look up a derivative by f(x) or work backwards by entering f-prime(x)",
// //         "Reference grid of 30 common derivatives spanning polynomials, exponentials, logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic functions",
// //         "Each derivative card opens a details panel with a plain-English explanation and a link to the full derivation",
// //         "Six category filters plus a reciprocal-forms filter that highlights derivatives whose result is a fraction",
// //         "Puzzle mode: drag derivative tiles into their matching f(x) slot, with a per-tile hint button and a see-why link on each correct placement",
// //         "Four reference cards covering the structural differentiation rules: linearity, product rule, quotient rule, and chain rule",
// //         "Built-in quiz with three rotating question types and persistent score for memorizing the table"
// //       ],
// //       "author": {
// //         "@type": "Organization",
// //         "name": "Learn Math Class"
// //       },
// //       "datePublished": "2024-01-15",
// //       "dateModified": new Date().toISOString(),
// //       "inLanguage": "en-US",
// //       "isAccessibleForFree": true,
// //       "learningResourceType": "Reference Table and Interactive Tool",
// //       "educationalLevel": "High School, College",
// //       "keywords": keyWords.join(", ")
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
// //           "name": "Tables",
// //           "item": "https://www.learnmathclass.com/tables"
// //         },
// //         {
// //           "@type": "ListItem",
// //           "position": 3,
// //           "name": "Common Derivatives",
// //           "item": "https://www.learnmathclass.com/tables/calculus/common-derivatives"
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
// //   }


// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //          faqQuestions,
// //          schemas,
// //          seoData: {
// //            title: "Common Derivatives Table & Puzzle | Learn Math Class",
// //            description: "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
// //            keywords: keyWords.join(", "),
// //            url: "/tables/calculus/common-derivatives",
// //            name: "Common Derivatives Table and Practice Tool"
// //          }
// //        }
// //     }
// //    }

// // export default function CommonDerivativesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
// //   const genericSections=[
// //     {
// //         id:'0',
// //         title:sectionsContent.obj0.title,
// //         link:sectionsContent.obj0.link,
// //         content:[
// //           sectionsContent.obj0.content,
// //         ]
// //     },
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //         ]
// //     },
// //     {
// //         id:'13',
// //         title:sectionsContent.obj13.title,
// //         link:sectionsContent.obj13.link,
// //         content:[
// //           sectionsContent.obj13.content,
// //         ]
// //     },
// //     {
// //         id:'14',
// //         title:sectionsContent.obj14.title,
// //         link:sectionsContent.obj14.link,
// //         content:[
// //           sectionsContent.obj14.content,
// //         ]
// //     },
// //     {
// //         id:'15',
// //         title:sectionsContent.obj15.title,
// //         link:sectionsContent.obj15.link,
// //         content:[
// //           sectionsContent.obj15.content,
// //         ]
// //     },
    
// // ]

// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.webApplication)
// //     }}
// //   />

// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.breadcrumb)
// //     }}
// //   />

// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.faq)
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb nonLinkSegments={['calculus']}/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Common Derivatives</h1>
// //    <br/>
// //    <CommonDerivativesPage/>
// //    <br/>
// //    {/* <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    /> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //     {/* <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         /> */}
// //    <br/>
// //     {/* <KeyTermsCard
// //      id="0"
// //      title={sectionsContent.obj0.title}
// //      content={sectionsContent.obj0.content}
// //      after={sectionsContent.obj0.after}
// //      variant="light"
// //    /> */}
// //    <br/>
// //    {/* <Sections sections={genericSections}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import GenericTableExplorer from '../../../../app/components/tables/table-explorer/GenericTableExplorer'
// import DERIVATIVES_DATASET from '../../../../app/components/tables/table-explorer/data/derivativeDataset'

// // ──────────────────────────────────────────────────────────────
// // Split the dataset:
// //   - quizGenerator: a function. Can't be serialized through
// //     getStaticProps, so we keep it in module scope and pass it
// //     to the page component directly.
// //   - staticDataset: everything else. Plain JSON-safe data,
// //     goes through getStaticProps like normal.
// // ──────────────────────────────────────────────────────────────
// const { quizGenerator, ...staticDataset } = DERIVATIVES_DATASET


// export async function getStaticProps(){

//   const keyWords = [
//     'common derivatives',
//     'derivatives table',
//     'derivative cheat sheet',
//     'derivatives reference',
//     'derivative of sin',
//     'derivative of cos',
//     'derivative of e^x',
//     'derivative of ln x',
//     'derivative of tan',
//     'power rule derivative',
//     'trigonometric derivatives',
//     'hyperbolic derivatives',
//     'inverse trig derivatives',
//     'derivative formulas',
//     'derivative practice'
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
//       question: "What are common derivatives?",
//       answer: "Common derivatives are the derivative identities that come up most often in calculus: the derivatives of polynomials, exponentials, logarithms, the six trig functions, the six inverse trig functions, and their hyperbolic counterparts. Together they cover the building blocks needed for almost any differentiation problem when combined with the linearity, product, quotient, and chain rules."
//     },
//     obj2: {
//       question: "What is the derivative of sin x and cos x?",
//       answer: "The derivative of sin(x) is cos(x). The derivative of cos(x) is negative sin(x). The sign change on cosine reflects the 90-degree phase shift between the two functions. Repeatedly differentiating cycles through sin, cos, negative sin, negative cos, and back to sin every four steps."
//     },
//     obj3: {
//       question: "What is the power rule?",
//       answer: "The power rule says that the derivative of x to the n is n times x to the (n minus 1) for any real exponent n. To use it, multiply by the exponent and then subtract one from the exponent. The rule covers polynomials, roots like the square root of x, and reciprocals like 1 over x."
//     },
//     obj4: {
//       question: "What is the difference between the product rule and the chain rule?",
//       answer: "The product rule differentiates a product of two functions: the derivative of f times g is f-prime times g plus f times g-prime. The chain rule differentiates a composition: the derivative of f of g(x) is f-prime evaluated at g(x), times g-prime of x. Products combine functions side by side; compositions nest one function inside another."
//     },
//     obj5: {
//       question: "How do I memorize derivative rules?",
//       answer: "Group the identities by category: polynomials, exponentials and logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic. Notice the patterns: cosine differentiates to negative sine but cosh differentiates to plus sinh; arcsin and arccos have opposite signs because they sum to a constant. Drill with the drag puzzle on this page to lock the pairings in."
//     }
//   }


//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Common Derivatives Table and Practice Tool",
//       "description": "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
//       "url": "https://www.learnmathclass.com/tables/calculus/common-derivatives",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Two-mode search: look up a derivative by f(x) or work backwards by entering f-prime(x)",
//         "Reference grid of 30 common derivatives spanning polynomials, exponentials, logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic functions",
//         "Each derivative card opens a details panel with a plain-English explanation and a link to the full derivation",
//         "Six category filters plus a reciprocal-forms filter that highlights derivatives whose result is a fraction",
//         "Puzzle mode: drag derivative tiles into their matching f(x) slot, with a per-tile hint button and a see-why link on each correct placement",
//         "Four reference cards covering the structural differentiation rules: linearity, product rule, quotient rule, and chain rule",
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
//           "name": "Common Derivatives",
//           "item": "https://www.learnmathclass.com/tables/calculus/common-derivatives"
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
//            title: "Common Derivatives Table & Puzzle | Learn Math Class",
//            description: "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
//            keywords: keyWords.join(", "),
//            url: "/tables/calculus/common-derivatives",
//            name: "Common Derivatives Table and Practice Tool"
//          }
//        }
//     }
//    }

// export default function CommonDerivativesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

    
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
//    <Breadcrumb nonLinkSegments={['calculus']}/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Common Derivatives</h1>
//    <br/>
//    <GenericTableExplorer
//      dataset={staticDataset}
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
import DERIVATIVES_DATASET from '../../../../app/components/tables/table-explorer/data/derivativeDataset'

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
} = DERIVATIVES_DATASET


export async function getStaticProps(){

  const keyWords = [
    'common derivatives',
    'derivatives table',
    'derivative cheat sheet',
    'derivatives reference',
    'derivative of sin',
    'derivative of cos',
    'derivative of e^x',
    'derivative of ln x',
    'derivative of tan',
    'power rule derivative',
    'trigonometric derivatives',
    'hyperbolic derivatives',
    'inverse trig derivatives',
    'derivative formulas',
    'derivative practice'
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
      question: "What are common derivatives?",
      answer: "Common derivatives are the derivative identities that come up most often in calculus: the derivatives of polynomials, exponentials, logarithms, the six trig functions, the six inverse trig functions, and their hyperbolic counterparts. Together they cover the building blocks needed for almost any differentiation problem when combined with the linearity, product, quotient, and chain rules."
    },
    obj2: {
      question: "What is the derivative of sin x and cos x?",
      answer: "The derivative of sin(x) is cos(x). The derivative of cos(x) is negative sin(x). The sign change on cosine reflects the 90-degree phase shift between the two functions. Repeatedly differentiating cycles through sin, cos, negative sin, negative cos, and back to sin every four steps."
    },
    obj3: {
      question: "What is the power rule?",
      answer: "The power rule says that the derivative of x to the n is n times x to the (n minus 1) for any real exponent n. To use it, multiply by the exponent and then subtract one from the exponent. The rule covers polynomials, roots like the square root of x, and reciprocals like 1 over x."
    },
    obj4: {
      question: "What is the difference between the product rule and the chain rule?",
      answer: "The product rule differentiates a product of two functions: the derivative of f times g is f-prime times g plus f times g-prime. The chain rule differentiates a composition: the derivative of f of g(x) is f-prime evaluated at g(x), times g-prime of x. Products combine functions side by side; compositions nest one function inside another."
    },
    obj5: {
      question: "How do I memorize derivative rules?",
      answer: "Group the identities by category: polynomials, exponentials and logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic. Notice the patterns: cosine differentiates to negative sine but cosh differentiates to plus sinh; arcsin and arccos have opposite signs because they sum to a constant. Drill with the drag puzzle on this page to lock the pairings in."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Common Derivatives Table and Practice Tool",
      "description": "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
      "url": "https://www.learnmathclass.com/tables/calculus/common-derivatives",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two-mode search: look up a derivative by f(x) or work backwards by entering f-prime(x)",
        "Reference grid of 30 common derivatives spanning polynomials, exponentials, logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic functions",
        "Each derivative card opens a details panel with a plain-English explanation and a link to the full derivation",
        "Six category filters plus a reciprocal-forms filter that highlights derivatives whose result is a fraction",
        "Puzzle mode: drag derivative tiles into their matching f(x) slot, with a per-tile hint button and a see-why link on each correct placement",
        "Four reference cards covering the structural differentiation rules: linearity, product rule, quotient rule, and chain rule",
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
          "name": "Common Derivatives",
          "item": "https://www.learnmathclass.com/tables/calculus/common-derivatives"
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
           title: "Common Derivatives Table & Puzzle | Learn Math Class",
           description: "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
           keywords: keyWords.join(", "),
           url: "/tables/calculus/common-derivatives",
           name: "Common Derivatives Table and Practice Tool"
         }
       }
    }
   }

export default function CommonDerivativesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

    
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
   <Breadcrumb nonLinkSegments={['calculus']}/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Common Derivatives</h1>
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