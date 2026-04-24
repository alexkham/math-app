// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import '../../../pages/pages.css'



// export async function getStaticProps(){

//   const introContent = {
//     id: "intro",
//     title: "Introduction to Derivatives",
//     content: `Derivatives are one of the core ideas in calculus and are closely tied to two other fundamental concepts: [limits](!/calculus/limits) and [integrals](!/calculus/integrals).As discussed in the section [“Limits, Derivatives, and Integrals”](!/calculus#three_concepts) these three notions are interconnected—limits provide the mathematical precision needed to define both derivatives and integrals, which are essentially opposite processes—one describes how quantities change, while the other measures how they accumulate.
// At its core, a derivative describes how one quantity varies in response to changes in another—it represents the rate at which a function's output shifts as its input changes. Whether describing the speed of a moving object, the slope of a curve, or the rate at which populations grow, derivatives help us understand and predict dynamic behavior.
// Derivatives possess important mathematical properties, such as linearity and rules for combining and composing functions. They also extend naturally to higher-order derivatives, which describe more complex changes like acceleration or curvature.
// `
//   }
  
  
//   const sectionsContent={

//     definitions:{
//       title:`Basic Definitions`,
//       content:``,
//       svg:`<svg viewBox="0 0 750 700" xmlns="http://www.w3.org/2000/svg">
//   <!-- Background -->
//   <rect width="800" height="600" fill="#f8f9fa"/>
  
//   <!-- Grid lines -->
//   <defs>
//     <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
//       <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9ecef" stroke-width="1"/>
//     </pattern>
//   </defs>
//   <rect width="800" height="600" fill="url(#grid)"/>
  
//   <!-- Axes -->
//   <line x1="80" y1="500" x2="720" y2="500" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)"/>
//   <line x1="120" y1="520" x2="120" y2="80" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)"/>
  
//   <!-- Arrow markers -->
//   <defs>
//     <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
//       <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
//     </marker>
//   </defs>
  
//   <!-- Axis labels -->
//   <text x="730" y="520" font-family="Arial, sans-serif" font-size="16" font-style="italic">x</text>
//   <text x="100" y="75" font-family="Arial, sans-serif" font-size="16" font-style="italic">y</text>
  
//   <!-- Function curve (parabola) -->
//   <path d="M 150 400 Q 220 320 300 250 Q 380 200 450 180 Q 520 170 600 200" stroke="#2563eb" stroke-width="3" fill="none"/>
  
//   <!-- Two points on the curve -->
//   <circle cx="300" cy="250" r="4" fill="#dc2626"/>
//   <circle cx="450" cy="180" r="4" fill="#dc2626"/>
  
//   <!-- Point labels -->
//   <text x="285" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold">P</text>
//   <text x="455" y="170" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Q</text>
  
//   <!-- Secant line -->
//   <line x1="250" y1="280" x2="500" y2="150" stroke="#059669" stroke-width="2" stroke-dasharray="5,5"/>
  
//   <!-- Projections to x-axis -->
//   <line x1="300" y1="250" x2="300" y2="500" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
//   <line x1="450" y1="180" x2="450" y2="500" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  
//   <!-- Projections to y-axis -->
//   <line x1="300" y1="250" x2="120" y2="250" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
//   <line x1="450" y1="180" x2="120" y2="180" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  
//   <!-- Delta x (horizontal distance) -->
//   <line x1="300" y1="480" x2="450" y2="480" stroke="#7c3aed" stroke-width="2"/>
//   <line x1="300" y1="475" x2="300" y2="485" stroke="#7c3aed" stroke-width="2"/>
//   <line x1="450" y1="475" x2="450" y2="485" stroke="#7c3aed" stroke-width="2"/>
//   <text x="365" y="470" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#7c3aed">Δx</text>
  
//   <!-- Delta y (vertical distance) -->
//   <line x1="100" y1="250" x2="100" y2="180" stroke="#dc2626" stroke-width="2"/>
//   <line x1="95" y1="250" x2="105" y2="250" stroke="#dc2626" stroke-width="2"/>
//   <line x1="95" y1="180" x2="105" y2="180" stroke="#dc2626" stroke-width="2"/>
//   <text x="75" y="220" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">Δy</text>
  
//   <!-- Right triangle showing the slope -->
//   <path d="M 300 250 L 450 250 L 450 180 Z" stroke="#f59e0b" stroke-width="2" fill="#fef3c7" fill-opacity="0.3"/>
  
//   <!-- Coordinate labels -->
//   <text x="285" y="520" font-family="Arial, sans-serif" font-size="12">x</text>
//   <text x="435" y="520" font-family="Arial, sans-serif" font-size="12">x + Δx</text>
//   <text x="75" y="255" font-family="Arial, sans-serif" font-size="12">f(x)</text>
//   <text x="50" y="185" font-family="Arial, sans-serif" font-size="12">f(x + Δx)</text>
  
//   <!-- Title -->
//   <text x="400" y="40" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">Derivative Definition</text>
  
//   <!-- Legend -->
//   <rect x="520" y="320" width="220" height="100" fill="white" stroke="#d1d5db" stroke-width="1" rx="5"/>
//   <line x1="530" y1="340" x2="550" y2="340" stroke="#2563eb" stroke-width="3"/>
//   <text x="560" y="345" font-family="Arial, sans-serif" font-size="12">Function f(x)</text>
//   <line x1="530" y1="360" x2="550" y2="360" stroke="#059669" stroke-width="2" stroke-dasharray="5,5"/>
//   <text x="560" y="365" font-family="Arial, sans-serif" font-size="12">Secant line</text>
//   <line x1="530" y1="380" x2="550" y2="380" stroke="#7c3aed" stroke-width="2"/>
//   <text x="560" y="385" font-family="Arial, sans-serif" font-size="12">Δx (change in x)</text>
//   <line x1="530" y1="400" x2="550" y2="400" stroke="#dc2626" stroke-width="2"/>
//   <text x="560" y="405" font-family="Arial, sans-serif" font-size="12">Δy (change in y)</text>
// </svg>

// `,
//       before:`As it has been said already in [Introduction](!/calculus/derivatives#intro), derivative of a function is very importand and may be central concept of calculus (and probably mathematic as a whole).
//       Unsurprisingly, exist many definitions of derivative, each trying to focus on different aspects of this mathematical notion.
//       Let us start with probably most universal definition reflecting the very essense of derivatives. 
//       @academic[theorem:The derivative of a function at a specific point is defined as the limit of the ratio between the change in the function’s value and the change in its argument, as the argument change approximates zero.]@ 

// `,
//       after:`1. **“At a specific point”**  
// We’re focusing on one exact input value of the function. Not a range. Not a neighborhood. Just one number—that’s where we want to know how the function behaves.

// 2. **“Change in the function’s value”**  
// We look at how the output (the result of the function) changes when we slightly move the input. This is the vertical difference on the graph: how much $f(x)$ becomes $f(x + \\Delta x)$.

// 3. **“Change in its argument”**  
// This is the input change—how much we shift $x$. It’s the horizontal step $\\Delta x$.

// 4. **“Ratio between the change in the function’s value and the change in its argument”**  
// We divide the vertical change by the horizontal change:

// $\\text{average rate of change} = \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$

// That’s the average rate of change.

// 5. **“As the argument change approximates zero”**  
// We shrink $\\Delta x$ down toward zero. That ratio becomes the instantaneous rate of change—the derivative.
// `,
// under:`some text`
  
  
//     },
//     notation:{
  
//       title:`Understanding Derivative Notation`,
//       content:`Before applying derivative rules, it's important to understand the notation used to represent derivatives.

// - In **Leibniz notation**, a derivative is written as $\\frac{dy}{dx}$, $\\frac{df}{dx}$, or $\\frac{d}{dx}f(x)$, which highlights the rate of change of one variable with respect to another.

// - **Prime notation** is often used for functions of a single variable: $f'(x)$ for the first derivative, $g''(x)$ for the second, and $h^{(n)}(x)$ for the $n$-th derivative. This is compact and convenient, especially for repeated differentiation.

// - **Operator notation**: $Df(x)$, $D^n f(x)$ — used in some texts, particularly in linear operator or abstract contexts.

// Each notation expresses the same concept—a derivative—but the choice often depends on context and convention. As you learn and apply derivative rules, you'll see all of these used to express how functions change.

// Find more info about mathematical symbols in calculus along with Latex code on this [page](!/math-symbols/calculus).
// `,
//       before:``,
//       after:``,
//       link:'/tables/math-symbols/calculus'
  
//     },
//     rules:{
//       title:`Derivative Rules`,
//       link:'/calculus/derivatives/rules',
//       content:`Derivatives are fundamental tools in calculus, and understanding how to calculate them efficiently is essential for working with functions in both theoretical and applied contexts. For better learning experience we assembled all main rules of derivatives in one place. 
//       This [page](!/calculus/derivatives/rules) presents the main rules for differentiation, organized into clear categories to simplify learning and reference.
// [Basic Rules](!/calculus/derivatives/rules#basic) include essential principles like the constant rule, power rule, and the sum, product, and chain rules. These form the foundation for differentiating most algebraic expressions.
// [Trigonometric Derivatives](!/calculus/derivatives/rules#trigonometric) focus on the standard derivatives of sine, cosine, tangent, and their reciprocal functions. These are key for analyzing periodic behavior and solving problems involving waves and oscillations.
// [Exponential Derivatives](!/calculus/derivatives/rules#exponential) cover both general exponential functions and the special case of the natural exponential function. These rules are particularly useful in modeling growth, decay, and other natural processes.
// [Logarithmic Derivatives](!/calculus/derivatives/rules#logarithm) address derivatives of logarithmic functions, including both common and natural logs. These are especially helpful when dealing with functions involving rates or scaling.
// Together, these rules allow you to differentiate a wide variety of functions. Mastery of them is crucial for progressing in calculus, differential equations, and many areas of applied mathematics.
// `,
//       before:``,
//       after:``,
  
//     },
  
   
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }



//   return {
//     props:{
//       sectionsContent,
//       introContent

      
//     }
//   }
// }


// export default function DerivativesPage({sectionsContent ,introContent}) {

  
//   const derivativesSections=[
//     {
//         id:'definitions',
//         title:sectionsContent.definitions.title,
//         link:'',
//         content:[
//           sectionsContent.definitions.before,

//           { 
//             content:  
//               sectionsContent.definitions.svg,
//             layout: 'horizontal', 
//             position: 'left',
//             width: 2.5 
//           },
        
//           { 
//             content:  sectionsContent.definitions.after,
//             layout: 'horizontal', 
//             position: 'right',
//             width: 1.5 
//           },
          
//           // sectionsContent.definitions.svg,
//           // sectionsContent.definitions.after
//         ]
//     },

//     {
//       id:'notation',
//       title:sectionsContent.notation.title,
//       link:'',
//       content:sectionsContent.notation.content
//   },

//     {
//         id:'rules',
//         title:sectionsContent.rules.title,
//         link:sectionsContent.rules.link,
//         content:sectionsContent.rules.content
//     },
     
    

//     // {
//     //     id:'',
//     //     title:'',
//     //     link:'',
//     //     content:''
//     // }
// ]


//   return (
//     <>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//                 side='right'
//                 // topOffset='65px' 
//                 sidebarWidth='45px'
//                 panelWidth='200px'
//                 iconColor='white'
//                 panelBackgroundColor='#f2f2f2'
//               />
//       <Breadcrumb/>
//       <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Derivatives</h1>
//       <br/>
//       <SectionTableOfContents sections={derivativesSections}/>
//       <br/>
//       <br/>
//       <IntroSection 
//              id={introContent.id}
//              title={introContent.title}
//              content={introContent.content}
//              backgroundColor="#f2f2f2"
//              textColor="#34383c"
//            />
//       <br/>
//       <br/>
//       <br/>
//       <Sections sections={derivativesSections}/>
//       <br/>
//        {/* <ScrollUpButton/> */} 
//     </>
//   );
// }

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "derivatives calculus",
  "derivative definition",
  "difference quotient",
  "derivative notation",
  "differentiation rules",
  "chain rule",
  "product rule",
  "quotient rule",
  "implicit differentiation",
  "higher order derivatives",
  "differentiability",
  "tangent line slope",
  "instantaneous rate of change",
  "derivative formulas",
  "differentials"
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

  //   const sectionsContent={

  //   obj0:{
  //     title:`Key Terms`,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }



const sectionsContent = {
  obj1: {
    title: `The Difference Quotient and Its Limit`,
    content: `
Given a function $f$ and a point $x = a$, the difference quotient measures the average rate of change of $f$ over the interval from $a$ to $a + h$:

$$\\frac{f(a + h) - f(a)}{h}$$

Geometrically, this is the slope of the secant line connecting $(a, f(a))$ and $(a + h, f(a + h))$. As $h \\to 0$, the secant line rotates toward the tangent line at $x = a$.

The derivative of $f$ at $a$ is defined as the limit of the difference quotient:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

When this limit exists, $f'(a)$ equals the slope of the tangent line to the graph of $f$ at the point $(a, f(a))$. When the limit does not exist—due to a corner, cusp, vertical tangent, or discontinuity—the derivative is undefined at that point.

An equivalent form uses $x$ approaching $a$ directly:

$$f'(a) = \\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$$

Both forms define the same quantity. The first emphasizes the increment $h$; the second emphasizes the point $x$ approaching $a$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Notation`,
    content: `
Several notation systems for derivatives coexist, each suited to different contexts.

## Lagrange Notation

The symbol $f'(x)$ denotes the derivative of $f$ with respect to $x$. Higher derivatives use repeated primes: $f''(x)$, $f'''(x)$. For the $n$th derivative, parenthetical notation avoids stacking primes: $f^{(n)}(x)$. This notation is compact and emphasizes the function itself.

## Leibniz Notation

The symbol $\\frac{dy}{dx}$ denotes the derivative of $y$ with respect to $x$. It suggests a ratio of infinitesimal changes—and while the derivative is defined as a limit rather than a literal fraction, this notation behaves like a fraction in the [chain rule](!/calculus/derivatives/rules) and in [differentials](!/calculus/derivatives/differentials). Higher derivatives follow the pattern $\\frac{d^2y}{dx^2}$, $\\frac{d^3y}{dx^3}$. The operator form $\\frac{d}{dx}[f(x)]$ emphasizes differentiation as an operation applied to an expression.

## Euler Notation

The operator $D$ or $D_x$ applied to a function: $Df(x)$ means the same as $f'(x)$. Higher orders use powers of the operator: $D^2 f$, $D^n f$. This notation appears in differential equations and operator theory.

## Newton Notation

A dot above the variable: $\\dot{y}$ for the first derivative, $\\ddot{y}$ for the second. Used almost exclusively where the independent variable is time. The notation signals that differentiation is with respect to $t$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Derivative Graph Analysis`,
    content: `
The sign of the derivative at a point reveals whether the function is increasing or decreasing there. Where $f'(x) > 0$, the function rises; where $f'(x) < 0$, the function falls. Points where $f'(x) = 0$ or $f'(x)$ is undefined are critical points—candidates for local maxima, minima, or neither.

The second derivative adds another layer. Where $f''(x) > 0$, the graph is concave up; where $f''(x) < 0$, the graph is concave down. Points where concavity changes are inflection points. Together, the first and second derivatives determine the complete shape of a curve: its direction, its turning points, and its bending.

[Derivative graph analysis](!/calculus/derivatives/graph-analysis) combines these tools into a systematic framework for understanding function behavior, from tangent line equations to optimization and curve sketching.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/graph-analysis',
  },
  obj4: {
    title: `The Derivative as a Function`,
    content: `
The definition $f'(a)$ produces a single number—the slope at one point. Replacing $a$ with a variable $x$ yields $f'(x)$, a function that assigns a slope to every point in its domain. The derivative function has its own graph, its own properties, and can itself be differentiated.

The graph of $f'$ encodes the behavior of $f$: where $f$ climbs, $f'$ is positive; where $f$ descends, $f'$ is negative; where $f$ has an extremum, $f'$ crosses zero. Reading one graph from the other—and reversing the process—is a core skill.

[The derivative as a function](!/calculus/derivatives/function) develops this perspective, including the domain of $f'$, the relationship between the graphs of $f$ and $f'$, and the interpretation of $f'$ as a standalone object.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/function',
  },
  obj5: {
    title: `Differentiability`,
    content: `
Not every function has a derivative at every point. The limit definition requires the limit to exist and be finite, which fails at corners, cusps, vertical tangents, and discontinuities. Each failure mode has a distinct geometric signature on the graph.

Differentiability implies [continuity](!/calculus/limits/continuity)—a function must be unbroken at a point to have a tangent line there. The converse is false: $f(x) = |x|$ is continuous at $x = 0$ but not differentiable, because the left-hand and right-hand slopes disagree.

[Differentiability](!/calculus/derivatives/differentiability) examines when derivatives exist, one-sided derivatives, differentiability on intervals, and pathological cases where continuity holds everywhere but differentiability fails everywhere.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/differentiability',
  },
  obj6: {
    title: `Differentiation Rules`,
    content: `
Computing derivatives from the limit definition is tedious for all but the simplest functions. Differentiation rules replace the limit with algebraic procedures: the power rule handles $x^n$, the product rule handles $f \\cdot g$, the quotient rule handles $f/g$, and the chain rule handles compositions $f(g(x))$.

Beyond computational rules, the Mean Value Theorem guarantees that every differentiable function achieves its average rate of change at some interior point. Rolle's Theorem and L'Hôpital's rule follow as consequences, connecting derivatives to existence results and limit evaluation.

[Differentiation rules](!/calculus/derivatives/rules) covers all standard rules, their derivations from the limit definition, and the major theorems that govern derivative behavior.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/rules',
  },
  obj7: {
    title: `Differentiation Techniques`,
    content: `
Standard rules apply directly when $y$ is given explicitly as a function of $x$. Many relationships, however, are not written in explicit form. The equation $x^2 + y^2 = 25$ defines $y$ implicitly; implicit differentiation extracts $dy/dx$ by differentiating both sides and solving.

Logarithmic differentiation handles products with many factors and expressions with variable exponents like $x^x$. Parametric differentiation computes slopes of curves given as $x = x(t)$, $y = y(t)$. The inverse function derivative formula recovers the derivative of $f^{-1}$ from the derivative of $f$.

[Differentiation techniques](!/calculus/derivatives/techniques) develops each method with its underlying logic and the situations where it applies.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/techniques',
  },
  obj8: {
    title: `Derivatives of Common Functions`,
    content: `
A small set of derivative formulas covers the vast majority of computation. The power rule gives $\\frac{d}{dx}[x^n] = nx^{n-1}$. Trigonometric derivatives follow a pattern: $(\\sin x)' = \\cos x$, $(\\cos x)' = -\\sin x$, $(\\tan x)' = \\sec^2 x$. The exponential $e^x$ is its own derivative, and $(\\ln x)' = 1/x$.

These formulas, combined with [differentiation rules](!/calculus/derivatives/rules), handle polynomials, rational functions, and all standard transcendental functions. Memorizing them eliminates the need to return to the limit definition.

[Derivatives of common functions](!/calculus/derivatives/common) catalogs these results, derives key formulas from the limit definition, and organizes them into a reference framework.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/common',
  },
  obj9: {
    title: `Derivatives of Special Functions`,
    content: `
Beyond the standard functions, several families have derivatives that appear frequently in advanced work. Inverse trigonometric functions produce algebraic derivatives: $(\\arcsin x)' = 1/\\sqrt{1 - x^2}$, $(\\arctan x)' = 1/(1 + x^2)$. Hyperbolic functions parallel their trigonometric counterparts: $(\\sinh x)' = \\cosh x$, $(\\tanh x)' = \\text{sech}^2\\,x$.

Piecewise functions require checking differentiability at each boundary, and parametric curves use the formula $dy/dx = (dy/dt)/(dx/dt)$.

[Derivatives of special functions](!/calculus/derivatives/special) collects these results, derives them via implicit differentiation and inverse function methods, and highlights the patterns connecting them to [common derivatives](!/calculus/derivatives/common).
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/special',
  },
  obj10: {
    title: `Higher-Order Derivatives`,
    content: `
Since $f'$ is a function, it can be differentiated again. The second derivative $f''(x)$ measures how the slope itself changes—geometrically, this is [concavity](!/calculus/derivatives/graph-analysis). The third derivative and beyond capture progressively finer aspects of a function's behavior.

Certain functions exhibit patterns under repeated differentiation. Polynomials of degree $n$ have $(n+1)$th derivative equal to zero. The exponential $e^x$ is unchanged at every order. Sine and cosine cycle through four derivatives before repeating.

[Higher-order derivatives](!/calculus/derivatives/higher-order) explores notation, derivative patterns, smoothness classes, and the connection to Taylor series.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/higher-order',
  },
  obj11: {
    title: `Differentials`,
    content: `
The derivative $dy/dx$ is defined as a limit—a single object. Differentials separate it into two independent quantities: $dx$, a small change in $x$, and $dy = f'(x) \\cdot dx$, the corresponding change predicted by the tangent line.

The differential $dy$ approximates the actual change $\\Delta y = f(x + dx) - f(x)$. For small $dx$, the approximation is accurate, making differentials a practical tool for linear approximation and error estimation.

[Differentials](!/calculus/derivatives/differentials) develops the formalism, connects it to Leibniz notation, and applies it to approximation and error propagation.
`,
    before: ``,
    after: ``,
    link: '/calculus/derivatives/differentials',
  },
};


const introContent = {
  id: `intro`,
  title: `From Average to Instantaneous`,
  content: `
The slope of a line measures constant rate of change. But most functions do not change at a constant rate—their graphs curve, steepen, and flatten. The derivative extends the idea of slope to curves, capturing how fast a function changes at a single point rather than over an interval.

The construction begins with the difference quotient: the slope of a secant line through two points on the graph. As the two points draw closer together, the secant line approaches the tangent line. The derivative is the [limit](!/calculus/limits) of this process—the slope of the tangent line, defined precisely through a limiting operation.

This single concept—instantaneous rate of change via a limiting process—generates an entire framework. Rules convert the limit definition into efficient computation. Techniques extend differentiation to implicit and parametric settings. The derivative as a function reveals the shape of curves through sign analysis. Higher-order derivatives capture concavity and deeper layers of change.
`
};

const faqQuestions = {
  obj1: {
    question: "What is a derivative?",
    answer: "A derivative measures the instantaneous rate of change of a function at a point. It is defined as the limit of the difference quotient: f'(a) = lim(h→0) [f(a+h) - f(a)]/h. Geometrically, this equals the slope of the tangent line to the graph at that point.",
    sectionId: "1"
  },
  obj2: {
    question: "What are the different notations for derivatives?",
    answer: "Four notations are common: Lagrange (f'(x)), Leibniz (dy/dx), Euler (Df), and Newton (dot notation). Lagrange is compact for functions, Leibniz behaves like a fraction in chain rule, Euler appears in operator theory, and Newton is used for time derivatives.",
    sectionId: "2"
  },
  obj3: {
    question: "What does the derivative tell you about a function?",
    answer: "The sign of f'(x) indicates direction: positive means increasing, negative means decreasing. Where f'(x) = 0 are critical points (potential extrema). The second derivative f''(x) indicates concavity: positive is concave up, negative is concave down.",
    sectionId: "3"
  },
  obj4: {
    question: "When is a function not differentiable?",
    answer: "A function fails to be differentiable at corners, cusps, vertical tangents, and discontinuities. Differentiability requires continuity (but continuity alone is not sufficient). The classic example is |x|, which is continuous but not differentiable at x = 0.",
    sectionId: "5"
  },
  obj5: {
    question: "What are the basic differentiation rules?",
    answer: "The main rules are: power rule (d/dx[x^n] = nx^(n-1)), product rule, quotient rule, and chain rule for compositions. These convert the limit definition into algebraic procedures, making derivative computation efficient.",
    sectionId: "6"
  },
  obj6: {
    question: "What is implicit differentiation?",
    answer: "Implicit differentiation finds dy/dx when y is not given explicitly as a function of x. Differentiate both sides of the equation with respect to x, treating y as a function of x (applying chain rule), then solve for dy/dx.",
    sectionId: "7"
  },
  obj7: {
    question: "What are higher-order derivatives?",
    answer: "Higher-order derivatives result from differentiating repeatedly. The second derivative f''(x) measures concavity, the third and beyond capture finer behavior. Some functions exhibit patterns: e^x stays unchanged, polynomials eventually become zero, and trig functions cycle.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Derivatives in Calculus",
    "description": "Master derivatives: difference quotient definition, notation systems, differentiation rules, implicit and logarithmic differentiation, common and special function derivatives, higher-order derivatives, and differentials.",
    "url": "https://www.learnmathclass.com/calculus/derivatives",
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
      "name": "Derivatives in Calculus"
    },
    "teaches": [
      "Derivative definition via difference quotient",
      "Derivative notation systems",
      "Derivative graph analysis",
      "Differentiability conditions",
      "Differentiation rules and techniques",
      "Common and special function derivatives",
      "Higher-order derivatives",
      "Differentials and linear approximation"
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
    faqQuestions,
    schemas,
    seoData: {
      title: "Derivatives: Definition, Rules & Techniques | Learn Math Class",
      description: "Master derivatives: difference quotient definition, notation systems, differentiation rules, implicit and logarithmic differentiation, common and special function derivatives, higher-order derivatives, and differentials.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives",
      name: "Derivatives in Calculus"
    },
  }
}
   }


   export default function DerivativesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Derivatives</h1>
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
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections.slice(0)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
