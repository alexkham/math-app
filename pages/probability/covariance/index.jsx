// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'


// export async function getStaticProps(){

//  const keyWords = [
//   "covariance",
//   "covariance in probability",
//   "joint random variables",
//   "covariance vs independence",
//   "positive covariance",
//   "negative covariance",
//   "zero covariance",
//   "covariance and correlation",
//   "joint distribution",
//   "multivariate probability"
// ];


//     const sectionsContent={

//     obj1:{
//       title:`From Single Random Variables to Pairs`,
//       content:`
// [Variance](!/probability/variance) describes how a single [random variable](!/probability/random-variables) is distributed around its typical
// value. It captures variability, but only for one quantity at a time.

// In many applications, two quantities are observed together in each trial or
// measurement. Treating them independently ignores how their values are related across
// the same observations.

// Covariance extends the idea of variability to pairs of [random variables](!/probability/random-variables) by focusing on
// their joint behavior rather than on each variable in isolation.
// `,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
//     obj2:{
//       title:`What Covariance Describes`,
//       content:`
// For each [random variable](!/probability/random-variables), values fluctuate around an average level.  
// Covariance examines how the positions of two variables relative to their own averages
// compare across the same observations.

// If both variables tend to be above their averages at the same time, or below them at
// the same time, the covariance reflects this alignment.  
// If one variable tends to be above its average while the other is below, the covariance
// reflects an opposing pattern.

// In this way, covariance summarizes the directional relationship between the deviations
// of two [random variable](!/probability/random-variables).
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
  
//     obj3:{
  
//       title:`Interpreting the Sign of Covariance`,
//       content:`
// The value of covariance indicates the direction of the relationship between two random
// variables, not its strength.

// A positive covariance means that higher-than-average values of one variable tend to
// occur with higher-than-average values of the other.  
// A negative covariance means that higher-than-average values of one variable tend to
// occur with lower-than-average values of the other.

// A covariance close to zero indicates no consistent linear relationship in how the two
// variables deviate from their averages.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj4:{
//       title:`Covariance and Independence`,
//       content:`
// If two [random variables](!/probability/random-variables) are independent, their joint behavior separates into two
// unrelated components. As a result, their covariance evaluates to zero.

// The converse does not hold. A covariance value of zero does not rule out dependence.
// Two variables may exhibit structured relationships that covariance does not capture.

// Covariance therefore reflects only one limited aspect of how [random variables](!/probability/random-variables) may be
// related.`,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj5:{
//       title:`Why Covariance Is Important`,
//       content:`
// Covariance provides a way to describe how two random variables are related beyond their
// individual behavior. It captures information that [variance](!/probability/variance) alone cannot express.

// This concept plays a central role in many areas of probability and statistics, including
// the study of joint distributions, linear relationships, and multivariate models.
// It is also a key component in formulas involving sums of random variables.

// Understanding covariance is essential before introducing correlation, covariance
// matrices, and more advanced multivariate concepts.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj6:{
//       title:`Common Examples of Covariance`,
//       content:`
// Covariance arises whenever two numerical quantities are recorded from the same set of
// observations.

// Examples include pairs such as height and weight, study time and exam score, daily
// temperature and energy usage, or returns of two financial assets.
// In each case, the interest is not only in the individual values, but in how the two
// quantities are related across the same observations.

// These situations motivate the use of covariance as a basic descriptive tool for joint
// behavior.
// `,
//       before:``,
//       after:``,
//       link:'',
  
//     },
//     obj7:{
//       title:`Notation & Naming Conventions`,
//       content:`
// Covariance between two [random variables](!/probability/random-variables) is written as $\\operatorname{Cov}(X,Y)$.  
// The order of the variables does not affect the value, so $\\operatorname{Cov}(X,Y)$ and
// $\\operatorname{Cov}(Y,X)$ represent the same quantity.

// When a [random variable](!/probability/random-variables)e is paired with itself, covariance reduces to [variance](!/probability/variance).  
// This relationship links covariance directly to concepts introduced earlier.


// `,
//       before:``,
//       after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
//       link:'',
  
//     },
//     obj8:{
//       title:`What Comes Next`,
//       content:`
// Covariance serves as the foundation for more structured ways of describing relationships
// between multiple random variables.

// It leads directly to correlation, covariance matrices, and the study of joint
// distributions. These tools extend the ideas introduced here to broader multivariate
// settings and applications.
// `,
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
//   title: "Covariance: How Two Random Variables Are Related",
//   content: `
//   In many probability settings, two numerical quantities are recorded from the same
// experiment or observation. Describing each quantity on its own does not explain how
// they behave in relation to one another.

// Covariance is the concept used to describe this relationship. It focuses on how the
// numerical values of two random variables compare across repeated observations, relative
// to their typical levels.

// This idea becomes essential whenever probability models involve more than one random
// variable.
// `
// }




//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Covariance in Probability| Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/probability/covariance",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function CovariancePage({seoData,sectionsContent , introContent}) {

    
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
//           sectionsContent.obj7.after,
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
//     // {
//     //     id:'9',
//     //     title:sectionsContent.obj9.title,
//     //     link:sectionsContent.obj9.link,
//     //     content:[
//     //       sectionsContent.obj9.content,
//     //     ]
//     // },
//     // {
//     //     id:'10',
//     //     title:sectionsContent.obj10.title,
//     //     link:sectionsContent.obj10.link,
//     //     content:[
//     //       sectionsContent.obj10.content,
//     //     ]
//     // },
//     // {
//     //     id:'11',
//     //     title:sectionsContent.obj11.title,
//     //     link:sectionsContent.obj11.link,
//     //     content:[
//     //       sectionsContent.obj11.content,
//     //     ]
//     // },
//     // {
//     //     id:'12',
//     //     title:sectionsContent.obj12.title,
//     //     link:sectionsContent.obj12.link,
//     //     content:[
//     //       sectionsContent.obj12.content,
//     //     ]
//     // },
//     // {
//     //     id:'13',
//     //     title:sectionsContent.obj13.title,
//     //     link:sectionsContent.obj13.link,
//     //     content:[
//     //       sectionsContent.obj13.content,
//     //     ]
//     // },
//     // {
//     //     id:'14',
//     //     title:sectionsContent.obj14.title,
//     //     link:sectionsContent.obj14.link,
//     //     content:[
//     //       sectionsContent.obj14.content,
//     //     ]
//     // },
//     // {
//     //     id:'15',
//     //     title:sectionsContent.obj15.title,
//     //     link:sectionsContent.obj15.link,
//     //     content:[
//     //       sectionsContent.obj15.content,
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
//    <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Covariance</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//     secondaryNavMode="siblings"  // or "siblings"
//     secondaryNavTitle="Other Pages in Probability Section" 
   
//    />
//    <br/>
//    <br/>
//    <br/>
//     <IntroSection 
//           id={introContent.id}
//           title={introContent.title}
//           content={introContent.content}
//            backgroundColor='#f9fafb'
//           //  "#f2f2f2"
//           textColor="#06357a"
//         />
//    <br/>
//    <br/>
//    <Sections sections={genericSections}/>
//    <br/>
//    <br/>
//    <br/>
//    {/* <ScrollUpButton/> */}
//    </>
//   )
// }



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
    "covariance",
    "covariance in probability",
    "joint random variables",
    "covariance vs independence",
    "positive covariance",
    "negative covariance",
    "zero covariance",
    "covariance and correlation",
    "covariance notation",
    "joint distribution",
    "multivariate probability",
    "covariance interpretation",
    "covariance examples"
  ]

  const faqQuestions = {
    obj1: {
      question: "What is covariance in probability?",
      answer: "Covariance measures how two random variables are related by examining how their values deviate from their respective averages across the same observations. It extends the concept of variance from single variables to pairs of variables, focusing on their joint behavior."
    },
    obj2: {
      question: "What does positive covariance mean?",
      answer: "Positive covariance indicates that higher-than-average values of one variable tend to occur with higher-than-average values of the other variable. Both variables move in the same direction relative to their averages."
    },
    obj3: {
      question: "Does zero covariance mean independence?",
      answer: "No. While independent random variables always have zero covariance, the reverse is not true. Zero covariance only indicates no consistent linear relationship, but structured non-linear dependencies may still exist between the variables."
    },
    obj4: {
      question: "How is covariance different from variance?",
      answer: "Variance measures the spread of a single random variable around its mean, while covariance measures the joint behavior of two random variables. When covariance is calculated for a variable with itself, it equals that variable's variance."
    },
    obj5: {
      question: "What are common examples of covariance in practice?",
      answer: "Covariance arises when recording paired numerical quantities from the same observations, such as height and weight, study time and exam scores, daily temperature and energy usage, or returns of two financial assets. It describes how these quantities relate across observations."
    }
  }

  const schemas = {
    learningResource: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "Covariance in Probability",
      "description": "Learn how covariance measures joint behavior of random variables. Understand positive, negative, and zero covariance, independence relationships, and applications.",
      "url": "https://www.learnmathclass.com/probability/covariance",
      "inLanguage": "en-US",
      "learningResourceType": "Explanation",
      "educationalLevel": "High School, College",
      "educationalUse": "Learning",
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student"
      },
      "about": {
        "@type": "Thing",
        "name": "Covariance"
      },
      "teaches": [
        "How covariance extends variance to pairs of random variables",
        "Interpretation of positive, negative, and zero covariance",
        "Relationship between covariance and independence",
        "Why covariance is important in probability theory",
        "Notation and naming conventions for covariance",
        "Common applications of covariance in practice"
      ],
      "keywords": keyWords.join(", "),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString()
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
          "name": "Probability",
          "item": "https://www.learnmathclass.com/probability"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Covariance in Probability",
          "item": "https://www.learnmathclass.com/probability/covariance"
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

  const sectionsContent={

    obj1:{
      title:`From Single Random Variables to Pairs`,
      content:`
[Variance](!/probability/variance) describes how a single [random variable](!/probability/random-variables) is distributed around its typical
value. It captures variability, but only for one quantity at a time.

In many applications, two quantities are observed together in each trial or
measurement. Treating them independently ignores how their values are related across
the same observations.

Covariance extends the idea of variability to pairs of [random variables](!/probability/random-variables) by focusing on
their joint behavior rather than on each variable in isolation.
`,
      before:``,
      after:``,
      link:'',
  
  
    },
    obj2:{
      title:`What Covariance Describes`,
      content:`
For each [random variable](!/probability/random-variables), values fluctuate around an average level.  
Covariance examines how the positions of two variables relative to their own averages
compare across the same observations.

If both variables tend to be above their averages at the same time, or below them at
the same time, the covariance reflects this alignment.  
If one variable tends to be above its average while the other is below, the covariance
reflects an opposing pattern.

In this way, covariance summarizes the directional relationship between the deviations
of two [random variable](!/probability/random-variables).
`,
      before:``,
      after:``,
      link:'',
  
    },
  
    obj3:{
  
      title:`Interpreting the Sign of Covariance`,
      content:`
The value of covariance indicates the direction of the relationship between two 
[random variables](!/probability/random-variables), not its strength.

A positive covariance means that higher-than-average values of one variable tend to
occur with higher-than-average values of the other.  
A negative covariance means that higher-than-average values of one variable tend to
occur with lower-than-average values of the other.

A covariance close to zero indicates no consistent linear relationship in how the two
variables deviate from their averages.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj4:{
      title:`Covariance and Independence`,
      content:`
If two [random variables](!/probability/random-variables) are independent, their joint behavior separates into two
unrelated components. As a result, their covariance evaluates to zero.

The converse does not hold. A covariance value of zero does not rule out dependence.
Two variables may exhibit structured relationships that covariance does not capture.

Covariance therefore reflects only one limited aspect of how [random variables](!/probability/random-variables) may be
related.`,
      before:``,
      after:``,
      link:'',
  
    },
    obj5:{
      title:`Why Covariance Is Important`,
      content:`
Covariance provides a way to describe how two [random variables](!/probability/random-variables) are related beyond their
individual behavior. It captures information that [variance](!/probability/variance) alone cannot express.

This concept plays a central role in many areas of probability and statistics, including
the study of joint distributions, linear relationships, and multivariate models.
It is also a key component in formulas involving sums of [random variables](!/probability/random-variables).

Understanding covariance is essential before introducing correlation, covariance
matrices, and more advanced multivariate concepts.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj6:{
      title:`Common Examples of Covariance`,
      content:`
Covariance arises whenever two numerical quantities are recorded from the same set of
observations.

Examples include pairs such as height and weight, study time and exam score, daily
temperature and energy usage, or returns of two financial assets.
In each case, the interest is not only in the individual values, but in how the two
quantities are related across the same observations.

These situations motivate the use of covariance as a basic descriptive tool for joint
behavior.
`,
      before:``,
      after:``,
      link:'',
  
    },
    obj7:{
      title:`Notation & Naming Conventions`,
      content:`
Covariance between two [random variables](!/probability/random-variables) is written as $\\operatorname{Cov}(X,Y)$.  
The order of the variables does not affect the value, so $\\operatorname{Cov}(X,Y)$ and
$\\operatorname{Cov}(Y,X)$ represent the same quantity.

When a [random variable](!/probability/random-variables)e is paired with itself, covariance reduces to [variance](!/probability/variance).  
This relationship links covariance directly to concepts introduced earlier.


`,
      before:``,
      after:`@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@`,
      link:'',
  
    },
    obj8:{
      title:`What Comes Next`,
      content:`
Covariance serves as the foundation for more structured ways of describing relationships
between multiple [random variables](!/probability/random-variables).

It leads directly to correlation, covariance matrices, and the study of joint
distributions. These tools extend the ideas introduced here to broader multivariate
settings and applications.
`,
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
    title: "Covariance: How Two Random Variables Are Related",
    content: `
  In many probability settings, two numerical quantities are recorded from the same
experiment or observation. Describing each quantity on its own does not explain how
they behave in relation to one another.

Covariance is the concept used to describe this relationship. It focuses on how the
numerical values of two random variables compare across repeated observations, relative
to their typical levels.

This idea becomes essential whenever probability models involve more than one random
variable.
`
  }

  return {
    props: {
      sectionsContent,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Covariance: Joint Behavior of Random Variables | Learn Math Class",
        description: "Learn how covariance measures joint behavior of random variables. Understand positive, negative, and zero covariance, independence relationships, and applications.",
        keywords: keyWords.join(", "),
        url: "/probability/covariance",
        name: "Covariance in Probability"
      }
    }
  }
}

export default function CovariancePage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
          sectionsContent.obj7.after,
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
      __html: JSON.stringify(schemas.learningResource)
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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Covariance</h1>
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