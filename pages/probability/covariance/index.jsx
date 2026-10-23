
// // tables-optimized: v4 | 2026-05-23 | 1 table (capstone summary)


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
// import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
// import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
// import { tableHeaders } from '@/app/styles/theme'
// import CaseSplit from '@/app/components/infographics/CaseSplit'
// import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


// export async function getStaticProps(){

//   const keyWords = [
//     "covariance",
//     "covariance in probability",
//     "joint random variables",
//     "covariance vs independence",
//     "positive covariance",
//     "negative covariance",
//     "zero covariance",
//     "covariance and correlation",
//     "covariance notation",
//     "joint distribution",
//     "multivariate probability",
//     "covariance interpretation",
//     "covariance examples"
//   ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLE ----------

//   // capstone — summary: Covariance at a Glance
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Aspect</th>
//       <th style="${tableHeaders.summary}">Statement</th>
//       <th style="${tableHeaders.summary}">Note / example</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) = E[(X − μ<sub>X</sub>)(Y − μ<sub>Y</sub>)]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">extends <a href="/probability/variance" style="${linkStyle}">variance</a> from one variable to a pair</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) = Cov(Y, X)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">order of the variables doesn&apos;t matter</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Self-covariance</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, X) = Var(X)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pairing a variable with itself recovers its variance</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive covariance</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both variables tend to be above (or below) their averages together</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative covariance</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) &lt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one variable above its average tends to occur with the other below its average</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero covariance</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no consistent <em>linear</em> relationship — non-linear dependence may still exist</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/independence" style="${linkStyle}">Independence</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X, Y independent ⟹ Cov(X, Y) = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the converse does <strong>not</strong> hold — zero covariance ≠ independence</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it captures</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direction (not strength) of the linear relationship</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">magnitude depends on the units; normalize via correlation ρ for scale-free strength</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Typical examples</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">height &amp; weight; study time &amp; exam score; temperature &amp; energy use; returns of two assets</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">paired numerical quantities recorded from the same observations</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Leads to</td>
//       <td style="padding: 12px 15px; color: #34495e;">correlation coefficient ρ; covariance matrices; joint distributions</td>
//       <td style="padding: 12px 15px; color: #34495e;">basis for multivariate models, linear regression, and portfolio theory</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // FAQ pass: "what covariance is", "what positive covariance means" and
//   // "common examples" each name their own h2. Kept the zero-covariance
//   // question — the claim the independence page deferred here, and which its
//   // notation section already links to as covariance#7 — and reframed the
//   // variance comparison around the Cov(X,X) identity. Added correlation,
//   // which no heading on this page mentions at all.
//   const faqQuestions = {
//     obj1: {
//       question: "Does zero covariance mean independence?",
//       answer: "No — the implication runs one way only. Independence forces covariance to zero, but zero covariance does not force independence. Covariance detects linear association, so a relationship with no linear component slips past it: for a perfect parabola the variables determine each other completely, yet the covariance can be exactly zero. Zero covariance means uncorrelated, which is strictly weaker.",
//       sectionId: "4"
//     },
//     obj2: {
//       question: "What is the difference between covariance and correlation?",
//       answer: "Units. Covariance carries the product of both variables' units, so its size means nothing on its own — you cannot tell a large covariance from a small one without knowing the scales. Correlation divides that out, forcing the value into [−1, 1] and making different pairs comparable. Both detect linear association only, and neither carries causation.",
//       sectionId: "7"
//     },
//     obj3: {
//       question: "Why does Cov(X, X) equal the variance?",
//       answer: "Because feeding the same variable into both slots reproduces the variance definition. Cov(X, Y) is E[(X − μ_X)(Y − μ_Y)]; set Y = X and the two factors become identical, giving E[(X − μ_X)²], which is Var(X). Variance is the special case of covariance where a variable is paired with itself, which is why the two operators share a family.",
//       sectionId: "7"
//     },
//     obj4: {
//       question: "Is σ_XY the same as σ_X times σ_Y?",
//       answer: "No. σ_XY is a single symbol with a two-letter subscript naming a pair — it is the covariance, not a product. The product σ_X σ_Y is a different quantity, and it appears in the denominator of the correlation coefficient. Reading the subscript as multiplication gives something with the wrong units and the wrong value.",
//       sectionId: "7"
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Covariance in Probability",
//       "description": "Learn how covariance measures joint behavior of random variables. Understand positive, negative, and zero covariance, independence relationships, and applications.",
//       "url": "https://www.learnmathclass.com/probability/covariance",
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
//         "name": "Covariance"
//       },
//       "teaches": [
//         "How covariance extends variance to pairs of random variables",
//         "Interpretation of positive, negative, and zero covariance",
//         "Relationship between covariance and independence",
//         "Why covariance is important in probability theory",
//         "Notation and naming conventions for covariance",
//         "Common applications of covariance in practice"
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
//           "name": "Covariance in Probability",
//           "item": "https://www.learnmathclass.com/probability/covariance"
//         }
//       ]
//     }
//   }

//   const sectionsContent={
//     obj0: {
//   title: `Key Terms`,
//   content: `
// - [Covariance](!/probability/definitions#covariance) — $\\operatorname{Cov}(X,Y) = E[(X-\\mu_X)(Y-\\mu_Y)]$
// - [Correlation Coefficient](!/probability/definitions#correlation_coefficient) — $\\rho_{XY}$, normalized covariance in $[-1,1]$
// - [Uncorrelated Random Variables](!/probability/definitions#uncorrelated_random_variables) — variables with $\\operatorname{Cov}(X,Y) = 0$
// - [Orthogonal Random Variables](!/probability/definitions#orthogonal_random_variables) — variables with $E[XY] = 0$
// - [Variance](!/probability/definitions#variance) — $\\operatorname{Cov}(X,X) = \\operatorname{Var}(X)$
// - [Independent Random Variables](!/probability/definitions#independent_random_variables) — independence implies zero covariance, not vice versa`,
//   before: ``,
//   after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
//   link: '',
// },

//     obj1:{
//       title:`From Single Random Variables to Pairs`,
//       content:`
// [Variance](!/probability/variance) describes how a single [random variable](!/probability/random-variables) is distributed around its typical
// value. It captures variability, but only for one quantity at a time.

// In many applications, two quantities are observed together in each trial or
// measurement. Treating them independently ignores how their values are related across
// the same observations.

// Covariance extends the idea of variability to pairs of [random variables](!/probability/random-variables) by focusing on
// their joint behavior rather than on each variable in isolation.
// `,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:`What Covariance Describes`,
//       content:`
// For each [random variable](!/probability/random-variables), values fluctuate around an average level.  
// Covariance examines how the positions of two variables relative to their own averages
// compare across the same observations.

// If both variables tend to be above their averages at the same time, or below them at
// the same time, the covariance reflects this alignment.  
// If one variable tends to be above its average while the other is below, the covariance
// reflects an opposing pattern.

// In this way, covariance summarizes the directional relationship between the deviations
// of two [random variable](!/probability/random-variables).

// Formally, covariance is the average product of the two deviations from the means:

// @academic[formula_callout:Covariance Definition
// $$\\operatorname{Cov}(X, Y) = E\\!\\left[(X - \\mu_X)(Y - \\mu_Y)\\right]$$
// /probability/formulas#covariance_definition]@

// @academic[formulas_link:Browse all probability formulas
// /probability/formulas]@
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:`Interpreting the Sign of Covariance`,
//       content:`
// The value of covariance indicates the direction of the relationship between two 
// [random variables](!/probability/random-variables), not its strength.

// A positive covariance means that higher-than-average values of one variable tend to
// occur with higher-than-average values of the other.  
// A negative covariance means that higher-than-average values of one variable tend to
// occur with lower-than-average values of the other.

// A covariance close to zero indicates no consistent linear relationship in how the two
// variables deviate from their averages.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:`Covariance and Independence`,
//       content:`
// If two [random variables](!/probability/random-variables) are independent, their joint behavior separates into two
// unrelated components. As a result, their covariance evaluates to zero.

// The converse does not hold. A covariance value of zero does not rule out dependence.
// Two variables may exhibit structured relationships that covariance does not capture.

// Covariance therefore reflects only one limited aspect of how [random variables](!/probability/random-variables) may be
// related.`,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:`Why Covariance Is Important`,
//       content:`
// Covariance provides a way to describe how two [random variables](!/probability/random-variables) are related beyond their
// individual behavior. It captures information that [variance](!/probability/variance) alone cannot express.

// This concept plays a central role in many areas of probability and statistics, including
// the study of joint distributions, linear relationships, and multivariate models.
// It is also a key component in formulas involving sums of [random variables](!/probability/random-variables).

// Understanding covariance is essential before introducing correlation, covariance
// matrices, and more advanced multivariate concepts.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:`Common Examples of Covariance`,
//       content:`
// Covariance arises whenever two numerical quantities are recorded from the same set of
// observations.

// Examples include pairs such as height and weight, study time and exam score, daily
// temperature and energy usage, or returns of two financial assets.
// In each case, the interest is not only in the individual values, but in how the two
// quantities are related across the same observations.

// These situations motivate the use of covariance as a basic descriptive tool for joint
// behavior.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:`Covariance Notation`,
//       lead:`A two-argument operator, its subscripted Greek shorthand, and the normalized cousin that strips the units away. All are catalogued among the [probability symbols](!/math-symbols/probability).`,
//       inherited:`$X$, $Y$ and the expectation $E[\\cdot]$ come from the [probability function](!/probability/probability-function#notation) and [expected value notation](!/probability/expected-value#notation); $\\sigma^2$, $\\sigma$ and $\\mu$ from [variance notation](!/probability/variance#notation).`,
//       entries:[
//         {
//           id:'cov-operator',
//           tex:`$\\operatorname{Cov}(X, Y)$`,
//           read:`the covariance of X and Y`,
//           means:`A two-argument operator: it consumes a **pair** of random variables and returns one number measuring how they move together — $E[(X - \\mu_X)(Y - \\mu_Y)]$. Print sets the name upright, like $\\operatorname{Var}$ and $E$.`,
//           cases:`The arguments commute — $\\operatorname{Cov}(X,Y) = \\operatorname{Cov}(Y,X)$ — and feeding the same variable twice collapses it to [variance](!/probability/variance#notation): $\\operatorname{Cov}(X,X) = \\operatorname{Var}(X)$, which is why the two operators share a family.`,
//           confusedWith:`A statement about dependence. $\\operatorname{Cov}(X,Y) = 0$ means uncorrelated, not independent — the two coincide only in special cases, as **Covariance and Independence** above explains; independence forces zero covariance, never the reverse.`,
//         },
//         {
//           id:'sigma-xy',
//           tex:`$\\sigma_{XY}$`,
//           read:`sigma X Y — the covariance`,
//           means:`The parameter-side spelling, matching the $\\sigma^2$ of [variance](!/probability/variance#notation): a double subscript names the pair. With this convention $\\sigma_{XX}$ is just $\\sigma_X^2$, and the whole family collects into a covariance matrix.`,
//           cases:`Matrix work makes the subscripts indices — $\\sigma_{ij}$ for the covariance of the $i$-th and $j$-th variables — the [coordinate-slot subscript job](!/linear-algebra/vectors/basic-operations#notation) applied to a pair rather than a position.`,
//           confusedWith:`A product of sigmas. $\\sigma_{XY}$ is one symbol with a two-letter subscript, not $\\sigma_X \\cdot \\sigma_Y$ — that product appears in the denominator of the correlation below, which is a different quantity entirely.`,
//         },
//         {
//           id:'rho-correlation',
//           tex:`$\\rho_{XY}$`,
//           read:`rho — the correlation coefficient`,
//           means:`Covariance with the units divided out: $\\rho = \\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X \\sigma_Y}$, which forces the value into $[-1, 1]$ and makes different variable pairs comparable — something raw covariance, carrying the product of two units, can never be.`,
//           alsoWritten:`$\\operatorname{Corr}(X,Y)$ — the spelled-out operator, preferred where $\\rho$ is already taken; sample estimates switch to Latin $r$, following the [population-versus-estimate convention](!/probability/expected-value#notation) that pairs $\\mu$ with $\\bar{x}$.`,
//           confusedWith:`A measure of any relationship. $\\rho$ detects **linear** association only — a perfect parabola can have $\\rho = 0$ while the variables determine each other completely; the sign carries direction, the magnitude carries linear strength, and neither carries causation.`,
//         },
//       ],
//       symbolsHref:`/math-symbols/probability`,
//       symbolsLabel:`All probability symbols`,
//       parentHref:`/probability`,
//       parentLabel:`Probability`,
//       before:``,
//       after:``,
//       link:'',

//     },
//     obj8:{
//       title:`What Comes Next`,
//       content:`
// Covariance serves as the foundation for more structured ways of describing relationships
// between multiple [random variables](!/probability/random-variables).

// It leads directly to correlation, covariance matrices, and the study of joint
// distributions. These tools extend the ideas introduced here to broader multivariate
// settings and applications.

// Correlation rescales covariance by the two standard deviations, and its value always stays within a fixed range:

// @academic[formula_callout:Correlation Coefficient Definition
// $$\\rho_{XY} = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X\\,\\sigma_Y}$$
// /probability/formulas#correlation_coefficient_definition]@

// @academic[formula_callout:Correlation Bounds
// $$-1 \\leq \\rho_{XY} \\leq 1$$
// /probability/formulas#correlation_bounds]@

// @academic[formulas_link:Browse all probability formulas
// /probability/formulas]@
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
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
  
//     },

//     capstone:{
//       title:`Covariance at a Glance`,
//       content:`The table below collects covariance into a single reference card — its definition, the symmetry and self-covariance identities, the sign interpretation (positive, negative, zero), the one-way relationship with independence, what covariance does and does not capture, common examples of paired quantities, and the concepts it leads into.`,
//       before:``,
//       after:``,
//       link:'',
//     }
  
//   }


//   const introContent = {
//     id: "intro",
//     title: "Covariance: How Two Random Variables Are Related",
//     content: `
//   In many probability settings, two numerical quantities are recorded from the same
// experiment or observation. Describing each quantity on its own does not explain how
// they behave in relation to one another.

// Covariance is the concept used to describe this relationship. It focuses on how the
// numerical values of two random variables compare across repeated observations, relative
// to their typical levels.

// This idea becomes essential whenever probability models involve more than one random
// variable.
// `
//   }

//   const cvPts = [[1, 2], [1.5, 3.5], [2, 1.5], [2.5, 3], [3, 4.5], [3.5, 2.5], [4, 5], [4.5, 4], [5, 6], [5.5, 5], [6, 6.5], [2.2, 4.4]];
//   const cvMx = cvPts.reduce((s, p) => s + p[0], 0) / cvPts.length, cvMy = cvPts.reduce((s, p) => s + p[1], 0) / cvPts.length;
//   const cvDots = cvPts.map(([x, y]) => ({ fn: () => y, from: x, to: x, ends: ['closed', 'closed'], color: (x - cvMx) * (y - cvMy) >= 0 ? 'f' : 'r' }));
//   const cvParab = [-2, -1, 0, 1, 2].map((x) => ({ fn: () => x * x, from: x, to: x, ends: ['closed', 'closed'], color: 'f' }));
//   const fpCovSign = { kind: 'pieces', svgTitle: 'Twelve paired observations with dashed lines at the two means: most points sit above-and-above or below-and-below, so the covariance is positive', xRange: [0, 7], yRange: [0, 7.5], xLetter: 'x', yLetter: 'y',
//     pieces: [{ fn: () => cvMy, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0, 7]], label: { text: 'mean of y', x: 6.95, y: cvMy, pos: 'nw' } }, ...cvDots],
//     vlines: [{ x: cvMx, label: 'mean of x' }],
//     notes: [{ x: 0.2, y: 7.0, text: 'blue: deviations agree', pos: 'e', color: 'f' }, { x: 0.2, y: 6.4, text: 'amber: deviations disagree', pos: 'e', color: 'r' }],
//     caption: 'Most deviations agree in sign, so the covariance is positive' };
//   const fpZeroCov = { kind: 'pieces', svgTitle: 'X takes -2, -1, 0, 1, 2 equally and Y = X^2: Y is fixed by X, yet Cov(X, Y) = 0', xRange: [-3, 5], yRange: [-0.5, 5],
//     pieces: [{ fn: (x) => x * x, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[-2.2, 2.2]] }, ...cvParab],
//     notes: [{ x: 2.45, y: 4.5, text: 'Y = X²: dependent', pos: 'e', color: 'r' }, { x: 2.45, y: 4.0, text: 'yet Cov(X, Y) = 0', pos: 'e', color: 'f' }, { x: 2.45, y: 3.5, text: 'the halves cancel', pos: 'e' }],
//     caption: 'Zero covariance yet total dependence: only linear trends count' };
//   const demoUnits = {
//     covSign: demoUnitFrame({
//       svg: renderFunctionPlotV4(fpCovSign),
//       caption: 'Deviations that agree in sign',
//       text: 'Twelve paired observations, with dashed lines at the mean of x and the mean of y. Each point&#8217;s deviation from the two means is either the same sign (both above or both below: blue) or opposite signs (amber). Covariance averages the products of the two deviations; here the blue points dominate, so the products are mostly positive and the covariance is positive: high x tends to come with high y.',
//     }),
//     zeroCov: demoUnitFrame({
//       svg: renderFunctionPlotV4(fpZeroCov),
//       caption: 'Dependent, with zero covariance',
//       text: 'Let X take the values &#8722;2, &#8722;1, 0, 1, 2 with equal probability and set Y = X&#178;. Knowing X fixes Y completely. Yet the points on the left of the parabola mirror those on the right: every positive product of deviations is matched by a negative one, so Cov(X, Y) = E[X&#179;] &#8722; E[X]E[X&#178;] = 0. Covariance measures linear tendency only, and a symmetric curve has none.',
//     }),
//   };

//   const covarianceSignCases = {
//     parent: {
//       formula: '$\\operatorname{Cov}(X, Y) = E[(X - \\mu_X)(Y - \\mu_Y)]$',
//       desc: 'One number computed from paired observations. Its sign is read in three ways; its size on its own is not the message.',
//       splitBy: 'sign of $\\operatorname{Cov}(X, Y)$',
//     },
//     cases: [
//       {
//         id: 'positive', number: '01', condition: '$\\operatorname{Cov} > 0$', color: 'a',
//         headline: 'Deviations move the same way',
//         desc: 'higher-than-average $X$ tends to come with higher-than-average $Y$, and lower with lower',
//         count: { n: '+', label: 'the mean product of deviations is positive' },
//         formula: 'products $(X - \\mu_X)(Y - \\mu_Y)$ are mostly $> 0$',
//         example: 'height and weight across people',
//       },
//       {
//         id: 'negative', number: '02', condition: '$\\operatorname{Cov} < 0$', color: 'b',
//         headline: 'Deviations move opposite ways',
//         desc: 'higher-than-average $X$ tends to come with lower-than-average $Y$',
//         count: { n: '−', label: 'the mean product of deviations is negative' },
//         formula: 'products $(X - \\mu_X)(Y - \\mu_Y)$ are mostly $< 0$',
//         example: 'driving speed and trip time',
//       },
//       {
//         id: 'zero', number: '03', condition: '$\\operatorname{Cov} = 0$', color: 'c',
//         headline: 'No consistent linear relationship',
//         desc: 'the deviations show no steady direction; this does **not** mean the variables are independent',
//         count: { n: '0', label: 'the mean product of deviations is zero' },
//         formula: 'the products cancel out',
//         example: '$Y = X^2$ with $X$ symmetric about $0$: $Y$ is fixed by $X$, yet the covariance is $0$',
//       },
//     ],
//   };

//   return {
//     props: {
//       sectionsContent,
//       covarianceSignCases,
//       introContent,
//       summaryTable,
//       faqQuestions,
//       schemas,
//       demoUnits,
//       seoData: {
//         title: "Covariance: Joint Behavior of Random Variables | Learn Math Class",
//         description: "Learn how covariance measures joint behavior of random variables. Understand positive, negative, and zero covariance, independence relationships, and applications.",
//         keywords: keyWords.join(", "),
//         url: "/probability/covariance",
//         name: "Covariance in Probability"
//       }
//     }
//   }
// }

// const siteTheme = {
//   title: '#06357A', accent: '#2563EB', warm: '#B45309',
//   panelSoft: '#eff6ff', panelSofter: '#f8fafc',
// }

// export default function CovariancePage({seoData, sectionsContent, introContent, covarianceSignCases, summaryTable, faqQuestions, schemas, demoUnits}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
//           <div key={'unit-covSign'} dangerouslySetInnerHTML={{ __html: demoUnits.covSign }} />,
//           `If the amber points dominated instead, the covariance would be negative.`,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//           `The sign is the whole message: as the section says, covariance reports direction, not strength. Two of the pairs listed later on this page, height and weight and study time and exam score, tend to deviate the same way, so their covariance is positive. A pair that deviates in opposite ways, such as driving speed and the time a trip takes, has a negative covariance.`,
//           <DiagramFrame
//             key={'obj3-diagram'}
//             id="covariance-sign-cases"
//             title="What the sign of the covariance says"
//             source="/probability/covariance"
//           >
//             <CaseSplit data={covarianceSignCases}  theme={siteTheme} />
//           </DiagramFrame>,
//           `The third card is the one to read twice. A covariance of zero rules out a consistent linear tendency and nothing more; the next section shows that two variables can depend on each other completely and still have covariance exactly zero.`,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//           <div key={'unit-zeroCov'} dangerouslySetInnerHTML={{ __html: demoUnits.zeroCov }} />,
//           `So independence implies zero covariance, but zero covariance does not imply independence.`,
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
//         link:``,
//         content:[
//           <NotationSection
//             key={'notation'}
//             title={sectionsContent.obj7.title}
//             lead={sectionsContent.obj7.lead}
//             inherited={sectionsContent.obj7.inherited}
//             entries={sectionsContent.obj7.entries}
//             symbolsHref={sectionsContent.obj7.symbolsHref}
//             symbolsLabel={sectionsContent.obj7.symbolsLabel}
//             parentHref={sectionsContent.obj7.parentHref}
//             parentLabel={sectionsContent.obj7.parentLabel}
//             theme={'navy'}
//           />,
//           `
// Three identities describe how covariance is computed and how it behaves:

// @academic[formula_callout:Covariance Computational Formula
// $$\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y]$$
// /probability/formulas#covariance_computational_formula]@

// @academic[formula_callout:Covariance Self-Identity
// $$\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$$
// /probability/formulas#covariance_self-identity]@

// @academic[formula_callout:Covariance Bilinearity
// $$\\operatorname{Cov}(aX + b,\\; cY + d) = ac\\,\\operatorname{Cov}(X, Y)$$
// /probability/formulas#covariance_bilinearity]@

// @academic[formulas_link:Browse all probability formulas
// /probability/formulas]@
// `,
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
//         id:'capstone',
//         title:sectionsContent.capstone.title,
//         link:sectionsContent.capstone.link,
//         content:[
//           sectionsContent.capstone.content,
//           <div key={'summary-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
//         ]
//     },
//     // faq: rendered component — must be built here, not in getStaticProps
//     {
//         id:'faq',
//         title:`Covariance FAQ`,
//         link:``,
//         content:[
//           <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
//             <FAQSection
//               faqQuestions={faqQuestions}
//               theme={'leftBorder'}
//               width={'100%'}
//               openFirst={false}
//             />
//           </div>,
//         ]
//     },
//     // {
//     //     id:'9',
//     //     title:sectionsContent.obj9.title,
//     //     link:sectionsContent.obj9.link,
//     //     content:[
//     //       sectionsContent.obj9.content,
//     //     ]
//     // },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Covariance</h1>
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


// tables-optimized: v4 | 2026-05-23 | 1 table (capstone summary)


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
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import { tableHeaders } from '@/app/styles/theme'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){

  const keyWords = [
    "covariance",
    "covariance in probability",
    "joint random variables",
    "covariance vs independence",
    "positive covariance",
    "negative covariance",
    "zero covariance",
    "covariance and correlation",
    "covariance notation",
    "joint distribution",
    "multivariate probability",
    "covariance interpretation",
    "covariance examples"
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLE ----------

  // capstone — summary: Covariance at a Glance
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
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) = E[(X − μ<sub>X</sub>)(Y − μ<sub>Y</sub>)]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">extends <a href="/probability/variance" style="${linkStyle}">variance</a> from one variable to a pair</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) = Cov(Y, X)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">order of the variables doesn&apos;t matter</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Self-covariance</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, X) = Var(X)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">pairing a variable with itself recovers its variance</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive covariance</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both variables tend to be above (or below) their averages together</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative covariance</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one variable above its average tends to occur with the other below its average</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero covariance</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cov(X, Y) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no consistent <em>linear</em> relationship — non-linear dependence may still exist</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/probability/independence" style="${linkStyle}">Independence</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X, Y independent ⟹ Cov(X, Y) = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the converse does <strong>not</strong> hold — zero covariance ≠ independence</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What it captures</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">direction (not strength) of the linear relationship</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">magnitude depends on the units; normalize via correlation ρ for scale-free strength</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Typical examples</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">height &amp; weight; study time &amp; exam score; temperature &amp; energy use; returns of two assets</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">paired numerical quantities recorded from the same observations</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Leads to</td>
      <td style="padding: 12px 15px; color: #34495e;">correlation coefficient ρ; covariance matrices; joint distributions</td>
      <td style="padding: 12px 15px; color: #34495e;">basis for multivariate models, linear regression, and portfolio theory</td>
    </tr>
  </tbody>
</table>
`

  // FAQ pass: "what covariance is", "what positive covariance means" and
  // "common examples" each name their own h2. Kept the zero-covariance
  // question — the claim the independence page deferred here, and which its
  // notation section already links to as covariance#7 — and reframed the
  // variance comparison around the Cov(X,X) identity. Added correlation,
  // which no heading on this page mentions at all.
  const faqQuestions = {
    obj1: {
      question: "Does zero covariance mean independence?",
      answer: "No — the implication runs one way only. Independence forces covariance to zero, but zero covariance does not force independence. Covariance detects linear association, so a relationship with no linear component slips past it: for a perfect parabola the variables determine each other completely, yet the covariance can be exactly zero. Zero covariance means uncorrelated, which is strictly weaker.",
      sectionId: "4"
    },
    obj2: {
      question: "What is the difference between covariance and correlation?",
      answer: "Units. Covariance carries the product of both variables' units, so its size means nothing on its own — you cannot tell a large covariance from a small one without knowing the scales. Correlation divides that out, forcing the value into [−1, 1] and making different pairs comparable. Both detect linear association only, and neither carries causation.",
      sectionId: "7"
    },
    obj3: {
      question: "Why does Cov(X, X) equal the variance?",
      answer: "Because feeding the same variable into both slots reproduces the variance definition. Cov(X, Y) is E[(X − μ_X)(Y − μ_Y)]; set Y = X and the two factors become identical, giving E[(X − μ_X)²], which is Var(X). Variance is the special case of covariance where a variable is paired with itself, which is why the two operators share a family.",
      sectionId: "7"
    },
    obj4: {
      question: "Is σ_XY the same as σ_X times σ_Y?",
      answer: "No. σ_XY is a single symbol with a two-letter subscript naming a pair — it is the covariance, not a product. The product σ_X σ_Y is a different quantity, and it appears in the denominator of the correlation coefficient. Reading the subscript as multiplication gives something with the wrong units and the wrong value.",
      sectionId: "7"
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Covariance in Probability",
      "description": "Learn how covariance measures joint behavior of random variables. Understand positive, negative, and zero covariance, independence relationships, and applications.",
      "url": "https://www.learnmathclass.com/probability/covariance",
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
        "name": "Covariance"
      },
      "teaches": [
        "How covariance extends variance to pairs of random variables",
        "Interpretation of positive, negative, and zero covariance",
        "Relationship between covariance and independence",
        "Why covariance is important in probability theory",
        "Notation and naming conventions for covariance",
        "Common applications of covariance in practice"
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
          "name": "Covariance in Probability",
          "item": "https://www.learnmathclass.com/probability/covariance"
        }
      ]
    }
  }

  const sectionsContent={
    obj0: {
  title: `Key Terms`,
  content: `
- [Covariance](!/probability/definitions#covariance) — $\\operatorname{Cov}(X,Y) = E[(X-\\mu_X)(Y-\\mu_Y)]$
- [Correlation Coefficient](!/probability/definitions#correlation_coefficient) — $\\rho_{XY}$, normalized covariance in $[-1,1]$
- [Uncorrelated Random Variables](!/probability/definitions#uncorrelated_random_variables) — variables with $\\operatorname{Cov}(X,Y) = 0$
- [Orthogonal Random Variables](!/probability/definitions#orthogonal_random_variables) — variables with $E[XY] = 0$
- [Variance](!/probability/definitions#variance) — $\\operatorname{Cov}(X,X) = \\operatorname{Var}(X)$
- [Independent Random Variables](!/probability/definitions#independent_random_variables) — independence implies zero covariance, not vice versa`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Definitions](!/probability/definitions) →@`,
  link: '',
},

    obj1:{
      title:`From Single Random Variables to Pairs`,
      content:`
[Variance](!/probability/variance) describes how a single [random variable](!/probability/random-variables) is distributed around its typical
value. It captures variability, but only for one quantity at a time.

In many applications, two quantities are observed together in each trial or
measurement. Treating them independently ignores how their values are related across
the same observations.

Covariance extends the idea of variability to pairs of [random variables](!/probability/random-variables) by focusing on
their joint behavior rather than on each variable in isolation.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`What Covariance Describes`,
      content:`
For each [random variable](!/probability/random-variables), values fluctuate around an average level.  
Covariance examines how the positions of two variables relative to their own averages
compare across the same observations.

If both variables tend to be above their averages at the same time, or below them at
the same time, the covariance reflects this alignment.  
If one variable tends to be above its average while the other is below, the covariance
reflects an opposing pattern.

In this way, covariance summarizes the directional relationship between the deviations
of two [random variables](!/probability/random-variables).

Formally, covariance is the average product of the two deviations from the means:

@academic[formula_callout:Covariance Definition
$$\\operatorname{Cov}(X, Y) = E\\!\\left[(X - \\mu_X)(Y - \\mu_Y)\\right]$$
/probability/formulas#covariance_definition]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Interpreting the Sign of Covariance`,
      content:`
The value of covariance indicates the direction of the relationship between two 
[random variables](!/probability/random-variables), not its strength.

A positive covariance means that higher-than-average values of one variable tend to
occur with higher-than-average values of the other.  
A negative covariance means that higher-than-average values of one variable tend to
occur with lower-than-average values of the other.

A covariance close to zero indicates no consistent linear relationship in how the two
variables deviate from their averages.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Covariance and Independence`,
      content:`
@academic[rule_theorem_plain:If two [random variables](!/probability/random-variables) are independent, their joint behavior separates into two
unrelated components. As a result, their covariance evaluates to zero.]@

The converse does not hold. A covariance value of zero does not rule out dependence.
Two variables may exhibit structured relationships that covariance does not capture.

Covariance therefore reflects only one limited aspect of how [random variables](!/probability/random-variables) may be
related.`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Why Covariance Is Important`,
      content:`
Covariance provides a way to describe how two [random variables](!/probability/random-variables) are related beyond their
individual behavior. It captures information that [variance](!/probability/variance) alone cannot express.

This concept plays a central role in many areas of probability and statistics, including
the study of joint distributions, linear relationships, and multivariate models.
It is also a key component in formulas involving sums of [random variables](!/probability/random-variables).

Understanding covariance is essential before introducing correlation, covariance
matrices, and more advanced multivariate concepts.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Common Examples of Covariance`,
      content:`
Covariance arises whenever two numerical quantities are recorded from the same set of
observations.

Examples include pairs such as height and weight, study time and exam score, daily
temperature and energy usage, or returns of two financial assets.
In each case, the interest is not only in the individual values, but in how the two
quantities are related across the same observations.

These situations motivate the use of covariance as a basic descriptive tool for joint
behavior.

@academic[pitfall,aside:true,width:35%:Judging strength by the size of the covariance
Reading a larger covariance as a stronger relationship ignores units: recording height in centimetres instead of metres multiplies $\\operatorname{Cov}$ by $100$, while the relationship stays the same. Strength is compared with the correlation $\\rho_{XY}$, which does not change.
[Read more](!#pitfalls)]@

The pairs in this list are recorded in very different units: centimetres and kilograms, hours and points, degrees and kilowatt-hours, percentage returns. Each deviation from a mean carries the unit of its own variable, so the product of two deviations carries the product of the two units.

A covariance is therefore a number on its own scale for each pair. A covariance for height and weight is expressed in centimetre-kilograms, one for study time and exam score in hour-points, and the same pair recorded with other units produces a different number.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Covariance Notation`,
      lead:`A two-argument operator, its subscripted Greek shorthand, and the normalized cousin that strips the units away. All are catalogued among the [probability symbols](!/math-symbols/probability).`,
      inherited:`$X$, $Y$ and the expectation $E[\\cdot]$ come from the [probability function](!/probability/probability-function#notation) and [expected value notation](!/probability/expected-value#notation); $\\sigma^2$, $\\sigma$ and $\\mu$ from [variance notation](!/probability/variance#notation).`,
      entries:[
        {
          id:'cov-operator',
          tex:`$\\operatorname{Cov}(X, Y)$`,
          read:`the covariance of X and Y`,
          means:`A two-argument operator: it consumes a **pair** of random variables and returns one number measuring how they move together — $E[(X - \\mu_X)(Y - \\mu_Y)]$. Print sets the name upright, like $\\operatorname{Var}$ and $E$.`,
          cases:`The arguments commute — $\\operatorname{Cov}(X,Y) = \\operatorname{Cov}(Y,X)$ — and feeding the same variable twice collapses it to [variance](!/probability/variance#notation): $\\operatorname{Cov}(X,X) = \\operatorname{Var}(X)$, which is why the two operators share a family.`,
          confusedWith:`A statement about dependence. $\\operatorname{Cov}(X,Y) = 0$ means uncorrelated, not independent — the two coincide only in special cases, as **Covariance and Independence** above explains; independence forces zero covariance, never the reverse.`,
        },
        {
          id:'sigma-xy',
          tex:`$\\sigma_{XY}$`,
          read:`sigma X Y — the covariance`,
          means:`The parameter-side spelling, matching the $\\sigma^2$ of [variance](!/probability/variance#notation): a double subscript names the pair. With this convention $\\sigma_{XX}$ is just $\\sigma_X^2$, and the whole family collects into a covariance matrix.`,
          cases:`Matrix work makes the subscripts indices — $\\sigma_{ij}$ for the covariance of the $i$-th and $j$-th variables — the [coordinate-slot subscript job](!/linear-algebra/vectors/basic-operations#notation) applied to a pair rather than a position.`,
          confusedWith:`A product of sigmas. $\\sigma_{XY}$ is one symbol with a two-letter subscript, not $\\sigma_X \\cdot \\sigma_Y$ — that product appears in the denominator of the correlation below, which is a different quantity entirely.`,
        },
        {
          id:'rho-correlation',
          tex:`$\\rho_{XY}$`,
          read:`rho — the correlation coefficient`,
          means:`Covariance with the units divided out: $\\rho = \\dfrac{\\operatorname{Cov}(X,Y)}{\\sigma_X \\sigma_Y}$, which forces the value into $[-1, 1]$ and makes different variable pairs comparable — something raw covariance, carrying the product of two units, can never be.`,
          alsoWritten:`$\\operatorname{Corr}(X,Y)$ — the spelled-out operator, preferred where $\\rho$ is already taken; sample estimates switch to Latin $r$, following the [population-versus-estimate convention](!/probability/expected-value#notation) that pairs $\\mu$ with $\\bar{x}$.`,
          confusedWith:`A measure of any relationship. $\\rho$ detects **linear** association only — a perfect parabola can have $\\rho = 0$ while the variables determine each other completely; the sign carries direction, the magnitude carries linear strength, and neither carries causation.`,
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
    obj8:{
      title:`What Comes Next`,
      content:`
Covariance serves as the foundation for more structured ways of describing relationships
between multiple [random variables](!/probability/random-variables).

It leads directly to correlation, covariance matrices, and the study of joint
distributions. These tools extend the ideas introduced here to broader multivariate
settings and applications.

Correlation rescales covariance by the two standard deviations, and its value always stays within a fixed range:

@academic[formula_callout:Correlation Coefficient Definition
$$\\rho_{XY} = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X\\,\\sigma_Y}$$
/probability/formulas#correlation_coefficient_definition]@

@academic[formula_callout:Correlation Bounds
$$-1 \\leq \\rho_{XY} \\leq 1$$
/probability/formulas#correlation_bounds]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

@academic[pitfall,aside:true,width:35%:Dividing by the variances
Using $\\operatorname{Var}(X)\\operatorname{Var}(Y)$ in the denominator: with $\\operatorname{Cov}(X, Y) = 3$, $\\operatorname{Var}(X) = 4$, $\\operatorname{Var}(Y) = 9$ this gives $\\frac{3}{36} \\approx 0.083$. The denominator takes the square roots: $\\rho_{XY} = \\frac{3}{2 \\cdot 3} = 0.5$.
[Read more](!#pitfalls)]@

The denominator is built so that the units cancel. The covariance in the numerator carries the unit of $X$ times the unit of $Y$, and the product in the denominator carries exactly the same pair of units, so the ratio is a pure number.

That is what makes correlation comparable across pairs and unchanged by a change of scale: recording $X$ in centimetres instead of metres multiplies the numerator and the denominator by the same factor $100$. The bounds then give the number a fixed reading, with values near $1$ or $-1$ for an almost exact linear relationship and values near $0$ for little linear tendency.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:``,
      content:``,
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
  
    },

    capstone:{
      title:`Covariance at a Glance`,
      content:`The table below collects covariance into a single reference card — its definition, the symmetry and self-covariance identities, the sign interpretation (positive, negative, zero), the one-way relationship with independence, what covariance does and does not capture, common examples of paired quantities, and the concepts it leads into.`,
      before:``,
      after:``,
      link:'',
    },

    obj16:{
      title:`Common Pitfalls`,
      content:`Four mistakes account for most wrong conclusions drawn from covariance. Three are marked where they happen in the sections above; the first is the one the section on independence warns about. Here each is worked through in full, with the wrong and the right working side by side.

**Treating zero covariance as independence**

A covariance of $0$ is computed, and the two variables are declared independent.

Wrong working: let $X$ take the values $-2, -1, 0, 1, 2$ with probability $\\frac{1}{5}$ each, and let $Y = X^2$. Then $E[X] = 0$ and $E[XY] = E[X^3] = 0$, so
$$\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y] = 0 - 0 \\cdot 2 = 0$$
and the conclusion is that $X$ and $Y$ are independent.

Right working: $Y$ is fixed by $X$, so they are as dependent as two variables can be. Independence would need $P(X = 0, Y = 0) = P(X = 0)\\,P(Y = 0) = \\frac{1}{5} \\cdot \\frac{1}{5} = \\frac{1}{25}$, but $X = 0$ forces $Y = 0$, so $P(X = 0, Y = 0) = \\frac{1}{5}$. The variables are uncorrelated, not independent.

Why it happens: the implication "independent, so covariance $0$" is true and is used often, and it is easy to run it backwards.

How to check: test one pair of values against the product rule $P(X = x, Y = y) = P(X = x)\\,P(Y = y)$. A single pair that fails proves dependence, whatever the covariance is.

**Judging strength by the size of the covariance**

Two covariances are compared, and the larger one is read as the stronger relationship.

Wrong working: height and weight have $\\operatorname{Cov} = 0.5$ with height in metres, and study time and exam score have $\\operatorname{Cov} = 20$. Since $20 > 0.5$, study time and score seem far more closely related. With height in centimetres the first covariance becomes $50$, and the ranking reverses.

Right working: compare correlations. With $\\sigma_H = 0.1$ m and $\\sigma_W = 10$ kg, $\\rho = \\frac{0.5}{0.1 \\cdot 10} = 0.5$; with $\\sigma_T = 5$ hours and $\\sigma_S = 10$ points, $\\rho = \\frac{20}{5 \\cdot 10} = 0.4$. Height and weight are the more strongly related pair, in any units.

Why it happens: for most quantities a bigger number means more of something, and the units of a covariance, such as metre-kilograms, are rarely written next to it.

How to check: change the units of one variable. If the comparison flips, it was a comparison of scales, not of relationships. In centimetres, $\\rho = \\frac{50}{10 \\cdot 10} = 0.5$ is unchanged.

**Splitting the expectation of a product**

The computational formula $\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y]$ is used, and $E[XY]$ is replaced by $E[X]\\,E[Y]$.

Wrong working, for a fair coin $X \\in \\{0, 1\\}$ and $Y = X$:
$$E[XY] = E[X]\\,E[Y] = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}, \\quad \\operatorname{Cov}(X, Y) = \\frac{1}{4} - \\frac{1}{4} = 0$$

Right working: compute $E[XY]$ from the pairs. Here $XY = X^2 = X$, so $E[XY] = \\frac{1}{2}$ and
$$\\operatorname{Cov}(X, Y) = \\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$$

Why it happens: the rule $E[XY] = E[X]\\,E[Y]$ is true for independent variables and is met early. Applied without independence, it turns every covariance into $0$.

How to check: $\\operatorname{Cov}(X, X)$ must equal $\\operatorname{Var}(X)$, and for this coin $\\operatorname{Var}(X) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$, not $0$.

**Dividing by the variances**

The correlation is computed with the two variances in the denominator instead of the two standard deviations.

Wrong working, with $\\operatorname{Cov}(X, Y) = 3$, $\\operatorname{Var}(X) = 4$ and $\\operatorname{Var}(Y) = 9$:
$$\\rho_{XY} = \\frac{3}{4 \\cdot 9} = \\frac{1}{12} \\approx 0.083$$

Right working: $\\sigma_X = \\sqrt{4} = 2$ and $\\sigma_Y = \\sqrt{9} = 3$, so
$$\\rho_{XY} = \\frac{3}{2 \\cdot 3} = 0.5$$

Why it happens: variances are often the numbers given, and $\\sigma_X\\,\\sigma_Y$ looks like it could be $\\sigma_X^2\\,\\sigma_Y^2$ with the squares left off.

How to check: try $Y = X$, whose correlation must be $1$. With $\\operatorname{Var}(X) = 4$, the right formula gives $\\frac{4}{2 \\cdot 2} = 1$, while the wrong one gives $\\frac{4}{4 \\cdot 4} = 0.25$. The wrong version also changes when the units change, which a correlation never does.`,
      before:``,
      after:``,
      link:'',
    }
  
  }


  const introContent = {
    id: "intro",
    title: "Covariance: How Two Random Variables Are Related",
    content: `
  In many probability settings, two numerical quantities are recorded from the same
experiment or observation. Describing each quantity on its own does not explain how
they behave in relation to one another.

Covariance is the concept used to describe this relationship. It focuses on how the
numerical values of two random variables compare across repeated observations, relative
to their typical levels.

This idea becomes essential whenever probability models involve more than one random
variable.
`
  }

  const cvPts = [[1, 2], [1.5, 3.5], [2, 1.5], [2.5, 3], [3, 4.5], [3.5, 2.5], [4, 5], [4.5, 4], [5, 6], [5.5, 5], [6, 6.5], [2.2, 4.4]];
  const cvMx = cvPts.reduce((s, p) => s + p[0], 0) / cvPts.length, cvMy = cvPts.reduce((s, p) => s + p[1], 0) / cvPts.length;
  const cvDots = cvPts.map(([x, y]) => ({ fn: () => y, from: x, to: x, ends: ['closed', 'closed'], color: (x - cvMx) * (y - cvMy) >= 0 ? 'f' : 'r' }));
  const cvParab = [-2, -1, 0, 1, 2].map((x) => ({ fn: () => x * x, from: x, to: x, ends: ['closed', 'closed'], color: 'f' }));
  const fpCovSign = { kind: 'pieces', svgTitle: 'Twelve paired observations with dashed lines at the two means: most points sit above-and-above or below-and-below, so the covariance is positive', xRange: [0, 7], yRange: [0, 7.5], xLetter: 'x', yLetter: 'y',
    pieces: [{ fn: () => cvMy, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[0, 7]], label: { text: 'mean of y', x: 6.95, y: cvMy, pos: 'nw' } }, ...cvDots],
    vlines: [{ x: cvMx, label: 'mean of x' }],
    notes: [{ x: 0.2, y: 7.0, text: 'blue: deviations agree', pos: 'e', color: 'f' }, { x: 0.2, y: 6.4, text: 'amber: deviations disagree', pos: 'e', color: 'r' }],
    caption: 'Most deviations agree in sign, so the covariance is positive' };
  const fpZeroCov = { kind: 'pieces', svgTitle: 'X takes -2, -1, 0, 1, 2 equally and Y = X^2: Y is fixed by X, yet Cov(X, Y) = 0', xRange: [-3, 5], yRange: [-0.5, 5],
    pieces: [{ fn: (x) => x * x, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[-2.2, 2.2]] }, ...cvParab],
    notes: [{ x: 2.45, y: 4.5, text: 'Y = X²: dependent', pos: 'e', color: 'r' }, { x: 2.45, y: 4.0, text: 'yet Cov(X, Y) = 0', pos: 'e', color: 'f' }, { x: 2.45, y: 3.5, text: 'the halves cancel', pos: 'e' }],
    caption: 'Zero covariance yet total dependence: only linear trends count' };
  const demoUnits = {
    covSign: demoUnitFrame({
      svg: renderFunctionPlotV4(fpCovSign),
      caption: 'Deviations that agree in sign',
      text: 'Twelve paired observations, with dashed lines at the mean of x and the mean of y. Each point&#8217;s deviation from the two means is either the same sign (both above or both below: blue) or opposite signs (amber). Covariance averages the products of the two deviations; here the blue points dominate, so the products are mostly positive and the covariance is positive: high x tends to come with high y.',
    }),
    zeroCov: demoUnitFrame({
      svg: renderFunctionPlotV4(fpZeroCov),
      caption: 'Dependent, with zero covariance',
      text: 'Let X take the values &#8722;2, &#8722;1, 0, 1, 2 with equal probability and set Y = X&#178;. Knowing X fixes Y completely. Yet the points on the left of the parabola mirror those on the right: every positive product of deviations is matched by a negative one, so Cov(X, Y) = E[X&#179;] &#8722; E[X]E[X&#178;] = 0. Covariance measures linear tendency only, and a symmetric curve has none.',
    }),
  };

  const covarianceSignCases = {
    prefaceTitle: 'Overview',
    preface: 'Covariance averages the products of the two deviations from the means. Only its **sign** is read here: it reports the direction of the linear relationship, not its strength.',
    conclusionTitle: 'Takeaway',
    conclusion: 'To compare strength across different pairs, divide by $\\sigma_X \\sigma_Y$: the correlation $\\rho_{XY}$ strips the units away and always lies in $[-1, 1]$.',
    parent: {
      formula: '$\\operatorname{Cov}(X, Y) = E[(X - \\mu_X)(Y - \\mu_Y)]$',
      desc: 'One number computed from paired observations. Its sign is read in three ways; its size on its own is not the message.',
      splitBy: 'sign of $\\operatorname{Cov}(X, Y)$',
    },
    cases: [
      {
        id: 'positive', number: '01', condition: '$\\operatorname{Cov} > 0$', color: 'a',
        headline: 'Deviations move the same way',
        desc: 'higher-than-average $X$ tends to come with higher-than-average $Y$, and lower with lower',
        count: { n: '+', label: 'the mean product of deviations is positive' },
        formula: 'products $(X - \\mu_X)(Y - \\mu_Y)$ are mostly $> 0$',
        example: 'height and weight across people',
      },
      {
        id: 'negative', number: '02', condition: '$\\operatorname{Cov} < 0$', color: 'b',
        headline: 'Deviations move opposite ways',
        desc: 'higher-than-average $X$ tends to come with lower-than-average $Y$',
        count: { n: '−', label: 'the mean product of deviations is negative' },
        formula: 'products $(X - \\mu_X)(Y - \\mu_Y)$ are mostly $< 0$',
        example: 'driving speed and trip time',
      },
      {
        id: 'zero', number: '03', condition: '$\\operatorname{Cov} = 0$', color: 'c',
        headline: 'No consistent linear relationship',
        desc: 'the deviations show no steady direction; this does **not** mean the variables are independent',
        count: { n: '0', label: 'the mean product of deviations is zero' },
        formula: 'the products cancel out',
        example: '$Y = X^2$ with $X$ symmetric about $0$: $Y$ is fixed by $X$, yet the covariance is $0$',
      },
    ],
  };

  return {
    props: {
      sectionsContent,
      covarianceSignCases,
      introContent,
      summaryTable,
      faqQuestions,
      schemas,
      demoUnits,
      seoData: {
        title: "Covariance: Joint Behavior of Random Variables | Learn Math Class",
        description: "Learn how covariance measures joint behavior of random variables. Understand positive, negative, and zero covariance, independence relationships, and applications.",
        keywords: keyWords.join(", "),
        url: "/probability/covariance",
        name: "Covariance in Probability"
      }
    }
  }
}

const siteTheme = {
  title: '#06357A', accent: '#2563EB', warm: '#B45309',
  panelSoft: '#eff6ff', panelSofter: '#f8fafc',
}

export default function CovariancePage({seoData, sectionsContent, introContent, covarianceSignCases, summaryTable, faqQuestions, schemas, demoUnits}) {

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
          <div key={'unit-covSign'} dangerouslySetInnerHTML={{ __html: demoUnits.covSign }} />,
          `If the amber points dominated instead, the covariance would be negative.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          `The sign is the whole message: as the section says, covariance reports direction, not strength. Two of the pairs listed later on this page, height and weight and study time and exam score, tend to deviate the same way, so their covariance is positive. A pair that deviates in opposite ways, such as driving speed and the time a trip takes, has a negative covariance.`,
          <DiagramFrame
            key={'obj3-diagram'}
            id="covariance-sign-cases"
            title="What the sign of the covariance says"
            source="/probability/covariance"
          >
            <CaseSplit data={covarianceSignCases} variant="poster" proseStyle="cards" theme={siteTheme} />
          </DiagramFrame>,
          `The third card is the one to read twice. A covariance of zero rules out a consistent linear tendency and nothing more; the next section shows that two variables can depend on each other completely and still have covariance exactly zero.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-zeroCov'} dangerouslySetInnerHTML={{ __html: demoUnits.zeroCov }} />,
          `So independence implies zero covariance, but zero covariance does not imply independence.`,
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
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.obj7.title}
            lead={sectionsContent.obj7.lead}
            inherited={sectionsContent.obj7.inherited}
            entries={sectionsContent.obj7.entries}
            symbolsHref={sectionsContent.obj7.symbolsHref}
            symbolsLabel={sectionsContent.obj7.symbolsLabel}
            parentHref={sectionsContent.obj7.parentHref}
            parentLabel={sectionsContent.obj7.parentLabel}
            theme={'navy'}
          />,
          `
Three identities describe how covariance is computed and how it behaves:

@academic[formula_callout:Covariance Computational Formula
$$\\operatorname{Cov}(X, Y) = E[XY] - E[X]\\,E[Y]$$
/probability/formulas#covariance_computational_formula]@

@academic[formula_callout:Covariance Self-Identity
$$\\operatorname{Cov}(X, X) = \\operatorname{Var}(X)$$
/probability/formulas#covariance_self-identity]@

@academic[formula_callout:Covariance Bilinearity
$$\\operatorname{Cov}(aX + b,\\; cY + d) = ac\\,\\operatorname{Cov}(X, Y)$$
/probability/formulas#covariance_bilinearity]@

@academic[formulas_link:Browse all probability formulas
/probability/formulas]@

@academic[pitfall,aside:true,width:35%:Splitting the expectation of a product
Replacing $E[XY]$ by $E[X]\\,E[Y]$ without independence makes every covariance $0$. For a fair coin $X \\in \\{0, 1\\}$ and $Y = X$: $E[XY] = \\frac{1}{2}$ and $E[X]\\,E[Y] = \\frac{1}{4}$, so $\\operatorname{Cov}(X, Y) = \\frac{1}{4}$.
[Read more](!#pitfalls)]@

The computational formula is the version used with tables of paired data. The first term, $E[XY]$, is the average of the products of the paired values, taken observation by observation. The second, $E[X]\\,E[Y]$, is the product of two separate averages, each computed from one variable on its own.

The two terms are built from different information: one keeps track of which value of $X$ came with which value of $Y$, the other does not. The covariance is exactly the gap between them.
`,
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
        id:'capstone',
        title:sectionsContent.capstone.title,
        link:sectionsContent.capstone.link,
        content:[
          sectionsContent.capstone.content,
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
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Covariance FAQ`,
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
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Covariance</h1>
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