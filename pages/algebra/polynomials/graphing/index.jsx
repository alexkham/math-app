import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../pages.css'
import Head from 'next/head'


export async function getStaticProps(){
const keyWords = [
  "graphing polynomials",
  "polynomial graph",
  "polynomial end behavior",
  "polynomial turning points",
  "polynomial x-intercepts",
  "polynomial y-intercept",
  "multiplicity graph behavior",
  "graph quadratic polynomial",
  "graph cubic polynomial",
  "polynomial symmetry",
  "sketch polynomial graph",
  "leading coefficient end behavior",
  "polynomial crossing touching axis",
  "how to graph polynomials",
  "polynomial graph shape"
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

    // obj1:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
  
    // },

    obj1: {
  title: `The Graph of a Polynomial`,
  content: `A polynomial $P(x)$ assigns a value $y = P(x)$ to every real number $x$. Plotting each pair $(x, y)$ produces a curve in the coordinate plane that represents the polynomial geometrically.

The defining visual property of polynomial graphs is smoothness. The curve has no breaks, no jumps, no holes, and no sharp corners. It flows continuously from left to right, bending and turning but never snapping or creating an angle. This smoothness distinguishes polynomial graphs from those of piecewise functions, absolute value expressions, or rational functions with asymptotes.

The shape of the curve is governed by the polynomial's degree and coefficients. A degree-$1$ polynomial produces a straight line. A degree-$2$ polynomial produces a parabola. Higher degrees create progressively more complex curves with more potential bends, but every polynomial graph shares the same fundamental character — smooth, continuous, and defined for all real $x$.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj2:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj2: {
  title: `Intercepts`,
  content: `A polynomial graph interacts with both axes, and each intersection carries algebraic meaning.

The y-intercept is the point where the graph crosses the vertical axis, found by evaluating $P(0)$. Since every power of $x$ vanishes at zero, $P(0)$ equals the constant term $a_0$. The polynomial $P(x) = 3x^4 - 2x^2 + 7$ has its y-intercept at $(0, 7)$, read directly from the last term.

The x-intercepts are the points where the graph crosses or touches the horizontal axis, found by solving $P(x) = 0$. These are the real [roots](!/algebra/polynomials/roots) of the polynomial, and finding them may require [factoring](!/algebra/polynomials/factoring), the [Rational Root Theorem](!/algebra/polynomials/rules), or numerical methods depending on the polynomial's complexity.

A polynomial of degree $n$ has at most $n$ x-intercepts, since it can have at most $n$ real roots. It may have fewer — some roots may be complex — and it may have none at all. The polynomial $x^2 + 1$ never touches the x-axis because its only roots, $\\pm i$, are not real numbers.`,
  before: ``,
  after: ``,
  link: '',
},
  
    // obj3:{
  
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj3: {
  title: `End Behavior`,
  content: `End behavior describes what happens to $P(x)$ as $x$ grows without bound in both directions. It is determined entirely by the leading term $a_nx^n$ — for extreme values of $x$, the highest-degree term dominates all others.

Two properties control the outcome: the degree $n$ and the sign of the leading coefficient $a_n$.

When the degree is even and $a_n > 0$, both ends of the graph rise — the curve heads upward as $x \\to +\\infty$ and as $x \\to -\\infty$. When the degree is even and $a_n < 0$, both ends fall. In either case, the two ends move in the same direction because an even power of $x$ is positive regardless of the sign of $x$.

When the degree is odd and $a_n > 0$, the left end falls while the right end rises. When the degree is odd and $a_n < 0$, the left end rises and the right end falls. Odd powers preserve the sign of $x$, so the two ends always move in opposite directions.

The polynomial $-2x^5 + 100x^4 - 3x + 7$ has odd degree and a negative leading coefficient, so its left end rises and its right end falls — regardless of how large the other coefficients are. At extreme values of $x$, the $-2x^5$ term overwhelms everything else.`,
  before: ``,
  after: ``,
  link: '',
},


    // obj4:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj4: {
  title: `Turning Points`,
  content: `A turning point is a location where the graph changes direction — shifting from increasing to decreasing or from decreasing to increasing. These correspond to local maxima and local minima of the polynomial.

The maximum number of turning points for a polynomial of degree $n$ is $n - 1$. A linear polynomial ($n = 1$) has none — it is a straight line with no change in direction. A quadratic ($n = 2$) has exactly one — the vertex of the parabola. A cubic ($n = 3$) has at most two, a quartic at most three, and so on.

The actual number of turning points may be less than the maximum. The cubic $P(x) = x^3$ has no turning points at all — it increases steadily from left to right with an inflection point at the origin but no reversal of direction. The cubic $P(x) = x^3 - 3x$ has exactly two turning points, achieving the maximum for its degree.

Knowing the upper bound on turning points serves as a reality check when sketching. If a degree-$4$ polynomial sketch shows four turning points, something is wrong — the graph has been drawn with one bend too many.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj5:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj5: {
  title: `Behavior at Roots`,
  content: `Not all x-intercepts look the same. The way a polynomial graph interacts with the x-axis at a root depends on the root's multiplicity — the number of times the corresponding factor appears in the [factorization](!/algebra/polynomials/factoring).

A root with odd multiplicity causes the graph to cross the x-axis. At multiplicity $1$, the crossing is clean — the curve passes through at an angle, much like a line. At multiplicity $3$, the curve still crosses but flattens near the axis, creating an S-shaped inflection as it passes through.

A root with even multiplicity causes the graph to touch the x-axis without crossing. At multiplicity $2$, the curve reaches the axis and turns back, resembling a parabola tangent to the x-axis. At multiplicity $4$, the same touch-and-turn occurs but with a flatter approach.

The polynomial $(x - 1)(x + 2)^2(x - 3)^3$ illustrates all three behaviors. At $x = 1$ (multiplicity $1$), the graph crosses at an angle. At $x = -2$ (multiplicity $2$), the graph touches and bounces back. At $x = 3$ (multiplicity $3$), the graph crosses with a flattened inflection. Recognizing these patterns from the factored form allows accurate sketching without plotting dozens of points.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj6:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj6: {
  title: `Symmetry`,
  content: `Some polynomials exhibit symmetry that simplifies both analysis and graphing.

An even function satisfies $P(-x) = P(x)$ for all $x$, making its graph symmetric about the y-axis. The left half is a mirror image of the right half. A polynomial is an even function when it contains only even powers of $x$ (including the constant term, which is $x^0$). The polynomial $P(x) = x^4 - 3x^2 + 2$ is even: replacing $x$ with $-x$ leaves every term unchanged.

An odd function satisfies $P(-x) = -P(x)$ for all $x$, making its graph symmetric about the origin. Rotating the graph $180°$ around the origin produces the same curve. A polynomial is an odd function when it contains only odd powers of $x$ — no constant term and no even-powered terms. The polynomial $P(x) = x^3 - 5x$ is odd: $P(-x) = -x^3 + 5x = -(x^3 - 5x) = -P(x)$.

Most polynomials have neither symmetry. The presence of both even and odd powers — as in $x^3 + x^2$ — breaks both conditions. Recognizing symmetry when it exists cuts the graphing work in half, since the behavior on one side of the axis determines the other.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj7:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

obj7: {
  title: `Graphing Linear Polynomials`,
  content: `The degree-$1$ polynomial $P(x) = ax + b$ is the only polynomial whose graph carries no curvature at all. Every point lies on a single straight line, and two points are enough to determine it completely.

The coefficient $a$ governs direction and steepness. When $a > 0$, the line climbs from left to right; when $a < 0$, it descends. Doubling $a$ doubles the steepness — each unit step in $x$ produces twice the vertical change.

Setting $x = 0$ places the graph at $(0, b)$ on the vertical axis. Setting $P(x) = 0$ and solving gives the x-intercept at $x = -\frac{b}{a}$, the single [root](!/algebra/polynomials/roots) of the polynomial. With just these two points, the entire graph is fixed.

No turning points exist because the graph never changes direction — it increases everywhere or decreases everywhere, depending on the sign of $a$. End behavior follows the same logic: as $x$ moves toward $+\infty$ or $-\infty$, the line continues without bound in the direction $a$ dictates.`,
  before: ``,
  after: ``,
  link: '',
},

    // obj8:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj8: {
  title: `Graphing Quadratic Polynomials`,
  content: `A quadratic polynomial $P(x) = ax^2 + bx + c$ produces a parabola — a U-shaped curve with a single turning point called the vertex.

The sign of $a$ controls the orientation. When $a > 0$, the parabola opens upward and the vertex is the minimum point. When $a < 0$, it opens downward and the vertex is the maximum. The magnitude of $a$ affects width: larger values of $|a|$ produce a narrower curve, smaller values a wider one.

The vertex lies at $x = -\\frac{b}{2a}$, and the corresponding $y$-value is $P\\left(-\\frac{b}{2a}\\right)$. The vertical line $x = -\\frac{b}{2a}$ is the axis of symmetry — every point on the parabola has a mirror image across this line.

The discriminant $b^2 - 4ac$ determines the number of x-intercepts. When it is positive, the parabola crosses the x-axis at two points. When it is zero, the vertex sits on the x-axis and the parabola touches it at exactly one point. When it is negative, the parabola has no real [roots](!/algebra/polynomials/roots) and floats entirely above or below the x-axis.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj9:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj9: {
  title: `Graphing Cubic Polynomials`,
  content: `A cubic polynomial $P(x) = ax^3 + bx^2 + cx + d$ produces a curve whose two ends always move in opposite directions — one rising, one falling — determined by the sign of $a$.

Unlike a parabola, a cubic is guaranteed to cross the x-axis at least once. An odd-degree polynomial must have at least one real root because its end behavior forces the curve to pass through the horizontal axis. It may cross once, twice, or three times, depending on the nature of its roots.

A cubic has at most two turning points. When both exist, the curve rises, turns, falls, turns again, and rises (or the reverse), creating an S-like profile. When no turning points exist — as with $P(x) = x^3$ — the curve increases or decreases monotonically, bending but never reversing direction.

The inflection point, where the curve changes from concave up to concave down or vice versa, is a defining feature of cubics. It occurs at $x = -\\frac{b}{3a}$ and represents the point of maximum curvature change. For $P(x) = x^3$, the inflection point is at the origin, where the curve transitions smoothly from bending one way to bending the other.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj10:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj10: {
  title: `Graphing Higher-Degree Polynomials`,
  content: `Beyond cubics, polynomial graphs grow more complex but remain governed by the same principles.

A quartic ($n = 4$) can have up to three turning points. Its ends move in the same direction — both up if $a_4 > 0$, both down if $a_4 < 0$ — because the degree is even. The graph may resemble a W shape, a U shape, or something in between, depending on how many real roots and turning points it has.

A quintic ($n = 5$) can have up to four turning points. Its ends move in opposite directions, like a cubic, but the curve between them can be far more intricate — with multiple crossings and direction changes creating a winding path from one end to the other.

The general pattern holds at every degree. A polynomial of degree $n$ has at most $n - 1$ turning points, at most $n$ x-intercepts, and end behavior dictated by whether $n$ is even or odd and whether $a_n$ is positive or negative. Even degree means both ends go the same way; odd degree means they go opposite ways.

As the degree increases, accurately sketching the graph by hand becomes harder. But the structural rules — end behavior, intercept count, turning point bound, and multiplicity behavior at roots — still provide enough information to produce a reasonable sketch without plotting every point.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj11:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj11: {
  title: `Sketching Strategy`,
  content: `A reliable sketch follows from a sequence of steps that extract the most informative features of the polynomial before any freehand drawing begins.

Start with end behavior. The degree and leading coefficient determine whether the curve rises or falls at each extreme. This frames the entire sketch — the curve must begin and end in the right directions.

Next, find the y-intercept by evaluating $P(0)$. This gives a concrete anchor point on the vertical axis.

Then find the x-intercepts by solving $P(x) = 0$. If the polynomial is in [factored form](!/algebra/polynomials/factoring), the roots and their multiplicities are immediately visible. If not, the [Rational Root Theorem](!/algebra/polynomials/rules) and synthetic division may help. At each root, note whether the graph crosses (odd multiplicity) or touches and turns (even multiplicity).

Plot the intercepts and mark the crossing or touching behavior at each x-intercept. Determine turning points if possible — for quadratics, the vertex formula gives the exact location; for higher degrees, calculus or test points between roots can help.

Finally, connect the plotted points with a smooth curve that respects end behavior, passes through or touches each x-intercept as required, and does not exceed the maximum number of turning points. The result is a sketch that captures the essential shape of the polynomial.`,
  before: ``,
  after: ``,
  link: '',
},
    // obj12:{
    //   title:``,
    //   content:``,
    //   before:``,
    //   after:``,
    //   link:'',
  
    // },

    obj12: {
  title: `Common Mistakes`,
  content: `Several errors recur when graphing polynomials, most of them stemming from misapplied rules or overlooked details.

Confusing end behavior for even and odd degrees is common. Even degree means both ends go the same direction; odd degree means they go opposite directions. Mixing these up inverts the entire shape of the graph.

Ignoring multiplicity at roots leads to incorrect crossings. A root with even multiplicity produces a touch, not a crossing. Drawing the graph straight through an x-intercept where it should bounce back — or showing a bounce where it should cross — misrepresents the polynomial's behavior.

Drawing sharp corners violates the fundamental smoothness of polynomial curves. Every polynomial graph is differentiable everywhere, meaning it has no angles, cusps, or points. Every change in direction happens through a smooth curve.

Exceeding the turning point bound creates impossible graphs. A cubic with three turning points or a quartic with four has too many direction changes for its degree. The bound of $n - 1$ is absolute.

Ignoring the leading coefficient's sign flips the entire graph. The polynomials $x^4 - 3x^2 + 1$ and $-x^4 + 3x^2 - 1$ have identical turning points and roots but completely opposite orientations — one opens upward at the extremes, the other downward.`,
  before: ``,
  after: ``,
  link: '',
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
  title: "What a Polynomial Looks Like",
  content: `Every polynomial carries a shape. Its degree, its coefficients, and its [roots](!/algebra/polynomials/roots) together determine a curve — one that can be read for information that the algebraic form alone does not immediately reveal. Where does the curve cross the axes? How many times does it change direction? What happens at the far ends?

Translating between the equation and the picture is a skill that runs both ways. The algebra predicts the geometry, and the geometry confirms the algebra. The sections that follow develop the tools for moving fluently between $P(x)$ as a formula and $P(x)$ as a curve in the coordinate plane.`
}

const faqQuestions = {
  obj1: {
    question: "What determines the end behavior of a polynomial graph?",
    answer: "End behavior is determined by the degree and leading coefficient. Even degree: both ends go the same direction (up if leading coefficient positive, down if negative). Odd degree: ends go opposite directions (right up/left down if positive, right down/left up if negative)."
  },
  obj2: {
    question: "How do you find the y-intercept of a polynomial?",
    answer: "Evaluate P(0) — substitute x = 0 into the polynomial. Since every power of x vanishes at zero, P(0) equals the constant term. For P(x) = 3x⁴ - 2x² + 7, the y-intercept is (0, 7)."
  },
  obj3: {
    question: "How do you find the x-intercepts of a polynomial?",
    answer: "Solve P(x) = 0 to find the real roots. These are the x-values where the graph crosses or touches the x-axis. Methods include factoring, the Rational Root Theorem, quadratic formula, or synthetic division depending on the polynomial's complexity."
  },
  obj4: {
    question: "How many turning points can a polynomial have?",
    answer: "A polynomial of degree n has at most n - 1 turning points. A quadratic (degree 2) has exactly 1 turning point (the vertex). A cubic (degree 3) has at most 2. A quartic (degree 4) has at most 3. The actual number may be less than the maximum."
  },
  obj5: {
    question: "How does multiplicity affect the graph at a root?",
    answer: "Odd multiplicity: the graph crosses the x-axis (multiplicity 1 crosses at an angle; multiplicity 3+ crosses with flattening). Even multiplicity: the graph touches the x-axis and turns back without crossing, like a parabola tangent to the axis."
  },
  obj6: {
    question: "What is the difference between crossing and touching the x-axis?",
    answer: "Crossing means the graph passes through the axis, changing from positive to negative values (or vice versa) — this happens at roots with odd multiplicity. Touching means the graph meets the axis and bounces back, staying on the same side — this happens at roots with even multiplicity."
  },
  obj7: {
    question: "How do you graph a quadratic polynomial?",
    answer: "Find the vertex at x = -b/(2a), determine if it opens up (a > 0) or down (a < 0), find the y-intercept at (0, c), and use the discriminant b² - 4ac to determine if there are 0, 1, or 2 x-intercepts. The axis of symmetry is x = -b/(2a)."
  },
  obj8: {
    question: "What is special about cubic polynomial graphs?",
    answer: "Cubic graphs always have opposite end behavior (one end up, one down) and must cross the x-axis at least once. They have at most 2 turning points and always have an inflection point where concavity changes, located at x = -b/(3a)."
  },
  obj9: {
    question: "What is an even function in terms of polynomials?",
    answer: "An even function satisfies P(-x) = P(x), making its graph symmetric about the y-axis. A polynomial is even when it contains only even powers of x (including the constant term x⁰). Example: P(x) = x⁴ - 3x² + 2."
  },
  obj10: {
    question: "What is an odd function in terms of polynomials?",
    answer: "An odd function satisfies P(-x) = -P(x), making its graph symmetric about the origin. A polynomial is odd when it contains only odd powers of x — no constant term, no even powers. Example: P(x) = x³ - 5x."
  },
  obj11: {
    question: "What are the steps to sketch a polynomial graph?",
    answer: "1) Determine end behavior from degree and leading coefficient. 2) Find y-intercept: P(0). 3) Find x-intercepts by solving P(x) = 0. 4) Note multiplicity behavior at each root. 5) Find turning points if possible. 6) Connect with a smooth curve respecting all constraints."
  },
  obj12: {
    question: "Why are polynomial graphs always smooth?",
    answer: "Polynomials are differentiable everywhere, meaning they have no breaks, jumps, holes, or sharp corners. The curve flows continuously, bending and turning but never creating angles or cusps. This distinguishes them from piecewise or absolute value functions."
  },
  obj13: {
    question: "How many x-intercepts can a polynomial have?",
    answer: "A polynomial of degree n has at most n x-intercepts (real roots). It may have fewer if some roots are complex or repeated. A polynomial may have no x-intercepts at all if all its roots are complex, like x² + 1."
  }
}

const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Graphing Polynomials",
    "description": "Learn to graph polynomials: end behavior, intercepts, turning points, multiplicity at roots, symmetry. Step-by-step sketching for linear, quadratic, cubic, and higher-degree polynomials.",
    "url": "https://www.learnmathclass.com/algebra/polynomials/graphing",
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
      "name": "Polynomial Graphs"
    },
    "teaches": [
      "End behavior from degree and leading coefficient",
      "Finding x-intercepts and y-intercepts",
      "Turning points and their maximum count",
      "Multiplicity behavior: crossing vs touching",
      "Even and odd function symmetry",
      "Graphing quadratic, cubic, and higher-degree polynomials",
      "Step-by-step polynomial sketching strategy"
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
        "name": "Polynomials",
        "item": "https://www.learnmathclass.com/algebra/polynomials"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Graphing",
        "item": "https://www.learnmathclass.com/algebra/polynomials/graphing"
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


//    return {
//       props:{
//          sectionsContent,
//          introContent,
//           seoData: {
//         title: "Graphing Polynomials | Learn Math Class",
//         description: "Metadescription",
//         keywords: keyWords.join(", "),
//         url: "/algebra/polynomials/graphing",
//          name: "name"
//       },
        
//        }
//     }

return {
  props:{
    sectionsContent,
    introContent,
    faqQuestions,
    schemas,
    seoData: {
      title: "Graphing Polynomials: End Behavior, Intercepts & Turning Points | Learn Math Class",
      description: "Learn to graph polynomials: end behavior, intercepts, turning points, multiplicity at roots, symmetry. Step-by-step sketching for linear, quadratic, cubic, and higher-degree polynomials.",
      keywords: keyWords.join(", "),
      url: "/algebra/polynomials/graphing",
      name: "Graphing Polynomials"
    },
  }
}
   }

// export default function GraphingPage({seoData,sectionsContent , introContent}) {

export default function GraphingPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {

    
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
   {/* <Head>
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
</Head> */}


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
   <h1 className='title' style={{marginTop:'-10px',marginBottom:'20px'}}>Graphing Polynomials</h1>
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
