import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react';
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import algebraFormulasList from '@/app/api/db/formulas/algebra/algebraFormulas';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import { SectionIcon } from 'lucide-react';
import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';

export default function AlgebraPage() {
  

  const algebraSections = [
   
    {
      id: 'formulas',
      title: 'Algebra Formulas',
      content:"Explore ",
      content: [
        'Explore Algebra formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
        key={"formula-widget"}
         formulaData={algebraFormulasList}
         moreFormulasLink='/algebra/formulas'
        //  title='See them all'
          />,
   
    ]
      
    },
  ];

  const introContent = {
    id: "intro",
    title: "Introduction to Algebra Section",
    content:`Algebra is a cornerstone of mathematics that explores relationships between quantities and provides tools to solve problems logically and systematically. It begins with basic operations like **addition, subtraction, multiplication, and division** but quickly extends to include **powers, roots, and logarithms**. Central to algebra is the use of **equations and inequalities** to model and solve problems, helping us determine unknown values based on given conditions.

The study of algebra introduces **polynomials**, expressions composed of variables and constants combined through arithmetic operations. Techniques like **factoring** and **expanding polynomials** allow us to simplify and solve complex equations. Algebra also explores **systems of equations**, where multiple relationships are analyzed simultaneously to find solutions that satisfy all constraints.

**Functions** are another key concept in algebra, providing a way to describe how quantities depend on each other. **Linear functions**, **quadratic functions**, and **exponential relationships** reveal patterns and behaviors that are essential for deeper mathematical understanding. Algebra also emphasizes the properties of numbers and operations, such as **commutativity** and **distributivity**, which underpin all calculations.

The skills developed in algebra, such as **logical reasoning**, **abstraction**, and **problem-solving**, are invaluable. They find applications in diverse fields, from **science and engineering** to **economics and data analysis**, forming a crucial foundation for advanced mathematical studies.`

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
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Algebra</h1>
    <SectionTableOfContents sections={algebraSections}/>
    <br/>
    <br/>
    <br/>
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#06357a"
/>
    <Sections  sections={algebraSections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}
