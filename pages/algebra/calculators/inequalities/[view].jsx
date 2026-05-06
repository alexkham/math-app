// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

//     const sectionsContent={

//     obj0:{
//       title:`Key Terms`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/url",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
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
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Page Title</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//     <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
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
      component: 'QuadraticInequalitySolver',
      title: "Free Quadratic Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for quadratic inequalities. Finds roots, tests intervals on the parabola, and returns the solution in interval notation.",
      name: "Quadratic Inequality Solver",
      url: "/algebra/calculators/inequalities/quadratic",
      h1: "Quadratic Inequality Solver",
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
      component: 'RationalInequalitySolver',
      title: "Free Rational Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for rational inequalities using the sign chart method. Finds critical points, tests intervals, and reports interval notation.",
      name: "Rational Inequality Solver",
      url: "/algebra/calculators/inequalities/rational",
      h1: "Rational Inequality Solver",
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
      component: 'RadicalInequalitySolver',
      title: "Free Radical Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for radical inequalities. Handles domain restrictions, raises both sides to remove the radical, and intersects with the domain.",
      name: "Radical Inequality Solver",
      url: "/algebra/calculators/inequalities/radical",
      h1: "Radical Inequality Solver",
      keywords: [
        "free radical inequality solver",
        "square root inequality",
        "domain restriction radical",
        "free math calculator",
        "nth root inequality",
        "radical inequality calculator"
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
      component: 'ExponentialInequalitySolver',
      title: "Free Exponential Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for exponential inequalities. Isolates the exponential, applies a logarithm with correct direction handling per base.",
      name: "Exponential Inequality Solver",
      url: "/algebra/calculators/inequalities/exponential",
      h1: "Exponential Inequality Solver",
      keywords: [
        "free exponential inequality solver",
        "b^x inequality",
        "logarithm inequality",
        "free math solver",
        "exponential inequality calculator",
        "direction flip log base"
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
      component: 'LogarithmicInequalitySolver',
      title: "Free Logarithmic Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for logarithmic inequalities. Handles domain restrictions, base-direction logic, and converts to exponential form to solve.",
      name: "Logarithmic Inequality Solver",
      url: "/algebra/calculators/inequalities/logarithmic",
      h1: "Logarithmic Inequality Solver",
      keywords: [
        "free logarithmic inequality solver",
        "log inequality calculator",
        "ln inequality",
        "log base b inequality",
        "free math calculator",
        "domain restriction log"
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
      component: 'AbsValueInequalitySolver',
      title: "Free Absolute Value Inequality Solver - Step by Step | Learn Math Class",
      description: "Free, step-by-step solver for absolute value inequalities. Splits into compound or union form, handles edge cases, returns interval notation.",
      name: "Absolute Value Inequality Solver",
      url: "/algebra/calculators/inequalities/absolute-value",
      h1: "Absolute Value Inequality Solver",
      keywords: [
        "free absolute value inequality solver",
        "|ax + b| < c",
        "compound inequality solver",
        "union inequality",
        "free math solver",
        "modulus inequality calculator"
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
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
        { "@type": "ListItem", "position": 2, "name": "Algebra", "item": "https://www.learnmathclass.com/algebra" },
        { "@type": "ListItem", "position": 3, "name": "Calculators", "item": "https://www.learnmathclass.com/algebra/calculators" },
        { "@type": "ListItem", "position": 4, "name": "Inequalities", "item": "https://www.learnmathclass.com/algebra/calculators/inequalities" },
        { "@type": "ListItem", "position": 5, "name": currentConfig.name, "item": `https://www.learnmathclass.com${currentConfig.url}` }
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
        {componentName === 'LinearInequalitySolver' && <LinearInequalitySolver />}
        {componentName === 'QuadraticInequalitySolver' && <QuadraticInequalitySolver />}
        {componentName === 'RationalInequalitySolver' && <RationalInequalitySolver />}
        {componentName === 'RadicalInequalitySolver' && <RadicalInequalitySolver />}
        {componentName === 'ExponentialInequalitySolver' && <ExponentialInequalitySolver />}
        {componentName === 'LogarithmicInequalitySolver' && <LogarithmicInequalitySolver />}
        {componentName === 'AbsValueInequalitySolver' && <AbsValueInequalitySolver />}
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