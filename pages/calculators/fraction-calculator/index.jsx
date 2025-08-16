import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FractionCalculator from '@/app/components/calculators/fraction-calculator/FractionCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export default function FractionCalculatorPage() {
  return (
   <>
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar
           side='right'
           // topOffset='65px'
           sidebarWidth='45px'
           panelWidth='300px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Fraction Calculator</h1>
   <FractionCalculator/>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
