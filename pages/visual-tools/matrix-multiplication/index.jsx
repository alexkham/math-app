// import MyNavbar from '@/app/components/nav-bar/MyNavbar'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../pages.css'
// import MatrixMultiplication from '@/app/components/matrix-multiplication/MatrixMultiplication'
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'

// export default function MatrixMultiplicationPage() {
//   return (
//     <>
//     <MyNavbar></MyNavbar>
//     <br></br>
//     <br></br>
//     <br></br>
//     <Breadcrumb></Breadcrumb>
//     <h1 className='title'>Matrix Multiplication Animation </h1>
//     <MatrixMultiplication></MatrixMultiplication>

//     <ScrollUpButton></ScrollUpButton>    
//     </>
//   )
// }
import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react';
import '../../pages.css';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

const MyNavbar = dynamic(() => import('@/app/components/nav-bar/MyNavbar'), { ssr: false });
const ScrollUpButton = dynamic(() => import('@/app/components/scroll-up-button/ScrollUpButton'), { ssr: false });
const MatrixMultiplication = dynamic(() => import('@/app/components/matrix-multiplication/MatrixMultiplication'), { ssr: false });
const Breadcrumb = dynamic(() => import('@/app/components/breadcrumb/Breadcrumb'), { ssr: false });

export default function MatrixMultiplicationPage() {
  return (
    <>
      <Head>
        <title>Matrix Multiplication Animation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Interactive matrix multiplication animation tool. Visualize and understand matrix multiplication step by step." />
        <meta property="og:title" content="Matrix Multiplication Animation" />
        <meta property="og:description" content="Interactive matrix multiplication animation tool. Visualize and understand matrix multiplication step by step." />
        <meta property="og:url" content="https://learnmathclass.com/visual-tools/matrix-multiplication" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/images/matrix-multiplication-og.jpg" />
        <link rel="canonical" href="https://learnmathclass.com/visual-tools/matrix-multiplication" />
      </Head>
      <GenericNavbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <OperaSidebar 
      side='right'
      topOffset='65px' 
      sidebarWidth='45px'
      panelWidth='200px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
      <main className="container">
        <Breadcrumb />
        <h1 className="title">Matrix Multiplication Animation</h1>
        <MatrixMultiplication />
      </main>
      <ScrollUpButton />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}