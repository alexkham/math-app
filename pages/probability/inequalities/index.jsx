import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){

  const keyWords=['','','','','']

  // •

    const sectionsContent={

    obj1:{
      title:`What Probability Inequalities Do`,
      content:`
Probability inequalities place limits on how likely certain events can be, without requiring full knowledge of the underlying distribution.

They do not attempt to compute exact probabilities. Instead, they provide bounds that are guaranteed to hold whenever the stated assumptions are satisfied.

In practice, this means they can:
• bound tail probabilities
• control the chance of large deviations
• give worst-case guarantees
• remain valid even when the distribution is unknown

Probability inequalities are therefore tools for reasoning under uncertainty when precise calculation is not possible or not necessary.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`Why Inequalities Matter in Probability`,
      content:`
Exact probability calculations are often unavailable or impractical.

In many situations, the full distribution of a random variable is unknown, difficult to compute, or unnecessary for the question being asked. Probability inequalities make it possible to reason in such cases by providing bounds that hold under broad conditions.

Because they rely on minimal assumptions, inequalities are used:
• to justify convergence results
• to control error and variability
• to obtain guarantees that remain valid across many models

For this reason, probability inequalities are foundational tools in both theoretical arguments and applied probability.
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`What Inequalities Depend On`,
      content:`
Probability inequalities are built on a small set of basic quantities associated with random variables.

Most inequalities rely on:
• the expectation of a random variable
• measures of spread such as variance
• structural assumptions like non-negativity or boundedness

Different inequalities require different levels of information.  
The fewer assumptions used, the more general the bound tends to be, but the less tight it becomes.

This shared dependence on simple characteristics explains why very different random variables can be constrained by the same inequality.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Types of Probability Inequalities`,
      content:`
Probability inequalities can be grouped according to the kind of information they use and the type of bounds they provide.

Common high-level categories include:
• inequalities based only on expectation
• inequalities that incorporate variance or higher moments
• tail bounds that control extreme deviations
• concentration-type inequalities that sharpen bounds under stronger assumptions

These categories are not rigid.  
They reflect increasing levels of available information, with stronger assumptions generally leading to tighter bounds.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Featured Inequalities`,
      content:`
This section highlights core probability inequalities that are used throughout probability theory.  
Each inequality has its own page with assumptions, statements, and typical uses.

**Markov’s Inequality**
• Applies to non-negative random variables
• Uses expectation only
• Provides very general, often loose bounds



**Chebyshev’s Inequality**
• Uses both expectation and variance
• Gives tighter bounds than Markov under stronger assumptions
• Central for reasoning about deviations from the mean


`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Relationship Between Common Inequalities`,
      content:`
Probability inequalities form a hierarchy based on the assumptions they require.

• **Markov’s inequality** uses only non-negativity and expectation, making it broadly applicable but often loose.
• **Chebyshev’s inequality** adds information about variance, which tightens the bound while reducing generality.

This illustrates a general trade-off:
• fewer assumptions → wider applicability
• more assumptions → sharper bounds

Many other inequalities fit into this pattern, refining earlier ones by incorporating additional structure or moments.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`How Inequalities Are Used`,
      content:`
Probability inequalities are used to control uncertainty when exact calculations are unavailable or unnecessary.

Typical uses include:
• bounding tail probabilities
• estimating how far a random variable can deviate from a reference value
• proving convergence results without specifying distributions
• comparing variability across different models

Because they provide guarantees that hold under broad conditions, inequalities are often used as intermediate tools. They establish limits first, and more precise results are built on top of them when additional information becomes available.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Inequalities vs Exact Distributions`,
      content:`
Probability inequalities do not describe the full behavior of a random variable.

They provide bounds that must hold, but they do not capture how probability is distributed within those bounds. As a result, the estimates they give may be conservative or loose.

When the exact distribution of a random variable is known and manageable, working directly with that distribution is usually preferable. Inequalities become most valuable when such information is missing, incomplete, or too costly to compute.

In this sense, inequalities complement exact methods rather than replace them.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`How This Section Is Organized`,
      content:`
This page provides an overview of probability inequalities and how they fit into probability theory.

Each inequality is treated on its own page, where its assumptions, statement, and implications are presented in detail. The parent page focuses on connections, scope, and conceptual differences rather than formulas or proofs.

As new inequalities are added, they are integrated into the same structure, allowing this section to expand without changing its overall organization.

**Inequality Pages**:

• Markov’s Inequality  
• Chebyshev’s Inequality  
• (Future additions will appear here)

`,
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
  title: "Probability Inequalities",
  content: `
In many probability problems, the exact distribution of a random variable is unknown or too complicated to work with directly.

Probability inequalities address this situation by providing guaranteed bounds on probabilities using limited information, such as an expected value or a variance. Instead of describing outcomes precisely, they restrict how extreme those outcomes can be.

These results are deliberately general. They apply across wide classes of random variables and make minimal assumptions, trading sharpness for reliability. For this reason, probability inequalities play a central role in theoretical analysis, estimation, and convergence arguments.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Probability Inequalities Page | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/inequalities",
         name: "name"
      },
        
       }
    }
   }

export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
  const genericSections=[
     {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
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
    {
        id:'6',
        title:sectionsContent.obj6.title,
        link:sectionsContent.obj6.link,
        content:[
          sectionsContent.obj6.content,
        ]
    },
    {
        id:'7',
        title:sectionsContent.obj7.title,
        link:sectionsContent.obj7.link,
        content:[
          sectionsContent.obj7.content,
        ]
    },
    {
        id:'8',
        title:sectionsContent.obj8.title,
        link:sectionsContent.obj8.link,
        content:[
          sectionsContent.obj8.content,
        ]
    },
   
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Inequalities</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}/>
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
