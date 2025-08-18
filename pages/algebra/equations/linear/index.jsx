import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'


export async function getStaticProps(){

  const keyWords=['linear equations','equations','math equations','algebra equations',
    'solving equations','mathematical equations','','',]

    
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

        
      }
    }
  }

export default function LinearEquationsPage({ sectionsContent,
  introContent}) {

    
  const linearEquationsSections=[
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
                 topOffset='55px' 
                 sidebarWidth='45px'
                 panelWidth='200px'
                 iconColor='white'
                 panelBackgroundColor='#f2f2f2'
               /> 
     <Breadcrumb/>
     <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Linear Equations</h1>
     <br/>
     <SectionTableOfContents sections={linearEquationsSections}/>
     <br/>
     <br/>
     <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#06357a"
        />
     <br/>
     <br/>
     <br/>
     <Sections sections={linearEquationsSections}/>
     <br/>
     <ScrollUpButton/>
     
     </>
  )
}
