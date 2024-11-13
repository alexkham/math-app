// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import React from 'react'
// import '../../pages.css'
// import generateQuadraticExplanations from '@/app/components/solvers/quadraticExplanations'
// import QuadraticSolver from '@/app/components/solvers/QuadraticSolver'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'

// export default function QuadraticEquationsSolverPage() {
//     const keyWords=[
//         "quadratic equations calculator",
//         "quadratic equations solver",
//        "quadrilateral equations",
//         "quadratic formula",
//         "quadratic calculator",
//         "quadratic solver"
//     ]
//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
    
//     <OperaSidebar 
//         side='right'
//         topOffset='65px' 
//         sidebarWidth='45px'
//         panelWidth='200px'
        
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'/> 
//     <Breadcrumb/>
//     <h1 className='title' style={{marginTop:'-30px',marginBottom:'-20px'}}>Quadratic Equations Solver</h1>
//     <div style={{
//   backgroundColor: '#f8f9fa',
//   padding: '12px',
//   borderRadius: '8px',
//   margin: '10px 0',
//   border: '1px solid #e9ecef',
//   fontSize: '0.85rem',
//   color: '#495057',
//   lineHeight: '1.4'
// }}>
//   <div style={{marginBottom: '8px', fontWeight: '500', color: '#212529'}}>
//     How to use our quadratic equations calculator and solver:
//   </div>
//   <ul style={{
//     listStyle: 'none',
//     margin: 0,
//     padding: 0
//   }}>
//     <li style={{marginBottom: '4px'}}>
//       • Input your quadratic formula coefficients for x², x and constant term
//     </li>
//     <li style={{marginBottom: '4px'}}>
//       • Use '+/-' buttons to toggle between positive/negative values
//     </li>
//     <li style={{marginBottom: '4px'}}>
//       • Empty fields are treated as zero in the quadratic equations
//     </li>
//     <li>
//       • Hit 'Solve' to get your complete solution
//     </li>
//   </ul>
// </div>
//     <div style={{transform:'scale(0.85)'}}>
//     <QuadraticSolver generateQuadraticExplanations={generateQuadraticExplanations}/>
//     </div>
//     <br/>
    
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>
    
    
//     </>
//   )
// }
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../pages.css'
import generateQuadraticExplanations from '@/app/components/solvers/quadraticExplanations'
import QuadraticSolver from '@/app/components/solvers/QuadraticSolver'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'

export default function QuadraticEquationsSolverPage() {
    const keyWords=[
        "quadratic equations calculator",
        "quadratic equations solver",
       "quadrilateral equations",
        "quadratic formula",
        "quadratic calculator",
        "quadratic solver"
    ]
  return (
    <>
    <Head>
        <title>Quadratic Equations Solver | Math Calculator</title>
        <meta name="description" content="Free online quadratic equation calculator and solver. Solve equations step by step, get full explanations." />
        <meta name="keywords" content={keyWords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.learnmathclass.com/calculators/quadratic-equations" />
    </Head>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <OperaSidebar 
        side='right'
        topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'/> 
    <Breadcrumb/>
    
    <h1 className='title' style={{marginTop:'-30px',marginBottom:'-20px'}}>Quadratic Equations Solver</h1>
    {/* <div style={{
        backgroundColor: '#f8f9fa',
        padding: '12px',
        borderRadius: '8px',
        margin: '10px 0',
        border: '1px solid #e9ecef',
        fontSize: '0.85rem',
        color: '#495057',
        lineHeight: '1.4'
    }}>
        <div style={{marginBottom: '8px', fontWeight: '500', color: '#212529'}}>
            How to use our quadratic equations calculator and solver:
        </div>
        <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0
        }}>
            <li style={{marginBottom: '4px'}}>
            • Input your quadratic formula coefficients for x², x and constant term
            </li>
            <li style={{marginBottom: '4px'}}>
            • Use '+/-' buttons to toggle between positive/negative values
            </li>
            <li style={{marginBottom: '4px'}}>
            • Empty fields are treated as zero in the quadratic equations
            </li>
            <li>
            • Hit 'Solve' to get your complete solution
            </li>
        </ul>
    </div> */}
{/* <div style={{ display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'15px',
    marginBottom:'-20px'}}>
<details style={{
    backgroundColor: '#fff',
    padding: '10px 25px',
    borderRadius: '12px',
    width: '300px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontSize: '0.9rem',
    color: '#333',
    border: '1px solid #eaeaea',
   marginTop:'5px',
    transition: 'all 0.3s ease',
    marginBottom:'-20px'
   
}}>
    <summary style={{
        cursor: 'pointer', 
        fontWeight: '600',
        color: '#2563eb',
        outline: 'none',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: '30px'  // SMALLER HEIGHT WHEN CLOSED
    }}>
        <span style={{
            backgroundColor: '#2563eb',
            color: 'white',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px'
        }}>?</span>
        How to use calculator
    </summary>
    <ul style={{
        listStyle: 'none',
        margin: '15px 0 0 0',
        padding: '0 0 0 30px'
    }}>
        <li style={{marginBottom: '8px', color: '#4b5563'}}>
            • Input your quadratic formula coefficients for x², x and constant term
        </li>
        <li style={{marginBottom: '8px', color: '#4b5563'}}>
            • Use '+/-' buttons to toggle between positive/negative values
        </li>
        <li style={{marginBottom: '8px', color: '#4b5563'}}>
            • Empty fields are treated as zero in the quadratic equations
        </li>
        <li style={{color: '#4b5563'}}>
            • Hit 'Solve' to get your complete solution
        </li>
    </ul>
</details>
</div> */}

<div style={{ display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'15px',
    marginBottom:'-20px'}}>
<details style={{
    backgroundColor: '#fff',
    padding: '10px 25px',
    borderRadius: '12px',
    width: '400px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontSize: '0.9rem',
    color: '#333',
    border: '1px solid #eaeaea',
    marginTop:'5px',
    transition: 'all 0.3s ease',
    marginBottom:'-20px'
}}>
    <summary style={{
        cursor: 'pointer', 
        fontWeight: '600',
        color: '#2563eb',
        outline: 'none',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: '30px'
    }}>
        <span style={{
            backgroundColor: '#2563eb',
            color: 'white',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px'
        }}>?</span>
        How to use this calculator
        <span style={{
            marginLeft: 'auto',
            fontSize: '18px',
            fontWeight: 'bold'
        }}>+</span>
    </summary>
    <ul style={{
        listStyle: 'none',
        margin: '15px 0 0 0',
        padding: '0 0 0 30px'
    }}>
        <li style={{marginBottom: '8px', color: '#4b5563'}}>
            • Input your quadratic formula coefficients for x², x and constant term
        </li>
        <li style={{marginBottom: '8px', color: '#4b5563'}}>
            • Use  <strong>+/-</strong>  buttons to toggle between positive/negative values
        </li>
        <li style={{marginBottom: '8px', color: '#4b5563'}}>
            • Empty fields are treated as zero in the quadratic equations
        </li>
        <li style={{color: '#4b5563'}}>
            • Hit  <strong>Solve</strong>  to get your complete solution
        </li>
    </ul>
</details>
</div>

    <div style={{transform:'scale(0.85)'}}>
        <QuadraticSolver generateQuadraticExplanations={generateQuadraticExplanations}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>
    </>
  )
}