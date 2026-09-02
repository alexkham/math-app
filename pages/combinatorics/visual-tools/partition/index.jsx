// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import PartitionIntoGroups from '../../../../app/components/combinatorics/new-visualizers/scenes/PartitionIntoGroups'


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
//         url: "/combinatorics/visual-tools/partition",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Partition into Groups</h1>
//    <br/>
//    <PartitionIntoGroups/>
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
import PartitionIntoGroups from '../../../../app/components/combinatorics/new-visualizers/scenes/PartitionIntoGroups'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import partitionIntoGroupsDiagrams from '@/app/components/combinatorics/new-visualizers/scenes/partitionIntoGroupsDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'partition into groups',
    'partition into groups visualizer',
    'multinomial coefficient',
    'n!/(n1! n2!) formula',
    'distributing distinct items',
    'labeled boxes partition',
    'multinomial formula',
    'partition of n items',
    'dividing items into groups',
    'visualize multinomial coefficient',
    'partition combinatorics',
    'distinct items labeled boxes',
    'ordered partition of a set',
    'split items into k groups',
    'multinomial partition calculator'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Partition into groups** — a split of $n$ distinct items into $k$ labeled boxes of fixed sizes $(n_1, n_2, \\dots, n_k)$ with $n_1 + n_2 + \\dots + n_k = n$. The count is $n! / (n_1! \\cdot n_2! \\cdots n_k!)$.

**Multinomial coefficient** — the formula above, written $\\binom{n}{n_1, n_2, \\dots, n_k}$. Generalizes the binomial coefficient $\\binom{n}{r}$ to more than two groups.

**Labeled boxes** — the boxes are distinguishable, named *Box A, Box B, Box C, …* in the tool. Swapping the entire contents of two boxes produces a different partition even if both boxes have the same size.

**Within-box order does not matter** — what counts is which items end up together in each box, not the order they appear in. Each box is treated as a set.

**Partition shape** — the sequence of box sizes, written like $2+2$, $3+1+1$, or $2+2+1$. The visualizer cycles through [seven curated shapes](!#the-partition-stepper).

**Item-1 destination group** — the [family of partitions](!#grouping-by-item-1-destination) where item 1 (the red ball) ends up in a specific box. The completed section groups results by this destination, giving $k$ rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with partition shape $2+2$ — four items split into two boxes of two. The scene splits into three areas:

• A **source row** at the top showing the $n$ available items.

• A **build boxes** row in the middle with $k$ labeled boxes, each captioned *BOX A (n1), BOX B (n2), …* with the box size in parentheses.

• A **completed** section below, where every finished partition is filed under the row matching which box received item 1.

To run the visualization:

• Press **▶ Play** to auto-build all $n! / (n_1! \\cdots n_k!)$ partitions.

• Press **Step ▶** to advance one ball at a time.

• Press **◀** to step backward through the animation.

• Adjust the **Speed** slider.

The header shows the multinomial formula for the current shape and a live status line such as *Item 1 in Box A: $k$ / size*.`,
      before: ``,
      after: `The frozen frame above is the opening position for the default shape: four bright balls, and below them two labeled boxes, each with two dashed slots. The build area is no longer a row — it is a floor plan, and the animation's job is to move everyone into a room.

The captions carry the constraint: BOX A (2), BOX B (2) — sizes fixed in advance. That is what separates this scenario from free distribution: the shape of the answer is decided before any ball moves; only the **assignment** is in question.`,
      link: '',
    },

    obj2: {
      title: `The Build Boxes`,
      content: `The build area has $k$ separate boxes side by side, each labeled *BOX A, BOX B, BOX C, …* with the size of that box written in parentheses below the letter. What to watch:

• **Box outlines** in the surface color, with a stronger border that makes the boxes visually distinct from the build area as a whole.

• **Dashed circle outlines** inside each box mark the $n_i$ slot positions for that box.

• When a ball is in flight from the source row to a slot, a **dotted guide line** in that ball's color traces the trajectory. The ball may travel into any of the $k$ boxes.

• Balls land in canonical order — the tool fills box A before box B before box C, and within each box in increasing item-id order — so equivalent partitions render the same way.

• In the source row, items already placed (or in flight) are **dimmed**.

• When all $n$ slots are filled across all boxes, a **flash ring** briefly pulses around the entire box row, and the completed partition is filed in the [right row below](!#grouping-by-item-1-destination).`,
      before: ``,
      after: `The frozen frame above catches the second partition mid-build: A and C have settled into Box A, and B is riding its dotted guide into Box B — with D still bright, its destination already forced. When only one slot remains, the "choice" is no choice at all.

Watch the canonical filling discipline at work: boxes fill left to right, members ascending. Like the combination tool's smallest-first landings, this is spelling, not mathematics — a rule that makes equal partitions look equal, so the count on screen is honest.`,
      link: '',
    },

    obj3: {
      title: `The Partition Stepper`,
      content: `Instead of separate $n$ and $r$ steppers, this tool has a **partition stepper** that cycles through seven curated shapes:

• [2+2](!#deriving-the-multinomial-coefficient) — $n = 4$, two boxes of two. $4!/(2! \\cdot 2!) = 6$ partitions.

• [3+1](!#three-plus-one-a-combination-in-disguise) — $n = 4$, one box of three plus a singleton. $4!/(3! \\cdot 1!) = 4$ partitions.

• [2+1+1](!#grouping-by-item-1-destination) — $n = 4$, one box of two plus two singletons. $4!/(2! \\cdot 1! \\cdot 1!) = 12$ partitions.

• [4+1](!#four-plus-one-choosing-who-stands-alone) — $n = 5$, one box of four plus a singleton. $5!/(4! \\cdot 1!) = 5$ partitions.

• [3+2](!#three-plus-two-the-team-split) — $n = 5$. $5!/(3! \\cdot 2!) = 10$ partitions.

• [3+1+1](!#three-plus-one-plus-one-equal-boxes) — $n = 5$. $5!/(3! \\cdot 1! \\cdot 1!) = 20$ partitions.

• [2+2+1](!#two-plus-two-plus-one-the-largest-run) — $n = 5$. $5!/(2! \\cdot 2! \\cdot 1!) = 30$ partitions.

Use the **◀** and **▶** buttons next to *partition =* to cycle. Each preset resets the build, refreshes the formula in the header, and rebuilds the completed section into a new set of item-1-destination rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by Item-1 Destination`,
      content: `The completed section organizes partitions by **which box contains item 1** (the red ball). There are exactly $k$ rows — one per box — and each row holds every partition where item 1 ended up in that particular box.

Group sizes are not all equal. If item 1 goes into box $i$ (of size $n_i$), the remaining $n - 1$ items must fill the remaining slots — one less slot in box $i$, all slots in the other boxes — and there are:

$$\\frac{(n - 1)!}{n_1! \\cdot n_2! \\cdots (n_i - 1)! \\cdots n_k!}$$

ways to do so. Summing this across the $k$ possible destinations recovers the full multinomial:

$$\\sum_{i=1}^{k} \\frac{(n - 1)!}{n_1! \\cdots (n_i - 1)! \\cdots n_k!} = \\frac{n!}{n_1! \\cdot n_2! \\cdots n_k!}$$

This is the multinomial analogue of Pascal's identity. For example with shape $2+1+1$:

• Item 1 in Box A (size 2): remaining $3$ items split as $1+1+1$, $3!/(1!\\cdot 1!\\cdot 1!) = 6$ partitions.

• Item 1 in Box B (size 1): Box B is full, remaining $3$ items split as $2+1$, $3!/(2!\\cdot 1!) = 3$.

• Item 1 in Box C (size 1): same as B, $3$ partitions.

Total: $6 + 3 + 3 = 12 = 4!/(2! \\cdot 1! \\cdot 1!)$.`,
      before: ``,
      after: `The frozen frame above is that worked example completed: shape $2+1+1$, twelve cards in rows of $6$, $3$, and $3$ by the red ball's destination. The top row is largest because parking item 1 in the big box leaves the freest remainder — the same lopsidedness the multiset tool showed, for the same reason.

Following one ball through a partition problem is the oldest trick in combinatorics — condition on where a distinguished element goes, and the problem splits into smaller copies of itself. The rows above are that recursion drawn as furniture.`,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single partition or pausing mid-build.

• **Step ▶** (Step forward) — advances one ball into [one slot in the relevant box](!#the-build-boxes). Stop after each step to read the partial partition.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all multinomial partitions are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over from the first partition.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source into a specific box and follow the dotted guide line.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

• **Balls mode** (default) — items appear as colored circles. The item-1 chip in each StepRow is a red circle. Best for tracking item identity at a glance and watching the red ball flow into different boxes across rows.

• **Letters mode** — items appear with letter labels (A, B, C, …). The chip becomes the letter A in red. Best for reading off each partition as a set of labeled groups, like $\\{A, C\\} \\mid \\{B, D\\}$.

The encoding is consistent across the source row, the build boxes, the flying ball, every mini partition card in the completed grid, and the [right-panel narration](!#right-panel-and-progress). Note the labels A, B, C, D inside the boxes (box names) are distinct from the item letters in letters mode — boxes are always named with the same A–D labels regardless of mode.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header **Partitions into labeled groups** and the full multinomial formula for the current partition shape, with a reminder that boxes are distinguishable and within-box order doesn't matter.

A **StepRow** is added for each [item-1-destination group](!#grouping-by-item-1-destination) as soon as a partition in that group starts or completes. Each StepRow shows:

• The **destination** as a chip and arrow — for instance, *A (red) → Box A*.

• A **progress counter** $k / \\text{group size}$ tracking how many partitions in this group have completed.

• A short **narration** of the structure: *Item 1 is placed in Box A (size 2). The remaining 3 items partition into the other boxes of sizes 1, 1, 1 (Box A needs 1 more), giving $3!/(1! \\cdot 1! \\cdot 1!) = 6$ partitions.* The formula reflects the reduced sizes after item 1 is placed.

When all groups complete, every StepRow shows **done** with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Partition into Groups`,
      content: `A **partition into groups** distributes $n$ distinct items into $k$ **labeled** boxes of fixed sizes $(n_1, n_2, \\dots, n_k)$ with $n_1 + n_2 + \\dots + n_k = n$. The count is the **multinomial coefficient**:

$$\\binom{n}{n_1, n_2, \\dots, n_k} = \\frac{n!}{n_1! \\cdot n_2! \\cdots n_k!}$$

Two design choices are worth pinning down:

• **Boxes are labeled.** Swapping the entire contents of two boxes counts as a different partition, even if both boxes have the same size. So $2+2$ on four items gives $6$ partitions, not $3$.

• **Within a box, order does not matter.** Each box is a set.

Examples:

• Splitting $10$ players into two teams of $5$ (labeled team red vs team blue): $10!/(5! \\cdot 5!) = 252$ ways.

• Dealing $13$ cards each to four labeled players from a $52$-card deck: $52!/(13!)^4 \\approx 5.36 \\times 10^{28}$ deals.

• Sorting $9$ students into three labeled committees of sizes $4, 3, 2$: $9!/(4! \\cdot 3! \\cdot 2!) = 1260$ assignments.

Note: if the boxes were **unlabeled** instead, you would divide by the number of permutations of equally-sized boxes, since those rearrangements no longer count separately. This tool covers the labeled case — the difference is drawn out under [equal boxes](!#three-plus-one-plus-one-equal-boxes).

On this page the idea runs live: from the [opening floor plan](!#getting-started), the [build boxes](!#the-build-boxes) fill in canonical order, results group by the red ball's destination, and the [seven shapes of the stepper](!#the-partition-stepper) walk the formula from six partitions up to thirty.

For deeper coverage, see the **partition into groups** section on the combinations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Deriving the Multinomial Coefficient`,
      content: `Two equivalent derivations.

**By sequential choice.** Fill the boxes in order:

• Choose $n_1$ items for Box A: $\\binom{n}{n_1}$ ways.

• From the remaining $n - n_1$, choose $n_2$ for Box B: $\\binom{n - n_1}{n_2}$ ways.

• From the remaining $n - n_1 - n_2$, choose $n_3$ for Box C: $\\binom{n - n_1 - n_2}{n_3}$ ways.

• Continue until all boxes are filled.

Multiplying these binomial coefficients telescopes:

$$\\binom{n}{n_1} \\binom{n - n_1}{n_2} \\binom{n - n_1 - n_2}{n_3} \\cdots = \\frac{n!}{n_1! \\cdot n_2! \\cdots n_k!}$$

**By over-counting and dividing.** Arrange all $n$ items in a sequence ($n!$ ways), then declare that the first $n_1$ items go in Box A, the next $n_2$ in Box B, and so on. Within each box the internal order doesn't matter, so we have over-counted by $n_1! \\cdot n_2! \\cdots n_k!$. Divide:

$$\\frac{n!}{n_1! \\cdot n_2! \\cdots n_k!}$$

The tool visualizes the equivalent decomposition: every partition has a unique destination for item 1. [Group by that destination](!#grouping-by-item-1-destination). Summing $(n - 1)! / (n_1! \\cdots (n_i - 1)! \\cdots n_k!)$ across all $k$ destinations reconstructs the multinomial coefficient.`,
      before: ``,
      after: `The frozen frame above is the over-count-and-divide argument at its smallest: shape $2+2$, six cards. Line up all $4! = 24$ orderings of the four balls, cut each in half, and every card here absorbs exactly $2! \\cdot 2! = 4$ of them — the internal shufflings of each box.

Six is also small enough to expose the labeled-boxes convention: cards like $\\{1,2\\} \\mid \\{3,4\\}$ and $\\{3,4\\} \\mid \\{1,2\\}$ both appear, because Box A and Box B are different places. Merge them and you would have $3$ — the unlabeled count, one division further down.`,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Simple combination** — the two-group special case. $C(n, r) = \\binom{n}{r, n - r} = n! / (r! (n - r)!)$.

**Permutation with identical items** — algebraically the same formula $n! / (k_1! k_2! \\cdots)$, but a different scenario. There the $k_i$ are repeat counts of identical items, and the question is distinct multiset arrangements. Here the $n_i$ are box sizes, the items are all distinct, and the question is distinct box assignments.

**Distribution into cells** — relaxes the fixed-size constraint. $n$ distinct items go into $r$ labeled boxes of any size, each item picking a box independently. Formula $r^n$.

**Stirling numbers of the second kind $S(n, k)$** — the **unlabeled** counterpart. Counts partitions of $n$ distinct items into $k$ unlabeled non-empty subsets. To convert: a labeled-box partition with all distinct sizes corresponds to $k!$ labeled versions of one unlabeled partition — the distinction explored under [equal boxes](!#three-plus-one-plus-one-equal-boxes).

**Multinomial theorem** — the algebraic context: $(x_1 + x_2 + \\dots + x_k)^n$ expands with multinomial coefficients $\\binom{n}{n_1, \\dots, n_k}$ on each monomial $x_1^{n_1} \\cdots x_k^{n_k}$.

**Combinatorics calculator** — to compute the multinomial coefficient $n!/(n_1! \\cdots n_k!)$ for any partition shape, see the **partition into groups calculator**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `3+1: A Combination in Disguise`,
      content: `Any two-box partition is secretly a combination: deciding who goes in Box A completely determines who goes in Box B. For shape $3+1$ on four items, $4!/(3! \\cdot 1!) = 4$ — which is just $\\binom{4}{3}$, choosing the trio (or equivalently $\\binom{4}{1}$, choosing the singleton).

Run it and read the four cards that way: each card is named by the one item standing alone on the right of the divider.

The two item-1-destination rows show the split $3 + 1$: three partitions where the red ball joins the trio, one where it stands alone.`,
      before: ``,
      after: `The identity in play is worth writing down: the multinomial with two parts **is** the binomial, $\\binom{n}{a, b} = \\binom{n}{a}$ when $a + b = n$. The multinomial coefficient is not a new formula so much as the binomial's grown-up form.

Every two-box shape in the stepper — this one, [2+2](!#deriving-the-multinomial-coefficient), [4+1](!#four-plus-one-choosing-who-stands-alone), and [3+2](!#three-plus-two-the-team-split) — can be read back through the combination tool. The three-box shapes are where the multinomial earns its longer name.`,
      link: '',
    },
    obj12: {
      title: `4+1: Choosing Who Stands Alone`,
      content: `Five items, one box of four, one singleton: $5!/(4! \\cdot 1!) = 5$ partitions — the smallest count in the stepper's $n = 5$ range, and the fastest to predict. A partition here is fully described by one decision: **who stands alone**.

The five cards read like a roll call: each shows four balls together and one apart, and the lone ball is different in every card.

The item-1-destination rows split $4 + 1$: in four partitions the red ball is part of the crowd; in exactly one, it is the loner.`,
      before: ``,
      after: `Singleton boxes are the multinomial's pressure valve: each $1!$ in the denominator divides by nothing, so a singleton adds a factor of choice without any collapsing. That is why this count equals plain $n$ — five ways to pick the loner, nothing further to decide.

Compare against [3+1](!#three-plus-one-a-combination-in-disguise) to see the pattern scale: same shape idea, one more item, count climbing from $4$ to $5$ — always $n$, whatever the crowd size.`,
      link: '',
    },
    obj13: {
      title: `3+2: The Team Split`,
      content: `The classic unequal team split: five players into a squad of three and a squad of two, $5!/(3! \\cdot 2!) = 10$ ways.

Ten is a number this site has met twice already on the combination page — and no accident: choosing the trio **is** the partition, so this count equals $\\binom{5}{3} = \\binom{5}{2} = 10$. The two-box multinomial and the binomial symmetry are the same fact viewed from different tools.

The item-1-destination rows split $6 + 4$: six partitions put the red ball on the trio (leaving $\\binom{4}{2} = 6$ ways to finish that team), four put it on the pair (leaving $\\binom{4}{1} = 4$).`,
      before: ``,
      after: `This is the shape to use for the ten-players-two-teams word problems that fill textbooks — with one caution the labeled convention makes visible: splitting ten players into teams of $5$ and $5$ gives $\\binom{10}{5} = 252$ only when the teams are named (red vs blue). Unnamed equal teams need a further division by $2$.

Unequal sizes dodge that subtlety, which is why $3+2$ is the cleanest teaching case: the sizes themselves distinguish the boxes, and labels add nothing. The subtlety returns with force in [3+1+1](!#three-plus-one-plus-one-equal-boxes).`,
      link: '',
    },
    obj14: {
      title: `3+1+1: Equal Boxes and the Labeled Convention`,
      content: `Shape $3+1+1$ is where the **labeled boxes** convention stops being a technicality: $5!/(3! \\cdot 1! \\cdot 1!) = 20$ partitions — but Boxes B and C have the same size, so every way of splitting the items appears **twice**, once with the two loners swapped between the boxes.

Run it and find a witness pair: some card with item 4 in Box B and item 5 in Box C, and its twin with them exchanged. Both count, because Box B and Box C are different places.

If the two singleton boxes were indistinguishable — "split five people into a trio and two loners" — the answer would be $20 / 2! = 10$.`,
      before: ``,
      after: `The general rule: unlabeled equally-sized boxes divide the labeled count by $m!$ for every family of $m$ same-size boxes. That correction is the bridge from the multinomial to the Stirling-style counts under [related concepts](!#related-concepts).

Word problems hide this decision constantly — "committees" are usually labeled by their purpose, "piles" usually are not. The tool's labeled boxes make the convention visible so the divide-or-don't decision becomes conscious rather than accidental.`,
      link: '',
    },
    obj15: {
      title: `2+2+1: The Largest Run`,
      content: `The stepper's finale: five items into two pairs and a singleton, $5!/(2! \\cdot 2! \\cdot 1!) = 30$ partitions — the largest enumeration on this page.

The three item-1-destination rows hold $12 + 12 + 6$ cards: the red ball can join either pair (twelve ways each, by symmetry of the two equal boxes) or stand alone (six ways, one per arrangement of the remaining four into $2+2$).

Like $3+1+1$, this shape carries an equal-size pair of boxes, so every underlying "two pairs and a loner" grouping appears twice — $30$ labeled, $15$ unlabeled.`,
      before: ``,
      after: `Thirty cards is where watching gives way to counting — a full Play run takes its time, and nobody would tally the grid by hand. The formula's compression is the takeaway: three small factorials in a denominator replace a screen and a half of enumeration.

The $12 + 12 + 6$ row split is also a neat self-check of the destination decomposition from [the grouping section](!#grouping-by-item-1-destination): two symmetric destinations must contribute equally, and they visibly do.`,
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
      question: "What is a partition into groups?",
      answer: "A partition into groups is a way of splitting n distinct items into k labeled boxes of fixed sizes. The boxes are distinguishable, but the order of items within each box does not matter. The number of partitions is the multinomial coefficient, n factorial divided by the product of n1 factorial, n2 factorial, and so on for each box size."
    },
    obj2: {
      question: "What is the multinomial coefficient formula?",
      answer: "The multinomial coefficient is n factorial divided by the product of n1 factorial, n2 factorial, and so on through nk factorial, where the ni are the fixed sizes of the k labeled boxes and they sum to n. For example, splitting 10 items into boxes of sizes 5, 3, and 2 gives 10 factorial divided by 5 factorial times 3 factorial times 2 factorial, which equals 2520."
    },
    obj3: {
      question: "How is this different from a combination?",
      answer: "A simple combination is the two-group special case where you choose r items for one group and leave n minus r in the other. A partition into groups generalizes this to k groups of fixed sizes simultaneously. The multinomial coefficient reduces to the binomial coefficient when there are only two boxes."
    },
    obj4: {
      question: "Are the boxes labeled or unlabeled?",
      answer: "In this scenario the boxes are labeled, meaning that swapping the entire contents of two boxes counts as a different partition even if both boxes have the same size. So splitting four items into two boxes of two gives 6 partitions, not 3. The unlabeled version is counted by Stirling numbers of the second kind."
    },
    obj5: {
      question: "When should I use the multinomial coefficient?",
      answer: "Whenever a problem distributes distinct items into distinguishable groups with predetermined sizes. Common cases include dealing cards to named players, splitting students into named teams of fixed sizes, assigning workers to specific named projects with quotas, and any scenario where which group each item joins matters but the order within a group does not."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Partition into Groups Visualizer",
      "description": "Visualize every partition of n distinct items into k labeled boxes of fixed sizes, with the multinomial formula n!/(n1! n2! ... nk!) updating live as you cycle the partition shape.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/partition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every multinomial partition step by step into k labeled boxes",
        "Partition stepper cycling seven curated shapes: 2+2, 3+1, 2+1+1, 4+1, 3+2, 3+1+1, 2+2+1",
        "Labeled build boxes captioned BOX A, BOX B, BOX C, BOX D with the size of each box shown",
        "Live multinomial formula n!/(n1! · n2! · ... · nk!) updating in the header with a status line tracking item 1's current destination",
        "Completed partitions grouped by which box receives item 1, with per-group sizes that reflect the reduced multinomial",
        "Four transport buttons for step back, step forward, play, and reset, plus a speed slider",
        "Mode switch between colored balls and letter labels for items"
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
      "keywords": "partition into groups, partition into groups visualizer, multinomial coefficient, n!/(n1! n2!) formula, distributing distinct items, labeled boxes partition, multinomial formula, partition of n items, dividing items into groups, visualize multinomial coefficient, partition combinatorics, distinct items labeled boxes, ordered partition of a set, split items into k groups, multinomial partition calculator"
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
          "name": "Partition into Groups Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/partition"
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


  // Frozen-state framed units (Line 1): phases + the seven partition shapes.
  const d = partitionIntoGroupsDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    idle: u('idle', '2+2, idle, frozen',
      'Four bright balls above two labeled boxes of two dashed slots each: a floor plan with the room sizes fixed before anyone moves.'),
    building: u('building', '2+2 mid-build, frozen',
      'The second partition under way: A and C settled in Box A, B riding its guide into Box B — and D still bright, its destination already forced.'),
    p22: u('p22', '2+2 complete, frozen',
      'Six cards from 24 orderings: each card absorbs the 2!·2! = 4 internal shufflings of its boxes — and mirror cards appear because boxes are labeled.'),
    p31: u('p31', '3+1 complete, frozen',
      'Four cards, each named by the single item standing alone right of the divider: a two-box partition is a combination in disguise.'),
    p211: u('p211', '2+1+1 complete, frozen',
      'Twelve cards in rows of 6, 3, and 3 by the red ball’s destination — the big box leaves the freest remainder, so its row is largest.'),
    p41: u('p41', '4+1 complete, frozen',
      'Five cards — one per possible loner. With a singleton box, the whole partition is a single decision.'),
    p32: u('p32', '3+2 complete, frozen',
      'Ten team splits of a trio and a pair — the same ten that C(5, 3) counts, since choosing the trio decides everything.'),
    p311: u('p311', '3+1+1 complete, frozen',
      'Twenty cards — every underlying grouping appearing twice, once per way of assigning the two loners to the equal Boxes B and C.'),
    p221: u('p221', '2+2+1 complete, frozen',
      'The largest run: thirty cards in rows of 12, 12, and 6 — the two equal pair-boxes contributing identical rows, as symmetry demands.'),
  };

  // Per-state panel explanations (Line 1). Rendered under the right panel's
  // step rows through processContent — same-page !# anchors work.
  const explanations = {
    idle: `The box sizes are fixed before any ball moves — only the assignment is in question, which is exactly what the multinomial counts. [Learn more about getting started](!#getting-started) · [All shapes](!#the-partition-stepper)`,
    building: `Balls file into labeled boxes in canonical order; by the last slot there is no choice left — the count lives in the early landings. [Learn more about the build boxes](!#the-build-boxes) · [All shapes](!#the-partition-stepper)`,
    p22: `Six partitions from 24 orderings: each card absorbs the internal shufflings of its two boxes — over-count, then divide. [Learn more about the derivation](!#deriving-the-multinomial-coefficient) · [All shapes](!#the-partition-stepper)`,
    p31: `Four partitions, one per choice of who stands alone: a two-box partition is a combination wearing a divider. [Learn more about 3+1](!#three-plus-one-a-combination-in-disguise) · [All shapes](!#the-partition-stepper)`,
    p211: `Twelve partitions in destination rows of 6, 3, and 3 — following the red ball splits the problem into smaller copies of itself. [Learn more about the grouping](!#grouping-by-item-1-destination) · [All shapes](!#the-partition-stepper)`,
    p41: `Five partitions — just n, because a singleton box turns the whole assignment into one decision: who stands alone. [Learn more about 4+1](!#four-plus-one-choosing-who-stands-alone) · [All shapes](!#the-partition-stepper)`,
    p32: `Ten team splits — the same ten as C(5, 3), since choosing the trio determines the pair. [Learn more about 3+2](!#three-plus-two-the-team-split) · [All shapes](!#the-partition-stepper)`,
    p311: `Twenty partitions, each grouping counted twice across the two equal singleton boxes — the labeled convention made visible. [Learn more about equal boxes](!#three-plus-one-plus-one-equal-boxes) · [All shapes](!#the-partition-stepper)`,
    p221: `Thirty partitions in rows of 12, 12, and 6 — the stepper's largest run, and the formula's best argument against hand-counting. [Learn more about 2+2+1](!#two-plus-two-plus-one-the-largest-run) · [All shapes](!#the-partition-stepper)`,
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
        title: "Partition into Groups: n!/(n1!·n2!·...) | Learn Math Class",
        description: "Visualize partitions of n distinct items into k labeled boxes of fixed sizes. Watch each multinomial outcome build and group by which box receives item 1.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/partition",
        name: "Partition into Groups Visualizer",
        hubDescription: "Split n distinct items into k labeled boxes of fixed sizes — watch each partition build position by position and group by which box receives item 1. Cycle the partition shape to see how the multinomial formula n!/(n1!·n2!·...) reshapes the count.",
        category: "Combinations",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><text x="40" y="16" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">3 + 2 + 1</text><rect x="6" y="28" width="30" height="26" rx="3" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.1"/><rect x="39" y="28" width="21" height="26" rx="3" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.1"/><rect x="63" y="28" width="12" height="26" rx="3" fill="#ffffff" fill-opacity="0.12" stroke="#B5D4F4" stroke-width="1.1"/><circle cx="13" cy="41" r="5" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="21" cy="41" r="5" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="29" cy="41" r="5" fill="#85B7EB" stroke="#0C447C" stroke-width="1"/><circle cx="45" cy="41" r="5" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><circle cx="54" cy="41" r="5" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><circle cx="69" cy="41" r="5" fill="#97C459" stroke="#27500A" stroke-width="1"/><text x="21" y="68" font-family="Georgia,serif" font-size="9" fill="#B5D4F4" text-anchor="middle">3</text><text x="49.5" y="68" font-family="Georgia,serif" font-size="9" fill="#B5D4F4" text-anchor="middle">2</text><text x="69" y="68" font-family="Georgia,serif" font-size="9" fill="#B5D4F4" text-anchor="middle">1</text></svg>`
      },

    }
  }
}

export default function PartitionIntoGroupsVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

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
    stateRow('obj2', 'the-build-boxes', 'building'),
    plain('obj3', 'the-partition-stepper'),
    stateRow('obj11', 'three-plus-one-a-combination-in-disguise', 'p31'),
    stateRow('obj12', 'four-plus-one-choosing-who-stands-alone', 'p41'),
    stateRow('obj13', 'three-plus-two-the-team-split', 'p32'),
    stateRow('obj14', 'three-plus-one-plus-one-equal-boxes', 'p311'),
    stateRow('obj15', 'two-plus-two-plus-one-the-largest-run', 'p221'),
    stateRow('obj4', 'grouping-by-item-1-destination', 'p211'),
    plain('obj5', 'transport-controls'),
    plain('obj6', 'mode-switch'),
    plain('obj7', 'right-panel-and-progress'),
    plain('obj8', 'what-is-a-partition-into-groups'),
    stateRow('obj9', 'deriving-the-multinomial-coefficient', 'p22'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Partition into Groups</h1>
      <br/>
      <PartitionIntoGroups explanations={explanations}/>
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