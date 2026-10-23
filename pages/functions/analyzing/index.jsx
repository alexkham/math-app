
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){

//   const keyWords=[
//     'analyzing functions',
//     'function behavior',
//     'intervals of increase and decrease',
//     'local extrema',
//     'absolute extrema',
//     'end behavior of functions',
//     'function symmetry',
//     'positive and negative intervals',
//     'function analysis',
//     'domain and range from graph',
//     'even and odd functions',
//     'periodic functions',
//     'interpreting function graphs',
//     'comparing function representations'
//   ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj4 — aggregation: sign analysis (positive, negative, zero)
//   const obj4Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Sign condition</th>
//       <th style="${tableHeaders.aggregation}">Where on graph</th>
//       <th style="${tableHeaders.aggregation}">Algebraic test</th>
//       <th style="${tableHeaders.aggregation}">Result for f(x) = x² − 4</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive — f(x) &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve lies above the x-axis</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, −2) ∪ (2, ∞)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative — f(x) &lt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve lies below the x-axis</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) &lt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−2, 2)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Zero — f(x) = 0</td>
//       <td style="padding: 12px 15px; color: #34495e;">curve crosses (or touches) the x-axis</td>
//       <td style="padding: 12px 15px; color: #34495e;">solve f(x) = 0</td>
//       <td style="padding: 12px 15px; color: #34495e;">x = −2, &nbsp; x = 2</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj8 — aggregation: four end-behavior possibilities
//   const obj8Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Behavior</th>
//       <th style="${tableHeaders.aggregation}">Symbolic form</th>
//       <th style="${tableHeaders.aggregation}">Graphical signature</th>
//       <th style="${tableHeaders.aggregation}">Typical function families</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unbounded above</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) → ∞</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve rises indefinitely</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive-leading polynomials, exponential growth</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unbounded below</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) → −∞</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve falls indefinitely</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative-leading polynomials, downward parabolas</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Finite limit (asymptote)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) → L</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">levels off toward horizontal line y = L</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rational functions (deg num ≤ deg denom), exponential decay</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Oscillation</td>
//       <td style="padding: 12px 15px; color: #34495e;">f(x) bounces without converging</td>
//       <td style="padding: 12px 15px; color: #34495e;">curve fluctuates indefinitely</td>
//       <td style="padding: 12px 15px; color: #34495e;">sin(x), cos(x), most <a href="/functions/properties" style="${linkStyle}">periodic functions</a></td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj9 — aggregation: graph feature mapped to typical real-world meaning
//   const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Graph feature</th>
//       <th style="${tableHeaders.aggregation}">Typical contextual meaning</th>
//       <th style="${tableHeaders.aggregation}">Example interpretations</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-intercept</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">initial or starting value at t = 0 (or x = 0)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">initial population, starting balance, launch height</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-intercept(s)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when the quantity reaches zero</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">break-even point, ground impact, depletion time</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Increasing / decreasing intervals</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quantity is growing or shrinking</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">revenue rising, temperature cooling, inventory depleting</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Steepness (slope)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change — steeper means faster</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">velocity, growth rate, cooling rate</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Extrema (peaks / valleys)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">optimal or critical values</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum profit, minimum cost, peak concentration</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">End behavior</td>
//       <td style="padding: 12px 15px; color: #34495e;">long-term trend</td>
//       <td style="padding: 12px 15px; color: #34495e;">equilibrium, indefinite growth, exponential decay</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj10 — comparison: equation vs table vs graph
//   const obj10Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Representation</th>
//       <th style="${tableHeaders.comparison}">What it reveals best</th>
//       <th style="${tableHeaders.comparison}">Best for answering</th>
//       <th style="${tableHeaders.comparison}">Example question</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Equation</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">algebraic structure; exact symbolic relationships</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exact values, exact zeros, symbolic manipulation</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"What is f(3) exactly?" &nbsp; "Solve f(x) = 0."</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Table</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">specific input-output pairs; patterns within sampled values</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">looking up listed values; spotting symmetry across listed inputs</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"What is f(−1) if it appears in the table?"</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/functions/graphs" style="${linkStyle}">Graph</a></td>
//       <td style="padding: 12px 15px; color: #34495e;">overall shape; qualitative behavior</td>
//       <td style="padding: 12px 15px; color: #34495e;">trends, extrema, intervals, symmetry at a glance</td>
//       <td style="padding: 12px 15px; color: #34495e;">"Where is f increasing?" &nbsp; "Is f even?"</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj11 — summary capstone: complete function-analysis workflow
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Feature</th>
//       <th style="${tableHeaders.summary}">Question to ask</th>
//       <th style="${tableHeaders.summary}">How to find it</th>
//       <th style="${tableHeaders.summary}">Example for f(x) = x² − 4</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/functions/domain" style="${linkStyle}">Domain</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">what inputs are valid?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check formula restrictions; read horizontal extent of the graph</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/functions/range" style="${linkStyle}">Range</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">what outputs are achieved?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve for y algebraically; read vertical extent of the graph</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−4, ∞)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Intercepts</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where does the graph cross the axes?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) = 0 for x-intercepts; compute f(0) for the y-intercept</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x-intercepts at ±2; y-intercept at −4</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Increasing / decreasing</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where does the curve rise and fall?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">trace the graph left-to-right; locate turning points</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decreasing on (−∞, 0); increasing on (0, ∞)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign (positive / negative)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where is the function above or below the x-axis?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">find the zeros; test the sign on each subinterval</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive on (−∞, −2) ∪ (2, ∞); negative on (−2, 2)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Extrema</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where are the peaks and valleys?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">locate turning points; also check endpoints on a restricted domain</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">absolute minimum −4 at x = 0; no maximum</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">is the graph even, odd, or neither?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">test f(−x) against f(x) and −f(x); or check graphical symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">even — symmetric about the y-axis</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Periodicity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does the pattern repeat at regular intervals?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">look for cyclic repetition; measure the distance between matching points</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not periodic</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">End behavior</td>
//       <td style="padding: 12px 15px; color: #34495e;">what happens as x → ±∞?</td>
//       <td style="padding: 12px 15px; color: #34495e;">examine the leading term, or the far ends of the graph</td>
//       <td style="padding: 12px 15px; color: #34495e;">f(x) → ∞ at both ends</td>
//     </tr>
//   </tbody>
// </table>
// `


// const obj10MiniTable = `
// <table style="border-collapse: collapse; margin: 16px auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; color: #34495e;">
//   <thead>
//     <tr style="background: #f5f7fa;">
//       <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">x</th>
//       <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">f(x)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td></tr>
//     <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;1</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;6</td></tr>
//     <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;8</td></tr>
//     <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">1</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;6</td></tr>
//     <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td></tr>
//   </tbody>
// </table>
// `

//   // ---------- SECTIONS ----------

//   const sectionsContent = {

//     obj0 : {
//   title: `Key Terms`,
//   content: `
// ## Behavior
 
// • [Increasing Function](!/functions/definitions#increasing_function) — larger inputs yield larger outputs across an interval
// • [Decreasing Function](!/functions/definitions#decreasing_function) — larger inputs yield smaller outputs across an interval
// • [Even Function](!/functions/definitions#even_function) — symmetric about the $y$-axis: $f(-x) = f(x)$
// • [Odd Function](!/functions/definitions#odd_function) — symmetric about the origin: $f(-x) = -f(x)$
 
// ## Extrema & Features
 
// • [Local Maximum](!/functions/definitions#local_maximum) — a peak in the immediate neighborhood
// • [Local Minimum](!/functions/definitions#local_minimum) — a valley in the immediate neighborhood
// • [Zero of a Function](!/functions/definitions#zero_of_a_function) — where the graph crosses the $x$-axis
// • [Asymptote](!/functions/definitions#asymptote) — a line the graph approaches at its extremes
 
// ## Framework
 
// • [Domain](!/functions/definitions#domain) — horizontal extent of the graph
// • [Range](!/functions/definitions#range) — vertical extent of the graph
// `,
//   before: ``,
//   after: `
 
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
//   link: '',
// },
 

//   obj1: {
//     title: `Systematic Function Analysis`,
//     content: `Analyzing a function means building a complete description of its behavior — not just isolated facts, but a coherent picture of how the function acts across its entire [domain](!/functions/domain).

// A systematic approach prevents overlooking important features. Begin with domain and [range](!/functions/range) — what goes in and what comes out. Identify intercepts — where the function crosses the axes. Describe intervals of increase and decrease — where the function rises and falls. Locate extrema — the highest and lowest points. Note symmetry, periodicity, end behavior, and any discontinuities.

// Each piece of information constrains the picture. Knowing the domain sets the stage. Knowing the range bounds the output. Knowing where the function increases and where it decreases reveals its overall shape. Knowing the extrema identifies the critical points.

// The result is a profile of the function that captures its essential character. Two functions with identical profiles behave identically; differences in profiles reveal differences in behavior.

// Analysis applies equally to functions given by equations, [graphs](!/functions/graphs), tables, or verbal descriptions. The questions remain the same — only the methods for answering them change.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj2: {
//     title: `Reading Domain and Range from Graph`,
//     content: `The [domain](!/functions/domain) of a function appears on a graph as horizontal extent — the set of $x$-values for which the curve exists.

// Scan the graph from left to right. Where does it begin? Where does it end? Does it extend infinitely in either direction? Arrows indicate unbounded continuation; endpoints indicate boundaries.

// A solid dot at an endpoint means the endpoint is included in the domain. An open dot means the endpoint is excluded. Vertical asymptotes mark $x$-values where the function is undefined — the domain excludes these points and may split into separate intervals.

// The [range](!/functions/range) appears as vertical extent — the set of $y$-values the graph actually reaches.

// Scan the graph from bottom to top. What is the lowest point? The highest? Does the graph extend infinitely upward or downward? Horizontal asymptotes suggest bounds the function approaches but may not reach.

// Express both domain and range in interval notation. A graph existing for all $x$ except $x = 2$, with $y$-values spanning from $-3$ up to but not including $5$, would have domain $(-\\infty, 2) \\cup (2, \\infty)$ and range $[-3, 5)$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj3: {
//     title: `Intervals of Increase and Decrease`,
//     content: `A function is increasing on an interval if larger inputs produce larger outputs. Moving right along the graph, the curve rises. A function is decreasing on an interval if larger inputs produce smaller outputs. Moving right, the curve falls.

// Formally, $f$ is increasing on an interval if whenever $a < b$ in that interval, $f(a) < f(b)$. It is decreasing if $f(a) > f(b)$.

// To identify these intervals from a graph, trace the curve from left to right. Note where it rises and where it falls. The intervals are expressed using $x$-values only — they describe portions of the domain, not the range.

// For $f(x) = x^2$, the graph falls as $x$ moves from $-\\infty$ toward $0$, then rises as $x$ moves from $0$ toward $\\infty$. The function is decreasing on $(-\\infty, 0)$ and increasing on $(0, \\infty)$.

// A function is constant on an interval if it produces the same output throughout. The graph is a horizontal segment over that interval.

// Turning points mark transitions between increasing and decreasing behavior. At a turning point, the function switches direction — rising then falling, or falling then rising. These are candidates for local extrema.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj4: {
//     title: `Intervals Where Positive, Negative, or Zero`,
//     content: `A function is positive where its output is greater than zero. On the graph, these are intervals where the curve lies above the $x$-axis.

// A function is negative where its output is less than zero. On the graph, these are intervals where the curve lies below the $x$-axis.

// A function equals zero at its $x$-intercepts — the points where the curve crosses the horizontal axis. These points separate positive and negative intervals.

// For $f(x) = x^2 - 4$, the zeros occur at $x = -2$ and $x = 2$. The parabola opens upward, so it dips below the axis between the zeros and rises above the axis outside them. The function is positive on $(-\\infty, -2) \\cup (2, \\infty)$ and negative on $(-2, 2)$.

// This analysis connects to solving inequalities. Asking "where is $f(x) > 0$?" is the same as asking "for which $x$ is the graph above the axis?" Asking "where is $f(x) \\leq 3$?" becomes "where is the graph at or below the horizontal line $y = 3$?"

// Sign analysis matters in applications. Positive profit versus negative profit. Above sea level versus below. Growth versus decline. The sign of the function carries meaning beyond mere arithmetic.

// The table below collects the three sign cases with their graphical and algebraic interpretations for the worked example.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj5: {
//     title: `Locating Extrema from Graph`,
//     content: `Extrema are the high and low points of a function — the peaks and valleys where the output reaches notable values.

// A local maximum occurs at $x = c$ if $f(c)$ is greater than or equal to all nearby function values. On the graph, this appears as a peak — the curve rises to a high point and then descends. The value $f(c)$ is the local maximum value.

// A local minimum occurs at $x = c$ if $f(c)$ is less than or equal to all nearby function values. On the graph, this appears as a valley — the curve descends to a low point and then rises.

// The absolute maximum (or global maximum) is the largest value the function achieves anywhere on its domain. The absolute minimum is the smallest value. These may coincide with local extrema or may occur at endpoints of a restricted domain.

// To locate extrema from a graph, identify all peaks and valleys. Read the $y$-coordinate of each — these are the extreme values. Then determine which, if any, is the absolute highest or lowest.

// Not every function has absolute extrema. The function $f(x) = x$ on $(-\\infty, \\infty)$ has no maximum or minimum — it extends without bound in both directions. But on a closed interval $[0, 5]$, it has absolute minimum $0$ at $x = 0$ and absolute maximum $5$ at $x = 5$.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj6: {
//     title: `Identifying Symmetry`,
//     content: `Symmetry in a function's graph reveals algebraic structure and simplifies analysis.

// A function has even symmetry if its graph is symmetric about the $y$-axis. Folding the graph along the vertical axis produces a perfect match — the left side mirrors the right. Algebraically, $f(-x) = f(x)$ for all $x$ in the domain.

// Examples of even functions: $f(x) = x^2$, $f(x) = |x|$, $f(x) = \\cos(x)$. Each satisfies $f(-x) = f(x)$.

// A function has odd symmetry if its graph is symmetric about the origin. Rotating the graph $180°$ around the origin produces the same curve. Algebraically, $f(-x) = -f(x)$ for all $x$ in the domain.

// Examples of odd functions: $f(x) = x^3$, $f(x) = x$, $f(x) = \\sin(x)$. Each satisfies $f(-x) = -f(x)$.

// Most functions have neither symmetry. The function $f(x) = x^2 + x$ is neither even nor odd: $f(-x) = x^2 - x$, which equals neither $f(x)$ nor $-f(x)$.

// Recognizing symmetry halves the graphing work. For an even function, graphing the right half determines the left. For an odd function, graphing one quadrant determines the opposite quadrant.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj7: {
//     title: `Identifying Periodicity`,
//     content: `A function is periodic if its values repeat at regular intervals. The graph shows a pattern that cycles endlessly — the same shape appearing again and again as $x$ increases.

// The period is the length of one complete cycle — the smallest positive number $p$ such that $f(x + p) = f(x)$ for all $x$ in the domain.

// The sine function has period $2\\pi$: the wave from $x = 0$ to $x = 2\\pi$ repeats identically from $x = 2\\pi$ to $x = 4\\pi$, and so on forever.

// To identify the period from a graph, find two consecutive peaks (or valleys, or any matching points) and measure the horizontal distance between them. That distance is the period.

// The amplitude of a periodic function measures the vertical extent of oscillation — half the distance from the maximum to the minimum value. For $f(x) = \\sin(x)$, the amplitude is $1$, since the function oscillates between $-1$ and $1$.

// Periodicity appears in modeling cycles: daily temperatures, sound waves, seasonal patterns, alternating current. Any phenomenon that repeats regularly suggests a periodic function model.

// Non-periodic functions never repeat exactly. The exponential function $f(x) = 2^x$ grows without cycling back. Linear functions, polynomials, and logarithms are all non-periodic.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj8: {
//     title: `End Behavior from Graph`,
//     content: `End behavior describes what happens to $f(x)$ as $x$ moves toward positive or negative infinity — the far right and far left of the graph.

// Four possibilities exist for each direction:

// The function may increase without bound: $f(x) \\to \\infty$ — the arrow and infinity marks of [limit notation](!/calculus/limits/infinity#notation). The graph rises indefinitely.

// The function may decrease without bound: $f(x) \\to -\\infty$. The graph falls indefinitely.

// The function may approach a finite limit: $f(x) \\to L$. The graph levels off toward a horizontal asymptote at $y = L$.

// The function may oscillate without settling: $f(x)$ bounces between values without converging. The graph fluctuates as $x$ extends.

// To read end behavior from a graph, examine the far left and far right. Does the curve rise, fall, level off, or oscillate?

// For polynomials, end behavior depends on the leading term. The function $f(x) = -2x^3 + 5x^2 - x + 1$ behaves like $-2x^3$ for large $|x|$: rising on the left, falling on the right.

// For rational functions, end behavior depends on the degree comparison. A horizontal asymptote indicates a finite limit; no horizontal asymptote indicates unbounded behavior.

// End behavior anchors the overall shape of the graph, constraining what happens far from the origin.

// The table below collects the four end-behavior possibilities side by side with their symbolic forms, graphical signatures, and typical function families.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

//   obj9: {
//     title: `Interpreting Real-World Function Graphs`,
//     content: `When a function models a real-world situation, every feature of the graph carries meaning beyond pure mathematics.

// The axes represent physical quantities with units. A graph of distance versus time has distance (meters, miles, kilometers) on the vertical axis and time (seconds, hours) on the horizontal. Reading the graph means interpreting coordinates as physical measurements.

// Intercepts have contextual meaning. The $y$-intercept often represents an initial condition — the value when the process begins. The $x$-intercepts may represent when a quantity reaches zero: when the tank empties, when the population vanishes, when the object hits the ground.

// Increasing and decreasing intervals describe change. A rising profit curve means revenue is growing. A falling temperature curve means cooling is occurring. The steepness indicates the rate of change — steeper means faster.

// Extrema represent optimal or critical values. Maximum profit. Minimum cost. Peak concentration of medicine in the bloodstream. These points often answer the central question of an application.

// End behavior predicts long-term trends. Does population stabilize or explode? Does temperature approach equilibrium? Does concentration decay to zero?

// Units matter throughout. The statement "the maximum occurs at $x = 4$" is incomplete without knowing that $x$ represents hours and the maximum value is $120$ milligrams per liter.

// The table below collects the principal graph features along with what they typically mean in a real-world context.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// //   obj10: {
// //     title: `Comparing Functions Across Representations`,
// //     content: `The same function can appear as an equation, a table, or a graph. Each representation reveals different aspects most clearly.

// // The equation $f(x) = 2x^2 - 8$ shows algebraic structure. The coefficient $2$ indicates vertical stretch. The constant $-8$ shifts the vertex down. Solving $f(x) = 0$ gives the zeros exactly: $x = \\pm 2$.

// // A table of values shows specific input-output pairs:

// // | $x$ | $f(x)$ |
// // |-----|--------|
// // | $-2$ | $0$ |
// // | $-1$ | $-6$ |
// // | $0$ | $-8$ |
// // | $1$ | $-6$ |
// // | $2$ | $0$ |

// // The table confirms the zeros, shows the minimum at $x = 0$, and reveals the symmetry between negative and positive inputs.

// // The graph shows shape at a glance: a parabola opening upward, vertex at $(0, -8)$, crossing the axis at $\\pm 2$, symmetric about the $y$-axis.

// // Converting between representations tests understanding. Can you sketch the graph from the equation? Can you write the equation from the graph? Can you fill in missing table entries from either?

// // Different questions favor different representations. "What is $f(3)$?" is fastest from the equation. "Is the function increasing at $x = 1$?" is clearest from the graph. "What is the exact output when input is $-1$?" may be easiest from a table that includes that value.

// // Fluency means moving freely among all three, recognizing the same function in each form.

// // The table below collects the three representations side by side with what each reveals most clearly and the kind of question each answers best.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },

// obj10: {
//   title: `Comparing Functions Across Representations`,
//   content: `The same function can appear as an equation, a table, or a graph. Each representation reveals different aspects most clearly.

// The equation $f(x) = 2x^2 - 8$ shows algebraic structure. The coefficient $2$ indicates vertical stretch. The constant $-8$ shifts the vertex down. Solving $f(x) = 0$ gives the zeros exactly: $x = \\pm 2$.

// A table of values shows specific input-output pairs:`,
//   contentAfter: `The table confirms the zeros, shows the minimum at $x = 0$, and reveals the symmetry between negative and positive inputs.

// The graph shows shape at a glance: a parabola opening upward, vertex at $(0, -8)$, crossing the axis at $\\pm 2$, symmetric about the $y$-axis.

// Converting between representations tests understanding. Can you sketch the graph from the equation? Can you write the equation from the graph? Can you fill in missing table entries from either?

// Different questions favor different representations. "What is $f(3)$?" is fastest from the equation. "Is the function increasing at $x = 1$?" is clearest from the graph. "What is the exact output when input is $-1$?" may be easiest from a table that includes that value.

// Fluency means moving freely among all three, recognizing the same function in each form.

// The table below collects the three representations side by side with what each reveals most clearly and the kind of question each answers best.`,
//   before: ``,
//   after: ``,
//   link: '',
// }, 


// obj11: {
//     title: `Complete Analysis at a Glance`,
//     content: `Analyzing a function comes down to building a feature-by-feature profile. The table below collects every feature covered above into a workflow checklist — what question each feature answers, how to find it from a graph or equation, and how each plays out on a concrete example. Use it as a checklist when working through an unfamiliar function so no critical feature is overlooked.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

// }


//  const introContent = {
//   id: "intro",
//   title: "Reading a Function's Behavior",
//   content: `A function does more than assign outputs to inputs — it behaves. It rises and falls, reaches peaks and valleys, approaches limits, crosses thresholds. Analyzing a function means describing this behavior systematically: where the function increases, where it decreases, where it achieves its extreme values, and how it acts at the boundaries of its domain.

// The tools for analysis come from both algebra and geometry. The equation reveals structure; the [graph](!/functions/graphs) reveals shape. Together they answer the essential question: what does this function actually do?`
// }



//   const faqQuestions = {
//     q1: {
//       question: "What does it mean to analyze a function?",
//       answer: "Analyzing a function means building a complete description of its behavior across its entire domain. This includes identifying the domain and range, finding intercepts, describing intervals of increase and decrease, locating extrema, noting symmetry, and describing end behavior. The result is a profile that captures the function's essential character."
//     },
//     q2: {
//       question: "How do you identify intervals of increase and decrease from a graph?",
//       answer: "To identify intervals of increase and decrease, trace the curve from left to right. Where the curve rises, the function is increasing; where it falls, the function is decreasing. These intervals are expressed using x-values only. For example, f(x) = x² is decreasing on (-∞, 0) and increasing on (0, ∞). Turning points mark the transitions between increasing and decreasing behavior."
//     },
//     q3: {
//       question: "What is the difference between local and absolute extrema?",
//       answer: "A local maximum or minimum occurs where the function value is greater or lesser than all nearby values — these are the peaks and valleys of the graph. An absolute maximum or minimum is the largest or smallest value the function achieves anywhere on its entire domain. Absolute extrema may coincide with local extrema or occur at the endpoints of a restricted domain."
//     },
//     q4: {
//       question: "How do you determine if a function is even or odd?",
//       answer: "A function is even if its graph is symmetric about the y-axis, which means f(-x) = f(x) for all x in the domain. Common examples include f(x) = x² and f(x) = cos(x). A function is odd if its graph is symmetric about the origin, meaning f(-x) = -f(x). Examples include f(x) = x³ and f(x) = sin(x). Most functions have neither type of symmetry."
//     },
//     q5: {
//       question: "What is end behavior and how do you read it from a graph?",
//       answer: "End behavior describes what happens to f(x) as x approaches positive or negative infinity — the far right and far left of the graph. To read it, examine whether the curve rises, falls, levels off toward a horizontal asymptote, or oscillates as it extends in each direction. For polynomials, end behavior is determined by the leading term; for rational functions, it depends on the degree comparison between numerator and denominator."
//     }
//   }

//   const seoData = {
//     title: "Analyzing Functions: Behavior & Intervals | Learn Math Class",
//     description: "Learn function analysis by identifying intervals of increase and decrease, local extrema, end behavior, symmetry, and positive and negative intervals from graphs.",
//     keywords: keyWords.join(", "),
//     url: "/functions/analyzing",
//     name: "Analyzing Functions"
//   }

//   const schemas = {
//     learningResource: {
//       "@context": "https://schema.org",
//       "@type": "LearningResource",
//       "name": seoData.name,
//       "description": seoData.description,
//       "url": "https://www.learnmathclass.com" + seoData.url,
//       "keywords": keyWords.join(", "),
//       "dateModified": new Date().toISOString(),
//       "datePublished": "2024-01-15",
//       "inLanguage": "en-US",
//       "teaches": [
//         "Systematic function analysis including domain, range, and intercepts",
//         "Identifying intervals of increase, decrease, and constancy from graphs",
//         "Locating local and absolute extrema from function graphs",
//         "Determining function symmetry: even, odd, or neither",
//         "Reading end behavior and identifying horizontal asymptotes",
//         "Analyzing positive, negative, and zero intervals of a function",
//         "Building a complete function profile by following a systematic analysis workflow"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       }
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
//           "name": "Functions",
//           "item": "https://www.learnmathclass.com/functions"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": seoData.name,
//           "item": "https://www.learnmathclass.com/functions/analyzing"
//         }
//       ]
//     },
//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.values(faqQuestions).map(({ question, answer }) => ({
//         "@type": "Question",
//         "name": question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": answer
//         }
//       }))
//     }
//   }

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          obj4Table,
//          obj8Table,
//          obj9Table,
//          obj10Table,
//          summaryTable,
//          faqQuestions,
//          schemas,
//          obj10MiniTable,
//           seoData: {
//         title: "Analyzing Functions: Behavior & Intervals | Learn Math Class",
//         description: "Learn function analysis by identifying intervals of increase and decrease, local extrema, end behavior, symmetry, and positive and negative intervals from graphs.",
//         keywords: keyWords.join(", "),
//         url: "/functions/analyzing",
//          name: "Analyzing Functions"
//       },
//        }
//     }
//    }

// export default function AnalyzingFunctionsPage({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj4Table,
//   obj8Table,
//   obj9Table,
//   obj10Table,
//   summaryTable,
//   faqQuestions,
//   schemas,
//   obj10MiniTable
// }) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
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
//           <div key={'obj4-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj4Table }} />,
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
//           <div key={'obj9-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: obj9Table }} />,
//         ]
//     },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //       <div key={'obj10-table'} style={tableWrapStyle}
//     //            dangerouslySetInnerHTML={{ __html: obj10Table }} />,
//     //     ]
//     // },


//     {
//     id:'10',
//     title:sectionsContent.obj10.title,
//     link:sectionsContent.obj10.link,
//     content:[
//       sectionsContent.obj10.content,
//       <div key={'obj10-mini-table'} style={tableWrapStyle}
//            dangerouslySetInnerHTML={{ __html: obj10MiniTable }} />,
//       sectionsContent.obj10.contentAfter,
//       <div key={'obj10-table'} style={tableWrapStyle}
//            dangerouslySetInnerHTML={{ __html: obj10Table }} />,
//     ]
// },
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//           <div key={'summary-table'} style={tableWrapStyle}
//                dangerouslySetInnerHTML={{ __html: summaryTable }} />,
//         ]
//     },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Analyzing Functions</h1>
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
//        <KeyTermsCard
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
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import functionDomainDiagrams from '@/app/components/functions/domain/functionDomainDiagrams'
import functionSymmetryDiagrams from '@/app/components/functions/symmetry/functionSymmetryDiagrams'
import functionAsymptotesDiagrams from '@/app/components/functions/asymptotes/functionAsymptotesDiagrams'
import renderCurveFeature from '@/app/utils/illustrations/trigonometry/curves/curveFeature'
import renderFunctionPlot from '@/app/utils/illustrations/functions/graphs/functionPlot'
import FunctionAnalysis from '@/app/components/infographics/FunctionAnalysis'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){

  const keyWords=[
    'analyzing functions',
    'function behavior',
    'intervals of increase and decrease',
    'local extrema',
    'absolute extrema',
    'end behavior of functions',
    'function symmetry',
    'positive and negative intervals',
    'function analysis',
    'domain and range from graph',
    'even and odd functions',
    'periodic functions',
    'interpreting function graphs',
    'comparing function representations'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj4 — aggregation: sign analysis (positive, negative, zero)
  const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Sign condition</th>
      <th style="${tableHeaders.aggregation}">Where on graph</th>
      <th style="${tableHeaders.aggregation}">Algebraic test</th>
      <th style="${tableHeaders.aggregation}">Result for f(x) = x² − 4</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive — f(x) &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve lies above the x-axis</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, −2) ∪ (2, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Negative — f(x) &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve lies below the x-axis</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) &lt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−2, 2)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Zero — f(x) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">curve crosses (or touches) the x-axis</td>
      <td style="padding: 12px 15px; color: #34495e;">solve f(x) = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">x = −2, &nbsp; x = 2</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — aggregation: four end-behavior possibilities
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Behavior</th>
      <th style="${tableHeaders.aggregation}">Symbolic form</th>
      <th style="${tableHeaders.aggregation}">Graphical signature</th>
      <th style="${tableHeaders.aggregation}">Typical function families</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unbounded above</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) → ∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve rises indefinitely</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive-leading polynomials, exponential growth</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Unbounded below</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) → −∞</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">curve falls indefinitely</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">negative-leading polynomials, downward parabolas</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Finite limit (asymptote)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(x) → L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">levels off toward horizontal line y = L</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rational functions (deg num ≤ deg denom), exponential decay</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Oscillation</td>
      <td style="padding: 12px 15px; color: #34495e;">f(x) bounces without converging</td>
      <td style="padding: 12px 15px; color: #34495e;">curve fluctuates indefinitely</td>
      <td style="padding: 12px 15px; color: #34495e;">sin(x), cos(x), most <a href="/functions/properties" style="${linkStyle}">periodic functions</a></td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: graph feature mapped to typical real-world meaning
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Graph feature</th>
      <th style="${tableHeaders.aggregation}">Typical contextual meaning</th>
      <th style="${tableHeaders.aggregation}">Example interpretations</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">y-intercept</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">initial or starting value at t = 0 (or x = 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">initial population, starting balance, launch height</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x-intercept(s)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when the quantity reaches zero</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">break-even point, ground impact, depletion time</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Increasing / decreasing intervals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">quantity is growing or shrinking</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">revenue rising, temperature cooling, inventory depleting</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Steepness (slope)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change — steeper means faster</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">velocity, growth rate, cooling rate</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Extrema (peaks / valleys)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">optimal or critical values</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">maximum profit, minimum cost, peak concentration</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">End behavior</td>
      <td style="padding: 12px 15px; color: #34495e;">long-term trend</td>
      <td style="padding: 12px 15px; color: #34495e;">equilibrium, indefinite growth, exponential decay</td>
    </tr>
  </tbody>
</table>
`

  // obj10 — comparison: equation vs table vs graph
  const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Representation</th>
      <th style="${tableHeaders.comparison}">What it reveals best</th>
      <th style="${tableHeaders.comparison}">Best for answering</th>
      <th style="${tableHeaders.comparison}">Example question</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Equation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">algebraic structure; exact symbolic relationships</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">exact values, exact zeros, symbolic manipulation</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"What is f(3) exactly?" &nbsp; "Solve f(x) = 0."</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Table</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">specific input-output pairs; patterns within sampled values</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">looking up listed values; spotting symmetry across listed inputs</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">"What is f(−1) if it appears in the table?"</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/functions/graphs" style="${linkStyle}">Graph</a></td>
      <td style="padding: 12px 15px; color: #34495e;">overall shape; qualitative behavior</td>
      <td style="padding: 12px 15px; color: #34495e;">trends, extrema, intervals, symmetry at a glance</td>
      <td style="padding: 12px 15px; color: #34495e;">"Where is f increasing?" &nbsp; "Is f even?"</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary capstone: complete function-analysis workflow
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Feature</th>
      <th style="${tableHeaders.summary}">Question to ask</th>
      <th style="${tableHeaders.summary}">How to find it</th>
      <th style="${tableHeaders.summary}">Example for f(x) = x² − 4</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/functions/domain" style="${linkStyle}">Domain</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">what inputs are valid?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check formula restrictions; read horizontal extent of the graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−∞, ∞)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/functions/range" style="${linkStyle}">Range</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">what outputs are achieved?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve for y algebraically; read vertical extent of the graph</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[−4, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Intercepts</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where does the graph cross the axes?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">solve f(x) = 0 for x-intercepts; compute f(0) for the y-intercept</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x-intercepts at ±2; y-intercept at −4</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Increasing / decreasing</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where does the curve rise and fall?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">trace the graph left-to-right; locate turning points</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">decreasing on (−∞, 0); increasing on (0, ∞)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Sign (positive / negative)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where is the function above or below the x-axis?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">find the zeros; test the sign on each subinterval</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive on (−∞, −2) ∪ (2, ∞); negative on (−2, 2)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Extrema</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">where are the peaks and valleys?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">locate turning points; also check endpoints on a restricted domain</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">absolute minimum −4 at x = 0; no maximum</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">is the graph even, odd, or neither?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">test f(−x) against f(x) and −f(x); or check graphical symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">even — symmetric about the y-axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Periodicity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does the pattern repeat at regular intervals?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">look for cyclic repetition; measure the distance between matching points</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">not periodic</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">End behavior</td>
      <td style="padding: 12px 15px; color: #34495e;">what happens as x → ±∞?</td>
      <td style="padding: 12px 15px; color: #34495e;">examine the leading term, or the far ends of the graph</td>
      <td style="padding: 12px 15px; color: #34495e;">f(x) → ∞ at both ends</td>
    </tr>
  </tbody>
</table>
`


const obj10MiniTable = `
<table style="border-collapse: collapse; margin: 16px auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; color: #34495e;">
  <thead>
    <tr style="background: #f5f7fa;">
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">x</th>
      <th style="padding: 6px 16px; border: 1px solid #e1e4e8; font-weight: 600; color: #06357a; text-align: center;">f(x)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;1</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;6</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;8</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">1</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">&minus;6</td></tr>
    <tr><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">2</td><td style="padding: 5px 16px; border: 1px solid #e1e4e8; text-align: center;">0</td></tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

  const sectionsContent = {

    obj0 : {
  title: `Key Terms`,
  content: `
## Behavior
 
• [Increasing Function](!/functions/definitions#increasing_function) — larger inputs yield larger outputs across an interval
• [Decreasing Function](!/functions/definitions#decreasing_function) — larger inputs yield smaller outputs across an interval
• [Even Function](!/functions/definitions#even_function) — symmetric about the $y$-axis: $f(-x) = f(x)$
• [Odd Function](!/functions/definitions#odd_function) — symmetric about the origin: $f(-x) = -f(x)$
 
## Extrema & Features
 
• [Local Maximum](!/functions/definitions#local_maximum) — a peak in the immediate neighborhood
• [Local Minimum](!/functions/definitions#local_minimum) — a valley in the immediate neighborhood
• [Zero of a Function](!/functions/definitions#zero_of_a_function) — where the graph crosses the $x$-axis
• [Asymptote](!/functions/definitions#asymptote) — a line the graph approaches at its extremes
 
## Framework
 
• [Domain](!/functions/definitions#domain) — horizontal extent of the graph
• [Range](!/functions/definitions#range) — vertical extent of the graph
`,
  before: ``,
  after: `
 
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Function Definitions](!/functions/definitions) →@`,
  link: '',
},
 

  obj1: {
    title: `Systematic Function Analysis`,
    content: `Analyzing a function means building a complete description of its behavior — not just isolated facts, but a coherent picture of how the function acts across its entire [domain](!/functions/domain).

A systematic approach prevents overlooking important features. Begin with domain and [range](!/functions/range) — what goes in and what comes out. Identify intercepts — where the function crosses the axes. Describe intervals of increase and decrease — where the function rises and falls. Locate extrema — the highest and lowest points. Note symmetry, periodicity, end behavior, and any discontinuities.

Each piece of information constrains the picture. Knowing the domain sets the stage. Knowing the range bounds the output. Knowing where the function increases and where it decreases reveals its overall shape. Knowing the extrema identifies the critical points.

The result is a profile of the function that captures its essential character. Two functions with identical profiles behave identically; differences in profiles reveal differences in behavior.

Analysis applies equally to functions given by equations, [graphs](!/functions/graphs), tables, or verbal descriptions. The questions remain the same — only the methods for answering them change.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Reading Domain and Range from Graph`,
    content: `The [domain](!/functions/domain) of a function appears on a graph as horizontal extent — the set of $x$-values for which the curve exists.

Scan the graph from left to right. Where does it begin? Where does it end? Does it extend infinitely in either direction? Arrows indicate unbounded continuation; endpoints indicate boundaries.

A solid dot at an endpoint means the endpoint is included in the domain. An open dot means the endpoint is excluded. Vertical asymptotes mark $x$-values where the function is undefined — the domain excludes these points and may split into separate intervals.

The [range](!/functions/range) appears as vertical extent — the set of $y$-values the graph actually reaches.

Scan the graph from bottom to top. What is the lowest point? The highest? Does the graph extend infinitely upward or downward? Horizontal asymptotes suggest bounds the function approaches but may not reach.

@academic[pitfall,aside:true,width:35%:Putting the asymptote in the range
The graph of $f(x) = 2^x$ levels off toward $y = 0$; writing its range as $[0, \\infty)$ claims that some input gives $0$. Since $2^x > 0$ for every $x$, the range is $(0, \\infty)$.
[Read more](!#pitfalls)]@

Express both domain and range in interval notation. A graph existing for all $x$ except $x = 2$, with $y$-values spanning from $-3$ up to but not including $5$, would have domain $(-\\infty, 2) \\cup (2, \\infty)$ and range $[-3, 5)$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Intervals of Increase and Decrease`,
    content: `A function is increasing on an interval if larger inputs produce larger outputs. Moving right along the graph, the curve rises. A function is decreasing on an interval if larger inputs produce smaller outputs. Moving right, the curve falls.

Formally, $f$ is increasing on an interval if whenever $a < b$ in that interval, $f(a) < f(b)$. It is decreasing if $f(a) > f(b)$.

To identify these intervals from a graph, trace the curve from left to right. Note where it rises and where it falls. The intervals are expressed using $x$-values only — they describe portions of the domain, not the range.

For $f(x) = x^2$, the graph falls as $x$ moves from $-\\infty$ toward $0$, then rises as $x$ moves from $0$ toward $\\infty$. The function is decreasing on $(-\\infty, 0)$ and increasing on $(0, \\infty)$.

@academic[pitfall,aside:true,width:35%:Reading the graph right to left
Starting at the vertex of $y = x^2$ and moving left, the curve climbs, so $(-\\infty, 0)$ gets called increasing. Read with the inputs growing, $f(-2) = 4$ drops to $f(-1) = 1$: $x^2$ is decreasing on $(-\\infty, 0)$.
[Read more](!#pitfalls)]@

Each of these statements is a comparison between inputs. Inside an interval, two inputs $a < b$ are chosen and their outputs are set side by side; on the graph, the same comparison is a step from a point on the left to a point on the right. The direction of that step is fixed by the $x$-axis, whichever part of the curve is being looked at.

A function is constant on an interval if it produces the same output throughout. The graph is a horizontal segment over that interval.

Turning points mark transitions between increasing and decreasing behavior. At a turning point, the function switches direction — rising then falling, or falling then rising. These are candidates for local extrema.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Intervals Where Positive, Negative, or Zero`,
    content: `A function is positive where its output is greater than zero. On the graph, these are intervals where the curve lies above the $x$-axis.

A function is negative where its output is less than zero. On the graph, these are intervals where the curve lies below the $x$-axis.

A function equals zero at its $x$-intercepts — the points where the curve crosses the horizontal axis. Zeros where the curve crosses the axis (rather than just touching it) separate positive and negative intervals.

For $f(x) = x^2 - 4$, the zeros occur at $x = -2$ and $x = 2$. The parabola opens upward, so it dips below the axis between the zeros and rises above the axis outside them. The function is positive on $(-\\infty, -2) \\cup (2, \\infty)$ and negative on $(-2, 2)$.

@academic[pitfall,aside:true,width:35%:Closing the brackets at the zeros
Writing $x^2 - 4$ as positive on $(-\\infty, -2] \\cup [2, \\infty)$ includes $x = \\pm 2$, where the output is $0$, not positive. For $f(x) > 0$ the zeros stay out: $(-\\infty, -2) \\cup (2, \\infty)$.
[Read more](!#pitfalls)]@

This analysis connects to solving inequalities. Asking "where is $f(x) > 0$?" is the same as asking "for which $x$ is the graph above the axis?" Asking "where is $f(x) \\leq 3$?" becomes "where is the graph at or below the horizontal line $y = 3$?"

Sign analysis matters in applications. Positive profit versus negative profit. Above sea level versus below. Growth versus decline. The sign of the function carries meaning beyond mere arithmetic.

The table below collects the three sign cases with their graphical and algebraic interpretations for the worked example.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Locating Extrema from Graph`,
    content: `Extrema are the high and low points of a function — the peaks and valleys where the output reaches notable values.

A local maximum occurs at $x = c$ if $f(c)$ is greater than or equal to all nearby function values. On the graph, this appears as a peak — the curve rises to a high point and then descends. The value $f(c)$ is the local maximum value.

A local minimum occurs at $x = c$ if $f(c)$ is less than or equal to all nearby function values. On the graph, this appears as a valley — the curve descends to a low point and then rises.

The absolute maximum (or global maximum) is the largest value the function achieves anywhere on its domain. The absolute minimum is the smallest value. These may coincide with local extrema or may occur at endpoints of a restricted domain.

@academic[pitfall,aside:true,width:35%:Giving the location instead of the value
Saying "the local maximum of $x^3 - 3x$ is $-1$" gives the input where the peak sits. The local maximum value is $f(-1) = -1 + 3 = 2$, reached at $x = -1$: the peak is the point $(-1, 2)$.
[Read more](!#pitfalls)]@

To locate extrema from a graph, identify all peaks and valleys. Read the $y$-coordinate of each — these are the extreme values. Then determine which, if any, is the absolute highest or lowest.

Not every function has absolute extrema. The function $f(x) = x$ on $(-\\infty, \\infty)$ has no maximum or minimum — it extends without bound in both directions. But on a closed interval $[0, 5]$, it has absolute minimum $0$ at $x = 0$ and absolute maximum $5$ at $x = 5$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Identifying Symmetry`,
    content: `Symmetry in a function's graph reveals algebraic structure and simplifies analysis.

A function has even symmetry if its graph is symmetric about the $y$-axis. Folding the graph along the vertical axis produces a perfect match — the left side mirrors the right. Algebraically, $f(-x) = f(x)$ for all $x$ in the domain.

Examples of even functions: $f(x) = x^2$, $f(x) = |x|$, $f(x) = \\cos(x)$. Each satisfies $f(-x) = f(x)$.

A function has odd symmetry if its graph is symmetric about the origin. Rotating the graph $180°$ around the origin produces the same curve. Algebraically, $f(-x) = -f(x)$ for all $x$ in the domain.

Examples of odd functions: $f(x) = x^3$, $f(x) = x$, $f(x) = \\sin(x)$. Each satisfies $f(-x) = -f(x)$.

@academic[pitfall,aside:true,width:35%:Judging symmetry by the degree
Calling $f(x) = x^3 + 1$ odd because its highest power is odd fails the test: $f(-1) = 0$, but $-f(1) = -2$. It is not even either, since $f(1) = 2$; only comparing $f(-x)$ with $f(x)$ and $-f(x)$ decides.
[Read more](!#pitfalls)]@

Most functions have neither symmetry. The function $f(x) = x^2 + x$ is neither even nor odd: $f(-x) = x^2 - x$, which equals neither $f(x)$ nor $-f(x)$.

Recognizing symmetry halves the graphing work. For an even function, graphing the right half determines the left. For an odd function, graphing one quadrant determines the opposite quadrant.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Identifying Periodicity`,
    content: `A function is periodic if its values repeat at regular intervals. The graph shows a pattern that cycles endlessly — the same shape appearing again and again as $x$ increases.

The period is the length of one complete cycle — the smallest positive number $p$ such that $f(x + p) = f(x)$ for all $x$ in the domain.

The sine function has period $2\\pi$: the wave from $x = 0$ to $x = 2\\pi$ repeats identically from $x = 2\\pi$ to $x = 4\\pi$, and so on forever.

To identify the period from a graph, find two consecutive peaks (or valleys, or any matching points) and measure the horizontal distance between them. That distance is the period.

@academic[pitfall,aside:true,width:35%:Measuring between consecutive zeros
Taking the zeros of $\\sin x$ at $0$ and $\\pi$ as matching points gives a period of $\\pi$. But $\\sin(\\pi/2) = 1$ while $\\sin(3\\pi/2) = -1$, so a shift by $\\pi$ does not repeat the wave; the period is $2\\pi$.
[Read more](!#pitfalls)]@

On a wave, most heights are reached twice in every cycle, once while the curve climbs and once while it falls. Two points match only when they share both the height and the direction in which the curve passes through them. Peaks and valleys are the easiest pair to use, since each occurs exactly once per cycle.

The amplitude of a periodic function measures the vertical extent of oscillation — half the distance from the maximum to the minimum value. For $f(x) = \\sin(x)$, the amplitude is $1$, since the function oscillates between $-1$ and $1$.

Periodicity appears in modeling cycles: daily temperatures, sound waves, seasonal patterns, alternating current. Any phenomenon that repeats regularly suggests a periodic function model.

Non-periodic functions never repeat exactly. The exponential function $f(x) = 2^x$ grows without cycling back. Non-constant polynomials (linear functions included) and logarithms are all non-periodic.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `End Behavior from Graph`,
    content: `End behavior describes what happens to $f(x)$ as $x$ moves toward positive or negative infinity — the far right and far left of the graph.

Four possibilities exist for each direction:

The function may increase without bound: $f(x) \\to \\infty$ — the arrow and infinity marks of [limit notation](!/calculus/limits/infinity#notation). The graph rises indefinitely.

The function may decrease without bound: $f(x) \\to -\\infty$. The graph falls indefinitely.

The function may approach a finite limit: $f(x) \\to L$. The graph levels off toward a horizontal asymptote at $y = L$.

The function may oscillate without settling: $f(x)$ bounces between values without converging. The graph fluctuates as $x$ extends.

To read end behavior from a graph, examine the far left and far right. Does the curve rise, fall, level off, or oscillate?

@academic[rule_plain:For polynomials, end behavior depends on the leading term.]@

The function $f(x) = -2x^3 + 5x^2 - x + 1$ behaves like $-2x^3$ for large $|x|$: rising on the left, falling on the right.

For rational functions, end behavior depends on the degree comparison. A horizontal asymptote indicates a finite limit; no horizontal asymptote indicates unbounded behavior.

End behavior anchors the overall shape of the graph, constraining what happens far from the origin.

The table below collects the four end-behavior possibilities side by side with their symbolic forms, graphical signatures, and typical function families.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Interpreting Real-World Function Graphs`,
    content: `When a function models a real-world situation, every feature of the graph carries meaning beyond pure mathematics.

The axes represent physical quantities with units. A graph of distance versus time has distance (meters, miles, kilometers) on the vertical axis and time (seconds, hours) on the horizontal. Reading the graph means interpreting coordinates as physical measurements.

Intercepts have contextual meaning. The $y$-intercept often represents an initial condition — the value when the process begins. The $x$-intercepts may represent when a quantity reaches zero: when the tank empties, when the population vanishes, when the object hits the ground.

Increasing and decreasing intervals describe change. A rising profit curve means revenue is growing. A falling temperature curve means cooling is occurring. The steepness indicates the rate of change — steeper means faster.

Extrema represent optimal or critical values. Maximum profit. Minimum cost. Peak concentration of medicine in the bloodstream. These points often answer the central question of an application.

End behavior predicts long-term trends. Does population stabilize or explode? Does temperature approach equilibrium? Does concentration decay to zero?

Units matter throughout. The statement "the maximum occurs at $x = 4$" is incomplete without knowing that $x$ represents hours and the maximum value is $120$ milligrams per liter.

The table below collects the principal graph features along with what they typically mean in a real-world context.`,
    before: ``,
    after: ``,
    link: '',
  },

//   obj10: {
//     title: `Comparing Functions Across Representations`,
//     content: `The same function can appear as an equation, a table, or a graph. Each representation reveals different aspects most clearly.

// The equation $f(x) = 2x^2 - 8$ shows algebraic structure. The coefficient $2$ indicates vertical stretch. The constant $-8$ shifts the vertex down. Solving $f(x) = 0$ gives the zeros exactly: $x = \\pm 2$.

// A table of values shows specific input-output pairs:

// | $x$ | $f(x)$ |
// |-----|--------|
// | $-2$ | $0$ |
// | $-1$ | $-6$ |
// | $0$ | $-8$ |
// | $1$ | $-6$ |
// | $2$ | $0$ |

// The table confirms the zeros, shows the minimum at $x = 0$, and reveals the symmetry between negative and positive inputs.

// The graph shows shape at a glance: a parabola opening upward, vertex at $(0, -8)$, crossing the axis at $\\pm 2$, symmetric about the $y$-axis.

// Converting between representations tests understanding. Can you sketch the graph from the equation? Can you write the equation from the graph? Can you fill in missing table entries from either?

// Different questions favor different representations. "What is $f(3)$?" is fastest from the equation. "Is the function increasing at $x = 1$?" is clearest from the graph. "What is the exact output when input is $-1$?" may be easiest from a table that includes that value.

// Fluency means moving freely among all three, recognizing the same function in each form.

// The table below collects the three representations side by side with what each reveals most clearly and the kind of question each answers best.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },

obj10: {
  title: `Comparing Functions Across Representations`,
  content: `The same function can appear as an equation, a table, or a graph. Each representation reveals different aspects most clearly.

The equation $f(x) = 2x^2 - 8$ shows algebraic structure. The coefficient $2$ indicates vertical stretch. The constant $-8$ shifts the vertex down. Solving $f(x) = 0$ gives the zeros exactly: $x = \\pm 2$.

A table of values shows specific input-output pairs:`,
  contentAfter: `The table confirms the zeros, shows the minimum at $x = 0$, and reveals the symmetry between negative and positive inputs.

The graph shows shape at a glance: a parabola opening upward, vertex at $(0, -8)$, crossing the axis at $\\pm 2$, symmetric about the $y$-axis.

Converting between representations tests understanding. Can you sketch the graph from the equation? Can you write the equation from the graph? Can you fill in missing table entries from either?

Different questions favor different representations. "What is $f(3)$?" is fastest from the equation. "Is the function increasing at $x = 1$?" is clearest from the graph. "What is the exact output when input is $-1$?" may be easiest from a table that includes that value.

Fluency means moving freely among all three, recognizing the same function in each form.

The table below collects the three representations side by side with what each reveals most clearly and the kind of question each answers best.`,
  before: ``,
  after: ``,
  link: '',
}, 


obj11: {
    title: `Complete Analysis at a Glance`,
    content: `Analyzing a function comes down to building a feature-by-feature profile. The table below collects every feature covered above into a workflow checklist — what question each feature answers, how to find it from a graph or equation, and how each plays out on a concrete example. Use it as a checklist when working through an unfamiliar function so no critical feature is overlooked.`,
    before: ``,
    after: ``,
    link: '',
  },

  pitfalls: {
    title: `Common Pitfalls`,
    content: `Seven mistakes come up again and again when a function is analyzed. Six are marked where they happen in the sections above; giving the intervals in $y$-values is the one that **Intervals of Increase and Decrease** already points out. Here each is worked through in full, with the wrong and the right working side by side.

**Putting the asymptote in the range**

A graph that levels off toward a horizontal asymptote is read as if it reached the asymptote's height, and that height is written into the range with a closed bracket.

Wrong working: the graph of $f(x) = 2^x$ approaches the line $y = 0$ on the left and rises without bound on the right, so the range is written as $[0, \\infty)$.

Right working: $2^x > 0$ for every real $x$. Even far to the left the output stays positive, for example $f(-10) = 2^{-10} = \\frac{1}{1024}$, and no input gives $0$. Every positive height is reached, so the range is $(0, \\infty)$.

Why it happens: near the asymptote the curve and the line are drawn so close together that they look joined, and the lowest height visible in the picture is taken as a value of the function.

How to check: set $f(x)$ equal to the boundary value and try to solve. The equation $2^x = 0$ has no solution, so $0$ stays out of the range.

**Giving the intervals in y-values**

Asked where a function increases or decreases, the answer lists the heights the curve passes through instead of the inputs over which it rises or falls.

Wrong working: for $f(x) = x^2 - 4$, the curve climbs from its lowest point $(0, -4)$ upward without bound, so $f$ is declared increasing on $(-4, \\infty)$.

Right working: the rising branch lies over the inputs $x > 0$, so $f$ is increasing on $(0, \\infty)$ and decreasing on $(-\\infty, 0)$. The interval $(-4, \\infty)$ is the set of outputs that the rising branch reaches, not a set of inputs.

Why it happens: rising and falling are seen as vertical motion, so the eye reads the vertical axis.

How to check: take a number from the answer and test it as an input. From $(-4, \\infty)$ take $x = -3$: $f(-3) = 5$ and $f(-2) = 0$, so the function is falling there, and $-3$ cannot belong to an interval of increase.

**Reading the graph right to left**

The curve is traced outward from a striking point such as a vertex, in both directions, so both sides seem to climb.

Wrong working: starting at the vertex of $y = x^2$ and moving left, the curve rises; moving right from the vertex, it rises too. Both $(-\\infty, 0)$ and $(0, \\infty)$ are called increasing.

Right working: direction is judged with the inputs growing. On $(-\\infty, 0)$, $-2 < -1$ and $f(-2) = 4 > f(-1) = 1$, so $f$ is decreasing there. On $(0, \\infty)$, $1 < 2$ and $f(1) = 1 < f(2) = 4$, so $f$ is increasing there.

Why it happens: the eye starts at the most noticeable point of the graph and moves away from it, which on the left of a vertex means moving against the $x$-axis.

How to check: apply the definition to two inputs $a < b$ in the interval. If $f(a) > f(b)$, the function is decreasing there, whatever the curve seemed to do.

**Closing the brackets at the zeros**

When the positive or negative intervals are written, the zeros that bound them are included, although at a zero the output is neither positive nor negative.

Wrong working: for $f(x) = x^2 - 4$, the zeros are $x = \\pm 2$ and the curve lies above the axis outside them, so $f(x) > 0$ on $(-\\infty, -2] \\cup [2, \\infty)$.

Right working: $f(2) = 4 - 4 = 0$ and $f(-2) = 4 - 4 = 0$, so neither zero satisfies $f(x) > 0$. The answer is $(-\\infty, -2) \\cup (2, \\infty)$. The zeros belong only to the non-strict condition: $f(x) \\geq 0$ on $(-\\infty, -2] \\cup [2, \\infty)$.

Why it happens: the zeros are found first and written down as the endpoints, and the bracket is chosen out of habit rather than from the condition.

How to check: substitute each endpoint. If the output is $0$, the endpoint belongs only to the version with $\\geq$ or $\\leq$.

**Giving the location instead of the value**

An extremum is reported as the input where it occurs instead of the output it reaches.

Wrong working: for $f(x) = x^3 - 3x$, the peak sits above $x = -1$, so the local maximum is given as $-1$.

Right working: $f(-1) = (-1)^3 - 3(-1) = -1 + 3 = 2$. The local maximum value is $2$, it occurs at $x = -1$, and the peak is the point $(-1, 2)$. In the same way the local minimum value is $f(1) = 1 - 3 = -2$, reached at $x = 1$.

Why it happens: on a graph the peak is found first by its position along the horizontal axis, and that is the number that gets written down.

How to check: read the wording of the question. "Where" or "at what $x$" asks for the input; "what is the maximum" asks for the output, a height read on the vertical axis.

**Judging symmetry by the degree**

A polynomial is labeled odd or even from its highest power alone, as if the name of the symmetry came from the degree.

Wrong working: $f(x) = x^3 + 1$ has degree $3$, so it is called odd.

Right working: $f(-x) = (-x)^3 + 1 = -x^3 + 1$, while $-f(x) = -x^3 - 1$. These differ, so $f$ is not odd. It is not even either: $f(-1) = 0$ but $f(1) = 2$. The function has neither symmetry; its graph is $y = x^3$ moved up by $1$, symmetric about the point $(0, 1)$ rather than the origin.

Why it happens: for polynomials with only odd powers, such as $x^3 - 3x$, or only even powers, such as $x^4 - x^2$, the names do agree. But the property needs every term; a constant term is an even power, $x^0$, and one such term breaks odd symmetry.

How to check: test one number. If $f(-1) \\neq -f(1)$, the function is not odd; if $f(-1) \\neq f(1)$, it is not even.

**Measuring between consecutive zeros**

The period is measured between two neighboring points at the same height that are not matching points of the cycle, most often two neighboring zeros.

Wrong working: $\\sin x$ is zero at $x = 0$ and at $x = \\pi$, so the period is given as $\\pi$.

Right working: a shift by $\\pi$ does not repeat the wave. $\\sin(\\pi/2) = 1$, but $\\sin(\\pi/2 + \\pi) = \\sin(3\\pi/2) = -1$; in fact $\\sin(x + \\pi) = -\\sin x$, the wave turned upside down. At $0$ the curve rises through the axis and at $\\pi$ it falls through it. The next zero where it rises again is $2\\pi$, and the peaks at $\\pi/2$ and $5\\pi/2$ give the same distance, $2\\pi$.

Why it happens: zeros are the easiest points to read off a graph, and two of them look alike because both lie on the axis.

How to check: test the candidate $p$ at a point where the function is not zero. If $f(x + p) \\neq f(x)$ there, $p$ is not a period.`,
    before: ``,
    after: ``,
    link: '',
  },

  faq: {
    title: `Analyzing Functions FAQ`,
  },
}


 const introContent = {
  id: "intro",
  title: "Reading a Function's Behavior",
  content: `A function does more than assign outputs to inputs — it behaves. It rises and falls, reaches peaks and valleys, approaches limits, crosses thresholds. Analyzing a function means describing this behavior systematically: where the function increases, where it decreases, where it achieves its extreme values, and how it acts at the boundaries of its domain.

The tools for analysis come from both algebra and geometry. The equation reveals structure; the [graph](!/functions/graphs) reveals shape. Together they answer the essential question: what does this function actually do?`
}



const faqQuestions = {
  obj1: {
    question: "How do you read intervals of increase and decrease from a graph?",
    answer: "Trace the curve from left to right and note where it rises and where it falls. Increasing and decreasing are stated as intervals of the input, never of the output, so the answer is a set of x-values. The turning points are the boundaries between the intervals.",
    sectionId: "3"
  },
  obj2: {
    question: "What is end behaviour and how do you read it from a graph?",
    answer: "It describes where the curve heads as the input runs off toward positive and negative infinity. Read the far left and far right of the graph separately, since the two directions can differ. The curve may rise without bound, fall without bound, or level off toward a horizontal asymptote.",
    sectionId: "8"
  },
  obj3: {
    question: "How do you tell where a function is positive or negative from its graph?",
    answer: "Look at which side of the horizontal axis the curve sits on. Above the axis means positive output, below means negative, and touching it means zero. The zeros are the boundaries, so finding them first splits the domain into intervals whose sign can then be read at a glance.",
    sectionId: "4"
  },
  obj4: {
    question: "How do you spot symmetry on a graph?",
    answer: "Check whether folding along the vertical axis makes the two halves coincide, which indicates an even function. Then check whether rotating the graph half a turn about the origin leaves it unchanged, which indicates an odd one. Most graphs show neither, and symmetry about the horizontal axis is impossible for a function.",
    sectionId: "6"
  },
  obj5: {
    question: "What should you look at first when analysing an unfamiliar graph?",
    answer: "Domain and range, since they bound everything else. Then the intercepts, which anchor the curve to the axes. Then turning points and intervals of increase and decrease, and finally end behaviour. Working in that order means each finding narrows what the next one can be, rather than collecting facts at random.",
    sectionId: "1"
  }
}

  const seoData = {
    title: "Analyzing Functions: Behavior & Intervals | Learn Math Class",
    description: "Learn function analysis by identifying intervals of increase and decrease, local extrema, end behavior, symmetry, and positive and negative intervals from graphs.",
    keywords: keyWords.join(", "),
    url: "/functions/analyzing",
    name: "Analyzing Functions"
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": seoData.name,
      "description": seoData.description,
      "url": "https://www.learnmathclass.com" + seoData.url,
      "keywords": keyWords.join(", "),
      "dateModified": new Date().toISOString(),
      "datePublished": "2024-01-15",
      "inLanguage": "en-US",
      "teaches": [
        "Systematic function analysis including domain, range, and intercepts",
        "Identifying intervals of increase, decrease, and constancy from graphs",
        "Locating local and absolute extrema from function graphs",
        "Determining function symmetry: even, odd, or neither",
        "Reading end behavior and identifying horizontal asymptotes",
        "Analyzing positive, negative, and zero intervals of a function",
        "Building a complete function profile by following a systematic analysis workflow"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      }
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
          "item": "https://www.learnmathclass.com/functions/analyzing"
        }
      ]
    },
  }


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const cfSinePeriod = {
    kind: 'single', title: 'The sine wave repeats every 2 pi',
    xRange: [-0.3, 4 * Math.PI + 0.4], yRange: [-1.9, 1.95], panelHeight: 250, panelWidth: 520, xTicks: 'pi',
    yTicks: [{ at: 1, label: '1' }, { at: -1, label: '−1' }],
    style: { primary: '#2563EB', primaryLight: '#93C5FD', secondary: '#06357A', resultStroke: '#B45309', resultFill: '#B45309', negation: '#C0392B' },
    panels: [{
      curves: [{ fn: 'sin', A: 1, color: 'primary' }],
      marks: [
        { type: 'midline', at: 0, color: 'muted' },
        { type: 'points', at: [Math.PI / 2, 5 * Math.PI / 2], y: [1, 1], color: 'resultStroke', r: 4 },
        { type: 'dimension', y: 1.55, from: Math.PI / 2, to: 5 * Math.PI / 2, label: 'peak to peak: period 2π', color: 'resultStroke' },
        { type: 'bracket', orient: 'h', y: -1.45, from: 0, to: 2 * Math.PI, label: 'one cycle', color: 'secondary' },
        { type: 'bracket', orient: 'h', y: -1.45, from: 2 * Math.PI, to: 4 * Math.PI, label: 'the same cycle again', color: 'secondary' },
      ],
    }],
  };

  const fpMonotone = {
    kind: 'monotone', svgTitle: 'y = x^2 falls on (-inf, 0) and rises on (0, inf)', idPrefix: 'fp-mono',
    f: (x) => x * x, xRange: [-2.6, 2.6], yRange: [-1, 6.5], from: -2.5, to: 2.5,
    turn: { x: 0, label: 'turning point (0, 0)' }, arrowAt: [-1.6, 1.6], wordAt: 1.4, curveLabel: { text: 'y = x²', x: 2.3, y: 6.2 },
    decText: 'decreasing on (−∞, 0)', incText: 'increasing on (0, ∞)', caption: 'Moving right, the curve falls until x = 0, then rises',
  };
  const fpExtrema = {
    kind: 'extrema', svgTitle: 'Local and absolute extrema of x^3 - 3x on [-2.2, 2.2]',
    f: (x) => x * x * x - 3 * x, xRange: [-2.6, 2.6], yRange: [-4.8, 4.8], domain: [-2.2, 2.2],
    local: [{ x: -1, label: 'local max 2' }, { x: 1, label: 'local min −2', below: true }], title: 'f(x) = x³ − 3x on [−2.2, 2.2]',
  };

  const demoUnits = {
    domainGraph: demoUnitFrame({
      svg: functionDomainDiagrams.sqrt,
      caption: 'f(x) = &#8730;x: domain [0, &#8734;) read off the axis',
      text: 'The curve begins at the origin with a closed dot and runs off to the right, and the shaded band on the x-axis marks exactly the inputs that have a point above them: nothing to the left of 0, everything from 0 onward. Domain is the horizontal shadow of the graph. Switch families and watch the band change on the',
      href: '/functions/visual-tools/domain',
      linkText: 'domain explorer',
    }),
    symmetry: demoUnitFrame({
      svg: functionSymmetryDiagrams.quadratic,
      caption: 'f(x) = x&#178;: mirror symmetry about the y-axis',
      text: 'The parabola and its reflection across the y-axis coincide point for point, which is the graphical meaning of f(&#8722;x) = f(x): an even function. Folding the picture along the vertical axis leaves it unchanged. Try x&#179;, which instead lands on itself after a half turn about the origin, on the',
      href: '/functions/visual-tools/symmetry',
      linkText: 'symmetry explorer',
    }),
    endBehavior: demoUnitFrame({
      svg: functionAsymptotesDiagrams.expDecay,
      caption: 'f(x) = e^(&#8722;x): the curve flattens onto y = 0',
      text: 'Toward the right the curve sinks ever closer to the dashed line y = 0 without touching it: that line is a horizontal asymptote, and it is the end behaviour of the function written as a level. Toward the left the curve climbs without bound instead. Scan the far ends of any family on the',
      href: '/functions/visual-tools/asymptotes',
      linkText: 'asymptotes explorer',
    }),
    sinePeriod: demoUnitFrame({
      svg: renderCurveFeature(cfSinePeriod),
      caption: 'Reading the period from two peaks',
      text: 'The graph of sin x from 0 to 4&#960;. The stretch from 0 to 2&#960; is one complete cycle, and the stretch from 2&#960; to 4&#960; repeats it exactly. Measuring between two consecutive peaks, at &#960;/2 and 5&#960;/2, gives the same 2&#960; &#8212; any pair of matching points one cycle apart does.',
    }),
    monotoneSquare: demoUnitFrame({
      svg: renderFunctionPlot(fpMonotone),
      caption: 'Falling, then rising',
      text: 'The section\'s example, f(x) = x&#178;. Read left to right: the curve falls until x = 0 and rises after it, and the turning point (0, 0) separates the two. The bars underneath repeat the answer the way it is written &#8212; as intervals of x: decreasing on (&#8722;&#8734;, 0), increasing on (0, &#8734;). The heights do the falling and rising, but the intervals name inputs.',
    }),
    extremaCubic: demoUnitFrame({
      svg: renderFunctionPlot(fpExtrema),
      caption: 'Local peaks against the highest point',
      text: 'f(x) = x&#179; &#8722; 3x on the closed interval [&#8722;2.2, 2.2]. The peak at x = &#8722;1 and the valley at x = 1 are local extrema: each beats only the values near it. Across the whole interval, the highest and lowest values sit at the endpoints, f(2.2) &#8776; 4.05 and f(&#8722;2.2) &#8776; &#8722;4.05 &#8212; absolute extrema that are not peaks or valleys at all.',
    }),
  };

  /* the profile of f(x) = x^3 - 3x, the cubic the extrema example below uses;
     sampled here because getStaticProps props must be plain data (no functions) */
  const cubicSamples = Array.from({ length: 261 }, (_, i) => {
    const x = -2.6 + i * 0.02;
    return [Number(x.toFixed(2)), Number((x * x * x - 3 * x).toFixed(4))];
  });
  const cubicProfile = {
    header: {
      kicker: 'one function, every feature',
      title: 'The profile of $f(x) = x^3 - 3x$',
      formula: '$f(x) = x^3 - 3x = x(x^2 - 3)$',
    },
    quickStats: [
      { n: '3', label: 'x-intercepts' },
      { n: '2', label: 'local extrema' },
      { n: 'odd', label: 'symmetry' },
    ],
    graph: {
      xRange: [-2.6, 2.6], yRange: [-4.8, 4.8],
      points: cubicSamples,
      xTicks: [-2, -1, 0, 1, 2], yTicks: [-4, -2, 0, 2, 4],
    },
    features: [
      { id: 'xint', kind: 'accent', dropLine: true, points: [{ x: -1.732, y: 0, dx: -26, dy: 22 }, { x: 0, y: 0, dx: 10, dy: 22 }, { x: 1.732, y: 0, dx: 8, dy: 22 }] },
      { id: 'max', kind: 'warm', dropLine: true, points: [{ x: -1, y: 2 }] },
      { id: 'min', kind: 'warm', dropLine: true, points: [{ x: 1, y: -2, dx: 10, dy: 10 }] },
    ],
    intervals: [
      { label: 'sign of f', spans: [
        { from: null, to: -1.732, kind: 'neg', sign: '−' },
        { from: -1.732, to: 0, kind: 'pos', sign: '+' },
        { from: 0, to: 1.732, kind: 'neg', sign: '−' },
        { from: 1.732, to: null, kind: 'pos', sign: '+' },
      ] },
      { label: 'direction', spans: [
        { from: null, to: -1, kind: 'pos', text: 'increasing', arrow: 'right' },
        { from: -1, to: 1, kind: 'neg', text: 'decreasing' },
        { from: 1, to: null, kind: 'pos', text: 'increasing', arrow: 'right' },
      ] },
    ],
    properties: [
      { letter: 'A', name: 'Domain and range', rows: [
        { label: 'Domain', value: '$(-\\infty, \\infty)$', sub: 'a polynomial accepts every real input' },
        { label: 'Range', value: '$(-\\infty, \\infty)$', sub: 'the two arms run off without bound' },
      ] },
      { letter: 'B', name: 'Intercepts', rows: [
        { featureId: 'xint', label: 'x-intercepts', value: '$x = -\\sqrt{3},\\; 0,\\; \\sqrt{3}$', sub: 'from $x(x^2 - 3) = 0$' },
        { featureId: 'xint', label: 'y-intercept', value: '$(0, 0)$' },
      ] },
      { letter: 'C', name: 'Increase, decrease, extrema', rows: [
        { featureId: 'max', label: 'Local maximum', value: '$(-1, 2)$', tone: 'warm' },
        { featureId: 'min', label: 'Local minimum', value: '$(1, -2)$', tone: 'warm' },
        { label: 'Increasing on', value: '$(-\\infty, -1)$ and $(1, \\infty)$' },
        { label: 'Decreasing on', value: '$(-1, 1)$' },
      ] },
      { letter: 'D', name: 'Symmetry, periodicity, end behaviour', rows: [
        { label: 'Symmetry', value: 'odd: $f(-x) = -f(x)$', sub: 'the graph lands on itself after a half turn about the origin' },
        { label: 'Periodicity', value: 'none', tone: 'na' },
        { label: 'End behaviour', value: '$f(x) \\to -\\infty$ as $x \\to -\\infty$; $f(x) \\to +\\infty$ as $x \\to +\\infty$' },
        { label: 'Discontinuities', value: 'none', tone: 'na' },
      ] },
    ],
    sections: {
      plot: { name: 'The graph, with the sign of f and its direction along x' },
      props: { name: 'The profile, feature by feature', hint: 'numbered rows match the badges on the graph' },
    },
  };

   return {
      props:{
    demoUnits,
    cubicProfile,
         sectionsContent,
         introContent,
         obj4Table,
         obj8Table,
         obj9Table,
         obj10Table,
         summaryTable,
         faqQuestions,
         schemas,
         obj10MiniTable,
          seoData: {
        title: "Analyzing Functions: Behavior & Intervals | Learn Math Class",
        description: "Learn function analysis by identifying intervals of increase and decrease, local extrema, end behavior, symmetry, and positive and negative intervals from graphs.",
        keywords: keyWords.join(", "),
        url: "/functions/analyzing",
         name: "Analyzing Functions"
      },
       }
    }
   }

const siteTheme = {
  title: '#06357A', accent: '#2563EB', warm: '#B45309',
  panelSoft: '#eff6ff', panelSofter: '#f8fafc', indigoSoft: '#dbeafe', warmSoft: '#fef3c7',
}

export default function AnalyzingFunctionsPage({
  seoData,
  cubicProfile,
  sectionsContent,
  introContent,
  obj4Table,
  obj8Table,
  obj9Table,
  obj10Table,
  summaryTable,
  faqQuestions,
  schemas,
  obj10MiniTable, demoUnits
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
          `Here is such a profile for one function, $f(x) = x^3 - 3x$, the cubic that the extrema example further down this page uses. Its domain and range are all real numbers. It crosses the x-axis at $-\\sqrt{3}$, $0$ and $\\sqrt{3}$, because $x^3 - 3x = x(x^2 - 3)$, and passes through the origin. It rises on $(-\\infty, -1)$, falls on $(-1, 1)$ and rises again on $(1, \\infty)$, so it has a local maximum at $(-1, 2)$ and a local minimum at $(1, -2)$. It is odd, has no period, no discontinuities, and runs off to $-\\infty$ on the left and $+\\infty$ on the right.`,
          <DiagramFrame
            key={'obj1-diagram'}
            id="function-profile-cubic"
            title="The profile of f(x) = x³ − 3x"
            source="/functions/analyzing"
          >
            <FunctionAnalysis data={cubicProfile} variant="full" theme={siteTheme} />
          </DiagramFrame>,
          `Each row of the profile is one of the questions the sections below take up in turn. The numbered badges tie every fact to the spot on the graph where it shows, and the two strips under the graph make the sign of $f$ and its direction readable at a glance. That picture, all features together and none missing, is what a complete analysis produces.`,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
                  <div key={'unit-domainGraph'} dangerouslySetInnerHTML={{ __html: demoUnits.domainGraph }} />,
          `Range is read the same way from the vertical shadow of the graph.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-monotoneSquare'} dangerouslySetInnerHTML={{ __html: demoUnits.monotoneSquare }} />,
          `At the turning point itself the function is neither increasing nor decreasing: the intervals are open at x = 0.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'unit-extremaCubic'} dangerouslySetInnerHTML={{ __html: demoUnits.extremaCubic }} />,
          `Widen the interval and the endpoints climb further, while the local max 2 and min −2 stay where they are.`,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
                  <div key={'unit-symmetry'} dangerouslySetInnerHTML={{ __html: demoUnits.symmetry }} />,
          `Symmetry halves the work: one side of the graph determines the other.`,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
          <div key={'unit-sinePeriod'} dangerouslySetInnerHTML={{ __html: demoUnits.sinePeriod }} />,
          `A shorter shift never lands on a matching point everywhere at once, which is why 2π is the smallest such p.`,
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
                  <div key={'unit-endBehavior'} dangerouslySetInnerHTML={{ __html: demoUnits.endBehavior }} />,
          `End behaviour and asymptotes are the same fact seen from the function and from the line.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'obj9-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj9Table }} />,
        ]
    },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //       <div key={'obj10-table'} style={tableWrapStyle}
    //            dangerouslySetInnerHTML={{ __html: obj10Table }} />,
    //     ]
    // },


    {
    id:'10',
    title:sectionsContent.obj10.title,
    link:sectionsContent.obj10.link,
    content:[
      sectionsContent.obj10.content,
      <div key={'obj10-mini-table'} style={tableWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj10MiniTable }} />,
      sectionsContent.obj10.contentAfter,
      <div key={'obj10-table'} style={tableWrapStyle}
           dangerouslySetInnerHTML={{ __html: obj10Table }} />,
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
        link:sectionsContent.pitfalls.link,
        content:[
          sectionsContent.pitfalls.content,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Analyzing Functions</h1>
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