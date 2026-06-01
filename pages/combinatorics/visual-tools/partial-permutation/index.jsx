// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import PartialPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/PartialPermutation'


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
//         url: "/combinatorics/visual-tools/partial-permutation",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Partial Permutations</h1>
//    <br/>
//    <PartialPermutation/>
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
import PartialPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/PartialPermutation'


export async function getStaticProps(){

  const keyWords = [
    'partial permutation',
    'partial permutation visualizer',
    'P(n,r) formula',
    'n!/(n-r)! formula',
    'permutation without repetition',
    'arranging r items from n',
    'permutation of r from n',
    'partial permutation formula',
    'permutations step by step',
    'ordered selection without repetition',
    'how to find P(n,r)',
    'permutation r objects from n',
    'visualize partial permutations',
    'combinatorics partial permutation',
    'k permutations of n'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Partial permutation** — an ordered selection of $r$ items from a set of $n$ distinct items, with no item reused. The count is $P(n, r) = n! / (n - r)!$.

**$P(n, r)$** — standard notation for the number of partial permutations of size $r$ taken from $n$ items. Also written $_nP_r$ or $P^n_r$.

**Order matters** — two selections with the same items in different positions count as different partial permutations. This is what distinguishes partial permutations from combinations.

**Position** — a slot in the arrangement, numbered $\\#1$ through $\\#r$ from left to right in the build area.

**First-item group** — the family of partial permutations that share the same item in position $\\#1$. There are $n$ such groups, each containing $(n - 1)! / (n - r)!$ partial permutations.

**Source row** — the set of $n$ available items shown at the top of the scene. Items already placed in the current build are dimmed.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 3$ and $r = 2$, ready to build. The scene splits into three areas:

• A **source row** at the top showing all $n$ available items.

• A **build area** in the middle with exactly $r$ slots labeled $\\#1$ through $\\#r$.

• A **completed** section below, where every finished partial permutation is filed under the row matching its first item.

To run the visualization:

• Press **▶ Play** to auto-build all $P(n, r)$ partial permutations.

• Press **Step ▶** to advance one ball at a time.

• Press **◀** to step backward through the animation.

• Adjust the **Speed** slider to control how fast play advances.

The header in the top right shows $P(n, r) = \\text{total}$ alongside a live status line such as *Step X (item name): $k$ / $(n-1)!/(n-r)!$* while building, or *Complete · total / total* when done.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Build Area`,
      content: `The build area is where one partial permutation at a time is constructed. Unlike a full permutation, only $r$ slots appear — not $n$. The label above the area reads *BUILD AREA (r = R)* with the current $r$.

What to watch:

• **Empty slot outlines** with dashed borders, labeled $\\#1, \\#2, \\dots, \\#r$. The label tells you the position number being filled.

• When a ball is in flight from the source row to a slot, a **dotted guide line** in that ball's color traces the trajectory.

• Each ball lands in its assigned slot and stays put until the partial permutation completes.

• In the source row above, every item already placed in the current build (plus the one in flight) is **dimmed** to indicate it's out of play.

• When all $r$ slots are filled, a **flash ring** briefly pulses around the build area. The completed arrangement is then copied to the appropriate first-item row in the completed section below.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n and r`,
      content: `Two steppers in the control bar control the size:

• **n** sets the size of the source set — the pool of available items.

• **r** sets the number of positions to fill. The constraint $r \\leq n$ is enforced; if you reduce $n$ below the current $r$, the tool clamps $r$ down automatically.

Common combinations:

• $n = 3, r = 2$: $P(3, 2) = 6$ partial permutations.

• $n = 4, r = 2$: $P(4, 2) = 12$ partial permutations.

• $n = 4, r = 3$: $P(4, 3) = 24$ partial permutations.

• $n = 5, r = 3$: $P(5, 3) = 60$ partial permutations.

• $n = 5, r = 5$: $P(5, 5) = 120$ — this is the full permutation case, where $r = n$ and the formula reduces to $n!$.

Changing either $n$ or $r$ resets the build, refreshes the formula in the header, and reorganizes the completed grid into the new number of first-item rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by First Item`,
      content: `The completed section organizes partial permutations into **first-item groups** — every arrangement starting with the same item appears in the same row.

There are exactly $n$ groups (one per item in the source set), and each group holds exactly $(n - 1)! / (n - r)!$ partial permutations. So the total is:

$$n \\times \\frac{(n - 1)!}{(n - r)!} = \\frac{n!}{(n - r)!} = P(n, r)$$

This is the visual proof of the partial permutation formula. Pick any item to put in position $\\#1$: $n$ choices. For each choice, fill the remaining $r - 1$ positions with $r - 1$ items chosen in order from the remaining $n - 1$ items: $(n - 1)! / (n - r)!$ ways. Multiply.

Each group row in the completed area has:

• A **tinted background** in a faint version of the group's color.

• A **colored accent stripe** on the left edge.

• A **left-side avatar** showing the first item — a colored circle with the item's number in balls mode, or the letter in letters mode.

• Mini partial-permutation cards, each one a full arrangement of $r$ items starting with that first item.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single partial permutation or pausing mid-build.

• **Step ▶** (Step forward) — advances one ball into one slot. Stop after each step to read the partial arrangement so far.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all $P(n, r)$ partial permutations are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over from the first arrangement.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source to slot and follow the dotted guide line in detail.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

• **Balls mode** (default) — items appear as colored circles. The first-item avatar in each completed group is a circle with the item's number. Best for tracking position and group membership visually.

• **Letters mode** — items appear with letter labels (A, B, C, …). The first-item avatar in each completed group is just the letter, colored to match. Best for reading off the sequence in each partial permutation and matching it to algebraic notation like $(A, C)$ or $(B, A, D)$.

The encoding is consistent across the source row, the build slots, the flying ball, every mini card in the completed grid, and the right-panel narration. Switching modes mid-animation is safe — the build state preserves; only the rendering changes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header *Building partial permutations* with the full formula $P(n, r) = n! / (n - r)! = n \\times (n - 1) \\times \\dots = \\text{total}$.

A **StepRow** is added for each first-item group as soon as a partial permutation in that group either starts building or completes. Each StepRow shows:

• The **first item** as a chip plus its name — for instance, *First item: A*.

• A **progress counter** like $k / ((n - 1)!/(n - r)!)$ tracking how many partial permutations in this group have completed.

• A short **narration** of the structure: *Position 1 is locked to A. The next $r - 1$ positions are filled from B, C, D, or E in $(n - 1) \\times (n - 2) \\times \\dots = M$ ways.* When $r = 1$ the narration adjusts: with only one position, the outcome is just the first item alone.

When all groups complete, every StepRow shows *done* with a checkmark, and the header counter reaches $\\text{total} / \\text{total}$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Partial Permutation`,
      content: `A **partial permutation** is an ordered selection of $r$ items from a set of $n$ distinct items, with no item used twice. The count of such selections is:

$$P(n, r) = \\frac{n!}{(n - r)!} = n \\times (n - 1) \\times \\dots \\times (n - r + 1)$$

The formula collapses to $n!$ when $r = n$ — the full permutation. When $r < n$, the multiplication stops after $r$ factors instead of continuing all the way down to $1$.

Examples:

• Picking a $1$st, $2$nd, and $3$rd place from $8$ runners: $P(8, 3) = 8 \\times 7 \\times 6 = 336$ podiums.

• Choosing a president and a vice-president from $10$ candidates: $P(10, 2) = 90$ outcomes.

• Forming a $4$-digit code from $10$ digits with no repeats: $P(10, 4) = 5040$ codes.

The partial permutation is the right model whenever you need both *which* items and *what order* — and reuse is not allowed.

For deeper coverage of the formula and its derivation, see the **partial permutation without repetition** section on the permutations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Deriving P(n,r) Step by Step`,
      content: `Apply the multiplication principle of counting one position at a time:

• **Position $\\#1$**: any of the $n$ items. $n$ choices.

• **Position $\\#2$**: any of the remaining $n - 1$ items. $n - 1$ choices.

• **Position $\\#3$**: any of the remaining $n - 2$ items. $n - 2$ choices.

• $\\dots$

• **Position $\\#r$**: any of the remaining $n - r + 1$ items. $n - r + 1$ choices.

Multiply the $r$ factors:

$$P(n, r) = n \\times (n - 1) \\times (n - 2) \\times \\dots \\times (n - r + 1)$$

This product equals $n! / (n - r)!$ because the $r$ factors are exactly the top $r$ terms of $n!$, with the bottom $n - r$ terms canceled by the $(n - r)!$ in the denominator.

The tool visualizes the equivalent factoring: fix the first item ($n$ ways), then arrange $r - 1$ of the remaining $n - 1$ items in order ($(n - 1)!/(n - r)!$ ways). Every row in the completed section is one of those $n$ first-item families.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Full permutation** — the case $r = n$, where every item from the source set is used. Formula $P(n, n) = n!$.

**Permutation with repetition** — relaxes the no-reuse rule, allowing the same item in multiple positions. Formula $n^r$, which is larger than $P(n, r)$.

**Permutation with identical items** — handles a source set where some items are indistinguishable. Divides $n!$ by the factorial of each repeat group's size.

**Circular permutation** — arrange items around a circle where rotations are identical. Formula $(n - 1)!$.

**Combination** — the unordered companion of the partial permutation. Drops the order requirement, so $C(n, r) = P(n, r) / r!$.

**Multiplication principle** — the foundational counting rule that produces $P(n, r)$ as the product of choices at each successive position.

**Combinatorics calculator** — to compute $P(n, r)$ for arbitrary values of $n$ and $r$, see the **partial permutation calculator**.`,
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
      question: "What is a partial permutation?",
      answer: "A partial permutation is an ordered selection of r items from a set of n distinct items, where no item is used more than once. Order matters, so the same r items in a different sequence count as a different partial permutation. The number of partial permutations is P(n, r) = n! / (n minus r) factorial."
    },
    obj2: {
      question: "What is the formula for P(n, r)?",
      answer: "P(n, r) equals n factorial divided by (n minus r) factorial. Equivalently, it is the product of r consecutive integers starting from n and going down: n times (n minus 1) times (n minus 2) and so on through (n minus r plus 1). For example, P(5, 3) = 5 times 4 times 3 = 60."
    },
    obj3: {
      question: "How is a partial permutation different from a full permutation?",
      answer: "A full permutation uses every item in the set, so it has n positions filled by all n items in some order, giving n factorial arrangements. A partial permutation uses only r of the n items, with r typically less than n. When r equals n, the partial permutation formula P(n, r) reduces to n factorial."
    },
    obj4: {
      question: "How is a partial permutation different from a combination?",
      answer: "Both pick r items from n without repetition, but a partial permutation cares about order and a combination does not. The same r items in different orders are different partial permutations but the same combination. The two are related by C(n, r) = P(n, r) divided by r factorial."
    },
    obj5: {
      question: "When should I use a partial permutation?",
      answer: "Whenever a problem asks both which items and in what order, with no reuse allowed. Common cases include awarding distinct ranked prizes from a pool of candidates, forming codes or words with non-repeating characters, choosing officers for distinct roles, and any selection where the positions are not interchangeable."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Partial Permutation Visualizer",
      "description": "Visualize every partial permutation P(n, r) of r items chosen in order from n distinct items, grouped by first item to illustrate how n! divided by (n minus r)! factors as n times (n minus 1)! divided by (n minus r)!.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/partial-permutation",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every P(n, r) partial permutation step by step with an animated build area",
        "Completed permutations grouped by first item to visualize the n times (n-1)!/(n-r)! factoring",
        "Independent steppers for the source size n and the selection size r, with the r ≤ n constraint enforced",
        "Live formula P(n, r) = n! / (n-r)! updating in the header alongside a step-by-step status line",
        "Four transport buttons for step back, step forward, play, and reset, plus a speed slider",
        "Mode switch between colored balls and letter labels for items",
        "Right-side narration panel that adds a step row for each first-item group as it activates"
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
      "keywords": "partial permutation, partial permutation visualizer, P(n,r) formula, n!/(n-r)! formula, permutation without repetition, arranging r items from n, permutation of r from n, partial permutation formula, permutations step by step, ordered selection without repetition, how to find P(n,r), permutation r objects from n, visualize partial permutations, combinatorics partial permutation, k permutations of n"
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
          "name": "Partial Permutation Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/partial-permutation"
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
        title: "Partial Permutation Visualizer: P(n,r) | Learn Math Class",
        description: "Visualize partial permutations P(n,r) = n!/(n-r)!. Watch every ordered selection of r items from n build step by step, grouped by first item to expose the structure.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/partial-permutation",
        name: "Partial Permutation Visualizer",
        hubDescription: "Pick r items from n and arrange them in order, one ball at a time. Each partial permutation is grouped by its first item — making the n × (n−1) × … × (n−r+1) structure of P(n,r) visible at a glance.",
        category: "Permutations",
        subCategory: ""
      },

    }
  }
}

export default function PartialPermutationVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Partial Permutations</h1>
      <br/>
      <PartialPermutation/>
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