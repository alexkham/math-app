import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

//   \u2022 First item
// \u2022 Second item

  
// <hr style="border-width:1px;"></hr>

// <hr style="color:blue;" />

// <hr style="border-color:#3498db; border-width:1px;" />



// @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
        //     {processContent(sectionsContent.normal.notation)}
        // </div>,


//   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
//     {processContent(sectionsContent.normal.parameters)}
// </div>,
        
//  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
//                   {processContent(sectionsContent.obj4.content)}
//                   </div>,


//  <div key={'dist'} style={{
//                     textAlign: 'center',
//                     transform: 'scale(0.98)',
//                     transformOrigin: 'center',
//                     marginTop:'50px',
//                     marginLeft:'-150px'
//                   }} dangerouslySetInnerHTML={{ 
//                     __html:   sectionContent.distributions.svg,
//                   }} />


const sectionsContent = {
  obj1: {
    title: `Definition`,
    content: `The $n$-th square number is:

$$S_n = n^2$$

The name reflects the geometric construction: arrange $n^2$ dots in a square grid with $n$ rows and $n$ columns. The first square numbers are:

$$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \\ldots$$

A positive integer is called a **perfect square** if it equals $n^2$ for some integer $n$. Testing whether a number is a perfect square amounts to checking whether its [square root](!/algebra/roots) is an integer.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj2: {
    title: `Recursive Form and Odd Number Sums`,
    content: `Each square number can be built from the previous one by adding an L-shaped border — a **gnomon** — containing $2n - 1$ dots:

$$S_1 = 1, \\quad S_n = S_{n-1} + (2n - 1)$$

The increments $1, 3, 5, 7, 9, \\ldots$ are the odd numbers, which form an [arithmetic sequence](!/algebra/sequences/arithmetic) with first term $1$ and common difference $2$. Summing all the increments gives:

$$n^2 = 1 + 3 + 5 + \\cdots + (2n - 1)$$

Every perfect square is a sum of consecutive odd numbers starting from $1$. This identity can be verified by the arithmetic series formula: the sum of the first $n$ odd numbers is $\\frac{n}{2}(1 + (2n-1)) = n^2$.

The difference between consecutive squares is always odd: $S_n - S_{n-1} = 2n - 1$. This means no two consecutive integers are both perfect squares — there is always an odd gap between neighboring squares, and that gap widens as $n$ grows.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj3: {
    title: `Properties`,
    content: `Perfect squares have distinctive divisibility patterns. A perfect square modulo $4$ is always $0$ or $1$ — never $2$ or $3$. This is because even numbers squared give multiples of $4$, and odd numbers squared give $1$ more than a multiple of $4$. Similarly, a perfect square modulo $3$ is always $0$ or $1$ — never $2$.

The last digit of a perfect square can only be $0, 1, 4, 5, 6,$ or $9$. Any integer ending in $2, 3, 7,$ or $8$ is immediately ruled out as a perfect square, without computing any square root.

Consecutive perfect squares are always [coprime](!/arithmetic/divisibility): $\\gcd(n^2, (n+1)^2) = 1$, because $\\gcd(n, n+1) = 1$ and the GCD of squares equals the square of the GCD.

The number of perfect squares up to $N$ is $\\lfloor \\sqrt{N} \\rfloor$. Perfect squares become increasingly sparse — the gap between $n^2$ and $(n+1)^2$ is $2n + 1$, which grows linearly. Among the first $100$ integers, $10$ are perfect squares; among the first $10{,}000$, only $100$ are.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj4: {
    title: `Sum of Squares`,
    content: `The sum of the first $n$ square numbers is:

$$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$$

One derivation uses the telescoping identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$. Summing both sides from $k = 1$ to $n$:

$$(n+1)^3 - 1 = 3\\sum k^2 + 3\\sum k + n$$

Substituting $\\sum k = \\frac{n(n+1)}{2}$ and solving for $\\sum k^2$ gives the result.

For example, the sum of the first $5$ squares is $1 + 4 + 9 + 16 + 25 = 55$, which matches $\\frac{5 \\cdot 6 \\cdot 11}{6} = 55$.

This formula contrasts with the [triangular number](!/algebra/sequences/triangular-numbers) sum $\\sum k = \\frac{n(n+1)}{2}$, which is quadratic in $n$. The sum of squares is cubic — each additional term contributes a squared value, making the total grow faster.`,
    before: ``,
    after: ``,
    link: '',
  },
  obj5: {
    title: `Connections to Triangular Numbers`,
    content: `Square numbers and [triangular numbers](!/algebra/sequences/triangular-numbers) are linked by the identity:

$$S_n = T_n + T_{n-1}$$

Every perfect square is the sum of two consecutive triangular numbers. For $n = 4$: $16 = T_4 + T_3 = 10 + 6$. The geometric proof is direct: cut a square grid of $n^2$ dots along the diagonal staircase. The dots on and above the staircase form a triangle with $n$ rows ($T_n$ dots), and the dots below form a triangle with $n-1$ rows ($T_{n-1}$ dots).

Another connection runs through Pythagorean triples — sets of three positive integers $(a, b, c)$ satisfying $a^2 + b^2 = c^2$. Every primitive Pythagorean triple can be generated by choosing integers $m > n > 0$ with $\\gcd(m, n) = 1$ and opposite parity, then setting:

$$a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2$$

The triple $(3, 4, 5)$ comes from $m = 2, n = 1$; the triple $(5, 12, 13)$ from $m = 3, n = 2$. Pythagorean triples connect square numbers to geometry — each triple defines a right triangle with integer side lengths.`,
    before: ``,
    after: ``,
    link: '',
  },
}

  const introContent = {
  id: 'intro',
  title: `Perfect Squares as a Sequence`,
  content: `The square numbers $1, 4, 9, 16, 25, \\ldots$ are among the most recognizable sequences in mathematics. Each is the product of an integer with itself, each can be visualized as dots filling a square grid, and each is a sum of consecutive odd numbers. Their properties connect to arithmetic sequences, triangular numbers, and divisibility.`,
}



   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Title | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/algebra/sequences/square-numbers",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
    // {
    //     id:'0',
    //     title:sectionsContent.obj0.title,
    //     link:sectionsContent.obj0.link,
    //     content:[
    //       sectionsContent.obj0.content,
    //     ]
    // },
    {
        id:'1',
        title:sectionsContent.obj1.title,
        link:sectionsContent.obj1.link,
        content:[
          sectionsContent.obj1.content,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
        ]
    },
    {
        id:'4',
        title:sectionsContent.obj4.title,
        link:sectionsContent.obj4.link,
        content:[
          sectionsContent.obj4.content,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
        ]
    },
    // {
    //     id:'6',
    //     title:sectionsContent.obj6.title,
    //     link:sectionsContent.obj6.link,
    //     content:[
    //       sectionsContent.obj6.content,
    //     ]
    // },
    // {
    //     id:'7',
    //     title:sectionsContent.obj7.title,
    //     link:sectionsContent.obj7.link,
    //     content:[
    //       sectionsContent.obj7.content,
    //     ]
    // },
    // {
    //     id:'8',
    //     title:sectionsContent.obj8.title,
    //     link:sectionsContent.obj8.link,
    //     content:[
    //       sectionsContent.obj8.content,
    //     ]
    // },
    // {
    //     id:'9',
    //     title:sectionsContent.obj9.title,
    //     link:sectionsContent.obj9.link,
    //     content:[
    //       sectionsContent.obj9.content,
    //     ]
    // },
    // {
    //     id:'10',
    //     title:sectionsContent.obj10.title,
    //     link:sectionsContent.obj10.link,
    //     content:[
    //       sectionsContent.obj10.content,
    //     ]
    // },
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
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
    //     ]
    // },
    // {
    //     id:'1',
    //     title:sectionsContent.obj1.title,
    //     link:sectionsContent.obj1.link,
    //     content:[
    //       sectionsContent.obj1.content,
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
    dangerouslySetInnerHTML={{ 
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": seoData.name,
        "description": seoData.description,
        "keywords": seoData.keywords,
        "url": `https://www.learnmathclass.com${seoData.url}`,
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US",
        "mainEntity": {
          "@type": "Article",
          "name": seoData.name,
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "Learn Math Class"
          }
        }
      })
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Square Numbers</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
   <br/>
   <br/>
   <br/>
    <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        />
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
