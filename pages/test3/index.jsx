import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import combinatoricsFormulaList from '@/app/api/db/formulas/combinatorics/combinatoricsFormulas'
import AngleConverter from '@/app/components/converters/AngleConverter'
import TrigoCalculator from '@/app/components/trigo-calculator/TrigoCalculator'



export default function Test3Page() {

   
const testSections = [
    {
      id: 'main1',
      title: 'Main Section 1',
      content: 'This is main section 1 content',
      pageLink: '/main1',
      subsections: [
        {
          id: 'sub1-1',
          title: 'Subsection 1.1',
          content: 'Detailed content for subsection 1.1',
          pageLink: '/sub1-1'
        },
        {
          id: 'sub1-2',
          title: 'Subsection 1.2',
          content: 'Detailed content for subsection 1.2',
          pageLink: '/sub1-2'
        }
      ]
    },
    {
      id: 'main2',
      title: 'Main Section 2',
      content: 'Regular section without subsections',
      pageLink: '/main2'
    },
    {
      id: 'main3',
      title: 'Main Section 3',
      content: 'This is main section 3 content',
      pageLink: '/main3',
      subsections: [
        {
          id: 'sub3-1',
          title: 'Subsection 3.1',
          content: 'Content for subsection 3.1',
          pageLink: '/sub3-1'
        }
      ]
    },
    {
      id: 'main4',
      title: 'Main Section 4',
      content: [
        'Some Text',
        // `<div>`,
      <VerticalScrollingFormulaWidget key={"formula-widget"} formulaData={combinatoricsFormulaList} />,
    //   `<h1>hello</h1>`,
   
    ]
      // pageLink: '/main2'
    },
  ];
  

  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>

    <div>Test3Page</div>
    <br></br>
    <br></br>
    <SectionTableOfContents sections={testSections}/>
    <br/>
    <br/>
    <br/>
    {/* <AngleConverter/> */}
    <br/>
    <br/>
    <br/>
    <Sections sections={testSections}/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.9)'}}>
    <TrigoCalculator/>
    </div>
    <br/>
    <br/>


    <br/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}
