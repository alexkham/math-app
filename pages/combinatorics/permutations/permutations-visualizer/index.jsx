import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import PermutationsVisualizer2 from '@/app/components/combinatorics/PermutationsVisualizer2'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages.css'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'

export default function PermutationsVisualizerPage() {
  return (
   <>
   <GenericNavbar/>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <OperaSidebar 
      side='right'
      topOffset='65px' 
      sidebarWidth='45px'
      panelWidth='200px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
   <Breadcrumb></Breadcrumb>
   <h1 className='title'  style={{marginBottom:'-20px'}}>Permutations Visualizer</h1>
   <PermutationsVisualizer2></PermutationsVisualizer2>
   <ScrollUpButton></ScrollUpButton>
   
   </>
  )
}
