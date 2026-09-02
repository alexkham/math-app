import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import LinearCombinationWrapper from '../../../../app/components/linear-algebra copy/matrix/LinearCombinationWrapper'
import matrixLinCombDiagrams from '../../../../app/components/linear-algebra copy/matrix/matrixLinCombDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'linear combination of matrices',
    'matrix linear combination',
    'alpha A plus beta B',
    'weighted sum of matrices',
    'linear combination visualizer',
    'linear combination calculator',
    'how to compute linear combination',
    'matrix scaling and addition',
    'span of matrices',
    'linear combination step by step',
    'matrix vector space',
    'scalar coefficients matrices',
    'linear algebra visualizer',
    'matrix operations',
    'interactive matrix tool'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Linear combination** — an expression $\\alpha A + \\beta B$ that scales each matrix by a scalar and adds the results. More generally, $c_1 A_1 + c_2 A_2 + \\cdots + c_n A_n$.

**Scalar coefficient** — the numbers $\\alpha, \\beta$ (or $c_i$) that multiply each matrix in the combination.

**Same-shape requirement** — all matrices in a linear combination must share identical dimensions so the additions are defined.

**Result shape** — the linear combination has the same shape as the operands.

**Span** — the set of all linear combinations of a fixed collection of matrices.

**Linear independence** — a property of a collection: no matrix in it can be written as a linear combination of the others.

**Vector space of matrices** — the set of all $m \\times n$ matrices forms a vector space under matrix addition and scalar multiplication; linear combinations are its native operation.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Set the shared shape of $A$ and $B$, then watch $\\alpha A + \\beta B = C$ build in three phases.

• Use the **Dimensions** steppers to set the shape of $A$ and $B$ (1 to 5 in each direction). $C$ inherits the shape automatically
• Hover the **?** icon for a reminder that linear combinations are built from scalar multiplication plus matrix addition
• Press play or step manually through the scene player
• The animation walks three phases in order: scale $A$ by $\\alpha$, scale $B$ by $\\beta$, then add the scaled matrices into $C$
• The scalars $\\alpha$ and $\\beta$ are shown symbolically — the visualizer focuses on structure, not specific numeric values`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `The Three Phases`,
      content: `The visualizer breaks the operation into three clearly separated phases.

• **Phase 1 — scale $A$ by $\\alpha$**: every cell of $A$ is multiplied by $\\alpha$ in place, one cell per scene; $B$ stays untouched
• **Phase 2 — scale $B$ by $\\beta$**: every cell of $B$ is multiplied by $\\beta$ in place, one cell per scene; $A$ is already fully scaled
• **Phase 3 — add into $C$**: each cell of $C$ is filled with $\\alpha a_{i,j} + \\beta b_{i,j}$, with two curved arrows flowing from $A$ and $B$ into $C$

This phase order makes the decomposition of a linear combination into scalar multiplication and matrix addition explicit. Both operations are visible on the screen at the same time when phase 3 begins.`,
      before: ``,
      after: ``,
      link: '#three-phases',
    },
    obj3: {
      title: `Reading the Scene Player`,
      content: `Each scene combines highlights, arrows, and a caption.

• In phase 1, the active cell of $A$ is highlighted primary; the rest of the canvas stays neutral
• In phase 2, the active cell of $B$ is highlighted secondary
• In phase 3, the active cells of $A$ and $B$ are highlighted primary and secondary, and the destination cell of $C$ is accent; arrows flow from both sources into $C$
• Filled cells show their symbolic content — $\\alpha a_{i,j}$, $\\beta b_{i,j}$, or $\\alpha a_{i,j} + \\beta b_{i,j}$ — at a font size that scales with the matrix dimensions
• The step log on the right keeps a record of every completed cell across all phases`,
      before: ``,
      after: ``,
      link: '#reading-the-scene-player',
    },
    obj4: {
      title: `Choosing Dimensions`,
      content: `The dimension steppers control the shape shared by all three matrices.

• Smaller shapes ($2 \\times 2$, $2 \\times 3$) make the per-cell flow easy to follow in each phase
• Larger shapes ($4 \\times 4$, $5 \\times 5$) demonstrate that the same rule scales; total scenes equal $3 \\times m \\times n$ plus the intro and outro
• Cell content shrinks automatically as the matrix grows so $\\alpha a_{i,j} + \\beta b_{i,j}$ stays readable at the largest shape
• Square and rectangular shapes follow identical rules — linear combinations require only matching shapes between operands`,
      before: ``,
      after: ``,
      link: '#choosing-dimensions',
    },
    obj5: {
      title: `What a Linear Combination Is`,
      content: `A linear combination of two matrices $A$ and $B$ of the same shape is

$$C = \\alpha A + \\beta B, \\quad c_{i,j} = \\alpha \\cdot a_{i,j} + \\beta \\cdot b_{i,j}$$

More generally, a linear combination of $n$ matrices is

$$C = c_1 A_1 + c_2 A_2 + \\cdots + c_n A_n$$

All matrices must share the same shape, and the result inherits that shape. The operation is built from two simpler ones: scale each matrix by its coefficient, then add the scaled matrices entry by entry.

Linear combinations are the native operation of any vector space — matrices, vectors, polynomials, and functions all support them. For comprehensive theory, see **matrix operations**.`,
      before: ``,
      after: ``,
      link: '#what-a-linear-combination-is',
    },
    obj6: {
      title: `Key Properties`,
      content: `Linear combinations inherit their properties from scalar multiplication and matrix addition.

• **Closure**: a linear combination of $m \\times n$ matrices is again $m \\times n$
• **Commutativity**: $\\alpha A + \\beta B = \\beta B + \\alpha A$
• **Associativity**: combining linear combinations gives another linear combination
• **Zero coefficient**: if $\\alpha = 0$, the matrix $A$ drops out entirely
• **Scaling a linear combination**: $k(\\alpha A + \\beta B) = (k\\alpha) A + (k\\beta) B$
• **Distributivity**: $\\alpha(A + B) = \\alpha A + \\alpha B$

The structural fact behind all of this is that the set of $m \\times n$ matrices forms a vector space, and linear combinations are exactly the operation that vector spaces are designed to support.`,
      before: ``,
      after: ``,
      link: '#key-properties',
    },
    obj7: {
      title: `Why It Matters`,
      content: `Linear combinations are the foundation on which most of linear algebra is built.

• **Span and basis**: the span of a set of matrices is the set of all their linear combinations; a basis is a linearly independent set whose span is the whole space
• **Linear independence**: testing whether $c_1 A_1 + \\cdots + c_n A_n = 0$ forces all $c_i = 0$
• **Solving linear systems**: a system $Ax = b$ asks whether $b$ is a linear combination of the columns of $A$
• **Subspaces**: a subspace is a set closed under linear combinations
• **Coordinate representations**: writing a matrix as a linear combination of basis matrices gives its coordinates
• **Differential equations, optimization, machine learning**: every linear model, every superposition principle, every gradient update is a linear combination`,
      before: ``,
      after: ``,
      link: '#why-it-matters',
    },
    obj8: {
      title: `Worked Example`,
      content: `Take $A$, $B$ as $2 \\times 2$ matrices and $\\alpha = 2$, $\\beta = -1$:

$$A = \\begin{pmatrix} 1 & 3 \\\\ 0 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 2 \\\\ 1 & 0 \\end{pmatrix}$$

Scale $A$ by 2:

$$2A = \\begin{pmatrix} 2 & 6 \\\\ 0 & 8 \\end{pmatrix}$$

Scale $B$ by $-1$:

$$-B = \\begin{pmatrix} -5 & -2 \\\\ -1 & 0 \\end{pmatrix}$$

Add:

$$2A - B = \\begin{pmatrix} -3 & 4 \\\\ -1 & 8 \\end{pmatrix}$$

Set the visualizer to $2 \\times 2$ and step through to see the three phases animated symbolically.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A few mistakes recur.

• **Mixing shapes** — every matrix in the combination must have the same shape; no broadcasting
• **Distributing scalars unevenly** — $\\alpha(A + B) \\neq \\alpha A + B$; the scalar applies to every matrix it multiplies
• **Confusing linear combination with matrix product** — a linear combination scales and adds, no row-column interaction
• **Treating a single scalar product as a linear combination of one matrix** — technically valid but trivial; the interesting case has at least two matrices
• **Forgetting that the zero matrix is a trivial linear combination** — choosing all coefficients zero produces the zero matrix regardless of the operands`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Matrix addition** — the additive piece of any linear combination.

**Scalar multiplication** — the scaling piece of any linear combination.

**Span** — the set of all linear combinations of a fixed collection.

**Linear independence** — the property that no matrix in a set is a linear combination of the others.

**Basis** — a linearly independent set whose linear combinations produce every matrix in the space.

**Subspace** — a set closed under linear combinations.

**Vector space** — the abstract setting in which linear combinations live.

**Affine combination** — a linear combination whose coefficients sum to 1; closely related but distinct.`,
      before: ``,
      after: ``,
      link: '#related-concepts',
    },
    obj11: {
      title: `The Opening Scene: Two Matrices and Two Scalars`,
      content: `The player starts with everything named and nothing computed: the matrices $A$ and $B$, the scalars $\alpha$ and $\beta$, and an empty $C$ waiting to hold $\alpha A + \beta B$.

At the default dimensions $A$ and $B$ are both $2 \times 3$, and so is $C$. The caption states the plan up front — the combination will be built in three phases rather than in one pass.`,
      before: ``,
      after: `Two preconditions are quietly in force here, one from each operation being combined. The scalars can be anything, because scalar multiplication imposes no shape rule. But $A$ and $B$ must have identical dimensions, because the final phase adds them, and addition does.

That is the general shape of a linear combination: scalar multiplication is permissive, addition is strict, and the strict one governs. Everything the tool does after this scene is a consequence of that pairing.`,
      link: '',
    },
    obj12: {
      title: `Phase 1: Scaling A by α`,
      content: `The first sweep multiplies every entry of $A$ by $\alpha$, one cell at a time, exactly as the scalar-multiplication tool does on its own.

Six steps at the default size. $B$ is untouched throughout, and $C$ is still empty — this phase produces $\alpha A$ as an intermediate result, not part of the answer yet.`,
      before: ``,
      after: `Isolating this phase is the pedagogical point of the three-phase structure. A linear combination is not a new primitive operation; it is scalar multiplication and addition applied in sequence, and the tool refuses to blur them together.

The frozen picture below is a step partway through this sweep: some entries of $A$ already carry their $\alpha$ factor, one is being scaled, and the rest are untouched.`,
      link: '',
    },
    obj13: {
      title: `Phase 2: Scaling B by β`,
      content: `The second sweep repeats the operation on $B$ with the other scalar, producing $\beta B$. Another six steps, and $A$ is now left alone — the caption notes it is already fully scaled from phase 1.

$C$ remains empty. Both inputs have now been scaled, but nothing has been combined.`,
      before: ``,
      after: `The two scalars are independent. Nothing requires $\alpha$ and $\beta$ to be related, equal, or even non-zero, and setting one of them to zero collapses the combination to a plain scalar multiple of the other matrix.

That independence is what gives linear combinations their reach. Varying $\alpha$ and $\beta$ over all real numbers sweeps out every matrix expressible from $A$ and $B$ this way — the span of the pair, which for two independent matrices is a two-dimensional subspace of the $2 \times 3$ matrices.`,
      link: '',
    },
    obj14: {
      title: `Phase 3: Adding the Two Scaled Matrices`,
      content: `The third sweep finally fills $C$, adding the two intermediates entry by entry: $c_{i,j} = \alpha a_{i,j} + \beta b_{i,j}$.

This phase is ordinary matrix addition, and it is where the same-shape requirement is actually consumed. Six more steps, and the combination is complete.`,
      before: ``,
      after: `Read across the three phases and the definition assembles itself: scale, scale, add. That is all a linear combination is, and extending it to more terms changes nothing structurally — $\alpha A + \beta B + \gamma D$ is one more scaling phase and one more addition.

It is also worth noticing what the entrywise formula licenses. Because each cell of $C$ depends only on the matching cells of $A$ and $B$, the whole operation could be done in any order, or in parallel. The three-phase sequence is a teaching device; the arithmetic has no dependencies to respect.`,
      link: '',
    },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from LinearCombinationWrapper's own buildMatrixScenes (exported
     additively) and rendered through frozenMatrixSvg. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: matrixLinCombDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'A, B and an empty C, all 2&#215;3, with the two scalars named. Nothing computed yet - the ' +
      'caption announces the three phases before any of them runs.'),
    scaleA: unit('scaleA', 'Phase 1, mid-sweep',
      'Entries of A picking up their &alpha; factor one at a time. B is untouched and C is still ' +
      'empty: this phase produces an intermediate, not an answer.'),
    scaleB: unit('scaleB', 'Phase 2, mid-sweep',
      'The same sweep on B with &beta;. A is left alone now, fully scaled from phase 1, and C is ' +
      'still waiting.'),
    add: unit('add', 'Phase 3, mid-sweep',
      'C finally filling, each cell reading &alpha;a + &beta;b. This is plain matrix addition, and ' +
      'the step where the same-shape rule is actually used.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     LinearCombinationWrapper had no explanations prop; one was added additively
     and defaults to null. Keys are the animation phase - intro, scaleA, scaleB,
     add, done - derived from the scene index. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#the-three-phases" style="color:#1d4ed8;font-weight:600">the three phases</a></div>`

  const explanations = {
    intro: note('Scalars impose no shape rule; the addition in phase 3 does, and that is the binding constraint.', 'the-opening-scene', 'Learn more about the opening scene'),
    scaleA: note('Phase 1 is scalar multiplication on its own - an intermediate, not part of the answer yet.', 'phase-1-scaling-a', 'Learn more about phase 1'),
    scaleB: note('The two scalars are independent; set one to zero and the combination collapses to a single multiple.', 'phase-2-scaling-b', 'Learn more about phase 2'),
    add: note('Phase 3 is ordinary matrix addition, and where the same-shape requirement is consumed.', 'phase-3-adding', 'Learn more about phase 3'),
    done: note('Scale, scale, add - the whole definition, and it extends to more terms unchanged.', 'phase-3-adding', 'Learn more about the final phase'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is a linear combination of matrices?",
      answer: "A linear combination of two matrices A and B of the same shape is an expression of the form alpha times A plus beta times B, where alpha and beta are scalars. More generally, it is any sum of scalar multiples of matrices that share the same shape. The result is another matrix of that same shape."
    },
    obj2: {
      question: "Do the matrices in a linear combination need the same shape?",
      answer: "Yes. Every matrix in a linear combination must have the same dimensions because the operation involves entry-wise addition. Without matching shapes the addition is not defined and the linear combination has no meaning."
    },
    obj3: {
      question: "How is a linear combination different from matrix multiplication?",
      answer: "A linear combination scales each matrix by a scalar and adds the results entry by entry; there is no row-column interaction. Matrix multiplication is a fundamentally different operation that pairs rows of one matrix with columns of another. The two operations have different shape rules, different computational structure, and different geometric meaning."
    },
    obj4: {
      question: "Why are linear combinations important?",
      answer: "Linear combinations are the defining operation of a vector space. The concepts of span, basis, linear independence, subspace, and dimension all rest on them. Solving linear systems, doing change of basis, fitting linear models, and applying superposition principles in physics all reduce to questions about linear combinations."
    },
    obj5: {
      question: "What is the span of a set of matrices?",
      answer: "The span is the set of all linear combinations of those matrices. If A, B, and C are matrices of the same shape, their span consists of every matrix that can be written as alpha A plus beta B plus gamma C for some scalars alpha, beta, gamma. The span is always a subspace of the ambient matrix space."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Linear Combination of Matrices Visualizer",
      "description": "Step-by-step visualizer for linear combinations of matrices. Watch alpha A plus beta B build in three phases: scale, scale, add.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-combination",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Three-phase animation: scale A by alpha, scale B by beta, then add",
        "Adjustable shared dimensions of A and B from 1 by 1 up to 5 by 5",
        "Animated curved arrows from paired source cells into the destination cell during the add phase",
        "Symbolic scalars alpha and beta preserved through every step",
        "Per-cell formula captions showing the structure of each phase",
        "Adjustable playback speed and scrollable step log",
        "Tooltip explaining how a linear combination decomposes into scalar multiplication and matrix addition"
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
      "keywords": "linear combination of matrices, matrix linear combination, alpha A plus beta B, weighted sum of matrices, linear combination visualizer, linear combination calculator, how to compute linear combination, matrix scaling and addition, span of matrices, linear combination step by step, matrix vector space, scalar coefficients matrices, linear algebra visualizer, matrix operations, interactive matrix tool"
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
          "name": "Linear Combination",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/linear-combination"
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
        title: "Linear Combination of Matrices Visualizer | αA + βB",
        description: "Visualize a linear combination of matrices step by step. Watch αA + βB build in three phases — scale A, scale B, then add — for shapes up to 5x5.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-linear-combination",
        name: "Linear Combination of Matrices Visualizer",
        hubDescription: "Watch αA + βB build in three phases — scale A by α, scale B by β, then add the scaled matrices cell by cell into C. Adjust the shared shape of A and B from 1x1 up to 5x5 and see how a linear combination decomposes into scalar multiplication followed by matrix addition.",
        category: 'Matrices',
        subCategory: 'Matrix Operations'
      }
    }
  }
}

export default function LinearCombinationVisualizer({seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas}) {

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
    plain('obj2', 'the-three-phases'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'phase-1-scaling-a', 'scaleA'),
    stateRow('obj13', 'phase-2-scaling-b', 'scaleB'),
    stateRow('obj14', 'phase-3-adding', 'add'),
    plain('obj3', 'the-scene-player'),
    plain('obj4', 'choosing-dimensions'),
    plain('obj5', 'what-a-linear-combination-is'),
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
   <h1 className='title' style={{marginTop:'0px',marginBottom:'0px'}}>Linear Combinations of Matrices</h1>
   <br/>
   <div style={{width:'80%',margin:'auto'}}>
   <LinearCombinationWrapper
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