// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // // import React from 'react'
// // // import '../pages.css'
// // // import Head from 'next/head'
// // // import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'

// // // export async function getStaticProps(){

// // //   const keyWords=['','','','','']

// // //   // •

  
// // // // <hr style="border-width:1px;"></hr>

// // // // <hr style="color:blue;" />

// // // // <hr style="border-color:#3498db; border-width:1px;" />



// // // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// // //         //     {processContent(sectionsContent.normal.notation)}
// // //         // </div>,


// // // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // // //     {processContent(sectionsContent.normal.parameters)}
// // // // </div>,
        
// // // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // // //                   {processContent(sectionsContent.obj4.content)}
// // // //                   </div>,


// // // //  <div key={'dist'} style={{
// // // //                     textAlign: 'center',
// // // //                     transform: 'scale(0.98)',
// // // //                     transformOrigin: 'center',
// // // //                     marginTop:'50px',
// // // //                     marginLeft:'-150px'
// // // //                   }} dangerouslySetInnerHTML={{ 
// // // //                     __html:   sectionContent.distributions.svg,
// // // //                   }} />

// // //     const sectionsContent={

// // //     obj1:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
  
// // //     },
// // //     obj2:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
  
// // //     obj3:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj4:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj5:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj6:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj7:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj8:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj9:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj10:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj11:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj12:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj13:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
// // //       link:'',
  
// // //     },
// // //     obj14:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
// // //       link:'',
  
// // //     },


// // //     obj15:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     }
  
// // //   }


// // //   const introContent = {
// // //   id: "intro",
// // //   title: "",
// // //   content: ``
// // // }




// // //    return {
// // //       props:{
// // //          sectionsContent,
// // //          introContent,
// // //           seoData: {
// // //         title: "Contingency Tables | Learn Math Class",
// // //         description: "Metadescription",
// // //         keywords: keyWords.join(", "),
// // //         url: "/probability/visual-tools/contingency-tables",
// // //          name: "name"
// // //       },
        
// // //        }
// // //     }
// // //    }

// // // export default function ContingencyTablesVisualToolsPage({seoData,sectionsContent , introContent}) {

    
// // //   const genericSections=[
// // //     {
// // //         id:'1',
// // //         title:sectionsContent.obj1.title,
// // //         link:sectionsContent.obj1.link,
// // //         content:[
// // //           sectionsContent.obj1.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'2',
// // //         title:sectionsContent.obj2.title,
// // //         link:sectionsContent.obj2.link,
// // //         content:[
// // //           sectionsContent.obj2.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'3',
// // //         title:sectionsContent.obj3.title,
// // //         link:sectionsContent.obj3.link,
// // //         content:[
// // //           sectionsContent.obj3.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'4',
// // //         title:sectionsContent.obj4.title,
// // //         link:sectionsContent.obj4.link,
// // //         content:[
// // //           sectionsContent.obj4.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'5',
// // //         title:sectionsContent.obj5.title,
// // //         link:sectionsContent.obj5.link,
// // //         content:[
// // //           sectionsContent.obj5.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'6',
// // //         title:sectionsContent.obj6.title,
// // //         link:sectionsContent.obj6.link,
// // //         content:[
// // //           sectionsContent.obj6.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'7',
// // //         title:sectionsContent.obj7.title,
// // //         link:sectionsContent.obj7.link,
// // //         content:[
// // //           sectionsContent.obj7.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'8',
// // //         title:sectionsContent.obj8.title,
// // //         link:sectionsContent.obj8.link,
// // //         content:[
// // //           sectionsContent.obj8.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'9',
// // //         title:sectionsContent.obj9.title,
// // //         link:sectionsContent.obj9.link,
// // //         content:[
// // //           sectionsContent.obj9.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'10',
// // //         title:sectionsContent.obj10.title,
// // //         link:sectionsContent.obj10.link,
// // //         content:[
// // //           sectionsContent.obj10.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'11',
// // //         title:sectionsContent.obj11.title,
// // //         link:sectionsContent.obj11.link,
// // //         content:[
// // //           sectionsContent.obj11.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'12',
// // //         title:sectionsContent.obj12.title,
// // //         link:sectionsContent.obj12.link,
// // //         content:[
// // //           sectionsContent.obj12.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'13',
// // //         title:sectionsContent.obj13.title,
// // //         link:sectionsContent.obj13.link,
// // //         content:[
// // //           sectionsContent.obj13.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'14',
// // //         title:sectionsContent.obj14.title,
// // //         link:sectionsContent.obj14.link,
// // //         content:[
// // //           sectionsContent.obj14.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'15',
// // //         title:sectionsContent.obj15.title,
// // //         link:sectionsContent.obj15.link,
// // //         content:[
// // //           sectionsContent.obj15.content,
// // //         ]
// // //     },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
    
// // // ]

// // //   return (
// // //    <>
// // //    <Head>
// // //   <title>{seoData.title}</title>
// // //   <meta name="description" content={seoData.description} />
// // //   <meta name="keywords" content={seoData.keywords} />
// // //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// // //   <meta property="og:title" content={seoData.title} />
// // //   <meta property="og:description" content={seoData.description} />
// // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //   <meta property="og:type" content="article" />
// // //   <meta property="og:site_name" content="Learn Math Class" />
  
// // //   <meta name="twitter:card" content="summary" />
// // //   <meta name="twitter:title" content={seoData.title} />
// // //   <meta name="twitter:description" content={seoData.description} />
  
// // //   <meta name="robots" content="index, follow" />
  
// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify({
// // //         "@context": "https://schema.org",
// // //         "@type": "WebPage",
// // //         "name": seoData.name,
// // //         "description": seoData.description,
// // //         "keywords": seoData.keywords,
// // //         "url": `https://www.learnmathclass.com${seoData.url}`,
// // //         "dateModified": new Date().toISOString(),
// // //         "inLanguage": "en-US",
// // //         "mainEntity": {
// // //           "@type": "Article",
// // //           "name": seoData.name,
// // //           "dateModified": new Date().toISOString(),
// // //           "author": {
// // //             "@type": "Organization",
// // //             "name": "Learn Math Class"
// // //           }
// // //         }
// // //       })
// // //     }}
// // //   />
// // // </Head>
// // //    {/* <GenericNavbar/> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <OperaSidebar 
// // //            side='right'
// // //            // topOffset='65px' 
// // //            sidebarWidth='45px'
// // //            panelWidth='200px'
// // //            iconColor='white'
// // //            panelBackgroundColor='#f2f2f2'
// // //          /> 
// // //    <Breadcrumb/>
// // //    <br/>
// // //    <br/>
// // //    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Contingency Tables</h1>
// // //    <br/>
// // //    <br/>
// // //    <SectionTableOfContents sections={genericSections}/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <IntroSection 
// // //           id={introContent.id}
// // //           title={introContent.title}
// // //           content={introContent.content}
// // //            backgroundColor='#f9fafb'
// // //           //  "#f2f2f2"
// // //           textColor="#06357a"
// // //         />
// // //    <br/>
// // //    <br/>
// // //    <Sections sections={genericSections}/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    {/* <ScrollUpButton/> */}
// // //    </>
// // //   )
// // // }



// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// // import React from 'react'
// // import '../../../../pages/pages.css'
// // import Head from 'next/head'
// // import GenericMultiComponentFrame from '@/app/components/GenericMulticomponentFrame'
// // import ConditionalProbabilityTable2 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2'
// // import ConditionalProbabilityTable2x3 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2x3'
// // import ConditionalProbabilityTable2x4 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable2x4'
// // import ConditionalProbabilityTable3x3 from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable3x3'
// // import explanations2x3 from '@/app/components/probability/conditional-probability-demo/2x3explanations'
// // import explanations2x4 from '@/app/components/probability/conditional-probability-demo/2x4explanations'
// // import explanations3x3 from '@/app/components/probability/conditional-probability-demo/3x3explanations'


// // export async function getStaticProps(){

// //   const keyWords=['contingency tables', 'conditional probability', 'joint probability', 'marginal probability', 'probability tables']

// //   const sectionsContent={

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
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
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
// //     id: "intro",
// //     title: "",
// //     content: ``
// //   }

// //   const tableComponents = [
// //     {
// //       id: 1,
// //       name: '2×2 Table',
// //       key: 'table2x2',
// //       slug: '2x2',
// //       component: ConditionalProbabilityTable2
// //     },
// //     {
// //       id: 2,
// //       name: '2×3 Table',
// //       key: 'table2x3',
// //       slug: '2x3',
// //       component: ConditionalProbabilityTable2x3
// //     },
// //     {
// //       id: 3,
// //       name: '2×4 Table',
// //       key: 'table2x4',
// //       slug: '2x4',
// //       component: ConditionalProbabilityTable2x4
// //     },
// //     {
// //       id: 4,
// //       name: '3×3 Table',
// //       key: 'table3x3',
// //       slug: '3x3',
// //       component: ConditionalProbabilityTable3x3
// //     }
// //   ]

// //   const tableExplanations = {
// //     'table2x3': explanations2x3,
// //     'table2x4': explanations2x4,
// //     'table3x3': explanations3x3
// //   }

// //   return {
// //     props:{
// //       sectionsContent,
// //       introContent,
// //       tableComponents,
// //       tableExplanations,
// //       seoData: {
// //         title: "Contingency Tables | Learn Math Class",
// //         description: "Interactive contingency tables for understanding joint, marginal, and conditional probabilities. Explore 2×2, 2×3, 2×4, and 3×3 probability tables with detailed explanations.",
// //         keywords: keyWords.join(", "),
// //         url: "/probability/visual-tools/contingency-tables",
// //         name: "Contingency Tables"
// //       },
// //     }
// //   }
// // }

// // export default function ContingencyTablesVisualToolsPage({seoData, sectionsContent, introContent, tableComponents, tableExplanations}) {

// //   const genericSections = Object.keys(sectionsContent).map((key, index) => ({
// //     id: `${index + 1}`,
// //     title: sectionsContent[key].title,
// //     link: sectionsContent[key].link,
// //     content: [sectionsContent[key].content]
// //   }))

// //   return (
// //     <>
// //       <Head>
// //         <title>{seoData.title}</title>
// //         <meta name="description" content={seoData.description} />
// //         <meta name="keywords" content={seoData.keywords} />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
// //         <meta property="og:title" content={seoData.title} />
// //         <meta property="og:description" content={seoData.description} />
// //         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //         <meta property="og:type" content="article" />
// //         <meta property="og:site_name" content="Learn Math Class" />
        
// //         <meta name="twitter:card" content="summary" />
// //         <meta name="twitter:title" content={seoData.title} />
// //         <meta name="twitter:description" content={seoData.description} />
        
// //         <meta name="robots" content="index, follow" />
        
// //         <script 
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{ 
// //             __html: JSON.stringify({
// //               "@context": "https://schema.org",
// //               "@type": "WebPage",
// //               "name": seoData.name,
// //               "description": seoData.description,
// //               "keywords": seoData.keywords,
// //               "url": `https://www.learnmathclass.com${seoData.url}`,
// //               "dateModified": new Date().toISOString(),
// //               "inLanguage": "en-US",
// //               "mainEntity": {
// //                 "@type": "Article",
// //                 "name": seoData.name,
// //                 "dateModified": new Date().toISOString(),
// //                 "author": {
// //                   "@type": "Organization",
// //                   "name": "Learn Math Class"
// //                 }
// //               }
// //             })
// //           }}
// //         />
// //       </Head>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <OperaSidebar 
// //         side='right'
// //         sidebarWidth='45px'
// //         panelWidth='200px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       /> 
// //       <Breadcrumb/>
// //       <br/>
// //       <br/>
// //       <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Contingency Tables</h1>
// //       <br/>
// //       <br/>
// //       <GenericMultiComponentFrame
// //         components={tableComponents}
// //         initialActive={1}
// //         explanations={tableExplanations}
// //         buttonMinWidth="140px"
// //         primaryColor="#007bff"
// //         paramName="table"
// //         defaultSlug="2x2"
// //       />
// //       <br/>
// //       <br/>
// //       {/* <SectionTableOfContents sections={genericSections}/> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //       {/* <IntroSection 
// //         id={introContent.id}
// //         title={introContent.title}
// //         content={introContent.content}
// //         backgroundColor='#f9fafb'
// //         textColor="#06357a"
// //       /> */}
// //       <br/>
// //       <br/>
// //       {/* <Sections sections={genericSections}/> */}
// //       <br/>
// //       <br/>
// //       <br/>
// //     </>
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

//   return {
//     props:{
//       sectionsContent,
//       introContent,
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

// export default function ContingencyTablesVisualToolsPage({seoData, sectionsContent, introContent}) {

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
//       <h1 className='title' style={{marginTop:'-60px',marginBottom:'-20px'}}>Contingency Tables</h1>
//       <br/>
//       <br/>
//       <div style={{transform:'scale(0.95)'}}>
//       <GenericMultiComponentFrame
//         components={tableComponents}
//         initialActive={1}
//         explanations={tableExplanations}
//         buttonMinWidth="140px"
//         primaryColor="#007bff"
//         paramName="table"
//         defaultSlug="2x2"
//       />
//       </div>
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
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
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

  const keyWords = [
    'contingency table',
    'contingency table calculator',
    'joint probability table',
    'marginal probability',
    'conditional probability table',
    'P(A|B) calculator',
    '2x2 probability table',
    'two-way probability table',
    'probability cross tabulation',
    'interactive contingency table',
    'joint distribution table',
    'conditional probability visualization',
    'Bayes theorem table',
    'probability matrix',
    'marginal distribution'
  ]

//   const sectionsContent = {

//     obj1: {
//       title: `Getting Started with Contingency Tables`,
//       content: `This interactive tool provides four different contingency table sizes to explore probability relationships between two categorical variables. Use the tabs at the top to switch between 2×2, 2×3, 2×4, and 3×3 configurations.

// Each table displays three types of probability information simultaneously. The main grid shows **joint probabilities** in the interior cells, representing P(A ∩ B) for each combination of outcomes. The row and column totals display **marginal probabilities**, showing P(A) and P(B) individually. The surrounding panels show **conditional probability** distributions calculated from the joint and marginal values.

// The layout follows a consistent pattern across all table sizes. On the left side, you see the joint probability table with clickable cells. On the right side, conditional probability panels show how probability distributes when you condition on different events. Click any cell or conditional row to highlight the mathematical relationship between joint and conditional probabilities.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj2: {
//       title: `Using the 2×2 Interactive Table`,
//       content: `The 2×2 table is the only configuration with adjustable parameters, making it ideal for experimenting with probability relationships. Three sliders control the entire probability structure:

// • **P(A)** - Sets the marginal probability of event A occurring. Moving this slider changes how probability mass distributes between row A and row Aᶜ.

// • **P(B|A)** - Sets the conditional probability of B given A has occurred. This determines how the A row splits between columns B and Bᶜ.

// • **P(B|Aᶜ)** - Sets the conditional probability of B given A has not occurred. This determines how the Aᶜ row splits between columns.

// As you adjust any slider, all six joint probabilities, four marginal probabilities, and eight conditional probabilities recalculate instantly. Try setting P(B|A) equal to P(B|Aᶜ) and observe what happens to the conditional distributions - this demonstrates **independence** between events A and B.

// `,
//       before: ``,
//       after: `
//       `,
//       link: '',
//     },

//     obj3: {
//       title: `Reading the Joint Probability Table`,
//       content: `The central table displays joint probabilities P(A ∩ B) in each interior cell. These values represent the probability that both events occur together. Each cell shows two pieces of information: the numerical probability value and the notation identifying which intersection it represents.

// Click any cell to highlight it with a distinct color. The highlighting helps you track that specific joint probability as it appears in conditional calculations on the right side. Each cell has a unique color that carries through to the conditional panels, making it easy to trace mathematical relationships visually.

// The joint probabilities follow fundamental constraints. All interior cells must sum to exactly 1.0000, representing the complete sample space. No cell can be negative, and no cell can exceed 1. In the 2×2 table, you can verify these constraints as you adjust the sliders - the tool maintains valid probability distributions automatically.

// Understanding joint probability cells is essential because they serve as numerators in all conditional probability calculations. The formula $P(A|B) = P(A \\cap B) / P(B)$ uses the joint probability from the appropriate cell divided by the relevant marginal total.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj4: {
//       title: `Understanding Marginal Probabilities`,
//       content: `Marginal probabilities appear in the "Total" row and column of each table. These values represent the probability of a single event regardless of the other variable's outcome.

// Row totals show P(A), P(Aᶜ), or P(Aᵢ) for multi-row tables. Each row total equals the sum of all joint probabilities in that row. For example, P(A) = P(A ∩ B₁) + P(A ∩ B₂) + ... for all B categories.

// Column totals show P(B), P(Bᶜ), or P(Bⱼ) for multi-column tables. Each column total equals the sum of all joint probabilities in that column. For example, P(B₁) = P(A₁ ∩ B₁) + P(A₂ ∩ B₁) + ... for all A categories.

// The marginal probabilities serve as denominators in conditional probability formulas. When you click a conditional probability row in the right panels, the tool highlights both the numerator (joint cell) and denominator (marginal total) so you can see exactly which values produce the conditional probability.

// Row marginals must sum to 1, and column marginals must sum to 1. This reflects the requirement that the outcomes for each variable form a complete partition of possibilities.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj5: {
//       title: `Exploring Conditional Probability Panels`,
//       content: `The right side of each table displays conditional probability distributions organized by conditioning event. Each panel answers the question: "Given that we know one event occurred, how does probability distribute across the other variable?"

// For the 2×2 table, four panels show:
// • **Conditional on A** - P(B|A) and P(Bᶜ|A)
// • **Conditional on Aᶜ** - P(B|Aᶜ) and P(Bᶜ|Aᶜ)
// • **Conditional on B** - P(A|B) and P(Aᶜ|B)
// • **Conditional on Bᶜ** - P(A|Bᶜ) and P(Aᶜ|Bᶜ)

// Click any row in a conditional panel to see three things highlighted simultaneously: the joint probability cell (numerator), the marginal probability (denominator), and the formula breakdown showing the exact calculation.

// For larger tables (2×3, 2×4, 3×3), expand the **Row Explanations** accordion in each panel to see what each conditional probability represents. The accordions help manage the increased complexity without cluttering the display.

// Each conditional distribution sums to exactly 1.0000, verified in the "Total" row of each panel. This reflects the requirement that conditional probabilities form valid probability distributions.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj6: {
//       title: `Comparing Different Table Sizes`,
//       content: `Each table size serves different analytical purposes. Choose the configuration that matches your problem structure:

// **2×2 Table** - Use for two binary events (yes/no, success/failure, positive/negative). The interactive sliders make this ideal for learning how parameters affect probability relationships. Medical testing scenarios (disease/no disease, test positive/negative) fit this format perfectly.

// **2×3 Table** - Use when one variable is binary and the other has three categories. Examples include treatment group (control/experimental) versus outcome (improved/unchanged/worsened), or gender versus education level (high school/college/graduate).

// **2×4 Table** - Use when one variable is binary and the other has four categories. Examples include employed/unemployed versus income quartile, or product defective/non-defective versus manufacturing shift.

// **3×3 Table** - Use when both variables have three categories. This shows the full complexity of multi-category relationships. Examples include satisfaction level (low/medium/high) versus age group (young/middle/senior), or product quality versus supplier.

// Larger tables demonstrate that the same mathematical principles apply regardless of size - joint cells sum to marginals, and conditional probabilities equal joint divided by marginal.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj7: {
//       title: `What is a Contingency Table?`,
//       content: `A **contingency table** (also called a cross-tabulation or two-way table) organizes the joint distribution of two categorical variables into a grid format. Each cell represents the probability or frequency of a specific combination of outcomes from both variables.

// In probability contexts, contingency tables display three interconnected quantities: joint probabilities in interior cells, marginal probabilities in row and column totals, and conditional probabilities derivable from these values. The table structure makes relationships between these probability types visually apparent and computationally straightforward.

// Contingency tables originated in statistical analysis for studying associations between categorical variables. In probability theory, they provide a complete specification of the joint distribution for discrete variables with finite outcome spaces. Any question about probabilities involving the two variables can be answered directly from the table.

// For comprehensive coverage of probability table concepts and applications, see the **joint probability** and **conditional probability** theory pages.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj8: {
//       title: `Joint, Marginal, and Conditional Probabilities`,
//       content: `Three probability types appear in every contingency table, related by fundamental formulas:

// **Joint probability** P(A ∩ B) measures the likelihood that both events A and B occur together. These values fill the interior cells of the table. Joint probabilities are symmetric: P(A ∩ B) = P(B ∩ A).

// **Marginal probability** P(A) or P(B) measures the likelihood of a single event regardless of the other variable. Marginals are computed by summing joint probabilities: P(A) = Σ P(A ∩ Bⱼ) over all B categories.

// **Conditional probability** P(A|B) measures the likelihood of A given that B has occurred. The definition formula connects all three types:

// $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

// This formula shows why clicking a conditional row highlights both a joint cell (numerator) and a marginal total (denominator). The visual highlighting traces exactly how conditional probabilities derive from the table's fundamental values.

// For detailed theory on these probability types, see **conditional probability** and **joint probability**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj9: {
//       title: `Connection to Bayes' Theorem`,
//       content: `Contingency tables provide a visual demonstration of **Bayes' theorem** in action. The theorem relates conditional probabilities in opposite directions:

// $$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

// In the table, this relationship becomes visible through the highlighting system. The same joint probability cell P(A ∩ B) appears as a numerator in two different conditional calculations: P(A|B) conditions on B, while P(B|A) conditions on A.

// Try this experiment in the 2×2 table: click on P(A|B) in the "Conditional on B" panel, then click P(B|A) in the "Conditional on A" panel. Both highlight the same green joint cell P(A ∩ B), but with different marginal denominators. This demonstrates how Bayes' theorem "flips" the conditioning by using different denominators.

// The table also shows the law of total probability visually. Each marginal P(B) equals the sum of joint probabilities in that column, which equals P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ). This sum appears in Bayes' theorem's denominator.

// For complete coverage of Bayesian reasoning, see the **Bayes theorem** theory page and calculator.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj10: {
//       title: `Related Tools and Concepts`,
//       content: `Contingency tables connect to many probability concepts and visualization tools available on this site:

// **Theoretical Foundations:**

// • **Conditional Probability** - Complete theory of P(A|B), independence, and conditioning rules

// • **Joint Probability** - Detailed coverage of joint distributions for multiple variables

// • **Bayes Theorem** - The formula connecting P(A|B) to P(B|A) with derivations and applications

// • **Independence** - When P(A|B) = P(A), meaning conditioning provides no information

// **Related Visualizations:**

// • **Venn Diagrams** - Visualize conditional probability through overlapping regions

// • **Tree Diagrams** - Show sequential conditioning as branching paths

// • **Waffle Charts** - Grid-based visualization of proportions and conditional filtering

// **Calculators:**

// • **Conditional Probability Calculator** - Compute P(A|B) from inputs

// • **Bayes Theorem Calculator** - Apply Bayes' formula with prior and likelihood inputs

// • **Joint Probability Calculator** - Work with joint distributions and marginalization`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//   }

const sectionsContent = {

  obj1: {
    title: `Getting Started with Contingency Tables`,
    content: `This interactive tool provides four different contingency table sizes to explore probability relationships between two categorical variables. Use the tabs at the top to switch between 2×2, 2×3, 2×4, and 3×3 configurations.

Each table displays three types of probability information simultaneously. The main grid shows [joint probabilities](!/probability/joint-probability) in the interior cells, representing P(A ∩ B) for each combination of outcomes. The row and column totals display marginal probabilities, showing P(A) and P(B) individually. The surrounding panels show [conditional probability](!/probability/conditional-probability) distributions calculated from the joint and marginal values.

The layout follows a consistent pattern across all table sizes. On the left side, you see the joint probability table with clickable cells. On the right side, conditional probability panels show how probability distributes when you condition on different events. Click any cell or conditional row to highlight the mathematical relationship between joint and conditional probabilities.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Using the 2×2 Interactive Table`,
    content: `The 2×2 table is the only configuration with adjustable parameters, making it ideal for experimenting with probability relationships. Three sliders control the entire probability structure:

• P(A) sets the marginal probability of event A occurring. Moving this slider changes how probability mass distributes between row A and row Aᶜ.

• P(B|A) sets the conditional probability of B given A has occurred. This determines how the A row splits between columns B and Bᶜ.

• P(B|Aᶜ) sets the conditional probability of B given A has not occurred. This determines how the Aᶜ row splits between columns.

As you adjust any slider, all six joint probabilities, four marginal probabilities, and eight conditional probabilities recalculate instantly. Try setting P(B|A) equal to P(B|Aᶜ) and observe what happens to the conditional distributions—this demonstrates [independence](!/probability/independence) between events A and B.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Reading the Joint Probability Table`,
    content: `The central table displays joint probabilities P(A ∩ B) in each interior cell. These values represent the probability that both events occur together. Each cell shows two pieces of information: the numerical probability value and the notation identifying which intersection it represents.

Click any cell to highlight it with a distinct color. The highlighting helps you track that specific joint probability as it appears in conditional calculations on the right side. Each cell has a unique color that carries through to the conditional panels, making it easy to trace mathematical relationships visually.

The joint probabilities follow fundamental constraints from the [probability axioms](!/probability/axioms). All interior cells must sum to exactly 1.0000, representing the complete [sample space](!/probability/sample-space). No cell can be negative, and no cell can exceed 1. In the 2×2 table, you can verify these constraints as you adjust the sliders—the tool maintains valid probability distributions automatically.

Understanding joint probability cells is essential because they serve as numerators in all conditional probability calculations. The formula $P(A|B) = P(A \\cap B) / P(B)$ uses the joint probability from the appropriate cell divided by the relevant marginal total.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Understanding Marginal Probabilities`,
    content: `Marginal probabilities appear in the "Total" row and column of each table. These values represent the probability of a single event regardless of the other variable's outcome.

Row totals show P(A), P(Aᶜ), or P(Aᵢ) for multi-row tables. Each row total equals the sum of all joint probabilities in that row. For example, P(A) = P(A ∩ B₁) + P(A ∩ B₂) + ... for all B categories.

Column totals show P(B), P(Bᶜ), or P(Bⱼ) for multi-column tables. Each column total equals the sum of all joint probabilities in that column. For example, P(B₁) = P(A₁ ∩ B₁) + P(A₂ ∩ B₁) + ... for all A categories.

The marginal probabilities serve as denominators in conditional probability formulas. When you click a conditional probability row in the right panels, the tool highlights both the numerator (joint cell) and denominator (marginal total) so you can see exactly which values produce the conditional probability.

Row marginals must sum to 1, and column marginals must sum to 1. This reflects the requirement that the outcomes for each variable form a complete partition of possibilities.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Exploring Conditional Probability Panels`,
    content: `The right side of each table displays conditional probability distributions organized by conditioning event. Each panel answers the question: "Given that we know one event occurred, how does probability distribute across the other variable?"

For the 2×2 table, four panels show:

• Conditional on A shows P(B|A) and P(Bᶜ|A)

• Conditional on Aᶜ shows P(B|Aᶜ) and P(Bᶜ|Aᶜ)

• Conditional on B shows P(A|B) and P(Aᶜ|B)

• Conditional on Bᶜ shows P(A|Bᶜ) and P(Aᶜ|Bᶜ)

Click any row in a conditional panel to see three things highlighted simultaneously: the joint probability cell (numerator), the marginal probability (denominator), and the formula breakdown showing the exact calculation.

For larger tables (2×3, 2×4, 3×3), expand the Row Explanations accordion in each panel to see what each conditional probability represents. The accordions help manage the increased complexity without cluttering the display.

Each conditional distribution sums to exactly 1.0000, verified in the "Total" row of each panel. This reflects the requirement that conditional probabilities form valid probability distributions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Comparing Different Table Sizes`,
    content: `Each table size serves different analytical purposes. Choose the configuration that matches your problem structure:

The 2×2 table works for two binary events (yes/no, success/failure, positive/negative). The interactive sliders make this ideal for learning how parameters affect probability relationships. Medical testing scenarios (disease/no disease, test positive/negative) fit this format perfectly.

The 2×3 table applies when one variable is binary and the other has three categories. Examples include treatment group (control/experimental) versus outcome (improved/unchanged/worsened), or gender versus education level (high school/college/graduate).

The 2×4 table handles one binary variable and one with four categories. Examples include employed/unemployed versus income quartile, or product defective/non-defective versus manufacturing shift.

The 3×3 table covers situations where both variables have three categories. This shows the full complexity of multi-category relationships. Examples include satisfaction level (low/medium/high) versus age group (young/middle/senior), or product quality versus supplier.

Larger tables demonstrate that the same mathematical principles apply regardless of size—joint cells sum to marginals, and conditional probabilities equal joint divided by marginal.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `What is a Contingency Table?`,
    content: `A contingency table (also called a cross-tabulation or two-way table) organizes the joint distribution of two categorical variables into a grid format. Each cell represents the probability or frequency of a specific combination of outcomes from both variables.

In probability contexts, contingency tables display three interconnected quantities: joint probabilities in interior cells, marginal probabilities in row and column totals, and conditional probabilities derivable from these values. The table structure makes relationships between these probability types visually apparent and computationally straightforward.

Contingency tables originated in statistical analysis for studying associations between categorical variables. In probability theory, they provide a complete specification of the joint distribution for discrete variables with finite outcome spaces. Any question about probabilities involving the two variables can be answered directly from the table.

For comprehensive coverage of probability table concepts and applications, see the [joint probability](!/probability/joint-probability) and [conditional probability](!/probability/conditional-probability) theory pages.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Joint, Marginal, and Conditional Probabilities`,
    content: `Three probability types appear in every contingency table, related by fundamental formulas:

Joint probability P(A ∩ B) measures the likelihood that both events A and B occur together. These values fill the interior cells of the table. Joint probabilities are symmetric: P(A ∩ B) = P(B ∩ A).

Marginal probability P(A) or P(B) measures the likelihood of a single event regardless of the other variable. Marginals are computed by summing joint probabilities: P(A) = Σ P(A ∩ Bⱼ) over all B categories.

Conditional probability P(A|B) measures the likelihood of A given that B has occurred. The definition formula connects all three types:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$

This formula shows why clicking a conditional row highlights both a joint cell (numerator) and a marginal total (denominator). The visual highlighting traces exactly how conditional probabilities derive from the table's fundamental values.

For detailed theory on these probability types, see [conditional probability](!/probability/conditional-probability) and [joint probability](!/probability/joint-probability).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Connection to Bayes' Theorem`,
    content: `Contingency tables provide a visual demonstration of [Bayes' theorem](!/probability/bayes-theorem) in action. The theorem relates conditional probabilities in opposite directions:

$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

In the table, this relationship becomes visible through the highlighting system. The same joint probability cell P(A ∩ B) appears as a numerator in two different conditional calculations: P(A|B) conditions on B, while P(B|A) conditions on A.

Try this experiment in the 2×2 table: click on P(A|B) in the "Conditional on B" panel, then click P(B|A) in the "Conditional on A" panel. Both highlight the same green joint cell P(A ∩ B), but with different marginal denominators. This demonstrates how Bayes' theorem "flips" the conditioning by using different denominators.

The table also shows the [law of total probability](!/probability/total-probability) visually. Each marginal P(B) equals the sum of joint probabilities in that column, which equals P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ). This sum appears in Bayes' theorem's denominator.

For complete coverage of Bayesian reasoning, see the [Bayes theorem](!/probability/bayes-theorem) theory page and [Bayes calculator](!/probability/calculators/bayes-calculator).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Related Tools and Concepts`,
    content: `Contingency tables connect to many probability concepts and visualization tools available on this site.

## Theoretical Foundations

• [Conditional Probability](!/probability/conditional-probability) covers complete theory of P(A|B), independence, and conditioning rules

• [Joint Probability](!/probability/joint-probability) provides detailed coverage of joint distributions for multiple variables

• [Bayes Theorem](!/probability/bayes-theorem) explains the formula connecting P(A|B) to P(B|A) with derivations and applications

• [Independence](!/probability/independence) describes when P(A|B) = P(A), meaning conditioning provides no information

## Related Visualizations

• [Venn Diagrams](!/probability/visual-tools/venn-diagrams) visualize conditional probability through overlapping regions

• [Tree Diagrams](!/probability/tree-diagrams) show sequential conditioning as branching paths

## Calculators

• [Conditional Probability Calculator](!/probability/calculators/conditional-probability) computes P(A|B) from inputs

• [Bayes Theorem Calculator](!/probability/calculators/bayes-calculator) applies Bayes' formula with prior and likelihood inputs

• [Joint Probability Calculator](!/probability/calculators/joint-probability) works with joint distributions and marginalization`,
    before: ``,
    after: ``,
    link: '',
  },

}


  const faqQuestions = {
    obj1: {
      question: "What is a contingency table in probability?",
      answer: "A contingency table is a grid that displays the joint probability distribution of two categorical variables. Interior cells show joint probabilities P(A ∩ B) for each combination of outcomes, row and column totals show marginal probabilities P(A) and P(B), and conditional probabilities can be calculated by dividing joint probabilities by the appropriate marginal."
    },
    obj2: {
      question: "What is the difference between joint, marginal, and conditional probability?",
      answer: "Joint probability P(A ∩ B) is the probability both events occur together. Marginal probability P(A) is the probability of one event regardless of the other, found by summing joint probabilities across a row or column. Conditional probability P(A|B) is the probability of A given B occurred, calculated as P(A ∩ B) divided by P(B)."
    },
    obj3: {
      question: "How do you calculate conditional probability from a contingency table?",
      answer: "To find P(A|B), locate the joint probability cell P(A ∩ B) and divide by the marginal probability P(B) from the column total. The formula is P(A|B) = P(A ∩ B) / P(B). The interactive tool highlights both the numerator cell and denominator total when you click any conditional probability row."
    },
    obj4: {
      question: "When should you use a 2×2 table versus a larger table?",
      answer: "Use a 2×2 table when both variables are binary (two outcomes each), such as disease/healthy and test positive/negative. Use larger tables when variables have more categories: 2×3 or 2×4 for one binary and one multi-category variable, or 3×3 when both variables have three categories."
    },
    obj5: {
      question: "How do contingency tables relate to Bayes' theorem?",
      answer: "Contingency tables demonstrate Bayes' theorem visually. The same joint probability P(A ∩ B) appears in calculations for both P(A|B) and P(B|A), but with different marginal denominators. Bayes' theorem P(A|B) = P(B|A)·P(A)/P(B) describes exactly how these conditional probabilities relate through the table's values."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Contingency Tables Visualizer",
      "description": "Interactive contingency tables for understanding joint, marginal, and conditional probabilities. Explore 2×2, 2×3, 2×4, and 3×3 probability tables with visual highlighting and formula breakdowns.",
      "url": "https://www.learnmathclass.com/probability/visual-tools/contingency-tables",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Four table sizes: 2×2, 2×3, 2×4, and 3×3 configurations",
        "Interactive sliders for 2×2 table parameter adjustment",
        "Clickable cells with color-coded highlighting",
        "Conditional probability panels with formula breakdowns",
        "Visual demonstration of Bayes theorem relationships",
        "Accordion explanations for complex table configurations",
        "Real-time probability recalculation"
      ],
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
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/probability/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contingency Tables",
          "item": "https://www.learnmathclass.com/probability/visual-tools/contingency-tables"
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
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Contingency Tables - Interactive Probability Tool | Learn Math Class",
        description: "Explore joint, marginal, and conditional probabilities with interactive contingency tables. Visualize 2×2, 2×3, 2×4, and 3×3 probability tables with highlighting.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/contingency-tables",
        name: "Interactive Contingency Tables Visualizer"
      },
    }
  }
}

export default function ContingencyTablesVisualToolsPage({seoData, sectionsContent, faqQuestions, schemas}) {

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

//   const genericSections = Object.keys(sectionsContent).map((key, index) => ({
//     id: `${index + 1}`,
//     title: sectionsContent[key].title,
//     link: sectionsContent[key].link,
//     content: [sectionsContent[key].content]
//   }))

const genericSections = [
  {
    id: '1',
    title: 'Getting Started with Contingency Tables',
    link: '',
    content: sectionsContent.obj1.content
  },
  {
    id: '2',
    title: 'Using the 2×2 Interactive Table',
    link: '',
    content: sectionsContent.obj2.content
  },
  {
    id: '3',
    title: 'Reading the Joint Probability Table',
    link: '',
    content: sectionsContent.obj3.content
  },
  {
    id: '4',
    title: 'Understanding Marginal Probabilities',
    link: '',
    content: sectionsContent.obj4.content
  },
  {
    id: '5',
    title: 'Exploring Conditional Probability Panels',
    link: '',
    content: sectionsContent.obj5.content
  },
  {
    id: '6',
    title: 'Comparing Different Table Sizes',
    link: '',
    content: sectionsContent.obj6.content
  },
  {
    id: '7',
    title: 'What is a Contingency Table?',
    link: '',
    content: sectionsContent.obj7.content
  },
  {
    id: '8',
    title: 'Joint, Marginal, and Conditional Probabilities',
    link: '',
    content: sectionsContent.obj8.content
  },
  {
    id: '9',
    title: 'Connection to Bayes\' Theorem',
    link: '',
    content: sectionsContent.obj9.content
  },
  {
    id: '10',
    title: 'Related Tools and Concepts',
    link: '',
    content: sectionsContent.obj10.content
  }
]

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
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
    </>
  )
}