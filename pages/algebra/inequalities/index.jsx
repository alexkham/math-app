import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'



export async function getStaticProps(){
const keyWords = [
  "inequalities",
  "solving inequalities",
  "inequality symbols",
  "interval notation",
  "compound inequalities",
  "sign analysis",
  "linear inequalities",
  "quadratic inequalities",
  "polynomial inequalities",
  "rational inequalities",
  "absolute value inequalities",
  "solution set",
  "number line graph inequality",
  "inequality properties"
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
  
obj0: {
  title: `Key Terms`,
  content: `
## Core Concepts
 
- [Inequality](!/algebra/definitions#inequality) — a comparison using $<$, $>$, $\\leq$, or $\\geq$; solution is typically an interval
- [Interval Notation](!/algebra/definitions#interval_notation) — parentheses for excluded endpoints, brackets for included, $\\infty$ always parenthesized
- [Compound Inequality](!/algebra/definitions#compound_inequality) — two inequalities joined by AND (intersection) or OR (union)
 
## Methods
 
- [Sign Analysis](!/algebra/definitions#sign_analysis) — partition the number line at roots and undefined points, test each interval
- [Critical Point](!/algebra/definitions#critical_point) — a value where the expression equals zero or is undefined
 
## Inequality Types
 
- [Linear Inequality](!/algebra/definitions#linear_inequality) — degree $1$, solution is a single ray
- [Quadratic Inequality](!/algebra/definitions#quadratic_inequality) — degree $2$, solved via discriminant and sign chart
- [Polynomial Inequality](!/algebra/definitions#polynomial_inequality) — degree $\\geq 3$, sign chart with multiplicity
- [Rational Inequality](!/algebra/definitions#rational_inequality) — variable in denominator, two kinds of critical points
- [Absolute Value Inequality](!/algebra/definitions#absolute_value_inequality) — converts to a compound inequality via distance interpretation`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `What an Inequality Is`,
    content: `An inequality is a mathematical statement that compares two expressions using one of four symbols. The symbol $<$ means "is strictly less than," $>$ means "is strictly greater than," $\\leq$ means "is less than or equal to," and $\\geq$ means "is greater than or equal to." The statement $3 < 7$ is an inequality that is unconditionally true. The statement $5 > 9$ is unconditionally false.

The inequalities that concern algebra contain unknowns. The statement $2x + 1 > 5$ is true for some values of $x$ and false for others. Finding all values that make it true — its solution set — is the central task.

A strict inequality ($<$ or $>$) excludes the boundary: $x > 3$ does not include $x = 3$. A non-strict (or weak) inequality ($\\leq$ or $\\geq$) includes it: $x \\geq 3$ does include $x = 3$. The distinction matters at boundary points and shows up consistently in whether endpoints are open or closed in the solution.

An [equation](!/algebra/equations) asks where two expressions are equal. An inequality asks where one dominates the other. The techniques overlap substantially, but the answer to an inequality is almost always a region rather than a point.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Solutions and Solution Sets`,
    content: `A solution to an inequality is any value of the variable that makes the statement true. The inequality $x > 3$ is satisfied by $x = 4$, by $x = 3.01$, by $x = 1000$, and by every other real number greater than $3$. Unlike most equations, which have finitely many solutions, inequalities typically have infinitely many.

The solution set collects all solutions into one object. For $x > 3$, the solution set is the entire portion of the number line to the right of $3$. For $x^2 < 9$, the solution set is all $x$ between $-3$ and $3$. These are continuous stretches, not isolated values.

Set-builder notation provides a formal way to write solution sets: $\\{x \\in \\mathbb{R} : x > 3\\}$ reads "the set of all real numbers $x$ such that $x$ is greater than $3$." This notation works for any inequality, no matter how complex the condition. In practice, interval notation (covered in the next section) is more compact and more commonly used.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Interval Notation`,
    content: `Interval notation describes subsets of the number line using endpoints and brackets. A parenthesis indicates that the endpoint is excluded, and a square bracket indicates it is included.

The open interval $(a, b)$ contains all real numbers strictly between $a$ and $b$: every $x$ with $a < x < b$. The closed interval $[a, b]$ includes the endpoints as well: every $x$ with $a \\leq x \\leq b$. Half-open intervals mix the two: $[a, b)$ includes $a$ but excludes $b$, and $(a, b]$ excludes $a$ but includes $b$.

Unbounded intervals extend to infinity in one or both directions. The interval $(a, \\infty)$ represents all $x > a$, and $(-\\infty, a]$ represents all $x \\leq a$. The symbol $\\infty$ is not a number and is never paired with a square bracket — writing $[a, \\infty]$ is meaningless because infinity cannot be reached or included. The entire real line is $(-\\infty, \\infty)$.

When a solution set consists of two or more disconnected pieces, union notation joins them. The solution to $x < -2$ or $x > 5$ is $(-\\infty, -2) \\cup (5, \\infty)$. The union symbol $\\cup$ means "together with," combining disjoint intervals into a single solution set.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Number Line Representation`,
    content: `A number line graph makes the solution set visible. The boundary points are marked, and the region where the inequality holds is shaded.

A solid dot at a boundary point signals inclusion — the point itself satisfies the inequality. This corresponds to $\\leq$ or $\\geq$ and to a square bracket in interval notation. An open dot signals exclusion — the boundary is approached but not reached. This corresponds to $<$ or $>$ and to a parenthesis.

For the inequality $x \\geq -1$, the graph shows a solid dot at $-1$ with shading extending to the right toward $\\infty$. For $-2 < x \\leq 5$, the graph shows an open dot at $-2$, a solid dot at $5$, and shading between them. For $x < -3$ or $x > 4$, two separate shaded regions appear, with open dots at $-3$ and $4$.

The number line is a direct translation of interval notation into geometry. Every interval $[a, b]$, $(a, b)$, $(-\\infty, a)$, or union of intervals has a corresponding picture, and reading the picture back produces the interval notation.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Properties of Inequalities`,
    content: `The rules for transforming inequalities parallel those for [equations](!/algebra/equations), with one critical difference.

Adding or subtracting the same quantity on both sides preserves the direction of the inequality. If $a < b$, then $a + c < b + c$ for any real number $c$. This property works identically to its equation counterpart and causes no complications.

Multiplying or dividing both sides by a positive number also preserves the direction. If $a < b$ and $c > 0$, then $ac < bc$. Again, no surprises.

Multiplying or dividing both sides by a negative number reverses the direction. If $a < b$ and $c < 0$, then $ac > bc$. The inequality flips. This is the single rule that distinguishes inequality manipulation from equation manipulation. Forgetting the flip is the most common error in inequality solving.

The reason for the reversal is arithmetic: $3 < 5$, but multiplying both sides by $-1$ gives $-3$ and $-5$, and $-3 > -5$. Negation mirrors the number line, swapping the relative positions of two values.

Transitivity provides a chain rule: if $a < b$ and $b < c$, then $a < c$. This property justifies writing compound inequalities like $1 < x < 7$ as a single chain rather than two separate statements.

Squaring both sides is unreliable because squaring is not a monotone operation — it treats positive and negative inputs differently. The inequality $-5 < 2$ is true, but $(-5)^2 = 25 > 4 = 2^2$. Squaring can reverse, preserve, or destroy an inequality depending on the signs of both sides.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Compound Inequalities`,
    content: `A compound inequality combines two inequality conditions into one statement. The two types — conjunction and disjunction — produce very different solution sets.

A conjunction (AND) requires both conditions to hold simultaneously. The compound inequality $-3 < x$ AND $x < 5$ is typically written as a chain: $-3 < x < 5$. The solution is the intersection of the two individual solution sets — the overlap. Geometrically, it is the region where both shadings coincide on the number line. For $-3 < x < 5$, the solution is the open interval $(-3, 5)$.

A disjunction (OR) requires at least one condition to hold. The compound inequality $x < -1$ OR $x > 4$ has a solution set that is the union of two rays: $(-\\infty, -1) \\cup (4, \\infty)$. Any value satisfying either condition qualifies.

Three-part chains like $2 \\leq 3x - 1 < 8$ are conjunctions in disguise. They are solved by applying operations to all three parts at once: add $1$ to get $3 \\leq 3x < 9$, then divide by $3$ to get $1 \\leq x < 3$. The solution is the half-open interval $[1, 3)$.

The distinction between AND and OR is structural, not cosmetic. AND narrows the solution set (intersection), OR expands it (union). Confusing the two changes the answer entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Equivalent Inequalities`,
    content: `Two inequalities are equivalent when they have the same solution set. The inequalities $2x > 6$ and $x > 3$ are equivalent — every value satisfying one satisfies the other. Solving an inequality means transforming it, step by step, into a simpler equivalent inequality whose solution set is transparent.

The operations that guarantee equivalence are: adding or subtracting any real number on both sides, and multiplying or dividing both sides by a positive constant. These are reversible operations that preserve both the solution set and the direction of the inequality.

Operations that risk breaking equivalence include multiplying or dividing by an expression whose sign depends on the variable. The inequality $\\frac{x}{x - 1} > 0$ cannot be cleared by multiplying both sides by $(x - 1)$ without knowing whether $x - 1$ is positive or negative — the direction of the inequality would depend on the answer. This is why sign analysis, rather than algebraic clearing, is the standard method for non-linear inequalities.

Squaring both sides is another non-equivalence-preserving operation. It may enlarge the solution set (introducing extraneous solutions) or collapse it, depending on the signs involved. Whenever a non-reversible operation is used, the result must be verified against the original inequality.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Sign Analysis`,
    content: `For inequalities involving products, quotients, or higher-degree expressions, direct algebraic isolation of the variable is either impossible or unreliable. The method that handles all these cases uniformly is sign analysis.

The idea is straightforward. Every polynomial or rational expression has a finite number of critical points — values where it equals zero or is undefined. Between consecutive critical points, the expression cannot change sign because a continuous function can only change sign by passing through zero or a discontinuity. Testing a single value in each interval determines the sign of the entire expression throughout that interval.

The sign chart organizes this process. The critical points are marked on a number line, dividing it into intervals. For each factor in the expression, the sign across every interval is recorded in a row. The final row multiplies the signs together to give the sign of the overall expression in each interval. The solution to the inequality consists of the intervals where the sign matches the one demanded.

For [polynomial inequalities](!/algebra/inequalities/polynomial), the critical points are the real roots of the polynomial. For [rational inequalities](!/algebra/inequalities/rational), they also include the values where the denominator is zero — these points are always excluded from the solution set regardless of the inequality symbol.

Root multiplicity adds a refinement. At a critical point where a factor has odd multiplicity, the sign of that factor changes as $x$ crosses the point. At even multiplicity, the sign stays the same — the expression touches zero but does not cross. Tracking multiplicity at each critical point determines whether the sign chart shows a change or a bounce at each boundary.

Endpoint inclusion is the final step. For non-strict inequalities ($\\leq$ or $\\geq$), roots of the numerator are included because the expression equals zero there and zero satisfies the condition. Denominator zeros are never included because the expression is undefined. For strict inequalities ($<$ or $>$), all critical points are excluded.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Linear Inequalities`,
    content: `A [linear inequality](!/algebra/inequalities/linear) in one variable takes the form $ax + b < 0$ (or $>$, $\\leq$, $\\geq$) with $a \\neq 0$. The solution is always a single ray — a half-line extending from one boundary point toward positive or negative infinity.

The solving procedure is identical to that of a [linear equation](!/algebra/equations/linear): isolate the variable using addition and multiplication. The only complication arises when dividing by a negative coefficient, which reverses the inequality direction. The inequality $-3x \\geq 12$ becomes $x \\leq -4$ after dividing by $-3$, not $x \\geq -4$.

Compound linear inequalities — chains like $-1 < 2x + 3 \\leq 9$ or disjunctions like $x < -5$ or $x > 2$ — are handled by solving each part and combining the results through intersection (AND) or union (OR). The boundary point in every case is the solution of the corresponding linear equation.`,
    before: ``,
    after: ``,
    link: '/algebra/inequalities/linear',
  },

  obj10: {
    title: `Quadratic Inequalities`,
    content: `A [quadratic inequality](!/algebra/inequalities/quadratic) has the form $ax^2 + bx + c > 0$ (or $<$, $\\leq$, $\\geq$) with $a \\neq 0$. The solution depends on the roots of the corresponding [quadratic equation](!/algebra/equations/quadratic) $ax^2 + bx + c = 0$ and on the sign of the leading coefficient $a$.

The discriminant $\\Delta = b^2 - 4ac$ determines the structure before any intervals are tested. When $\\Delta > 0$, two distinct real roots divide the line into three intervals. When $\\Delta = 0$, a single repeated root creates two intervals. When $\\Delta < 0$, no real roots exist and the expression keeps the same sign everywhere — the sign of $a$ alone decides whether the inequality is always true or never true.

The parabola $y = ax^2 + bx + c$ provides a geometric shortcut. The inequality $ax^2 + bx + c > 0$ asks where the parabola lies above the $x$-axis, and $ax^2 + bx + c < 0$ asks where it lies below. The opening direction (upward if $a > 0$, downward if $a < 0$) together with the root locations makes the answer visible.`,
    before: ``,
    after: ``,
    link: '/algebra/inequalities/quadratic',
  },

  obj11: {
    title: `Polynomial Inequalities`,
    content: `A [polynomial inequality](!/algebra/inequalities/polynomial) of degree three or higher — such as $x^3 - 4x > 0$ or $(x + 2)(x - 1)^2(x - 5) \\leq 0$ — is solved by the sign chart method introduced in the sign analysis section above.

The real roots of the polynomial are found first, partitioning the number line into intervals. The sign of the polynomial is determined in each interval by testing a single point or by tracking the signs of the individual factors. The intervals where the sign matches the inequality form the solution.

Root multiplicity plays a decisive role. At a root of odd multiplicity the polynomial changes sign, so the boundary separates a positive interval from a negative one. At a root of even multiplicity the polynomial keeps its sign, merely touching zero without crossing — the boundary is a tangent point rather than a crossing. This distinction determines the shape of the solution set near each root.`,
    before: ``,
    after: ``,
    link: '/algebra/inequalities/polynomial',
  },

  obj12: {
    title: `Rational Inequalities`,
    content: `A [rational inequality](!/algebra/inequalities/rational) involves at least one fraction with the variable in the denominator. The inequality $\\frac{x - 2}{x + 1} > 0$ asks where a rational expression is positive — a question that the sign chart answers directly.

The critical points include both the zeros of the numerator (where the expression equals zero) and the zeros of the denominator (where the expression is undefined). Both types appear on the sign chart and create intervals for testing, but they are treated differently at the endpoint step: numerator zeros may be included in the solution for non-strict inequalities, while denominator zeros are always excluded because the expression does not exist there.

A common and dangerous shortcut is cross-multiplying to clear the denominator. Because the denominator changes sign across the number line, the direction of the inequality would need to flip in some intervals but not others — making a single multiplication invalid. The sign chart avoids this entirely by analyzing the factored form directly, never multiplying through.`,
    before: ``,
    after: ``,
    link: '/algebra/inequalities/rational',
  },

  obj13: {
    title: `Absolute Value Inequalities`,
    content: `An [absolute value inequality](!/algebra/inequalities/absolute-value) translates into a compound inequality through two standard conversions, one for each direction.

The "less than" form $|f(x)| < k$ (with $k > 0$) says that $f(x)$ lies within $k$ units of zero. This converts to the conjunction $-k < f(x) < k$, a bounded compound inequality whose solution is an interval. The inequality $|2x - 3| < 5$ becomes $-5 < 2x - 3 < 5$, which solves to $-1 < x < 4$.

The "greater than" form $|f(x)| > k$ says that $f(x)$ lies more than $k$ units from zero. This converts to the disjunction $f(x) < -k$ or $f(x) > k$, producing two rays as the solution. The inequality $|x + 1| \\geq 4$ becomes $x + 1 \\leq -4$ or $x + 1 \\geq 4$, giving $x \\leq -5$ or $x \\geq 3$.

The geometric reading — absolute value as distance on the number line — provides immediate intuition. The inequality $|x - a| < d$ describes all points within distance $d$ of $a$, forming the interval $(a - d, a + d)$. The inequality $|x - a| > d$ describes all points farther than $d$ from $a$, forming two rays.`,
    before: ``,
    after: ``,
    link: '/algebra/inequalities/absolute-value',
  },

  obj14: {
    title: `Inequalities Beyond Algebra`,
    content: `Inequalities appear throughout mathematics, and several types fall outside the purely algebraic family because they involve transcendental functions.

[Exponential inequalities](!/algebra/powers/exponential-inequalities) contain the variable in the exponent. The inequality $2^x > 8$ asks where an exponential function exceeds a threshold. When the base exceeds $1$, the exponential is increasing, so the inequality direction is preserved when converting to the exponent: $2^x > 2^3$ gives $x > 3$. When the base is between $0$ and $1$, the function is decreasing and the direction reverses.

[Logarithmic inequalities](!/algebra/logarithms/inequalities) contain the variable inside a logarithm. The inequality $\\log_2(x - 1) < 3$ converts to $x - 1 < 2^3$ when the base exceeds $1$, but domain restrictions must be enforced: the argument of the logarithm must be positive, adding the constraint $x > 1$.

**Trigonometric inequalities** involve the variable inside trigonometric functions. The periodicity of sine, cosine, and tangent typically produces infinitely many disjoint solution intervals, one per period. These are treated in the trigonometry section.`,
    before: ``,
    after: ``,
    link: '',
  },
};
 

const introContent = {
  id: 'intro',
  title: `When Equality Is Not the Question`,
  content: `An inequality makes a comparison rather than asserting sameness. Where an equation asks at which values two expressions coincide, an inequality asks where one expression exceeds or falls short of the other. The answer is almost never a single number — it is typically an entire interval or a union of intervals, a continuous stretch of the number line rather than an isolated point. The rules for manipulating inequalities resemble those for equations, with one decisive exception: multiplying or dividing by a negative number reverses the direction of the comparison. That single rule, together with the method of sign analysis for non-linear cases, governs everything on this page and the pages that follow.`,
};



const faqQuestions = {
  obj1: {
    question: "What is an inequality?",
    answer: "An inequality compares two expressions using <, >, ≤, or ≥. Unlike equations that ask where expressions are equal, inequalities ask where one dominates the other. Solutions are typically intervals rather than isolated points.",
    sectionId: "1"
  },
  obj2: {
    question: "What is a solution set for an inequality?",
    answer: "A solution set contains all values that make the inequality true. For x > 3, it's every real number greater than 3 — infinitely many values forming a continuous region on the number line, written in interval notation as (3, ∞).",
    sectionId: "2"
  },
  obj3: {
    question: "How does interval notation work?",
    answer: "Parentheses ( ) exclude endpoints, brackets [ ] include them. (a, b) means a < x < b; [a, b] means a ≤ x ≤ b. Infinity always uses parentheses since it can't be reached. Union ∪ joins disconnected pieces.",
    sectionId: "3"
  },
  obj5: {
    question: "Why do you flip the inequality when multiplying by a negative?",
    answer: "Negation mirrors the number line, reversing positions. Since 3 < 5, but -3 > -5, multiplying both sides by a negative reverses the order. This is the key rule distinguishing inequality manipulation from equation manipulation.",
    sectionId: "5"
  },
  obj6: {
    question: "What is a compound inequality?",
    answer: "A compound inequality combines two conditions. AND (conjunction) requires both: -3 < x < 5 is an intersection. OR (disjunction) requires at least one: x < -1 or x > 4 is a union. AND narrows solutions; OR expands them.",
    sectionId: "6"
  },
  obj8: {
    question: "What is sign analysis for inequalities?",
    answer: "Sign analysis finds where an expression is positive or negative. Mark critical points (zeros and undefined values), test one value per interval, record signs in a chart. The solution consists of intervals matching the required sign.",
    sectionId: "8"
  },
  obj10: {
    question: "How do you solve a quadratic inequality?",
    answer: "Find roots of the corresponding equation ax² + bx + c = 0 to locate critical points. The discriminant determines structure. Use sign analysis or visualize the parabola: above x-axis where > 0, below where < 0.",
    sectionId: "10"
  },
  obj12: {
    question: "Why can't you cross-multiply rational inequalities?",
    answer: "The denominator changes sign across intervals. Cross-multiplying would require flipping the inequality in some regions but not others. Sign analysis avoids this by analyzing the factored form directly without clearing denominators.",
    sectionId: "12"
  },
  obj13: {
    question: "How do you solve absolute value inequalities?",
    answer: "|f(x)| < k becomes -k < f(x) < k (conjunction, one interval). |f(x)| > k becomes f(x) < -k or f(x) > k (disjunction, two rays). Geometrically: < k means within distance k of zero; > k means farther than k from zero.",
    sectionId: "13"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Inequalities in Algebra",
    "description": "Master solving inequalities: interval notation, sign analysis, compound inequalities, and methods for linear, quadratic, polynomial, rational, and absolute value inequalities with number line graphs.",
    "url": "https://www.learnmathclass.com/algebra/inequalities",
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
      "name": "Inequalities"
    },
    "teaches": [
      "Inequality symbols and solution sets",
      "Interval notation and number line graphs",
      "Properties of inequalities including sign reversal",
      "Compound inequalities (AND/OR)",
      "Sign analysis method",
      "Linear, quadratic, polynomial, rational, and absolute value inequalities"
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
        "name": "Inequalities",
        "item": "https://www.learnmathclass.com/algebra/inequalities"
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
      title: "Inequalities: Solving, Graphing & Interval Notation | Learn Math Class",
      description: "Master solving inequalities: interval notation, sign analysis, compound inequalities, and methods for linear, quadratic, polynomial, rational, and absolute value inequalities with number line graphs.",
      keywords: keyWords.join(", "),
      url: "/algebra/inequalities",
      name: "Inequalities in Algebra"
    },
  }
}
   }

export default function InequalitiesPage({seoData, sectionsContent, introContent, faqQuestions, schemas}) {
    
  const genericSections=[
      {
        id:'0',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
          sectionsContent.obj0.after,
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
    {
        id:'13',
        title:sectionsContent.obj13.title,
        link:sectionsContent.obj13.link,
        content:[
          sectionsContent.obj13.content,
        ]
    },
    {
        id:'14',
        title:sectionsContent.obj14.title,
        link:sectionsContent.obj14.link,
        content:[
          sectionsContent.obj14.content,
        ]
    },
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
   <h1 className='title' style={{marginTop:'-50px',marginBottom:'0px'}}>Inequalities</h1>
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
