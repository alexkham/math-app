// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../../pages/pages.css';
// import Head from 'next/head'
// import DivisibilityTable from '@/app/components/divisibility/divisibility-table'


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
//         title: "Divisibility Table Visual Page | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/visual-tools/divisibility-table",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Divisibility Table</h1>
//    <br/>
//    {/* Add this just before <DivisibilityTable/> in the page */}

// <div style={{
//   background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
//   border: '2px solid #7dd3fc',
//   borderRadius: '12px',
//   padding: '20px 24px',
//   marginBottom: '20px',
//   maxWidth: '1000px',
//   marginLeft: 'auto',
//   marginRight: 'auto'
// }}>
//   <h3 style={{
//     fontSize: '1.1rem',
//     fontWeight: '700',
//     color: '#0369a1',
//     margin: '0 0 12px 0',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px'
//   }}>
//     <span style={{ fontSize: '1.3rem' }}>💡</span> How to Use This Tool
//   </h3>
  
//   <div style={{
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//     gap: '16px',
//     fontSize: '0.9rem',
//     color: '#334155'
//   }}>
//     <div>
//       <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
//         Select Divisors
//       </p>
//       <p style={{ margin: 0, lineHeight: '1.5' }}>
//         Click any <strong>÷ button</strong> to highlight all numbers divisible by that value. 
//         Select multiple divisors to see numbers divisible by any of them. Click again to deselect.
//       </p>
//     </div>
    
//     <div>
//       <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
//         Explore Numbers
//       </p>
//       <p style={{ margin: 0, lineHeight: '1.5' }}>
//         <strong>Hover over any number</strong> in the grid to see all its divisors (1-12) 
//         and the divisibility rule explanation for each one.
//       </p>
//     </div>
    
//     <div>
//       <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
//         Learn the Rules
//       </p>
//       <p style={{ margin: 0, lineHeight: '1.5' }}>
//         The tooltip shows <strong>why</strong> each number is divisible—digit sums for 3 and 9, 
//         last digits for 2, 5, and 10, and combined rules for 6 and 12.
//       </p>
//     </div>
//   </div>
// </div>
//    <DivisibilityTable/>
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
import DivisibilityTable from '@/app/components/divisibility/divisibility-table'
import demoUnitFrame from '../../../../app/components/demo-unit/demoUnitFrame'
import divisibilityTableDiagrams from '@/app/components/divisibility/divisibilityTableDiagrams'


export async function getStaticProps(){

  const keyWords = [
    "divisibility table",
    "divisibility rules",
    "divisibility chart",
    "divisible by 2 3 4 5 6",
    "divisibility test",
    "divisibility rules 1-12",
    "number divisibility checker",
    "divisibility patterns",
    "interactive divisibility",
    "divisibility rules chart",
    "divisibility calculator",
    "math divisibility",
    "divisibility visualization",
    "divisibility rules explained",
    "factors and divisibility"
  ]

  const sectionsContent = {

    obj1: {
      title: `Selecting Divisors`,
      content: `Click any divisor button (÷1 through ÷12) at the top of the grid to highlight all numbers from 0 to 100 that are divisible by that value. The button turns blue when active, and matching numbers in the grid become highlighted with a light blue background.

You can select multiple divisors simultaneously. When multiple divisors are selected, the grid highlights numbers divisible by any of the selected values. This lets you [compare divisibility patterns](!#combining-divisors)—for example, selecting both ÷2 and ÷3 shows all even numbers plus all multiples of 3.

Click a selected divisor again to deselect it. Use the red ✕ button to clear all selections at once and reset the grid to its default state.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Hovering for Divisibility Details`,
      content: `Hover over any number in the grid to see a detailed tooltip. The tooltip displays all divisors from 1 to 12 that evenly divide that number, along with an explanation of why each [divisibility rule](!#the-twelve-divisibility-rules) works.

For example, hovering over 36 shows it's divisible by 1, 2, 3, 4, 6, 9, and 12. Each divisor includes a brief explanation: "Last digit 6 is even" for ÷2, or "3+6=9, ÷9✓" for ÷9.

The hovered cell enlarges and turns blue, making it easy to track which number you're examining. The tooltip appears above the number (or below for 0) and follows your cursor as you explore different cells.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Understanding the Grid Layout`,
      content: `The grid displays numbers 0 through 100 arranged in 17 columns. This layout makes it easy to spot vertical patterns when divisors are selected.

Number 0 is special: it's [divisible](!#what-is-divisibility) by every number (since 0 ÷ n = 0 for any n). The tooltip for 0 shows all twelve divisors with the explanation "0 ÷ anything = 0."

Number 1 is only divisible by itself. All other numbers have at least two divisors (1 and the number itself), with composite numbers having additional divisors between them.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Divisibility Rule for 2`,
      content: `A number is divisible by 2 if its last digit is even (0, 2, 4, 6, or 8). This is the simplest divisibility test because you only need to check one digit.

When you select ÷2, exactly half the grid lights up—all the even numbers. Notice how they form a checkerboard-like pattern in the grid.

The tooltip shows "Last digit X is even" for any number divisible by 2. For example, 48 shows "Last digit 8 is even" to explain why 48 ÷ 2 = 24 works.`,
      before: ``,
      after: `Parity is the first classification most people meet, and this rule is its test: the last digit decides because every higher place value—10, 100, 1000—is even, so only the units digit can break evenness.

In the 17-column layout the even cells shift by one column every row, since 17 is odd—that is what weaves the diagonal texture in the frozen frame above. The next power of two sharpens the test: the [rule for 4](!#divisibility-rule-for-4) reads two trailing digits instead of one.`,
      link: '',
    },

    obj5: {
      title: `Divisibility Rule for 3`,
      content: `A number is divisible by 3 if the sum of its digits is divisible by 3. This rule works because 10 ≡ 1 (mod 3), so each digit contributes its face value to the remainder.

The tooltip shows the digit sum calculation. For 87, it displays "8+7=15, ÷3✓" because 15 is divisible by 3 (15 = 3 × 5), confirming that 87 ÷ 3 = 29.

Try selecting ÷3 and notice how multiples of 3 are spread throughout the grid—every third number starting from 0, 3, 6, 9, and so on.`,
      before: ``,
      after: `The digit-sum test is really modular arithmetic in disguise: because every power of 10 leaves remainder 1 when divided by 3, a number and its digit sum always leave the same remainder. The full argument is spelled out in [why divisibility rules work](!#why-divisibility-rules-work).

The test is also repeatable: if the digit sum is still large, sum its digits again. For 87 the first pass gives 15, the second gives 6—divisible by 3, so 87 is too. The same mechanism powers the stricter [rule for 9](!#divisibility-rule-for-9).`,
      link: '',
    },

    obj6: {
      title: `Divisibility Rule for 4`,
      content: `A number is divisible by 4 if its last two digits form a number divisible by 4. This works because 100 is divisible by 4, so only the final two digits matter.

For two-digit numbers in this grid, you check the entire number. The tooltip shows "XX ÷ 4 = Y" with the exact division. For example, 76 shows "76 ÷ 4 = 19."

Select ÷4 to see that every fourth number is highlighted. Compare with ÷2—all numbers divisible by 4 are also [divisible by 2](!#divisibility-rule-for-2), but not vice versa.`,
      before: ``,
      after: `One hundred is 4 × 25, so hundreds and above are invisible to this test—only the tens and units survive the division. That is also why the rule scales: 124, 224, and 924 all stand or fall together on "24."

Within the grid, note the spacing: every other even number qualifies. The even numbers split almost evenly into multiples of 4 (26 cells here) and the rest (25 cells)—select ÷2 and ÷4 in turn to see the thinning. One more doubling gives the [rule for 8](!#divisibility-rule-for-8).`,
      link: '',
    },

    obj7: {
      title: `Divisibility Rule for 5`,
      content: `A number is divisible by 5 if its last digit is 0 or 5. Like the [rule for 2](!#divisibility-rule-for-2), you only need to check the final digit.

The tooltip displays "Ends in X" where X is 0 or 5. For 45, it shows "Ends in 5" to confirm divisibility.

When you select ÷5, you'll see two columns light up in the grid—numbers ending in 0 and numbers ending in 5. This creates a distinctive striped pattern that's easy to recognize.`,
      before: ``,
      after: `Five and ten are the divisors our base-10 notation favors most: since 10 = 2 × 5, a single final digit carries complete information about divisibility by 5, by 2, and by 10.

The 21 highlighted cells split into two families—eleven ending in 0 and ten ending in 5. The first family is exactly the pattern of the [rule for 10](!#divisibility-rule-for-10); the second is what ÷5 adds beyond it.`,
      link: '',
    },

    obj8: {
      title: `Divisibility Rule for 6`,
      content: `A number is divisible by 6 if it's divisible by both 2 and 3. Since 6 = 2 × 3 and these factors share no common divisors, both conditions must be met.

The tooltip shows "÷2 and ÷3 both work" for numbers divisible by 6. This reminds you that 6 is a composite rule requiring two separate checks.

Try selecting ÷6, then compare by selecting [÷2](!#divisibility-rule-for-2) and [÷3](!#divisibility-rule-for-3) together. The ÷6 highlights are exactly where the ÷2 and ÷3 patterns overlap—numbers that satisfy both conditions.`,
      before: ``,
      after: `The composite test works only because 2 and 3 are coprime—they share no prime factor, so their conditions are independent and together equivalent to divisibility by 6. Contrast 4 = 2 × 2: divisibility by 4 cannot be tested as "even, checked twice."

This intersection idea generalizes: whenever a divisor factors into coprime pieces, its test splits into the pieces' tests—the [rule for 12](!#divisibility-rule-for-12) is built the same way. The tool's multi-select inverts the picture: [combining divisors](!#combining-divisors) shows the union of ÷2 and ÷3, of which the ÷6 pattern is the overlap.`,
      link: '',
    },

    obj9: {
      title: `Divisibility Rule for 9`,
      content: `A number is divisible by 9 if the sum of its digits is divisible by 9. This is the same principle as the [rule for 3](!#divisibility-rule-for-3), but with a stricter requirement.

The tooltip shows the digit sum, just like for 3. For 81, it displays "8+1=9, ÷9✓" because 9 is divisible by 9.

Notice that all numbers divisible by 9 are also divisible by 3 (since 9 = 3 × 3), but not all multiples of 3 are multiples of 9. Select both ÷3 and ÷9 to see how ÷9 highlights form a subset of ÷3 highlights.`,
      before: ``,
      after: `Casting out nines—the centuries-old bookkeeping check—rests on this rule: a number's digit sum preserves its remainder on division by 9, so an arithmetic slip that changes the remainder is caught by re-summing digits.

The subset picture is exact: 12 cells light under ÷9, all of them among the 34 that light under ÷3, because any digit sum divisible by 9 is automatically divisible by 3. The converse fails at 3, 6, 12, 21, and so on—multiples of 3 whose digit sums stop at 3 or 6.`,
      link: '',
    },

    obj10: {
      title: `Divisibility Rule for 10`,
      content: `A number is divisible by 10 if its last digit is 0. This is the strictest single-digit test—only numbers ending in zero qualify.

The tooltip simply shows "Ends in 0" for these numbers. In our 0-100 grid, exactly eleven numbers are divisible by 10: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, and 100.

Since 10 = 2 × 5, every number divisible by 10 is also divisible by both 2 and 5. Select all three to verify this relationship.`,
      before: ``,
      after: `Divisibility by 10 is what place value makes trivial: appending a zero multiplies by ten, so a trailing zero is both necessary and sufficient.

The rule also composes: the highlighted cells are precisely where the patterns of the [rule for 2](!#divisibility-rule-for-2) and the [rule for 5](!#divisibility-rule-for-5) intersect. Selecting all three buttons adds nothing beyond ÷2 and ÷5 alone—the multi-select shows a union that hides this intersection, as [combining divisors](!#combining-divisors) explains.`,
      link: '',
    },

    obj11: {
      title: `Divisibility Rule for 11`,
      content: `A number is divisible by 11 if the alternating sum of its digits is divisible by 11 (including 0). Starting from the leftmost digit, alternate between adding and subtracting.

For 99, the alternating sum is 9 - 9 = 0, which is divisible by 11. The tooltip shows "Alt sum = 0, ÷11✓."

For 121 (outside our grid), it would be 1 - 2 + 1 = 0. This rule is trickier than others, making the tooltip explanations especially helpful for understanding why certain numbers qualify.`,
      before: ``,
      after: `The alternating sum works because 10 leaves remainder −1 when divided by 11: even-position powers of ten contribute +1, odd positions −1, so the signed digit sum tracks the remainder exactly. The same style of argument builds all the digit rules—see [why divisibility rules work](!#why-divisibility-rules-work).

Below 100 the rule collapses to something visible at a glance: a two-digit number's alternating sum is "first digit minus second," which is 0 only when the digits match. That is why the frozen pattern above is the repdigit family—11, 22, 33, up to 99—plus 0.`,
      link: '',
    },

    obj12: {
      title: `Divisibility Rule for 12`,
      content: `A number is divisible by 12 if it's divisible by both 3 and 4. Since 12 = 3 × 4 and these factors share no common prime factors, both conditions must hold.

The tooltip shows "÷3 and ÷4 both work" for numbers divisible by 12. Like the [rule for 6](!#divisibility-rule-for-6), this is a composite test.

In the 0-100 range, multiples of 12 are: 0, 12, 24, 36, 48, 60, 72, 84, and 96. Select ÷12 to highlight them, then verify by selecting [÷3](!#divisibility-rule-for-3) and [÷4](!#divisibility-rule-for-4) together—the intersection matches exactly.`,
      before: ``,
      after: `Twelve is 2² × 3, and the test needs the full strength of both factors: the 4 supplies two factors of 2, the 3 supplies the rest. The pairing must be coprime—checking ÷2 and ÷6 instead would wrongly admit 6, which passes both yet fails ÷12, because 2 and 6 share a factor.

Nine multiples sit in this range, one per dozen—the sparsest pattern among the twelve buttons. Sparsity is the price of strength: passing ÷12 certifies divisibility by 1, 2, 3, 4, and 6 all at once.`,
      link: '',
    },

    obj13: {
      title: `What is Divisibility?`,
      content: `Divisibility means one integer divides another with no remainder. We say "a is divisible by b" (written a | b or b divides a) when a ÷ b produces a whole number.

For example, 24 is divisible by 6 because 24 ÷ 6 = 4 exactly. But 25 is not divisible by 6 because 25 ÷ 6 = 4 remainder 1.

[Divisibility rules](!#the-twelve-divisibility-rules) provide shortcuts to determine divisibility without performing full division. Instead of computing 738 ÷ 9, you can add digits: 7 + 3 + 8 = 18, and since 18 is divisible by 9, so is 738.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Why Divisibility Rules Work`,
      content: `Divisibility rules exploit patterns in our base-10 number system. Every number can be written as a sum of its digits times powers of 10:

$$247 = 2 \\times 100 + 4 \\times 10 + 7 \\times 1$$

For [divisibility by 9](!#divisibility-rule-for-9), note that 10 ≡ 1 (mod 9), 100 ≡ 1 (mod 9), and so on. This means each power of 10 contributes just its digit's value to the remainder when divided by 9. So 247 mod 9 equals (2 + 4 + 7) mod 9 = 13 mod 9 = 4.

Similar reasoning explains other rules. For [divisibility by 4](!#divisibility-rule-for-4), since 100 ≡ 0 (mod 4), only the last two digits matter.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `Related Concepts`,
      content: `Divisibility connects to many fundamental arithmetic and number theory concepts:

• **Factors and Multiples** - If a is divisible by b, then b is a factor of a, and a is a multiple of b

• **Prime Numbers** - Numbers divisible only by 1 and themselves. Primes have exactly two divisors

• **Greatest Common Divisor (GCD)** - The largest number that divides two integers. Found using divisibility relationships

• **Least Common Multiple (LCM)** - The smallest number divisible by two integers

• **Prime Factorization** - Breaking numbers into prime factors reveals all divisibility relationships

• **Modular Arithmetic** - [Divisibility rules](!#the-twelve-divisibility-rules) are applications of modular arithmetic, where a is divisible by b means a ≡ 0 (mod b)`,
      before: ``,
      after: ``,
      link: '',
    },

    obj16: {
      title: `Divisibility Rule for 1`,
      content: `Every integer is divisible by 1, because dividing by 1 leaves the number unchanged: n ÷ 1 = n, always a whole number with no remainder. The tooltip states it plainly: "Every number ÷1."

Select ÷1 and the entire grid lights up—all 101 cells from 0 to 100. It is the only divisor button that highlights everything, which makes it a useful sanity check: whatever else is selected, adding ÷1 cannot remove a highlight, only guarantee them all.

Because 1 divides everything, it carries no information as a test—and that is exactly why 1 is excluded from the primes: a prime must have exactly two distinct divisors, and 1 has only one.`,
      before: ``,
      after: `The number 1 is the multiplicative identity, and its divisibility behavior follows directly: since $n = 1 \\times n$ for every integer $n$, the definition of divisibility is satisfied automatically.

In the tooltip for any number you hover, ÷1 always appears first in the divisor list. This grid holds two mirror-image special cases: 1 divides every number, while 0—as noted in [the grid layout](!#understanding-the-grid-layout)—is divisible by every number.`,
      link: '',
    },

    obj17: {
      title: `Divisibility Rule for 7`,
      content: `Seven is the only divisor from 1 to 12 with no simple last-digit or digit-sum shortcut, so the tooltip shows the division directly: hovering over 91 displays "91 ÷ 7 = 13."

A classical rule does exist: remove the last digit, double it, and subtract it from what remains; if the result is divisible by 7, so is the original number. For 91: 9 − 2 × 1 = 7 ✓. For 84: 8 − 2 × 4 = 0, and 0 counts as divisible ✓.

Select ÷7 to see the fifteen multiples in this range: 0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, and 98.`,
      before: ``,
      after: `Why does the doubling trick work? Write the number as 10a + b, where b is the last digit. Then 10a + b = 10(a − 2b) + 21b, and 21b is always a multiple of 7. Dropping it leaves 10(a − 2b), and since 10 and 7 share no factors, divisibility by 7 falls on a − 2b alone.

Because 7 shares no factor with 10, the highlight pattern ignores last digits entirely—unlike the [last-digit rules](!#the-twelve-divisibility-rules) for 2, 5, and 10. Each multiple of 7 simply lands seven cells after the previous one, wherever that falls in the 17-column layout.`,
      link: '',
    },

    obj18: {
      title: `Divisibility Rule for 8`,
      content: `A number is divisible by 8 if its last three digits form a number divisible by 8. This works because 1000 = 8 × 125, so everything beyond the last three digits contributes nothing to the remainder.

For the numbers in this grid, "last three digits" means the whole number, so the tooltip simply shows the division: hovering over 96 displays "96 ÷ 8 = 12."

Select ÷8 to highlight the thirteen multiples from 0 to 96. Every one of them also lights under ÷4 and ÷2: the powers of two nest, each rule half as generous as the one before.`,
      before: ``,
      after: `The chain 2, 4, 8 shows how these tests sharpen with each factor of two: the [rule for 2](!#divisibility-rule-for-2) checks one final digit, the [rule for 4](!#divisibility-rule-for-4) checks two, and the rule for 8 checks three. Each extra digit is needed because 10 is divisible by 2, 100 by 4, and 1000 by 8—but not one level up: 100 is not divisible by 8, which is why two digits stop sufficing.

Try selecting ÷2, ÷4, and ÷8 together and watch the nesting hide itself: nothing lights beyond the ÷2 pattern, because every multiple of 4 or 8 is already even. To see the subset relation, select them one at a time and compare.`,
      link: '',
    },

    obj19: {
      title: `Combining Divisors`,
      content: `Selecting two or more divisors highlights the union: every number divisible by at least one of the selected values. With ÷2 and ÷3 active, 68 of the 101 cells light up—51 even numbers plus 34 multiples of 3, minus the 17 multiples of 6 that would otherwise be counted twice.

That arithmetic is inclusion–exclusion in miniature: overlapping sets are added, and their intersection subtracted once.

The grid never displays an intersection directly, but the composite rules stand in for the important ones: the [rule for 6](!#divisibility-rule-for-6) highlights exactly the overlap of ÷2 and ÷3, and the [rule for 12](!#divisibility-rule-for-12) the overlap of ÷3 and ÷4.`,
      before: ``,
      after: `A useful exercise: select ÷2 and ÷3, note the pattern, then clear and select ÷6 alone. The ÷6 highlights are precisely the cells that belonged to both patterns at once. The same experiment works with ÷3 and ÷4 against ÷12.

Combinations also expose near-misses. Select ÷4 and ÷6: both light 12, 24, 36, and so on—yet their first shared multiple is not 4 × 6 = 24 but 12, because the least common multiple of 4 and 6 is 12. Shared prime factors pull the meeting point closer; see [related concepts](!#related-concepts) for the LCM connection.`,
      link: '',
    },

    obj20: {
      title: `The Twelve Divisibility Rules`,
      content: `The twelve divisor buttons carry twelve tests, and they fall into a few natural families.

Three are last-digit rules: the [rule for 2](!#divisibility-rule-for-2) reads one even digit, the [rule for 5](!#divisibility-rule-for-5) accepts endings of 0 or 5, and the [rule for 10](!#divisibility-rule-for-10) demands a final zero. Two are digit-sum rules: the [rule for 3](!#divisibility-rule-for-3) and the [rule for 9](!#divisibility-rule-for-9), identical in mechanics but different in strictness. Two check trailing digits in bulk: the [rule for 4](!#divisibility-rule-for-4) examines the last two digits and the [rule for 8](!#divisibility-rule-for-8) the last three. Two are composite tests built from smaller ones: the [rule for 6](!#divisibility-rule-for-6) combines 2 with 3, and the [rule for 12](!#divisibility-rule-for-12) combines 3 with 4. The [rule for 11](!#divisibility-rule-for-11) alternates signs across the digits, the [rule for 7](!#divisibility-rule-for-7) works by direct division here, and the [rule for 1](!#divisibility-rule-for-1) admits everything.

Selecting several buttons at once shows the union of their patterns—see [combining divisors](!#combining-divisors) for what the overlaps reveal.`,
      before: ``,
      after: ``,
      link: '',
    },

  }

  const introContent = {
    id: "intro",
    title: "Interactive Divisibility Table",
    content: `Explore divisibility patterns for numbers 0-100 with twelve divisors. Select any combination of divisors to highlight matching numbers, and hover over any cell to see detailed explanations of why each divisibility rule applies.`
  }

  const faqQuestions = {
    obj1: {
      question: "What is divisibility?",
      answer: "Divisibility means one number divides another exactly with no remainder. For example, 12 is divisible by 3 because 12 ÷ 3 = 4 exactly. Divisibility rules let you check this quickly without doing full division."
    },
    obj2: {
      question: "How do I use the divisibility table?",
      answer: "Click any divisor button (÷1 through ÷12) to highlight all numbers divisible by that value. You can select multiple divisors at once. Hover over any number to see which divisors divide it and explanations of why each rule works."
    },
    obj3: {
      question: "What is the divisibility rule for 3?",
      answer: "A number is divisible by 3 if the sum of its digits is divisible by 3. For example, 147 has digit sum 1+4+7=12, and since 12 is divisible by 3, so is 147."
    },
    obj4: {
      question: "What is the divisibility rule for 9?",
      answer: "A number is divisible by 9 if the sum of its digits is divisible by 9. This is similar to the rule for 3, but stricter. For example, 81 has digit sum 8+1=9, which is divisible by 9."
    },
    obj5: {
      question: "Why is 0 divisible by everything?",
      answer: "Zero divided by any non-zero number equals zero, which is a whole number with no remainder. So 0 ÷ 5 = 0, 0 ÷ 7 = 0, etc. This means 0 satisfies the definition of divisibility for every divisor."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Divisibility Table",
      "description": "Interactive divisibility table showing numbers 0-100 with 12 divisor filters. Hover for detailed divisibility rule explanations.",
      "url": "https://www.learnmathclass.com/arithmetic/visual-tools/divisibility-table",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Interactive 0-100 number grid",
        "12 divisor selection buttons (÷1 through ÷12)",
        "Multi-select divisor filtering",
        "Hover tooltips with divisibility explanations",
        "Digit sum explanations for divisibility by 3 and 9",
        "Last digit rules for 2, 5, and 10",
        "Composite rules for 6 and 12",
        "Alternating sum rule for 11"
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
          "name": "Divisibility Table",
          "item": "https://www.learnmathclass.com/arithmetic/visual-tools/divisibility-table"
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

  // Frozen-state framed units (Line 1): one per divisor button, plus the multi-select union.
  const d = divisibilityTableDiagrams;
  const u = (key, caption, text) => demoUnitFrame({ svg: d[key], caption, text });
  const stateUnits = {
    d1: u('d1', '÷1 selected, frozen',
      'Every one of the 101 cells is lit: the whole grid from 0 to 100 answers to ÷1 — the only selection that highlights everything.'),
    d2: u('d2', '÷2 selected, frozen',
      '51 of the 101 cells: the even numbers. Because the grid is 17 columns wide — an odd count — the parity stripes shift one column per row into a woven diagonal.'),
    d3: u('d3', '÷3 selected, frozen',
      'Every third cell from 0 lights up, 34 in all, sliding one column further left on each row and drawing slanted stripes through the grid.'),
    d4: u('d4', '÷4 selected, frozen',
      'Every fourth cell, 26 in all — half as many as ÷2 would light, and every lit cell here would also light under ÷2.'),
    d5: u('d5', '÷5 selected, frozen',
      'Multiples of 5 end in 0 or 5, so two families of cells light up — 21 in all, ten steps apart within each family.'),
    d6: u('d6', '÷6 selected, frozen',
      'The 17 lit cells are exactly where the ÷2 and ÷3 patterns coincide: every sixth number, starting at 0.'),
    d7: u('d7', '÷7 selected, frozen',
      'Fifteen cells, 0 through 98. Seven shares no factor with 10, so the pattern ignores last digits entirely and simply marches in steps of seven.'),
    d8: u('d8', '÷8 selected, frozen',
      'Thirteen cells, 0 to 96 — every eighth number. Each lit cell sits inside the ÷4 pattern, which in turn sits inside ÷2.'),
    d9: u('d9', '÷9 selected, frozen',
      'Twelve cells, 0 to 99 — the sparser digit-sum pattern. Every lit number has digits summing to a multiple of 9.'),
    d10: u('d10', '÷10 selected, frozen',
      'Eleven cells, 0 to 100 — precisely the numbers ending in 0, the strictest of the last-digit tests.'),
    d11: u('d11', '÷11 selected, frozen',
      'Ten cells: 0 plus the repdigits 11, 22, … 99. Below 100 the alternating-sum rule reduces to "both digits equal."'),
    d12: u('d12', '÷12 selected, frozen',
      'Nine cells, 0 to 96 — the sparsest button. Every lit number sits in both the ÷3 and the ÷4 patterns: an intersection made visible.'),
    multi: u('multi', '÷2 and ÷3 selected, frozen',
      'With two divisors active the grid shows the union: 68 cells divisible by 2 or by 3. The overlap — the multiples of 6 — is lit once, not twice.'),
  };

  // Per-state panel explanations (Line 1). Rendered in the tool's explanation card
  // below the grid through processContent — same-page !# anchors work.
  const explanations = {
    d1: `Dividing by 1 changes nothing, so every integer passes and the whole grid lights up — the one selection that cannot fail. [Learn more about the rule for 1](!#divisibility-rule-for-1) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d2: `A number is even exactly when its last digit is even — one digit decides for the whole number, and half the grid qualifies. [Learn more about the rule for 2](!#divisibility-rule-for-2) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d3: `Add the digits: if the sum is a multiple of 3, so is the number. Every third cell lights up, 34 in all. [Learn more about the rule for 3](!#divisibility-rule-for-3) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d4: `Only the last two digits matter, because 100 is already a multiple of 4 — and every highlighted cell is also even. [Learn more about the rule for 4](!#divisibility-rule-for-4) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d5: `Numbers ending in 0 or 5 — two cell families ten apart. One glance at the last digit settles it. [Learn more about the rule for 5](!#divisibility-rule-for-5) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d6: `A composite test: divisible by 6 means divisible by both 2 and 3, so this pattern is exactly where those two patterns overlap. [Learn more about the rule for 6](!#divisibility-rule-for-6) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d7: `Seven has no last-digit shortcut — the classic trick doubles the last digit and subtracts it from the rest. The grid shows the plain result: every seventh number. [Learn more about the rule for 7](!#divisibility-rule-for-7) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d8: `Three doublings deep: multiples of 8 are the multiples of 4 that survive one more halving — 13 cells in this range. [Learn more about the rule for 8](!#divisibility-rule-for-8) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d9: `The digit-sum test again, but stricter: the digits must sum to a multiple of 9, and every lit cell also passes the test for 3. [Learn more about the rule for 9](!#divisibility-rule-for-9) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d10: `The strictest last-digit rule: only numbers ending in 0. Eleven cells qualify, one per ten. [Learn more about the rule for 10](!#divisibility-rule-for-10) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d11: `Alternate adding and subtracting the digits; a result divisible by 11 — including 0 — passes. Below 100 that means 0 and the repdigits. [Learn more about the rule for 11](!#divisibility-rule-for-11) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    d12: `Divisible by 12 means passing two independent tests, for 3 and for 4 — nine cells make it here. [Learn more about the rule for 12](!#divisibility-rule-for-12) · [All twelve rules](!#the-twelve-divisibility-rules)`,
    multi: `With several divisors selected the grid highlights the union — every number divisible by any of them — and the overlaps reveal shared multiples. [Learn more about combining divisors](!#combining-divisors) · [All twelve rules](!#the-twelve-divisibility-rules)`,
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
        title: "Divisibility Table - Interactive Rules 1-12 | Learn Math Class",
        description: "Interactive divisibility table for numbers 0-100. Select divisors 1-12 to highlight patterns. Hover for rule explanations including digit sums, last digits, and more.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools/divisibility-table",
        name: "Interactive Divisibility Table",
        category: "Divisibility & Remainders",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="5" width="14" height="11" rx="3" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><rect x="33" y="5" width="14" height="11" rx="3" fill="#FAC775" stroke="#854F0B" stroke-width="1.3"/><rect x="53" y="5" width="14" height="11" rx="3" fill="#E6F1FB" stroke="#185FA5" stroke-width="1"/><text x="20" y="13.5" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">2</text><text x="40" y="13.5" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">3</text><text x="60" y="13.5" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">4</text><rect x="10" y="22" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="25" y="22" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="40" y="22" width="15" height="16" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="55" y="22" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="10" y="38" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="25" y="38" width="15" height="16" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="40" y="38" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="55" y="38" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="10" y="54" width="15" height="16" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="25" y="54" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="40" y="54" width="15" height="16" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="55" y="54" width="15" height="16" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><text x="17.5" y="33" font-family="Georgia,serif" font-size="8" fill="#042C53" text-anchor="middle">1</text><text x="32.5" y="33" font-family="Georgia,serif" font-size="8" fill="#042C53" text-anchor="middle">2</text><text x="47.5" y="33" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">3</text><text x="62.5" y="33" font-family="Georgia,serif" font-size="8" fill="#042C53" text-anchor="middle">4</text><text x="17.5" y="49" font-family="Georgia,serif" font-size="8" fill="#042C53" text-anchor="middle">5</text><text x="32.5" y="49" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">6</text><text x="47.5" y="49" font-family="Georgia,serif" font-size="8" fill="#042C53" text-anchor="middle">7</text><text x="62.5" y="49" font-family="Georgia,serif" font-size="8" fill="#042C53" text-anchor="middle">8</text><text x="17.5" y="65" font-family="Georgia,serif" font-size="8" fill="#412402" text-anchor="middle">9</text><text x="32.5" y="65" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">10</text><text x="47.5" y="65" font-family="Georgia,serif" font-size="7" fill="#042C53" text-anchor="middle">11</text><text x="62.5" y="65" font-family="Georgia,serif" font-size="7" fill="#412402" text-anchor="middle">12</text></svg>`
      },
    }
  }
}

export default function DivisibilityTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, stateUnits, explanations}) {

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
    plain('obj1', 'selecting-divisors'),
    plain('obj2', 'hovering-for-divisibility-details'),
    plain('obj3', 'understanding-the-grid-layout'),

    plain('obj20', 'the-twelve-divisibility-rules'),
    stateRow('obj16', 'divisibility-rule-for-1', 'd1'),
    stateRow('obj4', 'divisibility-rule-for-2', 'd2'),
    stateRow('obj5', 'divisibility-rule-for-3', 'd3'),
    stateRow('obj6', 'divisibility-rule-for-4', 'd4'),
    stateRow('obj7', 'divisibility-rule-for-5', 'd5'),
    stateRow('obj8', 'divisibility-rule-for-6', 'd6'),
    stateRow('obj17', 'divisibility-rule-for-7', 'd7'),
    stateRow('obj18', 'divisibility-rule-for-8', 'd8'),
    stateRow('obj9', 'divisibility-rule-for-9', 'd9'),
    stateRow('obj10', 'divisibility-rule-for-10', 'd10'),
    stateRow('obj11', 'divisibility-rule-for-11', 'd11'),
    stateRow('obj12', 'divisibility-rule-for-12', 'd12'),
    stateRow('obj19', 'combining-divisors', 'multi'),

    plain('obj13', 'what-is-divisibility'),
    plain('obj14', 'why-divisibility-rules-work'),
    plain('obj15', 'related-concepts'),
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
      {/* <GenericNavbar/> */}
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
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Divisibility Table</h1>
     

      {/* Instruction Box
      <div style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        border: '2px solid #7dd3fc',
        borderRadius: '12px',
        padding: '20px 24px',
        marginBottom: '20px',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: '700',
          color: '#0369a1',
          margin: '0 0 12px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '1.3rem' }}>💡</span> How to Use This Tool
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          fontSize: '0.9rem',
          color: '#334155'
        }}>
          <div>
            <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
              Select Divisors
            </p>
            <p style={{ margin: 0, lineHeight: '1.5' }}>
              Click any <strong>÷ button</strong> to highlight all numbers divisible by that value. 
              Select multiple divisors to see numbers divisible by any of them. Click again to deselect.
            </p>
          </div>
          
          <div>
            <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
              Explore Numbers
            </p>
            <p style={{ margin: 0, lineHeight: '1.5' }}>
              <strong>Hover over any number</strong> in the grid to see all its divisors (1-12) 
              and the divisibility rule explanation for each one.
            </p>
          </div>
          
          <div>
            <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
              Learn the Rules
            </p>
            <p style={{ margin: 0, lineHeight: '1.5' }}>
              The tooltip shows <strong>why</strong> each number is divisible—digit sums for 3 and 9, 
              last digits for 2, 5, and 10, and combined rules for 6 and 12.
            </p>
          </div>
        </div>
      </div> */}

      {/* Instruction Box - Accordion (CSS only with chevron) */}
<style jsx>{`
  details summary::-webkit-details-marker { display: none; }
  details summary::marker { display: none; }
  details[open] .chevron { transform: rotate(180deg); }
`}</style>

<details style={{
  background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
  border: '2px solid #7dd3fc',
  borderRadius: '12px',
  marginBottom: '20px',
  maxWidth: '1000px',
  marginLeft: 'auto',
  marginRight: 'auto'
}}>
  <summary style={{
    padding: '20px 24px',
    cursor: 'pointer',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <span style={{
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#0369a1',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <span style={{ fontSize: '1.3rem' }}>💡</span> How to Use This Tool
    </span>
    <span className="chevron" style={{
      fontSize: '1.2rem',
      color: '#0369a1',
      transition: 'transform 0.3s ease'
    }}>▼</span>
  </summary>
  
  <div style={{
    padding: '0 24px 20px 24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
    fontSize: '0.9rem',
    color: '#334155'
  }}>
    <div>
      <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
        Select Divisors
      </p>
      <p style={{ margin: 0, lineHeight: '1.5' }}>
        Click any <strong>÷ button</strong> to highlight all numbers divisible by that value. 
        Select multiple divisors to see numbers divisible by any of them. Click again to deselect.
      </p>
    </div>
    
    <div>
      <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
        Explore Numbers
      </p>
      <p style={{ margin: 0, lineHeight: '1.5' }}>
        <strong>Hover over any number</strong> in the grid to see all its divisors (1-12) 
        and the divisibility rule explanation for each one.
      </p>
    </div>
    
    <div>
      <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#0284c7' }}>
        Learn the Rules
      </p>
      <p style={{ margin: 0, lineHeight: '1.5' }}>
        The tooltip shows <strong>why</strong> each number is divisible—digit sums for 3 and 9, 
        last digits for 2, 5, and 10, and combined rules for 6 and 12.
      </p>
    </div>
  </div>
</details>

      <DivisibilityTable explanations={explanations}/>
      <br/>
      <SectionTableOfContents sections={genericSections}/>
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
      <br/>
      <Sections sections={genericSections}/>
      <br/>
      <br/>
      <br/>
      {/* <ScrollUpButton/> */}
    </>
  )
}