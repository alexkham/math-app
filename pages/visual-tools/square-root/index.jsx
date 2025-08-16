


import React from 'react';
import Head from 'next/head';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import SquareRootVisualizer from '@/app/components/visualizations/SquareRootVisualizer';
import '../../pages.css';

export default function SquareRootVisualizerPage({ explanationsRoots, keyWords }) {
  return (
    <>
      <Head>
        <title>Square Root Visualizer | Interactive Math Learning Tool | Learn Math Class</title>
        <meta name="description" content="Interactive visualization tool for understanding square roots, perfect squares, and irrational numbers through visual grid representation. Free educational math resource." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <link rel="canonical" href="https://www.learnmathclass.com/visual-tools/square-root" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Square Root Visualizer - Interactive Math Learning Tool" />
        <meta property="og:description" content="Visualize and understand square roots with our interactive grid-based learning tool. Perfect for students and educators." />
        <meta property="og:url" content="https://www.learnmathclass.com/visual-tools/square-root" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Square Root Visualizer - Interactive Math Learning Tool" />
        <meta name="twitter:description" content="Visualize and understand square roots with our interactive grid-based learning tool." />
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
      <h1 className='title' style={{marginTop:'-20px',marginBottom:'-30px'}}>
        Square Root Visualizer
      </h1>
      <div style={{transform:'scale(0.85)'}}>
        <SquareRootVisualizer explanations={explanationsRoots}/>
      </div>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  );
}

export async function getStaticProps() {
  const explanationsRoots = {
    general: {
      content: `This interactive visualization helps you understand square roots through a visual grid representation.
        The blue squares show perfect squares (1, 4, 9, 16, etc.), growing darker as the numbers get smaller. The red frame shows any square root you select - both perfect and irrational.
        To use:
        1. Enter a number (0-100) or use the slider
        2. Watch the red frame adjust to show the square root
        3. Look at where it falls between perfect squares
        4. The tooltips show the exact square root value`,
      links: [
        { text: "Root Calculator", url: "/calculators/root-calculator" },
        { text: "Perfect Squares and Roots Table", url: "/tables/arithmetics/perfect-squares" }
      ],
      externalLinks: [
        { text: "Root Calculator", url: "/calculators/root-calculator" },
        { text: "Perfect Squares and Roots Table", url: "/tables/arithmetics/perfect-squares" }
      ]
    },
    perfect: {
      content: `A perfect square is a number that has an integer (whole number) square root. For example:
        • 1 is a perfect square (√1 = 1)
        • 4 is a perfect square (√4 = 2)
        • 9 is a perfect square (√9 = 3)
        • 16 is a perfect square (√16 = 4)
        
        In our visualization, perfect squares appear along the diagonal of the grid, marked with their values. The blue shading shows the area of each perfect square, making it easy to see how they grow.`,
      links: [
        { text: "Root Calculator", url: "/calculators/root-calculator" },
        { text: "Perfect Squares and Roots Table", url: "/tables/arithmetics/perfect-squares" }
      ],
    },
    irrational: {
      content: `Most numbers are not perfect squares and have irrational square roots. The red frame helps visualize these:
        
        For example, √7:
        • Lies between √4 = 2 and √9 = 3
        • The red frame shows exactly where it falls
        • You can see it's closer to √9 than to √4
        
        This helps understand why √7 ≈ 2.646:
        • It's more than 2.5 (halfway between 2 and 3)
        • The frame's position shows the exact decimal value`,
      links: [
        { text: "Root Calculator", url: "/calculators/root-calculator" },
        { text: "Perfect Squares and Roots Table", url: "/tables/arithmetics/perfect-squares" }
      ],
    }
  };

  const keyWords = [
    'square root',
    'rational root',
    'irrational root',
    'perfect squares',
    'non perfect square',
    'imperfect square',
  ];

  return {
    props: {
      explanationsRoots,
      keyWords
    },
    // Revalidate every 24 hours
    revalidate: 86400
  };
}