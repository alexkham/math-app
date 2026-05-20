// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import TraceWrapper from '../../../../app/components/linear-algebra copy/matrix/TraceWrapper'


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
//         url: "/linear-algebra/visual-tools/matrix-trace",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Trace of a Matrix</h1>
//    <br/>
//    <div style={{width:'80%',margin:'auto'}}>
//    <TraceWrapper/>
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
import TraceWrapper from '../../../../app/components/linear-algebra copy/matrix/TraceWrapper'


export async function getStaticProps(){

  const keyWords = [
    'matrix trace',
    'trace of a matrix',
    'tr(A)',
    'matrix trace calculator',
    'how to compute matrix trace',
    'sum of diagonal entries',
    'main diagonal sum',
    'trace visualizer',
    'trace step by step',
    'trace square matrix',
    'trace properties',
    'trace and eigenvalues',
    'linear algebra visualizer',
    'matrix operations',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Trace** — the sum of the main-diagonal entries of a square matrix: $\\text{tr}(A) = a_{1,1} + a_{2,2} + \\cdots + a_{n,n}$.

**Main diagonal** — the entries $a_{i,i}$ where the row index equals the column index.

**Square matrix** — a matrix with the same number of rows and columns ($n \\times n$). Trace is defined only for square matrices.

**Off-diagonal entries** — entries $a_{i,j}$ with $i \\neq j$. They are completely ignored by the trace.

**Scalar invariant** — the trace returns a single number that is invariant under similarity transformations: $\\text{tr}(P^{-1} A P) = \\text{tr}(A)$.

**$\\Sigma$ notation** — the trace can be written compactly as $\\text{tr}(A) = \\sum_{i=1}^{n} a_{i,i}$.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the size of $A$ and watch the trace build one diagonal entry at a time.

• Use the **Dimension** steppers to set the size of $A$ from $2 \\times 2$ up to $10 \\times 10$ — both dimensions move together because $A$ must be square
• Hover the **?** icon for a reminder that trace requires a square matrix
• The scene player starts by posing the question with no highlights, then reveals the main diagonal, then sweeps the diagonal entry by entry
• Use the speed selector and step log to control the pace and review prior steps`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `Reading the Scene Player`,
      content: `Each scene focuses on the diagonal of $A$ with three visual states.

• **Pending** entries (not yet counted) appear with a dashed green outline
• The **current** entry being added is highlighted in solid blue with a slight scale-up
• **Counted** entries turn solid green
• Off-diagonal cells stay neutral throughout — the trace ignores them completely
• The running formula $\\text{tr}(A) = a_{1,1} + a_{2,2} + \\cdots$ updates above with the same color coding`,
      before: ``,
      after: ``,
      link: '#reading-the-scene-player',
    },
    obj3: {
      title: `Choosing the Dimension`,
      content: `The dimension stepper controls the size of the square matrix $A$.

• Smaller sizes ($2 \\times 2$, $3 \\times 3$) make each scene easy to follow and show how short the trace sum is
• Larger sizes (up to $10 \\times 10$) demonstrate how the same rule scales — exactly $n$ terms regardless of how many off-diagonal entries exist
• Cell size shrinks automatically as $n$ grows so the matrix stays readable
• Both row and column steppers are linked since trace only applies to square matrices`,
      before: ``,
      after: ``,
      link: '#choosing-the-dimension',
    },
    obj4: {
      title: `Scene Order`,
      content: `The animation follows a deliberate three-stage order.

• **Pose** — the matrix appears with no highlights; the question "what is the trace?" is asked first
• **Reveal** — the entire main diagonal is highlighted in blue, separating the entries that contribute from those that do not
• **Sweep** — one scene per diagonal entry, adding $a_{k,k}$ to the running sum
• **Outro** — every diagonal entry is green and the complete formula is shown along with the $\\Sigma$ notation

This order separates "what is the trace looking at?" from "what does the trace compute?" — two questions that are easy to conflate.`,
      before: ``,
      after: ``,
      link: '#scene-order',
    },
    obj5: {
      title: `What the Trace Is`,
      content: `The trace of an $n \\times n$ matrix $A$ is the sum of its main-diagonal entries:

$$\\text{tr}(A) = a_{1,1} + a_{2,2} + \\cdots + a_{n,n} = \\sum_{i=1}^{n} a_{i,i}$$

Trace is defined only for square matrices. Off-diagonal entries play no role at all — the trace ignores them completely. The result is a single scalar that summarizes one piece of information about $A$, complementary to the determinant.

For comprehensive theory, see **matrix operations**.`,
      before: ``,
      after: ``,
      link: '#what-the-trace-is',
    },
    obj6: {
      title: `Key Properties`,
      content: `The trace has a short list of clean algebraic properties.

• **Linearity**: $\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)$ and $\\text{tr}(kA) = k \\cdot \\text{tr}(A)$
• **Transpose invariance**: $\\text{tr}(A^T) = \\text{tr}(A)$ — the diagonal stays put under transposition
• **Cyclic property**: $\\text{tr}(AB) = \\text{tr}(BA)$, and more generally $\\text{tr}(ABC) = \\text{tr}(BCA) = \\text{tr}(CAB)$
• **Similarity invariance**: $\\text{tr}(P^{-1} A P) = \\text{tr}(A)$ — trace doesn't change under change of basis
• **Sum of eigenvalues**: for any square $A$, $\\text{tr}(A) = \\sum_i \\lambda_i$ where $\\lambda_i$ are the eigenvalues counted with multiplicity

The cyclic property is the workhorse — it's behind nearly every nontrivial trace identity.`,
      before: ``,
      after: ``,
      link: '#key-properties',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The trace appears throughout mathematics and applications because it captures the sum of eigenvalues in an arithmetic form that's easy to compute.

• **Linear algebra**: $\\text{tr}(A) = \\sum \\lambda_i$ — read off the eigenvalue sum without diagonalizing
• **Differential geometry and physics**: the trace of a stress or strain tensor measures volume change; the trace of a Hamiltonian relates to partition functions
• **Machine learning**: trace appears in covariance summaries, Frobenius norms ($\\|A\\|_F^2 = \\text{tr}(A^T A)$), and many regularization terms
• **Inner product**: the Frobenius inner product is $\\langle A, B \\rangle_F = \\text{tr}(A^T B)$
• **Statistics**: trace of a projection matrix counts the degrees of freedom of the projection

Anywhere a "total" or "sum of intrinsic quantities" of a square matrix is needed, the trace is the right tool.`,
      before: ``,
      after: ``,
      link: '#why-it-matters',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take $A$ as a $3 \\times 3$ matrix:

$$A = \\begin{pmatrix} 2 & 7 & -1 \\\\ 0 & 5 & 4 \\\\ 3 & 1 & -6 \\end{pmatrix}$$

The trace pulls out only the diagonal entries:

$$\\text{tr}(A) = 2 + 5 + (-6) = 1$$

The other six entries (7, $-1$, 0, 4, 3, 1) are ignored entirely. Notice that for the same $A$, the determinant uses every entry while the trace uses only three — they capture different aspects of the matrix.

Set the visualizer to $3 \\times 3$ and step through to see this picking-out process animated.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur with trace.

• **Trying to compute the trace of a non-square matrix** — the trace is undefined for rectangular $A$ because there is no full main diagonal
• **Confusing trace with determinant** — both are scalar summaries of a square matrix, but trace sums diagonal entries while determinant computes a signed product across all permutations
• **Forgetting the cyclic property is cyclic, not commutative** — $\\text{tr}(AB) = \\text{tr}(BA)$ holds, but $\\text{tr}(ABC) \\neq \\text{tr}(ACB)$ in general
• **Assuming trace equals the determinant of the diagonal** — the trace is a sum, not a product
• **Mixing up "diagonal" with "anti-diagonal"** — trace uses entries where $i = j$, not where $i + j = n + 1$`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Determinant** — another scalar invariant of a square matrix, equal to the product of eigenvalues.

**Eigenvalues** — the trace equals their sum, the determinant equals their product.

**Frobenius norm** — defined as $\\|A\\|_F = \\sqrt{\\text{tr}(A^T A)}$.

**Frobenius inner product** — $\\langle A, B \\rangle_F = \\text{tr}(A^T B)$.

**Transpose** — leaves the trace unchanged: $\\text{tr}(A^T) = \\text{tr}(A)$.

**Similarity transformation** — leaves the trace invariant.

**Identity matrix** — $\\text{tr}(I_n) = n$, since every diagonal entry equals 1.

**Matrix multiplication** — the cyclic property of trace ($\\text{tr}(AB) = \\text{tr}(BA)$) is one of the most used trace identities.`,
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
      question: "What is the trace of a matrix?",
      answer: "The trace of an n by n matrix A, written tr of A, is the sum of its main-diagonal entries: a sub 1,1 plus a sub 2,2 and so on up to a sub n,n. It is defined only for square matrices and ignores all off-diagonal entries. The result is a single scalar."
    },
    obj2: {
      question: "Can you take the trace of a non-square matrix?",
      answer: "No. The trace is defined only for square matrices because it sums entries along the main diagonal, and only square matrices have a full main diagonal. For a rectangular matrix, the entries where i equals j extend only through the smaller of the two dimensions, and the trace is not standardly defined."
    },
    obj3: {
      question: "What is the relationship between trace and eigenvalues?",
      answer: "For any square matrix A, the trace equals the sum of the eigenvalues counted with multiplicity. This relationship holds whether or not A is diagonalizable. Combined with the fact that the determinant equals the product of eigenvalues, the trace gives a quick scalar summary of the spectrum without diagonalizing."
    },
    obj4: {
      question: "Is the trace of a product commutative?",
      answer: "The trace satisfies the cyclic property: tr of A times B equals tr of B times A. More generally, the trace is invariant under cyclic rotations of a product, so tr of A B C equals tr of B C A equals tr of C A B. However, trace is not invariant under arbitrary permutations: tr of A B C does not generally equal tr of A C B."
    },
    obj5: {
      question: "Why is the trace useful?",
      answer: "The trace is one of the simplest scalar invariants of a matrix, easy to compute and rich in meaning. It equals the sum of eigenvalues, appears in the Frobenius norm and inner product, is invariant under similarity transformations, and shows up throughout physics, statistics, and machine learning whenever a total or sum of intrinsic quantities of a square matrix is needed."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Trace Visualizer",
      "description": "Step-by-step visualizer for the trace of a square matrix. Watch tr(A) build by summing the main-diagonal entries one at a time.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-trace",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Step-by-step accumulation of tr(A) by sweeping the main diagonal",
        "Adjustable square dimension of A from 2 by 2 up to 10 by 10",
        "Three-stage scene order: pose, reveal the diagonal, sweep",
        "Pending / current / counted color states for each diagonal entry",
        "Running expanded sum above the canvas with matching color coding",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the square-matrix requirement"
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
      "keywords": "matrix trace, trace of a matrix, tr(A), matrix trace calculator, how to compute matrix trace, sum of diagonal entries, main diagonal sum, trace visualizer, trace step by step, trace square matrix, trace properties, trace and eigenvalues, linear algebra visualizer, matrix operations, interactive matrix tool"
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
          "name": "Matrix Trace",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-trace"
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
        title: "Matrix Trace Visualizer | Sum of Diagonal Entries",
        description: "Visualize the trace of a square matrix step by step. Set A from 2x2 to 10x10 and watch tr(A) build by summing the main-diagonal entries one at a time.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-trace",
        name: "Matrix Trace Visualizer",
        hubDescription: "Watch tr(A) build one diagonal entry at a time, with off-diagonal cells fading into the background. Set the square dimension of A from 2x2 up to 10x10, follow the running sum, and see why the trace is the cleanest scalar invariant of a square matrix.",
        category: 'Matrices',
        subCategory: 'Properties'
      }
    }
  }
}

export default function MatrixTraceVisualizer({ seoData, sectionsContent, introContent, faqQuestions, schemas }) {


  const genericSections=[
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Trace of a Matrix</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <TraceWrapper/>
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