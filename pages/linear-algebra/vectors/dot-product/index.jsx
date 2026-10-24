
// // tables-optimized: v4 | 2026-05-22 | 5 tables (obj2 comparison, obj3 aggregation, obj6 comparison, obj9 aggregation, obj10 summary capstone)

// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import '../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'


// export async function getStaticProps(){
// const keyWords = [
//   "dot product",
//   "dot product formula",
//   "scalar product",
//   "inner product",
//   "dot product calculator",
//   "angle between vectors",
//   "dot product properties",
//   "orthogonal vectors",
//   "vector projection",
//   "Cauchy-Schwarz inequality",
//   "dot product geometric",
//   "perpendicular vectors",
//   "cosine angle vectors",
//   "scalar projection"
// ]
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

// const linkStyle = 'color: inherit; text-decoration: underline;'

// // ---------- TABLES ----------

// // obj2 — comparison: the two equivalent definitions (algebraic and geometric)
// const obj2Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Definition</th>
//       <th style="${tableHeaders.comparison}">Formula</th>
//       <th style="${tableHeaders.comparison}">Most useful when</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><b>a</b> · <b>b</b> = a₁b₁ + a₂b₂ + ⋯ + aₙbₙ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">components are known and a numerical answer is wanted; works mechanically in any dimension</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Geometric</td>
//       <td style="padding: 12px 15px; color: #34495e;"><b>a</b> · <b>b</b> = ‖<b>a</b>‖ ‖<b>b</b>‖ cos θ</td>
//       <td style="padding: 12px 15px; color: #34495e;">magnitudes and the angle are known; reveals what the dot product means (alignment) rather than how to compute it</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj3 — aggregation: the four named properties of the dot product
// const obj3Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Property</th>
//       <th style="${tableHeaders.aggregation}">Formal statement</th>
//       <th style="${tableHeaders.aggregation}">What it means</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Commutativity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><b>a</b> · <b>b</b> = <b>b</b> · <b>a</b></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">order doesn&apos;t matter; inherited from commutativity of real-number multiplication</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Distributivity</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><b>a</b> · (<b>b</b> + <b>c</b>) = <b>a</b> · <b>b</b> + <b>a</b> · <b>c</b></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distributes over <a href="/linear-algebra/vectors/basic-operations" style="${linkStyle}">vector addition</a>; lets you break a dot product over a sum apart</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar factoring</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(c<b>a</b>) · <b>b</b> = c(<b>a</b> · <b>b</b>)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a scalar inside the product can be pulled out; combined with commutativity, works on either slot</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Positive definiteness</td>
//       <td style="padding: 12px 15px; color: #34495e;"><b>a</b> · <b>a</b> = ‖<b>a</b>‖² ≥ 0, with equality if and only if <b>a</b> = <b>0</b></td>
//       <td style="padding: 12px 15px; color: #34495e;">the self-dot product is squared length; ties the dot product directly to the <a href="/linear-algebra/vectors/magnitude" style="${linkStyle}">norm</a></td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj6 — comparison: 3-way sign diagnostic for the dot product
// const obj6Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.comparison}">Sign of <b>a</b> · <b>b</b></th>
//       <th style="${tableHeaders.comparison}">Cosine</th>
//       <th style="${tableHeaders.comparison}">Angle θ</th>
//       <th style="${tableHeaders.comparison}">Geometric meaning</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive (&gt; 0)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos θ &gt; 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">θ ∈ (0, π/2)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">acute angle &mdash; vectors point in broadly the same direction</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero (= 0)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos θ = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">θ = π/2</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthogonal &mdash; neither vector has a component along the other</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Negative (&lt; 0)</td>
//       <td style="padding: 12px 15px; color: #34495e;">cos θ &lt; 0</td>
//       <td style="padding: 12px 15px; color: #34495e;">θ ∈ (π/2, π)</td>
//       <td style="padding: 12px 15px; color: #34495e;">obtuse angle &mdash; vectors point in broadly opposite directions</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj9 — aggregation: the projection trio (scalar, vector, perpendicular component)
// const obj9Table = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.aggregation}">Quantity</th>
//       <th style="${tableHeaders.aggregation}">Formula</th>
//       <th style="${tableHeaders.aggregation}">What it represents</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar projection comp<sub><b>b</b></sub> <b>a</b></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(<b>a</b> · <b>b</b>) / ‖<b>b</b>‖</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signed length of <b>a</b>&apos;s shadow on <b>b</b>; positive when <b>a</b> tilts toward <b>b</b>, negative when away</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vector projection proj<sub><b>b</b></sub> <b>a</b></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">((<b>a</b> · <b>b</b>) / (<b>b</b> · <b>b</b>)) <b>b</b> = ((<b>a</b> · <b>b</b>) / ‖<b>b</b>‖²) <b>b</b></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the shadow as an actual vector, parallel to <b>b</b>, with length equal to |comp<sub><b>b</b></sub> <b>a</b>|</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Perpendicular component <b>a</b><sub>⊥</sub></td>
//       <td style="padding: 12px 15px; color: #34495e;"><b>a</b> − proj<sub><b>b</b></sub> <b>a</b></td>
//       <td style="padding: 12px 15px; color: #34495e;">the part of <b>a</b> orthogonal to <b>b</b>; satisfies <b>a</b><sub>⊥</sub> · <b>b</b> = 0</td>
//     </tr>
//   </tbody>
// </table>
// `

// // obj10 — summary capstone: every distinct use of the dot product on one card
// const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Question</th>
//       <th style="${tableHeaders.summary}">Use of the dot product</th>
//       <th style="${tableHeaders.summary}">Result</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What is the length of <b>v</b>?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(<b>v</b> · <b>v</b>)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the norm ‖<b>v</b>‖</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What angle do <b>a</b> and <b>b</b> make?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos θ = (<b>a</b> · <b>b</b>) / (‖<b>a</b>‖ ‖<b>b</b>‖), then arccos</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an angle θ in [0, π]</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Are <b>a</b> and <b>b</b> orthogonal?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check whether <b>a</b> · <b>b</b> = 0</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes / no</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Is the angle acute, right, or obtuse?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">read off the sign of <b>a</b> · <b>b</b></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive / zero / negative &rarr; acute / right / obtuse</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">How big can <b>a</b> · <b>b</b> be given the lengths?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|<b>a</b> · <b>b</b>| ≤ ‖<b>a</b>‖ ‖<b>b</b>‖ (Cauchy&ndash;Schwarz)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bound; equality only for parallel vectors</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What is the signed length of <b>a</b>&apos;s shadow on <b>b</b>?</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(<b>a</b> · <b>b</b>) / ‖<b>b</b>‖</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scalar projection comp<sub><b>b</b></sub> <b>a</b></td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">What is <b>a</b>&apos;s shadow on <b>b</b> as a vector?</td>
//       <td style="padding: 12px 15px; color: #34495e;">((<b>a</b> · <b>b</b>) / ‖<b>b</b>‖²) <b>b</b></td>
//       <td style="padding: 12px 15px; color: #34495e;">vector projection proj<sub><b>b</b></sub> <b>a</b>, parallel to <b>b</b></td>
//     </tr>
//   </tbody>
// </table>
// `

// // const sectionsContent = {
// //   obj1: {
// //     title: `Algebraic Definition`,
// //     content: `The dot product of two vectors $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in $\\mathbb{R}^n$ is the scalar obtained by multiplying corresponding components and summing the results:

// // $$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n = \\sum_{i=1}^{n} a_ib_i$$

// // The notation uses a centered dot between the two vectors. Other names for the same operation are the inner product and the scalar product — the latter emphasizing that the output is a scalar, not a vector.

// // This definition works in any dimension. In $\\mathbb{R}^2$, the dot product of $(3, 4)$ and $(1, -2)$ is $3(1) + 4(-2) = -5$. In $\\mathbb{R}^5$, the same rule applies with five terms instead of two. The computation is mechanical, but the meaning it carries — revealed by the geometric definition — is what makes the dot product central to the rest of linear algebra.

// // The dot product differs fundamentally from [vector addition](!/linear-algebra/vectors/basic-operations) and scalar multiplication. Those operations take vectors and produce vectors. The dot product takes two vectors and collapses them into a single number, discarding the directional structure in favor of a measurement of alignment.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj2: {
// //     title: `Geometric Definition`,
// //     content: `There is a second way to compute the dot product that bypasses components entirely and works directly with lengths and angles. If $\\mathbf{a}$ and $\\mathbf{b}$ are both nonzero and $\\theta$ denotes the angle they form when drawn from a common point, then:

// // $$\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

// // The right-hand side multiplies the [magnitudes](!/linear-algebra/vectors/magnitude) of both vectors and adjusts the product by $\\cos\\theta$. That cosine factor does all the interpretive work: it equals $1$ when $\\theta = 0$ (full alignment), drops to $0$ at $\\theta = \\frac{\\pi}{2}$ (no alignment at all), and reaches $-1$ at $\\theta = \\pi$ (complete opposition).

// // Why does this agree with the component-wise formula? Place $\\mathbf{a}$ and $\\mathbf{b}$ tail to tail and form the triangle completed by $\\mathbf{a} - \\mathbf{b}$. The law of cosines gives the squared length of the third side:

// // $$\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2 - 2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

// // Now expand $\\|\\mathbf{a} - \\mathbf{b}\\|^2$ by writing it as $(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b})$ and distributing. The result is $\\|\\mathbf{a}\\|^2 - 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2$. Setting the two expressions equal and cancelling the squared norms leaves $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$. The component-based sum of products and the length-angle formula are two faces of a single quantity — one assembled from arithmetic on coordinates, the other encoding geometric information about orientation.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj3: {
// //     title: `Properties of the Dot Product`,
// //     content: `The dot product obeys a set of algebraic rules that make it behave predictably in calculations.

// // ## Commutativity

// // $$\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$$

// // The order of the two vectors does not matter. This follows directly from commutativity of real number multiplication: $a_ib_i = b_ia_i$ for every component.

// // ## Distributivity

// // $$\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$$

// // The dot product distributes over vector addition. This allows the dot product of a vector with a sum to be broken apart, a property used constantly when expanding expressions involving multiple vectors.

// // ## Scalar Factoring

// // $$(c\\mathbf{a}) \\cdot \\mathbf{b} = c(\\mathbf{a} \\cdot \\mathbf{b})$$

// // A scalar multiplied into one of the vectors can be pulled out of the dot product entirely. Combined with commutativity, this also gives $\\mathbf{a} \\cdot (c\\mathbf{b}) = c(\\mathbf{a} \\cdot \\mathbf{b})$.

// // ## Positive Definiteness

// // $$\\mathbf{a} \\cdot \\mathbf{a} = \\|\\mathbf{a}\\|^2 \\geq 0, \\quad \\text{with equality if and only if } \\mathbf{a} = \\mathbf{0}$$

// // The dot product of a vector with itself is the sum of squared components — always non-negative, and zero only for the zero vector. This property ties the dot product directly to the norm and ensures that the geometric notion of length is consistent with the algebraic framework.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj4: {
// //     title: `Connection to Magnitude`,
// //     content: `Positive definiteness reveals that the [norm](!/linear-algebra/vectors/magnitude) is hiding inside the dot product. When a vector is dotted with itself, the result is exactly the quantity that sits under the square root in the norm formula:

// // $$\\mathbf{v} \\cdot \\mathbf{v} = v_1^2 + v_2^2 + \\cdots + v_n^2 = \\|\\mathbf{v}\\|^2$$

// // Squared length, in other words, is not a separate concept — it is a dot product in which both slots are filled by the same vector. Flipping this around gives an alternative expression for the norm: $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$. Rather than defining magnitude independently and then discovering a coincidence, we can view the norm as something the dot product generates.

// // This observation has practical consequences. Several norm properties that would otherwise demand their own proofs fall out as corollaries of dot product rules. Scalar factoring implies $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$ with no extra work. The triangle inequality $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ follows once we control the size of $\\mathbf{a} \\cdot \\mathbf{b}$ through Cauchy–Schwarz — again, a statement framed entirely in dot product language.

// // The dependence runs both ways. The geometric formula $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ rebuilds the dot product from two norms and an angle. Neither concept stands alone: the dot product encodes magnitude, and magnitude participates in the dot product's geometric interpretation. Separating them into unrelated topics conceals the single algebraic mechanism they both rely on.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj5: {
// //     title: `The Angle Between Vectors`,
// //     content: `Rearranging the geometric formula isolates the angle:

// // $$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$$

// // This formula is defined only when both vectors are nonzero, since division by zero is undefined. The angle $\\theta$ lies in the interval $[0, \\pi]$, covering all possibilities from vectors pointing in the same direction ($\\theta = 0$) to vectors pointing in exactly opposite directions ($\\theta = \\pi$).

// // The right-hand side is the dot product of the two normalized vectors $\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$. Normalization strips away the magnitudes, leaving only the directional relationship. The cosine of the angle between two vectors depends solely on their directions, not on how long they are.

// // In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, this formula can be verified against the angle measured with a protractor. In higher dimensions, where geometric angles cannot be visualized, the formula serves as the definition of the angle between two vectors — extending a geometric concept into spaces where geometry alone cannot reach.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj6: {
// //     title: `Sign of the Dot Product`,
// //     content: `The sign of the dot product reveals the angular relationship between two vectors without requiring the angle itself to be computed. Since $\\|\\mathbf{a}\\|$ and $\\|\\mathbf{b}\\|$ are both positive for nonzero vectors, the sign of $\\mathbf{a} \\cdot \\mathbf{b}$ is determined entirely by $\\cos\\theta$.

// // When $\\mathbf{a} \\cdot \\mathbf{b} > 0$, the cosine is positive, which means $\\theta$ lies in the interval $(0, \\frac{\\pi}{2})$. The vectors form an acute angle — they point in broadly the same direction.

// // When $\\mathbf{a} \\cdot \\mathbf{b} = 0$, the cosine is zero, placing $\\theta$ at exactly $\\frac{\\pi}{2}$. The vectors are perpendicular — neither has any component in the direction of the other.

// // When $\\mathbf{a} \\cdot \\mathbf{b} < 0$, the cosine is negative, so $\\theta$ lies in $(\\frac{\\pi}{2}, \\pi)$. The vectors form an obtuse angle — they point in broadly opposite directions.

// // This three-way classification is a fast diagnostic tool. Checking whether a dot product is positive, zero, or negative is often all that is needed to determine the geometric relationship between two vectors — no square roots, no inverse cosines, just the sign of a sum of products.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj7: {
// //     title: `Orthogonality`,
// //     content: `Two vectors are orthogonal when their dot product is zero:

// // $$\\mathbf{a} \\cdot \\mathbf{b} = 0 \\quad \\Longleftrightarrow \\quad \\mathbf{a} \\perp \\mathbf{b}$$

// // In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, orthogonality corresponds to perpendicularity — the vectors meet at a right angle. In $\\mathbb{R}^n$ for $n > 3$, perpendicularity cannot be visualized, but the algebraic condition $\\mathbf{a} \\cdot \\mathbf{b} = 0$ still serves as its definition. Orthogonality is the generalization of "right angle" to any number of dimensions.

// // The zero vector occupies a special position: $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for every vector $\\mathbf{v}$, so the zero vector is orthogonal to everything. This is a convention that simplifies many statements — without it, theorems about orthogonal sets would need to exclude the zero vector as a separate case.

// // Orthogonality is far more than a geometric curiosity. Orthogonal vectors are algebraically independent in a strong sense — projecting one onto the other yields zero, meaning neither contributes anything in the direction of the other. This idea scales up: orthogonal bases, orthogonal decompositions, and orthogonal complements form a central thread through the [orthogonality](!/linear-algebra/orthogonality) section of linear algebra.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj8: {
// //     title: `The Cauchy–Schwarz Inequality`,
// //     content: `The dot product of two vectors cannot grow arbitrarily large when their lengths are fixed. Cauchy–Schwarz makes this constraint precise:

// // $$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$$

// // The geometric angle formula offers the most transparent explanation. Writing $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ and noting that $|\\cos\\theta|$ never surpasses $1$, the absolute dot product is automatically bounded by the product of the norms. This ceiling is reached only when $\\cos\\theta$ hits $\\pm 1$ — at $\\theta = 0$ or $\\theta = \\pi$ — so equality corresponds to [parallel](!/linear-algebra/vectors/properties) vectors pointing along or against each other.

// // An entirely coordinate-based proof exists as well, requiring no notion of angle. Consider the expression $\\|\\mathbf{a} - t\\mathbf{b}\\|^2$ for a variable scalar $t$. Because a squared norm is never negative, this expression defines a quadratic in $t$ with no negative values. A real quadratic that stays non-negative must have a non-positive discriminant, and writing out that discriminant condition yields exactly the Cauchy–Schwarz bound. This argument extends to any setting where an inner product is defined, even when angles lack geometric substance.

// // The inequality plays a structural role beyond bounding computations. Without it, the angle formula would be ill-posed: feeding $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$ into $\\arccos$ requires the fraction to land in $[-1, 1]$, and Cauchy–Schwarz is what guarantees this. The norm's triangle inequality likewise depends on it — establishing $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ involves controlling the mixed term $\\mathbf{a} \\cdot \\mathbf{b}$, which is exactly the job Cauchy–Schwarz performs.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj9: {
// //     title: `Orthogonal Projection`,
// //     content: `It is frequently necessary to break a vector $\\mathbf{a}$ into two pieces relative to a nonzero vector $\\mathbf{b}$: one piece aligned with $\\mathbf{b}$ and another at a right angle to it. The dot product supplies the machinery for this decomposition.

// // ## Scalar Projection

// // The signed distance that $\\mathbf{a}$ covers in the direction of $\\mathbf{b}$ is captured by a single number:

// // $$\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}$$

// // When this quantity comes out positive, $\\mathbf{a}$ tilts toward $\\mathbf{b}$. A negative result means $\\mathbf{a}$ tilts away. Zero signals complete orthogonality — $\\mathbf{a}$ contributes nothing at all in the direction of $\\mathbf{b}$.

// // ## Vector Projection

// // To obtain an actual vector rather than a bare number, the scalar projection is re-embedded along $\\mathbf{b}$:

// // $$\\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}\\,\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|^2}\\,\\mathbf{b}$$

// // The coefficient $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}$ rescales $\\mathbf{b}$ so that the output has the appropriate length and orientation. What results is a vector parallel to $\\mathbf{b}$ whose norm equals $|\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a}|$.

// // ## Orthogonal Decomposition

// // Removing the projected component from $\\mathbf{a}$ leaves behind the perpendicular part:

// // $$\\mathbf{a}_{\\perp} = \\mathbf{a} - \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a}$$

// // Together, the two pieces reconstruct the original:

// // $$\\mathbf{a} = \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} + \\mathbf{a}_{\\perp}$$

// // The parallel component lies along $\\mathbf{b}$; the perpendicular component satisfies $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = 0$, a fact that follows by substituting the formula and simplifying. These two constituents are geometrically independent — adjusting one leaves the other unchanged, and each accounts for information the other entirely misses.

// // This two-part split reappears in more sophisticated forms throughout linear algebra. Projection onto a line generalizes to projection onto multi-dimensional subspaces. The Gram–Schmidt procedure repeats the same splitting step iteratively, peeling off parallel components one vector at a time to produce an orthogonal collection. Least-squares fitting identifies the closest approximation inside a subspace by projecting onto it. Each of these techniques, covered in the [orthogonality](!/linear-algebra/orthogonality) section, traces back to the same principle at work here: partition a vector into what runs along a chosen direction and what runs across it.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// //   obj10: {
// //     title: `Summary: Every Use of the Dot Product`,
// //     content: `Across the sections above, the dot product appears in seven distinct roles &mdash; measuring length, computing angles, testing orthogonality, classifying the angular relationship by sign, bounding products of vectors, and producing two kinds of projection. The table below collects all of these in a single reference, organized around the question each role answers and the formula that does the work. Every entry below is built from the same operation <b>a</b> · <b>b</b> = Σ a<sub>i</sub>b<sub>i</sub> &mdash; the geometric variety on the page comes from how that one number is interpreted and combined with the norm.`,
// //     before: ``,
// //     after: ``,
// //     link: '',
// //   },
// // };



// // tables-optimized: v4 | 2026-05-22 | 5 tables (obj2 comparison, obj3 aggregation, obj6 comparison, obj9 aggregation, obj10 summary capstone)

// // ---------- SECTIONS ----------

// const sectionsContent = {
//   obj1: {
//     title: `Algebraic Definition`,
//     content: `The dot product of two vectors $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in $\\mathbb{R}^n$ is the scalar obtained by multiplying corresponding components and summing the results:

// @academic[formula_callout:Dot Product (Algebraic Form)
// $$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n = \\sum_{i=1}^{n} a_ib_i$$
// /linear-algebra/formulas#dot_product_algebraic_form]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The notation uses a centered dot between the two vectors. Other names for the same operation are the inner product and the scalar product — the latter emphasizing that the output is a scalar, not a vector.

// This definition works in any dimension. In $\\mathbb{R}^2$, the dot product of $(3, 4)$ and $(1, -2)$ is $3(1) + 4(-2) = -5$. In $\\mathbb{R}^5$, the same rule applies with five terms instead of two. The computation is mechanical, but the meaning it carries — revealed by the geometric definition — is what makes the dot product central to the rest of linear algebra.

// The dot product differs fundamentally from [vector addition](!/linear-algebra/vectors/basic-operations) and scalar multiplication. Those operations take vectors and produce vectors. The dot product takes two vectors and collapses them into a single number, discarding the directional structure in favor of a measurement of alignment.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Geometric Definition`,
//     content: `There is a second way to compute the dot product that bypasses components entirely and works directly with lengths and angles. If $\\mathbf{a}$ and $\\mathbf{b}$ are both nonzero and $\\theta$ denotes the angle they form when drawn from a common point, then:

// @academic[formula_callout:Dot Product (Geometric Form)
// $$\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$
// /linear-algebra/formulas#dot_product_geometric_form]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The right-hand side multiplies the [magnitudes](!/linear-algebra/vectors/magnitude) of both vectors and adjusts the product by $\\cos\\theta$. That cosine factor does all the interpretive work: it equals $1$ when $\\theta = 0$ (full alignment), drops to $0$ at $\\theta = \\frac{\\pi}{2}$ (no alignment at all), and reaches $-1$ at $\\theta = \\pi$ (complete opposition).

// Why does this agree with the component-wise formula? Place $\\mathbf{a}$ and $\\mathbf{b}$ tail to tail and form the triangle completed by $\\mathbf{a} - \\mathbf{b}$. The law of cosines gives the squared length of the third side:

// $$\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2 - 2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

// Now expand $\\|\\mathbf{a} - \\mathbf{b}\\|^2$ by writing it as $(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b})$ and distributing. The result is $\\|\\mathbf{a}\\|^2 - 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2$. Setting the two expressions equal and cancelling the squared norms leaves $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$. The component-based sum of products and the length-angle formula are two faces of a single quantity — one assembled from arithmetic on coordinates, the other encoding geometric information about orientation.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Properties of the Dot Product`,
//     content: `The dot product obeys a set of algebraic rules that make it behave predictably in calculations.

// ## Commutativity

// $$\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$$

// The order of the two vectors does not matter. This follows directly from commutativity of real number multiplication: $a_ib_i = b_ia_i$ for every component.

// ## Distributivity

// $$\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$$

// The dot product distributes over vector addition. This allows the dot product of a vector with a sum to be broken apart, a property used constantly when expanding expressions involving multiple vectors.

// ## Scalar Factoring

// $$(c\\mathbf{a}) \\cdot \\mathbf{b} = c(\\mathbf{a} \\cdot \\mathbf{b})$$

// A scalar multiplied into one of the vectors can be pulled out of the dot product entirely. Combined with commutativity, this also gives $\\mathbf{a} \\cdot (c\\mathbf{b}) = c(\\mathbf{a} \\cdot \\mathbf{b})$.

// ## Positive Definiteness

// $$\\mathbf{a} \\cdot \\mathbf{a} = \\|\\mathbf{a}\\|^2 \\geq 0, \\quad \\text{with equality if and only if } \\mathbf{a} = \\mathbf{0}$$

// The dot product of a vector with itself is the sum of squared components — always non-negative, and zero only for the zero vector. This property ties the dot product directly to the norm and ensures that the geometric notion of length is consistent with the algebraic framework.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Connection to Magnitude`,
//     content: `Positive definiteness reveals that the [norm](!/linear-algebra/vectors/magnitude) is hiding inside the dot product. When a vector is dotted with itself, the result is exactly the quantity that sits under the square root in the norm formula:

// @academic[formula_callout:Dot Product Magnitude Relation
// $$\\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2$$
// /linear-algebra/formulas#dot_product_magnitude_relation]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Written out in components, this reads $\\mathbf{v} \\cdot \\mathbf{v} = v_1^2 + v_2^2 + \\cdots + v_n^2$ — a sum of squares. Squared length, in other words, is not a separate concept — it is a dot product in which both slots are filled by the same vector. Flipping this around gives an alternative expression for the norm: $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$. Rather than defining magnitude independently and then discovering a coincidence, we can view the norm as something the dot product generates.

// This observation has practical consequences. Several norm properties that would otherwise demand their own proofs fall out as corollaries of dot product rules. Scalar factoring implies $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$ with no extra work. The triangle inequality $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ follows once we control the size of $\\mathbf{a} \\cdot \\mathbf{b}$ through Cauchy–Schwarz — again, a statement framed entirely in dot product language.

// The dependence runs both ways. The geometric formula $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ rebuilds the dot product from two norms and an angle. Neither concept stands alone: the dot product encodes magnitude, and magnitude participates in the dot product's geometric interpretation. Separating them into unrelated topics conceals the single algebraic mechanism they both rely on.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `The Angle Between Vectors`,
//     content: `Rearranging the geometric formula isolates the angle:

// @academic[formula_callout:Angle Between Vectors
// $$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$$
// /linear-algebra/formulas#angle_between_vectors]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// This formula is defined only when both vectors are nonzero, since division by zero is undefined. The angle $\\theta$ lies in the interval $[0, \\pi]$, covering all possibilities from vectors pointing in the same direction ($\\theta = 0$) to vectors pointing in exactly opposite directions ($\\theta = \\pi$).

// The right-hand side is the dot product of the two normalized vectors $\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$. Normalization strips away the magnitudes, leaving only the directional relationship. The cosine of the angle between two vectors depends solely on their directions, not on how long they are.

// In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, this formula can be verified against the angle measured with a protractor. In higher dimensions, where geometric angles cannot be visualized, the formula serves as the definition of the angle between two vectors — extending a geometric concept into spaces where geometry alone cannot reach.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Sign of the Dot Product`,
//     content: `The sign of the dot product reveals the angular relationship between two vectors without requiring the angle itself to be computed. Since $\\|\\mathbf{a}\\|$ and $\\|\\mathbf{b}\\|$ are both positive for nonzero vectors, the sign of $\\mathbf{a} \\cdot \\mathbf{b}$ is determined entirely by $\\cos\\theta$.

// When $\\mathbf{a} \\cdot \\mathbf{b} > 0$, the cosine is positive, which means $\\theta$ lies in the interval $(0, \\frac{\\pi}{2})$. The vectors form an acute angle — they point in broadly the same direction.

// When $\\mathbf{a} \\cdot \\mathbf{b} = 0$, the cosine is zero, placing $\\theta$ at exactly $\\frac{\\pi}{2}$. The vectors are perpendicular — neither has any component in the direction of the other.

// When $\\mathbf{a} \\cdot \\mathbf{b} < 0$, the cosine is negative, so $\\theta$ lies in $(\\frac{\\pi}{2}, \\pi)$. The vectors form an obtuse angle — they point in broadly opposite directions.

// This three-way classification is a fast diagnostic tool. Checking whether a dot product is positive, zero, or negative is often all that is needed to determine the geometric relationship between two vectors — no square roots, no inverse cosines, just the sign of a sum of products.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Orthogonality`,
//     content: `Two vectors are orthogonal when their dot product is zero:

// @academic[formula_callout:Orthogonality Test
// $$\\mathbf{a} \\cdot \\mathbf{b} = 0 \\iff \\mathbf{a} \\perp \\mathbf{b}$$
// /linear-algebra/formulas#orthogonality_test]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, orthogonality corresponds to perpendicularity — the vectors meet at a right angle. In $\\mathbb{R}^n$ for $n > 3$, perpendicularity cannot be visualized, but the algebraic condition $\\mathbf{a} \\cdot \\mathbf{b} = 0$ still serves as its definition. Orthogonality is the generalization of "right angle" to any number of dimensions.

// The zero vector occupies a special position: $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for every vector $\\mathbf{v}$, so the zero vector is orthogonal to everything. This is a convention that simplifies many statements — without it, theorems about orthogonal sets would need to exclude the zero vector as a separate case.

// Orthogonality is far more than a geometric curiosity. Orthogonal vectors are algebraically independent in a strong sense — projecting one onto the other yields zero, meaning neither contributes anything in the direction of the other. This idea scales up: orthogonal bases, orthogonal decompositions, and orthogonal complements form a central thread through the [orthogonality](!/linear-algebra/orthogonality) section of linear algebra.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `The Cauchy–Schwarz Inequality`,
//     content: `The dot product of two vectors cannot grow arbitrarily large when their lengths are fixed. Cauchy–Schwarz makes this constraint precise:

// @academic[formula_callout:Cauchy-Schwarz Inequality
// $$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$$
// /linear-algebra/formulas#cauchy_schwarz_inequality]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// The geometric angle formula offers the most transparent explanation. Writing $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ and noting that $|\\cos\\theta|$ never surpasses $1$, the absolute dot product is automatically bounded by the product of the norms. This ceiling is reached only when $\\cos\\theta$ hits $\\pm 1$ — at $\\theta = 0$ or $\\theta = \\pi$ — so equality corresponds to [parallel](!/linear-algebra/vectors/properties) vectors pointing along or against each other.

// An entirely coordinate-based proof exists as well, requiring no notion of angle. Consider the expression $\\|\\mathbf{a} - t\\mathbf{b}\\|^2$ for a variable scalar $t$. Because a squared norm is never negative, this expression defines a quadratic in $t$ with no negative values. A real quadratic that stays non-negative must have a non-positive discriminant, and writing out that discriminant condition yields exactly the Cauchy–Schwarz bound. This argument extends to any setting where an inner product is defined, even when angles lack geometric substance.

// The inequality plays a structural role beyond bounding computations. Without it, the angle formula would be ill-posed: feeding $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$ into $\\arccos$ requires the fraction to land in $[-1, 1]$, and Cauchy–Schwarz is what guarantees this. The norm's triangle inequality likewise depends on it — establishing $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ involves controlling the mixed term $\\mathbf{a} \\cdot \\mathbf{b}$, which is exactly the job Cauchy–Schwarz performs.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Orthogonal Projection`,
//     content: `It is frequently necessary to break a vector $\\mathbf{a}$ into two pieces relative to a nonzero vector $\\mathbf{b}$: one piece aligned with $\\mathbf{b}$ and another at a right angle to it. The dot product supplies the machinery for this decomposition.

// ## Scalar Projection

// The signed distance that $\\mathbf{a}$ covers in the direction of $\\mathbf{b}$ is captured by a single number:

// @academic[formula_callout:Scalar Projection
// $$\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}$$
// /linear-algebra/formulas#scalar_projection]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// When this quantity comes out positive, $\\mathbf{a}$ tilts toward $\\mathbf{b}$. A negative result means $\\mathbf{a}$ tilts away. Zero signals complete orthogonality — $\\mathbf{a}$ contributes nothing at all in the direction of $\\mathbf{b}$.

// ## Vector Projection

// To obtain an actual vector rather than a bare number, the scalar projection is re-embedded along $\\mathbf{b}$:

// @academic[formula_callout:Vector Projection
// $$\\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|^2}\\,\\mathbf{b}$$
// /linear-algebra/formulas#vector_projection]@

// @academic[formulas_link:Browse all linear algebra formulas
// /linear-algebra/formulas]@

// Equivalently, the denominator can be written $\\mathbf{b} \\cdot \\mathbf{b}$. The coefficient $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}$ rescales $\\mathbf{b}$ so that the output has the appropriate length and orientation. What results is a vector parallel to $\\mathbf{b}$ whose norm equals $|\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a}|$.

// ## Orthogonal Decomposition

// Removing the projected component from $\\mathbf{a}$ leaves behind the perpendicular part:

// $$\\mathbf{a}_{\\perp} = \\mathbf{a} - \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a}$$

// Together, the two pieces reconstruct the original:

// $$\\mathbf{a} = \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} + \\mathbf{a}_{\\perp}$$

// The parallel component lies along $\\mathbf{b}$; the perpendicular component satisfies $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = 0$, a fact that follows by substituting the formula and simplifying. These two constituents are geometrically independent — adjusting one leaves the other unchanged, and each accounts for information the other entirely misses.

// This two-part split reappears in more sophisticated forms throughout linear algebra. Projection onto a line generalizes to projection onto multi-dimensional subspaces. The Gram–Schmidt procedure repeats the same splitting step iteratively, peeling off parallel components one vector at a time to produce an orthogonal collection. Least-squares fitting identifies the closest approximation inside a subspace by projecting onto it. Each of these techniques, covered in the [orthogonality](!/linear-algebra/orthogonality) section, traces back to the same principle at work here: partition a vector into what runs along a chosen direction and what runs across it.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj10: {
//     title: `Summary: Every Use of the Dot Product`,
//     content: `Across the sections above, the dot product appears in seven distinct roles &mdash; measuring length, computing angles, testing orthogonality, classifying the angular relationship by sign, bounding products of vectors, and producing two kinds of projection. The table below collects all of these in a single reference, organized around the question each role answers and the formula that does the work. Every entry below is built from the same operation <b>a</b> · <b>b</b> = Σ a<sub>i</sub>b<sub>i</sub> &mdash; the geometric variety on the page comes from how that one number is interpreted and combined with the norm.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };

//  const introContent = {
//      id: `intro`,
//   title: `The Product That Reveals Angles`,
//   content: `The dot product is unlike any operation encountered so far in this section. It takes two vectors and returns not a vector but a single number — a scalar. That number encodes something geometric: the degree to which the two vectors point in the same direction. Through its algebraic definition, the dot product is a straightforward computation — multiply corresponding components and sum. Through its geometric definition, it connects directly to the angle between the vectors, opening the door to orthogonality, projection, and the Cauchy–Schwarz inequality. Both definitions are equivalent, and both are essential.`,
// };

// const faqQuestions = {
//   obj1: {
//     question: "What is the dot product formula?",
//     answer: "For a = (a₁, a₂, ..., aₙ) and b = (b₁, b₂, ..., bₙ): a · b = a₁b₁ + a₂b₂ + ... + aₙbₙ. Multiply corresponding components and sum. Also called the inner product or scalar product because it returns a scalar, not a vector.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What is the geometric formula for the dot product?",
//     answer: "a · b = ‖a‖‖b‖cosθ, where θ is the angle between vectors. This equals the algebraic formula and reveals that the dot product measures alignment: positive for acute angles, zero for perpendicular, negative for obtuse angles.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "What are the properties of the dot product?",
//     answer: "Commutative: a · b = b · a. Distributive: a · (b + c) = a · b + a · c. Scalar factoring: (ca) · b = c(a · b). Positive definite: a · a = ‖a‖² ≥ 0, with equality only when a = 0.",
//     sectionId: "3"
//   },
//   obj4: {
//     question: "How is the dot product related to magnitude?",
//     answer: "v · v = ‖v‖², so the squared magnitude is the dot product of a vector with itself. This means ‖v‖ = √(v · v). The norm is not separate from the dot product—it's generated by it.",
//     sectionId: "4"
//   },
//   obj5: {
//     question: "How do you find the angle between two vectors?",
//     answer: "cosθ = (a · b)/(‖a‖‖b‖). Compute the dot product divided by the product of magnitudes, then take arccos. The angle θ lies in [0, π]. This formula defines angle in higher dimensions where visualization fails.",
//     sectionId: "5"
//   },
//   obj6: {
//     question: "What does the sign of the dot product tell you?",
//     answer: "Positive: acute angle (vectors point similarly). Zero: perpendicular (90°). Negative: obtuse angle (vectors point oppositely). The sign alone reveals the angular relationship without computing the actual angle.",
//     sectionId: "6"
//   },
//   obj7: {
//     question: "When are two vectors orthogonal?",
//     answer: "Two vectors are orthogonal (perpendicular) when their dot product equals zero: a · b = 0. The zero vector is orthogonal to every vector by convention. Orthogonality generalizes 'right angle' to any dimension.",
//     sectionId: "7"
//   },
//   obj8: {
//     question: "What is the Cauchy-Schwarz inequality?",
//     answer: "|a · b| ≤ ‖a‖‖b‖. The absolute dot product cannot exceed the product of magnitudes. Equality holds when vectors are parallel. This inequality ensures cosθ stays in [-1, 1] and underlies the triangle inequality.",
//     sectionId: "8"
//   },
//   obj9: {
//     question: "What is the projection of one vector onto another?",
//     answer: "Vector projection: proj_b(a) = (a · b / ‖b‖²)b. Scalar projection: comp_b(a) = a · b / ‖b‖. The perpendicular component is a - proj_b(a). This decomposes any vector into parallel and orthogonal parts.",
//     sectionId: "9"
//   }
// }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Dot Product",
//     "description": "Learn the dot product: algebraic and geometric definitions, properties, angle formula, orthogonality, Cauchy-Schwarz inequality, and vector projection with formulas and examples.",
//     "url": "https://www.learnmathclass.com/linear-algebra/vectors/dot-product",
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
//       "name": "Dot Product"
//     },
//     "teaches": [
//       "Algebraic and geometric dot product formulas",
//       "Dot product properties",
//       "Finding the angle between vectors",
//       "Orthogonality and perpendicular vectors",
//       "Cauchy-Schwarz inequality",
//       "Scalar and vector projection",
//       "Orthogonal decomposition",
//       "Consolidated reference of every distinct use of the dot product organized by the question it answers"
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
//         "name": "Linear Algebra",
//         "item": "https://www.learnmathclass.com/linear-algebra"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Vectors",
//         "item": "https://www.learnmathclass.com/linear-algebra/vectors"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Dot Product",
//         "item": "https://www.learnmathclass.com/linear-algebra/vectors/dot-product"
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


//   return {
//   props: {
//     sectionsContent,
//     introContent,
//     obj2Table,
//     obj3Table,
//     obj6Table,
//     obj9Table,
//     summaryTable,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Dot Product: Formula, Angle & Projection | Learn Math Class",
//       description: "Learn the dot product: algebraic and geometric definitions, properties, angle formula, orthogonality, Cauchy-Schwarz inequality, and vector projection with formulas and examples.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/vectors/dot-product",
//       name: "Dot Product"
//     },
//   }
// }
//    }
// export default function DotProductPage({seoData, sectionsContent, introContent, obj2Table, obj3Table, obj6Table, obj9Table, summaryTable, faqQuestions, schemas}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const genericSections=[
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
//           <div
//             key={'obj2-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj2Table }}
//           />,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//           <div
//             key={'obj3-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj3Table }}
//           />,
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
//           <div
//             key={'obj6-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj6Table }}
//           />,
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
//           <div
//             key={'obj9-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: obj9Table }}
//           />,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//           <div
//             key={'summary-table'}
//             style={tableWrapStyle}
//             dangerouslySetInnerHTML={{ __html: summaryTable }}
//           />,
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Dot Product</h1>
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
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-22 | 5 tables (obj2 comparison, obj3 aggregation, obj6 comparison, obj9 aggregation, obj10 summary capstone)

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'
import PropertyLawCard from '@/app/components/infographics/linear-algebra/PropertyLawCard'
import DiagramFrame from '../../../../app/components/infographics/DiagramsFrame'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import innerProductDiagrams from '@/app/components/linear-algebra copy/matrix/innerProductDiagrams'
import projectionDiagrams from '@/app/components/linear-algebra copy/matrix/projectionDiagrams'
import renderVectorArrowsV4 from '@/app/utils/illustrations/linear-algebra/vectors/vectorArrows.v4'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'


export async function getStaticProps(){
const keyWords = [
  "dot product",
  "dot product formula",
  "scalar product",
  "inner product",
  "dot product calculator",
  "angle between vectors",
  "dot product properties",
  "orthogonal vectors",
  "vector projection",
  "Cauchy-Schwarz inequality",
  "dot product geometric",
  "perpendicular vectors",
  "cosine angle vectors",
  "scalar projection"
]
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

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj2 — comparison: the two equivalent definitions (algebraic and geometric)
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Definition</th>
      <th style="${tableHeaders.comparison}">Formula</th>
      <th style="${tableHeaders.comparison}">Most useful when</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Algebraic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><b>a</b> · <b>b</b> = a₁b₁ + a₂b₂ + ⋯ + aₙbₙ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">components are known and a numerical answer is wanted; works mechanically in any dimension</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Geometric</td>
      <td style="padding: 12px 15px; color: #34495e;"><b>a</b> · <b>b</b> = ‖<b>a</b>‖ ‖<b>b</b>‖ cos θ</td>
      <td style="padding: 12px 15px; color: #34495e;">magnitudes and the angle are known; reveals what the dot product means (alignment) rather than how to compute it</td>
    </tr>
  </tbody>
</table>
`

// obj3 — aggregation: the four named properties of the dot product
const dotProductLaws = {
  kicker: 'Vectors · dot product',
  title: 'Properties of the dot product',
  tallyLabel: 'entries',
  intro: 'Four laws hold unconditionally and three familiar habits break. Grouping by verdict makes the split structural — you see how much survives before reading a single entry.',
  footnote: 'The failures all trace to one fact: the dot product returns a scalar, so it leaves the space it operates on. Compare the [cross product](!/linear-algebra/vectors/cross-product), which stays inside $\\mathbb{R}^3$ and fails associativity for a different reason entirely.',
  laws: [
    {
      name: 'Commutativity',
      statement: '$\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$',
      verdict: 'holds',
      note: 'Inherited directly from commutativity of real-number multiplication — $a_ib_i = b_ia_i$ for every component. Note this is the opposite of [matrix multiplication](!/linear-algebra/matrix/operations), where commutativity fails.',
    },
    {
      name: 'Distributivity',
      statement: '$\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$',
      verdict: 'holds',
      note: 'Lets a dot product with a sum be broken apart — used constantly when expanding expressions over [vector addition](!/linear-algebra/vectors/basic-operations).',
    },
    {
      name: 'Scalar factoring',
      statement: '$(c\\mathbf{a}) \\cdot \\mathbf{b} = c(\\mathbf{a} \\cdot \\mathbf{b})$',
      verdict: 'holds',
      note: 'A scalar inside the product can be pulled out. Combined with commutativity this also gives $\\mathbf{a} \\cdot (c\\mathbf{b}) = c(\\mathbf{a} \\cdot \\mathbf{b})$, so it works on either slot.',
    },
    {
      name: 'Positive definiteness',
      statement: '$\\mathbf{a} \\cdot \\mathbf{a} = \\|\\mathbf{a}\\|^2 \\geq 0$',
      verdict: 'conditional',
      holdsWhen: 'equality iff $\\mathbf{a} = \\mathbf{0}$',
      note: 'The self-dot product is squared length. This is the axiom that ties the dot product to the [norm](!/linear-algebra/vectors/magnitude) — drop it and lengths stop being meaningful.',
    },
    {
      name: 'Associativity',
      statement: '$(\\mathbf{a} \\cdot \\mathbf{b}) \\cdot \\mathbf{c}$',
      verdict: 'undefined',
      failsWhen: 'always — not well formed',
      note: 'Ungrammatical rather than false. $\\mathbf{a}\\cdot\\mathbf{b}$ is a scalar, and a scalar has no dot product with a vector. The nearest meaningful expression is $(\\mathbf{a}\\cdot\\mathbf{b})\\mathbf{c}$, which is a scalar multiple.',
    },
    {
      name: 'Cancellation',
      statement: '$\\mathbf{a}\\cdot\\mathbf{b} = \\mathbf{a}\\cdot\\mathbf{c} \\nRightarrow \\mathbf{b} = \\mathbf{c}$',
      verdict: 'fails',
      failsWhen: 'always, for $\\mathbf{a} \\neq \\mathbf{0}$',
      note: 'The dot product discards whatever is orthogonal to $\\mathbf{a}$, so any two vectors agreeing along $\\mathbf{a}$ are indistinguishable to it. This is the same collapse that makes [projection](!/linear-algebra/orthogonality) non-invertible.',
      witness: {
        label: 'Witness',
        lines: [
          'a = (1, 0),  b = (2, 5),  c = (2, 9)',
          'a · b = a · c = 2,  yet b ≠ c',
        ],
      },
    },
    {
      name: 'Closure',
      statement: '$\\mathbf{a} \\cdot \\mathbf{b} \\notin \\mathbb{R}^n$',
      verdict: 'fails',
      failsWhen: 'always — output is a scalar',
      note: 'Unlike vector addition, the dot product leaves the space. That is what makes it a **form** rather than an operation on vectors, and why it can measure angle and length at all.',
    },
  ],
}

// obj6 — comparison: 3-way sign diagnostic for the dot product
const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Sign of <b>a</b> · <b>b</b></th>
      <th style="${tableHeaders.comparison}">Cosine</th>
      <th style="${tableHeaders.comparison}">Angle θ</th>
      <th style="${tableHeaders.comparison}">Geometric meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Positive (&gt; 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos θ &gt; 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">θ ∈ [0, π/2)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">acute (or zero) angle &mdash; vectors point in broadly the same direction</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Zero (= 0)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos θ = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">θ = π/2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">orthogonal &mdash; neither vector has a component along the other</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Negative (&lt; 0)</td>
      <td style="padding: 12px 15px; color: #34495e;">cos θ &lt; 0</td>
      <td style="padding: 12px 15px; color: #34495e;">θ ∈ (π/2, π]</td>
      <td style="padding: 12px 15px; color: #34495e;">obtuse (or straight) angle &mdash; vectors point in broadly opposite directions</td>
    </tr>
  </tbody>
</table>
`

// obj9 — aggregation: the projection trio (scalar, vector, perpendicular component)
const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Quantity</th>
      <th style="${tableHeaders.aggregation}">Formula</th>
      <th style="${tableHeaders.aggregation}">What it represents</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar projection comp<sub><b>b</b></sub> <b>a</b></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(<b>a</b> · <b>b</b>) / ‖<b>b</b>‖</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">signed length of <b>a</b>&apos;s shadow on <b>b</b>; positive when <b>a</b> tilts toward <b>b</b>, negative when away</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vector projection proj<sub><b>b</b></sub> <b>a</b></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">((<b>a</b> · <b>b</b>) / (<b>b</b> · <b>b</b>)) <b>b</b> = ((<b>a</b> · <b>b</b>) / ‖<b>b</b>‖²) <b>b</b></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the shadow as an actual vector, parallel to <b>b</b>, with length equal to |comp<sub><b>b</b></sub> <b>a</b>|</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Perpendicular component <b>a</b><sub>⊥</sub></td>
      <td style="padding: 12px 15px; color: #34495e;"><b>a</b> − proj<sub><b>b</b></sub> <b>a</b></td>
      <td style="padding: 12px 15px; color: #34495e;">the part of <b>a</b> orthogonal to <b>b</b>; satisfies <b>a</b><sub>⊥</sub> · <b>b</b> = 0</td>
    </tr>
  </tbody>
</table>
`

// obj10 — summary capstone: every distinct use of the dot product on one card
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Question</th>
      <th style="${tableHeaders.summary}">Use of the dot product</th>
      <th style="${tableHeaders.summary}">Result</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What is the length of <b>v</b>?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">√(<b>v</b> · <b>v</b>)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the norm ‖<b>v</b>‖</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What angle do <b>a</b> and <b>b</b> make?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cos θ = (<b>a</b> · <b>b</b>) / (‖<b>a</b>‖ ‖<b>b</b>‖), then arccos</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">an angle θ in [0, π]</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Are <b>a</b> and <b>b</b> orthogonal?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">check whether <b>a</b> · <b>b</b> = 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">yes / no</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Is the angle acute, right, or obtuse?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">read off the sign of <b>a</b> · <b>b</b></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">positive / zero / negative &rarr; acute / right / obtuse</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">How big can <b>a</b> · <b>b</b> be given the lengths?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">|<b>a</b> · <b>b</b>| ≤ ‖<b>a</b>‖ ‖<b>b</b>‖ (Cauchy&ndash;Schwarz)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a bound; equality only for parallel vectors</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">What is the signed length of <b>a</b>&apos;s shadow on <b>b</b>?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(<b>a</b> · <b>b</b>) / ‖<b>b</b>‖</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">scalar projection comp<sub><b>b</b></sub> <b>a</b></td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">What is <b>a</b>&apos;s shadow on <b>b</b> as a vector?</td>
      <td style="padding: 12px 15px; color: #34495e;">((<b>a</b> · <b>b</b>) / ‖<b>b</b>‖²) <b>b</b></td>
      <td style="padding: 12px 15px; color: #34495e;">vector projection proj<sub><b>b</b></sub> <b>a</b>, parallel to <b>b</b></td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   obj1: {
//     title: `Algebraic Definition`,
//     content: `The dot product of two vectors $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in $\\mathbb{R}^n$ is the scalar obtained by multiplying corresponding components and summing the results:

// $$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n = \\sum_{i=1}^{n} a_ib_i$$

// The notation uses a centered dot between the two vectors. Other names for the same operation are the inner product and the scalar product — the latter emphasizing that the output is a scalar, not a vector.

// This definition works in any dimension. In $\\mathbb{R}^2$, the dot product of $(3, 4)$ and $(1, -2)$ is $3(1) + 4(-2) = -5$. In $\\mathbb{R}^5$, the same rule applies with five terms instead of two. The computation is mechanical, but the meaning it carries — revealed by the geometric definition — is what makes the dot product central to the rest of linear algebra.

// The dot product differs fundamentally from [vector addition](!/linear-algebra/vectors/basic-operations) and scalar multiplication. Those operations take vectors and produce vectors. The dot product takes two vectors and collapses them into a single number, discarding the directional structure in favor of a measurement of alignment.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj2: {
//     title: `Geometric Definition`,
//     content: `There is a second way to compute the dot product that bypasses components entirely and works directly with lengths and angles. If $\\mathbf{a}$ and $\\mathbf{b}$ are both nonzero and $\\theta$ denotes the angle they form when drawn from a common point, then:

// $$\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

// The right-hand side multiplies the [magnitudes](!/linear-algebra/vectors/magnitude) of both vectors and adjusts the product by $\\cos\\theta$. That cosine factor does all the interpretive work: it equals $1$ when $\\theta = 0$ (full alignment), drops to $0$ at $\\theta = \\frac{\\pi}{2}$ (no alignment at all), and reaches $-1$ at $\\theta = \\pi$ (complete opposition).

// Why does this agree with the component-wise formula? Place $\\mathbf{a}$ and $\\mathbf{b}$ tail to tail and form the triangle completed by $\\mathbf{a} - \\mathbf{b}$. The law of cosines gives the squared length of the third side:

// $$\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2 - 2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$

// Now expand $\\|\\mathbf{a} - \\mathbf{b}\\|^2$ by writing it as $(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b})$ and distributing. The result is $\\|\\mathbf{a}\\|^2 - 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2$. Setting the two expressions equal and cancelling the squared norms leaves $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$. The component-based sum of products and the length-angle formula are two faces of a single quantity — one assembled from arithmetic on coordinates, the other encoding geometric information about orientation.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj3: {
//     title: `Properties of the Dot Product`,
//     content: `The dot product obeys a set of algebraic rules that make it behave predictably in calculations.

// ## Commutativity

// $$\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$$

// The order of the two vectors does not matter. This follows directly from commutativity of real number multiplication: $a_ib_i = b_ia_i$ for every component.

// ## Distributivity

// $$\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$$

// The dot product distributes over vector addition. This allows the dot product of a vector with a sum to be broken apart, a property used constantly when expanding expressions involving multiple vectors.

// ## Scalar Factoring

// $$(c\\mathbf{a}) \\cdot \\mathbf{b} = c(\\mathbf{a} \\cdot \\mathbf{b})$$

// A scalar multiplied into one of the vectors can be pulled out of the dot product entirely. Combined with commutativity, this also gives $\\mathbf{a} \\cdot (c\\mathbf{b}) = c(\\mathbf{a} \\cdot \\mathbf{b})$.

// ## Positive Definiteness

// $$\\mathbf{a} \\cdot \\mathbf{a} = \\|\\mathbf{a}\\|^2 \\geq 0, \\quad \\text{with equality if and only if } \\mathbf{a} = \\mathbf{0}$$

// The dot product of a vector with itself is the sum of squared components — always non-negative, and zero only for the zero vector. This property ties the dot product directly to the norm and ensures that the geometric notion of length is consistent with the algebraic framework.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj4: {
//     title: `Connection to Magnitude`,
//     content: `Positive definiteness reveals that the [norm](!/linear-algebra/vectors/magnitude) is hiding inside the dot product. When a vector is dotted with itself, the result is exactly the quantity that sits under the square root in the norm formula:

// $$\\mathbf{v} \\cdot \\mathbf{v} = v_1^2 + v_2^2 + \\cdots + v_n^2 = \\|\\mathbf{v}\\|^2$$

// Squared length, in other words, is not a separate concept — it is a dot product in which both slots are filled by the same vector. Flipping this around gives an alternative expression for the norm: $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$. Rather than defining magnitude independently and then discovering a coincidence, we can view the norm as something the dot product generates.

// This observation has practical consequences. Several norm properties that would otherwise demand their own proofs fall out as corollaries of dot product rules. Scalar factoring implies $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$ with no extra work. The triangle inequality $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ follows once we control the size of $\\mathbf{a} \\cdot \\mathbf{b}$ through Cauchy–Schwarz — again, a statement framed entirely in dot product language.

// The dependence runs both ways. The geometric formula $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ rebuilds the dot product from two norms and an angle. Neither concept stands alone: the dot product encodes magnitude, and magnitude participates in the dot product's geometric interpretation. Separating them into unrelated topics conceals the single algebraic mechanism they both rely on.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj5: {
//     title: `The Angle Between Vectors`,
//     content: `Rearranging the geometric formula isolates the angle:

// $$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$$

// This formula is defined only when both vectors are nonzero, since division by zero is undefined. The angle $\\theta$ lies in the interval $[0, \\pi]$, covering all possibilities from vectors pointing in the same direction ($\\theta = 0$) to vectors pointing in exactly opposite directions ($\\theta = \\pi$).

// The right-hand side is the dot product of the two normalized vectors $\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$. Normalization strips away the magnitudes, leaving only the directional relationship. The cosine of the angle between two vectors depends solely on their directions, not on how long they are.

// In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, this formula can be verified against the angle measured with a protractor. In higher dimensions, where geometric angles cannot be visualized, the formula serves as the definition of the angle between two vectors — extending a geometric concept into spaces where geometry alone cannot reach.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj6: {
//     title: `Sign of the Dot Product`,
//     content: `The sign of the dot product reveals the angular relationship between two vectors without requiring the angle itself to be computed. Since $\\|\\mathbf{a}\\|$ and $\\|\\mathbf{b}\\|$ are both positive for nonzero vectors, the sign of $\\mathbf{a} \\cdot \\mathbf{b}$ is determined entirely by $\\cos\\theta$.

// When $\\mathbf{a} \\cdot \\mathbf{b} > 0$, the cosine is positive, which means $\\theta$ lies in the interval $(0, \\frac{\\pi}{2})$. The vectors form an acute angle — they point in broadly the same direction.

// When $\\mathbf{a} \\cdot \\mathbf{b} = 0$, the cosine is zero, placing $\\theta$ at exactly $\\frac{\\pi}{2}$. The vectors are perpendicular — neither has any component in the direction of the other.

// When $\\mathbf{a} \\cdot \\mathbf{b} < 0$, the cosine is negative, so $\\theta$ lies in $(\\frac{\\pi}{2}, \\pi)$. The vectors form an obtuse angle — they point in broadly opposite directions.

// This three-way classification is a fast diagnostic tool. Checking whether a dot product is positive, zero, or negative is often all that is needed to determine the geometric relationship between two vectors — no square roots, no inverse cosines, just the sign of a sum of products.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj7: {
//     title: `Orthogonality`,
//     content: `Two vectors are orthogonal when their dot product is zero:

// $$\\mathbf{a} \\cdot \\mathbf{b} = 0 \\quad \\Longleftrightarrow \\quad \\mathbf{a} \\perp \\mathbf{b}$$

// In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, orthogonality corresponds to perpendicularity — the vectors meet at a right angle. In $\\mathbb{R}^n$ for $n > 3$, perpendicularity cannot be visualized, but the algebraic condition $\\mathbf{a} \\cdot \\mathbf{b} = 0$ still serves as its definition. Orthogonality is the generalization of "right angle" to any number of dimensions.

// The zero vector occupies a special position: $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for every vector $\\mathbf{v}$, so the zero vector is orthogonal to everything. This is a convention that simplifies many statements — without it, theorems about orthogonal sets would need to exclude the zero vector as a separate case.

// Orthogonality is far more than a geometric curiosity. Orthogonal vectors are algebraically independent in a strong sense — projecting one onto the other yields zero, meaning neither contributes anything in the direction of the other. This idea scales up: orthogonal bases, orthogonal decompositions, and orthogonal complements form a central thread through the [orthogonality](!/linear-algebra/orthogonality) section of linear algebra.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj8: {
//     title: `The Cauchy–Schwarz Inequality`,
//     content: `The dot product of two vectors cannot grow arbitrarily large when their lengths are fixed. Cauchy–Schwarz makes this constraint precise:

// $$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$$

// The geometric angle formula offers the most transparent explanation. Writing $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ and noting that $|\\cos\\theta|$ never surpasses $1$, the absolute dot product is automatically bounded by the product of the norms. This ceiling is reached only when $\\cos\\theta$ hits $\\pm 1$ — at $\\theta = 0$ or $\\theta = \\pi$ — so equality corresponds to [parallel](!/linear-algebra/vectors/properties) vectors pointing along or against each other.

// An entirely coordinate-based proof exists as well, requiring no notion of angle. Consider the expression $\\|\\mathbf{a} - t\\mathbf{b}\\|^2$ for a variable scalar $t$. Because a squared norm is never negative, this expression defines a quadratic in $t$ with no negative values. A real quadratic that stays non-negative must have a non-positive discriminant, and writing out that discriminant condition yields exactly the Cauchy–Schwarz bound. This argument extends to any setting where an inner product is defined, even when angles lack geometric substance.

// The inequality plays a structural role beyond bounding computations. Without it, the angle formula would be ill-posed: feeding $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$ into $\\arccos$ requires the fraction to land in $[-1, 1]$, and Cauchy–Schwarz is what guarantees this. The norm's triangle inequality likewise depends on it — establishing $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ involves controlling the mixed term $\\mathbf{a} \\cdot \\mathbf{b}$, which is exactly the job Cauchy–Schwarz performs.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj9: {
//     title: `Orthogonal Projection`,
//     content: `It is frequently necessary to break a vector $\\mathbf{a}$ into two pieces relative to a nonzero vector $\\mathbf{b}$: one piece aligned with $\\mathbf{b}$ and another at a right angle to it. The dot product supplies the machinery for this decomposition.

// ## Scalar Projection

// The signed distance that $\\mathbf{a}$ covers in the direction of $\\mathbf{b}$ is captured by a single number:

// $$\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}$$

// When this quantity comes out positive, $\\mathbf{a}$ tilts toward $\\mathbf{b}$. A negative result means $\\mathbf{a}$ tilts away. Zero signals complete orthogonality — $\\mathbf{a}$ contributes nothing at all in the direction of $\\mathbf{b}$.

// ## Vector Projection

// To obtain an actual vector rather than a bare number, the scalar projection is re-embedded along $\\mathbf{b}$:

// $$\\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}\\,\\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|^2}\\,\\mathbf{b}$$

// The coefficient $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}$ rescales $\\mathbf{b}$ so that the output has the appropriate length and orientation. What results is a vector parallel to $\\mathbf{b}$ whose norm equals $|\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a}|$.

// ## Orthogonal Decomposition

// Removing the projected component from $\\mathbf{a}$ leaves behind the perpendicular part:

// $$\\mathbf{a}_{\\perp} = \\mathbf{a} - \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a}$$

// Together, the two pieces reconstruct the original:

// $$\\mathbf{a} = \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} + \\mathbf{a}_{\\perp}$$

// The parallel component lies along $\\mathbf{b}$; the perpendicular component satisfies $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = 0$, a fact that follows by substituting the formula and simplifying. These two constituents are geometrically independent — adjusting one leaves the other unchanged, and each accounts for information the other entirely misses.

// This two-part split reappears in more sophisticated forms throughout linear algebra. Projection onto a line generalizes to projection onto multi-dimensional subspaces. The Gram–Schmidt procedure repeats the same splitting step iteratively, peeling off parallel components one vector at a time to produce an orthogonal collection. Least-squares fitting identifies the closest approximation inside a subspace by projecting onto it. Each of these techniques, covered in the [orthogonality](!/linear-algebra/orthogonality) section, traces back to the same principle at work here: partition a vector into what runs along a chosen direction and what runs across it.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
//   obj10: {
//     title: `Summary: Every Use of the Dot Product`,
//     content: `Across the sections above, the dot product appears in seven distinct roles &mdash; measuring length, computing angles, testing orthogonality, classifying the angular relationship by sign, bounding products of vectors, and producing two kinds of projection. The table below collects all of these in a single reference, organized around the question each role answers and the formula that does the work. Every entry below is built from the same operation <b>a</b> · <b>b</b> = Σ a<sub>i</sub>b<sub>i</sub> &mdash; the geometric variety on the page comes from how that one number is interpreted and combined with the norm.`,
//     before: ``,
//     after: ``,
//     link: '',
//   },
// };



// tables-optimized: v4 | 2026-05-22 | 5 tables (obj2 comparison, obj3 aggregation, obj6 comparison, obj9 aggregation, obj10 summary capstone)

// ---------- SECTIONS ----------

// Concept introduction (section 1) — template B, definition first. Running
// instance: a = (3, 1), b = (1, 2), a · b = 5, angle 45°. Old obj1 text is kept
// in sectionsContent.obj1, unused; its formula box, formulas link, pitfall
// aside, four passages and the dot demo frame with its line are carried in
// unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciProductsTable = ciTableOpen(['component', 'a', 'b', 'product']) +
  ciRow(['first', '3', '1', '3']) +
  ciRow(['second', '1', '2', '2'], { shade: true }) +
  ciRow(['sum', '', '', 'a · b = 5'], { last: true, color: '#2563EB', cols: [3] }) +
  '</tbody></table>'
const ciExamplesTable = ciTableOpen(['a', 'b', 'products', 'a · b']) +
  ciRow(['(3, 1)', '(1, 2)', '3 + 2', '5'], { color: '#2563EB', cols: [3] }) +
  ciRow(['(3, 4)', '(1, −2)', '3 + (−8)', '−5'], { shade: true }) +
  ciRow(['(1, 2, 3)', '(4, 0, −1)', '4 + 0 + (−3)', '1']) +
  ciRow(['(3, 1)', '(3, 1)', '9 + 1', '10'], { shade: true, last: true }) +
  '</tbody></table>'
const ciPromiseTable = ciTableOpen(['promise', 'check on a = (3, 1), b = (1, 2)', 'kept?']) +
  ciRow(['a · a is the squared length', 'a · a = 10, and ‖a‖ = √10', 'yes'], { color: '#2563EB', cols: [2] }) +
  ciRow(['it reflects the angle', '5 = √10 · √5 · cos 45°, since √50 · 0.707… = 5', 'yes'], { shade: true, color: '#2563EB', cols: [2] }) +
  ciRow(['perpendicular gives 0', '(3, 1) · (−1, 3) = −3 + 3 = 0', 'yes'], { last: true, color: '#2563EB', cols: [2] }) +
  '</tbody></table>'

const sectionsContent = {
  obj1: {
    title: `Algebraic Definition`,
    content: `The dot product of two vectors $\\mathbf{a} = (a_1, a_2, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, b_2, \\ldots, b_n)$ in $\\mathbb{R}^n$ is the scalar obtained by multiplying corresponding components and summing the results:

@academic[formula_callout:Dot Product (Algebraic Form)
$$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n = \\sum_{i=1}^{n} a_ib_i$$
/linear-algebra/formulas#dot_product_algebraic]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The notation uses a centered dot between the two vectors. Other names for the same operation are the inner product and the scalar product — the latter emphasizing that the output is a scalar, not a vector.

This definition works in any dimension. In $\\mathbb{R}^2$, the dot product of $(3, 4)$ and $(1, -2)$ is $3(1) + 4(-2) = -5$. In $\\mathbb{R}^5$, the same rule applies with five terms instead of two. The computation is mechanical, but the meaning it carries — revealed by the geometric definition — is what makes the dot product central to the rest of linear algebra.

@academic[pitfall,aside:true,width:35%:Leaving the products as a vector
Multiplying the components of $(3, 4)$ and $(1, -2)$ and writing the answer as $(3, -8)$ stops halfway. The products are added: $3 + (-8) = -5$, a single number.
[Read more](!#pitfalls)]@

The dot product differs fundamentally from [vector addition](!/linear-algebra/vectors/basic-operations) and scalar multiplication. Those operations take vectors and produce vectors. The dot product takes two vectors and collapses them into a single number, discarding the directional structure in favor of a measurement of alignment.

To compute the dot product of two specific vectors, use the [vector calculator](!/linear-algebra/calculators/vectors).`,
    before: ``,
    after: ``,
    link: '',
  },
  notation: {
    title: `Dot Product Notation`,
    lead: `The one dot that is never optional, the matrix spelling of the same number, and how to read a line that mixes every kind of bar.`,
    inherited: `Bold vectors and components — [vector notation](!/linear-algebra/vectors/basic-operations#notation); $\\|\\cdot\\|$ — [norm notation](!/linear-algebra/vectors/magnitude#notation); $\\Sigma$ — [sequence notation](!/algebra/sequences/arithmetic#notation).`,
    entries: [
      {
        id: 'mandatory-dot',
        tex: `$\\mathbf{a} \\cdot \\mathbf{b}$`,
        read: `a dot b`,
        means: `Between two vectors the centered dot **is** the operation — juxtaposition $\\mathbf{a}\\mathbf{b}$ means nothing here, unlike scalars where $ab$ and $a \\cdot b$ agree. The output is a scalar; the names, per the **Algebraic Definition** above, are dot, inner, or scalar product.`,
        cases: `Three habitats for one glyph: between scalars, optional; in $c \\cdot \\mathbf{v}$, optional decoration for scalar multiplication; between vectors, load-bearing. Only the last one changes the species of the result.`,
        alsoWritten: `$\\langle \\mathbf{a}, \\mathbf{b} \\rangle$ — angle brackets, the [general inner product's](!/linear-algebra/orthogonality/inner-product) mark, of which the dot is the $\\mathbb{R}^n$ special case.`,
        confusedWith: `$\\mathbf{a} \\times \\mathbf{b}$ — the [cross product](!/linear-algebra/vectors/cross-product): different operation, different output species (a vector, and only in $\\mathbb{R}^3$). The two multiplication signs of arithmetic become two **different operations** on vectors.`,
      },
      {
        id: 'transpose-spelling',
        tex: `$\\mathbf{a}^{T}\\mathbf{b}$`,
        read: `a transpose b`,
        means: `The [matrix](!/linear-algebra/matrix/operations) spelling of the same number: a row ($1 \\times n$) times a column ($n \\times 1$) is a $1 \\times 1$ matrix — the dot product wearing matrix clothes.`,
        cases: `Standard wherever vectors are columns by default — advanced texts, statistics, machine learning. The reversed order $\\mathbf{a}\\mathbf{b}^{T}$ is a different object entirely: an $n \\times n$ matrix, the outer product.`,
        alsoWritten: `$\\mathbf{a}^{\\top}\\mathbf{b}$, with the sans-serif top glyph; $\\mathbf{a}'\\mathbf{b}$ in econometrics, where the prime means transpose — colliding with every other job the [prime](!/calculus/derivatives/function#notation) holds.`,
        confusedWith: `A power. The $T$ is a label — transpose — not an exponent; nothing is being raised.`,
      },
      {
        id: 'mixed-bars-line',
        tex: `$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$`,
        read: `The absolute value of a dot b is at most the product of the norms`,
        means: `Cauchy–Schwarz as a bar-reading exercise: single bars on the left because $\\mathbf{a} \\cdot \\mathbf{b}$ is a **scalar** — ordinary [absolute value](!/algebra/equations/absolute-value#notation) — and double bars on the right because norms measure vectors. The bar count tracks the species on every line of this page.`,
        cases: `The geometric form $\\|\\mathbf{a}\\|\\|\\mathbf{b}\\|\\cos\\theta$ reserves $\\theta$ for the angle between the vectors — the sign verdicts it produces are read off in **Sign of the Dot Product** below.`,
        alsoWritten: `$(\\mathbf{a} \\cdot \\mathbf{b})^2 \\leq (\\mathbf{a} \\cdot \\mathbf{a})(\\mathbf{b} \\cdot \\mathbf{b})$ — the squared form, bar-free, common in proofs.`,
        confusedWith: `Norm bars on a scalar. Writing $\\|\\mathbf{a} \\cdot \\mathbf{b}\\|$ is a species error — the operation already collapsed the vectors; only $|\\cdot|$ applies to what remains.`,
      },
    ],
    symbolsHref: `/math-symbols/linear-algebra`,
    symbolsLabel: `All linear algebra symbols`,
    parentHref: `/linear-algebra/vectors`,
    parentLabel: `Vectors`,
  },
  obj2: {
    title: `Geometric Definition`,
    content: `There is a second way to compute the dot product that bypasses components entirely and works directly with lengths and angles. If $\\mathbf{a}$ and $\\mathbf{b}$ are both nonzero and $\\theta$ denotes the angle they form when drawn from a common point, then:

@academic[formula_callout:Dot Product (Geometric Form)
$$\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$
/linear-algebra/formulas#dot_product_geometric]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The right-hand side multiplies the [magnitudes](!/linear-algebra/vectors/magnitude) of both vectors and adjusts the product by $\\cos\\theta$. That cosine factor does all the interpretive work: it equals $1$ when $\\theta = 0$ (full alignment), drops to $0$ at $\\theta = \\frac{\\pi}{2}$ (no alignment at all), and reaches $-1$ at $\\theta = \\pi$ (complete opposition).

Why does this agree with the component-wise formula? Place $\\mathbf{a}$ and $\\mathbf{b}$ tail to tail and form the triangle completed by $\\mathbf{a} - \\mathbf{b}$. The law of cosines gives the squared length of the third side:

@academic[formula_callout:Geometric Definition
$$\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2 - 2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$$]@

Now expand $\\|\\mathbf{a} - \\mathbf{b}\\|^2$ by writing it as $(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b})$ and distributing. The result is $\\|\\mathbf{a}\\|^2 - 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2$. Setting the two expressions equal and cancelling the squared norms leaves $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$. The component-based sum of products and the length-angle formula are two faces of a single quantity — one assembled from arithmetic on coordinates, the other encoding geometric information about orientation.

@academic[pitfall,aside:true,width:35%:Dropping the middle term
Squaring term by term, $\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2$, loses $-2(\\mathbf{a} \\cdot \\mathbf{b})$. For $\\mathbf{a} = (4, 1)$ and $\\mathbf{b} = (1, 3)$ it gives $27$, but $\\mathbf{a} - \\mathbf{b} = (3, -2)$ has squared length $13 = 27 - 2(7)$.
[Read more](!#pitfalls)]@

Distributing $(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b})$ produces four dot products, just as multiplying out $(x - y)^2$ produces four terms. Two of them are the squared lengths $\\mathbf{a} \\cdot \\mathbf{a}$ and $\\mathbf{b} \\cdot \\mathbf{b}$, and the other two, $-\\mathbf{a} \\cdot \\mathbf{b}$ and $-\\mathbf{b} \\cdot \\mathbf{a}$, merge into one by commutativity. That merged term is the only place where the two vectors meet, and it is the term the law of cosines matches with $-2\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Properties of the Dot Product`,
    content: `The dot product obeys a set of algebraic rules that make it behave predictably in calculations.

## Commutativity

@academic[formula_callout:Properties of the Dot Product
$$\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}$$]@

The order of the two vectors does not matter. This follows directly from commutativity of real number multiplication: $a_ib_i = b_ia_i$ for every component.

## Distributivity

@academic[formula_callout:Properties of the Dot Product
$$\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}$$]@

The dot product distributes over vector addition. This allows the dot product of a vector with a sum to be broken apart, a property used constantly when expanding expressions involving multiple vectors.

## Scalar Factoring

@academic[formula_callout:Properties of the Dot Product
$$(c\\mathbf{a}) \\cdot \\mathbf{b} = c(\\mathbf{a} \\cdot \\mathbf{b})$$]@

A scalar multiplied into one of the vectors can be pulled out of the dot product entirely. Combined with commutativity, this also gives $\\mathbf{a} \\cdot (c\\mathbf{b}) = c(\\mathbf{a} \\cdot \\mathbf{b})$.

## Positive Definiteness

@academic[formula_callout:Properties of the Dot Product
$$\\mathbf{a} \\cdot \\mathbf{a} = \\|\\mathbf{a}\\|^2 \\geq 0, \\quad \\text{with equality if and only if } \\mathbf{a} = \\mathbf{0}$$]@

The dot product of a vector with itself is the sum of squared components — always non-negative, and zero only for the zero vector. This property ties the dot product directly to the norm and ensures that the geometric notion of length is consistent with the algebraic framework.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Connection to Magnitude`,
    content: `Positive definiteness reveals that the [norm](!/linear-algebra/vectors/magnitude) is hiding inside the dot product. When a vector is dotted with itself, the result is exactly the quantity that sits under the square root in the norm formula:

@academic[formula_callout:Dot Product Magnitude Relation
$$\\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2$$
/linear-algebra/formulas#self_dot_product]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Written out in components, this reads $\\mathbf{v} \\cdot \\mathbf{v} = v_1^2 + v_2^2 + \\cdots + v_n^2$ — a sum of squares. Squared length, in other words, is not a separate concept — it is a dot product in which both slots are filled by the same vector. Flipping this around gives an alternative expression for the norm: $\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}$. Rather than defining magnitude independently and then discovering a coincidence, we can view the norm as something the dot product generates.

This observation has practical consequences. Several norm properties that would otherwise demand their own proofs fall out as corollaries of dot product rules. Scalar factoring implies $\\|c\\mathbf{v}\\| = |c|\\,\\|\\mathbf{v}\\|$ with no extra work. The triangle inequality $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ follows once we control the size of $\\mathbf{a} \\cdot \\mathbf{b}$ through Cauchy–Schwarz — again, a statement framed entirely in dot product language.

The dependence runs both ways. The geometric formula $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ rebuilds the dot product from two norms and an angle. Neither concept stands alone: the dot product encodes magnitude, and magnitude participates in the dot product's geometric interpretation. Separating them into unrelated topics conceals the single algebraic mechanism they both rely on.

@academic[punchline:Length is not a separate idea: it is the dot product of a vector with itself, under a square root.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `The Angle Between Vectors`,
    content: `Rearranging the geometric formula isolates the angle:

@academic[formula_callout:Angle Between Vectors
$$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$$
/linear-algebra/formulas#angle_between_vectors]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

@academic[pitfall,aside:true,width:35%:Dividing by the squared lengths
For $\\mathbf{a} = (4, 1)$ and $\\mathbf{b} = (1, 3)$, using $17$ and $10$ in the denominator gives $\\cos\\theta = \\frac{7}{170} \\approx 0.041$, so $\\theta \\approx 87.6^\\circ$. The norms are $\\sqrt{17}$ and $\\sqrt{10}$: $\\cos\\theta = \\frac{7}{\\sqrt{170}} \\approx 0.537$ and $\\theta \\approx 57.5^\\circ$.
[Read more](!#pitfalls)]@

This formula is defined only when both vectors are nonzero, since division by zero is undefined. The angle $\\theta$ lies in the interval $[0, \\pi]$, covering all possibilities from vectors pointing in the same direction ($\\theta = 0$) to vectors pointing in exactly opposite directions ($\\theta = \\pi$).

The right-hand side is the dot product of the two normalized vectors $\\hat{\\mathbf{a}} \\cdot \\hat{\\mathbf{b}}$. Normalization strips away the magnitudes, leaving only the directional relationship.

@academic[rule_corollary_plain:The cosine of the angle between two vectors depends solely on their directions, not on how long they are.]@

@academic[fact,aside:true,width:35%:Methane's bond angle is a dot product
In methane the four hydrogens sit at alternate corners of a cube around the carbon, along $(1, 1, 1)$ and $(1, -1, -1)$ for example. The dot product is $-1$ and each length is $\\sqrt{3}$, so $\\cos\\theta = -\\frac{1}{3}$ and $\\theta \\approx 109.5^\\circ$, the bond angle of chemistry books.]@

In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, this formula can be verified against the angle measured with a protractor. In higher dimensions, where geometric angles cannot be visualized, the formula serves as the definition of the angle between two vectors — extending a geometric concept into spaces where geometry alone cannot reach.

Even in $\\mathbb{R}^3$ the formula often does better than a protractor. Take a cube centred at the origin with corners at $(\\pm 1, \\pm 1, \\pm 1)$, and draw arrows from the centre to two corners that share no edge, such as $(1, 1, 1)$ and $(1, -1, -1)$. Measuring the angle between them on a model is awkward; the formula needs only one dot product and two lengths.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Sign of the Dot Product`,
    content: `The sign of the dot product reveals the angular relationship between two vectors without requiring the angle itself to be computed. Since $\\|\\mathbf{a}\\|$ and $\\|\\mathbf{b}\\|$ are both positive for nonzero vectors, the sign of $\\mathbf{a} \\cdot \\mathbf{b}$ is determined entirely by $\\cos\\theta$.

When $\\mathbf{a} \\cdot \\mathbf{b} > 0$, the cosine is positive, which means $\\theta$ lies in the interval $[0, \\frac{\\pi}{2})$. The vectors form an acute (or zero) angle — they point in broadly the same direction.

When $\\mathbf{a} \\cdot \\mathbf{b} = 0$, the cosine is zero, placing $\\theta$ at exactly $\\frac{\\pi}{2}$. The vectors are perpendicular — neither has any component in the direction of the other.

When $\\mathbf{a} \\cdot \\mathbf{b} < 0$, the cosine is negative, so $\\theta$ lies in $(\\frac{\\pi}{2}, \\pi]$. The vectors form an obtuse (or straight) angle — they point in broadly opposite directions.

This three-way classification is a fast diagnostic tool. Checking whether a dot product is positive, zero, or negative is often all that is needed to determine the geometric relationship between two vectors — no square roots, no inverse cosines, just the sign of a sum of products.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Orthogonality`,
    content: `Two vectors are orthogonal when their dot product is zero:

@academic[formula_callout:Orthogonality Test
$$\\mathbf{a} \\cdot \\mathbf{b} = 0 \\iff \\mathbf{a} \\perp \\mathbf{b}$$
/linear-algebra/formulas#orthogonality_condition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

@academic[fact,aside:true,width:35%:Random arrows are almost perpendicular
Fill two vectors in $\\mathbb{R}^{10000}$ with random entries $\\pm 1$: more than 99.9% of the time they meet at between $88^\\circ$ and $92^\\circ$. The 10,000 products $\\pm 1$ mostly cancel, leaving a dot product typically about $100$ in size, while the two lengths multiply to $10000$.]@

In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, orthogonality corresponds to perpendicularity — the vectors meet at a right angle. In $\\mathbb{R}^n$ for $n > 3$, perpendicularity cannot be visualized, but the algebraic condition $\\mathbf{a} \\cdot \\mathbf{b} = 0$ still serves as its definition. Orthogonality is the generalization of "right angle" to any number of dimensions.

The zero vector occupies a special position: $\\mathbf{0} \\cdot \\mathbf{v} = 0$ for every vector $\\mathbf{v}$, so the zero vector is orthogonal to everything. This is a convention that simplifies many statements — without it, theorems about orthogonal sets would need to exclude the zero vector as a separate case.

Orthogonality is far more than a geometric curiosity. Orthogonal vectors are algebraically independent in a strong sense — projecting one onto the other yields zero, meaning neither contributes anything in the direction of the other. This idea scales up: orthogonal bases, orthogonal decompositions, and orthogonal complements form a central thread through the [orthogonality](!/linear-algebra/orthogonality) section of linear algebra.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `The Cauchy–Schwarz Inequality`,
    content: `The dot product of two vectors cannot grow arbitrarily large when their lengths are fixed. Cauchy–Schwarz makes this constraint precise:

@academic[formula_callout:Cauchy-Schwarz Inequality
$$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|$$
/linear-algebra/formulas#cauchy-schwarz_inequality]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The geometric angle formula offers the most transparent explanation. Writing $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|\\cos\\theta$ and noting that $|\\cos\\theta|$ never surpasses $1$, the absolute dot product is automatically bounded by the product of the norms. This ceiling is reached only when $\\cos\\theta$ hits $\\pm 1$ — at $\\theta = 0$ or $\\theta = \\pi$ — so equality corresponds to [parallel](!/linear-algebra/vectors/properties) vectors pointing along or against each other.

An entirely coordinate-based proof exists as well, requiring no notion of angle. Consider the expression $\\|\\mathbf{a} - t\\mathbf{b}\\|^2$ for a variable scalar $t$. Because a squared norm is never negative, this expression defines a quadratic in $t$ with no negative values. A real quadratic that stays non-negative must have a non-positive discriminant, and writing out that discriminant condition yields exactly the Cauchy–Schwarz bound. This argument extends to any setting where an inner product is defined, even when angles lack geometric substance.

The inequality plays a structural role beyond bounding computations. Without it, the angle formula would be ill-posed: feeding $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|\\,\\|\\mathbf{b}\\|}$ into $\\arccos$ requires the fraction to land in $[-1, 1]$, and Cauchy–Schwarz is what guarantees this. The norm's triangle inequality likewise depends on it — establishing $\\|\\mathbf{a} + \\mathbf{b}\\| \\leq \\|\\mathbf{a}\\| + \\|\\mathbf{b}\\|$ involves controlling the mixed term $\\mathbf{a} \\cdot \\mathbf{b}$, which is exactly the job Cauchy–Schwarz performs.

@academic[punchline:Cauchy–Schwarz is what lets the dot product define angles and keeps lengths obeying the triangle inequality, in any dimension.]@`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Orthogonal Projection`,
    content: `It is frequently necessary to break a vector $\\mathbf{a}$ into two pieces relative to a nonzero vector $\\mathbf{b}$: one piece aligned with $\\mathbf{b}$ and another at a right angle to it. The dot product supplies the machinery for this decomposition.

## Scalar Projection

The signed distance that $\\mathbf{a}$ covers in the direction of $\\mathbf{b}$ is captured by a single number:

@academic[formula_callout:Scalar Projection
$$\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}$$
/linear-algebra/formulas#scalar_projection]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

When this quantity comes out positive, $\\mathbf{a}$ tilts toward $\\mathbf{b}$. A negative result means $\\mathbf{a}$ tilts away. Zero signals complete orthogonality — $\\mathbf{a}$ contributes nothing at all in the direction of $\\mathbf{b}$.

## Vector Projection

To obtain an actual vector rather than a bare number, the scalar projection is re-embedded along $\\mathbf{b}$:

@academic[formula_callout:Vector Projection
$$\\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|^2}\\,\\mathbf{b}$$
/linear-algebra/formulas#vector_projection]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

@academic[pitfall,aside:true,width:35%:Dividing by the length instead of its square
Projecting $\\mathbf{a} = (4, 2)$ onto $\\mathbf{b} = (1, 1)$ with $\\|\\mathbf{b}\\| = \\sqrt{2}$ in the denominator gives $\\frac{6}{\\sqrt{2}}(1, 1) \\approx (4.24, 4.24)$, of length $6$, longer than $\\mathbf{a}$ itself. With $\\|\\mathbf{b}\\|^2 = 2$, the projection is $3(1, 1) = (3, 3)$.
[Read more](!#pitfalls)]@

Equivalently, the denominator can be written $\\mathbf{b} \\cdot \\mathbf{b}$. The coefficient $\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\mathbf{b} \\cdot \\mathbf{b}}$ rescales $\\mathbf{b}$ so that the output has the appropriate length and orientation. What results is a vector parallel to $\\mathbf{b}$ whose norm equals $|\\text{comp}_{\\mathbf{b}}\\,\\mathbf{a}|$.

## Orthogonal Decomposition

Removing the projected component from $\\mathbf{a}$ leaves behind the perpendicular part:

@academic[formula_callout:Orthogonal Decomposition
$$\\mathbf{a}_{\\perp} = \\mathbf{a} - \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a}$$
/linear-algebra/formulas#orthogonal_decomposition]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Together, the two pieces reconstruct the original:

@academic[formula_callout:Orthogonal Projection
$$\\mathbf{a} = \\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} + \\mathbf{a}_{\\perp}$$]@

The parallel component lies along $\\mathbf{b}$; the perpendicular component satisfies $\\mathbf{a}_{\\perp} \\cdot \\mathbf{b} = 0$, a fact that follows by substituting the formula and simplifying. These two constituents are geometrically independent — adjusting one leaves the other unchanged, and each accounts for information the other entirely misses.

This two-part split reappears in more sophisticated forms throughout linear algebra. Projection onto a line generalizes to projection onto multi-dimensional subspaces. The Gram–Schmidt procedure repeats the same splitting step iteratively, peeling off parallel components one vector at a time to produce an orthogonal collection. Least-squares fitting identifies the closest approximation inside a subspace by projecting onto it. Each of these techniques, covered in the [orthogonality](!/linear-algebra/orthogonality) section, traces back to the same principle at work here: partition a vector into what runs along a chosen direction and what runs across it.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Summary: Every Use of the Dot Product`,
    content: `Across the sections above, the dot product appears in seven distinct roles &mdash; measuring length, computing angles, testing orthogonality, classifying the angular relationship by sign, bounding products of vectors, and producing two kinds of projection. The table below collects all of these in a single reference, organized around the question each role answers and the formula that does the work. Every entry below is built from the same operation <b>a</b> · <b>b</b> = Σ a<sub>i</sub>b<sub>i</sub> &mdash; the geometric variety on the page comes from how that one number is interpreted and combined with the norm.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Common Pitfalls`,
    content: `Five mistakes come up again and again in dot product work. Four of them are marked where they happen in the sections above; the fifth is the cancellation law that the properties card lists as failing. Here each is worked through in full, with the wrong and the right working side by side.

**Leaving the products as a vector**

The components are multiplied in pairs, and the list of products is given as the answer, the way vector addition gives a list of sums. The second half of the definition, adding the products, never happens.

Wrong working:
$$(3, 4) \\cdot (1, -2) = (3 \\cdot 1,\\ 4 \\cdot (-2)) = (3, -8)$$

Right working: the products are added.
$$(3, 4) \\cdot (1, -2) = 3(1) + 4(-2) = 3 - 8 = -5$$

Why it happens: vector addition and scalar multiplication both work component by component and return a vector, and the first step of the dot product looks exactly the same.

How to check: the result of a dot product is one number. An answer that still has components is missing the sum.

**Dropping the middle term**

A squared length of a difference or a sum is expanded as if the square could be taken term by term, and the cross term $-2(\\mathbf{a} \\cdot \\mathbf{b})$ disappears.

Wrong working, for $\\mathbf{a} = (4, 1)$ and $\\mathbf{b} = (1, 3)$:
$$\\|\\mathbf{a} - \\mathbf{b}\\|^2 = \\|\\mathbf{a}\\|^2 + \\|\\mathbf{b}\\|^2 = 17 + 10 = 27$$

Right working: expand the dot product with distributivity and merge the two middle terms by commutativity.
$$(\\mathbf{a} - \\mathbf{b}) \\cdot (\\mathbf{a} - \\mathbf{b}) = \\|\\mathbf{a}\\|^2 - 2(\\mathbf{a} \\cdot \\mathbf{b}) + \\|\\mathbf{b}\\|^2 = 17 - 2(7) + 10 = 13$$

Why it happens: the square on $\\|\\mathbf{a} - \\mathbf{b}\\|^2$ looks like the square of a number, and the same slip as $(x - y)^2 = x^2 - y^2$ carries over to vectors.

How to check: compute the difference first. $\\mathbf{a} - \\mathbf{b} = (3, -2)$, and $3^2 + (-2)^2 = 13$. The term-by-term version is right only when $\\mathbf{a} \\cdot \\mathbf{b} = 0$, which is the Pythagorean theorem.

**Cancelling a vector from both sides**

From $\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{a} \\cdot \\mathbf{c}$ with $\\mathbf{a} \\neq \\mathbf{0}$, the vector $\\mathbf{a}$ is divided out to conclude $\\mathbf{b} = \\mathbf{c}$, as with numbers.

Wrong working, with the vectors from the properties card:
$$\\mathbf{a} = (1, 0),\\ \\mathbf{b} = (2, 5),\\ \\mathbf{c} = (2, 9): \\quad \\mathbf{a} \\cdot \\mathbf{b} = 2 = \\mathbf{a} \\cdot \\mathbf{c} \\implies \\mathbf{b} = \\mathbf{c}$$
But $\\mathbf{b} \\neq \\mathbf{c}$.

Right working: move everything to one side and use distributivity.
$$\\mathbf{a} \\cdot \\mathbf{b} - \\mathbf{a} \\cdot \\mathbf{c} = \\mathbf{a} \\cdot (\\mathbf{b} - \\mathbf{c}) = 0$$
The equation only says that $\\mathbf{b} - \\mathbf{c}$ is orthogonal to $\\mathbf{a}$. Here $\\mathbf{b} - \\mathbf{c} = (0, -4)$, and $(1, 0) \\cdot (0, -4) = 0$.

Why it happens: for numbers, $ab = ac$ with $a \\neq 0$ does give $b = c$. The dot product has no inverse to divide by, because it only sees the part of $\\mathbf{b}$ that lies along $\\mathbf{a}$.

How to check: compute $\\mathbf{b} - \\mathbf{c}$ and dot it with $\\mathbf{a}$. A result of $0$ with $\\mathbf{b} - \\mathbf{c} \\neq \\mathbf{0}$ shows that $\\mathbf{b}$ and $\\mathbf{c}$ can differ.

**Dividing by the squared lengths**

In the angle formula, the denominator is filled with $\\mathbf{a} \\cdot \\mathbf{a}$ and $\\mathbf{b} \\cdot \\mathbf{b}$, which are the squared lengths, instead of the lengths themselves.

Wrong working, for $\\mathbf{a} = (4, 1)$ and $\\mathbf{b} = (1, 3)$ with $\\mathbf{a} \\cdot \\mathbf{b} = 7$:
$$\\cos\\theta = \\frac{7}{17 \\cdot 10} = \\frac{7}{170} \\approx 0.041, \\quad \\theta \\approx 87.6^\\circ$$

Right working: $\\|\\mathbf{a}\\| = \\sqrt{17}$ and $\\|\\mathbf{b}\\| = \\sqrt{10}$.
$$\\cos\\theta = \\frac{7}{\\sqrt{17}\\,\\sqrt{10}} = \\frac{7}{\\sqrt{170}} \\approx 0.537, \\quad \\theta \\approx 57.5^\\circ$$

Why it happens: the values $17$ and $10$ come out of the same kind of sum of products as $\\mathbf{a} \\cdot \\mathbf{b}$, and the square root that turns them into lengths is easy to leave out.

How to check: the angle must not change when a vector is stretched. Doubling $\\mathbf{a}$ to $(8, 2)$ gives $\\frac{14}{68 \\cdot 10} \\approx 0.021$ with the squared lengths, a different angle, while the correct formula gives $\\frac{14}{\\sqrt{680}} \\approx 0.537$ again.

**Dividing by the length instead of its square**

The vector projection is written with $\\|\\mathbf{b}\\|$ in the denominator, copied from the scalar projection, instead of $\\|\\mathbf{b}\\|^2$.

Wrong working, for $\\mathbf{a} = (4, 2)$ and $\\mathbf{b} = (1, 1)$ with $\\mathbf{a} \\cdot \\mathbf{b} = 6$:
$$\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}\\,\\mathbf{b} = \\frac{6}{\\sqrt{2}}(1, 1) \\approx (4.24, 4.24)$$

Right working: $\\|\\mathbf{b}\\|^2 = \\mathbf{b} \\cdot \\mathbf{b} = 2$.
$$\\text{proj}_{\\mathbf{b}}\\,\\mathbf{a} = \\frac{6}{2}(1, 1) = (3, 3)$$

Why it happens: the scalar projection divides by $\\|\\mathbf{b}\\|$ once, and the vector projection looks like the same fraction placed in front of $\\mathbf{b}$. But $\\mathbf{b}$ is not a unit vector, so a second division by $\\|\\mathbf{b}\\|$ is needed to turn it into one.

How to check: a projection is never longer than the vector projected. The wrong answer has length $6$, more than $\\|\\mathbf{a}\\| = \\sqrt{20} \\approx 4.47$. Also, $\\mathbf{a}$ minus its projection must be orthogonal to $\\mathbf{b}$: $(4, 2) - (3, 3) = (1, -1)$, and $(1, -1) \\cdot (1, 1) = 0$.`,
    before: ``,
    after: ``,
    link: '',
  },
};

 const introContent = {
     id: `intro`,
  title: `The Product That Reveals Angles`,
  content: `The dot product is unlike any operation encountered so far in this section. It takes two vectors and returns not a vector but a single number — a scalar. That number encodes something geometric: the degree to which the two vectors point in the same direction. Through its algebraic definition, the dot product is a straightforward computation — multiply corresponding components and sum. Through its geometric definition, it connects directly to the angle between the vectors, opening the door to orthogonality, projection, and the Cauchy–Schwarz inequality. Both definitions are equivalent, and both are essential.`,
};

const faqQuestions = {
  obj1: {
    question: "Can you write $\\mathbf{a}\\mathbf{b}$ without the dot?",
    answer: "No. Between two vectors the dot is the operation itself, so juxtaposition means nothing at all. That differs from scalars, where $ab$ and $a \\cdot b$ agree, and from scalar multiplication $c \\cdot \\mathbf{v}$, where the dot is decoration. Only between two vectors does the mark carry the operation.",
    sectionId: "notation"
  },
  obj2: {
    question: "In $\\mathbf{a}^{T}\\mathbf{b}$, is the $T$ an exponent?",
    answer: "No, it is a label meaning transpose, so nothing is raised to a power. The expression is the dot product written in matrix clothing: a $1 \\times n$ row times an $n \\times 1$ column gives a single number. Reversing it to $\\mathbf{a}\\mathbf{b}^{T}$ produces something else entirely, an $n \\times n$ outer product.",
    sectionId: "notation"
  },
  obj3: {
    question: "Why does the Cauchy–Schwarz inequality mix single and double bars?",
    answer: "Because the two sides measure different species. On the left, $\\mathbf{a} \\cdot \\mathbf{b}$ has already collapsed to a scalar, so it takes ordinary absolute value bars. On the right sit two vectors, which need norm bars. Writing $\\|\\mathbf{a} \\cdot \\mathbf{b}\\|$ is an error: there is no vector left to measure.",
    sectionId: "notation"
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Dot Product",
    "description": "Learn the dot product: algebraic and geometric definitions, properties, angle formula, orthogonality, Cauchy-Schwarz inequality, and vector projection with formulas and examples.",
    "url": "https://www.learnmathclass.com/linear-algebra/vectors/dot-product",
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
      "name": "Dot Product"
    },
    "teaches": [
      "Algebraic and geometric dot product formulas",
      "Dot product properties",
      "Finding the angle between vectors",
      "Orthogonality and perpendicular vectors",
      "Cauchy-Schwarz inequality",
      "Scalar and vector projection",
      "Orthogonal decomposition",
      "Consolidated reference of every distinct use of the dot product organized by the question it answers"
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
        "name": "Linear Algebra",
        "item": "https://www.learnmathclass.com/linear-algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Vectors",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Dot Product",
        "item": "https://www.learnmathclass.com/linear-algebra/vectors/dot-product"
      }
    ]
  },
}

  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const vaAngleTriangle = {
    kind: 'angle', a: [4, 1], b: [1, 3],
    svgTitle: 'The triangle behind the geometric formula for the dot product',
    labels: [['a = (4, 1),  \u2016a\u2016 = \u221a17', 2.3, -0.3, 'a'], ['b = (1, 3)', 0.35, 3.35, 'b'], ['\u2016b\u2016 = \u221a10', 0.35, 3.35 - 16 / 44, 'b'], ['a \u2212 b', 2.75, 2.25, 'third']],
    notes: ['law of cosines: \u2016a \u2212 b\u2016\u00b2 = \u2016a\u2016\u00b2 + \u2016b\u2016\u00b2 \u2212 2\u2016a\u2016\u2016b\u2016 cos \u03b8', 'a \u00b7 b = 4\u00b71 + 1\u00b73 = 7,  and  \u221a17 \u00b7 \u221a10 \u00b7 cos 57.5\u00b0 \u2248 7'],
    caption: 'two formulas, one number',
  };
  const vaSignPanels = {
    kind: 'signs', a: [3, 0],
    svgTitle: 'The sign of the dot product follows the angle: acute, right, obtuse',
    cases: [{ b: [2, 2], kind: 'acute' }, { b: [0, 2.5], kind: 'right angle' }, { b: [-2, 2], kind: 'obtuse' }],
    caption: 'the sign of a \u00b7 b tells the angle: acute, right, obtuse',
  };

  // Concept introduction figures (section 1), one running instance: a = (3, 1), b = (1, 2).
  const vaCiPair = {
    kind: 'angle', a: [3, 1], b: [1, 2], third: false, nx: 6, ny: 3,
    svgTitle: 'a = (3, 1) and b = (1, 2) from the origin, 45 degrees apart',
    labels: [['a = (3, 1)', 2.4, 0.55, 'a'], ['b = (1, 2)', 0.55, 2.25, 'b']],
    notes: ['how much do a and b point the same way?'],
    caption: 'Two vectors and the angle between them',
  };
  const vaCiTurn = {
    kind: 'signs', a: [3, 1],
    svgTitle: 'Against a = (3, 1): b at 45 degrees, at a right angle, and pointing away',
    cases: [{ b: [1, 2], kind: 'acute' }, { b: [-0.5, 1.5], kind: 'right angle' }, { b: [-2, 1], kind: 'obtuse' }],
    caption: 'the same rule, a · b, as b turns away from a',
  };

  const conceptIntroFigures = {
    pair: renderVectorArrowsV4(vaCiPair),
    turn: renderVectorArrowsV4(vaCiTurn),
    productsTable: ciProductsTable,
    examplesTable: ciExamplesTable,
    promiseTable: ciPromiseTable,
  };

  const demoUnits = {
    dot: demoUnitFrame({
      svg: innerProductDiagrams.done,
      caption: 'Products formed, then summed to one number',
      text: 'Each pair of matching components was multiplied and the products were then collapsed into a single running total. The output is a scalar, not a vector, and that one fact is what separates this product from every other operation on this page. Follow the accumulation term by term on the',
      href: '/linear-algebra/visual-tools/vectors-inner-product',
      linkText: 'inner product visualizer',
    }),
    // Section 9 is about projecting one vector onto another, which is
    // the projection tool's subject rather than the dot product tool's.
    projection: demoUnitFrame({
      svg: projectionDiagrams.scale,
      caption: 'The coefficient applied to the direction vector',
      text: 'The scalar computed from the two dot products is being multiplied back onto the direction vector, which is what turns a bare ratio into an actual vector lying along it. The projection is always a multiple of the vector projected onto, never of the one being projected &#8212; the picture makes the asymmetry hard to miss. Watch the remainder appear as well on the',
      href: '/linear-algebra/visual-tools/vector-projection',
      linkText: 'vector projection visualizer',
    }),
    angleTriangle: demoUnitFrame({
      svg: renderVectorArrowsV4(vaAngleTriangle),
      caption: 'Where the cosine comes from',
      text: 'Draw a and b from the same point and join their tips: the third side is a &#8722; b, and the angle between a and b is &#952;. The law of cosines on that triangle, compared with the expansion of (a &#8722; b) &#183; (a &#8722; b), is exactly the proof in this section. With a = (4, 1) and b = (1, 3), the components give a &#183; b = 7, and the lengths and angle give &#8730;17 &#183; &#8730;10 &#183; cos 57.5&#176; &#8776; 7 &#8212; the same number.',
    }),
    signPanels: demoUnitFrame({
      svg: renderVectorArrowsV4(vaSignPanels),
      caption: 'Positive, zero, negative',
      text: 'Keep a = (3, 0) fixed and turn b. At 45&#176; the dot product is 6 &#8212; positive, the vectors lean the same way. At 90&#176; it is exactly 0 &#8212; perpendicular, neither has any component along the other. At 135&#176; it is &#8722;6 &#8212; negative, they lean apart. The lengths stay positive throughout, so the sign of a &#183; b is the sign of cos &#952;.',
    }),
  };



  return {
  props: {
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj2Table,
    dotProductLaws,
    obj6Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Dot Product: Formula, Angle & Projection | Learn Math Class",
      description: "Learn the dot product: algebraic and geometric definitions, properties, angle formula, orthogonality, Cauchy-Schwarz inequality, and vector projection with formulas and examples.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vectors/dot-product",
      name: "Dot Product"
    },
  }
}
   }
export default function DotProductPage({seoData, sectionsContent, introContent, obj2Table, dotProductLaws, obj6Table, obj9Table, summaryTable, faqQuestions, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciSvg = (key) => <div dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />
  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template B (definition first).
  const conceptIntro = {
    beats: [
      {
        id: 'difficulty',
        lead: `Nothing so far measures how two vectors relate to each other.`,
        content: `Length measures one vector at a time. Adding and scaling make new vectors. But no operation yet answers the obvious question about two arrows: do they point the same way, at right angles, or against each other — and by how much? A single number that answered it would be worth a great deal.`,
        visual: ciSvg('pair'),
        caption: `Two arrows from the origin, $(3, 1)$ and $(1, 2)$, with the angle between them marked.`,
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `The [dot product](!/linear-algebra/definitions#dot_product) of two vectors $\\mathbf{a} = (a_1, \\ldots, a_n)$ and $\\mathbf{b} = (b_1, \\ldots, b_n)$ in $\\mathbb{R}^n$ is the scalar obtained by multiplying corresponding components and summing the results:`,
        formula: `@academic[formula_callout:Dot Product (Algebraic Form)
$$\\mathbf{a} \\cdot \\mathbf{b} = a_1b_1 + a_2b_2 + \\cdots + a_nb_n = \\sum_{i=1}^{n} a_ib_i$$
/linear-algebra/formulas#dot_product_algebraic]@`,
        visual: ciTable('productsTable'),
        caption: `For $\\mathbf{a} = (3, 1)$ and $\\mathbf{b} = (1, 2)$: multiply down each row, then add the products — $3 + 2 = 5$.`,
        footer: `@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@`,
      },
      {
        id: 'kind',
        lead: `A dot product is a number, not a vector.`,
        content: [
          `The dot product differs fundamentally from [vector addition](!/linear-algebra/vectors/basic-operations) and scalar multiplication. Those operations take vectors and produce vectors. The dot product takes two vectors and collapses them into a single number, discarding the directional structure in favor of a measurement of alignment.`,
          `@academic[pitfall,aside:true,width:35%:Leaving the products as a vector
Multiplying the components of $(3, 4)$ and $(1, -2)$ and writing the answer as $(3, -8)$ stops halfway. The products are added: $3 + (-8) = -5$, a single number.
[Read more](!#pitfalls)]@`,
          `The notation uses a centered dot between the two vectors. Other names for the same operation are the inner product and the scalar product — the latter emphasizing that the output is a scalar, not a vector.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `On numbers, the rule is the same in every dimension.`,
        content: [
          `This definition works in any dimension. In $\\mathbb{R}^2$, the dot product of $(3, 4)$ and $(1, -2)$ is $3(1) + 4(-2) = -5$. In $\\mathbb{R}^5$, the same rule applies with five terms instead of two. The computation is mechanical, but the meaning it carries — revealed by the geometric definition — is what makes the dot product central to the rest of linear algebra.`,
          ciTable('examplesTable'),
          `Two pairs give positive numbers, one gives a negative number, and a vector dotted with itself gives $10$. What those signs and sizes mean is the next thing to check.`,
          <div key={'unit-dot'} dangerouslySetInnerHTML={{ __html: demoUnits.dot }} />,
          `Everything later on this page — angles, orthogonality, projections — is read off that single number.`,
        ],
      },
      {
        id: 'verification',
        lead: `The definition keeps the promises the opening asked for.`,
        content: [
          `A number that measures how vectors relate should give back length, track the angle, and vanish at right angles. Test all three on the running example.`,
          ciTable('promiseTable'),
        ],
        visual: ciSvg('turn'),
        caption: `The same rule against $\\mathbf{a} = (3, 1)$ as $\\mathbf{b}$ turns: $5$ at $45°$, $0$ at a right angle (the square), and negative once $\\mathbf{b}$ points away.`,
      },
      {
        id: 'caveat',
        lead: `The definition says how to compute; why it measures angle needs a second, geometric description.`,
        content: [
          `Nothing in "multiply and add" mentions angles, yet the checks above came out right. The reason is the geometric definition in the next section, $\\mathbf{a} \\cdot \\mathbf{b} = \\|\\mathbf{a}\\|\\|\\mathbf{b}\\| \\cos\\theta$, which agrees with this one in every case. The algebraic rule is for computing; the geometric one is for meaning.`,
          `To compute the dot product of two specific vectors, use the [vector calculator](!/linear-algebra/calculators/vectors).`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page gives the notation, the geometric definition and why the two agree, the algebraic properties, the angle between vectors, orthogonality, the Cauchy–Schwarz inequality, and projections.`,
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
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'unit-angleTriangle'} dangerouslySetInnerHTML={{ __html: demoUnits.angleTriangle }} />,
          `The component formula is easy to compute; the geometric one says what the number means.`,
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
          <DiagramFrame
            key={'obj3-diagram'}
            id="dot-product-laws"
            title="Properties of the dot product"
            source="/linear-algebra/vectors/dot-product"
          >
            <PropertyLawCard data={dotProductLaws} theme="navy" variant="docket" />
          </DiagramFrame>,
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
          <div key={'unit-signPanels'} dangerouslySetInnerHTML={{ __html: demoUnits.signPanels }} />,
          `Reading only the sign is often enough: no square roots and no inverse cosine are needed to tell acute from obtuse.`,
          <div
            key={'obj6-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj6Table }}
          />,
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
                  <div key={'unit-projection'} dangerouslySetInnerHTML={{ __html: demoUnits.projection }} />,
          `Splitting a vector into a part along another and a part perpendicular to it is the move that least squares and Gram–Schmidt both rest on.`,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Dot Product FAQ`,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Dot Product</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}