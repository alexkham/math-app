import React from 'react';
import algorithmsList from '../../app/api/db/linear_algebra/algorithmsList.json'
import pandasOperations from '../../app/components/tree-structure/pandas_operations_new.json'
import TreeStructure from '@/app/components/tree-structure/TreeItem';
import cLibrary from '../../app/components/tree-structure/c_standard_library.json'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VariationsVisualizer from '@/app/components/combinatorics/VariationsVisualizer';
import VariationsVisualizer3x3 from '@/app/components/combinatorics/VariationsVisualizer3x3';
import CombinatoricsVisualization from '@/app/components/combinatorics/CombinatoricsVisualisation4Balls';
import ArrowSplitBreakdown from '@/app/components/breakdowns/2-way-split/ArrowBreakdown';
import TableSplitBreakdown from '@/app/components/breakdowns/2-way-split/TableSplit';
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable';
import ContentBlocks from '@/app/components/page-components/content-components/ContentBlocks';
import VectorCalculator from '@/app/components/calculators/vector-calculator/VectorCalculator';
import MatrixCalculator from '@/app/components/calculators/matrix-calculator/MatrxCalculatorAll';
import GraphCore from '@/app/components/graphs/GraphCore';
import BellCurve from '@/app/components/z-table/BellCurve';
import BellCurveHighlighted from '@/app/components/z-table/BellCurveHighlighted';
import BellCurveHighlighted2 from '@/app/components/z-table/BellCurveHighlighted2';
import ZScoreVisualizer from '@/app/components/z-table/ZScoreVisualizer';
import FunctionGraphVisualizer from '@/app/components/graphs/FunctionGraphVisualizer';



export default function Test5Page() {

   const mockData = {
    basic: {
      title: "Framework Comparison",
      leftTitle: "React",
      rightTitle: "Vue",
      left: [
        "Component-based",
        "Virtual DOM",
        "Rich ecosystem",
        "Facebook backed"
      ],
      right: [
        "Gentle learning curve",
        "Built-in state management",
        "Template system",
        "Progressive framework"
      ]
    },
  
    minimal: {
      left: [
        "Option A",
        "Option B",
        "Option C"
      ],
      right: [
        "Option 1",
        "Option 2",
        "Option 3"
      ]
    },
  
    detailed: {
      title: "Development Approach",
      leftTitle: "Monolith",
      rightTitle: "Microservices",
      left: [
        "Simpler deployment",
        "Better consistency",
        "Easier testing",
        "Lower complexity",
        "Faster development initially"
      ],
      right: [
        "Better scalability",
        "Independent deployments",
        "Technology flexibility",
        "Smaller teams",
        "Easier maintenance"
      ]
    }
  };
  
  // Usage examples:
  // <TableSplitBreakdown content={mockData.basic} />
  // <TableSplitBreakdown content={mockData.minimal} />
  // <TableSplitBreakdown content={mockData.detailed} />

  const truthExplanations = {
    AND: {
      text: "AND returns true only when both P and Q are true because it represents the strictest form of logical agreement. This mirrors real-world scenarios where multiple conditions must be met simultaneously. AND is fundamental to logic because it allows us to check complete fulfillment of multiple requirements. In set theory, AND corresponds to intersection - finding what sets have in common. This concept extends to validation where we need to ensure all conditions are satisfied before proceeding.",
      links: [{ title: "Logic Gates", link: "/learn/logic-gates" }]
    },
    OR: {
      text: "OR returns true if at least one input is true, representing logical disjunction. It fails only when all inputs are false, making it more permissive than AND. This operator is crucial in scenarios where multiple valid paths can lead to the same outcome. OR naturally maps to combining possibilities or accepting alternatives. In mathematical terms, it unifies conditions, accepting results from any valid source.",
      links: [{ title: "OR Operations", link: "/learn/or" }]
    },
    XOR: {
      text: "XOR (exclusive OR) yields true when inputs differ, capturing the concept of mutual exclusivity. It enforces a strict either/or relationship, rejecting cases where inputs match. This makes XOR essential for comparing binary states and detecting changes between values. XOR helps identify exact differences between logical states. The operation is self-inverse, meaning applying it twice with the same values returns the original input.",
      links: [{ title: "XOR Logic", link: "/learn/xor" }]
    },
    NAND: {
      text: "NAND inverts the AND operation, yielding true in all cases except when both inputs are true. This seemingly simple inversion holds special power in logic. NAND's functional completeness means it can be used to construct all other logical operations. Any logical function can be built using only NAND gates. The universality of NAND demonstrates how complex logic can emerge from simple foundations.",
      links: [{ title: "NAND Gates", link: "/learn/nand" }]
    },
    NOR: {
      text: "NOR yields true only when both inputs are false, representing joint denial. Like NAND, it is functionally complete. NOR's behavior of requiring total absence of true inputs makes it useful in detecting complete system shutdowns or verifying full conditions. NOR can express any other logical operation through combinations. This universality shows the deep connection between negation and logical completeness.",
      links: [{ title: "NOR Logic", link: "/learn/nor" }]
    },
    XNOR: {
      text: "XNOR returns true when inputs match - both true or both false. It acts as a logical equality checker between binary values. This behavior makes XNOR essential in comparison operations and error detection where we need to verify matching states. XNOR effectively tests for logical equivalence between inputs. It serves as the foundation for detecting bit parity and ensuring data consistency.",
      links: [{ title: "XNOR Operations", link: "/learn/xnor" }]
    }
  };


  const sampleData = {
    title: "Framework Comparison",
    leftTitle: "React",
    rightTitle: "Vue",
    left: [
      "Simple string item",
      {
        title: "Advanced Features",
        link: "https://react.dev/features",
        content: [
          "Virtual DOM",
          "Server Components",
          "Suspense"
        ]
      },
      {
        title: "Ecosystem",
        content: [
          "NPM Packages: 100K+",
          "Active community"
        ]
      }
    ],
    right: [
      "Basic string item",
      {
        title: "Core Features",
        link: "https://vuejs.org/guide",
        content: [
          "Reactivity System",
          "Template Syntax",
          "Composition API"
        ]
      }
    ]
   };

   const mockTocItems = [
    {
      title: "Introduction",
      content: "This is the introduction section with some **bold text** and a [link to Google](https://google.com).\n\nHere's another paragraph with some math: $E = mc^2$.\n\n- List item 1\n- List item 2\n\tIndented list item"
    },
    {
      title: "Mathematical Concepts",
      before: "<p class='note'>This section covers advanced topics</p>",
      content: "Here we'll explore some complex equations:\n\n$$\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$\n\nAnd an inline equation: $a^2 + b^2 = c^2$",
      after: "<p class='note'>End of mathematical concepts</p>"
    },
    {
      title: "Diagrams and Visualizations",
      content:[ "Here's a simple diagram:\n\n",
        "<svg width='200' height='100'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='2' fill='red'/></svg>",
        "\n\nAnd some additional text after the diagram."]
    },
    {
      title: "HTML Example",
      content: "<div style='padding: 10px; border: 1px solid #ccc; border-radius: 4px;'><h3>Custom HTML Content</h3><p>This is rendered using dangerouslySetInnerHTML</p></div>"
    },
    {
      title: "Conclusion with Math Expression",
      content: "In conclusion, we've learned that $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$\n\n- Summary point 1\n- Summary point 2"
    }
  ];




  return (
    <>
    <h1>Test 5 page </h1>
    {/* <TreeStructure data={algorithmsList}
    expandTopLevel={true}/> */}
    <br/>
    <br/>
    <div id='toc'>toc</div>
    <br/>
    <br/>
    <ArrowSplitBreakdown/>
    <br/>
    <br/>
    <br/>
    {/* <VariationsVisualizer/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <TableSplitBreakdown  content={mockData.basic}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <TableSplitBreakdown  content={sampleData}/>
    <br/>
    <br/>
    <br/>
    {/* <VariationsVisualizer3x3/> */}
    <br/>
    <br/>
    <br/>
    {/* <TreeStructure data={cLibrary}
    expandTopLevel={true}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   {/* <CombinatoricsVisualization/> */}
    <br/>
    <br/>
    <br/>
    <TruthTable explanations={truthExplanations}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <CombinatoricsVisualization itemCount={3}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <CombinatoricsVisualization itemCount={2}/> */}
    <br/>
    <br/>
    <br/>
    <h1>End</h1>
    <br/>
    <br/>
    <br/>
   
    <br/>
    <br/>
    <br/>
    {/* <div style={{marginLeft:'100px',marginRight:'100px'}}>
    <ContentBlocks tocItems={mockTocItems}/>
    </div> */}
    <br/>
    <br/>
    {/* <CombinatoricsVisualization itemCount={5}/> */}
    <br/>
    <br/>
    <VectorCalculator/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <MatrixCalculator/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div style={{width:'50%',height:'60%'}}>
    <GraphCore width={1000}
    theme='minimal'/>
    </div>
    <br/>
    {/* <ProofCalculator/> */}
    <br/>
    <br/>
    <br/>
    <div style={{width:'70%'}}>
    <GraphCore 
          functions={['quadratic', 'cubic']}
          xRange={[-3, 3]}
          yRange={[-5, 5]}
          theme="minimal"
          aspectRatio={4/3}
        />
        </div>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <BellCurveHighlighted/> */}
    {/* <BellCurveHighlighted2/> */}
    <ZScoreVisualizer/>
    <br/>
    <br/>
    <br/>
    <br/>
    <BellCurveHighlighted2 
  dataPoints={[-4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]} 
  zScore={[1.5]} 
/>
    <br/>
    <br/>
    <br/>
    <BellCurveHighlighted
  dataPoints={[-4, -3.5, -3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]} 
  zScore={[1.5]} 
/>
    <br/>
    <br/>
    <br/>
    <br/>
    <FunctionGraphVisualizer/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton></ScrollUpButton>
    
    </>
  )
}
