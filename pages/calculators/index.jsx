import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import CardsGroup from '@/app/components/cards/CardsGroup'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

export default function ConvertersPage() {
    const CustomStats=()=>(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-big"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/></svg>
    )
    const cardItems=[
        {
            category: 'Statistics Calculator',
            icon: CustomStats,
            href:'/calculators/statistics-calculator',
            // No subcategories, will show simple link
            content:"Upload dataset from file or manually and calculate up to 18 different stats with explanations "
          },
    ]
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
   
    <Breadcrumb/>
    <h1 className='title' >Calculators</h1>
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
