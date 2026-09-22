import Head from 'next/head'
import React from 'react'

import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'

import MatrixProductWrapper from '@/app/components/linear-algebra/multiplication/MatrixProductWrapper'
import ColumnPictureVisualizer from '@/app/components/linear-algebra/multiplication/ColumnPictureVisualizer'
import MatrixProductVisualizer from '@/app/components/linear-algebra/multiplication/MatrixProductVisualizer'
import vectorDiagrams from '@/app/components/linear-algebra/multiplication/vectorPictureDiagrams'
import demoUnitFrame from '@/app/components/demo-unit/demoUnitFrame'

import '@/pages/pages.css'
import RelatedTools from '@/app/components/related-tools/RelatedTools'
import { getRelatedTools } from '@/app/utils/getRelatedTools'

const A = [[2, -1, 3], [1, 2, 0]]
const V = [2, 1, 3]

export default function MatrixMultiplicationColumns({
  relatedTools, instructions,
  avCopy,
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
     they belong to. */
  const genericSections = [
    plain('obj1', 'what-the-tool-shows'),
    plain('obj2', 'stepping-through-av'),
    withUnit('obj10', 'the-empty-bracket', 'emptyPlane'),
    withUnit('obj11', 'one-product-at-a-time', 'dashedPair'),
    plain('obj3', 'reading-the-plane'),
    withUnit('obj12', 'lifting-out-a-column', 'firstScaledPiece'),
    withUnit('obj13', 'the-statement-and-the-arithmetic', 'allPieces'),
    plain('obj14', 'running-the-tool'),
    plain('obj4', 'generating-new-numbers'),
    plain('obj5', 'building-ab-by-columns'),
    plain('obj6', 'why-the-weight-comes-out-in-front'),
    plain('obj7', 'column-space-and-solvability'),
    plain('obj8', 'why-a-is-two-by-three'),
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
        Matrix Multiplication by Columns
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
              label: 'Matrix × vector',
              component: ColumnPictureVisualizer,
              props: {matrix: A, vector: V, content: avCopy, layout: 'compact', explanations },
            },
            {
              key: 'matrix',
              label: 'Matrix × matrix',
              component: MatrixProductVisualizer,
              props: { reading: 'columns', layout: 'compact', explanations: matrixTabExplanations },
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

      <RelatedTools tools={relatedTools}/>
      <Sections sections={genericSections} />
      <br />
      <br />
      <br />
    </>
  )
}

export async function getStaticProps() {
  const keyWords = [
    'matrix multiplication by columns',
    'matrix times vector',
    'linear combination of columns',
    'column picture of matrix multiplication',
    'Av as weighted sum of columns',
    'column space visualizer',
    'matrix vector product step by step',
    'columns of A weights of v',
    'matrix multiplication visualizer',
    'linear algebra visual tools',
    'matrix product by columns',
    'AB column by column',
    'span of the columns',
    'solvable linear system columns',
    'linear combination visualizer',
  ]

  /* Every item ends in an on-page anchor. ExplanationDetails runs each
     string through processContent, so `[label](!#slug)` resolves here
     exactly as it does in section prose. */
  const instructions = [
    'The tab strip above the figure chooses what is on screen. **Matrix $\\times$ vector** builds $A\\mathbf{v}$ from the columns of $A$; the matrix-by-matrix tab repeats the same argument with a second matrix in place of the vector. [What the second tab does](!#building-ab-by-columns)',
    '**Run** plays the whole argument from wherever you are and turns into **Pause**. The twelve steps are one product each at the start, then one regrouping move at a time. [More about the controls](!#running-the-tool)',
    '**Step** advances a single step and **Back** returns one. Use these rather than Run when a step is doing something you want to hold still, which is mostly [the regrouping steps](!#lifting-out-a-column).',
    'The **Steps** pips and the step counter show where you are in the twelve steps. A pip is not clickable; it is a position marker. [What the twelve steps are](!#stepping-through-av)',
    '**Reset** returns to step 0, [the empty bracket](!#the-empty-bracket), with the same numbers on screen.',
    '**Generate random numbers** rolls a fresh $A$ and $\\mathbf{v}$. Weights are never zero and no column is the zero vector, so every arrow in the plane keeps a direction to draw. [What the generator enforces](!#generating-new-numbers)',
    'The right panel is the plane picture. Dashed from the origin is a column of $A$ on its own; the solid arrow is that same column scaled by its weight, laid tail to head on the previous one. [How to read the plane](!#reading-the-plane)',
    'The note under the figure changes with the step and says what the picture is claiming at that moment. It is the part to read if a step looks like motion rather than arithmetic. [Where the argument lands](!#the-statement-and-the-arithmetic)',
  ]

  /* Line 1 — one entry per state ColumnPictureVisualizer can display.
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
      'The weight has come out in front and a whole column has dropped below as one piece. '
      + '[Learn more about lifting out a column](!#lifting-out-a-column)',

    summary:
      'This is the claim the whole run was built to make. '
      + '[Learn more about the statement](!#the-statement-and-the-arithmetic)',

    compute:
      'The same point the row-by-row route reached, but every corner on the way was a real vector. '
      + '[Learn more about the arithmetic](!#the-statement-and-the-arithmetic)',
  }

  /* The matrix-by-matrix tab is a different component with its own states;
     they all belong to the one section that treats that tab. */
  const matrixTabExplanations = {
    idleSingle: 'Nothing built yet. [More about building AB by columns](!#building-ab-by-columns)',
    buildColumns: 'One column of $A$, scaled by one entry of a column of $B$. [More about building AB by columns](!#building-ab-by-columns)',
    genColumns: 'The same statement as the vector tab, one column of $B$ at a time. [More about building AB by columns](!#building-ab-by-columns)',
    doneColumns: 'Every column of $AB$ out of the same fixed directions. [More about building AB by columns](!#building-ab-by-columns)',
  }

  /* Framed units: the tool frozen in one state, picture on the left and a
     short reading of that picture on the right. */
  const units = {
    emptyPlane: demoUnitFrame({
      svg: vectorDiagrams.columns.emptyPlane,
      caption: 'Step 0, frozen',
      text: 'Axes and nothing else. The bracket for <em>Av</em> already has two slots &mdash; one per row of <em>A</em> &mdash; but neither holds a number, so there is nothing at all to draw.',
    }),

    dashedPair: demoUnitFrame({
      svg: [vectorDiagrams.columns.oneCoordinate, vectorDiagrams.columns.bothCoordinates],
      caption: 'Entry 1 complete, then entry 2, frozen',
      text: 'Above: the first entry is finished, so <em>x</em> is known and the answer lies somewhere on that dashed line. Below: the second entry lands, the two lines cross, and only now is there an arrow. Every step in between was a number, never a vector.',
    }),

    firstScaledPiece: demoUnitFrame({
      svg: vectorDiagrams.columns.firstScaledPiece,
      caption: 'First regrouping step, frozen',
      text: 'Dashed from the origin is column 1 of <em>A</em> on its own. Solid is that same column stretched by <em>v</em><sub>1</sub>. The direction is fixed by <em>A</em>; the weight only decides how far along it you travel.',
    }),

    allPieces: demoUnitFrame({
      svg: vectorDiagrams.columns.allPieces,
      caption: 'Steps 10 and 11, frozen',
      text: 'Three scaled columns laid tail to head, ending on <em>Av</em> = (12, 4). Contrast this with the dashed-line route above: here every corner is a genuine vector, a partial sum of columns.',
    }),
  }

  /* The component ships these strings as its own defaults. They are hoisted
     here verbatim so the copy is server-rendered and editable from the page
     rather than buried in the component. Tokens in braces are resolved at
     runtime by fillTokens. */
  const avCopy = {
    heading: 'From the definition to the columns',

    intro:
      'Nothing here is a new rule. Fill the {A}{v} bracket one term at a time by the plain '
      + 'definition, then read its terms downwards instead of across. Each vertical pair shares one '
      + 'entry of {v}, and the two numbers it multiplies are a column of {A} — which is the whole '
      + 'reason a column scales as one piece.',

    legendA: '{A}, and anything built from it',
    legendV: '{v}, and the scalars taken from it',

    figureTitle: 'In the plane',

    generalNote:
      '$\\textcolor{#1450c8}{c_j}$ is column $j$ of {A}, a vector in its own right. '
      + '$\\textcolor{#b45309}{v_j}$ is entry $j$ of {v}, a single number. '
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
        'The bracket on the right is empty. By the definition, entry $i$ of {A}{v} is row $i$ of '
        + '{A} paired term by term with {v}. Six products in all, one per step — press Run.',

      term:
        'Term {j} of entry {i}. Row {i}, column {j} of {A} is {aij}; entry {j} of {v} is {vj}. '
        + 'Both travel to the same slot in the bracket.',

      termComplete:
        'Term {j} of entry {i}. Row {i}, column {j} of {A} is {aij}; entry {j} of {v} is {vj}. '
        + 'Entry {i} is complete: **{entry}**.',

      regroup:
        'Stop reading across. Read **down**. Both term {j}s carry the same scalar, '
        + '$\\textcolor{#b45309}{v_j}$ = {vj}, because the definition pairs every row of {A} with '
        + 'the same entry of {v}. The two numbers that scalar multiplies, {ca} and {cb}, are exactly '
        + 'column {j} of {A} — so {vj} comes out in front of the whole column, and that column drops '
        + 'below as one piece.',

      summary:
        'Read the line above as a sentence. {A}{v} is built from the columns of {A} and nothing '
        + 'else; {v} contributes no direction at all, only three numbers saying how much of each '
        + 'column to take. Nothing was added to the definition to get here — the same six products '
        + 'were grouped by column instead of by row.',

      compute:
        'Now carry out each product and add. Three {rows}-entry columns give one {rows}-entry '
        + 'answer, so the bracket collapses to {A}{v} = ({x}, {y}) — the same numbers the '
        + 'row-by-row route produced.',
    },

    figure: {
      empty:
        'Nothing computed yet. The plane is empty because not one number of the answer exists.',

      xOnly:
        'The first entry fixes **x** and nothing else. Every point on this line has that x. The '
        + 'line sliding sideways as terms land is not motion — it is a number being corrected.',

      yPartial:
        'The second entry fixes **y**. Two lines, one crossing point — that is all a two-number '
        + 'bracket says. Still no vector: a point is not yet an arrow.',

      crossed:
        'Both lines are fixed, so they cross at one point and there is finally a vector. Look back '
        + 'at the route: **no step along the way was a real quantity**.',

      column:
        'Dashed from the origin is **column {j} of A on its own**. The solid arrow is that same '
        + 'column stretched by {vj}, moved so its tail sits on the end of the previous one. The '
        + 'direction never changes — only how far along it you go.',

      columnNegative:
        'Dashed from the origin is **column {j} of A on its own**. The solid arrow is that same '
        + 'column stretched by {vj}, moved so its tail sits on the end of the previous one. The '
        + 'direction never changes, and a negative weight sends you backwards along it.',

      summary:
        'Three arrows, each a column of **A** with its length chosen by **v**, laid end to end. '
        + 'Change **v** and they stretch or flip, but **the three directions are fixed by A and '
        + 'never move**.',

      compute:
        'The same endpoint the first route reached. The difference is that here **every '
        + 'intermediate point is a real vector** — a partial sum of columns.',
    },
  }

  const sectionsContent = {
    obj0: { title: ``, content: ``, after: ``, link: '' },

    obj1: {
      title: `What the tool shows`,
      content: `The figure on this page never leaves the definition of the product. It computes $A\\mathbf{v}$ exactly as the definition says — entry $i$ is row $i$ of $A$ paired term by term with $\\mathbf{v}$ — and then regroups the same products a second way.

Two things are on screen at once. On the left is the algebra: the six products of a $2 \\times 3$ [matrix](!/linear-algebra/matrix#1) against a three-entry [vector](!/linear-algebra/vectors#1), landing one at a time in a bracket. On the right is the plane, where the answer is drawn as an arrow and every partial result is drawn with it.

The colours carry one meaning each and never two. Blue is $A$ and anything built from $A$ — its columns, the scaled columns, the pieces of the answer. Amber is $\\mathbf{v}$ and the single numbers taken from it. Nothing in the figure is coloured because of where it sits; the colour says what role the quantity plays.

If the row by column rule is not yet second nature, the [matrix multiplication calculator](!/visual-tools/matrix-multiplication) runs it entry by entry. This page begins where that one stops.

The claim the whole page argues is short. **A matrix times a vector is a weighted sum of the columns of the matrix**, and the vector supplies nothing but the weights.`,
      after: ``,
      link: '',
    },

    obj2: {
      title: `Stepping through A times v`,
      content: `The run has twelve steps and they fall into four stretches.

**Step 0** is the empty bracket. Nothing has been computed, and the plane is empty to match — there is no arrow because not one number of the answer exists yet.

**Steps 1 to 6** are the definition, one product per step. Each step multiplies one entry of a row of $A$ by one entry of $\\mathbf{v}$ and sends the result to its slot. Entry $1$ of the answer finishes at step $3$, entry $2$ at step $6$.

**Steps 7 to 9** do the regrouping. Nothing new is multiplied here. The two terms that share a weight are lifted out of the bracket together, the weight is written in front of them, and what is left behind is a column of $A$ — one column per step.

**Steps 10 and 11** state the result in general and then in numbers. Step $10$ is the sentence $A\\mathbf{v} = v_1c_1 + v_2c_2 + v_3c_3$; step $11$ carries out the arithmetic and lands on the same pair of numbers the row-by-row route reached.

Use **Step** and **Back** on steps $7$ to $9$. They are the argument, and Run passes through them quickly.`,
      after: ``,
      link: '',
    },

    obj3: {
      title: `Reading the plane`,
      content: `The right-hand panel is not decoration; it is the same computation drawn.

During steps $1$ to $6$ the panel shows **dashed lines, not arrows**. A dashed vertical line means the first [coordinate](!/linear-algebra/vector-spaces/basis#4) is known; a dashed horizontal line means the second is. One line on its own fixes nothing — every point along it is still possible. Only when both lines are drawn do they cross at a single point, and only then is there a vector to draw. That is the honest picture of the row-by-row route: **no intermediate step of it is a real quantity**.

From step $7$ the panel changes character. Each regrouped column appears twice: dashed from the origin, which is the column of $A$ by itself, and solid, which is that same column stretched by its weight and laid tail to head on the previous arrow. The [direction](!/linear-algebra/vectors/properties#2) of the dashed arrow never changes. A negative weight sends the solid arrow backwards along the same line rather than into a new direction.

At the end three arrows run end to end from the origin to the answer. Every corner along that path is a genuine vector — a partial sum of columns — which is what the first route could not offer.`,
      after: ``,
      link: '',
    },

    obj4: {
      title: `Generating new numbers`,
      content: `**Generate random numbers** replaces $A$ and $\\mathbf{v}$ with a fresh pair and returns to step $0$. The numbers are not drawn freely: the generator re-rolls until the example is drawable.

Three constraints are enforced. **No weight is zero**, because a zero weight would collapse its arrow to a point with no direction to show and no segment to label. **No column of $A$ is the zero vector**, for the same reason. **No partial sum lands on the origin**, and the final answer is capped so the plot stays readable at a sensible scale.

None of this is a fact about matrix multiplication. A zero weight is perfectly legal and it is worth knowing what it does: the corresponding column contributes nothing, and the product is a combination of the remaining columns only. The constraint exists because the figure has to draw an arrow, not because the algebra objects.

The plot itself is measured from the container in real pixels, so the axes, the tick spacing and the plotted range all follow the numbers on screen. A wide answer widens the range rather than shrinking the drawing into a corner.`,
      after: ``,
      link: '',
    },

    obj5: {
      title: `Building AB by columns`,
      content: `The second tab replaces the vector with a matrix and changes nothing else about the argument.

Write $B$ as a list of its columns. Then $AB$ is the list of $A$ applied to each of them in turn: column $j$ of $AB$ is $A$ times column $j$ of $B$, which by the first tab is a weighted sum of the columns of $A$ with the entries of that column of $B$ as the weights.

$$AB = \\begin{bmatrix} A\\mathbf{b}_1 & A\\mathbf{b}_2 \\end{bmatrix}$$

So the whole product is built one column at a time, and each column is assembled exactly the way the first tab assembled $A\\mathbf{v}$. **The pieces are always the columns of the left factor; the weights always come from the right factor.**

The colours keep their meanings across the tabs. Blue is still the pieces being combined — here the columns of $A$ — and amber is still the weights, here a column of $B$. The result belongs to neither factor, so it carries no ownership colour at all and is drawn in navy behind a doubled bracket.

Every entry the definition would compute is computed. The reading only changes the order they are grouped in.`,
      after: ``,
      link: '',
    },

    obj6: {
      title: `Why the weight comes out in front`,
      content: `The regrouping steps are the only place an argument is made, so they are worth doing slowly on paper as well as on screen.

By the definition, entry $1$ of $A\\mathbf{v}$ is $a_{11}v_1 + a_{12}v_2 + a_{13}v_3$ and entry $2$ is $a_{21}v_1 + a_{22}v_2 + a_{23}v_3$. Line them up vertically and read a column of that arrangement instead of a row. The two terms in the first column are $a_{11}v_1$ and $a_{21}v_1$. They share the factor $v_1$, and what it multiplies is the pair $(a_{11}, a_{21})$ — which is column $1$ of $A$.

$$A\\mathbf{v} = v_1\\begin{bmatrix} a_{11} \\\\ a_{21} \\end{bmatrix} + v_2\\begin{bmatrix} a_{12} \\\\ a_{22} \\end{bmatrix} + v_3\\begin{bmatrix} a_{13} \\\\ a_{23} \\end{bmatrix}$$

Every row of $A$ meets the same entry of $\\mathbf{v}$, which is why the factor is shared down the whole column and why the column comes out whole rather than entry by entry.

Nothing was added to the definition. The same six products appear on both sides; only the grouping differs. That is the difference between a rule you apply and a statement you can see.`,
      after: ``,
      link: '',
    },

    obj7: {
      title: `Column space and solvability`,
      content: `Reading the product by columns answers a question the row-by-row rule cannot phrase.

Every possible $A\\mathbf{v}$ is a weighted sum of the columns of $A$, with the weights free to be anything. The set of all such sums is the **span** of the columns, called the **column space** of $A$. It is not a set of numbers you compute once; it is the entire reach of the matrix.

That settles when $A\\mathbf{x} = \\mathbf{b}$ has a solution. A solution is a choice of weights that lands on $\\mathbf{b}$, so the system is solvable exactly when $\\mathbf{b}$ lies in the [column space](!/linear-algebra/vector-spaces/fundamental-spaces#2), and unsolvable otherwise no matter how the arithmetic is arranged. With the $2 \\times 3$ matrix on this page the three columns are plane vectors, so unless they all lie along one line, their combinations already cover the whole plane and every $\\mathbf{b}$ is reachable.

The number of genuinely independent directions among the columns is the **rank**. Three columns spanning a plane means one of them is redundant — there is more than one way to reach the same point, which is where extra solutions come from.

**Span**, **column space**, **rank** and **solvability** are all one picture seen from different sides.`,
      after: ``,
      link: '',
    },

    obj8: {
      title: `Why A is two by three`,
      content: `The shape on this page is chosen so the figure can be drawn, and the choice is worth explaining because it is easy to think it is arbitrary.

Columns of $A$ have as many entries as $A$ has rows. Two rows means each column is a pair of numbers, which is a point in the plane and can be drawn. A matrix with three rows would have columns living in three [dimensions](!/linear-algebra/vector-spaces/dimension#1), and the plane picture would be gone.

The three columns are deliberate too. A [square matrix](!/linear-algebra/matrix/types#1) would let the eye slip into reading the picture as a grid of cells; a non-square one keeps the dimension argument visible. The vector must have one entry per column of $A$, because it supplies one weight per column — which is the real content of the rule that the inner dimensions must match. Hand the tool a vector of the wrong length and there is no weight for one of the columns, so the sum cannot be formed at all.

The answer has two entries, one per row of $A$. **Weights count columns; the answer counts rows.** That single sentence is the dimension rule stated without reference to any procedure.`,
      after: ``,
      link: '',
    },

    obj10: {
      title: `The empty bracket`,
      content: `Step $0$ is worth a moment rather than a click past.

The bracket for $A\\mathbf{v}$ already has its shape — two slots, one per row of $A$ — before a single number is known. The shape of a product is settled by the shapes of its factors, not by their contents, and that is why a vector of the wrong length is rejected before any arithmetic is attempted.`,
      after: `The plane is empty for a stricter reason. An arrow needs both coordinates before it can exist, and at step $0$ neither does. This is the honest picture of the computation: not a small answer or an approximate one, but no answer.

**Reset** returns here at any time with the same numbers on screen; **Generate random numbers** returns here with [a fresh pair](!#generating-new-numbers).

Press **Step** once and the first product lands — and the plane still cannot show you a vector, which is the subject of [one product at a time](!#one-product-at-a-time).`,
      link: '',
    },

    obj11: {
      title: `One product at a time`,
      content: `Steps $1$ to $6$ are the definition and nothing else. Each step multiplies one entry of a row of $A$ by one entry of $\\mathbf{v}$ and drops the result into its slot.

Six products, because a $2 \\times 3$ matrix against a three-entry vector has two rows of three terms each. Entry $1$ finishes at step $3$, entry $2$ at step $6$.`,
      after: `What the plane does during these six steps is the honest part. A dashed vertical line means the first coordinate is known; every point on that line is still a candidate. A dashed horizontal line means the second is known. **One line on its own rules nothing in — it only rules things out.** Only when both are drawn do they cross at a single point, and only then is there a vector to draw at all.

So the row-by-row route passes through no intermediate quantity that is itself a vector. It computes numbers, and the answer appears all at once when the last number lands. That is not a flaw in the rule; it is the difference between a procedure and a picture, and it is exactly what [lifting out a column](!#lifting-out-a-column) repairs.

[Reading the plane](!#reading-the-plane) treats the dashed-line stage and the arrow stage side by side.`,
      link: '',
    },

    obj12: {
      title: `Lifting out a column`,
      content: `Steps $7$ to $9$ are the argument. Nothing new is multiplied here — every product already exists, and all that changes is how they are grouped.

Two terms in the bracket share the factor $v_j$, because the definition pairs every row of $A$ with the same entry of $\\mathbf{v}$. Lift that factor out in front and what remains is the pair $(a_{1j}, a_{2j})$ — column $j$ of $A$, whole.`,
      after: `The plane makes the claim visible. Dashed from the origin is the column on its own, a direction that belongs to $A$ and to nothing else. Solid is that same column stretched by its weight and moved so its tail sits on the head of the previous arrow.

The dashed direction never changes as you step. A negative weight does not open a new direction — it sends the solid arrow backwards along the same line. That is the whole meaning of "the vector supplies only the weights".

Do these three steps with **Step** and **Back** rather than **Run**. They are one step per column, and they carry the entire argument of the page; [the controls](!#running-the-tool) are there for exactly this.`,
      link: '',
    },

    obj13: {
      title: `The statement and the arithmetic`,
      content: `The last two steps say the same thing twice, once in general and once in numbers.

Step $10$ is the sentence

$$A\\mathbf{v} = v_1c_1 + v_2c_2 + v_3c_3$$

with $c_j$ the $j$-th column of $A$. Step $11$ carries out the arithmetic and lands on the same pair of numbers the row-by-row route produced.`,
      after: `Both steps share one figure, because the plane is already complete at step $10$: three scaled columns laid tail to head, ending on the answer. The last step changes the algebra above the picture, not the picture.

Read the final figure against [the dashed-line stage](!#one-product-at-a-time) and the gain is obvious. Same endpoint, same eight-odd multiplications, but here **every corner along the path is a real vector** — a partial sum of columns. That is what makes the column reading say something about what the matrix *does*, rather than only about what it computes.

Where that leads is [column space and solvability](!#column-space-and-solvability).`,
      link: '',
    },

    obj14: {
      title: `Running the tool`,
      content: `**Run** plays forward from wherever you are and becomes **Pause** while it is playing. It advances a little under twice a second, which is fast enough to show the shape of the argument and too fast to check a step.

**Step** and **Back** move exactly one step. These are the ones that matter on steps $7$ to $9$: a regrouping is a claim, and a claim is easier to check held still.

**Reset** returns to step $0$ — [the empty bracket](!#the-empty-bracket) — without touching the numbers. It restarts the route, not the example.`,
      after: `The run does not loop. **Step** is disabled at step $11$ and **Back** at step $0$; pressing **Run** at the end starts over from the beginning.

Switching tabs also restarts, because a step number means something different in the matrix-by-matrix tab — see [building AB by columns](!#building-ab-by-columns).

The pips and the counter under the figure are position markers rather than controls: a pip is not clickable. [Stepping through Av](!#stepping-through-av) lists what each of the twelve steps does.`,
      link: '',
    },

    obj9: {
      title: `Where this leads`,
      content: `The column reading is the first step into the geometric side of linear algebra rather than the arithmetic side.

The immediate destinations are **column space**, **span**, **rank** and the solvability of $A\\mathbf{x} = \\mathbf{b}$, all of which were stated above in terms of weights on fixed directions.

Next is the fact that turns the reading into a tool. Take $\\mathbf{v}$ to be a standard [basis](!/linear-algebra/vector-spaces#2) vector — one entry equal to $1$ and the rest $0$. The weighted sum then keeps exactly one column and discards the others, so $A\\mathbf{e}_j$ is column $j$ of $A$. Read backwards, that says **the columns of a matrix are where the basis vectors land**. Building a [rotation](!/linear-algebra/transformations/geometric#3), a [reflection](!/linear-algebra/transformations/geometric#5) or a projection stops being a formula to memorise and becomes a decision about where to send $\\mathbf{e}_1$ and $\\mathbf{e}_2$, written down as columns.

The mirror of this argument [puts the vector on the left](!/linear-algebra/visual-tools/matrix-multiplication-rows), where the matrix hands over its rows instead. That direction leads to elementary matrices, row equivalence and elimination rather than to spans and column spaces, and [both readings meet](!/linear-algebra/visual-tools/matrix-multiplication-rows-columns) once neither side is a vector.`,
      after: ``,
      link: '',
    },
  }

  const faqQuestions = [
    {
      question: 'What does it mean to multiply a matrix by a vector using columns?',
      answer: 'It means reading the product as a weighted sum of the columns of the matrix. Each entry of the vector is a weight, it scales the whole column it belongs to, and the scaled columns are added. The result is identical to the row by row rule because the same products are computed; only the grouping changes.',
    },
    {
      question: 'Is the column reading a different rule from the definition?',
      answer: 'No. The visualizer computes every product the definition calls for and then lifts out the factor that two terms share. Nothing is assumed and nothing new is introduced, which is why the same numbers appear on both sides of the regrouping steps.',
    },
    {
      question: 'How does this extend from a vector to a second matrix?',
      answer: 'Treat the second matrix as a list of columns. Column j of the product is the first matrix applied to column j of the second, so the product is assembled one column at a time, each column being a weighted sum of the columns of the left factor.',
    },
    {
      question: 'Why is the matrix on this page two by three?',
      answer: 'Columns of a matrix have one entry per row. Two rows put every column in the plane, where it can be drawn as an arrow. Three columns keep the dimension argument visible and stop the picture from being read as a grid of cells.',
    },
    {
      question: 'What does the column reading tell me about solving a linear system?',
      answer: 'The set of all weighted sums of the columns is the column space. A system is solvable exactly when the target vector lies in that set, so solvability becomes a question about reach rather than about arithmetic.',
    },
  ]

  const seoData = {
    title: 'Matrix Multiplication by Columns | Av Visualizer',
    description: 'See a matrix times a vector built as a weighted sum of the columns of the matrix, step by step, with every scaled column drawn as an arrow in the plane.',
    keywords: keyWords.join(', '),
    url: '/linear-algebra/visual-tools/matrix-multiplication-columns',
    name: 'Matrix Multiplication by Columns',
    hubDescription: 'Build a matrix times a vector the way the definition says, then watch the same products regroup into whole columns. Each entry of the vector becomes a weight on one column of the matrix, and each scaled column is drawn in the plane as an arrow laid tail to head on the one before it. A second tab repeats the argument with a matrix on the right, assembling the product one column at a time. The reading leads straight to span, column space, rank and the question of when a system can be solved.',
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="20" width="11" height="11" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><rect x="10" y="31" width="11" height="11" fill="#85B7EB" stroke="#185FA5" stroke-width="0.8"/><rect x="21" y="20" width="11" height="11" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.8"/><rect x="21" y="31" width="11" height="11" fill="#B5D4F4" stroke="#185FA5" stroke-width="0.8"/><rect x="32" y="20" width="11" height="11" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><rect x="32" y="31" width="11" height="11" fill="#E6F1FB" stroke="#185FA5" stroke-width="0.8"/><text x="49" y="35" font-family="Georgia,serif" font-size="9" fill="#E6F1FB" text-anchor="middle">×</text><rect x="56" y="14" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="56" y="25" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><rect x="56" y="36" width="11" height="11" fill="#FAC775" stroke="#854F0B" stroke-width="0.9"/><text x="40" y="61" font-family="Georgia,serif" font-size="7.5" fill="#E6F1FB" text-anchor="middle" font-style="italic">Av by columns</text></svg>`,
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
        'Two tabs: a matrix times a vector, and a matrix times a second matrix read by columns',
        'Twelve-step run — six products from the definition, three regrouping steps, the general statement, then the arithmetic',
        'Run, Pause, Step, Back and Reset controls with step pips and a step counter',
        'Plane panel drawing each column of A dashed from the origin and solid when scaled by its weight, laid tail to head',
        'Dashed-line stage showing that no intermediate of the row-by-row route is itself a vector',
        'Random generation constrained so no weight is zero, no column is the zero vector and no partial sum sits on the origin',
        'Colour by role throughout: blue for the matrix and its columns, amber for the weights taken from the vector',
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
      relatedTools: getRelatedTools('linear-algebra-matrix-multiplication-columns'),
      keyWords,
      instructions,
      avCopy,
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
