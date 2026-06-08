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
      answer: "Trigonometric functions are periodic and therefore not one-to-one on their full domains — each output value corresponds to infinitely many input angles. To define an inverse, the domain must be restricted to an interval where the function is strictly monotonic (always increasing or always decreasing) and covers its full range exactly once. This guarantees each output has exactly one corresponding input."
    },
    obj2: {
      question: "What are the domains and ranges of the inverse trig functions?",
      answer: "Arcsine has domain [-1, 1] and range [-π/2, π/2]. Arccosine has domain [-1, 1] and range [0, π]. Arctangent has domain (-∞, ∞) and range (-π/2, π/2). Each inverse function returns a unique angle — called the principal value — from its specific range."
    },
    obj3: {
      question: "What is the difference between sin⁻¹(x) and 1/sin(x)?",
      answer: "The notation sin⁻¹(x) means the inverse sine function (arcsine), which returns the angle whose sine is x. The expression 1/sin(x) is the reciprocal of sine, which equals csc(x). These are completely different operations. The superscript -1 denotes function inversion, not exponentiation. To avoid confusion, many sources use arcsin(x) instead of sin⁻¹(x)."
    },
    obj4: {
      question: "How do you evaluate compositions like sin(arccos(x))?",
      answer: "Draw a right triangle where the known inverse function determines one side relationship. For sin(arccos(x)), let θ = arccos(x), so cosθ = x = adjacent/hypotenuse with hypotenuse 1. The adjacent side is x, the opposite side is √(1-x²) by the Pythagorean theorem, so sin(arccos(x)) = √(1-x²). This geometric method works for any composition."
    },
    obj5: {
      question: "How are inverse trigonometric functions used to find angles?",
      answer: "Inverse trigonometric functions recover an angle when a ratio is known. Given sinθ = 3/5, the inverse gives θ = arcsin(3/5) ≈ 36.87°. The inverse returns one principal value; if additional solutions are needed, use the reference angle and quadrant analysis to find all angles that produce the same ratio."
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
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": { "@type": "Answer", "text": faqQuestions[key].answer }
      }))
    }
  }

//     const sectionsContent={

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

// **Domain of $\\arcsin$:** $[-1, 1]$ — the range of sine. Inputs outside this interval have no corresponding angle.

// **Range of $\\arcsin$:** $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ — outputs are always in Quadrant I (for positive inputs), Quadrant IV expressed as negative angles (for negative inputs), or zero.

// Exact values at standard inputs:

// - $\\arcsin(0) = 0$
// - $\\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$
// - $\\arcsin\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$
// - $\\arcsin\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}$
// - $\\arcsin(1) = \\frac{\\pi}{2}$
// - $\\arcsin\\left(-\\frac{1}{2}\\right) = -\\frac{\\pi}{6}$
// - $\\arcsin(-1) = -\\frac{\\pi}{2}$

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

// **Domain of $\\arccos$:** $[-1, 1]$.

// **Range of $\\arccos$:** $[0, \\pi]$ — outputs are always in Quadrant I (for positive inputs) or Quadrant II (for negative inputs).

// Exact values:

// - $\\arccos(1) = 0$
// - $\\arccos\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}$
// - $\\arccos\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$
// - $\\arccos\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$
// - $\\arccos(0) = \\frac{\\pi}{2}$
// - $\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$
// - $\\arccos(-1) = \\pi$

// A fundamental relationship connects arcsine and arccosine:

// $$\\arcsin(x) + \\arccos(x) = \\frac{\\pi}{2} \\quad \\text{for all } x \\in [-1, 1]$$

// This is the inverse-function version of the cofunction [identity](!/trigonometry/identities) $\\sin\\theta = \\cos\\left(\\frac{\\pi}{2} - \\theta\\right)$. It means knowing one of $\\arcsin(x)$ or $\\arccos(x)$ immediately gives the other.

// The graph of $y = \\arccos(x)$ is a decreasing curve from $(−1, \\pi)$ to $(1, 0)$, passing through $(0, \\frac{\\pi}{2})$. It is the reflection of the restricted cosine graph over $y = x$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Arctangent Function`,
//     content: `The tangent function is restricted to $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, where it is strictly increasing and maps onto $(-\\infty, \\infty)$. The inverse is arctangent:

// $$\\arctan(x) = \\theta \\quad \\text{means} \\quad \\tan(\\theta) = x \\quad \\text{with} \\quad \\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$$

// **Domain of $\\arctan$:** $(-\\infty, \\infty)$ — all real numbers, since tangent's range is unbounded.

// **Range of $\\arctan$:** $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ — an open interval, since tangent approaches but never reaches $\\pm\\frac{\\pi}{2}$ on its restricted domain.

// Exact values:

// - $\\arctan(0) = 0$
// - $\\arctan\\left(\\frac{\\sqrt{3}}{3}\\right) = \\frac{\\pi}{6}$
// - $\\arctan(1) = \\frac{\\pi}{4}$
// - $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$
// - $\\arctan(-1) = -\\frac{\\pi}{4}$
// - $\\arctan(-\\sqrt{3}) = -\\frac{\\pi}{3}$

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

// In practice, these are rarely evaluated directly. When an expression involves $\\text{arcsec}(x)$, it is usually converted to $\\arccos\\left(\\frac{1}{x}\\right)$ for computation. The same applies to arccosecant via arcsine and arccotangent via arctangent. Their primary role is theoretical — they appear in integral formulas in calculus (for example, $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx = \\text{arcsec}|x| + C$) and in certain [identity](!/trigonometry/identities) derivations.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Notation: $\\sin^{-1}(x)$ vs $\\frac{1}{\\sin(x)}$`,
//     content: `The notation $\\sin^{-1}(x)$ is standard for the inverse sine function — it means the same thing as $\\arcsin(x)$. This is a potential source of serious confusion because of how the superscript $-1$ is used elsewhere in trigonometry.

// When we write $\\sin^2(x)$, the exponent 2 means squaring: $\\sin^2(x) = (\\sin(x))^2$. By this pattern, $\\sin^{-1}(x)$ should mean $(\\sin(x))^{-1} = \\frac{1}{\\sin(x)} = \\csc(x)$. But it does not. In the specific case of the exponent $-1$, the notation is hijacked to mean the inverse function rather than the reciprocal.

// This is an inconsistency in mathematical notation, not a logical rule. The exponent $-1$ on a function name means "inverse function" by convention, overriding the algebraic meaning of raising to the power $-1$. It applies to all six trigonometric functions: $\\cos^{-1}(x) = \\arccos(x)$, $\\tan^{-1}(x) = \\arctan(x)$, and so on.

// To avoid ambiguity:

// - $\\sin^{-1}(x)$ or $\\arcsin(x)$ = the inverse function (returns an angle)
// - $(\\sin(x))^{-1}$ or $\\csc(x)$ = the reciprocal (returns a number)
// - $\\frac{1}{\\sin(x)}$ = the reciprocal, written unambiguously

// The $\\arcsin$ / $\\arccos$ / $\\arctan$ notation eliminates the confusion entirely and is preferred in any context where the $-1$ superscript might be misread. Many textbooks and scientific publications use the "arc" notation exclusively for this reason.

// The two interpretations of the −1 superscript — inverse function vs. reciprocal — contrast cleanly in the side-by-side table below.`,
//     before: ``,
//     after: ``,
//     link: ``,
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

// **$y = \\arcsin(x)$:** An increasing S-shaped curve.

// - Domain: $[-1, 1]$ (horizontal extent)
// - Range: $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ (vertical extent)
// - Passes through: $(-1, -\\frac{\\pi}{2})$, $(0, 0)$, $(1, \\frac{\\pi}{2})$
// - Increasing throughout — reflects the increasing behavior of sine on $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$

// **$y = \\arccos(x)$:** A decreasing curve.

// - Domain: $[-1, 1]$
// - Range: $[0, \\pi]$
// - Passes through: $(-1, \\pi)$, $(0, \\frac{\\pi}{2})$, $(1, 0)$
// - Decreasing throughout — reflects the decreasing behavior of cosine on $[0, \\pi]$

// **$y = \\arctan(x)$:** An increasing S-shaped curve with horizontal asymptotes.

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
    content: `A function can have an inverse only if it is one-to-one: each output corresponds to exactly one input. The trigonometric functions, being periodic, are emphatically not one-to-one on their full domains. The equation $\\sin(x) = \\frac{1}{2}$ is satisfied by $\\frac{\\pi}{6}$, $\\frac{5\\pi}{6}$, $\\frac{\\pi}{6} + 2\\pi$, $\\frac{5\\pi}{6} + 2\\pi$, and infinitely many others. Defining "$\\sin^{-1}\\left(\\frac{1}{2}\\right)$" as all of these would not produce a function — a function must assign a single output to each input.

The solution is to restrict each trigonometric function to an interval where it is strictly monotonic — always increasing or always decreasing — and therefore one-to-one. On such an interval, the horizontal line test is passed, and an inverse function exists. The restricted function must still cover the entire range of the original, so that the inverse is defined for every relevant input.

The choice of restriction interval is a convention, universally agreed upon. Different intervals could work (sine is also one-to-one on $\\left[\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right]$, for instance), but the standard choices have been selected for mathematical convenience — they are centered at or near the origin and produce the most natural behavior for compositions and calculus applications.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Arcsine Function`,
    content: `The sine function is restricted to $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, where it is strictly increasing and maps onto its full range $[-1, 1]$. The inverse of this restricted sine is called arcsine:

$$\\arcsin(x) = \\theta \\quad \\text{means} \\quad \\sin(\\theta) = x \\quad \\text{with} \\quad \\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$

**Domain of $\\arcsin$:** $[-1, 1]$ — the range of sine. Inputs outside this interval have no corresponding angle.

**Range of $\\arcsin$:** $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ — outputs are always in Quadrant I (for positive inputs), Quadrant IV expressed as negative angles (for negative inputs), or zero.

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

$$\\arccos(x) = \\theta \\quad \\text{means} \\quad \\cos(\\theta) = x \\quad \\text{with} \\quad \\theta \\in [0, \\pi]$$

**Domain of $\\arccos$:** $[-1, 1]$.

**Range of $\\arccos$:** $[0, \\pi]$ — outputs are always in Quadrant I (for positive inputs) or Quadrant II (for negative inputs).

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

The graph of $y = \\arccos(x)$ is a decreasing curve from $(−1, \\pi)$ to $(1, 0)$, passing through $(0, \\frac{\\pi}{2})$. It is the reflection of the restricted cosine graph over $y = x$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Arctangent Function`,
    content: `The tangent function is restricted to $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$, where it is strictly increasing and maps onto $(-\\infty, \\infty)$. The inverse is arctangent:

$$\\arctan(x) = \\theta \\quad \\text{means} \\quad \\tan(\\theta) = x \\quad \\text{with} \\quad \\theta \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$$

**Domain of $\\arctan$:** $(-\\infty, \\infty)$ — all real numbers, since tangent's range is unbounded.

**Range of $\\arctan$:** $\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ — an open interval, since tangent approaches but never reaches $\\pm\\frac{\\pi}{2}$ on its restricted domain.

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

In practice, these are rarely evaluated directly. When an expression involves $\\text{arcsec}(x)$, it is usually converted to $\\arccos\\left(\\frac{1}{x}\\right)$ for computation. The same applies to arccosecant via arcsine and arccotangent via arctangent. Their primary role is theoretical — they appear in integral formulas in calculus (for example, $\\int \\frac{1}{x\\sqrt{x^2 - 1}}\\,dx = \\text{arcsec}|x| + C$) and in certain [identity](!/trigonometry/identities) derivations.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Notation: $\\sin^{-1}(x)$ vs $\\frac{1}{\\sin(x)}$`,
    content: `The notation $\\sin^{-1}(x)$ is standard for the inverse sine function — it means the same thing as $\\arcsin(x)$. This is a potential source of serious confusion because of how the superscript $-1$ is used elsewhere in trigonometry.

When we write $\\sin^2(x)$, the exponent 2 means squaring: $\\sin^2(x) = (\\sin(x))^2$. By this pattern, $\\sin^{-1}(x)$ should mean $(\\sin(x))^{-1} = \\frac{1}{\\sin(x)} = \\csc(x)$. But it does not. In the specific case of the exponent $-1$, the notation is hijacked to mean the inverse function rather than the reciprocal.

This is an inconsistency in mathematical notation, not a logical rule. The exponent $-1$ on a function name means "inverse function" by convention, overriding the algebraic meaning of raising to the power $-1$. It applies to all six trigonometric functions: $\\cos^{-1}(x) = \\arccos(x)$, $\\tan^{-1}(x) = \\arctan(x)$, and so on.

To avoid ambiguity:

- $\\sin^{-1}(x)$ or $\\arcsin(x)$ = the inverse function (returns an angle)
- $(\\sin(x))^{-1}$ or $\\csc(x)$ = the reciprocal (returns a number)
- $\\frac{1}{\\sin(x)}$ = the reciprocal, written unambiguously

The $\\arcsin$ / $\\arccos$ / $\\arctan$ notation eliminates the confusion entirely and is preferred in any context where the $-1$ superscript might be misread. Many textbooks and scientific publications use the "arc" notation exclusively for this reason.

The two interpretations of the −1 superscript — inverse function vs. reciprocal — contrast cleanly in the side-by-side table below.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Evaluating Inverse Trigonometric Functions`,
    content: `Evaluating an inverse trigonometric function means answering: "What angle in the restricted range has this function value?"

**For standard inputs** — the values $0, \\pm\\frac{1}{2}, \\pm\\frac{\\sqrt{2}}{2}, \\pm\\frac{\\sqrt{3}}{2}, \\pm 1$ — the answer comes from the [unit circle](!/trigonometry/unit-circle) values, filtered through the range restriction.

$\\arcsin\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{3}$ because $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$ and $\\frac{\\pi}{3} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.

$\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$ because $\\cos\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$ and $\\frac{3\\pi}{4} \\in [0, \\pi]$.

$\\arctan(-1) = -\\frac{\\pi}{4}$ because $\\tan\\left(-\\frac{\\pi}{4}\\right) = -1$ and $-\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.

**A common trap:** $\\arcsin\\left(\\frac{1}{2}\\right) \\neq \\frac{5\\pi}{6}$, even though $\\sin\\left(\\frac{5\\pi}{6}\\right) = \\frac{1}{2}$. The angle $\\frac{5\\pi}{6}$ is outside the range $\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$, so it is not the arcsine output. The correct answer is $\\frac{\\pi}{6}$.

**For non-standard inputs** — values like $\\arcsin(0.7)$ or $\\arctan(3.5)$ — a calculator is required. Ensure the calculator is in the correct angle mode ([degrees or radians](!/trigonometry/degrees-radians)) for the desired output format. Most calculators return radians by default for inverse trigonometric functions.

The standard arcsine and arccosine values across the shared input domain $[-1, 1]$ collect into a single reference table, where the cofunction sum identity $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$ is visible row-by-row.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Compositions of Trigonometric and Inverse Trigonometric Functions`,
    content: `Compositions like $\\sin(\\arccos(x))$ or $\\arcsin(\\sin(x))$ combine a trigonometric function with an inverse. The behavior of these compositions depends on the direction and on whether the input falls within the restricted range.

**Direct compositions** (function applied to its own inverse):

$$\\sin(\\arcsin(x)) = x \\quad \\text{for all } x \\in [-1, 1]$$
$$\\cos(\\arccos(x)) = x \\quad \\text{for all } x \\in [-1, 1]$$
$$\\tan(\\arctan(x)) = x \\quad \\text{for all } x \\in (-\\infty, \\infty)$$

These hold universally within the domain — applying a function to its inverse always recovers the input.

**Reverse compositions** (inverse applied to its own function):

$$\\arcsin(\\sin(x)) = x \\quad \\text{only if } x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$$

If $x$ is outside this range, the arcsine "folds" the result back into the restricted range. For example, $\\arcsin\\left(\\sin\\left(\\frac{5\\pi}{6}\\right)\\right) = \\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$, not $\\frac{5\\pi}{6}$. The same caution applies to $\\arccos(\\cos(x))$ (valid only on $[0, \\pi]$) and $\\arctan(\\tan(x))$ (valid only on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$).

**Mixed compositions** (different functions composed):

$\\sin(\\arccos(x))$, $\\cos(\\arctan(x))$, $\\tan(\\arcsin(x))$, etc. These are simplified using a right triangle construction:

To evaluate $\\sin(\\arccos(x))$: let $\\theta = \\arccos(x)$, so $\\cos\\theta = x = \\frac{x}{1}$. Construct a right triangle with adjacent side $x$ and hypotenuse $1$. The opposite side is $\\sqrt{1 - x^2}$ (by the Pythagorean theorem). Therefore:

$$\\sin(\\arccos(x)) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\sqrt{1 - x^2}$$

This is valid for $x \\in [-1, 1]$, and the result is always non-negative because $\\arccos(x) \\in [0, \\pi]$, where sine is non-negative.

To evaluate $\\cos(\\arctan(x))$: let $\\theta = \\arctan(x)$, so $\\tan\\theta = x = \\frac{x}{1}$. Opposite $= x$, adjacent $= 1$, hypotenuse $= \\sqrt{1 + x^2}$. Therefore:

$$\\cos(\\arctan(x)) = \\frac{1}{\\sqrt{1 + x^2}}$$

The triangle method works for every mixed composition. It converts the problem from inverse trigonometric territory back to [right triangle](!/trigonometry/right-triangle) ratios, using the Pythagorean [identity](!/trigonometry/identities) implicitly to find the missing side.

All six mixed compositions — built from the right-triangle method demonstrated above — collect into the reference table below, with the algebraic form and validity domain for each.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Graphs of Inverse Trigonometric Functions`,
    content: `The graph of each inverse trigonometric function is the reflection of the corresponding restricted trigonometric graph over the line $y = x$. This reflection swaps the roles of input and output — the domain of the original becomes the range of the inverse, and vice versa.

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

All three primary inverse functions are continuous on their domains. Arcsine and arccosine have bounded domains (closed intervals), so their graphs are finite curves with endpoints. Arctangent, with its infinite domain, extends without bound horizontally but is squeezed vertically between the asymptotes — a distinctive shape that appears in probability (the Cauchy distribution), physics (the arctangent potential), and many other contexts.`,
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

    }

  }



  const introContent = {
  id: "intro",
  title: `Recovering Angles from Known Ratios`,
  content: `The six trigonometric functions take an angle and return a number. The inverse trigonometric functions reverse this: they take a number and return an angle. Given that $\\sin(\\theta) = \\frac{1}{2}$, what is $\\theta$? The answer is not unique — infinitely many angles satisfy this equation, as the [equations](!/trigonometry/equations) page makes clear. But an inverse function must return exactly one value. This forces a restriction: each trigonometric function must be confined to an interval where it is strictly monotonic (always increasing or always decreasing) before an inverse can be defined.

The resulting functions — $\\arcsin$, $\\arccos$, $\\arctan$, and their reciprocal counterparts — are not merely notational conveniences. They appear as solutions to [equations](!/trigonometry/equations), as building blocks in compositions that simplify using the Pythagorean [identity](!/trigonometry/identities), and as essential tools in calculus (where they arise as antiderivatives of certain algebraic expressions). Their [graphs](!/trigonometry/graphs) are reflections of the restricted trigonometric graphs over the line $y = x$, and their domains and ranges are dictated entirely by the [properties](!/trigonometry/properties) — specifically the monotonicity — of the original functions.

`,
}




   return {
      props:{
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

export default function InverseFunctionsPage({
  seoData,
  sectionsContent,
  introContent,
  obj6Table,
  obj7Table,
  obj8Table,
  summaryTable,
  faqQuestions,
  schemas,
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
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
          <div key={'obj8-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj8Table }} />,
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