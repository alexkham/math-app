// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import React from 'react'
// import '../../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){
// const keyWords = [
//   "least squares",
//   "least squares solution",
//   "normal equations",
//   "least squares regression",
//   "ATA x = ATb",
//   "overdetermined system",
//   "least squares line fitting",
//   "projection least squares",
//   "pseudoinverse matrix",
//   "QR least squares",
//   "linear regression matrix",
//   "sum of squared residuals",
//   "best fit line",
//   "least squares approximation",
//   "hat matrix projection"
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

// //     const sectionsContent={

// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }

// const sectionsContent = {
//   obj1: {
//     title: `The Problem`,
//     content: `The [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ may have no solution — $\\mathbf{b}$ may not lie in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$. This is typical when the system is overdetermined: more equations than unknowns, with the equations imposing contradictory constraints.

// When no exact solution exists, the goal shifts from solving $A\\mathbf{x} = \\mathbf{b}$ to minimizing the error:

// $$\\hat{\\mathbf{x}} = \\arg\\min_{\\mathbf{x}} \\|A\\mathbf{x} - \\mathbf{b}\\|^2$$

// The quantity $\\|A\\mathbf{x} - \\mathbf{b}\\|^2 = \\sum_i (A\\mathbf{x} - \\mathbf{b})_i^2$ is the sum of squared residuals. The vector $\\hat{\\mathbf{x}}$ that minimizes this sum is the least-squares solution.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `The Geometric Interpretation`,
//     content: `The set of all vectors $A\\mathbf{x}$ as $\\mathbf{x}$ ranges over $\\mathbb{R}^n$ is the column space of $A$. Minimizing $\\|A\\mathbf{x} - \\mathbf{b}\\|$ means finding the point in the column space closest to $\\mathbf{b}$. That closest point is the [orthogonal projection](!/linear-algebra/orthogonality/projections) $\\hat{\\mathbf{b}} = \\text{proj}_{\\text{Col}(A)}\\mathbf{b}$.

// The least-squares solution $\\hat{\\mathbf{x}}$ satisfies $A\\hat{\\mathbf{x}} = \\hat{\\mathbf{b}}$ — it produces the projection, not the original $\\mathbf{b}$. The residual $\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}} = \\mathbf{b} - \\hat{\\mathbf{b}}$ is the component of $\\mathbf{b}$ [orthogonal](!/linear-algebra/orthogonality) to the column space. It lies in $\\text{Col}(A)^\\perp = \\text{Null}(A^T)$.

// The orthogonality condition $A^T\\mathbf{r} = \\mathbf{0}$ — the residual is perpendicular to every column of $A$ — is the geometric content of the least-squares solution. It is this condition that leads to the normal equations.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `The Normal Equations`,
//     content: `The orthogonality condition $A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}$ rearranges to

// $$A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$$

// These are the normal equations. They form a square $n \\times n$ system regardless of the shape of $A$.

// The [matrix](!/linear-algebra/matrix) $A^TA$ is always [symmetric](!/linear-algebra/matrix/types) and positive semi-definite. When $A$ has full column rank (the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence)), $A^TA$ is positive definite and [invertible](!/linear-algebra/matrix/inverse), giving a unique least-squares solution:

// $$\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b}$$

// When $A$ does not have full column rank, $A^TA$ is singular and the normal equations have infinitely many solutions. All produce the same projection $\\hat{\\mathbf{b}} = A\\hat{\\mathbf{x}}$, but the $\\hat{\\mathbf{x}}$ vectors differ. The minimum-norm solution — the one with smallest $\\|\\hat{\\mathbf{x}}\\|$ — is selected by the pseudoinverse.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Worked Example: Fitting a Line`,
//     content: `Fit a line $y = c_0 + c_1 x$ to the data points $(1, 2)$, $(2, 3)$, $(3, 6)$, $(4, 7)$.

// The model $y_i = c_0 + c_1 x_i$ for each data point gives the system $A\\mathbf{c} = \\mathbf{y}$ with

// $$A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\\\ 1 & 3 \\\\ 1 & 4 \\end{pmatrix}, \\quad \\mathbf{y} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 6 \\\\ 7 \\end{pmatrix}$$

// Four equations in two unknowns — overdetermined. The normal equations:

// $$A^TA = \\begin{pmatrix} 4 & 10 \\\\ 10 & 30 \\end{pmatrix}, \\quad A^T\\mathbf{y} = \\begin{pmatrix} 18 \\\\ 53 \\end{pmatrix}$$

// Solving: $\\det(A^TA) = 120 - 100 = 20$. $(A^TA)^{-1} = \\frac{1}{20}\\begin{pmatrix} 30 & -10 \\\\ -10 & 4 \\end{pmatrix}$.

// $$\\hat{\\mathbf{c}} = \\frac{1}{20}\\begin{pmatrix} 30 & -10 \\\\ -10 & 4 \\end{pmatrix}\\begin{pmatrix} 18 \\\\ 53 \\end{pmatrix} = \\frac{1}{20}\\begin{pmatrix} 540 - 530 \\\\ -180 + 212 \\end{pmatrix} = \\frac{1}{20}\\begin{pmatrix} 10 \\\\ 32 \\end{pmatrix} = \\begin{pmatrix} 0.5 \\\\ 1.6 \\end{pmatrix}$$

// The best-fit line is $y = 0.5 + 1.6x$. The residuals are $2 - 2.1 = -0.1$, $3 - 3.7 = -0.7$, $6 - 5.3 = 0.7$, $7 - 6.9 = 0.1$. Their sum of squares $0.01 + 0.49 + 0.49 + 0.01 = 1.0$ is the minimum achievable error for any line through these data.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Worked Example: Fitting a Parabola`,
//     content: `Fit a parabola $y = c_0 + c_1 x + c_2 x^2$ to the same data $(1, 2)$, $(2, 3)$, $(3, 6)$, $(4, 7)$.

// The design matrix gains a third column:

// $$A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 4 \\\\ 1 & 3 & 9 \\\\ 1 & 4 & 16 \\end{pmatrix}$$

// The normal equations $A^TA\\hat{\\mathbf{c}} = A^T\\mathbf{y}$ now form a $3 \\times 3$ system. The machinery is identical — only the model matrix changes. A higher-degree model provides a closer fit (the residual sum of squares cannot increase when the model gains flexibility), but it also risks fitting noise rather than signal.

// The framework generalizes to any linear model: $y = c_0 f_0(x) + c_1 f_1(x) + \\cdots + c_k f_k(x)$ where the functions $f_i$ are chosen in advance. Each choice produces a different design matrix $A$, and the normal equations produce the best coefficients in the least-squares sense.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `The Projection Matrix`,
//     content: `The [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space is $\\hat{\\mathbf{b}} = P\\mathbf{b}$ where

// $$P = A(A^TA)^{-1}A^T$$

// When the columns of $A$ are [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) ($A = Q$ with $Q^TQ = I$), this simplifies to $P = QQ^T$.

// The projection matrix is [symmetric](!/linear-algebra/matrix/types) ($P^T = P$) and [idempotent](!/linear-algebra/matrix/types) ($P^2 = P$). The complementary matrix $I - P$ projects onto the orthogonal complement $\\text{Col}(A)^\\perp$ and extracts the residual: $\\mathbf{r} = (I - P)\\mathbf{b}$.

// The minimum squared error is

// $$\\|\\mathbf{r}\\|^2 = \\|(I - P)\\mathbf{b}\\|^2 = \\|\\mathbf{b}\\|^2 - \\|P\\mathbf{b}\\|^2$$

// by the [Pythagorean theorem](!/linear-algebra/orthogonality/inner-product), since $P\\mathbf{b}$ and $(I - P)\\mathbf{b}$ are orthogonal.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The Pseudoinverse`,
//     content: `The matrix $A^+ = (A^TA)^{-1}A^T$ (when $A$ has full column rank) is called the left pseudoinverse of $A$. The least-squares solution is $\\hat{\\mathbf{x}} = A^+\\mathbf{b}$.

// The pseudoinverse satisfies $A^+A = I_n$ (it is a left inverse of $A$), but $AA^+ \\neq I_m$ in general — the product $AA^+$ equals the projection matrix $P$.

// When $A$ does not have full column rank, the Moore-Penrose pseudoinverse $A^+$ is defined through the [singular value decomposition](!/linear-algebra/decompositions/svd): if $A = U\\Sigma V^T$, then $A^+ = V\\Sigma^+ U^T$, where $\\Sigma^+$ inverts the nonzero singular values and transposes the shape. The Moore-Penrose pseudoinverse gives the minimum-norm least-squares solution — the $\\hat{\\mathbf{x}}$ of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Least Squares via QR`,
//     content: `The [QR decomposition](!/linear-algebra/orthogonality/gram-schmidt) $A = QR$ provides a numerically superior method for solving the normal equations.

// Substituting $A = QR$ into $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ gives $R^TQ^TQR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Since $Q^TQ = I$, this simplifies to $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Multiplying both sides by $(R^T)^{-1}$:

// $$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

// The right-hand side $Q^T\\mathbf{b}$ is a vector of $n$ dot products. The left-hand side is an upper [triangular](!/linear-algebra/matrix/types) system, solved by back substitution.

// The critical advantage is numerical. Forming $A^TA$ explicitly squares the [condition number](!/linear-algebra/matrix/rank) of $A$, amplifying rounding errors. The QR approach works with $Q$ and $R$ directly, preserving the original conditioning. This is why QR-based least squares is the standard algorithm in numerical software, from MATLAB to Python's NumPy.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Regression as Least Squares`,
//     content: `The entire framework of linear regression is a least-squares problem in matrix form.

// Simple linear regression fits $y = \\beta_0 + \\beta_1 x + \\epsilon$ to data $(x_i, y_i)$. The design matrix has a column of ones and a column of $x_i$ values. The normal equations produce the slope $\\hat{\\beta}_1$ and intercept $\\hat{\\beta}_0$ that minimize $\\sum(y_i - \\beta_0 - \\beta_1 x_i)^2$.

// Multiple linear regression fits $\\mathbf{y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\epsilon}$ where $X$ is the design matrix with rows for observations and columns for predictors. The normal equations $X^TX\\hat{\\boldsymbol{\\beta}} = X^T\\mathbf{y}$ give the coefficient estimates.

// The projection matrix $P = X(X^TX)^{-1}X^T$ is called the hat matrix in statistics because it puts the "hat" on $\\mathbf{y}$: $\\hat{\\mathbf{y}} = P\\mathbf{y}$. The residual vector $\\mathbf{e} = \\mathbf{y} - \\hat{\\mathbf{y}} = (I - P)\\mathbf{y}$ is the component of $\\mathbf{y}$ orthogonal to the column space of $X$, and $\\|\\mathbf{e}\\|^2$ is the residual sum of squares.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `The Minimum Error`,
//     content: `The least-squares error $\\|\\mathbf{r}\\| = \\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\|$ is the distance from $\\mathbf{b}$ to the column space of $A$. It is the length of the [orthogonal](!/linear-algebra/orthogonality) component of $\\mathbf{b}$ with respect to $\\text{Col}(A)$.

// By the Pythagorean theorem, since $\\hat{\\mathbf{b}} = A\\hat{\\mathbf{x}}$ and $\\mathbf{r} = \\mathbf{b} - \\hat{\\mathbf{b}}$ are perpendicular:

// $$\\|\\mathbf{b}\\|^2 = \\|\\hat{\\mathbf{b}}\\|^2 + \\|\\mathbf{r}\\|^2$$

// The error is what remains after the projection accounts for as much of $\\mathbf{b}$ as possible. The ratio $\\|\\hat{\\mathbf{b}}\\|^2 / \\|\\mathbf{b}\\|^2$ (computed with centered data in regression) is the coefficient of determination $R^2$ — the fraction of the total variation explained by the model. An $R^2$ close to $1$ means the column space captures nearly all of $\\mathbf{b}$; close to $0$ means the model explains little.

// The error is zero if and only if $\\mathbf{b} \\in \\text{Col}(A)$ — if and only if the original system $A\\mathbf{x} = \\mathbf{b}$ has an exact solution. In that case, the least-squares solution is the exact solution, and the two problems coincide.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

// const introContent = {
//   title: `The Best Approximate Solution`,
//   content: `When a linear system has no solution, the least-squares method finds the vector that comes closest — the one minimizing the squared distance between Ax and b. The answer is a projection: the least-squares solution produces the point in the column space nearest to b, and the normal equations encode the orthogonality condition that defines "nearest."`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is the least-squares solution?",
//     answer: "The least-squares solution x̂ minimizes the sum of squared residuals ‖Ax − b‖² when the system Ax = b has no exact solution. It produces the point in the column space of A closest to b, which is the orthogonal projection of b onto Col(A).",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What are the normal equations?",
//     answer: "The normal equations are AᵀAx̂ = Aᵀb. They arise from requiring the residual b − Ax̂ to be orthogonal to every column of A. When A has full column rank, AᵀA is invertible and the unique solution is x̂ = (AᵀA)⁻¹Aᵀb.",
//     sectionId: "3"
//   },
//   obj3: {
//     question: "How do you find the least-squares line through data points?",
//     answer: "Set up the design matrix A with a column of ones and a column of x-values. The vector b contains the y-values. Solve the normal equations AᵀAĉ = Aᵀb to get the intercept and slope that minimize the sum of squared vertical distances from the data to the line.",
//     sectionId: "4"
//   },
//   obj4: {
//     question: "Why is QR decomposition preferred for least squares?",
//     answer: "Forming AᵀA explicitly squares the condition number of A, amplifying rounding errors. The QR decomposition A = QR reduces least squares to the triangular system Rx̂ = Qᵀb, which preserves the original conditioning and is the standard algorithm in numerical software.",
//     sectionId: "8"
//   },
//   obj5: {
//     question: "What is the pseudoinverse?",
//     answer: "The pseudoinverse A⁺ = (AᵀA)⁻¹Aᵀ gives the least-squares solution as x̂ = A⁺b when A has full column rank. When A is rank-deficient, the Moore-Penrose pseudoinverse from the SVD selects the minimum-norm least-squares solution.",
//     sectionId: "7"
//   },
//   obj6: {
//     question: "How is least squares related to linear regression?",
//     answer: "Linear regression is least squares in matrix form. The design matrix X holds predictor values, and the normal equations XᵀXβ̂ = Xᵀy produce the regression coefficients. The hat matrix P = X(XᵀX)⁻¹Xᵀ projects y onto the column space of X, and R² measures how much of y the projection captures.",
//     sectionId: "9"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Least Squares",
//     "description": "Least-squares approximation in linear algebra: normal equations, projection interpretation, line and curve fitting, pseudoinverse, QR method, and connection to linear regression.",
//     "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/least-squares",
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
//       "name": "Least Squares"
//     },
//     "teaches": [
//       "Least-squares problem for overdetermined systems",
//       "Geometric interpretation as orthogonal projection",
//       "Normal equations AᵀAx̂ = Aᵀb",
//       "Line and curve fitting via least squares",
//       "Projection matrix and pseudoinverse",
//       "QR decomposition for numerical least squares",
//       "Connection to linear regression and R²"
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
//         "name": "Orthogonality",
//         "item": "https://www.learnmathclass.com/linear-algebra/orthogonality"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Least Squares",
//         "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/least-squares"
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


//   //  return {
//   //     props:{
//   //        sectionsContent,
//   //        introContent,
//   //         seoData: {
//   //       title: "Least Squares | Learn Math Class",
//   //       description: "Metadescription",
//   //       keywords: keyWords.join(", "),
//   //       url: "/linear-algebra/orthogonality/least-squares",
//   //        name: "name"
//   //     },
        
//   //      }
//   //   }

//   return {
//   props:{
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Least Squares: Normal Equations & Regression | Learn Math Class",
//       description: "Least-squares approximation in linear algebra: normal equations, projection interpretation, line and curve fitting, pseudoinverse, QR method, and connection to linear regression.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/orthogonality/least-squares",
//       name: "Least Squares"
//     },
//   }
// }
//    }

// // export default function LeastSquaresPage({seoData,sectionsContent , introContent}) {
// export default function LeastSquaresPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Least Squares</h1>
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



// tables-optimized: v4 | 2026-05-18 | 3 tables (obj5 aggregation, obj9 aggregation, obj11 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'


export async function getStaticProps(){
const keyWords = [
  "least squares",
  "least squares solution",
  "normal equations",
  "least squares regression",
  "ATA x = ATb",
  "overdetermined system",
  "least squares line fitting",
  "projection least squares",
  "pseudoinverse matrix",
  "QR least squares",
  "linear regression matrix",
  "sum of squared residuals",
  "best fit line",
  "least squares approximation",
  "hat matrix projection"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj5 — aggregation: linear models that all fit into the same least-squares framework
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Model</th>
      <th style="${tableHeaders.aggregation}">Number of parameters</th>
      <th style="${tableHeaders.aggregation}">Row of the design matrix A</th>
      <th style="${tableHeaders.aggregation}">Typical use</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Line: y = c<sub>0</sub> + c<sub>1</sub> x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[ 1, x<sub>i</sub> ]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">linear trends in one variable</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Parabola: y = c<sub>0</sub> + c<sub>1</sub> x + c<sub>2</sub> x²</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[ 1, x<sub>i</sub>, x<sub>i</sub>² ]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">smooth one-variable curves with curvature</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Polynomial of degree k</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">k + 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[ 1, x<sub>i</sub>, x<sub>i</sub>², …, x<sub>i</sub><sup>k</sup> ]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">higher-order curve fitting; flexible but prone to overfit</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Generic linear model: y = Σ<sub>j</sub> c<sub>j</sub> f<sub>j</sub>(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">k + 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">[ f<sub>0</sub>(x<sub>i</sub>), f<sub>1</sub>(x<sub>i</sub>), …, f<sub>k</sub>(x<sub>i</sub>) ]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">arbitrary basis functions (sinusoids, exponentials, splines)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Multiple linear regression: y = β<sub>0</sub> + Σ<sub>j</sub> β<sub>j</sub> x<sub>j</sub></td>
      <td style="padding: 12px 15px; color: #34495e;">k + 1</td>
      <td style="padding: 12px 15px; color: #34495e;">[ 1, x<sub>1,i</sub>, x<sub>2,i</sub>, …, x<sub>k,i</sub> ]</td>
      <td style="padding: 12px 15px; color: #34495e;">several predictors per observation</td>
    </tr>
  </tbody>
</table>
`

// obj9 — aggregation / translation: linear algebra ↔ statistics terminology
const obj9Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Linear-algebra object</th>
      <th style="${tableHeaders.aggregation}">Statistics / regression name</th>
      <th style="${tableHeaders.aggregation}">Symbol and role</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Coefficient matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">design matrix / predictor matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">X — rows = observations, columns = features (with an intercept column of 1s)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Vector of unknowns</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">coefficient (parameter) vector</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">β — parameters to be estimated</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Right-hand side</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">response vector</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">y — observed outcomes</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Least-squares solution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">estimated coefficients</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">β̂ = (XᵀX)⁻¹ Xᵀ y</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/orthogonality/projections" style="${linkStyle}">Projection</a> matrix P</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">hat matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">P = X(XᵀX)⁻¹Xᵀ — puts the &quot;hat&quot; on y</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Projection of b onto Col(A)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fitted values</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">ŷ = P y = X β̂</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Residual vector</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">residual (errors)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">e = y − ŷ = (I − P) y</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Squared residual length</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">residual sum of squares (RSS)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">‖e‖² = Σᵢ (y<sub>i</sub> − ŷ<sub>i</sub>)²</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Fraction of length captured by projection (centered)</td>
      <td style="padding: 12px 15px; color: #34495e;">coefficient of determination</td>
      <td style="padding: 12px 15px; color: #34495e;">R² — fraction of variation in y explained by the model</td>
    </tr>
  </tbody>
</table>
`

// obj11 — summary capstone: methods for computing the least-squares solution
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">How the LS solution is obtained</th>
      <th style="${tableHeaders.summary}">Cost (m × n, m ≫ n)</th>
      <th style="${tableHeaders.summary}">Numerical stability</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Normal equations directly</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">form AᵀA and Aᵀb; solve AᵀA x̂ = Aᵀb (e.g. by Cholesky)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">~ m n² + n³ / 3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">poor — forming AᵀA squares the condition number of A</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/linear-algebra/decompositions/qr" style="${linkStyle}">QR decomposition</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = Q R; solve the triangular system R x̂ = Qᵀ b by back substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">~ 2 m n² (Householder QR)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">good — preserves the original condition number; the workhorse in numerical libraries</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Pseudoinverse via <a href="/linear-algebra/decompositions/svd" style="${linkStyle}">SVD</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = U Σ Vᵀ; x̂ = V Σ⁺ Uᵀ b (Moore–Penrose pseudoinverse)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dominated by SVD: roughly ~ m n² + n³</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">best — handles rank-deficient A; returns the minimum-norm LS solution</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Iterative methods (e.g. CG on AᵀA)</td>
      <td style="padding: 12px 15px; color: #34495e;">apply Krylov-subspace iteration to AᵀA x̂ = Aᵀb without forming AᵀA explicitly</td>
      <td style="padding: 12px 15px; color: #34495e;">depends on iteration count; one matrix-vector product per iteration</td>
      <td style="padding: 12px 15px; color: #34495e;">depends on preconditioning; preferred when A is huge and sparse</td>
    </tr>
  </tbody>
</table>
`


const sectionsContent = {
  obj1: {
    title: `The Problem`,
    content: `The [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ may have no solution — $\\mathbf{b}$ may not lie in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces) of $A$. This is typical when the system is overdetermined: more equations than unknowns, with the equations imposing contradictory constraints.

When no exact solution exists, the goal shifts from solving $A\\mathbf{x} = \\mathbf{b}$ to minimizing the error:

$$\\hat{\\mathbf{x}} = \\arg\\min_{\\mathbf{x}} \\|A\\mathbf{x} - \\mathbf{b}\\|^2$$

The quantity $\\|A\\mathbf{x} - \\mathbf{b}\\|^2 = \\sum_i (A\\mathbf{x} - \\mathbf{b})_i^2$ is the sum of squared residuals. The vector $\\hat{\\mathbf{x}}$ that minimizes this sum is the least-squares solution.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `The Geometric Interpretation`,
    content: `The set of all vectors $A\\mathbf{x}$ as $\\mathbf{x}$ ranges over $\\mathbb{R}^n$ is the column space of $A$. Minimizing $\\|A\\mathbf{x} - \\mathbf{b}\\|$ means finding the point in the column space closest to $\\mathbf{b}$. That closest point is the [orthogonal projection](!/linear-algebra/orthogonality/projections) $\\hat{\\mathbf{b}} = \\text{proj}_{\\text{Col}(A)}\\mathbf{b}$.

The least-squares solution $\\hat{\\mathbf{x}}$ satisfies $A\\hat{\\mathbf{x}} = \\hat{\\mathbf{b}}$ — it produces the projection, not the original $\\mathbf{b}$. The residual $\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}} = \\mathbf{b} - \\hat{\\mathbf{b}}$ is the component of $\\mathbf{b}$ [orthogonal](!/linear-algebra/orthogonality) to the column space. It lies in $\\text{Col}(A)^\\perp = \\text{Null}(A^T)$.

The orthogonality condition $A^T\\mathbf{r} = \\mathbf{0}$ — the residual is perpendicular to every column of $A$ — is the geometric content of the least-squares solution. It is this condition that leads to the normal equations.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `The Normal Equations`,
    content: `The orthogonality condition $A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}$ rearranges to

$$A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$$

These are the normal equations. They form a square $n \\times n$ system regardless of the shape of $A$.

The [matrix](!/linear-algebra/matrix) $A^TA$ is always [symmetric](!/linear-algebra/matrix/types) and positive semi-definite. When $A$ has full column rank (the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence)), $A^TA$ is positive definite and [invertible](!/linear-algebra/matrix/inverse), giving a unique least-squares solution:

$$\\hat{\\mathbf{x}} = (A^TA)^{-1}A^T\\mathbf{b}$$

When $A$ does not have full column rank, $A^TA$ is singular and the normal equations have infinitely many solutions. All produce the same projection $\\hat{\\mathbf{b}} = A\\hat{\\mathbf{x}}$, but the $\\hat{\\mathbf{x}}$ vectors differ. The minimum-norm solution — the one with smallest $\\|\\hat{\\mathbf{x}}\\|$ — is selected by the pseudoinverse.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Worked Example: Fitting a Line`,
    content: `Fit a line $y = c_0 + c_1 x$ to the data points $(1, 2)$, $(2, 3)$, $(3, 6)$, $(4, 7)$.

The model $y_i = c_0 + c_1 x_i$ for each data point gives the system $A\\mathbf{c} = \\mathbf{y}$ with

$$A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\\\ 1 & 3 \\\\ 1 & 4 \\end{pmatrix}, \\quad \\mathbf{y} = \\begin{pmatrix} 2 \\\\ 3 \\\\ 6 \\\\ 7 \\end{pmatrix}$$

Four equations in two unknowns — overdetermined. The normal equations:

$$A^TA = \\begin{pmatrix} 4 & 10 \\\\ 10 & 30 \\end{pmatrix}, \\quad A^T\\mathbf{y} = \\begin{pmatrix} 18 \\\\ 53 \\end{pmatrix}$$

Solving: $\\det(A^TA) = 120 - 100 = 20$. $(A^TA)^{-1} = \\frac{1}{20}\\begin{pmatrix} 30 & -10 \\\\ -10 & 4 \\end{pmatrix}$.

$$\\hat{\\mathbf{c}} = \\frac{1}{20}\\begin{pmatrix} 30 & -10 \\\\ -10 & 4 \\end{pmatrix}\\begin{pmatrix} 18 \\\\ 53 \\end{pmatrix} = \\frac{1}{20}\\begin{pmatrix} 540 - 530 \\\\ -180 + 212 \\end{pmatrix} = \\frac{1}{20}\\begin{pmatrix} 10 \\\\ 32 \\end{pmatrix} = \\begin{pmatrix} 0.5 \\\\ 1.6 \\end{pmatrix}$$

The best-fit line is $y = 0.5 + 1.6x$. The residuals are $2 - 2.1 = -0.1$, $3 - 3.7 = -0.7$, $6 - 5.3 = 0.7$, $7 - 6.9 = 0.1$. Their sum of squares $0.01 + 0.49 + 0.49 + 0.01 = 1.0$ is the minimum achievable error for any line through these data.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Worked Example: Fitting a Parabola`,
    content: `Fit a parabola $y = c_0 + c_1 x + c_2 x^2$ to the same data $(1, 2)$, $(2, 3)$, $(3, 6)$, $(4, 7)$.

The design matrix gains a third column:

$$A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 4 \\\\ 1 & 3 & 9 \\\\ 1 & 4 & 16 \\end{pmatrix}$$

The normal equations $A^TA\\hat{\\mathbf{c}} = A^T\\mathbf{y}$ now form a $3 \\times 3$ system. The machinery is identical — only the model matrix changes. A higher-degree model provides a closer fit (the residual sum of squares cannot increase when the model gains flexibility), but it also risks fitting noise rather than signal.

The framework generalizes to any linear model: $y = c_0 f_0(x) + c_1 f_1(x) + \\cdots + c_k f_k(x)$ where the functions $f_i$ are chosen in advance. Each choice produces a different design matrix $A$, and the normal equations produce the best coefficients in the least-squares sense.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `The Projection Matrix`,
    content: `The [projection](!/linear-algebra/orthogonality/projections) of $\\mathbf{b}$ onto the column space is $\\hat{\\mathbf{b}} = P\\mathbf{b}$ where

$$P = A(A^TA)^{-1}A^T$$

When the columns of $A$ are [orthonormal](!/linear-algebra/orthogonality/orthogonal-sets) ($A = Q$ with $Q^TQ = I$), this simplifies to $P = QQ^T$.

The projection matrix is [symmetric](!/linear-algebra/matrix/types) ($P^T = P$) and [idempotent](!/linear-algebra/matrix/types) ($P^2 = P$). The complementary matrix $I - P$ projects onto the orthogonal complement $\\text{Col}(A)^\\perp$ and extracts the residual: $\\mathbf{r} = (I - P)\\mathbf{b}$.

The minimum squared error is

$$\\|\\mathbf{r}\\|^2 = \\|(I - P)\\mathbf{b}\\|^2 = \\|\\mathbf{b}\\|^2 - \\|P\\mathbf{b}\\|^2$$

by the [Pythagorean theorem](!/linear-algebra/orthogonality/inner-product), since $P\\mathbf{b}$ and $(I - P)\\mathbf{b}$ are orthogonal.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Pseudoinverse`,
    content: `The matrix $A^+ = (A^TA)^{-1}A^T$ (when $A$ has full column rank) is called the left pseudoinverse of $A$. The least-squares solution is $\\hat{\\mathbf{x}} = A^+\\mathbf{b}$.

The pseudoinverse satisfies $A^+A = I_n$ (it is a left inverse of $A$), but $AA^+ \\neq I_m$ in general — the product $AA^+$ equals the projection matrix $P$.

When $A$ does not have full column rank, the Moore-Penrose pseudoinverse $A^+$ is defined through the [singular value decomposition](!/linear-algebra/decompositions/svd): if $A = U\\Sigma V^T$, then $A^+ = V\\Sigma^+ U^T$, where $\\Sigma^+$ inverts the nonzero singular values and transposes the shape. The Moore-Penrose pseudoinverse gives the minimum-norm least-squares solution — the $\\hat{\\mathbf{x}}$ of smallest length among all minimizers of $\\|A\\mathbf{x} - \\mathbf{b}\\|$.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Least Squares via QR`,
    content: `The [QR decomposition](!/linear-algebra/orthogonality/gram-schmidt) $A = QR$ provides a numerically superior method for solving the normal equations.

Substituting $A = QR$ into $A^TA\\hat{\\mathbf{x}} = A^T\\mathbf{b}$ gives $R^TQ^TQR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Since $Q^TQ = I$, this simplifies to $R^TR\\hat{\\mathbf{x}} = R^TQ^T\\mathbf{b}$. Multiplying both sides by $(R^T)^{-1}$:

$$R\\hat{\\mathbf{x}} = Q^T\\mathbf{b}$$

The right-hand side $Q^T\\mathbf{b}$ is a vector of $n$ dot products. The left-hand side is an upper [triangular](!/linear-algebra/matrix/types) system, solved by back substitution.

The critical advantage is numerical. Forming $A^TA$ explicitly squares the [condition number](!/linear-algebra/matrix/rank) of $A$, amplifying rounding errors. The QR approach works with $Q$ and $R$ directly, preserving the original conditioning. This is why QR-based least squares is the standard algorithm in numerical software, from MATLAB to Python's NumPy.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Regression as Least Squares`,
    content: `The entire framework of linear regression is a least-squares problem in matrix form.

Simple linear regression fits $y = \\beta_0 + \\beta_1 x + \\epsilon$ to data $(x_i, y_i)$. The design matrix has a column of ones and a column of $x_i$ values. The normal equations produce the slope $\\hat{\\beta}_1$ and intercept $\\hat{\\beta}_0$ that minimize $\\sum(y_i - \\beta_0 - \\beta_1 x_i)^2$.

Multiple linear regression fits $\\mathbf{y} = X\\boldsymbol{\\beta} + \\boldsymbol{\\epsilon}$ where $X$ is the design matrix with rows for observations and columns for predictors. The normal equations $X^TX\\hat{\\boldsymbol{\\beta}} = X^T\\mathbf{y}$ give the coefficient estimates.

The projection matrix $P = X(X^TX)^{-1}X^T$ is called the hat matrix in statistics because it puts the "hat" on $\\mathbf{y}$: $\\hat{\\mathbf{y}} = P\\mathbf{y}$. The residual vector $\\mathbf{e} = \\mathbf{y} - \\hat{\\mathbf{y}} = (I - P)\\mathbf{y}$ is the component of $\\mathbf{y}$ orthogonal to the column space of $X$, and $\\|\\mathbf{e}\\|^2$ is the residual sum of squares.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `The Minimum Error`,
    content: `The least-squares error $\\|\\mathbf{r}\\| = \\|\\mathbf{b} - A\\hat{\\mathbf{x}}\\|$ is the distance from $\\mathbf{b}$ to the column space of $A$. It is the length of the [orthogonal](!/linear-algebra/orthogonality) component of $\\mathbf{b}$ with respect to $\\text{Col}(A)$.

By the Pythagorean theorem, since $\\hat{\\mathbf{b}} = A\\hat{\\mathbf{x}}$ and $\\mathbf{r} = \\mathbf{b} - \\hat{\\mathbf{b}}$ are perpendicular:

$$\\|\\mathbf{b}\\|^2 = \\|\\hat{\\mathbf{b}}\\|^2 + \\|\\mathbf{r}\\|^2$$

The error is what remains after the projection accounts for as much of $\\mathbf{b}$ as possible. The ratio $\\|\\hat{\\mathbf{b}}\\|^2 / \\|\\mathbf{b}\\|^2$ (computed with centered data in regression) is the coefficient of determination $R^2$ — the fraction of the total variation explained by the model. An $R^2$ close to $1$ means the column space captures nearly all of $\\mathbf{b}$; close to $0$ means the model explains little.

The error is zero if and only if $\\mathbf{b} \\in \\text{Col}(A)$ — if and only if the original system $A\\mathbf{x} = \\mathbf{b}$ has an exact solution. In that case, the least-squares solution is the exact solution, and the two problems coincide.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Summary: Methods for Computing the Least-Squares Solution`,
    content: `The least-squares solution x̂ can be computed by several distinct routes, each with its own cost and numerical-stability profile. The table below collects the main methods alongside their formulas, operation counts, and stability characteristics, providing a single reference for choosing among them.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

const introContent = {
  title: `The Best Approximate Solution`,
  content: `When a linear system has no solution, the least-squares method finds the vector that comes closest — the one minimizing the squared distance between Ax and b. The answer is a projection: the least-squares solution produces the point in the column space nearest to b, and the normal equations encode the orthogonality condition that defines "nearest."`,
}

const faqQuestions = {
  obj1: {
    question: "What is the least-squares solution?",
    answer: "The least-squares solution x̂ minimizes the sum of squared residuals ‖Ax − b‖² when the system Ax = b has no exact solution. It produces the point in the column space of A closest to b, which is the orthogonal projection of b onto Col(A).",
    sectionId: "1"
  },
  obj2: {
    question: "What are the normal equations?",
    answer: "The normal equations are AᵀAx̂ = Aᵀb. They arise from requiring the residual b − Ax̂ to be orthogonal to every column of A. When A has full column rank, AᵀA is invertible and the unique solution is x̂ = (AᵀA)⁻¹Aᵀb.",
    sectionId: "3"
  },
  obj3: {
    question: "How do you find the least-squares line through data points?",
    answer: "Set up the design matrix A with a column of ones and a column of x-values. The vector b contains the y-values. Solve the normal equations AᵀAĉ = Aᵀb to get the intercept and slope that minimize the sum of squared vertical distances from the data to the line.",
    sectionId: "4"
  },
  obj4: {
    question: "Why is QR decomposition preferred for least squares?",
    answer: "Forming AᵀA explicitly squares the condition number of A, amplifying rounding errors. The QR decomposition A = QR reduces least squares to the triangular system Rx̂ = Qᵀb, which preserves the original conditioning and is the standard algorithm in numerical software.",
    sectionId: "8"
  },
  obj5: {
    question: "What is the pseudoinverse?",
    answer: "The pseudoinverse A⁺ = (AᵀA)⁻¹Aᵀ gives the least-squares solution as x̂ = A⁺b when A has full column rank. When A is rank-deficient, the Moore-Penrose pseudoinverse from the SVD selects the minimum-norm least-squares solution.",
    sectionId: "7"
  },
  obj6: {
    question: "How is least squares related to linear regression?",
    answer: "Linear regression is least squares in matrix form. The design matrix X holds predictor values, and the normal equations XᵀXβ̂ = Xᵀy produce the regression coefficients. The hat matrix P = X(XᵀX)⁻¹Xᵀ projects y onto the column space of X, and R² measures how much of y the projection captures.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Least Squares",
    "description": "Least-squares approximation in linear algebra: normal equations, projection interpretation, line and curve fitting, pseudoinverse, QR method, and connection to linear regression.",
    "url": "https://www.learnmathclass.com/linear-algebra/orthogonality/least-squares",
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
      "name": "Least Squares"
    },
    "teaches": [
      "Least-squares problem for overdetermined systems",
      "Geometric interpretation as orthogonal projection",
      "Normal equations AᵀAx̂ = Aᵀb",
      "Line and curve fitting via least squares",
      "Projection matrix and pseudoinverse",
      "QR decomposition for numerical least squares",
      "Connection to linear regression and R²"
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
        "name": "Orthogonality",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Least Squares",
        "item": "https://www.learnmathclass.com/linear-algebra/orthogonality/least-squares"
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


  //  return {
  //     props:{
  //        sectionsContent,
  //        introContent,
  //         seoData: {
  //       title: "Least Squares | Learn Math Class",
  //       description: "Metadescription",
  //       keywords: keyWords.join(", "),
  //       url: "/linear-algebra/orthogonality/least-squares",
  //        name: "name"
  //     },
        
  //      }
  //   }

  return {
  props:{
    sectionsContent,
    introContent,
    obj5Table,
    obj9Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Least Squares: Normal Equations & Regression | Learn Math Class",
      description: "Least-squares approximation in linear algebra: normal equations, projection interpretation, line and curve fitting, pseudoinverse, QR method, and connection to linear regression.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/orthogonality/least-squares",
      name: "Least Squares"
    },
  }
}
   }

// export default function LeastSquaresPage({seoData,sectionsContent , introContent}) {
export default function LeastSquaresPage({
  seoData,
  sectionsContent,
  introContent,
  obj5Table,
  obj9Table,
  summaryTable,
  faqQuestions,
  schemas,
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
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div
            key={'obj5-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj5Table }}
          />,
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
          <div
            key={'obj9-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj9Table }}
          />,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
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

  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify(schemas.faq)
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Least Squares</h1>
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