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
// import DivisibilityTreeSVG from '@/app/components/divisibility/divisibility-tree'


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
//         title: "Divisibility Tree Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/visual-tools/divisibility-tree",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function DivisibilityTreePage({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-30px',marginBottom:'-60px'}}>Divisibility Decision Tree</h1>
//    <br/>
//    <div style={{transform:'scale(0.9)'}}>
//    <DivisibilityTreeSVG/>
//    </div>
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
import DivisibilityTreeSVG from '@/app/components/divisibility/divisibility-tree'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import divisibilityTreeDiagrams from '@/app/components/divisibility/divisibilityTreeDiagrams'


export async function getStaticProps(){

  const keyWords = [
    'divisibility decision tree',
    'divisibility rules visualization',
    'divisibility test tool',
    'divisibility checker 1-12',
    'interactive divisibility rules',
    'divisibility flowchart',
    'check divisibility online',
    'divisibility rules chart',
    'digit sum divisibility',
    'even odd divisibility',
    'divisibility by 3 6 9 rule',
    'divisibility tree diagram',
    'divisibility rules calculator',
    'learn divisibility rules',
    'divisibility rules interactive'
  ]

  const faqQuestions = {
    obj1: {
      question: "What are divisibility rules?",
      answer: "Divisibility rules are shortcuts that determine whether a number divides evenly by another without performing full division. For example, a number is divisible by 2 if it ends in an even digit, and divisible by 3 if its digit sum is divisible by 3. The decision tree visualizes these rules as a flowchart."
    },
    obj2: {
      question: "How do I use the Divisibility Decision Tree?",
      answer: "Enter any number between 1 and 9999 in the input field. The tree highlights the path your number takes through each divisibility test. Hover over any highlighted node to see a detailed explanation of why that rule passes or fails for your number."
    },
    obj3: {
      question: "Why does the tree check even/odd first?",
      answer: "Checking even or odd first eliminates half the divisors immediately. Odd numbers cannot be divisible by any even number (2, 4, 6, 8, 10, 12), so the tree skips those tests for odd inputs. This mirrors how mathematicians efficiently test divisibility."
    },
    obj4: {
      question: "What are derived divisibility rules?",
      answer: "Derived rules combine simpler tests. Divisibility by 6 requires passing both ÷2 and ÷3. Divisibility by 10 requires both ÷2 and ÷5. Divisibility by 12 requires both ÷3 and ÷4. The tree shows these as combined results at the bottom."
    },
    obj5: {
      question: "How does the digit sum rule work?",
      answer: "For divisibility by 3 or 9, add all digits of the number together. If that sum is divisible by 3, so is the original number. If the sum is divisible by 9, the original is divisible by 9. For example, 126 has digit sum 1+2+6=9, which is divisible by both 3 and 9."
    }
  }

  const sectionsContent = {

    obj1: {
      title: `How to Use the Decision Tree`,
      content: `Enter any whole number from 1 to 9999 in the input field at the top. The tree immediately highlights the path your number follows through each divisibility test. Blue nodes indicate active tests, while gray nodes show inactive branches.

Hover your cursor over any highlighted node to reveal a tooltip explaining the specific calculation. The tooltip shows exactly why each test passes or fails for your number, including the intermediate values used in the calculation.

The summary panel on the right displays all divisors from 1 to 12 that divide your number evenly. Green badges indicate successful division, while red badges show failed tests. Click **Reset** to clear your input and start fresh with a new number.`,
      before: ``,
      after: `Before any number is entered, the tree rests entirely in gray—and that resting view is worth a look of its own. The shape of the flowchart is the algorithm: parity decided first, the digit-sum pair next, then the independent tests for 5, 7, and 11, and the derived row last. Reading the gray tree top to bottom is reading the order in which a careful human would test divisibility by hand.

The gray state also shows what each node will need: the sublabels hold placeholders like "digit sum" and "ends 0/5" that fill with your number's actual values the moment you type. The [tree structure](!#understanding-the-tree-structure) section walks each region in detail.`,
      link: '',
    },

    obj2: {
      title: `Understanding the Tree Structure`,
      content: `The tree begins with an [even/odd check](!#the-even-odd-split) at the top. This fundamental split determines which branch your number follows. Even numbers proceed left through [tests for 2, 4, and 8](!#the-powers-of-two-chain). Odd numbers branch right and [immediately eliminate all even divisors](!#the-odd-shortcut) (2, 4, 6, 8, 10, 12).

Both branches merge before testing divisibility by 3. The [digit sum calculation](!#digit-sum-rules-for-3-and-9) appears in the node's sublabel. From the ÷3 result, the tree splits again to test ÷9, since divisibility by 9 requires [first passing ÷3](!#when-the-digit-sum-fails).

After merging again, the tree tests ÷5 (checking the last digit), ÷7 (direct division), and ÷11 (alternating digit sum). Finally, the **Derived** section at the bottom shows combined results for 6, 10, and 12 based on earlier tests. When every test from 2 to 12 fails, the summary flags the number as [only divisible by 1](!#only-divisible-by-1); before any input at all, the whole tree waits in gray, as described in [how to use the decision tree](!#how-to-use-the-decision-tree).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Tooltips`,
      content: `Each tooltip provides three pieces of information: the test name, the specific values from your number, and whether the test passes or fails.

For digit-based rules, tooltips show the actual calculation. When testing 126 for ÷3, you'll see: "Digit sum: 1+2+6 = 9. Since 9 ÷ 3 = 3, it's divisible." For position-based rules like ÷4, the tooltip displays: "Last two digits 26 ÷ 4 = 6.5 (not whole)."

Failed tests explain exactly what went wrong. If testing an odd number for ÷8, the tooltip states: "Can't be divisible by 8 without first being divisible by 4." This cascading logic helps you understand [why certain paths close off](!#when-the-digit-sum-fails).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Even/Odd Split`,
      content: `Every integer is either even or odd, and this property determines divisibility by all even numbers. The tree checks the last digit: if it's 0, 2, 4, 6, or 8, the number is even; otherwise it's odd.

Even numbers automatically pass ÷2 and proceed to test ÷4 and ÷8. These tests use the [last two and three digits](!#why-divisibility-rules-work) respectively. If 4 divides the last two digits evenly, the number passes ÷4. If 8 divides the last three digits evenly, it passes ÷8.

Odd numbers take a shorter path. Since no odd number can be divisible by any even number, the tree immediately marks ÷2, ÷4, ÷6, ÷8, ÷10, and ÷12 as failed. This efficient elimination demonstrates why checking parity first saves computational effort.`,
      before: ``,
      after: `The frozen 26 above shows the even path's most common shape: ÷2 comes free with the last digit, but 26 is not a multiple of 4, so the left ÷8 box never activates—the tree marks ÷8 blocked rather than tested. Failing and being blocked are different verdicts with the same badge: one ran a calculation, the other refused to.

When ÷4 does pass, the story continues down the [powers of two chain](!#the-powers-of-two-chain). And the right side of the split takes the drastic elimination described under [the odd shortcut](!#the-odd-shortcut)—six divisors gone before any arithmetic.`,
      link: '',
    },

    obj5: {
      title: `Digit Sum Rules for 3 and 9`,
      content: `The **digit sum** is the sum of all individual digits in a number. For 5,274 the digit sum is $5 + 2 + 7 + 4 = 18$. This simple calculation reveals divisibility by 3 and 9.

If the digit sum is divisible by 3, so is the original number. If the digit sum is divisible by 9, the original is divisible by 9. Since every multiple of 9 is also a multiple of 3, passing ÷9 guarantees passing ÷3, but not vice versa.

The tree displays the digit sum in the ÷3 node's sublabel (e.g., "sum=18"). Hovering reveals the full addition. When ÷3 passes, the tree proceeds to test whether that same digit sum also divides by 9. When ÷3 fails, ÷9 [automatically fails](!#when-the-digit-sum-fails) without further calculation.`,
      before: ``,
      after: `One computation serves two tests: the frozen 126 above shows sum 1+2+6 = 9 lighting the ÷3 node and then flowing unchanged into the ÷9 branch box, where the same 9 passes again. The tree never re-reads the number's digits—the digit sum is the number, as far as 3 and 9 are concerned.

That equivalence is the old bookkeeper's trick of casting out nines, and it rests on $10 \\equiv 1 \\pmod 9$: every place value collapses to 1, so only the digits' sum survives. The [why divisibility rules work](!#why-divisibility-rules-work) section carries the full argument.`,
      link: '',
    },

    obj6: {
      title: `Last Digit Rules for 5 and 10`,
      content: `Divisibility by 5 depends entirely on the last digit. If a number ends in 0 or 5, it's divisible by 5. Any other ending digit means the number is not divisible by 5. The tree displays the last digit in the ÷5 node's sublabel.

Divisibility by 10 combines two rules: the number must be divisible by both 2 and 5. In practice, this means the number must end in 0. Ending in 5 passes ÷5 but fails ÷2, so ÷10 fails. Ending in an even digit other than 0 passes ÷2 but fails ÷5.

The [derived section](!#derived-divisibility-6-10-and-12) at the bottom shows ÷10 as "(2∧5)" indicating it requires both conditions. The tree computes this automatically from your earlier ÷2 and ÷5 results.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Alternating Sum Rule for 11`,
      content: `Divisibility by 11 uses the **alternating digit sum**: subtract and add digits alternately from left to right. For 918,082: $9 - 1 + 8 - 0 + 8 - 2 = 22$. Since 22 is divisible by 11, so is 918,082.

The tree computes this alternating sum and displays it in the ÷11 node's sublabel (e.g., "alt=22"). Hovering shows whether the result divides evenly by 11.

This rule works because of how [place values relate to powers of 10](!#why-divisibility-rules-work) modulo 11. Each power of 10 alternates between +1 and -1 when reduced modulo 11, creating the alternating pattern. The result can be negative, zero, or positive—any multiple of 11 (including 0) indicates divisibility.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Derived Divisibility: 6, 10, and 12`,
      content: `Some divisibility tests combine simpler rules rather than using unique tests. The tree shows these as **Derived** results at the bottom.

**Divisibility by 6** requires passing both ÷2 and ÷3. The number must be even (ends in 0,2,4,6,8) AND have a [digit sum](!#digit-sum-rules-for-3-and-9) divisible by 3. Formula: (2∧3).

**Divisibility by 10** requires passing both ÷2 and ÷5. Only numbers ending in 0 satisfy both conditions. Formula: (2∧5).

**Divisibility by 12** requires passing both ÷3 and ÷4. The digit sum must be divisible by 3, AND the last two digits must form a number divisible by 4. Formula: (3∧4).

The derived boxes turn green or red based on combining the earlier test results, showing how composite divisibility rules build from prime and [prime-power factors](!#the-powers-of-two-chain).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Why Divisibility Rules Work`,
      content: `Divisibility rules exploit patterns in our base-10 number system. Each rule connects to how powers of 10 behave when divided by specific numbers.

For ÷2 and ÷5, the last digit suffices because 10 is divisible by both. All higher place values contribute multiples of 10, leaving only the units digit to determine divisibility.

For ÷3 and ÷9, digit sums work because $10 \\equiv 1 \\pmod{3}$ and $10 \\equiv 1 \\pmod{9}$. Each digit's contribution equals just the digit itself, regardless of its position.

For ÷4 and ÷8, the last two or three digits work because $100 \\equiv 0 \\pmod{4}$ and $1000 \\equiv 0 \\pmod{8}$. Higher place values contribute nothing to the remainder.

The decision tree's structure reflects these mathematical relationships, grouping related tests and showing logical dependencies.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Concepts and Tools`,
      content: `Divisibility connects to several fundamental number theory concepts:

**Prime Numbers**: Numbers divisible only by 1 and themselves. If the tree shows a number [divisible only by 1](!#only-divisible-by-1), it may be prime or divisible by something larger than 12.

**Prime Factorization**: Breaking numbers into prime factors reveals all divisibility relationships. A number is divisible by 6 because $6 = 2 × 3$.

**Greatest Common Divisor (GCD)**: The largest number dividing two integers evenly. Divisibility rules help identify shared factors quickly.

**Least Common Multiple (LCM)**: The smallest number divisible by two given integers. Understanding divisibility simplifies LCM calculations.

**Modular Arithmetic**: The remainder operation generalizes divisibility. A number is divisible by $n$ when its remainder modulo $n$ equals zero.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `The Odd Shortcut`,
      content: `When the [even/odd check](!#the-even-odd-split) comes back odd, the tree does something dramatic: a single node declares ÷2, ÷4, ÷6, ÷8, ÷10, and ÷12 all failed at once, and the entire left branch stays gray.

The logic is airtight. Every multiple of an even number is itself even—a multiple of 4 is $4k = 2(2k)$, a multiple of 6 is $6k = 2(3k)$, and so on. An odd number therefore cannot be a multiple of any of them, and no calculation is needed to know it.

Try 45: it ends in 5, so it is odd, and six divisors vanish immediately. The tests that remain—3, 5, 7, 9, 11—are exactly the odd divisors, and 45 still collects three of them (3, 5, and 9).`,
      before: ``,
      after: `The shortcut is a lesson in contrapositive reasoning: instead of proving "45 is not divisible by 8" by dividing, the tree proves "everything divisible by 8 is even; 45 is not even; done." Mathematics often trades a computation for a property, and this node is that trade drawn as a picture.

It is also an efficiency argument: one parity glance eliminates half the divisor list, which is why the tree tests it first. Note what the shortcut does not say—odd numbers can still be richly divisible. The remaining odd tests proceed exactly as for any number, starting with the [digit sum](!#digit-sum-rules-for-3-and-9).`,
      link: '',
    },

    obj12: {
      title: `The Powers of Two Chain`,
      content: `The even branch is not three independent tests but a chain: ÷2 reads the last digit, ÷4 reads the [last two digits](!#why-divisibility-rules-work), and ÷8 reads the last three—and each test is attempted only if the previous one passed.

The gating mirrors the mathematics. Since $8 = 2 × 4$, any multiple of 8 is automatically a multiple of 4; so if ÷4 fails, the tree marks ÷8 failed without dividing anything. The tooltip says it plainly: "Can't be divisible by 8 without first being divisible by 4."

Try 104: even, so ÷2 passes; last two digits 04 give $4 ÷ 4 = 1$, so ÷4 passes and unlocks the ÷8 box; last three digits give $104 ÷ 8 = 13$, and all three badges turn green.`,
      before: ``,
      after: `Each link of the chain halves the candidates: half of all numbers pass ÷2, a quarter pass ÷4, an eighth pass ÷8. The frozen 104 above is in the narrowest class, one number in every eight.

Why do more digits come into play at each step? Because $10$ is divisible by 2, $100$ by 4, and $1000$ by 8—each power of two needs one more decimal digit before the higher places become invisible to it. The chain would continue: ÷16 would need the last four digits, though this tree stops at 12. The same nested logic reappears on the other side of the tree with [3 and 9](!#digit-sum-rules-for-3-and-9), where one digit sum feeds two tests.`,
      link: '',
    },

    obj13: {
      title: `When the Digit Sum Fails`,
      content: `If the digit sum is not a multiple of 3, the tree takes its second shortcut: the right-hand branch box activates and ÷9 is refused without any arithmetic. Since $9 = 3 × 3$, every multiple of 9 is a multiple of 3—so failing ÷3 settles ÷9 for free.

Try 50: digit sum $5 + 0 = 5$, which is not a multiple of 3. The ÷3 node shows a red badge, the "÷3 ✗" branch box lights, and ÷9 inside it is marked failed-by-inheritance. Meanwhile the tests that do not depend on 3 continue normally—50 still passes ÷5 and ÷10.

The failure also propagates downward: the derived boxes for [6 and 12](!#derived-divisibility-6-10-and-12) both require ÷3, so both turn red the moment the digit sum misses.`,
      before: ``,
      after: `This is the same blocked-branch logic as the even side's ÷8 gate, applied to the odd prime: the tree encodes "9 needs 3" and "8 needs 4" as structure, not as calculations. A red badge can therefore mean two different things—a test that ran and failed, or a test that never needed to run—and the [tooltips](!#reading-the-tooltips) distinguish the two wordings.

There is a quiet completeness fact here too: the digit sum of any number is congruent to the number itself modulo 3, so no number can fail the digit-sum test yet secretly be divisible by 3. The shortcut never lies; the reasoning is spelled out under [why divisibility rules work](!#why-divisibility-rules-work).`,
      link: '',
    },

    obj14: {
      title: `Only Divisible by 1: Prime Suspects`,
      content: `Enter 13 and watch every test from 2 to 12 fail: odd, digit sum 4, ends in 3, no direct hit at 7, alternating sum −2. The summary panel then shows a special yellow note: only divisible by 1—this might be a prime number, or divisible by something larger than 12.

The hedge in that wording is honest. The tree only tests divisors up to 12, so it can suspect primality but never prove it. 13 happens to be prime; 169 = 13 × 13 produces exactly the same all-red display and is not prime, because its smallest factor is beyond the tree's reach.

Numbers in this state are the tree's most instructive failures: the entire flowchart lights up with red badges, and the [odd shortcut](!#the-odd-shortcut) usually does most of the eliminating in one stroke.`,
      before: ``,
      after: `To turn suspicion into proof, trial division only needs primes up to $\\sqrt{n}$: for a four-digit number that means checking primes up to 97, far past this tree's twelve divisors. The tree trades completeness for teachability—each of its twelve tests has a story, while a full primality check is just repetition.

A good exercise: hunt for the smallest impostor. A composite number always has a factor no larger than its square root, so any composite below $13^2 = 169$ must have a factor of 12 or less—and the tree will catch it. Numbers like 91 (= 7 × 13) never reach the yellow note because ÷7 exposes them. Below 169, therefore, every all-red number really is prime; 169 itself is the first composite to slip through. [Prime factorization](!#related-concepts-and-tools) is the systematic version of this reasoning.`,
      link: '',
    }

  }

  const seoData = {
    title: "Divisibility Decision Tree - Interactive Rules Chart | Learn Math Class",
    description: "Interactive divisibility decision tree for testing numbers 1-9999. Visualize divisibility rules for 2-12 with step-by-step explanations and hover tooltips.",
    keywords: keyWords.join(", "),
    url: "/arithmetic/visual-tools/divisibility-tree",
    name: "Divisibility Decision Tree Interactive Tool",
    category: "Divisibility & Remainders"
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Divisibility Decision Tree",
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
        "Interactive SVG decision tree visualization",
        "Tests divisibility by 2 through 12",
        "Hover tooltips with detailed explanations",
        "Even/odd branching logic",
        "Digit sum and alternating sum displays",
        "Derived divisor calculations (6, 10, 12)",
        "Summary panel with pass/fail badges"
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
      "educationalLevel": "Elementary School, Middle School, High School",
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
          "name": "Divisibility Decision Tree",
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

  // Frozen-state framed units (Line 1): the tree's seven display configurations.
  const d = divisibilityTreeDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    empty: u('empty', 'No input, frozen',
      'Every node waits in gray. The shape is already the algorithm: parity first, the digit-sum pair next, then the loners 5, 7, and 11, and the derived row last.'),
    evenPath: u('evenPath', '26 entered, frozen',
      'The even branch lights: ÷2 comes free, but 26 fails ÷4, so the ÷8 box stays shut — blocked without a test, not merely failed.'),
    oddPath: u('oddPath', '45 entered, frozen',
      'The single odd node eliminates six divisors at once; the action moves below the merge, where 45 collects ÷3, ÷9, and ÷5.'),
    eightChain: u('eightChain', '104 entered, frozen',
      'The full chain: 04 passes ÷4 and unlocks ÷8, where 104 ÷ 8 = 13 lands it — three green badges down the powers of two.'),
    threePass: u('threePass', '126 entered, frozen',
      'Digit sum 1+2+6 = 9 lights ÷3 and flows into the ÷9 box, where the same 9 passes again — plus a direct-division hit at ÷7.'),
    threeFail: u('threeFail', '50 entered, frozen',
      'Digit sum 5 is no multiple of 3, so the right branch box takes over: ÷9 refused without arithmetic. The last digit 0 still delivers ÷5 and ÷10.'),
    primeLike: u('primeLike', '13 entered, frozen',
      'Every badge from 2 to 12 is red; only 1 remains. The tree cannot tell a prime from a number with large factors — 13 happens to be prime.'),
  };

  // Per-state panel explanations (Line 1). Rendered at the bottom of the tool's
  // summary panel through processContent — parity and digit-sum entries can
  // appear together; same-page !# anchors work.
  const explanations = {
    empty: `The tree is waiting: every node stays gray until a number gives it a path to light. Enter anything from 1 to 9999. [Learn more about using the tree](!#how-to-use-the-decision-tree) · [Tree structure](!#understanding-the-tree-structure)`,
    evenPath: `An even number keeps the left branch alive — ÷2 passes for free, but the last two digits failed ÷4, so ÷8 is blocked without a test. [Learn more about the even path](!#the-even-odd-split) · [Tree structure](!#understanding-the-tree-structure)`,
    oddPath: `One glance at the last digit closed half the tree: an odd number cannot be divisible by 2, 4, 6, 8, 10, or 12. [Learn more about the odd shortcut](!#the-odd-shortcut) · [Tree structure](!#understanding-the-tree-structure)`,
    eightChain: `The last two digits passed ÷4, which unlocks the ÷8 test — the powers of two are checked as a chain, each gating the next. [Learn more about the 2-4-8 chain](!#the-powers-of-two-chain) · [Tree structure](!#understanding-the-tree-structure)`,
    threePass: `The digit sum is a multiple of 3, so ÷3 passes and the very same sum moves on to the ÷9 test. [Learn more about digit sums](!#digit-sum-rules-for-3-and-9) · [Tree structure](!#understanding-the-tree-structure)`,
    threeFail: `The digit sum missed every multiple of 3, so ÷3 fails — and ÷9 is refused without a calculation, since 9 needs 3 first. [Learn more about the blocked branch](!#when-the-digit-sum-fails) · [Tree structure](!#understanding-the-tree-structure)`,
    primeLike: `Every test from 2 to 12 failed — only 1 divides this number. It may be prime, or its factors may simply be larger than 12. [Learn more about prime suspects](!#only-divisible-by-1) · [Tree structure](!#understanding-the-tree-structure)`,
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

export default function DivisibilityTreePage({
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
    stateRow('obj1', 'how-to-use-the-decision-tree', 'empty'),
    plain('obj2', 'understanding-the-tree-structure'),
    plain('obj3', 'reading-the-tooltips'),
    stateRow('obj4', 'the-even-odd-split', 'evenPath'),
    stateRow('obj11', 'the-odd-shortcut', 'oddPath'),
    stateRow('obj12', 'the-powers-of-two-chain', 'eightChain'),
    stateRow('obj5', 'digit-sum-rules-for-3-and-9', 'threePass'),
    stateRow('obj13', 'when-the-digit-sum-fails', 'threeFail'),
    plain('obj6', 'last-digit-rules-for-5-and-10'),
    plain('obj7', 'the-alternating-sum-rule-for-11'),
    plain('obj8', 'derived-divisibility-6-10-and-12'),
    stateRow('obj14', 'only-divisible-by-1', 'primeLike'),
    plain('obj9', 'why-divisibility-rules-work'),
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Divisibility Decision Tree</h1>
      <br/>
      <div style={{transform:'scale(0.95)'}}>
        <DivisibilityTreeSVG explanations={explanations}/>
      </div>
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