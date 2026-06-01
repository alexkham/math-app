// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import DistributionIntoCells from '../../../../app/components/combinatorics/new-visualizers/scenes/DistributionIntoCells'


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
//         url: "/combinatorics/visual-tools/distribution",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Distribution into Cells</h1>
//    <br/>
//    <DistributionIntoCells/>
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
import DistributionIntoCells from '../../../../app/components/combinatorics/new-visualizers/scenes/DistributionIntoCells'


export async function getStaticProps(){

  const keyWords = [
    'distribution into cells',
    'distribution into cells visualizer',
    'k^n formula',
    'distributing distinct items into cells',
    'n items into k cells',
    'functions from n to k',
    'distinct items labeled cells',
    'cells distribution combinatorics',
    'each item picks a cell',
    'k to the power n',
    'distribution visualizer',
    'assigning items to cells',
    'mappings from n element set',
    'distribution counting formula',
    'n distinct items k boxes'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Distribution into cells** — an assignment of $n$ distinct items to $k$ labeled cells, where each item independently picks one cell. The count is $k^n$.

**Labeled cells** — the cells are distinguishable, named *Cell 1, Cell 2, …, Cell k*. The same set of items split between *Cell 1* and *Cell 2* differently from how they sit in *Cell 2* and *Cell 1* gives a different distribution.

**No capacity limit** — any cell may receive any number of items, including zero. Cells may end up empty, full, or anything in between.

**Assignment tuple $(c_1, c_2, \\dots, c_n)$** — the canonical encoding: $c_i$ is the cell that item $i$ chose. Two distributions are the same iff their tuples are identical.

**Function view** — every distribution is a function $f: \\{1, 2, \\dots, n\\} \\to \\{1, 2, \\dots, k\\}$, mapping each item to its cell. There are exactly $k^n$ such functions.

**Item-1 destination group** — the family of distributions where item 1 ends up in a specific cell. The completed section groups results by this destination; with $k$ cells each holding $k^{n - 1}$ outcomes, the groups are all the same size.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 3$ items and $k = 3$ cells. The scene splits into three areas:

• An **items row** at the top, captioned *ITEMS TO PLACE (n = N)*, showing the $n$ distinct items.

• A **cells row** in the middle, captioned *CELLS (k = K)*, with $k$ labeled boxes named *Cell 1* through *Cell k*.

• A **completed** section below, where every finished distribution is filed under the row matching which cell item 1 picked.

To run the visualization:

• Press **▶ Play** to auto-build all $k^n$ distributions.

• Press **Step ▶** to send one item at a time.

• Press **◀** to step backward.

• Adjust the **Speed** slider.

The header shows the formula $k^n = \\text{total}$ alongside a live status line like *Cell c: $k$ / $k^{n-1}$* while building. Below the cells a live assignment readout shows $(c_1, c_2, \\dots, c_n)$ with unknown slots marked $?$ as the build progresses.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Cells`,
      content: `The cells are the destination boxes for each item. Five things to watch:

• Each cell is **labeled** *Cell 1, Cell 2, …* above the box. The labels are part of the data — *Cell 1* and *Cell 2* are different even if they end up holding the same items.

• Items stack **bottom-up** inside a cell as they arrive. The visual position in the stack reflects arrival order, but for counting purposes only *which items are in this cell* matters.

• **No capacity limit.** A cell can end up with $0$, $1$, $2$, … any number of items up to $n$. The all-items-in-Cell-1 outcome is just as valid as the perfectly-spread outcome.

• When an item is in flight from its source position to a cell, a **dotted guide line** in the item's color traces the trajectory.

• When all $n$ items are placed, a **flash ring** briefly pulses around the entire cell row, and the completed distribution is filed in the right group row below.

Below the cells, an **assignment readout** shows the current tuple $(c_1, c_2, \\dots, c_n)$ with $?$ for unfilled positions, and a legend reminds you that $c_i$ is the cell item $i$ went to.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n and k`,
      content: `Two steppers in the control bar control the size:

• **n** sets the number of distinct items. Range $2$ to $4$.

• **k** sets the number of distinct cells. Range $2$ to $4$, capped per $n$ to keep $k^n$ manageable.

The caps are:

• $n = 2$: maximum $k = 4$, giving $4^2 = 16$ distributions.

• $n = 3$: maximum $k = 4$, giving $4^3 = 64$ distributions.

• $n = 4$: maximum $k = 3$, giving $3^4 = 81$ distributions.

Common combinations:

• $n = 3, k = 2$: $2^3 = 8$ distributions.

• $n = 3, k = 3$: $3^3 = 27$ distributions.

• $n = 4, k = 2$: $2^4 = 16$ distributions.

Reducing $n$ may cause $k$ to clamp to the new maximum automatically. Changing either value resets the build and refreshes the formula in the header.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by Item 1's Destination`,
      content: `The completed section organizes distributions by **which cell item 1 picked**. There are exactly $k$ rows — one per cell — and each row holds every distribution where item 1 went to that particular cell.

Unlike the variable-size groups in *partition into groups*, here all $k$ groups have **the same size**:

$$\\text{group size} = k^{n - 1}$$

This is because once item 1's destination is fixed, the remaining $n - 1$ items still independently pick from all $k$ cells — no constraint changes. So each group contributes $k^{n - 1}$ distributions and the total is:

$$k \\times k^{n - 1} = k^n$$

This uniformity is the visual signature of independent choice. Compare it with the simple combination visualizer, where smallest-item groups shrink as the smallest gets larger, or with partition into groups, where group sizes depend on the box sizes. Here every group is identical in size.

Each row in the completed area has a *item 1 → Cell c* label on the left and a grid of mini cards. Each mini card shows the full assignment as $k$ small stacked cells plus the tuple $(c_1, c_2, \\dots, c_n)$ below it.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single distribution or pausing mid-build.

• **Step ▶** (Step forward) — sends one item into its chosen cell. Stop after each step to read the partial assignment tuple.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all $k^n$ distributions are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over from the first distribution.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each item travel from the items row into a specific cell and stack on top of whatever is already there.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

• **Balls mode** (default) — items appear as colored circles. Best for tracking item identity at a glance as items stack inside cells and for spotting distribution patterns visually.

• **Letters mode** — items appear with letter labels (A, B, C, …). Best for reading off each distribution and matching the visual stack to the assignment tuple, where item A goes to cell $c_1$, item B to cell $c_2$, and so on.

The encoding is consistent across the items row, the cells, the flying ball, every mini distribution card in the completed grid, and the right-panel narration. Cell numbers (1, 2, 3, …) are independent of mode — cells are always numbered, regardless of how items are displayed.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header *Distribution into cells ($k^n$)* with the formula displayed across multiple lines and a reminder that this is the same math as permutations with repetition, framed from the items' point of view rather than positions to fill.

A **StepRow** is added for each item-1-destination group as soon as a distribution in that group starts or completes. Each StepRow shows:

• The **destination** as text — *Item 1 → Cell c*.

• A **progress counter** $k / k^{n-1}$ tracking how many distributions in this group have completed.

• A short **narration**: *When item 1 goes to Cell c, the remaining $n - 1$ items each still independently pick one of $k$ cells. That gives $k^{n-1}$ outcomes in this group.*

When all groups complete, every StepRow shows *done* with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Distribution into Cells`,
      content: `A **distribution into cells** assigns $n$ distinct items to $k$ labeled cells, with each item independently choosing one cell and no capacity restriction. The count is:

$$k^n$$

Equivalently, this counts:

• The number of **functions** $f: \\{1, \\dots, n\\} \\to \\{1, \\dots, k\\}$ — every item has a target, every target is a valid choice.

• The number of length-$n$ **sequences** with entries from $\\{1, \\dots, k\\}$ — the assignment tuple $(c_1, \\dots, c_n)$ is exactly such a sequence.

• The number of ways to **color** $n$ distinguishable objects using $k$ colors with reuse allowed.

Examples:

• Assigning $4$ distinct tasks to $3$ workers (any worker may get any number of tasks): $3^4 = 81$ assignments.

• Sending $5$ different letters to $3$ different mailboxes: $3^5 = 243$ sendings.

• Coloring $6$ distinct beads with $4$ colors, repeats allowed: $4^6 = 4096$ colorings.

• Number of functions from a $3$-element set to a $5$-element set: $5^3 = 125$.

For deeper coverage of the formula and its connections, see the **distribution into cells** section on the combinations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Deriving k^n`,
      content: `The cleanest derivation is the **multiplication principle from the items' perspective**.

Each of the $n$ items independently picks one of $k$ cells:

• **Item 1**: $k$ choices.

• **Item 2**: $k$ choices (independent of item 1).

• **Item 3**: $k$ choices.

• $\\dots$

• **Item $n$**: $k$ choices.

Multiply $n$ identical factors of $k$:

$$k \\times k \\times k \\times \\dots \\times k = k^n$$

The tool visualizes the equivalent decomposition: fix where item 1 goes ($k$ ways), then ask how many ways the remaining $n - 1$ items can be distributed independently ($k^{n - 1}$ ways). Every row in the completed section is one of those $k$ item-1-destination families, all the same size.

Note the perfect symmetry: it doesn't matter which item you fix first — fixing item 2 or item $n$ instead would give the same decomposition into $k$ equal-size groups, just labeled differently. This is the visual signature of full independence.

Counts grow quickly: $2^5 = 32$, $3^5 = 243$, $5^5 = 3125$. The base $k$ and exponent $n$ play asymmetric roles — increasing $n$ multiplies the count by $k$, increasing $k$ multiplies by a factor that itself depends on $n$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Permutation with repetition** — the same formula $n^r$, but with the roles of $n$ and $r$ swapped semantically. There, $r$ positions independently pick from $n$ options; here, $n$ items independently pick from $k$ cells. Mathematically identical: $r$ positions ↔ $n$ items, $n$ options ↔ $k$ cells.

**Weak composition** — distributes $n$ **identical** items into $k$ labeled cells, with empties allowed. Formula $\\binom{n + k - 1}{k - 1}$. Strictly smaller than $k^n$ because the items can no longer be told apart.

**Strong composition** — like weak composition but every cell must receive at least one item. Formula $\\binom{n - 1}{k - 1}$.

**Partition into groups** — distributes $n$ distinct items into $k$ labeled cells of **fixed sizes**. Adds a hard constraint that turns $k^n$ into the multinomial coefficient.

**Functions from a set to a set** — the algebraic reading. Counting functions $f: A \\to B$ with $|A| = n$ and $|B| = k$ gives $k^n$, sometimes written $B^A$.

**Surjective functions** — functions where every cell is hit. Counted by $k! \\cdot S(n, k)$ where $S(n, k)$ is the Stirling number of the second kind. Always at most $k^n$.

**Pigeonhole principle** — when $n > k$, at least one cell must contain more than one item. The distribution count $k^n$ includes every such forced overlap.

**Combinatorics calculator** — to compute $k^n$ for arbitrary $n$ and $k$, see the **distribution into cells calculator**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
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
      question: "What is a distribution into cells?",
      answer: "A distribution into cells is an assignment of n distinct items to k labeled cells, where each item independently picks one of the cells. There is no capacity limit on cells, and empty cells are allowed. The number of distributions is k to the power n."
    },
    obj2: {
      question: "What is the formula for distributing n items into k cells?",
      answer: "The total number of ways to distribute n distinct items into k labeled cells, each item independently picking one cell, is k raised to the power n. For example, distributing 4 items into 3 cells gives 3 to the 4 = 81 distinct outcomes."
    },
    obj3: {
      question: "Why is the formula k^n and not n^k?",
      answer: "Because each of the n items independently picks one cell out of k options, so the total is k times itself n times. The base k is the size of the choice set per item; the exponent n is the number of independent choices being made. Swapping the roles changes the problem and gives a different count."
    },
    obj4: {
      question: "How is this different from permutations with repetition?",
      answer: "Algebraically the formulas are the same: k to the power n versus n to the power r. The difference is framing. Permutation with repetition fills r positions, each independently picking from n options. Distribution into cells places n items, each independently picking one of k cells. The first counts sequences; the second counts assignments. Renaming variables shows they are the same combinatorial object."
    },
    obj5: {
      question: "When should I use distribution into cells?",
      answer: "Whenever you assign distinct items to distinct containers with no capacity limit, and the question is how many such assignments exist. Common cases include sending letters to mailboxes, assigning tasks to workers, coloring distinct objects with a palette of colors, mapping inputs of a function to outputs, and any situation where each item independently chooses one bucket."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Distribution into Cells Visualizer",
      "description": "Visualize every assignment of n distinct items to k labeled cells, with the formula k^n updating live and a tuple readout showing each item's chosen cell.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/distribution",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every k^n distribution step by step, one item at a time, into k labeled cells",
        "Cells stack arriving items bottom-up with no capacity limit, allowing empty cells",
        "Independent steppers for n and k, with caps per n that keep k^n manageable",
        "Live formula k^n updating in the header alongside a status line tracking item 1's current destination",
        "Live assignment tuple readout showing (c1, c2, ..., cn) with unknown slots marked ?",
        "Completed distributions grouped by item 1's destination cell, with all k groups uniformly sized k^(n-1)",
        "Four transport buttons for step back, step forward, play, and reset, plus a speed slider and a balls / letters mode switch"
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
      "keywords": "distribution into cells, distribution into cells visualizer, k^n formula, distributing distinct items into cells, n items into k cells, functions from n to k, distinct items labeled cells, cells distribution combinatorics, each item picks a cell, k to the power n, distribution visualizer, assigning items to cells, mappings from n element set, distribution counting formula, n distinct items k boxes"
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
          "name": "Combinatorics",
          "item": "https://www.learnmathclass.com/combinatorics"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Distribution into Cells Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/distribution"
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
        title: "Distribution into Cells: k^n Formula | Learn Math Class",
        description: "Visualize all k^n ways to distribute n distinct items into k labeled cells. Each item independently picks a cell, with results grouped by item 1's destination.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/distribution",
        name: "Distribution into Cells Visualizer",
        hubDescription: "Send n distinct items into k labeled cells where each item picks its own cell — watch the assignment tuple fill in below the cells and the k^n outcomes group by item 1's destination. Same math as permutations with repetition, framed from the items' point of view.",
        category: "Combinations",
        subCategory: ""
      },

    }
  }
}

export default function DistributionIntoCellsVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Distribution into Cells</h1>
      <br/>
      <DistributionIntoCells/>
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