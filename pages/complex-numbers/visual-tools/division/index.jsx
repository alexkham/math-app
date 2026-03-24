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
// import ComplexDivisionVisualizer from '../../../../app/components/calculators/complex-numbers/ComplexDivisionVisualizer'


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
//         url: "/url",
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Complex Numbers Division</h1>
//    <br/>
//    <ComplexDivisionVisualizer/>
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
import ComplexDivisionVisualizer from '../../../../app/components/calculators/complex-numbers/ComplexDivisionVisualizer'
import SiblingsNav from '../../../../app/components/SiblingsNav'

export async function getStaticProps(){

  const keyWords = [
    "complex number division",
    "divide complex numbers",
    "complex division calculator",
    "complex division visualizer",
    "multiply by conjugate",
    "rationalize complex denominator",
    "complex division step by step",
    "divide magnitudes subtract angles",
    "complex number quotient",
    "complex conjugate division",
    "polar division complex numbers",
    "1 divided by i",
    "complex division interactive",
    "complex plane division",
    "algebraic complex division"
  ]

    const sectionsContent={

    obj1:{
      title:`Getting Started — Set Numerator and Denominator`,
      content:`Two draggable points represent $z_1$ (navy, the numerator) and $z_2$ (orange, the denominator). Drag either point on the complex plane and the green quotient vector $z_1 / z_2$ updates instantly, along with both step-by-step solution panels.

You can also type values directly into the input fields — each has separate real and imaginary inputs accepting $-10$ to $10$. Six presets are available below the plane: $(4+2i)/(1-i)$, $6/3$, $4i/2i$, $1/i$, $(3+4i)/(3-4i)$, and $(-2+6i)/(1+2i)$. Click **Random** to generate a random pair (the denominator is guaranteed non-zero).

Each input panel displays the complex number in rectangular form alongside its modulus and argument, so you can follow both the algebraic and geometric methods simultaneously.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`The Three Angle Arcs — Subtraction in Action`,
      content:`Three concentric arcs near the origin show the arguments of the numerator, denominator, and quotient. The inner navy arc is $\\theta_1$, the middle orange arc is $\\theta_2$, and the outer green arc is $\\theta_1 - \\theta_2$.

Division **subtracts** angles — the opposite of multiplication, which adds them. Click $(4+2i)/(1-i)$ to see: $\\theta_1 \\approx 26.6°$, $\\theta_2 \\approx -45°$, and the quotient angle is $26.6° - (-45°) = 71.6°$. Subtracting a negative angle effectively adds, so dividing by a number with a negative argument rotates the result upward.

Click $1/i$ for the most striking case. The numerator $z_1 = 1$ has angle $0°$ and the denominator $z_2 = i$ has angle $90°$. The quotient angle is $0° - 90° = -90°$, placing the result at $-i$ on the negative imaginary axis. Dividing by $i$ rotates $90°$ clockwise — the reverse of multiplying by $i$.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Division of Pure Real Numbers`,
      content:`Click $6/3$ to see the simplest case: both numbers are real. The navy vector for $z_1 = 6$ and the orange vector for $z_2 = 3$ both lie on the positive real axis with angles $0°$. The quotient is $6/3 = 2$, also real and on the positive axis.

The green quotient vector is shorter than $z_1$ — the modulus is divided: $|6|/|3| = 2$. The angle is $0° - 0° = 0°$, confirming no rotation. This is ordinary real division rendered on the complex plane.

Now change $z_2$ to $-3$. The denominator angle becomes $180°$, so the quotient angle is $0° - 180° = -180°$, which wraps to $180°$. The result is $-2$ — dividing by a negative real number flips the direction. The green vector points left along the negative real axis.

These real-only cases produce the cleanest SVG snapshots: all vectors collinear along the real axis, with the quotient either shorter or longer than the numerator depending on whether $|z_2| > 1$ or $|z_2| < 1$.`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Division of Pure Imaginary Numbers`,
      content:`Click $4i / 2i$ to divide two purely imaginary numbers. Both vectors point along the imaginary axis — $z_1 = 4i$ at $90°$ and $z_2 = 2i$ at $90°$. The quotient angle is $90° - 90° = 0°$, so the result lands on the positive real axis.

The result is $4i / 2i = 2$ — a real number. The imaginary units cancel, leaving a real quotient. The modulus is $4/2 = 2$. In the visualizer, both input vectors are vertical but the green quotient vector is horizontal.

This is a general rule: dividing two pure imaginary numbers always yields a real result because both arguments are $\\pm 90°$ and their difference is $0°$ or $180°$. Try $4i / (-2i)$: the angles are $90°$ and $-90°$, giving a quotient angle of $180°$, so the result is $-2$ — a negative real number.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Dividing by i — The −90° Rotation`,
      content:`Click $1/i$ to see the reciprocal of the imaginary unit. Since $i$ has modulus $1$ and angle $90°$, dividing by $i$ scales by $1/1 = 1$ (no change in length) and rotates by $-90°$ (clockwise quarter-turn).

The result is $1/i = -i$, which sits at angle $-90°$ on the negative imaginary axis. The green vector points straight down. This is confirmed algebraically by multiplying top and bottom by $-i$: $\\frac{1}{i} \\cdot \\frac{-i}{-i} = \\frac{-i}{1} = -i$.

Dividing by $i$ is the inverse of multiplying by $i$. Multiplication by $i$ rotates $+90°$ (counterclockwise); division by $i$ rotates $-90°$ (clockwise). Together they cancel — $(z \\cdot i) / i = z$.

Try changing $z_1$ to other values while keeping $z_2 = i$. Every quotient is the numerator rotated $90°$ clockwise. Setting $z_1 = 1 + i$ gives $(1+i)/i = 1 - i$, confirmed by the green vector appearing in Quadrant IV.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`Conjugate Pair Division`,
      content:`Click $(3+4i)/(3-4i)$ to divide a complex number by its own conjugate. Conjugates share the same modulus ($|3+4i| = |3-4i| = 5$) but have opposite angles. The quotient modulus is $5/5 = 1$, so the result lies exactly on the unit circle.

The quotient angle is $\\theta_1 - \\theta_2$. Since $\\theta_2 = -\\theta_1$, the difference is $2\\theta_1$. The result is a pure rotation with unit modulus — no scaling at all.

In the visualizer, the green quotient point sits at distance $1$ from the origin. The angle is double the numerator's angle. This is a distinctive SVG state: one point above the real axis, one below (mirror images), and the quotient on the unit circle.

This property is used in signal processing to extract phase information. Dividing a complex number by its conjugate strips away the magnitude and doubles the phase angle.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`The Divide-by-Zero State`,
      content:`Drag $z_2$ to the origin (set both components to $0$). The quotient becomes undefined — you cannot divide by zero in complex arithmetic, just as in real arithmetic.

The visualizer handles this gracefully: the green quotient vector disappears, both step-by-step panels hide, and a red warning message appears in the result box: "Cannot divide by zero — move z₂ away from the origin."

The Random button deliberately prevents this by ensuring $z_2$ has at least one component with $|\\text{value}| \\geq 0.5$. But you can still reach the zero state manually by typing $0$ into both inputs.

This is the only configuration where the tool cannot display a result. Every other combination of $z_1$ and $z_2$ (including $z_1 = 0$, which gives quotient $0$) produces a valid output.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`Off-Screen Quotients and the Zoom Inset`,
      content:`When the denominator is much smaller than the numerator, the quotient modulus can exceed the $\\pm 10$ grid. In this case the green vector becomes a dashed ray pointing toward the edge with an arrow and the label "$z_1/z_2 \\to$". The exact numerical result still appears in the result panel.

Try $z_1 = 10$ and $z_2 = 0.5$: the quotient is $20$, well beyond the visible range. The dashed ray points right along the real axis.

Conversely, when the denominator is much larger than the numerator, the quotient is tiny. If the quotient modulus falls below $1$, a **zoom inset** appears in the upper-right corner of the plane. This magnified window shows a small grid around the origin with the quotient point plotted at readable scale, complete with its own labeled coordinates.

Try $z_1 = 0.5$ and $z_2 = 5 + 5i$: the quotient modulus is approximately $0.07$, invisible at normal scale but clearly shown in the inset.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`The Conjugate Multiplication Method`,
      content:`The standard algebraic method for dividing complex numbers is to multiply both numerator and denominator by the **conjugate** of the denominator:

$$\\frac{z_1}{z_2} = \\frac{z_1 \\cdot \\overline{z_2}}{z_2 \\cdot \\overline{z_2}} = \\frac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$$

The denominator becomes real because $z_2 \\cdot \\overline{z_2} = |z_2|^2 = a^2 + b^2$ for $z_2 = a + bi$. Once the denominator is real, the division reduces to dividing each component of the numerator by a single real number.

The **Algebraic Method** panel shows this process with fraction notation. It displays the original fraction, the conjugate multiplier, the expanded denominator $|z_2|^2$, the expanded numerator, and the final simplified quotient.

This technique is sometimes called **rationalizing the denominator** — it eliminates the imaginary part from the denominator, converting the problem from complex division to real division.`,
      before:``,
      after:``,
      link:'',
    },

    obj10:{
      title:`The Polar (Geometric) Method`,
      content:`In polar form, division is the inverse of multiplication:

$$\\frac{z_1}{z_2} = \\frac{r_1}{r_2} \\cdot e^{i(\\theta_1 - \\theta_2)}$$

Moduli divide and arguments subtract. The **Geometric Method** panel shows these two calculations side by side: $|z_1| \\div |z_2|$ for the modulus and $\\theta_1 - \\theta_2$ for the angle, followed by a summary sentence.

This is dramatically simpler than the conjugate multiplication method. Where the algebraic approach requires expanding a product, computing $|z_2|^2$, and dividing two components, the polar approach is just one division and one subtraction.

The trade-off is that you need the moduli and arguments first. If $z_1$ and $z_2$ are given in rectangular form, you must convert to polar — which involves square roots and arctangent. If they are already in polar or exponential form, division is trivial.

The three angle arcs on the plane make the subtraction visible: the green arc is always the angular difference between the navy and orange arcs.`,
      before:``,
      after:``,
      link:'',
    },

//     obj11:{
//       title:`Related Concepts and Tools`,
//       content:`Complex division is the inverse of complex multiplication. Explore these related pages for the complete picture of complex arithmetic.

// **Complex Multiplication Visualizer** — the counterpart to this tool. Multiplication adds angles and multiplies moduli; division subtracts angles and divides moduli.

// **Complex Addition & Subtraction Visualizer** — addition and subtraction work component-wise with no cross-terms, unlike multiplication and division which involve the $i^2 = -1$ rule.

// **Polar-Rectangular Converter** — convert between $a + bi$ and $re^{i\\theta}$ forms. The polar form makes division simple: just divide moduli and subtract arguments.

// **Euler's Formula Explorer** — the identity $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ provides the theoretical basis for the polar division rule.

// **Powers of i Calculator** — since $1/i = -i$ and $1/i^2 = -1$, reciprocals of powers of $i$ follow the same mod 4 cycle.

// **Complex Numbers** — foundational theory covering algebraic operations, conjugates, and the modulus-argument representation.`,
//       before:``,
//       after:``,
//       link:'',
//     },

obj11:{
  title:`Related Concepts and Tools`,
  content:`Division is where the conjugate and polar form converge — the algebraic method needs one, the geometric method needs the other. Both threads lead somewhere.

The algebraic side connects directly to the [Complex Conjugate Explorer](!/complex-numbers/visual-tools/complex-conjugate). Multiplying by $\\frac{\\bar{z_2}}{\\bar{z_2}}$ works precisely because $z_2 \\cdot \\bar{z_2} = |z_2|^2$ is always real — that identity is the whole mechanism. If the step-by-step panel here feels like a trick, that tool explains why it always works.

The geometric side — divide the moduli, subtract the angles — is the mirror image of multiplication. The [Multiplication Visualizer](!/complex-numbers/visual-tools/multiplication) shows the same logic in reverse: multiply moduli, add angles. Running both tools with the same two points makes the relationship between the operations immediate.

Both geometric methods only make sense once you are comfortable with polar form, so the [Polar & Rectangular Converter](!/complex-numbers/visual-tools/polar-rectangular) is worth having open alongside this one, especially when the angle arithmetic in the geometric panel is not obvious.

Finally, the "dividing conjugates" preset here — $(3+4i)/(3-4i)$ — always lands on the unit circle because the moduli cancel exactly. That unit circle behavior is the core subject of [De Moivre's Theorem](!/complex-numbers/visual-tools/demoivre-visualizer), which generalizes it to arbitrary powers.`,
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
      question: "How do you divide complex numbers?",
      answer: "Multiply both numerator and denominator by the conjugate of the denominator. This makes the denominator real (equal to |z₂|²), reducing the problem to dividing each component by a real number. Alternatively, in polar form, divide the moduli and subtract the arguments."
    },
    obj2: {
      question: "What does complex division look like geometrically?",
      answer: "Dividing z₁ by z₂ shrinks or stretches z₁ by a factor of 1/|z₂| and rotates it by −θ₂. The quotient modulus is |z₁|/|z₂| and the quotient angle is θ₁ − θ₂. It is the inverse of multiplication's scale-and-rotate operation."
    },
    obj3: {
      question: "What is 1 divided by i?",
      answer: "1/i = −i. Since i has modulus 1 and angle 90°, dividing by i rotates 90° clockwise without changing the length. Algebraically, multiply top and bottom by −i: 1/i × (−i)/(−i) = −i/1 = −i."
    },
    obj4: {
      question: "Why do you multiply by the conjugate when dividing complex numbers?",
      answer: "Multiplying the denominator by its conjugate gives z₂ · z̄₂ = |z₂|², which is a real number. This eliminates the imaginary part from the denominator, turning complex division into simple real division of the numerator components."
    },
    obj5: {
      question: "Can you divide by zero in complex numbers?",
      answer: "No. Division by zero is undefined in complex arithmetic, just as in real arithmetic. The denominator z₂ must be nonzero, meaning at least one of its real or imaginary components must be nonzero."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Complex Division Visualizer",
      "description": "Interactive complex division tool showing conjugate multiplication and polar angle subtraction. Drag points, see step-by-step algebraic and geometric solutions on the complex plane.",
      "url": "https://www.learnmathclass.com/complex-numbers/visual-tools/division",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two draggable complex number points for numerator and denominator",
        "Three concentric angle arcs showing θ₁, θ₂, and θ₁−θ₂",
        "Algebraic conjugate multiplication method with fraction notation",
        "Polar geometric method showing modulus division and angle subtraction",
        "Divide-by-zero detection with graceful error handling",
        "Zoom inset for small quotients and ray-to-edge for off-screen quotients",
        "Six presets including 1/i and conjugate pair division"
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
          "name": "Complex Division Visualizer",
          "item": "https://www.learnmathclass.com/complex-numbers/visual-tools/division"
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
        title: "Complex Division Visualizer | Learn Math Class",
        description: "Divide complex numbers visually with draggable vectors. See conjugate multiplication, polar angle subtraction, and step-by-step solutions on the complex plane.",
        keywords: keyWords.join(", "),
        url: "/complex-numbers/visual-tools/division",
         name: "Complex Division Visualizer"
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Complex Numbers Division</h1>
   <br/>
   <SiblingsNav>
   <ComplexDivisionVisualizer/>
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