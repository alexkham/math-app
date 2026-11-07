


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
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import coinSampleSpaceDiagrams from '@/app/components/probability/sampleSpace/coinSampleSpaceDiagrams'
import discretePmfDiagrams from '@/app/components/visualizations/probability/discrete-distribution/discretePmfDiagrams'
import diceSampleSpaceDiagrams from '@/app/components/probability/sampleSpace/diceSampleSpaceDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import MistakeFix from '@/app/components/infographics/MistakeFix/MistakeFix'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


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

  // FAQ pass: all five originals named their own h2 — What Is a Probability
  // Model, Why Probability Uses Models, Models/Random Variables/
  // Distributions, What all Models Have in Common, Modeling Assumptions.
  // That last one also means this page serves "the three parts of a model"
  // structurally, so the entry I had put on /probability/sets is redundant
  // and has been removed there. Replaced with the one-to-many consequences.
  // FAQ pass 2026-10-31: kept all four. Added the seven-riffle shuffle (fact
  // box under Models vs Reality) and the binary digits of one uniform point
  // as endless coin tosses (fact box under One Model, Many Distributions); no
  // heading asks either. Draws without replacement left to the conditional
  // probability pages; the maximum of two dice to the dice roll page.
  const faqQuestions = {
    obj1: {
      question: "Can you recover the experiment from its distribution?",
      answer: "No. Once a distribution is formed, the mechanism that produced it is no longer visible. The same distribution can arise from different outcome spaces, different experimental setups and different probability assignments. Distributions record results, not processes — which is why knowing a variable is, say, uniform tells you nothing about how it was generated.",
      sectionId: "5"
    },
    obj2: {
      question: "Does changing the random variable change the model?",
      answer: "No — only the measurement changes. The model is the outcome space, the events and the probability assignment; a random variable is a mapping defined on top of it. Define a different mapping and you get a different distribution while the underlying model sits untouched. Confusing the two makes distributions look like properties of experiments rather than of measurements.",
      sectionId: "6"
    },
    obj3: {
      question: "Can the same model produce both discrete and continuous distributions?",
      answer: "Yes. Fix one probability model and define different random variables on it: each mapping produces its own distribution, and those can be discrete, continuous or mixed. The randomness is fixed by the model; what varies is what you choose to measure. So the discrete/continuous split describes the variable, not the experiment behind it.",
      sectionId: "6"
    },
    obj4: {
      question: "Does a more realistic model give better answers?",
      answer: "Not necessarily. Realistic detail does not guarantee correctness, and deliberately unrealistic models are often the useful ones because they isolate the mechanism you care about. What matters is whether the model matches the situation you are applying it to. When it does not, the calculations stay mathematically correct and become practically irrelevant.",
      sectionId: "10"
    },
    obj5: {
      question: "How many shuffles does it take to mix a deck of cards?",
      answer: "About seven riffle shuffles. Card probabilities assume all $52!$ orders of the deck are equally likely, but a real shuffle starts from the deck's last order and changes it a little at a time. One riffle can produce at most $2^{52}$ orders, so four can reach at most $2^{208}$, far below $52! \\approx 8 \\times 10^{67}$. Bayer and Diaconis showed in 1992 that the deck comes close to the equally likely model only after about $7$ riffles.",
      sectionId: "10"
    },
    obj6: {
      question: "How can one random number contain infinitely many coin tosses?",
      answer: "Through its binary digits. Pick a point uniformly from $[0, 1]$ and write it in base $2$: each pattern of the first $k$ digits marks off an interval of length $\\frac{1}{2^k}$, so all $2^k$ patterns are equally likely. That is exactly what $k$ independent fair tosses give, for every $k$, so the digits of a single draw behave as an endless sequence of independent tosses.",
      sectionId: "6"
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
    }
  }

  // Concept introduction (section 1, "What Is a Probability Model") —
  // template C, failure first. Running instance: two heads in two tosses,
  // 1/3 under "number of heads, equally likely" and 1/4 under ordered tosses.
  // Old obj1 text is kept in sectionsContent.obj1, unused; its three passages,
  // the u_1_0 demo frame and its line are carried in unchanged.
  const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
  const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
    cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
  const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
  const ciTwoModelsTable = ciTableOpen(['description', 'outcomes', 'probability of each', 'P(two heads)']) +
    ciRow(['count the heads', '0, 1, 2', '1/3', '1/3'], { color: '#a4243b', cols: [3] }) +
    ciRow(['record each toss in order', 'HH, HT, TH, TT', '1/4', '1/4'], { shade: true, last: true, color: '#2563EB', cols: [3] }) +
    '</tbody></table>'

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

@academic[formula_callout:Models, Random Variables, and Distributions
$$X : S \\rightarrow \\mathbb{R}$$]@

A **distribution** is the probability law induced by that function:

@academic[formula_callout:Models, Random Variables, and Distributions
$$P(X \\in A)$$]@

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
@academic[rule_plain:A probability distribution does not uniquely identify how randomness was produced.]@

The same distribution may arise from:
• different outcome spaces
• different experimental setups
• different probability assignments

Once a distribution is formed, the mechanism that generated it is no longer visible.

Distributions describe **results**, not **processes**.
Models describe **processes**, not results.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`One Model, Many Distributions`,
      content:`
Fix a probability model $(S,\\mathcal{E},P)$ — the [probability-space triple](!/probability/distributions#notation) in its school lettering, $S$ for the sample space and $\\mathcal{E}$ for the events.

Different random variables can be defined on the same model:

@academic[formula_callout:One Model, Many Distributions
$$X_1, X_2, \\dots : S \\rightarrow \\mathbb{R}$$]@

Each choice produces its own distribution:

@academic[formula_callout:One Model, Many Distributions
$$P(X_k \\in A), \\quad A \\subseteq \\mathbb{R}$$]@

By changing the mapping (not the model), the resulting distribution may be:
• discrete
• continuous
• mixed

The model remains unchanged.  
Only the measurement changes.

@academic[fact,aside:true,width:35%:One random point, endless coin tosses
The binary digits of a point chosen uniformly from $[0, 1]$ are independent fair coin tosses: each pattern of the first $k$ digits marks off an interval of length $\\frac{1}{2^k}$, so every pattern is equally likely. One draw from this single model carries infinitely many independent variables.]@

Even a very plain model supports a great many measurements. In the model where a single point is chosen uniformly from the interval $[0, 1]$, so that every subinterval has probability equal to its length, the point itself has a continuous distribution. Reading its first decimal digit gives a discrete variable with ten equally likely values. Replacing every point below $\\frac{1}{2}$ by $\\frac{1}{2}$ gives a mixed variable, with probability $\\frac{1}{2}$ sitting on the single value $\\frac{1}{2}$ and the rest spread evenly above it.
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

@academic[pitfall,aside:true,width:35%:Assuming independence for draws without replacement
Treating two draws without replacement as independent gives $P(\\text{two aces}) = \\left(\\frac{4}{52}\\right)^2 = \\frac{1}{169}$. After one ace, $3$ of the $51$ cards left are aces, so the answer is $\\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{1}{221}$.
[Read more](!#pitfall-assuming-independence-for-draws-without-replacement)]@

These assumptions are not conclusions.  
They are inputs to the model.

Changing an assumption changes the model, and therefore changes all results derived from it.

Card draws show the second assumption at work. If each card is put back and the deck shuffled before the next draw, every draw faces the same $52$ cards. If the card is kept, the second draw faces only $51$ cards, and the deck it draws from is no longer the one the first draw saw.
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
• all outcomes can be listed one by one
• events are formed by grouping outcomes
• probabilities are assigned directly to each outcome

These models are often used as starting points because their structure is fully visible.

Examples of this class include:
• two-outcome mechanisms
• finite multi-outcome mechanisms

Concrete realizations of these appear on the following pages:
• Coin Toss Model
• Dice Roll Model

@academic[pitfall,aside:true,width:35%:Listing the sums as equally likely outcomes
Taking the $11$ sums of two dice as equally likely outcomes gives $P(\\text{sum} = 7) = \\frac{1}{11}$. The equally likely outcomes are the $36$ ordered pairs, $6$ of which add to $7$, so $P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$.
[Read more](!#pitfall-listing-the-sums-as-equally-likely-outcomes)]@

In the dice model, the list of outcomes depends on what is recorded for each roll. Recording both faces in order gives the pairs from $(1, 1)$ to $(6, 6)$; recording only the total gives the numbers from $2$ to $12$. Both lists describe the same roll of two dice, and each total corresponds to a group of pairs, an event in the sense of the second bullet above.
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

@academic[fact,aside:true,width:35%:Seven riffles to trust the card model
Four riffle shuffles cannot even reach every order: one riffle can produce at most $2^{52}$ orders, and $2^{208}$ is far below $52! \\approx 8 \\times 10^{67}$. Bayer and Diaconis showed in 1992 that the deck comes close to the equally likely model only after about $7$ riffles.]@

Card games give a familiar example. The standard card model takes all $52!$ orders of a shuffled deck as equally likely, and every probability for a dealt hand rests on that assumption. A real shuffle starts from whatever order the deck was in and changes it a little at a time, so whether the model fits depends on how much shuffling was actually done.

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
    obj16:{
      title:`Common Pitfalls`,
      content:`Each of the two mistakes below is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.`,
      before:``,
      after: `Both slips put the wrong outcomes into the model. Draws without replacement are not independent, and the sums of two dice are not equally likely, because they come from different numbers of pairs. Counting the outcomes directly catches both.`,
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


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const mdPx = (k, w) => k / w * 388;
  const mdSumMax = [].concat(
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((s) => ({ from: 0, to: (6 - Math.abs(s - 7)) / 36, color: 'f', dx: mdPx(s, 13) - 4 })),
    [1, 2, 3, 4, 5, 6].map((k) => ({ from: 0, to: (2 * k - 1) / 36, color: 'r', dx: mdPx(k, 13) + 4 })));
  const mdBin = (n, k) => { let c = 1; for (let i = 1; i <= k; i++) c = c * (n - k + i) / i; return c / 2 ** n; };
  const mdCoinBars = Array.from({ length: 41 }, (_, k) => ({ from: 0, to: mdBin(40, k), color: 'f', dx: mdPx(k, 40) })).filter((b) => b.to > 0.001);
  const fpModelsTwoVars = { kind: 'pieces', svgTitle: 'One model, two dice with 36 equally likely outcomes, two random variables: the sum has a triangle PMF on 2 to 12, the maximum rises as (2k - 1)/36 on 1 to 6', xRange: [-0.5, 12.5], yRange: [0, 0.34], xLetter: 'value',
    pieces: [{ fn: () => 0, from: -0.5, to: -0.5, ends: [null, null], color: 'g' }],
    yBars: mdSumMax,
    notes: [{ x: 7.6, y: 0.31, text: 'same 36 outcomes', pos: 'e' }, { x: 7.6, y: 0.285, text: 'blue: X = sum', pos: 'e', color: 'f' }, { x: 7.6, y: 0.26, text: 'amber: Y = maximum', pos: 'e', color: 'r' }, { x: 7.6, y: 0.235, text: 'P(Y = 6) = 11/36', pos: 'e', color: 'r' }],
    caption: 'Two measurements on one model, two distributions' };
  const conceptIntroFigures = {
    twoModelsTable: ciTwoModelsTable,
  };

  const demoUnits = {
    u_1_0: demoUnitFrame({
      svg: coinSampleSpaceDiagrams.none,
      caption: 'A probability model: three tosses, eight outcomes, each 1/8',
      text: 'This grid is a complete probability model: a list of outcomes, the events formed by grouping them, and a rule that gives each outcome the same probability 1/8. Nothing about the physical coin appears, only the random mechanism. Highlight groups of cells to form events on the',
      href: '/probability/visual-tools/coin-toss',
      linkText: 'coin toss sample space explorer',
    }),
    u_4_1: demoUnitFrame({
      svg: discretePmfDiagrams.discreteUniform,
      caption: 'Discrete uniform PMF, values 1 to 6',
      text: 'A random variable maps outcomes to numbers and its distribution is what remains once the outcomes themselves are forgotten: six equally likely faces become six bars of height 1/6. The distribution is a summary of the model, not the model itself. Compare the distributions of other families on the',
      href: '/probability/visual-tools/probability-function/discrete',
      linkText: 'PMF visualizer',
    }),
    u_8_2: demoUnitFrame({
      svg: diceSampleSpaceDiagrams.none,
      caption: 'Two dice: a finite model with 36 outcomes',
      text: 'A simple discrete model lists every outcome explicitly: 36 ordered pairs, each with probability 1/36, and every event is a group of cells whose probability is a count over 36. Everything about the model can be checked by counting. Highlight events and count their cells on the',
      href: '/probability/visual-tools/dice-roll',
      linkText: 'dice roll sample space explorer',
    }),
    modelsTwoVars: demoUnitFrame({
      svg: renderFunctionPlotV4(fpModelsTwoVars),
      caption: 'One model, two random variables',
      text: 'The model is fixed: two fair dice, 36 equally likely ordered outcomes. Measure the sum and you get the blue PMF, a triangle on 2 to 12 peaked at 7. Measure the larger of the two faces instead and you get the amber PMF on 1 to 6, rising as (2k &#8722; 1)/36 up to P(max = 6) = 11/36. Nothing about the dice changed; only the function applied to each outcome did.',
    }),
  };

  // MistakeFix batch 18, 2026-11-04: the "Common Pitfalls" entries, moved word for word
  // out of sectionsContent.obj16 into the MistakeFix data (trace layout).
  const pitfallData = {
    mistakes: [
      { id: 'assuming-independence-for-draws-without-replacement', name: `Assuming independence for draws without replacement`, errorAt: 0,
        what: `Two cards are drawn from a standard deck of $52$, and the first card is not put back. The assumption that trials do not influence each other is applied anyway, and the probabilities of the two draws are multiplied as if the deck were unchanged.`,
        wrong: [`$$P(\\text{two aces}) = \\frac{4}{52} \\cdot \\frac{4}{52}$$
$$= \\frac{16}{2704} = \\frac{1}{169} \\approx 0.0059$$`],
        right: [`After an ace is drawn, $51$ cards remain and $3$ of them are aces.`, `$$P(\\text{two aces}) = \\frac{4}{52} \\cdot \\frac{3}{51}$$
$$= \\frac{12}{2652} = \\frac{1}{221} \\approx 0.0045$$`],
        why: `Coin and dice models, the first ones met, do assume independent trials, and the habit of multiplying carries over to draws where the first result changes what is left.`,
        check: `Count outcomes directly. There are $52 \\cdot 51 = 2652$ ordered pairs of different cards and $4 \\cdot 3 = 12$ ordered pairs of two aces, which gives $\\frac{12}{2652} = \\frac{1}{221}$. In a deck of two cards with one ace, the wrong method gives $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ for two aces, though drawing two aces from it is impossible.` },
      { id: 'listing-the-sums-as-equally-likely-outcomes', name: `Listing the sums as equally likely outcomes`, errorAt: 0,
        what: `For two dice, the totals $2$ to $12$ are listed as the outcomes of the model, and each total is given the same probability.`,
        wrong: [`There are $11$ totals, each with probability $\\frac{1}{11}$, so
$$P(\\text{sum} = 7) = \\frac{1}{11} \\approx 0.091$$`],
        right: [`The equally likely outcomes are the $36$ ordered pairs of faces. Six of them add to $7$: $(1, 6)$, $(2, 5)$, $(3, 4)$, $(4, 3)$, $(5, 2)$, $(6, 1)$.`, `$$P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6} \\approx 0.167$$`],
        why: `The question is about the total, so the totals look like the natural outcomes. The symmetry of a fair die holds for its faces, not for the totals that two dice produce.`,
        check: `Count how many pairs give each total. The total $2$ comes only from $(1, 1)$, while $7$ comes from six pairs, so the two cannot be equally likely. The counts $1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1$ add up to $36$.` },
    ],
  };

  return {
    props: {
    pitfallData,
    demoUnits,
    conceptIntroFigures,
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

export default function ModelsPage({ pitfallData,
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  componentsTable,
  hierarchyTable,
  summaryTable, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `What is the chance of two heads in two tosses of a fair coin?`,
        content: [
          `The question sounds settled before anything else is said. It is not: the answer depends on what counts as an outcome and how probability is spread over the outcomes.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        tone: 'break',
        lead: `Two reasonable descriptions of the same tosses give 1/3 and 1/4.`,
        content: [
          ciTable('twoModelsTable'),
          `The first description treats "one head" as a single outcome, though it can happen in two ways, $HT$ and $TH$. Real coins agree with the second row.`,
        ],
      },
      {
        id: 'diagnosis',
        lead: `A probability is only as definite as the description of outcomes, events and probabilities behind it.`,
        content: [
          `The two rows describe the same situation but choose different outcomes and different probabilities. Writing those choices down explicitly is the job of a probability model.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A **probability model** is a mathematical description of a random situation: its [sample space](!/probability/definitions#sample_space) of possible outcomes, the events, and the probabilities assigned to them.`,
        formula: [
          `A probability model is a mathematical description of a random situation.`,
          `It specifies:
• the set of all possible outcomes
• which collections of outcomes are considered events
• how probabilities are assigned to those events`,
        ],
        footer: `So for two fair tosses, the model with sample space $\\{HH, HT, TH, TT\\}$ and probability $\\frac{1}{4}$ for each outcome gives $P(\\text{two heads}) = \\frac{1}{4}$.`,
      },
      {
        id: 'kind',
        lead: `A model describes how the randomness is generated, not what is later measured from it.`,
        content: [
          `The model defines **how randomness is generated**, not what is later measured from it.  
Questions about averages, counts, or numerical outcomes arise only after additional structure is placed on the model.`,
          <div key={'unit-u_1_0'} dangerouslySetInnerHTML={{ __html: demoUnits.u_1_0 }} />,
        ],
      },
      {
        id: 'caveat',
        lead: `A model is a choice, and a poor choice gives confident wrong answers.`,
        content: [
          `Nothing inside the first row of the table looks wrong; only comparison with real tosses shows it. How models are checked against the world is taken up in [models vs reality](!/probability/models#10).`,
          `Why probability works through such models is the next question.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers why probability uses models, what all models share, how models relate to random variables and distributions, modeling assumptions, simple discrete models and richer ones, models against reality, and common pitfalls.`,
      },
    ],
  }

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
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
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
                  <div key={'unit-u_4_1'} dangerouslySetInnerHTML={{ __html: demoUnits.u_4_1 }} />,
          `The next two sections show that this summary loses information in both directions.`,
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
                  <div key={'unit-modelsTwoVars'} dangerouslySetInnerHTML={{ __html: demoUnits.modelsTwoVars }} />,
          `A third choice, such as whether the sum is even, would give a third distribution on the same model.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          `@academic[punchline:A model's answers are only as trustworthy as its assumptions, and those are chosen, not proved.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
                  <div key={'unit-u_8_2'} dangerouslySetInnerHTML={{ __html: demoUnits.u_8_2 }} />,
          `Richer models grow out of this one by repetition and dependence.`,
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
    {
        id:'pitfalls',
        title:sectionsContent.obj16.title,
        link:sectionsContent.obj16.link,
        content:[
          sectionsContent.obj16.content,
          <DiagramFrame
            key={'obj16-mistakes'}
            id="probability-model-pitfalls"
            title="Common pitfalls with probability models"
            source="/probability/models"
            after={sectionsContent.obj16.after}
          >
            <MistakeFix data={pitfallData} variant="trace" />
          </DiagramFrame>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Probability Models FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
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