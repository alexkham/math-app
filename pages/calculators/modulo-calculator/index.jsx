import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import ModuloCalculator from '@/app/components/calculators/modulo/ModuloCalculator'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'

export default function ModuloCalculatorPage() {

    const keyWords=['modulo','modulus','modulo calculator','modulo addition','modulo division']
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
               panelWidth='300px'
               iconColor='white'
               panelBackgroundColor='#f2f2f2'
             /> 
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Modulo Calculator</h1>
   <div style={{transform:'scale(0.95)'}}>
   <ModuloCalculator/>
   </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   
   
   </>
  )
}
