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
import IntroSection from '@/app/components/page-components/section/IntroContentSection';

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


  const introContent = {
    id: "intro",
    title: "Introduction to Probability Section",
    content:`**Probability** is a field of mathematics that deals with  **uncertainty** and provides tools to measure and analyze how likely events are to occur. It begins with basic concepts such as outcomes, events, and sample spaces, forming the foundation for calculating likelihoods.
Central to probability is the concept of **probability measures**, which assign values between 0 and 1 to **events**, indicating their **likelihood**. A value of 0 means an event is impossible, while 1 signifies certainty. Key principles include **independence** (events that do not influence each other) and **conditional probability**, which considers the likelihood of an event given that another has occurred.
Probability also introduces **random variables**, which assign numerical values to outcomes. These variables are categorized as either **discrete** (taking specific values, like rolling a die) or **continuous**(taking any value within a range, like measuring temperature). Important measures such as **expectancy(average value)** and **variance(spread or variability)** are used to summarize the behavior of **random variables**.
Advanced topics include **distributions**, such as the **binomial**, **normal**, and **Poisson distributions**, which model specific types of random phenomena. These tools are essential for understanding patterns in **random processes** and making informed predictions.
Probability is widely applied in science, engineering, finance, and everyday decision-making. It forms the basis for statistics, enabling data-driven insights and predictions, and supports fields like machine learning, risk analysis, and quantum mechanics. By studying probability, students develop skills to reason about uncertainty and draw conclusions from incomplete information.`

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
   
    <h1 className='title' style={{marginTop:'-20px',marginBottom:'20px'}}>Probability</h1>
    <SectionTableOfContents sections={probabilitySections}/>
    <IntroSection 
  id={introContent.id}
  title={introContent.title}
  content={introContent.content}
  backgroundColor="#f2f2f2"
  textColor="#06357a"
/>
    <Sections  sections={probabilitySections}/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    


    
    </>
  )
}
