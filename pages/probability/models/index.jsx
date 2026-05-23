


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords = [
//     'probability models',
//     'probability model definition',
//     'sample space and events',
//     'probability framework',
//     'random experiment model',
//     'model vs distribution',
//     'random variable vs model',
//     'discrete probability model',
//     'probability model assumptions',
//     'mathematical probability model',
//     'coin toss model',
//     'dice roll model',
//     'probability modeling',
//     'model outcomes events'
//   ]

//   const faqQuestions = {
//     obj1: {
//       question: "What is a probability model?",
//       answer: "A probability model is a mathematical description of a random situation that specifies the set of all possible outcomes, which collections of outcomes are considered events, and how probabilities are assigned to those events. It defines how randomness is generated, not what is later measured from it."
//     },
//     obj2: {
//       question: "Why does probability use models instead of dealing with reality directly?",
//       answer: "Real-world situations are too complex to analyze directly. Probability models replace reality with simplified structures that capture only the random mechanism of interest by stripping away irrelevant details, making assumptions explicit, and allowing repeated reasoning under controlled conditions. Any probabilistic conclusion is conditional on the chosen model."
//     },
//     obj3: {
//       question: "What's the difference between a probability model and a distribution?",
//       answer: "A probability model defines a space of outcomes and their probabilities. A distribution is the probability law induced by a random variable defined on that model. The order is: model → random variable → distribution. The model supplies randomness, the random variable selects what is measured, and the distribution records the resulting probabilities. Distributions describe results, not processes; models describe processes, not results."
//     },
//     obj4: {
//       question: "What do all probability models have in common?",
//       answer: "At the core of every probability model are: a list of possible outcomes the experiment may produce, collections of outcomes treated as meaningful events, and numerical weights expressing how likely those events are. This structure is universal regardless of context—coins, dice, cards, measurements, or simulations all fit into the same abstract framework."
//     },
//     obj5: {
//       question: "What assumptions do probability models make?",
//       answer: "Every probability model rests on explicit choices including: outcomes are treated as symmetric, trials don't influence each other, the same mechanism is repeated each time, and whether the outcome space is finite or infinite. These assumptions are inputs to the model, not conclusions. Changing an assumption changes the model and therefore all results derived from it."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Probability Models",
//       "description": "Learn probability models: mathematical descriptions of random situations. Understand sample spaces, events, probability assignments, models vs distributions, random variables, and modeling assumptions.",
//       "url": "https://www.learnmathclass.com/probability/models",
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
//         "name": "Probability Models"
//       },
//       "teaches": [
//         "What probability models are: outcomes, events, and probability assignments",
//         "Why probability uses models instead of direct reality",
//         "Common elements all probability models share",
//         "Relationship: model → random variable → distribution",
//         "One distribution can arise from many different models",
//         "One model can produce many distributions via different random variables",
//         "Modeling assumptions and their role",
//         "Simple discrete models: coin toss, dice roll",
//         "From simple models to richer ones",
//         "Models vs reality: constructed objects isolating random mechanisms"
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
//           "name": "Probability Models",
//           "item": "https://www.learnmathclass.com/probability/models"
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
// - [Random Experiment](!/probability/definitions#random_experiment) — a process whose outcome is uncertain
// - [Sample Space](!/probability/definitions#sample_space) — the set $\\Omega$ of all possible outcomes a model defines
// - [Event](!/probability/definitions#event) — a subset of the sample space assigned a probability
// - [Probability Measure](!/probability/definitions#probability_measure) — the function $P$ completing the model specification
// - [Equally Likely Events](!/probability/definitions#equally_likely_events) — the simplifying assumption in classical models`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },

//     obj1:{
//       title:`What Is a Probability Model`,
//       content:`
// A probability model is a mathematical description of a random situation.

// It specifies:
// • the set of all possible outcomes
// • which collections of outcomes are considered events
// • how probabilities are assigned to those events

// The model defines **how randomness is generated**, not what is later measured from it.  
// Questions about averages, counts, or numerical outcomes arise only after additional structure is placed on the model.
// `,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:`Why Probability Uses Models`,
//       content:`
// Real-world situations are too complex to analyze directly.  
// Probability works by replacing reality with a simplified structure that captures only the random mechanism of interest.

// Models make this possible by:
// • stripping away irrelevant details
// • making assumptions explicit
// • allowing repeated reasoning under controlled conditions

// Any conclusion drawn in probability is therefore conditional on the model being used.  
// The quality of a probabilistic result depends not on how realistic a situation feels, but on how appropriate the chosen model is for the question being asked.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:`What all Probability Models Have in Common`,
//       content:`
// Probability models may look different on the surface, but they are built from the same basic ingredients.

// At the core of every model are:
// • a list of possible outcomes the experiment may produce
// • collections of outcomes treated as meaningful events
// • numerical weights expressing how likely those events are

// Nothing in this structure depends on the story behind the model.  
// Coins, dice, cards, measurements, or simulations all fit into the same abstract framework.

// This is why probability theory can move freely between different contexts:  
// the interpretation changes, but the underlying machinery does not.
// `,
//       before:``,
//       after:``,
//       link:'',
//       plagiarism:'yes',
  
//     },
//     obj4:{
//       title:`Models, Random Variables, and Distributions`,
//       content:`
// A probability model defines a space of outcomes and their probabilities.

// A **random variable** is a function defined on that space:

// $\[X : S \\rightarrow \\mathbb{R}\]$

// A **distribution** is the probability law induced by that function:

// $\[P(X \\in A)\]$

// The order is fixed:

// model → random variable → distribution

// The model supplies randomness.  
// The random variable selects what is measured.  
// The distribution records the resulting probabilities.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:`One Distribution, Many Models`,
//       content:`
// A probability distribution does not uniquely identify how randomness was produced.

// The same distribution may arise from:
// • different outcome spaces
// • different experimental setups
// • different probability assignments

// Once a distribution is formed, the mechanism that generated it is no longer visible.

// Distributions describe *results*, not *processes*.  
// Models describe *processes*, not results.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:`One Model, Many Distributions`,
//       content:`
// Fix a probability model $(S,\mathcal{E},P)$.

// Different random variables can be defined on the same model:

// $\[X_1, X_2, \\dots : S \\rightarrow \\mathbb{R}.\]$

// Each choice produces its own distribution:

// $\[P(X_k \\in A), \\quad A \\subseteq \\mathbb{R}.\]$

// By changing the mapping (not the model), the resulting distribution may be:
// • discrete
// • continuous
// • mixed

// The model remains unchanged.  
// Only the measurement changes.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:`Modeling Assumptions`,
//       content:`
// Every probability model rests on explicit choices.

// Typical assumptions include:
// • outcomes are treated as symmetric
// • trials do not influence each other
// • the same mechanism is repeated each time
// • the outcome space is finite or infinite

// These assumptions are not conclusions.  
// They are inputs to the model.

// Changing an assumption changes the model, and therefore changes all results derived from it.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:`Simple Discrete Models`,
//       content:`
// Some probability models have a finite or countable set of outcomes.

// In such models:
// • all outcomes can be listed explicitly
// • events are formed by grouping outcomes
// • probabilities are assigned directly to each outcome

// These models are often used as starting points because their structure is fully visible.

// Examples of this class include:
// • two-outcome mechanisms
// • finite multi-outcome mechanisms

// Concrete realizations of these appear on the following pages:
// • Coin Toss Model
// • Dice Roll Model
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:`From Simple Models to Richer Ones`,
//       content:`
// Simple discrete models are only the starting point.

// By extending or modifying a basic model, one can describe:
// • repeated experiments
// • dependent outcomes
// • infinite outcome spaces
// • measurements that vary continuously

// The underlying idea remains the same: outcomes and probabilities are fixed first, and additional structure is built on top of them.

// More advanced models reuse the same foundations, but allow for greater complexity in how randomness is represented.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:`Models vs Reality`,
//       content:`
// A probability model is not a description of the world itself.

// It is a constructed object that isolates a specific random mechanism while ignoring everything else.

// Because of this:
// • models can be useful even when they are unrealistic
// • realistic detail does not guarantee correctness
// • conclusions are valid only within the chosen model

// When a model does not match the situation it is applied to, probability calculations remain correct mathematically but become irrelevant in practice.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:`How This Section Is Organized`,
//       content:`
// This page introduces probability models at a conceptual level.

// Each model is then developed on its own page, using the same internal structure:
// • description of the random mechanism
// • definition of outcomes and events
// • probability assignment
// • possible measurements and distributions

// This organization allows new models to be added without changing the overall framework, and makes it easy to compare different modeling choices across examples.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:`Model Pages`,
//       content:`
// The following pages present concrete probability models built using the framework introduced above.

// Each page focuses on a single random mechanism and shows how outcomes, events, and probabilities are specified within that model.

// Available models:
// • Coin Toss Model
// • Dice Roll Model

// Additional models will be added over time, following the same structure and conventions.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }


//   const introContent = {
//     id: "intro",
//     title: "Modeling Random Phenomena",
//     content: `
// Probability does not begin with formulas or distributions.  
// It begins with simplified descriptions of situations in which outcomes are uncertain.

// These descriptions do not attempt to capture reality in full detail.  
// They isolate the random mechanism of interest and ignore everything else.

// Such idealized descriptions are called **probability models**.  
// They provide a controlled setting in which randomness can be analyzed, compared, and reused across different problems.
// `
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Probability Models: Mathematical Frameworks for Randomness | Learn Math Class",
//         description: "Learn probability models: mathematical descriptions of random situations. Understand sample spaces, events, probability assignments, models vs distributions, random variables, and modeling assumptions.",
//         keywords: keyWords.join(", "),
//         url: "/probability/models",
//         name: "Probability Models"
//       }
//     }
//   }
// }

// export default function ModelsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability Models</h1>
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



// tables-optimized: v4 | 2026-05-22 | 3 tables (obj3 aggregation, obj4 comparison, summary capstone)


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){

  const keyWords = [
    'probability models',
    'probability model definition',
    'sample space and events',
    'probability framework',
    'random experiment model',
    'model vs distribution',
    'random variable vs model',
    'discrete probability model',
    'probability model assumptions',
    'mathematical probability model',
    'coin toss model',
    'dice roll model',
    'probability modeling',
    'model outcomes events'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- v4 TABLES ----------

  // obj3 — aggregation: 3 universal components of any probability model
  const componentsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Component</th>
      <th style="${tableHeaders.aggregation}">What it specifies</th>
      <th style="${tableHeaders.aggregation}">Standard notation</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/sample-space" style="${linkStyle}">Sample space</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the set of all possible outcomes the experiment may produce</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">S or &Omega;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/events" style="${linkStyle}">Events</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">collections of outcomes treated as meaningful &mdash; subsets of the sample space</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E (also written &#x2131;)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Probability measure</td>
      <td style="padding: 12px 15px; color: #34495e;">numerical weights expressing how likely each event is</td>
      <td style="padding: 12px 15px; color: #34495e;">P</td>
    </tr>
  </tbody>
</table>
`

  // obj4 — comparison: model / random variable / distribution hierarchy
  const hierarchyTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Layer</th>
      <th style="${tableHeaders.comparison}">Notation</th>
      <th style="${tableHeaders.comparison}">What it specifies</th>
      <th style="${tableHeaders.comparison}">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Probability model</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(S, E, P)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the outcome space, the events, and how probabilities are assigned</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">supplies the randomness</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/random-variables" style="${linkStyle}">Random variable</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X : S &rarr; &reals;</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a numerical function defined on the model&apos;s sample space</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">selects what is measured</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/probability/distributions" style="${linkStyle}">Distribution</a></td>
      <td style="padding: 12px 15px; color: #34495e;">P(X &isin; A) for A &sube; &reals;</td>
      <td style="padding: 12px 15px; color: #34495e;">the probability law induced on the real line by X</td>
      <td style="padding: 12px 15px; color: #34495e;">records the resulting probabilities</td>
    </tr>
  </tbody>
</table>
`

  // summary capstone — 8 aspects × statement × example
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 100%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Aspect</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Example or symbol</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What a probability model is</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a mathematical description specifying outcomes, events, and how probabilities are assigned</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(S, E, P)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Three universal components</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sample space, events (subsets), and a probability measure</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">coin: S = {H, T}; events = subsets of S; P(H) = 1/2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Why we use models</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">to isolate the random mechanism by stripping away irrelevant detail</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">model a coin flip, not the physics of the toss</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">The probability hierarchy</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">model &rarr; random variable &rarr; distribution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(S, E, P) &rarr; X : S &rarr; &reals; &rarr; P(X &isin; A)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Same distribution, many models</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a distribution describes results, not the process that produced them</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Bernoulli(0.5) can arise from a coin, a button press, a draw, &hellip;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Same model, many distributions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">different random variables on one model yield different distributions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">on dice rolls: X = face value vs Y = 1<sub>{even}</sub> &mdash; different laws</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Modeling assumptions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">explicit inputs &mdash; symmetry, independence, identical repetition, cardinality of S</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&ldquo;fair coin&rdquo; assumes symmetry; iid trials assume independence</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Models vs reality</td>
      <td style="padding: 12px 15px; color: #34495e;">a model is a constructed object isolating a mechanism, not a description of the world</td>
      <td style="padding: 12px 15px; color: #34495e;">a coin model is useful even if real coins are slightly biased</td>
    </tr>
  </tbody>
</table>
`

  const faqQuestions = {
    obj1: {
      question: "What is a probability model?",
      answer: "A probability model is a mathematical description of a random situation that specifies the set of all possible outcomes, which collections of outcomes are considered events, and how probabilities are assigned to those events. It defines how randomness is generated, not what is later measured from it."
    },
    obj2: {
      question: "Why does probability use models instead of dealing with reality directly?",
      answer: "Real-world situations are too complex to analyze directly. Probability models replace reality with simplified structures that capture only the random mechanism of interest by stripping away irrelevant details, making assumptions explicit, and allowing repeated reasoning under controlled conditions. Any probabilistic conclusion is conditional on the chosen model."
    },
    obj3: {
      question: "What's the difference between a probability model and a distribution?",
      answer: "A probability model defines a space of outcomes and their probabilities. A distribution is the probability law induced by a random variable defined on that model. The order is: model → random variable → distribution. The model supplies randomness, the random variable selects what is measured, and the distribution records the resulting probabilities. Distributions describe results, not processes; models describe processes, not results."
    },
    obj4: {
      question: "What do all probability models have in common?",
      answer: "At the core of every probability model are: a list of possible outcomes the experiment may produce, collections of outcomes treated as meaningful events, and numerical weights expressing how likely those events are. This structure is universal regardless of context—coins, dice, cards, measurements, or simulations all fit into the same abstract framework."
    },
    obj5: {
      question: "What assumptions do probability models make?",
      answer: "Every probability model rests on explicit choices including: outcomes are treated as symmetric, trials don't influence each other, the same mechanism is repeated each time, and whether the outcome space is finite or infinite. These assumptions are inputs to the model, not conclusions. Changing an assumption changes the model and therefore all results derived from it."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Probability Models",
      "description": "Learn probability models: mathematical descriptions of random situations. Understand sample spaces, events, probability assignments, models vs distributions, random variables, and modeling assumptions.",
      "url": "https://www.learnmathclass.com/probability/models",
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
        "name": "Probability Models"
      },
      "teaches": [
        "What probability models are: outcomes, events, and probability assignments",
        "Why probability uses models instead of direct reality",
        "Common elements all probability models share",
        "Relationship: model → random variable → distribution",
        "One distribution can arise from many different models",
        "One model can produce many distributions via different random variables",
        "Modeling assumptions and their role",
        "Simple discrete models: coin toss, dice roll",
        "From simple models to richer ones",
        "Models vs reality: constructed objects isolating random mechanisms"
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
          "name": "Probability Models",
          "item": "https://www.learnmathclass.com/probability/models"
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
- [Random Experiment](!/probability/definitions#random_experiment) — a process whose outcome is uncertain
- [Sample Space](!/probability/definitions#sample_space) — the set $\\Omega$ of all possible outcomes a model defines
- [Event](!/probability/definitions#event) — a subset of the sample space assigned a probability
- [Probability Measure](!/probability/definitions#probability_measure) — the function $P$ completing the model specification
- [Equally Likely Events](!/probability/definitions#equally_likely_events) — the simplifying assumption in classical models`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

    obj1:{
      title:`What Is a Probability Model`,
      content:`
A probability model is a mathematical description of a random situation.

It specifies:
• the set of all possible outcomes
• which collections of outcomes are considered events
• how probabilities are assigned to those events

The model defines **how randomness is generated**, not what is later measured from it.  
Questions about averages, counts, or numerical outcomes arise only after additional structure is placed on the model.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`Why Probability Uses Models`,
      content:`
Real-world situations are too complex to analyze directly.  
Probability works by replacing reality with a simplified structure that captures only the random mechanism of interest.

Models make this possible by:
• stripping away irrelevant details
• making assumptions explicit
• allowing repeated reasoning under controlled conditions

Any conclusion drawn in probability is therefore conditional on the model being used.  
The quality of a probabilistic result depends not on how realistic a situation feels, but on how appropriate the chosen model is for the question being asked.
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`What all Probability Models Have in Common`,
      content:`
Probability models may look different on the surface, but they are built from the same basic ingredients.

At the core of every model are:
• a list of possible outcomes the experiment may produce
• collections of outcomes treated as meaningful events
• numerical weights expressing how likely those events are

Nothing in this structure depends on the story behind the model.  
Coins, dice, cards, measurements, or simulations all fit into the same abstract framework.

This is why probability theory can move freely between different contexts:  
the interpretation changes, but the underlying machinery does not.
`,
      before:``,
      after:``,
      link:'',
      plagiarism:'yes',
  
    },
    obj4:{
      title:`Models, Random Variables, and Distributions`,
      content:`
A probability model defines a space of outcomes and their probabilities.

A **random variable** is a function defined on that space:

$\[X : S \\rightarrow \\mathbb{R}\]$

A **distribution** is the probability law induced by that function:

$\[P(X \\in A)\]$

The order is fixed:

model → random variable → distribution

The model supplies randomness.  
The random variable selects what is measured.  
The distribution records the resulting probabilities.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`One Distribution, Many Models`,
      content:`
A probability distribution does not uniquely identify how randomness was produced.

The same distribution may arise from:
• different outcome spaces
• different experimental setups
• different probability assignments

Once a distribution is formed, the mechanism that generated it is no longer visible.

Distributions describe *results*, not *processes*.  
Models describe *processes*, not results.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`One Model, Many Distributions`,
      content:`
Fix a probability model $(S,\mathcal{E},P)$.

Different random variables can be defined on the same model:

$\[X_1, X_2, \\dots : S \\rightarrow \\mathbb{R}.\]$

Each choice produces its own distribution:

$\[P(X_k \\in A), \\quad A \\subseteq \\mathbb{R}.\]$

By changing the mapping (not the model), the resulting distribution may be:
• discrete
• continuous
• mixed

The model remains unchanged.  
Only the measurement changes.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Modeling Assumptions`,
      content:`
Every probability model rests on explicit choices.

Typical assumptions include:
• outcomes are treated as symmetric
• trials do not influence each other
• the same mechanism is repeated each time
• the outcome space is finite or infinite

These assumptions are not conclusions.  
They are inputs to the model.

Changing an assumption changes the model, and therefore changes all results derived from it.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Simple Discrete Models`,
      content:`
Some probability models have a finite or countable set of outcomes.

In such models:
• all outcomes can be listed explicitly
• events are formed by grouping outcomes
• probabilities are assigned directly to each outcome

These models are often used as starting points because their structure is fully visible.

Examples of this class include:
• two-outcome mechanisms
• finite multi-outcome mechanisms

Concrete realizations of these appear on the following pages:
• Coin Toss Model
• Dice Roll Model
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`From Simple Models to Richer Ones`,
      content:`
Simple discrete models are only the starting point.

By extending or modifying a basic model, one can describe:
• repeated experiments
• dependent outcomes
• infinite outcome spaces
• measurements that vary continuously

The underlying idea remains the same: outcomes and probabilities are fixed first, and additional structure is built on top of them.

More advanced models reuse the same foundations, but allow for greater complexity in how randomness is represented.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:`Models vs Reality`,
      content:`
A probability model is not a description of the world itself.

It is a constructed object that isolates a specific random mechanism while ignoring everything else.

Because of this:
• models can be useful even when they are unrealistic
• realistic detail does not guarantee correctness
• conclusions are valid only within the chosen model

When a model does not match the situation it is applied to, probability calculations remain correct mathematically but become irrelevant in practice.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:`How This Section Is Organized`,
      content:`
This page introduces probability models at a conceptual level.

Each model is then developed on its own page, using the same internal structure:
• description of the random mechanism
• definition of outcomes and events
• probability assignment
• possible measurements and distributions

This organization allows new models to be added without changing the overall framework, and makes it easy to compare different modeling choices across examples.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Model Pages`,
      content:`
The following pages present concrete probability models built using the framework introduced above.

Each page focuses on a single random mechanism and shows how outcomes, events, and probabilities are specified within that model.

Available models:
• Coin Toss Model
• Dice Roll Model

Additional models will be added over time, following the same structure and conventions.
`,
      before:``,
      after:``,
      link:'',
  
    },
    summary:{
      title:`Probability Models at a Glance`,
      content:`The page has built up the probability model as the foundational layer beneath random variables and distributions, distinguishing what a model specifies from what is later measured on it. The table below collects the core ideas into a single reference card, pairing each aspect of probability modeling with its concise statement and a concrete example or symbol.`,
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
    title: "Modeling Random Phenomena",
    content: `
Probability does not begin with formulas or distributions.  
It begins with simplified descriptions of situations in which outcomes are uncertain.

These descriptions do not attempt to capture reality in full detail.  
They isolate the random mechanism of interest and ignore everything else.

Such idealized descriptions are called **probability models**.  
They provide a controlled setting in which randomness can be analyzed, compared, and reused across different problems.
`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      componentsTable,
      hierarchyTable,
      summaryTable,
      seoData: {
        title: "Probability Models: Mathematical Frameworks for Randomness | Learn Math Class",
        description: "Learn probability models: mathematical descriptions of random situations. Understand sample spaces, events, probability assignments, models vs distributions, random variables, and modeling assumptions.",
        keywords: keyWords.join(", "),
        url: "/probability/models",
        name: "Probability Models"
      }
    }
  }
}

export default function ModelsPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  componentsTable,
  hierarchyTable,
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
          <div key={'components-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: componentsTable }} />,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'hierarchy-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: hierarchyTable }} />,
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
        id:'summary',
        title:sectionsContent.summary.title,
        link:sectionsContent.summary.link,
        content:[
          sectionsContent.summary.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Probability Models</h1>
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