import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import { Section } from 'lucide-react'
import Sections from '@/app/components/page-components/section/Sections'



export async function getStaticProps(){

  const introContent = {
    id: "intro",
    title: "Introduction to Derivatives",
    content: `Derivatives are one of the core ideas in calculus and are closely tied to two other fundamental concepts: [limits](!/calculus/limits) and [integrals](!/calculus/integrals).As discussed in the section [“Limits, Derivatives, and Integrals”](!/calculus#three_concepts) these three notions are interconnected—limits provide the mathematical precision needed to define both derivatives and integrals, which are essentially opposite processes—one describes how quantities change, while the other measures how they accumulate.
At its core, a derivative describes how one quantity varies in response to changes in another—it represents the rate at which a function's output shifts as its input changes. Whether describing the speed of a moving object, the slope of a curve, or the rate at which populations grow, derivatives help us understand and predict dynamic behavior.
Derivatives possess important mathematical properties, such as linearity and rules for combining and composing functions. They also extend naturally to higher-order derivatives, which describe more complex changes like acceleration or curvature.
`
  }
  
  
  const sectionsContent={

    definitions:{
      title:`Basic Definitions`,
      content:``,
      svg:`<svg viewBox="0 0 750 700" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="600" fill="#f8f9fa"/>
  
  <!-- Grid lines -->
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9ecef" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#grid)"/>
  
  <!-- Axes -->
  <line x1="80" y1="500" x2="720" y2="500" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)"/>
  <line x1="120" y1="520" x2="120" y2="80" stroke="#000" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
  </defs>
  
  <!-- Axis labels -->
  <text x="730" y="520" font-family="Arial, sans-serif" font-size="16" font-style="italic">x</text>
  <text x="100" y="75" font-family="Arial, sans-serif" font-size="16" font-style="italic">y</text>
  
  <!-- Function curve (parabola) -->
  <path d="M 150 400 Q 220 320 300 250 Q 380 200 450 180 Q 520 170 600 200" stroke="#2563eb" stroke-width="3" fill="none"/>
  
  <!-- Two points on the curve -->
  <circle cx="300" cy="250" r="4" fill="#dc2626"/>
  <circle cx="450" cy="180" r="4" fill="#dc2626"/>
  
  <!-- Point labels -->
  <text x="285" y="240" font-family="Arial, sans-serif" font-size="14" font-weight="bold">P</text>
  <text x="455" y="170" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Q</text>
  
  <!-- Secant line -->
  <line x1="250" y1="280" x2="500" y2="150" stroke="#059669" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Projections to x-axis -->
  <line x1="300" y1="250" x2="300" y2="500" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="450" y1="180" x2="450" y2="500" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Projections to y-axis -->
  <line x1="300" y1="250" x2="120" y2="250" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="450" y1="180" x2="120" y2="180" stroke="#6b7280" stroke-width="1" stroke-dasharray="3,3"/>
  
  <!-- Delta x (horizontal distance) -->
  <line x1="300" y1="480" x2="450" y2="480" stroke="#7c3aed" stroke-width="2"/>
  <line x1="300" y1="475" x2="300" y2="485" stroke="#7c3aed" stroke-width="2"/>
  <line x1="450" y1="475" x2="450" y2="485" stroke="#7c3aed" stroke-width="2"/>
  <text x="365" y="470" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#7c3aed">Δx</text>
  
  <!-- Delta y (vertical distance) -->
  <line x1="100" y1="250" x2="100" y2="180" stroke="#dc2626" stroke-width="2"/>
  <line x1="95" y1="250" x2="105" y2="250" stroke="#dc2626" stroke-width="2"/>
  <line x1="95" y1="180" x2="105" y2="180" stroke="#dc2626" stroke-width="2"/>
  <text x="75" y="220" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">Δy</text>
  
  <!-- Right triangle showing the slope -->
  <path d="M 300 250 L 450 250 L 450 180 Z" stroke="#f59e0b" stroke-width="2" fill="#fef3c7" fill-opacity="0.3"/>
  
  <!-- Coordinate labels -->
  <text x="285" y="520" font-family="Arial, sans-serif" font-size="12">x</text>
  <text x="435" y="520" font-family="Arial, sans-serif" font-size="12">x + Δx</text>
  <text x="75" y="255" font-family="Arial, sans-serif" font-size="12">f(x)</text>
  <text x="50" y="185" font-family="Arial, sans-serif" font-size="12">f(x + Δx)</text>
  
  <!-- Title -->
  <text x="400" y="40" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle">Derivative Definition</text>
  
  <!-- Legend -->
  <rect x="520" y="320" width="220" height="100" fill="white" stroke="#d1d5db" stroke-width="1" rx="5"/>
  <line x1="530" y1="340" x2="550" y2="340" stroke="#2563eb" stroke-width="3"/>
  <text x="560" y="345" font-family="Arial, sans-serif" font-size="12">Function f(x)</text>
  <line x1="530" y1="360" x2="550" y2="360" stroke="#059669" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="560" y="365" font-family="Arial, sans-serif" font-size="12">Secant line</text>
  <line x1="530" y1="380" x2="550" y2="380" stroke="#7c3aed" stroke-width="2"/>
  <text x="560" y="385" font-family="Arial, sans-serif" font-size="12">Δx (change in x)</text>
  <line x1="530" y1="400" x2="550" y2="400" stroke="#dc2626" stroke-width="2"/>
  <text x="560" y="405" font-family="Arial, sans-serif" font-size="12">Δy (change in y)</text>
</svg>

`,
      before:`As it has been said already in [Introduction](!/calculus/derivatives#intro), derivative of a function is very importand and may be central concept of calculus (and probably mathematic as a whole).
      Unsurprisingly, exist many definitions of derivative, each trying to focus on different aspects of this mathematical notion.
      Let us start with probably most universal definition reflecting the very essense of derivatives. 
      @academic[theorem:The derivative of a function at a specific point is defined as the limit of the ratio between the change in the function’s value and the change in its argument, as the argument change approximates zero.]@ 

`,
      after:`1. **“At a specific point”**  
We’re focusing on one exact input value of the function. Not a range. Not a neighborhood. Just one number—that’s where we want to know how the function behaves.

2. **“Change in the function’s value”**  
We look at how the output (the result of the function) changes when we slightly move the input. This is the vertical difference on the graph: how much $f(x)$ becomes $f(x + \\Delta x)$.

3. **“Change in its argument”**  
This is the input change—how much we shift $x$. It’s the horizontal step $\\Delta x$.

4. **“Ratio between the change in the function’s value and the change in its argument”**  
We divide the vertical change by the horizontal change:

$\\text{average rate of change} = \\frac{f(x + \\Delta x) - f(x)}{\\Delta x}$

That’s the average rate of change.

5. **“As the argument change approximates zero”**  
We shrink $\\Delta x$ down toward zero. That ratio becomes the instantaneous rate of change—the derivative.
`,
under:`some text`
  
  
    },
    notation:{
  
      title:`Understanding Derivative Notation`,
      content:`Before applying derivative rules, it's important to understand the notation used to represent derivatives.

- In **Leibniz notation**, a derivative is written as $\\frac{dy}{dx}$, $\\frac{df}{dx}$, or $\\frac{d}{dx}f(x)$, which highlights the rate of change of one variable with respect to another.

- **Prime notation** is often used for functions of a single variable: $f'(x)$ for the first derivative, $g''(x)$ for the second, and $h^{(n)}(x)$ for the $n$-th derivative. This is compact and convenient, especially for repeated differentiation.

- **Operator notation**: $Df(x)$, $D^n f(x)$ — used in some texts, particularly in linear operator or abstract contexts.

Each notation expresses the same concept—a derivative—but the choice often depends on context and convention. As you learn and apply derivative rules, you'll see all of these used to express how functions change.

Find more info about mathematical symbols in calculus along with Latex code on this [page](!/math-symbols/calculus).
`,
      before:``,
      after:``,
  
    },
    rules:{
      title:`Derivative Rules`,
      link:'/calculus/derivatives/rules',
      content:`Derivatives are fundamental tools in calculus, and understanding how to calculate them efficiently is essential for working with functions in both theoretical and applied contexts. For better learning experience we assembled all main rules of derivatives in one place. 
      This [page](!/calculus/derivatives/rules) presents the main rules for differentiation, organized into clear categories to simplify learning and reference.
[Basic Rules](!/calculus/derivatives/rules#basic) include essential principles like the constant rule, power rule, and the sum, product, and chain rules. These form the foundation for differentiating most algebraic expressions.
[Trigonometric Derivatives](!/calculus/derivatives/rules#trigonometric) focus on the standard derivatives of sine, cosine, tangent, and their reciprocal functions. These are key for analyzing periodic behavior and solving problems involving waves and oscillations.
[Exponential Derivatives](!/calculus/derivatives/rules#exponential) cover both general exponential functions and the special case of the natural exponential function. These rules are particularly useful in modeling growth, decay, and other natural processes.
[Logarithmic Derivatives](!/calculus/derivatives/rules#logarithm) address derivatives of logarithmic functions, including both common and natural logs. These are especially helpful when dealing with functions involving rates or scaling.
Together, these rules allow you to differentiate a wide variety of functions. Mastery of them is crucial for progressing in calculus, differential equations, and many areas of applied mathematics.
`,
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


export default function DerivativesPage({sectionsContent ,introContent}) {

  
  const derivativesSections=[
    {
        id:'definitions',
        title:sectionsContent.definitions.title,
        link:'',
        content:[
          sectionsContent.definitions.before,

          { 
            content:  
              sectionsContent.definitions.svg,
            layout: 'horizontal', 
            position: 'left',
            width: 2.5 
          },
        
          { 
            content:  sectionsContent.definitions.after,
            layout: 'horizontal', 
            position: 'right',
            width: 1.5 
          },
          
          // sectionsContent.definitions.svg,
          // sectionsContent.definitions.after
        ]
    },

    {
      id:'notation',
      title:sectionsContent.notation.title,
      link:'',
      content:sectionsContent.notation.content
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
   <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Derivatives</h1>
   <br/>
   <SectionTableOfContents sections={derivativesSections}/>
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
   <br/>
   <Sections sections={derivativesSections}/>
   <br/>
   <ScrollUpButton/>

   </>
  )
}
