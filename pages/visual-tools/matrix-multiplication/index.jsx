/* =====================================================================
 * ORIGINAL PAGE — kept verbatim for restore (commented out 2026-09-11).
 * Rendered the legacy numeric visualizer at
 *   app/components/matrix-multiplication/MatrixMultiplication.jsx
 * (that component file is untouched and still exists).
 * To restore: delete everything below the closing marker of this comment,
 * then remove this opening line and the closing marker.
 * =====================================================================

import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react';
import '../../pages.css';
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar';
import Sections from '@/app/components/page-components/section/Sections';
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents';

const MyNavbar = dynamic(() => import('@/app/components/nav-bar/MyNavbar'), { ssr: false });
const ScrollUpButton = dynamic(() => import('@/app/components/scroll-up-button/ScrollUpButton'), { ssr: false });
const MatrixMultiplication = dynamic(() => import('@/app/components/matrix-multiplication/MatrixMultiplication'), { ssr: false });
const Breadcrumb = dynamic(() => import('@/app/components/breadcrumb/Breadcrumb'), { ssr: false });

export async function getStaticProps() {

  const keyWords = [
    'matrix multiplication visualizer',
    'matrix multiplication calculator',
    'interactive matrix multiplication',
    'matrix multiplication step by step',
    'matrix multiplication animation',
    'dot product visualization',
    'matrix calculator',
    'multiply matrices',
    'matrix multiplication tool',
    'linear algebra calculator',
    'matrix operations',
    'matrix multiplication explained',
    'visual matrix multiplication',
    'matrix multiplication online',
    'free matrix calculator'
  ]

  const sectionsContent = {
    obj1: {
      title: `What is Matrix Multiplication?`,
      content: `Matrix multiplication is a fundamental operation in **linear algebra** that combines two matrices to produce a third matrix. Unlike element-wise multiplication, matrix multiplication follows specific rules where each element in the result is computed as the **dot product** of a row from the first matrix and a column from the second matrix.

The operation is written as $C = A \\times B$, where matrix $A$ has dimensions $m \\times n$ and matrix $B$ has dimensions $n \\times p$, producing a result matrix $C$ with dimensions $m \\times p$. Each element $C[i][j]$ represents the sum of products between row $i$ of matrix $A$ and column $j$ of matrix $B$.

Matrix multiplication appears throughout mathematics, physics, computer graphics, data science, and machine learning. Understanding how it works visually helps build intuition for more advanced **linear algebra concepts**.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Matrix Multiplication Rules`,
      content: `Matrix multiplication has strict dimensional requirements that must be satisfied:

**Compatibility Rule**: The number of columns in the first matrix must equal the number of rows in the second matrix. If matrix $A$ is $m \\times n$ and matrix $B$ is $p \\times q$, multiplication $A \\times B$ is only possible when $n = p$.

**Result Dimensions**: The resulting matrix takes the number of rows from the first matrix and the number of columns from the second matrix. So $A_{m \\times n} \\times B_{n \\times p} = C_{m \\times p}$.

**Non-Commutative**: Matrix multiplication is not commutative, meaning $A \\times B \\neq B \\times A$ in general. The order matters critically.

**Associative**: Multiplication is associative: $(A \\times B) \\times C = A \\times (B \\times C)$.

Our visualizer checks these rules automatically and displays an error if matrices cannot be multiplied due to incompatible dimensions.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The Dot Product Method`,
      content: `Each element in the result matrix is calculated using the **dot product** between a row and a column:

**Formula**: For element $C[i][j]$, calculate:

$$C[i][j] = \\sum_{k=1}^{n} A[i][k] \\times B[k][j]$$

**Step-by-step process**:

1. Take row $i$ from matrix $A$: [$A[i][1]$, $A[i][2]$, ..., $A[i][n]$]
2. Take column $j$ from matrix $B$: [$B[1][j]$, $B[2][j]$, ..., $B[n][j]$]
3. Multiply corresponding elements: $A[i][1] \\times B[1][j]$, $A[i][2] \\times B[2][j]$, etc.
4. Sum all products to get $C[i][j]$

The visualizer highlights this process, showing which row and column are being multiplied, the individual products being calculated, and the running sum forming each result element.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Using the Interactive Visualizer`,
      content: `Our matrix multiplication visualizer provides complete control over the animation and calculation process:

**Start Animation**: Click "Start" to begin automatic step-by-step multiplication. The visualizer calculates each element of the result matrix sequentially, showing every multiplication and addition.

**Step Controls**: Use "Step Forward" to advance one multiplication at a time, or "Step Back" to review previous steps. This manual control helps you follow the calculation at your own pace and understand each component of the dot product.

**Pause and Resume**: Click "Pause" at any point during animation to freeze the current state. Resume by clicking "Start" again. The animation continues from where you paused.

**Reset Options**: "Reset" clears the current calculation and returns to the beginning while keeping your matrix values. "Reset to Initial" restores the default 2×2 example matrices. "Initialize to Zero" sets all matrix elements to zero for starting fresh.

The visualizer requires at least 2×2 matrices and supports up to 10×10 matrices, giving you flexibility to explore different sizes and complexity levels.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Understanding the Visual Display`,
      content: `The visualization uses color coding to show exactly what's happening during multiplication:

**Red Highlighting**: The currently selected pair of elements being multiplied appears in red. These are the specific $A[i][k]$ and $B[k][j]$ values contributing to the current dot product calculation.

**Yellow Highlighting**: The entire row from Matrix A and entire column from Matrix B involved in calculating the current result element are highlighted in yellow. This shows the complete set of elements that will be multiplied together.

**Matrix Labels**: Matrix A appears on the left, Matrix B in the middle, and the result Matrix R on the right, separated by multiplication and equals signs for clarity.

**Live Calculation Display**: Below the matrices, you'll see the exact calculation being performed: which result element is being computed, which row and column are involved, and the step-by-step arithmetic with intermediate sums.

This multi-layered visual approach helps you see both the big picture (which row/column) and the specific details (which elements are currently multiplying) simultaneously.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Customizing Matrix Dimensions`,
      content: `The visualizer allows you to create matrices of any size within practical limits:

**Resizing Matrices**: Each input matrix (A and B) has row and column input fields above it. Enter the desired dimensions and click "Resize" to adjust the matrix size. The result matrix dimensions update automatically based on the multiplication rule.

**Dimension Constraints**: Matrices can be resized between 1×1 and 10×10. The visualizer enforces the compatibility rule—if you resize one matrix, you may need to adjust the other to maintain valid dimensions for multiplication.

**Generating Random Matrices**: Click "Random" on either matrix to fill it with random numbers. You'll be prompted to specify the minimum and maximum values for the random generation, allowing you to create test cases with specific numerical ranges.

**Manual Value Entry**: Click any cell in Matrix A or Matrix B to edit its value directly. Type a new number and press Enter. Changes reset the animation to the beginning, ready to recalculate with your new values.

Experimenting with different dimensions helps you understand how matrix size affects computation complexity and result structure.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Reading the Calculation Steps`,
      content: `The visualization provides detailed explanations of each calculation step:

**Current Element Display**: At the top, you'll see "Calculating Element R[i][j] of The Result Matrix" indicating which position in the result is currently being computed.

**Row and Column Reference**: The subtitle specifies "Multiplying Row #i of Matrix A by Column #j of Matrix B" making clear which parts of the input matrices are involved.

**Step-by-Step Arithmetic**: As the animation proceeds, you'll see each multiplication displayed: "A[i][k] × B[k][j] = value₁ × value₂ = product". These lines accumulate, showing the entire dot product calculation.

**Final Sum**: Once all pairs are multiplied and added, the final line shows "R[i][j] = total" with the completed result for that position.

This running commentary transforms abstract notation into concrete arithmetic, making it easy to verify calculations by hand and understand exactly how each result element is derived from the input matrices.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `When Can Matrices Be Multiplied?`,
      content: `Understanding dimensional compatibility is crucial before attempting matrix multiplication:

**The Fundamental Rule**: Matrix $A$ can multiply matrix $B$ (written $A \\times B$) if and only if the number of columns in $A$ equals the number of rows in $B$. Symbolically: if $A$ is $m \\times n$ and $B$ is $p \\times q$, then $n$ must equal $p$.

**Why This Rule Exists**: Each result element requires computing a dot product between a row from $A$ and a column from $B$. These must have the same length to be paired element-by-element. If $A$ has $n$ columns, its rows contain $n$ elements. If $B$ has $n$ rows, its columns contain $n$ elements. Perfect match.

**Common Examples**:
- $2 \\times 3$ matrix CAN multiply $3 \\times 2$ matrix → result is $2 \\times 2$
- $3 \\times 2$ matrix CANNOT multiply $3 \\times 4$ matrix (2 ≠ 3)
- $4 \\times 4$ matrix CAN multiply $4 \\times 1$ matrix → result is $4 \\times 1$

The visualizer checks this automatically and displays an error message if you attempt to multiply incompatible matrices, preventing confusion and guiding you toward valid configurations.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj9: {
      title: `Matrix Multiplication Applications`,
      content: `Matrix multiplication is not just an abstract mathematical operation—it powers real-world applications across many fields:

**Computer Graphics**: Transformations like rotation, scaling, and translation are performed by multiplying coordinate matrices by transformation matrices. Every 3D video game and animation relies on thousands of matrix multiplications per frame.

**Machine Learning**: Neural networks use matrix multiplication as their core operation. Each layer performs a matrix multiplication between input data and learned weights, making it the fundamental building block of **deep learning**.

**Physics Simulations**: Systems of equations describing physical phenomena are solved using matrix operations. Quantum mechanics represents states and operators as matrices, with evolution calculated through multiplication.

**Economics and Finance**: Input-output models, portfolio optimization, and risk analysis all use matrix multiplication to model relationships between multiple variables and compute derived quantities.

**Graph Theory**: Adjacency matrices representing network connections are multiplied to find paths of specific lengths, analyze connectivity, and compute centrality measures.

Understanding matrix multiplication visually builds intuition that transfers directly to these practical applications.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj10: {
      title: `Related Matrix Operations and Concepts`,
      content: `Matrix multiplication connects to many other **linear algebra** operations and concepts:

**Matrix Addition** — Adding corresponding elements from two matrices of the same dimensions.

**Matrix Transposition** — Flipping rows and columns to convert an $m \\times n$ matrix to $n \\times m$.

**Determinants** — A scalar value computed from square matrices, important for solving systems and understanding transformations.

**Matrix Inversion** — Finding a matrix that "undoes" multiplication, analogous to division for numbers.

**Eigenvalues and Eigenvectors** — Special values and vectors preserved under matrix multiplication, crucial for understanding matrix behavior.

**Linear Transformations** — Geometric interpretation of matrix multiplication as transforming vectors in space.

Mastering matrix multiplication through visual exploration prepares you for these more advanced topics and provides a solid foundation for **linear algebra** coursework and applications.`,
      before: ``,
      after: ``,
      link: '',
    }
  }

  const faqQuestions = {
    obj1: {
      question: "What is matrix multiplication?",
      answer: "Matrix multiplication is a fundamental operation in linear algebra that combines two matrices to produce a third matrix. Each element in the result is computed as the dot product of a row from the first matrix and a column from the second matrix."
    },
    obj2: {
      question: "When can two matrices be multiplied?",
      answer: "Two matrices can be multiplied if and only if the number of columns in the first matrix equals the number of rows in the second matrix. If matrix A is m×n and matrix B is n×p, they can be multiplied to produce an m×p result matrix."
    },
    obj3: {
      question: "How do you calculate each element in matrix multiplication?",
      answer: "Each element C[i][j] in the result matrix is calculated as the dot product of row i from matrix A and column j from matrix B. Multiply corresponding elements and sum the products: C[i][j] = Σ(A[i][k] × B[k][j])."
    },
    obj4: {
      question: "Is matrix multiplication commutative?",
      answer: "No, matrix multiplication is not commutative. A×B does not generally equal B×A. The order of multiplication matters and can produce completely different results or may not even be valid if dimensions don't align properly."
    },
    obj5: {
      question: "What is the dot product in matrix multiplication?",
      answer: "The dot product is the operation used to calculate each element of the result matrix. It involves multiplying corresponding elements from a row and column, then summing all the products. This scalar value becomes one element in the result matrix."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Matrix Multiplication Visualizer and Calculator",
      "description": "Visualize matrix multiplication step-by-step with our interactive tool. Watch animated calculations, understand dot products, customize matrix dimensions. Free online matrix calculator for learning linear algebra.",
      "url": "https://www.learnmathclass.com/visual-tools/matrix-multiplication",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Step-by-step matrix multiplication animation",
        "Interactive matrix dimension customization",
        "Real-time calculation display",
        "Color-coded element highlighting",
        "Manual step control (forward/backward)",
        "Random matrix generation",
        "Visual dot product calculation"
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Matrix Multiplication",
          "item": "https://www.learnmathclass.com/visual-tools/matrix-multiplication"
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
      faqQuestions,
      schemas,
      seoData: {
        title: "Interactive Matrix Multiplication Visualizer | Step-by-Step Calculator",
        description: "Visualize matrix multiplication step-by-step with our interactive tool. Watch animated calculations, understand dot products, customize matrix dimensions. Free online matrix calculator for learning linear algebra.",
        keywords: keyWords.join(", "),
        url: "/visual-tools/matrix-multiplication",
        name: "Interactive Matrix Multiplication Visualizer"
      }
    },
  };
}

export default function MatrixMultiplicationPage({ seoData, sectionsContent, faqQuestions, schemas, relatedTools }) {

  const genericSections = [
    {
      id: '1',
      title: sectionsContent.obj1.title,
      link: sectionsContent.obj1.link,
      content: [sectionsContent.obj1.content]
    },
    {
      id: '2',
      title: sectionsContent.obj2.title,
      link: sectionsContent.obj2.link,
      content: [sectionsContent.obj2.content]
    },
    {
      id: '3',
      title: sectionsContent.obj3.title,
      link: sectionsContent.obj3.link,
      content: [sectionsContent.obj3.content]
    },
    {
      id: '4',
      title: sectionsContent.obj4.title,
      link: sectionsContent.obj4.link,
      content: [sectionsContent.obj4.content]
    },
    {
      id: '5',
      title: sectionsContent.obj5.title,
      link: sectionsContent.obj5.link,
      content: [sectionsContent.obj5.content]
    },
    {
      id: '6',
      title: sectionsContent.obj6.title,
      link: sectionsContent.obj6.link,
      content: [sectionsContent.obj6.content]
    },
    {
      id: '7',
      title: sectionsContent.obj7.title,
      link: sectionsContent.obj7.link,
      content: [sectionsContent.obj7.content]
    },
    {
      id: '8',
      title: sectionsContent.obj8.title,
      link: sectionsContent.obj8.link,
      content: [sectionsContent.obj8.content]
    },
    {
      id: '9',
      title: sectionsContent.obj9.title,
      link: sectionsContent.obj9.link,
      content: [sectionsContent.obj9.content]
    },
    {
      id: '10',
      title: sectionsContent.obj10.title,
      link: sectionsContent.obj10.link,
      content: [sectionsContent.obj10.content]
    }
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Learn Math Class" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Learn Math Class" />

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

      <br/>
      <br/>
      <br/>
      <br/>

      <OperaSidebar
        side='right'
        topOffset='65px'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />

      <main className="container">
        <Breadcrumb />
        <h1 className='title' style={{marginTop:'0px',marginBottom:'10px'}}>Matrix Multiplication Visualizer</h1>

        <br/>
        <MatrixMultiplication />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <SectionTableOfContents sections={genericSections}/>

        <br/>
        <br/>
        <br/>

        <Sections sections={genericSections}/>

        <br/>
        <br/>
        <br/>
      </main>
    </>
  );
}

 * ===================== END OF ORIGINAL PAGE ==========================
 */

// =====================================================================
// Matrix Multiplication visual tool — rewritten 2026-09-11 on the
// linear-algebra visual-tools standard (ScenePlayer-based symbolic
// animation, same page frame as /linear-algebra/visual-tools/*).
// Component: app/components/linear-algebra copy/matrix/MultiplicationWrapper.jsx
// Line 1 (on-page anchor mesh) applied the same day: eight states
// (four strategies, three scenarios, the undefined product), each with a
// dedicated section opening on a framed frozen-state unit from
// multiplicationDiagrams.js, and panel notes hoisted into getStaticProps.
// =====================================================================

import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import MultiplicationWrapper from '../../../app/components/linear-algebra copy/matrix/MultiplicationWrapper'
import multiplicationDiagrams from '../../../app/components/linear-algebra copy/matrix/multiplicationDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'


export async function getStaticProps() {

  const keyWords = [
    'matrix multiplication visualizer',
    'matrix multiplication calculator',
    'interactive matrix multiplication',
    'matrix multiplication step by step',
    'matrix multiplication animation',
    'dot product visualization',
    'matrix calculator',
    'multiply matrices',
    'matrix multiplication tool',
    'linear algebra calculator',
    'matrix operations',
    'matrix multiplication explained',
    'visual matrix multiplication',
    'matrix multiplication online',
    'free matrix calculator'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `[Matrix multiplication](!/linear-algebra/matrix/operations#5) — the product $C = AB$ of an $m \\times n$ matrix $A$ and an $n \\times p$ matrix $B$: an $m \\times p$ matrix with entries $c_{i,j} = \\sum_{k=1}^{n} a_{i,k}\\, b_{k,j}$.

[Inner dimensions](!/linear-algebra/definitions#conformability) — the number of columns of the left factor and the number of rows of the right factor. They must be equal, or the product is undefined.

[Outer dimensions](!/linear-algebra/definitions#conformability) — the number of rows of the left factor and the number of columns of the right factor. They are the shape of the product.

[Dot product](!/linear-algebra/definitions#dot_product) — the sum of paired products of a row and a column of the same length. Every entry of $C$ is one dot product.

[Linear combination](!/linear-algebra/definitions#linear_combination) — a weighted sum of [vectors](!/linear-algebra/definitions#vector). Each column of $C$ is a linear combination of the columns of $A$, and each row of $C$ is a linear combination of the rows of $B$.

[Outer product](!/linear-algebra/definitions#outer_product) — a column times a row: an $m \\times p$ matrix of [rank](!/linear-algebra/definitions#rank) at most one. The product $AB$ is the sum of $n$ of them.

[Non-commutative](!/linear-algebra/matrix/operations#6) — $AB \\neq BA$ in general. The two products can differ in value, differ in shape, or one of them may not exist at all.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Pick a case, pick a way of thinking about the product, and watch $C = A \\times B$ build itself one highlighted step at a time.

• The **Scenario** tab holds three pills for the [three scenarios](!#the-three-scenarios), an **Order** toggle between $A \\times B$ and $B \\times A$, and three steppers for the sizes of $A$ and $B$. The rows of $B$ are shown with a link icon because they are tied to the columns of $A$; a scenario can lock one stepper to $1$, which shows a padlock
• The **Strategy** tab holds four cards for the [four strategies](!#the-four-strategies), each a different reading of the same product
• The summary strip at the right of the tab bar always shows the scenario, the order, the shapes, and the strategy in play
• Below the panel, the scene player animates the product. Play, step back and forward, reset, and choose a speed. The **Step explanations** log on the right keeps every step you have passed and opens with an unnumbered lead block describing the whole run

Every strategy produces the same $C$. They differ only in what is highlighted and in how many steps the product takes.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The Three Scenarios`,
      content: `The **Scenario** pills choose which shapes the product takes. They do not change the rule, only which part of the rule is on display.

• [General A × B](!#general-a-times-b) — any $m \\times n$ times $n \\times p$, sizes $1$ to $5$ on every free stepper. This is the full picture
• [Matrix × vector](!#matrix-times-vector) — $B$ is locked to a single column, so $C$ is a single column. The product is a matrix acting on a vector
• [Vector × matrix](!#vector-times-matrix) — $A$ is locked to a single row, so $C$ is a single row. The product is a row vector acting on a matrix

The **Order** toggle sits beside the pills and swaps the factors. For the default shapes both orders exist, but with other sizes one of them may not, and the tool replaces the animation with a banner. That case has its own section: [order and the undefined product](!#order-and-the-undefined-product).`,
      before: ``,
      after: ``,
      link: '',
    },

    obj3: {
      title: `General A × B: Any Compatible Pair of Shapes`,
      content: `The first scenario places no restriction beyond the one the definition already imposes. $A$ is $m \\times n$, $B$ is $n \\times p$, and every stepper from $1$ to $5$ is free except the rows of $B$, which follow the columns of $A$.

The tool opens here at its defaults, $A$ $2 \\times 3$ and $B$ $3 \\times 2$. The frozen picture below is that opening scene, before any cell has been computed.`,
      before: ``,
      after: `Two numbers are decided before a single product is formed. The inner pair, $3$ and $3$, must agree or nothing can be paired. The outer pair, $2$ and $2$, becomes the shape of $C$. Change the columns of $A$ and the rows of $B$ follow; change the rows of $A$ or the columns of $B$ and $C$ changes shape with them. The [compatibility rule](!#the-compatibility-rule) section states this precisely.

Every cell of $C$ is a dot product of a row of $A$ with a column of $B$, so there are $m \\times p$ dot products to form, each with $n$ terms. At the defaults that is four cells with three terms each, twelve multiplications in all. The step count in the player grows with all three sizes, which is the first hint that matrix multiplication is expensive: doubling every dimension multiplies the work by eight.

The other two scenarios are this one with a stepper pinned to $1$. [Matrix × vector](!#matrix-times-vector) pins the columns of $B$ and [vector × matrix](!#vector-times-matrix) pins the rows of $A$. Nothing about the rule changes; only the shapes do.`,
      link: '',
    },

    obj4: {
      title: `Matrix × Vector: A Column on the Right`,
      content: `The second scenario locks the columns of $B$ to $1$. $B$ is now a column vector of length $n$, and $C$ is a column vector of length $m$: the matrix $A$ has acted on a vector.

At the frozen step below, $A$ is $2 \\times 3$ and $B$ is a $3 \\times 1$ column. The first cell of $C$ is being formed, and the second of its three terms is highlighted.`,
      before: ``,
      after: `This is the shape that systems of linear equations take. The system $Ax = b$ is exactly a matrix times a column vector, with $x$ the unknown column and $b$ the known one. Each row of $A$ dotted with $x$ is one equation, which is why $C$ has one entry per row of $A$.

There is a second reading worth holding onto. With $B$ a single column, the [column by column](!#column-by-column) strategy has only one column to build, and that column is $b_{1,1}$ times column $1$ of $A$ plus $b_{2,1}$ times column $2$ of $A$ and so on. A matrix times a vector is a linear combination of the columns of the matrix, with the entries of the vector as the weights. That sentence is the foundation of the column space and of everything built on it.

Switch to [vector × matrix](!#vector-times-matrix) for the mirror image, where the single row is on the left and the rows of $B$ are combined instead.`,
      link: '',
    },

    obj5: {
      title: `Vector × Matrix: A Row on the Left`,
      content: `The third scenario locks the rows of $A$ to $1$. $A$ is now a row vector of length $n$, and $C$ is a row vector of length $p$: a row acting on the matrix $B$.

In the frozen step, $A$ is a $1 \\times 3$ row and $B$ is $3 \\times 2$. The first cell of $C$ is under construction with its second term active, and the whole of $A$ is the highlighted row because there is no other.`,
      before: ``,
      after: `The result has one entry per column of $B$, each a dot product of the row with that column. Under the [row by row](!#row-by-row) strategy there is a single row of $C$ to build, and it equals $a_{1,1}$ times row $1$ of $B$ plus $a_{1,2}$ times row $2$ of $B$ and so on. A row vector times a matrix is a linear combination of the rows of the matrix, with the entries of the row vector as weights. This is the row space counterpart of the column picture in [matrix × vector](!#matrix-times-vector).

The two scenarios are tied together by the transpose. Transposing a product reverses the order, $(AB)^T = B^T A^T$, so a row times a matrix is the transpose of the corresponding matrix times a column. Anything true of one picture has a twin in the other.

Row vectors on the left appear whenever a linear functional is applied to a matrix, in the left eigenvector equation $xA = \\lambda x$, and in Markov chains, where the state is a row of probabilities and each step is a multiplication by the transition matrix on the right.`,
      link: '',
    },

    obj6: {
      title: `Order and the Undefined Product`,
      content: `The **Order** toggle swaps the factors. $A \\times B$ pairs the columns of $A$ with the rows of $B$; $B \\times A$ pairs the columns of $B$ with the rows of $A$. Those are different requirements, and one can hold while the other fails.

When it fails, the scene player is replaced by a red banner stating the two shapes and the mismatched inner pair, and the toggle itself turns red as a warning before you press it. The still below is such a case: $B$ is $3 \\times 3$, $A$ is $2 \\times 3$, and $B \\times A$ asks three columns to pair with two rows.`,
      before: ``,
      after: `At the defaults, $A$ $2 \\times 3$ and $B$ $3 \\times 2$, both orders exist, but they are not the same product. $A \\times B$ is $2 \\times 2$ while $B \\times A$ is $3 \\times 3$. That is the most direct demonstration that matrix multiplication is not commutative: the two results cannot even be compared entry by entry because they have different shapes.

For square factors of the same size both orders exist and have the same shape, and they still differ in general. Play the row · column strategy in both orders on a $2 \\times 2$ pair and watch which cells are paired: $c_{1,2}$ in one order draws on row $1$ of $A$ and column $2$ of $B$, in the other on row $1$ of $B$ and column $2$ of $A$. Different pairs, different sums.

Whether a given order exists is decided by the [compatibility rule](!#the-compatibility-rule) alone. The banner links there. Pick sizes so that the columns of $B$ equal the rows of $A$ and the toggle turns blue again.`,
      link: '',
    },

    obj7: {
      title: `The Four Strategies`,
      content: `The **Strategy** tab offers four ways to build the same product. Each is a valid definition on its own, and each brings a different structure to the front.

• [Row · column](!#row-column) — one cell of $C$ at a time, each a [dot product](!/linear-algebra/vectors/dot-product#1). The textbook definition, and the slowest: $m \\times p$ cells with $n$ terms each
• [Column by column](!#column-by-column) — one column of $C$ at a time, each a weighted sum of the columns of $A$. $p$ columns, $n$ terms each
• [Row by row](!#row-by-row) — one row of $C$ at a time, each a weighted sum of the rows of $B$. $m$ rows, $n$ terms each
• [Sum of outer products](!#sum-of-outer-products) — all of $C$ at once, accumulated from $n$ [rank](!/linear-algebra/matrix/rank#1)-one matrices. Marked **advanced** because it is the least familiar

The step counter changes with the strategy. At the defaults the row · column strategy takes $22$ scenes, column by column and row by row take $12$, and the sum of outer products takes $11$. The result is identical every time.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Row · Column: One Cell at a Time`,
      content: `The first strategy is the definition made literal. To fill $c_{i,j}$, take row $i$ of $A$ and column $j$ of $B$, multiply them entry by entry, and add the $n$ products. Then move to the next cell.

The frozen scene below is the second cell, $c_{1,2}$, at its second of three terms. Row $1$ of $A$ is shaded blue and column $2$ of $B$ grey, with the active pair $a_{1,2}$ and $b_{2,2}$ raised.`,
      before: ``,
      after: `The formula line under the player spells out the dot product with the current term emphasised, $c_{1,2} = a_{1,1} b_{1,2} + a_{1,2} b_{2,2} + a_{1,3} b_{3,2}$, and the cell of $C$ being written is solid green while the untouched cells keep a dashed outline. Cells sweep in reading order: across the first row of $C$, then the second.

This is the strategy to run first, because the other three are shortcuts that assume you already believe this one. It is also the one that exposes the cost. Every cell needs $n$ multiplications, and there are $m \\times p$ cells, so the product costs $m \\times n \\times p$ multiplications in all: twelve at the defaults, and one hundred and twenty five for a pair of $5 \\times 5$ matrices.

The same dot products are grouped differently by [column by column](!#column-by-column) and [row by row](!#row-by-row), and dissolved entirely by the [sum of outer products](!#sum-of-outer-products).

The rule is correct, and it hides what the product does. Drawn in the plane rather than tabulated, the product moves [whole columns](!/linear-algebra/visual-tools/matrix-multiplication-columns) or [whole rows](!/linear-algebra/visual-tools/matrix-multiplication-rows), never single entries.`,
      link: '',
    },

    obj9: {
      title: `Column by Column: Combining the Columns of A`,
      content: `The second strategy builds $C$ one column at a time. Column $j$ of $C$ is $A$ times column $j$ of $B$, and that in turn is a weighted sum of the columns of $A$: $b_{1,j}$ times column $1$, plus $b_{2,j}$ times column $2$, and so on down column $j$ of $B$.

The still below is column $2$ of $C$ at its second of three terms. Column $1$ of $C$ is already complete and solid green. Column $2$ of $A$ is highlighted whole, the single entry $b_{2,2}$ is the weight, and column $2$ of $C$ is the column being filled.`,
      before: ``,
      after: `The formula line reads $\\mathrm{col}_2(C) = b_{1,2}\\,\\mathrm{col}_1(A) + b_{2,2}\\,\\mathrm{col}_2(A) + b_{3,2}\\,\\mathrm{col}_3(A)$, and this is the most consequential of the four readings. Every column of $C$ lies in the span of the columns of $A$, whatever $B$ is. That single observation is why the column space of $AB$ sits inside the column space of $A$, why the rank of a product cannot exceed the rank of either factor, and why solving $Ax = b$ means asking whether $b$ is a combination of the columns of $A$.

The number of steps is $p$, one per column of $C$, each with $n$ terms: at the defaults, two columns of three terms. Compare that with the $m \\times p$ cells of the [row · column](!#row-column) view. The multiplications are the same twelve; they are simply grouped by column instead of by cell.

The [matrix × vector](!#matrix-times-vector) scenario is this strategy with a single column to build.`,
      link: '',
    },

    obj10: {
      title: `Row by Row: Combining the Rows of B`,
      content: `The third strategy is the mirror of the second. Row $i$ of $C$ is row $i$ of $A$ times $B$, which is a weighted sum of the rows of $B$: $a_{i,1}$ times row $1$, plus $a_{i,2}$ times row $2$, and so on across row $i$ of $A$.

The frozen scene is row $2$ of $C$ at its second term. Row $1$ of $C$ is done. The single entry $a_{2,2}$ is the weight, row $2$ of $B$ is highlighted whole, and row $2$ of $C$ is the row being filled.`,
      before: ``,
      after: `The formula line reads $\\mathrm{row}_2(C) = a_{2,1}\\,\\mathrm{row}_1(B) + a_{2,2}\\,\\mathrm{row}_2(B) + a_{2,3}\\,\\mathrm{row}_3(B)$. Every row of $C$ lies in the span of the rows of $B$, whatever $A$ is, so the row space of $AB$ sits inside the row space of $B$. Together with the column reading this bounds the rank of a product from both sides.

This is also the view behind row operations. Multiplying $B$ on the left by an elementary matrix replaces the rows of $B$ by combinations of themselves, which is exactly what the row by row strategy shows: each new row is built from the old rows with the entries of the left factor as weights. Gaussian elimination is a sequence of such left multiplications.

There are $m$ steps, one per row of $C$, each with $n$ terms: at the defaults, two rows of three terms. [Column by column](!#column-by-column) grouped the same work by columns; the [vector × matrix](!#vector-times-matrix) scenario is this strategy with a single row to build.`,
      link: '',
    },

    obj11: {
      title: `Sum of Outer Products: All of C at Once`,
      content: `The fourth strategy gives up on cells, rows, and columns and builds all of $C$ in $n$ additions. For each $k$ from $1$ to $n$, column $k$ of $A$ times row $k$ of $B$ is a full $m \\times p$ matrix of rank at most one. Adding those $n$ matrices gives $C$.

In the frozen scene, contribution $2$ of $3$ is being added. Column $2$ of $A$ and row $2$ of $B$ are highlighted together, and every cell of $C$ is green because every cell receives a term from this pair.`,
      before: ``,
      after: `The formula line reads $C = \\mathrm{col}_1(A)\\,\\mathrm{row}_1(B) + \\mathrm{col}_2(A)\\,\\mathrm{row}_2(B) + \\mathrm{col}_3(A)\\,\\mathrm{row}_3(B)$. Expand any one cell of that sum and the [row · column](!#row-column) dot product reappears, because the $(i,j)$ entry of $\\mathrm{col}_k(A)\\,\\mathrm{row}_k(B)$ is $a_{i,k} b_{k,j}$. The four strategies are one formula with the summation performed in different orders.

The outer product view is the one that generalises. It is the shape of the singular value decomposition, $A = \\sum_k \\sigma_k u_k v_k^T$, of every low-rank approximation, and of the update rules in numerical linear algebra that add one rank-one matrix at a time. Recognising a product as a sum of rank-one pieces is often the first step in seeing why an algorithm is cheap.

At the defaults there are three contributions, one per inner index. The step count no longer depends on $m$ or $p$ at all, only on $n$.`,
      link: '',
    },

    obj12: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights on $A$, $B$ and $C$ with arrows and a title, and the same colours mean the same things in every strategy.

• **Blue** on $A$ marks the row, column, or cell currently being read. A raised, darker blue cell is the active entry of a pair
• **Grey** on $B$ marks its counterpart on the other side, with the same raised treatment for the active entry
• **Solid green** on $C$ marks cells that are being written or are complete; a **dashed green outline** marks a cell that has not been touched yet
• **Arrows** run from the highlighted entries of $A$ and $B$ to the cell of $C$ that receives their product
• The **title** names the cell, column, row, or contribution in play, and the formula beneath it in the log shows the full expression with the active term emphasised

The **Step explanations** log keeps every scene you have passed. Its lead block, above step $1$, describes the run as a whole and carries a short note on the active strategy and scenario; click any entry to jump the player to that scene.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj13: {
      title: `What Matrix Multiplication Is`,
      content: `The product of an $m \\times n$ matrix $A$ and an $n \\times p$ matrix $B$ is the $m \\times p$ matrix $C$ whose entries are

$$c_{i,j} = \\sum_{k=1}^{n} a_{i,k}\\, b_{k,j}$$

Each entry is a dot product of row $i$ of $A$ with column $j$ of $B$, which is why the row must be as long as the column: the columns of $A$ must equal the rows of $B$.

The definition looks arbitrary until it is read as composition. A matrix is a linear map, sending a column $x$ to $Ax$. Applying $B$ first and then $A$ sends $x$ to $A(Bx)$, and the matrix that does this in one step is exactly $AB$. The rule for $c_{i,j}$ is what it has to be for $(AB)x = A(Bx)$ to hold for every $x$.

Every other property follows from that one fact. Associativity is the associativity of composition. The failure of commutativity is the observation that doing two things in different orders usually gives different results. The compatibility rule is the requirement that the output of the first map can be fed into the second.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj14: {
      title: `The Compatibility Rule`,
      content: `$A \\times B$ is defined exactly when the number of columns of $A$ equals the number of rows of $B$. Writing $A$ as $m \\times n$ and $B$ as $n \\times p$, the inner $n$s must agree and the product is $m \\times p$.

Some pairs and their outcomes:

• $2 \\times 3$ times $3 \\times 2$: defined, result $2 \\times 2$
• $3 \\times 2$ times $2 \\times 3$: defined, result $3 \\times 3$
• $3 \\times 2$ times $3 \\times 4$: undefined, since $2 \\neq 3$
• $4 \\times 4$ times $4 \\times 1$: defined, result $4 \\times 1$
• $1 \\times 4$ times $4 \\times 4$: defined, result $1 \\times 4$

The rule is not symmetric. $A \\times B$ and $B \\times A$ impose different conditions, and the tool's [order toggle](!#order-and-the-undefined-product) lets you see one hold while the other fails. In the tool the rows of $B$ are linked to the columns of $A$, so $A \\times B$ always exists; only $B \\times A$ can be undefined.

A useful way to keep the rule straight: write the shapes side by side, $(m \\times n)(n \\times p)$, and check that the two middle numbers match. The two outer numbers are the answer.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj15: {
      title: `Key Properties`,
      content: `Matrix multiplication keeps some of the familiar rules of arithmetic and drops others.

• **Associative**: $(AB)C = A(BC)$, so a chain of products can be bracketed freely
• **Distributive**: $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$
• **Scalars pass through**: $(kA)B = A(kB) = k(AB)$
• **Identity**: $I_m A = A I_n = A$ for an $m \\times n$ matrix $A$
• **Transpose reverses the order**: $(AB)^T = B^T A^T$
• **Not commutative**: $AB \\neq BA$ in general, and one of the two may not exist

Two consequences catch people out. Because there is no commutativity, $(A + B)^2 = A^2 + AB + BA + B^2$, and the middle terms do not merge. And because there are zero divisors, $AB = 0$ does not force $A = 0$ or $B = 0$: a nonzero matrix can kill another nonzero matrix. Cancellation, $AB = AC$ implying $B = C$, holds only when $A$ is invertible.

The transpose rule mirrors the compatibility rule. If $A$ is $m \\times n$ and $B$ is $n \\times p$, then $B^T$ is $p \\times n$ and $A^T$ is $n \\times m$, so $B^T A^T$ is the only order in which the transposes can be multiplied at all.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj16: {
      title: `Worked Example`,
      content: `Take $A$ as $2 \\times 3$ and $B$ as $3 \\times 2$, the tool's default shapes:

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}, \\qquad B = \\begin{pmatrix} 7 & 8 \\\\ 9 & 10 \\\\ 11 & 12 \\end{pmatrix}$$

The inner sizes agree, so $C = AB$ is $2 \\times 2$. Cell by cell:

$$c_{1,1} = 1 \\cdot 7 + 2 \\cdot 9 + 3 \\cdot 11 = 58, \\qquad c_{1,2} = 1 \\cdot 8 + 2 \\cdot 10 + 3 \\cdot 12 = 64$$

$$c_{2,1} = 4 \\cdot 7 + 5 \\cdot 9 + 6 \\cdot 11 = 139, \\qquad c_{2,2} = 4 \\cdot 8 + 5 \\cdot 10 + 6 \\cdot 12 = 154$$

$$AB = \\begin{pmatrix} 58 & 64 \\\\ 139 & 154 \\end{pmatrix}$$

The same numbers come out of every strategy. Column $1$ of $C$ is $7$ times column $1$ of $A$ plus $9$ times column $2$ plus $11$ times column $3$: $(7 + 18 + 33,\\ 28 + 45 + 66) = (58, 139)$. Row $1$ of $C$ is $1$ times row $1$ of $B$ plus $2$ times row $2$ plus $3$ times row $3$: $(7 + 18 + 33,\\ 8 + 20 + 36) = (58, 64)$. And the three outer products are

$$\\begin{pmatrix} 7 & 8 \\\\ 28 & 32 \\end{pmatrix} + \\begin{pmatrix} 18 & 20 \\\\ 45 & 50 \\end{pmatrix} + \\begin{pmatrix} 33 & 36 \\\\ 66 & 72 \\end{pmatrix} = \\begin{pmatrix} 58 & 64 \\\\ 139 & 154 \\end{pmatrix}$$

For the reverse order, $BA$ is $3 \\times 3$: it exists, but it is a different matrix of a different shape. Set the tool to $2 \\times 3$ and $3 \\times 2$ and run each strategy to see these four groupings animated.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj17: {
      title: `Common Mistakes`,
      content: `A few errors recur whenever matrix multiplication is new.

• **Multiplying entry by entry** — $c_{i,j}$ is not $a_{i,j} b_{i,j}$. That operation exists, the Hadamard product, but it is a different thing and needs equal shapes
• **Checking the wrong pair of sizes** — the inner dimensions must match, columns of the left factor against rows of the right. Matching rows to rows is the most common slip
• **Assuming commutativity** — $AB$ and $BA$ are different products, and expanding $(A+B)^2$ as $A^2 + 2AB + B^2$ is wrong
• **Reversing the transpose rule** — $(AB)^T = B^T A^T$, not $A^T B^T$; the shapes only work in the reversed order
• **Cancelling a factor** — $AB = AC$ does not give $B = C$ unless $A$ is invertible
• **Reading the result shape from the wrong ends** — the product of $m \\times n$ and $n \\times p$ is $m \\times p$, the outer numbers, never $n \\times n$

The tool guards against the first two by construction: the rows of $B$ are linked to the columns of $A$, and the undefined $B \\times A$ case is shown as a banner rather than a wrong answer.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj18: {
      title: `Applications`,
      content: `Matrix multiplication is the operation by which linear maps are composed, so it appears wherever several linear steps are chained.

**Computer graphics**: rotations, scalings, and translations are matrices, and applying them in sequence is a single product. Every frame of a 3D scene multiplies vertex coordinates by transformation matrices.

**Systems of equations**: $Ax = b$ is a matrix times a column vector, the [matrix × vector](!#matrix-times-vector) scenario, and solving it is the central problem of numerical linear algebra.

**Machine learning**: a layer of a neural network multiplies its input by a weight matrix. Training and inference are dominated by these products, which is why hardware is built around them.

**Markov chains**: the state is a row of probabilities and each time step is a multiplication by the transition matrix on the right, the [vector × matrix](!#vector-times-matrix) scenario. Powers of the transition matrix give multi-step behaviour.

**Graph theory**: if $M$ is the adjacency matrix of a graph, the entry $(i,j)$ of $M^k$ counts walks of length $k$ from vertex $i$ to vertex $j$.

**Data analysis**: covariance matrices, projections, and the [singular value decomposition](!/linear-algebra/decompositions/svd#1) are all products, and the [sum of outer products](!#sum-of-outer-products) is the form in which low-rank approximations are written.`,
      before: ``,
      after: ``,
      link: '',
    },

    obj19: {
      title: `Related Concepts`,
      content: `[Matrix addition](!/linear-algebra/visual-tools/matrix-addition) — entrywise combination of two matrices of the same shape; distributes with multiplication.

[Scalar multiplication](!/linear-algebra/visual-tools/matrix-scalar-multiplication) — scaling every entry; passes through a product, $(kA)B = k(AB)$.

[Transpose](!/linear-algebra/visual-tools/matrix-transpose) — swaps rows and columns; reverses the order of a product, $(AB)^T = B^T A^T$.

[Identity matrix](!/linear-algebra/visual-tools/matrix-types) — the matrix $I$ with $IA = AI = A$, the multiplicative unit.

[Inverse matrix](!/linear-algebra/visual-tools/matrix-inverse) — the matrix $A^{-1}$ with $A A^{-1} = A^{-1} A = I$, when it exists; the closest thing to division.

[Determinant](!/linear-algebra/visual-tools/matrix-determinant) — multiplicative on square matrices, $\\det(AB) = \\det(A)\\det(B)$.

[Rank](!/linear-algebra/visual-tools/matrix-rank) — the rank of $AB$ is at most the smaller of the ranks of $A$ and $B$, a consequence of the column and row readings.

**Linear transformation** — the geometric meaning of a matrix; multiplication of matrices is composition of transformations.

[Hadamard product](!/linear-algebra/visual-tools/hadamard-product) — the entrywise product $a_{i,j} b_{i,j}$, a different operation with a different symbol.

[Matrix multiplication by columns](!/linear-algebra/visual-tools/matrix-multiplication-columns) — the same product drawn in the plane, with each column of $A$ scaled by an entry of $\\mathbf{v}$ and laid tail to head.

[Matrix multiplication by rows](!/linear-algebra/visual-tools/matrix-multiplication-rows) — the mirror reading, where each row of the result is a combination of the rows of $B$.

[Rows and columns together](!/linear-algebra/visual-tools/matrix-multiplication-rows-columns) — the two readings side by side, showing which question each one answers.`,
      before: ``,
      after: ``,
      link: '',
    },
  }


  /* ---- frozen-state demonstration units (Line 1) ----
     Built by calling each strategy's own scene builder (STRATEGIES from
     strategies/index.js, the same registry MultiplicationWrapper uses) and
     rendering one representative scene through frozenMatrixSvg. The undefined
     product has no scene in the tool, so its still is assembled in the same
     vocabulary. Arrow overlays are not reproduced; the cell colouring carries
     the pairing on its own. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: multiplicationDiagrams[key], caption, text })

  const stateUnits = {
    'general': unit('general', 'General A &#215; B, the opening scene',
      'A is 2&#215;3 and B is 3&#215;2. The inner 3s match, so the product exists, and the outer 2 and 2 ' +
      'fix C at 2&#215;2. Every cell of C still shows the dashed placeholder: nothing has been computed yet.'),
    'matrix-vector': unit('matrix-vector', 'Matrix &#215; vector, c<sub>1,1</sub> at term 2 of 3',
      'B has collapsed to a single column, so C is a single column too. Row 1 of A is highlighted against ' +
      'the whole of B, with the second pair, a<sub>1,2</sub> and b<sub>2,1</sub>, raised.'),
    'vector-matrix': unit('vector-matrix', 'Vector &#215; matrix, c<sub>1,1</sub> at term 2 of 3',
      'A is one row, so C is one row. That row is read against column 1 of B, and the second pair, ' +
      'a<sub>1,2</sub> and b<sub>2,1</sub>, is raised. The remaining cell of C waits with a dashed outline.'),
    'undefined': unit('undefined', 'B &#215; A with B 3&#215;3 and A 2&#215;3',
      'The three columns of B are shaded grey and the two rows of A blue. A dot product would have to pair ' +
      'one of each, and 3 cannot be paired with 2, so nothing can be written where C would stand.'),
    'row-column': unit('row-column', 'Row &#183; column, c<sub>1,2</sub> at term 2 of 3',
      'Row 1 of A in blue meets column 2 of B in grey. The active pair, a<sub>1,2</sub> and b<sub>2,2</sub>, ' +
      'is raised, and the cell being written, c<sub>1,2</sub>, is solid green while the other cells of C keep ' +
      'their dashed outline.'),
    'column-by-column': unit('column-by-column', 'Column by column, column 2 of C at term 2 of 3',
      'Column 1 of C is already solid green. Column 2 of A is highlighted whole, the single grey entry ' +
      'b<sub>2,2</sub> is its weight, and column 2 of C is the column being filled.'),
    'row-by-row': unit('row-by-row', 'Row by row, row 2 of C at term 2 of 3',
      'Row 1 of C is complete. The single blue entry a<sub>2,2</sub> is the weight, row 2 of B is highlighted ' +
      'whole in grey, and row 2 of C is the row being filled.'),
    'sum-of-outer-products': unit('sum-of-outer-products', 'Sum of outer products, contribution 2 of 3',
      'Column 2 of A and row 2 of B are highlighted together. Their outer product is a full 2&#215;2 matrix, ' +
      'added into every cell of C at once, which is why all of C is green rather than a single cell.'),
  }


  /* ---- panel notes, passed into the component (Line 1) ----
     MultiplicationWrapper takes an additive `explanations` prop (default null,
     so nothing changes when it is absent). Strategy and scenario notes are
     appended to the intro scene, which the step log shows as a permanent lead
     block; the undefined note renders inside the banner. Those surfaces use
     dangerouslySetInnerHTML, so the notes are raw HTML with <a href="#slug">
     anchors rather than markdown. */
  const GROUP_LINK = {
    strategies: `<a href="#the-four-strategies" style="color:#1d4ed8;font-weight:600">all four strategies</a>`,
    scenarios: `<a href="#the-three-scenarios" style="color:#1d4ed8;font-weight:600">all three scenarios</a>`,
    rule: `<a href="#the-compatibility-rule" style="color:#1d4ed8;font-weight:600">the compatibility rule</a>`,
  }
  const note = (body, slug, label, group) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; ${GROUP_LINK[group]}</div>`

  const explanations = {
    'row-column': note('The definition made literal: each c<sub>i,j</sub> is one row of A dotted with one column of B.', 'row-column', 'Learn more about the row &#183; column view', 'strategies'),
    'column-by-column': note('Each column of C is A times the matching column of B: a weighted sum of the columns of A.', 'column-by-column', 'Learn more about column by column', 'strategies'),
    'row-by-row': note('Each row of C is the matching row of A times B: a weighted sum of the rows of B.', 'row-by-row', 'Learn more about row by row', 'strategies'),
    'sum-of-outer-products': note('C is the sum of n rank-one matrices, column k of A times row k of B.', 'sum-of-outer-products', 'Learn more about the sum of outer products', 'strategies'),
    'general': note('Any m &#215; n times n &#215; p. The inner sizes must agree; the outer sizes are the shape of C.', 'general-a-times-b', 'Learn more about the general case', 'scenarios'),
    'matrix-vector': note('B is a single column, so C is a single column: a matrix acting on a vector.', 'matrix-times-vector', 'Learn more about matrix &#215; vector', 'scenarios'),
    'vector-matrix': note('A is a single row, so C is a single row: a row vector acting on a matrix.', 'vector-times-matrix', 'Learn more about vector &#215; matrix', 'scenarios'),
    'undefined': note('B &#215; A exists only when the columns of B match the rows of A.', 'order-and-the-undefined-product', 'Learn more about order and the undefined product', 'rule'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is matrix multiplication?",
      answer: "The product of an m by n matrix A and an n by p matrix B is the m by p matrix C whose entry at row i, column j is the dot product of row i of A with column j of B: the sum over k of a(i,k) times b(k,j). It is the operation that composes linear maps, so applying B and then A is the same as applying AB."
    },
    obj2: {
      question: "When can two matrices be multiplied?",
      answer: "A times B is defined exactly when the number of columns of A equals the number of rows of B. If A is m by n and B is n by p, the product exists and is m by p. The rule is not symmetric: A times B can exist while B times A does not, and the visualizer shows a banner in that case."
    },
    obj3: {
      question: "Is matrix multiplication commutative?",
      answer: "No. AB and BA are different products in general. With A 2 by 3 and B 3 by 2, AB is 2 by 2 while BA is 3 by 3, so they cannot even be compared entry by entry. For square matrices of the same size both orders exist and still usually differ. Multiplication is associative and distributive, but the order of factors must be kept."
    },
    obj4: {
      question: "What are the four strategies in the visualizer?",
      answer: "Row dot column builds one cell of C at a time as a dot product. Column by column builds one column of C at a time as a weighted sum of the columns of A. Row by row builds one row of C at a time as a weighted sum of the rows of B. Sum of outer products builds all of C at once by adding n rank-one matrices, column k of A times row k of B. All four give the same result; they group the same multiplications differently."
    },
    obj5: {
      question: "What is the difference between matrix times vector and vector times matrix?",
      answer: "A matrix times a column vector gives a column vector, a linear combination of the columns of the matrix weighted by the entries of the vector; this is the form of a system of equations Ax = b. A row vector times a matrix gives a row vector, a linear combination of the rows of the matrix. The two are transposes of each other, since the transpose of a product reverses the order of the factors."
    }
  }

  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interactive Matrix Multiplication Visualizer and Calculator",
      "description": "Visualize matrix multiplication step-by-step with our interactive tool. Watch animated calculations, understand dot products, customize matrix dimensions. Free online matrix calculator for learning linear algebra.",
      "url": "https://www.learnmathclass.com/visual-tools/matrix-multiplication",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Step-by-step matrix multiplication animation",
        "Three scenarios: general A × B, matrix × vector, vector × matrix",
        "A × B versus B × A order toggle with compatibility check",
        "Four computation strategies: row·column, column by column, row by row, sum of outer products",
        "Adjustable matrix dimensions",
        "Play, pause, step and replay controls with speed selector",
        "Step-by-step explanation log"
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
          "name": "Visual Tools",
          "item": "https://www.learnmathclass.com/visual-tools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Matrix Multiplication",
          "item": "https://www.learnmathclass.com/visual-tools/matrix-multiplication"
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
      relatedTools: getRelatedTools('linear-algebra-matrix-multiplication'),
      sectionsContent,
      stateUnits,
      explanations,
      faqQuestions,
      schemas,
      seoData: {
        title: "Interactive Matrix Multiplication Visualizer | Step-by-Step Calculator",
        description: "Visualize matrix multiplication step-by-step with our interactive tool. Watch animated calculations, understand dot products, customize matrix dimensions. Free online matrix calculator for learning linear algebra.",
        keywords: keyWords.join(", "),
        url: "/visual-tools/matrix-multiplication",
        name: "Interactive Matrix Multiplication Visualizer"
      }
    },
  };
}

export default function MatrixMultiplicationVisualizer({ seoData, sectionsContent, stateUnits, explanations, faqQuestions, schemas, relatedTools }) {

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

  const genericSections = [
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-three-scenarios'),
    stateRow('obj3', 'general-a-times-b', 'general'),
    stateRow('obj4', 'matrix-times-vector', 'matrix-vector'),
    stateRow('obj5', 'vector-times-matrix', 'vector-matrix'),
    stateRow('obj6', 'order-and-the-undefined-product', 'undefined'),
    plain('obj7', 'the-four-strategies'),
    stateRow('obj8', 'row-column', 'row-column'),
    stateRow('obj9', 'column-by-column', 'column-by-column'),
    stateRow('obj10', 'row-by-row', 'row-by-row'),
    stateRow('obj11', 'sum-of-outer-products', 'sum-of-outer-products'),
    plain('obj12', 'reading-the-scene-player'),
    plain('obj13', 'what-matrix-multiplication-is'),
    plain('obj14', 'the-compatibility-rule'),
    plain('obj15', 'key-properties'),
    plain('obj16', 'worked-example'),
    plain('obj17', 'common-mistakes'),
    plain('obj18', 'applications'),
    plain('obj19', 'related-concepts'),
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
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '0px', marginBottom: '0px' }}>Matrix Multiplication</h1>
      <br />
      <div style={{ width: '80%', margin: 'auto' }}>
        <MultiplicationWrapper
          title=""
          explanations={explanations}
          compatibilityToolHref="#the-compatibility-rule"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SectionTableOfContents sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode="siblings"
        secondaryNavTitle="More in this Section"
      />
      <br />
      <br />
      <br />
      <br />
      <RelatedTools tools={relatedTools}/>
      <br/>
      <br/>
      <Sections sections={genericSections}/>
      <br />
      <br />
      <br />
    </>
  )
}
