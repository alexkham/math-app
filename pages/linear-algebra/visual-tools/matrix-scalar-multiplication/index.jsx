import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import ScalarMultiplicationWrapper from '../../../../app/components/linear-algebra copy/matrix/ScalarMultiplicationWrapper'
import matrixScalarDiagrams from '../../../../app/components/linear-algebra copy/matrix/matrixScalarDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'scalar multiplication',
    'matrix scalar multiplication',
    'k times A matrix',
    'scale a matrix',
    'matrix scaling',
    'scalar matrix product',
    'multiply matrix by number',
    'scalar multiplication calculator',
    'scalar multiplication visualizer',
    'element-wise scaling',
    'matrix scaling step by step',
    'linear algebra visualizer',
    'matrix operations',
    'interactive matrix tool',
    'kA matrix'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Scalar** — a single number, not a vector or matrix.

**Scalar multiplication** — the operation $kA$ that multiplies every entry of a matrix $A$ by the scalar $k$.

**Element-wise operation** — applied independently to each entry; the result at $(i,j)$ depends only on $k$ and $a_{i,j}$.

**Shape preservation** — $kA$ has the same dimensions as $A$. Scalar multiplication never changes the shape.

**Scaling factor** — the role $k$ plays: it stretches ($|k| > 1$), shrinks ($|k| < 1$), or flips sign ($k < 0$) every entry uniformly.

**Zero scalar** — multiplying by $k = 0$ produces the zero matrix of the same shape as $A$.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the shape of $A$ and watch $kA = C$ build one cell at a time.

• Use the **Dimensions** steppers to set the shape of $A$ (1 to 5 in each direction)
• $C$ inherits the same shape automatically
• Hover the **?** icon for a reminder of what a scalar is and why the shape is preserved
• Press play or step manually through the scene player; the speed selector and step log let you control pace and review

The scalar $k$ is shown symbolically in front of $A$. The visualizer focuses on the structural rule — every cell of $A$ gets multiplied by the same $k$ — not on any specific numerical value of $k$.`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `Reading the Scene Player`,
      content: `Each scene focuses on one cell of $C$.

• The active cell in $A$ is highlighted primary; the destination cell in $C$ is highlighted accent
• A curved arrow flows from $a_{i,j}$ into $c_{i,j}$, showing the scalar being applied
• Each filled cell of $C$ shows its symbolic content $k \\cdot a_{i,j}$
• The step log on the right keeps a record of completed cells

By the final scene, every cell of $C$ holds its symbolic product and the operation is complete.`,
      before: ``,
      after: ``,
      link: '#reading-the-scene-player',
    },
    obj3: {
      title: `Choosing Dimensions`,
      content: `The dimension steppers control the shape of $A$, and $C$ follows automatically.

• Start with $2 \\times 2$ or $2 \\times 3$ to see the per-cell flow clearly
• Increase to $4 \\times 4$ or $5 \\times 5$ to see how the same rule scales — total scenes equal $m \\times n$
• Symbolic content in $C$ shrinks automatically as the matrix grows, so $k \\cdot a_{i,j}$ stays readable
• Square and rectangular shapes follow identical rules — scalar multiplication has no shape restriction`,
      before: ``,
      after: ``,
      link: '#choosing-dimensions',
    },
    obj4: {
      title: `What Scalar Multiplication Is`,
      content: `Scalar multiplication takes a number $k$ and a matrix $A$ and produces a matrix $kA$ of the same shape, with every entry multiplied by $k$:

$$(kA)_{i,j} = k \\cdot a_{i,j}$$

It's the simplest non-trivial matrix operation. There are no shape restrictions — any matrix can be scaled. The result is the same shape as $A$, and every cell depends only on $k$ and its own value in $A$.

Scalar multiplication is the multiplicative companion to matrix addition: both are element-wise, both preserve shape, and together they make matrices into a vector space.

For comprehensive theory, see **matrix operations**.`,
      before: ``,
      after: ``,
      link: '#what-it-is',
    },
    obj5: {
      title: `Key Properties`,
      content: `Scalar multiplication satisfies clean algebraic rules.

• **Associativity with scalars**: $(kl)A = k(lA)$
• **Distributivity over matrix addition**: $k(A + B) = kA + kB$
• **Distributivity over scalar addition**: $(k + l)A = kA + lA$
• **Identity scalar**: $1 \\cdot A = A$
• **Zero scalar**: $0 \\cdot A = 0$ (zero matrix of the same shape)
• **Sign flip**: $(-1) \\cdot A = -A$
• **Compatibility with transpose**: $(kA)^T = k A^T$
• **Compatibility with matrix multiplication**: $k(AB) = (kA)B = A(kB)$

These properties are exactly the eight vector-space axioms for scalar multiplication.`,
      before: ``,
      after: ``,
      link: '#key-properties',
    },
    obj6: {
      title: `Why It Matters`,
      content: `Scalar multiplication is the operation that lets matrices form a vector space, and it appears everywhere combinations of matrices appear.

• **Linear combinations**: any expression $c_1 A_1 + c_2 A_2 + \\cdots + c_n A_n$ uses scalar multiplication
• **Normalization**: dividing $A$ by a norm or a trace is scalar multiplication by $1/\\|A\\|$ or $1/\\text{tr}(A)$
• **Sign changes**: $-A$ is just scalar multiplication by $-1$
• **Scaling transformations**: in geometry, $kA$ applied to a vector scales the result uniformly
• **Differential equations and physics**: scaling the coefficient matrix of a system rescales the solution
• **Gradient descent and optimization**: the step $\\theta \\leftarrow \\theta - \\eta \\nabla L$ uses scalar multiplication of the gradient by the learning rate $\\eta$`,
      before: ``,
      after: ``,
      link: '#why-it-matters',
    },
    obj7: {
      title: `Worked Example`,
      content: `Take $A$ as a $2 \\times 3$ matrix and $k = 3$:

$$A = \\begin{pmatrix} 1 & -2 & 4 \\\\ 0 & 5 & -3 \\end{pmatrix}$$

Then $3A$ multiplies every entry by 3:

$$3A = \\begin{pmatrix} 3 & -6 & 12 \\\\ 0 & 15 & -9 \\end{pmatrix}$$

With $k = -1$ instead:

$$-A = \\begin{pmatrix} -1 & 2 & -4 \\\\ 0 & -5 & 3 \\end{pmatrix}$$

And with $k = 0$, the result is the $2 \\times 3$ zero matrix.

Set the visualizer to $2 \\times 3$ and step through to see this animated symbolically.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj8: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Multiplying only the first entry or only the diagonal** — $k$ multiplies **every** entry, not a privileged subset
• **Confusing scalar multiplication with the Hadamard product** — $kA$ uses a single number; Hadamard product uses an entire matrix of multipliers
• **Confusing scalar multiplication with matrix multiplication** — there is no row-column pairing; scalar multiplication is purely element-wise
• **Thinking the shape changes** — $kA$ always has the same shape as $A$, regardless of $k$
• **Forgetting sign flips count as scalar multiplication** — $-A$ is $(-1) \\cdot A$`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj9: {
      title: `Related Concepts`,
      content: `**Matrix addition** — the element-wise additive operation; pairs with scalar multiplication to make matrices a vector space.

**Hadamard product** — element-wise multiplication of two matrices; the matrix-by-matrix analogue of scalar multiplication.

**Matrix multiplication** — the standard non-element-wise product; very different from scalar multiplication.

**Linear combination** — $c_1 A_1 + \\cdots + c_n A_n$, the central object built from scalar multiplication and addition.

**Vector space** — the abstract structure matrices form under addition and scalar multiplication.

**Norm** — multiplying $A$ by $1/\\|A\\|$ produces a unit-norm matrix.

**Zero matrix** — the result of multiplying any matrix by the scalar 0.`,
      before: ``,
      after: ``,
      link: '#related-concepts',
    },
    obj10: {
      title: `The Opening Scene: One Number and One Matrix`,
      content: `The player starts with the scalar $k$, the matrix $A$, and an empty $C$ waiting for the result. At the default dimensions $A$ is $2 \times 3$, so $C$ will be $2 \times 3$ as well.

Only the setup is on screen: a single number on one side, six entries on the other, and the statement that $C = k \cdot A$ is about to be built cell by cell.`,
      before: ``,
      after: `Unlike addition, this operation has no matching-shape precondition — there is nothing to match. A scalar can multiply a matrix of any dimensions, because it meets every entry individually rather than pairing off against a second grid.

That also fixes the output shape immediately. $C$ has exactly the dimensions of $A$, whatever $k$ happens to be, and no choice of $k$ can add or remove an entry.`,
      link: '',
    },
    obj11: {
      title: `One Cell at a Time`,
      content: `Each step highlights a single entry of $A$ together with its destination in $C$, and writes $k \cdot a_{i,j}$ into that slot.

The frozen picture below is a step partway through the $2 \times 3$ run: some cells of $C$ already hold their scaled value, one is being computed, and the rest are still placeholders.`,
      before: ``,
      after: `The same $k$ is used at every step. That is the entire content of the operation — six multiplications that share one factor — and it is why scalar multiplication is so much simpler than the matrix product, where each output entry consumes a whole row and a whole column.

Because each cell is independent, the order of the sweep is again a presentational choice. Nothing in $c_{2,3}$ depends on $c_{1,1}$ having been computed first.`,
      link: '',
    },
    obj12: {
      title: `The Completed Product`,
      content: `The final scene fills every cell, so $C$ reads $c_{i,j} = k \cdot a_{i,j}$ throughout, at the same $2 \times 3$ shape it started with.

Written that way the defining property is visible at a glance: **one factor, applied everywhere**.`,
      before: ``,
      after: `The algebraic rules all follow from that. Scalar multiplication distributes over matrix addition, $k(A + B) = kA + kB$, and over scalar addition, $(k + m)A = kA + mA$; it is associative with scalars, $(km)A = k(mA)$; and $1 \cdot A = A$ while $0 \cdot A$ is the zero matrix. Those are precisely the axioms that make the set of $2 \times 3$ matrices a vector space.

Two consequences are worth knowing because they are easy to get wrong. The trace scales linearly, $\operatorname{tr}(kA) = k \operatorname{tr}(A)$, since every diagonal entry picks up one factor of $k$. The determinant does **not**: for an $n \times n$ matrix, $\det(kA) = k^n \det(A)$, because the determinant collects one factor of $k$ from each of the $n$ rows. Doubling a $3 \times 3$ matrix multiplies its determinant by eight, not by two.`,
      link: '',
    },
    obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from ScalarMultiplicationWrapper's own buildMatrixScenes (exported
     additively) and rendered through frozenMatrixSvg. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: matrixScalarDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'The scalar k beside A at 2&#215;3, with C empty. Every cell of C shows the placeholder - no ' +
      'shape precondition to satisfy, since k meets each entry on its own.'),
    step: unit('step', 'Mid-sweep, frozen',
      'One entry of A and its destination in C highlighted together. Earlier cells of C already hold ' +
      'k times their entry; later ones are still placeholders.'),
    done: unit('done', 'Completed product, frozen',
      'All six cells filled with k times the entry above, and C still 2&#215;3. One factor, applied ' +
      'everywhere.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     ScalarMultiplicationWrapper had no explanations prop; one was added
     additively and defaults to null. Keys are the scene phase. Captions render
     with dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-scalar-multiplication-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('No shape rule to satisfy - k multiplies a matrix of any dimensions.', 'the-opening-scene', 'Learn more about the opening scene'),
    step: note('Six multiplications sharing one factor, each independent of the others.', 'one-cell-at-a-time', 'Learn more about the cell sweep'),
    done: note('One factor everywhere - and note det(kA) = k^n det(A), not k det(A).', 'the-completed-product', 'Learn more about the completed product'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is scalar multiplication of a matrix?",
      answer: "Scalar multiplication is the operation of multiplying every entry of a matrix A by a single number k. The result, written kA, is a matrix of the same shape as A whose entry at row i, column j equals k times the entry at the same position in A. It is element-wise and has no shape restrictions."
    },
    obj2: {
      question: "Does scalar multiplication change the shape of a matrix?",
      answer: "No. Scalar multiplication preserves shape exactly. If A is m by n, then kA is also m by n for any scalar k. This is one of the defining properties of scalar multiplication and is what makes matrices into a vector space."
    },
    obj3: {
      question: "Can you multiply any matrix by any scalar?",
      answer: "Yes. Unlike matrix addition (which requires matching shapes) or matrix multiplication (which requires compatible inner dimensions), scalar multiplication has no shape restrictions. Any matrix can be multiplied by any scalar, and the result always has the same shape as the original."
    },
    obj4: {
      question: "What is the difference between scalar multiplication and matrix multiplication?",
      answer: "Scalar multiplication uses a single number to scale every entry of one matrix and is element-wise. Matrix multiplication uses two matrices and produces a third whose entries are sums of products across rows and columns. They have different shape rules, different computational structure, and different geometric meanings."
    },
    obj5: {
      question: "Why is scalar multiplication important?",
      answer: "Scalar multiplication is one of the two operations that make matrices a vector space. It appears in every linear combination, in normalization, in sign flips, in gradient descent, and anywhere matrix-valued quantities need to be rescaled uniformly. Together with matrix addition, it underpins all of linear algebra."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Scalar Multiplication Visualizer",
      "description": "Step-by-step visualizer for scalar multiplication of a matrix. Watch kA build cell by cell with the same shape as A.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-scalar-multiplication",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Element-wise scalar multiplication visualized cell by cell",
        "Adjustable dimensions of A from 1 by 1 up to 5 by 5",
        "Animated curved arrow from each source cell to its destination",
        "Symbolic scalar k preserved through every step",
        "Per-cell formula captions showing k times a sub i,j",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining the scalar concept and shape preservation"
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
      "keywords": "scalar multiplication, matrix scalar multiplication, k times A matrix, scale a matrix, matrix scaling, scalar matrix product, multiply matrix by number, scalar multiplication calculator, scalar multiplication visualizer, element-wise scaling, matrix scaling step by step, linear algebra visualizer, matrix operations, interactive matrix tool, kA matrix"
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
          "name": "Matrix Scalar Multiplication",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-scalar-multiplication"
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
      sectionsContent,
         stateUnits,
         explanations,
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Scalar Multiplication Visualizer | kA Step by Step",
        description: "Visualize scalar multiplication of a matrix step by step. Set dimensions up to 5x5 and watch C = kA build cell by cell with every entry scaled by k.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-scalar-multiplication",
        name: "Matrix Scalar Multiplication Visualizer",
        hubDescription: "Watch C = kA build one cell at a time, with every entry of A multiplied by the same scalar k. Adjust the shape of A from 1x1 up to 5x5 and see how scalar multiplication preserves shape while uniformly scaling every entry.",
        category: 'Matrices',
        subCategory: 'Matrix Operations'
      }
    }
  }
}

export default function ScalarMultiplicationVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    // obj0 Key Terms was defined but rendered nowhere - its section entry and the
    // KeyTermsCard were both commented out, so the content was invisible. Restored.
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-scene-player'),
    stateRow('obj10', 'the-opening-scene', 'intro'),
    stateRow('obj11', 'one-cell-at-a-time', 'step'),
    stateRow('obj12', 'the-completed-product', 'done'),
    plain('obj3', 'choosing-dimensions'),
    plain('obj4', 'what-scalar-multiplication-is'),
    plain('obj5', 'key-properties'),
    plain('obj6', 'why-it-matters'),
    plain('obj7', 'worked-example'),
    plain('obj8', 'common-mistakes'),
    plain('obj9', 'related-concepts'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Matrix Scalar Multiplication</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <ScalarMultiplicationWrapper
   
   mode='matrices'
   explanations={explanations}
   
   />
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
   <Sections sections={genericSections}/>
   <br/>
   <br/>
   <br/>
   {/* <ScrollUpButton/> */}
   </>
  )
}