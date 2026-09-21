import Head from 'next/head'
import React from 'react'

import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'

import MatrixProductWrapper from '@/app/components/linear-algebra/multiplication/MatrixProductWrapper'
import MatrixProductVisualizer from '@/app/components/linear-algebra/multiplication/MatrixProductVisualizer'
import diagrams from '@/app/components/linear-algebra/multiplication/matrixProductDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'

import '@/pages/pages.css'

export default function MatrixMultiplicationRowsColumns({
  instructions,
  explanations,
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
     around an <svg>, so it must never be interpolated into a string. */
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

     Order preserves the original nine sections' relative order; the state
     sections and the three control sections are inserted beside the
     material they belong to. */
  const genericSections = [
    plain('obj1', 'what-this-page-is-for'),
    plain('obj2', 'the-three-tabs'),
    withUnit('obj10', 'the-empty-bracket', 'emptyPlane'),
    plain('obj3', 'the-colour-swap'),
    withUnit('obj4', 'one-row-one-column-one-entry', 'entry'),
    withUnit('obj11', 'building-a-column-of-ab', 'columnFirstPiece'),
    withUnit('obj12', 'the-finished-product-by-columns', 'columnsComplete'),
    withUnit('obj13', 'building-a-row-of-ab', 'rowFirstPiece'),
    withUnit('obj14', 'the-finished-product-by-rows', 'rowsComplete'),
    plain('obj5', 'why-two-by-two'),
    plain('obj6', 'neither-reading-is-half'),
    plain('obj15', 'running-the-tool'),
    plain('obj16', 'steps-and-the-step-counter'),
    plain('obj17', 'generating-new-numbers'),
    plain('obj7', 'the-invariant-in-four-products'),
    plain('obj8', 'which-reading-answers-which-question'),
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
        Matrix Multiplication: How the Row and Column Readings Fit Together
      </h1>

      <div style={{ width: '80%', margin: '0 auto 14px' }}>
        <ExplanationDetails title='How to use' instructions={instructions} accent='#2f4fd8' />
      </div>

      <div style={{ width: '80%', margin: 'auto' }}>
        <MatrixProductWrapper
          defaultKey='both'
          ariaLabel='Reading'
          tabs={[
            {
              key: 'both',
              label: 'By both rows and columns',
              component: MatrixProductVisualizer,
              props: { reading: 'both', layout: 'compact', explanations },
            },
            {
              key: 'columns',
              label: 'By columns of B',
              component: MatrixProductVisualizer,
              props: { reading: 'columns', layout: 'compact', explanations },
            },
            {
              key: 'rows',
              label: 'By rows of A',
              component: MatrixProductVisualizer,
              props: { reading: 'rows', layout: 'compact', explanations },
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
    'matrix multiplication rows and columns',
    'two readings of a matrix product',
    'AB by columns and by rows',
    'left factor gives up columns',
    'right factor gives up rows',
    'matrix product decomposition',
    'matrix multiplication visualizer',
    'linear algebra visual tools',
    'why matrix multiplication works',
    'slices of a matrix product',
    'matrix product same answer two ways',
    'column reading row reading',
    'regrouping products matrix',
    'matrix multiplication intuition',
    'matrix multiplication explained visually',
  ]

  /* Every item ends in an on-page anchor. ExplanationDetails runs each
     string through processContent, so `[label](!#slug)` resolves here
     exactly as it does in section prose. */
  const instructions = [
    'Three tabs, one product. **By both rows and columns** is the definition: one row of $A$ against one column of $B$, one entry of $AB$ per step. **By columns of B** and **By rows of A** each build $AB$ a whole slice at a time. [What each tab does](!#the-three-tabs)',
    'Switching tabs restarts at step $0$, because a step number means a different thing in each reading. [Why the step counts differ](!#steps-and-the-step-counter)',
    '**Run** plays from the current step and becomes **Pause**. **Step** and **Back** move one step at a time. [More about the controls](!#running-the-tool)',
    'The **Steps** pips and the counter show the position. The number of steps changes with the tab, because the readings take different routes to the same product. [More about the step counter](!#steps-and-the-step-counter)',
    '**Reset** returns to step $0$ with the numbers unchanged, which is [the empty bracket](!#the-empty-bracket).',
    '**Generate random numbers** rolls a fresh $A$ and $B$. No slice of $AB$ is allowed to land on the origin, so every column and every row of the product stays drawable. [What the generator enforces](!#generating-new-numbers)',
    'Colour marks the **role in the current reading**, never the letter. In the slice tabs, blue is whatever is supplying directions and amber whatever is supplying amounts; the two swap between the columns tab and the rows tab, and that swap is the lesson. In the both tab, blue is the row of $A$ and amber the column of $B$ in play — the two operands of one dot product. [More about the colour swap](!#the-colour-swap)',
  ]

  /* Line 1 — one entry per state MatrixProductVisualizer can display.
     Each is appended to that step's narration line and ends in the
     anchor of the section that treats the state in full. */
  const explanations = {
    idleBoth:
      'Nothing is committed yet, and the plane is empty to match. '
      + '[Learn more about the empty bracket](!#the-empty-bracket) · [All three tabs](!#the-three-tabs)',

    idleSingle:
      'Nothing is committed yet, and the plane is empty to match. '
      + '[Learn more about the empty bracket](!#the-empty-bracket) · [All three tabs](!#the-three-tabs)',

    entry:
      'One row, one column, one number — and that number belongs to a row of $AB$ and to a column of $AB$ at once. '
      + '[Learn more about the entry step](!#one-row-one-column-one-entry)',

    buildColumns:
      'The piece is a column of $A$; the weight came from the column of $B$ this slice is built from. '
      + '[Learn more about building a column](!#building-a-column-of-ab)',

    buildRows:
      'The piece is a row of $B$; the weight came from the row of $A$ this slice is built from. '
      + '[Learn more about building a row](!#building-a-row-of-ab)',

    genColumns:
      'The statement holds for every column at once, which is what the finished figure shows. '
      + '[Learn more about the finished columns](!#the-finished-product-by-columns) · [Neither reading is half](!#neither-reading-is-half)',

    genRows:
      'The statement holds for every row at once, which is what the finished figure shows. '
      + '[Learn more about the finished rows](!#the-finished-product-by-rows) · [Neither reading is half](!#neither-reading-is-half)',

    doneColumns:
      'Every column of $AB$ now stands as a combination of the same two directions. '
      + '[Learn more about the finished columns](!#the-finished-product-by-columns)',

    doneRows:
      'Every row of $AB$ now stands as a combination of the same two directions. '
      + '[Learn more about the finished rows](!#the-finished-product-by-rows)',
  }

  /* Framed units: the tool frozen in one state, picture on the left and a
     short reading of that picture on the right. Built here (never inside
     a sectionsContent string) and rendered as content-array items. */
  const units = {
    emptyPlane: demoUnitFrame({
      svg: diagrams.emptyPlane,
      caption: 'Step 0, frozen',
      text: 'Axes, and nothing else. The bracket holds no entry yet, so there is no arrow to draw &mdash; and the plane stays this way in all three tabs, because step 0 means the same thing in every reading.',
    }),

    entry: demoUnitFrame({
      svg: [diagrams.entryPositive, diagrams.entryNegative],
      caption: 'Both tab, a positive and a negative entry, frozen',
      text: 'Blue is row 1 of <em>A</em>, amber a column of <em>B</em>, and the dashed line drops the row onto the column. Above: the projection runs with the column and the entry is +3. Below: against it, and the entry is &minus;1. The sign of an entry is the direction of that drop, nothing more.',
    }),

    columnFirstPiece: demoUnitFrame({
      svg: diagrams.columnFirstPiece,
      caption: 'Columns tab, first piece, frozen',
      text: 'One column of <em>A</em>, scaled by one entry of the column of <em>B</em> being used. The slice is not finished: only when the second piece is laid on this one does an arrow reach a column of <em>AB</em>.',
    }),

    columnsComplete: demoUnitFrame({
      svg: diagrams.columnsComplete,
      caption: 'Columns tab, both columns assembled, frozen',
      text: 'Two navy arrows, col 1 and col 2 of <em>AB</em>, each reached by walking the same two blue directions with different amounts. The directions are fixed by <em>A</em>; only the weights change from slice to slice.',
    }),

    rowFirstPiece: demoUnitFrame({
      svg: diagrams.rowFirstPiece,
      caption: 'Rows tab, first piece, frozen',
      text: 'The mirror of the column case: one row of <em>B</em>, scaled by one entry of the row of <em>A</em> being used. Same picture, other factor.',
    }),

    rowsComplete: demoUnitFrame({
      svg: diagrams.rowsComplete,
      caption: 'Rows tab, both rows assembled, frozen',
      text: 'Two navy arrows, row 1 and row 2 of <em>AB</em>, built from the same two directions &mdash; but the directions here are rows of <em>B</em>, not columns of <em>A</em>. Same product, different decomposition.',
    }),
  }

  const sectionsContent = {
    obj0: { title: ``, content: ``, after: ``, link: '' },

    obj1: {
      title: `What this page is for`,
      content: `This page does not teach a way of multiplying. It shows how the two ways fit together.

There is one product $AB$, and there are two honest decompositions of it. One builds it a column at a time out of the columns of $A$. The other builds it a row at a time out of the rows of $B$. Both compute every entry, both reach the same matrix, and neither is a shortcut or a special case of the other.

The reason there are exactly two is that a product has two sides and they play different parts. **The factor on the left gives up its columns. The factor on the right gives up its rows.** Whichever side you stand on, the other supplies the weights.

A vector product shows only one half of this at a time, because one of its sides is a vector. With two matrices both halves are visible at once, and the figure here is arranged so you can watch the roles change hands rather than take the statement on trust.

If the question is how to compute, either sibling page answers it. If the question is why the same numbers can be assembled two different ways, this is the page.`,
      after: ``,
      link: '',
    },

    obj2: {
      title: `The three tabs`,
      content: `All three tabs run the same component on the same pair of matrices and differ only in the route.

**By both rows and columns**, the tab that opens first, is the definition itself. Each step takes one whole row of $A$ and one whole column of $B$, pairs them term by term, adds, and lands one entry of $AB$. Two rows, two columns, four entries, four steps. Both readings are present in every step: the row belongs to $A$ and the column belongs to $B$, and neither is a piece or a weight — they are the two operands of one dot product.

**By columns of B** builds $AB$ [one column at a time](!#building-a-column-of-ab). Column $j$ is a weighted sum of the columns of $A$, with the weights taken from column $j$ of $B$. When the run ends, [every column of the product](!#the-finished-product-by-columns) has been assembled from the same fixed set of directions.

**By rows of A** builds $AB$ [one row at a time](!#building-a-row-of-ab). Row $i$ is a weighted sum of the rows of $B$, with the weights taken from row $i$ of $A$. Again the directions are fixed across the whole run; only the weights change from slice to slice, and [the finished rows](!#the-finished-product-by-rows) show it.

All three open on [the empty bracket](!#the-empty-bracket), and [the step count differs between tabs](!#steps-and-the-step-counter). That is expected: the routes group the same multiplications differently, so they take a different number of moves to arrive at an identical matrix.`,
      after: ``,
      link: '',
    },

    obj3: {
      title: `The colour swap`,
      content: `Colour on this page means the **role a quantity plays in the current reading**, never which letter it belongs to.

Blue marks the pieces being combined. Amber marks the weights that choose how much of each piece to take. Navy marks $AB$ itself, which belongs to neither factor and is drawn behind a doubled bracket.

In the column reading, blue sits on $A$ and amber on $B$. In the row reading they exchange places: blue moves to $B$, amber to $A$. Switch between the two slice tabs and watch the legend change with them.

That swap is the entire content of the page compressed into one visual event. The letters did not change and the matrices did not move. What changed is which side is being asked for directions, and the answer depends only on which side of the product it sits.

The both tab uses the same two colours for a different pair: blue is the row of $A$ in play, amber the column of $B$. There the two are not pieces and weights but the two operands of one dot product, and they are paired term by term. Run the two slice tabs first if the swap reads as instability rather than as a claim; it is easier to see once each route is familiar on its own.`,
      after: ``,
      link: '',
    },

    obj4: {
      title: `One row, one column, one entry`,
      content: `In the both tab every step holds a row of $A$ and a column of $B$ on screen at once. They meet at a single entry, and that entry is the crux of the page.

Entry $c_{ij}$ is row $i$ of $A$ dotted with column $j$ of $B$. It belongs to row $i$ of the product and to column $j$ of the product. The column reading produces it as part of a weighted sum of the columns of $A$; the row reading produces it as part of a weighted sum of the rows of $B$. Two different assemblies, one number — and the definition computes it once, not twice.

That is what rules out the tempting misreading that each route builds half the product and the halves are glued together. Every entry is claimed by both readings, and they agree everywhere.

In the plane, the step draws the row of $A$ and the column of $B$ from the origin and drops the row onto the column. The signed length of that projection, times the length of the column, is the entry. A negative entry is a projection that points against the column.`,
      after: `The projection is worth reading carefully, because it is the geometric content of a dot product and it is easy to accept as decoration. Dropping the row onto the column asks: how much of this row points along that column? Multiply that amount by the column's own length and you have $\\mathbf{a}_i^{T}\\mathbf{b}_j$, the entry. When the two are perpendicular the drop lands on the origin and the entry is zero — which is what an entry of zero in a product actually means.

Four steps cover the whole product, one per entry, because a $2 \\times 2$ result has four of them. Nothing is grouped and nothing is regrouped; this tab is the definition with no rearrangement at all.

That makes it the right place to start and the wrong place to stop. It shows what every entry is, and it shows nothing about what the product *does* — for that you have to watch whole slices assemble, in [building a column](!#building-a-column-of-ab) and [building a row](!#building-a-row-of-ab).`,
      link: '',
    },

    obj5: {
      title: `Why two by two`,
      content: `The matrices here are $2 \\times 2$, and the choice is forced by what has to be drawn.

A product of an $m \\times k$ matrix with a $k \\times n$ matrix costs $m \\cdot k \\cdot n$ multiplications. At $2 \\times 2$ that is eight, which is enough to see structure and few enough to follow. A $3 \\times 3$ product is twenty-seven, and the figure stops being readable well before the argument lands.

The shape also has to keep both readings drawable at once. With two rows and two columns in the product, every column of $AB$ is a plane vector and so is every row; and every row of $A$ and every column of $B$ is a plane vector too, which is what lets the both tab draw a row against a column and read the entry off as a projection. Change either outer dimension and one of the two families leaves the plane.

Random generation enforces the rest: no entry of $AB$ grows past a readable size, and no column or row of the product is allowed to be entirely zero, since a slice at the origin has no direction to draw. These are constraints on the picture. The algebra is indifferent to them.`,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Neither reading is half`,
      content: `It is worth stating plainly what the two decompositions are and are not.

Write $B$ by its columns. Then

$$AB = \\begin{bmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 \\end{bmatrix}$$

and each $A\\mathbf{b}_j$ is a weighted sum of the columns of $A$. Now write $A$ by its rows. Then

$$AB = \\begin{bmatrix} \\mathbf{a}_1^{T}B \\\\ \\mathbf{a}_2^{T}B \\end{bmatrix}$$

and each $\\mathbf{a}_i^{T}B$ is a weighted sum of the rows of $B$.

Both expressions are the whole matrix. The first slices it vertically, the second horizontally, and a slicing is not a share. Expanding either one gives the same eight products the definition asks for, grouped differently.

The practical consequence is that you may choose the grouping to suit the question. Nothing is lost by reading a product as columns when columns are what matters, and nothing is gained by trying to combine the two routes into one procedure — they are the same procedure, read from two sides.`,
      after: ``,
      link: '',
    },

    obj7: {
      title: `The invariant in four products`,
      content: `The rule this series is built on fits in one sentence: **matrix multiplication never operates on single entries; it operates on whole rows or whole columns, and which one depends only on which side the other factor sits.**

Four products state it from four angles.

$A\\mathbf{v}$ — $A$ contributes its columns, $\\mathbf{v}$ supplies the weights.

$\\mathbf{v}^{T}A$ — $A$ contributes its rows, $\\mathbf{v}$ supplies the weights.

$AB$ read by columns — $A$ contributes its columns, a column of $B$ supplies the weights.

$AB$ read by rows — $B$ contributes its rows, a row of $A$ supplies the weights.

The left operand always gives up columns; the right operand always gives up rows. The two vector products each show one half of that, because a vector has only one interesting direction to be read in. The matrix product shows both halves simultaneously, which is why it appears on all three pages of this series rather than on a page of its own.

Nothing beyond the plain definition is used to reach any of the four.`,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Which reading answers which question`,
      content: `The two routes are equally valid and not equally useful. Which one to reach for depends on what is being asked.

Read [by columns](!/linear-algebra/visual-tools/matrix-multiplication-columns) when the question is about reach. The set of all weighted sums of the columns of $A$ is its column space, so questions about which right-hand sides are attainable, whether $A\\mathbf{x} = \\mathbf{b}$ can be solved, what the span of a set of vectors covers and how many independent directions a matrix carries are all column questions.

Read [by rows](!/linear-algebra/visual-tools/matrix-multiplication-rows) when the question is about elimination. Row operations replace a row by a weighted sum of rows, so they are left multiplications, and elementary matrices, row equivalence and the factorisations that come out of Gaussian elimination all live on the row side.

Read the [definition itself](!/visual-tools/matrix-multiplication), cell by cell, when the question is about cost or about a single entry. That route is the one that makes the price of a product visible.

A useful habit: before multiplying, ask which factor you care about. If it is the left one, read columns. If it is the right one, read rows.`,
      after: ``,
      link: '',
    },

    obj10: {
      title: `The empty bracket`,
      content: `Every tab opens on the same thing: a bracket for $AB$ with nothing in it, and a plane with nothing drawn.

That is worth a moment rather than a click past. The bracket already has its shape — two rows and two columns, because $A$ has two rows and $B$ has two columns — before a single entry is known. The shape of a product is settled by the shapes of its factors, not by their contents.`,
      after: `The plane is empty for a stricter reason. An arrow needs both of its coordinates before it can be drawn, and at step $0$ neither exists. This is the honest state of the computation: not a small answer, but no answer.

Pressing **Reset** at any point returns here with the same numbers on screen. **Generate random numbers** also returns here, but with a fresh $A$ and $B$ — see [generating new numbers](!#generating-new-numbers) for what it is allowed to roll.

What happens on the next step depends entirely on which tab you are in, and that is the whole subject of [the three tabs](!#the-three-tabs).`,
      link: '',
    },

    obj11: {
      title: `Building a column of AB`,
      content: `In the columns tab each step lays down one piece of one column of the product.

Column $j$ of $AB$ is $A\\mathbf{b}_j$ — the matrix $A$ applied to column $j$ of $B$ — and by the column reading that is a weighted sum of the columns of $A$. So the step multiplies one column of $A$ by one entry of that column of $B$ and lays the result on the end of what is already there.`,
      after: `The picture is a walk, not a jump. After the first piece the arrow is nowhere meaningful: it is a partial sum, one term short of a column of $AB$. That is the difference between this route and the entry-by-entry one — here every intermediate point is a genuine vector, even though it is not yet the answer.

Two things stay fixed for the whole run. The directions are the columns of $A$, and they never move. Only the weights change, and they change because a different column of $B$ is being read. Watch the second slice start and you see the same two directions walked again with different amounts, which is exactly what [the finished figure](!#the-finished-product-by-columns) shows.

The mirror step in the other slice tab is [building a row](!#building-a-row-of-ab).`,
      link: '',
    },

    obj12: {
      title: `The finished product by columns`,
      content: `At the end of the columns run both columns of $AB$ stand in the plane, each at the end of its own two-piece walk.

$$AB = \\begin{bmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 \\end{bmatrix}$$

The general statement the board shows at the second-to-last step and the completed product at the last step are the same picture: the plane does not change between them, only the algebra above it does.`,
      after: `Read the figure as a claim about reach. Both navy arrows were built from the same two blue directions — the columns of $A$ — and differ only in how much of each was taken. Any other column of $B$ would produce another arrow in the same family. That family is the set of all weighted sums of the columns of $A$, and it is what a column reading is ultimately about.

Note what is **not** on screen: the rows of $AB$. They exist, they are correct, and this route never drew them. That is not an omission but the nature of a slicing, which is the point [neither reading is half](!#neither-reading-is-half) makes in full.

The same product assembled the other way is [the finished product by rows](!#the-finished-product-by-rows).`,
      link: '',
    },

    obj13: {
      title: `Building a row of AB`,
      content: `The rows tab is the mirror image, and it is worth running immediately after the columns tab so the symmetry is fresh.

Row $i$ of $AB$ is $\\mathbf{a}_i^{T}B$ — row $i$ of $A$ applied to $B$ — and that is a weighted sum of the **rows of $B$**. So the step multiplies one row of $B$ by one entry of that row of $A$ and lays it on the end of the walk.`,
      after: `Everything structural is identical to [building a column](!#building-a-column-of-ab): the same tail-to-head walk, the same partial sums that are real vectors, the same two fixed directions reused with different amounts.

One thing is not identical, and it is the thing to notice. The fixed directions here belong to $B$, not to $A$. Blue has moved to the other factor. Nothing about the matrices changed when you switched tabs — what changed is which side is being asked for directions, and [the colour swap](!#the-colour-swap) is where that is argued.`,
      link: '',
    },

    obj14: {
      title: `The finished product by rows`,
      content: `At the end of the rows run both rows of $AB$ stand in the plane.

$$AB = \\begin{bmatrix} \\mathbf{a}_1^{T}B \\\\ \\mathbf{a}_2^{T}B \\end{bmatrix}$$

As in the columns tab, the general statement and the finished product share one figure; the plane is complete a step before the algebra finishes describing it.`,
      after: `Put this figure beside [the finished product by columns](!#the-finished-product-by-columns) and the two look alike — four navy arrows in total, two from each run, all built from two fixed directions. But they are not four different things. They are two slicings of one $2 \\times 2$ matrix: the first cut it vertically, this one cut it horizontally, and every entry appears in both.

The entry step makes that concrete rather than asserted: [one row, one column, one entry](!#one-row-one-column-one-entry) shows a single number being claimed by a row and a column at the same time.`,
      link: '',
    },

    obj15: {
      title: `Running the tool`,
      content: `The control bar sits at the same height in every tab and on every step, so nothing jumps as the figure changes.

**Run** plays forward from wherever you are and becomes **Pause** while it is playing. It advances roughly twice a second, which is fast enough to see the shape of a route and too fast to follow an individual step.

**Step** and **Back** move exactly one step. These are the controls that matter: the regrouping and entry steps are arguments, and an argument is easier to check held still than in motion.

**Reset** returns to step $0$ — [the empty bracket](!#the-empty-bracket) — without changing the numbers. It restarts the route, not the example.`,
      after: `A small thing that is easy to misread: **Step** is disabled at the end of a run and **Back** at the beginning. The run does not loop. Press **Run** again at the end and it starts over from step $0$.

Switching tabs also returns to step $0$, because a step number means something different in each reading — see [the step counter](!#steps-and-the-step-counter).`,
      link: '',
    },

    obj16: {
      title: `Steps and the step counter`,
      content: `The pips under the figure are position markers, not controls: they show how far along the run you are, and a pip is not clickable. The counter beside them reads the same position as a number.

**The step count is not the same in every tab, and the difference is informative.** By both rows and columns takes four steps, one per entry of $AB$ — two rows times two columns. The two slice tabs take six: four steps to lay down pieces, then one for the general statement and one for the finished product.`,
      after: `Four against six is not a discrepancy. Both routes perform the same eight multiplications the definition asks for; they simply group them differently, and a grouping is a choice about how many moves to spend, not about how much arithmetic to do.

This is also why switching tabs restarts at step $0$. "Step 3" in the definition tab is the third entry of the product; "step 3" in the columns tab is the first piece of the second column. Carrying a position across would carry it into a route where it means something else.

The counts change with the shape too. A definition run always takes $m \\cdot n$ steps, one per entry; a slice run takes $k$ pieces for each of its slices, plus two. At $2 \\times 2$ that is four and six. [Why two by two](!#why-two-by-two) explains why the tool stays at that shape.`,
      link: '',
    },

    obj17: {
      title: `Generating new numbers`,
      content: `**Generate random numbers** rolls a fresh $A$ and $B$ and returns to step $0$. The pair is re-rolled until it is drawable, rather than being drawn once and patched afterwards.

Three constraints are enforced. **No entry of either factor is zero.** **No entry of $AB$ exceeds sixteen in size**, so the plot keeps a readable scale. **No column of $AB$ and no row of $AB$ is entirely zero**, because a slice sitting at the origin has no direction to draw and no arrow to label.`,
      after: `None of this is a fact about matrix multiplication. A zero entry is perfectly legal and often interesting — it means one piece contributes nothing and the slice is a combination of the rest. A column of $AB$ that comes out zero is more interesting still: it says a column of $B$ was sent to the origin, which is the first sign of a matrix that collapses the plane.

The tool refuses those cases because it has to draw an arrow, not because the algebra objects. If the generator tries four hundred times without finding a drawable pair it keeps the last one rather than spinning, which is a safeguard you should never see reached at this shape.

The axes, the tick spacing and the plotted range are all recomputed from whatever numbers are on screen, so a large product widens the range instead of pushing the drawing off the edge.`,
      link: '',
    },

    obj9: {
      title: `Where this leads`,
      content: `Two directions open from here, and they are the reason the series exists.

The first is the decomposition that contains both readings. Write the product as a sum over the shared dimension, $AB = \\sum_p \\mathbf{a}_p \\mathbf{b}_p^{T}$, where $\\mathbf{a}_p$ is column $p$ of $A$ and $\\mathbf{b}_p^{T}$ is row $p$ of $B$. Each term is a rank-one matrix. Take a column of that sum and the column reading falls out; take a row and the row reading does. Outer products are where the two pictures are visibly the same object.

The second is transformations. Feeding a standard basis vector into the column reading keeps exactly one column and discards the rest, so the columns of a matrix are the images of the basis vectors. Building a rotation, a reflection or a projection then becomes a question of deciding where the basis should land and writing those images down as columns, rather than recalling a formula.

Both are natural next steps once the two readings are no longer competing for the same slot in your head.`,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = [
    {
      question: 'Are the row and column readings two halves of a matrix product?',
      answer: 'No. Each reading builds the whole product. They slice it differently, one into columns and one into rows, and every entry is produced by both. The both tab shows this directly: every step holds one row of A and one column of B and lands one entry that belongs to both a row and a column of AB.',
    },
    {
      question: 'Why do the colours swap when the reading changes?',
      answer: 'Colour marks the role a matrix is playing, not which letter it is. The factor supplying directions is blue and the factor supplying weights is amber, and those roles change hands when the reading changes, because the left factor gives up columns and the right factor gives up rows.',
    },
    {
      question: 'Do the two readings ever disagree?',
      answer: 'Never. Both group the same products the definition calls for, so they agree on every entry. Only the order of assembly and the number of steps differ.',
    },
    {
      question: 'Which reading should I use?',
      answer: 'Use columns for questions about reach and solvability, since the columns span the set of attainable results. Use rows for questions about elimination, since row operations are left multiplications. Use the definition itself when a single entry or the cost of the product is what matters.',
    },
    {
      question: 'Why are both matrices two by two here?',
      answer: 'A product costs m times k times n multiplications, so larger shapes quickly become unreadable. Two by two keeps it at eight products and puts both the columns and the rows of the result in the plane, which is what lets a column and a row be drawn together.',
    },
  ]

  const seoData = {
    title: 'Matrix Multiplication: Rows and Columns Together',
    description: 'One matrix product, two honest readings. See AB built from the columns of A and from the rows of B, and watch which factor supplies directions change hands.',
    keywords: keyWords.join(', '),
    url: '/linear-algebra/visual-tools/matrix-multiplication-rows-columns',
    name: 'Matrix Multiplication by Rows and Columns',
    hubDescription: 'One product, two decompositions, and the relationship between them. The tool builds AB a column at a time out of the columns of A, then a row at a time out of the rows of B, then puts a column and a row of the finished product in the same plane so you can see the single entry they share. Colour marks the role each factor plays rather than its name, so the swap between readings is visible as it happens. This page explains how the two readings fit together rather than teaching either one.',
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="32" y1="6" x2="32" y2="11" stroke="#85B7EB" stroke-width="1.6"/><path d="M 32 15 L 29.2 10 L 34.8 10 Z" fill="#85B7EB"/><line x1="8" y1="24" x2="16" y2="24" stroke="#FAC775" stroke-width="1.6"/><path d="M 21 24 L 16 21.2 L 16 26.8 Z" fill="#FAC775"/><rect x="25" y="17" width="15" height="15" fill="#C0DD97" stroke="#3B6D11" stroke-width="1.2"/><rect x="40" y="17" width="15" height="15" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="25" y="32" width="15" height="15" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><rect x="40" y="32" width="15" height="15" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="40" y="61" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">AB, two ways</text></svg>`,
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
        'Three tabs over one product: by both rows and columns, by columns of B, and by rows of A',
        'Run, Pause, Step, Back and Reset controls with step pips and a step counter',
        'Two by two factors, so every column and every row of the product is a plane vector and both can be drawn together',
        'Colour by role rather than by letter — blue for whatever supplies directions, amber for whatever supplies amounts',
        'Legend and colours that change hands when the reading changes, so the swap is visible as it happens',
        'Random generation constrained so no column and no row of the product lands on the origin',
        'Side by side comparison of which reading answers which question — reach and solvability against elimination',
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
      explanations,
      units,
      sectionsContent,
      faqQuestions,
      schemas,
      seoData,
    },
  }
}
