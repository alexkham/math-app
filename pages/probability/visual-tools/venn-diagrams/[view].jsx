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
import VennExplorer from '@/app/components/probability/venn-explorer/VennExplorer'
import VennExplorer2 from '@/app/components/probability/venn-explorer/VennExplorer2'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'two-sets' } },
    { params: { view: 'three-sets' } },
  ];

  return { paths, fallback: false };
}


export async function getStaticProps({ params }){

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


const viewConfig = {
    'two-sets': {
      mode: 2,
      title: "2-Set Venn Diagrams - Interactive Probability Tool | Learn Math Class",
      description: "Interactive 2-set Venn diagram tool for visualizing probability events. Explore intersections, unions, and complements with dynamic examples and step-by-step explanations.",
      name: "2-Set Venn Diagrams",
      url: "/probability/visual-tools/venn-diagrams/two-sets",
      h1: "2-Set Venn Diagrams",
      introTitle: "Understanding 2-Set Venn Diagrams",
      introContent: "Two-set Venn diagrams visualize the relationship between two events A and B. They help understand fundamental concepts like intersection (A ∩ B), union (A ∪ B), and complements."
    },
    'three-sets': {
      mode: 3,
      title: "3-Set Venn Diagrams - Interactive Probability Tool | Learn Math Class",
      description: "Interactive 3-set Venn diagram tool for complex probability analysis. Visualize all possible intersections and unions between three events with comprehensive examples.",
      name: "3-Set Venn Diagrams",
      url: "/probability/visual-tools/venn-diagrams/three-sets",
      h1: "3-Set Venn Diagrams",
      introTitle: "Understanding 3-Set Venn Diagrams",
      introContent: "Three-set Venn diagrams show relationships between three events A, B, and C. They reveal complex interactions including triple intersections and various combinations of unions and complements."
    }
  };

const currentConfig = viewConfig[params.view];

    const sectionsContent={

    obj1:{
      title: currentConfig.mode === 2 ? `Basic Two-Set Operations` : `Basic Three-Set Operations`,
      content: currentConfig.mode === 2 
        ? `Two-set Venn diagrams consist of four distinct regions: A only, B only, A ∩ B (intersection), and the complement (neither A nor B).`
        : `Three-set Venn diagrams contain eight distinct regions representing all possible combinations of the three sets and their complements.`,
      before:``,
      after:``,
    },
    obj2:{
      title: `Key Probability Concepts`,
      content: currentConfig.mode === 2
        ? `Use 2-set diagrams to visualize P(A ∪ B) = P(A) + P(B) - P(A ∩ B) and understand conditional probability P(A|B).`
        : `Use 3-set diagrams for complex probability calculations including the inclusion-exclusion principle for three events.`,
      before:``,
      after:``,
    },
  
    obj3:{
      title: `Interactive Examples`,
      content: `Adjust the diagram regions to see how probabilities change. Each region represents a unique outcome in the sample space.`,
      before:``,
      after:``,
    },
  
  }


  const introContent = {
  id: "intro",
  title: currentConfig.introTitle,
  content: currentConfig.introContent
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: keyWords.join(", "),
        url: currentConfig.url,
         name: currentConfig.name
      },
      currentMode: currentConfig.mode,
      h1Title: currentConfig.h1
        
       }
    }
   }

export default function VennDiagramsPage({seoData, sectionsContent, introContent, currentMode, h1Title}) {

    
  const genericSections=[
    {
        id:'1',
        title: sectionsContent.obj1.title,
        link: '',
        content: sectionsContent.obj1.content
    },
    {
        id:'2',
        title: sectionsContent.obj2.title,
        link: '',
        content: sectionsContent.obj2.content
    },
    {
        id:'3',
        title: sectionsContent.obj3.title,
        link: '',
        content: sectionsContent.obj3.content
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
  
  <meta name="twitter:card" content="summary_large_image" />
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>{h1Title}</h1>
   <br/>
   <br/>
   
   {currentMode === 2 ? (
     <VennExplorer2 problemsData={[]} />
   ) : (
     <VennExplorer problemsData={[]} />
   )}
   
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