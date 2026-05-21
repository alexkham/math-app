// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import LinearCombinationWrapper from '../../../../app/components/linear-algebra copy/matrix/LinearCombinationWrapper'


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
//         url: "/url",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Linear Combinations of Matrices</h1>
//    <br/>
//    <div style={{width:'80%',margin:'auto'}}>
//    <LinearCombinationWrapper/>
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
import LinearCombinationWrapper from '../../../../app/components/linear-algebra copy/matrix/LinearCombinationWrapper'


export async function getStaticProps(){

  const keyWords = [
    'linear combination of matrices',
    'matrix linear combination',
    'alpha A plus beta B',
    'weighted sum of matrices',
    'linear combination visualizer',
    'linear combination calculator',
    'how to compute linear combination',
    'matrix scaling and addition',
    'span of matrices',
    'linear combination step by step',
    'matrix vector space',
    'scalar coefficients matrices',
    'linear algebra visualizer',
    'matrix operations',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Linear combination** — an expression $\\alpha A + \\beta B$ that scales each matrix by a scalar and adds the results. More generally, $c_1 A_1 + c_2 A_2 + \\cdots + c_n A_n$.

**Scalar coefficient** — the numbers $\\alpha, \\beta$ (or $c_i$) that multiply each matrix in the combination.

**Same-shape requirement** — all matrices in a linear combination must share identical dimensions so the additions are defined.

**Result shape** — the linear combination has the same shape as the operands.

**Span** — the set of all linear combinations of a fixed collection of matrices.

**Linear independence** — a property of a collection: no matrix in it can be written as a linear combination of the others.

**Vector space of matrices** — the set of all $m \\times n$ matrices forms a vector space under matrix addition and scalar multiplication; linear combinations are its native operation.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the shared shape of $A$ and $B$, then watch $\\alpha A + \\beta B = C$ build in three phases.

• Use the **Dimensions** steppers to set the shape of $A$ and $B$ (1 to 5 in each direction). $C$ inherits the shape automatically
• Hover the **?** icon for a reminder that linear combinations are built from scalar multiplication plus matrix addition
• Press play or step manually through the scene player
• The animation walks three phases in order: scale $A$ by $\\alpha$, scale $B$ by $\\beta$, then add the scaled matrices into $C$
• The scalars $\\alpha$ and $\\beta$ are shown symbolically — the visualizer focuses on structure, not specific numeric values`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `The Three Phases`,
      content: `The visualizer breaks the operation into three clearly separated phases.

• **Phase 1 — scale $A$ by $\\alpha$**: every cell of $A$ is multiplied by $\\alpha$ in place, one cell per scene; $B$ stays untouched
• **Phase 2 — scale $B$ by $\\beta$**: every cell of $B$ is multiplied by $\\beta$ in place, one cell per scene; $A$ is already fully scaled
• **Phase 3 — add into $C$**: each cell of $C$ is filled with $\\alpha a_{i,j} + \\beta b_{i,j}$, with two curved arrows flowing from $A$ and $B$ into $C$

This phase order makes the decomposition of a linear combination into scalar multiplication and matrix addition explicit. Both operations are visible on the screen at the same time when phase 3 begins.`,
      before: ``,
      after: ``,
      link: '#three-phases',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, arrows, and a caption.

• In phase 1, the active cell of $A$ is highlighted primary; the rest of the canvas stays neutral
• In phase 2, the active cell of $B$ is highlighted secondary
• In phase 3, the active cells of $A$ and $B$ are highlighted primary and secondary, and the destination cell of $C$ is accent; arrows flow from both sources into $C$
• Filled cells show their symbolic content — $\\alpha a_{i,j}$, $\\beta b_{i,j}$, or $\\alpha a_{i,j} + \\beta b_{i,j}$ — at a font size that scales with the matrix dimensions
• The step log on the right keeps a record of every completed cell across all phases`,
      before: ``,
      after: ``,
      link: '#reading-the-scene-player',
    },
    obj4: {
      title: `Choosing Dimensions`,
      content: `The dimension steppers control the shape shared by all three matrices.

• Smaller shapes ($2 \\times 2$, $2 \\times 3$) make the per-cell flow easy to follow in each phase
• Larger shapes ($4 \\times 4$, $5 \\times 5$) demonstrate that the same rule scales; total scenes equal $3 \\times m \\times n$ plus the intro and outro
• Cell content shrinks automatically as the matrix grows so $\\alpha a_{i,j} + \\beta b_{i,j}$ stays readable at the largest shape
• Square and rectangular shapes follow identical rules — linear combinations require only matching shapes between operands`,
      before: ``,
      after: ``,
      link: '#choosing-dimensions',
    },
    obj5: {
      title: `What a Linear Combination Is`,
      content: `A linear combination of two matrices $A$ and $B$ of the same shape is

$$C = \\alpha A + \\beta B, \\quad c_{i,j} = \\alpha \\cdot a_{i,j} + \\beta \\cdot b_{i,j}$$

More generally, a linear combination of $n$ matrices is

$$C = c_1 A_1 + c_2 A_2 + \\cdots + c_n A_n$$

All matrices must share the same shape, and the result inherits that shape. The operation is built from two simpler ones: scale each matrix by its coefficient, then add the scaled matrices entry by entry.

Linear combinations are the native operation of any vector space — matrices, vectors, polynomials, and functions all support them. For comprehensive theory, see **matrix operations**.`,
      before: ``,
      after: ``,
      link: '#what-a-linear-combination-is',
    },
    obj6: {
      title: `Key Properties`,
      content: `Linear combinations inherit their properties from scalar multiplication and matrix addition.

• **Closure**: a linear combination of $m \\times n$ matrices is again $m \\times n$
• **Commutativity**: $\\alpha A + \\beta B = \\beta B + \\alpha A$
• **Associativity**: combining linear combinations gives another linear combination
• **Zero coefficient**: if $\\alpha = 0$, the matrix $A$ drops out entirely
• **Scaling a linear combination**: $k(\\alpha A + \\beta B) = (k\\alpha) A + (k\\beta) B$
• **Distributivity**: $\\alpha(A + B) = \\alpha A + \\alpha B$

The structural fact behind all of this is that the set of $m \\times n$ matrices forms a vector space, and linear combinations are exactly the operation that vector spaces are designed to support.`,
      before: ``,
      after: ``,
      link: '#key-properties',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Linear combinations are the foundation on which most of linear algebra is built.

• **Span and basis**: the span of a set of matrices is the set of all their linear combinations; a basis is a linearly independent set whose span is the whole space
• **Linear independence**: testing whether $c_1 A_1 + \\cdots + c_n A_n = 0$ forces all $c_i = 0$
• **Solving linear systems**: a system $Ax = b$ asks whether $b$ is a linear combination of the columns of $A$
• **Subspaces**: a subspace is a set closed under linear combinations
• **Coordinate representations**: writing a matrix as a linear combination of basis matrices gives its coordinates
• **Differential equations, optimization, machine learning**: every linear model, every superposition principle, every gradient update is a linear combination`,
      before: ``,
      after: ``,
      link: '#why-it-matters',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take $A$, $B$ as $2 \\times 2$ matrices and $\\alpha = 2$, $\\beta = -1$:

$$A = \\begin{pmatrix} 1 & 3 \\\\ 0 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 2 \\\\ 1 & 0 \\end{pmatrix}$$

Scale $A$ by 2:

$$2A = \\begin{pmatrix} 2 & 6 \\\\ 0 & 8 \\end{pmatrix}$$

Scale $B$ by $-1$:

$$-B = \\begin{pmatrix} -5 & -2 \\\\ -1 & 0 \\end{pmatrix}$$

Add:

$$2A - B = \\begin{pmatrix} -3 & 4 \\\\ -1 & 8 \\end{pmatrix}$$

Set the visualizer to $2 \\times 2$ and step through to see the three phases animated symbolically.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Mixing shapes** — every matrix in the combination must have the same shape; no broadcasting
• **Distributing scalars unevenly** — $\\alpha(A + B) \\neq \\alpha A + B$; the scalar applies to every matrix it multiplies
• **Confusing linear combination with matrix product** — a linear combination scales and adds, no row-column interaction
• **Treating a single scalar product as a linear combination of one matrix** — technically valid but trivial; the interesting case has at least two matrices
• **Forgetting that the zero matrix is a trivial linear combination** — choosing all coefficients zero produces the zero matrix regardless of the operands`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Matrix addition** — the additive piece of any linear combination.

**Scalar multiplication** — the scaling piece of any linear combination.

**Span** — the set of all linear combinations of a fixed collection.

**Linear independence** — the property that no matrix in a set is a linear combination of the others.

**Basis** — a linearly independent set whose linear combinations produce every matrix in the space.

**Subspace** — a set closed under linear combinations.

**Vector space** — the abstract setting in which linear combinations live.

**Affine combination** — a linear combination whose coefficients sum to 1; closely related but distinct.`,
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
      question: "What is a linear combination of matrices?",
      answer: "A linear combination of two matrices A and B of the same shape is an expression of the form alpha times A plus beta times B, where alpha and beta are scalars. More generally, it is any sum of scalar multiples of matrices that share the same shape. The result is another matrix of that same shape."
    },
    obj2: {
      question: "Do the matrices in a linear combination need the same shape?",
      answer: "Yes. Every matrix in a linear combination must have the same dimensions because the operation involves entry-wise addition. Without matching shapes the addition is not defined and the linear combination has no meaning."
    },
    obj3: {
      question: "How is a linear combination different from matrix multiplication?",
      answer: "A linear combination scales each matrix by a scalar and adds the results entry by entry; there is no row-column interaction. Matrix multiplication is a fundamentally different operation that pairs rows of one matrix with columns of another. The two operations have different shape rules, different computational structure, and different geometric meaning."
    },
    obj4: {
      question: "Why are linear combinations important?",
      answer: "Linear combinations are the defining operation of a vector space. The concepts of span, basis, linear independence, subspace, and dimension all rest on them. Solving linear systems, doing change of basis, fitting linear models, and applying superposition principles in physics all reduce to questions about linear combinations."
    },
    obj5: {
      question: "What is the span of a set of matrices?",
      answer: "The span is the set of all linear combinations of those matrices. If A, B, and C are matrices of the same shape, their span consists of every matrix that can be written as alpha A plus beta B plus gamma C for some scalars alpha, beta, gamma. The span is always a subspace of the ambient matrix space."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Linear Combination of Matrices Visualizer",
      "description": "Step-by-step visualizer for linear combinations of matrices. Watch alpha A plus beta B build in three phases: scale, scale, add.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-combination",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three-phase animation: scale A by alpha, scale B by beta, then add",
        "Adjustable shared dimensions of A and B from 1 by 1 up to 5 by 5",
        "Animated curved arrows from paired source cells into the destination cell during the add phase",
        "Symbolic scalars alpha and beta preserved through every step",
        "Per-cell formula captions showing the structure of each phase",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining how a linear combination decomposes into scalar multiplication and matrix addition"
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
      "keywords": "linear combination of matrices, matrix linear combination, alpha A plus beta B, weighted sum of matrices, linear combination visualizer, linear combination calculator, how to compute linear combination, matrix scaling and addition, span of matrices, linear combination step by step, matrix vector space, scalar coefficients matrices, linear algebra visualizer, matrix operations, interactive matrix tool"
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
          "name": "Linear Combination",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-combination"
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
        title: "Linear Combination of Matrices Visualizer | αA + βB",
        description: "Visualize a linear combination of matrices step by step. Watch αA + βB build in three phases — scale A, scale B, then add — for shapes up to 5x5.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-linear-combination",
        name: "Linear Combination of Matrices Visualizer",
        hubDescription: "Watch αA + βB build in three phases — scale A by α, scale B by β, then add the scaled matrices cell by cell into C. Adjust the shared shape of A and B from 1x1 up to 5x5 and see how a linear combination decomposes into scalar multiplication followed by matrix addition.",
        category: 'Matrices',
        subCategory: 'Matrix Operations'
      }
    }
  }
}

export default function LinearCombinationVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
  const genericSections=[
    {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Linear Combinations of Matrices</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <LinearCombinationWrapper/>
   </div>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
   <br/>
    {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}