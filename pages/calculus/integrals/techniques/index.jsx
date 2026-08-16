// tables-optimized: v4 | 2026-05-24 | 3 tables (obj4 aggregation, obj5 aggregation, obj8 summary capstone)
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import React from 'react'
import '../../../../pages/pages.css'
import Head from 'next/head'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import { tableHeaders } from '@/app/styles/theme'
import NotationSection from '@/app/components/page-components/content-components/NotationSection'


export async function getStaticProps(){
const keyWords = [
  "integration techniques",
  "u-substitution",
  "integration by parts",
  "trigonometric integrals",
  "trigonometric substitution",
  "partial fractions integration",
  "how to integrate",
  "substitution method calculus",
  "LIATE rule",
  "integration methods",
  "advanced integration",
  "integrate sin cos powers",
  "rational function integration",
  "choosing integration technique"
]

const linkStyle = 'color: inherit; text-decoration: underline;'

// ─── TABLES ───────────────────────────────────────────────────────────────

// obj4 — aggregation: trig integral strategies by power pattern
const obj4Table = `
<table class="styled-table" style="border-collapse: collapse; width: 75%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Power pattern</th>
      <th style="${tableHeaders.aggregation}">Strategy</th>
      <th style="${tableHeaders.aggregation}">Substitution</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd power of sin x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">save one sin x, rewrite the rest using sin²x = 1 − cos²x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u = cos x, du = −sin x dx</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Odd power of cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">save one cos x, rewrite the rest using cos²x = 1 − sin²x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u = sin x, du = cos x dx</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Both powers even</td>
      <td style="padding: 12px 15px; color: #34495e;">apply half-angle identities to lower the powers</td>
      <td style="padding: 12px 15px; color: #34495e;">none directly — reduce, then integrate term by term</td>
    </tr>
  </tbody>
</table>
`

// obj5 — aggregation: trigonometric substitutions by radical form
const obj5Table = `
<table class="styled-table" style="border-collapse: collapse; width: 70%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.aggregation}">Radical in integrand</th>
      <th style="${tableHeaders.aggregation}">Substitution</th>
      <th style="${tableHeaders.aggregation}">Radical simplifies to</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">√(a² − x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = a sin θ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a cos θ</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">√(a² + x²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = a tan θ</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">a sec θ</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">√(x² − a²)</td>
      <td style="padding: 12px 15px; color: #34495e;">x = a sec θ</td>
      <td style="padding: 12px 15px; color: #34495e;">a tan θ</td>
    </tr>
  </tbody>
</table>
`

// obj8 — summary capstone: master technique reference with selection signal
const summaryTable = `
<table class="styled-table" style="border-collapse: collapse; width: 78%;margin:auto; background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${tableHeaders.summary}">Technique</th>
      <th style="${tableHeaders.summary}">What it reverses</th>
      <th style="${tableHeaders.summary}">Recognize when…</th>
      <th style="${tableHeaders.summary}">Setup</th>
      <th style="${tableHeaders.summary}">Example trigger</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">u-substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">chain rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand contains a function and its derivative</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">u = g(x), du = g&apos;(x) dx; rewrite and integrate in u</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ 2x cos(x²) dx</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Integration by parts</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product rule</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">product of unrelated factors (poly · exp, poly · trig, log · poly)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ u dv = uv − ∫ v du; LIATE picks u</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ x eˣ dx</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric integrals</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Pythagorean &amp; half-angle identities</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">powers and products of sin x, cos x (and tan, sec variants)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">save a factor; convert via identity; substitute u = sin x or cos x</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ sin³ x dx</td>
    </tr>
    <tr>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #06357a;">Trigonometric substitution</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">Pythagorean identity</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">integrand contains √(a² − x²), √(a² + x²), or √(x² − a²)</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">x = a sin θ, a tan θ, or a sec θ depending on the radical</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #34495e;">∫ 1 / √(1 − x²) dx</td>
    </tr>
    <tr style="background: #f8f9fa;">
      <td style="padding: 12px 15px; font-weight: bold; color: #06357a;">Partial fractions</td>
      <td style="padding: 12px 15px; color: #34495e;">addition of rational fractions</td>
      <td style="padding: 12px 15px; color: #34495e;">rational function with a factorable denominator</td>
      <td style="padding: 12px 15px; color: #34495e;">decompose into A/(x − r) + B/(x − s) + … and integrate each piece</td>
      <td style="padding: 12px 15px; color: #34495e;">∫ 1 / (x² − 1) dx</td>
    </tr>
  </tbody>
</table>
`

// const sectionsContent = {
//   // ─── /calculus/integrals/techniques ───────────────────────────────────────


// formulas-optimized: v1 | 2026-06-09 | 2 callouts (obj2, obj3)
const sectionsContent = {
  // ─── /calculus/integrals/techniques ───────────────────────────────────────

  obj0: {
    title: `Key Terms`,
    content: `
- [Integrand](!/calculus/definitions#integrand) — the expression being transformed into a recognizable form
- [Indefinite Integral](!/calculus/definitions#indefinite_integral) — the target: find the antiderivative family
- [Definite Integral](!/calculus/definitions#definite_integral) — substitution in definite integrals requires converting bounds`,
    before: ``,
    after: `
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px,fontSize:12px]:[See All Calculus Definitions](!/calculus/definitions) →@`,
    link: '',
  },

  obj1: {
    title: `Why Techniques Are Needed`,
    content: `
Differentiation follows mechanical rules: the derivative of any elementary function can be computed by applying chain, product, and quotient rules systematically.

Integration has no such universal algorithm. Some elementary functions have no elementary antiderivative. Others have antiderivatives that are difficult to find without insight.

Techniques bridge this gap. They transform integrands into forms matching [known formulas](!/calculus/integrals/special). The transformation might involve changing variables, splitting products, or decomposing fractions—whatever reveals the underlying structure.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj2: {
    title: `Substitution (u-Substitution)`,
    content: `
Substitution reverses the chain rule. If the integrand contains a function and its derivative, substitution simplifies.

**Method:** Let $u = g(x)$, so $du = g'(x)\\, dx$. Replace all $x$-expressions with $u$-expressions and integrate.

@academic[formula_callout:Substitution Rule
$$\\int f(g(x))\\, g'(x)\\, dx = \\int f(u)\\, du \\quad \\text{with } u = g(x)$$
/calculus/integrals/formulas#substitution_rule]@

@academic[formulas_link:Browse all integral formulas
/calculus/integrals/formulas]@

**Example:**

$$\\int 2x \\cos(x^2)\\, dx$$

Let $u = x^2$, so $du = 2x\\, dx$:

$$= \\int \\cos u\\, du = \\sin u + C = \\sin(x^2) + C$$

For definite integrals, convert the limits: when $x = a$, $u = g(a)$; when $x = b$, $u = g(b)$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  notation: {
    title: `Notation Inside the Techniques`,
    lead: `Substitution's paired equations, the four-slot ledger of parts, and the substitution that runs backwards — the bookkeeping is the technique.`,
    inherited: `The integral signs — [indefinite](!/calculus/integrals/indefinite#3) and [definite](!/calculus/integrals/definite#2); the algebra of $du$ — [differentials](!/calculus/derivatives/differentials#notation).`,
    entries: [
      {
        id: 'u-substitution-pair',
        tex: `$u = g(x)$, $\\; du = g'(x)\\,dx$`,
        read: `Let u equal g of x, so d u equals g prime of x, d x`,
        means: `A change of name recorded as two equations — and the second is real [differential](!/calculus/derivatives/differentials#notation) algebra, not ritual. Everything must convert: integrand, $dx$, all of it, as in **Substitution** above.`,
        cases: `In a definite integral the bounds convert too, and the transition is often labelled on the sign itself: $\\int_{x=a}^{x=b}$ becomes $\\int_{u=g(a)}^{u=g(b)}$ — after which there is no going back to $x$. The alternative workflow keeps the $x$-bounds and back-substitutes $u = g(x)$ before evaluating; both are legal, mixing them is not.`,
        alsoWritten: `$w$ or $t$ when $u$ is spoken for; the final return to $x$ is the “back-substitution” step.`,
        confusedWith: `A partial conversion. $\\int \\cos u \\,dx$ — one variable in the integrand, another in the differential — is meaningless; a leftover $x$ under a $du$ means the substitution was not completed.`,
      },
      {
        id: 'parts-ledger',
        tex: `$\\int u\\, dv = uv - \\int v\\, du$`,
        read: `The integral of u d v equals u v minus the integral of v d u`,
        means: `Parts *factors* the integrand into two slots: $u$, destined for differentiation, and $dv$, destined for integration — and $dv$ swallows the $dx$. The four-slot ledger $u, du, dv, v$ organises the whole computation in **Integration by Parts** below.`,
        cases: `Choosing $u$ follows LIATE — logarithmic, inverse trig, algebraic, trigonometric, exponential — a classroom mnemonic, not a theorem; it fails often enough to keep judgment in the loop.`,
        alsoWritten: `$\\int u\\,v'\\,dx = uv - \\int u'\\,v\\,dx$ — the prime form, standard in European texts, where the differential never appears bare.`,
        confusedWith: `Substitution's $u$. Same letter, different job: substitution's $u$ *renames the variable*; parts' $u$ *labels a factor* and $x$ remains the variable throughout. Writing $dv$ without its $dx$ is the commonest ledger slip.`,
      },
      {
        id: 'reverse-substitution',
        tex: `$x = a\\sin\\theta$`,
        read: `Let x equal a sine theta`,
        means: `Substitution running backwards: the *old* variable is expressed through the new one, opposite in direction to $u = g(x)$. The radical collapses through a Pythagorean identity, as in **Trigonometric Substitution** below.`,
        cases: `Three radical shapes, three choices: $\\sqrt{a^2 - x^2} \\to x = a\\sin\\theta$; $\\sqrt{a^2 + x^2} \\to x = a\\tan\\theta$; $\\sqrt{x^2 - a^2} \\to x = a\\sec\\theta$. The answer returns to $x$ through $\\theta = \\arcsin\\frac{x}{a}$ and a reference triangle.`,
        alsoWritten: `Hyperbolic versions — $x = a\\sinh t$ — in analysis and European texts, trading the identity $1 - \\sin^2 = \\cos^2$ for $\\cosh^2 - \\sinh^2 = 1$.`,
        confusedWith: `The $u$-direction. Here the new variable is *not* a function of $x$ you can read off — inverting requires the [inverse trig functions](!/functions/inverse), and the domain restriction on $\\theta$ is what makes the inversion legal.`,
      },
    ],
    symbolsHref: `/math-symbols/calculus`,
    symbolsLabel: `All calculus symbols`,
    parentHref: `/calculus/integrals`,
    parentLabel: `Integrals`,
  },
obj3: {
    title: `Integration by Parts`,
    content: `
Integration by parts reverses the product rule:

@academic[formula_callout:Integration by Parts
$$\\int u\\, dv = uv - \\int v\\, du$$
/calculus/integrals/formulas#integration_by_parts]@

@academic[formulas_link:Browse all integral formulas
/calculus/integrals/formulas]@

**Method:** Identify factors $u$ and $dv$ in the integrand. Differentiate $u$ to get $du$; integrate $dv$ to get $v$. Apply the formula.

**Example:**

$$\\int x e^x\\, dx$$

Let $u = x$ and $dv = e^x\\, dx$. Then $du = dx$ and $v = e^x$:

$$= xe^x - \\int e^x\\, dx = xe^x - e^x + C = e^x(x - 1) + C$$

**Choosing the first factor:** LIATE guides selection—Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Earlier types typically make better choices for $u$.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj4: {
    title: `Trigonometric Integrals`,
    content: `
Integrals involving powers of sine and cosine require strategic use of identities.

**Odd power of sine:** Save one $\\sin x$, convert remaining $\\sin^2 x = 1 - \\cos^2 x$, substitute $u = \\cos x$.

**Odd power of cosine:** Save one $\\cos x$, convert remaining $\\cos^2 x = 1 - \\sin^2 x$, substitute $u = \\sin x$.

**Both powers even:** Use half-angle identities:

$$\\sin^2 x = \\frac{1 - \\cos 2x}{2} \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}$$

**Example:**

$$\\int \\sin^3 x\\, dx = \\int \\sin x (1 - \\cos^2 x)\\, dx$$

Let $u = \\cos x$:

$$= -\\int (1 - u^2)\\, du = -u + \\frac{u^3}{3} + C = -\\cos x + \\frac{\\cos^3 x}{3} + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
obj5: {
    title: `Trigonometric Substitution`,
    content: `
Square roots of quadratics suggest trigonometric substitutions.

**For** $\\sqrt{a^2 - x^2}$**:** Let $x = a\\sin\\theta$, so $\\sqrt{a^2 - x^2} = a\\cos\\theta$

**For** $\\sqrt{a^2 + x^2}$**:** Let $x = a\\tan\\theta$, so $\\sqrt{a^2 + x^2} = a\\sec\\theta$

**For** $\\sqrt{x^2 - a^2}$**:** Let $x = a\\sec\\theta$, so $\\sqrt{x^2 - a^2} = a\\tan\\theta$

**Example:**

$$\\int \\frac{1}{\\sqrt{1 - x^2}}\\, dx$$

Let $x = \\sin\\theta$, so $dx = \\cos\\theta\\, d\\theta$ and $\\sqrt{1 - x^2} = \\cos\\theta$:

$$= \\int \\frac{\\cos\\theta}{\\cos\\theta}\\, d\\theta = \\int d\\theta = \\theta + C = \\arcsin x + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj6: {
    title: `Partial Fractions`,
    content: `
Rational functions—polynomials divided by polynomials—decompose into simpler fractions.

**Method:** Factor the denominator. Write the fraction as a sum of terms with linear or irreducible quadratic denominators. Solve for coefficients. Integrate each term.

**Example:**

$$\\int \\frac{1}{x^2 - 1}\\, dx = \\int \\frac{1}{(x-1)(x+1)}\\, dx$$

Decompose:

$$\\frac{1}{(x-1)(x+1)} = \\frac{A}{x-1} + \\frac{B}{x+1}$$

Solving gives $A = 1/2$, $B = -1/2$:

$$= \\frac{1}{2}\\int \\frac{1}{x-1}\\, dx - \\frac{1}{2}\\int \\frac{1}{x+1}\\, dx = \\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$$
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj7: {
    title: `Choosing the Right Technique`,
    content: `
Pattern recognition guides technique selection.

**Substitution:** Look for a function paired with its derivative. Expressions like $f(g(x)) \\cdot g'(x)$ signal substitution with $u = g(x)$.

**Parts:** Products of different function types—polynomial times exponential, polynomial times trigonometric, logarithm times polynomial.

**Trigonometric integrals:** Powers of $\\sin x$ and $\\cos x$, products of trigonometric functions.

**Trigonometric substitution:** Square roots of $a^2 - x^2$, $a^2 + x^2$, or $x^2 - a^2$.

**Partial fractions:** Rational functions with factorable denominators.

Multiple techniques often combine. A problem might require substitution followed by parts, or partial fractions followed by a trigonometric integral.
`,
    before: ``,
    after: ``,
    link: ``
  },
  obj8: {
    title: `Summary: The Techniques at a Glance`,
    content: `
The techniques covered above all share the same goal—reshape the integrand until it matches a [known formula](!/calculus/integrals/special)—but each one reverses a different differentiation rule and is triggered by a different signal in the integrand. The table below collects all five in one place, pairing each technique with what it reverses, the pattern that signals it, the standard setup, and a canonical example. Read the &quot;Recognize when…&quot; column first when scanning an unfamiliar integral; read across the row once a match is found.
`,
    before: ``,
    after: ``,
    link: ``
  }
};


const introContent = {
  id: `intro`,
  title: `Beyond Direct Formulas`,
  content: `
Most functions resist direct antidifferentiation. The integral of $e^{x^2}$ has no elementary formula. Even innocuous-looking expressions like $\\sqrt{1 + x^3}$ lack closed-form antiderivatives.

Integration techniques transform difficult integrals into tractable ones. Substitution reverses the chain rule. Integration by parts reverses the product rule. Partial fractions decompose rational functions. Trigonometric methods handle roots and powers.

No single algorithm covers all cases—unlike differentiation, which follows systematic rules. Success requires recognizing which technique applies and executing it correctly. This pattern-matching skill develops through practice.
`
};



const faqQuestions = {
  obj1: {
    question: "Why are integration techniques needed?",
    answer: "Unlike differentiation, which follows mechanical rules, integration has no universal algorithm. Many functions have no elementary antiderivative or are difficult to find without insight. Techniques transform integrands into forms matching known formulas.",
    sectionId: "1"
  },
  obj2: {
    question: "How does u-substitution work?",
    answer: "Substitution reverses the chain rule. Let u = g(x), so du = g'(x) dx. Replace all x-expressions with u-expressions and integrate. For definite integrals, convert the limits: when x = a, u = g(a). Look for a function paired with its derivative.",
    sectionId: "2"
  },
  obj3: {
    question: "What is integration by parts?",
    answer: "Integration by parts reverses the product rule: ∫u dv = uv − ∫v du. Identify factors u and dv, differentiate u to get du, integrate dv to get v, then apply the formula. The LIATE rule (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) guides choosing u.",
    sectionId: "3"
  },
  obj4: {
    question: "How do you integrate powers of sine and cosine?",
    answer: "For odd power of sine: save one sin x, convert sin²x = 1 − cos²x, substitute u = cos x. For odd power of cosine: save one cos x, convert cos²x = 1 − sin²x, substitute u = sin x. For both even: use half-angle identities.",
    sectionId: "4"
  },
  obj5: {
    question: "When do you use trigonometric substitution?",
    answer: "Use trig substitution for square roots of quadratics. For √(a²−x²): let x = a sin θ. For √(a²+x²): let x = a tan θ. For √(x²−a²): let x = a sec θ. These substitutions eliminate the square root using Pythagorean identities.",
    sectionId: "5"
  },
  obj6: {
    question: "How does partial fractions work?",
    answer: "Partial fractions decompose rational functions into simpler fractions. Factor the denominator, write the fraction as a sum of terms with linear or irreducible quadratic denominators, solve for coefficients, then integrate each term using basic formulas.",
    sectionId: "6"
  },
  obj7: {
    question: "How do you choose the right integration technique?",
    answer: "Pattern recognition guides selection. Substitution: function paired with its derivative. Parts: products of different function types. Trigonometric integrals: powers of sin and cos. Trig substitution: square roots of a²±x² or x²−a². Partial fractions: rational functions with factorable denominators.",
    sectionId: "7"
  }
}


const schemas = {
  learningResource: {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Integration Techniques",
    "description": "Master integration techniques: u-substitution, integration by parts (LIATE), trigonometric integrals, trig substitution, partial fractions, and how to choose the right method.",
    "url": "https://www.learnmathclass.com/calculus/integrals/techniques",
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
      "name": "Integration Techniques"
    },
    "teaches": [
      "Why integration techniques are necessary",
      "U-substitution method",
      "Integration by parts with LIATE rule",
      "Trigonometric integrals with powers of sine and cosine",
      "Trigonometric substitution for square roots",
      "Partial fraction decomposition",
      "Technique selection by pattern recognition"
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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Integration Techniques",
        "item": "https://www.learnmathclass.com/calculus/integrals/techniques"
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
    obj4Table,
    obj5Table,
    summaryTable,
    faqQuestions,
    schemas,
    seoData: {
      title: "Integration Techniques: Substitution, Parts & More | Learn Math Class",
      description: "Master integration techniques: u-substitution, integration by parts (LIATE), trigonometric integrals, trig substitution, partial fractions, and how to choose the right method.",
      keywords: keyWords.join(", "),
      url: "/calculus/integrals/techniques",
      name: "Integration Techniques"
    },
  }
}
   }

export default function PageTemplate({seoData, sectionsContent, introContent, obj4Table, obj5Table, summaryTable, faqQuestions, schemas}) {

  const tableWrapStyle = { margin: '20px auto', width: '100%' }

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
        id:'notation',
        title:sectionsContent.notation.title,
        link:``,
        content:[
          <NotationSection
            key={'notation'}
            title={sectionsContent.notation.title}
            lead={sectionsContent.notation.lead}
            inherited={sectionsContent.notation.inherited}
            entries={sectionsContent.notation.entries}
            symbolsHref={sectionsContent.notation.symbolsHref}
            symbolsLabel={sectionsContent.notation.symbolsLabel}
            parentHref={sectionsContent.notation.parentHref}
            parentLabel={sectionsContent.notation.parentLabel}
            theme={'navy'}
          />,
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
          <div key={'obj4-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj4Table }} />,
        ]
    },
    {
        id:'5',
        title:sectionsContent.obj5.title,
        link:sectionsContent.obj5.link,
        content:[
          sectionsContent.obj5.content,
          <div key={'obj5-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: obj5Table }} />,
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
          <div key={'summary-table'} style={tableWrapStyle}
               dangerouslySetInnerHTML={{ __html: summaryTable }} />,
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Integration Techniques</h1>
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