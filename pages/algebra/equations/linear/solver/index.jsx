import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import LinearEquationSolver from '@/app/components/calculators/algebra/equations/LinearEquationSolver';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import React from 'react'
import '../../../../pages.css'

export default function LinearEquationSolverPage() {


  const keyWords=['linear equations','solving equations','solving linear equations',
    'graphing linear equations','algebra equations','solving equations with variables on both sides',
    'linear equations examples','solving equations online','solutions of linear equations',
    'linear equations examples','','']


    const linearEquationInstructions = {
        instructions: [
          "Enter any linear equation with one variable (x, y, z, etc.)",
          "Supports fractions: 2/3x + 1/4 = 5/6",
          "Supports decimals: 1.5x + 2.7 = 8.3", 
          "Supports parentheses: 3(x + 2) = 15",
          "Press Enter to solve or Escape to clear",
          "Use random generators for practice problems",
          "Click history items to reload previous equations",
          "View detailed step-by-step solutions"
        ],
        links: [
          {
            text: "Algebra Basics Tutorial",
            url: "/tutorials/algebra-basics"
          },
          {
            text: "Practice Problems",
            url: "/practice/linear-equations"
          }
        ],
        externalLinks: [
          {
            text: "Khan Academy - Linear Equations",
            url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-in-one-variable"
          },
          {
            text: "Math is Fun - Solving Equations",
            url: "https://www.mathsisfun.com/algebra/linear-equations.html"
          }
        ]
      };
  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <OperaSidebar 
            side='right'
            topOffset='55px' 
            sidebarWidth='45px'
            panelWidth='200px'
            iconColor='white'
            panelBackgroundColor='#f2f2f2'
          /> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Linear Equations Solver</h1>
    <br/>
    <LinearEquationSolver/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ScrollUpButton/>
    
    </>
  )
}
