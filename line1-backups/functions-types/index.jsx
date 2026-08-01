// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionGallery from '../../../../app/components/functions/types/FunctionGallery'


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
//         url: "/functions/visual-tools/types",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'30px'}}>Functions Families</h1>
//    <br/>
//    <FunctionGallery/>
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
import FunctionGallery from '../../../../app/components/functions/types/FunctionGallery'


export async function getStaticProps(){

  const keyWords = [
    'function families',
    'function types',
    'function gallery',
    'visualize functions',
    'linear function visualizer',
    'quadratic function visualizer',
    'cubic function visualizer',
    'exponential function visualizer',
    'logarithmic function visualizer',
    'trigonometric function visualizer',
    'rational function visualizer',
    'absolute value function',
    'square root function',
    'interactive function plotter',
    'function parameters explorer',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Gallery`,
      content: `Open the page and three panels appear side by side. On the left is the **family picker** — a vertical list of every function family the gallery covers. In the center is the **plot panel**, with the family name in the header, the current symbolic equation displayed as a badge, and an interactive graph of $y = f(x)$. On the right is the **info panel**, with tabs for an explanation of the active family and external resources.

The gallery launches on the linear family with default parameters $a = 1$, $b = 0$ — the line $y = x$. Click any family in the sidebar to switch to it. The plot, equation, sliders, and explanation all update at once. Parameters reset to their family-specific defaults on every switch, so you always start from a representative example.

The plot supports zoom, crosshair readout, and curve tooltips by default. Mouse over the curve to see the corresponding $(x, f(x))$ values.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Browsing the Family Picker`,
      content: `The picker lists every family with a small glyph showing the characteristic shape of that family and the family's name. Twelve families are included, covering most of pre-calculus and the standard families seen through introductory calculus:

• **Linear** — straight lines
• **Quadratic** — parabolas
• **Cubic** — odd-degree polynomials with an inflection point
• **Power** — $ax^n$ for adjustable exponent $n$
• **Rational** — reciprocal curves with vertical asymptotes
• **Exponential** — multiplicative growth or decay
• **Logarithmic** — the inverse of exponential
• **Trigonometric** — sine, cosine, and tangent (grouped together)
• **Absolute value** — sharp V shape
• **Square root** — half-sideways parabola

The currently selected family is highlighted in light blue with a darker glyph color, so the picker doubles as a status indicator.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Trigonometric Group`,
      content: `Three of the families — **sine**, **cosine**, and **tangent** — share a tinted, bordered box labeled "Trigonometric" inside the picker. The grouping reflects how they are usually taught and used together: same four-parameter form $f(x) = A \\cdot \\text{trig}(Bx + C) + D$, related by phase shifts, and bundled in every standard textbook chapter.

Sine and cosine differ only by a phase shift of $\\frac{\\pi}{2}$ — they have identical periodicity, amplitude, and offset behavior. Tangent is the odd one out: same parameter scheme but a different period ($\\pi$ rather than $2\\pi$), unbounded values, and vertical asymptotes where the cosine in its denominator vanishes.

Switching between the three families is the fastest way to see the structural family resemblances and the points where they diverge.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Adjusting Parameters with the Sliders`,
      content: `Below the family list sit the parameter sliders for the currently active family. Each family has its own set:

• **Linear**: slope $a$, intercept $b$
• **Quadratic**: coefficients $a$, $b$, $c$
• **Cubic**: leading coefficient $a$, middle coefficient $b$
• **Power**: coefficient $a$, exponent $n$ (including non-integer values)
• **Rational**: numerator $a$, shift $h$
• **Exponential**: coefficient $a$, base
• **Logarithmic**: scale $a$, vertical shift $d$
• **Sine / Cosine / Tangent**: amplitude $A$, frequency $B$, phase $C$, offset $D$
• **Absolute / Square root**: coefficient $a$, shift $h$

Each slider shows the parameter name on the left and its current numeric value on the right in blue monospace. Dragging the slider updates the plot, the equation badge, and the explanation in real time — there is no apply step.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Reading the Plot and Equation Badge`,
      content: `The plot panel header has two elements. On the left, the **family name** identifies what is being graphed. On the right, the **equation badge** — in monospaced blue type — shows the current symbolic form with parameter values substituted. As you drag a slider, the equation rewrites character by character to match.

The plot itself is a coordinate system with axis labels, gridlines, and the curve $y = f(x)$ drawn in accent blue. A crosshair follows the mouse, and a small tooltip near the curve shows the value $f(x)$ at the cursor's $x$-coordinate. Functions with restricted domains — square root undefined for negative inputs, logarithm undefined at and below zero, tangent and rational families undefined at asymptotes — are simply not drawn outside their domains, leaving gaps in the curve that make the domain visible.

The plot starts zoomed to roughly $[-10, 10]$ on both axes. You can pan and zoom for closer inspection.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Exploring the Info Panel`,
      content: `The right-side info panel updates whenever you select a family. Two tabs are available:

• **Explanation** — a short prose summary of the family. Covers the canonical equation, what each parameter does, the shape and behavior of the curve, and any defining features (asymptotes, periodicity, vertex, inflection point, domain restrictions). Mathematical notation renders inline.
• **Resources** — external links to relevant Wikipedia articles for further reading. Each family includes at least one curated link.

The explanation is intentionally brief — it complements the visual rather than replacing dedicated theory pages. Once you have the shape in your head from the gallery, the linked resources can fill in any formal definitions or proofs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What is a Function Family?`,
      content: `A **function family** is a parametrized class of functions sharing the same algebraic structure. The linear family $f(x) = ax + b$ contains every straight line; the quadratic family $f(x) = ax^2 + bx + c$ contains every parabola; the sine family $f(x) = A \\sin(Bx + C) + D$ contains every shifted, scaled sinusoid.

Each member of a family is determined by a small set of numerical parameters, and members of the same family share qualitative features — number of roots, end behavior, symmetry, domain — regardless of specific parameter values. Two parabolas can look very different numerically, but both have a single vertex, both open in one direction, and both come from a degree-two polynomial.

Recognizing a function family at sight is one of the foundational skills of algebra and pre-calculus. The gallery is built to support that pattern recognition: see the same family across many parameter choices, and the invariant shape settles into memory.

For deeper theory on function classification, see **functions theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Defining Features Across Families`,
      content: `Different families are distinguished by which qualitative features they support. The gallery's families illustrate most of the patterns you encounter in elementary mathematics:

• **End behavior** — linear and odd-degree polynomials go to $\\pm\\infty$ in opposite directions; even-degree polynomials head the same way at both ends; exponentials hit a horizontal asymptote on one side; trig functions oscillate forever.
• **Roots** — linear has exactly one (when nonzero); quadratic has zero, one, or two; exponential and pure sine/cosine families have none in some configurations.
• **Asymptotes** — rational, tangent, and logarithmic families have vertical asymptotes; exponential, rational, and logarithmic have horizontal ones in the appropriate limit.
• **Periodicity** — only the trigonometric families repeat exactly.
• **Domain restrictions** — square root requires $x \\geq h$; logarithm requires $x > 0$ after shifting; rational excludes $x = h$.
• **Smoothness** — absolute value has a corner where it is not differentiable; every other family in the gallery is smooth wherever defined.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `How to Compare Families`,
      content: `The gallery is designed to support side-by-side comparison even though only one family is plotted at a time. A few suggested workflows:

• **Match the parameters when possible.** Setting amplitude $A = 1$, frequency $B = 1$, phase $C = 0$, offset $D = 0$ on sine, cosine, and tangent shows the canonical curves directly comparable to each other.
• **Sweep a single parameter.** Hold all but one slider fixed and drag the remaining one across its range — the family's response to that single parameter becomes obvious without competing changes confusing the picture.
• **Compare growth rates.** Switch between power ($n = 2$, then $n = 3$), exponential (base $2$), and logarithmic to see how quickly each family blows up or flattens for large $x$.
• **Find an inverse pair.** Exponential and logarithmic are inverses of each other; setting matching parameters and mentally reflecting one across $y = x$ should yield the other.

The plot's fixed default zoom makes these comparisons consistent — you are always looking at the same window, which makes shape comparison meaningful.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Functions** — the general theory of functions: domain, range, composition, inverses, and classification.

**Function Transformations** — visualizers for vertical and horizontal shifts, stretches, and reflections applied to any base function.

**Polynomial Functions** — focused theory and tools for the polynomial subfamilies covered here (linear, quadratic, cubic, and higher).

**Exponential and Logarithmic Functions** — paired study of inverse function families, growth and decay models, and natural log.

**Trigonometric Functions** — full coverage of sine, cosine, tangent, and their reciprocals beyond the gallery's brief introduction.

**Rational Functions** — asymptote analysis, partial fractions, and behavior near poles.

**Equations and Inequalities Visualizer** — companion tools for solving $f(x) = n$ and $f(x) > 0$ across all the same function families.

**Function Graphs Reference** — printable reference sheets of canonical curves from each family.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: { title:``, content:``, before:``, after:``, link:'' },
    obj12: { title:``, content:``, before:``, after:``, link:'' },
    obj13: { title:``, content:``, before:``, after:``, link:'' },
    obj14: { title:``, content:``, before:``, after:``, link:'' },
    obj15: { title:``, content:``, before:``, after:``, link:'' },
  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does the Functions Families gallery show?",
      answer: "It plots twelve standard function families with adjustable parameters: linear, quadratic, cubic, power, rational, exponential, logarithmic, sine, cosine, tangent, absolute value, and square root. Each family has its own sliders for parameters like slope, amplitude, frequency, and shift. The plot, symbolic equation, and explanation panel all update in real time as you drag a slider."
    },
    obj2: {
      question: "What is a function family?",
      answer: "A function family is a parametrized class of functions sharing the same algebraic structure. The linear family contains every straight line; the quadratic family contains every parabola; the sine family contains every shifted and scaled sinusoid. Members of the same family share qualitative features regardless of specific parameter values."
    },
    obj3: {
      question: "How are the trigonometric functions grouped?",
      answer: "Sine, cosine, and tangent appear together inside a tinted bordered box labeled Trigonometric in the family picker. They share the same four-parameter form — amplitude A, frequency B, phase C, and offset D — and are usually taught together. Sine and cosine differ by a phase shift of pi over two; tangent has a different period and adds vertical asymptotes."
    },
    obj4: {
      question: "What features can I see in the plot?",
      answer: "The plot has axis labels, gridlines, a crosshair that follows the mouse, and a tooltip showing f(x) at the cursor's x-coordinate. Functions with restricted domains — square root, logarithm, tangent, rational — are drawn only where they are defined, so domain restrictions appear visually as gaps in the curve."
    },
    obj5: {
      question: "How do I compare two function families?",
      answer: "Switch between families using the picker and watch how the same parameter values produce different shapes, or set a base parameter set on one family and then change families to see how the structure changes. The default zoom is consistent across families, so shape comparisons are meaningful. Useful comparisons include exponential vs polynomial growth and exponential vs logarithmic as an inverse pair."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Functions Families Gallery",
      "description": "Interactive gallery of twelve standard function families with adjustable parameter sliders, live plots, and per-family explanations.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/types",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Twelve function families covered: linear, quadratic, cubic, power, rational, exponential, logarithmic, sine, cosine, tangent, absolute value, square root",
        "Per-family parameter sliders with live plot updates",
        "Symbolic equation badge that rewrites as parameters change",
        "Trigonometric families grouped in their own panel for direct comparison",
        "Interactive plot with crosshair, curve tooltip, and zoom",
        "Side info panel with per-family explanation and external resource links",
        "Domain restrictions rendered as visible gaps in the curve"
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
          "name": "Functions",
          "item": "https://www.learnmathclass.com/functions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/functions/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Function Families",
          "item": "https://www.learnmathclass.com/functions/visual-tools/types"
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
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Function Families Gallery | Interactive Function Visualizer",
        description: "Explore 12 function families — linear, quadratic, cubic, power, rational, exponential, logarithmic, trig, absolute, sqrt — with live sliders and plots.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/types",
        name: "Functions Families Gallery",
        hubDescription: "Pick a function family from a sidebar of twelve standard families — linear, quadratic, cubic, power, rational, exponential, logarithmic, sine, cosine, tangent, absolute value, and square root — and adjust its parameters with live sliders. The plot, symbolic equation, and explanation panel update in real time, with the three trigonometric families grouped together for direct comparison.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function FunctionFamiliesGalleryPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    { id:'1',  title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'2',  title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'3',  title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'4',  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'5',  title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'6',  title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'7',  title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'8',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'9',  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Functions Families</h1>
      <br/>
      <FunctionGallery/>
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