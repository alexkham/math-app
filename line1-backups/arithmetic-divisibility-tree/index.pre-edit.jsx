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
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding the Tree Structure`,
      content: `The tree begins with an even/odd check at the top. This fundamental split determines which branch your number follows. Even numbers proceed left through tests for 2, 4, and 8. Odd numbers branch right and immediately eliminate all even divisors (2, 4, 6, 8, 10, 12).

Both branches merge before testing divisibility by 3. The digit sum calculation appears in the node's sublabel. From the ÷3 result, the tree splits again to test ÷9, since divisibility by 9 requires first passing ÷3.

After merging again, the tree tests ÷5 (checking the last digit), ÷7 (direct division), and ÷11 (alternating digit sum). Finally, the **Derived** section at the bottom shows combined results for 6, 10, and 12 based on earlier tests.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Tooltips`,
      content: `Each tooltip provides three pieces of information: the test name, the specific values from your number, and whether the test passes or fails.

For digit-based rules, tooltips show the actual calculation. When testing 126 for ÷3, you'll see: "Digit sum: 1+2+6 = 9. Since 9 ÷ 3 = 3, it's divisible." For position-based rules like ÷4, the tooltip displays: "Last two digits 26 ÷ 4 = 6.5 (not whole)."

Failed tests explain exactly what went wrong. If testing an odd number for ÷8, the tooltip states: "Can't be divisible by 8 without first being divisible by 4." This cascading logic helps you understand why certain paths close off.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `The Even/Odd Split`,
      content: `Every integer is either even or odd, and this property determines divisibility by all even numbers. The tree checks the last digit: if it's 0, 2, 4, 6, or 8, the number is even; otherwise it's odd.

Even numbers automatically pass ÷2 and proceed to test ÷4 and ÷8. These tests use the last two and three digits respectively. If 4 divides the last two digits evenly, the number passes ÷4. If 8 divides the last three digits evenly, it passes ÷8.

Odd numbers take a shorter path. Since no odd number can be divisible by any even number, the tree immediately marks ÷2, ÷4, ÷6, ÷8, ÷10, and ÷12 as failed. This efficient elimination demonstrates why checking parity first saves computational effort.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Digit Sum Rules for 3 and 9`,
      content: `The **digit sum** is the sum of all individual digits in a number. For 5,274 the digit sum is $5 + 2 + 7 + 4 = 18$. This simple calculation reveals divisibility by 3 and 9.

If the digit sum is divisible by 3, so is the original number. If the digit sum is divisible by 9, the original is divisible by 9. Since every multiple of 9 is also a multiple of 3, passing ÷9 guarantees passing ÷3, but not vice versa.

The tree displays the digit sum in the ÷3 node's sublabel (e.g., "sum=18"). Hovering reveals the full addition. When ÷3 passes, the tree proceeds to test whether that same digit sum also divides by 9. When ÷3 fails, ÷9 automatically fails without further calculation.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Last Digit Rules for 5 and 10`,
      content: `Divisibility by 5 depends entirely on the last digit. If a number ends in 0 or 5, it's divisible by 5. Any other ending digit means the number is not divisible by 5. The tree displays the last digit in the ÷5 node's sublabel.

Divisibility by 10 combines two rules: the number must be divisible by both 2 and 5. In practice, this means the number must end in 0. Ending in 5 passes ÷5 but fails ÷2, so ÷10 fails. Ending in an even digit other than 0 passes ÷2 but fails ÷5.

The derived section at the bottom shows ÷10 as "(2∧5)" indicating it requires both conditions. The tree computes this automatically from your earlier ÷2 and ÷5 results.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The Alternating Sum Rule for 11`,
      content: `Divisibility by 11 uses the **alternating digit sum**: subtract and add digits alternately from left to right. For 918,082: $9 - 1 + 8 - 0 + 8 - 2 = 22$. Since 22 is divisible by 11, so is 918,082.

The tree computes this alternating sum and displays it in the ÷11 node's sublabel (e.g., "alt=22"). Hovering shows whether the result divides evenly by 11.

This rule works because of how place values relate to powers of 10 modulo 11. Each power of 10 alternates between +1 and -1 when reduced modulo 11, creating the alternating pattern. The result can be negative, zero, or positive—any multiple of 11 (including 0) indicates divisibility.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Derived Divisibility: 6, 10, and 12`,
      content: `Some divisibility tests combine simpler rules rather than using unique tests. The tree shows these as **Derived** results at the bottom.

**Divisibility by 6** requires passing both ÷2 and ÷3. The number must be even (ends in 0,2,4,6,8) AND have a digit sum divisible by 3. Formula: (2∧3).

**Divisibility by 10** requires passing both ÷2 and ÷5. Only numbers ending in 0 satisfy both conditions. Formula: (2∧5).

**Divisibility by 12** requires passing both ÷3 and ÷4. The digit sum must be divisible by 3, AND the last two digits must form a number divisible by 4. Formula: (3∧4).

The derived boxes turn green or red based on combining the earlier test results, showing how composite divisibility rules build from prime and prime-power factors.`,
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

**Prime Numbers**: Numbers divisible only by 1 and themselves. If the tree shows a number divisible only by 1, it may be prime or divisible by something larger than 12.

**Prime Factorization**: Breaking numbers into prime factors reveals all divisibility relationships. A number is divisible by 6 because $6 = 2 × 3$.

**Greatest Common Divisor (GCD)**: The largest number dividing two integers evenly. Divisibility rules help identify shared factors quickly.

**Least Common Multiple (LCM)**: The smallest number divisible by two given integers. Understanding divisibility simplifies LCM calculations.

**Modular Arithmetic**: The remainder operation generalizes divisibility. A number is divisible by $n$ when its remainder modulo $n$ equals zero.`,
      before: ``,
      after: ``,
      link: '',
    }

  }

  const seoData = {
    title: "Divisibility Decision Tree - Interactive Rules Chart | Learn Math Class",
    description: "Interactive divisibility decision tree for testing numbers 1-9999. Visualize divisibility rules for 2-12 with step-by-step explanations and hover tooltips.",
    keywords: keyWords.join(", "),
    url: "/arithmetic/visual-tools/divisibility-tree",
    name: "Divisibility Decision Tree Interactive Tool"
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

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData
    }
  }
}

export default function DivisibilityTreePage({
  seoData,
  sectionsContent,
  introContent,
  faqQuestions,
  schemas
}) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content]
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
        <DivisibilityTreeSVG/>
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