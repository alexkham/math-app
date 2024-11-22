import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react';
import '../pages.css'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import probabilityFormulaList from '@/app/api/db/formulas/probability/probabilityFormulasList';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

import Sections from '@/app/components/page-components/section/Sections';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

export default function ProbabilityPage() {
  

  const probabilitySections = [
   
    {
      id: 'formulas',
      title: 'Probability Formulas',
      content:"Explore ",
      content: [
        'Explore Probability formulas with explanations and examples',
        " ",
        <VerticalScrollingFormulaWidget 
        key={"formula-widget2"}
         formulaData={probabilityFormulaList}
         moreFormulasLink='/probability/formulas'
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
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Probability</h1>
    <SectionTableOfContents sections={probabilitySections}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Sections  sections={probabilitySections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}
