import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import '../../../pages.css'
import CoOccurrenceMatrix from '@/app/components/matrices/CoOccurenceMatrix'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Explanations from '@/app/components/Explanations'
import { processContent } from '@/app/utils/contentProcessor'
import Sections from '@/app/components/page-components/section/Sections'
import MyList from '@/app/components/page-components/lists/MyList'
import MathContainer from '@/app/components/math-content/MathContainer'
import katex from "katex";


const renderLatex = (latex) => {
    return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: true,
    });
};


export default function MatrixTypesPage({ 
    identityRelationships,
    zeroRelationships,
    scalarRelationships,
    diagonalRelationships,
    symmetricRelationships,
    skewSymmetricRelationships,
    upperTriangularRelationships ,
    lowerTriangularRelationships,
    zeroMatrix
}) {

   

    // const identityRelationships = [
    //     `✅ **Always Identity**: The identity matrix is itself by definition - this is not a relationship but a self-evident fact since $I$ consists of 1s on diagonal and 0s elsewhere`,
    //     `❌ **Can never be Zero**: The identity matrix must have 1s on its diagonal, while the zero matrix must have all elements as 0, making it impossible for an identity matrix to be a zero matrix`,
    //     `✅ **Is a Scalar Matrix**: Since a scalar matrix has form $kI$ where $k$ is a constant, identity matrix is simply a scalar matrix where $k=1$`,
    //     `✅ **Always Diagonal**: By definition, identity matrix has all off-diagonal elements as 0, which is exactly what makes a matrix diagonal`,
    //     `✅ **Is Symmetric**: An identity matrix satisfies $I^T = I$ since reflecting across diagonal doesn't change 1s and 0s positions`,
    //     `❌ **Cannot be Skew-symmetric**: A skew-symmetric matrix requires $a_{ij} = -a_{ji}$ and diagonal elements must be 0, but identity has 1s on diagonal`,
    //     `✅ **Is Upper/Lower Triangular**: Since all elements below AND above main diagonal are 0, identity matrix satisfies both upper and lower triangular definitions simultaneously`
    //   ];


    //   const zeroRelationships = [
    //     `❌ **Never Identity**: A zero matrix has all elements as 0, while identity matrix requires 1s on the diagonal`,
    //     `✅ **Always Zero**: By definition, all elements are 0`,
    //     `✅ **Is Scalar**: Zero matrix is a special case of scalar matrix where $k=0$`,
    //     `✅ **Is Diagonal**: All off-diagonal elements are 0, satisfying diagonal matrix definition`,
    //     `✅ **Is Symmetric**: Reflecting zero matrix across diagonal still gives all zeros, so $O^T = O$`,
    //     `✅ **Is Skew-symmetric**: Zero matrix satisfies $a_{ij} = -a_{ji}$ since $0 = -0$`,
    //     `✅ **Is Upper/Lower Triangular**: All elements above and below diagonal are 0, satisfying both triangular definitions`
    //   ];
      
    //   const scalarRelationships = [
    //     `❔ **May Be Identity**: A scalar matrix becomes identity when $k=1$`,
    //     `❔ **May Be Zero**: A scalar matrix becomes zero matrix when $k=0$`,
    //     `✅ **Always Scalar**: By definition, it has same value $k$ on main diagonal and 0s elsewhere`,
    //     `✅ **Always Diagonal**: All off-diagonal elements are 0, making it diagonal by definition`,
    //     `✅ **Is Symmetric**: Since $a_{ij} = a_{ji} = 0$ for all $i \\neq j$, and diagonal elements are equal`,
    //     `❔ **May Be Skew-symmetric**: Only becomes skew-symmetric when $k=0$ (zero matrix case)`,
    //     `✅ **Is Upper/Lower Triangular**: All elements below and above diagonal are 0, satisfying both triangular definitions`
    //    ];

    //   const diagonalRelationships = [
    //     `❔ **May Be Identity**: Becomes identity matrix when all diagonal entries are 1`,
    //     `❔ **May Be Zero**: Becomes zero matrix when all diagonal entries are 0`,
    //     `❔ **May Be Scalar**: Becomes scalar matrix when all diagonal entries are equal`,
    //     `✅ **Always Diagonal**: By definition, all off-diagonal elements are 0`,
    //     `✅ **Is Symmetric**: Since $a_{ij} = a_{ji} = 0$ for all $i \\neq j$`,
    //     `❔ **May Be Skew-symmetric**: Only when all diagonal entries are 0 (zero matrix case)`,
    //     `✅ **Is Upper/Lower Triangular**: All elements below and above diagonal are 0`
    //   ];

    //   const symmetricRelationships = [
    //     `❔ **May Be Identity**: Only when it's a 1-diagonal matrix`,
    //     `❔ **May Be Zero**: Only when all elements are 0`,
    //     `❔ **May Be Scalar**: Only when all off-diagonal elements are 0 and diagonal elements are equal`,
    //     `❔ **May Be Diagonal**: Only when all off-diagonal elements are 0`,
    //     `✅ **Always Symmetric**: By definition, $a_{ij} = a_{ji}$ for all $i,j$`,
    //     `❔ **May Be Skew-symmetric**: Only when all elements are 0 (zero matrix case)`,
    //     `❔ **May Be Upper/Lower Triangular**: Only when all off-diagonal elements are 0`
    //    ];


    //    const skewSymmetricRelationships = [
    //     `❌ **Never Identity**: Cannot have 1s on diagonal since diagonal elements must be 0`,
    //     `❔ **May Be Zero**: When all elements are 0`,
    //     `❔ **May Be Scalar**: Only when $k=0$ (zero matrix case)`,
    //     `❔ **May Be Diagonal**: Only when all elements are 0`,
    //     `❔ **May Be Symmetric**: Only when all elements are 0`,
    //     `✅ **Always Skew-symmetric**: By definition, $a_{ij} = -a_{ji}$ and diagonal elements = 0`,
    //     `❔ **May Be Upper/Lower Triangular**: Only when all elements are 0`
    //   ];

    //   const upperTriangularRelationships = [
    //     `❔ **May Be Identity**: Only when diagonal elements are 1 and upper elements are 0`,
    //     `❔ **May Be Zero**: Only when all elements are 0`,
    //     `❔ **May Be Scalar**: Only when upper elements are 0 and diagonal elements are equal`,
    //     `❔ **May Be Diagonal**: Only when all upper elements are 0`,
    //     `❔ **May Be Symmetric**: Only when all upper elements match corresponding lower elements (which are 0)`,
    //     `❔ **May Be Skew-symmetric**: Only when all elements are 0`,
    //     `✅ **Always Upper Triangular**: By definition, all elements below diagonal are 0`,
    //     `❌ **Never Lower Triangular**: Unless all non-diagonal elements are 0 (diagonal matrix case)`
    //    ];

    //    const lowerTriangularRelationships = [
    //     `❔ **May Be Identity**: Only when diagonal elements are 1 and lower elements are 0`,
    //     `❔ **May Be Zero**: Only when all elements are 0`,
    //     `❔ **May Be Scalar**: Only when lower elements are 0 and diagonal elements are equal`,
    //     `❔ **May Be Diagonal**: Only when all lower elements are 0`,
    //     `❔ **May Be Symmetric**: Only when all lower elements match corresponding upper elements (which are 0)`,
    //     `❔ **May Be Skew-symmetric**: Only when all elements are 0`,
    //     `❌ **Never Upper Triangular**: Unless all non-diagonal elements are 0 (diagonal matrix case)`,
    //     `✅ **Always Lower Triangular**: By definition, all elements above diagonal are 0`
    //    ];


    const typesSections = [
        {
            id: `identity`,
            title: `Identity Matrix`,
            content: [
                `Matrix where $a_{ij} = 1$ if $i = j$ and $a_{ij} = 0$ if $i \\neq j$ $ \\begin{pmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{pmatrix} $`,
                <MyList data={identityRelationships}
                key={1}/>
            ]
        },
        {
            id: `zero`,
            title: `Zero Matrix`,
            content: [
                // `Matrix where $a_{ij} = 0$ for all $i,j$ ${String.raw`\begin{pmatrix} 0 & 0 & \cdots & 0 \\ 0 & 0 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 0 \end{pmatrix}`}`
                <div key={10} dangerouslySetInnerHTML={{ __html: renderLatex("Matrix where $a_{ij} = 0$ for all $i,j$ $ \\begin{pmatrix} 0 & 0 & \\cdots & 0 \\\\ 0 & 0 & \\cdots & 0 \\end{pmatrix} $") }} />,
                `Matrix where $a_{ij} = 0$ for all $i,j$ $ \\begin{pmatrix} 0 & 0 & \\cdots & 0 \\\\ 0 & 0 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 0 \\end{pmatrix} $`,
                <span style={{ display: "none" }} key="dummy"></span> ,
            //    <MathContainer content={zeroMatrix} key={1}/>,
            // `$\\begin{pmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{pmatrix}$`,
//             `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">
//   <!-- Parentheses -->
//   <path d="M 8 5 Q 6 15 8 25" fill="none" stroke="black" stroke-width="0.3"/>
//   <path d="M 32 5 Q 34 15 32 25" fill="none" stroke="black" stroke-width="0.3"/>
  
//   <!-- First row -->
//   <text x="12" y="10" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
//   <text x="18" y="10" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
//   <text x="24" y="10" font-family="Times New Roman" font-size="4" text-anchor="middle">⋯</text>
//   <text x="28" y="10" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
  
//   <!-- Second row -->
//   <text x="12" y="15" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
//   <text x="18" y="15" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
//   <text x="24" y="15" font-family="Times New Roman" font-size="4" text-anchor="middle">⋯</text>
//   <text x="28" y="15" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
  
//   <!-- Vertical dots -->
//   <text x="12" y="20" font-family="Times New Roman" font-size="4" text-anchor="middle">⋮</text>
//   <text x="18" y="20" font-family="Times New Roman" font-size="4" text-anchor="middle">⋮</text>
//   <text x="24" y="20" font-family="Times New Roman" font-size="4" text-anchor="middle">⋱</text>
//   <text x="28" y="20" font-family="Times New Roman" font-size="4" text-anchor="middle">⋮</text>
  
//   <!-- Last row -->
//   <text x="12" y="25" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
//   <text x="18" y="25" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
//   <text x="24" y="25" font-family="Times New Roman" font-size="4" text-anchor="middle">⋯</text>
//   <text x="28" y="25" font-family="Times New Roman" font-size="4" text-anchor="middle">0</text>
// </svg>`,
                <MyList data={zeroRelationships}
                key={2}/>
            ]
        },
     
        {
            id: `scalar`,
            title: `Scalar Matrix`,
            content: [
                `Matrix where $a_{ij} = k$ if $i = j$ and $a_{ij} = 0$ if $i \\neq j$ $ \\begin{pmatrix} k & 0 & \\cdots & 0 \\\\ 0 & k & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & k \\end{pmatrix} $`,
                <MyList  data={scalarRelationships}
                key={3}/>
            ]
        },
        {
            id: `diagonal`,
            title: `Diagonal Matrix`,
            content: [
                `Matrix where $a_{ij} = 0$ for all $i \\neq j$ $\\begin{pmatrix} d_1 & 0 & \\cdots & 0 \\\\ 0 & d_2 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & d_n \\end{pmatrix} $`,
                <MyList data={diagonalRelationships}
                key={4}/>
            ]
        },
        {
            id: `symmetric`,
            title: `Symmetric Matrix`,
            content: [
                `Matrix where $a_{ij} = a_{ji}$ for all $i,j$ $\\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{12} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{1n} & a_{2n} & \\cdots & a_{nn} \\end{pmatrix} $`,
                <MyList data={symmetricRelationships}
                key={5}/>
            ]
        },
        {
            id: `skew-symmetric`,
            title: `Skew-Symmetric Matrix`,
            content: [
                `Matrix where $a_{ij} = -a_{ji}$ for all $i,j$ $\\begin{pmatrix} 0 & a_{12} & \\cdots & a_{1n} \\\\ -a_{12} & 0 & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ -a_{1n} & -a_{2n} & \\cdots & 0 \\end{pmatrix} $`,
                <MyList data={skewSymmetricRelationships}
                key={6}/>
            ]
        },
        {
            id: `upper_triangular`,
            title: `Upper Triangular Matrix`,
            content: [
                `Matrix where $a_{ij} = 0$ for all $i > j$ $\\begin{pmatrix} u_{11} & u_{12} & \\cdots & u_{1n} \\\\ 0 & u_{22} & \\cdots & u_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & u_{nn} \\end{pmatrix} $`,
                <MyList data={upperTriangularRelationships}
                key={7}/>
            ]
        },
        {
            id: `lower_triangular`,
            title: `Lower Triangular Matrix`,
            content: [
                `Matrix where $a_{ij} = 0$ for all $i < j$ $\\begin{pmatrix} l_{11} & 0 & \\cdots & 0 \\\\ l_{21} & l_{22} & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ l_{n1} & l_{n2} & \\cdots & l_{nn} \\end{pmatrix} $`,
                <MyList data={lowerTriangularRelationships}
                key={8}/>
            ]
        }
    ]
   
  return (
   <>
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
   <OperaSidebar 
              side='right'
             //  topOffset='55px' 
              sidebarWidth='45px'
              panelWidth='300px'
              iconColor='white'
              panelBackgroundColor='#f2f2f2'
            /> 
   
   <Breadcrumb/>
   <br/>
   <br/>
   <br/>
 
  
  <h1 className='title' style={{marginTop:'-30px',marginBottom:'-70px'}}>Square Matrices Types</h1>


<div style={{
  display: 'flex',
  alignItems: 'start',
  position: 'relative',
  width: '100%',
  
}}> 
<div style={{transform:'scale(0.95)',marginLeft:'-50px'}}>
  <CoOccurrenceMatrix/>   
  </div>  
  <span style={{
    padding: '16px',
    fontSize: '14px',
    lineHeight: '20px',
    backgroundColor: 'rgb(239 246 255)',
    color: 'rgb(30 64 175)',
    borderRadius: '8px',
    position: 'absolute',
    right: '70px',
    top: '160px'  // This aligns with the matrix header level
  }}>
   {processContent(`This table shows reciprocal \n relations between different types of \nsquare matrices.\n Click on Types of matricfes \nto see detailed explanations`)}
  </span>      
</div>
<br/>
<div style={{width:'100%'}}>
<Sections  sections={typesSections} leftMargin='50px'/>
</div>

  
  
  


  <br/>
  <br/>
  <ScrollUpButton/>
   </>
  )
}


export async function getStaticProps(){

    const zeroMatrix=`Matrix where $a_{ij} = 0$ for all $i,j$ $ \\begin{pmatrix} 0 & 0 & \\cdots & 0 \\\\ 0 & 0 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 0 \\end{pmatrix} $`

    const identityRelationships = [
        `✅ **Always Identity**: The identity matrix is itself by definition - this is not a relationship but a self-evident fact since $I$ consists of 1s on diagonal and 0s elsewhere`,
        `❌ **Can never be Zero**: The identity matrix must have 1s on its diagonal, while the zero matrix must have all elements as 0, making it impossible for an identity matrix to be a zero matrix`,
        `✅ **Is a Scalar Matrix**: Since a scalar matrix has form $kI$ where $k$ is a constant, identity matrix is simply a scalar matrix where $k=1$`,
        `✅ **Always Diagonal**: By definition, identity matrix has all off-diagonal elements as 0, which is exactly what makes a matrix diagonal`,
        `✅ **Is Symmetric**: An identity matrix satisfies $I^T = I$ since reflecting across diagonal doesn't change 1s and 0s positions`,
        `❌ **Cannot be Skew-symmetric**: A skew-symmetric matrix requires $a_{ij} = -a_{ji}$ and diagonal elements must be 0, but identity has 1s on diagonal`,
        `✅ **Is Upper/Lower Triangular**: Since all elements below AND above main diagonal are 0, identity matrix satisfies both upper and lower triangular definitions simultaneously`
      ];


      const zeroRelationships = [
        `❌ **Never Identity**: A zero matrix has all elements as 0, while identity matrix requires 1s on the diagonal`,
        `✅ **Always Zero**: By definition, all elements are 0`,
        `✅ **Is Scalar**: Zero matrix is a special case of scalar matrix where $k=0$`,
        `✅ **Is Diagonal**: All off-diagonal elements are 0, satisfying diagonal matrix definition`,
        `✅ **Is Symmetric**: Reflecting zero matrix across diagonal still gives all zeros, so $O^T = O$`,
        `✅ **Is Skew-symmetric**: Zero matrix satisfies $a_{ij} = -a_{ji}$ since $0 = -0$`,
        `✅ **Is Upper/Lower Triangular**: All elements above and below diagonal are 0, satisfying both triangular definitions`
      ];
      
      const scalarRelationships = [
        `❔ **May Be Identity**: A scalar matrix becomes identity when $k=1$`,
        `❔ **May Be Zero**: A scalar matrix becomes zero matrix when $k=0$`,
        `✅ **Always Scalar**: By definition, it has same value $k$ on main diagonal and 0s elsewhere`,
        `✅ **Always Diagonal**: All off-diagonal elements are 0, making it diagonal by definition`,
        `✅ **Is Symmetric**: Since $a_{ij} = a_{ji} = 0$ for all $i \\neq j$, and diagonal elements are equal`,
        `❔ **May Be Skew-symmetric**: Only becomes skew-symmetric when $k=0$ (zero matrix case)`,
        `✅ **Is Upper/Lower Triangular**: All elements below and above diagonal are 0, satisfying both triangular definitions`
       ];

      const diagonalRelationships = [
        `❔ **May Be Identity**: Becomes identity matrix when all diagonal entries are 1`,
        `❔ **May Be Zero**: Becomes zero matrix when all diagonal entries are 0`,
        `❔ **May Be Scalar**: Becomes scalar matrix when all diagonal entries are equal`,
        `✅ **Always Diagonal**: By definition, all off-diagonal elements are 0`,
        `✅ **Is Symmetric**: Since $a_{ij} = a_{ji} = 0$ for all $i \\neq j$`,
        `❔ **May Be Skew-symmetric**: Only when all diagonal entries are 0 (zero matrix case)`,
        `✅ **Is Upper/Lower Triangular**: All elements below and above diagonal are 0`
      ];

      const symmetricRelationships = [
        `❔ **May Be Identity**: Only when it's a 1-diagonal matrix`,
        `❔ **May Be Zero**: Only when all elements are 0`,
        `❔ **May Be Scalar**: Only when all off-diagonal elements are 0 and diagonal elements are equal`,
        `❔ **May Be Diagonal**: Only when all off-diagonal elements are 0`,
        `✅ **Always Symmetric**: By definition, $a_{ij} = a_{ji}$ for all $i,j$`,
        `❔ **May Be Skew-symmetric**: Only when all elements are 0 (zero matrix case)`,
        `❔ **May Be Upper/Lower Triangular**: Only when all off-diagonal elements are 0`
       ];


       const skewSymmetricRelationships = [
        `❌ **Never Identity**: Cannot have 1s on diagonal since diagonal elements must be 0`,
        `❔ **May Be Zero**: When all elements are 0`,
        `❔ **May Be Scalar**: Only when $k=0$ (zero matrix case)`,
        `❔ **May Be Diagonal**: Only when all elements are 0`,
        `❔ **May Be Symmetric**: Only when all elements are 0`,
        `✅ **Always Skew-symmetric**: By definition, $a_{ij} = -a_{ji}$ and diagonal elements = 0`,
        `❔ **May Be Upper/Lower Triangular**: Only when all elements are 0`
      ];

      const upperTriangularRelationships = [
        `❔ **May Be Identity**: Only when diagonal elements are 1 and upper elements are 0`,
        `❔ **May Be Zero**: Only when all elements are 0`,
        `❔ **May Be Scalar**: Only when upper elements are 0 and diagonal elements are equal`,
        `❔ **May Be Diagonal**: Only when all upper elements are 0`,
        `❔ **May Be Symmetric**: Only when all upper elements match corresponding lower elements (which are 0)`,
        `❔ **May Be Skew-symmetric**: Only when all elements are 0`,
        `✅ **Always Upper Triangular**: By definition, all elements below diagonal are 0`,
        `❌ **Never Lower Triangular**: Unless all non-diagonal elements are 0 (diagonal matrix case)`
       ];

       const lowerTriangularRelationships = [
        `❔ **May Be Identity**: Only when diagonal elements are 1 and lower elements are 0`,
        `❔ **May Be Zero**: Only when all elements are 0`,
        `❔ **May Be Scalar**: Only when lower elements are 0 and diagonal elements are equal`,
        `❔ **May Be Diagonal**: Only when all lower elements are 0`,
        `❔ **May Be Symmetric**: Only when all lower elements match corresponding upper elements (which are 0)`,
        `❔ **May Be Skew-symmetric**: Only when all elements are 0`,
        `❌ **Never Upper Triangular**: Unless all non-diagonal elements are 0 (diagonal matrix case)`,
        `✅ **Always Lower Triangular**: By definition, all elements above diagonal are 0`
       ];



    return{
        props:{
            identityRelationships,
            zeroRelationships,
            scalarRelationships,
            diagonalRelationships,
            symmetricRelationships,
            skewSymmetricRelationships,
            upperTriangularRelationships ,
            lowerTriangularRelationships,
            zeroMatrix


        }

    }
}
