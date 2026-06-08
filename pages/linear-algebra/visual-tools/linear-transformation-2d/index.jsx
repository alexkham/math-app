// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import LinearTransformation from '../../../../app/components/linear-algebra copy/r2-visualizers/linear-transformations/LinearTransformations'


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
//         url: "/linear-algebra/visual-tools/linear-transformation-2d",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Linear Transformation</h1>
//    <br/>
//    <div style={{transform:'scale(0.9)'}}>
//    <LinearTransformation/>
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
import LinearTransformation from '../../../../app/components/linear-algebra copy/r2-visualizers/linear-transformations/LinearTransformations'


export async function getStaticProps(){

  const keyWords=[
    'linear transformation',
    'linear transformation visualizer',
    '2D linear transformation',
    'matrix transformation',
    'linear map',
    '2x2 matrix transformation',
    'linear transformation calculator',
    'interactive linear algebra',
    'determinant area',
    'shear matrix',
    'rotation matrix',
    'reflection matrix',
    'matrix transformation visualizer',
    'linear algebra visualization',
    'singular matrix'
  ]


    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`**Linear Transformation** &mdash; A function $T$ such that $T(u + v) = T(u) + T(v)$ and $T(c \\cdot v) = c \\cdot T(v)$. Every linear transformation on $\\mathbb{R}^2$ is represented by a $2 \\times 2$ matrix.

**Matrix $A$** &mdash; The $2 \\times 2$ array whose columns are $T(\\hat{i})$ and $T(\\hat{j})$, where $\\hat{i}$ and $\\hat{j}$ are the standard basis vectors.

**Determinant** &mdash; The signed area of the parallelogram spanned by the columns of $A$. Positive: orientation preserved. Negative: orientation reversed. Zero: singular.

**Trace** &mdash; The sum of the diagonal entries, $a_{11} + a_{22}$. Equals the sum of the eigenvalues.

**Rank** &mdash; The dimension of the image. Either 2 (full rank, invertible), 1 (singular, collapses to a line), or 0 (zero matrix).

**Eigenvalue** &mdash; A scalar $\\lambda$ such that $Av = \\lambda v$ for some nonzero $v$. The directions preserved by $A$ up to scaling.

**Interpolation Parameter $t$** &mdash; A scrub variable from 0 to 1. The displayed matrix is $M(t) = (1 - t) I + t A$, morphing the identity into $A$.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Getting Started`,
      content:`The visualizer shows a single square canvas with three columns surrounding it. The left sidebar groups twelve preset transformations by rank. The center column holds the canvas and animation controls. The right column shows an explanation of the current preset, layer toggles, the editable matrix $A$, and a live readout.

The fundamental workflow:

&bull; **Pick a preset** on the left &mdash; the animation auto-plays, morphing the identity into the chosen matrix over about 1.6 seconds.
&bull; **Drag the t slider** under the canvas &mdash; manually scrub through the morph at any speed.
&bull; **Edit the matrix A** on the right &mdash; the visualization updates instantly. The scenario indicator clears since you are now in custom mode.

The matrix $M(t) = (1 - t) I + t A$ blends linearly from the identity at $t = 0$ to the full transformation at $t = 1$, so the canvas shows the transformation actually happening rather than just its end state.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`The Animation Slider`,
      content:`The animation panel below the canvas controls the parameter $t$ from 0 to 1.

&bull; **Play** &mdash; smoothly eases from current $t$ to 1 over 1.6 seconds using a cubic ease-in-out curve. Restarts from 0 if already at the end.
&bull; **Step buttons** &mdash; advance or rewind by 0.1 in $t$ for frame-by-frame inspection.
&bull; **Reset** &mdash; jump back to $t = 0$ (identity).
&bull; **Scrub slider** &mdash; drag to any value between 0 and 1. Hold and slow-scrub to watch the determinant cross zero in singular cases.

Watch the readout under the canvas as you scrub: $\\det M(t)$ updates live. For singular target matrices, $\\det M(t)$ smoothly approaches zero. For orientation-reversing matrices (reflections), $\\det M(t)$ crosses zero somewhere between 0 and 1, marking the instant the plane collapses before flipping.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Editing the Matrix A Directly`,
      content:`The matrix card on the right shows the four entries of $A$ as editable numeric inputs.

&bull; **Click an entry and type** &mdash; the matrix updates instantly. Use arrow keys to step by 0.1.
&bull; **Set both columns parallel** &mdash; $\\det A = 0$, the matrix becomes singular, kernel and image lines appear on the canvas.
&bull; **Set all four entries to zero** &mdash; the zero map. The entire plane collapses to the origin.
&bull; **Make the matrix orthonormal** &mdash; for example $[[\\cos\\theta, -\\sin\\theta], [\\sin\\theta, \\cos\\theta]]$ &mdash; the classification readout shows "rotation".

When you edit, the active scenario indicator clears and the explanation card switches to "Custom matrix". Click any scenario in the sidebar to snap back to a canonical example.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Display Layer Toggles`,
      content:`The chip strip toggles eight independent visual layers.

&bull; **grid** &mdash; the transformed integer grid. The deformation of the gridlines is the most direct picture of what $M(t)$ does.
&bull; **basis** &mdash; the two basis vectors $\\hat{i}$ (orange) and $\\hat{j}$ (cyan) drawn from origin to their images. The columns of $M(t)$ are these tips.
&bull; **unit sq** &mdash; the unit square fill. Purple when $\\det > 0$, pink when $\\det < 0$ (orientation reversed), gray when singular.
&bull; **unit circle** &mdash; the unit circle morphs into an ellipse for invertible $A$. Ellipse axes correspond to singular values.
&bull; **eigen** &mdash; magenta dashed lines along eigendirections (when eigenvalues are real). Tips show how eigenvectors scale.
&bull; **ker / im** &mdash; red dashed kernel line and green image line, shown only for singular matrices.
&bull; **samples** &mdash; a scattered grid of dots showing where representative points land.
&bull; **labels** &mdash; the $\\hat{i}$, $\\hat{j}$, $\\ker A$, $\\text{im } A$ tags.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Reading the Live Card`,
      content:`The live card on the right reports six quantities updating in real time.

&bull; **$M(t)$** &mdash; the current interpolated matrix shown as a $2 \\times 2$ array. At $t = 0$ this is the identity; at $t = 1$ this is $A$.
&bull; **$\\det M(t)$** &mdash; the determinant of the currently displayed matrix. Watch it deform from 1 (identity) toward $\\det A$.
&bull; **$\\det A$** &mdash; the determinant of the target matrix. Fixed.
&bull; **trace $A$** &mdash; sum of diagonal entries. Equals the sum of eigenvalues.
&bull; **eigenvalues** &mdash; the roots of the characteristic polynomial. Listed as real pairs or as $a \\pm bi$ for complex conjugates.
&bull; **rank $A$** &mdash; the dimension of the image: 0, 1, or 2.

The combination of $\\det A$, trace, and eigenvalues uniquely characterizes the structural type of the transformation up to similarity.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`The Classification Readout`,
      content:`Below the canvas the classify panel names the transformation in plain language, matched against ten patterns.

&bull; **identity** &mdash; $A = I$. Nothing moves.
&bull; **uniform scaling** &mdash; diagonal with equal positive entries.
&bull; **axis-aligned stretch** &mdash; diagonal with unequal entries. Scales each axis independently.
&bull; **rotation** &mdash; columns are unit length and perpendicular, $\\det = 1$.
&bull; **reflection** &mdash; columns are unit length and perpendicular, $\\det = -1$.
&bull; **orientation-reversing** &mdash; $\\det < 0$ but not a pure reflection.
&bull; **general invertible** &mdash; $\\det \\neq 0$, no special structure.
&bull; **singular &rarr; line** &mdash; rank 1, collapses the plane to a line.
&bull; **zero map** &mdash; everything goes to the origin.

Edit the matrix and watch the classification update. Tiny perturbations break special structure: a rotation becomes "general invertible" when one entry shifts by 0.01.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Preset Scenarios &mdash; Three Rank Categories`,
      content:`The scenarios sidebar offers twelve canonical transformations grouped by rank.

&bull; **Full rank (rank 2)** &mdash; identity, rotate $45\\deg$, rotate $90\\deg$, scale $2\\times$, shear x, reflect x-axis, reflect y = x, and twist & stretch. All invertible. Different determinants and orientation behaviors.
&bull; **Singular (rank 1)** &mdash; project to x-axis, project to y = x (orthogonal projection), and outer product $[[1,2],[2,4]]$. Each collapses the plane to a line; kernel and image become visible.
&bull; **Degenerate (rank 0)** &mdash; the zero map. Everything goes to the origin.

Selecting a scenario auto-plays the morph from identity to that matrix. The explanation card on the right shows three blocks: a brief description, an **Insight** about structural properties (eigenvalues, symmetries), and **What to watch** &mdash; the specific visual feature that makes this scenario distinctive.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`What Is a Linear Transformation?`,
      content:`A linear transformation is a function $T: V \\to W$ between vector spaces satisfying two rules:

$$T(u + v) = T(u) + T(v)$$
$$T(c \\cdot v) = c \\cdot T(v)$$

These two properties together say $T$ respects the linear combinations of vectors. Equivalently, $T$ maps lines through the origin to lines through the origin, and grids of parallelograms to grids of parallelograms.

For finite-dimensional spaces, every linear transformation is given by matrix multiplication. In $\\mathbb{R}^2$, the matrix has the images $T(\\hat{i})$ and $T(\\hat{j})$ as its columns. That is the entire content of "linear": fix where the basis vectors go, and everything else is determined.

For deeper coverage of definitions and properties, see **linear transformation theory**, **linear maps**, and **vector spaces**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Determinant: Area and Orientation`,
      content:`The determinant of a $2 \\times 2$ matrix has a direct geometric meaning: the signed area of the parallelogram spanned by its columns.

$$\\det\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc$$

Three cases:

&bull; **$\\det A > 0$** &mdash; orientation preserved. The unit square stays oriented counterclockwise after transformation. Area scales by $\\det A$.
&bull; **$\\det A < 0$** &mdash; orientation reversed. The unit square becomes clockwise; the transformation includes a reflection somewhere.
&bull; **$\\det A = 0$** &mdash; the columns are linearly dependent. The parallelogram has zero area; the transformation collapses the plane to a line or a point.

In the visualizer this is encoded in color: purple fill for positive determinant, pink for negative, gray for singular. For more see **determinant of a matrix**, **signed area**, and **orientation in linear algebra**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Eigenvalues, Rank, and Matrix Types`,
      content:`Two more invariants pin down the structure of any $2 \\times 2$ matrix: the eigenvalues and the rank.

**Eigenvalues** are the roots of the characteristic polynomial $\\lambda^2 - \\text{tr}(A)\\lambda + \\det(A) = 0$. They tell you what scaling factors $A$ applies along its preserved directions. Real eigenvalues correspond to invariant lines visible as magenta dashed lines on the canvas. Complex eigenvalues come in conjugate pairs and indicate a rotational component with no real invariant line.

**Rank** is the dimension of the image: 2 for invertible matrices, 1 for matrices that collapse the plane to a line, 0 only for the zero matrix.

Together with the determinant, these classify the transformation:

&bull; **Rotation** &mdash; $\\det = 1$, complex eigenvalues on the unit circle.
&bull; **Reflection** &mdash; $\\det = -1$, eigenvalues $+1$ and $-1$.
&bull; **Shear** &mdash; $\\det = 1$, repeated real eigenvalue, only one independent eigenvector.
&bull; **Scaling** &mdash; diagonal, eigenvalues are the diagonal entries.
&bull; **Projection** &mdash; rank 1, eigenvalues 0 and (nonzero).

For comprehensive treatment see **eigenvalues and eigenvectors**, **matrix rank**, and **characteristic polynomial**.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:`Related Concepts`,
      content:`**Matrix Multiplication** &mdash; the operation that realizes any linear transformation: $T(v) = Av$.

**Determinant** &mdash; signed area scaling factor and orientation indicator.

**Eigenvalues and Eigenvectors** &mdash; the invariant directions and scaling factors of $A$.

**Kernel and Image** &mdash; what gets collapsed and what gets reached, especially visible for singular matrices.

**Rank-Nullity Theorem** &mdash; $\\text{rank}(A) + \\text{nullity}(A) = 2$ for any $2 \\times 2$ matrix.

**Change of Basis** &mdash; expressing $A$ in a different basis. In the eigenbasis, $A$ becomes diagonal.

**Singular Value Decomposition** &mdash; the unit circle morphs into an ellipse; the singular values are the lengths of the ellipse axes.

**Rotation Matrices** &mdash; the special case $A^T A = I$ with $\\det A = 1$. Length-preserving rigid motions.`,
      before:``,
      after:``,
      link:'',
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
    },
    obj15:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
    }
  }


  const faqQuestions = {
    obj1: {
      question: "What is a linear transformation?",
      answer: "A linear transformation is a function from one vector space to another that preserves addition and scalar multiplication. Every linear transformation between finite-dimensional spaces can be represented as a matrix. For 2 by 2 matrices, the transformation reshapes the plane while keeping the origin fixed and mapping lines to lines."
    },
    obj2: {
      question: "What does the determinant of a 2x2 matrix tell you?",
      answer: "The determinant equals the signed area of the parallelogram formed by the columns of the matrix. A positive determinant means the transformation preserves orientation; a negative determinant flips it. A zero determinant means the matrix is singular and collapses the plane to a line or a point."
    },
    obj3: {
      question: "How do you classify a 2x2 linear transformation?",
      answer: "Common types include rotations (preserve length and angles, determinant 1), reflections (determinant negative 1, swap orientation), shears (determinant 1 but distort angles), scalings (multiply lengths by a constant), and singular maps that collapse dimensions. The determinant, trace, and eigenvalues together determine the class."
    },
    obj4: {
      question: "What happens when the determinant equals zero?",
      answer: "When the determinant is zero the matrix is singular: it cannot be inverted and it collapses the plane onto a line through the origin (rank 1) or onto the origin itself (rank 0, only when A is the zero matrix). The kernel and image become visible structural features in this case."
    },
    obj5: {
      question: "How are eigenvalues related to linear transformations?",
      answer: "An eigenvalue lambda paired with an eigenvector v satisfies A times v equals lambda times v. Geometrically, the eigenvector direction is preserved by the transformation and only scaled by lambda. Real eigenvalues produce visible invariant lines; complex eigenvalues indicate a rotational component with no real invariant direction."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Linear Transformation 2D Visualizer",
      "description": "Drag the t slider to morph the identity into matrix A and see how a linear transformation reshapes the plane. Visualize determinant, eigenvalues, and rank.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-transformation-2d",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Smooth animation from identity to any 2x2 matrix A via interpolation parameter t",
        "Editable matrix with live update across the canvas and all readouts",
        "Twelve preset scenarios spanning rotations, reflections, shears, projections, and the zero map",
        "Automatic classification: identity, rotation, reflection, shear, scaling, projection, singular, zero map",
        "Live readout of determinant, trace, eigenvalues, and rank for the current matrix",
        "Layer toggles for grid, basis vectors, unit square, unit circle, eigenvectors, kernel and image, samples",
        "Color-coded unit square fill showing orientation: purple for positive determinant, pink for negative, gray for singular"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2026-06-09",
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": "linear transformation, linear transformation visualizer, 2D linear transformation, matrix transformation, linear map, 2x2 matrix transformation, linear transformation calculator, interactive linear algebra, determinant area, shear matrix, rotation matrix, reflection matrix, matrix transformation visualizer, linear algebra visualization, singular matrix"
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
          "name": "Linear Transformation 2D Visualizer",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-transformation-2d"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a linear transformation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A linear transformation is a function from one vector space to another that preserves addition and scalar multiplication. Every linear transformation between finite-dimensional spaces can be represented as a matrix. For 2 by 2 matrices, the transformation reshapes the plane while keeping the origin fixed and mapping lines to lines."
          }
        },
        {
          "@type": "Question",
          "name": "What does the determinant of a 2x2 matrix tell you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The determinant equals the signed area of the parallelogram formed by the columns of the matrix. A positive determinant means the transformation preserves orientation; a negative determinant flips it. A zero determinant means the matrix is singular and collapses the plane to a line or a point."
          }
        },
        {
          "@type": "Question",
          "name": "How do you classify a 2x2 linear transformation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common types include rotations (preserve length and angles, determinant 1), reflections (determinant negative 1, swap orientation), shears (determinant 1 but distort angles), scalings (multiply lengths by a constant), and singular maps that collapse dimensions. The determinant, trace, and eigenvalues together determine the class."
          }
        },
        {
          "@type": "Question",
          "name": "What happens when the determinant equals zero?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When the determinant is zero the matrix is singular: it cannot be inverted and it collapses the plane onto a line through the origin (rank 1) or onto the origin itself (rank 0, only when A is the zero matrix). The kernel and image become visible structural features in this case."
          }
        },
        {
          "@type": "Question",
          "name": "How are eigenvalues related to linear transformations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An eigenvalue lambda paired with an eigenvector v satisfies A times v equals lambda times v. Geometrically, the eigenvector direction is preserved by the transformation and only scaled by lambda. Real eigenvalues produce visible invariant lines; complex eigenvalues indicate a rotational component with no real invariant direction."
          }
        }
      ]
    }
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }




   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Linear Transformation 2D Visualizer | Learn Math Class",
        description: "Drag the t slider to morph the identity into matrix A and see how a linear transformation reshapes the plane. Visualize determinant, eigenvalues, and rank.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/linear-transformation-2d",
        name: "Linear Transformation 2D Visualizer",
        hubDescription: "Drag the t slider to morph the identity matrix continuously into any 2x2 matrix A and watch the plane reshape. The unit square fills with color to show orientation, eigenvectors highlight as magenta lines, kernel and image lines appear when A is singular, and a live readout tracks determinant, trace, eigenvalues, and rank across twelve preset scenarios.",
        category: "Linear Algebra",
        subCategory: "Linear Transformations"
      },
        
       }
    }
   }

export default function LinearTransformation2DPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Linear Transformation</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <LinearTransformation/>
   </div>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"
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