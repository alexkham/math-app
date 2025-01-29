import Sections from '@/app/components/page-components/section/Sections';
import React from 'react'
import ToolsSlider from '@/app/components/sliders/ToolsSlider';
import MathContainer from '@/app/components/math-content/MathContainer';
import MyList from '@/app/components/page-components/lists/MyList';
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable';

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

  return (
    <>
    <div>Test6Page</div>

    {/* <Sections sections={testSections}/>
     */}
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
