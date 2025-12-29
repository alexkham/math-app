
// // import Head from 'next/head';
// // import dynamic from 'next/dynamic';
// // import React from 'react';
// // import '../../pages.css';
// // import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';

// // const MyNavbar = dynamic(() => import('@/app/components/nav-bar/MyNavbar'), { ssr: false });
// // const ScrollUpButton = dynamic(() => import('@/app/components/scroll-up-button/ScrollUpButton'), { ssr: false });
// // const MatrixMultiplication = dynamic(() => import('@/app/components/matrix-multiplication/MatrixMultiplication'), { ssr: false });
// // const Breadcrumb = dynamic(() => import('@/app/components/breadcrumb/Breadcrumb'), { ssr: false });

// // export default function MatrixMultiplicationPage() {
// //   return (
// //     <>
// //       <Head>
// //         <title>Matrix Multiplication Animation</title>
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <meta name="description" content="Interactive matrix multiplication animation tool. Visualize and understand matrix multiplication step by step." />
// //         <meta property="og:title" content="Matrix Multiplication Animation" />
// //         <meta property="og:description" content="Interactive matrix multiplication animation tool. Visualize and understand matrix multiplication step by step." />
// //         <meta property="og:url" content="https://www.learnmathclass.com/visual-tools/matrix-multiplication" />
// //         <meta property="og:type" content="website" />
     
// //         <link rel="canonical" href="https://www.learnmathclass.com/visual-tools/matrix-multiplication" />
// //       </Head>
// //       {/* <GenericNavbar/> */}
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <OperaSidebar 
// //       side='right'
// //       topOffset='65px' 
// //       sidebarWidth='45px'
// //       panelWidth='200px'
      
// //       iconColor='white'
// //       panelBackgroundColor='#f2f2f2'/> 
// //       <main className="container">
// //         <Breadcrumb />
// //         <h1 className="title">Matrix Multiplication Animation</h1>
// //         <MatrixMultiplication />
// //       </main>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>
// //       {/* <ScrollUpButton /> */}
// //     </>
// //   );
// // }

// // export async function getStaticProps() {
// //   return {
// //     props: {},
// //   };
// // }



// import Head from 'next/head';
// import dynamic from 'next/dynamic';
// import React from 'react';
// import '../../pages.css';
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
// import Sections from '@/app/components/page-components/section/Sections';
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

// // const MyNavbar = dynamic(() => import('@/app/components/nav-bar/MyNavbar'), { ssr: false });
// // const ScrollUpButton = dynamic(() => import('@/app/components/scroll-up-button/ScrollUpButton'), { ssr: false });
// const MatrixMultiplication = dynamic(() => import('@/app/components/matrix-multiplication/MatrixMultiplication'), { ssr: false });
// const Breadcrumb = dynamic(() => import('@/app/components/breadcrumb/Breadcrumb'), { ssr: false });

// export async function getStaticProps() {
  
//   const keyWords = [
//     'matrix multiplication visualizer',
//     'matrix multiplication calculator',
//     'interactive matrix multiplication',
//     'matrix multiplication step by step',
//     'matrix multiplication animation',
//     'dot product visualization',
//     'matrix calculator',
//     'multiply matrices',
//     'matrix multiplication tool',
//     'linear algebra calculator',
//     'matrix operations',
//     'matrix multiplication explained',
//     'visual matrix multiplication',
//     'matrix multiplication online',
//     'free matrix calculator'
//   ]

//   const sectionsContent = {
//     obj1: {
//       title: `What is Matrix Multiplication?`,
//       content: `Matrix multiplication is a fundamental operation in **linear algebra** that combines two matrices to produce a third matrix. Unlike element-wise multiplication, matrix multiplication follows specific rules where each element in the result is computed as the **dot product** of a row from the first matrix and a column from the second matrix.

// The operation is written as $C = A \\times B$, where matrix $A$ has dimensions $m \\times n$ and matrix $B$ has dimensions $n \\times p$, producing a result matrix $C$ with dimensions $m \\times p$. Each element $C[i][j]$ represents the sum of products between row $i$ of matrix $A$ and column $j$ of matrix $B$.

// Matrix multiplication appears throughout mathematics, physics, computer graphics, data science, and machine learning. Understanding how it works visually helps build intuition for more advanced **linear algebra concepts**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj2: {
//       title: `Matrix Multiplication Rules`,
//       content: `Matrix multiplication has strict dimensional requirements that must be satisfied:

// **Compatibility Rule**: The number of columns in the first matrix must equal the number of rows in the second matrix. If matrix $A$ is $m \\times n$ and matrix $B$ is $p \\times q$, multiplication $A \\times B$ is only possible when $n = p$.

// **Result Dimensions**: The resulting matrix takes the number of rows from the first matrix and the number of columns from the second matrix. So $A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}$.

// **Non-Commutative**: Matrix multiplication is not commutative, meaning $A \\times B \\neq B \\times A$ in general. The order matters critically.

// **Associative**: Multiplication is associative: $(A \\times B) \\times C = A \\times (B \\times C)$.

// Our visualizer checks these rules automatically and displays an error if matrices cannot be multiplied due to incompatible dimensions.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj3: {
//       title: `The Dot Product Method`,
//       content: `Each element in the result matrix is calculated using the **dot product** between a row and a column:

// **Formula**: For element $C[i][j]$, calculate:

// $$C[i][j] = \\sum_{k=1}^{n} A[i][k] \\times B[k][j]$$

// **Step-by-step process**:

// 1. Take row $i$ from matrix $A$: [$A[i][1]$, $A[i][2]$, ..., $A[i][n]$]
// 2. Take column $j$ from matrix $B$: [$B[1][j]$, $B[2][j]$, ..., $B[n][j]$]
// 3. Multiply corresponding elements: $A[i][1] \\times B[1][j]$, $A[i][2] \\times B[2][j]$, etc.
// 4. Sum all products to get $C[i][j]$

// The visualizer highlights this process, showing which row and column are being multiplied, the individual products being calculated, and the running sum forming each result element.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj4: {
//       title: `Using the Interactive Visualizer`,
//       content: `Our matrix multiplication visualizer provides complete control over the animation and calculation process:

// **Start Animation**: Click "Start" to begin automatic step-by-step multiplication. The visualizer calculates each element of the result matrix sequentially, showing every multiplication and addition.

// **Step Controls**: Use "Step Forward" to advance one multiplication at a time, or "Step Back" to review previous steps. This manual control helps you follow the calculation at your own pace and understand each component of the dot product.

// **Pause and Resume**: Click "Pause" at any point during animation to freeze the current state. Resume by clicking "Start" again. The animation continues from where you paused.

// **Reset Options**: "Reset" clears the current calculation and returns to the beginning while keeping your matrix values. "Reset to Initial" restores the default 2×2 example matrices. "Initialize to Zero" sets all matrix elements to zero for starting fresh.

// The visualizer requires at least 2×2 matrices and supports up to 10×10 matrices, giving you flexibility to explore different sizes and complexity levels.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj5: {
//       title: `Understanding the Visual Display`,
//       content: `The visualization uses color coding to show exactly what's happening during multiplication:

// **Red Highlighting**: The currently selected pair of elements being multiplied appears in red. These are the specific $A[i][k]$ and $B[k][j]$ values contributing to the current dot product calculation.

// **Yellow Highlighting**: The entire row from Matrix A and entire column from Matrix B involved in calculating the current result element are highlighted in yellow. This shows the complete set of elements that will be multiplied together.

// **Matrix Labels**: Matrix A appears on the left, Matrix B in the middle, and the result Matrix R on the right, separated by multiplication and equals signs for clarity.

// **Live Calculation Display**: Below the matrices, you'll see the exact calculation being performed: which result element is being computed, which row and column are involved, and the step-by-step arithmetic with intermediate sums.

// This multi-layered visual approach helps you see both the big picture (which row/column) and the specific details (which elements are currently multiplying) simultaneously.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj6: {
//       title: `Customizing Matrix Dimensions`,
//       content: `The visualizer allows you to create matrices of any size within practical limits:

// **Resizing Matrices**: Each input matrix (A and B) has row and column input fields above it. Enter the desired dimensions and click "Resize" to adjust the matrix size. The result matrix dimensions update automatically based on the multiplication rule.

// **Dimension Constraints**: Matrices can be resized between 1×1 and 10×10. The visualizer enforces the compatibility rule—if you resize one matrix, you may need to adjust the other to maintain valid dimensions for multiplication.

// **Generating Random Matrices**: Click "Random" on either matrix to fill it with random numbers. You'll be prompted to specify the minimum and maximum values for the random generation, allowing you to create test cases with specific numerical ranges.

// **Manual Value Entry**: Click any cell in Matrix A or Matrix B to edit its value directly. Type a new number and press Enter. Changes reset the animation to the beginning, ready to recalculate with your new values.

// Experimenting with different dimensions helps you understand how matrix size affects computation complexity and result structure.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj7: {
//       title: `Reading the Calculation Steps`,
//       content: `The visualization provides detailed explanations of each calculation step:

// **Current Element Display**: At the top, you'll see "Calculating Element R[i][j] of The Result Matrix" indicating which position in the result is currently being computed.

// **Row and Column Reference**: The subtitle specifies "Multiplying Row #i of Matrix A by Column #j of Matrix B" making clear which parts of the input matrices are involved.

// **Step-by-Step Arithmetic**: As the animation proceeds, you'll see each multiplication displayed: "A[i][k] × B[k][j] = value₁ × value₂ = product". These lines accumulate, showing the entire dot product calculation.

// **Final Sum**: Once all pairs are multiplied and added, the final line shows "R[i][j] = total" with the completed result for that position.

// This running commentary transforms abstract notation into concrete arithmetic, making it easy to verify calculations by hand and understand exactly how each result element is derived from the input matrices.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj8: {
//       title: `When Can Matrices Be Multiplied?`,
//       content: `Understanding dimensional compatibility is crucial before attempting matrix multiplication:

// **The Fundamental Rule**: Matrix $A$ can multiply matrix $B$ (written $A \\times B$) if and only if the number of columns in $A$ equals the number of rows in $B$. Symbolically: if $A$ is $m \\times n$ and $B$ is $p \\times q$, then $n$ must equal $p$.

// **Why This Rule Exists**: Each result element requires computing a dot product between a row from $A$ and a column from $B$. These must have the same length to be paired element-by-element. If $A$ has $n$ columns, its rows contain $n$ elements. If $B$ has $n$ rows, its columns contain $n$ elements. Perfect match.

// **Common Examples**:
// - $2 \\times 3$ matrix CAN multiply $3 \\times 2$ matrix → result is $2 \\times 2$
// - $3 \\times 2$ matrix CANNOT multiply $3 \\times 4$ matrix (2 ≠ 3)
// - $4 \\times 4$ matrix CAN multiply $4 \\times 1$ matrix → result is $4 \\times 1$

// The visualizer checks this automatically and displays an error message if you attempt to multiply incompatible matrices, preventing confusion and guiding you toward valid configurations.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj9: {
//       title: `Matrix Multiplication Applications`,
//       content: `Matrix multiplication is not just an abstract mathematical operation—it powers real-world applications across many fields:

// **Computer Graphics**: Transformations like rotation, scaling, and translation are performed by multiplying coordinate matrices by transformation matrices. Every 3D video game and animation relies on thousands of matrix multiplications per frame.

// **Machine Learning**: Neural networks use matrix multiplication as their core operation. Each layer performs a matrix multiplication between input data and learned weights, making it the fundamental building block of **deep learning**.

// **Physics Simulations**: Systems of equations describing physical phenomena are solved using matrix operations. Quantum mechanics represents states and operators as matrices, with evolution calculated through multiplication.

// **Economics and Finance**: Input-output models, portfolio optimization, and risk analysis all use matrix multiplication to model relationships between multiple variables and compute derived quantities.

// **Graph Theory**: Adjacency matrices representing network connections are multiplied to find paths of specific lengths, analyze connectivity, and compute centrality measures.

// Understanding matrix multiplication visually builds intuition that transfers directly to these practical applications.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj10: {
//       title: `Related Matrix Operations and Concepts`,
//       content: `Matrix multiplication connects to many other **linear algebra** operations and concepts:

// **Matrix Addition** — Adding corresponding elements from two matrices of the same dimensions.

// **Matrix Transposition** — Flipping rows and columns to convert an $m \\times n$ matrix to $n \\times m$.

// **Determinants** — A scalar value computed from square matrices, important for solving systems and understanding transformations.

// **Matrix Inversion** — Finding a matrix that "undoes" multiplication, analogous to division for numbers.

// **Eigenvalues and Eigenvectors** — Special values and vectors preserved under matrix multiplication, crucial for understanding matrix behavior.

// **Linear Transformations** — Geometric interpretation of matrix multiplication as transforming vectors in space.

// Mastering matrix multiplication through visual exploration prepares you for these more advanced topics and provides a solid foundation for **linear algebra** coursework and applications.`,
//       before: ``,
//       after: ``,
//       link: '',
//     }
//   }

//   return {
//     props: {
//       sectionsContent,
//       seoData: {
//         title: "Interactive Matrix Multiplication Visualizer | Step-by-Step Calculator",
//         description: "Visualize matrix multiplication step-by-step with our interactive tool. Watch animated calculations, understand dot products, customize matrix dimensions. Free online matrix calculator for learning linear algebra.",
//         keywords: keyWords.join(", "),
//         url: "/visual-tools/matrix-multiplication",
//         name: "Interactive Matrix Multiplication Visualizer and Calculator"
//       }
//     },
//   };
// }

// export default function MatrixMultiplicationPage({ seoData, sectionsContent }) {

//   const genericSections = [
//     {
//       id: '1',
//       title: sectionsContent.obj1.title,
//       link: sectionsContent.obj1.link,
//       content: [sectionsContent.obj1.content]
//     },
//     {
//       id: '2',
//       title: sectionsContent.obj2.title,
//       link: sectionsContent.obj2.link,
//       content: [sectionsContent.obj2.content]
//     },
//     {
//       id: '3',
//       title: sectionsContent.obj3.title,
//       link: sectionsContent.obj3.link,
//       content: [sectionsContent.obj3.content]
//     },
//     {
//       id: '4',
//       title: sectionsContent.obj4.title,
//       link: sectionsContent.obj4.link,
//       content: [sectionsContent.obj4.content]
//     },
//     {
//       id: '5',
//       title: sectionsContent.obj5.title,
//       link: sectionsContent.obj5.link,
//       content: [sectionsContent.obj5.content]
//     },
//     {
//       id: '6',
//       title: sectionsContent.obj6.title,
//       link: sectionsContent.obj6.link,
//       content: [sectionsContent.obj6.content]
//     },
//     {
//       id: '7',
//       title: sectionsContent.obj7.title,
//       link: sectionsContent.obj7.link,
//       content: [sectionsContent.obj7.content]
//     },
//     {
//       id: '8',
//       title: sectionsContent.obj8.title,
//       link: sectionsContent.obj8.link,
//       content: [sectionsContent.obj8.content]
//     },
//     {
//       id: '9',
//       title: sectionsContent.obj9.title,
//       link: sectionsContent.obj9.link,
//       content: [sectionsContent.obj9.content]
//     },
//     {
//       id: '10',
//       title: sectionsContent.obj10.title,
//       link: sectionsContent.obj10.link,
//       content: [sectionsContent.obj10.content]
//     }
//   ]

//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Learn Math Class" />
        
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />
        
//         <meta name="robots" content="index, follow" />
//         <meta name="author" content="Learn Math Class" />

//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebApplication",
//               "name": seoData.name,
//               "description": seoData.description,
//               "url": `https://www.learnmathclass.com${seoData.url}`,
//               "applicationCategory": "EducationalApplication",
//               "operatingSystem": "Any",
//               "offers": {
//                 "@type": "Offer",
//                 "price": "0",
//                 "priceCurrency": "USD"
//               },
//               "featureList": [
//                 "Step-by-step matrix multiplication animation",
//                 "Interactive matrix dimension customization",
//                 "Real-time calculation display",
//                 "Color-coded element highlighting",
//                 "Manual step control (forward/backward)",
//                 "Random matrix generation",
//                 "Visual dot product calculation"
//               ],
//               "author": {
//                 "@type": "Organization",
//                 "name": "Learn Math Class"
//               },
//               "datePublished": "2024-01-15",
//               "dateModified": new Date().toISOString(),
//               "inLanguage": "en-US",
//               "isAccessibleForFree": true,
//               "learningResourceType": "Interactive Tool",
//               "educationalLevel": "High School, College",
//               "keywords": seoData.keywords
//             })
//           }}
//         />

//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "BreadcrumbList",
//               "itemListElement": [
//                 {
//                   "@type": "ListItem",
//                   "position": 1,
//                   "name": "Home",
//                   "item": "https://www.learnmathclass.com"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 2,
//                   "name": "Visual Tools",
//                   "item": "https://www.learnmathclass.com/visual-tools"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 3,
//                   "name": "Matrix Multiplication",
//                   "item": `https://www.learnmathclass.com${seoData.url}`
//                 }
//               ]
//             })
//           }}
//         />

//         <script 
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ 
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               "mainEntity": [
//                 {
//                   "@type": "Question",
//                   "name": "What is matrix multiplication?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Matrix multiplication is a fundamental operation in linear algebra that combines two matrices to produce a third matrix. Each element in the result is computed as the dot product of a row from the first matrix and a column from the second matrix."
//                   }
//                 },
//                 {
//                   "@type": "Question",
//                   "name": "When can two matrices be multiplied?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Two matrices can be multiplied if and only if the number of columns in the first matrix equals the number of rows in the second matrix. If matrix A is m×n and matrix B is n×p, they can be multiplied to produce an m×p result matrix."
//                   }
//                 },
//                 {
//                   "@type": "Question",
//                   "name": "How do you calculate each element in matrix multiplication?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Each element C[i][j] in the result matrix is calculated as the dot product of row i from matrix A and column j from matrix B. Multiply corresponding elements and sum the products: C[i][j] = Σ(A[i][k] × B[k][j])."
//                   }
//                 },
//                 {
//                   "@type": "Question",
//                   "name": "Is matrix multiplication commutative?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "No, matrix multiplication is not commutative. A×B does not generally equal B×A. The order of multiplication matters and can produce completely different results or may not even be valid if dimensions don't align properly."
//                   }
//                 },
//                 {
//                   "@type": "Question",
//                   "name": "What is the dot product in matrix multiplication?",
//                   "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "The dot product is the operation used to calculate each element of the result matrix. It involves multiplying corresponding elements from a row and column, then summing all the products. This scalar value becomes one element in the result matrix."
//                   }
//                 }
//               ]
//             })
//           }}
//         />
//       </Head>

//       <br/>
//       <br/>
//       <br/>
//       <br/>
      
//       <OperaSidebar 
//         side='right'
//         topOffset='65px' 
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       /> 

//       <main className="container">
//         <Breadcrumb />
//         <h1 className="title" style={{marginTop:'-20px', marginBottom:'20px'}}>Matrix Multiplication Visualizer</h1>
        
//         <br/>
//         <MatrixMultiplication />
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
        
//         <SectionTableOfContents sections={genericSections}/>
        
//         <br/>
//         <br/>
//         <br/>
        
//         <Sections sections={genericSections}/>
        
//         <br/>
//         <br/>
//         <br/>
//       </main>
//     </>
//   );
// }


import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react';
import '../../pages.css';
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

const MyNavbar = dynamic(() => import('@/app/components/nav-bar/MyNavbar'), { ssr: false });
const ScrollUpButton = dynamic(() => import('@/app/components/scroll-up-button/ScrollUpButton'), { ssr: false });
const MatrixMultiplication = dynamic(() => import('@/app/components/matrix-multiplication/MatrixMultiplication'), { ssr: false });
const Breadcrumb = dynamic(() => import('@/app/components/breadcrumb/Breadcrumb'), { ssr: false });

export async function getStaticProps() {
  
  const keyWords = [
    'matrix multiplication visualizer',
    'matrix multiplication calculator',
    'interactive matrix multiplication',
    'matrix multiplication step by step',
    'matrix multiplication animation',
    'dot product visualization',
    'matrix calculator',
    'multiply matrices',
    'matrix multiplication tool',
    'linear algebra calculator',
    'matrix operations',
    'matrix multiplication explained',
    'visual matrix multiplication',
    'matrix multiplication online',
    'free matrix calculator'
  ]

  const sectionsContent = {
    obj1: {
      title: `What is Matrix Multiplication?`,
      content: `Matrix multiplication is a fundamental operation in **linear algebra** that combines two matrices to produce a third matrix. Unlike element-wise multiplication, matrix multiplication follows specific rules where each element in the result is computed as the **dot product** of a row from the first matrix and a column from the second matrix.

The operation is written as $C = A \\times B$, where matrix $A$ has dimensions $m \\times n$ and matrix $B$ has dimensions $n \\times p$, producing a result matrix $C$ with dimensions $m \\times p$. Each element $C[i][j]$ represents the sum of products between row $i$ of matrix $A$ and column $j$ of matrix $B$.

Matrix multiplication appears throughout mathematics, physics, computer graphics, data science, and machine learning. Understanding how it works visually helps build intuition for more advanced **linear algebra concepts**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Matrix Multiplication Rules`,
      content: `Matrix multiplication has strict dimensional requirements that must be satisfied:

**Compatibility Rule**: The number of columns in the first matrix must equal the number of rows in the second matrix. If matrix $A$ is $m \\times n$ and matrix $B$ is $p \\times q$, multiplication $A \\times B$ is only possible when $n = p$.

**Result Dimensions**: The resulting matrix takes the number of rows from the first matrix and the number of columns from the second matrix. So $A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}$.

**Non-Commutative**: Matrix multiplication is not commutative, meaning $A \\times B \\neq B \\times A$ in general. The order matters critically.

**Associative**: Multiplication is associative: $(A \\times B) \\times C = A \\times (B \\times C)$.

Our visualizer checks these rules automatically and displays an error if matrices cannot be multiplied due to incompatible dimensions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Dot Product Method`,
      content: `Each element in the result matrix is calculated using the **dot product** between a row and a column:

**Formula**: For element $C[i][j]$, calculate:

$$C[i][j] = \\sum_{k=1}^{n} A[i][k] \\times B[k][j]$$

**Step-by-step process**:

1. Take row $i$ from matrix $A$: [$A[i][1]$, $A[i][2]$, ..., $A[i][n]$]
2. Take column $j$ from matrix $B$: [$B[1][j]$, $B[2][j]$, ..., $B[n][j]$]
3. Multiply corresponding elements: $A[i][1] \\times B[1][j]$, $A[i][2] \\times B[2][j]$, etc.
4. Sum all products to get $C[i][j]$

The visualizer highlights this process, showing which row and column are being multiplied, the individual products being calculated, and the running sum forming each result element.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Using the Interactive Visualizer`,
      content: `Our matrix multiplication visualizer provides complete control over the animation and calculation process:

**Start Animation**: Click "Start" to begin automatic step-by-step multiplication. The visualizer calculates each element of the result matrix sequentially, showing every multiplication and addition.

**Step Controls**: Use "Step Forward" to advance one multiplication at a time, or "Step Back" to review previous steps. This manual control helps you follow the calculation at your own pace and understand each component of the dot product.

**Pause and Resume**: Click "Pause" at any point during animation to freeze the current state. Resume by clicking "Start" again. The animation continues from where you paused.

**Reset Options**: "Reset" clears the current calculation and returns to the beginning while keeping your matrix values. "Reset to Initial" restores the default 2×2 example matrices. "Initialize to Zero" sets all matrix elements to zero for starting fresh.

The visualizer requires at least 2×2 matrices and supports up to 10×10 matrices, giving you flexibility to explore different sizes and complexity levels.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Understanding the Visual Display`,
      content: `The visualization uses color coding to show exactly what's happening during multiplication:

**Red Highlighting**: The currently selected pair of elements being multiplied appears in red. These are the specific $A[i][k]$ and $B[k][j]$ values contributing to the current dot product calculation.

**Yellow Highlighting**: The entire row from Matrix A and entire column from Matrix B involved in calculating the current result element are highlighted in yellow. This shows the complete set of elements that will be multiplied together.

**Matrix Labels**: Matrix A appears on the left, Matrix B in the middle, and the result Matrix R on the right, separated by multiplication and equals signs for clarity.

**Live Calculation Display**: Below the matrices, you'll see the exact calculation being performed: which result element is being computed, which row and column are involved, and the step-by-step arithmetic with intermediate sums.

This multi-layered visual approach helps you see both the big picture (which row/column) and the specific details (which elements are currently multiplying) simultaneously.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Customizing Matrix Dimensions`,
      content: `The visualizer allows you to create matrices of any size within practical limits:

**Resizing Matrices**: Each input matrix (A and B) has row and column input fields above it. Enter the desired dimensions and click "Resize" to adjust the matrix size. The result matrix dimensions update automatically based on the multiplication rule.

**Dimension Constraints**: Matrices can be resized between 1×1 and 10×10. The visualizer enforces the compatibility rule—if you resize one matrix, you may need to adjust the other to maintain valid dimensions for multiplication.

**Generating Random Matrices**: Click "Random" on either matrix to fill it with random numbers. You'll be prompted to specify the minimum and maximum values for the random generation, allowing you to create test cases with specific numerical ranges.

**Manual Value Entry**: Click any cell in Matrix A or Matrix B to edit its value directly. Type a new number and press Enter. Changes reset the animation to the beginning, ready to recalculate with your new values.

Experimenting with different dimensions helps you understand how matrix size affects computation complexity and result structure.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Reading the Calculation Steps`,
      content: `The visualization provides detailed explanations of each calculation step:

**Current Element Display**: At the top, you'll see "Calculating Element R[i][j] of The Result Matrix" indicating which position in the result is currently being computed.

**Row and Column Reference**: The subtitle specifies "Multiplying Row #i of Matrix A by Column #j of Matrix B" making clear which parts of the input matrices are involved.

**Step-by-Step Arithmetic**: As the animation proceeds, you'll see each multiplication displayed: "A[i][k] × B[k][j] = value₁ × value₂ = product". These lines accumulate, showing the entire dot product calculation.

**Final Sum**: Once all pairs are multiplied and added, the final line shows "R[i][j] = total" with the completed result for that position.

This running commentary transforms abstract notation into concrete arithmetic, making it easy to verify calculations by hand and understand exactly how each result element is derived from the input matrices.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `When Can Matrices Be Multiplied?`,
      content: `Understanding dimensional compatibility is crucial before attempting matrix multiplication:

**The Fundamental Rule**: Matrix $A$ can multiply matrix $B$ (written $A \\times B$) if and only if the number of columns in $A$ equals the number of rows in $B$. Symbolically: if $A$ is $m \\times n$ and $B$ is $p \\times q$, then $n$ must equal $p$.

**Why This Rule Exists**: Each result element requires computing a dot product between a row from $A$ and a column from $B$. These must have the same length to be paired element-by-element. If $A$ has $n$ columns, its rows contain $n$ elements. If $B$ has $n$ rows, its columns contain $n$ elements. Perfect match.

**Common Examples**:
- $2 \\times 3$ matrix CAN multiply $3 \\times 2$ matrix → result is $2 \\times 2$
- $3 \\times 2$ matrix CANNOT multiply $3 \\times 4$ matrix (2 ≠ 3)
- $4 \\times 4$ matrix CAN multiply $4 \\times 1$ matrix → result is $4 \\times 1$

The visualizer checks this automatically and displays an error message if you attempt to multiply incompatible matrices, preventing confusion and guiding you toward valid configurations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Matrix Multiplication Applications`,
      content: `Matrix multiplication is not just an abstract mathematical operation—it powers real-world applications across many fields:

**Computer Graphics**: Transformations like rotation, scaling, and translation are performed by multiplying coordinate matrices by transformation matrices. Every 3D video game and animation relies on thousands of matrix multiplications per frame.

**Machine Learning**: Neural networks use matrix multiplication as their core operation. Each layer performs a matrix multiplication between input data and learned weights, making it the fundamental building block of **deep learning**.

**Physics Simulations**: Systems of equations describing physical phenomena are solved using matrix operations. Quantum mechanics represents states and operators as matrices, with evolution calculated through multiplication.

**Economics and Finance**: Input-output models, portfolio optimization, and risk analysis all use matrix multiplication to model relationships between multiple variables and compute derived quantities.

**Graph Theory**: Adjacency matrices representing network connections are multiplied to find paths of specific lengths, analyze connectivity, and compute centrality measures.

Understanding matrix multiplication visually builds intuition that transfers directly to these practical applications.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Matrix Operations and Concepts`,
      content: `Matrix multiplication connects to many other **linear algebra** operations and concepts:

**Matrix Addition** — Adding corresponding elements from two matrices of the same dimensions.

**Matrix Transposition** — Flipping rows and columns to convert an $m \\times n$ matrix to $n \\times m$.

**Determinants** — A scalar value computed from square matrices, important for solving systems and understanding transformations.

**Matrix Inversion** — Finding a matrix that "undoes" multiplication, analogous to division for numbers.

**Eigenvalues and Eigenvectors** — Special values and vectors preserved under matrix multiplication, crucial for understanding matrix behavior.

**Linear Transformations** — Geometric interpretation of matrix multiplication as transforming vectors in space.

Mastering matrix multiplication through visual exploration prepares you for these more advanced topics and provides a solid foundation for **linear algebra** coursework and applications.`,
      before: ``,
      after: ``,
      link: '',
    }
  }

  const faqQuestions = {
    obj1: {
      question: "What is matrix multiplication?",
      answer: "Matrix multiplication is a fundamental operation in linear algebra that combines two matrices to produce a third matrix. Each element in the result is computed as the dot product of a row from the first matrix and a column from the second matrix."
    },
    obj2: {
      question: "When can two matrices be multiplied?",
      answer: "Two matrices can be multiplied if and only if the number of columns in the first matrix equals the number of rows in the second matrix. If matrix A is m×n and matrix B is n×p, they can be multiplied to produce an m×p result matrix."
    },
    obj3: {
      question: "How do you calculate each element in matrix multiplication?",
      answer: "Each element C[i][j] in the result matrix is calculated as the dot product of row i from matrix A and column j from matrix B. Multiply corresponding elements and sum the products: C[i][j] = Σ(A[i][k] × B[k][j])."
    },
    obj4: {
      question: "Is matrix multiplication commutative?",
      answer: "No, matrix multiplication is not commutative. A×B does not generally equal B×A. The order of multiplication matters and can produce completely different results or may not even be valid if dimensions don't align properly."
    },
    obj5: {
      question: "What is the dot product in matrix multiplication?",
      answer: "The dot product is the operation used to calculate each element of the result matrix. It involves multiplying corresponding elements from a row and column, then summing all the products. This scalar value becomes one element in the result matrix."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Matrix Multiplication Visualizer and Calculator",
      "description": "Visualize matrix multiplication step-by-step with our interactive tool. Watch animated calculations, understand dot products, customize matrix dimensions. Free online matrix calculator for learning linear algebra.",
      "url": "https://www.learnmathclass.com/visual-tools/matrix-multiplication",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Step-by-step matrix multiplication animation",
        "Interactive matrix dimension customization",
        "Real-time calculation display",
        "Color-coded element highlighting",
        "Manual step control (forward/backward)",
        "Random matrix generation",
        "Visual dot product calculation"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": keyWords.join(", ")
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.learnmathclass.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Matrix Multiplication",
          "item": "https://www.learnmathclass.com/visual-tools/matrix-multiplication"
        }
      ]
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(faqQuestions).map(key => ({
        "@type": "Question",
        "name": faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faqQuestions[key].answer
        }
      }))
    }
  }

  return {
    props: {
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Interactive Matrix Multiplication Visualizer | Step-by-Step Calculator",
        description: "Visualize matrix multiplication step-by-step with our interactive tool. Watch animated calculations, understand dot products, customize matrix dimensions. Free online matrix calculator for learning linear algebra.",
        keywords: keyWords.join(", "),
        url: "/visual-tools/matrix-multiplication",
        name: "Interactive Matrix Multiplication Visualizer and Calculator"
      }
    },
  };
}

export default function MatrixMultiplicationPage({ seoData, sectionsContent, faqQuestions, schemas }) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content]
    }
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Learn Math Class" />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.webApplication)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>

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
        panelBackgroundColor='#f2f2f2'
      /> 

      <main className="container">
        <Breadcrumb />
        <h1 className="title" style={{marginTop:'10px', marginBottom:'20px'}}>Matrix Multiplication Visualizer</h1>
        
        <br/>
        <MatrixMultiplication />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <SectionTableOfContents sections={genericSections}/>
        
        <br/>
        <br/>
        <br/>
        
        <Sections sections={genericSections}/>
        
        <br/>
        <br/>
        <br/>
      </main>
    </>
  );
}