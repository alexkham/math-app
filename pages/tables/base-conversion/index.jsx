// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import '../../../../pages/pages.css'
// import Head from 'next/head'
// import BaseConversionTable from '@/app/components/tables/conversion-tables/BaseConversionTable'
// import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// export async function getStaticProps(){

//   const keyWords=['binary to decimal','decimal to binary','binary to hexadecimal',
//     'hexadecimal to binary','binary number to decimal','convert bases',
//     'binary to octal','octal to binary','octal to hexadecimal','hexadecimal to octal',
//   'octal to decimal','decimal to octal', 'hexadecimal to decimal','decimal to hexadecimal'
// ]

//   const navigationGroup=[
//     {
//         title:'Related Tools',
//         items:[
//             {title:'Base Converter',link:'/converters/base-converter'},
//             {title:'Base Convertion Visualizer',link:'/visual-tools/base-converter'},
//         ]
//     }
//   ]

//     const sectionsContent={

//     obj1:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
  
//     },
//     obj2:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
  
//     obj3:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
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
//         title: "Base Conversion Tables | Learn Math Class",
//         description: "Convert between number bases instantly - binary to decimal, decimal to binary, binary to hexadecimal, hexadecimal to binary, octal to decimal, decimal to octal. Free base conversion calculator and table.",
//         keywords: keyWords.join(", "),
//         url: "/tables/base-conversion",
//          name: "name"
//       },
//       navigationGroup,
        
//        }
//     }
//    }

// export default function BaseConversionTablePage({seoData,sectionsContent , introContent,navigationGroup}) {

    
//   const genericSections=[
//     {
//         id:'1',
//         title:'section1',
//         link:'',
//         content:''
//     },
//     {
//         id:'2',
//         title:'section2',
//         link:'',
//         content:''
//     },
//     {
//         id:'',
//         title:'',
//         link:'',
//         content:''
//     }
// ]

//   return (
//    <>
//    <Head>
//   <title>{seoData.title}</title>
//   <meta name="description" content={seoData.description} />
//   <meta name="keywords" content={seoData.keywords} />
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
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Base Conversion Table</h1>
//    <br/>
//    <VerticalButtonGroup items={navigationGroup}
//    verticalOffset='200px'
//    isSticky={true}
//    width='250px'/>
//    <br/>
//    <div style={{width:'60%',margin:'auto',marginTop:'-200px'}}>
//    <BaseConversionTable/>
//    </div>
//    {/* <SectionTableOfContents sections={genericSections}/> */}
//    <br/>
//    <br/>
//    <br/>
//     {/* <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//           backgroundColor="#f2f2f2"
//           textColor="#34383c"
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
import '../../../pages/pages.css'
import Head from 'next/head'
import BaseConversionTable from '@/app/components/tables/conversion-tables/BaseConversionTable'
import VerticalButtonGroup from '@/app/components/vertical-buttons/VerticalButtonGroup'


export async function getStaticProps(){

  const keyWords=[
    'base conversion table',
    'number base converter',
    'binary to decimal table',
    'decimal to binary table',
    'binary to hexadecimal',
    'hexadecimal to binary',
    'octal to decimal',
    'decimal to octal',
    'hexadecimal to decimal',
    'decimal to hexadecimal',
    'base 2 base 10 base 16',
    'custom base converter',
    'numeral system conversion',
    'positional number system table',
    'base 2 to 36 conversion'
  ]

  const navigationGroup=[
    {
        title:'Related Tools',
        items:[
            {title:'Base Converter',link:'/converters/base-converter'},
            {title:'Base Convertion Visualizer',link:'/visual-tools/base-converter'},
        ]
    }
  ]

  const sectionsContent={

    obj1:{
      title:`Getting Started with the Conversion Table`,
      content:`The table lists every decimal value from $0$ to $1000$ alongside its representation in binary, octal, hexadecimal, and a configurable custom base. Each row is a complete cross-base lookup for a single decimal number.

Quick orientation:
- Decimal column shows the base-10 value
- Binary column shows the base-2 equivalent
- Octal column shows the base-8 equivalent
- Hexadecimal column shows the base-16 equivalent
- Custom Base column updates whenever the base input changes

Use the controls above the table to set a custom base, search for a specific decimal value, and paginate through the full range.`,
      before:``,
      after:``,
      link:'',
    },

    obj2:{
      title:`Using the Custom Base Input`,
      content:`The **Custom Base (2-36)** field lets you add a fifth column showing every decimal value in any base from $2$ to $36$.

How to use it:
- Type a base between $2$ and $36$ into the input
- The Custom Base column header and all cells update instantly
- Values from $10$ upward use letters A-Z as digits, exactly like hexadecimal extends $0-9$ with A-F
- Out-of-range or non-numeric input shows a red error message and the column keeps its last valid value
- Click **Reset** to return the custom base to $5$

Try base $3$ to see ternary digits, base $20$ to see how letters start appearing in the cells, or base $36$ to see the densest representation supported.`,
      before:``,
      after:``,
      link:'',
    },

    obj3:{
      title:`Searching for a Specific Number`,
      content:`The **Search Number** field filters the table by decimal value.

Two search modes are supported:
- **Exact match**: type a single number such as $255$ to jump straight to that row
- **Substring match**: type a partial digit sequence such as $99$ to surface every decimal containing that sequence ($99$, $199$, $299$, $990$, $991$, ...)

Behavior notes:
- The search accepts numbers from $0$ to $1000$ only; values outside the range show an error
- Pagination automatically resets to page $1$ on every new search
- The row count indicator above the table shows how many results match
- Click **Reset** to clear the search and return to the full $0$-$1000$ range`,
      before:``,
      after:``,
      link:'',
    },

    obj4:{
      title:`Navigating Pages`,
      content:`The table shows $20$ rows per page across the full $1001$-value range, producing $51$ pages when no search is active.

Pagination controls:
- **First** jumps to page $1$
- **Previous** moves back one page
- **Next** moves forward one page
- **Last** jumps to the final page
- The page counter shows current position out of total pages

The header row stays fixed while scrolling within the table container, so column labels remain visible even when paging through later sections of the range.`,
      before:``,
      after:``,
      link:'',
    },

    obj5:{
      title:`Reading the Color-Coded Columns`,
      content:`Each base column uses a distinct color to make scanning across rows easier:
- **Decimal** in blue identifies the source value
- **Binary** in green grows quickly in digit count — $1000$ already needs $10$ binary digits
- **Octal** in purple is more compact than binary but still uses only numeric digits
- **Hexadecimal** in red is the most compact of the fixed columns and introduces letters A-F for values $10$-$15$
- **Custom Base** in a highlighted background reflects the current base setting

Comparing column widths in any single row gives an immediate sense of how representational density changes with base size: higher bases use fewer digits to express the same value.`,
      before:``,
      after:``,
      link:'',
    },

    obj6:{
      title:`What Is a Number Base?`,
      content:`A **number base** (or radix) is the count of distinct digits a positional system uses to represent values. Base $10$ uses ten digits ($0$-$9$); base $2$ uses two ($0$, $1$); base $16$ uses sixteen ($0$-$9$ then $A$-$F$).

In any base $b$, each position represents a power of $b$. A digit sequence $d_n d_{n-1} \\ldots d_1 d_0$ in base $b$ has the value:

$$d_n b^n + d_{n-1} b^{n-1} + \\ldots + d_1 b + d_0$$

For example, the binary number $1011_2$ expands as $1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 1 \\cdot 2^0 = 11$ in decimal.

For a deeper treatment of positional notation, see the **number bases theory page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj7:{
      title:`Binary, Octal, and Hexadecimal`,
      content:`The three fixed columns of the table are the bases most used in computing:
- **Binary (base 2)** is the native representation of digital hardware — each digit is a single bit
- **Octal (base 8)** groups bits in threes; one octal digit equals three binary digits
- **Hexadecimal (base 16)** groups bits in fours; one hex digit equals four binary digits

The grouping relationship makes octal and hex compact stand-ins for binary: $1111\\,1111_2 = 377_8 = FF_{16} = 255_{10}$. This is why memory addresses and color codes are written in hex rather than binary.

For full coverage, see the **binary numbers page**, **octal numbers page**, and **hexadecimal numbers page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj8:{
      title:`How Base Conversion Works`,
      content:`Converting a decimal number $N$ to base $b$ uses repeated division:
- Divide $N$ by $b$; the remainder is the lowest-order digit
- Replace $N$ with the quotient and repeat
- Stop when the quotient reaches $0$; reading remainders bottom-up gives the digits

Example: converting $13$ to base $2$ gives remainders $1, 0, 1, 1$ read upward, so $13_{10} = 1101_2$.

The reverse direction — base $b$ to decimal — uses the positional expansion shown earlier: multiply each digit by the appropriate power of $b$ and sum.

For step-by-step conversion with worked examples, see the **base conversion theory page**.`,
      before:``,
      after:``,
      link:'',
    },

    obj9:{
      title:`Related Tools and Concepts`,
      content:`**Related Tools:**

**Base Converter** - Convert a single value between any two bases without scanning a table.

**Base Conversion Visualizer** - Step through the repeated-division algorithm with visual digit accumulation.

**Related Concepts:**

**Positional Notation** - The principle behind every base in the table.

**Binary Arithmetic** - Addition, subtraction, and multiplication directly in base $2$.

**Two's Complement** - How signed integers are represented in binary.

**Bitwise Operations** - Operations that act on the binary representation rather than the decimal value.`,
      before:``,
      after:``,
      link:'',
    },

  }

  const faqQuestions = {
    obj1: {
      question: "What is a base conversion table?",
      answer: "A base conversion table lists numbers in multiple numeral systems side by side so each row shows the same value expressed in different bases. This table covers every integer from 0 to 1000 in decimal, binary, octal, hexadecimal, and a configurable custom base."
    },
    obj2: {
      question: "How do I convert decimal to binary using this table?",
      answer: "Find the decimal value in the leftmost column using the search box or pagination, then read across to the Binary column. The number 25 in decimal, for example, appears as 11001 in binary on the same row."
    },
    obj3: {
      question: "What bases does the custom base input support?",
      answer: "The custom base input accepts any integer from 2 to 36. Bases above 10 use letters A through Z as digits beyond 9, the same convention hexadecimal uses to extend digits 0-9 with A-F."
    },
    obj4: {
      question: "Why are binary, octal, and hexadecimal used in computing?",
      answer: "Binary is the native form of digital circuits. Octal and hexadecimal group binary digits in threes and fours respectively, giving compact representations: one hex digit replaces four binary digits, making memory addresses and bit patterns easier to read."
    },
    obj5: {
      question: "Can I search for a specific number in the table?",
      answer: "Yes. Type a decimal number from 0 to 1000 in the Search Number field for an exact match, or type a partial digit sequence to find every number containing those digits. Pagination resets to page 1 with each new search."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Base Conversion Table",
      "description": "Interactive base conversion table showing decimal, binary, octal, hexadecimal, and custom base equivalents for every integer from 0 to 1000.",
      "url": "https://www.learnmathclass.com/tables/base-conversion",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Cross-base lookup for every integer from 0 to 1000",
        "Decimal, binary, octal, and hexadecimal columns side by side",
        "Configurable custom base from 2 to 36 as a fifth column",
        "Decimal search with exact-match and substring filtering",
        "Color-coded columns for fast visual scanning",
        "Paginated display with 20 rows per page across 51 pages",
        "Input validation with inline error messages for out-of-range values"
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
      "educationalLevel": "Middle School, High School, College",
      "keywords": "base conversion table, number base converter, binary to decimal table, decimal to binary table, binary to hexadecimal, hexadecimal to binary, octal to decimal, decimal to octal, hexadecimal to decimal, decimal to hexadecimal, base 2 base 10 base 16, custom base converter, numeral system conversion, positional number system table, base 2 to 36 conversion"
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
          "name": "Tables",
          "item": "https://www.learnmathclass.com/tables"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Base Conversion Table",
          "item": "https://www.learnmathclass.com/tables/base-conversion"
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
    props:{
      sectionsContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Base Conversion Table - Binary, Octal, Hex 0-1000 | Learn Math Class",
        description: "Convert 0 to 1000 across decimal, binary, octal, hexadecimal, and any custom base from 2 to 36. Searchable table with side-by-side cross-base lookup.",
        keywords: keyWords.join(", "),
        url: "/tables/base-conversion",
        name: "Base Conversion Table",
        hubDescription: "Look up every integer from 0 to 1000 across decimal, binary, octal, hexadecimal, and a custom base from 2 to 36, all on the same row. Searchable by decimal value, paginated 20 rows at a time, with color-coded columns for fast cross-base scanning.",
        category: "Arithmetic",
        subCategory: ""
      },
      navigationGroup,
    }
  }
}

export default function BaseConversionTablePage({seoData, sectionsContent, faqQuestions, schemas, navigationGroup}) {

  const genericSections = Object.keys(sectionsContent).map((key, index) => ({
    id: `${index + 1}`,
    title: sectionsContent[key].title,
    link: sectionsContent[key].link,
    content: [sectionsContent[key].content]
  }))

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
           // topOffset='65px'
           sidebarWidth='45px'
           panelWidth='200px'
           iconColor='white'
           panelBackgroundColor='#f2f2f2'
         />
   <Breadcrumb/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Base Conversion Table</h1>
   <br/>
   <VerticalButtonGroup items={navigationGroup}
   verticalOffset='200px'
   isSticky={true}
   width='250px'/>
   <br/>
   <div style={{width:'60%',margin:'auto',marginTop:'-200px'}}>
   <BaseConversionTable/>
   </div>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
   <br/>
   <br/>
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