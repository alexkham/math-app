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

    
    const keyWords=[
        
        'trigonometry tables','trigonometric functions','trigonometry','trigonometric functions table',
    
    ]



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
{
    name: "Inverse Trigonometric Functions",           // Required - card title
  description: " Complete reference table showing domain, range, and principal values for all six inverse trig functions with common examples.",    // Required - card description  
  path: "/tables/trigonometry/inverse",  
},

{
    name: "Trigonometric Reduction Formulas",           // Required - card title
  description: " Essential formulas for converting complex angle expressions into basic trigonometric functions of simple angles.",    // Required - card description  
  path: "/tables/trigonometry/reduction",  
},
{
    name: "Half Angle Identities",           // Required - card title
  description: "Formulas that express trigonometric functions of θ/2 in terms of functions of θ. These allow calculation of exact values for fractional angles and are crucial for integration and equation solving.",    // Required - card description  
  path: "/tables/trigonometry/half-angle",  
},

{
    name: "Double Angle Identities",           // Required - card title
  description: "Formulas that express trigonometric functions of 2θ in terms of functions of θ. These break down compound angles into simpler components.",    // Required - card description  
  path: "/tables/trigonometry/double-angle",  
},
{
    name: "Triple Angle Identities",           // Required - card title
  description: "Formulas that express trigonometric functions of 3θ in terms of functions of θ. These reveal cubic polynomial relationships and are used for solving complex equations and deriving Chebyshev polynomials.",    // Required - card description  
  path: "/tables/trigonometry/triple-angle",  
},

{
    name: "Sum of Angles Identities",           // Required - card title
  description: "Formulas for trigonometric functions of two added angles (α + β). Essential for combining separate angle measurements into single expressions.",    // Required - card description  
  path: "/tables/trigonometry/sum-angle",  
},

{
    name: "Difference of Angles Identities",           // Required - card title
  description: "Identities that simplify trigonometric functions of subtracted angles (α - β). Used to separate combined measurements and find relationships between different angle values.",    // Required - card description  
  path: "/tables/trigonometry/difference-angle",  
},
{
    name: "Negative Angle Formulas (Even-Odd Identities)",           // Required - card title
  description: "Identities showing how trigonometric functions behave with negative angles, revealing their even or odd symmetry properties. These formulas demonstrate that some functions change sign with negative inputs while others remain unchanged.",    // Required - card description  
  path: "/tables/trigonometry/negative-angle",  
},
{
    name: "Complement Angle Formulas",           // Required - card title
  description: "Identities that express trigonometric functions of complementary angles (90° - θ) in terms of the original angle θ. These formulas reveal the fundamental relationships between cofunctions, showing how sine and cosine, tangent and cotangent, and secant and cosecant are paired through complementary angles.",    // Required - card description  
  path: "/tables/trigonometry/complement-angle",  
},
{
    name: "Supplement Angle Formulas",           // Required - card title
  description: "Identities that show how trigonometric functions behave for supplementary angles (180° - θ). These formulas demonstrate which functions maintain their values and which change signs when reflected across the y-axis.",    // Required - card description  
  path: "/tables/trigonometry/supplement-angle",  
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
