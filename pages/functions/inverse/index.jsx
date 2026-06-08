
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
    'inverse functions',
    'finding inverse functions',
    'f inverse notation',
    'inverse function graph',
    'horizontal line test',
    'one-to-one functions',
    'verifying inverse functions',
    'domain range swap',
    'reflection over y equals x',
    'inverse function examples',
    'restricting domain',
    'composition of inverse functions',
    'inverse function algebraically',
    'common inverse function pairs',
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj2 — comparison: inverse function vs reciprocal
  const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Notation</th>
      <th style="${tableHeaders.comparison}">What it represents</th>
      <th style="${tableHeaders.comparison}">For f(x) = 2x + 3</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f⁻¹(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the inverse function — undoes f</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x − 3) ⁄ 2</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">1 ⁄ f(x), or (f(x))⁻¹</td>
      <td style="padding: 12px 15px; color: #34495e;">the reciprocal — multiplicative inverse of the output value</td>
      <td style="padding: 12px 15px; color: #34495e;">1 ⁄ (2x + 3)</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: restrictions for common non-one-to-one functions
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Original function</th>
      <th style="${tableHeaders.aggregation}">Why it fails on its natural domain</th>
      <th style="${tableHeaders.aggregation}">Standard restriction</th>
      <th style="${tableHeaders.aggregation}">Resulting inverse</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f(x) = x²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">both x and −x give the same output</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f⁻¹(x) = √x</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f(x) = x² (alternative)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same reason — different valid choice</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, 0]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f⁻¹(x) = −√x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f(x) = sin(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">oscillates — every value repeats infinitely often</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−π⁄2, π⁄2]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f⁻¹(x) = arcsin(x)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">f(x) = cos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">oscillates</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[0, π]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f⁻¹(x) = arccos(x)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">f(x) = tan(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">oscillates between asymptotes</td>
      <td style="padding: 12px 15px; color: #34495e;">(−π⁄2, π⁄2)</td>
      <td style="padding: 12px 15px; color: #34495e;">f⁻¹(x) = arctan(x)</td>
    </tr>
  </tbody>
</table>
`

  // obj12 — aggregation (reference): common inverse pairs
  const obj12Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Function f</th>
      <th style="${tableHeaders.aggregation}">Inverse f⁻¹</th>
      <th style="${tableHeaders.aggregation}">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Linear: f(x) = mx + b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(x − b) ⁄ m</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">requires m ≠ 0</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Quadratic: x² on [0, ∞)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">requires domain restriction</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cubic: x³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∛x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">no restriction needed — already one-to-one</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Power: xⁿ on appropriate domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x^(1⁄n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">even n requires restriction; odd n does not</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exponential: aˣ (a &gt; 0, a ≠ 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">logₐ(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">special case: eˣ ↔ ln(x)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Reciprocal: 1 ⁄ x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">1 ⁄ x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">self-inverse — applying twice returns the input</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sine on [−π⁄2, π⁄2]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arcsin(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">requires restriction; domain of arcsin is [−1, 1]</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Cosine on [0, π]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arccos(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">requires restriction; domain of arccos is [−1, 1]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Tangent on (−π⁄2, π⁄2)</td>
      <td style="padding: 12px 15px; color: #34495e;">arctan(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">requires restriction; domain of arctan is ℝ</td>
    </tr>
  </tbody>
</table>
`

  // obj14 — summary capstone: how each feature of f maps to f⁻¹
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Feature of f</th>
      <th style="${tableHeaders.summary}">Corresponding feature of f⁻¹</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Point (a, b) on the graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Point (b, a) on the graph</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Domain D</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Range D</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Range R</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Domain R</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-intercept (0, c)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x-intercept (c, 0)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-intercept (c, 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">y-intercept (0, c)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Horizontal asymptote y = L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Vertical asymptote x = L</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vertical asymptote x = a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Horizontal asymptote y = a</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Increasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Increasing (direction preserved)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Decreasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Decreasing (direction preserved)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Fixed point: f(a) = a (point on y = x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Same fixed point: f⁻¹(a) = a</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Composition f ∘ f⁻¹</td>
      <td style="padding: 12px 15px; color: #34495e;">the identity: f(f⁻¹(x)) = x — and likewise f⁻¹(f(x)) = x</td>
    </tr>
  </tbody>
</table>
`
const obj11OriginalTable = `
<table style="border-collapse: collapse; margin: 16px auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; color: #34495e;">
  <thead>
    <tr style="background: #f5f7fa;">
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">x</th>
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">f(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">1</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">4</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">7</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">3</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">10</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">4</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">13</td></tr>
  </tbody>
</table>
`

const obj11InverseTable = `
<table style="border-collapse: collapse; margin: 16px auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; color: #34495e;">
  <thead>
    <tr style="background: #f5f7fa;">
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">x</th>
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">f&#8315;&#185;(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">4</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">1</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">7</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">2</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">10</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">3</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">13</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">4</td></tr>
  </tbody>
</table>
`

// const sectionsContent = {

//   obj0 : {
//   title: `Key Terms`,
//   content: `
// ## Core
 
// • [Inverse Function](!/functions/definitions#inverse_function) — reverses $f$: if $f(a) = b$ then $f^{-1}(b) = a$
// • [One-to-One Function](!/functions/definitions#one_to_one_function) — the requirement for an inverse to exist; each output traces to exactly one input
// • [Composition of Functions](!/functions/definitions#composition_of_functions) — verifies inverses: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$
 
// ## Domain–Range Swap
 
// • [Domain](!/functions/definitions#domain) — the domain of $f$ becomes the range of $f^{-1}$
// • [Range](!/functions/definitions#range) — the range of $f$ becomes the domain of $f^{-1}$
// `,
//   before: ``,
//   after: `
 
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
//   link: '',
// },
 

//   obj1: {
//     title: `What is an Inverse Function`,
//     content: `An inverse function reverses the action of the original function. If $f$ takes input $a$ and produces output $b$, then $f^{-1}$ takes input $b$ and produces output $a$.

// $$f(a) = b \\iff f^{-1}(b) = a$$

// The two functions undo each other. Applying $f$ then $f^{-1}$ returns to the starting point. Applying $f^{-1}$ then $f$ also returns to the starting point.

// Consider $f(x) = 2x$, which doubles its input. The inverse $f^{-1}(x) = x/2$ halves its input. If $f(3) = 6$, then $f^{-1}(6) = 3$. Doubling then halving — or halving then doubling — restores the original value.

// Consider $f(x) = x + 5$, which adds five. The inverse $f^{-1}(x) = x - 5$ subtracts five. Adding then subtracting five is a round trip to nowhere.

// Not every function has an inverse. The function $f(x) = x^2$ on $(-\\infty, \\infty)$ sends both $3$ and $-3$ to $9$. Given output $9$, there is no unique input to recover — the reversal is ambiguous. Functions without unique input-output pairings cannot be inverted.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Notation: f⁻¹(x) vs 1/f(x)`,
//     content: `The notation $f^{-1}(x)$ denotes the inverse function of $f$. This is not the same as $\\dfrac{1}{f(x)}$, which is the reciprocal of $f(x)$.

// Inverse function: $f^{-1}(x)$ undoes $f$. If $f(x) = 2x + 3$, then $f^{-1}(x) = \\dfrac{x - 3}{2}$.

// Reciprocal: $\\dfrac{1}{f(x)} = \\dfrac{1}{2x + 3}$.

// These are completely different functions with different meanings, different [graphs](!/functions/graphs), and different values.

// The superscript $-1$ in $f^{-1}$ is not an exponent indicating a power. It is a label indicating the inverse relationship. This notation conflicts with the convention that $x^{-1} = 1/x$, which is why confusion arises.

// When writing the reciprocal of a function, use $\\dfrac{1}{f(x)}$ or $(f(x))^{-1}$ with parentheses to clarify. Reserve $f^{-1}(x)$ exclusively for the inverse function.

// For trigonometric functions, the same notational hazard exists. The inverse sine is $\\sin^{-1}(x)$ or $\\arcsin(x)$ — not the reciprocal $\\csc(x) = 1/\\sin(x)$.

// The table below shows both notations side by side and what each one computes for the same example function.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Inverse as Reflection over y = x`,
//     content: `The [graph](!/functions/graphs) of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$.

// Every point $(a, b)$ on the graph of $f$ corresponds to a point $(b, a)$ on the graph of $f^{-1}$. The coordinates swap because input and output swap roles.

// If $f$ passes through $(2, 5)$, then $f^{-1}$ passes through $(5, 2)$. If $f$ passes through $(-1, 3)$, then $f^{-1}$ passes through $(3, -1)$.

// The line $y = x$ is the mirror. Points on this line satisfy $y = x$, so swapping coordinates leaves them unchanged — they are fixed points of the reflection.

// This geometric relationship provides a visual test. Graph a function, draw the line $y = x$, and reflect the curve across that line. The result is the graph of the inverse function (if it exists).

// The reflection also reveals features. If $f$ has a horizontal asymptote, $f^{-1}$ has a vertical asymptote at the same value. If $f$ is increasing, $f^{-1}$ is increasing. The shapes are congruent, just positioned symmetrically across $y = x$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Finding Inverse Algebraically`,
//     content: `To find the inverse of a function algebraically, solve for the input in terms of the output.

// Step 1: Write $y = f(x)$.

// Step 2: Swap $x$ and $y$.

// Step 3: Solve for $y$.

// Step 4: Write $f^{-1}(x) = $ the result.

// Example: Find the inverse of $f(x) = 3x - 7$.

// Step 1: $y = 3x - 7$

// Step 2: $x = 3y - 7$

// Step 3: $x + 7 = 3y$, so $y = \\dfrac{x + 7}{3}$

// Step 4: $f^{-1}(x) = \\dfrac{x + 7}{3}$

// Example: Find the inverse of $f(x) = \\dfrac{2x + 1}{x - 3}$.

// Step 1: $y = \\dfrac{2x + 1}{x - 3}$

// Step 2: $x = \\dfrac{2y + 1}{y - 3}$

// Step 3: $x(y - 3) = 2y + 1$, so $xy - 3x = 2y + 1$, thus $xy - 2y = 3x + 1$, giving $y(x - 2) = 3x + 1$, and $y = \\dfrac{3x + 1}{x - 2}$

// Step 4: $f^{-1}(x) = \\dfrac{3x + 1}{x - 2}$`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Domain and Range Swap`,
//     content: `The [domain](!/functions/domain) of $f$ becomes the [range](!/functions/range) of $f^{-1}$. The range of $f$ becomes the domain of $f^{-1}$.

// This swap is exact and complete. Every input of $f$ is an output of $f^{-1}$, and every output of $f$ is an input of $f^{-1}$.

// Let $f(x) = \\sqrt{x}$ with domain $[0, \\infty)$ and range $[0, \\infty)$.

// The inverse is $f^{-1}(x) = x^2$, but restricted: domain $[0, \\infty)$ and range $[0, \\infty)$.

// The full function $g(x) = x^2$ on $(-\\infty, \\infty)$ is not the inverse of $\\sqrt{x}$ — that would require negative inputs, which $\\sqrt{x}$ never produces.

// Let $f(x) = e^x$ with domain $(-\\infty, \\infty)$ and range $(0, \\infty)$.

// The inverse is $f^{-1}(x) = \\ln(x)$ with domain $(0, \\infty)$ and range $(-\\infty, \\infty)$.

// Exponentials accept all real inputs and produce only positive outputs. Logarithms accept only positive inputs and produce all real outputs. The swap is symmetric.

// When finding an inverse, always verify that the domain and range correctly swap.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Verifying Inverses via Composition`,
//     content: `Two functions are inverses if and only if their [compositions](!/functions/composition) yield the identity function — the function that returns its input unchanged.

// For $f$ and $f^{-1}$ to be inverses:

// $$(f \\circ f^{-1})(x) = f(f^{-1}(x)) = x \\quad \\text{for all } x \\text{ in the domain of } f^{-1}$$

// $$(f^{-1} \\circ f)(x) = f^{-1}(f(x)) = x \\quad \\text{for all } x \\text{ in the domain of } f$$

// Both conditions must hold.

// Verify that $f(x) = 5x - 2$ and $g(x) = \\dfrac{x + 2}{5}$ are inverses.

// $$f(g(x)) = f\\left(\\frac{x + 2}{5}\\right) = 5 \\cdot \\frac{x + 2}{5} - 2 = (x + 2) - 2 = x \\checkmark$$

// $$g(f(x)) = g(5x - 2) = \\frac{(5x - 2) + 2}{5} = \\frac{5x}{5} = x \\checkmark$$

// Both compositions return $x$, confirming that $g = f^{-1}$.

// If either composition fails to simplify to $x$, the functions are not inverses. This verification catches algebraic errors in finding inverses.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `The Horizontal Line Test`,
//     content: `The horizontal line test determines whether a function has an inverse. If every horizontal line intersects the [graph](!/functions/graphs) at most once, the function is one-to-one and has an inverse. If any horizontal line intersects the graph more than once, the function is not one-to-one and has no inverse (on that domain).

// The test works because horizontal lines represent constant outputs. If a horizontal line crosses the graph twice, two different inputs produce the same output. The inverse would need to send that output back to two different inputs simultaneously — impossible for a function.

// The parabola $f(x) = x^2$ fails the horizontal line test. The line $y = 4$ intersects the graph at $x = 2$ and $x = -2$. Both inputs produce output $4$; the inverse cannot determine which to return.

// The cubic $f(x) = x^3$ passes the horizontal line test. Every horizontal line intersects the graph exactly once. Each output comes from exactly one input, so the inverse is well-defined: $f^{-1}(x) = \\sqrt[3]{x}$.

// Exponential functions pass. Logarithmic functions pass. Linear functions with nonzero slope pass. Quadratics, absolute value, and cosine (on their natural domains) fail.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `One-to-One Requirement`,
//     content: `A function has an inverse if and only if it is [one-to-one](!/functions/properties): each output comes from exactly one input.

// One-to-one means: if $f(a) = f(b)$, then $a = b$. Different inputs always produce different outputs.

// This property is necessary for reversal. To recover the input from the output, the output must point to a unique input. If multiple inputs share an output, the reversal is ambiguous.

// Algebraic test: Assume $f(a) = f(b)$ and attempt to prove $a = b$. If this always follows, the function is one-to-one.

// For $f(x) = 3x + 7$: If $3a + 7 = 3b + 7$, then $3a = 3b$, so $a = b$. One-to-one. ✓

// For $f(x) = x^2$: If $a^2 = b^2$, then $a = \\pm b$, which does not imply $a = b$. Not one-to-one. ✗

// Graphical test: the horizontal line test, as described above.

// Monotonic functions — those that only increase or only decrease — are always one-to-one. They never produce the same output twice because they never turn around.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Restricting Domain to Create Inverse`,
//     content: `A function that is not one-to-one on its natural [domain](!/functions/domain) can be made one-to-one by restricting the domain. On the smaller domain, an inverse exists.

// The function $f(x) = x^2$ is not one-to-one on $(-\\infty, \\infty)$. But restricted to $[0, \\infty)$, it is one-to-one — the right half of the parabola passes the horizontal line test.

// The inverse is $f^{-1}(x) = \\sqrt{x}$, defined for $x \\geq 0$.

// Alternatively, restricting to $(-\\infty, 0]$ also makes $f(x) = x^2$ one-to-one. The inverse would be $f^{-1}(x) = -\\sqrt{x}$, the negative square root.

// Different restrictions yield different inverses. The choice depends on context or convention. For $x^2$, the standard restriction is $[0, \\infty)$ because positive square roots are more commonly needed.

// Trigonometric functions require restriction for their inverses. The sine function oscillates forever, failing the horizontal line test. Restricted to $[-\\pi/2, \\pi/2]$, it is one-to-one, enabling $\\arcsin$. Similar restrictions define $\\arccos$ and $\\arctan$.

// Restriction sacrifices part of the domain to gain invertibility. The trade-off is necessary whenever the original function is not one-to-one. The table below collects the standard restrictions for the most common non-one-to-one functions along with the inverse each restriction produces.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj10: {
//     title: `Graphing Inverse from Original`,
//     content: `Given the [graph](!/functions/graphs) of $f$, the graph of $f^{-1}$ is obtained by reflection across the line $y = x$.

// Method 1: Reflect visually. Draw the line $y = x$ as a mirror. Reflect each point on the graph of $f$ across this line. The reflected curve is the graph of $f^{-1}$.

// Method 2: Swap coordinates of key points. Identify several points on the graph of $f$: $(a_1, b_1), (a_2, b_2), \\ldots$ Plot the points $(b_1, a_1), (b_2, a_2), \\ldots$ Connect them with an appropriate curve.

// Features transform predictably:

// The $y$-intercept of $f$ becomes the $x$-intercept of $f^{-1}$.

// The $x$-intercept of $f$ becomes the $y$-intercept of $f^{-1}$.

// A horizontal asymptote of $f$ becomes a vertical asymptote of $f^{-1}$.

// A vertical asymptote of $f$ becomes a horizontal asymptote of $f^{-1}$.

// If $f$ is increasing, $f^{-1}$ is increasing. If $f$ is decreasing, $f^{-1}$ is decreasing.

// The graphs of $f$ and $f^{-1}$ intersect on the line $y = x$ — at points where $f(a) = a$, called fixed points.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj11: {
//     title: `Inverse Function Tables`,
//     content: `When a function is given as a table of values, the inverse function table is obtained by swapping the input and output columns.

// Original function $f$:

// | $x$ | $f(x)$ |
// |-----|--------|
// | $1$ | $4$ |
// | $2$ | $7$ |
// | $3$ | $10$ |
// | $4$ | $13$ |

// Inverse function $f^{-1}$:

// | $x$ | $f^{-1}(x)$ |
// |-----|-------------|
// | $4$ | $1$ |
// | $7$ | $2$ |
// | $10$ | $3$ |
// | $13$ | $4$ |

// Each row flips: the output of $f$ becomes the input of $f^{-1}$, and the input of $f$ becomes the output of $f^{-1}$.

// The inverse table has the same number of entries. The [domain](!/functions/domain) and [range](!/functions/range) swap exactly as described earlier.

// If the original table has repeated outputs — the same $f(x)$ value appearing for different $x$ values — the function is not one-to-one, and no inverse table exists. The swapped table would have repeated inputs, violating the definition of a function.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj12: {
//     title: `Common Inverse Pairs`,
//     content: `Certain function pairs arise repeatedly as inverses.

// Linear: $f(x) = mx + b$ and $f^{-1}(x) = \\dfrac{x - b}{m}$ (when $m \\neq 0$).

// Quadratic/Square root: $f(x) = x^2$ on $[0, \\infty)$ and $f^{-1}(x) = \\sqrt{x}$.

// Cubic/Cube root: $f(x) = x^3$ and $f^{-1}(x) = \\sqrt[3]{x}$.

// Exponential/Logarithmic: $f(x) = a^x$ and $f^{-1}(x) = \\log_a(x)$. Special case: $f(x) = e^x$ and $f^{-1}(x) = \\ln(x)$.

// Power/Root: $f(x) = x^n$ on appropriate domain and $f^{-1}(x) = x^{1/n}$.

// Reciprocal: $f(x) = 1/x$ is its own inverse: $f^{-1}(x) = 1/x$. Taking the reciprocal twice returns the original value.

// Trigonometric: $\\sin$ on $[-\\pi/2, \\pi/2]$ and $\\arcsin$; $\\cos$ on $[0, \\pi]$ and $\\arccos$; $\\tan$ on $(-\\pi/2, \\pi/2)$ and $\\arctan$.

// Recognizing these pairs accelerates both finding inverses and verifying that two given functions are inverses. The table below catalogs each pair with brief notes on when restrictions apply.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj13: {
//     title: `Inverses in Context`,
//     content: `Inverse functions model real-world processes that can be reversed.

// Temperature conversion: $F(C) = \\frac{9}{5}C + 32$ converts Celsius to Fahrenheit. The inverse $C(F) = \\frac{5}{9}(F - 32)$ converts Fahrenheit back to Celsius.

// Encoding and decoding: An encryption function scrambles data; the decryption function (its inverse) recovers the original. Without an inverse, decryption would be impossible.

// Unit conversion: Any reversible unit conversion involves inverse functions. Miles to kilometers and kilometers to miles; pounds to kilograms and back.

// Solving equations: If $f(x) = b$, then $x = f^{-1}(b)$. The inverse function provides the solution directly. To solve $e^x = 10$, apply the inverse of $e^x$: $x = \\ln(10)$.

// Financial calculations: Converting interest rate to growth factor and back. Computing principal from future value.

// In each case, the inverse answers the reverse question. If the original function asks "given input, what is output?" the inverse asks "given output, what was the input?"`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj14: {
//     title: `How Features Swap Under Inversion`,
//     content: `Inverting a function swaps the roles of input and output. That single fact propagates outward: every geometric and structural feature of $f$ transforms in a predictable way for $f^{-1}$. The table below collects how each feature of $f$ maps to its counterpart in $f^{-1}$ — useful both as a checklist when sketching an inverse from the original and as a quick reference for anticipating the behavior of an inverse before computing it.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }

const sectionsContent = {

  obj0 : {
  title: `Key Terms`,
  content: `
## Core
 
• [Inverse Function](!/functions/definitions#inverse_function) — reverses $f$: if $f(a) = b$ then $f^{-1}(b) = a$
• [One-to-One Function](!/functions/definitions#one_to_one_function) — the requirement for an inverse to exist; each output traces to exactly one input
• [Composition of Functions](!/functions/definitions#composition_of_functions) — verifies inverses: $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$
 
## Domain–Range Swap
 
• [Domain](!/functions/definitions#domain) — the domain of $f$ becomes the range of $f^{-1}$
• [Range](!/functions/definitions#range) — the range of $f$ becomes the domain of $f^{-1}$
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},
 

  obj1: {
    title: `What is an Inverse Function`,
    content: `An inverse function reverses the action of the original function. If $f$ takes input $a$ and produces output $b$, then $f^{-1}$ takes input $b$ and produces output $a$.

@academic[formula_callout:Inverse Function Definition
$$f(a) = b \\iff f^{-1}(b) = a$$
/functions/formulas#inverse_function_definition]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

The two functions undo each other. Applying $f$ then $f^{-1}$ returns to the starting point. Applying $f^{-1}$ then $f$ also returns to the starting point.

Consider $f(x) = 2x$, which doubles its input. The inverse $f^{-1}(x) = x/2$ halves its input. If $f(3) = 6$, then $f^{-1}(6) = 3$. Doubling then halving — or halving then doubling — restores the original value.

Consider $f(x) = x + 5$, which adds five. The inverse $f^{-1}(x) = x - 5$ subtracts five. Adding then subtracting five is a round trip to nowhere.

Not every function has an inverse. The function $f(x) = x^2$ on $(-\\infty, \\infty)$ sends both $3$ and $-3$ to $9$. Given output $9$, there is no unique input to recover — the reversal is ambiguous. Functions without unique input-output pairings cannot be inverted.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Notation: f⁻¹(x) vs 1/f(x)`,
    content: `The notation $f^{-1}(x)$ denotes the inverse function of $f$. This is not the same as $\\dfrac{1}{f(x)}$, which is the reciprocal of $f(x)$.

Inverse function: $f^{-1}(x)$ undoes $f$. If $f(x) = 2x + 3$, then $f^{-1}(x) = \\dfrac{x - 3}{2}$.

Reciprocal: $\\dfrac{1}{f(x)} = \\dfrac{1}{2x + 3}$.

These are completely different functions with different meanings, different [graphs](!/functions/graphs), and different values.

The superscript $-1$ in $f^{-1}$ is not an exponent indicating a power. It is a label indicating the inverse relationship. This notation conflicts with the convention that $x^{-1} = 1/x$, which is why confusion arises.

When writing the reciprocal of a function, use $\\dfrac{1}{f(x)}$ or $(f(x))^{-1}$ with parentheses to clarify. Reserve $f^{-1}(x)$ exclusively for the inverse function.

For trigonometric functions, the same notational hazard exists. The inverse sine is $\\sin^{-1}(x)$ or $\\arcsin(x)$ — not the reciprocal $\\csc(x) = 1/\\sin(x)$.

The table below shows both notations side by side and what each one computes for the same example function.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Inverse as Reflection over y = x`,
    content: `The [graph](!/functions/graphs) of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$.

Every point $(a, b)$ on the graph of $f$ corresponds to a point $(b, a)$ on the graph of $f^{-1}$. The coordinates swap because input and output swap roles.

If $f$ passes through $(2, 5)$, then $f^{-1}$ passes through $(5, 2)$. If $f$ passes through $(-1, 3)$, then $f^{-1}$ passes through $(3, -1)$.

The line $y = x$ is the mirror. Points on this line satisfy $y = x$, so swapping coordinates leaves them unchanged — they are fixed points of the reflection.

This geometric relationship provides a visual test. Graph a function, draw the line $y = x$, and reflect the curve across that line. The result is the graph of the inverse function (if it exists).

The reflection also reveals features. If $f$ has a horizontal asymptote, $f^{-1}$ has a vertical asymptote at the same value. If $f$ is increasing, $f^{-1}$ is increasing. The shapes are congruent, just positioned symmetrically across $y = x$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Finding Inverse Algebraically`,
    content: `To find the inverse of a function algebraically, solve for the input in terms of the output.

Step 1: Write $y = f(x)$.

Step 2: Swap $x$ and $y$.

Step 3: Solve for $y$.

Step 4: Write $f^{-1}(x) = $ the result.

Example: Find the inverse of $f(x) = 3x - 7$.

Step 1: $y = 3x - 7$

Step 2: $x = 3y - 7$

Step 3: $x + 7 = 3y$, so $y = \\dfrac{x + 7}{3}$

Step 4: $f^{-1}(x) = \\dfrac{x + 7}{3}$

Example: Find the inverse of $f(x) = \\dfrac{2x + 1}{x - 3}$.

Step 1: $y = \\dfrac{2x + 1}{x - 3}$

Step 2: $x = \\dfrac{2y + 1}{y - 3}$

Step 3: $x(y - 3) = 2y + 1$, so $xy - 3x = 2y + 1$, thus $xy - 2y = 3x + 1$, giving $y(x - 2) = 3x + 1$, and $y = \\dfrac{3x + 1}{x - 2}$

Step 4: $f^{-1}(x) = \\dfrac{3x + 1}{x - 2}$`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Domain and Range Swap`,
    content: `The [domain](!/functions/domain) of $f$ becomes the [range](!/functions/range) of $f^{-1}$. The range of $f$ becomes the domain of $f^{-1}$. Formally:

@academic[formula_callout:Domain Range Swap of Inverse
$$\\text{Dom}(f^{-1}) = \\text{Ran}(f) \\quad \\text{and} \\quad \\text{Ran}(f^{-1}) = \\text{Dom}(f)$$
/functions/formulas#domain_range_swap_of_inverse]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

This swap is exact and complete. Every input of $f$ is an output of $f^{-1}$, and every output of $f$ is an input of $f^{-1}$.

Let $f(x) = \\sqrt{x}$ with domain $[0, \\infty)$ and range $[0, \\infty)$.

The inverse is $f^{-1}(x) = x^2$, but restricted: domain $[0, \\infty)$ and range $[0, \\infty)$.

The full function $g(x) = x^2$ on $(-\\infty, \\infty)$ is not the inverse of $\\sqrt{x}$ — that would require negative inputs, which $\\sqrt{x}$ never produces.

Let $f(x) = e^x$ with domain $(-\\infty, \\infty)$ and range $(0, \\infty)$.

The inverse is $f^{-1}(x) = \\ln(x)$ with domain $(0, \\infty)$ and range $(-\\infty, \\infty)$.

Exponentials accept all real inputs and produce only positive outputs. Logarithms accept only positive inputs and produce all real outputs. The swap is symmetric.

When finding an inverse, always verify that the domain and range correctly swap.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Verifying Inverses via Composition`,
    content: `Two functions are inverses if and only if their [compositions](!/functions/composition) yield the identity function — the function that returns its input unchanged.

For $f$ and $f^{-1}$ to be inverses, both compositions must reduce to $x$:

@academic[formula_callout:Inverse Composition Property
$$f(f^{-1}(x)) = x \\quad \\text{and} \\quad f^{-1}(f(x)) = x$$
/functions/formulas#inverse_composition_property]@

@academic[formulas_link:Browse all functions formulas
/functions/formulas]@

The first equation holds for $x$ in the domain of $f^{-1}$; the second holds for $x$ in the domain of $f$. Both conditions must hold.

Verify that $f(x) = 5x - 2$ and $g(x) = \\dfrac{x + 2}{5}$ are inverses.

$$f(g(x)) = f\\left(\\frac{x + 2}{5}\\right) = 5 \\cdot \\frac{x + 2}{5} - 2 = (x + 2) - 2 = x \\checkmark$$

$$g(f(x)) = g(5x - 2) = \\frac{(5x - 2) + 2}{5} = \\frac{5x}{5} = x \\checkmark$$

Both compositions return $x$, confirming that $g = f^{-1}$.

If either composition fails to simplify to $x$, the functions are not inverses. This verification catches algebraic errors in finding inverses.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `The Horizontal Line Test`,
    content: `The horizontal line test determines whether a function has an inverse. If every horizontal line intersects the [graph](!/functions/graphs) at most once, the function is one-to-one and has an inverse. If any horizontal line intersects the graph more than once, the function is not one-to-one and has no inverse (on that domain).

The test works because horizontal lines represent constant outputs. If a horizontal line crosses the graph twice, two different inputs produce the same output. The inverse would need to send that output back to two different inputs simultaneously — impossible for a function.

The parabola $f(x) = x^2$ fails the horizontal line test. The line $y = 4$ intersects the graph at $x = 2$ and $x = -2$. Both inputs produce output $4$; the inverse cannot determine which to return.

The cubic $f(x) = x^3$ passes the horizontal line test. Every horizontal line intersects the graph exactly once. Each output comes from exactly one input, so the inverse is well-defined: $f^{-1}(x) = \\sqrt[3]{x}$.

Exponential functions pass. Logarithmic functions pass. Linear functions with nonzero slope pass. Quadratics, absolute value, and cosine (on their natural domains) fail.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `One-to-One Requirement`,
    content: `A function has an inverse if and only if it is [one-to-one](!/functions/properties): each output comes from exactly one input.

One-to-one means: if $f(a) = f(b)$, then $a = b$. Different inputs always produce different outputs.

This property is necessary for reversal. To recover the input from the output, the output must point to a unique input. If multiple inputs share an output, the reversal is ambiguous.

Algebraic test: Assume $f(a) = f(b)$ and attempt to prove $a = b$. If this always follows, the function is one-to-one.

For $f(x) = 3x + 7$: If $3a + 7 = 3b + 7$, then $3a = 3b$, so $a = b$. One-to-one. ✓

For $f(x) = x^2$: If $a^2 = b^2$, then $a = \\pm b$, which does not imply $a = b$. Not one-to-one. ✗

Graphical test: the horizontal line test, as described above.

Monotonic functions — those that only increase or only decrease — are always one-to-one. They never produce the same output twice because they never turn around.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Restricting Domain to Create Inverse`,
    content: `A function that is not one-to-one on its natural [domain](!/functions/domain) can be made one-to-one by restricting the domain. On the smaller domain, an inverse exists.

The function $f(x) = x^2$ is not one-to-one on $(-\\infty, \\infty)$. But restricted to $[0, \\infty)$, it is one-to-one — the right half of the parabola passes the horizontal line test.

The inverse is $f^{-1}(x) = \\sqrt{x}$, defined for $x \\geq 0$.

Alternatively, restricting to $(-\\infty, 0]$ also makes $f(x) = x^2$ one-to-one. The inverse would be $f^{-1}(x) = -\\sqrt{x}$, the negative square root.

Different restrictions yield different inverses. The choice depends on context or convention. For $x^2$, the standard restriction is $[0, \\infty)$ because positive square roots are more commonly needed.

Trigonometric functions require restriction for their inverses. The sine function oscillates forever, failing the horizontal line test. Restricted to $[-\\pi/2, \\pi/2]$, it is one-to-one, enabling $\\arcsin$. Similar restrictions define $\\arccos$ and $\\arctan$.

Restriction sacrifices part of the domain to gain invertibility. The trade-off is necessary whenever the original function is not one-to-one. The table below collects the standard restrictions for the most common non-one-to-one functions along with the inverse each restriction produces.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj10: {
    title: `Graphing Inverse from Original`,
    content: `Given the [graph](!/functions/graphs) of $f$, the graph of $f^{-1}$ is obtained by reflection across the line $y = x$.

Method 1: Reflect visually. Draw the line $y = x$ as a mirror. Reflect each point on the graph of $f$ across this line. The reflected curve is the graph of $f^{-1}$.

Method 2: Swap coordinates of key points. Identify several points on the graph of $f$: $(a_1, b_1), (a_2, b_2), \\ldots$ Plot the points $(b_1, a_1), (b_2, a_2), \\ldots$ Connect them with an appropriate curve.

Features transform predictably:

The $y$-intercept of $f$ becomes the $x$-intercept of $f^{-1}$.

The $x$-intercept of $f$ becomes the $y$-intercept of $f^{-1}$.

A horizontal asymptote of $f$ becomes a vertical asymptote of $f^{-1}$.

A vertical asymptote of $f$ becomes a horizontal asymptote of $f^{-1}$.

If $f$ is increasing, $f^{-1}$ is increasing. If $f$ is decreasing, $f^{-1}$ is decreasing.

The graphs of $f$ and $f^{-1}$ intersect on the line $y = x$ — at points where $f(a) = a$, called fixed points.`,
    before: ``,
    after: ``,
    link: '',
  },

// 

obj11: {
  title: `Inverse Function Tables`,
  content: `When a function is given as a table of values, the inverse function table is obtained by swapping the input and output columns.

Original function $f$:`,
  contentBetween: `Inverse function $f^{-1}$:`,
  contentAfter: `Each row flips: the output of $f$ becomes the input of $f^{-1}$, and the input of $f$ becomes the output of $f^{-1}$.

The inverse table has the same number of entries. The [domain](!/functions/domain) and [range](!/functions/range) swap exactly as described earlier.

If the original table has repeated outputs — the same $f(x)$ value appearing for different $x$ values — the function is not one-to-one, and no inverse table exists. The swapped table would have repeated inputs, violating the definition of a function.`,
  before: ``,
  after: ``,
  link: '',
},
  obj12: {
    title: `Common Inverse Pairs`,
    content: `Certain function pairs arise repeatedly as inverses.

Linear: $f(x) = mx + b$ and $f^{-1}(x) = \\dfrac{x - b}{m}$ (when $m \\neq 0$).

Quadratic/Square root: $f(x) = x^2$ on $[0, \\infty)$ and $f^{-1}(x) = \\sqrt{x}$.

Cubic/Cube root: $f(x) = x^3$ and $f^{-1}(x) = \\sqrt[3]{x}$.

Exponential/Logarithmic: $f(x) = a^x$ and $f^{-1}(x) = \\log_a(x)$. Special case: $f(x) = e^x$ and $f^{-1}(x) = \\ln(x)$.

Power/Root: $f(x) = x^n$ on appropriate domain and $f^{-1}(x) = x^{1/n}$.

Reciprocal: $f(x) = 1/x$ is its own inverse: $f^{-1}(x) = 1/x$. Taking the reciprocal twice returns the original value.

Trigonometric: $\\sin$ on $[-\\pi/2, \\pi/2]$ and $\\arcsin$; $\\cos$ on $[0, \\pi]$ and $\\arccos$; $\\tan$ on $(-\\pi/2, \\pi/2)$ and $\\arctan$.

Recognizing these pairs accelerates both finding inverses and verifying that two given functions are inverses. The table below catalogs each pair with brief notes on when restrictions apply.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj13: {
    title: `Inverses in Context`,
    content: `Inverse functions model real-world processes that can be reversed.

Temperature conversion: $F(C) = \\frac{9}{5}C + 32$ converts Celsius to Fahrenheit. The inverse $C(F) = \\frac{5}{9}(F - 32)$ converts Fahrenheit back to Celsius.

Encoding and decoding: An encryption function scrambles data; the decryption function (its inverse) recovers the original. Without an inverse, decryption would be impossible.

Unit conversion: Any reversible unit conversion involves inverse functions. Miles to kilometers and kilometers to miles; pounds to kilograms and back.

Solving equations: If $f(x) = b$, then $x = f^{-1}(b)$. The inverse function provides the solution directly. To solve $e^x = 10$, apply the inverse of $e^x$: $x = \\ln(10)$.

Financial calculations: Converting interest rate to growth factor and back. Computing principal from future value.

In each case, the inverse answers the reverse question. If the original function asks "given input, what is output?" the inverse asks "given output, what was the input?"`,
    before: ``,
    after: ``,
    link: '',
  },

  obj14: {
    title: `How Features Swap Under Inversion`,
    content: `Inverting a function swaps the roles of input and output. That single fact propagates outward: every geometric and structural feature of $f$ transforms in a predictable way for $f^{-1}$. The table below collects how each feature of $f$ maps to its counterpart in $f^{-1}$ — useful both as a checklist when sketching an inverse from the original and as a quick reference for anticipating the behavior of an inverse before computing it.`,
    before: ``,
    after: ``,
    link: '',
  },

}


  const introContent = {
  id: "intro",
  title: "Undoing Functions",
  content: `Some processes can be reversed. Encryption can be decrypted. Compression can be decompressed. A temperature converted to Fahrenheit can be converted back to Celsius. The function that performs the reversal is the inverse — it undoes what the original function did.

Given a function $f$ that transforms input $a$ into output $b$, the inverse function $f^{-1}$ transforms $b$ back into $a$. The round trip leaves you where you started. Not every function has an inverse, but those that do reveal a symmetric relationship between input and output.`
}



  const faqQuestions = {
    q1: {
      question: "What is an inverse function?",
      answer: "An inverse function reverses the action of the original function. If f takes input a and produces output b, then f⁻¹ takes input b and produces output a. The two functions undo each other, so applying f then f⁻¹ — or f⁻¹ then f — returns you to the starting value."
    },
    q2: {
      question: "How do you find an inverse function algebraically?",
      answer: "To find an inverse algebraically, write y = f(x), swap x and y, solve for y, then write f⁻¹(x) equal to the result. For example, for f(x) = 3x − 7, swapping gives x = 3y − 7, solving gives y = (x + 7)/3, so f⁻¹(x) = (x + 7)/3."
    },
    q3: {
      question: "What is the horizontal line test?",
      answer: "The horizontal line test determines whether a function has an inverse. If every horizontal line intersects the graph at most once, the function is one-to-one and has an inverse. If any horizontal line crosses the graph more than once, the function is not one-to-one and no inverse exists on that domain."
    },
    q4: {
      question: "How do domain and range change for an inverse function?",
      answer: "The domain of f becomes the range of f⁻¹, and the range of f becomes the domain of f⁻¹. This swap is exact and complete — every input of f is an output of f⁻¹, and every output of f is an input of f⁻¹."
    },
    q5: {
      question: "How do you verify that two functions are inverses of each other?",
      answer: "Two functions are inverses if and only if both compositions yield the identity: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x. Both conditions must hold. If either composition fails to simplify to x, the functions are not inverses."
    },
  }

  const seoData = {
    title: "Inverse Functions | Learn Math Class",
    description: "Learn inverse functions: how to find, graph, and verify them using algebraic steps, the horizontal line test, and domain-range swaps with clear examples.",
    keywords: keyWords.join(", "),
    url: "/functions/inverse",
    name: "Inverse Functions",
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "inLanguage": "en-US",
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class",
        "url": "https://www.learnmathclass.com"
      },
      "teaches": [
        "What an inverse function is and how it reverses the original function",
        "The difference between f⁻¹(x) inverse notation and 1/f(x) reciprocal notation",
        "How to find an inverse function algebraically by swapping and solving",
        "How to apply the horizontal line test to determine if an inverse exists",
        "How domain and range swap when finding an inverse function",
        "How to verify inverse functions using composition",
        "Common inverse pairs and how features swap under inversion",
      ],
      "keywords": seoData.keywords,
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seoData.name,
          "item": `https://www.learnmathclass.com${seoData.url}`
        }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.values(faqQuestions).map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    },
  }

   return {
      props:{
         sectionsContent,
         introContent,
         obj2Table,
         obj9Table,
         obj12Table,
         summaryTable,
         faqQuestions,
         schemas,
         obj11InverseTable,
         obj11OriginalTable,
          seoData: {
        title: "Inverse Functions | Learn Math Class",
        description: "Learn inverse functions: how to find, graph, and verify them using algebraic steps, the horizontal line test, and domain-range swaps with clear examples.",
        keywords: keyWords.join(", "),
        url: "/functions/inverse",
         name: "Inverse Functions"
      },
       }
    }
   }

export default function InversePage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj9Table,
  obj12Table,
  summaryTable,
  faqQuestions,
  schemas,
   obj11InverseTable,
         obj11OriginalTable,
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
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
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
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
          <div
            key={'obj9-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj9Table }}
          />,
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
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },


    {
    id:'11',
    title:sectionsContent.obj11.title,
    link:sectionsContent.obj11.link,
    content:[
      sectionsContent.obj11.content,
      <div key={'obj11-orig-table'} style={tableWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj11OriginalTable }} />,
      sectionsContent.obj11.contentBetween,
      <div key={'obj11-inv-table'} style={tableWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj11InverseTable }} />,
      sectionsContent.obj11.contentAfter,
    ]
},
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div
            key={'obj12-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj12Table }}
          />,
        ]
    },
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.learningResource) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Inverse Functions</h1>
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