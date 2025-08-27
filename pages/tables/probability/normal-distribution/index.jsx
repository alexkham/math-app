import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ZTableContainer from '@/app/components/z-table/ZTableContainer'
import React from 'react'
import '../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'

export default function ZDistributionTablePage() {
  return (
    <>
    {/* <MyNavbar/> */}
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'-50px'}}>Normal Distribution(Z) Table</h1>
    <ZTableContainer    />
    <ScrollUpButton/>
    </>
  )
}
