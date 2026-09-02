

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

 $I_A(\\omega)=\\begin{cases}1, & \\text{if } \\omega \\in A \\\\ 0, & \\text{if } \\omega \\notin A\\end{cases}$


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
Indicator [random variable](!/probability/random-variables) have a simple structure.

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
Indicator [random variables](!/probability/random-variables) may be dependent.

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
      title:`Indicators at a Glance`,
      content:`The table below collects the anatomy of indicator random variables — what they are, what they aren&apos;t, the key identity that ties them to events, the algebra they support, the linearity-of-expectation property that makes them powerful, the counting technique they enable, how dependence affects them, and where they show up across probability models — into a single reference card.`,
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
    props: {
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
  schemas
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