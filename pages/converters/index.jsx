import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import CardsGroup from '@/app/components/cards/CardsGroup'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

export default function ConvertersPage() {
    const CustomPi=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pi"><line x1="9" x2="9" y1="4" y2="20"/><path d="M4 7c0-1.7 1.3-3 3-3h13"/><path d="M18 20c-1.7 0-3-1.3-3-3V4"/></svg>
    )
    const cardItems=[
        {
            category: 'Angle Converter',
            icon: CustomPi,
            href:'converters/degree-radians',
            // No subcategories, will show simple link
            content:"Convert degrees to readians and radiand to degrees.Seee explanations, concersion formulas and visual illustration "
          },
    ]
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
   
    <Breadcrumb/>
    <h1 className='title' >Converters</h1>
    <br/>
    <OperaSidebar 
   side='right'
   topOffset='60px' 
    sidebarWidth='45px'
     panelWidth='200px'
    
     iconColor='white'
     panelBackgroundColor='#f2f2f2'/> 
    <br/>
    <br/>
    <div style={{transform:'scale(0.9)'}}>
    <CardsGroup items={cardItems}/>
    </div>

    <ScrollUpButton/>
    
    </>
  )
}
