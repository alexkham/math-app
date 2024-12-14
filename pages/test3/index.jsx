import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget'
import combinatoricsFormulaList from '@/app/api/db/formulas/combinatorics/combinatoricsFormulas'
import AngleConverter from '@/app/components/converters/AngleConverter'
import TrigoCalculator from '@/app/components/trigo-calculator/TrigoCalculator'
import RootCalculator from '@/app/components/calculators/arithmetics/RootCalculator'



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


  const explanations = {
    square: {
      text: "A square root of a number is a value that, when multiplied by itself, gives the number. For example, the square root of 25 is 5, because 5 × 5 = 25.",
      links: [
        {
          title: "Learn More About Square Roots",
          link: "https://example.com/square-roots"
        }
      ]
    },
    cube: {
      text: "A cube root of a number is a value that, when multiplied by itself twice, gives the number. For example, the cube root of 27 is 3, because 3 × 3 × 3 = 27.",
      // links: [
      //   {
      //     title: "Cube Roots Explained",
      //     link: "https://example.com/cube-roots"
      //   }
      // ]
    },
    nth: {
      text: "An nth root of a number is a value that, when multiplied by itself n-1 times, gives the number. For example, the 4th root of 16 is 2, because 2 × 2 × 2 × 2 = 16.",
      links: [
        {
          title: "Understanding Nth Roots",
          link: "https://example.com/nth-roots"
        }
      ]
    }
  };
  

  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>

    <div>Test3Page</div>
    <br></br>
    <br></br>
    {/* <SectionTableOfContents sections={testSections}/> */}
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
    {/* <div style={{transform:'scale(0.9)'}}>
    <TrigoCalculator/>
    </div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.8)'}}>
    <RootCalculator explanations={explanations}/>
    </div>

    <br/>
    <br/>
    <ScrollUpButton />
    </>
  )
}
