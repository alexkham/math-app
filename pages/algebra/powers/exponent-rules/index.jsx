import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import ExpandableTable from '@/app/components/generic-table/ExpandableTable'
import '../../../../pages/pages.css'



export async function getStaticProps(){

  const keyWords=['exponent rules','exponent laws','laws and exponents','exponent properties']

   

  const powerRulesData = {
    // "Basic Power Rules": [
    //   {
    //     id: 1,
    //     law: "Product Rule",
    //     formula: "$a^m × a^n = a^(m+n)$",
    //     explanation: "When multiplying powers with the same base, add the exponents"
    //   },
    //   {
    //     id: 2,
    //     law: "Quotient Rule",
    //     formula: "$a^m ÷ a^n = a^(m-n)$",
    //     explanation: "When dividing powers with the same base, subtract the exponents"
    //   },
    //   {
    //     id: 3,
    //     law: "Power of a Power Rule",
    //     formula: "$(a^m)^n = a^(m×n)$",
    //     explanation: "When raising a power to another power, multiply the exponents"
    //   },
    //   {
    //     id: 4,
    //     law: "Power of a Product Rule",
    //     formula: "$(ab)^n = a^n × b^n$",
    //     explanation: "When raising a product to a power, raise each factor to that power"
    //   },
    //   {
    //     id: 5,
    //     law: "Power of a Quotient Rule",
    //     formula: "$(a/b)^n = a^n / b^n$",
    //     explanation: "When raising a quotient to a power, raise both numerator and denominator to that power"
    //   }
    // ],

    "Basic Power Rules": [
  {
    id: 1,
    law: "Product Rule",
    formula: "$a^m \\times a^n = a^{m+n}$",
    explanation: "When multiplying powers with the same base, add the exponents"
  },
  {
    id: 2,
    law: "Quotient Rule",
    formula: "$\\frac{a^m}{a^n} = a^{m-n}$",
    explanation: "When dividing powers with the same base, subtract the exponents"
  },
  {
    id: 3,
    law: "Power of a Power Rule",
    formula: "$\\left(a^m\\right)^n = a^{m \\cdot n}$",
    explanation: "When raising a power to another power, multiply the exponents"
  },
  {
    id: 4,
    law: "Power of a Product Rule",
    formula: "$\\left(ab\\right)^n = a^n \\cdot b^n$",
    explanation: "When raising a product to a power, raise each factor to that power"
  },
  {
    id: 5,
    law: "Power of a Quotient Rule",
    formula: "$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$",
    explanation: "When raising a quotient to a power, raise both numerator and denominator to that power"
  }
]
,
  
    // "Special Exponent Rules": [
    //   {
    //     id: 6,
    //     law: "Zero Exponent Rule",
    //     formula: "$a^0 = 1$",
    //     explanation: "Any non-zero number raised to the power of zero equals 1 (where a ≠ 0)"
    //   },
    //   {
    //     id: 7,
    //     law: "Negative Exponent Rule",
    //     formula: "a^(-n) = 1/a^n",
    //     explanation: "A negative exponent means the reciprocal of the positive exponent"
    //   },
    //   {
    //     id: 8,
    //     law: "Fractional Exponent Rule",
    //     formula: "a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m",
    //     explanation: "A fractional exponent represents roots and powers combined"
    //   },
    //   {
    //     id: 9,
    //     law: "Unit Base Rule",
    //     formula: "1^n = 1",
    //     explanation: "One raised to any power equals one"
    //   },
    //   {
    //     id: 10,
    //     law: "Unit Exponent Rule",
    //     formula: "a^1 = a",
    //     explanation: "Any number raised to the first power equals itself"
    //   }
    // ],

    "Special Exponent Rules": [
  {
    id: 6,
    law: "Zero Exponent Rule",
    formula: "$a^0 = 1$",
    explanation: "Any non-zero number raised to the power of zero equals 1 (where $a \\neq 0$)"
  },
  {
    id: 7,
    law: "Negative Exponent Rule",
    formula: "$a^{-n} = \\frac{1}{a^n}$",
    explanation: "A negative exponent means the reciprocal of the positive exponent"
  },
  {
    id: 8,
    law: "Fractional Exponent Rule",
    formula: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$",
    explanation: "A fractional exponent represents roots and powers combined"
  },
  {
    id: 9,
    law: "Unit Base Rule",
    formula: "$1^n = 1$",
    explanation: "One raised to any power equals one"
  },
  {
    id: 10,
    law: "Unit Exponent Rule",
    formula: "$a^1 = a$",
    explanation: "Any number raised to the first power equals itself"
  }
]
,
  
    // "Advanced Power Rules": [
    //   {
    //     id: 11,
    //     law: "Distributive Property with Powers",
    //     formula: "a^n × b^n = (ab)^n",
    //     explanation: "Product of powers with same exponent equals power of the product"
    //   },
    //   {
    //     id: 12,
    //     law: "Quotient of Powers with Same Exponent",
    //     formula: "a^n / b^n = (a/b)^n",
    //     explanation: "Quotient of powers with same exponent equals power of the quotient"
    //   },
    //   {
    //     id: 13,
    //     law: "Power of a Negative Base (Even Exponent)",
    //     formula: "(-a)^(2n) = a^(2n)",
    //     explanation: "Negative base raised to even power gives positive result"
    //   },
    //   {
    //     id: 14,
    //     law: "Power of a Negative Base (Odd Exponent)",
    //     formula: "(-a)^(2n+1) = -a^(2n+1)",
    //     explanation: "Negative base raised to odd power gives negative result"
    //   }
    // ],

    "Advanced Power Rules": [
  {
    id: 11,
    law: "Distributive Property with Powers",
    formula: "$a^n \\cdot b^n = (ab)^n$",
    explanation: "Product of powers with same exponent equals power of the product"
  },
  {
    id: 12,
    law: "Quotient of Powers with Same Exponent",
    formula: "$\\frac{a^n}{b^n} = \\left(\\frac{a}{b}\\right)^n$",
    explanation: "Quotient of powers with same exponent equals power of the quotient"
  },
  {
    id: 13,
    law: "Power of a Negative Base (Even Exponent)",
    formula: "$(-a)^{2n} = a^{2n}$",
    explanation: "Negative base raised to even power gives positive result"
  },
  {
    id: 14,
    law: "Power of a Negative Base (Odd Exponent)",
    formula: "$(-a)^{2n+1} = -a^{2n+1}$",
    explanation: "Negative base raised to odd power gives negative result"
  }
]
,
    

    "Exponential Function Rules": [
  {
    id: 15,
    law: "Exponential Product Rule",
    formula: "$b^x \\cdot b^y = b^{x+y}$",
    explanation: "Product of exponentials with same base adds exponents"
  },
  {
    id: 16,
    law: "Exponential Quotient Rule",
    formula: "$\\frac{b^x}{b^y} = b^{x-y}$",
    explanation: "Quotient of exponentials with same base subtracts exponents"
  },
  {
    id: 17,
    law: "Power of Exponential Rule",
    formula: "$\\left(b^x\\right)^y = b^{xy}$",
    explanation: "Power of an exponential multiplies the exponents"
  },
  {
    id: 18,
    law: "Exponential with Different Bases",
    formula: "$a^x \\cdot b^x = (ab)^x$",
    explanation: "Product of exponentials with same exponent but different bases"
  }
]
,
  
  
    // "Root and Radical Rules": [
    //   {
    //     id: 19,
    //     law: "nth Root Definition",
    //     formula: "ⁿ√a = a^(1/n)",
    //     explanation: "nth root expressed as fractional exponent"
    //   },
    //   {
    //     id: 20,
    //     law: "Product of Roots",
    //     formula: "ⁿ√a × ⁿ√b = ⁿ√(ab)",
    //     explanation: "Product of nth roots equals nth root of the product"
    //   },
    //   {
    //     id: 21,
    //     law: "Quotient of Roots",
    //     formula: "ⁿ√a / ⁿ√b = ⁿ√(a/b)",
    //     explanation: "Quotient of nth roots equals nth root of the quotient"
    //   },
    //   {
    //     id: 22,
    //     law: "Power of a Root",
    //     formula: "(ⁿ√a)^m = ⁿ√(a^m) = a^(m/n)",
    //     explanation: "Power of an nth root can be expressed as fractional exponent"
    //   },
    //   {
    //     id: 23,
    //     law: "Root of a Root",
    //     formula: "ᵐ√(ⁿ√a) = ᵐⁿ√a = a^(1/(mn))",
    //     explanation: "Nested roots multiply the indices"
    //   }
    // ],

    "Root and Radical Rules": [
  {
    id: 19,
    law: "nth Root Definition",
    formula: "$\\sqrt[n]{a} = a^{1/n}$",
    explanation: "nth root expressed as fractional exponent"
  },
  {
    id: 20,
    law: "Product of Roots",
    formula: "$\\sqrt[n]{a} \\cdot \\sqrt[n]{b} = \\sqrt[n]{ab}$",
    explanation: "Product of nth roots equals nth root of the product"
  },
  {
    id: 21,
    law: "Quotient of Roots",
    formula: "$\\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}$",
    explanation: "Quotient of nth roots equals nth root of the quotient"
  },
  {
    id: 22,
    law: "Power of a Root",
    formula: "$\\left(\\sqrt[n]{a}\\right)^m = \\sqrt[n]{a^m} = a^{m/n}$",
    explanation: "Power of an nth root can be expressed as fractional exponent"
  },
  {
    id: 23,
    law: "Root of a Root",
    formula: "$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} = a^{1/(mn)}$",
    explanation: "Nested roots multiply the indices"
  }
]
,
  
    // "Logarithmic Power Relations": [
    //   {
    //     id: 24,
    //     law: "Logarithm of a Power",
    //     formula: "log_b(a^n) = n × log_b(a)",
    //     explanation: "Logarithm of a power brings the exponent as a coefficient"
    //   },
    //   {
    //     id: 25,
    //     law: "Power as Exponential",
    //     formula: "a^n = e^(n × ln(a))",
    //     explanation: "Any power can be expressed using natural exponential and logarithm"
    //   },
    //   {
    //     id: 26,
    //     law: "Change of Base for Powers",
    //     formula: "a^x = b^(x × log_b(a))",
    //     explanation: "Express power with different base using logarithms"
    //   }
    // ]

    "Logarithmic Power Relations": [
  {
    id: 24,
    law: "Logarithm of a Power",
    formula: "$\\log_b(a^n) = n \\cdot \\log_b(a)$",
    explanation: "Logarithm of a power brings the exponent as a coefficient"
  },
  {
    id: 25,
    law: "Power as Exponential",
    formula: "$a^n = e^{n \\cdot \\ln(a)}$",
    explanation: "Any power can be expressed using natural exponential and logarithm"
  },
  {
    id: 26,
    law: "Change of Base for Powers",
    formula: "$a^x = b^{x \\cdot \\log_b(a)}$",
    explanation: "Express power with different base using logarithms"
  }
]

  };

  
  const sectionsContent={

    basic:{
      title:`Basic Power Rules`,
      content:``,
      before:``,
      after:``,
  
  
    },
    special:{
      title:`Special Exponent Rules`,
      content:``,
      before:``,
      after:``,
  
    },
  
    advanced:{
  
      title:`Advanced Power Rules`,
      content:``,
      before:``,
      after:``,
  
    },
    function:{
      title:`Exponential Function Rules`,
      content:``,
      before:``,
      after:``,
  
    },


    root:{
  
      title:`Root and Radical Rules`,
      content:``,
      before:``,
      after:``,
  
    },

    relations:{
  
      title:`Logarithmic Power Relations`,
      content:``,
      before:``,
      after:``,
  
    }
  
  }


    return {
      props:{

        sectionsContent,
        keyWords,
        powerRulesData
        
      }
    }
  }


export default function ExponentRulesPage({sectionsContent ,keyWords,powerRulesData}) {

   
  const exponentRulesSections=[
    {
        id:'basic',
        title:sectionsContent.basic.title,
        link:'',
        content:[
          <div key={1} style={{marginLeft:'20px',marginRight:'20px'}}>
          <ExpandableTable key={12}
          data={powerRulesData[sectionsContent.basic.title]}
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
          <div key={1} style={{marginLeft:'20px',marginRight:'20px'}}>
          <ExpandableTable key={12}
          data={powerRulesData[sectionsContent.special.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,
        ]
    },
    {
        id:'advanced',
        title:sectionsContent.advanced.title,
        link:'',
        content:[
          <div key={1} style={{marginLeft:'20px',marginRight:'20px'}}>
          <ExpandableTable key={12}
          data={powerRulesData[sectionsContent.advanced.title]}
           displayColumns={ ["law", "formula", "explanation"]}
           copyableFields={["formula"]}
           includedFields={ ["law", "formula", "explanation"]} />
           </div> ,
        ]
    },
    {
      id:'function',
      title:sectionsContent.function.title,
      link:'',
      content:[
        <div key={1} style={{marginLeft:'20px',marginRight:'20px'}}>
        <ExpandableTable key={12}
        data={powerRulesData[sectionsContent.function.title]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
      ]
  },
  {
    id:'root',
    title:sectionsContent.root.title,
    link:'',
    content:[

      <div key={1} style={{marginLeft:'20px',marginRight:'20px'}}>
      <ExpandableTable key={12}
      data={powerRulesData[sectionsContent.root.title]}
       displayColumns={ ["law", "formula", "explanation"]}
       copyableFields={["formula"]}
       includedFields={ ["law", "formula", "explanation"]} />
       </div> ,
    ]
},
{
  id:'relations',
  title:sectionsContent.relations.title,
  link:'',
  content:[
    <div key={1} style={{marginLeft:'20px',marginRight:'20px'}}>
    <ExpandableTable key={12}
    data={powerRulesData[sectionsContent.relations.title]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
  ]
}
]

    // const exponentLawsData = {
    //     "Basic Exponent Rules": [
    //       { 
    //         id: 1, 
    //         law: "Identity Rule", 
    //         formula: "$a^1 = a$", 
    //         explanation: "Any number raised to the power of 1 is itself", 
    //         topic: "Fundamentals" 
    //       },
    //       { 
    //         id: 2, 
    //         law: "Zero Exponent Rule", 
    //         formula: "$a^0 = 1$", 
    //         explanation: "Any non-zero base raised to 0 is 1", 
    //         topic: "Fundamentals" 
    //       }
    //     ],
      
    //     "Multiplication and Division Rules": [
    //       { 
    //         id: 3, 
    //         law: "Product of Powers", 
    //         formula: "$a^m \\cdot a^n = a^{m+n}$", 
    //         explanation: "Add exponents when multiplying same base", 
    //         topic: "Operations" 
    //       },
    //       { 
    //         id: 4, 
    //         law: "Quotient of Powers", 
    //         formula: "$\\frac{a^m}{a^n} = a^{m-n}$", 
    //         explanation: "Subtract exponents when dividing same base", 
    //         topic: "Operations" 
    //       }
    //     ],
      
    //     "Power Rules": [
    //       { 
    //         id: 5, 
    //         law: "Power of a Power", 
    //         formula: "$(a^m)^n = a^{mn}$", 
    //         explanation: "Multiply exponents when raising a power to another power", 
    //         topic: "Operations" 
    //       },
    //       { 
    //         id: 6, 
    //         law: "Power of a Product", 
    //         formula: "$(ab)^n = a^n \\cdot b^n$", 
    //         explanation: "Distribute exponent across multiplied terms", 
    //         topic: "Operations" 
    //       },
    //       { 
    //         id: 7, 
    //         law: "Power of a Quotient", 
    //         formula: "$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$", 
    //         explanation: "Distribute exponent across division", 
    //         topic: "Operations" 
    //       }
    //     ],
      
    //     "Negative Exponents": [
    //       { 
    //         id: 8, 
    //         law: "Negative Exponent Rule", 
    //         formula: "$a^{-n} = \\frac{1}{a^n}$", 
    //         explanation: "A negative exponent means reciprocal", 
    //         topic: "Inverse Operations" 
    //       }
    //     ],
      
    //     "Fractional Exponents": [
    //       { 
    //         id: 9, 
    //         law: "Fractional Exponent Rule", 
    //         formula: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$", 
    //         explanation: "Fractional exponents represent roots and powers", 
    //         topic: "Radicals & Exponents" 
    //       }
    //     ]
    //   };


      // const config = {
      //   displayColumns: ["law","formula", "explanation"],  // Show name, formula, and explanation
      //   copyableFields: ["formula"],  // Allow copying just the formula
      //   searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      // };
      
  return (
    <>
      {/* <GenericNavbar/> */}
     
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
      <h1 className='title' style={{marginTop:'-20px' ,marginBottom:'10px'}}>Exponent Rules</h1>
      <br/>
      <br/>
      <SectionTableOfContents sections={exponentRulesSections}/>
      {/* <div style={{transform:'scale(0.87)',marginTop:'0px'}}>
        <DataWrapper2 data={exponentLawsData}
        config={config}/>
        </div>
        <br/> */}
      <br/>
      <br/>
      <IntroSection/>
      <br/>
      <br/>
      <br/>
      <Sections sections={exponentRulesSections}/>
      <br/>
      <br/>
       {/* <ScrollUpButton/> */} 
    </>
  );
}
