// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import Head from 'next/head'
// // import '@/pages/pages.css'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import CircularPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/CircularPermutations'


// // export async function getStaticProps(){

// //   const keyWords=['','','','','']

// //   // •

// // //   \u2022 First item
// // // \u2022 Second item

  
// // // <hr style="border-width:1px;"></hr>

// // // <hr style="color:blue;" />

// // // <hr style="border-color:#3498db; border-width:1px;" />



// // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// //         //     {processContent(sectionsContent.normal.notation)}
// //         // </div>,


// // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // //     {processContent(sectionsContent.normal.parameters)}
// // // </div>,
        
// // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // //                   {processContent(sectionsContent.obj4.content)}
// // //                   </div>,


// // //  <div key={'dist'} style={{
// // //                     textAlign: 'center',
// // //                     transform: 'scale(0.98)',
// // //                     transformOrigin: 'center',
// // //                     marginTop:'50px',
// // //                     marginLeft:'-150px'
// // //                   }} dangerouslySetInnerHTML={{ 
// // //                     __html:   sectionContent.distributions.svg,
// // //                   }} />

// //     const sectionsContent={

// //     obj0:{
// //       title:`Key Terms`,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj1:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
  
// //     },
// //     obj2:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
  
// //     obj3:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj4:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj5:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj6:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj7:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj8:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj9:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj10:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj11:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj12:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     },
// //     obj13:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },
// //     obj14:{
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
// //       link:'',
  
// //     },


// //     obj15:{
  
// //       title:``,
// //       content:``,
// //       before:``,
// //       after:``,
// //       link:'',
  
// //     }
  
// //   }


// //   const introContent = {
// //   id: "intro",
// //   title: "",
// //   content: ``
// // }




// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //           seoData: {
// //         title: "Title | Learn Math Class",
// //         description: "Metadescription",
// //         keywords: keyWords.join(", "),
// //         url: "/combinatorics/visual-tools/circular-permutation",
// //          name: "name"
// //       },
        
// //        }
// //     }
// //    }

// // export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
// //   const genericSections=[
// //     {
// //         id:'0',
// //         title:sectionsContent.obj0.title,
// //         link:sectionsContent.obj0.link,
// //         content:[
// //           sectionsContent.obj0.content,
// //         ]
// //     },
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //         ]
// //     },
// //     {
// //         id:'13',
// //         title:sectionsContent.obj13.title,
// //         link:sectionsContent.obj13.link,
// //         content:[
// //           sectionsContent.obj13.content,
// //         ]
// //     },
// //     {
// //         id:'14',
// //         title:sectionsContent.obj14.title,
// //         link:sectionsContent.obj14.link,
// //         content:[
// //           sectionsContent.obj14.content,
// //         ]
// //     },
// //     {
// //         id:'15',
// //         title:sectionsContent.obj15.title,
// //         link:sectionsContent.obj15.link,
// //         content:[
// //           sectionsContent.obj15.content,
// //         ]
// //     },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
// //     // {
// //     //     id:'1',
// //     //     title:sectionsContent.obj1.title,
// //     //     link:sectionsContent.obj1.link,
// //     //     content:[
// //     //       sectionsContent.obj1.content,
// //     //     ]
// //     // },
    
// // ]

// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify({
// //         "@context": "https://schema.org",
// //         "@type": "WebPage",
// //         "name": seoData.name,
// //         "description": seoData.description,
// //         "keywords": seoData.keywords,
// //         "url": `https://www.learnmathclass.com${seoData.url}`,
// //         "dateModified": new Date().toISOString(),
// //         "inLanguage": "en-US",
// //         "mainEntity": {
// //           "@type": "Article",
// //           "name": seoData.name,
// //           "dateModified": new Date().toISOString(),
// //           "author": {
// //             "@type": "Organization",
// //             "name": "Learn Math Class"
// //           }
// //         }
// //       })
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Circular Permutations</h1>
// //    <br/>
// //    <CircularPermutation/>
// //    <br/>
// //    {/* <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    /> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //     {/* <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         /> */}
// //    <br/>
// //     {/* <KeyTermsCard
// //      id="0"
// //      title={sectionsContent.obj0.title}
// //      content={sectionsContent.obj0.content}
// //      after={sectionsContent.obj0.after}
// //      variant="light"
// //    /> */}
// //    <br/>
// //    {/* <Sections sections={genericSections}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import CircularPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/CircularPermutations'


// export async function getStaticProps(){

//   const keyWords = [
//     'circular permutation',
//     'circular permutation formula',
//     'circular permutation calculator',
//     'circular permutation visualizer',
//     '(n-1)! formula',
//     'arranging people around a table',
//     'round table seating problem',
//     'rotational symmetry permutation',
//     'circular arrangement counting',
//     'permutation around a circle',
//     'circular permutation examples',
//     'cyclic permutation',
//     'circular arrangement formula',
//     'combinatorics circular permutation',
//     'interactive permutation tool'
//   ]

//   const sectionsContent = {

//     obj0: {
//       title: `Key Terms`,
//       content: `**Circular permutation** — an arrangement of $n$ distinct items around a circle where arrangements that differ only by rotation are considered identical.

// **Anchor** — the item fixed at a reference position to break the rotational symmetry. Once anchored, the other items are arranged relative to it.

// **Rotational symmetry** — the property that rotating a circular arrangement by any number of positions produces an arrangement that should be counted as the same one.

// **(n-1)! formula** — the count of distinct circular permutations of $n$ distinct items, equal to $n!$ divided by the $n$ rotations of each arrangement.

// **Linear permutation** — for comparison: an arrangement of $n$ items in a line, counted by $n!$. The circular case factors out the $n$ rotations, giving $n!/n = (n - 1)!$.

// **Reference position** — the slot on the circle where the anchor is placed. In this tool, the top of the build ring.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj1: {
//       title: `Getting Started`,
//       content: `The tool opens with $n = 3$ items ready to build. The scene is split into three areas:

// • A **source row** at the top showing the available items.

// • A **build ring** in the middle with $n$ slots arranged around a circle. The top slot is labeled **FIXED** and already holds the anchor.

// • A **completed** grid below, where every finished circular arrangement is recorded as a mini circle card.

// To run it:

// • Press **▶ Play** to build all $(n - 1)!$ arrangements automatically.

// • Press **Step ▶** to advance one ball at a time.

// • Press **◀** to step backward through the animation.

// • Adjust the **Speed** slider to control how fast play advances.

// The badge in the top right shows the formula $(n - 1)!$ for the current $n$ and the running count $k / (n - 1)!$ so progress against the total is always visible.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj2: {
//       title: `The Anchor`,
//       content: `The tool&apos;s central pedagogical move is the **anchor**: the first item is fixed at the top slot of the build ring throughout every arrangement. This is what makes the count $(n - 1)!$ instead of $n!$.

// Without anchoring, every circular arrangement would be counted $n$ times — once for each rotation that brings a different item to the top. Anchoring eliminates that redundancy: by pinning one item, only one representative of each rotation class ever appears.

// The visual shows this directly:

// • The top slot has a **solid** border and a **FIXED** label above it.

// • The other slots have **dashed** borders and are numbered $\\#2, \\#3, \\dots, \\#n$ clockwise around the ring.

// • Only the dashed slots get filled by the animation. The anchor never moves.

// • In the source row, the anchor item stays dimmed throughout — it&apos;s out of play because it&apos;s already placed.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj3: {
//       title: `Adjusting n`,
//       content: `The **n** stepper in the control bar sets the number of items. The visual layout supports:

// • **n = 3** — produces $(3 - 1)! = 2$ arrangements. The minimum interesting case: with one anchor, only two items vary.

// • **n = 4** — produces $(4 - 1)! = 6$ arrangements. Three items rotate around the anchor.

// • **n = 5** — produces $(5 - 1)! = 24$ arrangements. Mini cards shrink to fit a $6$-column grid.

// Changing $n$ resets the build state: the build ring repopulates with new slots, the source row updates, the completed grid empties, and the formula in the top-right corner refreshes.

// The counts grow quickly — by $n = 5$ you&apos;re already at $24$ distinct circular arrangements, which is why the visual caps there. For larger $n$, use a calculator: $(6 - 1)! = 120$, $(7 - 1)! = 720$, $(10 - 1)! = 362{,}880$.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj4: {
//       title: `The Build Ring`,
//       content: `The build ring is the live workspace where one arrangement at a time is constructed:

// • The **top slot** (slot $\\#1$) is the anchor. Always filled with the first item, never modified.

// • The **other slots** are numbered $\\#2$ through $\\#n$ going clockwise. They fill in order as the animation runs.

// • When a ball is in flight from the source row to a slot, a **dotted guide line** traces the path in the ball&apos;s own color, so you can track which item is moving where.

// • In the source row above, an item that&apos;s already been placed in the current arrangement (or is the anchor) is **dimmed**. Only available items appear in full opacity.

// • When all slots are filled, a **flash ring** briefly pulses around the build area. The completed arrangement is then copied to the grid below and the ring resets for the next one.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj5: {
//       title: `Transport Controls`,
//       content: `The control bar offers four transport buttons plus a speed slider:

// • **◀** (Step back) — walks the animation one step backward. Useful for re-examining an arrangement or pausing mid-build.

// • **Step ▶** (Step forward) — advances one ball into one slot. Stop after each step to read off the partial arrangement.

// • **▶ Play / ⏸ Pause** — runs the animation continuously until all $(n - 1)!$ arrangements are built, then auto-pauses.

// • **↺ Reset** — clears the completed grid and starts over from the first arrangement.

// The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source to its assigned slot and watch the dotted guide line in detail.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj6: {
//       title: `Mode Switch`,
//       content: `The **Mode** switch at the start of the control bar toggles how items are rendered:

// • **Balls mode** (default) — items appear as colored circles. Better for seeing positional structure at a glance and for tracking which item went where in the completed grid.

// • **Letters mode** — items appear with letter labels. Better for reading off the actual sequence in each arrangement and matching it to algebraic notation like $(A, B, C, D)$.

// The encoding is consistent across the source row, the build ring, the flying ball, and every mini card in the completed grid. The anchor keeps its identity across modes — it&apos;s always the first item, always at the top of every ring.

// The narration panel on the right also adapts to the current mode, so prose references match the visual.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj7: {
//       title: `The Completed Grid`,
//       content: `Below the build ring, the **completed** section catalogs every arrangement the tool has produced. Each entry is a mini circle card showing:

// • The anchor at the top of its own small ring.

// • The other $n - 1$ items in their assigned positions for that arrangement.

// The grid layout adapts to $n$:

// • **n = 3**: $2$ cards in $2$ columns.

// • **n = 4**: $6$ cards in $3$ columns.

// • **n = 5**: $24$ cards in $6$ columns.

// Card size shrinks as the count grows so the whole catalog fits within the scene. A counter above the grid shows the running tally $k / (n - 1)!$. When all arrangements complete, the counter reaches the total and the animation auto-pauses, leaving every distinct circular permutation visible side by side.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj8: {
//       title: `What Is a Circular Permutation`,
//       content: `A **circular permutation** is an arrangement of $n$ distinct items around a circle, with the convention that two arrangements are the same if one is a rotation of the other. The count of distinct circular permutations is:

// $$P_{\\text{circ}}(n) = (n - 1)!$$

// The classic setting is a round table with $n$ guests. If you labeled the seats $1$ through $n$ and counted arrangements, you would get $n!$ — but a round table doesn&apos;t have labeled seats. Spinning the table doesn&apos;t change who is next to whom, which is the only structural information a circular arrangement carries.

// The formula applies to any cyclic arrangement where positions matter only relative to each other: people around a campfire, keys on a circular keyring, beads on a closed loop, or steps in a periodic schedule.

// For deeper coverage, see the **circular permutation** section on the permutations theory page.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj9: {
//       title: `Why (n-1)! Instead of n!`,
//       content: `Two equivalent derivations of $(n - 1)!$.

// **By symmetry.** Start with all $n!$ linear arrangements. Wrap each one into a circle by joining the ends. Every distinct circular arrangement corresponds to exactly $n$ different linear ones — you can read the same circle starting from any of the $n$ positions. So divide:

// $$\\frac{n!}{n} = (n - 1)!$$

// **By anchoring.** Fix one item at a reference position. The remaining $n - 1$ items occupy the other $n - 1$ positions, in any order. That&apos;s a linear permutation of $n - 1$ items, which is $(n - 1)!$. No double counting, because the anchor uniquely identifies each rotation class.

// The tool uses the anchoring approach because it produces unique arrangements directly. You never have to build $n!$ candidates and then collapse $n$-fold redundancy — every arrangement on screen is already a distinct circular permutation.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj10: {
//       title: `Related Concepts`,
//       content: `**Full permutation** — the linear case, $n!$ arrangements. The circular formula divides out the $n$ rotations of each linear one.

// **Permutation with identical items** — when some of the $n$ items are indistinguishable. Reduces the count by the factorial of each repeat group&apos;s size.

// **Partial permutation without repetition** — pick and arrange only $r$ items from a set of $n$. Formula $\\frac{n!}{(n - r)!}$.

// **Combinations** — selecting items where order doesn&apos;t matter. The companion concept to permutations.

// **Necklace and bracelet counting** — generalizations where reflections (flips) are also factored out alongside rotations. The bracelet count for $n \\ge 3$ is $(n - 1)!/2$.

// **Cyclic groups** — the algebraic structure behind rotational symmetry. The group of rotations of a circle with $n$ marked positions is $\\mathbb{Z}/n\\mathbb{Z}$.

// **Combinatorics calculator** — to compute $(n - 1)!$ for arbitrary $n$ values beyond the visual cap, see the **circular permutation calculator**.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj11: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//     obj12: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//     obj13: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//     obj14: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//       link: '',
//     },
//     obj15: {
//       title: ``,
//       content: ``,
//       before: ``,
//       after: ``,
//       link: '',
//     }

//   }


//   const introContent = {
//     id: "intro",
//     title: "",
//     content: ``
//   }


//   const faqQuestions = {
//     obj1: {
//       question: "What is a circular permutation?",
//       answer: "A circular permutation is an arrangement of n distinct items around a circle, where two arrangements are considered identical if one is a rotation of the other. The classic example is seating guests around a round table: only the relative positions matter, not where the table starts."
//     },
//     obj2: {
//       question: "Why is the formula (n-1)! instead of n!?",
//       answer: "Every circular arrangement of n items corresponds to n different linear arrangements, because you can read the same circle starting from any of the n positions. To avoid counting each circular arrangement n times, divide n! by n, which gives (n minus 1) factorial. Equivalently, fix one item at a reference position and arrange the remaining n minus 1 items linearly."
//     },
//     obj3: {
//       question: "How do you arrange people around a round table?",
//       answer: "Fix one person at any seat to anchor the arrangement. The remaining n minus 1 people can be seated in the other n minus 1 seats in any order. The total number of distinct arrangements is (n minus 1) factorial. For 5 guests that gives 24 arrangements; for 6 guests, 120; for 10 guests, 362880."
//     },
//     obj4: {
//       question: "What is the difference between a circular and a linear permutation?",
//       answer: "A linear permutation arranges items in a row, so the starting position matters and the count is n factorial. A circular permutation arranges items around a circle, where rotations of the same arrangement are considered identical, so the count is (n minus 1) factorial. The factor of n captures exactly the n rotations of a single circular arrangement."
//     },
//     obj5: {
//       question: "When should I use a circular permutation?",
//       answer: "Whenever items are arranged in a cycle and absolute position does not matter, only relative position. Common cases include seating around a round table, arranging keys on a circular keyring, organizing periodic patterns, and any scheduling problem where the sequence loops back to its start. If the cycle also has a meaningful direction reversal (like a bracelet you can flip), divide further by 2."
//     }
//   }


//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Circular Permutation Calculator",
//       "description": "Interactive tool that builds every distinct circular permutation of n items by anchoring one item and rotating the rest, illustrating the (n-1)! formula.",
//       "url": "https://www.learnmathclass.com/combinatorics/visual-tools/circular-permutation",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Build every distinct circular permutation step by step with an animated build ring",
//         "Anchor visual that fixes one item at the top to factor out rotational symmetry",
//         "Adjustable n from 3 to 5 with the formula (n-1)! updating live in the header",
//         "Four transport buttons for step back, step forward, play, and reset, plus a speed slider",
//         "Mode switch between colored balls and letter labels",
//         "Completed grid that catalogs every arrangement as a mini circular card",
//         "Source row highlighting which item is in flight and which are already placed"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": "circular permutation, circular permutation formula, circular permutation calculator, circular permutation visualizer, (n-1)! formula, arranging people around a table, round table seating problem, rotational symmetry permutation, circular arrangement counting, permutation around a circle, circular permutation examples, cyclic permutation, circular arrangement formula, combinatorics circular permutation, interactive permutation tool"
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Combinatorics",
//           "item": "https://www.learnmathclass.com/combinatorics"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Circular Permutation Calculator",
//           "item": "https://www.learnmathclass.com/combinatorics/visual-tools/circular-permutation"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }


//   return {
//     props: {
//       sectionsContent,
//       introContent,
//       faqQuestions,
//       schemas,
//       seoData: {
//         title: "Circular Permutation Calculator: (n-1)! | Learn Math Class",
//         description: "Calculate circular permutations with the (n-1)! formula. Watch one item anchor at the top while the rest cycle through every distinct arrangement.",
//         keywords: keyWords.join(", "),
//         url: "/combinatorics/visual-tools/circular-permutation",
//         name: "Circular Permutation Calculator",
//         hubDescription: "Watch (n-1)! circular permutations build one by one — one item anchored at the top breaks the rotational symmetry while the remaining items cycle through every distinct seating around the circle. Adjust n and step through the build animation.",
//         category: "Permutations",
//         subCategory: ""
//       },

//     }
//   }
// }

// export default function CircularPermutationCalculator({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


//   const genericSections = [
//     {
//       id: '0',
//       title: sectionsContent.obj0.title,
//       link: sectionsContent.obj0.link,
//       content: [
//         sectionsContent.obj0.content,
//       ]
//     },
//     {
//       id: '1',
//       title: sectionsContent.obj1.title,
//       link: sectionsContent.obj1.link,
//       content: [
//         sectionsContent.obj1.content,
//       ]
//     },
//     {
//       id: '2',
//       title: sectionsContent.obj2.title,
//       link: sectionsContent.obj2.link,
//       content: [
//         sectionsContent.obj2.content,
//       ]
//     },
//     {
//       id: '3',
//       title: sectionsContent.obj3.title,
//       link: sectionsContent.obj3.link,
//       content: [
//         sectionsContent.obj3.content,
//       ]
//     },
//     {
//       id: '4',
//       title: sectionsContent.obj4.title,
//       link: sectionsContent.obj4.link,
//       content: [
//         sectionsContent.obj4.content,
//       ]
//     },
//     {
//       id: '5',
//       title: sectionsContent.obj5.title,
//       link: sectionsContent.obj5.link,
//       content: [
//         sectionsContent.obj5.content,
//       ]
//     },
//     {
//       id: '6',
//       title: sectionsContent.obj6.title,
//       link: sectionsContent.obj6.link,
//       content: [
//         sectionsContent.obj6.content,
//       ]
//     },
//     {
//       id: '7',
//       title: sectionsContent.obj7.title,
//       link: sectionsContent.obj7.link,
//       content: [
//         sectionsContent.obj7.content,
//       ]
//     },
//     {
//       id: '8',
//       title: sectionsContent.obj8.title,
//       link: sectionsContent.obj8.link,
//       content: [
//         sectionsContent.obj8.content,
//       ]
//     },
//     {
//       id: '9',
//       title: sectionsContent.obj9.title,
//       link: sectionsContent.obj9.link,
//       content: [
//         sectionsContent.obj9.content,
//       ]
//     },
//     {
//       id: '10',
//       title: sectionsContent.obj10.title,
//       link: sectionsContent.obj10.link,
//       content: [
//         sectionsContent.obj10.content,
//       ]
//     },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
//     //     ]
//     // },

//   ]

//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="article" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
//         />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
//         />
//       </Head>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar
//         side='right'
//         // topOffset='65px'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//       <Breadcrumb/>
//       <br/>
//       <br/>
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Circular Permutations</h1>
//       <br/>
//       <CircularPermutation/>
//       <br/>
//       <SectionTableOfContents sections={genericSections}
//         showSecondaryNav={true}
//         secondaryNavMode="siblings"
//         secondaryNavTitle="More in this Section"
//       />
//       <br/>
//       <br/>
//       <br/>
//       {/* <IntroSection
//         id={introContent.id}
//         title={introContent.title}
//         content={introContent.content}
//         backgroundColor='#f9fafb'
//         textColor="#06357a"
//       /> */}
//       <br/>
//       <KeyTermsCard
//         id="0"
//         title={sectionsContent.obj0.title}
//         content={sectionsContent.obj0.content}
//         after={sectionsContent.obj0.after}
//         variant="light"
//       />
//       <br/>
//       <Sections sections={genericSections}/>
//       <br/>
//       <br/>
//       <br/>
//       {/* <ScrollUpButton/> */}
//     </>
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
import CircularPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/CircularPermutations'


export async function getStaticProps(){

  const keyWords = [
    'circular permutation',
    'circular permutation formula',
    'circular permutation visualizer',
    'visualize circular permutations',
    '(n-1)! formula',
    'arranging people around a table',
    'round table seating problem',
    'rotational symmetry permutation',
    'circular arrangement counting',
    'permutation around a circle',
    'circular permutation examples',
    'cyclic permutation',
    'circular arrangement formula',
    'combinatorics circular permutation',
    'interactive permutation tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Circular permutation** — an arrangement of $n$ distinct items around a circle where arrangements that differ only by rotation are considered identical.

**Anchor** — the item fixed at a reference position to break the rotational symmetry. Once anchored, the other items are arranged relative to it.

**Rotational symmetry** — the property that rotating a circular arrangement by any number of positions produces an arrangement that should be counted as the same one.

**(n-1)! formula** — the count of distinct circular permutations of $n$ distinct items, equal to $n!$ divided by the $n$ rotations of each arrangement.

**Linear permutation** — for comparison: an arrangement of $n$ items in a line, counted by $n!$. The circular case factors out the $n$ rotations, giving $n!/n = (n - 1)!$.

**Reference position** — the slot on the circle where the anchor is placed. In this tool, the top of the build ring.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 3$ items ready to build. The scene is split into three areas:

• A **source row** at the top showing the available items.

• A **build ring** in the middle with $n$ slots arranged around a circle. The top slot is labeled **FIXED** and already holds the anchor.

• A **completed** grid below, where every finished circular arrangement is recorded as a mini circle card.

To run it:

• Press **▶ Play** to build all $(n - 1)!$ arrangements automatically.

• Press **Step ▶** to advance one ball at a time.

• Press **◀** to step backward through the animation.

• Adjust the **Speed** slider to control how fast play advances.

The badge in the top right shows the formula $(n - 1)!$ for the current $n$ and the running count $k / (n - 1)!$ so progress against the total is always visible.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Anchor`,
      content: `The tool's central pedagogical move is the **anchor**: the first item is fixed at the top slot of the build ring throughout every arrangement. This is what makes the count $(n - 1)!$ instead of $n!$.

Without anchoring, every circular arrangement would be counted $n$ times — once for each rotation that brings a different item to the top. Anchoring eliminates that redundancy: by pinning one item, only one representative of each rotation class ever appears.

The visual shows this directly:

• The top slot has a **solid** border and a **FIXED** label above it.

• The other slots have **dashed** borders and are numbered $\\#2, \\#3, \\dots, \\#n$ clockwise around the ring.

• Only the dashed slots get filled by the animation. The anchor never moves.

• In the source row, the anchor item stays dimmed throughout — it's out of play because it's already placed.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n`,
      content: `The **n** stepper in the control bar sets the number of items. The visual layout supports:

• **n = 3** — produces $(3 - 1)! = 2$ arrangements. The minimum interesting case: with one anchor, only two items vary.

• **n = 4** — produces $(4 - 1)! = 6$ arrangements. Three items rotate around the anchor.

• **n = 5** — produces $(5 - 1)! = 24$ arrangements. Mini cards shrink to fit a $6$-column grid.

Changing $n$ resets the build state: the build ring repopulates with new slots, the source row updates, the completed grid empties, and the formula in the top-right corner refreshes.

The counts grow quickly — by $n = 5$ you're already at $24$ distinct circular arrangements, which is why the visual caps there. For larger $n$, use a calculator: $(6 - 1)! = 120$, $(7 - 1)! = 720$, $(10 - 1)! = 362{,}880$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Build Ring`,
      content: `The build ring is the live workspace where one arrangement at a time is constructed:

• The **top slot** (slot $\\#1$) is the anchor. Always filled with the first item, never modified.

• The **other slots** are numbered $\\#2$ through $\\#n$ going clockwise. They fill in order as the animation runs.

• When a ball is in flight from the source row to a slot, a **dotted guide line** traces the path in the ball's own color, so you can track which item is moving where.

• In the source row above, an item that's already been placed in the current arrangement (or is the anchor) is **dimmed**. Only available items appear in full opacity.

• When all slots are filled, a **flash ring** briefly pulses around the build area. The completed arrangement is then copied to the grid below and the ring resets for the next one.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining an arrangement or pausing mid-build.

• **Step ▶** (Step forward) — advances one ball into one slot. Stop after each step to read off the partial arrangement.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all $(n - 1)!$ arrangements are built, then auto-pauses.

• **↺ Reset** — clears the completed grid and starts over from the first arrangement.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source to its assigned slot and watch the dotted guide line in detail.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how items are rendered:

• **Balls mode** (default) — items appear as colored circles. Better for seeing positional structure at a glance and for tracking which item went where in the completed grid.

• **Letters mode** — items appear with letter labels. Better for reading off the actual sequence in each arrangement and matching it to algebraic notation like $(A, B, C, D)$.

The encoding is consistent across the source row, the build ring, the flying ball, and every mini card in the completed grid. The anchor keeps its identity across modes — it's always the first item, always at the top of every ring.

The narration panel on the right also adapts to the current mode, so prose references match the visual.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Completed Grid`,
      content: `Below the build ring, the **completed** section catalogs every arrangement the tool has produced. Each entry is a mini circle card showing:

• The anchor at the top of its own small ring.

• The other $n - 1$ items in their assigned positions for that arrangement.

The grid layout adapts to $n$:

• **n = 3**: $2$ cards in $2$ columns.

• **n = 4**: $6$ cards in $3$ columns.

• **n = 5**: $24$ cards in $6$ columns.

Card size shrinks as the count grows so the whole catalog fits within the scene. A counter above the grid shows the running tally $k / (n - 1)!$. When all arrangements complete, the counter reaches the total and the animation auto-pauses, leaving every distinct circular permutation visible side by side.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Circular Permutation`,
      content: `A **circular permutation** is an arrangement of $n$ distinct items around a circle, with the convention that two arrangements are the same if one is a rotation of the other. The count of distinct circular permutations is:

$$P_{\\text{circ}}(n) = (n - 1)!$$

The classic setting is a round table with $n$ guests. If you labeled the seats $1$ through $n$ and counted arrangements, you would get $n!$ — but a round table doesn't have labeled seats. Spinning the table doesn't change who is next to whom, which is the only structural information a circular arrangement carries.

The formula applies to any cyclic arrangement where positions matter only relative to each other: people around a campfire, keys on a circular keyring, beads on a closed loop, or steps in a periodic schedule.

For deeper coverage, see the **circular permutation** section on the permutations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why (n-1)! Instead of n!`,
      content: `Two equivalent derivations of $(n - 1)!$.

**By symmetry.** Start with all $n!$ linear arrangements. Wrap each one into a circle by joining the ends. Every distinct circular arrangement corresponds to exactly $n$ different linear ones — you can read the same circle starting from any of the $n$ positions. So divide:

$$\\frac{n!}{n} = (n - 1)!$$

**By anchoring.** Fix one item at a reference position. The remaining $n - 1$ items occupy the other $n - 1$ positions, in any order. That's a linear permutation of $n - 1$ items, which is $(n - 1)!$. No double counting, because the anchor uniquely identifies each rotation class.

The tool uses the anchoring approach because it produces unique arrangements directly. You never have to build $n!$ candidates and then collapse $n$-fold redundancy — every arrangement on screen is already a distinct circular permutation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Full permutation** — the linear case, $n!$ arrangements. The circular formula divides out the $n$ rotations of each linear one.

**Permutation with identical items** — when some of the $n$ items are indistinguishable. Reduces the count by the factorial of each repeat group's size.

**Partial permutation without repetition** — pick and arrange only $r$ items from a set of $n$. Formula $\\frac{n!}{(n - r)!}$.

**Combinations** — selecting items where order doesn't matter. The companion concept to permutations.

**Necklace and bracelet counting** — generalizations where reflections (flips) are also factored out alongside rotations. The bracelet count for $n \\ge 3$ is $(n - 1)!/2$.

**Cyclic groups** — the algebraic structure behind rotational symmetry. The group of rotations of a circle with $n$ marked positions is $\\mathbb{Z}/n\\mathbb{Z}$.

**Combinatorics calculator** — to compute $(n - 1)!$ for arbitrary $n$ values beyond the visual cap, see the **circular permutation calculator**.`,
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
      question: "What is a circular permutation?",
      answer: "A circular permutation is an arrangement of n distinct items around a circle, where two arrangements are considered identical if one is a rotation of the other. The classic example is seating guests around a round table: only the relative positions matter, not where the table starts."
    },
    obj2: {
      question: "Why is the formula (n-1)! instead of n!?",
      answer: "Every circular arrangement of n items corresponds to n different linear arrangements, because you can read the same circle starting from any of the n positions. To avoid counting each circular arrangement n times, divide n! by n, which gives (n minus 1) factorial. Equivalently, fix one item at a reference position and arrange the remaining n minus 1 items linearly."
    },
    obj3: {
      question: "How do you arrange people around a round table?",
      answer: "Fix one person at any seat to anchor the arrangement. The remaining n minus 1 people can be seated in the other n minus 1 seats in any order. The total number of distinct arrangements is (n minus 1) factorial. For 5 guests that gives 24 arrangements; for 6 guests, 120; for 10 guests, 362880."
    },
    obj4: {
      question: "What is the difference between a circular and a linear permutation?",
      answer: "A linear permutation arranges items in a row, so the starting position matters and the count is n factorial. A circular permutation arranges items around a circle, where rotations of the same arrangement are considered identical, so the count is (n minus 1) factorial. The factor of n captures exactly the n rotations of a single circular arrangement."
    },
    obj5: {
      question: "When should I use a circular permutation?",
      answer: "Whenever items are arranged in a cycle and absolute position does not matter, only relative position. Common cases include seating around a round table, arranging keys on a circular keyring, organizing periodic patterns, and any scheduling problem where the sequence loops back to its start. If the cycle also has a meaningful direction reversal (like a bracelet you can flip), divide further by 2."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Circular Permutation Visualizer",
      "description": "Visualize every distinct circular permutation of n items by anchoring one at the top while the rest cycle through every arrangement. Illustrates the (n-1)! formula step by step.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/circular-permutation",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every distinct circular permutation step by step with an animated build ring",
        "Anchor visual that fixes one item at the top to factor out rotational symmetry",
        "Adjustable n from 3 to 5 with the formula (n-1)! updating live in the header",
        "Four transport buttons for step back, step forward, play, and reset, plus a speed slider",
        "Mode switch between colored balls and letter labels",
        "Completed grid that catalogs every arrangement as a mini circular card",
        "Source row highlighting which item is in flight and which are already placed"
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
      "keywords": "circular permutation, circular permutation formula, circular permutation visualizer, visualize circular permutations, (n-1)! formula, arranging people around a table, round table seating problem, rotational symmetry permutation, circular arrangement counting, permutation around a circle, circular permutation examples, cyclic permutation, circular arrangement formula, combinatorics circular permutation, interactive permutation tool"
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
          "name": "Circular Permutation Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/circular-permutation"
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
        title: "Circular Permutation Visualizer: (n-1)! | Learn Math Class",
        description: "Visualize circular permutations with the (n-1)! formula. Watch one item anchor at the top while the rest cycle through every distinct circular arrangement.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/circular-permutation",
        name: "Circular Permutation Visualizer",
        hubDescription: "Watch (n-1)! circular permutations build one by one — one item anchored at the top breaks the rotational symmetry while the remaining items cycle through every distinct seating around the circle. Adjust n and step through the build animation.",
        category: "Permutations",
        subCategory: ""
      },

    }
  }
}

export default function CircularPermutationVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Circular Permutations</h1>
      <br/>
      <CircularPermutation/>
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