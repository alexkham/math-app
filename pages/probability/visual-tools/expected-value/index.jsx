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
    "expected value visualization",
    "expected value calculator",
    "weighted average probability",
    "discrete expected value",
    "continuous expected value",
    "mean of random variable",
    "probability weighted average",
    "expected value examples",
    "interactive expected value",
    "E[X] calculator",
    "probability distribution mean",
    "expected value formula",
    "visual probability tools",
    "expected value interactive"
  ];

    const sectionsContent={

    obj1:{
      title:`What is Expected Value?`,
      content:`Expected value is the long-run average value of a random variable over many repetitions. It represents the center or "expected" outcome, calculated as a probability-weighted average of all possible values.`,
      before:``,
      after:``,
      link:'#what-is-expected-value',
    },
    obj2:{
      title:`Types of Expected Value`,
      content:`Expected value calculations differ based on whether the random variable is discrete (countable outcomes) or continuous (infinite possible values in a range). Each requires different visualization approaches.`,
      before:``,
      after:``,
      link:'#types',
    },
  
    obj3:{
      title:`Applications`,
      content:`Expected value is fundamental in decision theory, finance, insurance, game theory, and risk assessment. It helps quantify average outcomes when dealing with uncertainty.`,
      before:``,
      after:``,
      link:'#applications',
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Interactive Expected Value Tools",
  content: `Explore expected value through interactive visualizations. See how probability weights combine with outcomes to produce the long-run average.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Expected Value Visualizations - Interactive Tools | Learn Math Class",
        description: "Interactive expected value visualization tools for discrete and continuous distributions. Calculate and visualize E[X] with step-by-step explanations.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/expected-value",
         name: "Expected Value Visualizations"
      },
        
       }
    }
   }

export default function ExpectedValueLanding({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title: sectionsContent.obj1.title,
        link: sectionsContent.obj1.link,
        content: sectionsContent.obj1.content
    },
    {
        id:'2',
        title: sectionsContent.obj2.title,
        link: sectionsContent.obj2.link,
        content: sectionsContent.obj2.content
    },
    {
        id:'3',
        title: sectionsContent.obj3.title,
        link: sectionsContent.obj3.link,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Expected Value Visualizations</h1>
   <br/>
   <br/>
   
   <div style={cardStyles.container}>
       
     <Link href="/probability/visual-tools/expected-value/weighted" style={cardStyles.card}>
       <div style={cardStyles.title}>Weighted Expected Value</div>
       <div style={cardStyles.description}>
         Visualize expected value as a weighted average with interactive probability weights.
       </div>
     </Link>

      <Link href="/probability/visual-tools/expected-value/discrete" style={cardStyles.card}>
       <div style={cardStyles.title}>Discrete Expected Value</div>
       <div style={cardStyles.description}>
         Calculate expected value for discrete random variables with probability mass functions.
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