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
//   "linear independence",
//   "linearly independent vectors",
//   "linearly dependent",
//   "dependence relation",
//   "independence test row reduction",
//   "determinant independence test",
//   "homogeneous system independence",
//   "Wronskian test functions",
//   "independent set properties",
//   "geometric interpretation independence",
//   "trivial solution only",
//   "free variables dependent",
//   "linear independence abstract spaces",
//   "maximum independent vectors"
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
//     title: `Definition`,
//     content: `A set of vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in a vector space $V$ is linearly independent if the equation

// $$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$$

// has only the trivial solution $c_1 = c_2 = \\cdots = c_k = 0$. If a nontrivial solution exists — any assignment of scalars, not all zero, that produces $\\mathbf{0}$ — the set is linearly dependent.

// Dependence means at least one vector in the set can be expressed as a linear combination of the others. If $c_j \\neq 0$ in a nontrivial relation, then dividing by $c_j$ isolates $\\mathbf{v}_j$:

// $$\\mathbf{v}_j = -\\frac{c_1}{c_j}\\mathbf{v}_1 - \\cdots - \\frac{c_{j-1}}{c_j}\\mathbf{v}_{j-1} - \\frac{c_{j+1}}{c_j}\\mathbf{v}_{j+1} - \\cdots - \\frac{c_k}{c_j}\\mathbf{v}_k$$

// A single nonzero vector is always independent — the equation $c\\mathbf{v} = \\mathbf{0}$ with $\\mathbf{v} \\neq \\mathbf{0}$ forces $c = 0$. The zero vector, by contrast, is always dependent: $1 \\cdot \\mathbf{0} = \\mathbf{0}$ is a nontrivial relation. Any set containing the zero vector is therefore dependent.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj2: {
//     title: `Geometric Interpretation in Rⁿ`,
//     content: `In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, independence has clean geometric meaning.

// Two vectors in $\\mathbb{R}^2$ are dependent if and only if they are parallel — one is a scalar multiple of the other. They point along the same line through the origin, so neither adds a direction that the other does not already cover. Two non-parallel vectors are independent and [span](!/linear-algebra/vector-spaces/span) all of $\\mathbb{R}^2$.

// Three vectors in $\\mathbb{R}^3$ are dependent if and only if they are coplanar — all three lie in a single plane through the origin. The third vector can be written as a combination of the first two, so it provides no new reach. Three non-coplanar vectors are independent and span all of $\\mathbb{R}^3$.

// In $\\mathbb{R}^n$, at most $n$ vectors can be independent. A set of $n + 1$ or more vectors in $\\mathbb{R}^n$ is automatically dependent, regardless of what the vectors are. This is because $\\mathbb{R}^n$ has [dimension](!/linear-algebra/vector-spaces/dimension) $n$, and no independent set can exceed the dimension.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj3: {
//     title: `Testing Independence: The Homogeneous System`,
//     content: `For vectors in $\\mathbb{R}^m$, independence can be tested by row reduction. Arrange $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ as columns of an $m \\times k$ [matrix](!/linear-algebra/matrix) $A$. The independence equation $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is equivalent to the homogeneous system $A\\mathbf{c} = \\mathbf{0}$.

// Row reduce $A$. The vectors are independent if and only if every column contains a pivot — that is, there are no free variables. If any column lacks a pivot, the corresponding variable is free, a nontrivial solution exists, and the set is dependent.

// ## Worked Example: Independent Set

// Test whether $\\mathbf{v}_1 = (1, 2, -1)$, $\\mathbf{v}_2 = (0, 1, 3)$, $\\mathbf{v}_3 = (2, 0, 1)$ are independent. Form the matrix and reduce:

// $$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 0 \\\\ -1 & 3 & 1 \\end{pmatrix} \\xrightarrow{R_2 - 2R_1,\\; R_3 + R_1} \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -4 \\\\ 0 & 3 & 3 \\end{pmatrix} \\xrightarrow{R_3 - 3R_2} \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -4 \\\\ 0 & 0 & 15 \\end{pmatrix}$$

// Three pivots in three columns — no free variables. The set is independent.

// ## Worked Example: Dependent Set

// Test $\\mathbf{v}_1 = (1, 0, 2)$, $\\mathbf{v}_2 = (3, 1, 4)$, $\\mathbf{v}_3 = (5, 2, 6)$, $\\mathbf{v}_4 = (0, 1, -2)$ in $\\mathbb{R}^3$. The matrix is $3 \\times 4$ — four columns but only three rows, so at most three pivots. At least one column must be free. The set is dependent without any computation, simply because four vectors in $\\mathbb{R}^3$ cannot be independent.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj4: {
//     title: `Testing Independence: The Determinant`,
//     content: `When the number of vectors equals the dimension of the space, the independence question reduces to a single number. Arrange $n$ vectors in $\\mathbb{R}^n$ as columns of an $n \\times n$ matrix $A$. The set is independent if and only if

// $$\\det(A) \\neq 0$$

// This follows from the [invertibility equivalence](!/linear-algebra/determinants/properties): $A$ is invertible if and only if its columns are independent, and $A$ is invertible if and only if $\\det(A) \\neq 0$.

// ## Worked Example

// Test whether $(1, 3)$ and $(2, 5)$ are independent in $\\mathbb{R}^2$:

// $$\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix} = 5 - 6 = -1 \\neq 0$$

// The vectors are independent.

// The determinant test applies only to the square case — exactly $n$ vectors in $\\mathbb{R}^n$. For fewer than $n$ vectors, or for vectors in an abstract vector space, the row-reduction approach or the definition itself must be used.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj5: {
//     title: `Properties of Independent Sets`,
//     content: `Several structural facts constrain how independence behaves under set operations.

// Every subset of an independent set is independent. If no nontrivial combination of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ gives $\\mathbf{0}$, then no nontrivial combination of a subset can either — fewer vectors means fewer coefficients, all of which must still be zero.

// Adding a vector $\\mathbf{w}$ to an independent set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ preserves independence if and only if $\\mathbf{w} \\notin \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$. If $\\mathbf{w}$ is already in the span, it can be written as a combination of the existing vectors, creating a dependence relation. If it is outside the span, no such relation exists.

// In an $n$-dimensional space, any independent set has at most $n$ elements. An independent set with exactly $n$ elements is automatically a [basis](!/linear-algebra/vector-spaces/basis) — the spanning condition comes for free once the count reaches the dimension. An independent set with fewer than $n$ elements can always be extended to a basis by adding more vectors.

// Removing a vector from a dependent set may or may not restore independence. It depends on which vector is removed and which vectors participate in the dependence relation.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj6: {
//     title: `Dependence Relations`,
//     content: `When a set is dependent, the nontrivial solution $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is called a dependence relation. It identifies which vectors participate in the redundancy: those with nonzero coefficients.

// A common misconception is that dependence means every vector in the set is a combination of the others. This is false. Consider $\\{(1, 0), (0, 1), (2, 3)\\}$ in $\\mathbb{R}^2$. The set is dependent because $(2, 3) = 2(1, 0) + 3(0, 1)$, but neither $(1, 0)$ nor $(0, 1)$ is a combination of the other two alone — removing either of the first two would make the remaining pair independent.

// The dependence relation $2(1, 0) + 3(0, 1) + (-1)(2, 3) = (0, 0)$ has all three coefficients nonzero, so all three vectors participate. But the vector that can be "removed" without shrinking the span is $(2, 3)$, because it is the one that lies in the span of the other two — not because it has the largest coefficient.

// When the null space of the column matrix has dimension greater than $1$, there are multiple linearly independent dependence relations, and different vectors can be expressed in terms of different subsets. The pivot/free column structure from row reduction clarifies which vectors are redundant.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj7: {
//     title: `The Wronskian Test for Functions`,
//     content: `In function spaces, the column-matrix test does not apply directly because the vectors are functions, not finite tuples. The Wronskian provides an alternative.

// Given $n$ functions $f_1, \\dots, f_n$, each differentiable at least $n - 1$ times, the [Wronskian](!/linear-algebra/determinants/applications) is the [determinant](!/linear-algebra/determinants) of the matrix whose rows are successive derivatives:

// $$W(f_1, \\dots, f_n)(x) = \\det\\begin{pmatrix} f_1(x) & f_2(x) & \\cdots & f_n(x) \\\\ f_1'(x) & f_2'(x) & \\cdots & f_n'(x) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ f_1^{(n-1)}(x) & f_2^{(n-1)}(x) & \\cdots & f_n^{(n-1)}(x) \\end{pmatrix}$$

// If $W(f_1, \\dots, f_n)(x_0) \\neq 0$ at any single point $x_0$, the functions are linearly independent.

// The converse requires caution. A Wronskian that vanishes identically does not always imply dependence unless the functions are known to be solutions of a single linear ordinary differential equation with continuous coefficients. Without that structural guarantee, counterexamples exist where the Wronskian is zero everywhere yet the functions are independent.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
//   obj8: {
//     title: `Independence in Abstract Vector Spaces`,
//     content: `The definition of independence — the only combination giving $\\mathbf{0}$ is the trivial one — applies in any vector space, not just $\\mathbb{R}^n$.

// In the polynomial space $\\mathcal{P}_n$, the set $\\{1, x, x^2, \\dots, x^n\\}$ is independent. The equation $c_0 + c_1 x + c_2 x^2 + \\cdots + c_n x^n = 0$ for all $x$ forces every coefficient to be zero, because a nonzero polynomial of degree at most $n$ can have at most $n$ roots, but this equation must hold for every real number. Since there are $n + 1$ vectors and $\\dim(\\mathcal{P}_n) = n + 1$, this independent set is a [basis](!/linear-algebra/vector-spaces/basis).

// In the [matrix](!/linear-algebra/matrix) space $\\mathbb{R}^{2 \\times 2}$, the four matrices

// $$E_{11} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}, \\quad E_{12} = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}, \\quad E_{21} = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}, \\quad E_{22} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$$

// are independent. The equation $c_1 E_{11} + c_2 E_{12} + c_3 E_{21} + c_4 E_{22} = O$ gives $\\begin{pmatrix} c_1 & c_2 \\\\ c_3 & c_4 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$, which forces all four scalars to zero.

// In abstract spaces where vectors are not columns of numbers, the row-reduction shortcut is unavailable. Verification returns to the definition: write down the combination equal to $\\mathbf{0}$ and show that all coefficients must vanish.`,
//     before: ``,
//     after: ``,
//     link: ``,
//   },
// }

//  const introContent = {
//   title: `When No Vector Is Redundant`,
//   content: `A set of vectors is linearly independent if none of them can be built from the others. This is the formal way of saying that every vector in the set contributes something genuinely new — remove any one of them and the span shrinks. Independence is one half of what makes a basis: the half that eliminates waste.`,
// }


// const faqQuestions = {
//   obj1: {
//     question: "What does linearly independent mean?",
//     answer: "A set of vectors is linearly independent if the only linear combination that produces the zero vector is the trivial one where all coefficients are zero. Equivalently, no vector in the set can be written as a combination of the others. Every vector contributes a direction that the rest cannot replicate.",
//     sectionId: "1"
//   },
//   obj2: {
//     question: "How do you test if vectors are linearly independent?",
//     answer: "Arrange the vectors as columns of a matrix and row reduce. The vectors are independent if and only if every column contains a pivot (no free variables). For exactly n vectors in Rⁿ, the determinant test also works: independent if and only if the determinant is nonzero.",
//     sectionId: "3"
//   },
//   obj3: {
//     question: "What is a dependence relation?",
//     answer: "A dependence relation is a nontrivial linear combination c₁v₁ + ⋯ + cₖvₖ = 0 where not all coefficients are zero. It identifies which vectors are redundant: any vector with a nonzero coefficient can be expressed as a combination of the others by rearranging the equation.",
//     sectionId: "6"
//   },
//   obj4: {
//     question: "How many vectors can be independent in Rⁿ?",
//     answer: "At most n vectors can be independent in Rⁿ. Any set of n+1 or more vectors is automatically dependent, regardless of the specific vectors. An independent set of exactly n vectors in Rⁿ is automatically a basis — it spans the entire space.",
//     sectionId: "2"
//   },
//   obj5: {
//     question: "What is the Wronskian test for functions?",
//     answer: "The Wronskian is the determinant of the matrix whose rows are successive derivatives of the functions. If the Wronskian is nonzero at any single point, the functions are linearly independent. A vanishing Wronskian implies dependence only when the functions are solutions of the same linear ODE.",
//     sectionId: "7"
//   }
// }


// const schemas = {
//   learningResource: {
//     "@context": "https://schema.org",
//     "@type": "LearningResource",
//     "name": "Linear Independence",
//     "description": "Linear independence in linear algebra: definition, geometric interpretation, row reduction and determinant tests, dependence relations, Wronskian for functions, and abstract vector spaces.",
//     "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/linear-independence",
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
//       "name": "Linear Independence"
//     },
//     "teaches": [
//       "Definition of linear independence and dependence",
//       "Geometric interpretation in R² and R³",
//       "Testing independence via row reduction",
//       "Determinant test for square case",
//       "Properties of independent sets",
//       "Dependence relations and redundant vectors",
//       "Wronskian test for function spaces",
//       "Independence in abstract vector spaces"
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
//         "name": "Vector Spaces",
//         "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces"
//       },
//       {
//         "@type": "ListItem",
//         "position": 4,
//         "name": "Linear Independence",
//         "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/linear-independence"
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
// //         url: "/linear-algebra/vector-spaces/linear-independence",
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
//       title: "Linear Independence: Definition & Tests | Learn Math Class",
//       description: "Linear independence in linear algebra: definition, geometric interpretation, row reduction and determinant tests, dependence relations, Wronskian for functions, and abstract vector spaces.",
//       keywords: keyWords.join(", "),
//       url: "/linear-algebra/vector-spaces/linear-independence",
//       name: "Linear Independence"
//     },
//   }
// }
//    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {

// export default function LinearIndependencePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
//     // {
//     //     id:'9',
//     //     title:sectionsContent.obj9.title,
//     //     link:sectionsContent.obj9.link,
//     //     content:[
//     //       sectionsContent.obj9.content,
//     //     ]
//     // },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Linear Independence</h1>
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



// tables-optimized: v4 | 2026-05-22 | 3 tables (obj5 aggregation, obj8 aggregation, obj9 summary capstone)

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
  "linear independence",
  "linearly independent vectors",
  "linearly dependent",
  "dependence relation",
  "independence test row reduction",
  "determinant independence test",
  "homogeneous system independence",
  "Wronskian test functions",
  "independent set properties",
  "geometric interpretation independence",
  "trivial solution only",
  "free variables dependent",
  "linear independence abstract spaces",
  "maximum independent vectors"
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

const linkStyle = 'color: inherit; text-decoration: underline;'

// ---------- TABLES ----------

// obj5 — aggregation: behavior of independence under set operations
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Operation on the set</th>
      <th style="${tableHeaders.aggregation}">Effect on independence</th>
      <th style="${tableHeaders.aggregation}">Reasoning</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Take any subset of an independent set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independence preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">fewer vectors cannot create a new nontrivial combination equal to <b>0</b></td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Add <b>w</b> with <b>w</b> ∉ <a href="/linear-algebra/vector-spaces/span" style="${linkStyle}">Span</a> of the set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independence preserved</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><b>w</b> contributes a direction not covered by the existing vectors</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Add <b>w</b> with <b>w</b> ∈ Span of the set</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independence lost &mdash; set becomes dependent</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><b>w</b> can already be written as a combination of the existing vectors</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Reach n independent vectors in an n-dimensional space</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">automatically a <a href="/linear-algebra/vector-spaces/basis" style="${linkStyle}">basis</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">spanning comes free at the maximum independent size; no further check needed</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Remove a vector from a dependent set</td>
      <td style="padding: 12px 15px; color: #34495e;">may or may not restore independence</td>
      <td style="padding: 12px 15px; color: #34495e;">depends on which vector is removed and how the dependence relation is structured</td>
    </tr>
  </tbody>
</table>
`

// obj8 — aggregation: independence in two abstract vector spaces
const obj8Table = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Vector space</th>
      <th style="${tableHeaders.aggregation}">Independent set</th>
      <th style="${tableHeaders.aggregation}">Why independent</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">𝒫ₙ (polynomials of degree ≤ n)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">{1, x, x², …, xⁿ}</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">c₀ + c₁x + ⋯ + cₙxⁿ = 0 must hold for every real x; a nonzero polynomial of degree ≤ n has at most n roots, so every coefficient must vanish</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">n + 1 vectors, exactly dim(𝒫ₙ) &mdash; standard basis</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">ℝ²ˣ² (2×2 real <a href="/linear-algebra/matrix" style="${linkStyle}">matrices</a>)</td>
      <td style="padding: 12px 15px; color: #34495e;">{E₁₁, E₁₂, E₂₁, E₂₂}</td>
      <td style="padding: 12px 15px; color: #34495e;">c₁E₁₁ + c₂E₁₂ + c₃E₂₁ + c₄E₂₂ = O reads entry-by-entry as c₁ = c₂ = c₃ = c₄ = 0</td>
      <td style="padding: 12px 15px; color: #34495e;">4 vectors, exactly dim(ℝ²ˣ²) &mdash; standard basis</td>
    </tr>
  </tbody>
</table>
`

// obj9 — summary capstone: independence tests and inspection shortcuts
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 95%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Context</th>
      <th style="${tableHeaders.summary}">Method</th>
      <th style="${tableHeaders.summary}">What to check</th>
      <th style="${tableHeaders.summary}">Conclusion</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Set contains <b>0</b></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inspection (no computation)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">is the zero vector in the set?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dependent &mdash; 1·<b>0</b> = <b>0</b> is a nontrivial relation</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single nonzero vector</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inspection (no computation)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">is <b>v</b> ≠ <b>0</b>?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independent &mdash; c<b>v</b> = <b>0</b> forces c = 0</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">More than n vectors in ℝⁿ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">inspection (no computation)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">count exceeds dimension?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">dependent &mdash; no independent set in ℝⁿ exceeds n</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">k vectors in ℝᵐ (general)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">row-reduce the m × k <a href="/linear-algebra/matrix" style="${linkStyle}">matrix</a> A = [<b>v</b>₁ ⋯ <b>v</b>ₖ]</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">does every column contain a pivot?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independent iff yes (no free variables in A<b>c</b> = <b>0</b>)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">n vectors in ℝⁿ (square case)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/determinants" style="${linkStyle}">determinant</a> of the n × n matrix A</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">is det A ≠ 0?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">independent iff yes (equivalent to A invertible)</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">n differentiable functions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;"><a href="/linear-algebra/determinants/applications" style="${linkStyle}">Wronskian</a> determinant W(x)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">is W(x₀) ≠ 0 at some single point x₀?</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">if yes, independent; if W ≡ 0, no conclusion in general (only when the functions solve a common linear ODE)</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Vectors in an abstract space</td>
      <td style="padding: 12px 15px; color: #34495e;">apply the definition directly</td>
      <td style="padding: 12px 15px; color: #34495e;">does c₁<b>v</b>₁ + ⋯ + cₖ<b>v</b>ₖ = <b>0</b> force every cᵢ = 0?</td>
      <td style="padding: 12px 15px; color: #34495e;">independent iff yes; use the algebraic structure of the space (polynomial coefficients, matrix entries, etc.) to reduce to scalar equations</td>
    </tr>
  </tbody>
</table>
`

// ---------- SECTIONS ----------

const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `A set of vectors $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\dots, \\mathbf{v}_k\\}$ in a vector space $V$ is linearly independent if the equation

$$c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$$

has only the trivial solution $c_1 = c_2 = \\cdots = c_k = 0$. If a nontrivial solution exists — any assignment of scalars, not all zero, that produces $\\mathbf{0}$ — the set is linearly dependent.

Dependence means at least one vector in the set can be expressed as a linear combination of the others. If $c_j \\neq 0$ in a nontrivial relation, then dividing by $c_j$ isolates $\\mathbf{v}_j$:

$$\\mathbf{v}_j = -\\frac{c_1}{c_j}\\mathbf{v}_1 - \\cdots - \\frac{c_{j-1}}{c_j}\\mathbf{v}_{j-1} - \\frac{c_{j+1}}{c_j}\\mathbf{v}_{j+1} - \\cdots - \\frac{c_k}{c_j}\\mathbf{v}_k$$

A single nonzero vector is always independent — the equation $c\\mathbf{v} = \\mathbf{0}$ with $\\mathbf{v} \\neq \\mathbf{0}$ forces $c = 0$. The zero vector, by contrast, is always dependent: $1 \\cdot \\mathbf{0} = \\mathbf{0}$ is a nontrivial relation. Any set containing the zero vector is therefore dependent.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj2: {
    title: `Geometric Interpretation in Rⁿ`,
    content: `In $\\mathbb{R}^2$ and $\\mathbb{R}^3$, independence has clean geometric meaning.

Two vectors in $\\mathbb{R}^2$ are dependent if and only if they are parallel — one is a scalar multiple of the other. They point along the same line through the origin, so neither adds a direction that the other does not already cover. Two non-parallel vectors are independent and [span](!/linear-algebra/vector-spaces/span) all of $\\mathbb{R}^2$.

Three vectors in $\\mathbb{R}^3$ are dependent if and only if they are coplanar — all three lie in a single plane through the origin. The third vector can be written as a combination of the first two, so it provides no new reach. Three non-coplanar vectors are independent and span all of $\\mathbb{R}^3$.

In $\\mathbb{R}^n$, at most $n$ vectors can be independent. A set of $n + 1$ or more vectors in $\\mathbb{R}^n$ is automatically dependent, regardless of what the vectors are. This is because $\\mathbb{R}^n$ has [dimension](!/linear-algebra/vector-spaces/dimension) $n$, and no independent set can exceed the dimension.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj3: {
    title: `Testing Independence: The Homogeneous System`,
    content: `For vectors in $\\mathbb{R}^m$, independence can be tested by row reduction. Arrange $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$ as columns of an $m \\times k$ [matrix](!/linear-algebra/matrix) $A$. The independence equation $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is equivalent to the homogeneous system $A\\mathbf{c} = \\mathbf{0}$.

Row reduce $A$. The vectors are independent if and only if every column contains a pivot — that is, there are no free variables. If any column lacks a pivot, the corresponding variable is free, a nontrivial solution exists, and the set is dependent.

## Worked Example: Independent Set

Test whether $\\mathbf{v}_1 = (1, 2, -1)$, $\\mathbf{v}_2 = (0, 1, 3)$, $\\mathbf{v}_3 = (2, 0, 1)$ are independent. Form the matrix and reduce:

$$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 0 \\\\ -1 & 3 & 1 \\end{pmatrix} \\xrightarrow{R_2 - 2R_1,\\; R_3 + R_1} \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -4 \\\\ 0 & 3 & 3 \\end{pmatrix} \\xrightarrow{R_3 - 3R_2} \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -4 \\\\ 0 & 0 & 15 \\end{pmatrix}$$

Three pivots in three columns — no free variables. The set is independent.

## Worked Example: Dependent Set

Test $\\mathbf{v}_1 = (1, 0, 2)$, $\\mathbf{v}_2 = (3, 1, 4)$, $\\mathbf{v}_3 = (5, 2, 6)$, $\\mathbf{v}_4 = (0, 1, -2)$ in $\\mathbb{R}^3$. The matrix is $3 \\times 4$ — four columns but only three rows, so at most three pivots. At least one column must be free. The set is dependent without any computation, simply because four vectors in $\\mathbb{R}^3$ cannot be independent.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj4: {
    title: `Testing Independence: The Determinant`,
    content: `When the number of vectors equals the dimension of the space, the independence question reduces to a single number. Arrange $n$ vectors in $\\mathbb{R}^n$ as columns of an $n \\times n$ matrix $A$. The set is independent if and only if

$$\\det(A) \\neq 0$$

This follows from the [invertibility equivalence](!/linear-algebra/determinants/properties): $A$ is invertible if and only if its columns are independent, and $A$ is invertible if and only if $\\det(A) \\neq 0$.

## Worked Example

Test whether $(1, 3)$ and $(2, 5)$ are independent in $\\mathbb{R}^2$:

$$\\det\\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix} = 5 - 6 = -1 \\neq 0$$

The vectors are independent.

The determinant test applies only to the square case — exactly $n$ vectors in $\\mathbb{R}^n$. For fewer than $n$ vectors, or for vectors in an abstract vector space, the row-reduction approach or the definition itself must be used.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj5: {
    title: `Properties of Independent Sets`,
    content: `Several structural facts constrain how independence behaves under set operations.

Every subset of an independent set is independent. If no nontrivial combination of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ gives $\\mathbf{0}$, then no nontrivial combination of a subset can either — fewer vectors means fewer coefficients, all of which must still be zero.

Adding a vector $\\mathbf{w}$ to an independent set $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$ preserves independence if and only if $\\mathbf{w} \\notin \\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_k\\}$. If $\\mathbf{w}$ is already in the span, it can be written as a combination of the existing vectors, creating a dependence relation. If it is outside the span, no such relation exists.

In an $n$-dimensional space, any independent set has at most $n$ elements. An independent set with exactly $n$ elements is automatically a [basis](!/linear-algebra/vector-spaces/basis) — the spanning condition comes for free once the count reaches the dimension. An independent set with fewer than $n$ elements can always be extended to a basis by adding more vectors.

Removing a vector from a dependent set may or may not restore independence. It depends on which vector is removed and which vectors participate in the dependence relation.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj6: {
    title: `Dependence Relations`,
    content: `When a set is dependent, the nontrivial solution $c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}$ is called a dependence relation. It identifies which vectors participate in the redundancy: those with nonzero coefficients.

A common misconception is that dependence means every vector in the set is a combination of the others. This is false. Consider $\\{(1, 0), (0, 1), (2, 3)\\}$ in $\\mathbb{R}^2$. The set is dependent because $(2, 3) = 2(1, 0) + 3(0, 1)$, but neither $(1, 0)$ nor $(0, 1)$ is a combination of the other two alone — removing either of the first two would make the remaining pair independent.

The dependence relation $2(1, 0) + 3(0, 1) + (-1)(2, 3) = (0, 0)$ has all three coefficients nonzero, so all three vectors participate. But the vector that can be "removed" without shrinking the span is $(2, 3)$, because it is the one that lies in the span of the other two — not because it has the largest coefficient.

When the null space of the column matrix has dimension greater than $1$, there are multiple linearly independent dependence relations, and different vectors can be expressed in terms of different subsets. The pivot/free column structure from row reduction clarifies which vectors are redundant.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj7: {
    title: `The Wronskian Test for Functions`,
    content: `In function spaces, the column-matrix test does not apply directly because the vectors are functions, not finite tuples. The Wronskian provides an alternative.

Given $n$ functions $f_1, \\dots, f_n$, each differentiable at least $n - 1$ times, the [Wronskian](!/linear-algebra/determinants/applications) is the [determinant](!/linear-algebra/determinants) of the matrix whose rows are successive derivatives:

$$W(f_1, \\dots, f_n)(x) = \\det\\begin{pmatrix} f_1(x) & f_2(x) & \\cdots & f_n(x) \\\\ f_1'(x) & f_2'(x) & \\cdots & f_n'(x) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ f_1^{(n-1)}(x) & f_2^{(n-1)}(x) & \\cdots & f_n^{(n-1)}(x) \\end{pmatrix}$$

If $W(f_1, \\dots, f_n)(x_0) \\neq 0$ at any single point $x_0$, the functions are linearly independent.

The converse requires caution. A Wronskian that vanishes identically does not always imply dependence unless the functions are known to be solutions of a single linear ordinary differential equation with continuous coefficients. Without that structural guarantee, counterexamples exist where the Wronskian is zero everywhere yet the functions are independent.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj8: {
    title: `Independence in Abstract Vector Spaces`,
    content: `The definition of independence — the only combination giving $\\mathbf{0}$ is the trivial one — applies in any vector space, not just $\\mathbb{R}^n$.

In the polynomial space $\\mathcal{P}_n$, the set $\\{1, x, x^2, \\dots, x^n\\}$ is independent. The equation $c_0 + c_1 x + c_2 x^2 + \\cdots + c_n x^n = 0$ for all $x$ forces every coefficient to be zero, because a nonzero polynomial of degree at most $n$ can have at most $n$ roots, but this equation must hold for every real number. Since there are $n + 1$ vectors and $\\dim(\\mathcal{P}_n) = n + 1$, this independent set is a [basis](!/linear-algebra/vector-spaces/basis).

In the [matrix](!/linear-algebra/matrix) space $\\mathbb{R}^{2 \\times 2}$, the four matrices

$$E_{11} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}, \\quad E_{12} = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}, \\quad E_{21} = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}, \\quad E_{22} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix}$$

are independent. The equation $c_1 E_{11} + c_2 E_{12} + c_3 E_{21} + c_4 E_{22} = O$ gives $\\begin{pmatrix} c_1 & c_2 \\\\ c_3 & c_4 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$, which forces all four scalars to zero.

In abstract spaces where vectors are not columns of numbers, the row-reduction shortcut is unavailable. Verification returns to the definition: write down the combination equal to $\\mathbf{0}$ and show that all coefficients must vanish.`,
    before: ``,
    after: ``,
    link: ``,
  },
  obj9: {
    title: `Summary: Tests and Shortcuts for Independence`,
    content: `Determining independence rarely requires the full computation. Several no-computation shortcuts settle the question immediately for common configurations — a set containing $\\mathbf{0}$, a single nonzero vector, or more than $n$ vectors in $\\mathbb{R}^n$. When inspection alone is not enough, three distinct tests cover the remaining cases: row reduction for general vectors in $\\mathbb{R}^m$, the determinant for the square case, and the Wronskian for functions; abstract spaces fall back on the definition itself. The table below collects the full toolkit, grouped from inspection-only shortcuts down to computational tests, and notes which method applies to which context.`,
    before: ``,
    after: ``,
    link: ``,
  },
}

 const introContent = {
  title: `When No Vector Is Redundant`,
  content: `A set of vectors is linearly independent if none of them can be built from the others. This is the formal way of saying that every vector in the set contributes something genuinely new — remove any one of them and the span shrinks. Independence is one half of what makes a basis: the half that eliminates waste.`,
}


const faqQuestions = {
  obj1: {
    question: "What does linearly independent mean?",
    answer: "A set of vectors is linearly independent if the only linear combination that produces the zero vector is the trivial one where all coefficients are zero. Equivalently, no vector in the set can be written as a combination of the others. Every vector contributes a direction that the rest cannot replicate.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you test if vectors are linearly independent?",
    answer: "Arrange the vectors as columns of a matrix and row reduce. The vectors are independent if and only if every column contains a pivot (no free variables). For exactly n vectors in Rⁿ, the determinant test also works: independent if and only if the determinant is nonzero.",
    sectionId: "3"
  },
  obj3: {
    question: "What is a dependence relation?",
    answer: "A dependence relation is a nontrivial linear combination c₁v₁ + ⋯ + cₖvₖ = 0 where not all coefficients are zero. It identifies which vectors are redundant: any vector with a nonzero coefficient can be expressed as a combination of the others by rearranging the equation.",
    sectionId: "6"
  },
  obj4: {
    question: "How many vectors can be independent in Rⁿ?",
    answer: "At most n vectors can be independent in Rⁿ. Any set of n+1 or more vectors is automatically dependent, regardless of the specific vectors. An independent set of exactly n vectors in Rⁿ is automatically a basis — it spans the entire space.",
    sectionId: "2"
  },
  obj5: {
    question: "What is the Wronskian test for functions?",
    answer: "The Wronskian is the determinant of the matrix whose rows are successive derivatives of the functions. If the Wronskian is nonzero at any single point, the functions are linearly independent. A vanishing Wronskian implies dependence only when the functions are solutions of the same linear ODE.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Linear Independence",
    "description": "Linear independence in linear algebra: definition, geometric interpretation, row reduction and determinant tests, dependence relations, Wronskian for functions, and abstract vector spaces.",
    "url": "https://www.learnmathclass.com/linear-algebra/vector-spaces/linear-independence",
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
      "name": "Linear Independence"
    },
    "teaches": [
      "Definition of linear independence and dependence",
      "Geometric interpretation in R² and R³",
      "Testing independence via row reduction",
      "Determinant test for square case",
      "Properties of independent sets",
      "Dependence relations and redundant vectors",
      "Wronskian test for function spaces",
      "Independence in abstract vector spaces",
      "Test selection and inspection shortcuts for independence"
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
        "name": "Vector Spaces",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Linear Independence",
        "item": "https://www.learnmathclass.com/linear-algebra/vector-spaces/linear-independence"
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

//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/vector-spaces/linear-independence",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    obj5Table,
    obj8Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Linear Independence: Definition & Tests | Learn Math Class",
      description: "Linear independence in linear algebra: definition, geometric interpretation, row reduction and determinant tests, dependence relations, Wronskian for functions, and abstract vector spaces.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/vector-spaces/linear-independence",
      name: "Linear Independence"
    },
  }
}
   }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

export default function LinearIndependencePage({seoData, sectionsContent, introContent, obj5Table, obj8Table, summaryTable, faqQuestions, schemas}) {

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
          <div
            key={'obj8-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj8Table }}
          />,
        ]
    },
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Linear Independence</h1>
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