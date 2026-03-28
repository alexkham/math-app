import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../pages.css'
import Head from 'next/head'


export async function getStaticProps(){

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

const sectionsContent = {
  obj1: {
    title: `What a Matrix Is`,
    content: `A matrix is a rectangular array of numbers arranged in rows and columns. The standard notation uses a capital letter for the matrix and a lowercase letter with two subscripts for its entries: the matrix $A$ has entry $a_{ij}$ in row $i$ and column $j$. The shorthand $A = (a_{ij})$ means "the matrix whose $(i,j)$ entry is $a_{ij}$."

In full generality, an $m \\times n$ matrix looks like

$$A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}$$

The entries can be real numbers, complex numbers, or elements of any algebraic field. Throughout this site, entries are real unless explicitly stated otherwise.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Dimensions, Rows, and Columns`,
    content: `The size of a matrix is described by two numbers: $m$ rows and $n$ columns, written $m \\times n$. The notation $A \\in \\mathbb{R}^{m \\times n}$ states that $A$ is an $m \\times n$ matrix with real entries. The total number of entries is $m \\cdot n$. Order matters: a $3 \\times 5$ matrix and a $5 \\times 3$ matrix have different shapes and are never equal, regardless of their entries.

Row $i$ of $A$ is the horizontal slice $(a_{i1}, a_{i2}, \\dots, a_{in})$, a $1 \\times n$ vector. Column $j$ is the vertical slice $(a_{1j}, a_{2j}, \\dots, a_{mj})^T$, an $m \\times 1$ vector. The main diagonal consists of the entries where the row index equals the column index: $a_{11}, a_{22}, \\dots, a_{kk}$ with $k = \\min(m, n)$. The diagonal is defined for any matrix, not just square ones, though it is most prominent in the square case.

A matrix with $m = n$ is called square, and square matrices occupy a special position. Only square matrices can have a [determinant](!/linear-algebra/determinants), an [inverse](!/linear-algebra/matrix/inverse), [eigenvalues](!/linear-algebra/eigenvalues-vectors), or a [trace](!/linear-algebra/matrix/trace). A column [vector](!/linear-algebra/vectors) in $\\mathbb{R}^n$ is simply an $n \\times 1$ matrix, a row vector is a $1 \\times n$ matrix, and a scalar is a $1 \\times 1$ matrix. Matrices unify all of these objects under a single framework.`,
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

$$A = \\begin{pmatrix} | & | & & | \\\\ \\mathbf{a}_1 & \\mathbf{a}_2 & \\cdots & \\mathbf{a}_n \\\\ | & | & & | \\end{pmatrix}$$

Equivalently, it is a stack of $m$ row vectors in $\\mathbb{R}^n$. Both perspectives are useful, and choosing the right one often simplifies a problem considerably. The column view connects the matrix to concepts like [span](!/linear-algebra/vector-spaces/span), [linear independence](!/linear-algebra/vector-spaces/linear-independence), and column space. The row view connects it to systems of equations and row space.

The column perspective also gives a powerful interpretation of the matrix-vector product. If $\\mathbf{x} = (x_1, x_2, \\dots, x_n)^T$, then

$$A\\mathbf{x} = x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2 + \\cdots + x_n \\mathbf{a}_n$$

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

The transpose $A^T$ swaps rows and columns: $(A^T)_{ij} = a_{ji}$. An $m \\times n$ matrix becomes $n \\times m$.

One property that distinguishes matrix arithmetic from ordinary arithmetic is that multiplication is not commutative. In general, $AB \\neq BA$, even when both products are defined. This asymmetry has far-reaching consequences throughout linear algebra.`,
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

Not every square matrix has an inverse. The dividing line is the [determinant](!/linear-algebra/determinants): $A$ is invertible if and only if $\\det(A) \\neq 0$. For a $2 \\times 2$ matrix $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the inverse has the explicit formula

$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$

which breaks down precisely when $ad - bc = 0$. For larger matrices, the inverse can be computed by row reduction or through the adjugate formula, though in practice solving $Ax = \\mathbf{b}$ directly is almost always more efficient than computing $A^{-1}$.`,
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

$$Ax = \\mathbf{b}$$

where $A$ is the $m \\times n$ coefficient matrix, $\\mathbf{x}$ is the $n \\times 1$ vector of unknowns, and $\\mathbf{b}$ is the $m \\times 1$ vector of right-hand sides. The augmented matrix $[A \\mid \\mathbf{b}]$ appends $\\mathbf{b}$ as an extra column, creating the compact representation used in [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination).

Whether the system has no solution, exactly one solution, or infinitely many solutions depends entirely on the rank of $A$ relative to the rank of the augmented matrix $[A \\mid \\mathbf{b}]$. When $A$ is square and invertible, the unique solution is $\\mathbf{x} = A^{-1}\\mathbf{b}$. When $A$ is rectangular or singular, the analysis requires the [rank](!/linear-algebra/matrix/rank) and the structure of the null space.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj10: {
    title: `Matrices as Linear Transformations`,
    content: `Every $m \\times n$ matrix $A$ defines a function from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ by the rule $\\mathbf{x} \\mapsto A\\mathbf{x}$. This function is a [linear transformation](!/linear-algebra/linear-transformations): it preserves addition ($A(\\mathbf{x} + \\mathbf{y}) = A\\mathbf{x} + A\\mathbf{y}$) and scalar multiplication ($A(c\\mathbf{x}) = cA\\mathbf{x}$).

The columns of $A$ reveal exactly what the transformation does to the standard basis. The first column $\\mathbf{a}_1$ is the image of $\\mathbf{e}_1$, the second column $\\mathbf{a}_2$ is the image of $\\mathbf{e}_2$, and so on. Once the images of the basis vectors are known, the image of any vector follows by linearity.

When $A$ is square and invertible, the transformation is bijective — every output has exactly one input, and the inverse transformation is given by $A^{-1}$. When $A$ is singular, the transformation collapses at least one dimension, mapping $\\mathbb{R}^n$ onto a proper subspace of $\\mathbb{R}^m$. The rank of $A$ is the dimension of this image, and the null space captures everything that gets sent to zero.

This perspective transforms matrices from static tables of numbers into active geometric objects that rotate, stretch, compress, reflect, and project.`,
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

const faqQuestions = {
  obj1: {
    question: "What is a matrix in linear algebra?",
    answer: "A matrix is a rectangular array of numbers arranged in rows and columns. It is denoted by a capital letter such as A, with individual entries identified by two subscripts indicating the row and column position. Matrices can contain real numbers, complex numbers, or elements of any algebraic field.",
    sectionId: "1"
  },
  obj2: {
    question: "What do the dimensions of a matrix mean?",
    answer: "The dimensions of a matrix describe its size as m × n, where m is the number of rows and n is the number of columns. A 3 × 5 matrix has 3 rows and 5 columns and contains 15 entries total. Order matters — a 3 × 5 matrix and a 5 × 3 matrix have different shapes and are never equal.",
    sectionId: "2"
  },
  obj3: {
    question: "How does matrix multiplication work?",
    answer: "To multiply matrices A (m × n) and B (n × p), the number of columns of A must equal the number of rows of B. Each entry of the product AB is computed as the dot product of a row of A with a column of B. The resulting matrix has dimensions m × p. Unlike ordinary multiplication, matrix multiplication is not commutative — AB does not generally equal BA.",
    sectionId: "5"
  },
  obj4: {
    question: "When is a matrix invertible?",
    answer: "A square matrix A is invertible when there exists a matrix A⁻¹ such that AA⁻¹ = A⁻¹A = I. This happens if and only if the determinant of A is nonzero. For a 2 × 2 matrix, the inverse has an explicit formula involving the entries and the determinant ad − bc.",
    sectionId: "7"
  },
  obj5: {
    question: "How do matrices represent linear transformations?",
    answer: "Every m × n matrix defines a linear transformation from Rⁿ to Rᵐ by the rule x ↦ Ax. The columns of the matrix are the images of the standard basis vectors, and the image of any other vector follows by linearity. The rank of the matrix equals the dimension of the image of the transformation.",
    sectionId: "10"
  }
}


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": seoData.name,
//     "description": seoData.description,
//     "url": "https://www.learnmathclass.com" + seoData.url,
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
      "Matrices as linear transformations between vector spaces"
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
    introContent,
    faqQuestions,
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



   export default function MatricesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Matrices</h1>
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
