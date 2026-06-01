// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


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
//         url: "/combinatorics/visual-tools/permutation-with-repetition",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Permutationswith Repetitions</h1>
//    <br/>
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
import PermutationWithRepetition from '../../../../app/components/combinatorics/new-visualizers/scenes/PermutationWithRepetition'


export async function getStaticProps(){

  const keyWords = [
    'permutation with repetition',
    'permutation with repetition visualizer',
    'n^r formula',
    'n to the power r',
    'permutations allowing repetition',
    'arrangements with repetition',
    'permutation with replacement',
    'r positions n choices',
    'counting with repetition allowed',
    'permutation with repetition formula',
    'visualize n^r',
    'ordered selection with repetition',
    'how many arrangements with repetition',
    'combinatorics with replacement',
    'tuples from n elements'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Permutation with repetition** — an ordered arrangement of $r$ items chosen from a pool of $n$ distinct items, with each position filled independently and reuse allowed. The count is $n^r$.

**$n^r$** — the number of arrangements: $n$ choices for each of $r$ positions, multiplied together. Equivalently, the number of length-$r$ sequences (tuples) over an alphabet of size $n$.

**Unlimited supply** — every item in the source set is available for every position, every time. Using an item in one slot does not remove it from the source.

**Position** — a slot in the arrangement, numbered $\\#1$ through $\\#r$ from left to right in the build area.

**First-item group** — the family of arrangements that share the same item in position $\\#1$. There are $n$ such groups, each containing $n^{r - 1}$ arrangements, since the remaining $r - 1$ positions can each be any of $n$ items.

**Tuple** — a synonym for an ordered $r$-element sequence with repetition allowed. The output of a Cartesian product of $r$ copies of the source set.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 3$ and $r = 2$, ready to build. The scene splits into three areas:

• A **source row** at the top showing the $n$ available items, labeled *SOURCE (n = N) — UNLIMITED SUPPLY*.

• A **build area** in the middle with $r$ slots labeled $\\#1$ through $\\#r$.

• A **completed** section below, where every finished arrangement is filed under the row matching its first item.

To run the visualization:

• Press **▶ Play** to auto-build all $n^r$ arrangements.

• Press **Step ▶** to advance one ball at a time.

• Press **◀** to step backward through the animation.

• Adjust the **Speed** slider to control how fast play advances.

The header shows the formula $n^r = \\text{total}$ alongside a live status line such as *Step X (item name): $k$ / $n^{r-1}$* while building, or *Complete · total / total* when done.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Build Area`,
      content: `The build area is where one arrangement at a time is constructed. The label reads *BUILD AREA (r = R)* with the current $r$.

What to watch:

• **Empty slot outlines** with dashed borders, labeled $\\#1, \\#2, \\dots, \\#r$ from left to right.

• When a ball is in flight from the source row to a slot, a **dotted guide line** in that ball's color traces the trajectory.

• Each ball lands in its assigned slot and stays put until the arrangement completes.

• **The source row never dims.** This is the visual signature of repetition: even after an item is used, every copy of it remains fully bright in the source — because the supply is unlimited and the same item can be picked again for the next slot.

• When all $r$ slots are filled, a **flash ring** briefly pulses around the build area. The completed arrangement is then copied to the appropriate first-item row in the completed section below.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n and r`,
      content: `Two steppers in the control bar control the size:

• **n** sets the size of the source pool — the number of distinct options available at every position.

• **r** sets the number of positions to fill, capped per $n$ to keep $n^r$ animation-manageable.

The $r$ caps are:

• $n = 3$: maximum $r = 4$, giving $3^4 = 81$ arrangements.

• $n = 4$: maximum $r = 3$, giving $4^3 = 64$ arrangements.

• $n = 5$: maximum $r = 3$, giving $5^3 = 125$ arrangements.

Common combinations:

• $n = 3, r = 2$: $3^2 = 9$ arrangements.

• $n = 3, r = 3$: $3^3 = 27$ arrangements.

• $n = 4, r = 2$: $4^2 = 16$ arrangements.

Reducing $n$ below the current $r$ may also clamp $r$ down automatically when the new $n$ allows a smaller maximum. Changing either value resets the build and refreshes the formula in the header.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by First Item`,
      content: `The completed section organizes arrangements into **first-item groups** — every arrangement starting with the same item appears in the same row.

There are exactly $n$ groups (one per item in the source) and each group holds exactly $n^{r - 1}$ arrangements. So the total is:

$$n \\times n^{r - 1} = n^r$$

This is the visual proof of the $n^r$ formula. Pick any item for position $\\#1$: $n$ choices. For each choice, the remaining $r - 1$ positions can each independently be any of $n$ items: $n^{r - 1}$ ways. Multiply.

Each group row in the completed area has:

• A **tinted background** in a faint version of the group's color.

• A **colored accent stripe** on the left edge.

• A **left-side avatar** showing the first item — a colored circle with the item's number in balls mode, or the letter in letters mode.

• Mini arrangement cards, each one a full sequence of $r$ items starting with that first item, possibly including repetitions of that item or any other.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single arrangement or pausing mid-build.

• **Step ▶** (Step forward) — advances one ball into one slot. Stop after each step to read the partial arrangement.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all $n^r$ arrangements are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over from the first arrangement.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source to slot and follow the dotted guide line in detail.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

• **Balls mode** (default) — items appear as colored circles. The first-item avatar in each completed group is a circle with the item's number. Best for tracking position and group membership visually, and for spotting repeated colors within an arrangement at a glance.

• **Letters mode** — items appear with letter labels (A, B, C, …). The first-item avatar in each completed group is just the letter, colored to match. Best for reading off the sequence in each arrangement and matching it to algebraic notation like $(A, A, C)$ where repetition is explicit.

The encoding is consistent across the source row, the build slots, the flying ball, every mini card in the completed grid, and the right-panel narration. Switching modes mid-animation is safe — the build state preserves; only the rendering changes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header *Permutations with repetition* with the full formula $n^r = n \\times n \\times \\dots = \\text{total}$.

A **StepRow** is added for each first-item group as soon as an arrangement in that group starts building or completes. Each StepRow shows:

• The **first item** as a chip plus its name — for instance, *First item: A*.

• A **progress counter** like $k / n^{r-1}$ tracking how many arrangements in this group have completed.

• A short **narration** of the structure: *Position 1 is locked to A. The remaining $r - 1$ positions are each filled from A, B, or C (repetition allowed) in $n \\times n \\times \\dots = M$ ways.* When $r = 1$ the narration adjusts: with only one position, the outcome is just the first item alone.

When all groups complete, every StepRow shows *done* with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Permutation with Repetition`,
      content: `A **permutation with repetition** is an ordered arrangement of $r$ items drawn from a pool of $n$ distinct items, where each position is filled independently and the same item can be reused as many times as needed. The number of such arrangements is:

$$n^r$$

This is the same as the number of length-$r$ sequences over an alphabet of size $n$, sometimes called $r$-tuples or words of length $r$.

Examples:

• Number of $4$-digit PINs from digits $0$–$9$: $10^4 = 10{,}000$ codes.

• Number of $3$-letter strings over the English alphabet: $26^3 = 17{,}576$ strings.

• Outcomes of rolling a $6$-sided die $5$ times in order: $6^5 = 7{,}776$ sequences.

• Binary strings of length $8$: $2^8 = 256$ strings.

The permutation with repetition is the right model whenever positions are filled independently from a fixed pool and reuse is allowed — codes, passwords, function inputs, multiple rolls of the same die.

For deeper coverage, see the **permutation with repetition** section on the permutations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Deriving n^r`,
      content: `Apply the multiplication principle of counting one position at a time. The key difference from the no-repetition case is that the count of available options does **not** shrink between positions:

• **Position $\\#1$**: any of the $n$ items. $n$ choices.

• **Position $\\#2$**: still any of the $n$ items — the previous pick was returned to the pool. $n$ choices.

• **Position $\\#3$**: again $n$ choices.

• $\\dots$

• **Position $\\#r$**: $n$ choices.

Multiply $r$ identical factors:

$$n \\times n \\times n \\times \\dots \\times n = n^r$$

The tool visualizes the equivalent factoring: fix the first item ($n$ ways), then fill the remaining $r - 1$ slots independently from the same pool ($n^{r-1}$ ways). Every row in the completed section is one of those $n$ first-item families, and within each family the leftover positions explore every possible $r-1$ tuple over the full pool — repetitions of the first item explicitly included.

Counts grow geometrically: $3^3 = 27$, $3^4 = 81$, $3^5 = 243$. Doubling $r$ squares the count.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Partial permutation without repetition** — pick and arrange $r$ items from $n$ distinct items with no reuse. Formula $n! / (n - r)!$, always smaller than $n^r$ for $r > 1$.

**Full permutation** — every item used exactly once. Special case of partial permutation with $r = n$, formula $n!$.

**Permutation with identical items** — distinct arrangements of a multiset where some items are indistinguishable. Formula $n! / (k_1! \\cdot k_2! \\cdots)$.

**Circular permutation** — arrange items around a circle where rotations are identical. Formula $(n - 1)!$.

**Combination with repetition** — the unordered companion of the permutation with repetition. Counts multisets of size $r$ from $n$ types, formula $\\binom{n + r - 1}{r}$.

**Multiplication principle** — the foundational counting rule behind $n^r$. With $r$ independent positions and $n$ options for each, the total is the product of all $r$ factors.

**Cartesian product** — the set-theoretic name for the collection of $r$-tuples this tool enumerates: $\\{1, \\dots, n\\}^r$.

**Combinatorics calculator** — to compute $n^r$ for arbitrary $n$ and $r$, see the **permutation with repetition calculator**.`,
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
      question: "What is a permutation with repetition?",
      answer: "A permutation with repetition is an ordered arrangement of r items chosen from a pool of n distinct items, where each position is filled independently and the same item may be reused as many times as needed. The number of such arrangements is n raised to the power r."
    },
    obj2: {
      question: "What is the formula for permutations with repetition?",
      answer: "The number of permutations with repetition is n to the power r. This is the product of n choices for each of the r positions: n times n times n and so on, r times. For example, the number of 4-digit codes drawn from 10 digits is 10 to the power 4, which is 10000."
    },
    obj3: {
      question: "How is a permutation with repetition different from one without?",
      answer: "Without repetition, each position must use a different item, so once a value is picked it is removed from the pool for later positions. The count is n times (n minus 1) times (n minus 2) and so on for r positions. With repetition, every position chooses independently from the full n options, giving n to the power r, which is always at least as large as the no-repetition count."
    },
    obj4: {
      question: "When should I use a permutation with repetition?",
      answer: "Whenever positions are filled independently from a fixed pool and reuse is allowed. Common cases include codes and passwords where each character is chosen separately, multiple rolls or flips of the same chance device, binary strings, function inputs over a finite set, and any tuple-style counting where the same value can occur in more than one slot."
    },
    obj5: {
      question: "How many 4-digit PINs are possible?",
      answer: "Each of the 4 positions can be any of 10 digits from 0 through 9, with repetition allowed. The total is 10 to the power 4, which is 10000 distinct PINs."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Permutation with Repetition Visualizer",
      "description": "Visualize every permutation with repetition n^r of r positions filled independently from n items, grouped by first item to illustrate how the count factors as n times n^(r-1).",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/permutation-with-repetition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every n^r arrangement step by step with an animated build area",
        "Source row marked UNLIMITED SUPPLY — balls never dim because items can be reused freely",
        "Independent steppers for the source size n and the selection size r with per-n caps to keep n^r manageable",
        "Live formula n^r updating in the header alongside a step-by-step status line",
        "Completed arrangements grouped by first item to visualize the n times n^(r-1) factoring",
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
      "keywords": "permutation with repetition, permutation with repetition visualizer, n^r formula, n to the power r, permutations allowing repetition, arrangements with repetition, permutation with replacement, r positions n choices, counting with repetition allowed, permutation with repetition formula, visualize n^r, ordered selection with repetition, how many arrangements with repetition, combinatorics with replacement, tuples from n elements"
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
          "name": "Permutation with Repetition Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/permutation-with-repetition"
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
        title: "Permutation with Repetition: n^r Formula | Learn Math Class",
        description: "Visualize permutations with repetition using the n^r formula. Each of r positions picks independently from n items, with all arrangements built step by step.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/permutation-with-repetition",
        name: "Permutation with Repetition Visualizer",
        hubDescription: "Build every n^r arrangement of r positions where each spot can be any of n items — source balls never dim because copies are unlimited. Cycle n and r to compare n^r against n!/(n−r)! and see how reuse multiplies the count.",
        category: "Permutations",
        subCategory: ""
      },

    }
  }
}

export default function PermutationWithRepetitionVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Permutations with Repetition</h1>
      <br/>
      <PermutationWithRepetition/>
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