// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'


// export async function getStaticProps(){

//  const keyWords = [
//   "random variable",
//   "random variables",
//   "discrete random variable",
//   "continuous random variable",
//   "probability random variable",
//   "outcomes to numbers",
//   "numerical outcomes",
//   "probability distributions",
//   "expectation",
//   "variance"
// ];


//     const sectionsContent={

//     outcomes:{
//       title:`From Outcomes to Numerical Values`,
//       content:`
// Random experiments produce outcomes, not numbers.  
// A coin toss results in heads or tails, a dice roll produces faces, and an experiment
// ends in one of many possible outcomes.

// Many probability questions, however, are not about the outcomes themselves but about
// numerical results derived from them.  
// Counting successes, summing values, or recording measurements all require assigning
// numbers to outcomes.

// A random variable performs exactly this role: it assigns a numerical value to each
// possible outcome of a random experiment, making quantitative probability analysis
// possible.
// `,
//       before:``,
//       after:``,
  
  
//     },
//     definition:{
//       title:`What a Random Variable Is`,
//       content:`
// A random variable is a rule that assigns a real number to each possible outcome of a
// random experiment.

// Each outcome is mapped to exactly one numerical value, though different outcomes may
// produce the same value.  
// The randomness does not come from the variable itself, but from the underlying
// experiment whose outcome is unknown in advance.

// By representing outcomes numerically, random variables allow probability to be
// expressed, analyzed, and manipulated using mathematical tools.
// `,
//       before:``,
//       after:``,
  
//     },
  
//     types:{
  
//       title:`Types of Random Variables`,
//       content:`
// Random variables are commonly classified according to the kinds of values they can take.

// ### Discrete Random Variables

// A discrete random variable takes isolated, countable values.  
// These values can be listed individually, even if the list is infinite.

// Discrete random variables typically arise from counting processes, such as the number
// of successes in repeated trials or the outcome of a dice roll.

// ### Continuous Random Variables

// A continuous random variable takes values from intervals of real numbers.  
// Its possible values form a continuum rather than separate points.

// Continuous random variables usually arise from measurement, such as time, length,
// weight, or temperature.
// `,
//       before:``,
//       after:``,
  
//     },
//     probability:{
  
//       title:`Random Variables and Probability Statements`,
//       content:`
// Once outcomes are represented numerically, probability statements can be written in
// terms of random variables.

// Instead of describing events directly, we describe conditions on numerical values,
// such as a variable equaling a value or falling within an interval.
// This allows probabilities to be written in forms like the probability that a random
// variable takes a specific value or lies between two bounds.

// Rewriting events in this way makes probability expressions easier to analyze and
// prepares the ground for probability functions and distributions introduced later.`,
//       before:``,
//       after:``,
  
//     },
//     matter:{
  
//       title:`Why Random Variables Matter`,
//       content:`
// Random variables are the link that allows probability to move beyond describing events
// and toward analyzing quantities.

// They make it possible to summarize randomness using numbers, compare outcomes across
// experiments, and study patterns in uncertain situations.  
// Concepts such as averages, spread, dependence, and long-term behavior all rely on
// random variables.

// Without random variables, probability would remain purely event-based and could not
// support distributions, expectation, variance, or any of the tools used in modern
// probability and statistics.
// `,
//       before:``,
//       after:``,
  
//     },
//     examples:{
  
//       title:`Common Examples of Random Variables`,
//       content:`
// Random variables appear naturally whenever outcomes are counted or measured.

// A coin-toss experiment may define a random variable as the number of heads obtained.  
// Rolling dice can produce a random variable equal to the face value or the sum of
// multiple rolls.  
// In measurement-based experiments, a random variable may represent time, distance,
// weight, or temperature.

// In many models, simple indicator variables are used, taking the value 1 when an event
// occurs and 0 when it does not.
// `,
//       before:``,
//       after:``,
  
//     },
//     notation:{
  
//       title:`Notation & Naming Conventions`,
//       content:`
// Random variables are typically written using capital letters, such as $X$, $Y$, or $Z$.  
// Individual numerical outcomes associated with a random variable are written using
// lowercase letters, such as $x$ or $y$.

// The symbol for a random variable refers to the entire assignment rule, not to a single
// observed number.  
// A lowercase value represents a specific result obtained after the random experiment
// has taken place.

// Keeping this distinction clear is necessary for writing correct probability statements
// and for understanding formulas introduced later.

// `,
//       before:``,
//       after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
  
//     },
//     next:{
  
//       title:`What Comes Next`,
//       content:`
// Once randomness is represented numerically, probability can be described using
// functions that assign probabilities to values or intervals.

// Random variables lead directly to probability distributions and to tools that summarize
// and analyze their behavior, such as expectation and variance.  
// They also make it possible to study relationships between multiple quantities in joint
// and conditional settings.

// The next pages build on this idea by introducing probability distributions and the
// functions used to describe them.
// `,
//       before:``,
//       after:``,
  
//     },
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     i3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Random Variables: Turning Outcomes into Numbers",
//   content: `
// Probability begins with events, but many real questions are numerical:  
// how many times something happens, how long it lasts, or how large a value turns out to be.

// Random variables make this transition possible.  
// They connect random experiments to numbers, allowing probability to describe counts,
// measurements, and quantities in a precise and consistent way.

// Once randomness is expressed numerically, probability can move forward — toward
// distributions, averages, variability, and comparison of outcomes.
// `
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Random Variables | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/random-variables",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'outcomes',
//         title:sectionsContent.outcomes.title,
//         link:'',
//         content:[
//             sectionsContent.outcomes.content,
//         ]
//     },
//     {
//         id:'definition',
//         title:sectionsContent.definition.title,
//         link:'',
//         content:[
//           sectionsContent.definition.content,
//         ]
//     },
//     {
//         id:'types',
//         title:sectionsContent.types.title,
//         link:'',
//         content:[
//             sectionsContent.types.content,
//         ]
//     },
//     {
//         id:'probability',
//         title:sectionsContent.probability.title,
//         link:'',
//         content:[
//             sectionsContent.probability.content,
//         ]
//     },
//     {
//         id:'matter',
//         title:sectionsContent.matter.title,
//         link:'',
//         content:[
//             sectionsContent.matter.content,
//         ]
//     },
//     {
//         id:'examples',
//         title:sectionsContent.examples.title,
//         link:'',
//         content:[
//             sectionsContent.examples.content,
//         ]
//     },
//     {
//         id:'notation',
//         title:sectionsContent.notation.title,
//         link:'',
//         content:[
//             sectionsContent.notation.content,
//             sectionsContent.notation.after,
//         ]
//     },
//     {
//         id:'next',
//         title:sectionsContent.next.title,
//         link:'',
//         content:[
//           sectionsContent.next.content,
//         ]
//     },
//     // {
//     //     id:'',
//     //     title:'',
//     //     link:'',
//     //     content:''
//     // },
//     // {
//     //     id:'',
//     //     title:'',
//     //     link:'',
//     //     content:''
//     // },
//     // {
//     //     id:'',
//     //     title:'',
//     //     link:'',
//     //     content:''
//     // },
//     // {
//     //     id:'',
//     //     title:'',
//     //     link:'',
//     //     content:''
//     // },

// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Random Variables</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//     secondaryNavMode="siblings"  // or "siblings"
//     secondaryNavTitle="Other Pages in Probability Section" 
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



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
import Image from 'next/image'


export async function getStaticProps(){

  const keyWords = [
    "random variable",
    "random variables",
    "discrete random variable",
    "continuous random variable",
    "random variable definition",
    "X notation probability",
    "outcomes to numbers",
    "numerical random outcomes",
    "discrete vs continuous",
    "probability distributions",
    "random variable examples",
    "expectation variance",
    "mapping outcomes",
    "random variable notation"
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a random variable?",
      answer: "A random variable is a rule that assigns a real number to each possible outcome of a random experiment. It maps outcomes (like heads/tails or dice faces) to numerical values, making quantitative probability analysis possible. The randomness comes from the underlying experiment whose outcome is unknown in advance, not from the variable itself."
    },
    obj2: {
      question: "What's the difference between discrete and continuous random variables?",
      answer: "A discrete random variable takes isolated, countable values that can be listed individually (like the number of heads in coin flips or dice outcomes). A continuous random variable takes values from intervals of real numbers, forming a continuum rather than separate points (like measurements of time, length, weight, or temperature)."
    },
    obj3: {
      question: "Why do we need random variables in probability?",
      answer: "Random variables are the link that allows probability to move beyond describing events toward analyzing quantities. They make it possible to summarize randomness using numbers, compare outcomes across experiments, and study patterns. Concepts like averages, spread, dependence, and long-term behavior all rely on random variables. Without them, probability could not support distributions, expectation, variance, or modern statistical tools."
    },
    obj4: {
      question: "How are random variables notated?",
      answer: "Random variables are typically written using capital letters like X, Y, or Z. Individual numerical outcomes are written using lowercase letters like x or y. The capital letter refers to the entire assignment rule (the random variable itself), while the lowercase represents a specific result obtained after the experiment. This distinction is necessary for writing correct probability statements."
    },
    obj5: {
      question: "What are common examples of random variables?",
      answer: "Random variables appear whenever outcomes are counted or measured: the number of heads in coin tosses, the face value or sum of dice rolls, time until an event occurs, distance measurements, weight or temperature readings, and indicator variables that equal 1 when an event occurs and 0 when it doesn't."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Random Variables",
      "description": "Learn random variables: mapping outcomes to numbers, discrete vs continuous types, probability statements, notation, examples, and connection to distributions and expectations.",
      "url": "https://www.learnmathclass.com/probability/random-variables",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Random Variables"
      },
      "teaches": [
        "From outcomes to numerical values: why we need numbers",
        "Definition: rule assigning real numbers to experiment outcomes",
        "Discrete random variables: countable, isolated values",
        "Continuous random variables: intervals and continua",
        "Writing probability statements with random variables",
        "Why random variables matter: link to quantitative analysis",
        "Common examples: counts, measurements, indicators",
        "Notation: capital letters for variables, lowercase for values",
        "Connection to probability distributions and expectations",
        "Foundation for averages, variance, and dependence"
      ],
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
    },

    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Random Variables",
          "item": "https://www.learnmathclass.com/probability/random-variables"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }

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

Random variables provide a means to quantify and manipulate probabilities using mathematical tools such as calculus. They offer a flexible and powerful framework for modeling various real-world phenomena that exhibit randomness. For example, consider rolling a [six-sided die](!/probability/models/dice-roll): the outcome of this event can be represented by a random variable X, which takes on values ranging from 1 to 6 with equal probability.

Random variables are essential in probability theory and statistics, as they allow for the development of [probability distributions](!/probability/distributions), such as the binomial distribution, normal distribution, and Poisson distribution. These distributions describe the likelihood of various outcomes occurring and provide important insights into the behavior of random [events](!/probability/events).

One can also define continuous random variables to represent outcomes that can take on an infinite number of values within a given range. For instance, the height of adult humans or the lifetime of a light bulb may be modeled as continuous random variables.

In summary, a random variable is a powerful mathematical tool for representing and analyzing the outcomes of random events using probabilistic methods. By assigning real numbers to each possible outcome of an experiment, we can study [probability distributions](!/probability/distributions), make predictions, and optimize decisions in various fields, including finance, engineering, economics, and science.
`,
      before:`
      A random variable is a mathematical construct that represents the numerical outcome of a random experiment or [event](!/probability/events). It acts as a function that assigns real numbers to each possible outcome of the experiment, with the understanding that multiple outcomes may result in the same value. The randomness associated with a random variable stems from the unpredictable nature of the underlying event, rather than the variable itself.


      `,
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
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Random Variables: Mapping Outcomes to Numbers | Learn Math Class",
        description: "Learn random variables: mapping outcomes to numbers, discrete vs continuous types, probability statements, notation, examples, and connection to distributions and expectations.",
        keywords: keyWords.join(", "),
        url: "/probability/random-variables",
        name: "Random Variables"
      }
    }
  }
}

export default function RandomVariablesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
        title:sectionsContent.definition.title,
        link:'',
        content:[

          sectionsContent.definition.before,
          <div key={'definition'} style={{transform:'scale(0.8)'}}>
          <Image
                     src='/probability/random variables.png'
                      alt="Description"
                     width={1200}
                     height={700}
                     />
                     </div>,
          sectionsContent.definition.content,
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
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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