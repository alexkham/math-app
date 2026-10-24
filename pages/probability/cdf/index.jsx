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
//     'cumulative distribution function',
//     'cdf',
//     'cdf in probability',
//     'cdf definition',
//     'cdf of random variable',
//     'P(X ≤ x)',
//     'cumulative probability',
//     'cdf properties',
//     'discrete cdf',
//     'continuous cdf',
//     'cdf vs pdf',
//     'cdf vs pmf',
//     'using cdf',
//     'interval probability cdf',
//     'cdf calculation'
//   ]

//   const faqQuestions = {
//     obj1: {
//       question: "What is a cumulative distribution function (CDF)?",
//       answer: "The cumulative distribution function (CDF) of a random variable X, denoted F_X(x), gives the probability that X takes a value less than or equal to x. It shows how probability accumulates as values increase along the number line, providing a complete characterization of the random variable's distribution."
//     },
//     obj2: {
//       question: "How is CDF different from PDF and PMF?",
//       answer: "The CDF tracks accumulated probability up to a point and exists for all random variables. The PMF applies only to discrete variables and gives probability at individual values. The PDF applies only to continuous variables and describes probability density. The CDF is the most general representation, with PMF and PDF as special cases."
//     },
//     obj3: {
//       question: "What are the key properties of a CDF?",
//       answer: "A valid CDF must be: (1) non-decreasing - it can only stay the same or increase, (2) right-continuous, (3) bounded between 0 and 1, and (4) have limits of 0 as x approaches negative infinity and 1 as x approaches positive infinity. These properties follow directly from the probability axioms."
//     },
//     obj4: {
//       question: "How do you use the CDF to calculate probabilities?",
//       answer: "To find P(a < X ≤ b), subtract CDF values: F_X(b) - F_X(a). This works uniformly for discrete, continuous, and mixed distributions. For one-sided probabilities like P(X ≤ x), simply evaluate the CDF at x. This often simplifies calculations by replacing sums or integrals with function evaluations."
//     },
//     obj5: {
//       question: "What is the difference between discrete and continuous CDFs?",
//       answer: "For discrete random variables, the CDF is a step function with jumps at possible values, where each jump size equals the probability of that value. For continuous random variables, the CDF increases smoothly without jumps, and its slope is determined by the probability density function. Mixed distributions show both behaviors."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Cumulative Distribution Function (CDF)",
//       "description": "Learn cumulative distribution function (CDF) in probability. Understand how probability accumulates, CDF properties, and calculating probabilities for random variables.",
//       "url": "https://www.learnmathclass.com/probability/cdf",
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
//         "name": "Cumulative Distribution Function"
//       },
//       "teaches": [
//         "Definition and meaning of cumulative distribution function (CDF)",
//         "Mathematical formula F_X(x) = P(X ≤ x)",
//         "Key properties of CDFs: non-decreasing, right-continuous, proper limits",
//         "How CDF works for discrete, continuous, and mixed distributions",
//         "Using CDF to calculate interval probabilities",
//         "Differences between CDF, PMF, and PDF",
//         "Visual interpretation of probability accumulation"
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
//           "name": "Cumulative Distribution Function (CDF)",
//           "item": "https://www.learnmathclass.com/probability/cdf"
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
// - [Cumulative Distribution Function](!/probability/definitions#cumulative_distribution_function) — $F_X(x) = P(X \\leq x)$
// - [Joint CDF](!/probability/definitions#joint_cdf) — $F_{X,Y}(x,y) = P(X \\leq x, Y \\leq y)$
// - [Probability Mass Function](!/probability/definitions#probability_mass_function) — relates to CDF by summation for discrete variables
// - [Probability Density Function](!/probability/definitions#probability_density_function) — relates to CDF by integration for continuous variables
// - [Random Variable](!/probability/definitions#random_variable) — the object the CDF characterizes`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },

//     from:{
//       title:`From Events to Random Variables`,
//       content:`
// Probability is first defined for events, but many questions involve numerical values rather than yes-or-no outcomes. A random variable connects these two views by assigning a number to each outcome of an experiment.

// Once a random variable is defined, statements about its value naturally form events. Expressions like $X \le x$, $X > x$, or $a < X \le b$ describe collections of outcomes and therefore have probabilities attached to them.

// The cumulative distribution function is built exactly on this connection. It takes events of the form $X \le x$ and assigns to each value $x$ the probability of that event, linking random variables back to the event-based foundation of probability.
// `,
//       before:``,
//       after:``,
  
  
//     },
//     definition:{
//       title:`CDF Defined (Core Meaning)`,
//       content:`
// The cumulative distribution function describes how probability is distributed along the values of a random variable. For each possible value, it tells us how much probability has accumulated up to that point.

// Instead of asking whether the random variable takes one specific value, the CDF answers a broader question: how likely it is that the value does not exceed a given level. As the value increases, the accumulated probability can only stay the same or grow.

// This perspective is what makes the CDF so powerful. It focuses on accumulation rather than individual outcomes, providing a single, consistent way to describe the behavior of a random variable across its entire range.
// `,
//       before:``,
//       after:``,
  
//     },
  
//     mathematical:{
  
//       title:`Mathematical Definition`,
//       content:`
// Formally, the cumulative distribution function of a random variable $X$ is defined by

// $F_X(x) = P(X \\le x)$

// For each real number $x$, the CDF assigns the probability that the random variable takes a value less than or equal to $x$. The function $F_X$ maps numbers on the real line to values between 0 and 1.

// The choice of "less than or equal to" is not arbitrary. It ensures that the CDF behaves consistently across discrete, continuous, and mixed random variables, allowing a single definition to cover all cases.
// `,
//       before:``,
//       after:``,
  
//     },
//     properties:{
//       title:`Key Properties of the CDF`,
//       content:`
// The cumulative distribution function obeys several fundamental properties that follow directly from the probability axioms.

// - **Values between 0 and 1**  
//   For every $x$, the CDF satisfies $0 \\le F_X(x) \\le 1$.

// - **Non-decreasing**  
//   As $x$ increases, $F_X(x)$ can only stay the same or increase. Accumulated probability never decreases.

// - **Right-continuous**  
//   The value of the CDF at a point includes the probability at that point, which ensures consistent behavior for jumps in discrete cases.

// - **Limits at infinity**  
//   As $x \\to -\\infty$, $F_X(x) \\to 0$.  
//   As $x \\to +\\infty$, $F_X(x) \\to 1$.

// These properties are what distinguish a valid CDF from an arbitrary function and guarantee that it represents a genuine probability distribution.
// `,
//       before:``,
//       after:``,
  
//     },
//     discrete:{
//       title:`Discrete Random Variables`,
//       content:`
// For a discrete random variable, probability is concentrated at specific values. The CDF reflects this by increasing only at those values and remaining flat everywhere else.

// In this case, the CDF is a step function. Each jump corresponds to a value the random variable can take, and the size of the jump equals the probability assigned to that value.

// This makes the connection to the probability mass function clear: the PMF determines the jump sizes, while the CDF accumulates those jumps as the value increases. Reading the CDF from left to right shows how probability builds up one possible value at a time.
// `,
//       before:``,
//       after:``,
  
//     },
//     continuous:{
//       title:`Continuous Random Variables`,
//       content:`
// For a continuous random variable, probability is spread smoothly over intervals rather than concentrated at individual points. As a result, the CDF increases continuously instead of jumping.

// In this setting, the CDF describes how probability accumulates as the value grows along the real line. The slope of this accumulation is captured by the probability density function, which indicates how rapidly probability is building at each point.

// A key consequence is that a continuous random variable assigns zero probability to any single exact value. Probabilities are obtained only by looking at intervals, and the CDF provides a direct way to compute them.
// `,
//       before:``,
//       after:``,
  
//     },
//     mixed:{
//       title:`Mixed Distributions`,
//       content:`
// Some random variables do not fit neatly into purely discrete or purely continuous categories. They may assign positive probability to certain specific values while also spreading probability continuously over intervals.

// The CDF handles this naturally. It combines flat regions, smooth increases, and sudden jumps within a single function. Jumps represent discrete probability masses, while smooth segments represent continuously distributed probability.

// This is one reason the CDF is more general than the PMF or PDF. Even when neither of those fully describes a distribution on its own, the CDF still provides a complete and consistent representation.
// `,
//       before:``,
//       after:``,
  
//     },
//     using:{
//       title:`Using the CDF to Compute Probabilities`,
//       content:`
// One of the main advantages of the cumulative distribution function is that it allows probabilities to be computed directly from differences of values.

// For any two numbers $a < b$, the probability that the random variable lies between them is obtained by subtracting accumulated probabilities:

// $P(a < X \\le b) = F_X(b) - F_X(a)$

// This works uniformly for discrete, continuous, and mixed random variables. One-sided probabilities are handled just as easily by reading the CDF at a single point.

// Because of this, the CDF often simplifies probability calculations by replacing sums or integrals with simple evaluations of a single function.
// `,
//       before:``,
//       after:``,
  
//     },
//     vs:{
//       title:`CDF vs PMF vs PDF`,
//       content:`
// The CDF, PMF, and PDF describe probability distributions from different perspectives, but they are not interchangeable.

// The **CDF** tracks accumulated probability. It tells how much probability lies at or below a given value and always exists for any random variable.

// The **PMF** applies only to discrete random variables. It assigns probabilities to individual values, and the CDF is obtained by summing these probabilities up to a point.

// The **PDF** applies only to continuous random variables. It describes how densely probability is spread, and the CDF is obtained by accumulating this density over an interval.

// Because the CDF works in all cases, it serves as the most general representation of a probability distribution, with the PMF and PDF appearing as special cases derived from it.
// `,
//       before:``,
//       after:``,
  
//     },
//     visual:{
//       title:`Visual Interpretation`,
//       content:`
// The cumulative distribution function can be understood visually as probability accumulating along the number line.

// Starting from the far left, the CDF begins at zero and increases as more possible values are included. In discrete cases, this accumulation appears as upward jumps. In continuous cases, it appears as a smooth rising curve. Mixed distributions show both behaviors together.

// Reading the CDF from left to right shows how probability builds up. At any point, the height of the curve represents how much of the total probability lies at or below that value.
// `,
//       before:``,
//       after:``,
  
//     },
//     mistakes:{
//       title:`Common Mistakes`,
//       content:`
// The cumulative distribution function is often misunderstood because it looks simple but encodes a lot of structure.

// A common mistake is confusing the CDF with a density or mass function. The CDF does not describe how much probability sits **at** a point, but how much has accumulated **up to** that point.

// Another frequent error is forgetting that the CDF is cumulative. Interpreting its value as a probability of an exact outcome leads to incorrect conclusions, especially in continuous cases.

// In [discrete distributions](!/probability/distributions/discrete), jumps in the CDF are sometimes misread as arbitrary features. Each jump has a precise meaning: its size equals the probability assigned to that value.

// Finally, it is easy to forget that every valid CDF must satisfy basic properties such as monotonicity and proper limits. Violating these properties means the function cannot represent a [probability distribution](!/probability/distributions).
// `,
//       before:``,
//       after:``,
  
//     },
//     matters:{
//       title:`Why the CDF Matters`,
//       content:`
// The cumulative distribution function fully characterizes the distribution of a [random variable](!/probability/random-variables). Knowing the CDF is enough to recover all probability statements about the variable.

// It provides a single framework that works for [discrete](!/probability/distributions/discrete), [continuous](!/probability/distributions/continuous), and mixed distributions. This makes it a central object in probability theory and a natural bridge between different types of models.

// Many important concepts rely directly on the CDF, including quantiles, medians, percentiles, and probability intervals. In both theory and applications, the CDF is often the most convenient way to reason about probabilities.
// `,
//       before:``,
//       after:``,
  
//     },
//     connections:{
//       title:`Connections to Other Probability Concepts`,
//       content:`
// The CDF ties together several core ideas in probability.

// • [Events](!/probability/events) appear as statements of the form $X \le x$.  
// • [Random variables](!/probability/random-variables) provide the numerical structure the CDF describes.  
// • [PMF](!/probability/probability-function#pmf) and [PDF](!/probability/probability-function#pdf) are specific ways probability is distributed, both derived from the CDF.  
// • [Probability axioms](!/probability/axioms) guarantee the basic properties of the CDF.  
// • **Quantiles and percentiles** are defined by inverting the CDF.  
// • [Expectation](!/probability/expected-value) and [variance](!/probability/variance) can be expressed using the CDF.

// Through these connections, the CDF serves as a unifying object that links foundational probability concepts with practical calculations.
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
//     id: "intro",
//     title: "Accumulating Probability",
//     content: `
// When working with [random variables](!/probability/random-variables), we are often not interested in the probability of an exact value, but in how much probability lies **up to** a certain point. Questions like "How likely is the value to be below this threshold?" or "What fraction of outcomes fall to the left of this number?" appear naturally.

// The cumulative distribution function captures this idea directly. Instead of focusing on individual outcomes, it tracks how probability accumulates as values increase along the number line. This single object provides a unified way to describe distributions, whether they are [discrete](!/probability/distributions/discrete), [continuous](!/probability/distributions/continuous), or a mixture of both.

// The sections that follow explain how this accumulation works, how it is defined formally, and why the cumulative distribution function plays a central role in probability theory.
// `
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "CDF (Cumulative Distribution Function) | Learn Math Class",
//         description: "Learn cumulative distribution function (CDF) in probability. Understand how probability accumulates, CDF properties, and calculating probabilities for random variables.",
//         keywords: keyWords.join(", "),
//         url: "/probability/cdf",
//         name: "Cumulative Distribution Function (CDF)"
//       }
//     }
//   }
// }

// export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
//         title:sectionsContent.from.title,
//         link:'',
//         content:[
//             sectionsContent.from.content,
//         ]
//     },
//     {
//         id:'definition',
//         title:sectionsContent.definition.title,
//         link:'',
//         content:[
//             sectionsContent.definition.content,
//         ]
//     },
//     {
//         id:'mathematical',
//         title:sectionsContent.mathematical.title,
//         link:'',
//         content:[
//             sectionsContent.mathematical.content,
//         ]
//     },
//     {
//         id:'properties',
//         title:sectionsContent.properties.title,
//         link:'',
//         content:[
//             sectionsContent.properties.content,
//         ]
//     },
//     {
//         id:'discrete',
//         title:sectionsContent.discrete.title,
//         link:'',
//         content:[
//             sectionsContent.discrete.content,
//         ]
//     },
//     {
//         id:'continuous',
//         title:sectionsContent.continuous.title,
//         link:'',
//         content:[
//             sectionsContent.continuous.content,
//         ]
//     },
//     {
//         id:'mixed',
//         title:sectionsContent.mixed.title,
//         link:'',
//         content:[
//             sectionsContent.mixed.content,
//         ]
//     },
//     {
//         id:'using',
//         title:sectionsContent.using.title,
//         link:'',
//         content:[
//             sectionsContent.using.content,
//         ]
//     },
//     {
//         id:'vs',
//         title:sectionsContent.vs.title,
//         link:'',
//         content:[
//             sectionsContent.vs.content,
//         ]
//     },
//     {
//         id:'visual',
//         title:sectionsContent.visual.title,
//         link:'',
//         content:[
//             sectionsContent.visual.content,
//         ]
//     },
//     {
//         id:'mistakes',
//         title:sectionsContent.mistakes.title,
//         link:'',
//         content:[
//             sectionsContent.mistakes.content,
//         ]
//     },
//     {
//         id:'matters',
//         title:sectionsContent.matters.title,
//         link:'',
//         content:[
//             sectionsContent.matters.content,
//         ]
//     },
//     {
//         id:'connections',
//         title:sectionsContent.connections.title,
//         link:'',
//         content:[
//             sectionsContent.connections.content,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cumulative Distribution Function (CDF)</h1>
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
//    <Sections sections={genericSections.slice(1)}
   
//    />
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-23 | 4 tables (properties aggregation, vs comparison, mistakes aggregation, overview summary capstone)

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
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import discreteCdfDiagrams from '@/app/components/visualizations/probability/discrete-distribution/CDFs/discreteCdfDiagrams'
import continuousCdfDiagrams from '@/app/components/visualizations/probability/continuous-distribution/CDF/continuousCdfDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){

  const keyWords = [
    'cumulative distribution function',
    'cdf',
    'cdf in probability',
    'cdf definition',
    'cdf of random variable',
    'P(X ≤ x)',
    'cumulative probability',
    'cdf properties',
    'discrete cdf',
    'continuous cdf',
    'cdf vs pdf',
    'cdf vs pmf',
    'using cdf',
    'interval probability cdf',
    'cdf calculation'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // properties — aggregation: the four defining properties of a CDF
  const propertiesTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Property</th>
      <th style="${tableHeaders.aggregation}">Statement</th>
      <th style="${tableHeaders.aggregation}">What it ensures</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Bounded</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0 ≤ F<sub>X</sub>(x) ≤ 1 for every x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every value is a valid probability</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Non-decreasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">F<sub>X</sub>(x) stays the same or increases as x grows</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">accumulated probability never decreases</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Right-continuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the value at x includes the probability at x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">jumps in discrete and mixed cases behave consistently</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Limits at infinity</td>
      <td style="padding: 12px 15px; color: #34495e;">F<sub>X</sub>(x) → 0 as x → −∞;   F<sub>X</sub>(x) → 1 as x → +∞</td>
      <td style="padding: 12px 15px; color: #34495e;">the function spans the full probability scale</td>
    </tr>
  </tbody>
</table>
`

  // vs — comparison: CDF vs PMF vs PDF
  const vsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Function</th>
      <th style="${tableHeaders.comparison}">Applies to</th>
      <th style="${tableHeaders.comparison}">What it represents</th>
      <th style="${tableHeaders.comparison}">Relation to CDF</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">CDF — F<sub>X</sub>(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any random variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">accumulated probability up to x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the function itself</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/probability-function#pmf" style="${linkStyle}">PMF</a> — p<sub>X</sub>(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">discrete variables only</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">probability at each individual value</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">CDF is the cumulative sum of PMF values</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/probability/probability-function#pdf" style="${linkStyle}">PDF</a> — f<sub>X</sub>(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">continuous variables only</td>
      <td style="padding: 12px 15px; color: #34495e;">probability density at each point</td>
      <td style="padding: 12px 15px; color: #34495e;">CDF is the integral of PDF from −∞ to x</td>
    </tr>
  </tbody>
</table>
`

  // mistakes — aggregation: misconception → correction
  const mistakesTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Mistake</th>
      <th style="${tableHeaders.aggregation}">Correction</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing CDF with a density or mass function</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">F<sub>X</sub>(x) is probability accumulated <em>up to</em> x, not the probability <em>at</em> x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Forgetting the CDF is cumulative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reading F<sub>X</sub>(x) as a point probability misreads it, especially in continuous cases where P(X = x) = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Misreading jumps in discrete CDFs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">each jump has a precise meaning — its size equals the probability assigned to that value</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Ignoring required properties</td>
      <td style="padding: 12px 15px; color: #34495e;">a function that is not monotonic or lacks the correct limits cannot represent a probability distribution</td>
    </tr>
  </tbody>
</table>
`

  // overview — summary capstone: CDF across discrete / continuous / mixed
  const overviewTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Variable type</th>
      <th style="${tableHeaders.summary}">CDF shape</th>
      <th style="${tableHeaders.summary}">How it changes</th>
      <th style="${tableHeaders.summary}">Companion function</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/distributions/discrete" style="${linkStyle}">Discrete</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">step function — flat between values, jumps at possible values</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increases only at the possible values of X</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">PMF — jump size at x equals p<sub>X</sub>(x)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/distributions/continuous" style="${linkStyle}">Continuous</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">smooth, continuously increasing curve, no jumps</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increases continuously across the real line</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">PDF — slope of the CDF equals f<sub>X</sub>(x)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Mixed</td>
      <td style="padding: 12px 15px; color: #34495e;">combines flat regions, smooth segments, and isolated jumps</td>
      <td style="padding: 12px 15px; color: #34495e;">jumps at discrete masses and smooth growth over continuous parts</td>
      <td style="padding: 12px 15px; color: #34495e;">partial PMF (at the masses) and partial PDF (over the continuous parts)</td>
    </tr>
  </tbody>
</table>
`

  // FAQ pass: all five originals named their own h2 — CDF Defined, CDF vs
  // PMF vs PDF, Key Properties, Using the CDF to Compute Probabilities, and
  // the discrete/continuous split across three sections. Replaced with the
  // notation section's endpoint questions, which is where every costly CDF
  // error actually lives.
  const faqQuestions = {
    obj1: {
      question: "Why is the CDF defined with ≤ rather than <?",
      answer: "It is a deliberate choice, not an accident. Including the point itself is what makes the CDF right-continuous, and it lets a single definition cover discrete, continuous and mixed variables alike. For continuous variables the choice is invisible, since P(X = x) = 0. For discrete ones it decides whether a jump belongs to the step before it or the step after.",
      sectionId: "notation"
    },
    obj2: {
      question: "Does F(b) − F(a) include the endpoint a?",
      answer: "No. The difference gives P(a < X ≤ b) — open on the left, closed on the right. For a continuous variable that distinction costs nothing, since single points carry no probability. For a discrete variable it matters: to get P(a ≤ X ≤ b) you must add back the mass sitting at a, which F(a) has already subtracted away.",
      sectionId: "using"
    },
    obj3: {
      question: "What is the difference between F(x) and f(x)?",
      answer: "One letter, two cases, two different objects. Capital F accumulates probability and is bounded by 1; lowercase f is a rate and may exceed 1. Calculus ties them together — f is the derivative of F, and F is the integral of f — but they answer different questions: F gives a probability directly, f does not.",
      sectionId: "notation"
    },
    obj4: {
      question: "What is the survival function?",
      answer: "The complement of the CDF: P(X > x) = 1 − F(x). Where the CDF accumulates probability up to a point, the survival function measures what is left beyond it. The two differ by exactly the mass sitting at x — invisible for continuous variables, but a real gap at a discrete jump. It is standard in reliability and time-to-event work.",
      sectionId: "notation"
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Cumulative Distribution Function (CDF)",
      "description": "Learn cumulative distribution function (CDF) in probability. Understand how probability accumulates, CDF properties, and calculating probabilities for random variables.",
      "url": "https://www.learnmathclass.com/probability/cdf",
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
        "name": "Cumulative Distribution Function"
      },
      "teaches": [
        "Definition and meaning of cumulative distribution function (CDF)",
        "Mathematical formula F_X(x) = P(X ≤ x)",
        "Key properties of CDFs: non-decreasing, right-continuous, proper limits",
        "How CDF works for discrete, continuous, and mixed distributions",
        "Using CDF to calculate interval probabilities",
        "Differences between CDF, PMF, and PDF",
        "Visual interpretation of probability accumulation"
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
          "name": "Cumulative Distribution Function (CDF)",
          "item": "https://www.learnmathclass.com/probability/cdf"
        }
      ]
    }
  }

  // Concept introduction (section 1, "from") — template A, definition last.
  // Running instance: one fair die. Old "from" text (three paragraphs, no
  // widgets) is kept in sectionsContent.from, unused, and reused verbatim.
  // Sections "definition" and "mathematical" (with the formula box) unchanged.
  const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
  const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
    cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
  const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
  const ciQuestionsTable = ciTableOpen(['question about a die roll X', 'as an event']) +
    ciRow(['at most 4?', 'X ≤ 4']) +
    ciRow(['more than 2?', 'X &gt; 2'], { shade: true }) +
    ciRow(['between 3 and 5?', '2 &lt; X ≤ 5'], { last: true }) +
    '</tbody></table>'
  const ciRunningTable = ciTableOpen(['x', 'P(X = x)', 'P(X ≤ x): running total']) +
    ciRow(['1', '1/6', '1/6']) +
    ciRow(['2', '1/6', '2/6'], { shade: true }) +
    ciRow(['3', '1/6', '3/6']) +
    ciRow(['4', '1/6', '4/6'], { shade: true }) +
    ciRow(['5', '1/6', '5/6']) +
    ciRow(['6', '1/6', '6/6 = 1'], { shade: true, last: true, color: '#2563EB', cols: [2] }) +
    '</tbody></table>'
  const ciEdgeTable = ciTableOpen(['question', 'value']) +
    ciRow(['P(X ≤ 4)', '4/6']) +
    ciRow(['P(X &lt; 4)', '3/6: the jump at 4 is left out'], { shade: true, color: '#a4243b', cols: [1] }) +
    ciRow(['P(X ≤ 4.7)', '4/6: nothing new between 4 and 5'], { last: true }) +
    '</tbody></table>'

  const sectionsContent={
    obj0: {
  title: `Key Terms`,
  content: `
- [Cumulative Distribution Function](!/probability/definitions#cumulative_distribution_function) — $F_X(x) = P(X \\leq x)$
- [Joint CDF](!/probability/definitions#joint_cdf) — $F_{X,Y}(x,y) = P(X \\leq x, Y \\leq y)$
- [Probability Mass Function](!/probability/definitions#probability_mass_function) — relates to CDF by summation for discrete variables
- [Probability Density Function](!/probability/definitions#probability_density_function) — relates to CDF by integration for continuous variables
- [Random Variable](!/probability/definitions#random_variable) — the object the CDF characterizes`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

    from:{
      title:`From Events to Random Variables`,
      content:`
Probability is first defined for events, but many questions involve numerical values rather than yes-or-no outcomes. A random variable connects these two views by assigning a number to each outcome of an experiment.

Once a random variable is defined, statements about its value naturally form events. Expressions like $X \\le x$, $X > x$, or $a < X \\le b$ describe collections of outcomes and therefore have probabilities attached to them.

The cumulative distribution function is built exactly on this connection. It takes events of the form $X \\le x$ and assigns to each value $x$ the probability of that event, linking random variables back to the event-based foundation of probability.
`,
      before:``,
      after:``,
  
  
    },
    definition:{
      title:`CDF Defined (Core Meaning)`,
      content:`
The cumulative distribution function describes how probability is distributed along the values of a random variable. For each possible value, it tells us how much probability has accumulated up to that point.

Instead of asking whether the random variable takes one specific value, the CDF answers a broader question: how likely it is that the value does not exceed a given level. As the value increases, the accumulated probability can only stay the same or grow.

This perspective is what makes the CDF so powerful. It focuses on accumulation rather than individual outcomes, providing a single, consistent way to describe the behavior of a random variable across its entire range.
`,
      before:``,
      after:``,
  
    },
  
    mathematical:{
  
      title:`Mathematical Definition`,
      content:`
Formally, the cumulative distribution function of a random variable $X$ is defined by

@academic[formula_callout:CDF Definition
$$F_X(x) = P(X \\le x)$$
/probability/formulas#cdf_definition]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

For each real number $x$, the CDF assigns the probability that the random variable takes a value less than or equal to $x$. The function $F_X$ maps numbers on the real line to values between 0 and 1.

The choice of "less than or equal to" is not arbitrary. It ensures that the CDF behaves consistently across discrete, continuous, and mixed random variables, allowing a single definition to cover all cases.
`,
      before:``,
      after:``,

    },

    notation:{
      title:`CDF Notation`,
      lead:`One capital letter, one subscript, and one inequality sign that was chosen rather than inherited. The case of the letter is the whole distinction between a probability and a density, and every mark here is catalogued among the [probability symbols](!/math-symbols/probability).`,
      inherited:`$X$, $x$, $P(\\cdot)$ and the density $f(x)$ come from the [probability function](!/probability/probability-function#notation); the event braces $\\{X \\le x\\}$ that $P$ measures from [random variable notation](!/probability/random-variables#notation).`,
      entries:[
        {
          id:'capital-f',
          tex:`$F_X(x)$`,
          read:`capital F sub X of x — the CDF of X at x`,
          means:`Capital $F$ names the cumulative function, and the subscript names which variable it belongs to: $F_X(x) = P(X \\le x)$, per **Mathematical Definition** above. The subscript earns its place the moment two variables share a page — $F_X$ and $F_Y$ are different functions.`,
          cases:`The subscript is dropped when only one variable is in play, leaving plain $F(x)$; the argument is always a number on the real line, so $F$ is defined everywhere even where the variable never lands.`,
          confusedWith:`The density $f(x)$. One letter, two cases, two different objects: $F$ accumulates and is bounded by $1$, while lowercase $f$ is a rate that may exceed $1$ — **CDF vs PMF vs PDF** below sets them side by side, and calculus ties them together as $F' = f$.`,
        },
        {
          id:'leq-convention',
          tex:`$P(X \\le x)$`,
          read:`the probability that X is at most x`,
          means:`The inequality is a convention, not an accident: writing $\\le$ rather than $<$ includes the point itself, which is what makes the CDF right-continuous and lets one definition serve discrete, continuous and mixed variables alike.`,
          cases:`For continuous variables the choice is invisible — $P(X = x) = 0$, so $\\le$ and $<$ agree; for discrete ones it decides whether a jump belongs to the step before or after it, which is exactly where **Common Mistakes** below finds its errors.`,
          confusedWith:`A strict inequality. $F(3)$ includes the outcome $3$ — the survival function $P(X > x) = 1 - F(x)$ is what excludes it, and the two differ by exactly the mass sitting at the point.`,
        },
        {
          id:'interval-difference',
          tex:`$F(b) - F(a)$`,
          read:`F of b minus F of a`,
          means:`The idiom for interval probabilities: accumulating to $b$ and subtracting what accumulated to $a$ leaves $P(a < X \\le b)$ — the notation of **Using the CDF to Compute Probabilities** below, and the reason the CDF is a computational tool rather than a description.`,
          cases:`The same shape as the [evaluation bracket](!/calculus/integrals/definite#2) of definite integrals — and not by coincidence: for continuous variables $F(b) - F(a)$ is exactly $\\int_a^b f(x)\\,dx$.`,
          confusedWith:`Which endpoint is included. The difference gives $P(a < X \\le b)$ — open on the left, closed on the right; for discrete variables shifting to $P(a \\le X \\le b)$ requires adding the mass at $a$ back in.`,
        },
      ],
      symbolsHref:`/math-symbols/probability`,
      symbolsLabel:`All probability symbols`,
      parentHref:`/probability`,
      parentLabel:`Probability`,
      before:``,
      after:``,

    },
    properties:{
      title:`Key Properties of the CDF`,
      content:`
The cumulative distribution function obeys several fundamental properties that follow directly from the probability axioms.

- **Values between 0 and 1**  
  For every $x$, the CDF satisfies $0 \\le F_X(x) \\le 1$.

- **Non-decreasing**  
  As $x$ increases, $F_X(x)$ can only stay the same or increase. Accumulated probability never decreases.

- **Right-continuous**  
  The value of the CDF at a point includes the probability at that point, which ensures consistent behavior for jumps in discrete cases.

- **Limits at infinity**  
  As $x \\to -\\infty$, $F_X(x) \\to 0$.  
  As $x \\to +\\infty$, $F_X(x) \\to 1$.

Stated formally:

@academic[formula_callout:CDF Limits at Infinity
$$\\lim_{x \\to -\\infty} F_X(x) = 0, \\qquad \\lim_{x \\to +\\infty} F_X(x) = 1$$
/probability/formulas#cdf_limits_at_infinity]@

@academic[formula_callout:CDF Monotonicity
$$x_1 \\leq x_2 \\implies F_X(x_1) \\leq F_X(x_2)$$
/probability/formulas#cdf_monotonicity]@

@academic[formula_callout:CDF Right-continuity
$$\\lim_{y \\to x^+} F_X(y) = F_X(x)$$
/probability/formulas#cdf_right-continuity]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

@academic[pitfall,aside:true,width:35%:Forgetting where the CDF is zero
Writing $F_X(x) = 1 - e^{-x}$ for every real $x$ gives $F_X(-1) = 1 - e \\approx -1.72$, a negative probability, and $F_X(x) \\to -\\infty$ as $x \\to -\\infty$. As a CDF it must read $F_X(x) = 0$ for $x < 0$ and $1 - e^{-x}$ for $x \\ge 0$.
[Read more](!#mistakes)]@

A CDF given by a formula is usually written for the values the variable can actually take, such as $x \\ge 0$ for a waiting time, and that is where most of the work happens. The properties above, though, are statements about every real number $x$, including the values far to the left and far to the right of anything the variable can produce.

These properties are what distinguish a valid CDF from an arbitrary function and guarantee that it represents a genuine probability distribution. The table below names each property, states it formally, and gives the structural guarantee it provides.
`,
      before:``,
      after:``,
  
    },
    discrete:{
      title:`Discrete Random Variables`,
      content:`
For a discrete random variable, probability is concentrated at specific values. The CDF reflects this by increasing only at those values and remaining flat everywhere else.

In this case, the CDF is a step function. Each jump corresponds to a value the random variable can take, and the size of the jump equals the probability assigned to that value.

Formally, the CDF adds up the probabilities of all values up to $x$:

@academic[formula_callout:CDF from PMF
$$F_X(x) = \\sum_{k \\leq x} p_X(k)$$
/probability/formulas#cdf_from_pmf]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

@academic[pitfall,aside:true,width:35%:Reading the CDF as a point probability
Taking $F_X(3) = \\frac{1}{2}$ for a fair die as the chance of rolling a $3$ counts the faces $1$, $2$ and $3$ together. The chance of a $3$ alone is the jump at $3$: $F_X(3) - F_X(2) = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$.
[Read more](!#mistakes)]@

This makes the connection to the probability mass function clear: the PMF determines the jump sizes, while the CDF accumulates those jumps as the value increases. Reading the CDF from left to right shows how probability builds up one possible value at a time.

On a graph of the staircase, two different heights can be read at every possible value: the level of the step that starts there, and the size of the riser that leads up to it. The level is a running total collected from the far left; the riser belongs to the single value where it stands.
`,
      before:``,
      after:``,
  
    },
    continuous:{
      title:`Continuous Random Variables`,
      content:`
For a continuous random variable, probability is spread smoothly over intervals rather than concentrated at individual points. As a result, the CDF increases continuously instead of jumping.

In this setting, the CDF describes how probability accumulates as the value grows along the real line. The slope of this accumulation is captured by the probability density function, which indicates how rapidly probability is building at each point.

In symbols, the CDF accumulates the density, and the density is the slope of the CDF:

@academic[formula_callout:CDF from PDF
$$F_X(x) = \\int_{-\\infty}^{x} f_X(t)\\,dt$$
/probability/formulas#cdf_from_pdf]@

@academic[formula_callout:PDF as CDF Derivative
$$f_X(x) = \\frac{d}{dx} F_X(x)$$
/probability/formulas#pdf_as_cdf_derivative]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

@academic[rule_corollary_plain:A key consequence is that a continuous random variable assigns zero probability to any single exact value.]@

@academic[pitfall,aside:true,width:35%:Reading the density as a probability
For $X$ uniform on $[0, \\frac{1}{2}]$ the density is $f_X(x) = 2$, and taking $f_X(\\frac{1}{4}) = 2$ as $P(X \\le \\frac{1}{4})$ gives a probability above $1$. The CDF gives it: $F_X(\\frac{1}{4}) = 2 \\cdot \\frac{1}{4} = \\frac{1}{2}$.
[Read more](!#mistakes)]@

Probabilities are obtained only by looking at intervals, and the CDF provides a direct way to compute them.

Two functions appear in this section, and both take a number $x$ and return a number. The CDF $F_X(x)$ returns accumulated probability, so its values always lie between $0$ and $1$. The density $f_X(x)$ returns the rate at which that probability is building near $x$; where a lot of probability is packed into a short stretch, the rate is high. A narrow interval can therefore carry a large density and still hold very little probability.
`,
      before:``,
      after:``,
  
    },
    mixed:{
      title:`Mixed Distributions`,
      content:`
Some random variables do not fit neatly into purely discrete or purely continuous categories. They may assign positive probability to certain specific values while also spreading probability continuously over intervals.

@academic[fact,aside:true,width:35%:A CDF with no jumps and no density
Write $X$ in base $3$, each digit a fair choice of $0$ or $2$: every single value has probability $0$, so the CDF never jumps, yet $X$ stays in the Cantor set, of total length $0$, so there is no density. This CDF, the devil's staircase, climbs from $0$ to $1$ while staying flat on gaps of total length $1$ inside $[0, 1]$.]@

The CDF handles this naturally. It combines flat regions, smooth increases, and sudden jumps within a single function. Jumps represent discrete probability masses, while smooth segments represent continuously distributed probability.

This is one reason the CDF is more general than the PMF or PDF. Even when neither of those fully describes a distribution on its own, the CDF still provides a complete and consistent representation.
`,
      before:``,
      after:``,
  
    },
    using:{
      title:`Using the CDF to Compute Probabilities`,
      content:`
One of the main advantages of the cumulative distribution function is that it allows probabilities to be computed directly from differences of values.

For any two numbers $a < b$, the probability that the random variable lies between them is obtained by subtracting accumulated probabilities:

@academic[formula_callout:Probability of Interval via CDF
$$P(a < X \\le b) = F_X(b) - F_X(a)$$
/probability/formulas#probability_of_interval_via_cdf]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

This works uniformly for discrete, continuous, and mixed random variables. One-sided probabilities are handled just as easily by reading the CDF at a single point.

@academic[pitfall,aside:true,width:35%:Dropping the mass at the left endpoint
For a fair die, writing $P(2 \\le X \\le 4) = F_X(4) - F_X(2) = \\frac{4}{6} - \\frac{2}{6} = \\frac{1}{3}$ leaves out the face $2$. Subtracting $F_X(1)$ keeps it: $\\frac{4}{6} - \\frac{1}{6} = \\frac{1}{2}$.
[Read more](!#mistakes)]@

For a discrete variable, the interval in the formula has to match the interval in the question exactly. The left side is open at $a$ and closed at $b$, and the difference on the right reproduces precisely that: the mass sitting at $b$ is counted, the mass sitting at $a$ is not. Questions are phrased with every combination of $<$ and $\\le$, so each one is matched to this shape before any value of $F_X$ is read.

For a continuous random variable the same probability is the area under the density:

@academic[formula_callout:Probability of Interval Continuous
$$P(a \\leq X \\leq b) = \\int_{a}^{b} f_X(x)\\,dx$$
/probability/formulas#probability_of_interval_continuous]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

Because of this, the CDF often simplifies probability calculations by replacing sums or integrals with simple evaluations of a single function.
`,
      before:``,
      after:``,
  
    },
    vs:{
      title:`CDF vs PMF vs PDF`,
      content:`
The CDF, PMF, and PDF describe probability distributions from different perspectives, but they are not interchangeable.

The **CDF** tracks accumulated probability. It tells how much probability lies at or below a given value and always exists for any random variable.

The **PMF** applies only to discrete random variables. It assigns probabilities to individual values, and the CDF is obtained by summing these probabilities up to a point.

The **PDF** applies only to continuous random variables. It describes how densely probability is spread, and the CDF is obtained by accumulating this density over an interval.

Because the CDF works in all cases, it serves as the most general representation of a probability distribution, with the PMF and PDF appearing as special cases derived from it. The table below sets the three side by side across what each function applies to, what it represents, and how it relates to the CDF.
`,
      before:``,
      after:``,
  
    },
    visual:{
      title:`Visual Interpretation`,
      content:`
The cumulative distribution function can be understood visually as probability accumulating along the number line.

Starting from the far left, the CDF begins at zero and increases as more possible values are included. In discrete cases, this accumulation appears as upward jumps. In continuous cases, it appears as a smooth rising curve. Mixed distributions show both behaviors together.

Reading the CDF from left to right shows how probability builds up. At any point, the height of the curve represents how much of the total probability lies at or below that value.
`,
      before:``,
      after:``,
  
    },
    mistakes:{
      title:`Common Mistakes`,
      content:`
The cumulative distribution function is often misunderstood because it looks simple but encodes a lot of structure.

A common mistake is confusing the CDF with a density or mass function. The CDF does not describe how much probability sits **at** a point, but how much has accumulated **up to** that point.

Another frequent error is forgetting that the CDF is cumulative. Interpreting its value as a probability of an exact outcome leads to incorrect conclusions, especially in continuous cases.

In [discrete distributions](!/probability/distributions/discrete), jumps in the CDF are sometimes misread as arbitrary features. Each jump has a precise meaning: its size equals the probability assigned to that value.

Finally, it is easy to forget that every valid CDF must satisfy basic properties such as monotonicity and proper limits. Violating these properties means the function cannot represent a [probability distribution](!/probability/distributions). The table below pairs each common mistake with the correction that prevents it.
`,
      more:`
Two further mistakes come up once the CDF is used for calculations. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Reading the density as a probability**

For a continuous variable, the density $f_X(x)$ is evaluated at a point and its value is reported as a probability, either as $P(X \\le x)$ or as the chance of landing at $x$.

Wrong working: for $X$ uniform on $[0, \\frac{1}{2}]$, the density is $f_X(x) = 2$ on that interval, so
$$P\\left(X \\le \\frac{1}{4}\\right) = f_X\\left(\\frac{1}{4}\\right) = 2$$

Right working: the probability is the area under the density up to $\\frac{1}{4}$, which is the value of the CDF there.
$$F_X\\left(\\frac{1}{4}\\right) = \\int_0^{1/4} 2\\,dt = \\frac{1}{2}$$

Why it happens: for a discrete variable the PMF value at a point is a probability, and the habit carries over to the density, which looks like the same kind of function and is written with almost the same letter as $F_X$.

How to check: a probability can never exceed $1$, while a density can. Here $f_X(x) = 2$ at every point of $[0, \\frac{1}{2}]$, although the whole interval holds probability $F_X(\\frac{1}{2}) = 1$.

**Dropping the mass at the left endpoint**

For a discrete variable, the probability of a closed interval $a \\le X \\le b$ is computed as $F_X(b) - F_X(a)$, the formula for the half-open interval $a < X \\le b$.

Wrong working: for a fair die,
$$P(2 \\le X \\le 4) = F_X(4) - F_X(2) = \\frac{4}{6} - \\frac{2}{6} = \\frac{1}{3}$$

Right working: $F_X(2)$ already contains the face $2$, so subtracting it removes that face from the answer. Subtract the CDF one value lower instead.
$$P(2 \\le X \\le 4) = F_X(4) - F_X(1) = \\frac{4}{6} - \\frac{1}{6} = \\frac{1}{2}$$

Why it happens: the formula $P(a < X \\le b) = F_X(b) - F_X(a)$ is remembered without its strict inequality on the left. For continuous variables the slip costs nothing, since $P(X = a) = 0$, so it goes unnoticed until a discrete problem.

How to check: count the values directly. The faces $2$, $3$ and $4$ give $\\frac{3}{6} = \\frac{1}{2}$.
`,
      before:``,
      after:``,
  
    },
    matters:{
      title:`Why the CDF Matters`,
      content:`
@academic[rule_theorem_plain:The cumulative distribution function fully characterizes the distribution of a [random variable](!/probability/random-variables). Knowing the CDF is enough to recover all probability statements about the variable.]@

It provides a single framework that works for [discrete](!/probability/distributions/discrete), [continuous](!/probability/distributions/continuous), and mixed distributions. This makes it a central object in probability theory and a natural bridge between different types of models.

@academic[fact,aside:true,width:35%:Every continuous variable hides a uniform one
Feed a continuous $X$ into its own CDF and $F_X(X)$ is uniform on $[0, 1]$: $F_X(X) \\le u$ means $X$ has not passed the point where $F_X$ reaches $u$, which has probability $u$. Run backwards, $F_X^{-1}(U)$ for a uniform $U$ has CDF $F_X$, a standard way to simulate any distribution.]@

Many important concepts rely directly on the CDF, including quantiles, medians, percentiles, and probability intervals. In both theory and applications, the CDF is often the most convenient way to reason about probabilities.

A quantile reads the CDF backwards. The median is the value $m$ with $F_X(m) = \\frac{1}{2}$, and the $90$th percentile is the value where $F_X$ first reaches $0.9$. For a continuous variable every level $u$ between $0$ and $1$ is reached somewhere, so the CDF and its inverse pass freely between values of $X$ and probabilities.
`,
      before:``,
      after:``,
  
    },
    connections:{
      title:`Connections to Other Probability Concepts`,
      content:`
The CDF ties together several core ideas in probability.

• [Events](!/probability/events) appear as statements of the form $X \\le x$.  
• [Random variables](!/probability/random-variables) provide the numerical structure the CDF describes.  
• [PMF](!/probability/probability-function#pmf) and [PDF](!/probability/probability-function#pdf) are specific ways probability is distributed, both derived from the CDF.  
• [Probability axioms](!/probability/axioms) guarantee the basic properties of the CDF.  
• **[Quantiles and percentiles](!/probability/median#8)** are defined by inverting the CDF.  
• [Expectation](!/probability/expected-value) and [variance](!/probability/variance) can be expressed using the CDF.

Through these connections, the CDF serves as a unifying object that links foundational probability concepts with practical calculations.
`,
      before:``,
      after:``,
  
    },
    overview:{
      title:`CDF Across the Three Cases`,
      content:`
The cumulative distribution function applies uniformly to discrete, continuous, and mixed random variables, yet its visual and structural behavior differs in each setting. The table below collects these three cases — naming the CDF&apos;s shape, how it changes as x grows, and the companion function (PMF or PDF) that captures the local detail behind each pattern.
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
    title: "Accumulating Probability",
    content: `
When working with [random variables](!/probability/random-variables), we are often not interested in the probability of an exact value, but in how much probability lies **up to** a certain point. Questions like "How likely is the value to be below this threshold?" or "What fraction of outcomes fall to the left of this number?" appear naturally.

The cumulative distribution function captures this idea directly. Instead of focusing on individual outcomes, it tracks how probability accumulates as values increase along the number line. This single object provides a unified way to describe distributions, whether they are [discrete](!/probability/distributions/discrete), [continuous](!/probability/distributions/continuous), or a mixture of both.

The sections that follow explain how this accumulation works, how it is defined formally, and why the cumulative distribution function plays a central role in probability theory.
`
  }


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const fpMixedCdf = { kind: 'pieces', svgTitle: 'A mixed CDF: flat at 0, a jump of 0.3 at x = 0, then a straight rise to 1 at x = 2, then flat', xRange: [-1, 3], yRange: [-0.1, 1.2],
    pieces: [
      { fn: () => 0, from: -1, to: 0, ends: [null, 'open'], color: 'f' },
      { fn: (x) => 0.3 + 0.35 * x, from: 0, to: 2, ends: ['closed', null], color: 'f', label: { text: 'smooth rise: spread-out 0.7', x: 1.05, y: 0.3 + 0.35 * 1.05, pos: 'se' } },
      { fn: () => 1, from: 2, to: 3, ends: [null, null], color: 'f' },
    ],
    vlines: [{ x: 0 }],
    notes: [{ x: 0.08, y: 0.18, text: 'jump 0.3 = P(X = 0)', pos: 'e', color: 'r' }, { x: 2.05, y: 1.1, text: 'flat: no probability', pos: 'e', color: 'r' }],
    caption: 'One CDF, both kinds: a jump for the mass at 0, a ramp for the rest' };
  const conceptIntroFigures = {
    dieCdf: discreteCdfDiagrams.discreteUniform,
    questionsTable: ciQuestionsTable,
    runningTable: ciRunningTable,
    edgeTable: ciEdgeTable,
  };

  const demoUnits = {
    u_discrete_0: demoUnitFrame({
      svg: discreteCdfDiagrams.binomial,
      caption: 'Binomial CDF, n = 10, p = 0.5: a staircase',
      text: 'The cumulative probability is flat between the possible values and jumps at each one; the height of the jump at k is exactly P(X = k), so the whole probability mass function can be read off the risers. Nothing accumulates between integers because a discrete variable puts no probability there. Switch distributions and compare the staircases on the',
      href: '/probability/visual-tools/cdf/discrete',
      linkText: 'discrete CDF explorer',
    }),
    u_continuous_1: demoUnitFrame({
      svg: continuousCdfDiagrams.normal,
      caption: 'Normal CDF, mean 0, standard deviation 1',
      text: 'Here the cumulative probability rises without any jumps: probability is spread over intervals, so P(X = x) is zero for every single point and the curve climbs smoothly from 0 toward 1. The steepest part of the S-curve sits where the density is largest. Move along the curve and read the accumulated probability on the',
      href: '/probability/visual-tools/cdf/continuous',
      linkText: 'continuous CDF visualizer',
    }),
    u_using_2: demoUnitFrame({
      svg: continuousCdfDiagrams.uniform,
      caption: 'Continuous uniform CDF, a = 0, b = 10: a straight ramp',
      text: 'For a uniform variable the CDF is a straight line from 0 at a to 1 at b, so the probability of any interval inside [a, b] is the difference of the two ramp heights, which is the length of the interval divided by b minus a. The difference F(b) minus F(a) is the same calculation on every distribution, only the curve changes. Pick two points and read the difference on the',
      href: '/probability/visual-tools/cdf/continuous',
      linkText: 'continuous CDF visualizer',
    }),
    mixedCdf: demoUnitFrame({
      svg: renderFunctionPlotV4(fpMixedCdf),
      caption: 'A CDF that jumps and ramps',
      text: 'A random variable that equals 0 with probability 0.3 and otherwise spreads the remaining 0.7 evenly over (0, 2]. Its CDF is 0 to the left of 0, jumps by 0.3 at x = 0 (the filled dot: the value at 0 includes the jump), rises in a straight line from 0.3 to 1 across (0, 2], and stays at 1 after that. No PMF and no PDF describes this variable on its own, but one CDF does.',
    }),
  };

  return {
    props: {
    demoUnits,
    conceptIntroFigures,
      sectionsContent,
      introContent,
      propertiesTable,
      vsTable,
      mistakesTable,
      overviewTable,
      faqQuestions,
      schemas,
      seoData: {
        title: "CDF (Cumulative Distribution Function) | Learn Math Class",
        description: "Learn cumulative distribution function (CDF) in probability. Understand how probability accumulates, CDF properties, and calculating probabilities for random variables.",
        keywords: keyWords.join(", "),
        url: "/probability/cdf",
        name: "Cumulative Distribution Function (CDF)"
      }
    }
  }
}

export default function PageTemplate({
  seoData,
  sectionsContent,
  introContent,
  propertiesTable,
  vsTable,
  mistakesTable,
  overviewTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template A (definition last).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `Many questions about a random number ask whether it stays below some level.`,
        content: [
          `Probability is first defined for events, but many questions involve numerical values rather than yes-or-no outcomes. A random variable connects these two views by assigning a number to each outcome of an experiment.`,
          `Once a random variable is defined, statements about its value naturally form events. Expressions like $X \\le x$, $X > x$, or $a < X \\le b$ describe collections of outcomes and therefore have probabilities attached to them.`,
          ciTable('questionsTable'),
          `Answering each such question from scratch is tedious. One list that answered every "at most $x$" at once would answer the others too.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `For a die, a running total of the probabilities builds that list.`,
        content: [
          `A fair die shows each face with probability $\\frac{1}{6}$. Go up the faces and keep a running total: the probability of rolling at most $x$.`,
          ciTable('runningTable'),
          `"More than $2$" is then $1 - \\frac{2}{6} = \\frac{4}{6}$, and "between $3$ and $5$" is $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6}$ — read off the same column.`,
        ],
      },
      {
        id: 'forcing',
        lead: `Nothing in the running total was chosen: each entry is the last one plus one more probability.`,
        content: `So the column can only stay the same or grow, it starts at $0$ before the smallest value and ends at $1$ after the largest. Between faces nothing is added, so the total stays flat and then jumps at each face — a staircase.`,
        visual: ciSvg('dieCdf'),
        caption: `The running total for a die, drawn: flat between faces, a jump of $\\frac{1}{6}$ at each face, ending at $1$. The same state is on the [discrete CDF visualizer](!/probability/visual-tools/cdf/discrete).`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [cumulative distribution function](!/probability/definitions#cumulative_distribution_function) of a random variable $X$ gives, for each real number $x$, the probability that $X$ is at most $x$: $F(x) = P(X \\le x)$.`,
        footer: `For the die, $F(4) = \\frac{4}{6}$. The next two sections state the meaning and the formal definition in full.`,
      },
      {
        id: 'kind',
        lead: `A CDF is a function, defined for every real number, not only for the values X can take.`,
        content: [
          `Its input is any number $x$ and its output is a probability between $0$ and $1$. For the die, $F(4.7) = \\frac{4}{6}$ and $F(-3) = 0$, even though the die never shows $4.7$ or $-3$.`,
          `The cumulative distribution function is built exactly on this connection. It takes events of the form $X \\le x$ and assigns to each value $x$ the probability of that event, linking random variables back to the event-based foundation of probability.`,
        ],
      },
      {
        id: 'caveat',
        lead: `Running totals generalize; the jumps were particular to a die, and they make ≤ and < differ.`,
        content: [
          `What generalizes: every random variable has a CDF, built the same way. What was particular: a die's values are separate, so its CDF climbs in jumps; a continuous variable such as a measured height has a CDF that rises smoothly. And at a jump, "at most" and "less than" are different questions.`,
          ciTable('edgeTable'),
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page states the CDF's core meaning and formal definition, its notation and properties, the CDF of discrete, continuous and mixed variables, and how to use it to find probabilities.`,
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
        title:sectionsContent.from.title,
        link:'',
        content:[
            <ConceptIntro key={'from-intro'} data={conceptIntro} />,
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
        id:'mathematical',
        title:sectionsContent.mathematical.title,
        link:'',
        content:[
            sectionsContent.mathematical.content,
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
        id:'properties',
        title:sectionsContent.properties.title,
        link:'',
        content:[
            sectionsContent.properties.content,
            <div key={'properties-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: propertiesTable}}/>,
            `@academic[punchline:These four properties are the whole test: every function that passes them is the CDF of some random variable.]@`,
        ]
    },
    {
        id:'discrete',
        title:sectionsContent.discrete.title,
        link:'',
        content:[
            sectionsContent.discrete.content,
                  <div key={'unit-u_discrete_0'} dangerouslySetInnerHTML={{ __html: demoUnits.u_discrete_0 }} />,
          `Continuous variables give a very different picture.`,
        ]
    },
    {
        id:'continuous',
        title:sectionsContent.continuous.title,
        link:'',
        content:[
            sectionsContent.continuous.content,
                  <div key={'unit-u_continuous_1'} dangerouslySetInnerHTML={{ __html: demoUnits.u_continuous_1 }} />,
          `Mixed distributions combine both behaviours.`,
        ]
    },
    {
        id:'mixed',
        title:sectionsContent.mixed.title,
        link:'',
        content:[
            sectionsContent.mixed.content,
                  <div key={'unit-mixedCdf'} dangerouslySetInnerHTML={{ __html: demoUnits.mixedCdf }} />,
            `The jump gives P(X = 0) = 0.3; any interval inside (0, 2] gets 0.35 per unit of length.`,
        ]
    },
    {
        id:'using',
        title:sectionsContent.using.title,
        link:'',
        content:[
            sectionsContent.using.content,
                  <div key={'unit-u_using_2'} dangerouslySetInnerHTML={{ __html: demoUnits.u_using_2 }} />,
          `The comparison with the PMF and PDF makes this role precise.`,
        ]
    },
    {
        id:'vs',
        title:sectionsContent.vs.title,
        link:'',
        content:[
            sectionsContent.vs.content,
            <div key={'vs-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: vsTable}}/>,
        ]
    },
    {
        id:'visual',
        title:sectionsContent.visual.title,
        link:'',
        content:[
            sectionsContent.visual.content,
        ]
    },
    {
        id:'mistakes',
        title:sectionsContent.mistakes.title,
        link:'',
        content:[
            sectionsContent.mistakes.content,
            <div key={'mistakes-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: mistakesTable}}/>,
            sectionsContent.mistakes.more,
        ]
    },
    {
        id:'matters',
        title:sectionsContent.matters.title,
        link:'',
        content:[
            sectionsContent.matters.content,
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
    {
        id:'overview',
        title:sectionsContent.overview.title,
        link:'',
        content:[
            sectionsContent.overview.content,
            <div key={'overview-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: overviewTable}}/>,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`CDF FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Cumulative Distribution Function (CDF)</h1>
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
   <Sections sections={genericSections.slice(1)}
   
   />
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}