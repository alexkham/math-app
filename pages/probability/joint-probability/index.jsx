
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
//     'joint probability',
//     'joint distribution',
//     'joint probability table',
//     'contingency table',
//     'P(A∩B)',
//     'marginal probability',
//     'joint PMF',
//     'joint PDF',
//     'bivariate distribution',
//     'independence of variables',
//     'conditional from joint',
//     'multivariate probability',
//     'dependence between variables',
//     'joint density function'
//   ]

//   const faqQuestions = {
//     obj1: {
//       question: "What is joint probability?",
//       answer: "Joint probability measures the likelihood that two or more events occur simultaneously or that multiple random variables take specific values at the same time. It estimates the likelihood of combinations rather than isolated outcomes, showing how different outcomes line up within the same situation and occur side by side."
//     },
//     obj2: {
//       question: "How do you calculate joint probability?",
//       answer: "Joint probability can be calculated several ways depending on the situation: (1) direct reasoning by counting favorable combined outcomes, (2) using contingency tables for discrete variables where each cell shows the likelihood of a specific pair, (3) integrating the joint density over regions for continuous variables, (4) using the joint CDF, or (5) applying probability rules to combined conditions."
//     },
//     obj3: {
//       question: "What is a contingency table in probability?",
//       answer: "A contingency table organizes joint probabilities for discrete variables with one variable forming rows, the other forming columns, and each cell showing the likelihood of the two outcomes occurring together. The table displays the entire joint distribution at once, making it easy to see which combinations are more likely and how variables behave side by side."
//     },
//     obj4: {
//       question: "What's the difference between joint and marginal probability?",
//       answer: "Joint probability describes the likelihood of combined outcomes for multiple variables together. Marginal probability describes the likelihood of each variable on its own, obtained from the joint distribution by summing or integrating over the other variable. Marginals show standalone behavior but lose information about dependence patterns visible in the joint distribution."
//     },
//     obj5: {
//       question: "How does independence show up in joint probability?",
//       answer: "Two variables are independent when the joint probability equals the product of their marginal probabilities. In a contingency table, every cell equals (row marginal) × (column marginal). For continuous variables, the joint density breaks into the product of marginal densities. Independence means the variables don't influence each other and create no patterns together."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Joint Probability",
//       "description": "Learn joint probability: measuring combined outcomes for multiple variables. Understand contingency tables, marginal probabilities, independence, joint PMF/PDF, and connections to conditional probability.",
//       "url": "https://www.learnmathclass.com/probability/joint-probability",
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
//         "name": "Joint Probability"
//       },
//       "teaches": [
//         "Definition: joint probability measures combined outcomes for multiple variables",
//         "Notation: P(X=x, Y=y), P(A∩B), joint PMF and PDF",
//         "Contingency tables for organizing discrete joint probabilities",
//         "Ways to calculate joint probability: tables, densities, CDF, direct reasoning",
//         "Marginal probabilities: obtained by summing or integrating the joint",
//         "Independence: when joint equals product of marginals",
//         "Connection to conditional probability and Bayes' theorem",
//         "Joint distributions: multinomial, bivariate normal, joint uniform"
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
//           "name": "Joint Probability",
//           "item": "https://www.learnmathclass.com/probability/joint-probability"
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
// - [Bivariate Random Variable](!/probability/definitions#bivariate_random_variable) — a pair $(X, Y)$ considered jointly
// - [N-Variate Random Variables](!/probability/definitions#n_variate_random_variables) — a vector $(X_1, \\ldots, X_n)$ of random variables
// - [Joint PMF](!/probability/definitions#joint_pmf) — $p_{X,Y}(x,y) = P(X = x, Y = y)$
// - [Joint PDF](!/probability/definitions#joint_pdf) — $f_{X,Y}(x,y)$, joint density for continuous variables
// - [Joint CDF](!/probability/definitions#joint_cdf) — $F_{X,Y}(x,y) = P(X \\leq x, Y \\leq y)$
// - [Marginal Distribution](!/probability/definitions#marginal_distribution) — distribution of one variable from a joint distribution
// - [Conditional Probability](!/probability/definitions#conditional_probability) — used to derive conditional distributions from joint ones
// - [Independent Random Variables](!/probability/definitions#independent_random_variables) — joint distribution factorizes into marginals`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },

//     definition:{
//       title:`Definition and Meaning of Joint Probability`,
//       content:`
// Joint probability measures the likelihood that two or more events occur simultaneously and that multiple random variables take specific values at the same time.

// This estimates the likelihood of **combinations rather than isolated outcomes**. When we ask "what is the chance that both A happens and B happens together," we are asking about joint probability. It shows how different outcomes **line up within the same situation** and how they naturally occur **side by side**.

// Joint probability also captures how **random quantities behave together**, whether their outcomes **depend on each other or not**, and how their joint behavior forms patterns that cannot be seen by looking at each variable alone. This is the point where **dependence and independence start to show up**: joint probability reveals whether outcomes tend to move together, avoid each other, or behave completely separately.

// In simple terms, it is a way to look at **the whole outcome**, and it is the first place where **any kind of relationship** between variables becomes visible.

// `,
//       before:``,
//       after:``,
  
  
//     },
//     notation:{
//       title:`Useful Notation`,
//       content:`
// Before working with joint probability formulas, we establish the standard notation:

// - $X, Y, Z$ — random variables
// - $P(X=x, Y=y)$ or $P(x,y)$ — joint probability mass function (discrete)
// - $f(x,y)$ or $f_{X,Y}(x,y)$ — joint probability density function (continuous)
// - $P(A \\cap B)$ — probability of events $A$ and $B$ both occurring
// - $(x,y)$ — a point in the joint sample space
// - $\\mathbb{R}^2, \\mathbb{R}^n$ — multidimensional spaces

// These symbols appear consistently throughout joint probability calculations and provide a compact way to express relationships between multiple random variables.


// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

// `,
//       before:``,
//       after:``,
  
//     },
  
//     tables:{
  
//       title:`Contingency Tables (Joint Probability Tables)`,
//       content:`
// A contingency table is a simple way to organize joint probabilities for discrete variables. One variable forms the rows, the other forms the columns, and each cell shows the likelihood of the two outcomes occurring together.

// The table displays the **entire joint distribution at once**, making it easy to see which combinations are more likely, which are rare, and how the variables behave side by side.

// - **Rows** represent the possible values of one variable  
// - **Columns** represent the values of the other  
// - **Cells** contain the joint probabilities for each pair of outcomes  
// - **All cell values together must sum to 1**  
// - **Patterns in the table** often hint at dependence or independence  

// A small table illustrates the idea:

// |        | \(y_1\) | \(y_2\) |
// |--------|--------|--------|
// | \(x_1\) | \(P(x_1, y_1)\) | \(P(x_1, y_2)\) |
// | \(x_2\) | \(P(x_2, y_1)\) | \(P(x_2, y_2)\) |

// This layout makes it easy to read, compare, and analyze how outcomes **pair up** across the two variables.
// `,
//       before:``,
//       after:``,
  
//     },
//     calculate:{
//       title:`Ways to Calculate Joint Probability`,
//       content:`
// Joint probability does not rely on a single formula. How we compute it depends on the situation, the type of variables, and the information available. Here are the general ways it is actually done.

// **1. Direct reasoning from the situation.**  
// Sometimes we do not start with tables, formulas, or densities. We simply look at the scenario and ask how many combined outcomes are possible and how many of them satisfy the conditions we care about.  
// If all outcomes are equally likely, joint probability can be found by counting the favourable combined outcomes and dividing by the total number of combined outcomes.  
// This is the most basic way to calculate joint probability and often the first step before any formal tool is introduced.

// **2. Using tables (discrete variables).**  
// When outcomes are discrete, we often organize all combinations into a contingency table.  
// Each cell shows the likelihood of a specific pair of values, and probabilities for larger sets are found by adding the relevant cells.  
// Tables make joint behaviour easy to read and compare.

// **3. Using densities (continuous variables).**  
// For continuous variables, we compute joint probability by integrating the joint density over the region of interest.  
// This replaces the idea of adding cell values with measuring how probability mass is spread over an area.

// **4. Using the joint CDF.**  
// Sometimes we use the joint cumulative distribution function, which gives the probability that both variables fall within certain ranges.  
// Joint probabilities for rectangles or regions can be found by evaluating or combining CDF values.

// **5. Applying probability rules to combined conditions.**  
// In both discrete and continuous settings, joint probability is obtained by applying the appropriate rules—adding probabilities for unions, integrating or summing over regions, or combining conditions that involve more than one variable.

// In short, joint probability is calculated by reasoning about the combined outcomes and then using the tool that matches the type of variables involved—whether pure logic, tables, densities, or cumulative functions.
// `,
//       before:``,
//       after:``,
  
//     },
//     marginal:{
//       title:`Marginal Probabilities`,
//       content:`
// Marginal probabilities describe the likelihood of each variable on its own, after we set aside the combined outcomes. They are obtained from the joint distribution by "collecting" all probabilities that correspond to a particular value of one variable.

// **From a table (discrete variables).**  
// In a contingency table, marginals appear naturally as the row totals and column totals.  
// • Row totals give the probabilities for the values of one variable.  
// • Column totals give the probabilities for the values of the other.  
// They represent the standalone behaviour of each variable, separated from the combinations.

// **From a density (continuous variables).**  
// For continuous variables, marginal probabilities (densities) are obtained by integrating the joint density over the other variable.  
// This gathers all the mass that belongs to a specific value or range of one variable.

// **Why marginals matter.**  
// They show how each variable behaves individually, without the influence of the other. But they also lose information: once we collapse the joint structure, any patterns of dependence disappear. Joint behaviour is richer; marginals are only the isolated pieces.

// Marginals form the bridge between the full joint picture and the behaviour of each variable on its own.
// `,
//       before:``,
//       after:``,
  
//     },
//     independence:{
//       title:`Independence in Joint Probability`,
//       content:`
// Two variables are independent when knowing the value of one tells us nothing about the other. In terms of joint probability, this means that the likelihood of their combined outcome is just the product of their individual probabilities.

// **How it appears in a table (discrete case).**  
// In a contingency table, independence shows up when every cell equals  
// (row marginal) × (column marginal).  
// The entire table follows this pattern — no row or column deviates from it.

// **How it appears with densities (continuous case).**  
// For continuous variables, independence means the joint density breaks into the product of the two marginal densities. The density surface has no tilt, stretch, or pattern linking the variables.

// **What independence means in practice.**  
// Independence says the variables do not influence each other, do not track each other, and do not create patterns together. Most real-world variables are not independent — dependence is the norm, independence is the special case.

// Independence is the cleanest possible relationship between variables: completely separate behaviour.
// `,
//       before:``,
//       after:``,
  
//     },
//     properties:{
//       title:`Properties of Joint Probability`,
//       content:`
// - **Non-negativity:** joint values can never be negative  
// - **Normalization:** all joint probabilities together sum (or integrate) to 1  
// - **Reduction to marginals:** summing or integrating over one variable gives the marginal for the other  
// - **Full description:** the joint distribution contains all information about the variables' combined behaviour  
// - **Dependence visible:** any relationship between variables shows up in the joint structure
// `,
//       before:``,
//       after:``,
  
//     },
//     conditional:{
//       title:`Connection to Conditional Probability`,
//       content:`
// • Conditional probability is built directly from the joint distribution  
// • $\(P(X=x \\mid Y=y)\)$ is found by taking the joint value and dividing by the marginal of \(Y\)  
// • In a table: cell ÷ column total  
// • In a density: joint density ÷ marginal density  
// • The chain rule comes from this relationship and breaks joint probabilities into conditional pieces  
// • Bayes' theorem is a direct consequence of joint and marginal probabilities working together
// `,
//       before:``,
//       after:``,
  
//     },
   
//     distributions:{
//       title:`Joint Distributions`,
//       content:`- **Multinomial distribution:** joint outcomes for repeated categorical trials  
// - **Bivariate normal distribution:** joint behaviour of two correlated normal variables  
// - **Joint uniform distribution:** probability spread evenly over a region  
// - **Joint Bernoulli / 2×2 models:** simplest case of two binary variables  
//  These serve as standard examples of how joint behaviour can be shaped by dependence patterns and constraints`,
//       before:``,
//       after:``,
  
//     },


//     importance:{
  
//       title:`Why Joint Probability Matters in Practice`,
//       content:`
//       • Real systems involve several quantities changing together  
// • Joint probability captures relationships that single-variable views miss  
// • Essential for modeling risk with multiple factors  
// • Forms the basis for classification and many machine-learning methods  
// • Used in finance to understand co-movement of assets  
// • Needed in weather and environmental modeling with multiple measurements  
// • Critical for interpreting medical tests, symptoms, and diagnostic patterns
// `,
//       before:``,
//       after:``,
  
//     },
//     mistakes:{
  
//       title:`Common Mistakes`,
//       content:`
// • Confusing joint probability with conditional probability  
// • Assuming independence when variables are actually dependent  
// • Treating \(P(A, B)\) as if it were \(P(A) + P(B)\)  
// • Forgetting that all joint values must sum or integrate to 1  
// • Mixing up marginals and conditionals when reading tables  
// • Misinterpreting patterns in contingency tables as independence
// `,
//       before:``,
//       after:``,
  
//     },
//     other:{
  
//       title:`Connections to Other Probability Concepts`,
//       content:`
// - **Conditional probability:** built directly from the joint distribution  
// - **Independence:** defined in terms of how the joint breaks into marginals  
// - **Marginal probability:** obtained by summing or integrating the joint  
// - **Covariance and correlation:** measure how variables move together, visible first in the joint  
// - **Bayes' theorem:** emerges from the relationship between joint and conditional probabilities  
// - **Multivariate distributions:** extend joint probability to higher dimensions
// `,
//       before:``,
//       after:``,
  
//     },
//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//   }


//   const introContent = {
//     id: "intro",
//     title: "When More Than One Random Variable Matters",
//     content: `
//   Joint probability appears whenever more than one outcome matters at the same time. Real situations often involve several random quantities unfolding together—[events](!/probability/events) happening simultaneously, measurements taken jointly, or variables interacting within the same scenario.

// Because of this, probability must describe not only individual outcomes but the combined possibilities they create. Joint probability provides that structure: it represents how outcomes coexist, how variables relate, and how multivariate behaviour is organized.

// The sections below outline how joint probability is represented, how it connects to marginals and [conditionals](!/probability/conditional-probability), and how it forms the foundation for analysing relationships between [random variables](!/probability/random-variables).`
//   }

//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Joint Probability: Combined Outcomes for Multiple Variables | Learn Math Class",
//         description: "Learn joint probability: measuring combined outcomes for multiple variables. Understand contingency tables, marginal probabilities, independence, joint PMF/PDF, and connections to conditional probability.",
//         keywords: keyWords.join(", "),
//         url: "/probability/joint-probability",
//         name: "Joint Probability"
//       }
//     }
//   }
// }

// export default function JointProbabilityPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
//             sectionsContent.definition.content,
//         ]
//     },
//     {
//         id:'notation',
//         title:sectionsContent.notation.title,
//         link:'',
//         content:[
//             sectionsContent.notation.content,
//         ]
//     },
//     {
//         id:'tables',
//         title:sectionsContent.tables.title,
//         link:'',
//         content:[
//             sectionsContent.tables.content,
//         ]
//     },
//     {
//         id:'calculate',
//         title:sectionsContent.calculate.title,
//         link:'',
//         content:[
//             sectionsContent.calculate.content,

//         ]
//     },
//     {
//         id:'marginal',
//         title:sectionsContent.marginal.title,
//         link:'',
//         content:[
//             sectionsContent.marginal.content,
//         ]
//     },
//     {
//         id:'independence',
//         title:sectionsContent.independence.title,
//         link:'',
//         content:[
//           sectionsContent.independence.content,
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
//         id:'conditional',
//         title:sectionsContent.conditional.title,
//         link:'',
//         content:[
//           sectionsContent.conditional.content,
//         ]
//     },
//     {
//         id:'distributions',
//         title:sectionsContent.distributions.title,
//         link:'',
//         content:[
//           sectionsContent.distributions.content,
//         ]
//     },
//     // {
//     //     id:'common',
//     //     title:sectionsContent.common.title,
//     //     link:'',
//     //     content:[
//     //       sectionsContent.common.content,
//     //     ]
//     // },
//     {
//         id:'importance',
//         title:sectionsContent.importance.title,
//         link:'',
//         content:[
//           sectionsContent.importance.content,
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
//         id:'other',
//         title:sectionsContent.other.title,
//         link:'',
//         content:[
//           sectionsContent.other.content,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Joint Probability</h1>
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



// tables-optimized: v4 | 2026-05-23 | 4 tables (calculate aggregation, distributions aggregation, mistakes aggregation, obj5 summary capstone)

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
    'joint probability',
    'joint distribution',
    'joint probability table',
    'contingency table',
    'P(A∩B)',
    'marginal probability',
    'joint PMF',
    'joint PDF',
    'bivariate distribution',
    'independence of variables',
    'conditional from joint',
    'multivariate probability',
    'dependence between variables',
    'joint density function'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // calculate — aggregation: ways to calculate joint probability
  const calculateTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Method</th>
      <th style="${tableHeaders.aggregation}">What you do</th>
      <th style="${tableHeaders.aggregation}">When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Direct reasoning</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count favourable combined outcomes ÷ total combined outcomes</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">small, equally likely discrete sample spaces</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Contingency table</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">read individual cells, sum relevant cells for compound conditions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">discrete variables with finite support</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Joint density integration</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫∫<sub>R</sub> f<sub>X,Y</sub>(x, y) dx dy over the region R</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous variables when the joint PDF is known</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Joint CDF</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">evaluate F<sub>X,Y</sub> at the corners of a rectangle and combine</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">probabilities over rectangular / box-shaped regions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Probability rules</td>
      <td style="padding: 12px 15px; color: #34495e;">apply union, complement, conditional, and product rules to combined events</td>
      <td style="padding: 12px 15px; color: #34495e;">compound conditions expressed as combinations of simpler ones</td>
    </tr>
  </tbody>
</table>
`

  // distributions — aggregation: standard joint distributions
  const distributionsTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Distribution</th>
      <th style="${tableHeaders.aggregation}">Type</th>
      <th style="${tableHeaders.aggregation}">What it models</th>
      <th style="${tableHeaders.aggregation}">Joint structure</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multinomial</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">discrete</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">counts across k categories over n trials</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">joint PMF over (n<sub>1</sub>, ..., n<sub>k</sub>) with ∑n<sub>i</sub> = n</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Bivariate normal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">two correlated normal variables</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bell-shaped joint density tilted by correlation ρ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Joint uniform</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">continuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">probability spread evenly over a region R</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x, y) = 1 / area(R) on R, zero elsewhere</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Joint Bernoulli (2×2)</td>
      <td style="padding: 12px 15px; color: #34495e;">discrete</td>
      <td style="padding: 12px 15px; color: #34495e;">two binary outcomes considered together</td>
      <td style="padding: 12px 15px; color: #34495e;">four cells P(0,0), P(0,1), P(1,0), P(1,1) summing to 1</td>
    </tr>
  </tbody>
</table>
`

  // mistakes — aggregation: common errors with joint probability
  const mistakesTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Mistake</th>
      <th style="${tableHeaders.aggregation}">Why it&apos;s wrong</th>
      <th style="${tableHeaders.aggregation}">Correct view</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Confusing joint with <a href="/probability/conditional-probability" style="${linkStyle}">conditional</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(A, B) is co-occurrence; P(A | B) is A given B already happened</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conditional = joint ÷ marginal of the conditioning variable</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Assuming independence by default</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">real-world variables are usually dependent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independence ⇔ every cell equals (row marginal) × (column marginal)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Treating P(A, B) as P(A) + P(B)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">addition is for disjoint unions, not co-occurrence</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">use the product P(A) · P(B) — and only under independence</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Forgetting normalization</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a joint that doesn&apos;t sum / integrate to 1 isn&apos;t a distribution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">verify ∑∑ p(x, y) = 1 or ∫∫ f(x, y) dx dy = 1 before reasoning</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Mixing marginals and conditionals in a table</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row / column totals are marginals, individual cells are joints</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">conditional = (cell) ÷ (row or column total)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Reading &quot;balanced&quot; cells as independence</td>
      <td style="padding: 12px 15px; color: #34495e;">visual symmetry is not the same as factorization</td>
      <td style="padding: 12px 15px; color: #34495e;">independence is a quantitative product test, not a pattern check</td>
    </tr>
  </tbody>
</table>
`

  // obj5 — summary capstone: Joint Probability at a Glance
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Aspect</th>
      <th style="${tableHeaders.summary}">What it captures</th>
      <th style="${tableHeaders.summary}">Example / note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it is</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">likelihood that multiple outcomes occur together</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P(X = x, Y = y) or P(A ∩ B)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Discrete representation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">joint PMF / contingency table with cells summing to 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2×2 table, multinomial counts</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Continuous representation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">joint PDF f<sub>X,Y</sub>(x, y) integrating to 1 over the plane</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">bivariate normal, joint uniform</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Marginal from joint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum or integrate out the other variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row / column totals in a contingency table</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/conditional-probability" style="${linkStyle}">Conditional</a> from joint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">divide joint by the marginal of the conditioning variable</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">foundation of the chain rule and Bayes&apos; theorem</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/independence" style="${linkStyle}">Independence</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">joint factorizes into the product of marginals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every cell equals (row marginal) × (column marginal)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Why it matters</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">reveals dependence patterns invisible in single-variable marginals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">risk, finance, ML classifiers, medical diagnostics</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Most common pitfall</td>
      <td style="padding: 12px 15px; color: #34495e;">treating P(A, B) as if it were P(A) + P(B)</td>
      <td style="padding: 12px 15px; color: #34495e;">addition is for disjoint events; joint co-occurrence calls for the product (and only under independence)</td>
    </tr>
  </tbody>
</table>
`


  const faqQuestions = {
    obj1: {
      question: "What is joint probability?",
      answer: "Joint probability measures the likelihood that two or more events occur simultaneously or that multiple random variables take specific values at the same time. It estimates the likelihood of combinations rather than isolated outcomes, showing how different outcomes line up within the same situation and occur side by side."
    },
    obj2: {
      question: "How do you calculate joint probability?",
      answer: "Joint probability can be calculated several ways depending on the situation: (1) direct reasoning by counting favorable combined outcomes, (2) using contingency tables for discrete variables where each cell shows the likelihood of a specific pair, (3) integrating the joint density over regions for continuous variables, (4) using the joint CDF, or (5) applying probability rules to combined conditions."
    },
    obj3: {
      question: "What is a contingency table in probability?",
      answer: "A contingency table organizes joint probabilities for discrete variables with one variable forming rows, the other forming columns, and each cell showing the likelihood of the two outcomes occurring together. The table displays the entire joint distribution at once, making it easy to see which combinations are more likely and how variables behave side by side."
    },
    obj4: {
      question: "What's the difference between joint and marginal probability?",
      answer: "Joint probability describes the likelihood of combined outcomes for multiple variables together. Marginal probability describes the likelihood of each variable on its own, obtained from the joint distribution by summing or integrating over the other variable. Marginals show standalone behavior but lose information about dependence patterns visible in the joint distribution."
    },
    obj5: {
      question: "How does independence show up in joint probability?",
      answer: "Two variables are independent when the joint probability equals the product of their marginal probabilities. In a contingency table, every cell equals (row marginal) × (column marginal). For continuous variables, the joint density breaks into the product of marginal densities. Independence means the variables don't influence each other and create no patterns together."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Joint Probability",
      "description": "Learn joint probability: measuring combined outcomes for multiple variables. Understand contingency tables, marginal probabilities, independence, joint PMF/PDF, and connections to conditional probability.",
      "url": "https://www.learnmathclass.com/probability/joint-probability",
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
        "name": "Joint Probability"
      },
      "teaches": [
        "Definition: joint probability measures combined outcomes for multiple variables",
        "Notation: P(X=x, Y=y), P(A∩B), joint PMF and PDF",
        "Contingency tables for organizing discrete joint probabilities",
        "Ways to calculate joint probability: tables, densities, CDF, direct reasoning",
        "Marginal probabilities: obtained by summing or integrating the joint",
        "Independence: when joint equals product of marginals",
        "Connection to conditional probability and Bayes' theorem",
        "Joint distributions: multinomial, bivariate normal, joint uniform"
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
          "name": "Joint Probability",
          "item": "https://www.learnmathclass.com/probability/joint-probability"
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
- [Bivariate Random Variable](!/probability/definitions#bivariate_random_variable) — a pair $(X, Y)$ considered jointly
- [N-Variate Random Variables](!/probability/definitions#n_variate_random_variables) — a vector $(X_1, \\ldots, X_n)$ of random variables
- [Joint PMF](!/probability/definitions#joint_pmf) — $p_{X,Y}(x,y) = P(X = x, Y = y)$
- [Joint PDF](!/probability/definitions#joint_pdf) — $f_{X,Y}(x,y)$, joint density for continuous variables
- [Joint CDF](!/probability/definitions#joint_cdf) — $F_{X,Y}(x,y) = P(X \\leq x, Y \\leq y)$
- [Marginal Distribution](!/probability/definitions#marginal_distribution) — distribution of one variable from a joint distribution
- [Conditional Probability](!/probability/definitions#conditional_probability) — used to derive conditional distributions from joint ones
- [Independent Random Variables](!/probability/definitions#independent_random_variables) — joint distribution factorizes into marginals`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

    definition:{
      title:`Definition and Meaning of Joint Probability`,
      content:`
Joint probability measures the likelihood that two or more events occur simultaneously and that multiple random variables take specific values at the same time.

This estimates the likelihood of **combinations rather than isolated outcomes**. When we ask "what is the chance that both A happens and B happens together," we are asking about joint probability. It shows how different outcomes **line up within the same situation** and how they naturally occur **side by side**.

Joint probability also captures how **random quantities behave together**, whether their outcomes **depend on each other or not**, and how their joint behavior forms patterns that cannot be seen by looking at each variable alone. This is the point where **dependence and independence start to show up**: joint probability reveals whether outcomes tend to move together, avoid each other, or behave completely separately.

In simple terms, it is a way to look at **the whole outcome**, and it is the first place where **any kind of relationship** between variables becomes visible.

`,
      before:``,
      after:``,
  
  
    },
    notation:{
      title:`Useful Notation`,
      content:`
Before working with joint probability formulas, we establish the standard notation:

- $X, Y, Z$ — random variables
- $P(X=x, Y=y)$ or $P(x,y)$ — joint probability mass function (discrete)
- $f(x,y)$ or $f_{X,Y}(x,y)$ — joint probability density function (continuous)
- $P(A \\cap B)$ — probability of events $A$ and $B$ both occurring
- $(x,y)$ — a point in the joint sample space
- $\\mathbb{R}^2, \\mathbb{R}^n$ — multidimensional spaces

These symbols appear consistently throughout joint probability calculations and provide a compact way to express relationships between multiple random variables.


@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

`,
      before:``,
      after:``,
  
    },
  
    tables:{
  
      title:`Contingency Tables (Joint Probability Tables)`,
      content:`
A contingency table is a simple way to organize joint probabilities for discrete variables. One variable forms the rows, the other forms the columns, and each cell shows the likelihood of the two outcomes occurring together.

The table displays the **entire joint distribution at once**, making it easy to see which combinations are more likely, which are rare, and how the variables behave side by side.

- **Rows** represent the possible values of one variable  
- **Columns** represent the values of the other  
- **Cells** contain the joint probabilities for each pair of outcomes  
- **All cell values together must sum to 1**  
- **Patterns in the table** often hint at dependence or independence  

A small table illustrates the idea:

|        | \(y_1\) | \(y_2\) |
|--------|--------|--------|
| \(x_1\) | \(P(x_1, y_1)\) | \(P(x_1, y_2)\) |
| \(x_2\) | \(P(x_2, y_1)\) | \(P(x_2, y_2)\) |

This layout makes it easy to read, compare, and analyze how outcomes **pair up** across the two variables.
`,
      before:``,
      after:``,
  
    },
    calculate:{
      title:`Ways to Calculate Joint Probability`,
      content:`
Joint probability does not rely on a single formula. How we compute it depends on the situation, the type of variables, and the information available. Here are the general ways it is actually done.

**1. Direct reasoning from the situation.**  
Sometimes we do not start with tables, formulas, or densities. We simply look at the scenario and ask how many combined outcomes are possible and how many of them satisfy the conditions we care about.  
If all outcomes are equally likely, joint probability can be found by counting the favourable combined outcomes and dividing by the total number of combined outcomes.  
This is the most basic way to calculate joint probability and often the first step before any formal tool is introduced.

**2. Using tables (discrete variables).**  
When outcomes are discrete, we often organize all combinations into a contingency table.  
Each cell shows the likelihood of a specific pair of values, and probabilities for larger sets are found by adding the relevant cells.  
Tables make joint behaviour easy to read and compare.

**3. Using densities (continuous variables).**  
For continuous variables, we compute joint probability by integrating the joint density over the region of interest.  
This replaces the idea of adding cell values with measuring how probability mass is spread over an area.

**4. Using the joint CDF.**  
Sometimes we use the joint cumulative distribution function, which gives the probability that both variables fall within certain ranges.  
Joint probabilities for rectangles or regions can be found by evaluating or combining CDF values.

**5. Applying probability rules to combined conditions.**  
In both discrete and continuous settings, joint probability is obtained by applying the appropriate rules—adding probabilities for unions, integrating or summing over regions, or combining conditions that involve more than one variable.

In short, joint probability is calculated by reasoning about the combined outcomes and then using the tool that matches the type of variables involved—whether pure logic, tables, densities, or cumulative functions.

The five methods above each suit a different setting; the table below collects them with what each method actually does and when to reach for it.
`,
      before:``,
      after:``,
  
    },
    marginal:{
      title:`Marginal Probabilities`,
      content:`
Marginal probabilities describe the likelihood of each variable on its own, after we set aside the combined outcomes. They are obtained from the joint distribution by "collecting" all probabilities that correspond to a particular value of one variable.

**From a table (discrete variables).**  
In a contingency table, marginals appear naturally as the row totals and column totals.  
• Row totals give the probabilities for the values of one variable.  
• Column totals give the probabilities for the values of the other.  
They represent the standalone behaviour of each variable, separated from the combinations.

**From a density (continuous variables).**  
For continuous variables, marginal probabilities (densities) are obtained by integrating the joint density over the other variable.  
This gathers all the mass that belongs to a specific value or range of one variable.

**Why marginals matter.**  
They show how each variable behaves individually, without the influence of the other. But they also lose information: once we collapse the joint structure, any patterns of dependence disappear. Joint behaviour is richer; marginals are only the isolated pieces.

Marginals form the bridge between the full joint picture and the behaviour of each variable on its own.
`,
      before:``,
      after:``,
  
    },
    independence:{
      title:`Independence in Joint Probability`,
      content:`
Two variables are independent when knowing the value of one tells us nothing about the other. In terms of joint probability, this means that the likelihood of their combined outcome is just the product of their individual probabilities.

**How it appears in a table (discrete case).**  
In a contingency table, independence shows up when every cell equals  
(row marginal) × (column marginal).  
The entire table follows this pattern — no row or column deviates from it.

**How it appears with densities (continuous case).**  
For continuous variables, independence means the joint density breaks into the product of the two marginal densities. The density surface has no tilt, stretch, or pattern linking the variables.

**What independence means in practice.**  
Independence says the variables do not influence each other, do not track each other, and do not create patterns together. Most real-world variables are not independent — dependence is the norm, independence is the special case.

Independence is the cleanest possible relationship between variables: completely separate behaviour.
`,
      before:``,
      after:``,
  
    },
    properties:{
      title:`Properties of Joint Probability`,
      content:`
- **Non-negativity:** joint values can never be negative  
- **Normalization:** all joint probabilities together sum (or integrate) to 1  
- **Reduction to marginals:** summing or integrating over one variable gives the marginal for the other  
- **Full description:** the joint distribution contains all information about the variables' combined behaviour  
- **Dependence visible:** any relationship between variables shows up in the joint structure
`,
      before:``,
      after:``,
  
    },
    conditional:{
      title:`Connection to Conditional Probability`,
      content:`
• Conditional probability is built directly from the joint distribution  
• $\(P(X=x \\mid Y=y)\)$ is found by taking the joint value and dividing by the marginal of \(Y\)  
• In a table: cell ÷ column total  
• In a density: joint density ÷ marginal density  
• The chain rule comes from this relationship and breaks joint probabilities into conditional pieces  
• Bayes' theorem is a direct consequence of joint and marginal probabilities working together
`,
      before:``,
      after:``,
  
    },
   
    distributions:{
      title:`Joint Distributions`,
      content:`- **Multinomial distribution:** joint outcomes for repeated categorical trials  
- **Bivariate normal distribution:** joint behaviour of two correlated normal variables  
- **Joint uniform distribution:** probability spread evenly over a region  
- **Joint Bernoulli / 2×2 models:** simplest case of two binary variables  
 These serve as standard examples of how joint behaviour can be shaped by dependence patterns and constraints.

The table below lines up these standard families with the type they belong to, what each one models, and the shape of the resulting joint structure.`,
      before:``,
      after:``,
  
    },


    importance:{
  
      title:`Why Joint Probability Matters in Practice`,
      content:`
      • Real systems involve several quantities changing together  
• Joint probability captures relationships that single-variable views miss  
• Essential for modeling risk with multiple factors  
• Forms the basis for classification and many machine-learning methods  
• Used in finance to understand co-movement of assets  
• Needed in weather and environmental modeling with multiple measurements  
• Critical for interpreting medical tests, symptoms, and diagnostic patterns
`,
      before:``,
      after:``,
  
    },
    mistakes:{
  
      title:`Common Mistakes`,
      content:`
• Confusing joint probability with conditional probability  
• Assuming independence when variables are actually dependent  
• Treating \(P(A, B)\) as if it were \(P(A) + P(B)\)  
• Forgetting that all joint values must sum or integrate to 1  
• Mixing up marginals and conditionals when reading tables  
• Misinterpreting patterns in contingency tables as independence

The pitfalls above can be lined up with what makes each one a misreading and what the correct view actually looks like.
`,
      before:``,
      after:``,
  
    },
    other:{
  
      title:`Connections to Other Probability Concepts`,
      content:`
- **Conditional probability:** built directly from the joint distribution  
- **Independence:** defined in terms of how the joint breaks into marginals  
- **Marginal probability:** obtained by summing or integrating the joint  
- **Covariance and correlation:** measure how variables move together, visible first in the joint  
- **Bayes' theorem:** emerges from the relationship between joint and conditional probabilities  
- **Multivariate distributions:** extend joint probability to higher dimensions
`,
      before:``,
      after:``,
  
    },
    obj5:{
  
      title:`Joint Probability at a Glance`,
      content:`The table below condenses joint probability into a single quick-reference card — what it represents, how it&apos;s expressed in the discrete and continuous cases, how marginals and conditional probabilities are recovered from it, what independence looks like in the joint structure, why it matters in practice, and the pitfall most frequently confused with it.`,
      before:``,
      after:``,
  
    },
  
  }


  const introContent = {
    id: "intro",
    title: "When More Than One Random Variable Matters",
    content: `
  Joint probability appears whenever more than one outcome matters at the same time. Real situations often involve several random quantities unfolding together—[events](!/probability/events) happening simultaneously, measurements taken jointly, or variables interacting within the same scenario.

Because of this, probability must describe not only individual outcomes but the combined possibilities they create. Joint probability provides that structure: it represents how outcomes coexist, how variables relate, and how multivariate behaviour is organized.

The sections below outline how joint probability is represented, how it connects to marginals and [conditionals](!/probability/conditional-probability), and how it forms the foundation for analysing relationships between [random variables](!/probability/random-variables).`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      calculateTable,
      distributionsTable,
      mistakesTable,
      summaryTable,
      faqQuestions,
      schemas,
      seoData: {
        title: "Joint Probability: Combined Outcomes for Multiple Variables | Learn Math Class",
        description: "Learn joint probability: measuring combined outcomes for multiple variables. Understand contingency tables, marginal probabilities, independence, joint PMF/PDF, and connections to conditional probability.",
        keywords: keyWords.join(", "),
        url: "/probability/joint-probability",
        name: "Joint Probability"
      }
    }
  }
}

export default function JointProbabilityPage({
  seoData,
  sectionsContent,
  introContent,
  calculateTable,
  distributionsTable,
  mistakesTable,
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
        id:'tables',
        title:sectionsContent.tables.title,
        link:'',
        content:[
            sectionsContent.tables.content,
        ]
    },
    {
        id:'calculate',
        title:sectionsContent.calculate.title,
        link:'',
        content:[
            sectionsContent.calculate.content,
            <div key={'calculate-table'} style={tableWrapStyle}
                 dangerouslySetInnerHTML={{ __html: calculateTable }} />,
        ]
    },
    {
        id:'marginal',
        title:sectionsContent.marginal.title,
        link:'',
        content:[
            sectionsContent.marginal.content,
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
        id:'properties',
        title:sectionsContent.properties.title,
        link:'',
        content:[
          sectionsContent.properties.content,
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
        id:'distributions',
        title:sectionsContent.distributions.title,
        link:'',
        content:[
          sectionsContent.distributions.content,
          <div key={'distributions-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: distributionsTable }} />,
        ]
    },
    // {
    //     id:'common',
    //     title:sectionsContent.common.title,
    //     link:'',
    //     content:[
    //       sectionsContent.common.content,
    //     ]
    // },
    {
        id:'importance',
        title:sectionsContent.importance.title,
        link:'',
        content:[
          sectionsContent.importance.content,
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
        id:'other',
        title:sectionsContent.other.title,
        link:'',
        content:[
          sectionsContent.other.content,
        ]
    },
    {
        id:'obj5',
        title:sectionsContent.obj5.title,
        link:'',
        content:[
          sectionsContent.obj5.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Joint Probability</h1>
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