import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

 const keyWords = [
  "random variable",
  "random variables",
  "discrete random variable",
  "continuous random variable",
  "probability random variable",
  "outcomes to numbers",
  "numerical outcomes",
  "probability distributions",
  "expectation",
  "variance"
];


    const sectionsContent={

    outcomes:{
      title:`From Outcomes to Numerical Values`,
      content:`
Random experiments produce outcomes, not numbers.  
A coin toss results in heads or tails, a dice roll produces faces, and an experiment
ends in one of many possible outcomes.

Many probability questions, however, are not about the outcomes themselves but about
numerical results derived from them.  
Counting successes, summing values, or recording measurements all require assigning
numbers to outcomes.

A random variable performs exactly this role: it assigns a numerical value to each
possible outcome of a random experiment, making quantitative probability analysis
possible.
`,
      before:``,
      after:``,
  
  
    },
    definition:{
      title:`What a Random Variable Is`,
      content:`
A random variable is a rule that assigns a real number to each possible outcome of a
random experiment.

Each outcome is mapped to exactly one numerical value, though different outcomes may
produce the same value.  
The randomness does not come from the variable itself, but from the underlying
experiment whose outcome is unknown in advance.

By representing outcomes numerically, random variables allow probability to be
expressed, analyzed, and manipulated using mathematical tools.
`,
      before:``,
      after:``,
  
    },
  
    types:{
  
      title:`Types of Random Variables`,
      content:`
Random variables are commonly classified according to the kinds of values they can take.

### Discrete Random Variables

A discrete random variable takes isolated, countable values.  
These values can be listed individually, even if the list is infinite.

Discrete random variables typically arise from counting processes, such as the number
of successes in repeated trials or the outcome of a dice roll.

### Continuous Random Variables

A continuous random variable takes values from intervals of real numbers.  
Its possible values form a continuum rather than separate points.

Continuous random variables usually arise from measurement, such as time, length,
weight, or temperature.
`,
      before:``,
      after:``,
  
    },
    probability:{
  
      title:`Random Variables and Probability Statements`,
      content:`
Once outcomes are represented numerically, probability statements can be written in
terms of random variables.

Instead of describing events directly, we describe conditions on numerical values,
such as a variable equaling a value or falling within an interval.
This allows probabilities to be written in forms like the probability that a random
variable takes a specific value or lies between two bounds.

Rewriting events in this way makes probability expressions easier to analyze and
prepares the ground for probability functions and distributions introduced later.`,
      before:``,
      after:``,
  
    },
    matter:{
  
      title:`Why Random Variables Matter`,
      content:`
Random variables are the link that allows probability to move beyond describing events
and toward analyzing quantities.

They make it possible to summarize randomness using numbers, compare outcomes across
experiments, and study patterns in uncertain situations.  
Concepts such as averages, spread, dependence, and long-term behavior all rely on
random variables.

Without random variables, probability would remain purely event-based and could not
support distributions, expectation, variance, or any of the tools used in modern
probability and statistics.
`,
      before:``,
      after:``,
  
    },
    examples:{
  
      title:`Common Examples of Random Variables`,
      content:`
Random variables appear naturally whenever outcomes are counted or measured.

A coin-toss experiment may define a random variable as the number of heads obtained.  
Rolling dice can produce a random variable equal to the face value or the sum of
multiple rolls.  
In measurement-based experiments, a random variable may represent time, distance,
weight, or temperature.

In many models, simple indicator variables are used, taking the value 1 when an event
occurs and 0 when it does not.
`,
      before:``,
      after:``,
  
    },
    notation:{
  
      title:`Notation & Naming Conventions`,
      content:`
Random variables are typically written using capital letters, such as $X$, $Y$, or $Z$.  
Individual numerical outcomes associated with a random variable are written using
lowercase letters, such as $x$ or $y$.

The symbol for a random variable refers to the entire assignment rule, not to a single
observed number.  
A lowercase value represents a specific result obtained after the random experiment
has taken place.

Keeping this distinction clear is necessary for writing correct probability statements
and for understanding formulas introduced later.

`,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
  
    },
    next:{
  
      title:`What Comes Next`,
      content:`
Once randomness is represented numerically, probability can be described using
functions that assign probabilities to values or intervals.

Random variables lead directly to probability distributions and to tools that summarize
and analyze their behavior, such as expectation and variance.  
They also make it possible to study relationships between multiple quantities in joint
and conditional settings.

The next pages build on this idea by introducing probability distributions and the
functions used to describe them.
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
    i3:{
  
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
  title: "Random Variables: Turning Outcomes into Numbers",
  content: `
Probability begins with events, but many real questions are numerical:  
how many times something happens, how long it lasts, or how large a value turns out to be.

Random variables make this transition possible.  
They connect random experiments to numbers, allowing probability to describe counts,
measurements, and quantities in a precise and consistent way.

Once randomness is expressed numerically, probability can move forward — toward
distributions, averages, variability, and comparison of outcomes.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Random Variables | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/random-variables",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    {
        id:'outcomes',
        title:sectionsContent.outcomes.title,
        link:'',
        content:[
            sectionsContent.outcomes.content,
        ]
    },
    {
        id:'definition',
        title:sectionsContent.definition.content,
        link:'',
        content:''
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
        id:'probability',
        title:sectionsContent.probability.title,
        link:'',
        content:[
            sectionsContent.probability.content,
        ]
    },
    {
        id:'matter',
        title:sectionsContent.matter.title,
        link:'',
        content:[
            sectionsContent.matter.content,
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
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
            sectionsContent.notation.content,
            sectionsContent.notation.after,
        ]
    },
    {
        id:'next',
        title:sectionsContent.next.title,
        link:'',
        content:[
          sectionsContent.next.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Random Variables</h1>
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
