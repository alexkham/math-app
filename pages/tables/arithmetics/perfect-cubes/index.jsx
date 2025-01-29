import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';

import ExplanationDetails from '@/app/components/ExplanationDetails';
import '../../../pages.css';
import CubeRootsTable from '@/app/components/tables/CubeRootsTable';

export default function PerfectCubesTablePage({ keyWords, combinedInstructions }) {
  return (
    <>
      <Head>
        <title>Perfect Cubes 1-10000 | Cube Numbers Table | Learn Math Class</title>
        <meta name="description" content="Explore perfect cubes from 1 to 1000000 with our comprehensive table. Learn about cube numbers, find cube roots, and understand perfect cubes in mathematics." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <link rel="canonical" href="https://www.learnmathclass.com/tables/arithmetics/perfect-cubes" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Perfect Cubes Table (1-1000000) - Learn Math Class" />
        <meta property="og:description" content="Complete table of perfect cubes and their cube roots. Interactive search and educational explanations included." />
        <meta property="og:url" content="https://www.learnmathclass.com/tables/arithmetics/perfect-cubes" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Perfect Cube Table (1-1000000)" />
        <meta name="twitter:description" content="Explore perfect cubes and their cube roots with our interactive table and search tool." />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar
        side='right'
        // topOffset='65px'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <h1 className='title' style={{marginTop:'-30px',marginBottom:'30px'}}>
        Perfect Cubes 1 - 1000000
      </h1>

      <div style={{ marginBottom: '-30px' }}>
        <ExplanationDetails
          title="About This Table"
          instructions={combinedInstructions}
          links={[
            { text: "Root Calculator", url: "/calculators/root-calculator" },
            // { text: "Square Root Visualizer", url: "/visual-tools/square-root" }
          ]}
        />
      </div>

      <div style={{transform:'scale(0.9)'}}>
       <CubeRootsTable/>
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
    'perfect cube',
    'cube root',
    'square numbers',
    'perfect cubes table',
    'cube root table',
    'integer cubes',
    'cube numbers',
    'mathematical cubes'
  ];

  const combinedInstructions = [
    "Use the search bar to find any perfect cube between 1 and 1,000,000",
    "Table shows perfect cubes organized in columns for easy reading",
    "Each entry shows both the cube root (∛) and its perfect cube",
    "Numbers not found in search aren't perfect cubes",
    "Perfect cubes are numbers that result from an integer multiplied by itself twice",
    "For example: 1=1×1×1, 8=2×2×2, 27=3×3×3, 64=4×4×4",
    "They follow a pattern: each perfect cube grows by the sum of three consecutive odd numbers from the previous one",
    "Used extensively in geometry for volume calculations and in algebra for factoring cubic expressions",
    "You can always find their exact cube root (no decimals)",
    "Perfect cubes connect to many math concepts like volume calculations and cubic equations"
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