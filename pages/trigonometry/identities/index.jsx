// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import '../../pages.css'
// import ExpandableTable from '@/app/components/generic-table/ExpandableTable'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents2'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import { tableHeaders } from '@/app/styles/theme'
// import basicIdentitiesDiagrams from '@/app/components/trigonometry/identities/basic-identities/basicIdentitiesDiagrams'
// import doubleAngleDiagrams from '@/app/components/trigonometry/identities/double-angle/doubleAngleDiagrams'
// import halfAngleDiagrams from '@/app/components/trigonometry/identities/half-angle/halfAngleDiagrams'
// import trigFunctionsGraphDiagrams from '@/app/components/trigonometry/trigFunctionsGraphDiagrams'
// import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'

// export async function getStaticProps(){

//   // Not rendered on this page — surfaced on the /trigonometry hub via
//   // buildSectionData extraction (first `name:` / `hubDescription:` match wins).
//   const hubMeta = {
//     name: `Trigonometric Identities`,
//     hubDescription: `Trigonometric identities form a rich and interconnected system rooted in geometric definitions and algebraic transformations. At the foundation lie the [reciprocal](!/trigonometry/identities#reciprocal) and quotient identities, such as $\tan(\theta) = \frac{\sin(\theta)}{\cos(\theta)}$, that emerge directly from the unit circle and right-triangle definitions of the trigonometric functions.

// Building upon this base are the symmetry-based identities — such as the [even-odd](!/trigonometry/identities#even-odd) and [co-function](!/trigonometry/identities#co-function) properties — which reflect the inherent symmetries of the unit circle. For instance, $\cos(-\theta) = \cos(\theta)$ showcases the evenness of cosine, while $\sin\left(\frac{\pi}{2} - \theta\right) = \cos(\theta)$ exemplifies co-function symmetry.

// The [Pythagorean](!/trigonometry/identities#pythagorean) identities, such as $\sin^2(\theta) + \cos^2(\theta) = 1$, are central to the structure. Angle [sum](!/trigonometry/identities#sum) and [difference](!/trigonometry/identities#difference) formulas — like $\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)$ — enable the construction of [double-angle](!/trigonometry/identities#double), [half-angle](!/trigonometry/identities#half), and [triple-angle](!/trigonometry/identities#triple) identities, such as $\cos(2\theta) = 2\cos^2(\theta) - 1$.

// [Product-to-sum](!/trigonometry/identities#product-sum) identities reorganize these angle relationships for simplification, while [sum-to-product](!/trigonometry/identities#sum-product) identities transform sums and differences into products, enabling alternative approaches to complex expressions.

// Inverse trigonometric identities like $\sin^{-1}(x) + \cos^{-1}(x) = \frac{\pi}{2}$, along with hyperbolic analogs and the Euler identity $e^{i\theta} = \cos(\theta) + i\sin(\theta)$, extend trigonometry into broader mathematical contexts.`,
//   }

//   const keyWords=[
//     'trigonometric identities','trig identities','trigonometry','verifying trig identities','simplifying trig identities',
//     'proving trigonometric identities'
//   ]

//   const linkStyle = 'color: inherit; text-decoration: underline;'

//   // ---------- SUMMARY CAPSTONE TABLE ----------
//   // Organizes all 16 identity families by category, core relationship, and derivation source.
//   // Family names link to the corresponding in-page section anchors.
//   const summaryTable = `
// <table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
//   <thead>
//     <tr>
//       <th style="${tableHeaders.summary}">Family</th>
//       <th style="${tableHeaders.summary}">Category</th>
//       <th style="${tableHeaders.summary}">Core relationship</th>
//       <th style="${tableHeaders.summary}">Derives from</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#definition" style="${linkStyle}">Definition-based</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Functions defined in terms of triangle sides</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Right-triangle geometry</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#reciprocal" style="${linkStyle}">Reciprocal</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Each function paired with its multiplicative inverse</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Definitions</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#pythagorean" style="${linkStyle}">Pythagorean</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin²θ + cos²θ = 1 and dividing variants</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Unit circle (x² + y² = 1)</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#triangle" style="${linkStyle}">Triangle Geometry</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sides and angles related in any triangle</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Generalization beyond right triangles</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#even-odd" style="${linkStyle}">Even-Odd</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(−θ) compared with f(θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Unit-circle reflection across the x-axis</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#co-function" style="${linkStyle}">Co-Function</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(π/2 − θ) equals the co-function of θ</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Complementary angles in a right triangle</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#periodicity" style="${linkStyle}">Periodicity</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(θ + period) = f(θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cyclic nature of circular motion</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#shift" style="${linkStyle}">Shift</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(θ + π) or f(θ + π/2) re-expressed</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Unit-circle rotation by π or π/2</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#sum" style="${linkStyle}">Angle Sum</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(a + b) in terms of f(a), f(b)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Geometric / rotation proof</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#difference" style="${linkStyle}">Angle Difference</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(a − b) in terms of f(a), f(b)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum identity with even-odd substitution (b → −b)</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#double" style="${linkStyle}">Double Angle</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(2θ) in terms of f(θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum identity with a = b = θ</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#triple" style="${linkStyle}">Triple Angle</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(3θ) in terms of f(θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum identity applied to 2θ + θ</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#half" style="${linkStyle}">Half Angle</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(θ/2) in terms of f(θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Double-angle identity rearranged and rooted</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#power-reducing" style="${linkStyle}">Power-Reducing</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Algebraic transform</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f²(θ) in terms of f(2θ)</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Double angle solved for sin²θ / cos²θ</td>
//     </tr>
//     <tr style="background: #f8f9fa;">
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#product-sum" style="${linkStyle}">Product-to-Sum</a></td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Algebraic transform</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(a)·f(b) rewritten as a sum or difference</td>
//       <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum and difference identities combined</td>
//     </tr>
//     <tr>
//       <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="#sum-product" style="${linkStyle}">Sum-to-Product</a></td>
//       <td style="padding: 12px 15px; color: #34495e;">Algebraic transform</td>
//       <td style="padding: 12px 15px; color: #34495e;">f(a) ± f(b) rewritten as a product</td>
//       <td style="padding: 12px 15px; color: #34495e;">Product-to-sum inverted with variable substitution</td>
//     </tr>
//   </tbody>
// </table>
// `

//   const sectionsContent={
//     obj0: {
//     title: `Key Terms`,
//     content: `
// ## Functions
 
// - [Sine](!/trigonometry/definitions#sine) — $y$-coordinate on the unit circle
// - [Cosine](!/trigonometry/definitions#cosine) — $x$-coordinate on the unit circle
// - [Tangent](!/trigonometry/definitions#tangent) — ratio $\\frac{\\sin\\theta}{\\cos\\theta}$
// - [Cosecant](!/trigonometry/definitions#cosecant) — reciprocal of sine
// - [Secant](!/trigonometry/definitions#secant) — reciprocal of cosine
// - [Cotangent](!/trigonometry/definitions#cotangent) — reciprocal of tangent
 
// ## Angle Relationships
 
// - [Complementary Angles](!/trigonometry/definitions#complementary_angles) — two angles summing to $90°$, the basis of cofunction identities
// - [Supplementary Angles](!/trigonometry/definitions#supplementary_angles) — two angles summing to $180°$

// ## Formulas Used

// ## Supplement & Shift Identities
 
// - [Sine Anti-Supplement Shift](!/trigonometry/formulas#sine_anti-supplement_shift) — $\\sin(\\pi + \\theta) = -\\sin\\theta$
// - [Cosine Anti-Supplement Shift](!/trigonometry/formulas#cosine_anti-supplement_shift) — $\\cos(\\pi + \\theta) = -\\cos\\theta$
// - [Quadrature Shift - Sine](!/trigonometry/formulas#quadrature_shift_-_sine) — $\\sin\\!\\left(\\frac{\\pi}{2} + \\theta\\right) = \\cos\\theta$
 
// ## Sum & Difference Formulas
 
// - [Sine Sum and Difference](!/trigonometry/formulas#sine_sum_and_difference) — $\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$
// - [Cosine Sum and Difference](!/trigonometry/formulas#cosine_sum_and_difference) — $\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$
// - [Tangent Sum and Difference](!/trigonometry/formulas#tangent_sum_and_difference) — $\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}$
 
// ## Double Angle Formulas
 
// - [Sine Double Angle](!/trigonometry/formulas#sine_double_angle) — $\\sin 2A = 2\\sin A\\cos A$
// - [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle) — $\\cos 2A = \\cos^2 A - \\sin^2 A$
// - [Tangent Double Angle](!/trigonometry/formulas#tangent_double_angle) — $\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}$
 
// ## Half-Angle Formulas
 
// - [Sine Half Angle](!/trigonometry/formulas#sine_half_angle) — $\\sin\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{2}}$
// - [Cosine Half Angle](!/trigonometry/formulas#cosine_half_angle) — $\\cos\\frac{A}{2} = \\pm\\sqrt{\\frac{1 + \\cos A}{2}}$
// - [Tangent Half Angle](!/trigonometry/formulas#tangent_half_angle) — $\\tan\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{1 + \\cos A}}$
 
// ## Triple Angle Formulas
 
// - [Sine Triple Angle](!/trigonometry/formulas#sine_triple_angle) — $\\sin 3A = 3\\sin A - 4\\sin^3 A$
// - [Cosine Triple Angle](!/trigonometry/formulas#cosine_triple_angle) — $\\cos 3A = 4\\cos^3 A - 3\\cos A$
// - [Tangent Triple Angle](!/trigonometry/formulas#tangent_triple_angle) — $\\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}$
 
// ## Power-Reducing Formulas
 
// - [Sine Squared Reduction](!/trigonometry/formulas#sine_squared_reduction) — $\\sin^2 A = \\frac{1 - \\cos 2A}{2}$
// - [Cosine Squared Reduction](!/trigonometry/formulas#cosine_squared_reduction) — $\\cos^2 A = \\frac{1 + \\cos 2A}{2}$
// - [Tangent Squared Reduction](!/trigonometry/formulas#tangent_squared_reduction) — $\\tan^2 A = \\frac{1 - \\cos 2A}{1 + \\cos 2A}$
 
// ## Product-to-Sum Formulas
 
// - [Product to Sum - Cosine Cosine](!/trigonometry/formulas#product_to_sum_-_cosine_cosine) — $\\cos A\\cos B = \\frac{1}{2}[\\cos(A - B) + \\cos(A + B)]$
// - [Product to Sum - Sine Sine](!/trigonometry/formulas#product_to_sum_-_sine_sine) — $\\sin A\\sin B = \\frac{1}{2}[\\cos(A - B) - \\cos(A + B)]$
// - [Product to Sum - Sine Cosine](!/trigonometry/formulas#product_to_sum_-_sine_cosine) — $\\sin A\\cos B = \\frac{1}{2}[\\sin(A + B) + \\sin(A - B)]$
// - [Product to Sum - Cosine Sine](!/trigonometry/formulas#product_to_sum_-_cosine_sine) — $\\cos A\\sin B = \\frac{1}{2}[\\sin(A + B) - \\sin(A - B)]$
 
// ## Sum-to-Product Formulas
 
// - [Sum to Product - Sine Sum](!/trigonometry/formulas#sum_to_product_-_sine_sum) — $\\sin A + \\sin B = 2\\sin\\frac{A + B}{2}\\cos\\frac{A - B}{2}$
// - [Sum to Product - Sine Difference](!/trigonometry/formulas#sum_to_product_-_sine_difference) — $\\sin A - \\sin B = 2\\cos\\frac{A + B}{2}\\sin\\frac{A - B}{2}$
// - [Sum to Product - Cosine Sum](!/trigonometry/formulas#sum_to_product_-_cosine_sum) — $\\cos A + \\cos B = 2\\cos\\frac{A + B}{2}\\cos\\frac{A - B}{2}$
// - [Sum to Product - Cosine Difference](!/trigonometry/formulas#sum_to_product_-_cosine_difference) — $\\cos A - \\cos B = -2\\sin\\frac{A + B}{2}\\sin\\frac{A - B}{2}$

// `,
//     before: ``,
//     after: `
// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Trigonometry Definitions](!/trigonometry/definitions) →@`,
//     link: '',
//   },
//     definition:{
//       title:'Definition-based Identities',
//       before: `Definition-based identities derive from the fundamental relationships between trigonometric functions based on their right-triangle definitions.
//       Those may be well illustrated by [unit circle](!/visual-tools/unit-circle).
      
//       \n`,     

//       after:  `\nDefinition-based identities are fundamental relationships derived directly from how trigonometric functions are defined in a right triangle. They establish the basic connections between these functions and serve as building blocks for more complex identities.
//       To get better feeling and understanding of basic definition-based identities use our visual intteractive [unit circle](!/visual-tools/unit-circle) tool.
//       `
 
//     },
//     reciprocal:{
//       title:'Reciprocal Identities',
//       before:  `In mathematics, the **reciprocal** of a number or expression is 1 divided by that number.
//       So, for any non-zero value $𝑥$, the reciprocal is $\\frac{1}{x}$ .
//       A reciprocal identity expresses the relationship between a trigonometric function and its multiplicative inverse — basically, how each function "flips".​
//       Each basic trigonometric function (sine, cosine, tangent) has a reciprocal counterpart.
              
//               `,
//       after: `
//       Reciprocal identities help simplify rational trigonometric expressions, especially in algebra-heavy problems or when combining functions.
//       Knowing how to flip between functions is critical in isolating variables and solving identities.
//       Reciprocal identities let you flip between familiar and less familiar functions, extend your solving toolbox, and reduce redundancy in learning.
//       `
//     },
//     pythagorean:{
//       title:'Pythagorean Identities',
//       before:`Pythagorean Identities are based on the Pythagorean theorem applied to the [unit circle](!/visual-tools/unit-circle). 
//       They express fundamental relationships that always equal 1 or have the form "1 + something²". The core identity sin²(θ) + cos²(θ) = 1 comes directly from the unit circle where any point (cos θ, sin θ) satisfies x² + y² = 1. The other two identities are derived by dividing this fundamental relationship by cos² or sin². The squared-function shorthand — sin²(θ) means (sin(θ))² — is the same superscript convention whose −1 exception is untangled in the [inverse-function notation note](!/trigonometry/inverse-functions#6).

//       `,
//       after:`
      
//       Being familiar with these identities is a crucial skill because they allow converting between different trigonometric functions and are essential for simplifying complex trigonometric expressions.`,
//     },
//      triangle:{
//       title:'Triangle Geometry Identities',
//       before:`Triangle Geometry Identities are fundamental relationships that apply to any triangle, not just right triangles. They're special because they connect angles and side lengths in general triangles, extending beyond basic trigonometry. The Law of Sines relates ratios of sides to opposite angles, while the Law of Cosines generalizes the Pythagorean theorem for non-right triangles.
      
//       `,
//       after:`

//       These identities are crucial for solving real-world problems involving triangulation, navigation, and engineering where you need to find unknown sides or angles in any triangle configuration.
//       `,
//     },


//      even_odd:{
//       title:"Even-Odd Identities",
//       before:`Even-Odd Identities describe the symmetry properties of trigonometric functions when the angle is negated. They're special because they classify functions as either even (symmetric about the y-axis) or odd (symmetric about the origin). Cosine and secant are even functions, meaning f(-θ) = f(θ), while sine, tangent, cosecant, and cotangent are odd functions, meaning f(-θ) = -f(θ). 
      
//       `,
//       after:`
      
//       These identities are important for simplifying expressions with negative angles, understanding function behavior, and solving equations where angle direction matters.
//       `,
//     },

    
//     co_function:{
//       title:`Co-Function Identities`,
//       before:`Co-Function Identities express the relationship between trigonometric functions and their "co-functions" (complementary functions). They're special because they show how trig functions of complementary angles (angles that add to 90°) are related. For example, sine of an angle equals cosine of its complement. These identities exist because in a right triangle, the two acute angles are complementary, so one angle's opposite side becomes the other angle's adjacent side. An angle and its complement can be watched as a live pair — values and all — in the [angle explorer](!/trigonometry/visual-tools/angle-explorer).

//       `,
//       after:`
      
//       Co-Function identities are important for converting between different trig functions and simplifying expressions involving complementary angles.
//       `,
//     },

    

//     periodicity:{
//       title:'Periodicity Identities',
//       before:`Periodicity Identities describe how trigonometric functions repeat their values at regular intervals. They're special because they capture the cyclical nature of trigonometric functions - sine and cosine repeat every 2π (full circle), while tangent and cotangent repeat every π (half circle). These identities exist because trigonometric functions are based on circular motion and angles, which naturally cycle.
      
//       `,
//       after:`
      
//        Understanding periodicity identities is crucial for solving equations with multiple solutions, understanding wave behavior, and working with any angle by reducing it to a standard interval.
//       `,
//     },
    
//      shift:{
//       title:`Shift Identities`,
//       before:`Shift Identities show how trigonometric functions behave when the angle is shifted by specific amounts like π or π/2. They're special because they reveal the phase relationships between different trig functions - for example, how sine becomes cosine when shifted by π/2. These identities exist because of the geometric relationships on the unit circle where shifting an angle corresponds to rotating the point.
      
//       `,
//       after:`
//       Shift identities are important for understanding wave phase shifts, converting between trig functions, and analyzing periodic phenomena where timing or phase differences matter.
//       `,
//     },

//      sum:{
//       title:'Angle Sum Identities',
//       before:`Angle Sum Identities express trigonometric functions of the sum of two angles in terms of the individual angles' functions. They're special because they break down complex angle combinations into manageable parts using products and sums of simpler functions. These identities exist due to the geometric properties of rotating and combining angles on the unit circle. 
      
//       `,
//       after:`

//       These identities are fundamental for calculus, solving trigonometric equations, proving other identities, and applications in physics where multiple rotations or oscillations combine, such as in wave interference and vector analysis.
//       `,
//       link:``,
//     },

//      difference:{
//       title:'Angle Difference Identities',
//       before:`Angle Difference Identities express trigonometric functions of the difference between two angles in terms of the individual angles' functions. They're special because they complement the sum identities, providing the complete toolkit for breaking down angle combinations. These identities exist from the same geometric principles as sum identities but with opposite rotation directions on the unit circle. 
      
//       `,
//       after:`
//       Angle Difference identities are essential for solving trigonometric equations, deriving other identities, and applications involving relative motion, phase differences, or when one oscillation opposes another in physics and engineering problems.
//       `,
//       link:``,
//     },

//     double:{
//       title: 'Double Angle Identities',
//       before:`Double Angle Identities are specialized cases of angle sum formulas where both angles are identical (θ + θ = 2θ). What makes them unique is their simplified, elegant forms that directly relate single-angle functions to double-angle functions. They emerge naturally from setting a = b in the sum identities, creating powerful shortcuts. 
      
//       `,
//       after:`
      
//       These identities are vital for integration in calculus, solving equations with multiple angle relationships, and analyzing phenomena with frequency doubling, such as harmonics in music, optical frequency conversion, and engineering systems with gear ratios.
//       `,
//       link:``,
//     },

    
//     half:{
//       title:`Half Angle Identities`,
//       before:`Half Angle Identities work in reverse of double angle formulas, expressing functions of θ/2 in terms of functions of θ. Their uniqueness lies in providing square root forms and rational expressions that eliminate half-angles from equations. They arise by algebraically rearranging double angle identities and often involve ± signs requiring careful quadrant analysis.
      
//       `,
//       after:`

//       These identities are indispensable for integration techniques, solving equations with fractional angles, and applications involving bisection problems, such as cutting angles in half for construction, optics with half-wave plates, and signal processing with subharmonics.
//       `,
//       link:``,
//     },

//     triple:{
//       title:`Triple Angle Identities`,
//       before:`Triple Angle Identities extend angle multiplication to express functions of 3θ in terms of functions of θ. They're distinctive for producing cubic polynomial relationships, creating elegant algebraic forms like sin(3θ) = 3sin(θ) - 4sin³(θ). These identities emerge from repeatedly applying angle sum formulas or using complex number methods.
      
//       `,
//       after:`
      
//       Those identities are valuable in advanced calculus, solving higher-order trigonometric equations, and specialized applications like three-phase electrical systems, crystallography with threefold symmetry, and acoustics where third harmonics play crucial roles in sound quality and instrument timbre.
//       `,
//       link:``,
//     },

    
//     power_reducing:{
//       title:'Power-Reducing Identities',
//       before:`Power-Reducing Identities convert higher powers of trigonometric functions into expressions with lower powers and multiple angles. They're special because they eliminate troublesome squared and higher-power terms by expressing them using first-power functions of double angles. 
      
//       `,
//       after:`
      
//       These identities stem from rearranging double angle formulas to isolate the squared terms. They're essential in calculus integration where powers create complexity, Fourier analysis for breaking down periodic functions, and signal processing where reducing power terms simplifies frequency domain analysis and filtering operations.
//       `,
//     },
    

//      product_sum:{
//       title:'Product-to-Sum Identities',
//       before:`Product-to-Sum Identities transform products of trigonometric functions into sums or differences of simpler trigonometric expressions. They're special because they convert multiplication (which is complex) into addition (which is simpler), essentially "unpacking" products into linear combinations. These identities arise from algebraically manipulating angle sum and difference formulas.
      
//       `,
//       after:`
      
//       These identities are crucial in signal processing for analyzing beat frequencies, Fourier analysis for decomposing complex waveforms, acoustics for understanding interference patterns, and integration techniques where products are harder to handle than sums.
//       `,
//     },


//      sum_product:{
//       title:`Sum-to-Product Identities`,
//       before:`Sum-to-Product Identities convert sums and differences of trigonometric functions into products of simpler expressions. They're special because they perform the reverse operation of product-to-sum identities, transforming linear combinations into multiplicative forms. These identities emerge from reversing the algebraic manipulation of angle sum formulas. They're valuable for factoring trigonometric expressions, solving equations where products reveal common factors, analyzing wave interference where constructive and destructive patterns create amplitude modulation, and in acoustics for understanding how combined frequencies create beats and harmonics.
      
//       `,
//       after:`
      
      
//       `,
//     },

//     // NEW capstone section
//     summary:{
//       title:`Summary of Trigonometric Identity Families`,
//       before:`The sixteen identity families above fall into four structural categories — foundational, symmetry, angle-arithmetic, and algebraic-transform — and most are not independent but descend from a small core of foundational relationships. The table below organizes every family by category, names the core relationship it expresses, and traces its derivation source, making explicit which identities anchor the system and which are consequences of others.

//       `,
//       after:``,
//       link:'',
//     },

//   }
  
//     const trigIdentitiesData = {
//           "Definition-based Identities": [
//           { 
//             id: 1, 
//             law: "Definition of Sine", 
//             formula: "sin(θ) = opposite / hypotenuse", 
//             explanation: "Sine defined from right triangle" 
//           },
//           { 
//             id: 2, 
//             law: "Definition of Cosine", 
//             formula: "cos(θ) = adjacent / hypotenuse", 
//             explanation: "Cosine defined from right triangle" 
//           },
//           { 
//             id: 3, 
//             law: "Definition of Tangent", 
//             formula: "tan(θ) = opposite / adjacent", 
//             explanation: "Tangent defined from right triangle" 
//           },
//           { 
//             id: 4, 
//             law: "Definition of Cotangent", 
//             formula: "cot(θ) = adjacent / opposite", 
//             explanation: "Reciprocal of tangent" 
//           },
//           { 
//             id: 5, 
//             law: "Definition of Secant", 
//             formula: "sec(θ) = hypotenuse / adjacent", 
//             explanation: "Reciprocal of cosine" 
//           },
//           { 
//             id: 6, 
//             law: "Definition of Cosecant", 
//             formula: "csc(θ) = hypotenuse / opposite", 
//             explanation: "Reciprocal of sine" 
//           },
//           { 
//             id: 7, 
//             law: "Tangent-Sine-Cosine Relation", 
//             formula: "tan(θ) = sin(θ) / cos(θ)", 
//             explanation: "Derived from basic definitions" 
//           },
//           { 
//             id: 8, 
//             law: "Cotangent-Sine-Cosine Relation", 
//             formula: "cot(θ) = cos(θ) / sin(θ)", 
//             explanation: "Derived from basic definitions" 
//           }
//           ],

//           "Reciprocal Identities": [
//             { id: 9, law: "Reciprocal of Sine", formula: "sin(θ) = 1 / csc(θ)", explanation: "Sine is reciprocal of cosecant" },
//             { id: 10, law: "Reciprocal of Cosine", formula: "cos(θ) = 1 / sec(θ)", explanation: "Cosine is reciprocal of secant" },
//             { id: 11, law: "Reciprocal of Tangent", formula: "tan(θ) = 1 / cot(θ)", explanation: "Tangent is reciprocal of cotangent" },
//             { id: 12, law: "Reciprocal of Cosecant", formula: "csc(θ) = 1 / sin(θ)", explanation: "Cosecant is reciprocal of sine" },
//             { id: 13, law: "Reciprocal of Secant", formula: "sec(θ) = 1 / cos(θ)", explanation: "Secant is reciprocal of cosine" },
//             { id: 14, law: "Reciprocal of Cotangent", formula: "cot(θ) = 1 / tan(θ)", explanation: "Cotangent is reciprocal of tangent" }
//           ],
//         "Pythagorean Identities": [
//           { id: 15, law: "Sine and Cosine", formula: "sin²(θ) + cos²(θ) = 1", explanation: "Fundamental identity derived directly from the [unit circle](!/visual-tools/unit-circle) .", topic: "Pythagorean" },
//           { id: 16, law: "Tangent and Secant", formula: "1 + tan²(θ) = sec²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by cos²", topic: "Pythagorean" },
//           { id: 17, law: "Cotangent and Cosecant", formula: "1 + cot²(θ) = csc²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by sin²", topic: "Pythagorean" }
//         ],
      
//         "Triangle Geometry Identities": [
//     {
//       id: 18,
//       law: "Law of Sines",
//       formula: "sin(A)/a = sin(B)/b = sin(C)/c",
//       explanation: "Relates the ratios of angles and opposite sides in any triangle"
//     },
//     {
//       id: 19,
//       law: "Law of Cosines (Standard Form)",
//       formula: "c² = a² + b² − 2ab·cos(C)",
//       explanation: "Generalization of the Pythagorean Theorem for any triangle"
//     },
//     {
//       id: 20,
//       law: "Law of Cosines (Alternative Forms)",
//       formula: "a² = b² + c² − 2bc·cos(A);\n b² = a² + c² − 2ac·cos(B)",
//       explanation: "Same law applied for other sides of the triangle"
//     }
//   ],

//   "Even-Odd Identities": [
//     {
//       id: 21,
//       law: "Odd Sine",
//       formula: "sin(−θ) = −sin(θ)",
//       explanation: "Sine is an odd function; reflects through origin"
//     },
//     {
//       id: 22,
//       law: "Even Cosine",
//       formula: "cos(−θ) = cos(θ)",
//       explanation: "Cosine is an even function; symmetric about y-axis"
//     },
//     {
//       id: 23,
//       law: "Odd Tangent",
//       formula: "tan(−θ) = −tan(θ)",
//       explanation: "Tangent is odd; sine is odd and cosine is even"
//     },
//     {
//       id: 24,
//       law: "Odd Cosecant",
//       formula: "csc(−θ) = −csc(θ)",
//       explanation: "Cosecant is reciprocal of sine, so also odd"
//     },
//     {
//       id: 25,
//       law: "Even Secant",
//       formula: "sec(−θ) = sec(θ)",
//       explanation: "Secant is reciprocal of cosine, so also even"
//     },
//     {
//       id: 26,
//       law: "Odd Cotangent",
//       formula: "cot(−θ) = −cot(θ)",
//       explanation: "Cotangent is reciprocal of tangent, so also odd"
//     }
//   ],
//         "Co-Function Identities": [
//     {
//       id: 27,
//       law: "Sine of Complement",
//       formula: "sin(π/2 − θ) = cos(θ)",
//       explanation: "Sine of an angle's complement equals cosine"
//     },
//     {
//       id: 28,
//       law: "Cosine of Complement",
//       formula: "cos(π/2 − θ) = sin(θ)",
//       explanation: "Cosine of an angle's complement equals sine"
//     },
//     {
//       id: 29,
//       law: "Tangent of Complement",
//       formula: "tan(π/2 − θ) = cot(θ)",
//       explanation: "Tangent of complement equals cotangent"
//     },
//     {
//       id: 30,
//       law: "Cotangent of Complement",
//       formula: "cot(π/2 − θ) = tan(θ)",
//       explanation: "Cotangent of complement equals tangent"
//     },
//     {
//       id: 31,
//       law: "Secant of Complement",
//       formula: "sec(π/2 − θ) = csc(θ)",
//       explanation: "Secant of complement equals cosecant"
//     },
//     {
//       id: 32,
//       law: "Cosecant of Complement",
//       formula: "csc(π/2 − θ) = sec(θ)",
//       explanation: "Cosecant of complement equals secant"
//     }
//   ],

//    "Periodicity Identities": [
//     {
//       id: 33,
//       law: "Sine Periodicity",
//       formula: "sin(θ + 2π) = sin(θ)",
//       explanation: "Sine repeats every 2π"
//     },
//     {
//       id: 34,
//       law: "Cosine Periodicity",
//       formula: "cos(θ + 2π) = cos(θ)",
//       explanation: "Cosine repeats every 2π"
//     },
//     {
//       id: 35,
//       law: "Tangent Periodicity",
//       formula: "tan(θ + π) = tan(θ)",
//       explanation: "Tangent repeats every π"
//     },
//     {
//       id: 36,
//       law: "Cotangent Periodicity",
//       formula: "cot(θ + π) = cot(θ)",
//       explanation: "Cotangent repeats every π"
//     },
//     {
//       id: 37,
//       law: "Secant Periodicity",
//       formula: "sec(θ + 2π) = sec(θ)",
//       explanation: "Secant repeats every 2π"
//     },
//     {
//       id: 38,
//       law: "Cosecant Periodicity",
//       formula: "csc(θ + 2π) = csc(θ)",
//       explanation: "Cosecant repeats every 2π"
//     }
//   ],

      
//         // "Even-Odd Identities": [
//         //   { id: 10, law: "Even Cosine", formula: "cos(−θ) = cos(θ)", explanation: "Cosine is an even function", topic: "Parity" },
//         //   { id: 11, law: "Odd Sine", formula: "sin(−θ) = −sin(θ)", explanation: "Sine is an odd function", topic: "Parity" },
//         //   { id: 12, law: "Odd Tangent", formula: "tan(−θ) = −tan(θ)", explanation: "Tangent is an odd function", topic: "Parity" }
//         // ],

//         "Shift Identities": [
//     {
//       id: 38,
//       law: "Sine Shift by π",
//       formula: "sin(θ + π) = −sin(θ)",
//       explanation: "Sine shifts by π with a sign flip"
//     },
//     {
//       id: 39,
//       law: "Cosine Shift by π",
//       formula: "cos(θ + π) = −cos(θ)",
//       explanation: "Cosine shifts by π with a sign flip"
//     },
//     {
//       id: 40,
//       law: "Tangent Shift by π",
//       formula: "tan(θ + π) = tan(θ)",
//       explanation: "Tangent is periodic with π and does not flip"
//     },
//     {
//       id: 41,
//       law: "Sine Shift by π/2",
//       formula: "sin(θ + π/2) = cos(θ)",
//       explanation: "Sine shifted by π/2 becomes cosine"
//     },
//     {
//       id: 42,
//       law: "Cosine Shift by π/2",
//       formula: "cos(θ + π/2) = −sin(θ)",
//       explanation: "Cosine shifted by π/2 becomes negative sine"
//     },
//     {
//       id: 43,
//       law: "Tangent Shift by π/2",
//       formula: "tan(θ + π/2) = −cot(θ)",
//       explanation: "Tangent shifted by π/2 becomes negative cotangent"
//     }
//   ],
  
//   "Angle Sum Identities": [
//     {
//       id: 44,
//       law: "Sine of Sum",
//       formula: "sin(a + b) = sin(a)cos(b) + cos(a)sin(b)",
//       explanation: "Expands sine of a sum"
//     },
//     {
//       id: 45,
//       law: "Cosine of Sum",
//       formula: "cos(a + b) = cos(a)cos(b) − sin(a)sin(b)",
//       explanation: "Expands cosine of a sum"
//     },
//     {
//       id: 46,
//       law: "Tangent of Sum",
//       formula: "tan(a + b) = (tan(a) + tan(b)) / (1 − tan(a)tan(b))",
//       explanation: "Expands tangent of a sum"
//     },
//     {
//       id: 47,
//       law: "Cotangent of Sum",
//       formula: "cot(a + b) = (cot(a)cot(b) − 1) / (cot(a) + cot(b))",
//       explanation: "Expands cotangent of a sum"
//     },
//     {
//       id: 48,
//       law: "Secant of Sum",
//       formula: "sec(a + b) = 1 / [cos(a + b)]",
//       explanation: "Reciprocal of cosine of sum"
//     },
//     {
//       id: 49,
//       law: "Cosecant of Sum",
//       formula: "csc(a + b) = 1 / [sin(a + b)]",
//       explanation: "Reciprocal of sine of sum"
//     }
//   ],

//   "Angle Difference Identities": [
//     {
//       id: 50,
//       law: "Sine of Difference",
//       formula: "sin(a − b) = sin(a)cos(b) − cos(a)sin(b)",
//       explanation: "Expands sine of a difference"
//     },
//     {
//       id: 51,
//       law: "Cosine of Difference",
//       formula: "cos(a − b) = cos(a)cos(b) + sin(a)sin(b)",
//       explanation: "Expands cosine of a difference"
//     },
//     {
//       id: 52,
//       law: "Tangent of Difference",
//       formula: "tan(a − b) = (tan(a) − tan(b)) / (1 + tan(a)tan(b))",
//       explanation: "Expands tangent of a difference"
//     },
//     {
//       id: 53,
//       law: "Cotangent of Difference",
//       formula: "cot(a − b) = (cot(a)cot(b) + 1) / (cot(b) − cot(a))",
//       explanation: "Expands cotangent of a difference"
//     },
//     {
//       id: 54,
//       law: "Secant of Difference",
//       formula: "sec(a − b) = 1 / [cos(a − b)]",
//       explanation: "Reciprocal of cosine of difference"
//     },
//     {
//       id: 55,
//       law: "Cosecant of Difference",
//       formula: "csc(a − b) = 1 / [sin(a − b)]",
//       explanation: "Reciprocal of sine of difference"
//     }
//   ],

//         "Double Angle Identities": [
//             {
//               id: 56,
//               law: "Double Angle for Sine",
//               formula: "sin(2θ) = 2sin(θ)cos(θ)",
//               explanation: "Derived from the sine of a sum"
//             },
//             {
//               id: 57,
//               law: "Double Angle for Cosine",
//               formula: "cos(2θ) = cos²(θ) − sin²(θ)",
//               explanation: "Standard form from the cosine of a sum"
//             },
//             {
//               id: 58,
//               law: "Double Angle for Cosine",
//               formula: "cos(2θ) = 2cos²(θ) − 1",
//               explanation: "Alternate form using cosine only"
//             },
//             {
//               id: 59,
//               law: "Double Angle for Cosine",
//               formula: "cos(2θ) = 1 − 2sin²(θ)",
//               explanation: "Alternate form using sine only"
//             },
//             {
//               id: 60,
//               law: "Double Angle for Tangent",
//               formula: "tan(2θ) = (2tan(θ)) / (1 − tan²(θ))",
//               explanation: "Derived from the tangent of a sum"
//             },
//             {
//               id: 61,
//               law: "Double Angle for Cotangent",
//               formula: "cot(2θ) = (cot²(θ) − 1) / (2cot(θ))",
//               explanation: "Derived from reciprocal of tangent double angle"
//             }
//           ],

//                   "Half Angle Identities": [
//             {
//               id: 62,
//               law: "Half Angle for Sine",
//               formula: "sin²(θ) = (1 − cos(2θ)) / 2",
//               explanation: "Derived from cosine double angle identity"
//             },
//             {
//               id: 63,
//               law: "Half Angle for Cosine",
//               formula: "cos²(θ) = (1 + cos(2θ)) / 2",
//               explanation: "Derived from cosine double angle identity"
//             },
//             {
//               id: 64,
//               law: "Half Angle for Tangent",
//               formula: "tan(θ/2) = ±√[(1 − cos(θ)) / (1 + cos(θ))]",
//               explanation: "Square root form derived from sine and cosine"
//             },
//             {
//               id: 65,
//               law: "Half Angle for Tangent",
//               formula: "tan(θ/2) = sin(θ) / (1 + cos(θ))",
//               explanation: "Derived by rationalizing tangent expression"
//             },
//             {
//               id: 66,
//               law: "Half Angle for Tangent",
//               formula: "tan(θ/2) = (1 − cos(θ)) / sin(θ)",
//               explanation: "Alternate rational form for tangent"
//             },
//             {
//               id: 67,
//               law: "Half Angle for Cotangent",
//               formula: "cot(θ/2) = ±√[(1 + cos(θ)) / (1 − cos(θ))]",
//               explanation: "Reciprocal of the square root tangent identity"
//             }
//           ],

//           "Triple Angle Identities": [
//               {
//                 id: 68,
//                 law: "Triple Angle for Sine",
//                 formula: "sin(3θ) = 3sin(θ) − 4sin³(θ)",
//                 explanation: "Expanded using angle addition identity"
//               },
//               {
//                 id: 69,
//                 law: "Triple Angle for Cosine",
//                 formula: "cos(3θ) = 4cos³(θ) − 3cos(θ)",
//                 explanation: "Expanded using angle addition identity"
//               },
//               {
//                 id: 70,
//                 law: "Triple Angle for Tangent",
//                 formula: "tan(3θ) = (3tan(θ) − tan³(θ)) / (1 − 3tan²(θ))",
//                 explanation: "Derived from tangent sum identity"
//               },
//               {
//                 id: 71,
//                 law: "Triple Angle for Cotangent",
//                 formula: "cot(3θ) = (cot³(θ) − 3cot(θ)) / (3cot²(θ) − 1)",
//                 explanation: "Derived from reciprocal of tangent triple angle"
//               },
//               {
//                 id: 72,
//                 law: "Triple Angle for Secant",
//                 formula: "sec(3θ) = 1 / (4cos³(θ) − 3cos(θ))",
//                 explanation: "Reciprocal of cosine triple angle"
//               },
//               {
//                 id: 73,
//                 law: "Triple Angle for Cosecant",
//                 formula: "csc(3θ) = 1 / (3sin(θ) − 4sin³(θ))",
//                 explanation: "Reciprocal of sine triple angle"
//               }
//             ],

//             "Power-Reducing Identities": [
//     {
//       id: 74,
//       law: "Power-Reducing for Sine",
//       formula: "sin²(θ) = (1 − cos(2θ)) / 2",
//       explanation: "Reduces power of sine using double angle"
//     },
//     {
//       id: 75,
//       law: "Power-Reducing for Cosine",
//       formula: "cos²(θ) = (1 + cos(2θ)) / 2",
//       explanation: "Reduces power of cosine using double angle"
//     },
//     {
//       id: 76,
//       law: "Power-Reducing for Tangent",
//       formula: "tan²(θ) = (1 − cos(2θ)) / (1 + cos(2θ))",
//       explanation: "Derived from sin²/cos² power-reduced forms"
//     },
//     {
//       id: 77,
//       law: "Power-Reducing for Cotangent",
//       formula: "cot²(θ) = (1 + cos(2θ)) / (1 − cos(2θ))",
//       explanation: "Reciprocal form of tangent power-reduction"
//     },
//     {
//       id: 78,
//       law: "Power-Reducing for Secant",
//       formula: "sec²(θ) = 2 / (1 + cos(2θ))",
//       explanation: "Derived by inverting cos² power identity"
//     },
//     {
//       id: 79,
//       law: "Power-Reducing for Cosecant",
//       formula: "csc²(θ) = 2 / (1 − cos(2θ))",
//       explanation: "Derived by inverting sin² power identity"
//     }
//   ],

//   "Product-to-Sum Identities": [
//     {
//       id: 80,
//       law: "Product-to-Sum for sin(a)sin(b)",
//       formula: "sin(a)sin(b) = ½[cos(a − b) − cos(a + b)]",
//       explanation: "Converts product of sines into sum of cosines"
//     },
//     {
//       id: 81,
//       law: "Product-to-Sum for cos(a)cos(b)",
//       formula: "cos(a)cos(b) = ½[cos(a − b) + cos(a + b)]",
//       explanation: "Converts product of cosines into sum of cosines"
//     },
//     {
//       id: 82,
//       law: "Product-to-Sum for sin(a)cos(b)",
//       formula: "sin(a)cos(b) = ½[sin(a + b) + sin(a − b)]",
//       explanation: "Converts product of sine and cosine into sum of sines"
//     },
//     {
//       id: 83,
//       law: "Product-to-Sum for cos(a)sin(b)",
//       formula: "cos(a)sin(b) = ½[sin(a + b) − sin(a − b)]",
//       explanation: "Converts product of cosine and sine into difference of sines"
//     },
//     {
//       id: 84,
//       law: "Product-to-Sum for tan(a)tan(b)",
//       formula: "tan(a)tan(b) = [cos(a − b) − cos(a + b)] / [cos(a − b) + cos(a + b)]",
//       explanation: "Derived using tangent in terms of sine and cosine"
//     },
//     {
//       id: 85,
//       law: "Product-to-Sum for cot(a)cot(b)",
//       formula: "cot(a)cot(b) = [cos(a − b) + cos(a + b)] / [cos(a − b) − cos(a + b)]",
//       explanation: "Derived using cotangent in terms of cosine and sine"
//     }
//   ],

//   "Sum-to-Product Identities": [
//     {
//       id: 86,
//       law: "Sum-to-Product for sin(a) + sin(b)",
//       formula: "sin(a) + sin(b) = 2sin[(a + b)/2]cos[(a − b)/2]",
//       explanation: "Converts sum of sines into product of sine and cosine"
//     },
//     {
//       id: 87,
//       law: "Sum-to-Product for sin(a) − sin(b)",
//       formula: "sin(a) − sin(b) = 2cos[(a + b)/2]sin[(a − b)/2]",
//       explanation: "Converts difference of sines into product"
//     },
//     {
//       id: 88,
//       law: "Sum-to-Product for cos(a) + cos(b)",
//       formula: "cos(a) + cos(b) = 2cos[(a + b)/2]cos[(a − b)/2]",
//       explanation: "Converts sum of cosines into product"
//     },
//     {
//       id: 89,
//       law: "Sum-to-Product for cos(a) − cos(b)",
//       formula: "cos(a) − cos(b) = −2sin[(a + b)/2]sin[(a − b)/2]",
//       explanation: "Converts difference of cosines into negative product of sines"
//     },
//     {
//       id: 90,
//       law: "Sum-to-Product for tan(a) + tan(b)",
//       formula: "tan(a) + tan(b) = sin(a + b) / [cos(a)cos(b)]",
//       explanation: "Derived by expressing tangent in terms of sine and cosine"
//     },
//     {
//       id: 91,
//       law: "Sum-to-Product for tan(a) − tan(b)",
//       formula: "tan(a) − tan(b) = sin(a − b) / [cos(a)cos(b)]",
//       explanation: "Difference of tangents expressed as sine over product of cosines"
//     }
//   ],


//       };

//       const config = {
//         displayColumns: ["law", "formula", "explanation"],  // Show name, formula, and explanation
//         copyableFields: ["formula"],  // Allow copying just the formula
//         searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
//       };

//       // Operation A demonstration units: frozen tool state + attached explanation
//       // panel + tool link, one frame. Rendered as content-array items.
//       const demoUnits = {
//         reciprocal: demoUnitFrame({
//           svg: basicIdentitiesDiagrams.csc.overview,
//           caption: 'Reciprocal pair, frozen',
//           text: 'On the unit circle the vertical leg is sin&#8202;&#952;, while the graph beside it tracks its reciprocal csc&#8202;&#952; = 1/sin&#8202;&#952; &#8212; growing without bound exactly where the sine leg shrinks toward zero. Step through this pairing live, function by function, on the',
//           href: '/trigonometry/visual-tools/basic-identities',
//           linkText: 'basic identities explorer',
//         }),
//         periodicity: demoUnitFrame({
//           svg: [trigFunctionsGraphDiagrams.sin, trigFunctionsGraphDiagrams.tan],
//           caption: 'Two periods, side by side',
//           text: 'The sine wave repeats its full shape every 2&#960;, while tangent restarts every &#960;, each cycle fenced by its asymptotes. Trace any of the six functions through several cycles yourself on the',
//           href: '/trigonometry/visual-tools/functions-graphs',
//           linkText: 'trigonometric functions graphs',
//           textAfterLink: ' tool.',
//         }),
//         double: demoUnitFrame({
//           svg: doubleAngleDiagrams.sin.overview,
//           caption: 'Geometric proof, final step',
//           text: 'The closing step of the geometric proof of sin(2&#952;) = 2&#8202;sin&#8202;&#952;&#8202;cos&#8202;&#952; on the unit circle. Play the whole proof through step by step &#8212; for sine and cosine alike &#8212; on the',
//           href: '/trigonometry/visual-tools/double-angle-identities',
//           linkText: 'double angle identities explorer',
//         }),
//         half: demoUnitFrame({
//           svg: halfAngleDiagrams.sin.overview,
//           caption: 'Half-angle derivation, final step',
//           text: 'The geometric derivation of the sine half-angle identity, frozen at its last step &#8212; the half-chord read straight off the unit circle. Play the full derivation, and its cosine counterpart, on the',
//           href: '/trigonometry/visual-tools/half-angle-identities',
//           linkText: 'half angle identities explorer',
//         }),
//       };

//       const introContent={
//         id:'intro',
//         title:'Trigonometric Identities : Practical Guide',
//         content:`Trigonometric identities are equations involving trigonometric functions that are true for all values in their domains.
//         Knowing those identities and understanding them is  important because they:
//      ▪  Simplify complex expressions
//      ▪  Help solving equations not easily solvable in their original form
//      ▪  May be useful in proving mathematical theorems
//     ▪ Model periodic phenomena in physics, engineering, and other fields
//     ▪  Transform expressions to more useful forms for integration or differentiation



//     `
//       }    
      

//     return{
//         props:{

//             trigIdentitiesData,
//             config,
//             sectionsContent,
//             introContent,
//             keyWords,
//             summaryTable,
//             demoUnits,

//         }
//     }
// }

// export default function TrigoIdentitiesPage({trigIdentitiesData ,config ,sectionsContent,introContent, summaryTable, demoUnits}) {

//   const tableWrapStyle = { margin: '20px auto', width: '100%' }

//   const identitiesSections=[
//      {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:'',
//         content:[
//           sectionsContent.obj0.content,
//           sectionsContent.obj0.after,
//         ]
//     },

//     {
//       id:'definition',
//       title:sectionsContent.definition.title,
//       link:'',
//       content:[
//         sectionsContent.definition.before,
         
//          <div key={51} style={{marginLeft:'50px',marginRight:'50px'}}>
//     <ExpandableTable key={1}
//     data={trigIdentitiesData["Definition-based Identities"]}
//      displayColumns={ ["law", "formula", "explanation"]}
//      copyableFields={["formula"]}
//      includedFields={ ["law", "formula", "explanation"]} />
//      </div> ,
//      sectionsContent.definition.after
   
//       ]
//     },
//     {
//       id:'reciprocal',
//       title:sectionsContent.reciprocal.title,
//       link:'',
//       content:[
//          sectionsContent.reciprocal.before,
//         <div key={51} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={2}
//         data={trigIdentitiesData["Reciprocal Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//         sectionsContent.reciprocal.after,
//         <div key={'unit-reciprocal'} dangerouslySetInnerHTML={{ __html: demoUnits.reciprocal }} />,
//         `With these six pairings internalized, every rational trigonometric expression becomes negotiable — whichever function a problem hands you, its reciprocal is one flip away.`,

//       ]
//     },
//      {
//       id:'pythagorean',
//       title: sectionsContent.pythagorean.title,
//       link:'',
//       content:[

//         sectionsContent.pythagorean.before,

//         <div key={53} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={3}
//         data={trigIdentitiesData["Pythagorean Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//           sectionsContent.pythagorean.after,
        
//       ]
//     },
//      {
//       id:'triangle',
//       title: sectionsContent.triangle.title,
//       link:'',
//       content:[

//         sectionsContent.triangle.before,

//         <div key={54} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={4}
//         data={trigIdentitiesData["Triangle Geometry Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,

//          sectionsContent.triangle.after,

        
        
//       ]
//     },
//       {
//       id:'even-odd',
//       title:sectionsContent.even_odd.title,
//       link:'',
//       content:[
//           sectionsContent.even_odd.before,
//         <div key={55} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={5}
//         data={trigIdentitiesData["Even-Odd Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.even_odd.after,

        
//       ]
//     },
//      {
//       id:'co-function',
//       title: sectionsContent.co_function.title,
//       link:'',
//       content:[
//          sectionsContent.co_function.before,
//         <div key={56} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={6}
//         data={trigIdentitiesData["Co-Function Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.co_function.after,


        
        
//       ]
//     },
//       {
//       id:'periodicity',
//       title:sectionsContent.periodicity.title,
//       link:'',
//       content:[
//          sectionsContent.periodicity.before,
//         <div key={57} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={7}
//         data={trigIdentitiesData["Periodicity Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.periodicity.after,
//          <div key={'unit-periodicity'} dangerouslySetInnerHTML={{ __html: demoUnits.periodicity }} />,
//          `However far an angle wanders, periodicity brings its values home — which is why no trigonometric computation ever truly needs an angle outside a single cycle.`,

//       ]
//     },
//      {
//       id:'shift',
//       title:sectionsContent.shift.title,
//       link:'',
//       content:[
//          sectionsContent.shift.before,
//         <div key={68} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={8}
//         data={trigIdentitiesData["Shift Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.shift.after,        
        
//       ]
//     },
//       {
//       id:'sum',
//       title: sectionsContent.sum.title,
//       link:'',
//       content:[

//           sectionsContent.sum.before,
//         <div key={69} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={9}
//         data={trigIdentitiesData["Angle Sum Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.sum.after,
        
//       ]
//     },
//       {
//       id:'difference',
//       title: sectionsContent.difference.title,
//       link:'',
//       content:[
//         sectionsContent.difference.before,
//         <div key={60} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={10}
//         data={trigIdentitiesData["Angle Difference Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.difference.after,
        
        
//       ]
//     },
//       {
//       id:'half',
//       title:sectionsContent.half.title,
//       link:'',
//       content:[
//         sectionsContent.half.before,

//         <div key={62} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={12}
//         data={trigIdentitiesData["Half Angle Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.half.after,
//          <div key={'unit-half'} dangerouslySetInnerHTML={{ __html: demoUnits.half }} />,
//          `With halves as with doubles, the lesson is the same: every fractional angle is reachable from whole ones — at the price of a square root and a careful sign check.`,

//       ]
//     },
//       {
//       id:'double',
//       title:sectionsContent.double.title,
//       link:'',
//       content:[
//             sectionsContent.double.before,

//         <div key={61} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={11}
//         data={trigIdentitiesData["Double Angle Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,

//           sectionsContent.double.after,
//           <div key={'unit-double'} dangerouslySetInnerHTML={{ __html: demoUnits.double }} />,
//           `Compact as they look, these doubled forms are the hinge between single-angle values and the power-reducing, half-angle, and integration techniques that follow.`,


       
        
//       ]
//     },

   

//       {
//       id:'triple',
//       title:sectionsContent.triple.title,
//       link:'',
//       content:[
//         sectionsContent.triple.before,
//         <div key={63} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={13}
//         data={trigIdentitiesData["Triple Angle Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.triple.after,

//       ]
//     },

//        {
//       id:'power-reducing',
//       title:sectionsContent.power_reducing.title,
//       link:'',
//       content:[
//          sectionsContent.power_reducing.before,
//         <div key={64} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={14}
//         data={trigIdentitiesData["Power-Reducing Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.power_reducing.after,
       
        
//       ]
//     },

//       {
//       id:'product-sum',
//       title:sectionsContent.product_sum.title,
//       link:'',
//       content:[
//           sectionsContent.product_sum.before,
//         <div key={65} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={15}
//         data={trigIdentitiesData["Product-to-Sum Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.product_sum.after,

        
        
//       ]
//     },

//       {
//       id:'sum-product',
//       title:sectionsContent.sum_product.title,
//       link:'',
//       content:[

//          sectionsContent.sum_product.before,
//         <div key={66} style={{marginLeft:'50px',marginRight:'50px'}}>
//         <ExpandableTable key={16}
//         data={trigIdentitiesData["Sum-to-Product Identities"]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,
//          sectionsContent.sum_product.after,

        
        
//       ]
//     },

//     // NEW summary capstone section
//     {
//       id:'summary',
//       title: sectionsContent.summary.title,
//       link: '',
//       content:[
//         sectionsContent.summary.before,
//         <div key={'summary-table'} style={tableWrapStyle}
//              dangerouslySetInnerHTML={{ __html: summaryTable }} />,
//         sectionsContent.summary.after,
//       ]
//     },

//     //  {
//     //   id:'inverse',
//     //   title:'Inverse Trigonometric Identities',
//     //   link:'',
//     //   content:[

//     //     <div style={{marginLeft:'50px',marginRight:'50px'}}>
//     //     <ExpandableTable data={trigIdentitiesData["Inverse Trigonometric Identities"]}
//     //      displayColumns={ ["law", "formula", "explanation"]}
//     //      copyableFields={["formula"]}
//     //      includedFields={ ["law", "formula", "explanation"]} />
//     //      </div> ,

        
//     //   ]
//     // }



//      // {
//     //   id:'',
//     //   title:'',
//     //   link:'',
//     //   content:[
        
//     //   ]
//     // }

//   ]
//   return (
//     <>
//     <Head>
//   {/* Essential Meta Tags */}
//   <title>Trigonometric Identities: Complete Guide with Formulas | LearnMathClass</title>
//   <meta name="description" content="Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities with formulas and explanations." />
//   <meta name="keywords" content="trigonometric identities, trig identities, trigonometry, verifying trig identities, simplifying trig identities, proving trigonometric identities" />
//   <meta charset="utf-8" />

//   {/* Canonical URL */}
//   <link rel="canonical" href="https://www.learnmathclass.com/trigonometry/identities" />

//   {/* Open Graph for Social Sharing */}
//   <meta property="og:title" content="Trigonometric Identities: Complete Guide with Formulas" />
//   <meta property="og:description" content="Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities." />
//   <meta property="og:url" content="https://www.learnmathclass.com/trigonometry/identities" />
//   <meta property="og:type" content="article" />

//   {/* Basic Structured Data */}
//   <script type="application/ld+json">
//     {`{
//       "@context": "https://schema.org",
//       "@type": "Article",
//       "headline": "Trigonometric Identities: Complete Guide with Formulas",
//       "description": "Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities.",
//       "url": "https://www.learnmathclass.com/trigonometry/identities"
//     }`}
//   </script>

//   {/* Favicon */}
//   <link rel="icon" href="/favicon.ico" />
// </Head>
//     {/* <GenericNavbar/> */}
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <OperaSidebar 
//           side='right'
//           // topOffset='65px' 
//           sidebarWidth='45px'
//           panelWidth='300px'
          
//           iconColor='white'
//           panelBackgroundColor='#f2f2f2'/> 
//     <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Trigonometric Identities</h1>
//     {/* <div style={{transform:'scale(0.9)',marginLeft:'100px',marginRight:'100px'}}>
//     <DataWrapper2 data={trigIdentitiesData} config={config} searchable={false}/>
//     </div> */}
//     <SectionTableOfContents sections={identitiesSections}/>
//     <br/>
//     <br/>
//     <br/>
//     <IntroSection 
//   id={introContent.id}
//   title={introContent.title}
//   content={introContent.content}
//   backgroundColor="#f2f2f2"
//   textColor="#34383c"
// />
//     <br/>
//       <KeyTermsCard
//       id="0"
//       title={sectionsContent.obj0.title}
//       content={sectionsContent.obj0.content}
//       after={sectionsContent.obj0.after}
//       variant="light"
//     />
//     <br/>
//     <Sections sections={identitiesSections.slice(1)}/>
   
//     <br/>
//     <br/>
//     {/* <ScrollUpButton/> */}
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import '../../pages.css'
import ExpandableTable from '@/app/components/generic-table/ExpandableTable'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents2'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import AffiliateBlock from '@/app/components/affiliates/AffiliateBlock'
import { COURSES } from '@/app/components/affiliates/courses'
import FAQSection from '../../../app/components/page-components/faq-component/FAQSection'
import { tableHeaders } from '@/app/styles/theme'
import basicIdentitiesDiagrams from '@/app/components/trigonometry/identities/basic-identities/basicIdentitiesDiagrams'
import doubleAngleDiagrams from '@/app/components/trigonometry/identities/double-angle/doubleAngleDiagrams'
import halfAngleDiagrams from '@/app/components/trigonometry/identities/half-angle/halfAngleDiagrams'
import trigFunctionsGraphDiagrams from '@/app/components/trigonometry/trigFunctionsGraphDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import shiftIdentityDiagrams from '@/app/components/trigonometry/shiftIdentityDiagrams'
import tripleAngleDiagrams from '@/app/components/trigonometry/tripleAngleDiagrams'
import pythagoreanDiagrams from '@/app/components/trigonometry/identities/pythagorean/pythagoreanDiagrams'
import negativeAngleDiagrams from '@/app/components/trigonometry/identities/negative-angle/negativeAngleDiagrams'
import angleExplorerDiagrams from '@/app/components/trigonometry/angle/angleExplorerDiagrams'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'

export async function getStaticProps(){

  // Not rendered on this page — surfaced on the /trigonometry hub via
  // buildSectionData extraction (first `name:` / `hubDescription:` match wins).
  const hubMeta = {
    name: `Trigonometric Identities`,
    hubDescription: `Trigonometric identities form a rich and interconnected system rooted in geometric definitions and algebraic transformations. At the foundation lie the [reciprocal](!/trigonometry/identities#reciprocal) and quotient identities, such as $\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$, that emerge directly from the unit circle and right-triangle definitions of the trigonometric functions.

Building upon this base are the symmetry-based identities — such as the [even-odd](!/trigonometry/identities#even-odd) and [co-function](!/trigonometry/identities#co-function) properties — which reflect the inherent symmetries of the unit circle. For instance, $\\cos(-\\theta) = \\cos(\\theta)$ showcases the evenness of cosine, while $\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos(\\theta)$ exemplifies co-function symmetry.

The [Pythagorean](!/trigonometry/identities#pythagorean) identities, such as $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$, are central to the structure. Angle [sum](!/trigonometry/identities#sum) and [difference](!/trigonometry/identities#difference) formulas — like $\\sin(a + b) = \\sin(a)\\cos(b) + \\cos(a)\\sin(b)$ — enable the construction of [double-angle](!/trigonometry/identities#double), [half-angle](!/trigonometry/identities#half), and [triple-angle](!/trigonometry/identities#triple) identities, such as $\\cos(2\\theta) = 2\\cos^2(\\theta) - 1$.

[Product-to-sum](!/trigonometry/identities#product-sum) identities reorganize these angle relationships for simplification, while [sum-to-product](!/trigonometry/identities#sum-product) identities transform sums and differences into products, enabling alternative approaches to complex expressions.

Inverse trigonometric identities like $\\sin^{-1}(x) + \\cos^{-1}(x) = \\frac{\\pi}{2}$, along with hyperbolic analogs and the Euler identity $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$, extend trigonometry into broader mathematical contexts.`,
  }

  const keyWords=[
    'trigonometric identities','trig identities','trigonometry','verifying trig identities','simplifying trig identities',
    'proving trigonometric identities'
  ]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- SUMMARY CAPSTONE TABLE ----------
  // Organizes all 16 identity families by category, core relationship, and derivation source.
  // Family names link to the corresponding in-page section anchors.
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Family</th>
      <th style="${tableHeaders.summary}">Category</th>
      <th style="${tableHeaders.summary}">Core relationship</th>
      <th style="${tableHeaders.summary}">Derives from</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#definition" style="${linkStyle}">Definition-based</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Functions defined in terms of triangle sides</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Right-triangle geometry</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#reciprocal" style="${linkStyle}">Reciprocal</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Each function paired with its multiplicative inverse</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Definitions</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#pythagorean" style="${linkStyle}">Pythagorean</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sin²θ + cos²θ = 1 and dividing variants</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Unit circle (x² + y² = 1)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#triangle" style="${linkStyle}">Triangle Geometry</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Foundational</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sides and angles related in any triangle</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Generalization beyond right triangles</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#even-odd" style="${linkStyle}">Even-Odd</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(−θ) compared with f(θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Unit-circle reflection across the x-axis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#co-function" style="${linkStyle}">Co-Function</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(π/2 − θ) equals the co-function of θ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Complementary angles in a right triangle</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#periodicity" style="${linkStyle}">Periodicity</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(θ + period) = f(θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Cyclic nature of circular motion</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#shift" style="${linkStyle}">Shift</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Symmetry</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(θ + π) or f(θ + π/2) re-expressed</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Unit-circle rotation by π or π/2</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#sum" style="${linkStyle}">Angle Sum</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(a + b) in terms of f(a), f(b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Geometric / rotation proof</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#difference" style="${linkStyle}">Angle Difference</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(a − b) in terms of f(a), f(b)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum identity with even-odd substitution (b → −b)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#double" style="${linkStyle}">Double Angle</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(2θ) in terms of f(θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum identity with a = b = θ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#triple" style="${linkStyle}">Triple Angle</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(3θ) in terms of f(θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum identity applied to 2θ + θ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#half" style="${linkStyle}">Half Angle</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Angle arithmetic</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(θ/2) in terms of f(θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Double-angle identity rearranged and rooted</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#power-reducing" style="${linkStyle}">Power-Reducing</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Algebraic transform</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f²(θ) in terms of f(2θ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Double angle solved for sin²θ / cos²θ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="#product-sum" style="${linkStyle}">Product-to-Sum</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Algebraic transform</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">f(a)·f(b) rewritten as a sum or difference</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Sum and difference identities combined</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="#sum-product" style="${linkStyle}">Sum-to-Product</a></td>
      <td style="padding: 12px 15px; color: #34495e;">Algebraic transform</td>
      <td style="padding: 12px 15px; color: #34495e;">f(a) ± f(b) rewritten as a product</td>
      <td style="padding: 12px 15px; color: #34495e;">Product-to-sum inverted with variable substitution</td>
    </tr>
  </tbody>
</table>
`

  const sectionsContent={
    obj0: {
    title: `Key Terms`,
    content: `
## Functions
 
- [Sine](!/trigonometry/definitions#sine) — $y$-coordinate on the unit circle
- [Cosine](!/trigonometry/definitions#cosine) — $x$-coordinate on the unit circle
- [Tangent](!/trigonometry/definitions#tangent) — ratio $\\frac{\\sin\\theta}{\\cos\\theta}$
- [Cosecant](!/trigonometry/definitions#cosecant) — reciprocal of sine
- [Secant](!/trigonometry/definitions#secant) — reciprocal of cosine
- [Cotangent](!/trigonometry/definitions#cotangent) — reciprocal of tangent
 
## Angle Relationships
 
- [Complementary Angles](!/trigonometry/definitions#complementary_angles) — two angles summing to $90°$, the basis of cofunction identities
- [Supplementary Angles](!/trigonometry/definitions#supplementary_angles) — two angles summing to $180°$

## Supplement & Shift Identities
 
- [Sine Anti-Supplement Shift](!/trigonometry/formulas#sine_anti-supplement_shift) — $\\sin(\\pi + \\theta) = -\\sin\\theta$
- [Cosine Anti-Supplement Shift](!/trigonometry/formulas#cosine_anti-supplement_shift) — $\\cos(\\pi + \\theta) = -\\cos\\theta$
- [Quadrature Shift - Sine](!/trigonometry/formulas#quadrature_shift_-_sine) — $\\sin\\!\\left(\\frac{\\pi}{2} + \\theta\\right) = \\cos\\theta$
 
## Sum & Difference Formulas
 
- [Sine Sum and Difference](!/trigonometry/formulas#sine_sum_and_difference) — $\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$
- [Cosine Sum and Difference](!/trigonometry/formulas#cosine_sum_and_difference) — $\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$
- [Tangent Sum and Difference](!/trigonometry/formulas#tangent_sum_and_difference) — $\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}$
 
## Double Angle Formulas
 
- [Sine Double Angle](!/trigonometry/formulas#sine_double_angle) — $\\sin 2A = 2\\sin A\\cos A$
- [Cosine Double Angle](!/trigonometry/formulas#cosine_double_angle) — $\\cos 2A = \\cos^2 A - \\sin^2 A$
- [Tangent Double Angle](!/trigonometry/formulas#tangent_double_angle) — $\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}$
 
## Half-Angle Formulas
 
- [Sine Half Angle](!/trigonometry/formulas#sine_half_angle) — $\\sin\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{2}}$
- [Cosine Half Angle](!/trigonometry/formulas#cosine_half_angle) — $\\cos\\frac{A}{2} = \\pm\\sqrt{\\frac{1 + \\cos A}{2}}$
- [Tangent Half Angle](!/trigonometry/formulas#tangent_half_angle) — $\\tan\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{1 + \\cos A}}$
 
## Triple Angle Formulas
 
- [Sine Triple Angle](!/trigonometry/formulas#sine_triple_angle) — $\\sin 3A = 3\\sin A - 4\\sin^3 A$
- [Cosine Triple Angle](!/trigonometry/formulas#cosine_triple_angle) — $\\cos 3A = 4\\cos^3 A - 3\\cos A$
- [Tangent Triple Angle](!/trigonometry/formulas#tangent_triple_angle) — $\\tan 3A = \\frac{3\\tan A - \\tan^3 A}{1 - 3\\tan^2 A}$
 
## Power-Reducing Formulas
 
- [Sine Squared Reduction](!/trigonometry/formulas#sine_squared_reduction) — $\\sin^2 A = \\frac{1 - \\cos 2A}{2}$
- [Cosine Squared Reduction](!/trigonometry/formulas#cosine_squared_reduction) — $\\cos^2 A = \\frac{1 + \\cos 2A}{2}$
- [Tangent Squared Reduction](!/trigonometry/formulas#tangent_squared_reduction) — $\\tan^2 A = \\frac{1 - \\cos 2A}{1 + \\cos 2A}$
 
## Product-to-Sum Formulas
 
- [Product to Sum - Cosine Cosine](!/trigonometry/formulas#product_to_sum_-_cosine_cosine) — $\\cos A\\cos B = \\frac{1}{2}[\\cos(A - B) + \\cos(A + B)]$
- [Product to Sum - Sine Sine](!/trigonometry/formulas#product_to_sum_-_sine_sine) — $\\sin A\\sin B = \\frac{1}{2}[\\cos(A - B) - \\cos(A + B)]$
- [Product to Sum - Sine Cosine](!/trigonometry/formulas#product_to_sum_-_sine_cosine) — $\\sin A\\cos B = \\frac{1}{2}[\\sin(A + B) + \\sin(A - B)]$
- [Product to Sum - Cosine Sine](!/trigonometry/formulas#product_to_sum_-_cosine_sine) — $\\cos A\\sin B = \\frac{1}{2}[\\sin(A + B) - \\sin(A - B)]$
 
## Sum-to-Product Formulas
 
- [Sum to Product - Sine Sum](!/trigonometry/formulas#sum_to_product_-_sine_sum) — $\\sin A + \\sin B = 2\\sin\\frac{A + B}{2}\\cos\\frac{A - B}{2}$
- [Sum to Product - Sine Difference](!/trigonometry/formulas#sum_to_product_-_sine_difference) — $\\sin A - \\sin B = 2\\cos\\frac{A + B}{2}\\sin\\frac{A - B}{2}$
- [Sum to Product - Cosine Sum](!/trigonometry/formulas#sum_to_product_-_cosine_sum) — $\\cos A + \\cos B = 2\\cos\\frac{A + B}{2}\\cos\\frac{A - B}{2}$
- [Sum to Product - Cosine Difference](!/trigonometry/formulas#sum_to_product_-_cosine_difference) — $\\cos A - \\cos B = -2\\sin\\frac{A + B}{2}\\sin\\frac{A - B}{2}$

`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Trigonometry Definitions](!/trigonometry/definitions) →@`,
    link: '',
  },
    definition:{
      title:'Definition-based Identities',
      before: `Definition-based identities derive from the fundamental relationships between trigonometric functions based on their right-triangle definitions.
      Those may be well illustrated by [unit circle](!/visual-tools/unit-circle).
      
      \n`,     

      after:  `\nDefinition-based identities are fundamental relationships derived directly from how trigonometric functions are defined in a right triangle. They establish the basic connections between these functions and serve as building blocks for more complex identities.
      To get better feeling and understanding of basic definition-based identities use our visual interactive [unit circle](!/visual-tools/unit-circle) tool.
      `
 
    },
    reciprocal:{
      title:'Reciprocal Identities',
      before:  `In mathematics, the **reciprocal** of a number or expression is 1 divided by that number.
      So, for any non-zero value $x$, the reciprocal is $\\frac{1}{x}$ .
      A reciprocal identity expresses the relationship between a trigonometric function and its multiplicative inverse — basically, how each function "flips".​
      Each basic trigonometric function (sine, cosine, tangent) has a reciprocal counterpart.
              
              `,
      after: `
      Reciprocal identities help simplify rational trigonometric expressions, especially in algebra-heavy problems or when combining functions.
      Knowing how to flip between functions is critical in isolating variables and solving identities.
      Reciprocal identities let you flip between familiar and less familiar functions, extend your solving toolbox, and reduce redundancy in learning.
      `
    },
    pythagorean:{
      title:'Pythagorean Identities',
      before:`Pythagorean Identities are based on the Pythagorean theorem applied to the [unit circle](!/visual-tools/unit-circle). 
      They express fundamental relationships that always equal 1 or have the form "1 + something²". The core identity sin²(θ) + cos²(θ) = 1 comes directly from the unit circle where any point (cos θ, sin θ) satisfies x² + y² = 1. The other two identities are derived by dividing this fundamental relationship by cos² or sin². The squared-function shorthand — sin²(θ) means (sin(θ))² — is the same superscript convention whose −1 exception is untangled in the [inverse-function notation note](!/trigonometry/inverse-functions#6).

      `,
      after:`
      
      Being familiar with these identities is a crucial skill because they allow converting between different trigonometric functions and are essential for simplifying complex trigonometric expressions.`,
    },
     triangle:{
      title:'Triangle Geometry Identities',
      before:`Triangle Geometry Identities are fundamental relationships that apply to any triangle, not just right triangles. They're special because they connect angles and side lengths in general triangles, extending beyond basic trigonometry. The Law of Sines relates ratios of sides to opposite angles, while the Law of Cosines generalizes the Pythagorean theorem for non-right triangles.
      
      `,
      after:`

      These identities are crucial for solving real-world problems involving triangulation, navigation, and engineering where you need to find unknown sides or angles in any triangle configuration.
      `,
    },


     even_odd:{
      title:"Even-Odd Identities",
      before:`Even-Odd Identities describe the symmetry properties of trigonometric functions when the angle is negated. They're special because they classify functions as either even (symmetric about the y-axis) or odd (symmetric about the origin). Cosine and secant are even functions, meaning f(-θ) = f(θ), while sine, tangent, cosecant, and cotangent are odd functions, meaning f(-θ) = -f(θ). 
      
      `,
      after:`
      
      These identities are important for simplifying expressions with negative angles, understanding function behavior, and solving equations where angle direction matters.
      `,
    },

    
    co_function:{
      title:`Co-Function Identities`,
      before:`Co-Function Identities express the relationship between trigonometric functions and their "co-functions" (complementary functions). They're special because they show how trig functions of complementary angles (angles that add to 90°) are related. For example, sine of an angle equals cosine of its complement. These identities exist because in a right triangle, the two acute angles are complementary, so one angle's opposite side becomes the other angle's adjacent side. An angle and its complement can be watched as a live pair — values and all — in the [angle explorer](!/trigonometry/visual-tools/angle-explorer).

      `,
      after:`
      
      Co-Function identities are important for converting between different trig functions and simplifying expressions involving complementary angles.
      `,
    },

    

    periodicity:{
      title:'Periodicity Identities',
      before:`Periodicity Identities describe how trigonometric functions repeat their values at regular intervals. They're special because they capture the cyclical nature of trigonometric functions - sine and cosine repeat every 2π (full circle), while tangent and cotangent repeat every π (half circle). These identities exist because trigonometric functions are based on circular motion and angles, which naturally cycle.
      
      `,
      after:`
      
       Understanding periodicity identities is crucial for solving equations with multiple solutions, understanding wave behavior, and working with any angle by reducing it to a standard interval.
      `,
    },
    
     shift:{
      title:`Shift Identities`,
      before:`Shift Identities show how trigonometric functions behave when the angle is shifted by specific amounts like π or π/2. They're special because they reveal the phase relationships between different trig functions - for example, how sine becomes cosine when shifted by π/2. These identities exist because of the geometric relationships on the unit circle where shifting an angle corresponds to rotating the point.
      
      `,
      after:`
      Shift identities are important for understanding wave phase shifts, converting between trig functions, and analyzing periodic phenomena where timing or phase differences matter.
      `,
    },

     sum:{
      title:'Angle Sum Identities',
      before:`Angle Sum Identities express trigonometric functions of the sum of two angles in terms of the individual angles' functions. They're special because they break down complex angle combinations into manageable parts using products and sums of simpler functions. These identities exist due to the geometric properties of rotating and combining angles on the unit circle. 
      
      `,
      after:`

      These identities are fundamental for calculus, solving trigonometric equations, proving other identities, and applications in physics where multiple rotations or oscillations combine, such as in wave interference and vector analysis.
      `,
      link:``,
    },

     difference:{
      title:'Angle Difference Identities',
      before:`Angle Difference Identities express trigonometric functions of the difference between two angles in terms of the individual angles' functions. They're special because they complement the sum identities, providing the complete toolkit for breaking down angle combinations. These identities exist from the same geometric principles as sum identities but with opposite rotation directions on the unit circle. 
      
      `,
      after:`
      Angle Difference identities are essential for solving trigonometric equations, deriving other identities, and applications involving relative motion, phase differences, or when one oscillation opposes another in physics and engineering problems.
      `,
      link:``,
    },

    double:{
      title: 'Double Angle Identities',
      before:`Double Angle Identities are specialized cases of angle sum formulas where both angles are identical (θ + θ = 2θ). What makes them unique is their simplified, elegant forms that directly relate single-angle functions to double-angle functions. They emerge naturally from setting a = b in the sum identities, creating powerful shortcuts. 
      
      `,
      after:`
      
      These identities are vital for integration in calculus, solving equations with multiple angle relationships, and analyzing phenomena with frequency doubling, such as harmonics in music, optical frequency conversion, and engineering systems with gear ratios.
      `,
      link:``,
    },

    
    half:{
      title:`Half Angle Identities`,
      before:`Half Angle Identities work in reverse of double angle formulas, expressing functions of θ/2 in terms of functions of θ. Their uniqueness lies in providing square root forms and rational expressions that eliminate half-angles from equations. They arise by algebraically rearranging double angle identities and often involve ± signs requiring careful quadrant analysis.
      
      `,
      after:`

      These identities are indispensable for integration techniques, solving equations with fractional angles, and applications involving bisection problems, such as cutting angles in half for construction, optics with half-wave plates, and signal processing with subharmonics.
      `,
      link:``,
    },

    triple:{
      title:`Triple Angle Identities`,
      before:`Triple Angle Identities extend angle multiplication to express functions of 3θ in terms of functions of θ. They're distinctive for producing cubic polynomial relationships, creating elegant algebraic forms like sin(3θ) = 3sin(θ) - 4sin³(θ). These identities emerge from repeatedly applying angle sum formulas or using complex number methods.
      
      `,
      after:`
      
      Those identities are valuable in advanced calculus, solving higher-order trigonometric equations, and specialized applications like three-phase electrical systems, crystallography with threefold symmetry, and acoustics where third harmonics play crucial roles in sound quality and instrument timbre.
      `,
      link:``,
    },

    
    power_reducing:{
      title:'Power-Reducing Identities',
      before:`Power-Reducing Identities convert higher powers of trigonometric functions into expressions with lower powers and multiple angles. They're special because they eliminate troublesome squared and higher-power terms by expressing them using first-power functions of double angles. 
      
      `,
      after:`
      
      These identities stem from rearranging double angle formulas to isolate the squared terms. They're essential in calculus integration where powers create complexity, Fourier analysis for breaking down periodic functions, and signal processing where reducing power terms simplifies frequency domain analysis and filtering operations.
      `,
    },
    

     product_sum:{
      title:'Product-to-Sum Identities',
      before:`@academic[fact,aside:true,width:35%:Multiplying with cosines
In the 1580s, before logarithms, Tycho Brahe's observatory multiplied long numbers with $\\cos a \\cos b = \\frac{1}{2}\\left(\\cos(a - b) + \\cos(a + b)\\right)$. Each factor is read as a cosine from a table; two look-ups, an addition and a halving then give the product.]@

Product-to-Sum Identities transform products of trigonometric functions into sums or differences of simpler trigonometric expressions. They're special because they convert multiplication (which is complex) into addition (which is simpler), essentially "unpacking" products into linear combinations. These identities arise from algebraically manipulating angle sum and difference formulas.
      
      `,
      after:`
      
      These identities are crucial in signal processing for analyzing beat frequencies, Fourier analysis for decomposing complex waveforms, acoustics for understanding interference patterns, and integration techniques where products are harder to handle than sums.
      `,
    },


     sum_product:{
      title:`Sum-to-Product Identities`,
      before:`@academic[fact,aside:true,width:35%:Piano tuners listen to this identity
Notes of $440$ and $444$ hertz played together give $2\\cos(4\\pi t)\\sin(884\\pi t)$: one $442$-hertz tone whose loudness swells and fades $4$ times a second. Tuners count these beats and turn the peg until they stop.]@

Sum-to-Product Identities convert sums and differences of trigonometric functions into products of simpler expressions. They're special because they perform the reverse operation of product-to-sum identities, transforming linear combinations into multiplicative forms. These identities emerge from reversing the algebraic manipulation of angle sum formulas. They're valuable for factoring trigonometric expressions, solving equations where products reveal common factors, analyzing wave interference where constructive and destructive patterns create amplitude modulation, and in acoustics for understanding how combined frequencies create beats and harmonics.
      
      `,
      after:`
      
      
      `,
    },

    // NEW capstone section
    faq:{
      title:`Trigonometric Identities FAQ`,
    },
    summary:{
      title:`Summary of Trigonometric Identity Families`,
      before:`The sixteen identity families above fall into four structural categories — foundational, symmetry, angle-arithmetic, and algebraic-transform — and most are not independent but descend from a small core of foundational relationships. The table below organizes every family by category, names the core relationship it expresses, and traces its derivation source, making explicit which identities anchor the system and which are consequences of others.

      `,
      after:``,
      link:'',
    },

    pitfallBoxes:{
      reciprocal:`@academic[pitfall,aside:true,width:35%:Pairing secant with sine
Taking secant as $\\frac{1}{\\sin\\theta}$ gives $\\sec 30^\\circ = \\frac{1}{1/2} = 2$. The correct value is $\\frac{1}{\\cos 30^\\circ} = \\frac{2}{\\sqrt{3}} \\approx 1.155$.
[Read more](!#pitfalls)]@

Rewriting secant, cosecant and cotangent through sine and cosine is usually the first step when simplifying an expression or proving an identity, so these pairs are used in almost every problem. The definitions settle each pair: a reciprocal function divides the same two sides of the triangle in the opposite order. A slip at that first step carries through every line that follows.`,
      pythagorean:`@academic[pitfall,aside:true,width:35%:Taking the square root term by term
Rooting each term of $\\sin^2\\theta = 1 - \\cos^2\\theta$ gives $\\sin\\theta = 1 - \\cos\\theta$, so $\\sin 60^\\circ = 1 - \\frac{1}{2} = \\frac{1}{2}$. The root covers the whole side: $\\sin 60^\\circ = \\sqrt{1 - \\frac{1}{4}} = \\frac{\\sqrt{3}}{2}$.
[Read more](!#pitfalls)]@

In practice the identity is most often used to find one function from another. When $\\cos\\theta$ is known, the equation is rearranged to $\\sin^2\\theta = 1 - \\cos^2\\theta$, and a square root then leads to $\\sin\\theta$ itself. That root has two possible signs, and the quadrant of $\\theta$ decides which one applies. The same steps work in the other two identities, for example to find $\\sec\\theta$ from $\\tan\\theta$.`,
      even_odd:`@academic[pitfall,aside:true,width:35%:Pulling the minus sign out of cosine
Moving the minus sign out of cosine gives $\\cos(-60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$. Cosine is even, so $\\cos(-60^\\circ) = \\cos 60^\\circ = \\frac{1}{2}$.
[Read more](!#pitfalls)]@

These rules are needed whenever a negative angle appears, for example after a difference identity or a reflection of a graph across the $y$-axis. Each function is rewritten for the positive angle according to its own symmetry, as listed in the table above. Clearing the negative angles first usually makes the rest of a simplification much shorter.`,
      sum:`@academic[pitfall,aside:true,width:35%:Splitting the sine over a sum
Splitting $\\sin(30^\\circ + 60^\\circ)$ into $\\sin 30^\\circ + \\sin 60^\\circ$ gives $\\frac{1 + \\sqrt{3}}{2} \\approx 1.366$, above the maximum $1$. The sum identity gives $\\frac{1}{4} + \\frac{3}{4} = 1 = \\sin 90^\\circ$.
[Read more](!#pitfalls)]@

Applying a sum identity starts by splitting the angle into two parts whose values are known, and then expanding.

@academic[example:Example
For example, $75^\\circ = 45^\\circ + 30^\\circ$ gives $\\sin 75^\\circ = \\sin 45^\\circ \\cos 30^\\circ + \\cos 45^\\circ \\sin 30^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$.]@

The result is exact, with no calculator needed, and the same split works for cosine and tangent.`,
      difference:`@academic[pitfall,aside:true,width:35%:Keeping the minus sign in a cosine difference
Writing $\\cos(60^\\circ - 30^\\circ)$ as $\\cos 60^\\circ \\cos 30^\\circ - \\sin 60^\\circ \\sin 30^\\circ$ gives $0$. The correct expansion gives $\\frac{\\sqrt{3}}{4} + \\frac{\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2} = \\cos 30^\\circ$.
[Read more](!#pitfalls)]@

The difference identities are the sum identities with $b$ replaced by $-b$. Since $\\cos(-b) = \\cos b$ and $\\sin(-b) = -\\sin b$, only the terms that contain $\\sin b$ change sign. In the tangent identity both signs change: the numerator becomes a difference and the denominator a sum. These identities are the usual route to exact values such as $\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ)$.`,
      half:`@academic[pitfall,aside:true,width:35%:Taking the sign from the whole angle
Choosing the sign from $\\theta = 240^\\circ$ in Quadrant III gives $\\sin 120^\\circ = -\\sqrt{\\frac{1 - \\cos 240^\\circ}{2}} = -\\frac{\\sqrt{3}}{2}$. The half angle $120^\\circ$ is in Quadrant II, so $\\sin 120^\\circ = \\frac{\\sqrt{3}}{2}$.
[Read more](!#pitfalls)]@

Using a half-angle formula takes two separate decisions: the size of the value, which the square root gives, and its sign, which the formula leaves open with $\\pm$. The size depends only on $\\cos\\theta$, so two different angles with the same cosine give the same square root. The sign is read from the unit circle, once it is clear which angle is being placed there. The same two decisions appear in the cosine and tangent forms.`,
      double:`@academic[pitfall,aside:true,width:35%:Doubling the sine value
Pulling the $2$ out of $\\sin 60^\\circ = \\sin(2 \\cdot 30^\\circ)$ gives $2\\sin 30^\\circ = 1$. The identity gives $2\\sin 30^\\circ \\cos 30^\\circ = 2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$.
[Read more](!#pitfalls)]@

Each double-angle formula rebuilds a value at $2\\theta$ from the values at $\\theta$.

@academic[example:Example
For example, with $\\sin\\theta = \\frac{3}{5}$ and $\\cos\\theta = \\frac{4}{5}$, the sine formula gives $\\sin 2\\theta = 2 \\cdot \\frac{3}{5} \\cdot \\frac{4}{5} = \\frac{24}{25}$, and the cosine formula gives $\\cos 2\\theta = \\frac{16}{25} - \\frac{9}{25} = \\frac{7}{25}$.]@

The three cosine forms give the same value; the choice depends on which of $\\sin\\theta$ and $\\cos\\theta$ is known.`,
    },

    pitfalls:{
      title:`Common Pitfalls`,
      content:`Seven mistakes come up again and again when trigonometric identities are used. Each is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Pairing secant with sine**

When secant or cosecant is rewritten through sine and cosine, the pairs are swapped: secant is taken as the reciprocal of sine, and cosecant as the reciprocal of cosine. Every value built on the swapped pair is wrong, except at angles where sine and cosine happen to be equal.

Wrong working: $\\sec 30^\\circ = \\frac{1}{\\sin 30^\\circ} = \\frac{1}{1/2} = 2$.

Right working: secant is the reciprocal of cosine, so $\\sec 30^\\circ = \\frac{1}{\\cos 30^\\circ} = \\frac{1}{\\sqrt{3}/2} = \\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3} \\approx 1.155$.

Why it happens: the prefix "co" seems to point the wrong way. Cosecant sounds as if it belongs with cosine, which leaves secant for sine.

How to check: a function times its reciprocal is $1$. Here $\\cos 30^\\circ \\cdot \\frac{2}{\\sqrt{3}} = \\frac{\\sqrt{3}}{2} \\cdot \\frac{2}{\\sqrt{3}} = 1$, while $\\cos 30^\\circ \\cdot 2 = \\sqrt{3}$, not $1$.

**Taking the square root term by term**

To find $\\sin\\theta$ from $\\cos\\theta$, the identity is rearranged to $\\sin^2\\theta = 1 - \\cos^2\\theta$, and then the square root is taken of each term separately. A square root does not split over a difference.

Wrong working: for $\\theta = 60^\\circ$, $\\cos 60^\\circ = \\frac{1}{2}$, and $\\sin\\theta = 1 - \\cos\\theta$ gives $\\sin 60^\\circ = 1 - \\frac{1}{2} = \\frac{1}{2}$.

Right working: $\\sin^2 60^\\circ = 1 - \\left(\\frac{1}{2}\\right)^2 = \\frac{3}{4}$, so $\\sin 60^\\circ = \\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{2}$, with the positive sign because $60^\\circ$ is in Quadrant I.

Why it happens: the squares and the square root look like inverse operations that cancel term by term, as if $\\sqrt{a^2 - b^2}$ were $a - b$.

How to check: put the result back into the identity. With $\\sin 60^\\circ = \\frac{1}{2}$, $\\sin^2 60^\\circ + \\cos^2 60^\\circ = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$, not $1$. With $\\frac{\\sqrt{3}}{2}$ the sum is $\\frac{3}{4} + \\frac{1}{4} = 1$.

**Pulling the minus sign out of cosine**

The rule for sine, $\\sin(-\\theta) = -\\sin\\theta$, is applied to every function, so the minus sign is moved out of cosine and secant as well.

Wrong working: $\\cos(-60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.

Right working: cosine is even, so $\\cos(-60^\\circ) = \\cos 60^\\circ = \\frac{1}{2}$. The angle $-60^\\circ$ ends in Quadrant IV, where cosine is positive.

Why it happens: sine is usually met first, and "a minus sign inside comes out" feels like a general rule, as it is for odd powers such as $(-x)^3 = -x^3$.

How to check: place both angles on the unit circle. The points for $60^\\circ$ and $-60^\\circ$ are mirror images across the $x$-axis, so they share the $x$-coordinate $\\frac{1}{2}$, which is the cosine.

**Splitting the sine over a sum**

The sine of a sum is treated as if sine were a factor that distributes over the bracket: $\\sin(a + b) = \\sin a + \\sin b$.

Wrong working: $\\sin(30^\\circ + 60^\\circ) = \\sin 30^\\circ + \\sin 60^\\circ = \\frac{1}{2} + \\frac{\\sqrt{3}}{2} = \\frac{1 + \\sqrt{3}}{2} \\approx 1.366$.

Right working: $\\sin(30^\\circ + 60^\\circ) = \\sin 30^\\circ \\cos 60^\\circ + \\cos 30^\\circ \\sin 60^\\circ = \\frac{1}{2} \\cdot \\frac{1}{2} + \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{1}{4} + \\frac{3}{4} = 1$, which is $\\sin 90^\\circ$.

Why it happens: a number in front of a bracket distributes, $k(a + b) = ka + kb$, and $\\sin(a + b)$ is written the same way. But sine is a function applied to the whole angle, not a number multiplying it.

How to check: a sine value never exceeds $1$, so $1.366$ cannot be right. A second check is $a = b = 90^\\circ$: the split gives $\\sin 90^\\circ + \\sin 90^\\circ = 2$, while $\\sin 180^\\circ = 0$.

**Keeping the minus sign in a cosine difference**

The cosine of a difference is written with the same sign as the angle, $\\cos(a - b) = \\cos a \\cos b - \\sin a \\sin b$. That is the formula for $\\cos(a + b)$.

Wrong working: $\\cos(60^\\circ - 30^\\circ) = \\cos 60^\\circ \\cos 30^\\circ - \\sin 60^\\circ \\sin 30^\\circ = \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{2} \\cdot \\frac{1}{2} = 0$.

Right working: $\\cos(60^\\circ - 30^\\circ) = \\cos 60^\\circ \\cos 30^\\circ + \\sin 60^\\circ \\sin 30^\\circ = \\frac{\\sqrt{3}}{4} + \\frac{\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2}$, which is $\\cos 30^\\circ$.

Why it happens: in the sine identities the sign follows the angle, since $\\sin(a - b)$ has a minus. The same pattern is expected for cosine, where the sign is the opposite one.

How to check: put $b = a$. Then $\\cos(a - a) = \\cos 0 = 1$. The right formula gives $\\cos^2 a + \\sin^2 a = 1$, while the wrong one gives $\\cos^2 a - \\sin^2 a$, which is $\\cos 2a$ and is not $1$ in general.

**Taking the sign from the whole angle**

In $\\sin\\frac{\\theta}{2} = \\pm\\sqrt{\\frac{1 - \\cos\\theta}{2}}$, the sign is chosen from the quadrant of $\\theta$ instead of the quadrant of the half angle $\\frac{\\theta}{2}$.

Wrong working: $\\theta = 240^\\circ$ is in Quadrant III, where sine is negative, so $\\sin 120^\\circ = -\\sqrt{\\frac{1 - \\cos 240^\\circ}{2}} = -\\sqrt{\\frac{1 + 1/2}{2}} = -\\sqrt{\\frac{3}{4}} = -\\frac{\\sqrt{3}}{2}$.

Right working: halve first. The half angle $120^\\circ$ is in Quadrant II, where sine is positive, so $\\sin 120^\\circ = +\\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{2}$.

Why it happens: $\\theta$ is the angle written in the problem, and its quadrant is the one already worked out, so it is used for the sign as well.

How to check: picture the half angle on the unit circle. The point for $120^\\circ$ lies above the $x$-axis, so its sine must be positive.

**Doubling the sine value**

The $2$ in $\\sin 2\\theta$ is pulled out in front, as if doubling the angle doubled the value: $\\sin 2\\theta = 2\\sin\\theta$.

Wrong working: $\\sin 60^\\circ = \\sin(2 \\cdot 30^\\circ) = 2\\sin 30^\\circ = 2 \\cdot \\frac{1}{2} = 1$.

Right working: $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$, so $\\sin 60^\\circ = 2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2} \\approx 0.866$.

Why it happens: the $2$ looks like a coefficient, and in algebra a coefficient can be moved in front. Inside a function it is part of the angle and cannot be taken out.

How to check: try $\\theta = 90^\\circ$. The wrong rule gives $\\sin 180^\\circ = 2\\sin 90^\\circ = 2$, a value no sine can reach, while in fact $\\sin 180^\\circ = 0$.`,
    },

  }
  
    const trigIdentitiesData = {
          "Definition-based Identities": [
          { 
            id: 1, 
            law: "Definition of Sine", 
            formula: "sin(θ) = opposite / hypotenuse", 
            explanation: "Sine defined from right triangle" 
          },
          { 
            id: 2, 
            law: "Definition of Cosine", 
            formula: "cos(θ) = adjacent / hypotenuse", 
            explanation: "Cosine defined from right triangle" 
          },
          { 
            id: 3, 
            law: "Definition of Tangent", 
            formula: "tan(θ) = opposite / adjacent", 
            explanation: "Tangent defined from right triangle" 
          },
          { 
            id: 4, 
            law: "Definition of Cotangent", 
            formula: "cot(θ) = adjacent / opposite", 
            explanation: "Reciprocal of tangent" 
          },
          { 
            id: 5, 
            law: "Definition of Secant", 
            formula: "sec(θ) = hypotenuse / adjacent", 
            explanation: "Reciprocal of cosine" 
          },
          { 
            id: 6, 
            law: "Definition of Cosecant", 
            formula: "csc(θ) = hypotenuse / opposite", 
            explanation: "Reciprocal of sine" 
          },
          { 
            id: 7, 
            law: "Tangent-Sine-Cosine Relation", 
            formula: "tan(θ) = sin(θ) / cos(θ)", 
            explanation: "Derived from basic definitions" 
          },
          { 
            id: 8, 
            law: "Cotangent-Sine-Cosine Relation", 
            formula: "cot(θ) = cos(θ) / sin(θ)", 
            explanation: "Derived from basic definitions" 
          }
          ],

          "Reciprocal Identities": [
            { id: 9, law: "Reciprocal of Sine", formula: "sin(θ) = 1 / csc(θ)", explanation: "Sine is reciprocal of cosecant" },
            { id: 10, law: "Reciprocal of Cosine", formula: "cos(θ) = 1 / sec(θ)", explanation: "Cosine is reciprocal of secant" },
            { id: 11, law: "Reciprocal of Tangent", formula: "tan(θ) = 1 / cot(θ)", explanation: "Tangent is reciprocal of cotangent" },
            { id: 12, law: "Reciprocal of Cosecant", formula: "csc(θ) = 1 / sin(θ)", explanation: "Cosecant is reciprocal of sine" },
            { id: 13, law: "Reciprocal of Secant", formula: "sec(θ) = 1 / cos(θ)", explanation: "Secant is reciprocal of cosine" },
            { id: 14, law: "Reciprocal of Cotangent", formula: "cot(θ) = 1 / tan(θ)", explanation: "Cotangent is reciprocal of tangent" }
          ],
        "Pythagorean Identities": [
          { id: 15, law: "Sine and Cosine", formula: "sin²(θ) + cos²(θ) = 1", explanation: "Fundamental identity derived directly from the [unit circle](!/visual-tools/unit-circle) .", topic: "Pythagorean" },
          { id: 16, law: "Tangent and Secant", formula: "1 + tan²(θ) = sec²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by cos²", topic: "Pythagorean" },
          { id: 17, law: "Cotangent and Cosecant", formula: "1 + cot²(θ) = csc²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by sin²", topic: "Pythagorean" }
        ],
      
        "Triangle Geometry Identities": [
    {
      id: 18,
      law: "Law of Sines",
      formula: "sin(A)/a = sin(B)/b = sin(C)/c",
      explanation: "Relates the ratios of angles and opposite sides in any triangle"
    },
    {
      id: 19,
      law: "Law of Cosines (Standard Form)",
      formula: "c² = a² + b² − 2ab·cos(C)",
      explanation: "Generalization of the Pythagorean Theorem for any triangle"
    },
    {
      id: 20,
      law: "Law of Cosines (Alternative Forms)",
      formula: "a² = b² + c² − 2bc·cos(A);\n b² = a² + c² − 2ac·cos(B)",
      explanation: "Same law applied for other sides of the triangle"
    }
  ],

  "Even-Odd Identities": [
    {
      id: 21,
      law: "Odd Sine",
      formula: "sin(−θ) = −sin(θ)",
      explanation: "Sine is an odd function; reflects through origin"
    },
    {
      id: 22,
      law: "Even Cosine",
      formula: "cos(−θ) = cos(θ)",
      explanation: "Cosine is an even function; symmetric about y-axis"
    },
    {
      id: 23,
      law: "Odd Tangent",
      formula: "tan(−θ) = −tan(θ)",
      explanation: "Tangent is odd; sine is odd and cosine is even"
    },
    {
      id: 24,
      law: "Odd Cosecant",
      formula: "csc(−θ) = −csc(θ)",
      explanation: "Cosecant is reciprocal of sine, so also odd"
    },
    {
      id: 25,
      law: "Even Secant",
      formula: "sec(−θ) = sec(θ)",
      explanation: "Secant is reciprocal of cosine, so also even"
    },
    {
      id: 26,
      law: "Odd Cotangent",
      formula: "cot(−θ) = −cot(θ)",
      explanation: "Cotangent is reciprocal of tangent, so also odd"
    }
  ],
        "Co-Function Identities": [
    {
      id: 27,
      law: "Sine of Complement",
      formula: "sin(π/2 − θ) = cos(θ)",
      explanation: "Sine of an angle's complement equals cosine"
    },
    {
      id: 28,
      law: "Cosine of Complement",
      formula: "cos(π/2 − θ) = sin(θ)",
      explanation: "Cosine of an angle's complement equals sine"
    },
    {
      id: 29,
      law: "Tangent of Complement",
      formula: "tan(π/2 − θ) = cot(θ)",
      explanation: "Tangent of complement equals cotangent"
    },
    {
      id: 30,
      law: "Cotangent of Complement",
      formula: "cot(π/2 − θ) = tan(θ)",
      explanation: "Cotangent of complement equals tangent"
    },
    {
      id: 31,
      law: "Secant of Complement",
      formula: "sec(π/2 − θ) = csc(θ)",
      explanation: "Secant of complement equals cosecant"
    },
    {
      id: 32,
      law: "Cosecant of Complement",
      formula: "csc(π/2 − θ) = sec(θ)",
      explanation: "Cosecant of complement equals secant"
    }
  ],

   "Periodicity Identities": [
    {
      id: 33,
      law: "Sine Periodicity",
      formula: "sin(θ + 2π) = sin(θ)",
      explanation: "Sine repeats every 2π"
    },
    {
      id: 34,
      law: "Cosine Periodicity",
      formula: "cos(θ + 2π) = cos(θ)",
      explanation: "Cosine repeats every 2π"
    },
    {
      id: 35,
      law: "Tangent Periodicity",
      formula: "tan(θ + π) = tan(θ)",
      explanation: "Tangent repeats every π"
    },
    {
      id: 36,
      law: "Cotangent Periodicity",
      formula: "cot(θ + π) = cot(θ)",
      explanation: "Cotangent repeats every π"
    },
    {
      id: 37,
      law: "Secant Periodicity",
      formula: "sec(θ + 2π) = sec(θ)",
      explanation: "Secant repeats every 2π"
    },
    {
      id: 38,
      law: "Cosecant Periodicity",
      formula: "csc(θ + 2π) = csc(θ)",
      explanation: "Cosecant repeats every 2π"
    }
  ],

      
        // "Even-Odd Identities": [
        //   { id: 10, law: "Even Cosine", formula: "cos(−θ) = cos(θ)", explanation: "Cosine is an even function", topic: "Parity" },
        //   { id: 11, law: "Odd Sine", formula: "sin(−θ) = −sin(θ)", explanation: "Sine is an odd function", topic: "Parity" },
        //   { id: 12, law: "Odd Tangent", formula: "tan(−θ) = −tan(θ)", explanation: "Tangent is an odd function", topic: "Parity" }
        // ],

        "Shift Identities": [
    {
      id: 38,
      law: "Sine Shift by π",
      formula: "sin(θ + π) = −sin(θ)",
      explanation: "Sine shifts by π with a sign flip"
    },
    {
      id: 39,
      law: "Cosine Shift by π",
      formula: "cos(θ + π) = −cos(θ)",
      explanation: "Cosine shifts by π with a sign flip"
    },
    {
      id: 40,
      law: "Tangent Shift by π",
      formula: "tan(θ + π) = tan(θ)",
      explanation: "Tangent is periodic with π and does not flip"
    },
    {
      id: 41,
      law: "Sine Shift by π/2",
      formula: "sin(θ + π/2) = cos(θ)",
      explanation: "Sine shifted by π/2 becomes cosine"
    },
    {
      id: 42,
      law: "Cosine Shift by π/2",
      formula: "cos(θ + π/2) = −sin(θ)",
      explanation: "Cosine shifted by π/2 becomes negative sine"
    },
    {
      id: 43,
      law: "Tangent Shift by π/2",
      formula: "tan(θ + π/2) = −cot(θ)",
      explanation: "Tangent shifted by π/2 becomes negative cotangent"
    }
  ],
  
  "Angle Sum Identities": [
    {
      id: 44,
      law: "Sine of Sum",
      formula: "sin(a + b) = sin(a)cos(b) + cos(a)sin(b)",
      explanation: "Expands sine of a sum"
    },
    {
      id: 45,
      law: "Cosine of Sum",
      formula: "cos(a + b) = cos(a)cos(b) − sin(a)sin(b)",
      explanation: "Expands cosine of a sum"
    },
    {
      id: 46,
      law: "Tangent of Sum",
      formula: "tan(a + b) = (tan(a) + tan(b)) / (1 − tan(a)tan(b))",
      explanation: "Expands tangent of a sum"
    },
    {
      id: 47,
      law: "Cotangent of Sum",
      formula: "cot(a + b) = (cot(a)cot(b) − 1) / (cot(a) + cot(b))",
      explanation: "Expands cotangent of a sum"
    },
    {
      id: 48,
      law: "Secant of Sum",
      formula: "sec(a + b) = 1 / [cos(a + b)]",
      explanation: "Reciprocal of cosine of sum"
    },
    {
      id: 49,
      law: "Cosecant of Sum",
      formula: "csc(a + b) = 1 / [sin(a + b)]",
      explanation: "Reciprocal of sine of sum"
    }
  ],

  "Angle Difference Identities": [
    {
      id: 50,
      law: "Sine of Difference",
      formula: "sin(a − b) = sin(a)cos(b) − cos(a)sin(b)",
      explanation: "Expands sine of a difference"
    },
    {
      id: 51,
      law: "Cosine of Difference",
      formula: "cos(a − b) = cos(a)cos(b) + sin(a)sin(b)",
      explanation: "Expands cosine of a difference"
    },
    {
      id: 52,
      law: "Tangent of Difference",
      formula: "tan(a − b) = (tan(a) − tan(b)) / (1 + tan(a)tan(b))",
      explanation: "Expands tangent of a difference"
    },
    {
      id: 53,
      law: "Cotangent of Difference",
      formula: "cot(a − b) = (cot(a)cot(b) + 1) / (cot(b) − cot(a))",
      explanation: "Expands cotangent of a difference"
    },
    {
      id: 54,
      law: "Secant of Difference",
      formula: "sec(a − b) = 1 / [cos(a − b)]",
      explanation: "Reciprocal of cosine of difference"
    },
    {
      id: 55,
      law: "Cosecant of Difference",
      formula: "csc(a − b) = 1 / [sin(a − b)]",
      explanation: "Reciprocal of sine of difference"
    }
  ],

        "Double Angle Identities": [
            {
              id: 56,
              law: "Double Angle for Sine",
              formula: "sin(2θ) = 2sin(θ)cos(θ)",
              explanation: "Derived from the sine of a sum"
            },
            {
              id: 57,
              law: "Double Angle for Cosine",
              formula: "cos(2θ) = cos²(θ) − sin²(θ)",
              explanation: "Standard form from the cosine of a sum"
            },
            {
              id: 58,
              law: "Double Angle for Cosine",
              formula: "cos(2θ) = 2cos²(θ) − 1",
              explanation: "Alternate form using cosine only"
            },
            {
              id: 59,
              law: "Double Angle for Cosine",
              formula: "cos(2θ) = 1 − 2sin²(θ)",
              explanation: "Alternate form using sine only"
            },
            {
              id: 60,
              law: "Double Angle for Tangent",
              formula: "tan(2θ) = (2tan(θ)) / (1 − tan²(θ))",
              explanation: "Derived from the tangent of a sum"
            },
            {
              id: 61,
              law: "Double Angle for Cotangent",
              formula: "cot(2θ) = (cot²(θ) − 1) / (2cot(θ))",
              explanation: "Derived from reciprocal of tangent double angle"
            }
          ],

                  "Half Angle Identities": [
            {
              id: 62,
              law: "Half Angle for Sine",
              formula: "sin²(θ) = (1 − cos(2θ)) / 2",
              explanation: "Derived from cosine double angle identity"
            },
            {
              id: 63,
              law: "Half Angle for Cosine",
              formula: "cos²(θ) = (1 + cos(2θ)) / 2",
              explanation: "Derived from cosine double angle identity"
            },
            {
              id: 64,
              law: "Half Angle for Tangent",
              formula: "tan(θ/2) = ±√[(1 − cos(θ)) / (1 + cos(θ))]",
              explanation: "Square root form derived from sine and cosine"
            },
            {
              id: 65,
              law: "Half Angle for Tangent",
              formula: "tan(θ/2) = sin(θ) / (1 + cos(θ))",
              explanation: "Derived by rationalizing tangent expression"
            },
            {
              id: 66,
              law: "Half Angle for Tangent",
              formula: "tan(θ/2) = (1 − cos(θ)) / sin(θ)",
              explanation: "Alternate rational form for tangent"
            },
            {
              id: 67,
              law: "Half Angle for Cotangent",
              formula: "cot(θ/2) = ±√[(1 + cos(θ)) / (1 − cos(θ))]",
              explanation: "Reciprocal of the square root tangent identity"
            }
          ],

          "Triple Angle Identities": [
              {
                id: 68,
                law: "Triple Angle for Sine",
                formula: "sin(3θ) = 3sin(θ) − 4sin³(θ)",
                explanation: "Expanded using angle addition identity"
              },
              {
                id: 69,
                law: "Triple Angle for Cosine",
                formula: "cos(3θ) = 4cos³(θ) − 3cos(θ)",
                explanation: "Expanded using angle addition identity"
              },
              {
                id: 70,
                law: "Triple Angle for Tangent",
                formula: "tan(3θ) = (3tan(θ) − tan³(θ)) / (1 − 3tan²(θ))",
                explanation: "Derived from tangent sum identity"
              },
              {
                id: 71,
                law: "Triple Angle for Cotangent",
                formula: "cot(3θ) = (cot³(θ) − 3cot(θ)) / (3cot²(θ) − 1)",
                explanation: "Derived from reciprocal of tangent triple angle"
              },
              {
                id: 72,
                law: "Triple Angle for Secant",
                formula: "sec(3θ) = 1 / (4cos³(θ) − 3cos(θ))",
                explanation: "Reciprocal of cosine triple angle"
              },
              {
                id: 73,
                law: "Triple Angle for Cosecant",
                formula: "csc(3θ) = 1 / (3sin(θ) − 4sin³(θ))",
                explanation: "Reciprocal of sine triple angle"
              }
            ],

            "Power-Reducing Identities": [
    {
      id: 74,
      law: "Power-Reducing for Sine",
      formula: "sin²(θ) = (1 − cos(2θ)) / 2",
      explanation: "Reduces power of sine using double angle"
    },
    {
      id: 75,
      law: "Power-Reducing for Cosine",
      formula: "cos²(θ) = (1 + cos(2θ)) / 2",
      explanation: "Reduces power of cosine using double angle"
    },
    {
      id: 76,
      law: "Power-Reducing for Tangent",
      formula: "tan²(θ) = (1 − cos(2θ)) / (1 + cos(2θ))",
      explanation: "Derived from sin²/cos² power-reduced forms"
    },
    {
      id: 77,
      law: "Power-Reducing for Cotangent",
      formula: "cot²(θ) = (1 + cos(2θ)) / (1 − cos(2θ))",
      explanation: "Reciprocal form of tangent power-reduction"
    },
    {
      id: 78,
      law: "Power-Reducing for Secant",
      formula: "sec²(θ) = 2 / (1 + cos(2θ))",
      explanation: "Derived by inverting cos² power identity"
    },
    {
      id: 79,
      law: "Power-Reducing for Cosecant",
      formula: "csc²(θ) = 2 / (1 − cos(2θ))",
      explanation: "Derived by inverting sin² power identity"
    }
  ],

  "Product-to-Sum Identities": [
    {
      id: 80,
      law: "Product-to-Sum for sin(a)sin(b)",
      formula: "sin(a)sin(b) = ½[cos(a − b) − cos(a + b)]",
      explanation: "Converts product of sines into sum of cosines"
    },
    {
      id: 81,
      law: "Product-to-Sum for cos(a)cos(b)",
      formula: "cos(a)cos(b) = ½[cos(a − b) + cos(a + b)]",
      explanation: "Converts product of cosines into sum of cosines"
    },
    {
      id: 82,
      law: "Product-to-Sum for sin(a)cos(b)",
      formula: "sin(a)cos(b) = ½[sin(a + b) + sin(a − b)]",
      explanation: "Converts product of sine and cosine into sum of sines"
    },
    {
      id: 83,
      law: "Product-to-Sum for cos(a)sin(b)",
      formula: "cos(a)sin(b) = ½[sin(a + b) − sin(a − b)]",
      explanation: "Converts product of cosine and sine into difference of sines"
    },
    {
      id: 84,
      law: "Product-to-Sum for tan(a)tan(b)",
      formula: "tan(a)tan(b) = [cos(a − b) − cos(a + b)] / [cos(a − b) + cos(a + b)]",
      explanation: "Derived using tangent in terms of sine and cosine"
    },
    {
      id: 85,
      law: "Product-to-Sum for cot(a)cot(b)",
      formula: "cot(a)cot(b) = [cos(a − b) + cos(a + b)] / [cos(a − b) − cos(a + b)]",
      explanation: "Derived using cotangent in terms of cosine and sine"
    }
  ],

  "Sum-to-Product Identities": [
    {
      id: 86,
      law: "Sum-to-Product for sin(a) + sin(b)",
      formula: "sin(a) + sin(b) = 2sin[(a + b)/2]cos[(a − b)/2]",
      explanation: "Converts sum of sines into product of sine and cosine"
    },
    {
      id: 87,
      law: "Sum-to-Product for sin(a) − sin(b)",
      formula: "sin(a) − sin(b) = 2cos[(a + b)/2]sin[(a − b)/2]",
      explanation: "Converts difference of sines into product"
    },
    {
      id: 88,
      law: "Sum-to-Product for cos(a) + cos(b)",
      formula: "cos(a) + cos(b) = 2cos[(a + b)/2]cos[(a − b)/2]",
      explanation: "Converts sum of cosines into product"
    },
    {
      id: 89,
      law: "Sum-to-Product for cos(a) − cos(b)",
      formula: "cos(a) − cos(b) = −2sin[(a + b)/2]sin[(a − b)/2]",
      explanation: "Converts difference of cosines into negative product of sines"
    },
    {
      id: 90,
      law: "Sum-to-Product for tan(a) + tan(b)",
      formula: "tan(a) + tan(b) = sin(a + b) / [cos(a)cos(b)]",
      explanation: "Derived by expressing tangent in terms of sine and cosine"
    },
    {
      id: 91,
      law: "Sum-to-Product for tan(a) − tan(b)",
      formula: "tan(a) − tan(b) = sin(a − b) / [cos(a)cos(b)]",
      explanation: "Difference of tangents expressed as sine over product of cosines"
    }
  ],


      };

      const config = {
        displayColumns: ["law", "formula", "explanation"],  // Show name, formula, and explanation
        copyableFields: ["formula"],  // Allow copying just the formula
        searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      };

      // Operation A demonstration units: frozen tool state + attached explanation
      // panel + tool link, one frame. Rendered as content-array items.
      const shiftFrames = shiftIdentityDiagrams()
      const tripleFrames = tripleAngleDiagrams()
      const demoUnits = {
        shiftQuarterTurn: demoUnitFrame({
          svg: shiftFrames['sin:halfPi'],
          caption: 'sin(&#952; + &#960;/2) = cos &#952;, frozen at &#952; = 35&#176;',
          text: 'Adding &#960;/2 turns the point P a quarter turn to P&#8242;. The quarter turn swaps the legs: the height of P&#8242; is as long as the horizontal leg of P, so sin(&#952; + &#960;/2) = cos &#952;. Switch the function and the shift on the',
          href: '/trigonometry/visual-tools/shift-identities',
          linkText: 'shift identities tool',
        }),
        tripleSine: demoUnitFrame({
          svg: tripleFrames.sin.overview,
          caption: 'sin 3&#952; derived step by step',
          text: 'The derivation writes 3&#952; as 2&#952; + &#952;, applies the sum identity, expands the double-angle terms and replaces cos&#178;&#952; by 1 &#8722; sin&#178;&#952;, ending at sin 3&#952; = 3 sin &#952; &#8722; 4 sin&#179;&#952;. Step forward and back through each line on the',
          href: '/trigonometry/visual-tools/triple-angle-identities',
          linkText: 'triple angle identities tool',
        }),
        pythagoreanProof: demoUnitFrame({
          svg: pythagoreanDiagrams.cos.overview,
          caption: 'cos θ from the right triangle in the unit circle',
          text: 'The point at angle θ on the unit circle makes a right triangle with hypotenuse 1, vertical leg sin θ and horizontal leg cos θ. Pythagoras gives cos&#178;θ + sin&#178;θ = 1, so cos θ = &#8730;(1 &#8722; sin&#178;θ) whenever cos θ is positive, as at the angle shown. Step through the proof and the other five identities on the',
          href: '/trigonometry/visual-tools/pythagorean-identities',
          linkText: 'Pythagorean identities tool',
        }),
        cosineEven: demoUnitFrame({
          svg: negativeAngleDiagrams.cos.overview,
          caption: 'cos(&#8722;θ) = cos θ: a reflection keeps x',
          text: 'Negating the angle reflects the point P across the x-axis to P&#8242;. The reflection keeps the x-coordinate and flips the y-coordinate, so cos(&#8722;θ) = cos θ: cosine is even. The y-coordinate, sine, changes sign, which makes sine odd. Compare all six functions on the',
          href: '/trigonometry/visual-tools/negative-angle-identities',
          linkText: 'negative angle identities tool',
        }),
        // harvested, no href: this section's prose already links the angle
        // explorer, and one link per term per section holds
        coFunction: demoUnitFrame({
          svg: angleExplorerDiagrams.concepts.complementary,
          caption: 'A complementary pair, frozen at 35&#176; and 55&#176;',
          text: 'The two acute angles of a right triangle always add to 90&#176;, so each is the other&#8217;s complement. The side opposite one of them is the side adjacent to the other &#8212; which is why the sine of 35&#176; and the cosine of 55&#176; are the same number, and why every co-function pair works the same way.',
        }),
        reciprocal: demoUnitFrame({
          svg: basicIdentitiesDiagrams.csc.overview,
          caption: 'Reciprocal pair, frozen',
          text: 'On the unit circle the vertical leg is sin&#8202;&#952;, while the graph beside it tracks its reciprocal csc&#8202;&#952; = 1/sin&#8202;&#952; &#8212; growing without bound exactly where the sine leg shrinks toward zero. Step through this pairing live, function by function, on the',
          href: '/trigonometry/visual-tools/basic-identities',
          linkText: 'basic identities explorer',
        }),
        periodicity: demoUnitFrame({
          svg: [trigFunctionsGraphDiagrams.sin, trigFunctionsGraphDiagrams.tan],
          caption: 'Two periods, side by side',
          text: 'The sine wave repeats its full shape every 2&#960;, while tangent restarts every &#960;, each cycle fenced by its asymptotes. Trace any of the six functions through several cycles yourself on the',
          href: '/trigonometry/visual-tools/functions-graphs',
          linkText: 'trigonometric functions graphs',
          textAfterLink: ' tool.',
        }),
        double: demoUnitFrame({
          svg: doubleAngleDiagrams.sin.overview,
          caption: 'Geometric proof, final step',
          text: 'The closing step of the geometric proof of sin(2&#952;) = 2&#8202;sin&#8202;&#952;&#8202;cos&#8202;&#952; on the unit circle. Play the whole proof through step by step &#8212; for sine and cosine alike &#8212; on the',
          href: '/trigonometry/visual-tools/double-angle-identities',
          linkText: 'double angle identities explorer',
        }),
        half: demoUnitFrame({
          svg: halfAngleDiagrams.sin.overview,
          caption: 'Half-angle derivation, final step',
          text: 'The geometric derivation of the sine half-angle identity, frozen at its last step &#8212; the half-chord read straight off the unit circle. Play the full derivation, and its cosine counterpart, on the',
          href: '/trigonometry/visual-tools/half-angle-identities',
          linkText: 'half angle identities explorer',
        }),
      };

// Six questions written from scratch — this page had no faqQuestions object.
// Section headings already own "what are Pythagorean identities" and the like,
// so these target the gaps: proving, notation traps, sign choice, and what to
// actually memorise.
const faqQuestions = {
  obj1: {
    question: "How do you prove a trigonometric identity?",
    answer: "Work on one side only and transform it until it matches the other. Converting everything to sine and cosine is the usual first move, followed by a Pythagorean substitution or combining fractions over a common denominator. Never move terms across the equals sign, since that assumes the result you are trying to establish. Pick the messier side to start from.",
    sectionId: "pythagorean"
  },
  obj2: {
    question: "What is the difference between a trigonometric identity and a trigonometric equation?",
    answer: "An identity holds for every value of the angle where both sides are defined, so there is nothing to solve. An equation holds only for particular angles, and solving means finding them. Comparing them directly: sin²θ + cos²θ = 1 is an identity, while sin θ = 0.5 is an equation with specific solutions. See [trigonometric equations](!/trigonometry/equations).",
    sectionId: "definition"
  },
  obj3: {
    question: "Why does sin²θ + cos²θ = 1?",
    answer: "It is the Pythagorean theorem written on the unit circle. Every point on that circle satisfies x² + y² = 1, and the coordinates of the point at angle θ are exactly cos θ and sin θ. Substituting gives the identity directly. The other two Pythagorean identities follow by dividing through by cos²θ or sin²θ. Watch it on the [unit circle](!/visual-tools/unit-circle).",
    sectionId: "pythagorean"
  },
  obj4: {
    question: "Why does sin²θ mean (sin θ)² but sin⁻¹θ does not mean 1/sin θ?",
    answer: "The superscript is doing two different jobs. A positive exponent applies to the output, so sin²θ is the value squared. The exponent −1 is reserved for the inverse function instead, meaning the angle whose sine is that value. The reciprocal 1/sin θ has its own name: cosecant. See the [inverse function notation note](!/trigonometry/inverse-functions).",
    sectionId: "pythagorean"
  },
  obj5: {
    question: "How do you choose the sign in a half-angle formula?",
    answer: "The formula supplies both signs and the quadrant decides which one applies. Halve the original angle first, locate the result on the circle, then take the sign that the function actually has in that quadrant. Sine is positive in quadrants one and two, cosine in one and four. Step through it on the [half-angle explorer](!/trigonometry/visual-tools/half-angle-identities).",
    sectionId: "half"
  },
  obj6: {
    question: "Which trigonometric identities should you memorise?",
    answer: "Four groups carry almost everything: the reciprocal definitions, the three Pythagorean identities, and the sum and difference formulas for sine and cosine. Double angle, half angle, and power reducing all follow from the sum formulas by substitution, so they can be rebuilt rather than memorised. Product-to-sum and triple angle are worth looking up when needed.",
    sectionId: "summary"
  }
}


      const introContent={
        id:'intro',
        title:'Trigonometric Identities : Practical Guide',
        content:`Trigonometric identities are equations involving trigonometric functions that are true for all values in their domains.
        Knowing those identities and understanding them is  important because they:
     ▪  Simplify complex expressions
     ▪  Help solving equations not easily solvable in their original form
     ▪  May be useful in proving mathematical theorems
    ▪ Model periodic phenomena in physics, engineering, and other fields
    ▪  Transform expressions to more useful forms for integration or differentiation



    `
      }    
      

  const trigIdentityOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Sixteen identity families in four groups',
    preface: 'The trigonometric identities on this page fall into four groups by where they come from: the definitions, symmetry, angle arithmetic, and algebraic rewriting.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Know the source, rebuild the rest',
    conclusion: 'Most identities can be derived from a few foundational ones; the groups show which family each one comes from.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Trigonometric identities', def: '16 families', children: [
        { id: 'found', name: 'Foundational', children: [
          { id: 'def', name: 'Definition-based', def: 'triangle sides' },
          { id: 'rec', name: 'Reciprocal', def: 'multiplicative-inverse pairs' },
          { id: 'pyth', name: 'Pythagorean', example: 'sin²θ + cos²θ = 1' },
          { id: 'tri', name: 'Triangle geometry', def: 'any triangle' },
        ] },
        { id: 'sym', name: 'Symmetry', children: [
          { id: 'eo', name: 'Even-odd', example: 'f(−θ)' },
          { id: 'co', name: 'Co-function', example: 'f(π/2 − θ)' },
          { id: 'per', name: 'Periodicity', example: 'f(θ + period) = f(θ)' },
          { id: 'shift', name: 'Shift', example: 'f(θ + π), f(θ + π/2)' },
        ] },
        { id: 'arith', name: 'Angle arithmetic', children: [
          { id: 'sum', name: 'Sum', example: 'f(a + b)' },
          { id: 'diff', name: 'Difference', example: 'f(a − b)' },
          { id: 'double', name: 'Double', example: 'f(2θ)' },
          { id: 'triple', name: 'Triple', example: 'f(3θ)' },
          { id: 'half', name: 'Half', example: 'f(θ/2)' },
        ] },
        { id: 'alg', name: 'Algebraic transform', children: [
          { id: 'pr', name: 'Power-reducing', example: 'f²(θ) via f(2θ)' },
          { id: 'ps', name: 'Product-to-sum' },
          { id: 'sp', name: 'Sum-to-product' },
        ] },
      ] },
    ],
  };

    return{
        props:{
    trigIdentityOutline,

            trigIdentitiesData,
            faqQuestions,
            config,
            sectionsContent,
            introContent,
            keyWords,
            summaryTable,
            demoUnits,

        }
    }
}

export default function TrigoIdentitiesPage({trigIdentityOutline, trigIdentitiesData ,config ,sectionsContent,introContent, summaryTable, demoUnits, faqQuestions}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const identitiesSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:'',
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
        sectionsContent.definition.before,
         
         <div key={51} style={{marginLeft:'50px',marginRight:'50px'}}>
    <ExpandableTable key={1}
    data={trigIdentitiesData["Definition-based Identities"]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
     sectionsContent.definition.after
   
      ]
    },
    {
      id:'reciprocal',
      title:sectionsContent.reciprocal.title,
      link:'',
      content:[
         sectionsContent.reciprocal.before,
        <div key={51} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={2}
        data={trigIdentitiesData["Reciprocal Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
        sectionsContent.reciprocal.after,
        <div key={'unit-reciprocal'} dangerouslySetInnerHTML={{ __html: demoUnits.reciprocal }} />,
        `With these six pairings internalized, every rational trigonometric expression becomes negotiable — whichever function a problem hands you, its reciprocal is one flip away.`,
        sectionsContent.pitfallBoxes.reciprocal,

      ]
    },
     {
      id:'pythagorean',
      title: sectionsContent.pythagorean.title,
      link:'',
      content:[

        sectionsContent.pythagorean.before,

        <div key={53} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={3}
        data={trigIdentitiesData["Pythagorean Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
          sectionsContent.pythagorean.after,
                  <div key={'unit-pythagoreanProof'} dangerouslySetInnerHTML={{ __html: demoUnits.pythagoreanProof }} />,
            `Dividing that equation by cos²θ or sin²θ gives the other two Pythagorean identities in the table.`,
            sectionsContent.pitfallBoxes.pythagorean,
        
      ]
    },
     {
      id:'triangle',
      title: sectionsContent.triangle.title,
      link:'',
      content:[

        sectionsContent.triangle.before,

        <div key={54} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={4}
        data={trigIdentitiesData["Triangle Geometry Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

         sectionsContent.triangle.after,

        
        
      ]
    },
      {
      id:'even-odd',
      title:sectionsContent.even_odd.title,
      link:'',
      content:[
          sectionsContent.even_odd.before,
        <div key={55} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={5}
        data={trigIdentitiesData["Even-Odd Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.even_odd.after,
                  <div key={'unit-cosineEven'} dangerouslySetInnerHTML={{ __html: demoUnits.cosineEven }} />,
            `Secant follows cosine and is even; tangent, cotangent and cosecant follow sine and are odd.`,
            sectionsContent.pitfallBoxes.even_odd,

        
      ]
    },
     {
      id:'co-function',
      title: sectionsContent.co_function.title,
      link:'',
      content:[
         sectionsContent.co_function.before,
        <div key={56} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={6}
        data={trigIdentitiesData["Co-Function Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.co_function.after,
        <div key={'unit-coFunction'} dangerouslySetInnerHTML={{ __html: demoUnits.coFunction }} />,
        `The same swap pairs tangent with cotangent and secant with cosecant, with no new reasoning needed.`,


        
        
      ]
    },
      {
      id:'periodicity',
      title:sectionsContent.periodicity.title,
      link:'',
      content:[
         sectionsContent.periodicity.before,
        <div key={57} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={7}
        data={trigIdentitiesData["Periodicity Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.periodicity.after,
         <div key={'unit-periodicity'} dangerouslySetInnerHTML={{ __html: demoUnits.periodicity }} />,
         `However far an angle wanders, periodicity brings its values home — which is why no trigonometric computation ever truly needs an angle outside a single cycle.`,

      ]
    },
     {
      id:'shift',
      title:sectionsContent.shift.title,
      link:'',
      content:[
         sectionsContent.shift.before,
        <div key={68} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={8}
        data={trigIdentitiesData["Shift Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.shift.after,        
                  <div key={'unit-shiftQuarterTurn'} dangerouslySetInnerHTML={{ __html: demoUnits.shiftQuarterTurn }} />,
         `A half turn, θ + π, sends both coordinates to their negatives instead.`,
        
      ]
    },
      {
      id:'sum',
      title: sectionsContent.sum.title,
      link:'',
      content:[

          sectionsContent.sum.before,
        <div key={69} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={9}
        data={trigIdentitiesData["Angle Sum Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.sum.after,
         sectionsContent.pitfallBoxes.sum,
        
      ]
    },
      {
      id:'difference',
      title: sectionsContent.difference.title,
      link:'',
      content:[
        sectionsContent.difference.before,
        <div key={60} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={10}
        data={trigIdentitiesData["Angle Difference Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.difference.after,
         sectionsContent.pitfallBoxes.difference,
        
        
      ]
    },
      {
      id:'half',
      title:sectionsContent.half.title,
      link:'',
      content:[
        sectionsContent.half.before,

        <div key={62} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={12}
        data={trigIdentitiesData["Half Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.half.after,
         <div key={'unit-half'} dangerouslySetInnerHTML={{ __html: demoUnits.half }} />,
         `With halves as with doubles, the lesson is the same: every fractional angle is reachable from whole ones — at the price of a square root and a careful sign check.`,
         sectionsContent.pitfallBoxes.half,

      ]
    },
      {
      id:'double',
      title:sectionsContent.double.title,
      link:'',
      content:[
            sectionsContent.double.before,

        <div key={61} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={11}
        data={trigIdentitiesData["Double Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

          sectionsContent.double.after,
          <div key={'unit-double'} dangerouslySetInnerHTML={{ __html: demoUnits.double }} />,
          `Compact as they look, these doubled forms are the hinge between single-angle values and the power-reducing, half-angle, and integration techniques that follow.`,
          sectionsContent.pitfallBoxes.double,


       
        
      ]
    },

   

      {
      id:'triple',
      title:sectionsContent.triple.title,
      link:'',
      content:[
        sectionsContent.triple.before,
        <div key={63} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={13}
        data={trigIdentitiesData["Triple Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.triple.after,
                  <div key={'unit-tripleSine'} dangerouslySetInnerHTML={{ __html: demoUnits.tripleSine }} />,
         `The cosine version runs the same way and ends at cos 3θ = 4 cos³θ − 3 cos θ.`,

      ]
    },

       {
      id:'power-reducing',
      title:sectionsContent.power_reducing.title,
      link:'',
      content:[
         sectionsContent.power_reducing.before,
        <div key={64} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={14}
        data={trigIdentitiesData["Power-Reducing Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.power_reducing.after,
         `@academic[punchline:Squaring trades a power for a doubled angle: $\\sin^2\\theta$ and $\\cos^2\\theta$ are waves in $2\\theta$ around the level one half.]@`,
       
        
      ]
    },

      {
      id:'product-sum',
      title:sectionsContent.product_sum.title,
      link:'',
      content:[
          sectionsContent.product_sum.before,
        <div key={65} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={15}
        data={trigIdentitiesData["Product-to-Sum Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.product_sum.after,
         `@academic[punchline:A product of two waves is always a sum of two waves, at the sum and the difference of the angles.]@`,

        
        
      ]
    },

      {
      id:'sum-product',
      title:sectionsContent.sum_product.title,
      link:'',
      content:[

         sectionsContent.sum_product.before,
        <div key={66} style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable key={16}
        data={trigIdentitiesData["Sum-to-Product Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         sectionsContent.sum_product.after,

        
        
      ]
    },

    {
      id:'pitfalls',
      title: sectionsContent.pitfalls.title,
      link: '',
      content:[
        sectionsContent.pitfalls.content,
      ]
    },

    // NEW summary capstone section
    {
      id:'summary',
      title: sectionsContent.summary.title,
      link: '',
      content:[
        sectionsContent.summary.before,
        <div key={'summary-table'} style={tableWrapStyle}
             dangerouslySetInnerHTML={{ __html: summaryTable }} />,
        sectionsContent.summary.after,
        <DiagramFrame
          key={'summary-diagram'}
          id="trig-identity-families-outline"
          title="Trigonometric identity families"
          source="/trigonometry/identities"
        >
          <TaxonomyOutline data={trigIdentityOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
        </DiagramFrame>,
      ]
    },

    //  {
    //   id:'inverse',
    //   title:'Inverse Trigonometric Identities',
    //   link:'',
    //   content:[

    //     <div style={{marginLeft:'50px',marginRight:'50px'}}>
    //     <ExpandableTable data={trigIdentitiesData["Inverse Trigonometric Identities"]}
    //      displayColumns={ ["law", "formula", "explanation"]}
    //      copyableFields={["formula"]}
    //      includedFields={ ["law", "formula", "explanation"]} />
    //      </div> ,

        
    //   ]
    // }



     // {
    //   id:'',
    //   title:'',
    //   link:'',
    //   content:[
        
    //   ]
    // }

    // faq: rendered component — must be built here, not in getStaticProps
    {
      id:'faq',
      title: sectionsContent.faq.title,
      link: '',
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
  {/* Essential Meta Tags */}
  <title>Trigonometric Identities: Complete Guide with Formulas | LearnMathClass</title>
  <meta name="description" content="Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities with formulas and explanations." />
  <meta name="keywords" content="trigonometric identities, trig identities, trigonometry, verifying trig identities, simplifying trig identities, proving trigonometric identities" />
  <meta charset="utf-8" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.learnmathclass.com/trigonometry/identities" />

  {/* Open Graph for Social Sharing */}
  <meta property="og:title" content="Trigonometric Identities: Complete Guide with Formulas" />
  <meta property="og:description" content="Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities." />
  <meta property="og:url" content="https://www.learnmathclass.com/trigonometry/identities" />
  <meta property="og:type" content="article" />

  {/* Basic Structured Data */}
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Trigonometric Identities: Complete Guide with Formulas",
      "description": "Master trigonometric identities with our comprehensive guide. Learn Pythagorean, angle sum, double angle, and all essential trig identities.",
      "url": "https://www.learnmathclass.com/trigonometry/identities"
    }`}
  </script>

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>
    {/* <GenericNavbar/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <OperaSidebar 
          side='right'
          // topOffset='65px' 
          sidebarWidth='45px'
          panelWidth='300px'
          
          iconColor='white'
          panelBackgroundColor='#f2f2f2'/> 
    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Trigonometric Identities</h1>
    {/* <div style={{transform:'scale(0.9)',marginLeft:'100px',marginRight:'100px'}}>
    <DataWrapper2 data={trigIdentitiesData} config={config} searchable={false}/>
    </div> */}
    <SectionTableOfContents sections={identitiesSections}/>
    <br/>
    <br/>
    <br/>
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#34383c"
/>
    <br/>
      <div style={{maxWidth:'956px',margin:'0 auto'}}>
        <AffiliateBlock variant="strip" {...COURSES.trigonometry} headline="Stop memorising identities. Learn where they come from." />
      </div>
      <KeyTermsCard
      id="0"
      title={sectionsContent.obj0.title}
      content={sectionsContent.obj0.content}
      after={sectionsContent.obj0.after}
      variant="light"
    />
    <br/>
    <Sections sections={identitiesSections.slice(1)}/>
   
    <br/>
    <br/>
    {/* <ScrollUpButton/> */}
    </>
  )
}