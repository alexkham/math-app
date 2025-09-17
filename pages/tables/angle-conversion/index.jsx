import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import DegreeRadianConversionTable from '@/app/components/tables/conversion-tables/DegreeRadianConversion'
import React from 'react'
import '../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


 export async function getStaticProps(){

  const keyWords=['degree radians','radians','radians to degrees','angle measurement',
    'angle conversion','degree','360 degree to radian','360 in radians']
  
const navigationGroup=[
  {title:'Related Tools',
    items:[
      {title:'Unit Circle',link:'/visual-tools/unit-circle'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
    ]
  },
  {
    title:'Related Tables',
    items:[
      {title:'Trigonometry Tables',link:'/tables/trigonometry'}
    ]
  }
]


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
         navigationGroup
        
       }
    }
   }

export default function AngleConversionTable({sectionsContent,keyWords,navigationGroup}) {

  
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
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Angle Conversion Table</h1>
    <br/>
    {/* <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='260px'
         /> */}
      <div style={{
      display: 'grid',
      gridTemplateColumns: '15% 80%',
      gap: '20px',
      width: '100%'
   }}>
      {/* Left column - Sidebar */}
      <div>
         <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='180px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'90%',margin:'auto'}}>
            {/* <GenericTable tableData={complementIdentitiesTableData}
               cellFontSize={'16px'}
               headerFontSize={'18px'}
               theme='lightBlue'
            /> */}
              <DegreeRadianConversionTable/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          
            
         </div>
      </div>
   </div>    
    <br/>
  
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
