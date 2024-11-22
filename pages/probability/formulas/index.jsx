import React from 'react'
import probabilityFormulaList from '@/app/api/db/formulas/probability/probabilityFormulasList'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import FormulasTOC from '@/app/components/examples/FormulaTOC'

export default function ProbabilityFormulasPage() {
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar 
      side='right'
      topOffset='65px' 
      sidebarWidth='45px'
      panelWidth='200px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'-10px'}}>Probability Formulas</h1>
    <FormulasTOC data={probabilityFormulaList}/>
    <div style={{transform:'scale(0.95)'}}>
    <FormulaAccordionWrapper data={probabilityFormulaList} groupByField={['category']}/>
    </div>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
