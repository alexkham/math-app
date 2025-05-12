import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import CNFConverter from '@/app/components/logic-calculator/normal-form-converters/CNFConverter'
import DNFConverter from '@/app/components/logic-calculator/normal-form-converters/DNFConverter'
import NormalFormsConverter from '@/app/components/logic-calculator/normal-form-converters/NormalFormsConverter'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'

export default function NormalFormsPage({dnfExplanations ,cnfExplanations}) {

    const keyWords=['dnf','cnf','normal form','disjunctive normal form','conjunctive normal form']


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
    <h1 className='title' style={{marginTop:'-10px', marginBottom:'-20px'}}>Normal Forms Converters</h1>
   <div style={{transform:'scale(0.95)'}}>
    <NormalFormsConverter
    dnfExplanations={dnfExplanations}
    cnfExplanations={cnfExplanations}/>
    </div>
    <br/>
    <br/>
    <br/>
    
    </>
  )
}

export async function getStaticProps() {
 
  const dnfExplanations= {
    title: "How DNF Conversion Works:",
    steps: [
      "1. Create a truth table for the expression",
      "2. Find all rows where the expression evaluates to true",
      "3. For each 'true' row, create a conjunction (AND) of literals that makes that row true:",
      "   • If a variable is true in the row, use the variable itself",
      "   • If a variable is false in the row, use the negation of the variable",
      "4. Join all these conjunctions with OR operations",
      "5. The resulting expression is in DNF",
      // `link`
    ]
  } 

  const cnfExplanations={
    title: "How CNF Conversion Works:",
    steps: [
      "1. Create a truth table for the expression",
      "2. Find all rows where the expression evaluates to false",
      "3. For each 'false' row, create a disjunction (OR) of literals that makes that row false:",
      "   • If a variable is true in the row, use the negation of the variable",
      "   • If a variable is false in the row, use the variable itself",
      "4. Join all these disjunctions with AND operations",
      "5. The resulting expression is in CNF",
      // `link`
    ]
  } 

 return {
   props: {
    dnfExplanations,
    cnfExplanations
    
   }
 }
}
