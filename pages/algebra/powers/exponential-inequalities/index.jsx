import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'


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

    const sectionsContent={

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj1: {
  title: `Key Principle: Base Determines Direction`,
  content: `The behavior of an exponential inequality depends entirely on whether the base is greater than $1$ or between $0$ and $1$. This is the central idea on this page, and every solving method flows from it.

When $a > 1$, the function $a^x$ is increasing — larger exponents produce larger values. So the inequality $a^x > a^y$ holds exactly when $x > y$. The direction of the inequality is preserved.

When $0 < a < 1$, the function $a^x$ is decreasing — larger exponents produce smaller values. So the inequality $a^x > a^y$ holds exactly when $x < y$. The direction of the inequality flips.

The base $a = 1$ is excluded because $1^x = 1$ for all $x$ — no inequality between distinct powers is possible.

This directional rule replaces the familiar "multiply or divide by a negative flips the inequality" from linear algebra. In exponential inequalities, it is not the sign of a multiplier but the size of the base that governs whether the inequality reverses.`,
  before: ``,
  after: ``,
  link: '',
},

obj2: {
  title: `Solving Basic Exponential Inequalities`,
  content: `The simplest exponential inequalities are solved by expressing both sides as powers of the same base and then applying the directional rule.

The inequality $2^x > 8$ rewrites as $2^x > 2^3$. Since the base $2$ is greater than $1$, the function is increasing and the inequality preserves direction: $x > 3$.

The inequality $\\left(\\frac{1}{3}\\right)^x > 9$ requires more care. Rewrite $9$ as a power of $\\frac{1}{3}$: since $\\frac{1}{3}^{-2} = 3^2 = 9$, the inequality becomes $\\left(\\frac{1}{3}\\right)^x > \\left(\\frac{1}{3}\\right)^{-2}$. The base $\\frac{1}{3}$ is between $0$ and $1$, so the function is decreasing and the inequality flips: $x < -2$.

The inequality $5^{x-1} \\leq 125$ rewrites as $5^{x-1} \\leq 5^3$. Base greater than $1$, direction preserved: $x - 1 \\leq 3$, so $x \\leq 4$.

The procedure is consistent: rewrite both sides with a common base, then read off the inequality between exponents — preserving direction if the base exceeds $1$, reversing it if the base is a proper fraction.`,
  before: ``,
  after: ``,
  link: '',
},


obj3: {
  title: `Inequalities Requiring Simplification`,
  content: `When the two sides of an inequality do not immediately share a base, the [laws of exponents](!/algebra/powers/laws) are needed to rewrite one or both sides before comparison.

The inequality $4^x < 32$ involves $4 = 2^2$ and $32 = 2^5$. Rewriting: $(2^2)^x < 2^5$, so $2^{2x} < 2^5$. Base $2 > 1$, direction preserved: $2x < 5$, giving $x < \\frac{5}{2}$.

The inequality $9^{x+1} \\geq 27^x$ involves $9 = 3^2$ and $27 = 3^3$. Rewriting: $3^{2(x+1)} \\geq 3^{3x}$, which gives $3^{2x+2} \\geq 3^{3x}$. Base $3 > 1$, direction preserved: $2x + 2 \\geq 3x$, so $2 \\geq x$, meaning $x \\leq 2$.

The inequality $\\left(\\frac{1}{4}\\right)^x > \\left(\\frac{1}{8}\\right)^2$ requires converting both bases. Since $\\frac{1}{4} = 2^{-2}$ and $\\frac{1}{8} = 2^{-3}$, the inequality becomes $(2^{-2})^x > (2^{-3})^2$, or $2^{-2x} > 2^{-6}$. Base $2 > 1$: $-2x > -6$, so $x < 3$.

The algebraic manipulation happens before the directional rule is applied. Simplify first, compare second.`,
  before: ``,
  after: ``,
  link: '',
},


obj4: {
  title: `Domain and Sign Considerations`,
  content: `Exponential expressions with positive bases carry a property that constrains the solution space: $a^x > 0$ for every real $x$ when $a > 0$.

No real exponent can make a positive base produce zero or a negative result. The equation $2^x = 0$ has no solution. The inequality $3^x < 0$ has no solution. This fact is not just a technicality — it eliminates entire branches of potential answers.

The inequality $2^x > -5$ is satisfied by every real $x$, because $2^x$ is always positive and thus always greater than $-5$. No computation is needed once the sign property is recognized.

The inequality $2^x < -1$ has no solution at all, for the same reason.

When [negative exponents](!/algebra/powers/negative-exponents) appear with variable bases, domain restrictions must be checked. The expression $x^{-2} > 4$ requires $x \\neq 0$, and the solution set must exclude zero regardless of what the algebra produces. Similarly, expressions involving [rational exponents](!/algebra/powers/rational-exponents) with even roots require the base to be non-negative.`,
  before: ``,
  after: ``,
  link: '',
},

obj5: {
  title: `Compound Inequalities`,
  content: `A compound exponential inequality places an exponential expression between two bounds, requiring the variable to satisfy both constraints simultaneously.

The inequality $\\frac{1}{4} < 2^x < 16$ sets lower and upper bounds on $2^x$. Rewrite each bound as a power of $2$: $2^{-2} < 2^x < 2^4$. Since the base $2 > 1$ preserves direction, the solution is $-2 < x < 4$.

The inequality $\\frac{1}{27} \\leq 3^{x-1} \\leq 81$ rewrites as $3^{-3} \\leq 3^{x-1} \\leq 3^4$. Preserving direction: $-3 \\leq x - 1 \\leq 4$, so $-2 \\leq x \\leq 5$.

With a base between $0$ and $1$, both inequality directions flip. The inequality $\\frac{1}{9} < \\left(\\frac{1}{3}\\right)^x < 3$ rewrites as $\\left(\\frac{1}{3}\\right)^{-2} < \\left(\\frac{1}{3}\\right)^x < \\left(\\frac{1}{3}\\right)^{-1}$. Since $\\frac{1}{3} < 1$, the function is decreasing: $-2 > x > -1$, which reads as $-1 < x < -2$ — but this is empty when written carelessly. Reversing properly: $-2 < x < -1$. Care with the direction at each step prevents this kind of error.

Systems involving multiple exponential inequalities with different bases are handled by solving each inequality independently and then intersecting the solution sets.`,
  before: ``,
  after: ``,
  link: '',
},
    obj6:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    },
    obj13:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },
    obj14:{
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
      link:'',
  
    },


    obj15:{
  
      title:``,
      content:``,
      before:``,
      after:``,
      link:'',
  
    }
  
  }


  const introContent = {
  id: "intro",
  title: "When We Compare Powers",
  content: `[Exponential equations](!/algebra/powers/exponential-equations) ask when two exponential expressions are equal. Exponential inequalities ask when one is larger than the other — and the answer hinges on a single property of the base that changes everything about how the inequality behaves.`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Exponential Inequalities | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/algebra/powers/exponential-inequalities",
         name: "name"
      },
        
       }
    }
   }

export default function InequalitiesPage({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Exponential Inequalities</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="children"  // or "siblings"
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
