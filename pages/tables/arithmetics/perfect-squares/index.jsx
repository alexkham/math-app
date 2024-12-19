// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import SquareRootsTable from '@/app/components/tables/SquareRootsTable'
// import React from 'react';
// import '../../../pages.css'
// import ExplanationDetails from '@/app/components/ExplanationDetails'

// export default function PerfectSquaresTablePage() {
//     const keyWords=['perfect square ', 'square root'];

//     const combinedInstructions = [
//         "Use the search bar to find any perfect square between 1 and 10000",
//         "Table shows perfect squares organized in columns for easy reading",
//         "Each entry shows both the square root (√) and its perfect square",
//         "Numbers not found in search aren't perfect squares",
       
//         "Perfect squares are numbers that result from an integer multiplied by itself",
//         "For example: 1=1×1, 4=2×2, 9=3×3, 16=4×4",
//         "They follow a pattern: each perfect square is the previous one plus the next odd number",
//         "Used extensively in geometry for area calculations and in algebra for factoring",
//         "You can always find their exact square root (no decimals)",
//         "Perfect squares connect to many math concepts like the Pythagorean theorem"
//       ];
    

//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//     <OperaSidebar 
//       side='right'
//       topOffset='65px' 
//       sidebarWidth='45px'
//       panelWidth='300px'
      
//       iconColor='white'
//       panelBackgroundColor='#f2f2f2'/> 
//     <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}> Perfect Squares 1 - 10000 </h1>
//     <div style={{ marginBottom: '-30px' }}>
       
//         <ExplanationDetails
//           title="About This Table"
//           instructions={combinedInstructions}
//         />
//       </div>
//     <div style={{transform:'scale(0.9)'}}>
//     <SquareRootsTable/>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>

//     </>
//   )
// }


import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import SquareRootsTable from '@/app/components/tables/SquareRootsTable';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import '../../../pages.css';

export default function PerfectSquaresTablePage({ keyWords, combinedInstructions }) {
  return (
    <>
      <Head>
        <title>Perfect Squares 1-10000 | Square Numbers Table | Learn Math Class</title>
        <meta name="description" content="Explore perfect squares from 1 to 10000 with our comprehensive table. Learn about square numbers, find square roots, and understand perfect squares in mathematics." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics/perfect-squares" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Perfect Squares Table (1-10000) - Learn Math Class" />
        <meta property="og:description" content="Complete table of perfect squares and their square roots. Interactive search and educational explanations included." />
        <meta property="og:url" content="https://www.learnmathclass.com/tables/arithmetics/perfect-squares" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Perfect Squares Table (1-10000)" />
        <meta name="twitter:description" content="Explore perfect squares and their square roots with our interactive table and search tool." />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>
        Perfect Squares 1 - 10000
      </h1>

      <div style={{ marginBottom: '-30px' }}>
        <ExplanationDetails
          title="About This Table"
          instructions={combinedInstructions}
          links={[
            { text: "Root Calculator", url: "/calculators/root-calculator" },
            { text: "Square Root Visualizer", url: "/visual-tools/square-root" }
          ]}
        />
      </div>

      <div style={{transform:'scale(0.9)'}}>
        <SquareRootsTable/>
      </div>

      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  );
}

export async function getStaticProps() {
  const keyWords = [
    'perfect square',
    'square root',
    'square numbers',
    'perfect squares table',
    'square root table',
    'integer squares',
    'quadratic numbers',
    'mathematical squares'
  ];

  const combinedInstructions = [
    "Use the search bar to find any perfect square between 1 and 10000",
    "Table shows perfect squares organized in columns for easy reading",
    "Each entry shows both the square root (√) and its perfect square",
    "Numbers not found in search aren't perfect squares",
    "Perfect squares are numbers that result from an integer multiplied by itself",
    "For example: 1=1×1, 4=2×2, 9=3×3, 16=4×4",
    "They follow a pattern: each perfect square is the previous one plus the next odd number",
    "Used extensively in geometry for area calculations and in algebra for factoring",
    "You can always find their exact square root (no decimals)",
    "Perfect squares connect to many math concepts like the Pythagorean theorem"
  ];

  return {
    props: {
      keyWords,
      combinedInstructions
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
}