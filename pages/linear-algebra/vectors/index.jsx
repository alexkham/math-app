import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'

export default function VectorsPage() {
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
      <OperaSidebar 
               side='right'
              //  topOffset='55px' 
               sidebarWidth='45px'
               panelWidth='300px'
               iconColor='white'
               panelBackgroundColor='#f2f2f2'
             /> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Vectors</h1>
    <br/>
    {/* <SectionTableOfContents/> */}
    <br/>
    <br/>
    {/* <IntroSection/> */}
    <br/>
    <br/>
    {/* <Sections/> */}
    <br/>
    <ScrollUpButton/>
    </>
  )
}
