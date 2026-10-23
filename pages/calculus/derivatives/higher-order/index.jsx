

// // tables-optimized: v4 | 2026-05-24 | 4 tables (obj1 aggregation, obj3 aggregation, obj9 aggregation, overview summary capstone)

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){
// const keyWords = [
//   "higher order derivatives",
//   "second derivative",
//   "third derivative",
//   "nth derivative",
//   "f double prime",
//   "concavity second derivative",
//   "acceleration derivative",
//   "jerk calculus",
//   "derivative notation",
//   "Leibniz notation higher derivatives",
//   "Taylor series derivatives",
//   "smoothness class C infinity",
//   "repeated differentiation",
//   "derivative patterns"
// ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- TABLES ----------

//   // obj1 — aggregation/mapping: notation across orders
//   const obj1Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation} text-align: center;">Order</th>
//       <th style="${tableHeaders.aggregation}">Lagrange notation</th>
//       <th style="${tableHeaders.aggregation}">Leibniz notation</th>
//       <th style="${tableHeaders.aggregation}">Read aloud</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dy ⁄ dx</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;f prime&quot; ;&nbsp; &quot;d y, d x&quot;</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;&apos;(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d<sup>2</sup>y ⁄ dx<sup>2</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;f double prime&quot; ;&nbsp; &quot;d two y, d x squared&quot;</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;&apos;&apos;(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d<sup>3</sup>y ⁄ dx<sup>3</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;f triple prime&quot;</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4 and beyond</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f<sup>(4)</sup>(x),&nbsp; f<sup>(5)</sup>(x)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d<sup>4</sup>y ⁄ dx<sup>4</sup>,&nbsp; d<sup>5</sup>y ⁄ dx<sup>5</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parentheses distinguish derivative order from an exponent</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">n (general)</td>
//       <td style="padding: 12px 15px; color: #34495e;">f<sup>(n)</sup>(x)</td>
//       <td style="padding: 12px 15px; color: #34495e;">d<sup>n</sup>y ⁄ dx<sup>n</sup></td>
//       <td style="padding: 12px 15px; color: #34495e;">the nth derivative — a single operator applied n times</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj3 — aggregation: kinematic interpretation by order
//   const obj3Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation} text-align: center;">Order</th>
//       <th style="${tableHeaders.aggregation}">Derivative of position</th>
//       <th style="${tableHeaders.aggregation}">Standard name</th>
//       <th style="${tableHeaders.aggregation}">What it measures</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s&apos;(t)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">velocity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change of position; speed and direction of motion</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s&apos;&apos;(t)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">acceleration</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change of velocity; force-related quantity in Newton&apos;s second law</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s&apos;&apos;&apos;(t)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">jerk</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change of acceleration; felt physically as a sudden push or lurch</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s<sup>(4)</sup>(t)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">snap (or jounce)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">specialised engineering use; rarely appears in standard calculus</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s<sup>(5)</sup>(t)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">crackle</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">named by analogy with snap; specialised engineering use</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">6</td>
//       <td style="padding: 12px 15px; color: #34495e;">s<sup>(6)</sup>(t)</td>
//       <td style="padding: 12px 15px; color: #34495e;">pop</td>
//       <td style="padding: 12px 15px; color: #34495e;">named by analogy with snap and crackle; specialised engineering use</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // obj9 — aggregation: smoothness classes
//   const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Class</th>
//       <th style="${tableHeaders.aggregation}">What it requires</th>
//       <th style="${tableHeaders.aggregation}">Examples</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">C<sup>0</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f is continuous (no derivatives required)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x|; piecewise functions whose pieces match values at the boundary</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">C<sup>n</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f, f&apos;, f&apos;&apos;, … , f<sup>(n)</sup> all exist and are continuous</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x|x| belongs to C<sup>1</sup> but not C<sup>2</sup></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">C<sup>∞</sup>&nbsp; (smooth)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">derivatives of all orders exist and are continuous</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">polynomials, e<sup>x</sup>, sin x, cos x, and their compositions</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Analytic</td>
//       <td style="padding: 12px 15px; color: #34495e;">C<sup>∞</sup>, and the Taylor series at every point converges to f near that point</td>
//       <td style="padding: 12px 15px; color: #34495e;">most elementary functions; counterexample f(x) = e<sup>−1 ⁄ x²</sup> (extended by f(0) = 0) is C<sup>∞</sup> but not analytic at 0</td>
//     </tr>
//   </tbody>
// </table>
// `

//   // overview — summary capstone: master reference of nth derivatives
//   const overviewTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Function</th>
//       <th style="${tableHeaders.summary}">nth derivative</th>
//       <th style="${tableHeaders.summary}">Note</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x<sup>m</sup>&nbsp; (m a positive integer)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m! ⁄ (m − n)! · x<sup>m − n</sup>&nbsp; for n ≤ m</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">falling factorial; becomes the constant m! when n = m, and zero for n &gt; m</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial of degree m</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m! · a<sub>m</sub>&nbsp; (when n = m);&nbsp; 0 (when n &gt; m)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">terminates after m + 1 differentiations</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 ⁄ x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−1)<sup>n</sup> · n! ⁄ x<sup>n + 1</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">alternating sign accompanied by factorial growth in the numerator</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ln x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−1)<sup>n − 1</sup> · (n − 1)! ⁄ x<sup>n</sup>&nbsp; (n ≥ 1)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the 1 ⁄ x pattern shifted by one order, since (ln x)&apos; = 1 ⁄ x</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>x</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">self-replicating; the only nonzero elementary function with this property</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>a x</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>n</sup> · e<sup>a x</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">each differentiation multiplies by a, so the constant accumulates as a<sup>n</sup></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a<sup>x</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(ln a)<sup>n</sup> · a<sup>x</sup></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">since a<sup>x</sup> = e<sup>x · ln a</sup>, ln a takes the role of the multiplier</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(x + n π ⁄ 2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">four-fold cycle: sin → cos → −sin → −cos → sin</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos x</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(x + n π ⁄ 2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same four-fold cycle, starting from cosine</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">sin(a x)</td>
//       <td style="padding: 12px 15px; color: #34495e;">a<sup>n</sup> · sin(a x + n π ⁄ 2)</td>
//       <td style="padding: 12px 15px; color: #34495e;">trigonometric cycle persists; amplitude grows as a<sup>n</sup></td>
//     </tr>
//   </tbody>
// </table>
// `

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />

  

// //   const sectionsContent = {
// //   // ─── /calculus/derivatives/higher-order ───────────────────────────────────

// //   obj0: {
// //     title: `Key Terms`,
// //     content: `
// // - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative) — $f^{(n)}(x)$, differentiating $f$ a total of $n$ times
// // - [Derivative](!/calculus/definitions#derivative) — the first-order case from which all higher orders follow
// // - [Concavity](!/calculus/definitions#concavity) — governed by the second derivative $f''$
// // - [Inflection Point](!/calculus/definitions#inflection_point) — where $f''$ changes sign`,
// //     before: ``,
// //     after: `
// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
// //     link: '',
// //   },

// //   obj1: {
// //     title: `Definition and Notation`,
// //     content: `
// // The second derivative of $f$ is the derivative of $f'$:

// // $$f''(x) = \\frac{d}{dx}[f'(x)]$$

// // The third derivative is the derivative of $f''$, and so on. The $n$th derivative, denoted $f^{(n)}(x)$, is obtained by differentiating $f$ a total of $n$ times.

// // In Lagrange notation, the first few derivatives use primes: $f'$, $f''$, $f'''$. Beyond the third, parenthetical superscripts replace primes to avoid clutter: $f^{(4)}$, $f^{(5)}$, $f^{(n)}$. The parentheses distinguish the derivative order from an exponent—$f^{(4)}(x)$ is the fourth derivative, not $f$ raised to the fourth power.

// // In Leibniz notation, the $n$th derivative of $y$ with respect to $x$ is written

// // $$\\frac{d^n y}{dx^n}$$

// // The symbol $d^n y / dx^n$ is a single operator applied to $y$, not a fraction with $d^n y$ in the numerator and $dx^n$ in the denominator. For the second derivative specifically: $\\frac{d^2 y}{dx^2}$ reads "d-two-y, d-x-squared" and represents $\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)$. The table below lines up both notation systems alongside their spoken forms across orders one through n.

// //  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj2: {
// //     title: `The Second Derivative`,
// //     content: `
// // The second derivative $f''(x)$ measures the rate of change of the slope. Where $f''(x) > 0$, the slope $f'(x)$ is increasing—the function bends upward (concave up). Where $f''(x) < 0$, the slope is decreasing—the function bends downward (concave down).

// // This information is independent of whether $f$ itself is increasing or decreasing. A function can rise while decelerating ($f' > 0$, $f'' < 0$) or fall while accelerating in the negative direction ($f' < 0$, $f'' < 0$). The first and second derivatives describe different aspects of behavior.

// // The second derivative also powers the [second derivative test](!/calculus/derivatives/graph-analysis) for classifying critical points. At a point where $f'(c) = 0$: if $f''(c) > 0$, the critical point is a local minimum; if $f''(c) < 0$, a local maximum; if $f''(c) = 0$, the test is inconclusive.

// // Inflection points—where concavity reverses—occur where $f''$ changes sign. The condition $f''(c) = 0$ is necessary but not sufficient; the sign of $f''$ must actually switch across $c$.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj3: {
// //     title: `Physical Interpretation`,
// //     content: `
// // In kinematics, the first three derivatives of position $s(t)$ have standard names.

// // The first derivative $s'(t)$ is velocity: the rate of change of position. It tells how fast an object moves and in which direction.

// // The second derivative $s''(t)$ is acceleration: the rate of change of velocity. Positive acceleration means speeding up (in the positive direction) or decelerating (in the negative direction). The sign of acceleration relative to the sign of velocity determines whether the object is speeding up or slowing down.

// // The third derivative $s'''(t)$ is jerk: the rate of change of acceleration. Jerk is felt physically as a sudden push or lurch—smooth motion has low jerk, while abrupt starts and stops produce high jerk. Elevator design, roller coaster engineering, and vehicle ride comfort all involve controlling jerk.

// // Beyond the third derivative, the terms snap ($s^{(4)}$), crackle ($s^{(5)}$), and pop ($s^{(6)}$) are used in specialized engineering contexts but rarely appear in standard calculus. The table below collects all six in order, with each name paired with what the derivative measures.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj4: {
// //     title: `Patterns in Repeated Differentiation — Polynomials`,
// //     content: `
// // Polynomials terminate under repeated differentiation. Each differentiation reduces the degree by one, so a polynomial of degree $n$ reaches a constant after $n$ differentiations and becomes zero after $n + 1$.

// // For $f(x) = x^5$:

// // $$f'(x) = 5x^4, \\quad f''(x) = 20x^3, \\quad f'''(x) = 60x^2, \\quad f^{(4)}(x) = 120x, \\quad f^{(5)}(x) = 120, \\quad f^{(6)}(x) = 0$$

// // The coefficient at the $n$th derivative of $x^n$ is $n! = n(n-1)(n-2) \\cdots 1$, accumulated from the [power rule](!/calculus/derivatives/rules) applied $n$ times. Specifically, $\\frac{d^n}{dx^n}[x^n] = n!$ and $\\frac{d^k}{dx^k}[x^n] = 0$ for all $k > n$.

// // For a general polynomial $p(x) = a_n x^n + \\cdots + a_1 x + a_0$, the $n$th derivative is $n! \\cdot a_n$, a constant. This relationship becomes central in Taylor series, where the coefficient $a_n$ is recovered as $\\frac{f^{(n)}(a)}{n!}$.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj5: {
// //     title: `Patterns in Repeated Differentiation — Exponentials`,
// //     content: `
// // The natural exponential $e^x$ is unchanged by differentiation:

// // $$\\frac{d^n}{dx^n}[e^x] = e^x \\quad \\text{for all } n \\geq 1$$

// // Every derivative of $e^x$ is $e^x$. No other elementary function has this property (aside from the trivial $f(x) = 0$).

// // For the general exponential $e^{ax}$, the chain rule introduces a factor of $a$ at each step:

// // $$\\frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$

// // Each differentiation multiplies by $a$. After $n$ differentiations, the accumulated constant is $a^n$. This pattern appears in solutions to differential equations, where $e^{ax}$ satisfies equations whose characteristic root is $a$.

// // For $a^x$ with arbitrary base: since $a^x = e^{x \\ln a}$, the $n$th derivative is $(\\ln a)^n \\cdot a^x$. The factor $\\ln a$ replaces $a$ in the exponential pattern.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj6: {
// //     title: `Patterns in Repeated Differentiation — Sine and Cosine`,
// //     content: `
// // The derivatives of $\\sin x$ cycle with period four:

// // $$\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x \\to \\cdots$$

// // The $n$th derivative of $\\sin x$ depends on $n \\mod 4$:

// // $$\\frac{d^n}{dx^n}[\\sin x] = \\begin{cases} \\sin x & n \\equiv 0 \\pmod{4} \\\\ \\cos x & n \\equiv 1 \\pmod{4} \\\\ -\\sin x & n \\equiv 2 \\pmod{4} \\\\ -\\cos x & n \\equiv 3 \\pmod{4} \\end{cases}$$

// // A compact formula captures all four cases: $\\frac{d^n}{dx^n}[\\sin x] = \\sin\\left(x + \\frac{n\\pi}{2}\\right)$. The same holds for cosine: $\\frac{d^n}{dx^n}[\\cos x] = \\cos\\left(x + \\frac{n\\pi}{2}\\right)$.

// // For $\\sin(ax)$, the chain rule introduces a factor of $a$ per differentiation: $\\frac{d^n}{dx^n}[\\sin(ax)] = a^n \\sin\\left(ax + \\frac{n\\pi}{2}\\right)$. The cycle in the trigonometric part persists; only the amplitude grows as $a^n$.

// // This four-fold periodicity distinguishes [trigonometric derivatives](!/calculus/derivatives/common) from polynomial derivatives (which terminate) and exponential derivatives (which replicate).
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj7: {
// //     title: `The nth Derivative of Specific Forms`,
// //     content: `
// // Several standard functions have known closed-form $n$th derivatives.

// // For $f(x) = \\frac{1}{x}$: rewriting as $x^{-1}$ and applying the power rule repeatedly gives

// // $$f^{(n)}(x) = \\frac{(-1)^n \\cdot n!}{x^{n+1}}$$

// // Each differentiation multiplies by one more negative integer, producing the factorial and the alternating sign.

// // For $f(x) = \\ln x$: since $f'(x) = x^{-1}$, the higher derivatives follow the pattern above shifted by one:

// // $$f^{(n)}(x) = \\frac{(-1)^{n-1} \\cdot (n-1)!}{x^n} \\qquad n \\geq 1$$

// // For $f(x) = x^m$ where $m$ is a positive integer and $n \\leq m$:

// // $$f^{(n)}(x) = \\frac{m!}{(m-n)!} \\cdot x^{m-n}$$

// // The coefficient $\\frac{m!}{(m-n)!}$ is the falling factorial, counting the multipliers accumulated over $n$ applications of the power rule.

// // These closed-form expressions are useful for computing specific high-order derivatives without performing each differentiation step individually.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj8: {
// //     title: `Higher-Order Derivatives and Taylor Series`,
// //     content: `
// // The Taylor series of $f$ centered at $x = a$ is

// // $$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n$$

// // Each coefficient depends on a higher-order derivative evaluated at the center point $a$. The zeroth derivative $f^{(0)}(a) = f(a)$ gives the constant term. The first derivative gives the linear term. The second derivative gives the quadratic correction. Each successive term captures finer detail about how $f$ deviates from the lower-order approximation.

// // The Taylor polynomial of degree $k$ truncates the series after $k + 1$ terms, providing a polynomial approximation to $f$ near $a$. The quality of the approximation improves with $k$—more derivatives mean a closer fit over a wider interval.

// // The connection between higher-order derivatives and Taylor series gives these derivatives their deepest significance: the complete collection $\\{f^{(n)}(a)\\}_{n=0}^{\\infty}$ determines $f$ locally (for analytic functions). Knowing all derivatives at a single point reconstructs the entire function in a neighborhood of that point.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj9: {
// //     title: `Existence and Smoothness Classes`,
// //     content: `
// // A function may be differentiable once but not twice. The function $f(x) = x|x|$ has $f'(x) = 2|x|$, which is continuous but not differentiable at $x = 0$. So $f$ is in class $C^1$ (continuously differentiable) but not $C^2$.

// // The smoothness classes organize functions by how many continuous derivatives they possess. A function belongs to $C^n$ if $f, f', f'', \\ldots, f^{(n)}$ all exist and are continuous. Class $C^0$ is simply continuous functions. Class $C^\\infty$ consists of infinitely differentiable functions—called smooth functions—where derivatives of all orders exist and are continuous.

// // Polynomials, $e^x$, $\\sin x$, $\\cos x$, and their compositions are all $C^\\infty$. [Piecewise functions](!/calculus/derivatives/special) typically belong to a finite $C^n$ class determined by how smoothly the pieces join at their boundaries: matching values gives $C^0$, matching first derivatives gives $C^1$, and so on.

// // There exist functions that are $C^\\infty$ but not analytic—their Taylor series converges but not to the function itself. The standard example is $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$: every derivative at $x = 0$ is zero, so the Taylor series is identically zero, yet the function is not zero away from the origin. Smooth does not automatically mean representable by a power series. The table below lays out the main tiers — C⁰, the general C&#8319;, C&#8734;, and the strictly stronger analytic class — alongside what each requires and characteristic examples.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   overview: {
// //     title: `nth Derivatives at a Glance`,
// //     content: `
// // Different function families behave very differently under repeated differentiation: polynomials terminate, exponentials replicate, and trigonometric functions cycle. The table below collects the closed-form nth derivative for each standard function discussed above into a single reference card, with a brief note on what drives the pattern.
// // `,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// // };


// // formulas-optimized: v1 | 2026-06-09 | 8 callouts (obj5, obj6, obj7, obj8)
// const sectionsContent = {
//   // ─── /calculus/derivatives/higher-order ───────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative) — $f^{(n)}(x)$, differentiating $f$ a total of $n$ times
// - [Derivative](!/calculus/definitions#derivative) — the first-order case from which all higher orders follow
// - [Concavity](!/calculus/definitions#concavity) — governed by the second derivative $f''$
// - [Inflection Point](!/calculus/definitions#inflection_point) — where $f''$ changes sign`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Definition and Notation`,
//     content: `
// The second derivative of $f$ is the derivative of $f'$:

// $$f''(x) = \\frac{d}{dx}[f'(x)]$$

// The third derivative is the derivative of $f''$, and so on. The $n$th derivative, denoted $f^{(n)}(x)$, is obtained by differentiating $f$ a total of $n$ times.

// In Lagrange notation, the first few derivatives use primes: $f'$, $f''$, $f'''$. Beyond the third, parenthetical superscripts replace primes to avoid clutter: $f^{(4)}$, $f^{(5)}$, $f^{(n)}$. The parentheses distinguish the derivative order from an exponent—$f^{(4)}(x)$ is the fourth derivative, not $f$ raised to the fourth power.

// In Leibniz notation, the $n$th derivative of $y$ with respect to $x$ is written

// $$\\frac{d^n y}{dx^n}$$

// The symbol $d^n y / dx^n$ is a single operator applied to $y$, not a fraction with $d^n y$ in the numerator and $dx^n$ in the denominator. For the second derivative specifically: $\\frac{d^2 y}{dx^2}$ reads "d-two-y, d-x-squared" and represents $\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)$. The table below lines up both notation systems alongside their spoken forms across orders one through n.

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `The Second Derivative`,
//     content: `
// The second derivative $f''(x)$ measures the rate of change of the slope. Where $f''(x) > 0$, the slope $f'(x)$ is increasing—the function bends upward (concave up). Where $f''(x) < 0$, the slope is decreasing—the function bends downward (concave down).

// This information is independent of whether $f$ itself is increasing or decreasing. A function can rise while decelerating ($f' > 0$, $f'' < 0$) or fall while accelerating in the negative direction ($f' < 0$, $f'' < 0$). The first and second derivatives describe different aspects of behavior.

// The second derivative also powers the [second derivative test](!/calculus/derivatives/graph-analysis) for classifying critical points. At a point where $f'(c) = 0$: if $f''(c) > 0$, the critical point is a local minimum; if $f''(c) < 0$, a local maximum; if $f''(c) = 0$, the test is inconclusive.

// Inflection points—where concavity reverses—occur where $f''$ changes sign. The condition $f''(c) = 0$ is necessary but not sufficient; the sign of $f''$ must actually switch across $c$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Physical Interpretation`,
//     content: `
// In kinematics, the first three derivatives of position $s(t)$ have standard names.

// The first derivative $s'(t)$ is velocity: the rate of change of position. It tells how fast an object moves and in which direction.

// The second derivative $s''(t)$ is acceleration: the rate of change of velocity. Positive acceleration means speeding up (in the positive direction) or decelerating (in the negative direction). The sign of acceleration relative to the sign of velocity determines whether the object is speeding up or slowing down.

// The third derivative $s'''(t)$ is jerk: the rate of change of acceleration. Jerk is felt physically as a sudden push or lurch—smooth motion has low jerk, while abrupt starts and stops produce high jerk. Elevator design, roller coaster engineering, and vehicle ride comfort all involve controlling jerk.

// Beyond the third derivative, the terms snap ($s^{(4)}$), crackle ($s^{(5)}$), and pop ($s^{(6)}$) are used in specialized engineering contexts but rarely appear in standard calculus. The table below collects all six in order, with each name paired with what the derivative measures.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Patterns in Repeated Differentiation — Polynomials`,
//     content: `
// Polynomials terminate under repeated differentiation. Each differentiation reduces the degree by one, so a polynomial of degree $n$ reaches a constant after $n$ differentiations and becomes zero after $n + 1$.

// For $f(x) = x^5$:

// $$f'(x) = 5x^4, \\quad f''(x) = 20x^3, \\quad f'''(x) = 60x^2, \\quad f^{(4)}(x) = 120x, \\quad f^{(5)}(x) = 120, \\quad f^{(6)}(x) = 0$$

// The coefficient at the $n$th derivative of $x^n$ is $n! = n(n-1)(n-2) \\cdots 1$, accumulated from the [power rule](!/calculus/derivatives/rules) applied $n$ times. Specifically, $\\frac{d^n}{dx^n}[x^n] = n!$ and $\\frac{d^k}{dx^k}[x^n] = 0$ for all $k > n$.

// For a general polynomial $p(x) = a_n x^n + \\cdots + a_1 x + a_0$, the $n$th derivative is $n! \\cdot a_n$, a constant. This relationship becomes central in Taylor series, where the coefficient $a_n$ is recovered as $\\frac{f^{(n)}(a)}{n!}$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Patterns in Repeated Differentiation — Exponentials`,
//     content: `
// The natural exponential $e^x$ is unchanged by differentiation:

// @academic[formula_callout:nth Derivative of Natural Exponential
// $$\\frac{d^n}{dx^n}[e^x] = e^x$$
// /calculus/formulas#nth_derivative_of_natural_exponential]@

// Every derivative of $e^x$ is $e^x$. No other elementary function has this property (aside from the trivial $f(x) = 0$).

// For the general exponential $e^{ax}$, the chain rule introduces a factor of $a$ at each step:

// @academic[formula_callout:nth Derivative of Scaled Exponential
// $$\\frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$
// /calculus/formulas#nth_derivative_of_scaled_exponential]@

// @academic[formulas_link:Browse all derivative formulas
// /calculus/formulas]@

// Each differentiation multiplies by $a$. After $n$ differentiations, the accumulated constant is $a^n$. This pattern appears in solutions to differential equations, where $e^{ax}$ satisfies equations whose characteristic root is $a$.

// For $a^x$ with arbitrary base: since $a^x = e^{x \\ln a}$, the $n$th derivative is $(\\ln a)^n \\cdot a^x$. The factor $\\ln a$ replaces $a$ in the exponential pattern.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Patterns in Repeated Differentiation — Sine and Cosine`,
//     content: `
// The derivatives of $\\sin x$ cycle with period four:

// $$\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x \\to \\cdots$$

// The $n$th derivative of $\\sin x$ depends on $n \\mod 4$:

// $$\\frac{d^n}{dx^n}[\\sin x] = \\begin{cases} \\sin x & n \\equiv 0 \\pmod{4} \\\\ \\cos x & n \\equiv 1 \\pmod{4} \\\\ -\\sin x & n \\equiv 2 \\pmod{4} \\\\ -\\cos x & n \\equiv 3 \\pmod{4} \\end{cases}$$

// A compact formula captures all four cases: $\\frac{d^n}{dx^n}[\\sin x] = \\sin\\left(x + \\frac{n\\pi}{2}\\right)$. The same holds for cosine: $\\frac{d^n}{dx^n}[\\cos x] = \\cos\\left(x + \\frac{n\\pi}{2}\\right)$.

// @academic[formula_callout:nth Derivative of Sine
// $$\\frac{d^n}{dx^n}[\\sin x] = \\sin\\!\\left(x + \\frac{n\\pi}{2}\\right)$$
// /calculus/formulas#nth_derivative_of_sine]@

// @academic[formula_callout:nth Derivative of Cosine
// $$\\frac{d^n}{dx^n}[\\cos x] = \\cos\\!\\left(x + \\frac{n\\pi}{2}\\right)$$
// /calculus/formulas#nth_derivative_of_cosine]@

// @academic[formulas_link:Browse all derivative formulas
// /calculus/formulas]@

// For $\\sin(ax)$, the chain rule introduces a factor of $a$ per differentiation: $\\frac{d^n}{dx^n}[\\sin(ax)] = a^n \\sin\\left(ax + \\frac{n\\pi}{2}\\right)$. The cycle in the trigonometric part persists; only the amplitude grows as $a^n$.

// This four-fold periodicity distinguishes [trigonometric derivatives](!/calculus/derivatives/common) from polynomial derivatives (which terminate) and exponential derivatives (which replicate).
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `The nth Derivative of Specific Forms`,
//     content: `
// Several standard functions have known closed-form $n$th derivatives.

// For $f(x) = \\frac{1}{x}$: rewriting as $x^{-1}$ and applying the power rule repeatedly gives

// @academic[formula_callout:nth Derivative of Reciprocal
// $$\\frac{d^n}{dx^n}\\!\\left[\\frac{1}{x}\\right] = \\frac{(-1)^n\\, n!}{x^{n+1}}$$
// /calculus/formulas#nth_derivative_of_reciprocal]@

// Each differentiation multiplies by one more negative integer, producing the factorial and the alternating sign.

// For $f(x) = \\ln x$: since $f'(x) = x^{-1}$, the higher derivatives follow the pattern above shifted by one:

// @academic[formula_callout:nth Derivative of Natural Logarithm
// $$\\frac{d^n}{dx^n}[\\ln x] = \\frac{(-1)^{n-1}\\, (n-1)!}{x^n}$$
// /calculus/formulas#nth_derivative_of_natural_logarithm]@

// For $f(x) = x^m$ where $m$ is a positive integer and $n \\leq m$:

// @academic[formula_callout:nth Derivative of Power
// $$\\frac{d^n}{dx^n}[x^m] = \\frac{m!}{(m-n)!}\\, x^{m-n} \\quad (n \\leq m)$$
// /calculus/formulas#nth_derivative_of_power]@

// @academic[formulas_link:Browse all derivative formulas
// /calculus/formulas]@

// The coefficient $\\frac{m!}{(m-n)!}$ is the falling factorial, counting the multipliers accumulated over $n$ applications of the power rule.

// These closed-form expressions are useful for computing specific high-order derivatives without performing each differentiation step individually.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Higher-Order Derivatives and Taylor Series`,
//     content: `
// The Taylor series of $f$ centered at $x = a$ is

// @academic[formula_callout:Taylor Series
// $$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n$$
// /calculus/formulas#taylor_series]@

// @academic[formulas_link:Browse all derivative formulas
// /calculus/formulas]@

// Each coefficient depends on a higher-order derivative evaluated at the center point $a$. The zeroth derivative $f^{(0)}(a) = f(a)$ gives the constant term. The first derivative gives the linear term. The second derivative gives the quadratic correction. Each successive term captures finer detail about how $f$ deviates from the lower-order approximation.

// The Taylor polynomial of degree $k$ truncates the series after $k + 1$ terms, providing a polynomial approximation to $f$ near $a$. The quality of the approximation improves with $k$—more derivatives mean a closer fit over a wider interval.

// The connection between higher-order derivatives and Taylor series gives these derivatives their deepest significance: the complete collection $\\{f^{(n)}(a)\\}_{n=0}^{\\infty}$ determines $f$ locally (for analytic functions). Knowing all derivatives at a single point reconstructs the entire function in a neighborhood of that point.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Existence and Smoothness Classes`,
//     content: `
// A function may be differentiable once but not twice. The function $f(x) = x|x|$ has $f'(x) = 2|x|$, which is continuous but not differentiable at $x = 0$. So $f$ is in class $C^1$ (continuously differentiable) but not $C^2$.

// The smoothness classes organize functions by how many continuous derivatives they possess. A function belongs to $C^n$ if $f, f', f'', \\ldots, f^{(n)}$ all exist and are continuous. Class $C^0$ is simply continuous functions. Class $C^\\infty$ consists of infinitely differentiable functions—called smooth functions—where derivatives of all orders exist and are continuous.

// Polynomials, $e^x$, $\\sin x$, $\\cos x$, and their compositions are all $C^\\infty$. [Piecewise functions](!/calculus/derivatives/special) typically belong to a finite $C^n$ class determined by how smoothly the pieces join at their boundaries: matching values gives $C^0$, matching first derivatives gives $C^1$, and so on.

// There exist functions that are $C^\\infty$ but not analytic—their Taylor series converges but not to the function itself. The standard example is $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$: every derivative at $x = 0$ is zero, so the Taylor series is identically zero, yet the function is not zero away from the origin. Smooth does not automatically mean representable by a power series. The table below lays out the main tiers — C⁰, the general C&#8319;, C&#8734;, and the strictly stronger analytic class — alongside what each requires and characteristic examples.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   overview: {
//     title: `nth Derivatives at a Glance`,
//     content: `
// Different function families behave very differently under repeated differentiation: polynomials terminate, exponentials replicate, and trigonometric functions cycle. The table below collects the closed-form nth derivative for each standard function discussed above into a single reference card, with a brief note on what drives the pattern.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// const introContent = {
//   id: `intro`,
//   title: `Differentiating the Derivative`,
//   content: `
// The derivative $f'$ is a [function](!/calculus/derivatives/function) in its own right, and functions can be differentiated. Applying the differentiation process to $f'$ produces the second derivative $f''$, which measures how the slope of $f$ changes. Differentiating again yields $f'''$, then $f^{(4)}$, and so on without limit—provided the relevant limits exist at each stage.

// Each successive derivative captures a finer layer of a function's behavior. The first derivative controls direction. The second controls [concavity](!/calculus/derivatives/graph-analysis). The third and beyond govern subtler aspects of curvature and, in physics, correspond to jerk, snap, and higher kinematic quantities. At the theoretical level, the entire collection of higher-order derivatives at a point encodes the local shape of a function through its Taylor series.
// `
// };



// const faqQuestions = {
//   obj1: {
//     question: "What is the notation for higher order derivatives?",
//     answer: "In Lagrange notation: f', f'', f''' for the first three, then f⁽⁴⁾, f⁽⁵⁾, f⁽ⁿ⁾ with parentheses to distinguish from exponents. In Leibniz notation: dⁿy/dxⁿ. The second derivative d²y/dx² means differentiating dy/dx with respect to x.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What does the second derivative tell you?",
//     answer: "The second derivative f''(x) measures the rate of change of slope. Where f'' > 0, the function is concave up (bending upward). Where f'' < 0, it's concave down. At critical points, f'' > 0 indicates a local minimum, f'' < 0 a local maximum.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "What are velocity, acceleration, and jerk?",
//     answer: "For position s(t): velocity s'(t) is the first derivative (rate of position change), acceleration s''(t) is the second derivative (rate of velocity change), and jerk s'''(t) is the third derivative (rate of acceleration change, felt as sudden pushes or lurches).",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "What happens when you differentiate a polynomial repeatedly?",
//     answer: "Each differentiation reduces the degree by one. A degree-n polynomial becomes constant after n differentiations and zero after n+1. The nth derivative of xⁿ is n! (n factorial). This termination property distinguishes polynomials from transcendental functions.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "What is the nth derivative of e^x?",
//     answer: "The nth derivative of eˣ is eˣ for all n ≥ 1—it's unchanged by differentiation. For e^(ax), each differentiation multiplies by a, so the nth derivative is aⁿe^(ax). No other elementary function (except zero) has this self-replicating property.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "What is the pattern for derivatives of sine and cosine?",
//     answer: "Derivatives of sin x cycle with period 4: sin x → cos x → −sin x → −cos x → sin x. The nth derivative is sin(x + nπ/2). Same for cosine: cos(x + nπ/2). For sin(ax), the pattern becomes aⁿsin(ax + nπ/2).",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "What is the nth derivative of 1/x and ln x?",
//     answer: "For 1/x: the nth derivative is (−1)ⁿ·n!/x^(n+1). For ln x: the nth derivative (n ≥ 1) is (−1)^(n−1)·(n−1)!/xⁿ. These closed-form expressions allow computing high-order derivatives without repeated differentiation.",
//     sectionId: "7"
//   },
//   obj8: {
//     question: "How do higher derivatives connect to Taylor series?",
//     answer: "The Taylor series f(x) = Σ f⁽ⁿ⁾(a)/n! · (x−a)ⁿ uses all higher derivatives at the center point a. Each coefficient f⁽ⁿ⁾(a)/n! controls one term. For analytic functions, knowing all derivatives at one point reconstructs the entire function nearby.",
//     sectionId: "8"
//   },
//   obj9: {
//     question: "What are smoothness classes like C¹ and C∞?",
//     answer: "A function is Cⁿ if its first n derivatives exist and are continuous. C⁰ means continuous, C¹ means continuously differentiable, C∞ means infinitely differentiable (smooth). Polynomials, eˣ, sin x, cos x are C∞. Some C∞ functions are not analytic—their Taylor series doesn't converge to the function.",
//     sectionId: "9"
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Higher Order Derivatives",
//     "description": "Learn higher order derivatives: second derivative and concavity, velocity/acceleration/jerk, patterns for polynomials/exponentials/trig, nth derivative formulas, Taylor series, and smoothness classes.",
//     "url": "https://www.learnmathclass.com/calculus/derivatives/higher-order",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Higher Order Derivatives"
//     },
//     "teaches": [
//       "Definition and notation for higher derivatives",
//       "Second derivative and concavity",
//       "Physical interpretation: velocity, acceleration, jerk",
//       "Derivative patterns for standard functions",
//       "Connection to Taylor series",
//       "Smoothness classes C⁰ through C∞"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Calculus",
//         "item": "https://www.learnmathclass.com/calculus"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Derivatives",
//         "item": "https://www.learnmathclass.com/calculus/derivatives"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Higher Order Derivatives",
//         "item": "https://www.learnmathclass.com/calculus/derivatives/higher-order"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }

//   //  return {
//   //     props:{
//   //        sectionsContent,
//   //        introContent,
//   //         seoData: {
//   //       title: "Higher Order Derivatives | Learn Math Class",
//   //       description: "Metadescription",
//   //       keywords: keyWords.join(", "),
//   //       url: "/calculus/derivatives/higher-order",
//   //        name: "name"
//   //     },
        
//   //      }
//   //   }

//   return {
//   props: {
//     sectionsContent,
//     introContent,
//     obj1Table,
//     obj3Table,
//     obj9Table,
//     overviewTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Higher Order Derivatives: Second, Third & nth | Learn Math Class",
//       description: "Learn higher order derivatives: second derivative and concavity, velocity/acceleration/jerk, patterns for polynomials/exponentials/trig, nth derivative formulas, Taylor series, and smoothness classes.",
//       keywords: keyWords.join(", "),
//       url: "/calculus/derivatives/higher-order",
//       name: "Higher Order Derivatives"
//     },
//   }
// }
//    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// export default function PageTemplate({
//   seoData,
//   sectionsContent,
//   introContent,
//   obj1Table,
//   obj3Table,
//   obj9Table,
//   overviewTable,
//   faqQuestions,
//   schemas
// }) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//           <div key={'obj1-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj1Table}}/>,
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
//           <div key={'obj3-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj3Table}}/>,
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
//           <div key={'obj9-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj9Table}}/>,
//         ]
//     },
//     {
//         id:'overview',
//         title:sectionsContent.overview.title,
//         link:sectionsContent.overview.link,
//         content:[
//           sectionsContent.overview.content,
//           <div key={'overview-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: overviewTable}}/>,
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
//    {/* <Head>
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
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head> */}


// <Head>
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Higher Order Derivatives</h1>
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
//    <KeyTermsCard
//   id="0"
//   title={sectionsContent.obj0.title}
//   content={sectionsContent.obj0.content}
//   after={sectionsContent.obj0.after}
//   variant="light"
// />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }


// tables-optimized: v4 | 2026-05-24 | 4 tables (obj1 aggregation, obj3 aggregation, obj9 aggregation, overview summary capstone)

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
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import renderFunctionPlotV4 from '@/app/utils/illustrations/functions/graphs/functionPlot.v4'
import functionConcavityDiagrams from '@/app/components/calculus/visualizers/functionConcavityDiagrams'
import functionDerivativeDiagrams from '@/app/components/functions/derivative/functionDerivativeDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import Hierarchy from '@/app/components/infographics/Hierarchy'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){
// Concept introduction (section 1) — template I, naming. Running instance:
// x³ throughout — the derivative tool's cubic state, position t³, the curve
// y = x³, and the chain x³ → 3x² → 6x → 6 → 0. Old obj1 text is kept in
// sectionsContent.obj1, unused; its formula box and corollary box are carried
// in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciMotionTable = ciTableOpen(['time t', 'position t³', 'velocity 3t²', 'acceleration 6t']) +
  ciRow(['0', '0', '0', '0']) +
  ciRow(['1', '1', '3', '6'], { shade: true }) +
  ciRow(['2', '8', '12', '12']) +
  ciRow(['3', '27', '27', '18'], { shade: true, last: true }) +
  '</tbody></table>'
const ciChainTable = ciTableOpen(['start', 'once', 'twice', 'three times', 'four times']) +
  ciRow(['x³', '3x²', '6x', '6', '0'], { last: true, color: '#06357a', cols: [0] }) +
  '</tbody></table>'
const ciUsesTable = ciTableOpen(['once it has a name', 'what it settles']) +
  ciRow(['the sign of f″', 'which way a curve bends, and where an inflection is']) +
  ciRow(['f″ at a critical point', 'minimum or maximum, by the second derivative test'], { shade: true }) +
  ciRow(['s″(t)', 'acceleration, for any motion']) +
  ciRow(['every f⁽ⁿ⁾(a)', 'the coefficients of a Taylor series'], { shade: true, last: true }) +
  '</tbody></table>'

const keyWords = [
  "higher order derivatives",
  "second derivative",
  "third derivative",
  "nth derivative",
  "f double prime",
  "concavity second derivative",
  "acceleration derivative",
  "jerk calculus",
  "derivative notation",
  "Leibniz notation higher derivatives",
  "Taylor series derivatives",
  "smoothness class C infinity",
  "repeated differentiation",
  "derivative patterns"
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj1 — aggregation/mapping: notation across orders
  const obj1Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Order</th>
      <th style="${tableHeaders.aggregation}">Lagrange notation</th>
      <th style="${tableHeaders.aggregation}">Leibniz notation</th>
      <th style="${tableHeaders.aggregation}">Read aloud</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dy ⁄ dx</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;f prime&quot; ;&nbsp; &quot;d y, d x&quot;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;&apos;(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d<sup>2</sup>y ⁄ dx<sup>2</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;f double prime&quot; ;&nbsp; &quot;d two y, d x squared&quot;</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f&apos;&apos;&apos;(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d<sup>3</sup>y ⁄ dx<sup>3</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">&quot;f triple prime&quot;</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4 and beyond</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f<sup>(4)</sup>(x),&nbsp; f<sup>(5)</sup>(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">d<sup>4</sup>y ⁄ dx<sup>4</sup>,&nbsp; d<sup>5</sup>y ⁄ dx<sup>5</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">parentheses distinguish derivative order from an exponent</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">n (general)</td>
      <td style="padding: 12px 15px; color: #34495e;">f<sup>(n)</sup>(x)</td>
      <td style="padding: 12px 15px; color: #34495e;">d<sup>n</sup>y ⁄ dx<sup>n</sup></td>
      <td style="padding: 12px 15px; color: #34495e;">the nth derivative — a single operator applied n times</td>
    </tr>
  </tbody>
</table>
`

  // obj3 — aggregation: kinematic interpretation by order
  const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Order</th>
      <th style="${tableHeaders.aggregation}">Derivative of position</th>
      <th style="${tableHeaders.aggregation}">Standard name</th>
      <th style="${tableHeaders.aggregation}">What it measures</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s&apos;(t)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">velocity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change of position; speed and direction of motion</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s&apos;&apos;(t)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">acceleration</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change of velocity; force-related quantity in Newton&apos;s second law</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s&apos;&apos;&apos;(t)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">jerk</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rate of change of acceleration; felt physically as a sudden push or lurch</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s<sup>(4)</sup>(t)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">snap (or jounce)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">specialised engineering use; rarely appears in standard calculus</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">s<sup>(5)</sup>(t)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">crackle</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">named by analogy with snap; specialised engineering use</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">6</td>
      <td style="padding: 12px 15px; color: #34495e;">s<sup>(6)</sup>(t)</td>
      <td style="padding: 12px 15px; color: #34495e;">pop</td>
      <td style="padding: 12px 15px; color: #34495e;">named by analogy with snap and crackle; specialised engineering use</td>
    </tr>
  </tbody>
</table>
`

  // obj9 — aggregation: smoothness classes
  const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Class</th>
      <th style="${tableHeaders.aggregation}">What it requires</th>
      <th style="${tableHeaders.aggregation}">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">C<sup>0</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f is continuous (no derivatives required)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|x|; piecewise functions whose pieces match values at the boundary</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">C<sup>n</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f, f&apos;, f&apos;&apos;, … , f<sup>(n)</sup> all exist and are continuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x|x| belongs to C<sup>1</sup> but not C<sup>2</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">C<sup>∞</sup>&nbsp; (smooth)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">derivatives of all orders exist and are continuous</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">polynomials, e<sup>x</sup>, sin x, cos x, and their compositions</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Analytic</td>
      <td style="padding: 12px 15px; color: #34495e;">C<sup>∞</sup>, and the Taylor series at every point converges to f near that point</td>
      <td style="padding: 12px 15px; color: #34495e;">most elementary functions; counterexample f(x) = e<sup>−1 ⁄ x²</sup> (extended by f(0) = 0) is C<sup>∞</sup> but not analytic at 0</td>
    </tr>
  </tbody>
</table>
`

  // overview — summary capstone: master reference of nth derivatives
  const overviewTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Function</th>
      <th style="${tableHeaders.summary}">nth derivative</th>
      <th style="${tableHeaders.summary}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">x<sup>m</sup>&nbsp; (m a positive integer)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m! ⁄ (m − n)! · x<sup>m − n</sup>&nbsp; for n ≤ m</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">falling factorial; becomes the constant m! when n = m, and zero for n &gt; m</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial of degree m</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m! · a<sub>m</sub>&nbsp; (when n = m);&nbsp; 0 (when n &gt; m)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">terminates after m + 1 differentiations</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">1 ⁄ x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−1)<sup>n</sup> · n! ⁄ x<sup>n + 1</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">alternating sign accompanied by factorial growth in the numerator</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">ln x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(−1)<sup>n − 1</sup> · (n − 1)! ⁄ x<sup>n</sup>&nbsp; (n ≥ 1)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the 1 ⁄ x pattern shifted by one order, since (ln x)&apos; = 1 ⁄ x</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">self-replicating; together with its constant multiples Ce<sup>x</sup>, the only functions with this property</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">e<sup>a x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a<sup>n</sup> · e<sup>a x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">each differentiation multiplies by a, so the constant accumulates as a<sup>n</sup></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">a<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(ln a)<sup>n</sup> · a<sup>x</sup></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">since a<sup>x</sup> = e<sup>x · ln a</sup>, ln a takes the role of the multiplier</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin(x + n π ⁄ 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">four-fold cycle: sin → cos → −sin → −cos → sin</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos(x + n π ⁄ 2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same four-fold cycle, starting from cosine</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">sin(a x)</td>
      <td style="padding: 12px 15px; color: #34495e;">a<sup>n</sup> · sin(a x + n π ⁄ 2)</td>
      <td style="padding: 12px 15px; color: #34495e;">trigonometric cycle persists; amplitude grows as a<sup>n</sup></td>
    </tr>
  </tbody>
</table>
`

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

  

//   const sectionsContent = {
//   // ─── /calculus/derivatives/higher-order ───────────────────────────────────

//   obj0: {
//     title: `Key Terms`,
//     content: `
// - [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative) — $f^{(n)}(x)$, differentiating $f$ a total of $n$ times
// - [Derivative](!/calculus/definitions#derivative) — the first-order case from which all higher orders follow
// - [Concavity](!/calculus/definitions#concavity) — governed by the second derivative $f''$
// - [Inflection Point](!/calculus/definitions#inflection_point) — where $f''$ changes sign`,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
//     link: '',
//   },

//   obj1: {
//     title: `Definition and Notation`,
//     content: `
// The second derivative of $f$ is the derivative of $f'$:

// $$f''(x) = \\frac{d}{dx}[f'(x)]$$

// The third derivative is the derivative of $f''$, and so on. The $n$th derivative, denoted $f^{(n)}(x)$, is obtained by differentiating $f$ a total of $n$ times.

// In Lagrange notation, the first few derivatives use primes: $f'$, $f''$, $f'''$. Beyond the third, parenthetical superscripts replace primes to avoid clutter: $f^{(4)}$, $f^{(5)}$, $f^{(n)}$. The parentheses distinguish the derivative order from an exponent—$f^{(4)}(x)$ is the fourth derivative, not $f$ raised to the fourth power.

// In Leibniz notation, the $n$th derivative of $y$ with respect to $x$ is written

// $$\\frac{d^n y}{dx^n}$$

// The symbol $d^n y / dx^n$ is a single operator applied to $y$, not a fraction with $d^n y$ in the numerator and $dx^n$ in the denominator. For the second derivative specifically: $\\frac{d^2 y}{dx^2}$ reads "d-two-y, d-x-squared" and represents $\\frac{d}{dx}\\left(\\frac{dy}{dx}\\right)$. The table below lines up both notation systems alongside their spoken forms across orders one through n.

//  @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Symbols and Notations](!/math-symbols/calculus) →@

// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `The Second Derivative`,
//     content: `
// The second derivative $f''(x)$ measures the rate of change of the slope. Where $f''(x) > 0$, the slope $f'(x)$ is increasing—the function bends upward (concave up). Where $f''(x) < 0$, the slope is decreasing—the function bends downward (concave down).

// This information is independent of whether $f$ itself is increasing or decreasing. A function can rise while decelerating ($f' > 0$, $f'' < 0$) or fall while accelerating in the negative direction ($f' < 0$, $f'' < 0$). The first and second derivatives describe different aspects of behavior.

// The second derivative also powers the [second derivative test](!/calculus/derivatives/graph-analysis) for classifying critical points. At a point where $f'(c) = 0$: if $f''(c) > 0$, the critical point is a local minimum; if $f''(c) < 0$, a local maximum; if $f''(c) = 0$, the test is inconclusive.

// Inflection points—where concavity reverses—occur where $f''$ changes sign. The condition $f''(c) = 0$ is necessary but not sufficient; the sign of $f''$ must actually switch across $c$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Physical Interpretation`,
//     content: `
// In kinematics, the first three derivatives of position $s(t)$ have standard names.

// The first derivative $s'(t)$ is velocity: the rate of change of position. It tells how fast an object moves and in which direction.

// The second derivative $s''(t)$ is acceleration: the rate of change of velocity. Positive acceleration means speeding up (in the positive direction) or decelerating (in the negative direction). The sign of acceleration relative to the sign of velocity determines whether the object is speeding up or slowing down.

// The third derivative $s'''(t)$ is jerk: the rate of change of acceleration. Jerk is felt physically as a sudden push or lurch—smooth motion has low jerk, while abrupt starts and stops produce high jerk. Elevator design, roller coaster engineering, and vehicle ride comfort all involve controlling jerk.

// Beyond the third derivative, the terms snap ($s^{(4)}$), crackle ($s^{(5)}$), and pop ($s^{(6)}$) are used in specialized engineering contexts but rarely appear in standard calculus. The table below collects all six in order, with each name paired with what the derivative measures.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Patterns in Repeated Differentiation — Polynomials`,
//     content: `
// Polynomials terminate under repeated differentiation. Each differentiation reduces the degree by one, so a polynomial of degree $n$ reaches a constant after $n$ differentiations and becomes zero after $n + 1$.

// For $f(x) = x^5$:

// $$f'(x) = 5x^4, \\quad f''(x) = 20x^3, \\quad f'''(x) = 60x^2, \\quad f^{(4)}(x) = 120x, \\quad f^{(5)}(x) = 120, \\quad f^{(6)}(x) = 0$$

// The coefficient at the $n$th derivative of $x^n$ is $n! = n(n-1)(n-2) \\cdots 1$, accumulated from the [power rule](!/calculus/derivatives/rules) applied $n$ times. Specifically, $\\frac{d^n}{dx^n}[x^n] = n!$ and $\\frac{d^k}{dx^k}[x^n] = 0$ for all $k > n$.

// For a general polynomial $p(x) = a_n x^n + \\cdots + a_1 x + a_0$, the $n$th derivative is $n! \\cdot a_n$, a constant. This relationship becomes central in Taylor series, where the coefficient $a_n$ is recovered as $\\frac{f^{(n)}(a)}{n!}$.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `Patterns in Repeated Differentiation — Exponentials`,
//     content: `
// The natural exponential $e^x$ is unchanged by differentiation:

// $$\\frac{d^n}{dx^n}[e^x] = e^x \\quad \\text{for all } n \\geq 1$$

// Every derivative of $e^x$ is $e^x$. No other elementary function has this property (aside from the trivial $f(x) = 0$).

// For the general exponential $e^{ax}$, the chain rule introduces a factor of $a$ at each step:

// $$\\frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$

// Each differentiation multiplies by $a$. After $n$ differentiations, the accumulated constant is $a^n$. This pattern appears in solutions to differential equations, where $e^{ax}$ satisfies equations whose characteristic root is $a$.

// For $a^x$ with arbitrary base: since $a^x = e^{x \\ln a}$, the $n$th derivative is $(\\ln a)^n \\cdot a^x$. The factor $\\ln a$ replaces $a$ in the exponential pattern.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Patterns in Repeated Differentiation — Sine and Cosine`,
//     content: `
// The derivatives of $\\sin x$ cycle with period four:

// $$\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x \\to \\cdots$$

// The $n$th derivative of $\\sin x$ depends on $n \\mod 4$:

// $$\\frac{d^n}{dx^n}[\\sin x] = \\begin{cases} \\sin x & n \\equiv 0 \\pmod{4} \\\\ \\cos x & n \\equiv 1 \\pmod{4} \\\\ -\\sin x & n \\equiv 2 \\pmod{4} \\\\ -\\cos x & n \\equiv 3 \\pmod{4} \\end{cases}$$

// A compact formula captures all four cases: $\\frac{d^n}{dx^n}[\\sin x] = \\sin\\left(x + \\frac{n\\pi}{2}\\right)$. The same holds for cosine: $\\frac{d^n}{dx^n}[\\cos x] = \\cos\\left(x + \\frac{n\\pi}{2}\\right)$.

// For $\\sin(ax)$, the chain rule introduces a factor of $a$ per differentiation: $\\frac{d^n}{dx^n}[\\sin(ax)] = a^n \\sin\\left(ax + \\frac{n\\pi}{2}\\right)$. The cycle in the trigonometric part persists; only the amplitude grows as $a^n$.

// This four-fold periodicity distinguishes [trigonometric derivatives](!/calculus/derivatives/common) from polynomial derivatives (which terminate) and exponential derivatives (which replicate).
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `The nth Derivative of Specific Forms`,
//     content: `
// Several standard functions have known closed-form $n$th derivatives.

// For $f(x) = \\frac{1}{x}$: rewriting as $x^{-1}$ and applying the power rule repeatedly gives

// $$f^{(n)}(x) = \\frac{(-1)^n \\cdot n!}{x^{n+1}}$$

// Each differentiation multiplies by one more negative integer, producing the factorial and the alternating sign.

// For $f(x) = \\ln x$: since $f'(x) = x^{-1}$, the higher derivatives follow the pattern above shifted by one:

// $$f^{(n)}(x) = \\frac{(-1)^{n-1} \\cdot (n-1)!}{x^n} \\qquad n \\geq 1$$

// For $f(x) = x^m$ where $m$ is a positive integer and $n \\leq m$:

// $$f^{(n)}(x) = \\frac{m!}{(m-n)!} \\cdot x^{m-n}$$

// The coefficient $\\frac{m!}{(m-n)!}$ is the falling factorial, counting the multipliers accumulated over $n$ applications of the power rule.

// These closed-form expressions are useful for computing specific high-order derivatives without performing each differentiation step individually.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `Higher-Order Derivatives and Taylor Series`,
//     content: `
// The Taylor series of $f$ centered at $x = a$ is

// $$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n$$

// Each coefficient depends on a higher-order derivative evaluated at the center point $a$. The zeroth derivative $f^{(0)}(a) = f(a)$ gives the constant term. The first derivative gives the linear term. The second derivative gives the quadratic correction. Each successive term captures finer detail about how $f$ deviates from the lower-order approximation.

// The Taylor polynomial of degree $k$ truncates the series after $k + 1$ terms, providing a polynomial approximation to $f$ near $a$. The quality of the approximation improves with $k$—more derivatives mean a closer fit over a wider interval.

// The connection between higher-order derivatives and Taylor series gives these derivatives their deepest significance: the complete collection $\\{f^{(n)}(a)\\}_{n=0}^{\\infty}$ determines $f$ locally (for analytic functions). Knowing all derivatives at a single point reconstructs the entire function in a neighborhood of that point.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Existence and Smoothness Classes`,
//     content: `
// A function may be differentiable once but not twice. The function $f(x) = x|x|$ has $f'(x) = 2|x|$, which is continuous but not differentiable at $x = 0$. So $f$ is in class $C^1$ (continuously differentiable) but not $C^2$.

// The smoothness classes organize functions by how many continuous derivatives they possess. A function belongs to $C^n$ if $f, f', f'', \\ldots, f^{(n)}$ all exist and are continuous. Class $C^0$ is simply continuous functions. Class $C^\\infty$ consists of infinitely differentiable functions—called smooth functions—where derivatives of all orders exist and are continuous.

// Polynomials, $e^x$, $\\sin x$, $\\cos x$, and their compositions are all $C^\\infty$. [Piecewise functions](!/calculus/derivatives/special) typically belong to a finite $C^n$ class determined by how smoothly the pieces join at their boundaries: matching values gives $C^0$, matching first derivatives gives $C^1$, and so on.

// There exist functions that are $C^\\infty$ but not analytic—their Taylor series converges but not to the function itself. The standard example is $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$: every derivative at $x = 0$ is zero, so the Taylor series is identically zero, yet the function is not zero away from the origin. Smooth does not automatically mean representable by a power series. The table below lays out the main tiers — C⁰, the general C&#8319;, C&#8734;, and the strictly stronger analytic class — alongside what each requires and characteristic examples.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   overview: {
//     title: `nth Derivatives at a Glance`,
//     content: `
// Different function families behave very differently under repeated differentiation: polynomials terminate, exponentials replicate, and trigonometric functions cycle. The table below collects the closed-form nth derivative for each standard function discussed above into a single reference card, with a brief note on what drives the pattern.
// `,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };


// formulas-optimized: v1 | 2026-06-09 | 8 callouts (obj5, obj6, obj7, obj8)
const sectionsContent = {
  // ─── /calculus/derivatives/higher-order ───────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Higher-Order Derivative](!/calculus/definitions#higher_order_derivative) — $f^{(n)}(x)$, differentiating $f$ a total of $n$ times
- [Derivative](!/calculus/definitions#derivative) — the first-order case from which all higher orders follow
- [Concavity](!/calculus/definitions#concavity) — governed by the second derivative $f''$
- [Inflection Point](!/calculus/definitions#inflection_point) — where $f''$ changes sign`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Definition`,
    content: `
The second derivative of $f$ is the derivative of $f'$:

@academic[formula_callout:Definition
$$f''(x) = \\frac{d}{dx}[f'(x)]$$]@

The third derivative is the derivative of $f''$, and so on. The $n$th derivative is obtained by differentiating $f$ a total of $n$ times.

@academic[rule_corollary_plain:Each order depends on the one below it: $f^{(n)}$ exists at a point only if $f^{(n-1)}$ exists in a neighbourhood of it and is [differentiable](!/calculus/derivatives/differentiability) there.]@

The chain fails quickly for functions with corners, and the order at which it fails is what the [smoothness classes](!/calculus/derivatives/higher-order#9) below measure.
`,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Notation for Higher-Order Derivatives`,
    lead: `Four systems, all still in use. Which one a text picks depends on whether the variable of differentiation matters, whether it is time, and whether derivatives are being manipulated as objects.`,
    inherited: `$f'$ and $\\frac{dy}{dx}$ are defined on [Derivatives](!/calculus/derivatives). Everything below extends them past order one.`,
    entries: [
      {
        id: 'lagrange-primes',
        tex: `$f'$ · $f''$ · $f^{(n)}$`,
        read: `f prime, f double prime, f superscript n in parentheses`,
        means: `Lagrange's system. Primes count the order up to three; past that they stop being countable and a parenthetical superscript takes over: $f^{(4)}$, $f^{(n)}$. Compact, and silent about the variable — which is why it fails as soon as more than one is in play.`,
        cases: `$f^{(0)} = f$ — the zeroth derivative is the function itself, which is what lets a [Taylor series](!/calculus/derivatives/higher-order#8) start its sum at $n = 0$. Older European texts write low orders as roman numerals: $f^{iv}$, $f^{v}$.`,
        alsoWritten: `$y'$, $y''$ when the function is named by its output rather than by $f$. $f''''$ turns up for the fourth, but rarely survives an editor.`,
        confusedWith: `The parentheses are the whole point. $f^n$ is a power, $f^{\\circ n}$ is [composition](!/functions/composition) with itself, $f^{-1}$ is the [inverse](!/functions/inverse). Four meanings compete for one superscript slot, and only the derivative brackets itself.`,
        sameGlyphElsewhere: `The prime marks a transformed or corresponding object almost everywhere else — $A'$ for a mapped point in geometry, $x'$ for a transformed coordinate. Nothing to do with rates.`,
      },
      {
        id: 'leibniz-higher',
        tex: `$\\frac{d^n y}{dx^n}$`,
        read: `d to the n y, d x to the n`,
        means: `Leibniz's system, extended. Reach for it when the variable of differentiation matters, or when the [differential](!/calculus/derivatives/differentials) itself is in play. The whole symbol is one operator applied to $y$ — not a fraction with $d^n y$ over $dx^n$.`,
        cases: `Second derivative: $\\frac{d^2 y}{dx^2}$, read "d two y, d x squared", meaning $\\frac{d}{dx}\\!\\left(\\frac{dy}{dx}\\right)$. The operator form $\\frac{d^n}{dx^n}f$ separates the instruction from the target, which is what makes it usable inside [differentiation rules](!/calculus/derivatives/rules).`,
        alsoWritten: `$\\partial^n y / \\partial x^n$ once other variables are held fixed; the [keyboard](!/keyboard) carries $\\partial$.`,
        confusedWith: `The exponent sits in two different places: above the $d$ in the numerator, beside the $x$ in the denominator. Not a typographical accident — it records that $d$ is applied $n$ times while $x$ is the thing being squared, cubed, and so on in the dimensional bookkeeping.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: 'newton-dot',
        tex: `$\\dot{y}$ · $\\ddot{y}$`,
        read: `y dot, y double dot`,
        means: `Newton's notation. Each dot is one derivative **with respect to time** — never space. Standard in mechanics and differential equations, where the independent variable is always $t$.`,
        cases: `One dot, velocity. Two, acceleration. Three is the practical ceiling; beyond that the dots stop being countable and texts revert to $y^{(n)}$.`,
        alsoWritten: `$\\dot{y} = \\frac{dy}{dt}$, the Leibniz form it abbreviates.`,
        confusedWith: `A dot is not a generic derivative mark. $\\dot{x}$ where $x$ varies over space is wrong, not merely unusual — the notation carries its variable inside it.`,
        sameGlyphElsewhere: ``,
      },
      {
        id: 'euler-d',
        tex: `$D^n f$`,
        read: `D to the n of f`,
        means: `Euler's operator form. $D$ means differentiate; the exponent counts applications. Write $D_x^n f$ when several variables are in play. Used wherever derivatives are handled algebraically rather than computed.`,
        cases: `$D^0 f = f$ by convention, which is what makes $D$ usable inside a sum or a polynomial in $D$ — the basis of operator methods for linear differential equations.`,
        alsoWritten: `$\\mathcal{D}$ where plain $D$ is needed for something else.`,
        confusedWith: `$\\Delta$ is the **difference** operator, not the derivative: $\\Delta f = f(x+h) - f(x)$. The two sit side by side in numerical analysis and are separated by a single [limit](!/calculus/limits).`,
        sameGlyphElsewhere: ``,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/derivatives`,
    parentLabel: `Derivatives`,
  },
  obj2: {
    title: `The Second Derivative`,
    content: `
The second derivative $f''(x)$ measures the rate of change of the slope. Where $f''(x) > 0$, the slope $f'(x)$ is increasing—the function bends upward (concave up). Where $f''(x) < 0$, the slope is decreasing—the function bends downward (concave down).

@academic[pitfall,aside:true,width:35%:Squaring the first derivative
Reading $f''(x)$ or $\\frac{d^2y}{dx^2}$ as the square of the first derivative turns $y = x^3$ into $(3x^2)^2 = 9x^4$, which is never negative. Differentiating twice gives $f''(x) = 6x$, and $f''(-1) = -6$: the curve bends down there.
[Read more](!#pitfalls)]@

This information is independent of whether $f$ itself is increasing or decreasing. A function can rise while decelerating ($f' > 0$, $f'' < 0$) or fall while accelerating in the negative direction ($f' < 0$, $f'' < 0$). The first and second derivatives describe different aspects of behavior.

The second derivative also powers the [second derivative test](!/calculus/derivatives/graph-analysis) for classifying critical points. At a point where $f'(c) = 0$: if $f''(c) > 0$, the critical point is a local minimum; if $f''(c) < 0$, a local maximum; if $f''(c) = 0$, the test is inconclusive.

Inflection points—where concavity reverses—occur where $f''$ changes sign. When $f''(c)$ exists, the condition $f''(c) = 0$ is necessary but not sufficient (and $f''$ may instead fail to exist, as for $x^{1/3}$ at $0$); the sign of $f''$ must actually switch across $c$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Physical Interpretation`,
    content: `
In kinematics, the first three derivatives of position $s(t)$ have standard names.

The first derivative $s'(t)$ is velocity: the rate of change of position. It tells how fast an object moves and in which direction.

The second derivative $s''(t)$ is acceleration: the rate of change of velocity. Positive acceleration means speeding up (in the positive direction) or decelerating (in the negative direction). The sign of acceleration relative to the sign of velocity determines whether the object is speeding up or slowing down.

@academic[pitfall,aside:true,width:35%:Reading negative acceleration as slowing down
Taking $s''(t) < 0$ to mean slowing down fails for $s(t) = -t^2$: at $t = 1$, $s''(1) = -2$, yet the speed $|s'(t)| = 2t$ grows from $2$ at $t = 1$ to $4$ at $t = 2$. Velocity $-2$ and acceleration $-2$ have the same sign, so the object is speeding up.
[Read more](!#pitfalls)]@

For the position $s(t) = t^3$ from the first section, the velocity is $3t^2$ and the acceleration is $6t$. At $t = 2$ the velocity is $12$ and the acceleration is $12$, both positive, and the table of values there shows the object covering more ground in each second than in the one before. Speed is the size of the velocity, $|s'(t)|$; it carries no direction, while velocity and acceleration both do.

The third derivative $s'''(t)$ is jerk: the rate of change of acceleration. Jerk is felt physically as a sudden push or lurch—smooth motion has low jerk, while abrupt starts and stops produce high jerk. Elevator design, roller coaster engineering, and vehicle ride comfort all involve controlling jerk.

Beyond the third derivative, the terms snap ($s^{(4)}$), crackle ($s^{(5)}$), and pop ($s^{(6)}$) are used in specialized engineering contexts but rarely appear in standard calculus. The table below collects all six in order, with each name paired with what the derivative measures.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Patterns in Repeated Differentiation — Polynomials`,
    content: `
@academic[rule_corollary_plain:Polynomials terminate under repeated differentiation. Each differentiation reduces the degree by one, so a polynomial of degree $n$ reaches a constant after $n$ differentiations and becomes zero after $n + 1$.]@

For $f(x) = x^5$:

@academic[formula_callout:Patterns in Repeated Differentiation — Polynomials
$$f'(x) = 5x^4, \\quad f''(x) = 20x^3, \\quad f'''(x) = 60x^2, \\quad f^{(4)}(x) = 120x, \\quad f^{(5)}(x) = 120, \\quad f^{(6)}(x) = 0$$]@

The coefficient at the $n$th derivative of $x^n$ is $n! = n(n-1)(n-2) \\cdots 1$, accumulated from the [power rule](!/calculus/derivatives/rules) applied $n$ times. Specifically, $\\frac{d^n}{dx^n}[x^n] = n!$ and $\\frac{d^k}{dx^k}[x^n] = 0$ for all $k > n$.

For a general polynomial $p(x) = a_n x^n + \\cdots + a_1 x + a_0$, the $n$th derivative is $n! \\cdot a_n$, a constant. This relationship becomes central in Taylor series, where the coefficient $a_n$ is recovered as $\\frac{f^{(n)}(a)}{n!}$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Patterns in Repeated Differentiation — Exponentials`,
    content: `
The natural exponential $e^x$ is unchanged by differentiation:

@academic[formula_callout:nth Derivative of Natural Exponential
$$\\frac{d^n}{dx^n}[e^x] = e^x$$
/calculus/formulas#nth_derivative_of_natural_exponential]@

Every derivative of $e^x$ is $e^x$. The only functions with this property are the constant multiples $Ce^x$ (including the trivial $f(x) = 0$).

For the general exponential $e^{ax}$, the chain rule introduces a factor of $a$ at each step:

@academic[formula_callout:nth Derivative of Scaled Exponential
$$\\frac{d^n}{dx^n}[e^{ax}] = a^n e^{ax}$$
/calculus/formulas#nth_derivative_of_scaled_exponential]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Using the chain-rule factor only once
Writing $\\frac{d^3}{dx^3}[e^{2x}] = 2e^{2x}$ keeps the factor $2$ from the first step only. Differentiating three times gives $4e^{2x}$ after the second step and $8e^{2x}$ after the third, so the answer is $8e^{2x}$.
[Read more](!#pitfalls)]@

Each differentiation multiplies by $a$. After $n$ differentiations, the accumulated constant is $a^n$. This pattern appears in solutions to differential equations, where $e^{ax}$ satisfies equations whose characteristic root is $a$.

For $a^x$ with arbitrary base: since $a^x = e^{x \\ln a}$, the $n$th derivative is $(\\ln a)^n \\cdot a^x$. The factor $\\ln a$ replaces $a$ in the exponential pattern.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Patterns in Repeated Differentiation — Sine and Cosine`,
    content: `
The derivatives of $\\sin x$ cycle with period four:

@academic[formula_callout:Patterns in Repeated Differentiation — Sine and Cosine
$$\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x \\to \\cdots$$]@

The $n$th derivative of $\\sin x$ depends on $n \\mod 4$:

@academic[formula_callout:Patterns in Repeated Differentiation — Sine and Cosine
$$\\frac{d^n}{dx^n}[\\sin x] = \\begin{cases} \\sin x & n \\equiv 0 \\pmod{4} \\\\ \\cos x & n \\equiv 1 \\pmod{4} \\\\ -\\sin x & n \\equiv 2 \\pmod{4} \\\\ -\\cos x & n \\equiv 3 \\pmod{4} \\end{cases}$$]@

A compact formula captures all four cases: $\\frac{d^n}{dx^n}[\\sin x] = \\sin\\left(x + \\frac{n\\pi}{2}\\right)$. The same holds for cosine: $\\frac{d^n}{dx^n}[\\cos x] = \\cos\\left(x + \\frac{n\\pi}{2}\\right)$.

@academic[formula_callout:nth Derivative of Sine
$$\\frac{d^n}{dx^n}[\\sin x] = \\sin\\!\\left(x + \\frac{n\\pi}{2}\\right)$$
/calculus/formulas#nth_derivative_of_sine]@

@academic[formula_callout:nth Derivative of Cosine
$$\\frac{d^n}{dx^n}[\\cos x] = \\cos\\!\\left(x + \\frac{n\\pi}{2}\\right)$$
/calculus/formulas#nth_derivative_of_cosine]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Dropping the minus sign
Taking the derivative of $\\cos x$ to be $\\sin x$ makes the cycle $\\sin x \\to \\cos x \\to \\sin x$, of length two, and gives $\\frac{d^2}{dx^2}[\\sin x] = \\sin x$. With $(\\cos x)' = -\\sin x$ the second derivative is $-\\sin x$, and the cycle closes only after four steps.
[Read more](!#pitfalls)]@

For $\\sin(ax)$, the chain rule introduces a factor of $a$ per differentiation: $\\frac{d^n}{dx^n}[\\sin(ax)] = a^n \\sin\\left(ax + \\frac{n\\pi}{2}\\right)$. The cycle in the trigonometric part persists; only the amplitude grows as $a^n$.

This four-fold periodicity distinguishes [trigonometric derivatives](!/calculus/derivatives/common) from polynomial derivatives (which terminate) and exponential derivatives (which replicate).
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `The nth Derivative of Specific Forms`,
    content: `
Several standard functions have known closed-form $n$th derivatives.

For $f(x) = \\frac{1}{x}$: rewriting as $x^{-1}$ and applying the power rule repeatedly gives

@academic[formula_callout:nth Derivative of Reciprocal
$$\\frac{d^n}{dx^n}\\!\\left[\\frac{1}{x}\\right] = \\frac{(-1)^n\\, n!}{x^{n+1}}$$
/calculus/formulas#nth_derivative_of_reciprocal]@

Each differentiation multiplies by one more negative integer, producing the factorial and the alternating sign.

For $f(x) = \\ln x$: since $f'(x) = x^{-1}$, the higher derivatives follow the pattern above shifted by one:

@academic[formula_callout:nth Derivative of Natural Logarithm
$$\\frac{d^n}{dx^n}[\\ln x] = \\frac{(-1)^{n-1}\\, (n-1)!}{x^n}$$
/calculus/formulas#nth_derivative_of_natural_logarithm]@

For $f(x) = x^m$ where $m$ is a positive integer and $n \\leq m$:

@academic[formula_callout:nth Derivative of Power
$$\\frac{d^n}{dx^n}[x^m] = \\frac{m!}{(m-n)!}\\, x^{m-n} \\quad (n \\leq m)$$
/calculus/formulas#nth_derivative_of_power]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

The coefficient $\\frac{m!}{(m-n)!}$ is the falling factorial, counting the multipliers accumulated over $n$ applications of the power rule.

These closed-form expressions are useful for computing specific high-order derivatives without performing each differentiation step individually.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Higher-Order Derivatives and Taylor Series`,
    content: `
The Taylor series of $f$ centered at $x = a$ is

@academic[formula_callout:Taylor Series
$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n$$
/calculus/formulas#taylor_series]@

@academic[formulas_link:Browse all derivative formulas
/calculus/formulas]@

@academic[pitfall,aside:true,width:35%:Leaving out the factorials
Using $f^{(n)}(a)$ as the coefficient without dividing by $n!$ turns the cubic Taylor polynomial of $\\sin x$ at $0$ into $x - x^3$, which gives $0.375$ at $x = 0.5$. With $\\frac{f'''(0)}{3!} = -\\frac{1}{6}$ it is $x - \\frac{x^3}{6} \\approx 0.47917$, close to $\\sin 0.5 \\approx 0.47943$.
[Read more](!#pitfalls)]@

Each coefficient depends on a higher-order derivative evaluated at the center point $a$. The zeroth derivative $f^{(0)}(a) = f(a)$ gives the constant term. The first derivative gives the linear term. The second derivative gives the quadratic correction. Each successive term captures finer detail about how $f$ deviates from the lower-order approximation.

The Taylor polynomial of degree $k$ truncates the series after $k + 1$ terms, providing a polynomial approximation to $f$ near $a$. For well-behaved functions such as $\\sin x$, the approximation improves with $k$—more derivatives typically mean a closer fit near $a$, often over a wider interval.

The connection between higher-order derivatives and Taylor series gives these derivatives their deepest significance: the complete collection $\\{f^{(n)}(a)\\}_{n=0}^{\\infty}$ determines $f$ locally (for analytic functions). For such functions, knowing all derivatives at a single point reconstructs the entire function in a neighborhood of that point.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Existence and Smoothness Classes`,
    content: `
A function may be differentiable once but not twice. The function $f(x) = x|x|$ has $f'(x) = 2|x|$, which is continuous but not differentiable at $x = 0$. So $f$ is in class $C^1$ (continuously differentiable) but not $C^2$.

The smoothness classes organize functions by how many continuous derivatives they possess. A function belongs to $C^n$ if $f, f', f'', \\ldots, f^{(n)}$ all exist and are continuous. Class $C^0$ is simply continuous functions. Class $C^\\infty$ consists of infinitely differentiable functions—called smooth functions—where derivatives of all orders exist and are continuous.

Polynomials, $e^x$, $\\sin x$, $\\cos x$, and their compositions are all $C^\\infty$. [Piecewise functions](!/calculus/derivatives/special) typically belong to a finite $C^n$ class determined by how smoothly the pieces join at their boundaries: matching values gives $C^0$, matching first derivatives gives $C^1$, and so on.

There exist functions that are $C^\\infty$ but not analytic—their Taylor series either diverges or converges to something other than the function itself. The standard example is $f(x) = e^{-1/x^2}$ for $x \\neq 0$ and $f(0) = 0$: every derivative at $x = 0$ is zero, so the Taylor series is identically zero, yet the function is not zero away from the origin.

@academic[rule_theorem_plain:Smooth does not automatically mean representable by a power series.]@

The table below lays out the main tiers — C⁰, the general C&#8319;, C&#8734;, and the strictly stronger analytic class — alongside what each requires and characteristic examples.
`,
    before: ``,
    after: ``,
    link: '',
  },
  overview: {
    title: `nth Derivatives at a Glance`,
    content: `
Different function families behave very differently under repeated differentiation: polynomials terminate, exponentials replicate, and trigonometric functions cycle. The table below collects the closed-form nth derivative for each standard function discussed above into a single reference card, with a brief note on what drives the pattern.
`,
    before: ``,
    after: ``,
    link: '',
  },
  pitfalls: {
    title: `Common Pitfalls`,
    content: `
Five mistakes cause many wrong answers with higher-order derivatives. Each is marked by a box where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Squaring the first derivative**

The second derivative is computed as the square of the first: $f''(x)$ is read as $(f'(x))^2$, or $\\frac{d^2y}{dx^2}$ as $\\left(\\frac{dy}{dx}\\right)^2$.

Wrong working: for $y = x^3$, $\\frac{dy}{dx} = 3x^2$, so $\\frac{d^2y}{dx^2} = (3x^2)^2 = 9x^4$. This is never negative, so the curve would be concave up everywhere.

Right working: differentiate $3x^2$ once more, $\\frac{d^2y}{dx^2} = 6x$. At $x = -1$ it is $-6$, so the curve bends down to the left of $0$ and up to the right, as the first section shows.

Why it happens: in $\\frac{d^2y}{dx^2}$ the $2$ looks like an exponent, and in $f''$ the second prime looks like a repeat of the first; both suggest a product of two first derivatives.

How to check: compare the degrees. Each differentiation lowers the degree of a polynomial by one, so the second derivative of $x^3$ must have degree $1$, not $4$.

**Reading negative acceleration as slowing down**

The sign of $s''(t)$ alone is taken to decide whether an object speeds up or slows down: a negative acceleration is read as braking, a positive one as speeding up.

Wrong working: for $s(t) = -t^2$, $s''(t) = -2 < 0$, so the object is slowing down.

Right working: the velocity is $s'(t) = -2t$, and for $t > 0$ the speed is $|s'(t)| = 2t$. At $t = 1$ the speed is $2$, at $t = 2$ it is $4$: the object speeds up. Velocity and acceleration are both negative, and when they have the same sign the speed grows.

Why it happens: in everyday speech "acceleration" means speeding up and "deceleration" slowing down. In calculus a negative acceleration only says that the velocity decreases, and a negative velocity that decreases gets larger in size.

How to check: compare the signs of $s'(t)$ and $s''(t)$ at the moment in question, or compute the speed $|s'(t)|$ at two nearby times.

**Using the chain-rule factor only once**

When $e^{ax}$ is differentiated several times, the factor $a$ from the chain rule is written once, as if it appeared only at the first step.

Wrong working: $\\frac{d^3}{dx^3}[e^{2x}] = 2e^{2x}$.

Right working: each step applies the chain rule again. $\\frac{d}{dx}[e^{2x}] = 2e^{2x}$, $\\frac{d^2}{dx^2}[e^{2x}] = 4e^{2x}$, $\\frac{d^3}{dx^3}[e^{2x}] = 8e^{2x}$, which is $2^3 e^{2x}$, as the formula $a^n e^{ax}$ says.

Why it happens: after the first step, $2e^{2x}$ looks like a constant times an exponential, and the exponential is then treated like $e^x$, whose derivative is itself.

How to check: count the factors. Three differentiations bring in three chain-rule factors of $2$, so the coefficient must be $2 \\cdot 2 \\cdot 2 = 8$. The same count for $a^x$ gives $(\\ln a)^n$.

**Dropping the minus sign**

The derivative of $\\cos x$ is taken to be $\\sin x$ instead of $-\\sin x$. The error is carried into every later step, and the cycle comes out with the wrong length.

Wrong working: $\\sin x \\to \\cos x \\to \\sin x \\to \\cos x$, so $\\frac{d^2}{dx^2}[\\sin x] = \\sin x$ and $\\frac{d^3}{dx^3}[\\sin x] = \\cos x$.

Right working: $\\sin x \\to \\cos x \\to -\\sin x \\to -\\cos x \\to \\sin x$. So $\\frac{d^2}{dx^2}[\\sin x] = -\\sin x$, $\\frac{d^3}{dx^3}[\\sin x] = -\\cos x$, and the cycle closes after four steps.

Why it happens: the derivative of $\\sin x$ has no minus sign, and the derivative of $\\cos x$ is remembered by symmetry with it.

How to check: use the compact formula $\\sin\\left(x + \\frac{n\\pi}{2}\\right)$; for $n = 2$ it gives $\\sin(x + \\pi) = -\\sin x$. Or test one point: $\\sin x$ has a maximum at $x = \\frac{\\pi}{2}$, so its second derivative cannot be positive there, and $-\\sin\\frac{\\pi}{2} = -1$ is negative.

**Leaving out the factorials**

In the Taylor series, the coefficient of $(x - a)^n$ is taken to be $f^{(n)}(a)$, without the division by $n!$.

Wrong working: for $\\sin x$ at $a = 0$, the values $f(0), f'(0), f''(0), f'''(0)$ are $0, 1, 0, -1$, so the cubic Taylor polynomial is $x - x^3$. At $x = 0.5$ it gives $0.375$.

Right working: divide each derivative by $n!$. The cubic term is $\\frac{-1}{3!}x^3 = -\\frac{x^3}{6}$, and the polynomial is $x - \\frac{x^3}{6}$. At $x = 0.5$ it gives $0.5 - 0.02083 \\approx 0.47917$, while $\\sin 0.5 \\approx 0.47943$.

Why it happens: the first two terms, $f(a)$ and $f'(a)(x - a)$, show no division, because $0! = 1! = 1$, and the pattern seems to continue without it.

How to check: differentiate the polynomial $n$ times at the center; it must give back $f^{(n)}(a)$. The third derivative of $x - x^3$ is $-6$, not $f'''(0) = -1$; the third derivative of $x - \\frac{x^3}{6}$ is $-1$.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `Differentiating the Derivative`,
  content: `
The derivative $f'$ is a [function](!/calculus/derivatives/function) in its own right, and functions can be differentiated. Applying the differentiation process to $f'$ produces the second derivative $f''$, which measures how the slope of $f$ changes. Differentiating again yields $f'''$, then $f^{(4)}$, and so on without limit—provided the relevant limits exist at each stage.

Each successive derivative captures a finer layer of a function's behavior. The first derivative controls direction. The second controls [concavity](!/calculus/derivatives/graph-analysis). The third and beyond govern subtler aspects of curvature and, in physics, correspond to jerk, snap, and higher kinematic quantities. At the theoretical level, the entire collection of higher-order derivatives at a point encodes the local shape of a function through its Taylor series.
`
};



// FAQ pass: cut the seven that named their own h2 — notation, the second
// derivative, polynomials, exponentials, sine and cosine, Taylor series,
// smoothness classes. Kept the 1/x and ln x formulas (heading says only
// "Specific Forms") and refocused the kinematics one onto jerk, since
// "Physical Interpretation" surfaces none of the names. Added two
// superscript traps from the notation section and the non-analytic case.
const faqQuestions = {
  obj1: {
    question: "Why is the nth derivative written f⁽ⁿ⁾ with parentheses?",
    answer: "Because the superscript slot is already crowded. Without parentheses, fⁿ reads as a power, f∘ⁿ is n-fold [composition](!/functions/composition), and f⁻¹ is the [inverse](!/functions/inverse) — three other meanings competing for the same position. The parentheses mark the number as a derivative count and nothing else. Primes handle orders one through three; past that they stop being countable.",
    sectionId: "notation"
  },
  obj2: {
    question: "Why is the second derivative written d²y/dx² and not d²y/d²x?",
    answer: "Because the two exponents count different things. In the numerator, d² records that the operator d has been applied twice to y. In the denominator, dx² is really (dx)² — the increment dx squared, from the dimensional bookkeeping. The whole symbol is one operator applied to y, not a fraction of d²y over dx².",
    sectionId: "notation"
  },
  obj3: {
    question: "What is jerk in calculus?",
    answer: "Jerk is the third derivative of position with respect to time — the rate at which acceleration changes. You feel it as a sudden lurch rather than as speed or force, which is why elevator, roller-coaster, and vehicle design all work to keep it small. The fourth, fifth, and sixth derivatives are sometimes called snap, crackle, and pop.",
    sectionId: "3"
  },
  obj4: {
    question: "What is the nth derivative of 1/x and ln x?",
    answer: "For 1/x the nth derivative is (−1)ⁿ·n!/x^(n+1); for ln x it is (−1)^(n−1)·(n−1)!/xⁿ. The two are the same pattern shifted by one step, because the first derivative of ln x is 1/x. Each differentiation multiplies by one more negative integer, which is where the factorial and the alternating sign both come from.",
    sectionId: "7"
  },
  obj5: {
    question: "Is every smooth function equal to its Taylor series?",
    answer: "No. A function can have derivatives of every order and still not be analytic. The standard example is f(x) = e^(−1/x²) with f(0) = 0: every derivative at the origin is zero, so its Taylor series there is identically zero, yet the function is positive everywhere else. Smooth guarantees the series exists, not that it converges to f.",
    sectionId: "9"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Higher Order Derivatives",
    "description": "Learn higher order derivatives: second derivative and concavity, velocity/acceleration/jerk, patterns for polynomials/exponentials/trig, nth derivative formulas, Taylor series, and smoothness classes.",
    "url": "https://www.learnmathclass.com/calculus/derivatives/higher-order",
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
      "name": "Higher Order Derivatives"
    },
    "teaches": [
      "Definition and notation for higher derivatives",
      "Second derivative and concavity",
      "Physical interpretation: velocity, acceleration, jerk",
      "Derivative patterns for standard functions",
      "Connection to Taylor series",
      "Smoothness classes C⁰ through C∞"
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
        "name": "Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Higher Order Derivatives",
        "item": "https://www.learnmathclass.com/calculus/derivatives/higher-order"
      }
    ]
  }
}

  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Higher Order Derivatives | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives/higher-order",
  //        name: "name"
  //     },
        
  //      }
  //   }


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const hoT3 = (x) => x - x ** 3 / 6, hoT5 = (x) => x - x ** 3 / 6 + x ** 5 / 120;
  const fpSineShift = { kind: 'pieces', svgTitle: 'sin x and its derivative cos x: the derivative is the same wave shifted left by pi/2', xRange: [-4, 7], yRange: [-2, 2],
    pieces: [
      { fn: () => 1, from: 99, to: 99, ends: [null, null], color: 'r', ghost: [[0, Math.PI / 2]], label: { text: 'shift π/2', x: Math.PI / 4, y: 1, pos: 'n' } },
      { fn: Math.sin, from: -4, to: 7, ends: [null, null], color: 'f', label: { text: 'sin x', x: 4.2, y: Math.sin(4.2), pos: 'se' } },
      { fn: Math.cos, from: -4, to: 7, ends: [null, null], color: 'g', label: { text: 'cos x = (sin x)′', x: 5.6, y: Math.cos(5.6), pos: 'w' } },
    ],
    points: [{ x: Math.PI / 2, y: 1 }, { x: 0, y: 1 }],
    notes: [{ x: -3.9, y: 1.7, text: 'each derivative moves the wave π/2 to the left', pos: 'e', color: 'r' }, { x: -3.9, y: -1.75, text: 'four shifts make a full period: the 4-cycle', pos: 'e' }],
    caption: '(sin x)′ = sin(x + π/2): each derivative shifts the wave by π/2' };
  const fpTaylorSine = { kind: 'pieces', svgTitle: 'Taylor polynomials of sin x at 0 of degree 1, 3 and 5 fit on wider and wider intervals', xRange: [-4, 4], yRange: [-2, 2],
    pieces: [
      { fn: (x) => x, from: 99, to: 99, ends: [null, null], color: 'g', ghost: [[-2, 2]] },
      { fn: hoT3, from: -3.2, to: 3.2, ends: [null, null], color: 'g' },
      { fn: hoT5, from: -4, to: 4, ends: [null, null], color: 'r' },
      { fn: Math.sin, from: -4, to: 4, ends: [null, null], color: 'f', label: { text: 'sin x', x: -3.5, y: Math.sin(-3.5), pos: 'n' } },
    ],
    notes: [{ x: -2.7, y: 1.75, text: 'degree 1 (dashed)', pos: 'e', color: 'g' }, { x: -2.7, y: 1.45, text: 'degree 3 (navy)', pos: 'e', color: 'g' }, { x: -2.7, y: 1.15, text: 'degree 5 (amber)', pos: 'e', color: 'r' }],
    caption: 'More derivatives at 0, closer fit: degrees 1, 3, 5 for sin x' };
  const fpXAbsX = { kind: 'pieces', svgTitle: 'x|x| looks smooth, but its derivative 2|x| has a corner at 0: C1 but not C2', xRange: [-2.5, 2.5], yRange: [-3, 5],
    pieces: [
      { fn: (x) => x * Math.abs(x), from: -2.2, to: 2.2, ends: [null, null], color: 'f', label: { text: 'f(x) = x|x|', x: -1.7, y: -2.89, pos: 'e' } },
      { fn: (x) => 2 * Math.abs(x), from: -2.4, to: 2.4, ends: [null, null], color: 'r', label: { text: 'f′(x) = 2|x|', x: 1.8, y: 3.6, pos: 'w' } },
    ],
    points: [{ x: 0, y: 0 }],
    notes: [{ x: 0.15, y: -0.6, text: 'corner in f′: f″(0) does not exist', pos: 'e', color: 'r' }],
    caption: 'x|x| has a continuous derivative with a corner: class C¹, not C²' };
  // Concept introduction figures (section 1), one running instance: x³.
  const fpCiBend = { kind: 'pieces', svgTitle: 'y = x^3 bends down left of 0 and up right of 0', xRange: [-2, 2], yRange: [-6, 6], yStep: 2,
    pieces: [
      { fn: (x) => x * x * x, from: -2, to: 0, ends: [null, null], color: 'g', label: { text: 'bends down (6x < 0)', x: -1.9, y: 4.6, pos: 'e' } },
      { fn: (x) => x * x * x, from: 0, to: 2, ends: [null, null], color: 'f', label: { text: 'bends up (6x > 0)', x: 0.15, y: -4.6, pos: 'e' } },
    ],
    points: [{ x: 0, y: 0 }],
    caption: 'y = x³: the slope 3x² falls, then rises; 6x tells which' };

  const conceptIntroFigures = {
    cubic: functionDerivativeDiagrams.cubic,
    bend: renderFunctionPlotV4(fpCiBend),
    motionTable: ciMotionTable,
    chainTable: ciChainTable,
    usesTable: ciUsesTable,
  };

  const demoUnits = {
    second: demoUnitFrame({
      svg: functionConcavityDiagrams.up,
      caption: 'f&#8243;(c) = 2.60: the slope is increasing',
      text: 'The first derivative says whether the curve rises; the second says whether the rise is speeding up. At the marker the tangent slopes are growing as x increases, the curve bends upward, and the readout f&#8243;(c) = 2.60 records how fast. Where the readout turns negative the bend has flipped. Watch the number and the bend change together on the',
      href: '/calculus/visual-tools/inflection-points',
      linkText: 'concavity and inflection points tool',
    }),
    sineShift: demoUnitFrame({
      svg: renderFunctionPlotV4(fpSineShift),
      caption: 'Differentiating sine is a shift',
      text: 'The curves sin x and its derivative cos x are the same wave, one a quarter period ahead of the other: the peak of sin x at x = &#960;/2 sits at x = 0 on cos x. That is (sin x)&#8242; = sin(x + &#960;/2). Each further derivative moves the wave another &#960;/2 to the left, so four of them move it a full period 2&#960; and bring back sin x, which is the four-step cycle sin, cos, &#8722;sin, &#8722;cos.',
    }),
    taylorSine: demoUnitFrame({
      svg: renderFunctionPlotV4(fpTaylorSine),
      caption: 'Taylor polynomials of sin x at 0',
      text: 'The Taylor polynomials of sin x at 0 use the derivatives 0, 1, 0, &#8722;1, 0, 1, &#8230; there. Degree 1 is the line y = x, which follows the curve only near 0. Degree 3, x &#8722; x&#179;/6, stays close until about &#177;1.5; degree 5 adds x&#8309;/120 and holds on to about &#177;2.5. Each additional derivative used at the single point 0 widens the stretch where the polynomial matches sin x.',
    }),
    xAbsX: demoUnitFrame({
      svg: renderFunctionPlotV4(fpXAbsX),
      caption: 'Smooth to the eye, not twice differentiable',
      text: 'The section&#8217;s f(x) = x|x| bends smoothly through the origin; it is x&#178; on the right and &#8722;x&#178; on the left. Its derivative f&#8242;(x) = 2|x| is continuous, but it is a V with a corner at 0, and a corner has no derivative. So f&#8242;&#8242;(0) does not exist: f is in C&#185; but not in C&#178;.',
    }),
  };

  const smoothnessLevels = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Classes by number of continuous derivatives',
    preface: 'A function is in $C^n$ when $f, f\', \\ldots, f^{(n)}$ all exist and are continuous. Each level up asks for more, so every class sits inside the one below it.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Smooth is not the top',
    conclusion: 'Analytic is strictly stronger than $C^\\infty$: $e^{-1/x^2}$ (with $f(0) = 0$) is smooth, yet its Taylor series at $0$ is identically zero and does not represent it.',
    axis: { top: 'strongest', label: 'smoothness', bottom: 'weakest' },
    levels: [
      { id: 'analytic', name: 'Analytic', sub: 'equal to its Taylor series' },
      { id: 'cinf', name: '$C^\\infty$ — smooth', sub: 'derivatives of all orders: polynomials, $e^x$, $\\sin x$' },
      { id: 'cn', name: '$C^n$', sub: '$n$ continuous derivatives: $x|x|$ is $C^1$, not $C^2$' },
      { id: 'c0', name: '$C^0$', sub: '[continuous](!/calculus/limits/continuity) functions' },
    ],
  };

  return {
  props: {
    smoothnessLevels,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj1Table,
    obj3Table,
    obj9Table,
    overviewTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Higher Order Derivatives: Second, Third & nth | Learn Math Class",
      description: "Learn higher order derivatives: second derivative and concavity, velocity/acceleration/jerk, patterns for polynomials/exponentials/trig, nth derivative formulas, Taylor series, and smoothness classes.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives/higher-order",
      name: "Higher Order Derivatives"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
const hierarchyTheme = { title: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function PageTemplate({smoothnessLevels, 
  seoData,
  sectionsContent,
  introContent,
  obj1Table,
  obj3Table,
  obj9Table,
  overviewTable,
  faqQuestions,
  schemas, demoUnits, conceptIntroFigures
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template I (naming).
  const conceptIntro = {
    beats: [
      {
        id: 'already',
        lead: `You have already taken the derivative of a derivative.`,
        content: `Differentiate $f(x) = x^3$ and you get $f'(x) = 3x^2$, the slope of the curve at each point. Ask how fast that slope is changing and there is only one way to answer: differentiate $3x^2$, which gives $6x$. Nothing new was needed — the same operation, applied to its own result.`,
        visual: ciSvg('cubic'),
        caption: `The solid curve is $f(x) = x^3$, the dashed one its derivative $3x^2$; the straight line is the tangent at one point, and its slope is the dashed curve's height there. Differentiating the dashed curve in turn gives $6x$. The same state is on the [derivative visualizer](!/calculus/visual-tools/derivative).`,
      },
      {
        id: 'places',
        kind: 'instance',
        lead: `The same move turns up in three different places.`,
        content: [
          `In motion. If a position is $s(t) = t^3$, its derivative is the velocity $3t^2$, and the derivative of the velocity is the acceleration $6t$.`,
          ciTable('motionTable'),
          `In the shape of a curve. The slope of $y = x^3$ is $3x^2$; whether that slope is shrinking or growing — whether the curve bends down or up — is the sign of its derivative, $6x$.`,
          `In plain algebra. Keep differentiating $x^3$ and the powers step down until nothing is left.`,
          ciTable('chainTable'),
        ],
        visual: ciSvg('bend'),
        caption: `Left of $0$, $6x < 0$: the slope shrinks and the curve bends down. Right of $0$, $6x > 0$: the slope grows and the curve bends up. The dot at $0$ is where $6x$ changes sign.`,
      },
      {
        id: 'shared',
        lead: `What the three share is a rate of change of a rate of change.`,
        content: `Acceleration is how fast velocity changes; bending is how fast slope changes; each column of the chain is how fast the previous column changes. In every case a derivative is taken, and then the derivative of that result. The surface is different — seconds and metres, curves, powers of $x$ — and the operation underneath is the same.`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The second derivative of $f$ is the derivative of $f'$. Each [higher-order derivative](!/calculus/definitions#higher_order_derivative) is the derivative of the one before: the third is the derivative of $f''$, and the $n$th, $f^{(n)}$, is $f$ differentiated $n$ times.`,
        formula: `@academic[formula_callout:Definition
$$f''(x) = \\frac{d}{dx}[f'(x)]$$]@`,
        footer: `For $f(x) = x^3$: $f'' = 6x$, $f''' = 6$, and every derivative after that is $0$.`,
      },
      {
        id: 'kind',
        lead: `A higher-order derivative is a function, just as the first derivative is.`,
        content: `$f''(x) = 6x$ is a new function with its own graph; evaluated at a point it gives a number, $f''(2) = 12$. It is not a different kind of object from $f'$ — only one step further down the same chain.`,
      },
      {
        id: 'caveat',
        lead: `What the name buys: each fact about it is proved once and used everywhere.`,
        content: [
          `Once "second derivative" is a thing with a name and a symbol, one result serves motion, curves and series at once.`,
          ciTable('usesTable'),
          `The chain also has a limit of its own.`,
          `@academic[rule_corollary_plain:Each order depends on the one below it: $f^{(n)}$ exists at a point only if $f^{(n-1)}$ exists in a neighbourhood of it and is [differentiable](!/calculus/derivatives/differentiability) there.]@`,
          `The chain fails quickly for functions with corners, and the order at which it fails is what the [smoothness classes](!/calculus/derivatives/higher-order#9) below measure.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers the notation for every order, the second derivative and its physical meaning, the patterns that repeated differentiation produces for polynomials, exponentials, sine and cosine, nth-derivative formulas, the link to Taylor series, and smoothness classes.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'notation',
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
          <div key={'obj1-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj1Table}}/>,
                  <div key={'unit-second'} dangerouslySetInnerHTML={{ __html: demoUnits.second }} />,
          `The second derivative is the first one whose sign has a shape of its own on the graph.`,
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
          <div key={'obj3-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj3Table}}/>,
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
          <div key={'unit-sineShift'} dangerouslySetInnerHTML={{ __html: demoUnits.sineShift }} />,
          `For sin(ax) the shift is the same; only the height is multiplied by a at each step.`,
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
          <div key={'unit-taylorSine'} dangerouslySetInnerHTML={{ __html: demoUnits.taylorSine }} />,
          `Only odd powers appear because the even-order derivatives of sin x at 0 are all 0.`,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div key={'unit-xAbsX'} dangerouslySetInnerHTML={{ __html: demoUnits.xAbsX }} />,
          `Joining x² and −x² matches values and first derivatives at 0, but not second derivatives, 2 and −2.`,
          <div key={'obj9-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: obj9Table}}/>,
          <DiagramFrame
            key={'obj9-diagram'}
            id="smoothness-class-pyramid"
            title="Smoothness classes"
            source="/calculus/derivatives/higher-order"
          >
            <Hierarchy data={smoothnessLevels} variant="pyramid" exportable={false} theme={hierarchyTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'overview',
        title:sectionsContent.overview.title,
        link:sectionsContent.overview.link,
        content:[
          sectionsContent.overview.content,
          <div key={'overview-table'} style={tableWrapStyle} dangerouslySetInnerHTML={{__html: overviewTable}}/>,
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
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Higher-Order Derivatives FAQ`,
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
   {/* <Head>
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
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}


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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Higher Order Derivatives</h1>
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}