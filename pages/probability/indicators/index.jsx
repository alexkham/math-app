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
  "indicator random variable",
  "indicator variables probability",
  "expectation of indicator",
  "linearity of expectation",
  "counting with indicators",
  "events as random variables"
];


  // •

    const sectionsContent={

    obj1:{
      title:`From Events to Random Variables`,
      content:`
In probability theory, events are sets of outcomes.  
Sets cannot be added, averaged, or combined algebraically.

Random variables assign numerical values to outcomes.  
An indicator random variable assigns the value $1$ to outcomes in a given event and $0$ to all other outcomes.

This construction converts an event into a numerical object defined on the same sample space.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`Definition of an Indicator Random Variable`,
      content:`
Let $A$ be an event in a probability experiment.  
The indicator random variable of $A$, denoted by $I_A$, is defined by

 $I_A(\\omega)=\\begin{cases}1, & \\text{if } \\omega \\in A \\\\ 0, & \\text{if } \\omega \\notin A\\end{cases}$


The indicator $I_A$ is a random variable defined on the same sample space as the experiment.  
It represents membership in the event $A$ numerically.

An indicator is **not** a probability value; it is a random variable whose value depends on the outcome.
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Basic Properties of Indicator Random Variables`,
      content:`
Indicator random variables have a simple structure.

• They take only two values: $0$ or $1$
• They are completely determined by the event they represent
• They are defined on the same sample space as the underlying experiment

Simple relationships follow directly from the definition:

• The indicator of the complement event equals $1 - I_A$
• Indicators reflect set operations at the level of outcomes

These properties allow indicators to be combined and manipulated algebraically without introducing new probability assumptions.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Expectation of an Indicator Random Variable`,
      content:`
The expected value of an indicator random variable equals the probability of its event.

For an event $A$ with indicator $I_A$,
$E[I_A]=P(A)$

This holds because $I_A$ takes the value $1$ exactly on outcomes in $A$ and $0$ otherwise.  
Expectation therefore counts how often the event occurs in probability terms.

This identity connects events directly to expectation without introducing a full probability distribution.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Linearity of Expectation and Indicators`,
      content:`
Expectation is linear.

For indicator random variables, this means:

• The expectation of a sum equals the sum of expectations
• No independence assumptions are required

As a result, counting problems can be solved by expressing the quantity of interest as a sum of indicator variables and taking expectations term by term.

This technique avoids direct probability calculations and remains valid even when the indicators are dependent.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Counting with Indicator Random Variables`,
      content:`
Many counting problems can be expressed as sums of indicator random variables.

Each object or outcome is associated with an indicator that takes the value $1$ if a specified condition is met and $0$ otherwise.  
The total count is obtained by summing these indicators.

This approach converts counting questions into expectation calculations and allows results to be obtained without enumerating all outcomes or computing complex probabilities.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Indicators and Dependence`,
      content:`
Indicator random variables may be dependent.

Dependence does not affect the validity of linearity of expectation, so expectations of sums of indicators can still be computed term by term.  
However, dependence becomes important when higher-order quantities such as variance are considered.

This distinction explains why indicators are effective for expectation-based counting but require additional care in variance calculations.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Indicators in Probability Models`,
      content:`
Indicator random variables are used across many [probability models](!/probability/models).

They commonly appear in:

• Bernoulli trials, where each trial contributes a $0$ or $1$
• Binomial models, where the total number of successes is a sum of indicators
• Occupancy and matching problems, where indicators track whether a condition is satisfied
• Random structures, where indicators isolate local events

Indicators function as a structural tool rather than as a probability model of their own.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`What Indicators Are Not`,
      content:`
Indicator random variables are often misunderstood.

• They are **not** probabilities
• They are **not** probability distributions
• They are **not** limited to Bernoulli experiments

An indicator is a random variable that represents an event numerically.  
Its value depends on the outcome, not on the probability of the event itself.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:`Summary`,
      content:`
Indicator random variables convert events into numerical random variables that take values $0$ or $1$.

Their expected value equals the probability of the corresponding event, and sums of indicators allow counting problems to be handled through linearity of expectation without requiring independence or full probability distributions.

Indicators function as a structural tool in probability theory, linking events, expectation, and counting within finite and discrete models.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
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
  title: "Why Indicators Exist",
  content: `
Many probability problems ask whether a specific event occurs or does not occur.  
Indicator random variables encode this yes–no information numerically.

By representing events as random variables that take values $0$ or $1$, indicators allow probability questions to be handled using expectation and algebraic operations.  
This makes them a structural tool for counting and for applying linearity of expectation.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Indicators in Probability | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/indicators",
         name: "name"
      },
        
       }
    }
   }

export default function IndicatorsPage({seoData,sectionsContent , introContent}) {

    
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
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Indicators in Probability</h1>
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
