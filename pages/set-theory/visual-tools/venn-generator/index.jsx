// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import VennGenerator from '../../../app/components/diagrams/venn-generator/VennGenerator'
// // import React from 'react'
// // import '../../pages.css'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // // Surfaced on the /set-theory hub via buildSectionData extraction.
// // const hubMeta = {
// //   name: 'Venn Diagram Generator',
// //   hubDescription: 'An interactive generator for two-set Venn diagrams: label the sets, pick colors, and shade the region of the operation you are studying — a quick way to check answers or produce a clean diagram for notes and homework.',
// // }

// // const StandardContainer = ({ children }) => (
// //   <div style={{
// //     width: '100%',
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     padding: '20px',
// //     boxSizing: 'border-box',
// //     transform: 'scale(0.9)', 
// //     transformOrigin: 'top center',
// //     height: '110vh',
// //     fontSize:'18px'
// //   }}>
// //     {children}
// //   </div>
// // )

// // export default function VennDiagramGeneratorPage() {
// //   return (
// //    <>
// //    {/* <GenericNavbar/>
// //    */}
  
// //    <br/>
// //    <br/>
// //    <OperaSidebar
// //         side='right'
// //         // topOffset='55px'
// //         sidebarWidth='35px'
// //         panelWidth='200px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       />
// //    <Breadcrumb/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Venn Diagrams Generator</h1>
// //    <br/>
// //    {/* <div style={{
// //         transform: 'scale(0.8)', 
// //         transformOrigin: 'top center',
// //         height: '110vh', // Increase the height to accommodate scaled content
// //       }}> */}
// //       {/* <StandardContainer> */}
// //       {/* <div style={{width:'90%', margin:'auto'}}> */}
// //    <VennGenerator  
// //    showIntro={false}
// //    />
// //    {/* </div> */}
// //    {/* </StandardContainer> */}
   
// //    {/* </div> */}
// //    {/* <ScrollUpButton/> */}
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //   <br/>
// //    </>
// //   )
// // }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import VennGenerator from '../../../app/components/diagrams/venn-generator/VennGenerator'
// import Explanations from '../../../app/components/Explanations'
// import React from 'react'
// import '../../pages.css'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // Surfaced on the /set-theory hub via buildSectionData extraction.
// const hubMeta = {
//   name: 'Venn Diagram Generator',
//   hubDescription: 'An interactive generator for two-set Venn diagrams: label the sets, pick colors, and shade the region of the operation you are studying — a quick way to check answers or produce a clean diagram for notes and homework.',
// }

// const instructions = `**How to use it**

// 1. Pick how many sets you want with the 2/3/4/5 buttons.
// 2. Type an expression in the box, or build it with the symbol buttons: A B ∩ ∪ \\ ⊕ ᶜ ( ) ∅ U. Clear empties the box.
// 3. The diagram shades every region that satisfies the expression. The counter next to "Expression" shows how many regions out of the total are shaded.
// 4. The Regions strip below lists all regions. Dots show which sets a region is inside; a filled cell means it is shaded.
// 5. Put a second expression in the Compare box. You get ≡ if it shades the same regions, ≢ if it does not.
// 6. Library tab: click a preset expression to load it. With 2 or 3 sets you can also switch the layout to Overlapping, Disjoint, A ⊆ B, or A = B.
// 7. Elements tab: type one set per line, like A = 1, 2, 3. Use U for elements in no set. Each element drops into the region its membership picks. Toggle Show elements and Show counts.
// 8. Style tab: highlight color and opacity, outline color and width, circle size, and switches for the universe box, region labels, and the caption.
// 9. Drag any curve in the diagram to move it. At 4 and 5 sets the layout is fixed — dragging destroys regions.
// 10. Download SVG or Download PNG to save the diagram.

// **Writing expressions**

// - ∩ also accepts &. ∪ also accepts | or +. Difference accepts \\ or -.
// - Complement: Aᶜ, A', A*, or ¬A.
// - ⊕ is symmetric difference.
// - Parentheses work as usual: (A ∪ B)ᶜ ∩ C.
// - Only the set letters currently on the diagram are valid.`

// const StandardContainer = ({ children }) => (
//   <div style={{
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//     boxSizing: 'border-box',
//     transform: 'scale(0.9)', 
//     transformOrigin: 'top center',
//     height: '110vh',
//     fontSize:'18px'
//   }}>
//     {children}
//   </div>
// )

// export default function VennDiagramGeneratorPage() {
//   return (
//    <>
//    {/* <GenericNavbar/>
//    */}
  
//    <br/>
//    <br/>
//    <OperaSidebar
//         side='right'
//         // topOffset='55px'
//         sidebarWidth='35px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//    <Breadcrumb/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Venn Diagrams Generator</h1>
//    <br/>
//    {/* <div style={{
//         transform: 'scale(0.8)', 
//         transformOrigin: 'top center',
//         height: '110vh', // Increase the height to accommodate scaled content
//       }}> */}
//       {/* <StandardContainer> */}
//       {/* <div style={{width:'90%', margin:'auto'}}> */}
//    <div style={{maxWidth:'1200px', margin:'0 auto 20px auto'}}>
//      <Explanations content={instructions} theme='info'/>
//    </div>
//    <VennGenerator showIntro={false}/>
//    {/* </div> */}
//    {/* </StandardContainer> */}
   
//    {/* </div> */}
//    {/* <ScrollUpButton/> */}
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//    </>
//   )
// }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import VennGenerator from '../../../../app/components/diagrams/venn-generator/VennGenerator'
// import ExplanationDetails from '../../../../app/components/ExplanationDetails'
// import React from 'react'
// import '../../../pages.css'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // Surfaced on the /set-theory hub via buildSectionData extraction.


// const instructions = [
//   'Pick how many sets you want with the 2 / 3 / 4 / 5 buttons.',
//   'Type an expression in the box, or build it with the symbol buttons: A B \u2229 \u222a \\ \u2295 \u1d9c ( ) \u2205 U. Clear empties the box.',
//   'The diagram shades every region that satisfies the expression. The counter beside Expression shows how many regions out of the total are shaded.',
//   'The Regions strip lists every region. Dots show which sets a region is inside; a filled cell means it is shaded.',
//   'Put a second expression in the Compare box: \u2261 means it shades the same regions, \u2262 means it does not.',
//   'Library tab: click a preset expression to load it. With 2 or 3 sets you can also switch the layout to Overlapping, Disjoint, A \u2286 B, or A = B.',
//   'Elements tab: one set per line, like A = 1, 2, 3. Use U for elements in no set. Each element drops into the region its membership picks. Toggle Show elements and Show counts.',
//   'Style tab: highlight color and opacity, outline color and width, circle size, and switches for the universe box, region labels, and the caption.',
//   'Drag any curve to move it. At 4 and 5 sets the layout is fixed \u2014 dragging destroys regions.',
//   'Download SVG or Download PNG to save the diagram.',
//   'Typing shortcuts: & for \u2229, | or + for \u222a, - for \\. Complement is A\u1d9c, A\u2032, A* or \u00acA. \u2295 is symmetric difference. Only the set letters currently on the diagram are valid.'
// ]



// export default function VennDiagramGeneratorPage() {
//   return (
//    <>
//    {/* <GenericNavbar/>
//    */}
  
//    <br/>
//    <br/>
//    <OperaSidebar
//         side='right'
//         // topOffset='55px'
//         sidebarWidth='35px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />
//    <Breadcrumb/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Venn Diagrams Generator</h1>
//    <br/>
//    {/* <div style={{
//         transform: 'scale(0.8)', 
//         transformOrigin: 'top center',
//         height: '110vh', // Increase the height to accommodate scaled content
//       }}> */}
//       {/* <StandardContainer> */}
//       {/* <div style={{width:'90%', margin:'auto'}}> */}
//       <div style={{width:'80%', margin:'auto'}}>
//    <ExplanationDetails
//      title='How to use'
//      instructions={instructions}
//      accent='#2f4fd8'
//    />
//    </div>
//    <br/>
//    <br/>
//    <VennGenerator showIntro={false}/>
//    {/* </div> */}
//    {/* </StandardContainer> */}
   
//    {/* </div> */}
//    {/* <ScrollUpButton/> */}
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//   <br/>
//    </>
//   )
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import VennGenerator from '../../../../app/components/diagrams/venn-generator/VennGenerator'
import vennGeneratorDiagrams from '../../../../app/components/diagrams/venn-generator/vennGeneratorDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import ExplanationDetails from '../../../../app/components/ExplanationDetails'
import React from 'react'
import '../../../pages.css'
import Head from 'next/head'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import Sections from '../../../../app/components/page-components/section/Sections'
import SectionTableOfContents from '../../../../app/components/page-components/section/SectionTableofContents'


// Surfaced on the /set-theory hub via buildSectionData extraction.


const instructions = [
  'Pick how many sets you want with the 2 / 3 / 4 / 5 buttons.',
  'Type an expression in the box, or build it with the symbol buttons: A B \u2229 \u222a \\ \u2295 \u1d9c ( ) \u2205 U. Clear empties the box.',
  'The diagram shades every region that satisfies the expression. The counter beside Expression shows how many regions out of the total are shaded.',
  'The Regions strip lists every region. Dots show which sets a region is inside; a filled cell means it is shaded.',
  'Put a second expression in the Compare box: \u2261 means it shades the same regions, \u2262 means it does not.',
  'Library tab: click a preset expression to load it. With 2 or 3 sets you can also switch the layout to Overlapping, Disjoint, A \u2286 B, or A = B.',
  'Elements tab: one set per line, like A = 1, 2, 3. Use U for elements in no set. Each element drops into the region its membership picks. Toggle Show elements and Show counts.',
  'Style tab: highlight color and opacity, outline color and width, circle size, and switches for the universe box, region labels, and the caption.',
  'Drag any curve to move it. At 4 and 5 sets the layout is fixed \u2014 dragging destroys regions.',
  'Download SVG or Download PNG to save the diagram.',
  'Typing shortcuts: & for \u2229, | or + for \u222a, - for \\. Complement is A\u1d9c, A\u2032, A* or \u00acA. \u2295 is symmetric difference. Only the set letters currently on the diagram are valid.'
]


export async function getStaticProps() {

  /* ---- frozen-state demonstration units (Line 1) ----
     Almost nothing here is a port. The component already exports its expression
     parser and evaluator, its region enumerator, its layout maker and its path
     builders, so vennGeneratorDiagrams.js calls them directly - every shaded
     region below is decided by the same code that decides it on screen. */
  const unit = (svg, caption, text) => demoUnitFrame({ svg, caption, text })
  const V = vennGeneratorDiagrams

  const stateUnits = {
    operations: unit([V.intersection, V.union, V.symmetricDifference, V.complement],
      'Two sets: A ∩ B, A ∪ B, A ⊕ B, Aᶜ',
      'The same four regions throughout; only which ones are shaded changes. Intersection shades 1 of 4, ' +
      'union 3, symmetric difference 2, and the complement of A a different 2 - it includes the area ' +
      'outside everything, which union leaves out.'),
    layouts: unit([V.disjoint, V.subset],
      'A ∩ B under the Disjoint and A ⊆ B layouts',
      'Under Disjoint the expression still selects the A ∩ B row, but that row has no area, so nothing ' +
      'shades. Under A ⊆ B it is the "A only" region that has no area. The region table is always 2^n ' +
      'rows; the drawing shows only the rows a layout admits.'),
    threeSets: unit([V.threeSet, V.deMorgan],
      'Three sets: A ∩ B ∩ C, then (A ∪ B)ᶜ',
      'Eight regions. The triple intersection is one of them; the complement of A ∪ B is two - C alone ' +
      'and the area outside everything. Put A ᶜ ∩ B ᶜ in the Compare box and the tool reports them ' +
      'equivalent across all eight.'),
    higherOrders: unit([V.fourSet, V.fiveSet],
      'Four sets (A ∩ B) and five sets (A ∩ B ∩ C)',
      'Circles cannot produce all 16 regions, so these layouts are fixed ellipse arrangements and ' +
      'dragging is disabled. Fixing k of n sets leaves 2^(n-k) regions shaded: 4 of 16 here, and 4 of 32.'),
  }

  // this page previously generated its sections from Object.keys(sectionsContent)
  // with numeric ids; replaced with an explicit slug list
  const sectionOrder = [
    ['obj1', 'getting-started'],
    ['obj2', 'writing-set-expressions'],
    ['obj12', 'the-four-operations', 'operations'],
    ['obj3', 'the-regions-strip'],
    ['obj13', 'layouts-and-regions', 'layouts'],
    ['obj4', 'comparing-two-expressions'],
    ['obj14', 'three-sets-and-de-morgan', 'threeSets'],
    ['obj15', 'four-and-five-sets', 'higherOrders'],
    ['obj5', 'presets-and-layouts'],
    ['obj6', 'placing-elements-in-regions'],
    ['obj7', 'styling-and-exporting'],
    ['obj8', 'what-a-venn-diagram-shows'],
    ['obj9', 'the-core-set-operations'],
    ['obj10', 'checking-identities-visually'],
    ['obj11', 'related-concepts-and-tools'],
  ]


  const keyWords = [
    'venn diagram generator',
    'venn diagram maker',
    'set expression visualizer',
    'venn diagram 4 sets',
    'venn diagram 5 sets',
    'set operations diagram',
    'intersection union diagram',
    'set complement visualizer',
    'symmetric difference venn diagram',
    'de morgan laws visual',
    'venn diagram with elements',
    'draw venn diagram online',
    'venn diagram svg download',
    'set theory tool',
    'free venn diagram generator'
  ]

  const sectionsContent = {

    obj1: {
      title: `Getting Started`,
      content: `Start by choosing how many sets the diagram holds. The **2 / 3 / 4 / 5** buttons rebuild the picture and change the number of regions available.

Then give the diagram something to shade:

• Type an expression directly into the Expression box.
• Or click the symbol buttons to assemble it: set letters, intersection, union, difference, symmetric difference, complement, parentheses, empty set, and the universe.
• Clear empties the box and removes all shading.

Every region satisfying the expression fills with the highlight color. The counter next to the Expression box reports how many regions out of the total are currently shaded, so a two-set union should read 3 of 4, and a three-set intersection should read 1 of 8.

Only set letters currently on the diagram are valid. Asking for C while in 2-set mode produces no result until you switch to 3 sets.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Writing Set Expressions`,
      content: `The expression box accepts keyboard shortcuts, which is faster than clicking symbols once you know them:

• **&** for intersection
• **|** or **+** for union
• **-** for difference
• Complement written as A with a superscript c, A with a prime mark, A* or a leading negation sign
• Symmetric difference through its own symbol button

Parentheses control grouping the way they do in arithmetic. $(A \\cup B) \\cap C$ and $A \\cup (B \\cap C)$ shade different regions, and typing both in turn is the quickest way to see why grouping matters.

Nesting is allowed, so $((A \\cap B) \\setminus C)^c$ is a valid single expression. Build complicated expressions in stages: type an inner part, check the shading, then wrap it. If a shape looks wrong, the mistake is almost always a missing parenthesis rather than a wrong operator.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Regions Strip`,
      content: `The Regions strip below the diagram is the exact answer the diagram is drawing, written out as a list.

Each entry is one region. The dots show which sets that region sits inside, and a filled cell means the region is shaded by the current expression. With three sets there are 8 regions; with four there are 16; with five there are 32.

Use the strip when the picture gets crowded. Curved slivers at 4 and 5 sets are hard to see, but the strip never hides a region. If the shading counter says 6 of 16 and you can only spot four shaded areas, the strip tells you which two you missed.

The strip is also how you check an expression is doing what you intended. Read off the membership pattern of each shaded region and compare it to the definition of the operation you wrote.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Comparing Two Expressions`,
      content: `The Compare box takes a second expression and tests it against the first.

An equivalence sign means both expressions shade exactly the same regions. A struck-through equivalence sign means they differ somewhere.

This turns the generator into a checker for set identities. Enter $(A \\cup B)^c$ in the Expression box and $A^c \\cap B^c$ in the Compare box, and the equivalence sign confirms **De Morgan's law**. Try $(A \\cap B)^c$ against $A^c \\cap B^c$ and the sign flips, because that pairing is false.

Comparison is per-region, not per-symbol, so two expressions written completely differently register as equivalent whenever their shaded regions agree. That is the right test: two set expressions are equal exactly when they select the same regions of the universe.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Presets and Layouts`,
      content: `The Library tab holds ready-made expressions. Clicking one loads it into the Expression box, so you can see the standard operations without typing anything.

With 2 or 3 sets the Library tab also changes the layout:

• **Overlapping** is the familiar arrangement where every combination of memberships exists.
• **Disjoint** separates the circles so no element belongs to two sets.
• **A is a subset of B** nests one circle inside another.
• **A = B** puts the circles on top of each other.

Layouts matter because they encode assumptions. On a disjoint layout, $A \\cap B$ is empty and the shading confirms it. On a subset layout, $A \\setminus B$ vanishes. Switching layouts while holding an expression fixed shows which results depend on the sets actually overlapping.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Placing Elements in Regions`,
      content: `The Elements tab moves the diagram from abstract regions to concrete members.

Write one set per line, in the form A = 1, 2, 3. An element listed on several lines belongs to several sets, and it lands in whichever region matches its full membership. Elements listed under **U** belong to no set and sit in the outer universe box.

Two switches control what appears:

• **Show elements** prints the member names inside their regions.
• **Show counts** prints how many elements each region holds.

This is the fastest way to check a cardinality calculation by hand. Type the sets, turn on counts, and read off $|A \\cup B|$ directly, then verify it against $|A| + |B| - |A \\cap B|$. It also makes membership concrete for anyone who reads the circles as pictures rather than as sets of elements.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Styling and Exporting`,
      content: `The Style tab controls appearance:

• Highlight color and opacity for the shaded regions
• Outline color and width for the curves
• Circle size
• Switches for the universe box, region labels, and the caption

Drag any curve to move it. At 2 and 3 sets dragging is safe and useful for spacing the picture. At 4 and 5 sets the layout is fixed, and dragging destroys the regions the diagram depends on.

Two export buttons finish the job. **Download SVG** produces a vector file that stays sharp at any size and can be edited in a vector editor, which is what you want for print, worksheets, or slides. **Download PNG** produces a raster image for anywhere that will not accept SVG. Set your colors and toggles before exporting, since the file captures the diagram exactly as it appears.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What a Venn Diagram Shows`,
      content: `A Venn diagram splits a universe into regions, one for every possible pattern of membership across the sets.

That last part is what separates a Venn diagram from a loose sketch of overlapping circles. With $n$ sets, a true Venn diagram has $2^n$ regions: 4 regions for 2 sets, 8 for 3, 16 for 4, and 32 for 5. Every combination is present, including the region outside all the sets.

This is why 4 and 5 set diagrams stop using circles. Four circles cannot produce all 16 regions, so the generator switches to ellipses and curved shapes that can. It is also why the layout is locked at those sizes.

A diagram where some combinations are missing on purpose, such as disjoint circles, is an Euler diagram rather than a Venn diagram.

For the full treatment of regions and set relations, see **set theory**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `The Core Set Operations`,
      content: `Five operations cover almost everything you will type into the box.

**Intersection** keeps only what is in both sets:

$$A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$$

**Union** keeps anything in either set:

$$A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$$

**Difference** keeps what is in the first set but not the second:

$$A \\setminus B = \\{x : x \\in A \\text{ and } x \\notin B\\}$$

**Complement** keeps everything in the universe outside the set:

$$A^c = \\{x \\in U : x \\notin A\\}$$

**Symmetric difference** keeps what is in exactly one of the two sets:

$$A \\oplus B = (A \\setminus B) \\cup (B \\setminus A)$$

Type each one on a two-set diagram and note the shaded count: intersection gives 1 of 4, union 3 of 4, difference 1 of 4, complement 2 of 4, symmetric difference 2 of 4.

For worked definitions and proofs, see **set operations**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Checking Identities Visually`,
      content: `Set identities are equalities between expressions, and every one of them can be tested here in seconds using the Compare box.

The identities worth trying first:

• De Morgan: $(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$
• Distributive: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$
• Absorption: $A \\cup (A \\cap B) = A$
• Difference as intersection: $A \\setminus B = A \\cap B^c$

A shaded diagram is not a proof, but it is a reliable check. If two expressions shade different regions, the identity is false and you have a counterexample immediately. If they shade the same regions across all $2^n$ patterns, the identity holds for those sets, and a formal proof by element membership will follow the same case split the regions already show.

For formal statements, see **set identities**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts and Tools`,
      content: `**Set Theory** - Sets, membership, subsets, and the universe the diagram divides.

**Set Operations** - Formal definitions of intersection, union, difference, complement, and symmetric difference.

**De Morgan's Laws** - The two complement identities the Compare box confirms fastest.

**Cardinality** - Counting elements, and the inclusion-exclusion rule the Elements tab lets you verify.

**Logic** - Set operations mirror the logical connectives: intersection is AND, union is OR, complement is NOT.

**Probability** - Events are sets, so the same diagrams carry over to probability rules for unions and complements.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `The Four Operations on Two Sets`,
      content: `The generator opens on two sets with $A \\cap B$ in the box, shading $1$ of the $4$ regions. Swapping the operator changes only which regions light up, never how many exist.

$A \\cup B$ shades $3$ of $4$; $A \\oplus B$, the symmetric difference, shades $2$; and $A^c$ shades $2$ — but not the same two.`,
      before: ``,
      after: `Those counts are worth reading as a group. Union and complement both shade a majority of the picture, yet $A \\cup B$ leaves out the region outside everything while $A^c$ includes it. The two are not opposites of each other; $A^c$ is the opposite of $A$ alone.

Symmetric difference is the one people meet last and it is the easiest to read here: it shades exactly the regions union shades **minus** the one intersection shades. Written out, $A \\oplus B = (A \\cup B) \\setminus (A \\cap B)$, which the counts confirm as $3 - 1 = 2$.

Every one of these is decided by the same evaluator. The tool parses your expression once and then asks it a yes-or-no question about each region's membership, so an expression of any depth is answered the same way a single operator is.`,
      link: '',
    },

    obj13: {
      title: `Layouts Change Which Regions Exist`,
      content: `Switch the layout from Overlapping to **Disjoint** with $A \\cap B$ still in the box, and nothing shades. Switch to **$A \\subseteq B$** and the "A only" region disappears instead.

The expression did not change. The set of regions that have any area did.`,
      before: ``,
      after: `This is the sharpest distinction the tool can draw, and it is easy to miss. The **region table** is combinatorial: $n$ sets always produce $2^n$ rows, whatever the picture looks like. The **drawing** is geometric, and a layout can leave a row with no area at all.

Under Disjoint the tool still selects the $A \\cap B$ row — the strip shows it — but there is no path to fill, so the diagram stays empty. Under $A \\subseteq B$ the missing row is "A only", because every element of $A$ is also in $B$. Under $A = B$ both "A only" and "B only" vanish and just two regions survive of the four.

That gap between what an expression *selects* and what a diagram can *show* is exactly why a Venn diagram is a tool for reasoning about relationships rather than a proof. The algebra is always over all $2^n$ regions; the picture only draws the ones your arrangement admits.`,
      link: '',
    },

    obj14: {
      title: `Three Sets and De Morgan's Law`,
      content: `At three sets there are $2^3 = 8$ regions. $A \\cap B \\cap C$ shades exactly one of them, the centre.

Put $(A \\cup B)^c$ in the box and $2$ regions shade: the area outside everything, and $C$ alone.`,
      before: ``,
      after: `That second result is De Morgan's law made visible. $(A \\cup B)^c = A^c \\cap B^c$ — everything outside both $A$ and $B$ — and with a third set present that leaves two places to be: inside $C$ only, or inside nothing at all.

The Compare box turns this from a picture into a check. Type $(A \\cup B)^c$ in one box and $A^c \\cap B^c$ in the other and the tool reports $\\equiv$, meaning the two shade identically across all eight regions. Type $A^c \\cup B^c$ instead and it reports $\\not\\equiv$ and names the regions that differ.

That is a genuine verification, not an illustration: comparing region by region over all $2^n$ rows is exactly what proving a set identity requires.`,
      link: '',
    },

    obj15: {
      title: `Four and Five Sets`,
      content: `Beyond three sets circles stop working — no arrangement of four circles produces all $16$ regions — so the tool switches to a fixed layout of tilted ellipses at $4$ sets and a fixed five-fold arrangement at $5$.

At four sets $A \\cap B$ shades $4$ of the $16$ regions; at five sets $A \\cap B \\cap C$ shades $4$ of the $32$.`,
      before: ``,
      after: `Those counts follow a rule worth knowing. Fixing $k$ of the $n$ sets to "inside" leaves the other $n - k$ free, so the expression shades $2^{n-k}$ regions: $2^{4-2} = 4$ and $2^{5-3} = 4$. A short expression selects a whole family of regions, and the family grows as the diagram does.

These two layouts are the reason dragging is disabled at $4$ and $5$ sets. The arrangements are chosen so that every one of the $2^n$ regions exists and is reachable; nudging a curve destroys some of them, which is the geometric failure that made circles insufficient in the first place.

It is also why five sets is close to the practical ceiling. $32$ regions is already more than a reader can track, and the diagram becomes a device for confirming an answer rather than for finding one.`,
      link: '',
    }

  }

  const faqQuestions = {
    obj1: {
      question: "How do I make a Venn diagram with 4 or 5 sets?",
      answer: "Click the 4 or 5 button to rebuild the diagram at that size. Circles cannot produce every region past three sets, so the generator uses ellipses and curved shapes instead. The layout is fixed at these sizes and dragging a curve destroys regions."
    },
    obj2: {
      question: "What symbols can I type into the expression box?",
      answer: "Use & for intersection, the pipe character or a plus sign for union, and a minus sign for difference. Complement can be written as the set letter followed by a superscript c, a prime mark or a star, or with a leading negation sign. Only set letters currently on the diagram are accepted."
    },
    obj3: {
      question: "How do I check whether two set expressions are equal?",
      answer: "Type the first expression in the Expression box and the second in the Compare box. An equivalence sign means both shade exactly the same regions. A struck-through equivalence sign means they differ. This checks identities such as De Morgan's laws directly."
    },
    obj4: {
      question: "Can I put actual elements inside the diagram?",
      answer: "Yes. Open the Elements tab and list one set per line, such as A = 1, 2, 3. Each element lands in the region matching its full membership. Use U for elements that belong to no set. Toggle Show elements and Show counts to display names or region totals."
    },
    obj5: {
      question: "Can I download the diagram?",
      answer: "Yes. Download SVG gives a vector file that stays sharp at any size and can be edited in a vector editor. Download PNG gives a raster image. Set your colors and toggles first, because the export captures the diagram exactly as it appears."
    }
  }

  const seoData = {
    title: "Venn Diagram Generator - 2 to 5 Sets | Learn Math Class",
    description: "Build Venn diagrams for 2 to 5 sets, shade any set expression, compare two expressions, place elements, and export the result as SVG or PNG. Free tool.",
    keywords: keyWords.join(", "),
    url: "/set-theory/visual-tools/venn-generator",
    name: "Venn Diagram Generator",
    ogImagePath: "",
    hubDescription: "Shade any set expression on a 2, 3, 4, or 5 set Venn diagram. Type it with keyboard shortcuts, build it from symbol buttons, or load a preset. A region strip lists every region and whether it is shaded, a compare box tests two expressions for equivalence, and finished diagrams export to SVG or PNG.",
    category: "Venn Diagrams",
    subCategory: "Multiple Sets",
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="5" width="11" height="10" rx="3" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><rect x="25" y="5" width="11" height="10" rx="3" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><rect x="38" y="5" width="11" height="10" rx="3" fill="#FAC775" stroke="#854F0B" stroke-width="1.3"/><rect x="51" y="5" width="11" height="10" rx="3" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.9"/><text x="17.5" y="12.5" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">2</text><text x="30.5" y="12.5" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">3</text><text x="43.5" y="12.5" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">4</text><text x="56.5" y="12.5" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">5</text><ellipse cx="33" cy="48" rx="22" ry="13" transform="rotate(-40 33 48)" fill="#85B7EB" fill-opacity="0.45" stroke="#0C447C" stroke-width="1"/><ellipse cx="38" cy="44" rx="22" ry="13" transform="rotate(-40 38 44)" fill="#FAC775" fill-opacity="0.45" stroke="#854F0B" stroke-width="1"/><ellipse cx="42" cy="44" rx="22" ry="13" transform="rotate(40 42 44)" fill="#97C459" fill-opacity="0.45" stroke="#27500A" stroke-width="1"/><ellipse cx="47" cy="48" rx="22" ry="13" transform="rotate(40 47 48)" fill="#ED93B1" fill-opacity="0.45" stroke="#72243E" stroke-width="1"/></svg>`,
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Set Theory", href: "/set-theory" },
      { label: "Visual Tools", href: "/set-theory/visual-tools" },
      { label: "Venn Diagram Generator", href: "/set-theory/visual-tools/venn-generator" }
    ]
  }

  const schemas = {

    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Venn Diagram Generator",
      "description": "Build Venn diagrams for 2 to 5 sets, shade any set expression, compare two expressions, place elements, and export the result as SVG or PNG. Free tool.",
      "url": "https://www.learnmathclass.com/set-theory/visual-tools/venn-generator",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Venn diagrams for 2, 3, 4, and 5 sets",
        "Shade any set expression using intersection, union, difference, symmetric difference, and complement",
        "Region strip listing every region and its shading state",
        "Compare box testing two expressions for equivalence",
        "Preset expression library with overlapping, disjoint, subset, and equal layouts",
        "Element entry with per-region display and counts",
        "Color, opacity, outline, and label styling with SVG and PNG export"
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
      "keywords": keyWords.join(", ")
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
          "name": "Set Theory",
          "item": "https://www.learnmathclass.com/set-theory"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Venn Diagram Generator",
          "item": "https://www.learnmathclass.com/set-theory/visual-tools/venn-generator"
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
      stateUnits,
      sectionOrder,
      faqQuestions,
      schemas,
      seoData
    }
  }
}


export default function VennDiagramGeneratorPage({ seoData, sectionsContent, stateUnits, sectionOrder, faqQuestions, schemas }) {

  const genericSections = (sectionOrder || []).map(([obj, id, unitKey]) => {
    const src = sectionsContent[obj]
    if (!src || !src.title) return null
    const body = [ src.content ]
    if (unitKey && stateUnits[unitKey]) {
      body.push(<div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />)
      if (src.after) body.push(src.after)
    }
    return { id, title: src.title, link: src.link || '', content: body }
  }).filter(Boolean);

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
   {/* <GenericNavbar/>
   */}
  
   <br/>
   <br/>
   <OperaSidebar
        side='right'
        // topOffset='55px'
        sidebarWidth='35px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Venn Diagrams Generator</h1>
   <br/>
   {/* <div style={{
        transform: 'scale(0.8)', 
        transformOrigin: 'top center',
        height: '110vh', // Increase the height to accommodate scaled content
      }}> */}
      {/* <StandardContainer> */}
      {/* <div style={{width:'90%', margin:'auto'}}> */}
      <div style={{width:'80%', margin:'auto'}}>
   <ExplanationDetails
     title='How to use'
     instructions={instructions}
     accent='#2f4fd8'
   />
   </div>
   <br/>
   <br/>
   <VennGenerator showIntro={false}/>
   {/* </div> */}
   {/* </StandardContainer> */}
   
   {/* </div> */}
   {/* <ScrollUpButton/> */}
  <br/>
  <br/>
  <br/>
  <br/>
   <SectionTableOfContents sections={genericSections}/>
  <br/>
  <br/>
   <Sections sections={genericSections}/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
   </>
  )
}