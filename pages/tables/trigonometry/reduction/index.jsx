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


    const keyWords=['trigonometric reduction formulas','trigonometry','trigo',
        'trigonpmetric functions','reduction formula for trigonometric functions',
        'trigonometric formulas','trigonometric reduction' ,'cosine tangent sine']

    
const reductionFormulasTableData = {
 tableTitle: "Trigonometric Reduction Formulas",
 rows: [
   {
     angle: "α",
     sin: "sin α",
     cos: "cos α", 
     tan: "tan α",
     csc: "csc α",
     sec: "sec α",
     cot: "cot α"
   },
   {
     angle: "-α",
     sin: "-sin α",
     cos: "+cos α", 
     tan: "-tan α",
     csc: "-csc α",
     sec: "+sec α",
     cot: "-cot α"
   },
   {
     angle: "90° - α",
     sin: "+cos α",
     cos: "+sin α",
     tan: "+cot α",
     csc: "+sec α",
     sec: "+csc α",
     cot: "+tan α"
   },
   {
     angle: "90° + α",
     sin: "+cos α",
     cos: "-sin α",
     tan: "-cot α",
     csc: "+sec α",
     sec: "-csc α",
     cot: "-tan α"
   },
   {
     angle: "180° - α",
     sin: "+sin α",
     cos: "-cos α",
     tan: "-tan α",
     csc: "+csc α",
     sec: "-sec α",
     cot: "-cot α"
   },
   {
     angle: "180° + α",
     sin: "-sin α",
     cos: "-cos α",
     tan: "+tan α",
     csc: "-csc α",
     sec: "-sec α",
     cot: "+cot α"
   },
   {
     angle: "270° - α",
     sin: "-cos α",
     cos: "-sin α",
     tan: "+cot α",
     csc: "-sec α",
     sec: "-csc α",
     cot: "+tan α"
   },
   {
     angle: "270° + α",
     sin: "-cos α",
     cos: "+sin α",
     tan: "-cot α",
     csc: "-sec α",
     sec: "+csc α",
     cot: "-tan α"
   },
   {
     angle: "360° - α",
     sin: "-sin α",
     cos: "+cos α",
     tan: "-tan α",
     csc: "-csc α",
     sec: "+sec α",
     cot: "-cot α"
   },
   {
     angle: "360° + α",
     sin: "+sin α",
     cos: "+cos α",
     tan: "+tan α",
     csc: "+csc α",
     sec: "+sec α",
     cot: "+cot α"
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
         reductionFormulasTableData
        
       }
    }
   }

export default function ReductionPage({sectionsContent , introContent,reductionFormulasTableData}) {

    
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Trigonometric Reduction Formulas</h1>
   <br/>
  <div style={{width:'80%',margin:'auto'}}>
        <GenericTable tableData={reductionFormulasTableData}
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
