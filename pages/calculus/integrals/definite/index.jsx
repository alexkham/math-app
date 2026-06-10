

// tables-optimized: v4 | 2026-05-24 | 2 tables (obj1 aggregation, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "definite integral",
  "definite integral definition",
  "Riemann sum",
  "area under curve",
  "signed area integral",
  "integral notation",
  "definite integral properties",
  "integral bounds",
  "evaluate definite integral",
  "average value function",
  "integral additivity",
  "definite integral calculus",
  "Riemann sum limit",
  "area between curve and axis"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj1 — aggregation: choices of sample point for Riemann sums
const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Sample point choice</th>
      <th style="${tableHeaders.aggregation}">Formula for x<sub>i</sub><sup>*</sup></th>
      <th style="${tableHeaders.aggregation}">Resulting Riemann sum</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Left endpoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>i</sub><sup>*</sup> = x<sub>i−1</sub> &nbsp;(left edge of i-th subinterval)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">left Riemann sum — rectangle heights f(x<sub>i−1</sub>)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Right endpoint</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x<sub>i</sub><sup>*</sup> = x<sub>i</sub> &nbsp;(right edge of i-th subinterval)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">right Riemann sum — rectangle heights f(x<sub>i</sub>)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Midpoint</td>
      <td style="padding: 12px 15px; color: #34495e;">x<sub>i</sub><sup>*</sup> = (x<sub>i−1</sub> + x<sub>i</sub>) / 2</td>
      <td style="padding: 12px 15px; color: #34495e;">midpoint Riemann sum — rectangle heights at the center of each subinterval</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: three conceptual lenses on the definite integral
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Lens</th>
      <th style="${tableHeaders.summary}">Defining expression</th>
      <th style="${tableHeaders.summary}">What it gives</th>
      <th style="${tableHeaders.summary}">Geometric picture</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Riemann sum (limit definition)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">lim<sub>n → ∞</sub> Σ<sub>i=1</sub><sup>n</sup> f(x<sub>i</sub><sup>*</sup>) Δx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the rigorous construction — what the integral fundamentally is</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">infinitely many rectangles becoming infinitesimally thin</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Signed area</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫<sub>a</sub><sup>b</sup> f(x) dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a single number measuring net accumulation over [a, b]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">area above the x-axis minus area below</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Average value</td>
      <td style="padding: 12px 15px; color: #34495e;">(1 / (b − a)) · ∫<sub>a</sub><sup>b</sup> f(x) dx</td>
      <td style="padding: 12px 15px; color: #34495e;">the mean output of f over [a, b]</td>
      <td style="padding: 12px 15px; color: #34495e;">height of a rectangle on [a, b] whose area equals the area under f</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/definite ─────────────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Definite Integral](!/calculus/definitions#definite_integral) — $\\int_a^b f(x)\\,dx$, a number representing accumulated quantity
// - [Riemann Sum](!/calculus/definitions#riemann_sum) — the approximating sum whose limit is the integral
// - [Bounds of Integration](!/calculus/definitions#bounds_of_integration) — where accumulation starts ($a$) and ends ($b$)
// - [Signed Area](!/calculus/definitions#signed_area) — positive above the axis, negative below
// - [Average Value of a Function](!/calculus/definitions#average_value_of_a_function) — $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$
// - [Integrand](!/calculus/definitions#integrand) — the function being accumulated`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `The Riemann Sum Construction`,
//     content: `
// The definite integral arises as a limit of approximating sums.

// Partition the interval $[a, b]$ into $n$ subintervals of width $\\Delta x = (b - a)/n$. In each subinterval, choose a sample point $x_i^*$ and form the rectangle with height $f(x_i^*)$ and width $\\Delta x$. The total area of these rectangles is the Riemann sum:

// $$S_n = \\sum_{i=1}^{n} f(x_i^*) \\Delta x$$

// As $n \\to \\infty$ and the rectangles become infinitely thin, the Riemann sum approaches the definite integral:

// $$\\int_a^b f(x)\\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x$$

// The choice of sample points—left endpoints, right endpoints, midpoints—affects individual Riemann sums but not the limit, provided $f$ is integrable.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj2: {
//     title: `Notation and Meaning`,
//     content: `
// The definite integral

// $$\\int_a^b f(x)\\, dx$$

// consists of several components. The lower limit $a$ and upper limit $b$ bound the interval of integration. The integrand $f(x)$ specifies what is being accumulated. The differential $dx$ indicates the variable of integration.

// The result is a number, not a function. The variable $x$ is a dummy variable—a placeholder that disappears after integration. The expressions

// $$\\int_0^1 t^2\\, dt \\qquad \\int_0^1 u^2\\, du \\qquad \\int_0^1 x^2\\, dx$$

// all represent the same value: $1/3$.


//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj3: {
//     title: `Signed Area Interpretation`,
//     content: `
// The definite integral computes area with sign.

// Where $f(x) > 0$, the region between the curve and the $x$-axis lies above the axis and contributes positive area. Where $f(x) < 0$, the region lies below the axis and contributes negative area.

// The integral sums these signed contributions:

// $$\\int_a^b f(x)\\, dx = (\\text{area above}) - (\\text{area below})$$

// This means the integral can be zero even when substantial area exists—positive and negative regions may cancel. It can also be negative when the curve lies predominantly below the axis.

// To find total unsigned area, integrate the absolute value:

// $$\\text{Total area} = \\int_a^b |f(x)|\\, dx$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj4: {
//     title: `Properties of Definite Integrals`,
//     content: `
// Definite integrals satisfy several fundamental properties.

// **Additivity over intervals:**

// $$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$

// **Reversing limits negates the integral:**

// $$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$

// **Zero-width interval:**

// $$\\int_a^a f(x)\\, dx = 0$$

// **Comparison:** If $f(x) \\leq g(x)$ on $[a, b]$, then

// $$\\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj5: {
//     title: `Linearity`,
//     content: `
// Definite integrals respect addition and scalar multiplication.

// **Sum rule:**

// $$\\int_a^b [f(x) + g(x)]\\, dx = \\int_a^b f(x)\\, dx + \\int_a^b g(x)\\, dx$$

// **Constant multiple rule:**

// $$\\int_a^b c \\cdot f(x)\\, dx = c \\int_a^b f(x)\\, dx$$

// These [rules](!/calculus/integrals/rules) allow complex integrands to be broken into simpler pieces, each integrated separately and then combined.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj6: {
//     title: `Computing Definite Integrals`,
//     content: `
// Direct computation via Riemann sums is tedious. The Fundamental Theorem of Calculus provides the shortcut.

// If $F$ is any antiderivative of $f$—meaning $F'(x) = f(x)$—then:

// $$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

// This result, detailed on the [rules](!/calculus/integrals/rules) page, transforms integration from a limiting process into a two-step procedure: find an antiderivative, then evaluate at the endpoints.

// The notation $F(x) \\Big|_a^b$ or $[F(x)]_a^b$ denotes the evaluation $F(b) - F(a)$.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj7: {
//     title: `Average Value of a Function`,
//     content: `
// The average value of $f$ on the interval $[a, b]$ is:

// $$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\, dx$$

// This generalizes the familiar average of discrete values. The integral computes the total, and division by the interval length yields the mean.

// Geometrically, $f_{\\text{avg}}$ is the height of a rectangle with base $[a, b]$ whose area equals the area under the curve. The Mean Value Theorem for Integrals guarantees that a continuous function actually attains this average value at some point $c$ in $(a, b)$:

// $$f(c) = f_{\\text{avg}}$$
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   },
//   obj8: {
//     title: `Summary: Three Lenses on the Definite Integral`,
//     content: `
// The sections above introduce the definite integral from three angles: as the limit of Riemann sums (the construction), as signed area between a curve and the x-axis (the geometric meaning), and as a way to define the average value of a function on an interval (a derived use). The table below collects these three lenses together — each is a valid perspective, and each is useful in a different setting. Computing a definite integral in practice usually relies on the Fundamental Theorem of Calculus, detailed on the [rules](!/calculus/integrals/rules) page.
// `,
//     before: ``,
//     after: ``,
//     link: ``
//   }
// };


// formulas-optimized: v1 | 2026-06-09 | 2 callouts (obj3, obj7)
const sectionsContent = {
  // ─── /calculus/integrals/definite ─────────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Definite Integral](!/calculus/definitions#definite_integral) — $\\int_a^b f(x)\\,dx$, a number representing accumulated quantity
- [Riemann Sum](!/calculus/definitions#riemann_sum) — the approximating sum whose limit is the integral
- [Bounds of Integration](!/calculus/definitions#bounds_of_integration) — where accumulation starts ($a$) and ends ($b$)
- [Signed Area](!/calculus/definitions#signed_area) — positive above the axis, negative below
- [Average Value of a Function](!/calculus/definitions#average_value_of_a_function) — $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$
- [Integrand](!/calculus/definitions#integrand) — the function being accumulated`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `The Riemann Sum Construction`,
    content: `
The definite integral arises as a limit of approximating sums.

Partition the interval $[a, b]$ into $n$ subintervals of width $\\Delta x = (b - a)/n$. In each subinterval, choose a sample point $x_i^*$ and form the rectangle with height $f(x_i^*)$ and width $\\Delta x$. The total area of these rectangles is the Riemann sum:

$$S_n = \\sum_{i=1}^{n} f(x_i^*) \\Delta x$$

As $n \\to \\infty$ and the rectangles become infinitely thin, the Riemann sum approaches the definite integral:

$$\\int_a^b f(x)\\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\Delta x$$

The choice of sample points—left endpoints, right endpoints, midpoints—affects individual Riemann sums but not the limit, provided $f$ is integrable.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Notation and Meaning`,
    content: `
The definite integral

$$\\int_a^b f(x)\\, dx$$

consists of several components. The lower limit $a$ and upper limit $b$ bound the interval of integration. The integrand $f(x)$ specifies what is being accumulated. The differential $dx$ indicates the variable of integration.

The result is a number, not a function. The variable $x$ is a dummy variable—a placeholder that disappears after integration. The expressions

$$\\int_0^1 t^2\\, dt \\qquad \\int_0^1 u^2\\, du \\qquad \\int_0^1 x^2\\, dx$$

all represent the same value: $1/3$.


 @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Signed Area Interpretation`,
    content: `
The definite integral computes area with sign.

Where $f(x) > 0$, the region between the curve and the $x$-axis lies above the axis and contributes positive area. Where $f(x) < 0$, the region lies below the axis and contributes negative area.

The integral sums these signed contributions:

$$\\int_a^b f(x)\\, dx = (\\text{area above}) - (\\text{area below})$$

This means the integral can be zero even when substantial area exists—positive and negative regions may cancel. It can also be negative when the curve lies predominantly below the axis.

To find total unsigned area, integrate the absolute value:

@academic[formula_callout:Total Unsigned Area
$$\\text{Total area} = \\int_a^b |f(x)|\\, dx$$
/calculus/integrals/formulas#total_unsigned_area]@

@academic[formulas_link:Browse all integral formulas
/calculus/integrals/formulas]@
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Properties of Definite Integrals`,
    content: `
Definite integrals satisfy several fundamental properties.

**Additivity over intervals:**

$$\\int_a^b f(x)\\, dx + \\int_b^c f(x)\\, dx = \\int_a^c f(x)\\, dx$$

**Reversing limits negates the integral:**

$$\\int_a^b f(x)\\, dx = -\\int_b^a f(x)\\, dx$$

**Zero-width interval:**

$$\\int_a^a f(x)\\, dx = 0$$

**Comparison:** If $f(x) \\leq g(x)$ on $[a, b]$, then

$$\\int_a^b f(x)\\, dx \\leq \\int_a^b g(x)\\, dx$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Linearity`,
    content: `
Definite integrals respect addition and scalar multiplication.

**Sum rule:**

$$\\int_a^b [f(x) + g(x)]\\, dx = \\int_a^b f(x)\\, dx + \\int_a^b g(x)\\, dx$$

**Constant multiple rule:**

$$\\int_a^b c \\cdot f(x)\\, dx = c \\int_a^b f(x)\\, dx$$

These [rules](!/calculus/integrals/rules) allow complex integrands to be broken into simpler pieces, each integrated separately and then combined.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Computing Definite Integrals`,
    content: `
Direct computation via Riemann sums is tedious. The Fundamental Theorem of Calculus provides the shortcut.

If $F$ is any antiderivative of $f$—meaning $F'(x) = f(x)$—then:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

This result, detailed on the [rules](!/calculus/integrals/rules) page, transforms integration from a limiting process into a two-step procedure: find an antiderivative, then evaluate at the endpoints.

The notation $F(x) \\Big|_a^b$ or $[F(x)]_a^b$ denotes the evaluation $F(b) - F(a)$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Average Value of a Function`,
    content: `
The average value of $f$ on the interval $[a, b]$ is:

@academic[formula_callout:Average Value of a Function
$$f_{\\text{avg}} = \\frac{1}{b - a} \\int_a^b f(x)\\, dx$$
/calculus/integrals/formulas#average_value_of_a_function]@

@academic[formulas_link:Browse all integral formulas
/calculus/integrals/formulas]@

This generalizes the familiar average of discrete values. The integral computes the total, and division by the interval length yields the mean.

Geometrically, $f_{\\text{avg}}$ is the height of a rectangle with base $[a, b]$ whose area equals the area under the curve. The Mean Value Theorem for Integrals guarantees that a continuous function actually attains this average value at some point $c$ in $(a, b)$:

$$f(c) = f_{\\text{avg}}$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Summary: Three Lenses on the Definite Integral`,
    content: `
The sections above introduce the definite integral from three angles: as the limit of Riemann sums (the construction), as signed area between a curve and the x-axis (the geometric meaning), and as a way to define the average value of a function on an interval (a derived use). The table below collects these three lenses together — each is a valid perspective, and each is useful in a different setting. Computing a definite integral in practice usually relies on the Fundamental Theorem of Calculus, detailed on the [rules](!/calculus/integrals/rules) page.
`,
    before: ``,
    after: ``,
    link: ``
  }
};



const introContent = {
  title: `From Sums to Areas`,
  content: `
The definite integral answers a concrete question: what is the total accumulated quantity between two points? Geometrically, this corresponds to the area between a curve and the horizontal axis—but with a crucial refinement. Regions below the axis contribute negative area, making the integral a signed quantity.

The notation

$$\\int_a^b f(x)\\, dx$$

specifies the integrand $f(x)$, the variable of integration $x$, and the bounds from $a$ to $b$. The result is a single number, not a function. This number represents net accumulation: the sum of infinitely many infinitesimal contributions $f(x)\\, dx$ as $x$ traverses the interval.

Riemann sums provide the rigorous foundation. Approximate the region with rectangles, compute their total area, and take the limit as the rectangles become infinitely thin. What emerges is not an approximation but an exact value—the definite integral.
`
};



const faqQuestions = {
  obj1: {
    question: "What is a Riemann sum?",
    answer: "A Riemann sum approximates a definite integral by partitioning the interval into subintervals, forming rectangles with heights f(x*) and width Δx, then summing their areas. As the number of rectangles approaches infinity, the Riemann sum approaches the definite integral.",
    sectionId: "1"
  },
  obj2: {
    question: "What does definite integral notation mean?",
    answer: "In ∫ₐᵇ f(x) dx, the lower limit a and upper limit b bound the interval, f(x) is the integrand being accumulated, and dx indicates the variable of integration. The result is a number, not a function. The variable x is a dummy variable that disappears after integration.",
    sectionId: "2"
  },
  obj3: {
    question: "What is signed area in integration?",
    answer: "The definite integral computes area with sign: regions above the x-axis contribute positive area, regions below contribute negative area. The integral sums these signed contributions, so it can be zero (when areas cancel) or negative (when more area lies below the axis).",
    sectionId: "3"
  },
  obj4: {
    question: "What are the properties of definite integrals?",
    answer: "Key properties include: additivity over intervals (∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ), reversing limits negates the integral (∫ₐᵇ = −∫ᵇₐ), zero-width intervals give zero (∫ₐᵃ = 0), and comparison (if f ≤ g then ∫f ≤ ∫g).",
    sectionId: "4"
  },
  obj5: {
    question: "What is the linearity property of integrals?",
    answer: "Definite integrals respect addition and scalar multiplication: ∫[f + g] = ∫f + ∫g (sum rule) and ∫c·f = c·∫f (constant multiple rule). This allows complex integrands to be broken into simpler pieces, integrated separately, then combined.",
    sectionId: "5"
  },
  obj6: {
    question: "How do you compute a definite integral?",
    answer: "The Fundamental Theorem of Calculus provides the method: find an antiderivative F where F'(x) = f(x), then evaluate ∫ₐᵇ f(x) dx = F(b) − F(a). This transforms integration from a limiting process into finding antiderivatives and evaluating at endpoints.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the average value of a function?",
    answer: "The average value of f on [a,b] is f_avg = (1/(b−a))∫ₐᵇ f(x) dx. Geometrically, it's the height of a rectangle with base [a,b] whose area equals the area under the curve. The Mean Value Theorem guarantees f attains this average at some point c in (a,b).",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Definite Integrals",
    "description": "Learn definite integrals: Riemann sum construction, integral notation, signed area interpretation, properties, linearity, computing with antiderivatives, and average value of a function.",
    "url": "https://www.learnmathclass.com/calculus/integrals/definite",
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
      "name": "Definite Integrals"
    },
    "teaches": [
      "Riemann sum construction and limit definition",
      "Definite integral notation and meaning",
      "Signed area interpretation",
      "Properties: additivity, reversing limits, comparison",
      "Linearity: sum rule and constant multiple rule",
      "Average value of a function",
      "Three conceptual lenses on the definite integral"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Definite Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals/definite"
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


    return {
      props: {
        sectionsContent,
        introContent,
        obj1Table,
        summaryTable,
        faqQuestions,
        schemas,
        seoData: {
          title: "Definite Integrals: Riemann Sums & Properties | Learn Math Class",
          description: "Learn definite integrals: Riemann sum construction, integral notation, signed area interpretation, properties, linearity, computing with antiderivatives, and average value of a function.",
          keywords: keyWords.join(", "),
          url: "/calculus/integrals/definite",
          name: "Definite Integrals"
        },
      }
    }

   }
export default function PageTemplate({seoData, sectionsContent, introContent, obj1Table, summaryTable, faqQuestions, schemas}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
          <div key={'obj1-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj1Table }} />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Definite Integrals</h1>
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