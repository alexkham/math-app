// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import PermutationWithIdenticalItems from '../../../../app/components/combinatorics/new-visualizers/scenes/PermutationWithIdentical'


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
//         url: "/combinatorics/visual-tools/permutation-with-identical",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Permutations with Identical Items</h1>
//    <br/>
//    <PermutationWithIdenticalItems/>
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
import PermutationWithIdenticalItems from '../../../../app/components/combinatorics/new-visualizers/scenes/PermutationWithIdentical'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import permutationWithIdenticalDiagrams from '@/app/components/combinatorics/new-visualizers/scenes/permutationWithIdenticalDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'permutation with identical items',
    'multiset permutation',
    'permutations with duplicates',
    'n!/(k1! k2!) formula',
    'distinct permutations of a multiset',
    'arrangements with identical items',
    'multinomial coefficient',
    'how many ways to arrange letters with duplicates',
    'permutations of letters with repeats',
    'multiset permutation visualizer',
    'arranging identical objects',
    'visualize multiset permutations',
    'permutations identical objects formula',
    'combinatorics multiset',
    'distinct arrangements with repeats'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Multiset** — a collection of items where some may be identical. Unlike a set, a multiset records how many copies of each item are present. In this tool the multiset is encoded as a string like **AABBC**.

**Permutation with identical items** — a distinct arrangement of a multiset in a line. Swapping two identical copies does not produce a new permutation. The count is $n! / (k_1! \\cdot k_2! \\cdots)$ where each $k_i$ is the size of an identical group.

**Multinomial coefficient** — the formula $\\binom{n}{k_1, k_2, \\dots} = n! / (k_1! \\cdot k_2! \\cdots)$. The generalization of the binomial coefficient to more than two groups.

**Distinct first item** — a unique item value in the multiset. The completed section groups arrangements by which distinct item appears in position $\\#1$, so there is one group per distinct item, not one per source position.

**Positional dimming** — the source row shows every copy in its own position. When a copy is used in the current build, [only that position dims](!#the-build-area) — the other copies of the same item stay fully visible.

**Group size** — the number of distinct arrangements in a [first-item group](!#grouping-by-distinct-first-item). With $k_i$ copies of the chosen first item, that count is $(n - 1)! / ((k_i - 1)! \\cdot \\prod_{j \\neq i} k_j!)$, which varies between groups.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with multiset **AAB** selected: two copies of $A$ and one copy of $B$. The scene splits into three areas:

• A **source row** at the top showing the multiset as separate balls, including duplicates side by side.

• A **build area** in the middle with $n$ slots, where $n$ is the total size of the multiset (counting duplicates).

• A **completed** section below, where every finished distinct permutation is filed under the row matching its first item.

To run the visualization:

• Press **▶ Play** to auto-build all distinct permutations of the current multiset.

• Press **Step ▶** to advance one ball at a time.

• Press **◀** to step backward through the animation.

• Adjust the **Speed** slider to control how fast play advances.

The header shows the formula $n! / (k_1! \\cdot k_2! \\cdots) = \\text{total}$ together with a live status line like *Group A: $k$ / size* while building.`,
      before: ``,
      after: `The frozen frame above is the opening position for the default multiset: two red A balls side by side, one blue B, three dashed slots. Already the central subtlety is on display — the two A balls are drawn as separate objects even though, mathematically, they are the same letter.

That tension is the whole subject. The tool draws copies separately so you can watch them move, then counts as if they were indistinguishable — the reconciliation is the division explained under [why divide by k!](!#why-divide-by-k).`,
      link: '',
    },

    obj2: {
      title: `The Build Area`,
      content: `The build area is where one distinct permutation at a time is constructed. The label above the area simply reads **BUILD AREA**; the slot count equals the size of the chosen multiset.

What to watch:

• **Empty slot outlines** with dashed borders, labeled $\\#1, \\#2, \\dots, \\#n$ from left to right.

• When a ball is in flight from the source row to a slot, a **dotted guide line** traces the trajectory in the color of the item being moved.

• Each ball lands in its assigned slot and stays put until the permutation completes.

• In the source row, **only the specific copy** being used dims — not every copy of that item. So when one of the two $A$ balls flies into a slot, the other $A$ stays bright. This is the visual signature of positional dimming.

• When all $n$ slots are filled, a **flash ring** briefly pulses around the build area, and the completed arrangement is filed in the appropriate [first-item row](!#grouping-by-distinct-first-item) below.`,
      before: ``,
      after: `The frozen frame above shows positional dimming doing its job: A has landed in slot #1 and its source copy is dimmed, B is mid-flight along its dotted guide — but the second A is still bright, because that particular copy has not been used.

Positional dimming is the honest way to animate a multiset: the tool must move one specific ball, even though the mathematics does not care which A it was. Every arrangement the build produces would look identical if the two A copies swapped roles — exactly the redundancy the [formula divides away](!#why-divide-by-k).`,
      link: '',
    },

    obj3: {
      title: `The Multiset Stepper`,
      content: `Instead of an $n$ stepper, this tool has a **multiset stepper** that cycles through six curated presets, increasing in complexity:

• [AAB](!#aab-the-smallest-multiset) — two of $A$, one of $B$. $3! / (2! \\cdot 1!) = 3$ distinct permutations.

• [AAAB](!#aaab-placing-the-single-b) — three of $A$, one of $B$. $4! / (3! \\cdot 1!) = 4$ permutations.

• [AABB](!#why-divide-by-k) — two each of $A$ and $B$. $4! / (2! \\cdot 2!) = 6$ permutations.

• [AABC](!#grouping-by-distinct-first-item) — two of $A$, one each of $B$ and $C$. $4! / (2! \\cdot 1! \\cdot 1!) = 12$ permutations.

• [AAABB](!#aaabb-two-letters-ten-arrangements) — three of $A$, two of $B$. $5! / (3! \\cdot 2!) = 10$ permutations.

• [AABBC](!#aabbc-the-longest-run) — two each of $A$ and $B$, one of $C$. $5! / (2! \\cdot 2! \\cdot 1!) = 30$ permutations.

Use the **◀** and **▶** buttons next to *multiset =* to cycle. Each preset resets the build, refreshes the formula in the header, and rebuilds the completed section into the new set of first-item rows.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by Distinct First Item`,
      content: `The completed section organizes permutations into **distinct first-item groups** — one row per distinct value in the multiset, not one per source position. So **AAB** has two groups ($A$ and $B$), not three.

Group sizes vary because the remaining multiset depends on which item was used first. For example with **AABB**:

• Starting with $A$: remaining multiset is $ABB$, giving $3! / (1! \\cdot 2!) = 3$ arrangements.

• Starting with $B$: remaining multiset is $AAB$, also giving $3! / (2! \\cdot 1!) = 3$ arrangements.

For **AABC**:

• Starting with $A$: remaining is $ABC$ (no repeats), giving $3! = 6$ arrangements.

• Starting with $B$: remaining is $AAC$, giving $3! / 2! = 3$.

• Starting with $C$: remaining is $AAB$, giving $3! / 2! = 3$.

This is why each row in the completed area has its own height — the tool computes a separate row size per group to keep proportions clean. The total across all groups always equals the [multinomial coefficient](!#what-is-a-permutation-with-identical-items) $n! / (k_1! \\cdot k_2! \\cdots)$.`,
      before: ``,
      after: `The frozen frame above is **AABC** complete, and the unequal rows tell the story at a glance: the $A$ row holds six cards while the $B$ and $C$ rows hold three each. Starting with $A$ uses up one of the duplicates and leaves three distinct letters — the freest possible remainder — while starting with $B$ or $C$ leaves the pair $AA$ intact to keep collapsing arrangements.

Unequal group sizes are the feature that separates this tool from the [full permutation's](!#related-concepts) perfectly even rows: with duplicates, symmetry among first choices is broken by what each choice leaves behind. Adding down the rows — $6 + 3 + 3 = 12$ — recovers the multinomial total.`,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single arrangement or pausing mid-build.

• **Step ▶** (Step forward) — advances [one ball into one slot](!#the-build-area). Stop after each step to read the partial arrangement.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all distinct permutations are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over from the first arrangement.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from its source position to the assigned slot.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

• **Balls mode** (default) — items appear as colored circles. Identical copies share the same color, so the multiset **AABB** shows two circles of one color and two of another. The first-item avatar in each completed group is a circle with the item's number.

• **Letters mode** — items appear with letter labels (A, B, C, …). The multiset display becomes literal — **AABB** shows as $A, A, B, B$ in the source row. The first-item avatar in each completed group is just the letter, colored to match.

The encoding is consistent across the source row, the build slots, the flying ball, every mini permutation card in the completed grid, and the [right-panel narration](!#right-panel-and-progress). Letters mode is especially useful for this scenario because the multiset names themselves are letter strings.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds, anchored by the header **Permutations with identical items** and the full multinomial formula for the current multiset.

A **StepRow** is added for each [distinct first-item group](!#grouping-by-distinct-first-item) as soon as a permutation in that group starts or completes. Each StepRow shows:

• The **first item** as a chip plus its name — for instance, *First item: A*.

• A **progress counter** like $k / \\text{group size}$ tracking how many distinct permutations in this group have completed.

• A short **narration** of the structure: *Position 1 is locked to A. The remaining positions hold 1 A, 2 Bs, and 1 C, arranged in $4! / (1! \\cdot 2! \\cdot 1!) = 12$ distinct ways.* The formula uses the leftover multiplicities after one copy of the first item is removed.

When all groups complete, every StepRow shows **done** with a checkmark, and the counter reaches *total / total*.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Permutation with Identical Items`,
      content: `A **permutation with identical items** is a distinct arrangement of a multiset — a collection of $n$ items where some are repeated. Two arrangements count as the same if they only differ by swapping copies of the same item. The number of distinct arrangements is:

$$\\frac{n!}{k_1! \\cdot k_2! \\cdots k_m!}$$

where $k_i$ is the number of copies of the $i$th distinct item and $k_1 + k_2 + \\dots + k_m = n$. This is the **multinomial coefficient** $\\binom{n}{k_1, k_2, \\dots, k_m}$, and the reason for the division is worked out under [why divide by k!](!#why-divide-by-k).

Examples:

• Distinct arrangements of the letters in **MISSISSIPPI** (11 letters: 1 M, 4 I, 4 S, 2 P): $11! / (1! \\cdot 4! \\cdot 4! \\cdot 2!) = 34{,}650$.

• Distinct arrangements of the word **DATA** (4 letters with 2 A): $4! / 2! = 12$.

• Lining up 8 students where 3 wear identical red shirts and 5 wear identical blue shirts: $8! / (3! \\cdot 5!) = 56$ distinguishable lineups.

For deeper coverage, see the **permutation with identical items** section on the permutations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Divide by k!`,
      content: `Start with the multiset treated as if every item were distinct — say by tagging copies $A_1, A_2$ and $B_1, B_2$ for **AABB**. There are $n! = 4! = 24$ full permutations of the tagged set.

But the tags are fake. When we remove them and look at the actual multiset, many of those $24$ permutations collapse into the same arrangement:

• The two $A$ copies can swap in $2! = 2$ ways without changing what we see.

• The two $B$ copies can swap in $2! = 2$ ways without changing what we see.

• Together, $2! \\cdot 2! = 4$ tagged permutations map to each distinct untagged arrangement.

So the distinct count is $24 / 4 = 6$, matching the formula $4! / (2! \\cdot 2!)$.

Generalizing: for each identical group of size $k_i$, exactly $k_i!$ tagged permutations collapse into one untagged arrangement. Dividing $n!$ by the product of all such $k_i!$ removes every layer of redundancy:

$$\\text{distinct count} = \\frac{n!}{k_1! \\cdot k_2! \\cdots k_m!}$$`,
      before: ``,
      after: `The frozen frame above is the argument's own example completed on screen: **AABB**, six cards, split three-and-three between the $A$-first and $B$-first rows. Each visible card stands for exactly four invisible tagged permutations — the $2! \\cdot 2!$ silent swaps of the copies.

The collapse ratio is the same for every card, which is why plain division works: redundancy in this problem is perfectly uniform. Run the build and watch for repeats that never come — the enumeration simply skips arrangements it has already produced, which is division enacted rather than computed. The remaining presets scale the same idea; see [the multiset stepper](!#the-multiset-stepper) for the full ladder.`,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Full permutation** — the case where every item is distinct, so all $k_i = 1$. The formula reduces to $n!$ because [every factorial in the denominator is 1](!#why-divide-by-k).

**Partial permutation without repetition** — pick and arrange only $r$ items from a distinct set of $n$. Formula $n! / (n - r)!$.

**Permutation with repetition** — items can be reused, but a fixed pool of $n$ distinct options is used for $r$ positions. Formula $n^r$.

**Circular permutation** — arrange items around a circle where rotations are identical. Formula $(n - 1)!$.

**Multinomial coefficient** — the direct algebraic name for $n! / (k_1! \\cdot k_2! \\cdots)$. Generalizes the binomial coefficient and appears in the multinomial theorem.

**Binomial coefficient** — the special case with exactly two groups: $\\binom{n}{k} = n! / (k! \\cdot (n - k)!)$. Counts arrangements of a multiset with two distinct items.

**Combinatorics calculator** — to compute $n! / (k_1! \\cdot k_2! \\cdots)$ for any multiset, see the **multiset permutation calculator**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `AAB: The Smallest Multiset`,
      content: `The opening preset is the smallest multiset with a genuine duplicate: two copies of $A$ and one $B$. Its three distinct arrangements can be written out faster than any formula: $AAB$, $ABA$, $BAA$.

The formula agrees: $3! / (2! \\cdot 1!) = 6 / 2 = 3$. Without the division, the six tagged permutations of $A_1 A_2 B$ would each be counted — but $A_1 A_2 B$ and $A_2 A_1 B$ are the same word once the tags come off.

Three is also the count of *positions the single $B$ can occupy* — last, middle, or first. With only one non-duplicate letter, the whole arrangement is determined by where that letter sits.`,
      before: ``,
      after: `The frozen run above shows the tool's two unequal groups: the $A$-first row holds $AAB$ and $ABA$, the $B$-first row holds only $BAA$. Starting with the duplicate leaves a mixed pair to arrange two ways; starting with $B$ leaves the identical pair $AA$, which can be "arranged" in exactly one.

Being fully enumerable by hand makes this the preset to verify against. Every claim on this page — the group sizes, the positional dimming, the division — can be checked here in seconds before the [larger presets](!#the-multiset-stepper) put it beyond patience.`,
      link: '',
    },
    obj12: {
      title: `AAAB: Placing the Single B`,
      content: `Three copies of $A$ and a single $B$: $4! / (3! \\cdot 1!) = 4$ distinct arrangements — $AAAB$, $AABA$, $ABAA$, $BAAA$.

The count equals the number of slots the lone $B$ can occupy, and that is no coincidence: when a multiset has just one letter that differs, an arrangement carries no information beyond **where the odd one out went**. Four positions, four arrangements.

Watch the group structure: the $A$-first row holds three arrangements (the $B$ still has three slots left to choose from), while the $B$-first row holds exactly one — $BAAA$, with all decisions already made.`,
      before: ``,
      after: `This preset is the cleanest bridge to combinations: "choose which 1 of the 4 positions holds $B$" is $\\binom{4}{1} = 4$. The multinomial $4!/(3! \\cdot 1!)$ and the binomial $\\binom{4}{1}$ are the same number wearing different notation — a coincidence that becomes a theorem in the [two-letter preset AAABB](!#aaabb-two-letters-ten-arrangements).

Try predicting before pressing Play: which group will fill first, and how large will each be? The frozen frame above is the answer key.`,
      link: '',
    },
    obj13: {
      title: `AAABB: Two Letters, Ten Arrangements`,
      content: `Three $A$s and two $B$s give $5! / (3! \\cdot 2!) = 120 / 12 = 10$ distinct arrangements — the largest two-letter preset in the stepper.

Ten should ring a bell: $\\binom{5}{2} = 10$ as well. With exactly two distinct letters, arranging the multiset is the same act as **choosing which positions get the** $B$**s** — order inside each letter group is meaningless, so only the choice of positions matters. Every two-letter multiset permutation is secretly a binomial coefficient:

$$\\frac{n!}{k! \\cdot (n-k)!} = \\binom{n}{k}$$

The group split is $6 + 4$: starting with $A$ leaves $AABB$ (six ways), starting with $B$ leaves $AAAB$ (four ways) — both remainders being smaller presets from this very stepper.`,
      before: ``,
      after: `The recursion visible in the group sizes is worth savoring: the $A$-first row is exactly the [AABB preset](!#why-divide-by-k) shifted one slot right, and the $B$-first row is the [AAAB preset](!#aaab-placing-the-single-b). Multiset permutations decompose into smaller multiset permutations, just as $n!$ decomposed into first-item families for distinct items.

This preset is also the page's binomial ambassador: any time you compute $\\binom{n}{k}$, you are counting the arrangements of a two-letter multiset with $k$ of one letter and $n - k$ of the other.`,
      link: '',
    },
    obj14: {
      title: `AABBC: The Longest Run`,
      content: `The final preset has five items in three groups — two $A$s, two $B$s, one $C$ — and produces the stepper's largest count: $5! / (2! \\cdot 2! \\cdot 1!) = 120 / 4 = 30$ distinct arrangements.

Thirty is small enough to enumerate on screen but large enough that the structure, not the list, is what you remember. The three first-item rows hold $12 + 12 + 6$ arrangements: starting with $A$ or $B$ leaves one duplicate pair intact ($ABBC$ or $AABC$-type remainders, twelve ways each), while starting with $C$ leaves both pairs $AABB$ — the most collapsible remainder, six ways.

The denominator $2! \\cdot 2! \\cdot 1! = 4$ means each card on screen quietly stands for four tagged permutations of the 120 total.`,
      before: ``,
      after: `A full Play run of this preset is the page's best show: thirty completions, three rows filling at different rates, and the counter climbing to the multinomial total. If the smaller presets proved the formula, this one demonstrates its economy — nobody wants to hand-list thirty words to learn what $120 / 4$ already says.

For genuinely large multisets the tool bows out and the formula alone remains: MISSISSIPPI's $34{,}650$ arrangements, computed under [what is a permutation with identical items](!#what-is-a-permutation-with-identical-items), would need a screen four hundred times taller.`,
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
      question: "What is a permutation with identical items?",
      answer: "A permutation with identical items is a distinct arrangement of a multiset, where some elements are copies of one another. Two arrangements that differ only by swapping identical copies count as the same arrangement. The number of distinct arrangements is n factorial divided by the product of k factorial for each group of identical items."
    },
    obj2: {
      question: "What is the formula for permutations with repeated elements?",
      answer: "The number of distinct permutations of n items with repeated elements is n factorial divided by the product of k1 factorial, k2 factorial, and so on, where each ki is the number of copies of the i-th distinct item. This expression is called the multinomial coefficient."
    },
    obj3: {
      question: "Why do you divide by k factorial when there are duplicates?",
      answer: "Because swapping two identical copies does not produce a new arrangement, multiple tagged permutations of n items collapse into the same untagged arrangement. For each group of k identical items there are k factorial ways to permute the copies among themselves invisibly. Dividing n factorial by the product of these k factorials removes all the redundant counting."
    },
    obj4: {
      question: "How many distinct arrangements does the word MISSISSIPPI have?",
      answer: "The word MISSISSIPPI has 11 letters: 1 M, 4 I, 4 S, and 2 P. The number of distinct arrangements is 11 factorial divided by the product of 1 factorial, 4 factorial, 4 factorial, and 2 factorial, which equals 34650."
    },
    obj5: {
      question: "How is this different from a permutation with repetition?",
      answer: "Permutation with identical items arranges a fixed multiset of n items where some are duplicates, using each copy exactly once. Permutation with repetition fills r positions from a pool of n distinct options where any option can be reused freely, giving n to the power r arrangements. The first counts arrangements of a multiset; the second counts choices of length r from a distinct set with reuse allowed."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Permutation with Identical Items Visualizer",
      "description": "Visualize every distinct permutation of a multiset using the multinomial formula n!/(k1! k2! ...). Cycle through curated duplicate patterns and watch each arrangement build position by position.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/permutation-with-identical",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every distinct multiset permutation step by step with an animated build area",
        "Multiset stepper cycling six curated presets: AAB, AAAB, AABB, AABC, AAABB, AABBC",
        "Live multinomial formula n!/(k1! k2! ...) updating in the header alongside a status line",
        "Positional source dimming so each individual copy dims only when used, not every duplicate at once",
        "Completed permutations grouped by distinct first item, with per-group sizes that reflect the leftover multiplicities",
        "Four transport buttons for step back, step forward, play, and reset, plus a speed slider",
        "Mode switch between colored balls and letter labels matching the multiset name"
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
      "keywords": "permutation with identical items, multiset permutation, permutations with duplicates, n!/(k1! k2!) formula, distinct permutations of a multiset, arrangements with identical items, multinomial coefficient, how many ways to arrange letters with duplicates, permutations of letters with repeats, multiset permutation visualizer, arranging identical objects, visualize multiset permutations, permutations identical objects formula, combinatorics multiset, distinct arrangements with repeats"
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
          "name": "Permutation with Identical Items Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/permutation-with-identical"
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


  // Frozen-state framed units (Line 1): the tool's phases + the six multiset presets.
  const d = permutationWithIdenticalDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    idle: u('idle', 'AAB, idle, frozen',
      'Two red A balls, one blue B, three dashed slots: the smallest multiset, waiting. The copies are drawn apart but will be counted as one.'),
    building: u('building', 'AAB mid-build, frozen',
      'A has landed in slot #1 and its own source copy dims — but its identical twin stays bright. B rides the dotted guide toward slot #2.'),
    mAAB: u('mAAB', 'AAB complete, frozen',
      'Three cards in two unequal rows: AAB and ABA under the A group, BAA alone under B — 3!/2! = 3, checkable by hand.'),
    mAAAB: u('mAAAB', 'AAAB complete, frozen',
      'Four arrangements, one per possible home of the single B. The A-first row holds three; the B-first row is a row of one.'),
    mAABB: u('mAABB', 'AABB complete, frozen',
      'Six cards, three per row — each standing for 2!·2! = 4 invisible swaps of tagged copies. 24 tagged permutations, 6 visible words.'),
    mAABC: u('mAABC', 'AABC complete, frozen',
      'Twelve cards in unequal rows of 6, 3, and 3: starting with the duplicate A frees the remainder; starting with B or C leaves the pair AA to collapse.'),
    mAAABB: u('mAAABB', 'AAABB complete, frozen',
      'Ten arrangements of three A and two B — the same ten that C(5,2) counts, since only the B positions carry information.'),
    mAABBC: u('mAABBC', 'AABBC complete, frozen',
      'The longest run: thirty cards in rows of 12, 12, and 6, each card silently standing for four of the 120 tagged permutations.'),
  };

  // Per-state panel explanations (Line 1). Rendered under the right panel's
  // step rows through processContent — same-page !# anchors work.
  const explanations = {
    idle: `The multiset waits in the source row — duplicates drawn side by side, slots empty below. The count is already fixed by the letter multiplicities. [Learn more about getting started](!#getting-started) · [All multisets](!#the-multiset-stepper)`,
    building: `One arrangement is being assembled — and only the specific copy in use dims, so identical twins stay visibly available. [Learn more about the build area](!#the-build-area) · [All multisets](!#the-multiset-stepper)`,
    mAAB: `All 3!/2! = 3 arrangements are in — few enough to check by hand, which makes this the preset that verifies the formula. [Learn more about AAB](!#aab-the-smallest-multiset) · [All multisets](!#the-multiset-stepper)`,
    mAAAB: `Four arrangements: with one lone B among three identical A's, an arrangement is nothing but the choice of B's position. [Learn more about AAAB](!#aaab-placing-the-single-b) · [All multisets](!#the-multiset-stepper)`,
    mAABB: `Six distinct words survive from 24 tagged permutations — every visible card absorbs 2!·2! = 4 invisible copy-swaps. [Learn more about the division](!#why-divide-by-k) · [All multisets](!#the-multiset-stepper)`,
    mAABC: `Twelve arrangements in unequal groups of 6, 3, and 3 — group sizes differ because each first choice leaves a different remainder. [Learn more about first-item groups](!#grouping-by-distinct-first-item) · [All multisets](!#the-multiset-stepper)`,
    mAAABB: `Ten arrangements — exactly C(5,2), because with two distinct letters only the positions of the B's matter. [Learn more about AAABB](!#aaabb-two-letters-ten-arrangements) · [All multisets](!#the-multiset-stepper)`,
    mAABBC: `Thirty arrangements from three letter groups — the stepper's largest run, where the formula's economy over enumeration shows. [Learn more about AABBC](!#aabbc-the-longest-run) · [All multisets](!#the-multiset-stepper)`,
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
        title: "Permutation with Identical Items: n!/(k!) | Learn Math Class",
        description: "Visualize multiset permutations with the formula n!/(k1! · k2! · ...). Cycle duplicate patterns and watch every distinct arrangement build step by step.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/permutation-with-identical",
        name: "Permutation with Identical Items Visualizer",
        hubDescription: "Cycle through six multisets — AAB, AAAB, AABB, AABC, AAABB, AABBC — and watch every distinct permutation build one position at a time. Only the specific copy in use dims in the source row, exposing why n! divides by k! for each repeated group.",
        category: "Permutations",
        subCategory: "",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="14" r="6.5" fill="#85B7EB" stroke="#0C447C" stroke-width="1.1"/><circle cx="31" cy="14" r="6.5" fill="#85B7EB" fill-opacity="0.3" stroke="#0C447C" stroke-width="1" stroke-dasharray="2,1.5"/><circle cx="45" cy="14" r="6.5" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><circle cx="59" cy="14" r="6.5" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><line x1="40" y1="26" x2="40" y2="34" stroke="#B5D4F4" stroke-width="1" stroke-dasharray="2,1.5"/><path d="M37 34 L43 34 L40 38 Z" fill="#B5D4F4"/><circle cx="17" cy="49" r="6.5" fill="#85B7EB" stroke="#0C447C" stroke-width="1.1"/><circle cx="31" cy="49" r="6.5" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><circle cx="45" cy="49" r="6.5" fill="#85B7EB" stroke="#0C447C" stroke-width="1.1"/><circle cx="59" cy="49" r="6.5" fill="#FAC775" stroke="#854F0B" stroke-width="1.1"/><rect x="23" y="63" width="34" height="14" rx="7" fill="#CECBF6" stroke="#534AB7" stroke-width="1.2"/><text x="40" y="73" font-family="Georgia,serif" font-size="8" fill="#26215C" text-anchor="middle" font-style="italic">2! &#183; 2!</text></svg>`
      },

    }
  }
}

export default function PermutationWithIdenticalItemsVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

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
    stateRow('obj2', 'the-build-area', 'building'),
    plain('obj3', 'the-multiset-stepper'),
    stateRow('obj11', 'aab-the-smallest-multiset', 'mAAB'),
    stateRow('obj12', 'aaab-placing-the-single-b', 'mAAAB'),
    stateRow('obj13', 'aaabb-two-letters-ten-arrangements', 'mAAABB'),
    stateRow('obj14', 'aabbc-the-longest-run', 'mAABBC'),
    stateRow('obj4', 'grouping-by-distinct-first-item', 'mAABC'),
    plain('obj5', 'transport-controls'),
    plain('obj6', 'mode-switch'),
    plain('obj7', 'right-panel-and-progress'),
    plain('obj8', 'what-is-a-permutation-with-identical-items'),
    stateRow('obj9', 'why-divide-by-k', 'mAABB'),
    plain('obj10', 'related-concepts'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Permutations with Identical Items</h1>
      <br/>
      <PermutationWithIdenticalItems explanations={explanations}/>
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