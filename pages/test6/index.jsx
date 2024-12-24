import Sections from '@/app/components/page-components/section/Sections';
import React from 'react'
import ToolsSlider from '@/app/components/sliders/ToolsSlider';

export default function Test6Page() {



    const tools = [
        {
          title: "Unit Circle",
          description: "Interactive trigonometry tool",
          image: "/images/combinatorics.jpg",
          link: "/tools/unit-circle"
        },
        {
          title: "Unit Circle2",
          description: "2Interactive trigonometry tool",
          image: "/images/calculus.jpg",
          link: "/tools/unit-circle1"
        },
        {
          title: "Unit Circle3",
          description: "3Interactive trigonometry tool",
          image: "/images/calculators.jpg",
          link: "/tools/unit-circle2"
        },
        {
          title: "Unit Circle4",
          description: "4Interactive trigonometry tool",
          image: "/images/algebra.jpg",
          link: "/tools/unit-circle3"
        },
      
        {
          title: "Unit Circle4",
          description: "4Interactive trigonometry tool",
          image: "/table.jpg",
          link: "/tools/unit-circle4"
        },
        // ... more tools
      ];
       
       
      
      const testSections = [
        {
          id: 'main1',
          title: 'Main Section 1',
          content: 'This is main section 1 content',
          pageLink: '/main1',
          // content:[
          //   `<div>Hi</div>`,
          //   <MermaidDiagram chartDefinition={rootsByDegree}
          //   width="700px"
          //   height="800px"
          //   scale={1}
          //   />,
          //   ``
          // ]
          // subsections: [
          //   {
          //     id: 'sub1-1',
          //     title: 'Subsection 1.1',
          //     content: 'Detailed content for subsection 1.1',
          //     pageLink: '/sub1-1'
          //   },
          //   {
          //     id: 'sub1-2',
          //     title: 'Subsection 1.2',
          //     content: 'Detailed content for subsection 1.2',
          //     pageLink: '/sub1-2'
          //   }
          // ]
        },
        {
          id: 'main2',
          title: 'Main Section 2',
          content: 'Regular section without subsections',
        //   pageLink: '/main2',
          content:[
            `Hello`,
            
          <ToolsSlider tools={tools} key={'tool-slider'}/>
            // <TreeStructure data={algorithmsList} expandTopLevel={true}></TreeStructure>
           
      
          ]
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
        //   <VerticalScrollingFormulaWidget key={"formula-widget"} formulaData={combinatoricsFormulaList} />,
        //   `<h1>hello</h1>`,
       ]
          // pageLink: '/main2'
        },
      ];
      
  return (
    <>
    <div>Test6Page</div>

    <Sections sections={testSections}/>
    
    
    
    </>
  )
}
