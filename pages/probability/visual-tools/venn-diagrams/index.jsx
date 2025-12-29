
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
  "Venn diagram visualization",
  "event relationships in probability",
  "intersection and union of events",
  "Venn diagram calculator",
  "probability event decomposition",
  "Venn diagram regions explained",
  "complements intersections unions",
  "probability event structure",
  "visualizing probability events",
  "probability sets and regions",
  "set operations Venn diagram",
  "event algebra visualization",
  "probability diagrams interactive",
  "sample space event diagrams"
];

    const sectionsContent={

    obj1:{
      title:`What are Venn Diagrams?`,
      content:`Venn diagrams are visual representations of sets and their relationships. In probability theory, they help us understand how events relate to each other through intersections, unions, and complements.`,
      before:``,
      after:``,
    },
    obj2:{
      title:`Types of Venn Diagrams`,
      content:`We offer interactive tools for different complexity levels. Choose the number of sets that matches your problem.`,
      before:``,
      after:``,
    },
  
    obj3:{
      title:`Applications in Probability`,
      content:`Venn diagrams are essential for visualizing probability concepts including conditional probability, independent events, and the addition rule.`,
      before:``,
      after:``,
    },
  
  }


  const introContent = {
  id: "intro",
  title: "Interactive Venn Diagram Tools",
  content: `Explore probability relationships visually with our interactive Venn diagram tools. Select the number of sets below to get started.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Venn Diagrams - Interactive Probability Tools | Learn Math Class",
        description: "Interactive Venn diagram tools for visualizing probability events. Explore 2-set and 3-set diagrams with step-by-step explanations and examples.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/venn-diagrams",
         name: "Venn Diagrams"
      },
        
       }
    }
   }

export default function VennDiagramsLanding({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:'What are Venn Diagrams?',
        link:'',
        content: sectionsContent.obj1.content
    },
    {
        id:'2',
        title:'Types of Venn Diagrams',
        link:'',
        content: sectionsContent.obj2.content
    },
    {
        id:'3',
        title:'Applications in Probability',
        link:'',
        content: sectionsContent.obj3.content
    }
]

const cardStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    margin: '40px 0',
    flexWrap: 'wrap'
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
  cardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Venn Diagrams</h1>
   <br/>
   <br/>
   
   <div style={cardStyles.container}>
     <Link href="/probability/visual-tools/venn-diagrams/two-sets" style={cardStyles.card}>
       <div style={cardStyles.title}>2-Set Venn Diagrams</div>
       <div style={cardStyles.description}>
         Visualize relationships between two events. Perfect for basic probability problems.
       </div>
     </Link>
     
     <Link href="/probability/visual-tools/venn-diagrams/three-sets" style={cardStyles.card}>
       <div style={cardStyles.title}>3-Set Venn Diagrams</div>
       <div style={cardStyles.description}>
         Explore complex interactions between three events with all possible regions.
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