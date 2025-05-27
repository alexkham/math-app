import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DataWrapper2 from '@/app/components/data-wrapper/generic-table/DataWrapper'

export default function LogarithmRulesPage() {

    const keyWords=['logarithm rules','logarithm laws','log rules','log laws']


    const logarithmRulesData = {
      "Definition and Basic Rules": [
        {
          id: 1,
          law: "Definition of Logarithm",
          formula: "$\\log_b(x) = y \\iff b^y = x$",
          explanation: "Logarithm is the inverse operation of exponentiation"
        },
        {
          id: 2,
          law: "Logarithm of One",
          formula: "$\\log_b(1) = 0$",
          explanation: "The logarithm of 1 to any base equals 0"
        },
        {
          id: 3,
          law: "Logarithm of Base",
          formula: "$\\log_b(b) = 1$",
          explanation: "The logarithm of the base to itself equals 1"
        },
        {
          id: 4,
          law: "Logarithm of Base Power",
          formula: "$\\log_b(b^x) = x$",
          explanation: "Logarithm and exponentiation with same base cancel out"
        },
        {
          id: 5,
          law: "Base to Logarithm Power",
          formula: "$b^{\\log_b(x)} = x$",
          explanation: "Base raised to its own logarithm equals the argument"
        }
      ],
    
      "Fundamental Properties": [
        {
          id: 6,
          law: "Product Rule",
          formula: "$\\log_b(xy) = \\log_b(x) + \\log_b(y)$",
          explanation: "Logarithm of a product equals sum of logarithms"
        },
        {
          id: 7,
          law: "Quotient Rule",
          formula: "$\\log_b\\left(\\frac{x}{y}\\right) = \\log_b(x) - \\log_b(y)$",
          explanation: "Logarithm of a quotient equals difference of logarithms"
        },
        {
          id: 8,
          law: "Power Rule",
          formula: "$\\log_b(x^n) = n \\cdot \\log_b(x)$",
          explanation: "Logarithm of a power brings the exponent as a coefficient"
        },
        {
          id: 9,
          law: "Root Rule",
          formula: "$\\log_b(\\sqrt[n]{x}) = \\frac{1}{n} \\cdot \\log_b(x)$",
          explanation: "Logarithm of a root becomes a fractional coefficient"
        }
      ],
    
      "Base Conversion Rules": [
        {
          id: 10,
          law: "Change of Base Formula",
          formula: "$\\log_b(x) = \\frac{\\log_a(x)}{\\log_a(b)}$",
          explanation: "Convert logarithm to any other base using division"
        },
        {
          id: 11,
          law: "Natural Logarithm Conversion",
          formula: "$\\log_b(x) = \\frac{\\ln(x)}{\\ln(b)}$",
          explanation: "Convert any logarithm using natural logarithms"
        },
        {
          id: 12,
          law: "Common Logarithm Conversion",
          formula: "$\\log_b(x) = \\frac{\\log(x)}{\\log(b)}$",
          explanation: "Convert any logarithm using common logarithms"
        },
        {
          id: 13,
          law: "Base Reciprocal Rule",
          formula: "$\\log_{1/b}(x) = -\\log_b(x)$",
          explanation: "Logarithm with reciprocal base changes sign"
        }
      ],
    
      "Natural Logarithm Properties": [
        {
          id: 14,
          law: "Natural Logarithm of e",
          formula: "$\\ln(e) = 1$",
          explanation: "Natural logarithm of e equals 1"
        },
        {
          id: 15,
          law: "Natural Logarithm of 1",
          formula: "$\\ln(1) = 0$",
          explanation: "Natural logarithm of 1 equals 0"
        },
        {
          id: 16,
          law: "Natural Logarithm of e Power",
          formula: "$\\ln(e^x) = x$",
          explanation: "Natural logarithm and e exponent cancel out"
        },
        {
          id: 17,
          law: "e to Natural Logarithm Power",
          formula: "$e^{\\ln(x)} = x$",
          explanation: "e raised to natural logarithm equals the argument"
        }
      ],
    
      "Common Logarithm Properties": [
        {
          id: 18,
          law: "Common Logarithm of 10",
          formula: "$\\log(10) = 1$",
          explanation: "Common logarithm of 10 equals 1"
        },
        {
          id: 19,
          law: "Common Logarithm of 1",
          formula: "$\\log(1) = 0$",
          explanation: "Common logarithm of 1 equals 0"
        },
        {
          id: 20,
          law: "Common Logarithm of 10 Power",
          formula: "$\\log(10^x) = x$",
          explanation: "Common logarithm and base 10 exponent cancel out"
        },
        {
          id: 21,
          law: "10 to Common Logarithm Power",
          formula: "$10^{\\log(x)} = x$",
          explanation: "10 raised to common logarithm equals the argument"
        }
      ],
    
      "Advanced Logarithmic Rules": [
        {
          id: 22,
          law: "Reciprocal Rule",
          formula: "$\\log_b\\left(\\frac{1}{x}\\right) = -\\log_b(x)$",
          explanation: "Logarithm of a reciprocal equals negative logarithm"
        },
        {
          id: 23,
          law: "Logarithm Equality",
          formula: "If $\\log_b(x) = \\log_b(y)$, then $x = y$",
          explanation: "Equal logarithms with same base have equal arguments"
        },
        {
          id: 24,
          law: "Exponential Equation Solver",
          formula: "If $a^x = b^y$, then $x \\cdot \\log(a) = y \\cdot \\log(b)$",
          explanation: "Solve exponential equations using logarithms"
        },
        {
          id: 25,
          law: "Compound Logarithm",
          formula: "$\\log_b(\\log_c(x))$ requires $x > 1$ when $c > 1$",
          explanation: "Nested logarithms have restricted domains"
        }
      ],
    
      "Domain and Range Rules": [
        {
          id: 26,
          law: "Domain Restriction",
          formula: "$\\log_b(x)$ is defined when $x > 0$, $b > 0$, $b \\neq 1$",
          explanation: "Logarithm argument must be positive, base positive and not 1"
        },
        {
          id: 27,
          law: "Sign Rule for Large Arguments",
          formula: "$\\log_b(x) > 0$ when $x > 1$ (for $b > 1$)",
          explanation: "Logarithm is positive when argument exceeds 1"
        },
        {
          id: 28,
          law: "Sign Rule for Small Arguments",
          formula: "$\\log_b(x) < 0$ when $0 < x < 1$ (for $b > 1$)",
          explanation: "Logarithm is negative when argument is between 0 and 1"
        },
        {
          id: 29,
          law: "Range Property",
          formula: "$\\log_b(x) \\in (-\\infty, \\infty)$ for valid $x$",
          explanation: "Logarithm function has range of all real numbers"
        }
      ]
    };

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
