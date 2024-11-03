import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import VennGenerator from '@/app/components/diagrams/VennGenerator'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'


const StandardContainer = ({ children }) => (
  <div style={{
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
    transform: 'scale(0.9)', 
    transformOrigin: 'top center',
    height: '110vh',
    fontSize:'18px'
  }}>
    {children}
  </div>
)

export default function VennDiagramGeneratorPage() {
  return (
   <>
   <GenericNavbar/>
  
   <br/>
   <br/>
   <br/>
   <br/>
   <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='35px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px'}}>Venn Diagrams Generator</h1>
   <br/>
   {/* <div style={{
        transform: 'scale(0.8)', 
        transformOrigin: 'top center',
        height: '110vh', // Increase the height to accommodate scaled content
      }}> */}
      {/* <StandardContainer> */}
   <VennGenerator/>
   {/* </StandardContainer> */}
   
   {/* </div> */}
   <ScrollUpButton/>
  
   </>
  )
}
