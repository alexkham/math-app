import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import NewCardGroup from '@/app/components/cards/NewCardGroup'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
// import styles from '../tables.module.css';
import { TriangleRight } from 'lucide-react';


export async function getStaticProps(){


    const trigoTableData = {
 tableTitle: "Trigonometric Functions - Special Angles",
 rows: [
   {
     angle_degrees: "0°",
     angle_radians: "0",
     sin: "0",
     cos: "1", 
     tan: "0",
     csc: "Undefined",
     sec: "1",
     cot: "Undefined"
   },
   {
     angle_degrees: "30°",
     angle_radians: "π/6",
     sin: "1/2",
     cos: "√3/2",
     tan: "√3/3",
     csc: "2",
     sec: "2√3/3", 
     cot: "√3"
   },
   {
     angle_degrees: "45°", 
     angle_radians: "π/4",
     sin: "√2/2",
     cos: "√2/2",
     tan: "1",
     csc: "√2",
     sec: "√2",
     cot: "1"
   },
   {
     angle_degrees: "60°",
     angle_radians: "π/3", 
     sin: "√3/2",
     cos: "1/2",
     tan: "√3",
     csc: "2√3/3",
     sec: "2",
     cot: "√3/3"
   },
   {
     angle_degrees: "90°",
     angle_radians: "π/2",
     sin: "1",
     cos: "0",
     tan: "Undefined",
     csc: "1", 
     sec: "Undefined",
     cot: "0"
   },
   {
     angle_degrees: "120°",
     angle_radians: "2π/3",
     sin: "√3/2",
     cos: "-1/2",
     tan: "-√3",
     csc: "2√3/3",
     sec: "-2",
     cot: "-√3/3"
   },
   {
     angle_degrees: "135°",
     angle_radians: "3π/4", 
     sin: "√2/2",
     cos: "-√2/2",
     tan: "-1",
     csc: "√2",
     sec: "-√2",
     cot: "-1"
   },
   {
     angle_degrees: "150°",
     angle_radians: "5π/6",
     sin: "1/2", 
     cos: "-√3/2",
     tan: "-√3/3",
     csc: "2",
     sec: "-2√3/3",
     cot: "-√3"
   },
   {
     angle_degrees: "180°",
     angle_radians: "π",
     sin: "0",
     cos: "-1",
     tan: "0",
     csc: "Undefined",
     sec: "-1",
     cot: "Undefined"
   },
   {
     angle_degrees: "210°",
     angle_radians: "7π/6",
     sin: "-1/2",
     cos: "-√3/2", 
     tan: "√3/3",
     csc: "-2",
     sec: "-2√3/3",
     cot: "√3"
   },
   {
     angle_degrees: "225°",
     angle_radians: "5π/4",
     sin: "-√2/2",
     cos: "-√2/2",
     tan: "1",
     csc: "-√2",
     sec: "-√2",
     cot: "1"
   },
   {
     angle_degrees: "240°", 
     angle_radians: "4π/3",
     sin: "-√3/2",
     cos: "-1/2",
     tan: "√3",
     csc: "-2√3/3",
     sec: "-2",
     cot: "√3/3"
   },
   {
     angle_degrees: "270°",
     angle_radians: "3π/2",
     sin: "-1",
     cos: "0",
     tan: "Undefined",
     csc: "-1",
     sec: "Undefined", 
     cot: "0"
   },
   {
     angle_degrees: "300°",
     angle_radians: "5π/3",
     sin: "-√3/2",
     cos: "1/2",
     tan: "-√3",
     csc: "-2√3/3",
     sec: "2",
     cot: "-√3/3"
   },
   {
     angle_degrees: "315°",
     angle_radians: "7π/4",
     sin: "-√2/2",
     cos: "√2/2", 
     tan: "-1",
     csc: "-√2",
     sec: "√2",
     cot: "-1"
   },
   {
     angle_degrees: "330°",
     angle_radians: "11π/6",
     sin: "-1/2",
     cos: "√3/2",
     tan: "-√3/3",
     csc: "-2",
     sec: "2√3/3",
     cot: "-√3"
   },
   {
     angle_degrees: "360°",
     angle_radians: "2π",
     sin: "0",
     cos: "1",
     tan: "0",
     csc: "Undefined",
     sec: "1", 
     cot: "Undefined"
   }
 ]
};

const triangle=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-right-icon lucide-triangle-right"><path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"/></svg>

const tablesCardsData=[
    {
  name: "Special Angles",           // Required - card title
  description: "Comprehensive trigonometric values table covering all six functions (sine, cosine, tangent, cosecant, secant, cotangent) for special angles from 0° to 360°, with both degree and radian measurements.",    // Required - card description  
  path: "/tables/trigonometry/special-angles",           // Optional - link URL
//   icon: triangle,      // Optional - React icon component
//   backgroundColor: "color", // Optional - card background
//   textColor: "color",       // Optional - text color
//   footerColor: "color"      // Optional - footer background
},

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


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}




   return {
      props:{
         sectionsContent,
         introContent,
         tablesCardsData
        
       }
    }
   }

export default function TrigonometricTablesPage({sectionsContent , introContent,tablesCardsData}) {

    
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
   <div >
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Trigonometry Tables</h1>
   <br/>
   <NewCardGroup
   cards={tablesCardsData}
   linkTitle='Learn More'
   />
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
   </div>
  )
}
