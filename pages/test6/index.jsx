import Sections from '@/app/components/page-components/section/Sections';
import React from 'react'
import ToolsSlider from '@/app/components/sliders/ToolsSlider';
import MathContainer from '@/app/components/math-content/MathContainer';
import MyList from '@/app/components/page-components/lists/MyList';
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable';
import ThreeWaysCircularSplitBreakdown from '@/app/components/breakdowns/2-ways/3WaysSplit';
import PowerTable from '@/app/components/tables/PowerTable';
import MatrixCalculator from '@/app/components/calculators/matrix/MatrixCalculator';
import Matrix from '@/app/components/calculators/matrix/Matrix';
import MatrixAnimation from '@/app/components/matrices/MatrixAnimation';
import MatrixExpressionVisualizer from '@/app/components/matrix-multiplication/MatrixExpressionVisualizer';
import Matrix2 from '@/app/components/calculators/matrix/Matrix2';
import MatrixCalculator2 from '@/app/components/calculators/matrix/MatrixCalculator2';
import TreeStructure from '@/app/components/tree-structure/TreeItem';
import TreeStructure2 from '@/app/components/tree-structure/TreeItem2';
import MatrixGenerator from '@/app/components/matrices/MatrixGenerator';
import CoOccurrenceMatrix from '@/app/components/matrices/CoOccurenceMatrix';
import FourPanel from '@/app/components/page-components/lists/FourPanel';

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

      const identityMatrix=`
    content="**Identity Matrix**:

The general form of the identity matrix is:

$$I_n = \begin{pmatrix} 
1 & 0 & 0 & \cdots & 0 \\\\ 
0 & 1 & 0 & \cdots & 0 \\\\ 
0 & 0 & 1 & \cdots & 0 \\\\ 
\vdots & \vdots & \vdots & \ddots & \vdots \\\\ 
0 & 0 & 0 & \cdots & 1 
\end{pmatrix}$$

An example of a 3x3 identity matrix is:

$$I_3 = \begin{pmatrix} 
1 & 0 & 0 \\\\ 
0 & 1 & 0 \\\\ 
0 & 0 & 1 
\end{pmatrix}$$"


      `

      const listData=[
        {item: 'First item', math: 'Here is equation $$x^2$$'},
        {item: 'Second item', math: 'Another equation $$E=mc^2$$'}
      ];


      // First, define operators with input requirements
// const conjunctionOperators = {
//   'BASIC': {
//     symbol: '∧',
//     func: (a, b) => a && b,
//     inputs: 2
//   },
//   'COMPOUND': {
//     symbol: '(∧)',
//     func: (a, b) => a && b,
//     inputs: 2
//   },
//   'WITH_NOT': {
//     symbol: '¬∧',
//     func: (a, b) => !(a && b),
//     inputs: 2
//   },
//   'WITH_OR': {
//     symbol: '∧∨',
//     func: (a, b) => a && b,
//     inputs: 2
//   },
//   'SELF': {
//     symbol: 'P∧P',
//     func: (a) => a && a,
//     inputs: 1
//   }
// };
    

// const conjunctionOperators = {
//   'BASIC': { symbol: '∧', func: (a, b) => a && b },
//   'THREE_VAR': { symbol: '∧∧', func: (a, b) => a && b },
//   'COMPOUND': { symbol: '(∧)', func: (a, b) => a && b },
//   'WITH_OR': { symbol: '∧∨', func: (a, b) => (a && b) || b },
//   'WITH_NOT': { symbol: '¬∧', func: (a, b) => !(a && b) },
//   'SELF': { symbol: 'P∧P', func: (a, b) => a && a },
//   'WITH_TRUE': { symbol: '∧T', func: (a, b) => a && true },
//   'WITH_FALSE': { symbol: '∧F', func: (a, b) => a && false },
//   'MULTI_GROUP': { symbol: '(∧)(∧)', func: (a, b) => (a && a) && (b && b) }
// };


// operations/conjunctionCases.js
const conjunctionCases = {
  'SIMPLE_AND': { 
    symbol: 'P ∧ Q', 
    func: (a, b) => a && b 
  },
  'AND_OR_RIGHT': { 
    symbol: 'P ∧ (Q ∨ R)', 
    func: (a, b, c) => a && (b || c) 
  },
  'AND_OR_LEFT': { 
    symbol: '(P ∧ Q) ∨ R', 
    func: (a, b, c) => (a && b) || c 
  },
  'TRIPLE_AND': { 
    symbol: 'P ∧ Q ∧ R', 
    func: (a, b, c) => a && b && c 
  },
  'NOT_AND': { 
    symbol: '¬(P ∧ Q)', 
    func: (a, b) => !(a && b) 
  },
  'AND_SELF': { 
    symbol: 'P ∧ P', 
    func: (a) => a && a 
  },
  'AND_CONSTANT': { 
    symbol: 'P ∧ True', 
    func: (a) => a && true 
  },
  'AND_GROUPS': { 
    symbol: '(P ∧ Q) ∧ (R ∧ S)', 
    func: (a, b, c, d) => (a && b) && (c && d) 
  },
  'AND_IMPLIES': { 
    symbol: '(P ∧ Q) → R', 
    func: (a, b, c) => !(a && b) || c 
  }
 };

 const implicationOperators = {
  'P→Q': { symbol: 'P→Q', func: (a, b) => !a || b },
  'Q→P': { symbol: 'Q→P', func: (a, b) => !b || a },
  '¬P→Q': { symbol: '¬P→Q', func: (a, b) => a || b },
  'P→¬Q': { symbol: 'P→¬Q', func: (a, b) => !a || !b },
  '¬P→¬Q': { symbol: '¬P→¬Q', func: (a, b) => a || !b },
  '¬Q→¬P': { symbol: '¬Q→¬P', func: (a, b) => b || !a }
};

// const tautologies = {
//   '¬(P∧¬P)': { 
//     symbol: '¬(P∧¬P)', 
//     func: (a) => !(a && !a),
//     title: 'Law of Non-Contradiction'
//   },
//   'P∨¬P': {
//     symbol: 'P∨¬P',
//     func: (a) => a || !a,
//     title: 'Law of Excluded Middle'
//   },
//   'P↔¬¬P': {
//     symbol: 'P↔¬¬P',
//     func: (a) => a === !!a,
//     title: 'Double Negation'
//   },
//   'P→(Q→P)': {
//     symbol: 'P→(Q→P)',
//     func: (a,b) => !a || (!b || a),
//     title: 'Implication Tautology'
//   }
//  }

const tautologies = {
  '¬(P∧¬P)': { symbol: '¬(P∧¬P)', func: (a) => !(a && !a), title: 'Law of Non-Contradiction' },
  'P∨¬P': { symbol: 'P∨¬P', func: (a) => a || !a, title: 'Law of Excluded Middle' },
  'P↔¬¬P': { symbol: 'P↔¬¬P', func: (a) => a === !!a, title: 'Double Negation' },
  'P→(Q→P)': { symbol: 'P→(Q→P)', func: (a,b) => !a || (!b || a), title: 'Implication Tautology' },
  '(P→Q)↔(¬Q→¬P)': { symbol: '(P→Q)↔(¬Q→¬P)', func: (a,b) => (!a || b) === (b || !a), title: 'Contrapositive' },
  '(P∧Q)→P': { symbol: '(P∧Q)→P', func: (a,b) => !(a && b) || a, title: 'Conjunction Elimination' },
  'P→(P∨Q)': { symbol: 'P→(P∨Q)', func: (a,b) => !a || (a || b), title: 'Disjunction Introduction' },
  '(P∧Q)↔¬(¬P∨¬Q)': { symbol: '(P∧Q)↔¬(¬P∨¬Q)', func: (a,b) => (a && b) === !((!a || !b)), title: 'DeMorgan Law' },
  '(P↔Q)↔((P→Q)∧(Q→P))': { symbol: '(P↔Q)↔((P→Q)∧(Q→P))', func: (a,b) => (a === b) === ((!a || b) && (!b || a)), title: 'Equivalence Definition' },
  // '((P→Q)∧(Q→R))→(P→R)': { symbol: '((P→Q)∧(Q→R))→(P→R)', func: (a,b,c) => !(!(!a || b) && (!b || c)) || (!a || c), title: 'Syllogism' }
 }

 const contradictions = {
  'P∧¬P': { symbol: 'P∧¬P', func: (a) => a && !a, title: 'Self-Contradiction' },
  '(P∨Q)∧¬P∧¬Q': { symbol: '(P∨Q)∧¬P∧¬Q', func: (a,b) => (a || b) && !a && !b, title: 'Disjunctive Contradiction' },
  'P∧Q∧¬(P∧Q)': { symbol: 'P∧Q∧¬(P∧Q)', func: (a,b) => a && b && !(a && b), title: 'Conjunction Contradiction' },
  '(P↔Q)∧(P↔¬Q)': { symbol: '(P↔Q)∧(P↔¬Q)', func: (a,b) => (a === b) && (a === !b), title: 'Equivalence Contradiction' },
  'P∧Q∧(¬P∨¬Q)': { symbol: 'P∧Q∧(¬P∨¬Q)', func: (a,b) => a && b && (!a || !b), title: 'Mixed Contradiction' },
  '(P→Q)∧P∧¬Q': { symbol: '(P→Q)∧P∧¬Q', func: (a,b) => (!a || b) && a && !b, title: 'Implication Contradiction' },
  'P∧(Q∧¬Q)': { symbol: 'P∧(Q∧¬Q)', func: (a,b) => a && (b && !b), title: 'Nested Contradiction' }
}




const threeWaysContent = {
  title: "Comparison",
  firstTitle: "First Option",
  secondTitle: "Second Option",
  thirdTitle: "Third Option",
  first: [
    {
      title: "Main Feature",
      content: ["Detail 1", "Detail 2"]
    }
  ],
  second: ["Simple item"],
  third: [
    {
      title: "Feature",
      link: "https://example.com",
      content: ["Linked content"]
    }
  ]
};

const centerStyles = {
  backgroundColor: '#4a5568',
  color: 'white'
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [7, 8, 9],
  [7, 8, 9],
  [7, 8, 9],
  [7, 8, 9],
  [7, 8, 9],
];


const matrixOperations = {
  "Matrix Operations": {
    "1. Unary Matrix Operations": {
      "Transpose": {
        explanation: "Flips the matrix over its diagonal, swapping rows and columns",
        url: "#transpose"
      },
      "Conjugate": {
        explanation: "Applies complex conjugation to each element of the matrix",
        url: "#conjugate"
      },
      "Conjugate Transpose": {
        explanation: "Takes the complex conjugate and then transposes the matrix",
        url: "#conjugate-transpose"
      },
      "Negation": {
        explanation: "Multiplies each matrix element by -1",
        url: "#negation"
      },
      "Trace": {
        explanation: "Sum of diagonal elements of a square matrix",
        url: "#trace"
      },
      "Determinant": {
        explanation: "Maps a square matrix to a scalar representing invertibility and volume scaling",
        url: "#determinant"
      },
      "Inverse": {
        explanation: "Produces a matrix such that A A^(-1) = I (only for invertible matrices)",
        url: "#inverse"
      },
      "Adjugate": {
        explanation: "Transpose of the cofactor matrix, used to find matrix inverses",
        url: "#adjugate"
      },
      "Norm": {
        explanation: "Measures the 'size' or 'magnitude' of a matrix",
        url: "#norm"
      },
      "Matrix Exponential": {
        explanation: "Defined via a power series, important in differential equations",
        url: "#matrix-exponential"
      },
      "Rank": {
        explanation: "The dimension of the row or column space, indicating linearly independent rows/columns",
        url: "#rank"
      },
      "Pseudo-Inverse": {
        explanation: "Generalization of the inverse for non-square or singular matrices",
        url: "#pseudo-inverse"
      }
    },
    "2. Binary Matrix Operations": {
      "Matrix Addition": {
        explanation: "Adds corresponding elements of matrices of the same size",
        url: "#matrix-addition"
      },
      "Matrix Subtraction": {
        explanation: "Subtracts corresponding elements of matrices of the same size",
        url: "#matrix-subtraction"
      },
      "Scalar Multiplication": {
        explanation: "Multiplies each element of matrix A by a scalar c",
        url: "#scalar-multiplication"
      },
      "Scalar Addition": {
        explanation: "Adds a scalar to each element of the matrix",
        url: "#scalar-addition"
      },
      "Matrix Multiplication": {
        explanation: "Combines rows of A with columns of B",
        url: "#matrix-multiplication"
      },
      "Hadamard Product": {
        explanation: "Multiplies corresponding elements of two matrices",
        url: "#hadamard-product"
      },
      "Kronecker Product": {
        explanation: "Tensor product that produces a large block matrix",
        url: "#kronecker-product"
      }
    },
    "3. Special Matrix Operations": {
      "LU Decomposition": {
        explanation: "Factorizes a matrix into lower triangular (L) and upper triangular (U) matrices",
        url: "#lu-decomposition"
      },
      "QR Decomposition": {
        explanation: "Decomposes a matrix into orthogonal (Q) and upper triangular (R) matrices",
        url: "#qr-decomposition"
      },
      "Cholesky Decomposition": {
        explanation: "Decomposes a positive-definite matrix into lower triangular matrix and its transpose",
        url: "#cholesky-decomposition"
      },
      "Singular Value Decomposition": {
        explanation: "Factorizes matrix into orthogonal matrices U, V and diagonal matrix Σ",
        url: "#svd"
      },
      "Jordan Canonical Form": {
        explanation: "Represents a matrix in block diagonal form to simplify linear transformations",
        url: "#jordan-form"
      },
      "Diagonalization": {
        explanation: "Expresses a matrix as a product of diagonal and invertible matrices if diagonalizable",
        url: "#diagonalization"
      },
      "Projection": {
        explanation: "Projects vectors onto a subspace using projection matrices",
        url: "#projection"
      },
      "Eigenvalue Decomposition": {
        explanation: "Decomposes matrix using eigenvalues (Λ) and eigenvectors (V)",
        url: "#eigenvalue-decomposition"
      }
    }
  }
};

const fourWaysData = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" },
  { title: "Section 4", content: "Content for section 4" }
];

  return (
    <>
    <div>Test6Page</div>

    {/* <Sections sections={testSections}/>
     */}
    <br/>
    <br/>
  <div>
  <div style={{position: 'relative', paddingBottom: '56.25%'}}> <iframe style={{width: '50%', height: '50%', position: 'absolute', left: 0, top: 0}} src="https://embed.app.guidde.com/playbooks/cGGvdWsZgi6v79w4ynWzmo" title="square matrix types generator" frameBorder={0} referrerPolicy="unsafe-url" allowFullScreen="true" allow="clipboard-write" sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation" /> </div>
  <p style={{display: 'none'}} />
</div>

    <br/>
    <br/>
    <FourPanel data={fourWaysData} theme='sunset'/>
    <br/>
    <br/>
    <br/>
    <div style={{transform:'scale(0.8)'}}>
    <CoOccurrenceMatrix/>
    </div>
    <br/>
    <br/>
    <br/>
    {/* <MatrixGenerator/> */}
    <br/>
    <br/>
    <TreeStructure data={matrixOperations} expandTopLevel={true} />
    <br/>
    <br/>
    <br/>
    <TreeStructure2
     data={matrixOperations} 
     expandTopLevel={true} 
     viewMode="parsed" 
    ></TreeStructure2>
    <br/>
   
    <br/>
    <MatrixCalculator2/>
    
    <br/>
    {/* <Matrix2 matrix={matrix} name='A' labelPosition='left' />
    <br/>
    <Matrix matrix={matrix}/> */}
    <br/>
    <br/>
   {/* <MatrixCalculator/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <PowerTable/> */}
    <br/>
    {/* <ThreeWaysCircularSplitBreakdown
    content={threeWaysContent}/> */}
    <br/>
    <br/>
    <div style={{transform:'scale(0.8)'}}>
    <ThreeWaysCircularSplitBreakdown
  title="Main Title"
  content={{
    firstTitle: "First Option",
    secondTitle: "Second Option", 
    thirdTitle: "Third Option",
    first: [{title: "Main Feature", content: ["Detail 1", "Detail 2"]}],
    second: ["Simple item"],
    third: [{title: "Feature", link: "https://example.com", content: ["Linked content"]}]
  }}
  centerContent="Optional"
/>

</div>
    <br/>
    <br/>
    <br/>
    <br/>
    <TruthTable operators={implicationOperators}/>
    <br/>
    <br/>
    <br/>
    <TruthTable operators={tautologies} />
    <br/>
    <br/>
    <br/>
    <TruthTable operators={contradictions} />
    <br/>
    <br/>
    <MyList data={listData}
    math={true}/>
    <br/>
    <br/>
    <h1>Math List</h1>
    <MyList 
  data={[
    {item: 'First item', math: 'Here is equation $$x^2$$'},
    {item: 'Second item', math: 'Another equation $$E=mc^2$$'}
  ]}
  type="number"
  math={true}
  mathProps={{
    theme: 'dark',
    width: '100%'
  }}></MyList>
    <br/>
    <MathContainer/>
    <br/>
    <br/>
    <br/>
    <br/>
   
<MathContainer 
  theme="glass" 
  content="Here's math: $E = mc^2$" 
/>


<MathContainer 
  theme="dark"
  width="500px"
  height="300px"
  content="Long content with math..." 
/>


<MathContainer 
  theme="clean"
  backgroundColor="#f0f4f8"
  color="#2d3748"
  maxHeight="400px"
  additionalStyles={{
    borderLeft: '4px solid #4299e1',
    transition: 'all 0.2s ease'
  }}
  content="Custom styled content..." 
/>


<MathContainer 
  theme="dark"
  whiteSpace="pre"
  wordWrap="normal"
  overflowX="scroll"
  content="Long single line with math..." 
/>
    <br/>
    <br/>
    <br/>
    <MathContainer 
  theme="chalk"
  content="**Basic matrix operations**:
$$A = \begin{pmatrix} 
a_{11} & a_{12} \\ 
a_{21} & a_{22}
\end{pmatrix}$$

Eigenvalue decomposition:
$$AX = \lambda X$$

With the characteristic equation:
$$det(A - \lambda I) = 0$$

Quick example with values:
$$\begin{pmatrix} 
4 & 2 \\ 
1 & 3
\end{pmatrix}
\begin{pmatrix}
x \\ y
\end{pmatrix} = 
\lambda \begin{pmatrix}
x \\ y
\end{pmatrix}$$"
/>

<MathContainer 
  theme="dark"
  content="Rank-nullity theorem: 
$$rank(A) + nullity(A) = n$$

For any linear transformation $T: V \to W$:
$$dim(V) = dim(ker(T)) + dim(im(T))$$"
/>
    <br/>
    <br/>
    <br/>
    <br/>
    <MathContainer content={identityMatrix}/>
    <br/>
    <br/>
    
    </>
  )
}
