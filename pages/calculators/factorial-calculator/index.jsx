import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FactorialCalculator from '@/app/components/calculators/arithmetics/FactorialCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export default function FactorialCalculatorPage() {

    const keyWords=['factorial','factorial calculator']
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px' }}>Factorial Calculator</h1>
   <FactorialCalculator/>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   
   
   </>
  )
}
