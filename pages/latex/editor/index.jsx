// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import LatexEditorLive from '../../../app/components/keyboards/latex-editor/LatexEditorLive'



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
//         url: "/latex/editor",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Latex Editor</h1>
//    <br/>
//    <div style={{width:'80%', margin:'auto'}}>
//       <LatexEditorLive/>
//       </div> 
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
import LatexEditorLive from '../../../app/components/keyboards/latex-editor/LatexEditorLive'



export async function getStaticProps(){

  const keyWords = [
    'latex editor',
    'latex formula builder',
    'interactive latex editor',
    'online latex editor',
    'visual latex editor',
    'mathlive editor',
    'latex symbol palette',
    'latex equation builder',
    'multi-line latex editor',
    'write latex online',
    'latex math editor',
    'equation editor latex',
    'latex generator',
    'learn latex',
    'latex calculator',
  ]


    const sectionsContent={

    obj0:{
      title:`Key Terms`,
      content:`**LaTeX** - A typesetting system for mathematics and technical writing. Math expressions are written as plain text using backslash-prefixed commands.

**Math Field** - The editable region that renders LaTeX as formatted mathematics in real time. Backed by MathLive in this editor.

**Symbol Palette** - The grid of buttons grouped by category (basic, Greek, calculus, sets, matrices, and more) that insert LaTeX snippets into the active line.

**Active Line** - The currently focused equation line, highlighted in blue. Buttons and caret commands act on this line only.

**Placeholder Slot** - The shaded box that appears after inserting a template like a fraction. Type to fill it, or press Tab to move to the next slot.

**LaTeX Source** - The combined plain-text LaTeX for all lines, joined with double-backslash line breaks. The source updates live and copies to clipboard with one click.`,
      before:``,
      after:``,
      link:'',
    },
    obj1:{
      title:`Getting Started`,
      content:`The editor opens with one empty equation line ready for input. Click anywhere inside the math field to set focus, then start typing or click a symbol button.

**Three input paths:**
• Type directly. Standard letters, numbers, and operators (+, -, =, /, *) work as expected.
• Click any symbol button to insert that LaTeX snippet at the caret. Templates with empty slots (like fractions and roots) drop a placeholder you can fill immediately.
• Mix both freely. Type a variable, click the fraction button, type the numerator, press Tab, type the denominator.

**The active line.** Only one line receives input at a time. Its row is outlined in blue. Click any other line to switch focus. Symbol buttons always insert into the active line, never into a row you can see but haven't clicked.

The footer below the lines area always shows the **+ Add line** button, even when the lines scroller is full.`,
      before:``,
      after:``,
      link:'',
    },
    obj2:{
      title:`Choosing a Symbol Category`,
      content:`The category strip above the keyboard groups symbols into related sets. Click any category to swap the visible button grid; the active category is highlighted in blue.

**Common category types:**
• **Basic** - Common operators, equals variants, fractions, exponents, and parentheses.
• **Greek** - Lowercase and uppercase Greek letters used throughout mathematics and physics.
• **Calculus** - Integrals, derivatives, limits, partial derivatives, and series notation.
• **Sets and logic** - Set builder, union, intersection, quantifiers, and logical connectives.
• **Matrices** - Bracket and parenthesis matrix templates of various sizes.
• **Relations and arrows** - Inequalities, approximations, mappings, and directional arrows.

Hover any button to see its name and a short description in a tooltip. The category palette is searchable visually - if you cannot remember which category holds a symbol, scan the grids until you spot it.`,
      before:``,
      after:``,
      link:'',
    },
    obj3:{
      title:`Inserting Symbols and Templates`,
      content:`Two kinds of buttons sit in the palette: **plain inserts** and **templates with slots**.

**Plain inserts** drop a single character or command at the caret. Example: clicking the Greek alpha button inserts the Greek letter alpha exactly where the cursor sits.

**Templates with slots** drop a structure with one or more empty placeholders. Example: clicking the fraction button inserts a fraction structure, focuses the numerator slot, and waits for input. Press Tab to jump to the denominator, or click the denominator directly.

**Slot navigation tips:**
• Tab moves forward through slots in the inserted template.
• Shift-Tab moves backward.
• Clicking inside any slot focuses it directly.
• Typing inside an empty slot fills it; the placeholder disappears.

**Nesting.** Templates compose freely. Insert a square root inside a fraction's numerator, an integral whose bounds are themselves fractions, a matrix whose entries are exponential expressions - the editor handles arbitrary depth.`,
      before:``,
      after:``,
      link:'',
    },
    obj4:{
      title:`Managing Multiple Equation Lines`,
      content:`The editor supports any number of equation lines, each independently editable. Lines are numbered down the left margin.

**Per-line controls** (right side of each row):
• **Up arrow** - Move this line one position higher.
• **Down arrow** - Move this line one position lower.
• **Amber circular arrow** - Clear the contents of this line, keeping the row in place.
• **Red times** - Remove this line entirely. Disabled when only one line remains.

**Adding lines.** Click **+ Add line** in the footer (always visible, even when the lines scroller is full) to append a new empty line at the end. To insert a new line right after the current one, click the curly-return navigation button in the action bar.

**Scrolling.** When you have more than six lines, the lines area scrolls vertically. The scrollbar is hidden visually but scrolling works as usual with mouse wheel, trackpad, touch, or keyboard.

The combined LaTeX source below joins all lines with a double-backslash, the standard LaTeX line break inside math environments.`,
      before:``,
      after:``,
      link:'',
    },
    obj5:{
      title:`Caret Navigation and Editing`,
      content:`Four action buttons sit below the source area for editing the active line without using the keyboard.

**Left arrow** - Move the caret one position to the left. Works through nested structures: when the caret reaches the boundary of a fraction's numerator slot, the next left press takes it out of the fraction entirely.

**Right arrow** - Move the caret one position to the right, with the same nested-structure traversal.

**Backspace icon** - Delete the character immediately before the caret. Holding the keyboard Backspace key does the same. When the caret sits at the start of a template, pressing backspace removes the surrounding structure.

**Curly return** - Insert a new equation line right below the current one and focus the new line.

**Clear all** (red button) - Wipe every line and start over with a single empty line. This is destructive and cannot be undone, so confirm the source has been copied first if you need it.

Keyboard shortcuts (arrow keys, Home, End, Tab) work as expected inside any math field.`,
      before:``,
      after:``,
      link:'',
    },
    obj6:{
      title:`Copying the LaTeX Source`,
      content:`Below the lines area sits the **LaTeX Source** panel, which shows the combined source for all lines as plain text.

**How the combined source is built.** Each line's individual LaTeX is concatenated with a double-backslash separator and a newline. This matches the convention for multi-line equations inside LaTeX environments like align, gather, and array. Pasting the result into a LaTeX document inside such an environment renders the equations correctly.

**The Copy button** in the top-right of the source panel writes the entire source to the system clipboard. The button briefly turns green and reads **Copied!** to confirm. After a few seconds it reverts to its normal state, ready to copy again.

**Manual copy.** If clipboard access is blocked (some browsers require user interaction or a secure context), select the source text and copy with Ctrl-C or Cmd-C.

**Source format.** The source is canonical LaTeX with no extra markup, ready for direct paste into MathJax, KaTeX, Overleaf, Authorea, or any standard LaTeX document.`,
      before:``,
      after:``,
      link:'',
    },
    obj7:{
      title:`What is LaTeX?`,
      content:`LaTeX is a typesetting system for mathematics, science, and technical writing. Created by Leslie Lamport in the 1980s on top of Donald Knuth's TeX, it became the dominant format for scientific publishing.

**The core idea.** Math is written in plain text using backslash-prefixed commands. The fraction one over two is written as backslash-frac{1}{2}. The integral from zero to one of x squared dx is written as backslash-int_0^1 x^2 dx. The source is portable, version-controllable, and readable by humans and machines alike.

**Why it matters.** Equation typesetting in word processors is slow and fragile across platforms. LaTeX produces consistent, publication-quality output and is the standard format expected by journals, textbooks, and academic websites.

**Where this editor fits.** Writing LaTeX by hand requires memorizing dozens of commands. A visual editor like this one lets you build expressions by clicking and see the rendered result in real time, then copy the source when ready.`,
      before:``,
      after:``,
      link:'',
    },
    obj8:{
      title:`Common LaTeX Patterns`,
      content:`A small set of patterns covers most everyday math typesetting.

**Subscripts and superscripts.** Use underscore for subscript and caret for superscript: x_1 for x with subscript 1, x^2 for x squared. For multi-character subscripts, wrap in braces: x_{ij}.

**Fractions.** backslash-frac{numerator}{denominator}. Nested fractions work the same way - put another backslash-frac inside.

**Square roots and nth roots.** backslash-sqrt{x} for square root, backslash-sqrt[n]{x} for the nth root. The optional argument in brackets sets the index.

**Greek letters.** Lowercase Greek is backslash-letter-name: backslash-alpha, backslash-beta, backslash-pi. Uppercase Greek capitalizes the first letter: backslash-Gamma, backslash-Sigma.

**Sums and integrals.** backslash-sum for sigma, backslash-int for integral. Limits go on the operator as subscript and superscript: backslash-sum_{i=1}^{n} or backslash-int_0^infinity.

**Matrices.** Inside a pmatrix or bmatrix environment, use ampersand to separate columns and double-backslash to separate rows.

These six patterns plus a handful of operators cover the vast majority of practical needs.`,
      before:``,
      after:``,
      link:'',
    },
    obj9:{
      title:`Workflow Tips`,
      content:`A few practices that save time when working with the editor.

**Build big expressions in pieces.** Insert the outer structure first - the fraction, the integral, the matrix - then fill the inner slots. This is faster than typing a long string and trying to wrap it later.

**Use multiple lines for multi-step derivations.** Each step of an algebraic manipulation goes on its own line. Reorder freely with the up and down arrows. The combined source is ready to paste into an align environment.

**Copy frequently.** The Copy button writes the entire source to clipboard. Use it as a checkpoint - copy after each major addition so you have a snapshot in case you need to revert.

**Hover before clicking.** Tooltips on every button explain what each symbol does. Hovering for a moment costs less than inserting the wrong symbol and deleting it.

**Clear, don't delete.** The amber per-line clear button empties a line without removing the row, keeping your line numbering stable. Use the red times only when you actually want fewer lines.`,
      before:``,
      after:``,
      link:'',
    },
    obj10:{
      title:`Related Tools`,
      content:`**Math Symbols Reference** - Catalogs of LaTeX command names organized by topic. Useful when you know the symbol's visual shape but cannot recall its command name.

**Formula Pages** - Domain-specific formula collections (algebra, probability, calculus) where each formula is rendered alongside its LaTeX source. Browse for patterns you can copy and adapt.

**Definition Glossaries** - Mathematical-term glossaries where each entry shows the standard notation. Pair with this editor when you need to write something you have only seen rendered, not coded.

**KaTeX and MathJax** - Two open-source LaTeX-to-HTML renderers used by educational and publishing sites. The source from this editor pastes directly into either system without modification.

**Overleaf** - An online LaTeX document editor for full papers, articles, and books. The math source from this editor copies into Overleaf documents inside align or equation environments.`,
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
      question: "What is the LaTeX Editor?",
      answer: "The LaTeX Editor is a visual tool for building LaTeX math expressions by clicking symbol buttons. Each line is an independent equation, rendered live in a math field. The combined LaTeX source updates in real time and copies to the clipboard with one click."
    },
    obj2: {
      question: "How do you insert a LaTeX symbol?",
      answer: "Click anywhere in the active equation line to set focus, then click any symbol in the palette. Plain symbols drop a single character or command. Templates like fractions and square roots insert a structure with empty slots that you fill by typing, pressing Tab to move between slots."
    },
    obj3: {
      question: "How do you build multi-line equations?",
      answer: "Click +Add line in the footer to append a new line, or click the curly-return button in the action bar to insert a line right after the current one. Each line is independently editable. The up and down arrows on each row reorder lines, and the combined source joins all lines with the standard double-backslash line break."
    },
    obj4: {
      question: "How do you copy the LaTeX source?",
      answer: "Click the blue Copy button at the top-right of the LaTeX Source panel. The button briefly turns green and reads Copied to confirm. The clipboard receives the canonical LaTeX text for all lines, ready to paste into Overleaf, MathJax, KaTeX, or any LaTeX document inside an align or equation environment."
    },
    obj5: {
      question: "What categories of symbols does the editor support?",
      answer: "The palette is grouped into categories including basic operators, Greek letters, calculus (integrals, derivatives, limits), sets and logic, matrices, relations, and arrows. Click any category to swap the visible button grid. Hover any button to see its name and a short description in a tooltip."
    }
  }


  const schemas = {

    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive LaTeX Editor",
      "description": "Build LaTeX formulas visually: click symbols to insert fractions, roots, integrals, Greek letters, and matrices across multiple equation lines. Copy source.",
      "url": "https://www.learnmathclass.com/latex/editor",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Live MathLive-powered equation field with click-to-insert symbol palette",
        "Categorized symbol grid with tooltips for every button",
        "Multi-line editor with reorder, clear, and remove controls per line",
        "Combined LaTeX source panel with one-click copy to clipboard",
        "Caret navigation, backspace, and line-insert action buttons",
        "Nested template support for fractions inside roots inside matrices",
        "Source compatible with Overleaf, MathJax, KaTeX, and LaTeX documents"
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
      "keywords": "latex editor, latex formula builder, interactive latex editor, online latex editor, visual latex editor, mathlive editor, latex symbol palette, latex equation builder, multi-line latex editor, write latex online, latex math editor, equation editor latex, latex generator, learn latex, latex calculator"
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
          "name": "LaTeX",
          "item": "https://www.learnmathclass.com/latex"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "LaTeX Editor",
          "item": "https://www.learnmathclass.com/latex/editor"
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
         faqQuestions,
         schemas,
          seoData: {
        title: "LaTeX Editor: Build Formulas Visually | Learn Math Class",
        description: "Build LaTeX formulas visually: click symbols to insert fractions, roots, integrals, Greek letters, and matrices across multiple equation lines. Copy source.",
        keywords: keyWords.join(", "),
        url: "/latex/editor",
        name: "Interactive LaTeX Editor",
        hubDescription: "Click symbols to compose LaTeX formulas in a live math field - fractions, roots, integrals, matrices, Greek letters - across multiple equation lines that join automatically. Hover any button for a short description. The combined source updates in real time and copies to clipboard with one click.",
        category: "LaTeX",
        subCategory: "Editors",
      },

       }
    }
   }

export default function LatexEditorPage({seoData, sectionsContent, faqQuestions, schemas}) {


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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Latex Editor</h1>
   <br/>
   <div style={{width:'80%', margin:'auto'}}>
      <LatexEditorLive/>
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