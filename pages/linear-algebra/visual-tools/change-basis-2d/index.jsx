// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import ChangeBasis from '../../../../app/components/linear-algebra copy/r2-visualizers/change-basis/ChangeBasis'


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
//         url: "/linear-algebra/visual-tools/change-basis-2d",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Change of Basis</h1>
//    <br/>
//    <div style={{transform:'scale(0.9)'}}>
//    <ChangeBasis/>
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
import ChangeBasis from '../../../../app/components/linear-algebra copy/r2-visualizers/change-basis/ChangeBasis'


export async function getStaticProps(){

  const keyWords=[
    'change of basis',
    'change of basis calculator',
    'change of basis 2D',
    'change of basis matrix',
    'basis transformation',
    'coordinate transformation',
    'interactive change of basis',
    'basis vectors visualization',
    'orthonormal basis',
    'non-orthogonal basis',
    'oblique basis',
    'linear algebra basis',
    'inverse basis matrix',
    'coordinates in new basis',
    'vector decomposition basis'
  ]


    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`**Basis** &mdash; A set of two linearly independent vectors in 2D that span the entire plane. Any vector can be written uniquely as a combination of basis vectors.

**Change of Basis** &mdash; The process of re-expressing a vector&apos;s coordinates relative to a new basis while the vector itself remains fixed in space.

**Basis Matrix B** &mdash; A $2 \\times 2$ matrix whose columns are the new basis vectors $b_1$ and $b_2$ written in standard coordinates.

**Inverse Matrix B⁻¹** &mdash; The matrix that converts standard coordinates into coordinates relative to the new basis: $v_B = B^{-1} v_{std}$.

**Determinant** &mdash; A scalar value $\\det(B)$ indicating area scaling and orientation. Zero determinant means the basis is degenerate.

**Orthonormal Basis** &mdash; A basis whose vectors are perpendicular and have unit length. For orthonormal bases, $B^{-1} = B^T$.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Getting Started`,
      content:`The canvas shows three draggable handles, the standard grid in gray, and a dashed basis grid in the colors of $b_1$ (teal) and $b_2$ (purple). The vector $v$ in amber stays in the same place in space no matter how you reshape the basis.

Try this sequence to build intuition:

&bull; Drag the teal $b_1$ handle to a new direction. The basis grid tilts; the coordinates of $v$ in the new basis update on the right.
&bull; Drag the purple $b_2$ handle. The parallelogram cells of the basis grid shift accordingly.
&bull; Drag the amber $v$ handle. Its standard coordinates change, and its decomposition along $b_1$ and $b_2$ updates.

The point: $v$ is a fixed geometric object. Only its numerical address changes when you switch bases.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Dragging the Basis Vectors`,
      content:`The two basis vector handles control the entire coordinate system.

&bull; **Drag $b_1$** &mdash; tilts the first axis. The dashed teal lines of the basis grid rotate and stretch.
&bull; **Drag $b_2$** &mdash; tilts the second axis. The dashed purple lines follow.
&bull; **Drag both close to each other** &mdash; the basis becomes oblique, and the parallelogram cells flatten. Once they line up exactly, the determinant hits zero and a warning appears on the canvas.

The classification line under the basis matrix updates live: orthonormal when both are unit and perpendicular, orthogonal when perpendicular but scaled, oblique otherwise, or singular when collinear. Watch how the inverse matrix $B^{-1}$ also changes in real time, or shows dashes when the basis fails.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Moving the Vector v`,
      content:`The amber $v$ handle moves the vector you are decomposing. Its purpose is to show that the same point in space carries different coordinate addresses in different bases.

&bull; **Drag $v$** &mdash; the dashed decomposition legs along $b_1$ and $b_2$ rebuild from origin to the corner and then to the tip of $v$.
&bull; **Drag $v$ to a basis grid intersection** &mdash; the new coordinates become clean integers like $(2, 1)$ even when the basis itself is unusual.
&bull; **Keep $v$ fixed and change the basis** &mdash; standard coordinates stay the same, but new-basis coordinates rearrange.

The decomposition equation under the coordinates reads $v = c_1 \\cdot b_1 + c_2 \\cdot b_2$ with live values for $c_1$ and $c_2$.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Reading the Coordinates Card`,
      content:`The coordinates card (01) shows two column vectors stacked side by side.

&bull; **$v_{std}$** &mdash; coordinates in the standard basis, the raw $(x, y)$ position. These never change when you only change the basis.
&bull; **$v_B$** &mdash; coordinates in the current basis $B$. Numbers shift whenever you drag $b_1$ or $b_2$.
&bull; **Decomposition line** &mdash; the explicit linear combination $v = c_1 \\cdot b_1 + c_2 \\cdot b_2$, color-matched to each basis vector.

When the basis is singular, the new-basis cells show dashes and a red warning strip explains that $b_1$ and $b_2$ are linearly dependent. This is the visual cue that coordinates do not exist for this basis.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`The Basis Matrix and Its Inverse`,
      content:`Card 02 shows the change-of-basis matrix $B$ and its inverse $B^{-1}$, both updating live.

&bull; **$B$** &mdash; the new basis vectors as columns. Teal entries are the components of $b_1$, purple are $b_2$.
&bull; **$B^{-1}$** &mdash; multiplies standard coordinates to give new-basis coordinates: $v_B = B^{-1} v_{std}$.
&bull; **$\\det(B)$** &mdash; printed below with classification: orthonormal, orthogonal, oblique, or singular. A negative determinant means orientation reverses.

Try the rotated 30° preset: $B^{-1}$ becomes the transpose $B^T$, the textbook property of orthonormal matrices. Try the stretched-axes preset: $B$ is diagonal and so is $B^{-1}$, with reciprocal entries.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Using the Preset Scenarios`,
      content:`The scenarios panel (03) on the left jumps the basis directly to ten canonical configurations grouped into four categories.

&bull; **Natural** &mdash; standard, rotated 30°, rotated 45°, stretched axes. All have perpendicular $b_1$ and $b_2$.
&bull; **Non-orth** &mdash; skewed, diagonals, obtuse. Valid bases with parallelogram cells.
&bull; **Orientation** &mdash; Y flipped, axes swapped. Both have $\\det(B) = -1$, reversing handedness.
&bull; **Degenerate** &mdash; collinear. $\\det(B) = 0$, coordinates undefined; useful for seeing the failure case.

Each scenario has a short explanation in the explanation card up top. Selecting a preset overwrites the current $b_1, b_2$ but keeps $v$ in place, so you can compare directly.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`Display Layer Toggles`,
      content:`The layer chips toggle which visual elements appear on the canvas.

&bull; **std grid** &mdash; gray standard $xy$ grid. Turn off to see the basis grid in isolation.
&bull; **basis grid** &mdash; dashed parallelogram cells in the colors of $b_1$ and $b_2$. This is the coordinate system implied by your new basis.
&bull; **decomposition** &mdash; dashed legs from origin to the parallelogram corner to the tip of $v$. Shows the explicit $c_1 b_1 + c_2 b_2$ path.
&bull; **labels** &mdash; the $b_1$, $b_2$, and $v$ name tags on each vector tip.

A useful combination: hide std grid and show only basis grid &mdash; the new basis becomes the natural coordinate system, with $v$ landing on whole-number intersections.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`What Is a Change of Basis?`,
      content:`A vector is a geometric object that exists independently of any coordinate system. When you describe it with numbers, those numbers depend on which basis you choose as a reference frame.

The standard basis $\\{e_1, e_2\\}$ with $e_1 = (1, 0)$ and $e_2 = (0, 1)$ gives the familiar $(x, y)$ coordinates. Any other pair of linearly independent vectors $\\{b_1, b_2\\}$ forms a valid basis. The same vector $v$ then has two numerical addresses: $v_{std}$ in the standard basis and $v_B$ in the new basis.

A change of basis is the rule that converts between these addresses. The vector itself does not move &mdash; only its description changes.

For deeper coverage, see **linear independence**, **vector spaces**, and **basis of a vector space**.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`The Change-of-Basis Formula`,
      content:`The change-of-basis matrix $B$ has the new basis vectors as columns:

$$B = \\begin{bmatrix} b_1 & b_2 \\end{bmatrix} = \\begin{bmatrix} b_{1x} & b_{2x} \\\\ b_{1y} & b_{2y} \\end{bmatrix}$$

Converting new-basis coordinates back to standard coordinates uses multiplication by $B$:

$$v_{std} = B \\, v_B$$

Going the other direction requires the inverse:

$$v_B = B^{-1} \\, v_{std}$$

For an orthonormal basis (perpendicular unit vectors), the inverse equals the transpose: $B^{-1} = B^T$. This is why rotations are so efficient computationally.

The basis is valid as long as $\\det(B) \\neq 0$. If the determinant is zero, $b_1$ and $b_2$ are linearly dependent and fail to span the plane.

For a full treatment see **matrix inverse**, **determinant**, and **matrix multiplication**.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Related Concepts`,
      content:`**Basis of a Vector Space** &mdash; the underlying definition of what makes a valid coordinate system.

**Linear Independence** &mdash; the condition $b_1$ and $b_2$ must satisfy for $B$ to be invertible.

**Matrix Inverse** &mdash; the operation that takes you from standard coordinates back to new-basis coordinates.

**Determinant** &mdash; tells you whether $B$ is invertible, by how much it scales area, and whether it preserves or reverses orientation.

**Eigenvalues and Eigenvectors** &mdash; a change of basis to eigenvectors diagonalizes a transformation, the foundation of many decompositions.

**Orthogonal Matrices** &mdash; the special case where $B^{-1} = B^T$ and the change of basis is a pure rotation or reflection.

**Linear Transformations** &mdash; a change of basis is one viewpoint; a true transformation moves the vector. The same matrix can play either role depending on interpretation.`,
      before:``,
      after:``,
      link:'',
    },
    obj11:{
      title:``,
      content:``,
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
      question: "What is a change of basis?",
      answer: "A change of basis converts the coordinates of a vector from one basis to another while the vector itself stays fixed in space. The numerical coordinates change because they are measured against different reference vectors, but the geometric vector is the same."
    },
    obj2: {
      question: "How do you compute the change-of-basis matrix?",
      answer: "Place the new basis vectors as columns of a matrix B. To convert from new-basis coordinates back to the standard basis, multiply B times the new coordinates. To convert from standard to the new basis, multiply by the inverse matrix."
    },
    obj3: {
      question: "What does the determinant of the change-of-basis matrix tell you?",
      answer: "The determinant measures area scaling and orientation. A determinant of zero means the basis vectors are linearly dependent and do not form a valid basis. A negative determinant indicates the new basis reverses orientation compared to the standard basis."
    },
    obj4: {
      question: "When is a basis orthonormal versus oblique?",
      answer: "A basis is orthonormal when its vectors are perpendicular and have unit length. It is orthogonal when perpendicular but not unit length, and oblique when the angle between the vectors is not 90 degrees. For orthonormal bases, the inverse equals the transpose."
    },
    obj5: {
      question: "Why does the vector v stay in place when the basis changes?",
      answer: "The vector v is a geometric object independent of any coordinate system. Only its numerical representation depends on the chosen basis. When you change basis vectors, v remains at the same point in space, but its coordinates relative to the new basis are different numbers."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Change of Basis 2D Visualizer",
      "description": "Drag basis vectors to define a new coordinate system and watch vector v coordinates transform. Visualize the change-of-basis matrix B and its inverse.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/change-basis-2d",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Drag basis vectors b1 and b2 to define a custom 2D basis",
        "Move vector v independently and watch coordinates update live",
        "Compute the change-of-basis matrix B, inverse, and determinant",
        "Ten preset scenarios spanning orthonormal, oblique, singular, and orientation-reversed bases",
        "Toggle layers: standard grid, basis grid, decomposition legs, labels",
        "Live classification of the basis as orthonormal, orthogonal, oblique, or singular",
        "Color-coded decomposition equation showing v as a linear combination of b1 and b2"
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
      "keywords": "change of basis, change of basis calculator, change of basis 2D, change of basis matrix, basis transformation, coordinate transformation, interactive change of basis, basis vectors visualization, orthonormal basis, non-orthogonal basis, oblique basis, linear algebra basis, inverse basis matrix, coordinates in new basis, vector decomposition basis"
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
          "name": "Change of Basis 2D Visualizer",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/change-basis-2d"
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a change of basis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A change of basis converts the coordinates of a vector from one basis to another while the vector itself stays fixed in space. The numerical coordinates change because they are measured against different reference vectors, but the geometric vector is the same."
          }
        },
        {
          "@type": "Question",
          "name": "How do you compute the change-of-basis matrix?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Place the new basis vectors as columns of a matrix B. To convert from new-basis coordinates back to the standard basis, multiply B times the new coordinates. To convert from standard to the new basis, multiply by the inverse matrix."
          }
        },
        {
          "@type": "Question",
          "name": "What does the determinant of the change-of-basis matrix tell you?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The determinant measures area scaling and orientation. A determinant of zero means the basis vectors are linearly dependent and do not form a valid basis. A negative determinant indicates the new basis reverses orientation compared to the standard basis."
          }
        },
        {
          "@type": "Question",
          "name": "When is a basis orthonormal versus oblique?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A basis is orthonormal when its vectors are perpendicular and have unit length. It is orthogonal when perpendicular but not unit length, and oblique when the angle between the vectors is not 90 degrees. For orthonormal bases, the inverse equals the transpose."
          }
        },
        {
          "@type": "Question",
          "name": "Why does the vector v stay in place when the basis changes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The vector v is a geometric object independent of any coordinate system. Only its numerical representation depends on the chosen basis. When you change basis vectors, v remains at the same point in space, but its coordinates relative to the new basis are different numbers."
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
        title: "Change of Basis 2D Visualizer | Learn Math Class",
        description: "Drag basis vectors to define a new coordinate system and watch vector v coordinates transform. Visualize the change-of-basis matrix B and its inverse.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/change-basis-2d",
        name: "Change of Basis 2D Visualizer",
        hubDescription: "Drag basis vectors b1 and b2 to define a new coordinate system, then watch how vector v coordinates shift between the standard basis and your custom basis. Live computation of the change-of-basis matrix B, its inverse, and determinant, with ten preset scenarios covering orthonormal, oblique, singular, and orientation-reversed bases.",
        category: "Linear Algebra",
        subCategory: "Vector Spaces"
      },
        
       }
    }
   }

export default function ChangeBasis2DPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Change of Basis</h1>
   <br/>
   <div style={{transform:'scale(0.9)'}}>
   <ChangeBasis/>
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