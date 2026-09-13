import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import CramerWrapper from '../../../../app/components/linear-algebra copy/matrix/CramerWrapper'
import cramerDiagrams from '../../../../app/components/linear-algebra copy/matrix/cramerDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps(){

  const keyWords = [
    'cramers rule',
    'cramer rule',
    'cramers rule calculator',
    'cramers rule visualizer',
    'cramers rule step by step',
    'solve linear system with determinants',
    'cramers rule 3x3',
    'cramers rule 2x2',
    'how to use cramers rule',
    'cramers rule example',
    'determinant method linear equations',
    'unique solution determinant',
    'solving systems of equations',
    'linear algebra visualizer',
    'interactive linear systems tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Cramer's rule** — for a square system $A\\mathbf{x} = \\mathbf{b}$ with $\\det A \\neq 0$, $x_i = \\dfrac{\\det A_i}{\\det A}$, where $A_i$ is $A$ with its $i$-th column replaced by $\\mathbf{b}$.

**Coefficient matrix** — $A$, holding the coefficients of the unknowns, one row per equation.

**Right-hand side** — $\\mathbf{b}$, the constants; shown in amber throughout the tool.

**Replaced matrix** — $A_i$, formed by swapping $\\mathbf{b}$ into column $i$ of $A$.

**Unique solution** — exactly one $\\mathbf{x}$; for a square system this happens exactly when $\\det A \\neq 0$.

**Singular system** — $\\det A = 0$; the system has no solution or infinitely many, and Cramer's rule does not apply.

**Homogeneous system** — $\\mathbf{b} = \\mathbf{0}$; every $\\det A_i$ is then $0$, and the unique solution is $\\mathbf{x} = \\mathbf{0}$.

**Cost** — $n + 1$ determinants of size $n$, which grows far faster than the cost of elimination.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose a system, then watch each unknown emerge as a ratio of two determinants.

• Use the **Preset** pills for five systems: a $2 \\times 2$ and a $3 \\times 3$ with integer solutions, one with fractional answers, a homogeneous one, and a singular one where the rule stops
• Use the **Size** stepper for $2$ or $3$ equations; resizing keeps the existing entries and pads with the identity
• Edit any entry of $A$ or of $\\mathbf{b}$ directly, or press **Shuffle** for a random system built to have a small integer solution
• Hover the **?** icon for a reminder of the formula and its precondition
• Press play or step manually; the step log on the right lists every determinant

The first scene after the system is always $\\det A$, because everything depends on it. If it is zero the run ends there with an explanation; otherwise one scene per unknown follows, and the last scene checks the solution by multiplying it back.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj2: {
      title: `How the Rule Runs`,
      content: `The visualizer follows the formula exactly.

• **System** — $A\\mathbf{x} = \\mathbf{b}$ with the unknowns still symbolic
• **Determinant** — $\\det A$ is evaluated; a non-zero value licenses the rest
• **Replace** — for each $i$, the matrix $A_i$ is shown with $\\mathbf{b}$ in column $i$, its determinant is evaluated, and $x_i = \\det A_i / \\det A$
• **Done** — the solution vector fills, and $A\\mathbf{x}$ is recomputed to confirm it equals $\\mathbf{b}$

If $\\det A = 0$ the run stops after the determinant scene. The tool does not decide between no solution and infinitely many, because Cramer's rule cannot; that question belongs to row reduction of the augmented matrix.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene shows the matrices involved in one step, with the arithmetic in the caption.

• In the **determinant** scene, all of $A$ is highlighted and the $\\det A$ slot fills, accent if non-zero and muted if zero
• In a **replace** scene, $A_i$ is drawn between determinant bars with the swapped column in amber and highlighted; the $\\det A_i$ slot is primary, the $\\det A$ slot secondary, and the $x_i$ slot accent, with an arrow from the swapped column to its determinant
• In the **done** scene, the solution vector is highlighted next to $A$ and $\\mathbf{b}$
• Fractions are shown as $a/b$ in a smaller font; the unknowns not yet found are shown in grey as $x_1, x_2, \\ldots$
• The step log on the right keeps a record of every determinant evaluated`,
      before: ``,
      after: ``,
      link: '',
    },
    obj4: {
      title: `Choosing a System`,
      content: `The five presets each make a different point.

• **$2 \\times 2$, integers** — two equations, three determinants, solution $(1, 3)$; the whole rule in its smallest form
• **$3 \\times 3$, integers** — four $3 \\times 3$ determinants, solution $(1, 2, 3)$; the default, and the size at which the cost of the method starts to show
• **$2 \\times 2$, fractions** — the same rule with a non-integer answer, $(7/5, 19/10)$; the determinants are integers, the ratios are not
• **Homogeneous** — $\\mathbf{b} = \\mathbf{0}$, so every replaced matrix has a zero column and every $x_i = 0$
• **Singular** — the columns of $A$ are proportional, $\\det A = 0$, and the run stops with the explanation

Shuffle builds its systems backwards: it picks a small integer solution first and computes $\\mathbf{b}$ from it, so the answers stay readable.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj5: {
      title: `What Cramer's Rule Is`,
      content: `For a square system $A\\mathbf{x} = \\mathbf{b}$ with $\\det A \\neq 0$, each unknown is a ratio of determinants:

$$x_i = \\frac{\\det A_i}{\\det A}, \\qquad A_i = A \\text{ with column } i \\text{ replaced by } \\mathbf{b}$$

Why it works: the solution satisfies $\\mathbf{b} = x_1 \\mathbf{a}_1 + \\cdots + x_n \\mathbf{a}_n$, a combination of the columns of $A$. Put that combination into column $i$ of $A$ and expand the determinant by linearity in that column: every term except the $x_i \\mathbf{a}_i$ term has a repeated column and vanishes, and what remains is $x_i \\det A$. So $\\det A_i = x_i \\det A$, and dividing gives the formula.

The same argument shows why $\\det A \\neq 0$ is exactly the right condition. When it holds, the columns are independent and every $\\mathbf{b}$ is reached by exactly one combination; when it fails, they are dependent, and $\\mathbf{b}$ is reached either not at all or in infinitely many ways.

Cramer's rule is a theorem about the solution, not a recommended way to compute it. For $n$ unknowns it needs $n + 1$ determinants, and computing determinants by expansion costs $n!$ operations each. Its value is that it is a closed formula: it shows that each $x_i$ is a ratio of polynomials in the entries, which matters for symbolic work, for sensitivity analysis, and for small systems solved by hand. For solvability in general, see the [linear systems theory page](!/linear-algebra/linear-systems/solvability); for the rule among the other uses of the determinant, see the [determinant applications page](!/linear-algebra/determinants/applications).`,
      before: ``,
      after: ``,
      link: '',
    },
    obj6: {
      title: `Key Properties`,
      content: `The rule inherits everything from the determinant.

• **Precondition**: $\\det A \\neq 0$; equivalently $A$ invertible, equivalently the columns independent
• **Uniqueness**: when the rule applies, the solution it gives is the only one
• **Homogeneous case**: $\\mathbf{b} = \\mathbf{0}$ forces every $\\det A_i = 0$ and hence $\\mathbf{x} = \\mathbf{0}$; non-trivial solutions of $A\\mathbf{x} = \\mathbf{0}$ exist only when $\\det A = 0$
• **Linearity in $\\mathbf{b}$**: each $x_i$ is a linear function of $\\mathbf{b}$, which is the statement $\\mathbf{x} = A^{-1}\\mathbf{b}$ written entry by entry
• **Relation to the inverse**: the rule is the adjugate formula $A^{-1} = \\operatorname{adj} A / \\det A$ applied to $\\mathbf{b}$
• **Scaling**: multiplying an equation by a constant scales $\\det A$ and every $\\det A_i$ by the same factor, leaving the ratios unchanged
• **Cost**: $n + 1$ determinants of size $n$; by expansion that is $(n+1)\\,n!$ operations against roughly $\\tfrac{2}{3}n^3$ for elimination`,
      before: ``,
      after: ``,
      link: '',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Cramer's rule is used where a formula is worth more than speed.

• **Small systems by hand**: for $2 \\times 2$ and $3 \\times 3$ it is fast and self-checking, and it is the method behind many textbook shortcuts
• **Symbolic solutions**: when the entries are parameters rather than numbers, the rule gives each unknown as an explicit rational function of them
• **Sensitivity**: because each $x_i$ is a ratio of determinants, the effect of perturbing one coefficient can be read off directly
• **Theory**: it is the shortest proof that a square system with non-zero determinant has exactly one solution, and it underlies the adjugate formula for the inverse
• **Geometry**: in the plane, $x_1$ and $x_2$ are ratios of parallelogram areas, which is where the rule came from historically
• **The negative lesson**: it is the standard example of a correct formula that is the wrong algorithm; solvers use elimination, and the rule explains why the answer exists`,
      before: ``,
      after: ``,
      link: '',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take the default preset,

$$\\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\\\ 1 & 2 & -1 \\end{pmatrix} \\mathbf{x} = \\begin{pmatrix} 6 \\\\ 3 \\\\ 2 \\end{pmatrix}$$

**Determinant of $A$**, expanding along the first row: $1(1 - 2) - 1(-2 - 1) + 1(4 + 1) = -1 + 3 + 5 = 7$. Non-zero, so the rule applies.

**First unknown**: replace column $1$ by $\\mathbf{b}$.

$$\\det A_1 = \\begin{vmatrix} 6 & 1 & 1 \\\\ 3 & -1 & 1 \\\\ 2 & 2 & -1 \\end{vmatrix} = 6(1 - 2) - 1(-3 - 2) + 1(6 + 2) = -6 + 5 + 8 = 7, \\qquad x_1 = 7/7 = 1$$

**Second unknown**: replace column $2$.

$$\\det A_2 = \\begin{vmatrix} 1 & 6 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 2 & -1 \\end{vmatrix} = 1(-3 - 2) - 6(-2 - 1) + 1(4 - 3) = -5 + 18 + 1 = 14, \\qquad x_2 = 14/7 = 2$$

**Third unknown**: replace column $3$.

$$\\det A_3 = \\begin{vmatrix} 1 & 1 & 6 \\\\ 2 & -1 & 3 \\\\ 1 & 2 & 2 \\end{vmatrix} = 1(-2 - 6) - 1(4 - 3) + 6(4 + 1) = -8 - 1 + 30 = 21, \\qquad x_3 = 21/7 = 3$$

Check: $1 + 2 + 3 = 6$, $2 - 2 + 3 = 3$, $1 + 4 - 3 = 2$. Four $3 \\times 3$ determinants for three unknowns; elimination would have needed a handful of row operations.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Replacing a row instead of a column** — $\\mathbf{b}$ goes into column $i$; the columns of $A$ are the coefficient vectors of the unknowns, and $x_i$ multiplies column $i$
• **Forgetting to check $\\det A$ first** — if it is zero every $x_i$ is a division by zero, and no amount of determinant arithmetic will rescue it
• **Reading $\\det A = 0$ as "no solution"** — it means no unique solution; the system may still be consistent with infinitely many, which row reduction decides
• **Dividing the wrong way** — $x_i = \\det A_i / \\det A$, the replaced determinant over the original
• **Using it on non-square systems** — the rule needs as many equations as unknowns; other systems have no coefficient determinant to speak of
• **Using it for large systems** — correct but ruinously slow; it is a formula for understanding and for small cases, not a solver`,
      before: ``,
      after: ``,
      link: '',
    },
    obj10: {
      title: `Related Concepts`,
      content: `[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — the rule is made of determinants; the determinant tool shows how each one is evaluated.

[Matrix inverse](!/linear-algebra/visual-tools/matrix-inverse) — the adjugate formula is Cramer's rule for every possible $\\mathbf{b}$ at once.

[Gaussian elimination](!/linear-algebra/visual-tools/gauss-elimination) — the practical way to solve the same system, and the way to classify it when $\\det A = 0$.

[Rank](!/linear-algebra/visual-tools/matrix-rank) — full rank is the same as $\\det A \\neq 0$ for a square matrix.

[Linear independence](!/linear-algebra/visual-tools/span-independence-2d) — of the columns of $A$, the geometric content of the precondition.

[Homogeneous systems](!/linear-algebra/visual-tools/linear-system-solutions) — the case $\\mathbf{b} = \\mathbf{0}$, where the rule gives only the trivial solution.

**Solution sets** — unique, none, or infinitely many, of which the rule handles the first.`,
      before: ``,
      after: ``,
      link: '',
    },
    obj11: {
      title: `The Opening Scene: The System`,
      content: `The player opens with $A\\mathbf{x} = \\mathbf{b}$ written out: the coefficient matrix, the vector of unknowns still symbolic and greyed, and $\\mathbf{b}$ in amber. At the default preset the system is $3 \\times 3$.

Nothing is computed yet. What the scene establishes is the shape: as many equations as unknowns, which is the only case the rule addresses.`,
      before: ``,
      after: `The square shape matters because the rule divides by $\\det A$, and only square matrices have determinants. A system with more equations than unknowns, or fewer, needs other methods.

The colour of $\\mathbf{b}$ is carried through the run: whenever it appears inside a replaced matrix, its column keeps the amber, so the swap is visible at a glance.`,
      link: '',
    },
    obj12: {
      title: `The Determinant of A`,
      content: `The first computation is $\\det A$, evaluated by cofactor expansion and written into its slot. Everything else divides by this number.

The frozen picture below shows the default preset's $\\det A = 7$, highlighted.`,
      before: ``,
      after: `A non-zero value here is the whole precondition of the rule and the whole content of the statement that the system has exactly one solution. It says the columns of $A$ are independent, so $\\mathbf{b}$ can be written as a combination of them in exactly one way.

The tool evaluates the determinant numerically; the determinant visualizer shows the same expansion symbolically. The number that comes out is also the volume-scaling factor of $A$ as a transformation, which is why a zero means collapse.`,
      link: '',
    },
    obj13: {
      title: `Replacing a Column`,
      content: `For each unknown $x_i$, the tool forms $A_i$ by swapping $\\mathbf{b}$ into column $i$ of $A$, evaluates $\\det A_i$, and divides by $\\det A$.

The frozen picture below is the second unknown of the default preset: $A_2$ with $\\mathbf{b}$ in its middle column, $\\det A_2 = 14$, and $x_2 = 14 / 7 = 2$.`,
      before: ``,
      after: `The replaced determinant is $x_i \\det A$, and the picture shows why. Column $i$ of $A_i$ is $\\mathbf{b}$, which equals $x_1 \\mathbf{a}_1 + \\cdots + x_n \\mathbf{a}_n$; a determinant is linear in each column, so $\\det A_i$ splits into $n$ pieces, and every piece except the $x_i \\mathbf{a}_i$ one has two equal columns and vanishes.

Each unknown costs a fresh $n \\times n$ determinant. Nothing from $\\det A_1$ helps with $\\det A_2$, which is the reason the method scales so badly and elimination does not.`,
      link: '',
    },
    obj14: {
      title: `When the Determinant Is Zero`,
      content: `On the singular preset the columns of $A$ are proportional, $\\det A = 0$, and the run stops after the determinant scene.

The frozen picture below is that stop: the system with its coefficient columns muted and no solution vector.`,
      before: ``,
      after: `The rule does not fail quietly here; it fails to exist, because every $x_i$ would be a division by zero. Geometrically the two columns lie on one line, so the combinations $x_1 \\mathbf{a}_1 + x_2 \\mathbf{a}_2$ only ever reach that line, and $\\mathbf{b}$ is either on it, with infinitely many ways to reach it, or off it, with none.

Which of the two holds is a question about $\\mathbf{b}$, not about $A$, and determinants of $A$ cannot answer it. Row reducing the augmented matrix $[A \\mid \\mathbf{b}]$ can, and that is the tool to reach for when this one stops.`,
      link: '',
    },
    obj15: {
      title: `The Solution`,
      content: `The final scene fills the solution vector next to $A$ and $\\mathbf{b}$, and the caption multiplies $A\\mathbf{x}$ back out to confirm it equals $\\mathbf{b}$.

The frozen picture below is the default preset solved: $\\mathbf{x} = (1, 2, 3)$.`,
      before: ``,
      after: `The check is not decoration. Each unknown was computed independently from its own determinant, so an arithmetic slip in one of them shows up as a mismatch in one equation, and the check catches it.

Read across the whole run and the rule's character is clear: $n + 1$ determinants, no sharing of work between them, and a formula at the end. It is the right tool for a $2 \\times 2$ solved on paper and the right theorem for understanding why the solution is unique; for anything larger, the elimination tools in this section do the same job with a fraction of the arithmetic.`,
      link: '',
    }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from CramerWrapper's own buildScenes on the default preset (and the
     singular preset for the stop scene) and rendered through
     frozenMatrixSvgFixed. Stills are found by phase. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: cramerDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A x = b with the unknowns still symbolic and b in amber. As many equations as unknowns - the only ' +
      'shape the rule addresses, because only square matrices have determinants.'),
    det: unit('det', 'Determinant of A, frozen',
      'det A = 7 evaluated and highlighted. Non-zero, so the columns are independent, the solution is unique, ' +
      'and every unknown is well defined.'),
    replace: unit('replace', 'Second unknown, frozen',
      'A<sub>2</sub> with b swapped into its middle column, det A<sub>2</sub> = 14, and x<sub>2</sub> = 14 / 7 = 2. ' +
      'Linearity in the swapped column is why det A<sub>2</sub> equals x<sub>2</sub> det A.'),
    singular: unit('singular', 'Singular system, frozen',
      'The singular preset stopped: det A = 0, the coefficient columns muted, no solution vector. The rule ' +
      'cannot say whether there are no solutions or infinitely many; row reduction can.'),
    done: unit('done', 'Solution, frozen',
      'x = (1, 2, 3) in place next to A and b. Four determinants for three unknowns, none sharing work - ' +
      'a formula, not an algorithm.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     CramerWrapper accepts an explanations prop keyed by scene phase:
     intro, det, singular, replace, done. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-cramers-rule-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Square system, one formula per unknown - after one check.', 'the-opening-scene', 'Learn more about the opening scene'),
    det: note('Non-zero means independent columns and exactly one solution.', 'the-determinant-of-a', 'Learn more about det A'),
    replace: note('Swap b into a column; linearity makes the new determinant x<sub>i</sub> det A.', 'replacing-a-column', 'Learn more about the replaced matrices'),
    singular: note('Division by zero: no unique solution, and the rule cannot tell none from infinitely many.', 'when-the-determinant-is-zero', 'Learn more about the singular case'),
    done: note('Check by multiplying back; n + 1 determinants with no shared work.', 'the-solution', 'Learn more about the solution'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is Cramer's rule?",
      answer: "Cramer's rule is a formula for the solution of a square system of linear equations A x = b when the determinant of A is not zero. Each unknown x_i equals the determinant of the matrix obtained by replacing column i of A with b, divided by the determinant of A. It gives every unknown directly, without row reduction."
    },
    obj2: {
      question: "When does Cramer's rule not work?",
      answer: "It requires a square system with a non-zero coefficient determinant. If det A is zero, every formula divides by zero and the rule does not apply; the system then has either no solution or infinitely many, and which one depends on b, which row reduction of the augmented matrix decides. The rule also says nothing about systems with more or fewer equations than unknowns."
    },
    obj3: {
      question: "Why does replacing a column by b give x_i times det A?",
      answer: "The solution expresses b as a combination of the columns of A with coefficients x_1, …, x_n. A determinant is linear in each column, so replacing column i by that combination splits the determinant into n pieces, one per term. Every piece except the x_i piece has two equal columns and is zero, and the x_i piece is x_i times det A. Dividing by det A isolates x_i."
    },
    obj4: {
      question: "Is Cramer's rule a good way to solve systems?",
      answer: "For 2×2 and 3×3 systems by hand it is quick and easy to check. For larger systems it is far too slow: it needs n + 1 determinants of size n, each costing about n! operations by expansion, while Gaussian elimination solves the whole system in about two-thirds of n cubed operations. Its lasting value is as a formula and a proof of uniqueness, not as an algorithm."
    },
    obj5: {
      question: "What does Cramer's rule give for a homogeneous system?",
      answer: "If b is the zero vector, every replaced matrix has a column of zeros and every replaced determinant is zero, so every unknown is zero. That is the trivial solution, and when det A is not zero it is the only solution. Non-trivial solutions of A x = 0 exist exactly when det A is zero, which is the case the rule excludes."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Cramer's Rule Visualizer",
      "description": "Step-by-step visualizer for Cramer's rule on 2×2 and 3×3 systems. Watch det A evaluated, each column of A replaced by b in turn, and each unknown emerge as a ratio of determinants, with a singular case that stops the rule.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/cramers-rule",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Editable coefficient matrix and right-hand side, 2×2 or 3×3, with five presets and a shuffle",
        "det A evaluated first, with the run stopping and explaining when it is zero",
        "One scene per unknown: the replaced matrix, its determinant, and the ratio",
        "Right-hand side kept in colour so the swapped column is visible",
        "Final check multiplying the solution back into A",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the formula and its precondition"
      ],
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2026-09-12",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": "cramers rule, cramer rule, cramers rule calculator, cramers rule visualizer, cramers rule step by step, solve linear system with determinants, cramers rule 3x3, cramers rule 2x2, how to use cramers rule, cramers rule example, determinant method linear equations, unique solution determinant, solving systems of equations, linear algebra visualizer, interactive linear systems tool"
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
          "name": "Linear Algebra",
          "item": "https://www.learnmathclass.com/linear-algebra"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Cramer's Rule",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/cramers-rule"
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


  const introContent = {
    id: "intro",
    title: "",
    content: ``
  }


  return {
    props: {
      relatedTools: getRelatedTools('linear-algebra-cramers-rule'),
      sectionsContent,
      stateUnits,
      explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Cramer's Rule Visualizer | Solve A x = b with Determinants",
        description: "Visualize Cramer's rule step by step on 2×2 and 3×3 systems: evaluate det A, replace each column by b in turn, and read each unknown as a ratio of determinants. Includes the singular case where the rule stops.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/cramers-rule",
        svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="8" y1="22" x2="8" y2="50" stroke="#B5D4F4" stroke-width="1.4"/><line x1="38" y1="22" x2="38" y2="50" stroke="#B5D4F4" stroke-width="1.4"/><rect x="11" y="25" width="8" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="19" y="25" width="8" height="8" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="27" y="25" width="8" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="11" y="33" width="8" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="19" y="33" width="8" height="8" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="27" y="33" width="8" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="11" y="41" width="8" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><rect x="19" y="41" width="8" height="8" fill="#FAC775" stroke="#854F0B" stroke-width="1"/><rect x="27" y="41" width="8" height="8" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.7"/><line x1="44" y1="30" x2="60" y2="30" stroke="#E6F1FB" stroke-width="1.2"/><text x="52" y="27" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">det A&#8322;</text><text x="52" y="40" font-family="Georgia,serif" font-size="6.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">det A</text><text x="66" y="36" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle">=</text><rect x="70" y="30" width="8" height="10" fill="#97C459" stroke="#27500A" stroke-width="0.9"/><text x="74" y="38" font-family="Georgia,serif" font-size="6.5" fill="#173404" text-anchor="middle" font-style="italic">x&#8322;</text><text x="40" y="64" font-family="Georgia,serif" font-size="7" fill="#E6F1FB" text-anchor="middle" font-style="italic">swap b into column i</text></svg>`,
        name: "Cramer's Rule Visualizer",
        hubDescription: "Solve a 2×2 or 3×3 system of your own numbers by Cramer's rule, one unknown per scene: evaluate det A first, then swap b into each column of A in turn, evaluate that determinant, and divide. The right-hand side stays coloured so the swapped column is always visible, a singular preset shows the rule stopping at det A = 0, and the final scene multiplies the solution back to check it. Five presets and a shuffle that builds systems with small integer answers.",
        category: 'Linear Systems',
        subCategory: 'Solving'
      }
    }
  }
}

export default function CramerVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas, relatedTools }) {

  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [ sectionsContent[obj].content ],
  })

  const stateRow = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`u-${unitKey}`} dangerouslySetInnerHTML={{ __html: stateUnits[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  const genericSections=[
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'how-the-rule-runs'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'the-determinant-of-a', 'det'),
    stateRow('obj13', 'replacing-a-column', 'replace'),
    stateRow('obj14', 'when-the-determinant-is-zero', 'singular'),
    stateRow('obj15', 'the-solution', 'done'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-a-system'),
    plain('obj5', 'what-cramers-rule-is'),
    plain('obj6', 'key-properties'),
    plain('obj7', 'why-it-matters'),
    plain('obj8', 'worked-example'),
    plain('obj9', 'common-mistakes'),
    plain('obj10', 'related-concepts'),
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
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Cramer&apos;s Rule</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <CramerWrapper
   defaultPreset='three'
   explanations={explanations}
   />
   </div>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"
         secondaryNavTitle="More in this Section"
   />
   <br/>
   <br/>
   <br/>
   <br/>
   <RelatedTools tools={relatedTools}/>
   <br/>
   <br/>
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   </>
  )
}
