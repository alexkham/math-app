// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import SimpleCombination from '../../../../app/components/combinatorics/new-visualizers/scenes/SimpleCombination'


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
//         url: "/combinatorics/visual-tools/combination",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Simple Combinations Visualizer</h1>
//    <br/>
//    <SimpleCombination/>
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
import SimpleCombination from '../../../../app/components/combinatorics/new-visualizers/scenes/SimpleCombination'


export async function getStaticProps(){

  const keyWords = [
    'combination',
    'combination visualizer',
    'C(n,r) formula',
    'n choose r',
    'binomial coefficient',
    'combinations formula',
    'unordered selection',
    'simple combination',
    'selecting r from n',
    'how to calculate combinations',
    'choose r from n',
    'visualize combinations',
    'combinations without repetition',
    'subsets of size r',
    'combinatorics combinations'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Combination** — an unordered selection of $r$ items from a set of $n$ distinct items, with no item reused. The count is $C(n, r) = n! / (r! \\cdot (n - r)!)$.

**$C(n, r)$ / $\\binom{n}{r}$ / "$n$ choose $r$"** — three notations for the same value, the binomial coefficient. All count the number of size-$r$ subsets of an $n$-element set.

**Order doesn't matter** — $\\{A, B, C\\}$ and $\\{C, A, B\\}$ are the same combination. This is what distinguishes combinations from permutations.

**Canonical order** — the visual convention for showing each subset: always smallest element first, then in increasing order. This keeps equivalent subsets from looking different on screen.

**Smallest-item group** — the family of combinations whose smallest element is a given item. The completed section groups results this way. Group sizes vary: the group whose smallest is index $i$ has $\\binom{n - 1 - i}{r - 1}$ subsets.

**Build set** — the build area for this scenario. Slots have no $\\#1, \\#2, \\dots$ labels because position is meaningless inside a set.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 3$ and $r = 2$, ready to build. The scene splits into three areas:

• A **source row** at the top showing all $n$ available items.

• A **build set** in the middle with $r$ unlabeled slots — the absence of numbers signals that order doesn't matter inside a combination.

• A **completed** section below, where every finished subset is filed under the row matching its smallest element.

To run the visualization:

• Press **▶ Play** to auto-build all $C(n, r)$ subsets.

• Press **Step ▶** to advance one ball at a time.

• Press **◀** to step backward through the animation.

• Adjust the **Speed** slider to control how fast play advances.

The header shows the formula $C(n, r) = \\text{total}$ alongside a live status line such as *Group A: $k$ / size* while building, or *Complete · total / total* when done.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Build Set`,
      content: `The build area is labeled *BUILD SET (size r = R)* — set, not sequence, because order doesn't matter. What to watch:

• **Empty slot outlines** with dashed borders, **without** $\\#$ labels. Each slot is just a placeholder for one item in the subset; the slot's left-to-right position carries no meaning.

• Balls land in canonical order — smallest item first — so subsets render consistently and visually equivalent subsets look identical.

• When a ball is in flight from the source to a slot, a **dotted guide line** traces the trajectory in that ball's color.

• In the source row, an item already used in the current build (or in flight) is **dimmed**.

• When all $r$ slots are filled, a **flash ring** briefly pulses around the build set, and the completed subset is copied to the appropriate smallest-item row below.

The absence of position numbers is the visual signature of a combination — a deliberate contrast with the labeled $\\#1, \\#2, \\dots$ slots in the permutation visualizers.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n and r`,
      content: `Two steppers in the control bar control the size:

• **n** sets the size of the source set.

• **r** sets the subset size. The constraint $r \\leq n$ is enforced; reducing $n$ below the current $r$ clamps $r$ down automatically.

Common combinations:

• $n = 3, r = 2$: $C(3, 2) = 3$ subsets.

• $n = 4, r = 2$: $C(4, 2) = 6$ subsets.

• $n = 4, r = 3$: $C(4, 3) = 4$ subsets.

• $n = 5, r = 2$: $C(5, 2) = 10$ subsets.

• $n = 5, r = 3$: $C(5, 3) = 10$ subsets.

• $n = 5, r = 5$: $C(5, 5) = 1$ — the only size-$n$ subset is the whole set.

A useful symmetry to spot: $C(n, r) = C(n, n - r)$. Picking $r$ items to include and picking $n - r$ items to exclude give the same count, which is why $C(5, 2) = C(5, 3) = 10$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by Smallest Item`,
      content: `The completed section organizes subsets by their **smallest element** — every subset whose minimum is the same item appears in the same row.

Group sizes vary. If the smallest item has index $i$ (counting from $0$), then the other $r - 1$ items must be chosen from the $n - 1 - i$ items strictly larger than it:

$$\\text{group size at smallest} = i = \\binom{n - 1 - i}{r - 1}$$

For example with $n = 5, r = 3$:

• Smallest is item 1: pick 2 from the 4 items above it. $\\binom{4}{2} = 6$ subsets.

• Smallest is item 2: pick 2 from 3. $\\binom{3}{2} = 3$ subsets.

• Smallest is item 3: pick 2 from 2. $\\binom{2}{2} = 1$ subset.

Total: $6 + 3 + 1 = 10 = C(5, 3)$. This decomposition is the visual proof of **Pascal's identity** in action — summing $\\binom{n - 1 - i}{r - 1}$ over valid $i$ values reconstructs $\\binom{n}{r}$.

Each row in the completed area sizes itself to its group's count, so rows shrink as the smallest item gets larger.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single subset or pausing mid-build.

• **Step ▶** (Step forward) — advances one ball into one slot. Stop after each step to read the partial subset.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all $C(n, r)$ subsets are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over from the first subset.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source to slot and follow the dotted guide line.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

• **Balls mode** (default) — items appear as colored circles. The smallest-item avatar in each completed group is a circle with the item's number. Best for tracking which subsets share the same minimum visually.

• **Letters mode** — items appear with letter labels (A, B, C, …). The smallest-item avatar in each group is just the letter, colored to match. Best for reading off the subset as a set like $\\{A, C, D\\}$ and connecting to algebraic notation.

The encoding is consistent across the source row, the build set, the flying ball, every mini card in the completed grid, and the right-panel narration. Switching modes mid-animation is safe — the build state preserves; only the rendering changes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header *Simple combinations* with the full formula $C(n, r) = n! / (r! \\cdot (n - r)!) = \\text{total}$ and a one-line reminder that each subset is counted $r!$ times among partial permutations, so $C(n, r) = P(n, r) / r!$.

A **StepRow** is added for each smallest-item group as soon as a subset in that group starts or completes. Each StepRow shows:

• The **smallest item** as a chip plus its name — for instance, *Smallest item: A*.

• A **progress counter** $k / \\text{group size}$ tracking how many subsets in this group have completed.

• A short **narration** of the structure: *Smallest item is A. Pick the remaining $r - 1$ from B, C, D, and E: $\\binom{4}{r-1}$ subsets.* For $r = 1$ the narration says the subset is just the single item; when the smallest is the highest valid index, the subset is fully determined.

When all groups complete, every StepRow shows *done* with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Combination`,
      content: `A **combination** is an unordered selection of $r$ items from a set of $n$ distinct items, with no item used twice. The count of size-$r$ subsets is the **binomial coefficient**:

$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r! \\cdot (n - r)!}$$

The same value is read as *"n choose r"*.

Examples:

• Choosing a committee of $3$ from $10$ people: $C(10, 3) = 120$ committees.

• Number of $5$-card poker hands from a $52$-card deck: $C(52, 5) = 2{,}598{,}960$ hands.

• Number of size-$2$ subsets of $\\{1, 2, 3, 4\\}$: $C(4, 2) = 6$, namely $\\{1, 2\\}, \\{1, 3\\}, \\{1, 4\\}, \\{2, 3\\}, \\{2, 4\\}, \\{3, 4\\}$.

• Drawing a lottery ticket of $6$ numbers from $49$: $C(49, 6) = 13{,}983{,}816$ possible tickets.

The combination is the right model whenever a problem asks *which* items are chosen but not *in what order* — and reuse is not allowed.

For deeper coverage, see the **combinations** section on the combinations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Deriving C(n,r)`,
      content: `The cleanest derivation goes through the partial permutation. Start by counting ordered selections of $r$ items from $n$ — that's $P(n, r) = n! / (n - r)!$.

Now ask: how many of those ordered selections correspond to the same unordered subset? Every subset of size $r$ can be arranged in $r!$ different orders, and the partial permutation counts each order separately. So:

$$C(n, r) = \\frac{P(n, r)}{r!} = \\frac{n!}{r! \\cdot (n - r)!}$$

Equivalently, by direct counting at the position level:

• If order had mattered, the count would be $n \\times (n - 1) \\times \\dots \\times (n - r + 1)$.

• Because order doesn't matter, divide by the $r!$ permutations of each chosen subset.

The tool visualizes the equivalent decomposition: every subset has a unique smallest element. Group by that smallest. The group whose smallest is index $i$ contributes $\\binom{n - 1 - i}{r - 1}$ subsets — the number of ways to fill the other $r - 1$ slots from the $n - 1 - i$ larger items. Summing across all valid $i$ values yields $\\binom{n}{r}$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Partial permutation without repetition** — the ordered companion. Counts ordered selections of $r$ from $n$. Formula $P(n, r) = n! / (n - r)!$, related to $C(n, r)$ by $P(n, r) = C(n, r) \\cdot r!$.

**Combination with repetition** — relaxes the no-reuse rule, counting multisets of size $r$ from $n$ types. Formula $\\binom{n + r - 1}{r}$.

**Binomial theorem** — the algebraic context for $\\binom{n}{r}$: the expansion of $(x + y)^n$ has coefficients $\\binom{n}{r}$ on $x^r y^{n - r}$.

**Pascal's triangle** — every entry is a binomial coefficient $\\binom{n}{r}$. Adjacent rows satisfy $\\binom{n}{r} = \\binom{n - 1}{r - 1} + \\binom{n - 1}{r}$, the rule that builds the triangle.

**Pascal's identity** — the smallest-element grouping in this tool gives a direct visual proof: $\\binom{n}{r} = \\sum_{i} \\binom{n - 1 - i}{r - 1}$ summed over valid smallest indices.

**Multinomial coefficient** — generalizes $\\binom{n}{r}$ to more than two groups: $\\binom{n}{k_1, k_2, \\dots, k_m} = n! / (k_1! \\cdots k_m!)$.

**Combinatorics calculator** — to compute $C(n, r)$ for arbitrary $n$ and $r$, see the **combination calculator**.`,
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
      question: "What is a combination?",
      answer: "A combination is an unordered selection of r items from a set of n distinct items, with no item reused. The same r items in any order count as the same combination. The number of combinations is C(n, r) = n factorial divided by r factorial times (n minus r) factorial."
    },
    obj2: {
      question: "What is the formula for n choose r?",
      answer: "C(n, r), also written as n choose r or binomial coefficient, equals n factorial divided by the product of r factorial and (n minus r) factorial. For example, C(5, 2) = 5! / (2! times 3!) = 120 / 12 = 10."
    },
    obj3: {
      question: "What is the difference between a combination and a permutation?",
      answer: "A permutation cares about the order of the selected items; a combination does not. If a problem treats ABC and CBA as the same selection it is a combination, and if it treats them as different it is a permutation. The relationship is P(n, r) = C(n, r) times r factorial, because each combination of r items can be arranged in r factorial orders."
    },
    obj4: {
      question: "What is the symmetry C(n,r) = C(n, n-r)?",
      answer: "Choosing r items to include is the same as choosing n minus r items to exclude. Each include-set has a unique exclude-set complement of size n minus r, so the count of size-r subsets equals the count of size-(n minus r) subsets. That is why C(5, 2) = C(5, 3) = 10."
    },
    obj5: {
      question: "When should I use a combination?",
      answer: "Whenever a problem asks which items are chosen but does not care about the order. Common cases include forming committees, selecting hands of cards, picking lottery numbers, choosing toppings on a pizza, and any unordered selection without reuse. If order matters or reuse is allowed, a different formula applies."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Simple Combination Visualizer",
      "description": "Visualize every combination C(n, r) of r items chosen from n distinct items, grouped by smallest element, with the formula C(n, r) = n!/(r!(n-r)!) updating live.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/combination",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every C(n, r) subset step by step with an animated build set",
        "Unlabeled slots that signal order does not matter inside a combination",
        "Balls land in canonical order so equivalent subsets look identical on screen",
        "Independent steppers for the source size n and the subset size r with the r ≤ n constraint enforced",
        "Live formula C(n, r) = n!/(r! · (n−r)!) updating in the header alongside a step-by-step status line",
        "Completed subsets grouped by smallest element with per-group sizes that reveal Pascal's identity",
        "Four transport buttons for step back, step forward, play, and reset, plus a speed slider, plus a balls / letters mode switch"
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
      "keywords": "combination, combination visualizer, C(n,r) formula, n choose r, binomial coefficient, combinations formula, unordered selection, simple combination, selecting r from n, how to calculate combinations, choose r from n, visualize combinations, combinations without repetition, subsets of size r, combinatorics combinations"
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
          "name": "Simple Combination Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/combination"
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
        title: "Simple Combination Visualizer: C(n,r) | Learn Math Class",
        description: "Visualize simple combinations C(n,r) = n!/(r!·(n-r)!). Watch every unordered subset of r items from n build step by step, grouped by smallest element.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/combination",
        name: "Simple Combination Visualizer",
        hubDescription: "Pick r items from n where order doesn't matter — watch each unordered subset build canonically and group by its smallest element. The varying row sizes expose why C(n,r) = P(n,r)/r! and how Pascal's identity sums to the binomial coefficient.",
        category: "Combinations",
        subCategory: ""
      },

    }
  }
}

export default function SimpleCombinationVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Simple Combinations</h1>
      <br/>
      <SimpleCombination/>
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