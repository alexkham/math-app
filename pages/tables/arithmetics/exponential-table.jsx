import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../table.css'
import '../../../app/globals.css'
import ExponentialTable from '@/app/components/logarithm-table/ExponentialTable'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

export default function ExponentialTablePage() {
  return (
   <>
   <div className='tables-main'>
   <GenericNavbar/>
   <br></br>
   <br></br>
  
   <br></br>
   <br></br>
   <Breadcrumb/>
   <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
   <div style={{position:'absolute',top:'100px',width:'1200px'}}>
   
   <ExponentialTable></ExponentialTable>
   </div>

   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <ScrollUpButton></ScrollUpButton>
   </div>
   </>
  )
}
