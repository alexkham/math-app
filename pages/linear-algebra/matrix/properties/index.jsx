import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MatrixComparisonTable from '@/app/components/matrices/matrix-comparison/MatrixComparisonTable'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages.css'
import { categories, matrixTypes } from '../../../../app/components/matrices/matrix-comparison/matrixComparisonData';

export default function MatrixPropertiesPage() {
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
    <h1 className='title' style={{marginTop:'-10px',marginBottom:'30px'}}>Matrix Properties</h1>
    <MatrixComparisonTable categories={categories} matrixTypes={matrixTypes}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>

    </>
  )
}

