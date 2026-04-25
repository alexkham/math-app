// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import React from 'react'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';
// import Sections from '@/app/components/page-components/section/Sections';
// import ExpandableTable from '@/app/components/generic-table/ExpandableTable';
// import '../../../../pages/pages.css'


// export async function getStaticProps(){


    
//     const limitRulesData = {
//         "Basic Limit Laws": [
//           {
//             id: 1,
//             law: "Constant Rule",
//             formula: "$\\lim_{x \\to a} c = c$",
//             explanation: "The limit of a constant is the constant itself"
//           },
//           {
//             id: 2,
//             law: "Identity Rule",
//             formula: "$\\lim_{x \\to a} x = a$",
//             explanation: "The limit of x as x approaches a is a"
//           },
//           {
//             id: 3,
//             law: "Sum Rule",
//             formula: "$\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)$",
//             explanation: "The limit of a sum is the sum of the limits"
//           },
//           {
//             id: 4,
//             law: "Difference Rule",
//             formula: "$\\lim_{x \\to a} [f(x) - g(x)] = \\lim_{x \\to a} f(x) - \\lim_{x \\to a} g(x)$",
//             explanation: "The limit of a difference is the difference of the limits"
//           },
//           {
//             id: 5,
//             law: "Constant Multiple Rule",
//             formula: "$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot \\lim_{x \\to a} f(x)$",
//             explanation: "Constants can be factored out of limits"
//           },
//           {
//             id: 6,
//             law: "Product Rule",
//             formula: "$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$",
//             explanation: "The limit of a product is the product of the limits"
//           },
//           {
//             id: 7,
//             law: "Quotient Rule",
//             formula: "$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}$",
//             explanation: "The limit of a quotient is the quotient of limits, provided denominator limit is not zero"
//           }
//         ],
       
//         "Power and Root Limits": [
//           {
//             id: 8,
//             law: "Power Rule",
//             formula: "$\\lim_{x \\to a} [f(x)]^n = [\\lim_{x \\to a} f(x)]^n$",
//             explanation: "The limit of a power is the power of the limit"
//           },
//           {
//             id: 9,
//             law: "Root Rule",
//             formula: "$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{\\lim_{x \\to a} f(x)}$",
//             explanation: "The limit of a root is the root of the limit, provided the root exists"
//           },
//           {
//             id: 10,
//             law: "Polynomial Rule",
//             formula: "$\\lim_{x \\to a} P(x) = P(a)$",
//             explanation: "For polynomial P(x), substitute the value directly"
//           },
//           {
//             id: 11,
//             law: "Rational Function Rule",
//             formula: "$\\lim_{x \\to a} \\frac{P(x)}{Q(x)} = \\frac{P(a)}{Q(a)}$",
//             explanation: "For rational functions, substitute directly if denominator is not zero"
//           }
//         ],
       
//         "Special Theorems": [
//           {
//             id: 12,
//             law: "Squeeze Theorem",
//             formula: "If $g(x) \\leq f(x) \\leq h(x)$ and $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L$, then $\\lim_{x \\to a} f(x) = L$",
//             explanation: "Function squeezed between two functions with same limit has that limit"
//           },
//           {
//             id: 13,
//             law: "Absolute Value Rule",
//             formula: "$\\lim_{x \\to a} |f(x)| = |\\lim_{x \\to a} f(x)|$",
//             explanation: "The limit of absolute value is absolute value of limit, if limit exists"
//           },
//           {
//             id: 14,
//             law: "Composition Rule",
//             formula: "If $\\lim_{x \\to a} g(x) = L$ and $f$ is continuous at $L$, then $\\lim_{x \\to a} f(g(x)) = f(L)$",
//             explanation: "Limit of composition when inner function has limit and outer is continuous"
//           }
//         ],
       
//         "Trigonometric Limits": [
//           {
//             id: 15,
//             law: "Fundamental Sine Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
//             explanation: "The fundamental trigonometric limit for sine"
//           },
//           {
//             id: 16,
//             law: "Fundamental Cosine Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$",
//             explanation: "The fundamental trigonometric limit for cosine"
//           },
//           {
//             id: 17,
//             law: "Alternative Cosine Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}$",
//             explanation: "Alternative form of the cosine limit"
//           },
//           {
//             id: 18,
//             law: "Tangent Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$",
//             explanation: "The fundamental trigonometric limit for tangent"
//           }
//         ],
       
//         "Exponential and Logarithmic Limits": [
//           {
//             id: 19,
//             law: "Natural Exponential Definition",
//             formula: "$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$",
//             explanation: "The definition of e as a limit"
//           },
//           {
//             id: 20,
//             law: "Alternative e Definition",
//             formula: "$\\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} = e$",
//             explanation: "Alternative form for the definition of e"
//           },
//           {
//             id: 21,
//             law: "Exponential Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$",
//             explanation: "Fundamental limit involving natural exponential"
//           },
//           {
//             id: 22,
//             law: "General Exponential Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$",
//             explanation: "Fundamental limit for exponential with base a"
//           },
//           {
//             id: 23,
//             law: "Natural Logarithm Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1$",
//             explanation: "Fundamental limit involving natural logarithm"
//           },
//           {
//             id: 24,
//             law: "General Logarithm Limit",
//             formula: "$\\lim_{x \\to 0} \\frac{\\log_a(1 + x)}{x} = \\frac{1}{\\ln a}$",
//             explanation: "Fundamental limit for logarithm with base a"
//           }
//         ]
//        };

    
//   const sectionsContent={

//     basic:{
//       title:`Basic Limit Laws`,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     powers:{
//       title:`Power and Root Limits`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     special:{
  
//       title:`Special Theorems`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     trigonometric:{
//       title:`Trigonometric Limits`,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     exponential:{
  
//       title:`Exponential and Logarithmic Limits`,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }



//     return {
//       props:{
//         sectionsContent,
//         limitRulesData,
        
//       }
//     }
//   }


// export default function LimitsRulesData({sectionsContent,limitRulesData}) {

    
//   const limitsRulesSections=[
//     {
//         id:'basic',
//         title:sectionsContent.basic.title,
//         link:'',
//         content:[

           

//             <div key={1}>
//             <ExpandableTable 
//             data={limitRulesData[sectionsContent.basic.title]}
//              displayColumns={ ["law", "formula", "explanation"]}
//              copyableFields={["formula"]}
//              includedFields={ ["law", "formula", "explanation"]} />
//              </div> ,
  

//         ]
//     },
//     {
//         id:'powers',
//         title:sectionsContent.powers.title,
//         link:'',
//         content:[


//             <div key={2}>
//             <ExpandableTable 
//             data={limitRulesData[sectionsContent.powers.title]}
//              displayColumns={ ["law", "formula", "explanation"]}
//              copyableFields={["formula"]}
//              includedFields={ ["law", "formula", "explanation"]} />
//              </div> ,
  
//         ]
//     },
//     {
//         id:'special',
//         title:sectionsContent.special.title,
//         link:'',
//         content:[

//             <div key={3}>
//             <ExpandableTable 
//             data={limitRulesData[sectionsContent.special.title]}
//              displayColumns={ ["law", "formula", "explanation"]}
//              copyableFields={["formula"]}
//              includedFields={ ["law", "formula", "explanation"]} />
//              </div> ,
  

//         ]
//     },
//     {
//         id:'trigonometric',
//         title:sectionsContent.trigonometric.title,
//         link:'',
//         content:[

//             <div key={4}>
//             <ExpandableTable 
//             data={limitRulesData[sectionsContent.trigonometric.title]}
//              displayColumns={ ["law", "formula", "explanation"]}
//              copyableFields={["formula"]}
//              includedFields={ ["law", "formula", "explanation"]} />
//              </div> ,
  

//         ]
//     },
//     {
//         id:'exponential',
//         title:sectionsContent.exponential.title,
//         link:'',
//         content:[

//             <div key={5}>
//             <ExpandableTable 
//             data={limitRulesData[sectionsContent.exponential.title]}
//              displayColumns={ ["law", "formula", "explanation"]}
//              copyableFields={["formula"]}
//              includedFields={ ["law", "formula", "explanation"]} />
//              </div> ,
  

//         ]
//     }
// ]


//   return (
//     <>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//                   side='right'
//                   // topOffset='65px' 
//                   sidebarWidth='45px'
//                   panelWidth='200px'
//                   iconColor='white'
//                   panelBackgroundColor='#f2f2f2'
//                 />
//       <Breadcrumb/>
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Limits Rules</h1>
//       <br/>
//       <SectionTableOfContents sections={limitsRulesSections}/>
//       <br/>
//       <br/>
//       <br/>
//       {/* <IntroSection/> */}
//       <br/>
//       <br/>
//       <Sections sections={limitsRulesSections}/>
//       <br/>
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
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "limit rules",
  "limit laws calculus",
  "sum rule limits",
  "product rule limits",
  "quotient rule limits",
  "power rule limits",
  "squeeze theorem",
  "limit of polynomial",
  "limit of rational function",
  "composition limit rule",
  "constant multiple limit",
  "indeterminate forms",
  "limit properties",
  "how to evaluate limits",
  "limit theorems"
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
    title: `Why Limit Rules Matter`,
    content: `
Without rules, evaluating even simple limits would require returning to the definition each time. The definition asks whether $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$. Proving this directly for each new function is tedious.

Limit rules provide shortcuts. Once you establish that basic limits exist—constants, the identity function, standard functions—you can combine them using algebraic rules to handle complex expressions.

The rules also reveal structure. They show that limits behave like algebraic operations in many ways, which is why calculus meshes so naturally with algebra.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Limit of a Constant`,
    content: `
For any constant $c$:

$$\\lim_{x \\to a} c = c$$

A constant function $f(x) = c$ outputs the same value regardless of input. As $x$ approaches $a$, the output remains $c$. The limit is simply $c$.

This rule seems trivial but serves as a foundation. Combined with other rules, it handles constant terms in any expression.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Limit of the Identity Function`,
    content: `
For the identity function $f(x) = x$:

$$\\lim_{x \\to a} x = a$$

As $x$ approaches $a$, the value of $x$ approaches $a$. This tautology provides the base case for handling any polynomial: every polynomial is built from constants and powers of $x$, and this rule handles the linear term.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Sum and Difference Rules`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then:

$$\\lim_{x \\to a} [f(x) + g(x)] = L + M$$

$$\\lim_{x \\to a} [f(x) - g(x)] = L - M$$

The limit of a sum is the sum of the limits. The limit of a difference is the difference of the limits.

Both component limits must exist. If either fails to exist, these rules do not apply. The indeterminate form $\\infty - \\infty$ illustrates what can go wrong: two quantities both growing without bound may have a difference that converges, diverges, or oscillates.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj5: {
    title: `Constant Multiple Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $c$ is a constant:

$$\\lim_{x \\to a} [c \\cdot f(x)] = c \\cdot L$$

Constants factor out of limits. This is a special case of the product rule where one factor is constant, but it appears frequently enough to state separately.

Scaling a function by a constant scales its limit by the same constant.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Product Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then:

$$\\lim_{x \\to a} [f(x) \\cdot g(x)] = L \\cdot M$$

The limit of a product is the product of the limits. This extends to any finite number of factors: if each factor has a limit, the product's limit equals the product of those limits.

The indeterminate form $0 \\cdot \\infty$ shows the rule's limitation. When one factor approaches $0$ while the other grows without bound, the product's behavior depends on the relative rates—it might approach $0$, $\\infty$, or any finite value.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Quotient Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$ with $M \\neq 0$, then:

$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}$$

The limit of a quotient is the quotient of the limits, provided the denominator's limit is nonzero.

When $M = 0$, the rule fails. If $L \\neq 0$ and $M = 0$, the limit is typically infinite (analyze the sign to determine $+\\infty$ or $-\\infty$). If both $L = 0$ and $M = 0$, you have the indeterminate form $0/0$, requiring [further techniques](!/calculus/limits/evaluating).
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Power Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and $n$ is a positive integer:

$$\\lim_{x \\to a} [f(x)]^n = L^n$$

Repeated application of the product rule yields this result. The limit of a power is the power of the limit.

For rational exponents:

$$\\lim_{x \\to a} [f(x)]^{m/n} = L^{m/n}$$

provided $L > 0$ (or $L \\geq 0$ when $n$ is odd). Root functions require care with domain restrictions.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj9: {
    title: `Root Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$ and the $n$-th root exists:

$$\\lim_{x \\to a} \\sqrt[n]{f(x)} = \\sqrt[n]{L}$$

For odd $n$, this holds for all real $L$. For even $n$, the rule requires $L \\geq 0$ and $f(x) \\geq 0$ near $a$.

This is the power rule with exponent $1/n$. The limit of a root is the root of the limit, provided the root is defined.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj10: {
    title: `Absolute Value Rule`,
    content: `
If $\\lim_{x \\to a} f(x) = L$, then:

$$\\lim_{x \\to a} |f(x)| = |L|}$$

The limit of an absolute value is the absolute value of the limit.

The converse does not hold: $\\lim_{x \\to a} |f(x)}|$ may exist even when $\\lim_{x \\to a} f(x)$ does not. For example, $|(-1)^n|}$ equals $1$ for all $n$, but $(-1)^n$ has no limit as $n \\to \\infty$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj11: {
    title: `Limits of Polynomials`,
    content: `
For any polynomial $p(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$:

$$\\lim_{x \\to a} p(x) = p(a)$$

Direct substitution always works for polynomials. This follows from applying the sum, constant multiple, and power rules to each term.

Polynomials are [continuous](!/calculus/limits/continuity) everywhere, so the limit at any point equals the function value at that point.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj12: {
    title: `Limits of Rational Functions`,
    content: `
For a rational function $r(x) = \\dfrac{p(x)}{q(x)}$ where $p$ and $q$ are polynomials:

$$\\lim_{x \\to a} r(x) = \\frac{p(a)}{q(a)} \\quad \\text{provided } q(a) \\neq 0$$

When the denominator is nonzero at $a$, substitute directly. When $q(a) = 0$, the quotient rule fails and [other techniques](!/calculus/limits/evaluating) are needed.

If $q(a) = 0$ but $p(a) \\neq 0$, the limit is infinite. If both $p(a) = 0$ and $q(a) = 0$, factor and cancel the common root before substituting.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj13: {
    title: `Composition Rule`,
    content: `
If $\\lim_{x \\to a} g(x) = L$ and $f$ is [continuous](!/calculus/limits/continuity) at $L$, then:

$$\\lim_{x \\to a} f(g(x)) = f(L)$$

The limit passes through continuous functions. You first find the limit of the inner function, then apply the outer function to that limit.

Continuity of $f$ at $L$ is essential. Without it, the behavior of $f$ near $L$ might not match $f(L)$, and the rule fails.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj14: {
    title: `The Squeeze Theorem`,
    content: `
Suppose $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $a$ (except possibly at $a$ itself). If:

$$\\lim_{x \\to a} g(x) = L \\quad \\text{and} \\quad \\lim_{x \\to a} h(x) = L$$

then:

$$\\lim_{x \\to a} f(x) = L$$

The function $f$ is trapped between two functions that converge to the same limit. It has nowhere to go but $L$.

This theorem proves the [special limit](!/calculus/limits/special) $\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$ through a geometric argument that bounds $\\dfrac{\\sin x}{x}$ between $\\cos x$ and $1$ near zero.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj15: {
    title: `When Rules Fail`,
    content: `
Every rule requires component limits to exist. When they don't, the rule cannot be applied directly.

Indeterminate forms signal this breakdown:

- $\\dfrac{0}{0}$ — quotient rule fails
- $\\dfrac{\\infty}{\\infty}$ — quotient rule fails
- $0 \\cdot \\infty$ — product rule fails
- $\\infty - \\infty$ — difference rule fails
- $0^0$, $1^\\infty$, $\\infty^0$ — power rule fails

These forms require transformation before rules apply. Factor and cancel, rationalize, rewrite in equivalent forms—the goal is to eliminate the indeterminate form so that limit rules can finish the computation.

The [evaluating limits](!/calculus/limits/evaluating) page covers techniques for resolving these cases.
`,
    before: ``,
    after: ``,
    link: ``
  }
};

const introContent = {
  id: `intro`,
  title: `Breaking Limits Into Pieces`,
  content: `
Computing limits directly from definitions—chasing epsilons and deltas—is rigorous but impractical for everyday calculation. The power of limit rules lies in decomposition: break a complicated expression into simpler parts, find the limit of each part, then reassemble.

These rules reflect the algebraic structure of limits. The limit of a sum is the sum of the limits. The limit of a product is the product of the limits. Such properties hold because limits preserve algebraic operations, provided the component limits exist.

That final condition is crucial. Every rule listed here requires the individual limits to exist before the rule applies. When a limit yields an indeterminate form, the rules do not directly help—algebraic manipulation must come first.
`
};



const faqQuestions = {
  obj1: {
    question: "Why do limit rules matter?",
    answer: "Limit rules provide shortcuts that avoid returning to the epsilon-delta definition for each new function. Once basic limits are established, you combine them using algebraic rules to handle complex expressions efficiently.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the limit of a constant?",
    answer: "For any constant c, lim(x→a) c = c. A constant function outputs the same value regardless of input, so as x approaches a, the output remains c. This foundational rule handles constant terms in any expression.",
    sectionId: "2"
  },
  obj3: {
    question: "What is the limit of the identity function?",
    answer: "For f(x) = x, lim(x→a) x = a. As x approaches a, the value of x approaches a. This provides the base case for polynomials since every polynomial is built from constants and powers of x.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the sum and difference rules for limits?",
    answer: "If lim f(x) = L and lim g(x) = M, then lim[f(x) + g(x)] = L + M and lim[f(x) − g(x)] = L − M. The limit of a sum is the sum of limits; the limit of a difference is the difference of limits. Both component limits must exist.",
    sectionId: "4"
  },
  obj5: {
    question: "What is the constant multiple rule for limits?",
    answer: "If lim f(x) = L and c is a constant, then lim[c·f(x)] = c·L. Constants factor out of limits. Scaling a function by a constant scales its limit by the same constant.",
    sectionId: "5"
  },
  obj6: {
    question: "What is the product rule for limits?",
    answer: "If lim f(x) = L and lim g(x) = M, then lim[f(x)·g(x)] = L·M. The limit of a product is the product of the limits. This extends to any finite number of factors.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the quotient rule for limits?",
    answer: "If lim f(x) = L and lim g(x) = M with M ≠ 0, then lim[f(x)/g(x)] = L/M. The limit of a quotient is the quotient of limits, provided the denominator's limit is nonzero. When M = 0, the rule fails.",
    sectionId: "7"
  },
  obj8: {
    question: "What is the power rule for limits?",
    answer: "If lim f(x) = L and n is a positive integer, then lim[f(x)]ⁿ = Lⁿ. The limit of a power is the power of the limit. For rational exponents, the rule requires L > 0 (or L ≥ 0 when n is odd).",
    sectionId: "8"
  },
  obj9: {
    question: "What is the root rule for limits?",
    answer: "If lim f(x) = L and the n-th root exists, then lim ⁿ√f(x) = ⁿ√L. For odd n, this holds for all real L. For even n, it requires L ≥ 0 and f(x) ≥ 0 near a.",
    sectionId: "9"
  },
  obj10: {
    question: "What is the absolute value rule for limits?",
    answer: "If lim f(x) = L, then lim|f(x)| = |L|. The limit of an absolute value is the absolute value of the limit. The converse does not hold—|f(x)| may have a limit even when f(x) does not.",
    sectionId: "10"
  },
  obj11: {
    question: "How do you find limits of polynomials?",
    answer: "For any polynomial p(x), lim(x→a) p(x) = p(a). Direct substitution always works for polynomials. This follows from applying sum, constant multiple, and power rules to each term.",
    sectionId: "11"
  },
  obj12: {
    question: "How do you find limits of rational functions?",
    answer: "For r(x) = p(x)/q(x), if q(a) ≠ 0 then lim r(x) = p(a)/q(a). Substitute directly when the denominator is nonzero. When q(a) = 0, factor and cancel common roots or use other techniques.",
    sectionId: "12"
  },
  obj13: {
    question: "What is the composition rule for limits?",
    answer: "If lim g(x) = L and f is continuous at L, then lim f(g(x)) = f(L). The limit passes through continuous functions. Find the inner limit first, then apply the outer function to that limit.",
    sectionId: "13"
  },
  obj14: {
    question: "What is the Squeeze Theorem?",
    answer: "If g(x) ≤ f(x) ≤ h(x) near a, and lim g(x) = lim h(x) = L, then lim f(x) = L. The function f is trapped between two functions converging to the same limit, so f must also converge to L.",
    sectionId: "14"
  },
  obj15: {
    question: "When do limit rules fail?",
    answer: "Rules fail when component limits don't exist. Indeterminate forms (0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰) signal this breakdown. These require algebraic transformation before rules can be applied.",
    sectionId: "15"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Limit Rules",
    "description": "Complete guide to limit laws: sum, difference, product, quotient, power, and root rules. Plus polynomial limits, rational function limits, composition rule, and the Squeeze Theorem.",
    "url": "https://www.learnmathclass.com/calculus/limits/rules",
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
      "name": "Limit Rules"
    },
    "teaches": [
      "Basic limit laws (constant, identity, sum, difference)",
      "Product, quotient, and constant multiple rules",
      "Power and root rules for limits",
      "Limits of polynomials and rational functions",
      "Composition rule and Squeeze Theorem",
      "When limit rules fail: indeterminate forms"
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
        "name": "Limits",
        "item": "https://www.learnmathclass.com/calculus/limits"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Limit Rules",
        "item": "https://www.learnmathclass.com/calculus/limits/rules"
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



  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Limits Rules | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/limits/rules",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props: {
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Limit Rules: Laws & Theorems | Learn Math Class",
      description: "Complete guide to limit laws: sum, difference, product, quotient, power, and root rules. Plus polynomial limits, rational function limits, composition rule, and the Squeeze Theorem.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits/rules",
      name: "Limit Rules"
    },
  }
}
   }

// export default function RulesPage({seoData,sectionsContent , introContent}) {
export default function RulesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
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
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
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
        ]
    },
    {
        id:'15',
        title:sectionsContent.obj15.title,
        link:sectionsContent.obj15.link,
        content:[
          sectionsContent.obj15.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Rules of Limits</h1>
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
