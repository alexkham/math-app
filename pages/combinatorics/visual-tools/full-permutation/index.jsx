// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import Head from 'next/head'
// // import '@/pages/pages.css'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import FullPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/FullPermutation'


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
// //         url: "/combinatorics/visual-tools/full-permutation",
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
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Full Permutation</h1>
// //    <br/>
// //    <FullPermutation/>
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
// import FullPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/FullPermutation'


// export async function getStaticProps(){

//   const keyWords = [
//     'permutation',
//     'permutation calculator',
//     'full permutation',
//     'full permutation calculator',
//     'n factorial calculator',
//     'n! formula',
//     'factorial permutations',
//     'permutation formula n!',
//     'arranging n objects',
//     'permutation step by step',
//     'number of permutations',
//     'P(n) calculator',
//     'permutation visualizer',
//     'how to calculate permutations',
//     'ordering n distinct items'
//   ]

//   const sectionsContent = {

//     obj0: {
//       title: `Key Terms`,
//       content: `**Full permutation** — an arrangement of all $n$ distinct items in a line, where order matters and every item is used exactly once. The count is $n!$.

// **Factorial $n!$** — the product $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1$. The number of full permutations of $n$ distinct items.

// **Position** — a slot in the arrangement, numbered $\\#1$ through $\\#n$ from left to right in the build area.

// **Step / first-item group** — the family of permutations that share the same item in position $\\#1$. With $n$ items there are $n$ such groups, each containing $(n - 1)!$ permutations.

// **Permutation prefix** — the part of the arrangement already filled at any moment during the build. A landed ball is part of the prefix; the source row dims items already used.

// **$P(n)$ notation** — alternative writing for the count of full permutations: $P(n) = n!$.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj1: {
//       title: `Getting Started`,
//       content: `The tool opens with $n = 3$ items and is ready to build. The scene is split into three areas:

// • A **source row** at the top showing the available items.

// • A **build area** in the middle with $n$ empty slots labeled $\\#1$ through $\\#n$.

// • A **completed** section below, where every finished permutation is recorded and organized by which item went into position $\\#1$.

// To run the visualization:

// • Press **▶ Play** to auto-build all $n!$ permutations.

// • Press **Step ▶** to advance one ball at a time.

// • Press **◀** to step backward through the animation.

// • Adjust the **Speed** slider to control how fast play advances.

// The badge in the top right shows the formula $P(n) = n!$ together with the total, and a live status line such as "Step X (item name): k / (n-1)!" while building, or "Complete · n! / n!" when done.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj2: {
//       title: `The Build Area`,
//       content: `The build area is where one permutation at a time is constructed. Five things to watch:

// • **Empty slot outlines** with dashed borders, labeled $\\#1, \\#2, \\dots, \\#n$ from left to right. The label tells you the position number.

// • When a ball is in flight from the source row to a slot, a **dotted guide line** in that ball&apos;s color traces the trajectory.

// • Each ball lands in its assigned slot and stays put until the permutation completes.

// • In the source row above, every item already placed in the current permutation (plus the one currently in flight) is **dimmed** to indicate it&apos;s out of play.

// • When all $n$ slots are filled, a **flash ring** briefly pulses around the build area. The completed permutation is then copied to the appropriate row in the completed section below, and the build area resets for the next permutation.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj3: {
//       title: `Adjusting n`,
//       content: `The **n** stepper in the control bar changes the number of items. The visual handles:

// • **n = 3** — produces $3! = 6$ permutations, displayed in $2$ columns per first-item group.

// • **n = 4** — produces $4! = 24$ permutations, displayed in $3$ columns per first-item group.

// • **n = 5** — produces $5! = 120$ permutations, mini balls shrink to fit a wider grid.

// Changing $n$ resets the build state: the source row repopulates, the build area gets a new set of slot outlines, the completed section empties, and the formula in the top-right header updates to $P(n) = n!$ for the new value.

// Counts grow fast — by $n = 5$ you&apos;re already at $120$ permutations, and the formula $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$ reads out in the right-panel header. For $n = 7$ you would be looking at $5{,}040$ arrangements; for $n = 10$, over three million.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj4: {
//       title: `Grouping by First Item`,
//       content: `The most important pedagogical feature: the completed section organizes permutations into **first-item groups**. Every permutation that starts with the same item appears in the same row.

// There are exactly $n$ groups (one per item) and each group holds exactly $(n - 1)!$ permutations. So the total count is:

// $$n \\times (n - 1)! = n!$$

// This is the visual proof of the factorial formula. Pick any item to put in position $\\#1$: that&apos;s $n$ choices. For each choice, the remaining $n - 1$ items fill the other $n - 1$ slots in any order: $(n - 1)!$ ways. Multiply.

// Each group row in the completed area has:

// • A **tinted background** in a faint version of the group&apos;s color.

// • A **colored accent stripe** on the left edge.

// • A **left-side avatar** showing the first item: a colored circle with the item&apos;s number in balls mode, or the letter in letters mode.

// • Mini permutation cards, each one a full arrangement starting with that item.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj5: {
//       title: `Transport Controls`,
//       content: `The control bar offers four transport buttons plus a speed slider:

// • **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single permutation or pausing mid-build.

// • **Step ▶** (Step forward) — advances one ball into one slot. Stop after each step to read the partial arrangement.

// • **▶ Play / ⏸ Pause** — runs the animation continuously until all $n!$ permutations are built, then auto-pauses.

// • **↺ Reset** — clears the completed section and starts over from the first permutation.

// The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source to slot and follow the dotted guide line in detail.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj6: {
//       title: `Mode Switch`,
//       content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

// • **Balls mode** (default) — items appear as colored circles. The first-item avatar in each completed group is a circle with the item&apos;s number. Best for tracking position and group membership visually.

// • **Letters mode** — items appear with letter labels (A, B, C, …). The first-item avatar in each completed group is just the letter, colored to match. Best for reading off the sequence in each permutation and matching it to algebraic notation like $(A, B, C)$.

// The encoding is consistent across the source row, the build slots, the flying ball, every mini permutation card in the completed grid, and the right-panel narration. Switching modes mid-animation is safe — the build state preserves; only the rendering changes.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj7: {
//       title: `Right Panel and Progress`,
//       content: `The right panel narrates the build as it unfolds. Initially empty, it adds a **StepRow** for each first-item group as soon as a permutation in that group either starts building or completes.

// Each StepRow shows:

// • The **first item** as a chip plus its name — for instance, *First item: A* or the equivalent in balls mode.

// • A **progress counter** like $k / (n - 1)!$ that tracks how many permutations in this group have completed.

// • A short **narration** explaining the structure: *Position 1 is locked to A. The remaining $n - 1$ positions are filled with B or C or … in $(n - 1)! = M$ ways.*

// • A **status** marker (current, done) that updates as the group progresses.

// When all groups complete, every StepRow shows *$(n-1)! / (n-1)! \\checkmark$* and the overall counter in the header reaches $n! / n!$.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj8: {
//       title: `What Is a Full Permutation`,
//       content: `A **full permutation** of $n$ distinct items is an arrangement of all $n$ items in a line, where order matters and no item repeats. The number of such arrangements is the factorial of $n$:

// $$P(n) = n! = n \\times (n - 1) \\times (n - 2) \\times \\cdots \\times 2 \\times 1$$

// Examples of full permutations:

// • Arranging $5$ books on a shelf: $5! = 120$ orderings.

// • Lining up $4$ runners for a relay: $4! = 24$ lineups.

// • Listing the order of finish in a race with $6$ distinct competitors: $6! = 720$ rankings.

// The full permutation is the simplest of the five permutation scenarios — no repeated items, no partial selection, no circular structure. Every item used, every position distinct, every order counted separately.

// For deeper coverage of full permutations and the other four scenarios, see the **full permutation** section on the permutations theory page.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj9: {
//       title: `Deriving n! Step by Step`,
//       content: `The factorial formula follows from the multiplication principle of counting. Build the permutation one position at a time:

// • **Position $\\#1$**: any of the $n$ items can go here. $n$ choices.

// • **Position $\\#2$**: any of the remaining $n - 1$ items. $n - 1$ choices.

// • **Position $\\#3$**: any of the remaining $n - 2$ items. $n - 2$ choices.

// • $\\dots$

// • **Position $\\#n$**: only $1$ item left. $1$ choice.

// Multiply the choices at each step:

// $$n \\times (n - 1) \\times (n - 2) \\times \\cdots \\times 1 = n!$$

// The tool visualizes the equivalent split: fix the first item ($n$ ways), then permute the rest ($(n - 1)!$ ways), giving $n \\times (n - 1)! = n!$. Every row in the completed section is one of those $n$ first-item families.

// Factorials grow extremely fast: $5! = 120$, $10! \\approx 3.6$ million, $20! \\approx 2.4 \\times 10^{18}$. This is why full permutations of even moderately large sets are uncountable in practice — you need the formula, not enumeration.`,
//       before: ``,
//       after: ``,
//       link: '',
//     },

//     obj10: {
//       title: `Related Concepts`,
//       content: `**Partial permutation without repetition** — select and arrange only $r$ of the $n$ items. Formula $\\frac{n!}{(n - r)!}$. Reduces to $n!$ when $r = n$.

// **Permutation with identical items** — when some items in the collection are indistinguishable. Divides $n!$ by the factorial of each repeat group&apos;s size.

// **Permutation with repetition** — items can be reused. Formula $n^r$ for $r$ positions filled from $n$ items.

// **Circular permutation** — arrange $n$ items around a circle where rotations are identical. Formula $(n - 1)!$.

// **Combinations** — selection where order doesn&apos;t matter. The companion concept; full permutations divide $n!$ by $1$ to keep all orderings, combinations divide further to remove ordering.

// **Multiplication principle** — the foundational counting rule behind $n!$. If choice $A$ has $a$ options and choice $B$ has $b$ options, the combined choice has $a \\times b$ options.

// **Combinatorics calculator** — to compute $n!$ for arbitrary $n$, see the **full permutation calculator**.`,
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
//       question: "What is a full permutation?",
//       answer: "A full permutation of n distinct items is an arrangement of all n items in a line where order matters and no item repeats. The number of full permutations of n items is n factorial, the product of all positive integers from 1 to n."
//     },
//     obj2: {
//       question: "What is the formula for the number of permutations of n items?",
//       answer: "The number of full permutations of n distinct items is P(n) equals n factorial, which equals n times (n minus 1) times (n minus 2) and so on down to 1. For example, the number of permutations of 5 items is 5! = 5 times 4 times 3 times 2 times 1 = 120."
//     },
//     obj3: {
//       question: "How is n factorial calculated step by step?",
//       answer: "Apply the multiplication principle of counting. Position 1 can hold any of the n items. Position 2 can hold any of the remaining n minus 1 items. Position 3 can hold any of the remaining n minus 2 items. And so on. Multiply the choices at each step to get n times (n minus 1) times all the way down to 1, which is n factorial."
//     },
//     obj4: {
//       question: "Why are permutations grouped by their first item?",
//       answer: "Because every permutation begins with one of n distinct items, and for each first-item choice the remaining n minus 1 items can be arranged in (n minus 1) factorial ways. The total count factors as n times (n minus 1) factorial, which equals n factorial. Grouping by first item makes this factoring visible: there are n rows, each containing exactly (n minus 1) factorial permutations."
//     },
//     obj5: {
//       question: "How fast does n factorial grow?",
//       answer: "Extremely fast. 3! is 6, 5! is 120, 7! is 5040, 10! is over three and a half million, and 20! is about 2.4 quintillion. This is why full permutations of more than a few items cannot be listed by hand or even enumerated by computer for moderately large n. The formula is essential."
//     }
//   }


//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Full Permutation Calculator",
//       "description": "Interactive tool that builds every full permutation of n distinct items step by step, organized by first-item group to visualize how n! factors as n times (n-1)!.",
//       "url": "https://www.learnmathclass.com/combinatorics/visual-tools/full-permutation",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Build every n! full permutation step by step with an animated build area",
//         "Completed permutations grouped by first item to visualize the n times (n-1)! factoring",
//         "Adjustable n with the formula P(n) = n! updating live in the header",
//         "Four transport buttons for step back, step forward, play, and reset, plus a speed slider",
//         "Mode switch between colored balls and letter labels for items",
//         "Right-side narration panel that adds a step row for each first-item group as it activates",
//         "Source row dimming that shows which items remain available during each permutation build"
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
//       "keywords": "permutation, permutation calculator, full permutation, full permutation calculator, n factorial calculator, n! formula, factorial permutations, permutation formula n!, arranging n objects, permutation step by step, number of permutations, P(n) calculator, permutation visualizer, how to calculate permutations, ordering n distinct items"
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
//           "name": "Full Permutation Calculator",
//           "item": "https://www.learnmathclass.com/combinatorics/visual-tools/full-permutation"
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
//         title: "Full Permutation Calculator: n! Formula | Learn Math Class",
//         description: "Calculate full permutations with the n! formula. Watch every arrangement of n distinct items build step by step, organized by which item starts the sequence.",
//         keywords: keyWords.join(", "),
//         url: "/combinatorics/visual-tools/full-permutation",
//         name: "Full Permutation Calculator",
//         hubDescription: "Build every n! permutation of n distinct items one ball at a time. Each arrangement starts with a different first item, and rows group all permutations sharing that starter — so you literally see why n! splits as n × (n−1)!",
//         category: "Permutations",
//         subCategory: ""
//       },

//     }
//   }
// }

// export default function FullPermutationCalculator({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
//       <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Full Permutation</h1>
//       <br/>
//       <FullPermutation/>
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
import FullPermutation from '../../../../app/components/combinatorics/new-visualizers/scenes/FullPermutation'


export async function getStaticProps(){

  const keyWords = [
    'permutation',
    'permutation visualizer',
    'full permutation',
    'full permutation visualizer',
    'n factorial visualizer',
    'n! formula',
    'factorial permutations',
    'permutation formula n!',
    'arranging n objects',
    'permutation step by step',
    'number of permutations',
    'P(n) formula',
    'visualize permutations',
    'how to calculate permutations',
    'ordering n distinct items'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Full permutation** — an arrangement of all $n$ distinct items in a line, where order matters and every item is used exactly once. The count is $n!$.

**Factorial $n!$** — the product $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1$. The number of full permutations of $n$ distinct items.

**Position** — a slot in the arrangement, numbered $\\#1$ through $\\#n$ from left to right in the build area.

**Step / first-item group** — the family of permutations that share the same item in position $\\#1$. With $n$ items there are $n$ such groups, each containing $(n - 1)!$ permutations.

**Permutation prefix** — the part of the arrangement already filled at any moment during the build. A landed ball is part of the prefix; the source row dims items already used.

**$P(n)$ notation** — alternative writing for the count of full permutations: $P(n) = n!$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $n = 3$ items and is ready to build. The scene is split into three areas:

• A **source row** at the top showing the available items.

• A **build area** in the middle with $n$ empty slots labeled $\\#1$ through $\\#n$.

• A **completed** section below, where every finished permutation is recorded and organized by which item went into position $\\#1$.

To run the visualization:

• Press **▶ Play** to auto-build all $n!$ permutations.

• Press **Step ▶** to advance one ball at a time.

• Press **◀** to step backward through the animation.

• Adjust the **Speed** slider to control how fast play advances.

The badge in the top right shows the formula $P(n) = n!$ together with the total, and a live status line such as "Step X (item name): k / (n-1)!" while building, or "Complete · n! / n!" when done.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Build Area`,
      content: `The build area is where one permutation at a time is constructed. Five things to watch:

• **Empty slot outlines** with dashed borders, labeled $\\#1, \\#2, \\dots, \\#n$ from left to right. The label tells you the position number.

• When a ball is in flight from the source row to a slot, a **dotted guide line** in that ball's color traces the trajectory.

• Each ball lands in its assigned slot and stays put until the permutation completes.

• In the source row above, every item already placed in the current permutation (plus the one currently in flight) is **dimmed** to indicate it's out of play.

• When all $n$ slots are filled, a **flash ring** briefly pulses around the build area. The completed permutation is then copied to the appropriate row in the completed section below, and the build area resets for the next permutation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Adjusting n`,
      content: `The **n** stepper in the control bar changes the number of items. The visual handles:

• **n = 3** — produces $3! = 6$ permutations, displayed in $2$ columns per first-item group.

• **n = 4** — produces $4! = 24$ permutations, displayed in $3$ columns per first-item group.

• **n = 5** — produces $5! = 120$ permutations, mini balls shrink to fit a wider grid.

Changing $n$ resets the build state: the source row repopulates, the build area gets a new set of slot outlines, the completed section empties, and the formula in the top-right header updates to $P(n) = n!$ for the new value.

Counts grow fast — by $n = 5$ you're already at $120$ permutations, and the formula $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$ reads out in the right-panel header. For $n = 7$ you would be looking at $5{,}040$ arrangements; for $n = 10$, over three million.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Grouping by First Item`,
      content: `The most important pedagogical feature: the completed section organizes permutations into **first-item groups**. Every permutation that starts with the same item appears in the same row.

There are exactly $n$ groups (one per item) and each group holds exactly $(n - 1)!$ permutations. So the total count is:

$$n \\times (n - 1)! = n!$$

This is the visual proof of the factorial formula. Pick any item to put in position $\\#1$: that's $n$ choices. For each choice, the remaining $n - 1$ items fill the other $n - 1$ slots in any order: $(n - 1)!$ ways. Multiply.

Each group row in the completed area has:

• A **tinted background** in a faint version of the group's color.

• A **colored accent stripe** on the left edge.

• A **left-side avatar** showing the first item: a colored circle with the item's number in balls mode, or the letter in letters mode.

• Mini permutation cards, each one a full arrangement starting with that item.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Transport Controls`,
      content: `The control bar offers four transport buttons plus a speed slider:

• **◀** (Step back) — walks the animation one step backward. Useful for re-examining a single permutation or pausing mid-build.

• **Step ▶** (Step forward) — advances one ball into one slot. Stop after each step to read the partial arrangement.

• **▶ Play / ⏸ Pause** — runs the animation continuously until all $n!$ permutations are built, then auto-pauses.

• **↺ Reset** — clears the completed section and starts over from the first permutation.

The **Speed** slider controls how fast play advances. At higher speeds the fly and land timings shrink proportionally; at slower speeds you can clearly see each ball travel from source to slot and follow the dotted guide line in detail.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode Switch`,
      content: `The **Mode** switch at the start of the control bar toggles how each item is rendered:

• **Balls mode** (default) — items appear as colored circles. The first-item avatar in each completed group is a circle with the item's number. Best for tracking position and group membership visually.

• **Letters mode** — items appear with letter labels (A, B, C, …). The first-item avatar in each completed group is just the letter, colored to match. Best for reading off the sequence in each permutation and matching it to algebraic notation like $(A, B, C)$.

The encoding is consistent across the source row, the build slots, the flying ball, every mini permutation card in the completed grid, and the right-panel narration. Switching modes mid-animation is safe — the build state preserves; only the rendering changes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Right Panel and Progress`,
      content: `The right panel narrates the build as it unfolds. Initially empty, it adds a **StepRow** for each first-item group as soon as a permutation in that group either starts building or completes.

Each StepRow shows:

• The **first item** as a chip plus its name — for instance, *First item: A* or the equivalent in balls mode.

• A **progress counter** like $k / (n - 1)!$ that tracks how many permutations in this group have completed.

• A short **narration** explaining the structure: *Position 1 is locked to A. The remaining $n - 1$ positions are filled with B or C or … in $(n - 1)! = M$ ways.*

• A **status** marker (current, done) that updates as the group progresses.

When all groups complete, every StepRow shows *$(n-1)! / (n-1)! \\checkmark$* and the overall counter in the header reaches $n! / n!$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is a Full Permutation`,
      content: `A **full permutation** of $n$ distinct items is an arrangement of all $n$ items in a line, where order matters and no item repeats. The number of such arrangements is the factorial of $n$:

$$P(n) = n! = n \\times (n - 1) \\times (n - 2) \\times \\cdots \\times 2 \\times 1$$

Examples of full permutations:

• Arranging $5$ books on a shelf: $5! = 120$ orderings.

• Lining up $4$ runners for a relay: $4! = 24$ lineups.

• Listing the order of finish in a race with $6$ distinct competitors: $6! = 720$ rankings.

The full permutation is the simplest of the five permutation scenarios — no repeated items, no partial selection, no circular structure. Every item used, every position distinct, every order counted separately.

For deeper coverage of full permutations and the other four scenarios, see the **full permutation** section on the permutations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Deriving n! Step by Step`,
      content: `The factorial formula follows from the multiplication principle of counting. Build the permutation one position at a time:

• **Position $\\#1$**: any of the $n$ items can go here. $n$ choices.

• **Position $\\#2$**: any of the remaining $n - 1$ items. $n - 1$ choices.

• **Position $\\#3$**: any of the remaining $n - 2$ items. $n - 2$ choices.

• $\\dots$

• **Position $\\#n$**: only $1$ item left. $1$ choice.

Multiply the choices at each step:

$$n \\times (n - 1) \\times (n - 2) \\times \\cdots \\times 1 = n!$$

The tool visualizes the equivalent split: fix the first item ($n$ ways), then permute the rest ($(n - 1)!$ ways), giving $n \\times (n - 1)! = n!$. Every row in the completed section is one of those $n$ first-item families.

Factorials grow extremely fast: $5! = 120$, $10! \\approx 3.6$ million, $20! \\approx 2.4 \\times 10^{18}$. This is why full permutations of even moderately large sets are uncountable in practice — you need the formula, not enumeration.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Partial permutation without repetition** — select and arrange only $r$ of the $n$ items. Formula $\\frac{n!}{(n - r)!}$. Reduces to $n!$ when $r = n$.

**Permutation with identical items** — when some items in the collection are indistinguishable. Divides $n!$ by the factorial of each repeat group's size.

**Permutation with repetition** — items can be reused. Formula $n^r$ for $r$ positions filled from $n$ items.

**Circular permutation** — arrange $n$ items around a circle where rotations are identical. Formula $(n - 1)!$.

**Combinations** — selection where order doesn't matter. The companion concept; full permutations divide $n!$ by $1$ to keep all orderings, combinations divide further to remove ordering.

**Multiplication principle** — the foundational counting rule behind $n!$. If choice $A$ has $a$ options and choice $B$ has $b$ options, the combined choice has $a \\times b$ options.

**Combinatorics calculator** — to compute $n!$ for arbitrary $n$, see the **full permutation calculator**.`,
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
      question: "What is a full permutation?",
      answer: "A full permutation of n distinct items is an arrangement of all n items in a line where order matters and no item repeats. The number of full permutations of n items is n factorial, the product of all positive integers from 1 to n."
    },
    obj2: {
      question: "What is the formula for the number of permutations of n items?",
      answer: "The number of full permutations of n distinct items is P(n) equals n factorial, which equals n times (n minus 1) times (n minus 2) and so on down to 1. For example, the number of permutations of 5 items is 5! = 5 times 4 times 3 times 2 times 1 = 120."
    },
    obj3: {
      question: "How is n factorial calculated step by step?",
      answer: "Apply the multiplication principle of counting. Position 1 can hold any of the n items. Position 2 can hold any of the remaining n minus 1 items. Position 3 can hold any of the remaining n minus 2 items. And so on. Multiply the choices at each step to get n times (n minus 1) times all the way down to 1, which is n factorial."
    },
    obj4: {
      question: "Why are permutations grouped by their first item?",
      answer: "Because every permutation begins with one of n distinct items, and for each first-item choice the remaining n minus 1 items can be arranged in (n minus 1) factorial ways. The total count factors as n times (n minus 1) factorial, which equals n factorial. Grouping by first item makes this factoring visible: there are n rows, each containing exactly (n minus 1) factorial permutations."
    },
    obj5: {
      question: "How fast does n factorial grow?",
      answer: "Extremely fast. 3! is 6, 5! is 120, 7! is 5040, 10! is over three and a half million, and 20! is about 2.4 quintillion. This is why full permutations of more than a few items cannot be listed by hand or even enumerated by computer for moderately large n. The formula is essential."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Full Permutation Visualizer",
      "description": "Visualize every full permutation of n distinct items step by step, organized by first-item group to illustrate how n! factors as n times (n-1)!.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/full-permutation",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Build every n! full permutation step by step with an animated build area",
        "Completed permutations grouped by first item to visualize the n times (n-1)! factoring",
        "Adjustable n with the formula P(n) = n! updating live in the header",
        "Four transport buttons for step back, step forward, play, and reset, plus a speed slider",
        "Mode switch between colored balls and letter labels for items",
        "Right-side narration panel that adds a step row for each first-item group as it activates",
        "Source row dimming that shows which items remain available during each permutation build"
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
      "keywords": "permutation, permutation visualizer, full permutation, full permutation visualizer, n factorial visualizer, n! formula, factorial permutations, permutation formula n!, arranging n objects, permutation step by step, number of permutations, P(n) formula, visualize permutations, how to calculate permutations, ordering n distinct items"
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
          "name": "Full Permutation Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/full-permutation"
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
        title: "Full Permutation Visualizer: n! Formula | Learn Math Class",
        description: "Visualize full permutations with the n! formula. Watch every arrangement of n distinct items build step by step, organized by which item starts the sequence.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/full-permutation",
        name: "Full Permutation Visualizer",
        hubDescription: "Build every n! permutation of n distinct items one ball at a time. Each arrangement starts with a different first item, and rows group all permutations sharing that starter — so you literally see why n! splits as n × (n−1)!",
        category: "Permutations",
        subCategory: ""
      },

    }
  }
}

export default function FullPermutationVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Full Permutation</h1>
      <br/>
      <FullPermutation/>
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