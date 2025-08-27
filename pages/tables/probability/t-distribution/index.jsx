import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MyNavbar from '@/app/components/nav-bar/MyNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import TTableContainer from '@/app/components/t-table/TTableContainer'
import React from 'react'
import '../../table.css'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'

export default function TTablePage() {
  return (
    <>
    {/* <MyNavbar/> */}
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'-30px'}}>T-Distribution Table</h1>
    <TTableContainer/>
    <ScrollUpButton/>
    </>
  )
}
