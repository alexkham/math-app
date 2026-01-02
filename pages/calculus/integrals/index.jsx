import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
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

        definition:{
          title:`Definition of Integrals`,
          content:``,
          before:`Integration is inverse mathematical operation to differentiation.
          Derivatives find rates of change while integrals reverse this process to recover original functions from their rates of change.
**Integrals measure accumulation**—they answer "how much total change occurred?" while derivatives ask "how fast is it changing right now?"
**Two main types:**
- **Definite integrals** calculate actual quantities: area under curves, total distance from velocity, accumulated change over intervals
- **Indefinite integrals** find antiderivatives: reversing differentiation
**Core concept:** If you know the rate of change (derivative), integration recovers the original function. Like knowing velocity at every moment lets you calculate position.
**Fundamental connection:** The Fundamental Theorem of Calculus links derivatives and integrals—they're inverse operations. This makes integration both a geometric tool (finding areas) and an algebraic tool (undoing differentiation).
**Mathematical applications:** Finding areas between curves, solving differential equations, calculating volumes of revolution, determining arc lengths, analyzing series convergence, and optimization problems involving accumulated quantities.
Integration transforms local information (rates, densities) into global information (totals, accumulations)—essential for understanding cumulative mathematical relationships.`,
          after:`**Integration is the mathematical process of finding the accumulated total from a rate of change.**

More precisely: Integration reverses differentiation by finding a function whose derivative equals the given function (indefinite integral) or by calculating the total accumulation over an interval (definite integral).

**Core definition:** If F'(x) = f(x), then ∫f(x)dx = F(x) + C

Integration transforms rates into totals, slopes into areas, and derivatives back into original functions.`,
      
      
        },
        rules:{
          title:`Integration Rules`,
          link:'/calculus/integrals/rules',
          content:`Integration represents one of the most challenging yet rewarding aspects of calculus, where finding antiderivatives requires both systematic knowledge and creative problem-solving. Unlike differentiation, which follows predictable patterns, integration often feels like detective work—you need the right tools and techniques to unlock each problem's unique solution.
The **Basic Integration Rules** provide the essential foundation, mirroring the arithmetic-friendly nature we see in limits and derivatives. These rules handle the straightforward cases where integration behaves predictably with constants, sums, and simple powers. The power rule dominates this category, offering a mechanical process for most polynomial expressions, while the special case of 1/x introduces us to the logarithmic world that appears throughout calculus.
**Trigonometric Integrals** reveal the intricate dance between trigonometric functions and their antiderivatives. While some, like sine and cosine, integrate elegantly into each other, others like tangent and secant produce surprising logarithmic results. This category showcases how integration can transform familiar functions into unexpected forms, requiring students to memorize these essential patterns.
**Exponential and Logarithmic Integrals** demonstrate the remarkable self-similarity of exponential functions, where e^x persists through almost any process of integration. The reciprocal function pattern here—where f'(x)/f(x) always integrates to ln|f(x)|—provides one of the most useful recognition techniques in all of calculus.
**Inverse Trigonometric Integrals** offer elegant solutions to seemingly complex radical expressions, while **Integration Techniques** provide the strategic methods—substitution, integration by parts, and partial fractions—that transform impossible-looking integrals into manageable problems.`,
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
            id:'definition',
            title:sectionsContent.definition.title,
            link:'',
            content:[
              sectionsContent.definition.before,
            ]
        },
        {
            id:'rules',
            title:sectionsContent.rules.title,
            link:sectionsContent.rules.link,
            content:sectionsContent.rules.content
        },
        // {
        //     id:'',
        //     title:'',
        //     link:'',
        //     content:''
        // }
    ]


  return (
    <>
      {/* <GenericNavbar/> */}
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
       {/* <ScrollUpButton/> */} 
    </>
  );
}
