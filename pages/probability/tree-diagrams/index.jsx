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
  "tree diagrams probability",
  "probability tree",
  "conditional probability tree",
  "bayes tree diagram",
  "sequential probability",
  "branching probability",
  "probability paths"
];


  // •

    const sectionsContent={

    obj1:{
      title:`What a Tree Diagram Represents`,
      content:`
A tree diagram represents a random process that unfolds in stages.

Each stage corresponds to a point where several outcomes are possible.  
From that point, the process branches, and each branch represents one possible result of the next step.

A complete path from the start of the tree to a final node represents one full sequence of outcomes.  
The tree does not define randomness on its own — it **organizes** an already defined situation so that sequential outcomes and their relationships are explicit.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`Components of a Tree Diagram`,
      content:`
A tree diagram is built from a small number of structural elements, each with a specific role.

- **Root**  
  The starting point of the process, before any outcomes have occurred.

- **Branches**  
  Lines extending from a node, each representing a possible outcome at a given stage.

- **Nodes**  
  Points where branches meet or split, representing intermediate states of the process.

- **Paths**  
  Sequences of connected branches from the root to a terminal node, representing complete outcome sequences.

These components work together to make the order of events and the structure of sequential randomness explicit.
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Probability Values on a Tree Diagram`,
      content:`
Probabilities in a tree diagram are assigned to the branches, not to the paths directly.

Each branch probability represents the likelihood of an outcome *given* that the process has reached the corresponding node. In this way, branch probabilities are conditional by nature.

The probability of a complete path is obtained by following the path from the root and combining the probabilities along its branches. This reflects how uncertainty accumulates across successive stages of the process.

Tree diagrams therefore make it explicit how local, step-by-step probabilities combine to produce probabilities of full outcome sequences.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Tree Diagrams and Conditional Probability`,
      content:`
Tree diagrams make conditional probability explicit by construction.

Each branch represents the probability of an outcome **given** that the process has reached a certain stage. Moving along a branch means accepting the condition imposed by all previous outcomes on the path.

Because of this, conditional probability is not an extra concept added to the diagram — it is already built into how the diagram is read. Probabilities are interpreted step by step, with each stage conditioning on what has happened before.

This is why tree diagrams are especially useful for reasoning about sequential experiments, updating information, and situations where later outcomes depend on earlier ones.
`,
      before:``,
      after:``,
      link:'',
  
    },
     obj15:{
  
      title:`Tree Diagrams and the Law of Total Probability`,
      content:`
Tree diagrams provide a direct visual interpretation of the Law of Total Probability.

Each first-level branch of a tree represents a distinct case that cannot occur together with the others. These branches form a partition of all possible outcomes at that stage of the process.

When a later event can occur through several different branches, its overall probability is obtained by accounting for **all paths** that lead to it. Each path contributes according to the probability values along that path, and the total probability is obtained by combining these contributions.

In this way, the law of total probability is not an abstract rule added afterward.  
It is read directly from the structure of the tree: split the process into disjoint cases, follow the branches, and combine their contributions.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Using Tree Diagrams to Compute Probabilities`,
      content:`
Tree diagrams provide a clear method for computing probabilities in multi-stage situations.

Each complete path through the diagram represents one possible sequence of outcomes. The probability of such a sequence is obtained by following the path and combining the probability values along its branches.

When a question involves several possible sequences, the corresponding path probabilities are combined to obtain the final result. In this way, tree diagrams turn complex probability questions into structured path-based calculations.

This approach is especially helpful when outcomes depend on earlier stages and when direct formulas are difficult to apply.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Tree Diagrams and Bayes’ Theorem`,
      content:`
Tree diagrams provide a natural visual setting for understanding Bayes’ theorem.

A tree can be read in one direction to represent how probabilities are assigned before any information is observed. Once an outcome at a later stage is known, the same tree can be used to reason backward, focusing only on the paths consistent with the observed information.

By restricting attention to these paths and renormalizing their probability values, the diagram shows how probabilities are updated in light of new evidence. This makes the logic of Bayes’ theorem visible without relying solely on algebraic formulas.

Tree diagrams therefore serve as an intuitive bridge between conditional probability and Bayesian updating.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Tree Diagrams vs Other Representations`,
      content:`
Tree diagrams are one of several ways to represent probabilistic situations.

Compared to tables, tree diagrams emphasize **order and sequence**, making them better suited for problems where outcomes occur in stages. Compared to formulas, they highlight **structure and dependencies** rather than algebraic relationships.

However, tree diagrams are not always the best choice. As the number of stages or possible outcomes grows, diagrams can become large and difficult to read. In such cases, tabular or formula-based methods may be more efficient.

Tree diagrams are most effective when the process is sequential and the number of stages is small enough to be visualized clearly.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Common Mistakes and Misinterpretations`,
      content:`
Tree diagrams are simple in structure, but they are often used incorrectly.

Typical mistakes include:
- treating branch probabilities as unconditional rather than conditional
- assigning probabilities to paths directly instead of to branches
- forgetting that branch probabilities at a node must sum to 1
- double-counting outcomes by summing overlapping paths
- mixing up stages of the process with events of interest

Another common error is reading the tree in the wrong direction after information is observed. Once an outcome at a later stage is known, only the paths consistent with that outcome should be considered.

Being careful about what each branch represents, and what information is being conditioned on at each stage, prevents most misunderstandings.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`When Tree Diagrams Are Most Useful`,
      content:`
Tree diagrams are most effective when a random situation unfolds in a small number of clearly ordered stages.

They work especially well when:
- outcomes occur sequentially rather than all at once
- later possibilities depend on earlier outcomes
- conditional probabilities are central to the problem
- the number of branches remains manageable

In contrast, tree diagrams become less practical as the number of stages or possible outcomes grows. In such cases, the visual structure can become cluttered, and alternative representations such as tables or formulas may be more efficient.

Tree diagrams are therefore best viewed as a tool for **structured reasoning**, not a universal solution for all probability problems.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:`Interactive Tools`,
      content:`
- Probability Tree Visualizer  
- Conditional Probability Explorer  
- Bayes Tree Simulator
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:`Summary`,
      content:`
Tree diagrams provide a clear way to organize probability problems that unfold in stages.

They represent sequential randomness through branches and paths, making conditional relationships explicit and traceable. By following paths through the diagram, probabilities of complex outcomes can be computed in a structured and transparent way.

Tree diagrams connect naturally to conditional probability, the law of total probability, and Bayes’ theorem, serving as a visual bridge between models, rules, and calculations.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


   
  
  }


  const introContent = {
  id: "intro",
  title: "When Probability Branches",
  content: `
Not all random situations happen in a single step.  
In many problems, uncertainty unfolds sequentially, with each outcome opening the door to new possibilities.

Tree diagrams provide a visual way to represent this kind of staged randomness.  
They arrange possible outcomes as branches, making it clear how one step leads to the next and how complete outcomes are formed along paths.

By laying out possibilities step by step, tree diagrams turn conditional probability into something visible.  
They help track how probabilities change as information accumulates and make complex multi-stage situations easier to reason about.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Tree Diagrams in Probability | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/tree-diagrams",
         name: "name"
      },
        
       }
    }
   }

export default function TreeDiagramsPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
     {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
   
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Tree Diagrams</h1>
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
   {/* <ScrollUpButton/> */}
   </>
  )
}
