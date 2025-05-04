import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../../pages.css'
import PropositionTreeBuilder from '@/app/components/logic-calculator/proposition-tree/PropositionTreeBuilder'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export default function TreeBuilderPage() {
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
    <h1 className='title' style={{marginTop:'10px', marginBottom:'-10px'}}>Proposition Analyzer & Tree Builder</h1>
     {/* <div style={{transform:'scale(0.9)'}}> */}
     <PropositionTreeBuilder/>
     {/* </div> */}
     <br/>
     <br/>
     <br/>
     <ScrollUpButton/>
    </>
  )
}
