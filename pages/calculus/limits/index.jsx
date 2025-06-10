import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'



export async function getStaticProps(){

 
const introContent = {
  id: "intro",
  title: "Introduction to Limits",
  content: `Understanding the very concept of a limit may be most crucial and hard to grasp in the study of mathematics. Limits are deeply interconnected with several other fundamental mathematical ideas—most notably, derivatives, integrals, and continuity. 
It is practically the basis for the definition of derivatives. Similarly, the integral, which measures accumulation or area under a curve, relies on the concept of a limit to handle infinitely small partitions. Even the definition of continuity—a basic property of functions—depends on limits.
Beyond pure theory, limits have broad practical applications. They are essential in analyzing rates of change, understanding motion, modeling real-world phenomena, and handling infinite processes. Whether in physics, engineering, economics, or computer science, the language of limits helps express and solve problems involving change and approximation.`
}

    
  const sectionsContent={

    concept:{
      title:`Limit of a Function: Basic Concept`,
      content:``,
      before:`To better understand the concept of a limit, we need to revisit the basic definition of a mathematical function.
In mathematics, a function is defined as an unambiguous rule that assigns to each input (or argument) exactly one output (or value).
If fff is a function, we write:
f(x)=rule for calculating the value of the function at x.f(x) = \text{rule for calculating the value of the function at } x.
f(x)=rule for calculating the value of the function at x.
The word “unambiguous” is used deliberately to emphasize that for each input xxx, the function f(x)f(x)f(x) yields exactly one value.
The essence of this process is that each value of x is processed and mapped to some value of f(x).
Lets explore a simple function f(x)=x+2
`,
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
        introContent
        
      }
    }
  }
  

export default function LimitsPage({sectionsContent,introContent}) {

    
  const limitSections=[
    {
        id:'concept',
        title:sectionsContent.concept.title,
        link:'',
        content:[
            sectionsContent.concept.before
        ]
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
             panelWidth='300px'
             iconColor='white'
             panelBackgroundColor='#f2f2f2'/> 
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Limits of Functions</h1>
   <br/>
   <SectionTableOfContents sections={limitSections}/>
   <br/>
   <br/>
   <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
          backgroundColor="#f2f2f2"
          textColor="#34383c"
        />
   <br/>
   <br/>
   <Sections sections={limitSections}/>
   <br/>
   <br/>
   <br/>
  <ScrollUpButton/>
   
   
   </>
  )
}
