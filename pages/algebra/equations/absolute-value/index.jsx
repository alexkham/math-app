import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "absolute value equations",
  "solving absolute value equations",
  "case splitting method",
  "absolute value definition",
  "distance on number line",
  "piecewise absolute value",
  "absolute value both sides",
  "multiple absolute value terms",
  "critical points method",
  "extraneous solutions absolute value",
  "geometric interpretation",
  "absolute value equals zero",
  "interval method",
  "absolute value examples"
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
    title: `Definition of Absolute Value`,
    content: `The absolute value of a real number $x$, written $|x|$, is defined piecewise:

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

The notation $-x$ in the second case does not mean "a negative number." It means "the opposite of $x$." When $x$ is already negative, $-x$ is positive. The absolute value function takes any input and returns a non-negative output: $|x| \\geq 0$ for every real $x$, with equality only when $x = 0$.

Geometrically, $|x|$ is the distance from $x$ to the origin on the number line. The number $-7$ sits $7$ units from zero, so $|-7| = 7$. The number $4$ sits $4$ units from zero, so $|4| = 4$. Distance is inherently non-negative, which is why absolute value never produces a negative result.

This non-negativity has an immediate consequence for equations: if $|f(x)| = k$ and $k < 0$, the equation has no solution. No expression inside absolute value bars can produce a negative output. The sign of the right-hand side is the first thing to check before any case analysis begins.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `The Basic Equation`,
    content: `The equation $|A| = B$, where $A$ is an expression and $B$ is a constant, has three possible structures depending on the sign of $B$.

When $B > 0$, the equation splits into two cases: $A = B$ or $A = -B$. Both must be solved, and both solutions (if they exist) belong to the solution set. The equation $|2x - 3| = 7$ becomes $2x - 3 = 7$ or $2x - 3 = -7$, giving $x = 5$ or $x = -2$.

When $B = 0$, the equation reduces to a single case: $A = 0$. There is no split because zero is its own opposite. The equation $|4x + 1| = 0$ gives $4x + 1 = 0$, so $x = -\\frac{1}{4}$.

When $B < 0$, no solution exists. The equation $|x + 3| = -2$ asks for a non-negative quantity to equal $-2$, which is impossible. The solution set is empty, and no algebra is needed to determine this.

Checking the sign of the right-hand side before proceeding is not a shortcut — it is the logical first step. A negative right-hand side eliminates the equation immediately, and recognizing this saves the effort of setting up cases that cannot produce valid solutions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving Equations of the Form |f(x)| = k`,
    content: `When the expression inside the absolute value is a function of $x$ rather than $x$ alone, the case-splitting method applies in the same way. The equation $|f(x)| = k$ (with $k > 0$) generates two separate equations:

$$f(x) = k \\quad \\text{and} \\quad f(x) = -k$$

Each equation is solved independently using whatever method the form of $f(x)$ requires. The union of both solution sets is the complete answer.

When $f(x)$ is linear, each case produces a [linear equation](!/algebra/equations/linear) with exactly one solution, so the original absolute value equation has exactly two solutions (assuming $k > 0$). The equation $|3x + 5| = 11$ yields $3x + 5 = 11$ (so $x = 2$) and $3x + 5 = -11$ (so $x = -\\frac{16}{3}$).

When $f(x)$ is quadratic, each case is a [quadratic equation](!/algebra/equations/quadratic) that may contribute zero, one, or two solutions. The equation $|x^2 - 4| = 5$ splits into $x^2 - 4 = 5$ and $x^2 - 4 = -5$. The first gives $x^2 = 9$, so $x = \\pm 3$. The second gives $x^2 = -1$, which has no real solutions. The complete solution set is $\\{-3, 3\\}$.

The method extends to any expression inside the absolute value. The internal structure determines how hard each case is to solve, but the case-splitting framework is always the same.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Equations with Absolute Value on Both Sides`,
    content: `When absolute value appears on both sides — $|f(x)| = |g(x)|$ — the equation asserts that two expressions are equal in magnitude, possibly differing in sign. This decomposes into two cases:

$$f(x) = g(x) \\quad \\text{or} \\quad f(x) = -g(x)$$

Each case is solved separately, and the results are combined.

The equation $|2x - 1| = |x + 4|$ produces two equations. From $2x - 1 = x + 4$: $x = 5$. From $2x - 1 = -(x + 4)$: $2x - 1 = -x - 4$, so $3x = -3$ and $x = -1$. Both candidates should be verified: $|2(5) - 1| = |9| = 9$ and $|5 + 4| = |9| = 9$, confirming $x = 5$. Similarly, $|2(-1) - 1| = |-3| = 3$ and $|-1 + 4| = |3| = 3$, confirming $x = -1$. The solution set is $\\{-1, 5\\}$.

An alternative approach uses the algebraic identity $|A| = |B|$ if and only if $A^2 = B^2$. Squaring both sides removes all absolute value bars at once, producing the equation $(2x - 1)^2 = (x + 4)^2$. Expanding and simplifying yields a polynomial equation. This method is algebraically equivalent to case-splitting but carries a risk: squaring can introduce extraneous solutions, so every candidate must be checked in the original equation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Equations with Multiple Absolute Value Terms`,
    content: `Equations containing two or more absolute value terms — such as $|x - 1| + |x + 3| = 8$ — cannot be handled by a single case split. Each absolute value expression changes its behavior at a critical point where the expression inside equals zero, and the equation must be analyzed separately on each interval defined by these critical points.

For $|x - 1| + |x + 3| = 8$, the critical points are $x = 1$ and $x = -3$. These divide the number line into three intervals: $x < -3$, $-3 \\leq x \\leq 1$, and $x > 1$. On each interval, every absolute value expression has a definite sign, so the piecewise definition removes the bars entirely.

On $x < -3$: both $x - 1 < 0$ and $x + 3 < 0$, so the equation becomes $-(x - 1) + (-(x + 3)) = 8$, which simplifies to $-2x - 2 = 8$, giving $x = -5$. Since $-5 < -3$, this value lies in the interval and is valid.

On $-3 \\leq x \\leq 1$: $x - 1 \\leq 0$ and $x + 3 \\geq 0$, so the equation becomes $-(x - 1) + (x + 3) = 8$, which simplifies to $4 = 8$. This is false, so no solution exists in this interval.

On $x > 1$: both expressions are positive, so the equation becomes $(x - 1) + (x + 3) = 8$, giving $2x + 2 = 8$ and $x = 3$. Since $3 > 1$, this is valid.

The solution set is $\\{-5, 3\\}$. The interval method is systematic: identify critical points, solve on each interval using the appropriate piecewise form, and verify that each candidate belongs to the interval where it was derived.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Absolute Value and Extraneous Solutions`,
    content: `The case-splitting method, when applied correctly, does not generate extraneous solutions. Each case defines a condition under which the absolute value expression takes a specific sign, and solving within that condition produces only valid results — provided the solution is checked against the interval constraint.

Extraneous solutions enter through a different route: squaring. The equation $|x - 2| = 3x - 4$ can be solved by case-splitting (the reliable method) or by squaring both sides to obtain $(x - 2)^2 = (3x - 4)^2$. Squaring eliminates the absolute value but is not reversible — it treats $|A| = B$ and $|A| = -B$ identically, and if $B$ takes negative values for some $x$, those values may appear as solutions to the squared equation without satisfying the original.

For this equation, case-splitting gives two cases. From $x - 2 = 3x - 4$: $x = 1$. Check: $|1 - 2| = 1$ and $3(1) - 4 = -1$. Since $1 \\neq -1$, this candidate is extraneous. From $-(x - 2) = 3x - 4$: $-x + 2 = 3x - 4$, so $x = \\frac{3}{2}$. Check: $|\\frac{3}{2} - 2| = \\frac{1}{2}$ and $3(\\frac{3}{2}) - 4 = \\frac{1}{2}$. This one holds. The only solution is $x = \\frac{3}{2}$.

The first candidate failed because the right-hand side $3x - 4$ was negative at $x = 1$. An absolute value equation $|A| = B$ requires $B \\geq 0$ at the solution point. This constraint is automatically enforced by careful case-splitting but easily missed when squaring.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Geometric Interpretation`,
    content: `Absolute value measures distance on the number line, and this interpretation converts many equations into geometric statements that can be read directly.

The equation $|x - a| = d$ asks: which points on the number line are exactly $d$ units from $a$? There are two such points, one on each side: $x = a + d$ and $x = a - d$. The solutions are symmetric about $a$, and $a$ is their midpoint. The equation $|x - 5| = 3$ has solutions $x = 8$ and $x = 2$, both exactly $3$ units from $5$.

The equation $|x - a| = |x - b|$ asks: which point is equidistant from $a$ and $b$? On the number line, exactly one point lies at equal distance from two distinct fixed points — the midpoint $x = \\frac{a + b}{2}$. The equation $|x - 1| = |x - 7|$ has the single solution $x = 4$, the midpoint of $1$ and $7$.

The equation $|x - a| + |x - b| = d$ asks: which points have the property that their total distance to $a$ and $b$ equals $d$? The minimum possible value of $|x - a| + |x - b|$ is $|a - b|$ (achieved by any $x$ between $a$ and $b$). If $d < |a - b|$, no solution exists. If $d = |a - b|$, every point in the closed interval $[a, b]$ is a solution. If $d > |a - b|$, exactly two solutions exist, one beyond each endpoint.

These geometric readings do not replace the algebraic method, but they provide a check on the number and location of solutions before any computation begins.`,
    before: ``,
    after: ``,
    link: '',
  },
};

 const introContent = {
  id: 'intro',
  title: `Distance, Cases, and the Geometry of the Number Line`,
  content: `The absolute value function strips a number of its sign, returning its distance from zero on the number line. When this function wraps around an expression containing an unknown, the resulting equation splits into cases — each case a separate equation to solve, each constrained to the interval where that case applies. Absolute value equations are not inherently difficult, but they demand a structured approach. The case-splitting method is the reliable path, and the geometric interpretation as distance often reveals the answer faster than the algebra.`,
};

const faqQuestions = {
  obj1: {
    question: "What is absolute value?",
    answer: "Absolute value |x| returns the distance from x to zero on the number line. It equals x when x ≥ 0 and -x when x < 0. The result is always non-negative, so |x| ≥ 0 for all real x.",
    sectionId: "1"
  },
  obj2: {
    question: "How do you solve |A| = B?",
    answer: "If B > 0: split into A = B or A = -B and solve both. If B = 0: solve A = 0 only. If B < 0: no solution exists — absolute value is never negative. Always check the sign of B first.",
    sectionId: "2"
  },
  obj3: {
    question: "How do you solve |f(x)| = k?",
    answer: "For k > 0, split into two equations: f(x) = k and f(x) = -k. Solve each independently using appropriate methods (linear, quadratic, etc.). The union of solutions is the complete answer.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you solve |f(x)| = |g(x)|?",
    answer: "Split into two cases: f(x) = g(x) or f(x) = -g(x). Alternatively, square both sides to get f(x)² = g(x)², but verify all candidates since squaring can introduce extraneous solutions.",
    sectionId: "4"
  },
  obj5: {
    question: "How do you solve equations with multiple absolute value terms?",
    answer: "Identify critical points where each expression inside |...| equals zero. Divide the number line into intervals, solve on each interval using the piecewise definition, and verify each solution lies in its interval.",
    sectionId: "5"
  },
  obj6: {
    question: "Why do extraneous solutions appear in absolute value equations?",
    answer: "Extraneous solutions enter through squaring, which treats |A| = B and |A| = -B identically. If B is negative at a candidate solution, that candidate is extraneous. Case-splitting avoids this when done correctly.",
    sectionId: "6"
  },
  obj7: {
    question: "What is the geometric meaning of absolute value equations?",
    answer: "|x - a| = d asks which points are exactly d units from a (answer: x = a ± d). |x - a| = |x - b| asks which point is equidistant from a and b (answer: the midpoint (a+b)/2).",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Absolute Value Equations",
    "description": "Master absolute value equations: piecewise definition, case-splitting method, equations with absolute value on both sides, multiple terms with critical points, extraneous solutions, and geometric distance interpretation.",
    "url": "https://www.learnmathclass.com/algebra/equations/absolute-value",
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
      "name": "Absolute Value Equations"
    },
    "teaches": [
      "Definition of absolute value",
      "Basic equation |A| = B structure",
      "Case-splitting method for |f(x)| = k",
      "Equations with absolute value on both sides",
      "Multiple absolute value terms and intervals",
      "Recognizing extraneous solutions",
      "Geometric interpretation as distance"
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
        "name": "Algebra",
        "item": "https://www.learnmathclass.com/algebra"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Equations",
        "item": "https://www.learnmathclass.com/algebra/equations"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Absolute Value Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/absolute-value"
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
      title: "Absolute Value Equations: Case-Splitting Method | Learn Math Class",
      description: "Master absolute value equations: piecewise definition, case-splitting method, equations with absolute value on both sides, multiple terms with critical points, extraneous solutions, and geometric distance interpretation.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/absolute-value",
      name: "Absolute Value Equations"
    },
  }
}   

}

export default function AbsoluteValueEquationsPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Equations with Absolute Value</h1>
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
