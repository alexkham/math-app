
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import React from 'react'
import '@/pages/pages.css'
import SiblingsNav from '@/app/components/SiblingsNav'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'

import LinearEquationSolver from '@/app/components/algebra/solvers/equations/LinearEquationSolver'
import QuadraticEquationSolver from '@/app/components/algebra/solvers/equations/QuadraticEquationSolver'
import PolynomialEquationSolver from '@/app/components/algebra/solvers/equations/PolynomialEquationSolver'
import RationalEquationSolver from '@/app/components/algebra/solvers/equations/RationalEquationSolver'
import RadicalEquationSolver from '@/app/components/algebra/solvers/equations/RadicalEquationSolver'
import ExponentialEquationSolver from '@/app/components/algebra/solvers/equations/ExponentialEquationSolver'
import LogarithmicEquationSolver from '@/app/components/algebra/solvers/equations/LogarithmicEquationSolver'
import AbsValueEquationSolver from '@/app/components/algebra/solvers/equations/AbsValueEquationSolver'
import LiteralEquationSolver from '@/app/components/algebra/solvers/equations/LiteralEquationSolver'


export async function getStaticPaths() {
  const paths = [
    { params: { view: 'linear' } },
    { params: { view: 'quadratic' } },
    { params: { view: 'polynomial' } },
    { params: { view: 'rational' } },
    { params: { view: 'radical' } },
    { params: { view: 'exponential' } },
    { params: { view: 'logarithmic' } },
    { params: { view: 'absolute-value' } },
    { params: { view: 'literal' } },
  ]

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  const viewConfig = {

    'linear': {
      component: 'LinearEquationSolver',
      title: "Linear Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for linear equations of the form ax + b = cx + d. Expands brackets, combines like terms, isolates the variable, and flags identities and contradictions.",
      name: "Linear Equation Solver",
      url: "/algebra/calculators/equations/linear",
      h1: "Linear Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: 'x',
      keywords: [
        "linear equation solver",
        "solve linear equations",
        "ax + b = c",
        "linear equation calculator",
        "step by step linear equation",
        "isolate the variable",
        "solve for x",
        "first degree equation",
        "linear identity",
        "linear contradiction",
        "exact fraction solver"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a linear equation?",
    answer: "A linear equation is an equation where the variable appears only to the first power. The general form is ax + b = c where a, b, c are constants and a is not zero. Solving means finding the single value of the variable that makes both sides equal."
  },
  obj2: {
    question: "How do you solve a linear equation step by step?",
    answer: "First expand any brackets and combine like terms on each side. Move all variable terms to one side and all constants to the other by adding or subtracting. Then divide both sides by the coefficient of the variable. The result is the solution."
  },
  obj3: {
    question: "What happens when both sides reduce to the same expression?",
    answer: "When all variable terms cancel and both sides equal the same constant, the equation is an identity. It is true for every real number, so the solution set is all real numbers. The solver flags this with the message All real numbers."
  },
  obj4: {
    question: "What does no solution mean for a linear equation?",
    answer: "When all variable terms cancel but the remaining constants on each side are different, the equation reduces to a false statement like 0 equals 5. The equation is a contradiction with no solution. No value of the variable can make it true."
  },
  obj5: {
    question: "Can I enter equations with brackets and division?",
    answer: "Yes. Use the bracket buttons or type parentheses to group terms; use the division operator for fractions like x divided by 2. The solver expands brackets, combines like terms, and handles fractional coefficients automatically while showing each step."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/linear" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (5 usage with demos), lesson links to algebra/equations and algebra/equations/linear.
         Before editing this view, read the instructions and re-run its checks (--view linear); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click the **Var**, **Num**, **Op** and bracket buttons, or type on the keyboard; click inside the display to move the caret. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the solution steps, the answer card gives the value marked Exact or Approximate, and the graph shows the line; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `An equation whose variable terms cancel ends in All real numbers or No solution instead of a value. [Learn more about special cases](!#identity-contradiction-and-special-cases)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one linear equation in $x$, $y$ or $n$, expands any brackets and collects the terms, then moves the variable terms to the left and the constants to the right and divides by the coefficient. Each move is listed as a step on the right, and the graph draws the left side as a line with the solution on the horizontal axis. When the variable terms cancel, the equation is reported as an identity (all real numbers) or a contradiction (no solution). [Learn more about linear equations](!#what-is-a-linear-equation)`
        }
      },
      demos: {
        'getting-started': {
          title: '2x + 3 = 11, Solve, Clear, a missing equals sign',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, x, +, 3, =, 1, 1\nThe display reads 2x + 3 = 11.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } },
            { click: { button: '3', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: '1', exact: true } },
            { wait: 2400 },
            { say: 'CLICK Solve\nThree steps on the right and the answer x = 4, marked Exact.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3000 },
            { say: 'CLICK Clear\nThe display and the solution are emptied; Solve is greyed out.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2400 },
            { say: 'CLICK 2, x, +, 3 and Solve\nNo equals sign: "Input must be an equation (use = sign)".', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '3', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 2800 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'Brackets, undo, delete, Solve',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 3, ×, (, x, +, 2, ), =, 1, 5\nThe display reads 3 · (x + 2) = 15.', at: 'tr' },
            { click: { button: '3', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: '(', exact: true } }, { click: { button: 'x', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } },
            { click: { button: '1', exact: true } }, { click: { button: '5', exact: true } },
            { wait: 2600 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 5 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe character before the caret, the 1, is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK 1, 5 and Solve\nx = 3.', at: 'tr' },
            { click: { button: '1', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3000 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Two Step\nA random ax + b = c loads into the display.', at: 'tr' },
            { click: { button: 'Two Step' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nThe steps and the answer for that equation.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3000 },
            { say: 'CLICK Distributive\nA random a(x + b) = c replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'Distributive' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'Variables on both sides, then a fraction answer',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 4, x, -, 5, =, 2, x, +, 7 and Solve\nFour steps; the answer x = 6, marked Exact.', at: 'tr' },
            { click: { button: '4', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '7', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK 3, x, =, 7 and Solve\nx = 2.333333, marked Approximate.', at: 'tr' },
            { click: { button: '3', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '7', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3000 },
          ],
        },
        'identity-contradiction-and-special-cases': {
          title: 'An identity, a contradiction, the Identity template',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, x, +, 1, =, 2, x, +, 1 and Solve\nAll real numbers: an identity.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3200 },
            { say: 'CLICK Clear', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 1800 },
            { say: 'CLICK 2, x, +, 1, =, 2, x, +, 5 and Solve\nNo solution: a contradiction.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3200 },
            { say: 'CLICK Try an Example, then Identity\nA random identity loads; Solve would report all real numbers.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { click: { button: 'Identity' } },
            { wait: 2800 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'identity-contradiction-and-special-cases', key: 'obj5', demo: 'identity-contradiction-and-special-cases' },
        { id: 'what-is-a-linear-equation', key: 'obj6', demo: null },
        { id: 'the-solving-process-explained', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to move the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly with your keyboard or use the button panel below.

Three quick experiments:

&bull; Type $2x + 3 = 11$ and press Enter &mdash; the right panel shows the step-by-step solution: identify terms, move constants to the right, divide by the coefficient. Final answer $x = 4$.
&bull; Click an example template like &quot;Two Step&quot; &mdash; a random equation of that form loads into the display.
&bull; Use brackets and the multiplication operator to enter things like $3 \\cdot (x + 2) = 15$.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The graph panel shows the underlying line $y = ax + b$ with the solution marked on the x-axis. An expression without an equals sign is refused with the message "Input must be an equation (use = sign)", and an equation of higher degree with "This equation is not linear". What makes an equation linear is explained in [what is a linear equation](!#what-is-a-linear-equation).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in your equation.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus, equals.
&bull; **Bracket buttons** &mdash; open and close parentheses for grouping.

Keyboard shortcuts work as expected: type letters and digits directly, use star or slash for multiplication and division (auto-converted to proper symbols on display), and press Enter to solve. **Ctrl+Z** undoes the last action up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the character after it.

The Clear button empties the display entirely; the curved-arrow button steps back through the undo stack one edit at a time; the ⌫ button deletes the character before the caret, like Backspace. Why these few symbols are all a linear equation needs is explained in [what is a linear equation](!#what-is-a-linear-equation).`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking the same card again produces a new random version.

&bull; **One Step** &mdash; $x + a = b$. Simplest case.
&bull; **Two Step** &mdash; $ax + b = c$. The standard introductory form.
&bull; **Variables Both Sides** &mdash; $ax + b = cx + d$. Requires moving the variable.
&bull; **Distributive** &mdash; $a(x + b) = c$. Practice expanding brackets.
&bull; **Fraction Coefficient** &mdash; $x / a + b = c$. Practice clearing fractions.
&bull; **Identity** &mdash; $ax + b = ax + b$. Always true.
&bull; **Contradiction** &mdash; $ax + b = ax + c$ with $b \\neq c$. Never true.
&bull; **Multi-Step** &mdash; $a(bx + c) + d = e$. Combines multiple techniques.

Roughly 80 percent of generated equations have clean integer solutions; the rest produce fractional answers to practice exact computation. Loading a template clears the previous solution; click Solve to work the new equation. The moves the solver applies to every template are listed in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel on the right shows each algebraic move as a labeled step.

&bull; **Identify Terms** &mdash; extracts the coefficient and constant from each side.
&bull; **Move Variable Terms to Left** &mdash; subtracts the right-side variable term from both sides.
&bull; **Move Constants to Right** &mdash; moves the left-side constant to the other side.
&bull; **Divide by Coefficient** &mdash; isolates the variable for the final answer.

Each step displays the equation in its before-and-after form with a transformation arrow between them. The final answer card at the bottom shows $x =$ value, marked as **Exact** when the solution is a clean integer or fraction, or **Approximate** when it requires decimal expansion.

For equations with brackets, the solver expands them implicitly when collecting terms &mdash; the display applies distribution before identifying coefficients rather than showing it as a separate visible step.

Only whole-number answers are marked Exact: $3x = 7$ gives $x = 2.333333$ marked Approximate, although $\\frac{7}{3}$ is exact. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. The three moves are justified in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Identity, Contradiction, and Special Cases`,
    content: `The solver detects two structural cases that look like linear equations but do not have a single numerical solution.

&bull; **Identity** &mdash; all variable terms cancel and the constants match. The equation reduces to something true like $0 = 0$. Solution set is all real numbers. The final answer card displays &quot;All real numbers&quot; with a check mark.
&bull; **Contradiction** &mdash; all variable terms cancel but the constants do not match. The equation reduces to a false statement like $0 = 5$. There is no solution. The final answer card displays &quot;No solution&quot; with a cross mark.

These cases arise naturally when both sides of the equation are scalar multiples of each other, or when they differ only by a constant. The solver flags them explicitly rather than producing a meaningless numerical answer or crashing on division by zero.

Try the Identity and Contradiction templates from the example panel to see both cases in action. Why the variable can cancel is explained in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Linear Equation?`,
    content: `A linear equation in one variable is an equation of degree 1 in that variable:

$$ax + b = c$$

where $a$, $b$, and $c$ are constants and $a \\neq 0$. More generally, both sides can be linear expressions:

$$ax + b = cx + d$$

The defining property: each side is a polynomial of degree at most 1 in the variable. No powers higher than 1, no variable in denominators, no roots, no logs, no exponentials involving the variable.

Geometrically, $y = ax + b$ defines a straight line in the plane. Solving $ax + b = c$ amounts to finding the x-coordinate where that line crosses the horizontal line $y = c$. The graph panel in the solver shows exactly this intersection point.

For deeper coverage see **linear equations theory**, **slope-intercept form**, and **first-degree polynomials**.

The standard form is defined in [definition and standard form](!/algebra/equations/linear#1), the place of linear equations among the equation types in [linear equations](!/algebra/equations#6), and what an equation is at all in [what an equation is](!/algebra/equations#1).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Three algebraic moves are sufficient to solve any linear equation.

&bull; **Combine like terms on each side** &mdash; collect everything into the form $a_1 x + b_1 = a_2 x + b_2$ where the coefficients and constants are explicit numbers. This step also handles distribution of brackets.
&bull; **Move variable terms to one side, constants to the other** &mdash; subtract $a_2 x$ from both sides, then move $b_1$ to the right. The equation now reads $(a_1 - a_2) x = b_2 - b_1$.
&bull; **Divide by the coefficient** &mdash; if $a_1 - a_2 \\neq 0$, divide both sides by it. The result is $x = (b_2 - b_1) / (a_1 - a_2)$.

If $a_1 - a_2 = 0$, the variable cancels. Then either $b_1 = b_2$ (identity, every value works) or $b_1 \\neq b_2$ (contradiction, no value works).

Each move preserves the solution set because applying the same operation to both sides of an equation yields an equivalent equation.

For comprehensive treatment see **solving linear equations**, **balancing equations**, and **equivalent equations**.

The moves rest on [properties of equality](!/algebra/equations/linear#2) and [equivalent equations](!/algebra/equations#4); they are practised in [solving single-step and multi-step equations](!/algebra/equations/linear#3), [equations with parentheses](!/algebra/equations/linear#4) and [equations with fractions](!/algebra/equations/linear#5); the cancelling case is [special cases](!/algebra/equations/linear#7).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Linear Inequalities** &mdash; same form as linear equations but with $<$, $>$, $\\leq$, or $\\geq$ in place of equality. Solved with the same moves, plus sign-flipping when multiplying or dividing by a negative.

**Systems of Linear Equations** &mdash; two or more linear equations in two or more variables solved simultaneously. Geometrically the intersection of lines or planes.

**Slope-Intercept Form** &mdash; $y = mx + b$. The same equation cast as a line in coordinate geometry, with $m$ the slope and $b$ the y-intercept.

**Literal Equations** &mdash; formulas with multiple variables rearranged to solve for any chosen variable. Same moves apply.

**Quadratic Equations** &mdash; degree 2 in the variable. Solved by factoring, completing the square, or the quadratic formula.

**Linear Functions** &mdash; functions of the form $f(x) = mx + b$. The graph is a straight line.

**Identity vs Contradiction** &mdash; the two degenerate cases of linear equations where no unique numerical solution exists.

The related tools are the [linear inequality solver](!/algebra/calculators/inequalities/linear), the [linear systems calculator](!/linear-algebra/calculators/linear-systems), the [literal equation solver](!/algebra/calculators/equations/literal) and the [quadratic equation solver](!/algebra/calculators/equations/quadratic); the lessons are [literal equations and formulas](!/algebra/equations/linear#8), [quadratic equations](!/algebra/equations#7) and [summary of linear equation forms](!/algebra/equations/linear#9).`,
    before: ``, after: ``, link: ''
  }
}
    },

    'quadratic': {
      component: 'QuadraticEquationSolver',
      title: "Quadratic Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for quadratic equations ax\u00B2 + bx + c = 0. Computes the discriminant, applies the quadratic formula, identifies vertex coordinates, and graphs the parabola.",
      name: "Quadratic Equation Solver",
      url: "/algebra/calculators/equations/quadratic",
      h1: "Quadratic Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: 'x²',
      keywords: [
        "quadratic equation solver",
        "ax^2 + bx + c = 0",
        "quadratic formula",
        "discriminant calculator",
        "solve quadratic equations",
        "parabola vertex",
        "quadratic factoring",
        "perfect square trinomial",
        "complete the square",
        "quadratic graph",
        "two real roots",
        "no real solutions"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a quadratic equation?",
    answer: "A quadratic equation is a degree-2 polynomial equation, written in standard form as ax squared + bx + c = 0 where a, b, c are constants and a is not zero. Its graph is a parabola, and the solutions are the x-values where the parabola crosses the x-axis."
  },
  obj2: {
    question: "How does the quadratic formula work?",
    answer: "The quadratic formula gives the two roots of ax squared + bx + c = 0 as x equals negative b plus or minus the square root of b squared minus 4ac, all divided by 2a. The expression under the radical is the discriminant; its sign determines how many real solutions exist."
  },
  obj3: {
    question: "What does the discriminant tell you?",
    answer: "The discriminant is delta equals b squared minus 4ac. If delta is positive, there are two distinct real roots. If delta equals zero, there is one repeated real root. If delta is negative, there are no real solutions and the parabola does not cross the x-axis."
  },
  obj4: {
    question: "What is the difference between factoring and the quadratic formula?",
    answer: "Factoring expresses the quadratic as a product of two linear factors, which works cleanly only when the roots are rational. The quadratic formula works for every quadratic equation regardless of whether the roots are rational, irrational, or complex. The solver attempts factoring first when the discriminant is a perfect square."
  },
  obj5: {
    question: "How do I enter x squared into the solver?",
    answer: "Use the x squared button to insert x followed by the power symbol and the digit 2. You can also type the caret symbol followed by 2, or directly type the unicode superscript 2 character. The display renders the exponent as a proper superscript."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/quadratic" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/equations/quadratic, algebra/equations, algebra/equations/polynomial.
         Before editing this view, read the instructions and re-run its checks (--view quadratic); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click the **Var**, **Num** and **Op** buttons, the **^** or **x²** power buttons and the brackets, or type on the keyboard; click inside the display to move the caret. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign or without a squared term is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the steps from standard form through the discriminant to the roots, the answer card gives the roots marked Exact or Approximate, and the graph shows the parabola; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `A negative discriminant ends in No real solutions; a zero discriminant in one repeated root. [Learn more about the discriminant](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one equation of degree $2$ in $x$, $y$ or $n$, moves every term to the left to reach $ax^2 + bx + c = 0$, and computes the discriminant $\Delta = b^2 - 4ac$. A positive $\Delta$ gives two roots by the quadratic formula, shown factored first when $\Delta$ is a perfect square; $\Delta = 0$ gives one repeated root $-b / (2a)$; a negative $\Delta$ gives no real solution. Each move is listed as a step on the right, and the graph draws the parabola with its roots and vertex. [Learn more about quadratic equations](!#what-is-a-quadratic-equation)`
        }
      },
      demos: {
        'getting-started': {
          title: 'x² − 5x + 6 = 0, Solve, Clear, no real solutions',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK x, x², -, 5, x, +, 6, =, 0\nThe display reads x² − 5x + 6 = 0.', at: 'tr' },
            { click: { button: 'x', exact: true } }, { click: { button: 'x²', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '6', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { wait: 2600 },
            { say: 'CLICK Solve\nΔ = 25 − 24 = 1, the factored form (x − 2)(x − 3) = 0, the roots x = 2 or x = 3, marked Exact.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Clear\nThe display and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK x, x², +, 1, =, 0 and Solve\nΔ = −4: No real solutions.', at: 'tr' },
            { click: { button: 'x', exact: true } }, { click: { button: 'x²', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3000 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'The power button, undo, delete, Solve',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, x, ^, 2, +, 3, x, -, 2, =, 0\nThe display reads 2x² + 3x − 2 = 0, with the power as a superscript.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '^', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '3', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } },
            { click: { button: '2', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { wait: 2600 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 0 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe equals sign before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK =, 0 and Solve\nΔ = 9 + 16 = 25: x = 0.5 or x = −2, Exact.', at: 'tr' },
            { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3200 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Perfect Square\nA random equation with a repeated root loads.', at: 'tr' },
            { click: { button: 'Perfect Square' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nΔ = 0 and one repeated root.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3000 },
            { say: 'CLICK Difference of Squares\nA random x² − a² = 0 replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'Difference of Squares' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'Irrational roots, then a repeated root',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK x, x², -, 2, x, -, 4, =, 0 and Solve\nΔ = 20: two roots, 3.236068 and −1.236068, marked Approximate.', at: 'tr' },
            { click: { button: 'x', exact: true } }, { click: { button: 'x²', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '4', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK x, x², +, 4, x, +, 4, =, 0 and Solve\nΔ = 0: the repeated root x = −2.', at: 'tr' },
            { click: { button: 'x', exact: true } }, { click: { button: 'x²', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '4', exact: true } },
            { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '4', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'the-discriminant-three-cases', key: 'obj5', demo: null },
        { id: 'what-is-a-quadratic-equation', key: 'obj6', demo: null },
        { id: 'three-solution-methods', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to move the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $x^2 - 5x + 6 = 0$ and press Enter &mdash; the right panel shows discriminant calculation $\\Delta = 25 - 24 = 1$, the factored form $(x - 2)(x - 3) = 0$, and the two roots $x = 2$ and $x = 3$.
&bull; Click an example template like &quot;Perfect Square&quot; &mdash; a random equation with a repeated root loads into the display.
&bull; Enter $x^2 + 1 = 0$ to see the no-real-solutions case &mdash; $\\Delta = -4 < 0$.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The graph panel renders the parabola $y = ax^2 + bx + c$ with roots marked on the x-axis and the vertex highlighted. An expression without an equals sign is refused with "Input must be an equation (use = sign)", and an equation without a squared term with a message that points to the linear solver. What makes an equation quadratic is explained in [what is a quadratic equation](!#what-is-a-quadratic-equation).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in your equation.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus, equals.
&bull; **Power row** &mdash; the caret operator for any exponent, the $x^2$ shortcut button (inserts caret plus 2), and bracket buttons.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division (auto-converted to proper symbols on display), and press Enter to solve. The caret key inserts the power operator. The display renders exponents as proper superscripts.

**Ctrl+Z** undoes the last action up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the character after it. The Clear button empties the display entirely; the curved-arrow button steps through the undo stack one edit at a time; the ⌫ button deletes the character before the caret. The $x^2$ button inserts only the power, so click the variable first and then $x^2$. Why a square is the highest power allowed is explained in [what is a quadratic equation](!#what-is-a-quadratic-equation).`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking the same card again produces a new random version.

&bull; **Standard Form** &mdash; $ax^2 + bx + c = 0$ with all three coefficients present.
&bull; **Missing b Term** &mdash; $ax^2 + c = 0$. Solve by isolating $x^2$ and taking the square root.
&bull; **Missing c Term** &mdash; $ax^2 + bx = 0$. Factor out $x$ to get roots $x = 0$ and $x = -b/a$.
&bull; **Perfect Square** &mdash; $x^2 + 2ax + a^2 = 0$. Produces a repeated root with $\\Delta = 0$.
&bull; **Difference of Squares** &mdash; $x^2 - a^2 = 0$. Factors as $(x - a)(x + a)$.
&bull; **Leading Coeff $\\neq 1$** &mdash; $ax^2 + bx + c = 0$ with $a > 1$. Tests the general factoring case.
&bull; **No Real Roots** &mdash; constructed with $\\Delta < 0$. The solver flags this case.
&bull; **Non-Zero RHS** &mdash; $x^2 + bx = c$. The solver moves all terms to the left and proceeds.

Roughly 80 percent of generated equations produce clean integer roots; the rest exercise irrational or fractional cases. Loading a template clears the previous solution; click Solve to work the new equation. The methods the solver applies to every template are compared in [three solution methods](!#three-solution-methods).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The exact step sequence depends on which discriminant case applies.

&bull; **Standard Form** &mdash; rewrites the equation as $ax^2 + bx + c = 0$ by moving everything to the left side, with explicit values for $a$, $b$, and $c$.
&bull; **Calculate Discriminant** &mdash; substitutes the coefficients into $\\Delta = b^2 - 4ac$ and shows the arithmetic.
&bull; **Case Routing** &mdash; labels the case as Two Distinct Roots, Repeated Root, or No Real Solutions based on the sign of $\\Delta$.
&bull; **Factor** (when applicable) &mdash; if $\\Delta$ is a perfect square and $a$, $b$, $c$ are integers, the solver attempts the factored form $(px - q)(rx - s) = 0$.
&bull; **Apply Quadratic Formula** &mdash; substitutes into $x = (-b \\pm \\sqrt{\\Delta}) / (2a)$ and shows the numerical result.
&bull; **First Root and Second Root** &mdash; separate steps for each branch of the plus-or-minus sign.

The final answer card at the bottom displays both roots (or the repeated root, or the no-solutions message) along with the discriminant value and whether the answer is exact or approximate. Exact means the discriminant is a perfect square: $x^2 - 2x - 4 = 0$ has $\\Delta = 20$ and the roots $3.236068$ and $-1.236068$ are marked Approximate, while $x^2 + 4x + 4 = 0$ has $\\Delta = 0$ and the repeated root $x = -2$. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. The formula every case rests on is derived in [three solution methods](!#three-solution-methods).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Discriminant — Three Cases`,
    content: `The discriminant $\\Delta = b^2 - 4ac$ is the single number that controls how a quadratic equation behaves. It comes from the radicand of the quadratic formula.

&bull; **$\\Delta > 0$ &mdash; Two distinct real roots.** The parabola crosses the x-axis at two points. The square root of $\\Delta$ is a positive real number, so $-b + \\sqrt{\\Delta}$ and $-b - \\sqrt{\\Delta}$ are different, giving two different roots when divided by $2a$.
&bull; **$\\Delta = 0$ &mdash; One repeated real root.** The parabola touches the x-axis at exactly one point: its vertex. The $\\pm \\sqrt{\\Delta}$ term vanishes, so both branches give the same value $x = -b / (2a)$.
&bull; **$\\Delta < 0$ &mdash; No real solutions.** The parabola never crosses the x-axis. The square root of a negative number is not real (it is imaginary), so the roots exist only in the complex numbers as a conjugate pair.

The discriminant also determines whether the roots are rational. If $a$, $b$, $c$ are integers and $\\Delta$ is a perfect square, both roots are rational and the equation can be factored over the integers.

For coverage of the complex case see **complex roots of quadratics** and **the imaginary unit**.

The three cases are worked through in [the discriminant](!/algebra/equations/quadratic#5) and the link between roots and the graph in [connection to graphing](!/algebra/equations/quadratic#8).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Quadratic Equation?`,
    content: `A quadratic equation in one variable is a polynomial equation of degree 2:

$$ax^2 + bx + c = 0, \\quad a \\neq 0$$

The coefficient $a$ is the leading coefficient and must be nonzero (otherwise the equation reduces to linear). The coefficient $b$ controls the position of the parabola's axis of symmetry; the constant $c$ is the y-intercept of the parabola $y = ax^2 + bx + c$.

Solutions to the equation are the x-coordinates of the points where the parabola crosses (or touches) the x-axis. A parabola can cross the x-axis in zero, one, or two places &mdash; matching the three cases of the discriminant.

The vertex of the parabola sits at $x = -b / (2a)$, with y-coordinate $y_{\\text{vertex}} = c - b^2 / (4a)$. This is the minimum point if $a > 0$ (parabola opens upward) or the maximum if $a < 0$ (opens downward).

Quadratic equations appear in projectile motion, optimization problems, area calculations, financial models with compounding, and any setting where a quantity depends on the square of another.

For deeper coverage see **quadratic functions**, **parabola graph**, and **vertex form**.

The standard form is defined in [definition and standard form](!/algebra/equations/quadratic#1), the place of quadratics among the equation types in [quadratic equations](!/algebra/equations#7), and the vertex and the crossings in [connection to graphing](!/algebra/equations/quadratic#8).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `Three Solution Methods`,
    content: `Three standard methods solve any quadratic equation. The choice depends on the structure of the equation.

&bull; **Factoring** &mdash; rewrite $ax^2 + bx + c$ as $(px + q)(rx + s)$ and use the zero-product property: if a product is zero, at least one factor is zero. This works cleanly only when the roots are rational. The solver attempts factoring whenever $\\Delta$ is a perfect square and the coefficients are integers.

&bull; **Completing the Square** &mdash; rewrite $ax^2 + bx + c = 0$ as $a(x + h)^2 + k = 0$, then isolate the squared term and take the square root. This method derives the quadratic formula and is essential for converting to vertex form. It always works but involves more steps than factoring.

&bull; **Quadratic Formula** &mdash; substitute directly into $x = (-b \\pm \\sqrt{b^2 - 4ac}) / (2a)$. This works for every quadratic equation without needing to recognize special structure. It is the most general method and is what the solver applies in every case (with factoring shown as an additional step when applicable).

For special cases, simpler approaches work:

&bull; If $b = 0$: isolate $x^2$ and take the square root directly.
&bull; If $c = 0$: factor out $x$ to get $x(ax + b) = 0$, so $x = 0$ or $x = -b/a$.
&bull; If the equation is a perfect square trinomial: recognize it directly and use the resulting linear equation.

For comprehensive treatment see **factoring quadratics**, **completing the square**, and **the quadratic formula derivation**.

Each method has its own lesson section: [solving by factoring](!/algebra/equations/quadratic#2), [solving by completing the square](!/algebra/equations/quadratic#3) and [the quadratic formula](!/algebra/equations/quadratic#4); they are compared in [summary of solving methods](!/algebra/equations/quadratic#9).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Quadratic Functions** &mdash; functions of the form $f(x) = ax^2 + bx + c$. The graph is a parabola; the equation $f(x) = 0$ is the corresponding quadratic equation.

**Quadratic Inequalities** &mdash; same form as quadratic equations but with $<$, $>$, $\\leq$, or $\\geq$. Solved by finding the roots first, then using a sign chart over the resulting intervals.

**Vertex Form** &mdash; $y = a(x - h)^2 + k$ where $(h, k)$ is the vertex. Obtained by completing the square. Useful for graphing and optimization.

**Factored Form** &mdash; $y = a(x - r_1)(x - r_2)$ where $r_1$ and $r_2$ are the roots. Available whenever the roots are real.

**Discriminant** &mdash; the quantity $\\Delta = b^2 - 4ac$ that determines the number and nature of the roots.

**Vieta's Formulas** &mdash; relate the coefficients to the roots: $r_1 + r_2 = -b/a$ and $r_1 \\cdot r_2 = c/a$.

**Polynomial Equations of Higher Degree** &mdash; cubic, quartic, and beyond. The polynomial solver handles up to degree 4.

**Complex Roots** &mdash; when $\\Delta < 0$, the roots are complex conjugates of the form $\\alpha \\pm \\beta i$.

The related tools are the [quadratic inequality solver](!/algebra/calculators/inequalities/quadratic), the [polynomial equation solver](!/algebra/calculators/equations/polynomial) and the [linear equation solver](!/algebra/calculators/equations/linear); the lessons are [Vieta](!/algebra/equations/quadratic#6), [reducible equations](!/algebra/equations/quadratic#7) and [definition and degree](!/algebra/equations/polynomial#1) of polynomial equations.`,
    before: ``, after: ``, link: ''
  }
}
    },

    'polynomial': {
      component: 'PolynomialEquationSolver',
      title: "Polynomial Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for polynomial equations up to degree 4. Uses the rational root theorem and synthetic division, with a Newton's-method fallback for irrational roots.",
      name: "Polynomial Equation Solver",
      url: "/algebra/calculators/equations/polynomial",
      h1: "Polynomial Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: 'xⁿ',
      keywords: [
        "polynomial equation solver",
        "polynomial root finder",
        "rational root theorem",
        "synthetic division",
        "cubic equation solver",
        "quartic equation solver",
        "degree 3 polynomial",
        "degree 4 polynomial",
        "Newton's method",
        "polynomial roots calculator"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a polynomial equation?",
    answer: "A polynomial equation sets a polynomial expression equal to zero. The general form is a_n times x to the n plus lower-degree terms equals zero, where n is the degree. The solver handles polynomial equations of degree 1 through 4."
  },
  obj2: {
    question: "What is the rational root theorem?",
    answer: "If a polynomial with integer coefficients has a rational root p divided by q in lowest terms, then p divides the constant term and q divides the leading coefficient. This gives a finite list of candidates that can be checked one by one before resorting to numerical methods."
  },
  obj3: {
    question: "What is synthetic division and why does the solver use it?",
    answer: "Synthetic division is a shortcut for dividing a polynomial by a linear factor x minus r. After finding a root r, dividing by x minus r reduces the polynomial degree by one. Each successful division lowers the problem until what remains is a quadratic or simpler, which can be solved exactly."
  },
  obj4: {
    question: "What happens when no rational roots exist?",
    answer: "If the rational root theorem exhausts all candidates without finding any roots, the solver switches to Newton's method, a numerical iteration that approximates real roots starting from carefully chosen initial guesses. The resulting roots are flagged as approximate rather than exact."
  },
  obj5: {
    question: "Why does the solver limit to degree 4?",
    answer: "Polynomials of degree 4 and below have closed-form solution methods (factoring, the quadratic formula, Cardano's formula, Ferrari's method). For degree 5 and above, the Abel-Ruffini theorem proves no general algebraic formula exists, and any solver would have to be purely numerical."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/polynomial" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/equations/polynomial and algebra/equations.
         Before editing this view, read the instructions and re-run its checks (--view polynomial); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click the **Var**, **Num** and **Op** buttons, the **x²**, **x³**, **x⁴** or **^** power buttons and the brackets, or type on the keyboard; click inside the display to move the caret. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign, or of degree above $4$, is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the steps, from standard form through the rational root theorem and the divisions to the last quadratic, and the answer card lists every real root marked Exact or Approximate; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `When no rational root is left, a Numeric Method step appears and the answer is marked Approximate. [Learn more about the numeric fallback](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one polynomial equation of degree $1$ to $4$ in $x$, $y$ or $n$, moves every term to the left, and reduces the degree step by step: a zero constant term gives the root $0$, then the rational root theorem lists the candidates $\pm p/q$, each root found is divided out, and the quadratic or linear remainder is solved exactly. If no rational root is left at degree $3$ or $4$, Newton's method finds a real root numerically and the answer is marked Approximate. Only real roots are reported. [Learn more about polynomial equations](!#what-is-a-polynomial)`
        }
      },
      demos: {
        'getting-started': {
          title: 'A cubic with three roots, Clear, no real solutions',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK x³, -, 6, x², +, 1, 1, x, -, 6, =, 0\nThe display reads x³ − 6x² + 11x − 6 = 0.', at: 'tr' },
            { click: { button: 'x³', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '6', exact: true } }, { click: { button: 'x²', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: 'x', exact: true } },
            { click: { button: '-', exact: true } }, { click: { button: '6', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { wait: 2800 },
            { say: 'CLICK Solve\nThe rational root theorem finds x = 1, the division leaves a quadratic, and the roots are 1, 2 and 3.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3600 },
            { say: 'CLICK Clear\nThe display and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK x², +, 1, =, 0 and Solve\nNo real solutions.', at: 'tr' },
            { click: { button: 'x²', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3000 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'The power buttons, undo, delete, Solve',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, x³, -, 3, x², -, 8, x, +, 1, 2, =, 0\nThe display reads 2x³ − 3x² − 8x + 12 = 0.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: 'x³', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '3', exact: true } }, { click: { button: 'x²', exact: true } },
            { click: { button: '-', exact: true } }, { click: { button: '8', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { wait: 2800 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 0 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe equals sign before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK =, 0 and Solve\nThe candidates ±p/q include 3/2; the roots are 1.5, 2 and −2.', at: 'tr' },
            { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Cubic (rational roots)\nA random cubic with three integer roots loads.', at: 'tr' },
            { click: { button: 'Cubic (rational roots)' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nRational root, division, quadratic: three roots.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Quartic (rational roots)\nA random degree-4 equation replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'Quartic (rational roots)' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'Four exact roots, then a numeric root',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK x⁴, -, 5, x², +, 4, =, 0 and Solve\nFour roots, 1, −1, 2 and −2, marked Exact.', at: 'tr' },
            { click: { button: 'x⁴', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '5', exact: true } }, { click: { button: 'x²', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '4', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3800 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK x³, -, 2, =, 0 and Solve\nNo rational root: the Numeric Method step and x = 1.259921, marked Approximate.', at: 'tr' },
            { click: { button: 'x³', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'the-solving-strategy-reduce-solve-combine', key: 'obj5', demo: null },
        { id: 'what-is-a-polynomial', key: 'obj6', demo: null },
        { id: 'the-rational-root-theorem', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $x^3 - 6x^2 + 11x - 6 = 0$ and press Enter &mdash; the right panel applies the rational root theorem, finds $x = 1$ as a root, divides by $(x - 1)$ to get a quadratic, and solves to give three roots: $x = 1$, $x = 2$, $x = 3$.
&bull; Click an example template like &quot;Cubic (rational roots)&quot; &mdash; a random cubic with three integer roots loads into the display.
&bull; Use the $x^2$, $x^3$, $x^4$ shortcut buttons to insert the proper Unicode superscripts, or use the caret operator for arbitrary exponents.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. An expression without an equals sign is refused with "Input must be an equation (use = sign)", and a power above $4$ with "Only polynomials up to degree 4 are supported"; $x^2 + 1 = 0$ ends in No real solutions. What counts as a polynomial equation is explained in [what is a polynomial](!#what-is-a-polynomial).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in your equation.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus, equals.
&bull; **Power row** &mdash; $x^2$, $x^3$, $x^4$ shortcut buttons (insert proper superscript characters), caret for any exponent, and bracket buttons.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division (auto-converted on display), and press Enter to solve. You can paste Unicode superscript characters &mdash; the tokenizer recognizes them as power operations.

**Ctrl+Z** undoes up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the one after it. The Clear button empties the display entirely; the curved-arrow button steps through the undo stack one edit at a time; the ⌫ button deletes the character before the caret. The $x^2$, $x^3$ and $x^4$ buttons insert the variable together with its power, so $2x^3$ is typed as $2$ followed by the $x^3$ button. Why integer powers are all a polynomial allows is explained in [what is a polynomial](!#what-is-a-polynomial).`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking again produces a new random version.

&bull; **Linear** &mdash; $ax + b = 0$. Single integer solution.
&bull; **Quadratic (factorable)** &mdash; $x^2 + bx + c = 0$ with integer roots. Tests rational root extraction at degree 2.
&bull; **Quadratic (general)** &mdash; $ax^2 + bx + c = 0$ with arbitrary integer coefficients. May or may not factor over the integers.
&bull; **Cubic (rational roots)** &mdash; $x^3 + bx^2 + cx + d = 0$ constructed from three integer roots. Exercises the full rational root + synthetic division pipeline.
&bull; **Cubic (leading coeff)** &mdash; $ax^3 + \\ldots = 0$ with $a > 1$. Tests rational root candidates of the form $p/q$ with $q > 1$.
&bull; **Quartic (rational roots)** &mdash; degree-4 equation with four rational roots. Two synthetic divisions, then a quadratic.
&bull; **No Real Roots** &mdash; $x^2 + c = 0$ with $c > 0$. The solver flags negative discriminant.
&bull; **Perfect Square** &mdash; $(x + a)^2 = 0$ expanded. Produces a repeated root.

Roughly 80 percent of generated equations have clean integer solutions; the rest exercise rational, irrational, or numerical cases. Loading a template clears the previous solution; click Solve to work the new equation. The pipeline applied to every template is described in [the solving strategy](!#the-solving-strategy-reduce-solve-combine).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The step sequence depends on the degree and which roots the solver finds.

&bull; **Standard Form** &mdash; moves everything to the left side and writes the polynomial as $a_n x^n + \\ldots + a_0 = 0$.
&bull; **Factor Out Variable** &mdash; if the constant term is zero, $x = 0$ is immediately a root; the solver factors out $x$ to reduce the degree.
&bull; **Rational Root Theorem** &mdash; lists the candidate roots as $\\pm$(factors of constant)/(factors of leading coefficient) before testing them.
&bull; **Rational Root Found** &mdash; reports each integer or rational root located by direct substitution.
&bull; **After Division** &mdash; shows the quotient polynomial after dividing out $(x - r)$ via synthetic division.
&bull; **Numeric Method** &mdash; appears when no further rational roots exist; switches to Newton's method.
&bull; **Quadratic Formula** &mdash; applied to the final quadratic factor once the degree is reduced to 2.

The final answer card lists every root found. If at least one root required numerical approximation, the entire answer is flagged as approximate: $x^4 - 5x^2 + 4 = 0$ gives the four roots $1$, $-1$, $2$, $-2$ marked Exact, while $x^3 - 2 = 0$ has no rational root, so the Numeric Method step appears and the answer $1.259921$ is marked Approximate. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. The theorem behind the candidate list is stated in [the rational root theorem](!#the-rational-root-theorem).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Solving Strategy — Reduce, Solve, Combine`,
    content: `The solver follows a single recursive strategy: reduce the polynomial's degree until it can be solved exactly, then combine the roots from each reduction step.

&bull; **Step 1: Drop trivial zero roots.** If the constant term is zero, $x$ divides the polynomial, so $x = 0$ is a root. Factor it out, reducing the degree.

&bull; **Step 2: Apply the rational root theorem at degree 3 and 4.** Enumerate candidates as $\\pm p/q$ where $p$ divides the constant and $q$ divides the leading coefficient. Test each candidate by direct substitution. Each rational root found is divided out via synthetic division, reducing the degree.

&bull; **Step 3: Once the degree is at most 2, solve exactly.** A linear remainder gives a single root by isolation; a quadratic remainder is solved by the discriminant. Both produce exact symbolic answers.

&bull; **Step 4 (fallback): Newton's method.** If the polynomial still has degree 3 or higher after the rational root pass, no further closed-form factor exists over the rationals. The solver tries Newton's iteration from a fixed grid of starting points, isolates one real root numerically, divides it out, and recurses.

This pipeline handles every polynomial up to degree 4 the solver supports. Polynomials with all rational roots resolve exactly; mixed cases produce some exact and some approximate roots; pure-irrational cases give all approximate roots.

The degree-by-degree methods are set out in [solving cubic equations](!/algebra/equations/polynomial#5) and [solving quartic equations](!/algebra/equations/polynomial#6); why the strategy stops at degree $4$ is explained in [degree five and beyond](!/algebra/equations/polynomial#7).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Polynomial?`,
    content: `A polynomial in one variable $x$ is a finite sum of terms, each consisting of a numerical coefficient times a non-negative integer power of $x$:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \\cdots + a_1 x + a_0$$

The largest exponent $n$ with $a_n \\neq 0$ is the **degree** of the polynomial. The coefficient $a_n$ is the **leading coefficient**; $a_0$ is the **constant term**.

A polynomial equation sets $P(x) = 0$. Its solutions are the **roots** of $P$, also called zeros or x-intercepts of the graph $y = P(x)$.

The fundamental theorem of algebra guarantees a polynomial of degree $n$ has exactly $n$ roots when counted with multiplicity in the complex numbers. Over the real numbers, a polynomial can have fewer: some roots may be complex conjugate pairs. The solver returns only real roots.

Polynomials of small degree have special names: degree 1 is linear, degree 2 is quadratic, degree 3 is cubic, degree 4 is quartic.

For deeper coverage see **polynomials**, **polynomial functions**, and **fundamental theorem of algebra**.

The degree and the standard form are defined in [definition and degree](!/algebra/equations/polynomial#1), the count of roots in [the fundamental theorem of algebra](!/algebra/equations/polynomial#2), and repeated roots in [root multiplicity](!/algebra/equations/polynomial#8); the place of polynomial equations among the equation types is [polynomial equations](!/algebra/equations#8).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Rational Root Theorem`,
    content: `The rational root theorem is the key tool for finding exact roots of polynomial equations with integer coefficients.

**Statement.** If a polynomial $a_n x^n + \\cdots + a_0$ with integer coefficients has a rational root $p/q$ in lowest terms, then $p$ divides $a_0$ (the constant term) and $q$ divides $a_n$ (the leading coefficient).

**Consequence.** The set of candidate rational roots is finite. List all divisors $p$ of $|a_0|$ and all divisors $q$ of $|a_n|$, then enumerate $\\pm p/q$. Every rational root must appear in this list. Test each candidate by plugging it in: if $P(p/q) = 0$, it is a root.

**Example.** For $2x^3 - 3x^2 - 8x + 12 = 0$, divisors of 12 are $\\{1, 2, 3, 4, 6, 12\\}$ and divisors of 2 are $\\{1, 2\\}$. Candidates are $\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12, \\pm 1/2, \\pm 3/2$. Testing reveals $x = 3/2$, $x = 2$, $x = -2$ as the three roots.

**Limitations.** The theorem says nothing about irrational roots. If a polynomial has only irrational or complex roots, the candidate list returns no hits and a numerical method is needed.

For comprehensive treatment see **rational root theorem**, **synthetic division**, and **polynomial factoring**.

The theorem is proved in [the rational root theorem](!/algebra/equations/polynomial#4), the division that follows each root in [the factor theorem and remainder theorem](!/algebra/equations/polynomial#3), and the whole procedure is summarised in [summary by degree](!/algebra/equations/polynomial#10).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Polynomial Functions** &mdash; functions of the form $f(x) = a_n x^n + \\cdots + a_0$. The equation $f(x) = 0$ identifies the x-intercepts.

**Polynomial Inequalities** &mdash; same form as polynomial equations but with $<$, $>$, $\\leq$, or $\\geq$. Solved by finding the roots first, then sign-chart analysis.

**Linear Equations** &mdash; degree-1 polynomial equations. Always exactly one solution.

**Quadratic Equations** &mdash; degree-2 polynomial equations. Solved by factoring, completing the square, or the quadratic formula.

**Cubic Equations** &mdash; degree-3 polynomial equations. Always have at least one real root.

**Quartic Equations** &mdash; degree-4 polynomial equations. Solvable in closed form via Ferrari's method.

**Synthetic Division** &mdash; shortcut for dividing a polynomial by a linear factor $x - r$, used after each rational root is found.

**Newton's Method** &mdash; iterative numerical method for approximating roots of any differentiable function: $x_{n+1} = x_n - f(x_n) / f'(x_n)$.

**Fundamental Theorem of Algebra** &mdash; every non-constant polynomial of degree $n$ has exactly $n$ roots over the complex numbers.

**Vieta's Formulas** &mdash; relate the coefficients of a polynomial to symmetric functions of its roots (sum, sum of pairwise products, and so on).

The related tools are the [linear equation solver](!/algebra/calculators/equations/linear), the [quadratic equation solver](!/algebra/calculators/equations/quadratic), the [factoring calculator](!/algebra/calculators/factoring) and the [polynomial calculator](!/algebra/calculators/polynomial); the lessons are [relationships between roots and coefficients](!/algebra/equations/polynomial#9) and [degree five and beyond](!/algebra/equations/polynomial#7).`,
    before: ``, after: ``, link: ''
  }
}
    },

    'rational': {
      component: 'RationalEquationSolver',
      title: "Rational Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for rational equations with the variable in denominators. Identifies restricted values, clears fractions via the LCD, and flags extraneous solutions.",
      name: "Rational Equation Solver",
      url: "/algebra/calculators/equations/rational",
      h1: "Rational Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: '¹⁄ₓ',
      keywords: [
        "rational equation solver",
        "fraction equation solver",
        "variable in denominator",
        "least common denominator",
        "LCD method",
        "extraneous solutions",
        "restricted values",
        "rational equation calculator",
        "clear fractions equation"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a rational equation?",
    answer: "A rational equation contains one or more fractions where the variable appears in at least one denominator. Examples include 3 divided by x equals 6, and (x + 1) divided by (x - 2) equals 4. The general goal is to clear the fractions and reduce the equation to a polynomial that can be solved by standard methods."
  },
  obj2: {
    question: "What is the LCD method?",
    answer: "The least common denominator is the smallest polynomial expression that every denominator divides into evenly. Multiplying both sides of the equation by the LCD cancels all denominators, leaving a polynomial equation. The solver computes the LCD by taking the product of unique denominator factors."
  },
  obj3: {
    question: "What are restricted values?",
    answer: "A restricted value is any number that makes a denominator zero. Division by zero is undefined, so these values are excluded from the domain. The solver identifies all restrictions before solving and checks every candidate solution against them. The variable can never equal a restricted value."
  },
  obj4: {
    question: "What is an extraneous solution?",
    answer: "An extraneous solution is a value that satisfies the polynomial obtained after clearing fractions but violates the original equation by making a denominator zero. Extraneous solutions arise because multiplying by an expression that could be zero is not a reversible operation. Every candidate must be checked against the restricted values."
  },
  obj5: {
    question: "Why do I need to check solutions in rational equations?",
    answer: "Multiplying both sides by the LCD can introduce roots that did not exist in the original equation. These extraneous roots are valid solutions of the polynomial but invalid for the original rational equation. Checking each candidate against the restricted-value list catches them before they are reported as final answers."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/rational" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/equations/rational and algebra/equations.
         Before editing this view, read the instructions and re-run its checks (--view rational); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click the **Var**, **Num** and **Op** buttons, the **x²** or **^** power buttons and the brackets, or type on the keyboard; the ÷ button writes a fraction, so wrap a multi-term denominator in brackets. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign, or without a variable in a denominator, is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the steps from the restricted values and the LCD to the candidates and the check, and the answer card gives the valid roots; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `A candidate that makes a denominator zero is flagged as extraneous; when none is left the answer is No solution. [Learn more about extraneous candidates](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one equation in $x$, $y$ or $n$ with the variable in at least one denominator. It first lists the restricted values that make a denominator zero, then multiplies both sides by the least common denominator to clear the fractions, solves the polynomial that remains (up to degree $4$), and checks every candidate against the restricted values; a candidate that makes a denominator zero is extraneous and dropped. Each move is listed as a step on the right. [Learn more about rational equations](!#what-is-a-rational-equation)`
        }
      },
      demos: {
        'getting-started': {
          title: '1/x + 1/2 = 3/4, Solve, Clear, a reciprocal',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 1, ÷, x, +, 1, ÷, 2, =, 3, ÷, 4\nThe display reads 1/x + 1/2 = 3/4 with the fractions stacked.', at: 'tr' },
            { click: { button: '1', exact: true } }, { click: { button: '÷', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } },
            { click: { button: '1', exact: true } }, { click: { button: '÷', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: '=', exact: true } },
            { click: { button: '3', exact: true } }, { click: { button: '÷', exact: true } }, { click: { button: '4', exact: true } },
            { wait: 2800 },
            { say: 'CLICK Solve\nRestriction x ≠ 0, LCD 4x, the cleared equation, and x = 4 passes the check.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3600 },
            { say: 'CLICK Clear\nThe display and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK 3, ÷, x, =, 6 and Solve\nx = 0.5.', at: 'tr' },
            { click: { button: '3', exact: true } }, { click: { button: '÷', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '6', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3000 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'Bracketed denominators, undo, delete, an extraneous root',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK x, ÷, (, x, -, 3, ), =, 3, ÷, (, x, -, 3, ), +, 2\nThe display reads x/(x − 3) = 3/(x − 3) + 2.', at: 'tr' },
            { click: { button: 'x', exact: true } }, { click: { button: '÷', exact: true } }, { click: { button: '(', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '3', exact: true } }, { click: { button: ')', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '3', exact: true } }, { click: { button: '÷', exact: true } }, { click: { button: '(', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '3', exact: true } }, { click: { button: ')', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '2', exact: true } },
            { wait: 3000 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 2 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe plus sign before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK +, 2 and Solve\nThe candidate x = 3 makes a denominator zero: extraneous, No solution.', at: 'tr' },
            { click: { button: '+', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Sum of Fractions\nA random 1/x + 1/(x + a) = b loads.', at: 'tr' },
            { click: { button: 'Sum of Fractions' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nTwo denominators, their product as the LCD, a quadratic, the check.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3600 },
            { say: 'CLICK Quadratic After Clearing\nA random x + a/x = b replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'Quadratic After Clearing' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'A quadratic after clearing, then a contradiction',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK x, +, 6, ÷, x, =, 5 and Solve\nLCD x, then x² − 5x + 6 = 0: x = 2 or x = 3, both valid.', at: 'tr' },
            { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '6', exact: true } }, { click: { button: '÷', exact: true } },
            { click: { button: 'x', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3800 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK 1, ÷, x, =, 0 and Solve\nClearing gives 1 = 0: a contradiction, No solution.', at: 'tr' },
            { click: { button: '1', exact: true } }, { click: { button: '÷', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3200 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'the-lcd-method-why-it-works', key: 'obj5', demo: null },
        { id: 'what-is-a-rational-equation', key: 'obj6', demo: null },
        { id: 'the-solving-process-explained', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $1/x + 1/2 = 3/4$ and press Enter &mdash; the right panel identifies the LCD as $4x$, multiplies through, solves the resulting linear equation, and confirms $x = 4$ does not violate the restriction $x \\neq 0$.
&bull; Click an example template like &quot;Has Extraneous Root&quot; &mdash; the solver finds a candidate root that turns out to make a denominator zero and rejects it.
&bull; Enter $x / (x - 3) = 3 / (x - 3) + 2$ to see the extraneous-solution mechanic in action.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. An expression without an equals sign is refused with "Input must be an equation (use = sign)", and an equation with no variable in a denominator with "This is not a rational equation". A simple reciprocal such as $3 / x = 6$ gives $x = 0.5$. What makes an equation rational is explained in [what is a rational equation](!#what-is-a-rational-equation).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in your equation.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus, equals.
&bull; **Power and bracket row** &mdash; $x^2$ shortcut, caret for arbitrary exponents, and parentheses for grouping denominators.

The division symbol always introduces a fraction in the display, with the numerator above and the denominator below. For multi-term denominators wrap them in parentheses: $1/(x + 3)$ not $1/x + 3$.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division (auto-converted on display), and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the one after it. The Clear button empties the display entirely; the curved-arrow button steps through the undo stack one edit at a time; the ⌫ button deletes the character before the caret. Why the denominators decide which values are allowed is explained in [what is a rational equation](!#what-is-a-rational-equation).`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking again produces a new random version.

&bull; **Simple Reciprocal** &mdash; $a / x = b$. One variable denominator; cross-multiplication gives $x = a / b$.
&bull; **Linear Denominator** &mdash; $a / (bx + c) = d$. Slightly more complex denominator; same cross-multiplication approach.
&bull; **Proportion** &mdash; $a / (x + b) = c / (x + d)$. Two fractions equated; cross-multiply directly.
&bull; **Sum of Fractions** &mdash; $1/x + 1/(x + a) = b$. Two different denominators; the LCD is their product.
&bull; **Has Extraneous Root** &mdash; constructed so a candidate solution equals a restricted value. Tests the extraneous-check step.
&bull; **Quadratic After Clearing** &mdash; $x + a/x = b$. Multiplying through by $x$ yields a quadratic.
&bull; **Variable Numerator** &mdash; $(ax + b) / (cx + d) = e$. Standard rational form with linear numerator and denominator.
&bull; **No Solution** &mdash; $1/(x - a) = 1/(x - a) + b$ for $b \\neq 0$. Reduces to $0 = b$, a contradiction.

Roughly 80 percent of generated equations produce clean integer or rational solutions; the rest exercise irrational and extraneous cases. Loading a template clears the previous solution; click Solve to work the new equation. The four steps applied to every template are listed in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The step sequence is fixed for rational equations.

&bull; **Identify Restrictions** &mdash; lists the values of the variable that would make any denominator zero, computed by solving each denominator for zero.
&bull; **Find LCD** &mdash; displays the least common denominator as a polynomial expression.
&bull; **Multiply Both Sides by LCD** &mdash; shows the polynomial equation that results after clearing all fractions.
&bull; **Solve Polynomial** &mdash; routes the cleared equation through the polynomial solver (linear, quadratic, or higher via rational root theorem).
&bull; **Candidate Solutions** &mdash; lists the raw roots of the polynomial before checking.
&bull; **Check for Extraneous Solutions** &mdash; compares each candidate against the restricted values; flags any matches as extraneous.
&bull; **Solution** &mdash; reports the valid roots that remain after the extraneous check.

If every candidate turns out to be extraneous, the equation has no solution and the final answer card displays the contradiction with a cross mark. $x + 6 / x = 5$ clears to $x^2 - 5x + 6 = 0$ and ends with $x = 2$ or $x = 3$; $1 / x = 0$ clears to $1 = 0$ and ends in No solution. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. Why clearing the fractions is allowed, and what it can add, is explained in [the LCD method](!#the-lcd-method-why-it-works).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The LCD Method — Why It Works`,
    content: `Multiplying both sides of an equation by a nonzero quantity preserves the solution set. The LCD is the smallest expression that turns every denominator into a polynomial, so multiplying by it clears all fractions in one step.

**Construction.** If the unique denominators in the equation are $d_1, d_2, \\ldots, d_k$, the solver builds the LCD as their product $d_1 \\cdot d_2 \\cdots d_k$ (factoring out common factors when feasible). For each fraction $n_i / d_i$, multiplying by the LCD leaves $n_i \\cdot (\\text{LCD} / d_i)$ &mdash; a polynomial.

**Example.** For $\\frac{1}{x} + \\frac{1}{x + 2} = \\frac{3}{4}$, the unique denominators are $x$, $x + 2$, and $4$, so $\\text{LCD} = 4x(x + 2)$. Multiplying every term by $4x(x + 2)$:

$$4(x + 2) + 4x = 3x(x + 2)$$

This is a polynomial equation, solvable by standard methods.

**The catch.** Multiplying by an expression that can equal zero is not an equivalence operation. If the LCD evaluates to zero at some candidate solution, that candidate was created by the multiplication and is not a true solution of the original equation. This is why the extraneous-check step matters.

For deeper coverage see **least common denominator**, **clearing fractions**, and **equivalent equations**.

The method is set out in [solving by clearing denominators](!/algebra/equations/rational#3), the catch in [extraneous solutions](!/algebra/equations/rational#4), and the rule it rests on in [equivalent equations](!/algebra/equations#4).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Rational Equation?`,
    content: `A rational expression is a ratio of two polynomials:

$$\\frac{P(x)}{Q(x)}$$

where $P$ and $Q$ are polynomials and $Q(x) \\neq 0$. A rational equation sets one rational expression equal to another, or to a polynomial:

$$\\frac{P_1(x)}{Q_1(x)} + \\frac{P_2(x)}{Q_2(x)} + \\cdots = R(x)$$

The defining feature: the variable appears in at least one denominator. This makes the equation fundamentally different from a polynomial equation because the domain is restricted &mdash; any value that makes a denominator zero must be excluded.

The graph of $y = P(x) / Q(x)$ typically has vertical asymptotes at the restricted values, and may have horizontal or slant asymptotes far from the origin. Rational equations correspond to finding where two such graphs intersect, or where one crosses a constant level.

Rational equations appear in physics (lens formulas, parallel resistors), chemistry (concentrations, reaction rates), economics (average cost per unit), and any setting where two quantities are combined as inverses or ratios.

For deeper coverage see **rational expressions**, **rational functions**, and **vertical asymptotes**.

The form is defined in [definition](!/algebra/equations/rational#1), the excluded values in [domain restrictions](!/algebra/equations/rational#2), and the place of rational equations among the equation types in [rational equations](!/algebra/equations#9).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Four steps solve any rational equation. The first three are mechanical; the fourth is essential and easily forgotten.

&bull; **Step 1: Identify the restricted values.** For each denominator, set it equal to zero and solve. These values are excluded from the domain. Skipping this step means missing the check that distinguishes a valid solution from an extraneous one.

&bull; **Step 2: Compute the LCD.** The least common denominator is the smallest polynomial divisible by every denominator. For distinct denominators with no common factors, the LCD is simply their product.

&bull; **Step 3: Multiply both sides by the LCD.** Every fraction becomes a polynomial. The resulting equation is a polynomial equation of degree equal to (or less than) the degree of the LCD.

&bull; **Step 4: Solve and check.** Solve the polynomial equation by standard methods. For each candidate root, verify that it does not equal any restricted value. Reject any root that does &mdash; it is extraneous. The remaining roots are the true solutions.

If the polynomial has no real roots, the equation has no solution. If every root is extraneous, the equation also has no solution.

For comprehensive treatment see **solving rational equations**, **extraneous solutions**, and **cross multiplication**.

The steps are worked in [solving by clearing denominators](!/algebra/equations/rational#3) and [extraneous solutions](!/algebra/equations/rational#4); the proportion shortcut is [proportions and cross-multiplication](!/algebra/equations/rational#7), and the subtypes are summarised in [summary of rational equation subtypes](!/algebra/equations/rational#9).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Rational Functions** &mdash; functions of the form $f(x) = P(x) / Q(x)$ where $P$ and $Q$ are polynomials. Have vertical asymptotes at zeros of $Q$ that are not also zeros of $P$.

**Rational Inequalities** &mdash; same form as rational equations but with $<$, $>$, $\\leq$, or $\\geq$. Solved by finding zeros of both numerator and denominator, then sign-chart analysis on the intervals.

**Vertical Asymptotes** &mdash; vertical lines $x = a$ where the function value tends to $\\pm \\infty$. Occur at restricted values that are not removable.

**Cross Multiplication** &mdash; for the special form $a/b = c/d$, multiplying gives $ad = bc$. Works only for proportions (two fractions equated, nothing else).

**Polynomial Equations** &mdash; the equation type that results from clearing fractions. The solver routes the cleared equation through the polynomial solver for the final step.

**Partial Fractions** &mdash; a decomposition that runs in the opposite direction: breaking a single rational expression into a sum of simpler fractions. Used in calculus for integration.

**Domain Restrictions** &mdash; the set of values a variable cannot take. For rational expressions, the domain excludes all zeros of the denominator.

**Extraneous Roots** &mdash; candidate solutions introduced by an operation that is not equivalence-preserving. Common in rational and radical equations.

The related tools are the [polynomial equation solver](!/algebra/calculators/equations/polynomial), the [rational inequality solver](!/algebra/calculators/inequalities/rational) and the [radical equation solver](!/algebra/calculators/equations/radical); the lessons are [equations with monomial denominators](!/algebra/equations/rational#5), [equations with polynomial denominators](!/algebra/equations/rational#6) and [equations reducible to rational form](!/algebra/equations/rational#8).`,
    before: ``, after: ``, link: ''
  }
}
    },

    'radical': {
      component: 'RadicalEquationSolver',
      title: "Radical Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for equations containing square roots, cube roots, and higher-index radicals. Isolates the radical, raises both sides to the appropriate power, and verifies every candidate.",
      name: "Radical Equation Solver",
      url: "/algebra/calculators/equations/radical",
      h1: "Radical Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: '√',
      keywords: [
        "radical equation solver",
        "square root equation",
        "cube root equation",
        "nth root equation",
        "solve radical equations",
        "isolate the radical",
        "extraneous solutions radical",
        "raise both sides to a power",
        "radical equation calculator"
      ],
     faqQuestions: {
  obj1: {
    question: "What is a radical equation?",
    answer: "A radical equation contains the variable under a radical sign such as a square root, cube root, or fourth root. Examples include the square root of x equals 5, and the cube root of (2x + 1) equals 3. Solving requires isolating the radical and raising both sides to a power that cancels it."
  },
  obj2: {
    question: "How do you solve a radical equation?",
    answer: "First isolate the radical on one side of the equation. Then raise both sides to a power equal to the radical's index: square both sides for a square root, cube both sides for a cube root, and so on. The resulting equation is polynomial and can be solved by standard methods."
  },
  obj3: {
    question: "Why do radical equations have extraneous solutions?",
    answer: "Raising both sides of an equation to an even power is not an equivalence operation because both a positive and a negative value give the same even power. This can introduce candidate solutions that satisfy the squared equation but fail the original. Every candidate must be checked by substitution."
  },
  obj4: {
    question: "What is the difference between even and odd-index radicals?",
    answer: "Even-index radicals such as square roots and fourth roots are defined only for non-negative inputs, and they always return non-negative values. Odd-index radicals such as cube roots accept any real input and return a real output of the same sign. Extraneous solutions arise mainly from even radicals."
  },
  obj5: {
    question: "How do I enter a radical in the solver?",
    answer: "Use the radical buttons in the Rad row to insert the square root, cube root, or fourth root symbol. Then type the radicand or wrap it in parentheses. For example, square root of (2x + 1) is entered by clicking the square root button, an opening parenthesis, then typing 2x + 1, then a closing parenthesis."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/radical" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/roots and algebra/equations.
         Before editing this view, read the instructions and re-run its checks (--view radical); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click the **Var**, **Num** and **Op** buttons, the **Rad** buttons for a square, cube or fourth root, and the brackets, or type on the keyboard; wrap a multi-term radicand in brackets. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign or without a radical is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the steps from isolating the radical and raising both sides to a power to the check, and the answer card gives the valid roots marked Exact or Approximate; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `A candidate that fails the original equation is flagged as extraneous; an even root set equal to a negative number ends in No real solution at once. [Learn more about the check](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one equation in $x$, $y$ or $n$ with the variable under a square, cube or fourth root. It isolates the radical by moving constants and dividing out a coefficient, raises both sides to the power of the index, solves the linear or quadratic equation that remains, and substitutes every candidate back into the original equation; a candidate that fails is extraneous and dropped. An even root set equal to a negative number is reported as having no real solution before any squaring. [Learn more about radical equations](!#what-is-a-radical-equation)`
        }
      },
      demos: {
        'getting-started': {
          title: '√(2x + 1) = 3, Solve, Clear, no real solution',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK √, (, 2, x, +, 1, ), =, 3\nThe display reads √(2x + 1) = 3.', at: 'tr' },
            { click: { button: '√', exact: true } }, { click: { button: '(', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '3', exact: true } },
            { wait: 2600 },
            { say: 'CLICK Solve\nBoth sides squared: 2x + 1 = 9, so x = 4, and the check passes.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Clear\nThe display and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK √, x, +, 5, =, 2 and Solve\nIsolated, √x = −3: No real solution.', at: 'tr' },
            { click: { button: '√', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3000 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'A cube root, undo, delete, Solve',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK ∛, (, x, -, 1, ), =, 2\nThe display reads ∛(x − 1) = 2.', at: 'tr' },
            { click: { button: '∛', exact: true } }, { click: { button: '(', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } },
            { click: { button: '1', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } },
            { wait: 2600 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 2 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe equals sign before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK =, 2 and Solve\nBoth sides cubed: x − 1 = 8, so x = 9.', at: 'tr' },
            { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3200 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Linear Radicand\nA random √(ax + b) = c loads.', at: 'tr' },
            { click: { button: 'Linear Radicand' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nSquare both sides, solve the linear equation, check.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Extraneous Trap\nA √x equal to a negative number replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'Extraneous Trap' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'A coefficient to divide out, then a quadratic radicand',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, ×, √, x, =, 8 and Solve\nIsolate Radical Term divides by 2: √x = 4, so x = 16, Exact.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: '√', exact: true } }, { click: { button: 'x', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '8', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK √, (, x, ^, 2, +, 9, ), =, 5 and Solve\nSquared: x² + 9 = 25, so x = 4 or x = −4; both pass the check.', at: 'tr' },
            { click: { button: '√', exact: true } }, { click: { button: '(', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '^', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '9', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'extraneous-solutions-why-and-how-to-check', key: 'obj5', demo: null },
        { id: 'what-is-a-radical-equation', key: 'obj6', demo: null },
        { id: 'the-solving-process-explained', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Click the square root button, type $(2x + 1) = 3$, and press Enter &mdash; the right panel squares both sides to get $2x + 1 = 9$, solves to $x = 4$, and substitutes back to confirm the answer is valid.
&bull; Click the &quot;Extraneous Trap&quot; example template &mdash; the solver finds the candidate, checks it against the original equation, and rejects it.
&bull; Try the cube root button on $-8$ to see odd-index handling: cube roots accept negative inputs, unlike square roots.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The Rad row offers square root, cube root, and fourth root buttons. An expression without an equals sign is refused with "Input must be an equation (use = sign)", and one without a radical with "No radical found in the equation". $\\sqrt{x} + 5 = 2$ isolates to $\\sqrt{x} = -3$ and ends in No real solution without squaring. What makes an equation radical is explained in [what is a radical equation](!#what-is-a-radical-equation).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in your equation.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; the caret operator, multiplication, division, plus, minus, and equals.
&bull; **Radical row** &mdash; square root, cube root, and fourth root symbols.
&bull; **Bracket row** &mdash; parentheses for grouping the radicand or denominators.

When entering a multi-term radicand, wrap it in parentheses: $\\sqrt{2x + 1}$ is entered as square root then open parenthesis then $2x + 1$ then close parenthesis. A single-term radicand can omit the parentheses.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, and press Enter to solve. You can also paste the Unicode radical characters directly. **Ctrl+Z** undoes up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the one after it. The Clear button empties the display entirely; the curved-arrow button steps through the undo stack one edit at a time; the ⌫ button deletes the character before the caret. Why the index of the radical decides the domain is explained in [what is a radical equation](!#what-is-a-radical-equation).`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking again produces a new random version.

&bull; **Simple** &mdash; $\\sqrt{x} = c$. The most basic form; squaring gives $x = c^2$.
&bull; **Linear Radicand** &mdash; $\\sqrt{ax + b} = c$. Squaring gives a linear equation in $x$.
&bull; **With Constant** &mdash; $\\sqrt{x} + c = d$. Requires isolating the radical first by subtracting $c$ from both sides.
&bull; **With Coefficient** &mdash; $a \\cdot \\sqrt{x} = c$. Requires dividing both sides by $a$ before squaring.
&bull; **Cube Root** &mdash; $\\sqrt[3]{x} = c$. Cubing both sides eliminates the radical; $c$ can be negative.
&bull; **Cube Root Linear** &mdash; $\\sqrt[3]{ax + b} = c$. Combines cube root and linear radicand.
&bull; **Radical = Radical** &mdash; $\\sqrt{ax + b} = \\sqrt{cx + d}$. Squaring eliminates both radicals in one step.
&bull; **Extraneous Trap** &mdash; $\\sqrt{x} = $ negative. The solver detects this case immediately without squaring.

Roughly 80 percent of generated equations produce clean integer solutions; the rest exercise the extraneous-check pathway. Loading a template clears the previous solution; click Solve to work the new equation. The four steps applied to every template are listed in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The step sequence depends on which structural case applies.

&bull; **Rearrange Equation** &mdash; if the radical is on the right side, the solver swaps sides for clarity.
&bull; **Evaluate Constant** &mdash; reduces the non-radical side to a single number if it contains arithmetic.
&bull; **Isolate Radical Term** &mdash; subtracts an additive constant or divides by a coefficient to leave the radical alone on one side.
&bull; **Square / Cube / Raise Both Sides** &mdash; raises both sides to the index of the radical, eliminating it.
&bull; **Solve Linear Equation** or **Solve Quadratic** &mdash; handles the polynomial that results from the previous step.
&bull; **Check for Extraneous Solutions** &mdash; substitutes each candidate back into the original equation and confirms both sides match.

For even-index radicals, the solver also flags the immediate no-solution case: if the radical equals a negative number after isolation, the equation has no real solution and the squaring step is skipped entirely. $2 \\cdot \\sqrt{x} = 8$ is divided by $2$ before squaring and gives $x = 16$; $\\sqrt{x^2 + 9} = 5$ squares to $x^2 + 9 = 25$ and gives $x = 4$ or $x = -4$, both passing the check. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. Why the check is needed is explained in [extraneous solutions](!#extraneous-solutions-why-and-how-to-check).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Extraneous Solutions — Why and How to Check`,
    content: `Squaring both sides of an equation is a powerful move because it eliminates a square root, but it loses information about sign.

**The mechanism.** Consider $\\sqrt{x} = -3$. Squaring gives $x = 9$. But $\\sqrt{9} = 3$, not $-3$ &mdash; the original equation has no solution. The squaring introduced $x = 9$ because both $3$ and $-3$ have square $9$.

**The rule.** Every candidate produced after squaring must be substituted into the original equation to confirm it works. A candidate that fails this check is **extraneous** and must be discarded.

**When does it happen?**

&bull; **Even-index radicals only.** Squaring or raising to the fourth power loses sign information. Cube roots and fifth roots are equivalence-preserving because they are odd functions.
&bull; **Whenever the isolated radical equals a negative.** No real radical of even index equals a negative number, so any candidate from squaring such an equation is extraneous.
&bull; **Whenever the radicand becomes negative at the candidate.** A real square root requires a non-negative radicand, so if a candidate makes the radicand negative, it is extraneous.

The solver performs the check automatically by evaluating both sides of the original equation at each candidate. If they match (within numerical tolerance), the candidate is valid. Otherwise the candidate is flagged as extraneous and excluded from the final answer.

For deeper coverage see **extraneous solutions** and **squaring both sides**.

Why an even root is never negative is set out in [principal roots](!/algebra/roots#3) and [when radicands are negative](!/algebra/roots#9); the check itself is part of [equations with radicals](!/algebra/roots#7).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Radical Equation?`,
    content: `A radical equation contains one or more radical expressions involving the variable. The general form for a single radical is:

$$\\sqrt[n]{f(x)} = g(x)$$

where $n$ is the index (2 for square root, 3 for cube root, and so on) and $f(x)$ is the radicand &mdash; the expression under the radical. The other side $g(x)$ may be a constant, another radical, or any other expression.

**Index and domain.**

&bull; **Even index** ($n = 2, 4, 6, \\ldots$): the radicand must be non-negative, and the radical always returns a non-negative value. Domain restrictions matter.
&bull; **Odd index** ($n = 3, 5, 7, \\ldots$): the radicand can be any real number, and the radical preserves sign. No domain restrictions from the radical itself.

The graph of $y = \\sqrt{x}$ is a half-parabola starting at the origin and increasing slowly; $y = \\sqrt[3]{x}$ is an S-shaped curve passing through the origin and defined for all $x$.

Radical equations appear in geometry (distance formulas, Pythagorean theorem), physics (orbital periods, pendulum periods), and any context where a quantity depends on the root of another quantity.

For deeper coverage see **radicals**, **nth root**, and **rational exponents**.

Roots are defined in [what is a root](!/algebra/roots#1) and [square roots, cube roots, and beyond](!/algebra/roots#2), the notation in [radical and exponent notation](!/algebra/roots#4), and the graphs in [radicals as functions](!/algebra/roots#8).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Four steps solve a radical equation. The first three transform the equation; the fourth verifies the result.

&bull; **Step 1: Isolate the radical.** Move every non-radical term to the other side. If the equation contains $\\sqrt{x} + 3 = 7$, subtract 3 to get $\\sqrt{x} = 4$. If there is a coefficient on the radical, divide both sides by it.

&bull; **Step 2: Raise both sides to the power of the index.** Square both sides for a square root, cube both sides for a cube root, raise to the fourth for a fourth root. This step removes the radical: $(\\sqrt[n]{f(x)})^n = f(x)$.

&bull; **Step 3: Solve the resulting polynomial equation.** If the radicand was linear, the result is a linear equation. If quadratic, the result is quadratic. The solver routes to the appropriate polynomial method.

&bull; **Step 4: Check every candidate.** Substitute back into the original (pre-squaring) equation. Reject any candidate that does not satisfy it.

**Multiple radicals.** When the equation has two radicals (one on each side), squaring can eliminate both in a single step if the indices match. When two radicals sit on the same side, isolate one, square, isolate the second, square again. The solver handles the same-index two-radical case directly.

**Edge cases the solver detects.**

&bull; Even radical equals a negative constant: no real solution, no squaring needed.
&bull; Discriminant negative after squaring: no real solution to the polynomial.
&bull; All candidates extraneous: no real solution to the radical equation.

For comprehensive treatment see **solving radical equations**, **isolating the radical**, and **rationalization**.

The steps are worked in [equations with radicals](!/algebra/roots#7); the rules used when raising both sides to a power are [rules for radicals](!/algebra/roots#5) and [simplifying and operating](!/algebra/roots#6).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Radical Functions** &mdash; functions of the form $f(x) = \\sqrt[n]{g(x)}$. The graph and domain depend on whether the index is even or odd.

**Radical Inequalities** &mdash; same form as radical equations but with $<$, $>$, $\\leq$, or $\\geq$. Requires careful sign analysis when squaring.

**Rational Exponents** &mdash; an equivalent notation: $\\sqrt[n]{x} = x^{1/n}$. Converting to rational exponents sometimes simplifies the algebra.

**Nth Root** &mdash; the general concept: the $n$-th root of $a$ is a number $b$ such that $b^n = a$.

**Square Root and Principal Square Root** &mdash; the symbol $\\sqrt{x}$ denotes the principal (non-negative) square root. The equation $x^2 = 9$ has two solutions but $\\sqrt{9}$ refers only to $3$.

**Extraneous Solutions** &mdash; candidate solutions introduced by non-equivalence operations such as squaring. Common in rational and radical equations.

**Polynomial Equations** &mdash; the equation type that results from eliminating the radical. The solver routes the squared equation through the polynomial solver.

**Domain Restrictions** &mdash; for even radicals, the radicand must be non-negative. The check happens implicitly through the extraneous-solution verification.

**Pythagorean Theorem and Distance Formula** &mdash; common geometric sources of radical equations: solving for an unknown side of a right triangle, or for an unknown coordinate that produces a target distance.

The related tools are the [radical inequality solver](!/algebra/calculators/inequalities/radical), the [root calculator](!/calculators/root-calculator) and the [polynomial equation solver](!/algebra/calculators/equations/polynomial); the lessons are [connection to powers](!/algebra/roots#10), [the roots subtree at a glance](!/algebra/roots#11) and [algebraic equations](!/algebra/equations#5).`,
    before: ``, after: ``, link: ''
  }
}
    },

    'exponential': {
      component: 'ExponentialEquationSolver',
      title: "Exponential Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for exponential equations of the form a\u00B7b^f(x) = c. Attempts base-matching for exact solutions, falls back to natural logarithms when bases cannot be matched.",
      name: "Exponential Equation Solver",
      url: "/algebra/calculators/equations/exponential",
      h1: "Exponential Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: 'eˣ',
      keywords: [
        "exponential equation solver",
        "solve exponential equations",
        "variable in the exponent",
        "base matching exponential",
        "natural log exponential equation",
        "ln equation solver",
        "exponential calculator",
        "b^x = c"
      ],
     faqQuestions: {
  obj1: {
    question: "What is an exponential equation?",
    answer: "An exponential equation contains the variable in the exponent. Standard forms are b to the x equals c, and a times b to the f(x) equals c, where b is a fixed positive base not equal to 1. Solving requires either matching bases or applying a logarithm to bring the exponent down."
  },
  obj2: {
    question: "How do you solve an exponential equation?",
    answer: "First isolate the exponential term by dividing out coefficients and moving constants. If both sides can be written as powers of the same base, equate the exponents. Otherwise take the natural logarithm or log base b of both sides, which converts the exponent into a regular factor that can be solved for."
  },
  obj3: {
    question: "When does base matching work?",
    answer: "Base matching works when the right side equals an integer power of the base. For example, 2 to the x equals 32 simplifies because 32 equals 2 to the fifth. The solver checks for this case first and returns the exact integer exponent rather than a logarithm-based approximation."
  },
  obj4: {
    question: "Why use natural logarithm for exponential equations?",
    answer: "The natural log is the inverse of e to the x, so ln of e to the x equals x directly. For an arbitrary base b, log of b to the x equals x times log of b, which isolates x after dividing. Either natural or common log works for any base; the solver uses natural log because it is the standard mathematical convention."
  },
  obj5: {
    question: "Can exponential equations have no solution?",
    answer: "Yes. An exponential expression b to the x with positive base is always positive, so any equation setting it equal to zero or a negative number has no real solution. The solver detects this case immediately and reports it without attempting to take a logarithm."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/exponential" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/powers/exponential-equations, algebra/powers, algebra/logarithms, algebra/logarithms/equations.
         Before editing this view, read the instructions and re-run its checks (--view exponential); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click the **Var**, **Num** and **Op** buttons, with **^** for the exponent and **e** for the natural base, or type on the keyboard; wrap a multi-term exponent in brackets. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign, or with a right side of zero or below, is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the steps from isolating the exponential to matching bases or taking a logarithm, and the answer card gives the value marked Exact or Approximate; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `A right side that is a whole power of the base gives an exact answer; any other gives a logarithm, marked Approximate. [Learn more about the two methods](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one equation in $x$, $y$ or $n$ with the variable in an exponent, such as $a \cdot b^{f(x)} = c$ with a positive base $b \neq 1$. It isolates the exponential term, then tries to write $c$ as a whole power of $b$ and equate the exponents; when that fails it takes the natural logarithm of both sides and divides by $\ln b$. A linear exponent leaves a linear equation to finish. Answers from base matching are Exact, answers from logarithms Approximate, and a right side of zero or below has no solution. [Learn more about exponential equations](!#what-is-an-exponential-equation)`
        }
      },
      demos: {
        'getting-started': {
          title: '2^x = 32, Solve, Clear, 2^x = 5',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, ^, x, =, 3, 2\nThe display reads 2^x = 32 with the exponent raised.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: '^', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '=', exact: true } },
            { click: { button: '3', exact: true } }, { click: { button: '2', exact: true } },
            { wait: 2600 },
            { say: 'CLICK Solve\n32 is recognised as 2^5, the bases are matched, and x = 5 is Exact.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Clear\nThe display and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK 2, ^, x, =, 5 and Solve\nNo base match: the natural log gives x = ln 5 / ln 2 = 2.321928, Approximate.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: '^', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '5', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'A bracketed exponent, undo, delete, Solve',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 3, ^, (, 2, x, +, 1, ), =, 8, 1\nThe display reads 3^(2x + 1) = 81.', at: 'tr' },
            { click: { button: '3', exact: true } }, { click: { button: '^', exact: true } }, { click: { button: '(', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '8', exact: true } }, { click: { button: '1', exact: true } },
            { wait: 2800 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 1 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe 8 before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK 8, 1 and Solve\n81 = 3^4, so 2x + 1 = 4 and x = 1.5.', at: 'tr' },
            { click: { button: '8', exact: true } }, { click: { button: '1', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Natural Base\nA random e^x = c loads.', at: 'tr' },
            { click: { button: 'Natural Base' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nThe natural log of both sides: x = ln c.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK With Constant\nA random b^x + c = d replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'With Constant' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'A coefficient and a base match, then a natural log',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 5, ×, 2, ^, x, =, 4, 0 and Solve\nDivided by 5: 2^x = 8 = 2^3, so x = 3, Exact.', at: 'tr' },
            { click: { button: '5', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: '^', exact: true } }, { click: { button: 'x', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '4', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK e, ^, x, =, 2, 0 and Solve\nApply Logarithm: x = ln 20 = 2.995732, Approximate.', at: 'tr' },
            { click: { button: 'e', exact: true } }, { click: { button: '^', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'base-matching-vs-logarithms', key: 'obj5', demo: null },
        { id: 'what-is-an-exponential-equation', key: 'obj6', demo: null },
        { id: 'the-solving-process-explained', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $2^x = 32$ and press Enter &mdash; the right panel recognizes 32 as $2^5$, matches bases, and returns the exact answer $x = 5$.
&bull; Click the &quot;Natural Base&quot; example template &mdash; an equation $e^x = c$ loads into the display. The solver applies the natural log to give $x = \\ln c$.
&bull; Try $3^{2x + 1} = 81$ to see the base-matching pipeline with a linear exponent: the solver finds $81 = 3^4$, equates $2x + 1 = 4$, and solves to $x = 3/2$.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The special row offers $e$ for the natural base. An expression without an equals sign is refused with "Input must be an equation (use = sign)", a right side of zero or below with "Exponential equations cannot equal zero or negative numbers", and exponentials on both sides are not yet supported. $2^x = 5$ has no base match and gives $x = 2.321928$ by logarithms. What makes an equation exponential is explained in [what is an exponential equation](!#what-is-an-exponential-equation).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in the exponent.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; caret operator (rendered as $x^n$ on the button), multiplication, division, plus, minus, equals.
&bull; **Special row** &mdash; the constant $e$ for natural-base equations, and bracket buttons.

To enter $b^x$, type the base, the caret, then the exponent. The display renders the exponent as a proper superscript. For multi-term exponents like $2x + 1$, wrap them in parentheses: $3 \\hat{} (2x + 1)$.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type a lowercase $e$ for Euler's number (the tokenizer distinguishes it from a variable), and press Enter to solve. The ⌫ button deletes the character before the caret. Why the base must be positive and not $1$ is explained in [what is an exponential equation](!#what-is-an-exponential-equation). **Ctrl+Z** undoes up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the one after it.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking again produces a new random version.

&bull; **Simple** &mdash; $b^x = c$. Basic form where $c$ is often a power of $b$.
&bull; **With Coefficient** &mdash; $a \\cdot b^x = c$. Requires dividing both sides by $a$ first.
&bull; **Linear Exponent** &mdash; $b^{mx + n} = c$. Combines base-matching with a linear equation in the exponent.
&bull; **Same Base** &mdash; $b^{f(x)} = b^n$. Same base on both sides; equate the exponents directly.
&bull; **Convertible** &mdash; $a^x = b$ where $a$ and $b$ are powers of the same number. Demonstrates the power-of-power rule.
&bull; **With Constant** &mdash; $b^x + c = d$. Requires isolating the exponential first.
&bull; **Natural Base** &mdash; $e^x = c$. Applies the natural log directly.
&bull; **Natural Linear** &mdash; $e^{mx + n} = c$. Same as Linear Exponent but with base $e$.

Roughly 80 percent of generated equations produce clean integer or rational solutions via base matching; the rest exercise the logarithm fallback. Loading a template clears the previous solution; click Solve to work the new equation. The two methods applied to every template are compared in [base matching vs logarithms](!#base-matching-vs-logarithms).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The exact step sequence depends on whether base matching or logarithms are used.

&bull; **Rearrange Equation** &mdash; if the exponential is on the right side, the solver swaps sides for clarity.
&bull; **Evaluate Constant** &mdash; reduces the non-exponential side to a single number if arithmetic is involved.
&bull; **Isolate Exponential Term** &mdash; divides by coefficients or subtracts additive constants until the exponential sits alone on one side.
&bull; **Recognize Perfect Power** (when applicable) &mdash; if the right side equals $b^k$ for integer $k$, the solver detects this and prepares to match bases.
&bull; **Match Bases** &mdash; when both sides share a base, equate the exponents to get a polynomial equation in $x$.
&bull; **Apply Logarithm** &mdash; when no perfect-power match exists, the solver takes the natural log or log base $b$ of both sides.
&bull; **Simplify** &mdash; uses the identity $\\log_b(b^x) = x$ to bring the variable out of the exponent.
&bull; **Calculate** &mdash; substitutes the logarithm value and reports the numerical answer.
&bull; **Solve for Variable** &mdash; for linear exponents, solves the resulting linear equation.

Solutions from base matching are flagged as exact; solutions from logarithms are flagged as approximate. $5 \\cdot 2^x = 40$ is divided by $5$ first, $8 = 2^3$ is recognised and $x = 3$ is Exact; $e^x = 20$ takes the natural log and gives $x = 2.995732$, Approximate. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. The three stages are set out in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Base Matching vs Logarithms`,
    content: `Two distinct techniques solve exponential equations. The solver tries the cleaner method first and falls back to the more general one when needed.

&bull; **Base matching.** Works when both sides can be written as powers of the same base. The principle: if $b^p = b^q$ for any positive base $b \\neq 1$, then $p = q$. The exponential function is one-to-one, so equal outputs imply equal inputs.

  Example: $4^x = 64$. Recognize $64 = 4^3$ (or rewrite both sides as $2^{2x} = 2^6$), then $x = 3$. Exact integer answer.

  When it works: $c$ is exactly an integer power of the base $b$. The solver enumerates powers $b^1, b^2, \\ldots$ up to $c$ and reports a match if found.

&bull; **Logarithms.** Works in every case. The principle: applying $\\log_b$ to both sides converts $b^x$ to $x$ via the identity $\\log_b(b^x) = x$. The most common choice is the natural log ($\\ln$, with base $e$), because calculators evaluate it directly.

  Example: $2^x = 5$. Take $\\ln$ of both sides: $x \\ln 2 = \\ln 5$, so $x = \\ln 5 / \\ln 2 \\approx 2.32$. Approximate answer.

  Logarithms always work but rarely produce clean integer answers. They are essential whenever $c$ is not a perfect power of the base.

For linear exponents $b^{mx + n} = c$, apply the log to both sides, giving $(mx + n) \\ln b = \\ln c$. Then solve the linear equation in $x$.

For deeper coverage see **exponential and logarithmic functions** and **change of base formula**.

Both methods have their own lesson sections, [method: matching bases](!/algebra/powers/exponential-equations#5) and [method: using logarithms](!/algebra/powers/exponential-equations#7); the logarithms used are [common and natural logarithms](!/algebra/logarithms#5), and the choice between them is discussed in [choosing common or natural logarithm](!/algebra/logarithms/equations#9).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is an Exponential Equation?`,
    content: `An exponential equation contains the variable in an exponent. The defining form for a single exponential term is:

$$a \\cdot b^{f(x)} = c$$

where $b > 0$ and $b \\neq 1$ is the **base**, $a$ is a constant coefficient, $f(x)$ is the exponent (typically linear in $x$), and $c$ is a constant. Two common special cases:

&bull; **Basic form** &mdash; $b^x = c$ with $a = 1$ and $f(x) = x$.
&bull; **Natural exponential** &mdash; $e^x = c$ where the base is Euler's number $e \\approx 2.71828$.

**Domain and range.** The function $b^x$ is defined for every real $x$, but its range is the positive reals $(0, \\infty)$. This means $b^x = c$ has a solution only when $c > 0$. Setting $b^x$ equal to zero or a negative number gives no real solution.

**Inverse relationship.** The exponential function with base $b$ has the logarithm with base $b$ as its inverse: $b^{\\log_b x} = x$ and $\\log_b(b^x) = x$. This pairing is what makes logarithms the universal tool for solving exponential equations.

Exponential equations appear in compound interest, population growth, radioactive decay, cooling laws, pH calculations, and any model where a quantity changes by a constant multiplicative factor over equal time intervals.

For deeper coverage see **exponential functions**, **the number e**, and **growth and decay models**.

The form is defined in [what is an exponential equation](!/algebra/powers/exponential-equations#1) and its variants in [forms of exponential equations](!/algebra/powers/exponential-equations#2); the function behind it is [exponential functions](!/algebra/powers#11), and the inverse pairing with the logarithm is [inverse identities](!/algebra/logarithms#4).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Three stages solve any exponential equation. The first stage is mandatory; the second and third are alternatives.

&bull; **Stage 1: Isolate the exponential term.** Move every non-exponential term to the other side. If the equation contains $2 \\cdot 3^x + 5 = 23$, subtract 5 to get $2 \\cdot 3^x = 18$, then divide by 2 to get $3^x = 9$.

&bull; **Stage 2a: Try base matching.** If the isolated right side is an integer power of the base, equate the exponents directly. $3^x = 9$ becomes $3^x = 3^2$, hence $x = 2$. This produces an exact integer (or rational) answer.

&bull; **Stage 2b (fallback): Apply a logarithm.** When no clean base match exists, take the natural log of both sides:

$$\\ln(b^{f(x)}) = \\ln c$$

Using $\\ln(b^u) = u \\ln b$:

$$f(x) \\cdot \\ln b = \\ln c$$

Solve for $f(x)$, then for $x$. The answer is typically a decimal approximation.

&bull; **Stage 3: For linear exponents.** When $f(x) = mx + n$, the logarithm step produces $(mx + n) \\ln b = \\ln c$, a linear equation in $x$. Solve by subtracting $n \\ln b$ and dividing by $m \\ln b$.

**Edge cases the solver handles.**

&bull; Right side zero or negative: no solution, exit immediately.
&bull; Base 1 or non-positive: invalid equation, error.
&bull; Multiple exponential terms on the same side or different bases on each side: not currently supported; throws a clear error.

For comprehensive treatment see **solving exponential equations**, **logarithms**, and **change of base**.

The stages are worked in [preparing the equation](!/algebra/powers/exponential-equations#3), [solving methods overview](!/algebra/powers/exponential-equations#4) and [solving exponential equations via logarithms](!/algebra/logarithms/equations#7); the final check is [checking solutions](!/algebra/powers/exponential-equations#10).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Exponential Functions** &mdash; functions of the form $f(x) = a \\cdot b^x$. The graph is increasing for $b > 1$ and decreasing for $0 < b < 1$. Always positive.

**Logarithmic Equations** &mdash; the inverse problem to exponential equations. Solving $\\log_b x = c$ requires converting to exponential form $x = b^c$.

**Natural Exponential** &mdash; $e^x$, the exponential function with base $e \\approx 2.71828$. The most important exponential in calculus and continuous-growth models.

**Natural Logarithm** &mdash; $\\ln x$, the logarithm with base $e$. Inverse of $e^x$.

**Change of Base Formula** &mdash; $\\log_b x = \\ln x / \\ln b$. Converts any logarithm into a natural log, which calculators compute directly.

**Exponent Rules** &mdash; properties used to simplify expressions before solving: $b^m \\cdot b^n = b^{m+n}$, $(b^m)^n = b^{mn}$, $b^{-n} = 1/b^n$.

**Compound Interest** &mdash; $A = P(1 + r/n)^{nt}$, an exponential growth formula. Solving for $t$ requires the exponential-equation techniques on this page.

**Continuous Compounding** &mdash; $A = P e^{rt}$, the natural-base limit of compound interest as compounding frequency increases. Solving for $t$ uses the natural log.

**Exponential Growth and Decay** &mdash; $N(t) = N_0 \\cdot b^t$ models populations, radioactive isotopes, and any process with constant multiplicative rate.

**Exponential Inequalities** &mdash; same form with $<$, $>$, $\\leq$, or $\\geq$. Solved by the same methods, with attention to whether the base is greater or less than 1 (which flips inequality direction).

The related tools are the [logarithmic equation solver](!/algebra/calculators/equations/logarithmic), the [exponential inequality solver](!/algebra/calculators/inequalities/exponential), the [exponent calculator](!/calculators/exponent-calculator) and the [logarithm calculator](!/calculators/log-calculator); the lessons are [laws of exponents](!/algebra/powers#8), [method: substitution](!/algebra/powers/exponential-equations#8) and [exponentials on both sides](!/algebra/logarithms/equations#8).`,
    before: ``, after: ``, link: ''
  }
}
    },

    'logarithmic': {
      component: 'LogarithmicEquationSolver',
      title: "Logarithmic Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for logarithmic equations. Recognizes the equal-logs property, isolates the log, converts to exponential form, and respects domain restrictions on log arguments.",
      name: "Logarithmic Equation Solver",
      url: "/algebra/calculators/equations/logarithmic",
      h1: "Logarithmic Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: 'log',
      keywords: [
        "logarithmic equation solver",
        "log equation solver",
        "ln equation solver",
        "natural log equation",
        "log base b equation",
        "equal logarithms property",
        "exponential form conversion",
        "solve log equations",
        "logarithm calculator"
      ],
    faqQuestions: {
  obj1: {
    question: "What is a logarithmic equation?",
    answer: "A logarithmic equation contains the variable inside a logarithm. Examples include log base 2 of x equals 5, and ln of (3x + 1) equals 4. Solving requires either equating arguments when both sides have the same base, or converting the equation to exponential form to remove the logarithm."
  },
  obj2: {
    question: "How do you solve a logarithmic equation?",
    answer: "First isolate the logarithm by dividing out coefficients and moving constants. Then convert to exponential form: if log base b of A equals c, then A equals b raised to c. Solve the resulting equation for the variable. Check that any solution keeps the original log argument positive."
  },
  obj3: {
    question: "What is the equal-logarithms property?",
    answer: "If log base b of A equals log base b of B (same base on both sides), then A equals B. The logarithm is one-to-one, so equal log values mean equal arguments. This bypasses the conversion to exponential form when both sides are logarithms with the same base."
  },
  obj4: {
    question: "Why must the argument of a logarithm be positive?",
    answer: "The logarithm log base b of x is defined only for x greater than zero, because b raised to any real number is always positive. After solving, every candidate must be checked to confirm that no logarithm argument in the original equation becomes zero or negative at that value."
  },
  obj5: {
    question: "How do I enter logs and ln in the solver?",
    answer: "The Log row offers buttons for ln (natural log), log (base 10), and log base 2, 3, and 5. To use a different base, type log_b where b is the base. The solver parses ln(x), log(x), and log_b(x) as logarithms with appropriate bases."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/logarithmic" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/logarithms and algebra/logarithms/equations.
         Before editing this view, read the instructions and re-run its checks (--view logarithmic); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click a **Log** button for ln, log or a base, then the argument, a closing bracket and the rest with the **Var**, **Num** and **Op** buttons, or type on the keyboard. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign or without a logarithm is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the steps from isolating the logarithm to the exponential form and the linear equation, and the answer card gives the value marked Exact or Approximate; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `A candidate that makes a logarithm's argument zero or negative is rejected with a message. [Learn more about the domain check](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one equation in $x$, $y$ or $n$ with the variable inside a logarithm, in base $e$, $10$ or any positive base other than $1$. When both sides are logarithms with the same base it equates the arguments; otherwise it isolates the logarithm by dividing out a coefficient and moving constants, rewrites $\log_b(A) = c$ as $A = b^c$, evaluates the power and solves the linear argument for the variable. Every candidate is checked to keep the argument positive. Whole-number powers give Exact answers, others Approximate. [Learn more about logarithmic equations](!#what-is-a-logarithmic-equation)`
        }
      },
      demos: {
        'getting-started': {
          title: 'log₂(x) = 5, Solve, Clear, ln(x) = 2',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK log₂, x, ), =, 5\nThe display reads log₂(x) = 5.', at: 'tr' },
            { click: { button: 'log2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '5', exact: true } },
            { wait: 2600 },
            { say: 'CLICK Solve\nConverted to exponential form, x = 2^5 = 32, Exact.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Clear\nThe display and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ln, x, ), =, 2 and Solve\nx = e^2 = 7.389056, Approximate.', at: 'tr' },
            { click: { button: 'ln', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'A linear argument, undo, delete, Solve',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK log₂, 3, x, -, 1, ), =, 4\nThe display reads log₂(3x − 1) = 4.', at: 'tr' },
            { click: { button: 'log2', exact: true } }, { click: { button: '3', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } },
            { click: { button: '1', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '4', exact: true } },
            { wait: 2600 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 4 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe equals sign before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK =, 4 and Solve\n3x − 1 = 2^4 = 16, so x = 5.666667.', at: 'tr' },
            { click: { button: '=', exact: true } }, { click: { button: '4', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Same Base Both Sides\nA random log_b(f(x)) = log_b(c) loads.', at: 'tr' },
            { click: { button: 'Same Base Both Sides' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nThe equal-logarithms property: the arguments are equated.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK With Coefficient\nA random a · log_b(x) = c replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'With Coefficient' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'A coefficient to divide out, then a constant to move',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, ×, log, x, ), =, 4 and Solve\nIsolate Logarithm divides by 2: log(x) = 2, so x = 100, Exact.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: 'log', exact: true } }, { click: { button: 'x', exact: true } },
            { click: { button: ')', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '4', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK log₃, x, ), +, 1, =, 2 and Solve\nSubtract 1: log₃(x) = 1, so x = 3.', at: 'tr' },
            { click: { button: 'log3', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: ')', exact: true } }, { click: { button: '+', exact: true } },
            { click: { button: '1', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'two-solving-strategies', key: 'obj5', demo: null },
        { id: 'what-is-a-logarithmic-equation', key: 'obj6', demo: null },
        { id: 'the-solving-process-explained', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Click the &quot;log&#x2082;&quot; button, type $(x) = 5$, and press Enter &mdash; the right panel converts to exponential form $x = 2^5$ and returns $x = 32$.
&bull; Click the &quot;Natural Log&quot; example template &mdash; an equation $\\ln x = c$ loads. The solver returns $x = e^c$.
&bull; Try $\\log_2(3x - 1) = 4$ to see the linear-argument pathway: the solver converts to $3x - 1 = 16$, then solves to $x = 17/3$.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The Log row offers ln, log (base 10), and bases 2, 3, and 5; the special row offers $e$. An expression without an equals sign is refused with "Input must be an equation (use = sign)", one without a logarithm with "No logarithm found in equation", and different bases on the two sides are not yet supported. $\\ln(x) = 2$ gives $x = e^2 = 7.389056$. What makes an equation logarithmic is explained in [what is a logarithmic equation](!#what-is-a-logarithmic-equation).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Log row** &mdash; ln, log (base 10), log base 2, log base 3, log base 5. Each button inserts the function and an opening parenthesis for the argument.
&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in the log argument.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; plus, minus, multiplication, division, caret, equals.
&bull; **Special row** &mdash; $e$ for natural-base contexts, and brackets.

To enter a custom-base log via keyboard, type $\\text{log}\\_b$ where $b$ is the base number. For example, $\\log_7(x)$ is typed as $\\text{log}\\_7(x)$. The underscore separates the function name from the base subscript.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the one after it; **Escape** clears the display. The Clear button empties the display entirely; the curved-arrow button steps through the undo stack one edit at a time; the ⌫ button deletes the character before the caret. Why the argument of every logarithm must stay positive is explained in [what is a logarithmic equation](!#what-is-a-logarithmic-equation).`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking again produces a new random version.

&bull; **Simple** &mdash; $\\log_b(x) = c$. The base case; converts to $x = b^c$.
&bull; **Natural Log** &mdash; $\\ln(x) = c$. Same idea with $b = e$.
&bull; **With Coefficient** &mdash; $a \\cdot \\log_b(x) = c$. Requires dividing both sides by $a$ first.
&bull; **Linear Argument** &mdash; $\\log_b(mx + n) = c$. After conversion, solves a linear equation in $x$.
&bull; **With Constant** &mdash; $\\log_b(x) + c = d$. Subtracts $c$ to isolate the log before conversion.
&bull; **Natural Linear** &mdash; $\\ln(mx + n) = c$. Natural-log variant of Linear Argument.
&bull; **Same Base Both Sides** &mdash; $\\log_b(f(x)) = \\log_b(c)$. Applies the equal-logarithms property to skip the conversion step.
&bull; **Natural with Coefficient** &mdash; $a \\cdot \\ln(x) = c$. Coefficient case with natural log.

Roughly 80 percent of generated equations produce clean integer or rational solutions; the rest exercise decimal cases where $b^c$ is irrational. Loading a template clears the previous solution; click Solve to work the new equation. The two strategies applied to the templates are compared in [two solving strategies](!#two-solving-strategies).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step.

&bull; **Equal Logarithms Property** (when applicable) &mdash; for equations of the form $\\log_b(A) = \\log_b(B)$, the solver equates the arguments directly and skips the exponential conversion.
&bull; **Rearrange Equation** &mdash; if the logarithm is on the right side, the solver swaps sides for clarity.
&bull; **Evaluate Constant** &mdash; reduces the non-log side to a single number if arithmetic is involved.
&bull; **Isolate Logarithm** &mdash; divides by a coefficient or subtracts an additive constant until the logarithm sits alone on one side.
&bull; **Convert to Exponential Form** &mdash; rewrites $\\log_b(A) = c$ as $A = b^c$, the key step that removes the logarithm.
&bull; **Evaluate Exponential** &mdash; computes $b^c$ as a number.
&bull; **Solve Linear Equation** (when argument is linear) &mdash; solves the resulting $mx + n = b^c$ for $x$.
&bull; **Isolate Variable** &mdash; final algebraic step to get $x$ alone.

Each step renders the before-and-after equation using a math layout that displays fractions, exponents, and log subscripts in their standard typographic form. The answer card marks the value Exact or Approximate: $2 \\cdot \\log(x) = 4$ is divided by $2$ first and gives $x = 10^2 = 100$, Exact; $\\log_3(x) + 1 = 2$ subtracts $1$ first and gives $x = 3$. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. The four steps are set out in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `Two Solving Strategies`,
    content: `Logarithmic equations split into two strategic cases. The solver picks whichever applies.

&bull; **Strategy 1: Equal logarithms property.** When the equation has the form $\\log_b(A) = \\log_b(B)$ with matching bases on both sides, equate the arguments directly: $A = B$. This works because the logarithm is one-to-one: equal outputs imply equal inputs. No exponential conversion needed.

  Example: $\\log_3(2x + 1) = \\log_3(7)$ becomes $2x + 1 = 7$, giving $x = 3$.

  When it works: both sides are single logarithms with the same base. Sums and differences of logs can be combined into single logs first using $\\log(A) + \\log(B) = \\log(AB)$ and $\\log(A) - \\log(B) = \\log(A/B)$.

&bull; **Strategy 2: Exponential conversion.** When the equation has a logarithm on one side and a constant (or non-logarithmic expression) on the other, isolate the logarithm and convert to exponential form:

$$\\log_b(A) = c \\iff A = b^c$$

  Example: $\\log_2(x - 3) = 4$ becomes $x - 3 = 2^4 = 16$, giving $x = 19$.

  This always works after isolating the logarithm. The conversion step is the inverse of the logarithm definition.

**Domain check.** After finding a candidate solution, verify that every logarithm argument in the original equation is positive at that value. A logarithm of zero or a negative number is undefined, so any candidate that violates this is extraneous and must be rejected.

For deeper coverage see **logarithm properties** and **change of base formula**.

The two strategies have their own lesson sections, [logarithms on both sides](!/algebra/logarithms/equations#2) and [basic form: logarithm equals a constant](!/algebra/logarithms/equations#1); merging several logarithms first is [combining logarithms](!/algebra/logarithms/equations#3), using the [logarithm rules](!/algebra/logarithms#7).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Logarithmic Equation?`,
    content: `The logarithm $\\log_b(x)$ is defined as the inverse of the exponential function with base $b$: it answers the question &quot;to what power must $b$ be raised to give $x$?&quot;

$$\\log_b(x) = y \\iff b^y = x$$

with $b > 0$, $b \\neq 1$, and $x > 0$.

A **logarithmic equation** contains at least one logarithm with the variable in its argument. Standard forms include:

&bull; **Basic** &mdash; $\\log_b(x) = c$.
&bull; **Linear argument** &mdash; $\\log_b(mx + n) = c$.
&bull; **Equal logarithms** &mdash; $\\log_b(f(x)) = \\log_b(g(x))$.
&bull; **Mixed** &mdash; $a \\cdot \\log_b(x) + d = c$.

**Common bases.**

&bull; **Natural log** &mdash; $\\ln x = \\log_e x$ with $e \\approx 2.71828$. The standard log of calculus and continuous-growth contexts.
&bull; **Common log** &mdash; $\\log x = \\log_{10} x$. Historically dominant before calculators; still used in chemistry (pH) and acoustics (decibels).
&bull; **Binary log** &mdash; $\\log_2 x$. Common in computer science and information theory.

**Domain and range.** $\\log_b(x)$ accepts positive $x$ only and returns any real number. The graph passes through $(1, 0)$, has a vertical asymptote at $x = 0$, and grows without bound but very slowly.

Logarithmic equations appear when solving exponential equations for the exponent, when computing time-to-double or half-life, in information theory (entropy), and in many engineering scales (decibels, Richter scale, magnitudes).

For deeper coverage see **logarithms**, **natural logarithm**, and **logarithmic functions**.

The logarithm is defined in [what is a logarithm](!/algebra/logarithms#1), its allowed inputs in [restrictions on base and argument](!/algebra/logarithms#2), the two usual bases in [common and natural logarithms](!/algebra/logarithms#5), and the graph in [graphing logarithmic functions](!/algebra/logarithms#10).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Four steps solve any logarithmic equation. The first three transform the equation; the fourth verifies the result.

&bull; **Step 1: Combine multiple logarithms (if any).** Use the log properties to merge sums and differences into a single logarithm. The product rule: $\\log_b(A) + \\log_b(B) = \\log_b(AB)$. The quotient rule: $\\log_b(A) - \\log_b(B) = \\log_b(A/B)$. The power rule: $c \\cdot \\log_b(A) = \\log_b(A^c)$.

&bull; **Step 2: Isolate the logarithm.** Move every non-logarithmic term to the other side. For $\\log_b(A) + d = c$, subtract $d$ to get $\\log_b(A) = c - d$. For $a \\cdot \\log_b(A) = c$, divide by $a$ to get $\\log_b(A) = c/a$.

&bull; **Step 3: Convert to exponential form.** Rewrite $\\log_b(A) = c$ as $A = b^c$. This removes the logarithm and leaves an algebraic equation. If the argument $A$ is linear, the result is a linear equation; if quadratic, a quadratic equation.

&bull; **Step 4: Solve and check the domain.** Solve the resulting equation. For each candidate solution, substitute back into every logarithm in the original equation and confirm each argument is strictly positive. Reject any candidate that fails this check.

**Alternative: same-base shortcut.** If both sides of the original equation are single logarithms with the same base, skip steps 1 through 3 and use the equal-logarithms property: equate the arguments directly. Still perform the domain check at the end.

**Edge cases the solver handles.**

&bull; Negative or zero argument after solving: rejects the candidate as extraneous.
&bull; Coefficient of zero on the logarithm: invalid equation, error.
&bull; Different bases on both sides: requires change-of-base; not currently supported.

For comprehensive treatment see **solving logarithmic equations**, **logarithm properties**, and **the change of base formula**.

The steps are worked in [domain restrictions](!/algebra/logarithms/equations#4) and [extraneous solutions](!/algebra/logarithms/equations#5), the rules they use in [properties of logarithms](!/algebra/logarithms#6), and the whole procedure is summarised in [summary of solving methods](!/algebra/logarithms/equations#10).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Logarithmic Functions** &mdash; functions of the form $f(x) = \\log_b(x)$. The graph is the reflection of $b^x$ across the line $y = x$.

**Natural Logarithm** &mdash; $\\ln x = \\log_e x$. The logarithm with base $e$; the inverse of $e^x$.

**Common Logarithm** &mdash; $\\log x = \\log_{10} x$. The logarithm with base 10, historically used for hand computation and still used in chemistry and physics scales.

**Exponential Equations** &mdash; the inverse problem. Solving $b^x = c$ requires taking a logarithm: $x = \\log_b c$.

**Change of Base Formula** &mdash; $\\log_b(x) = \\ln(x) / \\ln(b)$. Converts any logarithm to a natural log, which calculators compute directly.

**Logarithm Properties** &mdash; the algebraic rules: product rule, quotient rule, power rule. Essential for combining and separating logs before solving.

**Logarithmic Inequalities** &mdash; same form as logarithmic equations but with $<$, $>$, $\\leq$, or $\\geq$. Solved by the same methods, with attention to whether the base is greater or less than 1.

**Domain of a Logarithm** &mdash; the set of inputs for which the logarithm is defined: strictly positive real numbers. Critical for checking solutions.

**pH, Decibels, and Magnitudes** &mdash; real-world scales defined as logarithms: pH measures hydrogen ion concentration; decibels measure sound intensity; the Richter scale measures earthquake amplitude. Each translates a multiplicative quantity into an additive scale.

**Entropy** &mdash; in information theory, the information content of a probability distribution is computed using $\\log_2$.

The related tools are the [exponential equation solver](!/algebra/calculators/equations/exponential), the [logarithmic inequality solver](!/algebra/calculators/inequalities/logarithmic) and the [logarithm calculator](!/calculators/log-calculator); the lessons are [logarithmic equations](!/algebra/logarithms#8), [logarithmic inequalities](!/algebra/logarithms#9) and [equations requiring substitution](!/algebra/logarithms/equations#6).`,
    before: ``, after: ``, link: ''
  }
}
    },

    'absolute-value': {
      component: 'AbsValueEquationSolver',
      title: "Absolute Value Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for absolute value equations |ax + b| = c. Isolates the absolute value, splits into interior-positive and interior-negative branches, and handles edge cases.",
      name: "Absolute Value Equation Solver",
      url: "/algebra/calculators/equations/absolute-value",
      h1: "Absolute Value Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: '|x|',
      keywords: [
        "absolute value equation solver",
        "|ax + b| = c",
        "solve absolute value equations",
        "split into two cases",
        "interior positive negative",
        "absolute value calculator",
        "|A| = |B| equation",
        "modulus equation solver"
      ],
     faqQuestions: {
  obj1: {
    question: "What is an absolute value equation?",
    answer: "An absolute value equation contains an expression inside absolute value bars, such as |ax + b| equals c. The absolute value of a number is its distance from zero, always non-negative. Solving requires splitting the equation into two cases because the expression inside can be either positive or negative."
  },
  obj2: {
    question: "How do you solve an absolute value equation?",
    answer: "First isolate the absolute value expression by moving constants and dividing out coefficients. If the right side is positive, split into two cases: the expression inside equals the right side, or equals its negative. Solve each case as a linear equation. The solutions of both cases are the final answers."
  },
  obj3: {
    question: "When does an absolute value equation have no solution?",
    answer: "When the isolated absolute value equals a negative number. Since an absolute value is always greater than or equal to zero, no real value of the variable can make |expression| equal a negative number. The solver detects this case immediately and reports no solution."
  },
  obj4: {
    question: "What happens when the absolute value equals zero?",
    answer: "When |expression| equals zero, the expression inside must equal exactly zero. This gives a single solution rather than two, because there is only one value (zero) whose absolute value is zero. The two cases collapse into one."
  },
  obj5: {
    question: "How do I solve |A| = |B|?",
    answer: "When both sides are absolute values, two cases arise: A equals B, or A equals negative B. Solve each as a linear equation. Equating A with positive B gives one candidate; equating A with negative B gives another. Both are valid solutions of the original equation."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/absolute-value" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/equations/absolute-value and algebra/equations.
         Before editing this view, read the instructions and re-run its checks (--view absolute-value); keep the section ids and the anchors. */
      instructions: [
        `Build the equation in the display at the top: click the **| |** button once before and once after the expression inside the bars, and the **Var**, **Num** and **Op** buttons or the brackets for the rest, or type on the keyboard. [Learn more about building equations](!#building-equations-with-buttons-and-keyboard)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-equations-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once the equation is complete; an expression without an equals sign or without bars is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a random equation of that form. [Learn more about the templates](!#try-an-example-eight-form-templates)`,
        `The right panel lists the steps from isolating the bars to the two cases and their check, and the answer card gives one value, two values or No solution; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`,
        `Bars equal to a negative number end in No solution; bars equal to zero give one value instead of two. [Learn more about the special cases](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one equation in $x$, $y$ or $n$ with a linear expression between absolute value bars. It isolates the bars by moving constants and dividing out a coefficient, then looks at the other side: a negative number means no solution, zero means the inside is zero, and a positive number $c$ splits the equation into the inside equal to $c$ and equal to $-c$, each solved as a linear equation and checked. With bars on both sides it uses the cases $A = B$ and $A = -B$. [Learn more about absolute value](!#what-is-absolute-value)`
        }
      },
      demos: {
        'getting-started': {
          title: '|x − 3| = 5, Solve, Clear, bars equal to zero',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK | |, x, -, 3, | |, =, 5\nThe display reads |x − 3| = 5.', at: 'tr' },
            { click: { button: '| |', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '3', exact: true } },
            { click: { button: '| |', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '5', exact: true } },
            { wait: 2600 },
            { say: 'CLICK Solve\nTwo cases, x − 3 = 5 and x − 3 = −5: x = 8 or x = −2, Exact.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3600 },
            { say: 'CLICK Clear\nThe display and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK | |, 2, x, +, 1, | |, =, 0 and Solve\nThe zero case: one solution, x = −0.5.', at: 'tr' },
            { click: { button: '| |', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '1', exact: true } },
            { click: { button: '| |', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '0', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3200 },
          ],
        },
        'building-equations-with-buttons-and-keyboard': {
          title: 'A coefficient and a constant, undo, delete, Solve',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK 2, ×, | |, x, +, 1, | |, -, 4, =, 6\nThe display reads 2 · |x + 1| − 4 = 6.', at: 'tr' },
            { click: { button: '2', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: '| |', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } },
            { click: { button: '1', exact: true } }, { click: { button: '| |', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '4', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '6', exact: true } },
            { wait: 2800 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the 6 is gone.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe equals sign before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK =, 6 and Solve\nIsolated to |x + 1| = 5: x = 4 or x = −6.', at: 'tr' },
            { click: { button: '=', exact: true } }, { click: { button: '6', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
          ],
        },
        'try-an-example-eight-form-templates': {
          title: 'Open the templates, load two forms',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nEight cards, one per form.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK No Solution\nBars equal to a negative number load.', at: 'tr' },
            { click: { button: 'No Solution' } },
            { wait: 2400 },
            { say: 'CLICK Solve\nNo solution: an absolute value cannot be negative.', at: 'tr' },
            { click: { button: 'Solve' } },
            { wait: 3200 },
            { say: 'CLICK Abs Both Sides\nA random |ax + b| = |cx + d| replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'Abs Both Sides' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'Bars on both sides, then no solution',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK | |, x, -, 1, | |, =, | |, 2, x, +, 4, | | and Solve\nCase 1 A = B gives x = −5, case 2 A = −B gives x = −1.', at: 'tr' },
            { click: { button: '| |', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '-', exact: true } }, { click: { button: '1', exact: true } }, { click: { button: '| |', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '| |', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '4', exact: true } }, { click: { button: '| |', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3800 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK | |, x, | |, +, 3, =, 1 and Solve\nIsolated to |x| = −2: No solution.', at: 'tr' },
            { click: { button: '| |', exact: true } }, { click: { button: 'x', exact: true } }, { click: { button: '| |', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: '3', exact: true } },
            { click: { button: '=', exact: true } }, { click: { button: '1', exact: true } },
            { click: { button: 'Solve' } },
            { wait: 3200 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-equations-with-buttons-and-keyboard', key: 'obj2', demo: 'building-equations-with-buttons-and-keyboard' },
        { id: 'try-an-example-eight-form-templates', key: 'obj3', demo: 'try-an-example-eight-form-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'the-two-case-split-why-it-works', key: 'obj5', demo: null },
        { id: 'what-is-absolute-value', key: 'obj6', demo: null },
        { id: 'the-solving-process-explained', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $|x - 3| = 5$ and press Enter &mdash; the right panel splits the equation into $x - 3 = 5$ and $x - 3 = -5$, then solves both branches to give $x = 8$ or $x = -2$.
&bull; Click the &quot;No Solution&quot; example template &mdash; an equation with a negative right side loads. The solver detects this immediately and reports no solution.
&bull; Enter $|2x + 1| = 0$ to see the zero case: only one solution exists because zero has only one absolute value preimage.

The Solve button is disabled until you enter something. Pressing Enter on the display is equivalent to clicking Solve. The special row offers the absolute value bars button (rendered as $|$ $|$). An expression without an equals sign is refused with "Input must be an equation (use = sign)", one without bars with "No absolute value found", and a non-linear expression inside the bars with its own message. $|2x + 1| = 0$ gives the single solution $x = -0.5$. What the bars mean is explained in [what is absolute value](!#what-is-absolute-value).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Equations with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable row** &mdash; $x$, $y$, $n$. The solver picks up whichever variable appears in the equation.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus, equals.
&bull; **Special row** &mdash; absolute value bars button, and parentheses.

The absolute value bars button inserts a single $|$ character; click it twice to surround an expression. Keyboard users can type the vertical bar character directly. For multi-term expressions inside the bars, type them between the two bars: $|2x + 3|$.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back; **Backspace** deletes the character before the cursor; **Delete** removes the one after it. The Clear button empties the display entirely; the curved-arrow button steps through the undo stack one edit at a time; the ⌫ button deletes the character before the caret. Why the bars make two cases out of one equation is explained in [what is absolute value](!#what-is-absolute-value).`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Eight Form Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card generates a random equation of that form. Clicking again produces a new random version.

&bull; **Simple** &mdash; $|x + a| = b$. Coefficient of 1 on the variable; the base case.
&bull; **With Coefficient** &mdash; $|ax + b| = c$. Requires solving each branch as a two-step linear equation.
&bull; **Equals Zero** &mdash; $|ax + b| = 0$. Single solution; the two cases collapse.
&bull; **No Solution** &mdash; $|expression| = $ negative. The solver detects and rejects immediately.
&bull; **Isolate First** &mdash; $|x + a| + b = c$. Requires subtracting $b$ before splitting into cases.
&bull; **Coefficient Outside** &mdash; $a \\cdot |x + b| = c$. Requires dividing by $a$ before splitting.
&bull; **Abs Both Sides** &mdash; $|ax + b| = |cx + d|$. Uses the $A = B$ or $A = -B$ case split.
&bull; **Fraction Inside** &mdash; $|x/a + b| = c$. Tests fractional-coefficient handling inside the bars.

Roughly 80 percent of generated equations produce clean integer solutions; the rest exercise the special cases and edge scenarios. Loading a template clears the previous solution; click Solve to work the new equation. The split applied to every template is justified in [the two-case split](!#the-two-case-split-why-it-works).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The step sequence depends on the structural case.

&bull; **Rearrange** &mdash; if the absolute value is on the right side, the solver swaps sides for clarity.
&bull; **Isolate Absolute Value** &mdash; subtracts an additive constant or divides by a coefficient outside the bars to leave $|\\text{expression}| = c$ alone on one side.
&bull; **No Solution** (when applicable) &mdash; if the isolated right side is negative, the solver flags impossibility and stops.
&bull; **Zero Case** (when applicable) &mdash; if the isolated right side equals zero, the inner expression must equal zero. Single solution returned.
&bull; **Split into Two Cases** &mdash; for $|A| = c > 0$, splits into $A = c$ and $A = -c$.
&bull; **Case 1: Positive** &mdash; solves the linear equation $A = c$ for the variable.
&bull; **Case 2: Negative** &mdash; solves the linear equation $A = -c$ for the variable.
&bull; **Verify Both Solutions** &mdash; substitutes each candidate back into the original to confirm the absolute value evaluates to the right side.

For $|A| = |B|$ equations, the solver uses **Case 1: A = B** and **Case 2: A = -B** instead of the positive/negative split. $|x - 1| = |2x + 4|$ gives $x = -5$ or $x = -1$; $|x| + 3 = 1$ isolates to $|x| = -2$ and ends in No solution. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. The three stages are set out in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `The Two-Case Split — Why It Works`,
    content: `The absolute value function strips off the sign of its input. $|5| = 5$ and $|-5| = 5$. Two different inputs can produce the same output.

**The principle.** For any real number $A$,

$$|A| = \\begin{cases} A & \\text{if } A \\geq 0 \\\\ -A & \\text{if } A < 0 \\end{cases}$$

So $|A| = c$ does not determine the sign of $A$. Both $A = c$ and $A = -c$ satisfy the equation. The solver must consider both possibilities and produce both solutions (or whichever turns out to be valid).

**Example.** $|x - 4| = 7$. The expression inside is $x - 4$. Two cases:

&bull; **Case 1**: $x - 4 = 7$, so $x = 11$.
&bull; **Case 2**: $x - 4 = -7$, so $x = -3$.

Check: $|11 - 4| = |7| = 7$ ✓ and $|{-3} - 4| = |{-7}| = 7$ ✓. Both solutions are valid.

**Edge cases the solver detects automatically.**

&bull; **$|A| = c$ with $c < 0$**: no solution. An absolute value cannot be negative.
&bull; **$|A| = 0$**: one solution. The inner expression must be exactly zero, so the two cases collapse.
&bull; **$|A| = |B|$**: two cases on inputs rather than outputs. Either $A = B$ or $A = -B$. The principle is the same: both sign assignments of the right-hand expression must be checked.

For deeper coverage see **absolute value** and **piecewise definition of absolute value**.

The split is worked in [the basic equation](!/algebra/equations/absolute-value#2) and [solving equations of the form |f(x)| = k](!/algebra/equations/absolute-value#3); when a case can fail is [absolute value and extraneous solutions](!/algebra/equations/absolute-value#6).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is Absolute Value?`,
    content: `The absolute value of a real number $x$, written $|x|$, is its distance from zero on the number line:

$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$

Equivalently, $|x| = \\sqrt{x^2}$. Absolute value is always non-negative: $|x| \\geq 0$ for every real $x$, with equality only when $x = 0$.

**Key properties.**

&bull; **Non-negativity**: $|x| \\geq 0$, with equality iff $x = 0$.
&bull; **Symmetry**: $|-x| = |x|$. The function is even.
&bull; **Multiplicativity**: $|xy| = |x| \\cdot |y|$.
&bull; **Triangle inequality**: $|x + y| \\leq |x| + |y|$, with equality when $x$ and $y$ have the same sign.

**Graph.** The graph of $y = |x|$ is a V-shape with vertex at the origin and slopes of $\\pm 1$ on the two branches. The graph of $y = |ax + b|$ is a V with vertex at $x = -b/a$.

**Geometric interpretation.** $|x - a|$ is the distance between $x$ and $a$ on the number line. The equation $|x - a| = c$ asks: which points are exactly $c$ units from $a$? Answer: $a + c$ and $a - c$.

For deeper coverage see **absolute value function**, **distance on the number line**, and **piecewise functions**.

The definition is given in [definition of absolute value](!/algebra/equations/absolute-value#1), the distance reading in [geometric interpretation](!/algebra/equations/absolute-value#7), and the place of these equations among the equation types in [absolute value equations](!/algebra/equations#10).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Three stages solve any absolute value equation. The first is mandatory; the second branches on the structural case.

&bull; **Stage 1: Isolate the absolute value.** Move every term outside the bars to the other side. Subtract additive constants, then divide by any coefficient multiplying the absolute value expression. The goal is to reach the form $|A| = c$ where $A$ is the expression inside the bars and $c$ is a single number on the other side.

&bull; **Stage 2: Examine the right side.**

  &bull; **If $c < 0$**: no solution. Stop.
  &bull; **If $c = 0$**: the inner expression equals zero. Solve $A = 0$ as a linear equation. Single solution.
  &bull; **If $c > 0$**: split into two cases.

&bull; **Stage 3: Solve the two cases (when $c > 0$).**

  &bull; **Case 1**: $A = c$. Solve as a linear equation in $x$.
  &bull; **Case 2**: $A = -c$. Solve as a linear equation in $x$.

  Both solutions are valid by construction. No extraneous-check step needed for the standard form because the squaring trap of radical equations does not arise here.

**Variant: $|A| = |B|$.** Both sides absolute values. The analogous split: Case 1 is $A = B$, Case 2 is $A = -B$. Each yields a linear equation. Both solutions are valid.

**Variant with coefficient outside**: $a \\cdot |A| + d = c$. Subtract $d$, divide by $a$, then proceed with the standard split.

For comprehensive treatment see **solving absolute value equations** and **case analysis**.

The stages are worked in [solving equations of the form |f(x)| = k](!/algebra/equations/absolute-value#3) and [equations with absolute value on both sides](!/algebra/equations/absolute-value#4); several bars at once are treated in [equations with multiple absolute value terms](!/algebra/equations/absolute-value#5), and the forms are summarised in [summary of absolute value equation forms](!/algebra/equations/absolute-value#8).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Absolute Value Function** &mdash; $f(x) = |x|$. V-shaped graph with vertex at the origin.

**Absolute Value Inequalities** &mdash; equations with $<$, $>$, $\\leq$, or $\\geq$ instead of equals. Two subtypes: $|A| < c$ becomes a compound inequality $-c < A < c$; $|A| > c$ becomes a union of two inequalities $A < -c$ or $A > c$.

**Piecewise Functions** &mdash; functions defined by different rules on different intervals. The absolute value is the canonical example: $|x|$ equals $x$ on $[0, \\infty)$ and $-x$ on $(-\\infty, 0)$.

**Distance Formula** &mdash; the geometric interpretation of absolute value. $|x - a|$ is the distance between points $x$ and $a$ on the real line.

**Triangle Inequality** &mdash; $|x + y| \\leq |x| + |y|$. The fundamental inequality relating absolute values; appears throughout analysis.

**Modulus** &mdash; the absolute value generalized to complex numbers: $|a + bi| = \\sqrt{a^2 + b^2}$. The geometric interpretation as distance from origin extends to the complex plane.

**Norm** &mdash; the further generalization to vectors and other spaces. The absolute value is the one-dimensional norm.

**Linear Equations** &mdash; the equation type that results after splitting cases. The solver routes each case through a linear-equation step.

**Compound Inequalities** &mdash; used to express the solution set of an absolute value inequality. The form $|x - a| \\leq c$ corresponds to the compound inequality $a - c \\leq x \\leq a + c$.

The related tools are the [absolute value inequality solver](!/algebra/calculators/inequalities/absolute-value), the [linear equation solver](!/algebra/calculators/equations/linear) and the [complex numbers calculator](!/calculators/complex-numbers) for the modulus; the lessons are [geometric interpretation](!/algebra/equations/absolute-value#7) and [absolute value equations](!/algebra/equations#10).`,
    before: ``, after: ``, link: ''
  }
}
    },

    'literal': {
      component: 'LiteralEquationSolver',
      title: "Literal Equation Solver - Step-by-Step | Learn Math Class",
      description: "Step-by-step solver for literal equations: rearrange multi-variable formulas to solve for any chosen variable in terms of the others, returning a closed-form symbolic answer.",
      name: "Literal Equation Solver",
      url: "/algebra/calculators/equations/literal",
      h1: "Literal Equation Solver",
      category: 'Equations',
      subCategory: 'Solvers',
      icon: 'f(x)',
      keywords: [
        "literal equation solver",
        "rearrange formula",
        "solve for a variable",
        "multi-variable formula",
        "symbolic equation solver",
        "isolate variable formula",
        "physics formula rearrangement",
        "geometry formula rearrangement",
        "F = ma solve for a"
      ],
    faqQuestions: {
  obj1: {
    question: "What is a literal equation?",
    answer: "A literal equation is a formula with multiple variables, like A equals l times w or y equals mx plus b. Solving a literal equation means rearranging it to isolate one chosen variable in terms of the others. The result is a symbolic expression, not a numerical answer."
  },
  obj2: {
    question: "How do you solve a literal equation?",
    answer: "Pick a target variable to solve for. Move every term containing the target to one side and everything else to the other. Factor out the target if it appears in multiple terms, then divide both sides by the coefficient to isolate the target. The result is a closed-form expression."
  },
  obj3: {
    question: "Why solve for one variable in terms of others?",
    answer: "Many formulas are stated in a fixed direction (area equals length times width) but applications often need them inverted (width equals area divided by length). Rearranging once gives a direct formula for the quantity of interest, avoiding repeated case-by-case algebra."
  },
  obj4: {
    question: "What happens when the target variable appears in a power or denominator?",
    answer: "The solver handles only linear cases: the target must appear to the first power and not inside a denominator. For non-linear cases (square, square root, in a denominator), more advanced techniques are needed and the solver flags an error message."
  },
  obj5: {
    question: "How do I tell the solver which variable to solve for?",
    answer: "After entering the formula, every distinct letter is detected and listed as a target button under the equation display. Click the variable you want to isolate; it highlights in the equation. Then click Solve. The solver rearranges the formula and shows the result."
}
},
      /* calculators-mesh: view finished 2026-10-15 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
         Registry entry "/algebra/calculators/equations/literal" in calculators-mesh-registry.json (same folder): 6 instructions, 1 explanation text with anchor, 8 sections (4 usage with demos), lesson links to algebra/equations/linear, algebra/equations, algebra/roots, algebra/equations/quadratic.
         Before editing this view, read the instructions and re-run its checks (--view literal); keep the section ids and the anchors. */
      instructions: [
        `Build the formula in the display at the top: click the letter buttons in the **Var** rows, the **Num** and **Op** buttons, **π**, **^**, **²** and the brackets, or type any letter on the keyboard. [Learn more about building formulas](!#building-formulas-with-buttons-and-keyboard)`,
        `Under the display, click the letter you want to solve for in the **Solve for** row; it is underlined in the formula. [Learn more about the target](!#getting-started)`,
        `**Clear** empties the display, the curved arrow undoes the last edit and the ⌫ button deletes the character before the caret. [Learn more about editing](!#building-formulas-with-buttons-and-keyboard)`,
        `Click **Solve**, or press Enter in the display, once a formula and a target are set; a target that appears in a power or a denominator is refused. [Learn more about solving](!#getting-started)`,
        `Open **Try an Example** and click a card to load a formula from algebra, geometry, physics or finance. [Learn more about the templates](!#try-an-example-ten-formula-templates)`,
        `The right panel lists the moves from the original formula to the division by the coefficient, and the answer card gives the target in terms of the other letters; the box under the solver explains the method. [Learn more about the solution](!#reading-the-step-by-step-solution)`
      ],
      explanations: {
        main: {
          title: 'How the solver works',
          content: `The solver reads one formula with several letters and a target letter chosen under the display. It expands brackets that hold the target, moves every term with the target to one side and the rest to the other, factors the target out if it appears more than once, and divides by its coefficient, so the answer is the target in terms of the other letters. The target must appear to the first power and outside denominators; otherwise the solver says so. [Learn more about literal equations](!#what-is-a-literal-equation)`
        }
      },
      demos: {
        'getting-started': {
          title: 'd = r · t, a target, Solve, Clear',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK d, =, r, ×, t\nThe display reads d = r · t and the Solve for row shows d, r, t.', at: 'tr' },
            { click: { button: 'd', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: 'r', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: 't', exact: true } },
            { wait: 2600 },
            { say: 'CLICK t in the Solve for row, then Solve\nThe target is underlined; Isolate the Term and Divide Both Sides give t = d / r.', at: 'tr' },
            { click: { button: 't', exact: true, nth: 0 } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK r in the Solve for row, then Solve\nThe same formula rearranged for r: r = d / t.', at: 'tr' },
            { click: { button: 'r', exact: true, nth: 0 } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Clear\nThe display, the targets and the solution are emptied.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
          ],
        },
        'building-formulas-with-buttons-and-keyboard': {
          title: 'The perimeter formula, undo, delete, solve for w',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK P, =, 2, ×, l, +, 2, ×, w\nThe display reads P = 2 · l + 2 · w.', at: 'tr' },
            { click: { button: 'P', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: 'l', exact: true } },
            { click: { button: '+', exact: true } }, { click: { button: '2', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: 'w', exact: true } },
            { wait: 2600 },
            { say: 'CLICK the curved arrow\nThe last edit is undone: the w is gone, and so is its target button.', at: 'tr' },
            { click: { button: '↶', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ⌫\nThe × before the caret is deleted.', at: 'tr' },
            { click: { button: '⌫', exact: true } },
            { wait: 2200 },
            { say: 'CLICK ×, w, then w in the Solve for row, then Solve\nw = (P − 2 · l) / 2.', at: 'tr' },
            { click: { button: '×', exact: true } }, { click: { button: 'w', exact: true } },
            { click: { button: 'w', exact: true, nth: 0 } },
            { click: { button: 'Solve' } },
            { wait: 3600 },
          ],
        },
        'try-an-example-ten-formula-templates': {
          title: 'Open the templates, load two formulas',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK Try an Example\nTen cards, one per formula.', at: 'tr' },
            { click: { button: 'Try an Example' } },
            { wait: 2400 },
            { say: 'CLICK Slope-Intercept\ny = m · x + b loads with the targets y, m, x, b.', at: 'tr' },
            { click: { button: 'Slope-Intercept' } },
            { wait: 2400 },
            { say: 'CLICK m in the Solve for row, then Solve\nm = (y − b) / x.', at: 'tr' },
            { click: { button: 'm', exact: true, nth: 0 } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK Temperature\nF = 9 ÷ 5 · C + 32 replaces it; the old solution is cleared.', at: 'tr' },
            { click: { button: 'Temperature' } },
            { wait: 2600 },
          ],
        },
        'reading-the-step-by-step-solution': {
          title: 'A bracket to expand, then a target that is not linear',
          scale: 0.4,
          minHeight: 384,
          script: [
            { say: 'CLICK A, =, P, ×, (, 1, +, r, ×, t, ), then r in the Solve for row, then Solve\nThe bracket is expanded and r is isolated in terms of A, P and t.', at: 'tr' },
            { click: { button: 'A', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: 'P', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: '(', exact: true } },
            { click: { button: '1', exact: true } }, { click: { button: '+', exact: true } }, { click: { button: 'r', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: 't', exact: true } }, { click: { button: ')', exact: true } },
            { click: { button: 'r', exact: true, nth: 0 } },
            { click: { button: 'Solve' } },
            { wait: 3800 },
            { say: 'CLICK Clear\nBack to the placeholder on the right.', at: 'tr' },
            { click: { button: 'Clear', exact: true } },
            { wait: 2200 },
            { say: 'CLICK V, =, π, ×, r, ², ×, h, then r as the target, then Solve\nr is squared: the solver refuses with a message naming r.', at: 'tr' },
            { click: { button: 'V', exact: true } }, { click: { button: '=', exact: true } }, { click: { button: 'π', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: 'r', exact: true } },
            { click: { button: '²', exact: true } }, { click: { button: '×', exact: true } }, { click: { button: 'h', exact: true } },
            { click: { button: 'r', exact: true, nth: 0 } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
            { say: 'CLICK h as the target, then Solve\nh = V / (π · r²).', at: 'tr' },
            { click: { button: 'h', exact: true, nth: 0 } },
            { click: { button: 'Solve' } },
            { wait: 3400 },
          ],
        },
      },
      sectionOrder: [
        { id: 'getting-started', key: 'obj1', demo: 'getting-started' },
        { id: 'building-formulas-with-buttons-and-keyboard', key: 'obj2', demo: 'building-formulas-with-buttons-and-keyboard' },
        { id: 'try-an-example-ten-formula-templates', key: 'obj3', demo: 'try-an-example-ten-formula-templates' },
        { id: 'reading-the-step-by-step-solution', key: 'obj4', demo: 'reading-the-step-by-step-solution' },
        { id: 'when-the-solver-can-and-cannot-help', key: 'obj5', demo: null },
        { id: 'what-is-a-literal-equation', key: 'obj6', demo: null },
        { id: 'the-solving-process-explained', key: 'obj7', demo: null },
        { id: 'related-concepts', key: 'obj8', demo: null },
      ],
sectionsContent: {
  obj1: {
    title: `Getting Started`,
    content: `The solver shows an equation display at the top with a blinking yellow caret marking the cursor position. Click anywhere in the display to place the cursor, or use arrow keys, Home, and End for keyboard navigation. Type directly or use the button panel below.

Three quick experiments:

&bull; Type $V = I \\cdot R$ (Ohm's law) and press Enter &mdash; the solver detects three variables ($V$, $I$, $R$) and displays target buttons. Click $R$ to solve, then Solve: the result is $R = V / I$.
&bull; Click the &quot;Slope-Intercept&quot; example template &mdash; $y = mx + b$ loads. Pick $m$ as the target and the result is $m = (y - b) / x$.
&bull; Try the &quot;Cylinder Volume&quot; template: $V = \\pi r^2 h$. Solve for $h$ to get $h = V / (\\pi r^2)$. Try solving for $r$ &mdash; the solver flags an error because $r$ appears squared.

The Solve button is disabled until you both enter a formula and select a target variable. The selected target is underlined in yellow in the display. The target buttons appear under the display as soon as letters are typed; for $d = r \\cdot t$ the targets are $d$, $r$ and $t$, and solving for $t$ gives $t = d / r$. What a literal equation is, and why one formula has several rearranged forms, is explained in [what is a literal equation](!#what-is-a-literal-equation).`,
    before: ``, after: ``, link: ''
  },
  obj2: {
    title: `Building Formulas with Buttons and Keyboard`,
    content: `The button panel groups inputs by type. All inputs can be made either by clicking or typing on the keyboard.

&bull; **Variable rows** &mdash; an extended palette of common formula letters: $x$, $y$, $A$, $P$, $V$, $r$, $h$, $l$, $w$, $m$, $b$, $d$, $t$, $C$, $F$, $n$, $a$, $c$, $R$, $S$. Type any letter directly for variables not on the palette.
&bull; **Number row** &mdash; digits 0 through 9 and the decimal point.
&bull; **Operator row** &mdash; multiplication, division, plus, minus, equals.
&bull; **Special row** &mdash; $\\pi$, caret operator, $x^2$ shortcut, parentheses.

The variable palette is case-sensitive: capital $A$ and lowercase $a$ are treated as different variables. This matters for formulas like the simple-interest formula $A = P(1 + rt)$ where $A$ is amount and $a$ might be acceleration in a different context.

Keyboard shortcuts: type letters and digits directly, use star or slash for multiplication and division, type $\\pi$ as the Unicode character, and press Enter to solve. **Ctrl+Z** undoes up to fifty edits back; **Backspace** and **Delete** behave as expected. The Clear button empties the display; the curved-arrow button steps through the undo stack one edit at a time; the ⌫ button deletes the character before the caret. Why only linear formulas can be rearranged this way is explained in [when the solver can and cannot help](!#when-the-solver-can-and-cannot-help). Clearing the formula also resets the target variable selection.`,
    before: ``, after: ``, link: ''
  },
  obj3: {
    title: `Try an Example — Ten Formula Templates`,
    content: `Click the &quot;Try an Example&quot; header to expand the template panel. Each card loads a real-world formula.

&bull; **Slope-Intercept** &mdash; $y = mx + b$. Solve for $m$, $b$, or $x$.
&bull; **Area of Rectangle** &mdash; $A = l \\cdot w$. Solve for $l$ or $w$.
&bull; **Perimeter** &mdash; $P = 2l + 2w$. Solve for $l$ or $w$.
&bull; **Distance** &mdash; $d = r \\cdot t$. Solve for $r$ or $t$.
&bull; **Cylinder Volume** &mdash; $V = \\pi r^2 h$. Solve for $h$ (linear in $h$) or $\\pi$ (linear in $\\pi$).
&bull; **Temperature** &mdash; $F = (9/5) C + 32$. Solve for $C$ to get the inverse conversion.
&bull; **Standard Form Line** &mdash; $ax + by = c$. Solve for $x$, $y$, $a$, $b$, or $c$.
&bull; **Kinematic** &mdash; $d = vt + (1/2) at^2$. Solve for $v$ or $a$ (linear); $t$ is not linear.
&bull; **Simple Interest** &mdash; $A = P(1 + rt)$. Solve for $P$, $r$, or $t$.
&bull; **Ohm's Law** &mdash; $V = IR$. Solve for $I$ or $R$.

These cover common formulas from algebra, geometry, physics, and finance &mdash; the typical use cases for literal equation rearrangement. Loading a template clears the previous solution; pick a target, then click Solve. The moves applied to every template are listed in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj4: {
    title: `Reading the Step-by-Step Solution`,
    content: `The solution panel shows each algebraic move as a labeled step. The sequence depends on where the target variable appears.

&bull; **Original Equation** &mdash; restates the input for reference.
&bull; **Isolate the Variable** &mdash; for formulas where the target has coefficient 1 (or -1) and appears alone, this step moves everything else to the other side.
&bull; **Isolate the Term** &mdash; for formulas where the target has a non-trivial coefficient (like $V = IR$ solving for $R$), this step moves the non-target terms to the other side, leaving the coefficient-times-target on one side.
&bull; **Divide Both Sides** &mdash; divides by the coefficient of the target to isolate it. Produces a fraction in the result if the coefficient is not 1.
&bull; **Solution** &mdash; final restated answer showing $\\text{target} = \\text{expression}$.

The final-answer card at the bottom renders the result with proper fraction notation: numerator above a horizontal bar, denominator below. This makes the symbolic answer easy to read at a glance.

For identity cases (the target cancels out and both sides are equal), the solver reports &quot;Identity&quot;. For contradictions (the target cancels but the constants do not match), it reports &quot;No solution&quot;. A target that is not linear, such as $r$ in $V = \\pi r^2 h$, is refused with a message naming the variable, while $h$ in the same formula gives $h = V / (\\pi r^2)$. The box under the solver, **How the solver works**, summarises the method in a few lines and links to the theory below. The four moves are set out in [the solving process explained](!#the-solving-process-explained).`,
    before: ``, after: ``, link: ''
  },
  obj5: {
    title: `When the Solver Can and Cannot Help`,
    content: `The solver handles the standard linear case: the target variable appears to the first power, not inside denominators, not as part of products with itself.

**Cases the solver handles.**

&bull; **Simple linear** &mdash; $y = mx + b$ for any of $y$, $m$, $b$, $x$.
&bull; **Multiplicative** &mdash; $A = lw$, $V = IR$, $d = rt$. Solve for any factor.
&bull; **Mixed sum and product** &mdash; $P = 2l + 2w$. Each variable is linear.
&bull; **With parameter expressions** &mdash; $V = \\pi r^2 h$ for $h$ (linear in $h$, despite the $r^2$); $A = P(1 + rt)$ for $P$, $r$, or $t$.

**Cases the solver flags as not linear.**

&bull; **Target appears in a power** &mdash; $V = \\pi r^2 h$ solved for $r$ requires a square root, not isolated by linear moves.
&bull; **Target appears in a denominator** &mdash; $f = 1/(R_1 + R_2)$ solved for $R_1$ requires cross-multiplication first.
&bull; **Target appears in two products with non-constant factors** &mdash; the solver detects this and reports the equation is not linear in the target.
&bull; **Target multiplied by itself** &mdash; $A = \\pi r^2$ for $r$ involves a square root.

For non-linear cases, manual rearrangement combining the radical-equation or quadratic-equation techniques is needed. The solver guides you to the right tool by flagging the structural issue.

For deeper coverage see **rearranging formulas** and **symbolic manipulation**.

The linear case is treated in [literal equations and formulas](!/algebra/equations/linear#8); the cases the solver refuses need [equations with radicals](!/algebra/roots#7) or [the quadratic formula](!/algebra/equations/quadratic#4).`,
    before: ``, after: ``, link: ''
  },
  obj6: {
    title: `What is a Literal Equation?`,
    content: `A literal equation is an equation containing two or more variables (letters representing quantities) where the relationship between them is fixed by a formula. Common examples come from every quantitative field:

&bull; **Geometry** &mdash; $A = lw$ (area of rectangle), $C = 2\\pi r$ (circumference of circle), $V = \\pi r^2 h$ (cylinder volume).
&bull; **Algebra** &mdash; $y = mx + b$ (slope-intercept form of a line), $ax + by = c$ (standard form).
&bull; **Physics** &mdash; $F = ma$ (Newton's second law), $V = IR$ (Ohm's law), $d = vt + (1/2)at^2$ (kinematic).
&bull; **Finance** &mdash; $A = P(1 + rt)$ (simple interest), $A = P(1 + r/n)^{nt}$ (compound interest).
&bull; **Conversion** &mdash; $F = (9/5)C + 32$ (Celsius to Fahrenheit).

**Solving a literal equation** means choosing one of the variables as the **subject** (the target) and rewriting the equation so that variable stands alone on one side. The result expresses the target as a function of the other variables.

The same formula can be solved for any of its variables, yielding a different rearranged form each time. For example, $V = IR$ gives three useful forms: $V = IR$, $I = V/R$, and $R = V/I$.

For deeper coverage see **formulas**, **algebraic manipulation**, and **changing the subject of a formula**.

Formulas as equations are introduced in [what an equation is](!/algebra/equations#1), the rearrangement in [literal equations and formulas](!/algebra/equations/linear#8), and the forms a linear equation can take in [summary of linear equation forms](!/algebra/equations/linear#9).`,
    before: ``, after: ``, link: ''
  },
  obj7: {
    title: `The Solving Process Explained`,
    content: `Four moves rearrange any linear literal equation. The moves are the same as for numerical linear equations, but applied symbolically.

&bull; **Move 1: Distribute brackets containing the target.** If the target appears inside a bracketed expression multiplied by something else, distribute first. Example: $A = P(1 + rt)$ for $r$ becomes $A = P + Prt$.

&bull; **Move 2: Collect target-containing terms.** Move every term containing the target to one side and every term not containing the target to the other. Use addition or subtraction on both sides. Example: $A - P = Prt$ after subtracting $P$.

&bull; **Move 3: Factor the target (if it appears in multiple terms).** Pull the target out as a common factor. Example: if you had $A = Prt + Pr$, factor to $A = Pr(t + 1)$.

&bull; **Move 4: Divide both sides by the coefficient of the target.** The coefficient is whatever multiplies the target after collecting. Example: $A - P = Prt$ becomes $r = (A - P) / (Pt)$.

Each move preserves the equality. Symbolic manipulation works the same as numerical manipulation: what you do to one side, you do to the other.

**The solver implementation.** Internally, the solver builds an expression-tree representation of the equation and computes the linear decomposition $\\text{coeff} \\cdot \\text{target} + \\text{constant} = 0$ where coeff and constant are symbolic expressions (not numbers). The solution is then $\\text{target} = -\\text{constant} / \\text{coeff}$, simplified for readability.

For comprehensive treatment see **solving formulas for a variable** and **symbolic algebra**.

The moves rest on [properties of equality](!/algebra/equations/linear#2) and [equivalent equations](!/algebra/equations#4); they are practised with numbers in [solving single-step and multi-step equations](!/algebra/equations/linear#3) and [equations with parentheses](!/algebra/equations/linear#4).`,
    before: ``, after: ``, link: ''
  },
  obj8: {
    title: `Related Concepts`,
    content: `**Formula Rearrangement** &mdash; the general process of changing which variable is the subject. Literal-equation solving is the algebraic technique behind it.

**Linear Equations** &mdash; literal equations specialized to a single unknown with concrete numerical coefficients. The solver routes through the same isolation logic.

**Function Inverse** &mdash; if $y = f(x)$, solving for $x$ in terms of $y$ produces the inverse function $x = f^{-1}(y)$. Literal-equation solving is the algebraic way to find an inverse.

**Symbolic Manipulation** &mdash; the general field of algebraic transformations performed on expressions containing variables. Computer algebra systems perform symbolic manipulation at industrial scale; this solver does a constrained subset.

**Substitution** &mdash; the reverse operation. After solving $A = lw$ for $w = A/l$, you can substitute the rearranged form into another formula containing $w$.

**Slope-Intercept Form** &mdash; $y = mx + b$. The most commonly rearranged literal equation in introductory algebra.

**Quadratic Formula** &mdash; an example of literal-equation rearrangement at scale: $ax^2 + bx + c = 0$ solved for $x$ in terms of $a$, $b$, $c$ gives the quadratic formula. The result is a closed-form expression in three symbolic parameters.

**Physical Formulas** &mdash; many appear in textbooks in one form and must be rearranged to compute different quantities. The kinematic equation $d = v_0 t + (1/2) a t^2$ commonly needs rearrangement for $v_0$ or $a$.

**Geometry Formulas** &mdash; area, volume, and surface-area formulas commonly require solving for dimensions when other quantities are given. Example: the volume of a cylinder is $V = \\pi r^2 h$, solved for $h$ when $V$ and $r$ are known.

The related tools are the [linear equation solver](!/algebra/calculators/equations/linear), the [quadratic equation solver](!/algebra/calculators/equations/quadratic) and the [radical equation solver](!/algebra/calculators/equations/radical); the lessons are [literal equations and formulas](!/algebra/equations/linear#8) and [quadratic equations](!/algebra/equations#7).`,
    before: ``, after: ``, link: ''
  }
}
    },

  }

  const currentConfig = viewConfig[params.view]

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentConfig.name,
      "description": currentConfig.description,
      "url": `https://www.learnmathclass.com${currentConfig.url}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": getFeatureList(params.view),
      "author": {
        "@type": "Organization",
        "name": "Learn Math Class"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "inLanguage": "en-US",
      "isAccessibleForFree": true,
      "learningResourceType": "Interactive Tool",
      "educationalLevel": "High School, College",
      "keywords": currentConfig.keywords.join(", ")
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
          "name": "Calculators",
          "item": "https://www.learnmathclass.com/algebra/calculators"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": currentConfig.name,
          "item": `https://www.learnmathclass.com${currentConfig.url}`
        }
      ]
    },

    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": Object.keys(currentConfig.faqQuestions).map(key => ({
        "@type": "Question",
        "name": currentConfig.faqQuestions[key].question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": currentConfig.faqQuestions[key].answer
        }
      }))
    }
  }

  return {
    props: {
      sectionsContent: currentConfig.sectionsContent,
      faqQuestions: currentConfig.faqQuestions,
      schemas,
      seoData: {
        title: currentConfig.title,
        description: currentConfig.description,
        keywords: currentConfig.keywords.join(", "),
        url: currentConfig.url,
        name: currentConfig.name
      },
      currentView: params.view,
      componentName: currentConfig.component,
      h1Title: currentConfig.h1,
      instructions: currentConfig.instructions || [],
      explanations: currentConfig.explanations || null,
      demos: currentConfig.demos || {},
      sectionOrder: currentConfig.sectionOrder || []
    }
  }
}


function getFeatureList(view) {
  const features = {
    'linear': [
      "Step-by-step solution for linear equations",
      "Bracket expansion and like-term combination",
      "Identity and contradiction detection",
      "Exact fraction output"
    ],
    'quadratic': [
      "Discriminant computation and case routing",
      "Quadratic formula with exact roots",
      "Vertex coordinates and parabola graph",
      "Perfect-square factoring when applicable"
    ],
    'polynomial': [
      "Degrees 1 through 4 supported",
      "Rational root theorem enumeration",
      "Synthetic division root extraction",
      "Newton's method fallback for irrational roots"
    ],
    'rational': [
      "Restricted value identification",
      "Least common denominator computation",
      "Fraction clearing via LCD multiplication",
      "Extraneous solution checking"
    ],
    'radical': [
      "Square root, cube root, and nth root support",
      "Radical isolation and power-raising",
      "Resulting equation solved by routine",
      "Substitution-back verification of every candidate"
    ],
    'exponential': [
      "Exponential term isolation",
      "Base-matching for exact integer/rational solutions",
      "Natural logarithm fallback",
      "Power rule application for variable exponents"
    ],
    'logarithmic': [
      "Equal-logarithms property recognition",
      "Logarithm isolation",
      "Conversion to exponential form",
      "Domain restriction handling"
    ],
    'absolute-value': [
      "Absolute value isolation",
      "Two-branch case splitting (interior positive/negative)",
      "Edge cases: zero and negative right-hand sides",
      "|A| = |B| variant supported"
    ],
    'literal': [
      "Auto-detection of all variables in expression",
      "Target variable selection via button row",
      "Symbolic decomposition into coefficient and constant",
      "Closed-form symbolic answer"
    ]
  }
  return features[view] || []
}


export default function AlgebraEquationViewPage({
  seoData,
  sectionsContent,
  faqQuestions,
  schemas,
  currentView,
  componentName,
  h1Title,
  instructions = [],
  explanations = null,
  demos = {},
  sectionOrder = []
}) {

  // the file's old fixed list, kept for views without a sectionOrder yet
  const buildOldGenericSections = () => Object.keys(sectionsContent).length > 0
    ? [
        { id: '1', title: sectionsContent.obj1?.title || '', link: '', content: sectionsContent.obj1?.content || '' },
        { id: '2', title: sectionsContent.obj2?.title || '', link: '', content: sectionsContent.obj2?.content || '' },
        { id: '3', title: sectionsContent.obj3?.title || '', link: '', content: sectionsContent.obj3?.content || '' },
        { id: '4', title: sectionsContent.obj4?.title || '', link: '', content: sectionsContent.obj4?.content || '' },
        { id: '5', title: sectionsContent.obj5?.title || '', link: '', content: sectionsContent.obj5?.content || '' },
        { id: '6', title: sectionsContent.obj6?.title || '', link: '', content: sectionsContent.obj6?.content || '' },
        { id: '7', title: sectionsContent.obj7?.title || '', link: '', content: sectionsContent.obj7?.content || '' },
        { id: '8', title: sectionsContent.obj8?.title || '', link: '', content: sectionsContent.obj8?.content || '' },
      ].filter(section => section.title)
    : []

  const renderCalculator = (demoProps = {}) => {
    if (componentName === 'LinearEquationSolver') return <LinearEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'QuadraticEquationSolver') return <QuadraticEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'PolynomialEquationSolver') return <PolynomialEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'RationalEquationSolver') return <RationalEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'RadicalEquationSolver') return <RadicalEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'ExponentialEquationSolver') return <ExponentialEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'LogarithmicEquationSolver') return <LogarithmicEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'AbsValueEquationSolver') return <AbsValueEquationSolver explanations={explanations || undefined} {...demoProps} />;
    if (componentName === 'LiteralEquationSolver') return <LiteralEquationSolver explanations={explanations || undefined} {...demoProps} />;
    return null;
  };

  const demoOptOut = {};

  const genericSections = sectionOrder.length > 0
    ? sectionOrder.map((s) => ({
        id: s.id,
        title: sectionsContent[s.key].title,
        link: sectionsContent[s.key].link || '',
        content: [
          ...[s.demo, s.demo2].filter(Boolean).map((d) => (
            <ToolDemoPlayer
              key={`demo-${s.id}-${d}`}
              script={demos[d].script}
              title={demos[d].title}
              label={`Demo: ${demos[d].title}`}
              scale={demos[d].scale || 0.6}
              minHeight={demos[d].minHeight || undefined}
              renderText={processContent}
            >
              {renderCalculator(demoOptOut)}
            </ToolDemoPlayer>
          )),
          sectionsContent[s.key].content,
        ],
      }))
    : buildOldGenericSections()

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
            __html: JSON.stringify(schemas.webApplication)
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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb nonLinkSegments={['equations']} />
      <br />
      <br />
      <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>{h1Title}</h1>
      {instructions.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <ExplanationDetails instructions={instructions} title={`How to use ${h1Title}`} />
        </div>
      )}

      <SiblingsNav
        title="Equations"
        maxWidth='1800px'
        topOffset='100px'
        bg='#ffffff'
        color='#304090'
        activeColor='#1e40af'
        activeBg='#dbeafe'
        width='220px'
        gap='20px'
        childMaxWidth='100%'
      >
        <div className='solver-stretch'>
          <style dangerouslySetInnerHTML={{ __html: `
            .solver-stretch {
              width: 100%;
            }
            .solver-stretch > * {
              max-width: 1300 !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
            .solver-stretch > * > * {
              max-width: 1300px !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          ` }} />
          {renderCalculator()}
        </div>
      </SiblingsNav>

      <br />
      {genericSections.length > 0 && (
        <>
          <SectionTableOfContents sections={genericSections} />
          <br />
          <br />
          <br />
          <Sections sections={genericSections} />
        </>
      )}
      <br />
      <br />
      <br />
    </>
  )
}