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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Distance and Midpoint between Complex Numbers</h1>
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
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import ComplexDistanceMidpoint from '../../../../app/components/calculators/complex-numbers/ComplexDistanceMidpoint'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import distanceMidpointDiagrams from '../../../../app/components/calculators/complex-numbers/distanceMidpointDiagrams'

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

Type precise values into the input fields on the right — each point has separate real and imaginary inputs accepting $-5$ to $5$ in steps of $0.1$. Five presets are available: a [general pair](!#the-right-triangle-and-distance-segment) $(-2+i)$ & $(3+3i)$, an [origin-based pair](!#distance-from-the-origin-modulus-as-a-special-case) $0$ & $(3+4i)$, a [symmetric pair](!#symmetric-points-and-midpoint-at-the-origin), a [vertical pair](!#the-vertical-pair), and a [horizontal pair](!#the-horizontal-pair). Click **Random** to generate two arbitrary points.

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
      after:`In the frozen frame the whole apparatus is on duty at once: both legs labeled, the right-angle marker tucked at the corner, the rotated $d = 5.39$ riding the hypotenuse, the purple midpoint at $0.5 + 2i$, and the dashed [locus circle](!#the-dashed-circle-and-locus-interpretation) sweeping through $z_2$.

Note the two faint vectors from the origin — the tool keeps them deliberately dim, because for distance and midpoint the origin does not matter. The whole construction is translation-invariant: slide both points by the same amount and $d$, the triangle, and $M$'s position between the points all come along unchanged. That independence from the origin is exactly what separates distance from [the modulus special case](!#distance-from-the-origin-modulus-as-a-special-case).`,
      link:'',
    },

    obj3:{
      title:`Vertical and Horizontal Degenerate Cases`,
      content:`Click **Vertical** to load $z_1 = 1 + 4i$ and $z_2 = 1 - 2i$. Both points share the same real part ($a = 1$), so $\\Delta a = 0$. The right triangle collapses — the green horizontal leg vanishes and only the red vertical segment remains. The distance simplifies to $|b_1 - b_2| = |4 - (-2)| = 6$ — see [the vertical pair](!#the-vertical-pair).

Click **Horizontal** to load $z_1 = -4$ and $z_2 = 4$. Both are real numbers with the same imaginary part ($b = 0$), so $\\Delta b = 0$. The red vertical leg disappears and only the green horizontal segment remains. The distance is $|a_1 - a_2| = |-4 - 4| = 8$ — see [the horizontal pair](!#the-horizontal-pair).

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
      after:`The frozen frame shows the coincidence directly: the purple $M$ swallows the gray origin dot, and the two faint origin vectors lie exactly along the orange distance segment — because for opposite points, the segment between them **is** the line through the origin.

Algebraically this preset freezes the statement $z + (-z) = 0$: additive inverses average to zero. It is the midpoint counterpart of what [the coincident state](!#coincident-points-distance-zero) does for distance — one collapses the average, the other collapses the difference.`,
      link:'',
    },

    obj5:{
      title:`Distance from the Origin — Modulus as a Special Case`,
      content:`Click the preset $0$ & $(3+4i)$. When one point is the origin ($z_2 = 0$), the distance formula $|z_1 - z_2| = |z_1 - 0| = |z_1|$ reduces to the modulus of $z_1$.

Here $|3 + 4i| = \\sqrt{9 + 16} = 5$ — the famous 3-4-5 right triangle. The green horizontal leg is $3$, the red vertical leg is $4$, and the orange hypotenuse is $5$. The right triangle sits in Quadrant I with one vertex at the origin.

The midpoint is $M = (0 + 3 + 4i)/2 = 1.5 + 2i$, which lies halfway along the segment from the origin to $z_1$.

This demonstrates that distance between complex numbers is a generalization of the modulus. The modulus $|z|$ measures distance from the origin; $|z_1 - z_2|$ measures distance between any two points. Every modulus calculation is a distance calculation with $z_2 = 0$.`,
      before:``,
      after:`In the frozen frame, $z_1$ sits directly on the origin — its navy point covers the gray origin dot, and the faint $z_1$ vector has nothing to draw. What remains is the picture every modulus definition uses: the 3-4-5 [right triangle](!#the-right-triangle-and-distance-segment) with one vertex pinned at zero.

The dashed locus circle in this state is special too: centered on the origin with radius 5, it is precisely the set of complex numbers with modulus 5 — the circle $|z| = 5$. Every other preset draws the general circle $|z - z_1| = r$; this one draws the textbook one.`,
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
      after:`The frozen frame is the tool with everything switched off by mathematics rather than by settings: no triangle, no circle, no distance label — just two stacked markers and the midpoint hiding beneath them at the same spot. Both step-by-step panels still run; they simply compute zeros all the way down.

Degenerate as it looks, this state carries real content: it is the **definiteness** half of what makes $|z_1 - z_2|$ a genuine distance. Zero output happens for exactly one input configuration — compare [the symmetric preset](!#symmetric-points-and-midpoint-at-the-origin), where it is the midpoint, not the distance, that collapses to zero.`,
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

    obj12:{
      title:`The Vertical Pair`,
      content:`The **Vertical** preset stacks the two points on one vertical line: $z_1 = 1 + 4i$ directly above $z_2 = 1 - 2i$, sharing the real part $a = 1$.`,
      before:``,
      after:`With $\\Delta a = 0$ the Pythagorean machinery goes quiet: no triangle, no corner marker, and the distance formula collapses to a plain subtraction of imaginary parts, $|4 - (-2)| = 6$. One axis carries all the information.

The midpoint keeps the shared real part and averages the heights: $M = 1 + i$. Any pair with equal real parts behaves this way — vertical segments are where complex distance quietly turns back into the number-line distance of the imaginary components. The mirror case is [the horizontal pair](!#the-horizontal-pair); both live under the [degenerate cases](!#vertical-and-horizontal-degenerate-cases) umbrella.`,
      link:'',
    },

    obj13:{
      title:`The Horizontal Pair`,
      content:`The **Horizontal** preset lays both points on the real axis: $z_1 = -4$ and $z_2 = 4$, two ordinary real numbers eight units apart.`,
      before:``,
      after:`This frame is complex distance at its most familiar: $|{-4} - 4| = 8$ is exactly the number-line distance between $-4$ and $4$. The orange segment lies flat along the axis, and the red $\\Delta b$ leg has nothing to measure.

Two bonuses hide in the frozen picture. The midpoint of $-4$ and $4$ is $0$, so the purple $M$ lands on the origin — this preset is **also** a symmetric pair, kin to [the symmetric preset](!#symmetric-points-and-midpoint-at-the-origin). And the dashed [locus circle](!#the-dashed-circle-and-locus-interpretation), centered at $-4$ with radius $8$, is the largest circle any preset draws — it exits the window on three sides.`,
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


  // Framed illustration units for the per-state sections (Line 1 v5): frozen
  // plane + attached picture-reading panel, one frame, no link (own page).
  const stateUnits = {
    general: demoUnitFrame({ svg: distanceMidpointDiagrams.general, caption: '(&#8722;2+i) &amp; (3+3i), frozen',
      text: 'The full apparatus: legs &#916;a = 5 and &#916;b = 2, the rotated d = 5.39 riding the hypotenuse, the purple midpoint at 0.5 + 2i, and the dashed locus circle sweeping through z&#x2082;.' }),
    originPair: demoUnitFrame({ svg: distanceMidpointDiagrams.originPair, caption: '0 &amp; (3+4i), frozen',
      text: 'z&#x2081; pinned to the origin turns distance into modulus: the 3-4-5 triangle of |3+4i| = 5, with the locus circle becoming the textbook circle |z| = 5.' }),
    symmetric: demoUnitFrame({ svg: distanceMidpointDiagrams.symmetric, caption: '(&#8722;3&#8722;2i) &amp; (3+2i), frozen',
      text: 'Opposite points: the purple M swallows the origin dot, and the faint origin vectors lie exactly along the distance segment — additive inverses averaging to zero.' }),
    vertical: demoUnitFrame({ svg: distanceMidpointDiagrams.vertical, caption: '(1+4i) &amp; (1&#8722;2i), frozen',
      text: 'Equal real parts silence the triangle: a single vertical drop of 6 units, with the midpoint keeping a = 1 and averaging the heights to 1 + i.' }),
    horizontal: demoUnitFrame({ svg: distanceMidpointDiagrams.horizontal, caption: '&#8722;4 &amp; 4, frozen',
      text: 'Number-line distance on the complex plane: d = 8 flat along the real axis, midpoint at the origin, and the largest locus circle any preset draws.' }),
    coincident: demoUnitFrame({ svg: distanceMidpointDiagrams.coincident, caption: 'z&#x2081; = z&#x2082; = 2 + i, frozen',
      text: 'Distance zero: no triangle, no circle, no d label — two stacked markers with the midpoint hiding beneath them. The only input that produces output zero.' }),
  };

  // Per-state additions for the tool's Key Ideas panel, keyed by the preset
  // pair the current points match (see ComplexDistanceMidpoint).
  const explanations = {
    general: 'Everything at once: legs 5 and 2, hypotenuse √29, midpoint at 0.5 + 2i. [Learn more about the triangle](!#the-right-triangle-and-distance-segment) · [Getting started](!#getting-started-drag-two-points)',
    originPair: 'One point on the origin turns distance into plain modulus: the 3-4-5 triangle of |3+4i| = 5. [Learn more about modulus as distance](!#distance-from-the-origin-modulus-as-a-special-case) · [Getting started](!#getting-started-drag-two-points)',
    symmetric: 'Opposite points average to zero: the midpoint lands exactly on the origin. [Learn more about symmetric pairs](!#symmetric-points-and-midpoint-at-the-origin) · [Getting started](!#getting-started-drag-two-points)',
    vertical: 'Equal real parts collapse the triangle: distance is just the imaginary-part difference, 6. [Learn more about the vertical pair](!#the-vertical-pair) · [All degenerate cases](!#vertical-and-horizontal-degenerate-cases)',
    horizontal: 'Two real numbers, number-line distance 8 — and the midpoint lands on the origin. [Learn more about the horizontal pair](!#the-horizontal-pair) · [All degenerate cases](!#vertical-and-horizontal-degenerate-cases)',
    coincident: 'Distance zero happens for exactly one configuration: z₁ = z₂. [Learn more about coincident points](!#coincident-points-distance-zero) · [Getting started](!#getting-started-drag-two-points)',
  };

   return {
      props:{
         sectionsContent,
         introContent,
         faqQuestions,
         schemas,
         explanations,
         stateUnits,
          seoData: {
        title: "Complex Distance & Midpoint | Learn Math Class",
        description: "Calculate distance and midpoint between complex numbers visually. Drag points, see the Pythagorean triangle, distance circle, and step-by-step formulas in real time.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/distance-midpoint",
        hubDescription: "Compute and visualize the distance |z₁ − z₂| and midpoint between two complex numbers. Drag two points to see the right triangle, step-by-step calculations, and a circle of radius equal to the distance centered at z₁.",
        category: "Modulus & Geometry",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="54" x2="74" y2="54" stroke="#B5D4F4" stroke-width="0.9"/><line x1="30" y1="12" x2="30" y2="70" stroke="#B5D4F4" stroke-width="0.9"/><path d="M 20 24 L 66 24 L 66 44" fill="none" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="2.5,2"/><line x1="20" y1="24" x2="66" y2="44" stroke="#FAC775" stroke-width="2.1"/><circle cx="20" cy="24" r="2.9" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><circle cx="66" cy="44" r="2.9" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><circle cx="43" cy="34" r="3.8" fill="#97C459" stroke="#27500A" stroke-width="1.3"/><text x="40" y="70" font-family="Georgia,serif" font-size="7.5" fill="#FAC775" text-anchor="middle" font-style="italic">|z&#8321; &#8722; z&#8322;|</text></svg>`,
         name: "Complex Distance & Midpoint Calculator"
      },
        
       }
    }
   }

export default function DistanceMidpointPage({seoData, sectionsContent, introContent, faqQuestions, schemas, explanations, stateUnits}) {

    
  const genericSections=[
    {
        id:'getting-started-drag-two-points',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'the-right-triangle-and-distance-segment',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div key='u-general' dangerouslySetInnerHTML={{ __html: stateUnits.general }} />,
          sectionsContent.obj2.after,
        ]
    },
    {
        id:'vertical-and-horizontal-degenerate-cases',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'the-vertical-pair',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
          <div key='u-vertical' dangerouslySetInnerHTML={{ __html: stateUnits.vertical }} />,
          sectionsContent.obj12.after,
        ]
    },
    {
        id:'the-horizontal-pair',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
          <div key='u-horizontal' dangerouslySetInnerHTML={{ __html: stateUnits.horizontal }} />,
          sectionsContent.obj13.after,
        ]
    },
    {
        id:'symmetric-points-and-midpoint-at-the-origin',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
          <div key='u-symmetric' dangerouslySetInnerHTML={{ __html: stateUnits.symmetric }} />,
          sectionsContent.obj4.after,
        ]
    },
    {
        id:'distance-from-the-origin-modulus-as-a-special-case',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key='u-originPair' dangerouslySetInnerHTML={{ __html: stateUnits.originPair }} />,
          sectionsContent.obj5.after,
        ]
    },
    {
        id:'the-dashed-circle-and-locus-interpretation',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'reading-the-step-by-step-panels',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'the-distance-formula-for-complex-numbers',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
    {
        id:'the-midpoint-formula-for-complex-numbers',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'coincident-points-distance-zero',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
          <div key='u-coincident' dangerouslySetInnerHTML={{ __html: stateUnits.coincident }} />,
          sectionsContent.obj10.after,
        ]
    },
    {
        id:'related-concepts-and-tools',
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Distance and Midpoint between Complex Numbers</h1>
   <br/>
   <SiblingsNav maxWidth='100%'>
   <ComplexDistanceMidpoint explanations={explanations}/>
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