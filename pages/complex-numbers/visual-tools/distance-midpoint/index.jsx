// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import ComplexDistanceMidpoint from '../../../../app/components/calculators/complex-numbers/ComplexDistanceMidpoint'


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
//         url: "/complex-numbers/visual-tools/distance-midpoint",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Distance and Midpoint between Complex Numbers</h1>
//    <br/>
//    <ComplexDistanceMidpoint/>
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
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import ComplexDistanceMidpoint from '../../../../app/components/calculators/complex-numbers/ComplexDistanceMidpoint'
import SiblingsNav from '../../../../app/components/SiblingsNav'

export async function getStaticProps(){

  const keyWords = [
    "distance between complex numbers",
    "midpoint of complex numbers",
    "complex number distance formula",
    "complex number midpoint calculator",
    "distance complex plane",
    "modulus of z1 minus z2",
    "complex distance calculator",
    "midpoint complex plane",
    "euclidean distance complex numbers",
    "complex number distance visualizer",
    "Pythagorean theorem complex plane",
    "complex midpoint formula",
    "interactive complex distance",
    "distance and midpoint tool",
    "complex plane geometry"
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started — Drag Two Points`,
      content:`Two draggable points sit on the complex plane: $z_1$ (navy) and $z_2$ (orange). Grab either one and move it to see the orange distance segment, the purple midpoint, and both step-by-step panels update in real time.

Type precise values into the input fields on the right — each point has separate real and imaginary inputs accepting $-5$ to $5$ in steps of $0.1$. Five presets are available: a general pair $(-2+i)$ & $(3+3i)$, an origin-based pair $0$ & $(3+4i)$, a symmetric pair, a vertical pair, and a horizontal pair. Click **Random** to generate two arbitrary points.

The **Show circle** checkbox toggles a dashed blue circle centered at $z_1$ that passes through $z_2$. Every point on this circle is the same distance from $z_1$ as $z_2$ is. Toggle it off for a cleaner view of the triangle and midpoint.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`The Right Triangle and Distance Segment`,
      content:`When both the horizontal and vertical differences between the two points are nonzero, a right triangle appears on the plane. The green horizontal leg shows $\\Delta a = |a_1 - a_2|$ (the difference in real parts), the red vertical leg shows $\\Delta b = |b_1 - b_2|$ (the difference in imaginary parts), and the orange segment connecting $z_1$ to $z_2$ is the hypotenuse — the distance.

A small right-angle marker appears at the corner where the two legs meet. The triangle's orientation depends on the relative positions of $z_1$ and $z_2$: the corner can appear in any of four positions depending on which point is above, below, left, or right of the other.

Click the default preset $(-2+i)$ & $(3+3i)$ to see a triangle with $\\Delta a = 5$ and $\\Delta b = 2$, giving distance $\\sqrt{25 + 4} = \\sqrt{29} \\approx 5.39$. The triangle makes the Pythagorean relationship visible — the distance is always the hypotenuse.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Vertical and Horizontal Degenerate Cases`,
      content:`Click **Vertical** to load $z_1 = 1 + 4i$ and $z_2 = 1 - 2i$. Both points share the same real part ($a = 1$), so $\\Delta a = 0$. The right triangle collapses — the green horizontal leg vanishes and only the red vertical segment remains. The distance simplifies to $|b_1 - b_2| = |4 - (-2)| = 6$.

Click **Horizontal** to load $z_1 = -4$ and $z_2 = 4$. Both are real numbers with the same imaginary part ($b = 0$), so $\\Delta b = 0$. The red vertical leg disappears and only the green horizontal segment remains. The distance is $|a_1 - a_2| = |-4 - 4| = 8$.

In both cases the right-angle marker also disappears because there is no corner — just a single straight line. These are the simplest distance illustrations: purely horizontal or purely vertical segments with the distance equal to the absolute difference along one axis.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Symmetric Points and Midpoint at the Origin`,
      content:`Click **Symmetric** to load $z_1 = -3 - 2i$ and $z_2 = 3 + 2i$. These points are symmetric about the origin — each is the negation of the other. The midpoint formula gives $M = (z_1 + z_2)/2 = (0 + 0i)/2 = 0$.

The purple midpoint dot sits exactly at the origin. The distance segment passes through the center of the plane, and the right triangle straddles both quadrants with legs spanning the full width and height.

This is the only preset where the midpoint coincides with the origin. It produces a distinctive SVG: the midpoint overlaps with the origin marker, and the segment is perfectly centered. The distance is $\\sqrt{6^2 + 4^2} = \\sqrt{52} \\approx 7.21$.

You can create other symmetric configurations by setting $z_2 = -z_1$ for any $z_1$. The midpoint will always land at the origin because the two points cancel when averaged.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Distance from the Origin — Modulus as a Special Case`,
      content:`Click the preset $0$ & $(3+4i)$. When one point is the origin ($z_2 = 0$), the distance formula $|z_1 - z_2| = |z_1 - 0| = |z_1|$ reduces to the modulus of $z_1$.

Here $|3 + 4i| = \\sqrt{9 + 16} = 5$ — the famous 3-4-5 right triangle. The green horizontal leg is $3$, the red vertical leg is $4$, and the orange hypotenuse is $5$. The right triangle sits in Quadrant I with one vertex at the origin.

The midpoint is $M = (0 + 3 + 4i)/2 = 1.5 + 2i$, which lies halfway along the segment from the origin to $z_1$.

This demonstrates that distance between complex numbers is a generalization of the modulus. The modulus $|z|$ measures distance from the origin; $|z_1 - z_2|$ measures distance between any two points. Every modulus calculation is a distance calculation with $z_2 = 0$.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`The Dashed Circle and Locus Interpretation`,
      content:`When the **Show circle** checkbox is enabled (the default), a dashed blue circle appears centered at $z_1$ with radius equal to the distance $|z_1 - z_2|$. The circle passes exactly through $z_2$.

This circle represents the **locus** of all complex numbers $z$ satisfying $|z - z_1| = |z_1 - z_2|$ — every point on the circle is the same distance from $z_1$ as $z_2$ is. Dragging $z_2$ farther away makes the circle grow; dragging it closer makes the circle shrink.

Toggle the circle off to get a cleaner view focused on the triangle and midpoint alone. Toggle it back on to study the circle equation $|z - z_0| = r$, which describes a circle of radius $r$ centered at $z_0$ in the complex plane.

Try the **Horizontal** preset with the circle on: the circle is centered at $(-4, 0)$ with radius $8$, extending far across the plane. Then try the **Vertical** preset: the circle is centered at $(1, 4)$ with radius $6$, sitting mostly above the real axis.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Reading the Step-by-Step Panels`,
      content:`The right panel contains two step-by-step breakdowns that update dynamically.

The **Distance Step-by-Step** panel walks through the full calculation:

First it computes $z_1 - z_2$ to find the difference vector. Then it applies the Pythagorean formula $|z_1 - z_2| = \\sqrt{\\Delta a^2 + \\Delta b^2}$, substituting the actual component differences, squaring them, adding, and taking the square root. The final distance appears highlighted in orange.

The **Midpoint Step-by-Step** panel shows three lines: the formula $M = (z_1 + z_2)/2$, the sum $z_1 + z_2$, and the result after dividing by $2$. The final midpoint appears in purple.

Both panels make the component-wise nature of these operations explicit — distance uses differences and squares, while midpoint uses sums and halving. Each updates with every drag or keystroke.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`The Distance Formula for Complex Numbers`,
      content:`The distance between two complex numbers $z_1 = a_1 + b_1 i$ and $z_2 = a_2 + b_2 i$ is the modulus of their difference:

$$|z_1 - z_2| = \\sqrt{(a_1 - a_2)^2 + (b_1 - b_2)^2}$$

This is identical to the Euclidean distance formula from coordinate geometry, treating the complex plane as the $xy$-plane with the real axis as $x$ and the imaginary axis as $y$.

The formula comes from the **Pythagorean theorem** applied to the right triangle formed by the horizontal difference $\\Delta a = a_1 - a_2$ and the vertical difference $\\Delta b = b_1 - b_2$. The distance is the hypotenuse.

In complex notation, $|z_1 - z_2|$ can also be written as $\\sqrt{(z_1 - z_2) \\cdot \\overline{(z_1 - z_2)}}$, since for any complex number $w$, $|w| = \\sqrt{w \\cdot \\bar{w}}$. This connects the distance formula to the **conjugate** and modulus properties of complex numbers.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`The Midpoint Formula for Complex Numbers`,
      content:`The midpoint of the segment connecting $z_1$ and $z_2$ is their arithmetic average:

$$M = \\frac{z_1 + z_2}{2} = \\frac{a_1 + a_2}{2} + \\frac{b_1 + b_2}{2}i$$

Average the real parts to get the real coordinate of the midpoint. Average the imaginary parts to get the imaginary coordinate. The result is the unique point equidistant from $z_1$ and $z_2$ along the segment connecting them.

The midpoint satisfies two key properties: $|M - z_1| = |M - z_2|$ (equal distance from both endpoints), and $M$ lies on the straight line from $z_1$ to $z_2$.

This generalizes naturally. The point that divides the segment in ratio $t : (1-t)$ is $z_1 + t(z_2 - z_1) = (1-t)z_1 + tz_2$. Setting $t = 1/2$ gives the midpoint. Setting $t = 1/3$ gives the point one-third of the way from $z_1$ to $z_2$.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`Coincident Points — Distance Zero`,
      content:`Drag both points to the same position — for example, set both to $2 + i$. The distance becomes $0$ because $z_1 - z_2 = 0$. The right triangle vanishes entirely (both legs have zero length), the orange distance segment shrinks to nothing, and the midpoint coincides with both points.

The dashed circle also collapses to a single point (radius $0$). The step-by-step panel confirms: $\\sqrt{0^2 + 0^2} = 0$.

This is the only configuration where $|z_1 - z_2| = 0$. By definition, $|w| = 0$ if and only if $w = 0$, so $|z_1 - z_2| = 0$ if and only if $z_1 = z_2$. This property is one of the axioms of a metric — the distance between two points is zero precisely when the points coincide.`,
      before:``,
      after:``,
      link:'',
    },

//     obj11:{
//       title:`Related Concepts and Tools`,
//       content:`Distance and midpoint are foundational operations in complex plane geometry. Explore these related pages.

// **Complex Addition & Subtraction Visualizer** — the distance $|z_1 - z_2|$ is the modulus of the subtraction result. The midpoint $(z_1 + z_2)/2$ is half the addition result. This tool shows both operations geometrically.

// **Polar-Rectangular Converter** — convert between $a + bi$ and $re^{i\\theta}$. The modulus $r = |z|$ is the distance from the origin, a special case of the general distance formula.

// **Complex Number Explorer** — a general-purpose tool for plotting, operating on, and exploring complex numbers on the plane.

// **Euler's Formula Explorer** — visualize how $e^{i\\theta}$ traces the unit circle, connecting distance and angle concepts.

// **Complex Numbers** — foundational theory covering the imaginary unit, rectangular form, modulus, and algebraic operations.

// **Complex Conjugate Visualizer** — conjugates reflect across the real axis. The distance between $z$ and $\\bar{z}$ is $2|b|$ — twice the imaginary part.`,
//       before:``,
//       after:``,
//       link:'',
//     },

obj11:{
  title:`Related Concepts and Tools`,
  content:`Distance and midpoint sit at the intersection of complex arithmetic and Euclidean geometry — the Argand plane is just the coordinate plane relabeled, so every geometric idea carries over directly.

The most immediate connection is to [Addition & Subtraction](!/complex-numbers/visual-tools/addition-subtraction). The distance $|z_1 - z_2|$ is literally the modulus of the difference vector, so subtraction and distance are the same operation viewed differently — one algebraic, one geometric.

The [Complex Conjugate Explorer](!/complex-numbers/visual-tools/complex-conjugate) is worth visiting alongside this tool. Conjugate pairs $z$ and $\\bar{z}$ are always symmetric about the real axis, which means their midpoint is always real and their distance is always $2|\\text{Im}(z)|$. Load a conjugate pair here and both facts become immediately visible.

If you want to go deeper on the circle equation $|z - z_1| = r$ that the dashed circle here represents, the [Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular) shows how modulus and distance connect to polar form — the $r$ in $re^{i\\theta}$ is exactly the distance from the origin, which is the special case $z_2 = 0$ of what this tool computes.

Finally, the [Complex Number Explorer](!/complex-numbers/visual-tools/complex-explorer) is a good starting point if any of the ideas here feel unfamiliar — it focuses on a single point and builds up modulus, argument, and the right triangle from scratch before you work with two points.`,
  before:``,
  after:``,
  link:'',
},

  }


  const introContent = {
  id: "intro",
  title: "",
  content: ``
}

  const faqQuestions = {
    obj1: {
      question: "How do you find the distance between two complex numbers?",
      answer: "Use the formula |z₁ − z₂| = √((a₁−a₂)² + (b₁−b₂)²), where a and b are the real and imaginary parts. This is the Euclidean distance formula applied to the complex plane, equivalent to the Pythagorean theorem on the right triangle formed by the component differences."
    },
    obj2: {
      question: "How do you find the midpoint of two complex numbers?",
      answer: "The midpoint is M = (z₁ + z₂)/2. Average the real parts and average the imaginary parts separately. The result is the unique point equidistant from z₁ and z₂ on the segment connecting them."
    },
    obj3: {
      question: "How is complex distance related to the modulus?",
      answer: "The modulus |z| is the distance from z to the origin. The general distance |z₁ − z₂| is the modulus of the difference. When z₂ = 0, the distance formula reduces to the modulus: |z₁ − 0| = |z₁|."
    },
    obj4: {
      question: "What does the circle |z − z₀| = r represent?",
      answer: "It is the set of all complex numbers z whose distance from z₀ equals r. This is a circle of radius r centered at z₀ in the complex plane. The visualizer shows this as a dashed circle centered at z₁ passing through z₂."
    },
    obj5: {
      question: "When is the distance between two complex numbers zero?",
      answer: "The distance |z₁ − z₂| = 0 only when z₁ = z₂. This is a fundamental property of any metric: the distance between two points is zero if and only if the points are identical."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Distance & Midpoint Calculator",
      "description": "Interactive tool for computing the distance and midpoint between two complex numbers. Drag points, see the Pythagorean right triangle, dashed distance circle, and step-by-step formulas.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/distance-midpoint",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two draggable complex number points with independent input fields",
        "Color-coded right triangle showing horizontal and vertical component differences",
        "Orange distance segment with live Pythagorean calculation",
        "Purple midpoint marker with step-by-step averaging formula",
        "Toggleable dashed circle centered at z₁ passing through z₂",
        "Five presets including vertical, horizontal, and symmetric configurations"
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
      "keywords": keyWords.join(", ")
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
          "name": "Complex Numbers",
          "item": "https://www.learnmathclass.com/complex-numbers"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Distance & Midpoint Calculator",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/distance-midpoint"
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
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
          seoData: {
        title: "Complex Distance & Midpoint | Learn Math Class",
        description: "Calculate distance and midpoint between complex numbers visually. Drag points, see the Pythagorean triangle, distance circle, and step-by-step formulas in real time.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/distance-midpoint",
         name: "Complex Distance & Midpoint Calculator"
      },
        
       }
    }
   }

export default function DistanceMidpointPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
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
      __html: JSON.stringify(schemas.webApplication)
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Distance and Midpoint between Complex Numbers</h1>
   <br/>
   <SiblingsNav>
   <ComplexDistanceMidpoint/>
   </SiblingsNav>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   />
   <br/>
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