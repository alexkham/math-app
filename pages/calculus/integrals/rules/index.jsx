import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import React from 'react'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import Sections from '@/app/components/page-components/section/Sections';
import ExpandableTable from '@/app/components/generic-table/ExpandableTable';


export async function getStaticProps(){

    
    const integralRulesData = {
        "Basic Integration Rules": [
          {
            id: 1,
            law: "Constant Rule",
            formula: "$\\int c \\, dx = cx + C$",
            explanation: "The integral of a constant is the constant times x plus the constant of integration"
          },
          {
            id: 2,
            law: "Constant Multiple Rule",
            formula: "$\\int c \\cdot f(x) \\, dx = c \\int f(x) \\, dx$",
            explanation: "Constants can be factored out of integrals"
          },
          {
            id: 3,
            law: "Power Rule",
            formula: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (where $n \\neq -1$)",
            explanation: "Add one to the exponent and divide by the new exponent"
          },
          {
            id: 4,
            law: "Sum and Difference Rule",
            formula: "$\\int [f(x) \\pm g(x)] \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$",
            explanation: "The integral of a sum/difference is the sum/difference of integrals"
          },
          {
            id: 5,
            law: "Special Power Rule",
            formula: "$\\int x^{-1} \\, dx = \\int \\frac{1}{x} \\, dx = \\ln|x| + C$",
            explanation: "The integral of one over x is the natural logarithm of absolute value of x"
          }
        ],
       
        "Trigonometric Integrals": [
          {
            id: 6,
            law: "Sine Integral",
            formula: "$\\int \\sin(x) \\, dx = -\\cos(x) + C$",
            explanation: "The integral of sine is negative cosine"
          },
          {
            id: 7,
            law: "Cosine Integral",
            formula: "$\\int \\cos(x) \\, dx = \\sin(x) + C$",
            explanation: "The integral of cosine is sine"
          },
          {
            id: 8,
            law: "Tangent Integral",
            formula: "$\\int \\tan(x) \\, dx = -\\ln|\\cos(x)| + C = \\ln|\\sec(x)| + C$",
            explanation: "The integral of tangent is negative natural log of absolute cosine"
          },
          {
            id: 9,
            law: "Cotangent Integral",
            formula: "$\\int \\cot(x) \\, dx = \\ln|\\sin(x)| + C$",
            explanation: "The integral of cotangent is natural log of absolute sine"
          },
          {
            id: 10,
            law: "Secant Integral",
            formula: "$\\int \\sec(x) \\, dx = \\ln|\\sec(x) + \\tan(x)| + C$",
            explanation: "The integral of secant involves natural log of secant plus tangent"
          },
          {
            id: 11,
            law: "Cosecant Integral",
            formula: "$\\int \\csc(x) \\, dx = -\\ln|\\csc(x) + \\cot(x)| + C$",
            explanation: "The integral of cosecant involves negative natural log of cosecant plus cotangent"
          },
          {
            id: 12,
            law: "Secant Squared Integral",
            formula: "$\\int \\sec^2(x) \\, dx = \\tan(x) + C$",
            explanation: "The integral of secant squared is tangent"
          },
          {
            id: 13,
            law: "Cosecant Squared Integral",
            formula: "$\\int \\csc^2(x) \\, dx = -\\cot(x) + C$",
            explanation: "The integral of cosecant squared is negative cotangent"
          },
          {
            id: 14,
            law: "Secant Tangent Integral",
            formula: "$\\int \\sec(x)\\tan(x) \\, dx = \\sec(x) + C$",
            explanation: "The integral of secant times tangent is secant"
          },
          {
            id: 15,
            law: "Cosecant Cotangent Integral",
            formula: "$\\int \\csc(x)\\cot(x) \\, dx = -\\csc(x) + C$",
            explanation: "The integral of cosecant times cotangent is negative cosecant"
          }
        ],

        "Inverse Trigonometric Integrals": [
            {
              id: 21,
              law: "Arcsine Integral Form",
              formula: "$\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx = \\arcsin(x) + C$",
              explanation: "Standard form that integrates to arcsine"
            },
            {
              id: 22,
              law: "Arctangent Integral Form",
              formula: "$\\int \\frac{1}{1+x^2} \\, dx = \\arctan(x) + C$",
              explanation: "Standard form that integrates to arctangent"
            },
            {
              id: 23,
              law: "Arcsecant Integral Form",
              formula: "$\\int \\frac{1}{x\\sqrt{x^2-1}} ,dx =\arcsec|x| + C$",
              explanation: "Standard form that integrates to arcsecant of absolute x"
            },
            {
              id: 24,
              law: "General Arcsine Form",
              formula: "$\\int \\frac{1}{\\sqrt{a^2-x^2}} \\, dx = \\arcsin\\left(\\frac{x}{a}\\right) + C$",
              explanation: "Generalized arcsine integral form with parameter a"
            },
            {
              id: 25,
              law: "General Arctangent Form",
              formula: "$\\int \\frac{1}{a^2+x^2} \\, dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$",
              explanation: "Generalized arctangent integral form with parameter a"
            }
          ],
       
        "Exponential and Logarithmic Integrals": [
          {
            id: 16,
            law: "Natural Exponential Integral",
            formula: "$\\int e^x \\, dx = e^x + C$",
            explanation: "The integral of e to the x is itself"
          },
          {
            id: 17,
            law: "General Exponential Integral",
            formula: "$\\int a^x \\, dx = \\frac{a^x}{\\ln(a)} + C$ (where $a > 0$, $a \\neq 1$)",
            explanation: "The integral of exponential includes division by natural log of the base"
          },
          {
            id: 18,
            law: "Composite Natural Exponential",
            formula: "$\\int e^{f(x)} f'(x) \\, dx = e^{f(x)} + C$",
            explanation: "Integration by substitution with natural exponential"
          },
          {
            id: 19,
            law: "Composite General Exponential",
            formula: "$\\int a^{f(x)} f'(x) \\, dx = \\frac{a^{f(x)}}{\\ln(a)} + C$",
            explanation: "Integration by substitution with general exponential"
          },
          {
            id: 20,
            law: "Reciprocal Function Integral",
            formula: "$\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C$",
            explanation: "The integral of derivative over function is natural log of absolute function"
          }
        ],
       
       
       
        "Integration Techniques": [
          {
            id: 26,
            law: "Integration by Parts",
            formula: "$\\int u \\, dv = uv - \\int v \\, du$",
            explanation: "Method for integrating products of functions"
          },
          {
            id: 27,
            law: "U-Substitution",
            formula: "$\\int f(g(x))g'(x) \\, dx = \\int f(u) \\, du$ where $u = g(x)$",
            explanation: "Method for integrating composite functions using substitution"
          },
          {
            id: 28,
            law: "Fundamental Theorem of Calculus",
            formula: "$\\int_a^b f(x) \\, dx = F(b) - F(a)$ where $F'(x) = f(x)$",
            explanation: "Connects definite integrals with antiderivatives"
          },
          {
            id: 29,
            law: "Integration by Partial Fractions",
            formula: "$\\int \\frac{P(x)}{Q(x)} \\, dx = \\int \\left(\\sum \\frac{A_i}{(x-r_i)^{n_i}}\\right) dx$",
            explanation: "Method for integrating rational functions by decomposition"
          }
        ]
       };


       const sectionsContent={

        basic:{
          title:`Basic Integration Rules`,
          content:``,
          before:``,
          after:``,
      
      
        },
        trigonometric:{
          title:`Trigonometric Integrals`,
          content:``,
          before:``,
          after:``,
      
        },

        inverse:{
            title:`Inverse Trigonometric Integrals`,
            content:``,
            before:``,
            after:``,
        
          },
      
        exponential:{
      
          title:`Exponential and Logarithmic Integrals`,
          content:``,
          before:``,
          after:``,
      
        },
       
    
    
        techniques:{
      
          title:`Integration Techniques`,
          content:``,
          before:``,
          after:``,
      
        },
        
        // obj5:{
      
        //     title:``,
        //     content:``,
        //     before:``,
        //     after:``,
        
        //   },
          
        // obj5:{
      
        //     title:``,
        //     content:``,
        //     before:``,
        //     after:``,
        
        //   }
      
      }
    


    return {
      props:{
        sectionsContent,
        integralRulesData,
        
      }
    }
  }

export default function IntegralRulesPage({sectionsContent, integralRulesData}) {

    
  const integralRulesSections=[
    {
        id:'basic',
        title:sectionsContent.basic.title,
        link:'',
        content:[
            <div key={1}>
          <ExpandableTable 
          data={integralRulesData[sectionsContent.basic.title]}
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
            <div key={2}>
            <ExpandableTable 
            data={integralRulesData[sectionsContent.trigonometric.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
  

        ]
    },
    {
        id:'inverse',
        title:sectionsContent.inverse.title,
        link:'',
        content:[

            <div key={3}>
            <ExpandableTable 
            data={integralRulesData[sectionsContent.inverse.title]}
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

            <div key={4}>
            <ExpandableTable 
            data={integralRulesData[sectionsContent.exponential.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
  
            
        ]
    },
    {
        id:'techniques',
        title:sectionsContent.techniques.title,
        link:'',
        content:[

            <div key={5}>
            <ExpandableTable 
            data={integralRulesData[sectionsContent.techniques.title]}
             displayColumns={ ["law", "formula", "explanation"]}
             copyableFields={["formula"]}
             includedFields={ ["law", "formula", "explanation"]} />
             </div> ,
  
            
        ]
    }
]


  return (
    <>
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
      <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>Integration Rules</h1>
      <br/>
      <SectionTableOfContents sections={integralRulesSections}/>
      <br/>
      <br/>
      <br/>
      {/* <IntroSection/> */}
      <br/>
      <br/>
      <br/>
      <Sections sections={integralRulesSections}/>
      <br/>
      <br/>
       {/* <ScrollUpButton/> */} 
    </>
  );
}
