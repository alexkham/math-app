import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=['','','','','']

    const sectionsContent={

    conditioning:{
      title:`Conditioning as Restricting the Situation`,
      content:`
When a condition is known, we no longer reason over all possible outcomes. The information tells us that only certain situations remain relevant, and everything outside that condition is discarded.

From this point on, probabilities are evaluated **within** the condition. We are not changing the event itself — we are changing the context in which it is viewed. The situation is the same, but the frame of reference is smaller.

This way of thinking explains why probabilities can change once information is known. Conditioning is not an extra rule added on top of probability; it is a shift in perspective caused by restricting attention to a specific part of what was originally possible.
`,
      before:``,
      after:``,
  
  
    },
    meaning:{
      title:`Formal Meaning of Conditional Probability `,
      content:`
Conditional probability describes how likely an event is once we know that another event has occurred. It represents a reassessment of uncertainty after information is taken into account.

The key idea is that the condition is treated as given. All reasoning is carried out under the assumption that this condition is true, and probabilities are evaluated relative to that restricted situation rather than the original one.

This verbal description captures the essence of conditional probability before any symbols or formulas are introduced.
`,
      before:``,
      after:``,
  
    },
  
    notation:{
  
      title:`Useful Notation`,
      content:`
Before introducing the formula, we fix the symbols used to describe conditional probability:

- $A$, $B$ — events  
- $P(A)$, $P(B)$ — unconditional probabilities  
- $P(A \\mid B)$ — probability of $A$ when $B$ is known to have occurred  
- $A \\cap B$ — the event that both $A$ and $B$ occur  

This notation allows us to express conditioning precisely and compactly in the next section.
`,
      before:``,
      after:``,
  
    },
    formula:{
  
      title:`Conditional Probability Formula`,
      content:`
The idea of conditioning becomes precise through a simple normalization rule. When we restrict attention to situations where $B$ has occurred, probabilities must be rescaled so that they sum to one within that restricted context.

This leads to the formula:

$P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$

The numerator represents the part of $A$ that is compatible with the condition $B$.  
The denominator accounts for the fact that we are now working only inside $B$.

This formula does not introduce a new probability law — it expresses how probabilities behave once the situation has been restricted by known information.
`,
      before:``,
      after:``,
  
    },
    visual:{
  
      title:`Visual Representations`,
      content:`
Conditional probability becomes clearer when viewed geometrically or sequentially.

**Venn diagram view:**  
The condition $B$ restricts attention to a smaller region of the sample space. The probability of $A$ is then evaluated only within that region, as the proportion of the overlap $A \cap B$ relative to $B$ itself.

**Tree diagram view:**  
In a probability tree, conditioning corresponds to moving along a branch where a condition has already occurred. Probabilities along later branches are evaluated relative to that branch, not the entire tree.

These visual perspectives reinforce the idea that conditioning is a change of viewpoint, not a change in the underlying events.
`,
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
  title: "Probability When a Condition Is Known",
  content: `
In many situations, probabilities do not stay fixed. Once new information becomes available, how we assess a situation can change. Knowing that something has already happened often reshapes how we view what can happen next.

Conditional probability captures this shift in perspective. It reflects how uncertainty is evaluated **after** a condition is known, when attention is restricted to a smaller set of possibilities. This idea appears naturally whenever information arrives, observations are made, or situations unfold step by step.

The rest of the page explains how this change of viewpoint works, how it is expressed formally, and how it connects to other central ideas in probability.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Conditional Probability | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probabilioty/conditional-probability",
         name: "name"
      },
        
       }
    }
   }

export default function ConditionalProbabilityPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'conditioning',
        title:sectionsContent.conditioning.title,
        link:'',
        content:[
            sectionsContent.conditioning.content,
        ]
    },
    {
        id:'meaning',
        title:sectionsContent.meaning.title,
        link:'',
        content:[
            sectionsContent.meaning.content,
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
        id:'formula',
        title:sectionsContent.formula.title,
        link:'',
        content:[
            sectionsContent.formula.content,
        ]
    },
    {
        id:'visual',
        title:sectionsContent.visual.title,
        link:'',
        content:[
            sectionsContent.visual.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Conditional Probability</h1>
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
