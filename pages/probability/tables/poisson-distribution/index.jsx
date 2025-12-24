import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import PoissonTable from '@/app/components/probability/tables/PoissonTable'


export async function getStaticProps(){

  const keyWords=['poisson distribution table', 'poisson probability table', 'poisson distribution',
    'poisson table', 'cumulative poisson distribution', 'rare events distribution',
    'lambda parameter', 'discrete probability distribution', 'poisson probability',
    'P(X = k)', 'poisson cumulative probability', 'arrival rate distribution',
    'event occurrence probability', 'poisson statistical table', 'poisson pmf table']

    const sectionsContent={

    obj1:{
      title:`What is the Poisson Distribution?`,
      content:`The Poisson distribution is a discrete probability distribution that models the number of events occurring in a fixed interval of time or space when events happen independently at a constant average rate. It's characterized by a single parameter λ (lambda), representing both the mean and variance. The distribution answers questions like "How many customers arrive per hour?" or "How many defects occur per product batch?"`,
      before:``,
      after:``,
    },
    
    obj2:{
      title:`How to Read the Poisson Table`,
      content:`The table shows probabilities P(X = k) or cumulative probabilities P(X ≤ k) for different values of λ and k. The left column lists the number of events (k), while column headers show different λ values (average rate). To find P(X = 3) when λ = 2.5, locate k = 3 in the left column and λ = 2.5 across the top. For cumulative probabilities, sum individual probabilities from k = 0 up to your target value.`,
      before:``,
      after:``,
    },
  
    obj3:{
      title:`Poisson Distribution Formula`,
      content:`The probability mass function is P(X = k) = (λ^k × e^(-λ)) / k!, where λ is the average rate, k is the number of events, and e ≈ 2.71828. The mean equals λ, variance equals λ, and standard deviation equals √λ. This unique property where mean equals variance distinguishes the Poisson from other distributions. As λ increases, the distribution becomes more symmetric and approximates the normal distribution.`,
      before:``,
      after:``,
    },
    
    obj4:{
      title:`Common Applications`,
      content:`Poisson distributions model call center arrivals, website traffic hits, radioactive decay events, earthquake occurrences, manufacturing defects, insurance claims, disease outbreaks, queue arrivals, email receptions, and network packet arrivals. It's ideal for rare events occurring independently at a known average rate. Used in operations research, reliability engineering, telecommunications, epidemiology, and quality control.`,
      before:``,
      after:``,
    },

    obj5:{
      title:`Poisson Properties and Assumptions`,
      content:`Key assumptions: events occur independently, the average rate (λ) remains constant, two events cannot occur simultaneously, and the probability of an event in a small interval is proportional to the interval length. The distribution is right-skewed for small λ and approaches symmetry as λ increases. When λ > 10, the normal approximation with mean = λ and variance = λ provides accurate results.`,
      before:``,
      after:``,
    }
  
  }


  const introContent = {
    id: "intro",
    title: "Poisson Distribution Table",
    content: `This comprehensive Poisson distribution table provides probabilities for various λ (lambda) values and event counts. Use it to calculate probabilities for rare events, model arrival processes, analyze count data, and solve problems involving events occurring at constant average rates over fixed intervals.`
  }




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Poisson Distribution Table - Cumulative Probability Values | Learn Math Class",
        description: "Comprehensive Poisson distribution table with cumulative probabilities for various lambda values. Find probabilities for rare events, arrivals, and occurrences in fixed intervals.",
        keywords: keyWords.join(", "),
        url: "/probability/tables/poisson-distribution",
        name: "Poisson Distribution Table"
      },
        
       }
    }
   }

export default function PoissonDistributionTable({seoData, sectionsContent, introContent}) {

    
  const genericSections=[
    {
        id:'what-is',
        title:'What is the Poisson Distribution?',
        link:'#what-is',
        content: sectionsContent.obj1.content
    },
    {
        id:'how-to-read',
        title:'How to Read the Table',
        link:'#how-to-read',
        content: sectionsContent.obj2.content
    },
    {
        id:'formula',
        title:'Poisson Distribution Formula',
        link:'#formula',
        content: sectionsContent.obj3.content
    },
    {
        id:'applications',
        title:'Common Applications',
        link:'#applications',
        content: sectionsContent.obj4.content
    },
    {
        id:'properties',
        title:'Properties and Assumptions',
        link:'#properties',
        content: sectionsContent.obj5.content
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "headline": "Poisson Distribution Table - Cumulative Probability Values",
          "datePublished": new Date().toISOString(),
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'20px'}}>Poisson Distribution Table</h1>
   <br/>
    <SectionTableOfContents sections={genericSections} stickyWidth={'250px'}
    showSecondaryNav={true}
    secondaryNavMode='siblings'
    secondaryNavTitle='Other Probability Tables'/>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <PoissonTable/>
   </div>
   <br/>
  
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}