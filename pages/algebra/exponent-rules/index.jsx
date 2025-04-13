import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'

export default function ExponentRulesPage() {

    const keyWords=['exponent rules','exponent laws','laws and exponents','exponent properties']

    // "$x^n = \\underbrace{x \\times x \\times \\cdots \\times x}_{n \\text{ times}}.$"

    const exponentLawsData = {
        "Basic Exponent Rules": [
          { 
            id: 1, 
            law: "Identity Rule", 
            formula: "$a^1 = a$", 
            explanation: "Any number raised to the power of 1 is itself", 
            topic: "Fundamentals" 
          },
          { 
            id: 2, 
            law: "Zero Exponent Rule", 
            formula: "$a^0 = 1$", 
            explanation: "Any non-zero base raised to 0 is 1", 
            topic: "Fundamentals" 
          }
        ],
      
        "Multiplication and Division Rules": [
          { 
            id: 3, 
            law: "Product of Powers", 
            formula: "$a^m \\cdot a^n = a^{m+n}$", 
            explanation: "Add exponents when multiplying same base", 
            topic: "Operations" 
          },
          { 
            id: 4, 
            law: "Quotient of Powers", 
            formula: "$\\frac{a^m}{a^n} = a^{m-n}$", 
            explanation: "Subtract exponents when dividing same base", 
            topic: "Operations" 
          }
        ],
      
        "Power Rules": [
          { 
            id: 5, 
            law: "Power of a Power", 
            formula: "$(a^m)^n = a^{mn}$", 
            explanation: "Multiply exponents when raising a power to another power", 
            topic: "Operations" 
          },
          { 
            id: 6, 
            law: "Power of a Product", 
            formula: "$(ab)^n = a^n \\cdot b^n$", 
            explanation: "Distribute exponent across multiplied terms", 
            topic: "Operations" 
          },
          { 
            id: 7, 
            law: "Power of a Quotient", 
            formula: "$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$", 
            explanation: "Distribute exponent across division", 
            topic: "Operations" 
          }
        ],
      
        "Negative Exponents": [
          { 
            id: 8, 
            law: "Negative Exponent Rule", 
            formula: "$a^{-n} = \\frac{1}{a^n}$", 
            explanation: "A negative exponent means reciprocal", 
            topic: "Inverse Operations" 
          }
        ],
      
        "Fractional Exponents": [
          { 
            id: 9, 
            law: "Fractional Exponent Rule", 
            formula: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$", 
            explanation: "Fractional exponents represent roots and powers", 
            topic: "Radicals & Exponents" 
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
   
    <h1 className='title' style={{marginTop:'-20px'}}>Exponent Rules</h1>
    <br/>
      <div style={{transform:'scale(0.87)',marginTop:'0px'}}>
        <DataWrapper2 data={exponentLawsData}
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
