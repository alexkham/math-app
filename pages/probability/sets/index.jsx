


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords = [
//     'sets in probability',
//     'probability set theory',
//     'events and sets',
//     'sample space and sets',
//     'probability set operations',
//     'union intersection probability',
//     'complement in probability',
//     'set notation probability',
//     'probability events as sets',
//     'disjoint events',
//     'sets and probability models',
//     'finite infinite sets probability',
//     'continuous sets probability',
//     'set operations examples'
//   ]

//   const faqQuestions = {
//     obj1: {
//       question: "What is a set in probability?",
//       answer: "A set in probability is a collection of possible outcomes of a random experiment. Unlike abstract sets in set theory, sets in probability always describe 'what can happen' when an experiment is run. Their elements are outcomes, and these sets help form events, define sample spaces, and build probability models. Examples include {H, T} for a coin toss or {1, 2, 3, 4, 5, 6} for a die roll."
//     },
//     obj2: {
//       question: "Why are sets important in probability?",
//       answer: "Sets are the basic way we describe everything that can happen in probability. Every outcome belongs to a set, and every event is just a set of outcomes. Sample spaces become the 'universe' of all outcomes, events become meaningful groups inside that universe, and probability models use these sets to assign chances. Sets provide the framework that all later concepts—events, probability functions, and distributions—rely on."
//     },
//     obj3: {
//       question: "What set operations are used in probability?",
//       answer: "Probability uses union (at least one event happens), intersection (both events happen), complement (event not happening), and difference (in one event but not the other). When two events share no outcomes, they are disjoint. These operations turn real-life statements about uncertainty into precise events that can be assigned probabilities, describing how events relate inside a sample space."
//     },
//     obj4: {
//       question: "How do sets become events in probability?",
//       answer: "An event is simply a set of outcomes within a sample space. Meaningful statements about what might happen are translated into sets: 'die shows even number' becomes {2, 4, 6}; 'waiting time less than 3 minutes' becomes interval (0, 3). Once expressed as a set, probability's tools—complements, unions, intersections, conditional relationships—can be applied to it."
//     },
//     obj5: {
//       question: "What types of sets are used in probability?",
//       answer: "Probability uses three main types: finite sets for discrete outcomes like coin flips or die rolls, countably infinite sets for counts like non-negative integers, and continuous sets (intervals on the real line) for measurements that can take any value in a range. These different types let us represent everything from simple discrete outcomes to full continuous scales."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Sets in Probability",
//       "description": "Learn sets in probability: definition, notation, types, set operations (union, intersection, complement), how sets become events, role in probability models, and connections to other concepts.",
//       "url": "https://www.learnmathclass.com/probability/sets",
//       "inLanguage": "en-US",
//       "learningResourceType": "Explanation",
//       "educationalLevel": "High School, College",
//       "educationalUse": "Learning",
//       "audience": {
//         "@type": "EducationalAudience",
//         "educationalRole": "student"
//       },
//       "about": {
//         "@type": "Thing",
//         "name": "Sets in Probability"
//       },
//       "teaches": [
//         "What sets are in probability: collections of possible outcomes",
//         "Why sets matter: framework for events, sample spaces, and models",
//         "Types of sets: finite, countably infinite, continuous intervals",
//         "Set operations: union, intersection, complement, difference, disjoint",
//         "How sets become events: translating statements to subsets",
//         "Sets in probability models: sample space, events, probability assignment",
//         "Common mistakes: confusing outcomes with events, mixing operations",
//         "Notation: {}, ∈, ⊆, ∪, ∩, ∅, Ω, complement symbols",
//         "Connections: sample spaces, events, probability functions, CDF, independence"
//       ],
//       "keywords": keyWords.join(", "),
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString()
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Probability",
//           "item": "https://www.learnmathclass.com/probability"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Sets in Probability",
//           "item": "https://www.learnmathclass.com/probability/sets"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }

//   const sectionsContent={

//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Random Variable](!/probability/definitions#random_variable) — an indicator is a binary-valued random variable
// - [Bernoulli Distribution](!/probability/definitions#bernoulli_distribution) — an indicator follows a Bernoulli distribution
// - [Expected Value](!/probability/definitions#expected_value) — $E[\\mathbf{1}_A] = P(A)$
// - [Event](!/probability/definitions#event) — the event $A$ that the indicator tracks`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },

//     definition:{
//       title:`What Is a Set in Probability?`,
//       content:`
// A set in probability is simply a collection of possible outcomes of a random experiment. It plays the same structural role as a set in mathematics, but the focus is different.

// In set theory, a set is an abstract collection of objects with no context attached. In probability, a set always describes "what can happen" when an experiment is run. Its elements are outcomes, and these sets help us form events, define sample spaces, and build probability models.

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
// Sets matter in probability because they are the basic way we describe everything that can happen. Every outcome of a random experiment belongs to a set, and every event we talk about in probability is just a set of those outcomes. Once we see probability through sets, the entire structure becomes clearer: sample spaces become the "universe" of all outcomes, events become meaningful groups inside that universe, and probability models use these sets to assign chances to different possibilities.

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
// Probability uses the same basic operations as set theory, but with a different purpose. In set theory, union, intersection, complement, and difference are abstract tools for manipulating collections of objects. In probability, these operations gain a concrete interpretation: they describe how events relate to one another inside a sample space. The union of two events represents any outcome where at least one of them happens; the intersection represents outcomes where both occur; the complement represents the event "not happening"; and the difference keeps outcomes belonging to one event but not the other. When two events share no outcomes, they are disjoint. The full technical treatment of these operations belongs to the set-theory section, but here we use them as the machinery that turns real-life statements about uncertainty into precise events we can assign probabilities to.
// `,
//       before:``,
//       after:``,
  
//     },
//     events:{
//       title:`How Sets Become Events`,
//       content:`
// In probability, an event is nothing more than a set of outcomes. Once a sample space is defined, every meaningful statement about what might happen is translated into a set inside that space. Saying "the die shows an even number" becomes the set {2, 4, 6}; saying "the waiting time is less than 3 minutes" becomes the interval (0, 3). This translation is what turns everyday language into precise mathematical objects. Once an event is expressed as a set, all of probability's tools—probabilities, complements, unions, intersections, conditional relationships—can be applied to it. In this way, sets are not just background structure; they are the actual form that events take.
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
// Several errors show up repeatedly when learners first connect sets to probability. One common mistake is confusing a single outcome with an event, even though an event can contain many outcomes. Another is mixing up union and intersection, which leads to incorrect interpretations such as treating "A or B" as "A and B." Some people treat complements incorrectly by forgetting that they are defined relative to the entire sample space, not just the part of the problem they happen to be focusing on. In continuous settings, a frequent misunderstanding is expecting individual points to have nonzero probability, even though their probability is actually zero. Recognizing these mistakes early helps prevent deeper errors when working with conditional probability, independence, and probability distributions.
// `,
//       before:``,
//       after:``,
  
//     },
//     connection:{
//       title:`Connections to Other Probability Concepts`,
//       content:`
// Sets link directly to every major idea in probability. [Sample spaces](!/probability/sample-space) are simply the largest sets that describe every possible outcome. Events are subsets that capture specific conditions we care about. Probability functions assign numerical values to these event-sets, turning structure into measurable likelihoods. The cumulative distribution function (CDF) is built from sets of the form (−∞, x], and conditional probability is defined by comparing intersections of sets. Even independence is expressed through the relationship between event-sets and how their probabilities combine. Because every major concept rests on sets, understanding them makes the entire framework of probability much easier to navigate.
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

// These symbols allow us to write [events](!/probability/events) precisely, express how they relate to each other, and apply probability rules consistently.


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
//     id: "intro",
//     title: "Sets: The Starting Point of Probability",
//     content: `
// Probability starts with sets. Before we talk about events, sample spaces, random variables, or probability functions, we first need a way to describe "what can happen." Sets give us that language. They let us collect outcomes, group them into meaningful events, combine them, compare them, and build the entire structure of probability on top of them. Once sets are in place, everything else in probability becomes much easier to define and understand.`
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Sets in Probability: Foundation for Events and Models | Learn Math Class",
//         description: "Learn sets in probability: definition, notation, types, set operations (union, intersection, complement), how sets become events, role in probability models, and connections to other concepts.",
//         keywords: keyWords.join(", "),
//         url: "/probability/sets",
//         name: "Sets in Probability"
//       }
//     }
//   }
// }

// export default function SetsInProbabilityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
//   const genericSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//           sectionsContent.obj0.after,
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
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability of Sets</h1>
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
//      <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


// tables-optimized: v4 | 2026-05-22 | 3 tables (operations aggregation, mistakes aggregation, summary capstone)


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


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

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- v4 TABLES ----------

  // operations — aggregation: 5 set operations × symbol × set meaning × probability meaning
  const operationsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Operation</th>
      <th style="${tableHeaders.aggregation}">Symbol</th>
      <th style="${tableHeaders.aggregation}">Set meaning</th>
      <th style="${tableHeaders.aggregation}">Probability meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Union</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A &cup; B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">elements in A, in B, or in both</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">at least one of the events occurs</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Intersection</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A &cap; B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">elements in both A and B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both events occur simultaneously</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Complement</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A<sup>c</sup> or A&prime;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">elements of &Omega; that are not in A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">event A does not occur</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A \\ B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">elements in A but not in B</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A occurs and B does not</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Disjoint</td>
      <td style="padding: 12px 15px; color: #34495e;">A &cap; B = &empty;</td>
      <td style="padding: 12px 15px; color: #34495e;">A and B share no elements</td>
      <td style="padding: 12px 15px; color: #34495e;">the two events cannot both occur</td>
    </tr>
  </tbody>
</table>
`

  // mistakes — aggregation: 4 misconceptions × what is actually correct
  const mistakesTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Mistake</th>
      <th style="${tableHeaders.aggregation}">What is actually correct</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Treating a single outcome as an event</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an event is a set of outcomes; a single outcome is one element of such a set</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Mixing up union and intersection</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&ldquo;A or B&rdquo; is the union A &cup; B; &ldquo;A and B&rdquo; is the intersection A &cap; B</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Taking complements against a partial set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the complement A<sup>c</sup> is defined relative to the entire sample space &Omega;, not a subregion</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Expecting individual points to have nonzero probability (continuous)</td>
      <td style="padding: 12px 15px; color: #34495e;">in continuous settings, single points have probability zero; only intervals carry positive probability</td>
    </tr>
  </tbody>
</table>
`

  // summary capstone: 10 probability concepts × set-theoretic definition
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Probability concept</th>
      <th style="${tableHeaders.summary}">Set-theoretic definition</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/sample-space" style="${linkStyle}">Sample space</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the set &Omega; containing every possible outcome of the experiment</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Outcome</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a single element of &Omega;</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/events" style="${linkStyle}">Event</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any subset of &Omega;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Impossible event</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the empty set &empty;</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Certain event</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the full sample space &Omega;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">&ldquo;A or B&rdquo;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the union A &cup; B</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">&ldquo;A and B&rdquo;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the intersection A &cap; B</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">&ldquo;not A&rdquo;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the complement A<sup>c</sup> = &Omega; \\ A</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Disjoint events</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two events A, B with A &cap; B = &empty;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Probability of an event</td>
      <td style="padding: 12px 15px; color: #34495e;">a number P(A) assigned to a subset A of &Omega; by the probability function</td>
    </tr>
  </tbody>
</table>
`

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

    obj0: {
  title: `Key Terms`,
  content: `
- [Random Variable](!/probability/definitions#random_variable) — an indicator is a binary-valued random variable
- [Bernoulli Distribution](!/probability/definitions#bernoulli_distribution) — an indicator follows a Bernoulli distribution
- [Expected Value](!/probability/definitions#expected_value) — $E[\\mathbf{1}_A] = P(A)$
- [Event](!/probability/definitions#event) — the event $A$ that the indicator tracks`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

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
Sets link directly to every major idea in probability. [Sample spaces](!/probability/sample-space) are simply the largest sets that describe every possible outcome. Events are subsets that capture specific conditions we care about. Probability functions assign numerical values to these event-sets, turning structure into measurable likelihoods. The cumulative distribution function (CDF) is built from sets of the form (−∞, x], and conditional probability is defined by comparing intersections of sets. Even independence is expressed through the relationship between event-sets and how their probabilities combine. Because every major concept rests on sets, understanding them makes the entire framework of probability much easier to navigate.
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

These symbols allow us to write [events](!/probability/events) precisely, express how they relate to each other, and apply probability rules consistently.


@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@
      
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Set Theory Symbols and Notations](!/math-symbols/set-theory) →@
      
`,
      before:``,
      after:``,
  
    },

    summary:{
      title:`Sets and Probability at a Glance`,
      content:`
The page has shown that sets are not just background scaffolding — they are the language probability speaks. Every concept introduced so far reduces, when read carefully, to a precise statement about subsets of a sample space. The table below collects this correspondence in one place: each major probability concept is paired with its set-theoretic definition, making explicit the mapping that runs through every section of the page.`,
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
      operationsTable,
      mistakesTable,
      summaryTable,
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

export default function SetsInProbabilityPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  operationsTable,
  mistakesTable,
  summaryTable,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
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
          <div key={'operations-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: operationsTable }} />,
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
          <div key={'mistakes-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: mistakesTable }} />,
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
    {
        id:'summary',
        title:sectionsContent.summary.title,
        link:'',
        content:[
          sectionsContent.summary.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
]

  return (
   <>
   <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability of Sets</h1>
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
     <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}