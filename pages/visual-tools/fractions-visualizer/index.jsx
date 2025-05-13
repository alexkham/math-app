import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import FractionCircleApp from '@/app/components/fractions/FractionCircle'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export default function FractionsVisualizerPage() {
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
         panelBackgroundColor='#f2f2f2'/> 
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px'}}>Fractions Visualizer</h1>
   <FractionCircleApp/>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
