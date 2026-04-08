// import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
// import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
// import React from 'react'
// import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
// import IntroSection from '@/app/components/page-components/section/IntroContentSection'
// import Sections from '@/app/components/page-components/section/Sections'
// import { limitsDiagrams } from '@/app/api/db/diagrams/calculus/limits'
// import { basicFunctionsDiagrams } from '@/app/api/db/diagrams/functions/basics'
// import '../../../pages/pages.css'



// export async function getStaticProps(){

 
// const introContent = {
//   id: "intro",
//   title: "Introduction to Limits",
//   content: `Understanding the very concept of a limit may be most crucial and hard to grasp in the study of mathematics. Limits are deeply interconnected with several other fundamental mathematical ideas—most notably, derivatives, integrals, and continuity. 
// It is practically the basis for the definition of derivatives. Similarly, the integral, which measures accumulation or area under a curve, relies on the concept of a limit to handle infinitely small partitions. Even the definition of continuity—a basic property of functions—depends on limits.
// Beyond pure theory, limits have broad practical applications. They are essential in analyzing rates of change, understanding motion, modeling real-world phenomena, and handling infinite processes. Whether in physics, engineering, economics, or computer science, the language of limits helps express and solve problems involving change and approximation.`
// }

    
//   const sectionsContent={

//     concept:{
//       title:`Limit of a Function: Basic Concept`,
//       content:``,
//       before:`To better understand the concept of a limit, we need to revisit the basic definition of a mathematical function.
// In mathematics, a function is defined as an unambiguous rule that assigns to each input (or argument) exactly one output (or value).
// **If** $f$ **is a function, we write**:

// $f(x)$=rule for calculating the value of the function at $x$.

// The word **“unambiguous”** is used deliberately to emphasize that for each input $x$, the function $f(x)$ yields exactly one value.
// The essence of this process is that each value of $x$ is processed and mapped to some value of $f(x)$.
// Lets explore a simple function $f(x)=x+2$ :

// `,
//       after:``,
  
  
//     },
//     rules:{
//       title:`Limits Rules`,
//       link:'/calculus/limits/rules',
//       content:`Limit rules are the essential toolkit that transforms what seems like an impossible mathematical task—finding the exact behavior of functions at specific points—into a systematic, manageable process. These rules don't just provide mechanical steps; they reveal the elegant underlying structure of how functions behave, giving us confidence to tackle even the most complex expressions by breaking them down into familiar patterns.
// The [Basic Limit Laws](!/calculus/limits/rules#basic) capture the intuitive idea that limits should behave like ordinary arithmetic. When you're finding the limit of a sum, you can find the limits of the pieces separately and add them together—limits respect the fundamental operations we use every day. These laws form the grammatical foundation that makes limit calculations possible, ensuring that the limit of complex expressions can be understood through their simpler components.
// [Power and Root Limits](!/calculus/limits/rules#powers) extend this arithmetic harmony to exponential and radical expressions, showing that limits play nicely with powers and roots too. Perhaps most importantly, this category includes the direct substitution principle for polynomials and rational functions—the comforting rule that says "just plug in the number" works for most functions you'll encounter.
// [Special Theorems](!/calculus/limits/rules#special) come to the rescue when normal arithmetic fails. The Squeeze Theorem provides a clever workaround for tricky limits by trapping a difficult function between two easier ones, while composition rules help navigate the complexity of nested functions.
// [Exponential and Logarithmic Limits](!/calculus/limits/rules#exponential) establish the foundational relationships that define the most important mathematical constants and enable advanced calculus techniques. These limits don't just provide computational tools—they actually define what we mean by e, the natural logarithm, and the derivative formulas for exponential and logarithmic functions. The limit definition of e emerges naturally from compound interest problems, while the fundamental exponential and logarithmic limits serve as the building blocks for differentiation rules that appear throughout calculus and beyond.
// Finally, [Trigonometric and Exponential Limits](!/calculus/limits/rules#trigonometric) represent the fundamental building blocks of calculus itself—specific, powerful results that define essential mathematical constants and enable the derivative formulas we rely on throughout calculus.`,
//       before:``,
//       after:``,
  
//     },
  
//     notation:{
  
//       title:`Notation Used for Limits`,
//       content:``,
//       before:``,
//       after:``,
//       svg:``
  
//     },
//     obj4:{
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     },


//     obj5:{
  
//       title:``,
//       content:``,
//       before:``,
//       after:``,
  
//     }
  
//   }


//     return {
//       props:{
//         sectionsContent,
//         introContent
        
//       }
//     }
//   }


// export default function LimitsPage({sectionsContent,introContent}) {

    
//   const limitSections=[
//     {
//         id:'concept',
//         title:sectionsContent.concept.title,
//         link:'',
//         content:[
//             sectionsContent.concept.before,
//             basicFunctionsDiagrams["Linear Function with Points"].svg
//         ]
//     },

//     {
//       id:'notation',
//       title:sectionsContent.notation.title,
//       link:'',
//       content:[
//         limitsDiagrams.Notation_Breakdown.svg
//       ]
//   },
//     {
//         id:'rules',
//         title:sectionsContent.rules.title,
//         link:sectionsContent.rules.link,
//         content:sectionsContent.rules.content
//     },
  
//   //   {
//   //     id:'',
//   //     title:'',
//   //     link:'',
//   //     content:''
//   // }
// ]
//   return (
//     <>
//       {/* <GenericNavbar/> */}
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <OperaSidebar 
//                side='right'
//                // topOffset='65px' 
//                sidebarWidth='45px'
//                panelWidth='300px'
//                iconColor='white'
//                panelBackgroundColor='#f2f2f2'/>
//       <Breadcrumb/>
//       <h1 className='title' style={{marginTop:'-30px',marginBottom:'20px'}}>Limits of Functions</h1>
//       <br/>
//       <SectionTableOfContents sections={limitSections}/>
//       <br/>
//       <br/>
//       <IntroSection 
//              id={introContent.id}
//              title={introContent.title}
//              content={introContent.content}
//              backgroundColor="#f2f2f2"
//              textColor="#34383c"
//            />
//       <br/>
//       <br/>
//       <Sections sections={limitSections}/>
//       <br/>
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
import '../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "limits calculus",
  "limit of a function",
  "evaluating limits",
  "limit rules",
  "one-sided limits",
  "two-sided limits",
  "limits at infinity",
  "infinite limits",
  "squeeze theorem",
  "limit does not exist",
  "continuity",
  "special limits",
  "indeterminate forms",
  "limit notation",
  "calculus foundations"
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

  




const sectionsContent = {
  obj1: {
    title: `The Central Idea of a Limit`,
    content: `
A limit answers the question: what value does $f(x)$ approach as $x$ approaches $a$? The emphasis falls on behavior near the point, not at the point. The function value $f(a)$ might not exist, or it might differ from what the surrounding values suggest. The limit ignores $f(a)$ entirely and focuses only on the approach.

The notation

$$\\lim_{x \\to a} f(x) = L$$

states that $f(x)$ gets arbitrarily close to $L$ as $x$ gets sufficiently close to $a$. "Arbitrarily close" means closer than any positive distance you specify. "Sufficiently close" means there exists some neighborhood around $a$ where this closeness holds.

This definition captures something precise: no matter how tight a tolerance you demand around $L$, you can always find inputs near $a$ that produce outputs within that tolerance. The function values converge toward $L$ even if they never reach it.

Limits serve as the foundation for all of calculus. The derivative is defined as a limit of difference quotients. The definite integral is defined as a limit of Riemann sums. Continuity is defined by comparing limits to function values. Every major concept in calculus rests on this single idea of controlled approach.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Limits That Fail to Exist`,
    content: `
Not every limit exists. When asking what value $f(x)$ approaches as $x \\to a$, sometimes there is no single answer. Three failure modes appear repeatedly.

## Oscillation

A function may bounce between values without settling. Consider $\\sin(1/x)$ as $x \\to 0$. As $x$ shrinks, the argument $1/x$ grows without bound, and the sine oscillates between $-1$ and $1$ infinitely often. No single value $L$ captures what the function approaches.

## Unbounded Behavior

A function may grow without bound rather than approach a finite value. When

$$\\lim_{x \\to a} f(x) = \\infty$$

we say the function has an [infinite limit](!/calculus/limits/infinity), but this means the limit in the usual finite sense does not exist. The notation describes unbounded growth, not convergence to a number.

## Left and Right Disagree

A function may approach different values depending on the direction of approach. If the [left-hand limit](!/calculus/limits/one-sided) yields one value and the [right-hand limit](!/calculus/limits/one-sided) yields another, no single number works for both. The two-sided limit does not exist.

Recognizing these failure modes is as important as computing limits that do exist. The type of failure reveals information about the function's behavior.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj3: {
    title: `Two-Sided Limits`,
    content: `
The standard limit notation

$$\\lim_{x \\to a} f(x) = L$$

requires $x$ to approach $a$ from both directions simultaneously. Values less than $a$ must yield function outputs approaching $L$, and values greater than $a$ must do the same. This is the [two-sided limit](!/calculus/limits/two-sided).

The existence condition is precise: a two-sided limit exists if and only if both one-sided limits exist and are equal. If

$$\\lim_{x \\to a^-} f(x) = L \\quad \\text{and} \\quad \\lim_{x \\to a^+} f(x) = L$$

then the two-sided limit equals $L$. If the one-sided limits differ, or if either fails to exist, the two-sided limit does not exist.

This requirement unifies behavior from both directions into a single value.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/two-sided`
  },
  obj4: {
    title: `One-Sided Limits`,
    content: `
Sometimes only one direction of approach matters—or the two directions behave differently. [One-sided limits](!/calculus/limits/one-sided) isolate each direction.

The left-hand limit uses a minus superscript:

$$\\lim_{x \\to a^-} f(x)$$

Here $x$ approaches $a$ through values less than $a$ only. The right-hand limit uses a plus superscript:

$$\\lim_{x \\to a^+} f(x)$$

Here $x$ approaches $a$ through values greater than $a$ only.

One-sided limits are essential for piecewise functions, where different formulas apply on different intervals. At the boundary between pieces, the left-hand and right-hand limits may differ. They also arise naturally at domain endpoints, where only one direction of approach is possible.

The two-sided limit exists precisely when both one-sided limits exist and match.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/one-sided`
  },
  obj5: {
    title: `Limit Rules`,
    content: `
Computing limits directly from definitions is tedious. [Limit rules](!/calculus/limits/rules) provide shortcuts by breaking complex expressions into simpler pieces.

If both $\\lim_{x \\to a} f(x)$ and $\\lim_{x \\to a} g(x)$ exist, then:

$$\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)$$

$$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$$

$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)} \\quad \\text{provided } \\lim_{x \\to a} g(x) \\neq 0$$

Similar rules hold for differences, constant multiples, and powers. The critical requirement: the component limits must exist. When they don't—when you encounter indeterminate forms like $0/0$—these rules cannot be applied directly.

The [Squeeze Theorem](!/calculus/limits/rules) offers another approach. If $g(x) \\leq f(x) \\leq h(x)$ near $a$ and both $g$ and $h$ approach the same limit $L$, then $f$ must also approach $L$. The function is trapped between two bounds converging to the same value.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/rules`
  },
  obj6: {
    title: `Evaluating Limits`,
    content: `
The first technique to try is direct substitution: plug $a$ into $f(x)$ and see what happens. For polynomials, this always works. For rational functions, it works whenever the denominator is nonzero at $a$.

When substitution yields an indeterminate form—most commonly $0/0$—the expression must be transformed. [Evaluating limits](!/calculus/limits/evaluating) in these cases requires algebraic manipulation.

## Factoring

If both numerator and denominator vanish at $a$, they share a common factor of $(x - a)$. Factor it out, cancel, and substitute again:

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x + 2) = 4$$

## Rationalizing

When radicals appear, multiply by the conjugate to eliminate them. The difference of squares identity transforms the expression into one where cancellation is possible.

The goal in every case is to rewrite the expression so that direct substitution produces a determinate result.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/evaluating`
  },
  obj7: {
    title: `Special Limits`,
    content: `
Certain limits appear so frequently that memorizing them pays dividends. These [special limits](!/calculus/limits/special) cannot be evaluated by substitution—each gives an indeterminate form—but their values are well established.

The fundamental trigonometric limit:

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

This holds when $x$ is measured in radians. It underlies the derivatives of sine and cosine.

The fundamental exponential limit:

$$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$$

This defines the derivative of $e^x$ at $x = 0$.

The definition of $e$ itself emerges from a limit:

$$\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$$

These results serve as building blocks for evaluating more complex expressions.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/special`
  },
  obj8: {
    title: `Limits and Infinity`,
    content: `
Infinity enters limits in two distinct ways. [Limits at infinity](!/calculus/limits/infinity) ask what happens to $f(x)$ as $x$ grows without bound:

$$\\lim_{x \\to \\infty} f(x) \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x)$$

These describe end behavior. When such a limit equals a finite value $L$, the line $y = L$ is a horizontal asymptote.

[Infinite limits](!/calculus/limits/infinity) describe functions that grow without bound as $x$ approaches a finite value:

$$\\lim_{x \\to a} f(x) = \\infty \\quad \\text{or} \\quad \\lim_{x \\to a} f(x) = -\\infty$$

When this occurs, the line $x = a$ is a vertical asymptote.

For rational functions, dominant term analysis determines behavior at infinity. Divide numerator and denominator by the highest power of $x$ appearing in the denominator, then observe which terms vanish and which remain.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/infinity`
  },
  obj9: {
    title: `Continuity`,
    content: `
A function is [continuous](!/calculus/limits/continuity) at $x = a$ when the limit equals the function value:

$$\\lim_{x \\to a} f(x) = f(a)$$

This single equation encodes three requirements. First, $f(a)$ must be defined—the function must have a value at $a$. Second, the limit must exist—$f(x)$ must approach some definite value as $x \\to a$. Third, these two values must match.

Failure of any condition creates a discontinuity. A hole in the graph (removable discontinuity) occurs when the limit exists but differs from the function value or the function is undefined. A jump discontinuity occurs when left and right limits differ. An infinite discontinuity occurs when the function blows up.

The Intermediate Value Theorem guarantees that continuous functions on closed intervals attain every value between their endpoints. This result has profound consequences for proving that equations have solutions.
`,
    before: ``,
    after: ``,
    link: `/calculus/limits/continuity`
  }
};



const introContent = {
  id: "intro",
  title: `The Language of Approaching`,
  content: `
Calculus begins with a deceptively simple question: what value does a function approach as its input gets closer and closer to some target? The answer—a limit—captures behavior near a point without requiring the function to actually reach that point. This distinction matters. A function might have a hole at $x = 2$, yet still approach a perfectly well-defined value as $x$ moves toward 2 from either side.

Limits formalize the intuition of "getting arbitrarily close." The notation

$$\\lim_{x \\to a} f(x) = L$$

means that $f(x)$ can be made as close to $L$ as desired by taking $x$ sufficiently close to $a$. The function need not be defined at $a$, and even if it is, the value $f(a)$ plays no role in determining the limit. Only the approach matters.

This concept underpins everything that follows in calculus. Derivatives measure instantaneous rates of change through limits. Integrals accumulate quantities through limits. Continuity is defined by limits. Understanding limits thoroughly is not optional preparation—it is the foundation on which the entire subject rests.
`
};

const faqQuestions = {
  obj1: {
    question: "What is a limit in calculus?",
    answer: "A limit describes the value a function approaches as its input approaches some target value. The notation lim(x→a) f(x) = L means f(x) gets arbitrarily close to L as x gets sufficiently close to a. The function need not be defined at a itself.",
    sectionId: "1"
  },
  obj2: {
    question: "When does a limit not exist?",
    answer: "A limit fails to exist in three cases: oscillation (function bounces without settling), unbounded behavior (function grows to infinity), or disagreement between left and right approaches (one-sided limits differ).",
    sectionId: "2"
  },
  obj3: {
    question: "What is the difference between one-sided and two-sided limits?",
    answer: "A two-sided limit requires x to approach a from both directions with the same result. One-sided limits consider only one direction: left-hand (x→a⁻) or right-hand (x→a⁺). The two-sided limit exists only when both one-sided limits exist and are equal.",
    sectionId: "3"
  },
  obj4: {
    question: "What are the basic limit rules?",
    answer: "If both limits exist, you can take limits of sums, products, and quotients (when denominator limit is nonzero) by computing limits separately and combining. The Squeeze Theorem handles cases where a function is trapped between two others with the same limit.",
    sectionId: "5"
  },
  obj5: {
    question: "How do you evaluate limits with indeterminate forms?",
    answer: "When direct substitution gives 0/0, algebraic manipulation is needed. Common techniques include factoring to cancel common factors, rationalizing expressions with conjugates, and applying known special limits like sin(x)/x → 1.",
    sectionId: "6"
  },
  obj6: {
    question: "What are limits at infinity?",
    answer: "Limits at infinity describe function behavior as x grows without bound. When lim(x→∞) f(x) = L (finite), the line y = L is a horizontal asymptote. Infinite limits describe vertical asymptotes where f(x) → ±∞ as x approaches a finite value.",
    sectionId: "8"
  },
  obj7: {
    question: "How are limits related to continuity?",
    answer: "A function is continuous at x = a when lim(x→a) f(x) = f(a). This requires three things: f(a) is defined, the limit exists, and they are equal. Failure of any condition creates a discontinuity.",
    sectionId: "9"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Limits in Calculus",
    "description": "Master limits in calculus: definition, one-sided and two-sided limits, limit rules, evaluation techniques, special limits, limits at infinity, and continuity. The foundation of derivatives and integrals.",
    "url": "https://www.learnmathclass.com/calculus/limits",
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
      "name": "Limits in Calculus"
    },
    "teaches": [
      "Definition of limits",
      "One-sided and two-sided limits",
      "When limits fail to exist",
      "Limit rules and Squeeze Theorem",
      "Evaluating indeterminate forms",
      "Special trigonometric and exponential limits",
      "Limits at infinity and asymptotes",
      "Continuity and the Intermediate Value Theorem"
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
        "name": "Limits",
        "item": "https://www.learnmathclass.com/calculus/limits"
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
      title: "Limits: Definition, Rules & Evaluation Techniques | Learn Math Class",
      description: "Master limits in calculus: definition, one-sided and two-sided limits, limit rules, evaluation techniques, special limits, limits at infinity, and continuity. The foundation of derivatives and integrals.",
      keywords: keyWords.join(", "),
      url: "/calculus/limits",
      name: "Limits in Calculus"
    },
  }
}
   }
export default function LimitsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Limits in Calculus</h1>
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
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
