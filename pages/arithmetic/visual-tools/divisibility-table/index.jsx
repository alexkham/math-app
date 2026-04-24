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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Divisibility Table</h1>
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

You can select multiple divisors simultaneously. When multiple divisors are selected, the grid highlights numbers divisible by any of the selected values. This lets you compare divisibility patterns—for example, selecting both ÷2 and ÷3 shows all even numbers plus all multiples of 3.

Click a selected divisor again to deselect it. Use the red ✕ button to clear all selections at once and reset the grid to its default state.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Hovering for Divisibility Details`,
      content: `Hover over any number in the grid to see a detailed tooltip. The tooltip displays all divisors from 1 to 12 that evenly divide that number, along with an explanation of why each divisibility rule works.

For example, hovering over 36 shows it's divisible by 1, 2, 3, 4, 6, 9, and 12. Each divisor includes a brief explanation: "Last digit 6 is even" for ÷2, or "3+6=9, ÷9✓" for ÷9.

The hovered cell enlarges and turns blue, making it easy to track which number you're examining. The tooltip appears above the number (or below for 0) and follows your cursor as you explore different cells.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Understanding the Grid Layout`,
      content: `The grid displays numbers 0 through 100 arranged in 17 columns. This layout makes it easy to spot vertical patterns when divisors are selected.

Number 0 is special: it's divisible by every number (since 0 ÷ n = 0 for any n). The tooltip for 0 shows all twelve divisors with the explanation "0 ÷ anything = 0."

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
      after: ``,
      link: '',
    },

    obj5: {
      title: `Divisibility Rule for 3`,
      content: `A number is divisible by 3 if the sum of its digits is divisible by 3. This rule works because 10 ≡ 1 (mod 3), so each digit contributes its face value to the remainder.

The tooltip shows the digit sum calculation. For 87, it displays "8+7=15, ÷3✓" because 15 is divisible by 3 (15 = 3 × 5), confirming that 87 ÷ 3 = 29.

Try selecting ÷3 and notice how multiples of 3 are spread throughout the grid—every third number starting from 0, 3, 6, 9, and so on.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Divisibility Rule for 4`,
      content: `A number is divisible by 4 if its last two digits form a number divisible by 4. This works because 100 is divisible by 4, so only the final two digits matter.

For two-digit numbers in this grid, you check the entire number. The tooltip shows "XX ÷ 4 = Y" with the exact division. For example, 76 shows "76 ÷ 4 = 19."

Select ÷4 to see that every fourth number is highlighted. Compare with ÷2—all numbers divisible by 4 are also divisible by 2, but not vice versa.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Divisibility Rule for 5`,
      content: `A number is divisible by 5 if its last digit is 0 or 5. Like the rule for 2, you only need to check the final digit.

The tooltip displays "Ends in X" where X is 0 or 5. For 45, it shows "Ends in 5" to confirm divisibility.

When you select ÷5, you'll see two columns light up in the grid—numbers ending in 0 and numbers ending in 5. This creates a distinctive striped pattern that's easy to recognize.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Divisibility Rule for 6`,
      content: `A number is divisible by 6 if it's divisible by both 2 and 3. Since 6 = 2 × 3 and these factors share no common divisors, both conditions must be met.

The tooltip shows "÷2 and ÷3 both work" for numbers divisible by 6. This reminds you that 6 is a composite rule requiring two separate checks.

Try selecting ÷6, then compare by selecting ÷2 and ÷3 together. The ÷6 highlights are exactly where the ÷2 and ÷3 patterns overlap—numbers that satisfy both conditions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Divisibility Rule for 9`,
      content: `A number is divisible by 9 if the sum of its digits is divisible by 9. This is the same principle as the rule for 3, but with a stricter requirement.

The tooltip shows the digit sum, just like for 3. For 81, it displays "8+1=9, ÷9✓" because 9 is divisible by 9.

Notice that all numbers divisible by 9 are also divisible by 3 (since 9 = 3 × 3), but not all multiples of 3 are multiples of 9. Select both ÷3 and ÷9 to see how ÷9 highlights form a subset of ÷3 highlights.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Divisibility Rule for 10`,
      content: `A number is divisible by 10 if its last digit is 0. This is the strictest single-digit test—only numbers ending in zero qualify.

The tooltip simply shows "Ends in 0" for these numbers. In our 0-100 grid, exactly eleven numbers are divisible by 10: 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, and 100.

Since 10 = 2 × 5, every number divisible by 10 is also divisible by both 2 and 5. Select all three to verify this relationship.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Divisibility Rule for 11`,
      content: `A number is divisible by 11 if the alternating sum of its digits is divisible by 11 (including 0). Starting from the leftmost digit, alternate between adding and subtracting.

For 99, the alternating sum is 9 - 9 = 0, which is divisible by 11. The tooltip shows "Alt sum = 0, ÷11✓."

For 121 (outside our grid), it would be 1 - 2 + 1 = 0. This rule is trickier than others, making the tooltip explanations especially helpful for understanding why certain numbers qualify.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj12: {
      title: `Divisibility Rule for 12`,
      content: `A number is divisible by 12 if it's divisible by both 3 and 4. Since 12 = 3 × 4 and these factors share no common prime factors, both conditions must hold.

The tooltip shows "÷3 and ÷4 both work" for numbers divisible by 12. Like the rule for 6, this is a composite test.

In the 0-100 range, multiples of 12 are: 0, 12, 24, 36, 48, 60, 72, 84, and 96. Select ÷12 to highlight them, then verify by selecting ÷3 and ÷4 together—the intersection matches exactly.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `What is Divisibility?`,
      content: `Divisibility means one integer divides another with no remainder. We say "a is divisible by b" (written a | b or b divides a) when a ÷ b produces a whole number.

For example, 24 is divisible by 6 because 24 ÷ 6 = 4 exactly. But 25 is not divisible by 6 because 25 ÷ 6 = 4 remainder 1.

Divisibility rules provide shortcuts to determine divisibility without performing full division. Instead of computing 738 ÷ 9, you can add digits: 7 + 3 + 8 = 18, and since 18 is divisible by 9, so is 738.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `Why Divisibility Rules Work`,
      content: `Divisibility rules exploit patterns in our base-10 number system. Every number can be written as a sum of its digits times powers of 10:

$$247 = 2 \\times 100 + 4 \\times 10 + 7 \\times 1$$

For divisibility by 9, note that 10 ≡ 1 (mod 9), 100 ≡ 1 (mod 9), and so on. This means each power of 10 contributes just its digit's value to the remainder when divided by 9. So 247 mod 9 equals (2 + 4 + 7) mod 9 = 13 mod 9 = 4.

Similar reasoning explains other rules. For divisibility by 4, since 100 ≡ 0 (mod 4), only the last two digits matter.`,
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

• **Modular Arithmetic** - Divisibility rules are applications of modular arithmetic, where a is divisible by b means a ≡ 0 (mod b)`,
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

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Divisibility Table - Interactive Rules 1-12 | Learn Math Class",
        description: "Interactive divisibility table for numbers 0-100. Select divisors 1-12 to highlight patterns. Hover for rule explanations including digit sums, last digits, and more.",
        keywords: keyWords.join(", "),
        url: "/arithmetic/visual-tools/divisibility-table",
        name: "Interactive Divisibility Table"
      },
    }
  }
}

export default function DivisibilityTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

  const genericSections = [
    {
      id: '1',
      title: 'Selecting Divisors',
      link: '',
      content: sectionsContent.obj1.content
    },
    {
      id: '2',
      title: 'Hovering for Divisibility Details',
      link: '',
      content: sectionsContent.obj2.content
    },
    {
      id: '3',
      title: 'Understanding the Grid Layout',
      link: '',
      content: sectionsContent.obj3.content
    },
    {
      id: '4',
      title: 'Divisibility Rule for 2',
      link: '',
      content: sectionsContent.obj4.content
    },
    {
      id: '5',
      title: 'Divisibility Rule for 3',
      link: '',
      content: sectionsContent.obj5.content
    },
    {
      id: '6',
      title: 'Divisibility Rule for 4',
      link: '',
      content: sectionsContent.obj6.content
    },
    {
      id: '7',
      title: 'Divisibility Rule for 5',
      link: '',
      content: sectionsContent.obj7.content
    },
    {
      id: '8',
      title: 'Divisibility Rule for 6',
      link: '',
      content: sectionsContent.obj8.content
    },
    {
      id: '9',
      title: 'Divisibility Rule for 9',
      link: '',
      content: sectionsContent.obj9.content
    },
    {
      id: '10',
      title: 'Divisibility Rule for 10',
      link: '',
      content: sectionsContent.obj10.content
    },
    {
      id: '11',
      title: 'Divisibility Rule for 11',
      link: '',
      content: sectionsContent.obj11.content
    },
    {
      id: '12',
      title: 'Divisibility Rule for 12',
      link: '',
      content: sectionsContent.obj12.content
    },
    {
      id: '13',
      title: 'What is Divisibility?',
      link: '',
      content: sectionsContent.obj13.content
    },
    {
      id: '14',
      title: 'Why Divisibility Rules Work',
      link: '',
      content: sectionsContent.obj14.content
    },
    {
      id: '15',
      title: 'Related Concepts',
      link: '',
      content: sectionsContent.obj15.content
    }
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
      <h1 className='title' style={{marginTop:'-30px',marginBottom:'10px'}}>Divisibility Table</h1>
     

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

      <DivisibilityTable/>
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