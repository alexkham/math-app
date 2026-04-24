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
//         title: "Arithmetic Visual Tools| Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/visual-tools",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function ArithmeticVisualToolsPage({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-30px',marginBottom:'0px'}}>Arithmetic Visual Tools</h1>
//    <br/>
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
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//    <br/>
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
    'arithmetic visualization tools',
    'interactive arithmetic tools',
    'arithmetic visualizer',
    'visual arithmetic learning',
    'divisibility tools',
    'divisibility table visualizer',
    'divisibility tree visualizer',
    'interactive divisibility tools',
    'arithmetic teaching tools',
    'visual math tools',
    'number theory visualization',
    'divisibility rules visual',
    'arithmetic interactive learning',
    'math concept visualization',
    'elementary arithmetic tools'
  ]

  const cardsData = [
    {
      title: "Divisibility Table Visualizer",
      description: "Explore divisibility patterns through an interactive table that highlights multiples, common factors, and divisibility relationships. Adjust the range and select divisors to see how numbers relate through divisibility with color-coded visual feedback.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '',
      href: "/arithmetic/visual-tools/divisibility-table"
    },
    {
      title: "Divisibility Tree Visualizer",
      description: "Break down numbers into their prime factors with an interactive tree diagram. Watch step-by-step how composite numbers decompose through repeated division, revealing the fundamental building blocks of any integer with a dynamic branching visualization.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '',
      href: "/arithmetic/visual-tools/divisibility-tree"
    },
      {
      title: "Divisibility Tiles Visualizer",
      description: "Explore divisibility by grouping tiles into equal sets. Enter any number from 1 to 100, choose a divisor, and watch tiles organize into complete groups with remainders highlighted. See instantly whether numbers divide evenly with step-by-step visual explanations.",
      backgroundColor: "#4F46E5",
      textColor: "#ffffff",
      ratio: 7,
      image: '',
      href: "/arithmetic/visual-tools/divisibility-tiles"
    }
  ]

  const faqQuestions = {
    obj1: {
      question: "What arithmetic visualization tools are available?",
      answer: "The collection currently includes interactive visualizers for divisibility tables and divisibility trees. The divisibility table tool highlights multiples and factor relationships across a number grid, while the divisibility tree tool shows step-by-step prime factorization through branching diagrams."
    },
    obj2: {
      question: "How do arithmetic visualization tools help learning?",
      answer: "Visual tools turn abstract number relationships into concrete, interactive experiences. By highlighting patterns in divisibility and showing how numbers decompose into prime factors, learners develop stronger number sense and intuition about fundamental arithmetic properties."
    },
    obj3: {
      question: "What is the difference between the divisibility table and divisibility tree?",
      answer: "The divisibility table shows relationships between numbers and their divisors across a grid, making it easy to spot patterns and common factors. The divisibility tree focuses on breaking down a single number into its prime factors through a step-by-step branching diagram."
    },
    obj4: {
      question: "Are these arithmetic tools free to use?",
      answer: "Yes, all arithmetic visualization tools are completely free with no registration required. They run directly in your browser and include interactive controls, real-time calculations, and educational explanations to support learning."
    },
    obj5: {
      question: "Can I use these tools for teaching arithmetic?",
      answer: "Absolutely. These visualization tools are designed for both self-study and classroom use. Teachers can demonstrate divisibility concepts during lectures, and students can interact with the tools to build understanding through hands-on exploration and immediate visual feedback."
    }
  }

  const schemas = {
    collectionPage: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Arithmetic Visual Tools",
      "description": "Interactive visualization tools for learning arithmetic including divisibility tables, divisibility trees, and number theory explorers with real-time visual feedback.",
      "url": "https://www.learnmathclass.com/arithmetic/visual-tools",
      "inLanguage": "en-US",
      "about": {
        "@type": "Thing",
        "name": "Arithmetic Visualization"
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
          "name": "Divisibility Table Visualizer",
          "url": "https://www.learnmathclass.com/arithmetic/visual-tools/divisibility-table",
          "description": "Interactive divisibility table with color-coded multiples and factor highlighting"
        },
        {
          "@type": "WebPage",
          "name": "Divisibility Tree Visualizer",
          "url": "https://www.learnmathclass.com/arithmetic/visual-tools/divisibility-tree",
          "description": "Interactive prime factorization tree with step-by-step decomposition"
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
            "name": "Divisibility Table Visualizer",
            "url": "https://www.learnmathclass.com/arithmetic/visual-tools/divisibility-table",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive divisibility table with color-coded multiples and factor highlighting"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Divisibility Tree Visualizer",
            "url": "https://www.learnmathclass.com/arithmetic/visual-tools/divisibility-tree",
            "applicationCategory": "EducationalApplication",
            "description": "Interactive prime factorization tree with step-by-step decomposition"
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
          "name": "Arithmetic",
          "item": "https://www.learnmathclass.com/arithmetic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Arithmetic Visual Tools",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools"
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

  const sectionsContent = {
    obj1: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj2: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj3: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj4: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
    },
    obj5: {
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

  const pageArticle=`Arithmetic forms the foundation of all mathematical thinking, and understanding divisibility is one of its most essential skills. These interactive visualization tools transform abstract number relationships into concrete, explorable experiences.

The Divisibility Table Visualizer presents numbers in a grid format, highlighting multiples and common factors with color coding. Select any divisor and watch patterns emerge across the table — a powerful way to recognize divisibility rules intuitively rather than memorizing them.

The Divisibility Tree Visualizer takes a different approach, breaking down individual numbers into their prime factors through animated branching diagrams. Enter any composite number and observe step-by-step how it decomposes through repeated division until only primes remain.

The Divisibility Tiles Visualizer offers a hands-on grouping experience. Numbers from 1 to 100 can be divided into equal sets, with remainders clearly highlighted. This concrete representation helps learners grasp why some divisions result in whole numbers while others leave remainders.

Each tool runs directly in your browser with no downloads or registration required. Use them for self-study, classroom demonstrations, or homework support.`

  return {
    props: {
      sectionsContent,
      introContent,
      cardsData,
      faqQuestions,
      schemas,
      pageArticle,
      seoData: {
        title: "Arithmetic Visual Tools - Interactive Visualizers | Learn Math Class",
        description: "Interactive arithmetic visualization tools including divisibility tables, divisibility trees, and number theory explorers with real-time visual feedback.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools",
        name: "Arithmetic Visual Tools"
      }
    }
  }
}

export default function ArithmeticVisualToolsPage({seoData, sectionsContent, 
  introContent, cardsData, faqQuestions, schemas, pageArticle}) {

  const genericSections = [
    {
      id: '1',
      title: 'section1',
      link: '',
      content: ''
    },
    {
      id: '2',
      title: 'section2',
      link: '',
      content: ''
    },
    {
      id: '',
      title: '',
      link: '',
      content: ''
    }
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
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>Arithmetic Visual Tools</h1>
      <QuickNav items={cardsData} dropdownLabel="All Tools" />
      <br/>
      <ScrollToTop
        top={'80px'}
        center={true}
      />
      <br/>
      <ToolsPageHeader 
        items={cardsData}
        icon="🔧"
        intro={{
          title: "Explore Interactive Arithmetic Tools",
          description: "Master concepts through hands-on visualization...",
          tip: "Click any tool below to see its description..."
        }}
        onFilteredItemsChange={(filtered) => setDisplayedItems(filtered)}
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