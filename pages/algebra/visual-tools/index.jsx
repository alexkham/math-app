// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import React from 'react'
// // import '../../../pages/pages.css'
// // import Head from 'next/head'


// // export async function getStaticProps(){

// //   const keyWords=['','','','','']

// //   // •

// // //   \u2022 First item
// // // \u2022 Second item

  
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
// //         title: "Title | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/url",
// //          name: "Algebra Visual Tools"
// //       },
        
// //        }
// //     }
// //    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Page Title</h1>
// //    <br/>
// //    <br/>
// //    <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    />
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
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'
// import QuickNav from '@/app/components/cards/QuickNav'
// import ScrollToTop from '@/app/components/scroll-up-button/ScrollToTop'
// import ToolsPageHeader from '@/app/components/cards/ToolsPageHeader'


// export async function getStaticProps(){

//   const keyWords = [
//     'algebra visualization tools',
//     'interactive algebra tools',
//     'algebra visualizer',
//     'visual algebra learning',
//     'algebraic identities visualizer',
//     'algebra geometric proofs',
//     'powers table',
//     'visual algebraic proofs',
//     'algebra interactive learning',
//     'algebra teaching tools',
//     'visual algebra calculator',
//     'algebra concept visualization',
//     'animated algebra proofs',
//     'algebra dissection proofs',
//     'visual mathematics tools'
//   ]

//   const cardsData = [
//     {
//       title: "Algebraic Identities Visualizers",
//       description: "Interactive geometric proofs of fundamental algebraic identities. Watch (a+b)², (a-b)², (a+b+c)², and a²-b² come alive through animated dissection — see exactly why each identity holds, step by step.",
//       backgroundColor: "#2c5d99",
//       textColor: "#ffffff",
//       ratio: 2,
//       image: '/images/algebra-identities.jpg',
//       href: "/algebra/visual-tools/identities"
//     },
//     {
//       title: "Powers Table",
//       description: "Searchable reference table of powers from 1¹ to 10¹⁰. Find any power instantly, compare growth rates across bases, and explore the fundamental patterns of exponentiation in a clean side-by-side layout.",
//       backgroundColor: "#2c5d99",
//       textColor: "#ffffff",
//       ratio: 2,
//       image: '/images/powers-table.jpg',
//       href: "/algebra/visual-tools/powers-table"
//     },
//   ]

//   const faqQuestions = {
//     obj1: {
//       question: "What algebra visualization tools are available?",
//       answer: "The collection currently includes interactive visualizers for algebraic identities — (a+b)², (a-b)², (a+b+c)², and a²-b² — each demonstrated through animated geometric dissection, plus a searchable powers reference table covering bases 1 through 10."
//     },
//     obj2: {
//       question: "How do algebra visualization tools help learning?",
//       answer: "Visual tools turn abstract algebraic identities into concrete geometric pictures. Instead of just memorizing formulas, learners see why each identity is true. Areas, lengths, and rearrangements replace symbol manipulation, building durable intuition."
//     },
//     obj3: {
//       question: "Are the geometric proofs rigorous?",
//       answer: "Yes. Each animated proof is a valid dissection argument: total area is preserved, pieces are accounted for, and the final equation follows from comparing areas before and after rearrangement. The visuals match the algebra exactly."
//     },
//     obj4: {
//       question: "Are these algebra tools free to use?",
//       answer: "Yes, all algebra visualization tools are completely free with no registration required. They run directly in your browser with interactive controls, animation playback, and step-by-step explanations."
//     },
//     obj5: {
//       question: "Can I use these tools for teaching algebra?",
//       answer: "Absolutely. The animated identities are particularly useful for classroom demonstrations, where the geometric proof can be paused, rewound, and discussed step by step. Students can also explore the tools independently to build understanding at their own pace."
//     }
//   }

//   const schemas = {
//     collectionPage: {
//       "@context": "https://schema.org",
//       "@type": "CollectionPage",
//       "name": "Algebra Visual Tools",
//       "description": "Interactive visualization tools for learning algebra including animated identity proofs, powers table, and geometric dissection demonstrations.",
//       "url": "https://www.learnmathclass.com/algebra/visual-tools",
//       "inLanguage": "en-US",
//       "about": {
//         "@type": "Thing",
//         "name": "Algebra Visualization"
//       },
//       "keywords": keyWords.join(", "),
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "hasPart": [
//         {
//           "@type": "WebPage",
//           "name": "Algebraic Identities Visualizers",
//           "url": "https://www.learnmathclass.com/algebra/visual-tools/identities",
//           "description": "Animated geometric proofs of fundamental algebraic identities"
//         },
//         {
//           "@type": "WebPage",
//           "name": "Powers Table",
//           "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
//           "description": "Searchable reference table of powers from 1 to 10"
//         }
//       ]
//     },

//     itemList: {
//       "@context": "https://schema.org",
//       "@type": "ItemList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "item": {
//             "@type": "SoftwareApplication",
//             "name": "Algebraic Identities Visualizers",
//             "url": "https://www.learnmathclass.com/algebra/visual-tools/identities",
//             "applicationCategory": "EducationalApplication",
//             "description": "Animated geometric dissection proofs of algebraic identities"
//           }
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "item": {
//             "@type": "SoftwareApplication",
//             "name": "Powers Table",
//             "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
//             "applicationCategory": "EducationalApplication",
//             "description": "Searchable reference table of integer powers"
//           }
//         }
//       ]
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
//           "name": "Algebra",
//           "item": "https://www.learnmathclass.com/algebra"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Algebra Visual Tools",
//           "item": "https://www.learnmathclass.com/algebra/visual-tools"
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

//   const sectionsContent = {
//     obj1: { title: ``, content: ``, before: ``, after: `` },
//     obj2: { title: ``, content: ``, before: ``, after: `` },
//     obj3: { title: ``, content: ``, before: ``, after: `` },
//     obj4: { title: ``, content: ``, before: ``, after: `` },
//     obj5: { title: ``, content: ``, before: ``, after: `` }
//   }

//   const introContent = {
//     id: "intro",
//     title: "",
//     content: ``
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       cardsData,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Algebra Visual Tools - Interactive Visualizers | Learn Math Class",
//         description: "Interactive algebra visualization tools including animated identity proofs and powers reference. Learn algebra through geometric dissection and visual exploration.",
//         keywords: keyWords.join(", "),
//         url: "/algebra/visual-tools",
//         name: "Algebra Visual Tools"
//       }
//     }
//   }
// }

// export default function AlgebraVisualToolsPage({seoData, sectionsContent, introContent, cardsData, faqQuestions, schemas}) {

//   const genericSections = [
//     { id: '1', title: 'section1', link: '', content: '' },
//     { id: '2', title: 'section2', link: '', content: '' },
//     { id: '',  title: '',         link: '', content: '' }
//   ]

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
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.collectionPage)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.itemList)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.breadcrumb)
//           }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(schemas.faq)
//           }}
//         />
//       </Head>
//       {/* <GenericNavbar/> */}
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
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Algebra Visual Tools</h1>
//       <QuickNav items={cardsData} dropdownLabel="All Tools"
      
//       accentColor="#2c5d99"
//   accentColorHover="#1e4170"
//       />
//       <br/>
//       <ScrollToTop
//         top={'80px'}
//         center={true}
//       />
//       <br/>
//       <ToolsPageHeader
//        accentColor="#2c5d99"
//   accentColorSecondary="#3a72b8"
//         items={cardsData}
//         icon="🔍"
//         intro={{
//           title: "Explore Interactive Algebra Tools",
//           description: "Master algebraic concepts through hands-on geometric visualization...",
//           tip: "Click any tool below to see its description..."
//         }}
//         onFilteredItemsChange={(filtered) => setDisplayedItems(filtered)}
//       />
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
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       <ModernCardsGroup items={cardsData}/>
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
//       {/* <ScrollUpButton/> */}
//     </>
//   )
// }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'


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
//          name: "Algebra Visual Tools"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Page Title</h1>
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
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'
import QuickNav from '@/app/components/cards/QuickNav'
import ScrollToTop from '@/app/components/scroll-up-button/ScrollToTop'
import ToolsPageHeader from '@/app/components/cards/ToolsPageHeader'


export async function getStaticProps(){

  const keyWords = [
    'algebra visualization tools',
    'interactive algebra tools',
    'algebra visualizer',
    'visual algebra learning',
    'algebraic identities visualizer',
    'algebra geometric proofs',
    'powers table',
    'visual algebraic proofs',
    'algebra interactive learning',
    'algebra teaching tools',
    'visual algebra calculator',
    'algebra concept visualization',
    'animated algebra proofs',
    'algebra dissection proofs',
    'visual mathematics tools'
  ]

  const cardsData = [
    {
      title: "Algebraic Identities Visualizers",
      description: "Interactive geometric proofs of fundamental algebraic identities. Watch (a+b)², (a-b)², (a+b+c)², and a²-b² come alive through animated dissection — see exactly why each identity holds, step by step.",
      backgroundColor: "#2c5d99",
      textColor: "#ffffff",
      ratio: 2,
      image: '/images/algebra-identities.jpg',
      href: "/algebra/visual-tools/identities"
    },
    {
      title: "Powers Table",
      description: "Searchable reference table of powers from 1¹ to 10¹⁰. Find any power instantly, compare growth rates across bases, and explore the fundamental patterns of exponentiation in a clean side-by-side layout.",
      backgroundColor: "#2c5d99",
      textColor: "#ffffff",
      ratio: 2,
      image: '/images/powers-table.jpg',
      href: "/algebra/visual-tools/powers-table"
    },
  ]

  const faqQuestions = {
    obj1: {
      question: "What algebra visualization tools are available?",
      answer: "The collection currently includes interactive visualizers for algebraic identities — (a+b)², (a-b)², (a+b+c)², and a²-b² — each demonstrated through animated geometric dissection, plus a searchable powers reference table covering bases 1 through 10."
    },
    obj2: {
      question: "How do algebra visualization tools help learning?",
      answer: "Visual tools turn abstract algebraic identities into concrete geometric pictures. Instead of just memorizing formulas, learners see why each identity is true. Areas, lengths, and rearrangements replace symbol manipulation, building durable intuition."
    },
    obj3: {
      question: "Are the geometric proofs rigorous?",
      answer: "Yes. Each animated proof is a valid dissection argument: total area is preserved, pieces are accounted for, and the final equation follows from comparing areas before and after rearrangement. The visuals match the algebra exactly."
    },
    obj4: {
      question: "Are these algebra tools free to use?",
      answer: "Yes, all algebra visualization tools are completely free with no registration required. They run directly in your browser with interactive controls, animation playback, and step-by-step explanations."
    },
    obj5: {
      question: "Can I use these tools for teaching algebra?",
      answer: "Absolutely. The animated identities are particularly useful for classroom demonstrations, where the geometric proof can be paused, rewound, and discussed step by step. Students can also explore the tools independently to build understanding at their own pace."
    }
  }

  const seoData = {
    title: "Algebra Visual Tools - Interactive Visualizers | Learn Math Class",
    description: "Interactive algebra visualization tools including animated identity proofs and powers reference. Learn algebra through geometric dissection and visual exploration.",
    keywords: keyWords.join(", "),
    url: "/algebra/visual-tools",
    name: "Algebra Visual Tools"
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Algebra Visual Tools",
      "description": "Interactive visualization tools for learning algebra including animated identity proofs, powers table, and geometric dissection demonstrations.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Algebra Visualization"
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
          "name": "Algebraic Identities Visualizers",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/identities",
          "description": "Animated geometric proofs of fundamental algebraic identities"
        },
        {
          "@type": "WebPage",
          "name": "Powers Table",
          "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
          "description": "Searchable reference table of powers from 1 to 10"
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
            "@type": "SoftwareApplication",
            "name": "Algebraic Identities Visualizers",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/identities",
            "applicationCategory": "EducationalApplication",
            "description": "Animated geometric dissection proofs of algebraic identities"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Powers Table",
            "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
            "applicationCategory": "EducationalApplication",
            "description": "Searchable reference table of integer powers"
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Algebra Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
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

  const pageArticle = `Algebra often feels like a world of symbols pushed around by rules. These visualization tools turn that abstraction into geometry — every identity becomes a picture, every formula becomes a thing you can see, dissect, and rearrange.

The Algebraic Identities Visualizers animate four of the most fundamental identities — (a+b)², (a-b)², (a+b+c)², and a²-b² — through geometric dissection. A square is decomposed, slid apart, and recombined while you watch. Total area is preserved throughout; only its arrangement changes. That conservation of area is the proof. By the end of each animation, you have seen exactly why the identity holds, not just memorized that it does.

(a+b)² appears as a square of side a+b broken into a², 2ab, and b². The mixed term 2ab shows up as two identical rectangles, making the doubling immediately obvious. (a-b)² rearranges differently, starting from a larger square and subtracting strips. The structure of each identity dictates the shape of its proof.

The a²-b² identity is especially elegant. A square of side b is removed from a square of side a, and the L-shaped region that remains is cut and reassembled into a rectangle with sides (a+b) and (a-b). The factorization a² - b² = (a+b)(a-b) is no longer a trick to memorize — it is a piece of paper, cut and rearranged.

The Powers Table complements the visualizers with a clean, searchable reference for every integer power from 1¹ to 10¹⁰. Compare growth rates side by side, spot patterns in trailing digits, and look up specific values without reaching for a calculator.

Each tool runs directly in your browser with no installation required. Use them for self-study, classroom demonstrations, or any moment when an algebraic identity needs a picture to make it stick.`

  const sectionsContent = {
    obj1: { title: ``, content: ``, before: ``, after: `` },
    obj2: { title: ``, content: ``, before: ``, after: `` },
    obj3: { title: ``, content: ``, before: ``, after: `` },
    obj4: { title: ``, content: ``, before: ``, after: `` },
    obj5: { title: ``, content: ``, before: ``, after: `` }
  }

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      introContent,
      cardsData,
      faqQuestions,
      schemas,
      pageArticle,
      seoData
    }
  }
}

export default function AlgebraVisualToolsPage({seoData, sectionsContent, introContent, cardsData, faqQuestions, schemas, pageArticle}) {

  const genericSections = [
    { id: '1', title: 'section1', link: '', content: '' },
    { id: '2', title: 'section2', link: '', content: '' },
    { id: '',  title: '',         link: '', content: '' }
  ]

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
      {/* <GenericNavbar/> */}
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Algebra Visual Tools</h1>
      <QuickNav items={cardsData} dropdownLabel="All Tools"
      
      accentColor="#2c5d99"
  accentColorHover="#1e4170"
      />
      <br/>
      <ScrollToTop
        top={'80px'}
        center={true}
      />
      <br/>
      <ToolsPageHeader
       accentColor="#2c5d99"
  accentColorSecondary="#3a72b8"
        items={cardsData}
        icon="🔍"
        intro={{
          title: "Explore Interactive Algebra Tools",
          description: "Master algebraic concepts through hands-on geometric visualization and animated dissection proofs.",
          tip: "Click any tool below to see its description and start exploring."
        }}
        article={pageArticle}
        onFilteredItemsChange={(filtered) => setDisplayedItems(filtered)}
      />
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
      <br/>
      <br/>
      <br/>
      <br/>

      <ModernCardsGroup items={cardsData}/>
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
      {/* <Sections sections={genericSections}/> */}
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}