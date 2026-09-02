// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import DivisibilityTiles from '../../../../app/components/divisibility/DivisibilityTiles'


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
//         url: "/arithmetic/visual-tools/divisibility-tiles",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function DivisibilityTilesPage({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Divisibility Tiles</h1>
//    <br/>
//    <DivisibilityTiles/>
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
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import DivisibilityTiles from '../../../../app/components/divisibility/DivisibilityTiles'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import divisibilityTilesDiagrams from '@/app/components/divisibility/divisibilityTilesDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'divisibility tiles',
    'divisibility visualization',
    'division visual tool',
    'divisibility checker',
    'remainder calculator',
    'divisibility interactive',
    'visual division tool',
    'divisibility rules visualization',
    'check divisibility online',
    'division with remainder visual',
    'divisibility learning tool',
    'modulo visualization',
    'factors and divisibility',
    'divisibility for kids',
    'interactive division calculator'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is divisibility?",
      answer: "Divisibility means one number divides evenly into another with no remainder. For example, 12 is divisible by 4 because 12 ÷ 4 = 3 with zero remainder. The Divisibility Tiles tool visualizes this by grouping tiles and showing any leftover."
    },
    obj2: {
      question: "How do I use the Divisibility Tiles tool?",
      answer: "Enter a number between 1 and 100, select a divisor from 2 to 9, then click Group. The tool arranges your tiles into equal groups and highlights any remainder in yellow. The result banner shows how many complete groups form and how many tiles are left over."
    },
    obj3: {
      question: "What does the remainder mean in division?",
      answer: "The remainder is what's left over after making as many complete groups as possible. If you divide 23 by 5, you get 4 complete groups of 5 (totaling 20) with 3 tiles remaining. A remainder of zero means the number is divisible."
    },
    obj4: {
      question: "How can I tell if a number is divisible by another?",
      answer: "A number is divisible by another when the remainder is zero. In the tool, divisible numbers show a green checkmark and the message 'Divisible!' When not divisible, you'll see the leftover count in yellow and suggestions for nearby divisible numbers."
    },
    obj5: {
      question: "Why are divisibility rules important?",
      answer: "Divisibility rules help simplify fractions, find factors, and solve problems faster without long division. Understanding divisibility builds foundation for working with prime numbers, greatest common divisors, and least common multiples."
    }
  }

  const sectionsContent = {

    obj1: {
      title: `How to Use Divisibility Tiles`,
      content: `This interactive tool helps you visualize how numbers divide into equal groups. Start by entering any number between 1 and 100 in the Number field. The tool displays your number as a [grid of gray tiles](!#understanding-the-tiles-display), arranged in rows of 10 for easy counting.

Next, select a divisor by clicking one of the buttons labeled 2 through 9. This determines how many tiles will be in each group when you perform the division.

Click the **Group** button to see the magic happen. The tool rearranges all tiles into equal-sized groups based on your chosen divisor. Blue groups show complete sets, while any [leftover tiles](!#division-quotients-and-remainders) appear in a yellow group. Click **Reset** to return to the original grid view and try a different divisor. A perfect split with no yellow at all is what [divisibility](!#what-is-divisibility) means—and if the divisor is larger than the number itself, [no complete group forms](!#when-the-divisor-is-larger).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding the Tiles Display`,
      content: `The tiles area provides two distinct views of your number. In the default ungrouped view, tiles appear as gray squares arranged in a 10-column grid. This layout makes it easy to count by tens and quickly verify your input number.

When you click Group, the display transforms to show the division result. Complete groups appear as blue tiles enclosed in light blue boxes, each labeled with the group size. If your number doesn't divide evenly, leftover tiles display in bright yellow with an amber border, making the **remainder** immediately visible.

The visual contrast between blue groups and yellow leftovers provides instant feedback about divisibility. Equal-sized blue boxes mean perfect division, while any yellow tiles indicate a remainder exists.`,
      before: ``,
      after: `The rows-of-ten arrangement is deliberate: it mirrors base-ten notation, so a number like 23 is readable at a glance as two full rows and three extra tiles—the tens digit and the units digit made physical.

Both views show the same count; only the organizing question changes. Ungrouped, the tiles just state the number. Grouped, they answer whether that number splits evenly, and the [result banner](!#reading-the-result-banner) records the verdict in symbols.`,
      link: '',
    },

    obj3: {
      title: `Reading the Result Banner`,
      content: `The blue result banner above the tiles area summarizes your division in plain language. Before grouping, it simply shows your tile count (for example, "23 tiles").

After clicking Group, the banner updates to show the complete result. For a number like 23 divided by 5, you'll see: **4 groups of 5 + 3 leftover**. This corresponds to the division equation $23 ÷ 5 = 4$ [remainder](!#division-quotients-and-remainders) $3$.

When a number divides evenly, the banner displays only the group count followed by a green checkmark and "Divisible ✓". For instance, dividing 20 by 5 shows: **4 groups of 5 — Divisible ✓**. This visual confirmation helps reinforce when remainders are zero.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Using the Explanation Panel`,
      content: `The right side of the tool contains a step-by-step explanation panel that walks through the division process. Before grouping, it presents the starting point and poses the question: can we divide these tiles into equal groups?

After grouping, the panel shows numbered steps with mathematical notation. Step 1 displays the division equation with the quotient and remainder. Step 2 shows the multiplication check: groups times divisor equals the portion that divides evenly.

When a remainder exists, Step 3 appears with yellow highlighting, showing the subtraction that yields the leftover: $\\text{number} - (\\text{groups} × \\text{divisor}) = \\text{remainder}$. The conclusion box at the bottom confirms whether the number is [divisible](!#what-is-divisibility) (green) or not (yellow).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Finding Nearby Divisible Numbers`,
      content: `When a number isn't divisible by your chosen divisor, the tool provides a helpful hint showing nearby numbers that would divide evenly. This feature appears in a light blue box below the conclusion.

The hint suggests two options: subtract the remainder to find a smaller divisible number, or add enough to reach the next divisible number. For 23 ÷ 5, the hint shows:

- Subtract 3 to get **20** (which gives 4 groups of 5)
- Add 2 to get **25** (which gives 5 groups of 5)

This feature helps students understand the relationship between consecutive [multiples](!#divisibility-and-factors) and see how close any number is to being divisible by a given divisor.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `What is Divisibility?`,
      content: `**Divisibility** describes whether one integer divides another exactly, leaving no remainder. We say $a$ is divisible by $b$ when there exists an integer $k$ such that $a = b × k$. For example, 24 is divisible by 6 because $24 = 6 × 4$.

The notation $b | a$ means "b divides a" and indicates that $a$ is a **multiple** of $b$. Equivalently, $b$ is a **factor** (or divisor) of $a$. Understanding divisibility is fundamental to working with fractions, finding common denominators, and factoring numbers.

Divisibility connects directly to the concept of [remainders](!#division-quotients-and-remainders). When $a ÷ b$ produces remainder $r$, we write $a = b × q + r$ where $q$ is the quotient. When $r = 0$, divisibility holds.`,
      before: ``,
      after: `The frozen frame above is the definition made visible: twenty tiles, four boxes of five, and nothing outside a box. The witness $k$ in $a = b × k$ is simply the number of blue boxes—divisibility is not an abstract property but a successful packing.

Note what the picture rules out: there is no way to draw a fifth box, and no partial box is allowed. That all-or-nothing character is why divisibility questions have clean yes/no answers, and why the [common divisibility rules](!#common-divisibility-rules) can decide them from digits alone without drawing a single tile.`,
      link: '',
    },

    obj7: {
      title: `Division, Quotients, and Remainders`,
      content: `Every division of positive integers produces a quotient and remainder. The **division algorithm** states that for any integers $a$ and $b$ (with $b > 0$), there exist unique integers $q$ (quotient) and $r$ (remainder) such that:

$$a = b × q + r \\text{ where } 0 ≤ r < b$$

The quotient tells how many complete groups of size $b$ fit into $a$. The remainder is what's left over after forming those groups. In the Divisibility Tiles tool, blue groups represent the quotient while yellow tiles represent the remainder.

The **modulo operation** extracts just the remainder: $a \\mod b = r$. For instance, $23 \\mod 5 = 3$. This operation appears throughout mathematics and computer science for cyclic patterns and clock arithmetic.`,
      before: ``,
      after: `The frozen 23 ÷ 5 above shows why the division algorithm's constraint $0 ≤ r < b$ is forced: three yellow tiles cannot form a fourth-and-a-bit blue box, and if five could ever be left over they would immediately close another complete group. The remainder is small precisely because grouping is greedy.

Uniqueness matters too: for a given number and divisor there is exactly one way to fill the picture—one group count, one leftover. Two edge cases bracket the idea: a remainder of zero collapses the yellow box entirely, and a [quotient of zero](!#when-the-divisor-is-larger) leaves nothing but yellow. When the split fails, the [hint below the conclusion](!#finding-nearby-divisible-numbers) names the nearest numbers that would succeed.`,
      link: '',
    },

    obj8: {
      title: `Common Divisibility Rules`,
      content: `Quick divisibility rules help determine if a number divides evenly without performing full division:

- **Divisible by 2**: Last digit is even (0, 2, 4, 6, 8)
- **Divisible by 3**: Sum of digits is divisible by 3
- **Divisible by 4**: Last two digits form a number divisible by 4
- **Divisible by 5**: Last digit is 0 or 5
- **Divisible by 6**: Divisible by both 2 and 3
- **Divisible by 9**: Sum of digits is divisible by 9

Use the Divisibility Tiles tool to verify these rules visually. Enter a number, select the divisor, and observe whether groups form perfectly or [leave remainders](!#division-quotients-and-remainders). This hands-on approach builds intuition for why these rules work.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Divisibility and Factors`,
      content: `The divisors of a number $n$ are all integers that divide $n$ evenly. For example, the divisors of 12 are: 1, 2, 3, 4, 6, and 12. Each divisor produces [zero remainder](!#what-is-divisibility) when dividing into 12.

**Prime numbers** have exactly two divisors: 1 and themselves. Numbers like 2, 3, 5, 7, 11, and 13 cannot be split into smaller equal groups (other than groups of 1). Use the Divisibility Tiles tool to explore primes—try dividing a prime by various divisors and notice that none produce zero remainder.

**Composite numbers** have more than two divisors. The number 12 is composite because multiple divisors exist. Finding all divisors connects to **prime factorization**, where every composite number breaks down into a product of primes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `Divisibility connects to many foundational arithmetic and number theory topics:

**Factors and Multiples**: Understanding which numbers divide evenly leads to finding all factors of a number and recognizing multiples of common divisors.

**Greatest Common Divisor (GCD)**: The largest number that divides two integers evenly. Essential for simplifying **fractions** to lowest terms.

**Least Common Multiple (LCM)**: The smallest number divisible by two given integers. Used when adding fractions with different denominators.

**Prime Factorization**: Breaking numbers into prime factors reveals all divisibility relationships and provides a systematic approach to finding GCD and LCM.

**Modular Arithmetic**: Extends [remainder concepts](!#division-quotients-and-remainders) into a complete number system used in cryptography, computer science, and advanced mathematics.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `When the Divisor Is Larger Than the Number`,
      content: `What happens when you try to divide 3 tiles into groups of 5? Not even one complete group can form. The tool shows zero blue boxes and all three tiles in yellow, and the banner reads: **0 groups of 5 + 3 leftover**.

This is a perfectly legal division—just an extreme one. The [quotient](!#division-quotients-and-remainders) is 0 and the remainder equals the number itself: $3 = 5 × 0 + 3$. The division algorithm's condition $0 ≤ r < b$ still holds, because 3 is less than 5.

Try it in the tool: enter any number smaller than your chosen divisor and click Group. The all-yellow display makes the case memorable—division did not fail, it simply produced nothing but leftover.`,
      before: ``,
      after: `The case matters beyond curiosity. It anchors the general fact that any number smaller than the divisor is its own remainder—which is exactly why $a \\mod b$ leaves small numbers untouched, and why clock arithmetic reads 3 o'clock as simply 3.

It also completes the tool's spectrum of outcomes: all blue (divisible), blue with yellow (a proper remainder), and all yellow (quotient zero). The [nearby-numbers hint](!#finding-nearby-divisible-numbers) still works here: for 3 ÷ 5 it points down to 0 and up to 5, the two nearest multiples.`,
      link: '',
    }

  }

  const seoData = {
    title: "Divisibility Tiles - Visual Division Tool | Learn Math Class",
    description: "Interactive divisibility visualization tool. Group tiles to see division, remainders, and check divisibility for numbers 1-100 with divisors 2-9.",
    keywords: keyWords.join(", "),
    url: "/arithmetic/visual-tools/divisibility-tiles",
    name: "Divisibility Tiles Interactive Visualizer",
    category: "Divisibility & Remainders",
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><text x="40" y="11" font-family="Georgia,serif" font-size="9" fill="#E6F1FB" text-anchor="middle" font-style="italic">14 ÷ 4</text><rect x="8" y="17" width="20" height="24" rx="2" fill="none" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="2,1.5"/><rect x="32" y="17" width="20" height="24" rx="2" fill="none" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="2,1.5"/><rect x="56" y="17" width="20" height="24" rx="2" fill="none" stroke="#B5D4F4" stroke-width="0.8" stroke-dasharray="2,1.5"/><rect x="10" y="19" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="18" y="19" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="10" y="29" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="18" y="29" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="34" y="19" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="42" y="19" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="34" y="29" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="42" y="29" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="58" y="19" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="66" y="19" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="58" y="29" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="66" y="29" width="8" height="9" fill="#85B7EB" stroke="#0C447C" stroke-width="0.9"/><rect x="16" y="50" width="30" height="17" rx="2" fill="none" stroke="#FAC775" stroke-width="0.9" stroke-dasharray="2,1.5"/><rect x="20" y="54" width="8" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="32" y="54" width="8" height="9" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="62" y="62" font-family="Georgia,serif" font-size="9" fill="#FAC775" text-anchor="middle" font-style="italic">r = 2</text></svg>`
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Divisibility Tiles - Interactive Division Visualizer",
      "description": seoData.description,
      "url": `https://www.learnmathclass.com${seoData.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Visual tile representation of numbers 1-100",
        "Divisor selection from 2 to 9",
        "Animated grouping visualization",
        "Remainder highlighting in yellow",
        "Step-by-step division explanation",
        "Nearby divisible number suggestions",
        "Instant divisibility checking"
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
      "educationalLevel": "Elementary School, Middle School",
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
          "name": "Arithmetic",
          "item": "https://www.learnmathclass.com/arithmetic"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Divisibility Tiles",
          "item": `https://www.learnmathclass.com${seoData.url}`
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

  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }

  // Frozen-state framed units (Line 1): the tool's four display outcomes.
  const d = divisibilityTilesDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    ungrouped: u('ungrouped', '23 tiles, ungrouped, frozen',
      'Twenty-three gray tiles in rows of ten: two full rows and three more. The layout states the number before any question about grouping is asked.'),
    divisible: u('divisible', '20 ÷ 5, frozen',
      'Four blue boxes of five tiles each, and nothing outside them: 20 = 4 × 5 exactly, so the banner reports Divisible ✓.'),
    remainder: u('remainder', '23 ÷ 5, frozen',
      'Four complete blue groups absorb twenty tiles; the three that would not fit glow yellow — the remainder the equation writes as 23 = 4 × 5 + 3.'),
    zeroGroups: u('zeroGroups', '3 ÷ 5, frozen',
      'With only three tiles, no group of five can form: zero blue boxes and every tile yellow — 3 = 5 × 0 + 3.'),
  };

  // Per-state panel explanations (Line 1). Rendered at the bottom of the tool's
  // Explanation column through processContent — same-page !# anchors work.
  const explanations = {
    ungrouped: `The grid shows your number as unit tiles in rows of ten — nothing is decided yet; grouping will ask whether they split into equal sets. [Learn more about the tiles display](!#understanding-the-tiles-display) · [How the tool works](!#how-to-use-divisibility-tiles)`,
    divisible: `Every tile landed in a complete blue group and none are left over — the remainder is zero, which is exactly what divisibility means. [Learn more about divisibility](!#what-is-divisibility) · [How the tool works](!#how-to-use-divisibility-tiles)`,
    remainder: `The yellow tiles are the remainder: what stays after the largest possible number of complete groups has been formed. [Learn more about quotients and remainders](!#division-quotients-and-remainders) · [How the tool works](!#how-to-use-divisibility-tiles)`,
    zeroGroups: `The divisor is larger than the number, so not even one complete group forms — the quotient is 0 and every tile is leftover. [Learn more about this edge case](!#when-the-divisor-is-larger) · [How the tool works](!#how-to-use-divisibility-tiles)`,
  };

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData,
      stateUnits,
      explanations
    }
  }
}

export default function DivisibilityTilesPage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas,
  stateUnits,
  explanations
}) {

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
    plain('obj1', 'how-to-use-divisibility-tiles'),
    stateRow('obj2', 'understanding-the-tiles-display', 'ungrouped'),
    plain('obj3', 'reading-the-result-banner'),
    plain('obj4', 'using-the-explanation-panel'),
    plain('obj5', 'finding-nearby-divisible-numbers'),
    stateRow('obj6', 'what-is-divisibility', 'divisible'),
    stateRow('obj7', 'division-quotients-and-remainders', 'remainder'),
    stateRow('obj11', 'when-the-divisor-is-larger', 'zeroGroups'),
    plain('obj8', 'common-divisibility-rules'),
    plain('obj9', 'divisibility-and-factors'),
    plain('obj10', 'related-concepts-and-tools'),
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
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
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.webApplication)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.breadcrumb)
          }}
        />

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(schemas.faq)
          }}
        />
      </Head>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <OperaSidebar 
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      /> 
      <Breadcrumb/>
      <br/>
      <br/>
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Divisibility Tiles</h1>
      <br/>
      <DivisibilityTiles explanations={explanations}/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}