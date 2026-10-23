// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//  const keyWords = [
//   "systems of linear equations",
//   "linear system Ax = b",
//   "augmented matrix",
//   "solution set linear system",
//   "Gaussian elimination",
//   "row echelon form",
//   "homogeneous system",
//   "consistent inconsistent system",
//   "unique solution infinitely many",
//   "elementary row operations",
//   "matrix form linear system",
//   "rank solvability",
//   "overdetermined underdetermined system",
//   "linear system geometric interpretation"
// ]

//   // •

// //   \u2022 First item
// // \u2022 Second item

  
// // <hr style="border-width:1px;"></hr>

// // <hr style="color:blue;" />

// // <hr style="border-color:#3498db; border-width:1px;" />



// // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
//         //     {processContent(sectionsContent.normal.notation)}
//         // </div>,


// //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// //     {processContent(sectionsContent.normal.parameters)}
// // </div>,
        
// //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// //                   {processContent(sectionsContent.obj4.content)}
// //                   </div>,


// //  <div key={'dist'} style={{
// //                     textAlign: 'center',
// //                     transform: 'scale(0.98)',
// //                     transformOrigin: 'center',
// //                     marginTop:'50px',
// //                     marginLeft:'-150px'
// //                   }} dangerouslySetInnerHTML={{ 
// //                     __html:   sectionContent.distributions.svg,
// //                   }} />


// const sectionsContent = {
//   obj1: {
//     title: `What a Linear System Is`,
//     content: `A linear system is a set of $m$ equations in $n$ unknowns where each equation is a linear combination of the unknowns equal to a constant:

// $$a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1$$
// $$a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_2$$
// $$\\vdots$$
// $$a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n = b_m$$

// "Linear" means no products of unknowns, no powers higher than $1$, and no transcendental functions of unknowns. The expression $3x_1 - 2x_2 + x_3 = 7$ is linear; the expression $x_1 x_2 + x_3^2 = 1$ is not.

// A solution is an assignment of values to $x_1, \\dots, x_n$ that satisfies every equation simultaneously. The solution set is the collection of all solutions. The central question is: what does this set look like?`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Writing a System in Matrix Form`,
//     content: `The entire system can be compressed into a single [matrix](!/linear-algebra/matrix) equation:

// $$A\\mathbf{x} = \\mathbf{b}$$

// where $A$ is the $m \\times n$ coefficient matrix with entry $a_{ij}$ in row $i$, column $j$; $\\mathbf{x} = (x_1, x_2, \\dots, x_n)^T$ is the unknown vector; and $\\mathbf{b} = (b_1, b_2, \\dots, b_m)^T$ is the right-hand side.

// Each row of $A$ corresponds to one equation. Each column corresponds to one unknown. The matrix-vector product $A\\mathbf{x}$ is a [linear combination](!/linear-algebra/vectors/linear-combinations) of the columns of $A$ weighted by the entries of $\\mathbf{x}$:

// $$A\\mathbf{x} = x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n$$

// Asking whether $A\\mathbf{x} = \\mathbf{b}$ has a solution is therefore equivalent to asking whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ — whether $\\mathbf{b}$ can be assembled from the columns using some choice of weights.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Augmented Matrix`,
//     content: `The augmented matrix packages the coefficient matrix and the right-hand side into a single object:

// $$[A \\mid \\mathbf{b}] = \\left(\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right)$$

// The vertical bar separates the coefficients from the constants but is purely notational — the augmented matrix is an $m \\times (n+1)$ matrix on which row operations are performed. Every row operation on $[A \\mid \\mathbf{b}]$ corresponds to a legal algebraic manipulation of the equations: swapping two equations, multiplying an equation by a nonzero scalar, or adding a multiple of one equation to another. None of these changes the solution set.

// The augmented matrix is the object that [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) operates on, and comparing its [rank](!/linear-algebra/matrix/rank) to the rank of $A$ alone determines whether the system is consistent.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `The Three Possible Outcomes`,
//     content: `A linear system $A\\mathbf{x} = \\mathbf{b}$ has exactly one of three outcomes.

// No solution: the system is inconsistent. The equations impose contradictory constraints — there is no $\\mathbf{x}$ that satisfies all of them. In the augmented matrix, this manifests as a row of the form $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$, representing the impossible equation $0 = d$.

// Exactly one solution: the system is consistent and determined. There is a unique $\\mathbf{x}$ satisfying all equations. This requires the coefficient matrix to have [rank](!/linear-algebra/matrix/rank) equal to $n$ (the number of unknowns), leaving no free variables.

// Infinitely many solutions: the system is consistent but underdetermined. The constraints do not pin down a single point — the solution set is a line, plane, or higher-dimensional flat parametrized by free variables.

// There is no fourth option. A linear system never has exactly two solutions, or ten, or any finite number greater than one. The proof is simple: if $\\mathbf{x}_1$ and $\\mathbf{x}_2$ are both solutions with $\\mathbf{x}_1 \\neq \\mathbf{x}_2$, then $\\mathbf{x}_1 + t(\\mathbf{x}_2 - \\mathbf{x}_1)$ is a solution for every $t \\in \\mathbb{R}$, producing infinitely many.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Geometric Interpretation`,
//     content: `Each equation in a linear system defines a hyperplane in $\\mathbb{R}^n$. The solution set is the intersection of all $m$ hyperplanes.

// For two equations in two unknowns, each equation is a line in $\\mathbb{R}^2$. Two distinct non-parallel lines meet at exactly one point — a unique solution. Parallel lines never meet — no solution. Coincident lines (the same line described twice) overlap entirely — infinitely many solutions.

// For three equations in three unknowns, each equation is a plane in $\\mathbb{R}^3$. Three planes can intersect in a point, along a line, or not at all. They can also coincide or be arranged so that each pair intersects but no point lies on all three — a triangular prism configuration that yields no solution.

// In higher dimensions the geometry is harder to visualize but the classification persists. The rank of the coefficient matrix counts how many hyperplanes cut independently — each independent equation reduces the dimension of the intersection by one. If the rank is $r$ and the system is consistent, the solution set has dimension $n - r$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Elementary Row Operations`,
//     content: `The three elementary row operations are the legal moves that transform one augmented matrix into another without altering the solution set.

// Swapping two rows ($R_i \\leftrightarrow R_j$) reorders the equations. Multiplying a row by a nonzero scalar ($kR_i \\to R_i$) rescales an equation. Adding a multiple of one row to another ($R_i + cR_j \\to R_i$) replaces one equation with a combination of two equations.

// Each operation is reversible: a swap undoes itself, scaling by $k$ is reversed by scaling by $1/k$, and adding $c$ times row $j$ to row $i$ is reversed by subtracting $c$ times row $j$ from row $i$. Reversibility guarantees that the solution set is unchanged — no solutions are created or destroyed.

// Each row operation corresponds to left-multiplication by an [elementary matrix](!/linear-algebra/matrix/operations). This algebraic interpretation connects the row-reduction algorithm to the theory of matrix factorization and [invertibility](!/linear-algebra/matrix/inverse). The full systematic application of row operations is [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination).`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `Row Echelon Form and Reduced Row Echelon Form`,
//     content: `Row operations aim to reduce the augmented matrix to a standard shape from which the solution can be read.

// Row echelon form (REF) has a staircase pattern: the leading entry of each row is to the right of the leading entry of the row above, and all entries below each leading entry are zero. In REF, the solution is obtained by back substitution — solving from the bottom row upward.

// Reduced row echelon form (RREF) goes further: each leading entry is $1$ and is the only nonzero entry in its column. In RREF, the solution is visible by inspection — each pivot variable is already isolated.

// The RREF of any matrix is unique. Different sequences of row operations always arrive at the same RREF. This uniqueness makes the pivot positions intrinsic to the matrix: the [rank](!/linear-algebra/matrix/rank), the free variables, and the solvability verdict all follow from the pivot structure. The full treatment of both forms, including how to read solutions from each, is on the [echelon form](!/linear-algebra/linear-systems/echelon-form) page.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Homogeneous Systems`,
//     content: `The special case $A\\mathbf{x} = \\mathbf{0}$ — where every right-hand side entry is zero — is called a [homogeneous](!/linear-algebra/linear-systems/homogeneous) system. It is always consistent, since $\\mathbf{x} = \\mathbf{0}$ satisfies every equation. The question is whether nontrivial solutions exist.

// Nontrivial solutions exist if and only if the rank of $A$ is less than $n$. If the system has more unknowns than equations ($n > m$), nontrivial solutions are guaranteed — the rank cannot exceed $m$, which is less than $n$.

// The solution set of a homogeneous system is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$ with dimension $n - \\text{rank}(A)$. The superposition principle holds — any linear combination of solutions is again a solution — which is why the solution set has the clean structure of a vector space rather than an arbitrary collection of points.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `When Does a Solution Exist? When Is It Unique?`,
//     content: `The rank of $A$ determines both existence and uniqueness of solutions to $A\\mathbf{x} = \\mathbf{b}$.

// Existence: a solution exists if and only if $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$. This means $\\mathbf{b}$ lies in the column space of $A$ — appending it as an extra column does not introduce a new independent direction.

// Uniqueness: if a solution exists, it is unique if and only if $\\text{rank}(A) = n$. Full column rank means no free variables and a trivial null space, so the particular solution stands alone with no homogeneous component to add freedom.

// When $A$ is square ($m = n$) and $\\det(A) \\neq 0$, both conditions hold for every $\\mathbf{b}$: the system always has a unique solution, given by $\\mathbf{x} = A^{-1}\\mathbf{b}$. When $A$ is rectangular or singular, the analysis requires comparing ranks and identifying free variables. The full treatment, including overdetermined and underdetermined systems, is on the [solvability](!/linear-algebra/linear-systems/solvability) page.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Solution Methods Beyond Row Reduction`,
//     content: `Gaussian elimination is the most general and widely used method, but several alternatives exist for special cases.

// [Cramer's rule](!/linear-algebra/determinants/applications) solves an $n \\times n$ system by expressing each unknown as a ratio of [determinants](!/linear-algebra/determinants). It gives a closed-form solution but is computationally impractical for large $n$.

// The [inverse](!/linear-algebra/matrix/inverse) formula $\\mathbf{x} = A^{-1}\\mathbf{b}$ applies when $A$ is square and invertible. It is elegant but rarely the most efficient approach — computing $A^{-1}$ costs roughly three times as much as solving by elimination.

// [LU decomposition](!/linear-algebra/decompositions/lower-upper) factors $A$ into a lower triangular matrix $L$ and an upper triangular matrix $U$. Once the factorization is computed, solving $A\\mathbf{x} = \\mathbf{b}$ reduces to two cheap triangular solves. This is the method of choice when multiple systems share the same coefficient matrix $A$ but have different right-hand sides.

// Iterative methods — Jacobi, Gauss-Seidel, conjugate gradient — generate a sequence of approximations converging to the solution. They are preferred for very large sparse systems where direct methods would require too much memory or time. These methods lie at the boundary between linear algebra and numerical analysis.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// const introContent = {
//   title: `Solving Ax = b`,
//   content: `A linear system is a collection of linear equations in several unknowns. Writing it in matrix form as Ax = b transforms the problem into a question about matrices: is b in the column space of A, and if so, what are the weights? Row reduction answers both questions systematically, and the rank of the coefficient matrix determines whether the solution exists, whether it is unique, and what the solution set looks like.`,
// }


// const faqQuestions = {
//   obj1: {
//     question: "What are the possible outcomes of a linear system?",
//     answer: "A linear system has exactly one of three outcomes: no solution (inconsistent, contradictory equations), exactly one solution (full column rank, no free variables), or infinitely many solutions (consistent with free variables). A system can never have exactly two or any other finite number greater than one.",
//     sectionId: "4"
//   },
//   obj2: {
//     question: "What is the augmented matrix?",
//     answer: "The augmented matrix [A | b] combines the coefficient matrix A and right-hand side b into a single m×(n+1) matrix. Row operations on the augmented matrix correspond to legal algebraic manipulations of the equations. Comparing the rank of A to the rank of [A | b] determines whether the system is consistent.",
//     sectionId: "3"
//   },
//   obj3: {
//     question: "When does a linear system have a solution?",
//     answer: "A solution exists if and only if rank(A) = rank([A | b]), meaning b lies in the column space of A. If a solution exists, it is unique when rank(A) = n (no free variables). When A is square and invertible, a unique solution exists for every b.",
//     sectionId: "9"
//   },
//   obj4: {
//     question: "What is a homogeneous linear system?",
//     answer: "A homogeneous system Ax = 0 always has the trivial solution x = 0. Nontrivial solutions exist if and only if rank(A) < n. The solution set is the null space of A — a subspace of Rⁿ with dimension n − rank(A). If there are more unknowns than equations, nontrivial solutions are guaranteed.",
//     sectionId: "8"
//   },
//   obj5: {
//     question: "What are the three elementary row operations?",
//     answer: "The three operations are: swapping two rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another. Each is reversible, so none changes the solution set. They reduce the augmented matrix to echelon form, from which the solution is read by back substitution.",
//     sectionId: "6"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Systems of Linear Equations",
//     "description": "Systems of linear equations: matrix form Ax = b, augmented matrix, three possible outcomes, geometric interpretation, row operations, echelon form, homogeneous systems, and solvability conditions.",
//     "url": "https://www.learnmathclass.com/linear-algebra/linear-systems",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Systems of Linear Equations"
//     },
//     "teaches": [
//       "Linear systems and the matrix equation Ax = b",
//       "Augmented matrix and column space interpretation",
//       "Three possible outcomes: none, unique, infinitely many",
//       "Geometric interpretation as hyperplane intersections",
//       "Elementary row operations and their reversibility",
//       "Row echelon and reduced row echelon form",
//       "Homogeneous systems and the null space",
//       "Rank-based existence and uniqueness conditions",
//       "Solution methods: elimination, Cramer, LU, iterative"
//     ],
//     "keywords": keyWords.join(", "),
//     "author": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "Learn Math Class"
//     },
//     "datePublished": "2024-01-15",
//     "dateModified": new Date().toISOString()
//   },

//   breadcrumb: {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.learnmathclass.com"
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Linear Algebra",
//         "item": "https://www.learnmathclass.com/linear-algebra"
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": "Linear Systems",
//         "item": "https://www.learnmathclass.com/linear-algebra/linear-systems"
//       }
//     ]
//   },

//   faq: {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": Object.keys(faqQuestions).map(key => ({
//       "@type": "Question",
//       "name": faqQuestions[key].question,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faqQuestions[key].answer
//       }
//     }))
//   }
// }

// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Title | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/linear-algebra/linear-systems",
// //          name: "name"
// //       },
        
// //        }
// //     }

// return {
//   props:{
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Linear Systems: Solving Ax = b | Learn Math Class",
//       description: "Systems of linear equations: matrix form Ax = b, augmented matrix, three possible outcomes, geometric interpretation, row operations, echelon form, homogeneous systems, and solvability conditions.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/linear-systems",
//       name: "Systems of Linear Equations"
//     },
//   }
// }
//    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {
// export default function LinearSystemsPage({seoData, sectionsContent, introContent, schemas}) {
    
//   const genericSections=[
//     {
//         id:'1',
//         title:sectionsContent.obj1.title,
//         link:sectionsContent.obj1.link,
//         content:[
//           sectionsContent.obj1.content,
//         ]
//     },
//     {
//         id:'2',
//         title:sectionsContent.obj2.title,
//         link:sectionsContent.obj2.link,
//         content:[
//           sectionsContent.obj2.content,
//         ]
//     },
//     {
//         id:'3',
//         title:sectionsContent.obj3.title,
//         link:sectionsContent.obj3.link,
//         content:[
//           sectionsContent.obj3.content,
//         ]
//     },
//     {
//         id:'4',
//         title:sectionsContent.obj4.title,
//         link:sectionsContent.obj4.link,
//         content:[
//           sectionsContent.obj4.content,
//         ]
//     },
//     {
//         id:'5',
//         title:sectionsContent.obj5.title,
//         link:sectionsContent.obj5.link,
//         content:[
//           sectionsContent.obj5.content,
//         ]
//     },
//     {
//         id:'6',
//         title:sectionsContent.obj6.title,
//         link:sectionsContent.obj6.link,
//         content:[
//           sectionsContent.obj6.content,
//         ]
//     },
//     {
//         id:'7',
//         title:sectionsContent.obj7.title,
//         link:sectionsContent.obj7.link,
//         content:[
//           sectionsContent.obj7.content,
//         ]
//     },
//     {
//         id:'8',
//         title:sectionsContent.obj8.title,
//         link:sectionsContent.obj8.link,
//         content:[
//           sectionsContent.obj8.content,
//         ]
//     },
//     {
//         id:'9',
//         title:sectionsContent.obj9.title,
//         link:sectionsContent.obj9.link,
//         content:[
//           sectionsContent.obj9.content,
//         ]
//     },
//     {
//         id:'10',
//         title:sectionsContent.obj10.title,
//         link:sectionsContent.obj10.link,
//         content:[
//           sectionsContent.obj10.content,
//         ]
//     },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
//     // {
//     //     id:'1',
//     //     title:sectionsContent.obj1.title,
//     //     link:sectionsContent.obj1.link,
//     //     content:[
//     //       sectionsContent.obj1.content,
//     //     ]
//     // },
    
// ]

//   return (
//    <>
//    {/* <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify({
//         "@context": "https://schema.org",
//         "@type": "WebPage",
//         "name": seoData.name,
//         "description": seoData.description,
//         "keywords": seoData.keywords,
//         "url": `https://www.learnmathclass.com${seoData.url}`,
//         "dateModified": new Date().toISOString(),
//         "inLanguage": "en-US",
//         "mainEntity": {
//           "@type": "Article",
//           "name": seoData.name,
//           "dateModified": new Date().toISOString(),
//           "author": {
//             "@type": "Organization",
//             "name": "Learn Math Class"
//           }
//         }
//       })
//     }}
//   />
// </Head> */}

// <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
//   <meta property="og:title" content={seoData.title} />
//   <meta property="og:description" content={seoData.description} />
//   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//   <meta property="og:type" content="article" />
//   <meta property="og:site_name" content="Learn Math Class" />
  
//   <meta name="twitter:card" content="summary" />
//   <meta name="twitter:title" content={seoData.title} />
//   <meta name="twitter:description" content={seoData.description} />
  
//   <meta name="robots" content="index, follow" />
  
//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.learningResource)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script 
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{ 
//       __html: JSON.stringify(schemas.faq)
//     }}
//   />
// </Head>
//    {/* <GenericNavbar/> */}
//    <br/>
//    <br/>
//    <br/>
//    <br/>
//     <OperaSidebar 
//            side='right'
//            // topOffset='65px' 
//            sidebarWidth='45px'
//            panelWidth='200px'
//            iconColor='white'
//            panelBackgroundColor='#f2f2f2'
//          /> 
//    <Breadcrumb/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Systems of Linear Equations</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



// tables-optimized: v4 | 2026-05-18 | 3 tables (obj4 aggregation, obj10 aggregation, obj11 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import linearSystemDiagrams from '@/app/components/linear-algebra copy/matrix/linearSystemDiagrams'
import gaussEliminationDiagrams from '@/app/components/matrix-multiplication/gaussEliminationDiagrams'
import matrixProductDiagrams from '@/app/components/linear-algebra/multiplication/matrixProductDiagrams'
import CaseSplit from '@/app/components/infographics/CaseSplit/CaseSplit'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'
import TopDownTree from '@/app/components/infographics/TopDownTree/TopDownTree'



export async function getStaticProps(){

 const keyWords = [
  "systems of linear equations",
  "linear system Ax = b",
  "augmented matrix",
  "solution set linear system",
  "Gaussian elimination",
  "row echelon form",
  "homogeneous system",
  "consistent inconsistent system",
  "unique solution infinitely many",
  "elementary row operations",
  "matrix form linear system",
  "rank solvability",
  "overdetermined underdetermined system",
  "linear system geometric interpretation"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj4 — aggregation: detecting each outcome in the augmented matrix after row reduction
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Outcome</th>
      <th style="${tableHeaders.aggregation}">How it appears in the reduced augmented matrix</th>
      <th style="${tableHeaders.aggregation}">Rank condition</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">No solution (inconsistent)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a row of the form [0 0 ⋯ 0 | d] with d ≠ 0 — the impossible equation 0 = d</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) &lt; rank([A | b])</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Exactly one solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">every column of A has a pivot; no free variables; every x<sub>i</sub> is determined</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">rank(A) = rank([A | b]) = n</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Infinitely many solutions</td>
      <td style="padding: 12px 15px; color: #34495e;">at least one column of A has no pivot; the corresponding variable is free</td>
      <td style="padding: 12px 15px; color: #34495e;">rank(A) = rank([A | b]) &lt; n</td>
    </tr>
  </tbody>
</table>
`

// obj10 — aggregation: solution methods compared
const obj10Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Method</th>
      <th style="${tableHeaders.aggregation}">When it applies</th>
      <th style="${tableHeaders.aggregation}">Cost / notes</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/linear-systems/gaussian-elimination" style="${linkStyle}">Gaussian elimination</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any system; the most general method</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">≈ (2/3)n³ operations; the default workhorse</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/determinants/applications" style="${linkStyle}">Cramer&apos;s rule</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">square n × n with det(A) ≠ 0; small n or symbolic work</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n + 1 determinant evaluations; impractical for large n</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Inverse formula x = A<sup>−1</sup>b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">square A with det(A) ≠ 0</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">computing A<sup>−1</sup> costs roughly 3× elimination; rarely the most efficient choice</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/decompositions/lower-upper" style="${linkStyle}">LU decomposition</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiple right-hand sides b sharing the same coefficient matrix A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one factorization (cost of elimination) plus cheap triangular solves for each b</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Iterative methods (Jacobi, Gauss-Seidel, CG)</td>
      <td style="padding: 12px 15px; color: #34495e;">very large sparse systems where direct methods are too costly</td>
      <td style="padding: 12px 15px; color: #34495e;">produces a sequence of approximations; convergence depends on the matrix structure</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: rank conditions → outcome → solution set → geometry
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Rank pattern</th>
      <th style="${tableHeaders.summary}">Outcome</th>
      <th style="${tableHeaders.summary}">Solution set structure</th>
      <th style="${tableHeaders.summary}">Geometric picture</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">rank(A) &lt; rank([A | b])</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inconsistent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">empty</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">hyperplanes with no common point (e.g., parallel lines in ℝ²)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">rank(A) = rank([A | b]) = n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">consistent and determined</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a single point in ℝⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n independent hyperplanes meet at one point</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">rank(A) = rank([A | b]) = r &lt; n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">consistent and underdetermined</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">affine flat: particular solution + null space of A; dimension n − r</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">hyperplanes intersect along a line, plane, or higher flat</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">rank(A) &lt; n with b = 0 (<a href="/linear-algebra/linear-systems/homogeneous" style="${linkStyle}">homogeneous</a>)</td>
      <td style="padding: 12px 15px; color: #34495e;">nontrivial solutions exist</td>
      <td style="padding: 12px 15px; color: #34495e;">null space of A; subspace of dimension n − rank(A)</td>
      <td style="padding: 12px 15px; color: #34495e;">a subspace through the origin</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  obj1: {
    title: `What a Linear System Is`,
    content: `A linear system is a set of $m$ equations in $n$ unknowns where each equation is a linear combination of the unknowns equal to a constant:

@academic[formula_callout:What a Linear System Is
$$a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1$$]@
@academic[formula_callout:What a Linear System Is
$$a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_2$$]@
@academic[formula_callout:What a Linear System Is
$$\\vdots$$]@
@academic[formula_callout:What a Linear System Is
$$a_{m1}x_1 + a_{m2}x_2 + \\cdots + a_{mn}x_n = b_m$$]@

"Linear" means no products of unknowns, no powers higher than $1$, and no transcendental functions of unknowns. The expression $3x_1 - 2x_2 + x_3 = 7$ is linear; the expression $x_1 x_2 + x_3^2 = 1$ is not.

A solution is an assignment of values to $x_1, \\dots, x_n$ that satisfies every equation simultaneously. The solution set is the collection of all solutions. The central question is: what does this set look like?`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Writing a System in Matrix Form`,
    content: `The entire system can be compressed into a single [matrix](!/linear-algebra/matrix) equation:

@academic[formula_callout:Linear System Matrix Form
$$A\\mathbf{x} = \\mathbf{b}$$
/linear-algebra/formulas#linear_system_matrix_form]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

where $A$ is the $m \\times n$ coefficient matrix with entry $a_{ij}$ in row $i$, column $j$; $\\mathbf{x} = (x_1, x_2, \\dots, x_n)^T$ is the unknown vector; and $\\mathbf{b} = (b_1, b_2, \\dots, b_m)^T$ is the right-hand side.

Each row of $A$ corresponds to one equation. Each column corresponds to one unknown. The matrix-vector product $A\\mathbf{x}$ is a [linear combination](!/linear-algebra/vectors/linear-combinations) of the columns of $A$ weighted by the entries of $\\mathbf{x}$:

@academic[formula_callout:Matrix-Vector Product (Column Form)
$$A\\mathbf{x} = x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n$$
/linear-algebra/formulas#matrix-vector_product_column_form]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

Asking whether $A\\mathbf{x} = \\mathbf{b}$ has a solution is therefore equivalent to asking whether $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$ — whether $\\mathbf{b}$ can be assembled from the columns using some choice of weights.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Augmented Matrix`,
    content: `The augmented matrix packages the coefficient matrix and the right-hand side into a single object:

@academic[formula_callout:Augmented Matrix Construction
$$[A \\mid \\mathbf{b}] = \\left(\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right)$$
/linear-algebra/formulas#augmented_matrix_construction]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The vertical bar separates the coefficients from the constants but is purely notational — the augmented matrix is an $m \\times (n+1)$ matrix on which row operations are performed. Every row operation on $[A \\mid \\mathbf{b}]$ corresponds to a legal algebraic manipulation of the equations: swapping two equations, multiplying an equation by a nonzero scalar, or adding a multiple of one equation to another. None of these changes the solution set.

The augmented matrix is the object that [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination) operates on, and comparing its [rank](!/linear-algebra/matrix/rank) to the rank of $A$ alone determines whether the system is consistent.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `The Three Possible Outcomes`,
    content: `A linear system $A\\mathbf{x} = \\mathbf{b}$ has exactly one of three outcomes.

No solution: the system is inconsistent. The equations impose contradictory constraints — there is no $\\mathbf{x}$ that satisfies all of them. In the augmented matrix, this manifests as a row of the form $[0 \\; 0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$, representing the impossible equation $0 = d$.

Exactly one solution: the system is consistent and determined. There is a unique $\\mathbf{x}$ satisfying all equations. This requires the coefficient matrix to have [rank](!/linear-algebra/matrix/rank) equal to $n$ (the number of unknowns), leaving no free variables.

Infinitely many solutions: the system is consistent but underdetermined. The constraints do not pin down a single point — the solution set is a line, plane, or higher-dimensional flat parametrized by free variables.

There is no fourth option.

@academic[rule_theorem_plain:A linear system never has exactly two solutions, or ten, or any finite number greater than one.]@

The proof is simple: if $\\mathbf{x}_1$ and $\\mathbf{x}_2$ are both solutions with $\\mathbf{x}_1 \\neq \\mathbf{x}_2$, then $\\mathbf{x}_1 + t(\\mathbf{x}_2 - \\mathbf{x}_1)$ is a solution for every $t \\in \\mathbb{R}$, producing infinitely many.

@academic[pitfall,aside:true,width:35%:Treating a zero row as a contradiction
Reading the zero row of $\\left(\\begin{array}{cc|c} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\end{array}\\right)$ as a sign of inconsistency gives no solution. The row says $0 = 0$, true for every $\\mathbf{x}$; with $y$ free, $x = 3 - 2y$, and there are infinitely many solutions.
[Read more](!#pitfalls)]@

In practice the outcome is read from the augmented matrix after row reduction, working up from the bottom row. Rows whose coefficients have all been eliminated often appear there, because one equation of the system was a combination of the others or contradicted them. The table below collects what each outcome looks like in the reduced matrix.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Geometric Interpretation`,
    content: `Each equation in a linear system defines a hyperplane in $\\mathbb{R}^n$. The solution set is the intersection of all $m$ hyperplanes.

For two equations in two unknowns, each equation is a line in $\\mathbb{R}^2$. Two distinct non-parallel lines meet at exactly one point — a unique solution. Parallel lines never meet — no solution. Coincident lines (the same line described twice) overlap entirely — infinitely many solutions.

For three equations in three unknowns, each equation is a plane in $\\mathbb{R}^3$. Three planes can intersect in a point, along a line, or not at all. They can also coincide or be arranged so that each pair intersects but no point lies on all three — a triangular prism configuration that yields no solution.

In higher dimensions the geometry is harder to visualize but the classification persists. The rank of the coefficient matrix counts how many hyperplanes cut independently — each independent equation reduces the dimension of the intersection by one.

@academic[rule_theorem_plain:If the rank is $r$ and the system is consistent, the solution set has dimension $n - r$.]@`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Elementary Row Operations`,
    content: `The three elementary row operations are the legal moves that transform one augmented matrix into another without altering the solution set.

Swapping two rows ($R_i \\leftrightarrow R_j$) reorders the equations. Multiplying a row by a nonzero scalar ($kR_i \\to R_i$) rescales an equation. Adding a multiple of one row to another ($R_i + cR_j \\to R_i$) replaces one equation with a combination of two equations.

@academic[rule_theorem_plain:Each operation is reversible: a swap undoes itself, scaling by $k$ is reversed by scaling by $1/k$, and adding $c$ times row $j$ to row $i$ is reversed by subtracting $c$ times row $j$ from row $i$. Reversibility guarantees that the solution set is unchanged — no solutions are created or destroyed.]@

@academic[pitfall,aside:true,width:35%:Leaving the right-hand side unchanged
Applying $R_2 - 2R_1 \\to R_2$ to the coefficients only turns $\\left(\\begin{array}{cc|c} 1 & 1 & 3 \\\\ 2 & 1 & 4 \\end{array}\\right)$ into a second row $(0, -1 \\mid 4)$, giving $y = -4$, $x = 7$. On the full row it is $(0, -1 \\mid -2)$, so $y = 2$ and $x = 1$.
[Read more](!#pitfalls)]@

Each row operation corresponds to left-multiplication by an [elementary matrix](!/linear-algebra/matrix/operations). This algebraic interpretation connects the row-reduction algorithm to the theory of matrix factorization and [invertibility](!/linear-algebra/matrix/inverse). The full systematic application of row operations is [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `Row Echelon Form and Reduced Row Echelon Form`,
    content: `Row operations aim to reduce the augmented matrix to a standard shape from which the solution can be read.

Row echelon form (REF) has a staircase pattern: the leading entry of each row is to the right of the leading entry of the row above, and all entries below each leading entry are zero. In REF, the solution is obtained by back substitution — solving from the bottom row upward.

Reduced row echelon form (RREF) goes further: each leading entry is $1$ and is the only nonzero entry in its column. In RREF, the solution is visible by inspection — each pivot variable is already isolated.

@academic[rule_theorem_plain:The RREF of any matrix is unique. Different sequences of row operations always arrive at the same RREF.]@

This uniqueness makes the pivot positions intrinsic to the matrix: the [rank](!/linear-algebra/matrix/rank), the free variables, and the solvability verdict all follow from the pivot structure. The full treatment of both forms, including how to read solutions from each, is on the [echelon form](!/linear-algebra/linear-systems/echelon-form) page.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Homogeneous Systems`,
    content: `The special case $A\\mathbf{x} = \\mathbf{0}$ — where every right-hand side entry is zero — is called a [homogeneous](!/linear-algebra/linear-systems/homogeneous) system. It is always consistent, since $\\mathbf{x} = \\mathbf{0}$ satisfies every equation. The question is whether nontrivial solutions exist.

Nontrivial solutions exist if and only if the rank of $A$ is less than $n$. If the system has more unknowns than equations ($n > m$), nontrivial solutions are guaranteed — the rank cannot exceed $m$, which is less than $n$.

@academic[rule_theorem_plain:The solution set of a homogeneous system is the [null space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$: a [subspace](!/linear-algebra/vector-spaces/subspaces) of $\\mathbb{R}^n$ with dimension $n - \\text{rank}(A)$.]@

The superposition principle holds — any linear combination of solutions is again a solution — which is why the solution set has the clean structure of a vector space rather than an arbitrary collection of points.

@academic[pitfall,aside:true,width:35%:Adding solutions of a non-homogeneous system
Adding two solutions of $x + y = 2$, such as $(2, 0)$ and $(0, 2)$, gives $(2, 2)$, where $x + y = 4$; in general $A(\\mathbf{x}_1 + \\mathbf{x}_2) = 2\\mathbf{b}$. Superposition holds only when $\\mathbf{b} = \\mathbf{0}$; here the difference $(2, -2)$ solves $x + y = 0$.
[Read more](!#pitfalls)]@

A system with a nonzero right-hand side, $A\\mathbf{x} = \\mathbf{b}$, is tied to the homogeneous system $A\\mathbf{x} = \\mathbf{0}$ with the same coefficient matrix. When it is consistent, its solution set is one particular solution plus every solution of the homogeneous system: the null space moved away from the origin. It is a point, line, plane or higher flat that does not pass through the origin, so it is not a subspace.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `When Does a Solution Exist? When Is It Unique?`,
    content: `The rank of $A$ determines both existence and uniqueness of solutions to $A\\mathbf{x} = \\mathbf{b}$.

Existence: a solution exists if and only if $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}])$. This means $\\mathbf{b}$ lies in the column space of $A$ — appending it as an extra column does not introduce a new independent direction.

Uniqueness: if a solution exists, it is unique if and only if $\\text{rank}(A) = n$. Full column rank means no free variables and a trivial null space, so the particular solution stands alone with no homogeneous component to add freedom.

When $A$ is square ($m = n$) and $\\det(A) \\neq 0$, both conditions hold for every $\\mathbf{b}$: the system always has a unique solution, given by $\\mathbf{x} = A^{-1}\\mathbf{b}$. When $A$ is rectangular or singular, the analysis requires comparing ranks and identifying free variables. The full treatment, including overdetermined and underdetermined systems, is on the [solvability](!/linear-algebra/linear-systems/solvability) page.

@academic[pitfall,aside:true,width:35%:Reading a zero determinant as no solution
Concluding no solution from $\\det(A) = 0$ fails for $x + y = 2$, $2x + 2y = 4$. The determinant is $1 \\cdot 2 - 1 \\cdot 2 = 0$, yet the second equation is twice the first, so every point $(t, 2 - t)$ is a solution.
[Read more](!#pitfalls)]@

For a singular square matrix the outcome depends on $\\mathbf{b}$ as well as on $A$. The same coefficient matrix can give a consistent system for one right-hand side and an inconsistent one for another, and the existence condition above, the comparison of $\\text{rank}(A)$ with $\\text{rank}([A \\mid \\mathbf{b}])$, is what separates the two.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Solution Methods Beyond Row Reduction`,
    content: `Gaussian elimination is the most general and widely used method, but several alternatives exist for special cases.

[Cramer's rule](!/linear-algebra/determinants/applications) solves an $n \\times n$ system by expressing each unknown as a ratio of [determinants](!/linear-algebra/determinants). It gives a closed-form solution but is computationally impractical for large $n$.

The [inverse](!/linear-algebra/matrix/inverse) formula $\\mathbf{x} = A^{-1}\\mathbf{b}$ applies when $A$ is square and invertible. It is elegant but rarely the most efficient approach — computing $A^{-1}$ costs roughly three times as much as solving by elimination.

[LU decomposition](!/linear-algebra/decompositions/lower-upper) factors $A$ into a lower triangular matrix $L$ and an upper triangular matrix $U$. Once the factorization is computed, solving $A\\mathbf{x} = \\mathbf{b}$ reduces to two cheap triangular solves. This is the method of choice when multiple systems share the same coefficient matrix $A$ but have different right-hand sides.

Iterative methods — Jacobi, Gauss-Seidel, conjugate gradient — generate a sequence of approximations converging to the solution. They are preferred for very large sparse systems where direct methods would require too much memory or time. These methods lie at the boundary between linear algebra and numerical analysis.

To solve a specific system with Gaussian elimination, Gauss-Jordan or Cramer's rule and see each step, use the [linear systems calculator](!/linear-algebra/calculators/linear-systems).`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Rank Conditions and Solution Sets`,
    content: `The rank of A and its relationship to the rank of the augmented matrix [A | b] settles every question about A·x = b — whether a solution exists, whether it is unique, and what shape the solution set takes. The table below collects each rank pattern alongside the resulting outcome, the structure of the solution set, and the geometric picture, providing a single reference card for the hub.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj12: {
    title: `Common Pitfalls`,
    content: `Four mistakes account for many wrong verdicts about linear systems. Each is marked with a box where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Treating a zero row as a contradiction**

After row reduction, a row whose coefficients are all zero is taken as a sign that the system has no solution, without looking at its last entry. Only a row $[0 \\; \\cdots \\; 0 \\mid d]$ with $d \\neq 0$ is a contradiction; a row $[0 \\; \\cdots \\; 0 \\mid 0]$ is the equation $0 = 0$.

Wrong working: for $x + 2y = 3$, $2x + 4y = 6$, the operation $R_2 - 2R_1 \\to R_2$ gives
$$\\left(\\begin{array}{cc|c} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\end{array}\\right)$$
and the zero row is read as "inconsistent, no solution".

Right working: the second row says $0x + 0y = 0$, which every $\\mathbf{x}$ satisfies. Only $x + 2y = 3$ remains, $y$ is free, and
$$(x, y) = (3 - 2t, \\; t), \\quad t \\in \\mathbb{R}$$
gives infinitely many solutions. Had the second equation been $2x + 4y = 7$, the same operation would give the row $[0 \\; 0 \\mid 1]$, the impossible $0 = 1$, and then there would be no solution.

Why it happens: a row of zero coefficients appears both when an equation is redundant and when it contradicts the others, and only the last entry tells the two apart.

How to check: look at the entry to the right of the bar. Or substitute one candidate: $t = 0$ gives $(3, 0)$, and $3 + 0 = 3$, $6 + 0 = 6$ both hold.

**Leaving the right-hand side unchanged**

A row operation is carried out on the coefficient part of the augmented matrix, and the entry to the right of the bar is copied down unchanged. The new row then stands for an equation the system never implied.

Wrong working: for $x + y = 3$, $2x + y = 4$, apply $R_2 - 2R_1 \\to R_2$ to the coefficients only:
$$\\left(\\begin{array}{cc|c} 1 & 1 & 3 \\\\ 2 & 1 & 4 \\end{array}\\right) \\to \\left(\\begin{array}{cc|c} 1 & 1 & 3 \\\\ 0 & -1 & 4 \\end{array}\\right)$$
so $y = -4$ and $x = 3 - (-4) = 7$.

Right working: the operation acts on the whole row, so the last entry becomes $4 - 2 \\cdot 3 = -2$:
$$\\left(\\begin{array}{cc|c} 1 & 1 & 3 \\\\ 0 & -1 & -2 \\end{array}\\right)$$
so $y = 2$ and $x = 3 - 2 = 1$.

Why it happens: the bar makes the last column look like a separate object, and much of the work on a system, such as finding the rank of $A$, looks at the coefficients alone.

How to check: substitute into the original equations. $(1, 2)$ gives $1 + 2 = 3$ and $2 + 2 = 4$. The wrong answer $(7, -4)$ satisfies the first equation but gives $14 - 4 = 10 \\neq 4$ in the second.

**Adding solutions of a non-homogeneous system**

The superposition principle of homogeneous systems is applied to $A\\mathbf{x} = \\mathbf{b}$ with $\\mathbf{b} \\neq \\mathbf{0}$: the sum or a multiple of two solutions is taken to be another solution.

Wrong working: $(2, 0)$ and $(0, 2)$ both solve $x + y = 2$, so their sum $(2, 2)$ is taken as a solution. But $2 + 2 = 4 \\neq 2$.

Right working: in general
$$A(\\mathbf{x}_1 + \\mathbf{x}_2) = A\\mathbf{x}_1 + A\\mathbf{x}_2 = \\mathbf{b} + \\mathbf{b} = 2\\mathbf{b}$$
What does hold is $A(\\mathbf{x}_1 - \\mathbf{x}_2) = \\mathbf{0}$: the difference $(2, -2)$ solves $x + y = 0$. The solutions of $x + y = 2$ are one particular solution plus the homogeneous ones:
$$(x, y) = (2, 0) + t(-1, 1) = (2 - t, \\; t)$$

Why it happens: superposition is learned for homogeneous systems, and the right-hand side is not checked when it is reused.

How to check: if the solutions of $A\\mathbf{x} = \\mathbf{b}$ could be added and scaled freely, $0 \\cdot \\mathbf{x}_1 = \\mathbf{0}$ would be one of them. But $A\\mathbf{0} = \\mathbf{0} \\neq \\mathbf{b}$.

**Reading a zero determinant as no solution**

For a square system, $\\det(A) = 0$ is taken to mean that there is no solution. It only means that the solution is not unique for every $\\mathbf{b}$: depending on $\\mathbf{b}$, there are no solutions or infinitely many.

Wrong working: for $x + y = 2$, $2x + 2y = 4$,
$$\\det\\begin{pmatrix} 1 & 1 \\\\ 2 & 2 \\end{pmatrix} = 1 \\cdot 2 - 1 \\cdot 2 = 0$$
so the system is declared to have no solution.

Right working: reduce the augmented matrix.
$$\\left(\\begin{array}{cc|c} 1 & 1 & 2 \\\\ 2 & 2 & 4 \\end{array}\\right) \\to \\left(\\begin{array}{cc|c} 1 & 1 & 2 \\\\ 0 & 0 & 0 \\end{array}\\right)$$
Here $\\text{rank}(A) = \\text{rank}([A \\mid \\mathbf{b}]) = 1 < 2$, so there are infinitely many solutions, $(t, \\; 2 - t)$. With the right-hand side $(2, 5)$ instead, the last row becomes $[0 \\; 0 \\mid 1]$, the ranks are $1$ and $2$, and then there is no solution.

Why it happens: $\\det(A) \\neq 0$ means exactly one solution for every $\\mathbf{b}$, and its negation is misread as no solution at all.

How to check: compare $\\text{rank}(A)$ with $\\text{rank}([A \\mid \\mathbf{b}])$, or simply try to find one solution: $(2, 0)$ satisfies both $x + y = 2$ and $2x + 2y = 4$.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `Solving Ax = b`,
  content: `A linear system is a collection of linear equations in several unknowns. Writing it in matrix form as Ax = b transforms the problem into a question about matrices: is b in the column space of A, and if so, what are the weights? Row reduction answers both questions systematically, and the rank of the coefficient matrix determines whether the solution exists, whether it is unique, and what the solution set looks like.`,
}



const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Systems of Linear Equations",
    "description": "Systems of linear equations: matrix form Ax = b, augmented matrix, three possible outcomes, geometric interpretation, row operations, echelon form, homogeneous systems, and solvability conditions.",
    "url": "https://www.learnmathclass.com/linear-algebra/linear-systems",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Systems of Linear Equations"
    },
    "teaches": [
      "Linear systems and the matrix equation Ax = b",
      "Augmented matrix and column space interpretation",
      "Three possible outcomes: none, unique, infinitely many",
      "Geometric interpretation as hyperplane intersections",
      "Elementary row operations and their reversibility",
      "Row echelon and reduced row echelon form",
      "Homogeneous systems and the null space",
      "Rank-based existence and uniqueness conditions",
      "Solution methods: elimination, Cramer, LU, iterative"
    ],
    "keywords": keyWords.join(", "),
    "author": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Learn Math Class"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString()
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
        "name": "Linear Algebra",
        "item": "https://www.learnmathclass.com/linear-algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Linear Systems",
        "item": "https://www.learnmathclass.com/linear-algebra/linear-systems"
      }
    ]
  },
}

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/linear-systems",
//          name: "name"
//       },
        
//        }
//     }


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.

  const demoUnits = {
    bothReadings: demoUnitFrame({
      svg: [matrixProductDiagrams.columnsComplete, matrixProductDiagrams.rowsComplete],
      caption: 'The same product read down the columns, then across the rows',
      text: 'The upper plane builds each column of the product as a combination of the columns on the left; the lower one builds each row as a combination of the rows on the right. Both walks end on the same matrix, which is why the sentence above can describe a row as an equation and a column as an unknown without contradiction &#8212; they are two readings of one product, not two products. Step through either reading on the',
      href: '/linear-algebra/visual-tools/matrix-multiplication-rows-columns',
      linkText: 'rows and columns visualizer',
    }),
  
    outcomes: demoUnitFrame({
      svg: [linearSystemDiagrams.unique, linearSystemDiagrams.none, linearSystemDiagrams.infinite],
      caption: 'Unique, none, infinitely many',
      text: 'Three finished eliminations, three different endings: a pivot in every column and one answer; a contradiction row and no answer; a free column and a whole family of answers. There is no fourth ending available to a linear system, and which one you get is settled by the pivots rather than by the arithmetic. Build systems that land in each case on the',
      href: '/linear-algebra/visual-tools/linear-system-solutions',
      linkText: 'linear system solutions visualizer',
    }),
    echelon: demoUnitFrame({
      svg: [gaussEliminationDiagrams.refDone, gaussEliminationDiagrams.rrefDone],
      caption: 'Row echelon form, then reduced',
      text: 'The upper form has zeros below every pivot and is enough to back-substitute from. The lower one goes further, clearing above the pivots and scaling them to one, so the solution can simply be read off. The extra work buys legibility, not correctness. Run both passes on a system of your own on the',
      href: '/linear-algebra/visual-tools/gauss-elimination',
      linkText: 'Gaussian elimination visualizer',
    }),
    augmented: demoUnitFrame({
      svg: gaussEliminationDiagrams.initial,
      caption: '[A | b] before any row operation',
      text: 'The coefficient matrix on the left of the bar, the right-hand side b on the right: one row per equation, one column per unknown, and the constants carried along as a final column. Every row operation acts on the whole row, bar included, which is why the right-hand side stays correct as the left side is reduced. Start the reduction from here on the',
      href: '/linear-algebra/visual-tools/gauss-elimination',
      linkText: 'Gaussian elimination calculator',
    }),
  };

  const linesGeometryCases = {
    prefaceTitle: 'Two lines in the plane',
    preface: 'Each equation of a linear system is a hyperplane, and the solution set is where they all meet. For two equations in two unknowns each equation is a line in $\\mathbb{R}^2$, and how the two lines lie decides the outcome.',
    conclusionTitle: 'Takeaway',
    conclusion: 'The same classification persists in higher dimensions: three planes in $\\mathbb{R}^3$ can meet in a point, along a line, or not at all, including the triangular prism arrangement where each pair meets but no point lies on all three.',
    parent: {
      kicker: 'Two equations, two unknowns',
      formula: 'two lines in $\\mathbb{R}^2$',
      splitBy: 'how the two lines lie',
    },
    cases: [
      {
        id: 'cross', condition: 'distinct, not parallel',
        count: { n: '1', label: 'solution' },
        headline: 'Meet at one point',
        desc: 'a unique solution',
      },
      {
        id: 'parallel', condition: 'parallel',
        count: { n: '0', label: 'solutions' },
        headline: 'Never meet',
        desc: 'no solution',
      },
      {
        id: 'same', condition: 'coincident',
        count: { n: '∞', label: 'solutions' },
        headline: 'Overlap entirely',
        desc: 'the same line described twice: infinitely many solutions',
      },
    ],
  };

  const solutionMethodTree = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Other routes to the solution',
    preface: 'Row reduction is not the only way to solve $A\\mathbf{x} = \\mathbf{b}$. Each alternative suits a different situation.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'Size and structure decide',
    conclusion: 'Small systems tolerate any method; many right-hand sides favour LU; large sparse systems favour iterative methods.',
    root: { name: 'Solving A x = b', sub: 'beyond row reduction' },
    children: [
      { id: 'cramer', name: '[Cramer\'s rule](!/linear-algebra/determinants/applications)', items: [
        { label: 'How', text: 'each unknown is a ratio of determinants' } ], flag: true, warn: 'impractical for large $n$' },
      { id: 'inv', name: '[Inverse](!/linear-algebra/matrix/inverse)', symbol: '$\\mathbf{x} = A^{-1}\\mathbf{b}$', items: [
        { label: 'Needs', text: '$A$ square and invertible' }, { label: 'Cost', text: 'about 3 times elimination' } ] },
      { id: 'lu', name: '[LU](!/linear-algebra/decompositions/lower-upper)', items: [
        { label: 'How', text: 'two triangular solves' }, { label: 'Best for', text: 'many right-hand sides' } ] },
      { id: 'iter', name: 'Iterative', items: [
        { label: 'Examples', text: 'Jacobi, Gauss-Seidel, conjugate gradient' }, { label: 'Best for', text: 'large sparse systems' } ] },
    ],
  };

return {
  props:{
    solutionMethodTree,
    linesGeometryCases,
    demoUnits,
    sectionsContent,
    introContent,
    obj4Table,
    obj10Table,
    summaryTable,
    schemas,
    seoData: {
      title: "Linear Systems: Solving Ax = b | Learn Math Class",
      description: "Systems of linear equations: matrix form Ax = b, augmented matrix, three possible outcomes, geometric interpretation, row operations, echelon form, homogeneous systems, and solvability conditions.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/linear-systems",
      name: "Systems of Linear Equations"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {
const figureTheme = { title: '#06357A', parentBg: '#06357A', accent: '#2563EB', warm: '#B45309' }

export default function LinearSystemsPage({solutionMethodTree, linesGeometryCases, 
  seoData,
  sectionsContent,
  introContent,
  obj4Table,
  obj10Table,
  summaryTable,
  schemas, demoUnits
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
                  <div key={'unit-bothReadings'} dangerouslySetInnerHTML={{ __html: demoUnits.bothReadings }} />,
          `The rest of this page works in the row reading, because elimination acts on equations; the column reading returns whenever the question is about span.`,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div key={'unit-augmented'} dangerouslySetInnerHTML={{ __html: demoUnits.augmented }} />,
          `The bar is only bookkeeping: [A | b] is the whole system with the variable names left out.`,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div
            key={'obj4-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj4Table }}
          />,
                  <div key={'unit-outcomes'} dangerouslySetInnerHTML={{ __html: demoUnits.outcomes }} />,
          `Everything else on this page is machinery for finding out which of these three you are in.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <DiagramFrame
            key={'obj5-diagram'}
            id="two-lines-solution-cases"
            title="Two equations, two unknowns: how the lines meet"
            source="/linear-algebra/linear-systems"
          >
            <CaseSplit data={linesGeometryCases} variant="poster" proseStyle="cards" theme={figureTheme} />
          </DiagramFrame>,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
                  <div key={'unit-echelon'} dangerouslySetInnerHTML={{ __html: demoUnits.echelon }} />,
          `Reduced form is unique to the matrix, while the echelon form reached along the way depends on the route taken.`,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div
            key={'obj10-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj10Table }}
          />,
          <DiagramFrame
            key={'obj10-diagram'}
            id="solution-methods-tree"
            title="Solving Ax = b beyond row reduction"
            source="/linear-algebra/linear-systems"
          >
            <TopDownTree data={solutionMethodTree} />
          </DiagramFrame>,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    {
        id:'pitfalls',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
]

  return (
   <>
   {/* <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
    }}
  />
</Head> */}

<Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
  <meta property="og:title" content={seoData.title} />
  <meta property="og:description" content={seoData.description} />
  <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Learn Math Class" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={seoData.title} />
  <meta name="twitter:description" content={seoData.description} />
  
  <meta name="robots" content="index, follow" />
  
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.learningResource)
    }}
  />

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.breadcrumb)
    }}
  />

</Head>
   {/* <GenericNavbar/> */}
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
           side='right'
           // topOffset='65px' 
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         /> 
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Systems of Linear Equations</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}