
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import EuclideanVisualizer from '../../../../app/components/arithmetic/visualizers/EuclideanVisualizer'


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
//         url: "/arithmetic/visual-tools/euclidean-algorithm",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Euclidean Algorithm</h1>
//    <br/>
//    <EuclideanVisualizer/>
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
import EuclideanVisualizer from '../../../../app/components/arithmetic/visualizers/EuclideanVisualizer'


export async function getStaticProps(){

  const keyWords = [
    'euclidean algorithm',
    'euclidean algorithm visualizer',
    'greatest common divisor',
    'gcd calculator',
    'gcd visualizer',
    'euclidean algorithm steps',
    'find gcd of two numbers',
    'division algorithm gcd',
    'interactive gcd',
    'gcd by repeated division',
    'euclidean algorithm example',
    'visualize gcd',
    'learn euclidean algorithm',
    'gcd remainder method',
    'gcd step by step',
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Open the page and a friendly banner appears at the top once you have two numbers entered. By default it launches with $a = 252$ and $b = 105$ — a classic textbook example where the greatest common divisor is $21$.

The visualizer has four main parts arranged top to bottom:

• **Input controls** — two number fields for $a$ and $b$, plus a Random pair button and five preset pairs
• **Result banner** — large purple number showing the GCD, with a plain-language sentence explaining what it means
• **Division chain** — a vertical stack of equations of the form $a = b \\cdot q + r$, each step shrinking the pair, with amber remainder pills and dashed arrows connecting each remainder to the next divisor
• **Steps list and legend** — a side panel listing every division as plain text, plus a color legend

A collapsible "How the Euclidean algorithm works" panel sits at the bottom for the underlying mathematical idea.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Entering Numbers and Using Presets`,
      content: `Type any two positive whole numbers into the $a$ and $b$ fields. The visualizer recomputes the entire chain instantly on every keystroke. If $a < b$, the algorithm internally swaps them — the larger of the two is always the first dividend.

For exploration without typing, three quick options live next to the input fields:

• **Random pair** — generates two random integers between 12 and 480 and runs the algorithm on them. Useful for sampling the variety of chain lengths that arise from different inputs.
• **Five preset pairs** — curated examples spanning easy and interesting cases: $(252, 105)$ giving GCD $21$, $(462, 198)$ giving $66$, $(1071, 462)$ giving $21$, $(56, 84)$ where one input divides the other, and $(35, 54)$ which are coprime (GCD $1$).

The presets are deliberately chosen to demonstrate the algorithm's qualitative behaviors: coprime cases that grind through many steps, divisor cases that finish in one step, and mid-sized examples that produce a satisfyingly visual chain of about 3–5 rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading a Division Row`,
      content: `Each row of the chain shows one application of the **division algorithm**:

$$\\text{dividend} = \\text{divisor} \\cdot \\text{quotient} + \\text{remainder}$$

Read left to right: the **dividend** is the larger of the current pair, the **divisor** is the smaller, the **quotient** is how many whole times the divisor fits into the dividend, and the **remainder** is what is left over.

The remainder is highlighted in an **amber pill** to draw the eye — it is the key piece that becomes the divisor of the *next* row. The final divisor, when the remainder finally hits zero, is shown in a **purple box** with a "gcd = N" callout below it. The terminating zero remainder appears as a dashed gray pill with an italic "stop" label, indicating that the algorithm has finished.

Every numerical field is rendered in monospace so the rows align vertically. The visual chain reads top to bottom as a step-by-step computation that the eye can follow without effort.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Following the Substitution Arrows`,
      content: `Between every pair of consecutive rows, a **dashed amber Bezier arrow** sweeps from the remainder pill of one row down to the divisor position of the next. This is the visual representation of the core algorithmic substitution:

$$\\text{new pair} = (\\text{old divisor}, \\text{old remainder})$$

The arrow makes the substitution concrete. You can literally see the number that was a remainder in row $i$ become the divisor in row $i + 1$, repeating until a remainder of zero finally appears. The whole algorithm is captured by that single recurring move.

The arrows are deliberately subtle by default — drawn in the same amber as the remainder pills — so they read as decoration when you scan but become useful when you study a particular step. Hovering a remainder darkens its arrow and turns it purple, making the connection unmistakable.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Hovering Remainders and Steps`,
      content: `Two coordinated hover interactions help you trace the algorithm:

• **Hover an amber remainder pill** — its arrow lights up in purple, and the divisor on the next row gets a purple ring around it. Both endpoints of the substitution glow together, letting you confirm which remainder becomes which divisor.
• **Hover an entry in the side Steps list** — the same row in the diagram lights up. Useful when you want to inspect a specific step from the textual summary without scrolling.

Both hover targets connect the textual representation (numbered list of equations on the right) to the graphical chain (the diagram in the center). Wherever your attention lands, the corresponding parts in the other view highlight automatically.

The hover state is also exposed as a native browser tooltip on the SVG elements, so screen readers and accessibility tools can convey the substitution relationship in plain text.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `The Result Banner and GCD Callout`,
      content: `Above the diagram, a purple banner shows the result in three forms simultaneously:

• A large **standalone number** — the GCD itself, in big bold purple
• A **monospace equation** — $\\gcd(a, b) = N$ in the canonical mathematical form
• A **plain-language sentence** — "The largest number that divides both $a$ and $b$ evenly is $N$ (found in $k$ steps)"

The triple presentation is deliberate. The standalone number is for someone who just wants the answer. The equation is for someone copying the result into a homework problem. The sentence is for a beginner first encountering the concept and needing to know what "greatest common divisor" actually means.

Below the diagram, the final divisor — the GCD — appears in a purple-bordered box with a callout line and the label "gcd = N" beneath it. This visual punctuation marks the chain's endpoint and connects the diagram back to the banner.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `What Is the Greatest Common Divisor?`,
      content: `The **greatest common divisor** (GCD) of two integers is the largest integer that divides both of them with no remainder. Equivalently, it is the largest member of their common set of divisors.

For small numbers, you could find the GCD by listing every divisor of each number and picking the biggest one they share. For example:

• Divisors of $12$: $1, 2, 3, 4, 6, 12$
• Divisors of $18$: $1, 2, 3, 6, 9, 18$
• Common divisors: $1, 2, 3, 6$
• Greatest common divisor: $\\gcd(12, 18) = 6$

This naive approach works but becomes slow for large numbers. The Euclidean algorithm — the method visualized here — finds the GCD without ever listing divisors. For $\\gcd(252, 105)$ it takes only three division steps, regardless of how many divisors $252$ and $105$ actually have.

The GCD is foundational for simplifying fractions, modular arithmetic, and number theory. Two numbers with GCD equal to $1$ are called **coprime** — they share no common factors and are in some sense "as different as possible" multiplicatively.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why the Algorithm Works`,
      content: `The Euclidean algorithm rests on a single mathematical fact, older than algebra itself:

$$\\gcd(a, b) = \\gcd(b, a \\bmod b)$$

In words: the greatest common divisor of two numbers stays the same if you replace the larger number with its remainder after division by the smaller. This is the **invariant** that the algorithm preserves at every step.

The argument is short. Any common divisor of $a$ and $b$ also divides $a - q \\cdot b = r$, so it is a common divisor of $b$ and $r$ as well. Going the other way, any common divisor of $b$ and $r$ divides $b \\cdot q + r = a$, so it is a common divisor of $a$ and $b$. The two pairs have *exactly the same* set of common divisors, hence the same greatest common divisor.

The algorithm terminates because every step strictly decreases the smaller of the two numbers. A strictly decreasing sequence of non-negative integers must eventually reach zero. When it does, the partner — the last nonzero remainder — is the GCD, because $\\gcd(d, 0) = d$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Special Cases and Corner Behavior`,
      content: `A few input patterns produce notably short or long chains:

• **One number divides the other** — try the preset $(56, 84)$. The first division gives $84 = 56 \\cdot 1 + 28$, then $56 = 28 \\cdot 2 + 0$, and the algorithm stops at GCD $28$ after just two steps. Whenever the smaller number is a divisor of the larger, the chain terminates in one or two rows.

• **Coprime numbers** — try the preset $(35, 54)$. The GCD is $1$, and the chain works through several reductions before finally hitting a remainder of $1$ and then $0$. Coprime pairs tend to produce the *longest* chains relative to the size of the numbers.

• **Consecutive Fibonacci numbers** — try entering, e.g., $89$ and $144$. These pairs produce the absolute worst-case behavior of the algorithm and the longest chains for their magnitude. The reason is built into the recursive definition of Fibonacci numbers themselves.

• **Equal numbers** — entering the same number twice gives a one-step chain ending immediately at the GCD, which is that number.

Running the algorithm on a few of these intentionally extreme cases gives a feel for how the input size relates to the chain length — and why the Euclidean algorithm is considered remarkably efficient even on enormous inputs.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `**Greatest Common Divisor** — the mathematical concept the visualizer computes; the theoretical companion page to this tool.

**Least Common Multiple (LCM)** — the dual concept, related to the GCD by $\\text{lcm}(a, b) = a \\cdot b / \\gcd(a, b)$.

**Division Algorithm** — the basic theorem that for any positive integers $a$ and $b$, there exist unique $q$ and $r$ with $0 \\leq r < b$ such that $a = b \\cdot q + r$. Every row of the visualizer is one application of this.

**Coprime Integers** — pairs with GCD equal to $1$; foundational for modular arithmetic and number theory.

**Prime Factorization** — an alternative route to the GCD via factoring both numbers and multiplying their shared prime powers. Slower for large numbers than the Euclidean algorithm but more transparent for small ones.

**Bezout's Identity** — the extended Euclidean algorithm finds integers $x$ and $y$ such that $ax + by = \\gcd(a, b)$. A natural follow-up tool to this one.

**Modular Arithmetic** — the GCD underlies which numbers are invertible modulo $n$ and is the foundation of many cryptographic schemes.

**Fibonacci Numbers** — the worst-case inputs for the Euclidean algorithm, related to it through deep recursive structure.`,
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
      question: "What does the Euclidean Algorithm Visualizer do?",
      answer: "It computes the greatest common divisor of any two positive integers and displays every step of the calculation. Each row of the visual chain is one division equation of the form dividend equals divisor times quotient plus remainder. Amber pills mark the remainders, dashed arrows show each remainder becoming the next divisor, and the final divisor is boxed in purple as the GCD."
    },
    obj2: {
      question: "What is the greatest common divisor?",
      answer: "The greatest common divisor of two integers is the largest integer that divides both of them with no remainder. For example, the GCD of 12 and 18 is 6, because 6 divides both numbers and no larger integer does. The GCD is foundational for simplifying fractions, modular arithmetic, and number theory."
    },
    obj3: {
      question: "Why does the Euclidean algorithm work?",
      answer: "The algorithm relies on the fact that the GCD of two numbers equals the GCD of the smaller one and the remainder after dividing the larger by the smaller. Replacing the pair this way preserves the set of common divisors and therefore the greatest one. Each step also strictly decreases the smaller number, so the process eventually reaches zero, at which point the partner number is the answer."
    },
    obj4: {
      question: "What do the dashed arrows in the diagram represent?",
      answer: "Each dashed arrow shows the core substitution of the algorithm. The remainder on one row becomes the divisor on the next row. Following the arrows top to bottom is following the algorithm's recursion visually. Hovering any remainder pill darkens its arrow and highlights its destination divisor with a purple ring."
    },
    obj5: {
      question: "Which inputs produce the longest chains?",
      answer: "Consecutive Fibonacci numbers produce the worst-case behavior of the Euclidean algorithm — the longest chains relative to the size of the numbers involved. Coprime pairs (GCD equal to 1) also tend to produce longer chains than non-coprime pairs of similar size, since the algorithm has to grind all the way down to a remainder of 1 before terminating."
    },
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Euclidean Algorithm Visualizer",
      "description": "Interactive visualizer for the Euclidean algorithm. Compute the greatest common divisor of any two positive integers and watch every division step.",
      "url": "https://www.learnmathclass.com/arithmetic/visual-tools/euclidean-algorithm",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two number inputs with instant recomputation on every keystroke",
        "Random pair button and five curated preset pairs covering easy, hard, and coprime cases",
        "Vertical chain of division equations with amber remainder pills and dashed substitution arrows",
        "Result banner displaying the GCD as a number, an equation, and a plain-language sentence",
        "Hover coordination between remainder pills and numbered steps list",
        "Native tooltips on every diagram element for accessibility",
        "Collapsible explainer covering the invariant that proves the algorithm correct"
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
      "educationalLevel": "Middle School, High School, College",
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
          "name": "Arithmetic",
          "item": "https://www.learnmathclass.com/arithmetic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Euclidean Algorithm",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools/euclidean-algorithm"
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
        title: "Euclidean Algorithm Visualizer | Find the GCD Step by Step",
        description: "Visualize the Euclidean algorithm for any two numbers. Watch each division step reduce the pair until the greatest common divisor emerges as the last divisor.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools/euclidean-algorithm",
        name: "Euclidean Algorithm Visualizer",
        hubDescription: "Enter two positive integers and watch the Euclidean algorithm compute their greatest common divisor as a vertical chain of division equations. Amber remainder pills, dashed substitution arrows, and a purple GCD callout make every step of the algorithm's recursion visible. Random pair button and five curated presets cover coprime, divisor, and mid-complexity cases.",
        category: "",
        subCategory: ""
      },
    }
  }
}


export default function EuclideanAlgorithmPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Euclidean Algorithm</h1>
      <br/>
      <EuclideanVisualizer/>
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