import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'

export default function LogarithmRulesPage() {

    const keyWords=['logarithm rules','logarithm laws','log rules','log laws']

    const logarithmLawsData = {
        "Core Logarithmic Laws": [
          { 
            id: 1, 
            law: "Product Rule", 
            formula: "$\\log_a(bc) = \\log_a b + \\log_a c$", 
            explanation: "The logarithm of a product is the sum of the logs ", 
            topic: "Transformation" 
          },
          { 
            id: 2, 
            law: "Quotient Rule", 
            formula: "$\\log_a\\left(\\frac{b}{c}\\right) = \\log_a b - \\log_a c$", 
            explanation: "The logarithm of a quotient is the difference of the logs", 
            topic: "Transformation" 
          },
          { 
            id: 3, 
            law: "Power Rule", 
            formula: "$\\log_a(b^c) = c \\cdot \\log_a b$", 
            explanation: "The log of a power brings the exponent in front", 
            topic: "Transformation" 
          },
          { 
            id: 4, 
            law: "Root Rule", 
            formula: "$\\log_a(\\sqrt[n]{b}) = \\frac{1}{n} \\log_a b$", 
            explanation: "A root is just a fractional exponent, so logs turn it into a multiplier", 
            topic: "Transformation" 
          },
          { 
            id: 5, 
            law: "Change of Base Formula", 
            formula: "$\\log_a b = \\frac{\\log_c b}{\\log_c a}$", 
            explanation: "Converts a log from one base to another", 
            topic: "Base Conversion" 
          }
        ],
      
        "Identity and Constant Rules": [
          { 
            id: 6, 
            law: "Log of 1", 
            formula: "$\\log_a 1 = 0$", 
            explanation: "The log of 1 is always zero in any base", 
            topic: "Constants" 
          },
          { 
            id: 7, 
            law: "Log of the Base", 
            formula: "$\\log_a a = 1$", 
            explanation: "The log of a number to its own base is 1", 
            topic: "Constants" 
          }
        ],
      
        "Inverse and Exponential Relationships": [
          { 
            id: 8, 
            law: "Inverse Rule", 
            formula: "$a^{\\log_a b} = b$ and $\\log_a(a^x) = x$", 
            explanation: "Logarithms and exponentials undo each other", 
            topic: "Inverse Functions" 
          },
          { 
            id: 9, 
            law: "Natural Log Identity", 
            formula: "$\\ln(e^x) = x$ and $e^{\\ln x} = x$", 
            explanation: "The natural log and exponential base $e$ are inverse functions", 
            topic: "Inverse Functions" 
          }
        ]
      };
      
    


      const config = {
        displayColumns: ["law","formula", "explanation"],  // Show name, formula, and explanation
        copyableFields: ["formula"],  // Allow copying just the formula
        searchableFields: ["law", "formula", "explanation"]  // Allow searching by name, formula, or explanation
      };
      
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
   
    <h1 className='title' style={{marginTop:'-20px'}}>Logarithm Rules</h1>
    <br/>
      <div style={{transform:'scale(0.87)',marginTop:'0px'}}>
        <DataWrapper2 data={logarithmLawsData}
        config={config}/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <ScrollUpButton/>
    
    </>
  )
}
