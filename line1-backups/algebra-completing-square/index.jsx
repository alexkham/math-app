// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import CompletingTheSquare from '../../../../app/components/algebra/visualizers/equations/CompleteTheSquare'



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
//         url: "/algebra/visual-tools/completing-square",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Completing the Square</h1>
//    <br/>
//    <CompletingTheSquare/>
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
import CompletingTheSquare from '../../../../app/components/algebra/visualizers/equations/CompleteTheSquare'


export async function getStaticProps(){

  const keyWords = [
    'completing the square',
    'completing the square calculator',
    'complete the square',
    'complete the square calculator',
    'vertex form calculator',
    'quadratic to vertex form',
    'completing the square method',
    'completing the square step by step',
    'visual completing the square',
    '(b/2)^2 formula',
    'quadratic vertex form',
    'completing the square examples',
    'solve quadratic by completing the square',
    'geometric completing the square',
    'perfect square trinomial calculator'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Completing the square** — a technique for rewriting a quadratic expression $ax^2 + bx + c$ as $a(x - h)^2 + k$, a perfect square plus a constant. Used to derive the vertex form, solve quadratics, and prove the quadratic formula.

**Vertex form** — the rewriting $y = a(x - h)^2 + k$ of a quadratic, in which the vertex of the parabola sits at the point $(h, k)$.

**Perfect square trinomial** — a trinomial of the form $x^2 + 2px + p^2$ that factors as $(x + p)^2$. Completing the square produces exactly this pattern inside the parentheses.

**The $(b/2)^2$ rule** — for the monic case $x^2 + bx + c$, the constant needed to complete the square is $(b/2)^2$. Geometrically, this is the area of the corner that turns the two half-strips into a full square.

**Vertex** — the turning point of a parabola: $(h, k)$ in vertex form. The minimum (if $a > 0$) or maximum (if $a < 0$) point of the quadratic.

**Discriminant connection** — the constant adjustment after completing the square is $c - b^2/(4a)$, which leads directly to the quadratic formula and the discriminant $b^2 - 4ac$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $x^2 + 6x + 5 = 0$ loaded as a default. You see:

• A **coefficient row** at the top with three number inputs labeled $ax^2 + bx + c = 0$.

• A row of **preset quadratics** below the inputs for quick exploration.

• A **geometric picture** that animates a square being built piece by piece.

• A **step-by-step solution** panel on the right with every step rendered at once; the current step is highlighted, the others are faded.

To explore:

• Edit any of the three coefficient inputs to change the quadratic.

• Click a preset button to load a curated example.

• Press **Next** or the auto-play button to advance through the stages.

• Click any step on the right panel to jump the diagram back to that stage.

The final box at the bottom of the right panel always shows the resulting vertex form and the coordinates of the vertex.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Entering Coefficients`,
      content: `The blue input row at the top is where you set the quadratic. Three editable fields for $a$, $b$, and $c$ in the standard form $ax^2 + bx + c = 0$:

• **$a$** — the leading coefficient. Defaults to $1$. The tool handles any nonzero value, including negative numbers and decimals. If $a \\neq 1$, an extra step appears that factors $a$ out of the $x^2$ and $x$ terms.

• **$b$** — the linear coefficient. This is the value that gets halved to find the side of the strips. The geometric diagram splits the $bx$ rectangle into two equal strips of size $x \\times b/2$.

• **$c$** — the constant. This is the value placed into the bottom-right corner of the partial square. Whether the corner is exactly filled, partially filled (gap), or overflowed (excess) depends on how $c$ compares to $(b/2)^2$.

Edits update the diagram and the step list immediately. There is no apply button.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Presets`,
      content: `Five preset buttons below the input row load curated quadratics chosen to show different cases of the completing-the-square procedure:

• **$x^2 + 6x + 5$** — the default. Monic, positive $b$, the constant is less than $(b/2)^2 = 9$, so the diagram shows a gap.

• **$2x^2 + 8x + 3$** — non-monic. Triggers the extra step that factors out $2$ from the $x$ terms.

• **$x^2 - 4x + 1$** — negative $b$. The half-strips are oriented the same way; the sign appears in the final $(x - 2)^2$ form.

• **$x^2 + 5x + 2$** — fractional $b/2 = 2.5$. Demonstrates that the method works for non-integer halves.

• **$3x^2 + 12x + 7$** — non-monic with positive leading coefficient. Combines factoring and a non-trivial gap.

Click any preset to load it; the inputs, diagram, and step list all refresh.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Geometric Diagram`,
      content: `The left-side **Geometric Picture** card animates the construction stage by stage. Each stage shows a different state of the square-in-progress:

• **Start** — three separate pieces appear side by side: a blue $x^2$ square, an orange $bx$ rectangle, and a green or red constant block for $c$.

• **Factor out $a$** (only when $a \\neq 1$) — a text card noting that the rest of the work happens on the monic part; the $a$ is restored at the end.

• **Place the $x^2$ square** — the blue square is positioned alone with both sides labeled $x$.

• **Split the $bx$ rectangle** — the orange rectangle is divided into two equal strips of width $b/2$ and length $x$, one placed to the right of the square and one below.

• **Drop $c$ into the corner** — the green block lands in the bottom-right corner where the two strips meet. A leader line points to a label noting that the corner needs $(b/2) \\times (b/2) = (b/2)^2$ to be complete.

• **The gap or excess** — if $c < (b/2)^2$, a pulsing red block highlights the missing area equal to $(b/2)^2 - c$. If $c > (b/2)^2$, an overflow note appears instead.

• **Complete the square** — the full $(x + b/2) \\times (x + b/2)$ square is shown with dimension bars on the outside and the final vertex-form equation below.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Step-by-Step Panel`,
      content: `The right pane lists every step of the solution at once. Each step has:

• A **number** in a blue circle on the left.

• A **title** like *Split the bx rectangle* or *Vertex form*.

• A short **explanation** of what is happening at this stage and why.

• A boxed **math line** showing the algebraic form of the expression at this stage.

The **current** step is fully visible with a thicker blue accent stripe; the other steps are faded and slightly blurred so the focus stays on what is happening now. The right pane auto-scrolls to keep the current step centered.

Clicking any step jumps both the diagram and the panel back to that stage. This makes it easy to scrub through the procedure: load a preset, click around the steps, study the geometric meaning of each algebraic move.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Animation Controls`,
      content: `Below the diagram, a strip of controls drives the animation:

• **← Back** — go to the previous step. Disabled at the first step.

• **Next →** — advance one step. Becomes **Done &check;** at the last step.

• **▶ Play / ⏸ Pause** — auto-advance through every step. The autoplay interval is about 2.4 seconds per step. Hitting Play after Done restarts from step 1.

• **↺ Restart** — reset to step 1 without losing the current quadratic.

• **Progress pips** — one tick per step. The current pip is highlighted blue and stretched wider; completed pips are lighter blue. Click any pip to jump directly to that step.

The controls don&apos;t affect the coefficients — only which step is being shown. Changing the coefficients automatically resets to step 1 and stops any autoplay.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Vertex Form Box`,
      content: `At the bottom of the right pane, a blue gradient box always displays the final vertex form for the current quadratic:

$$y = a(x - h)^2 + k$$

with the vertex coordinates $(h, k)$ shown in yellow accent text below. This box is faded until you reach the last step, then it activates at full opacity to mark completion.

What the numbers mean for the original parabola:

• **$h$** is the $x$-coordinate of the vertex: the value of $x$ where the parabola turns around.

• **$k$** is the $y$-coordinate of the vertex: the minimum value of the quadratic if $a > 0$, the maximum if $a < 0$.

• **$a$** controls the width and direction: positive $a$ opens upward, negative $a$ opens downward, larger $|a|$ makes a narrower parabola.

For solving the equation $ax^2 + bx + c = 0$, set the vertex form to zero and isolate $x$, which gives $x = h \\pm \\sqrt{-k/a}$ when $-k/a \\geq 0$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is Completing the Square`,
      content: `**Completing the square** is a technique for rewriting a quadratic expression so it contains an explicit perfect square. The general transformation is:

$$ax^2 + bx + c = a\\left(x + \\frac{b}{2a}\\right)^2 + c - \\frac{b^2}{4a}$$

The geometric intuition the tool visualizes: think of $x^2$ as a square with side $x$, and $bx$ as a rectangle with sides $x$ and $b$. Cut the rectangle into two equal strips of width $b/2$, place one to the right of the square and one below. The figure is almost a larger square of side $x + b/2$ — it&apos;s missing one small corner of area $(b/2)^2$. Adding and subtracting $(b/2)^2$ completes the picture.

Completing the square is the foundation of the **quadratic formula**: applying the procedure to the general $ax^2 + bx + c = 0$ produces $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ in a few algebraic steps.

For deeper coverage, see the **completing the square** section in the quadratics theory pages.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The (b/2)^2 Step`,
      content: `The central trick of the method is adding $(b/2)^2$ to complete the square inside the parentheses. Why this specific number?

Compare $x^2 + bx + ?$ to the expansion $(x + p)^2 = x^2 + 2px + p^2$. Matching the linear terms: $2p = b$, so $p = b/2$. Matching the constant: the constant must be $p^2 = (b/2)^2$.

So $(b/2)^2$ is the unique value that makes the trinomial a perfect square. If the original expression has a different constant $c$, you account for the gap or excess:

$$x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 + \\left(c - \\frac{b^2}{4}\\right)$$

For the general $ax^2 + bx + c$, first factor $a$ out of the $x^2$ and $x$ terms to get a monic expression inside parentheses, complete the square there, then redistribute. The constant adjustment becomes $c - b^2/(4a)$, which is exactly the $y$-coordinate of the parabola&apos;s vertex.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Quadratic formula** — derived directly by completing the square on the general $ax^2 + bx + c = 0$. Gives the roots $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.

**Discriminant** — the expression $b^2 - 4ac$ that appears under the square root in the quadratic formula. Determines whether the roots are real and distinct, repeated, or complex.

**Vertex form** — the rewriting $y = a(x - h)^2 + k$ that completing the square produces. Makes the vertex and axis of symmetry immediately readable.

**Standard form** — the alternative $y = ax^2 + bx + c$. Useful for identifying intercepts and applying the quadratic formula, less convenient for graphing the vertex.

**Factored form** — $y = a(x - r_1)(x - r_2)$, where $r_1$ and $r_2$ are the roots. Useful when the quadratic factors over the rationals; not always available.

**Parabola** — the graph of a quadratic. The vertex form makes its shape, vertex, and orientation directly visible.

**Algebra calculator** — for symbolic completion of the square on more complex expressions, see the dedicated **completing the square calculator** in the algebra calculators section.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj12: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj13: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj14: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    },
    obj15: {
      title: ``,
      content: ``,
      before: ``,
      after: ``,
      link: '',
    }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What does completing the square mean?",
      answer: "Completing the square is a technique that rewrites a quadratic expression in the form ax squared plus bx plus c as a perfect square plus a constant: a times (x minus h) squared plus k. The resulting expression is in vertex form, which makes the vertex of the parabola at the point (h, k) immediately readable, and which can be used to solve the quadratic equation directly."
    },
    obj2: {
      question: "What is the formula for completing the square?",
      answer: "For a monic quadratic x squared plus bx plus c, add and subtract (b divided by 2) squared. This produces (x plus b over 2) squared plus c minus (b squared over 4). For a non-monic quadratic with leading coefficient a not equal to 1, first factor a out of the x squared and x terms, complete the square inside the parentheses, then redistribute. The constant adjustment is c minus b squared over 4 a."
    },
    obj3: {
      question: "How do you complete the square when the leading coefficient is not 1?",
      answer: "Factor the leading coefficient a out of the x squared and x terms first, leaving the constant outside. This produces a times (x squared plus (b over a) times x) plus c. Inside the parentheses you now have a monic expression, so apply the standard (half of the coefficient of x) squared rule. After completing the square inside, distribute the factor a back through and combine constants."
    },
    obj4: {
      question: "How does completing the square give the vertex form of a parabola?",
      answer: "Completing the square turns ax squared plus bx plus c into a times (x minus h) squared plus k, where h equals minus b over 2 a and k equals c minus b squared over 4 a. This is exactly the vertex form. The point (h, k) is the vertex of the parabola: a minimum when a is positive, a maximum when a is negative. The axis of symmetry is the vertical line x equals h."
    },
    obj5: {
      question: "When should I use completing the square instead of the quadratic formula?",
      answer: "Use completing the square when you need the vertex form for graphing, when you want to find the maximum or minimum of a quadratic, or when you are deriving the quadratic formula itself. Use the quadratic formula when you only need the roots and the coefficients are unwieldy. Both methods always work; completing the square gives more structural information, the quadratic formula is faster for just numerical roots."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Completing the Square Calculator",
      "description": "Interactive tool that completes the square on any quadratic ax^2 + bx + c with a step-by-step animation, geometric construction, and live vertex form output.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/completing-square",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three coefficient inputs for a, b, and c in the standard form ax^2 + bx + c = 0",
        "Five preset quadratics covering monic, non-monic, fractional, and negative coefficient cases",
        "Animated geometric construction that builds the perfect square piece by piece",
        "Step-by-step solution panel with every step rendered and the current one highlighted",
        "Animation controls including step forward, step back, autoplay, restart, and clickable progress pips",
        "Live vertex form output with the vertex coordinates highlighted",
        "Click-to-jump navigation that lets you scrub between stages of the construction"
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
      "keywords": "completing the square, completing the square calculator, complete the square, complete the square calculator, vertex form calculator, quadratic to vertex form, completing the square method, completing the square step by step, visual completing the square, (b/2)^2 formula, quadratic vertex form, completing the square examples, solve quadratic by completing the square, geometric completing the square, perfect square trinomial calculator"
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Completing the Square Calculator",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/completing-square"
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
        title: "Completing the Square Calculator | Learn Math Class",
        description: "Complete the square for any quadratic ax^2 + bx + c. Watch the geometric square build step by step, then read off the vertex form and the solutions for x.",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/completing-square",
        name: "Completing the Square Calculator",
        hubDescription: "Enter any quadratic ax^2 + bx + c and watch the geometric square build piece by piece — the x^2 block, two (b/2)·x strips, and the corner that completes the square. Click through the steps or hit play to see the vertex form derived visually.",
        category: "Equations",
        subCategory: "Quadratic",
        svg:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- x² block (top-left, large square) -->
  <rect x="20" y="20" width="120" height="120" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="80" y="86" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-style="italic" font-weight="700" fill="#1e3a5f">x²</text>

  <!-- (b/2)x strip (top-right) -->
  <rect x="140" y="20" width="40" height="120" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>
  <text x="160" y="86" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-style="italic" font-weight="600" fill="#1e3a5f">
    <tspan>b</tspan>
    <tspan font-size="11" dy="-5">⁄</tspan>
    <tspan font-size="11" dy="5">2</tspan>
    <tspan dx="1">·x</tspan>
  </text>

  <!-- (b/2)x strip (bottom-left) -->
  <rect x="20" y="140" width="120" height="40" fill="#fde68a" stroke="#d97706" stroke-width="2.5"/>
  <text x="80" y="166" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-style="italic" font-weight="600" fill="#1e3a5f">
    <tspan>b</tspan>
    <tspan font-size="11" dy="-5">⁄</tspan>
    <tspan font-size="11" dy="5">2</tspan>
    <tspan dx="1">·x</tspan>
  </text>

  <!-- (b/2)² corner block (bottom-right, completing the square) -->
  <rect x="140" y="140" width="40" height="40" fill="#d1fae5" stroke="#059669" stroke-width="2.5"/>
  <text x="160" y="166" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700" fill="#065f46">
    <tspan>(</tspan>
    <tspan font-style="italic">b</tspan>
    <tspan font-size="11" dy="-5">⁄</tspan>
    <tspan font-size="11" dy="5">2</tspan>
    <tspan dx="1">)²</tspan>
  </text>
</svg>`
      },

    }
  }
}

export default function CompletingTheSquareCalculator({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [
        sectionsContent.obj0.content,
      ]
    },
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [
        sectionsContent.obj1.content,
      ]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [
        sectionsContent.obj2.content,
      ]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [
        sectionsContent.obj3.content,
      ]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [
        sectionsContent.obj4.content,
      ]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [
        sectionsContent.obj5.content,
      ]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [
        sectionsContent.obj6.content,
      ]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [
        sectionsContent.obj7.content,
      ]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [
        sectionsContent.obj8.content,
      ]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [
        sectionsContent.obj9.content,
      ]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Completing the Square</h1>
      <br/>
      <CompletingTheSquare/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
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