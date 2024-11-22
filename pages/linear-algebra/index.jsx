import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react';
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import linearAlgebraFormulasList from '@/app/api/db/formulas/linear-algebra/linearAlgebraFormulas';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import { SectionIcon } from 'lucide-react';
import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import IntroSection from '@/app/components/page-components/section/IntroContentSection';

export default function LinearAlgebraPage() {
  

  const linearAlgebraSections = [
   
    {
      id: 'formulas',
      title: 'Linear Algebra Formulas',
      content:"Explore ",
      content: [
        'Explore Linear Algebra formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
        key={"formula-widget"}
         formulaData={linearAlgebraFormulasList}
         moreFormulasLink='/linear-algebra/formulas'
        //  title='See them all'
          />,
   
    ]
      
    },
  ];


  const introContent = {
    id: "intro",
    title: "Introduction to Linear Algebra",
    content:`Linear algebra is a field of mathematics that focuses on studying vectors, matrices, and the relationships between them, forming the mathematical framework for analyzing structures and transformations in multidimensional spaces. It introduces powerful tools to understand and solve problems where quantities interact linearly, making it fundamental to numerous disciplines.

This field begins with vectors—quantities that have both magnitude and direction—and their operations, such as addition and scaling. It extends to matrices, which are grid-like arrangements of numbers used to represent systems of equations or transformations. Learning how to manipulate matrices and understand their properties is a key part of linear algebra.

Students also explore vector spaces, the environments in which vectors live, and subspaces, which reveal structure and constraints within these spaces. Concepts like linear independence, span, and basis give insight into how vectors relate and interact. The study of linear transformations, which describe how vectors change under operations like rotations or scaling, helps build a deeper understanding of the subject.

Eigenvalues and eigenvectors, pivotal concepts in linear algebra, allow students to uncover hidden properties of transformations. Techniques like solving systems of equations, matrix decomposition, and understanding projections or orthogonality are practical outcomes of this study.

Ultimately, linear algebra provides a foundation for solving abstract and applied problems, developing skills to think logically, recognize patterns, and simplify complex systems. It equips students with a versatile toolkit for further studies in mathematics, sciences, engineering, and beyond.`

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
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Linear Algebra</h1>
    <SectionTableOfContents sections={linearAlgebraSections}/>
    
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#34383c"
/>
  
    <Sections  sections={linearAlgebraSections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}
