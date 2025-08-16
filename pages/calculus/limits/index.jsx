import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import { limitsDiagrams } from '@/app/api/db/diagrams/calculus/limits'
import { basicFunctionsDiagrams } from '@/app/api/db/diagrams/functions/basics'



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
**If** $f$ **is a function, we write**:

$f(x)$=rule for calculating the value of the function at $x$.

The word **“unambiguous”** is used deliberately to emphasize that for each input $x$, the function $f(x)$ yields exactly one value.
The essence of this process is that each value of $x$ is processed and mapped to some value of $f(x)$.
Lets explore a simple function $f(x)=x+2$ :

`,
      after:``,
  
  
    },
    rules:{
      title:`Limits Rules`,
      link:'/calculus/limits/rules',
      content:`Limit rules are the essential toolkit that transforms what seems like an impossible mathematical task—finding the exact behavior of functions at specific points—into a systematic, manageable process. These rules don't just provide mechanical steps; they reveal the elegant underlying structure of how functions behave, giving us confidence to tackle even the most complex expressions by breaking them down into familiar patterns.
The [Basic Limit Laws](!/calculus/limits/rules#basic) capture the intuitive idea that limits should behave like ordinary arithmetic. When you're finding the limit of a sum, you can find the limits of the pieces separately and add them together—limits respect the fundamental operations we use every day. These laws form the grammatical foundation that makes limit calculations possible, ensuring that the limit of complex expressions can be understood through their simpler components.
[Power and Root Limits](!/calculus/limits/rules#powers) extend this arithmetic harmony to exponential and radical expressions, showing that limits play nicely with powers and roots too. Perhaps most importantly, this category includes the direct substitution principle for polynomials and rational functions—the comforting rule that says "just plug in the number" works for most functions you'll encounter.
[Special Theorems](!/calculus/limits/rules#special) come to the rescue when normal arithmetic fails. The Squeeze Theorem provides a clever workaround for tricky limits by trapping a difficult function between two easier ones, while composition rules help navigate the complexity of nested functions.
[Exponential and Logarithmic Limits](!/calculus/limits/rules#exponential) establish the foundational relationships that define the most important mathematical constants and enable advanced calculus techniques. These limits don't just provide computational tools—they actually define what we mean by e, the natural logarithm, and the derivative formulas for exponential and logarithmic functions. The limit definition of e emerges naturally from compound interest problems, while the fundamental exponential and logarithmic limits serve as the building blocks for differentiation rules that appear throughout calculus and beyond.
Finally, [Trigonometric and Exponential Limits](!/calculus/limits/rules#trigonometric) represent the fundamental building blocks of calculus itself—specific, powerful results that define essential mathematical constants and enable the derivative formulas we rely on throughout calculus.`,
      before:``,
      after:``,
  
    },
  
    notation:{
  
      title:`Notation Used for Limits`,
      content:``,
      before:``,
      after:``,
      svg:``
  
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
            sectionsContent.concept.before,
            basicFunctionsDiagrams["Linear Function with Points"].svg
        ]
    },

    {
      id:'notation',
      title:sectionsContent.notation.title,
      link:'',
      content:[
        limitsDiagrams.Notation_Breakdown.svg
      ]
  },
    {
        id:'rules',
        title:sectionsContent.rules.title,
        link:sectionsContent.rules.link,
        content:sectionsContent.rules.content
    },
  
  //   {
  //     id:'',
  //     title:'',
  //     link:'',
  //     content:''
  // }
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
