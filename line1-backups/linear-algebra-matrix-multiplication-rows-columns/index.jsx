import Head from 'next/head'
import React from 'react'

import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import Sections from '@/app/components/page-components/section/Sections'
import SectionTableOfContents from '@/app/components/page-components/section/SectionTableofContents'
import ExplanationDetails from '@/app/components/ExplanationDetails'

import MatrixProductWrapper from '@/app/components/linear-algebra/multiplication/MatrixProductWrapper'
import MatrixProductVisualizer from '@/app/components/linear-algebra/multiplication/MatrixProductVisualizer'

import '@/pages/pages.css'

export default function MatrixMultiplicationRowsColumns({
  instructions,
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

  /* obj0 is the Key Terms slot. Tool pages do not carry one, so it is left
     empty and kept out of genericSections. */
  const genericSections = [
    plain('obj1', 'what-this-page-is-for'),
    plain('obj2', 'the-three-tabs'),
    plain('obj3', 'the-colour-swap'),
    plain('obj4', 'one-row-one-column-one-entry'),
    plain('obj5', 'why-two-by-two'),
    plain('obj6', 'neither-reading-is-half'),
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
              props: { reading: 'both', layout: 'compact' },
            },
            {
              key: 'columns',
              label: 'By columns of B',
              component: MatrixProductVisualizer,
              props: { reading: 'columns', layout: 'compact' },
            },
            {
              key: 'rows',
              label: 'By rows of A',
              component: MatrixProductVisualizer,
              props: { reading: 'rows', layout: 'compact' },
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

  const instructions = [
    'Three tabs, one product. **By both rows and columns** is the definition: one row of $A$ against one column of $B$, one entry of $AB$ per step. **By columns of B** and **By rows of A** each build $AB$ a whole slice at a time.',
    'Switching tabs restarts at step $0$, because a step number means a different thing in each reading.',
    '**Run** plays from the current step and becomes **Pause**. **Step** and **Back** move one step at a time.',
    'The **Steps** pips and the counter show the position. The number of steps changes with the tab, because the readings take different routes to the same product.',
    '**Reset** returns to step $0$ with the numbers unchanged.',
    '**Generate random numbers** rolls a fresh $A$ and $B$. No slice of $AB$ is allowed to land on the origin, so every column and every row of the product stays drawable.',
    'Colour marks the **role in the current reading**, never the letter. In the slice tabs, blue is whatever is supplying directions and amber whatever is supplying amounts; the two swap between the columns tab and the rows tab, and that swap is the lesson. In the both tab, blue is the row of $A$ and amber the column of $B$ in play — the two operands of one dot product.',
  ]

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

**By columns of B** builds $AB$ one column at a time. Column $j$ is a weighted sum of the columns of $A$, with the weights taken from column $j$ of $B$. When the run ends, every column of the product has been assembled from the same fixed set of directions.

**By rows of A** builds $AB$ one row at a time. Row $i$ is a weighted sum of the rows of $B$, with the weights taken from row $i$ of $A$. Again the directions are fixed across the whole run; only the weights change from slice to slice.

The step count differs between tabs. That is expected: the routes group the same multiplications differently, so they take a different number of moves to arrive at an identical matrix.`,
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
      after: ``,
      link: '',
    },

    obj5: {
      title: `Why two by two`,
      content: `The matrices here are $2 \\times 2$, and the choice is forced by what has to be drawn.

A product of an $m \\times k$ matrix with a $k \\times n$ matrix costs $m \\cdot k \\cdot n$ multiplications. At $2 \\times 2$ that is eight, which is enough to see structure and few enough to follow. A $2 \\times 3$ times $3 \\times 2$ product is eighteen, and the figure stops being readable well before the argument lands.

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
      sectionsContent,
      faqQuestions,
      schemas,
      seoData,
    },
  }
}
