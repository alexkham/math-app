import FormulaWidget from '@/app/components/examples/FormulaWidget';
import React from 'react'
import '../pages.css'
import FormulaAccordion from '@/app/components/examples/FormulaAccordion';
import FormulaAccordionWrapper from '@/app/components/examples/FormulaAccordionWrapper';
import StatisticsCalculator from '@/app/components/calculators/statistics/StatisticsCalculator';
import explanations from '@/app/components/calculators/statistics/explanations';
import MyNavbar2 from '@/app/components/nav-bar2/MyNavbar2';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import { Search, LayoutDashboard, FileText, Settings, X } from 'lucide-react';
import { Search, SearchIcon, VariableIcon } from 'lucide-react';
import UnitCircleTrigVisualizer from '@/app/components/trigo-calculator/UnitCircleVisualizer';
import MatrixMultiplicationVisualizer from '@/app/components/matrix-multiplication/MatrixMultiplicationVisualizer';
import combinatoricsFormulaList from '@/app/api/db/formulas/combinatorics/combinatoricsFormulas';
import MovingBox from '@/app/components/page-components/section/MovingBox';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';
import Sections from '@/app/components/page-components/section/Sections';
import diagrams from '@/app/api/db/svg/combinatorics.js/svg';
import SVGSlider from '@/app/components/svg/SVGSlider';
import VariationsVisualizer from '@/app/components/combinatorics/VariationsVisualizer';
import VariationsVisualizer2x3 from '@/app/components/combinatorics/VariationsVisualizer2x3';
import VariationsVisualizer2x4 from '@/app/components/combinatorics/VariationsVisualizer2x4';
import VariationsVisualizer3x2 from '@/app/components/combinatorics/VariationsVisualizer3x2';
import VariationsVisualizer3x3 from '@/app/components/combinatorics/VariationsVisualizer3x3';
import VerticalScrollingFormulaWidget from '@/app/components/examples/VerticalScrollingFormulaWidget';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ChevronTimeline from '@/app/components/timeline/ChevronTimeline';
import FlexibleLayout from '@/app/components/layouts/FlexibleLayout';
import JointProbabilityTable from '@/app/components/probability/JointProbabilityTable';
import ControlPanel from '@/app/components/calculators/ControlPanel';
import ControlPanel2 from '@/app/components/calculators/ControlPanel2';
import CalculationsDisplay from '@/app/components/calculators/CalculationsDisplay';
import ProbabilityCalculator from '@/app/components/calculators/probability/ProbabilityCalculator';
import { mainSidebarMenu } from '@/app/components/nav-bar/mainSidebarMenu';
import { Book, Calculator, PieChart, Sigma, Percent } from 'lucide-react';
import CardsGroup from '@/app/components/cards/CardsGroup';
import UnitCircle from '@/app/components/trigo-calculator/UnitCircle';
import MultiplicationTable from '@/app/components/tables/MultiplicationTable';
import CompleteMultiplicationTable from '@/app/components/tables/CompleteMultiplicationTable';


export default function TestPage2() {
    const dummyData = {
        name: "Einstein's Energy-Mass Equivalence",
        formula: "E = mc^2",
        fields: {
          "E": "Total energy",
          "m": "Mass",
          "c": "Speed of light in vacuum (constant)"
        },
        before: "This famous equation expresses the equivalence of mass and energy.",
        after: "This principle is fundamental to modern physics and nuclear technology."
      };

      const gravitationalForce = {
        name: "Newton's Law of Universal Gravitation",
        formula: "F = G * (m1 * m2) / r^2",
        fields: {
          "F": "Gravitational force between the two masses",
          "G": "Gravitational constant",
          "m1": "Mass of the first object",
          "m2": "Mass of the second object",
          "r": "Distance between the centers of the masses"
        },
        before: "This law describes the gravitational attraction between two bodies with mass.",
        after: "It's used to calculate orbital motions and is fundamental in astrophysics."
      };


      const quadraticFormula = {
        name: "Quadratic Formula",
        formula: "x = (-b ± √(b^2 - 4ac)) / (2a)",
        fields: {
          "x": "Solutions to the quadratic equation",
          "a": "Coefficient of x^2",
          "b": "Coefficient of x",
          "c": "Constant term"
        },
        before: "The quadratic formula is used to solve quadratic equations of the form ax^2 + bx + c = 0.",
        after: "This formula gives the roots of a parabola and is widely used in algebra and higher mathematics."
      };
      
      const pythagoreanTheorem = {
        name: "Pythagorean Theorem",
        formula: "a^2 + b^2 = c^2",
        fields: {
          "a": "Length of one side of the right triangle",
          "b": "Length of the other side of the right triangle",
          "c": "Length of the hypotenuse (longest side)"
        },
        before: "The Pythagorean theorem relates the lengths of the sides in a right triangle.",
        after: "This fundamental theorem is the basis for many applications in geometry, trigonometry, and physics."
      };


      const formulaList = [
        {
          name: "Einstein's Energy-Mass Equivalence",
          formula: "E = mc^2",
          fields: {
            "E": "Total energy",
            "m": "Mass",
            "c": "Speed of light in vacuum (constant)"
          },
          category: "Physics",
          before: "This famous equation expresses the equivalence of mass and energy.",
          after: "This principle is fundamental to modern physics and nuclear technology."
        },
        {
          name: "Newton's Second Law of Motion",
          formula: "F = ma",
          fields: {
            "F": "Force",
            "m": "Mass",
            "a": "Acceleration"
          },
          category: "Physics",
          before: "This law describes the relationship between an object's mass and the forces acting upon it.",
          after: "It's one of the fundamental principles in classical mechanics."
        },
        {
          name: "Pythagorean Theorem",
          formula: "a^2 + b^2 = c^2",
          fields: {
            "a": "Length of one side of the right triangle",
            "b": "Length of the other side of the right triangle",
            "c": "Length of the hypotenuse (longest side)"
          },
          category: "Mathematics",
          before: "This theorem relates the lengths of the sides in a right triangle.",
          after: "It's widely used in geometry and has applications in various fields."
        },
        {
          name: "Quadratic Formula",
          formula: "x = (-b ± √(b^2 - 4ac)) / (2a)",
          fields: {
            "x": "Solutions to the quadratic equation",
            "a": "Coefficient of x^2",
            "b": "Coefficient of x",
            "c": "Constant term"
          },
          category: "Mathematics",
          before: "This formula is used to solve quadratic equations of the form ax^2 + bx + c = 0.",
          after: "It's a fundamental tool in algebra with applications in many areas of mathematics and science."
        },
        {
          name: "Ohm's Law",
          formula: "V = IR",
          fields: {
            "V": "Voltage (in volts)",
            "I": "Current (in amperes)",
            "R": "Resistance (in ohms)"
          },
          category: "Electronics",
          before: "Ohm's Law describes the relationship between voltage, current, and resistance in an electrical circuit.",
          after: "It's a cornerstone principle in electrical engineering and circuit analysis."
        }
      ];

const CustomSvgIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
  );

  const CustomSearch=()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>

  )
  



      const sidebarItems = [
  { id: 1, icon: CustomSearch, tooltip: 'Search', content: 'SearchComponent' },
  // { id: 2, icon: LayoutDashboard, tooltip: 'Dashboard', content:' DashboardComponent' },
  // { id: 3, icon: FileText, tooltip: 'Files', content: 'FilesComponent' },
  // { id: 4, icon: Settings, tooltip: 'Settings', content: 'SettingsComponent' },
  { id: 6, icon: CustomSvgIcon, tooltip: 'Settings', content:' SettingsComponent' },
  // { id: 5, icon: Settings, tooltip: 'Settings2', content:  `Settings panel goes here.\n\nEmpty lines are preserved.

  //      Indentation is also kept.` },
];


const matrix1 = [
  [1, 2],
  [3, 4]
];

const matrix2 = [
  [5, 6],
  [7, 8]
];

const sections = [
  { id: 'introduction',background:'none', title: 'Introduction', content: 'This is the introduction to our amazing content.' },
  { id: 'chapter1',background:'none', title: 'Chapter 1 this is very long title', content: 'Chapter 1 discusses the fundamentals of our topic.' },
  { id: 'chapter2', title: 'Chapter 2', content: 'In Chapter 2, we delve deeper into advanced concepts.' },
  { id: 'chapter3', title: 'Chapter 3', content: 'Chapter 3 explores practical applications of our subject matter.' },
  { id: 'chapter4', title: 'Chapter 4 this one is even longer ', content: 'In Chapter 4, we examine case studies and real-world examples.' },
  { id: 'conclusion', title: 'Conclusion',pageLink:"/combinatorics", content: `We wrap up with some final thoughts and future directions.
    \n
    
    svhvhvhdvhhvhb` },
   { id: 'section1',
    title: 'Section 1',
    background: '#f0f0f0',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>},
          {
            id: 'section2',
            title: 'Section 2',
            background: '#e0e0e0',
            icon: <Search/> // Imported SVG component
          },
          {
            id: 'section1',
            title: 'Section 1',
            background: '#f0f0f0',
            icon: '/probability.jpg' // URL string
          },
];


// const sections = [
//   { id: 'section1', title: 'Section 1' },
//   { id: 'section2', title: 'Section 2' },
//   { id: 'section3', title: 'Section 3' },
//   { id: 'section4', title: 'Section 4' },
//   { id: 'section5', title: 'Section 5' },
//   { id: 'section6', title: 'Section 6' },
//   // Add more sections as needed
// ];

console.log('Combinatorics Formulas '+combinatoricsFormulaList);




const menuStructure = [
  {
    id: 'home',
    type: 'link',
    label: 'Home',
    href: '/'
  },
  {
    id: 'placeholder',
    type: 'link',
    label: '',
    href: ''
  }
  ,
  {
    id: 'sections',
    type: 'megamenu',
    label: 'Featured Topics',
    href: '',
    columns: [
      {
        items: [
          { label: 'Combinatorics', href: '/combinatorics' },
          { label: 'Set Theory', href: '/set-theory' },
          { label: 'Sequences', href: '/sequences' },
          { label: 'Linear Algebra', href: '/linear-algebra' },
          { label: 'Probability', href: '/probability' },
          { label: 'Logic', href: '/logic' }
        ]
      }
    ]
  },
  {
    id: 'placeholder',
    type: 'link',
    label: '',
    href: ''
  },
 
  {
    id: 'resources',
    type: 'megamenu',
    label: 'Resources',
    href: '',
    columns: [
      {
        title: 'Visual Tools',
        href: '',
        items: [
          { label: 'Base Converter', href: '/visual-tools/base-converter' },
          { label: 'Determinant Visual Calculator', href: '/visual-tools/determinant-calculator' },
          { label: 'Gauss Elimination Calculator', href: '/visual-tools/gauss-eliminator' },
          { label: 'Matrix Multiplication Visualizer', href: '/visual-tools/matrix-multiplication' },
          { label: 'Matrix Transposition', href: '/visual-tools/matrix-transposition' }
        ]
      },
      {
        title: 'Calculators',
        href: '',
        items: [
          { label: 'Statistics Calculator', href: '/calculators/statistics-calculator' },
          
        ]
      },
     
      {
        title: 'Tables',
        href: '/tables',
        items: [
          { label: 'Probability', href: '/tables/probability' },
          { label: 'Arithmetics', href: '/tables/arithmetics' }
        ]
      },
      {
        title: 'Other Tools',
        href: '',
        items: [
          { label: 'Mathematical Keyboard', href: '/keyboard' },
          
        ]
      }
    ]
  },
 
  
  {
    id: 'placeholder',
    type: 'link',
    label: '',
    href: ''
  },
];


const calculationSections = [
  {
    id: 'selectAll',
    title: 'Select All',
    explanation: 'Select any combination of operations from all available categories',
    buttons: []
  },
  {
    id: 'unions',
    title: 'Unions',
    explanation: 'Calculate union probabilities between events A and B',
    buttons: [
      { id: 'AuB', label: 'P(A ∪ B)' },
      { id: 'AuNotB', label: 'P(A ∪ B̄)' },
      { id: 'NotAuB', label: 'P(Ā ∪ B)' },
      { id: 'NotAuNotB', label: 'P(Ā ∪ B̄)' }
    ]
  },
  {
    id: 'conditional',
    title: 'Conditional',
    explanation: 'Calculate conditional probabilities between events A and B',
    buttons: [
      { id: 'AgivenB', label: 'P(A|B)' },
      { id: 'AgivenNotB', label: 'P(A|B̄)' },
      { id: 'BgivenA', label: 'P(B|A)' },
      { id: 'BgivenNotA', label: 'P(B|Ā)' }
    ]
  },
  {
    id: 'independence',
    title: 'Independence',
    explanation: 'Test for independence between events A and B',
    buttons: [
      { id: 'indepTest', label: 'Independence Test' },
      { id: 'correlation', label: 'Correlation Analysis' }
    ]
  },
  {
    id: 'odds',
    title: 'Odds',
    explanation: 'Calculate odds and ratios for events A and B',
    buttons: [
      { id: 'oddsA', label: 'Odds of A' },
      { id: 'oddsB', label: 'Odds of B' },
      { id: 'oddsRatio', label: 'Odds Ratio' }
    ]
  }
];


const mockProbabilities = {
  aAndB: 0.25,
  aAndNotB: 0.25,
  notAAndB: 0.15,
  notAAndNotB: 0.35
};

const mockSelectedOperations = [
  'AuB',
  'AgivenB',
  'oddsA'
];


const cardItems = [
  {
    category: 'Algebra',
    icon: Book,
    // image: '/path/to/image.jpg', // Optional
    subcategories: [
      { name: 'Linear Equations', href: '/tables/algebra/linear-equations' },
      { name: 'Quadratic Equations', href: '/tables/algebra/quadratic-equations' },
    ]
  },
  {
    category: 'Probability',
    icon: Percent,
    // No subcategories, will show simple link
  },
  {
    category: 'Probability',
    icon: Percent,
    // No subcategories, will show simple link
  },
  {
    category: 'Probability',
    icon: Percent,
    // No subcategories, will show simple link
  },
  {
    category: 'Arithmetics',
    icon: Calculator,
    // image: '/combinatorics.jpg', // Will show image instead of icon
    subcategories: [
      { name: 'Addition', href: '/tables/arithmetics/addition' },
      { name: 'Multiplication', href: '/tables/arithmetics/multiplication' },
    ]
  }
];


  return (
    <>
    {/* <MyNavbar2/> */}
    <GenericNavbar />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   
    <br/>
   <OperaSidebar 
   side='right'
   topOffset='60px' 
    sidebarWidth='45px'
     panelWidth='200px'
     sidebarItems={mainSidebarMenu}
     iconColor='white'
     panelBackgroundColor='#f2f2f2'/> 
    <h1>Test Page 2 </h1>
    {/* <Search/> */}
    <br/>
    {/* <MovingBox/> */}
    <br/>
    <br/>
     <SectionTableOfContents sections={sections} title='In This Section' />
    <br/>
    {/* <div className='divy' style={{marginLeft:'10px',marginRight:'40px'}}>
 <SVGSlider
  diagrams={diagrams}
  title="My SVG Slider"
  // explanation="This slider showcases various SVG diagrams."
  link="https://example.com/learn-more"/>
 <div style={{width:'50%',height:'100%',backgroundColor:'lightgray'}}>
  <div style={{display:'flex',flexDirection:'row'}}>
 <VerticalScrollingFormulaWidget
  formulaData={combinatoricsFormulaList}
    moreFormulasLink={'/combinatorics'}
    title='Combinatorics Formulas'
 />
    
 <div  
  style={{backgroundColor:' #3faddf',width:'50%',color:'white',
  textAlign:'center',color:'white',padding:'50px',margin:'1px',borderRadius:'3px'}}>Some Div</div>
 </div>
 <div  
  style={{backgroundColor:' #5e35b1',width:'100%',color:'white',
  height:'140px',borderRadius:'5px',margin:'2px'}}>Some Div</div>
 </div>
 </div> */}
    <br/>
    {/* <div style={{backgroundColor:'red',width:'100%',height:'500px'}}>Slider</div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <CardsGroup items={cardItems}/> */}

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   <Sections sections={sections}/> 
    <br/>
    {/* <FormulaWidget data={dummyData}/> */}
    <br/>
    {/* <SearchIcon/> */}
    <br/>
    <br/>
    {/* <FormulaAccordion data={gravitationalForce}/> */}
    <br/>
    <br/>
    <br/>
    {/* <FormulaWidget data={pythagoreanTheorem}/> */}
    <br/>
    <br/>
    {/* <FormulaAccordion data={quadraticFormula}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p>------------------------------------------------------------------</p>
    <br/>
    {/* <FormulaAccordionWrapper data={formulaList} groupByField={'category'}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <StatisticsCalculator explanations={explanations}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 620" className="w-full h-auto">
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#0d3d56", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#1a5c7a", stopOpacity:1}} />
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#bg-gradient)"/>
      
      <text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        c₁v₁ + c₂v₂ = c₁[v₁₁ v₁₂] + c₂[v₂₁ v₂₂] = [c₁v₁₁+c₂v₂₁ c₁v₁₂+c₂v₂₂]
      </text>
      
      <path d="M 100 50 L 100 170 M 300 50 L 300 170" stroke="white" strokeWidth="2" fill="none"/>
      
      <text x="80" y="110" fontFamily="Arial, sans-serif" fontSize="14" fill="white" textAnchor="end">A =</text>
      
      <text fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        <tspan x="120" y="70">a₁₁</tspan>
        <tspan x="165" y="70">a₁₂</tspan>
        <tspan x="210" y="70">a₁₃</tspan>
        <tspan x="255" y="70">⋯</tspan>
        <tspan x="280" y="70">a₁ₙ</tspan>
        
        <tspan x="120" y="95">a₂₁</tspan>
        <tspan x="165" y="95">a₂₂</tspan>
        <tspan x="210" y="95">a₂₃</tspan>
        <tspan x="255" y="95">⋯</tspan>
        <tspan x="280" y="95">a₂ₙ</tspan>
        
        <tspan x="120" y="120">a₃₁</tspan>
        <tspan x="165" y="120">a₃₂</tspan>
        <tspan x="210" y="120">a₃₃</tspan>
        <tspan x="255" y="120">⋯</tspan>
        <tspan x="280" y="120">a₃ₙ</tspan>
        
        <tspan x="200" y="145">⋮</tspan>
        
        <tspan x="120" y="170">aₘ₁</tspan>
        <tspan x="165" y="170">aₘ₂</tspan>
        <tspan x="210" y="170">aₘ₃</tspan>
        <tspan x="255" y="170">⋯</tspan>
        <tspan x="280" y="170">aₘₙ</tspan>
      </text>
      
      <text x="210" y="190" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        Ax = [a₁₁x₁+a₁₂x₂; a₂₁x₁+a₂₂x₂]
      </text>
      
      <text x="210" y="210" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        Av = λv
      </text>
      
      {/* <text x="210" y="230" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v = [</text>
      <text x="230" y="245" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v₁</text>
      <text x="230" y="260" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v₂</text>
      <text x="230" y="275" fontFamily="Arial, sans-serif" fontSize="11" fill="white">v₃</text>
      <text x="210" y="290" fontFamily="Arial, sans-serif" fontSize="11" fill="white">]</text> */}

<text x="170" y="260" class="math vector" font-size="18" fill="white" text-anchor="end">v</text>
  <text x="180" y="260" font-size="18" fill="white">=</text>
  

  <path d="M 230 230 L 225 230 Q 222 230 222 233 V 307 Q 222 310 225 310 L 230 310" fill="none" stroke="white" stroke-width="1"/>
  
  <text x="240" y="240" class="math" font-size="16" fill="white">v₁</text>
  <text x="240" y="270" class="math" font-size="16" fill="white">v₂</text>
  <text x="240" y="300" class="math" font-size="16" fill="white">v₃</text>
  
  
  <path d="M 260 230 L 265 230 Q 268 230 268 233 V 307 Q 268 310 265 310 L 260 310" fill="none" stroke="white" stroke-width="1"/>
      
      <text x="10" y="210" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        B = [b₁₁ b₁₂; b₂₁ b₂₂], x = [x₁; x₂]
      </text>
      
      <text x="10" y="235" fontFamily="Arial, sans-serif" fontSize="11" fill="white">
        u = [u₁; u₂], v = [v₁; v₂]
      </text>
    </svg>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{marginLeft:'150px'}}>
    <UnitCircleTrigVisualizer/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   
<MatrixMultiplicationVisualizer matrix1={matrix1} matrix2={matrix2} />

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <FormulaAccordionWrapper data={combinatoricsFormulaList} groupByField={'category'}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='divy' style={{marginLeft:'30px'}}>
     <SVGSlider
      diagrams={diagrams}
      title="My SVG Slider"
      explanation="This slider showcases various SVG diagrams."
      link="https://example.com/learn-more"/>
     <div style={{width:'100%',height:'100%',backgroundColor:'lightgray'}}>
      <div style={{display:'flex',flexDirection:'row'}}>
     <VerticalScrollingFormulaWidget
      formulaData={combinatoricsFormulaList}
        moreFormulasLink={'/combinatorics'}
        title='Combinatorics Formulas'
     />
    
     <div  
      style={{backgroundColor:' #fb4834',width:'50%',color:'white',
      textAlign:'center',color:'black',padding:'50px',margin:'1px',borderRadius:'3px'}}>Some Div</div>
     </div>
     <div  
      style={{backgroundColor:' #5e35b1',width:'100%',color:'white',
      height:'140px',borderRadius:'5px',margin:'2px'}}>Some Div</div>
     </div>
     </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <VariationsVisualizer/>
    <br/>
    <br/>
    <br/>
    <VariationsVisualizer2x3/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <VariationsVisualizer2x4/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <VariationsVisualizer3x2/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  <VariationsVisualizer3x3/>
    <br/>
    <br/>
    <br/>
    <br/>
    <VerticalScrollingFormulaWidget
    formulaData={combinatoricsFormulaList}
    moreFormulasLink={'/combinatorics'}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ChevronTimeline/>
    <br/>
    <br/>
    <br/>
    <br/>
       <div className='divy' style={{marginLeft:'10px',marginRight:'45px'}}>
 <SVGSlider
  diagrams={diagrams}
  title="My SVG Slider"
  explanation="This slider showcases various SVG diagrams."
  link="https://example.com/learn-more"/>
 <div style={{width:'70%',height:'100%',backgroundColor:'lightgray'}}>
  <div style={{display:'flex',flexDirection:'row'}}>
 <VerticalScrollingFormulaWidget
  formulaData={combinatoricsFormulaList}
    moreFormulasLink={'/combinatorics'}
    title='Combinatorics Formulas'
 />
    
 <div  
  style={{backgroundColor:' #3faddf',width:'50%',color:'white',
  textAlign:'center',color:'white',padding:'50px',margin:'1px',borderRadius:'3px'}}>Some Div</div>
 </div>
 <div  
  style={{backgroundColor:' #5e35b1',width:'100%',color:'white',
  height:'140px',borderRadius:'5px',margin:'2px'}}>Some Div</div>
 </div>
 </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <FlexibleLayout
 
  svgSliderProps={{
    diagrams: diagrams,
    title: "Custom SVG Slider",
    explanation: "Your explanation here",
    link: "https://learnmathclass.com",
    width:'500'
    
    // Any other props the SVGSlider accepts
  }}
  formulaWidgetProps={{
    formulaData: combinatoricsFormulaList,
    moreFormulasLink: '/combinatorics',
    title: 'Your Formula Title',
    // Any other props the VerticalScrollingFormulaWidget accepts
  }}
  topRightDivStyle={{
   
   
    // Any other styles you want to apply
  }}
  topRightCardProps={{
    title: "Card Title",
    content: "This is the card content.",
    icon: SearchIcon, // Optional
    link: "/some-page" // Optional
  }}
  bottomDivStyle={{
    // backgroundColor: 'green',
    // height: '200px',
    // Any other styles you want to apply
    color:'orange'
  }}

  bottomCards={[
    { title: "Card 1", content: "Content 1", link: "/link1" },
    { title: "Card 2", content: "Content 2", link: "/link2" },
    { title: "Card 3", content: "Content 3", link: "/link3" }
  ]}
>
  <SVGSlider />
  <VerticalScrollingFormulaWidget />
</FlexibleLayout>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(0.98)'}}> */}
    <JointProbabilityTable/>
    {/* </div> */}
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ControlPanel/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{width:'50%'}}> */}
    <ControlPanel2 width='700px' sections={calculationSections}/>
    {/* </div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <CalculationsDisplay
     probabilities={mockProbabilities}
     selectedOperations={mockSelectedOperations}
     width="400px"/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{width:'95%'}}>
    <ProbabilityCalculator sections={calculationSections}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <div style={{transform:'scale(1.2)'}}> */}
   <UnitCircle/>
   {/* </div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <MultiplicationTable/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <CompleteMultiplicationTable/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  )
}
