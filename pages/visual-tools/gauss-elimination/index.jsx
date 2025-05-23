
import React from 'react';
import Head from 'next/head';

import GaussJordanCalculator from '@/app/components/matrix-multiplication/GaussJordanCalculator';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import '../../pages.css';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

export default function GaussianEliminationCalculatorPage() {
  return (
    <>
      <Head>
        <title>Gaussian Elimination Calculator | Solve Matrix Equations</title>
        <meta name="description" content="Use our free Gaussian elimination calculator to solve matrix equations, systems of linear equations, and perform Gauss-Jordan elimination. Step-by-step solutions provided." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.learnmathclass.com/visual-tools/gauss-elimination" />
        <meta name="keywords" content="solve matrix equation, matrix equation calculator, solve a system of equations, gauss jordan elimination calculator, solve matrix calculator, solving a linear equation calculator, solving a system of linear equations calculator, gaussian elimination calculator, solve system of equations matrix calculator, echelon method calculator" />
      </Head>

    <GenericNavbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <OperaSidebar 
      side='right'
      topOffset='55px' 
      sidebarWidth='45px'
      panelWidth='200px'
      
      iconColor='white'
      panelBackgroundColor='#f2f2f2'/> 
      <Breadcrumb></Breadcrumb>

      <main className="container">
        <h1 className="title" style={{marginBottom:'-20px',marginTop:'-20px'}}>Gaussian Elimination Calculator</h1>
        
        <section aria-label="Matrix Equation Solver">
          <h2 className='title' style={{marginBottom:'0px'}}>Solve Systems of Linear Equations</h2>
         
          <GaussJordanCalculator />
        </section>
        <br></br>
        <br></br>
        <br></br>

        <section aria-label="Additional Information">
          <h2>About Matrix Equation Solving</h2>
          <p>Gaussian elimination is a powerful method for solving systems of linear equations and matrix equations. It is also known as row reduction or the echelon method. Our calculator can handle various tasks, including:</p>
          <ul>
            <li>Solving matrix equations</li>
            <li>Performing Gauss-Jordan elimination</li>
            <li>Finding solutions to systems of linear equations</li>
            <li>Converting matrices to row echelon form</li>
            <li>Calculating inverse matrices (where applicable)</li>
          </ul>
          <p>Whether you are a student learning linear algebra or a professional working with matrix calculations, our tool simplifies the process and provides clear, step-by-step explanations.</p>
        </section>

        <ScrollUpButton />
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .title {
          text-align: center;
          margin: 2rem 0;
        }
        h2 {
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        ul {
          padding-left: 20px;
        }
        @media (max-width: 768px) {
          .title {
            font-size: 1.5rem;
            margin: 1rem 0;
          }
          h2 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}