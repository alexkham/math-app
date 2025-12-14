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
    examples:{
  
      title:`Examples`,
      content:`
**1. Information Changes the Probability**  
Suppose $A$ is “a randomly chosen person has a university degree” and $B$ is “the person is over 40.”  
The probability of $A$ evaluated after knowing $B$ may differ from the overall probability of $A$, because the condition changes the relevant group.

**2. No Change Under Conditioning**  
If $A$ is “tomorrow is sunny” and $B$ is “a fair coin lands heads today,” knowing $B$ has no effect on how we evaluate $A$. In this case, conditioning does not change the probability, illustrating a link to independence.

**3. Sequential Situations**  
Consider drawing two cards from a deck without replacement. Let $A$ be “the second card is an ace” and $B$ be “the first card is an ace.”  
Knowing whether $B$ occurred changes how we evaluate $A$, because the situation after the first draw is different from the original one.

These examples show how conditional probability reflects the impact of information on how uncertainty is assessed.
`,
      before:``,
      after:``,
  
    },
    independence:{
  
      title:`Conditional Probability vs Independence`,
      content:`
Conditioning usually changes probabilities, because new information restricts the situation we are considering. Once a condition is known, the frame of reference shifts, and probabilities are re-evaluated within that restricted context.

Independence is the special case where this shift does **not** occur. If events are independent, then knowing that one event happened provides no information about the other. In that case, conditioning leaves probabilities unchanged.

This contrast is crucial:  
- **Conditional probability** describes how probabilities *update* when information is known.  
- **Independence** describes when such an update is unnecessary.

Understanding this distinction prevents a common mistake — assuming probabilities should change just because a condition is mentioned, or assuming independence without justification.
`,
      before:``,
      after:``,
  
    },
    patterns:{
  
      title:`Common Patterns Where Conditioning Appears`,
      content:`
Conditional probability shows up naturally in many recurring situations.

One common pattern is **“given that…”** reasoning, where information is stated explicitly and probabilities must be evaluated under that condition. Another is **filtering**, where attention is restricted to cases that meet a certain criterion before any assessment is made.

Conditioning also appears in **sequential processes**, where earlier outcomes affect how later ones are viewed, and in **classification problems**, where probabilities are evaluated within specific groups or categories.

Recognizing these patterns helps identify when conditional probability is required, even if the word “given” is not explicitly used.
`,
      before:``,
      after:``,
  
    },
    mistakes:{
  
      title:`Common Mistakes`,
      content:`
Conditional probability is often misapplied, even in simple situations.

A frequent mistake is forgetting to restrict the situation properly and continuing to reason as if all outcomes were still possible. Another common error is dividing by the wrong probability, which leads to incorrect normalization.

Confusing $P(A \\mid B)$ with $P(B \\mid A)$ is especially widespread and can completely reverse the meaning of a statement. It is also common to assume independence implicitly, treating conditioning as irrelevant without justification.

Being explicit about what is known and what space is being considered helps avoid these errors.
`,
      before:``,
      after:``,
  
    },
    why:{
  
      title:`Why Conditional Probability Matters`,
      content:`
Conditional probability is the mechanism by which probability responds to information. It models learning, observation, and the updating of beliefs as new facts become known.

This idea lies at the heart of inference, decision-making, and prediction. It underpins statistical reasoning, risk assessment, and data analysis, where conclusions must be drawn in the presence of partial information.

Without conditional probability, probability theory would be unable to describe how uncertainty evolves when knowledge changes.
`,
      before:``,
      after:``,
  
    },
    connections:{
      title:`Connections to Other Probability Concepts`,
      content:`
Conditional probability connects directly to many central ideas in probability.

- **Events** provide the objects being conditioned on.  
- **Independence** describes when conditioning has no effect.  
- **Total probability** combines conditional probabilities across cases.  
- **Chain rule** builds joint probabilities from conditional ones.  
- **Bayes theorem** inverts conditional probabilities to update beliefs.  
- **Random variables and distributions** extend conditioning to numerical outcomes.

Understanding conditional probability clarifies how these concepts fit together into a single coherent framework.
`,
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
        id:'examples',
        title:sectionsContent.examples.title,
        link:'',
        content:[
          sectionsContent.examples.content,
        ]
    },
    {
        id:'independence',
        title:sectionsContent.independence.title,
        link:'',
        content:[
          sectionsContent.independence.content,
        ]
    },
    {
        id:'patterns',
        title:sectionsContent.patterns.title,
        link:'',
        content:[
          sectionsContent.patterns.content,
        ]
    },
    {
        id:'mistakes',
        title:sectionsContent.mistakes.title,
        link:'',
        content:[
          sectionsContent.mistakes.content,
        ]
    },
    {
        id:'why',
        title:sectionsContent.why.title,
        link:'',
        content:[
          sectionsContent.why.content,
        ]
    },
    {
        id:'connections',
        title:sectionsContent.connections.title,
        link:'',
        content:[
          sectionsContent.connections.content,
        ]
    },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },
    // {
    //     id:'',
    //     title:'',
    //     link:'',
    //     content:''
    // },
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
