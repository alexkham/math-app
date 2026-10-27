// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import '../../pages.css'
// import Head from 'next/head'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//  const keyWords = [
//   'matrix',
//   'matrix definition',
//   'matrix dimensions',
//   'matrix notation',
//   'matrix multiplication',
//   'matrix inverse',
//   'matrix transpose',
//   'matrix rank',
//   'matrix trace',
//   'linear transformation matrix',
//   'square matrix',
//   'identity matrix',
//   'matrix arithmetic',
//   'systems of equations matrix',
//   'matrix types linear algebra'
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
//     title: `What a Matrix Is`,
//     content: `A matrix is a rectangular array of numbers arranged in rows and columns. The standard notation uses a capital letter for the matrix and a lowercase letter with two subscripts for its entries: the matrix $A$ has entry $a_{ij}$ in row $i$ and column $j$. The shorthand $A = (a_{ij})$ means "the matrix whose $(i,j)$ entry is $a_{ij}$."

// In full generality, an $m \\times n$ matrix looks like

// $$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$

// The entries can be real numbers, complex numbers, or elements of any algebraic field. Throughout this site, entries are real unless explicitly stated otherwise.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Dimensions, Rows, and Columns`,
//     content: `The size of a matrix is described by two numbers: $m$ rows and $n$ columns, written $m \\times n$. The notation $A \\in \\mathbb{R}^{m \\times n}$ states that $A$ is an $m \\times n$ matrix with real entries. The total number of entries is $m \\cdot n$. Order matters: a $3 \\times 5$ matrix and a $5 \\times 3$ matrix have different shapes and are never equal, regardless of their entries.

// Row $i$ of $A$ is the horizontal slice $(a_{i1}, a_{i2}, \\dots, a_{in})$, a $1 \\times n$ vector. Column $j$ is the vertical slice $(a_{1j}, a_{2j}, \\dots, a_{mj})^T$, an $m \\times 1$ vector. The main diagonal consists of the entries where the row index equals the column index: $a_{11}, a_{22}, \\dots, a_{kk}$ with $k = \\min(m, n)$. The diagonal is defined for any matrix, not just square ones, though it is most prominent in the square case.

// A matrix with $m = n$ is called square, and square matrices occupy a special position. Only square matrices can have a [determinant](!/linear-algebra/determinants), an [inverse](!/linear-algebra/matrix/inverse), [eigenvalues](!/linear-algebra/eigen), or a [trace](!/linear-algebra/matrix/trace). A column [vector](!/linear-algebra/vectors) in $\\mathbb{R}^n$ is simply an $n \\times 1$ matrix, a row vector is a $1 \\times n$ matrix, and a scalar is a $1 \\times 1$ matrix. Matrices unify all of these objects under a single framework.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Matrix Equality and the Zero Matrix`,
//     content: `Two matrices $A$ and $B$ are equal if and only if they have the same dimensions and every pair of corresponding entries matches: $a_{ij} = b_{ij}$ for all $i$ and $j$. A single mismatched entry makes the matrices unequal. If the dimensions differ, the matrices are never equal — a $2 \\times 3$ matrix cannot equal a $3 \\times 2$ matrix no matter what numbers they contain.

// The zero matrix is the $m \\times n$ matrix whose every entry is zero, written $O$ or $0_{m \\times n}$. It serves as the additive identity: $A + O = A$ for any matrix $A$ of the same size. Strictly speaking, there is a different zero matrix for each pair $(m, n)$, but the same symbol is used for all of them, with the dimensions understood from context.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Matrices as Collections of Vectors`,
//     content: `An $m \\times n$ matrix can be viewed as a collection of $n$ column vectors in $\\mathbb{R}^m$, arranged side by side:

// $$A = \\begin{pmatrix} | & | & & | \\\\ \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_n \\\\ | & | & & | \\end{pmatrix}$$

// Equivalently, it is a stack of $m$ row vectors in $\\mathbb{R}^n$. Both perspectives are useful, and choosing the right one often simplifies a problem considerably. The column view connects the matrix to concepts like [span](!/linear-algebra/vector-spaces/span), [linear independence](!/linear-algebra/vector-spaces/linear-independence), and column space. The row view connects it to systems of equations and row space.

// The column perspective also gives a powerful interpretation of the matrix-vector product. If $\\mathbf{x} = (x_1, x_2, \\dots, x_n)^T$, then

// $$A\\mathbf{x} = x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n$$

// The product $A\\mathbf{x}$ is a [linear combination](!/linear-algebra/vectors/linear-combinations) of the columns of $A$, weighted by the entries of $\\mathbf{x}$. This single observation underlies the theory of linear systems, transformations, and virtually everything else involving matrices.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Matrix Arithmetic at a Glance`,
//     content: `Matrices support several [operations](!/linear-algebra/matrix/operations), each with its own rules and dimension requirements.

// Addition is entry-by-entry: $(A + B)_{ij} = a_{ij} + b_{ij}$. Both matrices must have the same dimensions. Scalar multiplication scales every entry: $(cA)_{ij} = c \\cdot a_{ij}$. These two operations together give the set of all $m \\times n$ matrices the structure of a vector space of dimension $mn$.

// Matrix multiplication is more involved. For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ has size $m \\times p$, with each entry computed as the dot product of a row of $A$ with a column of $B$: $(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$. The number of columns of $A$ must equal the number of rows of $B$; otherwise the product is undefined.

// The transpose $A^T$ swaps rows and columns: $(A^T)_{ij} = a_{ji}$. An $m \\times n$ matrix becomes $n \\times m$.

// One property that distinguishes matrix arithmetic from ordinary arithmetic is that multiplication is not commutative. In general, $AB \\neq BA$, even when both products are defined. This asymmetry has far-reaching consequences throughout linear algebra.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Special Matrix Shapes`,
//     content: `Certain structural patterns appear so frequently that they have their own names and dedicated theory. A diagonal matrix has nonzero entries only on the main diagonal, making its arithmetic trivially simple — products, powers, and inverses all reduce to operations on the diagonal entries alone. The identity matrix $I$ is the diagonal matrix with every diagonal entry equal to $1$, serving as the multiplicative identity: $AI = IA = A$.

// A symmetric matrix satisfies $A = A^T$, meaning it is unchanged by transposition. Symmetric matrices have the remarkable property that all their eigenvalues are real and their eigenvectors can be chosen to be mutually orthogonal. A triangular matrix has all entries either above or below the diagonal equal to zero, making its determinant and eigenvalues readable directly from the diagonal.

// An orthogonal matrix satisfies $Q^T Q = I$, meaning its columns form an orthonormal set and its transpose is its inverse. Orthogonal matrices preserve lengths and angles, making them the algebraic counterpart of rotations and reflections.

// These and several other [types](!/linear-algebra/matrix/types) — including skew-symmetric, nilpotent, idempotent, and permutation matrices — each carry structural guarantees that simplify computation and deepen understanding.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The Inverse of a Matrix`,
//     content: `A square matrix $A$ is called invertible if there exists a matrix $A^{-1}$ satisfying $AA^{-1} = A^{-1}A = I$. When it exists, the [inverse](!/linear-algebra/matrix/inverse) is unique and effectively "undoes" the action of $A$: if $A$ maps $\\mathbf{x}$ to $\\mathbf{b}$, then $A^{-1}$ maps $\\mathbf{b}$ back to $\\mathbf{x}$.

// Not every square matrix has an inverse. The dividing line is the [determinant](!/linear-algebra/determinants): $A$ is invertible if and only if $\\det(A) \\neq 0$. For a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the inverse has the explicit formula

// $$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

// which breaks down precisely when $ad - bc = 0$. For larger matrices, the inverse can be computed by row reduction or through the adjugate formula, though in practice solving $Ax = \\mathbf{b}$ directly is almost always more efficient than computing $A^{-1}$.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Rank and Trace`,
//     content: `Two scalar quantities extracted from a matrix appear throughout linear algebra.

// The [rank](!/linear-algebra/matrix/rank) of an $m \\times n$ matrix is the number of linearly independent rows, which always equals the number of linearly independent columns. It measures the "effective dimensionality" of the matrix — how many of its rows or columns carry genuinely new information. The rank satisfies $0 \\leq \\text{rank}(A) \\leq \\min(m, n)$. When $\\text{rank}(A) = \\min(m, n)$, the matrix is said to have full rank, meaning no row or column is redundant.

// The [trace](!/linear-algebra/matrix/trace) is defined only for square matrices: $\\text{tr}(A) = a_{11} + a_{22} + \\cdots + a_{nn}$, the sum of the diagonal entries. Despite its simplicity, the trace encodes deep information. It equals the sum of the eigenvalues, it is invariant under changes of basis, and it satisfies the cyclic property $\\text{tr}(AB) = \\text{tr}(BA)$, which makes it a fundamental tool in both theoretical and applied contexts.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj9: {
//     title: `Matrices and Systems of Equations`,
//     content: `A system of $m$ linear equations in $n$ unknowns can be written compactly as

// $$Ax = \\mathbf{b}$$

// where $A$ is the $m \\times n$ coefficient matrix, $\\mathbf{x}$ is the $n \\times 1$ vector of unknowns, and $\\mathbf{b}$ is the $m \\times 1$ vector of right-hand sides. The augmented matrix $[A \\mid \\mathbf{b}]$ appends $\\mathbf{b}$ as an extra column, creating the compact representation used in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination).

// Whether the system has no solution, exactly one solution, or infinitely many solutions depends entirely on the rank of $A$ relative to the rank of the augmented matrix $[A \\mid \\mathbf{b}]$. When $A$ is square and invertible, the unique solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$. When $A$ is rectangular or singular, the analysis requires the [rank](!/linear-algebra/matrix/rank) and the structure of the null space.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj10: {
//     title: `Matrices as Linear Transformations`,
//     content: `Every $m \\times n$ matrix $A$ defines a function from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ by the rule $\\mathbf{x} \\mapsto A\\mathbf{x}$. This function is a [linear transformation](!/linear-algebra/transformations): it preserves addition ($A(\\mathbf{x} + \\mathbf{y}) = A\\mathbf{x} + A\\mathbf{y}$) and scalar multiplication ($A(c\\mathbf{x}) = cA\\mathbf{x}$).

// The columns of $A$ reveal exactly what the transformation does to the standard basis. The first column $\\mathbf{a}_1$ is the image of $\\mathbf{e}_1$, the second column $\\mathbf{a}_2$ is the image of $\\mathbf{e}_2$, and so on. Once the images of the basis vectors are known, the image of any vector follows by linearity.

// When $A$ is square and invertible, the transformation is bijective — every output has exactly one input, and the inverse transformation is given by $A^{-1}$. When $A$ is singular, the transformation collapses at least one dimension, mapping $\\mathbb{R}^n$ onto a proper subspace of $\\mathbb{R}^m$. The rank of $A$ is the dimension of this image, and the null space captures everything that gets sent to zero.

// This perspective transforms matrices from static tables of numbers into active geometric objects that rotate, stretch, compress, reflect, and project.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }


// const introContent = {
//     id: "intro",
//   title: `Rectangular Arrays of Numbers`,
//   content: `A matrix is one of the most versatile objects in mathematics. It encodes systems of equations, represents linear transformations, stores data in structured form, and serves as the computational backbone of nearly every topic in linear algebra. Understanding what matrices are, how to read them, and how their parts relate to one another is the starting point for everything that follows.`,
// }

// const faqQuestions = {
//   obj1: {
//     question: "What is a matrix in linear algebra?",
//     answer: "A matrix is a rectangular array of numbers arranged in rows and columns. It is denoted by a capital letter such as A, with individual entries identified by two subscripts indicating the row and column position. Matrices can contain real numbers, complex numbers, or elements of any algebraic field.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "What do the dimensions of a matrix mean?",
//     answer: "The dimensions of a matrix describe its size as m × n, where m is the number of rows and n is the number of columns. A 3 × 5 matrix has 3 rows and 5 columns and contains 15 entries total. Order matters — a 3 × 5 matrix and a 5 × 3 matrix have different shapes and are never equal.",
//     sectionId: "2"
//   },
//   obj3: {
//     question: "How does matrix multiplication work?",
//     answer: "To multiply matrices A (m × n) and B (n × p), the number of columns of A must equal the number of rows of B. Each entry of the product AB is computed as the dot product of a row of A with a column of B. The resulting matrix has dimensions m × p. Unlike ordinary multiplication, matrix multiplication is not commutative — AB does not generally equal BA.",
//     sectionId: "5"
//   },
//   obj4: {
//     question: "When is a matrix invertible?",
//     answer: "A square matrix A is invertible when there exists a matrix A⁻¹ such that AA⁻¹ = A⁻¹A = I. This happens if and only if the determinant of A is nonzero. For a 2 × 2 matrix, the inverse has an explicit formula involving the entries and the determinant ad − bc.",
//     sectionId: "7"
//   },
//   obj5: {
//     question: "How do matrices represent linear transformations?",
//     answer: "Every m × n matrix defines a linear transformation from Rⁿ to Rᵐ by the rule x ↦ Ax. The columns of the matrix are the images of the standard basis vectors, and the image of any other vector follows by linearity. The rank of the matrix equals the dimension of the image of the transformation.",
//     sectionId: "10"
//   }
// }


// // const schemas = {
// //   learningResource: {
// //     "@context": "https://schema.org",
// //     "@type": "LearningResource",
// //     "name": seoData.name,
// //     "description": seoData.description,
// //     "url": "https://www.learnmathclass.com" + seoData.url,
// //     "inLanguage": "en-US",
// //     "learningResourceType": "Explanation",
// //     "educationalLevel": "High School, College",
// //     "educationalUse": "Learning",
// //     "audience": {
// //       "@type": "EducationalAudience",
// //       "educationalRole": "student"
// //     },
// //     "about": {
// //       "@type": "Thing",
// //       "name": "Matrices in Linear Algebra"
// //     },
// //     "teaches": [
// //       "Matrix notation and entry indexing",
// //       "Matrix dimensions, rows, columns, and the main diagonal",
// //       "Matrix arithmetic including addition, scalar multiplication, and matrix multiplication",
// //       "Inverse matrices and the determinant condition for invertibility",
// //       "Rank, trace, and their algebraic significance",
// //       "Matrices as linear transformations between vector spaces"
// //     ],
// //     "keywords": keyWords.join(", "),
// //     "author": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "publisher": {
// //       "@type": "Organization",
// //       "name": "Learn Math Class"
// //     },
// //     "datePublished": "2024-01-15",
// //     "dateModified": new Date().toISOString()
// //   },

// //   breadcrumb: {
// //     "@context": "https://schema.org",
// //     "@type": "BreadcrumbList",
// //     "itemListElement": [
// //       {
// //         "@type": "ListItem",
// //         "position": 1,
// //         "name": "Home",
// //         "item": "https://www.learnmathclass.com"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 2,
// //         "name": "Linear Algebra",
// //         "item": "https://www.learnmathclass.com/linear-algebra"
// //       },
// //       {
// //         "@type": "ListItem",
// //         "position": 3,
// //         "name": "Matrices",
// //         "item": "https://www.learnmathclass.com/linear-algebra/matrix"
// //       }
// //     ]
// //   },

// //   faq: {
// //     "@context": "https://schema.org",
// //     "@type": "FAQPage",
// //     "mainEntity": Object.keys(faqQuestions).map(key => ({
// //       "@type": "Question",
// //       "name": faqQuestions[key].question,
// //       "acceptedAnswer": {
// //         "@type": "Answer",
// //         "text": faqQuestions[key].answer
// //       }
// //     }))
// //   }
// // }

// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Matrices in Linear Algebra",
//     "description": "Learn what matrices are in linear algebra — notation, dimensions, arithmetic, inverse, rank, trace, and how matrices represent linear transformations and systems of equations.",
//     "url": "https://www.learnmathclass.com/linear-algebra/matrix",
//     "inLanguage": "en-US",
//     "learningResourceType": "Explanation",
//     "educationalLevel": "High School, College",
//     "educationalUse": "Learning",
//     "audience": {
//       "@type": "EducationalAudience",
//       "educationalRole": "student"
//     },
//     "about": {
//       "@type": "Thing",
//       "name": "Matrices in Linear Algebra"
//     },
//     "teaches": [
//       "Matrix notation and entry indexing",
//       "Matrix dimensions, rows, columns, and the main diagonal",
//       "Matrix arithmetic including addition, scalar multiplication, and matrix multiplication",
//       "Inverse matrices and the determinant condition for invertibility",
//       "Rank, trace, and their algebraic significance",
//       "Matrices as linear transformations between vector spaces"
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
//         "name": "Matrices",
//         "item": "https://www.learnmathclass.com/linear-algebra/matrix"
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



//   return {
//   props: {
//     sectionsContent,
//     introContent,
//     faqQuestions,
//     schemas,
//     seoData: {
//       title: "Matrices: Definition, Types & Operations | Learn Math Class",
//       description: "Learn what matrices are in linear algebra — notation, dimensions, arithmetic, inverse, rank, trace, and how matrices represent linear transformations and systems of equations.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/matrix",
//       name: "Matrices in Linear Algebra"
//     },
//   }
// }
//    }



//    export default function MatricesPage({seoData, sectionsContent, introContent, schemas}) {
    
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Matrices</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="children"  // or "children"
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



// tables-optimized: v4 | 2026-05-20 | 4 tables (obj5 aggregation, obj6 aggregation, obj8 comparison, obj11 summary capstone)

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import linearTransformationDiagrams from '@/app/components/linear-algebra copy/r2-visualizers/linear-transformations/linearTransformationDiagrams'
import renderMatrixGrid from '@/app/utils/illustrations/linear-algebra/matrix/matrixGrid'
import vectorPictureDiagrams from '@/app/components/linear-algebra/multiplication/vectorPictureDiagrams'
import ConceptIntro from '@/app/components/concept-intro/ConceptIntro'
import TaxonomyOutline from '@/app/components/infographics/TaxonomyOutline/TaxonomyOutline'
import DiagramFrame from '@/app/components/infographics/DiagramsFrameV2'


export async function getStaticProps(){

 // Surfaced on the /linear-algebra hub via buildSectionData extraction.
 const hubMeta = {
   hubDescription: 'Explore matrices in linear algebra through our detailed guide. Starting with matrix definitions and notations, the page explains matrix structure, elements, and indexing. You will learn to distinguish between different matrix types — from basic row and column matrices to more complex square matrices. The guide also covers essential matrix properties and dives into special cases of square matrices like diagonal and triangular forms. Each topic features clear mathematical notation and visual examples to reinforce your understanding of these fundamental concepts.',
 }

 const keyWords = [
  'matrix',
  'matrix definition',
  'matrix dimensions',
  'matrix notation',
  'matrix multiplication',
  'matrix inverse',
  'matrix transpose',
  'matrix rank',
  'matrix trace',
  'linear transformation matrix',
  'square matrix',
  'identity matrix',
  'matrix arithmetic',
  'systems of equations matrix',
  'matrix types linear algebra'
]

  const linkStyle = 'color: inherit; text-decoration: underline;'

  // ---------- TABLES ----------

  // obj5 — aggregation: matrix arithmetic operations at a glance
  const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Operation</th>
      <th style="${tableHeaders.aggregation}">Definition</th>
      <th style="${tableHeaders.aggregation}">Dimension requirement</th>
      <th style="${tableHeaders.aggregation}">Result size</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(A + B)ᵢⱼ = aᵢⱼ + bᵢⱼ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A and B both m × n</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × n</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Scalar multiplication</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(cA)ᵢⱼ = c · aᵢⱼ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">same as A</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Matrix multiplication</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">(AB)ᵢⱼ = Σₖ aᵢₖ bₖⱼ &nbsp;(not commutative)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">cols(A) = rows(B); A is m × n, B is n × p</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">m × p</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Transpose</td>
      <td style="padding: 12px 15px; color: #34495e;">(Aᵀ)ᵢⱼ = aⱼᵢ</td>
      <td style="padding: 12px 15px; color: #34495e;">none</td>
      <td style="padding: 12px 15px; color: #34495e;">n × m</td>
    </tr>
  </tbody>
</table>
`

  // obj6 — aggregation: named matrix types
  const obj6Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Type</th>
      <th style="${tableHeaders.aggregation}">Defining condition</th>
      <th style="${tableHeaders.aggregation}">Signature property</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Diagonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">nonzero entries only on the main diagonal</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">products, powers, and inverses act on the diagonal alone</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Identity (I)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">diagonal with every diagonal entry equal to 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">AI = IA = A &nbsp;(multiplicative identity)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Symmetric</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">A = Aᵀ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all eigenvalues real; eigenvectors can be chosen orthogonal</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Triangular</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all entries above or below the diagonal are zero</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">determinant and eigenvalues read directly from the diagonal</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Orthogonal</td>
      <td style="padding: 12px 15px; color: #34495e;">QᵀQ = I &nbsp;(columns orthonormal)</td>
      <td style="padding: 12px 15px; color: #34495e;">preserves lengths and angles; Q⁻¹ = Qᵀ</td>
    </tr>
  </tbody>
</table>
`

  // obj8 — comparison: rank vs trace
  const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Attribute</th>
      <th style="${tableHeaders.comparison}">Rank</th>
      <th style="${tableHeaders.comparison}">Trace</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Defined for</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any m × n matrix</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">square matrices only</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Definition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">number of linearly independent rows (= columns)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">sum of diagonal entries: a₁₁ + a₂₂ + ⋯ + aₙₙ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Range / values</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integer, 0 ≤ rank(A) ≤ min(m, n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">any real (or complex) scalar</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Eigenvalue link</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dimension of the column space (and image)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">equals the sum of all eigenvalues</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Key identity</td>
      <td style="padding: 12px 15px; color: #34495e;">rank(A) = rank(Aᵀ)</td>
      <td style="padding: 12px 15px; color: #34495e;">tr(AB) = tr(BA); invariant under change of basis</td>
    </tr>
  </tbody>
</table>
`

  // obj11 — summary: four views of a matrix capstone
  const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">View</th>
      <th style="${tableHeaders.summary}">What A is</th>
      <th style="${tableHeaders.summary}">Question it best answers</th>
      <th style="${tableHeaders.summary}">Concepts that flow from it</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Rectangular array</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a table of entries aᵢⱼ with m rows and n columns</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">how do entries relate by position?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dimensions, equality, zero matrix, transpose</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Collection of vectors</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n column vectors in ℝᵐ (or m row vectors in ℝⁿ)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">how do the columns combine?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/vector-spaces/span" style="${linkStyle}">span</a>, <a href="/linear-algebra/vector-spaces/linear-independence" style="${linkStyle}">linear independence</a>, column/row space</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Encoded linear system</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">the coefficient block of Ax = b</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">when does the system have solutions, and how many?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">augmented matrix, <a href="/linear-algebra/matrix/rank" style="${linkStyle}">rank</a>, <a href="/linear-algebra/linear-systems/gaussian-elimination" style="${linkStyle}">Gaussian elimination</a></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/linear-algebra/transformations" style="${linkStyle}">Linear transformation</a></td>
      <td style="padding: 12px 15px; color: #34495e;">a map x ↦ Ax from ℝⁿ to ℝᵐ</td>
      <td style="padding: 12px 15px; color: #34495e;">what does A do geometrically?</td>
      <td style="padding: 12px 15px; color: #34495e;">image, null space, rotation, projection, inverse</td>
    </tr>
  </tbody>
</table>
`

  // ---------- SECTIONS ----------

// Concept introduction (section 1, "What a Matrix Is") — template I, naming.
// Running instance: the coefficient table of 2x + 3y = 5, x − y = 1, beside
// two other rectangular tables of numbers. Old obj1 text is kept in
// sectionsContent.obj1, unused; its formula box, fact aside and four
// passages are carried in unchanged.
const ciCell = 'padding: 10px 15px; border-bottom: 1px solid #ddd; color: #34495e; text-align: center;'
const ciRow = (cells, opts = {}) => `<tr${opts.shade ? ' style="background: #f8f9fa;"' : ''}>` +
  cells.map((c, i) => `<td style="${ciCell}${opts.last ? ' border-bottom: none;' : ''}${opts.color && (opts.cols ? opts.cols.includes(i) : true) ? ` color: ${opts.color}; font-weight: bold;` : ''}">${c}</td>`).join('') + '</tr>'
const ciTableOpen = (heads) => `
<table class="styled-table" style="border-collapse: collapse; width: auto; min-width: 60%; margin: 18px auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead><tr>${heads.map((h) => `<th style="${tableHeaders.aggregation} text-align: center;">${h}</th>`).join('')}</tr></thead>
  <tbody>`
const ciPlacesTable = ciTableOpen(['situation', 'rows mean', 'columns mean', 'the numbers']) +
  ciRow(['sales in 2 shops of 3 products', 'shops', 'products', '(12, 7, 30), (9, 15, 22)']) +
  ciRow(['the system 2x + 3y = 5, x − y = 1', 'equations', 'unknowns x, y', '(2, 3), (1, −1)'], { shade: true, color: '#2563EB', cols: [3] }) +
  ciRow(['a tiny 2 × 3 grey image', 'pixel rows', 'pixel columns', '(0, 128, 255), (64, 192, 32)'], { last: true }) +
  '</tbody></table>'

const sectionsContent = {
  obj1: {
    title: `What a Matrix Is`,
    content: `A matrix is a rectangular array of numbers arranged in rows and columns. The standard notation uses a capital letter for the matrix and a lowercase letter with two subscripts for its entries: the matrix $A$ has entry $a_{ij}$ in row $i$ and column $j$. The shorthand $A = (a_{ij})$ means "the matrix whose $(i,j)$ entry is $a_{ij}$."

In full generality, an $m \\times n$ matrix looks like

@academic[formula_callout:What a Matrix Is
$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$]@

@academic[fact,aside:true,width:35%:A matrix is named after a womb
J. J. Sylvester introduced the word matrix in 1850, the Latin for womb. He saw the array as the parent from which many determinants are born, one for every choice of an equal number of rows and columns.]@

The entries can be real numbers, complex numbers, or elements of any algebraic field. Throughout this site, entries are real unless explicitly stated otherwise.

The idea of the array is much older than its name. Rectangular tables of coefficients were used to solve systems of equations long before anyone treated the table itself as a mathematical object, and for a long time such an array mattered mainly as a source of determinants, numbers computed from a square block of its entries.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Dimensions, Rows, and Columns`,
    content: `The size of a matrix is described by two numbers: $m$ rows and $n$ columns, written $m \\times n$. The notation $A \\in \\mathbb{R}^{m \\times n}$ states that $A$ is an $m \\times n$ matrix with real entries. The total number of entries is $m \\cdot n$. Order matters: a $3 \\times 5$ matrix and a $5 \\times 3$ matrix have different shapes and are never equal, regardless of their entries.

@academic[pitfall,aside:true,width:35%:Swapping the row and column index
Reading $a_{12}$ as column $1$, row $2$ in $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$ gives $a_{12} = 4$. The row index comes first, so $a_{12} = 2$, and $4$ is $a_{21}$.
[Read more](!#pitfalls)]@

Row $i$ of $A$ is the horizontal slice $(a_{i1}, a_{i2}, \\dots, a_{in})$, a $1 \\times n$ vector. Column $j$ is the vertical slice $(a_{1j}, a_{2j}, \\dots, a_{mj})^T$, an $m \\times 1$ vector. The main diagonal consists of the entries where the row index equals the column index: $a_{11}, a_{22}, \\dots, a_{kk}$ with $k = \\min(m, n)$. The diagonal is defined for any matrix, not just square ones, though it is most prominent in the square case.

A matrix with $m = n$ is called square, and square matrices occupy a special position.

@academic[rule_plain:Only square matrices can have a [determinant](!/linear-algebra/determinants), an [inverse](!/linear-algebra/matrix/inverse), [eigenvalues](!/linear-algebra/eigen), or a [trace](!/linear-algebra/matrix/trace).]@

A column [vector](!/linear-algebra/vectors) in $\\mathbb{R}^n$ is simply an $n \\times 1$ matrix, a row vector is a $1 \\times n$ matrix, and a scalar is a $1 \\times 1$ matrix. Matrices unify all of these objects under a single framework.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Matrix Equality and the Zero Matrix`,
    content: `Two matrices $A$ and $B$ are equal if and only if they have the same dimensions and every pair of corresponding entries matches: $a_{ij} = b_{ij}$ for all $i$ and $j$. A single mismatched entry makes the matrices unequal. If the dimensions differ, the matrices are never equal — a $2 \\times 3$ matrix cannot equal a $3 \\times 2$ matrix no matter what numbers they contain.

The zero matrix is the $m \\times n$ matrix whose every entry is zero, written $O$ or $0_{m \\times n}$. It serves as the additive identity: $A + O = A$ for any matrix $A$ of the same size. Strictly speaking, there is a different zero matrix for each pair $(m, n)$, but the same symbol is used for all of them, with the dimensions understood from context.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Matrices as Collections of Vectors`,
    content: `An $m \\times n$ matrix can be viewed as a collection of $n$ column vectors in $\\mathbb{R}^m$, arranged side by side:

@academic[formula_callout:Matrices as Collections of Vectors
$$A = \\begin{pmatrix} | & | & & | \\\\ \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_n \\\\ | & | & & | \\end{pmatrix}$$]@

Equivalently, it is a stack of $m$ row vectors in $\\mathbb{R}^n$. Both perspectives are useful, and choosing the right one often simplifies a problem considerably. The column view connects the matrix to concepts like [span](!/linear-algebra/vector-spaces/span), [linear independence](!/linear-algebra/vector-spaces/linear-independence), and column space. The row view connects it to systems of equations and row space.

The column perspective also gives a powerful interpretation of the matrix-vector product. If $\\mathbf{x} = (x_1, x_2, \\dots, x_n)^T$, then

@academic[formula_callout:Matrix-Vector Product (Column Form)
$$A\\mathbf{x} = x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n$$
/linear-algebra/formulas#matrix-vector_product_column_form]@

@academic[formulas_link:Browse all linear algebra formulas
/linear-algebra/formulas]@

The product $A\\mathbf{x}$ is a [linear combination](!/linear-algebra/vectors/linear-combinations) of the columns of $A$, weighted by the entries of $\\mathbf{x}$. This single observation underlies the theory of linear systems, transformations, and virtually everything else involving matrices.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Matrix Arithmetic at a Glance`,
    content: `Matrices support several [operations](!/linear-algebra/matrix/operations), each with its own rules and dimension requirements.

Addition is entry-by-entry: $(A + B)_{ij} = a_{ij} + b_{ij}$. Both matrices must have the same dimensions. Scalar multiplication scales every entry: $(cA)_{ij} = c \\cdot a_{ij}$. These two operations together give the set of all $m \\times n$ matrices the structure of a vector space of dimension $mn$.

Matrix multiplication is more involved. For $A$ of size $m \\times n$ and $B$ of size $n \\times p$, the product $AB$ has size $m \\times p$, with each entry computed as the dot product of a row of $A$ with a column of $B$: $(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}$. The number of columns of $A$ must equal the number of rows of $B$; otherwise the product is undefined.

@academic[pitfall,aside:true,width:35%:Multiplying entry by entry
Multiplying matching positions turns $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$ into $\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$. Each entry of $AB$ needs a row times a column, which gives $\\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$.
[Read more](!#pitfalls)]@

For two $2 \\times 2$ matrices, the product takes four separate dot products, one for each entry. The entry in row $2$, column $1$ of $AB$, for instance, pairs the second row of $A$ with the first column of $B$: the first entries of the two are multiplied, then the second entries, and the two products are added. The other three entries are built the same way from the remaining row and column pairs.

The transpose $A^T$ swaps rows and columns: $(A^T)_{ij} = a_{ji}$. An $m \\times n$ matrix becomes $n \\times m$.

@academic[rule_plain:One property that distinguishes matrix arithmetic from ordinary arithmetic is that multiplication is not commutative.]@

In general, $AB \\neq BA$, even when both products are defined. This asymmetry has far-reaching consequences throughout linear algebra.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Special Matrix Shapes`,
    content: `Certain structural patterns appear so frequently that they have their own names and dedicated theory. A diagonal matrix has nonzero entries only on the main diagonal, making its arithmetic trivially simple — products, powers, and inverses all reduce to operations on the diagonal entries alone. The identity matrix $I$ is the diagonal matrix with every diagonal entry equal to $1$, serving as the multiplicative identity: $AI = IA = A$.

A symmetric matrix satisfies $A = A^T$, meaning it is unchanged by transposition. Symmetric matrices have the remarkable property that all their eigenvalues are real and their eigenvectors can be chosen to be mutually orthogonal. A triangular matrix has all entries either above or below the diagonal equal to zero, making its determinant and eigenvalues readable directly from the diagonal.

An orthogonal matrix satisfies $Q^T Q = I$, meaning its columns form an orthonormal set and its transpose is its inverse. Orthogonal matrices preserve lengths and angles, making them the algebraic counterpart of rotations and reflections.

These and several other [types](!/linear-algebra/matrix/types) — including skew-symmetric, nilpotent, idempotent, and permutation matrices — each carry structural guarantees that simplify computation and deepen understanding.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Inverse of a Matrix`,
    content: `A square matrix $A$ is called invertible if there exists a matrix $A^{-1}$ satisfying $AA^{-1} = A^{-1}A = I$. When it exists, the [inverse](!/linear-algebra/matrix/inverse) is unique and effectively "undoes" the action of $A$: if $A$ maps $\\mathbf{x}$ to $\\mathbf{b}$, then $A^{-1}$ maps $\\mathbf{b}$ back to $\\mathbf{x}$.

@academic[rule_theorem_plain:Not every square matrix has an inverse. The dividing line is the [determinant](!/linear-algebra/determinants): $A$ is invertible if and only if $\\det(A) \\neq 0$.]@

For a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the inverse has the explicit formula

@academic[formula_callout:The Inverse of a Matrix
$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$]@

which breaks down precisely when $ad - bc = 0$. For larger matrices, the inverse can be computed by row reduction or through the adjugate formula, though in practice solving $Ax = \\mathbf{b}$ directly is almost always more efficient than computing $A^{-1}$.

@academic[pitfall,aside:true,width:35%:Swapping the wrong pair
Swapping $b$ and $c$ instead of $a$ and $d$ turns $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$, with $ad - bc = 1$, into $\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$, and $A$ times that is $\\begin{pmatrix} 3 & -7 \\\\ 7 & -16 \\end{pmatrix}$, not $I$. The inverse is $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$.
[Read more](!#pitfalls)]@

Applying the formula to a particular matrix takes three steps: compute $ad - bc$, rearrange the four entries in the pattern the formula shows, and divide every entry by the determinant. Multiplying the result by $A$ should then give the identity matrix, so every inverse found this way can be verified in a few lines of arithmetic.

@academic[punchline:A square matrix can be undone exactly when its determinant is nonzero, and multiplying back to $I$ confirms any inverse.]@`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Rank and Trace`,
    content: `Two scalar quantities extracted from a matrix appear throughout linear algebra.

The [rank](!/linear-algebra/matrix/rank) of an $m \\times n$ matrix is the number of linearly independent rows, which always equals the number of linearly independent columns. It measures the "effective dimensionality" of the matrix — how many of its rows or columns carry genuinely new information. The rank satisfies $0 \\leq \\text{rank}(A) \\leq \\min(m, n)$. When $\\text{rank}(A) = \\min(m, n)$, the matrix is said to have full rank, meaning no row or column is redundant.

The [trace](!/linear-algebra/matrix/trace) is defined only for square matrices: $\\text{tr}(A) = a_{11} + a_{22} + \\cdots + a_{nn}$, the sum of the diagonal entries. Despite its simplicity, the trace encodes deep information. It equals the sum of the eigenvalues, it is invariant under changes of basis, and it satisfies the cyclic property $\\text{tr}(AB) = \\text{tr}(BA)$, which makes it a fundamental tool in both theoretical and applied contexts.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Matrices and Systems of Equations`,
    content: `A system of $m$ linear equations in $n$ unknowns can be written compactly as

@academic[formula_callout:Matrices and Systems of Equations
$$Ax = \\mathbf{b}$$]@

where $A$ is the $m \\times n$ coefficient matrix, $\\mathbf{x}$ is the $n \\times 1$ vector of unknowns, and $\\mathbf{b}$ is the $m \\times 1$ vector of right-hand sides. The augmented matrix $[A \\mid \\mathbf{b}]$ appends $\\mathbf{b}$ as an extra column, creating the compact representation used in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination).

Whether the system has no solution, exactly one solution, or infinitely many solutions depends entirely on how the rank of $A$ compares with the rank of the augmented matrix $[A \\mid \\mathbf{b}]$ and with the number of unknowns $n$. When $A$ is square and invertible, the unique solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$. When $A$ is rectangular or singular, the analysis requires the [rank](!/linear-algebra/matrix/rank) and the structure of the null space.

@academic[punchline:A whole linear system fits in the single equation $A\\mathbf{x} = \\mathbf{b}$, and ranks decide how many solutions it has.]@`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Matrices as Linear Transformations`,
    content: `Every $m \\times n$ matrix $A$ defines a function from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ by the rule $\\mathbf{x} \\mapsto A\\mathbf{x}$. This function is a [linear transformation](!/linear-algebra/transformations): it preserves addition ($A(\\mathbf{x} + \\mathbf{y}) = A\\mathbf{x} + A\\mathbf{y}$) and scalar multiplication ($A(c\\mathbf{x}) = cA\\mathbf{x}$).

The columns of $A$ reveal exactly what the transformation does to the standard basis. The first column $\\mathbf{a}_1$ is the image of $\\mathbf{e}_1$, the second column $\\mathbf{a}_2$ is the image of $\\mathbf{e}_2$, and so on. Once the images of the basis vectors are known, the image of any vector follows by linearity.

@academic[fact,aside:true,width:35%:Defined to chain two maps
Arthur Cayley wrote down the product rule in 1858 so that the product of two matrices is the matrix of two linear substitutions performed one after the other. Row times column is what that composition produces, and two motions done in reverse order generally differ, so $AB \\neq BA$.]@

When $A$ is square and invertible, the transformation is bijective — every output has exactly one input, and the inverse transformation is given by $A^{-1}$. When $A$ is singular, the transformation collapses at least one dimension, mapping $\\mathbb{R}^n$ onto a proper subspace of $\\mathbb{R}^m$. The rank of $A$ is the dimension of this image, and the null space captures everything that gets sent to zero.

This perspective transforms matrices from static tables of numbers into active geometric objects that rotate, stretch, compress, reflect, and project.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj11: {
    title: `Four Views of a Matrix`,
    content: `Matrices appear throughout this section under several guises: a rectangular array of numbers, an arrangement of column or row vectors, a compact encoding of a linear system, and a transformation between vector spaces. Each view emphasizes different structure and pairs naturally with different tools. The table below collects these four perspectives along with the question each best answers and the concepts that flow from it.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj12: {
    title: `Common Pitfalls`,
    content: `Three mistakes come up again and again when matrices are first met. Each one is marked where it happens in the sections above; here each is worked through in full, with the wrong and the right working side by side.

**Swapping the row and column index**

The entry $a_{ij}$ is read as column $i$, row $j$, the way a point $(x, y)$ is read across first and then up. Every entry looked up this way is taken from the mirror position.

Wrong working: in $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}$, the entry $a_{12}$ is looked up in column $1$, row $2$, which gives $a_{12} = 4$.

Right working: the first index is the row and the second is the column, so $a_{12}$ sits in row $1$, column $2$, and $a_{12} = 2$. The entry $4$ is $a_{21}$.

Why it happens: coordinates in the plane put the horizontal position first, and the horizontal position of an entry is its column. Matrix indices follow the opposite order, rows first, the same order as in the size $m \\times n$.

How to check: look for an index that cannot fit the size. $A$ is $2 \\times 3$, so $a_{23} = 6$ exists, but under the swapped reading $a_{23}$ would sit in row $3$, which $A$ does not have.

**Multiplying entry by entry**

The product $AB$ is computed by multiplying the entries that sit in the same position, the way matrices are added. Rows and columns are never combined.

Wrong working:
$$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 1 \\cdot 5 & 2 \\cdot 6 \\\\ 3 \\cdot 7 & 4 \\cdot 8 \\end{pmatrix} = \\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$$

Right working: each entry is a row of the left matrix times a column of the right matrix.
$$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} 1 \\cdot 5 + 2 \\cdot 7 & 1 \\cdot 6 + 2 \\cdot 8 \\\\ 3 \\cdot 5 + 4 \\cdot 7 & 3 \\cdot 6 + 4 \\cdot 8 \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}$$

Why it happens: addition and scalar multiplication really do work position by position, so the same pattern is carried over to the product.

How to check: multiply by the identity matrix, which must return the matrix unchanged. With the row-times-column rule, $AI = A$. Entry by entry, $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $I$ give $\\begin{pmatrix} 1 & 0 \\\\ 0 & 4 \\end{pmatrix}$, only the diagonal.

**Swapping the wrong pair**

In the formula for the inverse of a $2 \\times 2$ matrix, two entries trade places and the other two change sign. The pairs get mixed up: $b$ and $c$ are swapped, and $a$ and $d$ stay where they are.

Wrong working: for $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$, the determinant is $ad - bc = 6 - 5 = 1$, and swapping the off-diagonal entries gives
$$\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix}$$

Right working: swap the diagonal entries $a$ and $d$, change the sign of $b$ and $c$ where they stand, and divide by $ad - bc = 1$.
$$A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$$

Why it happens: the formula moves two entries and negates the other two, and from memory it is easy to attach the swap to the pair that should only be negated.

How to check: multiply by $A$. The wrong answer gives $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}\\begin{pmatrix} 2 & -5 \\\\ -1 & 3 \\end{pmatrix} = \\begin{pmatrix} 3 & -7 \\\\ 7 & -16 \\end{pmatrix}$, while the right one gives $\\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.`,
    before: ``,
    after: ``,
    link: ``,
  },
}


const introContent = {
    id: "intro",
  title: `Rectangular Arrays of Numbers`,
  content: `A matrix is one of the most versatile objects in mathematics. It encodes systems of equations, represents linear transformations, stores data in structured form, and serves as the computational backbone of nearly every topic in linear algebra. Understanding what matrices are, how to read them, and how their parts relate to one another is the starting point for everything that follows.`,
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Matrices in Linear Algebra",
    "description": "Learn what matrices are in linear algebra — notation, dimensions, arithmetic, inverse, rank, trace, and how matrices represent linear transformations and systems of equations.",
    "url": "https://www.learnmathclass.com/linear-algebra/matrix",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "High School, College",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Matrices in Linear Algebra"
    },
    "teaches": [
      "Matrix notation and entry indexing",
      "Matrix dimensions, rows, columns, and the main diagonal",
      "Matrix arithmetic including addition, scalar multiplication, and matrix multiplication",
      "Inverse matrices and the determinant condition for invertibility",
      "Rank, trace, and their algebraic significance",
      "Matrices as linear transformations between vector spaces",
      "Four interpretive views of a matrix: array, collection of vectors, encoded linear system, and linear transformation"
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
        "name": "Matrices",
        "item": "https://www.learnmathclass.com/linear-algebra/matrix"
      }
    ]
  },
}




  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const mgAnatomy = {
    kind: 'anatomy', m: 3, n: 4, row: 2, col: 3,
    svgTitle: 'Rows, columns and the main diagonal of a 3 by 4 matrix',
  };
  // vectorPictureDiagrams gives its marker defs the per-state id (vpd-c4-a) but
  // its lines point at vpd-c-a, so the arrowheads drop out. Re-pointed here, at
  // the use site; the shipped module is not edited.
  const columnPictureFrame = vectorPictureDiagrams.columns.allPieces.replace(/url\(#vpd-c-/g, 'url(#vpd-c4-');

  const conceptIntroFigures = {
    placesTable: ciPlacesTable,
  };

  const demoUnits = {
    // Hub page: one unit, on the section that reframes a matrix as an
    // action rather than a table. That view needs the geometric tool.
    transformation: demoUnitFrame({
      svg: linearTransformationDiagrams.fullRank,
      caption: 'The unit grid after the matrix has acted',
      text: 'The grid has been stretched and sheared, but the lines are still straight, still evenly spaced, and still parallel in each family, and the origin has not moved. Those survivals are what the word linear is protecting. Seen this way a matrix is not a table of numbers but an instruction for moving the whole plane at once. Change the entries and watch the grid answer on the',
      href: '/linear-algebra/visual-tools/linear-transformation-2d',
      linkText: 'linear transformation explorer',
    }),
    matrixAnatomy: demoUnitFrame({
      svg: renderMatrixGrid(mgAnatomy),
      caption: 'Rows, columns, diagonal',
      text: 'Twelve entries in 3 rows and 4 columns. Row 2 is the horizontal slice a&#8322;&#8321; to a&#8322;&#8324;, a 1 &#215; 4 vector; column 3 is the vertical slice a&#8321;&#8323; to a&#8323;&#8323;, a 3 &#215; 1 vector; they cross at a&#8322;&#8323;. The main diagonal takes the entries whose two indices agree, and on this wide matrix it stops after a&#8323;&#8323; &#8212; min(3, 4) = 3 entries, with column 4 left off it.',
    }),
    columnPicture: demoUnitFrame({
      svg: columnPictureFrame,
      caption: 'Ax built from columns',
      text: 'Each column of A is scaled by its entry of v and the pieces are laid tip to tail: v&#8321; times column 1, then v&#8322; times column 2, then v&#8323; times column 3. The dark arrow from the start to the last tip is Av &#8212; a linear combination of the columns, exactly as the formula in this section says. Step through the pieces one at a time on the',
      href: '/linear-algebra/visual-tools/matrix-multiplication-columns',
      linkText: 'column-picture visualizer',
    }),
  };

  const matrixShapesOutline = {
    prefaceLabel: 'Before you read',
    prefaceTitle: 'Shapes with their own names',
    preface: 'Some matrices are named for where their zeros sit; others for an equation they satisfy. Each name carries a guarantee that simplifies computation.',
    conclusionLabel: 'Takeaway',
    conclusionTitle: 'The name tells you the shortcut',
    conclusion: 'Spot the shape first: diagonal and triangular matrices give determinants and eigenvalues from the diagonal; symmetric and orthogonal ones bring real eigenvalues and preserved lengths. The full list is on the [matrix types](!/linear-algebra/matrix/types) page.',
    showLevels: true,
    nodes: [
      { id: 'root', name: 'Special matrix shapes', children: [
        { id: 'zeros', name: 'Named for where the zeros sit', children: [
          { id: 'diag', name: 'Diagonal', def: 'nonzero entries only on the main diagonal; products, powers and inverses act on the diagonal alone' },
          { id: 'id', name: 'Identity', def: 'diagonal with every diagonal entry 1', example: 'AI = IA = A' },
          { id: 'tri', name: 'Triangular', def: 'zeros above or below the diagonal; determinant and eigenvalues read from the diagonal' },
        ] },
        { id: 'eq', name: 'Named for an equation they satisfy', children: [
          { id: 'sym', name: 'Symmetric', def: 'real eigenvalues, orthogonal eigenvectors', example: 'A = Aᵀ' },
          { id: 'orth', name: 'Orthogonal', def: 'orthonormal columns; preserves lengths and angles', example: 'QᵀQ = I' },
        ] },
        { id: 'more', name: '[More types](!/linear-algebra/matrix/types)', children: [
          { id: 'skew', name: 'Skew-symmetric' },
          { id: 'nil', name: 'Nilpotent' },
          { id: 'idem', name: 'Idempotent' },
          { id: 'perm', name: 'Permutation' },
        ] },
      ] },
    ],
  };

  return {
  props: {
    matrixShapesOutline,
    demoUnits,
    conceptIntroFigures,
    sectionsContent,
    introContent,
    obj5Table,
    obj6Table,
    obj8Table,
    summaryTable,
    schemas,
    seoData: {
      title: "Matrices: Definition, Types & Operations | Learn Math Class",
      description: "Learn what matrices are in linear algebra — notation, dimensions, arithmetic, inverse, rank, trace, and how matrices represent linear transformations and systems of equations.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/matrix",
      name: "Matrices in Linear Algebra"
    },
  }
}
   }



   export default function MatricesPage({matrixShapesOutline, seoData, sectionsContent, introContent, obj5Table, obj6Table, obj8Table, summaryTable, schemas, demoUnits, conceptIntroFigures}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

  const ciTable = (key) => <div key={key} dangerouslySetInnerHTML={{ __html: conceptIntroFigures[key] }} />

  // Section 1 concept introduction — template I (naming).
  const conceptIntro = {
    beats: [
      {
        id: 'intuition',
        lead: `You already organise numbers in rows and columns whenever two kinds of label meet.`,
        content: [
          `A sales sheet lists shops down the side and products across the top; each number sits where a shop meets a product. Move a number to another cell and it means something else.`,
        ],
      },
      {
        id: 'example',
        kind: 'instance',
        lead: `The same layout turns up in a sales sheet, in a system of equations and in a digital image.`,
        content: [
          `Each situation stores numbers in a rectangle, and the position of each number carries its meaning.`,
          ciTable('placesTable'),
        ],
      },
      {
        id: 'shared',
        lead: `What they share: a rectangle of numbers, located by a row and a column.`,
        content: [
          `Strip away the labels and only the grid of numbers is left — for the system, just $2, 3$ on the first row and $1, -1$ on the second. Everything that can be done with these tables can be done with that bare grid.`,
        ],
      },
      {
        id: 'definition',
        kind: 'definition',
        statement: `A [matrix](!/linear-algebra/definitions#matrix) is a rectangular array of numbers arranged in rows and columns; the entry in row $i$ and column $j$ is written $a_{ij}$.`,
        formula: [
          `In full generality, an $m \\times n$ matrix looks like`,
          `@academic[formula_callout:What a Matrix Is
$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$]@`,
        ],
        footer: `So the system $2x + 3y = 5$, $x - y = 1$ has the $2 \\times 2$ coefficient matrix with rows $(2, 3)$ and $(1, -1)$.`,
      },
      {
        id: 'kind',
        lead: `A matrix is a single object made of many numbers, each with an address.`,
        content: [
          `A matrix is a rectangular array of numbers arranged in rows and columns. The standard notation uses a capital letter for the matrix and a lowercase letter with two subscripts for its entries: the matrix $A$ has entry $a_{ij}$ in row $i$ and column $j$. The shorthand $A = (a_{ij})$ means "the matrix whose $(i,j)$ entry is $a_{ij}$."`,
          `@academic[fact,aside:true,width:35%:A matrix is named after a womb
J. J. Sylvester introduced the word matrix in 1850, the Latin for womb. He saw the array as the parent from which many determinants are born, one for every choice of an equal number of rows and columns.]@`,
          `The entries can be real numbers, complex numbers, or elements of any algebraic field. Throughout this site, entries are real unless explicitly stated otherwise.`,
        ],
      },
      {
        id: 'caveat',
        lead: `What the name buys: the whole table can be added, scaled and multiplied as one thing.`,
        content: [
          `The idea of the array is much older than its name. Rectangular tables of coefficients were used to solve systems of equations long before anyone treated the table itself as a mathematical object, and for a long time such an array mattered mainly as a source of determinants, numbers computed from a square block of its entries.`,
          `Treating the table as an object in its own right is what lets one rule handle every system of equations, every image and every sheet of data. The [next section](!/linear-algebra/matrix#2) describes a matrix by its shape.`,
        ],
      },
      {
        id: 'exit',
        content: `The rest of the page covers dimensions, equality and the zero matrix, matrices as collections of vectors, matrix arithmetic, special shapes, the inverse, rank and trace, and systems of equations.`,
      },
    ],
  }

  const genericSections=[
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          <ConceptIntro key={'obj1-intro'} data={conceptIntro} />,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key={'unit-matrixAnatomy'} dangerouslySetInnerHTML={{ __html: demoUnits.matrixAnatomy }} />,
          `Reading a matrix as rows, as columns, or along its diagonal are three different questions asked of the same array.`,
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
          <div key={'unit-columnPicture'} dangerouslySetInnerHTML={{ __html: demoUnits.columnPicture }} />,
          `The column view turns every matrix-vector product into a question about which combinations of the columns can be reached.`,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'obj5-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj5Table }} />,
        ]
    },
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
          <div key={'obj6-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj6Table }} />,
          <DiagramFrame
            key={'obj6-diagram'}
            id="matrix-shapes-outline"
            title="Special matrix shapes and what they guarantee"
            source="/linear-algebra/matrix"
          >
            <TaxonomyOutline data={matrixShapesOutline} variant="outline" exportable={false} showToolbar={false} framed={false} />
          </DiagramFrame>,
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
          <div key={'obj8-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj8Table }} />,
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
                  <div key={'unit-transformation'} dangerouslySetInnerHTML={{ __html: demoUnits.transformation }} />,
          `The other three views on this page — table, column collection, system of equations — are all recoverable from this one.`,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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

]

  return (
   <>
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Matrices</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="children"  // or "children"
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