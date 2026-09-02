import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import InnerProductWrapper from '../../../../app/components/linear-algebra copy/matrix/InnerProductWrapper'
import innerProductDiagrams from '../../../../app/components/linear-algebra copy/matrix/innerProductDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'


export async function getStaticProps(){

  const keyWords = [
    'inner product',
    'dot product',
    'frobenius inner product',
    'inner product calculator',
    'vector inner product',
    'matrix inner product',
    'how to compute inner product',
    'pairwise multiply and sum',
    'inner product visualizer',
    'inner product step by step',
    'scalar product',
    'inner product of vectors',
    'frobenius product',
    'linear algebra visualizer',
    'inner product space'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Inner product** — an operation that takes two objects of the same shape, multiplies their entries pairwise, and sums the products into a single scalar.

**Dot product** — the classical inner product of two vectors of equal length: $\\langle u, v \\rangle = \\sum_k u_k v_k$.

**Frobenius inner product** — the inner product of two matrices of the same shape: $\\langle A, B \\rangle_F = \\sum_{i,j} a_{i,j} b_{i,j}$.

**Same-shape requirement** — both operands must have identical dimensions so every entry of one has a partner in the other.

**Scalar result** — the output of an inner product is always a single number, regardless of how large the operands are.

**Inner product space** — a vector space equipped with an inner product. Norms, angles, and orthogonality all derive from it.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Pick a scenario and a shape, then watch the inner product build up term by term.

• Use the **Scenario** pills to switch between **Vectors** $\\langle u, v \\rangle$ and **Matrices** $\\langle A, B \\rangle_F$
• In the vectors scenario, set the shared **length** of $u$ and $v$ (2 to 10)
• In the matrices scenario, set the shared **dimensions** of $A$ and $B$ (2×2 to 5×5)
• Hover the **?** icons for explanations of the inner product itself and the same-shape requirement
• Use the scene player below to step, play, pause, change speed, and scroll the step log

The point of having one tool for both scenarios is to make the unity explicit: same operation, different operands.`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `The Vectors Scenario`,
      content: `In the vectors scenario, $u$ and $v$ are shown as row vectors of length $n$, and the result $\\langle u, v \\rangle$ appears as a single boxed scalar.

• Each scene pairs one entry $u_k$ with $v_k$, highlighting both and drawing two arrows into the result box
• The running sum above the canvas updates term by term — counted terms turn green, the current term is blue and bold, pending terms stay grey
• The result box shows a stacked $\\Sigma$ notation with an upper bound that advances as more terms are counted
• Final scene highlights every entry of both vectors and the completed sum

This is the textbook dot product, broken into its $n$ pairwise products.`,
      before: ``,
      after: ``,
      link: '#vectors-scenario',
    },
    obj3: {
      title: `The Matrices Scenario`,
      content: `In the matrices scenario, $A$ and $B$ are shown as $m \\times n$ grids, and the result $\\langle A, B \\rangle_F$ appears as a single boxed scalar with the Frobenius subscript $F$.

• Each scene pairs one entry $a_{i,j}$ with $b_{i,j}$ in row-major order, highlighting both and drawing arrows into the result box
• The running sum above the canvas grows by one $a_{i,j} b_{i,j}$ term per step, color-coded the same way as in the vectors scenario
• Total steps equal $m \\times n$ — every cell of both matrices contributes exactly one product
• Final scene highlights every cell of both matrices in green and presents the completed sum

The Frobenius inner product is exactly the dot product of the matrices "flattened" into long vectors of length $m \\times n$.`,
      before: ``,
      after: ``,
      link: '#matrices-scenario',
    },
    obj4: {
      title: `Reading the Running Sum`,
      content: `The expression above the canvas is the inner product written out as a sum of individual product terms, with per-term color coding.

• **Grey** terms are pending — not yet computed
• **Blue, bold** marks the term being computed in the current scene
• **Green** terms have already been counted
• On the final scene, every term is green and the sum is complete

This running sum is the bridge between the visual pairing (highlights and arrows on the canvas) and the algebraic formula. By the end of the animation, you have seen every term in the sum named, paired, and counted.`,
      before: ``,
      after: ``,
      link: '#reading-the-running-sum',
    },
    obj5: {
      title: `What an Inner Product Is`,
      content: `An inner product is a rule that takes two objects of the same shape and returns a scalar by pairing entries, multiplying, and summing.

For vectors of length $n$:
$$\\langle u, v \\rangle = \\sum_{k=1}^{n} u_k v_k$$

For $m \\times n$ matrices (the Frobenius inner product):
$$\\langle A, B \\rangle_F = \\sum_{i=1}^{m} \\sum_{j=1}^{n} a_{i,j} b_{i,j}$$

Both formulas implement the same idea: walk through every pair of corresponding entries, multiply them, sum the products. The Frobenius version is the dot product applied to the matrices read as $mn$-long vectors.

For comprehensive theory, see **inner product spaces**.`,
      before: ``,
      after: ``,
      link: '#what-an-inner-product-is',
    },
    obj6: {
      title: `Key Properties`,
      content: `Every inner product, whether on vectors or matrices, satisfies four defining properties.

• **Symmetry**: $\\langle u, v \\rangle = \\langle v, u \\rangle$
• **Linearity in the first argument**: $\\langle \\alpha u + \\beta w, v \\rangle = \\alpha \\langle u, v \\rangle + \\beta \\langle w, v \\rangle$
• **Positive definiteness**: $\\langle u, u \\rangle \\geq 0$, with equality only when $u = 0$
• **Scalar output**: the result is always a single number, never a vector or matrix

From these four properties everything else follows — norms ($\\|u\\| = \\sqrt{\\langle u, u \\rangle}$), angles ($\\cos\\theta = \\langle u, v \\rangle / (\\|u\\| \\|v\\|)$), orthogonality ($\\langle u, v \\rangle = 0$), and projections.`,
      before: ``,
      after: ``,
      link: '#key-properties',
    },
    obj7: {
      title: `Why It Matters`,
      content: `The inner product is the single most useful operation in linear algebra because so many other concepts are defined through it.

• **Length** of a vector: $\\|u\\| = \\sqrt{\\langle u, u \\rangle}$
• **Angle** between vectors: $\\cos\\theta = \\langle u, v \\rangle / (\\|u\\| \\|v\\|)$
• **Orthogonality**: $u \\perp v$ exactly when $\\langle u, v \\rangle = 0$
• **Projection** of $u$ onto $v$: $\\text{proj}_v u = \\frac{\\langle u, v \\rangle}{\\langle v, v \\rangle} v$
• **Gram-Schmidt orthogonalization**, **least squares**, and **Fourier expansions** all run on inner products

The Frobenius inner product extends all of this to matrices — matrix norms, matrix angles, orthogonal matrix decompositions, and the trace formula $\\langle A, B \\rangle_F = \\text{tr}(A^T B)$.`,
      before: ``,
      after: ``,
      link: '#why-it-matters',
    },
    obj8: {
      title: `Worked Example`,
      content: `**Vectors**: take $u = (1, 2, 3)$ and $v = (4, -1, 2)$.

$$\\langle u, v \\rangle = (1)(4) + (2)(-1) + (3)(2) = 4 - 2 + 6 = 8$$

**Matrices**: take $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 1 \\\\ -1 & 2 \\end{pmatrix}$.

$$\\langle A, B \\rangle_F = (1)(0) + (2)(1) + (3)(-1) + (4)(2) = 0 + 2 - 3 + 8 = 7$$

In both cases, the calculation is "pair, multiply, sum" — no row-column gymnastics, no transposition. Set the visualizer to length 3 for the vector case or to $2 \\times 2$ for the matrix case and step through to see the same arithmetic animated.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj9: {
      title: `Common Mistakes`,
      content: `A handful of recurring mistakes appear when learning inner products.

• **Confusing inner product with matrix multiplication** — the inner product returns a scalar; matrix multiplication returns a matrix. $u^T v$ is a scalar (essentially the inner product), while $u v^T$ is a rank-1 outer product matrix
• **Forgetting the same-shape requirement** — you cannot take the inner product of a 3-vector and a 4-vector, or of a $2 \\times 3$ and a $3 \\times 2$ matrix
• **Conjugation in the complex case** — for complex vectors, the inner product is $\\langle u, v \\rangle = \\sum \\overline{u_k} v_k$ with conjugation on one argument. The visualizer covers the real case
• **Treating Frobenius as something exotic** — it is just the dot product of the matrices read as long vectors
• **Mixing up "inner" and "outer"** — outer product takes two vectors and returns a matrix; inner product takes two vectors and returns a scalar`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Dot product** — the inner product on real vectors; the vectors scenario of this tool.

**Frobenius inner product** — the matrix version; the matrices scenario of this tool.

**Outer product** — the dual operation that takes two vectors and returns a matrix.

**Norm** — the length of a vector or matrix, defined through the inner product as $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$.

**Orthogonality** — the condition $\\langle u, v \\rangle = 0$, central to Gram-Schmidt and orthogonal decompositions.

**Projection** — the component of one vector along another, computed with the inner product.

**Cauchy-Schwarz inequality** — $|\\langle u, v \\rangle| \\leq \\|u\\| \\|v\\|$, a universal bound on inner products.

**Matrix multiplication** — uses inner products of rows and columns as its building block.`,
      before: ``,
      after: ``,
      link: '#related-concepts',
    },
    obj11: {
      title: `The Opening Scene: Two Vectors, One Number`,
      content: `The player starts with $\mathbf{u}$ and $\mathbf{v}$ side by side and the result slot $\langle \mathbf{u}, \mathbf{v} \rangle$ waiting empty. At the default length both vectors have four components.

The running-sum line beneath the vectors is already laid out with all four terms, greyed until each is earned. What the scene announces is the shape of the answer: two vectors go in, **one number** comes out.`,
      before: ``,
      after: `That output shape is what separates the inner product from every other operation in this section. Addition and scalar multiplication return vectors of the same length; this one collapses the whole pair to a single scalar, which is why it is also called the scalar product.

The same-length precondition still applies, and for the same reason as addition: the definition pairs components by position, so each $u_j$ needs a $v_j$ to meet.`,
      link: '',
    },
    obj12: {
      title: `Pairing, Multiplying, Accumulating`,
      content: `Each step highlights $u_j$ and $v_j$ together, multiplies them, and adds the product into the running total. The term for that step turns solid in the sum line while the later terms stay greyed.

The frozen picture below is a step partway through the run — some terms already contributed, one being computed, the rest still pending.`,
      before: ``,
      after: `Two operations are interleaved here, and it is worth separating them. The **pairing and multiplying** is componentwise, exactly like the operations on the neighbouring pages. The **summing** is what makes this different: it destroys the positional structure, folding four independent products into one total.

Because the products are summed rather than kept, information is lost on purpose. Many different pairs of vectors give the same inner product, and that is the point — the number measures one specific relationship between them rather than describing them.`,
      link: '',
    },
    obj13: {
      title: `The Completed Inner Product`,
      content: `The final scene fills the result slot with the total, so the sum line reads

$\langle \mathbf{u}, \mathbf{v} \rangle = u_1v_1 + u_2v_2 + u_3v_3 + u_4v_4$

a single scalar standing where four products were.`,
      before: ``,
      after: `That number carries a great deal. Taking the inner product of a vector with itself gives $\sum u_j^2$, which is the squared length — so $\|\mathbf{u}\| = \sqrt{\langle \mathbf{u}, \mathbf{u} \rangle}$, and the whole notion of distance in $\mathbb{R}^n$ is built from this operation.

Between two different vectors it measures alignment, through $\langle \mathbf{u}, \mathbf{v} \rangle = \|\mathbf{u}\|\,\|\mathbf{v}\|\cos\theta$. The sign alone is informative: positive means the vectors lean the same way, negative means they oppose, and **zero means they are orthogonal**. That last case is the reason the inner product underpins projections, least squares and orthogonal bases.

The operation is symmetric, $\langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle$, and linear in each argument — properties that follow directly from the componentwise products being summed.`,
      link: '',
    },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }



  /* ---- frozen-state demonstration units (Line 1) ----
     Built from InnerProductWrapper's own buildVectorScenes (exported additively)
     and rendered through frozenMatrixSvg. The running-sum line lives in the
     scene caption rather than the layout, so it is not part of these stills. */
  const unit = (key, caption, text) => demoUnitFrame({ svg: innerProductDiagrams[key], caption, text })

  const stateUnits = {
    intro: unit('intro', 'Opening scene, frozen',
      'u and v as four-component rows with the result slot empty between the brackets. Two vectors ' +
      'in, one number out - the shape of the answer is the first thing established.'),
    step: unit('step', 'Mid-sweep, frozen',
      'One component of u and the component opposite it in v highlighted as a pair. Their product is ' +
      'what joins the running total at this step.'),
    done: unit('done', 'Completed inner product, frozen',
      'The result slot filled with a single scalar. Four products have been summed away into one ' +
      'number, and the positional structure is gone.'),
  }


  /* ---- per-phase scene notes, passed into the component (Line 1) ----
     InnerProductWrapper had no explanations prop; one was added additively and
     defaults to null. Keys are the scene phase. Captions render with
     dangerouslySetInnerHTML, so these are raw HTML anchors. */
  const note = (body, slug, label) =>
    `<div style="margin-top:10px;padding-top:9px;border-top:1px solid #e2e8f0;font-size:12.5px;color:#475569">` +
    `${body} <a href="#${slug}" style="color:#1d4ed8;font-weight:600">${label}</a>` +
    ` &middot; <a href="#what-the-inner-product-is" style="color:#1d4ed8;font-weight:600">what it is</a></div>`

  const explanations = {
    intro: note('Two vectors in, one scalar out - the only operation here that changes the kind of the answer.', 'the-opening-scene', 'Learn more about the opening scene'),
    step: note('Componentwise multiplication, then a sum that deliberately discards the positional structure.', 'pairing-and-accumulating', 'Learn more about the sweep'),
    done: note('The result gives length when taken with itself, and alignment - including orthogonality - between two vectors.', 'the-completed-inner-product', 'Learn more about the completed product'),
  }


  const faqQuestions = {
    obj1: {
      question: "What is an inner product?",
      answer: "An inner product is an operation that takes two objects of the same shape, multiplies their entries pairwise, and sums the products into a single scalar. The classical example is the dot product of two vectors of equal length. The Frobenius inner product extends the same idea to matrices of equal shape."
    },
    obj2: {
      question: "What is the difference between the dot product and the Frobenius inner product?",
      answer: "They are the same operation applied to different shapes. The dot product takes two vectors of length n and returns the sum of u sub k times v sub k. The Frobenius inner product takes two matrices of the same shape and returns the sum of a at i,j times b at i,j over every entry. The Frobenius product is the dot product of the matrices read as long vectors of length m times n."
    },
    obj3: {
      question: "Can you take the inner product of two objects of different shapes?",
      answer: "No. The inner product requires both operands to have the same shape, because each entry of one must be paired with an entry at the same position in the other. A 3-vector cannot be inner-multiplied with a 4-vector, and a 2 by 3 matrix cannot be inner-multiplied with a 3 by 2 matrix."
    },
    obj4: {
      question: "How is the inner product related to length and angle?",
      answer: "The length of a vector u is the square root of u inner-product with itself. The angle between two vectors u and v satisfies cosine theta equals u dot v divided by the product of their lengths. So once you have an inner product, you automatically have notions of length, angle, orthogonality, and projection. This is why inner product spaces are the foundation of metric geometry in linear algebra."
    },
    obj5: {
      question: "Is the inner product the same as matrix multiplication?",
      answer: "No. The inner product returns a scalar, while matrix multiplication returns a matrix. For two column vectors u and v of the same length, the scalar u transposed times v equals the inner product, but the matrix u times v transposed is the rank-1 outer product, a completely different object. Matrix multiplication uses inner products of rows and columns as building blocks, but the operations are not the same."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Inner Product Visualizer",
      "description": "Step-by-step visualizer for the inner product of vectors and matrices. Watch the dot product and the Frobenius product build one pair-and-multiply at a time.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/inner-product",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Two scenarios in one tool: vector dot product and Frobenius matrix inner product",
        "Adjustable vector length from 2 to 10",
        "Adjustable matrix dimensions from 2 by 2 up to 5 by 5",
        "Running expanded sum with per-term color coding above the canvas",
        "Animated curved arrows from paired entries into the scalar result box",
        "Stacked sigma notation in the result box with advancing upper bound",
        "Adjustable playback speed and scrollable step log"
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
      "keywords": "inner product, dot product, frobenius inner product, inner product calculator, vector inner product, matrix inner product, how to compute inner product, pairwise multiply and sum, inner product visualizer, inner product step by step, scalar product, inner product of vectors, frobenius product, linear algebra visualizer, inner product space"
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
          "name": "Inner Product",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/inner-product"
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
        title: "Inner Product Visualizer | Dot Product & Frobenius",
        description: "Visualize the inner product step by step for vectors and matrices. Switch between dot product and Frobenius product, set the shape, and watch the scalar result build.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/vectors-inner-product",
        name: "Inner Product Visualizer",
        hubDescription: "Pair, multiply, sum — watch the inner product build into a single scalar one term at a time. Switch between the classical vector dot product and the Frobenius matrix inner product, set the shape of the operands, and follow a running expanded sum with per-term color coding.",
        category: 'Vectors',
        subCategory: 'Products'
      }
    }
  }
}

export default function InnerProductVisualizer({ seoData, sectionsContent, stateUnits, explanations, introContent, faqQuestions, schemas }) {

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
    // obj0 Key Terms was defined but commented out of the array - restored
    plain('obj0', 'key-terms'),
    plain('obj1', 'getting-started'),
    plain('obj2', 'the-vectors-scenario'),
    stateRow('obj11', 'the-opening-scene', 'intro'),
    stateRow('obj12', 'pairing-and-accumulating', 'step'),
    stateRow('obj13', 'the-completed-inner-product', 'done'),
    plain('obj3', 'the-matrices-scenario'),
    plain('obj4', 'reading-the-running-sum'),
    plain('obj5', 'what-the-inner-product-is'),
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
      <br />
      <br />
      <br />
      <br />
      <OperaSidebar
        side='right'
        // topOffset='65px' 
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <br />
      <br />
      <h1 className='title' style={{ marginTop: '-50px', marginBottom: '0px' }}>Inner Product of Vectors</h1>
      <br />
      <div style={{ width: '80%', margin: 'auto' }}>
        <InnerProductWrapper mode='vectors' explanations={explanations} />
      </div>
      <br />
      <SectionTableOfContents sections={genericSections}
    showSecondaryNav={true}
         secondaryNavMode="siblings"  // or "children"
         secondaryNavTitle="More in this Section"
   
   />
      <br />
      <br />
      <br />
      {/* <IntroSection 
          id={introContent.id}
          title={introContent.title}
          content={introContent.content}
           backgroundColor='#f9fafb'
          //  "#f2f2f2"
          textColor="#06357a"
        /> */}
      <br />
      {/* <KeyTermsCard
     id="0"
     title={sectionsContent.obj0.title}
     content={sectionsContent.obj0.content}
     after={sectionsContent.obj0.after}
     variant="light"
   /> */}
      <br />
      <Sections sections={genericSections}/>
      <br />
      <br />
      <br />
      {/* <ScrollUpButton/> */}
    </>
  )
}