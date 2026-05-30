// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import FunctionRange from '../../../../app/components/functions/range/FunctionRange'


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
//         url: "/functions/visual-tools/range",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Range of a Function</h1>
//    <br/>
//    <FunctionRange/>
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
import FunctionRange from '../../../../app/components/functions/range/FunctionRange'


export async function getStaticProps(){

  const keyWords = [
    'range of function',
    'function range visualizer',
    'find range of function',
    'range calculator',
    'function output values',
    'range of f(x)',
    'range of quadratic',
    'range of exponential',
    'range of trigonometric functions',
    'bounded function range',
    'range vs domain',
    'range interval notation',
    'achievable outputs function',
    'y-axis range visualizer',
    'open closed endpoints range',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and three panels appear. On the left is the **function picker** with eleven base functions grouped by the shape of their range — all real numbers, bounded below, bounded between $-1$ and $1$, or all reals with one excluded value. In the center is the **plot panel** with the function $g(x)$ in blue and a colored band drawn directly **on the y-axis** showing the range. On the right is the **info panel** with two tabs.

Below the plot sits the **range card** — a colored block displaying the range in interval notation, the same range drawn on a horizontal 1D number line, and a draggable **test point slider** that lets you check whether a specific y-value is achievable as an output of $g$.

The page launches with the quadratic family. Its range is $y \\geq 0$ — the parabola never produces negative values. The y-axis band starts at $y = 0$ and extends upward; the test point at $y = 1$ shows a green "achievable" badge.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Picking a Function`,
      content: `The picker groups eleven base functions by the **shape of their range** rather than by algebraic type — a deliberate choice that makes the visualizer act as a reference for range classification:

• **Unrestricted ($\\mathbb{R}$)** — Identity, Linear (2x), Cubic, Logarithmic. All reach every real number as an output.
• **Bounded below** — Quadratic, Absolute, Square root (range $[0, \\infty)$), Exponential (range $(0, \\infty)$). Their outputs have a floor.
• **Bounded $[-1, 1]$** — Sine, Cosine. Periodic functions with a hard ceiling and floor.
• **Excluded point** — Reciprocal. Reaches every real number except $0$ — its horizontal asymptote.

Notice that logarithmic appears here under "Unrestricted" even though its *domain* is restricted to positive numbers. Domain and range are independent: a function can have a restricted domain and still produce every real number as output.

Click any entry to switch. Transformation parameters reset to defaults on every switch.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Why Only $a$ and $k$ Change the Range`,
      content: `Below the family list, four sliders apply the standard affine transformations:

• **$a$ — vertical scale**. Multiplies every output by $a$.
• **$k$ — vertical shift**. Adds $k$ to every output.
• **$b$ — horizontal scale**. Multiplies the input by $b$.
• **$h$ — horizontal shift**. Subtracts $h$ from the input.

A small "**affects range**" badge appears on the labels for $a$ and $k$ but not on $b$ or $h$. The reason is structural. The transformed function is $g(x) = a \\cdot f(b(x - h)) + k$. Reading right to left along the formula: $b$ and $h$ act on the input *before* $f$ runs, so they change *which* x produces each output — but the set of outputs $f$ can produce stays the same. Then $a$ scales those outputs and $k$ shifts them.

Drag $b$ or $h$ as wildly as you want — the y-axis band does not move. Drag $a$ or $k$ and the band immediately rescales and shifts. The visualizer makes this asymmetry visible in real time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Reading the Y-Axis Highlight and Range Bar`,
      content: `The range is shown in two coordinated places:

• **On the y-axis of the main plot** — a colored band traces the interval of achievable outputs directly on the axis, in the same coordinate system as the function. You can see which heights the blue curve actually reaches and which it skips. Open and closed endpoints render as hollow and filled circles, respectively; infinite extents render as arrows.

• **On a horizontal number line below the plot** — the same range interval is drawn flat, like a one-dimensional version of the y-axis. This rotates the y-axis 90 degrees so it sits in the more familiar number-line orientation and gives it more room for tick marks and labels.

The two views always agree. The number-line version is easier to read at a glance and easier to compare across screenshots; the y-axis version makes the geometric relationship between the function and its range unmistakable.

For excluded ranges like the reciprocal, both views mark the excluded value with a red ×, showing the hole in the range visually.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Probing with the Test Point Slider`,
      content: `Inside the range card sits a **test point slider** labeled "x = ..." (despite the label, it represents a y-value being tested as a potential output). Drag it from $-10$ to $+10$ along the range bar. As you move:

• The slider's thumb on the number line jumps to that position, with a vertical marker and a filled circle.
• A horizontal dashed reference line appears in the main plot at the corresponding $y$ value, drawn in the highlight color when the value is achievable and in red when it is not.
• Below the slider, an "**achievable**" or "**not achievable**" badge updates with the result: green for in-range, red for out-of-range.

The achievability check answers the question that defines the range itself: *does there exist any input $x$ such that $g(x)$ equals this $y$?* When the test point sits inside the colored band, the answer is yes — and the dashed line will cross the curve somewhere. Drag it outside the band, and the dashed line never touches the curve.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Range Card and Applied Chips`,
      content: `At the top of the range card, the **range in interval notation** is displayed as a monospace string — e.g., $y \\geq 0$, $-1 \\leq y \\leq 1$, $y \\neq 0$. This is the same string you would write on a homework assignment.

Below the plot, an **Applied** strip shows the four transformation parameter chips with their current values. The four chips are deliberately dimmed compared to other visualizers in the series; a separator and an "**a, k affect range**" callout to the right reinforce which parameters actually matter for this tool's question. Even though $b$ and $h$ are shown, they are visually de-emphasized — a visual reminder that they could be at any value and the range would still be the same.

The card's border color, header text, and accent badges all derive from the chosen highlight color, so the entire range UI reads as one coordinated block.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Customizing the Highlight Color`,
      content: `Under the family picker and parameter sliders, an **Appearance** section contains a single color swatch labeled "Range color". Click it to open a native color picker and choose any color you want for the range highlight, the range card chrome, the number-line band, and the dashed reference line.

The color cascades through several visual elements simultaneously:

• Y-axis highlight band in the plot
• Number-line fill below the plot
• Dashed horizontal reference line when the test point is achievable
• Range card border, header text, and "achievable" badge
• "Affects range" badges on the relevant parameter sliders

Changing the color is useful for matching the visualizer to a presentation slide deck or a printed worksheet, or simply for personal preference. The Reset button next to the section header returns the color to the default blue.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is the Range of a Function?`,
      content: `The **range** of a function is the set of all outputs it can produce — equivalently, the image of the domain under the function. If $y$ is in the range, then there exists at least one $x$ such that $f(x) = y$. If $y$ is not in the range, no input produces it.

Different function families have qualitatively different ranges:

• $x^2$ — always non-negative; the range is $[0, \\infty)$
• $e^x$ — always strictly positive; the range is $(0, \\infty)$
• $\\sin(x)$ and $\\cos(x)$ — always between $-1$ and $1$ inclusive
• $1/x$ — reaches every real number except $0$
• $x^3$, $\\ln x$, identity — reach every real number

Range is independent of domain. A function can have a tiny domain and reach every real number, or have an enormous domain and stay confined to a small interval. The natural logarithm illustrates both points at once: domain restricted to $x > 0$, range equal to all of $\\mathbb{R}$.

The range together with the domain fully characterizes the input-output behavior of a function. Together they answer "what goes in" and "what can come out."`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Open vs Closed Endpoints and Excluded Values`,
      content: `Three subtle distinctions show up in the visualizer's range bar:

• **Closed endpoint (filled circle)** — the boundary value is *reached*. Square root has range $y \\geq 0$ with a closed endpoint at $0$, because $\\sqrt{0} = 0$ exactly. The range bar shows a filled dot.

• **Open endpoint (hollow circle)** — the boundary value is *approached* but never reached. Exponential has range $y > 0$ with an open endpoint at $0$, because $e^x$ gets arbitrarily close to $0$ as $x \\to -\\infty$ but never equals $0$. The range bar shows a hollow dot.

• **Excluded value (red ×)** — the function reaches every value except one. Reciprocal has range $y \\neq 0$ — every nonzero real number is hit somewhere on the curve, but $0$ is the horizontal asymptote, never touched. The range bar shows a full fill broken by a small red × at the excluded value.

The distinction between open and closed endpoints is genuinely important in calculus and analysis: it determines whether the function attains its extreme values, whether continuity holds at the boundary, and whether a maximum or minimum exists.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Domain of a Function** — the partner concept showing which inputs are allowed. Use the companion domain visualizer to see how domain transformations work and why $b$ and $h$ (not $a$ and $k$) affect it — the mirror image of the rule shown here.

**Functions** — general theory of functions, including formal definitions of domain, range, and image.

**Function Transformations** — visualizer for $a$, $k$, $b$, $h$ alone, useful for separating the effects of each parameter before bringing range analysis on top.

**Functions Families Gallery** — gallery of the same eleven base functions plotted side by side, useful as a prerequisite for understanding what each curve looks like.

**Inverse Functions** — visualizer for reflecting a function across $y = x$. The range of $f$ becomes the domain of $f^{-1}$ — a fundamental duality that the inverse and domain/range tools together make concrete.

**Bounded Functions** — functions whose range fits inside an interval; the trigonometric examples in this visualizer are the canonical examples.

**Asymptotes** — horizontal asymptotes are values the function approaches but never reaches, and they are exactly the open endpoints and excluded values of the range. The reciprocal's $y = 0$ asymptote is a worked example.`,
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
      question: "What does the Range of a Function Visualizer do?",
      answer: "It draws the set of achievable outputs of a function — its range — directly on the y-axis of the plot and as a horizontal number line below it. Pick a base function from eleven families grouped by range shape, transform it with vertical scale, vertical shift, horizontal scale, and horizontal shift sliders, and the range updates in real time. A test point slider lets you check whether any specific y-value is achievable as an output."
    },
    obj2: {
      question: "Why do only a and k change the range?",
      answer: "The transformed function is g(x) = a · f(b(x − h)) + k. The parameters b and h act on the input before f runs — they change which x produces each output but not which outputs f itself can produce. Only a and k act on the output side: a scales every output and k shifts every output. Drag b or h freely and the y-axis range band stays put; drag a or k and the band immediately rescales and shifts."
    },
    obj3: {
      question: "What does the test point slider do?",
      answer: "Drag it to pick any y-value between -10 and +10. The visualizer answers whether that value is achievable as an output of g — that is, whether some input x produces g(x) equal to that y. A green achievable badge appears when yes, a red not-achievable badge appears when no. A horizontal dashed reference line is drawn in the main plot at the chosen y, showing whether it crosses the function curve."
    },
    obj4: {
      question: "What is the difference between an open and closed endpoint?",
      answer: "A closed endpoint, shown as a filled circle, means the boundary value is actually reached by the function. The square root function reaches y = 0 exactly. An open endpoint, shown as a hollow circle, means the boundary is approached but never reached. The exponential function approaches y = 0 but never touches it. The distinction matters for whether a function attains its extreme values."
    },
    obj5: {
      question: "How are the eleven base functions grouped in the picker?",
      answer: "They are grouped by the shape of their range. Unrestricted contains functions that reach all real numbers — identity, linear, cubic, and logarithmic. Bounded below contains functions with a floor — quadratic, absolute value, square root, exponential. Bounded between minus one and one contains sine and cosine. Excluded point contains the reciprocal, which reaches every real number except zero."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Range of a Function Visualizer",
      "description": "Interactive visualizer for the range of a function. Pick a base function, transform it, and see the set of achievable outputs drawn directly on the y-axis and as a number line.",
      "url": "https://www.learnmathclass.com/functions/visual-tools/range",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Eleven base functions grouped by range shape: unrestricted, bounded below, bounded between -1 and 1, and excluded point",
        "Four transformation sliders with badges marking which ones affect the range",
        "Range drawn directly on the y-axis of the main plot in the same coordinate system",
        "Horizontal number line below the plot for an alternative view of the range interval",
        "Test point slider that checks whether any chosen y-value is achievable as an output",
        "Open and closed endpoints rendered as hollow and filled circles",
        "Excluded values marked with a red cross for ranges with a single hole",
        "Customizable highlight color cascading through all range-related UI elements"
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
          "name": "Range of a Function",
          "item": "https://www.learnmathclass.com/functions/visual-tools/range"
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
        title: "Range of a Function Visualizer | Achievable Outputs",
        description: "Visualize the range of any transformed function on the y-axis. Drag a test point to check achievability and see why only a and k change the range.",
        keywords: keyWords.join(", "),
        url: "/functions/visual-tools/range",
        name: "Range of a Function Visualizer",
        hubDescription: "See the set of achievable outputs of any function drawn directly on the y-axis as a colored band, with a horizontal number line below the plot and a draggable test point that checks whether any specific y-value is reached. Pick from eleven base functions grouped by range shape and watch the range respond live to vertical scale and shift — while horizontal transformations leave it unchanged.",
        category: "Function Properties",
        subCategory: ""
      },
    }
  }
}


export default function RangeOfFunctionPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Range of a Function</h1>
      <br/>
      <FunctionRange/>
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