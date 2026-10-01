
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import FAQSection from '@/app/components/page-components/faq-component/FAQSection'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import equationVisualizerDiagrams from '@/app/components/algebra/equations/visualizer/equationVisualizerDiagrams'


export async function getStaticProps(){
const keyWords = [
  "linear equations",
  "solving linear equations",
  "first degree equations",
  "ax + b = 0",
  "properties of equality",
  "multi-step equations",
  "equations with fractions",
  "equations with decimals",
  "equations with parentheses",
  "literal equations",
  "identity equation",
  "contradiction equation",
  "clearing fractions",
  "isolate the variable"
]

const linkStyle = 'color: inherit; text-decoration: underline;'


// ---------- TABLES ----------

// obj2 — aggregation (reference): properties of equality
const obj2Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Property</th>
      <th style="${tableHeaders.aggregation}">Operation</th>
      <th style="${tableHeaders.aggregation}">Note</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Addition</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">add or subtract the same quantity on both sides</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">preserves the solution set</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Multiplication</td>
      <td style="padding: 12px 15px; color: #34495e;">multiply or divide both sides by a nonzero constant</td>
      <td style="padding: 12px 15px; color: #34495e;">multiplier ≠ 0 essential — multiplying by 0 destroys the equation</td>
    </tr>
  </tbody>
</table>
`


// obj3 — aggregation (process): multi-step solving procedure
const obj3Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation} text-align: center;">Step</th>
      <th style="${tableHeaders.aggregation}">Action</th>
      <th style="${tableHeaders.aggregation}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">clear parentheses (distribute)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3(x − 2) → 3x − 6</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">2</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">clear fractions or decimals (multiply by LCD or power of 10)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x/3 + 1 = 5 → ×3 → x + 3 = 15</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">3</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">gather variable terms on one side</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4x − 7 = 2x + 11 → 2x − 7 = 11</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a; text-align: center;">4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">gather constants on the other side</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2x − 7 = 11 → 2x = 18</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a; text-align: center;">5</td>
      <td style="padding: 12px 15px; color: #34495e;">isolate the variable</td>
      <td style="padding: 12px 15px; color: #34495e;">2x = 18 → x = 9</td>
    </tr>
  </tbody>
</table>
`


// obj7 — comparison: conditional / identity / contradiction
const obj7Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.comparison}">Outcome</th>
      <th style="${tableHeaders.comparison}">When it occurs</th>
      <th style="${tableHeaders.comparison}">Solution set</th>
      <th style="${tableHeaders.comparison}">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/definitions#conditional_equation" style="${linkStyle}">Conditional</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a ≠ 0 after simplification</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">one value: x = −b/a</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2x = 18 → x = 9</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;"><a href="/algebra/definitions#identity" style="${linkStyle}">Identity</a></td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">variable terms cancel, true constant remains</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">all real numbers</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">2(x + 3) = 2x + 6 → 6 = 6</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;"><a href="/algebra/definitions#contradiction" style="${linkStyle}">Contradiction</a></td>
      <td style="padding: 12px 15px; color: #34495e;">variable terms cancel, false constant remains</td>
      <td style="padding: 12px 15px; color: #34495e;">empty</td>
      <td style="padding: 12px 15px; color: #34495e;">3(x + 1) = 3x + 8 → 3 = 8</td>
    </tr>
  </tbody>
</table>
`


// obj9 — summary: capstone of equation form variations
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Form</th>
      <th style="${tableHeaders.summary}">Example</th>
      <th style="${tableHeaders.summary}">Preparation step</th>
      <th style="${tableHeaders.summary}">Then solve as</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Single-step</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x − 9 = 4</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">apply one property of equality</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Multi-step</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">4x − 7 = 2x + 11</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">none (already simplified)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">gather, then isolate</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">With parentheses</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">3(2x − 5) = 4x + 1</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">distribute</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multi-step</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">With fractions</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x/3 + (x−2)/4 = 5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply every term by the LCD</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multi-step</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">With decimals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">0.3x + 1.25 = 0.8x − 0.5</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multiply by 10ⁿ to clear decimals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">multi-step</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Literal</td>
      <td style="padding: 12px 15px; color: #34495e;">A = P(1 + rt), solve for r</td>
      <td style="padding: 12px 15px; color: #34495e;">treat other letters as constants</td>
      <td style="padding: 12px 15px; color: #34495e;">multi-step</td>
    </tr>
  </tbody>
</table>
`


// ---------- SECTIONS ----------

const sectionsContent = {

obj0: {
  title: `Key Terms`,
  content: `
## Equation Basics

- [Equation](!/algebra/definitions#equation) — a statement that two expressions are equal
- [Solution](!/algebra/definitions#solution) — the value of the variable that makes both sides equal
- [Variable](!/algebra/definitions#variable) — the unknown quantity being solved for

## Classification

- [Degree of an Equation](!/algebra/definitions#degree_of_an_equation) — linear equations have degree $1$
- [Standard Form](!/algebra/definitions#standard_form) — $ax + b = 0$
- [Coefficient](!/algebra/definitions#coefficient) — the numerical factor $a$ multiplying the variable
- [Conditional Equation](!/algebra/definitions#conditional_equation) — has exactly one solution when $a \\neq 0$
- [Identity](!/algebra/definitions#identity) — arises when variable terms cancel leaving a true statement
- [Contradiction](!/algebra/definitions#contradiction) — arises when variable terms cancel leaving a false statement
- [Equivalent Equations](!/algebra/definitions#equivalent_equations) — solving produces a chain of equivalent equations`,
  before: ``,
  after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Algebra Definitions](!/algebra/definitions) →@`,
  link: '',
},
  obj1: {
    title: `Definition and Standard Form`,
    content: `A linear equation in one variable is any equation that can be written as

$$ax + b = 0$$

where $a$ and $b$ are real constants and $a \\neq 0$. The variable $x$ appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. The word "linear" reflects the geometric fact that the graph of $y = ax + b$ is a straight line, and the solution of $ax + b = 0$ is the point where that line crosses the horizontal axis.

Not every linear equation arrives in standard form. The equation $3x - 7 = 2x + 5$ is linear because, after collecting terms, it reduces to $x - 12 = 0$. The equation $\\frac{x}{4} + 1 = 3$ is also linear — the fraction involves only a numerical denominator, not a variable one. Recognition matters: any equation where the variable appears solely to the first power, with no products or compositions involving the variable, is linear regardless of how it is initially presented.

The solution is immediate from standard form. Subtracting $b$ and dividing by $a$ gives $x = -\\frac{b}{a}$. This single value is the only solution, and it always exists when $a \\neq 0$. Linear equations never produce two solutions, infinitely many solutions, or no solutions — as long as the coefficient of $x$ is genuinely nonzero.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Properties of Equality`,
    content: `Solving a linear equation means transforming it into an equivalent equation where the variable stands alone. Two properties of equality make this possible, and they are the only tools required.

The addition property states that adding or subtracting the same quantity on both sides of an equation produces an equivalent equation. If $x + 5 = 12$, then subtracting $5$ from both sides gives $x = 7$. The solution set has not changed — it has only become visible. This property works because equality is preserved when identical operations are applied symmetrically.

The multiplication property states that multiplying or dividing both sides by any nonzero constant also produces an equivalent equation. If $3x = 21$, then dividing both sides by $3$ gives $x = 7$. The restriction to nonzero multipliers is critical: multiplying both sides by zero collapses every equation to $0 = 0$, destroying all information about the original solution.

These two properties generate every valid algebraic step in the solution of a linear equation. Combining them in sequence — first clearing additive terms, then clearing the coefficient of $x$ — isolates the variable systematically.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Solving Single-Step and Multi-Step Equations`,
    content: `A single-step equation requires exactly one application of the properties of equality. The equation $x - 9 = 4$ is solved by adding $9$ to both sides, yielding $x = 13$. The equation $-5x = 40$ is solved by dividing both sides by $-5$, yielding $x = -8$. In each case, one operation undoes the one operation binding the variable.

Multi-step equations demand a sequence of operations. Consider $4x - 7 = 2x + 11$. The variable appears on both sides and constants are mixed in. The strategy proceeds in stages: gather all variable terms on one side and all constant terms on the other, then isolate the variable.

$$4x - 7 = 2x + 11$$

Subtract $2x$ from both sides:

$$2x - 7 = 11$$

Add $7$ to both sides:

$$2x = 18$$

Divide both sides by $2$:

$$x = 9$$

The order of these steps is flexible — subtracting $2x$ first or adding $7$ first both reach the same result — but the underlying logic is rigid: every step must preserve equivalence, and each step must bring the equation closer to the form $x = \\text{value}$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Equations with Parentheses`,
    content: `When an equation contains parentheses, the distributive property clears them before any collecting or isolating takes place. The equation $3(2x - 5) = 4x + 1$ begins with distribution on the left:

$$6x - 15 = 4x + 1$$

From here, the procedure is identical to any multi-step equation. Subtract $4x$ from both sides to get $2x - 15 = 1$, add $15$ to get $2x = 16$, and divide by $2$ to reach $x = 8$.

Nested parentheses require working from the innermost grouping outward. The equation $2[3(x + 1) - 4] = 10$ simplifies as follows: first distribute the $3$ inside the brackets to get $2[3x + 3 - 4] = 10$, then simplify inside the brackets to $2[3x - 1] = 10$, then distribute the $2$ to obtain $6x - 2 = 10$, and finally solve to get $x = 2$.

A persistent source of error is the negative sign preceding parentheses. In the expression $-(x + 4)$, the negative distributes to every term inside, producing $-x - 4$. Writing $-x + 4$ instead is one of the most common algebraic mistakes, and it changes the solution entirely.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Equations with Fractions`,
    content: `Fractional coefficients do not change the type of an equation, but they complicate arithmetic. Clearing all fractions at once simplifies the process. The technique is to multiply every term on both sides by the least common denominator of all fractions present.

Consider the equation $\\frac{x}{3} + \\frac{x - 2}{4} = 5$. The LCD of $3$ and $4$ is $12$. Multiplying every term by $12$ gives:

$$4x + 3(x - 2) = 60$$

Distributing and collecting:

$$4x + 3x - 6 = 60$$
$$7x = 66$$
$$x = \\frac{66}{7}$$

The multiplication by $12$ is valid because $12$ is a nonzero constant — it does not depend on $x$. The solution set is preserved exactly. After clearing, the equation is a standard multi-step linear equation with integer coefficients.

A crucial distinction separates these equations from [rational equations](!/algebra/equations/rational). When the denominators are numerical constants (like $3$, $4$, $12$), clearing them is safe and changes nothing about the solution set. When the variable itself appears in a denominator, the equation is no longer linear — it is rational, and clearing that denominator introduces domain restrictions and the possibility of extraneous solutions.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Equations with Decimals`,
    content: `Decimal coefficients are fractions in disguise, and the same clearing strategy applies. Multiplying both sides by an appropriate power of $10$ converts every coefficient to an integer.

The equation $0.3x + 1.25 = 0.8x - 0.5$ has decimals extending to the hundredths place. Multiplying every term by $100$ produces:

$$30x + 125 = 80x - 50$$

Collecting variable terms on the right and constants on the left:

$$175 = 50x$$
$$x = \\frac{175}{50} = \\frac{7}{2}$$

The choice of multiplier depends on the finest decimal present. If the most decimal places in any coefficient is one, multiply by $10$. If two, multiply by $100$. This is equivalent to rewriting each decimal as a fraction and clearing denominators, compressed into a single step.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Special Cases`,
    content: `The procedure for solving a linear equation assumes that the variable survives the simplification process. When it does not, two outcomes are possible, and neither produces a finite solution set.

An identity arises when simplification eliminates the variable and leaves a true numerical statement. The equation $2(x + 3) = 2x + 6$ distributes to $2x + 6 = 2x + 6$. Subtracting $2x$ from both sides gives $6 = 6$, which is true regardless of $x$. Every real number satisfies the original equation, and the solution set is $\\mathbb{R}$. The equation was not conditional — it was a restatement of an algebraic identity.

A contradiction arises when simplification eliminates the variable and leaves a false numerical statement. The equation $3(x + 1) = 3x + 8$ distributes to $3x + 3 = 3x + 8$. Subtracting $3x$ from both sides gives $3 = 8$, which is false for every value of $x$. No real number satisfies the equation, and the solution set is empty.

Both situations are recognizable during solving: the variable terms cancel completely, and the remaining constant equation decides between identity and contradiction. If the constants match, every value works. If they clash, nothing does.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Literal Equations and Formulas`,
    content: `A literal equation contains multiple variables, and the task is to solve for one of them in terms of the others. The same properties of equality apply — the only difference is that the "constants" being manipulated are themselves variables.

Consider the equation $d = rt$, which relates distance, rate, and time. Solving for $t$ means isolating it on one side. Dividing both sides by $r$ (assuming $r \\neq 0$) gives $t = \\frac{d}{r}$. The variable $r$ is treated as a nonzero constant throughout, just as a numerical coefficient would be.

More involved formulas demand the same multi-step approach used for numerical linear equations. To isolate $r$ in the formula $A = P(1 + rt)$, begin by dividing both sides by $P$:

$$\\frac{A}{P} = 1 + rt$$

Subtract $1$:

$$\\frac{A}{P} - 1 = rt$$

Divide by $t$:

$$r = \\frac{1}{t}\\left(\\frac{A}{P} - 1\\right)$$

Each step is a reversible operation that preserves equivalence, applied to letters instead of numbers. The logic is identical to solving $7 = 2(1 + 3x)$ — only the symbols differ.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj9: {
    title: `Summary of Linear Equation Forms`,
    content: `The forms covered above all reduce to the same standard multi-step procedure once a single preparation step is applied. The table below collects each form, an example, the preparation that converts it to a clean multi-step equation, and the technique that finishes it.`,
    before: ``,
    after: ``,
    link: '',
  },
};


 const introContent = {
  id: 'intro',
  title: `First-Degree Equations and the Foundation of Solving`,
  content: `A linear equation in one variable is the simplest type of algebraic equation: the unknown appears only to the first power, and — provided the coefficient is nonzero — exactly one solution exists. The methods used to solve linear equations are elementary, but they are not trivial. Every technique for handling more complex equations relies on the same core logic: transform the equation into a simpler equivalent form by applying reversible operations. Mastering that logic here makes everything that follows possible.`,
};


const faqQuestions = {
  obj1: {
    question: "What does it mean when the variable disappears while solving?",
    answer: "The constants left behind decide. If they agree, as when $2(x + 3) = 2x + 6$ reduces to $6 = 6$, the equation was an identity and every real number solves it. If they clash, as when $3(x + 1) = 3x + 8$ reduces to $3 = 8$, it is a contradiction and nothing solves it. Cancelling variables is not an error.",
    sectionId: "7"
  },
  obj2: {
    question: "Why can't you multiply both sides by zero?",
    answer: "Because it destroys the information you are trying to extract. Multiplying by zero turns any equation into $0 = 0$, which is true for every value of the variable, so the original solution vanishes rather than being preserved. The multiplication property of equality holds for any nonzero constant precisely to rule this out.",
    sectionId: "2"
  },
  obj3: {
    question: "Why is $-(x + 4)$ equal to $-x - 4$ rather than $-x + 4$?",
    answer: "Because the minus sign is a factor of $-1$ distributed across the whole bracket, reaching every term inside rather than only the first. So $-(x + 4) = -x - 4$, and likewise $-(x - 4) = -x + 4$. Getting the second term's sign wrong changes the solution outright, which makes this one of the most common algebra errors.",
    sectionId: "4"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Linear Equations",
    "description": "Master linear equations: standard form ax + b = 0, properties of equality, multi-step solving, equations with parentheses, fractions, decimals, special cases (identities and contradictions), and literal equations.",
    "url": "https://www.learnmathclass.com/algebra/equations/linear",
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
      "name": "Linear Equations"
    },
    "teaches": [
      "Standard form ax + b = 0",
      "Addition and multiplication properties of equality",
      "Multi-step equation solving",
      "Clearing parentheses with distribution",
      "Clearing fractions with LCD",
      "Identity and contradiction recognition",
      "Literal equations and formulas"
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
        "name": "Linear Equations",
        "item": "https://www.learnmathclass.com/algebra/equations/linear"
      }
    ]
  },
}


  // Operation A demonstration units: a frozen tool state, an explanation
  // panel reading that state, and the contextual link, in one frame. Built
  // here and rendered as content-array items - never interpolated into
  // sectionsContent, which cannot carry a wrapper div around an <svg>.
  const demoUnits = {
    standard: demoUnitFrame({
      svg: equationVisualizerDiagrams['lin-negative'],
      caption: '&#8722;x + 5 = 0: the line crosses the axis at x = 5',
      text: 'The standard form ax + b = 0 asks where the line y = ax + b meets the x-axis, and for &#8722;x + 5 that is x = 5, the single marked crossing. The condition a &#8800; 0 is what keeps the line from being horizontal, which is what guarantees the crossing exists. Tilt the line by changing a on the',
      href: '/algebra/visual-tools/equation',
      linkText: 'equation visual explorer',
    }),
    special: demoUnitFrame({
      svg: equationVisualizerDiagrams['lin-constant'],
      caption: '2 = 3: a horizontal line that never reaches the level',
      text: 'When the variable cancels the left side is a constant, a horizontal line, and either it coincides with the level line, every x a solution, or, as here with 2 = 3, it runs parallel below it and there is no solution at all. No crossing, no marble. Compare the two degenerate cases on the',
      href: '/algebra/visual-tools/equation',
      linkText: 'equation visual explorer',
    }),
  };

  return {
  props: {
    demoUnits,
    sectionsContent,
    introContent,
    obj2Table,
    obj3Table,
    obj7Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Linear Equations: Solving First-Degree Equations | Learn Math Class",
      description: "Master linear equations: standard form ax + b = 0, properties of equality, multi-step solving, equations with parentheses, fractions, decimals, special cases (identities and contradictions), and literal equations.",
      keywords: keyWords.join(", "),
      url: "/algebra/equations/linear",
      name: "Linear Equations"
    },
  }
}
   }


export default function LinearEquationsPage({
  seoData,
  sectionsContent,
  introContent,
  obj2Table,
  obj3Table,
  obj7Table,
  summaryTable,
  faqQuestions,
  schemas, demoUnits
}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
                  <div key={'unit-standard'} dangerouslySetInnerHTML={{ __html: demoUnits.standard }} />,
          `Solving is the algebra that locates this crossing without drawing it.`,
        ]
    },
    {
        id:'2',
        title:sectionsContent.obj2.title,
        link:sectionsContent.obj2.link,
        content:[
          sectionsContent.obj2.content,
          <div
            key={'obj2-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj2Table }}
          />,
        ]
    },
    {
        id:'3',
        title:sectionsContent.obj3.title,
        link:sectionsContent.obj3.link,
        content:[
          sectionsContent.obj3.content,
          <div
            key={'obj3-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj3Table }}
          />,
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
          <div
            key={'obj7-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: obj7Table }}
          />,
                  <div key={'unit-special'} dangerouslySetInnerHTML={{ __html: demoUnits.special }} />,
          `Both outcomes are legitimate answers, and the picture shows why neither is a mistake.`,
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
          <div
            key={'summary-table'}
            style={tableWrapStyle}
            dangerouslySetInnerHTML={{ __html: summaryTable }}
          />,
        ]
    },
    // faq: rendered component — must be built here, not in getStaticProps
    {
        id:'faq',
        title:`Linear Equations FAQ`,
        link:``,
        content:[
          <div key={'faq-wrap'} style={{width:'80%',margin:'auto'}}>
            <FAQSection
              faqQuestions={faqQuestions}
              theme={'leftBorder'}
              width={'100%'}
              openFirst={false}
            />
          </div>,
        ]
    },

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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Linear Equations</h1>
   <br/>
   <br/>
   <SectionTableOfContents
     sections={genericSections}
     showSecondaryNav={true}
     secondaryNavMode="siblings"
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
   </>
  )
}