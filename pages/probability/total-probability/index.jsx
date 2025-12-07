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
  
    notation:{
  
      title:`Useful Notation`,
      content:`
Before expressing the phenomenon formally, we need notation for the key pieces.

**The event of interest:**
Call it A. This is what you're trying to find the probability of.

**The cases (partition):**
Call them B₁, B₂, ..., Bₙ. These are the distinct scenarios that divide the sample space.

Key properties:
- They're disjoint (no overlap — only one can occur)
- They're exhaustive (together they cover everything)
- Exactly one of them happens

**Conditional pieces:**
P(A | Bᵢ) is the probability of A given that case Bᵢ occurred. This captures how likely A is within that specific scenario.

**Weights:**
P(Bᵢ) is the probability that case Bᵢ occurs. This tells you how much that scenario contributes to the total.

**Sum notation:**
When we add contributions from all cases, we write:
∑ (sum over all i)

That's the notation toolkit. Each piece has a clear meaning:
- A is what you want
- The Bᵢ are the cases
- P(A | Bᵢ) is A's probability within case i
- P(Bᵢ) is the weight of case i

Next, we combine these pieces into the formal law.`,
      before:``,
      after:``,
  
    },
    law:{
  
      title:`The Law of Total Probability`,
      content:`
Now we formalize the phenomenon described in the previous sections.

**Statement in words:**

If an event A can occur through several disjoint cases B₁, B₂, ..., Bₙ that cover the entire sample space, then the probability of A is the sum of its probability within each case, weighted by the probability of that case occurring.

**The formula:**

P(A) = P(A | B₁)·P(B₁) + P(A | B₂)·P(B₂) + ... + P(A | Bₙ)·P(Bₙ)

Or using summation notation:

P(A) = ∑ P(A | Bᵢ)·P(Bᵢ)

**What each term means:**

- P(A | Bᵢ)·P(Bᵢ) is the contribution from case i
- P(A | Bᵢ) tells you how likely A is in that case
- P(Bᵢ) weights that contribution by how likely the case is
- The sum adds all contributions to get the total

**Discrete version:**

This is the form shown above, used when you have a finite or countable number of cases.

**Continuous version (conceptual):**

When the partition becomes continuous (like a range of values), the sum becomes an integral:

P(A) = ∫ P(A | B=b)·f(b) db

where f(b) is the probability density of the conditioning variable.

This law expresses mathematically what we've already understood conceptually: probability distributes across cases, and the total comes from adding weighted contributions.`,
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
        id:'when',
        title:sectionsContent.when.title,
        link:'',
        content:[
          sectionsContent.when.content,
        ]
    },
    {
        id:'cases',
        title:sectionsContent.cases.title,
        link:'',
        content:[
          sectionsContent.cases.content,
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
        id:'law',
        title:sectionsContent.law.title,
        link:'',
        content:[
          sectionsContent.law.content,
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
