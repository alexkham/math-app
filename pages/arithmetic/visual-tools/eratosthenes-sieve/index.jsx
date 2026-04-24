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
// import EratosthenesSieve from '../../../../app/components/visualizations/arithmetic/EratosthenesSieve'


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
//         title: "Sieve of Eratosthenes | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/arithmetic/visual-tools/eratosthenes-sieve",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function SievePage({seoData,sectionsContent , introContent}) {

    
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Sieve of Eratosthenes</h1>
//    <br/>
//    <EratosthenesSieve/>
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
import EratosthenesSieve from '../../../../app/components/visualizations/arithmetic/EratosthenesSieve'


export async function getStaticProps(){

  const keyWords = [
    'sieve of eratosthenes',
    'sieve of eratosthenes visualization',
    'prime number sieve',
    'find primes interactive',
    'eratosthenes algorithm',
    'prime sieve animation',
    'sieve of eratosthenes tool',
    'prime number finder',
    'crossing out composites',
    'prime sieve step by step',
    'interactive prime finder',
    'sieve algorithm visual',
    'primes up to 100',
    'eratosthenes prime generator',
    'learn sieve of eratosthenes'
  ]

  const faqQuestions = {
    obj1: {
      question: "What is the Sieve of Eratosthenes?",
      answer: "The Sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to a given limit. It works by repeatedly crossing out multiples of each prime, starting with 2. Numbers that remain uncrossed are prime."
    },
    obj2: {
      question: "How do I use this Sieve of Eratosthenes tool?",
      answer: "Press Start to run the algorithm automatically, or use Step to advance one action at a time. The grid shows numbers 1-100, with primes highlighted in color and composites crossed out. Adjust speed with the slider and press Reset to start over."
    },
    obj3: {
      question: "Why does the sieve start crossing multiples at p²?",
      answer: "When processing prime p, all multiples smaller than p² have already been crossed out by smaller primes. For example, when crossing multiples of 5, the numbers 10, 15, and 20 were already crossed by 2 or 3. So we start at 5² = 25."
    },
    obj4: {
      question: "How many primes are there up to 100?",
      answer: "There are 25 prime numbers between 1 and 100. The Sieve of Eratosthenes finds them by crossing out 74 composite numbers (plus 1, which is neither prime nor composite), leaving 25 primes: 2, 3, 5, 7, 11, 13, and so on up to 97."
    },
    obj5: {
      question: "Why is the Sieve of Eratosthenes efficient?",
      answer: "The sieve is efficient because it avoids division entirely. Instead of testing each number for divisibility, it simply marks multiples. For finding primes up to n, it runs in O(n log log n) time, making it much faster than trial division for large ranges."
    }
  }

  const sectionsContent = {

    obj1: {
      title: `How to Use the Sieve Visualization`,
      content: `This interactive tool demonstrates the Sieve of Eratosthenes algorithm on numbers from 1 to 100. Press the **Start** button to run the animation automatically, watching as primes emerge and composites get crossed out.

Use the **Step** button to advance one action at a time for closer study. Each step either identifies a new prime or crosses out one of its multiples. The **Reset** button clears the grid and returns to the initial state.

The **Speed** slider controls how fast the animation runs. Slide left for slower, more detailed observation; slide right for faster execution. Even at maximum speed, each crossing is visible so you can follow the pattern.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Understanding the Grid Display`,
      content: `The main grid shows numbers 1 through 100 arranged in 10 rows of 10. Number 1 appears gray because it is neither prime nor composite — by definition, primes must have exactly two distinct divisors.

As the algorithm runs, primes light up in solid colors: **blue** for 2, **green** for 3, **purple** for 5, and **orange** for 7. These are the only primes whose multiples need crossing within 100, since the next prime (11) has 11² = 121 > 100.

Composite numbers show tinted backgrounds indicating which prime(s) crossed them out. Numbers divisible by multiple small primes display striped patterns combining those colors. This color coding reveals divisibility relationships at a glance.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the Status Bar`,
      content: `The status bar between the controls and grid displays the current action. Before starting, it shows "Press Start to begin the sieve." During execution, it narrates each step.

When a prime is found, the status reads "Found prime X — crossing out multiples." When crossing a specific multiple, it shows "Crossing out Y (X × Z)" where Y is the composite being marked and Z is the multiplier.

Upon completion, the status announces "Complete! Found all primes up to 100." The legend on the right side of the status bar shows the color key for divisibility by 2, 3, 5, and 7.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Using the Step-by-Step Panel`,
      content: `The right panel provides detailed explanations organized by divisor. Each prime that processes multiples gets its own card showing which numbers it crossed out.

The card header shows the divisor (÷2, ÷3, etc.) and explains the starting point: "Cross out multiples of p starting from p² = ..." This explains why the sieve skips smaller multiples — they were already handled by smaller primes.

Below the header, crossed numbers appear as colored badges. The count at the bottom tracks how many composites this divisor eliminated. Active cards highlight while that prime's multiples are being processed.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Tracking Statistics`,
      content: `Three statistics cards at the top of the right panel show running totals. **Primes** counts how many prime numbers have been confirmed. **Composites** counts how many numbers have been crossed out. **Current** displays the prime currently being processed.

Watch these numbers change as the algorithm progresses. By completion, you'll see 25 primes and 74 composites (plus 1, which is neither). The Current indicator shows "—" when the sieve finishes.

These real-time statistics help you understand the density of primes. Notice that most crossings happen early (multiples of 2 eliminate half the grid), while later primes find fewer uncrossed multiples.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `What is the Sieve of Eratosthenes?`,
      content: `The **Sieve of Eratosthenes** is an ancient algorithm attributed to the Greek mathematician Eratosthenes of Cyrene (c. 276–194 BCE). It finds all prime numbers up to any given limit through systematic elimination of composites.

The algorithm works by iterating through numbers starting at 2. For each unmarked number p, it marks p as prime, then crosses out all multiples of p (starting from p²). The process continues until reaching √n, since any composite larger than √n must have a factor smaller than √n.

Unlike trial division, which tests each candidate individually, the sieve processes numbers in bulk. This makes it remarkably efficient — finding primes up to one million takes mere milliseconds on modern computers.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Why Start at p²?`,
      content: `A key optimization in the sieve is starting each prime's elimination at p² rather than 2p. This works because every multiple of p smaller than p² has already been eliminated by a smaller prime.

Consider p = 5. The multiples 10, 15, and 20 equal 2×5, 3×5, and 4×5 respectively. Since 2 < 5 and 3 < 5 and 4 = 2×2, these were crossed out when processing 2 or 3. The first "new" multiple is 5×5 = 25.

This optimization explains why only primes up to √n need processing. For n = 100, we check primes up to 10, meaning 2, 3, 5, and 7. The next prime, 11, has 11² = 121 > 100, so all remaining unmarked numbers are already confirmed prime.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Prime Numbers and Their Properties`,
      content: `A **prime number** is a natural number greater than 1 that has no positive divisors other than 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29.

The number 2 is special — it's the only even prime. Every other even number is divisible by 2 and therefore composite. This is why the sieve eliminates half the grid in its first pass.

The **Fundamental Theorem of Arithmetic** states that every integer greater than 1 can be uniquely expressed as a product of primes. This makes primes the "building blocks" of all numbers, giving them central importance in number theory and applications like cryptography.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Algorithm Complexity and Efficiency`,
      content: `The Sieve of Eratosthenes has time complexity $O(n \\log \\log n)$, where n is the upper limit. This is nearly linear and much faster than testing each number individually with trial division, which takes $O(n \\sqrt{n})$.

The efficiency comes from avoiding division entirely. Instead of asking "is this number prime?", the sieve marks multiples using simple addition. Each composite gets marked only by its smallest prime factor, minimizing redundant work.

Space complexity is $O(n)$ for storing the array of marks. Optimizations exist: storing only odd numbers halves memory usage, and segmented sieves process ranges in chunks to handle very large limits.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Patterns in Prime Distribution`,
      content: `Watch the grid as primes emerge and notice patterns. Primes become less frequent as numbers grow — there are 10 primes between 1-25 but only 6 between 76-100. This reflects the **Prime Number Theorem**: primes near n have density approximately $1 / \\ln(n)$.

Observe that after 2, all primes are odd. After 3, all primes avoid multiples of both 2 and 3, appearing only at positions 6k±1. These patterns inspire more advanced sieves that skip known non-primes.

Twin primes — pairs differing by 2 like (11,13) and (17,19) — appear scattered through the grid. The **Twin Prime Conjecture** suggests infinitely many exist, though this remains unproven.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj11: {
      title: `Related Concepts`,
      content: `The Sieve of Eratosthenes connects to many topics in number theory and computer science:

**Prime Factorization**: Every composite crossed by the sieve has a smallest prime factor. Collecting these factors decomposes any number into primes.

**Divisibility**: The sieve visually demonstrates divisibility — colored stripes show which small primes divide each composite.

**GCD and LCM**: Finding greatest common divisors and least common multiples relies on prime factorizations that the sieve helps identify.

**Cryptography**: Large primes are essential for RSA encryption. While the basic sieve handles small ranges, related algorithms generate the massive primes used in security.

**Computational Number Theory**: Modern variants like the Sieve of Atkin and segmented sieves extend these ideas to find primes among billions.`,
      before: ``,
      after: ``,
      link: '',
    }

  }

  const seoData = {
    title: "Sieve of Eratosthenes - Interactive Prime Finder | Learn Math Class",
    description: "Interactive Sieve of Eratosthenes visualization. Watch primes emerge as composites get crossed out with step-by-step explanations and color-coded divisibility.",
    keywords: keyWords.join(", "),
    url: "/arithmetic/visual-tools/eratosthenes-sieve",
    name: "Sieve of Eratosthenes Visualization"
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Sieve of Eratosthenes Visualization",
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
        "Animated sieve algorithm on numbers 1-100",
        "Start/Pause/Step/Reset controls",
        "Adjustable animation speed",
        "Color-coded primes and divisibility",
        "Step-by-step explanation panel",
        "Real-time prime and composite counts",
        "Crossed numbers tracked by divisor"
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
          "name": "Sieve of Eratosthenes",
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

export default function SievePage({
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
    },
    {
      id: '11',
      title: sectionsContent.obj11.title,
      link: sectionsContent.obj11.link,
      content: [sectionsContent.obj11.content]
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
      <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Sieve of Eratosthenes</h1>
      <br/>
      <EratosthenesSieve/>
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