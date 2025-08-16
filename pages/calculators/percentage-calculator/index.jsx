import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import PercentageCalculator from '@/app/components/calculators/arithmetics/PercentageCalculator'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'

export default function PercentageCalculatorPage() {
     
    const keyWords=['percentage calculator','percentage']

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
    <h1 className='title' style={{marginTop:'-20px' ,marginBottom:'20px'}}>Percentage Calculator</h1>
   <div style={{transform:'scale(0.9)'}}>
    <PercentageCalculator/>
    </div>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
