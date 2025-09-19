import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import PercentageCalculator from '@/app/components/calculators/arithmetics/PercentageCalculator'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../pages.css'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'

export default function PercentageCalculatorPage() {
     
    const keyWords=['percentage calculator','percentage']


    
const navigationGroup=[
  {title:'Other Calculators',
    items:[
      {title:'Exponent Calculator',link:'/calculators/exponent-calculator'},
      {title:'Root Calculator',link:'/calculators/root-calculator'},
      {title:'Modulo Calculator',link:'/calculators/modulo-calculator'},
      {title:'Logarithm Calculator',link:'/calculators/log-calculator'},
      // {title:'Percentage Calculator',link:'/calculators/percentage-calculator'},
      {title:'Factorial Calculator',link:'/calculators/factorial-calculator'},
      {title:'Fractions Calculator',link:'/calculators/fraction-calculator'},
      {title:'Complex Numbers Calculator',link:'/calculators/complex-numbers'},
      {title:'Trigonometry Calculator',link:'/calculators/trigonometry-calculator'},
      {title:'Statistics Calculator',link:'/calculators/statistics-calculator'},
    ]
  }
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
            topOffset='55px' 
            sidebarWidth='45px'
            panelWidth='300px'
            iconColor='white'
            panelBackgroundColor='#f2f2f2'
          /> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-20px' ,marginBottom:'20px'}}>Percentage Calculator</h1>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '10% 90%',
      gap: '20px',
      width: '100%'
   }}>
      {/* Left column - Sidebar */}
      <div>
        <br/>
       
         <VerticalButtonGroup 
            items={navigationGroup}
            width="250px"       
            theme='lightBlue'
            isSticky={true}
            verticalOffset='200px'
         />
      </div>

      {/* Right column - Table */}
      <div>
         <div style={{width:'100%',margin:'auto'}}>
          <div style={{transform:'scale(0.95)'}}>
            <PercentageCalculator/>
       
      </div> 
          
       
            <br/>
            <br/>
            <br/>
           
            
         </div>
      </div>
   </div>
   
   {/* <div style={{transform:'scale(0.9)'}}>
    <PercentageCalculator/>
    </div> */}
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    
    </>
  )
}
