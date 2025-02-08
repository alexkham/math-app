// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import MatrixGenerator from '@/app/components/matrices/MatrixGenerator'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react';
// import '../../pages.css'

// export default function MatrixTypesPage({  keyWords, matrixTypesExplanations}) {
//   return (
//     <>
//     <GenericNavbar/>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Breadcrumb/>
//      <OperaSidebar
//             side='right'
//             // topOffset='65px'
//             sidebarWidth='45px'
//             panelWidth='300px'
//             iconColor='white'
//             panelBackgroundColor='#f2f2f2'
//           />
//     <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Square Matrix Types Generator</h1>
   
//     <div style={{transform:'scale(0.95)'}}>
//     <MatrixGenerator explanations={matrixTypesExplanations}/>
//     </div>
//     <br/>
//     <br/>
//     <br/>
//     <ScrollUpButton/>

    
//     </>
//   )
// }

// export async function getStaticProps() {

//   const keyWords=[ 'matrix types', 'different types of matrices','kinds of matrix',
//     'identity matrix','zero matrix', 'diagonal matrix','symmetric matrix','skew symmetric matrix',
//     'scalar matrix', 'lower triangular matrix', 'upper triangular matrix'

//   ]


//   const matrixTypesExplanations = {
//     identity: {
//       description: "The identity matrix acts like the number 1 in multiplication - any matrix multiplied by identity stays unchanged. $I_n = \\begin{bmatrix} \\color{red}1 & 0 & 0 \\\\ 0 & \\color{red}1 & 0 \\\\ 0 & 0 & \\color{red}1 \\end{bmatrix}$.\n Just as 1 is the neutral element for multiplication of numbers, the identity matrix is the neutral element for matrix multiplication.",
//       properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
//       link: "https://en.wikipedia.org/wiki/Identity_matrix"
//     },
//     zero: {
//       description: "The zero matrix is the matrix equivalent of the number 0. Every entry is zero, making it the additive identity for matrices. $0 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$.\n Adding or subtracting a zero matrix from any matrix leaves the original matrix unchanged.",
//       properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
//       link: "https://en.wikipedia.org/wiki/Zero_matrix"
//     },
//     scalar: {
//       description: "A scalar matrix is an identity matrix multiplied by some number λ. It always takes the form: $\\begin{bmatrix} \\color{red}λ & 0 & 0 \\\\ 0 & \\color{red}λ & 0 \\\\ 0 & 0 & \\color{red}λ \\end{bmatrix}$ For example, when λ = 3: $\\begin{bmatrix} 3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$.\n These matrices commute with all other matrices of compatible size.",
//       properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
//       link: "https://en.wikipedia.org/wiki/Scalar_matrix"
//    },
//     diagonal: {
//       description: "A diagonal matrix has non-zero elements only on its main diagonal. All other entries must be 0: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ 0 & \\color{red}b & 0 \\\\ 0 & 0 & \\color{red}c \\end{bmatrix}$.\n These matrices are particularly easy to work with as operations like multiplication become simple element-wise operations on the diagonal.",
//       properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
//       link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
//     },
//     upperTriangular: {
//       description: "Upper triangular matrices have all entries below the main diagonal equal to 0. The entries above can be any number: $\\begin{bmatrix} \\color{red}a & \\color{red}b & \\color{red}c \\\\ 0 & \\color{red}d & \\color{red}e \\\\ 0 & 0 & \\color{red}f \\end{bmatrix}$.\n These matrices appear naturally in many matrix decomposition methods.",
//       properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
//       link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//     },
//     lowerTriangular: {
//       description: "Lower triangular matrices have all entries above the main diagonal equal to 0. The entries below can be any number: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ \\color{red}b & \\color{red}c & 0 \\\\ \\color{red}d & \\color{red}e & \\color{red}f \\end{bmatrix}$.\n These matrices are fundamental in LU decomposition and Gaussian elimination.",
//       properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
//       link: "https://en.wikipedia.org/wiki/Triangular_matrix"
//     },
//     symmetric: {
//       description: "A symmetric matrix is equal to its transpose - it mirrors across its main diagonal. If entry (i,j) is x, then entry (j,i) must also be x: $\\begin{bmatrix} a & \\color{red}b & \\color{blue}c \\\\ \\color{red}b & d & \\color{green}e \\\\ \\color{blue}c & \\color{green}e & f \\end{bmatrix}$.\n These matrices are crucial in optimization and quadratic forms. Notice how elements of the same color must be equal, showing the mirror property across the diagonal.",
//       properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
//       link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
//   },
//     skewSymmetric: {
//       description: "In a skew-symmetric matrix, each entry (i,j) equals the negative of entry (j,i). The main diagonal must be 0: $\\begin{bmatrix} 0 & \\color{red}a & \\color{red}b \\\\ \\color{red}{-a} & 0 & \\color{red}c \\\\ \\color{red}{-b} & \\color{red}{-c} & 0 \\end{bmatrix}$.\n These matrices represent rotations and angular velocities in physics.",
//       properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
//       link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
//     },
//     random: {
//       description: "A random matrix has entries chosen at random, often from a specific probability distribution. Here's an example: $\\begin{bmatrix} 3 & 7 & 2 \\\\ 5 & 1 & 9 \\\\ 4 & 6 & 8 \\end{bmatrix}$.\n These matrices are essential in statistical analysis, quantum mechanics, and machine learning, especially for initializing neural networks.",
//       properties: ["Testing", "Simulation", "Algorithm verification"],
//       link: null
//     }
//   };





//     return {
//         props: {
//             keyWords,
//             matrixTypesExplanations

         
//         },
//         // Revalidate every 24 hours
//         revalidate: 86400
//       };
    
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MatrixGenerator from '@/app/components/matrices/MatrixGenerator'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import Head from 'next/head'
import React from 'react';
import '../../pages.css'

export default function MatrixTypesPage({ keyWords, matrixTypesExplanations }) {
  const title = "Matrix Types Generator and Visualizer | Learn Math Class"
  const description = "Interactive matrix types visualizer and generator. Learn about identity, zero, scalar, diagonal, triangular, symmetric and skew-symmetric matrices with real-time visualization and examples."
  const canonicalUrl = "https://www.learnmathclass.com/visual-tools/matrix-types"

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keyWords.join(', ')} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Mobile viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": title,
              "description": description,
              "url": canonicalUrl,
              "publisher": {
                "@type": "Organization",
                "name": "Learn Math Class"
              },
              "educationalLevel": "Undergraduate",
              "keywords": keyWords.join(', '),
              "isAccessibleForFree": "true",
              "teaches": "Matrix Types in Linear Algebra"
            })
          }}
        />
      </Head>

      <GenericNavbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Breadcrumb/>
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='300px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Square Matrix Types Generator</h1>
     
      <div style={{transform:'scale(0.95)'}}>
        <MatrixGenerator explanations={matrixTypesExplanations}/>
      </div>
      <br/>
      <br/>
      <br/>
      <ScrollUpButton/>
    </>
  )
}

export async function getStaticProps() {
  const keyWords = [
    'matrix types', 'different types of matrices', 'kinds of matrix',
    'identity matrix', 'zero matrix', 'diagonal matrix', 'symmetric matrix', 'skew symmetric matrix',
    'scalar matrix', 'lower triangular matrix', 'upper triangular matrix'
  ]

   const matrixTypesExplanations = {
    identity: {
      description: "The identity matrix acts like the number 1 in multiplication - any matrix multiplied by identity stays unchanged. $I_n = \\begin{bmatrix} \\color{red}1 & 0 & 0 \\\\ 0 & \\color{red}1 & 0 \\\\ 0 & 0 & \\color{red}1 \\end{bmatrix}$.\n Just as 1 is the neutral element for multiplication of numbers, the identity matrix is the neutral element for matrix multiplication.",
      properties: ["Multiplicative identity", "Eigenvalues = 1", "Determinant = 1"],
      link: "https://en.wikipedia.org/wiki/Identity_matrix"
    },
    zero: {
      description: "The zero matrix is the matrix equivalent of the number 0. Every entry is zero, making it the additive identity for matrices. $0 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$.\n Adding or subtracting a zero matrix from any matrix leaves the original matrix unchanged.",
      properties: ["Additive identity", "Eigenvalues = 0", "Rank = 0"],
      link: "https://en.wikipedia.org/wiki/Zero_matrix"
    },
    scalar: {
      description: "A scalar matrix is an identity matrix multiplied by some number λ. It always takes the form: $\\begin{bmatrix} \\color{red}λ & 0 & 0 \\\\ 0 & \\color{red}λ & 0 \\\\ 0 & 0 & \\color{red}λ \\end{bmatrix}$ For example, when λ = 3: $\\begin{bmatrix} 3 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix}$.\n These matrices commute with all other matrices of compatible size.",
      properties: ["$λI$ form", "Commutes with all matrices", "Eigenvalues = $λ$"],
      link: "https://en.wikipedia.org/wiki/Scalar_matrix"
   },
    diagonal: {
      description: "A diagonal matrix has non-zero elements only on its main diagonal. All other entries must be 0: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ 0 & \\color{red}b & 0 \\\\ 0 & 0 & \\color{red}c \\end{bmatrix}$.\n These matrices are particularly easy to work with as operations like multiplication become simple element-wise operations on the diagonal.",
      properties: ["Simple operations", "Eigenvalues are diagonal elements", "Easy determinant"],
      link: "https://en.wikipedia.org/wiki/Diagonal_matrix"
    },
    upperTriangular: {
      description: "Upper triangular matrices have all entries below the main diagonal equal to 0. The entries above can be any number: $\\begin{bmatrix} \\color{red}a & \\color{red}b & \\color{red}c \\\\ 0 & \\color{red}d & \\color{red}e \\\\ 0 & 0 & \\color{red}f \\end{bmatrix}$.\n These matrices appear naturally in many matrix decomposition methods.",
      properties: ["Determinant = product of diagonal", "Upper entries free", "Lower entries = 0"],
      link: "https://en.wikipedia.org/wiki/Triangular_matrix"
    },
    lowerTriangular: {
      description: "Lower triangular matrices have all entries above the main diagonal equal to 0. The entries below can be any number: $\\begin{bmatrix} \\color{red}a & 0 & 0 \\\\ \\color{red}b & \\color{red}c & 0 \\\\ \\color{red}d & \\color{red}e & \\color{red}f \\end{bmatrix}$.\n These matrices are fundamental in LU decomposition and Gaussian elimination.",
      properties: ["Determinant = product of diagonal", "Lower entries free", "Upper entries = 0"],
      link: "https://en.wikipedia.org/wiki/Triangular_matrix"
    },
    symmetric: {
      description: "A symmetric matrix is equal to its transpose - it mirrors across its main diagonal. If entry (i,j) is x, then entry (j,i) must also be x: $\\begin{bmatrix} a & \\color{red}b & \\color{blue}c \\\\ \\color{red}b & d & \\color{green}e \\\\ \\color{blue}c & \\color{green}e & f \\end{bmatrix}$.\n These matrices are crucial in optimization and quadratic forms. Notice how elements of the same color must be equal, showing the mirror property across the diagonal.",
      properties: ["$A = A^T$", "Real eigenvalues", "Orthogonal eigenvectors"],
      link: "https://en.wikipedia.org/wiki/Symmetric_matrix"
  },
    skewSymmetric: {
      description: "In a skew-symmetric matrix, each entry (i,j) equals the negative of entry (j,i). The main diagonal must be 0: $\\begin{bmatrix} 0 & \\color{red}a & \\color{red}b \\\\ \\color{red}{-a} & 0 & \\color{red}c \\\\ \\color{red}{-b} & \\color{red}{-c} & 0 \\end{bmatrix}$.\n These matrices represent rotations and angular velocities in physics.",
      properties: ["$A = -A^T$", "Diagonal = 0", "Pure imaginary eigenvalues"],
      link: "https://en.wikipedia.org/wiki/Skew-symmetric_matrix"
    },
    random: {
      description: "A random matrix has entries chosen at random, often from a specific probability distribution. Here's an example: $\\begin{bmatrix} 3 & 7 & 2 \\\\ 5 & 1 & 9 \\\\ 4 & 6 & 8 \\end{bmatrix}$.\n These matrices are essential in statistical analysis, quantum mechanics, and machine learning, especially for initializing neural networks.",
      properties: ["Testing", "Simulation", "Algorithm verification"],
      link: null
    }
  };

  return {
    props: {
      keyWords,
      matrixTypesExplanations
    },
    revalidate: 86400
  };
}