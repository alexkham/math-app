import NaturalLogarithmTable from '@/app/components/logarithm-table/NaturalLogarithmTable'
import '../table.css'
import '../../../app/globals.css'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'

export default function NaturalLogarithmTablePage() {
  return (
   <>
   <div className='tables-main'>
   {/* <MyNavbar></MyNavbar> */}
   <br></br>
   <br></br>
  
   <br></br>
   <br></br>
   <Breadcrumb/>
   <div style={{position:'absolute',top:'100px',width:'1200px'}}>
   
   <NaturalLogarithmTable></NaturalLogarithmTable>
   </div>

   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   {/* <ScrollUpButton></ScrollUpButton> */}
   </div>
   </>
  )
}
