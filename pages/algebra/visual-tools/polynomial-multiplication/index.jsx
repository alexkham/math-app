// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import PolynomialMultiplicationVisualizer from '../../../../app/components/algebra/visualizers/polynomials/PolynomialMultiplication'


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
//         url: "/algebra/visual-tools/polynomial-multiplication",
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>PolynomialMultiplication</h1>
//    <br/>
//    <PolynomialMultiplicationVisualizer/>
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
import PolynomialMultiplicationVisualizer from '../../../../app/components/algebra/visualizers/polynomials/PolynomialMultiplication'


export async function getStaticProps(){

  const keyWords = [
    'polynomial multiplication',
    'polynomial multiplication calculator',
    'multiplying polynomials',
    'polynomial multiplier',
    'multiply polynomials step by step',
    'FOIL method',
    'FOIL calculator',
    'box method polynomial multiplication',
    'grid method polynomial multiplication',
    'expand polynomials',
    'polynomial product calculator',
    'how to multiply polynomials',
    'distributing polynomials',
    'polynomial multiplication visualizer',
    'multiplying binomials and trinomials'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Polynomial multiplication** — the operation of multiplying two polynomials $P(x)$ and $Q(x)$, producing a new polynomial whose degree is the sum of the degrees of $P$ and $Q$.

**Distributive property** — the rule $a(b + c) = ab + ac$, applied repeatedly to multiply each term of one polynomial by each term of the other.

**FOIL** — the mnemonic for multiplying two binomials: First, Outer, Inner, Last. A special case of distribution that produces exactly four pairwise products.

**Grid method (box method)** — a tabular visualization of polynomial multiplication. The terms of $P$ label the rows, the terms of $Q$ label the columns, and each cell holds the product of its row and column terms. Generalizes FOIL to any number of terms.

**Like terms** — terms that share the same power of $x$. After distributing, like terms are grouped and their coefficients summed.

**Degree of a product** — equals the degree of $P$ plus the degree of $Q$. A trinomial times a binomial yields a polynomial of degree (2 + 1) = 3, for example.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started`,
      content: `The tool opens with the polynomial pair $(x^2 - 3x + 2)(2x + 5)$ loaded by default. The layout is split into two cards side by side:

• A **left card** with preset buttons, two polynomial editors for $P(x)$ and $Q(x)$, and animation controls.

• A **right card** showing the multiplication grid, the like-term buckets below it, and the final result box.

To explore:

• Click any preset to load a curated example.

• Edit the coefficients and exponents directly in the term rows.

• Add or remove terms with the **+ add term** button and the small **×** per row.

• Press **Step ▶** to fill one grid cell at a time, or **Auto-expand** to play through all cells continuously.

The status badge at the bottom of the left card tracks progress as $k / N$ cells filled, where $N$ is the total number of pairwise products to compute.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Entering the Polynomials`,
      content: `Two polynomial editors sit in the left card, one for $P(x)$ and one for $Q(x)$. Each editor has three parts:

• A **live display** at the top showing the polynomial in standard form, with terms sorted by descending exponent and signs handled correctly.

• A list of **term rows**, one per term. Each row has a coefficient input (any integer or decimal between &minus;9999 and 9999), the literal $x$, an exponent input (an integer between 0 and 12), and a remove button.

• An **+ add term** button to append another term, up to a maximum of 6 terms per polynomial.

A few mechanics worth knowing:

• Editing any input updates the grid and result instantly. There is no apply button.

• The remove button is disabled when only one term remains — every polynomial must have at least one term.

• Total grid size is capped at 36 cells. A 6&times;6 product is the largest configuration; anything larger triggers a validation error.

• Coefficients of zero are dropped from the grid silently. All zeros in a polynomial produces a validation error.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Presets`,
      content: `Five preset products demonstrate different sizes and structures:

• **$(x + 2)(x + 3)$** — the canonical FOIL: binomial times binomial, a $2 \\times 2$ grid with four cells.

• **$(2x - 1)(x + 4)$** — binomial times binomial with a negative coefficient, useful for seeing sign handling.

• **$(x^2 - 3x + 2)(2x + 5)$** — trinomial times binomial, a $3 \\times 2$ grid with six cells. The default load.

• **$(x + 1)(x^2 - x + 1)$** — binomial times trinomial, a $2 \\times 3$ grid. Note the famous result: this product equals $x^3 + 1$.

• **$(2x^2 + x - 3)(x^2 - 2x + 1)$** — trinomial times trinomial, a $3 \\times 3$ grid with nine cells. The most complex preset.

Click any preset to load it; the editors, grid, buckets, and result all refresh immediately.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Multiplication Grid`,
      content: `The right-card grid is the visual centerpiece. Each row corresponds to one term of $P(x)$ (sorted by descending exponent); each column corresponds to one term of $Q(x)$ (also sorted). The cell at row $i$, column $j$ holds the product of those two terms.

The fundamental rule: **each cell&apos;s exponent equals the sum of its row exponent and its column exponent**. So $x^2 \\cdot x = x^3$, $x \\cdot x = x^2$, $x \\cdot 1 = x$, and so on. Cells with the same total exponent share a color, drawn from a palette that distinguishes constants, $x$, $x^2$, $x^3$, and higher powers at a glance.

Cells fill in left-to-right, top-to-bottom as the animation runs. Three visual states:

• **Empty cells** — outlined in light gray, showing the product symbolically without color.

• **Hot cell** — the cell just delivered. Briefly scaled up with a blue glow ring for about 360 ms.

• **Collected cells** — fully colored according to their exponent. Cells with the same color belong to the same like-term bucket below.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `The Like-Term Buckets`,
      content: `Below the grid sits a row of **buckets**, one per distinct exponent that appears in any product. Each bucket collects all the cells that produce the same power of $x$.

A bucket displays three things:

• A **header** naming the like-term group: *constants*, *x terms*, *x&sup2; terms*, *x&sup3; terms*, and so on, with the exponent value shown on the right.

• A **contributions row** listing the signed coefficients delivered to this bucket so far, in the order they arrived (for example, *&minus; 6 &plus; 2*).

• A **sum line** showing the running total: the combined coefficient times the appropriate power of $x$.

Each time a cell delivers, the matching bucket briefly highlights to show where the contribution went. By the time all cells fill, each bucket holds the final coefficient for that power of $x$. Reading the buckets from highest exponent to lowest reconstructs the product polynomial term by term.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Animation Controls`,
      content: `Three buttons drive the animation at the bottom of the left card:

• **Step ▶** — deliver one grid cell. Useful for walking through the multiplication slowly and reading off each product as it lands.

• **Auto-expand / ⏸ Pause / Replay** — the primary play button. Starts continuous play at about 480 ms per cell; pauses if already playing; restarts from the beginning if all cells are already delivered.

• **↺ Reset** — clear the grid and buckets, return to step 0, without changing the polynomials.

Two pieces of feedback help track progress:

• The status text on the right of the control bar reads $k / N$ cells, where $N$ is the total cell count for the current grid.

• If the polynomials are invalid (no non-zero terms, too many terms, grid too big), a red error message replaces the status and the action buttons disable.

Any edit to the polynomials, or selecting a different preset, automatically stops play and resets the animation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Final Result`,
      content: `Below the buckets, a blue gradient **Result** box shows the final product $P(x) \\cdot Q(x)$ as a fully simplified polynomial. The box is faded with the label *Result (pending)* while cells are still being delivered, and activates at full opacity once every cell is filled.

The polynomial in the box comes from combining the bucket sums:

• Read each bucket&apos;s sum (its coefficient).

• Pair each coefficient with its bucket&apos;s power of $x$.

• Sort by descending exponent and write out with signs.

The result is the canonical form of the product. For a quick check on small examples like the default $(x^2 - 3x + 2)(2x + 5) = 2x^3 - x^2 - 11x + 10$, you can verify by FOIL-style hand calculation. For larger products like the 3&times;3 trinomial-times-trinomial case, the tool does the bookkeeping so you can focus on the structure.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `What Is Polynomial Multiplication`,
      content: `**Polynomial multiplication** is the operation that takes two polynomials $P(x)$ and $Q(x)$ and returns their product $P(x) \\cdot Q(x)$, another polynomial. The recipe comes directly from the distributive property: multiply every term of $P$ by every term of $Q$, then collect like terms.

If $P$ has $m$ terms and $Q$ has $n$ terms, distribution produces $m \\cdot n$ individual products. Some of those products land on the same power of $x$, so the final result usually has fewer than $m \\cdot n$ terms after collection. The degree of the product equals the degree of $P$ plus the degree of $Q$.

The most common manual technique for two binomials is **FOIL** (First, Outer, Inner, Last) — but FOIL is just a labelled walkthrough of the four products in a $2 \\times 2$ distribution. The grid method generalizes this to any size: an $m \\times n$ rectangular table where each cell holds one pairwise product.

For more on polynomial operations, see the **polynomial multiplication** section in the algebra theory pages.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `FOIL Generalized`,
      content: `**FOIL** stands for First, Outer, Inner, Last and labels the four products that appear when multiplying two binomials $(a + b)(c + d)$:

• **First**: $a \\cdot c$

• **Outer**: $a \\cdot d$

• **Inner**: $b \\cdot c$

• **Last**: $b \\cdot d$

The product is $ac + ad + bc + bd$. The grid method makes the structure visible: a $2 \\times 2$ table with $a, b$ down the side and $c, d$ across the top. Each of the four cells contains one of the four FOIL products.

The grid generalizes effortlessly to longer polynomials. A trinomial times a binomial fills a $3 \\times 2$ grid with six products. A trinomial times a trinomial fills a $3 \\times 3$ grid with nine. The same rule applies in every cell: multiply the coefficients, add the exponents.

After the grid fills, the **like-term collection** step groups cells whose exponents match and sums their coefficients. This is where the product polynomial usually simplifies — a $3 \\times 3 = 9$-cell product typically collapses to $5$ terms (degrees $0$ through $4$) once like terms combine.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts`,
      content: `**Distributive property** — the algebraic law $a(b + c) = ab + ac$. Polynomial multiplication is repeated distribution.

**Polynomial addition and subtraction** — combine like terms across two polynomials. The companion operations to multiplication.

**Polynomial division** — long division or synthetic division. The inverse operation of multiplication.

**Binomial theorem** — gives the expansion of $(a + b)^n$ directly using binomial coefficients. A shortcut when one of the polynomials is a power.

**Completing the square** — uses controlled polynomial manipulation to rewrite a quadratic in vertex form.

**Special products** — recognizable patterns like $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$, and $(a + b)(a - b) = a^2 - b^2$. Worth memorizing because they appear constantly.

**Algebra calculator** — for symbolic manipulation beyond what fits in a 36-cell grid, see the dedicated **polynomial multiplication calculator** in the algebra calculators section.`,
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
      question: "How do you multiply polynomials?",
      answer: "Apply the distributive property: multiply every term of the first polynomial by every term of the second polynomial. Each pairwise product becomes one cell of a multiplication grid. Then combine like terms (terms with the same power of x) by summing their coefficients. The result is the product polynomial in standard form."
    },
    obj2: {
      question: "What is FOIL and how does it relate to the grid method?",
      answer: "FOIL is the mnemonic for multiplying two binomials: First, Outer, Inner, Last. It labels the four pairwise products produced by distribution. The grid method is the same idea generalized to any size: an m by n table whose cells are the pairwise products of the m terms in P times the n terms in Q. For two binomials the grid is 2 by 2 with exactly the four FOIL cells."
    },
    obj3: {
      question: "What is the box method for polynomial multiplication?",
      answer: "The box method, also called the grid method or area model, arranges the terms of one polynomial down the left side of a table and the terms of the other across the top. Each cell of the table holds the product of its row term and column term. After every cell is filled, like terms (cells with the same exponent) are summed to produce the final polynomial."
    },
    obj4: {
      question: "How do you combine like terms after multiplying polynomials?",
      answer: "After distributing, group all terms with the same power of x together. Sum their coefficients to get a single coefficient for that power. For example, if distribution produces 3x squared and minus 5x squared, the combined term is minus 2x squared. Write the result with terms in descending order of exponent. Terms with no matching power stand alone."
    },
    obj5: {
      question: "Why does each grid cell's exponent equal the sum of its row and column exponents?",
      answer: "Because of the exponent rule for multiplication: x to the m times x to the n equals x to the m plus n. When you multiply a row term whose variable part is x to the i by a column term whose variable part is x to the j, the result has variable part x to the i plus j. The coefficient of the cell is the product of the row and column coefficients."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Polynomial Multiplication Calculator",
      "description": "Interactive tool that multiplies two polynomials using the visual grid method, with animated step-by-step expansion, like-term buckets, and live final product.",
      "url": "https://www.learnmathclass.com/algebra/visual-tools/polynomial-multiplication",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two editable polynomial inputs supporting up to 6 terms each",
        "Five preset polynomial products spanning binomial-times-binomial through trinomial-times-trinomial",
        "Animated grid that fills one pairwise product per cell, color-coded by resulting exponent",
        "Like-term buckets that collect contributions in real time and display the running sum",
        "Step forward, auto-expand, pause, replay, and reset controls",
        "Live final product polynomial that activates once all cells are delivered",
        "Validation feedback for empty, oversized, or zero polynomial inputs"
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
      "keywords": "polynomial multiplication, polynomial multiplication calculator, multiplying polynomials, polynomial multiplier, multiply polynomials step by step, FOIL method, FOIL calculator, box method polynomial multiplication, grid method polynomial multiplication, expand polynomials, polynomial product calculator, how to multiply polynomials, distributing polynomials, polynomial multiplication visualizer, multiplying binomials and trinomials"
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
          "name": "Algebra",
          "item": "https://www.learnmathclass.com/algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Polynomial Multiplication Calculator",
          "item": "https://www.learnmathclass.com/algebra/visual-tools/polynomial-multiplication"
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
        title: "Polynomial Multiplication Visualizer | Learn Math Class",
        description: "Multiply any two polynomials with the visual grid method. Watch every pairwise product fill the grid, then collect like-term buckets into the final answer.",
        keywords: keyWords.join(", "),
        url: "/algebra/visual-tools/polynomial-multiplication",
        name: "Polynomial Multiplication Visualizer",
        hubDescription: "Multiply any two polynomials step by step with a visual grid: every term of P(x) times every term of Q(x) becomes a cell, color-coded by power of x. Like-term cells gather into buckets that combine into the final product. FOIL generalized to any size.",
        category: "Polynomials",
        subCategory: "",
        svg:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>
    .hdr-bg { fill: #f1f5f9; stroke: #cbd5e1; stroke-width: 1.5; }
    .hdr-tx { fill: #1e3a5f; font-family: Georgia, "Cambria Math", serif; font-size: 13px; font-weight: 700; }
    .v-bg { fill: #ede9fe; stroke: #7c3aed; stroke-width: 2; }
    .v-tx { fill: #4c1d95; font-family: Georgia, "Cambria Math", serif; font-size: 13px; font-weight: 700; }
    .t-bg { fill: #ccfbf1; stroke: #0d9488; stroke-width: 2; }
    .t-tx { fill: #134e4a; font-family: Georgia, "Cambria Math", serif; font-size: 13px; font-weight: 700; }
    .a-bg { fill: #fef3c7; stroke: #b45309; stroke-width: 2; }
    .a-tx { fill: #78350f; font-family: Georgia, "Cambria Math", serif; font-size: 13px; font-weight: 700; }
    .i-bg { fill: #e0e7ff; stroke: #6366f1; stroke-width: 2; }
    .i-tx { fill: #312e81; font-family: Georgia, "Cambria Math", serif; font-size: 13px; font-weight: 700; }
    .sup { font-size: 9px; }
  </style>

  <!-- ===== Header row: empty | 2x | 5 ===== -->
  <rect class="hdr-bg" x="74" y="38" width="52" height="28" rx="6"/>
  <text class="hdr-tx" x="100" y="57" text-anchor="middle">2x</text>

  <rect class="hdr-bg" x="130" y="38" width="52" height="28" rx="6"/>
  <text class="hdr-tx" x="156" y="57" text-anchor="middle">5</text>

  <!-- ===== Row 1: x² | 2x³ | 5x² ===== -->
  <rect class="hdr-bg" x="18" y="70" width="52" height="28" rx="6"/>
  <text class="hdr-tx" x="44" y="89" text-anchor="middle">x<tspan class="sup" dy="-4">2</tspan></text>

  <rect class="v-bg" x="74" y="70" width="52" height="28" rx="6"/>
  <text class="v-tx" x="100" y="89" text-anchor="middle">2x<tspan class="sup" dy="-4">3</tspan></text>

  <rect class="t-bg" x="130" y="70" width="52" height="28" rx="6"/>
  <text class="t-tx" x="156" y="89" text-anchor="middle">5x<tspan class="sup" dy="-4">2</tspan></text>

  <!-- ===== Row 2: −3x | −6x² | −15x ===== -->
  <rect class="hdr-bg" x="18" y="102" width="52" height="28" rx="6"/>
  <text class="hdr-tx" x="44" y="121" text-anchor="middle">−3x</text>

  <rect class="t-bg" x="74" y="102" width="52" height="28" rx="6"/>
  <text class="t-tx" x="100" y="121" text-anchor="middle">−6x<tspan class="sup" dy="-4">2</tspan></text>

  <rect class="a-bg" x="130" y="102" width="52" height="28" rx="6"/>
  <text class="a-tx" x="156" y="121" text-anchor="middle">−15x</text>

  <!-- ===== Row 3: 2 | 4x | 10 ===== -->
  <rect class="hdr-bg" x="18" y="134" width="52" height="28" rx="6"/>
  <text class="hdr-tx" x="44" y="153" text-anchor="middle">2</text>

  <rect class="a-bg" x="74" y="134" width="52" height="28" rx="6"/>
  <text class="a-tx" x="100" y="153" text-anchor="middle">4x</text>

  <rect class="i-bg" x="130" y="134" width="52" height="28" rx="6"/>
  <text class="i-tx" x="156" y="153" text-anchor="middle">10</text>
</svg>`
      },

    }
  }
}

export default function PolynomialMultiplicationCalculator({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Polynomial Multiplication</h1>
      <br/>
      <div style={{transform:'scale(0.9)'}}>
      <PolynomialMultiplicationVisualizer/>
      </div>
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
      {/* <KeyTermsCard
        id="0"
        title={sectionsContent.obj0.title}
        content={sectionsContent.obj0.content}
        after={sectionsContent.obj0.after}
        variant="light"
      /> */}
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}