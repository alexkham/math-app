
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import IntroSection from '@/app/components/page-components/section/IntroContentSection'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import Head from 'next/head'
import '@/pages/pages.css'
import KeyTermsCard from '@/app/components/page-components/KeyTermsCard'
import AdditionWrapper from '../../../../app/components/linear-algebra copy/matrix/AdditionWrapper'


export async function getStaticProps(){

  const keyWords = [
    'matrix addition',
    'matrix subtraction',
    'matrix addition visualizer',
    'add matrices step by step',
    'matrix addition calculator',
    'element-wise matrix operations',
    'A + B matrix',
    'A - B matrix',
    'how to add matrices',
    'matrix dimensions for addition',
    'interactive matrix tool',
    'linear algebra visualizer',
    'matrix sum',
    'matrix difference',
    'same shape matrices'
  ]

  const sectionsContent = {

    obj0: {
      title: `Key Terms`,
      content: `**Matrix addition** — combining two matrices of the same shape into a third matrix by adding paired entries: $c_{i,j} = a_{i,j} + b_{i,j}$.

**Matrix subtraction** — combining two matrices of the same shape by subtracting paired entries: $c_{i,j} = a_{i,j} - b_{i,j}$.

**Element-wise operation** — an operation applied independently to each entry; the result at position $(i,j)$ depends only on the inputs at position $(i,j)$.

**Same-shape requirement** — both operand matrices must have identical row and column counts. A $2 \\times 3$ matrix cannot be added to a $3 \\times 2$ matrix.

**Result shape** — the output matrix $C$ inherits the shape of the operands. If $A$ and $B$ are $m \\times n$, then $C$ is $m \\times n$.

**Conformability** — the condition under which an operation is defined. For addition and subtraction, conformability means matching dimensions.`,
      before: ``,
      after: ``,
      link: '#key-terms',
    },
    obj1: {
      title: `Getting Started with the Visualizer`,
      content: `Choose an operation and a shape, then watch the result build up one cell at a time.

• Use the **Operation** segmented control to switch between **A + B** and **A − B**
• Set the shared shape of $A$ and $B$ with the **Dimensions** steppers — rows and columns each range from 1 to 5
• Click play on the scene player to step through each cell of $C$, or use the speed selector to slow down or speed up the animation

The hover **?** icon next to the dimensions label explains why $A$ and $B$ must share the same shape. Because the operation is element-wise, no other configuration is needed — the visualizer fully determines the symbolic flow from the operation and shape alone.`,
      before: ``,
      after: ``,
      link: '#getting-started',
    },
    obj2: {
      title: `Reading the Scene Player`,
      content: `Each scene focuses on a single cell of $C$ and shows three pieces of information at once.

• **Highlighted cells** — the active cell in $A$ is colored as primary, the matching cell in $B$ as secondary, and the destination cell in $C$ as accent
• **Curved arrows** — two arrows flow from $a_{i,j}$ and $b_{i,j}$ into $c_{i,j}$, making the data flow explicit
• **Formula caption** — the title shows the cell-level equation, for example $c_{2,3} = a_{2,3} + b_{2,3}$
• **Step log** — a running record of completed steps appears below the matrices, so you can scroll back through what has been filled in

By the final scene, every cell of $C$ holds its symbolic sum or difference and the matrices visualize the complete operation.`,
      before: ``,
      after: ``,
      link: '#reading-the-scene-player',
    },
    obj3: {
      title: `Switching Between Addition and Subtraction`,
      content: `The operation toggle changes both the symbol in the equation and the contents of each cell of $C$.

• Selecting **A + B** displays $c_{i,j} = a_{i,j} + b_{i,j}$ in every filled cell
• Selecting **A − B** displays $c_{i,j} = a_{i,j} - b_{i,j}$ in every filled cell
• The intro and outro scene captions update to use the words "addition" or "subtraction" accordingly
• The per-cell scene titles also update their operator

Toggling the operation rebuilds the full sequence of scenes, so you can compare how addition and subtraction differ purely in operator while sharing the exact same element-wise structure.`,
      before: ``,
      after: ``,
      link: '#switching-operations',
    },
    obj4: {
      title: `Choosing Dimensions`,
      content: `The dimension steppers control the shape shared by all three matrices. Because $A$, $B$, and $C$ are linked, changing rows or columns updates all of them at once.

• Start with a small shape like $2 \\times 2$ or $2 \\times 3$ to see the per-cell flow clearly
• Increase to $4 \\times 4$ or $5 \\times 5$ to see how the same rule scales — the number of scenes grows as $m \\times n$
• Symbolic cell contents in $C$ shrink automatically when the matrix is larger, so $a_{i,j} + b_{i,j}$ stays readable even at $5 \\times 5$
• A square shape ($n \\times n$) and a rectangular shape ($m \\times n$, $m \\neq n$) follow the same rule, since dimensions never need to match across rows and columns for addition

There is no separate control for $C$ because its shape is forced by the operation.`,
      before: ``,
      after: ``,
      link: '#choosing-dimensions',
    },
    obj5: {
      title: `What Matrix Addition Is`,
      content: `Matrix addition pairs up corresponding entries of two matrices and sums them. If $A$ and $B$ are both $m \\times n$ matrices, then $A + B$ is also $m \\times n$, and its entry at row $i$, column $j$ is

$$c_{i,j} = a_{i,j} + b_{i,j}$$

This makes matrix addition an **element-wise** operation: each entry of the result depends only on the matching entries in $A$ and $B$, not on anything else in either matrix.

Matrix subtraction works identically, with subtraction replacing addition. The same-shape requirement is what makes the operation well-defined — without matched dimensions, there is no notion of "corresponding entry."

For a comprehensive treatment of matrix operations and properties, see **matrix operations theory**.`,
      before: ``,
      after: ``,
      link: '#what-matrix-addition-is',
    },
    obj6: {
      title: `Key Formulas`,
      content: `The full definition of matrix addition for $m \\times n$ matrices $A$ and $B$:

$$A + B = C, \\quad c_{i,j} = a_{i,j} + b_{i,j} \\text{ for all } 1 \\leq i \\leq m, \\, 1 \\leq j \\leq n$$

Matrix subtraction:

$$A - B = C, \\quad c_{i,j} = a_{i,j} - b_{i,j}$$

Matrix addition satisfies the same algebraic properties as ordinary addition:

• **Commutativity**: $A + B = B + A$
• **Associativity**: $(A + B) + C = A + (B + C)$
• **Identity**: $A + 0 = A$, where $0$ is the zero matrix of the same shape
• **Inverse**: $A + (-A) = 0$

Subtraction is neither commutative nor associative, just like with scalars.`,
      before: ``,
      after: ``,
      link: '#key-formulas',
    },
    obj7: {
      title: `Why the Same-Shape Rule Matters`,
      content: `Matrix addition is only defined when both operands have identical dimensions. This rule is not arbitrary — it follows directly from the element-wise definition.

If $A$ is $2 \\times 3$ and $B$ is $2 \\times 4$, then $a_{1,4}$ does not exist while $b_{1,4}$ does. There is no entry in $A$ to pair with $b_{1,4}$, so the sum at that position is undefined. The same problem arises for any mismatch in rows or columns.

This is fundamentally different from **matrix multiplication**, where the inner dimensions must match but the outer dimensions can differ. Addition demands strict equality of shape; multiplication allows asymmetry.

For comparison with matrix multiplication and other operations, see **matrix multiplication**.`,
      before: ``,
      after: ``,
      link: '#same-shape-rule',
    },
    obj8: {
      title: `Common Mistakes`,
      content: `Even though matrix addition is among the simplest matrix operations, a few mistakes appear regularly.

• **Trying to add matrices of different shapes** — a $2 \\times 3$ and a $3 \\times 2$ cannot be added even though both have six entries
• **Adding a scalar to a matrix as if it were a matrix** — adding a scalar $k$ to $A$ means adding $k$ to every entry, which is technically scalar shifting, not matrix addition
• **Confusing element-wise multiplication with matrix multiplication** — element-wise (Hadamard) product also requires matching shapes, but standard matrix multiplication does not
• **Forgetting that subtraction is not commutative** — $A - B \\neq B - A$ in general
• **Mixing row vectors and column vectors** — a $1 \\times n$ row vector cannot be added to an $n \\times 1$ column vector even when they have the same number of entries`,
      before: ``,
      after: ``,
      link: '#common-mistakes',
    },
    obj9: {
      title: `Worked Example`,
      content: `Take $A$ and $B$ as $2 \\times 3$ matrices:

$$A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 7 & 8 & 9 \\\\ 0 & 1 & 2 \\end{pmatrix}$$

Then $C = A + B$ is computed cell by cell:

$$C = \\begin{pmatrix} 1+7 & 2+8 & 3+9 \\\\ 4+0 & 5+1 & 6+2 \\end{pmatrix} = \\begin{pmatrix} 8 & 10 & 12 \\\\ 4 & 6 & 8 \\end{pmatrix}$$

For $D = A - B$:

$$D = \\begin{pmatrix} 1-7 & 2-8 & 3-9 \\\\ 4-0 & 5-1 & 6-2 \\end{pmatrix} = \\begin{pmatrix} -6 & -6 & -6 \\\\ 4 & 6 & 4 \\end{pmatrix}$$

The visualizer above mirrors this process symbolically — set the dimensions to $2 \\times 3$ and step through to see each pairing in turn.`,
      before: ``,
      after: ``,
      link: '#worked-example',
    },
    obj10: {
      title: `Related Concepts`,
      content: `**Matrix operations** — the broader family that includes addition, subtraction, multiplication, transposition, and inversion.

**Scalar multiplication** — multiplying every entry of a matrix by a number; like addition, it is element-wise and preserves shape.

**Matrix multiplication** — a non-element-wise operation with different conformability rules and very different geometric meaning.

**Hadamard product** — element-wise multiplication of two matrices of the same shape, the multiplicative analogue of matrix addition.

**Vector addition** — the special case where both matrices are row or column vectors; the same element-wise rule applies.

**Zero matrix** — the additive identity, with every entry equal to zero.

**Transpose** — reflecting a matrix across its main diagonal; useful when combining matrices of incompatible shapes through related operations.`,
      before: ``,
      after: ``,
      link: '#related-concepts',
    },
    obj11: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj12: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj13: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj14: { title: ``, content: ``, before: ``, after: ``, link: '' },
    obj15: { title: ``, content: ``, before: ``, after: ``, link: '' }
  }


  const faqQuestions = {
    obj1: {
      question: "What is matrix addition?",
      answer: "Matrix addition combines two matrices of the same shape into a third matrix by adding their corresponding entries. If A and B are both m by n matrices, then their sum C is also m by n, and each entry c at row i, column j equals a at i,j plus b at i,j. The operation is element-wise: each cell of the result depends only on the matching pair of cells in the operands."
    },
    obj2: {
      question: "Can you add matrices of different sizes?",
      answer: "No. Matrix addition is only defined when both matrices have exactly the same number of rows and the same number of columns. A 2 by 3 matrix cannot be added to a 2 by 4 matrix or a 3 by 2 matrix. Without matched dimensions, some entries in one matrix have no counterpart in the other, so the element-wise rule breaks down."
    },
    obj3: {
      question: "How do you subtract matrices?",
      answer: "Matrix subtraction works the same way as matrix addition, but each pair of corresponding entries is subtracted instead of summed. If A and B are both m by n, then C = A minus B is also m by n, with c at i,j equal to a at i,j minus b at i,j. As with scalars, matrix subtraction is not commutative: A minus B is generally not equal to B minus A."
    },
    obj4: {
      question: "What is the difference between matrix addition and matrix multiplication?",
      answer: "Matrix addition is element-wise and requires both matrices to have identical shapes. Matrix multiplication is not element-wise: it requires the number of columns in the first matrix to equal the number of rows in the second, and each entry of the result is a sum of products across an entire row and column. They have completely different conformability rules and geometric meanings."
    },
    obj5: {
      question: "Is matrix addition commutative?",
      answer: "Yes. Matrix addition is commutative and associative, just like ordinary addition: A plus B equals B plus A, and grouping does not matter when adding three or more matrices. The zero matrix acts as the additive identity, and every matrix A has an additive inverse minus A such that A plus minus A equals the zero matrix."
    }
  }


  const schemas = {
    webApplication: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Matrix Addition and Subtraction Visualizer",
      "description": "Step-by-step visualizer for matrix addition and subtraction. Watch C = A plus or minus B build cell by cell with linked dimensions and animated cell flows.",
      "url": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-addition",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Toggle between matrix addition and matrix subtraction with one click",
        "Adjust shared dimensions of A and B from 1 by 1 up to 5 by 5",
        "Step through each cell of the result matrix C in row-major order",
        "Animated curved arrows show data flow from A and B into C",
        "Cell-level formula captions for every step",
        "Adjustable playback speed and step log of completed operations",
        "Hover tooltip explaining the same-shape requirement"
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
      "keywords": "matrix addition, matrix subtraction, matrix addition visualizer, add matrices step by step, matrix addition calculator, element-wise matrix operations, A + B matrix, A - B matrix, how to add matrices, matrix dimensions for addition, interactive matrix tool, linear algebra visualizer, matrix sum, matrix difference, same shape matrices"
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
          "name": "Matrix Addition",
          "item": "https://www.learnmathclass.com/linear-algebra/visual-tools/matrix-addition"
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
      introContent,
      faqQuestions,
      schemas,
      seoData: {
        title: "Matrix Addition Visualizer | Add & Subtract Matrices",
        description: "Visualize matrix addition and subtraction cell by cell. Toggle A+B or A-B, set dimensions up to 5x5, and watch the element-wise rule build the result step by step.",
        keywords: keyWords.join(", "),
        url: "/linear-algebra/visual-tools/matrix-addition",
        name: "Matrix Addition and Subtraction Visualizer",
        hubDescription: "Watch A + B = C or A - B = C build one cell at a time, with animated arrows linking each pair of operand cells to its destination in the result matrix. Toggle between addition and subtraction, adjust the shared shape of A and B from 1x1 to 5x5, and step through the element-wise rule at your own pace.",
        category: "Matrices",
        subCategory: "Matrix Operations"
      }
    }
  }
}

export default function MatrixAdditionVisualizer({ seoData, sectionsContent, introContent, faqQuestions, schemas }) {


  const genericSections = [
    {
      id: '0',
      title: sectionsContent.obj0.title,
      link: sectionsContent.obj0.link,
      content: [sectionsContent.obj0.content]
    },
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
    },
    // {
    //   id: '11',
    //   title: sectionsContent.obj11.title,
    //   link: sectionsContent.obj11.link,
    //   content: [sectionsContent.obj11.content]
    // },
    // {
    //   id: '12',
    //   title: sectionsContent.obj12.title,
    //   link: sectionsContent.obj12.link,
    //   content: [sectionsContent.obj12.content]
    // },
    // {
    //   id: '13',
    //   title: sectionsContent.obj13.title,
    //   link: sectionsContent.obj13.link,
    //   content: [sectionsContent.obj13.content]
    // },
    // {
    //   id: '14',
    //   title: sectionsContent.obj14.title,
    //   link: sectionsContent.obj14.link,
    //   content: [sectionsContent.obj14.content]
    // },
    // {
    //   id: '15',
    //   title: sectionsContent.obj15.title,
    //   link: sectionsContent.obj15.link,
    //   content: [sectionsContent.obj15.content]
    // },
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
      <h1 className='title' style={{ marginTop: '0px', marginBottom: '0px' }}>Matrix Addition&Subtraction</h1>
      <br />
      <div style={{ width: '80%', margin: 'auto' }}>
        <AdditionWrapper 
        mode='matrices'
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