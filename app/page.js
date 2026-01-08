import ButtonGroup from './components/button-group/ButtonGroup';
import GenericTable from './components/generic-table/GenericTable';
import MyAccordion from './components/my-accordion/MyAccordion';

import SelectComponent from './components/select-component/SelectComponent';
import SelectionPage from './components/SelectionPage';
import  SelectionPageNavigate from './components/SelectionPageNavigate'
import ParentComponent from './components/ParentSelect';
import ParentSelect from './components/ParentSelect';
import SelectTable2Steps from './components/select-table/SelectTable2Steps';
import Link from 'next/link';
import MyNavbar from './components/nav-bar/MyNavbar';
import FlexTableDynamic from './components/z-table/FlexTableDynamic';
import ZTableContainer from './components/z-table/ZTableContainer';
import ZScoreVisualizer from './components/z-table/ZScoreVisualizer';
import { pdf } from './utils/probability';

import BellCurveHighlighted from './components/z-table/BellCurveHighlighted';
import BellCurveHighlighted2 from './components/z-table/BellCurveHighlighted2';
import TypeWriter from './components/keyboards/TypeWriter';
import { primes } from './api/db/sequences/prime';
import PrimeTable from './components/sequences/PrimeTable';
import SequenceTable from './components/sequences/SequenceTable';
import MermaidDiagram from './components/mermaid-diagram/MermaidDiagram';
import TrigoCalculator from './components/trigo-calculator/TrigoCalculator';
import LogarithmTable from './components/logarithm-table/LogarithmTable';
import NaturalLogarithmTable from './components/logarithm-table/NaturalLogarithmTable';
import Base2LogarithmTable from './components/logarithm-table/LogarithmBase2Table';
import ExponentialTable from './components/logarithm-table/ExponentialTable';
import PowerTable from './components/logarithm-table/PowerTable';
import LogicCalculator from './components/logic-calculator/LogicCalculator';
import MatrixMultiplication from './components/matrix-multiplication/MatrixMultiplication';
import { parseSitemap } from '@/pages/api/sitemap';
import HomePage from './components/home-page/HomePage';
import { getMetaDescriptions } from './utils/getMetaDescriptions';
import MathSolutionSlideshow from './components/examples/MathSolutionSlideShow';
import metaDescriptions from './components/home-page/metaDescriptions'

import GeneralAccordion from './components/accordion/GeneralAccordionComponent';
import GeneralAccordionWrapper from './components/accordion/GeneralAccordionWrapper';
import summaries from './api/db/tables/set-theory/summaries';
import GenericNavbar from './components/nav-bar2/GenericNavbar';
import MyNavbar3 from './components/nav-bar3/MyNavbar3';
import Head from 'next/head';


export function generateStaticParams() {
  return [{}]; // This ensures the page is statically generated
}

export const metadata = {
  title: 'Learn Math Class: Free Online Math Learning Resources & Calculators',
  description: 'Learn mathematics online with our free resources, interactive calculators, and step-by-step solutions. Covering algebra, geometry, trigonometry, statistics, and more.',
  keywords: 'math learning, online math, math calculator, math practice, algebra, geometry, trigonometry, statistics',
  openGraph: {
    title: 'Learn Math Class - Free Online Math Learning Resources',
    description: 'Master mathematics with our comprehensive online learning platform. Interactive tools, practice problems, and detailed explanations for all math levels.',
    url: 'https://www.learnmathclass.com',
    type: 'website',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.learnmathclass.com',
  },
};




export default async function Home() {

  const categorizedUrls = parseSitemap();
  
  if (!categorizedUrls) {
    return <div>Error: Failed to load categorized URLs</div>;
  }

  const allUrls = [
    ...categorizedUrls.main, 
    ...Object.values(categorizedUrls.categories).flat(), 
    ...categorizedUrls.leaves
  ];
  
    <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Learn Math Class: Free Online Math Learning Resources & Calculators</title>
    
    <meta name="description" content="Learn mathematics online with our free resources, interactive calculators, and step-by-step solutions. Covering algebra, geometry, trigonometry, statistics, and more." />
    
    <meta property="og:title" content="Learn Math Class - Free Online Math Learning Resources" />
    <meta property="og:description" content="Master mathematics with our comprehensive online learning platform. Interactive tools, practice problems, and detailed explanations for all math levels." />
    <meta property="og:url" content="https://www.learnmathclass.com" />
    <meta property="og:type" content="website" />
    
    <link rel="canonical" href="https://www.learnmathclass.com" />
    
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="math learning, online math, math calculator, math practice, algebra, geometry, trigonometry, statistics" />
    
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="msvalidate.01" content="93FCA47C77A3B377FDB3B9FEA951F9CA" />
</Head>


  const countingPrinciples=`
  graph TD
      A["<h3>Counting Principles in Combinatorics</h3>"]
      B["<h4>Addition Principle</h4>Count of disjoint events<br>is sum of individual counts"]
      C["<h4>Multiplication Principle</h4>Count of sequential events<br>is product of individual counts"]
      D["<h4>Permutations</h4>Ordered arrangements<br>of distinct objects"]
      E["<h4>Combinations</h4>Unordered selections<br>from a set of objects"]
      
      A --> B
      A --> C
      C --> D
      C --> E
  `

  return (
    <div className='outer-container' >
{/* <GenericNavbar/> */}
<MyNavbar3
themeName='dark'
/>
     
      <HomePage categorizedUrls={categorizedUrls} metaDescriptions={metaDescriptions}></HomePage>
     
      <br></br>
      <div style={{
  maxWidth: '1200px',
  margin: '40px auto',
  padding: '20px 40px',
  lineHeight: '1.7',
  color: '#333',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
}}>
  <h1 style={{
    color: '#2c3e50',
    fontSize: '2.5rem',
    marginBottom: '20px',
    borderBottom: '3px solid #3498db',
    paddingBottom: '15px',
    marginLeft: '0'
  }}>Welcome to LearnMathClass</h1>
  
  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    We&apos;ve built this platform to make learning mathematics more intuitive and accessible. Whether you&apos;re a student working through homework, an educator preparing lessons, or someone who simply enjoys exploring mathematical ideas, we offer tools and resources designed to help you understand concepts rather than just memorize them.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    Our approach combines visual explanations, interactive calculators, and clear breakdowns of formulas across multiple branches of mathematics. Each section focuses on a specific area, giving you the depth you need without overwhelming you with everything at once.
  </p>

  <h2 style={{
    color: '#34495e',
    fontSize: '1.8rem',
    marginTop: '40px',
    marginBottom: '15px',
    marginLeft: '0'
  }}>What We Offer</h2>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    We&apos;ve organized our content into focused sections covering different mathematical fields:
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/algebra" style={{ color: '#3498db', textDecoration: 'none' }}>Algebra</Link>
    </strong> – We break down algebraic concepts into digestible pieces, covering everything from radical rules to logarithm laws with visual aids and examples.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/calculators" style={{ color: '#3498db', textDecoration: 'none' }}>Calculators</Link>
    </strong> – Our interactive calculators don&apos;t just give you answers. They walk you through each step of the solution, helping you understand the process behind the math.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/calculus" style={{ color: '#3498db', textDecoration: 'none' }}>Calculus</Link>
    </strong> – We use illustrated widgets and visual representations to make differentiation, integration, and limits less abstract and more approachable.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/combinatorics" style={{ color: '#3498db', textDecoration: 'none' }}>Combinatorics</Link>
    </strong> – From permutations to combinations and partitions, we provide formulas, practical examples, and interactive diagrams to help you visualize counting problems.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/probability" style={{ color: '#3498db', textDecoration: 'none' }}>Probability</Link>
    </strong> – We guide you through probability theory with comprehensive explanations that connect abstract concepts to real-world scenarios and statistical reasoning.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/linear-algebra" style={{ color: '#3498db', textDecoration: 'none' }}>Linear Algebra</Link>
    </strong> – We introduce you to vectors, matrices, and linear systems with tools that make these powerful concepts easier to grasp.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/trigonometry" style={{ color: '#3498db', textDecoration: 'none' }}>Trigonometry</Link>
    </strong> – We cover angles, sine, cosine, tangent, and their applications, helping you see how these functions work in solving triangles and modeling periodic behavior.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/logic" style={{ color: '#3498db', textDecoration: 'none' }}>Logic</Link>
    </strong> – We explore mathematical reasoning, from propositional logic to formal systems, showing how logical thinking underpins proofs and algorithms.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/set-theory" style={{ color: '#3498db', textDecoration: 'none' }}>Set Theory</Link>
    </strong> – We explain the foundational concepts of sets, including notation, relationships, and operations that form the basis of modern mathematics.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/sequences" style={{ color: '#3498db', textDecoration: 'none' }}>Sequences</Link>
    </strong> – We demonstrate patterns in number sequences like Fibonacci and primes, revealing their mathematical significance and natural occurrences.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/math-symbols" style={{ color: '#3498db', textDecoration: 'none' }}>Math Symbols</Link>
    </strong> – We maintain a reference of copyable mathematical symbols with clear explanations, organized for quick access when you need them.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/tables" style={{ color: '#3498db', textDecoration: 'none' }}>Tables</Link>
    </strong> – We provide reference tables for arithmetic, logarithmic, and trigonometric functions that you can use for quick lookups.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    <strong style={{ fontWeight: 600, color: '#2c3e50' }}>
      <Link href="/keyboard" style={{ color: '#3498db', textDecoration: 'none' }}>Mathematical Keyboard</Link>
    </strong> – We offer an interactive tool where you can practice writing proper mathematical notation.
  </p>

  <h2 style={{
    color: '#34495e',
    fontSize: '1.8rem',
    marginTop: '40px',
    marginBottom: '15px',
    marginLeft: '0'
  }}>Our Philosophy</h2>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    We believe that understanding mathematics requires more than memorizing formulas. That&apos;s why we emphasize visual learning with diagrams and illustrations that make abstract ideas concrete. Our interactive tools let you experiment and see how changing variables affects outcomes. We structure our explanations to build your intuition step by step.
  </p>

  <p style={{ margin: '15px 0', fontSize: '1.05rem', marginLeft: '0' }}>
    Whether you&apos;re preparing for an exam, working on a project, or exploring mathematics out of curiosity, we&apos;ve designed this platform to be both a learning environment and a practical reference. We want you to not just find answers, but to understand the mathematical thinking behind them.
  </p>
</div>
      <br></br>
      <br></br>
      {/* <SequenceTable sequenceData={primes} sequenceTitle={'fibonacci'}></SequenceTable> */}
      <br></br>
      
      {/* <Link href={'/tables'}>
       <button>Go to Tables Page</button>
       </Link> */}
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    
      <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     {/* <ZScoreVisualizer></ZScoreVisualizer> */}
    
     

     
     {/* <BellCurveHighlighted
      pdf={pdf}
      dataPoints={Array.from({ length: 800 }, (_, index) => ((index / 100) - 4).toFixed(2))}
      zScores={[-1.96, 1.96]} // Range of zScores
    /> */}

    
     {/* <div>
      <h1>Bell Curve Highlighted</h1>
      <BellCurveHighlighted pdf={pdf} dataPoints={dataPoints} zScores={zScores} />
    </div> */}
    
     {/* <br></br>
     <BellCurveHighlighted
     dataPoints={dataPoints}
     zScore={zScores}></BellCurveHighlighted> */}
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     {/* <BellCurveHighlighted2
     dataPoints={dataPoints}
     zScore={zScores}></BellCurveHighlighted2> */}
     <br></br>
     <br></br>
     <br></br>
   
    
     {/* <TypeWriter></TypeWriter> */}
    
          {/* <div style={{position:'absolute',top:'100px',width:'1200px'}}>
          <Base2LogarithmTable></Base2LogarithmTable>
   
      </div> */}
     
     <br></br>
     {/* <MathSolutionSlideshow problemData={complexMathData}></MathSolutionSlideshow> */}
     <br></br>
     <br></br>
      {/* <div style={{position:'absolute',top:'100px',width:'1200px'}}>
     <PowerTable></PowerTable>
      </div>  */}
     
     
     <br></br>
     {/* <MatrixMultiplication></MatrixMultiplication> */}
     <br></br>
     <br></br>
     {/* <h2>Z Score Visualizer</h2>
     <ZScoreVisualizer></ZScoreVisualizer> */}
     
   
     <br></br>
     
    </div>
  )
}
