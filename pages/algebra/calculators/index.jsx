// // // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // // import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// // // import Sections from '@/app/components/page-components/section/Sections'
// // // import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// // // import Head from 'next/head'
// // // import Link from 'next/link'
// // // import '@/pages/pages.css'
// // // import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


// // // export async function getStaticProps(){

// // //   const keyWords=[
// // //     'algebra calculators',
// // //     'algebra solvers',
// // //     'equation solvers',
// // //     'inequality solvers',
// // //     'step by step algebra',
// // //     'online math calculator',
// // //     'algebra problem solver',
// // //     'interactive algebra tools'
// // //   ]

// // //   // •

// // // //   \u2022 First item
// // // // \u2022 Second item

  
// // // // <hr style="border-width:1px;"></hr>

// // // // <hr style="color:blue;" />

// // // // <hr style="border-color:#3498db; border-width:1px;" />



// // // // @span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Probability Symbols and Notations](!/math-symbols/probability) →@

 
// // // // <div key={'notation-normal'} style={{background: 'linear-gradient(to right, #f1f5f9 0%, #e2e8f0 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #94a3b8',transform:'scale(0.9)'}}>
// // //         //     {processContent(sectionsContent.normal.notation)}
// // //         // </div>,


// // // //   <div key={'parameters-normal'} style={{background: 'linear-gradient(to right, #f8fafc 0%, #f1f5f9 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #cbd5e1',transform:'scale(0.9)'}}>
// // // //     {processContent(sectionsContent.normal.parameters)}
// // // // </div>,
        
// // // //  <div key={'pmf-geometric'} style={{background: 'linear-gradient(to right, #eff6ff 0%, #dbeafe 100%)', padding: '20px', margin: '16px 0', borderRadius: '8px', border: '2px solid #60a5fa',transform:'scale(0.9)'}}>
// // // //                   {processContent(sectionsContent.obj4.content)}
// // // //                   </div>,


// // // //  <div key={'dist'} style={{
// // // //                     textAlign: 'center',
// // // //                     transform: 'scale(0.98)',
// // // //                     transformOrigin: 'center',
// // // //                     marginTop:'50px',
// // // //                     marginLeft:'-150px'
// // // //                   }} dangerouslySetInnerHTML={{ 
// // // //                     __html:   sectionContent.distributions.svg,
// // // //                   }} />

// // //     const sectionsContent={

// // //     obj0:{
// // //       title:`Key Terms`,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
  
// // //     },
// // //     obj1:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
  
// // //     },
// // //     obj2:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
  
// // //     obj3:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj4:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj5:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj6:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj7:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj8:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj9:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj10:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj11:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj12:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     },
// // //     obj13:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
// // //       link:'',
  
// // //     },
// // //     obj14:{
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
// // //       link:'',
  
// // //     },


// // //     obj15:{
  
// // //       title:``,
// // //       content:``,
// // //       before:``,
// // //       after:``,
// // //       link:'',
  
// // //     }
  
// // //   }


// // //   const introContent = {
// // //   id: "intro",
// // //   title: "",
// // //   content: ``
// // // }




// // //    return {
// // //       props:{
// // //          sectionsContent,
// // //          introContent,
// // //           seoData: {
// // //         title: "Algebra Calculators and Solvers | Learn Math Class",
// // //         description: "Step-by-step calculators for algebra: equation solvers (linear, quadratic, polynomial, rational, radical, exponential, absolute value, literal) and inequality solvers covering the same families.",
// // //         keywords: keyWords.join(", "),
// // //         url: "/algebra/calculators",
// // //          name: "Algebra Calculators and Solvers"
// // //       },
        
// // //        }
// // //     }
// // //    }

// // // export default function AlgebraCalculatorsLanding({seoData,sectionsContent , introContent}) {

    
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
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
// // //     // {
// // //     //     id:'1',
// // //     //     title:sectionsContent.obj1.title,
// // //     //     link:sectionsContent.obj1.link,
// // //     //     content:[
// // //     //       sectionsContent.obj1.content,
// // //     //     ]
// // //     // },
    
// // // ]

// // //   const cards = [
// // //     {
// // //       label: 'Equations',
// // //       title: 'Algebra Equation Solvers',
// // //       count: '8 solvers',
// // //       blurb: `A complete set of step-by-step solvers for the standard equation families taught in algebra: linear, quadratic, polynomial, rational, radical, exponential, absolute value, and literal (multi-variable formula rearrangement). Each solver shows the full solving process, flags extraneous roots where relevant, and renders a graph of the underlying expression where one applies.`,
// // //       href: '/algebra/calculators/equations'
// // //     },
// // //     {
// // //       label: 'Inequalities',
// // //       title: 'Algebra Inequality Solvers',
// // //       count: '6 solvers',
// // //       blurb: `Step-by-step solvers for the inequality counterparts of the main equation families: linear, quadratic, rational, radical, exponential, and absolute value. Each solver explains the sign-handling logic — sign charts for rational and quadratic cases, compound vs union splits for absolute value, domain checks for radical and exponential — and presents the final answer in interval notation.`,
// // //       href: '/algebra/calculators/inequalities'
// // //     }
// // //   ]

// // //   const cardStyles = {
// // //     container: {
// // //       display: 'grid',
// // //       gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
// // //       gap: '24px',
// // //       margin: '40px auto',
// // //       maxWidth: '1100px',
// // //       padding: '0 20px',
// // //     },
// // //     card: {
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       border: '1px solid #d8e1ec',
// // //       borderRadius: '10px',
// // //       padding: '28px 26px',
// // //       backgroundColor: '#ffffff',
// // //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //     },
// // //     label: {
// // //       fontSize: '13px',
// // //       letterSpacing: '0.8px',
// // //       textTransform: 'uppercase',
// // //       color: '#6b7a8f',
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       fontWeight: 600,
// // //       marginBottom: '10px',
// // //     },
// // //     title: {
// // //       fontSize: '24px',
// // //       fontWeight: 600,
// // //       color: '#143a66',
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //       marginBottom: '6px',
// // //       lineHeight: 1.2,
// // //     },
// // //     count: {
// // //       fontSize: '14px',
// // //       fontStyle: 'italic',
// // //       color: '#2c5d99',
// // //       marginBottom: '18px',
// // //       paddingBottom: '16px',
// // //       borderBottom: '1px solid #ecf1f7',
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //     },
// // //     blurb: {
// // //       fontSize: '15px',
// // //       color: '#3a4a5e',
// // //       lineHeight: 1.55,
// // //       marginBottom: '22px',
// // //       flex: '1 1 auto',
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //     },
// // //     primaryAction: {
// // //       display: 'inline-block',
// // //       padding: '10px 16px',
// // //       background: '#2c5d99',
// // //       color: '#ffffff',
// // //       borderRadius: '6px',
// // //       textDecoration: 'none',
// // //       fontSize: '14px',
// // //       fontWeight: 600,
// // //       textAlign: 'center',
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       letterSpacing: '0.3px',
// // //       marginTop: 'auto',
// // //     },
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
// // //       __html: JSON.stringify({
// // //         "@context": "https://schema.org",
// // //         "@type": "WebPage",
// // //         "name": seoData.name,
// // //         "description": seoData.description,
// // //         "keywords": seoData.keywords,
// // //         "url": `https://www.learnmathclass.com${seoData.url}`,
// // //         "dateModified": new Date().toISOString(),
// // //         "inLanguage": "en-US",
// // //         "mainEntity": {
// // //           "@type": "Article",
// // //           "name": seoData.name,
// // //           "dateModified": new Date().toISOString(),
// // //           "author": {
// // //             "@type": "Organization",
// // //             "name": "Learn Math Class"
// // //           }
// // //         }
// // //       })
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
// // //    <Breadcrumb/>
// // //    <br/>
// // //    <br/>
// // //    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Algebra Calculators and Solvers</h1>
// // //    <br/>
// // //    <br/>

// // //    <div style={cardStyles.container}>
// // //      {cards.map((c) => (
// // //        <div key={c.href} style={cardStyles.card}>
// // //          <div style={cardStyles.label}>{c.label}</div>
// // //          <div style={cardStyles.title}>{c.title}</div>
// // //          <div style={cardStyles.count}>{c.count}</div>
// // //          <div style={cardStyles.blurb}>{c.blurb}</div>
// // //          <Link href={c.href} style={cardStyles.primaryAction}>
// // //            Browse {c.label} →
// // //          </Link>
// // //        </div>
// // //      ))}
// // //    </div>

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
// // //    {/* <Sections sections={genericSections.slice(1)}/> */}
// // //    <br/>
// // //    <br/>
// // //    <br/>
// // //    {/* <ScrollUpButton/> */}
// // //    </>
// // //   )
// // // }



// // import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// // import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// // import React from 'react'
// // import '../../../pages/pages.css'
// // import Head from 'next/head'
// // import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
// // import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


// // export async function getStaticProps() {

// //   const keyWords = [
// //     'algebra calculators',
// //     'algebra solvers',
// //     'equation solvers',
// //     'inequality solvers',
// //     'sequence calculators',
// //     'triangular numbers calculator',
// //     'square numbers calculator',
// //     'tetrahedral numbers calculator',
// //     'fibonacci sequence calculator',
// //     'prime numbers calculator',
// //     'arithmetic sequence calculator',
// //     'geometric sequence calculator',
// //     'step by step algebra',
// //     'online math calculator',
// //     'algebra problem solver',
// //     'interactive algebra tools',
// //   ]

// //   // Sequence tools \u2014 each served by /algebra/calculators/[view].jsx.
// //   // They don't exist as static files, so we add them via customItems.
// //   const sequenceItems = [
// //     {
// //       at: 'end',
// //       title: 'Triangular Numbers',
// //       description: `Explore the triangular numbers $T_n = n(n+1)/2$ \u2014 the totals you get from stacking dots into a triangle: 1, 3, 6, 10, 15, ... Browse the first $N$ terms with their running sum, list every term in a given range of indexes, test whether a positive integer is triangular (using the $8m + 1$ perfect-square test), or look up $T_n$ directly. Each mode opens a side panel with the underlying theory and a live walkthrough that uses your actual input values.`,
// //       href: '/algebra/calculators/triangular-numbers',
// //       category: 'Sequences',
// //       subCategory: 'Figurate numbers',
// //       icon: '\u25B3',
// //     },
// //     {
// //       at: 'end',
// //       title: 'Square Numbers',
// //       description: `Explore the square numbers $S_n = n^2$ \u2014 the perfect squares 1, 4, 9, 16, 25, 36, ... Browse the first $N$ terms, list any index range, test whether a number is a perfect square (the membership test reduces to checking whether $\\sqrt{m}$ is an integer), or look up $S_n$ directly. Side-panel walkthroughs show the exact computation behind each result.`,
// //       href: '/algebra/calculators/square-numbers',
// //       category: 'Sequences',
// //       subCategory: 'Figurate numbers',
// //       icon: '\u25A0',
// //     },
// //     {
// //       at: 'end',
// //       title: 'Tetrahedral Numbers',
// //       description: `Explore the tetrahedral numbers $\\mathrm{Te}_n = n(n+1)(n+2)/6$ \u2014 running totals of the triangular numbers, equivalently the number of dots in a triangular pyramid of side $n$: 1, 4, 10, 20, 35, 56, ... Browse, list a range, test membership (estimated via cube root and verified), or look up $\\mathrm{Te}_n$ directly. Walkthroughs explain every step.`,
// //       href: '/algebra/calculators/tetrahedral-numbers',
// //       category: 'Sequences',
// //       subCategory: 'Figurate numbers',
// //       icon: '\u25B2',
// //     },
// //     {
// //       at: 'end',
// //       title: 'Fibonacci Sequence',
// //       description: `Explore the Fibonacci sequence $F_n = F_{n-1} + F_{n-2}$ with $F_1 = F_2 = 1$. All computation uses arbitrary-precision integers, so terms remain exact at any index. Browse the first $N$ terms with their sum, list a range, test whether a number is Fibonacci (via the $5m^2 \\pm 4$ perfect-square identity), or look up $F_n$ directly \u2014 with side-panel walkthroughs showing the recurrence in action.`,
// //       href: '/algebra/calculators/fibonacci-sequence',
// //       category: 'Sequences',
// //       subCategory: 'Famous sequences',
// //       icon: '\u03C6',
// //     },
// //     {
// //       at: 'end',
// //       title: 'Prime Numbers',
// //       description: `Explore the prime numbers $p_n$ using a precomputed list of the first 10,000 primes (up to 104,729). Browse the first $N$ primes with their sum, list primes by index range, test whether a number is prime (constant-time hash lookup), or look up the $n$-th prime directly. Each non-prime input shows the nearest primes on either side as a sanity check.`,
// //       href: '/algebra/calculators/prime-numbers',
// //       category: 'Sequences',
// //       subCategory: 'Famous sequences',
// //       icon: 'p',
// //     },
// //     {
// //       at: 'end',
// //       title: 'Arithmetic Sequence',
// //       description: `Solve and explore arithmetic sequences $a_n = a_1 + (n-1)d$. The solver mode takes any three of $\\{a_1, d, n, a_n, S_n\\}$ and finds the fourth, with a full step-by-step walkthrough. The browse, range, and lookup modes work the same as the figurate explorers \u2014 only here the sequence is parameter-driven, so you set $a_1$ and $d$ first and the tool re-computes everything live.`,
// //       href: '/algebra/calculators/arithmetic-sequence',
// //       category: 'Sequences',
// //       subCategory: 'Parametric sequences',
// //       icon: '\u2192',
// //     },
// //     {
// //       at: 'end',
// //       title: 'Geometric Sequence',
// //       description: `Solve and explore geometric sequences $a_n = a_1 \\cdot r^{n-1}$. The solver handles finite sums $S_n = a_1 \\dfrac{r^n - 1}{r - 1}$ and the infinite sum $S_\\infty = \\dfrac{a_1}{1 - r}$ for $|r| < 1$, flagging divergence otherwise. Set $a_1$ and $r$, then browse, list ranges, test membership, look up by index, or solve for any unknown parameter \u2014 each with its own walkthrough.`,
// //       href: '/algebra/calculators/geometric-sequence',
// //       category: 'Sequences',
// //       subCategory: 'Parametric sequences',
// //       icon: '\u00D7',
// //     },
// //   ]

// //   const seoData = {
// //     title: 'Algebra Calculators and Solvers | Learn Math Class',
// //     description: 'Step-by-step calculators for algebra: equation solvers (linear, quadratic, polynomial, rational, radical, exponential, absolute value, literal), inequality solvers across the same families, and integer-sequence explorers (triangular, square, tetrahedral, Fibonacci, primes, arithmetic, geometric).',
// //     keywords: keyWords.join(', '),
// //     url: '/algebra/calculators',
// //     name: 'Algebra Calculators and Solvers',
// //   }

// //   const schemas = {
// //     collectionPage: {
// //       '@context': 'https://schema.org',
// //       '@type': 'CollectionPage',
// //       'name': 'Algebra Calculators and Solvers',
// //       'description': seoData.description,
// //       'url': `https://www.learnmathclass.com${seoData.url}`,
// //       'inLanguage': 'en-US',
// //       'about': { '@type': 'Thing', 'name': 'Algebra Calculators' },
// //       'keywords': keyWords.join(', '),
// //       'author': { '@type': 'Organization', 'name': 'Learn Math Class' },
// //       'publisher': { '@type': 'Organization', 'name': 'Learn Math Class' },
// //       'dateModified': new Date().toISOString(),
// //     },

// //     breadcrumb: {
// //       '@context': 'https://schema.org',
// //       '@type': 'BreadcrumbList',
// //       'itemListElement': [
// //         { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.learnmathclass.com' },
// //         { '@type': 'ListItem', 'position': 2, 'name': 'Algebra', 'item': 'https://www.learnmathclass.com/algebra' },
// //         { '@type': 'ListItem', 'position': 3, 'name': 'Calculators', 'item': 'https://www.learnmathclass.com/algebra/calculators' },
// //       ],
// //     },
// //   }

// //   const pageArticle = `Algebra splits naturally into things you solve and things you explore. The equation solvers cover the full ladder \u2014 linear, quadratic, polynomial, rational, radical, exponential, absolute value, and literal \u2014 each one showing the full chain of moves: distributing, combining like terms, isolating the variable, applying the quadratic formula, handling extraneous roots from squaring or domain restrictions. The inequality solvers cover the same families with the same step-by-step transparency, plus sign-chart logic for the rational and quadratic cases, and proper interval-notation output throughout.

// // The sequence explorers are a different kind of tool. Instead of a single answer, each one opens four modes onto the same underlying sequence: list the first $N$ terms, list a range, test whether a number belongs to the sequence (and if so, at what index), or look up a single term by position. The membership tests use the standard closed-form identities where they exist \u2014 $8m + 1$ being a perfect square for triangular, $5m^2 \\pm 4$ for Fibonacci, $\\sqrt{m}$ being an integer for squares \u2014 and fall back to numerical estimation and verification where they don't, as with tetrahedral numbers. Primes get a precomputed list of the first 10,000 for constant-time lookup.

// // Arithmetic and geometric sequences earn a separate kind of explorer because they're parameter-driven. You set $a_1$ and $d$ (or $r$), and the same four modes recompute live, plus a solver mode that takes any three of $\\{a_1, d, n, a_n, S_n\\}$ and finds the fourth. Geometric adds finite and infinite sums, with divergence flagged for $|r| \\geq 1$.

// // Every tool runs in the browser, shows its work, and explains the math in a side panel keyed to whatever mode you're in. Pick a category below.`

// //   const intro = {
// //     title: 'Free step-by-step algebra calculators and sequence explorers',
// //     description: 'Equation and inequality solvers walk through every step \u2014 distribute, combine, isolate, factor, square, take logs, check domains \u2014 and explain why each move is legal. Sequence explorers open four modes onto the same sequence: list, range, membership test, and direct lookup, with parametric variants for arithmetic and geometric.',
// //     tip: 'Each solver shows the work; each sequence explorer shows the math behind the answer in a live walkthrough.',
// //   }

// //   const toolsData = await buildToolIndexData('algebra/calculators')

// //   return {
// //     props: {
// //       seoData,
// //       schemas,
// //       pageArticle,
// //       intro,
// //       toolsData,
// //       customItems: sequenceItems,
// //     },
// //   }
// // }


// // export default function AlgebraCalculatorsPage({
// //   seoData,
// //   schemas,
// //   pageArticle,
// //   intro,
// //   toolsData,
// //   customItems,
// // }) {
// //   return (
// //     <>
// //       <Head>
// //         <title>{seoData.title}</title>
// //         <meta name="description" content={seoData.description} />
// //         <meta name="keywords" content={seoData.keywords} />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

// //         <meta property="og:title" content={seoData.title} />
// //         <meta property="og:description" content={seoData.description} />
// //         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
// //         <meta property="og:type" content="website" />
// //         <meta property="og:site_name" content="Learn Math Class" />

// //         <meta name="twitter:card" content="summary" />
// //         <meta name="twitter:title" content={seoData.title} />
// //         <meta name="twitter:description" content={seoData.description} />

// //         <meta name="robots" content="index, follow" />

// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collectionPage) }}
// //         />
// //         <script
// //           type="application/ld+json"
// //           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
// //         />
// //       </Head>

// //       <br/>
// //       <br/>
// //       <br/>
// //       <br/>

// //       <OperaSidebar
// //         side='right'
// //         sidebarWidth='45px'
// //         panelWidth='200px'
// //         iconColor='white'
// //         panelBackgroundColor='#f2f2f2'
// //       />

// //       <Breadcrumb/>
// //       <br/>
// //       <br/>

// //       <VisualToolsPage
// //         tools={toolsData}
// //         customItems={customItems}
// //         pageTitle="Algebra Calculators and Solvers"
// //         intro={intro}
// //         icon="\uD83E\uDDEE"
// //         dropdownLabel="All Calculators"
// //         theme="deepBlue"
// //         sidebar={true}
// //         sidebarBrandName="Algebra"
// //         sidebarBrandSub="Calculators"
// //         pageArticle={pageArticle}
// //       />
// //     </>
// //   )
// // }



// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import '../../../pages/pages.css'
// import Head from 'next/head'
// import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
// import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


// export async function getStaticProps() {

//   const keyWords = [
//     'algebra calculators',
//     'algebra solvers',
//     'equation solvers',
//     'inequality solvers',
//     'sequence calculators',
//     'triangular numbers calculator',
//     'square numbers calculator',
//     'tetrahedral numbers calculator',
//     'fibonacci sequence calculator',
//     'prime numbers calculator',
//     'arithmetic sequence calculator',
//     'geometric sequence calculator',
//     'step by step algebra',
//     'online math calculator',
//     'algebra problem solver',
//     'interactive algebra tools',
//   ]

//   // Sequence tools \u2014 each served by /algebra/calculators/[view].jsx.
//   // All under the single "Sequences" category, no sub-category for now.
//   const sequenceItems = [
//     {
//       at: 'end',
//       title: 'Triangular Numbers',
//       description: `Explore the triangular numbers $T_n = n(n+1)/2$ \u2014 the totals you get from stacking dots into a triangle: 1, 3, 6, 10, 15, ... Browse the first $N$ terms with their running sum, list every term in a given range of indexes, test whether a positive integer is triangular (using the $8m + 1$ perfect-square test), or look up $T_n$ directly. Each mode opens a side panel with the underlying theory and a live walkthrough that uses your actual input values.`,
//       href: '/algebra/calculators/triangular-numbers',
//       category: 'Sequences',
//       icon: '\u25B3',
//     },
//     {
//       at: 'end',
//       title: 'Square Numbers',
//       description: `Explore the square numbers $S_n = n^2$ \u2014 the perfect squares 1, 4, 9, 16, 25, 36, ... Browse the first $N$ terms, list any index range, test whether a number is a perfect square (the membership test reduces to checking whether $\\sqrt{m}$ is an integer), or look up $S_n$ directly. Side-panel walkthroughs show the exact computation behind each result.`,
//       href: '/algebra/calculators/square-numbers',
//       category: 'Sequences',
//       icon: '\u25A0',
//     },
//     {
//       at: 'end',
//       title: 'Tetrahedral Numbers',
//       description: `Explore the tetrahedral numbers $\\mathrm{Te}_n = n(n+1)(n+2)/6$ \u2014 running totals of the triangular numbers, equivalently the number of dots in a triangular pyramid of side $n$: 1, 4, 10, 20, 35, 56, ... Browse, list a range, test membership (estimated via cube root and verified), or look up $\\mathrm{Te}_n$ directly. Walkthroughs explain every step.`,
//       href: '/algebra/calculators/tetrahedral-numbers',
//       category: 'Sequences',
//       icon: '\u25B2',
//     },
//     {
//       at: 'end',
//       title: 'Fibonacci Sequence',
//       description: `Explore the Fibonacci sequence $F_n = F_{n-1} + F_{n-2}$ with $F_1 = F_2 = 1$. All computation uses arbitrary-precision integers, so terms remain exact at any index. Browse the first $N$ terms with their sum, list a range, test whether a number is Fibonacci (via the $5m^2 \\pm 4$ perfect-square identity), or look up $F_n$ directly \u2014 with side-panel walkthroughs showing the recurrence in action.`,
//       href: '/algebra/calculators/fibonacci-sequence',
//       category: 'Sequences',
//       icon: '\u03C6',
//     },
//     {
//       at: 'end',
//       title: 'Prime Numbers',
//       description: `Explore the prime numbers $p_n$ using a precomputed list of the first 10,000 primes (up to 104,729). Browse the first $N$ primes with their sum, list primes by index range, test whether a number is prime (constant-time hash lookup), or look up the $n$-th prime directly. Each non-prime input shows the nearest primes on either side as a sanity check.`,
//       href: '/algebra/calculators/prime-numbers',
//       category: 'Sequences',
//       icon: 'p',
//     },
//     {
//       at: 'end',
//       title: 'Arithmetic Sequence',
//       description: `Solve and explore arithmetic sequences $a_n = a_1 + (n-1)d$. The solver mode takes any three of $\\{a_1, d, n, a_n, S_n\\}$ and finds the fourth, with a full step-by-step walkthrough. The browse, range, and lookup modes work the same as the figurate explorers \u2014 only here the sequence is parameter-driven, so you set $a_1$ and $d$ first and the tool re-computes everything live.`,
//       href: '/algebra/calculators/arithmetic-sequence',
//       category: 'Sequences',
//       icon: '\u2192',
//     },
//     {
//       at: 'end',
//       title: 'Geometric Sequence',
//       description: `Solve and explore geometric sequences $a_n = a_1 \\cdot r^{n-1}$. The solver handles finite sums $S_n = a_1 \\dfrac{r^n - 1}{r - 1}$ and the infinite sum $S_\\infty = \\dfrac{a_1}{1 - r}$ for $|r| < 1$, flagging divergence otherwise. Set $a_1$ and $r$, then browse, list ranges, test membership, look up by index, or solve for any unknown parameter \u2014 each with its own walkthrough.`,
//       href: '/algebra/calculators/geometric-sequence',
//       category: 'Sequences',
//       icon: '\u00D7',
//     },
//   ]

//   const seoData = {
//     title: 'Algebra Calculators and Solvers | Learn Math Class',
//     description: 'Step-by-step calculators for algebra: equation solvers (linear, quadratic, polynomial, rational, radical, exponential, absolute value, literal), inequality solvers across the same families, and integer-sequence explorers (triangular, square, tetrahedral, Fibonacci, primes, arithmetic, geometric).',
//     keywords: keyWords.join(', '),
//     url: '/algebra/calculators',
//     name: 'Algebra Calculators and Solvers',
//   }

//   const schemas = {
//     collectionPage: {
//       '@context': 'https://schema.org',
//       '@type': 'CollectionPage',
//       'name': 'Algebra Calculators and Solvers',
//       'description': seoData.description,
//       'url': `https://www.learnmathclass.com${seoData.url}`,
//       'inLanguage': 'en-US',
//       'about': { '@type': 'Thing', 'name': 'Algebra Calculators' },
//       'keywords': keyWords.join(', '),
//       'author': { '@type': 'Organization', 'name': 'Learn Math Class' },
//       'publisher': { '@type': 'Organization', 'name': 'Learn Math Class' },
//       'dateModified': new Date().toISOString(),
//     },

//     breadcrumb: {
//       '@context': 'https://schema.org',
//       '@type': 'BreadcrumbList',
//       'itemListElement': [
//         { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.learnmathclass.com' },
//         { '@type': 'ListItem', 'position': 2, 'name': 'Algebra', 'item': 'https://www.learnmathclass.com/algebra' },
//         { '@type': 'ListItem', 'position': 3, 'name': 'Calculators', 'item': 'https://www.learnmathclass.com/algebra/calculators' },
//       ],
//     },
//   }

//   const pageArticle = `Algebra splits naturally into things you solve and things you explore. The equation solvers cover the full ladder \u2014 linear, quadratic, polynomial, rational, radical, exponential, absolute value, and literal \u2014 each one showing the full chain of moves: distributing, combining like terms, isolating the variable, applying the quadratic formula, handling extraneous roots from squaring or domain restrictions. The inequality solvers cover the same families with the same step-by-step transparency, plus sign-chart logic for the rational and quadratic cases, and proper interval-notation output throughout.

// The sequence explorers are a different kind of tool. Instead of a single answer, each one opens four modes onto the same underlying sequence: list the first $N$ terms, list a range, test whether a number belongs to the sequence (and if so, at what index), or look up a single term by position. The membership tests use the standard closed-form identities where they exist \u2014 $8m + 1$ being a perfect square for triangular, $5m^2 \\pm 4$ for Fibonacci, $\\sqrt{m}$ being an integer for squares \u2014 and fall back to numerical estimation and verification where they don't, as with tetrahedral numbers. Primes get a precomputed list of the first 10,000 for constant-time lookup.

// Arithmetic and geometric sequences earn a separate kind of explorer because they're parameter-driven. You set $a_1$ and $d$ (or $r$), and the same four modes recompute live, plus a solver mode that takes any three of $\\{a_1, d, n, a_n, S_n\\}$ and finds the fourth. Geometric adds finite and infinite sums, with divergence flagged for $|r| \\geq 1$.

// Every tool runs in the browser, shows its work, and explains the math in a side panel keyed to whatever mode you're in. Pick a category below.`

//   const intro = {
//     title: 'Free step-by-step algebra calculators and sequence explorers',
//     description: 'Equation and inequality solvers walk through every step \u2014 distribute, combine, isolate, factor, square, take logs, check domains \u2014 and explain why each move is legal. Sequence explorers open four modes onto the same sequence: list, range, membership test, and direct lookup, with parametric variants for arithmetic and geometric.',
//     tip: 'Each solver shows the work; each sequence explorer shows the math behind the answer in a live walkthrough.',
//   }

//   const toolsData = await buildToolIndexData('algebra/calculators')

//   return {
//     props: {
//       seoData,
//       schemas,
//       pageArticle,
//       intro,
//       toolsData,
//       customItems: sequenceItems,
//     },
//   }
// }


// export default function AlgebraCalculatorsPage({
//   seoData,
//   schemas,
//   pageArticle,
//   intro,
//   toolsData,
//   customItems,
// }) {
//   return (
//     <>
//       <Head>
//         <title>{seoData.title}</title>
//         <meta name="description" content={seoData.description} />
//         <meta name="keywords" content={seoData.keywords} />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href={`https://www.learnmathclass.com${seoData.url}`} />

//         <meta property="og:title" content={seoData.title} />
//         <meta property="og:description" content={seoData.description} />
//         <meta property="og:url" content={`https://www.learnmathclass.com${seoData.url}`} />
//         <meta property="og:type" content="website" />
//         <meta property="og:site_name" content="Learn Math Class" />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:title" content={seoData.title} />
//         <meta name="twitter:description" content={seoData.description} />

//         <meta name="robots" content="index, follow" />

//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collectionPage) }}
//         />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
//         />
//       </Head>

//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       <OperaSidebar
//         side='right'
//         sidebarWidth='45px'
//         panelWidth='200px'
//         iconColor='white'
//         panelBackgroundColor='#f2f2f2'
//       />

//       <Breadcrumb/>
//       <br/>
//       <br/>

//       <VisualToolsPage
//         tools={toolsData}
//         customItems={customItems}
//         pageTitle="Algebra Calculators and Solvers"
//         intro={intro}
//         icon="\uD83E\uDDEE"
//         dropdownLabel="All Calculators"
//         theme="deepBlue"
//         sidebar={true}
//         sidebarBrandName="Algebra"
//         sidebarBrandSub="Calculators"
//         pageArticle={pageArticle}
//       />
//     </>
//   )
// }



import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import React from 'react'
import '../../../pages/pages.css'
import Head from 'next/head'
import VisualToolsPage from '../../../app/components/page-components/visual-tools-page/VisualToolsPage'
import { buildToolIndexData } from '../../../app/components/page-components/visual-tools-page/buildToolsPageData'


export async function getStaticProps() {

  const keyWords = [
    'algebra calculators',
    'algebra solvers',
    'equation solvers',
    'inequality solvers',
    'sequence calculators',
    'triangular numbers calculator',
    'square numbers calculator',
    'tetrahedral numbers calculator',
    'fibonacci sequence calculator',
    'prime numbers calculator',
    'arithmetic sequence calculator',
    'geometric sequence calculator',
    'step by step algebra',
    'online math calculator',
    'algebra problem solver',
    'interactive algebra tools',
  ]

  // Sequence tools used to live here as customItems. They are now served by
  // pages/algebra/calculators/sequences/[view].jsx and auto-pulled by
  // buildToolIndexData \u2014 each entry in that file's SEQUENCES map carries
  // `title`, `description`, `category: 'Sequences'`, and `icon`, which is
  // everything the card grid needs. Nothing to add here for sequences.
  const customItems = []

  const seoData = {
    title: 'Algebra Calculators and Solvers | Learn Math Class',
    description: 'Step-by-step calculators for algebra: equation solvers (linear, quadratic, polynomial, rational, radical, exponential, absolute value, literal), inequality solvers across the same families, and integer-sequence explorers (triangular, square, tetrahedral, Fibonacci, primes, arithmetic, geometric).',
    keywords: keyWords.join(', '),
    url: '/algebra/calculators',
    name: 'Algebra Calculators and Solvers',
  }

  const schemas = {
    collectionPage: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Algebra Calculators and Solvers',
      'description': seoData.description,
      'url': `https://www.learnmathclass.com${seoData.url}`,
      'inLanguage': 'en-US',
      'about': { '@type': 'Thing', 'name': 'Algebra Calculators' },
      'keywords': keyWords.join(', '),
      'author': { '@type': 'Organization', 'name': 'Learn Math Class' },
      'publisher': { '@type': 'Organization', 'name': 'Learn Math Class' },
      'dateModified': new Date().toISOString(),
    },

    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Algebra', 'item': 'https://www.learnmathclass.com/algebra' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Calculators', 'item': 'https://www.learnmathclass.com/algebra/calculators' },
      ],
    },
  }

  const pageArticle = `Algebra splits naturally into things you solve and things you explore. The equation solvers cover the full ladder \u2014 linear, quadratic, polynomial, rational, radical, exponential, absolute value, and literal \u2014 each one showing the full chain of moves: distributing, combining like terms, isolating the variable, applying the quadratic formula, handling extraneous roots from squaring or domain restrictions. The inequality solvers cover the same families with the same step-by-step transparency, plus sign-chart logic for the rational and quadratic cases, and proper interval-notation output throughout.

The sequence explorers are a different kind of tool. Instead of a single answer, each one opens four modes onto the same underlying sequence: list the first $N$ terms, list a range, test whether a number belongs to the sequence (and if so, at what index), or look up a single term by position. The membership tests use the standard closed-form identities where they exist \u2014 $8m + 1$ being a perfect square for triangular, $5m^2 \\pm 4$ for Fibonacci, $\\sqrt{m}$ being an integer for squares \u2014 and fall back to numerical estimation and verification where they don't, as with tetrahedral numbers. Primes get a precomputed list of the first 10,000 for constant-time lookup.

Arithmetic and geometric sequences earn a separate kind of explorer because they're parameter-driven. You set $a_1$ and $d$ (or $r$), and the same four modes recompute live, plus a solver mode that takes any three of $\\{a_1, d, n, a_n, S_n\\}$ and finds the fourth. Geometric adds finite and infinite sums, with divergence flagged for $|r| \\geq 1$.

Every tool runs in the browser, shows its work, and explains the math in a side panel keyed to whatever mode you're in. Pick a category below.`

  const intro = {
    title: 'Free step-by-step algebra calculators and sequence explorers',
    description: 'Equation and inequality solvers walk through every step \u2014 distribute, combine, isolate, factor, square, take logs, check domains \u2014 and explain why each move is legal. Sequence explorers open four modes onto the same sequence: list, range, membership test, and direct lookup, with parametric variants for arithmetic and geometric.',
    tip: 'Each solver shows the work; each sequence explorer shows the math behind the answer in a live walkthrough.',
  }

  const toolsData = await buildToolIndexData('algebra/calculators')

  return {
    props: {
      seoData,
      schemas,
      pageArticle,
      intro,
      toolsData,
      customItems,
    },
  }
}


export default function AlgebraCalculatorsPage({
  seoData,
  schemas,
  pageArticle,
  intro,
  toolsData,
  customItems,
}) {
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collectionPage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
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

      <VisualToolsPage
        tools={toolsData}
        customItems={customItems}
        pageTitle="Algebra Calculators and Solvers"
        intro={intro}
        icon="\uD83E\uDDEE"
        dropdownLabel="All Calculators"
        theme="deepBlue"
        sidebar={true}
        sidebarBrandName="Algebra"
        sidebarBrandSub="Calculators"
        pageArticle={pageArticle}
      />
    </>
  )
}