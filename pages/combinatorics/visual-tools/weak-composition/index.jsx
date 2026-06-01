// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import WeakComposition from '../../../../app/components/combinatorics/new-visualizers/scenes/WeakComposition'


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
//         url: "/combinatorics/visual-tools/weak-composition",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Weak Composition</h1>
//    <br/>
//    <WeakComposition/>
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
import WeakComposition from '../../../../app/components/combinatorics/new-visualizers/scenes/WeakComposition'


export async function getStaticProps(){

  const keyWords = [
    'weak composition',
    'weak composition visualizer',
    'stars and bars',
    'stars and bars formula',
    'C(n+k-1, k-1) formula',
    'distributing identical items',
    'n identical items k bins',
    'compositions with empty parts',
    'non-negative integer solutions',
    'x1 + x2 + ... + xk = n',
    'multiset coefficient',
    'weak composition formula',
    'combinatorics stars and bars',
    'balls into bins identical',
    'how many ways to distribute candy'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Weak composition** — a distribution of $n$ identical items into $k$ distinct bins where bins may be empty. Equivalently, the number of non-negative integer solutions to $x_1 + x_2 + \\dots + x_k = n$. The count is $\\binom{n + k - 1}{k - 1}$.

**Stars and bars** — the visual encoding of this problem. Draw $n$ stars in a row and insert $k - 1$ bars among them to split them into $k$ groups. The count of arrangements is $\\binom{n + k - 1}{k - 1}$ because there are $n + k - 1$ total symbols and we choose $k - 1$ positions for the bars.

**Bin** — the run of cells between two adjacent bars in the strip, or before the first bar, or after the last. The number of items in bin $i$ is $x_i$.

**Strip** — the row of $n + k - 1$ cells where items (stars) and bars are placed. Each cell either holds one item or one bar.

**Composition tuple $(x_1, x_2, \\dots, x_k)$** — the encoded outcome: $x_i$ is the count of items in bin $i$, with $x_1 + x_2 + \\dots + x_k = n$ and each $x_i \\geq 0$.

**$x_1$-group** — the family of weak compositions with the same first-bin count. The completed section groups results by $x_1$; group sizes vary as $\\binom{n - j + k - 2}{k - 2}$ for $x_1 = j$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 4$ identical items and $k = 3$ bins. The scene splits into three areas:

• A **holding row** at the top labeled *BARS TO PLACE (k − 1 = K)* showing the $k - 1$ bars waiting to be inserted.

• A **strip** in the middle labeled *STRIP (n + k − 1 = N+K-1 cells)* — a row of $n + k - 1$ cells, numbered $1$ to $n + k - 1$ above. The $n$ items (identical, rendered as red balls or letter A) are pre-placed in the cells from the start. The animation moves the bars from the holding row into specific cell positions.

• A **completed** section below, where every finished composition is filed under the row matching its $x_1$ value.

To run the visualization:

• Press **▶ Play** to auto-build all $\\binom{n + k - 1}{k - 1}$ weak compositions.

• Press **Step ▶** to drop one bar at a time.

• Press **◀** to step backward.

• Adjust the **Speed** slider.

The header shows the formula $C(n + k - 1, k - 1) = \\text{total}$ alongside a live status line like *$x_1 = j$: $k$ / size*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Strip and Bars`,
      content: `The strip is where the stars-and-bars encoding plays out:

• **Numbered cells** $1$ through $n + k - 1$ across the top. The current cell where a bar lands highlights to mark its position.

• **Pre-placed items** (red balls or the letter A) sit in cells that aren't currently bar positions. Items are identical — same color, same size — because the scenario treats them as indistinguishable.

• **Bins are highlighted with alternating color bands** that cover only the cells inside each bin (not the bar cells). Bin 1 might be blue-tinted, bin 2 amber, bin 3 blue again, and so on.

• **Bars** arrive from the holding row above with a dotted guide line tracing the trajectory.

• **Brackets below the strip** mark each bin with a label $x_i = j$. Brackets are progressive: each label shows $?$ until the relevant bar lands, then it reveals the actual value.

• **Empty bins** appear as dashed mini-rectangles in the bracket row, indicating that no cells lie between adjacent bars.

When all $k - 1$ bars are placed, a **flash ring** pulses around the strip and the composition is filed in the completed grid below.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n and k`,
      content: `Two steppers in the control bar control the size:

• **n** sets the number of identical items. Range $3$ to $5$.

• **k** sets the number of distinct bins. Range $2$ to $4$.

Common combinations:

• $n = 3, k = 2$: $\\binom{4}{1} = 4$ compositions.

• $n = 3, k = 3$: $\\binom{5}{2} = 10$ compositions.

• $n = 4, k = 3$: $\\binom{6}{2} = 15$ compositions.

• $n = 4, k = 4$: $\\binom{7}{3} = 35$ compositions.

• $n = 5, k = 3$: $\\binom{7}{2} = 21$ compositions.

• $n = 5, k = 4$: $\\binom{8}{3} = 56$ compositions.

Reducing $n$ does not constrain $k$ in this scenario, since even $n = 0$ gives valid weak compositions (all $x_i = 0$). Changing either value resets the build, refreshes the formula in the header, and rebuilds the completed section into a new set of $x_1$-rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by First-Bin Count`,
      content: `The completed section organizes weak compositions by $x_1$ — the count of items in the first bin. There are $n + 1$ rows total (one for each value $x_1 = 0, 1, 2, \\dots, n$), and group sizes vary.

When $x_1 = j$, the remaining $n - j$ items must be distributed among the remaining $k - 1$ bins, also as a weak composition:

$$\\text{group size at } x_1 = j = \\binom{n - j + k - 2}{k - 2}$$

For example with $n = 4, k = 3$:

• $x_1 = 0$: distribute 4 items into 2 bins. $\\binom{5}{1} = 5$ compositions.

• $x_1 = 1$: distribute 3 items into 2 bins. $\\binom{4}{1} = 4$ compositions.

• $x_1 = 2$: distribute 2 items into 2 bins. $\\binom{3}{1} = 3$ compositions.

• $x_1 = 3$: distribute 1 item into 2 bins. $\\binom{2}{1} = 2$ compositions.

• $x_1 = 4$: distribute 0 items into 2 bins. $\\binom{1}{1} = 1$ composition.

Total: $5 + 4 + 3 + 2 + 1 = 15 = \\binom{6}{2}$. The decomposition is a visual proof of the hockey-stick identity $\\sum_{j=0}^{n} \\binom{n - j + k - 2}{k - 2} = \\binom{n + k - 1}{k - 1}$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward.

• **Step ▶** (Step forward) — drops one bar into its cell. Stop after each step to read the partial composition; cells without bars yet show $?$ in their brackets.

• **▶ Play / ⏸ Pause** — runs continuously until all $\\binom{n + k - 1}{k - 1}$ weak compositions are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over.

The **Speed** slider controls how fast play advances. At slower speeds you can clearly see each bar travel from the holding row into its cell and watch the bin brackets update from $?$ to the actual count.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how identical items are rendered:

• **Balls mode** (default) — items appear as red circles. All circles are identical because the items themselves are indistinguishable. Best for the classical stars-and-bars look.

• **Letters mode** — items appear as the letter A. Same identicality applies — every item shows the same letter in the same color. Best when reading compositions algebraically and emphasizing that the items are interchangeable.

The encoding is consistent across the strip, the mini cards in the completed grid, and the right-panel narration. Bars are unaffected — they always render as the same accent-colored vertical bars regardless of mode.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header *Weak compositions (stars and bars)* with the full formula across multiple lines and a reminder that this counts non-negative integer solutions to $x_1 + x_2 + \\dots + x_k = n$.

A **StepRow** is added for each $x_1$-group as soon as a composition in that group starts or completes. Each StepRow shows:

• The **first bin count** as a label — *First bin: $x_1 = j$*.

• A **progress counter** $k / \\binom{n - j + k - 2}{k - 2}$ tracking how many compositions in this group have completed.

• A short **narration** of the structure: *When the first bin holds $j$ items ($x_1 = j$), the remaining $n - j$ items are split among the other $k - 1$ bins, giving $\\binom{n - j + k - 2}{k - 2}$ outcomes.* Edge cases get tailored phrasing: $x_1 = 0$ uses *the first bin is empty*; $x_1 = n$ uses *all items go to the first bin* with the others empty.

When all groups complete, every StepRow shows *done* with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Weak Composition`,
      content: `A **weak composition** of $n$ into $k$ parts is an ordered tuple $(x_1, x_2, \\dots, x_k)$ of **non-negative** integers summing to $n$:

$$x_1 + x_2 + \\dots + x_k = n, \\quad x_i \\geq 0$$

The word *weak* distinguishes this from a **strong** composition, which requires every $x_i \\geq 1$. Weak compositions allow zero parts, so the first bin (or any bin) is permitted to be empty.

The count of weak compositions is:

$$\\binom{n + k - 1}{k - 1} = \\binom{n + k - 1}{n}$$

Examples:

• Distributing $10$ identical candies among $3$ children (some children may get none): $\\binom{12}{2} = 66$ ways.

• Number of non-negative integer solutions to $a + b + c + d = 7$: $\\binom{10}{3} = 120$.

• Choosing $5$ scoops of ice cream from $6$ flavors with repetition allowed (a flavor may be skipped): $\\binom{10}{5} = 252$ choices.

• Distributing $n$ identical items into $k$ labeled boxes with no capacity limit: the canonical setup.

For deeper coverage of weak compositions and their connections, see the **weak composition** section on the combinations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Stars-and-Bars Argument`,
      content: `The classical proof maps weak compositions to a simple selection problem.

**Encode each composition as a row of symbols.** Write $x_1$ stars, then a bar, then $x_2$ stars, then a bar, and so on through $x_k$ stars. The total is $n$ stars plus $k - 1$ bars, giving $n + k - 1$ symbols in a row.

**Every weak composition is determined by where the bars sit.** The bars partition the row into $k$ groups; the $i$th group has $x_i$ stars. Different bar placements give different compositions, and every composition comes from a unique bar placement (including bars adjacent to each other, which encode $x_i = 0$).

**Count the bar placements.** We're choosing $k - 1$ positions out of $n + k - 1$ total to be bars (the rest are stars). The count is the binomial coefficient:

$$\\binom{n + k - 1}{k - 1}$$

This is the visual setup the tool implements. Each completed strip has $n$ items in fixed (canonical) positions and $k - 1$ bars in specific cells; the cells without bars hold the items, and the brackets below convert the bar positions back into the tuple $(x_1, \\dots, x_k)$.

The dual reading $\\binom{n + k - 1}{n}$ — choose the $n$ star positions instead of the bars — gives the same count by complementary counting.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Strong composition** — the same setup but every bin must hold at least one item. Formula $\\binom{n - 1}{k - 1}$. Smaller than the weak count because zero parts are forbidden.

**Simple combination** — the no-repetition unordered selection. $\\binom{n}{r}$. Weak compositions can be seen as combinations with repetition allowed: choosing $n$ items from $k$ types with reuse equals weak compositions of $n$ into $k$ parts.

**Combination with repetition** — exactly the weak composition count $\\binom{n + k - 1}{n}$ under a different name and framing.

**Distribution into cells** — distributes $n$ **distinct** items (not identical) into $k$ labeled cells. Formula $k^n$, much larger than the weak composition count because items can be distinguished.

**Partition into groups** — distributes $n$ distinct items into $k$ labeled boxes of fixed sizes. Multinomial coefficient $n! / (n_1! \\cdots n_k!)$.

**Multiset coefficient** $\\binom{\\binom{k}{n}}{}$ — equivalent notation for the weak composition count, emphasizing that the outcome is a size-$n$ multiset over a $k$-element ground set.

**Hockey-stick identity** — the grouping by $x_1$ proves $\\sum_{j=0}^{n} \\binom{n - j + k - 2}{k - 2} = \\binom{n + k - 1}{k - 1}$.

**Combinatorics calculator** — to compute $\\binom{n + k - 1}{k - 1}$ for any $n$ and $k$, see the **weak composition calculator**.`,
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
      question: "What is a weak composition?",
      answer: "A weak composition of n into k parts is an ordered tuple of non-negative integers that sum to n. Equivalently, it is a way to distribute n identical items into k distinct bins where some bins may be empty. The number of weak compositions is the binomial coefficient n plus k minus 1 choose k minus 1."
    },
    obj2: {
      question: "What is the stars and bars formula?",
      answer: "Stars and bars counts weak compositions of n into k parts by representing each composition as a row of n stars separated by k minus 1 bars. The total number of symbols is n plus k minus 1, and choosing k minus 1 positions for the bars uniquely determines the composition. The count is therefore the binomial coefficient n plus k minus 1 choose k minus 1."
    },
    obj3: {
      question: "What is the difference between weak and strong composition?",
      answer: "A weak composition allows zero parts, meaning some bins may receive no items. A strong composition requires every bin to receive at least one item. Weak compositions are counted by n plus k minus 1 choose k minus 1; strong compositions by n minus 1 choose k minus 1."
    },
    obj4: {
      question: "How many ways are there to distribute 10 candies among 3 kids?",
      answer: "If the candies are identical and the children are distinct, with kids allowed to receive zero candies, the count is the weak composition of 10 into 3 parts, which equals 12 choose 2, or 66 ways."
    },
    obj5: {
      question: "When should I use the weak composition formula?",
      answer: "Whenever a problem distributes identical objects into distinguishable bins with no minimum-per-bin constraint. Common cases include splitting identical resources among labeled recipients, counting non-negative integer solutions to linear equations, choosing a multiset of a given size from a fixed set of types, and any scenario where the items being distributed are interchangeable but the destinations are not."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Weak Composition Visualizer",
      "description": "Visualize weak compositions of n identical items into k distinct bins using the stars-and-bars argument, with the formula C(n+k-1, k-1) updating live as bars land in the strip.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/weak-composition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every C(n+k-1, k-1) weak composition step by step with the stars-and-bars strip",
        "Numbered cells 1 to n+k-1 and alternating bin bands that highlight only the cell extents of each bin",
        "Progressive bracket labels showing x1 = ?, x2 = ?, ... that reveal the bin counts as bars land",
        "Twin readouts under the strip: the composition tuple (x1, x2, ..., xk) and the bar-positions set",
        "Independent steppers for n (3 to 5) and k (2 to 4) with the formula updating live in the header",
        "Completed compositions grouped by first-bin count x1 with per-group sizes that prove the hockey-stick identity",
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
      "keywords": "weak composition, weak composition visualizer, stars and bars, stars and bars formula, C(n+k-1, k-1) formula, distributing identical items, n identical items k bins, compositions with empty parts, non-negative integer solutions, x1 + x2 + ... + xk = n, multiset coefficient, weak composition formula, combinatorics stars and bars, balls into bins identical, how many ways to distribute candy"
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
          "name": "Weak Composition Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/weak-composition"
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
        title: "Weak Composition: Stars and Bars Formula | Learn Math Class",
        description: "Visualize weak compositions of n identical items into k bins via stars and bars. Choose k−1 bar positions among n+k−1 cells to count C(n+k−1, k−1) outcomes.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/weak-composition",
        name: "Weak Composition Visualizer",
        hubDescription: "Drop k−1 bars into a strip of n+k−1 cells to split n identical items into k bins — empty bins allowed. The stars-and-bars encoding makes C(n+k−1, k−1) visible directly, with live bin brackets, a composition tuple readout, and bar-position readout updating as the bars land.",
        category: "Combinations",
        subCategory: ""
      },

    }
  }
}

export default function WeakCompositionVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Weak Composition</h1>
      <br/>
      <WeakComposition/>
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