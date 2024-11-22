import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react';
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import logicFormulasList from '@/app/api/db/formulas/logic/logicFormulasList';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

export default function LogicPage() {
  

  const logicSections = [
   
    {
      id: 'formulas',
      title: 'Mathematical Logic Formulas',
      content:"Explore ",
      content: [
        'Explore Mathematical Logic formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
        key={"formula-widget2"}
         formulaData={logicFormulasList}
         moreFormulasLink='/logic/formulas'
        //  title='See them all'
          />,
   
    ]
      
    },
  ];
  

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
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Mathematical Logic</h1>
    <SectionTableOfContents sections={logicSections}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Sections  sections={logicSections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}
