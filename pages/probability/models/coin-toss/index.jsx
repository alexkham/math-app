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


export async function getStaticProps(){

  const keyWords = [
  "coin toss probability model",
  "coin toss experiment",
  "binary probability model",
  "bernoulli trial model",
  "coin toss random variable",
  "distributions from coin toss",
  "binomial distribution coin toss",
  "simulate distributions with coin toss",
  "discrete probability model",
  "probability model examples"
];


    const sectionsContent={

    obj1:{
      title:`What Is Being Modeled`,
      content:`
The coin toss model represents a random mechanism with two possible outcomes produced in a single trial.

The model does not describe the physical act of tossing a coin.  
It abstracts away all physical details and retains only the binary nature of the outcome.

Each trial produces exactly one outcome, and no additional information is carried over from the process itself.  
The model is therefore defined entirely by its possible outcomes and their assigned probabilities.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`Outcome Space`,
      content:`
The coin toss model has a finite outcome space consisting of two elements.

These outcomes are usually labeled for convenience, for example:
• Heads
• Tails

The labels themselves have no mathematical meaning.  
They simply distinguish the two possible results of the experiment.

At this stage, the model specifies only *what can happen*.  
No probabilities or numerical values are attached yet.
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Events`,
      content:`
Events in the coin toss model are collections of outcomes drawn from the outcome space.

With two possible outcomes, the possible events include:
• the event that the outcome is Heads
• the event that the outcome is Tails
• the event that some outcome occurs
• the event that no outcome occurs

Events describe *which outcomes are of interest*, not how likely they are.  
At this level, the model organizes outcomes into meaningful groups without assigning probabilities.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Probability Assignment`,
      content:`
To complete the coin toss model, probabilities are assigned to the two outcomes.

Each outcome is given a number between 0 and 1, representing how likely it is to occur, with the total probability equal to 1.

In many cases, the probabilities are chosen symmetrically, assigning the same value to both outcomes.  
However, the model does not require symmetry — unequal probabilities are equally valid and define a different model.

These probabilities are not inferred from the outcomes.  
They are part of the model’s definition and must be specified in advance.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Assumptions`,
      content:`
The coin toss model relies on a small set of explicit assumptions.

• exactly one outcome occurs in each trial  
• the two outcomes are mutually exclusive  
• the probabilities assigned to the outcomes are fixed  
• the mechanism has no memory of previous trials  

These assumptions define the scope of the model.  
If any of them are changed or removed, the resulting model is different, even if the same outcome labels are reused.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Random Variables on the Coin Toss Model`,
      content:`
Once the model is fixed, numerical quantities can be defined on top of it.

A random variable assigns a number to each outcome of the coin toss.  
Different choices of this assignment lead to different interpretations and uses of the same model.

Common constructions include:
• indicator variables that mark one outcome as success
• binary encodings such as 0 and 1
• signed encodings such as −1 and 1

The coin toss model itself does not prescribe any particular random variable.  
It serves as a base on which many different measurements can be defined.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Distributions Directly Induced by a Single Toss`,
      content:`
When a random variable is defined on the coin toss model, its probability distribution follows immediately.

For a binary encoding of the outcomes, the resulting distribution assigns probability to two numerical values.  
This is the simplest non-degenerate probability distribution and serves as a basic building block in probability theory.

Other choices of random variables may collapse both outcomes to the same number, producing a distribution concentrated at a single point.

At this level, the coin toss produces distributions that reflect the two-outcome structure of a single trial.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Distributions Built from Repeated Coin Tosses`,
      content:`
More complex distributions arise when the coin toss model is repeated and outcomes from multiple trials are combined.

Each repetition adds another binary outcome, and the sequence of tosses can be used to define new random variables.  
Different ways of combining these outcomes lead to different distributions.

Typical constructions include:
• counting how many times a chosen outcome occurs
• measuring how long it takes for a specific outcome to appear
• detecting patterns or runs within the sequence
• grouping binary sequences into numerical values

Although the underlying model remains a sequence of coin tosses, the resulting distributions can vary widely.  
They depend entirely on how the outcomes are aggregated and measured, not on the coin itself.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`Approximating Continuous Distributions`,
      content:`
Repeated coin tosses can also be used to construct experiments whose outcomes behave like continuous random variables.

By combining long sequences of binary outcomes and rescaling the resulting values, it is possible to produce distributions that closely resemble continuous ones.  
As the number of tosses increases, the discrete structure becomes less visible, and smooth probability shapes emerge.

In this way, continuous distributions can be viewed as limits or approximations of experiments built from simple binary randomness.

The coin toss model therefore serves not only as a source of discrete distributions, but also as a foundation for simulating and approximating continuous probabilistic behavior.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:`Why the Coin Toss Model Is Fundamental`,
      content:`
The coin toss model is the smallest probability model that is fully specified and non-trivial.

It contains:
• a complete outcome space
• a clear probability assignment
• independence when repeated

Because of this, it can be reused as a basic component in more complex constructions.  
Many probability models can be reduced to, approximated by, or simulated using sequences of coin tosses.

For this reason, the coin toss is not treated as a special case, but as a foundational source of randomness on which larger models are built.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:`Variations of the Coin Toss Model`,
      content:`
The basic coin toss model can be modified in several ways while keeping its core structure.

Common variations include:
• changing the probabilities of the two outcomes (biased coin)
• repeating the toss a fixed number of times
• stopping the experiment based on a condition
• allowing dependence between successive tosses

Each variation defines a new model, even though the same outcome labels may be reused.  
These variations serve as entry points to more advanced probability models and distributions.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`What This Model Is Used For`,
      content:`
The coin toss model is used whenever a situation can be reduced to two possible alternatives.

Typical uses include:
• modeling success–failure experiments
• serving as a building block for more complex probability models
• generating and simulating discrete distributions
• approximating continuous distributions through aggregation
• providing a base for Monte Carlo methods

Because of its simplicity and flexibility, the coin toss model appears repeatedly across probability theory, statistics, and simulation, even when the original problem has no obvious connection to coins.
`,
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


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "Coin Toss Probability Model",
  content: `
The coin toss is the simplest setting in which randomness can be isolated and studied in full detail.

It describes a mechanism with exactly two possible outcomes, produced by a single trial.  
Nothing about the physical coin is essential here — only the existence of a binary random outcome.

Because of its minimal structure, the coin toss serves as a foundational probability model.  
From this basic source of randomness, more complex experiments can be constructed, allowing a wide range of probability distributions to be generated, analyzed, and simulated.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Coin Toss Model | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/models/coin-toss",
         name: "name"
      },
        
       }
    }
   }

export default function CoinTossPage({seoData,sectionsContent , introContent}) {

    
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
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Coin Toss</h1>
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
