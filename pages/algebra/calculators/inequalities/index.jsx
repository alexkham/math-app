// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import Head from 'next/head'
// import '@/pages/pages.css'
// import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


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

//     obj0:{
//       title:`Key Terms`,
//       content:``,
//       before:``,
//       after:``,
//       link:'',
  
  
//     },
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
//         title: "Title | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/url",
//          name: "name"
//       },
        
//        }
//     }
//    }

// export default function PageTemplate({seoData,sectionsContent , introContent}) {

    
//   const genericSections=[
//     {
//         id:'0',
//         title:sectionsContent.obj0.title,
//         link:sectionsContent.obj0.link,
//         content:[
//           sectionsContent.obj0.content,
//         ]
//     },
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
//    <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Page Title</h1>
//    <br/>
//    <br/>
//    <SectionTableOfContents sections={genericSections}
//     showSecondaryNav={true}
//          secondaryNavMode="siblings"  // or "children"
//          secondaryNavTitle="More in this Section"
   
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
//     <KeyTermsCard
//      id="0"
//      title={sectionsContent.obj0.title}
//      content={sectionsContent.obj0.content}
//      after={sectionsContent.obj0.after}
//      variant="light"
//    />
//    <br/>
//    <Sections sections={genericSections.slice(1)}/>
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
import ViewDynamicPage from '@/app/components/page-components/view-page/ViewDynamicPage'


export async function getStaticProps(){

  const keyWords=[
    'free calculator',
    'free calculator online',
    'free online calculator',
    'free math calculator',
    'free math solver',
    'free step by step math',
    'free algebra calculator',
    'free inequality solver',
    'free inequality calculator',
    'inequality solver',
    'algebra inequality calculator',
    'linear inequality solver',
    'quadratic inequality solver',
    'rational inequality solver',
    'radical inequality solver',
    'exponential inequality solver',
    'absolute value inequality solver',
    'step by step inequality solver',
    'interval notation calculator',
    'sign chart calculator'
  ]

  const sectionsContent = {
    obj0:{ title:`Key Terms`, content:``, before:``, after:``, link:'' },
    obj1:{ title:``, content:``, before:``, after:``, link:'' },
    obj2:{ title:``, content:``, before:``, after:``, link:'' },
    obj3:{ title:``, content:``, before:``, after:``, link:'' },
    obj4:{ title:``, content:``, before:``, after:``, link:'' },
    obj5:{ title:``, content:``, before:``, after:``, link:'' },
    obj6:{ title:``, content:``, before:``, after:``, link:'' },
    obj7:{ title:``, content:``, before:``, after:``, link:'' },
    obj8:{ title:``, content:``, before:``, after:``, link:'' },
    obj9:{ title:``, content:``, before:``, after:``, link:'' },
    obj10:{ title:``, content:``, before:``, after:``, link:'' },
    obj11:{ title:``, content:``, before:``, after:``, link:'' },
    obj12:{ title:``, content:``, before:``, after:``, link:'' },
    obj13:{ title:``, content:``, before:``, after:``, link:'' },
    obj14:{ title:``, content:``, before:``, after:``, link:'' },
    obj15:{ title:``, content:``, before:``, after:``, link:'' },
  }

  const introContent = `**Free step-by-step solvers for six families of algebraic inequalities.** Each tool walks through the full reasoning, handles sign-chart logic, and reports the final answer in interval notation. Pick a family below to open its solver.`

  const cards = [
    {
      slug: 'linear',
      label: 'Linear',
      shortNav: 'Linear inequalities',
      title: 'Linear Inequality Solver',
      formula: `$$ax + b \\;{<}\\;{>}\\;{\\leq}\\;{\\geq}\\; cx + d$$`,
      blurb: `A **linear inequality** is the inequality version of a linear equation — same first-power $x$, but with $<$, $>$, $\\leq$, or $\\geq$ in place of $=$. The solver isolates $x$ exactly the way it would for a linear equation, with one extra rule: **multiplying or dividing both sides by a negative number flips the inequality direction**, and the solver tracks every flip explicitly. Once $x$ is isolated, the answer is reported in interval notation, with parentheses for strict inequalities ($<$, $>$) and brackets for non-strict ($\\leq$, $\\geq$). Identities (every real number satisfies it, e.g. $0 < 1$) and contradictions (no real number satisfies it, e.g. $0 > 1$) are handled as named cases.`,
      href: '/algebra/calculators/inequalities/linear'
    },
    {
      slug: 'quadratic',
      label: 'Quadratic',
      shortNav: 'Quadratic inequalities',
      title: 'Quadratic Inequality Solver',
      formula: `$$ax^2 + bx + c \\;{<}\\;{>}\\;{\\leq}\\;{\\geq}\\; 0$$`,
      blurb: `A **quadratic inequality** asks where a parabola sits above or below the $x$-axis. The solver first finds the roots of the corresponding equation $ax^2 + bx + c = 0$ using the discriminant and the quadratic formula. The roots split the number line into intervals; the solver tests one point in each interval to determine the sign of the quadratic there, then selects the intervals matching the inequality direction. The parabola's opening direction (up if $a > 0$, down if $a < 0$) is taken into account. Edge cases — repeated roots, no real roots — are handled by inspecting whether the parabola ever crosses zero.`,
      href: '/algebra/calculators/inequalities/quadratic'
    },
    {
      slug: 'rational',
      label: 'Rational',
      shortNav: 'Rational inequalities',
      title: 'Rational Inequality Solver',
      formula: `$$\\dfrac{P(x)}{Q(x)} \\;{<}\\;{>}\\;{\\leq}\\;{\\geq}\\; 0$$`,
      blurb: `A **rational inequality** is one comparing a fraction $\\dfrac{P(x)}{Q(x)}$ to zero (or to another expression, which can be moved to one side). The standard mistake is multiplying both sides by the denominator — which is invalid here, because the sign of $Q(x)$ may flip between intervals. The solver instead uses a **sign chart**: it combines everything into a single fraction, finds every **critical point** (zeros of both numerator and denominator), tests one point in each resulting interval to record the sign, and selects the intervals matching the inequality. Numerator zeros are included for $\\leq$/$\\geq$; denominator zeros are always excluded (they make the fraction undefined). The final answer is given in interval notation, with the union symbol $\\cup$ for disjoint intervals.`,
      href: '/algebra/calculators/inequalities/rational'
    },
    {
      slug: 'radical',
      label: 'Radical',
      shortNav: 'Radical inequalities',
      title: 'Radical Inequality Solver',
      formula: `$$\\sqrt[n]{P(x)} \\;{<}\\;{>}\\;{\\leq}\\;{\\geq}\\; \\dots$$`,
      blurb: `A **radical inequality** is one where the variable sits under a square root, cube root, or higher root. Two domain facts shape the solution. First, even-index radicals like $\\sqrt{P(x)}$ are only defined when $P(x) \\geq 0$, so the **domain restriction** must be solved alongside the inequality itself. Second, $\\sqrt{\\,}$ is always non-negative, so an inequality like $\\sqrt{P(x)} < c$ with $c \\leq 0$ has no solution at all. The solver isolates the radical, raises both sides to the appropriate power to remove it, solves the resulting inequality, and intersects the result with the domain. Odd-index roots (cube root, etc.) skip the non-negativity restriction since they're defined for every real input.`,
      href: '/algebra/calculators/inequalities/radical'
    },
    {
      slug: 'exponential',
      label: 'Exponential',
      shortNav: 'Exponential inequalities',
      title: 'Exponential Inequality Solver',
      formula: `$$a \\cdot b^{f(x)} \\;{<}\\;{>}\\;{\\leq}\\;{\\geq}\\; c$$`,
      blurb: `An **exponential inequality** has the variable in an exponent. The key fact is that $b^x$ is always strictly positive — so an inequality like $b^{f(x)} < 0$ has no solution and one like $b^{f(x)} > 0$ holds for every real $x$. After isolating the exponential term, the solver applies a logarithm to both sides. **The base controls the direction**: when $b > 1$ the function is increasing and the inequality direction is preserved; when $0 < b < 1$ the function is decreasing and the direction must flip. The solver tracks this and reports the final inequality in interval notation.`,
      href: '/algebra/calculators/inequalities/exponential'
    },
    {
      slug: 'absolute-value',
      label: 'Absolute Value',
      shortNav: 'Absolute value inequalities',
      title: 'Absolute Value Inequality Solver',
      formula: `$$|ax + b| \\;{<}\\;{>}\\;{\\leq}\\;{\\geq}\\; c$$`,
      blurb: `An **absolute value inequality** splits into one of two structurally different forms after isolating the absolute value term. **Less-than form** $|A| < c$ becomes a **compound inequality** $-c < A < c$ (the inside is sandwiched between $-c$ and $c$) — a single connected interval. **Greater-than form** $|A| > c$ becomes a **union** $A < -c$ or $A > c$ — two separate intervals stretching to $\\pm\\infty$. The solver also handles the trivial cases up front: $|A| < 0$ has no solution, $|A| > 0$ holds everywhere except where $A = 0$, $|A| \\leq 0$ has the single solution where $A = 0$, and $|A| \\geq 0$ holds for all real $x$. Final answers always come back in interval notation.`,
      href: '/algebra/calculators/inequalities/absolute-value'
    },
    {
  slug: 'logarithmic',
  label: 'Logarithmic',
  shortNav: 'Logarithmic inequalities',
  title: 'Logarithmic Inequality Solver',
  formula: `$$\\log_b(P(x)) \\;{<}\\;{>}\\;{\\leq}\\;{\\geq}\\; c$$`,
  blurb: `A **logarithmic inequality** has the variable inside a logarithm. Two facts shape the solution. First, $\\log_b(x)$ is only defined for $x > 0$, so the **domain** of every log argument must be solved alongside the inequality and intersected with the result. Second, **the base controls the direction**: when $b > 1$ the log is increasing and the inequality direction is preserved when removing the log; when $0 < b < 1$ the log is decreasing and the direction must flip. The solver isolates the log, converts to exponential form using $\\log_b(A) \\lessgtr c \\iff A \\lessgtr b^c$ (with the direction adjusted for the base), solves the resulting algebraic inequality, and intersects with the domain restrictions. The equal-logs case $\\log_b(A) \\lessgtr \\log_b(B)$ reduces directly to $A \\lessgtr B$ (direction-adjusted) plus domain checks.`,
  href: '/algebra/calculators/inequalities/logarithmic'
},
  ]

  return {
    props:{
      sectionsContent,
      introContent,
      cards,
      seoData: {
        title: "Free Algebra Inequality Solvers - Step by Step | Learn Math Class",
        description: "Free, step-by-step inequality solvers for the standard algebra families: linear, quadratic, rational, radical, exponential, and absolute value inequalities. All tools are free with no signup required.",
        keywords: keyWords.join(", "),
        url: "/algebra/calculators/inequalities",
        name: "Algebra Inequality Solvers"
      },
    }
  }
}

export default function AlgebraInequalitiesLanding({ seoData, sectionsContent, introContent, cards }) {

  const genericSections = [
    { id:'0',  title:sectionsContent.obj0.title,  link:sectionsContent.obj0.link,  content:[sectionsContent.obj0.content] },
    { id:'1',  title:sectionsContent.obj1.title,  link:sectionsContent.obj1.link,  content:[sectionsContent.obj1.content] },
    { id:'2',  title:sectionsContent.obj2.title,  link:sectionsContent.obj2.link,  content:[sectionsContent.obj2.content] },
    { id:'3',  title:sectionsContent.obj3.title,  link:sectionsContent.obj3.link,  content:[sectionsContent.obj3.content] },
    { id:'4',  title:sectionsContent.obj4.title,  link:sectionsContent.obj4.link,  content:[sectionsContent.obj4.content] },
    { id:'5',  title:sectionsContent.obj5.title,  link:sectionsContent.obj5.link,  content:[sectionsContent.obj5.content] },
    { id:'6',  title:sectionsContent.obj6.title,  link:sectionsContent.obj6.link,  content:[sectionsContent.obj6.content] },
    { id:'7',  title:sectionsContent.obj7.title,  link:sectionsContent.obj7.link,  content:[sectionsContent.obj7.content] },
    { id:'8',  title:sectionsContent.obj8.title,  link:sectionsContent.obj8.link,  content:[sectionsContent.obj8.content] },
    { id:'9',  title:sectionsContent.obj9.title,  link:sectionsContent.obj9.link,  content:[sectionsContent.obj9.content] },
    { id:'10', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[sectionsContent.obj10.content] },
    { id:'11', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[sectionsContent.obj11.content] },
    { id:'12', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[sectionsContent.obj12.content] },
    { id:'13', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[sectionsContent.obj13.content] },
    { id:'14', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[sectionsContent.obj14.content] },
    { id:'15', title:sectionsContent.obj15.title, link:sectionsContent.obj15.link, content:[sectionsContent.obj15.content] },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Algebra Inequality Solvers</h1>
   <br/>

   <ViewDynamicPage
     cards={cards}
     introContent={introContent}
     countNoun="solvers"
   />

   {/* <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"

   /> */}
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
   {/* <Sections sections={genericSections.slice(1)}/> */}
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}