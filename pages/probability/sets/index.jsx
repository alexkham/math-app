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

//   const keyWords = [
//   'sets in probability',
//   'events and sets',
//   'sample space and events',
//   'probability set operations',
//   'what is a set in probability',
//   'sets and probability models',
//   'union and intersection probability',
//   'complements in probability',
//   'probability events examples',
//   'probability set notation'
// ];


//     const sectionsContent={

//     definition:{
//       title:`What Is a Set in Probability?`,
//       content:`
// A set in probability is simply a collection of possible outcomes of a random experiment. It plays the same structural role as a set in mathematics, but the focus is different.

// In set theory, a set is an abstract collection of objects with no context attached. In probability, a set always describes “what can happen” when an experiment is run. Its elements are outcomes, and these sets help us form events, define sample spaces, and build probability models.

// **Examples**:
// •  S{H, T}  — the outcomes of a coin toss
// • $ {1, 2, 3, 4, 5, 6}$ — the outcomes of a die roll
// • intervals like $[0, 5]$ — possible values of a continuous measurement

// In probability, sets are not abstract objects — they are the language we use to describe outcomes, events, and everything built on top of them.`,
//       before:``,
//       after:``,
  
  
//     },
//     purpose:{
//       title:`Why Sets Matter in Probability`,
//       content:`
// Sets matter in probability because they are the basic way we describe everything that can happen. Every outcome of a random experiment belongs to a set, and every event we talk about in probability is just a set of those outcomes. Once we see probability through sets, the entire structure becomes clearer: sample spaces become the “universe” of all outcomes, events become meaningful groups inside that universe, and probability models use these sets to assign chances to different possibilities.

// This is why sets come before every other concept — before events, before probability functions, and even before distributions. They give us the framework that all later ideas rely on.`,
//       before:``,
//       after:``,
  
//     },
  
//     types:{
  
//       title:`Types of Sets Used in Probability`,
//       content:`
// Probability deals with a few main kinds of sets, each matching a different type of random experiment. Some sets are small and finite, like the possible results of flipping a coin or rolling a die. Others are countably infinite, such as the set of non-negative integers when modeling counts. And in continuous situations, the sets are intervals on the real line, describing measurements that can take any value in a range. These different types of sets let us represent everything from simple discrete outcomes to full continuous scales, depending on the nature of the experiment.
// `,
//       before:``,
//       after:``,
  
//     },
//     operations:{
//       title:`Core Set Operations in Probability`,
//       content:`
// Probability uses the same basic operations as set theory, but with a different purpose. In set theory, union, intersection, complement, and difference are abstract tools for manipulating collections of objects. In probability, these operations gain a concrete interpretation: they describe how events relate to one another inside a sample space. The union of two events represents any outcome where at least one of them happens; the intersection represents outcomes where both occur; the complement represents the event “not happening”; and the difference keeps outcomes belonging to one event but not the other. When two events share no outcomes, they are disjoint. The full technical treatment of these operations belongs to the set-theory section, but here we use them as the machinery that turns real-life statements about uncertainty into precise events we can assign probabilities to.
// `,
//       before:``,
//       after:``,
  
//     },
//     events:{
//       title:`How Sets Become Events`,
//       content:`
// In probability, an event is nothing more than a set of outcomes. Once a sample space is defined, every meaningful statement about what might happen is translated into a set inside that space. Saying “the die shows an even number” becomes the set {2, 4, 6}; saying “the waiting time is less than 3 minutes” becomes the interval (0, 3). This translation is what turns everyday language into precise mathematical objects. Once an event is expressed as a set, all of probability’s tools—probabilities, complements, unions, intersections, conditional relationships—can be applied to it. In this way, sets are not just background structure; they are the actual form that events take.
// `,
//       before:``,
//       after:``,
  
//     },
//     models:{
//       title:`Sets Inside Probability Models`,
//       content:`
// A probability model is built from three parts: the sample space, the collection of events, and the rule that assigns probabilities. All three rely directly on sets. The sample space is the set of all possible outcomes. Events are subsets of that space that describe meaningful statements about the experiment. And the probability function assigns a numerical value to each event-set, telling us how likely it is to occur. Whether the model is a simple coin toss, a multi-step random process, or a continuous measurement, sets provide the structure that the probability assignment is built on. Without sets, there would be no way to organize outcomes or define events that probabilities can attach to.
// `,
//       before:``,
//       after:``,
  
//     },
//     mistakes:{
//       title:`Common Mistakes and Misunderstandings`,
//       content:`
// Several errors show up repeatedly when learners first connect sets to probability. One common mistake is confusing a single outcome with an event, even though an event can contain many outcomes. Another is mixing up union and intersection, which leads to incorrect interpretations such as treating “A or B” as “A and B.” Some people treat complements incorrectly by forgetting that they are defined relative to the entire sample space, not just the part of the problem they happen to be focusing on. In continuous settings, a frequent misunderstanding is expecting individual points to have nonzero probability, even though their probability is actually zero. Recognizing these mistakes early helps prevent deeper errors when working with conditional probability, independence, and probability distributions.
// `,
//       before:``,
//       after:``,
  
//     },
//     connection:{
//       title:`Connections to Other Probability Concepts`,
//       content:`
// Sets link directly to every major idea in probability. Sample spaces are simply the largest sets that describe every possible outcome. Events are subsets that capture specific conditions we care about. Probability functions assign numerical values to these event-sets, turning structure into measurable likelihoods. The cumulative distribution function (CDF) is built from sets of the form (−∞, x], and conditional probability is defined by comparing intersections of sets. Even independence is expressed through the relationship between event-sets and how their probabilities combine. Because every major concept rests on sets, understanding them makes the entire framework of probability much easier to navigate.
// `,
//       before:``,
//       after:``,
  
//     },


//     notation:{
  
//       title:`Notation Used for Sets in Probability`,
//       content:`
// Notation Used for Sets in Probability

// Probability relies on a small collection of symbols to describe outcomes, events, and their relationships inside a sample space. These symbols come from set theory but gain specific meaning when applied to probability models. Here is the notation used most often:

// • { } — lists the outcomes inside a set  
// • $∈$ — indicates that an outcome belongs to a set  
// • $∉$ — indicates that an outcome does not belong to a set  
// • $⊆$ — shows that one set is contained inside another  
// • $⊂$ — strict subset (contained but not equal)  
// • $∪$ — union of two sets (either event occurs)  
// • $∩$ — intersection of two sets (both events occur)  
// • \\ — difference of sets (in one event but not the other)  
// • $∅$ — the empty set, containing no outcomes  
// • $Ω$ — the full sample space of all possible outcomes  
// • $Aᶜ$ or $A′$ — the complement of event A  
// • $(a, b), [a, b], (−∞, x]$ — intervals used for continuous outcomes  
// • $|A|$ — the number of elements in a finite set A

// These symbols allow us to write events precisely, express how they relate to each other, and apply probability rules consistently.


// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Symbols and Notations](!/math-symbols/set-theory) →@
      
// `,
//       before:``,
//       after:``,
  
//     },
//     // obj5:{
  
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
  
//     // },
  
//   }


//   const introContent = {
//   id: "intro",
//   title: "Sets: The Starting Point of Probability",
//   content: `
// Probability starts with sets. Before we talk about events, sample spaces, random variables, or probability functions, we first need a way to describe “what can happen.” Sets give us that language. They let us collect outcomes, group them into meaningful events, combine them, compare them, and build the entire structure of probability on top of them. Once sets are in place, everything else in probability becomes much easier to define and understand.`
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/sets",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'definition',
//         title:sectionsContent.definition.title,
//         link:'',
//         content:[
//           sectionsContent.definition.content,
//         ]
//     },
//      {
//         id:'notation',
//         title:sectionsContent.notation.title,
//         link:'',
//         content:[
//           sectionsContent.notation.content,
//         ]
//     },
//     {
//         id:'purpose',
//         title:sectionsContent.purpose.title,
//         link:'',
//         content:[
//           sectionsContent.purpose.content,
//         ]
//     },
//     {
//         id:'types',
//         title:sectionsContent.types.title,
//         link:'',
//         content:[
//           sectionsContent.types.content,
//         ]
//     },
//     {
//         id:'operations',
//         title:sectionsContent.operations.title,
//         link:'',
//         content:[
//           sectionsContent.operations.content,
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
//         id:'models',
//         title:sectionsContent.models.title,
//         link:'',
//         content:[
//           sectionsContent.models.content,
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability of Sets</h1>
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


export async function getStaticProps(){

  const keyWords = [
    'sets in probability',
    'probability set theory',
    'events and sets',
    'sample space and sets',
    'probability set operations',
    'union intersection probability',
    'complement in probability',
    'set notation probability',
    'probability events as sets',
    'disjoint events',
    'sets and probability models',
    'finite infinite sets probability',
    'continuous sets probability',
    'set operations examples'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is a set in probability?",
      answer: "A set in probability is a collection of possible outcomes of a random experiment. Unlike abstract sets in set theory, sets in probability always describe 'what can happen' when an experiment is run. Their elements are outcomes, and these sets help form events, define sample spaces, and build probability models. Examples include {H, T} for a coin toss or {1, 2, 3, 4, 5, 6} for a die roll."
    },
    obj2: {
      question: "Why are sets important in probability?",
      answer: "Sets are the basic way we describe everything that can happen in probability. Every outcome belongs to a set, and every event is just a set of outcomes. Sample spaces become the 'universe' of all outcomes, events become meaningful groups inside that universe, and probability models use these sets to assign chances. Sets provide the framework that all later concepts—events, probability functions, and distributions—rely on."
    },
    obj3: {
      question: "What set operations are used in probability?",
      answer: "Probability uses union (at least one event happens), intersection (both events happen), complement (event not happening), and difference (in one event but not the other). When two events share no outcomes, they are disjoint. These operations turn real-life statements about uncertainty into precise events that can be assigned probabilities, describing how events relate inside a sample space."
    },
    obj4: {
      question: "How do sets become events in probability?",
      answer: "An event is simply a set of outcomes within a sample space. Meaningful statements about what might happen are translated into sets: 'die shows even number' becomes {2, 4, 6}; 'waiting time less than 3 minutes' becomes interval (0, 3). Once expressed as a set, probability's tools—complements, unions, intersections, conditional relationships—can be applied to it."
    },
    obj5: {
      question: "What types of sets are used in probability?",
      answer: "Probability uses three main types: finite sets for discrete outcomes like coin flips or die rolls, countably infinite sets for counts like non-negative integers, and continuous sets (intervals on the real line) for measurements that can take any value in a range. These different types let us represent everything from simple discrete outcomes to full continuous scales."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Sets in Probability",
      "description": "Learn sets in probability: definition, notation, types, set operations (union, intersection, complement), how sets become events, role in probability models, and connections to other concepts.",
      "url": "https://www.learnmathclass.com/probability/sets",
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
        "name": "Sets in Probability"
      },
      "teaches": [
        "What sets are in probability: collections of possible outcomes",
        "Why sets matter: framework for events, sample spaces, and models",
        "Types of sets: finite, countably infinite, continuous intervals",
        "Set operations: union, intersection, complement, difference, disjoint",
        "How sets become events: translating statements to subsets",
        "Sets in probability models: sample space, events, probability assignment",
        "Common mistakes: confusing outcomes with events, mixing operations",
        "Notation: {}, ∈, ⊆, ∪, ∩, ∅, Ω, complement symbols",
        "Connections: sample spaces, events, probability functions, CDF, independence"
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
          "name": "Sets in Probability",
          "item": "https://www.learnmathclass.com/probability/sets"
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
      title:`What Is a Set in Probability?`,
      content:`
A set in probability is simply a collection of possible outcomes of a random experiment. It plays the same structural role as a set in mathematics, but the focus is different.

In set theory, a set is an abstract collection of objects with no context attached. In probability, a set always describes "what can happen" when an experiment is run. Its elements are outcomes, and these sets help us form events, define sample spaces, and build probability models.

**Examples**:
•  S{H, T}  — the outcomes of a coin toss
• $ {1, 2, 3, 4, 5, 6}$ — the outcomes of a die roll
• intervals like $[0, 5]$ — possible values of a continuous measurement

In probability, sets are not abstract objects — they are the language we use to describe outcomes, events, and everything built on top of them.`,
      before:``,
      after:``,
  
  
    },
    purpose:{
      title:`Why Sets Matter in Probability`,
      content:`
Sets matter in probability because they are the basic way we describe everything that can happen. Every outcome of a random experiment belongs to a set, and every event we talk about in probability is just a set of those outcomes. Once we see probability through sets, the entire structure becomes clearer: sample spaces become the "universe" of all outcomes, events become meaningful groups inside that universe, and probability models use these sets to assign chances to different possibilities.

This is why sets come before every other concept — before events, before probability functions, and even before distributions. They give us the framework that all later ideas rely on.`,
      before:``,
      after:``,
  
    },
  
    types:{
  
      title:`Types of Sets Used in Probability`,
      content:`
Probability deals with a few main kinds of sets, each matching a different type of random experiment. Some sets are small and finite, like the possible results of flipping a coin or rolling a die. Others are countably infinite, such as the set of non-negative integers when modeling counts. And in continuous situations, the sets are intervals on the real line, describing measurements that can take any value in a range. These different types of sets let us represent everything from simple discrete outcomes to full continuous scales, depending on the nature of the experiment.
`,
      before:``,
      after:``,
  
    },
    operations:{
      title:`Core Set Operations in Probability`,
      content:`
Probability uses the same basic operations as set theory, but with a different purpose. In set theory, union, intersection, complement, and difference are abstract tools for manipulating collections of objects. In probability, these operations gain a concrete interpretation: they describe how events relate to one another inside a sample space. The union of two events represents any outcome where at least one of them happens; the intersection represents outcomes where both occur; the complement represents the event "not happening"; and the difference keeps outcomes belonging to one event but not the other. When two events share no outcomes, they are disjoint. The full technical treatment of these operations belongs to the set-theory section, but here we use them as the machinery that turns real-life statements about uncertainty into precise events we can assign probabilities to.
`,
      before:``,
      after:``,
  
    },
    events:{
      title:`How Sets Become Events`,
      content:`
In probability, an event is nothing more than a set of outcomes. Once a sample space is defined, every meaningful statement about what might happen is translated into a set inside that space. Saying "the die shows an even number" becomes the set {2, 4, 6}; saying "the waiting time is less than 3 minutes" becomes the interval (0, 3). This translation is what turns everyday language into precise mathematical objects. Once an event is expressed as a set, all of probability's tools—probabilities, complements, unions, intersections, conditional relationships—can be applied to it. In this way, sets are not just background structure; they are the actual form that events take.
`,
      before:``,
      after:``,
  
    },
    models:{
      title:`Sets Inside Probability Models`,
      content:`
A probability model is built from three parts: the sample space, the collection of events, and the rule that assigns probabilities. All three rely directly on sets. The sample space is the set of all possible outcomes. Events are subsets of that space that describe meaningful statements about the experiment. And the probability function assigns a numerical value to each event-set, telling us how likely it is to occur. Whether the model is a simple coin toss, a multi-step random process, or a continuous measurement, sets provide the structure that the probability assignment is built on. Without sets, there would be no way to organize outcomes or define events that probabilities can attach to.
`,
      before:``,
      after:``,
  
    },
    mistakes:{
      title:`Common Mistakes and Misunderstandings`,
      content:`
Several errors show up repeatedly when learners first connect sets to probability. One common mistake is confusing a single outcome with an event, even though an event can contain many outcomes. Another is mixing up union and intersection, which leads to incorrect interpretations such as treating "A or B" as "A and B." Some people treat complements incorrectly by forgetting that they are defined relative to the entire sample space, not just the part of the problem they happen to be focusing on. In continuous settings, a frequent misunderstanding is expecting individual points to have nonzero probability, even though their probability is actually zero. Recognizing these mistakes early helps prevent deeper errors when working with conditional probability, independence, and probability distributions.
`,
      before:``,
      after:``,
  
    },
    connection:{
      title:`Connections to Other Probability Concepts`,
      content:`
Sets link directly to every major idea in probability. Sample spaces are simply the largest sets that describe every possible outcome. Events are subsets that capture specific conditions we care about. Probability functions assign numerical values to these event-sets, turning structure into measurable likelihoods. The cumulative distribution function (CDF) is built from sets of the form (−∞, x], and conditional probability is defined by comparing intersections of sets. Even independence is expressed through the relationship between event-sets and how their probabilities combine. Because every major concept rests on sets, understanding them makes the entire framework of probability much easier to navigate.
`,
      before:``,
      after:``,
  
    },


    notation:{
  
      title:`Notation Used for Sets in Probability`,
      content:`
Notation Used for Sets in Probability

Probability relies on a small collection of symbols to describe outcomes, events, and their relationships inside a sample space. These symbols come from set theory but gain specific meaning when applied to probability models. Here is the notation used most often:

• { } — lists the outcomes inside a set  
• $∈$ — indicates that an outcome belongs to a set  
• $∉$ — indicates that an outcome does not belong to a set  
• $⊆$ — shows that one set is contained inside another  
• $⊂$ — strict subset (contained but not equal)  
• $∪$ — union of two sets (either event occurs)  
• $∩$ — intersection of two sets (both events occur)  
• \\ — difference of sets (in one event but not the other)  
• $∅$ — the empty set, containing no outcomes  
• $Ω$ — the full sample space of all possible outcomes  
• $Aᶜ$ or $A′$ — the complement of event A  
• $(a, b), [a, b], (−∞, x]$ — intervals used for continuous outcomes  
• $|A|$ — the number of elements in a finite set A

These symbols allow us to write events precisely, express how they relate to each other, and apply probability rules consistently.


@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Symbols and Notations](!/math-symbols/set-theory) →@
      
`,
      before:``,
      after:``,
  
    },
    // obj5:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
  
    // },
  
  }


  const introContent = {
    id: "intro",
    title: "Sets: The Starting Point of Probability",
    content: `
Probability starts with sets. Before we talk about events, sample spaces, random variables, or probability functions, we first need a way to describe "what can happen." Sets give us that language. They let us collect outcomes, group them into meaningful events, combine them, compare them, and build the entire structure of probability on top of them. Once sets are in place, everything else in probability becomes much easier to define and understand.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Sets in Probability: Foundation for Events and Models | Learn Math Class",
        description: "Learn sets in probability: definition, notation, types, set operations (union, intersection, complement), how sets become events, role in probability models, and connections to other concepts.",
        keywords: keyWords.join(", "),
        url: "/probability/sets",
        name: "Sets in Probability"
      }
    }
  }
}

export default function SetsInProbabilityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
        id:'operations',
        title:sectionsContent.operations.title,
        link:'',
        content:[
          sectionsContent.operations.content,
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
        id:'models',
        title:sectionsContent.models.title,
        link:'',
        content:[
          sectionsContent.models.content,
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability of Sets</h1>
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