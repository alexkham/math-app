// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import PowerTable from '../../../../app/components/visualizations/algebra/powers/PowersTable'


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
//          name: "name"
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Table of Powers</h1>
//    <br/>
//    <PowerTable/>
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
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css'
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
//          name: "name"
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
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import PowerTable from '../../../../app/components/visualizations/algebra/powers/PowersTable'


export async function getStaticProps(){

  const keyWords = [
    'powers table',
    'interactive powers table',
    'exponents calculator',
    'exponents reference table',
    'integer powers calculator',
    'base and exponent tool',
    'powers of 2 table',
    'powers of 10 table',
    'exponential growth visualizer',
    'last digit patterns powers',
    'powers chart',
    'algebra powers tool',
    'visualize exponents',
    'exponentiation reference',
    'large number powers calculator'
  ]

  const sectionsContent = {
    obj1: {
      title: `What is a Power?`,
      content: `A power is a shorthand for repeated multiplication. The expression $b^n$ means multiplying the **base** $b$ by itself $n$ times — so $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$. The number $b$ is the base, and $n$ is the exponent (or power).

Powers compress long products into compact notation. Instead of writing $10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10$, you write $10^6$. The notation scales effortlessly: $10^{100}$ would take a page to write out as a product but fits in three characters as a power.

This tool builds a table of powers for any **base** from 2 to 10, letting you see the exact value, the multiplication that produces it, and how the values grow row by row. The default state — base 2, max power 10 — shows the classic doubling sequence that underlies binary numbers.

For full theory of exponents, exponent rules, and properties, see **exponents and powers**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Setting Base and Max Power`,
      content: `Two inputs control the table: **Base** (the number being multiplied) and **Max Power** (the highest exponent shown). The base accepts integers from 2 to 10. Max Power accepts integers from 0 upward, with caps that depend on the base.

Type a value in either input. The table regenerates instantly, showing every row from $b^0$ up to $b^{\\text{max}}$. The default state — base 2, max power 10 — produces the doubling sequence 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.

The **Reset All** button restores defaults. Invalid input (out of range, non-numeric, or empty) shows an inline error and outlines the input in red until corrected. The error message tells you exactly what went wrong: minimum base is 2, maximum base is 10, minimum power is 0, and the maximum power depends on which base is currently selected.

If you change the base from a small value to a larger one and your current max power exceeds the new cap, the tool automatically adjusts max power down to the new limit so the table stays valid.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Three Columns`,
      content: `Each row of the table represents one power and breaks it into three pieces.

The **Power** column shows the notation $b^n$. The base appears full size with the exponent as a superscript — exactly how you would write it on paper. The exponent counts down the rows from $b^0$ at the top to $b^{\\text{max}}$ at the bottom.

The **Expression** column spells out the multiplication: $b \\times b \\times b \\times \\dots$. For exponents up to 10, every factor is shown explicitly. For exponents above 10, the expression abbreviates to $b \\times b \\times \\dots \\times b\\ (n\\ \\text{times})$ so the row stays readable. The first row, with exponent 0, simply shows the value 1, since there is no multiplication to spell out.

The **Value** column gives the exact numerical result. Values use thousand separators for readability, and large numbers are computed with arbitrary-precision integer arithmetic — there are no rounding errors even at $b^{16}$.

Below the table, the pattern note reminds you of the row-to-row relationship: each row equals the previous row multiplied by the base.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Exploring Different Bases`,
      content: `Each base produces a distinctively shaped sequence. Switching bases is the fastest way to build intuition for how exponential growth depends on the base, not just the exponent.

**Base 2** doubles each row: 1, 2, 4, 8, 16, .... Powers of 2 underlie binary representation, file sizes (kilobyte, megabyte, gigabyte), and combinatorics — the number of subsets of an $n$-element set is exactly $2^n$.

**Base 10** produces place value: 1, 10, 100, 1{,}000, .... Each row adds a zero. The decimal number system is built directly on this progression, which is why scientific notation uses powers of 10.

**Base 3** through **base 9** fill in the gaps. Powers of 3 grow faster than powers of 2 but slower than 10. Powers of 9 reach into the billions by exponent 10: $9^{10} = 3{,}486{,}784{,}401$. Switch the base back and forth to compare growth rates side by side at the same maximum exponent.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Zero Power Rule`,
      content: `The first row of every table — regardless of base — shows $b^0 = 1$. This is not a quirk; it is a rule that keeps exponent arithmetic consistent.

The exponent law $b^m \\div b^n = b^{m-n}$ requires $b^0 = 1$ for any nonzero base. Setting $m = n$ gives $b^0$ on one side, while the same expression also equals any nonzero $b^n / b^n = 1$. Both must agree, forcing $b^0 = 1$.

The Expression column displays this row simply as the value **1** — there is no multiplication to spell out, since the rule says zero copies of the base produce the multiplicative identity. Every base from 2 to 10 obeys this rule, which is why every powers table opens the same way.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Pushing to Maximum Powers`,
      content: `For small bases (2 through 4), the table allows exponents up to 16. For larger bases (5 through 10), the maximum exponent is capped at 10. The cap exists because high powers of large bases produce numbers with too many digits to display readably in a table cell.

Hover over the **?** icon next to the Max Power input to see the rule spelled out. The tooltip explains the cap and reminds you that bases 2 through 4 give you the longer range.

At the maximum, base 2 reaches $2^{16} = 65{,}536$ — the value 64K, familiar from old computers and 16-bit integer ranges. Base 3 reaches $3^{16} = 43{,}046{,}721$. Base 4 reaches $4^{16} = 4{,}294{,}967{,}296$ — the same as $2^{32}$, the size of the 32-bit unsigned integer space. Even with the cap, bases 5 through 10 comfortably handle numbers in the billions and tens of billions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Spotting Last-Digit Patterns`,
      content: `Powers cycle through predictable last digits. The Value column makes the cycles visible at a glance — scan the rightmost digit of each row and the cycle reveals itself.

**Base 5**: every power except $5^0$ ends in 5. The pattern is constant: 1, 5, 25, 125, 625, 3{,}125, .... This makes mental arithmetic with powers of 5 unusually easy.

**Base 7**: last digits cycle through 7, 9, 3, 1 with period 4. So $7^1$ ends in 7, $7^2 = 49$ ends in 9, $7^3 = 343$ ends in 3, $7^4 = 2{,}401$ ends in 1, then $7^5$ ends in 7 again. The cycle repeats forever.

**Base 4** alternates between last digits 4 and 6. **Base 9** alternates between 9 and 1. **Base 6** stays at 6 once you pass $6^0$.

Every base from 2 to 9 has a finite last-digit cycle. Only base 10 breaks the pattern — every power $10^n$ for $n \\geq 1$ ends in 0. Switching bases and watching the rightmost column is one of the fastest ways to feel the structure of modular arithmetic.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why Powers Grow So Fast`,
      content: `Exponential growth is genuinely different from multiplication or repeated addition. Each row of the table multiplies — not adds — by the base. Compare $2^{10} = 1{,}024$ to $9^{10} = 3{,}486{,}784{,}401$: the same exponent, but the larger base produces a number more than three million times bigger.

The pattern note at the bottom of the table summarizes it: each row is **×base** the row above. After 10 rows, base 2 has multiplied by $2^{10} = 1{,}024$ — roughly a thousandfold. Base 10 has multiplied by $10^{10}$ — ten billion. Base 9 sits between them, but much closer to base 10 than to base 2.

This is why exponential growth shows up in population dynamics, compound interest, viral spread, and computer science complexity. A linear process gains a fixed amount per step; an exponential process multiplies by a fixed factor per step, and the gap between the two opens up rapidly.

For the formal definition and behavior of exponential functions, see **exponential function**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Related Concepts and Tools`,
      content: `**Exponents and Powers** — Theory of exponents, including negative powers, fractional exponents, and the laws of exponents.

**Exponential Function** — How $b^x$ behaves as a continuous function of $x$, including the special role of base $e$.

**Logarithms** — The inverse operation of exponentiation: if $b^n = v$, then $\\log_b v = n$. Use logarithms to find the exponent given the base and the value.

**Algebraic Identities Visualizers** — Geometric proofs of squared identities like $(a+b)^2$ and $(a-b)^2$, showing where powers of 2 appear in algebra.

**Algebra Visual Tools** — Index of all interactive tools for algebra topics including identity proofs and the powers table itself.`,
      before: ``,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = {
    obj1: {
      question: "What is a power in math?",
      answer: "A power is a number written as a base raised to an exponent, like 2^4. The base is the number being multiplied, and the exponent tells you how many times to multiply it by itself. So 2^4 means 2 times 2 times 2 times 2, which equals 16. Powers are a compact way to write repeated multiplication."
    },
    obj2: {
      question: "How do you read the powers table?",
      answer: "Each row shows one power broken into three columns. The Power column shows the notation in superscript form. The Expression column spells out the multiplication factor by factor. The Value column gives the exact result with thousand separators. Every row equals the previous row multiplied by the base."
    },
    obj3: {
      question: "Why does any base to the power of 0 equal 1?",
      answer: "The rule b^0 = 1 keeps exponent arithmetic consistent for any nonzero base. The exponent law says b^m divided by b^n equals b^(m-n). Setting m equal to n gives b^0 on one side and 1 on the other, so the two must match. The first row of every powers table reflects this rule, regardless of which base is selected."
    },
    obj4: {
      question: "Why are higher powers capped for bigger bases?",
      answer: "Bases 2 through 4 allow powers up to 16, but bases 5 through 10 are capped at power 10. The cap is purely about display: powers of 9 or 10 at exponent 16 would have 16 to 17 digits, too long to fit cleanly in a table cell. Values are still computed exactly with arbitrary-precision integers, but the visible range is restricted."
    },
    obj5: {
      question: "What patterns can you find in the powers table?",
      answer: "The most striking patterns are last-digit cycles. Powers of 5 always end in 5. Powers of 7 cycle through 7, 9, 3, 1 and repeat every four steps. Powers of 4 alternate between 4 and 6. Each base from 2 to 9 has a finite cycle in its last digit, while powers of 10 always end in 0 once the exponent is at least 1."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Powers Table - Interactive Exponents Reference",
      "description": "Interactive powers table for bases 2 through 10 and exponents up to 16. Compare exponential growth, spot last-digit patterns, and reference exact values.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/powers-table",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive table of powers for any integer base from 2 to 10",
        "Adjustable maximum exponent up to 16 for bases 2 through 4",
        "Exact values computed with arbitrary-precision integer arithmetic",
        "Three-column layout showing power notation, expanded expression, and numerical value",
        "Expression column spelled out factor by factor for exponents up to 10",
        "Built-in tooltip explaining the maximum-power cap rule",
        "Inline input validation with error messages and Reset All button",
        "Thousand-separator formatting for readable large-number values"
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
      "educationalLevel": "Middle School, High School, College",
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Powers Table",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/powers-table"
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

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Powers Table: Interactive Exponents Tool | Learn Math Class",
        description: "Interactive powers table for bases 2 through 10 and exponents up to 16. Compare exponential growth, spot last-digit patterns, and reference exact values.",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/powers-table",
        name: "Powers Table - Interactive Exponents Reference"
      },
    }
  }
}

export default function PowersTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
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
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Table of Powers</h1>
   <br/>
   <PowerTable/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}