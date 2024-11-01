import React from 'react'
import probabilityFormulaList from '@/app/api/db/formulas/probability/probabilityFormulasList'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'

export default function ProbabilityFormulasPage() {
  return (
    <>
    <MyNavbar/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Probability Formulas</h1>
    <FormulaAccordionWrapper data={probabilityFormulaList} groupByField={['category']}/>
    </>
  )
}
