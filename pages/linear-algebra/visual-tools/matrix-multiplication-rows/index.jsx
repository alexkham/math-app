import Head from 'next/head'
import React from 'react'

import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'

import MatrixProductWrapper from '@/app/components/linear-algebra/multiplication/MatrixProductWrapper'
import RowPictureVisualizer from '@/app/components/linear-algebra/multiplication/RowPictureVisualizer'
import MatrixProductVisualizer from '@/app/components/linear-algebra/multiplication/MatrixProductVisualizer'
import vectorDiagrams from '@/app/components/linear-algebra/multiplication/vectorPictureDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'

import '@/pages/pages.css'

/* the transpose of the column page's matrix, so both pages land on (12, 4) */
const A = [[2, 1], [-1, 2], [3, 0]]
const V = [2, 1, 3]

export default function MatrixMultiplicationRows({
  instructions,
  rowCopy,
  explanations,
  matrixTabExplanations,
  units,
  sectionsContent,
  schemas,
  seoData,
}) {
  const plain = (obj, id) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [sectionsContent[obj].content],
  })

  /* A per-state section is [opening prose, framed unit, deeper treatment].
     The unit is HTML built in getStaticProps and rendered as its own
     content-array item — processContent cannot carry a wrapper div
     around an <svg>. */
  const withUnit = (obj, id, unitKey) => ({
    id,
    title: sectionsContent[obj].title,
    link: sectionsContent[obj].link,
    content: [
      sectionsContent[obj].content,
      <div key={`${id}-unit`} dangerouslySetInnerHTML={{ __html: units[unitKey] }} />,
      sectionsContent[obj].after,
    ],
  })

  /* obj0 is the Key Terms slot. Tool pages do not carry one, so it is left
     empty and kept out of genericSections.

     The original nine keep their ids and their relative order; the state
     sections and one control section are inserted beside the material
     they belong to. Mirrors the columns page section for section. */
  const genericSections = [
    plain('obj1', 'what-the-tool-shows'),
    plain('obj2', 'stepping-through-vta'),
    withUnit('obj10', 'the-empty-bracket', 'emptyPlane'),
    withUnit('obj11', 'one-product-at-a-time', 'dashedPair'),
    plain('obj3', 'reading-the-plane'),
    withUnit('obj12', 'lifting-out-a-row', 'firstScaledPiece'),
    withUnit('obj13', 'the-statement-and-the-arithmetic', 'allPieces'),
    plain('obj14', 'running-the-tool'),
    plain('obj4', 'generating-new-numbers'),
    plain('obj5', 'building-ab-by-rows'),
    plain('obj6', 'why-the-weight-comes-out-in-front'),
    plain('obj7', 'row-space-and-row-equivalence'),
    plain('obj8', 'why-a-is-three-by-two'),
    plain('obj9', 'where-this-leads'),
  ]

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name='description' content={seoData.description} />
        <meta name='keywords' content={seoData.keywords} />
        <link rel='canonical' href={`https://www.learnmathclass.com${seoData.url}`} />

        <meta property='og:title' content={seoData.title} />
        <meta property='og:description' content={seoData.description} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://www.learnmathclass.com${seoData.url}`} />
        <meta property='og:site_name' content='Learn Math Class' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={seoData.title} />
        <meta name='twitter:description' content={seoData.description} />

        <meta name='robots' content='index, follow' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webApplication) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
        />
      </Head>

      {/* Compact header: the tool has to fit on a laptop screen together
          with the title and its own controls, so the spacing above it is
          tight. */}
      <div style={{ height: '68px' }} />
      <OperaSidebar
        side='right'
        sidebarWidth='45px'
        panelWidth='200px'
        iconColor='white'
        panelBackgroundColor='#f2f2f2'
      />
      <Breadcrumb />
      <h1 className='title' style={{ marginTop: '6px', marginBottom: '12px', fontSize: '1.7rem' }}>
        Matrix Multiplication by Rows
      </h1>

      <div style={{ width: '80%', margin: '0 auto 14px' }}>
        <ExplanationDetails title='How to use' instructions={instructions} accent='#2f4fd8' />
      </div>

      <div style={{ width: '80%', margin: 'auto' }}>
        <MatrixProductWrapper
          defaultKey='vector'
          ariaLabel='Reading'
          tabs={[
            {
              key: 'vector',
              label: 'Vector × matrix',
              component: RowPictureVisualizer,
              props: { matrix: A, vector: V, content: rowCopy, layout: 'compact', explanations },
            },
            {
              key: 'matrix',
              label: 'Matrix × matrix',
              component: MatrixProductVisualizer,
              props: { reading: 'rows', layout: 'compact', explanations: matrixTabExplanations },
            },
          ]}
        />
      </div>
      <br />
      <br />

      <SectionTableOfContents
        sections={genericSections}
        showSecondaryNav={true}
        secondaryNavMode='siblings'
        secondaryNavTitle='More in this Section'
      />
      <br />
      <br />
      <br />

      <Sections sections={genericSections} />
      <br />
      <br />
      <br />
    </>
  )
}

export async function getStaticProps() {
  const keyWords = [
    'matrix multiplication by rows',
    'vector times matrix',
    'linear combination of rows',
    'row picture of matrix multiplication',
    'row vector times matrix',
    'row space visualizer',
    'left multiplication acts on rows',
    'elementary matrix row operation',
    'row equivalence elimination',
    'matrix multiplication visualizer',
    'linear algebra visual tools',
    'AB row by row',
    'rows of B weights from A',
    'span of the rows',
    'row reduction linear combination',
  ]

  /* Every item ends in an on-page anchor. ExplanationDetails runs each
     string through processContent, so `[label](!#slug)` resolves here
     exactly as it does in section prose. */
  const instructions = [
    'The tab strip above the figure chooses what is on screen. **Vector $\\times$ matrix** builds $\\mathbf{v}^{T}A$ from the rows of $A$; the matrix-by-matrix tab repeats the argument with a matrix in place of the row vector. [What the second tab does](!#building-ab-by-rows)',
    '**Run** plays the argument from wherever you are and turns into **Pause**. The twelve steps are one product each at the start, then one regrouping move at a time. [More about the controls](!#running-the-tool)',
    '**Step** advances a single step and **Back** returns one. The regrouping steps are the ones worth holding still — see [lifting out a row](!#lifting-out-a-row).',
    'The **Steps** pips and the step counter mark the position in the run. A pip is a marker, not a control. [What the twelve steps are](!#stepping-through-vta)',
    '**Reset** returns to step $0$, [the empty bracket](!#the-empty-bracket), with the same numbers on screen.',
    '**Generate random numbers** rolls a fresh $A$ and $\\mathbf{v}$. No weight is zero and no row of $A$ is the zero vector, so every arrow keeps a direction to draw. [What the generator enforces](!#generating-new-numbers)',
    'The right panel is the plane picture. Dashed from the origin is a row of $A$ on its own; the solid arrow is that row scaled by its weight and laid tail to head on the previous one. [How to read the plane](!#reading-the-plane)',
    'The note under the figure is step-specific and says what the picture is claiming at that moment. [Where the argument lands](!#the-statement-and-the-arithmetic)',
    'The matrix here is $3 \\times 2$, the transpose of the one on the columns page, so both pages land on the same point in the plane. Putting the vector on the right and putting it on the left are two different products that happen to agree here. [Why the shape is three by two](!#why-a-is-three-by-two)',
  ]

  /* Line 1 — one entry per state RowPictureVisualizer can display.
     Appended to that step's narration line; each ends in the anchor of
     the section that treats the state in full. */
  const explanations = {
    setup:
      'Nothing is computed yet, and the plane is empty to match. '
      + '[Learn more about the empty bracket](!#the-empty-bracket)',

    term:
      'This entry is still incomplete, so the plane can only narrow the answer down to a line. '
      + '[Learn more about one product at a time](!#one-product-at-a-time)',

    termComplete:
      'That entry is now fixed, which pins one coordinate and nothing else. '
      + '[Learn more about one product at a time](!#one-product-at-a-time) · [Reading the plane](!#reading-the-plane)',

    regroup:
      'The weight has come out in front and a whole row has dropped below as one piece. '
      + '[Learn more about lifting out a row](!#lifting-out-a-row)',

    summary:
      'This is the claim the whole run was built to make. '
      + '[Learn more about the statement](!#the-statement-and-the-arithmetic)',

    compute:
      'The same point the columns page reaches, because this matrix is its transpose. '
      + '[Learn more about the arithmetic](!#the-statement-and-the-arithmetic) · [Why three by two](!#why-a-is-three-by-two)',
  }

  /* The matrix-by-matrix tab is a different component with its own states;
     they all belong to the one section that treats that tab. */
  const matrixTabExplanations = {
    idleSingle: 'Nothing built yet. [More about building AB by rows](!#building-ab-by-rows)',
    buildRows: 'One row of $B$, scaled by one entry of a row of $A$. [More about building AB by rows](!#building-ab-by-rows)',
    genRows: 'The same statement as the vector tab, one row of $A$ at a time. [More about building AB by rows](!#building-ab-by-rows)',
    doneRows: 'Every row of $AB$ out of the same fixed directions. [More about building AB by rows](!#building-ab-by-rows)',
  }

  /* Framed units: the tool frozen in one state, picture on the left and a
     short reading of that picture on the right. */
  const units = {
    emptyPlane: demoUnitFrame({
      svg: vectorDiagrams.rows.emptyPlane,
      caption: 'Step 0, frozen',
      text: 'Axes and nothing else. The bracket for <em>v</em>&#7488;<em>A</em> already has two slots &mdash; one per column of <em>A</em> &mdash; but neither holds a number, so there is nothing at all to draw.',
    }),

    dashedPair: demoUnitFrame({
      svg: [vectorDiagrams.rows.oneCoordinate, vectorDiagrams.rows.bothCoordinates],
      caption: 'Entry 1 complete, then entry 2, frozen',
      text: 'Above: the first entry is finished, so <em>x</em> is known and the answer lies somewhere on that dashed line. Below: the second entry lands, the two lines cross, and only now is there an arrow. Every step in between was a number, never a vector.',
    }),

    firstScaledPiece: demoUnitFrame({
      svg: vectorDiagrams.rows.firstScaledPiece,
      caption: 'First regrouping step, frozen',
      text: 'Dashed from the origin is row 1 of <em>A</em> on its own. Solid is that same row stretched by <em>v</em><sub>1</sub>. The direction is fixed by <em>A</em>; the weight only decides how far along it you travel.',
    }),

    allPieces: demoUnitFrame({
      svg: vectorDiagrams.rows.allPieces,
      caption: 'Steps 10 and 11, frozen',
      text: 'Three scaled rows laid tail to head, ending on <em>v</em>&#7488;<em>A</em> = (12, 4) &mdash; the same point the columns page reaches, because that page uses the transpose of this matrix with the same weights.',
    }),
  }

  /* Hoisted verbatim from the component so the copy is server-rendered and
     editable from the page. Braced tokens are resolved at runtime by
     fillTokens. */
  const rowCopy = {
    heading: 'From the definition to the rows',

    intro:
      'The mirror of the column case. Put {vT} on the left and fill the {vT}{A} bracket one term at a '
      + 'time by the same definition — then read its terms **across** instead of down. Each horizontal '
      + 'band shares one entry of {v}, and the numbers it multiplies are a **row** of {A}.',

    legendA: '{A}, and anything built from it',
    legendV: '{v}, and the scalars taken from it',

    figureTitle: 'In the plane',

    generalNote:
      '$\\textcolor{#1450c8}{r_i}$ is row $i$ of {A}, a vector in its own right. '
      + '$\\textcolor{#b45309}{v_i}$ is entry $i$ of {v}, a single number. '
      + 'Three fixed directions, three amounts.',

    buttons: {
      back: 'Back',
      run: 'Run',
      pause: 'Pause',
      step: 'Step',
      reset: 'Reset',
      random: 'Generate random numbers',
      stepsLabel: 'Steps',
      stepLabel: 'Step',
    },

    narration: {
      setup:
        'The bracket on the right is empty. By the definition, entry $j$ of {vT}{A} is {v} paired term '
        + 'by term with column $j$ of {A}. Six products in all, one per step — press Run.',

      term:
        'Term {i} of entry {j}. Entry {i} of {v} is {vi}; row {i}, column {j} of {A} is {aij}. '
        + 'Both travel to the same slot in the bracket.',

      termComplete:
        'Term {i} of entry {j}. Entry {i} of {v} is {vi}; row {i}, column {j} of {A} is {aij}. '
        + 'Entry {j} is complete: **{entry}**.',

      regroup:
        'Stop reading down. Read **across**. Both term {i}s carry the same scalar, '
        + '$\\textcolor{#b45309}{v_i}$ = {vi}, because the definition pairs {v} with every column of {A} '
        + 'the same way. The two numbers that scalar multiplies, {ra} and {rb}, are exactly row {i} of '
        + '{A} — so {vi} comes out in front of the whole row, and that row drops below as one piece.',

      summary:
        'Read the line above as a sentence. {vT}{A} is built from the rows of {A} and nothing else; '
        + '{v} contributes no direction at all, only three numbers saying how much of each row to take. '
        + 'The mirror of the column case, and the reason {A} on the right of a product gives up its rows.',

      compute:
        'Now carry out each product and add. Three {cols}-entry rows give one {cols}-entry answer, so '
        + 'the bracket collapses to {vT}{A} = ({x}, {y}).',
    },

    figure: {
      empty:
        'Nothing computed yet. The plane is empty because not one number of the answer exists.',

      xOnly:
        'The first entry fixes **x** and nothing else. Every point on this line has that x. The line '
        + 'sliding sideways as terms land is not motion — it is a number being corrected.',

      yPartial:
        'The second entry fixes **y**. Two lines, one crossing point — that is all a two-number '
        + 'bracket says. Still no vector: a point is not yet an arrow.',

      crossed:
        'Both lines are fixed, so they cross at one point and there is finally a vector. Look back at '
        + 'the route: **no step along the way was a real quantity**.',

      row:
        'Dashed from the origin is **row {i} of A on its own**. The solid arrow is that same row '
        + 'stretched by {vi}, moved so its tail sits on the end of the previous one. The direction never '
        + 'changes — only how far along it you go.',

      rowNegative:
        'Dashed from the origin is **row {i} of A on its own**. The solid arrow is that same row '
        + 'stretched by {vi}, moved so its tail sits on the end of the previous one. The direction never '
        + 'changes, and a negative weight sends you backwards along it.',

      summary:
        'Three arrows, each a row of **A** with its length chosen by **v**, laid end to end. Change '
        + '**v** and they stretch or flip, but **the three directions are fixed by A and never move**.',

      compute:
        'The answer lives in the space the rows of A span. Every step of this route is a real vector — '
        + 'a partial sum of rows.',
    },
  }

  const sectionsContent = {
    obj0: { title: ``, content: ``, after: ``, link: '' },

    obj1: {
      title: `What the tool shows`,
      content: `This page puts the vector on the **left**. That single move changes which part of the matrix is handed over: $\\mathbf{v}^{T}A$ is assembled from the **rows** of $A$, with the entries of $\\mathbf{v}$ as the weights.

The figure computes the product exactly as the definition says — entry $j$ is $\\mathbf{v}$ paired term by term with column $j$ of $A$ — and then regroups the same six products a second way. The left panel carries the algebra, the right panel draws the rows as arrows in the plane.

Colour carries one meaning and never two. Blue is $A$ and anything built from it: its rows, the scaled rows, the pieces of the answer. Amber is $\\mathbf{v}$ and the single numbers taken from it. Navy is site chrome only and never appears inside the figure.

The result is a row vector with one entry per column of $A$, which is worth noticing early. A product with the vector on the left does not produce the same kind of object as a product with the vector on the right, even when the numbers happen to coincide.

If the row by column rule itself is still unfamiliar, the [matrix multiplication calculator](!/visual-tools/matrix-multiplication) works through it entry by entry first.

The sentence the page argues is: **a row vector times a matrix is a weighted sum of the rows of that matrix**.`,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Stepping through vT times A`,
      content: `Twelve steps, in four stretches.

**Step 0** is the empty bracket. The plane is empty with it, because no entry of the answer exists yet.

**Steps 1 to 6** apply the definition, one product per step. Entry $1$ of the answer collects the products that involve column $1$ of $A$, entry $2$ collects those from column $2$. Each step multiplies one entry of $\\mathbf{v}$ by one entry of $A$ and sends the number to its slot.

**Steps 7 to 9** regroup. Read the terms **across** rather than down. The terms sitting in a horizontal band all carry the same entry of $\\mathbf{v}$, because the definition pairs that entry with every column of $A$ in turn. What the shared weight multiplies is a row of $A$, so the weight steps out in front and the row comes down whole. One row per step.

**Steps 10 and 11** state it generally, $\\mathbf{v}^{T}A = v_1r_1 + v_2r_2 + v_3r_3$, and then in numbers.

Work steps $7$ to $9$ with **Step** and **Back**. They contain the entire argument; the first six steps are only bookkeeping.`,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the plane`,
      content: `The panel on the right draws the same computation twice over, once badly and once well, and the contrast is the point.

During steps $1$ to $6$ there are **dashed lines and no arrow**. A line fixes one coordinate of the answer and says nothing about the other; the answer is somewhere on it. When the second line appears the two cross at a point, and only then is there a vector. The route through the definition passes through nothing that is itself a vector.

From step $7$ the rows appear. Each row of $A$ is drawn dashed from the origin — the row as a direction in its own right — and then solid, stretched by its weight and moved so its tail sits at the head of the previous arrow. The dashed direction never moves. A negative weight walks backwards along the same line rather than opening a new one.

The three solid arrows run end to end from the origin to the answer, and every corner is a partial sum of rows, a real vector at every stage.

The rows of a $3 \\times 2$ matrix have two entries each, which is exactly why they can be drawn here at all.`,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Generating new numbers`,
      content: `**Generate random numbers** replaces $A$ and $\\mathbf{v}$ and returns to step $0$. The pair is re-rolled until it is drawable rather than filtered afterwards.

The constraints: **no weight is zero**, because a zero weight has no arrow to draw; **no row of $A$ is the zero vector**, for the same reason; **no partial sum sits on the origin**; and the result is capped so the plot keeps a readable scale.

These are demands of the picture, not of the algebra. A zero entry in $\\mathbf{v}$ is ordinary and informative — the matching row of $A$ simply does not take part, and the answer is a combination of the remaining rows. That is the same mechanism that makes a row of zeros in an elimination step harmless.

The axes, tick spacing and plotted range are all computed from the numbers currently on screen, and the figure is measured from its container in real pixels, so a large answer widens the range instead of shrinking the drawing.`,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Building AB by rows`,
      content: `Swap the row vector for a matrix and the argument survives unchanged.

Write $A$ as a stack of rows. Then $AB$ is the stack of each row of $A$ applied to $B$: row $i$ of $AB$ is row $i$ of $A$ times $B$, which by the first tab is a weighted sum of the **rows of $B$**, with the entries of that row of $A$ as the weights.

$$AB = \\begin{bmatrix} \\mathbf{a}_1^{T}B \\\\ \\mathbf{a}_2^{T}B \\end{bmatrix}$$

So the product is built one row at a time, and the matrix that gives up its rows is the one on the **right**. That is the half of the invariant this page owns: a factor on the left supplies weights and takes rows from its partner.

Colour follows the role, not the letter. In this reading blue marks the rows of $B$ — the pieces being combined — and amber marks a row of $A$, the weights. The product belongs to neither factor and is drawn in navy behind a doubled bracket.

Every product the definition would compute is still computed; only the order of assembly differs.`,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Why the weight comes out in front`,
      content: `The regrouping is worth writing out once by hand.

By the definition, entry $1$ of $\\mathbf{v}^{T}A$ is $v_1a_{11} + v_2a_{21} + v_3a_{31}$ and entry $2$ is $v_1a_{12} + v_2a_{22} + v_3a_{32}$. Set them side by side and read across. The two terms carrying $v_1$ multiply $a_{11}$ and $a_{12}$ — which is row $1$ of $A$.

$$\\mathbf{v}^{T}A = v_1\\begin{bmatrix} a_{11} & a_{12} \\end{bmatrix} + v_2\\begin{bmatrix} a_{21} & a_{22} \\end{bmatrix} + v_3\\begin{bmatrix} a_{31} & a_{32} \\end{bmatrix}$$

The shared factor appears because the definition pairs each entry of $\\mathbf{v}$ with every column of $A$ in turn, so that entry meets an entire row before it meets anything else.

Nothing has been added to the definition: the same six products stand on both sides of the equals sign. What changed is that the answer is now expressed in objects that survive on their own — rows — rather than in single numbers that only mean something once both are present.`,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Row space and row equivalence`,
      content: `Because every $\\mathbf{v}^{T}A$ is a weighted sum of the rows of $A$, the set of all of them is the **span** of those rows: the **row space** of $A$.

That gives elimination its meaning. Adding a multiple of one row to another, scaling a row by a non-zero number, swapping two rows — each of these replaces a row with a weighted sum of rows, so the new matrix has rows that already lay inside the old row space, and the old rows can be recovered from the new ones. **Row operations do not change the row space.** Two matrices related by such operations are called **row equivalent**, and the row space is the thing they share.

This also explains what a row of zeros means at the end of elimination: the rows were not independent, and one of them was already a combination of the others. The count of rows that survive is the **rank**, and it is the same number the columns produce — but the reason it is the same is not obvious from this side, and is worth meeting separately.

Solving $A\\mathbf{x} = \\mathbf{b}$ by elimination is therefore a sequence of moves that keeps the row space fixed while making the system easier to read.`,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why A is three by two`,
      content: `The shape here is not the shape on the columns page, and it cannot be.

Rows of $A$ have as many entries as $A$ has columns. Two columns means every row is a pair of numbers, which is a point in the plane and can be drawn as an arrow. A matrix with three columns would have rows living in three dimensions and the plane figure would be gone — which is exactly what happens if the $2 \\times 3$ matrix from the columns page is used here unchanged.

Three rows give three weights to spend, and the vector on the left must have one entry per row of $A$, since it supplies one weight per row. That is the dimension rule stated from the row side: **weights count rows; the answer counts columns**.

The particular matrix on this page is the transpose of the one on the columns page, and the weights are the same, so both pages arrive at the same point $(12, 4)$. That coincidence is useful rather than accidental: it shows that the two readings are two decompositions of arithmetic that agrees, not two different answers.`,
      after: ``,
      link: '',
    },

    obj10: {
      title: `The empty bracket`,
      content: `Step $0$ is worth a moment rather than a click past.

The bracket for $\\mathbf{v}^{T}A$ already has its shape — two slots, one per **column** of $A$ — before a single number is known. That is the first difference from the columns page, where the slots count rows, and it is the reason the two products are not the same kind of object even when their numbers agree.`,
      after: `The plane is empty for a stricter reason. An arrow needs both coordinates before it can exist, and at step $0$ neither does. This is the honest picture of the computation: not a small answer, but no answer.

**Reset** returns here at any time with the same numbers on screen; **Generate random numbers** returns here with [a fresh pair](!#generating-new-numbers).

Press **Step** once and the first product lands — and the plane still cannot show you a vector, which is the subject of [one product at a time](!#one-product-at-a-time).`,
      link: '',
    },

    obj11: {
      title: `One product at a time`,
      content: `Steps $1$ to $6$ are the definition and nothing else. Each step multiplies one entry of $\\mathbf{v}$ by one entry of $A$ and drops the result into its slot.

Six products, because a three-entry row vector against a $3 \\times 2$ matrix gives two entries of three terms each. Entry $1$ collects the terms from column $1$ of $A$, entry $2$ those from column $2$.`,
      after: `What the plane does during these six steps is the honest part. A dashed vertical line means the first coordinate is known; every point on that line is still a candidate. A dashed horizontal line means the second is known. **One line on its own rules nothing in — it only rules things out.** Only when both are drawn do they cross at a single point, and only then is there a vector at all.

So this route passes through no intermediate quantity that is itself a vector. It computes numbers, and the answer appears all at once when the last one lands. That is what [lifting out a row](!#lifting-out-a-row) repairs.

[Reading the plane](!#reading-the-plane) treats the dashed-line stage and the arrow stage side by side.`,
      link: '',
    },

    obj12: {
      title: `Lifting out a row`,
      content: `Steps $7$ to $9$ are the argument. Nothing new is multiplied — every product already exists, and only the grouping changes.

Read the terms **across** rather than down. The terms in one horizontal band all carry the same entry of $\\mathbf{v}$, because the definition pairs that entry with every column of $A$ in turn. Lift it out in front and what remains is $(a_{i1}, a_{i2})$ — row $i$ of $A$, whole.`,
      after: `The plane makes the claim visible. Dashed from the origin is the row on its own, a direction belonging to $A$. Solid is that same row stretched by its weight and moved so its tail sits on the head of the previous arrow.

The dashed direction never changes. A negative weight walks backwards along the same line rather than opening a new one — the vector supplies amounts, never directions.

This is also the step where the page earns its consequences. A row replaced by a weighted sum of rows is exactly an elementary row operation, which is why [row space and row equivalence](!#row-space-and-row-equivalence) follows from this picture and not from the definition.

Work these three steps with **Step** and **Back**; [the controls](!#running-the-tool) exist for this.`,
      link: '',
    },

    obj13: {
      title: `The statement and the arithmetic`,
      content: `The last two steps say the same thing twice, once in general and once in numbers.

Step $10$ is the sentence

$$\\mathbf{v}^{T}A = v_1r_1 + v_2r_2 + v_3r_3$$

with $r_i$ the $i$-th row of $A$. Step $11$ carries out the arithmetic.`,
      after: `Both steps share one figure, because the plane is already complete at step $10$: three scaled rows laid tail to head, ending on the answer. The last step changes the algebra above the picture, not the picture.

The endpoint is $(12, 4)$ — the same point the columns page reaches. That is not a coincidence and not a proof that the two products are the same: this page uses the **transpose** of that page's matrix with the same weights, so the arithmetic is bound to agree. What differs is what the answer *is*: a row vector with one entry per column here, a column vector with one entry per row there. [Why the shape is three by two](!#why-a-is-three-by-two) makes that argument properly.

Read the final figure against [the dashed-line stage](!#one-product-at-a-time) and the gain is clear: same endpoint, same six products, but here every corner along the path is a real vector.`,
      link: '',
    },

    obj14: {
      title: `Running the tool`,
      content: `**Run** plays forward from wherever you are and becomes **Pause** while it is playing. It advances a little under twice a second — fast enough to show the shape of the argument, too fast to check a step.

**Step** and **Back** move exactly one step. These are the ones that matter on steps $7$ to $9$: a regrouping is a claim, and a claim is easier to check held still.

**Reset** returns to step $0$ — [the empty bracket](!#the-empty-bracket) — without touching the numbers. It restarts the route, not the example.`,
      after: `The run does not loop. **Step** is disabled at step $11$ and **Back** at step $0$; pressing **Run** at the end starts over from the beginning.

Switching tabs also restarts, because a step number means something different in the matrix-by-matrix tab — see [building AB by rows](!#building-ab-by-rows).

The pips and the counter under the figure are position markers rather than controls: a pip is not clickable. [Stepping through vT times A](!#stepping-through-vta) lists what each of the twelve steps does.`,
      link: '',
    },

    obj9: {
      title: `Where this leads`,
      content: `The row reading is the entry point to elimination and everything built on it.

An **elementary matrix** is the identity with one row operation already performed on it. Multiplying on the left, $EA$, applies that operation to $A$ — which is only possible because a left factor combines the rows of its partner, exactly as this page argues. Gaussian elimination is then a product of such matrices applied to $A$ in order, and the factorisations that come out of it, $A = LU$ among them, are bookkeeping for that product.

The same reading explains why a row of zeros can appear during elimination and why a swap of rows is itself a multiplication rather than a side note.

The mirror of this argument [puts the vector on the right](!/linear-algebra/visual-tools/matrix-multiplication-columns), where the matrix hands over its columns instead. That direction leads to span, column space and the question of which right-hand sides are reachable — a different set of questions from the ones elimination answers — and [the two readings meet](!/linear-algebra/visual-tools/matrix-multiplication-rows-columns) once both factors are matrices.`,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = [
    {
      question: 'What does a row vector times a matrix compute?',
      answer: 'It computes a weighted sum of the rows of the matrix. Each entry of the row vector scales one whole row, and the scaled rows are added. The result is a row vector with one entry per column of the matrix.',
    },
    {
      question: 'Why does the left factor act on rows?',
      answer: 'Because the definition pairs each entry of the left factor with every column of the right factor in turn, so that entry meets an entire row of the right factor. The shared weight can then be lifted out in front of that row.',
    },
    {
      question: 'How does this relate to elementary row operations?',
      answer: 'An elementary matrix is the identity with one row operation applied. Multiplying on the left performs that operation, because a left factor combines the rows of its partner. Gaussian elimination is a sequence of such left multiplications.',
    },
    {
      question: 'What is the row space and why does elimination preserve it?',
      answer: 'The row space is the set of all weighted sums of the rows. Every row operation replaces a row by a weighted sum of rows and can be undone, so the span of the rows is unchanged. Matrices related this way are row equivalent.',
    },
    {
      question: 'Why is the matrix three by two here rather than two by three?',
      answer: 'Rows have one entry per column. Two columns put every row in the plane, where it can be drawn. A matrix with three columns would have rows in three dimensions and the plane figure would not exist.',
    },
  ]

  const seoData = {
    title: 'Matrix Multiplication by Rows | Row Picture Tool',
    description: 'See a row vector times a matrix built as a weighted sum of its rows, step by step, with each scaled row drawn as an arrow and the rule behind elimination.',
    keywords: keyWords.join(', '),
    url: '/linear-algebra/visual-tools/matrix-multiplication-rows',
    name: 'Matrix Multiplication by Rows',
    hubDescription: 'Put the vector on the left and the matrix hands over its rows. The tool fills the product one term at a time by the definition, then regroups the same terms across instead of down, so each entry of the vector becomes a weight on a whole row. Every scaled row is drawn in the plane, laid tail to head on the one before it. A second tab repeats the argument with a matrix on the left, building the product one row at a time. This is the reading behind elementary matrices, row equivalence and elimination.',
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="26" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="17" y="26" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="28" y="26" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="45" y="35" font-family="Georgia,serif" font-size="9" fill="#E6F1FB" text-anchor="middle">×</text><rect x="52" y="14" width="11" height="11" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><rect x="63" y="14" width="11" height="11" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><rect x="52" y="25" width="11" height="11" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.8"/><rect x="63" y="25" width="11" height="11" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.8"/><rect x="52" y="36" width="11" height="11" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="63" y="36" width="11" height="11" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="40" y="61" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">vᵀA by rows</text></svg>`,
    category: 'Matrices',
    subCategory: 'Matrix Operations',
  }

  const schemas = {
    webApplication: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: seoData.name,
      url: `https://www.learnmathclass.com${seoData.url}`,
      description: seoData.description,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Two tabs: a row vector times a matrix, and a matrix times a second matrix read by rows',
        'Twelve-step run — six products from the definition, three regrouping steps read across, the general statement, then the arithmetic',
        'Run, Pause, Step, Back and Reset controls with step pips and a step counter',
        'Plane panel drawing each row of A dashed from the origin and solid when scaled by its weight, laid tail to head',
        'A three by two matrix that is the transpose of the columns page, so both pages land on the same point',
        'Random generation constrained so no weight is zero, no row is the zero vector and no partial sum sits on the origin',
        'The reading behind elementary matrices, row equivalence and Gaussian elimination',
      ],
      author: { '@type': 'Organization', name: 'Learn Math Class' },
      datePublished: '2026-09-21',
      dateModified: new Date().toISOString(),
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      learningResourceType: 'Interactive Tool',
      educationalLevel: 'High School, College',
      keywords: seoData.keywords,
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.learnmathclass.com' },
        { '@type': 'ListItem', position: 2, name: 'Linear Algebra', item: 'https://www.learnmathclass.com/linear-algebra' },
        { '@type': 'ListItem', position: 3, name: 'Visual Tools', item: 'https://www.learnmathclass.com/linear-algebra/visual-tools' },
        { '@type': 'ListItem', position: 4, name: seoData.name, item: `https://www.learnmathclass.com${seoData.url}` },
      ],
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqQuestions.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer },
      })),
    },
  }

  return {
    props: {
      keyWords,
      instructions,
      rowCopy,
      explanations,
      matrixTabExplanations,
      units,
      sectionsContent,
      faqQuestions,
      schemas,
      seoData,
    },
  }
}
