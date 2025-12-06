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
  'probability models',
  'probability model examples',
  'sample space and events',
  'coin toss model',
  'dice roll model',
  'urn model probability',
  'basic probability models',
  'what is a probability model',
  'probability modeling',
  'random experiment models'
];


    const sectionsContent={

    definition:{
      title:`What Are Probability Models?`,
      content:`
A probability model is a simplified picture of a random situation. It describes:
• the possible outcomes,
• how those outcomes are produced,
• and how probability is assigned to them.

A model does not aim to capture every detail of reality. It keeps only the parts needed to understand the randomness. Once we have the model, we can analyze many questions using the same underlying structure.
`,
      before:``,
      after:``,
  
  
    },
    purpose:{
      title:`Why We Use Models?`,
      content:`
Different random situations often share the same pattern. A model gives us a standard way to describe that pattern so we can:
• reason about uncertainty,
• compute probabilities,
• compare scenarios,
• and reuse the same structure in many problems.

Models act as templates. If two problems follow the same model, they can be solved using the same principles.
`,
      before:``,
      after:``,
  
    },
  
    types:{
  
      title:`Types of Basic Probability Models`,
      content:`
Here are the foundational models that appear throughout probability:

• **Coin Toss Model**  
  A model with two outcomes (0/1 or heads/tails). Used for Bernoulli trials, binary events, and repeated independent experiments.

• **Dice Roll Model**  
  A uniform model where all outcomes have equal chance. Useful for discrete randomness and symmetry-based problems.

• **Urn Models**  
  A model where outcomes depend on drawing objects from a container, with or without replacement. It forms the basis for binomial, hypergeometric, and related distributions.

Each model captures a distinct type of randomness that reappears in many theoretical and practical problems.
`,
      before:``,
      after:``,
  
    },
    use:{
      title:`How These Models Are Used Later`,
      content:`
Probability models appear everywhere else in the subject:

• Random variables are built on top of models.  
• Distributions arise when a model is repeated or extended.  
• Conditional probability and Bayes often rely on model structure.  
• Simulations and experiments use these models directly.

By learning the core models, you prepare the foundation for all later topics.
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
  title: "Probability Models: The Starting Point of Everything Else",
  content: `
Before we talk about random variables, distributions, expected value, or any other idea in probability, there has to be something underneath them. That “something” is a probability model.

A probability model describes the basic random mechanism we are working with. It tells us what the possible outcomes are, how they are produced, and how probability is assigned to them. Once this foundation is set, every other concept in probability—events, random variables, distributions, CDFs, expectation, variance—sits on top of the model and grows naturally from it.

Think of probability models as the playground where all other ideas come to life. They give us the structure we need to build, compare, and analyze different kinds of random behavior.

Below are the most fundamental models used throughout probability. These appear again and again in theory, examples, exercises, simulations, and real-world problems.
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
        url: "/probability/models",
         name: "name"
      },
        
       }
    }
   }

export default function ProbabilityModelsPage({seoData,sectionsContent , introContent}) {

    
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
        id:'purpose',
        title:sectionsContent.purpose.title,
        link:'',
        content:[
            sectionsContent.purpose.content,
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
        id:'use',
        title:sectionsContent.use.title,
        link:'',
        content:[
            sectionsContent.use.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Models</h1>
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
