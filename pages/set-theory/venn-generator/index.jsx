import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import VennGenerator from '@/app/components/diagrams/VennGenerator'
import React from 'react'
import '../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


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
   {/* <GenericNavbar/>
   */}
  
   <br/>
   <br/>
   <OperaSidebar
        side='right'
        // topOffset='55px'
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
   {/* <ScrollUpButton/> */}
  
   </>
  )
}
