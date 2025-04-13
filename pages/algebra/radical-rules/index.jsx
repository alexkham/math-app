import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'

export default function RadicalRulesPage() {

    const keyWords=['radical rules','radical laws','root rules','laws of radicals']

    const radicalLawsData = {
      "Core Radical Laws": [
        { 
          id: 1, 
          law: "Product Rule", 
          formula: "$\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$", 
          explanation: "The root of a product is the product of the roots", 
          topic: "Transformation" 
        },
        { 
          id: 2, 
          law: "Quotient Rule", 
          formula: "$\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$", 
          explanation: "The root of a quotient is the quotient of the roots", 
          topic: "Transformation" 
        },
        { 
          id: 3, 
          law: "Power of a Root", 
          formula: "$\\left(\\sqrt[n]{a}\\right)^m = a^{\\frac{m}{n}}$", 
          explanation: "A root raised to a power becomes a fractional exponent", 
          topic: "Exponent Conversion" 
        },
        { 
          id: 4, 
          law: "Root of a Power", 
          formula: "$\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$", 
          explanation: "Taking a root of a power results in a fractional exponent", 
          topic: "Exponent Conversion" 
        },
        { 
          id: 5, 
          law: "Nested Roots", 
          formula: "$\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$", 
          explanation: "A root of a root equals a single root with multiplied indices", 
          topic: "Simplification" 
        },
        { 
          id: 6, 
          law: "Fractional Exponent Conversion", 
          formula: "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$", 
          explanation: "Fractional exponents can be written in radical form", 
          topic: "Exponent Conversion" 
        },
        { 
          id: 7, 
          law: "Absolute Value with Even Roots", 
          formula: "$\\sqrt{a^2} = |a|$", 
          explanation: "Even roots of even powers return the absolute value", 
          topic: "Properties" 
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
   
    <h1 className='title' style={{marginTop:'-20px'}}>Radical Rules</h1>
    <br/>
      <div style={{transform:'scale(0.87)',marginTop:'0px'}}>
        <DataWrapper2 data={radicalLawsData}
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
