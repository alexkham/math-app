import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ZTableContainer from '@/app/components/z-table/ZTableContainer'
import React from 'react'
import '../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

export default function ZDistributionTablePage() {
  return (
    <>
    <MyNavbar/>
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
