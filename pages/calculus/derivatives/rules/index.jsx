// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import React from 'react'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
// import Sections from '@/app/components/page-components/section/Sections';
// import IntroSection from '@/app/components/page-components/section/IntroContentSection';
// import ExpandableTable from '@/app/components/generic-table/ExpandableTable';
// import '../../../../pages/pages.css'



// export async function getStaticProps(){

//   const keyWords=['derivative rules','differentiation rules', 'rules of differentiation',
//     'basic derivative rules','basic differentiation rules','derivation','calculus','derivative'
//    ]

   
//    const derivativeRulesData = {
//     "Basic Rules": [
//       {
//         id: 1,
//         law: "Constant Rule",
//         formula: "If $f(x) = c$, then $f'(x) = 0$",
//         explanation: "The derivative of any constant is zero"
//       },
//       {
//         id: 2,
//         law: "Constant Multiple Rule",
//         formula: "If $g(x) = c \\cdot f(x)$, then $g'(x) = c \\cdot f'(x)$",
//         explanation: "Constants can be factored out of derivatives"
//       },
//       {
//         id: 3,
//         law: "Power Rule",
//         formula: "If $f(x) = x^n$, then $f'(x) = nx^{n-1}$",
//         explanation: "Bring down the exponent and reduce the power by one"
//       },
//       {
//         id: 4,
//         law: "Sum and Difference Rule",
//         formula: "If $h(x) = f(x) \\pm g(x)$, then $h'(x) = f'(x) \\pm g'(x)$",
//         explanation: "The derivative of a sum/difference is the sum/difference of derivatives"
//       },
//       {
//         id: 5,
//         law: "Product Rule",
//         formula: "If $h(x) = f(x)g(x)$, then $h'(x) = f'(x)g(x) + f(x)g'(x)$",
//         explanation: "Derivative of first times second plus first times derivative of second"
//       },
//       {
//         id: 6,
//         law: "Quotient Rule",
//         formula: "If $h(x) = \\frac{f(x)}{g(x)}$, then $h'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$",
//         explanation: "Low d-high minus high d-low over low squared"
//       },
//       {
//         id: 7,
//         law: "Chain Rule",
//         formula: "If $h(x) = f(g(x))$, then $h'(x) = f'(g(x))g'(x)$",
//         explanation: "Derivative of outside function times derivative of inside function"
//       }
//     ],
  
//     "Trigonometric Derivatives": [
//       {
//         id: 8,
//         law: "Sine Derivative",
//         formula: "If $f(x) = \\sin(x)$, then $f'(x) = \\cos(x)$",
//         explanation: "The derivative of sine is cosine"
//       },
//       {
//         id: 9,
//         law: "Cosine Derivative",
//         formula: "If $f(x) = \\cos(x)$, then $f'(x) = -\\sin(x)$",
//         explanation: "The derivative of cosine is negative sine"
//       },
//       {
//         id: 10,
//         law: "Tangent Derivative",
//         formula: "If $f(x) = \\tan(x)$, then $f'(x) = \\sec^2(x)$",
//         explanation: "The derivative of tangent is secant squared"
//       },
//       {
//         id: 11,
//         law: "Secant Derivative",
//         formula: "If $f(x) = \\sec(x)$, then $f'(x) = \\sec(x)\\tan(x)$",
//         explanation: "The derivative of secant is secant times tangent"
//       },
//       {
//         id: 12,
//         law: "Cotangent Derivative",
//         formula: "If $f(x) = \\cot(x)$, then $f'(x) = -\\csc^2(x)$",
//         explanation: "The derivative of cotangent is negative cosecant squared"
//       },
//       {
//         id: 13,
//         law: "Cosecant Derivative",
//         formula: "If $f(x) = \\csc(x)$, then $f'(x) = -\\csc(x)\\cot(x)$",
//         explanation: "The derivative of cosecant is negative cosecant times cotangent"
//       }
//     ],
  
//     "Exponential Derivatives": [
//       {
//         id: 14,
//         law: "General Exponential",
//         formula: "If $f(x) = a^x$, then $f'(x) = \\ln(a)a^x$",
//         explanation: "Derivative of exponential includes natural log of the base"
//       },
//       {
//         id: 15,
//         law: "Natural Exponential",
//         formula: "If $f(x) = e^x$, then $f'(x) = e^x$",
//         explanation: "The derivative of e to the x is itself"
//       },
//       {
//         id: 16,
//         law: "Composite General Exponential",
//         formula: "If $f(x) = a^{g(x)}$, then $f'(x) = \\ln(a)a^{g(x)}g'(x)$",
//         explanation: "Use chain rule with general exponential derivative"
//       },
//       {
//         id: 17,
//         law: "Composite Natural Exponential",
//         formula: "If $f(x) = e^{g(x)}$, then $f'(x) = e^{g(x)}g'(x)$",
//         explanation: "Use chain rule with natural exponential derivative"
//       }
//     ],
  
//     "Logarithm Derivatives": [
//       {
//         id: 18,
//         law: "General Logarithm",
//         formula: "If $f(x) = \\log_a(x)$, then $f'(x) = \\frac{1}{\\ln(a)x}$",
//         explanation: "Derivative of logarithm includes natural log of base in denominator"
//       },
//       {
//         id: 19,
//         law: "Natural Logarithm",
//         formula: "If $f(x) = \\ln(x)$, then $f'(x) = \\frac{1}{x}$",
//         explanation: "The derivative of natural log is one over x"
//       },
//       {
//         id: 20,
//         law: "Composite General Logarithm",
//         formula: "If $f(x) = \\log_a(g(x))$, then $f'(x) = \\frac{g'(x)}{\\ln(a)g(x)}$",
//         explanation: "Use chain rule with general logarithm derivative"
//       },
//       {
//         id: 21,
//         law: "Composite Natural Logarithm",
//         formula: "If $f(x) = \\ln(g(x))$, then $f'(x) = \\frac{g'(x)}{g(x)}$",
//         explanation: "Use chain rule with natural logarithm derivative"
//       }
//     ]
//   };
  
//   const sectionsContent={

//     basic:{
//       title:`Basic Rules`,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     trigonometric:{
//       title:`Trigonometric Derivatives`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     exponential:{
  
//       title:`Exponential Derivatives`,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     logarithm:{
//       title:`Logarithm Derivatives`,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     // obj5:{
  
//     //   title:``,
//     //   content:``,
//     //   before:``,
//     //   after:``,
  
//     // }
  
//   }


//   return {
//     props:{
//       sectionsContent,
//       keyWords,
//       derivativeRulesData

      
//     }
//   }
// }


// export default function DerivativeRulesPage({sectionsContent,keyWords ,derivativeRulesData}) {
   

  
//   const derivativeRulesSections=[
//     {
//         id:'basic',
//         title:sectionsContent.basic.title,
//         link:'',
//         content:[
//           <div key={1}>
//           <ExpandableTable 
//           data={derivativeRulesData[sectionsContent.basic.title]}
//            displayColumns={ ["law", "formula", "explanation"]}
//            copyableFields={["formula"]}
//            includedFields={ ["law", "formula", "explanation"]} />
//            </div> ,

//         ]
//     },
//     {
//         id:'trigonometric',
//         title:sectionsContent.trigonometric.title,
//         link:'',
//         content:[

//           <div key={2}>
//           <ExpandableTable 
//           data={derivativeRulesData[sectionsContent.trigonometric.title]}
//            displayColumns={ ["law", "formula", "explanation"]}
//            copyableFields={["formula"]}
//            includedFields={ ["law", "formula", "explanation"]} />
//            </div> ,


//         ]
//     },
//     {
//         id:'exponential',
//         title:sectionsContent.exponential.title,
//         link:'',
//         content:[

//           <div  key={3}>
//           <ExpandableTable
//           data={derivativeRulesData[sectionsContent.exponential.title]}
//            displayColumns={ ["law", "formula", "explanation"]}
//            copyableFields={["formula"]}
//            includedFields={ ["law", "formula", "explanation"]} />
//            </div> ,


//         ]
//     },
//     {
//       id:'logarithm',
//       title:sectionsContent.logarithm.title,
//       link:'',
//       content:[

//         <div  key={4}>
//         <ExpandableTable 
//         data={derivativeRulesData[sectionsContent.logarithm.title]}
//          displayColumns={ ["law", "formula", "explanation"]}
//          copyableFields={["formula"]}
//          includedFields={ ["law", "formula", "explanation"]} />
//          </div> ,


//       ]
//   }
// ]
 

//     // const derivativeRulesData = {
//     //     "Basic Rules": [
//     //       {
//     //         id: 1,
//     //         law: "Constant Rule",
//     //         formula: "If $f(x) = c$, then $f'(x) = 0$",
//     //         explanation: "The derivative of any constant is zero"
//     //       },
//     //       {
//     //         id: 2,
//     //         law: "Constant Multiple Rule",
//     //         formula: "If $g(x) = c \\cdot f(x)$, then $g'(x) = c \\cdot f'(x)$",
//     //         explanation: "Constants can be factored out of derivatives"
//     //       },
//     //       {
//     //         id: 3,
//     //         law: "Power Rule",
//     //         formula: "If $f(x) = x^n$, then $f'(x) = nx^{n-1}$",
//     //         explanation: "Bring down the exponent and reduce the power by one"
//     //       },
//     //       {
//     //         id: 4,
//     //         law: "Sum and Difference Rule",
//     //         formula: "If $h(x) = f(x) \\pm g(x)$, then $h'(x) = f'(x) \\pm g'(x)$",
//     //         explanation: "The derivative of a sum/difference is the sum/difference of derivatives"
//     //       },
//     //       {
//     //         id: 5,
//     //         law: "Product Rule",
//     //         formula: "If $h(x) = f(x)g(x)$, then $h'(x) = f'(x)g(x) + f(x)g'(x)$",
//     //         explanation: "Derivative of first times second plus first times derivative of second"
//     //       },
//     //       {
//     //         id: 6,
//     //         law: "Quotient Rule",
//     //         formula: "If $h(x) = \\frac{f(x)}{g(x)}$, then $h'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$",
//     //         explanation: "Low d-high minus high d-low over low squared"
//     //       },
//     //       {
//     //         id: 7,
//     //         law: "Chain Rule",
//     //         formula: "If $h(x) = f(g(x))$, then $h'(x) = f'(g(x))g'(x)$",
//     //         explanation: "Derivative of outside function times derivative of inside function"
//     //       }
//     //     ],
      
//     //     "Trigonometric Derivatives": [
//     //       {
//     //         id: 8,
//     //         law: "Sine Derivative",
//     //         formula: "If $f(x) = \\sin(x)$, then $f'(x) = \\cos(x)$",
//     //         explanation: "The derivative of sine is cosine"
//     //       },
//     //       {
//     //         id: 9,
//     //         law: "Cosine Derivative",
//     //         formula: "If $f(x) = \\cos(x)$, then $f'(x) = -\\sin(x)$",
//     //         explanation: "The derivative of cosine is negative sine"
//     //       },
//     //       {
//     //         id: 10,
//     //         law: "Tangent Derivative",
//     //         formula: "If $f(x) = \\tan(x)$, then $f'(x) = \\sec^2(x)$",
//     //         explanation: "The derivative of tangent is secant squared"
//     //       },
//     //       {
//     //         id: 11,
//     //         law: "Secant Derivative",
//     //         formula: "If $f(x) = \\sec(x)$, then $f'(x) = \\sec(x)\\tan(x)$",
//     //         explanation: "The derivative of secant is secant times tangent"
//     //       },
//     //       {
//     //         id: 12,
//     //         law: "Cotangent Derivative",
//     //         formula: "If $f(x) = \\cot(x)$, then $f'(x) = -\\csc^2(x)$",
//     //         explanation: "The derivative of cotangent is negative cosecant squared"
//     //       },
//     //       {
//     //         id: 13,
//     //         law: "Cosecant Derivative",
//     //         formula: "If $f(x) = \\csc(x)$, then $f'(x) = -\\csc(x)\\cot(x)$",
//     //         explanation: "The derivative of cosecant is negative cosecant times cotangent"
//     //       }
//     //     ],
      
//     //     "Exponential Derivatives": [
//     //       {
//     //         id: 14,
//     //         law: "General Exponential",
//     //         formula: "If $f(x) = a^x$, then $f'(x) = \\ln(a)a^x$",
//     //         explanation: "Derivative of exponential includes natural log of the base"
//     //       },
//     //       {
//     //         id: 15,
//     //         law: "Natural Exponential",
//     //         formula: "If $f(x) = e^x$, then $f'(x) = e^x$",
//     //         explanation: "The derivative of e to the x is itself"
//     //       },
//     //       {
//     //         id: 16,
//     //         law: "Composite General Exponential",
//     //         formula: "If $f(x) = a^{g(x)}$, then $f'(x) = \\ln(a)a^{g(x)}g'(x)$",
//     //         explanation: "Use chain rule with general exponential derivative"
//     //       },
//     //       {
//     //         id: 17,
//     //         law: "Composite Natural Exponential",
//     //         formula: "If $f(x) = e^{g(x)}$, then $f'(x) = e^{g(x)}g'(x)$",
//     //         explanation: "Use chain rule with natural exponential derivative"
//     //       }
//     //     ],
      
//     //     "Logarithm Derivatives": [
//     //       {
//     //         id: 18,
//     //         law: "General Logarithm",
//     //         formula: "If $f(x) = \\log_a(x)$, then $f'(x) = \\frac{1}{\\ln(a)x}$",
//     //         explanation: "Derivative of logarithm includes natural log of base in denominator"
//     //       },
//     //       {
//     //         id: 19,
//     //         law: "Natural Logarithm",
//     //         formula: "If $f(x) = \\ln(x)$, then $f'(x) = \\frac{1}{x}$",
//     //         explanation: "The derivative of natural log is one over x"
//     //       },
//     //       {
//     //         id: 20,
//     //         law: "Composite General Logarithm",
//     //         formula: "If $f(x) = \\log_a(g(x))$, then $f'(x) = \\frac{g'(x)}{\\ln(a)g(x)}$",
//     //         explanation: "Use chain rule with general logarithm derivative"
//     //       },
//     //       {
//     //         id: 21,
//     //         law: "Composite Natural Logarithm",
//     //         formula: "If $f(x) = \\ln(g(x))$, then $f'(x) = \\frac{g'(x)}{g(x)}$",
//     //         explanation: "Use chain rule with natural logarithm derivative"
//     //       }
//     //     ]
//     //   };
//   return (
//     <>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//               side='right'
//               // topOffset='65px' 
//               sidebarWidth='45px'
//               panelWidth='200px'
//               iconColor='white'
//               panelBackgroundColor='#f2f2f2'
//             />
//       <Breadcrumb/>
//       <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Derivative Rules</h1>
//       <br/>
//       <SectionTableOfContents sections={derivativeRulesSections}/>
//       <br/>
//       <br/>
//       <IntroSection/>
//       <br/>
//       <Sections sections={derivativeRulesSections}/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//        {/* <ScrollUpButton/> */} 
//     </>
//   );
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "derivative rules",
  "differentiation rules",
  "power rule derivative",
  "product rule calculus",
  "quotient rule formula",
  "chain rule derivative",
  "constant rule differentiation",
  "sum rule derivative",
  "mean value theorem",
  "Rolle's theorem",
  "L'Hôpital's rule",
  "derivative formulas",
  "calculus differentiation",
  "basic derivative rules"
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
const derivativeRulesData = {
  "Differentiation Rules": [
    {
      id: 1,
      rule: "Constant Rule",
      formula: "If $f(x) = c$, then $f'(x) = 0$",
      explanation: "The derivative of any constant is zero"
    },
    {
      id: 2,
      rule: "Constant Multiple Rule",
      formula: "If $g(x) = c \\cdot f(x)$, then $g'(x) = c \\cdot f'(x)$",
      explanation: "Constants can be factored out of derivatives"
    },
    {
      id: 3,
      rule: "Power Rule",
      formula: "If $f(x) = x^n$, then $f'(x) = nx^{n-1}$",
      explanation: "Bring down the exponent and reduce the power by one"
    },
    {
      id: 4,
      rule: "Sum and Difference Rule",
      formula: "If $h(x) = f(x) \\pm g(x)$, then $h'(x) = f'(x) \\pm g'(x)$",
      explanation: "The derivative of a sum/difference is the sum/difference of derivatives"
    },
    {
      id: 5,
      rule: "Product Rule",
      formula: "If $h(x) = f(x)g(x)$, then $h'(x) = f'(x)g(x) + f(x)g'(x)$",
      explanation: "Derivative of first times second plus first times derivative of second"
    },
    {
      id: 6,
      rule: "Quotient Rule",
      formula: "If $h(x) = \\frac{f(x)}{g(x)}$, then $h'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$",
      explanation: "Low d-high minus high d-low over low squared"
    },
    {
      id: 7,
      rule: "Chain Rule",
      formula: "If $h(x) = f(g(x))$, then $h'(x) = f'(g(x))g'(x)$",
      explanation: "Derivative of outside function times derivative of inside function"
    },
    {
      id: 8,
      rule: "Mean Value Theorem",
      formula: "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a,b)$",
      explanation: "Instantaneous rate equals average rate at some interior point"
    },
    {
      id: 9,
      rule: "Rolle's Theorem",
      formula: "If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then $f'(c) = 0$ for some $c \\in (a,b)$",
      explanation: "Equal endpoint values guarantee a horizontal tangent between them"
    },
    {
      id: 10,
      rule: "L'Hôpital's Rule",
      formula: "If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, then $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$",
      explanation: "Replace indeterminate limit of functions with limit of their derivatives"
    }
  ]
};

const sectionsContent = {
  obj1: {
    title: `Constant Rule`,
    content: `
If $f(x) = c$ for some constant $c$, then

$$f'(x) = 0$$

A constant function has a horizontal graph—its slope is zero everywhere. From the limit definition: the difference quotient $\\frac{c - c}{h} = 0$ for all $h$, so the limit is $0$.

This rule is simple but essential. It establishes the baseline: quantities that do not change have zero rate of change. It also appears implicitly in every application of the sum rule, where constant terms vanish under differentiation.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Power Rule`,
    content: `
For any real exponent $n$:

$$\\frac{d}{dx}[x^n] = nx^{n-1}$$

The rule covers positive integers ($x^3 \\to 3x^2$), negative integers ($x^{-2} \\to -2x^{-3}$), fractions ($x^{1/2} \\to \\frac{1}{2}x^{-1/2}$), and irrational exponents ($x^\\pi \\to \\pi x^{\\pi - 1}$). For positive integer $n$, the proof uses the binomial expansion of $(x+h)^n$ in the limit definition. Extension to rational and real exponents requires [logarithmic differentiation](!/calculus/derivatives/techniques) or the generalized exponential $x^n = e^{n \\ln x}$.

The power rule is the most frequently applied differentiation formula. Combined with the constant multiple and sum rules, it handles all polynomials and many algebraic expressions directly.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Constant Multiple Rule`,
    content: `
If $c$ is a constant and $f$ is differentiable, then

$$\\frac{d}{dx}[c \\cdot f(x)] = c \\cdot f'(x)$$

Constants factor out of derivatives. The proof is immediate from the limit definition: the constant $c$ factors out of the difference quotient and passes through the limit.

This rule is a special case of the product rule (one factor being constant), but it is worth stating separately. In practice, factoring constants out before differentiating simplifies every computation.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Sum and Difference Rules`,
    content: `
If $f$ and $g$ are both differentiable, then

$$\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$

$$\\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$

The derivative of a sum is the sum of the derivatives. This follows from the limit definition by splitting the difference quotient into two parts and applying the sum rule for [limits](!/calculus/limits/rules).

The rule extends to any finite number of terms: the derivative of $f_1 + f_2 + \\cdots + f_n$ is $f_1' + f_2' + \\cdots + f_n'$. Combined with the constant multiple rule, this handles all linear combinations. In particular, every polynomial is differentiated term by term.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Product Rule`,
    content: `
If $f$ and $g$ are both differentiable, then

$$\\frac{d}{dx}[f(x) \\cdot g(x)] = f'(x) \\cdot g(x) + f(x) \\cdot g'(x)$$

The derivative of a product is not the product of the derivatives. Each factor takes a turn being differentiated while the other remains unchanged, and the two contributions are added.

The proof adds and subtracts $f(x+h)g(x)$ inside the difference quotient for $f(x)g(x)$, splitting it into a piece that isolates $g'$ and a piece that isolates $f'$. The fact that [differentiability implies continuity](!/calculus/derivatives/differentiability) ensures that $f(x+h) \\to f(x)$ as $h \\to 0$.

For three factors: $(fgh)' = f'gh + fg'h + fgh'$. The pattern generalizes—each factor is differentiated once while all others remain, and the results are summed.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj6: {
    title: `Quotient Rule`,
    content: `
If $f$ and $g$ are differentiable and $g(x) \\neq 0$, then

$$\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x) \\cdot g(x) - f(x) \\cdot g'(x)}{[g(x)]^2}$$

The numerator subtracts where the product rule adds, and the entire expression is divided by the square of the denominator. The order matters: $f'g - fg'$, not $fg' - f'g$.

The quotient rule can be derived from the product rule by writing $f/g = f \\cdot g^{-1}$ and applying the chain rule to $g^{-1}$. Both approaches yield the same formula. In practice, the quotient rule is applied directly when the function is naturally a fraction, and rewriting as a product is preferred when the denominator is a simple power.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj7: {
    title: `Chain Rule`,
    content: `
If $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then the composite function $f \\circ g$ is differentiable at $x$ and

$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$

Differentiate the outer function evaluated at the inner function, then multiply by the derivative of the inner function. In Leibniz notation, with $y = f(u)$ and $u = g(x)$:

$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$$

The notation suggests fraction cancellation, and while $dy/dx$ is not literally a fraction, the chain rule makes Leibniz notation behave as though it were.

The chain rule extends to deeper compositions. For $f(g(h(x)))$: differentiate the outermost function at its argument, multiply by the derivative of the next layer at its argument, and continue inward. Each layer contributes a multiplicative factor.

This is the most powerful of the basic rules. Without it, [composite functions](!/calculus/derivatives/common)—$\\sin(x^2)$, $e^{3x}$, $\\ln(\\cos x)$—cannot be differentiated. Most applications of differentiation involve the chain rule at some level.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj8: {
    title: `Mean Value Theorem`,
    content: `
If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one point $c \\in (a, b)$ such that

$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

The instantaneous rate of change at $c$ equals the average rate of change over the entire interval. Geometrically, there is a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.

The Mean Value Theorem is primarily a theoretical tool. It proves that a function with positive derivative on an interval is increasing. It establishes that two functions with the same derivative differ by a constant. It justifies the connection between antiderivatives and definite integrals in the Fundamental Theorem of Calculus.

The hypotheses are essential. Continuity on the closed interval $[a, b]$ ensures no gaps at the endpoints. Differentiability on the open interval $(a, b)$ ensures the derivative exists at interior points. Functions that violate either condition may fail the conclusion.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Rolle's Theorem`,
    content: `
Rolle's Theorem is the special case of the Mean Value Theorem where $f(a) = f(b)$.

If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists at least one point $c \\in (a, b)$ with $f'(c) = 0$.

A function that starts and ends at the same value must have a horizontal tangent somewhere between. If the function rises above its starting value, it must turn around—creating a maximum with zero slope. If it drops below, it must turn upward—creating a minimum. If it stays constant, $f'(x) = 0$ everywhere on the interval.

Rolle's Theorem is often used as a stepping stone in proofs. The Mean Value Theorem itself is proven by applying Rolle's Theorem to an auxiliary function constructed to satisfy $g(a) = g(b)$. It also appears in arguments about the number of roots: between any two roots of $f$, there must be a root of $f'$.
`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `L'Hôpital's Rule`,
    content: `
If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ produces the indeterminate form $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, and if $\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$ exists (or equals $\\pm\\infty$), then

$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$

The rule replaces a difficult limit of functions with a (potentially simpler) limit of their derivatives. It applies equally when $a$ is finite or $a = \\pm\\infty$.

Critical requirements: the original limit must be an indeterminate form, and the limit of the derivative ratio must exist or be $\\pm\\infty$. If the derivative ratio produces another indeterminate form, L'Hôpital's rule may be applied again. If the derivative ratio oscillates or fails to exist, the rule gives no information—it does not say the original limit fails to exist, only that this method does not resolve it.

Other indeterminate forms—$0 \\cdot \\infty$, $\\infty - \\infty$, $0^0$, $1^\\infty$, $\\infty^0$—can be converted to $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ through algebraic rearrangement, then handled by L'Hôpital's rule. The conversion step varies by form: $0 \\cdot \\infty$ becomes a fraction by moving one factor to the denominator; exponential forms use the identity $f(x)^{g(x)} = e^{g(x) \\ln f(x)}$.
`,
    before: ``,
    after: ``,
    link: '',
  },
};


const introContent = {
  id: `intro`,
  title: `Replacing the Limit with Algebra`,
  content: `
The [limit definition](!/calculus/derivatives) of the derivative is precise but impractical for routine computation. Evaluating $\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$ for every function and every point would make calculus unworkable. Differentiation rules extract patterns from the definition and package them into algebraic formulas that apply to entire classes of functions.

The basic rules—power, sum, product, quotient, chain—handle nearly all explicit functions encountered in practice. Each rule is proven once from the limit definition, then used without returning to it. Together they reduce differentiation to mechanical manipulation, freeing attention for the harder question of what the derivative means in context.

Beyond computational rules, three theorems govern the behavior of derivatives on intervals. The Mean Value Theorem connects instantaneous and average rates of change. Rolle's Theorem guarantees horizontal tangents under symmetric conditions. L'Hôpital's rule turns indeterminate [limits](!/calculus/limits/evaluating) into derivative computations.
`
};




const faqQuestions = {
  obj1: {
    question: "What are the basic derivative rules?",
    answer: "The basic derivative rules include the constant rule, power rule, constant multiple rule, sum and difference rules, product rule, quotient rule, and chain rule. Together these rules handle nearly all explicit functions encountered in calculus without returning to the limit definition.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the power rule for derivatives?",
    answer: "The power rule states that if f(x) = xⁿ for any real exponent n, then f'(x) = nxⁿ⁻¹. It applies to positive integers, negative integers, fractions, and irrational exponents, making it the most frequently applied differentiation formula.",
    sectionId: "2"
  },
  obj3: {
    question: "How does the chain rule work?",
    answer: "The chain rule differentiates composite functions. For f(g(x)), the derivative is f'(g(x)) · g'(x): differentiate the outer function evaluated at the inner function, then multiply by the derivative of the inner function. In Leibniz notation, dy/dx = dy/du · du/dx.",
    sectionId: "7"
  },
  obj4: {
    question: "What is the Mean Value Theorem?",
    answer: "The Mean Value Theorem states that if f is continuous on [a, b] and differentiable on (a, b), then there exists a point c in (a, b) where f'(c) equals the average rate of change (f(b) − f(a))/(b − a). It guarantees the instantaneous rate matches the average rate at some interior point.",
    sectionId: "8"
  },
  obj5: {
    question: "When can you use L'Hôpital's rule?",
    answer: "L'Hôpital's rule applies when a limit of f(x)/g(x) produces the indeterminate form 0/0 or ∞/∞. It replaces the limit of the functions with the limit of their derivatives. Other indeterminate forms like 0·∞ or 1^∞ must first be converted to 0/0 or ∞/∞ through algebraic rearrangement.",
    sectionId: "10"
  },
  obj6: {
    question: "What is the difference between the product rule and quotient rule?",
    answer: "The product rule gives (fg)' = f'g + fg', adding two terms. The quotient rule gives (f/g)' = (f'g − fg')/g², subtracting in the numerator and dividing by the denominator squared. The quotient rule can be derived from the product rule by writing f/g as f · g⁻¹ and applying the chain rule.",
    sectionId: "6"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Derivative Rules",
    "description": "Complete guide to differentiation rules: power, product, quotient, chain rules plus Mean Value Theorem, Rolle's Theorem, and L'Hôpital's rule with proofs and examples.",
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
      "name": "Derivative Rules"
    },
    "teaches": [
      "Power rule, constant rule, and constant multiple rule",
      "Sum, difference, product, and quotient rules",
      "Chain rule for composite functions",
      "Mean Value Theorem and its applications",
      "Rolle's Theorem as a special case of MVT",
      "L'Hôpital's rule for indeterminate limits"
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
        "name": "Derivative Rules",
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



  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Derivative Rules | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/calculus/derivatives",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Derivative Rules: Formulas & Theorems | Learn Math Class",
      description: "Complete guide to differentiation rules: power, product, quotient, chain rules plus Mean Value Theorem, Rolle's Theorem, and L'Hôpital's rule with proofs and examples.",
      keywords: keyWords.join(", "),
      url: "/calculus/derivatives",
      name: "Derivative Rules"
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
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Derivative Rules</h1>
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

