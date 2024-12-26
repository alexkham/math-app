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
import Head from 'next/head';


export function generateStaticParams() {
  return [{}]; // This ensures the page is statically generated
}




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
    <div className='outer-container'>
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
</Head>
     
      <HomePage categorizedUrls={categorizedUrls} metaDescriptions={metaDescriptions}></HomePage>
     
      <br></br>
    
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
