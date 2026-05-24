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
//     "combinatorics in probability",
//     "counting in probability",
//     "finite sample space",
//     "classical probability",
//     "classical probability formula",
//     "counting outcomes",
//     "equally likely outcomes",
//     "permutations probability",
//     "combinations probability",
//     "combinatorial probability",
//     "discrete probability models",
//     "counting methods probability",
//     "probability from counting"
//   ]

//   const faqQuestions = {
//     obj1: {
//       question: "How is combinatorics used in probability?",
//       answer: "Combinatorics provides the counting methods needed to calculate probabilities in finite sample spaces. When outcomes are equally likely, probability equals the ratio of favorable outcomes to total outcomes. Counting these outcomes correctly determines whether probability calculations are accurate."
//     },
//     obj2: {
//       question: "What is the classical probability formula?",
//       answer: "The classical probability formula is P(A) = |A| / |Ω|, where |A| is the number of outcomes in event A and |Ω| is the total number of outcomes in the sample space. This formula applies only when the sample space is finite and all outcomes are equally likely."
//     },
//     obj3: {
//       question: "When do counting methods work for probability calculations?",
//       answer: "Counting methods work only for finite, discrete probability models with equally likely outcomes. They do not apply when the sample space is infinite or continuous, when probabilities are defined through density functions, or when outcomes are modeled empirically or through simulation."
//     },
//     obj4: {
//       question: "How does conditional probability relate to counting?",
//       answer: "Under finite, equally likely assumptions, conditional probability is a counting problem on a restricted sample space. Outcomes that contradict the given information are removed, the sample space is reduced, and probabilities are recalculated by counting outcomes within this smaller space."
//     },
//     obj5: {
//       question: "How does counting lead to probability distributions?",
//       answer: "When counting is repeated across structured experiments, probability distributions form. Counting successes in Bernoulli trials leads to the binomial distribution, counting selections without replacement leads to the hypergeometric distribution, and counting outcomes in symmetric finite models leads to the discrete uniform distribution."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Combinatorics in Probability",
//       "description": "Learn how combinatorics and counting methods form the foundation of classical probability. Understand finite sample spaces, equally likely outcomes, and the classical probability formula.",
//       "url": "https://www.learnmathclass.com/combinatorics",
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
//         "name": "Combinatorics in Probability"
//       },
//       "teaches": [
//         "Classical probability formula using counting: P(A) = |A| / |Ω|",
//         "How counting structures determine probability calculations",
//         "Counting in standard probability experiments: coins, dice, cards, urns",
//         "How counting leads to discrete probability distributions",
//         "Conditional probability as restricted counting",
//         "Computing expectation through counting arguments",
//         "Limitations and scope of counting methods in probability"
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
//           "name": "Combinatorics in Probability",
//           "item": "https://www.learnmathclass.com/combinatorics"
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
// - [Equally Likely Events](!/probability/definitions#equally_likely_events) — the foundation of classical combinatorial probability
// - [Sample Space](!/probability/definitions#sample_space) — the set being counted
// - [Event](!/probability/definitions#event) — the subset whose size determines its probability`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },

//     obj1:{
//       title:`Finite Sample Spaces and Counting`,
//       content:`
// In classical probability models, probabilities are computed using  
   
//    $P(A)=\\dfrac{|A|}{|\\Omega|}$

// This formula applies only when the [sample space](!/probability/sample-space) $\\Omega$ is finite and all outcomes are equally likely.  
// Under these conditions, probability values are determined entirely by counting how many outcomes belong to an [event](!/probability/events) and how many outcomes are possible in total.

// When these assumptions fail, counting alone is no longer sufficient and other probability tools are required.
// `,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:`Counting Structures Used by Probability Models`,
//       content:`
// Probability calculations depend on how outcomes are organized.

// • If order matters, outcomes are counted as ordered selections.
// • If order does not matter, outcomes are counted as unordered selections.
// • In some models, repetition of outcomes is allowed; in others, it is not.

// These structural distinctions determine which counting method applies to a given probability [model](!/probability/models).  
// Choosing the wrong structure leads directly to incorrect probability values.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:`Counting in Classical Probability Experiments`,
//       content:`
// Standard probability experiments require explicit outcome definitions.

// • [Coin-toss](!/probability/models/coin-toss) experiments count sequences of results.
// • [Dice-roll](!/probability/models/dice-roll) experiments count ordered or unordered outcomes depending on the question.
// • Card draws and urn models count selections with or without replacement.

// The same physical experiment can require different counting rules depending on how outcomes are defined.  
// Probability errors often originate from defining the outcome space incorrectly before counting.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:`From Counting to Distributions`,
//       content:`
// When counting is repeated across structured experiments, probability distributions are formed.

// • In repeated [Bernoulli trials](!/probability/distributions/discrete#bernoulli), counting successes leads to the [binomial distribution](!/probability/distributions/discrete#binomial).
// • In sampling without replacement, counting selections leads to the [hypergeometric distribution](!/probability/distributions/discrete#hypergeometric).
// • In symmetric finite models, counting outcomes leads to the [discrete uniform distribution](!/probability/distributions/discrete#uniform).

// In each case, counting determines the possible values of a [random variable](!/probability/random-variables) and the probabilities assigned to those values.  
// This establishes the chain: counting → [random variable](!/probability/random-variables) → [probability distribution](!/probability/distributions).
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:`Conditional Probability as Restricted Counting`,
//       content:`
// [Conditional probability](!/probability/conditional-probability) recomputes probabilities after information is applied.

// • Outcomes that contradict the given information are removed.
// • The [sample space](!/probability/sample-space) is reduced.
// • Probabilities are recalculated by counting outcomes within this restricted space.

// Under finite, equally likely assumptions, [conditional probability](!/probability/conditional-probability) is therefore a counting problem on a smaller sample space.  
// This interpretation provides the structural basis for Bayes' theorem.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:`Expectation via Counting`,
//       content:`
// Expectation can be computed without constructing a full [probability distribution](!/probability/distributions).

// • Each outcome contributes a numerical value.
// • Outcomes are counted according to their contribution.
// • Indicator [random variables](!/probability/random-variables) isolate whether specific [events](!/probability/events) occur.

// By summing contributions across outcomes, expectation values can be obtained directly from counting arguments.  
// This approach simplifies many finite probability problems while remaining exact.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:`Scope Limits of Counting Methods`,
//       content:`
// Counting methods apply only to finite, discrete probability [models](!/probability/models).

// They do not apply when:

// • the [sample space](!/probability/sample-space) is infinite or continuous
// • probabilities are defined through [density functions](!/probability/probability-function#pdf)
// • outcomes are modeled empirically or through simulation

// In these cases, probability values are not determined by counting outcomes, and different mathematical tools are required.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:`Position Within the Probability Framework`,
//       content:`
// Probability theory is organized in layers.

// • Experiments generate outcomes.
// • Combinatorics counts those outcomes.
// • Probability assigns numerical weights to [events](!/probability/events).
// • [Distributions](!/probability/distributions) summarize the behavior of [random variables](!/probability/random-variables).

// This page connects counting to probability without duplicating the material covered in the combinatorics or distribution sections.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:`Summary`,
//       content:`
// In finite probability models, probability values are determined by counting outcomes.

// Combinatorics provides the mechanism for measuring [event](!/probability/events) sizes, defining [random variables](!/probability/random-variables), and forming [discrete probability distributions](!/probability/distributions/discrete). It underlies classical probability formulas, conditional probability calculations, and expectation computations based on indicator variables.

// This page explains how counting is used within probability theory, while all counting techniques themselves are handled in the dedicated combinatorics section.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
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
//     title: "Counting as the Foundation of Classical Probability",
//     content: `In classical probability theory, calculating probabilities often reduces to a counting problem. When outcomes are finite and equally likely, the probability of an event is simply the ratio of favorable outcomes to total outcomes. This fundamental relationship makes combinatorics—the mathematics of counting—an essential tool in probability.

// Understanding how to count correctly determines whether probability calculations are accurate. The structure of an experiment dictates which counting method applies: whether order matters, whether repetition is allowed, and how outcomes are grouped. These distinctions directly affect probability values.

// This page explains how counting methods connect to probability calculations, from basic classical formulas to conditional probability, expectation, and discrete distributions. All specific counting techniques (permutations, combinations, etc.) are covered in the dedicated combinatorics section.`
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Combinatorics in Probability: Counting and Classical Formula | Learn Math Class",
//         description: "Learn how combinatorics and counting methods form the foundation of classical probability. Understand finite sample spaces, equally likely outcomes, and the classical probability formula.",
//         keywords: keyWords.join(", "),
//         url: "/combinatorics",
//         name: "Combinatorics in Probability"
//       }
//     }
//   }
// }

// export default function CombinatoricsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Combinatorics in Probability</h1>
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



// tables-optimized: v4 | 2026-05-23 | 2 tables (obj4 aggregation/mapping, obj9 summary capstone)

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
    "combinatorics in probability",
    "counting in probability",
    "finite sample space",
    "classical probability",
    "classical probability formula",
    "counting outcomes",
    "equally likely outcomes",
    "permutations probability",
    "combinations probability",
    "combinatorial probability",
    "discrete probability models",
    "counting methods probability",
    "probability from counting"
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — aggregation/mapping: counting situation → resulting distribution
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Counting situation</th>
      <th style="${tableHeaders.aggregation}">What is counted</th>
      <th style="${tableHeaders.aggregation}">Resulting distribution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Repeated <a href="/probability/distributions/discrete#bernoulli" style="${linkStyle}">Bernoulli trials</a> with fixed n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">number of successes across the n trials</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/probability/distributions/discrete#binomial" style="${linkStyle}">Binomial</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sampling without replacement</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">number of selected items of a given type</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/probability/distributions/discrete#hypergeometric" style="${linkStyle}">Hypergeometric</a></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Symmetric finite model</td>
      <td style="padding: 12px 15px; color: #34495e;">which outcome occurs among equally likely possibilities</td>
      <td style="padding: 12px 15px; color: #34495e;"><a href="/probability/distributions/discrete#uniform" style="${linkStyle}">Discrete uniform</a></td>
    </tr>
  </tbody>
</table>
`

  // obj9 — summary capstone: role of counting across probability theory
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Application</th>
      <th style="${tableHeaders.summary}">Role of counting</th>
      <th style="${tableHeaders.summary}">What it produces</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Classical probability</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count outcomes in the event and in <a href="/probability/sample-space" style="${linkStyle}">Ω</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A) = |A| ⁄ |Ω|</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Experiment setup</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">enumerate the outcomes that define Ω (with order or without, with repetition or without)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the sample space itself</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Discrete <a href="/probability/distributions" style="${linkStyle}">distributions</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count outcomes across structured trials</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">PMFs for binomial, hypergeometric, discrete uniform</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/conditional-probability" style="${linkStyle}">Conditional probability</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count outcomes inside the restricted sample space</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A|B) by counting on the smaller Ω</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Expectation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum contributions across outcomes, often via indicator <a href="/probability/random-variables" style="${linkStyle}">random variables</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">E[X] in finite models, no full PMF needed</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Scope boundary</td>
      <td style="padding: 12px 15px; color: #34495e;">counting does not apply</td>
      <td style="padding: 12px 15px; color: #34495e;">continuous spaces, density-based models, empirical / simulation models</td>
    </tr>
  </tbody>
</table>
`

  const faqQuestions = {
    obj1: {
      question: "How is combinatorics used in probability?",
      answer: "Combinatorics provides the counting methods needed to calculate probabilities in finite sample spaces. When outcomes are equally likely, probability equals the ratio of favorable outcomes to total outcomes. Counting these outcomes correctly determines whether probability calculations are accurate."
    },
    obj2: {
      question: "What is the classical probability formula?",
      answer: "The classical probability formula is P(A) = |A| / |Ω|, where |A| is the number of outcomes in event A and |Ω| is the total number of outcomes in the sample space. This formula applies only when the sample space is finite and all outcomes are equally likely."
    },
    obj3: {
      question: "When do counting methods work for probability calculations?",
      answer: "Counting methods work only for finite, discrete probability models with equally likely outcomes. They do not apply when the sample space is infinite or continuous, when probabilities are defined through density functions, or when outcomes are modeled empirically or through simulation."
    },
    obj4: {
      question: "How does conditional probability relate to counting?",
      answer: "Under finite, equally likely assumptions, conditional probability is a counting problem on a restricted sample space. Outcomes that contradict the given information are removed, the sample space is reduced, and probabilities are recalculated by counting outcomes within this smaller space."
    },
    obj5: {
      question: "How does counting lead to probability distributions?",
      answer: "When counting is repeated across structured experiments, probability distributions form. Counting successes in Bernoulli trials leads to the binomial distribution, counting selections without replacement leads to the hypergeometric distribution, and counting outcomes in symmetric finite models leads to the discrete uniform distribution."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Combinatorics in Probability",
      "description": "Learn how combinatorics and counting methods form the foundation of classical probability. Understand finite sample spaces, equally likely outcomes, and the classical probability formula.",
      "url": "https://www.learnmathclass.com/combinatorics",
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
        "name": "Combinatorics in Probability"
      },
      "teaches": [
        "Classical probability formula using counting: P(A) = |A| / |Ω|",
        "How counting structures determine probability calculations",
        "Counting in standard probability experiments: coins, dice, cards, urns",
        "How counting leads to discrete probability distributions",
        "Conditional probability as restricted counting",
        "Computing expectation through counting arguments",
        "Limitations and scope of counting methods in probability"
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
          "name": "Combinatorics in Probability",
          "item": "https://www.learnmathclass.com/combinatorics"
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
- [Equally Likely Events](!/probability/definitions#equally_likely_events) — the foundation of classical combinatorial probability
- [Sample Space](!/probability/definitions#sample_space) — the set being counted
- [Event](!/probability/definitions#event) — the subset whose size determines its probability`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

    obj1:{
      title:`Finite Sample Spaces and Counting`,
      content:`
In classical probability models, probabilities are computed using  
   
   $P(A)=\\dfrac{|A|}{|\\Omega|}$

This formula applies only when the [sample space](!/probability/sample-space) $\\Omega$ is finite and all outcomes are equally likely.  
Under these conditions, probability values are determined entirely by counting how many outcomes belong to an [event](!/probability/events) and how many outcomes are possible in total.

When these assumptions fail, counting alone is no longer sufficient and other probability tools are required.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`Counting Structures Used by Probability Models`,
      content:`
Probability calculations depend on how outcomes are organized.

• If order matters, outcomes are counted as ordered selections.
• If order does not matter, outcomes are counted as unordered selections.
• In some models, repetition of outcomes is allowed; in others, it is not.

These structural distinctions determine which counting method applies to a given probability [model](!/probability/models).  
Choosing the wrong structure leads directly to incorrect probability values.
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Counting in Classical Probability Experiments`,
      content:`
Standard probability experiments require explicit outcome definitions.

• [Coin-toss](!/probability/models/coin-toss) experiments count sequences of results.
• [Dice-roll](!/probability/models/dice-roll) experiments count ordered or unordered outcomes depending on the question.
• Card draws and urn models count selections with or without replacement.

The same physical experiment can require different counting rules depending on how outcomes are defined.  
Probability errors often originate from defining the outcome space incorrectly before counting.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`From Counting to Distributions`,
      content:`
When counting is repeated across structured experiments, probability distributions are formed.

• In repeated [Bernoulli trials](!/probability/distributions/discrete#bernoulli), counting successes leads to the [binomial distribution](!/probability/distributions/discrete#binomial).
• In sampling without replacement, counting selections leads to the [hypergeometric distribution](!/probability/distributions/discrete#hypergeometric).
• In symmetric finite models, counting outcomes leads to the [discrete uniform distribution](!/probability/distributions/discrete#uniform).

In each case, counting determines the possible values of a [random variable](!/probability/random-variables) and the probabilities assigned to those values.  
This establishes the chain: counting → [random variable](!/probability/random-variables) → [probability distribution](!/probability/distributions). The table below collects this chain in compact form, naming what is counted in each structured experiment and the distribution it produces.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Conditional Probability as Restricted Counting`,
      content:`
[Conditional probability](!/probability/conditional-probability) recomputes probabilities after information is applied.

• Outcomes that contradict the given information are removed.
• The [sample space](!/probability/sample-space) is reduced.
• Probabilities are recalculated by counting outcomes within this restricted space.

Under finite, equally likely assumptions, [conditional probability](!/probability/conditional-probability) is therefore a counting problem on a smaller sample space.  
This interpretation provides the structural basis for Bayes' theorem.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Expectation via Counting`,
      content:`
Expectation can be computed without constructing a full [probability distribution](!/probability/distributions).

• Each outcome contributes a numerical value.
• Outcomes are counted according to their contribution.
• Indicator [random variables](!/probability/random-variables) isolate whether specific [events](!/probability/events) occur.

By summing contributions across outcomes, expectation values can be obtained directly from counting arguments.  
This approach simplifies many finite probability problems while remaining exact.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Scope Limits of Counting Methods`,
      content:`
Counting methods apply only to finite, discrete probability [models](!/probability/models).

They do not apply when:

• the [sample space](!/probability/sample-space) is infinite or continuous
• probabilities are defined through [density functions](!/probability/probability-function#pdf)
• outcomes are modeled empirically or through simulation

In these cases, probability values are not determined by counting outcomes, and different mathematical tools are required.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Position Within the Probability Framework`,
      content:`
Probability theory is organized in layers.

• Experiments generate outcomes.
• Combinatorics counts those outcomes.
• Probability assigns numerical weights to [events](!/probability/events).
• [Distributions](!/probability/distributions) summarize the behavior of [random variables](!/probability/random-variables).

This page connects counting to probability without duplicating the material covered in the combinatorics or distribution sections.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`Summary`,
      content:`
In finite probability models, probability values are determined by counting outcomes.

Combinatorics provides the mechanism for measuring [event](!/probability/events) sizes, defining [random variables](!/probability/random-variables), and forming [discrete probability distributions](!/probability/distributions/discrete). It underlies classical probability formulas, conditional probability calculations, and expectation computations based on indicator variables.

This page explains how counting is used within probability theory, while all counting techniques themselves are handled in the dedicated combinatorics section. The table below collects each application of counting introduced above — the role counting plays in each, and what counting produces.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
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
    title: "Counting as the Foundation of Classical Probability",
    content: `In classical probability theory, calculating probabilities often reduces to a counting problem. When outcomes are finite and equally likely, the probability of an event is simply the ratio of favorable outcomes to total outcomes. This fundamental relationship makes combinatorics—the mathematics of counting—an essential tool in probability.

Understanding how to count correctly determines whether probability calculations are accurate. The structure of an experiment dictates which counting method applies: whether order matters, whether repetition is allowed, and how outcomes are grouped. These distinctions directly affect probability values.

This page explains how counting methods connect to probability calculations, from basic classical formulas to conditional probability, expectation, and discrete distributions. All specific counting techniques (permutations, combinations, etc.) are covered in the dedicated combinatorics section.`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      obj4Table,
      summaryTable,
      faqQuestions,
      schemas,
      seoData: {
        title: "Combinatorics in Probability: Counting and Classical Formula | Learn Math Class",
        description: "Learn how combinatorics and counting methods form the foundation of classical probability. Understand finite sample spaces, equally likely outcomes, and the classical probability formula.",
        keywords: keyWords.join(", "),
        url: "/combinatorics",
        name: "Combinatorics in Probability"
      }
    }
  }
}

export default function CombinatoricsPage({
  seoData,
  sectionsContent,
  introContent,
  obj4Table,
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
          <div key={'obj4-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj4Table}}/>,
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
          <div key={'summary-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: summaryTable}}/>,
        ]
    },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Combinatorics in Probability</h1>
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