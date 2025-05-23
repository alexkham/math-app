import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import ExpandableTable from '@/app/components/generic-table/ExpandableTable'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents2'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'

export async function getStaticProps(){


  
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
      id: 37,
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
            ]
      
        // "Angle Sum and Difference Identities": [
        //   { id: 13, law: "Sine Sum", formula: "sin(a + b) = sin(a)cos(b) + cos(a)sin(b)", explanation: "Sine of a sum expands to product terms", topic: "Angle Sum/Diff" },
        //   { id: 14, law: "Cosine Difference", formula: "cos(a − b) = cos(a)cos(b) + sin(a)sin(b)", explanation: "Cosine of a difference uses similar pattern", topic: "Angle Sum/Diff" },
        //   { id: 15, law: "Tangent Sum", formula: "tan(a + b) = (tan(a) + tan(b)) / (1 − tan(a)tan(b))", explanation: "Tangent sum is a rational function", topic: "Angle Sum/Diff" }
        // ],
      
        // "Double Angle Identities": [
        //   { id: 16, law: "Double Sine", formula: "sin(2θ) = 2sin(θ)cos(θ)", explanation: "Sine double angle comes from sum formula", topic: "Double Angle" },
        //   { id: 17, law: "Double Cosine", formula: "cos(2θ) = cos²(θ) − sin²(θ)", explanation: "Cosine double angle from cos(a + b)", topic: "Double Angle" },
        //   { id: 18, law: "Alt Cosine", formula: "cos(2θ) = 2cos²(θ) − 1", explanation: "Alternative form using cos²", topic: "Double Angle" }
        // ],
      
        // "Half Angle Identities": [
        //   { id: 19, law: "Half Cosine", formula: "cos²(θ) = (1 + cos(2θ))/2", explanation: "Derived from double angle cosine", topic: "Half Angle" },
        //   { id: 20, law: "Half Sine", formula: "sin²(θ) = (1 − cos(2θ))/2", explanation: "Derived from double angle sine", topic: "Half Angle" }
        // ]
      };

      const config = {
        displayColumns: ["law", "formula", "explanation"],  // Show name, formula, and explanation
        copyableFields: ["formula"],  // Allow copying just the formula
        searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      };

      // const reciprocalId=trigIdentitiesData["Reciprocal Identities"]
      
      

    return{
        props:{

            trigIdentitiesData,
            config,
            // reciprocalId

        }
    }
}

export default function TrigoIdentitiesPage({trigIdentitiesData ,config }) {

  const introContent={
    id:'intro',
    title:'Trigonometric Identities : Practical Guide',
    content:`Trigonometric identities are equations involving trigonometric functions that are true for all values in their domains.
    Knowing those identities and understanding them is  important because they:
$\\ast$ Simplify complex expressions
$\\ast$ Help solving equations not easily solvable in their original form
$\\ast$ May be useful in proving mathematical theorems
$\\ast$ Model periodic phenomena in physics, engineering, and other fields
$\\ast$ Transform expressions to more useful forms for integration or differentiation
`
  }

  const identitiesSections=[

    {
      id:'definition',
      title:'Definition-based Identities',
      link:'',
      content:[
        `Definition-based identities derive from the fundamental relationships between trigonometric functions based on their right-triangle definitions.
        Those may be well illustrated by [unit circle](!/visual-tools/unit-circle).
        
        \n`,
         
         <div style={{marginLeft:'50px',marginRight:'50px'}}>
    <ExpandableTable data={trigIdentitiesData["Definition-based Identities"]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> ,
     `\nDefinition-based identities are fundamental relationships derived directly from how trigonometric functions are defined in a right triangle. They establish the basic connections between these functions and serve as building blocks for more complex identities.
     To get better feeling and understanding of basic definition-based identities use our visual intteractive [unit circle](!/visual-tools/unit-circle) tool.
     `

      ]
    },
    {
      id:'reciprocal',
      title:'Reciprocal Identities',
      link:'',
      content:[
        `In mathematics, the **reciprocal** of a number or expression is 1 divided by that number.
So, for any non-zero value $𝑥$, the reciprocal is $\\frac{1}{x}$ .
A reciprocal identity expresses the relationship between a trigonometric function and its multiplicative inverse — basically, how each function "flips".​
Each basic trigonometric function (sine, cosine, tangent) has a reciprocal counterpart.
        
        `,
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Reciprocal Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
         `
         Reciprocal identities help simplify rational trigonometric expressions, especially in algebra-heavy problems or when combining functions.
         Knowing how to flip between functions is critical in isolating variables and solving identities.
         Reciprocal identities let you flip between familiar and less familiar functions, extend your solving toolbox, and reduce redundancy in learning.
         `
        
      ]
    },
     {
      id:'pythagorean',
      title:'Pythagorean Identities',
      link:'',
      content:[

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Pythagorean Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
        
      ]
    },
     {
      id:'triangle',
      title:'Triangle Geometry Identities',
      link:'',
      content:[

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Triangle Geometry Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

        
        
      ]
    },
      {
      id:'even-odd',
      title:"Even-Odd Identities",
      link:'',
      content:[

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Even-Odd Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

        
      ]
    },
     {
      id:'co-function',
      title:'Co-Function Identities',
      link:'',
      content:[

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Co-Function Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,


        
        
      ]
    },
      {
      id:'periodicity',
      title:'Periodicity Identities',
      link:'',
      content:[

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Periodicity Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

        
        
      ]
    },
     {
      id:'shift',
      title:'Shift Identities',
      link:'',
      content:[
         
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Shift Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,


        
        
      ]
    },
      {
      id:'sum',
      title:'Angle Sum Identities',
      link:'',
      content:[

          
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Angle Sum Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,
        
      ]
    },
      {
      id:'difference',
      title:'Angle Difference Identities',
      link:'',
      content:[

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Angle Difference Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

        
        
      ]
    },
      {
      id:'double',
      title:'Double Angle Identities',
      link:'',
      content:[


        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Double Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,


       
        
      ]
    },

     {
      id:'half',
      title:'Half Angle Identities',
      link:'',
      content:[

        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Half Angle Identities"]}
         displayColumns={ ["law", "formula", "explanation"]}
         copyableFields={["formula"]}
         includedFields={ ["law", "formula", "explanation"]} />
         </div> ,

        
      ]
    },

      {
      id:'triple',
      title:'Triple Angle Identities',
      link:'',
      content:[
        <div style={{marginLeft:'50px',marginRight:'50px'}}>
        <ExpandableTable data={trigIdentitiesData["Triple Angle Identities"]}
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
    //   content:[
        
    //   ]
    // }

  ]
  return (
    <>
    <GenericNavbar/>
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
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Trigonometric Identities</h1>
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
    <br/>
    <Sections sections={identitiesSections}/>
    {/* <h1>Reciprocal</h1> */}
    {/* <DataWrapper2 data={reciprocalId}/> */}
    {/* <div style={{marginLeft:'200px',marginRight:'200px'}}>
    <ExpandableTable data={trigIdentitiesData["Reciprocal Identities"]}
     displayColumns={ ["law", "formula", "explanation"]}
     copyableFields={["formula"]}
     includedFields={ ["law", "formula", "explanation"]} />
     </div> */}
    <br/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
