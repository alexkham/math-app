import ButtonGroup from './components/button-group/ButtonGroup';
import GenericTable from './components/generic-table/GenericTable';
import MyAccordion from './components/my-accordion/MyAccordion';
//import styles from './page.module.css'
// import tableData from './api/db/tables/trigonometry_tables.json'
// import './globals.css'
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
//import combinatorics from './api/db/content/combinatorics'


export function generateStaticParams() {
  return [{}]; // This ensures the page is statically generated
}

// async function getMetaDescriptions(urls) {
//   const descriptions = {};
//   for (const url of urls) {
//     const response = await fetch(url);
//     const html = await response.text();
//     const match = html.match(/<meta name="description" content="([^"]+)"/);
//     if (match) descriptions[url] = match[1];
//   }
//   return descriptions;
// }


// export async function getStaticProps() {
//   const categorizedUrls = parseSitemap();
  
//   if (!categorizedUrls) {
//     return { props: { error: 'Failed to load categorized URLs' } };
//   }

//   const allUrls = [
//     ...categorizedUrls.main, 
//     ...Object.values(categorizedUrls.categories).flat(), 
//     ...categorizedUrls.leaves
//   ];
  
//   const metaDescriptions = await getMetaDescriptions(categorizedUrls);

//   return {
//     props: {
//       categorizedUrls,
//       metaDescriptions,
//     },
//     // Optionally, add a revalidate property if you want to use ISR (Incremental Static Regeneration)
//     // revalidate: 60, // regenerate the page every 60 seconds
//   };
// }

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
  
  // const metaDescriptions = await getMetaDescriptions(categorizedUrls);

//  const  metaDescriptions= {
//     'https://learnmathclass.com/combinatorics': 'Explore various combinatorics scenarios including permutations, combinations, partitions, and distributions. Learn formulas, see examples, and understand real-world applications with our comprehensive guide and interactive diagram.',
//     'https://learnmathclass.com/logic/truth-tables': 'Generate dynamic truth tables for logical expressions with our interactive Logic Calculator. Learn about logical operators, Boolean algebra, and propositional logic.',
//     'https://learnmathclass.com/visual-tools/base-converter': 'Visualize number base conversions with our interactive tool.', 
//     'https://learnmathclass.com/visual-tools/determinant-calculator': 'Use our free determinant calculator with step-by-step solutions. Easily calculate matrix determinants for 2x2, 3x3, and larger matrices.',
//     'https://learnmathclass.com/visual-tools/gauss-elimination': 'Use our free Gaussian elimination calculator to solve matrix equations, systems of linear equations, and perform Gauss-Jordan elimination. Step-by-step solutions provided.',
//     'https://learnmathclass.com/visual-tools/matrix-multiplication': 'Interactive matrix multiplication animation tool. Visualize and understand matrix multiplication step by step.'
//   }



  // if (error) {
  //   return <div>Error: {error}</div>;
  // }


//   const complexMathData ={

//     title:"First Complex Problem",

//     problem: "Explore and explain the following calculus concepts: limits, derivatives, integrals, and series. Provide detailed steps and explanations for each.",

//     solution: [
//     {
//       content: "Let's explore some advanced calculus concepts.",
//       explanation: "We'll start with limits, then move to derivatives, integrals, and series."
//     },
//     {
//       content: "First, let's consider the limit: $$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$",
//       explanation: "This is a famous limit that's fundamental in calculus. It shows that for small angles, $\\sin x \\approx x$."
//     },
//     {
//       content: "Next, let's look at a more complex limit: $$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$",
//       explanation: "This limit defines the mathematical constant $e$, which is approximately equal to $2.71828$."
//     },
//     {
//       content: "Now, let's consider a derivative with the chain rule: $$\\frac{d}{dx}[\\sin(x^2)] = 2x\\cos(x^2)$$",
//       explanation: "We apply the chain rule here: $\\frac{d}{dx}[\\sin(u)] = \\cos(u) \\cdot \\frac{du}{dx}$, where $u = x^2$."
//     },
//     {
//       content: "Let's move on to integrals. Here's a definite integral: $$\\int_0^\\pi \\sin x \\,dx = 2$$",
//       explanation: "This integral represents the area under one arch of the sine curve from 0 to $\\pi$."
//     },
//     {
//       content: "Now for a more complex integral: $$\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C$$",
//       explanation: "This is the integral that gives us the inverse sine function, or arcsine."
//     },
//     {
//       content: "Let's look at a series. This is the Taylor series for $e^x$: $$e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$",
//       explanation: "This series representation allows us to compute $e^x$ for any value of $x$."
//     },
//     {
//       content: "Finally, let's consider a complex equation involving multiple concepts: $$\\frac{d}{dx}\\left[\\int_0^x \\frac{\\sin t}{t} \\,dt\\right] = \\frac{\\sin x}{x}$$",
//       explanation: "This equation combines integration and differentiation, demonstrating the Fundamental Theorem of Calculus."
//     }
//   ]
  
// };

//   const withCode=`graph TD;
// A[Click Me ] --> B((B));
// click A href "http://localhost:3000/katex" "Tooltip for A"

// `

//   const combinatorics=`
// flowchart TD
//     A["Are you selecting or arranging objects?"] -->|Selecting| B["Do you care about the order of selection?"]
//     A -->|Arranging| C["Are the objects or positions unique?"]
//     B -->|Yes| D["Use Permutations:\nOrdering of a set of objects.\nFormula: P(n, r) = n! / (n-r)!"]
//     B -->|No| E["Use Combinations:\nSelection of a set of objects where order does not matter.\nFormula: C(n, r) = n! / (r!(n-r)!)"]
//     E -->|With Repetition| F["Modify the formula accordingly for repetitions.\nFormula: C(n+r-1, r)"]
//     C -->|Yes| D
//     C -->|No| G["Identical Objects?:\nSelection/Arrangement where some objects are identical.\nFormula: n! / (n1!n2!...nk!)"]
//     G -->|Yes| H["Use Permutations with Identical Objects:\nArranging non-unique objects.\nSame formula as for Identical Objects."]
//     G -->|No| I["Circular Arrangement?:\nArranging objects in a circle.\nFormula: (n-1)!"]
//     I -->|Yes| J["Use Circular Permutations:\nSpecial case of permutations for circular arrangements.\nFormula: (n-1)!"]
//     I -->|No| K["Derangement?:\nArrangement where no element appears in its original position.\nFormula: n! * (1 - 1/1! + 1/2! - ... + (-1)^n/n!)"]
//     K -->|Yes| L["Use Derangements:\nSpecial permutation with no fixed points.\nSame formula as for Derangement."]
//     K -->|No| M["Special Conditions?:\nScenarios not covered by standard permutations or combinations."]
//     M --> N["Objects into Boxes:\nDistributing objects into boxes. Varies based on box/object properties."]
//     N --> O["Distinct Boxes:\nObjects are distinct and placed into distinct boxes. Considerations vary."]
//     N --> P["Identical Boxes:\nObjects are placed into identical boxes. More complex; involves partition theory."]
//     O --> Q["Consider if boxes can be empty or if objects are distinct. Varies."]
//     P --> R["More complex; involves partition theory. Specific methods required."]
//     M --> S["Tiling Problems or Partitioning into Groups:\nSpecific combinatorial problems. Requires tailored approaches."]
//     S --> T["Requires detailed formulas based on the problem. Specific to the scenario."]

// `


// const sql=`
// graph TD
//     SQL((SQL Language))
//     SQL -->Cmd[Commands]
//     SQL -->|Keywords| Key[Keywords]
//     SQL -->|Operators| Opr[Operators]
//     SQL -->|Constraints| Con[Constraints]
//     SQL -->|Data Types| DT[Data Types]
//     SQL -->|Functions| Fun[Functions]
//     SQL -->|Clauses| Cls[Clauses]

//     Cmd --> DDL[DDL]
//     Cmd --> DML[DML]
//     Cmd --> DCL[DCL]
//     Cmd --> TCL[TCL]
//     DDL -->|CREATE, ALTER, DROP, TRUNCATE| DDL_details
//     DML -->|INSERT, UPDATE, DELETE, SELECT| DML_details
//     DCL -->|GRANT, REVOKE| DCL_details
//     TCL -->|COMMIT, ROLLBACK, SAVEPOINT| TCL_details

//     Key -->|FROM, WHERE, JOIN...| Key_details
//     Opr -->|Arithmetic, Comparison...| Opr_details
//     Con -->|PRIMARY KEY, FOREIGN KEY...| Con_details
//     DT -->|Numeric, Character...| DT_details
//     Fun -->|Aggregate, Scalar...| Fun_details
//     Cls -->|WHERE, ORDER BY...| Cls_details

// `


// const mindMap=`
// mindmap
//   root((SQL Language))
//     subbranch1{{"Commands"}}
//       subbranch1 --> DDL["DDL"]
//       subbranch1 --> DML["DML"]
//       subbranch1 --> DCL["DCL"]
//       subbranch1 --> TCL["TCL"]
//     subbranch2{{"Keywords"}}
//       subbranch2 --> Basic["Basic"]
//       subbranch2 --> Advanced["Advanced"]
//     subbranch3{{"Operators"}}
//       subbranch3 --> Arithmetic["Arithmetic"]
//       subbranch3 --> Comparison["Comparison"]
//       subbranch3 --> Logical["Logical"]
//     subbranch4{{"Constraints"}}
//       subbranch4 --> Others["Others"]
//       subbranch4 --> PK["PK"]
//       subbranch4 --> FK["FK"]
//     subbranch5{{"Data Types"}}
//       subbranch5 --> NumStr["Numeric/String"]
//       subbranch5 --> DateMisc["Date/Misc"]
//     subbranch6{{"Functions"}}
//       subbranch6 --> Aggregate["Aggregate"]
//       subbranch6 --> ScalarSys["Scalar/System"]
//     subbranch7{{"Clauses"}}
//       subbranch7 --> Conditions["Conditions"]
//       subbranch7 --> Ordering["Ordering"]

// `
  // const port=process.env.NEXT_PUBLIC_PORT;
  // const optionsCategory=["category1","category2","category3","category4"]
  // const optionsTitle=["title1","title2","title3","title4"]

  // const dataPoints = Array.from({ length: 800 }, (_, index) => ((index / 100) - 4).toFixed(2));
  // const zScores = [0.9]; // Example: Highlight up to z-score of 1.96
  


  // const categorizedUrls = parseSitemap();

  // if (!categorizedUrls) {
  //   return <div>Loading...</div>;
  // }
  // console.log('Categorized Urls : ', JSON.stringify(categorizedUrls, null, 2));


  // const allUrls = [...categorizedUrls.main, ...Object.values(categorizedUrls.categories).flat(), ...categorizedUrls.leaves];
  // const metaDescriptions = await getMetaDescriptions(categorizedUrls);
  
  // console.log('Meta Descriptions:', metaDescriptions);
  console.log('Received metaDescriptions:', metaDescriptions);
  return (
    <div className='outer-container'>
     
      <HomePage categorizedUrls={categorizedUrls} metaDescriptions={metaDescriptions}></HomePage>
     
      <br></br>
      {/* <span>.{primes[0]}</span> */}
       {/* <PrimeTable></PrimeTable> */}
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


        {/* <svg viewBox="0 0 330 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M305.863 314.916c0 2.266-1.133 4.815-2.832 6.514l-14.157 14.163c-1.699 1.7-3.964 2.832-6.513 2.832-2.265 0-4.813-1.133-6.512-2.832L164.572 224.276 53.295 335.593c-1.699 1.7-4.247 2.832-6.512 2.832-2.265 0-4.814-1.133-6.513-2.832L26.113 321.43c-1.699-1.7-2.831-4.248-2.831-6.514s1.132-4.816 2.831-6.515L158.06 176.408c1.699-1.7 4.247-2.833 6.512-2.833 2.265 0 4.814 1.133 6.513 2.833L303.03 308.4c1.7 1.7 2.832 4.249 2.832 6.515z" fill-rule="nonzero"></path></svg> */}
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
