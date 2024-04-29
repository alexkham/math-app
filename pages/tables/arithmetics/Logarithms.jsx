import LogarithmTable from '@/app/components/logarithm-table/LogarithmTable'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../table.css'
import '../../../app/globals.css'

export default function LogarithmTablePage() {
  return (
   <>
   <div className='tables-main'>
   <MyNavbar></MyNavbar>
   <br></br>
   <br></br>
  
   <br></br>
   <br></br>
   <div style={{position:'absolute',top:'400px',width:'1200px'}}>
   
   <LogarithmTable></LogarithmTable>
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
