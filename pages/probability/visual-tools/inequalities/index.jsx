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
    "probability inequalities",
    "Markov inequality",
    "Chebyshev inequality",
    "probability bounds",
    "tail probability bounds",
    "concentration inequalities",
    "probability theory tools",
    "statistical inequalities",
    "distribution bounds",
    "probability upper bounds",
    "variance bounds",
    "expected value inequalities",
    "interactive probability inequalities",
    "probability visualization"
  ];

    const sectionsContent={

    obj1:{
      title:`What are Probability Inequalities?`,
      content:`Probability inequalities provide upper bounds on the probability of events without requiring full knowledge of the distribution. They are fundamental tools in probability theory and statistics.`,
      before:``,
      after:``,
      link:'#what-are-inequalities',
    },
    obj2:{
      title:`Why Use Inequalities?`,
      content:`When we know limited information about a random variable (like its mean or variance), inequalities let us bound probabilities and make guarantees about tail behavior.`,
      before:``,
      after:``,
      link:'#why-use-inequalities',
    },
  
    obj3:{
      title:`Applications`,
      content:`Probability inequalities are used in statistical inference, machine learning convergence proofs, algorithm analysis, and risk assessment across various fields.`,
      before:``,
      after:``,
      link:'#applications',
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Interactive Probability Inequality Tools",
  content: `Explore fundamental probability inequalities through interactive visualizations. See how these bounds work across different distributions and parameter settings.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Probability Inequalities - Interactive Visualizations | Learn Math Class",
        description: "Interactive tools for Markov and Chebyshev inequalities. Visualize probability bounds across multiple distributions with step-by-step explanations.",
        keywords: keyWords.join(", "),
        url: "/probability/visual-tools/inequalities",
         name: "Probability Inequalities"
      },
        
       }
    }
   }

export default function InequalitiesLanding({seoData,sectionsContent , introContent}) {

    
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Inequalities</h1>
   <br/>
   <br/>
   
   <div style={cardStyles.container}>
     <Link href="/probability/visual-tools/inequalities/markov" style={cardStyles.card}>
       <div style={cardStyles.title}>Markov Inequality</div>
       <div style={cardStyles.description}>
         Bound tail probabilities using only the expected value. P(X ≥ a) ≤ E[X] / a
       </div>
     </Link>
     
     <Link href="/probability/visual-tools/inequalities/chebyshev" style={cardStyles.card}>
       <div style={cardStyles.title}>Chebyshev Inequality</div>
       <div style={cardStyles.description}>
         Bound deviations from the mean using variance. P(|X - μ| ≥ a) ≤ σ² / a²
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