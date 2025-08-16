import dynamic from 'next/dynamic'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../../pages.css'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'

// Dynamically import the client component with no SSR
const LogarithmTable = dynamic(
  () => import('@/app/components/logarithm-table/LogarithmTable'),
  { ssr: false }
)

export default function LogarithmTablePage() {
  return (
    <div className='tables-main'>
      <GenericNavbar/>
      <br />
      <br />
      <br />
        <OperaSidebar 
             side='right'
             topOffset='55px' 
             sidebarWidth='45px'
             panelWidth='200px'
             iconColor='white'
             panelBackgroundColor='#f2f2f2'
           /> 
     
      <div style={{position:'absolute', top:'100px', width:'1200px'}}>
      <Breadcrumb />
        <h1 className='title' style={{marginTop:'-20px',marginBottom:'-30px'}}>Logarithm Table</h1>
        <LogarithmTable />
      </div>
      <ScrollUpButton />
    </div>
  )
}