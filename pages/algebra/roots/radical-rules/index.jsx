import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import ExpandableTable from '@/app/components/generic-table/ExpandableTable'



export async function getStaticProps(){


   const keyWords=['radical rules','radical laws','root rules','laws of radicals']

  const rootRadicalRulesData = {
    "Definition and Basic Rules": [
      {
        id: 1,
        law: "Definition of $n$-th Root",
        formula: "$\\sqrt[n]{a} = b \\iff b^n = a$",
        explanation: "The nth root asks what number raised to the nth power gives a",
        // content:{
        //   text:'Hello',
        // }
      },
      {
        id: 2,
        law: "Principal Root Convention",
        formula: "$\\sqrt[n]{a}$ refers to the principal (non-negative) root when n is even",
        explanation: "For even roots, we take the positive value by convention"
      },
      {
        id: 3,
        law: "Square Root Rule",
        formula: "$\\sqrt{a^2} = |a|$",
        explanation: "Square root of a square gives the absolute value"
      },
      {
        id: 4,
        law: "Odd Root Rule",
        formula: "$\\sqrt[n]{a^n} = a$ (when n is odd)",
        explanation: "Odd roots preserve the sign of the original number"
      },
      {
        id: 5,
        law: "Even Root Rule",
        formula: "$\\sqrt[n]{a^n} = |a|$ (when n is even)",
        explanation: "Even roots always give non-negative results"
      }
    ],
  
    "Product and Quotient Rules": [
      {
        id: 6,
        law: "Product Rule",
        formula: "$\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$",
        explanation: "Root of a product equals product of roots"
      },
      {
        id: 7,
        law: "Quotient Rule",
        formula: "$\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}$",
        explanation: "Root of a quotient equals quotient of roots"
      },
      {
        id: 8,
        law: "Product with Different Indices",
        formula: "$\\sqrt[m]{a} \\cdot \\sqrt[n]{b}$ cannot be simplified directly",
        explanation: "Different indices require conversion to fractional exponents"
      }
    ],
  
    "Power and Exponent Rules": [
      {
        id: 9,
        law: "Power of a Root",
        formula: "$(\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$",
        explanation: "Power of a root can be moved inside the radical"
      },
      {
        id: 10,
        law: "Root of a Power",
        formula: "$\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$",
        explanation: "Root of a power becomes fractional exponent"
      },
      {
        id: 11,
        law: "Fractional Exponent Conversion",
        formula: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$",
        explanation: "Fractional exponents and radicals are equivalent"
      },
      {
        id: 12,
        law: "Power Rule for Same Index",
        formula: "$(\\sqrt[n]{a})^n = a$ (when defined)",
        explanation: "nth power of nth root returns to original value"
      }
    ],
  
    "Nested Root Rules": [
      {
        id: 13,
        law: "Root of a Root",
        formula: "$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} = a^{\\frac{1}{mn}}$",
        explanation: "Nested roots multiply their indices"
      },
      {
        id: 14,
        law: "Nested Root Simplification",
        formula: "Multiple nested roots can be combined systematically",
        explanation: "Simplify by converting to fractional exponents"
      }
    ],
  
    "Simplification Rules": [
      {
        id: 15,
        law: "Perfect Factor Extraction",
        formula: "$\\sqrt[n]{a^n \\cdot b} = a \\cdot \\sqrt[n]{b}$",
        explanation: "Extract perfect nth powers from under the radical"
      },
      {
        id: 16,
        law: "Like Radical Combination",
        formula: "$a\\sqrt[n]{c} + b\\sqrt[n]{c} = (a + b)\\sqrt[n]{c}$",
        explanation: "Combine radicals with same index and radicand"
      },
      {
        id: 17,
        law: "Index Reduction",
        formula: "$\\sqrt[mn]{a^{mn}} = \\sqrt[m]{a^m}$",
        explanation: "Reduce radical index and exponent by common factors"
      },
      {
        id: 18,
        law: "Radical Factor Cancellation",
        formula: "$\\frac{\\sqrt[n]{a^m}}{\\sqrt[n]{a^k}} = \\sqrt[n]{a^{m-k}}$",
        explanation: "Cancel common factors in radical fractions"
      }
    ],
  
    "Rationalization Rules": [
      {
        id: 19,
        law: "Simple Denominator Rationalization",
        formula: "$\\frac{1}{\\sqrt[n]{a}} = \\frac{\\sqrt[n]{a^{n-1}}}{a}$",
        explanation: "Multiply by appropriate radical to clear denominator"
      },
      {
        id: 20,
        law: "Conjugate Rationalization",
        formula: "$\\frac{1}{a + b\\sqrt{c}} = \\frac{a - b\\sqrt{c}}{(a + b\\sqrt{c})(a - b\\sqrt{c})}$",
        explanation: "Use conjugate to rationalize binomial denominators"
      },
      {
        id: 21,
        law: "Higher Index Rationalization",
        formula: "Complex expressions require systematic approaches",
        explanation: "May need multiple steps or different techniques"
      }
    ],
  
    "Special Value Rules": [
      {
        id: 22,
        law: "Root of 1",
        formula: "$\\sqrt[n]{1} = 1$",
        explanation: "Any root of 1 equals 1"
      },
      {
        id: 23,
        law: "Root of 0",
        formula: "$\\sqrt[n]{0} = 0$",
        explanation: "Any root of 0 equals 0"
      },
      {
        id: 24,
        law: "Root of Perfect Powers",
        formula: "$\\sqrt[n]{b^n} = |b|$ (even n) or $b$ (odd n)",
        explanation: "Roots of perfect powers simplify directly"
      }
    ],
  
    "Domain and Sign Rules": [
      {
        id: 25,
        law: "Even Root Domain",
        formula: "$\\sqrt[n]{a}$ is defined for $a \\geq 0$ when n is even (in real numbers)",
        explanation: "Even roots of negative numbers are undefined in real numbers"
      },
      {
        id: 26,
        law: "Odd Root Domain",
        formula: "$\\sqrt[n]{a}$ is defined for all real $a$ when n is odd",
        explanation: "Odd roots can handle negative radicands"
      },
      {
        id: 27,
        law: "Sign Preservation",
        formula: "$\\sqrt[n]{-a} = -\\sqrt[n]{a}$ when n is odd",
        explanation: "Odd roots preserve and can extract negative signs"
      },
      {
        id: 28,
        law: "Complex Extensions",
        formula: "Even roots of negative numbers exist in complex numbers",
        explanation: "$\\sqrt{-1} = i$ in the complex number system"
      }
    ],
  
    "Equation Solving Rules": [
      {
        id: 29,
        law: "Radical Equation Principle",
        formula: "If $\\sqrt[n]{f(x)} = g(x)$, then $f(x) = (g(x))^n$",
        explanation: "Raise both sides to the nth power to eliminate radical"
      },
      {
        id: 30,
        law: "Extraneous Solution Check",
        formula: "Always verify solutions in original equation",
        explanation: "Raising to even powers can introduce false solutions"
      },
      {
        id: 31,
        law: "Domain Restrictions",
        formula: "Solutions must satisfy original domain constraints",
        explanation: "Check that radicands are non-negative for even roots"
      }
    ]
  };

  
  const sectionsContent={

    basic:{
      title:`Definition and Basic Rules`,
      content:``,
      before:``,
      after:``,
  
  
    },
    product:{
      title:`Product and Quotient Rules`,
      content:``,
      before:``,
      after:``,
  
    },
  
    power:{
  
      title:`Power and Exponent Rules`,
      content:``,
      before:``,
      after:``,
  
    },
    nested:{
      title:`Nested Root Rules`,
      content:``,
      before:``,
      after:``,
  
    },


    simplification:{
  
      title:`Simplification Rules`,
      content:``,
      before:``,
      after:``,
  
    },
    rationalization:{
  
      title:`Rationalization Rules`,
      content:``,
      before:``,
      after:``,
  
    }
  ,
  special:{
  
    title:`Special Value Rules`,
    content:``,
    before:``,
    after:``,

  }
,
domain:{
  
  title:`Domain and Sign Rules`,
  content:``,
  before:``,
  after:``,

}
,
equation:{
  
  title:`Equation Solving Rules`,
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
    
      rootRadicalRulesData,
      keyWords,
      sectionsContent
      
    }
  }
}


export default function RadicalRulesPage({rootRadicalRulesData,keyWords ,sectionsContent}) {


  
  const radicalsSections=[
    {
        id:'basic',
        title:sectionsContent.basic.title,
        link:'',
        content:[
          <div key={1} style={{marginLeft:'20px',marginRight:'20px'}}>
          <ExpandableTable key={12}
          data={rootRadicalRulesData[sectionsContent.basic.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,
        ]
    },
    {
        id:'product',
        title:sectionsContent.product.title,
        link:'',
        content:[

          <div key={2} style={{marginLeft:'20px',marginRight:'20px'}}>
          <ExpandableTable key={12}
          data={rootRadicalRulesData[sectionsContent.product.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,

        ]
    },
    {
        id:'power',
        title:sectionsContent.power.title,
        link:'',
        content:[
          <div key={3} style={{marginLeft:'20px',marginRight:'20px'}}>
          <ExpandableTable key={12}
          data={rootRadicalRulesData[sectionsContent.power.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,
        ]
    },
    {
      id:'nested',
      title:sectionsContent.nested.title,
      link:'',
      content:[
        <div key={4} style={{marginLeft:'20px',marginRight:'20px'}}>
        <ExpandableTable key={12}
        data={rootRadicalRulesData[sectionsContent.nested.title]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
      ]
  },
  {
    id:'simplification',
    title:sectionsContent.simplification.title,
    link:'',
    content:[
      <div key={5} style={{marginLeft:'20px',marginRight:'20px'}}>
      <ExpandableTable key={12}
      data={rootRadicalRulesData[sectionsContent.simplification.title]}
       displayColumns={ ["law", "formula", "explanation"]}
       copyableFields={["formula"]}
       includedFields={ ["law", "formula", "explanation"]} />
       </div> ,
    ]
},
{
  id:'rationalization',
  title:sectionsContent.rationalization.title,
  link:'',
  content:[
    <div key={6} style={{marginLeft:'20px',marginRight:'20px'}}>
    <ExpandableTable key={12}
    data={rootRadicalRulesData[sectionsContent.rationalization.title]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
  ]
},
{
  id:'special',
  title:sectionsContent.special.title,
  link:'',
  content:[
    <div key={7} style={{marginLeft:'20px',marginRight:'20px'}}>
    <ExpandableTable key={12}
    data={rootRadicalRulesData[sectionsContent.special.title]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
  ]
},
{
  id:'domain',
  title:sectionsContent.domain.title,
  link:'',
  content:[
    <div key={8} style={{marginLeft:'20px',marginRight:'20px'}}>
    <ExpandableTable key={12}
    data={rootRadicalRulesData[sectionsContent.domain.title]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
  ]
},
{
  id:'equation',
  title:sectionsContent.equation.title,
  link:'',
  content:[
    <div key={9} style={{marginLeft:'20px',marginRight:'20px'}}>
    <ExpandableTable key={12}
    data={rootRadicalRulesData[sectionsContent.equation.title]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
  ]
},
// {
//   id:'',
//   title:'',
//   link:'',
//   content:''
// }
]

    // const keyWords=['radical rules','radical laws','root rules','laws of radicals']

    // const rootRadicalRulesData = {
    //   "Definition and Basic Rules": [
    //     {
    //       id: 1,
    //       law: "Definition of nth Root",
    //       formula: "$\\sqrt[n]{a} = b \\iff b^n = a$",
    //       explanation: "The nth root asks what number raised to the nth power gives a"
    //     },
    //     {
    //       id: 2,
    //       law: "Principal Root Convention",
    //       formula: "$\\sqrt[n]{a}$ refers to the principal (non-negative) root when n is even",
    //       explanation: "For even roots, we take the positive value by convention"
    //     },
    //     {
    //       id: 3,
    //       law: "Square Root Rule",
    //       formula: "$\\sqrt{a^2} = |a|$",
    //       explanation: "Square root of a square gives the absolute value"
    //     },
    //     {
    //       id: 4,
    //       law: "Odd Root Rule",
    //       formula: "$\\sqrt[n]{a^n} = a$ (when n is odd)",
    //       explanation: "Odd roots preserve the sign of the original number"
    //     },
    //     {
    //       id: 5,
    //       law: "Even Root Rule",
    //       formula: "$\\sqrt[n]{a^n} = |a|$ (when n is even)",
    //       explanation: "Even roots always give non-negative results"
    //     }
    //   ],
    
    //   "Product and Quotient Rules": [
    //     {
    //       id: 6,
    //       law: "Product Rule",
    //       formula: "$\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$",
    //       explanation: "Root of a product equals product of roots"
    //     },
    //     {
    //       id: 7,
    //       law: "Quotient Rule",
    //       formula: "$\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}$",
    //       explanation: "Root of a quotient equals quotient of roots"
    //     },
    //     {
    //       id: 8,
    //       law: "Product with Different Indices",
    //       formula: "$\\sqrt[m]{a} \\cdot \\sqrt[n]{b}$ cannot be simplified directly",
    //       explanation: "Different indices require conversion to fractional exponents"
    //     }
    //   ],
    
    //   "Power and Exponent Rules": [
    //     {
    //       id: 9,
    //       law: "Power of a Root",
    //       formula: "$(\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$",
    //       explanation: "Power of a root can be moved inside the radical"
    //     },
    //     {
    //       id: 10,
    //       law: "Root of a Power",
    //       formula: "$\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$",
    //       explanation: "Root of a power becomes fractional exponent"
    //     },
    //     {
    //       id: 11,
    //       law: "Fractional Exponent Conversion",
    //       formula: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$",
    //       explanation: "Fractional exponents and radicals are equivalent"
    //     },
    //     {
    //       id: 12,
    //       law: "Power Rule for Same Index",
    //       formula: "$(\\sqrt[n]{a})^n = a$ (when defined)",
    //       explanation: "nth power of nth root returns to original value"
    //     }
    //   ],
    
    //   "Nested Root Rules": [
    //     {
    //       id: 13,
    //       law: "Root of a Root",
    //       formula: "$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} = a^{\\frac{1}{mn}}$",
    //       explanation: "Nested roots multiply their indices"
    //     },
    //     {
    //       id: 14,
    //       law: "Nested Root Simplification",
    //       formula: "Multiple nested roots can be combined systematically",
    //       explanation: "Simplify by converting to fractional exponents"
    //     }
    //   ],
    
    //   "Simplification Rules": [
    //     {
    //       id: 15,
    //       law: "Perfect Factor Extraction",
    //       formula: "$\\sqrt[n]{a^n \\cdot b} = a \\cdot \\sqrt[n]{b}$",
    //       explanation: "Extract perfect nth powers from under the radical"
    //     },
    //     {
    //       id: 16,
    //       law: "Like Radical Combination",
    //       formula: "$a\\sqrt[n]{c} + b\\sqrt[n]{c} = (a + b)\\sqrt[n]{c}$",
    //       explanation: "Combine radicals with same index and radicand"
    //     },
    //     {
    //       id: 17,
    //       law: "Index Reduction",
    //       formula: "$\\sqrt[mn]{a^{mn}} = \\sqrt[m]{a^m}$",
    //       explanation: "Reduce radical index and exponent by common factors"
    //     },
    //     {
    //       id: 18,
    //       law: "Radical Factor Cancellation",
    //       formula: "$\\frac{\\sqrt[n]{a^m}}{\\sqrt[n]{a^k}} = \\sqrt[n]{a^{m-k}}$",
    //       explanation: "Cancel common factors in radical fractions"
    //     }
    //   ],
    
    //   "Rationalization Rules": [
    //     {
    //       id: 19,
    //       law: "Simple Denominator Rationalization",
    //       formula: "$\\frac{1}{\\sqrt[n]{a}} = \\frac{\\sqrt[n]{a^{n-1}}}{a}$",
    //       explanation: "Multiply by appropriate radical to clear denominator"
    //     },
    //     {
    //       id: 20,
    //       law: "Conjugate Rationalization",
    //       formula: "$\\frac{1}{a + b\\sqrt{c}} = \\frac{a - b\\sqrt{c}}{(a + b\\sqrt{c})(a - b\\sqrt{c})}$",
    //       explanation: "Use conjugate to rationalize binomial denominators"
    //     },
    //     {
    //       id: 21,
    //       law: "Higher Index Rationalization",
    //       formula: "Complex expressions require systematic approaches",
    //       explanation: "May need multiple steps or different techniques"
    //     }
    //   ],
    
    //   "Special Value Rules": [
    //     {
    //       id: 22,
    //       law: "Root of 1",
    //       formula: "$\\sqrt[n]{1} = 1$",
    //       explanation: "Any root of 1 equals 1"
    //     },
    //     {
    //       id: 23,
    //       law: "Root of 0",
    //       formula: "$\\sqrt[n]{0} = 0$",
    //       explanation: "Any root of 0 equals 0"
    //     },
    //     {
    //       id: 24,
    //       law: "Root of Perfect Powers",
    //       formula: "$\\sqrt[n]{b^n} = |b|$ (even n) or $b$ (odd n)",
    //       explanation: "Roots of perfect powers simplify directly"
    //     }
    //   ],
    
    //   "Domain and Sign Rules": [
    //     {
    //       id: 25,
    //       law: "Even Root Domain",
    //       formula: "$\\sqrt[n]{a}$ is defined for $a \\geq 0$ when n is even (in real numbers)",
    //       explanation: "Even roots of negative numbers are undefined in real numbers"
    //     },
    //     {
    //       id: 26,
    //       law: "Odd Root Domain",
    //       formula: "$\\sqrt[n]{a}$ is defined for all real $a$ when n is odd",
    //       explanation: "Odd roots can handle negative radicands"
    //     },
    //     {
    //       id: 27,
    //       law: "Sign Preservation",
    //       formula: "$\\sqrt[n]{-a} = -\\sqrt[n]{a}$ when n is odd",
    //       explanation: "Odd roots preserve and can extract negative signs"
    //     },
    //     {
    //       id: 28,
    //       law: "Complex Extensions",
    //       formula: "Even roots of negative numbers exist in complex numbers",
    //       explanation: "$\\sqrt{-1} = i$ in the complex number system"
    //     }
    //   ],
    
    //   "Equation Solving Rules": [
    //     {
    //       id: 29,
    //       law: "Radical Equation Principle",
    //       formula: "If $\\sqrt[n]{f(x)} = g(x)$, then $f(x) = (g(x))^n$",
    //       explanation: "Raise both sides to the nth power to eliminate radical"
    //     },
    //     {
    //       id: 30,
    //       law: "Extraneous Solution Check",
    //       formula: "Always verify solutions in original equation",
    //       explanation: "Raising to even powers can introduce false solutions"
    //     },
    //     {
    //       id: 31,
    //       law: "Domain Restrictions",
    //       formula: "Solutions must satisfy original domain constraints",
    //       explanation: "Check that radicands are non-negative for even roots"
    //     }
    //   ]
    // };

    // const radicalLawsData = {
    //   "Core Radical Laws": [
    //     { 
    //       id: 1, 
    //       law: "Product Rule", 
    //       formula: "$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$", 
    //       explanation: "The root of a product is the product of the roots", 
    //       topic: "Transformation" 
    //     },
    //     { 
    //       id: 2, 
    //       law: "Quotient Rule", 
    //       formula: "$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$", 
    //       explanation: "The root of a quotient is the quotient of the roots", 
    //       topic: "Transformation" 
    //     },
    //     { 
    //       id: 3, 
    //       law: "Power of a Root", 
    //       formula: "$\\left(\\sqrt[n]{a}\\right)^m = a^{\\frac{m}{n}}$", 
    //       explanation: "A root raised to a power becomes a fractional exponent", 
    //       topic: "Exponent Conversion" 
    //     },
    //     { 
    //       id: 4, 
    //       law: "Root of a Power", 
    //       formula: "$\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$", 
    //       explanation: "Taking a root of a power results in a fractional exponent", 
    //       topic: "Exponent Conversion" 
    //     },
    //     { 
    //       id: 5, 
    //       law: "Nested Roots", 
    //       formula: "$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$", 
    //       explanation: "A root of a root equals a single root with multiplied indices", 
    //       topic: "Simplification" 
    //     },
    //     { 
    //       id: 6, 
    //       law: "Fractional Exponent Conversion", 
    //       formula: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$", 
    //       explanation: "Fractional exponents can be written in radical form", 
    //       topic: "Exponent Conversion" 
    //     },
    //     { 
    //       id: 7, 
    //       law: "Absolute Value with Even Roots", 
    //       formula: "$\\sqrt{a^2} = |a|$", 
    //       explanation: "Even roots of even powers return the absolute value", 
    //       topic: "Properties" 
    //     }
    //   ]
    // };
    


      // const config = {
      //   displayColumns: ["law","formula", "explanation"],  // Show name, formula, and explanation
      //   copyableFields: ["formula"],  // Allow copying just the formula
      //   searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      // };
      
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar
                 side='right'
                 topOffset='55px'
                 sidebarWidth='45px'
                 panelWidth='200px'
                 iconColor='white'
                 panelBackgroundColor='#f2f2f2'
               />
    <Breadcrumb/>
   
    <h1 className='title' style={{marginTop:'-20px'}}>Radical Rules</h1>
    <br/>
    <br/>
    <SectionTableOfContents sections={radicalsSections}/>
      {/* <div style={{transform:'scale(0.87)',marginTop:'0px'}}>
        <DataWrapper2 data={radicalLawsData}
        config={config}/>
        </div> */}
        <br/>
        <br/>
        <IntroSection/>
        <br/>
        <br/>
        <Sections sections={radicalsSections}/>
        <br/>
        <br/>
        <ScrollUpButton/>
    
    </>
  )
}
