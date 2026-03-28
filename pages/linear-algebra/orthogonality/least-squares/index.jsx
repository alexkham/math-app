import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'


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
  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj8:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj9:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj10:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj11:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj12:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj13:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },
//     obj14:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
//       link:'',
  
//     },


//     obj15:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
//     }
  
//   }

const sectionsContent = {
  obj1: {
    title: `The Problem`,
    content: `The [system](!/linear-algebra/linear-systems) $A\\mathbf{x} = \\mathbf{b}$ may have no solution — $\\mathbf{b}$ may not lie in the [column space](!/linear-algebra/vector-spaces/fundamental-subspaces) of $A$. This is typical when the system is overdetermined: more equations than unknowns, with the equations imposing contradictory constraints.

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

The [matrix](!/linear-algebra/matrix) $A^TA$ is always [symmetric](!/linear-algebra/matrix/types) and positive semi-definite. When $A$ has full column [rank](!/linear-algebra/matrix/rank) (the columns are [linearly independent](!/linear-algebra/vector-spaces/linear-independence)), $A^TA$ is positive definite and [invertible](!/linear-algebra/matrix/inverse), giving a unique least-squares solution:

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
export default function LeastSquaresPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
    // {
    //     id:'11',
    //     title:sectionsContent.obj11.title,
    //     link:sectionsContent.obj11.link,
    //     content:[
    //       sectionsContent.obj11.content,
    //     ]
    // },
    // {
    //     id:'12',
    //     title:sectionsContent.obj12.title,
    //     link:sectionsContent.obj12.link,
    //     content:[
    //       sectionsContent.obj12.content,
    //     ]
    // },
    // {
    //     id:'13',
    //     title:sectionsContent.obj13.title,
    //     link:sectionsContent.obj13.link,
    //     content:[
    //       sectionsContent.obj13.content,
    //     ]
    // },
    // {
    //     id:'14',
    //     title:sectionsContent.obj14.title,
    //     link:sectionsContent.obj14.link,
    //     content:[
    //       sectionsContent.obj14.content,
    //     ]
    // },
    // {
    //     id:'15',
    //     title:sectionsContent.obj15.title,
    //     link:sectionsContent.obj15.link,
    //     content:[
    //       sectionsContent.obj15.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    
]

  return (
   <>
   {/* <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Least Squares</h1>
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
