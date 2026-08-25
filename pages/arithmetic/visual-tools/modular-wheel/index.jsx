
// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import ModPieWheel from '../../../../app/components/arithmetic/visualizers/ModPieWheel'


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
//         url: "/arithmetic/visual-tools/modular-wheel",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Modular Wheel</h1>
//    <br/>
//    <div style={{transform:'scale(0.9)'}}>
//    <ModPieWheel/>
//    </div>
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
import ModPieWheel from '../../../../app/components/arithmetic/visualizers/ModPieWheel'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import modPieWheelDiagrams from '@/app/components/arithmetic/visualizers/modPieWheelDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'modular arithmetic',
    'modular arithmetic visualizer',
    'mod n calculator',
    'remainder classes',
    'a mod n',
    'clock arithmetic',
    'modulus operator',
    'congruence modulo n',
    'equivalence classes mod n',
    'zero class principal',
    'Z mod nZ visualization',
    'modulo wheel',
    'integers grouped by remainder',
    'modular arithmetic interactive',
    'remainder visualizer'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Modular arithmetic** — arithmetic on remainders. Given a divisor (or modulus) $n$, every integer is replaced by its remainder when divided by $n$, an integer in the range $\\{0, 1, \\dots, n - 1\\}$.

**Modulus / divisor $n$** — the integer you divide by. On this tool, $n$ ranges from $2$ to $9$ (the slice count).

**Remainder** — the leftover after integer division. For $a = qn + r$ with $0 \\leq r < n$, the remainder is $r$, written $a \\bmod n = r$.

**Congruence $a \\equiv b \\pmod n$** — read *$a$ is congruent to $b$ modulo $n$*. True when $a$ and $b$ leave the same remainder when divided by $n$, equivalently when $n$ divides $a - b$.

**Equivalence class / residue class** — the set of all integers sharing the same remainder. There are exactly $n$ classes mod $n$, labeled $[0], [1], \\dots, [n - 1]$.

**Zero class (principal class)** — the class $[0]$, containing $0$ and all multiples of $n$. It's the identity element of the ring $\\mathbb{Z}/n\\mathbb{Z}$ and corresponds to the principal ideal $n\\mathbb{Z}$. The tool highlights this class with a [gold star and warm color](!#the-zero-class-why-its-special).

**$\\mathbb{Z}/n\\mathbb{Z}$** — the integers mod $n$, the set of $n$ equivalence classes with addition and multiplication inherited from $\\mathbb{Z}$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with divisor $n = 6$ and a count target of $36$. The scene splits into three areas:

• A **control panel** on the left with inputs for the count target, the divisor (a button grid for $n = 2$ through $9$), a speed slider, and Run / Stop / Reset buttons.

• A **circular wheel** in the middle, divided into $n$ equal slices. Each slice is one remainder class. The [zero class](!#the-zero-class-why-its-special) sits at the top (12 o'clock) marked with a gold star ★.

• A **context panel** on the right that [switches modes](!#right-panel-context) depending on what's happening: an *overview* before running, a *now placing* log while running, a *class details* card when you hover or pin a slice, and a *run complete* summary at the end.

To run:

• **Set the count target** — the number of integers to sort (1 through that target).

• **Pick a divisor** in the grid.

• **Press ▶ Run** — numbers $1, 2, 3, \\dots$ appear one at a time, each placed in its remainder slice with rows filling outward from the center.

• **Hover or click a slice** to see its formula, examples, and any numbers already placed there.

• **Reset** to clear and try a different combination.`,
      before: ``,
      after: `The frozen frame above is the idle wheel: six empty slices around the mod 6 hub, structure without content. Even empty, it already says something — the modulus alone fixes how many classes exist, before a single number is sorted.

Idle is also the state to read the geometry in: slice labels outside, row arcs faint inside, and the starred zero slice at twelve o'clock. Once Run is pressed, the [wheel anatomy](!#the-wheel-and-slices) fills in exactly these positions.`,
      link: '',
    },

    obj2: {
      title: `The Wheel and Slices`,
      content: `The wheel divides a circle into $n$ equal slices, one per [remainder class](!#equivalence-classes-and-their-structure). Five things to watch:

• **Slice labels** outside each slice show the remainder value: $0$ at the top, then $1, 2, \\dots, n - 1$ going clockwise.

• **Slice colors** use a blue palette so the [zero class](!#the-zero-class-why-its-special) can stand apart. The zero slice has a warmer fill and a thin gold accent arc along its outer edge.

• **Rows** within each slice run from the center outward — row $1$ is closest to the center, row $2$ above it, and so on. Each row holds the next occurrence of that class.

• **Numbers in cells** are drawn rotated so they always read upright relative to the slice they sit in. A label like *36* in slice $0$ row $6$ tells you $36 = 6 \\cdot 6 + 0$, the sixth multiple of $6$.

• **Center label** shows *mod $n$* — the modulus currently in effect.

Cells are placed in real time as the run progresses. The geometry adapts to the available width: bigger screens get a larger wheel with taller rows; smaller screens compress the row height. The control panel shows a max-count cap for the current divisor — going beyond it would make labels unreadable.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Run Controls and Speed`,
      content: `The control panel offers three transport actions and a speed slider:

• **▶ Run** — starts placing numbers from $1$ up to the count target, one per tick. Disabled while the input is invalid (empty, non-numeric, below $1$, or above the geometric max).

• **⏹ Stop** — halts placement at the current number. The wheel keeps what's there; press Run again to start fresh from $1$.

• **Reset** — clears all placed cells, unpins any class, and restores the idle state.

• **Speed slider** with tortoise 🐢 and hare 🐇 markers controls the tick delay. The tick interval is roughly $\\max(20, 400 - 35 \\cdot \\text{speed})$ milliseconds — at speed $1$ each number takes about $365$ ms; at speed $10$ each takes about $50$ ms.

While running, the right panel switches into [*now placing* mode](!#right-panel-context) and shows live arithmetic for the most recent number: $n \\div d = q$ remainder $r$, and which slice and row it just landed in. Numbers in the zero class get extra emphasis to call out the divisibility.`,
      before: ``,
      after: `The frozen frame above catches a run mid-flight: seventeen numbers placed, and the log reporting $17 \\div 6 = 2$ remainder $5$ — so 17 has just landed in class 5, row 3. Rows count occurrences: 17 is the third number (after 5 and 11) to leave remainder 5.

Watching a few ticks makes the rhythm obvious: the placement simply walks around the wheel, one slice clockwise per number, wrapping back to the starred slice at every multiple. That steady rotation is the additive structure of [equivalence classes](!#equivalence-classes-and-their-structure) in motion.`,
      link: '',
    },

    obj4: {
      title: `Hovering and Pinning Classes`,
      content: `Every slice on the wheel is interactive:

• **Hover** any slice — a floating tooltip appears showing the class title, formula, description, and example numbers. The right panel simultaneously switches into *class details* mode with the same information plus the list of numbers already placed in that class.

• **Click** to pin the class — the tooltip stays put, the slice darkens slightly, and the right panel keeps showing details until you click somewhere else (or click the same slice again to unpin).

• **Click anywhere outside any slice** to clear the pin.

The tooltip layout adapts to viewport edges — it flips to the left of the cursor when too close to the right edge and above when too close to the bottom. Pinned tooltips show a *📌 Pinned* indicator at the bottom; hover-only tooltips show *Tap to pin*.

The class details panel includes:

• The formula — $n = nk$ for class $0$, or $n = nk + r$ for class $r$.

• A list of first $8$ examples of [integers in the class](!#equivalence-classes-and-their-structure).

• A *Placed so far* block listing every number from the current run that landed in this class, if any.`,
      before: ``,
      after: `The frozen frame above has class 2 pinned after a full run of 36: the darkened slice holds 2, 8, 14, 20, 26, 32 — six numbers, each exactly six apart. Pinning turns one wedge of the wheel into a statement: this is a single residue class, an arithmetic progression wrapped into a slice.

Pinning is also the way to compare classes: pin one, read its members, then pin its neighbor and watch every number shift by exactly one. The only slice that answers differently is the starred one — see [the zero class](!#the-zero-class-why-its-special).`,
      link: '',
    },

    obj5: {
      title: `The Zero Class — Why It's Special`,
      content: `Class $[0]$ — the multiples of $n$ — gets special visual treatment: it's centered at $12$ o'clock, marked with a gold star ★, outlined with a warm-gold accent arc, and labeled prominently in the legend.

The emphasis is mathematical, not cosmetic. The zero class is the **principal class**:

• It contains the integer $0$, which is the [additive identity](!#equivalence-classes-and-their-structure) of $\\mathbb{Z}/n\\mathbb{Z}$.

• It's the only class where *divisibility by $n$* is true — every member is an exact multiple of $n$.

• Every other class is the zero class shifted: class $[r] = [0] + r$.

• In ring theory it corresponds to the **principal ideal** $n\\mathbb{Z}$.

• It's the kernel of the canonical map $\\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}$ — the integers that get sent to $0$ under modular reduction.

For applications, the zero class is what you test for divisibility, what triggers modular conditions like *check if $n$ is a multiple of $7$*, and what determines whether a number has a [multiplicative inverse](!#related-concepts) in $\\mathbb{Z}/n\\mathbb{Z}$ (nonzero residues coprime to $n$ do; zero never does).`,
      before: ``,
      after: `The frozen frame above has the principal class pinned after a full run: 6, 12, 18, 24, 30, 36 sit in the gold-edged slice — the multiples of 6, and nothing else. Every divisibility question about 6 is a question about membership in this one slice.

The gold styling repays attention during a run, too: each time the placement crosses twelve o'clock, the number landing there is exactly a multiple of the modulus, and the *now placing* log flags it. Divisibility stops being a property you compute and becomes a place on the wheel.`,
      link: '',
    },

    obj6: {
      title: `Adjusting Divisor and Count`,
      content: `Two inputs control the size and shape of the wheel:

• **Count up to** sets the upper bound of the integers placed during a run. Range starts at $1$ and is capped per divisor by a geometric maximum — the cap ensures rows fit at the minimum readable cell height. The cap appears below the input as *max for divisor $n$: M*. Common caps at default width: divisor $2$ allows roughly $80$ numbers, divisor $9$ allows much more since rows are spread across more slices.

• **Divisor (number of slices)** is an eight-button grid for $n = 2, 3, 4, 5, 6, 7, 8, 9$. Picking a new divisor immediately clears any in-progress run and re-divides the wheel. The wheel resizes and re-labels each slice.

Try these comparisons:

• **Divisor $2$** — split into even and odd halves. Class $0$ = evens, class $1$ = odds.

• **Divisor $5$** — slice $r$ holds every integer whose last digit is $r$ or $r + 5$. The closest this wheel gets to reading off last digits directly (a mod-$10$ wheel would do it exactly, but the divisor grid stops at $9$).

• **Divisor $7$** — counting from $1$ takes seven numbers to complete one row across all slices. Mimics the [day-of-week shift](!#what-is-modular-arithmetic).

• **Same number, different divisors** — keep the count fixed at $30$ and step through divisors $2$ to $9$ to see how class sizes change.`,
      before: ``,
      after: `The frozen frame above is the divisor-2 wheel after counting to 20: two half-circles, evens in the starred half, odds opposite, ten numbers each. Parity — the oldest classification in arithmetic — is just modular arithmetic at its smallest modulus, and the wheel draws it as a coin with two faces.

Changing the divisor is the tool's most instructive move: the same integers exist either way, but the wheel repartitions them completely. Nothing about a number changes; only the question asked of it does. How the classes balance out at the end of a run is taken up under [reading a complete run](!#reading-a-complete-run).`,
      link: '',
    },

    obj7: {
      title: `Right Panel Context`,
      content: `The right panel adapts to whichever phase the visualization is in:

• **Overview (idle)** — appears [before the first run](!#getting-started). Confirms which divisor is selected and prompts you to press Run.

• **Now placing (running)** — shows the [most recent number](!#run-controls-and-speed), its division arithmetic ($n \\div d = q$ remainder $r$), which class it landed in, and which row within that class. [Zero-class hits](!#the-zero-class-why-its-special) get a *divisible by $n$* accent.

• **Class details (hover/pin)** — appears whenever a slice is [hovered or pinned](!#hovering-and-pinning-classes). Shows the formula, first eight examples, and any run-placed numbers in this class.

• **Run complete (summary)** — appears [after the count target is reached](!#reading-a-complete-run). Lists the divisible numbers in the zero class as the headline, then a grid showing the count per class.

Below the adaptive box sits a static **deep-dive section** with five collapsible-looking subsections: *What is modular arithmetic*, *Equivalence classes*, *The zero class — why it's special*, *How to read this wheel*, and [Try this](!#adjusting-divisor-and-count). These are always available and don't change with state — they're reference material to read alongside experimenting on the wheel.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is Modular Arithmetic`,
      content: `**Modular arithmetic** replaces each integer with its remainder when divided by a fixed modulus $n$. The result is always one of $\\{0, 1, \\dots, n - 1\\}$, no matter how big the input.

The fundamental notation is **congruence**:

$$a \\equiv b \\pmod n \\iff n \\mid (a - b)$$

That is, $a$ and $b$ are *congruent modulo $n$* when their difference is a multiple of $n$, equivalently when they leave the same remainder.

Examples:

• **Clock arithmetic** is mod $12$ (or mod $24$). $14$ o'clock $\\equiv 2$ o'clock $\\pmod{12}$.

• **Days of the week** are mod $7$. If today is Wednesday, day $100$ from now is Wednesday $+ 100 \\bmod 7 = $ Wednesday $+ 2$ = Friday.

• [Parity](!#adjusting-divisor-and-count) is mod $2$. *Even* means $\\equiv 0 \\pmod 2$; *odd* means $\\equiv 1 \\pmod 2$.

• **Cryptography** — RSA, Diffie-Hellman, elliptic-curve protocols all operate in $\\mathbb{Z}/p\\mathbb{Z}$ or $\\mathbb{Z}/n\\mathbb{Z}$ for very large $n$.

• **Hashing and indexing** — converting arbitrary integers into a fixed range $\\{0, \\dots, n - 1\\}$ is exactly modular reduction.

The operations of addition, subtraction, and multiplication on classes are well-defined: $(a + b) \\bmod n = ((a \\bmod n) + (b \\bmod n)) \\bmod n$, and likewise for multiplication. Division ([modular inverse](!#related-concepts)) exists only when $\\gcd(a, n) = 1$.

For deeper coverage, see the **modular arithmetic** section on the number theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Equivalence Classes and Their Structure`,
      content: `For a fixed modulus $n$, the integers $\\mathbb{Z}$ split into exactly $n$ disjoint **equivalence classes**:

$$\\mathbb{Z} = [0] \\sqcup [1] \\sqcup \\dots \\sqcup [n - 1]$$

Each class $[r]$ is the set $\\{r + kn : k \\in \\mathbb{Z}\\}$ — an infinite arithmetic progression spaced $n$ apart on the number line.

**Properties:**

• Every integer belongs to exactly one class.

• Two integers are in the same class iff they're congruent mod $n$.

• Class $[r]$ contains negative numbers too: $-7 \\equiv 5 \\pmod{12}$ because $-7 + 12 = 5$.

• Class sizes are infinite in $\\mathbb{Z}$; on the wheel they look finite only because we cut the count at the target.

**The set of classes is a ring.** Define $[a] + [b] = [a + b]$ and $[a] \\cdot [b] = [a \\cdot b]$ on representatives, then check the result doesn't depend on which representatives you picked. The result is the ring $\\mathbb{Z}/n\\mathbb{Z}$:

• Always associative, commutative, with multiplicative identity $[1]$.

• A **field** exactly when $n$ is prime — then every nonzero class has a multiplicative inverse.

• When $n$ is composite, some classes are **zero divisors**: nonzero $[a], [b]$ with $[a] \\cdot [b] = [0]$. For instance, in $\\mathbb{Z}/6\\mathbb{Z}$, $[2] \\cdot [3] = [6] = [0]$.

[The wheel](!#the-wheel-and-slices) visualizes the additive structure: shifting all numbers by $+1$ rotates everything one slice clockwise. Multiplicative structure is harder to picture but underlies most applications.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Greatest common divisor (gcd)** — closely tied to modular arithmetic. The Euclidean algorithm computes $\\gcd(a, b)$ using repeated modular reduction. An integer $a$ has a multiplicative inverse mod $n$ iff $\\gcd(a, n) = 1$.

**Euler's totient $\\varphi(n)$** — counts integers in $\\{1, \\dots, n - 1\\}$ that are coprime to $n$. Equivalently, the number of invertible classes in $\\mathbb{Z}/n\\mathbb{Z}$. For prime $n$, $\\varphi(n) = n - 1$.

**Fermat's little theorem** — for prime $p$ and $a$ coprime to $p$: $a^{p-1} \\equiv 1 \\pmod p$. Generalizes to Euler's theorem $a^{\\varphi(n)} \\equiv 1 \\pmod n$.

**Chinese Remainder Theorem** — if $\\gcd(m, n) = 1$, the system $x \\equiv a \\pmod m$ and $x \\equiv b \\pmod n$ has a unique solution mod $mn$. Lets you reconstruct an integer from its residues in different moduli.

**Modular exponentiation** — computing $a^k \\bmod n$ efficiently via repeated squaring. The core operation in RSA.

**Discrete logarithm** — given $g, h, n$, find $k$ with $g^k \\equiv h \\pmod n$. Hard in general; security of Diffie-Hellman depends on it.

**Quadratic residues** — integers that are squares mod $n$. Class $[r]$ is a quadratic residue mod $n$ if there exists $x$ with $x^2 \\equiv r \\pmod n$.

**Congruence equations** — solving $ax \\equiv b \\pmod n$. Has a solution iff $\\gcd(a, n)$ divides $b$.

**Modulo calculator** — to compute $a \\bmod n$ for arbitrary integers, see the **modulo calculator**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Reading a Complete Run`,
      content: `When the last number lands, the right panel switches to its *run complete* summary: the divisible numbers — the contents of the [zero class](!#the-zero-class-why-its-special) — as the headline, then a small grid counting the members of every class.

For the default run of $36$ with divisor $6$, the wheel finishes perfectly balanced: six full rows in every slice, exactly six numbers per class. That is no accident — $36$ is a multiple of $6$, so the count 1 through 36 completes whole laps of the wheel.

The counts can never be lopsided by much. Counting $1$ through $N$ deals numbers to the slices in strict rotation, so any two classes differ by at most one member.`,
      before: ``,
      after: `The near-balance has a precise form. Write $N = qn + r$; then classes $1$ through $r$ hold $q + 1$ numbers and the rest hold $q$. Try counting to $20$ with divisor $6$: classes 1 and 2 collect four members, every other class three — and the zero class gets exactly $\\lfloor 20/6 \\rfloor = 3$, namely 6, 12, 18.

This is the pigeonhole picture of [equivalence classes](!#equivalence-classes-and-their-structure): $n$ boxes, dealt in rotation, can never be unfair by more than a single card. Change the divisor and rerun to watch the same fairness reassert itself over different slices.`,
      link: '',
    },
    obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What is modular arithmetic?",
      answer: "Modular arithmetic is a system of arithmetic on remainders. For a fixed integer n called the modulus, every integer is replaced by its remainder when divided by n, producing a value in the set 0, 1, ..., n minus 1. The notation a mod n denotes this remainder."
    },
    obj2: {
      question: "What does a is congruent to b mod n mean?",
      answer: "a is congruent to b modulo n, written a equivalent b mod n, means that a and b leave the same remainder when divided by n. Equivalently, n divides the difference a minus b. For example, 14 is congruent to 2 mod 12 because both leave remainder 2 when divided by 12."
    },
    obj3: {
      question: "What is the zero class in modular arithmetic?",
      answer: "The zero class mod n is the set of all integer multiples of n. It is sometimes called the principal class because it is the identity element of the ring of integers mod n, the kernel of the canonical map from the integers to that ring, and the only class whose members are divisible by n."
    },
    obj4: {
      question: "How many equivalence classes are there mod n?",
      answer: "There are exactly n equivalence classes mod n, labeled by their remainders 0, 1, 2, ..., n minus 1. Every integer belongs to exactly one class, and two integers belong to the same class if and only if their difference is a multiple of n."
    },
    obj5: {
      question: "Where is modular arithmetic used in real life?",
      answer: "Clock arithmetic is modulo 12 or 24, day-of-week calculations are modulo 7, and parity (even versus odd) is modulo 2. Modular arithmetic also underlies most of modern cryptography including RSA and Diffie-Hellman, hashing functions in computer science, check digits on credit cards and ISBNs, and the construction of finite fields used in error-correcting codes."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Modular Arithmetic Wheel Visualizer",
      "description": "Visualize modular arithmetic on a pie wheel: numbers 1 through N sort into n remainder classes mod n, with the zero class (multiples of n) highlighted as the principal class.",
      "url": "https://www.learnmathclass.com/arithmetic/visual-tools/modular-wheel",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Pie wheel of n equal slices (one per remainder class mod n) with the zero class centered at 12 o'clock and gold-starred",
        "Animated placement of integers 1 through N into their remainder slices, with rows filling outward from the center",
        "Eight-button divisor grid for n from 2 to 9 and a count-up-to input with geometric max-count enforcement",
        "Hover or click any slice for a floating tooltip showing formula, examples, and placed numbers",
        "Pinning support: clicking a slice locks the tooltip and the right-panel detail card until dismissed",
        "Adaptive right panel that switches between overview, now-placing log, class-detail card, and run summary",
        "Speed slider controlling placement tempo plus run, stop, and reset transport buttons, with static deep-dive sections covering the math behind the wheel"
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
      "keywords": "modular arithmetic, modular arithmetic visualizer, mod n calculator, remainder classes, a mod n, clock arithmetic, modulus operator, congruence modulo n, equivalence classes mod n, zero class principal, Z mod nZ visualization, modulo wheel, integers grouped by remainder, modular arithmetic interactive, remainder visualizer"
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
          "name": "Modular Wheel Visualizer",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools/modular-wheel"
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


  // Frozen-state framed units (Line 1): the tool's panel phases + the parity wheel.
  const d = modPieWheelDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    idle: u('idle', 'mod 6, idle, frozen',
      'Six empty slices around the mod 6 hub, the zero class starred at twelve o’clock. Nothing is placed yet — the wheel is pure structure.'),
    running: u('running', 'mod 6, placing 17, frozen',
      'Seventeen numbers in: 17 ÷ 6 = 2 remainder 5, so 17 has just landed in class 5, row 3 — the third number to leave that remainder.'),
    classDetail: u('classDetail', 'mod 6, class 2 pinned, frozen',
      'The darkened slice collects 2, 8, 14, 20, 26, 32 — every number of the form 6k + 2, each exactly six apart.'),
    zeroPinned: u('zeroPinned', 'mod 6, zero class pinned, frozen',
      'The gold-edged slice holds 6, 12, 18, 24, 30, 36 — the multiples of 6, the only class where divisibility is true.'),
    summary: u('summary', 'mod 6, run complete, frozen',
      'All 36 numbers placed: six full rows in every slice, six per class — perfectly balanced, because 36 is a multiple of 6.'),
    parity: u('parity', 'mod 2, 20 placed, frozen',
      'Two half-circles: evens in the starred half, odds opposite, ten each. Parity is the smallest modulus, drawn as a coin with two faces.'),
  };

  // Per-state panel explanations (Line 1). Rendered between the context box and
  // the deep-dive in the right panel through processContent — !# anchors work.
  const explanations = {
    idle: `The wheel is set: one slice per remainder class, the zero class starred at the top. Press Run and the integers will sort themselves. [Learn more about getting started](!#getting-started) · [Panel modes](!#right-panel-context)`,
    running: `Each tick places one number: divide by the modulus, keep the remainder, drop it in that slice — rows grow outward from the center. [Learn more about the run controls](!#run-controls-and-speed) · [Panel modes](!#right-panel-context)`,
    classDetail: `A pinned slice is one residue class: every number in it leaves the same remainder, so its members sit exactly one modulus apart on the number line. [Learn more about hovering and pinning](!#hovering-and-pinning-classes) · [Panel modes](!#right-panel-context)`,
    zeroPinned: `You pinned the principal class: the multiples of the modulus, the only slice where divisibility holds — and the identity of the ring of classes. [Learn more about the zero class](!#the-zero-class-why-its-special) · [Panel modes](!#right-panel-context)`,
    summary: `The run is complete: every integer up to the target found exactly one slice, and no two classes differ by more than one member. [Learn more about reading a complete run](!#reading-a-complete-run) · [Panel modes](!#right-panel-context)`,
    parity: `Divisor 2 is parity made visible: the wheel splits into even and odd halves, alternating one number at a time. [Learn more about changing the divisor](!#adjusting-divisor-and-count) · [Panel modes](!#right-panel-context)`,
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      stateUnits,
      explanations,
      seoData: {
        title: "Modular Arithmetic Visualizer: a mod n | Learn Math Class",
        description: "Visualize modular arithmetic on a pie wheel: numbers 1 to N sort into n remainder classes mod n, with the zero class (multiples of n) highlighted as principal.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools/modular-wheel",
        name: "Modular Arithmetic Wheel Visualizer",
        hubDescription: "Watch the integers 1 through N sort themselves into n remainder classes on a pie wheel — one slice per class, with the zero class (multiples of n) starred and centered at the top. Hover any slice for its formula and examples; switch the divisor from 2 to 9 to see how class structure changes.",
        category: "Primes, GCD & Modular Arithmetic",
        subCategory: ""
      },

    }
  }
}

export default function ModularWheelVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

  // Helper rows: plain section / per-state section carrying its frozen unit
  // as [content, unit, after]. (Slug ids replace the former numeric ids.)
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content]
  })
  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ]
  })

  const genericSections = [
    plain('obj0', 'key-terms'),
    stateRow('obj1', 'getting-started', 'idle'),
    plain('obj2', 'the-wheel-and-slices'),
    stateRow('obj3', 'run-controls-and-speed', 'running'),
    stateRow('obj4', 'hovering-and-pinning-classes', 'classDetail'),
    stateRow('obj5', 'the-zero-class-why-its-special', 'zeroPinned'),
    stateRow('obj6', 'adjusting-divisor-and-count', 'parity'),
    plain('obj7', 'right-panel-context'),
    stateRow('obj11', 'reading-a-complete-run', 'summary'),
    plain('obj8', 'what-is-modular-arithmetic'),
    plain('obj9', 'equivalence-classes-and-their-structure'),
    plain('obj10', 'related-concepts'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'-50px'}}>Modular Wheel</h1>
      <br/>
      <div style={{transform:'scale(0.9)'}}>
        <ModPieWheel explanations={explanations}/>
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
        textColor="#06357a"
      /> */}
      <br/>
      <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      />
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}