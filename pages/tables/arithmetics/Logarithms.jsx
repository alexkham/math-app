// import LogarithmTable from '@/app/components/logarithm-table/LogarithmTable'
// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../table.css'
// import '../../../app/globals.css'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'

// export default function LogarithmTablePage() {
//   return (
//    <>
//    <div className='tables-main'>
//    <MyNavbar></MyNavbar>
//    <br></br>
//    <br></br>
  
//    <br></br>
//    <br></br>
//    <Breadcrumb/>
//    <div style={{position:'absolute',top:'100px',width:'1200px'}}>
   
//    <LogarithmTable></LogarithmTable>
//    </div>

//    <br></br>
//    <br></br>
//    <br></br>
//    <br></br>
//    <br></br>
//    <ScrollUpButton></ScrollUpButton>
//    </div>
//    </>
//   )
// }
// pages/tables/arithmetics/logarithms.js
import dynamic from 'next/dynamic'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import '../../pages.css'

// Dynamically import the client component with no SSR
const LogarithmTable = dynamic(
  () => import('@/app/components/logarithm-table/LogarithmTable'),
  { ssr: false }
)

export default function LogarithmTablePage() {
  return (
    <div className='tables-main'>
      <MyNavbar />
      <br /><br /><br /><br />
      <Breadcrumb />
      <div style={{position:'absolute', top:'100px', width:'1200px'}}>
        <h1 className='title'>Logarithm Table</h1>
        <LogarithmTable />
      </div>
      <ScrollUpButton />
    </div>
  )
}