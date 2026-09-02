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
      after: ``,
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

Notice what's impossible here: a bar cannot sit at position 0 (before item 1) or position $n$ (after item $n$), and two bars cannot share a gap. Both restrictions are exactly what enforces $x_i \\geq 1$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n and k`,
      content: `Two steppers in the control bar control the size:

• **n** sets the number of identical items. Range $3$ to $7$.

• **k** sets the number of bins. Range $2$ to $4$, with the additional constraint $k \\leq n$ (you can't have more nonempty bins than items).

Common combinations:

• $n = 3, k = 2$: $\\binom{2}{1} = 2$ compositions: $(2, 1)$ and $(1, 2)$.

• $n = 4, k = 2$: $\\binom{3}{1} = 3$ compositions.

• $n = 5, k = 3$: $\\binom{4}{2} = 6$ compositions.

• $n = 6, k = 3$: $\\binom{5}{2} = 10$ compositions.

• $n = 7, k = 4$: $\\binom{6}{3} = 20$ compositions.

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

The decomposition gives a visual proof of $\\sum_{j=1}^{n-k+1} \\binom{n - j - 1}{k - 2} = \\binom{n - 1}{k - 1}$, a shifted variant of the hockey-stick identity.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward.

• **Step ▶** (Step forward) — drops one bar into its chosen gap. Stop after each step to read the partial composition; un-marked bins show $?$ in their brackets.

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

The encoding is consistent across the items row, the mini cards in the completed grid, and the right-panel narration. Bars and gap drop-zones are unaffected — they always render as accent-colored bars and dashed outlines regardless of mode.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header *Strong compositions (positive parts)* with the formula across multiple lines and a reminder that this counts positive integer solutions to $x_1 + x_2 + \\dots + x_k = n$ via choosing $k - 1$ of $n - 1$ gaps.

A **StepRow** is added for each $x_1$-group as soon as a composition in that group starts or completes. Each StepRow shows:

• The **first bin count** as a label — *First bin: $x_1 = j$*.

• A **progress counter** $k / \\binom{n - j - 1}{k - 2}$ tracking how many compositions in this group have completed.

• A short **narration** of the structure: *When the first bin holds $j$ items ($x_1 = j$), the remaining $n - j$ items are split among the other $k - 1$ bins (each $\\geq 1$), giving $\\binom{n - j - 1}{k - 2}$ outcomes.* Edge cases get tailored phrasing: $x_1 = 1$ describes the minimum first-bin case; $x_1 = n - k + 1$ describes the maximum where the other bins each hold exactly $1$.

When all groups complete, every StepRow shows *done* with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Strong Composition`,
      content: `A **strong composition** of $n$ into $k$ parts is an ordered tuple $(x_1, x_2, \\dots, x_k)$ of **positive** integers summing to $n$:

$$x_1 + x_2 + \\dots + x_k = n, \\quad x_i \\geq 1$$

The word *strong* (sometimes simply *composition*) distinguishes this from a **weak** composition, which allows zero parts. Every strong composition is also a weak composition with no zeros.

The count of strong compositions is:

$$\\binom{n - 1}{k - 1}$$

The total number of compositions of $n$ (with any number of positive parts) is $2^{n-1}$, since each of the $n - 1$ gaps independently has or does not have a bar.

Examples:

• Ways to split $10$ identical pencils among $3$ kids so each gets at least one: $\\binom{9}{2} = 36$.

• Number of positive integer solutions to $a + b + c + d = 10$: $\\binom{9}{3} = 84$.

• Compositions of $5$ into exactly $3$ parts: $\\binom{4}{2} = 6$, namely $(3,1,1), (1,3,1), (1,1,3), (2,2,1), (2,1,2), (1,2,2)$.

• Total compositions of $4$: $2^3 = 8$ across all values of $k$.

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
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Weak composition** — same setup but empty bins allowed. Formula $\\binom{n + k - 1}{k - 1}$. Always at least as large as the strong count because zero parts are permitted.

**Simple combination** — the no-repetition unordered selection. $\\binom{n}{r}$. The strong-composition formula is itself a binomial coefficient, $\\binom{n - 1}{k - 1}$ — choosing gap positions out of available gaps.

**Distribution into cells** — distributes $n$ **distinct** items (not identical) into $k$ labeled cells with no capacity rule. Formula $k^n$.

**Partition into groups** — distributes $n$ distinct items into $k$ labeled boxes of fixed sizes. Multinomial coefficient $n! / (n_1! \\cdots n_k!)$.

**Total number of compositions** — across all values of $k$ from $1$ to $n$, summing $\\sum_{k=1}^{n} \\binom{n - 1}{k - 1} = 2^{n-1}$. Each of the $n - 1$ gaps is independently a bar or not.

**Bijection $x_i \\mapsto x_i - 1$** — converts strong compositions of $n$ into $k$ parts into weak compositions of $n - k$ into $k$ parts. Both counted by $\\binom{n - 1}{k - 1}$.

**Hockey-stick identity** — grouping by $x_1$ proves $\\sum_{j=1}^{n-k+1} \\binom{n - j - 1}{k - 2} = \\binom{n - 1}{k - 1}$.

**Combinatorics calculator** — to compute $\\binom{n - 1}{k - 1}$ for any $n$ and $k$, see the **strong composition calculator**.`,
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


  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Strong Composition: C(n-1, k-1) Formula | Learn Math Class",
        description: "Visualize strong compositions of n identical items into k bins, each bin holding at least one item. Choose k−1 gaps among n−1 to count C(n−1, k−1) outcomes.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/strong-composition",
        name: "Strong Composition Visualizer",
        hubDescription: "Drop k−1 bars into the n−1 gaps between identical items to split them into k nonempty bins — every bin must hold at least one. The gap-selection encoding makes C(n−1, k−1) visible directly, with live bin brackets and a chosen-gaps readout updating as the bars land.",
        category: "Combinations",
        subCategory: ""
      },

    }
  }
}

export default function StrongCompositionVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Strong Composition</h1>
      <br/>
      <StrongComposition/>
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