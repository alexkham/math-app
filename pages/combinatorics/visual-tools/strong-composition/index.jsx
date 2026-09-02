// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import StrongComposition from '../../../../app/components/combinatorics/new-visualizers/scenes/StrongComposition'


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
//         url: "/combinatorics/visual-tools/strong-composition",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Strong Composition</h1>
//    <br/>
//    <StrongComposition/>
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
import StrongComposition from '../../../../app/components/combinatorics/new-visualizers/scenes/StrongComposition'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import strongCompositionDiagrams from '@/app/components/combinatorics/new-visualizers/scenes/strongCompositionDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'strong composition',
    'strong composition visualizer',
    'C(n-1, k-1) formula',
    'positive compositions',
    'compositions of n into k parts',
    'composition with positive parts',
    'dividing items every bin nonempty',
    'strong composition formula',
    'positive integer solutions',
    'gaps between items combinatorics',
    'compositions combinatorics',
    'visualize strong compositions',
    'balls into nonempty bins',
    'how many strong compositions',
    'strict composition'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Strong composition** — a distribution of $n$ identical items into $k$ distinct bins where **every bin must hold at least one item**. Equivalently, the number of **positive** integer solutions to $x_1 + x_2 + \\dots + x_k = n$. The count is $\\binom{n - 1}{k - 1}$.

**Positive parts** — the requirement $x_i \\geq 1$ for every $i$, which distinguishes strong from weak compositions. Empty bins are not allowed.

**Gap** — the space between two adjacent items in the row. With $n$ items, there are exactly $n - 1$ gaps available, and each gap can hold at most one divider.

**Divider / bar** — the $k - 1$ vertical bars placed in chosen gaps that split the $n$ items into $k$ runs. Two dividers cannot share a gap, and no divider sits at the start or end (those would create empty bins).

**Composition tuple $(x_1, x_2, \\dots, x_k)$** — the encoded outcome: $x_i$ is the run length in bin $i$, with $x_1 + x_2 + \\dots + x_k = n$ and each $x_i \\geq 1$.

**$x_1$-group** — the family of strong compositions with the same first-bin count. Group sizes vary as $\\binom{n - j - 1}{k - 2}$ for $x_1 = j$, with $j$ ranging from $1$ to $n - k + 1$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 5$ identical items and $k = 3$ bins. The scene splits into three areas:

• A **holding row** at the top labeled *BARS TO PLACE (k − 1 = K)* showing the $k - 1$ dividers waiting to be inserted.

• An **items row** in the middle labeled *ITEMS (n = N) · GAPS (n − 1 = N-1)* — a row of $n$ identical items with the $n - 1$ gaps between them numbered $1$ through $n - 1$.

• A **completed** section below, where every finished composition is filed under the row matching its $x_1$ value.

To run the visualization:

• Press **▶ Play** to auto-build all $\\binom{n - 1}{k - 1}$ strong compositions.

• Press **Step ▶** to drop one bar at a time.

• Press **◀** to step backward.

• Adjust the **Speed** slider.

The header shows the formula $C(n - 1, k - 1) = \\text{total}$ alongside a live status line like *$x_1 = j$: $k$ / size*.`,
      before: ``,
      after: `The frozen frame above is the opening position, and the difference from its weak counterpart is written into the geometry: there are no cells **for** the bars. Five items sit shoulder to shoulder, and the only landing sites are the four dashed drop-zones **between** them — never before the first item, never after the last.

That single design choice does all the enforcement. A divider that can only land between two items can never leave a bin empty, so the constraint $x_i \\geq 1$ needs no checking — it is [built into the board](!#items-and-gaps).`,
      link: '',
    },

    obj2: {
      title: `Items and Gaps`,
      content: `The strip is where the gap-selection encoding plays out. Five things to watch:

• **n items** (identical red balls or letter A) sit fixed in their cells from the start. The items themselves never move — only the dividers do.

• **n − 1 gap drop-zones** sit between adjacent items as dashed mini-rectangles, numbered above. These are the only places a divider can land.

• **Bin bands** highlight runs of consecutive items in alternating colors (blue and amber). Items in bin 1 get one tint, bin 2 the other, bin 3 the first again, and so on.

• **Bars** arrive from the holding row above with a dotted guide line in the bar's color tracing the trajectory. Each bar lands in a specific gap; the gap's drop-zone outline disappears once filled.

• **Brackets below the items** mark each bin with a label $x_i = j$. Brackets are progressive: each label shows $?$ until enough bars land to determine the run length.

When all $k - 1$ bars are placed, a **flash ring** pulses around the strip and the composition is filed in the completed grid below.

Notice what's impossible here: a bar cannot sit at position 0 (before item 1) or position $n$ (after item $n$), and two bars cannot share a gap. Both restrictions are exactly what enforces $x_i \\geq 1$, as the [gap-choice argument](!#the-gap-choice-argument) spells out.`,
      before: ``,
      after: `The frozen frame above catches the second composition mid-build: one bar already seated in gap 1 — sealing $x_1 = 1$ — while the second rides its guide toward gap 3. The readout has hardened to $(1, 2, ?)$, and two drop-zones remain dashed and available.

Compare this to the weak tool's strip, where bars could land beside each other and collapse a bin to zero. Here adjacency is impossible: every gap holds at most one bar, and every bar has an item on each side. The rule is enforced by the furniture rather than by arithmetic.`,
      link: '',
    },

    obj3: {
      title: `Adjusting n and k`,
      content: `Two steppers in the control bar control the size:

• **n** sets the number of identical items. Range $3$ to $7$.

• **k** sets the number of bins. Range $2$ to $4$, with the additional constraint $k \\leq n$ (you can't have more nonempty bins than items).

Common combinations:

• $n = 3, k = 2$: $\\binom{2}{1} = 2$ compositions: $(2, 1)$ and $(1, 2)$.

• $n = 4, k = 2$: $\\binom{3}{1} = 3$ compositions — [one bar among the gaps](!#two-bins-one-divider).

• $n = 5, k = 3$: $\\binom{4}{2} = 6$ compositions — the [default configuration](!#grouping-by-first-bin-count).

• $n = 6, k = 3$: $\\binom{5}{2} = 10$ compositions.

• $n = 7, k = 4$: $\\binom{6}{3} = 20$ compositions — the [largest run on this page](!#twenty-ways-the-largest-run).

• $n = k$: exactly $1$ composition — [every gap takes a bar](!#when-k-equals-n-the-forced-composition).

Reducing $n$ below the current $k$ clamps $k$ down automatically. Changing either value resets the build, refreshes the formula in the header, and rebuilds the completed section into the new set of $x_1$-rows.

Note the symmetry with binomial coefficients: $\\binom{n - 1}{k - 1} = \\binom{n - 1}{n - k}$. For example $\\binom{6}{2} = \\binom{6}{4} = 15$ — the same count interpreted as choosing gap positions or choosing non-divider positions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by First-Bin Count`,
      content: `The completed section organizes strong compositions by $x_1$ — the count of items in the first bin. There are $n - k + 1$ rows total (since $x_1$ ranges from $1$ to $n - k + 1$, with the cap ensuring the remaining $k - 1$ bins can each hold at least one item).

When $x_1 = j$, the remaining $n - j$ items must form a strong composition of size $k - 1$:

$$\\text{group size at } x_1 = j = \\binom{n - j - 1}{k - 2}$$

For example with $n = 5, k = 3$:

• $x_1 = 1$: split 4 items into 2 nonempty bins. $\\binom{3}{1} = 3$ compositions.

• $x_1 = 2$: split 3 items into 2 nonempty bins. $\\binom{2}{1} = 2$ compositions.

• $x_1 = 3$: split 2 items into 2 nonempty bins. $\\binom{1}{1} = 1$ composition.

Total: $3 + 2 + 1 = 6 = \\binom{4}{2}$.

The decomposition gives a visual proof of $\\sum_{j=1}^{n-k+1} \\binom{n - j - 1}{k - 2} = \\binom{n - 1}{k - 1}$, a shifted variant of the [hockey-stick identity](!#related-concepts).`,
      before: ``,
      after: `The frozen frame above is that example completed: six strips in rows of $3$, $2$, $1$. The countdown is shorter than the weak tool's — it starts at $x_1 = 1$ rather than $0$, and stops at $x_1 = 3$ rather than $5$, because the other bins each demand an item of their own.

Those missing rows are the whole difference between the two scenarios. Weak compositions of 5 into 3 number $\\binom{7}{2} = 21$; strong ones number $6$. The gap between them is the price of the phrase **at least one**.`,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward.

• **Step ▶** (Step forward) — drops one bar into [its chosen gap](!#items-and-gaps). Stop after each step to read the partial composition; un-marked bins show $?$ in their brackets.

• **▶ Play / ⏸ Pause** — runs continuously until all $\\binom{n - 1}{k - 1}$ strong compositions are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over.

The **Speed** slider controls how fast play advances. At slower speeds you can clearly see each bar travel from the holding row into a specific gap drop-zone, and watch the bin brackets update from $?$ to the actual run length.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how the identical items are rendered:

• **Balls mode** (default) — items appear as red circles. All circles are identical because the items themselves are indistinguishable. Best for the classical visual of dividing a row of dots.

• **Letters mode** — items appear as the letter A. Same identicality applies — every item shows the same letter. Best when reading compositions algebraically and emphasizing that the items are interchangeable.

The encoding is consistent across the items row, the mini cards in the completed grid, and the [right-panel narration](!#right-panel-and-progress). Bars and gap drop-zones are unaffected — they always render as accent-colored bars and dashed outlines regardless of mode.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header *Strong compositions (positive parts)* with the formula across multiple lines and a reminder that this counts positive integer solutions to $x_1 + x_2 + \\dots + x_k = n$ via choosing $k - 1$ of $n - 1$ gaps.

A **StepRow** is added for each [x₁-group](!#grouping-by-first-bin-count) as soon as a composition in that group starts or completes. Each StepRow shows:

• The **first bin count** as a label — *First bin: $x_1 = j$*.

• A **progress counter** $k / \\binom{n - j - 1}{k - 2}$ tracking how many compositions in this group have completed.

• A short **narration** of the structure: *When the first bin holds $j$ items ($x_1 = j$), the remaining $n - j$ items are split among the other $k - 1$ bins (each $\\geq 1$), giving $\\binom{n - j - 1}{k - 2}$ outcomes.* Edge cases get tailored phrasing: $x_1 = 1$ describes the minimum first-bin case; $x_1 = n - k + 1$ describes the maximum where the other bins each hold exactly $1$.

When all groups complete, every StepRow shows **done** with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Strong Composition`,
      content: `A **strong composition** of $n$ into $k$ parts is an ordered tuple $(x_1, x_2, \\dots, x_k)$ of **positive** integers summing to $n$:

$$x_1 + x_2 + \\dots + x_k = n, \\quad x_i \\geq 1$$

The word **strong** (sometimes simply **composition**) distinguishes this from a **weak** composition, which allows zero parts. Every strong composition is also a weak composition with no zeros.

The count of strong compositions is:

$$\\binom{n - 1}{k - 1}$$

The total number of compositions of $n$ (with any number of positive parts) is $2^{n-1}$, since each of the $n - 1$ gaps independently has or does not have a bar.

Examples:

• Ways to split $10$ identical pencils among $3$ kids so each gets at least one: $\\binom{9}{2} = 36$.

• Number of positive integer solutions to $a + b + c + d = 10$: $\\binom{9}{3} = 84$.

• Compositions of $5$ into exactly $3$ parts: $\\binom{4}{2} = 6$, namely $(3,1,1), (1,3,1), (1,1,3), (2,2,1), (2,1,2), (1,2,2)$.

• Total compositions of $4$: $2^3 = 8$ across all values of $k$.

On this page the idea runs live: from the [opening row of items](!#getting-started), bars drop into the [gaps between them](!#items-and-gaps), results group into [x₁-rows](!#grouping-by-first-bin-count), and the [n and k steppers](!#adjusting-n-and-k) run the count from the [single-divider case](!#two-bins-one-divider) through [twenty ways](!#twenty-ways-the-largest-run) to the [forced composition](!#when-k-equals-n-the-forced-composition) at $k = n$.

For deeper coverage of strong compositions, see the **strong composition** section on the combinations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Gap-Choice Argument`,
      content: `The classical proof maps strong compositions to a simple gap-selection problem.

**Arrange the $n$ items in a row.** Between each pair of adjacent items there is a gap, giving $n - 1$ gaps total. The gaps are the only candidate sites for dividers — putting a divider before the first item or after the last would create an empty bin, which strong compositions don't allow.

**A strong composition is determined by which $k - 1$ gaps hold dividers.** Choose any $k - 1$ of the $n - 1$ gaps to receive a bar. The bars partition the row into $k$ runs of consecutive items; the $i$th run is bin $i$, and its length is $x_i$. Every $x_i \\geq 1$ automatically because there's at least one item between any two adjacent bars (and at the ends).

**Count the selections.** Choosing $k - 1$ items from a set of $n - 1$ is a binomial coefficient:

$$\\binom{n - 1}{k - 1}$$

This is exactly the visual the tool implements. The $n$ items sit fixed; the $n - 1$ gaps appear as dashed drop-zones; the user (or the auto-play loop) drops $k - 1$ bars into chosen gaps; the bin brackets convert the chosen-gap set back into the tuple $(x_1, \\dots, x_k)$.

**Connection to weak compositions.** Set $y_i = x_i - 1 \\geq 0$. Then $y_1 + \\dots + y_k = n - k$ is a weak composition, counted by $\\binom{n - k + k - 1}{k - 1} = \\binom{n - 1}{k - 1}$. Same formula, derived two ways.`,
      before: ``,
      after: `The subtraction bijection is worth trying by hand on [the two-bin case](!#two-bins-one-divider): strip one item from each bin and the four strong compositions $(1,4), (2,3), (3,2), (4,1)$ become the weak compositions $(0,3), (1,2), (2,1), (3,0)$ of $3$ into $2$ parts — the same four outcomes, relabelled. Giving every bin its mandatory item up front turns "at least one" into "any number at all."

That translation is why the two scenarios share a formula shape while counting different things: reserve $k$ items to satisfy the minimums, then distribute the remaining $n - k$ freely. Any "at least one each" problem becomes an "any number each" problem after the reservation.`,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Weak composition** — same setup but empty bins allowed. Formula $\\binom{n + k - 1}{k - 1}$. Always at least as large as the strong count because zero parts are permitted.

**Simple combination** — the no-repetition unordered selection. $\\binom{n}{r}$. The strong-composition formula is itself a binomial coefficient, $\\binom{n - 1}{k - 1}$ — choosing gap positions out of available gaps.

**Distribution into cells** — distributes $n$ **distinct** items (not identical) into $k$ labeled cells with no capacity rule. Formula $k^n$.

**Partition into groups** — distributes $n$ distinct items into $k$ labeled boxes of fixed sizes. Multinomial coefficient $n! / (n_1! \\cdots n_k!)$.

**Total number of compositions** — across all values of $k$ from $1$ to $n$, summing $\\sum_{k=1}^{n} \\binom{n - 1}{k - 1} = 2^{n-1}$. Each of the $n - 1$ gaps is independently a bar or not — the [all-gaps-filled extreme](!#when-k-equals-n-the-forced-composition) is one term of that sum.

**Bijection $x_i \\mapsto x_i - 1$** — converts strong compositions of $n$ into $k$ parts into weak compositions of $n - k$ into $k$ parts. Both counted by $\\binom{n - 1}{k - 1}$, as the [gap-choice argument](!#the-gap-choice-argument) shows.

**Hockey-stick identity** — [grouping by x₁](!#grouping-by-first-bin-count) proves $\\sum_{j=1}^{n-k+1} \\binom{n - j - 1}{k - 2} = \\binom{n - 1}{k - 1}$.

**Combinatorics calculator** — to compute $\\binom{n - 1}{k - 1}$ for any $n$ and $k$, see the **strong composition calculator**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Two Bins, One Divider`,
      content: `Set $k = 2$ and the whole scenario collapses to a single question: *where does the one bar go?* With $n = 5$ items there are $4$ gaps, so $\\binom{4}{1} = 4$ compositions — $(1,4), (2,3), (3,2), (4,1)$.

Every composition is named by its bar's gap number, and the tuple is always $(j, n - j)$ for the gap $j$ chosen. Nothing is hidden: the count of compositions equals the count of gaps.

Note that $(0, 5)$ and $(5, 0)$ are missing, and their absence is the point — those would need a bar outside the row, which the [drop-zones](!#items-and-gaps) do not offer.`,
      before: ``,
      after: `This is the cleanest place to feel why the strong count uses $n - 1$ rather than $n + 1$. The weak version of the same question allows the bar to sit at either end as well, giving $\\binom{6}{1} = 6$ — the same four splits plus the two lopsided ones with an empty bin.

Two bins also connects to a familiar object: splitting a row of $n$ items into a nonempty prefix and a nonempty suffix is exactly choosing a cut point, and there are $n - 1$ of those. Many "in how many ways can a sequence be broken" questions reduce to this count.`,
      link: '',
    },
    obj12: {
      title: `Twenty Ways: The Largest Run`,
      content: `The tool's largest setting: $n = 7$ items, $k = 4$ bins, so three bars choose among six gaps — $\\binom{6}{3} = 20$ strong compositions.

The four $x_1$-rows hold $10, 6, 3, 1$ cards. Each is itself a complete smaller run: after the first bin takes $j$ items, the remainder is a strong composition of $7 - j$ into $3$ parts, and those counts $\\binom{5}{2}, \\binom{4}{2}, \\binom{3}{2}, \\binom{2}{2}$ are the triangular numbers walking down.

Twenty is also the middle of Pascal's sixth row — $\\binom{6}{3}$ is the largest binomial coefficient available at that level, which makes this the most crowded strip the tool can draw.`,
      before: ``,
      after: `The central-binomial position is not a coincidence of the caps: for fixed $n$, the strong-composition count $\\binom{n-1}{k-1}$ peaks when $k - 1$ is half of $n - 1$ — bins that are neither too few nor too many. Splitting seven items into four bins is the most "uncertain" question this tool can ask.

Summing across all $k$ for $n = 7$ would give $2^6 = 64$ compositions in total, of which these twenty are the four-bin share — the largest single slice, as [related concepts](!#related-concepts) notes.`,
      link: '',
    },
    obj13: {
      title: `When k = n: The Forced Composition`,
      content: `Push $k$ up to $n$ and the freedom vanishes: with as many bins as items and every bin demanding at least one, each bin must hold **exactly** one. The count bottoms out at

$$\\binom{n - 1}{n - 1} = 1$$

and the single composition is $(1, 1, \\dots, 1)$.

The picture makes the reasoning unnecessary: there are $n - 1$ gaps and $n - 1$ bars, so every gap takes a bar. Nothing is left to choose — the completed section holds one card, with every item fenced off alone.

This is also the boundary the $k \\leq n$ constraint protects. Asking for $k > n$ nonempty bins is impossible, and the formula agrees: $\\binom{n-1}{k-1} = 0$ when $k - 1 > n - 1$.`,
      before: ``,
      after: `Both extremes of the stepper now have names: at [k = 2](!#two-bins-one-divider) one bar roams freely among many gaps, and here every gap is occupied. Between them the count rises and falls along a row of Pascal's triangle, peaking near the middle as the [largest run](!#twenty-ways-the-largest-run) shows.

The zero case beyond the boundary is worth stating because word problems produce it constantly: *"distribute 4 identical prizes among 6 people, everyone getting at least one"* has no solutions at all, and the binomial coefficient reports that honestly rather than erroring.`,
      link: '',
    },
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
      question: "What is a strong composition?",
      answer: "A strong composition of n into k parts is an ordered tuple of positive integers that sum to n. Equivalently, it is a way to distribute n identical items into k distinct bins where every bin must hold at least one item. The number of strong compositions is the binomial coefficient n minus 1 choose k minus 1."
    },
    obj2: {
      question: "What is the formula for strong compositions?",
      answer: "The number of strong compositions of n into exactly k positive parts is n minus 1 choose k minus 1. The derivation uses the n minus 1 gaps between adjacent items and chooses k minus 1 of them to place dividers. Each choice corresponds to a unique strong composition."
    },
    obj3: {
      question: "What is the difference between strong and weak composition?",
      answer: "A strong composition requires every part to be at least 1, so every bin is nonempty. A weak composition allows zero parts, so some bins may be empty. Strong compositions are counted by n minus 1 choose k minus 1; weak compositions by n plus k minus 1 choose k minus 1, which is always larger."
    },
    obj4: {
      question: "How many strong compositions does the number 5 have into 3 parts?",
      answer: "The number of strong compositions of 5 into exactly 3 positive parts is 4 choose 2 = 6. The compositions are (3,1,1), (1,3,1), (1,1,3), (2,2,1), (2,1,2), and (1,2,2)."
    },
    obj5: {
      question: "When should I use the strong composition formula?",
      answer: "Whenever a problem distributes identical objects into distinguishable bins with the constraint that every bin receives at least one object. Common cases include splitting identical resources fairly so no recipient is left out, counting positive integer solutions to linear equations, and any scenario where empty groups are not allowed."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Strong Composition Visualizer",
      "description": "Visualize strong compositions of n identical items into k bins with every bin nonempty, using the formula C(n-1, k-1) and a gap-selection argument that drops dividers between items.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/strong-composition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every C(n-1, k-1) strong composition step by step by dropping bars into chosen gaps between items",
        "n items sit fixed with n-1 numbered gap drop-zones marking the only valid divider positions",
        "Bin bands highlight runs of consecutive items in alternating colors and progressive bracket labels reveal x_i values as bars land",
        "Twin readouts under the strip: the composition tuple (x1, x2, ..., xk) and the chosen-gaps set",
        "Independent steppers for n (3 to 7) and k (2 to 4) with the k ≤ n constraint enforced and the formula updating live in the header",
        "Completed compositions grouped by first-bin count x1 with per-group sizes",
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
      "keywords": "strong composition, strong composition visualizer, C(n-1, k-1) formula, positive compositions, compositions of n into k parts, composition with positive parts, dividing items every bin nonempty, strong composition formula, positive integer solutions, gaps between items combinatorics, compositions combinatorics, visualize strong compositions, balls into nonempty bins, how many strong compositions, strict composition"
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
          "name": "Strong Composition Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/strong-composition"
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


  // Frozen-state framed units (Line 1): phases + notable (n, k) configurations.
  const d = strongCompositionDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    idle: u('idle', '(n, k) = (5, 3), idle, frozen',
      'Five items shoulder to shoulder with four dashed drop-zones between them — the only legal landing sites, and the reason no bin can end up empty.'),
    building: u('building', '(5, 3) mid-build, frozen',
      'One bar seated in gap 1, sealing x₁ = 1; the second rides its guide toward gap 3. Bars can never share a gap, so bins never collapse to zero.'),
    default53: u('default53', 'C(4, 2) complete, frozen',
      'Six strips in rows of 3, 2, 1 — a countdown that starts at x₁ = 1, because every other bin is owed an item of its own.'),
    twoBins: u('twoBins', 'C(4, 1) complete, frozen',
      'One bar, four gaps, four compositions: each card is named by the gap its divider occupies, and the tuple is always (j, n − j).'),
    big74: u('big74', 'C(6, 3) complete, frozen',
      'Twenty compositions in rows of 10, 6, 3, 1 — the centre of Pascal’s sixth row, the most crowded strip the tool can draw.'),
    kEqualsN: u('kEqualsN', 'k = n complete, frozen',
      'Every gap takes a bar and every bin holds exactly one item: a single card, the forced composition (1, 1, 1, 1).'),
  };

  // Per-state panel explanations (Line 1). Rendered under the right panel's
  // step rows through processContent — same-page !# anchors work.
  const explanations = {
    idle: `Bars land only between items — never at the ends — so "every bin gets at least one" is enforced by the board, not by arithmetic. [Learn more about getting started](!#getting-started) · [Adjusting n and k](!#adjusting-n-and-k)`,
    building: `Each bar takes its own gap, and each gap sits between two items — that is why no bin here can ever be empty. [Learn more about items and gaps](!#items-and-gaps) · [Adjusting n and k](!#adjusting-n-and-k)`,
    default53: `All C(4, 2) = 6 compositions are in, in rows of 3, 2, 1 by first-bin count — a shorter countdown than the weak case, since every bin is owed an item. [Learn more about the grouping](!#grouping-by-first-bin-count) · [Adjusting n and k](!#adjusting-n-and-k)`,
    twoBins: `One divider among the gaps: the composition is just (j, n − j), and the count of outcomes is the count of gaps. [Learn more about the two-bin case](!#two-bins-one-divider) · [Adjusting n and k](!#adjusting-n-and-k)`,
    big74: `Three bars among six gaps give C(6, 3) = 20 — the peak of Pascal's sixth row, and the largest run this tool draws. [Learn more about the largest run](!#twenty-ways-the-largest-run) · [Adjusting n and k](!#adjusting-n-and-k)`,
    kEqualsN: `With as many bins as items, every bin must hold exactly one: the count collapses to a single forced composition. [Learn more about the k = n boundary](!#when-k-equals-n-the-forced-composition) · [Adjusting n and k](!#adjusting-n-and-k)`,
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
        title: "Strong Composition: C(n-1, k-1) Formula | Learn Math Class",
        description: "Visualize strong compositions of n identical items into k bins, each bin holding at least one item. Choose k−1 gaps among n−1 to count C(n−1, k−1) outcomes.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/strong-composition",
        name: "Strong Composition Visualizer",
        hubDescription: "Drop k−1 bars into the n−1 gaps between identical items to split them into k nonempty bins — every bin must hold at least one. The gap-selection encoding makes C(n−1, k−1) visible directly, with live bin brackets and a chosen-gaps readout updating as the bars land.",
        category: "Combinations",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><text x="40" y="14" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">C(n&#8722;1, k&#8722;1)</text><circle cx="10" cy="34" r="4" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.9"/><circle cx="22" cy="34" r="4" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.9"/><circle cx="34" cy="34" r="4" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.9"/><circle cx="46" cy="34" r="4" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.9"/><circle cx="58" cy="34" r="4" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.9"/><circle cx="70" cy="34" r="4" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.9"/><line x1="16" y1="30" x2="16" y2="38" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="1.5,1.5"/><line x1="40" y1="30" x2="40" y2="38" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="1.5,1.5"/><line x1="64" y1="30" x2="64" y2="38" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="1.5,1.5"/><line x1="28" y1="26" x2="28" y2="42" stroke="#FAC775" stroke-width="2.6" stroke-linecap="round"/><line x1="52" y1="26" x2="52" y2="42" stroke="#FAC775" stroke-width="2.6" stroke-linecap="round"/><path d="M5 50 L5 55 L23 55 L23 50" fill="none" stroke="#97C459" stroke-width="1.2"/><path d="M29 50 L29 55 L47 55 L47 50" fill="none" stroke="#97C459" stroke-width="1.2"/><path d="M53 50 L53 55 L75 55 L75 50" fill="none" stroke="#97C459" stroke-width="1.2"/><text x="14" y="68" font-family="Georgia,serif" font-size="8" fill="#C0DD97" text-anchor="middle">2</text><text x="38" y="68" font-family="Georgia,serif" font-size="8" fill="#C0DD97" text-anchor="middle">2</text><text x="64" y="68" font-family="Georgia,serif" font-size="8" fill="#C0DD97" text-anchor="middle">2</text></svg>`
      },

    }
  }
}

export default function StrongCompositionVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

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
    stateRow('obj2', 'items-and-gaps', 'building'),
    plain('obj3', 'adjusting-n-and-k'),
    stateRow('obj4', 'grouping-by-first-bin-count', 'default53'),
    stateRow('obj11', 'two-bins-one-divider', 'twoBins'),
    stateRow('obj12', 'twenty-ways-the-largest-run', 'big74'),
    stateRow('obj13', 'when-k-equals-n-the-forced-composition', 'kEqualsN'),
    plain('obj5', 'transport-controls'),
    plain('obj6', 'mode-switch'),
    plain('obj7', 'right-panel-and-progress'),
    plain('obj8', 'what-is-a-strong-composition'),
    plain('obj9', 'the-gap-choice-argument'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Strong Composition</h1>
      <br/>
      <StrongComposition explanations={explanations}/>
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