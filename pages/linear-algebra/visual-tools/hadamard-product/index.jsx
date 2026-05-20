// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import HadamardWrapper from '../../../../app/components/linear-algebra copy/matrix/HadamardWrapper'


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
//         url: "/linear-algebra/visual-tools/hadamard-product",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Hadamard Product (element-wise)</h1>
//    <br/>
//    <div style={{width:'80%',margin:'auto'}}>
//    <HadamardWrapper/>
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
//    <br/>
//    <br/>
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
import HadamardWrapper from '../../../../app/components/linear-algebra copy/matrix/HadamardWrapper'


export async function getStaticProps(){

  const keyWords = [
    'hadamard product',
    'element-wise matrix multiplication',
    'A circle dot B',
    'hadamard product calculator',
    'element-wise product',
    'pointwise matrix product',
    'schur product',
    'how to compute hadamard product',
    'hadamard product visualizer',
    'hadamard vs matrix multiplication',
    'element-wise multiplication matrices',
    'interactive matrix tool',
    'linear algebra visualizer',
    'matrix operations',
    'same shape matrices'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Hadamard product** — the element-wise product of two matrices of the same shape, denoted $A \\odot B$. Each entry of the result is the product of the corresponding entries: $c_{i,j} = a_{i,j} \\cdot b_{i,j}$.

**Schur product** — alternative name for the Hadamard product.

**Element-wise (pointwise) operation** — an operation applied independently to each pair of corresponding entries; the result at $(i,j)$ depends only on the inputs at $(i,j)$.

**Same-shape requirement** — both operands must have identical dimensions. A $2 \\times 3$ matrix cannot be Hadamard-multiplied with a $3 \\times 2$.

**Standard matrix product** — the row-by-column product $A \\times B$, a different operation with different shape rules and a different result.

**$\\odot$ symbol** — the circle-dot operator, the standard notation distinguishing the Hadamard product from $A \\times B$ or $AB$.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the shape, then watch $A \\odot B = C$ build one cell at a time.

• Use the **Dimensions** steppers to set the shared shape of $A$ and $B$ (1 to 5 in each direction)
• Hover the **?** icon for a full explanation of the Hadamard product and how it differs from the standard matrix product
• Press play on the scene player or step manually with the back and next buttons
• Adjust speed and use the step log on the right to scroll through completed cells

There is no operation toggle — the Hadamard product is a single operation, fully determined by the shape of the operands.`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `Reading the Scene Player`,
      content: `Each scene focuses on one cell of $C$ and combines highlights with arrows.

• The active cell in $A$ is highlighted primary, the matching cell in $B$ as secondary, and the destination cell in $C$ as accent
• Two curved arrows flow from $a_{i,j}$ and $b_{i,j}$ into $c_{i,j}$, making the data flow explicit
• Each filled cell of $C$ shows its symbolic content $a_{i,j} \\cdot b_{i,j}$
• The step log on the right keeps a record of every completed cell

By the final scene, every cell of $C$ contains its symbolic product and the operation is complete.`,
      before: ``,
      after: ``,
      link: '#reading-the-scene-player',
    },
    obj3: {
      title: `Choosing Dimensions`,
      content: `The dimension steppers control the shape shared by all three matrices.

• Start with a small shape like $2 \\times 2$ or $2 \\times 3$ to see each cell pairing clearly
• Increase to $4 \\times 4$ or $5 \\times 5$ to see the operation scale — total scenes equal $m \\times n$
• Symbolic cell contents in $C$ shrink automatically when the shape is large, so $a_{i,j} \\cdot b_{i,j}$ stays readable at $5 \\times 5$
• Square ($n \\times n$) and rectangular ($m \\times n$, $m \\neq n$) shapes follow identical rules

The shape of $C$ is forced to match the shared shape of $A$ and $B$ — no separate control needed.`,
      before: ``,
      after: ``,
      link: '#choosing-dimensions',
    },
    obj4: {
      title: `What the Hadamard Product Is`,
      content: `The Hadamard product is the element-wise product of two matrices of the same shape. For $m \\times n$ matrices $A$ and $B$:

$$C = A \\odot B, \\quad c_{i,j} = a_{i,j} \\cdot b_{i,j}$$

Each entry of $C$ depends only on the matching pair of entries in $A$ and $B$ — no row or column interaction. The result $C$ has the same $m \\times n$ shape as the operands.

The Hadamard product is the multiplicative analogue of matrix addition: both are element-wise, both require matched shapes, both preserve dimensions. It contrasts sharply with the standard matrix product $A \\times B$, which mixes rows with columns and changes shape.

For comprehensive theory, see **matrix operations**.`,
      before: ``,
      after: ``,
      link: '#what-the-hadamard-product-is',
    },
    obj5: {
      title: `Hadamard vs Standard Matrix Multiplication`,
      content: `These two operations share the word "multiplication" but are fundamentally different.

• **Notation**: $A \\odot B$ (Hadamard) vs $A B$ or $A \\times B$ (standard)
• **Shape requirement**: identical shapes (Hadamard) vs inner dimensions match (standard, $m \\times k$ times $k \\times n$)
• **Result shape**: same as operands (Hadamard) vs $m \\times n$ (standard)
• **Computation**: pairwise product per cell (Hadamard) vs sum of row-column products (standard)
• **Commutativity**: commutative (Hadamard) vs generally non-commutative (standard)

For the standard product, see **matrix multiplication**. The two are confused often enough that the Hadamard product is sometimes spelled out as "element-wise product" to avoid ambiguity.`,
      before: ``,
      after: ``,
      link: '#hadamard-vs-standard',
    },
    obj6: {
      title: `Key Properties`,
      content: `The Hadamard product satisfies the algebraic properties one would expect from an element-wise multiplication.

• **Commutativity**: $A \\odot B = B \\odot A$
• **Associativity**: $(A \\odot B) \\odot C = A \\odot (B \\odot C)$
• **Distributivity over addition**: $A \\odot (B + C) = A \\odot B + A \\odot C$
• **Identity**: the all-ones matrix $J$ acts as identity: $A \\odot J = A$
• **Scalar pull-out**: $(kA) \\odot B = k(A \\odot B)$
• **Transpose**: $(A \\odot B)^T = A^T \\odot B^T$

These properties mirror ordinary scalar multiplication exactly — which is unsurprising, since the operation is just scalar multiplication applied entry by entry.`,
      before: ``,
      after: ``,
      link: '#key-properties',
    },
    obj7: {
      title: `Where the Hadamard Product Appears`,
      content: `The Hadamard product shows up wherever data lives in matrix form but the operation needs to be local.

• **Machine learning**: masking, gating in LSTMs and GRUs, attention weights applied element-wise
• **Image processing**: pointwise filters and masks applied to pixel grids
• **Statistics**: covariance scaling, weighted moment computations
• **Numerical linear algebra**: preconditioners and diagonal scaling can be expressed as Hadamard products
• **Signal processing**: windowing and apodization

The common thread: the matrix shape carries spatial or indexing structure, but the operation itself should not mix rows or columns.`,
      before: ``,
      after: ``,
      link: '#where-it-appears',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take $A$ and $B$ as $2 \\times 3$ matrices:

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 7 & 8 & 9 \\\\ 0 & 1 & 2 \\end{pmatrix}$$

Then $C = A \\odot B$ is computed cell by cell:

$$C = \\begin{pmatrix} 1 \\cdot 7 & 2 \\cdot 8 & 3 \\cdot 9 \\\\ 4 \\cdot 0 & 5 \\cdot 1 & 6 \\cdot 2 \\end{pmatrix} = \\begin{pmatrix} 7 & 16 & 27 \\\\ 0 & 5 & 12 \\end{pmatrix}$$

Compare with the standard product $A \\times B$: it is undefined here because $A$ is $2 \\times 3$ and $B$ is also $2 \\times 3$ — the inner dimensions ($3$ and $2$) do not match. The Hadamard product has no such restriction beyond matching shapes.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `The Hadamard product is simple, but a few recurring mistakes appear.

• **Confusing it with the standard matrix product** — by far the most common; check the notation ($\\odot$ vs juxtaposition) and the shape rules
• **Trying to Hadamard-multiply matrices of different shapes** — there is no broadcasting rule in the strict mathematical definition
• **Assuming the result is a different shape** — $A \\odot B$ has the same shape as both operands, unlike standard multiplication
• **Using $\\cdot$ or $\\times$ for the Hadamard product** — these notations strongly suggest the standard product and cause confusion
• **Forgetting the operation is commutative** — unlike standard matrix multiplication, $A \\odot B = B \\odot A$ always holds`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Matrix multiplication** — the standard non-element-wise product $A \\times B$, with different shape rules and very different geometric meaning.

**Matrix addition** — the additive element-wise operation; same shape requirement, same result-shape behavior as Hadamard.

**Kronecker product** — a different "tensor" product of two matrices producing a much larger result; sometimes confused with Hadamard but unrelated.

**Outer product** — the vector-vector product producing a rank-1 matrix; another distinct operation.

**Inner product (Frobenius)** — the sum of all entries of $A \\odot B$ equals $\\langle A, B \\rangle_F$, the Frobenius inner product.

**Scalar multiplication** — element-wise multiplication by a number; the Hadamard product is its matrix-by-matrix analogue.

**Element-wise functions** — applying $f$ to every entry, often combined with Hadamard products in machine learning.`,
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
      question: "What is the Hadamard product?",
      answer: "The Hadamard product, written A circle-dot B, is the element-wise product of two matrices of the same shape. Each entry of the result equals the product of the corresponding entries in A and B. It is also called the Schur product or the element-wise matrix product."
    },
    obj2: {
      question: "How is the Hadamard product different from standard matrix multiplication?",
      answer: "The Hadamard product multiplies matrices cell by cell, requires identical shapes, and produces a result of the same shape. Standard matrix multiplication pairs rows of A with columns of B, requires the inner dimensions to match, and produces a result whose shape depends on the outer dimensions. They are different operations with different shape rules and different results."
    },
    obj3: {
      question: "Can you take the Hadamard product of matrices of different shapes?",
      answer: "No. Both matrices must have exactly the same number of rows and the same number of columns. Without matched shapes there is no pairing of corresponding entries, so the element-wise rule is not defined."
    },
    obj4: {
      question: "Is the Hadamard product commutative?",
      answer: "Yes. Because every entry of the result is just the scalar product of the matching entries in A and B, the Hadamard product inherits the commutativity of scalar multiplication: A circle-dot B equals B circle-dot A. It is also associative and distributes over matrix addition."
    },
    obj5: {
      question: "Where is the Hadamard product used?",
      answer: "It appears in machine learning for gating and masking, in image processing for pixel-wise filters, in statistics for weighted scaling, and in numerical linear algebra for preconditioning. The common pattern is operations on matrix-shaped data where rows and columns should not be mixed."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Hadamard Product Visualizer",
      "description": "Step-by-step visualizer for the Hadamard (element-wise) product of two matrices. Watch C equals A circle-dot B build one cell at a time.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/hadamard-product",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Element-wise product of two matrices visualized cell by cell",
        "Adjustable shared dimensions of A and B from 1 by 1 up to 5 by 5",
        "Animated curved arrows from paired source cells into the destination cell",
        "Cell-level formula captions for every step",
        "Explicit contrast with standard matrix multiplication via the info tooltip and final-scene summary",
        "Adjustable playback speed and scrollable step log",
        "Same-shape requirement enforced and explained inline"
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
      "keywords": "hadamard product, element-wise matrix multiplication, A circle dot B, hadamard product calculator, element-wise product, pointwise matrix product, schur product, how to compute hadamard product, hadamard product visualizer, hadamard vs matrix multiplication, element-wise multiplication matrices, interactive matrix tool, linear algebra visualizer, matrix operations, same shape matrices"
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
          "name": "Hadamard Product",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/hadamard-product"
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
        title: "Hadamard Product Visualizer | Element-Wise Matrix Product",
        description: "Visualize the Hadamard product step by step. Set dimensions up to 5x5 and watch C = A circle-dot B build cell by cell. Not to be confused with A x B.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/hadamard-product",
        name: "Hadamard Product Visualizer",
        hubDescription: "Watch the element-wise product A circle-dot B build one cell at a time, with animated arrows linking each pair of operand cells to its destination. Adjust the shared shape of A and B from 1x1 to 5x5 and see how the Hadamard product differs from the standard matrix product.",
        category: 'Matrices',
        subCategory: 'Matrix Operations'
      }
    }
  }
}

export default function HadamardProductVisualizer({ seoData, sectionsContent, introContent, faqQuestions, schemas }) {


  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [sectionsContent.obj0.content]
    },
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
      <h1 className='title' style={{ marginTop: '0px', marginBottom: '0px' }}>Hadamard Product (element-wise)</h1>
      <br />
      <div style={{ width: '80%', margin: 'auto' }}>
        <HadamardWrapper />
      </div>
      <br />
      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
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
      <Sections sections={genericSections} />
      <br />
      <br />
      <br />
      {/* <ScrollUpButton/> */}
    </>
  )
}