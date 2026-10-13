import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import PermutationsVisualizer2 from '@/app/components/combinatorics/PermutationsVisualizer2'
import '../../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import AffiliateBlock from '@/app/components/affiliates/AffiliateBlock'
import { COURSES } from '@/app/components/affiliates/courses'

export default function PermutationsVisualizerPage() {
  return (
   <>
   {/* <GenericNavbar/> */}
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
   <h1 className='title'  style={{marginBottom:'10px'}}>Permutations Visualizer</h1>
   <PermutationsVisualizer2></PermutationsVisualizer2>
   <div style={{maxWidth:'1000px',margin:'0 auto',padding:'0 20px'}}>
     <AffiliateBlock variant="strip" {...COURSES.probability} headline="From counting arrangements to computing probabilities" />
   </div>
   {/* <ScrollUpButton></ScrollUpButton> */}
   
   </>
  )
}
