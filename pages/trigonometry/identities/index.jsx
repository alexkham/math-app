import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import DataWrapper from '@/app/components/generic-table/DataWrapper'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export async function getStaticProps(){
    const trigIdentitiesData = {
        "Reciprocal Identities": [
          { id: 1, law: "Reciprocal of Sine", formula: "sin(θ) = 1 / csc(θ)", explanation: "Sine is the reciprocal of cosecant", topic: "Reciprocal" },
          { id: 2, law: "Reciprocal of Cosine", formula: "cos(θ) = 1 / sec(θ)", explanation: "Cosine is the reciprocal of secant", topic: "Reciprocal" },
          { id: 3, law: "Reciprocal of Tangent", formula: "tan(θ) = 1 / cot(θ)", explanation: "Tangent is the reciprocal of cotangent", topic: "Reciprocal" }
        ],
      
        "Pythagorean Identities": [
          { id: 4, law: "Sine and Cosine", formula: "sin²(θ) + cos²(θ) = 1", explanation: "Fundamental identity from the unit circle", topic: "Pythagorean" },
          { id: 5, law: "Tangent and Secant", formula: "1 + tan²(θ) = sec²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by cos²", topic: "Pythagorean" },
          { id: 6, law: "Cotangent and Cosecant", formula: "1 + cot²(θ) = csc²(θ)", explanation: "Derived from dividing sin² + cos² = 1 by sin²", topic: "Pythagorean" }
        ],
      
        "Co-Function Identities": [
          { id: 7, law: "Sine of Complement", formula: "sin(π/2 − θ) = cos(θ)", explanation: "Sine of an angle's complement equals cosine", topic: "Co-Function" },
          { id: 8, law: "Tangent of Complement", formula: "tan(π/2 − θ) = cot(θ)", explanation: "Tangent of complement equals cotangent", topic: "Co-Function" },
          { id: 9, law: "Secant of Complement", formula: "sec(π/2 − θ) = csc(θ)", explanation: "Secant of complement equals cosecant", topic: "Co-Function" }
        ],
      
        "Even-Odd Identities": [
          { id: 10, law: "Even Cosine", formula: "cos(−θ) = cos(θ)", explanation: "Cosine is an even function", topic: "Parity" },
          { id: 11, law: "Odd Sine", formula: "sin(−θ) = −sin(θ)", explanation: "Sine is an odd function", topic: "Parity" },
          { id: 12, law: "Odd Tangent", formula: "tan(−θ) = −tan(θ)", explanation: "Tangent is an odd function", topic: "Parity" }
        ],
      
        "Angle Sum and Difference Identities": [
          { id: 13, law: "Sine Sum", formula: "sin(a + b) = sin(a)cos(b) + cos(a)sin(b)", explanation: "Sine of a sum expands to product terms", topic: "Angle Sum/Diff" },
          { id: 14, law: "Cosine Difference", formula: "cos(a − b) = cos(a)cos(b) + sin(a)sin(b)", explanation: "Cosine of a difference uses similar pattern", topic: "Angle Sum/Diff" },
          { id: 15, law: "Tangent Sum", formula: "tan(a + b) = (tan(a) + tan(b)) / (1 − tan(a)tan(b))", explanation: "Tangent sum is a rational function", topic: "Angle Sum/Diff" }
        ],
      
        "Double Angle Identities": [
          { id: 16, law: "Double Sine", formula: "sin(2θ) = 2sin(θ)cos(θ)", explanation: "Sine double angle comes from sum formula", topic: "Double Angle" },
          { id: 17, law: "Double Cosine", formula: "cos(2θ) = cos²(θ) − sin²(θ)", explanation: "Cosine double angle from cos(a + b)", topic: "Double Angle" },
          { id: 18, law: "Alt Cosine", formula: "cos(2θ) = 2cos²(θ) − 1", explanation: "Alternative form using cos²", topic: "Double Angle" }
        ],
      
        "Half Angle Identities": [
          { id: 19, law: "Half Cosine", formula: "cos²(θ) = (1 + cos(2θ))/2", explanation: "Derived from double angle cosine", topic: "Half Angle" },
          { id: 20, law: "Half Sine", formula: "sin²(θ) = (1 − cos(2θ))/2", explanation: "Derived from double angle sine", topic: "Half Angle" }
        ]
      };

      const config = {
        displayColumns: ["law", "formula", "explanation"],  // Show name, formula, and explanation
        copyableFields: ["formula"],  // Allow copying just the formula
        searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      };
      
      

    return{
        props:{

            trigIdentitiesData,
            config

        }
    }
}

export default function TrigoIdentitiesPage({trigIdentitiesData ,config}) {
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
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'-20px'}}>Trigonometric Identities</h1>
    <div style={{transform:'scale(0.9)',marginLeft:'100px',marginRight:'100px'}}>
    <DataWrapper2 data={trigIdentitiesData} config={config} searchable={false}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
