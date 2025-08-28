import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../../math-app/pages/pages.css'

import GenericTable from '@/app/components/generic-table/GenericTable'


export async function getStaticProps(){


  const keyWords=['trigonpmetric functions','trigonometry','trigo',
    'inverse trigonometric function','calculating inverse trig functions',
    'cosine tangent sine','inverse trig','inverse of trig functions','trigonometric functions and inverses',
    'inverse trigonometry function','inverse cosine','inverse sine']


    const inverseTrigoTableData = {
 tableTitle: "Inverse Trigonometric Functions - Domain, Range, and Principal Values",
 rows: [
   {
     function: "arcsin(x)",
     notation: "sin⁻¹(x)",
     domain: "[-1, 1]",
     range: "[-π/2, π/2]",
     common_value: "arcsin(1/2) = π/6 = 30°"
   },
   {
     function: "arccos(x)",
     notation: "cos⁻¹(x)", 
     domain: "[-1, 1]",
     range: "[0, π]",
     common_value: "arccos(1/2) = π/3 = 60°"
   },
   {
     function: "arctan(x)",
     notation: "tan⁻¹(x)",
     domain: "(-∞, ∞)",
     range: "(-π/2, π/2)",
     common_value: "arctan(1) = π/4 = 45°"
   },
   {
     function: "arccsc(x)",
     notation: "csc⁻¹(x)",
     domain: "(-∞, -1] ∪ [1, ∞)",
     range: "[-π/2, 0) ∪ (0, π/2]",
     common_value: "arccsc(2) = π/6 = 30°"
   },
   {
     function: "arcsec(x)",
     notation: "sec⁻¹(x)",
     domain: "(-∞, -1] ∪ [1, ∞)",
     range: "[0, π/2) ∪ (π/2, π]",
     common_value: "arcsec(2) = π/3 = 60°"
   },
   {
     function: "arccot(x)",
     notation: "cot⁻¹(x)",
     domain: "(-∞, ∞)",
     range: "(0, π)",
     common_value: "arccot(1) = π/4 = 45°"
   }
 ]
};

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


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}




   return {
      props:{
         sectionsContent,
         introContent,
         inverseTrigoTableData
        
       }
    }
   }

export default function InversePage({sectionsContent , introContent ,inverseTrigoTableData}) {

    
  const genericSections=[
    {
        id:'1',
        title:'section1',
        link:'',
        content:''
    },
    {
        id:'2',
        title:'section2',
        link:'',
        content:''
    },
    {
        id:'',
        title:'',
        link:'',
        content:''
    }
]

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
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   
   <br/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Inverse Trigonometric Functions</h1>
   <br/>
   {/* <GenericTable tableData={inverseTrigoTableData}/> */}
   {/* <GenericTable tableData={inverseTrigoTableData}/> */}
    <div style={{width:'80%',margin:'auto'}}>
        <GenericTable tableData={inverseTrigoTableData}
        cellFontSize={'16px'}
        headerFontSize={'18px'}
        theme='lightBlue'
        />
        </div>
   <br/>
   {/* <SectionTableOfContents sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        /> */}
   <br/>
   <br/>
   {/* <Sections sections={genericSections}/> */}
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   </>
  )
}
