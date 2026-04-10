// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import '../../../pages/pages.css'


// export async function getStaticProps(){

//     const introContent = {
//         id: "intro",
//         title: "Introduction to Integrals",
//         content: `Integrals are one of the fundamental tools of calculus, closely connected to limits and derivatives. While derivatives describe change, integrals focus on accumulation—how quantities build up over time or space. These two concepts are mathematically linked yet serve opposite purposes: one breaks down change, the other sums it up.
//     Essentially, an integral calculates the overall accumulation resulting from a quantity that changes continuously. This might mean finding the area under a curve, the total distance traveled given a varying speed, or the accumulated growth of a function. To define such quantities precisely, integrals rely on limits, which allow us to handle infinite sums of infinitesimally small contributions.
//     Integrals come in different forms—definite integrals yield numerical results, while indefinite integrals represent families of functions. They obey useful properties and rules that make them powerful tools for analysis.
//     Integrals play an important role in many areas of mathematics, such as geometry, analysis, and probability. They are used to model motion, compute areas and volumes, evaluate probabilities, and study the behavior of functions. In all these contexts, integrals provide a systematic way to measure total change or accumulated quantity over an interval.`
//       }


//     const sectionsContent={

//         definition:{
//           title:`Definition of Integrals`,
//           content:``,
//           before:`Integration is inverse mathematical operation to differentiation.
//           Derivatives find rates of change while integrals reverse this process to recover original functions from their rates of change.
// **Integrals measure accumulation**—they answer "how much total change occurred?" while derivatives ask "how fast is it changing right now?"
// **Two main types:**
// - **Definite integrals** calculate actual quantities: area under curves, total distance from velocity, accumulated change over intervals
// - **Indefinite integrals** find antiderivatives: reversing differentiation
// **Core concept:** If you know the rate of change (derivative), integration recovers the original function. Like knowing velocity at every moment lets you calculate position.
// **Fundamental connection:** The Fundamental Theorem of Calculus links derivatives and integrals—they're inverse operations. This makes integration both a geometric tool (finding areas) and an algebraic tool (undoing differentiation).
// **Mathematical applications:** Finding areas between curves, solving differential equations, calculating volumes of revolution, determining arc lengths, analyzing series convergence, and optimization problems involving accumulated quantities.
// Integration transforms local information (rates, densities) into global information (totals, accumulations)—essential for understanding cumulative mathematical relationships.`,
//           after:`**Integration is the mathematical process of finding the accumulated total from a rate of change.**

// More precisely: Integration reverses differentiation by finding a function whose derivative equals the given function (indefinite integral) or by calculating the total accumulation over an interval (definite integral).

// **Core definition:** If F'(x) = f(x), then ∫f(x)dx = F(x) + C

// Integration transforms rates into totals, slopes into areas, and derivatives back into original functions.`,
      
      
//         },
//         rules:{
//           title:`Integration Rules`,
//           link:'/calculus/integrals/rules',
//           content:`Integration represents one of the most challenging yet rewarding aspects of calculus, where finding antiderivatives requires both systematic knowledge and creative problem-solving. Unlike differentiation, which follows predictable patterns, integration often feels like detective work—you need the right tools and techniques to unlock each problem's unique solution.
// The **Basic Integration Rules** provide the essential foundation, mirroring the arithmetic-friendly nature we see in limits and derivatives. These rules handle the straightforward cases where integration behaves predictably with constants, sums, and simple powers. The power rule dominates this category, offering a mechanical process for most polynomial expressions, while the special case of 1/x introduces us to the logarithmic world that appears throughout calculus.
// **Trigonometric Integrals** reveal the intricate dance between trigonometric functions and their antiderivatives. While some, like sine and cosine, integrate elegantly into each other, others like tangent and secant produce surprising logarithmic results. This category showcases how integration can transform familiar functions into unexpected forms, requiring students to memorize these essential patterns.
// **Exponential and Logarithmic Integrals** demonstrate the remarkable self-similarity of exponential functions, where e^x persists through almost any process of integration. The reciprocal function pattern here—where f'(x)/f(x) always integrates to ln|f(x)|—provides one of the most useful recognition techniques in all of calculus.
// **Inverse Trigonometric Integrals** offer elegant solutions to seemingly complex radical expressions, while **Integration Techniques** provide the strategic methods—substitution, integration by parts, and partial fractions—that transform impossible-looking integrals into manageable problems.`,
//           before:``,
//           after:``,
      
//         },
      
//         obj3:{
      
//           title:``,
//           content:``,
//           before:``,
//           after:``,
      
//         },
//         obj4:{
//           title:``,
//           content:``,
//           before:``,
//           after:``,
      
//         },
    
    
//         obj5:{
      
//           title:``,
//           content:``,
//           before:``,
//           after:``,
      
//         }
      
//       }



//     return {
//       props:{
//         sectionsContent,
//         introContent
        
//       }
//     }
//   }


// export default function IntegralsPage({sectionsContent,introContent}) {

    

  

//     const integralSections=[
//         {
//             id:'definition',
//             title:sectionsContent.definition.title,
//             link:'',
//             content:[
//               sectionsContent.definition.before,
//             ]
//         },
//         {
//             id:'rules',
//             title:sectionsContent.rules.title,
//             link:sectionsContent.rules.link,
//             content:sectionsContent.rules.content
//         },
//         // {
//         //     id:'',
//         //     title:'',
//         //     link:'',
//         //     content:''
//         // }
//     ]


//   return (
//     <>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//             side='right'
//             // topOffset='65px' 
//             sidebarWidth='45px'
//             panelWidth='200px'
//             iconColor='white'
//             panelBackgroundColor='#f2f2f2'
//           />
//       <Breadcrumb/>
//       <h1 className='title' style={{marginTop:'-30px', marginBottom:'20px'}}>Integrals</h1>
//       <br/>
//       <SectionTableOfContents sections={integralSections}/>
//       <br/>
//       <br/>
//       <IntroSection 
//             id={introContent.id}
//             title={introContent.title}
//             content={introContent.content}
//             backgroundColor="#f2f2f2"
//             textColor="#34383c"
//           />
//       <br/>
//       <br/>
//       <Sections sections={integralSections}/>
//       <br/>
//       <br/>
//        {/* <ScrollUpButton/> */} 
//     </>
//   );
// }


import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'


export async function getStaticProps(){
const keyWords = [
  "integrals calculus",
  "integration",
  "definite integral",
  "indefinite integral",
  "antiderivative",
  "fundamental theorem of calculus",
  "integration techniques",
  "integration by parts",
  "substitution method",
  "improper integrals",
  "Riemann sum",
  "area under curve",
  "integration rules",
  "integral formulas",
  "accumulation"
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

  //   const sectionsContent={

  //   obj0:{
  //     title:`Key Terms`,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj1:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  
  //   },
  //   obj2:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  
  //   obj3:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj4:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj5:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj6:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj7:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj8:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj9:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj10:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj11:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj12:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   },
  //   obj13:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },
  //   obj14:{
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  //     link:'',
  
  //   },


  //   obj15:{
  
  //     title:``,
  //     content:``,
  //     before:``,
  //     after:``,
  //     link:'',
  
  //   }
  
  // }

const sectionsContent = {
  obj1: {
    title: `The Idea of Accumulation`,
    content: `
Integration answers questions about totals. Given how fast something changes at each moment, what is the cumulative effect over an interval?

Consider velocity. If $v(t)$ gives your speed at time $t$, then the integral

$$\\int_a^b v(t)\\, dt$$

computes the total distance traveled from time $a$ to time $b$. The function $v(t)$ describes instantaneous rates; the integral accumulates those rates into a total.

This pattern appears throughout mathematics and science:

• Integrate force over distance to get work
• Integrate density over volume to get mass
• Integrate a probability density to get probability
• Integrate marginal cost to get total cost

The integral formalizes "continuous summation"—adding contributions that vary smoothly rather than in discrete chunks.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Two Types of Integrals`,
    content: `
The integral symbol carries two distinct meanings depending on context.

## Definite Integrals

$$\\int_a^b f(x)\\, dx$$

The limits $a$ and $b$ bound the region of integration. The result is a number representing accumulated quantity—area, volume, total change, or another aggregate measure.

## Indefinite Integrals

$$\\int f(x)\\, dx = F(x) + C$$

No limits appear. The result is a family of functions—all antiderivatives of $f(x)$, differing by an arbitrary constant $C$.

The same symbol serves both purposes. Context determines which interpretation applies: limits present means definite, limits absent means indefinite.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Notation and Terminology`,
    content: `
The integral notation carries specific meaning in each component.

The integral sign $\\int$ is an elongated S, standing for "sum." It originated with Leibniz, who conceived integration as summing infinitesimal pieces.

The integrand $f(x)$ is the function being integrated. It describes what is accumulated at each point.

The differential $dx$ indicates the variable of integration and represents an infinitesimal width. Together, $f(x)\\, dx$ represents an infinitesimal contribution to the total.

For definite integrals, the limits of integration $a$ and $b$ specify where accumulation begins and ends:

$$\\int_a^b f(x)\\, dx$$

The lower limit $a$ appears at the bottom of the integral sign, the upper limit $b$ at the top.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Definite Integrals`,
    content: `
The [definite integral](!/calculus/integrals/definite) computes signed area—the area between a curve and the $x$-axis, with regions below the axis counted as negative.

$$\\int_a^b f(x)\\, dx$$

Positive where $f(x) > 0$, negative where $f(x) < 0$. The integral sums these signed contributions.

Rigorously, the definite integral arises as a limit of Riemann sums. Partition the interval $[a, b]$ into subintervals, approximate the area with rectangles, and take the limit as the rectangles become infinitely thin. This construction gives precise meaning to "area under a curve."
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/definite`
  },
  obj5: {
    title: `Indefinite Integrals`,
    content: `
The [indefinite integral](!/calculus/integrals/indefinite) reverses differentiation. If $F'(x) = f(x)$, then $F$ is an antiderivative of $f$, and we write:

$$\\int f(x)\\, dx = F(x) + C$$

The constant $C$ is essential. Since the derivative of any constant is zero, infinitely many functions share the same derivative. The "$+ C$" represents this entire family.

Finding antiderivatives is the core skill of indefinite integration. Unlike differentiation, which follows systematic rules, integration often requires insight, technique, and pattern recognition.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/indefinite`
  },
  obj6: {
    title: `Integration Rules`,
    content: `
[Integration rules](!/calculus/integrals/rules) provide the algebraic structure for computing integrals.

Linearity allows integrals to be split and scaled:

$$\\int [f(x) + g(x)]\\, dx = \\int f(x)\\, dx + \\int g(x)\\, dx$$

$$\\int c \\cdot f(x)\\, dx = c \\int f(x)\\, dx$$

The Fundamental Theorem of Calculus connects definite and indefinite integrals. If $F$ is any antiderivative of $f$:

$$\\int_a^b f(x)\\, dx = F(b) - F(a)$$

This theorem transforms the problem of computing areas into the problem of finding antiderivatives—a profound simplification.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/rules`
  },
  obj7: {
    title: `Integration Techniques`,
    content: `
Not every function yields to direct antidifferentiation. [Integration techniques](!/calculus/integrals/techniques) provide methods for transforming difficult integrals into manageable ones.

**Substitution** reverses the chain rule. Identify an inner function and its derivative, change variables, and integrate.

**Integration by parts** reverses the product rule:

$$\\int u\\, dv = uv - \\int v\\, du$$

**Partial fractions** decompose rational functions into simpler pieces. **Trigonometric substitution** handles integrals involving square roots of quadratics.

Choosing the right technique is an acquired skill—pattern recognition developed through practice.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/techniques`
  },
  obj8: {
    title: `Special Integrals`,
    content: `
Certain [special integrals](!/calculus/integrals/special) appear so frequently that memorizing them accelerates all subsequent work.

$$\\int x^n\\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

$$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$

$$\\int e^x\\, dx = e^x + C$$

$$\\int \\sin x\\, dx = -\\cos x + C \\qquad \\int \\cos x\\, dx = \\sin x + C$$

$$\\int \\frac{1}{1 + x^2}\\, dx = \\arctan x + C$$

These formulas serve as building blocks. Complex integrals often reduce to combinations of these standard forms.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/special`
  },
  obj9: {
    title: `Improper Integrals`,
    content: `
Standard definite integrals require finite intervals and bounded integrands. [Improper integrals](!/calculus/integrals/improper) extend integration beyond these constraints.

Integrals over infinite intervals:

$$\\int_1^{\\infty} \\frac{1}{x^2}\\, dx = \\lim_{b \\to \\infty} \\int_1^b \\frac{1}{x^2}\\, dx = 1$$

Integrals of unbounded functions:

$$\\int_0^1 \\frac{1}{\\sqrt{x}}\\, dx = \\lim_{a \\to 0^+} \\int_a^1 \\frac{1}{\\sqrt{x}}\\, dx = 2$$

An improper integral converges if the limit exists and is finite; otherwise it diverges. The distinction matters—some infinite regions have finite area, others do not.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/improper`
  },
  obj10: {
    title: `Evaluating Integrals`,
    content: `
[Evaluating integrals](!/calculus/integrals/evaluating) combines all the preceding ideas: recognize the form, apply appropriate techniques, and verify the result.

Start with direct antidifferentiation. If the integrand matches a known form, apply the formula. If not, consider substitution, parts, or other techniques.

For definite integrals, set up the problem correctly: identify bounds, express the integrand in terms of the integration variable, and apply the Fundamental Theorem.

Verification is simple: differentiate your answer. The derivative of the antiderivative should return the original integrand. This check catches algebraic errors and sign mistakes.
`,
    before: ``,
    after: ``,
    link: `/calculus/integrals/evaluating`
  }
};

//   const introContent = {
//   id: "intro",
//   title: "",
//   content: ``
// }

const introContent = {
  id: "intro",
  title: `The Art of Accumulation`,
  content: `
Differentiation asks: given a quantity, how fast is it changing? Integration asks the reverse: given a rate of change, what is the total accumulated quantity? These two questions form the twin pillars of calculus.

The integral sign $\\int$ represents summation taken to its limit—adding infinitely many infinitely small pieces. When you integrate a velocity function, you recover distance traveled. When you integrate a density function, you recover total mass. The pattern repeats across physics, economics, and probability: rates become totals through integration.

Two distinct but related concepts share this notation. The definite integral

$$\\int_a^b f(x)\\, dx$$

computes a number—the signed area under a curve, the accumulated quantity between two bounds. The indefinite integral

$$\\int f(x)\\, dx$$

finds a function—the antiderivative whose derivative returns the original integrand. The Fundamental Theorem of Calculus reveals these as two faces of the same idea.
`
};


const faqQuestions = {
  obj1: {
    question: "What is integration in calculus?",
    answer: "Integration computes accumulated totals from rates of change. Given a velocity function, integrating yields total distance traveled. The integral formalizes continuous summation — adding infinitely many infinitesimal contributions to get a total.",
    sectionId: "1"
  },
  obj2: {
    question: "What is the difference between definite and indefinite integrals?",
    answer: "A definite integral has bounds (a to b) and produces a number representing accumulated quantity. An indefinite integral has no bounds and produces a family of functions (antiderivatives) differing by a constant C.",
    sectionId: "2"
  },
  obj3: {
    question: "What is an antiderivative?",
    answer: "An antiderivative F(x) of f(x) is a function whose derivative equals f(x). The indefinite integral finds all antiderivatives, written as F(x) + C where C is an arbitrary constant representing the infinite family of solutions.",
    sectionId: "5"
  },
  obj4: {
    question: "What is the Fundamental Theorem of Calculus?",
    answer: "The Fundamental Theorem connects definite and indefinite integrals. If F is any antiderivative of f, then the definite integral from a to b equals F(b) - F(a). This transforms area computation into finding antiderivatives.",
    sectionId: "6"
  },
  obj5: {
    question: "What are the main integration techniques?",
    answer: "Key techniques include substitution (reversing chain rule), integration by parts (reversing product rule), partial fractions (decomposing rational functions), and trigonometric substitution (for square roots of quadratics).",
    sectionId: "7"
  },
  obj6: {
    question: "What are improper integrals?",
    answer: "Improper integrals extend integration to infinite intervals or unbounded functions. They are defined as limits: the integral converges if the limit exists and is finite, diverges otherwise. Some infinite regions have finite area.",
    sectionId: "9"
  },
  obj7: {
    question: "How do you verify an integral is correct?",
    answer: "Differentiate your answer. The derivative of the antiderivative should return the original integrand. This check catches algebraic errors and sign mistakes, since differentiation is more straightforward than integration.",
    sectionId: "10"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integrals in Calculus",
    "description": "Master integrals: definite and indefinite integrals, antiderivatives, Fundamental Theorem of Calculus, integration techniques (substitution, parts, partial fractions), special integrals, and improper integrals.",
    "url": "https://www.learnmathclass.com/calculus/integrals",
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
      "name": "Integrals in Calculus"
    },
    "teaches": [
      "The concept of accumulation",
      "Definite vs indefinite integrals",
      "Integral notation and terminology",
      "Antiderivatives and the constant C",
      "Fundamental Theorem of Calculus",
      "Integration techniques",
      "Special integral formulas",
      "Improper integrals and convergence"
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
        "name": "Calculus",
        "item": "https://www.learnmathclass.com/calculus"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Integrals",
        "item": "https://www.learnmathclass.com/calculus/integrals"
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
      title: "Integrals: Definite, Indefinite & Techniques | Learn Math Class",
      description: "Master integrals: definite and indefinite integrals, antiderivatives, Fundamental Theorem of Calculus, integration techniques (substitution, parts, partial fractions), special integrals, and improper integrals.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals",
      name: "Integrals in Calculus"
    },
  }
}
   }

export default function IntegralsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Integrals</h1>
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
   <Sections sections={genericSections.slice(0)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
