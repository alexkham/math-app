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

    when:{
      title:`When You Need Total Probability`,
      content:`
This reasoning applies whenever a system can be in different states, and each state affects the outcome differently.

**When the outcome depends on which case you're in:**
A diagnostic test's accuracy differs for people who actually have the disease versus those who don't. The overall rate of positive tests depends on both groups.

**When data comes from mixed sources:**
Survey results combine responses from different age groups, regions, or demographics. The overall pattern reflects contributions from each subgroup.

**When you don't know the underlying condition:**
A machine might be operating in good condition or degraded condition. Failure rates differ in each state, but if you don't know which state it's in, you need to consider both possibilities.

**When processes have multiple pathways:**
A delivery can be delayed by weather, traffic, or mechanical failure. Each pathway has its own probability, and the total delay probability accounts for all routes.

The intuition is always the same: the final probability is a **weighted blend** of case-specific probabilities. Each scenario contributes its piece, weighted by how likely that scenario is to occur in the first place.`,
      before:``,
      after:``,
  
  
    },
    cases:{
      title:`Splitting a Probability Across Cases`,
      content:`
The key idea: you can divide all possible outcomes into distinct, non-overlapping scenarios. Each scenario contributes part of the final probability.

Think of it like splitting a bill at a restaurant. The total amount comes from adding what each person pays. No overlap — each dollar is counted exactly once.

With probability, the sample space gets partitioned into separate cases. An event might occur in Case 1, Case 2, or Case 3. The event's total probability comes from adding its probability within each case.

**The core phenomenon:**

overall probability = sum of case-specific contributions

This isn't a formula yet — it's the conceptual structure. You're breaking one probability question into smaller, manageable pieces.

**Visual intuition:**

Imagine a probability tree where branches split into different scenarios. Or picture blocks of the sample space, each colored differently. The event overlaps multiple blocks, and you add up how much probability it captures from each.

Each case contributes its share, and those shares sum to give the complete picture. That's the phenomenon at the heart of total probability.`,
      before:``,
      after:``,
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj3:{
  
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
  title: "Splitting Probability Across Cases",
  content: `
Some probability questions involve several different ways an outcome can occur. Instead of treating the situation as a single block, it is often clearer to break it into separate cases and look at how each case contributes to the overall probability.

This idea is closely connected to conditional probability, because each case describes the event “if this situation happens, what is the chance of the outcome?” The law of total probability combines those conditional pieces into one overall value.

This structure also sets the stage for Bayes’ theorem. Bayes reverses conditional probabilities, but it relies on the same breakdown of cases that total probability provides. Together, these ideas form one of the main building blocks of probabilistic reasoning.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Total Probability Aspects | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/total-probability",
         name: "Total Probability"
      },
        
       }
    }
   }

export default function TotalProbabilityPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:'section1',
        link:'',
        content:''
    },
    {
        id:'2',
        title:'section2',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Total Probability</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "siblings"
         secondaryNavTitle="More in Probability Section"
   
   />
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
