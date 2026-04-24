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
// import PolarRectangularConverter from '../../../../app/components/calculators/complex-numbers/PolarRectangularConverter'


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
//         title: "Polar-Rectangular Converter | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/complex-numbers/visual-tools/polar-rectangular",
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Polar-Rectangular Converter</h1>
//    <br/>
//    <PolarRectangularConverter/>
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
import PolarRectangularConverter from '../../../../app/components/calculators/complex-numbers/PolarRectangularConverter'
import SiblingsNav from '../../../../app/components/SiblingsNav'

export async function getStaticProps(){

  const keyWords = [
    "polar to rectangular converter",
    "rectangular to polar converter",
    "complex number converter",
    "polar form complex numbers",
    "rectangular form complex numbers",
    "a+bi to polar form",
    "modulus and argument calculator",
    "complex number polar rectangular",
    "convert complex number forms",
    "complex plane converter",
    "r theta to a+bi",
    "complex number modulus calculator",
    "argument of complex number",
    "polar rectangular interactive",
    "complex number form conversion"
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started — Drag, Type, or Pick a Preset`,
      content:`There are three ways to set a complex number in this converter. Drag the blue point anywhere on the complex plane and both the rectangular and polar panels update instantly. Type values directly into the $a$ and $b$ fields (rectangular) or the $r$ and $\\theta$ fields (polar) — the other form recalculates automatically. Or click one of six preset buttons below the plane: $3 + 2i$, $-4 + 3i$, $5i$, $-6$, $5 - 5i$, and $-3 - 4i$.

Each preset places the point in a different region of the complex plane, producing a distinct triangle configuration. The **Random** button generates an arbitrary point within the $\\pm 10$ range. All inputs are clamped to $\\pm 10$ — if you type a value outside this range, a warning message appears briefly and the value snaps to the nearest limit.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Points in All Four Quadrants`,
      content:`Each quadrant of the complex plane produces a different triangle orientation and a different sign combination for the rectangular components.

**Quadrant I** ($a > 0$, $b > 0$): click $3 + 2i$. The green horizontal leg points right, the red vertical leg points up, and the angle $\\theta$ is positive between $0°$ and $90°$. Both the real and imaginary parts are positive.

**Quadrant II** ($a < 0$, $b > 0$): click $-4 + 3i$. The green leg extends left of the imaginary axis while the red leg still points up. The angle is between $90°$ and $180°$.

**Quadrant III** ($a < 0$, $b < 0$): click $-3 - 4i$. Both legs point in negative directions — the triangle sits below and to the left of the origin. The angle is negative, between $-90°$ and $-180°$.

**Quadrant IV** ($a > 0$, $b < 0$): click $5 - 5i$. The green leg points right while the red leg drops below the real axis. The angle is negative, between $0°$ and $-90°$.

Each configuration is a unique visual snapshot showing how the signs of $a$ and $b$ determine the quadrant and how $\\theta$ changes accordingly.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Degenerate Cases — Points on the Axes`,
      content:`When the point lies exactly on an axis, one component is zero and the triangle collapses into a line segment.

Click $5i$ to place the point on the positive imaginary axis. Here $a = 0$ and $b = 5$, so the green horizontal leg vanishes entirely. Only the red vertical segment remains. The modulus equals the imaginary part ($r = 5$) and the angle is exactly $90°$. There is no right-angle marker because there is no triangle — just a vertical line from the origin.

Click $-6$ to place the point on the negative real axis. Now $b = 0$, the red vertical leg disappears, and only the green horizontal segment remains. The modulus is $6$ and the angle is $180°$.

These axis-aligned states also demonstrate how the atan2 function handles special cases: $\\text{atan2}(0, -6) = 180°$ and $\\text{atan2}(5, 0) = 90°$. Dragging the point along an axis lets you watch the triangle appear and disappear as the perpendicular component passes through zero.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Equal-Component States and Special Angles`,
      content:`Click $5 - 5i$ to see a point where $|a| = |b|$. The right triangle becomes isosceles — both legs have the same length, and the angle is exactly $-45°$ (or equivalently $-\\frac{\\pi}{4}$ radians). The modulus is $r = \\sqrt{25 + 25} = \\sqrt{50} \\approx 7.07$.

This is one of the cleanest illustrations of a $45°$ reference angle. Try typing $a = 5$, $b = 5$ to get the mirror image in Quadrant I at $\\theta = 45°$.

Other special angles are easy to produce. Setting $a = 5$, $b = 5\\sqrt{3} \\approx 8.66$ gives $\\theta = 60°$. Setting $a = 5\\sqrt{3} \\approx 8.66$, $b = 5$ gives $\\theta = 30°$. Each of these reference-angle triangles has a distinctive shape — tall and narrow for $60°$, wide and flat for $30°$, and perfectly balanced for $45°$.

The dashed modulus circle also changes radius with each configuration, giving a visual sense of how the same modulus can map to different $a$ and $b$ combinations at different angles.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Using the Rectangular Form Panel`,
      content:`The **Rectangular Form** section on the right shows the formula $z = a + bi$ and provides two input fields for $a$ (real part) and $b$ (imaginary part). Both accept values from $-10$ to $10$ in steps of $0.1$.

Type a value into either field and the entire visualization updates: the point moves on the plane, the triangle redraws, and the polar panel recalculates $r$ and $\\theta$. Below the inputs, the result line displays the complex number in standard notation — for example, $3 + 2i$ or $-4 - 3i$.

The rectangular form is most natural for addition and subtraction. If you want to add two complex numbers, you simply add their real parts and their imaginary parts separately. This panel makes it easy to set precise integer or decimal coordinates and see how they translate into polar terms.

If you enter a value outside the $\\pm 10$ range, a red warning message appears: "Values are limited to ±10. Input was clamped." The message fades after a few seconds and the value is adjusted to the nearest boundary.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`Using the Polar Form Panel`,
      content:`The **Polar Form** section displays $z = re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$ and provides input fields for $r$ (modulus, from $0$ to about $14.14$) and $\\theta$ (argument, in degrees from $-180°$ to $180°$).

Type a new $r$ value and the point moves outward or inward along the current angle direction. The dashed circle on the plane resizes to match. Type a new $\\theta$ and the point rotates around the origin at the current distance. Both rectangular inputs update automatically.

The result line shows $r$ and $\\theta$ in both degrees and radians. When the angle matches a well-known fraction of $\\pi$ — such as $30°$, $45°$, $60°$, $90°$, or $180°$ — the radian display uses the symbolic form (e.g., $\\frac{\\pi}{4}$) instead of a decimal approximation.

The polar form is most natural for multiplication, division, and powers. Multiplying two complex numbers in polar form means multiplying their moduli and adding their arguments. This panel lets you experiment with different $r$ and $\\theta$ combinations and see the corresponding rectangular result.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Live Conversion Formulas`,
      content:`The **Conversion Formulas** panel shows both directions of conversion with the current values substituted in, step by step.

**Rectangular → Polar** displays two lines:

$r = \\sqrt{a^2 + b^2}$ — the Pythagorean theorem applied to the right triangle. The panel substitutes the current $a$ and $b$, computes $a^2 + b^2$, and shows the final $r$ value.

$\\theta = \\text{atan2}(b, a)$ — the two-argument arctangent that correctly handles all four quadrants. The result appears in degrees.

**Polar → Rectangular** displays two lines:

$a = r\\cos\\theta$ — the horizontal projection. The panel substitutes the current $r$ and $\\theta$ and shows the computed $a$.

$b = r\\sin\\theta$ — the vertical projection. Same substitution, showing the computed $b$.

As you drag the point or change any input, every number in this panel updates in real time. This makes it a live worked example — you can see the formulas at work for any configuration, not just textbook values.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`Rectangular to Polar Conversion`,
      content:`Converting from rectangular form $z = a + bi$ to polar form $z = re^{i\\theta}$ requires two calculations.

The **modulus** $r$ is the distance from the origin to the point $(a, b)$:

$$r = |z| = \\sqrt{a^2 + b^2}$$

The **argument** $\\theta$ is the angle measured counterclockwise from the positive real axis:

$$\\theta = \\text{atan2}(b, a)$$

The atan2 function is essential because the ordinary arctangent $\\tan^{-1}(b/a)$ only returns values in $(-90°, 90°)$ and cannot distinguish between Quadrants I and III or between Quadrants II and IV. The atan2 function uses the signs of both $a$ and $b$ to place $\\theta$ in the correct quadrant, returning values in $(-180°, 180°]$.

For example, $z = -3 - 4i$ gives $r = \\sqrt{9 + 16} = 5$ and $\\theta = \\text{atan2}(-4, -3) \\approx -126.87°$. The negative angle indicates the point is below the real axis in Quadrant III.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`Polar to Rectangular Conversion`,
      content:`Converting from polar form $z = re^{i\\theta}$ back to rectangular form $z = a + bi$ uses basic trigonometry.

$$a = r\\cos\\theta \\qquad b = r\\sin\\theta$$

The cosine projection gives the real part (horizontal component) and the sine projection gives the imaginary part (vertical component). These are exactly the legs of the right triangle shown in the visualization.

For example, given $r = 5$ and $\\theta = 53.13°$: $a = 5\\cos(53.13°) \\approx 3$ and $b = 5\\sin(53.13°) \\approx 4$, so $z = 3 + 4i$.

This conversion is a direct application of **Euler's formula**: $re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta) = r\\cos\\theta + ir\\sin\\theta = a + bi$.

In the explorer, try setting $r = 5$ and gradually changing $\\theta$ from $0°$ to $360°$. The point traces a circle of radius 5, and the rectangular components oscillate as $a = 5\\cos\\theta$ and $b = 5\\sin\\theta$ — producing cosine and sine waves as functions of the angle.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`When to Use Each Form`,
      content:`Rectangular and polar form are two representations of the same complex number. Choosing the right form simplifies the operation you need to perform.

**Use rectangular form** ($a + bi$) for addition and subtraction. To add $z_1 + z_2$, simply add the real parts and the imaginary parts: $(a_1 + a_2) + (b_1 + b_2)i$. This is straightforward because addition works component-wise.

**Use polar form** ($re^{i\\theta}$) for multiplication, division, and powers. To multiply $z_1 \\cdot z_2$, multiply the moduli and add the arguments: $r_1 r_2 \\cdot e^{i(\\theta_1 + \\theta_2)}$. To divide, divide moduli and subtract arguments. To raise to a power, use **De Moivre's theorem**: $(re^{i\\theta})^n = r^n e^{in\\theta}$.

This converter lets you work in whichever form is convenient and instantly see the other. Enter an addition problem in rectangular form, read off the result, then switch to polar form for a follow-up multiplication — all without manual conversion.`,
      before:``,
      after:``,
      link:'',
    },

//     obj11:{
//       title:`Related Concepts and Tools`,
//       content:`Polar-rectangular conversion connects to many areas of complex number mathematics. Explore these related pages for deeper coverage.

// **Euler's Formula Explorer** — interactive visualization of $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, the identity that bridges polar and exponential notation.

// **Complex Number Explorer** — a general-purpose tool for plotting, adding, multiplying, and exploring complex numbers on the plane.

// **Complex Numbers** — foundational theory covering the imaginary unit $i$, rectangular form, and algebraic operations.

// **Powers of i Calculator** — compute $i^n$ for any integer using the mod 4 cycle, closely related to rotation on the unit circle.

// **De Moivre's Theorem** — extends polar-form exponentiation to arbitrary powers: $(r(\\cos\\theta + i\\sin\\theta))^n = r^n(\\cos(n\\theta) + i\\sin(n\\theta))$.

// **Trigonometric Identities** — the cosine and sine functions used in conversion are deeply connected to angle-sum, double-angle, and other trig identities.`,
//       before:``,
//       after:``,
//       link:'',
//     },

obj11:{
  title:`Related Concepts and Tools`,
  content:`Polar and rectangular are two languages for the same point. The tools below each connect to one or both of those languages.

[Euler's Formula Explorer](!/complex-numbers/visual-tools/euler-formula) — the theoretical backbone of polar form. Euler's identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ is precisely why polar form is written $re^{i\\theta}$ — drag $\\theta$ along the unit circle and watch the rectangular components $\\cos\\theta$ and $\\sin\\theta$ emerge directly.

[Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) — the main reason polar form exists. In rectangular form, multiplying two complex numbers requires expanding brackets; in polar form it reduces to multiplying moduli and adding angles. Use this tool after converting to polar to see why.

[Division Visualizer](!/complex-numbers/visual-tools/division) — the inverse of multiplication: moduli divide and angles subtract. Again, polar form makes this geometric and immediate in a way rectangular form cannot.

[De Moivre's Theorem Visualizer](!/complex-numbers/visual-tools/demoivre-visualizer) — takes polar form one step further. $(re^{i\\theta})^n = r^n e^{in\\theta}$ raises the modulus to a power and multiplies the angle — a direct consequence of the polar representation you see in this converter.

[Complex Number Explorer](!/complex-numbers/visual-tools/complex-explorer) — a general-purpose tool for plotting and manipulating complex numbers. Useful for verifying that a polar conversion lands where you expect on the plane.`,
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
      question: "How do you convert rectangular form to polar form?",
      answer: "Compute the modulus r = √(a² + b²) using the Pythagorean theorem, then find the argument θ = atan2(b, a) to get the correct quadrant. The result is z = r·e^(iθ)."
    },
    obj2: {
      question: "How do you convert polar form to rectangular form?",
      answer: "Use the projections a = r cos θ for the real part and b = r sin θ for the imaginary part. The result is z = a + bi. This follows directly from Euler's formula."
    },
    obj3: {
      question: "What is the difference between rectangular and polar form?",
      answer: "Rectangular form z = a + bi describes a complex number by horizontal and vertical components. Polar form z = r·e^(iθ) describes the same number by distance from the origin (modulus r) and angle from the real axis (argument θ). They are equivalent representations."
    },
    obj4: {
      question: "Why use atan2 instead of arctan for the argument?",
      answer: "The ordinary arctan(b/a) only returns angles between −90° and 90° and fails when a = 0. The atan2(b, a) function uses the signs of both components to return the correct angle in all four quadrants, covering the full range from −180° to 180°."
    },
    obj5: {
      question: "When should I use polar form vs rectangular form?",
      answer: "Use rectangular form for addition and subtraction since these work component-wise. Use polar form for multiplication, division, and powers since moduli multiply and arguments add, making these operations much simpler."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Polar-Rectangular Complex Number Converter",
      "description": "Interactive converter between rectangular (a+bi) and polar (r, θ) forms of complex numbers. Drag points, type values, and see live conversion formulas on the complex plane.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/polar-rectangular",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Draggable point on the complex plane with live rectangular and polar readout",
        "Editable rectangular form inputs (a and b) with instant polar conversion",
        "Editable polar form inputs (r and θ) with instant rectangular conversion",
        "Live conversion formula panel showing step-by-step substitution both directions",
        "Color-coded right triangle with modulus, real, and imaginary components",
        "Six preset complex numbers plus a random generator",
        "Dashed modulus circle and orange angle arc visualization"
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
          "name": "Polar-Rectangular Converter",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/polar-rectangular"
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
        title: "Polar-Rectangular Converter | Learn Math Class",
        description: "Convert complex numbers between rectangular (a+bi) and polar (r, θ) forms. Drag points on the complex plane, see live formulas, and explore all four quadrants.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/polar-rectangular",
         name: "Polar-Rectangular Complex Number Converter"
      },
        
       }
    }
   }

export default function PageTemplate({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Polar-Rectangular Converter</h1>
   <br/>
   <SiblingsNav>
   <PolarRectangularConverter/>
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