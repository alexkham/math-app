import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DegreeRadianConversionTable from '@/app/components/tables/conversion-tables/DegreeRadianConversion'
import React from 'react'
import '../../pages.css'


 export async function getStaticProps(){

  const keyWords=['degree radians','radians','radians to degrees','angle measurement',
    'angle conversion','degree','360 degree to radian','360 in radians']
  
  const sectionsContent={

    obj1:{
      title:``,
      content:``,
      before:``,
      after:``,
  
  
    },
    obj2:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
  
    obj3:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    },
    obj4:{
      title:``,
      content:``,
      before:``,
      after:``,
  
    },


    obj5:{
  
      title:``,
      content:``,
      before:``,
      after:``,
  
    }
  
  }



   return {
      props:{
         sectionsContent,
        
       }
    }
   }

export default function AngleConversionTable({sectionsContent,keyWords}) {

  
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar 
             side='right'
             // topOffset='65px' 
             sidebarWidth='45px'
             panelWidth='300px'
             iconColor='white'
             panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-30px'}}>Angle Conversion Table</h1>
    <br/>
    <DegreeRadianConversionTable/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
