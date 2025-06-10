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
import GenericSquareRootsTable from '@/app/components/tables/GenericSquareRootsTable';
import SVGSlider2 from '@/app/components/svg/SVGSlider2';


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



// Mock Data for SVGSlider2 Component

// Example 1: System Architecture Flow
 const systemArchitectureData = {
  "User Request": {
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="10"/>
      <circle cx="150" cy="100" r="30" fill="#2196f3"/>
      <text x="150" y="108" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">USER</text>
      <path d="M 180 100 L 220 100 M 215 95 L 220 100 L 215 105" stroke="#1976d2" stroke-width="3" fill="none"/>
      <text x="150" y="170" text-anchor="middle" font-family="Arial" font-size="14" fill="#1976d2">Client Request</text>
    </svg>`,
    explanation: "The user initiates a request from their client application. This could be a web browser, mobile app, or API client making an HTTP request to our system.",
    links: [
      { text: "API Documentation", url: "https://api.example.com/docs" },
      { text: "Client SDK Guide", url: "https://docs.example.com/sdk" }
    ]
  },
  "Load Balancer": {
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="10"/>
      <rect x="120" y="80" width="60" height="40" fill="#4caf50" rx="5"/>
      <text x="150" y="105" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">LB</text>
      <circle cx="80" cy="100" r="8" fill="#81c784"/>
      <circle cx="220" cy="80" r="8" fill="#81c784"/>
      <circle cx="220" cy="120" r="8" fill="#81c784"/>
      <line x1="88" y1="100" x2="112" y2="100" stroke="#4caf50" stroke-width="2"/>
      <line x1="188" y1="95" x2="212" y2="80" stroke="#4caf50" stroke-width="2"/>
      <line x1="188" y1="105" x2="212" y2="120" stroke="#4caf50" stroke-width="2"/>
      <text x="150" y="170" text-anchor="middle" font-family="Arial" font-size="14" fill="#4caf50">Traffic Distribution</text>
    </svg>`,
    explanation: "The load balancer receives the incoming request and distributes it across multiple backend servers to ensure optimal performance and availability.",
    links: [
      { text: "Load Balancing Strategies", url: "https://docs.example.com/load-balancing" }
    ]
  },
  "Application Server": {
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="#fff3e0" stroke="#ff9800" stroke-width="2" rx="10"/>
      <rect x="80" y="70" width="140" height="60" fill="#ff9800" rx="5"/>
      <text x="150" y="95" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">APPLICATION</text>
      <text x="150" y="115" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">SERVER</text>
      <circle cx="70" cy="70" r="4" fill="#ffcc02"/>
      <circle cx="70" cy="85" r="4" fill="#ffcc02"/>
      <circle cx="70" cy="100" r="4" fill="#ffcc02"/>
      <circle cx="70" cy="115" r="4" fill="#ffcc02"/>
      <circle cx="70" cy="130" r="4" fill="#ffcc02"/>
      <text x="150" y="170" text-anchor="middle" font-family="Arial" font-size="14" fill="#ff9800">Business Logic</text>
    </svg>`,
    explanation: "The application server processes the business logic, handles authentication, validation, and orchestrates the overall request processing workflow.",
    links: [
      { text: "Server Configuration", url: "https://docs.example.com/server-config" },
      { text: "Performance Tuning", url: "https://docs.example.com/performance" }
    ]
  },
  "Database": {
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="#f3e5f5" stroke="#9c27b0" stroke-width="2" rx="10"/>
      <ellipse cx="150" cy="80" rx="50" ry="15" fill="#9c27b0"/>
      <ellipse cx="150" cy="120" rx="50" ry="15" fill="#ba68c8"/>
      <rect x="100" y="80" width="100" height="40" fill="#ce93d8"/>
      <ellipse cx="150" cy="120" rx="50" ry="15" fill="#9c27b0"/>
      <text x="150" y="105" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">DATABASE</text>
      <text x="150" y="170" text-anchor="middle" font-family="Arial" font-size="14" fill="#9c27b0">Data Storage</text>
    </svg>`,
    explanation: "The database layer stores and retrieves persistent data. This includes user information, application data, and system configurations.",
    links: [
      { text: "Database Schema", url: "https://docs.example.com/schema" },
      { text: "Query Optimization", url: "https://docs.example.com/optimization" },
      { text: "Backup Procedures", url: "https://docs.example.com/backup" }
    ]
  },
  "Response": {
    svg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="#e8f5e8" stroke="#4caf50" stroke-width="2" rx="10"/>
      <path d="M 80 100 L 220 100 M 85 95 L 80 100 L 85 105" stroke="#4caf50" stroke-width="4" fill="none"/>
      <circle cx="220" cy="100" r="25" fill="#4caf50"/>
      <text x="220" y="108" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">✓</text>
      <text x="150" y="130" text-anchor="middle" font-family="Arial" font-size="12" fill="#4caf50">Success Response</text>
      <text x="150" y="170" text-anchor="middle" font-family="Arial" font-size="14" fill="#4caf50">Data Returned</text>
    </svg>`,
    explanation: "The processed response travels back through the system to the client, containing the requested data or confirmation of the completed operation.",
    links: [
      { text: "Response Format Guide", url: "https://docs.example.com/response-format" }
    ]
  }
};

// Example 2: Machine Learning Pipeline
 const mlPipelineData = {
  "Data Collection": {
    svg: `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="140" fill="#f0f8ff" stroke="#4682b4" stroke-width="2" rx="8"/>
      <rect x="40" y="50" width="40" height="30" fill="#87ceeb" rx="3"/>
      <rect x="90" y="60" width="40" height="30" fill="#87ceeb" rx="3"/>
      <rect x="140" y="45" width="40" height="30" fill="#87ceeb" rx="3"/>
      <rect x="190" y="55" width="40" height="30" fill="#87ceeb" rx="3"/>
      <text x="60" y="70" text-anchor="middle" font-size="10" fill="white">CSV</text>
      <text x="110" y="80" text-anchor="middle" font-size="10" fill="white">JSON</text>
      <text x="160" y="65" text-anchor="middle" font-size="10" fill="white">API</text>
      <text x="210" y="75" text-anchor="middle" font-size="10" fill="white">DB</text>
      <path d="M 60 90 Q 140 110 210 95" stroke="#4682b4" stroke-width="2" fill="none"/>
      <circle cx="140" cy="130" r="15" fill="#4682b4"/>
      <text x="140" y="136" text-anchor="middle" fill="white" font-size="12">📊</text>
    </svg>`,
    explanation: "Raw data  is collected from multiple sources including CSV files, JSON APIs, databases, and real-time streams. This diverse data forms the foundation of our ML pipeline.",
    links: [
      { text: "Data Sources Documentation", url: "https://ml.example.com/data-sources" },
      { text: "Collection Best Practices", url: "https://ml.example.com/collection" }
    ]
  },
  "Data Preprocessing": {
    svg: `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="140" fill="#fff5ee" stroke="#ff7f50" stroke-width="2" rx="8"/>
      <rect x="50" y="50" width="180" height="80" fill="#ffa07a" rx="5"/>
      <text x="140" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="white">CLEANING</text>
      <text x="140" y="95" text-anchor="middle" font-size="12" fill="white">• Remove duplicates</text>
      <text x="140" y="110" text-anchor="middle" font-size="12" fill="white">• Handle missing values</text>
      <text x="140" y="125" text-anchor="middle" font-size="12" fill="white">• Normalize data</text>
      <circle cx="30" cy="90" r="8" fill="#dc143c"/>
      <circle cx="250" cy="90" r="8" fill="#32cd32"/>
      <path d="M 38 90 L 42 90 M 246 90 L 242 90" stroke="#333" stroke-width="2"/>
    </svg>`,
    explanation: "Raw data undergoes cleaning and preprocessing. We remove duplicates, handle missing values, normalize features, and ensure data quality before training.",
    links: [
      { text: "Preprocessing Techniques", url: "https://ml.example.com/preprocessing" }
    ]
  },
  "Feature Engineering": {
    svg: `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="140" fill="#f0fff0" stroke="#228b22" stroke-width="2" rx="8"/>
      <polygon points="140,50 170,80 140,110 110,80" fill="#32cd32"/>
      <text x="140" y="87" text-anchor="middle" font-size="12" font-weight="bold" fill="white">TRANSFORM</text>
      <circle cx="70" cy="80" r="15" fill="#90ee90"/>
      <circle cx="210" cy="60" r="12" fill="#90ee90"/>
      <circle cx="210" cy="100" r="12" fill="#90ee90"/>
      <text x="70" y="86" text-anchor="middle" font-size="10" fill="black">X1</text>
      <text x="210" y="66" text-anchor="middle" font-size="9" fill="black">F1</text>
      <text x="210" y="106" text-anchor="middle" font-size="9" fill="black">F2</text>
      <path d="M 85 80 L 110 80" stroke="#228b22" stroke-width="2"/>
      <path d="M 170 70 L 198 60" stroke="#228b22" stroke-width="2"/>
      <path d="M 170 90 L 198 100" stroke="#228b22" stroke-width="2"/>
    </svg>`,
    explanation: "Feature engineering transforms raw variables into meaningful features that better represent the underlying problem for machine learning algorithms.",
    links: [
      { text: "Feature Engineering Guide", url: "https://ml.example.com/features" },
      { text: "Domain-Specific Features", url: "https://ml.example.com/domain-features" }
    ]
  },
  "Model Training": {
    svg: `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="140" fill="#fff0f5" stroke="#dc143c" stroke-width="2" rx="8"/>
      <rect x="60" y="50" width="160" height="80" fill="#ff69b4" rx="8"/>
      <text x="140" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="white">NEURAL NETWORK</text>
      <circle cx="80" cy="100" r="6" fill="white"/>
      <circle cx="80" cy="115" r="6" fill="white"/>
      <circle cx="120" cy="95" r="6" fill="white"/>
      <circle cx="120" cy="105" r="6" fill="white"/>
      <circle cx="120" cy="115" r="6" fill="white"/>
      <circle cx="160" cy="95" r="6" fill="white"/>
      <circle cx="160" cy="105" r="6" fill="white"/>
      <circle cx="160" cy="115" r="6" fill="white"/>
      <circle cx="200" cy="105" r="6" fill="white"/>
      <line x1="86" y1="100" x2="114" y2="95" stroke="white" stroke-width="1"/>
      <line x1="86" y1="115" x2="114" y2="105" stroke="white" stroke-width="1"/>
      <line x1="126" y1="105" x2="154" y2="105" stroke="white" stroke-width="1"/>
      <line x1="166" y1="105" x2="194" y2="105" stroke="white" stroke-width="1"/>
    </svg>`,
    explanation: "The neural network model learns patterns from the processed training data through backpropagation, adjusting weights to minimize prediction errors.",
    links: [
      { text: "Model Architecture", url: "https://ml.example.com/architecture" },
      { text: "Training Parameters", url: "https://ml.example.com/training" },
      { text: "Hyperparameter Tuning", url: "https://ml.example.com/tuning" }
    ]
  },
  "Model Evaluation": {
    svg: `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="140" fill="#f5f5dc" stroke="#daa520" stroke-width="2" rx="8"/>
      <rect x="50" y="50" width="80" height="60" fill="#ffd700" rx="5"/>
      <rect x="150" y="50" width="80" height="60" fill="#ffd700" rx="5"/>
      <text x="90" y="75" text-anchor="middle" font-size="12" font-weight="bold">ACCURACY</text>
      <text x="90" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#b8860b">94.5%</text>
      <text x="190" y="75" text-anchor="middle" font-size="12" font-weight="bold">F1-SCORE</text>
      <text x="190" y="95" text-anchor="middle" font-size="16" font-weight="bold" fill="#b8860b">0.92</text>
      <path d="M 90 120 Q 140 135 190 120" stroke="#daa520" stroke-width="3" fill="none"/>
      <text x="140" y="140" text-anchor="middle" font-size="10" fill="#b8860b">Performance Metrics</text>
    </svg>`,
    explanation: "Model performance is evaluated using various metrics including accuracy, precision, recall, and F1-score on validation and test datasets.",
    links: [
      { text: "Evaluation Metrics", url: "https://ml.example.com/metrics" }
    ]
  },
  "Deployment": {
    svg: `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="240" height="140" fill="#e6e6fa" stroke="#9370db" stroke-width="2" rx="8"/>
      <rect x="80" y="60" width="120" height="50" fill="#9370db" rx="8"/>
      <text x="140" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="white">PRODUCTION</text>
      <text x="140" y="100" text-anchor="middle" font-size="12" fill="white">API Endpoint</text>
      <circle cx="50" cy="85" r="12" fill="#ba55d3"/>
      <circle cx="230" cy="85" r="12" fill="#ba55d3"/>
      <path d="M 62 85 L 68 85 M 212 85 L 218 85" stroke="#9370db" stroke-width="2"/>
      <text x="50" y="91" text-anchor="middle" font-size="8" fill="white">IN</text>
      <text x="230" y="91" text-anchor="middle" font-size="8" fill="white">OUT</text>
      <text x="140" y="140" text-anchor="middle" font-size="12" fill="#9370db">Real-time Predictions</text>
    </svg>`,
    explanation: "The trained model is deployed to production as an API endpoint, ready to make real-time predictions on new data with monitoring and scaling capabilities.",
    links: [
      { text: "Deployment Guide", url: "https://ml.example.com/deployment" },
      { text: "API Documentation", url: "https://ml.example.com/api" },
      { text: "Monitoring Dashboard", url: "https://ml.example.com/monitoring" }
    ]
  }
};

// Example 3: E-commerce Order Flow
 const ecommerceOrderData = {
  "Browse Products": {
    svg: `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="220" height="120" fill="#f0f8ff" stroke="#4169e1" stroke-width="2" rx="8"/>
      <rect x="40" y="40" width="50" height="40" fill="#add8e6" rx="4"/>
      <rect x="105" y="40" width="50" height="40" fill="#add8e6" rx="4"/>
      <rect x="170" y="40" width="50" height="40" fill="#add8e6" rx="4"/>
      <text x="65" y="58" text-anchor="middle" font-size="10" fill="black">Product A</text>
      <text x="65" y="70" text-anchor="middle" font-size="8" fill="black">$19.99</text>
      <text x="130" y="58" text-anchor="middle" font-size="10" fill="black">Product B</text>
      <text x="130" y="70" text-anchor="middle" font-size="8" fill="black">$24.99</text>
      <text x="195" y="58" text-anchor="middle" font-size="10" fill="black">Product C</text>
      <text x="195" y="70" text-anchor="middle" font-size="8" fill="black">$15.99</text>
      <circle cx="130" cy="110" r="15" fill="#4169e1"/>
      <text x="130" y="116" text-anchor="middle" font-size="12" fill="white">👁️</text>
    </svg>`,
    explanation: "Customer browses through the product catalog, viewing different items, prices, and product details. Search and filtering help find desired products.",
    links: [
      { text: "Product Catalog", url: "https://shop.example.com/catalog" },
      { text: "Search Tips", url: "https://help.example.com/search" }
    ]
  },
  "Add to Cart": {
    svg: `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="220" height="120" fill="#f0fff0" stroke="#32cd32" stroke-width="2" rx="8"/>
      <path d="M 80 50 L 100 50 L 105 90 L 75 90 Z" fill="#90ee90" stroke="#228b22" stroke-width="2"/>
      <circle cx="85" cy="95" r="3" fill="#228b22"/>
      <circle cx="95" cy="95" r="3" fill="#228b22"/>
      <line x1="85" y1="50" x2="90" y2="45" stroke="#228b22" stroke-width="2"/>
      <line x1="95" y1="50" x2="90" y2="45" stroke="#228b22" stroke-width="2"/>
      <rect x="120" y="60" width="30" height="20" fill="#32cd32" rx="2"/>
      <rect x="160" y="65" width="30" height="20" fill="#32cd32" rx="2"/>
      <text x="135" y="73" text-anchor="middle" font-size="8" fill="white">Item 1</text>
      <text x="175" y="78" text-anchor="middle" font-size="8" fill="white">Item 2</text>
      <path d="M 105 70 L 115 70 M 150 75 L 160 75" stroke="#32cd32" stroke-width="2"/>
      <text x="130" y="120" text-anchor="middle" font-size="12" fill="#228b22">Shopping Cart</text>
    </svg>`,
    explanation: "Selected products are added to the shopping cart. Customers can modify quantities, remove items, or continue shopping before proceeding to checkout.",
    links: [
      { text: "Cart Management", url: "https://help.example.com/cart" }
    ]
  },
  "Checkout Process": {
    svg: `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="220" height="120" fill="#fff8dc" stroke="#daa520" stroke-width="2" rx="8"/>
      <rect x="40" y="45" width="180" height="70" fill="#f0e68c" rx="5"/>
      <text x="130" y="60" text-anchor="middle" font-size="12" font-weight="bold">CHECKOUT FORM</text>
      <rect x="50" y="70" width="70" height="8" fill="white" rx="2"/>
      <rect x="140" y="70" width="70" height="8" fill="white" rx="2"/>
      <rect x="50" y="85" width="160" height="8" fill="white" rx="2"/>
      <rect x="50" y="100" width="160" height="8" fill="white" rx="2"/>
      <text x="55" y="68" font-size="8">Shipping Address</text>
      <text x="145" y="68" font-size="8">Payment Method</text>
      <text x="55" y="83" font-size="8">Email & Contact</text>
      <text x="55" y="98" font-size="8">Review Order</text>
    </svg>`,
    explanation: "Customer enters shipping information, selects payment method, and reviews order details. Form validation ensures all required information is provided.",
    links: [
      { text: "Checkout Help", url: "https://help.example.com/checkout" },
      { text: "Payment Options", url: "https://help.example.com/payment" }
    ]
  },
  "Payment Processing": {
    svg: `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="220" height="120" fill="#ffe4e1" stroke="#dc143c" stroke-width="2" rx="8"/>
      <rect x="70" y="50" width="120" height="60" fill="#ff6347" rx="8"/>
      <text x="130" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="white">SECURE PAYMENT</text>
      <rect x="90" y="80" width="80" height="15" fill="white" rx="3"/>
      <text x="130" y="90" text-anchor="middle" font-size="8">**** **** **** 1234</text>
      <circle cx="50" cy="80" r="8" fill="#ffd700"/>
      <circle cx="210" cy="80" r="8" fill="#32cd32"/>
      <text x="50" y="85" text-anchor="middle" font-size="8">🔒</text>
      <text x="210" y="85" text-anchor="middle" font-size="8">✓</text>
      <text x="130" y="130" text-anchor="middle" font-size="10" fill="#dc143c">Processing Transaction...</text>
    </svg>`,
    explanation: "Payment is securely processed through encrypted channels. Credit card information is validated and the transaction is authorized by the payment gateway.",
    links: [
      { text: "Security Information", url: "https://help.example.com/security" },
      { text: "Payment Troubleshooting", url: "https://help.example.com/payment-issues" }
    ]
  },
  "Order Confirmation": {
    svg: `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="220" height="120" fill="#f0fff0" stroke="#32cd32" stroke-width="2" rx="8"/>
      <circle cx="130" cy="80" r="30" fill="#32cd32"/>
      <text x="130" y="90" text-anchor="middle" font-size="24" fill="white">✓</text>
      <text x="130" y="50" text-anchor="middle" font-size="14" font-weight="bold" fill="#228b22">ORDER CONFIRMED</text>
      <text x="130" y="120" text-anchor="middle" font-size="12" fill="#228b22">Order #12345</text>
      <text x="130" y="135" text-anchor="middle" font-size="10" fill="#228b22">Confirmation email sent</text>
    </svg>`,
    explanation: "Order is successfully placed and confirmed. Customer receives confirmation email with order details and tracking information will be provided once shipped.",
    links: [
      { text: "Order Tracking", url: "https://shop.example.com/track" },
      { text: "Order History", url: "https://account.example.com/orders" }
    ]
  }
};

// Example usage with the component:
/*
import SVGSlider2 from './SVGSlider2';

// System Architecture Example
<SVGSlider2 
  diagrams={systemArchitectureData}
  title="System Architecture Flow"
  link="https://docs.example.com/architecture"
  height={600}
  description="Complete request-response flow through our distributed system architecture."
/>

// Machine Learning Pipeline Example
<SVGSlider2 
  diagrams={mlPipelineData}
  title="ML Pipeline Process"
  link="https://ml.example.com/pipeline"
  height={550}
  description="End-to-end machine learning pipeline from data collection to model deployment."
/>

// E-commerce Order Flow Example
<SVGSlider2 
  diagrams={ecommerceOrderData}
  title="Order Processing Flow"
  height={500}
  description="Customer journey from product browsing to order confirmation."
/>
*/


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
     {/* <SectionTableOfContents sections={sections} title='In This Section' /> */}
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
    <GenericSquareRootsTable/>
    <br/>
    <br/>
    <br/>
    <br/>
    <SVGSlider
      diagrams={diagrams}
      title="My SVG Slider"
      explanation="This slider showcases various SVG diagrams."
      link="https://example.com/learn-more"/>
    <br/>
    <br/>
    <br/>
    <div style={{width:'1000px'}}>
    <SVGSlider2
    diagrams={diagrams}
    />
    </div>
    <br/>
    <br/>
    <div style={{width:'1000px', height:'500px'}}>
    <SVGSlider2 
    diagrams={mlPipelineData}
    link={'/'}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  )
}
