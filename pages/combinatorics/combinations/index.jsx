import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'



export async function getStaticProps(){

    
  const sectionsContent={

    combinations:{
      title:`Simple Combinations`,
      content:``,
      before:``,
      after:``,
  
  
    },
    partition:{
      title:`Partition into Groups`,
      content:``,
      before:``,
      after:``,
  
    },
  
    distribution:{
  
      title:`Distribution into Cells`,
      content:``,
      before:``,
      after:``,
  
    },
    weak:{
      title:`Weak Composition`,
      content:``,
      before:``,
      after:``,
  
    },


    strong:{
  
      title:`Strong Composition`,
      content:``,
      before:``,
      after:``,
  
    },
    obj5:{
  
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
  title: "Combinations: Selecting and Grouping without Order",
  content: `Combinations focus on selection where **order doesn't matter**. Unlike [permutations](!/combinatorics/permutations) where arrangement sequence is crucial, combinations only care about which elements are chosen, not how they're arranged.

This page covers five key combination scenarios: [Basic Combinations](!/combinatorics/combinations#combinations) (selecting unordered subsets), [Partition into Groups](!/combinatorics/combinations#partition) (dividing elements into unlabeled groups), [Distribution into Cells](!/combinatorics/combinations#distribution) (assigning elements to labeled containers), [Weak Composition](!/combinatorics/combinations#weak) (distributing identical units with empty cells allowed), and [Strong Composition](!/combinatorics/combinations#strong) (distributing identical units requiring non-empty cells).

Each type serves different counting needs, from team selection to resource allocation. Understanding when order matters versus when it doesn't is fundamental to choosing between combinations and permutations.

Mastering these combination types equips you to handle selection and distribution problems across various mathematical and practical contexts. The challenge is identifying which scenario matches your specific problem.`
}

    return {
      props:{
        sectionsContent,
        introContent
        
      }
    }
  }
  

export default function CombinationsPage({sectionsContent,introContent}) {

  
  const combinationsSections=[
    {
        id:'combinations',
        title:sectionsContent.combinations.title,
        link:'',
        content:''
    },
    {
        id:'partition',
        title:sectionsContent.partition.title,
        link:'',
        content:''
    },
    {
        id:'distribution',
        title:sectionsContent.distribution.title,
        link:'',
        content:''
    },
    {
        id:'weak',
        title:sectionsContent.weak.title,
        link:'',
        content:''
    },
    {
        id:'strong',
        title:sectionsContent.strong.title,
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
    <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>Combinations</h1>   
    <br/> 
    <SectionTableOfContents sections={combinationsSections}/>
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
    <Sections sections={combinationsSections}/>
    <br/> 
    <br/>
    <ScrollUpButton/> 
    
    </>
  )
}
