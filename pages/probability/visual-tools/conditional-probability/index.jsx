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
// import WaffleChart from '@/app/components/probability/conditional-probability-demo/WaffleChart'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
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
//         url: "/probability/visual-tools/conditional-probability",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function ConditionalProbabilityVisualPage({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
//     }
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
//    <GenericNavbar/>
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'-50px'}}>Conditional Probability Visualization</h1>
//    <br/>
//    <div style={{transform:'scale(0.9)'}}>
//    <WaffleChart/>
//    </div>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
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
//    <ScrollUpButton/>
//    </>
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
import Link from 'next/link'


export async function getStaticProps(){

 const keyWords = [
  "conditional probability visualization",
  "Bayes theorem interactive",
  "probability given condition",
  "conditional probability calculator",
  "visual probability tools",
  "tree diagram conditional probability",
  "Venn diagram conditional probability",
  "waffle chart probability",
  "conditional probability examples",
  "P(A|B) calculator",
  "interactive probability learning",
  "probability visualization tools",
  "conditional probability explained",
  "visual conditional probability"
];

    const sectionsContent={

    obj1:{
      title:`What is Conditional Probability?`,
      content:`Conditional probability measures the likelihood of an event occurring given that another event has already occurred. Written as P(A|B), it reads "the probability of A given B."`,
      before:``,
      after:``,
    },
    obj2:{
      title:`Visualization Methods`,
      content:`Different visualization approaches help understand conditional probability from various perspectives. Choose the method that best fits your learning style or problem type.`,
      before:``,
      after:``,
    },
  
    obj3:{
      title:`Applications and Examples`,
      content:`Conditional probability is fundamental in statistics, machine learning, medical testing, and decision-making. Visual tools make these concepts more intuitive and accessible.`,
      before:``,
      after:``,
    },
  
  }


  const introContent = {
  id: "intro",
  title: "Interactive Conditional Probability Tools",
  content: `Explore conditional probability through multiple visual representations. Each tool offers a unique perspective on how probabilities change when conditions are applied.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Conditional Probability Visualizations - Interactive Tools | Learn Math Class",
        description: "Interactive conditional probability visualization tools including tree diagrams, Venn diagrams, and waffle charts. Learn P(A|B) with step-by-step visual explanations.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/conditional-probability",
         name: "Conditional Probability Visualizations"
      },
        
       }
    }
   }

export default function ConditionalProbabilityLanding({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:'What is Conditional Probability?',
        link:'#what-is-conditional-probability',
        content: sectionsContent.obj1.content
    },
    {
        id:'2',
        title:'Visualization Methods',
        link:'#visualization-methods',
        content: sectionsContent.obj2.content
    },
    {
        id:'3',
        title:'Applications and Examples',
        link:'#applications-and-examples',
        content: sectionsContent.obj3.content
    }
]

const cardStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '40px 0',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  card: {
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    padding: '30px',
    width: '280px',
    textAlign: 'center',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: '15px'
  },
  description: {
    fontSize: '16px',
    color: '#4b5563',
    lineHeight: '1.5'
  }
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
   <GenericNavbar/>
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Conditional Probability Visualizations</h1>
   <br/>
   <br/>
   
   <div style={cardStyles.container}>
     <Link href="/probability/visual-tools/conditional-probability/tree-diagram" style={cardStyles.card}>
       <div style={cardStyles.title}>Tree Diagrams</div>
       <div style={cardStyles.description}>
         Visualize sequential events and conditional probabilities through branching paths.
       </div>
     </Link>
     
     <Link href="/probability/visual-tools/conditional-probability/venn-diagram" style={cardStyles.card}>
       <div style={cardStyles.title}>Venn Diagrams</div>
       <div style={cardStyles.description}>
         Understand conditional probability through overlapping sets and regions.
       </div>
     </Link>

     <Link href="/probability/visual-tools/conditional-probability/waffle-chart" style={cardStyles.card}>
       <div style={cardStyles.title}>Waffle Charts</div>
       <div style={cardStyles.description}>
         See proportions and conditional probabilities in a grid-based visual format.
       </div>
     </Link>
     <Link href="/probability/visual-tools/conditional-probability/contingency-table" style={cardStyles.card}>
       <div style={cardStyles.title}>Contingency Table</div>
       <div style={cardStyles.description}>
        Interactive 2×2 table visualizing conditional probability relationships between events A and B.
       </div>
     </Link>
   </div>
   
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}