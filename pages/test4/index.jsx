import CircularButtonGroup from '@/app/components/button-group/CircularButtonGroup';
import GenericCircularButtonGroup from '@/app/components/button-group/GenericCircularButtonGroup';
import GenericProbabilityTree from '@/app/components/probability/GenericProbabilityTree';
import ProbabilityTree from '@/app/components/probability/ProbabilityTree'
import ProbabilityTree2 from '@/app/components/probability/ProbabilityTree2';
import PrimeSieveAnimation from '@/app/components/sequences/PrimeSieveAnimation';
import AnimatedPrimeTable from '@/app/components/sequences/SieveTableAnimation';
import SieveTableVisualization from '@/app/components/sequences/SieveVisualization';
import QuadraticSolver from '@/app/components/solvers/QuadraticSolver';
import CompleteMultiplicationTable from '@/app/components/tables/CompleteMultiplicationTable'
import UnitCircle from '@/app/components/trigo-calculator/UnitCircle'
import React from 'react';
import quadraticExplanations from '@/app/components/solvers/quadraticExplanations';
import FactorizationCalculator from '@/app/components/calculators/algebra/FactorizationCalculator';
import FactoringCalculator from '@/app/components/calculators/algebra/FactoringCalculator';
import generateQuadraticExplanations from '@/app/components/solvers/quadraticExplanations';
import FractionCircle from '@/app/components/fractions/FractionCircle';
import FractionRectangle from '@/app/components/fractions/FractionRectangle';
import SWOTAnalysis from '@/app/components/infographics/SWOTAnalysis';
import VectorSpace from '@/app/components/linear-algebra/VectorSpace';
import VectorSpace3D from '@/app/components/linear-algebra/3DVectorSpace';
import VectorVisualization from '@/app/components/vectors/VectorVisualization';
import VectorVisualizationSVG from '@/app/components/vectors/VectorVisualizationSvg';
import VectorVisualizer2D from '@/app/components/vectors/Vector2DVisualisation';
import vectorThemes from '@/app/components/vectors/vectorThemes';
import ExpandableTable from '@/app/components/generic-table/ExpandableTable';
import TriangleSVGComponent from '@/app/components/svg/shapes/TriangleSVG';
import DataWrapper from '@/app/components/generic-table/DataWrapper';
import math_symbols_Data from '../../app/components/keyboards/math_symbols_data.json'

export default function Test4Page() {


    const treeData = {
        probability: "Start",
        children: [
          {
            probability: "0.5",
            children: [
              { probability: "0.3", children: [] },
              { probability: "0.7", children: [] }
            ]
          },
          {
            probability: "0.5",
            children: [
              { probability: "0.6", children: [] },
              { probability: "0.4", children: [] }
            ]
          }
        ]
      };
      
   

    const threeLeveData = {
        levels: [
          {
            color: "#2c64ba",
            nodes: [
              { probability: "P(A)", event: "A" },
              { probability: "P(Ā)", event: "Ā" }
            ]
          },
          {
            color: "#ba2c64",
            nodes: [
              { probability: "P(B|A)", event: "A∩B" },
              { probability: "P(B̄|A)", event: "A∩B̄" },
              { probability: "P(B|Ā)", event: "Ā∩B" },
              { probability: "P(B̄|Ā)", event: "Ā∩B̄" }
            ]
          },
          {
            color: "#64ba2c",
            nodes: [
              { probability: "P(C|A∩B)", event: "A∩B∩C" },
              { probability: "P(C̄|A∩B)", event: "A∩B∩C̄" },
              { probability: "P(C|A∩B̄)", event: "A∩B̄∩C" },
              { probability: "P(C̄|A∩B̄)", event: "A∩B̄∩C̄" },
              { probability: "P(C|Ā∩B)", event: "Ā∩B∩C" },
              { probability: "P(C̄|Ā∩B)", event: "Ā∩B∩C̄" },
              { probability: "P(C|Ā∩B̄)", event: "Ā∩B̄∩C" },
              { probability: "P(C̄|Ā∩B̄)", event: "Ā∩B̄∩C̄" }
            ]
          }
        ]
      };


      const treeData2 = {
        name: "Root",
        probability: 1,
        children: [
          {
            name: "Event A",
            probability: 0.5,
            children: [
              { name: "Outcome A1", probability: 0.3 },
              { name: "Outcome A2", probability: 0.7 }
            ]
          },
          {
            name: "Event B",
            probability: 0.5,
            children: [
              { name: "Outcome B1", probability: 0.6 },
              { name: "Outcome B2", probability: 0.4 }
            ]
          }
        ]
      };
      
      const sections = [
        {
          id: '1',
          title: 'First Section',
          color: 'red',
          url: '/first'
        },
        {
          id: '2',
          title: 'Second Section',
          color: 'blue',
          url: '/second'
        },
        {
          id: '3',
          title: 'Third Section',
          color: 'yellow',
          url: '/third'
        },
        {
          id: '4',
          title: 'Fourth Section',
          color: 'green',
          url: '/fourth'
        },
       
      ];


      const threeSections = [
        { id: '1', title: 'First', color: 'red', url: '/first' },
        { id: '2', title: 'Second', color: 'blue', url: '/second' },
        { id: '3', title: 'Third', color: 'green', url: '/third' }
      ];
      
      
      const fiveSections = [
        { id: '1', title: 'First', color: 'red', url: '/first' },
        { id: '2', title: 'Second', color: 'blue', url: '/second' },
        { id: '3', title: 'Third', color: 'green', url: '/third' },
        { id: '4', title: 'Fourth', color: 'yellow', url: '/fourth' },
        { id: '5', title: 'Fifth', color: 'purple', url: '/fifth' }
      ]; 


      const SWOTdata = [
       
        {
            title: 'STRENGTHS',
            items: [
                'Lorem ipsum dolor sit amet',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                '',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Ut enim ad minim veniam'
            ],
            bgColor: 'yellow'
        },
        {
            title: 'WEAKNESS',
            items: [
                'Lorem ipsum dolor sit amet',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Ut enim ad minim veniam'
            ],
            bgColor: 'blue',
            color:'white'
        },
        {
            title: 'OPPORTUNITIES',
            items: [
                'Lorem ipsum dolor sit amet',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Ut enim ad minim veniam'
            ],
            bgColor: 'red'
        },
        {
            title: 'THREATS ',
            items: [
                `Lorem ipsum dolor sit amet baruch 
                
                \nhello `,
              
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Sed eiusmod tempor incidunt',
                'Ut enim ad minim veniam'
            ],
            bgColor: 'green',
            color:'#efebeb'
        }
    ];

    const darkTheme = {
      background: "#1a1a2e",
      gridColor: "#2d3748",
      axisColor: "#cbd5e0",
      vectorColor: "#4299e1",
      labelColor: "#e2e8f0",
      fontFamily: "'Inter', sans-serif"
    };

    const tableData = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Developer",
        content: {
          profile: "Full-stack developer with 5 years experience\nSkills: React, Node.js, Python",
          projects: "Current: E-commerce Platform\nCompleted: CRM System, Mobile App",
          performance: "Rating: 4.8\nCompleted 95% of tasks on time"
        }
      },
      {
        id: 2,
        name: "John Doe x²",
        email: "john@example.com ⋒",
        role: "Developer",
        content: {
          profile: "Full-stack developer with 5 years experience\nSkills: React, Node.js, Python",
          projects: "Current: E-commerce Platform\nCompleted: CRM System, Mobile App",
          performance: "Rating: 4.8\nCompleted 95% of tasks on time"
        }
      },
      {
        id: 3,
        name: "John Doe",
        email: "john@example.com",
        role: "Developer",
        content: {
          profile: "Full-stack developer with 5 years experience\nSkills: React, Node.js, Python",
          projects: "Current: E-commerce Platform\nCompleted: CRM System, Mobile App",
          performance: "Some performance issues"
        }
      },
      {
        id: 4,
        name: "Jane Smith",
        email: "jane@example.com",
        content: "Some simple content here like $x^2$"
      }
    ];
   


  return (
    <>
    <div>Test4Page</div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(0.9)'}}>
    <CompleteMultiplicationTable/>
    </div> */}
    <br/>
    <ProbabilityTree/>
    <br/>
    <br/>
    <br/>
    <br/>
   <GenericProbabilityTree data={threeLeveData}/>
    <br/>
    <br/>
    <br/>
    <ProbabilityTree2 data={treeData2}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <SieveTableVisualization/>
    <br/>
    <br/>
    <br/>
    <br/>
    <AnimatedPrimeTable/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <PrimeSieveAnimation/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.8)'}}>
    <CircularButtonGroup sections={sections} titleColor='white' />
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <GenericCircularButtonGroup sections={threeSections} titleColor='white' />
    <br/>
    <br/>
    <br/>
    <GenericCircularButtonGroup sections={fiveSections} titleColor='white' centerContent="Menu"/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.85)'}}>
    <QuadraticSolver generateQuadraticExplanations={generateQuadraticExplanations}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.9)'}}>
    <FactorizationCalculator/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <FactoringCalculator/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(1.5)', display:"flex",flexDirection:'row',
      alignItems:'center',justifyContent:'center'}}> */}
    <FractionCircle numerator={13} denominator={4} />
    {/* </div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <FractionRectangle numerator={10} denominator={40} />  
    <br/>
    <br/>
    <br/>
   <div style={{transform:'scale(0.6)'}}>
    <SWOTAnalysis sections={SWOTdata} title='Some other tilte' center='sopme other center'/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <VectorSpace/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.8)'}}>
    <VectorSpace3D/>
    </div>
    <br/>
    <br/>
    <VectorVisualization/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(2)'}}> */}
    <VectorVisualizationSVG/>
    {/* </div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(1.1)', marginLeft:'150px'}}>
    <VectorVisualizer2D  vectorCoordinates={[1, 3]} axisRange={5}
     gridDivisions={10}
     theme={vectorThemes.arctic}/>
    </div>
    <br/>
    <br/>
    <br/>
    <VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.classicLight}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.darkModern}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.purplePastel}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.oceanTheme}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.mintTheme}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.highContrast}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.matrix}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.sunset}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.space}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.arctic}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.neon}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.desert}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.cyberpunk}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.retroWave}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.forest}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.monochrome}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.volcano}/>
<VectorVisualizer2D vectorCoordinates={[1, 3]} axisRange={5} gridDivisions={10} theme={vectorThemes.frost}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{width:'50%'}}>
    <ExpandableTable data={tableData} 
    copyableFields={['name','email']}
    
    nestedCopyableFields={['profile','projects','performance']}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <TriangleSVGComponent/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='title' style={{width:'60%'}}>
    <DataWrapper data={math_symbols_Data}/>
    </div>
    <br/>
    {/* <UnitCircle/> */}
    
    
    
    </>
  )
}
