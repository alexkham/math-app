// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionDomain from '../../../../app/components/functions/domain/FunctionDomain'


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
//         url: "/functions/visual-tools/domain",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Domain of a Function</h1>
//    <br/>
//    <FunctionDomain/>
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
import FunctionDomain from '../../../../app/components/functions/domain/FunctionDomain'


export async function getStaticProps(){

  const keyWords = [
    'domain of function',
    'function domain visualizer',
    'find domain of function',
    'domain calculator',
    'function input values',
    'domain of f(x)',
    'domain of logarithm',
    'domain of square root',
    'domain of reciprocal',
    'restricted domain function',
    'domain vs range',
    'domain interval notation',
    'allowable inputs function',
    'x-axis domain visualizer',
    'open closed endpoints domain',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions grouped by domain shape — those that accept every real number, and those with built-in domain restrictions. In the center is the **plot panel** with the function $g(x)$ in blue and a colored band drawn directly **on the x-axis** showing the domain. On the right is the **info panel** with two tabs.

Below the plot sits the **domain card** — a colored block displaying the domain in interval notation, the same domain drawn on a horizontal 1D number line, and a draggable **test point slider** that lets you check whether a specific x-value is in the domain and, if so, see the value $g(x)$ that the function produces there.

The page launches with the logarithmic family. Its domain is $x > 0$ — the function is undefined for zero and negative inputs. The x-axis band starts just to the right of $0$ with an open endpoint and extends rightward; the test point at $x = 1$ shows $g(1) = 0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven base functions by the **shape of their domain**:

• **Unrestricted ($\\mathbb{R}$)** — Identity, Linear (2x), Quadratic, Cubic, Exponential, Sine, Cosine, Absolute. All accept every real number as input.
• **Restricted** — Logarithmic (domain $x > 0$), Square root (domain $x \\geq 0$), Reciprocal (domain $x \\neq 0$). Each has a built-in restriction baked into its definition.

The grouping is the pedagogical point. Most functions you encounter in pre-calculus accept any input; the three families that don't are the canonical cases worth studying — and the ones where transformations actually move the domain boundary around. Picking an unrestricted family is useful for contrast: the colored band on the x-axis just extends from $-\\infty$ to $+\\infty$, and changing parameters doesn't move it.

Click any entry to switch. Transformation parameters reset to defaults on every switch.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Why Only $b$ and $h$ Change the Domain`,
      content: `Below the family list, four sliders apply the standard affine transformations:

• **$a$ — vertical scale**. Multiplies the output by $a$.
• **$k$ — vertical shift**. Adds $k$ to the output.
• **$b$ — horizontal scale**. Multiplies the input by $b$.
• **$h$ — horizontal shift**. Subtracts $h$ from the input.

A small "**affects domain**" badge appears on the labels for $b$ and $h$ but not on $a$ or $k$. The reason is structural and the mirror image of the range case. The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. The input that reaches the inner $f$ is $b(x - h)$ — only $b$ and $h$ appear there. After $f$ produces a value, $a$ and $k$ scale and shift it, but by then the legality of the input has already been decided.

Drag $a$ or $k$ as wildly as you want — the x-axis band does not move. Drag $b$ or $h$ and the band immediately rescales and shifts. The visualizer makes this asymmetry visible in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the X-Axis Highlight and Domain Bar`,
      content: `The domain is shown in two coordinated places:

• **On the x-axis of the main plot** — a colored band traces the interval of legal inputs directly on the axis, in the same coordinate system as the function. You can see which inputs the blue curve has values at and which it leaves blank. Open and closed endpoints render as hollow and filled circles; infinite extents render as arrows.

• **On a horizontal number line below the plot** — the same domain interval is drawn flat, in the more familiar number-line orientation with tick marks and integer labels every two units. The number line view sits in its own colored card and is easier to read at a glance.

The two views always agree. The on-axis version makes the geometric relationship between input restrictions and the curve unmistakable; the number-line version is the canonical representation you would draw by hand.

For excluded domains like the reciprocal, both views mark the excluded value with a red ×, showing the hole in the domain visually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Probing with the Test Point Slider`,
      content: `Inside the domain card sits a **test point slider** labeled "x = ...". Drag it from $-10$ to $+10$ along the number line. As you move:

• The slider's thumb on the number line jumps to that position, with a vertical marker and a filled circle.
• A dashed vertical reference line appears in the main plot at the corresponding $x$ value — drawn in the highlight color when the input is in the domain, and red when it is not.
• Below the slider, an "**in domain**" or "**outside domain**" badge updates with the result.
• Next to the badge, the actual function value appears: $g(x) = \\ldots$ for legal inputs, or "$g(x)$ is undefined" for inputs outside the domain.

The function value display is the key difference from the range visualizer. Where the range tool only answers achievability, the domain tool tells you *what comes out* whenever the input is legal — so you can use it as both a domain checker and a quick function evaluator.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Domain Card and Applied Chips`,
      content: `At the top of the domain card, the **domain in interval notation** is displayed as a monospace string — e.g., $x > 0$, $x \\geq 0$, $x \\neq 0$, or "all real x" for unrestricted families. This is the same string you would write on a homework assignment.

Below the plot, an **Applied** strip shows the four transformation parameter chips with their current values. The four chips are deliberately dimmed compared to other visualizers in the series; a separator and a "**b, h affect domain**" callout reinforce which parameters actually matter for this tool's question. Even though $a$ and $k$ appear in the strip, they are visually de-emphasized — a visual reminder that they could be at any value and the domain would still be the same.

The card's border color, header text, and accent badges all derive from the chosen highlight color, so the entire domain UI reads as one coordinated block.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Customizing the Highlight Color`,
      content: `Under the family picker and parameter sliders, an **Appearance** section contains a color swatch labeled "Domain color". Click it to open a native color picker and choose any color you want for the domain highlight, the domain card chrome, the number-line band, and the dashed reference line.

The color cascades through several visual elements simultaneously:

• X-axis highlight band in the plot
• Number-line fill below the plot
• Dashed vertical reference line when the test point is in domain
• Domain card border, header text, and "in domain" badge
• "Affects domain" badges on the relevant parameter sliders

Outside-domain elements (the red badge, the red reference line, the red × at excluded points) remain red regardless of the chosen highlight color — the contrast between "valid" and "invalid" is preserved.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is the Domain of a Function?`,
      content: `The **domain** of a function is the set of inputs where the function is defined — equivalently, the set of $x$-values for which $f(x)$ produces a real number output. Inputs outside the domain are forbidden; the function simply has no value there.

Different function families have qualitatively different domain restrictions:

• Polynomials ($x$, $x^2$, $x^3$, $|x|$), exponential $e^x$, sine, and cosine accept every real number. Their domain is all of $\\mathbb{R}$.
• $\\sqrt{x}$ — defined only for $x \\geq 0$, since the square root of a negative number is not real
• $\\ln(x)$ — defined only for $x > 0$, since the logarithm of zero or a negative number is not real
• $1/x$ — defined everywhere except $x = 0$, since division by zero is undefined

Domain is independent of range. A function can have a tiny domain and reach every real number ($\\ln x$ has domain $x > 0$ but range $\\mathbb{R}$), or accept every real number and stay bounded ($\\sin x$ has domain $\\mathbb{R}$ but range $[-1, 1]$). Together, domain and range fully characterize what goes in and what can come out.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Open vs Closed Endpoints and Excluded Values`,
      content: `Three subtle distinctions show up in the visualizer's domain bar:

• **Closed endpoint (filled circle)** — the boundary value is *included* in the domain. Square root has domain $x \\geq 0$ with a closed endpoint at $0$, because $\\sqrt{0} = 0$ is defined. The bar shows a filled dot.

• **Open endpoint (hollow circle)** — the boundary value is *excluded* from the domain. Logarithm has domain $x > 0$ with an open endpoint at $0$, because $\\ln(0)$ is undefined (the limit is $-\\infty$). The bar shows a hollow dot.

• **Excluded value (red ×)** — the function is defined everywhere except one value. Reciprocal has domain $x \\neq 0$ — every nonzero real number is a legal input, but $0$ is the vertical asymptote and forbidden. The bar shows a full fill broken by a small red × at the excluded point.

The distinction between open and closed endpoints matters for continuity, limits, and whether a function attains its extreme values. The visualizer makes the boundary type visible by eye, so the difference reads at a glance rather than as an abstract notation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Range of a Function** — the partner concept showing which outputs the function can produce. Use the companion range visualizer to see how the mirror rule works — only $a$ and $k$ (not $b$ and $h$) affect the range.

**Functions** — general theory of functions, including formal definitions of domain, range, and image.

**Function Transformations** — visualizer for $a$, $k$, $b$, $h$ alone, useful for separating the effects of each parameter before adding the domain analysis on top.

**Functions Families Gallery** — gallery of the same eleven base functions plotted side by side, useful as a prerequisite for understanding what each curve looks like.

**Inverse Functions** — visualizer for reflecting a function across $y = x$. The domain of $f$ becomes the range of $f^{-1}$, a fundamental duality made concrete by the domain and inverse tools together.

**Asymptotes** — vertical asymptotes correspond to excluded values in the domain (like $x = 0$ for the reciprocal). The visualizer's red × marker is one geometric expression of this idea.

**Limits and Continuity** — the open/closed endpoint distinction shown in the visualizer is foundational for continuity at boundary points and for one-sided limits.`,
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
      question: "What does the Domain of a Function Visualizer do?",
      answer: "It draws the set of legal inputs of a function — its domain — directly on the x-axis of the plot and as a horizontal number line below it. Pick a base function from eleven families grouped by domain shape, transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, and the domain updates in real time. A test point slider lets you check whether a specific x-value is in the domain and see the function value there."
    },
    obj2: {
      question: "Why do only b and h change the domain?",
      answer: "The transformed function is g(x) = a · f(b(x − h)) + k. The input that reaches the inner f is b(x − h), so only b and h appear there. After f produces a value, a and k scale and shift the output — but by then the legality of the input has already been decided. Multiplying or shifting the output can't make a forbidden input suddenly legal. Drag a or k freely and the x-axis domain band stays put; drag b or h and the band immediately rescales and shifts."
    },
    obj3: {
      question: "What does the test point slider do?",
      answer: "Drag it to pick any x-value between -10 and +10. The visualizer answers whether that value is in the domain of g and, if so, computes the function value g(x). A green in-domain badge appears with the value when legal, a red outside-domain badge appears with 'g(x) is undefined' when not. A dashed vertical reference line is drawn in the main plot at the chosen x, in highlight color or red depending on the answer."
    },
    obj4: {
      question: "What is the difference between an open and closed endpoint?",
      answer: "A closed endpoint, shown as a filled circle, means the boundary value is included in the domain. The square root function has a closed endpoint at x = 0 because the square root of zero is zero, a defined value. An open endpoint, shown as a hollow circle, means the boundary is excluded. The logarithm has an open endpoint at x = 0 because ln(0) is undefined."
    },
    obj5: {
      question: "How are the eleven base functions grouped in the picker?",
      answer: "They are grouped by whether their domain is restricted. Unrestricted contains eight functions that accept every real number — identity, linear, quadratic, cubic, exponential, sine, cosine, and absolute value. Restricted contains three functions with built-in domain restrictions — logarithmic with domain x > 0, square root with domain x ≥ 0, and reciprocal with domain x ≠ 0."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Domain of a Function Visualizer",
      "description": "Interactive visualizer for the domain of a function. Pick a base function, transform it, and see the set of legal inputs drawn directly on the x-axis.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/domain",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base functions grouped by domain shape: unrestricted families and the three classic restricted families",
        "Four transformation sliders with badges marking which ones affect the domain",
        "Domain drawn directly on the x-axis of the main plot in the same coordinate system",
        "Horizontal number line below the plot for an alternative view of the domain interval",
        "Test point slider that checks domain membership and computes the function value for legal inputs",
        "Open and closed endpoints rendered as hollow and filled circles",
        "Excluded values marked with a red cross for domains with a single hole",
        "Customizable highlight color cascading through all domain-related UI elements"
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
          "name": "Domain of a Function",
          "item": "https://www.learnmathclass.com/functions/visual-tools/domain"
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
        title: "Domain of a Function Visualizer | Legal Inputs on the X-Axis",
        description: "Visualize the domain of any transformed function on the x-axis. Drag a test point to check membership and see why only b and h change the domain.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/domain",
        name: "Domain of a Function Visualizer",
        hubDescription: "See the set of legal inputs of any function drawn directly on the x-axis as a colored band, with a horizontal number line below the plot and a draggable test point that checks domain membership and computes the function value for legal inputs. Pick from eleven base functions grouped by domain shape and watch the domain respond live to horizontal scale and shift — while vertical transformations leave it unchanged.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function DomainOfFunctionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Domain of a Function</h1>
      <br/>
      <FunctionDomain/>
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