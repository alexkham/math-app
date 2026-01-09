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

//   const keyWords = [
//   'probability events',
//   'sample space events',
//   'mutually exclusive events',
//   'independent events',
//   'complementary events',
//   'union of events',
//   'intersection of events',
//   'event probability',
//   'disjoint events',
//   'probability theory'
// ]

//     const sectionsContent={

//     sample:{
//       title:`Sample Space and Events`,
//       content:`
// In probability we start with the idea of a *sample space*: the collection of all possible outcomes of an experiment or situation. Once this full list of possibilities exists, we naturally group some of them together into meaningful situations — these are the **events** we reason about.

// An event might contain just one outcome or many of them. What matters is that it represents a situation we care about: “the result is 4,” “the value falls in a certain range,” “the system enters a failure mode,” and so on.

// Seeing events as groups of outcomes is what allows us to compare possibilities, describe relationships between them, and eventually assign probabilities. The sample space provides the universe; events provide the structure we work with inside it.
// `,
//       before:``,
//       after:``,
  
  
//     },
//     types:{
//       title:`Event Structure and Types`,
//       content:`
// Events can take many forms depending on how outcomes are grouped together. Some events capture a very specific situation, while others represent broad conditions that include many possibilities. A few patterns appear repeatedly:

// - **Elementary event** — a situation containing exactly one outcome.
// - **Empty event** — a situation that cannot happen.
// - **Certain event** — a situation that always happens.
// - **Complement** — everything that is “not” the event.
// - **Union** — a situation where one event *or* another occurs.
// - **Intersection** — a situation where events occur *together*.
// - **Disjoint events** — situations that cannot both occur.
// - **Difference (A − B)** — situations in A that do not include B.

// These forms reflect how we describe possibilities in real situations. Some events are narrow and precise; others are broad and flexible. All of them help us organize uncertainty in a structured way.
// `,
//       before:``,
//       after:``,
  
//     },
//     sets:{
//       title:`Set-Theoretic View`,
//       content:`
// Events behave exactly like sets, and this is not an accident. Each event corresponds to a collection of outcomes, so the natural operations on events mirror the operations on sets.

// This view makes probability easier to work with. Union becomes the event that happens when at least one situation holds. Intersection captures situations that happen together. Complements describe everything outside the event. Relationships such as subsets, equality, and overlap all come directly from basic set structure.

// Venn diagrams fit perfectly here: they visualize how events relate, how they overlap, and how they combine. Thinking of events as sets gives a clear geometric intuition that supports every later concept in probability.
// `,
//       before:``,
//       after:``,
  
//     },
//     relations:{
//       title:`Relations Between Events`,
//       content:`
// Once events are viewed as sets, natural relationships between them become clear. Some events fit entirely inside others, some overlap, and some exclude each other completely. These relationships shape how we reason about uncertainty.

// - **Subset (A ⊆ B)** — whenever A happens, B happens as well.
// - **Equality of events** — two events represent exactly the same situations.
// - **Disjointness** — events share no outcomes; they cannot occur together.
// - **Overlap** — events share some situations but not all.
// - **Partitions** — a collection of disjoint events that cover all possibilities.
// - **Difference** — the part of one event that does not include the other.

// These relationships are the backbone of how events combine, how they are compared, and how more advanced ideas like conditional probability and total probability are built.
// `,
//       before:``,
//       after:``,
  
//     },
//     assignement:{
//       title:`Events and Probability Assignments
// `,
//       content:`
//       Probabilities are attached to events, not to individual outcomes in isolation. Once events are understood as meaningful collections of outcomes, assigning probabilities becomes the way we measure how likely these situations are to occur.

// Larger events naturally represent more possibilities, and smaller events represent fewer. When two events cannot happen together, their chances simply add. When events overlap, their probabilities interact through the structure of that overlap.

// This section does not introduce formulas yet — only the intuitive idea that probability is a measure placed on events, and the structure of the events themselves determines how those probabilities behave.
// `,
//       before:``,
//       after:``,
  
//     },
  
//     independence:{
  
//       title:`Independence `,
//       content:`
// Sometimes two events do not influence each other in any meaningful way. When knowing that one occurs tells us nothing about whether the other occurs, we treat them as **independent**. This idea appears constantly in real situations: repeated measurements, separate components in a system, unrelated conditions, or outcomes that come from different sources.

// Independence is not about numbers yet — it is about the absence of connection. When events are independent, their occurrence patterns do not interact. When they are not independent, the presence of one event changes how we think about the other.

// This conceptual distinction is crucial, because almost every larger structure in probability — conditional probability, total probability, Bayes’ reasoning, and random variables — behaves differently depending on whether events influence each other or not.
// `,
//       before:``,
//       after:``,
  
//     },
//     conditional:{
//       title:`Conditional Events `,
//       content:`
// Sometimes we want to understand an event under the assumption that another event has already occurred. In these situations we effectively narrow our focus: instead of considering all possible outcomes, we look only at those consistent with the given condition.

// This creates a **conditional event** — the part of one event that lives inside another. Visually, it is the portion of A that lies within B when we view both as regions in a Venn diagram.

// Thinking this way captures a common real-world pattern: information changes how we view possibilities. Once a condition is known, the space of relevant outcomes shrinks, and the status of other events must be evaluated relative to that restricted space.

// This idea prepares the ground for conditional probability and forms a key step toward concepts like total probability and Bayes' reasoning.
// `,
//       before:``,
//       after:``,
  
//     },
//     patterns:{
//       title:`Common Event Patterns in Problems`,
//       content:`
// Certain forms of events appear again and again in probability questions. Recognizing these patterns makes it easier to break down situations and understand how different possibilities interact.

// - **“At least one”** — captures situations where any one of several conditions is enough.
// - **“Exactly k”** — focuses on a specific number of occurrences.
// - **Complements** — useful when it’s easier to describe what does *not* happen.
// - **Case-based events** — describing a situation by splitting it into separate scenarios.
// - **Nested events** — one event happening inside a broader condition.

// These patterns are not special rules; they are simply common ways real situations get translated into event language. Once you see these structures, many probability problems become much clearer.
// `,
//       before:``,
//       after:``,
  
//     },
//     connections:{
//       title:`Connections to Other Probability Topics`,
//       content:`
// Events sit at the foundation of nearly everything in probability, and many later concepts are just refinements of how events behave.

// - **Sample spaces** provide the universe from which events are formed.
// - **Conditional probability** examines events under restricted information.
// - **Independence** describes when events do not influence each other.
// - **Total probability** breaks an event into its contributions across cases.
// - **Bayes’ reasoning** re-evaluates events when new information arrives.
// - **Random variables** turn outcomes into numerical values, but still rely on events underneath.

// Seeing these connections early helps unify the subject: no matter how advanced the topic becomes, it always comes back to understanding how events relate to one another.
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
//   title: "What We Call an Event",
//   content: `
// In probability, we don’t work with isolated outcomes. We work with **events** — the meaningful scenarios built from those outcomes. Whenever we say things like “the result is even,” “the sensor triggers,” or “the value exceeds a threshold,” we are referring to these scenarios.

// Events are the starting point for everything that follows. They are the objects we compare, combine, restrict, and analyze as we move toward deeper ideas. Concepts such as conditional probability, independence, the law of total probability, Bayes’ reasoning, and even the foundations of random variables all rely on how events behave.

// This page presents the idea of events and shows how they form the basic language of probability before any formulas or calculations appear.
// `
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Events in Probability | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/events",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function EventsPage({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'sample',
//         title:sectionsContent.sample.title,
//         link:'',
//         content:[
//             sectionsContent.sample.content,
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
//         id:'sets',
//         title:sectionsContent.sets.title,
//         link:'',
//         content:[
//             sectionsContent.sets.content,
//         ]
//     },
//     {
//         id:'relations',
//         title:sectionsContent.relations.title,
//         link:'',
//         content:[
//             sectionsContent.relations.content,
//         ]
//     },
//     {
//         id:'assignement',
//         title:sectionsContent.assignement.title,
//         link:'',
//         content:[
//             sectionsContent.assignement.content,
//         ]
//     },
//     {
//         id:'independence',
//         title:sectionsContent.independence.title,
//         link:'',
//         content:[
//             sectionsContent.independence.content,
//         ]
//     },
//     {
//         id:'conditional',
//         title:sectionsContent.conditional.title,
//         link:'',
//         content:[
//           sectionsContent.conditional.content,
//         ]
//     },
//     {
//         id:'patterns',
//         title:sectionsContent.patterns.title,
//         link:'',
//         content:[
//           sectionsContent.patterns.content,
//         ]
//     },
//     {
//         id:'connections',
//         title:sectionsContent.connections.title,
//         link:'',
//         content:[
//           sectionsContent.connections.content,
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Events in Probability</h1>
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
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords = [
    'events in probability',
    'probability events',
    'sample space',
    'mutually exclusive events',
    'independent events',
    'complementary events',
    'union of events',
    'intersection of events',
    'disjoint events',
    'event operations',
    'set theory probability',
    'Venn diagrams probability',
    'conditional events',
    'event relationships'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is an event in probability?",
      answer: "An event is a meaningful collection of outcomes from a sample space. Events represent situations we care about, such as 'the result is 4' or 'the value falls in a certain range.' They can contain one outcome or many, and serve as the basic objects we reason about, compare, and assign probabilities to in probability theory."
    },
    obj2: {
      question: "How are events related to sample space?",
      answer: "The sample space is the collection of all possible outcomes of an experiment. Events are formed by grouping some of these outcomes together into meaningful situations. The sample space provides the universe of possibilities, while events provide the structure we work with inside it."
    },
    obj3: {
      question: "What is the difference between union and intersection of events?",
      answer: "The union of events represents a situation where one event or another occurs - at least one happens. The intersection captures situations where events occur together - both happen simultaneously. Union uses 'or' logic while intersection uses 'and' logic, reflecting how we combine possibilities."
    },
    obj4: {
      question: "What does it mean for events to be independent?",
      answer: "Events are independent when knowing that one occurs tells us nothing about whether the other occurs - they do not influence each other. Independence means their occurrence patterns do not interact, and the presence of one event does not change how we think about the other."
    },
    obj5: {
      question: "How do events relate to set theory?",
      answer: "Events behave exactly like sets - each event corresponds to a collection of outcomes. Set operations mirror event operations: union becomes 'or', intersection becomes 'and', complements describe what's outside the event, and relationships like subsets and overlap come directly from set structure. Venn diagrams visualize these relationships perfectly."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Events in Probability",
      "description": "Learn probability events: how outcomes group into meaningful situations. Understand sample space, event operations, union, intersection, independence, and set-theoretic foundations.",
      "url": "https://www.learnmathclass.com/probability/events",
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
        "name": "Events in Probability"
      },
      "teaches": [
        "How events are formed from sample space outcomes",
        "Event types: elementary, empty, certain, complement, union, intersection, disjoint",
        "Set-theoretic view of events and Venn diagram interpretations",
        "Relationships between events: subsets, equality, disjointness, partitions",
        "How probability assignments attach to events",
        "Independence: when events do not influence each other",
        "Conditional events and restricted sample spaces",
        "Common event patterns in probability problems"
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
          "name": "Events in Probability",
          "item": "https://www.learnmathclass.com/probability/events"
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

    sample:{
      title:`Sample Space and Events`,
      content:`
In probability we start with the idea of a *sample space*: the collection of all possible outcomes of an experiment or situation. Once this full list of possibilities exists, we naturally group some of them together into meaningful situations — these are the **events** we reason about.

An event might contain just one outcome or many of them. What matters is that it represents a situation we care about: "the result is 4," "the value falls in a certain range," "the system enters a failure mode," and so on.

Seeing events as groups of outcomes is what allows us to compare possibilities, describe relationships between them, and eventually assign probabilities. The sample space provides the universe; events provide the structure we work with inside it.
`,
      before:``,
      after:``,
  
  
    },
    types:{
      title:`Event Structure and Types`,
      content:`
Events can take many forms depending on how outcomes are grouped together. Some events capture a very specific situation, while others represent broad conditions that include many possibilities. A few patterns appear repeatedly:

- **Elementary event** — a situation containing exactly one outcome.
- **Empty event** — a situation that cannot happen.
- **Certain event** — a situation that always happens.
- **Complement** — everything that is "not" the event.
- **Union** — a situation where one event *or* another occurs.
- **Intersection** — a situation where events occur *together*.
- **Disjoint events** — situations that cannot both occur.
- **Difference (A − B)** — situations in A that do not include B.

These forms reflect how we describe possibilities in real situations. Some events are narrow and precise; others are broad and flexible. All of them help us organize uncertainty in a structured way.
`,
      before:``,
      after:``,
  
    },
    sets:{
      title:`Set-Theoretic View`,
      content:`
Events behave exactly like sets, and this is not an accident. Each event corresponds to a collection of outcomes, so the natural operations on events mirror the operations on sets.

This view makes probability easier to work with. Union becomes the event that happens when at least one situation holds. Intersection captures situations that happen together. Complements describe everything outside the event. Relationships such as subsets, equality, and overlap all come directly from basic set structure.

Venn diagrams fit perfectly here: they visualize how events relate, how they overlap, and how they combine. Thinking of events as sets gives a clear geometric intuition that supports every later concept in probability.
`,
      before:``,
      after:``,
  
    },
    relations:{
      title:`Relations Between Events`,
      content:`
Once events are viewed as sets, natural relationships between them become clear. Some events fit entirely inside others, some overlap, and some exclude each other completely. These relationships shape how we reason about uncertainty.

- **Subset (A ⊆ B)** — whenever A happens, B happens as well.
- **Equality of events** — two events represent exactly the same situations.
- **Disjointness** — events share no outcomes; they cannot occur together.
- **Overlap** — events share some situations but not all.
- **Partitions** — a collection of disjoint events that cover all possibilities.
- **Difference** — the part of one event that does not include the other.

These relationships are the backbone of how events combine, how they are compared, and how more advanced ideas like conditional probability and total probability are built.
`,
      before:``,
      after:``,
  
    },
    assignement:{
      title:`Events and Probability Assignments
`,
      content:`
      Probabilities are attached to events, not to individual outcomes in isolation. Once events are understood as meaningful collections of outcomes, assigning probabilities becomes the way we measure how likely these situations are to occur.

Larger events naturally represent more possibilities, and smaller events represent fewer. When two events cannot happen together, their chances simply add. When events overlap, their probabilities interact through the structure of that overlap.

This section does not introduce formulas yet — only the intuitive idea that probability is a measure placed on events, and the structure of the events themselves determines how those probabilities behave.
`,
      before:``,
      after:``,
  
    },
  
    independence:{
  
      title:`Independence `,
      content:`
Sometimes two events do not influence each other in any meaningful way. When knowing that one occurs tells us nothing about whether the other occurs, we treat them as **independent**. This idea appears constantly in real situations: repeated measurements, separate components in a system, unrelated conditions, or outcomes that come from different sources.

Independence is not about numbers yet — it is about the absence of connection. When events are independent, their occurrence patterns do not interact. When they are not independent, the presence of one event changes how we think about the other.

This conceptual distinction is crucial, because almost every larger structure in probability — conditional probability, total probability, Bayes' reasoning, and random variables — behaves differently depending on whether events influence each other or not.
`,
      before:``,
      after:``,
  
    },
    conditional:{
      title:`Conditional Events `,
      content:`
Sometimes we want to understand an event under the assumption that another event has already occurred. In these situations we effectively narrow our focus: instead of considering all possible outcomes, we look only at those consistent with the given condition.

This creates a **conditional event** — the part of one event that lives inside another. Visually, it is the portion of A that lies within B when we view both as regions in a Venn diagram.

Thinking this way captures a common real-world pattern: information changes how we view possibilities. Once a condition is known, the space of relevant outcomes shrinks, and the status of other events must be evaluated relative to that restricted space.

This idea prepares the ground for conditional probability and forms a key step toward concepts like total probability and Bayes' reasoning.
`,
      before:``,
      after:``,
  
    },
    patterns:{
      title:`Common Event Patterns in Problems`,
      content:`
Certain forms of events appear again and again in probability questions. Recognizing these patterns makes it easier to break down situations and understand how different possibilities interact.

- **"At least one"** — captures situations where any one of several conditions is enough.
- **"Exactly k"** — focuses on a specific number of occurrences.
- **Complements** — useful when it's easier to describe what does *not* happen.
- **Case-based events** — describing a situation by splitting it into separate scenarios.
- **Nested events** — one event happening inside a broader condition.

These patterns are not special rules; they are simply common ways real situations get translated into event language. Once you see these structures, many probability problems become much clearer.
`,
      before:``,
      after:``,
  
    },
    connections:{
      title:`Connections to Other Probability Topics`,
      content:`
Events sit at the foundation of nearly everything in probability, and many later concepts are just refinements of how events behave.

- **Sample spaces** provide the universe from which events are formed.
- **Conditional probability** examines events under restricted information.
- **Independence** describes when events do not influence each other.
- **Total probability** breaks an event into its contributions across cases.
- **Bayes' reasoning** re-evaluates events when new information arrives.
- **Random variables** turn outcomes into numerical values, but still rely on events underneath.

Seeing these connections early helps unify the subject: no matter how advanced the topic becomes, it always comes back to understanding how events relate to one another.
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
    title: "What We Call an Event",
    content: `
In probability, we don't work with isolated outcomes. We work with **events** — the meaningful scenarios built from those outcomes. Whenever we say things like "the result is even," "the sensor triggers," or "the value exceeds a threshold," we are referring to these scenarios.

Events are the starting point for everything that follows. They are the objects we compare, combine, restrict, and analyze as we move toward deeper ideas. Concepts such as conditional probability, independence, the law of total probability, Bayes' reasoning, and even the foundations of random variables all rely on how events behave.

This page presents the idea of events and shows how they form the basic language of probability before any formulas or calculations appear.
`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Events in Probability: Sample Space and Event Operations | Learn Math Class",
        description: "Learn probability events: how outcomes group into meaningful situations. Understand sample space, event operations, union, intersection, independence, and set-theoretic foundations.",
        keywords: keyWords.join(", "),
        url: "/probability/events",
        name: "Events in Probability"
      }
    }
  }
}

export default function EventsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    {
        id:'sample',
        title:sectionsContent.sample.title,
        link:'',
        content:[
            sectionsContent.sample.content,
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
        id:'sets',
        title:sectionsContent.sets.title,
        link:'',
        content:[
            sectionsContent.sets.content,
        ]
    },
    {
        id:'relations',
        title:sectionsContent.relations.title,
        link:'',
        content:[
            sectionsContent.relations.content,
        ]
    },
    {
        id:'assignement',
        title:sectionsContent.assignement.title,
        link:'',
        content:[
            sectionsContent.assignement.content,
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
        id:'conditional',
        title:sectionsContent.conditional.title,
        link:'',
        content:[
          sectionsContent.conditional.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Events in Probability</h1>
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