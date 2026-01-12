// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'


// export async function getStaticProps(){

// // const keyWords = [
// //   'sample space',
// //   'outcomes in probability',
// //   'types of sample spaces',
// //   'finite and infinite sample spaces',
// //   'events as subsets of the sample space',
// //   'representing outcomes',
// //   'probability experiment outcomes'
// // ];


// const keyWords = [
//   // Core
//   'sample space',
//   'sample space in probability',
//   'definition of sample space',
//   'probability sample space',

//   // Supporting
//   'outcomes in probability',
//   'possible outcomes',
//   'listing outcomes',
//   'representing sample space',
//   'finite sample space',
//   'infinite sample space',
//   'continuous sample space',
//   'discrete sample space',
//   'types of sample spaces',

//   // Event-related
//   'events as subsets of sample space',
//   'event subsets',
//   'probability of events sample space',
//   'sample space and events',

//   // Technical
//   // 'omega notation in probability',
//   // 'omega sample space',
//   // 'outcome notation',
//   // 'cartesian product sample space',
//   // 'set-builder sample space',

//   // Long-tail
//   // 'how to define a sample space',
//   // 'sample space examples probability',
//   // 'sample space for experiments',
//   // 'difference between events and sample space',
//   // 'how to represent a sample space',
//   // 'sample space for two-step experiments',
//   // 'continuous sample space examples',

//   // People Also Ask
//   // 'what is a sample space',
//   // 'how do you list a sample space',
//   // 'why is sample space important',
//   // 'what are outcomes in probability',
//   // 'how do events relate to sample space'
// ];



//     const sectionsContent={

//     definition:{
//       title:`Definition of Sample Space`,
//       content:`
// The sample space is the complete collection of all possible outcomes a scenario can produce. Every outcome that can happen belongs to it, and anything that cannot happen is not included.

// Each outcome represents one full, specific result of the situation. Together, these outcomes form the background on which events are defined and probabilities are assigned.

// **Examples**:
// Rolling a die → {1, 2, 3, 4, 5, 6}
//  Tossing two coins → {HH, HT, TH, TT}
//  Measuring a persons height → all real numbers in an interval (for example, [0, 3] meters)
// `,
//       before:``,
//       after:``,
  
  
//     },
//     notation:{
//       title:`Useful Notation
// `,
//       content:`
//       Before working with sample spaces in probability, a few standard symbols are used to describe outcomes and the sets they belong to:

// $\(\\Omega\)$ — the sample space (the set of all possible outcomes)
//  $\(\\omega\)$ — a single outcome (an element of $\(\\Omega\))$
//  \{\ \} — explicit listing of outcomes for finite sample spaces
//  Set-builder notation, e.g. $\(\\{x : x > 0\\}\)$
//  Intervals for continuous outcomes, e.g. $\([0,\\infty)\)$
//  Cartesian products for multi-step scenarios, e.g. $\(\\Omega = A \\times B\)$
//  Events as subsets of the sample space: $\(A \\subseteq \\Omega\)$

// These symbols will appear throughout the page whenever we describe outcomes or refer to parts of the sample space.

// `,
//       before:``,
//       after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
  
//     },
  
//     types:{
  
//       title:`Types of Sample Spaces`,
//       content:`
// Different scenarios produce different kinds of sample spaces. They generally fall into a few common categories:

// - **Finite sample spaces:** a limited number of outcomes, e.g. rolling a die  
//   $\(\\Omega = \{1,2,3,4,5,6\}\)$

// - **Countably infinite sample spaces:** outcomes can be listed in sequence, e.g. number of trials until first success  
//   $\(\\Omega = \{1,2,3,\\ldots\}\)$

// - **Uncountable or continuous sample spaces:** outcomes fill an interval or region, e.g. measuring time or height  
//   $\(\\Omega = [0,\\infty)\)$

// These categories help determine how probabilities are assigned and what tools are used to work with the sample space.
// `,
//       before:``,
//       after:``,
  
//     },
//     outcomes:{
//       title:`Listing and Representing Outcomes`,
//       content:`
// Once the sample space is identified, it can be written in different ways depending on the scenario and the size of the outcome set:

// - **Explicit lists** for small finite spaces, e.g.  
//   $\(\\Omega = \{1,2,3,4,5,6\}\)$

// - **Ordered pairs** for multi-step experiments, e.g. two coin tosses  
//   $\(\\Omega = \{(H,H), (H,T), (T,H), (T,T)\}\)$

// - **Sequences or tuples** when more than two components are involved, e.g. three dice  
//   $\(\\Omega = \{(x_1, x_2, x_3) : x_i \in \{1,\ldots,6\}\}\)$

// - **Intervals** when outcomes vary continuously, e.g. a measurement  
//   $\(\\Omega = [0,1]\)$

// - **Set-builder notation** for describing outcomes by a rule, e.g.  
//   $\(\\Omega = \{x : 0 \le x \le 10\}\)$

// - **Cartesian products** for combining simpler spaces, e.g.  
//   $\(\\Omega = A \\times B\)$

// These representations make it easier to see how outcomes are organized and how events will be formed from them.
// `,
//       before:``,
//       after:``,
  
//     },
//     properties:{
//       title:`Properties of a Sample Space`,
//       content:`
// A sample space is not just any set—it must satisfy a few basic requirements so that probability can be defined consistently:

// • It must include **every** outcome that can occur in the scenario.
// • It must exclude outcomes that **cannot** occur.
// • Its outcomes must be **mutually exclusive** (only one outcome happens in a single trial).
// • Its outcomes must be **collectively exhaustive** (something from the set must occur).
// • Events are formed by selecting subsets of the sample space: \(A \subseteq \Omega\).

// These properties ensure that probabilities assigned to events make sense and behave consistently.
// `,
//       before:``,
//       after:``,
  
//     },
//     events:{
//       title:`Relationship to Events`,
//       content:`
// Events are built directly from the sample space. An event is simply a subset of \(\Omega\) that collects the outcomes we care about in a particular question.

// • If $\(\\Omega\)$ describes everything that can happen, an event selects the outcomes where something specific happens.
// • For a die roll with $\(\\Omega = \{1,2,3,4,5,6\}\)$, the event “roll an even number” is \(\{2,4,6\}\).
// • For two coin tosses with $\(\\Omega = \{(H,H),(H,T),(T,H),(T,T)\}\)$, the event “at least one head” is \(\{(H,H),(H,T),(T,H)\}\).
// • For a continuous outcome like height, an event might be an interval such as \([1.6, 1.8]\).

// Viewing events as subsets of $\(\\Omega\)$ makes probability assignments consistent and ties every event back to the underlying structure of the scenario.
// `,
//       before:``,
//       after:``,
  
//     },
//     practice:{
//       title:`Sample Space in Practice`,
//       content:`
// Different situations lead to different forms of sample spaces. A few common examples show how the idea appears in everyday probability questions:

// • A die roll: $\(\\Omega = \{1,2,3,4,5,6\}\)$
// • A deck draw: $\(\\Omega =\)$ all 52 individual cards
// • Two coin tosses: $\(\Omega = \{(H,H), (H,T), (T,H), (T,T)\}\)$
// • Measuring a person’s height: $\(\\Omega = [0,3]\)$
// • Time until an event occurs: $\(\\Omega = [0,\infty)\)$
// • Choosing two items without replacement: outcomes are ordered pairs of objects

// These examples show how the structure of $\(\\Omega\)$ changes with the scenario, but the idea remains the same: it captures every outcome the situation can produce.
// `,
//       before:``,
//       after:``,
  
//     },
//     mistakes:{
//       title:`Common Mistakes`,
//       content:`
// • Leaving out outcomes that actually can occur in the scenario  
// • Including outcomes that cannot occur  
// • Ignoring the order of outcomes when order matters  
// • Mixing outcomes of different types within the same sample space  
// • Using an incomplete \(\Omega\), which leads to incorrect event definitions or wrong probabilities  

// A correct sample space removes ambiguity and prevents errors in later calculations.
// `,
//       before:``,
//       after:``,
  
//     },
//     connection:{
//       title:`Connections to Other Concepts`,
//       content:`
// • Events are subsets of $\(\\Omega\)$, built directly from the sample space  
// • Probability of events is defined only after $\(\\Omega\)$ is fixed  
// • Random variables map outcomes in $\(\\Omega\)$ to numerical values  
// • Joint sample spaces describe outcomes of several variables together  
// • Independence and dependence are interpreted through how outcomes combine in $\(\\Omega\)$  

// The sample space anchors every other concept in probability, making it the natural starting point for the entire subject.
// `,
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
//   title: "Sample Space — The First Step in Probability",
//   content: `
// As explained on the page about the probability of events, probability compares the outcomes we want to the full set of outcomes that could happen. The basic expression we already introduced there is:

// **Probability = (favourable outcomes) / (all possible outcomes)**

// Since “all possible outcomes” appears directly in the formula, it makes sense to understand what this collection actually is and how we identify it for different situations. That collection is the **sample space**. It describes every outcome the scenario can produce and forms the foundation for defining events and assigning probabilities.
// `
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Sample Spaces in Probability | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/sample-space",
//          name: "Sample Spaces"
//       },
        
//        }
//     }
//    }

// export default function SampleSpacePage({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'definition',
//         title:sectionsContent.definition.title,
//         link:'',
//         content:[
//             sectionsContent.definition.content,
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
//         id:'types',
//         title:sectionsContent.types.title,
//         link:'',
//         content:[
//             sectionsContent.types.content,
//         ]
//     },
//     {
//         id:'outcomes',
//         title:sectionsContent.outcomes.title,
//         link:'',
//         content:[
//           sectionsContent.outcomes.content,
//         ]
//     },
//     {
//         id:'properties',
//         title:sectionsContent.properties.title,
//         link:'',
//         content:[
//           sectionsContent.properties.content,
//         ]
//     },
//     {
//         id:'events',
//         title:sectionsContent.events.title,
//         link:'',
//         content:[
//           sectionsContent.events.content,
//         ]
//     },
//     {
//         id:'practice',
//         title:sectionsContent.practice.title,
//         link:'',
//         content:[
//           sectionsContent.practice.content,
//         ]
//     },
//     {
//         id:'mistakes',
//         title:sectionsContent.mistakes.title,
//         link:'',
//         content:[
//           sectionsContent.mistakes.content,
//         ]
//     },
//     {
//         id:'connection',
//         title:sectionsContent.connection.title,
//         link:'',
//         content:[
//           sectionsContent.connection.content,
//         ]
//     },
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Sample Space</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "siblings"
//          secondaryNavTitle="More in Probability Section"
   
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
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
    'sample space',
    'sample space probability',
    'sample space definition',
    'outcomes in probability',
    'possible outcomes',
    'finite sample space',
    'infinite sample space',
    'continuous sample space',
    'discrete sample space',
    'Omega notation',
    'types of sample spaces',
    'events as subsets',
    'sample space and events',
    'listing outcomes probability'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a sample space in probability?",
      answer: "The sample space is the complete collection of all possible outcomes a scenario can produce. Every outcome that can happen belongs to it, and anything that cannot happen is not included. Each outcome represents one full, specific result of the situation. For example, rolling a die has sample space {1, 2, 3, 4, 5, 6}."
    },
    obj2: {
      question: "What are the different types of sample spaces?",
      answer: "Sample spaces fall into three categories: finite sample spaces with a limited number of outcomes (like rolling a die: {1,2,3,4,5,6}), countably infinite sample spaces where outcomes can be listed in sequence (like {1,2,3,...}), and uncountable or continuous sample spaces where outcomes fill an interval (like [0,∞) for measuring time)."
    },
    obj3: {
      question: "How do events relate to the sample space?",
      answer: "Events are built directly from the sample space as subsets that collect the outcomes we care about. If the sample space describes everything that can happen, an event selects specific outcomes where something particular happens. For example, with die roll sample space {1,2,3,4,5,6}, the event 'roll an even number' is the subset {2,4,6}."
    },
    obj4: {
      question: "What properties must a sample space have?",
      answer: "A sample space must: include every outcome that can occur in the scenario, exclude outcomes that cannot occur, have mutually exclusive outcomes (only one outcome happens per trial), be collectively exhaustive (something from the set must occur), and allow events to be formed as subsets. These properties ensure probabilities behave consistently."
    },
    obj5: {
      question: "How do you represent a sample space?",
      answer: "Sample spaces can be represented using: explicit lists for small finite spaces {1,2,3,4,5,6}, ordered pairs for multi-step experiments like {(H,H), (H,T), (T,H), (T,T)}, intervals for continuous outcomes like [0,1], set-builder notation {x : 0 ≤ x ≤ 10}, or Cartesian products for combining spaces. The representation depends on the scenario and size of the outcome set."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Sample Space",
      "description": "Learn sample space in probability: definition, notation, types (finite, infinite, continuous), listing outcomes, properties, relationship to events, and practical examples.",
      "url": "https://www.learnmathclass.com/probability/sample-space",
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
        "name": "Sample Space"
      },
      "teaches": [
        "Definition: complete collection of all possible outcomes",
        "Notation: Ω for sample space, ω for single outcome, set notation",
        "Types: finite, countably infinite, uncountable/continuous",
        "Listing and representing outcomes: explicit lists, pairs, intervals",
        "Properties: exhaustive, mutually exclusive, complete",
        "Relationship to events: events as subsets of sample space",
        "Sample space in practice: dice, coins, measurements, time",
        "Common mistakes: incomplete outcomes, wrong order, mixed types",
        "Connections: events, probability, random variables, independence"
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
          "name": "Sample Space",
          "item": "https://www.learnmathclass.com/probability/sample-space"
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

    definition:{
      title:`Definition of Sample Space`,
      content:`
The sample space is the complete collection of all possible outcomes a scenario can produce. Every outcome that can happen belongs to it, and anything that cannot happen is not included.

Each outcome represents one full, specific result of the situation. Together, these outcomes form the background on which events are defined and probabilities are assigned.

**Examples**:
Rolling a die → {1, 2, 3, 4, 5, 6}
 Tossing two coins → {HH, HT, TH, TT}
 Measuring a persons height → all real numbers in an interval (for example, [0, 3] meters)
`,
      before:``,
      after:``,
  
  
    },
    notation:{
      title:`Useful Notation
`,
      content:`
      Before working with sample spaces in probability, a few standard symbols are used to describe outcomes and the sets they belong to:

$\(\\Omega\)$ — the sample space (the set of all possible outcomes)
 $\(\\omega\)$ — a single outcome (an element of $\(\\Omega\))$
 \{\ \} — explicit listing of outcomes for finite sample spaces
 Set-builder notation, e.g. $\(\\{x : x > 0\\}\)$
 Intervals for continuous outcomes, e.g. $\([0,\\infty)\)$
 Cartesian products for multi-step scenarios, e.g. $\(\\Omega = A \\times B\)$
 Events as subsets of the sample space: $\(A \\subseteq \\Omega\)$

These symbols will appear throughout the page whenever we describe outcomes or refer to parts of the sample space.

`,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
  
    },
  
    types:{
  
      title:`Types of Sample Spaces`,
      content:`
Different scenarios produce different kinds of sample spaces. They generally fall into a few common categories:

- **Finite sample spaces:** a limited number of outcomes, e.g. rolling a die  
  $\(\\Omega = \{1,2,3,4,5,6\}\)$

- **Countably infinite sample spaces:** outcomes can be listed in sequence, e.g. number of trials until first success  
  $\(\\Omega = \{1,2,3,\\ldots\}\)$

- **Uncountable or continuous sample spaces:** outcomes fill an interval or region, e.g. measuring time or height  
  $\(\\Omega = [0,\\infty)\)$

These categories help determine how probabilities are assigned and what tools are used to work with the sample space.
`,
      before:``,
      after:``,
  
    },
    outcomes:{
      title:`Listing and Representing Outcomes`,
      content:`
Once the sample space is identified, it can be written in different ways depending on the scenario and the size of the outcome set:

- **Explicit lists** for small finite spaces, e.g.  
  $\(\\Omega = \{1,2,3,4,5,6\}\)$

- **Ordered pairs** for multi-step experiments, e.g. two coin tosses  
  $\(\\Omega = \{(H,H), (H,T), (T,H), (T,T)\}\)$

- **Sequences or tuples** when more than two components are involved, e.g. three dice  
  $\(\\Omega = \{(x_1, x_2, x_3) : x_i \in \{1,\ldots,6\}\}\)$

- **Intervals** when outcomes vary continuously, e.g. a measurement  
  $\(\\Omega = [0,1]\)$

- **Set-builder notation** for describing outcomes by a rule, e.g.  
  $\(\\Omega = \{x : 0 \le x \le 10\}\)$

- **Cartesian products** for combining simpler spaces, e.g.  
  $\(\\Omega = A \\times B\)$

These representations make it easier to see how outcomes are organized and how events will be formed from them.
`,
      before:``,
      after:``,
  
    },
    properties:{
      title:`Properties of a Sample Space`,
      content:`
A sample space is not just any set—it must satisfy a few basic requirements so that probability can be defined consistently:

• It must include **every** outcome that can occur in the scenario.
• It must exclude outcomes that **cannot** occur.
• Its outcomes must be **mutually exclusive** (only one outcome happens in a single trial).
• Its outcomes must be **collectively exhaustive** (something from the set must occur).
• Events are formed by selecting subsets of the sample space: \(A \subseteq \Omega\).

These properties ensure that probabilities assigned to events make sense and behave consistently.
`,
      before:``,
      after:``,
  
    },
    events:{
      title:`Relationship to Events`,
      content:`
Events are built directly from the sample space. An event is simply a subset of \(\Omega\) that collects the outcomes we care about in a particular question.

• If $\(\\Omega\)$ describes everything that can happen, an event selects the outcomes where something specific happens.
• For a die roll with $\(\\Omega = \{1,2,3,4,5,6\}\)$, the event "roll an even number" is \(\{2,4,6\}\).
• For two coin tosses with $\(\\Omega = \{(H,H),(H,T),(T,H),(T,T)\}\)$, the event "at least one head" is \(\{(H,H),(H,T),(T,H)\}\).
• For a continuous outcome like height, an event might be an interval such as \([1.6, 1.8]\).

Viewing events as subsets of $\(\\Omega\)$ makes probability assignments consistent and ties every event back to the underlying structure of the scenario.
`,
      before:``,
      after:``,
  
    },
    practice:{
      title:`Sample Space in Practice`,
      content:`
Different situations lead to different forms of sample spaces. A few common examples show how the idea appears in everyday probability questions:

• A die roll: $\(\\Omega = \{1,2,3,4,5,6\}\)$
• A deck draw: $\(\\Omega =\)$ all 52 individual cards
• Two coin tosses: $\(\Omega = \{(H,H), (H,T), (T,H), (T,T)\}\)$
• Measuring a person's height: $\(\\Omega = [0,3]\)$
• Time until an event occurs: $\(\\Omega = [0,\infty)\)$
• Choosing two items without replacement: outcomes are ordered pairs of objects

These examples show how the structure of $\(\\Omega\)$ changes with the scenario, but the idea remains the same: it captures every outcome the situation can produce.
`,
      before:``,
      after:``,
  
    },
    mistakes:{
      title:`Common Mistakes`,
      content:`
• Leaving out outcomes that actually can occur in the scenario  
• Including outcomes that cannot occur  
• Ignoring the order of outcomes when order matters  
• Mixing outcomes of different types within the same sample space  
• Using an incomplete \(\Omega\), which leads to incorrect event definitions or wrong probabilities  

A correct sample space removes ambiguity and prevents errors in later calculations.
`,
      before:``,
      after:``,
  
    },
    connection:{
      title:`Connections to Other Concepts`,
      content:`
• Events are subsets of $\(\\Omega\)$, built directly from the sample space  
• Probability of events is defined only after $\(\\Omega\)$ is fixed  
• Random variables map outcomes in $\(\\Omega\)$ to numerical values  
• Joint sample spaces describe outcomes of several variables together  
• Independence and dependence are interpreted through how outcomes combine in $\(\\Omega\)$  

The sample space anchors every other concept in probability, making it the natural starting point for the entire subject.
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
    title: "Sample Space — The First Step in Probability",
    content: `
As explained on the page about the probability of events, probability compares the outcomes we want to the full set of outcomes that could happen. The basic expression we already introduced there is:

**Probability = (favourable outcomes) / (all possible outcomes)**

Since "all possible outcomes" appears directly in the formula, it makes sense to understand what this collection actually is and how we identify it for different situations. That collection is the **sample space**. It describes every outcome the scenario can produce and forms the foundation for defining events and assigning probabilities.
`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Sample Space: All Possible Outcomes in Probability | Learn Math Class",
        description: "Learn sample space in probability: definition, notation, types (finite, infinite, continuous), listing outcomes, properties, relationship to events, and practical examples.",
        keywords: keyWords.join(", "),
        url: "/probability/sample-space",
        name: "Sample Space"
      }
    }
  }
}

export default function SampleSpacePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
            sectionsContent.notation.content,
            sectionsContent.notation.after,
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
        id:'outcomes',
        title:sectionsContent.outcomes.title,
        link:'',
        content:[
          sectionsContent.outcomes.content,
        ]
    },
    {
        id:'properties',
        title:sectionsContent.properties.title,
        link:'',
        content:[
          sectionsContent.properties.content,
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
        id:'practice',
        title:sectionsContent.practice.title,
        link:'',
        content:[
          sectionsContent.practice.content,
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
        id:'connection',
        title:sectionsContent.connection.title,
        link:'',
        content:[
          sectionsContent.connection.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Sample Space</h1>
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
   {/* <ScrollUpButton/> */}
   </>
  )
}