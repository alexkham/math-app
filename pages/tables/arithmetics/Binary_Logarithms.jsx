
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../table.css'
import '../../../app/globals.css'
import Base2LogarithmTable from '@/app/components/logarithm-table/LogarithmBase2Table'


export default function BinaryLogarithmTablePage() {
  return (
   <>
   <div className='tables-main'>
   <MyNavbar></MyNavbar>
   <br></br>
   <br></br>
  
   <br></br>
   <br></br>
   <div style={{position:'absolute',top:'100px',width:'1200px'}}>
   
   <Base2LogarithmTable></Base2LogarithmTable>
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
