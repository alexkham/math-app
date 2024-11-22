import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react';
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import calculusFormulasList from '@/app/api/db/formulas/calculus/calculusFormulasList';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';
import NavButton from '@/app/components/button-group/NavButton';

export default function CalculusPage() {
  

  const calculusSections = [
   
    {
      id: 'formulas',
      title: 'Calculus Formulas',
      content:"Explore ",
      content: [
  //       `Explore Calculus formulas with explanations and examples
  //         And here's a more complex integral:
  // $$\\int_{0}^{\\pi} \\sin(x) dx = [-\\cos(x)]_{0}^{\\pi} = 2$$
  
  //  Here's a visual representation of a function:
  //  <svg viewBox="0 0 100 100" width="200" height="200">
  // <path d="M10 90 Q 52.5 10, 95 90" fill="none" stroke="black"/>
  //   <line x1="10" y1="10" x2="10" y2="90" stroke="black"/>
  //   <line x1="10" y1="90" x2="95" y2="90" stroke="black"/>
  //  </svg>`,
  //       " ",
        { 
          content: '<div style="background-color:#ebf5ff;height:250px;padding:20px;">Visit Calculus formulas page.</div>',
          layout: 'horizontal', 
          position: 'left',
          width: 1.5 
        },
        // { 
        //   content: '<div style="background-color: red;">Left side text</div>',
        //   layout: 'horizontal', 
        //   position: 'left',
        //   width: 1 
        // },
      
          { 
            content:   <VerticalScrollingFormulaWidget 
            key={"formula-widget"}
             formulaData={calculusFormulasList}
             moreFormulasLink='/calculus/formulas'
            //  title='See them all'
              />, 
            layout: 'horizontal', 
            position: 'right',
            width: 2 
          },
         
   
    ]
      
    },
  ];

  const introContent = {
    id: "intro",
    title: "Introduction to Calculus",
    content:`Calculus is a section of mathematics dealing with continuous change. It encompasses several fundamental concepts: **limits**, **derivatives**, **integrals**, and **infinite series**. These ideas work together to create a powerful mathematical framework.

The core components of calculus include:
 **Limits** - examining the behavior of functions as they approach specific values
 **Differential calculus** - studying rates of change through derivatives
 **Integral calculus** - analyzing accumulation and total change
 **Infinite series** - representing functions as sums of infinite terms

Differential calculus allows us to find instantaneous rates of change and optimize functions, while integral calculus provides tools for calculating areas, volumes, and accumulated quantities. The connection between these two branches, established by the **Fundamental Theorem of Calculus**, creates a unified system for analyzing continuous change.

Applications of calculus extend throughout science, engineering, and economics. In physics, it models motion and energy; in engineering, it optimizes designs and processes; in economics, it analyzes rates of growth and market behavior. The subject's precise mathematical framework makes it essential for understanding and describing natural phenomena.`
//     content: `Calculus is a fundamental branch of mathematics that studies continuous change. At its core, it consists of two complementary ideas: differential calculus and integral calculus. Differential calculus examines instantaneous rates of change through derivatives, while integral calculus focuses on the accumulation of quantities over time or space.

// The power of calculus lies in its ability to analyze functions through limits, enabling us to understand both infinitesimally small changes and their cumulative effects. This makes it an essential tool across various fields - from physics and engineering to economics and data science.

// Key concepts include limits, continuity, differentiation, and integration. Through these tools, calculus provides methods to optimize functions, calculate areas and volumes, and model real-world phenomena described by continuous functions. The subject builds upon algebra and geometry to create a unified framework for studying dynamic systems and solving complex problems.

// For students pursuing STEM fields, calculus serves as a gateway to advanced mathematics and its applications. Even beyond technical fields, the logical thinking and problem-solving approaches developed through studying calculus remain valuable across many disciplines.`

  //   content: `Welcome to Calculus! This course will explore the fundamental concepts that revolutionized mathematics.
  
  // Here's what we'll cover:
  // - Limits and Continuity
  // - Derivatives and their applications
  // - Integration techniques
  
  // Let's start with a simple derivative example: $\\frac{d}{dx}(x^2) = 2x$
  
  // And here's a more complex integral:
  // $$\\int_{0}^{\\pi} \\sin(x) dx = [-\\cos(x)]_{0}^{\\pi} = 2$$
  
  // Here's a visual representation of a function:
  // <svg viewBox="0 0 100 100" width="200" height="200">
  //   <path d="M10 90 Q 52.5 10, 95 90" fill="none" stroke="black"/>
  //   <line x1="10" y1="10" x2="10" y2="90" stroke="black"/>
  //   <line x1="10" y1="90" x2="95" y2="90" stroke="black"/>
  // </svg>
  
  // For more resources, check out our [supplementary materials](https://example.com).
  
  // Some text with **bold** emphasis and an HTML example:
  // <div style="color: blue;">Special note about derivatives</div>`
  };
  
  
  

  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar 
      side='right'
      topOffset='65px' 
      sidebarWidth='45px'
      panelWidth='200px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Calculus</h1>
    <SectionTableOfContents sections={calculusSections}/>
    <br/>
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#34383c"
/>
   
    <Sections  sections={calculusSections}/>
   
  
    <br/>
    {/* <div style={{marginLeft:'300px'}}>
    <NavButton link="intro"  />
    </div> */}
    <br/>
   
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}