// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // import React from 'react'
// // import '../pages.css'
// // import Head from 'next/head'
// // import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'

// // export async function getStaticProps(){

// //   const keyWords=['','','','','']

// //   // •

  
// // // <hr style="border-width:1px;"></hr>

// // // <hr style="color:blue;" />

// // // <hr style="border-color:#3498db; border-width:1px;" />



// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// //         //     {processContent(sectionsContent.normal.notation)}
// //         // </div>,


// // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // //     {processContent(sectionsContent.normal.parameters)}
// // // </div>,
        
// // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // //                   {processContent(sectionsContent.obj4.content)}
// // //                   </div>,


// // //  <div key={'dist'} style={{
// // //                     textAlign: 'center',
// // //                     transform: 'scale(0.98)',
// // //                     transformOrigin: 'center',
// // //                     marginTop:'50px',
// // //                     marginLeft:'-150px'
// // //                   }} dangerouslySetInnerHTML={{ 
// // //                     __html:   sectionContent.distributions.svg,
// // //                   }} />

// //     const sectionsContent={

// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }


// //   const introContent = {
// //   id: "intro",
// //   title: "",
// //   content: ``
// // }




// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Contingency Tables | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/probability/visual-tools/contingency-tables",
// //          name: "name"
// //       },
        
// //        }
// //     }
// //    }

// // export default function ContingencyTablesVisualToolsPage({seoData,sectionsContent , introContent}) {

    
// //   const genericSections=[
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
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
    
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
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
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
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Contingency Tables</h1>
// //    <br/>
// //    <br/>
// //    <SectionTableOfContents sections={genericSections}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         />
// //    <br/>
// //    <br/>
// //    <Sections sections={genericSections}/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
// import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'
// import ConditionalProbabilityTable2x3 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2x3'
// import ConditionalProbabilityTable2x4 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2x4'
// import ConditionalProbabilityTable3x3 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable3x3'
// import explanations2x3 from '@/app/components/probability/conditional-probability-demo/2x3explanations'
// import explanations2x4 from '@/app/components/probability/conditional-probability-demo/2x4explanations'
// import explanations3x3 from '@/app/components/probability/conditional-probability-demo/3x3explanations'


// export async function getStaticProps(){

//   const keyWords=['contingency tables', 'conditional probability', 'joint probability', 'marginal probability', 'probability tables']

//   const sectionsContent={

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
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
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
//     id: "intro",
//     title: "",
//     content: ``
//   }

//   const tableComponents = [
//     {
//       id: 1,
//       name: '2×2 Table',
//       key: 'table2x2',
//       slug: '2x2',
//       component: ConditionalProbabilityTable2
//     },
//     {
//       id: 2,
//       name: '2×3 Table',
//       key: 'table2x3',
//       slug: '2x3',
//       component: ConditionalProbabilityTable2x3
//     },
//     {
//       id: 3,
//       name: '2×4 Table',
//       key: 'table2x4',
//       slug: '2x4',
//       component: ConditionalProbabilityTable2x4
//     },
//     {
//       id: 4,
//       name: '3×3 Table',
//       key: 'table3x3',
//       slug: '3x3',
//       component: ConditionalProbabilityTable3x3
//     }
//   ]

//   const tableExplanations = {
//     'table2x3': explanations2x3,
//     'table2x4': explanations2x4,
//     'table3x3': explanations3x3
//   }

//   return {
//     props:{
//       sectionsContent,
//       introContent,
//       tableComponents,
//       tableExplanations,
//       seoData: {
//         title: "Contingency Tables | Learn Math Class",
//         description: "Interactive contingency tables for understanding joint, marginal, and conditional probabilities. Explore 2×2, 2×3, 2×4, and 3×3 probability tables with detailed explanations.",
//         keywords: keyWords.join(", "),
//         url: "/probability/visual-tools/contingency-tables",
//         name: "Contingency Tables"
//       },
//     }
//   }
// }

// export default function ContingencyTablesVisualToolsPage({seoData, sectionsContent, introContent, tableComponents, tableExplanations}) {

//   const genericSections = Object.keys(sectionsContent).map((key, index) => ({
//     id: `${index + 1}`,
//     title: sectionsContent[key].title,
//     link: sectionsContent[key].link,
//     content: [sectionsContent[key].content]
//   }))

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
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               "name": seoData.name,
//               "description": seoData.description,
//               "keywords": seoData.keywords,
//               "url": `https://www.learnmathclass.com${seoData.url}`,
//               "dateModified": new Date().toISOString(),
//               "inLanguage": "en-US",
//               "mainEntity": {
//                 "@type": "Article",
//                 "name": seoData.name,
//                 "dateModified": new Date().toISOString(),
//                 "author": {
//                   "@type": "Organization",
//                   "name": "Learn Math Class"
//                 }
//               }
//             })
//           }}
//         />
//       </Head>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       /> 
//       <Breadcrumb/>
//       <br/>
//       <br/>
//       <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Contingency Tables</h1>
//       <br/>
//       <br/>
//       <GenericMultiComponentFrame
//         components={tableComponents}
//         initialActive={1}
//         explanations={tableExplanations}
//         buttonMinWidth="140px"
//         primaryColor="#007bff"
//         paramName="table"
//         defaultSlug="2x2"
//       />
//       <br/>
//       <br/>
//       {/* <SectionTableOfContents sections={genericSections}/> */}
//       <br/>
//       <br/>
//       <br/>
//       {/* <IntroSection 
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor='#f9fafb'
//         textColor="#06357a"
//       /> */}
//       <br/>
//       <br/>
//       {/* <Sections sections={genericSections}/> */}
//       <br/>
//       <br/>
//       <br/>
//     </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'
import ConditionalProbabilityTable2x3 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2x3'
import ConditionalProbabilityTable2x4 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2x4'
import ConditionalProbabilityTable3x3 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable3x3'
import explanations2x3 from '@/app/components/probability/conditional-probability-demo/2x3explanations'
import explanations2x4 from '@/app/components/probability/conditional-probability-demo/2x4explanations'
import explanations3x3 from '@/app/components/probability/conditional-probability-demo/3x3explanations'


export async function getStaticProps(){

  const keyWords=['contingency tables', 'conditional probability', 'joint probability', 'marginal probability', 'probability tables']

  const sectionsContent={

    obj1:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props:{
      sectionsContent,
      introContent,
      seoData: {
        title: "Contingency Tables | Learn Math Class",
        description: "Interactive contingency tables for understanding joint, marginal, and conditional probabilities. Explore 2×2, 2×3, 2×4, and 3×3 probability tables with detailed explanations.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/contingency-tables",
        name: "Contingency Tables"
      },
    }
  }
}

export default function ContingencyTablesVisualToolsPage({seoData, sectionsContent, introContent}) {

  const tableComponents = [
    {
      id: 1,
      name: '2×2 Table',
      key: 'table2x2',
      slug: '2x2',
      component: ConditionalProbabilityTable2
    },
    {
      id: 2,
      name: '2×3 Table',
      key: 'table2x3',
      slug: '2x3',
      component: ConditionalProbabilityTable2x3
    },
    {
      id: 3,
      name: '2×4 Table',
      key: 'table2x4',
      slug: '2x4',
      component: ConditionalProbabilityTable2x4
    },
    {
      id: 4,
      name: '3×3 Table',
      key: 'table3x3',
      slug: '3x3',
      component: ConditionalProbabilityTable3x3
    }
  ]

  const tableExplanations = {
    'table2x3': explanations2x3,
    'table2x4': explanations2x4,
    'table3x3': explanations3x3
  }

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": seoData.name,
              "description": seoData.description,
              "keywords": seoData.keywords,
              "url": `https://www.learnmathclass.com${seoData.url}`,
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "mainEntity": {
                "@type": "Article",
                "name": seoData.name,
                "dateModified": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "Learn Math Class"
                }
              }
            })
          }}
        />
      </Head>
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'-60px',marginBottom:'-20px'}}>Contingency Tables</h1>
      <br/>
      <br/>
      <div style={{transform:'scale(0.95)'}}>
      <GenericMultiComponentFrame
        components={tableComponents}
        initialActive={1}
        explanations={tableExplanations}
        buttonMinWidth="140px"
        primaryColor="#007bff"
        paramName="table"
        defaultSlug="2x2"
      />
      </div>
      <br/>
      <br/>
      {/* <SectionTableOfContents sections={genericSections}/> */}
      <br/>
      <br/>
      <br/>
      {/* <IntroSection 
        id={introContent.id}
        title={introContent.title}
        content={introContent.content}
        backgroundColor='#f9fafb'
        textColor="#06357a"
      /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <Sections sections={genericSections}/> */}
      <br/>
      <br/>
      <br/>
    </>
  )
}