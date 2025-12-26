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

   const keyWords = [
  'probability models',
  'probability model examples',
  'sample space and events',
  'coin toss model',
  'dice roll model',
  'urn model probability',
  'basic probability models',
  'what is a probability model',
  'probability modeling',
  'random experiment models'
];


    const sectionsContent={

    obj1:{
      title:`What Is a Probability Model`,
      content:`
A probability model is a mathematical description of a random situation.

It specifies:
• the set of all possible outcomes
• which collections of outcomes are considered events
• how probabilities are assigned to those events

The model defines **how randomness is generated**, not what is later measured from it.  
Questions about averages, counts, or numerical outcomes arise only after additional structure is placed on the model.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`Why Probability Uses Models`,
      content:`
Real-world situations are too complex to analyze directly.  
Probability works by replacing reality with a simplified structure that captures only the random mechanism of interest.

Models make this possible by:
• stripping away irrelevant details
• making assumptions explicit
• allowing repeated reasoning under controlled conditions

Any conclusion drawn in probability is therefore conditional on the model being used.  
The quality of a probabilistic result depends not on how realistic a situation feels, but on how appropriate the chosen model is for the question being asked.
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`What all Probability Models Have in Common`,
      content:`
Probability models may look different on the surface, but they are built from the same basic ingredients.

At the core of every model are:
• a list of possible outcomes the experiment may produce
• collections of outcomes treated as meaningful events
• numerical weights expressing how likely those events are

Nothing in this structure depends on the story behind the model.  
Coins, dice, cards, measurements, or simulations all fit into the same abstract framework.

This is why probability theory can move freely between different contexts:  
the interpretation changes, but the underlying machinery does not.
`,
      before:``,
      after:``,
      link:'',
      plagiarism:'yes',
  
    },
    obj4:{
      title:`Models, Random Variables, and Distributions`,
      content:`
A probability model defines a space of outcomes and their probabilities.

A **random variable** is a function defined on that space:

$\[X : S \\rightarrow \\mathbb{R}\]$

A **distribution** is the probability law induced by that function:

$\[P(X \\in A)\]$

The order is fixed:

model → random variable → distribution

The model supplies randomness.  
The random variable selects what is measured.  
The distribution records the resulting probabilities.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`One Distribution, Many Models`,
      content:`
A probability distribution does not uniquely identify how randomness was produced.

The same distribution may arise from:
• different outcome spaces
• different experimental setups
• different probability assignments

Once a distribution is formed, the mechanism that generated it is no longer visible.

Distributions describe *results*, not *processes*.  
Models describe *processes*, not results.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`One Model, Many Distributions`,
      content:`
Fix a probability model $(S,\mathcal{E},P)$.

Different random variables can be defined on the same model:

$\[X_1, X_2, \\dots : S \\rightarrow \\mathbb{R}.\]$

Each choice produces its own distribution:

$\[P(X_k \\in A), \\quad A \\subseteq \\mathbb{R}.\]$

By changing the mapping (not the model), the resulting distribution may be:
• discrete
• continuous
• mixed

The model remains unchanged.  
Only the measurement changes.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Modeling Assumptions`,
      content:`
Every probability model rests on explicit choices.

Typical assumptions include:
• outcomes are treated as symmetric
• trials do not influence each other
• the same mechanism is repeated each time
• the outcome space is finite or infinite

These assumptions are not conclusions.  
They are inputs to the model.

Changing an assumption changes the model, and therefore changes all results derived from it.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj8:{
      title:`Simple Discrete Models`,
      content:`
Some probability models have a finite or countable set of outcomes.

In such models:
• all outcomes can be listed explicitly
• events are formed by grouping outcomes
• probabilities are assigned directly to each outcome

These models are often used as starting points because their structure is fully visible.

Examples of this class include:
• two-outcome mechanisms
• finite multi-outcome mechanisms

Concrete realizations of these appear on the following pages:
• Coin Toss Model
• Dice Roll Model
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj9:{
      title:`From Simple Models to Richer Ones`,
      content:`
Simple discrete models are only the starting point.

By extending or modifying a basic model, one can describe:
• repeated experiments
• dependent outcomes
• infinite outcome spaces
• measurements that vary continuously

The underlying idea remains the same: outcomes and probabilities are fixed first, and additional structure is built on top of them.

More advanced models reuse the same foundations, but allow for greater complexity in how randomness is represented.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj10:{
      title:`Models vs Reality`,
      content:`
A probability model is not a description of the world itself.

It is a constructed object that isolates a specific random mechanism while ignoring everything else.

Because of this:
• models can be useful even when they are unrealistic
• realistic detail does not guarantee correctness
• conclusions are valid only within the chosen model

When a model does not match the situation it is applied to, probability calculations remain correct mathematically but become irrelevant in practice.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj11:{
      title:`How This Section Is Organized`,
      content:`
This page introduces probability models at a conceptual level.

Each model is then developed on its own page, using the same internal structure:
• description of the random mechanism
• definition of outcomes and events
• probability assignment
• possible measurements and distributions

This organization allows new models to be added without changing the overall framework, and makes it easy to compare different modeling choices across examples.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj12:{
      title:`Model Pages`,
      content:`
The following pages present concrete probability models built using the framework introduced above.

Each page focuses on a single random mechanism and shows how outcomes, events, and probabilities are specified within that model.

Available models:
• Coin Toss Model
• Dice Roll Model

Additional models will be added over time, following the same structure and conventions.
`,
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
  title: "Modeling Random Phenomena",
  content: `
Probability does not begin with formulas or distributions.  
It begins with simplified descriptions of situations in which outcomes are uncertain.

These descriptions do not attempt to capture reality in full detail.  
They isolate the random mechanism of interest and ignore everything else.

Such idealized descriptions are called **probability models**.  
They provide a controlled setting in which randomness can be analyzed, compared, and reused across different problems.
`
}




   return {
      props:{
         sectionsContent,
         introContent,
          seoData: {
        title: "Probability Models | Learn Math Class",
        description: "Metadescription",
        keywords: keyWords.join(", "),
        url: "/probability/models",
         name: "name"
      },
        
       }
    }
   }

export default function ModelsPage({seoData,sectionsContent , introContent}) {

    
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
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
        ]
    },
    {
        id:'10',
        title:sectionsContent.obj10.title,
        link:sectionsContent.obj10.link,
        content:[
          sectionsContent.obj10.content,
        ]
    },
    {
        id:'11',
        title:sectionsContent.obj11.title,
        link:sectionsContent.obj11.link,
        content:[
          sectionsContent.obj11.content,
        ]
    },
    {
        id:'12',
        title:sectionsContent.obj12.title,
        link:sectionsContent.obj12.link,
        content:[
          sectionsContent.obj12.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Probability Models</h1>
   <br/>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
    secondaryNavMode="siblings"  // or "siblings"
    secondaryNavTitle="Other Pages in Probability Section" 
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
