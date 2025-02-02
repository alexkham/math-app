import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react';
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import trigonometryFormulaList from '@/app/api/db/formulas/trigonometry/trigonometryFormulas';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import { SectionIcon } from 'lucide-react';
import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';

export default function TrigonometryPage() {
  

  const trigonometrySections = [
   
    {
      id: 'formulas',
      title: 'Trigonometry Formulas',
      content:"Explore ",
      content: [
        'Explore Trigonometry formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
        key={"formula-widget"}
         formulaData={trigonometryFormulaList}
         moreFormulasLink='/trigonometry/formulas'
        //  title='See them all'
          />,
   
    ]
      
    },
  ];
  

  const introContent = {
    id: "intro",
    title: "Introduction to Trigonometry",
    content:`While mainly focusing on relationships between the angles and sides of triangles, trigonometry extends beyond simple geometric shapes, offering tools to describe patterns involving periodicity and circular motion. This makes trigonometry essential in fields ranging from physics and engineering to computer graphics and navigation.

Here’s what students can expect to learn:

1. **Core Concepts**:
   • **Angles and Their Measures**: Degrees, radians, and how they relate to circles.
   • **Trigonometric Functions**: Sine, cosine, tangent, and their reciprocals (cosecant, secant, cotangent).
   • **Unit Circle**: A key tool for understanding how trigonometric functions behave across all angles.
   • **Inverse Trigonometric Functions**: Solving equations to find angles.

2. **Applications**:
   • **Solving Triangles**: Using the laws of sines and cosines to find unknown sides or angles.
   • **Wave Behavior**: Modeling oscillations in physics, sound waves, and light waves.
   • **Circular and Periodic Motion**: Understanding orbits, pendulums, and cycles.

3. **Advanced Topics**:
   • **Identities**: Simplifying expressions and solving equations using formulas like the Pythagorean identity, angle addition formulas, and double-angle formulas.
   • **Graphs of Trigonometric Functions**: Visualizing periodic patterns and their transformations (shifts, stretches, reflections).
   • **Complex Numbers and Euler’s Formula**: Exploring the deep connection between trigonometry and algebra.

4. **Skills Developed**:
   • **Problem-solving**: Tackling real-world problems involving geometry, motion, and oscillation.
   • **Visualization**: Interpreting and sketching graphs and diagrams to represent abstract relationships.
   • **Logical reasoning**: Manipulating trigonometric expressions and proofs.

Trigonometry teaches students how to connect abstract mathematical concepts with practical scenarios, developing versatile skills useful in scientific modeling, technical fields, and everyday problem-solving.
`

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
      // topOffset='65px' 
      sidebarWidth='45px'
      panelWidth='300px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Trigonometry</h1>
    <SectionTableOfContents sections={trigonometrySections}/>
    <br/>
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#34383c"
/>
    <Sections  sections={trigonometrySections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}
