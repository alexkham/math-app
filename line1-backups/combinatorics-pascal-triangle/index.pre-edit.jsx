// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import PascalsTriangle from '../../../../app/components/combinatorics/new-visualizers/general/PascalTriangle'


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
//         url: "/combinatorics/visual-tools/pascal-triangle",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Pascal Triangle</h1>
//    <br/>
//    <PascalsTriangle/>
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
import PascalsTriangle from '../../../../app/components/combinatorics/new-visualizers/general/PascalTriangle'


export async function getStaticProps(){

  const keyWords = [
    "Pascal's triangle",
    "Pascal's triangle visualizer",
    'binomial coefficients',
    'C(n, r)',
    'n choose r',
    "Pascal's identity",
    'hockey stick identity',
    'row sum binomial',
    'symmetry binomial coefficients',
    'binomial expansion (a+b)^n',
    "Pascal's rule",
    'binomial coefficient calculator',
    'combinations triangle',
    'binomial theorem visualizer',
    'interactive Pascal triangle'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Pascal's triangle** — a triangular array of integers where row $n$ contains the binomial coefficients $\\binom{n}{0}, \\binom{n}{1}, \\dots, \\binom{n}{n}$. Each interior entry equals the sum of the two entries directly above it; the edges are all $1$.

**Binomial coefficient $\\binom{n}{r}$** — the number of ways to choose $r$ items from $n$ distinct items without order. Equivalently the coefficient of $a^{n-r} b^r$ in the expansion of $(a + b)^n$. Computed as $\\binom{n}{r} = n! / (r! \\cdot (n-r)!)$.

**Pascal's identity** — the recurrence that builds the triangle: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$. Every interior cell is the sum of the two cells above it.

**Hockey-stick identity** — a diagonal sum: $\\sum_{i=r}^{n} \\binom{i}{r} = \\binom{n+1}{r+1}$. The starting diagonal cells form the *stick*; the cell below-and-across is the *puck*.

**Row sum** — the cells in row $n$ sum to $2^n$, counting the total number of subsets of an $n$-element set across all sizes.

**Symmetry** — within each row, $\\binom{n}{r} = \\binom{n}{n-r}$. Choosing $r$ items to include is the same as choosing $n - r$ items to exclude.

**Focus** — the cell currently selected by clicking. The four modes highlight different relatives of the focus cell.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with $N = 6$ (rows $0$ through $6$) and the cell $\\binom{4}{2} = 6$ already focused under **Pascal's identity** mode. The scene splits into four areas:

• **The triangle** — clickable cells arranged in rows $0$ through $N$. The focused cell is filled in accent blue; its relatives (depending on mode) appear with amber or green outlines.

• **A polynomial banner** below the triangle showing the focused row's expansion of $(a + b)^n$. The triangle's row values *are* the polynomial's coefficients.

• **A mode group** in the control bar with four buttons: *Pascal's identity*, *Hockey stick*, *Row sum*, *Symmetry*.

• **A right info panel** showing the factorial breakdown $\\binom{n}{r} = n! / (r! \\cdot (n-r)!)$ for the focused cell, plus an identity-specific arithmetic block.

To explore:

• **Click any cell** to focus it. The triangle re-highlights and the right panel updates with the factorial breakdown and the active identity's specific arithmetic for that cell.

• **Switch modes** to see the same focused cell through a different identity.

• **Adjust N** to add or remove rows.

• **Clear selection** to return to an unfocused view.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Clicking Cells and Focus`,
      content: `Every cell in the triangle is clickable. Clicking a cell sets it as the **focus** — the anchor for whichever identity mode is currently active.

The focused cell renders in solid accent blue with white text, and its label $C(n, r)$ appears just below it. The right panel immediately shows:

• The selected coefficient — *Selected: $C(n, r) = v$*.

• The factorial breakdown — $C(n, r) = n!/(r! \\cdot (n-r)!) = v$, fully expanded.

• A short interpretation reminder — *$C(n, r)$ counts the number of ways to choose $r$ items from a set of $n$ distinct items*.

• The current mode's identity, applied to this cell.

If you reduce $N$ below the focused cell's row, the focus clears automatically. Press **Clear selection** in the control bar to clear focus manually; the cells return to their default outlined state and the right panel shows a hint to click any cell.

The polynomial banner always shows the row of the focused cell (or row $0$ when nothing is focused).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Mode 1 — Pascal's Identity`,
      content: `**Pascal's identity** says every interior cell is the sum of the two cells immediately above it:

$$\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$$

In this mode, the focused cell is connected to its two parents by dashed accent lines, and both parents are outlined in amber as *related* cells. The right panel shows the concrete arithmetic — for example, with focus on $\\binom{4}{2}$:

$\\binom{4}{2} = \\binom{3}{1} + \\binom{3}{2} = 3 + 3 = 6$.

Edge cases:

• **Apex** $\\binom{0}{0} = 1$ has no parents — by convention.

• **Left edge** $\\binom{n}{0}$ has only one parent $\\binom{n-1}{0}$, which is always $1$, so left edges are all $1$.

• **Right edge** $\\binom{n}{n}$ has only one parent $\\binom{n-1}{n-1}$, also $1$, so right edges are all $1$.

This identity is what *builds* the triangle — knowing the top row, you can construct every subsequent row by addition alone, without ever computing factorials.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Mode 2 — Hockey Stick`,
      content: `The **hockey-stick identity** says a diagonal of cells starting from a column-$r$ entry sums to the cell one row below and one column to the right:

$$\\sum_{i=r}^{n} \\binom{i}{r} = \\binom{n+1}{r+1}$$

In this mode, treat the focused cell as the *puck* — the cell where all the action ends up. The triangle highlights the diagonal stick (cells one column to the left, running from the puck's row back up to the row matching that column) and draws an amber path connecting them down to the puck.

For example, focusing on $\\binom{5}{2} = 10$:

$\\binom{1}{1} + \\binom{2}{1} + \\binom{3}{1} + \\binom{4}{1} = 1 + 2 + 3 + 4 = 10 = \\binom{5}{2}$.

The right panel shows the full chain of column-$1$ cells summing to the puck.

The mode reveals why the formula for triangular numbers $1 + 2 + \\dots + n = \\binom{n+1}{2}$ holds — it's just the column-$1$ hockey stick.

If the focused cell is in column $0$, no valid stick exists; the right panel shows a hint to pick a cell with column ≥ $1$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Mode 3 — Row Sum`,
      content: `The **row-sum identity** says the cells in row $n$ add up to $2^n$:

$$\\sum_{r=0}^{n} \\binom{n}{r} = 2^n$$

In this mode, every cell in the focused row (other than the focus itself) is outlined in amber as *related*. A label appears on the right edge of the row showing *sum = $2^n$*. The right panel lists the full sum:

For row $4$: $\\binom{4}{0} + \\binom{4}{1} + \\binom{4}{2} + \\binom{4}{3} + \\binom{4}{4} = 1 + 4 + 6 + 4 + 1 = 16 = 2^4$.

Combinatorial interpretation: each binomial coefficient $\\binom{n}{r}$ counts subsets of size $r$ from an $n$-element set. Summing across all sizes counts all subsets, of which there are $2^n$ (each of the $n$ elements is independently in or out).

This identity is the source of many later results — for example, the expected size of a random subset of $\\{1, \\dots, n\\}$ is $n/2$ because the row sum decomposition is symmetric around $r = n/2$.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Mode 4 — Symmetry`,
      content: `The **symmetry identity** says each row is a palindrome:

$$\\binom{n}{r} = \\binom{n}{n - r}$$

In this mode, the focused cell and its mirror across the row's center are both highlighted, and a curved green arc connects them through the row label above.

For example, focusing on $\\binom{7}{2} = 21$:

$\\binom{7}{2} = \\binom{7}{5} = 21$.

Combinatorial reading: choosing $r$ items to **include** in a selection is the same as choosing $n - r$ items to **leave out**. The two selections describe identical events from opposite sides.

Special case — the center of an even-length row maps to itself. Focusing on $\\binom{4}{2}$ when $n - r = r$ gives a self-symmetry; the right panel notes this and skips the arc since the focus and the mirror coincide.

This identity is why the triangle is left-right symmetric and why so many identities have *dual* forms — you can always swap $r$ with $n - r$ to get an equivalent statement.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Polynomial Banner`,
      content: `Below the triangle sits a banner labeled *ROW n = COEFFICIENTS OF (a + b)^n*, showing the full expansion of the focused row's polynomial.

For row $4$:

$$(a + b)^4 = a^4 + 4 a^3 b + 6 a^2 b^2 + 4 a b^3 + b^4$$

This is the **binomial theorem**: the coefficient of $a^{n-r} b^r$ is exactly $\\binom{n}{r}$. The triangle's row values *are* the polynomial's coefficients, in order.

The banner updates whenever you focus a cell in a different row, making it easy to see why each row of Pascal's triangle answers two questions at once:

• How many subsets of size $r$ exist in an $n$-element set?

• What is the coefficient of $a^{n-r} b^r$ when you multiply $(a + b)$ by itself $n$ times?

For higher $n$ the polynomial is rendered at a smaller font to fit; the actual values remain accurate. The banner color matches the formula card styling used elsewhere in the tool.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Are Binomial Coefficients`,
      content: `The **binomial coefficient** $\\binom{n}{r}$ — read *n choose r* — is one of the most important numbers in combinatorics. It admits several equivalent definitions:

**Counting subsets.** $\\binom{n}{r}$ is the number of $r$-element subsets of an $n$-element set.

**Polynomial coefficient.** $\\binom{n}{r}$ is the coefficient of $a^{n-r} b^r$ in $(a + b)^n$. This is the *binomial theorem*:

$$(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$$

**Factorial formula.** $\\binom{n}{r} = \\dfrac{n!}{r! \\, (n - r)!}$.

**Recursive definition.** $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$ with edge values $\\binom{n}{0} = \\binom{n}{n} = 1$.

Examples:

• $\\binom{5}{2} = 10$: there are $10$ ways to choose $2$ items from $5$, and the coefficient of $a^3 b^2$ in $(a+b)^5$ is $10$.

• $\\binom{52}{5} = 2{,}598{,}960$: the number of $5$-card poker hands from a standard deck.

• $\\binom{10}{5} = 252$: middle term of $(a+b)^{10}$, and the maximum entry of row $10$.

For deeper coverage including identities, generating functions, and applications, see the **binomial coefficients** section on the combinations theory page.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why These Identities Matter`,
      content: `The four identities highlighted in this tool aren't isolated curiosities — they're the workhorses of combinatorial proofs and probability calculations.

**Pascal's identity** is the recursive backbone. It lets you compute any $\\binom{n}{r}$ from smaller ones without ever multiplying or dividing factorials. It also gives a *combinatorial proof*: pick a specific element; either you include it (giving $\\binom{n-1}{r-1}$) or you don't (giving $\\binom{n-1}{r}$).

**Hockey-stick** appears in counting problems where you fix the **maximum** element of a subset. The number of subsets of $\\{1, \\dots, n+1\\}$ with $r+1$ elements is $\\binom{n+1}{r+1}$, and grouping by the max element gives the diagonal sum.

**Row sum $2^n$** is the source of countless probability results — it underlies binomial distribution normalization, the cardinality of power sets, and the fact that $n$-bit binary strings number $2^n$.

**Symmetry** is invoked whenever a problem becomes easier from the *complementary* viewpoint — for example, computing $\\binom{100}{97}$ as $\\binom{100}{3} = 161{,}700$ rather than evaluating $97!$ directly.

Together, these four are sufficient to derive most other binomial identities by combination and induction.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Simple combination** — the no-repetition unordered selection. Formula $\\binom{n}{r}$ exactly; the triangle is the lookup table for all such values.

**Binomial theorem** — $(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$. The triangle visualizes this expansion row by row.

**Multinomial coefficient** — generalizes the binomial to more than two parts: $\\binom{n}{n_1, n_2, \\dots, n_k} = n! / (n_1! \\cdots n_k!)$. The binomial is the $k = 2$ case.

**Combination with repetition** — counts multisets, $\\binom{n + r - 1}{r}$. Different formula, different position in the triangle.

**Permutation** — ordered selections, $n!/(n-r)!$. Related but distinct from the unordered combinations shown here.

**Catalan numbers** — appear in Pascal's triangle along a specific diagonal: $C_n = \\binom{2n}{n} / (n + 1)$.

**Vandermonde's identity** — $\\binom{m + n}{r} = \\sum_{k} \\binom{m}{k} \\binom{n}{r-k}$. Another classical binomial identity expressible through the triangle.

**Lucas's theorem** — for prime $p$, $\\binom{m}{n} \\bmod p$ is computable digit-by-digit in base $p$. Reveals fractal structures (Sierpiński patterns) when the triangle is reduced modulo a prime.

**Binomial coefficient calculator** — to compute $\\binom{n}{r}$ for larger $n$, see the **n choose r calculator**.`,
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
      question: "What is Pascal's triangle?",
      answer: "Pascal's triangle is a triangular array of integers where row n contains the binomial coefficients n choose 0 through n choose n. Each interior entry is the sum of the two entries directly above it, and the edges are all 1. It encodes binomial coefficients, the expansion of a plus b to the n, and many counting identities."
    },
    obj2: {
      question: "What is Pascal's identity?",
      answer: "Pascal's identity states that the binomial coefficient n choose r equals n minus 1 choose r minus 1 plus n minus 1 choose r. Every interior cell of Pascal's triangle is the sum of the two cells directly above it, which gives a way to build the triangle row by row without computing factorials."
    },
    obj3: {
      question: "What is the hockey-stick identity?",
      answer: "The hockey-stick identity says that summing a diagonal in Pascal's triangle starting at column r and ending at row n equals the cell one row below and one column to the right. Formally, the sum from i equals r to n of i choose r equals n plus 1 choose r plus 1. The shape of the diagonal plus the result cell resembles a hockey stick."
    },
    obj4: {
      question: "Why do the rows of Pascal's triangle sum to powers of 2?",
      answer: "Row n of Pascal's triangle contains the counts of subsets of an n-element set grouped by size. Summing across all sizes counts every subset, and there are 2 to the n subsets since each element is independently included or excluded. So row n sums to 2 to the n."
    },
    obj5: {
      question: "What is the connection between Pascal's triangle and the binomial theorem?",
      answer: "The coefficients in the expansion of a plus b to the n are exactly the binomial coefficients n choose r for r from 0 to n. These are precisely the values in row n of Pascal's triangle. So the triangle is a lookup table for binomial expansions: row 4 gives the coefficients 1, 4, 6, 4, 1 for a plus b to the 4."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pascal's Triangle Visualizer",
      "description": "Interactive Pascal's triangle showing binomial coefficients C(n, r) with four identity modes: Pascal's identity, hockey-stick sum, row sum equals 2 to the n, and the symmetry C(n, r) = C(n, n - r), plus a live (a + b) to the n expansion.",
      "url": "https://www.learnmathclass.com/combinatorics/visual-tools/pascal-triangle",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Clickable triangle of binomial coefficients C(n, r) with focus cell highlighting and factorial breakdown in the right panel",
        "Pascal's identity mode showing each focused cell connected to its two parent cells with dashed lines and concrete arithmetic",
        "Hockey-stick mode drawing the diagonal stick of column-r cells summing to the cell below-and-across (the puck)",
        "Row-sum mode highlighting the full focused row with a live sum = 2 to the n label on the right edge",
        "Symmetry mode connecting the focused cell to its mirror across the row's center, illustrating C(n, r) = C(n, n - r)",
        "Polynomial banner showing the focused row's expansion of (a + b) to the n with all coefficients explicit",
        "N stepper (rows 4 to 9), a four-button mode group, and a clear-selection button in the control bar"
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
      "keywords": "Pascal's triangle, Pascal's triangle visualizer, binomial coefficients, C(n, r), n choose r, Pascal's identity, hockey stick identity, row sum binomial, symmetry binomial coefficients, binomial expansion (a+b)^n, Pascal's rule, binomial coefficient calculator, combinations triangle, binomial theorem visualizer, interactive Pascal triangle"
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
          "name": "Pascal's Triangle Visualizer",
          "item": "https://www.learnmathclass.com/combinatorics/visual-tools/pascal-triangle"
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
        title: "Pascal's Triangle: Binomial Coefficients | Learn Math Class",
        description: "Explore Pascal's triangle interactively: click any cell to see Pascal's identity, hockey-stick sum, row sum 2^n, symmetry, and the (a+b)^n expansion live.",
        keywords: keyWords.join(", "),
        url: "/combinatorics/visual-tools/pascal-triangle",
        name: "Pascal's Triangle Visualizer",
        hubDescription: "Click any cell to focus a binomial coefficient C(n, r) and switch between four identity modes — Pascal's rule, the hockey-stick sum, the row sum of 2^n, and C(n, r) = C(n, n − r). A polynomial banner shows the focused row's expansion of (a + b)^n live.",
        category: "Combinations",
        subCategory: ""
      },

    }
  }
}

export default function PascalTriangleVisualizer({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Pascal&apos;s Triangle</h1>
      <br/>
      <PascalsTriangle/>
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