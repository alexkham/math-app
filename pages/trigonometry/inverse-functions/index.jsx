// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import NotationSection from '@/app/components/page-components/content-components/NotationSection'
// import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderCurveFeatureV2 from '@/app/utils/illustrations/trigonometry/curves/curveFeature.v2'


// export async function getStaticProps(){

//   const keyWords=[
//     'inverse trigonometric functions',
//     'arcsin arccos arctan',
//     'arcsine function',
//     'arccosine function',
//     'arctangent function',
//     'inverse trig domain range',
//     'restricted domain trig',
//     'sin inverse notation',
//     'evaluating inverse trig',
//     'composition trig inverse',
//     'graphs inverse trig functions',
//     'inverse reciprocal functions',
//     'recovering angles from ratios',
//     'principal value inverse trig'
//   ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj6 — comparison: sin⁻¹(x) vs (sin x)⁻¹ notation contrast
//   const obj6Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 90%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Expression</th>
//       <th style="${tableHeaders.comparison}">What it means</th>
//       <th style="${tableHeaders.comparison}">What it returns</th>
//       <th style="${tableHeaders.comparison}">Unambiguous form</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin⁻¹(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse sine — the angle whose sine is x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an angle in [−π/2, π/2]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin(x)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(sin x)⁻¹, 1/sin(x)</td>
//       <td style="padding: 12px 15px; color: #34495e;">reciprocal of sin(x)</td>
//       <td style="padding: 12px 15px; color: #34495e;">a number (the cosecant value)</td>
//       <td style="padding: 12px 15px; color: #34495e;">csc(x)</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj7 — aggregation/reference: arcsin and arccos standard values
//   // Cofunction sum identity arcsin x + arccos x = π/2 visible across every row.
//   const obj7Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation} text-align: center;">Input x</th>
//       <th style="${tableHeaders.aggregation} text-align: center;">arcsin(x)</th>
//       <th style="${tableHeaders.aggregation} text-align: center;">arccos(x)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−√3/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">5π/6</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−√2/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">3π/4</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−1/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/6</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">2π/3</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/2</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/6</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/3</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">√2/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/4</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">√3/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/6</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">1</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">π/2</td>
//       <td style="padding: 12px 15px; color: #34495e; text-align: center;">0</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj8 — aggregation/reference: all six mixed compositions
//   // Page prose derives only sin(arccos x) and cos(arctan x); table completes the set.
//   const obj8Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 85%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Composition</th>
//       <th style="${tableHeaders.aggregation}">Algebraic form</th>
//       <th style="${tableHeaders.aggregation}">Valid for</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin(arccos x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(1 − x²)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ [−1, 1]</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos(arcsin x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(1 − x²)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ [−1, 1]</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin(arctan x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x / √(1 + x²)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ ℝ</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos(arctan x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 / √(1 + x²)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ ℝ</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">tan(arcsin x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x / √(1 − x²)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ (−1, 1)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">tan(arccos x)</td>
//       <td style="padding: 12px 15px; color: #34495e;">√(1 − x²) / x</td>
//       <td style="padding: 12px 15px; color: #34495e;">x ∈ [−1, 1], x ≠ 0</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj10 — summary capstone: all six inverse trig functions side-by-side
//   // Function names link to their detailing sections.
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Function</th>
//       <th style="${tableHeaders.summary}">Domain</th>
//       <th style="${tableHeaders.summary}">Range</th>
//       <th style="${tableHeaders.summary}">Monotonicity</th>
//       <th style="${tableHeaders.summary}">Key identity / relationship</th>
//       <th style="${tableHeaders.summary}">Distinctive feature</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#2" style="${linkStyle}">arcsin</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1, 1]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−π/2, π/2]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin x + arccos x = π/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">odd function; passes through origin with slope 1</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#3" style="${linkStyle}">arccos</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1, 1]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, π]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decreasing</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin x + arccos x = π/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">neither even nor odd; passes through (0, π/2)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#4" style="${linkStyle}">arctan</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−π/2, π/2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arctan x + arccot x = π/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">odd; horizontal asymptotes y = ±π/2</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#5" style="${linkStyle}">arccsc</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, −1] ∪ [1, ∞)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−π/2, 0) ∪ (0, π/2]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decreasing on each piece</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arccsc x = arcsin(1/x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">undefined for |x| &lt; 1; gap in graph at x = 0</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#5" style="${linkStyle}">arcsec</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, −1] ∪ [1, ∞)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, π/2) ∪ (π/2, π]</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing on each piece</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsec x = arccos(1/x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">undefined for |x| &lt; 1; horizontal asymptote y = π/2</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="#5" style="${linkStyle}">arccot</a></td>
//       <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
//       <td style="padding: 12px 15px; color: #34495e;">(0, π)</td>
//       <td style="padding: 12px 15px; color: #34495e;">decreasing</td>
//       <td style="padding: 12px 15px; color: #34495e;">arctan x + arccot x = π/2</td>
//       <td style="padding: 12px 15px; color: #34495e;">horizontal asymptotes y = 0 and y = π</td>
//     </tr>
//   </tbody>
// </table>
// `

//   const faqQuestions = {
//     obj1: {
//       question: "Why do trigonometric functions need restricted domains to have inverses?",
//       answer: "Trigonometric functions are periodic and therefore not one-to-one on their full domains — each output value corresponds to infinitely many input angles. To define an inverse, the domain must be restricted to an interval where the function is strictly monotonic (always increasing or always decreasing) and covers its full range exactly once. This guarantees each output has exactly one corresponding input."
//     },
//     obj2: {
//       question: "What are the domains and ranges of the inverse trig functions?",
//       answer: "Arcsine has domain [-1, 1] and range [-π/2, π/2]. Arccosine has domain [-1, 1] and range [0, π]. Arctangent has domain (-∞, ∞) and range (-π/2, π/2). Each inverse function returns a unique angle — called the principal value — from its specific range."
//     },
//     obj3: {
//       question: "What is the difference between sin⁻¹(x) and 1/sin(x)?",
//       answer: "The notation sin⁻¹(x) means the inverse sine function (arcsine), which returns the angle whose sine is x. The expression 1/sin(x) is the reciprocal of sine, which equals csc(x). These are completely different operations. The superscript -1 denotes function inversion, not exponentiation. To avoid confusion, many sources use arcsin(x) instead of sin⁻¹(x)."
//     },
//     obj4: {
//       question: "How do you evaluate compositions like sin(arccos(x))?",
//       answer: "Draw a right triangle where the known inverse function determines one side relationship. For sin(arccos(x)), let θ = arccos(x), so cosθ = x = adjacent/hypotenuse with hypotenuse 1. The adjacent side is x, the opposite side is √(1-x²) by the Pythagorean theorem, so sin(arccos(x)) = √(1-x²). This geometric method works for any composition."
//     },
//     obj5: {
//       question: "How are inverse trigonometric functions used to find angles?",
//       answer: "Inverse trigonometric functions recover an angle when a ratio is known. Given sinθ = 3/5, the inverse gives θ = arcsin(3/5) ≈ 36.87°. The inverse returns one principal value; if additional solutions are needed, use the reference angle and quadrant analysis to find all angles that produce the same ratio."
//     }
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": "Inverse Trigonometric Functions",
//       "description": "Master inverse trigonometric functions: arcsine, arccosine, arctangent, their restricted domains, ranges, graphs, compositions, and angle recovery methods.",
//       "url": "https://www.learnmathclass.com/trigonometry/inverse-functions",
//       "inLanguage": "en-US",
//       "learningResourceType": "Explanation",
//       "educationalLevel": "High School, College",
//       "educationalUse": "Learning",
//       "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
//       "about": { "@type": "Thing", "name": "Inverse Trigonometric Functions" },
//       "teaches": [
//         "Why domain restriction is necessary for inverses",
//         "The arcsine function: domain, range, and behavior",
//         "The arccosine function: domain, range, and behavior",
//         "The arctangent function: domain, range, and behavior",
//         "Inverse reciprocal functions: arccsc, arcsec, arccot",
//         "Notation: sin⁻¹(x) versus 1/sin(x)",
//         "Evaluating inverse trigonometric functions at standard values",
//         "Compositions of trigonometric and inverse trigonometric functions",
//         "Graphs of the six inverse functions",
//         "Side-by-side comparison of all six inverse trigonometric functions on domain, range, monotonicity, and identifying identity"
//       ],
//       "keywords": keyWords.join(", "),
//       "author": { "@type": "Organization", "name": "Learn Math Class" },
//       "publisher": { "@type": "Organization", "name": "Learn Math Class" },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString()
//     },
//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
//         { "@type": "ListItem", "position": 2, "name": "Trigonometry", "item": "https://www.learnmathclass.com/trigonometry" },
//         { "@type": "ListItem", "position": 3, "name": "Inverse Trigonometric Functions", "item": "https://www.learnmathclass.com/trigonometry/inverse-functions" }
//       ]
//     },
//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": { "@type": "Answer", "text": faqQuestions[key].answer }
//       }))
//     }
//   }


// const sectionsContent={

//    obj0: {
//     title: `Key Terms`,
//     content: `
// - [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function) — returns the angle for a given trigonometric value
// - [Sine](!/trigonometry/definitions#sine) — $y$-coordinate on the unit circle, restricted to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ for inversion
// - [Cosine](!/trigonometry/definitions#cosine) — $x$-coordinate on the unit circle, restricted to $[0, \\pi]$ for inversion
// - [Tangent](!/trigonometry/definitions#tangent) — ratio of sine to cosine, restricted to $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ for inversion
// - [Trigonometric Ratio](!/trigonometry/definitions#trigonometric_ratio) — the right-triangle ratios that inverse functions reverse

// ## Formulas Used

// - [Arcsin Plus Arccos](!/trigonometry/formulas#arcsin_plus_arccos) — $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$
// - [Arctan Plus Arccot](!/trigonometry/formulas#arctan_plus_arccot) — $\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$
// - [Arcsin of Negative](!/trigonometry/formulas#arcsin_of_negative) — $\\arcsin(-x) = -\\arcsin x$
// - [Arccos of Negative](!/trigonometry/formulas#arccos_of_negative) — $\\arccos(-x) = \\pi - \\arccos x$
// - [Arctan of Negative](!/trigonometry/formulas#arctan_of_negative) — $\\arctan(-x) = -\\arctan x$

// `,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Trigonometry Definitions](!/trigonometry/definitions) →@`,
//     link: '',
//   },


//      obj1: {
//     title: `Why Restriction Is Necessary`,
//     content: `A function can have an inverse only if it is one-to-one: each output corresponds to exactly one input. The trigonometric functions, being periodic, are emphatically not one-to-one on their full domains. The equation $\\sin(x) = \\frac{1}{2}$ is satisfied by $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{\\pi}{6} + 2\\pi$, $\\frac{5\\pi}{6} + 2\\pi$, and infinitely many others. Defining "$\\sin^{-1}\\left(\\frac{1}{2}\\right)$" as all of these would not produce a function — a function must assign a single output to each input.

// The solution is to restrict each trigonometric function to an interval where it is strictly monotonic — always increasing or always decreasing — and therefore one-to-one. On such an interval, the horizontal line test is passed, and an inverse function exists. The restricted function must still cover the entire range of the original, so that the inverse is defined for every relevant input.

// The choice of restriction interval is a convention, universally agreed upon. Different intervals could work (sine is also one-to-one on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$, for instance), but the standard choices have been selected for mathematical convenience — they are centered at or near the origin and produce the most natural behavior for compositions and calculus applications.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Arcsine Function`,
//     content: `The sine function is restricted to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, where it is strictly increasing and maps onto its full range $[-1, 1]$. The inverse of this restricted sine is called arcsine:

// $$\\arcsin(x) = \\theta \\quad \\text{means} \\quad \\sin(\\theta) = x \\quad \\text{with} \\quad \\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$

// **Domain of  ** $\\arcsin$: $[-1, 1]$ — the range of sine. Inputs outside this interval have no corresponding angle.

// **Range of  ** $\\arcsin$: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ — outputs are always in Quadrant I (for positive inputs), Quadrant IV expressed as negative angles (for negative inputs), or zero.

// Exact values at standard inputs:

// - $\\arcsin(0) = 0$
// - $\\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$
// - $\\arcsin\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$
// - $\\arcsin\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}$
// - $\\arcsin(1) = \\frac{\\pi}{2}$
// - $\\arcsin\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$
// - $\\arcsin(-1) = -\\frac{\\pi}{2}$

// The pattern of negative-input values reflects the odd symmetry of arcsine:

// @academic[formula_callout:Arcsin of Negative
// $$\\arcsin(-x) = -\\arcsin x$$
// /trigonometry/formulas#arcsin_of_negative]@

// @academic[formulas_link:Browse all trigonometry formulas
// /trigonometry/formulas]@

// The output is always an angle — a number in radians (or [degrees](!/trigonometry/degrees-radians), depending on context). The function answers the question: "What angle between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$ has this sine value?"

// The graph of $y = \\arcsin(x)$ is obtained by reflecting the restricted sine graph over the line $y = x$. It is an increasing S-shaped curve, starting at $(-1, -\\frac{\\pi}{2})$, passing through the origin, and ending at $(1, \\frac{\\pi}{2})$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Arccosine Function`,
//     content: `The cosine function is restricted to $[0, \\pi]$, where it is strictly decreasing and maps onto $[-1, 1]$. The inverse is arccosine:

// $$\\arccos(x) = \\theta \\quad \\text{means} \\quad \\cos(\\theta) = x \\quad \\text{with} \\quad \\theta \\in [0, \\pi]$$

// **Domain of ** $\\arccos$: $[-1, 1]$.

// **Range of ** $\\arccos$: $[0, \\pi]$ — outputs are always in Quadrant I (for positive inputs) or Quadrant II (for negative inputs).

// Exact values:

// - $\\arccos(1) = 0$
// - $\\arccos\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}$
// - $\\arccos\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$
// - $\\arccos\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$
// - $\\arccos(0) = \\frac{\\pi}{2}$
// - $\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$
// - $\\arccos(-1) = \\pi$

// A fundamental relationship connects arcsine and arccosine:

// @academic[formula_callout:Arcsin Plus Arccos
// $$\\arcsin x + \\arccos x = \\frac{\\pi}{2}$$
// /trigonometry/formulas#arcsin_plus_arccos]@

// @academic[formulas_link:Browse all trigonometry formulas
// /trigonometry/formulas]@

// This is the inverse-function version of the cofunction [identity](!/trigonometry/identities) $\\sin\\theta = \\cos\\left(\\frac{\\pi}{2} - \\theta\\right)$. It means knowing one of $\\arcsin(x)$ or $\\arccos(x)$ immediately gives the other.

// A related identity captures how arccosine handles negative inputs — unlike arcsine, arccosine is not odd; instead, negating the input supplements the output:

// @academic[formula_callout:Arccos of Negative
// $$\\arccos(-x) = \\pi - \\arccos x$$
// /trigonometry/formulas#arccos_of_negative]@

// @academic[formulas_link:Browse all trigonometry formulas
// /trigonometry/formulas]@

// The graph of $y = \\arccos(x)$ is a decreasing curve from $(−1, \\pi)$ to $(1, 0)$, passing through $(0, \\frac{\\pi}{2})$. It is the reflection of the restricted cosine graph over $y = x$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Arctangent Function`,
//     content: `The tangent function is restricted to $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, where it is strictly increasing and maps onto $(-\\infty, \\infty)$. The inverse is arctangent:

// $$\\arctan(x) = \\theta \\quad \\text{means} \\quad \\tan(\\theta) = x \\quad \\text{with} \\quad \\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$$

// **Domain of** $\\arctan$: $(-\\infty, \\infty)$ — all real numbers, since tangent's range is unbounded.

// **Range of ** $\\arctan$: $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ — an open interval, since tangent approaches but never reaches $\\pm\\frac{\\pi}{2}$ on its restricted domain.

// Exact values:

// - $\\arctan(0) = 0$
// - $\\arctan\\left(\\frac{\\sqrt{3}}{3}\\right) = \\frac{\\pi}{6}$
// - $\\arctan(1) = \\frac{\\pi}{4}$
// - $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$
// - $\\arctan(-1) = -\\frac{\\pi}{4}$
// - $\\arctan(-\\sqrt{3}) = -\\frac{\\pi}{3}$

// Like arcsine, arctangent is an odd function — negating the input negates the output:

// @academic[formula_callout:Arctan of Negative
// $$\\arctan(-x) = -\\arctan x$$
// /trigonometry/formulas#arctan_of_negative]@

// @academic[formulas_link:Browse all trigonometry formulas
// /trigonometry/formulas]@

// As $x \\to \\infty$, $\\arctan(x) \\to \\frac{\\pi}{2}$. As $x \\to -\\infty$, $\\arctan(x) \\to -\\frac{\\pi}{2}$. These are horizontal asymptotes of the arctangent graph — a feature unique among the three primary inverse functions.

// The graph of $y = \\arctan(x)$ is an increasing S-shaped curve spanning the entire horizontal axis, bounded vertically between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$. It passes through the origin with slope 1 (since $\\frac{d}{dx}\\arctan(x)\\big|_{x=0} = 1$) and flattens toward the asymptotes.

// Arctangent is particularly well-behaved: it is defined for all real numbers, it is continuous and differentiable everywhere, and its output is always finite. These properties make it a natural tool in calculus and applied mathematics.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Inverse Reciprocal Functions`,
//     content: `The reciprocal trigonometric functions — cosecant, secant, and cotangent — also have inverses, though they are used less frequently and their conventions vary more across textbooks.

// **Arccosecant** ($\\text{arccsc}$): the inverse of cosecant restricted to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] \\setminus \\{0\\}$.

// - Domain: $(-\\infty, -1] \\cup [1, \\infty)$
// - Range: $\\left[-\\frac{\\pi}{2}, 0\\right) \\cup \\left(0, \\frac{\\pi}{2}\\right]$
// - Relationship: $\\text{arccsc}(x) = \\arcsin\\left(\\frac{1}{x}\\right)$

// **Arcsecant** ($\\text{arcsec}$): the inverse of secant restricted to $[0, \\pi] \\setminus \\left\\{\\frac{\\pi}{2}\\right\\}$.

// - Domain: $(-\\infty, -1] \\cup [1, \\infty)$
// - Range: $\\left[0, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{\\pi}{2}, \\pi\\right]$
// - Relationship: $\\text{arcsec}(x) = \\arccos\\left(\\frac{1}{x}\\right)$

// **Arccotangent** ($\\text{arccot}$): the inverse of cotangent restricted to $(0, \\pi)$.

// - Domain: $(-\\infty, \\infty)$
// - Range: $(0, \\pi)$
// - Relationship: $\\text{arccot}(x) = \\arctan\\left(\\frac{1}{x}\\right)$ for $x > 0$; requires adjustment for $x < 0$

// Arctangent and arccotangent share the same cofunction relationship that arcsine and arccosine do:

// @academic[formula_callout:Arctan Plus Arccot
// $$\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$$
// /trigonometry/formulas#arctan_plus_arccot]@

// @academic[formulas_link:Browse all trigonometry formulas
// /trigonometry/formulas]@

// In practice, these are rarely evaluated directly. When an expression involves $\\text{arcsec}(x)$, it is usually converted to $\\arccos\\left(\\frac{1}{x}\\right)$ for computation. The same applies to arccosecant via arcsine and arccotangent via arctangent. Their primary role is theoretical — they appear in integral formulas in calculus (for example, $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx = \\text{arcsec}|x| + C$) and in certain [identity](!/trigonometry/identities) derivations.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   notation: {
//     title: `Inverse Function Notation`,
//     lead: `The most collided superscript in the subject, the arc-names that dodge it, and the spellings machines use. The table below the entries settles every form side by side.`,
//     inherited: `$\\sin$ through $\\cot$ come from the [right triangle page](!/trigonometry/right-triangle#notation); the honest power $\\sin^2\\theta$ that makes $\\sin^{-1}$ treacherous is owned by [function notation](!/trigonometry/functions#notation); the interval marks of the ranges by [expressing domains](!/functions/domain#2).`,
//     entries: [
//       {
//         id: 'sin-inverse',
//         tex: `$\\sin^{-1}(x)$`,
//         read: `inverse sine of x; sine inverse`,
//         means: `An inconsistency by convention: every other exponent on a function name is a power — $\\sin^2 x = (\\sin x)^2$ — but $-1$ alone means the inverse function. $\\sin^{-1}(x) = \\arcsin(x)$, an angle out, never $\\frac{1}{\\sin x}$; the override applies to all six functions.`,
//         cases: `The corner mark's fourth career: reciprocals on [numbers](!/algebra/powers/negative-exponents#notation), inversion on [complex numbers](!/complex-numbers/multiplicative-inverse#notation) and [matrices](!/linear-algebra/matrix/inverse#notation) — on functions it flips the map, and only the base tells you which reading applies.`,
//         confusedWith: `$\\csc x$. By the power pattern, $\\sin^{-1}$ "should" be the reciprocal — writing the reciprocal safely takes brackets, $(\\sin x)^{-1}$, or the honest $\\frac{1}{\\sin x}$; exactly the split the table below works through.`,
//       },
//       {
//         id: 'arc-names',
//         tex: `$\\arcsin$ · $\\arccos$ · $\\arctan$`,
//         read: `arcsine, arccosine, arctangent`,
//         means: `The collision-free spelling: "the arc whose sine is $x$" — on the unit circle the answer-angle is literally an arc length, so the prefix means what it says. Publications wanting zero ambiguity use the arc-names exclusively; both conventions are catalogued among the [trigonometry symbols](!/math-symbols/trigonometry).`,
//         cases: `The reciprocal trio extends the pattern — $\\operatorname{arcsec}$, $\\operatorname{arccsc}$, $\\operatorname{arccot}$ — with conventions that vary by textbook, as **Inverse Reciprocal Functions** above warns.`,
//         alsoWritten: `$\\operatorname{Arcsin}$ — capital-A for the principal branch in older texts, the same capitalization trick complex analysis still uses for its principal argument.`,
//         confusedWith: `An arc times a sine. The prefix is part of one operator name — reading "arc · sin" as a product repeats the cancellation error that function abbreviations always invite.`,
//       },
//       {
//         id: 'machine-spellings',
//         tex: `$\\operatorname{asin}$ · $\\operatorname{atan2}$`,
//         read: `a-sine; a-tan-two`,
//         means: `The machine spellings: programming languages shorten the arc-names to @[asin]@, @[acos]@, @[atan]@, while calculator buttons keep $\\sin^{-1}$ — two devices, two conventions, one function.`,
//         cases: `$\\operatorname{atan2}(y, x)$ is the special one: two arguments, full-quadrant answer — the programming spelling of the [principal argument](!/complex-numbers/trigonometric-form#notation), with $y$ before $x$ in the argument list.`,
//         confusedWith: `$\\arctan(y/x)$. The single-argument version cannot tell opposite quadrants apart — $\\operatorname{atan2}(1, -1)$ and $\\arctan(-1)$ differ by $\\pi$; the two-argument form exists precisely to fix that.`,
//       },
//     ],
//     symbolsHref: `/math-symbols/trigonometry`,
//     symbolsLabel: `All trigonometry symbols`,
//     parentHref: `/trigonometry`,
//     parentLabel: `Trigonometry`,
//   },
//   obj7: {
//     title: `Evaluating Inverse Trigonometric Functions`,
//     content: `Evaluating an inverse trigonometric function means answering: "What angle in the restricted range has this function value?"

// **For standard inputs** — the values $0, \\pm\\frac{1}{2}, \\pm\\frac{\\sqrt{2}}{2}, \\pm\\frac{\\sqrt{3}}{2}, \\pm 1$ — the answer comes from the [unit circle](!/trigonometry/unit-circle) values, filtered through the range restriction.

// $\\arcsin\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}$ because $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$ and $\\frac{\\pi}{3} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.

// $\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$ because $\\cos\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$ and $\\frac{3\\pi}{4} \\in [0, \\pi]$.

// $\\arctan(-1) = -\\frac{\\pi}{4}$ because $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$ and $-\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.

// **A common trap:** $\\arcsin\\left(\\frac{1}{2}\\right) \\neq \\frac{5\\pi}{6}$, even though $\\sin\\left(\\frac{5\\pi}{6}\\right) = \\frac{1}{2}$. The angle $\\frac{5\\pi}{6}$ is outside the range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so it is not the arcsine output. The correct answer is $\\frac{\\pi}{6}$.

// **For non-standard inputs** — values like $\\arcsin(0.7)$ or $\\arctan(3.5)$ — a calculator is required. Ensure the calculator is in the correct angle mode ([degrees or radians](!/trigonometry/degrees-radians)) for the desired output format. Most calculators return radians by default for inverse trigonometric functions.

// The standard arcsine and arccosine values across the shared input domain $[-1, 1]$ collect into a single reference table, where the cofunction sum identity $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$ is visible row-by-row.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Compositions of Trigonometric and Inverse Trigonometric Functions`,
//     content: `Compositions like $\\sin(\\arccos(x))$ or $\\arcsin(\\sin(x))$ combine a trigonometric function with an inverse. The behavior of these compositions depends on the direction and on whether the input falls within the restricted range.

// **Direct compositions** (function applied to its own inverse):

// $$\\sin(\\arcsin(x)) = x \\quad \\text{for all } x \\in [-1, 1]$$
// $$\\cos(\\arccos(x)) = x \\quad \\text{for all } x \\in [-1, 1]$$
// $$\\tan(\\arctan(x)) = x \\quad \\text{for all } x \\in (-\\infty, \\infty)$$

// These hold universally within the domain — applying a function to its inverse always recovers the input.

// **Reverse compositions** (inverse applied to its own function):

// $$\\arcsin(\\sin(x)) = x \\quad \\text{only if } x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$

// If $x$ is outside this range, the arcsine "folds" the result back into the restricted range. For example, $\\arcsin\\left(\\sin\\left(\\frac{5\\pi}{6}\\right)\\right) = \\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$, not $\\frac{5\\pi}{6}$. The same caution applies to $\\arccos(\\cos(x))$ (valid only on $[0, \\pi]$) and $\\arctan(\\tan(x))$ (valid only on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$).

// **Mixed compositions** (different functions composed):

// $\\sin(\\arccos(x))$, $\\cos(\\arctan(x))$, $\\tan(\\arcsin(x))$, etc. These are simplified using a right triangle construction:

// To evaluate $\\sin(\\arccos(x))$: let $\\theta = \\arccos(x)$, so $\\cos\\theta = x = \\frac{x}{1}$. Construct a right triangle with adjacent side $x$ and hypotenuse $1$. The opposite side is $\\sqrt{1 - x^2}$ (by the Pythagorean theorem). Therefore:

// $$\\sin(\\arccos(x)) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\sqrt{1 - x^2}$$

// This is valid for $x \\in [-1, 1]$, and the result is always non-negative because $\\arccos(x) \\in [0, \\pi]$, where sine is non-negative.

// To evaluate $\\cos(\\arctan(x))$: let $\\theta = \\arctan(x)$, so $\\tan\\theta = x = \\frac{x}{1}$. Opposite $= x$, adjacent $= 1$, hypotenuse $= \\sqrt{1 + x^2}$. Therefore:

// $$\\cos(\\arctan(x)) = \\frac{1}{\\sqrt{1 + x^2}}$$

// The triangle method works for every mixed composition. It converts the problem from inverse trigonometric territory back to [right triangle](!/trigonometry/right-triangle) ratios, using the Pythagorean [identity](!/trigonometry/identities) implicitly to find the missing side.

// All six mixed compositions — built from the right-triangle method demonstrated above — collect into the reference table below, with the algebraic form and validity domain for each.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Graphs of Inverse Trigonometric Functions`,
//     content: `The graph of each inverse trigonometric function is the reflection of the corresponding restricted trigonometric graph over the line $y = x$. This reflection swaps the roles of input and output — the domain of the original becomes the range of the inverse, and vice versa.

// $y = \\arcsin(x)$ : An increasing S-shaped curve.

// - Domain: $[-1, 1]$ (horizontal extent)
// - Range: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ (vertical extent)
// - Passes through: $(-1, -\\frac{\\pi}{2})$, $(0, 0)$, $(1, \\frac{\\pi}{2})$
// - Increasing throughout — reflects the increasing behavior of sine on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$

// $y = \\arccos(x)$ : A decreasing curve.

// - Domain: $[-1, 1]$
// - Range: $[0, \\pi]$
// - Passes through: $(-1, \\pi)$, $(0, \\frac{\\pi}{2})$, $(1, 0)$
// - Decreasing throughout — reflects the decreasing behavior of cosine on $[0, \\pi]$

// $y = \\arctan(x)$ : An increasing S-shaped curve with horizontal asymptotes.

// - Domain: $(-\\infty, \\infty)$
// - Range: $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$
// - Passes through: $(0, 0)$
// - Horizontal asymptote at $y = \\frac{\\pi}{2}$ as $x \\to \\infty$
// - Horizontal asymptote at $y = -\\frac{\\pi}{2}$ as $x \\to -\\infty$
// - Increasing throughout — the only primary inverse trig function defined on all of $\\mathbb{R}$

// All three primary inverse functions are continuous on their domains. Arcsine and arccosine have bounded domains (closed intervals), so their graphs are finite curves with endpoints. Arctangent, with its infinite domain, extends without bound horizontally but is squeezed vertically between the asymptotes — a distinctive shape that appears in probability (the Cauchy distribution), physics (the arctangent potential), and many other contexts.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//     // NEW capstone section
//     obj10:{
//       title:`Summary of the Six Inverse Trigonometric Functions`,
//       content:`All six inverse trigonometric functions can be set side-by-side on their definitional attributes — domain, range, monotonicity, the identity that pairs each with another, and the distinctive feature of each function&apos;s graph. The table below makes the structural symmetries of the family immediately visible: the cofunction sum identity holds between arcsin and arccos, and again between arctan and arccot; the three reciprocal inverses share a domain split and connect back to the primary inverses through the 1/x relationship.`,
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
//   id: "intro",
//   title: `Recovering Angles from Known Ratios`,
//   content: `The six trigonometric functions take an angle and return a number. The inverse trigonometric functions reverse this: they take a number and return an angle. Given that $\\sin(\\theta) = \\frac{1}{2}$, what is $\\theta$? The answer is not unique — infinitely many angles satisfy this equation, as the [equations](!/trigonometry/equations) page makes clear. But an inverse function must return exactly one value. This forces a restriction: each trigonometric function must be confined to an interval where it is strictly monotonic (always increasing or always decreasing) before an inverse can be defined.

// The resulting functions — $\\arcsin$, $\\arccos$, $\\arctan$, and their reciprocal counterparts — are not merely notational conveniences. They appear as solutions to [equations](!/trigonometry/equations), as building blocks in compositions that simplify using the Pythagorean [identity](!/trigonometry/identities), and as essential tools in calculus (where they arise as antiderivatives of certain algebraic expressions). Their [graphs](!/trigonometry/graphs) are reflections of the restricted trigonometric graphs over the line $y = x$, and their domains and ranges are dictated entirely by the [properties](!/trigonometry/properties) — specifically the monotonicity — of the original functions.

// `,
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          obj6Table,
//          obj7Table,
//          obj8Table,
//          summaryTable,
//          faqQuestions,
//          schemas,
//           seoData: {
//         title: "Inverse Trigonometric Functions | Learn Math Class",
//         description: "Learn inverse trigonometric functions: arcsine, arccosine, arctangent, their restricted domains, ranges, graphs, and how to evaluate compositions.",
//         keywords: keyWords.join(", "),
//         url: "/trigonometry/inverse-functions",
//          name: "Inverse Trigonometric Functions"
//       },

//        }
//     }
//    }

// export default function InverseFunctionsPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj6Table,
//   obj7Table,
//   obj8Table,
//   summaryTable,
//   faqQuestions,
//   schemas,
// }) {

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
//         title:sectionsContent.notation.title,
//         link:``,
//         content:[
//           <NotationSection
//             key={'notation'}
//             title={sectionsContent.notation.title}
//             lead={sectionsContent.notation.lead}
//             inherited={sectionsContent.notation.inherited}
//             entries={sectionsContent.notation.entries}
//             symbolsHref={sectionsContent.notation.symbolsHref}
//             symbolsLabel={sectionsContent.notation.symbolsLabel}
//             parentHref={sectionsContent.notation.parentHref}
//             parentLabel={sectionsContent.notation.parentLabel}
//             theme={'navy'}
//           />,
//           <div key={'obj6-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj6Table }} />,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//           <div key={'obj7-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj7Table }} />,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//           <div key={'obj8-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj8Table }} />,
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
//     // NEW capstone section: obj10
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//           <div key={'summary-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Inverse Trigonometric Functions</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"

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



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import { renderState as renderInverseState } from '@/app/components/trigonometry/inverseFunctionDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import FunctionAnalysis from '@/app/components/infographics/FunctionAnalysis/FunctionAnalysis'
import BeforeAfter from '@/app/components/infographics/BeforeAfter/BeforeAfter'


export async function getStaticProps(){

  const keyWords=[
    'inverse trigonometric functions',
    'arcsin arccos arctan',
    'arcsine function',
    'arccosine function',
    'arctangent function',
    'inverse trig domain range',
    'restricted domain trig',
    'sin inverse notation',
    'evaluating inverse trig',
    'composition trig inverse',
    'graphs inverse trig functions',
    'inverse reciprocal functions',
    'recovering angles from ratios',
    'principal value inverse trig'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj6 — comparison: sin⁻¹(x) vs (sin x)⁻¹ notation contrast
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 90%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Expression</th>
      <th style="${tableHeaders.comparison}">What it means</th>
      <th style="${tableHeaders.comparison}">What it returns</th>
      <th style="${tableHeaders.comparison}">Unambiguous form</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin⁻¹(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inverse sine — the angle whose sine is x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an angle in [−π/2, π/2]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin(x)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">(sin x)⁻¹, 1/sin(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">reciprocal of sin(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">a number (the cosecant value)</td>
      <td style="padding: 12px 15px; color: #34495e;">csc(x)</td>
    </tr>
  </tbody>
</table>
`

  // obj7 — aggregation/reference: arcsin and arccos standard values
  // Cofunction sum identity arcsin x + arccos x = π/2 visible across every row.
  const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Input x</th>
      <th style="${tableHeaders.aggregation} text-align: center;">arcsin(x)</th>
      <th style="${tableHeaders.aggregation} text-align: center;">arccos(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−√3/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">5π/6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−√2/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">3π/4</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">−1/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">−π/6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">2π/3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/6</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/3</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">√2/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/4</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">√3/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;">π/6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">π/2</td>
      <td style="padding: 12px 15px; color: #34495e; text-align: center;">0</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — aggregation/reference: all six mixed compositions
  // Page prose derives only sin(arccos x) and cos(arctan x); table completes the set.
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 85%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Composition</th>
      <th style="${tableHeaders.aggregation}">Algebraic form</th>
      <th style="${tableHeaders.aggregation}">Valid for</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin(arccos x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(1 − x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ [−1, 1]</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos(arcsin x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(1 − x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ [−1, 1]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin(arctan x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x / √(1 + x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ ℝ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos(arctan x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 / √(1 + x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ ℝ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">tan(arcsin x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x / √(1 − x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x ∈ (−1, 1)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">tan(arccos x)</td>
      <td style="padding: 12px 15px; color: #34495e;">√(1 − x²) / x</td>
      <td style="padding: 12px 15px; color: #34495e;">x ∈ [−1, 1], x ≠ 0</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — summary capstone: all six inverse trig functions side-by-side
  // Function names link to their detailing sections.
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Function</th>
      <th style="${tableHeaders.summary}">Domain</th>
      <th style="${tableHeaders.summary}">Range</th>
      <th style="${tableHeaders.summary}">Monotonicity</th>
      <th style="${tableHeaders.summary}">Key identity / relationship</th>
      <th style="${tableHeaders.summary}">Distinctive feature</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#2" style="${linkStyle}">arcsin</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1, 1]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−π/2, π/2]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin x + arccos x = π/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">odd function; passes through origin with slope 1</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#3" style="${linkStyle}">arccos</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−1, 1]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, π]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decreasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin x + arccos x = π/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">neither even nor odd; passes through (0, π/2)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#4" style="${linkStyle}">arctan</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−π/2, π/2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arctan x + arccot x = π/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">odd; horizontal asymptotes y = ±π/2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#5" style="${linkStyle}">arccsc</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, −1] ∪ [1, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−π/2, 0) ∪ (0, π/2]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decreasing on each piece</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arccsc x = arcsin(1/x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">undefined for |x| &lt; 1; gap in graph at x = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#5" style="${linkStyle}">arcsec</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, −1] ∪ [1, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, π/2) ∪ (π/2, π]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">increasing on each piece</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsec x = arccos(1/x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">undefined for |x| &lt; 1; horizontal asymptote y = π/2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="#5" style="${linkStyle}">arccot</a></td>
      <td style="padding: 12px 15px; color: #34495e;">(−∞, ∞)</td>
      <td style="padding: 12px 15px; color: #34495e;">(0, π)</td>
      <td style="padding: 12px 15px; color: #34495e;">decreasing</td>
      <td style="padding: 12px 15px; color: #34495e;">arctan x + arccot x = π/2</td>
      <td style="padding: 12px 15px; color: #34495e;">horizontal asymptotes y = 0 and y = π</td>
    </tr>
  </tbody>
</table>
`

const faqQuestions = {
  obj1: {
    question: "Why do trigonometric functions need restricted domains to have inverses?",
    answer: "Because a function can only be inverted if each output comes from exactly one input, and the trigonometric functions repeat forever. Sine takes the value 0.5 at infinitely many angles, so an unrestricted inverse would have no way to choose among them. Cutting the domain to one stretch where the function never repeats fixes this.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between sin⁻¹(x) and 1/sin(x)?",
    answer: "The first is the inverse function, returning the angle whose sine is x. The second is the reciprocal, whose proper name is cosecant. The notation collides because positive exponents do mean powers, so −1 looks like it should too. Writing the reciprocal unambiguously takes brackets, as (sin x)⁻¹, or simply 1 over sin x.",
    sectionId: "6"
  },
  obj3: {
    question: "Why does arcsine only return angles between −π/2 and π/2?",
    answer: "That is the interval chosen as sine's restricted domain, so it becomes arcsine's range. It works because sine rises steadily across it, hitting every value from −1 to 1 exactly once. Arccosine uses 0 to π for the same reason. Angles outside these ranges have the right sine but are not what the inverse returns.",
    sectionId: "2"
  },
  obj4: {
    question: "How do you evaluate something like sin(arccos(x))?",
    answer: "Treat the inner part as an angle in a right triangle. If the cosine of that angle is x, label the adjacent side x and the hypotenuse 1, then use the Pythagorean theorem for the third side. Reading the sine off that triangle gives the square root of 1 minus x squared, with no inverse function left.",
    sectionId: "8"
  },
  obj5: {
    question: "Why does arctan sometimes give the wrong quadrant?",
    answer: "Because it takes a single ratio and cannot distinguish opposite directions: a point in the third quadrant produces the same ratio as one in the first. The result always lands between −π/2 and π/2. The two-argument form atan2, which receives both coordinates separately, exists to resolve exactly this ambiguity.",
    sectionId: "7"
  }
}

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Inverse Trigonometric Functions",
      "description": "Master inverse trigonometric functions: arcsine, arccosine, arctangent, their restricted domains, ranges, graphs, compositions, and angle recovery methods.",
      "url": "https://www.learnmathclass.com/trigonometry/inverse-functions",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
      "about": { "@type": "Thing", "name": "Inverse Trigonometric Functions" },
      "teaches": [
        "Why domain restriction is necessary for inverses",
        "The arcsine function: domain, range, and behavior",
        "The arccosine function: domain, range, and behavior",
        "The arctangent function: domain, range, and behavior",
        "Inverse reciprocal functions: arccsc, arcsec, arccot",
        "Notation: sin⁻¹(x) versus 1/sin(x)",
        "Evaluating inverse trigonometric functions at standard values",
        "Compositions of trigonometric and inverse trigonometric functions",
        "Graphs of the six inverse functions",
        "Side-by-side comparison of all six inverse trigonometric functions on domain, range, monotonicity, and identifying identity"
      ],
      "keywords": keyWords.join(", "),
      "author": { "@type": "Organization", "name": "Learn Math Class" },
      "publisher": { "@type": "Organization", "name": "Learn Math Class" },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.learnmathclass.com" },
        { "@type": "ListItem", "position": 2, "name": "Trigonometry", "item": "https://www.learnmathclass.com/trigonometry" },
        { "@type": "ListItem", "position": 3, "name": "Inverse Trigonometric Functions", "item": "https://www.learnmathclass.com/trigonometry/inverse-functions" }
      ]
    },
  }


// Concept introduction (section 1) — template C, failure first. Running
// instance: sin x = 1/2. Old obj1 text is kept in sectionsContent.obj1, unused;
// its theorem box, three passages and the whyRestrict figure with its line are
// carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciUndoTable = ciTableOpen(['function', 'undone by', 'check']) +
  ciRow(['double: 3 → 6', 'halve: 6 → 3', 'back to 3']) +
  ciRow(['add 5: 3 → 8', 'subtract 5: 8 → 3', 'back to 3'], { shade: true }) +
  ciRow(['sine: π/6 → 1/2', '1/2 → ?', '?'], { last: true, color: '#a4243b', cols: [1, 2] }) +
  '</tbody></table>'
const ciManyTable = ciTableOpen(['angle x', 'sin x']) +
  ciRow(['π/6', '1/2']) +
  ciRow(['5π/6', '1/2'], { shade: true }) +
  ciRow(['π/6 + 2π = 13π/6', '1/2']) +
  ciRow(['5π/6 + 2π = 17π/6', '1/2'], { shade: true }) +
  ciRow(['… and infinitely many more', '1/2'], { last: true, color: '#a4243b' }) +
  '</tbody></table>'

const sectionsContent={

   obj0: {
    title: `Key Terms`,
    content: `
- [Inverse Trigonometric Function](!/trigonometry/definitions#inverse_trigonometric_function) — returns the angle for a given trigonometric value
- [Sine](!/trigonometry/definitions#sine) — $y$-coordinate on the unit circle, restricted to $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ for inversion
- [Cosine](!/trigonometry/definitions#cosine) — $x$-coordinate on the unit circle, restricted to $[0, \\pi]$ for inversion
- [Tangent](!/trigonometry/definitions#tangent) — ratio of sine to cosine, restricted to $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ for inversion
- [Trigonometric Ratio](!/trigonometry/definitions#trigonometric_ratio) — the right-triangle ratios that inverse functions reverse

## Formulas Used

- [Arcsin Plus Arccos](!/trigonometry/formulas#arcsin_plus_arccos) — $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$
- [Arctan Plus Arccot](!/trigonometry/formulas#arctan_plus_arccot) — $\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$
- [Arcsin of Negative](!/trigonometry/formulas#arcsin_of_negative) — $\\arcsin(-x) = -\\arcsin x$
- [Arccos of Negative](!/trigonometry/formulas#arccos_of_negative) — $\\arccos(-x) = \\pi - \\arccos x$
- [Arctan of Negative](!/trigonometry/formulas#arctan_of_negative) — $\\arctan(-x) = -\\arctan x$

`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Trigonometry Definitions](!/trigonometry/definitions) →@`,
    link: '',
  },


     obj1: {
    title: `Why Restriction Is Necessary`,
    content: `@academic[rule_theorem_plain:A function can have an inverse only if it is one-to-one: each output corresponds to exactly one input.]@

The trigonometric functions, being periodic, are emphatically not one-to-one on their full domains. The equation $\\sin(x) = \\frac{1}{2}$ is satisfied by $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{\\pi}{6} + 2\\pi$, $\\frac{5\\pi}{6} + 2\\pi$, and infinitely many others. Defining "$\\sin^{-1}\\left(\\frac{1}{2}\\right)$" as all of these would not produce a function — a function must assign a single output to each input.

The solution is to restrict each trigonometric function to an interval where it is strictly monotonic — always increasing or always decreasing — and therefore one-to-one. On such an interval, the horizontal line test is passed, and an inverse function exists. The restricted function must still cover the entire range of the original, so that the inverse is defined for every relevant input.

The choice of restriction interval is a convention, universally agreed upon. Different intervals could work (sine is also one-to-one on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$, for instance), but the standard choices have been selected for mathematical convenience — they are centered at or near the origin and produce the most natural behavior for compositions and calculus applications.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Arcsine Function`,
    content: `The sine function is restricted to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, where it is strictly increasing and maps onto its full range $[-1, 1]$. The inverse of this restricted sine is called arcsine:

@academic[formula_callout:The Arcsine Function
$$\\arcsin(x) = \\theta \\quad \\text{means} \\quad \\sin(\\theta) = x \\quad \\text{with} \\quad \\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$]@

**Domain of  ** $\\arcsin$: $[-1, 1]$ — the range of sine. Inputs outside this interval have no corresponding angle.

**Range of  ** $\\arcsin$: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ — outputs are always in Quadrant I (for positive inputs), Quadrant IV expressed as negative angles (for negative inputs), or zero.

Exact values at standard inputs:

- $\\arcsin(0) = 0$
- $\\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$
- $\\arcsin\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$
- $\\arcsin\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}$
- $\\arcsin(1) = \\frac{\\pi}{2}$
- $\\arcsin\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$
- $\\arcsin(-1) = -\\frac{\\pi}{2}$

The pattern of negative-input values reflects the odd symmetry of arcsine:

@academic[formula_callout:Arcsin of Negative
$$\\arcsin(-x) = -\\arcsin x$$
/trigonometry/formulas#arcsin_of_negative]@

@academic[formulas_link:Browse all trigonometry formulas
/trigonometry/formulas]@

The output is always an angle — a number in radians (or [degrees](!/trigonometry/degrees-radians), depending on context). The function answers the question: "What angle between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$ has this sine value?"

The graph of $y = \\arcsin(x)$ is obtained by reflecting the restricted sine graph over the line $y = x$. It is an increasing S-shaped curve, starting at $(-1, -\\frac{\\pi}{2})$, passing through the origin, and ending at $(1, \\frac{\\pi}{2})$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Arccosine Function`,
    content: `The cosine function is restricted to $[0, \\pi]$, where it is strictly decreasing and maps onto $[-1, 1]$. The inverse is arccosine:

@academic[formula_callout:The Arccosine Function
$$\\arccos(x) = \\theta \\quad \\text{means} \\quad \\cos(\\theta) = x \\quad \\text{with} \\quad \\theta \\in [0, \\pi]$$]@

**Domain of ** $\\arccos$: $[-1, 1]$.

**Range of ** $\\arccos$: $[0, \\pi]$ — outputs are always in Quadrant I (for positive inputs) or Quadrant II (for negative inputs).

Exact values:

- $\\arccos(1) = 0$
- $\\arccos\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}$
- $\\arccos\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$
- $\\arccos\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$
- $\\arccos(0) = \\frac{\\pi}{2}$
- $\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$
- $\\arccos(-1) = \\pi$

A fundamental relationship connects arcsine and arccosine:

@academic[formula_callout:Arcsin Plus Arccos
$$\\arcsin x + \\arccos x = \\frac{\\pi}{2}$$
/trigonometry/formulas#arcsin_plus_arccos]@

@academic[formulas_link:Browse all trigonometry formulas
/trigonometry/formulas]@

This is the inverse-function version of the cofunction [identity](!/trigonometry/identities) $\\sin\\theta = \\cos\\left(\\frac{\\pi}{2} - \\theta\\right)$. It means knowing one of $\\arcsin(x)$ or $\\arccos(x)$ immediately gives the other.

A related identity captures how arccosine handles negative inputs — unlike arcsine, arccosine is not odd; instead, negating the input supplements the output:

@academic[formula_callout:Arccos of Negative
$$\\arccos(-x) = \\pi - \\arccos x$$
/trigonometry/formulas#arccos_of_negative]@

@academic[formulas_link:Browse all trigonometry formulas
/trigonometry/formulas]@

@academic[pitfall,aside:true,width:35%:Treating arccos as odd
Copying the arcsine rule gives $\\arccos\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{3}$, a negative angle that arccosine never returns. The supplement rule gives $\\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.
[Read more](!#pitfalls)]@

For a negative input, this identity turns the work into a lookup at a positive one.

@academic[example:Example
To find $\\arccos\\left(-\\frac{\\sqrt{3}}{2}\\right)$, start from the known value $\\arccos\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}$ and subtract it from $\\pi$, which gives $\\frac{5\\pi}{6}$.]@

Every negative input lands this way in $\\left(\\frac{\\pi}{2}, \\pi\\right]$, the Quadrant II part of the range.

The graph of $y = \\arccos(x)$ is a decreasing curve from $(−1, \\pi)$ to $(1, 0)$, passing through $(0, \\frac{\\pi}{2})$. It is the reflection of the restricted cosine graph over $y = x$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Arctangent Function`,
    content: `The tangent function is restricted to $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, where it is strictly increasing and maps onto $(-\\infty, \\infty)$. The inverse is arctangent:

@academic[formula_callout:The Arctangent Function
$$\\arctan(x) = \\theta \\quad \\text{means} \\quad \\tan(\\theta) = x \\quad \\text{with} \\quad \\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$$]@

**Domain of** $\\arctan$: $(-\\infty, \\infty)$ — all real numbers, since tangent's range is unbounded.

**Range of ** $\\arctan$: $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ — an open interval, since the angles of tangent's restricted domain approach but never reach $\\pm\\frac{\\pi}{2}$.

Exact values:

- $\\arctan(0) = 0$
- $\\arctan\\left(\\frac{\\sqrt{3}}{3}\\right) = \\frac{\\pi}{6}$
- $\\arctan(1) = \\frac{\\pi}{4}$
- $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$
- $\\arctan(-1) = -\\frac{\\pi}{4}$
- $\\arctan(-\\sqrt{3}) = -\\frac{\\pi}{3}$

Like arcsine, arctangent is an odd function — negating the input negates the output:

@academic[formula_callout:Arctan of Negative
$$\\arctan(-x) = -\\arctan x$$
/trigonometry/formulas#arctan_of_negative]@

@academic[formulas_link:Browse all trigonometry formulas
/trigonometry/formulas]@

@academic[fact,aside:true,width:35%:Three arctangents add up to $\\pi$
$\\arctan 2$ and $\\arctan 3$, about $63.43°$ and $71.57°$, are no rational fraction of $\\pi$, yet $\\arctan 1 + \\arctan 2 + \\arctan 3 = \\pi$ exactly. The tangent addition formula gives $\\tan(\\arctan 2 + \\arctan 3) = \\frac{2 + 3}{1 - 6} = -1$, so those two make $135°$.]@

Beyond the table of exact values, arctangent outputs are rarely tidy. A calculator gives $\\arctan 2 \\approx 1.1071$ and $\\arctan 3 \\approx 1.2490$ in radians, decimals with no recognizable pattern. Untidy angles like these can still combine with each other through the tangent addition formula.

As $x \\to \\infty$, $\\arctan(x) \\to \\frac{\\pi}{2}$. As $x \\to -\\infty$, $\\arctan(x) \\to -\\frac{\\pi}{2}$. These are horizontal asymptotes of the arctangent graph — a feature unique among the three primary inverse functions.

The graph of $y = \\arctan(x)$ is an increasing S-shaped curve spanning the entire horizontal axis, bounded vertically between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$. It passes through the origin with slope 1 (since $\\frac{d}{dx}\\arctan(x)\\big|_{x=0} = 1$) and flattens toward the asymptotes.

Arctangent is particularly well-behaved: it is defined for all real numbers, it is continuous and differentiable everywhere, and its output is always finite. These properties make it a natural tool in calculus and applied mathematics.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Inverse Reciprocal Functions`,
    content: `The reciprocal trigonometric functions — cosecant, secant, and cotangent — also have inverses, though they are used less frequently and their conventions vary more across textbooks.

**Arccosecant** ($\\text{arccsc}$): the inverse of cosecant restricted to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right] \\setminus \\{0\\}$.

- Domain: $(-\\infty, -1] \\cup [1, \\infty)$
- Range: $\\left[-\\frac{\\pi}{2}, 0\\right) \\cup \\left(0, \\frac{\\pi}{2}\\right]$
- Relationship: $\\text{arccsc}(x) = \\arcsin\\left(\\frac{1}{x}\\right)$

**Arcsecant** ($\\text{arcsec}$): the inverse of secant restricted to $[0, \\pi] \\setminus \\left\\{\\frac{\\pi}{2}\\right\\}$.

- Domain: $(-\\infty, -1] \\cup [1, \\infty)$
- Range: $\\left[0, \\frac{\\pi}{2}\\right) \\cup \\left(\\frac{\\pi}{2}, \\pi\\right]$
- Relationship: $\\text{arcsec}(x) = \\arccos\\left(\\frac{1}{x}\\right)$

**Arccotangent** ($\\text{arccot}$): the inverse of cotangent restricted to $(0, \\pi)$.

- Domain: $(-\\infty, \\infty)$
- Range: $(0, \\pi)$
- Relationship: $\\text{arccot}(x) = \\arctan\\left(\\frac{1}{x}\\right)$ for $x > 0$; requires adjustment for $x < 0$

Arctangent and arccotangent share the same cofunction relationship that arcsine and arccosine do:

@academic[formula_callout:Arctan Plus Arccot
$$\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$$
/trigonometry/formulas#arctan_plus_arccot]@

@academic[formulas_link:Browse all trigonometry formulas
/trigonometry/formulas]@

@academic[pitfall,aside:true,width:35%:Converting a negative arccot input directly
Rewriting $\\operatorname{arccot}(-1)$ as $\\arctan(-1)$ gives $-\\frac{\\pi}{4}$, outside the range $(0, \\pi)$. From $\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$, $\\operatorname{arccot}(-1) = \\frac{\\pi}{2} + \\frac{\\pi}{4} = \\frac{3\\pi}{4}$.
[Read more](!#pitfalls)]@

In practice, these are rarely evaluated directly. When an expression involves $\\text{arcsec}(x)$, it is usually converted to $\\arccos\\left(\\frac{1}{x}\\right)$ for computation. The same applies to arccosecant via arcsine and arccotangent via arctangent. Their primary role is theoretical — they appear in integral formulas in calculus (for example, $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx = \\text{arcsec}|x| + C$) and in certain [identity](!/trigonometry/identities) derivations.`,
    before: ``,
    after: ``,
    link: ``,
  },
  notation: {
    title: `Inverse Function Notation`,
    lead: `The most collided superscript in the subject, the arc-names that dodge it, and the spellings machines use. The table below the entries settles every form side by side.`,
    inherited: `$\\sin$ through $\\cot$ come from the [right triangle page](!/trigonometry/right-triangle#notation); the honest power $\\sin^2\\theta$ that makes $\\sin^{-1}$ treacherous is owned by [function notation](!/trigonometry/functions#notation); the interval marks of the ranges by [expressing domains](!/functions/domain#2).`,
    entries: [
      {
        id: 'sin-inverse',
        tex: `$\\sin^{-1}(x)$`,
        read: `inverse sine of x; sine inverse`,
        means: `An inconsistency by convention: every other exponent on a function name is a power — $\\sin^2 x = (\\sin x)^2$ — but $-1$ alone means the inverse function. $\\sin^{-1}(x) = \\arcsin(x)$, an angle out, never $\\frac{1}{\\sin x}$; the override applies to all six functions.`,
        cases: `The corner mark's fourth career: reciprocals on [numbers](!/algebra/powers/negative-exponents#notation), inversion on [complex numbers](!/complex-numbers/multiplicative-inverse#4) and [matrices](!/linear-algebra/matrix/inverse#notation) — on functions it flips the map, and only the base tells you which reading applies.`,
        confusedWith: `$\\csc x$. By the power pattern, $\\sin^{-1}$ "should" be the reciprocal — writing the reciprocal safely takes brackets, $(\\sin x)^{-1}$, or the honest $\\frac{1}{\\sin x}$; exactly the split the table below works through.`,
      },
      {
        id: 'arc-names',
        tex: `$\\arcsin$ · $\\arccos$ · $\\arctan$`,
        read: `arcsine, arccosine, arctangent`,
        means: `The collision-free spelling: "the arc whose sine is $x$" — on the unit circle the answer-angle is literally an arc length, so the prefix means what it says. Publications wanting zero ambiguity use the arc-names exclusively; both conventions are catalogued among the [trigonometry symbols](!/math-symbols/trigonometry).`,
        cases: `The reciprocal trio extends the pattern — $\\operatorname{arcsec}$, $\\operatorname{arccsc}$, $\\operatorname{arccot}$ — with conventions that vary by textbook, as **Inverse Reciprocal Functions** above warns.`,
        alsoWritten: `$\\operatorname{Arcsin}$ — capital-A for the principal branch in older texts, the same capitalization trick complex analysis still uses for its principal argument.`,
        confusedWith: `An arc times a sine. The prefix is part of one operator name — reading "arc · sin" as a product repeats the cancellation error that function abbreviations always invite.`,
      },
      {
        id: 'machine-spellings',
        tex: `$\\operatorname{asin}$ · $\\operatorname{atan2}$`,
        read: `a-sine; a-tan-two`,
        means: `The machine spellings: programming languages shorten the arc-names to @[asin]@, @[acos]@, @[atan]@, while calculator buttons keep $\\sin^{-1}$ — two devices, two conventions, one function.`,
        cases: `$\\operatorname{atan2}(y, x)$ is the special one: two arguments, full-quadrant answer — the programming spelling of the [principal argument](!/complex-numbers/trigonometric-form#notation), with $y$ before $x$ in the argument list.`,
        confusedWith: `$\\arctan(y/x)$. The single-argument version cannot tell opposite quadrants apart — $\\operatorname{atan2}(1, -1)$ and $\\arctan(-1)$ differ by $\\pi$; the two-argument form exists precisely to fix that.`,
      },
    ],
    symbolsHref: `/math-symbols/trigonometry`,
    symbolsLabel: `All trigonometry symbols`,
    parentHref: `/trigonometry`,
    parentLabel: `Trigonometry`,
  },
  obj7: {
    title: `Evaluating Inverse Trigonometric Functions`,
    content: `Evaluating an inverse trigonometric function means answering: "What angle in the restricted range has this function value?"

**For standard inputs** — the values $0, \\pm\\frac{1}{2}, \\pm\\frac{\\sqrt{2}}{2}, \\pm\\frac{\\sqrt{3}}{2}, \\pm 1$ — the answer comes from the [unit circle](!/trigonometry/unit-circle) values, filtered through the range restriction.

$\\arcsin\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}$ because $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$ and $\\frac{\\pi}{3} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.

$\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$ because $\\cos\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$ and $\\frac{3\\pi}{4} \\in [0, \\pi]$.

$\\arctan(-1) = -\\frac{\\pi}{4}$ because $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$ and $-\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.

**A common trap:** $\\arcsin\\left(\\frac{1}{2}\\right) \\neq \\frac{5\\pi}{6}$, even though $\\sin\\left(\\frac{5\\pi}{6}\\right) = \\frac{1}{2}$. The angle $\\frac{5\\pi}{6}$ is outside the range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so it is not the arcsine output. The correct answer is $\\frac{\\pi}{6}$.

**For non-standard inputs** — values like $\\arcsin(0.7)$ or $\\arctan(3.5)$ — a calculator is required. Ensure the calculator is in the correct angle mode ([degrees or radians](!/trigonometry/degrees-radians)) for the desired output format. A calculator returns inverse trigonometric values in whatever angle mode it is set to.

The standard arcsine and arccosine values across the shared input domain $[-1, 1]$ collect into a single reference table, where the cofunction sum identity $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$ is visible row-by-row.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Compositions of Trigonometric and Inverse Trigonometric Functions`,
    content: `Compositions like $\\sin(\\arccos(x))$ or $\\arcsin(\\sin(x))$ combine a trigonometric function with an inverse. The behavior of these compositions depends on the direction and on whether the input falls within the restricted range.

**Direct compositions** (function applied to its own inverse):

@academic[formula_callout:Compositions of Trigonometric and Inverse Trigonometric Functions
$$\\sin(\\arcsin(x)) = x \\quad \\text{for all } x \\in [-1, 1]$$]@
@academic[formula_callout:Compositions of Trigonometric and Inverse Trigonometric Functions
$$\\cos(\\arccos(x)) = x \\quad \\text{for all } x \\in [-1, 1]$$]@
@academic[formula_callout:Compositions of Trigonometric and Inverse Trigonometric Functions
$$\\tan(\\arctan(x)) = x \\quad \\text{for all } x \\in (-\\infty, \\infty)$$]@

These hold universally within the domain — applying a function to its inverse always recovers the input.

**Reverse compositions** (inverse applied to its own function):

@academic[formula_callout:Compositions of Trigonometric and Inverse Trigonometric Functions
$$\\arcsin(\\sin(x)) = x \\quad \\text{only if } x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$]@

@academic[fact,aside:true,width:35%:Folding turns sine into a zigzag
The graph of $\\arcsin(\\sin x)$ is made of straight segments with slopes $1$ and $-1$, a zigzag between $-\\frac{\\pi}{2}$ and $\\frac{\\pi}{2}$ that repeats every $2\\pi$. Each fold reflects $x$ back into the range, and a reflected copy of $y = x$ is still a straight line.]@

If $x$ is outside this range, the arcsine "folds" the result back into the restricted range. For example, $\\arcsin\\left(\\sin\\left(\\frac{5\\pi}{6}\\right)\\right) = \\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$, not $\\frac{5\\pi}{6}$. The same caution applies to $\\arccos(\\cos(x))$ (valid only on $[0, \\pi]$) and $\\arctan(\\tan(x))$ (valid only on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$).

**Mixed compositions** (different functions composed):

$\\sin(\\arccos(x))$, $\\cos(\\arctan(x))$, $\\tan(\\arcsin(x))$, etc. These are simplified using a right triangle construction:

To evaluate $\\sin(\\arccos(x))$: let $\\theta = \\arccos(x)$, so $\\cos\\theta = x = \\frac{x}{1}$. Construct a right triangle with adjacent side $x$ and hypotenuse $1$. The opposite side is $\\sqrt{1 - x^2}$ (by the Pythagorean theorem). Therefore:

@academic[formula_callout:Compositions of Trigonometric and Inverse Trigonometric Functions
$$\\sin(\\arccos(x)) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\sqrt{1 - x^2}$$]@

This is valid for $x \\in [-1, 1]$, and the result is always non-negative because $\\arccos(x) \\in [0, \\pi]$, where sine is non-negative.

To evaluate $\\cos(\\arctan(x))$: let $\\theta = \\arctan(x)$, so $\\tan\\theta = x = \\frac{x}{1}$. Opposite $= x$, adjacent $= 1$, hypotenuse $= \\sqrt{1 + x^2}$. Therefore:

@academic[formula_callout:Compositions of Trigonometric and Inverse Trigonometric Functions
$$\\cos(\\arctan(x)) = \\frac{1}{\\sqrt{1 + x^2}}$$]@

@academic[pitfall,aside:true,width:35%:Cancelling mismatched functions
Cancelling sine against arccosine gives $\\sin\\left(\\arccos\\frac{1}{2}\\right) = \\frac{1}{2}$. The inner angle is $\\arccos\\frac{1}{2} = \\frac{\\pi}{3}$, so the value is $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.
[Read more](!#pitfalls)]@

The triangle method works for every mixed composition. It converts the problem from inverse trigonometric territory back to [right triangle](!/trigonometry/right-triangle) ratios, using the Pythagorean [identity](!/trigonometry/identities) implicitly to find the missing side.

All six mixed compositions — built from the right-triangle method demonstrated above — collect into the reference table below, with the algebraic form and validity domain for each.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Graphs of Inverse Trigonometric Functions`,
    content: `@academic[rule_plain:The graph of each inverse trigonometric function is the reflection of the corresponding restricted trigonometric graph over the line $y = x$.]@

This reflection swaps the roles of input and output — the domain of the original becomes the range of the inverse, and vice versa.

$y = \\arcsin(x)$ : An increasing S-shaped curve.

- Domain: $[-1, 1]$ (horizontal extent)
- Range: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ (vertical extent)
- Passes through: $(-1, -\\frac{\\pi}{2})$, $(0, 0)$, $(1, \\frac{\\pi}{2})$
- Increasing throughout — reflects the increasing behavior of sine on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$

$y = \\arccos(x)$ : A decreasing curve.

- Domain: $[-1, 1]$
- Range: $[0, \\pi]$
- Passes through: $(-1, \\pi)$, $(0, \\frac{\\pi}{2})$, $(1, 0)$
- Decreasing throughout — reflects the decreasing behavior of cosine on $[0, \\pi]$

$y = \\arctan(x)$ : An increasing S-shaped curve with horizontal asymptotes.

- Domain: $(-\\infty, \\infty)$
- Range: $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$
- Passes through: $(0, 0)$
- Horizontal asymptote at $y = \\frac{\\pi}{2}$ as $x \\to \\infty$
- Horizontal asymptote at $y = -\\frac{\\pi}{2}$ as $x \\to -\\infty$
- Increasing throughout — the only primary inverse trig function defined on all of $\\mathbb{R}$

All three primary inverse functions are continuous on their domains. Arcsine and arccosine have bounded domains (closed intervals), so their graphs are finite curves with endpoints. Arctangent, with its infinite domain, extends without bound horizontally but is squeezed vertically between the asymptotes — a distinctive shape that appears in probability (the Cauchy distribution) and many other contexts.`,
    before: ``,
    after: ``,
    link: ``,
  },
    // NEW capstone section
    obj10:{
      title:`Summary of the Six Inverse Trigonometric Functions`,
      content:`All six inverse trigonometric functions can be set side-by-side on their definitional attributes — domain, range, monotonicity, the identity that pairs each with another, and the distinctive feature of each function&apos;s graph. The table below makes the structural symmetries of the family immediately visible: the cofunction sum identity holds between arcsin and arccos, and again between arctan and arccot; the three reciprocal inverses share a domain split and connect back to the primary inverses through the 1/x relationship.`,
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

    obj16: {
      title: `Common Pitfalls`,
      content: `Five mistakes come up again and again when working with inverse trigonometric functions. Three are marked where they happen in the sections above; the notation and evaluation sections already warn about the other two. Here each is worked through in full, with the wrong and the right working side by side.

**Treating arccos as odd**

The rule $\\arcsin(-x) = -\\arcsin x$ is carried over to arccosine, so a negative input is given the negative of the answer for the positive input. The result is a negative angle, and arccosine never returns one.

Wrong working: $\\arccos\\left(-\\frac{1}{2}\\right) = -\\arccos\\left(\\frac{1}{2}\\right) = -\\frac{\\pi}{3}$.

Right working: $\\arccos\\left(-\\frac{1}{2}\\right) = \\pi - \\arccos\\left(\\frac{1}{2}\\right) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. Indeed $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$, and $\\frac{2\\pi}{3}$ lies in $[0, \\pi]$.

Why it happens: arcsine and arctangent are both odd, so the habit of pulling the minus sign out is applied to the third inverse by default.

How to check: an arccosine value lies in $[0, \\pi]$, so a negative answer is always wrong. Here also $\\cos\\left(-\\frac{\\pi}{3}\\right) = \\frac{1}{2}$, not $-\\frac{1}{2}$.

**Converting a negative arccot input directly**

Arccotangent is computed through $\\operatorname{arccot} x = \\arctan\\left(\\frac{1}{x}\\right)$, which holds only for $x > 0$. For a negative input the result lands in $\\left(-\\frac{\\pi}{2}, 0\\right)$, outside the range $(0, \\pi)$.

Wrong working: $\\operatorname{arccot}(-1) = \\arctan\\left(\\frac{1}{-1}\\right) = \\arctan(-1) = -\\frac{\\pi}{4}$.

Right working: from $\\arctan x + \\operatorname{arccot} x = \\frac{\\pi}{2}$, $\\operatorname{arccot}(-1) = \\frac{\\pi}{2} - \\arctan(-1) = \\frac{\\pi}{2} + \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. The same comes from adding $\\pi$ to the arctangent result for $x < 0$: $-\\frac{\\pi}{4} + \\pi = \\frac{3\\pi}{4}$.

Why it happens: calculators have no arccotangent key, and the reciprocal rule works for arccosecant and arcsecant on their whole domains, so it seems safe for arccotangent too.

How to check: an arccotangent value lies in $(0, \\pi)$, so a negative answer is wrong. Then test the answer: $\\cot\\frac{3\\pi}{4} = \\frac{\\cos(3\\pi/4)}{\\sin(3\\pi/4)} = -1$.

**Reading the inverse as a reciprocal**

The notation $\\sin^{-1}(x)$ is read as a power, $\\frac{1}{\\sin x}$, following the pattern $\\sin^2 x = (\\sin x)^2$. The input is then treated as an angle and the output as a plain number, the reverse of what the inverse does.

Wrong working: $\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{1}{\\sin\\frac{1}{2}} \\approx \\frac{1}{0.479} \\approx 2.09$, taking $\\frac{1}{2}$ as an angle of half a radian.

Right working: $\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6} \\approx 0.52$, the angle whose sine is $\\frac{1}{2}$. The reciprocal is written $(\\sin x)^{-1}$ or $\\csc x$.

Why it happens: every other superscript on a trigonometric function is a power, so $-1$ looks like one too.

How to check: an arcsine value lies in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, roughly from $-1.57$ to $1.57$. The value $2.09$ is outside, so it cannot be $\\sin^{-1}\\left(\\frac{1}{2}\\right)$. Applying sine to the right answer gives back the input: $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$.

**Picking an angle outside the range**

The unit circle offers several angles with the given sine, and the one picked lies outside $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$. The evaluation section warns about this for $\\arcsin\\left(\\frac{1}{2}\\right)$; negative inputs are where it happens most.

Wrong working: $\\sin\\frac{7\\pi}{6} = -\\frac{1}{2}$ and $\\sin\\frac{11\\pi}{6} = -\\frac{1}{2}$, so $\\arcsin\\left(-\\frac{1}{2}\\right)$ is given as $\\frac{7\\pi}{6}$ or $\\frac{11\\pi}{6}$.

Right working: the only angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ whose sine is $-\\frac{1}{2}$ is $-\\frac{\\pi}{6}$, so $\\arcsin\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$. The angle $\\frac{11\\pi}{6} = -\\frac{\\pi}{6} + 2\\pi$ ends at the same point of the circle, but it is not the arcsine value.

Why it happens: solving equations on $[0, 2\\pi)$ builds the habit of naming angles between $0$ and $2\\pi$, and negative angles feel unusual as answers.

How to check: compare the answer with the range before writing it down. Both $\\frac{7\\pi}{6}$ and $\\frac{11\\pi}{6}$ are larger than $\\frac{\\pi}{2}$, so neither can be an arcsine value.

**Cancelling mismatched functions**

In a mixed composition such as $\\sin(\\arccos x)$, the outer function and the inner inverse belong to different functions, but they are cancelled as if the composition were direct.

Wrong working: $\\sin\\left(\\arccos\\frac{1}{2}\\right) = \\frac{1}{2}$.

Right working: let $\\theta = \\arccos\\frac{1}{2} = \\frac{\\pi}{3}$. Then $\\sin\\theta = \\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$. The triangle formula gives the same value: $\\sqrt{1 - \\left(\\frac{1}{2}\\right)^2} = \\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{2}$.

Why it happens: the direct composition $\\sin(\\arcsin x) = x$ looks almost the same on the page, and the cancellation is carried over without checking that the two names match.

How to check: try $x = 0$. Cancelling would give $\\sin(\\arccos 0) = 0$, but $\\arccos 0 = \\frac{\\pi}{2}$ and $\\sin\\frac{\\pi}{2} = 1$.`,
      before: ``,
      after: ``,
      link: '',
    },

    faq: {
      title: `Inverse Trigonometric Functions FAQ`,
    },
  }



  const introContent = {
  id: "intro",
  title: `Recovering Angles from Known Ratios`,
  content: `The six trigonometric functions take an angle and return a number. The inverse trigonometric functions reverse this: they take a number and return an angle. Given that $\\sin(\\theta) = \\frac{1}{2}$, what is $\\theta$? The answer is not unique — infinitely many angles satisfy this equation, as the [equations](!/trigonometry/equations) page makes clear. But an inverse function must return exactly one value. This forces a restriction: each trigonometric function must be confined to an interval where it is strictly monotonic (always increasing or always decreasing) before an inverse can be defined.

The resulting functions — $\\arcsin$, $\\arccos$, $\\arctan$, and their reciprocal counterparts — are not merely notational conveniences. They appear as solutions to [equations](!/trigonometry/equations), as building blocks in compositions that simplify using the Pythagorean [identity](!/trigonometry/identities), and as essential tools in calculus (where they arise as antiderivatives of certain algebraic expressions). Their [graphs](!/trigonometry/graphs) are reflections of the restricted trigonometric graphs over the line $y = x$, and their domains and ranges are dictated entirely by the [properties](!/trigonometry/properties) — specifically the monotonicity — of the original functions.

`,
}




  // Demonstration units: figure + explanation panel in one frame, built here
  // and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  // Authored figures. curveFeature.v2 draws them; these are data only.
  // Package doc: app/utils/illustrations/trigonometry/curves/curveFeature.v2.md
  const cfWhyRestrict = {style: { primary: '#2563EB', primaryLight: '#93B4F5', secondary: '#06357A', resultStroke: '#B45309', resultFill: '#D97706' }, 
    kind: 'lineTest', fn: 'sin',
    svgTitle: 'Sine fails the horizontal line test until its domain is cut',
    xRange: [-2 * Math.PI, 2 * Math.PI], yRange: [-1.7, 1.7], cut: 0.5, cutLabel: 'y = \u00bd',
    crossings: [Math.PI / 6, 5 * Math.PI / 6, Math.PI / 6 - 2 * Math.PI, 5 * Math.PI / 6 - 2 * Math.PI],
    kept: Math.PI / 6,
    xTicks: [-2 * Math.PI, -Math.PI, Math.PI, 2 * Math.PI],
    ghostNote: 'four crossings here', ghostNoteAt: -3 * Math.PI / 2,
    keptNote: 'restricted to [\u2212\u03c0/2, \u03c0/2] \u00b7 one crossing',
  };
  const cfArcsine = {style: { primary: '#2563EB', primaryLight: '#93B4F5', secondary: '#06357A', resultStroke: '#B45309', resultFill: '#D97706' }, 
    kind: 'reflect', fn: 'sin', size: 300, limit: 2.0,
    svgTitle: 'Arcsine is the restricted sine reflected across y = x',
    fnLabel: 'sin', fnLabelAt: 1.2, fnLabelDir: 'se',
    invLabel: 'arcsin', invLabelAt: 0.95, invLabelDir: 'nw',
    note: 'the same curve with x and y exchanged',
  };
  const cfArccosine = {style: { primary: '#2563EB', primaryLight: '#93B4F5', secondary: '#06357A', resultStroke: '#B45309', resultFill: '#D97706' }, 
    kind: 'reflect', fn: 'cos', size: 310, limit: 3.45,
    svgTitle: 'Arccosine is the restricted cosine reflected across y = x',
    fnLabel: 'cos', fnLabelAt: 2.75, fnLabelDir: 'se',
    invLabel: 'arccos', invLabelAt: 2.6, invLabelDir: 'ne',
    note: 'restricted to [0, \u03c0], then exchanged',
  };
  const cfArctangent = {style: { primary: '#2563EB', primaryLight: '#93B4F5', secondary: '#06357A', resultStroke: '#B45309', resultFill: '#D97706' }, 
    kind: 'reflect', fn: 'tan', size: 300, limit: 2.45,
    svgTitle: 'Arctangent is the restricted tangent reflected across y = x',
    fnLabel: 'tan', fnLabelAt: 1.05, fnLabelDir: 'w',
    invLabel: 'arctan', invLabelAt: 1.35, invLabelDir: 'se',
    note: 'vertical asymptotes become horizontal ones',
  };
  const cfCompositionFold = {style: { primary: '#2563EB', primaryLight: '#93B4F5', secondary: '#06357A', resultStroke: '#B45309', resultFill: '#D97706' }, 
    kind: 'fold', fn: 'sin',
    svgTitle: 'arcsin(sin x) folds an out-of-range input back into the restricted range',
    xRange: [-0.35, Math.PI + 0.35], yRange: [-1.25, 1.25],
    restricted: [-Math.PI / 2, Math.PI / 2],
    input: 5 * Math.PI / 6, output: Math.PI / 6,
    carryLabel: 'both give sin = \u00bd',
    inLabel: '5\u03c0/6  in', outLabel: '\u03c0/6  out', wrongLabel: 'not 5\u03c0/6',
    title: 'arcsin(sin x) folds the input back',
  };
  const cfInverseRanges = {style: { primary: '#2563EB', primaryLight: '#93B4F5', secondary: '#06357A', resultStroke: '#B45309', resultFill: '#D97706' }, 
    kind: 'ranges', panelWidth: 190, panelHeight: 232, gap: 14, limit: 3.4,
    svgTitle: 'Each inverse takes its parent range and returns its parent domain',
    panels: [
      { fn: 'sin', title: 'arcsin', domain: [-1, 1], range: [-Math.PI / 2, Math.PI / 2],
        domainLabel: 'takes x in [\u22121, 1]', rangeLabel: 'gives y in [\u2212\u03c0/2, \u03c0/2]' },
      { fn: 'cos', title: 'arccos', domain: [-1, 1], range: [0, Math.PI],
        domainLabel: 'takes x in [\u22121, 1]', rangeLabel: 'gives y in [0, \u03c0]' },
      { fn: 'tan', title: 'arctan', domain: [-2.2, 2.2], range: [-Math.PI / 2, Math.PI / 2],
        domainLabel: 'takes any x', rangeLabel: 'gives y in (\u2212\u03c0/2, \u03c0/2)' },
    ],
  };

  const conceptIntroFigures = {
    arcsin: renderInverseState('arcsin'),
    undoTable: ciUndoTable,
    manyTable: ciManyTable,
  };

  const demoUnits = {
    whyRestrict: demoUnitFrame({
      svg: renderCurveFeatureV2(cfWhyRestrict),
      caption: 'One line, four crossings',
      text: 'A horizontal line meets the full sine curve at infinitely many points, four of them in the stretch drawn here. Inside the shaded interval it meets the curve exactly once &#8212; which is what makes an inverse possible there and nowhere wider.',
    }),
    arcsine: demoUnitFrame({
      svg: renderCurveFeatureV2(cfArcsine),
      caption: 'Sine and arcsine across y = x',
      text: 'Arcsine is not a new curve. It is the restricted sine with its two coordinates exchanged, which is what reflecting across the dashed line does. The endpoint at (&#960;/2, 1) becomes (1, &#960;/2).',
    }),
    arccosine: demoUnitFrame({
      svg: renderCurveFeatureV2(cfArccosine),
      caption: 'Cosine and arccosine across y = x',
      text: 'The same construction on a different interval. Cosine is cut to [0, &#960;], where it falls steadily from 1 to &#8722;1, and the reflection of that piece is arccosine. Note the outputs now run from 0 to &#960; rather than either side of zero.',
    }),
    arctangent: demoUnitFrame({
      svg: renderCurveFeatureV2(cfArctangent),
      caption: 'Tangent and arctangent across y = x',
      text: 'Reflection exchanges the asymptotes too. Tangent\'s vertical asymptotes at &#177;&#960;/2 become arctangent\'s horizontal ones, which is why arctangent accepts every real number and still never reaches &#177;&#960;/2.',
    }),
    compositionFold: demoUnitFrame({
      svg: renderCurveFeatureV2(cfCompositionFold),
      caption: '5&#960;/6 in, &#960;/6 out',
      text: 'Sine sends both angles to the same value, so arcsine cannot tell them apart &#8212; and by definition it answers with the one inside its own range. The input is not recovered; it is folded back.',
    }),
    inverseRanges: demoUnitFrame({
      svg: renderCurveFeatureV2(cfInverseRanges),
      caption: 'What each inverse takes and gives',
      text: 'Read the horizontal bar as what goes in and the vertical bar as what comes out. Each is the reverse of its parent function\'s pair, which is the whole content of the word inverse.',
    }),
  };

  const inverseReciprocalTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Inverses of the reciprocal functions',
    preface: 'Each inverse reciprocal function can be rewritten with an ordinary inverse function of $1/x$. Their domains and ranges come with gaps.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Reduce to arcsin, arccos, arctan',
    conclusion: 'For computation, switch to $\\arcsin(1/x)$, $\\arccos(1/x)$ or $\\arctan(1/x)$, watching the domain each one needs.',
    root: { name: 'Inverse reciprocal functions', sub: 'arccsc · arcsec · arccot' },
    children: [
      { id: 'acsc', name: 'arccsc', symbol: '$\\arcsin(1/x)$', items: [ { label: 'Domain', text: '$|x| \\geq 1$' }, { label: 'Range', text: '$[-\\pi/2, \\pi/2]$ without $0$' } ] },
      { id: 'asec', name: 'arcsec', symbol: '$\\arccos(1/x)$', items: [ { label: 'Domain', text: '$|x| \\geq 1$' }, { label: 'Range', text: '$[0, \\pi]$ without $\\pi/2$' } ] },
      { id: 'acot', name: 'arccot', symbol: '$\\arctan(1/x)$ for $x > 0$', items: [ { label: 'Domain', text: 'all reals' }, { label: 'Range', text: '$(0, \\pi)$' } ] },
    ],
  };

  const arcsineProfile = {
    header: { kicker: 'inverse of the restricted sine', title: 'Profile of arcsine', formula: '$y = \\arcsin(x)$' },
    quickStats: [ { n: '[−1, 1]', label: 'domain' }, { n: 'odd', label: 'symmetry' } ],
    graph: {
      xRange: [-1.4, 1.4], yRange: [-1.85, 1.85],
      points: Array.from({ length: 201 }, (_, i) => { const x = -1 + i * 0.01; return [Number(x.toFixed(2)), Number(Math.asin(Math.max(-1, Math.min(1, x))).toFixed(4))]; }),
      xTicks: [-1, -0.5, 0, 0.5, 1], yTicks: [],
    },
    features: [
      { id: 'ends', kind: 'warm', points: [{ x: -1, y: -Math.PI / 2 }, { x: 1, y: Math.PI / 2 }] },
      { id: 'origin', points: [{ x: 0, y: 0 }] },
      { id: 'half', points: [{ x: -0.5, y: -Math.PI / 6 }, { x: 0.5, y: Math.PI / 6 }] },
    ],
    intervals: [
      { label: 'domain', spans: [
        { from: null, to: -1, kind: 'soft', text: '—' },
        { from: -1, to: 1, kind: 'pos', text: 'defined on [−1, 1]' },
        { from: 1, to: null, kind: 'soft', text: '—' },
      ] },
      { label: 'direction', spans: [ { from: -1, to: 1, kind: 'pos', text: 'increasing', arrow: 'right' } ] },
    ],
    properties: [
      { name: 'Key points', rows: [
        { featureId: 'ends', label: 'Endpoints', value: '(±1, ±π/2)', tone: 'warm' },
        { featureId: 'origin', label: 'Through', value: '(0, 0)' },
        { featureId: 'half', label: 'At x = ±½', value: 'y = ±π/6' },
      ] },
      { name: 'Global', rows: [
        { label: 'Domain', value: '$[-1, 1]$', sub: 'the range of sine' },
        { label: 'Range', value: '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$' },
        { label: 'Symmetry', value: 'odd: $\\arcsin(-x) = -\\arcsin x$' },
        { label: 'Shape', value: 'increasing S-curve', sub: 'the restricted sine reflected over $y = x$' },
      ] },
    ],
  };

  const arccosineProfile = {
    header: { kicker: 'inverse of the restricted cosine', title: 'Profile of arccosine', formula: '$y = \\arccos(x)$' },
    quickStats: [ { n: '[−1, 1]', label: 'domain' }, { n: '[0, π]', label: 'range' } ],
    graph: {
      xRange: [-1.4, 1.4], yRange: [-0.4, 3.5],
      points: Array.from({ length: 201 }, (_, i) => { const x = -1 + i * 0.01; return [Number(x.toFixed(2)), Number(Math.acos(Math.max(-1, Math.min(1, x))).toFixed(4))]; }),
      xTicks: [-1, -0.5, 0, 0.5, 1], yTicks: [],
    },
    features: [
      { id: 'ends', kind: 'warm', points: [{ x: -1, y: Math.PI }, { x: 1, y: 0 }] },
      { id: 'mid', points: [{ x: 0, y: Math.PI / 2 }] },
      { id: 'half', points: [{ x: -0.5, y: 2 * Math.PI / 3 }, { x: 0.5, y: Math.PI / 3 }] },
    ],
    intervals: [
      { label: 'domain', spans: [
        { from: null, to: -1, kind: 'soft', text: '—' },
        { from: -1, to: 1, kind: 'pos', text: 'defined on [−1, 1]' },
        { from: 1, to: null, kind: 'soft', text: '—' },
      ] },
      { label: 'direction', spans: [ { from: -1, to: 1, kind: 'neg', text: 'decreasing' } ] },
    ],
    properties: [
      { name: 'Key points', rows: [
        { featureId: 'ends', label: 'Endpoints', value: '(−1, π), (1, 0)', tone: 'warm' },
        { featureId: 'mid', label: 'Middle', value: '(0, π/2)' },
        { featureId: 'half', label: 'At x = ±½', value: '2π/3 and π/3' },
      ] },
      { name: 'Global', rows: [
        { label: 'Domain', value: '$[-1, 1]$' },
        { label: 'Range', value: '$[0, \\pi]$', sub: 'never a negative angle' },
        { label: 'Negative inputs', value: '$\\arccos(-x) = \\pi - \\arccos x$', sub: 'not odd: the output is supplemented' },
        { label: 'With arcsine', value: '$\\arcsin x + \\arccos x = \\frac{\\pi}{2}$' },
      ] },
    ],
  };

  const arctangentProfile = {
    header: { kicker: 'inverse of the restricted tangent', title: 'Profile of arctangent', formula: '$y = \\arctan(x)$' },
    quickStats: [ { n: 'ℝ', label: 'domain' }, { n: '2', label: 'horizontal asymptotes' } ],
    graph: {
      xRange: [-8, 8], yRange: [-2, 2],
      points: Array.from({ length: 321 }, (_, i) => { const x = -8 + i * 0.05; return [Number(x.toFixed(2)), Number(Math.atan(x).toFixed(4))]; }),
      xTicks: [-8, -4, -1, 0, 1, 4, 8], yTicks: [],
      asymptotes: [{ y: Math.PI / 2 }, { y: -Math.PI / 2 }],
    },
    features: [
      { id: 'origin', points: [{ x: 0, y: 0 }] },
      { id: 'unit', points: [{ x: -1, y: -Math.PI / 4 }, { x: 1, y: Math.PI / 4 }] },
      { id: 'ha', kind: 'warm', points: [{ x: -7, y: -Math.PI / 2, r: 0 }, { x: 7, y: Math.PI / 2, r: 0 }] },
    ],
    intervals: [
      { label: 'sign', spans: [ { from: null, to: 0, kind: 'neg', sign: '−' }, { from: 0, to: null, kind: 'pos', sign: '+' } ] },
      { label: 'direction', spans: [ { from: null, to: null, kind: 'pos', text: 'increasing everywhere', arrow: 'right' } ] },
    ],
    properties: [
      { name: 'Key points', rows: [
        { featureId: 'origin', label: 'Through', value: '(0, 0)' },
        { featureId: 'unit', label: 'At x = ±1', value: 'y = ±π/4' },
        { featureId: 'ha', label: 'Asymptotes', value: 'y = ±π/2', tone: 'warm' },
      ] },
      { name: 'Global', rows: [
        { label: 'Domain', value: '$(-\\infty, \\infty)$', sub: "tangent's range is unbounded" },
        { label: 'Range', value: '$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$', sub: 'open: the ends are never reached' },
        { label: 'Symmetry', value: 'odd: $\\arctan(-x) = -\\arctan x$' },
        { label: 'Far ends', value: '$\\arctan x \\to \\pm\\frac{\\pi}{2}$ as $x \\to \\pm\\infty$' },
      ] },
    ],
  };

  // BeforeAfter (obj8): sin(arccos x) turned into an algebraic expression by the triangle method
  const triangleMethodSteps = {
    header: {
      kicker: 'Mixed compositions',
      title: 'The triangle method',
      lede: 'It converts the problem from inverse trigonometric territory back to right triangle ratios.',
    },
    steps: [
      { id: 'composition', label: 'Mixed composition', stamp: 'Before', expr: '$\\sin(\\arccos x)$',
        move: { label: 'Name the angle', note: 'let θ = arccos x' } },
      { id: 'angle', label: 'One angle, one ratio', expr: '$\\cos\\theta = \\dfrac{x}{1}$',
        move: { label: 'Build the triangle', note: 'adjacent x, hypotenuse 1, so the opposite side is √(1 − x²); sine is opposite over hypotenuse' } },
      { id: 'algebraic', label: 'Algebraic form', stamp: 'After', expr: '$\\sin(\\arccos x) = \\sqrt{1 - x^2}$',
        detailsLabel: 'Where it holds',
        detailsTitle: '',
        details: 'Valid for $x \\in [-1, 1]$. The result is never negative, because $\\arccos x$ lies in $[0, \\pi]$, where sine is non-negative.' },
    ],
  };

   return {
      props:{
    triangleMethodSteps,
    arctangentProfile,
    arccosineProfile,
    arcsineProfile,
    inverseReciprocalTree,
    demoUnits,
    conceptIntroFigures,
         sectionsContent,
         introContent,
         obj6Table,
         obj7Table,
         obj8Table,
         summaryTable,
         faqQuestions,
         schemas,
          seoData: {
        title: "Inverse Trigonometric Functions | Learn Math Class",
        description: "Learn inverse trigonometric functions: arcsine, arccosine, arctangent, their restricted domains, ranges, graphs, and how to evaluate compositions.",
        keywords: keyWords.join(", "),
        url: "/trigonometry/inverse-functions",
         name: "Inverse Trigonometric Functions"
      },

       }
    }
   }

export default function InverseFunctionsPage({triangleMethodSteps, arctangentProfile, arccosineProfile, arcsineProfile, inverseReciprocalTree, 
  seoData,
  demoUnits,
  sectionsContent,
  introContent,
  obj6Table,
  obj7Table,
  obj8Table,
  summaryTable,
  faqQuestions,
  schemas,
  conceptIntroFigures,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template C (failure first).
  const conceptIntro = {
    beats: [
      {
        id: 'assumption',
        lead: `Every function we undo is run backwards to recover its input.`,
        content: [
          `Doubling is undone by halving, adding $5$ by subtracting $5$: given the output, you get back the one input that produced it. It is natural to expect the same of sine — since $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$, the angle whose sine is $\\frac{1}{2}$ should be $\\frac{\\pi}{6}$.`,
          ciTable('undoTable'),
        ],
      },
      {
        id: 'break',
        kind: 'instance',
        tone: 'break',
        lead: `Run backwards, sine gives not one angle but infinitely many.`,
        content: [
          `Ask for every angle whose sine is $\\frac{1}{2}$.`,
          ciTable('manyTable'),
          `$\\frac{\\pi}{6}$ is one answer among endlessly many. "The angle whose sine is $\\frac{1}{2}$" names no single angle, so as it stands there is nothing to define an inverse as.`,
          <div key={'unit-whyRestrict'} dangerouslySetInnerHTML={{ __html: demoUnits.whyRestrict }} />,
        ],
      },
      {
        id: 'diagnosis',
        lead: `The break was predictable: sine repeats, so it is not one-to-one.`,
        content: [
          `@academic[rule_theorem_plain:A function can have an inverse only if it is one-to-one: each output corresponds to exactly one input.]@`,
          `The trigonometric functions, being periodic, are emphatically not one-to-one on their full domains. The equation $\\sin(x) = \\frac{1}{2}$ is satisfied by $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{\\pi}{6} + 2\\pi$, $\\frac{5\\pi}{6} + 2\\pi$, and infinitely many others. Defining "$\\sin^{-1}\\left(\\frac{1}{2}\\right)$" as all of these would not produce a function — a function must assign a single output to each input.`,
          `It is like asking a phone directory who owns a number shared by a whole household: the question has several right answers. The comparison breaks in one useful way — sine's repetition is perfectly regular, so keeping just one stretch of its graph loses nothing.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `An [inverse trigonometric function](!/trigonometry/definitions#inverse_trigonometric_function) is the inverse of a trigonometric function restricted to an interval on which it is one-to-one. Arcsine, for example, gives the one angle in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ whose sine is a given number.`,
        footer: `So $\\arcsin\\frac{1}{2} = \\frac{\\pi}{6}$: of all the angles in the table, the only one in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.`,
      },
      {
        id: 'kind',
        lead: `An inverse trigonometric function is a function: a number goes in and an angle comes out.`,
        content: [
          `Its input is a value of sine, cosine or tangent; its output is an angle, and exactly one angle each time. The solution is to restrict each trigonometric function to an interval where it is strictly monotonic — always increasing or always decreasing — and therefore one-to-one. On such an interval, the horizontal line test is passed, and an inverse function exists. The restricted function must still cover the entire range of the original, so that the inverse is defined for every relevant input.`,
        ],
        visual: ciSvg('arcsin'),
        caption: `Sine kept only on $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ and its mirror image across $y = x$, the graph of arcsine. The same state is on the [inverse functions explorer](!/trigonometry/visual-tools/inverse-functions).`,
      },
      {
        id: 'caveat',
        lead: `Read backwards, the failure becomes a test: undoing works only inside the chosen interval.`,
        content: [
          `$\\arcsin(\\sin x) = x$ holds when $x$ is in $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, and not otherwise: $\\arcsin\\left(\\sin\\frac{5\\pi}{6}\\right) = \\arcsin\\frac{1}{2} = \\frac{\\pi}{6}$, not $\\frac{5\\pi}{6}$. Every one of the other angles in the table is folded back onto the one the interval keeps.`,
          `The choice of restriction interval is a convention, universally agreed upon. Different intervals could work (sine is also one-to-one on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$, for instance), but the standard choices have been selected for mathematical convenience — they are centered at or near the origin and produce the most natural behavior for compositions and calculus applications.`,
          `The interval chosen is a convention, but the need to choose one is not.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page defines arcsine, arccosine and arctangent with their intervals, then the reciprocal inverses, their graphs, the composition rules, solving equations with inverse functions, and their derivatives.`,
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
          <div key={'unit-arcsine'} dangerouslySetInnerHTML={{ __html: demoUnits.arcsine }} />,
          `Every exact value of $\\arcsin$ can therefore be read off the sine table backwards.`,
          `The arcsine graph with the values above placed on it: it starts at $\\left(-1, -\\frac{\\pi}{2}\\right)$, passes through the origin and the points for $\\pm\\frac{1}{2}$, and ends at $\\left(1, \\frac{\\pi}{2}\\right)$, defined on $[-1, 1]$ and nowhere else.`,
          <DiagramFrame
            key={'obj2-profile'}
            id="arcsine-profile"
            title="Profile of arcsine"
            source="/trigonometry/inverse-functions"
          >
            <FunctionAnalysis data={arcsineProfile} theme={{ title: '#06357A', curve: '#06357A', accent: '#2563EB', warm: '#0284C7', warmInk: '#0369A1' }} />
          </DiagramFrame>,
          `The domain strip is the range of sine turned on its side, and the curve's height never leaves $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, the interval sine was restricted to. The point pairs on either side of the origin are the odd symmetry: each negative input gives the negative of its partner's output.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-arccosine'} dangerouslySetInnerHTML={{ __html: demoUnits.arccosine }} />,
          `This is why $\\arccos$ never returns a negative angle, while $\\arcsin$ freely does.`,
          `The arccosine graph runs the other way: it falls from $(-1, \\pi)$ through $\\left(0, \\frac{\\pi}{2}\\right)$ to $(1, 0)$, with the values at $\\pm\\frac{1}{2}$ marked, over the same domain $[-1, 1]$ as arcsine but with range $[0, \\pi]$.`,
          <DiagramFrame
            key={'obj3-profile'}
            id="arccosine-profile"
            title="Profile of arccosine"
            source="/trigonometry/inverse-functions"
          >
            <FunctionAnalysis data={arccosineProfile} theme={{ title: '#06357A', curve: '#06357A', accent: '#2563EB', warm: '#0284C7', warmInk: '#0369A1' }} />
          </DiagramFrame>,
          `The two points at $\\pm\\frac{1}{2}$ show the supplement rule directly: their heights $\\frac{2\\pi}{3}$ and $\\frac{\\pi}{3}$ add up to $\\pi$, where arcsine's matching pair would add up to $0$. Every pair of mirrored inputs does the same, which is why the graph is symmetric about the point $\\left(0, \\frac{\\pi}{2}\\right)$ rather than the origin.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'unit-arctangent'} dangerouslySetInnerHTML={{ __html: demoUnits.arctangent }} />,
          `That boundedness is what makes $\\arctan$ the best behaved of the three.`,
          `Of the three inverse functions, only arctangent covers the whole $x$-axis. Its profile shows the S-curve through the origin and through $\\left(\\pm 1, \\pm\\frac{\\pi}{4}\\right)$, flattening toward the two horizontal asymptotes $y = \\pm\\frac{\\pi}{2}$.`,
          <DiagramFrame
            key={'obj4-profile'}
            id="arctangent-profile"
            title="Profile of arctangent"
            source="/trigonometry/inverse-functions"
          >
            <FunctionAnalysis data={arctangentProfile} theme={{ title: '#06357A', curve: '#06357A', accent: '#2563EB', warm: '#0284C7', warmInk: '#0369A1' }} />
          </DiagramFrame>,
          `The dashed lines are the open ends of the range: the curve keeps climbing toward $\\frac{\\pi}{2}$ and falling toward $-\\frac{\\pi}{2}$ without ever arriving. They are the vertical asymptotes of the restricted tangent, laid on their side by the reflection over $y = x$.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <DiagramFrame
            key={'obj5-diagram'}
            id="inverse-reciprocal-tree"
            title="Inverse reciprocal functions"
            source="/trigonometry/inverse-functions"
          >
            <TopDownTree data={inverseReciprocalTree} />
          </DiagramFrame>,
        ]
    },
    {
        id:'6',
        title:sectionsContent.notation.title,
        link:``,
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
          <div key={'obj6-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj6Table }} />,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'obj7-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj7Table }} />,
          `@academic[punchline:An inverse trigonometric function returns the one angle in its restricted range, not every angle with that value.]@`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'unit-compositionFold'} dangerouslySetInnerHTML={{ __html: demoUnits.compositionFold }} />,
          `The same caution applies to $\\arccos(\\cos x)$ and $\\arctan(\\tan x)$ on their own intervals.`,
          <div key={'obj8-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj8Table }} />,
          <DiagramFrame
            key={'obj8-diagram'}
            id="triangle-method-steps"
            title="sin(arccos x) by the triangle method"
            source="/trigonometry/inverse-functions"
            before={"The table gives all six results; here is how one of them is found, one move at a time, using the section's own example."}
            after={"The same moves give every row of the table: name the angle, read its known ratio as a fraction over $1$, complete the [right triangle](!/trigonometry/right-triangle), and read the ratio you need. For $\\cos(\\arctan x)$ the hypotenuse is $\\sqrt{1 + x^2}$."}
          >
            <BeforeAfter
              data={triangleMethodSteps}
              variant="progression"
              theme={{ title: '#06357A', accent: '#2563EB', warm: '#B45309', panelSoft: '#e8eefc', indigoSoft: '#e8eefc' }}
            />
          </DiagramFrame>,
          `@academic[punchline:A function always undoes its inverse, but an inverse undoes its function only inside the restricted range.]@`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'unit-inverseRanges'} dangerouslySetInnerHTML={{ __html: demoUnits.inverseRanges }} />,
          `Reading a graph in this direction is the quickest check that an inverse has been applied correctly.`,
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
    // NEW capstone section: obj10
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        ]
    },
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

    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:sectionsContent.faq.title,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Inverse Trigonometric Functions</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"

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