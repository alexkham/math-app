import ButtonGroup from './components/button-group/ButtonGroup';
import GenericTable from './components/generic-table/GenericTable';
import MyAccordion from './components/my-accordion/MyAccordion';
//import styles from './page.module.css'
// import tableData from './api/db/tables/trigonometry_tables.json'
import './globals.css'
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
import { VennDiagram } from 'venn.js';
import BellCurveHighlighted from './components/z-table/BellCurveHighlighted';
import BellCurveHighlighted2 from './components/z-table/BellCurveHighlighted2';
import TypeWriter from './components/keyboards/TypeWriter';
import { primes } from './api/db/sequences/prime';
import PrimeTable from './components/sequences/PrimeTable';
import SequenceTable from './components/sequences/SequenceTable';


export default function Home() {
  const port=process.env.NEXT_PUBLIC_PORT;
  const optionsCategory=["category1","category2","category3","category4"]
  const optionsTitle=["title1","title2","title3","title4"]

  const dataPoints = Array.from({ length: 800 }, (_, index) => ((index / 100) - 4).toFixed(2));
  const zScores = [0.9]; // Example: Highlight up to z-score of 1.96
  const primeNums=[...primes]
  const prime=primeNums[primeNums.length-2]

  return (
    <div className='outer-container'>
     
      
     
      <br></br>
      {/* <span>.{primes[0]}</span> */}
       {/* <PrimeTable></PrimeTable> */}
      <br></br>
      <br></br>
      {/* <SequenceTable sequenceData={primes} sequenceTitle={'fibonacci'}></SequenceTable> */}
      <br></br>
      <Link href={'/tables'}>
       <button>Go to Tables Page</button>
       </Link>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <svg viewBox="0 0 330 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M305.863 314.916c0 2.266-1.133 4.815-2.832 6.514l-14.157 14.163c-1.699 1.7-3.964 2.832-6.513 2.832-2.265 0-4.813-1.133-6.512-2.832L164.572 224.276 53.295 335.593c-1.699 1.7-4.247 2.832-6.512 2.832-2.265 0-4.814-1.133-6.513-2.832L26.113 321.43c-1.699-1.7-2.831-4.248-2.831-6.514s1.132-4.816 2.831-6.515L158.06 176.408c1.699-1.7 4.247-2.833 6.512-2.833 2.265 0 4.814 1.133 6.513 2.833L303.03 308.4c1.7 1.7 2.832 4.249 2.832 6.515z" fill-rule="nonzero"></path></svg>
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
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     

     <br></br>
     <br></br>
     <br></br>
     <br></br>
     {/* <BellCurveHighlighted
      pdf={pdf}
      dataPoints={Array.from({ length: 800 }, (_, index) => ((index / 100) - 4).toFixed(2))}
      zScores={[-1.96, 1.96]} // Range of zScores
    /> */}

     <br></br>
     <br></br>
     {/* <div>
      <h1>Bell Curve Highlighted</h1>
      <BellCurveHighlighted pdf={pdf} dataPoints={dataPoints} zScores={zScores} />
    </div> */}
     <br></br>
     <br></br>
     <br></br>
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
     {/* <TypeWriter></TypeWriter> */}
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
    </div>
  )
}
