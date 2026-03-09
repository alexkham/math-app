// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
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
// //         title: "Arithmetic Visual Tools| Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/arithmetic/visual-tools",
// //          name: "name"
// //       },
        
// //        }
// //     }
// //    }

// // export default function ArithmeticVisualToolsPage({seoData,sectionsContent , introContent}) {

    
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
// //    <h1 className='title' style={{marginTop:'-30px',marginBottom:'0px'}}>Arithmetic Visual Tools</h1>
// //    <br/>
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
// //    <br/>
// //    {/* <Sections sections={genericSections}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
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
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'
// import QuickNav from '@/app/components/cards/QuickNav'
// import ScrollToTop from '@/app/components/scroll-up-button/ScrollToTop'
// import ToolsPageHeader from '@/app/components/cards/ToolsPageHeader'


// export async function getStaticProps(){

//   const keyWords = [
//     'arithmetic visualization tools',
//     'interactive arithmetic tools',
//     'arithmetic visualizer',
//     'visual arithmetic learning',
//     'divisibility tools',
//     'divisibility table visualizer',
//     'divisibility tree visualizer',
//     'interactive divisibility tools',
//     'arithmetic teaching tools',
//     'visual math tools',
//     'number theory visualization',
//     'divisibility rules visual',
//     'arithmetic interactive learning',
//     'math concept visualization',
//     'elementary arithmetic tools'
//   ]

//   const cardsData = [
//     {
//       title: "Complex Number Visual Explorer",
//       description: "Explore divisibility patterns through an interactive table that highlights multiples, common factors, and divisibility relationships. Adjust the range and select divisors to see how numbers relate through divisibility with color-coded visual feedback.",
//       backgroundColor: "#4F46E5",
//       textColor: "#ffffff",
//       ratio: 7,
//       image: '',
//       href: "/complex-numbers/visual-tools/complex-explorer"
//     },
//     // {
//     //   title: "Divisibility Tree Visualizer",
//     //   description: "Break down numbers into their prime factors with an interactive tree diagram. Watch step-by-step how composite numbers decompose through repeated division, revealing the fundamental building blocks of any integer with a dynamic branching visualization.",
//     //   backgroundColor: "#4F46E5",
//     //   textColor: "#ffffff",
//     //   ratio: 7,
//     //   image: '',
//     //   href: "/arithmetic/visual-tools/divisibility-tree"
//     // },
//     //   {
//     //   title: "Divisibility Tiles Visualizer",
//     //   description: "Explore divisibility by grouping tiles into equal sets. Enter any number from 1 to 100, choose a divisor, and watch tiles organize into complete groups with remainders highlighted. See instantly whether numbers divide evenly with step-by-step visual explanations.",
//     //   backgroundColor: "#4F46E5",
//     //   textColor: "#ffffff",
//     //   ratio: 7,
//     //   image: '',
//     //   href: "/arithmetic/visual-tools/divisibility-tiles"
//     // }
//   ]

 


//   const sectionsContent = {
//     obj1: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//     },
//     obj2: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//     },
//     obj3: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//     },
//     obj4: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//     },
//     obj5: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//     }
//   }

//   const introContent = {
//     id: "intro",
//     title: "",
//     content: ``
//   }

//   const pageArticle=`Arithmetic forms the foundation of all mathematical thinking, and understanding divisibility is one of its most essential skills. These interactive visualization tools transform abstract number relationships into concrete, explorable experiences.

// The Divisibility Table Visualizer presents numbers in a grid format, highlighting multiples and common factors with color coding. Select any divisor and watch patterns emerge across the table — a powerful way to recognize divisibility rules intuitively rather than memorizing them.

// The Divisibility Tree Visualizer takes a different approach, breaking down individual numbers into their prime factors through animated branching diagrams. Enter any composite number and observe step-by-step how it decomposes through repeated division until only primes remain.

// The Divisibility Tiles Visualizer offers a hands-on grouping experience. Numbers from 1 to 100 can be divided into equal sets, with remainders clearly highlighted. This concrete representation helps learners grasp why some divisions result in whole numbers while others leave remainders.

// Each tool runs directly in your browser with no downloads or registration required. Use them for self-study, classroom demonstrations, or homework support.`

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       cardsData,
//       // faqQuestions,
//       // schemas,
//       pageArticle,
//       seoData: {
//         title: "Arithmetic Visual Tools - Interactive Visualizers | Learn Math Class",
//         description: "Interactive arithmetic visualization tools including divisibility tables, divisibility trees, and number theory explorers with real-time visual feedback.",
//         keywords: keyWords.join(", "),
//         url: "/complex-numbers/visual-tools",
//         name: "Arithmetic Visual Tools"
//       }
//     }
//   }
// }

// export default function ArithmeticVisualToolsPage({seoData, sectionsContent, 
//   introContent, cardsData,  pageArticle}) {

//   const genericSections = [
//     {
//       id: '1',
//       title: 'section1',
//       link: '',
//       content: ''
//     },
//     {
//       id: '2',
//       title: 'section2',
//       link: '',
//       content: ''
//     },
//     {
//       id: '',
//       title: '',
//       link: '',
//       content: ''
//     }
//   ]

//   return (
//     <>
//       {/* <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//       </Head> */}
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
//       <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>Complex Numbers Visual Tools</h1>
//       <QuickNav items={cardsData} dropdownLabel="All Tools" />
//       <br/>
//       <ScrollToTop
//         top={'80px'}
//         center={true}
//       />
//       <br/>
//       <ToolsPageHeader 
//         items={cardsData}
//         icon="🔧"
//         intro={{
//           title: "Explore Interactive Arithmetic Tools",
//           description: "Master concepts through hands-on visualization...",
//           tip: "Click any tool below to see its description..."
//         }}
//         onFilteredItemsChange={(filtered) => setDisplayedItems(filtered)}
//         article={pageArticle}
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


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import ModernCardsGroup from '@/app/components/cards/ModernCardsGroup'
import QuickNav from '@/app/components/cards/QuickNav'
import ScrollToTop from '@/app/components/scroll-up-button/ScrollToTop'
import ToolsPageHeader from '@/app/components/cards/ToolsPageHeader'


export async function getStaticProps(){

  const keyWords = [
    'complex number visualization',
    'complex plane interactive',
    'complex number explorer',
    'argand diagram tool',
    'complex plane visualizer',
    'imaginary number visualization',
    'complex number modulus calculator',
    'complex conjugate visualizer',
    'interactive complex plane',
    'complex number graph',
    'real and imaginary parts',
    'complex number quadrants',
    'visual complex numbers',
    'complex number learning tool',
    'complex plane drag interactive'
  ]

  const cardsData = [
    {
      title: "Complex Number Explorer",
      description: "Visualize complex numbers on an interactive Argand plane. Drag points or enter coordinates to see real parts, imaginary parts, modulus, and conjugates. Watch the right triangle form as you explore different quadrants with real-time calculations and explanations.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '',
      href: "/complex-numbers/visual-tools/complex-explorer"
    }
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a complex number?",
      answer: "A complex number has the form z = a + bi, where a is the real part, b is the imaginary part, and i is the imaginary unit (√-1). Complex numbers extend real numbers to solve equations like x² + 1 = 0 and appear throughout mathematics, physics, and engineering."
    },
    obj2: {
      question: "What visualization tools are available for complex numbers?",
      answer: "The Complex Number Explorer lets you visualize any complex number on an interactive Argand plane. Drag points or type coordinates to see real parts, imaginary parts, modulus calculations, conjugates, and quadrant positions with step-by-step explanations."
    },
    obj3: {
      question: "What is the complex plane (Argand diagram)?",
      answer: "The complex plane represents complex numbers as points in 2D space. The horizontal axis shows real parts and the vertical axis shows imaginary parts. A complex number z = a + bi corresponds to the point (a, b), making geometric relationships visible."
    },
    obj4: {
      question: "How is the modulus of a complex number calculated?",
      answer: "The modulus |z| measures the distance from the origin to the point z = a + bi. It's calculated using the Pythagorean theorem: |z| = √(a² + b²). The visualization shows this as the hypotenuse of a right triangle with legs a and b."
    }
  }

  const seoData = {
    title: "Complex Numbers Visual Tools - Interactive Visualizers | Learn Math Class",
    description: "Interactive complex number visualization tools. Explore the Argand plane, see modulus calculations, conjugates, and quadrant positions with drag-and-drop interaction.",
    keywords: keyWords.join(", "),
    url: "/complex-numbers/visual-tools",
    name: "Complex Numbers Visual Tools"
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Complex Numbers Visualization"
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
          "name": "Complex Number Explorer",
          "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-explorer",
          "description": "Interactive Argand plane for visualizing complex numbers, modulus, and conjugates"
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
            "name": "Complex Number Explorer",
            "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/complex-explorer",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive tool for exploring complex numbers on the Argand plane"
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
          "name": "Complex Numbers",
          "item": "https://www.learnmathclass.com/complex-numbers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": `https://www.learnmathclass.com${seoData.url}`
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

  const pageArticle = `Complex numbers extend the real number line into a two-dimensional plane, opening up powerful ways to solve problems in mathematics, physics, and engineering. These interactive visualization tools transform abstract algebraic concepts into concrete, explorable geometric relationships.

The Complex Number Explorer presents the Argand plane — a coordinate system where the horizontal axis represents real parts and the vertical axis represents imaginary parts. Drag any point across the plane or type exact coordinates to see how complex numbers behave in different quadrants.

As you move points, watch the right triangle form connecting the origin to your chosen complex number. The horizontal leg shows the real part (a), the vertical leg shows the imaginary part (b), and the hypotenuse reveals the modulus |z| = √(a² + b²). This geometric interpretation makes the Pythagorean relationship immediately visible.

The conjugate appears as a reflection across the real axis. For any z = a + bi, its conjugate z̄ = a − bi mirrors the point below the horizontal axis. The tool highlights this relationship, showing how conjugates share the same real part but have opposite imaginary parts.

Special cases receive dedicated explanations: purely real numbers sit directly on the horizontal axis, purely imaginary numbers align with the vertical axis, and the origin represents zero — the only complex number with modulus zero.

Each tool runs directly in your browser with no downloads required. Use them for self-study, classroom demonstrations, or building intuition for complex analysis.`

  const sectionsContent = {
    obj1: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
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
      cardsData,
      faqQuestions,
      schemas,
      pageArticle,
      seoData
    }
  }
}

export default function ComplexNumbersVisualToolsPage({
  seoData,
  sectionsContent,
  introContent,
  cardsData,
  faqQuestions,
  schemas,
  pageArticle
}) {

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
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>Complex Numbers Visual Tools</h1>
      <QuickNav items={cardsData} dropdownLabel="All Tools" />
      <br/>
      <ScrollToTop
        top={'80px'}
        center={true}
      />
      <br/>
      <ToolsPageHeader 
        items={cardsData}
        icon="ℂ"
        intro={{
          title: "Explore Interactive Complex Number Tools",
          description: "Master complex numbers through hands-on visualization on the Argand plane.",
          tip: "Click any tool below to see its description and start exploring."
        }}
        article={pageArticle}
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
      <ModernCardsGroup items={cardsData}/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}