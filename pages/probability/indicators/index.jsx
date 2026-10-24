

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
//     "indicator random variable",
//     "indicator function",
//     "indicators probability",
//     "E[I_A] = P(A)",
//     "expectation of indicator",
//     "linearity of expectation",
//     "counting with indicators",
//     "sum of indicators",
//     "binary random variable",
//     "0-1 random variable",
//     "events as random variables",
//     "indicator notation",
//     "Bernoulli indicator",
//     "indicators for counting"
//   ]

//   const faqQuestions = {
//     obj1: {
//       question: "What is an indicator random variable?",
//       answer: "An indicator random variable converts an event into a numerical object by assigning the value 1 to outcomes in the event and 0 to all other outcomes. It's a random variable that takes only values 0 or 1, representing membership in an event numerically. Denoted I_A for event A, it equals 1 if the outcome is in A and 0 otherwise."
//     },
//     obj2: {
//       question: "What is the expected value of an indicator random variable?",
//       answer: "The expected value of an indicator random variable equals the probability of its event: E[I_A] = P(A). This holds because I_A takes value 1 exactly on outcomes in A and 0 otherwise, so expectation counts how often the event occurs in probability terms."
//     },
//     obj3: {
//       question: "How are indicator variables used for counting problems?",
//       answer: "Counting problems can be expressed as sums of indicator random variables. Each object gets an indicator that equals 1 if a condition is met and 0 otherwise. The total count is the sum of indicators. Using linearity of expectation, this converts counting into expectation calculations without enumerating all outcomes."
//     },
//     obj4: {
//       question: "Do indicator random variables need to be independent?",
//       answer: "No. Indicator random variables may be dependent, and this doesn't affect the validity of linearity of expectation. Expectations of sums of indicators can still be computed term by term without independence assumptions. However, dependence becomes important when computing higher-order quantities like variance."
//     },
//     obj5: {
//       question: "What's the difference between an indicator variable and a probability?",
//       answer: "An indicator is a random variable whose value depends on the outcome, not a probability value. It takes values 0 or 1 based on whether an event occurs. Its expected value equals the probability of the event (E[I_A] = P(A)), but the indicator itself is not a probability or probability distribution."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Indicator Random Variables",
//       "description": "Learn indicator random variables: converting events to 0-1 random variables. Understand E[I_A] = P(A), linearity of expectation, counting with indicators, and applications.",
//       "url": "https://www.learnmathclass.com/probability/indicators",
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
//         "name": "Indicator Random Variables"
//       },
//       "teaches": [
//         "Converting events to random variables using indicators",
//         "Definition: I_A equals 1 if outcome in A, 0 otherwise",
//         "Basic properties: only values 0 or 1, determined by event",
//         "Key identity: E[I_A] = P(A)",
//         "Linearity of expectation with indicator variables",
//         "Counting with sums of indicator random variables",
//         "Indicators and dependence in probability models",
//         "Applications in Bernoulli trials, binomial models, and counting problems"
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
//           "name": "Indicator Random Variables",
//           "item": "https://www.learnmathclass.com/probability/indicators"
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

//     obj1:{
//       title:`From Events to Random Variables`,
//       content:`
// In probability theory, events are sets of outcomes.  
// Sets cannot be added, averaged, or combined algebraically.

// Random variables assign numerical values to outcomes.  
// An indicator random variable assigns the value $1$ to outcomes in a given event and $0$ to all other outcomes.

// This construction converts an event into a numerical object defined on the same sample space.
// `,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:`Definition of an Indicator Random Variable`,
//       content:`
// Let $A$ be an event in a probability experiment.  
// The indicator [random variable](!/probability/random-variables) of $A$, denoted by $I_A$, is defined by

//  $I_A(\\omega)=\\begin{cases}1, & \\text{if } \\omega \\in A \\\\ 0, & \\text{if } \\omega \\notin A\\end{cases}$


// The indicator $I_A$ is a [random variable](!/probability/random-variables) defined on the same [sample space](!/probability/sample-space) as the experiment.  
// It represents membership in the event $A$ numerically.

// An indicator is **not** a probability value; it is a random variable whose value depends on the outcome.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:`Basic Properties of Indicator Random Variables`,
//       content:`
// Indicator [random variable](!/probability/random-variables) have a simple structure.

// • They take only two values: $0$ or $1$
// • They are completely determined by the event they represent
// • They are defined on the same sample space as the underlying experiment

// Simple relationships follow directly from the definition:

// • The indicator of the complement event equals $1 - I_A$
// • Indicators reflect set operations at the level of outcomes

// These properties allow indicators to be combined and manipulated algebraically without introducing new probability assumptions.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:`Expectation of an Indicator Random Variable`,
//       content:`
// The expected value of an indicator random variable equals the probability of its event.

// For an event $A$ with indicator $I_A$,
// $E[I_A]=P(A)$

// This holds because $I_A$ takes the value $1$ exactly on outcomes in $A$ and $0$ otherwise.  
// Expectation therefore counts how often the event occurs in probability terms.

// This identity connects events directly to expectation without introducing a full probability distribution.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:`Linearity of Expectation and Indicators`,
//       content:`
// Expectation is linear.

// For indicator random variables, this means:

// • The expectation of a sum equals the sum of expectations
// • No independence assumptions are required

// As a result, counting problems can be solved by expressing the quantity of interest as a sum of indicator variables and taking expectations term by term.

// This technique avoids direct probability calculations and remains valid even when the indicators are dependent.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:`Counting with Indicator Random Variables`,
//       content:`
// Many counting problems can be expressed as sums of indicator random variables.

// Each object or outcome is associated with an indicator that takes the value $1$ if a specified condition is met and $0$ otherwise.  
// The total count is obtained by summing these indicators.

// This approach converts counting questions into expectation calculations and allows results to be obtained without enumerating all outcomes or computing complex probabilities.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:`Indicators and Dependence`,
//       content:`
// Indicator [random variables](!/probability/random-variables) may be dependent.

// Dependence does not affect the validity of linearity of expectation, so expectations of sums of indicators can still be computed term by term.  
// However, dependence becomes important when higher-order quantities such as variance are considered.

// This distinction explains why indicators are effective for expectation-based counting but require additional care in variance calculations.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:`Indicators in Probability Models`,
//       content:`
// Indicator random variables are used across many [probability models](!/probability/models).

// They commonly appear in:

// • Bernoulli trials, where each trial contributes a $0$ or $1$
// • Binomial models, where the total number of successes is a sum of indicators
// • Occupancy and matching problems, where indicators track whether a condition is satisfied
// • Random structures, where indicators isolate local events

// Indicators function as a structural tool rather than as a probability model of their own.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:`What Indicators Are Not`,
//       content:`
// Indicator random variables are often misunderstood.

// • They are **not** probabilities
// • They are **not** probability distributions
// • They are **not** limited to Bernoulli experiments

// An indicator is a random variable that represents an event numerically.  
// Its value depends on the outcome, not on the probability of the event itself.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:`Summary`,
//       content:`
// Indicator random variables convert events into numerical random variables that take values $0$ or $1$.

// Their expected value equals the probability of the corresponding event, and sums of indicators allow counting problems to be handled through linearity of expectation without requiring independence or full probability distributions.

// Indicators function as a structural tool in probability theory, linking events, expectation, and counting within finite and discrete models.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
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
//     title: "Why Indicators Exist",
//     content: `
// Many probability problems ask whether a specific event occurs or does not occur.  
// Indicator random variables encode this yes–no information numerically.

// By representing events as random variables that take values $0$ or $1$, indicators allow probability questions to be handled using expectation and algebraic operations.  
// This makes them a structural tool for counting and for applying linearity of expectation.
// `
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Indicator Random Variables: Converting Events to 0-1 Variables | Learn Math Class",
//         description: "Learn indicator random variables: converting events to 0-1 random variables. Understand E[I_A] = P(A), linearity of expectation, counting with indicators, and applications.",
//         keywords: keyWords.join(", "),
//         url: "/probability/indicators",
//         name: "Indicator Random Variables"
//       }
//     }
//   }
// }

// export default function IndicatorsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Indicators in Probability</h1>
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


// tables-optimized: v4 | 2026-05-23 | 1 table (obj11 summary capstone)


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderOutcomeGrid from '@/app/utils/illustrations/probability/outcomes/outcomeGrid'
import coinSampleSpaceDiagrams from '@/app/components/probability/sampleSpace/coinSampleSpaceDiagrams'


export async function getStaticProps(){

  const keyWords = [
    "indicator random variable",
    "indicator function",
    "indicators probability",
    "E[I_A] = P(A)",
    "expectation of indicator",
    "linearity of expectation",
    "counting with indicators",
    "sum of indicators",
    "binary random variable",
    "0-1 random variable",
    "events as random variables",
    "indicator notation",
    "Bernoulli indicator",
    "indicators for counting"
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj11 — summary capstone: Indicators at a Glance
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Aspect</th>
      <th style="${tableHeaders.summary}">Statement</th>
      <th style="${tableHeaders.summary}">Note / example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it is</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a <a href="/probability/random-variables" style="${linkStyle}">random variable</a> assigning 1 to outcomes in A and 0 to all others</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">I<sub>A</sub> : Ω → {0, 1}; follows a Bernoulli distribution with parameter P(A)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it is NOT</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not a probability value, not a distribution, not exclusive to Bernoulli trials</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">its value depends on the outcome, not on P(A)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Key identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[I<sub>A</sub>] = P(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the bridge between events and <a href="/probability/expected-value" style="${linkStyle}">expectation</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Complement</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">I<sub>Aᶜ</sub> = 1 − I<sub>A</sub></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">indicator algebra mirrors set operations</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linearity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[∑ I<sub>Aᵢ</sub>] = ∑ P(A<sub>i</sub>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no <a href="/probability/independence" style="${linkStyle}">independence</a> assumption required</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Counting technique</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">express the count N = ∑ I<sub>Aᵢ</sub>, then take expectation termwise</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">converts counting into a sum of probabilities, avoiding enumeration</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Dependence</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">allowed and harmless for expectation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">becomes essential when computing <a href="/probability/variance" style="${linkStyle}">variance</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Typical uses</td>
      <td style="padding: 12px 15px; color: #34495e;">Bernoulli / binomial models, matching, occupancy, random structures</td>
      <td style="padding: 12px 15px; color: #34495e;">a structural tool across <a href="/probability/models" style="${linkStyle}">probability models</a>, not a model of its own</td>
    </tr>
  </tbody>
</table>
`


  // FAQ pass: the definition, the expectation, counting, and "not a
  // probability" each name their own h2 — which also settles the random-
  // variables page's deferral of indicator variables: no entry needed for
  // the definition. Kept the dependence question, since its heading names
  // the topic without answering it, and added the notation traps.
  const faqQuestions = {
    obj1: {
      question: "Do indicator random variables need to be independent?",
      answer: "No, and this is what makes them powerful. Linearity of expectation holds regardless of dependence, so the expectation of a sum of indicators is the sum of the event probabilities even when the events overlap or influence each other heavily. That is why counting arguments built from indicators need no independence assumption. Dependence only starts to matter for variance.",
      sectionId: "7"
    },
    obj2: {
      question: "Is an indicator variable the same as a Bernoulli variable?",
      answer: "Yes — a lone indicator is the simplest Bernoulli variable there is: I_A ~ Bern(P(A)). It takes 1 with probability P(A) and 0 otherwise, which is exactly the Bernoulli definition. The two names differ only in emphasis: “indicator” points at the event being tracked, “Bernoulli” at the distribution being followed.",
      sectionId: "notation"
    },
    obj3: {
      question: "What is the difference between 1_A and 1{X ≤ x}?",
      answer: "What goes in the slot. The subscript form takes an event and asks whether a given outcome belongs to it. The brace form takes a statement and asks whether that statement is true. Both return 0 or 1, but one's argument is an outcome and the other's content is a sentence. The brace form is what makes F(x) = E[1{X ≤ x}] readable.",
      sectionId: "notation"
    },
    obj4: {
      question: "Why do some texts write χ_A instead of I_A?",
      answer: "Because analysis and measure theory call the same object the characteristic function of a set. Probability walked away from that name for good reason: here “characteristic function” already means E[e^{itX}], the transform of a distribution. Two different objects share one name across the fence, which is why this side writes “indicator” and leaves χ alone.",
      sectionId: "notation"
    },
    obj5: {
      question: "Is a sum of indicators a probability?",
      answer: "No — it is a random count. The sum ranges over 0, 1, …, n and tells you how many of the events actually occurred on this trial. Only its expectation lands back among probabilities, as the sum of the individual event probabilities. Keeping the random count apart from its average is the whole trick indicator arguments turn on.",
      sectionId: "notation"
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Indicator Random Variables",
      "description": "Learn indicator random variables: converting events to 0-1 random variables. Understand E[I_A] = P(A), linearity of expectation, counting with indicators, and applications.",
      "url": "https://www.learnmathclass.com/probability/indicators",
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
        "name": "Indicator Random Variables"
      },
      "teaches": [
        "Converting events to random variables using indicators",
        "Definition: I_A equals 1 if outcome in A, 0 otherwise",
        "Basic properties: only values 0 or 1, determined by event",
        "Key identity: E[I_A] = P(A)",
        "Linearity of expectation with indicator variables",
        "Counting with sums of indicator random variables",
        "Indicators and dependence in probability models",
        "Applications in Bernoulli trials, binomial models, and counting problems"
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
          "name": "Indicator Random Variables",
          "item": "https://www.learnmathclass.com/probability/indicators"
        }
      ]
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
The indicator [random variable](!/probability/random-variables) of $A$, denoted by $I_A$, is defined by

@academic[formula_callout:Indicator Random Variable Definition
$$I_A(\\omega)=\\begin{cases}1, & \\text{if } \\omega \\in A \\\\ 0, & \\text{if } \\omega \\notin A\\end{cases}$$
/probability/formulas#indicator_random_variable_definition]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@


The indicator $I_A$ is a [random variable](!/probability/random-variables) defined on the same [sample space](!/probability/sample-space) as the experiment.  
It represents membership in the event $A$ numerically.

An indicator is **not** a probability value; it is a random variable whose value depends on the outcome.
`,
      before:``,
      after:``,
      link:'',

    },

    notation:{
      title:`Indicator Notation`,
      lead:`The indicator is itself a piece of notation — a function built to turn membership into arithmetic. The marks to fix are its competing spellings, the brace form that accepts a whole condition instead of an event, and the sum that turns indicators into counts. All of them are catalogued among the [probability symbols](!/math-symbols/probability).`,
      inherited:`$P(\\cdot)$ and the event letters come from the [probability function](!/probability/probability-function#notation); $\\omega$ and the membership sign from [sample space notation](!/probability/sample-space#notation) and [set membership](!/set-theory/basics#2); $E[\\cdot]$ from [expected value notation](!/probability/expected-value#notation); the summation sign from [sequence notation](!/algebra/sequences/arithmetic#notation).`,
      entries:[
        {
          id:'indicator-spellings',
          tex:`$I_A$, $\\mathbf{1}_A$`,
          read:`the indicator of A`,
          means:`One function, several dresses: the roman capital $I_A$ the **Definition** above uses, and the bold or blackboard one — typeset 𝟙 in modern texts — a digit promoted to a letter, advertising the only two values the function ever takes. The subscript holds the event; some texts move it into parentheses as $I(A)$.`,
          alsoWritten:`$\\chi_A$ in analysis and measure theory, where the same object is called the "characteristic function" of the set — the older tradition probability walked away from.`,
          confusedWith:`The other "characteristic function". In probability that name is already taken by $E[e^{itX}]$, the transform of a distribution — so a probability text saying "characteristic function" almost never means $\\chi_A$; same name, two objects across the fence, which is exactly why this side writes "indicator" and leaves χ alone.`,
        },
        {
          id:'condition-braces',
          tex:`$\\mathbf{1}\\{X \\le x\\}$`,
          read:`one if the condition holds, zero otherwise`,
          means:`The brace form takes a **statement** where the subscript form takes an event: the braces convert a condition into the event of its truth — the same move as [random variable notation](!/probability/random-variables#notation)'s $\\{X \\le x\\}$ — and the indicator then converts that event into a number.`,
          cases:`The [CDF](!/probability/cdf#notation) in one line: $F(x) = E[\\mathbf{1}\\{X \\le x\\}]$ — accumulation as the average of a condition; in code the same idiom survives as booleans-cast-to-integers, the indicator wearing syntax.`,
          confusedWith:`The subscript form fed a set. $\\mathbf{1}_A(\\omega)$ asks whether a point belongs; $\\mathbf{1}\\{X \\le x\\}$ holds a claim — both return 0 or 1, but one's argument is an outcome and the other's content is a sentence, and swapping them writes sets where statements belong.`,
        },
        {
          id:'counting-sum',
          tex:`$N = \\sum_{i=1}^{n} I_{A_i}$`,
          read:`the count: one indicator per event, summed`,
          means:`The mark behind **Counting with Indicator Random Variables** below: each event contributes its 0-or-1, so $N$ is exactly "how many of the $A_i$ occurred" — a random count, not a probability.`,
          cases:`Taking $E$ termwise turns the count into probabilities, $E[N] = \\sum_i P(A_i)$ — the engine of **Expectation** and **Linearity** below; and a lone indicator is the simplest named variable there is, $I_A \\sim \\operatorname{Bern}(P(A))$ in the [family-declaration notation](!/probability/distributions#notation).`,
          confusedWith:`A probability. $N$ ranges over $0, 1, \\dots, n$; only its **expectation** lands back among probabilities — keeping the random count and its average apart is the entire trick the page turns on.`,
        },
      ],
      symbolsHref:`/math-symbols/probability`,
      symbolsLabel:`All probability symbols`,
      parentHref:`/probability`,
      parentLabel:`Probability`,
      before:``,
      after:``,
      link:'',

    },

    obj3:{
  
      title:`Basic Properties of Indicator Random Variables`,
      content:`
Indicator [random variables](!/probability/random-variables) have a simple structure.

• They take only two values: $0$ or $1$
• They are completely determined by the event they represent
• They are defined on the same sample space as the underlying experiment

Simple relationships follow directly from the definition:

• The indicator of the complement event equals $1 - I_A$
• Indicators reflect set operations at the level of outcomes

Stated formally, for events $A$ and $B$:

@academic[formula_callout:Indicator of Intersection
$$I_{A \\cap B} = I_A \\cdot I_B$$
/probability/formulas#indicator_of_intersection]@

@academic[formula_callout:Indicator of Complement
$$I_{A^c} = 1 - I_A$$
/probability/formulas#indicator_of_complement]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

@academic[pitfall,aside:true,width:35%:Adding indicators for a union
Writing $I_{A \\cup B} = I_A + I_B$ for one die roll, with $A$ = even and $B$ = at least 4, gives the value $2$ at $\\omega = 4$ and $P(A \\cup B) = \\frac{1}{2} + \\frac{1}{2} = 1$. The overlap comes off once: $I_{A \\cup B} = I_A + I_B - I_A I_B$, so $P(A \\cup B) = 1 - \\frac{1}{3} = \\frac{2}{3}$.
[Read more](!#pitfalls)]@

A union is built from the two formulas above. An outcome lies outside $A \\cup B$ exactly when it lies outside both events, so $I_{(A \\cup B)^c} = (1 - I_A)(1 - I_B)$. Taking the complement once more writes the indicator of the union in terms of $I_A$, $I_B$ and their product.

Because an indicator takes only the values $0$ and $1$, its variance is fixed by the probability of the event:

@academic[formula_callout:Variance of Indicator
$$\\operatorname{Var}(I_A) = P(A)\\bigl(1 - P(A)\\bigr)$$
/probability/formulas#variance_of_indicator]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

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

@academic[formula_callout:Expectation of Indicator
$$E[I_A]=P(A)$$
/probability/formulas#expectation_of_indicator]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

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
@academic[rule:Linearity of expectation
Expectation is linear.]@

For indicator random variables, this means:

• The expectation of a sum equals the sum of expectations
• No independence assumptions are required

@academic[fact,aside:true,width:35%:One match on average, any deck size
Shuffle $n$ cards numbered $1$ to $n$: card $i$ lands in position $i$ with probability $\\frac{1}{n}$, so the expected number of matches is $n \\cdot \\frac{1}{n} = 1$. The answer is the same for $3$ cards and for a million.]@

As a result, counting problems can be solved by expressing the quantity of interest as a sum of indicator variables and taking expectations term by term.

This technique avoids direct probability calculations and remains valid even when the indicators are dependent.

Matching problems are the classic test. When a deck is shuffled, the events "card $i$ lands in position $i$" are dependent: if every card but one is in place, the last one is forced into place as well. The full distribution of the number of matches takes inclusion–exclusion to compute, but its expectation needs only one probability per card.
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

@academic[pitfall,aside:true,width:35%:Subtracting the overlap from a count
Removing the overlap as for a union gives, for the number of sixes on two dice, $\\frac{1}{6} + \\frac{1}{6} - \\frac{1}{36} = \\frac{11}{36}$, the probability of at least one six. A double six adds $2$ to the count, so the expected number is $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$.
[Read more](!#pitfalls)]@

This approach converts counting questions into expectation calculations and allows results to be obtained without enumerating all outcomes or computing complex probabilities.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Indicators and Dependence`,
      content:`
Indicator [random variables](!/probability/random-variables) may be dependent.

@academic[rule_plain:Dependence does not affect the validity of linearity of expectation, so expectations of sums of indicators can still be computed term by term.]@


@academic[pitfall,aside:true,width:35%:Adding variances of dependent indicators
For one coin toss with $A$ = heads, adding $\\operatorname{Var}(I_A) + \\operatorname{Var}(I_{A^c}) = \\frac{1}{4} + \\frac{1}{4}$ gives $\\frac{1}{2}$. But $I_A + I_{A^c} = 1$ on every outcome, so its variance is $0$: the covariance $-\\frac{1}{4}$, counted twice, cancels the sum.
[Read more](!#pitfalls)]@

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

@academic[fact,aside:true,width:35%:Only about 5 records in 100 draws
The $k$-th value is the largest of the first $k$ with probability $\\frac{1}{k}$, so the expected number of records is $1 + \\frac{1}{2} + \\dots + \\frac{1}{100} \\approx 5.19$. A thousand draws raise it only to about $7.49$.]@

Records are a small example of such a structure. Values are drawn one at a time from the same continuous distribution, and a value is called a record when it is larger than every value drawn before it. Whether the $k$-th value is a record depends only on how the first $k$ values are ordered among themselves, so each draw carries its own record indicator. The number of records is the sum of these indicators, and its expectation is the sum of their probabilities, whatever the distribution of the values.
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
      title:`Indicators at a Glance`,
      content:`The table below collects the anatomy of indicator random variables — what they are, what they aren&apos;t, the key identity that ties them to events, the algebra they support, the linearity-of-expectation property that makes them powerful, the counting technique they enable, how dependence affects them, and where they show up across probability models — into a single reference card.`,
      before:``,
      after:``,
      link:'',
  
    },
    pitfalls:{
      title:`Common Pitfalls`,
      content:`Each of the three mistakes below is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Adding indicators for a union**

The indicator of $A \\cup B$ is needed, and $I_A + I_B$ is written for it. On outcomes that lie in both events the sum equals $2$, so it is not an indicator at all, and its expectation overstates the probability of the union.

Wrong working: for one roll of a fair die with $A = \\{2, 4, 6\\}$ (even) and $B = \\{4, 5, 6\\}$ (at least 4),
$$P(A \\cup B) = E[I_A + I_B] = \\frac{3}{6} + \\frac{3}{6} = 1$$

Right working: the overlap is removed once, using the product rule for the intersection.
$$I_{A \\cup B} = I_A + I_B - I_A I_B, \\quad P(A \\cup B) = \\frac{3}{6} + \\frac{3}{6} - \\frac{2}{6} = \\frac{4}{6} = \\frac{2}{3}$$

Why it happens: "or" reads like "plus", and for disjoint events the sum is correct, because $I_A I_B = 0$ on every outcome there. Overlapping events break it.

How to check: evaluate the formula at an outcome in both events. An indicator must give $1$, while $I_A + I_B$ gives $2$ at $\\omega = 4$. Or count directly: $A \\cup B = \\{2, 4, 5, 6\\}$ holds $4$ of the $6$ outcomes.

**Subtracting the overlap from a count**

The expected number of events that occur is computed like the probability of their union: the probabilities are added and the overlap is subtracted. That gives the probability that at least one event occurs, which is a different quantity.

Wrong working: for $X$, the number of sixes on two fair dice,
$$E[X] = \\frac{1}{6} + \\frac{1}{6} - \\frac{1}{36} = \\frac{11}{36}$$

Right working: $X = I + J$, with one indicator per die, and linearity needs no correction for the overlap.
$$E[X] = E[I] + E[J] = \\frac{6}{36} + \\frac{6}{36} = \\frac{12}{36} = \\frac{1}{3}$$

Why it happens: the double six looks counted twice, as in inclusion–exclusion. For a count that is right: on $(6, 6)$ there really are two sixes, and $X = 2$.

How to check: work out the distribution once. $X = 1$ on $10$ of the $36$ outcomes and $X = 2$ on $1$, so $E[X] = 1 \\cdot \\frac{10}{36} + 2 \\cdot \\frac{1}{36} = \\frac{12}{36}$.

**Adding variances of dependent indicators**

The variance of a sum of indicators is taken as the sum of their variances, as if the rule for expectation carried over. That holds only when every covariance between the indicators is zero, for example when they are independent.

Wrong working: for one toss of a fair coin with $A$ = heads,
$$\\operatorname{Var}(I_A + I_{A^c}) = \\frac{1}{2} \\cdot \\frac{1}{2} + \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{2}$$

Right working: $I_A I_{A^c} = 0$ on every outcome, so $\\operatorname{Cov}(I_A, I_{A^c}) = E[I_A I_{A^c}] - E[I_A]E[I_{A^c}] = 0 - \\frac{1}{4} = -\\frac{1}{4}$, and
$$\\operatorname{Var}(I_A + I_{A^c}) = \\frac{1}{4} + \\frac{1}{4} + 2\\left(-\\frac{1}{4}\\right) = 0$$

Why it happens: linearity of expectation needs no independence, and the same habit is carried over to variance, which is not linear.

How to check: by the complement rule, $I_A + I_{A^c} = I_A + (1 - I_A) = 1$ on every outcome, and a constant has variance $0$.`,
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


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const ogCountSixes = { kind: 'dice', svgTitle: 'Two dice: the number of sixes is the indicator of a six on the first die plus the indicator of a six on the second; (6,6) counts twice; expected count 12/36 = 1/3',
    events: [{ label: 'first die 6: I = 1', test: (a) => a === 6, color: 'f' }, { label: 'second die 6: J = 1', test: (a, b) => b === 6, color: 'r' }],
    notes: [{ text: 'sixes: X = I + J' }, { text: 'E[I] = E[J] = 6/36' }, { text: '(6,6): X = 2', color: 'g' }, { text: 'E[X] = 12/36 = 1/3', color: 'r' }],
    caption: 'Count with indicators: add their expectations' };
  const demoUnits = {
    u_1_0: demoUnitFrame({
      svg: coinSampleSpaceDiagrams.majority,
      caption: 'Majority heads: the four sequences where the indicator equals 1',
      text: 'The highlighted sequences are the event, and the indicator variable is the function that assigns 1 to each of them and 0 to the other four: it turns a set of outcomes into a number that can be added and averaged. Its expected value is the count of highlighted cells over 8. Select other events and read their indicators on the',
      href: '/probability/visual-tools/coin-toss',
      linkText: 'coin toss sample space explorer',
    }),
    countSixes: demoUnitFrame({
      svg: renderOutcomeGrid(ogCountSixes),
      caption: 'Counting sixes with two indicators',
      text: 'Roll two dice and let X be the number of sixes. Write X = I + J, where I is 1 on the blue row (first die 6) and J is 1 on the amber column (second die 6). Each indicator is 1 on 6 of the 36 outcomes, so E[I] = E[J] = 6/36. The cell (6,6) lies in both and has X = 2, which the sum handles automatically: E[X] = 6/36 + 6/36 = 1/3, with no need to list the distribution of X.',
    }),
  };

  return {
    props: {
    demoUnits,
      sectionsContent,
      introContent,
      summaryTable,
      faqQuestions,
      schemas,
      seoData: {
        title: "Indicator Random Variables: Converting Events to 0-1 Variables | Learn Math Class",
        description: "Learn indicator random variables: converting events to 0-1 random variables. Understand E[I_A] = P(A), linearity of expectation, counting with indicators, and applications.",
        keywords: keyWords.join(", "),
        url: "/probability/indicators",
        name: "Indicator Random Variables"
      }
    }
  }
}

export default function IndicatorsPage({
  seoData,
  sectionsContent,
  introContent,
  summaryTable,
  faqQuestions,
  schemas, demoUnits
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
                  <div key={'unit-u_1_0'} dangerouslySetInnerHTML={{ __html: demoUnits.u_1_0 }} />,
          `The formal definition follows.`,
          `@academic[punchline:An indicator turns an event into a number, so events can be added, multiplied and averaged.]@`,
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
        id:'notation',
        title:sectionsContent.notation.title,
        link:'',
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
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
                  <div key={'unit-countSixes'} dangerouslySetInnerHTML={{ __html: demoUnits.countSixes }} />,
          `With n dice the same sum of n indicators gives n/6 expected sixes.`,
          `@academic[punchline:The expected number of events that occur is the sum of their probabilities, overlaps or not.]@`,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.pitfalls.title,
        link:'',
        content:[
          sectionsContent.pitfalls.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Indicator Variables FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Indicators in Probability</h1>
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