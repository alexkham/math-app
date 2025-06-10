import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import React from 'react'
import '../../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import Sections from '@/app/components/page-components/section/Sections';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import ExpandableTable from '@/app/components/generic-table/ExpandableTable';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';



export async function getStaticProps(){

  const keyWords=['derivative rules','differentiation rules', 'rules of differentiation',
    'basic derivative rules','basic differentiation rules','derivation','calculus','derivative'
   ]

   
   const derivativeRulesData = {
    "Basic Rules": [
      {
        id: 1,
        law: "Constant Rule",
        formula: "If $f(x) = c$, then $f'(x) = 0$",
        explanation: "The derivative of any constant is zero"
      },
      {
        id: 2,
        law: "Constant Multiple Rule",
        formula: "If $g(x) = c \\cdot f(x)$, then $g'(x) = c \\cdot f'(x)$",
        explanation: "Constants can be factored out of derivatives"
      },
      {
        id: 3,
        law: "Power Rule",
        formula: "If $f(x) = x^n$, then $f'(x) = nx^{n-1}$",
        explanation: "Bring down the exponent and reduce the power by one"
      },
      {
        id: 4,
        law: "Sum and Difference Rule",
        formula: "If $h(x) = f(x) \\pm g(x)$, then $h'(x) = f'(x) \\pm g'(x)$",
        explanation: "The derivative of a sum/difference is the sum/difference of derivatives"
      },
      {
        id: 5,
        law: "Product Rule",
        formula: "If $h(x) = f(x)g(x)$, then $h'(x) = f'(x)g(x) + f(x)g'(x)$",
        explanation: "Derivative of first times second plus first times derivative of second"
      },
      {
        id: 6,
        law: "Quotient Rule",
        formula: "If $h(x) = \\frac{f(x)}{g(x)}$, then $h'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$",
        explanation: "Low d-high minus high d-low over low squared"
      },
      {
        id: 7,
        law: "Chain Rule",
        formula: "If $h(x) = f(g(x))$, then $h'(x) = f'(g(x))g'(x)$",
        explanation: "Derivative of outside function times derivative of inside function"
      }
    ],
  
    "Trigonometric Derivatives": [
      {
        id: 8,
        law: "Sine Derivative",
        formula: "If $f(x) = \\sin(x)$, then $f'(x) = \\cos(x)$",
        explanation: "The derivative of sine is cosine"
      },
      {
        id: 9,
        law: "Cosine Derivative",
        formula: "If $f(x) = \\cos(x)$, then $f'(x) = -\\sin(x)$",
        explanation: "The derivative of cosine is negative sine"
      },
      {
        id: 10,
        law: "Tangent Derivative",
        formula: "If $f(x) = \\tan(x)$, then $f'(x) = \\sec^2(x)$",
        explanation: "The derivative of tangent is secant squared"
      },
      {
        id: 11,
        law: "Secant Derivative",
        formula: "If $f(x) = \\sec(x)$, then $f'(x) = \\sec(x)\\tan(x)$",
        explanation: "The derivative of secant is secant times tangent"
      },
      {
        id: 12,
        law: "Cotangent Derivative",
        formula: "If $f(x) = \\cot(x)$, then $f'(x) = -\\csc^2(x)$",
        explanation: "The derivative of cotangent is negative cosecant squared"
      },
      {
        id: 13,
        law: "Cosecant Derivative",
        formula: "If $f(x) = \\csc(x)$, then $f'(x) = -\\csc(x)\\cot(x)$",
        explanation: "The derivative of cosecant is negative cosecant times cotangent"
      }
    ],
  
    "Exponential Derivatives": [
      {
        id: 14,
        law: "General Exponential",
        formula: "If $f(x) = a^x$, then $f'(x) = \\ln(a)a^x$",
        explanation: "Derivative of exponential includes natural log of the base"
      },
      {
        id: 15,
        law: "Natural Exponential",
        formula: "If $f(x) = e^x$, then $f'(x) = e^x$",
        explanation: "The derivative of e to the x is itself"
      },
      {
        id: 16,
        law: "Composite General Exponential",
        formula: "If $f(x) = a^{g(x)}$, then $f'(x) = \\ln(a)a^{g(x)}g'(x)$",
        explanation: "Use chain rule with general exponential derivative"
      },
      {
        id: 17,
        law: "Composite Natural Exponential",
        formula: "If $f(x) = e^{g(x)}$, then $f'(x) = e^{g(x)}g'(x)$",
        explanation: "Use chain rule with natural exponential derivative"
      }
    ],
  
    "Logarithm Derivatives": [
      {
        id: 18,
        law: "General Logarithm",
        formula: "If $f(x) = \\log_a(x)$, then $f'(x) = \\frac{1}{\\ln(a)x}$",
        explanation: "Derivative of logarithm includes natural log of base in denominator"
      },
      {
        id: 19,
        law: "Natural Logarithm",
        formula: "If $f(x) = \\ln(x)$, then $f'(x) = \\frac{1}{x}$",
        explanation: "The derivative of natural log is one over x"
      },
      {
        id: 20,
        law: "Composite General Logarithm",
        formula: "If $f(x) = \\log_a(g(x))$, then $f'(x) = \\frac{g'(x)}{\\ln(a)g(x)}$",
        explanation: "Use chain rule with general logarithm derivative"
      },
      {
        id: 21,
        law: "Composite Natural Logarithm",
        formula: "If $f(x) = \\ln(g(x))$, then $f'(x) = \\frac{g'(x)}{g(x)}$",
        explanation: "Use chain rule with natural logarithm derivative"
      }
    ]
  };
  
  const sectionsContent={

    basic:{
      title:`Basic Rules`,
      content:``,
      before:``,
      after:``,
  
  
    },
    trigonometric:{
      title:`Trigonometric Derivatives`,
      content:``,
      before:``,
      after:``,
  
    },
  
    exponential:{
  
      title:`Exponential Derivatives`,
      content:``,
      before:``,
      after:``,
  
    },
    logarithm:{
      title:`Logarithm Derivatives`,
      content:``,
      before:``,
      after:``,
  
    },


    // obj5:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
  
    // }
  
  }


  return {
    props:{
      sectionsContent,
      keyWords,
      derivativeRulesData

      
    }
  }
}


export default function DerivativeRulesPage({sectionsContent,keyWords ,derivativeRulesData}) {
   

  
  const derivativeRulesSections=[
    {
        id:'basic',
        title:sectionsContent.basic.title,
        link:'',
        content:[
          <div>
          <ExpandableTable key={1}
          data={derivativeRulesData[sectionsContent.basic.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,

        ]
    },
    {
        id:'trigonometric',
        title:sectionsContent.trigonometric.title,
        link:'',
        content:[

          <div>
          <ExpandableTable key={2}
          data={derivativeRulesData[sectionsContent.trigonometric.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,


        ]
    },
    {
        id:'exponential',
        title:sectionsContent.exponential.title,
        link:'',
        content:[

          <div>
          <ExpandableTable key={3}
          data={derivativeRulesData[sectionsContent.exponential.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,


        ]
    },
    {
      id:'logarithm',
      title:sectionsContent.logarithm.title,
      link:'',
      content:[

        <div>
        <ExpandableTable key={4}
        data={derivativeRulesData[sectionsContent.logarithm.title]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,


      ]
  }
]
 

    // const derivativeRulesData = {
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
  return (
   <>
   <GenericNavbar/>
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Derivative Rules</h1>
   <br/>
   
   <SectionTableOfContents sections={derivativeRulesSections}/>
   <br/>
   <br/>
   <IntroSection/>
   <br/>
   <Sections sections={derivativeRulesSections}/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>

   
   
   </>
  )
}
