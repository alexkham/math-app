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

    why:{
      title:`Why Probability Needs Axioms`,
      content:`
Intuition alone is not enough to support probability. Different people can reason intuitively in different ways, and without clear constraints this leads to contradictions. Axioms provide a common ground: a minimal set of rules that every probability assignment must satisfy, regardless of context or interpretation.

These rules do not describe specific situations or models. Instead, they define the boundaries of what is considered a valid probability system. Any method of assigning probabilities that violates them cannot be internally consistent.

By fixing these constraints upfront, axioms ensure that all later probability rules work together without conflict. They are what make probability a coherent mathematical framework rather than a collection of ad-hoc calculations.
`,
      before:``,
      after:``,
  
  
    },
    events:{
      title:`Probability as an Assignment to Events`,
      content:`
In probability, numbers are not assigned arbitrarily. A probability model assigns values to **events**, which represent situations that may or may not occur. These assignments are made relative to a fixed sample space that describes everything that is possible.

The axioms govern this assignment process. They do not depend on how events are described or interpreted; they apply uniformly to all events within the same framework. What matters is not the nature of the event, but how probabilities attached to events relate to one another.

Understanding probability as a rule-based assignment to events is essential. It clarifies that the axioms are not abstract principles floating above probability, but concrete constraints on how probabilities can be consistently attached to events.
`,
      before:``,
      after:``,
  
    },
  
    axioms:{
  
      title:` The Probability Axioms (Overview)`,
      content:`
The foundations of probability are given by a small set of rules that every valid probability assignment must satisfy. These are known as the **probability axioms**. Each axiom expresses a basic constraint that reflects how probability is expected to behave.

**Non-negativity**  
Probabilities cannot be negative. Every event is assigned a value that is zero or greater.

**Normalization**  
The event that represents “something happens” — the entire sample space — is assigned probability one. This fixes the scale of probability.

**Additivity for Disjoint Events**  
When two events cannot occur together, the probability that one or the other occurs is the sum of their probabilities. Disjoint situations contribute independently to the total.

Together, these axioms define what it means for a probability assignment to be valid. All further probability rules are consequences of these basic constraints.
`,
      before:``,
      after:``,
  
    },
    axiom1:{
  
      title:`Axiom 1 — Non-Negativity`,
      content:`
Probability is meant to measure plausibility. At the most basic level, this measure cannot be negative. An event may be impossible, unlikely, or very likely, but it cannot have a “negative chance” of occurring.

This axiom states that every event is assigned a probability that is zero or greater. It rules out assignments that would contradict the interpretation of probability as a measure of possibility.

In symbolic form, the axiom is written as:

$P(A) \\ge 0 \\quad \\text{for every event } A$

Non-negativity is a structural constraint, not a computational rule. Any assignment that violates it cannot represent a valid probability model, regardless of how the probabilities were obtained.
`,
      before:``,
      after:``,
  
    },
    axiom2:{
  
      title:`Axiom 2 — Normalization`,
      content:`
Probability is measured on a fixed scale. The event that represents absolute certainty — that *something happens* — must anchor this scale.

This axiom states that the probability of the entire sample space is equal to one. It establishes what “100% certainty” means and ensures that all other probabilities are measured relative to this reference point.

In symbolic form, the axiom is written as:

$P(\\Omega) = 1$

Normalization does not describe a particular event. It fixes the scale of probability itself. Without it, probability values would have no consistent meaning across different models.
`,
      before:``,
      after:``,
  
    },
    axiom3:{
  
      title:`Axiom 3 — Additivity for Disjoint Events`,
      content:`
When two events cannot occur together, their probabilities should contribute independently to the total chance that one of them occurs. Disjoint situations do not interfere with one another, so there is no overlap to account for.

This axiom states that if events share no common outcomes, the probability that one or the other occurs is the sum of their probabilities. It formalizes how probability combines across mutually exclusive cases.

In symbolic form, the axiom is written as:

$P(A \\cup B) = P(A) + P(B)$  whenever $A \\cap B = \\varnothing$

Additivity captures the idea that probability accumulates across exclusive alternatives. It is the mechanism that allows probability to be built up from separate cases into a complete description of uncertainty.
`,
      before:``,
      after:``,
  
    },
    consequences:{
  
      title:`Immediate Consequences of the Axioms`,
      content:`
Once the axioms are in place, several basic results follow automatically. These are not additional assumptions — they are direct consequences of the three axioms.

- **Probability of the empty event**  
  The event that cannot occur has probability zero.

- **Probability of complements**  
  For any event, the probability of its complement is determined by how much probability remains once the event itself is accounted for.

- **Monotonicity**  
  If one event is contained within another, its probability cannot be larger.

- **Additivity for two events**  
  For any two events, the probability of their union can be expressed by combining their individual probabilities while correcting for any overlap.

These results show how much structure is already enforced by the axioms alone. Many familiar probability rules emerge without introducing any new principles.
`,
      before:``,
      after:``,
  
    },
    assume:{
  
      title:`What the Axioms Do  Not  Assume`,
      content:`
The probability axioms are intentionally minimal. They impose consistency, but they do **not** encode any specific modeling choices. Several common assumptions are **not** built into the axioms.

- **No independence assumption**  
  The axioms do not state that events are independent. Independence is an additional property that must be justified separately.

- **No equal-likelihood assumption**  
  Nothing in the axioms says outcomes or events are equally likely. Uniform probability is a modeling choice, not a requirement.

- **No symmetry or fairness**  
  The axioms do not assume coins are fair, dice are balanced, or processes are symmetric.

- **No restriction to finite spaces**  
  The axioms apply equally to finite, countable, and continuous sample spaces.

This section is crucial because it separates what probability *requires* from what is often *assumed*. Many misunderstandings arise from attributing extra meaning to the axioms that they do not contain.
`,
      before:``,
      after:``,
  
    },
    follow:{
  
      title:`From Axioms to All Probability Rules`,
      content:`
The axioms are not isolated rules. Together, they are strong enough to generate the entire structure of probability theory. Many familiar probability formulas are not additional assumptions — they are logical consequences of these three constraints.

Once probability is treated as a consistent assignment to events, concepts like conditional probability, total probability, independence, and Bayes’ theorem emerge naturally. Each of these ideas can be derived by applying the axioms to specific event constructions and relationships.

This is why the axioms sit at the foundation of probability. They do not compete with later rules; they *produce* them. Everything else in probability refines or reorganizes what the axioms already enforce.
`,
      before:``,
      after:``,
  
    },
    practice:{
      title:`Why the Axioms Matter in Practice`,
      content:`
The axioms ensure that probability models behave consistently, no matter where they are applied. They prevent contradictory assignments and make it possible to reason reliably about uncertainty across different contexts.

Because the axioms are universal, probability models built in one domain can be transferred to another without changing their logical foundation. This is why the same probability rules apply in science, engineering, data analysis, and decision-making.

In practice, the axioms act as a safeguard. Any model that violates them may produce numbers, but those numbers cannot be interpreted coherently as probabilities.
`,
      before:``,
      after:``,
  
    },
    connections:{
      title:`Connections to Other Probability Concepts`,
      content:`
The probability axioms form the base layer of the entire probability framework.

- **Events** are the objects to which probabilities are assigned.
- **Sample spaces** define the universe in which those events live.
- **Conditional probability** arises by applying the axioms under restricted information.
- **Total probability** follows from additivity across cases.
- **Independence** describes special situations where conditioning has no effect.
- **Random variables** and **probability distributions** extend the axioms to numerical outcomes.

Every probability concept ultimately traces back to these axioms, making them the unifying foundation of the subject.
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


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "The Rules That Make Probability Possible",
  content: `
Probability is not just intuition or guesswork. Behind every probability statement lies a small set of rules that determine what is allowed and what is not. These rules do not tell us how likely something is — they define what it even means for a probability assignment to make sense.

The probability axioms describe the basic constraints any valid probability model must obey. They act as the foundation beneath all probability reasoning, ensuring consistency across different situations, interpretations, and applications.

Everything that follows in probability — conditional probability, independence, total probability, Bayes’ reasoning, random variables — ultimately rests on these rules. This page introduces the role of the axioms and explains why they are essential before any further structure is built.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Axioms of Probability | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/axioms",
         name: "name"
      },
        
       }
    }
   }

export default function AxiomsPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'why',
        title:sectionsContent.why.title,
        link:'',
        content:[
            sectionsContent.why.content,
        ]
    },
    {
        id:'events',
        title:sectionsContent.events.title,
        link:'',
        content:[
            sectionsContent.events.content,
        ]
    },
    {
        id:'axioms',
        title:sectionsContent.axioms.title,
        link:'',
        content:[
            sectionsContent.axioms.content,
        ]
    },
    {
        id:'axiom1',
        title:sectionsContent.axiom1.title,
        link:'',
        content:[
            sectionsContent.axiom1.content,
        ]
    },
    {
        id:'axiom2',
        title:sectionsContent.axiom2.title,
        link:'',
        content:[
          sectionsContent.axiom2.content,
        ]
    },
    {
        id:'axiom3',
        title:sectionsContent.axiom3.title,
        link:'',
        content:[
          sectionsContent.axiom3.content,
        ]
    },
    {
        id:'consequences',
        title:sectionsContent.consequences.title,
        link:'',
        content:[
          sectionsContent.consequences.content,
        ]
    },
    {
        id:'assume',
        title:sectionsContent.assume.title,
        link:'',
        content:[
          sectionsContent.assume.content,
        ]
    },
    {
        id:'practice',
        title:sectionsContent.practice.title,
        link:'',
        content:[
          sectionsContent.practice.content,
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
   {/* <GenericNavbar/> */}
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Axioms</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
    secondaryNavTitle="Other Pages in Probability Section" 
    
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
   {/* <ScrollUpButton/> */}
   </>
  )
}
