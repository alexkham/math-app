import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Sections from '@/app/components/page-components/section/Sections'


export async function getStaticProps(){

    const introContent = {
        id: "intro",
        title: "Introduction to Integrals",
        content: `Integrals are one of the fundamental tools of calculus, closely connected to limits and derivatives. While derivatives describe change, integrals focus on accumulation—how quantities build up over time or space. These two concepts are mathematically linked yet serve opposite purposes: one breaks down change, the other sums it up.
    Essentially, an integral calculates the overall accumulation resulting from a quantity that changes continuously. This might mean finding the area under a curve, the total distance traveled given a varying speed, or the accumulated growth of a function. To define such quantities precisely, integrals rely on limits, which allow us to handle infinite sums of infinitesimally small contributions.
    Integrals come in different forms—definite integrals yield numerical results, while indefinite integrals represent families of functions. They obey useful properties and rules that make them powerful tools for analysis.
    Integrals play an important role in many areas of mathematics, such as geometry, analysis, and probability. They are used to model motion, compute areas and volumes, evaluate probabilities, and study the behavior of functions. In all these contexts, integrals provide a systematic way to measure total change or accumulated quantity over an interval.`
      }


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
        introContent
        
      }
    }
  }
  

export default function IntegralsPage({sectionsContent,introContent}) {

    

  

    const integralSections=[
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
    <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>Integrals</h1>
    <br/>
    <SectionTableOfContents sections={integralSections}/>
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
    <Sections sections={integralSections}/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
