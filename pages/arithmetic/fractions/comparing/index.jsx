import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css';
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "comparing fractions",
  "how to compare fractions",
  "which fraction is larger",
  "cross multiplication fractions",
  "compare fractions different denominators",
  "ordering fractions",
  "fraction comparison",
  "compare fractions same denominator",
  "benchmark fractions",
  "compare mixed numbers",
  "fraction greater than less than",
  "comparing fractions methods",
  "order fractions least to greatest",
  "fractions on number line",
  "compare fractions calculator"
]
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

   obj0: {
  title: `Key Terms`,
  content: `
- [Common Denominator](!/arithmetic/definitions#common_denominator) — the primary method for comparing fractions with different denominators
- [Equivalent Fractions](!/arithmetic/definitions#equivalent_fractions) — converting to a shared denominator produces equivalent fractions
- [Mixed Number](!/arithmetic/definitions#mixed_number) — compared by examining whole parts first, then fractional parts`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Arithmetic Definitions](!/arithmetic/definitions) →@`,
  link: '',
},
 
    obj1: {
    title: `Comparing Fractions with Same Denominator`,
    content: `When two fractions share a denominator, compare their numerators directly. The fraction with the larger numerator is the larger fraction.

$$\\frac{5}{8} > \\frac{3}{8}$$

Both fractions represent eighths. Five eighths is more than three eighths because five pieces exceed three pieces of the same size.

This principle extends to any number of fractions with a common denominator. Arranging $\\frac{2}{9}$, $\\frac{7}{9}$, and $\\frac{4}{9}$ in order requires only sorting the numerators: $\\frac{2}{9} < \\frac{4}{9} < \\frac{7}{9}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Comparing Fractions with Same Numerator`,
    content: `When two fractions share a numerator, compare their denominators inversely. The fraction with the smaller denominator is the larger fraction.

$$\\frac{3}{4} > \\frac{3}{7}$$

Both fractions take three parts, but fourths are larger pieces than sevenths. Three large pieces exceed three small pieces.

This inverse relationship often surprises at first. The key insight is that larger denominators create smaller individual pieces. Dividing something into 100 parts produces much smaller pieces than dividing it into 2 parts.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Common Denominator Method`,
    content: `When neither numerator nor denominator matches, convert both fractions to [equivalent fractions](!/arithmetic/fractions/equivalent) with a common denominator, then compare numerators.

To compare $\\frac{3}{4}$ and $\\frac{5}{6}$, find a common denominator. The [LCM](!/arithmetic/divisibility/lcm) of 4 and 6 is 12.

$$\\frac{3}{4} = \\frac{9}{12} \\quad \\text{and} \\quad \\frac{5}{6} = \\frac{10}{12}$$

Since $10 > 9$, we have $\\frac{5}{6} > \\frac{3}{4}$.

This method always works and is the most reliable approach when other shortcuts do not apply.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Cross-Multiplication Method`,
    content: `Cross-multiplication provides a shortcut that avoids explicitly finding a common denominator. To compare $\\frac{a}{b}$ and $\\frac{c}{d}$, compute the cross products $a \\times d$ and $b \\times c$. The larger cross product indicates the larger fraction.

To compare $\\frac{3}{7}$ and $\\frac{4}{9}$:

$$3 \\times 9 = 27 \\quad \\text{and} \\quad 7 \\times 4 = 28$$

Since $28 > 27$, we have $\\frac{4}{9} > \\frac{3}{7}$.

The rule: multiply each numerator by the opposite denominator. The cross product stays on the same side as its numerator. If $a \\times d > b \\times c$, then $\\frac{a}{b} > \\frac{c}{d}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Benchmark Fractions`,
    content: `Benchmark fractions like 0, $\\frac{1}{2}$, and 1 provide quick reference points for estimation and comparison without calculation.

To compare $\\frac{3}{8}$ and $\\frac{5}{9}$: note that $\\frac{3}{8} < \\frac{1}{2}$ (since $3 < 4$) while $\\frac{5}{9} > \\frac{1}{2}$ (since $5 > 4.5$). Therefore $\\frac{5}{9} > \\frac{3}{8}$ without any cross-multiplication.

Other useful benchmarks include $\\frac{1}{4}$ and $\\frac{3}{4}$. With practice, recognizing whether a fraction is close to 0, near $\\frac{1}{2}$, or approaching 1 speeds up many comparisons.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Decimal Conversion Method`,
    content: `Converting fractions to decimals allows direct numerical comparison. Divide the numerator by the denominator for each fraction.

To compare $\\frac{5}{8}$ and $\\frac{7}{11}$:

$$\\frac{5}{8} = 0.625 \\quad \\text{and} \\quad \\frac{7}{11} \\approx 0.636$$

Since $0.636 > 0.625$, we have $\\frac{7}{11} > \\frac{5}{8}$.

This method is practical with a calculator or for fractions that produce simple decimals. It becomes cumbersome for fractions with long repeating decimals.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Comparing Mixed Numbers`,
    content: `Compare [mixed numbers](!/arithmetic/fractions/mixed-numbers) by first examining the whole parts. The mixed number with the larger whole part is larger overall.

$$5\\frac{1}{8} > 4\\frac{7}{8}$$

Five wholes exceed four wholes regardless of the fractional parts.

When whole parts are equal, compare the fractional parts using any method from this page. For $3\\frac{2}{5}$ versus $3\\frac{3}{7}$, cross-multiply the fractions: $2 \\times 7 = 14$ and $5 \\times 3 = 15$. Since $15 > 14$, we have $\\frac{3}{7} > \\frac{2}{5}$, so $3\\frac{3}{7} > 3\\frac{2}{5}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Ordering Multiple Fractions`,
    content: `To arrange several fractions in order, find a common denominator for all of them and compare the resulting numerators.

Order $\\frac{2}{3}$, $\\frac{3}{4}$, $\\frac{5}{6}$, and $\\frac{7}{12}$ from least to greatest. The LCD of 3, 4, 6, and 12 is 12.

$$\\frac{2}{3} = \\frac{8}{12}, \\quad \\frac{3}{4} = \\frac{9}{12}, \\quad \\frac{5}{6} = \\frac{10}{12}, \\quad \\frac{7}{12} = \\frac{7}{12}$$

Sorting by numerators: $7 < 8 < 9 < 10$. The order is $\\frac{7}{12} < \\frac{2}{3} < \\frac{3}{4} < \\frac{5}{6}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Number Line Visualization`,
    content: `Placing fractions on a number line shows their relative positions visually. Fractions further to the right are larger.

The interval from 0 to 1 can be subdivided according to any denominator. Marking fourths at $\\frac{1}{4}$, $\\frac{2}{4}$, $\\frac{3}{4}$ and thirds at $\\frac{1}{3}$, $\\frac{2}{3}$ shows that $\\frac{1}{3}$ lies between $\\frac{1}{4}$ and $\\frac{2}{4}$, confirming $\\frac{1}{4} < \\frac{1}{3} < \\frac{1}{2}$.

Number lines are particularly useful for developing intuition about fraction size and for understanding why certain comparison methods work. Seeing that $\\frac{2}{3}$ and $\\frac{4}{6}$ occupy the same point reinforces the concept of [equivalent fractions](!/arithmetic/fractions/equivalent).`,
    before: ``,
    after: ``,
    link: '',
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
  title: "Which Fraction Is Larger",
  content: `Comparing fractions determines which of two values is larger, smaller, or whether they are equal. Several methods exist, each suited to different situations. Simple cases with matching numerators or denominators resolve by inspection, while more complex comparisons require finding [common denominators](!/arithmetic/fractions/equivalent), cross-multiplying, or converting to decimals.`
}

const faqQuestions = {
  obj1: {
    question: "How do you compare fractions with the same denominator?",
    answer: "Compare the numerators directly. The fraction with the larger numerator is larger. For example, 5/8 > 3/8 because 5 > 3. Both fractions have same-sized pieces, so more pieces means a larger value.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you compare fractions with the same numerator?",
    answer: "Compare denominators inversely — the smaller denominator means a larger fraction. For example, 3/4 > 3/7 because fourths are larger pieces than sevenths. Same number of pieces, but bigger pieces win.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you compare fractions with different denominators?",
    answer: "Find a common denominator and convert both fractions, then compare numerators. Or use cross-multiplication: for a/b vs c/d, compute a×d and b×c. The larger cross product indicates the larger fraction.",
    sectionId: "3"
  },
  obj4: {
    question: "What is cross-multiplication for comparing fractions?",
    answer: "Multiply each numerator by the opposite denominator. For 3/7 vs 4/9: compute 3×9=27 and 7×4=28. Since 28>27, we have 4/9 > 3/7. The larger product stays with its numerator's fraction.",
    sectionId: "4"
  },
  obj5: {
    question: "What are benchmark fractions?",
    answer: "Benchmark fractions like 0, 1/2, and 1 are reference points for quick comparison. If one fraction is less than 1/2 and another is greater than 1/2, you know immediately which is larger without calculating.",
    sectionId: "5"
  },
  obj6: {
    question: "Can you compare fractions by converting to decimals?",
    answer: "Yes. Divide numerator by denominator for each fraction. For 5/8 vs 7/11: 5/8 = 0.625 and 7/11 ≈ 0.636. Since 0.636 > 0.625, we have 7/11 > 5/8.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you compare mixed numbers?",
    answer: "First compare the whole number parts. If they differ, the larger whole means the larger mixed number (5⅛ > 4⅞). If whole parts are equal, compare the fractional parts using any standard method.",
    sectionId: "7"
  },
  obj8: {
    question: "How do you order multiple fractions from least to greatest?",
    answer: "Find a common denominator for all fractions, convert each, then sort by numerators. For 2/3, 3/4, 5/6: LCD is 12, giving 8/12, 9/12, 10/12. Order: 2/3 < 3/4 < 5/6.",
    sectionId: "8"
  },
  obj9: {
    question: "Why does a larger denominator mean a smaller fraction?",
    answer: "Larger denominators divide the whole into more pieces, making each piece smaller. Dividing into 100 parts creates tiny pieces; dividing into 2 parts creates large pieces. More divisions = smaller pieces.",
    sectionId: "2"
  },
  obj10: {
    question: "How do you visualize fraction comparisons on a number line?",
    answer: "Place fractions on a number line between 0 and 1. Fractions further right are larger. This shows relative positions clearly and confirms that equivalent fractions occupy the same point.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Comparing Fractions",
    "description": "Learn to compare fractions: same denominator, same numerator, cross-multiplication, benchmark fractions, decimal conversion, and ordering multiple fractions.",
    "url": "https://www.learnmathclass.com/arithmetic/fractions/comparing",
    "inLanguage": "en-US",
    "learningResourceType": "Explanation",
    "educationalLevel": "Elementary, Middle School",
    "educationalUse": "Learning",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student"
    },
    "about": {
      "@type": "Thing",
      "name": "Fraction Comparison"
    },
    "teaches": [
      "Comparing fractions with same denominator",
      "Comparing fractions with same numerator",
      "Common denominator method",
      "Cross-multiplication method",
      "Using benchmark fractions",
      "Decimal conversion method",
      "Comparing mixed numbers",
      "Ordering multiple fractions",
      "Number line visualization"
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
        "name": "Arithmetic",
        "item": "https://www.learnmathclass.com/arithmetic"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Comparing Fractions",
        "item": "https://www.learnmathclass.com/arithmetic/fractions/comparing"
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
      title: "Comparing Fractions: Methods & Examples | Learn Math Class",
      description: "Learn to compare fractions: same denominator, same numerator, cross-multiplication, benchmark fractions, decimal conversion, and ordering multiple fractions.",
      keywords: keyWords.join(", "),
      url: "/arithmetic/fractions/comparing",
      name: "Comparing Fractions"
    },
  }
}
   }


export default function ComparingPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {


  const genericSections=[
     {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
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
    {
        id:'9',
        title:sectionsContent.obj9.title,
        link:sectionsContent.obj9.link,
        content:[
          sectionsContent.obj9.content,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Comparing Fractions</h1>
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
       <KeyTermsCard
              id="0"
              title={sectionsContent.obj0.title}
              content={sectionsContent.obj0.content}
              after={sectionsContent.obj0.after}
              variant="light"
            />
   <br/>
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
