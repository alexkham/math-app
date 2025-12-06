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


export async function getStaticProps(){

  const keyWords=['','','','','']

    const sectionsContent={

    definition:{
      title:`Definition of Sample Space`,
      content:`
The sample space is the complete collection of all possible outcomes a scenario can produce. Every outcome that can happen belongs to it, and anything that cannot happen is not included.

Each outcome represents one full, specific result of the situation. Together, these outcomes form the background on which events are defined and probabilities are assigned.

**Examples**:
Rolling a die → {1, 2, 3, 4, 5, 6}
 Tossing two coins → {HH, HT, TH, TT}
 Measuring a persons height → all real numbers in an interval (for example, [0, 3] meters)
`,
      before:``,
      after:``,
  
  
    },
    notation:{
      title:`Useful Notation
`,
      content:`
      Before working with sample spaces in probability, a few standard symbols are used to describe outcomes and the sets they belong to:

$\(\\Omega\)$ — the sample space (the set of all possible outcomes)
 $\(\\omega\)$ — a single outcome (an element of $\(\\Omega\))$
 \{\ \} — explicit listing of outcomes for finite sample spaces
 Set-builder notation, e.g. $\(\\{x : x > 0\\}\)$
 Intervals for continuous outcomes, e.g. $\([0,\\infty)\)$
 Cartesian products for multi-step scenarios, e.g. $\(\\Omega = A \\times B\)$
 Events as subsets of the sample space: $\(A \\subseteq \\Omega\)$

These symbols will appear throughout the page whenever we describe outcomes or refer to parts of the sample space.
`,
      before:``,
      after:``,
  
    },
  
    types:{
  
      title:`Types of Sample Spaces`,
      content:`
Different scenarios produce different kinds of sample spaces. They generally fall into a few common categories:

- **Finite sample spaces:** a limited number of outcomes, e.g. rolling a die  
  $\(\\Omega = \{1,2,3,4,5,6\}\)$

- **Countably infinite sample spaces:** outcomes can be listed in sequence, e.g. number of trials until first success  
  $\(\\Omega = \{1,2,3,\\ldots\}\)$

- **Uncountable or continuous sample spaces:** outcomes fill an interval or region, e.g. measuring time or height  
  $\(\\Omega = [0,\\infty)\)$

These categories help determine how probabilities are assigned and what tools are used to work with the sample space.
`,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Sample Space — The First Step in Probability",
  content: `
As explained on the page about the probability of events, probability compares the outcomes we want to the full set of outcomes that could happen. The basic expression we already introduced there is:

**Probability = (favourable outcomes) / (all possible outcomes)**

Since “all possible outcomes” appears directly in the formula, it makes sense to understand what this collection actually is and how we identify it for different situations. That collection is the **sample space**. It describes every outcome the scenario can produce and forms the foundation for defining events and assigning probabilities.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/sample-space",
         name: "name"
      },
        
       }
    }
   }

export default function SampleSpacePage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'definition',
        title:sectionsContent.definition.title,
        link:'',
        content:[
            sectionsContent.definition.content,
        ]
    },
    {
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
            sectionsContent.notation.content,
        ]
    },
    {
        id:'types',
        title:sectionsContent.types.title,
        link:'',
        content:[
            sectionsContent.types.content,
        ]
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    },
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
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Sample Space</h1>
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
          //  "#f2f2f2"
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
