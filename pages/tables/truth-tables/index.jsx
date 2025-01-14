import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'

export default function TruthTablesPage() {
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <OperaSidebar 
        side='right'
        topOffset='60px' 
        sidebarWidth='45px'
        panelWidth='300px'
        
        iconColor='white'
        panelBackgroundColor='#f2f2f2'/> 
    <h1>Truth Tables</h1>    
    </>
  )
}
