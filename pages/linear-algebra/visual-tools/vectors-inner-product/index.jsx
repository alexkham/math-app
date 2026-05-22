// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import InnerProductWrapper from '../../../../app/components/linear-algebra copy/matrix/InnerProductWrapper'


// export async function getStaticProps(){

//   const keyWords=['','','','','']

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

//     const sectionsContent={

//     obj0:{
//       title:`Key Terms`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
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


//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/linear-algebra/visual-tools/inner-product",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     // {
//     //     id:'0',
//     //     title:sectionsContent.obj0.title,
//     //     link:sectionsContent.obj0.link,
//     //     content:[
//     //       sectionsContent.obj0.content,
//     //     ]
//     // },
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
//     {
//         id:'11',
//         title:sectionsContent.obj11.title,
//         link:sectionsContent.obj11.link,
//         content:[
//           sectionsContent.obj11.content,
//         ]
//     },
//     {
//         id:'12',
//         title:sectionsContent.obj12.title,
//         link:sectionsContent.obj12.link,
//         content:[
//           sectionsContent.obj12.content,
//         ]
//     },
//     {
//         id:'13',
//         title:sectionsContent.obj13.title,
//         link:sectionsContent.obj13.link,
//         content:[
//           sectionsContent.obj13.content,
//         ]
//     },
//     {
//         id:'14',
//         title:sectionsContent.obj14.title,
//         link:sectionsContent.obj14.link,
//         content:[
//           sectionsContent.obj14.content,
//         ]
//     },
//     {
//         id:'15',
//         title:sectionsContent.obj15.title,
//         link:sectionsContent.obj15.link,
//         content:[
//           sectionsContent.obj15.content,
//         ]
//     },
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
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Page Title</h1>
//    <br/>
//    <div style={{width:'80%',margin:'auto'}}>
//    <InnerProductWrapper/>
//    </div>
//    <br/>
//    {/* <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
//    /> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         /> */}
//    <br/>
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
//    <br/>
//    {/* <Sections sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import InnerProductWrapper from '../../../../app/components/linear-algebra copy/matrix/InnerProductWrapper'


export async function getStaticProps(){

  const keyWords = [
    'inner product',
    'dot product',
    'frobenius inner product',
    'inner product calculator',
    'vector inner product',
    'matrix inner product',
    'how to compute inner product',
    'pairwise multiply and sum',
    'inner product visualizer',
    'inner product step by step',
    'scalar product',
    'inner product of vectors',
    'frobenius product',
    'linear algebra visualizer',
    'inner product space'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Inner product** — an operation that takes two objects of the same shape, multiplies their entries pairwise, and sums the products into a single scalar.

**Dot product** — the classical inner product of two vectors of equal length: $\\langle u, v \\rangle = \\sum_k u_k v_k$.

**Frobenius inner product** — the inner product of two matrices of the same shape: $\\langle A, B \\rangle_F = \\sum_{i,j} a_{i,j} b_{i,j}$.

**Same-shape requirement** — both operands must have identical dimensions so every entry of one has a partner in the other.

**Scalar result** — the output of an inner product is always a single number, regardless of how large the operands are.

**Inner product space** — a vector space equipped with an inner product. Norms, angles, and orthogonality all derive from it.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Pick a scenario and a shape, then watch the inner product build up term by term.

• Use the **Scenario** pills to switch between **Vectors** $\\langle u, v \\rangle$ and **Matrices** $\\langle A, B \\rangle_F$
• In the vectors scenario, set the shared **length** of $u$ and $v$ (2 to 10)
• In the matrices scenario, set the shared **dimensions** of $A$ and $B$ (2×2 to 5×5)
• Hover the **?** icons for explanations of the inner product itself and the same-shape requirement
• Use the scene player below to step, play, pause, change speed, and scroll the step log

The point of having one tool for both scenarios is to make the unity explicit: same operation, different operands.`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `The Vectors Scenario`,
      content: `In the vectors scenario, $u$ and $v$ are shown as row vectors of length $n$, and the result $\\langle u, v \\rangle$ appears as a single boxed scalar.

• Each scene pairs one entry $u_k$ with $v_k$, highlighting both and drawing two arrows into the result box
• The running sum above the canvas updates term by term — counted terms turn green, the current term is blue and bold, pending terms stay grey
• The result box shows a stacked $\\Sigma$ notation with an upper bound that advances as more terms are counted
• Final scene highlights every entry of both vectors and the completed sum

This is the textbook dot product, broken into its $n$ pairwise products.`,
      before: ``,
      after: ``,
      link: '#vectors-scenario',
    },
    obj3: {
      title: `The Matrices Scenario`,
      content: `In the matrices scenario, $A$ and $B$ are shown as $m \\times n$ grids, and the result $\\langle A, B \\rangle_F$ appears as a single boxed scalar with the Frobenius subscript $F$.

• Each scene pairs one entry $a_{i,j}$ with $b_{i,j}$ in row-major order, highlighting both and drawing arrows into the result box
• The running sum above the canvas grows by one $a_{i,j} b_{i,j}$ term per step, color-coded the same way as in the vectors scenario
• Total steps equal $m \\times n$ — every cell of both matrices contributes exactly one product
• Final scene highlights every cell of both matrices in green and presents the completed sum

The Frobenius inner product is exactly the dot product of the matrices "flattened" into long vectors of length $m \\times n$.`,
      before: ``,
      after: ``,
      link: '#matrices-scenario',
    },
    obj4: {
      title: `Reading the Running Sum`,
      content: `The expression above the canvas is the inner product written out as a sum of individual product terms, with per-term color coding.

• **Grey** terms are pending — not yet computed
• **Blue, bold** marks the term being computed in the current scene
• **Green** terms have already been counted
• On the final scene, every term is green and the sum is complete

This running sum is the bridge between the visual pairing (highlights and arrows on the canvas) and the algebraic formula. By the end of the animation, you have seen every term in the sum named, paired, and counted.`,
      before: ``,
      after: ``,
      link: '#reading-the-running-sum',
    },
    obj5: {
      title: `What an Inner Product Is`,
      content: `An inner product is a rule that takes two objects of the same shape and returns a scalar by pairing entries, multiplying, and summing.

For vectors of length $n$:
$$\\langle u, v \\rangle = \\sum_{k=1}^{n} u_k v_k$$

For $m \\times n$ matrices (the Frobenius inner product):
$$\\langle A, B \\rangle_F = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{i,j} b_{i,j}$$

Both formulas implement the same idea: walk through every pair of corresponding entries, multiply them, sum the products. The Frobenius version is the dot product applied to the matrices read as $mn$-long vectors.

For comprehensive theory, see **inner product spaces**.`,
      before: ``,
      after: ``,
      link: '#what-an-inner-product-is',
    },
    obj6: {
      title: `Key Properties`,
      content: `Every inner product, whether on vectors or matrices, satisfies four defining properties.

• **Symmetry**: $\\langle u, v \\rangle = \\langle v, u \\rangle$
• **Linearity in the first argument**: $\\langle \\alpha u + \\beta w, v \\rangle = \\alpha \\langle u, v \\rangle + \\beta \\langle w, v \\rangle$
• **Positive definiteness**: $\\langle u, u \\rangle \\geq 0$, with equality only when $u = 0$
• **Scalar output**: the result is always a single number, never a vector or matrix

From these four properties everything else follows — norms ($\\|u\\| = \\sqrt{\\langle u, u \\rangle}$), angles ($\\cos\\theta = \\langle u, v \\rangle / (\\|u\\| \\|v\\|)$), orthogonality ($\\langle u, v \\rangle = 0$), and projections.`,
      before: ``,
      after: ``,
      link: '#key-properties',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The inner product is the single most useful operation in linear algebra because so many other concepts are defined through it.

• **Length** of a vector: $\\|u\\| = \\sqrt{\\langle u, u \\rangle}$
• **Angle** between vectors: $\\cos\\theta = \\langle u, v \\rangle / (\\|u\\| \\|v\\|)$
• **Orthogonality**: $u \\perp v$ exactly when $\\langle u, v \\rangle = 0$
• **Projection** of $u$ onto $v$: $\\text{proj}_v u = \\frac{\\langle u, v \\rangle}{\\langle v, v \\rangle} v$
• **Gram-Schmidt orthogonalization**, **least squares**, and **Fourier expansions** all run on inner products

The Frobenius inner product extends all of this to matrices — matrix norms, matrix angles, orthogonal matrix decompositions, and the trace formula $\\langle A, B \\rangle_F = \\text{tr}(A^T B)$.`,
      before: ``,
      after: ``,
      link: '#why-it-matters',
    },
    obj8: {
      title: `Worked Example`,
      content: `**Vectors**: take $u = (1, 2, 3)$ and $v = (4, -1, 2)$.

$$\\langle u, v \\rangle = (1)(4) + (2)(-1) + (3)(2) = 4 - 2 + 6 = 8$$

**Matrices**: take $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 1 \\\\ -1 & 2 \\end{pmatrix}$.

$$\\langle A, B \\rangle_F = (1)(0) + (2)(1) + (3)(-1) + (4)(2) = 0 + 2 - 3 + 8 = 7$$

In both cases, the calculation is "pair, multiply, sum" — no row-column gymnastics, no transposition. Set the visualizer to length 3 for the vector case or to $2 \\times 2$ for the matrix case and step through to see the same arithmetic animated.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A handful of recurring mistakes appear when learning inner products.

• **Confusing inner product with matrix multiplication** — the inner product returns a scalar; matrix multiplication returns a matrix. $u^T v$ is a scalar (essentially the inner product), while $u v^T$ is a rank-1 outer product matrix
• **Forgetting the same-shape requirement** — you cannot take the inner product of a 3-vector and a 4-vector, or of a $2 \\times 3$ and a $3 \\times 2$ matrix
• **Conjugation in the complex case** — for complex vectors, the inner product is $\\langle u, v \\rangle = \\sum \\overline{u_k} v_k$ with conjugation on one argument. The visualizer covers the real case
• **Treating Frobenius as something exotic** — it is just the dot product of the matrices read as long vectors
• **Mixing up "inner" and "outer"** — outer product takes two vectors and returns a matrix; inner product takes two vectors and returns a scalar`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Dot product** — the inner product on real vectors; the vectors scenario of this tool.

**Frobenius inner product** — the matrix version; the matrices scenario of this tool.

**Outer product** — the dual operation that takes two vectors and returns a matrix.

**Norm** — the length of a vector or matrix, defined through the inner product as $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$.

**Orthogonality** — the condition $\\langle u, v \\rangle = 0$, central to Gram-Schmidt and orthogonal decompositions.

**Projection** — the component of one vector along another, computed with the inner product.

**Cauchy-Schwarz inequality** — $|\\langle u, v \\rangle| \\leq \\|u\\| \\|v\\|$, a universal bound on inner products.

**Matrix multiplication** — uses inner products of rows and columns as its building block.`,
      before: ``,
      after: ``,
      link: '#related-concepts',
    },
    obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }


  const faqQuestions = {
    obj1: {
      question: "What is an inner product?",
      answer: "An inner product is an operation that takes two objects of the same shape, multiplies their entries pairwise, and sums the products into a single scalar. The classical example is the dot product of two vectors of equal length. The Frobenius inner product extends the same idea to matrices of equal shape."
    },
    obj2: {
      question: "What is the difference between the dot product and the Frobenius inner product?",
      answer: "They are the same operation applied to different shapes. The dot product takes two vectors of length n and returns the sum of u sub k times v sub k. The Frobenius inner product takes two matrices of the same shape and returns the sum of a at i,j times b at i,j over every entry. The Frobenius product is the dot product of the matrices read as long vectors of length m times n."
    },
    obj3: {
      question: "Can you take the inner product of two objects of different shapes?",
      answer: "No. The inner product requires both operands to have the same shape, because each entry of one must be paired with an entry at the same position in the other. A 3-vector cannot be inner-multiplied with a 4-vector, and a 2 by 3 matrix cannot be inner-multiplied with a 3 by 2 matrix."
    },
    obj4: {
      question: "How is the inner product related to length and angle?",
      answer: "The length of a vector u is the square root of u inner-product with itself. The angle between two vectors u and v satisfies cosine theta equals u dot v divided by the product of their lengths. So once you have an inner product, you automatically have notions of length, angle, orthogonality, and projection. This is why inner product spaces are the foundation of metric geometry in linear algebra."
    },
    obj5: {
      question: "Is the inner product the same as matrix multiplication?",
      answer: "No. The inner product returns a scalar, while matrix multiplication returns a matrix. For two column vectors u and v of the same length, the scalar u transposed times v equals the inner product, but the matrix u times v transposed is the rank-1 outer product, a completely different object. Matrix multiplication uses inner products of rows and columns as building blocks, but the operations are not the same."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Inner Product Visualizer",
      "description": "Step-by-step visualizer for the inner product of vectors and matrices. Watch the dot product and the Frobenius product build one pair-and-multiply at a time.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/inner-product",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two scenarios in one tool: vector dot product and Frobenius matrix inner product",
        "Adjustable vector length from 2 to 10",
        "Adjustable matrix dimensions from 2 by 2 up to 5 by 5",
        "Running expanded sum with per-term color coding above the canvas",
        "Animated curved arrows from paired entries into the scalar result box",
        "Stacked sigma notation in the result box with advancing upper bound",
        "Adjustable playback speed and scrollable step log"
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
      "keywords": "inner product, dot product, frobenius inner product, inner product calculator, vector inner product, matrix inner product, how to compute inner product, pairwise multiply and sum, inner product visualizer, inner product step by step, scalar product, inner product of vectors, frobenius product, linear algebra visualizer, inner product space"
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Inner Product",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/inner-product"
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


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Inner Product Visualizer | Dot Product & Frobenius",
        description: "Visualize the inner product step by step for vectors and matrices. Switch between dot product and Frobenius product, set the shape, and watch the scalar result build.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/vectors-inner-product",
        name: "Inner Product Visualizer",
        hubDescription: "Pair, multiply, sum — watch the inner product build into a single scalar one term at a time. Switch between the classical vector dot product and the Frobenius matrix inner product, set the shape of the operands, and follow a running expanded sum with per-term color coding.",
        category: 'Vectors',
        subCategory: 'Products'
      }
    }
  }
}

export default function InnerProductVisualizer({ seoData, sectionsContent, introContent, faqQuestions, schemas }) {


  const genericSections = [
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    { id: '1',  title: sectionsContent.obj1.title,  link: sectionsContent.obj1.link,  content: [sectionsContent.obj1.content] },
    { id: '2',  title: sectionsContent.obj2.title,  link: sectionsContent.obj2.link,  content: [sectionsContent.obj2.content] },
    { id: '3',  title: sectionsContent.obj3.title,  link: sectionsContent.obj3.link,  content: [sectionsContent.obj3.content] },
    { id: '4',  title: sectionsContent.obj4.title,  link: sectionsContent.obj4.link,  content: [sectionsContent.obj4.content] },
    { id: '5',  title: sectionsContent.obj5.title,  link: sectionsContent.obj5.link,  content: [sectionsContent.obj5.content] },
    { id: '6',  title: sectionsContent.obj6.title,  link: sectionsContent.obj6.link,  content: [sectionsContent.obj6.content] },
    { id: '7',  title: sectionsContent.obj7.title,  link: sectionsContent.obj7.link,  content: [sectionsContent.obj7.content] },
    { id: '8',  title: sectionsContent.obj8.title,  link: sectionsContent.obj8.link,  content: [sectionsContent.obj8.content] },
    { id: '9',  title: sectionsContent.obj9.title,  link: sectionsContent.obj9.link,  content: [sectionsContent.obj9.content] },
    { id: '10', title: sectionsContent.obj10.title, link: sectionsContent.obj10.link, content: [sectionsContent.obj10.content] },
    // { id: '11', title: sectionsContent.obj11.title, link: sectionsContent.obj11.link, content: [sectionsContent.obj11.content] },
    // { id: '12', title: sectionsContent.obj12.title, link: sectionsContent.obj12.link, content: [sectionsContent.obj12.content] },
    // { id: '13', title: sectionsContent.obj13.title, link: sectionsContent.obj13.link, content: [sectionsContent.obj13.content] },
    // { id: '14', title: sectionsContent.obj14.title, link: sectionsContent.obj14.link, content: [sectionsContent.obj14.content] },
    // { id: '15', title: sectionsContent.obj15.title, link: sectionsContent.obj15.link, content: [sectionsContent.obj15.content] },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
      </Head>
      {/* <GenericNavbar/> */}
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        // topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '0px' }}>Inner Product of Vectors</h1>
      <br />
      <div style={{ width: '80%', margin: 'auto' }}>
        <InnerProductWrapper mode='vectors' />
      </div>
      <br />
      <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
      <br />
      <br />
      <br />
      {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
      <br />
      {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
      <br />
      <Sections sections={genericSections}/>
      <br />
      <br />
      <br />
      {/* <ScrollUpButton/> */}
    </>
  )
}