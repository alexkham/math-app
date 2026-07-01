

// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import Head from 'next/head'
// // // import '@/pages/pages.css'
// // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // // import GenericTableExplorer from '../../../app/components/tables/table-explorer/GenericTableExplorer'
// // // import ALGEBRAIC_IDENTITIES_DATASET from '../../../app/components/tables/table-explorer/data/algebraicIdentitiesDataset'

// // // // ──────────────────────────────────────────────────────────────
// // // // Split the dataset along the serialization boundary:
// // // //   - Function-bearing fields (quizGenerator, templates,
// // // //     extraFilters[*].match) cannot flow through getStaticProps.
// // // //     Kept in module scope, passed to the page via closure.
// // // //   - staticDataset: everything else. Plain JSON-safe data,
// // // //     goes through getStaticProps like normal.
// // // //   - Reassembled into a single `dataset` prop at render time.
// // // // ──────────────────────────────────────────────────────────────
// // // const {
// // //   quizGenerator,
// // //   templates,
// // //   extraFilters,
// // //   ...staticDataset
// // // } = ALGEBRAIC_IDENTITIES_DATASET


// // // export async function getStaticProps(){

// // //   const keyWords = [
    
// // //   ]

// // //   const sectionsContent = {

// // //     obj0: { title: `Key Terms`, content: ``, before: ``, after: ``, link: '' },
// // //     obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj9: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj10: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
// // //     obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

// // //   }


// // //   const introContent = {
// // //     id: "intro",
// // //     title: "",
// // //     content: ``
// // //   }


// // //   const faqQuestions = {
// // //     obj1: {
// // //       question: "What are common derivatives?",
// // //       answer: "Common derivatives are the derivative identities that come up most often in calculus: the derivatives of polynomials, exponentials, logarithms, the six trig functions, the six inverse trig functions, and their hyperbolic counterparts. Together they cover the building blocks needed for almost any differentiation problem when combined with the linearity, product, quotient, and chain rules."
// // //     },
// // //     obj2: {
// // //       question: "What is the derivative of sin x and cos x?",
// // //       answer: "The derivative of sin(x) is cos(x). The derivative of cos(x) is negative sin(x). The sign change on cosine reflects the 90-degree phase shift between the two functions. Repeatedly differentiating cycles through sin, cos, negative sin, negative cos, and back to sin every four steps."
// // //     },
// // //     obj3: {
// // //       question: "What is the power rule?",
// // //       answer: "The power rule says that the derivative of x to the n is n times x to the (n minus 1) for any real exponent n. To use it, multiply by the exponent and then subtract one from the exponent. The rule covers polynomials, roots like the square root of x, and reciprocals like 1 over x."
// // //     },
// // //     obj4: {
// // //       question: "What is the difference between the product rule and the chain rule?",
// // //       answer: "The product rule differentiates a product of two functions: the derivative of f times g is f-prime times g plus f times g-prime. The chain rule differentiates a composition: the derivative of f of g(x) is f-prime evaluated at g(x), times g-prime of x. Products combine functions side by side; compositions nest one function inside another."
// // //     },
// // //     obj5: {
// // //       question: "How do I memorize derivative rules?",
// // //       answer: "Group the identities by category: polynomials, exponentials and logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic. Notice the patterns: cosine differentiates to negative sine but cosh differentiates to plus sinh; arcsin and arccos have opposite signs because they sum to a constant. Drill with the drag puzzle on this page to lock the pairings in."
// // //     }
// // //   }


// // //   const schemas = {
// // //     webApplication: {
// // //       "@context": "https://schema.org",
// // //       "@type": "WebApplication",
// // //       "name": "Common Derivatives Table and Practice Tool",
// // //       "description": "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
// // //       "url": "https://www.learnmathclass.com/tables/calculus/common-derivatives",
// // //       "applicationCategory": "EducationalApplication",
// // //       "operatingSystem": "Any",
// // //       "offers": {
// // //         "@type": "Offer",
// // //         "price": "0",
// // //         "priceCurrency": "USD"
// // //       },
// // //       "featureList": [
// // //         "Two-mode search: look up a derivative by f(x) or work backwards by entering f-prime(x)",
// // //         "Reference grid of 30 common derivatives spanning polynomials, exponentials, logarithms, trig, inverse trig, hyperbolic, and inverse hyperbolic functions",
// // //         "Each derivative card opens a details panel with a plain-English explanation and a link to the full derivation",
// // //         "Six category filters plus a reciprocal-forms filter that highlights derivatives whose result is a fraction",
// // //         "Puzzle mode: drag derivative tiles into their matching f(x) slot, with a per-tile hint button and a see-why link on each correct placement",
// // //         "Four reference cards covering the structural differentiation rules: linearity, product rule, quotient rule, and chain rule",
// // //         "Built-in quiz with three rotating question types and persistent score for memorizing the table"
// // //       ],
// // //       "author": {
// // //         "@type": "Organization",
// // //         "name": "Learn Math Class"
// // //       },
// // //       "datePublished": "2024-01-15",
// // //       "dateModified": new Date().toISOString(),
// // //       "inLanguage": "en-US",
// // //       "isAccessibleForFree": true,
// // //       "learningResourceType": "Reference Table and Interactive Tool",
// // //       "educationalLevel": "High School, College",
// // //       "keywords": keyWords.join(", ")
// // //     },

// // //     breadcrumb: {
// // //       "@context": "https://schema.org",
// // //       "@type": "BreadcrumbList",
// // //       "itemListElement": [
// // //         {
// // //           "@type": "ListItem",
// // //           "position": 1,
// // //           "name": "Home",
// // //           "item": "https://www.learnmathclass.com"
// // //         },
// // //         {
// // //           "@type": "ListItem",
// // //           "position": 2,
// // //           "name": "Tables",
// // //           "item": "https://www.learnmathclass.com/tables"
// // //         },
// // //         {
// // //           "@type": "ListItem",
// // //           "position": 3,
// // //           "name": "Common Derivatives",
// // //           "item": "https://www.learnmathclass.com/tables/calculus/common-derivatives"
// // //         }
// // //       ]
// // //     },

// // //     faq: {
// // //       "@context": "https://schema.org",
// // //       "@type": "FAQPage",
// // //       "mainEntity": Object.keys(faqQuestions).map(key => ({
// // //         "@type": "Question",
// // //         "name": faqQuestions[key].question,
// // //         "acceptedAnswer": {
// // //           "@type": "Answer",
// // //           "text": faqQuestions[key].answer
// // //         }
// // //       }))
// // //     }
// // //   }


// // //    return {
// // //       props:{
// // //          sectionsContent,
// // //          introContent,
// // //          faqQuestions,
// // //          schemas,
// // //          staticDataset,
// // //          seoData: {
// // //            title: "Common Derivatives Table & Puzzle | Learn Math Class",
// // //            description: "Reference table of 30 common derivatives: polynomials, exponentials, trig, hyperbolics, and their inverses. Search, filter, and drill with a drag puzzle.",
// // //            keywords: keyWords.join(", "),
// // //            url: "/tables/algebra-identities",
// // //            name: "Common Derivatives Table and Practice Tool"
// // //          }
// // //        }
// // //     }
// // //    }

// // // export default function AlgebraicIdentitiesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

    
// // //   const genericSections=[
// // //     {
// // //         id:'0',
// // //         title:sectionsContent.obj0.title,
// // //         link:sectionsContent.obj0.link,
// // //         content:[
// // //           sectionsContent.obj0.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'1',
// // //         title:sectionsContent.obj1.title,
// // //         link:sectionsContent.obj1.link,
// // //         content:[
// // //           sectionsContent.obj1.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'2',
// // //         title:sectionsContent.obj2.title,
// // //         link:sectionsContent.obj2.link,
// // //         content:[
// // //           sectionsContent.obj2.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'3',
// // //         title:sectionsContent.obj3.title,
// // //         link:sectionsContent.obj3.link,
// // //         content:[
// // //           sectionsContent.obj3.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'4',
// // //         title:sectionsContent.obj4.title,
// // //         link:sectionsContent.obj4.link,
// // //         content:[
// // //           sectionsContent.obj4.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'5',
// // //         title:sectionsContent.obj5.title,
// // //         link:sectionsContent.obj5.link,
// // //         content:[
// // //           sectionsContent.obj5.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'6',
// // //         title:sectionsContent.obj6.title,
// // //         link:sectionsContent.obj6.link,
// // //         content:[
// // //           sectionsContent.obj6.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'7',
// // //         title:sectionsContent.obj7.title,
// // //         link:sectionsContent.obj7.link,
// // //         content:[
// // //           sectionsContent.obj7.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'8',
// // //         title:sectionsContent.obj8.title,
// // //         link:sectionsContent.obj8.link,
// // //         content:[
// // //           sectionsContent.obj8.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'9',
// // //         title:sectionsContent.obj9.title,
// // //         link:sectionsContent.obj9.link,
// // //         content:[
// // //           sectionsContent.obj9.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'10',
// // //         title:sectionsContent.obj10.title,
// // //         link:sectionsContent.obj10.link,
// // //         content:[
// // //           sectionsContent.obj10.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'11',
// // //         title:sectionsContent.obj11.title,
// // //         link:sectionsContent.obj11.link,
// // //         content:[
// // //           sectionsContent.obj11.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'12',
// // //         title:sectionsContent.obj12.title,
// // //         link:sectionsContent.obj12.link,
// // //         content:[
// // //           sectionsContent.obj12.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'13',
// // //         title:sectionsContent.obj13.title,
// // //         link:sectionsContent.obj13.link,
// // //         content:[
// // //           sectionsContent.obj13.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'14',
// // //         title:sectionsContent.obj14.title,
// // //         link:sectionsContent.obj14.link,
// // //         content:[
// // //           sectionsContent.obj14.content,
// // //         ]
// // //     },
// // //     {
// // //         id:'15',
// // //         title:sectionsContent.obj15.title,
// // //         link:sectionsContent.obj15.link,
// // //         content:[
// // //           sectionsContent.obj15.content,
// // //         ]
// // //     },
    
// // // ]

// // //   // Reassemble the dataset. The static half came through props;
// // //   // the function-bearing half is reattached from the closure.
// // //   const dataset = {
// // //     ...staticDataset,
// // //     templates,
// // //     extraFilters,
// // //   }

// // //   return (
// // //    <>
// // //    <Head>
// // //   <title>{seoData.title}</title>
// // //   <meta name="description" content={seoData.description} />
// // //   <meta name="keywords" content={seoData.keywords} />
// // //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// // //   <meta property="og:title" content={seoData.title} />
// // //   <meta property="og:description" content={seoData.description} />
// // //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// // //   <meta property="og:type" content="article" />
// // //   <meta property="og:site_name" content="Learn Math Class" />
  
// // //   <meta name="twitter:card" content="summary" />
// // //   <meta name="twitter:title" content={seoData.title} />
// // //   <meta name="twitter:description" content={seoData.description} />
  
// // //   <meta name="robots" content="index, follow" />
  
// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify(schemas.webApplication)
// // //     }}
// // //   />

// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify(schemas.breadcrumb)
// // //     }}
// // //   />

// // //   <script 
// // //     type="application/ld+json"
// // //     dangerouslySetInnerHTML={{ 
// // //       __html: JSON.stringify(schemas.faq)
// // //     }}
// // //   />
// // // </Head>
// // //    {/* <GenericNavbar/> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     <OperaSidebar 
// // //            side='right'
// // //            // topOffset='65px' 
// // //            sidebarWidth='45px'
// // //            panelWidth='200px'
// // //            iconColor='white'
// // //            panelBackgroundColor='#f2f2f2'
// // //          /> 
// // //    <Breadcrumb nonLinkSegments={['algebra']}/>
// // //    <br/>
// // //    <br/>
// // //    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Algebraic Identities</h1>
// // //    <br/>
// // //    <GenericTableExplorer
// // //      dataset={dataset}
// // //      quizGenerator={quizGenerator}
// // //    />
// // //    <br/>
// // //    {/* <SectionTableOfContents sections={genericSections}
// // //     showSecondaryNav={true}
// // //          secondaryNavMode="siblings"  // or "children"
// // //          secondaryNavTitle="More in this Section"
   
// // //    /> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //     {/* <IntroSection 
// // //           id={introContent.id}
// // //           title={introContent.title}
// // //           content={introContent.content}
// // //            backgroundColor='#f9fafb'
// // //           //  "#f2f2f2"
// // //           textColor="#06357a"
// // //         /> */}
// // //    <br/>
// // //     {/* <KeyTermsCard
// // //      id="0"
// // //      title={sectionsContent.obj0.title}
// // //      content={sectionsContent.obj0.content}
// // //      after={sectionsContent.obj0.after}
// // //      variant="light"
// // //    /> */}
// // //    <br/>
// // //    {/* <Sections sections={genericSections}/> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    {/* <ScrollUpButton/> */}
// // //    </>
// // //   )
// // // }



// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // import Sections from '@/app/components/page-components/section/Sections'
// // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // import Head from 'next/head'
// // import '@/pages/pages.css'
// // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// // import GenericTableExplorer from '../../../app/components/tables/table-explorer/GenericTableExplorer'
// // import ALGEBRAIC_IDENTITIES_DATASET from '../../../app/components/tables/table-explorer/data/algebraicIdentitiesDataset'

// // // ──────────────────────────────────────────────────────────────
// // // Split the dataset along the serialization boundary:
// // //   - Function-bearing fields (quizGenerator, templates,
// // //     extraFilters[*].match) cannot flow through getStaticProps.
// // //     Kept in module scope, passed to the page via closure.
// // //   - staticDataset: everything else. Plain JSON-safe data,
// // //     goes through getStaticProps like normal.
// // //   - Reassembled into a single `dataset` prop at render time.
// // // ──────────────────────────────────────────────────────────────
// // const {
// //   quizGenerator,
// //   templates,
// //   extraFilters,
// //   ...staticDataset
// // } = ALGEBRAIC_IDENTITIES_DATASET


// // export async function getStaticProps(){

// //   const keyWords = [
// //     'algebra identities',
// //     'algebra identities table',
// //     'algebra identities list',
// //     'algebra identities formulas',
// //     'algebra identities chart',
// //     'algebra identities practice',
// //     'algebraic identities',
// //     'difference of squares',
// //     'perfect square trinomial',
// //     'sum of cubes formula',
// //     'difference of cubes formula',
// //     'binomial expansion',
// //     'algebra formulas',
// //     'factoring identities',
// //     'memorize algebra identities',
// //   ]

// //   const sectionsContent = {

// //     obj0: { title: `Key Terms`, content: ``, before: ``, after: ``, link: '' },
// //     obj1: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj2: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj3: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj4: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj5: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj6: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj7: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj8: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj9: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj10: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
// //     obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

// //   }


// //   const introContent = {
// //     id: "intro",
// //     title: "",
// //     content: ``
// //   }


// //   const faqQuestions = {
// //     obj1: {
// //       question: "What are algebra identities?",
// //       answer: "Algebra identities are equalities between two expressions that hold for all values of their variables. The core set includes the difference of squares, the perfect square trinomials, the sum and difference of cubes, and the cube of a binomial. They are the algebraic building blocks for factoring, simplifying, and expanding polynomial expressions."
// //     },
// //     obj2: {
// //       question: "What is the difference of squares identity?",
// //       answer: "The difference of squares says a squared minus b squared equals (a plus b) times (a minus b). It applies whenever a polynomial can be written as one square subtracted from another, even when a and b are themselves compound expressions. The identity is one of the fastest factoring shortcuts in algebra."
// //     },
// //     obj3: {
// //       question: "What is the perfect square trinomial identity?",
// //       answer: "The perfect square trinomial identities are (a plus b) squared equals a squared plus 2ab plus b squared, and (a minus b) squared equals a squared minus 2ab plus b squared. The middle term is always twice the product of the two parts. Recognizing this pattern lets you factor a trinomial back into a binomial squared at sight."
// //     },
// //     obj4: {
// //       question: "What is the difference between the sum and difference of cubes?",
// //       answer: "Sum of cubes: a cubed plus b cubed equals (a plus b) times (a squared minus ab plus b squared). Difference of cubes: a cubed minus b cubed equals (a minus b) times (a squared plus ab plus b squared). The SOAP mnemonic helps: Same sign on the binomial, Opposite sign in the middle of the trinomial, Always Positive on the last term."
// //     },
// //     obj5: {
// //       question: "How do I memorize algebra identities?",
// //       answer: "Group them by family: difference-of-powers (squares and cubes), perfect-power expansions (square and cube of a binomial), and multi-term expansions like (a plus b plus c) squared. Notice the structural patterns: the middle term in a perfect square is always twice the product of the parts; cubes split into a binomial times a trinomial. Drill the drag puzzle on this page to lock the pairings in."
// //     }
// //   }


// //   const schemas = {
// //     webApplication: {
// //       "@context": "https://schema.org",
// //       "@type": "WebApplication",
// //       "name": "Algebra Identities Table and Practice Tool",
// //       "description": "Algebra identities reference table: difference of squares, perfect squares, sum and difference of cubes, and binomial expansions. Search, filter, drill.",
// //       "url": "https://www.learnmathclass.com/tables/algebra-identities",
// //       "applicationCategory": "EducationalApplication",
// //       "operatingSystem": "Any",
// //       "offers": {
// //         "@type": "Offer",
// //         "price": "0",
// //         "priceCurrency": "USD"
// //       },
// //       "featureList": [
// //         "Two-mode search: look up an identity by its expanded form, or work backwards by entering its factored form",
// //         "Reference grid of common algebra identities covering difference of squares, perfect square trinomials, sum and difference of cubes, cube of a binomial, and multi-term expansions",
// //         "Each identity card opens a details panel with a worked example and a link to the full derivation",
// //         "Category filters that group identities by structural family - squares, cubes, and multi-term expansions",
// //         "Puzzle mode: drag factored forms into their matching expansion, with a per-tile hint button and a see-why link on each correct placement",
// //         "Reference cards for the structural manipulation rules that complement the identities: factoring by grouping, completing the square, and substitution",
// //         "Built-in quiz with rotating question types and persistent score for memorizing the table"
// //       ],
// //       "author": {
// //         "@type": "Organization",
// //         "name": "Learn Math Class"
// //       },
// //       "datePublished": "2024-01-15",
// //       "dateModified": new Date().toISOString(),
// //       "inLanguage": "en-US",
// //       "isAccessibleForFree": true,
// //       "learningResourceType": "Reference Table and Interactive Tool",
// //       "educationalLevel": "High School, College",
// //       "keywords": keyWords.join(", ")
// //     },

// //     breadcrumb: {
// //       "@context": "https://schema.org",
// //       "@type": "BreadcrumbList",
// //       "itemListElement": [
// //         {
// //           "@type": "ListItem",
// //           "position": 1,
// //           "name": "Home",
// //           "item": "https://www.learnmathclass.com"
// //         },
// //         {
// //           "@type": "ListItem",
// //           "position": 2,
// //           "name": "Tables",
// //           "item": "https://www.learnmathclass.com/tables"
// //         },
// //         {
// //           "@type": "ListItem",
// //           "position": 3,
// //           "name": "Algebra Identities",
// //           "item": "https://www.learnmathclass.com/tables/algebra-identities"
// //         }
// //       ]
// //     },

// //     faq: {
// //       "@context": "https://schema.org",
// //       "@type": "FAQPage",
// //       "mainEntity": Object.keys(faqQuestions).map(key => ({
// //         "@type": "Question",
// //         "name": faqQuestions[key].question,
// //         "acceptedAnswer": {
// //           "@type": "Answer",
// //           "text": faqQuestions[key].answer
// //         }
// //       }))
// //     }
// //   }


// //    return {
// //       props:{
// //          sectionsContent,
// //          introContent,
// //          faqQuestions,
// //          schemas,
// //          staticDataset,
// //          seoData: {
// //            title: "Algebra Identities Table & Puzzle | Learn Math Class",
// //            description: "Algebra identities reference table: difference of squares, perfect squares, sum and difference of cubes, and binomial expansions. Search, filter, drill.",
// //            keywords: keyWords.join(", "),
// //            url: "/tables/algebra-identities",
// //            name: "Algebra Identities Table and Practice Tool",
// //            hubDescription: "Browse, search, and drill the standard algebra identities: difference of squares, perfect square trinomials, sum and difference of cubes, and binomial expansions. Filter by structural family, open a card for the worked example, or switch to the drag puzzle to match factored forms with their expansions until the table is memorized.",
// //            category: "Algebra",
// //            subCategory: "Identities",
// //          }
// //        }
// //     }
// //    }

// // export default function AlgebraicIdentitiesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

    
// //   const genericSections=[
// //     {
// //         id:'0',
// //         title:sectionsContent.obj0.title,
// //         link:sectionsContent.obj0.link,
// //         content:[
// //           sectionsContent.obj0.content,
// //         ]
// //     },
// //     {
// //         id:'1',
// //         title:sectionsContent.obj1.title,
// //         link:sectionsContent.obj1.link,
// //         content:[
// //           sectionsContent.obj1.content,
// //         ]
// //     },
// //     {
// //         id:'2',
// //         title:sectionsContent.obj2.title,
// //         link:sectionsContent.obj2.link,
// //         content:[
// //           sectionsContent.obj2.content,
// //         ]
// //     },
// //     {
// //         id:'3',
// //         title:sectionsContent.obj3.title,
// //         link:sectionsContent.obj3.link,
// //         content:[
// //           sectionsContent.obj3.content,
// //         ]
// //     },
// //     {
// //         id:'4',
// //         title:sectionsContent.obj4.title,
// //         link:sectionsContent.obj4.link,
// //         content:[
// //           sectionsContent.obj4.content,
// //         ]
// //     },
// //     {
// //         id:'5',
// //         title:sectionsContent.obj5.title,
// //         link:sectionsContent.obj5.link,
// //         content:[
// //           sectionsContent.obj5.content,
// //         ]
// //     },
// //     {
// //         id:'6',
// //         title:sectionsContent.obj6.title,
// //         link:sectionsContent.obj6.link,
// //         content:[
// //           sectionsContent.obj6.content,
// //         ]
// //     },
// //     {
// //         id:'7',
// //         title:sectionsContent.obj7.title,
// //         link:sectionsContent.obj7.link,
// //         content:[
// //           sectionsContent.obj7.content,
// //         ]
// //     },
// //     {
// //         id:'8',
// //         title:sectionsContent.obj8.title,
// //         link:sectionsContent.obj8.link,
// //         content:[
// //           sectionsContent.obj8.content,
// //         ]
// //     },
// //     {
// //         id:'9',
// //         title:sectionsContent.obj9.title,
// //         link:sectionsContent.obj9.link,
// //         content:[
// //           sectionsContent.obj9.content,
// //         ]
// //     },
// //     {
// //         id:'10',
// //         title:sectionsContent.obj10.title,
// //         link:sectionsContent.obj10.link,
// //         content:[
// //           sectionsContent.obj10.content,
// //         ]
// //     },
// //     {
// //         id:'11',
// //         title:sectionsContent.obj11.title,
// //         link:sectionsContent.obj11.link,
// //         content:[
// //           sectionsContent.obj11.content,
// //         ]
// //     },
// //     {
// //         id:'12',
// //         title:sectionsContent.obj12.title,
// //         link:sectionsContent.obj12.link,
// //         content:[
// //           sectionsContent.obj12.content,
// //         ]
// //     },
// //     {
// //         id:'13',
// //         title:sectionsContent.obj13.title,
// //         link:sectionsContent.obj13.link,
// //         content:[
// //           sectionsContent.obj13.content,
// //         ]
// //     },
// //     {
// //         id:'14',
// //         title:sectionsContent.obj14.title,
// //         link:sectionsContent.obj14.link,
// //         content:[
// //           sectionsContent.obj14.content,
// //         ]
// //     },
// //     {
// //         id:'15',
// //         title:sectionsContent.obj15.title,
// //         link:sectionsContent.obj15.link,
// //         content:[
// //           sectionsContent.obj15.content,
// //         ]
// //     },
    
// // ]

// //   // Reassemble the dataset. The static half came through props;
// //   // the function-bearing half is reattached from the closure.
// //   const dataset = {
// //     ...staticDataset,
// //     templates,
// //     extraFilters,
// //   }

// //   return (
// //    <>
// //    <Head>
// //   <title>{seoData.title}</title>
// //   <meta name="description" content={seoData.description} />
// //   <meta name="keywords" content={seoData.keywords} />
// //   <meta name="viewport" content="width=device-width, initial-scale=1" />
// //   <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />
  
// //   <meta property="og:title" content={seoData.title} />
// //   <meta property="og:description" content={seoData.description} />
// //   <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //   <meta property="og:type" content="article" />
// //   <meta property="og:site_name" content="Learn Math Class" />
  
// //   <meta name="twitter:card" content="summary" />
// //   <meta name="twitter:title" content={seoData.title} />
// //   <meta name="twitter:description" content={seoData.description} />
  
// //   <meta name="robots" content="index, follow" />
  
// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.webApplication)
// //     }}
// //   />

// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.breadcrumb)
// //     }}
// //   />

// //   <script 
// //     type="application/ld+json"
// //     dangerouslySetInnerHTML={{ 
// //       __html: JSON.stringify(schemas.faq)
// //     }}
// //   />
// // </Head>
// //    {/* <GenericNavbar/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    <br/>
// //     <OperaSidebar 
// //            side='right'
// //            // topOffset='65px' 
// //            sidebarWidth='45px'
// //            panelWidth='200px'
// //            iconColor='white'
// //            panelBackgroundColor='#f2f2f2'
// //          /> 
// //    <Breadcrumb nonLinkSegments={['algebra']}/>
// //    <br/>
// //    <br/>
// //    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Algebraic Identities</h1>
// //    <br/>
// //    <GenericTableExplorer
// //      dataset={dataset}
// //      quizGenerator={quizGenerator}
// //    />
// //    <br/>
// //    {/* <SectionTableOfContents sections={genericSections}
// //     showSecondaryNav={true}
// //          secondaryNavMode="siblings"  // or "children"
// //          secondaryNavTitle="More in this Section"
   
// //    /> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //     {/* <IntroSection 
// //           id={introContent.id}
// //           title={introContent.title}
// //           content={introContent.content}
// //            backgroundColor='#f9fafb'
// //           //  "#f2f2f2"
// //           textColor="#06357a"
// //         /> */}
// //    <br/>
// //     {/* <KeyTermsCard
// //      id="0"
// //      title={sectionsContent.obj0.title}
// //      content={sectionsContent.obj0.content}
// //      after={sectionsContent.obj0.after}
// //      variant="light"
// //    /> */}
// //    <br/>
// //    {/* <Sections sections={genericSections}/> */}
// //    <br/>
// //    <br/>
// //    <br/>
// //    {/* <ScrollUpButton/> */}
// //    </>
// //   )
// // }


// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
// import GenericTableExplorer from '../../../app/components/tables/table-explorer/GenericTableExplorer'
// import ALGEBRAIC_IDENTITIES_DATASET from '../../../app/components/tables/table-explorer/data/algebraicIdentitiesDataset'

// const {
//   quizGenerator,
//   templates,
//   extraFilters,
//   ...staticDataset
// } = ALGEBRAIC_IDENTITIES_DATASET


// export async function getStaticProps(){

//   const keyWords = [
//     'algebra identities',
//     'algebra identities table',
//     'algebra identities list',
//     'algebra identities formulas',
//     'algebra identities chart',
//     'algebra identities practice',
//     'algebraic identities',
//     'difference of squares',
//     'perfect square trinomial',
//     'sum of cubes formula',
//     'difference of cubes formula',
//     'binomial expansion',
//     'algebra formulas',
//     'factoring identities',
//     'memorize algebra identities',
//   ]

//   const sectionsContent = {

//     obj0: {
//       title: `Key Terms`,
//       content: `**Identity** &mdash; An equation that holds for every value of its variables, not just specific ones. Every row in the table is an identity.

// **Left-hand side (LHS)** &mdash; The expression on the left of the equals sign. Usually the form you start with.

// **Right-hand side (RHS)** &mdash; The expression on the right. Usually the form you want, whether that means a factored form, an expanded form, or a simpler equivalent.

// **Family** &mdash; The structural category an identity belongs to: distributive, expansion, factoring, binomial, exponent, logarithm, radical, absolute value, fraction, or polynomial. Each family corresponds to a colored badge in the table and a card in the categories grid.

// **Filter** &mdash; Clicking a family card highlights only that family's rows. Search and filter both highlight; only one is active at a time.

// **Tip** &mdash; The short explanatory note attached to each identity card or row, explaining when the identity applies or how to remember it.`,
//       before: ``, after: ``, link: ''
//     },

//     obj1: {
//       title: `What This Table Covers`,
//       content: `The table catalogues 53 algebra identities across 10 structural families. The full inventory:

// - [Distributive identities](!/tables/algebra-identities#distributive) (2) &mdash; the rule $a(b+c) = ab + ac$ and FOIL.
// - [Squares and cubes expansions](!/tables/algebra-identities#expansion) (5) &mdash; $(a \\pm b)^2$, $(a \\pm b)^3$, and $(a+b+c)^2$.
// - [Factoring patterns](!/tables/algebra-identities#factoring) (7) &mdash; difference of squares, sum and difference of cubes, higher-power differences, and the trinomial pattern.
// - [Binomial expansion](!/tables/algebra-identities#binomial) (4) &mdash; the binomial theorem, the coefficient $\\binom{n}{k}$, Pascal's identity, and binomial symmetry.
// - [Exponent laws](!/tables/algebra-identities#exponent) (8) &mdash; product, quotient, power-of-power, distribution over products and quotients, zero, negative, and reciprocal-flip rules.
// - [Logarithm identities](!/tables/algebra-identities#logarithm) (8) &mdash; the three core rules, change of base, and four inverse-function identities.
// - [Radical rules](!/tables/algebra-identities#radical) (5) &mdash; the radical-to-exponent bridge and the product, quotient, power, and nesting rules.
// - [Absolute value](!/tables/algebra-identities#absoluteValue) (4) &mdash; how $|\\cdot|$ interacts with multiplication, division, negation, and squaring.
// - [Fraction operations](!/tables/algebra-identities#fraction) (4) &mdash; same-denominator addition, different-denominator addition, multiplication, and division.
// - [Polynomial identities](!/tables/algebra-identities#polynomial) (6) &mdash; quadratic formula, discriminant, completing the square, Vieta's formulas, and the remainder theorem.

// Each row shows the LHS, the RHS, the family, a one-line tip, and a link to the formula entry where available.`,
//       before: ``, after: ``, link: '#sec-table'
//     },

//     obj2: {
//       title: `Using the Table`,
//       content: `The table supports three views, toggled by the buttons above the grid.

// - **Cards** &mdash; one card per identity, with the LHS and RHS stacked. Click any card to expand its details panel inline.
// - **Rows** &mdash; dense, print-friendly tabular layout. Same click-to-expand behavior. Default view on load.
// - **Puzzle** &mdash; drag-and-drop drill mode. Covered separately in the [puzzle and quiz section](!/tables/algebra-identities#sec-quiz).

// The [search tool](!/tables/algebra-identities#sec-tool) above the table accepts four search modes: by name, by LHS, by RHS, and by category. Type in the field and matches highlight live. The **Go &rarr;** button after a successful search scrolls the result into view.

// The action bar to the right of the view toggle has three buttons:
// - **Print** &mdash; opens the browser print dialog with the current view.
// - **Copy CSV** &mdash; copies all entries to the clipboard as CSV with columns Name, LHS, RHS, Category, Tip, Link.
// - **Download .csv** &mdash; downloads the same CSV as a file.

// The [categories grid](!/tables/algebra-identities#sec-patterns) acts as a one-click filter. Click any family card to highlight just its entries; click again or use **Clear highlight** to reset.`,
//       before: ``, after: ``, link: '#sec-tool'
//     },

//     obj3: {
//       title: `Drill With the Puzzle and Quiz`,
//       content: `Two practice modes are built into the page.

// **Puzzle mode** is the third view above the table. Switch to it and the table reorganizes: each LHS becomes an empty slot, each RHS becomes a draggable tile. Drop the right tile into the right slot. Tiles that don't match snap back. Each tile has a hint button for a nudge and a see-why link to the formula page once placed correctly.

// **Quiz mode** sits in its own section at the [bottom of the page](!/tables/algebra-identities#sec-quiz). The widget rotates three question types at random:

// - Given an LHS, pick the correct RHS from four options.
// - Given an RHS, pick the correct LHS from four options.
// - Given the full identity, pick the family it belongs to.

// Score is tracked across the session. The widget keeps a 30-question history so you can review missed questions. Reset clears the score and starts fresh.

// Use the puzzle for active recall and the quiz for spaced rotation. Both pull from the same 53-item table.`,
//       before: ``, after: ``, link: '#sec-quiz'
//     },

//     obj4: {
//       title: `Distributive and Expansion Identities`,
//       content: `The [distributive family](!/tables/algebra-identities#distributive) has two entries that anchor everything else. The distributive identity $a(b+c) = ab + ac$ is the structural rule linking addition and multiplication. FOIL &mdash; $(a+b)(c+d) = ac + ad + bc + bd$ &mdash; applies the distributive identity twice to multiply two binomials.

// The [squares and cubes family](!/tables/algebra-identities#expansion) collects five expansions:

// - $(a+b)^2 = a^2 + 2ab + b^2$ &mdash; the perfect-square trinomial.
// - $(a-b)^2 = a^2 - 2ab + b^2$ &mdash; same coefficients, signed cross term.
// - $(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$ &mdash; the trinomial square; each variable squared, plus twice every unordered pair product.
// - $(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$ &mdash; coefficients from the third row of Pascal's triangle: 1, 3, 3, 1.
// - $(a-b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$ &mdash; same coefficients, alternating signs.

// Memorize the perfect-square and perfect-cube patterns first. They are the entry point to factoring and the basis for completing the square.`,
//       before: ``, after: ``, link: '#expansion'
//     },

//     obj5: {
//       title: `Factoring Patterns and the Binomial Theorem`,
//       content: `The [factoring family](!/tables/algebra-identities#factoring) is the most-used set in algebra. Seven identities:

// - **Difference of squares**: $a^2 - b^2 = (a+b)(a-b)$. The most-applied factoring shortcut.
// - **Sum of cubes**: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$.
// - **Difference of cubes**: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$. SOAP mnemonic: **S**ame sign, **O**pposite sign, **A**lways **P**ositive.
// - **Difference of even powers**: $x^{2n} - a^{2n} = (x^n - a^n)(x^n + a^n)$.
// - **Difference of powers** (any $n$): $x^n - a^n$ always has $(x-a)$ as a factor.
// - **Sum of powers** (odd $n$ only): $x^n + a^n$ has $(x+a)$ as a factor.
// - **Trinomial factoring**: $x^2 + (a+b)x + ab = (x+a)(x+b)$.

// **Sum of squares does not factor over the reals.** $a^2 + b^2$ is irreducible.

// The [binomial expansion family](!/tables/algebra-identities#binomial) generalizes $(a+b)^n$ to arbitrary powers. The binomial theorem $(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$ expands any non-negative integer power. The binomial coefficient $\\binom{n}{k} = n! / (k!(n-k)!)$ counts subsets. Pascal's identity $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$ generates the triangle row by row. Binomial symmetry $\\binom{n}{k} = \\binom{n}{n-k}$ reflects the include-or-exclude duality.`,
//       before: ``, after: ``, link: '#factoring'
//     },

//     obj6: {
//       title: `Exponent Laws`,
//       content: `The [exponent family](!/tables/algebra-identities#exponent) has eight identities covering every legal operation on powers with a common base or exponent.

// - **Product rule**: $a^m \\cdot a^n = a^{m+n}$. Same base &rarr; add exponents.
// - **Quotient rule**: $a^m / a^n = a^{m-n}$. Same base &rarr; subtract exponents.
// - **Power of a power**: $(a^m)^n = a^{mn}$. Multiply exponents.
// - **Power of a product**: $(ab)^n = a^n b^n$. Distributes over multiplication.
// - **Power of a quotient**: $(a/b)^n = a^n / b^n$. Distributes over division.
// - **Zero exponent**: $a^0 = 1$ for any nonzero $a$. The expression $0^0$ is indeterminate.
// - **Negative exponent**: $a^{-n} = 1/a^n$. Means reciprocal, not a negative result.
// - **Negative exponent flip**: $(a/b)^{-n} = (b/a)^n$. Invert and switch sign on the exponent.

// These eight rules are the foundation for [logarithm rules](!/tables/algebra-identities#logarithm) and [radical rules](!/tables/algebra-identities#radical). Both families re-derive immediately from exponents via the inverse and rational-exponent bridges.`,
//       before: ``, after: ``, link: '#exponent'
//     },

//     obj7: {
//       title: `Logarithm Identities`,
//       content: `The [logarithm family](!/tables/algebra-identities#logarithm) has eight identities that mirror the [exponent rules](!/tables/algebra-identities#exponent) because logs are inverse exponentials.

// **Three core transformation rules**:

// - **Product**: $\\log_a(xy) = \\log_a(x) + \\log_a(y)$. Multiplication inside becomes addition outside.
// - **Quotient**: $\\log_a(x/y) = \\log_a(x) - \\log_a(y)$. Division becomes subtraction.
// - **Power**: $\\log_a(x^n) = n \\log_a(x)$. Exponent comes out as a coefficient.

// **Change of base**: $\\log_a(x) = \\log_b(x) / \\log_b(a)$. Converts to any chosen base, including the natural log $\\ln$ or common log $\\log_{10}$ for calculator evaluation.

// **Four trivial identities** that keep showing up:

// - $\\log_a(a) = 1$ (the log of the base).
// - $\\log_a(1) = 0$ (the log of one is always zero, regardless of base).
// - $\\log_a(a^x) = x$ (log undoes exponential).
// - $a^{\\log_a(x)} = x$ (exponential undoes log, for $x > 0$).

// The last pair are inverse-function identities. They are the reason logs are the canonical solving tool for $a^x = b$.`,
//       before: ``, after: ``, link: '#logarithm'
//     },

//     obj8: {
//       title: `Radicals, Absolute Value, and Fractions`,
//       content: `Three smaller families round out the structural identities.

// **[Radical rules](!/tables/algebra-identities#radical)** (5 identities) reduce to [exponent rules](!/tables/algebra-identities#exponent) via the bridge $\\sqrt[n]{a} = a^{1/n}$. The product rule $\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$, the quotient rule, and the power rule follow immediately. Nested radicals collapse via $\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$. Even-index radicals require non-negative operands to stay real.

// **[Absolute value identities](!/tables/algebra-identities#absoluteValue)** (4 identities) preserve multiplicative structure but not additive:

// - $|ab| = |a| \\, |b|$.
// - $|a/b| = |a| / |b|$.
// - $|-a| = |a|$.
// - $|a|^2 = a^2$.

// Note: $|a + b| \\neq |a| + |b|$ in general. Only the triangle inequality $|a + b| \\leq |a| + |b|$ holds.

// **[Fraction operations](!/tables/algebra-identities#fraction)** (4 identities) cover the four arithmetic combinations: same-denominator addition (just add numerators), different-denominator addition (cross-multiply to $bd$), multiplication (numerators times numerators), and division (multiply by reciprocal).`,
//       before: ``, after: ``, link: '#radical'
//     },

//     obj9: {
//       title: `Polynomial Identities`,
//       content: `The [polynomial family](!/tables/algebra-identities#polynomial) collects six identities used to solve and analyze polynomial equations.

// **Quadratic formula**: the roots of $ax^2 + bx + c = 0$ are $x = (-b \\pm \\sqrt{b^2 - 4ac}) / (2a)$, written directly from the coefficients.

// **Discriminant** $\\Delta = b^2 - 4ac$ determines the root structure without solving:
// - $\\Delta > 0$: two distinct real roots.
// - $\\Delta = 0$: one repeated real root.
// - $\\Delta < 0$: two complex conjugate roots.

// **Completing the square**: $x^2 + bx = (x + b/2)^2 - b^2/4$. The algebraic move behind the quadratic formula and the vertex form of a parabola.

// **Vieta's formulas** extract sum and product of roots from coefficients:
// - $x_1 + x_2 = -b/a$ (sum of roots).
// - $x_1 x_2 = c/a$ (product of roots).

// Useful when only the sum or product is needed &mdash; no need to solve the equation.

// **Remainder theorem**: $P(x) = (x - c) Q(x) + P(c)$. Dividing a polynomial by $(x - c)$ leaves remainder $P(c)$ &mdash; no long division required. The basis of synthetic division and the factor theorem ($P(c) = 0 \\iff (x-c)$ is a factor).`,
//       before: ``, after: ``, link: '#polynomial'
//     },

//     obj10: {
//       title: `Common Mistakes`,
//       content: `Six errors that account for most algebraic slip-ups:

// - **$(a+b)^2 \\neq a^2 + b^2$.** The middle term $2ab$ is real. Dropping it is the single most common algebra error. The full identity is $(a+b)^2 = a^2 + 2ab + b^2$ from the [expansion family](!/tables/algebra-identities#expansion).

// - **$a^2 + b^2$ does not factor over the reals.** Only the difference of squares factors. The sum of squares is irreducible (it factors over the complex numbers as $(a+bi)(a-bi)$, but not over the reals).

// - **$\\log(x+y) \\neq \\log(x) + \\log(y)$.** The [log product rule](!/tables/algebra-identities#logarithm) applies to multiplication inside, not addition. Log of a sum has no clean expansion.

// - **$a^{m+n} \\neq a^m + a^n$.** The [product rule for exponents](!/tables/algebra-identities#exponent) governs multiplication, not addition. Adding exponents is the result of multiplying powers, never of adding them.

// - **A negative exponent does not negate the value.** $a^{-n} = 1/a^n$, a reciprocal. $2^{-3} = 1/8$, not $-8$.

// - **Negative discriminant does not mean no roots.** $\\Delta < 0$ in the [quadratic family](!/tables/algebra-identities#polynomial) means two complex conjugate roots, not zero roots.`,
//       before: ``, after: ``, link: ''
//     },

//     obj11: {
//       title: `Related Concepts`,
//       content: `**[Field axioms](!/tables/algebra-identities#sec-properties)** &mdash; the structural rules (commutativity, associativity, distributivity, identity elements, inverse elements) that justify every identity in the table. Listed at the bottom of this page below the categories grid. Worth a glance for the underlying logic, especially when an identity seems arbitrary.

// **Algebra formulas** &mdash; the formula index where each identity in this table has a derivation page. Card details panels link directly to the relevant entry.

// **Polynomial factoring** &mdash; the practical application of the [factoring family](!/tables/algebra-identities#factoring). See the polynomial factoring topic for step-by-step worked examples.

// **Quadratic equations** &mdash; uses the [polynomial family](!/tables/algebra-identities#polynomial) heavily. Quadratic formula, discriminant analysis, Vieta's formulas, and completing the square all derive from there.

// **Exponent rules** and **logarithm rules** &mdash; the topic pages that develop the [exponent](!/tables/algebra-identities#exponent) and [logarithm](!/tables/algebra-identities#logarithm) families with examples and exercises.

// **Binomial theorem** &mdash; the combinatorial backbone of the [binomial expansion family](!/tables/algebra-identities#binomial). See the binomial theorem topic for proofs and applications to probability and series.`,
//       before: ``, after: ``, link: '#sec-properties'
//     },

//     obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
//     obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

//   }


//   const introContent = {
//     id: "intro",
//     title: "",
//     content: ``
//   }


//   const faqQuestions = {
//     obj1: {
//       question: "What are algebra identities?",
//       answer: "Algebra identities are equalities between two expressions that hold for all values of their variables. The core set includes the difference of squares, the perfect square trinomials, the sum and difference of cubes, and the cube of a binomial. They are the algebraic building blocks for factoring, simplifying, and expanding polynomial expressions."
//     },
//     obj2: {
//       question: "What is the difference of squares identity?",
//       answer: "The difference of squares says a squared minus b squared equals (a plus b) times (a minus b). It applies whenever a polynomial can be written as one square subtracted from another, even when a and b are themselves compound expressions. The identity is one of the fastest factoring shortcuts in algebra."
//     },
//     obj3: {
//       question: "What is the perfect square trinomial identity?",
//       answer: "The perfect square trinomial identities are (a plus b) squared equals a squared plus 2ab plus b squared, and (a minus b) squared equals a squared minus 2ab plus b squared. The middle term is always twice the product of the two parts. Recognizing this pattern lets you factor a trinomial back into a binomial squared at sight."
//     },
//     obj4: {
//       question: "What is the difference between the sum and difference of cubes?",
//       answer: "Sum of cubes: a cubed plus b cubed equals (a plus b) times (a squared minus ab plus b squared). Difference of cubes: a cubed minus b cubed equals (a minus b) times (a squared plus ab plus b squared). The SOAP mnemonic helps: Same sign on the binomial, Opposite sign in the middle of the trinomial, Always Positive on the last term."
//     },
//     obj5: {
//       question: "How do I memorize algebra identities?",
//       answer: "Group them by family: difference-of-powers (squares and cubes), perfect-power expansions (square and cube of a binomial), and multi-term expansions like (a plus b plus c) squared. Notice the structural patterns: the middle term in a perfect square is always twice the product of the parts; cubes split into a binomial times a trinomial. Drill the drag puzzle on this page to lock the pairings in."
//     }
//   }


//   const schemas = {
//     webApplication: {
//       "@context": "https://schema.org",
//       "@type": "WebApplication",
//       "name": "Algebra Identities Table and Practice Tool",
//       "description": "Algebra identities reference table: difference of squares, perfect squares, sum and difference of cubes, and binomial expansions. Search, filter, drill.",
//       "url": "https://www.learnmathclass.com/tables/algebra-identities",
//       "applicationCategory": "EducationalApplication",
//       "operatingSystem": "Any",
//       "offers": {
//         "@type": "Offer",
//         "price": "0",
//         "priceCurrency": "USD"
//       },
//       "featureList": [
//         "Two-mode search: look up an identity by its expanded form, or work backwards by entering its factored form",
//         "Reference grid of 53 algebra identities across 10 families: distributive, expansion, factoring, binomial, exponent, logarithm, radical, absolute value, fraction, and polynomial",
//         "Each identity card opens a details panel with a worked example and a link to the full derivation",
//         "Category filters that group identities by structural family, with deep-linkable URL hashes",
//         "Puzzle mode: drag right-hand-side tiles into matching left-hand-side slots, with per-tile hint button and see-why link",
//         "Field axioms reference card covering commutativity, associativity, distributivity, identity elements, and inverse elements",
//         "Built-in quiz with three rotating question types and persistent score for memorizing the table",
//         "Print, copy CSV, and download CSV actions for offline reference"
//       ],
//       "author": {
//         "@type": "Organization",
//         "name": "Learn Math Class"
//       },
//       "datePublished": "2024-01-15",
//       "dateModified": new Date().toISOString(),
//       "inLanguage": "en-US",
//       "isAccessibleForFree": true,
//       "learningResourceType": "Reference Table and Interactive Tool",
//       "educationalLevel": "High School, College",
//       "keywords": keyWords.join(", ")
//     },

//     breadcrumb: {
//       "@context": "https://schema.org",
//       "@type": "BreadcrumbList",
//       "itemListElement": [
//         {
//           "@type": "ListItem",
//           "position": 1,
//           "name": "Home",
//           "item": "https://www.learnmathclass.com"
//         },
//         {
//           "@type": "ListItem",
//           "position": 2,
//           "name": "Tables",
//           "item": "https://www.learnmathclass.com/tables"
//         },
//         {
//           "@type": "ListItem",
//           "position": 3,
//           "name": "Algebra Identities",
//           "item": "https://www.learnmathclass.com/tables/algebra-identities"
//         }
//       ]
//     },

//     faq: {
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       "mainEntity": Object.keys(faqQuestions).map(key => ({
//         "@type": "Question",
//         "name": faqQuestions[key].question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": faqQuestions[key].answer
//         }
//       }))
//     }
//   }


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//          faqQuestions,
//          schemas,
//          staticDataset,
//          seoData: {
//            title: "Algebra Identities Table & Puzzle | Learn Math Class",
//            description: "Algebra identities reference table: difference of squares, perfect squares, sum and difference of cubes, and binomial expansions. Search, filter, drill.",
//            keywords: keyWords.join(", "),
//            url: "/tables/algebra-identities",
//            name: "Algebra Identities Table and Practice Tool",
//            hubDescription: "Browse, search, and drill 53 algebra identities across 10 families: distributive, expansion, factoring, binomial, exponent, logarithm, radical, absolute value, fraction, and polynomial. Filter by family, open a card for the worked example, or switch to the drag puzzle to match factored forms with expansions until the table is memorized.",
//            category: "Algebra",
//            subCategory: "Identities",
//          }
//        }
//     }
//    }

// export default function AlgebraicIdentitiesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

//   const genericSections=[
//     { id:'0',  title:sectionsContent.obj0.title,  link:sectionsContent.obj0.link,  content:[sectionsContent.obj0.content]  },
//     { id:'1',  title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content]  },
//     { id:'2',  title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content]  },
//     { id:'3',  title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content]  },
//     { id:'4',  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content]  },
//     { id:'5',  title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content]  },
//     { id:'6',  title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content]  },
//     { id:'7',  title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content]  },
//     { id:'8',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content]  },
//     { id:'9',  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content]  },
//     { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
//     { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
//     // { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
//     // { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
//     // { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
//     // { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
//   ]

//   const dataset = {
//     ...staticDataset,
//     templates,
//     extraFilters,
//   }

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
//       __html: JSON.stringify(schemas.webApplication)
//     }}
//   />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.breadcrumb)
//     }}
//   />

//   <script
//     type="application/ld+json"
//     dangerouslySetInnerHTML={{
//       __html: JSON.stringify(schemas.faq)
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
//    <Breadcrumb nonLinkSegments={['algebra']}/>
//    <br/>
//    <br/>
//    <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Algebraic Identities</h1>
//    <br/>
//    <GenericTableExplorer
//      dataset={dataset}
//      quizGenerator={quizGenerator}
//    />
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"
//          secondaryNavTitle="More in this Section"
//    />
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
//     {/* <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    /> */}
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
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import GenericTableExplorer from '../../../app/components/tables/table-explorer/GenericTableExplorer'
import ALGEBRAIC_IDENTITIES_DATASET from '../../../app/components/tables/table-explorer/data/algebraicIdentitiesDataset'

const {
  quizGenerator,
  templates,
  extraFilters,
  ...staticDataset
} = ALGEBRAIC_IDENTITIES_DATASET


export async function getStaticProps(){

  const keyWords = [
    'algebra identities',
    'algebra identities table',
    'algebra identities list',
    'algebra identities formulas',
    'algebra identities chart',
    'algebra identities practice',
    'algebraic identities',
    'difference of squares',
    'perfect square trinomial',
    'sum of cubes formula',
    'difference of cubes formula',
    'binomial expansion',
    'algebra formulas',
    'factoring identities',
    'memorize algebra identities',
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Identity** — An equation that holds for every value of its variables, not just specific ones. Every row in the table is an identity.

**Left-hand side (LHS)** — The expression on the left of the equals sign. Usually the form you start with.

**Right-hand side (RHS)** — The expression on the right. Usually the form you want, whether that means a factored form, an expanded form, or a simpler equivalent.

**Family** — The structural category an identity belongs to: distributive, expansion, factoring, binomial, exponent, logarithm, radical, absolute value, fraction, or polynomial. Each family corresponds to a colored badge in the table and a card in the categories grid.

**Filter** — Clicking a family card highlights only that family's rows. Search and filter both highlight; only one is active at a time.

**Tip** — The short explanatory note attached to each identity card or row, explaining when the identity applies or how to remember it.`,
      before: ``, after: ``, link: ''
    },

    obj1: {
      title: `What This Table Covers`,
      content: `The table catalogues 53 algebra identities across 10 structural families. The full inventory:

- [Distributive identities](!/tables/algebra-identities#distributive) (2) — the rule $a(b+c) = ab + ac$ and FOIL.
- [Squares and cubes expansions](!/tables/algebra-identities#expansion) (5) — $(a \\pm b)^2$, $(a \\pm b)^3$, and $(a+b+c)^2$.
- [Factoring patterns](!/tables/algebra-identities#factoring) (7) — difference of squares, sum and difference of cubes, higher-power differences, and the trinomial pattern.
- [Binomial expansion](!/tables/algebra-identities#binomial) (4) — the binomial theorem, the coefficient $\\binom{n}{k}$, Pascal's identity, and binomial symmetry.
- [Exponent laws](!/tables/algebra-identities#exponent) (8) — product, quotient, power-of-power, distribution over products and quotients, zero, negative, and reciprocal-flip rules.
- [Logarithm identities](!/tables/algebra-identities#logarithm) (8) — the three core rules, change of base, and four inverse-function identities.
- [Radical rules](!/tables/algebra-identities#radical) (5) — the radical-to-exponent bridge and the product, quotient, power, and nesting rules.
- [Absolute value](!/tables/algebra-identities#absoluteValue) (4) — how $|\\cdot|$ interacts with multiplication, division, negation, and squaring.
- [Fraction operations](!/tables/algebra-identities#fraction) (4) — same-denominator addition, different-denominator addition, multiplication, and division.
- [Polynomial identities](!/tables/algebra-identities#polynomial) (6) — quadratic formula, discriminant, completing the square, Vieta's formulas, and the remainder theorem.

Each row shows the LHS, the RHS, the family, a one-line tip, and a link to the formula entry where available.`,
      before: ``, after: ``, link: '#sec-table'
    },

    obj2: {
      title: `Using the Table`,
      content: `The table supports three views, toggled by the buttons above the grid.

- **Cards** — one card per identity, with the LHS and RHS stacked. Click any card to expand its details panel inline.
- **Rows** — dense, print-friendly tabular layout. Same click-to-expand behavior. Default view on load.
- **Puzzle** — drag-and-drop drill mode. Covered separately in the [puzzle and quiz section](!/tables/algebra-identities#sec-quiz).

The [search tool](!/tables/algebra-identities#sec-tool) above the table accepts four search modes: by name, by LHS, by RHS, and by category. Type in the field and matches highlight live. The **Go →** button after a successful search scrolls the result into view.

The action bar to the right of the view toggle has three buttons:
- **Print** — opens the browser print dialog with the current view.
- **Copy CSV** — copies all entries to the clipboard as CSV with columns Name, LHS, RHS, Category, Tip, Link.
- **Download .csv** — downloads the same CSV as a file.

The [categories grid](!/tables/algebra-identities#sec-patterns) acts as a one-click filter. Click any family card to highlight just its entries; click again or use **Clear highlight** to reset.`,
      before: ``, after: ``, link: '#sec-tool'
    },

    obj3: {
      title: `Drill With the Puzzle and Quiz`,
      content: `Two practice modes are built into the page.

**Puzzle mode** is the third view above the table. Switch to it and the table reorganizes: each LHS becomes an empty slot, each RHS becomes a draggable tile. Drop the right tile into the right slot. Tiles that don't match snap back. Each tile has a hint button for a nudge and a see-why link to the formula page once placed correctly.

**Quiz mode** sits in its own section at the [bottom of the page](!/tables/algebra-identities#sec-quiz). The widget rotates three question types at random:

• Given an LHS, pick the correct RHS from four options.
• Given an RHS, pick the correct LHS from four options.
• Given the full identity, pick the family it belongs to.

Score is tracked across the session. The widget keeps a 30-question history so you can review missed questions. Reset clears the score and starts fresh.

Use the puzzle for active recall and the quiz for spaced rotation. Both pull from the same 53-item table.`,
      before: ``, after: ``, link: '#sec-quiz'
    },

    obj4: {
      title: `Distributive and Expansion Identities`,
      content: `The [distributive family](!/tables/algebra-identities#distributive) has two entries that anchor everything else. The distributive identity $a(b+c) = ab + ac$ is the structural rule linking addition and multiplication. FOIL — $(a+b)(c+d) = ac + ad + bc + bd$ — applies the distributive identity twice to multiply two binomials.

The [squares and cubes family](!/tables/algebra-identities#expansion) collects five expansions:

- $(a+b)^2 = a^2 + 2ab + b^2$ — the perfect-square trinomial.
- $(a-b)^2 = a^2 - 2ab + b^2$ — same coefficients, signed cross term.
- $(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$ — the trinomial square; each variable squared, plus twice every unordered pair product.
- $(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$ — coefficients from the third row of Pascal's triangle: 1, 3, 3, 1.
- $(a-b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$ — same coefficients, alternating signs.

Memorize the perfect-square and perfect-cube patterns first. They are the entry point to factoring and the basis for completing the square.`,
      before: ``, after: ``, link: '#expansion'
    },

    obj5: {
      title: `Factoring Patterns and the Binomial Theorem`,
      content: `The [factoring family](!/tables/algebra-identities#factoring) is the most-used set in algebra. Seven identities:

- **Difference of squares**: $a^2 - b^2 = (a+b)(a-b)$. The most-applied factoring shortcut.
- **Sum of cubes**: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$.
- **Difference of cubes**: $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$. SOAP mnemonic: **S**ame sign, **O**pposite sign, **A**lways **P**ositive.
- **Difference of even powers**: $x^{2n} - a^{2n} = (x^n - a^n)(x^n + a^n)$.
- **Difference of powers** (any $n$): $x^n - a^n$ always has $(x-a)$ as a factor.
- **Sum of powers** (odd $n$ only): $x^n + a^n$ has $(x+a)$ as a factor.
- **Trinomial factoring**: $x^2 + (a+b)x + ab = (x+a)(x+b)$.

**Sum of squares does not factor over the reals.** $a^2 + b^2$ is irreducible.

The [binomial expansion family](!/tables/algebra-identities#binomial) generalizes $(a+b)^n$ to arbitrary powers. The binomial theorem $(x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$ expands any non-negative integer power. The binomial coefficient $\\binom{n}{k} = n! / (k!(n-k)!)$ counts subsets. Pascal's identity $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$ generates the triangle row by row. Binomial symmetry $\\binom{n}{k} = \\binom{n}{n-k}$ reflects the include-or-exclude duality.`,
      before: ``, after: ``, link: '#factoring'
    },

    obj6: {
      title: `Exponent Laws`,
      content: `The [exponent family](!/tables/algebra-identities#exponent) has eight identities covering every legal operation on powers with a common base or exponent.

- **Product rule**: $a^m \\cdot a^n = a^{m+n}$. Same base → add exponents.
- **Quotient rule**: $a^m / a^n = a^{m-n}$. Same base → subtract exponents.
- **Power of a power**: $(a^m)^n = a^{mn}$. Multiply exponents.
- **Power of a product**: $(ab)^n = a^n b^n$. Distributes over multiplication.
- **Power of a quotient**: $(a/b)^n = a^n / b^n$. Distributes over division.
- **Zero exponent**: $a^0 = 1$ for any nonzero $a$. The expression $0^0$ is indeterminate.
- **Negative exponent**: $a^{-n} = 1/a^n$. Means reciprocal, not a negative result.
- **Negative exponent flip**: $(a/b)^{-n} = (b/a)^n$. Invert and switch sign on the exponent.

These eight rules are the foundation for [logarithm rules](!/tables/algebra-identities#logarithm) and [radical rules](!/tables/algebra-identities#radical). Both families re-derive immediately from exponents via the inverse and rational-exponent bridges.`,
      before: ``, after: ``, link: '#exponent'
    },

    obj7: {
      title: `Logarithm Identities`,
      content: `The [logarithm family](!/tables/algebra-identities#logarithm) has eight identities that mirror the [exponent rules](!/tables/algebra-identities#exponent) because logs are inverse exponentials.

**Three core transformation rules**:

- **Product**: $\\log_a(xy) = \\log_a(x) + \\log_a(y)$. Multiplication inside becomes addition outside.
- **Quotient**: $\\log_a(x/y) = \\log_a(x) - \\log_a(y)$. Division becomes subtraction.
- **Power**: $\\log_a(x^n) = n \\log_a(x)$. Exponent comes out as a coefficient.

**Change of base**: $\\log_a(x) = \\log_b(x) / \\log_b(a)$. Converts to any chosen base, including the natural log $\\ln$ or common log $\\log_{10}$ for calculator evaluation.

**Four trivial identities** that keep showing up:

- $\\log_a(a) = 1$ (the log of the base).
- $\\log_a(1) = 0$ (the log of one is always zero, regardless of base).
- $\\log_a(a^x) = x$ (log undoes exponential).
- $a^{\\log_a(x)} = x$ (exponential undoes log, for $x > 0$).

The last pair are inverse-function identities. They are the reason logs are the canonical solving tool for $a^x = b$.`,
      before: ``, after: ``, link: '#logarithm'
    },

    obj8: {
      title: `Radicals, Absolute Value, and Fractions`,
      content: `Three smaller families round out the structural identities.

**[Radical rules](!/tables/algebra-identities#radical)** (5 identities) reduce to [exponent rules](!/tables/algebra-identities#exponent) via the bridge $\\sqrt[n]{a} = a^{1/n}$. The product rule $\\sqrt[n]{ab} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$, the quotient rule, and the power rule follow immediately. Nested radicals collapse via $\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$. Even-index radicals require non-negative operands to stay real.

**[Absolute value identities](!/tables/algebra-identities#absoluteValue)** (4 identities) preserve multiplicative structure but not additive:

- $|ab| = |a| \\, |b|$.
- $|a/b| = |a| / |b|$.
- $|-a| = |a|$.
- $|a|^2 = a^2$.

Note: $|a + b| \\neq |a| + |b|$ in general. Only the triangle inequality $|a + b| \\leq |a| + |b|$ holds.

**[Fraction operations](!/tables/algebra-identities#fraction)** (4 identities) cover the four arithmetic combinations: same-denominator addition (just add numerators), different-denominator addition (cross-multiply to $bd$), multiplication (numerators times numerators), and division (multiply by reciprocal).`,
      before: ``, after: ``, link: '#radical'
    },

    obj9: {
      title: `Polynomial Identities`,
      content: `The [polynomial family](!/tables/algebra-identities#polynomial) collects six identities used to solve and analyze polynomial equations.

**Quadratic formula**: the roots of $ax^2 + bx + c = 0$ are $x = (-b \\pm \\sqrt{b^2 - 4ac}) / (2a)$, written directly from the coefficients.

**Discriminant** $\\Delta = b^2 - 4ac$ determines the root structure without solving:
- $\\Delta > 0$: two distinct real roots.
- $\\Delta = 0$: one repeated real root.
- $\\Delta < 0$: two complex conjugate roots.

**Completing the square**: $x^2 + bx = (x + b/2)^2 - b^2/4$. The algebraic move behind the quadratic formula and the vertex form of a parabola.

**Vieta's formulas** extract sum and product of roots from coefficients:
- $x_1 + x_2 = -b/a$ (sum of roots).
- $x_1 x_2 = c/a$ (product of roots).

Useful when only the sum or product is needed — no need to solve the equation.

**Remainder theorem**: $P(x) = (x - c) Q(x) + P(c)$. Dividing a polynomial by $(x - c)$ leaves remainder $P(c)$ — no long division required. The basis of synthetic division and the factor theorem ($P(c) = 0 \\iff (x-c)$ is a factor).`,
      before: ``, after: ``, link: '#polynomial'
    },

    obj10: {
      title: `Common Mistakes`,
      content: `Six errors that account for most algebraic slip-ups:

- **$(a+b)^2 \\neq a^2 + b^2$.** The middle term $2ab$ is real. Dropping it is the single most common algebra error. The full identity is $(a+b)^2 = a^2 + 2ab + b^2$ from the [expansion family](!/tables/algebra-identities#expansion).

- **$a^2 + b^2$ does not factor over the reals.** Only the difference of squares factors. The sum of squares is irreducible (it factors over the complex numbers as $(a+bi)(a-bi)$, but not over the reals).

- **$\\log(x+y) \\neq \\log(x) + \\log(y)$.** The [log product rule](!/tables/algebra-identities#logarithm) applies to multiplication inside, not addition. Log of a sum has no clean expansion.

- **$a^{m+n} \\neq a^m + a^n$.** The [product rule for exponents](!/tables/algebra-identities#exponent) governs multiplication, not addition. Adding exponents is the result of multiplying powers, never of adding them.

- **A negative exponent does not negate the value.** $a^{-n} = 1/a^n$, a reciprocal. $2^{-3} = 1/8$, not $-8$.

- **Negative discriminant does not mean no roots.** $\\Delta < 0$ in the [quadratic family](!/tables/algebra-identities#polynomial) means two complex conjugate roots, not zero roots.`,
      before: ``, after: ``, link: ''
    },

    obj11: {
      title: `Related Concepts`,
      content: `**[Field axioms](!/tables/algebra-identities#sec-properties)** — the structural rules (commutativity, associativity, distributivity, identity elements, inverse elements) that justify every identity in the table. Listed at the bottom of this page below the categories grid. Worth a glance for the underlying logic, especially when an identity seems arbitrary.

**Algebra formulas** — the formula index where each identity in this table has a derivation page. Card details panels link directly to the relevant entry.

**Polynomial factoring** — the practical application of the [factoring family](!/tables/algebra-identities#factoring). See the polynomial factoring topic for step-by-step worked examples.

**Quadratic equations** — uses the [polynomial family](!/tables/algebra-identities#polynomial) heavily. Quadratic formula, discriminant analysis, Vieta's formulas, and completing the square all derive from there.

**Exponent rules** and **logarithm rules** — the topic pages that develop the [exponent](!/tables/algebra-identities#exponent) and [logarithm](!/tables/algebra-identities#logarithm) families with examples and exercises.

**Binomial theorem** — the combinatorial backbone of the [binomial expansion family](!/tables/algebra-identities#binomial). See the binomial theorem topic for proofs and applications to probability and series.`,
      before: ``, after: ``, link: '#sec-properties'
    },

    obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }

  }


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  const faqQuestions = {
    obj1: {
      question: "What are algebra identities?",
      answer: "Algebra identities are equalities between two expressions that hold for all values of their variables. The core set includes the difference of squares, the perfect square trinomials, the sum and difference of cubes, and the cube of a binomial. They are the algebraic building blocks for factoring, simplifying, and expanding polynomial expressions."
    },
    obj2: {
      question: "What is the difference of squares identity?",
      answer: "The difference of squares says a squared minus b squared equals (a plus b) times (a minus b). It applies whenever a polynomial can be written as one square subtracted from another, even when a and b are themselves compound expressions. The identity is one of the fastest factoring shortcuts in algebra."
    },
    obj3: {
      question: "What is the perfect square trinomial identity?",
      answer: "The perfect square trinomial identities are (a plus b) squared equals a squared plus 2ab plus b squared, and (a minus b) squared equals a squared minus 2ab plus b squared. The middle term is always twice the product of the two parts. Recognizing this pattern lets you factor a trinomial back into a binomial squared at sight."
    },
    obj4: {
      question: "What is the difference between the sum and difference of cubes?",
      answer: "Sum of cubes: a cubed plus b cubed equals (a plus b) times (a squared minus ab plus b squared). Difference of cubes: a cubed minus b cubed equals (a minus b) times (a squared plus ab plus b squared). The SOAP mnemonic helps: Same sign on the binomial, Opposite sign in the middle of the trinomial, Always Positive on the last term."
    },
    obj5: {
      question: "How do I memorize algebra identities?",
      answer: "Group them by family: difference-of-powers (squares and cubes), perfect-power expansions (square and cube of a binomial), and multi-term expansions like (a plus b plus c) squared. Notice the structural patterns: the middle term in a perfect square is always twice the product of the parts; cubes split into a binomial times a trinomial. Drill the drag puzzle on this page to lock the pairings in."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Algebra Identities Table and Practice Tool",
      "description": "Algebra identities reference table: difference of squares, perfect squares, sum and difference of cubes, and binomial expansions. Search, filter, drill.",
      "url": "https://www.learnmathclass.com/tables/algebra-identities",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two-mode search: look up an identity by its expanded form, or work backwards by entering its factored form",
        "Reference grid of 53 algebra identities across 10 families: distributive, expansion, factoring, binomial, exponent, logarithm, radical, absolute value, fraction, and polynomial",
        "Each identity card opens a details panel with a worked example and a link to the full derivation",
        "Category filters that group identities by structural family, with deep-linkable URL hashes",
        "Puzzle mode: drag right-hand-side tiles into matching left-hand-side slots, with per-tile hint button and see-why link",
        "Field axioms reference card covering commutativity, associativity, distributivity, identity elements, and inverse elements",
        "Built-in quiz with three rotating question types and persistent score for memorizing the table",
        "Print, copy CSV, and download CSV actions for offline reference"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Reference Table and Interactive Tool",
      "educationalLevel": "High School, College",
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
          "name": "Tables",
          "item": "https://www.learnmathclass.com/tables"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Algebra Identities",
          "item": "https://www.learnmathclass.com/tables/algebra-identities"
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
         introContent,
         faqQuestions,
         schemas,
         staticDataset,
         seoData: {
           title: "Algebra Identities Table & Puzzle | Learn Math Class",
           description: "Algebra identities reference table: difference of squares, perfect squares, sum and difference of cubes, and binomial expansions. Search, filter, drill.",
           keywords: keyWords.join(", "),
           url: "/tables/algebra-identities",
           name: "Algebra Identities Table and Practice Tool",
           hubDescription: "Browse, search, and drill 53 algebra identities across 10 families: distributive, expansion, factoring, binomial, exponent, logarithm, radical, absolute value, fraction, and polynomial. Filter by family, open a card for the worked example, or switch to the drag puzzle to match factored forms with expansions until the table is memorized.",
           category: "Algebra",
           subCategory: "Identities",
         }
       }
    }
   }

export default function AlgebraicIdentitiesTablePage({seoData, sectionsContent, introContent, faqQuestions, schemas, staticDataset}) {

  const genericSections=[
    { id:'0',  title:sectionsContent.obj0.title,  link:sectionsContent.obj0.link,  content:[sectionsContent.obj0.content]  },
    { id:'1',  title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content]  },
    { id:'2',  title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content]  },
    { id:'3',  title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content]  },
    { id:'4',  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content]  },
    { id:'5',  title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content]  },
    { id:'6',  title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content]  },
    { id:'7',  title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content]  },
    { id:'8',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content]  },
    { id:'9',  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content]  },
    { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
    { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    // { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
    // { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
    // { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
    // { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
  ]

  const dataset = {
    ...staticDataset,
    templates,
    extraFilters,
  }

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
   <Breadcrumb nonLinkSegments={['algebra']}/>
   <br/>
   <br/>
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Algebraic Identities</h1>
   <br/>
   <GenericTableExplorer
     dataset={dataset}
     quizGenerator={quizGenerator}
   />
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"
         secondaryNavTitle="More in this Section"
   />
   <br/>
   <br/>
   <br/>
    {/* <IntroSection
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
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