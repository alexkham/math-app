import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ConditionalProbabilityTable from '@/app/components/probability/conditional-probability-demo/ConditionalProbabilityTable'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'

export default function ConditionalProbabilityCalculatorPage() {
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
    <h1 className='title' style={{marginTop:'-30px', marginBottom:'-10px'}}>Conditional Probability Calculator</h1>
    <div style={{transform:'scale(0.9)'}}>
    <ConditionalProbabilityTable/>
    </div>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
