import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import SiblingsNav from '../../../../app/components/SiblingsNav'
import LinearSystemsCalculator from '@/app/components/calculators/linear-system/LinearSystemsCalculator'
import ExplanationDetails from '@/app/components/ExplanationDetails'
import ToolDemoPlayer from '@/app/components/demo-player/ToolDemoPlayer'
import { processContent } from '@/app/utils/contentProcessor'


/* calculators-mesh: finished 2026-10-16 with session-docs/methodology/linking/calculators-mesh/calculators-mesh-instructions-v1.md.
   Registry entry "/linear-algebra/calculators/linear-systems" in calculators-mesh-registry.json (same folder): 6 usage sections, each with a demo; 5 panel notes; 15 sections with fixed slug ids.
   Before editing this page, read the instructions and re-run its checks; keep the section ids and the anchors. */
export async function getStaticProps(){
const keyWords = [
  'linear systems calculator',
  'system of equations solver',
  'Gaussian elimination calculator',
  'Gauss-Jordan calculator',
  'Cramers rule calculator',
  'matrix inverse method solver',
  'augmented matrix calculator',
  'solve linear equations online',
  'row echelon form calculator',
  'RREF calculator',
  'system of linear equations',
  'linear algebra solver',
  'simultaneous equations calculator',
  'back substitution calculator',
  'free equation solver'
];

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

  const linearSystemsExplanations = {
  _default:
    'Enter a system of linear equations. Choose a solution method and click Solve to find the unknowns. [Learn more about choosing a method](!#choosing-the-method)',
  'Gaussian Elimination':
    'Reduces the augmented matrix [A|b] to row echelon form via forward elimination, then uses back-substitution to find the solution. Time complexity O(n^3). [Learn more about Gaussian elimination](!#gaussian-elimination)',
  'Gauss-Jordan':
    'Extends Gaussian elimination by reducing the matrix to reduced row echelon form (RREF), eliminating above and below each pivot. The solution is read directly from the last column. [Learn more about Gauss-Jordan elimination](!#gauss-jordan-elimination)',
  "Cramer's Rule":
    'Uses determinants to solve square systems. Each variable xi = det(Ai)/det(A), where Ai is A with column i replaced by b. Requires det(A) != 0. Elegant but O(n!) for large n. [Learn more about Cramer\'s rule](!#cramers-rule)',
  'Inverse Method':
    'Computes x = A^(-1)b directly. Requires A to be square and non-singular (det(A) != 0). The inverse is found via Gauss-Jordan on [A|I]. [Learn more about the inverse method](!#inverse-method)',
};


const sectionsContent = {

  obj0: {
    title: `Key Terms`,
    content: ``,
    before: ``,
    after: ``,
    link: '',
  },

  obj1: {
    title: `Gaussian Elimination`,
    content: `Gaussian elimination reduces an augmented matrix $[A|\\mathbf{b}]$ to row echelon form (REF) through three elementary row operations: swapping rows, scaling a row by a nonzero constant, and adding a multiple of one row to another.

The process works column by column from left to right. For each column, a pivot element is selected (using partial pivoting for numerical stability), and all entries below the pivot are eliminated. The result is an upper triangular system that is solved via **back-substitution**, working from the last equation upward.

$$a_{11}x_1 + a_{12}x_2 + \\cdots = b_1$$
$$a_{22}x_2 + \\cdots = b_2$$
$$\\ddots$$

Gaussian elimination has $O(n^3)$ time complexity and is the foundation of most direct solvers for linear systems.

The lesson works the algorithm through in [Forward elimination](!/linear-algebra/linear-systems/gaussian-elimination#3) and [Back substitution](!/linear-algebra/linear-systems/gaussian-elimination#5); [Partial pivoting](!/linear-algebra/linear-systems/gaussian-elimination#11) explains the pivot choice this calculator makes, and [Computational cost](!/linear-algebra/linear-systems/gaussian-elimination#10) the $O(n^3)$ count.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj2: {
    title: `Gauss-Jordan Elimination`,
    content: `Gauss-Jordan elimination extends [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination#3) by continuing to reduce the matrix to reduced row echelon form (RREF). After creating zeros below each pivot (forward elimination), it also eliminates all entries above each pivot (backward elimination) and scales each pivot to 1.

The result is an identity-like structure on the left side of the augmented matrix, and the solution vector appears directly in the rightmost column — no back-substitution is needed.

Gauss-Jordan is slightly more expensive than standard Gaussian elimination (roughly 50% more operations) but produces a cleaner final form. It is also the method used to compute [matrix inverses](!/linear-algebra/matrix/inverse#4) by applying the process to $[A|I]$.

See [Gauss-Jordan elimination](!/linear-algebra/linear-systems/gaussian-elimination#6) for the full procedure, [Reduced row echelon form](!/linear-algebra/linear-systems/echelon-form#2) for the target form, and [Computing the inverse by row reduction](!/linear-algebra/matrix/inverse#4) for the same idea applied to $[A|I]$.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj3: {
    title: `Cramer&apos;s Rule`,
    content: `Cramer&apos;s Rule solves a square system $A\\mathbf{x} = \\mathbf{b}$ by expressing each unknown as a ratio of [determinants](!/linear-algebra/determinants#1):

$$x_i = \\frac{\\det(A_i)}{\\det(A)}$$

where $A_i$ is the matrix $A$ with its $i$-th column replaced by $\\mathbf{b}$. The method requires $\\det(A) \\neq 0$, meaning the system must have a unique solution.

While Cramer&apos;s Rule is elegant and useful for theoretical analysis and small systems (2x2, 3x3), it becomes computationally impractical for large systems due to $O(n!)$ complexity of naive determinant computation. For practical computation, **Gaussian elimination** is preferred.

The rule is proved in [Cramer's rule](!/linear-algebra/determinants/applications#1); [Singular and nonsingular matrices](!/linear-algebra/determinants#5) explains why $\\det(A) = 0$ rules it out, and [Determinant-based formulas](!/linear-algebra/determinants#10) places it among the other determinant formulas.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj4: {
    title: `Inverse Method`,
    content: `The inverse method solves $A\\mathbf{x} = \\mathbf{b}$ by computing $\\mathbf{x} = A^{-1}\\mathbf{b}$ directly. This requires $A$ to be square and non-singular ($\\det(A) \\neq 0$).

The calculator finds $A^{-1}$ using [Gauss-Jordan elimination](!/linear-algebra/linear-systems/gaussian-elimination#6) on the augmented matrix $[A|I]$. Row operations transform the left side into $I$, and the right side becomes $A^{-1}$.

The inverse method is most useful when solving multiple systems with the same coefficient matrix but different right-hand sides, since $A^{-1}$ only needs to be computed once. For a single system, Gaussian elimination is more efficient because computing the full inverse requires more operations than directly solving the system.

See [Solving systems with the inverse](!/linear-algebra/matrix/inverse#7), [When does the inverse exist](!/linear-algebra/matrix/inverse#3) and, for the warning in the last paragraph, [When not to compute the inverse](!/linear-algebra/matrix/inverse#10).`,
    before: ``,
    after: ``,
    link: '',
  },

  obj5: {
    title: `Types of Solutions`,
    content: `A system of linear equations has exactly one of three solution types:

**Unique solution** -- the system has exactly one set of values satisfying all equations. This occurs when the coefficient matrix has full rank (rank equals the number of unknowns). The graph shows lines intersecting at a single point.

**Infinitely many solutions** -- the system is consistent but underdetermined. This occurs when the rank is less than the number of unknowns and no contradictions exist. Solutions form a line, plane, or higher-dimensional subspace.

**No solution** -- the system is inconsistent. This occurs when row reduction produces a row of the form $[0 \\; 0 \\; \\cdots \\; 0 \\; | \\; c]$ where $c \\neq 0$. Geometrically, this means parallel lines or planes that never intersect.

The three cases are introduced in [The three possible outcomes](!/linear-algebra/linear-systems#4) and proved in [The three cases combined](!/linear-algebra/linear-systems/solvability#4); [Rank and linear systems](!/linear-algebra/matrix/rank#5) gives the rank test, and [Detecting inconsistency](!/linear-algebra/linear-systems/echelon-form#8) shows the tell-tale row.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj6: {
    title: `Augmented Matrix Representation`,
    content: `The augmented matrix $[A|\\mathbf{b}]$ combines the coefficient matrix and the constants vector into a single matrix for efficient manipulation. For a system with $m$ equations and $n$ unknowns:

$$\\left[\\begin{array}{cccc|c} a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\ a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\ \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m \\end{array}\\right]$$

Row operations on the augmented matrix correspond exactly to valid algebraic manipulations of the equations. The calculator supports both equation input (showing the algebraic form) and matrix input (showing the augmented matrix directly).

See [The augmented matrix](!/linear-algebra/linear-systems#3) and [Elementary row operations](!/linear-algebra/linear-systems#6) in the linear systems lesson.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj7: {
    title: `Row Echelon Form vs Reduced Row Echelon Form`,
    content: `**Row echelon form (REF)** is the result of [Gaussian elimination](!/linear-algebra/linear-systems/gaussian-elimination#3). Requirements: all zero rows are at the bottom, each leading entry (pivot) is to the right of the one above it, and all entries below each pivot are zero. REF requires back-substitution to find the solution.

**Reduced row echelon form (RREF)** is the result of [Gauss-Jordan elimination](!/linear-algebra/linear-systems/gaussian-elimination#6). In addition to REF requirements: every pivot equals 1, and every pivot is the only nonzero entry in its column. The solution can be read directly from the final matrix.

RREF is unique for any given matrix, while REF is not (different pivot choices produce different REF forms). Both forms preserve the solution set of the original system.

Both forms are defined in [Row echelon form](!/linear-algebra/linear-systems/echelon-form#1) and [Reduced row echelon form](!/linear-algebra/linear-systems/echelon-form#2); [Uniqueness of RREF](!/linear-algebra/linear-systems/echelon-form#3) proves the last claim.`,
    before: ``,
    after: ``,
    link: '',
  },

  obj8: {
    title: `Related Tools and Concepts`,
    content: `This linear systems calculator solves systems using four methods with step-by-step breakdowns and a 2D graph for two-variable systems. For matrix-specific operations like **determinants**, **inverses**, **LU decomposition**, and **Kronecker products**, use the **Matrix Operations Calculator**.

For vector-level computations including **dot products**, **cross products**, **projections**, **Gram-Schmidt orthogonalization**, and **linear independence checks**, use the **Vector Operations Calculator**. Related topics include **eigenvalues**, [rank](!/linear-algebra/matrix/rank#1), [null space](!/linear-algebra/linear-systems/homogeneous#3), and **least squares** solutions.

For the methods themselves see [Solution methods beyond row reduction](!/linear-algebra/linear-systems#10); the basics are in [What a linear system is](!/linear-algebra/linear-systems#1).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj9: {
    title: `Choosing the Input Mode`,
    content: `The left column of the calculator starts with **Input Mode** and two buttons. **Equations** lays the system out one line per equation: a numbered row with a box for each coefficient, the variable names $x_1, x_2, \\ldots$ printed between them, an equals sign and a last box for the constant. **Augmented Matrix** shows the same numbers as the matrix $[A|b]$: a grid of coefficient boxes on the left, a vertical bar, and a single column of constants on the right. The two views are two pictures of one system, so switching keeps every value you typed and the chosen method; nothing is cleared.

Use Equations when you are copying a system from a textbook, where the signs and variable names help you keep your place. Use Augmented Matrix when you want to see the matrix the row operations will act on, or when a matrix is what you were given. A plus sign is printed between the coefficient boxes in the Equations view, so a subtracted term is typed as a negative coefficient, for example $-1$ for $-x_2$. The matrix view and its notation are explained in [Augmented Matrix Representation](!#augmented-matrix-representation).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj10: {
    title: `Choosing the Method`,
    content: `Under the input mode, the **Method** list offers **Gaussian Elimination**, **Gauss-Jordan**, **Cramer's Rule** and **Inverse Method**. Gaussian Elimination is selected when the page opens; a dot marks the current choice. Clicking a method clears the last result but keeps your numbers, and the **Theory** tab of the panel on the right switches to a short description of that method with a link to its section on this page. All four methods give the same answer for a square system with a unique solution; they differ in how the answer is reached and in what the **Steps** tab shows afterwards.

Cramer's Rule and Inverse Method need a square system, one with as many equations as unknowns. As soon as the two size boxes differ, those two buttons grey out, cannot be clicked, and an orange note says that some methods require square systems. If one of them is already selected when you make the system non-square, clicking **Solve System** reports that the method requires a square system; pick Gaussian Elimination or Gauss-Jordan instead, which also handle systems with no solution or infinitely many solutions. Each method is explained in its own section, starting with [Gaussian Elimination](!#gaussian-elimination).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj11: {
    title: `Setting the System Size`,
    content: `Above the coefficient boxes sit the two size boxes, **Equations** and **Variables**, both set to $3$ when the page opens, so the editor shows a $3 \\times 3$ system; the heading **System of Equations (3×3)** and the note "3 equations, 3 unknowns" repeat the size. Each box takes a whole number from $1$ to $10$; a value outside that range is ignored and the boxes keep their old number. Changing a size rebuilds the grid at once: boxes that still fit keep their values, new rows or columns arrive empty, and the last result is cleared.

A system with more unknowns than equations, such as $2 \\times 4$, can only have no solution or infinitely many, and a system with more equations than unknowns is usually inconsistent; both are allowed, but only Gaussian Elimination and Gauss-Jordan can solve them, as the note under the boxes warns. The **Reset All** button at the top right of the editor returns the size to $3 \\times 3$, empties every box, selects Gaussian Elimination and the Equations view, and clears the result and the panel. Why the shape of the system decides the kind of answer is explained in [Types of Solutions](!#types-of-solutions).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj12: {
    title: `Entering the Coefficients`,
    content: `Type one number per box. In the Equations view each row reads coefficient, variable, plus, coefficient, and so on up to the equals sign and the constant; a term that is missing from an equation gets $0$, and a subtracted term gets a negative coefficient. In the Augmented Matrix view the coefficients fill the grid row by row and the constants fill the column after the bar. Decimals and negative numbers are accepted; an empty box shows the grey placeholder $0$ but counts as missing when you solve, so fill every box. Pressing Tab moves to the next box.

Two buttons sit above the boxes. **Random** fills every coefficient and constant with a whole number from $-10$ to $10$, useful for trying a method on a system you do not have to type; the size stays as it is. **Clear** empties every box but keeps the size, the method and the view. Both clear the last result. A worked system to type is $x_1 + x_2 + x_3 = 6$, $2x_1 - x_2 + x_3 = 3$, $x_1 + 2x_2 - x_3 = 2$, whose solution is $x_1 = 1$, $x_2 = 2$, $x_3 = 3$. How the typed numbers form the matrix $[A|b]$ is explained in [Augmented Matrix Representation](!#augmented-matrix-representation).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj13: {
    title: `Solving the System and Reading the Result`,
    content: `Click **Solve System** under the boxes. The calculator first checks the input: every empty or non-numeric box is listed in a red box headed "Please fix the following", naming the row and the variable, for example "Coefficient at row 1, x₁ is empty or invalid", and a square-only method on a non-square system is reported there too. When the input is complete, the answer appears in the **Solution** box below the button and the panel on the right switches to the **Steps** tab.

Three answers are possible. A **unique solution** lists every unknown, $x_1 = 1$, $x_2 = 2$, $x_3 = 3$ for the worked system above, with a note on why it is unique: the rank of $A$ equals the number of unknowns, or, for Cramer's Rule and the Inverse Method, the value of $\\det(A)$, here $7$. **No Solution** appears in red with the ranks that disagree, for example $x_1 + x_2 = 2$ together with $x_1 + x_2 = 3$ gives rank $1$ for $A$ but rank $2$ for $[A|b]$. **Infinite Solutions** appears in orange when the rank is below the number of unknowns, as for $x_1 + x_2 = 2$ with $2x_1 + 2x_2 = 4$. Cramer's Rule and the Inverse Method stop with a message whenever $\\det(A) = 0$ instead of telling the two cases apart. The three cases are explained in [Types of Solutions](!#types-of-solutions).`,
    before: ``,
    after: ``,
    link: '',
  },
  obj14: {
    title: `The Theory, Steps and Graph Panel`,
    content: `The panel on the right has three tabs. **Theory** is shown when the page opens: it names the selected method and gives a short description of what it does, ending with a link to the section of this page that explains it. **Steps** is empty until you solve; then the calculator jumps to it and lists the work, starting with the augmented matrix, then each row swap and each row operation such as $R_2 \\leftarrow R_2 - (2)R_1$ with the matrix after it, and finally the back-substitution or the RREF from which the unknowns are read. For Cramer's Rule the steps list the determinants, for the Inverse Method the inverse matrix. **Graph** draws the equations as lines for a system in two unknowns and marks the intersection when the solution is unique; for other sizes it explains that only two-variable systems are drawn.

Click a tab at any time to switch; the tabs do not change the input or the result, and the panel returns to Theory when you press Reset All. For the system $2x_1 + x_2 = 5$, $x_1 - x_2 = 1$ the solution is $x_1 = 2$, $x_2 = 1$ and the graph shows the two lines meeting at $(2, 1)$. The row operations the Steps tab lists are explained in [Gaussian Elimination](!#gaussian-elimination) and the two forms they aim for in [Row Echelon Form vs Reduced Row Echelon Form](!#row-echelon-form-vs-reduced-row-echelon-form).`,
    before: ``,
    after: ``,
    link: '',
  },

};

const faqQuestions = {
  obj1: {
    question: "What methods does this linear systems calculator support?",
    answer: "The calculator supports four solution methods: Gaussian elimination (forward elimination with back-substitution), Gauss-Jordan elimination (full reduction to RREF), Cramer's Rule (determinant-based solution for square systems), and the Inverse Method (computing x = A inverse times b). Each method includes step-by-step calculation breakdowns."
  },
  obj2: {
    question: "Which method should I use to solve a system of equations?",
    answer: "Gaussian elimination is the most versatile and efficient general-purpose method. Gauss-Jordan is useful when you want the solution without back-substitution. Cramer's Rule works well for small square systems (2x2 or 3x3) but is impractical for larger ones. The Inverse Method is best when solving multiple systems with the same coefficient matrix."
  },
  obj3: {
    question: "How do I know if a system has no solution or infinitely many solutions?",
    answer: "During row reduction, if a row becomes all zeros on the left but nonzero on the right (like 0 0 0 | 5), the system has no solution. If there are fewer pivots than unknowns and no contradictory rows, the system has infinitely many solutions with free variables."
  },
  obj4: {
    question: "What is the difference between Gaussian and Gauss-Jordan elimination?",
    answer: "Gaussian elimination reduces the matrix to row echelon form (upper triangular) and then uses back-substitution to find the solution. Gauss-Jordan continues the reduction to reduced row echelon form where every pivot is 1 and is the only nonzero entry in its column, so the solution is read directly without back-substitution."
  },
  obj5: {
    question: "Can this calculator handle non-square systems?",
    answer: "Yes, the calculator supports systems with different numbers of equations and variables (up to 10 each). Non-square systems may have no solution or infinitely many solutions. Note that Cramer's Rule and the Inverse Method require square systems, but Gaussian and Gauss-Jordan elimination work for any dimensions."
  }
};

const schemas = {
  webApplication: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Linear Systems Calculator",
    "description": "Free linear systems calculator with Gaussian elimination, Gauss-Jordan, Cramer's Rule, and inverse method. Step-by-step solutions with 2D graphing for two-variable systems.",
    "url": "https://www.learnmathclass.com/linear-algebra/calculators/linear-systems",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Four solution methods: Gaussian elimination, Gauss-Jordan, Cramer's Rule, Inverse Method",
      "Step-by-step calculation breakdowns for every method",
      "Equation view and augmented matrix input modes",
      "2D graph visualization for two-variable systems",
      "Support for systems up to 10 equations and 10 unknowns",
      "Detection of unique, infinite, and no-solution cases",
      "Random fill and clear controls for quick testing"
    ],
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
    "keywords": keyWords.join(", ")
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
        "name": "Calculators",
        "item": "https://www.learnmathclass.com/linear-algebra/calculators"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Linear Systems Calculator",
        "item": "https://www.learnmathclass.com/linear-algebra/calculators/linear-systems"
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
};




  const detailInstructions = [
    `Pick **Equations** or **Augmented Matrix** in the Input Mode column; the same system is shown as equations or as the matrix [A|b]. [Learn more about the input mode](!#choosing-the-input-mode)`,
    `Pick a method in the **Method** list: Gaussian Elimination, Gauss-Jordan, Cramer's Rule or Inverse Method; the last two need a square system. [Learn more about the methods](!#choosing-the-method)`,
    `Set **Equations** and **Variables** (1 to 10); the grid rebuilds and keeps the values that still fit. [Learn more about the system size](!#setting-the-system-size)`,
    `Type one number per box, a negative coefficient for a subtracted term; **Random** fills the boxes, **Clear** empties them. [Learn more about entering coefficients](!#entering-the-coefficients)`,
    `Click **Solve System**; the Solution box gives the unknowns, No Solution or Infinite Solutions, and a red box lists any empty cell. **Reset All** returns to an empty 3×3 system. [Learn more about solving](!#solving-the-system-and-reading-the-result)`,
    `Use the **Theory**, **Steps** and **Graph** tabs on the right: the method text, the row operations after solving, and the lines of a two-variable system. [Learn more about the panel](!#the-theory-steps-and-graph-panel)`,
  ];
  const demos = {
  'choosing-the-input-mode': {
    title: 'The matrix view, a typed row, back to equations',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Augmented Matrix\nThe same 3×3 system as [A|b]: coefficients left, constants right of the bar.', at: 'tr' },
      { click: { button: 'Augmented Matrix' } },
      { wait: 2600 },
      { say: 'TYPE 1, 1, 1 and 6 in the first row\nThree coefficients in the grid, the constant in the right column.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 11 }, value: '6' },
      { wait: 2800 },
      { say: 'CLICK Equations\nThe same numbers now read 1x₁ + 1x₂ + 1x₃ = 6; nothing is cleared.', at: 'tr' },
      { click: { button: 'Equations' } },
      { wait: 2600 },
    ],
  },
  'choosing-the-method': {
    title: 'Two methods, then a non-square system',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Gauss-Jordan\nThe Theory tab now describes the reduced row echelon form.', at: 'tr' },
      { click: { button: 'Gauss-Jordan' } },
      { wait: 2600 },
      { say: 'CLICK Cramer\'s Rule\nDeterminant ratios; this method needs a square system.', at: 'tr' },
      { click: { button: 'Cramer\'s Rule' } },
      { wait: 2600 },
      { say: 'TYPE 2 as Equations\n2 equations, 3 unknowns: Cramer\'s Rule and Inverse Method grey out and an orange note appears.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { wait: 2800 },
    ],
  },
  'setting-the-system-size': {
    title: 'A 2×2 system, a 2×4 system, Reset All',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'TYPE 2 and 2\nA 2×2 system: two rows, two coefficient boxes each.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '2' },
      { wait: 2600 },
      { say: 'TYPE 4 as Variables\nA 2×4 system; the note warns that some methods need square systems.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '4' },
      { wait: 2600 },
      { say: 'CLICK Reset All\nBack to 3×3, empty boxes, Gaussian Elimination, Theory tab.', at: 'tr' },
      { click: { button: 'Reset All', exact: true } },
      { wait: 2600 },
    ],
  },
  'entering-the-coefficients': {
    title: 'Random, Clear, then a system typed by hand',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'CLICK Random\nEvery box gets a whole number from −10 to 10.', at: 'tr' },
      { click: { button: 'Random', exact: true } },
      { wait: 2600 },
      { say: 'CLICK Clear\nAll boxes empty again; the size stays 3×3.', at: 'tr' },
      { click: { button: 'Clear', exact: true } },
      { wait: 2400 },
      { say: 'TYPE 1, 1, 1 | 6; 2, −1, 1 | 3; 1, 2, −1 | 2\nRow by row: the coefficients, then the constant after the equals sign.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '6' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 7 }, value: '-1' },
      { set: { css: 'input[type="number"]', nth: 8 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 9 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 10 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 11 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 12 }, value: '-1' },
      { set: { css: 'input[type="number"]', nth: 13 }, value: '2' },
      { wait: 3200 },
    ],
  },
  'solving-the-system-and-reading-the-result': {
    title: 'A unique solution, an error list, no solution, infinite solutions',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'TYPE the system, CLICK Solve System\nUnique solution x₁ = 1, x₂ = 2, x₃ = 3; the panel jumps to Steps.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '6' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 7 }, value: '-1' },
      { set: { css: 'input[type="number"]', nth: 8 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 9 }, value: '3' },
      { set: { css: 'input[type="number"]', nth: 10 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 11 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 12 }, value: '-1' },
      { set: { css: 'input[type="number"]', nth: 13 }, value: '2' },
      { click: { button: 'Solve System', exact: true } },
      { wait: 3200 },
      { say: 'CLICK Clear, then Solve System\nThe red box lists every empty box, row by row.', at: 'tr' },
      { click: { button: 'Clear', exact: true } },
      { click: { button: 'Solve System', exact: true } },
      { wait: 2800 },
      { say: 'TYPE 1, 1 | 2 and 1, 1 | 3 as a 2×2 system, CLICK Solve System\nNo Solution: rank(A) = 1, rank([A|b]) = 2.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 7 }, value: '3' },
      { click: { button: 'Solve System', exact: true } },
      { wait: 3000 },
      { say: 'TYPE 2, 2 | 4 in the second row, CLICK Solve System\nInfinite Solutions: rank(A) = 1 < 2 variables.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 7 }, value: '4' },
      { click: { button: 'Solve System', exact: true } },
      { wait: 3000 },
    ],
  },
  'the-theory-steps-and-graph-panel': {
    title: 'Steps after solving, the graph, back to theory',
    scale: 0.4,
    minHeight: 376,
    script: [
      { say: 'TYPE 2, 1 | 5 and 1, −1 | 1 as a 2×2 system, CLICK Solve System\nx₁ = 2, x₂ = 1; the Steps tab lists the row operations.', at: 'tr' },
      { set: { css: 'input[type="number"]', nth: 0 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 1 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 2 }, value: '2' },
      { set: { css: 'input[type="number"]', nth: 3 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 4 }, value: '5' },
      { set: { css: 'input[type="number"]', nth: 5 }, value: '1' },
      { set: { css: 'input[type="number"]', nth: 6 }, value: '-1' },
      { set: { css: 'input[type="number"]', nth: 7 }, value: '1' },
      { click: { button: 'Solve System', exact: true } },
      { wait: 3200 },
      { say: 'CLICK Graph\nThe two lines meet at (2, 1).', at: 'tr' },
      { click: { button: 'Graph', exact: true } },
      { wait: 2800 },
      { say: 'CLICK Theory\nThe description of Gaussian Elimination, with a link to its section below.', at: 'tr' },
      { click: { button: 'Theory', exact: true } },
      { wait: 2600 },
    ],
  },
  };

  return {
  props: {
    sectionsContent,
    linearSystemsExplanations,
    detailInstructions,
    demos,
    faqQuestions,
    schemas,
    seoData: {
      title: "Linear Systems Calculator - Equation Solver | Learn Math Class",
      description: "Solve systems of linear equations with Gaussian elimination, Gauss-Jordan, Cramer's Rule, and inverse method. Free step-by-step solutions with 2D graphing.",
      keywords: keyWords.join(", "),
      url: "/linear-algebra/calculators/linear-systems",
      name: "Linear Systems Calculator"
    },
  }
}
   }

export default function LinearSystemsCalculatorPage({seoData, sectionsContent, linearSystemsExplanations, detailInstructions = [], demos = {}, faqQuestions, schemas}) {
    
 const demoPlayer = (slug) => (
  <ToolDemoPlayer
    key={`demo-${slug}`}
    script={demos[slug].script}
    title={demos[slug].title}
    label={`Demo: ${demos[slug].title}`}
    scale={demos[slug].scale || 0.4}
    minHeight={demos[slug].minHeight || undefined}
    renderText={processContent}
  >
    <LinearSystemsCalculator explanations={linearSystemsExplanations} />
  </ToolDemoPlayer>
 )
 const genericSections=[
  { id:'key-terms', title:sectionsContent.obj0.title, link:sectionsContent.obj0.link, content:[sectionsContent.obj0.content] },
  { id:'choosing-the-input-mode', title:sectionsContent.obj9.title, link:sectionsContent.obj9.link, content:[demoPlayer('choosing-the-input-mode'), sectionsContent.obj9.content] },
  { id:'choosing-the-method', title:sectionsContent.obj10.title, link:sectionsContent.obj10.link, content:[demoPlayer('choosing-the-method'), sectionsContent.obj10.content] },
  { id:'setting-the-system-size', title:sectionsContent.obj11.title, link:sectionsContent.obj11.link, content:[demoPlayer('setting-the-system-size'), sectionsContent.obj11.content] },
  { id:'entering-the-coefficients', title:sectionsContent.obj12.title, link:sectionsContent.obj12.link, content:[demoPlayer('entering-the-coefficients'), sectionsContent.obj12.content] },
  { id:'solving-the-system-and-reading-the-result', title:sectionsContent.obj13.title, link:sectionsContent.obj13.link, content:[demoPlayer('solving-the-system-and-reading-the-result'), sectionsContent.obj13.content] },
  { id:'the-theory-steps-and-graph-panel', title:sectionsContent.obj14.title, link:sectionsContent.obj14.link, content:[demoPlayer('the-theory-steps-and-graph-panel'), sectionsContent.obj14.content] },
  { id:'gaussian-elimination', title:sectionsContent.obj1.title, link:sectionsContent.obj1.link, content:[sectionsContent.obj1.content] },
  { id:'gauss-jordan-elimination', title:sectionsContent.obj2.title, link:sectionsContent.obj2.link, content:[sectionsContent.obj2.content] },
  { id:'cramers-rule', title:sectionsContent.obj3.title, link:sectionsContent.obj3.link, content:[sectionsContent.obj3.content] },
  { id:'inverse-method', title:sectionsContent.obj4.title, link:sectionsContent.obj4.link, content:[sectionsContent.obj4.content] },
  { id:'types-of-solutions', title:sectionsContent.obj5.title, link:sectionsContent.obj5.link, content:[sectionsContent.obj5.content] },
  { id:'augmented-matrix-representation', title:sectionsContent.obj6.title, link:sectionsContent.obj6.link, content:[sectionsContent.obj6.content] },
  { id:'row-echelon-form-vs-reduced-row-echelon-form', title:sectionsContent.obj7.title, link:sectionsContent.obj7.link, content:[sectionsContent.obj7.content] },
  { id:'related-tools-and-concepts', title:sectionsContent.obj8.title, link:sectionsContent.obj8.link, content:[sectionsContent.obj8.content] },
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Linear Systems Calculator</h1>
   <div style={{marginBottom:'20px'}}>
     <ExplanationDetails instructions={detailInstructions} title='How to use Linear Systems Calculator' />
   </div>
   <br/>
    <div style={{transform:'scale(1)',marginLeft:'-250px'}}>
        <SiblingsNav topOffset="200px" title='Similar Calculators' 
           bg="#f0f4ff"
         color="#1f2937"
         activeColor="#4285f4"
         activeBg="#f0f7ff">
   <LinearSystemsCalculator explanations={linearSystemsExplanations}/>
      </SiblingsNav>
      </div>
   <br/>
   <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
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
   <Sections sections={genericSections.slice(1)}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}
