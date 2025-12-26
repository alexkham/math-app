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

 const keyWords = [
  'independent events',
  'statistical independence',
  'probability independence',
  'independent events formula',
  'mutually independent events',
  'independence probability',
  'dependent vs independent events',
  'conditional independence',
  'testing independence',
  'independence in probability'
]

    const sectionsContent={

    meaning:{
      title:`What Independence Means for Events`,
      content:`
Before introducing any formal definition, it helps to understand the basic idea. Two events do not influence each other when the occurrence of one provides no information about the other. Learning that one situation happened does not change how we think about the likelihood of the second.

This is an information-based view: independence is about the absence of update. If seeing one event occur leaves our expectations about the other exactly as they were before, then the two events behave independently.

This perspective captures the core intuition and prepares the ground for the formal definition that follows.
`,
      before:``,
      after:``,
  
  
    },
    definition:{
      title:`Formal Definition of Independence (In Words)`,
      content:`
Two events are considered independent when knowing that one has occurred does not alter the chance of the other. In other words, the likelihood of event A remains exactly the same whether event B happens or not, and vice versa.

This definition focuses on the idea of unchanged information. If the occurrence of one event never forces us to revise our expectation about the other, the two events meet the formal standard of independence, even before introducing any symbolic expressions.
`,
      before:``,
      after:``,
  
    },
  
    notation:{
  
      title:`Useful Notation`,
      content:`
Before writing the independence formulas, we fix the symbols used to describe the events and their relationships:

- $A$ and $B$ — the events under discussion  
- $P(A)$ and $P(B)$ — their individual probabilities  
- $P(A \\mid B)$ and $P(B \\mid A)$ — probabilities evaluated under given conditions  
- $P(A \\cap B)$ — the event in which both occur  

These symbols allow us to express independence in a compact way once the formal statements appear in the following section.


`,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
  
    },
    formula:{
      title:`Independence Formula`,
      content:`
The intuitive idea of independence becomes precise when expressed in terms of probabilities. Two events are independent exactly when their joint occurrence behaves like the product of their separate chances:

- $P(A \\cap B) = P(A) \, P(B)$

This statement captures the idea that combining the events does not introduce any new influence between them. It is the compact formal expression of “no change in information.”  

An equivalent way to view the same idea is through conditional probabilities:

- $P(A \\mid B) = P(A)$  
- $P(B \\mid A) = P(B)$

Each form highlights a different aspect, but they all represent the same underlying condition: the occurrence of one event leaves the probability of the other untouched.
`,
      before:``,
      after:``,
  
    },
    visual:{
      title:`Visual Representations`,
      content:`
Independence can be understood more clearly by comparing it to situations where events do influence one another.

**Venn-style view:**  
Although real probabilities cannot be read from the areas of a standard Venn diagram, the picture helps convey the idea: the region representing $A$ contains no “information distortion” from $B$, and vice versa. The overlap simply reflects the product structure implied by independence.

**Tree diagram view:**  
A probability tree makes independence especially clear. When events are independent, the branches for one event look the same regardless of whether the other event occurred. The structure of the tree does not change from one branch to the other, visually showing that no event alters the chances of the other.

These representations help highlight the contrast with dependent situations, where the shapes or branch weights change once one event is known to have occurred.
`,
      before:``,
      after:``,
  
    },
    examples:{
      title:`Examples`,
      content:`
Independence shows up in many simple and practical situations:

**1. Repeated Trials**  
Consider flipping a fair coin twice. The result of the first flip does not affect the result of the second. If $A$ is “first flip is heads” and $B$ is “second flip is heads,” then  
$P(A \\cap B) = P(A)P(B)$, reflecting the independence of the trials.

**2. Separate Components**  
Imagine two unrelated sensors operating in different parts of a system. If their detections come from unrelated mechanisms, the event “sensor 1 triggers” and the event “sensor 2 triggers” behave independently. Observing one does not update our belief about the other.

**3. Contrast With Dependence**  
Suppose $A$ is “it rains today” and $B$ is “the ground is wet.” These events are not independent: knowing $B$ changes how we evaluate $A$. This contrast helps clarify what true independence looks like.

**4. Table-Based Illustration**  
A simple table of outcomes where every combination is equally likely (such as rolling two dice) often provides an easy demonstration of independent structure: each coordinate behaves as if the other were irrelevant.

These examples show both the appearance of independence and how it differs from scenarios where events influence one another.
`,
      before:``,
      after:``,
  
    },
    patterns:{
      title:`How Independence Fails (Dependence Patterns)`,
      content:`
Many situations look independent at first glance but are not. Dependence appears whenever the occurrence of one event changes how we evaluate another.

A common failure pattern is **shared causes**. Two events may seem unrelated, but both are influenced by the same underlying factor. Observing one then provides information about the other.

Another pattern is **structural restriction**. When events draw from a limited set of possibilities, the occurrence of one may remove options for the other, creating dependence.

Dependence also arises through **conditioning**. Events that are independent in isolation may become dependent once additional information is known, or dependent events may appear independent only within a restricted context.

Recognizing these patterns is essential, because assuming independence where it does not exist is one of the most common sources of error in probability reasoning.
`,
      before:``,
      after:``,
  
    },
    conditional:{
      title:`Conditional Independence`,
      content:`
In some situations, two events may influence each other in general, but become unrelated once additional information is known. This phenomenon is called **conditional independence**.

Here, the relationship between events depends on a third event or condition. Knowing this extra information can block the flow of influence between them, so that learning about one event no longer changes how we think about the other.

This idea appears frequently in real systems: hidden variables, background conditions, or common causes can create apparent dependence that disappears once the underlying factor is taken into account. Conditional independence plays a central role in probabilistic modeling, graphical models, and Bayesian reasoning.
`,
      before:``,
      after:``,
  
    },
    problems:{
      title:`Independence in Problem Solving`,
      content:`
Recognizing independence can dramatically simplify probability problems. When events are independent, complex joint situations break into simpler pieces that can be handled separately.

Independence allows probability trees to collapse into repeated patterns, makes joint probabilities easier to compute, and reduces the number of cases that must be considered. Many models in practice rely on independence assumptions precisely because they make reasoning tractable.

At the same time, independence should never be assumed blindly. In problem solving, the key skill is not using independence, but **justifying** it — understanding why one event truly does not influence another in the given context.
`,
      before:``,
      after:``,
  
    },
    mistakes:{
      title:`Common Mistakes`,
      content:`
Independence is often misused or misunderstood, leading to incorrect conclusions.

A frequent mistake is confusing **disjoint** events with **independent** ones. Disjoint events cannot occur together, while independent events can — and usually do.

Another error is assuming independence simply because events look unrelated. Shared causes, hidden constraints, or limited resources often introduce dependence even when it is not obvious.

Independence is also mistakenly treated as permanent. Events that are independent in one context may become dependent once additional information is introduced, and vice versa.

Carefully checking assumptions is essential, because incorrect independence assumptions can invalidate an entire probability argument.
`,
      before:``,
      after:``,
  
    },
    connections:{
      title:`Connections to Other Probability Concepts`,
      content:`
Independence does not stand alone. It interacts directly with many of the central ideas in probability.

- **Conditional probability** explains how probabilities change when information is known; independence describes when they do not change.
- **Total probability** combines contributions from different cases and often relies on independence assumptions to simplify models.
- **Bayes’ reasoning** depends critically on understanding when events are independent or conditionally independent.
- **Random variables** extend independence from events to numerical quantities.
- **Joint distributions** reflect independence through their factorization structure.

Seeing these connections makes independence easier to recognize and prevents it from being treated as an isolated rule rather than a structural idea running through probability.
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


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "The Idea Behind Independence",
  content: `
In many situations, one outcome happening tells us nothing about another. A system works, a coin lands heads, a sensor triggers, a value exceeds a threshold — and these situations unfold without affecting each other. Probability treats this kind of “no influence” as a distinct idea.

Independence captures the situations where events stand on their own. Nothing about one event changes how we think about the other, and no new information is gained from seeing one occur. This idea appears everywhere: repeated experiments, separate components, unrelated conditions, or processes that evolve without interaction.

The rest of the page develops what independence means, how it is expressed formally, and how it connects to other probability concepts.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Independence of Probability Events | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/independence",
         name: "name"
      },
        
       }
    }
   }

export default function IndependencePage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'meaning',
        title:sectionsContent.meaning.title,
        link:'',
        content:[
            sectionsContent.meaning.content,
        ]
    },
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
            sectionsContent.notation.after,
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
        id:'patterns',
        title:sectionsContent.patterns.title,
        link:'',
        content:[
          sectionsContent.patterns.content,
        ]
    },
    {
        id:'conditional',
        title:sectionsContent.conditional.title,
        link:'',
        content:[
          sectionsContent.conditional.content,
        ]
    },
    {
        id:'problems',
        title:sectionsContent.problems.title,
        link:'',
        content:[
          sectionsContent.problems.content,
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
        id:'connections',
        title:sectionsContent.connections.title,
        link:'',
        content:[
          sectionsContent.connections.content,
        ]
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Independence of Events</h1>
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
